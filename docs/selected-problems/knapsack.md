---
title: "The knapsack problem"
---

# The knapsack problem

<div class="info-capitolo" markdown>

**Selected problems** · [:material-view-list: Catalogue of combinatorial problems](../catalogue/index.md)

</div>

<a id="sec:cat-kp"></a>

<a id="sec:cat-scelto-knapsack"></a>

!!! chiave ""

    What the course does on the knapsack problem (KP): a summary.

## Definition { #sez-sec-cat-kp-definition }

<a id="box-1-def-cat-kp"></a>

!!! definizione "Definition 1: The knapsack problem"

    Given:

    1. a knapsack of <em>capacity</em> $c \in \Z_{\ge 1}$,

    2. a set $\mathscr{I} = \{1,2,\dots,n\}$ of $n$ items,

    3. for each item $j \in \mathscr{I}$, a <em>profit</em> $p_j \in \Z_{\ge 1}$ and a <em>weight</em> $w_j \in \Z_{\ge 1}$,

    the <strong>Knapsack Problem</strong> (KP) asks to decide which items to insert into the knapsack, so that the total weight of the selected items does not exceed the knapsack capacity, and the total profit of the selected items is maximized.

Assumptions and full definition: [Catalogue of combinatorial problems](../catalogue/knapsack-problem.md).

- Weakly NP-hard: dynamic programming solves it in $\Theta(nc)$ steps, a pseudo-polynomial time ([Ch. 1](../combinatorial-optimization-problems/combinatorial-optimization.md#box-12-def-pseudo)).

- Cardinality bound: if at most $\bar k$ items fit, $z(I)$ is at most the sum of the $\bar k$ largest profits ([Ch. 2](../combinatorial-optimization-problems/knapsack/index.md#box-3-obs-kp-card)).

- Sorting by efficiency is not enough: on the instance of Ch. 2 it gives profit $11$, while the optimum is $15$ ([Ch. 2](../combinatorial-optimization-problems/knapsack/remarks-and-summary.md#211-typical-mistakes)).

## Formulations { #sez-sec-cat-kp-formulations }

- The model $\ILP_{\KP}$ has one binary variable per item and one capacity constraint ([Ch. 9](../formulations/knapsack-formulations.md#eq-NAT_KP)).

- The relaxation $\LP_{\KP}$ is solved by sorting the items by efficiency: the items before the split item $s$ are taken, $s$ only in part ([Ch. 9](../formulations/knapsack-formulations.md#box-13-propLPKP)).

- $z(\LP_{\KP}) \le 2\, z(\ILP_{\KP})$, and the ratio $2$ is approached ([Ch. 9](../formulations/knapsack-formulations.md#box-17-propRatio2tight)).

- Rounding down $z(\LP_{\KP})$ gives the Dantzig bound $\UB_{\mathrm{D}}$; the Martello–Toth bound $\UB_{\mathrm{MT}}$ treats the split item out and in ([Ch. 9](../formulations/knapsack-formulations.md#95-knapsack-problem-upper-bounds)).

## Dynamic programming { #sez-sec-cat-kp-dynamicprogramming }

- The recurrence $v(j,k)$ over items and capacities takes $\Theta(nc)$ steps ([Ch. 17](../dynamic-programming/dp-knapsack/index.md)).

- The lists of non-dominated states keep only the reachable states, at most $\min\{2^j, c+1\}$ per stage ([Ch. 17](../dynamic-programming/dp-knapsack/a-first-dp-algorithm-an-implementation-with-lists.md#box-29-texkp3graph)).

- The DP by profits takes $\Theta(nP)$ steps; it is the core of the FPTAS ([Ch. 17](../dynamic-programming/dp-knapsack/a-second-dp-algorithm.md#173-a-second-dp-algorithm)).

- The UKP and the BKP have their own recurrences ([Ch. 18](../dynamic-programming/dp-unbounded-knapsack/index.md), [Ch. 19](../dynamic-programming/dp-bounded-knapsack.md)).

## Heuristics { #sez-sec-cat-kp-heuristics }

- Greedy by profit, by weight and by efficiency: on the four-item instance of [Ch. 23](../heuristic-algorithms/heuristics.md) (optimum $17$) they give $17$, $10$ and $16$ ([Ch. 24](../heuristic-algorithms/constructive-heuristics/the-knapsack-problem-which-order.md#box-3-ex-kp3)).

- Flip and swap local search: first and best improvement reach $17$ along different paths ([Ch. 25](../heuristic-algorithms/local-search/first-improvement-and-best-improvement.md#box-3-ex-kpfirstbest)).

- A penalty on the excess weight lets the search cross infeasible solutions; with $\alpha>\max_j p_j$ its local optima are feasible ([Ch. 25](../heuristic-algorithms/local-search/kp-feasibility-and-penalties.md#box-14-ex-kppen)).

- Simulated annealing, GRASP, genetic and memetic algorithms; on KP20 the memetic algorithm reaches the optimum $521$ in every run ([Ch. 26](../heuristic-algorithms/metaheuristics/population-based-methods-genetic-and-memetic-algorithms.md#box-12-ex-gaKP)).

## MIP heuristics { #sez-sec-cat-kp-mipheuristics }

- Rounding down the LP solution is always feasible, since the model has a single packing constraint ([Ch. 27](../heuristic-algorithms/mip-heuristics-classical.md#box-3-ex-rounding)).

- On the instance of [Ch. 23](../heuristic-algorithms/heuristics.md) fractional diving ends at $16$ and RINS fails, while local branching and proximity search reach and prove the optimum $17$ ([Ch. 27](../heuristic-algorithms/mip-heuristics-classical.md#box-4-ex-divekp)).

## Approximation { #sez-sec-cat-kp-approximation }

- The greedy algorithm has no constant guarantee; Ext-Greedy is a $2$-approximation, and the bound is tight ([Ch. 30](../approximation-algorithms/knapsack-approximation.md#box-17-prop-GRe2approx)).

- $H^{\ell}$ guarantees $\frac{\ell+2}{\ell+1}$ in $O(n^{\ell+1})$ time, which gives a PTAS ([Ch. 30](../approximation-algorithms/knapsack-approximation.md#box-21-prop-Hlapprox)).

- The Basic-FPTAS scales the profits and guarantees $\frac{1}{1-\varepsilon}$ in $O(n^2/\varepsilon)$ time ([Ch. 30](../approximation-algorithms/knapsack-approximation.md#box-24-prop-fptas)).

- No polynomial algorithm has a fixed absolute guarantee, unless it solves the KP exactly ([Ch. 30](../approximation-algorithms/knapsack-approximation.md#box-26-thm-absolute)).

## Branch-and-bound { #sez-sec-cat-kp-branchandbound }

- The LP of a node is solved by the Dantzig formulas, without the simplex algorithm, and has one fractional variable: the split item, on which it branches ([Ch. 33](../specialized-algorithms/knapsack-branch-and-bound.md#331-the-algorithm-for-the-kp)).

- On the instance of [Ch. 2](../combinatorial-optimization-problems/knapsack/index.md) it closes the gap between $\LB=15$ and $\UB=16$ with $5$ nodes ([Ch. 33](../specialized-algorithms/knapsack-branch-and-bound.md#box-3-texexpbox2)).

## Exercises { #sez-sec-cat-kp-es }

- [Ch. 2 — Knapsack problems](../exercises/knapsack.md) (5 exercises).

- [Ch. 9 — Formulations of the knapsack problem](../exercises/knapsack-formulations.md) (5 exercises).

- [Ch. 17 — DP for the knapsack problem](../exercises/dp-knapsack.md) (5 exercises).

- [Ch. 18 — DP for the unbounded knapsack problem](../exercises/dp-unbounded-knapsack.md) (5 exercises).

- [Ch. 19 — DP for the bounded knapsack problem](../exercises/dp-bounded-knapsack.md) (5 exercises).

- [Ch. 23 — Heuristic algorithms: definitions](../exercises/heuristics.md) (2 exercises).

- [Ch. 24 — Constructive heuristics](../exercises/constructive-heuristics.md) (3 exercises).

- [Ch. 25 — Local search](../exercises/local-search.md) (3 exercises).

- [Ch. 26 — Metaheuristics](../exercises/metaheuristics.md) (5 exercises).

- [Ch. 27 — MIP heuristics for the classical problems](../exercises/mip-heuristics-classical.md) (4 exercises).

- [Ch. 28 — Approximation algorithms: definitions](../exercises/approximation.md) (1 exercise).

- [Ch. 30 — Approximation algorithms for the knapsack problem](../exercises/knapsack-approximation.md) (15 exercises).

- [Ch. 33 — Knapsack: branch-and-bound on the critical item](../exercises/knapsack-branch-and-bound.md) (4 exercises).

## Variants { #sez-sec-cat-kp-var }

- [Subset sum problem (SSP)](../catalogue/subset-sum-problem.md): The SSP is solved as the KP with $p_j = w_j$ for all $j\in\Ioggetti$: the answer is yes if and only if the optimal value of this KP equals $c$.

- [Bounded knapsack problem (BKP)](../catalogue/bounded-knapsack-problem.md): The BKP reduces to the KP when $b_j=1$ for every item, and to the UKP when every bound $b_j$ is large enough not to be binding.

- [Unbounded knapsack problem (UKP)](../catalogue/unbounded-knapsack-problem.md): The UKP is the BKP with $b_j = \hat b_j = \lfloor c/w_j \rfloor$: each item can be taken as many times as it fits.

- [Multidimensional knapsack problem (MDKP)](../catalogue/multidimensional-knapsack-problem.md): The MDKP is the KP with $k$ capacity constraints, one for each resource; with $k=1$ it is the KP.

- [Multiple knapsack problem (MKP)](../catalogue/multiple-knapsack-problem.md): The MKP is the KP with $m$ knapsacks; every feasible solution of the MKP is feasible for the KP with capacity $\sum_{k\in\mathscr{K}} c_k$, which gives a dual bound.

- [Multiple-choice knapsack problem (MCKP)](../catalogue/multiple-choice-knapsack-problem.md): The MCKP is the KP with the additional constraint that exactly one item of every class is selected, so an instance can be infeasible.

- [Knapsack problem with setups (KPS)](../catalogue/knapsack-problem-with-setups.md): The KPS is the KP in which selecting the first item of a class costs the setup $f_h$ and consumes the setup weight $s_h$; a class with no selected item costs nothing.
