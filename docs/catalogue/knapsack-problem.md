---
title: "The 0/1 knapsack problem (KP)"
---

# The 0/1 knapsack problem (KP)

<div class="info-capitolo" markdown>

[:material-view-list: **Catalogue of combinatorial problems**](index.md) · [:material-folder-outline: Knapsack problems](knapsack-problems.md) · [:material-file-pdf-box: Catalogue (PDF)](../pdf/combinatorial-problem-catalogue.pdf)

</div>

<a id="sec:cat-pagina-knapsack-problem"></a>

<a id="box-1-def-catdef-kp"></a>

!!! definizione "Definition 1: The 0/1 knapsack problem"

    Given:

    1. a knapsack of <em>capacity</em> $c \in \Z_{\ge 1}$,

    2. a set $\mathscr{I} = \{1,2,\dots,n\}$ of $n$ items,

    3. for each item $j \in \mathscr{I}$, a <em>profit</em> $p_j \in \Z_{\ge 1}$ and a <em>weight</em> $w_j \in \Z_{\ge 1}$,

    the <strong>0/1 Knapsack Problem</strong> (KP) asks to decide which items to insert into the knapsack, so that the total weight of the selected items does not exceed the knapsack capacity, and the total profit of the selected items is maximized.

<strong>Assumptions</strong>

- We make the following assumptions:

    1. The total weight of all items exceeds the knapsack capacity (otherwise, all items could be selected). Formally:

        $$
        \sum_{j \in \mathscr{I}} w_j > c
        $$

    2. Each item individually fits into the knapsack (otherwise, it cannot be selected). Formally:

        $$
        w_j \le c,~~~~ \forall j \in \mathscr{I}
        $$

## What the course does on this problem { #sez-sec-cat-kp-vert }

<div class="tabella" markdown="0"><table>
<tr>
<th><strong>Technique</strong></th>
<th><strong>Where</strong></th>
</tr>
<tr>
<td><strong>Definition</strong></td>
<td><a href="https://fabiofurini.github.io/combinatorial-optimization/combinatorial-optimization-problems/knapsack/the-0-1-knapsack-problem/#box-1-defKP">Ch. 2 «Knapsack problems»</a></td>
</tr>
<tr>
<td><strong>Formulations</strong></td>
<td><a href="https://fabiofurini.github.io/combinatorial-optimization/formulations/knapsack-formulations/">Ch. 9 «Formulations of knapsack problems»</a></td>
</tr>
<tr>
<td><strong>Dynamic programming</strong></td>
<td><a href="https://fabiofurini.github.io/combinatorial-optimization/dynamic-programming/dp-principles/#164-the-dp-algorithms-of-this-module">Ch. 16 «Principles of dynamic programming»</a>; <a href="https://fabiofurini.github.io/combinatorial-optimization/dynamic-programming/dp-knapsack/">Ch. 17 «DP for the 0/1 knapsack problem»</a></td>
</tr>
<tr>
<td><strong>Heuristics</strong></td>
<td><a href="https://fabiofurini.github.io/combinatorial-optimization/heuristic-algorithms/heuristics/#box-2-ex-refKP">Ch. 29 «Heuristic algorithms: definitions»</a>; <a href="https://fabiofurini.github.io/combinatorial-optimization/heuristic-algorithms/constructive-heuristics/the-0-1-knapsack-problem-which-order/#sez-sec-KP">Ch. 30 «Constructive heuristics»</a>; <a href="https://fabiofurini.github.io/combinatorial-optimization/heuristic-algorithms/local-search/kp-feasibility-and-penalties/#sez-sec-kp">Ch. 31 «Local search»</a>; <a href="https://fabiofurini.github.io/combinatorial-optimization/heuristic-algorithms/metaheuristics/how-to-escape-from-a-local-optimum/#sez-sec-sa-kp">Ch. 32 «Metaheuristics»</a></td>
</tr>
<tr>
<td><strong>MIP heuristics</strong></td>
<td><a href="https://fabiofurini.github.io/combinatorial-optimization/heuristic-algorithms/mip-heuristics-classical/#eq-eq-kp">Ch. 33 «MIP heuristics for the classical problems»</a></td>
</tr>
<tr>
<td><strong>Approximation</strong></td>
<td><a href="https://fabiofurini.github.io/combinatorial-optimization/approximation-algorithms/approximation/">Ch. 34 «Principles of approximation algorithms»</a>; <a href="https://fabiofurini.github.io/combinatorial-optimization/approximation-algorithms/knapsack-approximation/">Ch. 35 «Approximation algorithms for the knapsack problem»</a></td>
</tr>
<tr>
<td><strong>Ad hoc algorithms</strong></td>
<td><a href="https://fabiofurini.github.io/combinatorial-optimization/specialized-algorithms/knapsack-branch-and-bound/">Ch. 41 «Knapsack: branch-and-bound on the critical item»</a></td>
</tr>
<tr>
<td><strong>Exercises</strong></td>
<td><a href="https://fabiofurini.github.io/combinatorial-optimization/exercises/knapsack/">Ch. 2 (6 exercises)</a>; <a href="https://fabiofurini.github.io/combinatorial-optimization/exercises/knapsack-formulations/">Ch. 9 (5 exercises)</a>; <a href="https://fabiofurini.github.io/combinatorial-optimization/exercises/dp-principles/#esercizio-16-1">Exercise 16.1</a>; <a href="https://fabiofurini.github.io/combinatorial-optimization/exercises/dp-knapsack/">Ch. 17 (5 exercises)</a>; <a href="https://fabiofurini.github.io/combinatorial-optimization/exercises/heuristics/">Ch. 29 (2 exercises)</a>; <a href="https://fabiofurini.github.io/combinatorial-optimization/exercises/constructive-heuristics/">Ch. 30 (3 exercises)</a>; <a href="https://fabiofurini.github.io/combinatorial-optimization/exercises/local-search/">Ch. 31 (3 exercises)</a>; <a href="https://fabiofurini.github.io/combinatorial-optimization/exercises/metaheuristics/">Ch. 32 (5 exercises)</a>; <a href="https://fabiofurini.github.io/combinatorial-optimization/exercises/mip-heuristics-classical/">Ch. 33 (4 exercises)</a>; <a href="https://fabiofurini.github.io/combinatorial-optimization/exercises/approximation/#esercizio-34-4">Exercise 34.4</a>; <a href="https://fabiofurini.github.io/combinatorial-optimization/exercises/knapsack-approximation/">Ch. 35 (15 exercises)</a>; <a href="https://fabiofurini.github.io/combinatorial-optimization/exercises/knapsack-branch-and-bound/">Ch. 41 (4 exercises)</a></td>
</tr>
<tr>
<td><strong>Reference instances</strong></td>
<td><a href="https://fabiofurini.github.io/combinatorial-optimization/combinatorial-optimization-problems/knapsack/the-0-1-knapsack-problem/#box-2-ex-kp">Ch. 2</a> (<span class="arithmatex">\(z=15\)</span>); <a href="https://fabiofurini.github.io/combinatorial-optimization/heuristic-algorithms/heuristics/#box-2-ex-refKP">Ch. 29</a> (<span class="arithmatex">\(z=17\)</span>); <a href="https://fabiofurini.github.io/combinatorial-optimization/heuristic-algorithms/metaheuristics/the-problems-and-the-assumptions/#box-2-ex-tsp20">Ch. 32, KP20</a> (<span class="arithmatex">\(z=521\)</span>); <a href="https://fabiofurini.github.io/combinatorial-optimization/approximation-algorithms/knapsack-approximation/#box-2-ex-split">Ch. 35</a> (<span class="arithmatex">\(z=15\)</span>)</td>
</tr>
</table></div>

### Properties { #sez-sec-cat-kp-properties }

- Weakly NP-hard: dynamic programming solves it in $\Theta(nc)$ steps, a pseudo-polynomial time ([Ch. 1](../combinatorial-optimization-problems/combinatorial-optimization/a-glimpse-of-computational-complexity.md#box-12-def-pseudo)).

- Cardinality bound: if at most $\bar k$ items fit, $z(I)$ is at most the sum of the $\bar k$ largest profits ([Ch. 2](../combinatorial-optimization-problems/knapsack/the-0-1-knapsack-problem.md#box-3-obs-kp-card)).

- Sorting by efficiency is not enough: on the instance of Ch. 2 it gives profit $11$, while the optimum is $15$ ([Ch. 2](../combinatorial-optimization-problems/knapsack/the-knapsack-problem-with-setups.md#211-typical-mistakes)).

### Formulations { #sez-sec-cat-kp-formulations }

- The model $\ILP_{\KP}$ has one binary variable per item and one capacity constraint ([Ch. 9](../formulations/knapsack-formulations/an-ilp-model-for-the-0-1-knapsack-problem.md#eq-NAT_KP)).

- The relaxation $\LP_{\KP}$ is solved by sorting the items by efficiency: the items before the split item $s$ are taken, $s$ only in part ([Ch. 9](../formulations/knapsack-formulations/an-ilp-model-for-the-0-1-knapsack-problem.md#box-12-propLPKP)).

- $z(\LP_{\KP}) \le 2\, z(\ILP_{\KP})$, and the ratio $2$ is approached ([Ch. 9](../formulations/knapsack-formulations/an-ilp-model-for-the-0-1-knapsack-problem.md#box-16-propRatio2tight)).

- Rounding down $z(\LP_{\KP})$ gives the Dantzig bound $\UB_{\mathrm{D}}$; the Martello–Toth bound $\UB_{\mathrm{MT}}$ treats the split item out and in ([Ch. 9](../formulations/knapsack-formulations/an-ilp-model-for-the-0-1-knapsack-problem.md#95-01-knapsack-problem-upper-bounds)).

### Dynamic programming { #sez-sec-cat-kp-dynamicprogramming }

- The recurrence $v(j,k)$ over items and capacities takes $\Theta(nc)$ steps ([Ch. 17](../dynamic-programming/dp-knapsack/index.md)).

- The lists of non-dominated states keep only the reachable states, at most $\min\{2^j, c+1\}$ per stage ([Ch. 17](../dynamic-programming/dp-knapsack/a-first-dp-algorithm-an-implementation-with-lists.md#box-28-texkp3graph)).

- The DP by profits takes $\Theta(nP)$ steps; it is the core of the FPTAS ([Ch. 17](../dynamic-programming/dp-knapsack/a-second-dp-algorithm.md#173-a-second-dp-algorithm)).

- The UKP and the BKP have their own recurrences ([Ch. 18](../dynamic-programming/dp-unbounded-knapsack/index.md), [Ch. 19](../dynamic-programming/dp-bounded-knapsack.md)).

- So do the SSP, the MCKP and the KPS, in $\Theta(nc)$ steps; for the MDKP and the MKP the table grows exponentially with the number of capacities ([Ch. 20](../dynamic-programming/dp-subset-sum.md), [Ch. 21](../dynamic-programming/dp-multiple-choice-knapsack.md), [Ch. 22](../dynamic-programming/dp-multidimensional-knapsack.md), [Ch. 23](../dynamic-programming/dp-knapsack-setups.md), [Ch. 24](../dynamic-programming/dp-multiple-knapsack.md)).

### Heuristics { #sez-sec-cat-kp-heuristics }

- Greedy by profit, by weight and by efficiency: on the four-item instance of [Ch. 29](../heuristic-algorithms/heuristics.md) (optimum $17$) they give $17$, $10$ and $16$ ([Ch. 30](../heuristic-algorithms/constructive-heuristics/the-0-1-knapsack-problem-which-order.md#box-3-ex-kp3)).

- Flip and swap local search: first and best improvement reach $17$ along different paths ([Ch. 31](../heuristic-algorithms/local-search/first-improvement-and-best-improvement.md#box-3-ex-kpfirstbest)).

- A penalty on the excess weight lets the search cross infeasible solutions; with $\alpha>\max_j p_j$ its local optima are feasible ([Ch. 31](../heuristic-algorithms/local-search/kp-feasibility-and-penalties.md#box-14-ex-kppen)).

- Simulated annealing, GRASP, genetic and memetic algorithms; on KP20 the memetic algorithm reaches the optimum $521$ in every run ([Ch. 32](../heuristic-algorithms/metaheuristics/population-based-methods-genetic-and-memetic-algorithms.md#box-12-ex-gaKP)).

### MIP heuristics { #sez-sec-cat-kp-mipheuristics }

- Rounding down the LP solution is always feasible, since the model has a single packing constraint ([Ch. 33](../heuristic-algorithms/mip-heuristics-classical.md#box-3-ex-rounding)).

- On the instance of [Ch. 29](../heuristic-algorithms/heuristics.md) fractional diving ends at $16$ and RINS fails, while local branching and proximity search reach and prove the optimum $17$ ([Ch. 33](../heuristic-algorithms/mip-heuristics-classical.md#box-4-ex-divekp)).

### Approximation { #sez-sec-cat-kp-approximation }

- The greedy algorithm has no constant guarantee; Ext-Greedy is a $2$-approximation, and the bound is tight ([Ch. 35](../approximation-algorithms/knapsack-approximation.md#box-16-prop-GRe2approx)).

- $H^{\ell}$ guarantees $\frac{\ell+2}{\ell+1}$ in $O(n^{\ell+1})$ time, which gives a PTAS ([Ch. 35](../approximation-algorithms/knapsack-approximation.md#box-20-prop-Hlapprox)).

- The Basic-FPTAS scales the profits and guarantees $\frac{1}{1-\varepsilon}$ in $O(n^2/\varepsilon)$ time ([Ch. 35](../approximation-algorithms/knapsack-approximation.md#box-23-prop-fptas)).

- No polynomial algorithm has a fixed absolute guarantee, unless it solves the KP exactly ([Ch. 35](../approximation-algorithms/knapsack-approximation.md#box-25-thm-absolute)).

### Ad hoc algorithms { #sez-sec-cat-kp-adhocalgorithms }

- The LP of a node is solved by the Dantzig formulas, without the simplex algorithm, and has one fractional variable: the split item, on which it branches ([Ch. 41](../specialized-algorithms/knapsack-branch-and-bound.md#411-the-algorithm-for-the-kp)).

- On the instance of [Ch. 2](../combinatorial-optimization-problems/knapsack/index.md) it closes the gap between $\LB=15$ and $\UB=16$ with $5$ nodes ([Ch. 41](../specialized-algorithms/knapsack-branch-and-bound.md#box-3-texexpbox2)).
