---
title: "Large neighbourhood search"
---

# 32.9 Large neighbourhood search { #sez-sec-lns }

<div class="info-capitolo" markdown>

**Part 4 · Heuristic algorithms · Chapter 32** · [:material-book-open-variant: Chapter 32: Metaheuristics](index.md) · [:material-file-pdf-box: Lecture notes, volume 4 (PDF)](../../pdf/lecture-notes-4-heuristic-algorithms.pdf) · [:material-presentation: Slides (1/2)](../../pdf/slides-metaheuristics-1.pdf) · [:material-presentation: Slides (2/2)](../../pdf/slides-metaheuristics-2.pdf) · [:material-pencil: Exercises: Metaheuristics](../../exercises/metaheuristics.md) · [:material-gesture-tap: App: TSP: simulated annealing and tabu search](../../lab/simulated-annealing-tabu-search.md)

</div>

!!! chiave ""

    <em>Large neighbourhood search</em> (denoted by $LNS$) improves a solution by <em>destroying</em> a part of it and <em>repairing</em> it: a destroy method removes some elements (items, cities, jobs) from the current solution, a repair method reinserts them, and the new solution replaces the current one if an acceptance criterion is satisfied. The neighbourhood of a solution is the set of all the solutions that destroy and repair can produce, and it is <em>large</em>.

- The pseudo-code of $LNS$ for the TSP, which removes $q$ random cities and reinserts them by cheapest insertion, reads as follows:

!!! algoritmo "Algorithm: Large neighbourhood search for the TSP"

    <div class="pseudocodice" markdown="0"><div class="pc" style="--liv:0"><strong>Input:</strong> distances <span class="arithmatex">\(d\)</span>, starting tour <span class="arithmatex">\(\sigma\)</span>, number <span class="arithmatex">\(q\)</span> of cities to remove, number of iterations <span class="arithmatex">\(maxIter\)</span></div><div class="pc" style="--liv:0"><strong>Output:</strong> the current tour at the end</div><div class="pc" style="--liv:0"><span class="pc-n">1</span><strong>Function</strong> LNS(<span class="arithmatex">\(d, \sigma, q, maxIter\)</span>)</div><div class="pc" style="--liv:1"><span class="pc-n">2</span><span class="arithmatex">\(cur := \sigma\)</span>;  <span class="arithmatex">\(lcur := L(cur)\)</span></div><div class="pc" style="--liv:1"><span class="pc-n">3</span><strong>for</strong> <span class="arithmatex">\(it := 1\)</span> <strong>to</strong> <span class="arithmatex">\(maxIter\)</span> <strong>do</strong></div><div class="pc" style="--liv:2"><span class="pc-n">4</span><span class="arithmatex">\(nw := cur\)</span></div><div class="pc" style="--liv:2"><span class="pc-n">5</span><span class="arithmatex">\(removed := \textsc{RandomRemoval}(nw, q)\)</span>
    <span class="arithmatex">\(\textsc{CheapestInsertionRepair}(nw, removed)\)</span> <span class="pc-com">▹ destroy repair</span></div><div class="pc" style="--liv:2"><span class="pc-n">6</span><strong>if</strong> <span class="arithmatex">\(L(nw) < lcur\)</span> <strong>then</strong> <span class="arithmatex">\(cur := nw\)</span>;  <span class="arithmatex">\(lcur := L(nw)\)</span> <span class="pc-com">▹ acceptance</span></div><div class="pc" style="--liv:1"><span class="pc-n">7</span><strong>end</strong></div><div class="pc" style="--liv:1"><span class="pc-n">8</span><strong>return</strong> <span class="arithmatex">\(cur\)</span></div><div class="pc" style="--liv:0"><span class="pc-n">9</span><strong>Function</strong> RandomRemoval(<span class="arithmatex">\(\sigma, q\)</span>)</div><div class="pc" style="--liv:1"><span class="pc-n">10</span><strong>for</strong> <span class="arithmatex">\(s := 1\)</span> <strong>to</strong> <span class="arithmatex">\(q\)</span> <strong>do</strong></div><div class="pc" style="--liv:2"><span class="pc-n">11</span><span class="arithmatex">\(k := 2+\lfloor\textsc{Rand}()\cdot(|\sigma|-1)\rfloor\)</span>
    append <span class="arithmatex">\(\sigma[k]\)</span> to <span class="arithmatex">\(removed\)</span>, and delete it from <span class="arithmatex">\(\sigma\)</span> <span class="pc-com">▹ city <span class="arithmatex">\(1\)</span> is never removed</span></div><div class="pc" style="--liv:1"><span class="pc-n">12</span><strong>end</strong></div><div class="pc" style="--liv:1"><span class="pc-n">13</span><strong>return</strong> <span class="arithmatex">\(removed\)</span></div><div class="pc" style="--liv:0"><span class="pc-n">14</span><strong>Function</strong> CheapestInsertionRepair(<span class="arithmatex">\(\sigma, removed\)</span>)</div><div class="pc" style="--liv:1"><span class="pc-n">15</span><strong>for each</strong> city <span class="arithmatex">\(v\)</span> of <span class="arithmatex">\(removed\)</span>, in the order of removal <strong>do</strong></div><div class="pc" style="--liv:2"><span class="pc-n">16</span>insert <span class="arithmatex">\(v\)</span> between the consecutive cities <span class="arithmatex">\(a\)</span>, <span class="arithmatex">\(b\)</span> of <span class="arithmatex">\(\sigma\)</span> of minimum <span class="arithmatex">\(d_{av}+d_{vb}-d_{ab}\)</span></div><div class="pc" style="--liv:1"><span class="pc-n">17</span><strong>end</strong></div></div>

<div class="colab-pulsanti" markdown="0"><span class="colab-etichetta">Run in Colab:</span><a class="colab-pulsante" href="https://colab.research.google.com/github/fabiofurini/combinatorial-optimization/blob/main/notebooks/metaheuristics_python.ipynb" target="_blank" rel="noopener" title="Open the Python notebook of the chapter in Google Colab">Python</a><a class="colab-pulsante" href="https://colab.research.google.com/github/fabiofurini/combinatorial-optimization/blob/main/notebooks/metaheuristics_cpp.ipynb" target="_blank" rel="noopener" title="Open the C++ notebook of the chapter in Google Colab">C++</a></div>

- $LNS$ was introduced by Shaw (1998) for vehicle routing problems, where the repair was done by constraint programming. The <strong>size</strong> of the neighbourhood grows very quickly with the number $q$ of removed elements: for the TSP there are $\binom{n-1}{q}$ ways to choose the removed cities, and many ways to reinsert them. Such a neighbourhood cannot be listed and evaluated move by move, as in a local search: it is explored <strong>implicitly</strong>, by the repair method.

- The repair method is a <strong>sub-algorithm</strong>: a constructive heuristic (cheapest insertion, FFD), or an <em>exact</em> algorithm for the subproblem left by the destroy method. The stronger the repair, the better the best neighbour found; the larger $q$, the larger the neighbourhood, and the more expensive its exploration.

- The destroy method diversifies (it is usually random, and $q$ controls how far the search goes); the repair method intensifies (it rebuilds the destroyed part in the best way it can). Removing <em>related</em> elements (cities close to each other, items of the same bins) makes the repair more effective than removing unrelated ones, which can only be put back where they were.

<a id="box-10-ex-lnsTSP"></a>

!!! esempio "Example 32.9: $LNS$ on the TSP reference instance"

    From the nearest neighbour tour $(1,3,2,4,5)$ of length $25$, with $q=2$ and $seed=1$. The first random number $0.0000$ removes the city in position $2+\lfloor 4\cdot 0.0000\rfloor=2$, city $3$; the partial tour is $(1,2,4,5)$, and $0.1315$ removes the city in position $2+\lfloor 3\cdot 0.1315\rfloor=2$, city $2$. The partial tour $(1,4,5)$ has length $2+7+9=18$. Cheapest insertion of city $3$:

    $$
    (1,4):\ d_{13}+d_{34}-d_{14}=2+4-2=4,\qquad
    (4,5):\ 4+7-7=4,\qquad
    (5,1):\ 7+2-9=0,
    $$

    so city $3$ goes between $5$ and $1$: $(1,4,5,3)$. Cheapest insertion of city $2$:

    $$
    \begin{gathered}
    (1,4):\ 5+3-2=6,\qquad (4,5):\ 3+4-7=0,\qquad (5,3):\ 4+4-7=1,\\
    (3,1):\ 4+5-2=7,
    \end{gathered}
    $$

    so city $2$ goes between $4$ and $5$: $(1,4,2,5,3)$, of length $18$, accepted. It is the optimal tour, traversed in the opposite direction: one destroy-and-repair step has changed four edges of the tour.

## 32.9.1 Large neighbourhood search for the BPP: heuristic and exact repair { #sez-sec-lns-bpp }

- For the BPP the natural destroy method <strong>empties bins</strong>: the least loaded bin, which is the one we would like to get rid of, and $q-1$ other bins chosen at random. The repair method repacks the removed items into new bins, while the other bins are kept as they are. The new packing is accepted if it uses fewer bins, or the same number of bins and a value of the auxiliary objective $\sum_b(\sum_{j\in P_b}w_j)^2$ not smaller: on the plateaus of the flat objective, the search moves toward fuller bins.

- The repair solves a <strong>BPP subproblem</strong>, on the removed items only, and can do it in two ways: with FFD, or <strong>exactly</strong>, by a branch-and-bound that tries every bin for every item and keeps the packing with the fewest bins. The subproblem has only the items of $q$ bins, so an exact repair is affordable.

!!! algoritmo "Algorithm: Large neighbourhood search for the BPP"

    <div class="pseudocodice" markdown="0"><div class="pc" style="--liv:0"><strong>Input:</strong> weights <span class="arithmatex">\(w[1..n]\)</span>, capacity <span class="arithmatex">\(c\)</span>, packing <span class="arithmatex">\(bin[1..n]\)</span> with <span class="arithmatex">\(nb\)</span> bins, <span class="arithmatex">\(q\)</span>, <span class="arithmatex">\(exact\)</span>, <span class="arithmatex">\(maxIter\)</span></div><div class="pc" style="--liv:0"><strong>Output:</strong> a packing <span class="arithmatex">\(bin\)</span> and its number of bins <span class="arithmatex">\(nb\)</span></div><div class="pc" style="--liv:0"><span class="pc-n">1</span><strong>Function</strong> LNS-BPP(<span class="arithmatex">\(w, c, bin, nb, q, exact, maxIter\)</span>)</div><div class="pc" style="--liv:1"><span class="pc-n">2</span><span class="arithmatex">\(\LB := \lceil \sum_j w[j]/c\rceil\)</span>;  <span class="arithmatex">\(it := 0\)</span></div><div class="pc" style="--liv:1"><span class="pc-n">3</span><strong>while</strong> <span class="arithmatex">\(it < maxIter\)</span> <strong>and</strong> <span class="arithmatex">\(nb > \LB\)</span> <strong>do</strong></div><div class="pc" style="--liv:2"><span class="pc-n">4</span><span class="arithmatex">\(it := it+1\)</span></div><div class="pc" style="--liv:2"><span class="pc-n">5</span><span class="arithmatex">\(empty :=\)</span> the least loaded bin and <span class="arithmatex">\(q-1\)</span> other bins at random
    <span class="arithmatex">\(items :=\)</span> the items packed in the bins of <span class="arithmatex">\(empty\)</span> <span class="pc-com">▹ destroy</span></div><div class="pc" style="--liv:2"><span class="pc-n">6</span><span class="arithmatex">\(newbin :=\)</span> the other bins, renumbered <span class="arithmatex">\(1,\dots,nb-q\)</span></div><div class="pc" style="--liv:2"><span class="pc-n">7</span><strong>if</strong> <span class="arithmatex">\(exact\)</span> <strong>then</strong> pack <span class="arithmatex">\(items\)</span> optimally in <span class="arithmatex">\(k\)</span> new bins <strong>else</strong> pack <span class="arithmatex">\(items\)</span> by FFD in <span class="arithmatex">\(k\)</span> new bins</div><div class="pc" style="--liv:2"><span class="pc-n">8</span><span class="arithmatex">\(nb' := nb-q+k\)</span></div><div class="pc" style="--liv:2"><span class="pc-n">9</span><strong>if</strong> <span class="arithmatex">\(nb' < nb\)</span> <strong>or</strong> (<span class="arithmatex">\(nb'=nb\)</span> <strong>and</strong> <span class="arithmatex">\(\sum_b (\text{load of } b \text{ in } newbin)^2 \ge \sum_b (\text{load of } b \text{ in } bin)^2\)</span>) <strong>then</strong></div><div class="pc" style="--liv:3"><span class="pc-n">10</span><span class="arithmatex">\(bin := newbin\)</span>;  <span class="arithmatex">\(nb := nb'\)</span> <span class="pc-com">▹ acceptance</span></div><div class="pc" style="--liv:2"><span class="pc-n">11</span><strong>end</strong></div><div class="pc" style="--liv:1"><span class="pc-n">12</span><strong>end</strong></div><div class="pc" style="--liv:1"><span class="pc-n">13</span><strong>return</strong> <span class="arithmatex">\(bin\)</span>, <span class="arithmatex">\(nb\)</span></div></div>

<div class="colab-pulsanti" markdown="0"><span class="colab-etichetta">Run in Colab:</span><a class="colab-pulsante" href="https://colab.research.google.com/github/fabiofurini/combinatorial-optimization/blob/main/notebooks/metaheuristics_python.ipynb" target="_blank" rel="noopener" title="Open the Python notebook of the chapter in Google Colab">Python</a><a class="colab-pulsante" href="https://colab.research.google.com/github/fabiofurini/combinatorial-optimization/blob/main/notebooks/metaheuristics_cpp.ipynb" target="_blank" rel="noopener" title="Open the C++ notebook of the chapter in Google Colab">C++</a></div>

<a id="box-11-ex-lnsBPP"></a>

!!! esempio "Example 32.10: $LNS$ on the BPP reference instance"

    We start from the packing computed by First Fit, $P_1=\{1,4\}$, $P_2=\{2,5\}$, $P_3=\{3\}$, $P_4=\{6\}$, with loads $(7,6,5,3)$, and use $q=2$, repair by FFD and $seed=3$ (random numbers $0.0000$, $0.3946$, $0.2668$, $0.3760$). At every iteration the least loaded bin is emptied, together with the bin in position $1+\lfloor 3u\rfloor$ among the other three.

    <div class="tabella" markdown="0"><table>
    <tr>
    <th>it</th>
    <th>loads</th>
    <th>emptied</th>
    <th>items</th>
    <th>FFD</th>
    <th><span class="arithmatex">\(nb'\)</span></th>
    <th><span class="arithmatex">\(\sum_b(\cdot)^2\)</span></th>
    </tr>
    <tr>
    <td><span class="arithmatex">\(1\)</span></td>
    <td><span class="arithmatex">\((7,6,5,3)\)</span></td>
    <td><span class="arithmatex">\(P_4,P_1\)</span></td>
    <td><span class="arithmatex">\(\{1,4,6\}\)</span></td>
    <td><span class="arithmatex">\(\{1,4\}, \{6\}\)</span></td>
    <td><span class="arithmatex">\(4\)</span></td>
    <td><span class="arithmatex">\(119\to 119\)</span></td>
    </tr>
    <tr>
    <td><span class="arithmatex">\(2\)</span></td>
    <td><span class="arithmatex">\((6,5,7,3)\)</span></td>
    <td><span class="arithmatex">\(P_4,P_2\)</span></td>
    <td><span class="arithmatex">\(\{3,6\}\)</span></td>
    <td><span class="arithmatex">\(\{3\}, \{6\}\)</span></td>
    <td><span class="arithmatex">\(4\)</span></td>
    <td><span class="arithmatex">\(119\to 119\)</span></td>
    </tr>
    <tr>
    <td><span class="arithmatex">\(3\)</span></td>
    <td><span class="arithmatex">\((6,7,5,3)\)</span></td>
    <td><span class="arithmatex">\(P_4,P_1\)</span></td>
    <td><span class="arithmatex">\(\{2,5,6\}\)</span></td>
    <td><span class="arithmatex">\(\{2,6\}, \{5\}\)</span></td>
    <td><span class="arithmatex">\(4\)</span></td>
    <td><span class="arithmatex">\(119\to 127\)</span></td>
    </tr>
    <tr>
    <td><span class="arithmatex">\(4\)</span></td>
    <td><span class="arithmatex">\((7,5,7,2)\)</span></td>
    <td><span class="arithmatex">\(P_4,P_2\)</span></td>
    <td><span class="arithmatex">\(\{3,5\}\)</span></td>
    <td><span class="arithmatex">\(\{3,5\}\)</span></td>
    <td><span class="arithmatex">\(3\)</span></td>
    <td><span class="arithmatex">\(127\to 147\)</span></td>
    </tr>
    </table></div>

    Iterations $1$ and $2$ only reshuffle the items and keep the same loads (the auxiliary objective stays $119$, and the new packing is accepted because it is not worse); iteration $3$ builds the full bin $\{2,6\}$, raising the auxiliary objective to $127$; iteration $4$ empties the bins $\{5\}$ and $\{3\}$, and FFD packs items $3$ and $5$ together: $3$ bins, the optimum, and the search stops since $nb=\LB$.

![Figure 16](../../img/metaheuristics/fig16.svg){ .fig loading=lazy  }

![Figure 17](../../img/metaheuristics/fig17.svg){ .fig loading=lazy  }

![Figure 18](../../img/metaheuristics/fig18.svg){ .fig loading=lazy  }

- On BPP24, starting from the FFD packing ($10$ bins), with $200$ iterations and $seed=1,\dots,10$, the result depends on the repair:

<div class="tabella" markdown="0"><table>
<tr>
<th><span class="arithmatex">\(q\)</span></th>
<th>repair</th>
<th>bins at the end (10 seeds)</th>
<th>iterations to reach <span class="arithmatex">\(9\)</span></th>
</tr>
<tr>
<td><span class="arithmatex">\(2\)</span></td>
<td>FFD</td>
<td><span class="arithmatex">\(10,10,10,10,10,10,10,10,10,10\)</span></td>
<td>never</td>
</tr>
<tr>
<td><span class="arithmatex">\(2\)</span></td>
<td>exact</td>
<td><span class="arithmatex">\(10,10,10,10,10,10,10,10,10,10\)</span></td>
<td>never</td>
</tr>
<tr>
<td><span class="arithmatex">\(3\)</span></td>
<td>FFD</td>
<td><span class="arithmatex">\(10,10,10,10,10,10,10,10,10,10\)</span></td>
<td>never</td>
</tr>
<tr>
<td><span class="arithmatex">\(3\)</span></td>
<td>exact</td>
<td><span class="arithmatex">\(9,9,9,9,9,9,9,9,9,9\)</span></td>
<td><span class="arithmatex">\(4,4,12,38,3,20,5,2,7,5\)</span></td>
</tr>
<tr>
<td><span class="arithmatex">\(4\)</span></td>
<td>FFD</td>
<td><span class="arithmatex">\(10,10,10,10,10,10,10,10,10,10\)</span></td>
<td>never</td>
</tr>
<tr>
<td><span class="arithmatex">\(4\)</span></td>
<td>exact</td>
<td><span class="arithmatex">\(9,9,9,9,9,9,9,9,9,9\)</span></td>
<td><span class="arithmatex">\(2,3,9,12,4,5,1,3,10,2\)</span></td>
</tr>
</table></div>

- With the FFD repair, $LNS$ <strong>never</strong> improves the FFD packing: the items removed from an FFD packing are repacked by FFD in the same way. With the exact repair and $q\ge 3$ it reaches the optimum in every run, in a few iterations: it finds three bins whose items fit into two, which is what FFD cannot see. With $q=2$ even the exact repair fails, because the items of two bins of an FFD packing never fit into one.

!!! chiave ""

    A large neighbourhood is explored by solving a <strong>subproblem</strong>: the part of the solution left free by the destroy method is re-optimized, while the rest is fixed. The more powerful the method that solves the subproblem, the more powerful the neighbourhood.

## 32.9.2 Adaptive large neighbourhood search { #sez-sec-alns }

- Which destroy method works best depends on the instance, and on the phase of the search. <strong>Adaptive</strong> LNS (ALNS), introduced by Ropke and Pisinger (2006), uses several destroy (and repair) methods, chooses one at random at every iteration, and <strong>learns</strong> which ones work, by giving to each method $o$ a weight $w_o$:

!!! chiave ""

    $$
    P(\text{choose } o) \;=\; \frac{w_o}{\sum_{o'} w_{o'}},
    \qquad\qquad
    w_o \;\leftarrow\; (1-\rho)\,w_o + \rho\,\psi ,
    $$

    where $\rho\in[0,1]$ is the <em>reaction factor</em> and the score $\psi$ rewards the outcome of the iteration in which $o$ was used: $\psi=3$ if the new solution is the best found so far, $2$ if it is better than the current one, $1$ if it is as good, $0$ if it is worse.

!!! algoritmo "Algorithm: Adaptive large neighbourhood search for the TSP"

    <div class="pseudocodice" markdown="0"><div class="pc" style="--liv:0"><strong>Input:</strong> distances <span class="arithmatex">\(d\)</span>, starting tour <span class="arithmatex">\(\sigma\)</span>, <span class="arithmatex">\(q\)</span>, <span class="arithmatex">\(maxIter\)</span>, reaction factor <span class="arithmatex">\(\rho\)</span></div><div class="pc" style="--liv:0"><strong>Output:</strong> best tour found</div><div class="pc" style="--liv:0"><span class="pc-n">1</span><strong>Function</strong> ALNS(<span class="arithmatex">\(d, \sigma, q, maxIter, \rho\)</span>)</div><div class="pc" style="--liv:1"><span class="pc-n">2</span><span class="arithmatex">\(cur := \sigma\)</span>;  <span class="arithmatex">\(best := \sigma\)</span>;  <span class="arithmatex">\(w_1 := 1\)</span>;  <span class="arithmatex">\(w_2 := 1\)</span></div><div class="pc" style="--liv:1"><span class="pc-n">3</span><strong>for</strong> <span class="arithmatex">\(it := 1\)</span> <strong>to</strong> <span class="arithmatex">\(maxIter\)</span> <strong>do</strong></div><div class="pc" style="--liv:2"><span class="pc-n">4</span><strong>if</strong> <span class="arithmatex">\(\textsc{Rand}()\cdot(w_1+w_2) < w_1\)</span> <strong>then</strong> <span class="arithmatex">\(o := 1\)</span> <strong>else</strong> <span class="arithmatex">\(o := 2\)</span></div><div class="pc" style="--liv:2"><span class="pc-n">5</span><span class="arithmatex">\(nw := cur\)</span></div><div class="pc" style="--liv:2"><span class="pc-n">6</span><strong>if</strong> <span class="arithmatex">\(o=1\)</span> <strong>then</strong> <span class="arithmatex">\(removed := \textsc{RandomRemoval}(nw, q)\)</span> <strong>else</strong> <span class="arithmatex">\(removed := \textsc{WorstRemoval}(nw, q)\)</span></div><div class="pc" style="--liv:2"><span class="pc-n">7</span><span class="arithmatex">\(\textsc{CheapestInsertionRepair}(nw, removed)\)</span></div><div class="pc" style="--liv:2"><span class="pc-n">8</span><span class="arithmatex">\(\psi := 3\)</span>, <span class="arithmatex">\(2\)</span>, <span class="arithmatex">\(1\)</span> or <span class="arithmatex">\(0\)</span> if <span class="arithmatex">\(L(nw)<L(best)\)</span>, <span class="arithmatex">\(L(nw)<L(cur)\)</span>, <span class="arithmatex">\(L(nw)=L(cur)\)</span>, <span class="arithmatex">\(L(nw)>L(cur)\)</span></div><div class="pc" style="--liv:2"><span class="pc-n">9</span><strong>if</strong> <span class="arithmatex">\(L(nw)\le L(cur)\)</span> <strong>then</strong> <span class="arithmatex">\(cur := nw\)</span></div><div class="pc" style="--liv:2"><span class="pc-n">10</span><strong>if</strong> <span class="arithmatex">\(L(cur) < L(best)\)</span> <strong>then</strong> <span class="arithmatex">\(best := cur\)</span></div><div class="pc" style="--liv:2"><span class="pc-n">11</span><span class="arithmatex">\(w_o := (1-\rho)\,w_o + \rho\,\psi\)</span> <span class="pc-com">▹ adaptive weights</span></div><div class="pc" style="--liv:1"><span class="pc-n">12</span><strong>end</strong></div><div class="pc" style="--liv:1"><span class="pc-n">13</span><strong>return</strong> <span class="arithmatex">\(best\)</span></div></div>

<div class="colab-pulsanti" markdown="0"><span class="colab-etichetta">Run in Colab:</span><a class="colab-pulsante" href="https://colab.research.google.com/github/fabiofurini/combinatorial-optimization/blob/main/notebooks/metaheuristics_python.ipynb" target="_blank" rel="noopener" title="Open the Python notebook of the chapter in Google Colab">Python</a><a class="colab-pulsante" href="https://colab.research.google.com/github/fabiofurini/combinatorial-optimization/blob/main/notebooks/metaheuristics_cpp.ipynb" target="_blank" rel="noopener" title="Open the C++ notebook of the chapter in Google Colab">C++</a></div>

- WORSTREMOVAL removes, $q$ times, the city whose removal shortens the tour the most: the city $v$, between $a$ and $b$, of maximum $d_{av}+d_{vb}-d_{ab}$. It is a deterministic, greedy destroy method: it removes the cities that seem badly placed.

- On TSP20, from the nearest neighbour tour, with $q=5$, $200$ iterations and $\rho=0.1$, ALNS reaches the optimum in $7$ runs out of $10$ (average $299.4$).

- At the end the weight of the random removal is between $0.77$ and $0.98$, the weight of the worst removal between $0.03$ and $0.08$: the method has learnt that, from a good tour, removing the worst-placed cities and reinserting them by cheapest insertion almost always rebuilds a tour that is not better, and it has almost stopped using it.

- In these runs plain $LNS$ with random removal ($q=5$) does slightly better: adaptivity pays off when there are many methods, of unknown quality, and long runs.

---

**Next:** [32.10 Population-based methods: genetic and memetic algorithms](population-based-methods-genetic-and-memetic-algorithms.md)
