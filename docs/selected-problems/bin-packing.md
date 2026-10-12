---
title: "The bin packing problem"
---

# The bin packing problem

<div class="info-capitolo" markdown>

**Selected problems** · [:material-view-list: Catalogue of combinatorial problems](../catalogue/index.md)

</div>

<a id="sec:cat-bpp"></a>

<a id="sec:cat-pagina-central-problems"></a>

!!! chiave ""

    Pack items of given weights into the minimum number of identical bins of capacity $c$.

!!! nota "Where it is treated"

    - [Chapter 1 «Combinatorial optimization problems»](../combinatorial-optimization-problems/combinatorial-optimization.md#box-4-def-oc1-bpp): First statement, a small instance, counting of the partitions and first bounds

    - [Chapter 3 «Bin packing and cutting stock»](../combinatorial-optimization-problems/bin-packing/index.md): Definition, assumptions, weight bound, and the cutting stock problem

    - [Chapter 7 «Parallel machine scheduling»](../combinatorial-optimization-problems/pcmax/index.md#76-relation-with-the-bin-packing-problem): Relation with $P\,||\,C_{\max}$: machines as bins, makespan as capacity

    - [Chapter 10 «Formulations of the bin packing problem»](../formulations/bin-packing-formulations.md): The $\ILP_{\BPP}$ model, its two LP relaxations and their duals, and the ratio $\frac{1}{2}$

    - [Chapter 23 «Heuristic algorithms: definitions»](../heuristic-algorithms/heuristics.md#box-3-ex-refBPP): Reference instance of the heuristic algorithms, primal and dual bounds, gap

    - [Chapter 24 «Constructive heuristics»](../heuristic-algorithms/constructive-heuristics/the-bin-packing-problem-first-sort-then-pack.md#sez-sec-BPP): First Fit Decreasing and Best Fit Decreasing

    - [Chapter 25 «Local search»](../heuristic-algorithms/local-search/local-search-the-scheme.md#2542-bpp-move-and-swap): Move and swap neighbourhoods, plateaus and the auxiliary objective $\sum_b L_b^2$

    - [Chapter 26 «Metaheuristics»](../heuristic-algorithms/metaheuristics/large-neighbourhood-search.md#sez-sec-lns-bpp): Large neighbourhood search with heuristic and exact repair

    - [Chapter 27 «MIP heuristics for the classical problems»](../heuristic-algorithms/mip-heuristics-classical.md#2722-the-bin-packing-problem): Rounding, diving, feasibility pump and the heuristics of Gurobi

    - [Chapter 29 «Approximation algorithms for bin packing»](../approximation-algorithms/bin-packing-approximation.md): Next Fit and the Any Fit class (First Fit, Best Fit, Worst Fit) with their worst-case ratios

## Definition { #sez-sec-cat-bpp-def }

- Definition and assumptions: [Catalogue of combinatorial problems](../catalogo/central-problems.md#sez-sec-cat-def-bpp).

- A solution is a <strong>partition</strong> of the items into packing patterns, one per bin, so the candidate solutions are counted by the Bell numbers ([Chapter 1 «Combinatorial optimization problems»](../combinatorial-optimization-problems/combinatorial-optimization.md#133-partitions-and-bell-numbers)).

- The bins model containers, vans, disks or time slots of fixed size, and the problem asks to use as few of them as possible.

- The assumptions $w_j \le c$ for all $j\in\Ioggetti$ and $\sum_{j\in\Ioggetti} w_j > c$ guarantee that every item fits in a bin and that more than one bin is needed ([Chapter 3 «Bin packing and cutting stock»](../combinatorial-optimization-problems/bin-packing/index.md#311-assumptions)).

## Bounds and complexity { #sez-sec-cat-bpp-prop }

- <strong>Complexity</strong>: Strongly NP-hard: no pseudo-polynomial algorithm exists unless $P=NP$.

- $\LB = \left\lceil \sum_{j \in \Ioggetti} w_j / c \right\rceil$ (weight bound): every feasible solution uses at least this number of bins ([Chapter 3 «Bin packing and cutting stock»](../combinatorial-optimization-problems/bin-packing/index.md#box-3-obs-bpp-l1)).

- $z(\LP\text{-}0_{\BPP}) = z(\LP_{\BPP}) = \sum_{j \in \Ioggetti} w_j / c$, so rounding the LP bound up gives the weight bound again ([Chapter 10 «Formulations of the bin packing problem»](../formulations/bin-packing-formulations.md#box-11-cor_lp_bpp_value)).

- The weight bound is not always tight: with three items of weight $6$ and $c=10$ it gives $\lceil 18/10 \rceil = 2$, while $3$ bins are needed ([Chapter 3 «Bin packing and cutting stock»](../combinatorial-optimization-problems/bin-packing/remarks-and-summary.md#34-typical-mistakes)).

- In an optimal solution no two bins have total weight at most $c/2$, which yields the ratio $\frac12$ of the LP bound ([Chapter 10 «Formulations of the bin packing problem»](../formulations/bin-packing-formulations.md#box-12-prop_lp_bpp_ratio_half)).

- In any solution of an Any Fit algorithm the items of two bins never fit together into one bin ([Chapter 29 «Approximation algorithms for bin packing»](../approximation-algorithms/bin-packing-approximation.md#sez-sec-AF)).

## Formulation { #sez-sec-cat-bpp-formulation }

- <strong>ILP model of the BPP ($\ILP_{\BPP}$)</strong> ([Chapter 10 «Formulations of the bin packing problem»](../formulations/bin-packing-formulations.md#eq-NAT_BPP)):

\begin{align*}
\min ~~ & \sum_{b \in \mathscr{B}} y_b \\
\text{subject to} \quad & \sum_{b \in \mathscr{B}} x_{jb} = 1, & \forall j \in \Ioggetti, \\
& - \sum_{j \in \Ioggetti} w_j \; x_{jb} + c \; y_b \geq 0, & \forall b \in \mathscr{B}, \\
& x_{jb} \in \{0,1\}, & \forall j \in \Ioggetti,~ \forall b \in \mathscr{B}, \\
& y_b \in \{0,1\}, & \forall b \in \mathscr{B}
\end{align*}

- <strong>Dual of the first LP relaxation ($D(\LP\text{-}0_{\BPP})$)</strong> ([Chapter 10 «Formulations of the bin packing problem»](../formulations/bin-packing-formulations.md#eq-DUAL_0)):

\begin{align*}
\max ~~ & \sum_{j \in \Ioggetti} \mu_j \\
\text{subject to} \quad & \mu_j - w_j \; \pi_b \le 0, & \forall j \in \Ioggetti,~\forall b \in \mathscr{B}, \\
& c \; \pi_b \le 1, & \forall b \in \mathscr{B}, \\
& \mu_j \gtreqless 0, & \forall j \in \Ioggetti, \\
& \pi_b \ge 0, & \forall b \in \mathscr{B}
\end{align*}

- Given an upper bound $m$ on the number of bins, the $\ILP_{\BPP}$ model uses $mn$ assignment variables $x_{jb}$ and $m$ activation variables $y_b$, linked by the capacity constraints ([Chapter 10 «Formulations of the bin packing problem»](../formulations/bin-packing-formulations.md#102-an-ilp-model-for-the-bin-packing-problem)).

- Both LP relaxations, with $y_b \ge 0$ and with $0 \le y_b \le 1$, have optimal value $\sum_{j\in\Ioggetti} w_j / c$, attained by $\tilde x_{jb}=\frac1m$ and certified by the dual solution $\tilde\mu_j = w_j/c$, $\tilde\pi_b = 1/c$ ([Chapter 10 «Formulations of the bin packing problem»](../formulations/bin-packing-formulations.md#box-6-cor_lp0_bpp_value)).

- The ratios $z(\LP_{\BPP})/z(\ILP_{\BPP})$ and $\lceil z(\LP_{\BPP}) \rceil/z(\ILP_{\BPP})$ are at least $\frac12$, and the value $\frac12$ is approached asymptotically ([Chapter 10 «Formulations of the bin packing problem»](../formulations/bin-packing-formulations.md#box-12-prop_lp_bpp_ratio_half), [Chapter 10 «Formulations of the bin packing problem»](../formulations/bin-packing-formulations.md#box-15-prop_ceil_lp_bpp_ratio_tight)).

## Constructive heuristics { #sez-sec-cat-bpp-constructiveheuristics }

- First Fit Decreasing (FFD) sorts the items by non-increasing weight and packs each one into the first bin where it fits, in $O(n^2)$ time ([Chapter 24 «Constructive heuristics»](../heuristic-algorithms/constructive-heuristics/the-bin-packing-problem-first-sort-then-pack.md#sez-sec-FFD)).

- Best Fit Decreasing (BFD) sorts the items in the same way and packs each one into the fullest bin where it fits; both find the optimum $3$ on the reference instance ([Chapter 24 «Constructive heuristics»](../heuristic-algorithms/constructive-heuristics/the-bin-packing-problem-first-sort-then-pack.md#box-4-ex-ffd)).

- FFD satisfies $FFD(I) \le \frac{11}{9}\, z(I) + \frac{6}{9}$ and the bound is tight, yet on some instances FFD is worse than First Fit in the input order ([Chapter 24 «Constructive heuristics»](../heuristic-algorithms/constructive-heuristics/the-bin-packing-problem-first-sort-then-pack.md#box-6-ex-ffdworse)).

## Local search { #sez-sec-cat-bpp-localsearch }

- The move neighbourhood transfers one item to another non-empty bin where it fits, and the swap neighbourhood exchanges two items of different weight in different bins ([Chapter 25 «Local search»](../heuristic-algorithms/local-search/local-search-the-scheme.md#2542-bpp-move-and-swap)).

- The number of bins is flat, so the search is guided by the auxiliary objective $\max \sum_b L_b^2$, whose change for a transfer of $\delta$ from $L_a$ to $L_b$ is $2\,\delta\,(L_b-L_a+\delta)$ ([Chapter 25 «Local search»](../heuristic-algorithms/local-search/flat-landscapes-and-auxiliary-objectives.md#box-9-prop-transfer)).

- Every move that empties a bin increases $\sum_b L_b^2$, and with this objective the move search turns the First Fit solution of the reference instance into an optimal one ([Chapter 25 «Local search»](../heuristic-algorithms/local-search/flat-landscapes-and-auxiliary-objectives.md#box-12-ex-bppff)).

- The variable neighbourhood descent with move and swap and the auxiliary objective reaches the optimum in $89$ of $100$ runs on the medium instance with $c=10$ and $n=12$ ([Chapter 25 «Local search»](../heuristic-algorithms/local-search/variable-neighbourhood-descent.md#sez-sec-vnd)).

## Metaheuristics { #sez-sec-cat-bpp-metaheuristics }

- Large neighbourhood search empties the least loaded bin and $q-1$ random bins, repacks their items by FFD or exactly, and accepts packings with fewer bins or with a larger $\sum_b(\sum_{j\in P_b}w_j)^2$ ([Chapter 26 «Metaheuristics»](../heuristic-algorithms/metaheuristics/large-neighbourhood-search.md#sez-sec-lns-bpp)).

- On the instance BPP24 the FFD repair never improves the FFD packing, while the exact repair with $q\ge 3$ reaches the optimum $9$ in every run ([Chapter 26 «Metaheuristics»](../heuristic-algorithms/metaheuristics/the-problems-and-the-assumptions.md#box-3-ex-medium)).

## MIP heuristics { #sez-sec-cat-bpp-mipheuristics }

- Rounding and fractional diving fail on the reference instance, because the LP spreads an item over several bins and its value stays $3$ at every fixing ([Chapter 27 «MIP heuristics for the classical problems»](../heuristic-algorithms/mip-heuristics-classical.md#sez-sec-diving)).

- The feasibility pump finds a feasible packing with every seed, but it may leave empty bins open, since the distance function ignores the objective ([Chapter 27 «MIP heuristics for the classical problems»](../heuristic-algorithms/mip-heuristics-classical.md#box-8-ex-fpbpp)).

- On a medium instance with $n=60$ and $\LB = 23 = z(I)$ the heuristics of Gurobi decide the solution time, since the whole difficulty is primal ([Chapter 27 «MIP heuristics for the classical problems»](../heuristic-algorithms/mip-heuristics-classical.md#box-19-ex-gurobi)).

## Approximation { #sez-sec-cat-bpp-approximation }

- Every Any Fit algorithm satisfies the half-full property, hence $\mathscr{A}(I) \le 2\, z(I)$ ([Chapter 29 «Approximation algorithms for bin packing»](../approximation-algorithms/bin-packing-approximation.md#box-14-prop-halffullAF), [Chapter 29 «Approximation algorithms for bin packing»](../approximation-algorithms/bin-packing-approximation.md#box-17-prop-halffull2approx)).

- Next Fit and Worst Fit have $r(NF) = r(WF) = 2$, shown by the instances with $c=n$ and weights alternating $\frac n2$ and $2$ ([Chapter 29 «Approximation algorithms for bin packing»](../approximation-algorithms/bin-packing-approximation.md#box-19-prop-NFtight), [Chapter 29 «Approximation algorithms for bin packing»](../approximation-algorithms/bin-packing-approximation.md#box-20-prop-WFtight)).

- First Fit and Best Fit have $r(FF) = r(BF) = \frac{17}{10}$ ([Chapter 29 «Approximation algorithms for bin packing»](../approximation-algorithms/bin-packing-approximation.md#box-22-propFFtight)).

- No polynomial algorithm has a ratio below $\frac32$ unless $P=NP$, since deciding whether $2$ bins suffice is the NP-complete PARTITION problem.

## Exercises { #sez-sec-cat-bpp-es }

- [«Recognizing the problems» (in the chapter)](../combinatorial-optimization-problems/combinatorial-optimization.md#110-exercises)

- [«Counting the solutions»](../exercises/combinatorial-optimization.md#esercizio-1-3)

- [«A greedy choice that is not optimal (BPP)»](../exercises/combinatorial-optimization.md#esercizio-1-4)

- [«Checking a packing (BPP)»](../exercises/bin-packing.md#esercizio-3-1)

- [«When the weight bound is not tight (BPP)»](../exercises/bin-packing.md#esercizio-3-2)

- [«Counting the packings (BPP)»](../exercises/bin-packing.md#esercizio-3-3)

- [«Copies of the items (cutting stock)»](../exercises/bin-packing.md#esercizio-3-4)

- [«Filling every bin exactly (BPP)»](../exercises/bin-packing.md#esercizio-3-5)

- [«Makespan and bin packing ($\PCmax$)»](../exercises/pcmax.md#esercizio-7-5)

- [«ILP model of the Bin Packing Problem (1)»](../exercises/bin-packing-formulations.md#esercizio-10-1)

- [«LP relaxations of the BPP model (1)»](../exercises/bin-packing-formulations.md#esercizio-10-2)

- [«Feasible solutions of the BPP model (1)»](../exercises/bin-packing-formulations.md#esercizio-10-3)

- [«The bounds $y_b\le 1$ and the choice of m (1)»](../exercises/bin-packing-formulations.md#esercizio-10-4)

- [«Integrality gap of the BPP model (1)»](../exercises/bin-packing-formulations.md#esercizio-10-5)

- [«Gaps for minimization problems (1)»](../exercises/heuristics.md#esercizio-23-2)

- [«Decreasing bin packing 1»](../exercises/constructive-heuristics.md#esercizio-24-4)

- [«Decreasing bin packing 2»](../exercises/constructive-heuristics.md#esercizio-24-5)

- [«Decreasing bin packing 3»](../exercises/constructive-heuristics.md#esercizio-24-6)

- [«Local search BPP 1»](../exercises/local-search.md#esercizio-25-4)

- [«Local search BPP 2»](../exercises/local-search.md#esercizio-25-5)

- [«Local search BPP 3»](../exercises/local-search.md#esercizio-25-6)

- [«Large neighbourhood search 1»](../exercises/metaheuristics.md#esercizio-26-13)

- [«Large neighbourhood search 2»](../exercises/metaheuristics.md#esercizio-26-14)

- [«An algorithm without a guarantee (1)»](../exercises/approximation.md#esercizio-28-3)

- [«Next Fit 1»](../exercises/bin-packing-approximation.md#esercizio-29-1)

- [«Next Fit 2»](../exercises/bin-packing-approximation.md#esercizio-29-2)

- [«Next Fit 3»](../exercises/bin-packing-approximation.md#esercizio-29-3)

- [«First Fit 1»](../exercises/bin-packing-approximation.md#esercizio-29-4)

- [«First Fit 2»](../exercises/bin-packing-approximation.md#esercizio-29-5)

- [«First Fit 3»](../exercises/bin-packing-approximation.md#esercizio-29-6)

- [«Best Fit 1»](../exercises/bin-packing-approximation.md#esercizio-29-7)

- [«Best Fit 2»](../exercises/bin-packing-approximation.md#esercizio-29-8)

- [«Best Fit 3»](../exercises/bin-packing-approximation.md#esercizio-29-9)

- [«Worst Fit 1»](../exercises/bin-packing-approximation.md#esercizio-29-10)

- [«Worst Fit 2»](../exercises/bin-packing-approximation.md#esercizio-29-11)

- [«Worst Fit 3»](../exercises/bin-packing-approximation.md#esercizio-29-12)

## Variants { #sez-sec-cat-bpp-var }

- [Cutting stock problem (CSP)](../catalogo/packing.md#sez-sec-cat-def-csp): The CSP is the BPP with $d_j$ identical copies of every item $j$, and the BPP is the case $d_j = 1$ for all $j\in\Ioggetti$.
