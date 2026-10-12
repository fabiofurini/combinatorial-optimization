---
title: "GRASP"
---

# 31.8 GRASP { #sez-sec-grasp }

<div class="info-capitolo" markdown>

**Part 4 · Heuristic algorithms · Chapter 31** · [:material-book-open-variant: Chapter 31: Metaheuristics](index.md) · [:material-file-pdf-box: Lecture notes, volume 4 (PDF)](../../pdf/lecture-notes-4-heuristic-algorithms.pdf) · [:material-pencil: Exercises: Metaheuristics](../../exercises/metaheuristics.md)

</div>

!!! chiave ""

    The <em>greedy randomized adaptive search procedure</em> (denoted by $GRASP$) is a multi-start method: at every iteration it builds a solution with a <em>randomized</em> greedy algorithm, which chooses the next element at random among the best candidates (the <em>restricted candidate list</em>, RCL) instead of always taking the best one, and improves the solution with a local search. The best local optimum found is returned.

- The pseudo-code of $GRASP$ for the KP, with the randomized greedy algorithm by efficiency and KPLOCALSEARCH, reads as follows:

!!! algoritmo "Algorithm: GRASP for the KP"

    <div class="pseudocodice" markdown="0"><div class="pc" style="--liv:0"><strong>Input:</strong> KP instance <span class="arithmatex">\(p[1..n]\)</span>, <span class="arithmatex">\(w[1..n]\)</span>, <span class="arithmatex">\(c\)</span>; parameter <span class="arithmatex">\(\alpha\in[0,1]\)</span>; number of iterations <span class="arithmatex">\(maxIter\)</span></div><div class="pc" style="--liv:0"><strong>Output:</strong> best solution found</div><div class="pc" style="--liv:0"><span class="pc-n">1</span><strong>Function</strong> GRASP(<span class="arithmatex">\(p, w, c, \alpha, maxIter\)</span>)</div><div class="pc" style="--liv:1"><span class="pc-n">2</span><span class="arithmatex">\(zbest := -1\)</span></div><div class="pc" style="--liv:1"><span class="pc-n">3</span><strong>for</strong> <span class="arithmatex">\(it := 1\)</span> <strong>to</strong> <span class="arithmatex">\(maxIter\)</span> <strong>do</strong></div><div class="pc" style="--liv:2"><span class="pc-n">4</span><span class="arithmatex">\(x := \textsc{RandomizedGreedy}(p, w, c, \alpha)\)</span>
    <span class="arithmatex">\(x := \textsc{KPLocalSearch}(x)\)</span> <span class="pc-com">▹ construction local search</span></div><div class="pc" style="--liv:2"><span class="pc-n">5</span><strong>if</strong> <span class="arithmatex">\(\sum_i p[i]x[i] > zbest\)</span> <strong>then</strong> <span class="arithmatex">\(best := x\)</span>;  <span class="arithmatex">\(zbest := \sum_i p[i]x[i]\)</span></div><div class="pc" style="--liv:1"><span class="pc-n">6</span><strong>end</strong></div><div class="pc" style="--liv:1"><span class="pc-n">7</span><strong>return</strong> <span class="arithmatex">\(best\)</span></div><div class="pc" style="--liv:0"><span class="pc-n">8</span><strong>Function</strong> RandomizedGreedy(<span class="arithmatex">\(p, w, c, \alpha\)</span>)</div><div class="pc" style="--liv:1"><span class="pc-n">9</span><span class="arithmatex">\(x := (0,\dots,0)\)</span>;  <span class="arithmatex">\(rc := c\)</span> <span class="pc-com">▹ residual capacity</span></div><div class="pc" style="--liv:1"><span class="pc-n">10</span><strong>while</strong> some item with <span class="arithmatex">\(x[i]=0\)</span> has <span class="arithmatex">\(w[i]\le rc\)</span> <strong>do</strong></div><div class="pc" style="--liv:2"><span class="pc-n">11</span><span class="arithmatex">\(e_{\max}\)</span>, <span class="arithmatex">\(e_{\min} :=\)</span> maximum and minimum of <span class="arithmatex">\(p[i]/w[i]\)</span> over these candidate items</div><div class="pc" style="--liv:2"><span class="pc-n">12</span><span class="arithmatex">\(RCL :=\)</span> candidates with <span class="arithmatex">\(p[i]/w[i] \ge e_{\max} - \alpha\,(e_{\max}-e_{\min})\)</span>, by non-increasing <span class="arithmatex">\(p[i]/w[i]\)</span></div><div class="pc" style="--liv:2"><span class="pc-n">13</span><span class="arithmatex">\(i :=\)</span> the element of <span class="arithmatex">\(RCL\)</span> in position <span class="arithmatex">\(1+\lfloor \textsc{Rand}()\cdot |RCL|\rfloor\)</span></div><div class="pc" style="--liv:2"><span class="pc-n">14</span><span class="arithmatex">\(x[i] := 1\)</span>;  <span class="arithmatex">\(rc := rc - w[i]\)</span></div><div class="pc" style="--liv:1"><span class="pc-n">15</span><strong>end</strong></div><div class="pc" style="--liv:1"><span class="pc-n">16</span><strong>return</strong> <span class="arithmatex">\(x\)</span></div></div>

<div class="colab-pulsanti" markdown="0"><span class="colab-etichetta">Run in Colab:</span><a class="colab-pulsante" href="https://colab.research.google.com/github/fabiofurini/combinatorial-optimization/blob/main/notebooks/metaheuristics_python.ipynb" target="_blank" rel="noopener" title="Open the Python notebook of the chapter in Google Colab">Python</a><a class="colab-pulsante" href="https://colab.research.google.com/github/fabiofurini/combinatorial-optimization/blob/main/notebooks/metaheuristics_cpp.ipynb" target="_blank" rel="noopener" title="Open the C++ notebook of the chapter in Google Colab">C++</a></div>

- $GRASP$ was introduced by Feo and Resende (1989) for the set covering problem and presented as a general metaheuristic in Feo and Resende (1995). The randomized construction with a restricted candidate list is the one of the notes on constructive heuristics.

- The RCL is defined by a threshold on the greedy score, controlled by $\alpha$:

!!! chiave ""

    KP (maximize the efficiency $p_i/w_i$ of the items that fit):

    $$
    RCL=\Big\{i \text{ candidate}: \tfrac{p_i}{w_i}\ \ge\ e_{\max}-\alpha\,(e_{\max}-e_{\min})\Big\}.
    $$

    TSP (minimize the distance from the last city $\ell$ of the partial tour):

    $$
    RCL=\big\{j \text{ unvisited}: d_{\ell j}\ \le\ d_{\min}+\alpha\,(d_{\max}-d_{\min})\big\}.
    $$

- With $\alpha=0$ the RCL contains only the best candidates, and the construction is the greedy algorithm: every iteration builds the same solution (up to ties), and $GRASP$ is a single local search. With $\alpha=1$ the RCL contains all the candidates, and the construction is random. Intermediate values give solutions that are <strong>different</strong> (diversification) and <strong>good</strong> (a good start for the local search, which then intensifies).

- The iterations of $GRASP$ are <strong>independent</strong>: nothing is learnt from one to the next, and the iterations can be run in parallel. Extensions add memory: <em>reactive</em> GRASP adapts $\alpha$ to the results, and <em>path relinking</em> explores the solutions between two good local optima.

<a id="box-9-ex-graspKP"></a>

!!! esempio "Example 31.8: $GRASP$ on the KP reference instance"

    With $\alpha=\frac12$ and $seed=2$ (random numbers $0.0000$, $0.2631$, $0.5112$, $0.9173$) we perform two iterations. The efficiencies are $\frac{10}{5}=2$, $\frac74=1.75$, $\frac63=2$, $\frac43\approx 1.33$.

    <strong>Iteration 1.</strong> With $rc=9$ all items fit: $e_{\max}=2$, $e_{\min}=\frac43$, the threshold is $2-\frac12\cdot\frac23=\frac53\approx 1.67$, and $RCL=(1,3,2)$. With $u=0.0000$ the first element is chosen: item $1$, $rc=4$. The candidates are items $2$, $3$, $4$, the threshold is again $\frac53$, $RCL=(3,2)$, and $u=0.2631$ chooses position $1+\lfloor 2\cdot 0.2631\rfloor=1$: item $3$, $rc=1$, and no item fits. The construction gives $\{1,3\}$, of profit $16$; KPLOCALSEARCH swaps item $3$ out and item $2$ in: $\{1,2\}$, profit $17$.

    <strong>Iteration 2.</strong> $RCL=(1,3,2)$ and $u=0.5112$ chooses position $1+\lfloor 3\cdot 0.5112\rfloor=2$: item $3$, $rc=6$. The candidates are items $1$, $2$, $4$, the threshold is $\frac53$, $RCL=(1,2)$, and $u=0.9173$ chooses position $2$: item $2$, $rc=2$. The construction gives $\{2,3\}$, of profit $13$, a <em>different</em> and worse solution than the greedy one; the local search swaps item $3$ out and item $1$ in: $\{1,2\}$, profit $17$.

    $GRASP(I)=17=z(I)$. On this small instance every start leads to the optimum; on larger instances different starts lead to different local optima, as the experiment below shows.

## 31.8.1 GRASP for the TSP, and the effect of $\alpha$ { #sez-sec-grasp-exp }

- For the TSP the randomized construction is the nearest neighbour heuristic with an RCL: from the last city $\ell$ of the partial tour, the next city is chosen at random among the unvisited cities whose distance from $\ell$ is at most $d_{\min}+\alpha(d_{\max}-d_{\min})$, and the local search is TWOOPTLS.

- The table reports the results of $GRASP$ with $20$ iterations on TSP20 and on KP20, for $10$ runs ($seed=1,\dots,10$): minimum, average and maximum value of the best solution, and number of runs that reach the optimum.

<div class="tabella" markdown="0"><table>
<tr>
<th></th>
<th colspan="4">TSP20 (<span class="arithmatex">\(z(I)=291\)</span>)</th>
<th colspan="4">KP20 (<span class="arithmatex">\(z(I)=521\)</span>)</th>
</tr>
<tr>
<td><span class="arithmatex">\(\alpha\)</span></td>
<td>min</td>
<td>average</td>
<td>max</td>
<td>optimal</td>
<td>min</td>
<td>average</td>
<td>max</td>
<td>optimal</td>
</tr>
<tr>
<td><span class="arithmatex">\(0\)</span></td>
<td><span class="arithmatex">\(319\)</span></td>
<td><span class="arithmatex">\(319.0\)</span></td>
<td><span class="arithmatex">\(319\)</span></td>
<td><span class="arithmatex">\(0\)</span></td>
<td><span class="arithmatex">\(514\)</span></td>
<td><span class="arithmatex">\(514.0\)</span></td>
<td><span class="arithmatex">\(514\)</span></td>
<td><span class="arithmatex">\(0\)</span></td>
</tr>
<tr>
<td><span class="arithmatex">\(0.1\)</span></td>
<td><span class="arithmatex">\(291\)</span></td>
<td><span class="arithmatex">\(291.0\)</span></td>
<td><span class="arithmatex">\(291\)</span></td>
<td><span class="arithmatex">\(10\)</span></td>
<td><span class="arithmatex">\(521\)</span></td>
<td><span class="arithmatex">\(521.0\)</span></td>
<td><span class="arithmatex">\(521\)</span></td>
<td><span class="arithmatex">\(10\)</span></td>
</tr>
<tr>
<td><span class="arithmatex">\(0.25\)</span></td>
<td><span class="arithmatex">\(291\)</span></td>
<td><span class="arithmatex">\(291.0\)</span></td>
<td><span class="arithmatex">\(291\)</span></td>
<td><span class="arithmatex">\(10\)</span></td>
<td><span class="arithmatex">\(521\)</span></td>
<td><span class="arithmatex">\(521.0\)</span></td>
<td><span class="arithmatex">\(521\)</span></td>
<td><span class="arithmatex">\(10\)</span></td>
</tr>
<tr>
<td><span class="arithmatex">\(0.5\)</span></td>
<td><span class="arithmatex">\(291\)</span></td>
<td><span class="arithmatex">\(291.0\)</span></td>
<td><span class="arithmatex">\(291\)</span></td>
<td><span class="arithmatex">\(10\)</span></td>
<td><span class="arithmatex">\(521\)</span></td>
<td><span class="arithmatex">\(521.0\)</span></td>
<td><span class="arithmatex">\(521\)</span></td>
<td><span class="arithmatex">\(10\)</span></td>
</tr>
<tr>
<td><span class="arithmatex">\(1\)</span></td>
<td><span class="arithmatex">\(291\)</span></td>
<td><span class="arithmatex">\(291.0\)</span></td>
<td><span class="arithmatex">\(291\)</span></td>
<td><span class="arithmatex">\(10\)</span></td>
<td><span class="arithmatex">\(519\)</span></td>
<td><span class="arithmatex">\(520.8\)</span></td>
<td><span class="arithmatex">\(521\)</span></td>
<td><span class="arithmatex">\(9\)</span></td>
</tr>
</table></div>

- With $\alpha=0$ all the iterations are the same: the result is the local optimum reached from the greedy solution ($319$ for TSP20, $514$ for KP20), in every run. A little randomization is enough to reach the optimum in every run on these instances; with $\alpha=1$ the constructions are random, and on KP20 one run misses the optimum.

---

**Next:** [31.9 Large neighbourhood search](large-neighbourhood-search.md)
