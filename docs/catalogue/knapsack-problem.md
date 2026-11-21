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
<td><a href="https://fabiofurini.github.io/dynamic-programming/dp-principles/#14-the-dp-algorithms-of-this-module"><em>Dynamic Programming</em>: «Principles of dynamic programming»</a>; <a href="https://fabiofurini.github.io/dynamic-programming/dp-knapsack/"><em>Dynamic Programming</em>: «DP for the 0/1 knapsack problem»</a></td>
</tr>
<tr>
<td><strong>Heuristics</strong></td>
<td><a href="https://fabiofurini.github.io/heuristic-algorithms/heuristics/#box-2-ex-refKP"><em>Heuristic Algorithms</em>: «Heuristic algorithms: definitions»</a>; <a href="https://fabiofurini.github.io/heuristic-algorithms/constructive-heuristics/the-0-1-knapsack-problem-which-order/#sez-sec-KP"><em>Heuristic Algorithms</em>: «Constructive heuristics»</a>; <a href="https://fabiofurini.github.io/heuristic-algorithms/local-search/kp-feasibility-and-penalties/#sez-sec-kp"><em>Heuristic Algorithms</em>: «Local search»</a>; <a href="https://fabiofurini.github.io/heuristic-algorithms/metaheuristics/how-to-escape-from-a-local-optimum/#sez-sec-sa-kp"><em>Heuristic Algorithms</em>: «Metaheuristics»</a></td>
</tr>
<tr>
<td><strong>MIP heuristics</strong></td>
<td><a href="https://fabiofurini.github.io/heuristic-algorithms/mip-heuristics-classical/#eq-eq-kp"><em>Heuristic Algorithms</em>: «MIP heuristics for the classical problems»</a></td>
</tr>
<tr>
<td><strong>Approximation</strong></td>
<td><a href="https://fabiofurini.github.io/approximation-algorithms/approximation/"><em>Approximation Algorithms</em>: «Principles of approximation algorithms»</a>; <a href="https://fabiofurini.github.io/approximation-algorithms/knapsack-approximation/"><em>Approximation Algorithms</em>: «Approximation algorithms for the knapsack problem»</a></td>
</tr>
<tr>
<td><strong>Ad hoc algorithms</strong></td>
<td><a href="https://fabiofurini.github.io/combinatorial-optimization/specialized-algorithms/knapsack-branch-and-bound/">Ch. 16 «Knapsack: branch-and-bound on the critical item»</a></td>
</tr>
<tr>
<td><strong>Exercises</strong></td>
<td><a href="https://fabiofurini.github.io/combinatorial-optimization/exercises/knapsack/">Ch. 2 (6 exercises)</a>; <a href="https://fabiofurini.github.io/combinatorial-optimization/exercises/knapsack-formulations/">Ch. 9 (5 exercises)</a>; <a href="https://fabiofurini.github.io/combinatorial-optimization/exercises/knapsack-branch-and-bound/">Ch. 16 (4 exercises)</a>; <a href="https://fabiofurini.github.io/dynamic-programming/exercises/dp-principles/#esercizio-1-1"><em>Dynamic Programming</em>, Exercise 1.1</a>; <a href="https://fabiofurini.github.io/dynamic-programming/exercises/dp-knapsack/"><em>Dynamic Programming</em>: «DP for the 0/1 knapsack problem» (5 exercises)</a>; <a href="https://fabiofurini.github.io/heuristic-algorithms/exercises/heuristics/"><em>Heuristic Algorithms</em>: «Heuristic algorithms: definitions» (2 exercises)</a>; <a href="https://fabiofurini.github.io/heuristic-algorithms/exercises/constructive-heuristics/"><em>Heuristic Algorithms</em>: «Constructive heuristics» (3 exercises)</a>; <a href="https://fabiofurini.github.io/heuristic-algorithms/exercises/local-search/"><em>Heuristic Algorithms</em>: «Local search» (3 exercises)</a>; <a href="https://fabiofurini.github.io/heuristic-algorithms/exercises/metaheuristics/"><em>Heuristic Algorithms</em>: «Metaheuristics» (5 exercises)</a>; <a href="https://fabiofurini.github.io/heuristic-algorithms/exercises/mip-heuristics-classical/"><em>Heuristic Algorithms</em>: «MIP heuristics for the classical problems» (4 exercises)</a>; <a href="https://fabiofurini.github.io/approximation-algorithms/exercises/approximation/#esercizio-1-4"><em>Approximation Algorithms</em>, Exercise 1.4</a>; <a href="https://fabiofurini.github.io/approximation-algorithms/exercises/knapsack-approximation/"><em>Approximation Algorithms</em>: «Approximation algorithms for the knapsack problem» (15 exercises)</a></td>
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

- The recurrence $v(j,k)$ over items and capacities takes $\Theta(nc)$ steps ([<em>Dynamic Programming</em>](https://fabiofurini.github.io/dynamic-programming/dp-knapsack/)).

- The lists of non-dominated states keep only the reachable states, at most $\min\{2^j, c+1\}$ per stage ([<em>Dynamic Programming</em>](https://fabiofurini.github.io/dynamic-programming/dp-knapsack/a-first-dp-algorithm-an-implementation-with-lists/#box-28-texkp3graph)).

- The DP by profits takes $\Theta(nP)$ steps; it is the core of the FPTAS ([<em>Dynamic Programming</em>](https://fabiofurini.github.io/dynamic-programming/dp-knapsack/a-second-dp-algorithm/#23-a-second-dp-algorithm)).

- The UKP and the BKP have their own recurrences ([<em>Dynamic Programming</em>](https://fabiofurini.github.io/dynamic-programming/dp-unbounded-knapsack/), [<em>Dynamic Programming</em>](https://fabiofurini.github.io/dynamic-programming/dp-bounded-knapsack/)).

- So do the SSP, the MCKP and the KPS, in $\Theta(nc)$ steps; for the MDKP and the MKP the table grows exponentially with the number of capacities ([<em>Dynamic Programming</em>](https://fabiofurini.github.io/dynamic-programming/dp-subset-sum/), [<em>Dynamic Programming</em>](https://fabiofurini.github.io/dynamic-programming/dp-multiple-choice-knapsack/), [<em>Dynamic Programming</em>](https://fabiofurini.github.io/dynamic-programming/dp-multidimensional-knapsack/), [<em>Dynamic Programming</em>](https://fabiofurini.github.io/dynamic-programming/dp-knapsack-setups/), [<em>Dynamic Programming</em>](https://fabiofurini.github.io/dynamic-programming/dp-multiple-knapsack/)).

### Heuristics { #sez-sec-cat-kp-heuristics }

- Greedy by profit, by weight and by efficiency: on the four-item instance of [<em>Heuristic Algorithms</em>](https://fabiofurini.github.io/heuristic-algorithms/heuristics/) (optimum $17$) they give $17$, $10$ and $16$ ([<em>Heuristic Algorithms</em>](https://fabiofurini.github.io/heuristic-algorithms/constructive-heuristics/the-0-1-knapsack-problem-which-order/#box-3-ex-kp3)).

- Flip and swap local search: first and best improvement reach $17$ along different paths ([<em>Heuristic Algorithms</em>](https://fabiofurini.github.io/heuristic-algorithms/local-search/first-improvement-and-best-improvement/#box-3-ex-kpfirstbest)).

- A penalty on the excess weight lets the search cross infeasible solutions; with $\alpha>\max_j p_j$ its local optima are feasible ([<em>Heuristic Algorithms</em>](https://fabiofurini.github.io/heuristic-algorithms/local-search/kp-feasibility-and-penalties/#box-14-ex-kppen)).

- Simulated annealing, GRASP, genetic and memetic algorithms; on KP20 the memetic algorithm reaches the optimum $521$ in every run ([<em>Heuristic Algorithms</em>](https://fabiofurini.github.io/heuristic-algorithms/metaheuristics/population-based-methods-genetic-and-memetic-algorithms/#box-12-ex-gaKP)).

### MIP heuristics { #sez-sec-cat-kp-mipheuristics }

- Rounding down the LP solution is always feasible, since the model has a single packing constraint ([<em>Heuristic Algorithms</em>](https://fabiofurini.github.io/heuristic-algorithms/mip-heuristics-classical/#box-3-ex-rounding)).

- On the instance of [<em>Heuristic Algorithms</em>](https://fabiofurini.github.io/heuristic-algorithms/heuristics/) fractional diving ends at $16$ and RINS fails, while local branching and proximity search reach and prove the optimum $17$ ([<em>Heuristic Algorithms</em>](https://fabiofurini.github.io/heuristic-algorithms/mip-heuristics-classical/#box-4-ex-divekp)).

### Approximation { #sez-sec-cat-kp-approximation }

- The greedy algorithm has no constant guarantee; Ext-Greedy is a $2$-approximation, and the bound is tight ([<em>Approximation Algorithms</em>](https://fabiofurini.github.io/approximation-algorithms/knapsack-approximation/#box-16-prop-GRe2approx)).

- $H^{\ell}$ guarantees $\frac{\ell+2}{\ell+1}$ in $O(n^{\ell+1})$ time, which gives a PTAS ([<em>Approximation Algorithms</em>](https://fabiofurini.github.io/approximation-algorithms/knapsack-approximation/#box-20-prop-Hlapprox)).

- The Basic-FPTAS scales the profits and guarantees $\frac{1}{1-\varepsilon}$ in $O(n^2/\varepsilon)$ time ([<em>Approximation Algorithms</em>](https://fabiofurini.github.io/approximation-algorithms/knapsack-approximation/#box-23-prop-fptas)).

- No polynomial algorithm has a fixed absolute guarantee, unless it solves the KP exactly ([<em>Approximation Algorithms</em>](https://fabiofurini.github.io/approximation-algorithms/knapsack-approximation/#box-25-thm-absolute)).

### Ad hoc algorithms { #sez-sec-cat-kp-adhocalgorithms }

- The LP of a node is solved by the Dantzig formulas, without the simplex algorithm, and has one fractional variable: the split item, on which it branches ([Ch. 16](../specialized-algorithms/knapsack-branch-and-bound.md#161-the-algorithm-for-the-kp)).
