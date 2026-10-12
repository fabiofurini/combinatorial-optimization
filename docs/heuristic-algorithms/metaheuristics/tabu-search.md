---
title: "Tabu search"
---

# 32.5 Tabu search { #sez-sec-ts }

<div class="info-capitolo" markdown>

**Part 4 · Heuristic algorithms · Chapter 32** · [:material-book-open-variant: Chapter 32: Metaheuristics](index.md) · [:material-file-pdf-box: Lecture notes, volume 4 (PDF)](../../pdf/lecture-notes-4-heuristic-algorithms.pdf) · [:material-pencil: Exercises: Metaheuristics](../../exercises/metaheuristics.md)

</div>

!!! chiave ""

    <em>Tabu search</em> (denoted by $TS$) explores the neighbourhood of the current solution completely and moves to the <em>best</em> neighbour, even if it is worse than the current solution. To avoid going back to the solutions just visited, it keeps a short-term memory, the <em>tabu list</em>: the moves that would undo the recent moves are forbidden (<em>tabu</em>) for a number of iterations, the <em>tenure</em>, unless they lead to a solution better than the best one found (<em>aspiration criterion</em>).

- The pseudo-code of $TS$ for $P\,||\,C_{\max}$, with the move neighbourhood and the lexicographic comparison of Section [32.2.1](the-problems-and-the-assumptions.md#sez-sec-neigh), reads as follows; the attribute $(j,h)$ forbids moving job $j$ back to machine $h$.

!!! algoritmo "Algorithm: Tabu search for $P\,||\,C_{\max}$"

    <div class="pseudocodice" markdown="0"><div class="pc" style="--liv:0"><strong>Input:</strong> times <span class="arithmatex">\(t[1..n]\)</span>, <span class="arithmatex">\(m\)</span> machines, starting assignment <span class="arithmatex">\(mach[1..n]\)</span>, <span class="arithmatex">\(tenure\)</span>, <span class="arithmatex">\(maxIter\)</span></div><div class="pc" style="--liv:0"><strong>Output:</strong> best assignment found</div><div class="pc" style="--liv:0"><span class="pc-n">1</span><strong>Function</strong> TabuSearch(<span class="arithmatex">\(t, m, mach, tenure, maxIter\)</span>)</div><div class="pc" style="--liv:1"><span class="pc-n">2</span><span class="arithmatex">\(L :=\)</span> loads of <span class="arithmatex">\(mach\)</span>;  <span class="arithmatex">\(tabu[j][h] := 0\)</span> for all <span class="arithmatex">\(j\)</span>, <span class="arithmatex">\(h\)</span></div><div class="pc" style="--liv:1"><span class="pc-n">3</span><span class="arithmatex">\(best := mach\)</span>;  <span class="arithmatex">\(bestC := \max_h L[h]\)</span></div><div class="pc" style="--liv:1"><span class="pc-n">4</span><span class="arithmatex">\(\LB := \max\{\max_j t[j],\ \lceil \sum_j t[j]/m\rceil\}\)</span>
    <span class="arithmatex">\(it := 0\)</span> <span class="pc-com">▹ stop if reached</span></div><div class="pc" style="--liv:1"><span class="pc-n">5</span><strong>while</strong> <span class="arithmatex">\(it < maxIter\)</span> <strong>and</strong> <span class="arithmatex">\(bestC > \LB\)</span> <strong>do</strong></div><div class="pc" style="--liv:2"><span class="pc-n">6</span><span class="arithmatex">\(it := it+1\)</span>;  <span class="arithmatex">\(bj := 0\)</span> <span class="pc-com">▹ best non-tabu move <span class="arithmatex">\((bj,bh)\)</span></span></div><div class="pc" style="--liv:2"><span class="pc-n">7</span><strong>for</strong> <span class="arithmatex">\(j := 1\)</span> <strong>to</strong> <span class="arithmatex">\(n\)</span> <strong>do</strong></div><div class="pc" style="--liv:3"><span class="pc-n">8</span><strong>for</strong> <span class="arithmatex">\(h := 1\)</span> <strong>to</strong> <span class="arithmatex">\(m\)</span>, <span class="arithmatex">\(h\ne mach[j]\)</span> <strong>do</strong></div><div class="pc" style="--liv:4"><span class="pc-n">9</span><span class="arithmatex">\(L' :=\)</span> the loads after moving job <span class="arithmatex">\(j\)</span> from <span class="arithmatex">\(mach[j]\)</span> to <span class="arithmatex">\(h\)</span></div><div class="pc" style="--liv:4"><span class="pc-n">10</span><strong>if</strong> <span class="arithmatex">\(tabu[j][h]\ge it\)</span> <strong>and not</strong> <span class="arithmatex">\(\max_k L'[k] < bestC\)</span> <strong>then</strong> <strong>continue</strong> <span class="pc-com">▹ tabu</span></div><div class="pc" style="--liv:4"><span class="pc-n">11</span><strong>if</strong> <span class="arithmatex">\(bj=0\)</span> <strong>or</strong> <span class="arithmatex">\(L'\)</span> is lexicographically better than <span class="arithmatex">\(bL\)</span> <strong>then</strong> <span class="arithmatex">\((bj,bh,bL) := (j,h,L')\)</span></div><div class="pc" style="--liv:3"><span class="pc-n">12</span><strong>end</strong></div><div class="pc" style="--liv:2"><span class="pc-n">13</span><strong>end</strong></div><div class="pc" style="--liv:2"><span class="pc-n">14</span><strong>if</strong> <span class="arithmatex">\(bj=0\)</span> <strong>then</strong> <strong>break</strong></div><div class="pc" style="--liv:2"><span class="pc-n">15</span><span class="arithmatex">\(tabu[bj][mach[bj]] := it+tenure\)</span>
    <span class="arithmatex">\(mach[bj] := bh\)</span>;  <span class="arithmatex">\(L := bL\)</span> <span class="pc-com">▹ forbid going back even if worse</span></div><div class="pc" style="--liv:2"><span class="pc-n">16</span><strong>if</strong> <span class="arithmatex">\(\max_k L[k] < bestC\)</span> <strong>then</strong></div><div class="pc" style="--liv:3"><span class="pc-n">17</span><span class="arithmatex">\(bestC := \max_k L[k]\)</span>;  <span class="arithmatex">\(best := mach\)</span></div><div class="pc" style="--liv:2"><span class="pc-n">18</span><strong>end</strong></div><div class="pc" style="--liv:1"><span class="pc-n">19</span><strong>end</strong></div><div class="pc" style="--liv:1"><span class="pc-n">20</span><strong>return</strong> <span class="arithmatex">\(best\)</span></div></div>

<div class="colab-pulsanti" markdown="0"><span class="colab-etichetta">Run in Colab:</span><a class="colab-pulsante" href="https://colab.research.google.com/github/fabiofurini/combinatorial-optimization/blob/main/notebooks/metaheuristics_python.ipynb" target="_blank" rel="noopener" title="Open the Python notebook of the chapter in Google Colab">Python</a><a class="colab-pulsante" href="https://colab.research.google.com/github/fabiofurini/combinatorial-optimization/blob/main/notebooks/metaheuristics_cpp.ipynb" target="_blank" rel="noopener" title="Open the C++ notebook of the chapter in Google Colab">C++</a></div>

- Tabu search was proposed by Glover (1986); the reference book is Glover and Laguna, <em>Tabu Search</em>, Kluwer, 1997. Unlike $SA$, it is <strong>deterministic</strong>: it escapes from a local optimum because it always moves, to the least bad neighbour if no neighbour is better.

- Without memory, this rule would <strong>cycle</strong>: from a local optimum $S$ the search moves to the best neighbour $S'$, which is worse, and from $S'$ the best neighbour is typically $S$ again. The tabu list breaks the cycle by forbidding the reverse move.

- <strong>Attributes.</strong> Storing the visited solutions and comparing every neighbour with them would be too expensive. The tabu list stores <strong>attributes</strong> of the recent moves instead: here the pair $(j,h)$ “job $j$ has left machine $h$”; for the TSP, the edges just removed from the tour.

- An attribute forbids more than the single solution just left: every solution with job $j$ on machine $h$ is tabu, even the ones never visited. The <strong>aspiration criterion</strong> repairs this excess of caution: a tabu move is allowed if it leads to a solution better than the best one found, which certainly has not been visited.

- <strong>Tenure.</strong> If it is too short, the search can still cycle through longer cycles; if it is too long, too many moves are forbidden and the search is driven far from the good regions. Typical values are between $5$ and $20$, or proportional to $\sqrt{n}$; drawing the tenure at random in an interval at every iteration (robust tabu search, Taillard 1991) makes cycles unlikely.

- <strong>Stopping rule.</strong> A maximum number of iterations, or of iterations without improvement of the best solution. For $P\,||\,C_{\max}$ we can also stop when the makespan reaches the lower bound $\LB$: then the solution is optimal, and the search can only waste time.

- <strong>Long-term memory.</strong> Besides the tabu list (short-term memory), $TS$ can record how often each attribute appears in the visited solutions. <em>Diversification</em> penalizes the frequent attributes, to push the search toward unexplored regions; <em>intensification</em> restarts from the best solutions found, and fixes the attributes they share.

## 32.5.1 Example

<a id="box-6-ex-tsPCM"></a>

!!! esempio "Example 32.5: $TS$ on the $P\,||\,C_{\max}$ reference instance"

    We start from the solution computed by LPT in the notes on constructive heuristics, $J_1=\{1,5,7\}$, $J_2=\{2,6\}$, $J_3=\{3,4\}$, with loads $(11,8,8)$, $C_{\max}=11$ and $\sum_h L_h^2=249$. It is a local optimum for the move neighbourhood: at the first iteration the $14$ neighbours are

    <div class="tabella" markdown="0"><table>
    <tr>
    <th>move</th>
    <th><span class="arithmatex">\(1\to M_2\)</span></th>
    <th><span class="arithmatex">\(1\to M_3\)</span></th>
    <th><span class="arithmatex">\(2\to M_1\)</span></th>
    <th><span class="arithmatex">\(2\to M_3\)</span></th>
    <th><span class="arithmatex">\(3\to M_1\)</span></th>
    <th><span class="arithmatex">\(3\to M_2\)</span></th>
    <th><span class="arithmatex">\(4\to M_1\)</span></th>
    </tr>
    <tr>
    <td><span class="arithmatex">\((C_{\max},\sum_hL_h^2)\)</span></td>
    <td><span class="arithmatex">\((13,269)\)</span></td>
    <td><span class="arithmatex">\((13,269)\)</span></td>
    <td><span class="arithmatex">\((16,329)\)</span></td>
    <td><span class="arithmatex">\((13,299)\)</span></td>
    <td><span class="arithmatex">\((15,305)\)</span></td>
    <td><span class="arithmatex">\((12,281)\)</span></td>
    <td><span class="arithmatex">\((15,305)\)</span></td>
    </tr>
    <tr>
    <td>move</td>
    <td><span class="arithmatex">\(4\to M_2\)</span></td>
    <td><span class="arithmatex">\(5\to M_2\)</span></td>
    <td><span class="arithmatex">\(5\to M_3\)</span></td>
    <td><span class="arithmatex">\(6\to M_1\)</span></td>
    <td><span class="arithmatex">\(6\to M_3\)</span></td>
    <td><span class="arithmatex">\(7\to M_2\)</span></td>
    <td><span class="arithmatex">\(7\to M_3\)</span></td>
    </tr>
    <tr>
    <td><span class="arithmatex">\((C_{\max},\sum_hL_h^2)\)</span></td>
    <td><span class="arithmatex">\((12,281)\)</span></td>
    <td><span class="arithmatex">\((11,249)\)</span></td>
    <td><span class="arithmatex">\((11,249)\)</span></td>
    <td><span class="arithmatex">\((14,285)\)</span></td>
    <td><span class="arithmatex">\((11,267)\)</span></td>
    <td><span class="arithmatex">\((11,249)\)</span></td>
    <td><span class="arithmatex">\((11,249)\)</span></td>
    </tr>
    </table></div>

    No neighbour has $C_{\max}<11$, and the four best ones have $C_{\max}=11$ and $\sum_hL_h^2=249$, as the current solution: a local search stops here. $TS$, with $tenure=6$, moves instead to the best non-tabu neighbour (the first of the four, job $5$ to $M_2$), and continues:

    <div class="tabella" markdown="0"><table>
    <tr>
    <th>it</th>
    <th>move</th>
    <th>loads</th>
    <th><span class="arithmatex">\(C_{\max}\)</span></th>
    <th><span class="arithmatex">\(\sum_h L_h^2\)</span></th>
    <th><span class="arithmatex">\(bestC\)</span></th>
    <th>new tabu attribute</th>
    </tr>
    <tr>
    <td><span class="arithmatex">\(1\)</span></td>
    <td>job <span class="arithmatex">\(5\)</span>: <span class="arithmatex">\(M_1\to M_2\)</span></td>
    <td><span class="arithmatex">\((8,11,8)\)</span></td>
    <td><span class="arithmatex">\(11\)</span></td>
    <td><span class="arithmatex">\(249\)</span></td>
    <td><span class="arithmatex">\(11\)</span></td>
    <td><span class="arithmatex">\((5,M_1)\)</span> until it. <span class="arithmatex">\(7\)</span></td>
    </tr>
    <tr>
    <td><span class="arithmatex">\(2\)</span></td>
    <td>job <span class="arithmatex">\(5\)</span>: <span class="arithmatex">\(M_2\to M_3\)</span></td>
    <td><span class="arithmatex">\((8,8,11)\)</span></td>
    <td><span class="arithmatex">\(11\)</span></td>
    <td><span class="arithmatex">\(249\)</span></td>
    <td><span class="arithmatex">\(11\)</span></td>
    <td><span class="arithmatex">\((5,M_2)\)</span> until it. <span class="arithmatex">\(8\)</span></td>
    </tr>
    <tr>
    <td><span class="arithmatex">\(3\)</span></td>
    <td>job <span class="arithmatex">\(6\)</span>: <span class="arithmatex">\(M_2\to M_1\)</span></td>
    <td><span class="arithmatex">\((11,5,11)\)</span></td>
    <td><span class="arithmatex">\(11\)</span></td>
    <td><span class="arithmatex">\(267\)</span></td>
    <td><span class="arithmatex">\(11\)</span></td>
    <td><span class="arithmatex">\((6,M_2)\)</span> until it. <span class="arithmatex">\(9\)</span></td>
    </tr>
    <tr>
    <td><span class="arithmatex">\(4\)</span></td>
    <td>job <span class="arithmatex">\(7\)</span>: <span class="arithmatex">\(M_1\to M_2\)</span></td>
    <td><span class="arithmatex">\((8,8,11)\)</span></td>
    <td><span class="arithmatex">\(11\)</span></td>
    <td><span class="arithmatex">\(249\)</span></td>
    <td><span class="arithmatex">\(11\)</span></td>
    <td><span class="arithmatex">\((7,M_1)\)</span> until it. <span class="arithmatex">\(10\)</span></td>
    </tr>
    <tr>
    <td><span class="arithmatex">\(5\)</span></td>
    <td>job <span class="arithmatex">\(3\)</span>: <span class="arithmatex">\(M_3\to M_1\)</span></td>
    <td><span class="arithmatex">\((12,8,7)\)</span></td>
    <td><span class="arithmatex">\(12\)</span></td>
    <td><span class="arithmatex">\(257\)</span></td>
    <td><span class="arithmatex">\(11\)</span></td>
    <td><span class="arithmatex">\((3,M_3)\)</span> until it. <span class="arithmatex">\(11\)</span></td>
    </tr>
    <tr>
    <td><span class="arithmatex">\(6\)</span></td>
    <td>job <span class="arithmatex">\(6\)</span>: <span class="arithmatex">\(M_1\to M_3\)</span></td>
    <td><span class="arithmatex">\((9,8,10)\)</span></td>
    <td><span class="arithmatex">\(10\)</span></td>
    <td><span class="arithmatex">\(245\)</span></td>
    <td><span class="arithmatex">\(10\)</span></td>
    <td><span class="arithmatex">\((6,M_1)\)</span> until it. <span class="arithmatex">\(12\)</span></td>
    </tr>
    <tr>
    <td><span class="arithmatex">\(7\)</span></td>
    <td>job <span class="arithmatex">\(4\)</span>: <span class="arithmatex">\(M_3\to M_2\)</span></td>
    <td><span class="arithmatex">\((9,12,6)\)</span></td>
    <td><span class="arithmatex">\(12\)</span></td>
    <td><span class="arithmatex">\(261\)</span></td>
    <td><span class="arithmatex">\(10\)</span></td>
    <td><span class="arithmatex">\((4,M_3)\)</span> until it. <span class="arithmatex">\(13\)</span></td>
    </tr>
    <tr>
    <td><span class="arithmatex">\(8\)</span></td>
    <td>job <span class="arithmatex">\(7\)</span>: <span class="arithmatex">\(M_2\to M_3\)</span></td>
    <td><span class="arithmatex">\((9,9,9)\)</span></td>
    <td><span class="arithmatex">\(9\)</span></td>
    <td><span class="arithmatex">\(243\)</span></td>
    <td><span class="arithmatex">\(9\)</span></td>
    <td><span class="arithmatex">\((7,M_2)\)</span> until it. <span class="arithmatex">\(14\)</span></td>
    </tr>
    </table></div>

    - At iteration $2$ the best neighbour would move job $5$ back to $M_1$, returning to the starting solution: the move is tabu (attribute $(5,M_1)$ until iteration $7$), and the search moves job $5$ to $M_3$.

    - At iteration $5$ the four neighbours with $C_{\max}=11$ are all tabu, and none satisfies the aspiration criterion ($C_{\max}<bestC=11$): the best non-tabu move <strong>worsens</strong> the makespan to $12$. This is how $TS$ leaves the plateau.

    - At iteration $6$ the makespan drops to $10$, and at iteration $8$ to $9$: $C_{\max}=\LB=9$, so the solution $J_1=\{1,3\}$, $J_2=\{2,4\}$, $J_3=\{5,6,7\}$ is optimal and the search stops: $TS(I)=9=z(I)$.

![Figure 6](../../img/metaheuristics/fig06.svg){ .fig loading=lazy  }

![Figure 7](../../img/metaheuristics/fig07.svg){ .fig loading=lazy  }

![Figure 8](../../img/metaheuristics/fig08.svg){ .fig loading=lazy  }

- The figure shows the Gantt charts of the starting solution, of the solution after the worsening move of iteration $5$ (the moved job in orange), and of the optimal solution reached at iteration $8$.

- With $tenure\le 5$, $TS$ does not reach the optimum on this instance within $50$ iterations: the tabu list is too short to prevent the search from going back to the plateau of makespan $11$.

## 32.5.2 Tabu search for the TSP, and the effect of the tenure { #sez-sec-ts-tsp }

- For the TSP with the 2-opt neighbourhood, the natural attributes are the <strong>edges</strong>: when a move removes the edges $(\sigma_i,\sigma_{i+1})$ and $(\sigma_j,\sigma_{j+1})$, these two edges may not be added back to the tour for $tenure$ iterations, unless the move gives a tour shorter than the best one. Everything else is as in the pseudo-code of Section [32.5](#sez-sec-ts): at every iteration all the $\frac{n(n-3)}{2}$ moves are evaluated in $O(1)$ each, and the best non-tabu one is performed.

- The tables report the result of $TS$ on the medium instances, from the nearest neighbour tour ($326$) for TSP20 with $200$ iterations, and from the LPT solution ($73$) for PCM15 with $300$ iterations, for several values of the tenure; for PCM15 the table also gives the number of iterations performed ($300$ unless the lower bound is reached).

<div class="tabella" markdown="0"><table>
<tr>
<th colspan="7">TSP20: <span class="arithmatex">\(TS\)</span> with 2-opt, <span class="arithmatex">\(200\)</span> iterations (<span class="arithmatex">\(z(I)=291\)</span>)</th>
</tr>
<tr>
<td><span class="arithmatex">\(tenure\)</span></td>
<td><span class="arithmatex">\(0\)</span></td>
<td><span class="arithmatex">\(1\)</span></td>
<td><span class="arithmatex">\(2\)</span></td>
<td><span class="arithmatex">\(5\)</span></td>
<td><span class="arithmatex">\(10\)</span></td>
<td><span class="arithmatex">\(20\)</span></td>
</tr>
<tr>
<td>best length</td>
<td><span class="arithmatex">\(319\)</span></td>
<td><span class="arithmatex">\(291\)</span></td>
<td><span class="arithmatex">\(291\)</span></td>
<td><span class="arithmatex">\(291\)</span></td>
<td><span class="arithmatex">\(291\)</span></td>
<td><span class="arithmatex">\(291\)</span></td>
</tr>
</table></div>

<div class="tabella" markdown="0"><table>
<tr>
<th colspan="11">PCM15: <span class="arithmatex">\(TS\)</span> with the move neighbourhood, at most <span class="arithmatex">\(300\)</span> iterations (<span class="arithmatex">\(z(I)=69\)</span>)</th>
</tr>
<tr>
<td><span class="arithmatex">\(tenure\)</span></td>
<td><span class="arithmatex">\(0\)</span></td>
<td><span class="arithmatex">\(1\)</span></td>
<td><span class="arithmatex">\(2\)</span></td>
<td><span class="arithmatex">\(3\)</span></td>
<td><span class="arithmatex">\(5\)</span></td>
<td><span class="arithmatex">\(7\)</span></td>
<td><span class="arithmatex">\(10\)</span></td>
<td><span class="arithmatex">\(15\)</span></td>
<td><span class="arithmatex">\(20\)</span></td>
<td><span class="arithmatex">\(30\)</span></td>
</tr>
<tr>
<td>best <span class="arithmatex">\(C_{\max}\)</span></td>
<td><span class="arithmatex">\(73\)</span></td>
<td><span class="arithmatex">\(73\)</span></td>
<td><span class="arithmatex">\(73\)</span></td>
<td><span class="arithmatex">\(73\)</span></td>
<td><span class="arithmatex">\(73\)</span></td>
<td><span class="arithmatex">\(72\)</span></td>
<td><span class="arithmatex">\(71\)</span></td>
<td><span class="arithmatex">\(69\)</span></td>
<td><span class="arithmatex">\(70\)</span></td>
<td><span class="arithmatex">\(70\)</span></td>
</tr>
<tr>
<td>iterations</td>
<td><span class="arithmatex">\(300\)</span></td>
<td><span class="arithmatex">\(300\)</span></td>
<td><span class="arithmatex">\(300\)</span></td>
<td><span class="arithmatex">\(300\)</span></td>
<td><span class="arithmatex">\(300\)</span></td>
<td><span class="arithmatex">\(300\)</span></td>
<td><span class="arithmatex">\(300\)</span></td>
<td><span class="arithmatex">\(231\)</span></td>
<td><span class="arithmatex">\(300\)</span></td>
<td><span class="arithmatex">\(300\)</span></td>
</tr>
</table></div>

- With $tenure=0$ there is no memory, and $TS$ cycles: on TSP20 it never leaves the first 2-opt local optimum. On PCM15 the move neighbourhood has a large plateau, and $TS$ needs a long tabu list to cross it; but a tabu list that is too long forbids too much, and with $tenure\ge 20$ the optimum is lost again. The tenure must be tuned, and its best value depends on the problem and on the instance.

---

**Next:** [32.6 Iterated local search](iterated-local-search.md)
