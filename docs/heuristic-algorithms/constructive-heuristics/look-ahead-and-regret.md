---
title: "Look-ahead and regret"
---

# 29.10 Look-ahead and regret { #sez-sec-LOOK }

<div class="info-capitolo" markdown>

**Part 4 · Heuristic algorithms · Chapter 29** · [:material-book-open-variant: Chapter 29: Constructive](index.md) · [:material-file-pdf-box: Lecture notes, volume 4 (PDF)](../../pdf/lecture-notes-4-heuristic-algorithms.pdf) · [:material-pencil: Exercises: Constructive](../../exercises/constructive-heuristics.md) · [:material-gesture-tap: App: Bin packing heuristics](../../lab/bin-packing-heuristics.md) · [:material-gesture-tap: App: List scheduling and LPT](../../lab/list-scheduling-lpt.md)

</div>

- A greedy criterion asks: <em>which choice is best now?</em> Its myopia can be reduced by asking two different questions:

    - <strong>regret</strong>: <em>what do I lose if I postpone this choice?</em> An element that has a single good option should be served before it loses it; an element with many equivalent options can wait;

    - <strong>look-ahead</strong>: <em>where does this choice lead?</em> Each candidate is evaluated by completing the partial solution with a fast heuristic, and the candidate with the best completed solution is chosen.

    Both ideas cost more time per step than the plain greedy criterion, and both keep the essential feature of a constructive heuristic: the choice made is final.

## 29.10.1 Regret insertion { #sez-sec-REG }

- For an insertion heuristic, let $\Delta^{1}_q\le\Delta^{2}_q$ be the two smallest insertion costs of city $q$ over the edges of the current subtour (with $\Delta^2_q=\Delta^1_q$ if the subtour has a single edge). The <strong>regret</strong> of $q$ is

!!! chiave ""

    $$
    reg_q \;=\; \Delta^{2}_q - \Delta^{1}_q \;\ge\; 0 :
    $$

    the extra cost paid for $q$ if its best edge is used by another city before $q$ is inserted.

!!! chiave ""

    The <em>regret-2 insertion algorithm</em> (denoted by $REG_2$) is a constructive heuristic for the TSP. Starting from the subtour $(s)$, at each step it inserts the city with the <em>largest regret</em>, in case of ties the one with the smallest $\Delta^1_q$ and then the smallest index, into its edge of minimum insertion cost.

!!! algoritmo "Algorithm: Regret-2 Insertion"

    <div class="pseudocodice" markdown="0"><div class="pc" style="--liv:0"><strong>Input:</strong> TSP instance with <span class="arithmatex">\(n\)</span> cities, distances <span class="arithmatex">\(d[1..n][1..n]\)</span>; starting city <span class="arithmatex">\(s\)</span></div><div class="pc" style="--liv:0"><strong>Output:</strong> Tour <span class="arithmatex">\(\sigma[1..n]\)</span></div><div class="pc" style="--liv:0"><span class="pc-n">1</span><strong>Function</strong> Regret2Insertion(<span class="arithmatex">\(n, d, s\)</span>)</div><div class="pc" style="--liv:1"><span class="pc-n">2</span><span class="arithmatex">\(\sigma := (s)\)</span></div><div class="pc" style="--liv:1"><span class="pc-n">3</span><strong>for</strong> <span class="arithmatex">\(len := 1\)</span> <strong>to</strong> <span class="arithmatex">\(n-1\)</span> <strong>do</strong></div><div class="pc" style="--liv:2"><span class="pc-n">4</span><strong>for each</strong> city <span class="arithmatex">\(q\notin\sigma\)</span> <strong>do</strong></div><div class="pc" style="--liv:3"><span class="pc-n">5</span><span class="arithmatex">\(\Delta^1_q, \Delta^2_q :=\)</span> the two smallest values of <span class="arithmatex">\(\Delta(\sigma[a],q,\sigma[a+1])\)</span>, <span class="arithmatex">\(a=1,\dots,len\)</span></div><div class="pc" style="--liv:3"><span class="pc-n">6</span><span class="arithmatex">\(reg_q := \Delta^2_q-\Delta^1_q\)</span> <span class="pc-com">▹ regret of <span class="arithmatex">\(q\)</span></span></div><div class="pc" style="--liv:2"><span class="pc-n">7</span><strong>end</strong></div><div class="pc" style="--liv:2"><span class="pc-n">8</span><span class="arithmatex">\(k :=\)</span> the city with maximum <span class="arithmatex">\(reg_q\)</span> (ties: minimum <span class="arithmatex">\(\Delta^1_q\)</span>, then smallest index)</div><div class="pc" style="--liv:2"><span class="pc-n">9</span>insert <span class="arithmatex">\(k\)</span> into its edge of minimum insertion cost</div><div class="pc" style="--liv:1"><span class="pc-n">10</span><strong>end</strong></div><div class="pc" style="--liv:1"><span class="pc-n">11</span><strong>return</strong> <span class="arithmatex">\(\sigma\)</span></div></div>

<div class="colab-pulsanti" markdown="0"><span class="colab-etichetta">Run in Colab:</span><a class="colab-pulsante" href="https://colab.research.google.com/github/fabiofurini/combinatorial-optimization/blob/main/notebooks/constructive-heuristics_python.ipynb" target="_blank" rel="noopener" title="Open the Python notebook of the chapter in Google Colab">Python</a><a class="colab-pulsante" href="https://colab.research.google.com/github/fabiofurini/combinatorial-optimization/blob/main/notebooks/constructive-heuristics_cpp.ipynb" target="_blank" rel="noopener" title="Open the C++ notebook of the chapter in Google Colab">C++</a></div>

- Regret-$k$ heuristics generalize the idea, summing the differences between the best option and the $k-1$ next ones; they are widely used for vehicle routing problems, where a customer may have a single feasible route left (J.-Y. Potvin, J.-M. Rousseau, <em>A parallel route building algorithm for the vehicle routing and scheduling problem with time windows</em>, European Journal of Operational Research 66 (1993) 331–340). The same idea applies to any assignment-like construction, such as items to bins.

- As long as all the regrets are $0$, the tie-breaking rule makes $REG_2$ behave like $CI$.

<a id="box-22-ex-reg"></a>

!!! esempio "Example 29.16: $REG_2$ against $CI$ on the $6$-city instance"

    On the instance of [Example 29.11](the-travelling-salesman-problem-append-or-insert.md#box-15-ex-tsp6), from city $1$. In the first two steps all the regrets are $0$ (the subtours $(1)$ and $(1,6)$ have one edge, or two copies of the same edge), and both $REG_2$ and $CI$ insert city $6$ (cost $4$) and then city $3$ (cost $5$), obtaining $(1,3,6)$ of length $9$. At the third step the insertion costs on the edges $(1,3)$, $(3,6)$, $(6,1)$ are

    <div class="tabella" markdown="0"><table>
    <tr>
    <th>city <span class="arithmatex">\(q\)</span></th>
    <th>costs</th>
    <th><span class="arithmatex">\(\Delta^1_q\)</span></th>
    <th><span class="arithmatex">\(\Delta^2_q\)</span></th>
    <th><span class="arithmatex">\(reg_q\)</span></th>
    </tr>
    <tr>
    <td><span class="arithmatex">\(2\)</span></td>
    <td><span class="arithmatex">\((2,2,7)\)</span></td>
    <td><span class="arithmatex">\(2\)</span></td>
    <td><span class="arithmatex">\(2\)</span></td>
    <td><span class="arithmatex">\(0\)</span></td>
    </tr>
    <tr>
    <td><span class="arithmatex">\(4\)</span></td>
    <td><span class="arithmatex">\((4,7,8)\)</span></td>
    <td><span class="arithmatex">\(4\)</span></td>
    <td><span class="arithmatex">\(7\)</span></td>
    <td><span class="arithmatex">\(3\)</span></td>
    </tr>
    <tr>
    <td><span class="arithmatex">\(5\)</span></td>
    <td><span class="arithmatex">\((6,5,6)\)</span></td>
    <td><span class="arithmatex">\(5\)</span></td>
    <td><span class="arithmatex">\(6\)</span></td>
    <td><span class="arithmatex">\(1\)</span></td>
    </tr>
    </table></div>

    <strong>$CI$</strong> inserts city $2$, the cheapest, on the edge $(1,3)$. <strong>$REG_2$</strong> inserts city $4$, the one with the largest regret, on the edge $(1,3)$: this edge is the only good place for city $4$, while city $2$ has two equally good places and can wait. The two constructions then continue:

    <div class="tabella" markdown="0"><table>
    <tr>
    <th></th>
    <th><span class="arithmatex">\(CI\)</span></th>
    <th><span class="arithmatex">\(REG_2\)</span></th>
    </tr>
    <tr>
    <td>step 3</td>
    <td><span class="arithmatex">\(2\)</span> on <span class="arithmatex">\((1,3)\)</span>, cost <span class="arithmatex">\(2\)</span>: <span class="arithmatex">\((1,2,3,6)\)</span></td>
    <td><span class="arithmatex">\(4\)</span> on <span class="arithmatex">\((1,3)\)</span>, cost <span class="arithmatex">\(4\)</span>: <span class="arithmatex">\((1,4,3,6)\)</span></td>
    </tr>
    <tr>
    <td>step 4</td>
    <td><span class="arithmatex">\(4\)</span> on <span class="arithmatex">\((1,2)\)</span>, cost <span class="arithmatex">\(4\)</span>: <span class="arithmatex">\((1,4,2,3,6)\)</span></td>
    <td><span class="arithmatex">\(5\)</span> on <span class="arithmatex">\((3,6)\)</span>, cost <span class="arithmatex">\(5\)</span>: <span class="arithmatex">\((1,4,3,5,6)\)</span></td>
    </tr>
    <tr>
    <td>step 5</td>
    <td><span class="arithmatex">\(5\)</span> on <span class="arithmatex">\((3,6)\)</span>, cost <span class="arithmatex">\(5\)</span>: <span class="arithmatex">\((1,4,2,3,5,6)\)</span></td>
    <td><span class="arithmatex">\(2\)</span> on <span class="arithmatex">\((3,5)\)</span>, cost <span class="arithmatex">\(1\)</span>: <span class="arithmatex">\((1,4,3,2,5,6)\)</span></td>
    </tr>
    <tr>
    <td>length</td>
    <td><span class="arithmatex">\(4+5+2+4+5=20\)</span></td>
    <td><span class="arithmatex">\(4+5+4+5+1=19\)</span></td>
    </tr>
    </table></div>

    At step $4$ of $REG_2$ the costs of city $2$ on the edges of $(1,4,3,6)$ are $(6,2,2,7)$, regret $0$, and those of city $5$ are $(10,10,5,6)$, regret $1$: city $5$ goes first. City $2$, postponed twice, is finally inserted for $1$ instead of $2$, between cities $3$ and $5$. $REG_2(I)=19=z(I)$, while $CI(I)=20$.

## 29.10.2 Look-ahead: the pilot method { #sez-sec-PILOT }

!!! chiave ""

    The <em>pilot method</em> turns a constructive heuristic $\mathscr{H}$, the <em>pilot</em>, into a stronger one. At each step it tries every candidate: the partial solution extended with the candidate is completed by $\mathscr{H}$, and the candidate whose completed solution is best is added for good. With $NN$ as pilot (denoted by $PILOT$-$NN$), the candidates are the next cities of the tour.

!!! algoritmo "Algorithm: Pilot method with nearest neighbour"

    <div class="pseudocodice" markdown="0"><div class="pc" style="--liv:0"><strong>Input:</strong> TSP instance with <span class="arithmatex">\(n\)</span> cities, distances <span class="arithmatex">\(d[1..n][1..n]\)</span>; starting city <span class="arithmatex">\(s\)</span></div><div class="pc" style="--liv:0"><strong>Output:</strong> Tour <span class="arithmatex">\(\sigma[1..n]\)</span></div><div class="pc" style="--liv:0"><span class="pc-n">1</span><strong>Function</strong> PilotNN(<span class="arithmatex">\(n, d, s\)</span>)</div><div class="pc" style="--liv:1"><span class="pc-n">2</span><span class="arithmatex">\(\sigma := (s)\)</span></div><div class="pc" style="--liv:1"><span class="pc-n">3</span><strong>for</strong> <span class="arithmatex">\(len := 2\)</span> <strong>to</strong> <span class="arithmatex">\(n\)</span> <strong>do</strong></div><div class="pc" style="--liv:2"><span class="pc-n">4</span><strong>for each</strong> city <span class="arithmatex">\(q\notin\sigma\)</span> <strong>do</strong></div><div class="pc" style="--liv:3"><span class="pc-n">5</span><span class="arithmatex">\(\tau_q :=\)</span> the path <span class="arithmatex">\(\sigma\)</span> extended with <span class="arithmatex">\(q\)</span> and completed by <span class="arithmatex">\(NN\)</span> <span class="pc-com">▹ look ahead</span></div><div class="pc" style="--liv:2"><span class="pc-n">6</span><strong>end</strong></div><div class="pc" style="--liv:2"><span class="pc-n">7</span><span class="arithmatex">\(k :=\)</span> the city <span class="arithmatex">\(q\)</span> with minimum <span class="arithmatex">\(L(\tau_q)\)</span> (smallest index)</div><div class="pc" style="--liv:2"><span class="pc-n">8</span>append <span class="arithmatex">\(k\)</span> to <span class="arithmatex">\(\sigma\)</span> <span class="pc-com">▹ the choice is final</span></div><div class="pc" style="--liv:1"><span class="pc-n">9</span><strong>end</strong></div><div class="pc" style="--liv:1"><span class="pc-n">10</span><strong>return</strong> <span class="arithmatex">\(\sigma\)</span></div></div>

<div class="colab-pulsanti" markdown="0"><span class="colab-etichetta">Run in Colab:</span><a class="colab-pulsante" href="https://colab.research.google.com/github/fabiofurini/combinatorial-optimization/blob/main/notebooks/constructive-heuristics_python.ipynb" target="_blank" rel="noopener" title="Open the Python notebook of the chapter in Google Colab">Python</a><a class="colab-pulsante" href="https://colab.research.google.com/github/fabiofurini/combinatorial-optimization/blob/main/notebooks/constructive-heuristics_cpp.ipynb" target="_blank" rel="noopener" title="Open the C++ notebook of the chapter in Google Colab">C++</a></div>

- The pilot method is due to C. Duin and S. Voß (<em>The pilot method: a strategy for heuristic repetition with application to the Steiner problem in graphs</em>, Networks 34 (1999) 181–191). Each step runs the pilot once per candidate: with $NN$ as pilot the running time is $O(n^4)$ instead of $O(n^2)$.

- <strong>The pilot method is never worse than its pilot.</strong> At the first step, the candidate chosen by $NN$ is among those tried, and its completion is the $NN$ tour from $s$, so the best completion found has length at most $NN(I)$. At every later step, the completion of the chosen candidate is again among the completions tried at the next step (the candidate that $NN$ would append), so the length of the best completion never increases. The final tour is the last completion, hence $PILOT$-$NN(I)\le NN(I)$ from the same starting city.

<a id="box-23-ex-pilot"></a>

!!! esempio "Example 29.17: $PILOT$-$NN$ on the TSP reference instance"

    From city $1$, the candidates and their $NN$ completions are:

    <div class="tabella" markdown="0"><table>
    <tr>
    <th>partial path</th>
    <th>candidates: completed tour and length</th>
    <th>chosen</th>
    </tr>
    <tr>
    <td><span class="arithmatex">\((1)\)</span></td>
    <td><span class="arithmatex">\(2\)</span>: <span class="arithmatex">\((1,2,4,3,5)\)</span> <span class="arithmatex">\(28\)</span>; <span class="arithmatex">\(3\)</span>: <span class="arithmatex">\((1,3,2,4,5)\)</span> <span class="arithmatex">\(25\)</span>; <span class="arithmatex">\(4\)</span>: <span class="arithmatex">\((1,4,2,3,5)\)</span> <span class="arithmatex">\(25\)</span>; <span class="arithmatex">\(5\)</span>: <span class="arithmatex">\((1,5,2,4,3)\)</span> <span class="arithmatex">\(22\)</span></td>
    <td><span class="arithmatex">\(5\)</span></td>
    </tr>
    <tr>
    <td><span class="arithmatex">\((1,5)\)</span></td>
    <td><span class="arithmatex">\(2\)</span>: <span class="arithmatex">\((1,5,2,4,3)\)</span> <span class="arithmatex">\(22\)</span>; <span class="arithmatex">\(3\)</span>: <span class="arithmatex">\((1,5,3,2,4)\)</span> <span class="arithmatex">\(25\)</span>; <span class="arithmatex">\(4\)</span>: <span class="arithmatex">\((1,5,4,2,3)\)</span> <span class="arithmatex">\(25\)</span></td>
    <td><span class="arithmatex">\(2\)</span></td>
    </tr>
    <tr>
    <td><span class="arithmatex">\((1,5,2)\)</span></td>
    <td><span class="arithmatex">\(3\)</span>: <span class="arithmatex">\((1,5,2,3,4)\)</span> <span class="arithmatex">\(23\)</span>; <span class="arithmatex">\(4\)</span>: <span class="arithmatex">\((1,5,2,4,3)\)</span> <span class="arithmatex">\(22\)</span></td>
    <td><span class="arithmatex">\(4\)</span></td>
    </tr>
    <tr>
    <td><span class="arithmatex">\((1,5,2,4)\)</span></td>
    <td><span class="arithmatex">\(3\)</span>: <span class="arithmatex">\((1,5,2,4,3)\)</span> <span class="arithmatex">\(22\)</span></td>
    <td><span class="arithmatex">\(3\)</span></td>
    </tr>
    </table></div>

    $PILOT$-$NN$ goes first to city $5$, the <em>farthest</em> from city $1$, something $NN$ would never do, and returns $(1,5,2,4,3)$ with $L=9+4+3+4+2=22$, against $NN(I)=25$ from the same city. The optimum $18$ is not reached: the look-ahead is only as good as the pilot that performs it. On the $6$-city instance of [Example 29.11](the-travelling-salesman-problem-append-or-insert.md#box-15-ex-tsp6), $PILOT$-$NN$ from city $1$ gives $20$, against $25$ for $NN$.

---

**Next:** [29.11 What constructive heuristics give, and what they do not](what-constructive-heuristics-give-and-what-they-do-not.md)
