---
title: "The knapsack problem"
---

# The knapsack problem

<div class="info-capitolo" markdown>

**Selected problems** · [:material-view-list: Catalogue of combinatorial problems](../catalogue/index.md)

</div>

<a id="sec:cat-kp"></a>

<a id="sec:cat-pagina-central-problems"></a>

!!! chiave ""

    Choose a subset of items of maximum total profit whose total weight does not exceed the capacity.

!!! nota "Where it is treated"

    - [Chapter 1 «Combinatorial optimization problems»](../combinatorial-optimization-problems/combinatorial-optimization.md#121-knapsack-problem): First definition, brute force on a small instance, greedy primal bound and continuous dual bound

    - [Chapter 2 «Knapsack problems»](../combinatorial-optimization-problems/knapsack/index.md): Definition, assumptions, counting, cardinality bound and the seven variants

    - [Chapter 9 «Formulations of the knapsack problem»](../formulations/knapsack-formulations.md): ILP model, the two LP relaxations and their duals, split item, Dantzig and Martello–Toth bounds

    - [Chapter 16 «Principles of dynamic programming»](../dynamic-programming/dp-principles.md#164-the-dp-algorithms-of-this-module): The KP and the UKP as running examples of dynamic programming

    - [Chapter 17 «DP for the knapsack problem»](../dynamic-programming/dp-knapsack/index.md): DP algorithms by capacities, by lists of states and by profits

    - [Chapter 23 «Heuristic algorithms: definitions»](../heuristic-algorithms/heuristics.md#box-2-ex-refKP): KP reference instance of the heuristic part, gap and the flip and swap neighbourhoods

    - [Chapter 24 «Constructive heuristics»](../heuristic-algorithms/constructive-heuristics/the-knapsack-problem-which-order.md#sez-sec-KP): Greedy algorithms by profit, by weight and by efficiency

    - [Chapter 25 «Local search»](../heuristic-algorithms/local-search/kp-feasibility-and-penalties.md#sez-sec-kp): Flip and swap local search, first and best improvement, penalties on the excess weight

    - [Chapter 26 «Metaheuristics»](../heuristic-algorithms/metaheuristics/how-to-escape-from-a-local-optimum.md#sez-sec-sa-kp): Simulated annealing with a penalty, GRASP, genetic and memetic algorithms, the medium instance KP20

    - [Chapter 27 «MIP heuristics for the classical problems»](../heuristic-algorithms/mip-heuristics-classical.md#2721-the-knapsack-problem): Rounding, diving, RINS, local branching and proximity search on the KP model

    - [Chapter 28 «Approximation algorithms: definitions»](../approximation-algorithms/approximation.md): The greedy algorithm without a constant guarantee, in the exercises

    - [Chapter 30 «Approximation algorithms for the knapsack problem»](../approximation-algorithms/knapsack-approximation.md): Greedy, Ext-Greedy, $H^2$, $H^{\ell}$, the PTAS, the Basic-FPTAS and the absence of an absolute guarantee

    - [Chapter 33 «Knapsack: branch-and-bound on the critical item»](../specialized-algorithms/knapsack-branch-and-bound.md): LP-based branch-and-bound with the Dantzig formulas and branching on the split item

## Definition { #sez-sec-cat-kp-def }

- Definition and assumptions: [Catalogue of combinatorial problems](../catalogue/central-problems.md#sez-sec-cat-def-kp).

- The KP models the choice of a subset of objects, projects or investments under one budget or capacity constraint.

- A solution is a <strong>subset</strong> of the items, so an instance with $n$ items has $2^n$ candidate solutions ([Chapter 1 «Combinatorial optimization problems»](../combinatorial-optimization-problems/combinatorial-optimization.md#box-13-prop-subsets)).

- The assumptions $w_j \le c$ for all $j\in\Ioggetti$ and $\sum_{j\in\Ioggetti} w_j > c$ remove the items that never fit and the trivial instances ([Chapter 2 «Knapsack problems»](../combinatorial-optimization-problems/knapsack/index.md#211-assumptions)).

## Bounds and complexity { #sez-sec-cat-kp-prop }

- <strong>Complexity</strong>: Weakly NP-hard: it contains the SSP as the special case $p_j=w_j$, and it is solved by dynamic programming in $\Theta(nc)$ steps, a pseudo-polynomial time ([Chapter 1 «Combinatorial optimization problems»](../combinatorial-optimization-problems/combinatorial-optimization.md#box-23-def-pseudo)).

- Cardinality bound: if the $\bar k$ lightest items are the most that fit, $z(I)$ is at most the sum of the $\bar k$ largest profits ([Chapter 2 «Knapsack problems»](../combinatorial-optimization-problems/knapsack/index.md#box-3-obs-kp-card)).

- $z(\LP\text{-}0_{\KP}) = p_1\,\frac{c}{w_1}$, with item $1$ of largest efficiency (relaxation without $x_j\le 1$) ([Chapter 9 «Formulations of the knapsack problem»](../formulations/knapsack-formulations.md#box-6-propXX)).

- $z(\LP_{\KP}) = \sum_{j=1}^{s-1} p_j + p_s\,\frac{\mathit{rc}}{w_s}$, with the items sorted by non-increasing efficiency ([Chapter 9 «Formulations of the knapsack problem»](../formulations/knapsack-formulations.md#box-14-corLPKP)).

- Dantzig bound $\UB_{\mathrm{D}} = \sum_{j=1}^{s-1} p_j + \left\lfloor p_s\,\frac{\mathit{rc}}{w_s} \right\rfloor$ ([Chapter 9 «Formulations of the knapsack problem»](../formulations/knapsack-formulations.md#box-18-propDantzig)).

- Martello–Toth bound $\UB_{\mathrm{MT}} = \max\{\UB_0,\UB_1\}$, with $\UB_0 = \sum_{j=1}^{s-1} p_j + \left\lfloor \mathit{rc}\,\frac{p_{s+1}}{w_{s+1}} \right\rfloor$ and $\UB_1 = \sum_{j=1}^{s-1} p_j + \left\lfloor p_s - (w_s-\mathit{rc})\,\frac{p_{s-1}}{w_{s-1}} \right\rfloor$ ([Chapter 9 «Formulations of the knapsack problem»](../formulations/knapsack-formulations.md#box-19-propMT)).

- For every instance $z(\LP_{\KP})/z(\ILP_{\KP}) \le 2$, and there are instances where the ratio tends to $2$ as $c\to+\infty$ ([Chapter 9 «Formulations of the knapsack problem»](../formulations/knapsack-formulations.md#box-17-propRatio2tight)).

- The order by efficiency is not enough to find an optimal solution: on the reference instance it gives $\{1,2\}$ with profit $11$, while the optimum is $15$ ([Chapter 2 «Knapsack problems»](../combinatorial-optimization-problems/knapsack/remarks-and-summary.md#211-typical-mistakes)).

- In every node of the branch-and-bound tree at most one variable is fractional, the one of the split item ([Chapter 33 «Knapsack: branch-and-bound on the critical item»](../specialized-algorithms/knapsack-branch-and-bound.md#3311-solving-the-lp_kpk-problem-of-a-node)).

## Formulation { #sez-sec-cat-kp-formulation }

- <strong>ILP model of the KP ($\ILP_{\KP}$)</strong> ([Chapter 9 «Formulations of the knapsack problem»](../formulations/knapsack-formulations.md#eq-NAT_KP)):

\begin{align*}
\max\ & \sum_{j\in\Ioggetti} p_j x_j \\
& \sum_{j\in\Ioggetti} w_j x_j \le c \\
& x_j \in \{0,1\} && j\in\Ioggetti
\end{align*}

- <strong>LP relaxation $\LP_{\KP}$</strong> ([Chapter 9 «Formulations of the knapsack problem»](../formulations/knapsack-formulations.md#94-a-second-linear-programming-relaxation)):

\begin{align*}
\max\ & \sum_{j\in\Ioggetti} p_j x_j \\
& \sum_{j\in\Ioggetti} w_j x_j \le c \\
& x_j \le 1 && j\in\Ioggetti \\
& x_j \ge 0 && j\in\Ioggetti
\end{align*}

- <strong>Dual $D(\LP_{\KP})$</strong> ([Chapter 9 «Formulations of the knapsack problem»](../formulations/knapsack-formulations.md#eq-DUAL)):

\begin{align*}
\min\ & c\,\pi + \sum_{j\in\Ioggetti} \mu_j \\
& w_j\,\pi + \mu_j \ge p_j && j\in\Ioggetti \\
& \pi \ge 0 \\
& \mu_j \ge 0 && j\in\Ioggetti
\end{align*}

- The $\ILP_{\KP}$ model has one binary variable $x_j$ per item, one capacity constraint and the objective of maximizing the total profit ([Chapter 9 «Formulations of the knapsack problem»](../formulations/knapsack-formulations.md#eq-NAT_KP)).

- The relaxation $\LP_{\KP}$ is solved by sorting the items by non-increasing efficiency $p_j/w_j$: the items before the split item $s$ are taken, $s$ for the fraction $\mathit{rc}/w_s$ ([Chapter 9 «Formulations of the knapsack problem»](../formulations/knapsack-formulations.md#box-13-propLPKP)).

- The dual $D(\LP_{\KP})$ has the optimal solution $\tilde{\pi} = p_s/w_s$, $\tilde\mu_j = p_j - w_j\,p_s/w_s$ for $j<s$, and $z(\LP_{\KP}) \le 2\, z(\ILP_{\KP})$ ([Chapter 9 «Formulations of the knapsack problem»](../formulations/knapsack-formulations.md#box-16-propRatio2)).

- Rounding down $z(\LP_{\KP})$ gives the Dantzig bound $\UB_{\mathrm{D}}$; the Martello–Toth bound $\UB_{\mathrm{MT}}$ treats separately the split item out and in ([Chapter 9 «Formulations of the knapsack problem»](../formulations/knapsack-formulations.md#95-knapsack-problem-upper-bounds)).

## Dynamic programming { #sez-sec-cat-kp-dynamicprogramming }

- The recurrence $v(j,k)=\max\{v(j-1,k),\ p_j+v(j-1,k-w_j)\}$ over items and capacities is filled bottom-up in $\Theta(nc)$ steps, which is pseudo-polynomial ([Chapter 17 «DP for the knapsack problem»](../dynamic-programming/dp-knapsack/index.md)).

- The lists $L_j$ of the non-dominated states $(w,p)$ store only the reachable states, with $|L_j|\le \min\{2^j, c+1\}$ ([Chapter 17 «DP for the knapsack problem»](../dynamic-programming/dp-knapsack/a-first-dp-algorithm-an-implementation-with-lists.md#box-29-texkp3graph)).

- Exchanging profits and weights, $u(j,q)$ is the minimum weight of a subset of profit $q$, and $z = \max\{q : u(n,q)\le c\}$ is computed in $\Theta(nP)$ steps ([Chapter 17 «DP for the knapsack problem»](../dynamic-programming/dp-knapsack/a-second-dp-algorithm.md#173-a-second-dp-algorithm)).

- The UKP is solved by the recurrence $v(k)$ over the capacities and the BKP by $v(j,k)$ over the numbers of copies ([Chapter 18 «DP for the unbounded knapsack problem»](../dynamic-programming/dp-unbounded-knapsack/index.md), [Chapter 19 «DP for the bounded knapsack problem»](../dynamic-programming/dp-bounded-knapsack.md)).

## Constructive heuristics { #sez-sec-cat-kp-constructiveheuristics }

- A greedy algorithm for the KP is determined by the order of the items: by profit ($GR_p$), by weight ($GR_w$) or by efficiency ($GR$) ([Chapter 24 «Constructive heuristics»](../heuristic-algorithms/constructive-heuristics/the-knapsack-problem-which-order.md#sez-sec-KP)).

- On the reference instance $GR_p$ finds the optimum $17$, while $GR$ gives $16$ and $GR_w$ gives $10$ ([Chapter 24 «Constructive heuristics»](../heuristic-algorithms/constructive-heuristics/the-knapsack-problem-which-order.md#box-3-ex-kp3)).

- Each of the three orders can be arbitrarily bad, and taking the better of $GR$ and of the best single item guarantees a ratio of $2$ ([Chapter 24 «Constructive heuristics»](../heuristic-algorithms/constructive-heuristics/the-knapsack-problem-which-order.md#sez-sec-KP)).

## Local search { #sez-sec-cat-kp-localsearch }

- The flip neighbourhood adds or removes one item, the swap neighbourhood exchanges a selected and an unselected item; being a local optimum depends on the neighbourhood ([Chapter 23 «Heuristic algorithms: definitions»](../heuristic-algorithms/heuristics.md#box-11-ex-kpneigh)).

- From the solution of $GR_w$, first and best improvement reach the optimum along different paths, $10\to14\to17$ and $10\to16\to17$ ([Chapter 25 «Local search»](../heuristic-algorithms/local-search/first-improvement-and-best-improvement.md#box-3-ex-kpfirstbest)).

- The penalty flip local search maximizes $g_\alpha(x)=\sum_{j} p_j x_j-\alpha\max\{0,\sum_{j} w_jx_j-c\}$ and can cross infeasible vectors; with $\alpha>\max_j p_j$ its local optima are feasible ([Chapter 25 «Local search»](../heuristic-algorithms/local-search/kp-feasibility-and-penalties.md#box-14-ex-kppen)).

## Metaheuristics { #sez-sec-cat-kp-metaheuristics }

- Simulated annealing with the penalized objective $f_\beta$ reaches the optimum of the reference instance through an infeasible solution ([Chapter 26 «Metaheuristics»](../heuristic-algorithms/metaheuristics/how-to-escape-from-a-local-optimum.md#box-5-ex-saKP)).

- GRASP builds randomized greedy solutions with a restricted candidate list on the efficiency and improves each one by local search ([Chapter 26 «Metaheuristics»](../heuristic-algorithms/metaheuristics/grasp.md#box-9-ex-graspKP)).

- Genetic algorithms use the binary vector as chromosome and repair infeasible children; on KP20 the memetic algorithm reaches the optimum $521$ in every run ([Chapter 26 «Metaheuristics»](../heuristic-algorithms/metaheuristics/population-based-methods-genetic-and-memetic-algorithms.md#box-12-ex-gaKP)).

## MIP heuristics { #sez-sec-cat-kp-mipheuristics }

- Rounding down the LP solution is always feasible on the KP, since the model has a single packing constraint ([Chapter 27 «MIP heuristics for the classical problems»](../heuristic-algorithms/mip-heuristics-classical.md#box-3-ex-rounding)).

- Fractional diving on the reference instance fixes $x_2=0$ at the first step and ends with profit $16$, missing the optimum $17$ ([Chapter 27 «MIP heuristics for the classical problems»](../heuristic-algorithms/mip-heuristics-classical.md#box-4-ex-divekp)).

- RINS fails on the reference instance, while local branching and proximity search reach and prove the optimum $\{1,2\}$ ([Chapter 27 «MIP heuristics for the classical problems»](../heuristic-algorithms/mip-heuristics-classical.md#box-12-ex-lbkp), [Chapter 27 «MIP heuristics for the classical problems»](../heuristic-algorithms/mip-heuristics-classical.md#box-14-ex-pskp)).

## Approximation { #sez-sec-cat-kp-approximation }

- The greedy algorithm $GR$ has no constant guarantee, while Ext-Greedy $GR^e$ is a $2$-approximation algorithm and the bound is tight ([Chapter 30 «Approximation algorithms for the knapsack problem»](../approximation-algorithms/knapsack-approximation.md#box-17-prop-GRe2approx)).

- $H^2$ guesses the two items of largest profit and guarantees $\frac{4}{3}$; $H^{\ell}$ guarantees $\frac{\ell+2}{\ell+1}$ in $O(n^{\ell+1})$ time, and $\{H^{\varepsilon}\}$ is a PTAS ([Chapter 30 «Approximation algorithms for the knapsack problem»](../approximation-algorithms/knapsack-approximation.md#box-21-prop-Hlapprox)).

- The Basic-FPTAS rounds down the profits, solves the scaled instance by DP by profits and guarantees $\frac{1}{1-\varepsilon}$ in $O(n^2/\varepsilon)$ time ([Chapter 30 «Approximation algorithms for the knapsack problem»](../approximation-algorithms/knapsack-approximation.md#box-24-prop-fptas)).

- No polynomial algorithm with a fixed absolute performance guarantee exists, unless it solves the KP exactly ([Chapter 30 «Approximation algorithms for the knapsack problem»](../approximation-algorithms/knapsack-approximation.md#box-26-thm-absolute)).

## Branch-and-bound { #sez-sec-cat-kp-branchandbound }

- The problem $\LP_{\KP}^k$ of a node is a knapsack LP on the remaining items with capacity $c(k)$, solved by the Dantzig formulas without the simplex algorithm ([Chapter 33 «Knapsack: branch-and-bound on the critical item»](../specialized-algorithms/knapsack-branch-and-bound.md#box-1-def-LPKPk)).

- The algorithm branches on the variable of the split item, the only fractional one, and prunes a node when $\lfloor z(\LP_{\KP}^k)\rfloor \le \LB$ ([Chapter 33 «Knapsack: branch-and-bound on the critical item»](../specialized-algorithms/knapsack-branch-and-bound.md#331-the-algorithm-for-the-kp)).

- On the reference instance the algorithm closes the gap between $\LB=15$ and $\UB=16$ with $5$ nodes ([Chapter 33 «Knapsack: branch-and-bound on the critical item»](../specialized-algorithms/knapsack-branch-and-bound.md#box-3-texexpbox2)).

## Exercises { #sez-sec-cat-kp-es }

- [Exercise «Brute force, greedy and bound on a knapsack» (in the chapter)](../combinatorial-optimization-problems/combinatorial-optimization.md#110-exercises)

- [«A greedy choice that is not optimal (KP)»](../exercises/combinatorial-optimization.md#esercizio-1-2)

- [«Counting the solutions» (part (a))](../exercises/combinatorial-optimization.md#esercizio-1-3)

- [«Feasibility, value and bounds (KP)»](../exercises/knapsack.md#esercizio-2-1)

- [«Subset sum and its solution as a KP (SSP)»](../exercises/knapsack.md#esercizio-2-2)

- [«Copies of the items (BKP and UKP)»](../exercises/knapsack.md#esercizio-2-3)

- [«Two knapsacks (MKP)»](../exercises/knapsack.md#esercizio-2-4)

- [«One item per class (MCKP)»](../exercises/knapsack.md#esercizio-2-5)

- [«Upper bounds for the Knapsack Problem (1)»](../exercises/knapsack-formulations.md#esercizio-9-1)

- [«Upper bounds for the Knapsack Problem (2)»](../exercises/knapsack-formulations.md#esercizio-9-2)

- [«Upper bounds for the Knapsack Problem (3)»](../exercises/knapsack-formulations.md#esercizio-9-3)

- [«Upper bounds for the Knapsack Problem (4)»](../exercises/knapsack-formulations.md#esercizio-9-4)

- [«Upper bounds for the Knapsack Problem (5)»](../exercises/knapsack-formulations.md#esercizio-9-5)

- [«Knapsack Problem» (DP 1)](../exercises/dp-knapsack.md#esercizio-17-1)

- [«Knapsack Problem» (DP 2)](../exercises/dp-knapsack.md#esercizio-17-2)

- [«Knapsack Problem» (DP 3)](../exercises/dp-knapsack.md#esercizio-17-3)

- [«Knapsack Problem» (DP 4)](../exercises/dp-knapsack.md#esercizio-17-4)

- [«Knapsack Problem» (DP 5)](../exercises/dp-knapsack.md#esercizio-17-5)

- [«Unbounded Knapsack Problem» (DP 1)](../exercises/dp-unbounded-knapsack.md#esercizio-18-1)

- [«Unbounded Knapsack Problem» (DP 2)](../exercises/dp-unbounded-knapsack.md#esercizio-18-2)

- [«Unbounded Knapsack Problem» (DP 3)](../exercises/dp-unbounded-knapsack.md#esercizio-18-3)

- [«Unbounded Knapsack Problem» (DP 4)](../exercises/dp-unbounded-knapsack.md#esercizio-18-4)

- [«Unbounded Knapsack Problem» (DP 5)](../exercises/dp-unbounded-knapsack.md#esercizio-18-5)

- [«Bounded Knapsack Problem» (DP 1)](../exercises/dp-bounded-knapsack.md#esercizio-19-1)

- [«Bounded Knapsack Problem» (DP 2)](../exercises/dp-bounded-knapsack.md#esercizio-19-2)

- [«Bounded Knapsack Problem» (DP 3)](../exercises/dp-bounded-knapsack.md#esercizio-19-3)

- [«Bounded Knapsack Problem» (DP 4)](../exercises/dp-bounded-knapsack.md#esercizio-19-4)

- [«Bounded Knapsack Problem» (DP 5)](../exercises/dp-bounded-knapsack.md#esercizio-19-5)

- [«Gap and relative error»](../exercises/heuristics.md#esercizio-23-1)

- [«Neighbourhoods and local optima»](../exercises/heuristics.md#esercizio-23-4)

- [«Greedy orders for the KP 1»](../exercises/constructive-heuristics.md#esercizio-24-1)

- [«Greedy orders for the KP 2»](../exercises/constructive-heuristics.md#esercizio-24-2)

- [«Greedy orders for the KP 3»](../exercises/constructive-heuristics.md#esercizio-24-3)

- [«Local search KP 1»](../exercises/local-search.md#esercizio-25-1)

- [«Local search KP 2»](../exercises/local-search.md#esercizio-25-2)

- [«Local search KP 3»](../exercises/local-search.md#esercizio-25-3)

- [«Simulated annealing 2» (KP)](../exercises/metaheuristics.md#esercizio-26-2)

- [«GRASP 1» (KP)](../exercises/metaheuristics.md#esercizio-26-10)

- [«GRASP 3» (KP)](../exercises/metaheuristics.md#esercizio-26-12)

- [«Genetic algorithms 1» (KP)](../exercises/metaheuristics.md#esercizio-26-16)

- [«Genetic algorithms 2» (KP)](../exercises/metaheuristics.md#esercizio-26-17)

- [«Rounding and diving on the KP (KP1)»](../exercises/mip-heuristics-classical.md#esercizio-27-1)

- [«Rounding and diving on the KP (KP2)»](../exercises/mip-heuristics-classical.md#esercizio-27-2)

- [«RINS, local branching and proximity search on the KP (KP3)»](../exercises/mip-heuristics-classical.md#esercizio-27-3)

- [«RINS, local branching and proximity search on the KP (KP4)»](../exercises/mip-heuristics-classical.md#esercizio-27-4)

- [«Unbounded ratio of a greedy algorithm»](../exercises/approximation.md#esercizio-28-4)

- [«Greedy 1»](../exercises/knapsack-approximation.md#esercizio-30-1)

- [«Greedy 2»](../exercises/knapsack-approximation.md#esercizio-30-2)

- [«Greedy 3»](../exercises/knapsack-approximation.md#esercizio-30-3)

- [«Ext-Greedy 1»](../exercises/knapsack-approximation.md#esercizio-30-4)

- [«Ext-Greedy 2»](../exercises/knapsack-approximation.md#esercizio-30-5)

- [«Ext-Greedy 3»](../exercises/knapsack-approximation.md#esercizio-30-6)

- [«$H^2$ 1»](../exercises/knapsack-approximation.md#esercizio-30-7)

- [«$H^2$ 2»](../exercises/knapsack-approximation.md#esercizio-30-8)

- [«$H^2$ 3»](../exercises/knapsack-approximation.md#esercizio-30-9)

- [«$H^{\ell}$ 1»](../exercises/knapsack-approximation.md#esercizio-30-10)

- [«$H^{\ell}$ 2»](../exercises/knapsack-approximation.md#esercizio-30-11)

- [«$H^{\ell}$ 3»](../exercises/knapsack-approximation.md#esercizio-30-12)

- [«Basic-FPTAS 1»](../exercises/knapsack-approximation.md#esercizio-30-13)

- [«Basic-FPTAS 2»](../exercises/knapsack-approximation.md#esercizio-30-14)

- [«Basic-FPTAS 3»](../exercises/knapsack-approximation.md#esercizio-30-15)

- [«Branch-and-Bound Algorithm for the Knapsack Problem (P1)»](../exercises/knapsack-branch-and-bound.md#esercizio-33-1)

- [«Branch-and-Bound Algorithm for the Knapsack Problem (P2)»](../exercises/knapsack-branch-and-bound.md#esercizio-33-2)

- [«Branch-and-Bound Algorithm for the Knapsack Problem (P3)»](../exercises/knapsack-branch-and-bound.md#esercizio-33-3)

- [«Branch-and-bound Algorithm for the Knapsack Problem (P4)»](../exercises/knapsack-branch-and-bound.md#esercizio-33-4)

## Variants { #sez-sec-cat-kp-var }

- [Subset sum problem (SSP)](../catalogue/knapsack-family.md#sez-sec-cat-def-ssp): The SSP is solved as the KP with $p_j = w_j$ for all $j\in\Ioggetti$: the answer is yes if and only if the optimal value of this KP equals $c$.

- [Bounded knapsack problem (BKP)](../catalogue/knapsack-family.md#sez-sec-cat-def-bkp): The BKP reduces to the KP when $b_j=1$ for every item, and to the UKP when every bound $b_j$ is large enough not to be binding.

- [Unbounded knapsack problem (UKP)](../catalogue/knapsack-family.md#sez-sec-cat-def-ukp): The UKP is the BKP with $b_j = \hat b_j = \lfloor c/w_j \rfloor$: each item can be taken as many times as it fits.

- [Multidimensional knapsack problem (MDKP)](../catalogue/knapsack-family.md#sez-sec-cat-def-mdkp): The MDKP is the KP with $k$ capacity constraints, one for each resource; with $k=1$ it is the KP.

- [Multiple knapsack problem (MKP)](../catalogue/knapsack-family.md#sez-sec-cat-def-mkp): The MKP is the KP with $m$ knapsacks; every feasible solution of the MKP is feasible for the KP with capacity $\sum_{k\in\mathscr{K}} c_k$, which gives a dual bound.

- [Multiple-choice knapsack problem (MCKP)](../catalogue/knapsack-family.md#sez-sec-cat-def-mckp): The MCKP is the KP with the additional constraint that exactly one item of every class is selected, so an instance can be infeasible.

- [Knapsack problem with setups (KPS)](../catalogue/knapsack-family.md#sez-sec-cat-def-kps): The KPS is the KP in which selecting the first item of a class costs the setup $f_h$ and consumes the setup weight $s_h$; a class with no selected item costs nothing.
