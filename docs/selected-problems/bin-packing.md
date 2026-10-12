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

- Definition and assumptions: [Catalogue of combinatorial problems](../catalogue/central-problems.md#sez-sec-cat-def-bpp).

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

## Instances { #sez-sec-cat-bpp-ist }

### Instance BPP1 { #sez-sec-cat-ist-bpp1 }

Reference instance of the bin packing chapter.

Bin capacity $c=10$, $n=5$ items:

$$
\begin{array}{l|ccccc}
\hline
j & 1 & 2 & 3 & 4 & 5 \\
\hline
w_j & 6 & 5 & 4 & 7 & 3 \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{BPP1})=3$, attained by $\{\{4,5\},\{1,3\},\{2\}\}$ (one of $4$ optimal partitions).

- Used in [Example «BPP instances»](../combinatorial-optimization-problems/bin-packing/index.md#box-2-ex-bpp), [Section «Counting the solutions, a first solution and a simple bound»](../combinatorial-optimization-problems/bin-packing/index.md#312-counting-the-solutions-a-first-solution-and-a-simple-bound), [Example «Execution of NF»](../approximation-algorithms/bin-packing-approximation.md#box-2-ex-NFexec1), [Example «Execution of FF»](../approximation-algorithms/bin-packing-approximation.md#box-6-ex-FFexec1), [Example «Execution of BF»](../approximation-algorithms/bin-packing-approximation.md#box-8-ex-BFexec1), [Example «Execution of WF»](../approximation-algorithms/bin-packing-approximation.md#box-10-ex-WFexec1).

### Instance CSP1 { #sez-sec-cat-ist-csp1 }

Reference cutting stock instance of the bin packing chapter.

Roll length $c=10$, $4$ item types:

$$
\begin{array}{l|cccc}
\hline
j & 1 & 2 & 3 & 4 \\
\hline
w_j & 4 & 5 & 3 & 6 \\
d_j & 2 & 1 & 3 & 1 \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{CSP1})=3$, attained by

    $$
    \{\{(4,1),(1,1)\},\{(1,2),(3,1),(3,2)\},\{(2,1),(3,3)\}\}
    $$

    .

- Used in [Example «CSP instances»](../combinatorial-optimization-problems/bin-packing/the-cutting-stock-problem.md#box-5-ex-csp), [Section «Counting the solutions, a first solution and a simple bound»](../combinatorial-optimization-problems/bin-packing/the-cutting-stock-problem.md#322-counting-the-solutions-a-first-solution-and-a-simple-bound).

### Instance BPP2 { #sez-sec-cat-ist-bpp2 }

Small instance of the first chapter, reference instance of the heuristic algorithms.

Bin capacity $c=7$, $n=6$ items:

$$
\begin{array}{l|cccccc}
\hline
j & 1 & 2 & 3 & 4 & 5 & 6 \\
\hline
w_j & 4 & 4 & 5 & 3 & 2 & 3 \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{BPP2})=3$, attained by $\{1,4\},\{2,6\},\{3,5\}$, three full bins.

- Used in [Example «a small bin packing instance»](../combinatorial-optimization-problems/combinatorial-optimization.md#box-5-ex-oc1-bpp), [Example «how many candidate solutions»](../combinatorial-optimization-problems/combinatorial-optimization.md#box-16-ex-oc1-count), [Example «bounds on the small instances»](../combinatorial-optimization-problems/combinatorial-optimization.md#box-21-ex-oc1-bounds), [Example «BPP reference instance»](../heuristic-algorithms/heuristics.md#box-3-ex-refBPP), [Example «Bounds and gaps on the reference instances»](../heuristic-algorithms/heuristics.md#box-7-ex-gaps), [Example «FF and FFD on the BPP reference instance»](../heuristic-algorithms/constructive-heuristics/the-bin-packing-problem-first-sort-then-pack.md#box-4-ex-ffd), [Example «BFD on the BPP reference instance»](../heuristic-algorithms/constructive-heuristics/the-bin-packing-problem-first-sort-then-pack.md#box-5-ex-bfd), [Example «The number of bins is blind, the auxiliary objective is not»](../heuristic-algorithms/local-search/flat-landscapes-and-auxiliary-objectives.md#box-12-ex-bppff), [Example «Starting from NF»](../heuristic-algorithms/local-search/flat-landscapes-and-auxiliary-objectives.md#box-13-ex-bppnf), [Example «LNS on the BPP reference instance»](../heuristic-algorithms/metaheuristics/large-neighbourhood-search.md#box-11-ex-lnsBPP), [Example «The LP solutions of the reference instances»](../heuristic-algorithms/mip-heuristics-classical.md#box-2-ex-lpsol), [Example «Rounding on the reference instances»](../heuristic-algorithms/mip-heuristics-classical.md#box-3-ex-rounding), [Section «Diving»](../heuristic-algorithms/mip-heuristics-classical.md#sez-sec-diving), [Example «The feasibility pump on the BPP»](../heuristic-algorithms/mip-heuristics-classical.md#box-8-ex-fpbpp).

### Instance BPP3 { #sez-sec-cat-ist-bpp3 }

Counting the partitions, instance (c).

Bin capacity $c=8$, $n=5$ items:

$$
\begin{array}{l|ccccc}
\hline
j & 1 & 2 & 3 & 4 & 5 \\
\hline
w_j & 5 & 4 & 3 & 3 & 2 \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{BPP3})=3$, attained by for example $\{\{1\},\{2\},\{3,4,5\}\}$ ($13$ optimal partitions).

- Used in [«Counting the solutions»](../exercises/combinatorial-optimization.md#esercizio-1-3).

### Instance BPP4 { #sez-sec-cat-ist-bpp4 }

First Fit is not optimal.

Bin capacity $c=10$, $n=6$ items:

$$
\begin{array}{l|cccccc}
\hline
j & 1 & 2 & 3 & 4 & 5 & 6 \\
\hline
w_j & 5 & 4 & 5 & 6 & 8 & 2 \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{BPP4})=3$, attained by $\{\{1,3\},\{2,4\},\{5,6\}\}$.

- Used in [«A greedy choice that is not optimal (BPP)»](../exercises/combinatorial-optimization.md#esercizio-1-4).

### Instance BPP5 { #sez-sec-cat-ist-bpp5 }

Checking a packing.

Bin capacity $c=12$, $n=8$ items:

$$
\begin{array}{l|cccccccc}
\hline
j & 1 & 2 & 3 & 4 & 5 & 6 & 7 & 8 \\
\hline
w_j & 7 & 5 & 4 & 6 & 3 & 8 & 2 & 4 \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{BPP5})=4$, attained by $\{\{1,2\},\{3,6\},\{4,5,7\},\{8\}\}$.

- Used in [«Checking a packing (BPP)»](../exercises/bin-packing.md#esercizio-3-1).

### Instance BPP6 { #sez-sec-cat-ist-bpp6 }

Weight bound not tight.

Bin capacity $c=10$, $n=6$ items:

$$
\begin{array}{l|cccccc}
\hline
j & 1 & 2 & 3 & 4 & 5 & 6 \\
\hline
w_j & 7 & 6 & 6 & 5 & 3 & 3 \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{BPP6})=4$, attained by $\{\{1\},\{2\},\{3,6\},\{4,5\}\}$ (one of $12$ optimal partitions).

- Used in [«When the weight bound is not tight (BPP)»](../exercises/bin-packing.md#esercizio-3-2).

### Instance BPP7 { #sez-sec-cat-ist-bpp7 }

Counting the packings.

Bin capacity $c=12$, $n=5$ items:

$$
\begin{array}{l|ccccc}
\hline
j & 1 & 2 & 3 & 4 & 5 \\
\hline
w_j & 7 & 6 & 5 & 4 & 2 \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{BPP7})=2$, attained by $\{\{1,3\},\{2,4,5\}\}$ (unique).

- Used in [«Counting the packings (BPP)»](../exercises/bin-packing.md#esercizio-3-3).

### Instance CSP2 { #sez-sec-cat-ist-csp2 }

Copies of the items.

Roll length $c=10$, $3$ item types:

$$
\begin{array}{l|ccc}
\hline
j & 1 & 2 & 3 \\
\hline
w_j & 5 & 4 & 3 \\
d_j & 2 & 3 & 2 \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{CSP2})=3$, attained by

    $$
    \{\{(1,1),(1,2)\},\{(2,1),(3,1),(3,2)\},\{(2,2),(2,3)\}\}
    $$

    .

- Used in [«Copies of the items (cutting stock)»](../exercises/bin-packing.md#esercizio-3-4).

### Instance BPP8 { #sez-sec-cat-ist-bpp8 }

Filling every bin exactly.

Bin capacity $c=10$, $n=8$ items:

$$
\begin{array}{l|cccccccc}
\hline
j & 1 & 2 & 3 & 4 & 5 & 6 & 7 & 8 \\
\hline
w_j & 5 & 5 & 4 & 4 & 4 & 3 & 3 & 2 \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{BPP8})=3$, attained by $\{\{1,2\},\{3,4,8\},\{5,6,7\}\}$.

- Used in [«Filling every bin exactly (BPP)»](../exercises/bin-packing.md#esercizio-3-5).

### Instance BPP9 { #sez-sec-cat-ist-bpp9 }

Filling every bin exactly, with item $8$ of weight $3$ (Question 4).

Bin capacity $c=10$, $n=8$ items:

$$
\begin{array}{l|cccccccc}
\hline
j & 1 & 2 & 3 & 4 & 5 & 6 & 7 & 8 \\
\hline
w_j & 5 & 5 & 4 & 4 & 4 & 3 & 3 & 3 \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{BPP9})=4$.

- Used in [«Filling every bin exactly (BPP)», Question 4](../exercises/bin-packing.md#esercizio-3-5).

### Instance BPP10 { #sez-sec-cat-ist-bpp10 }

Three items larger than $c/2$.

Bin capacity $c=10$, $n=3$ items:

$$
\begin{array}{l|ccc}
\hline
j & 1 & 2 & 3 \\
\hline
w_j & 6 & 6 & 6 \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{BPP10})=3$, attained by one item per bin.

- Used in [Section «Typical mistakes»](../combinatorial-optimization-problems/bin-packing/remarks-and-summary.md#34-typical-mistakes), [«The bounds $y_b\le 1$ and the choice of m (1)»](../exercises/bin-packing-formulations.md#esercizio-10-4).

### Instance BPP11 { #sez-sec-cat-ist-bpp11 }

Example 1 of the formulation chapter.

Bin capacity $c=10$, $n=3$ items:

$$
\begin{array}{l|ccc}
\hline
j & 1 & 2 & 3 \\
\hline
w_j & 7 & 6 & 3 \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{BPP11})=2$, attained by $\tilde P_1 = \{1,3\}$, $\tilde P_2 = \{2\}$; $z(\LP_{\BPP}) = \frac85$.

- Used in [Example «$\ILP_{\BPP}$ model»](../formulations/bin-packing-formulations.md#box-2-texexpbox_ilp_bpp), [Example «$\LP\text{-}0_{\BPP}$ model»](../formulations/bin-packing-formulations.md#box-3-texexpbox_lp0_bpp), [Example «$D(\LP\text{-}0_{\BPP})$ model»](../formulations/bin-packing-formulations.md#box-4-texexpbox_dlp0_bpp), [Example «$\LP_{\BPP}$ model»](../formulations/bin-packing-formulations.md#box-8-texexpbox_lp_bpp), [Example «$D(\LP_{\BPP})$ model»](../formulations/bin-packing-formulations.md#box-9-texexpbox_dlp_bpp).

### Instance BPP12 { #sez-sec-cat-ist-bpp12 }

ILP model with $m=3$; instance $I_0$ of the algorithm SEP.

Bin capacity $c=10$, $n=5$ items:

$$
\begin{array}{l|ccccc}
\hline
j & 1 & 2 & 3 & 4 & 5 \\
\hline
w_j & 6 & 5 & 4 & 3 & 2 \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{BPP12})=2$, attained by $\{\{1,3\},\{2,4,5\}\}$.

- Used in [«ILP model of the Bin Packing Problem (1)»](../exercises/bin-packing-formulations.md#esercizio-10-1), [«An algorithm without a guarantee (1)»](../exercises/approximation.md#esercizio-28-3).

### Instance BPP13 { #sez-sec-cat-ist-bpp13 }

LP relaxations and their duals.

Bin capacity $c=12$, $n=5$ items:

$$
\begin{array}{l|ccccc}
\hline
j & 1 & 2 & 3 & 4 & 5 \\
\hline
w_j & 7 & 6 & 5 & 4 & 3 \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{BPP13})=3$, attained by $\{1,3\},\{2,4\},\{5\}$; $z(\LP_{\BPP}) = \frac{25}{12}$.

- Used in [«LP relaxations of the BPP model (1)»](../exercises/bin-packing-formulations.md#esercizio-10-2).

### Instance BPP14 { #sez-sec-cat-ist-bpp14 }

Feasible solutions of the ILP model.

Bin capacity $c=10$, $n=6$ items:

$$
\begin{array}{l|cccccc}
\hline
j & 1 & 2 & 3 & 4 & 5 & 6 \\
\hline
w_j & 5 & 4 & 4 & 3 & 2 & 2 \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{BPP14})=2$, attained by $\{1,4,5\},\{2,3,6\}$.

- Used in [«Feasible solutions of the BPP model (1)»](../exercises/bin-packing-formulations.md#esercizio-10-3).

### Instance BPP15 { #sez-sec-cat-ist-bpp15 }

Integrality gap, first family with $\vartheta=4$, $n=4$.

Bin capacity $c=8$, $n=4$ items:

$$
\begin{array}{l|cccc}
\hline
j & 1 & 2 & 3 & 4 \\
\hline
w_j & 5 & 5 & 5 & 5 \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{BPP15})=4$.

- Used in [«Integrality gap of the BPP model (1)»](../exercises/bin-packing-formulations.md#esercizio-10-5).

### Instance BPP16 { #sez-sec-cat-ist-bpp16 }

Integrality gap, second family with $n=6$.

Bin capacity $c=6$, $n=6$ items:

$$
\begin{array}{l|cccccc}
\hline
j & 1 & 2 & 3 & 4 & 5 & 6 \\
\hline
w_j & 4 & 4 & 4 & 4 & 4 & 4 \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{BPP16})=6$.

- Used in [«Integrality gap of the BPP model (1)», Question 4](../exercises/bin-packing-formulations.md#esercizio-10-5).

### Instance BPP17 { #sez-sec-cat-ist-bpp17 }

Gap equal to the relative error.

Bin capacity $c=10$, $n=8$ items:

$$
\begin{array}{l|cccccccc}
\hline
j & 1 & 2 & 3 & 4 & 5 & 6 & 7 & 8 \\
\hline
w_j & 6 & 5 & 4 & 4 & 3 & 3 & 2 & 2 \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{BPP17})=3$, attained by $\{1,3\},\{2,5,7\},\{4,6,8\}$.

- Used in [«Gaps for minimization problems (1)», instance (a)](../exercises/heuristics.md#esercizio-23-2).

### Instance BPP18 { #sez-sec-cat-ist-bpp18 }

Weak dual bound.

Bin capacity $c=10$, $n=5$ items:

$$
\begin{array}{l|ccccc}
\hline
j & 1 & 2 & 3 & 4 & 5 \\
\hline
w_j & 6 & 6 & 6 & 5 & 2 \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{BPP18})=4$.

- Used in [«Gaps for minimization problems (1)», instance (b)](../exercises/heuristics.md#esercizio-23-2).

### Instance BPP19 { #sez-sec-cat-ist-bpp19 }

Sorting can hurt.

Bin capacity $c=7$, $n=6$ items:

$$
\begin{array}{l|cccccc}
\hline
j & 1 & 2 & 3 & 4 & 5 & 6 \\
\hline
w_j & 2 & 2 & 3 & 2 & 2 & 3 \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{BPP19})=2$, attained by $\{1,2,3\},\{4,5,6\}$ (First Fit in the input order); FFD uses $3$ bins.

- Used in [Example «Sorting can hurt»](../heuristic-algorithms/constructive-heuristics/the-bin-packing-problem-first-sort-then-pack.md#box-6-ex-ffdworse).

### Instance BPP20 { #sez-sec-cat-ist-bpp20 }

Decreasing bin packing 1.

Bin capacity $c=10$, $n=7$ items:

$$
\begin{array}{l|ccccccc}
\hline
j & 1 & 2 & 3 & 4 & 5 & 6 & 7 \\
\hline
w_j & 3 & 3 & 5 & 2 & 6 & 2 & 6 \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{BPP20})=3$, attained by $\{1,5\},\{2,7\},\{3,4,6\}$ (FFD and BFD).

- Used in [«Decreasing bin packing 1»](../exercises/constructive-heuristics.md#esercizio-24-4).

### Instance BPP21 { #sez-sec-cat-ist-bpp21 }

Decreasing bin packing 2.

Bin capacity $c=10$, $n=8$ items:

$$
\begin{array}{l|cccccccc}
\hline
j & 1 & 2 & 3 & 4 & 5 & 6 & 7 & 8 \\
\hline
w_j & 2 & 6 & 3 & 5 & 4 & 2 & 6 & 2 \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{BPP21})=3$, attained by $\{1,2,6\},\{3,4,8\},\{5,7\}$ (First Fit); FFD and BFD use $4$ bins.

- Used in [«Decreasing bin packing 2»](../exercises/constructive-heuristics.md#esercizio-24-5).

### Instance BPP22 { #sez-sec-cat-ist-bpp22 }

Decreasing bin packing 3.

Bin capacity $c=10$, $n=7$ items:

$$
\begin{array}{l|ccccccc}
\hline
j & 1 & 2 & 3 & 4 & 5 & 6 & 7 \\
\hline
w_j & 4 & 4 & 5 & 7 & 2 & 2 & 4 \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{BPP22})=3$, attained by $\{4,5\},\{1,3\},\{2,6,7\}$ (FFD).

- Used in [«Decreasing bin packing 3»](../exercises/constructive-heuristics.md#esercizio-24-6).

### Instance BPP23 { #sez-sec-cat-ist-bpp23 }

Medium instance of the local search chapter ($n=12$).

Bin capacity $c=10$, $n=12$ items:

$$
\begin{array}{l|cccccccccccc}
\hline
j & 1 & 2 & 3 & 4 & 5 & 6 & 7 & 8 & 9 & 10 & 11 & 12 \\
\hline
w_j & 7 & 6 & 6 & 5 & 5 & 4 & 4 & 4 & 3 & 3 & 2 & 1 \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{BPP23})=5$.

- Used in [Section «Flat landscapes and auxiliary objectives»](../heuristic-algorithms/local-search/flat-landscapes-and-auxiliary-objectives.md#sez-sec-flat), [Section «Experiments on two medium instances»](../heuristic-algorithms/local-search/flat-landscapes-and-auxiliary-objectives.md#2597-experiments-on-two-medium-instances), [Section «Variable neighbourhood descent»](../heuristic-algorithms/local-search/variable-neighbourhood-descent.md#sez-sec-vnd).

### Instance BPP24 { #sez-sec-cat-ist-bpp24 }

Local search BPP 1.

Bin capacity $c=10$, $n=7$ items:

$$
\begin{array}{l|ccccccc}
\hline
j & 1 & 2 & 3 & 4 & 5 & 6 & 7 \\
\hline
w_j & 2 & 3 & 2 & 7 & 4 & 7 & 4 \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{BPP24})=3$.

- Used in [«Local search BPP 1»](../exercises/local-search.md#esercizio-25-4).

### Instance BPP25 { #sez-sec-cat-ist-bpp25 }

Local search BPP 2.

Bin capacity $c=10$, $n=6$ items:

$$
\begin{array}{l|cccccc}
\hline
j & 1 & 2 & 3 & 4 & 5 & 6 \\
\hline
w_j & 2 & 3 & 4 & 5 & 4 & 2 \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{BPP25})=2$, attained by $\{1,3,5\},\{2,4,6\}$.

- Used in [«Local search BPP 2»](../exercises/local-search.md#esercizio-25-5).

### Instance BPP26 { #sez-sec-cat-ist-bpp26 }

Local search BPP 3.

Bin capacity $c=10$, $n=7$ items:

$$
\begin{array}{l|ccccccc}
\hline
j & 1 & 2 & 3 & 4 & 5 & 6 & 7 \\
\hline
w_j & 5 & 3 & 3 & 2 & 8 & 4 & 4 \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{BPP26})=3$, attained by $\{1,6\},\{4,5\},\{2,3,7\}$.

- Used in [«Local search BPP 3»](../exercises/local-search.md#esercizio-25-6).

### Instance BPP27 { #sez-sec-cat-ist-bpp27 }

Medium instance BPP24 of the metaheuristics chapter.

Bin capacity $c=100$, $n=24$ items:

$$
\begin{array}{l|cccccccccccc}
\hline
j & 1 & 2 & 3 & 4 & 5 & 6 & 7 & 8 & 9 & 10 & 11 & 12 \\
\hline
w_j & 30 & 40 & 57 & 22 & 37 & 23 & 34 & 34 & 55 & 51 & 21 & 47 \\
\hline
\end{array}
$$

$$
\begin{array}{l|cccccccccccc}
\hline
j & 13 & 14 & 15 & 16 & 17 & 18 & 19 & 20 & 21 & 22 & 23 & 24 \\
\hline
w_j & 22 & 24 & 22 & 34 & 20 & 51 & 25 & 54 & 35 & 27 & 55 & 48 \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{BPP27})=9$.

- Used in [Example «The medium instances of the KP, the BPP and $P\,||\,C_{\max}$»](../heuristic-algorithms/metaheuristics/the-problems-and-the-assumptions.md#box-3-ex-medium), [Section «Large neighbourhood search for the BPP: heuristic and exact repair»](../heuristic-algorithms/metaheuristics/large-neighbourhood-search.md#sez-sec-lns-bpp), [Section «The methods on the medium instances»](../heuristic-algorithms/metaheuristics/comparison-and-conclusions.md#26111-the-methods-on-the-medium-instances).

### Instance BPP28 { #sez-sec-cat-ist-bpp28 }

Large neighbourhood search 1.

Bin capacity $c=10$, $n=8$ items:

$$
\begin{array}{l|cccccccc}
\hline
j & 1 & 2 & 3 & 4 & 5 & 6 & 7 & 8 \\
\hline
w_j & 2 & 7 & 5 & 5 & 3 & 2 & 6 & 6 \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{BPP28})=4$, attained by $\{3,4\},\{8\},\{2,5\},\{1,6,7\}$.

- Used in [«Large neighbourhood search 1»](../exercises/metaheuristics.md#esercizio-26-13).

### Instance BPP29 { #sez-sec-cat-ist-bpp29 }

Large neighbourhood search 2.

Bin capacity $c=10$, $n=8$ items:

$$
\begin{array}{l|cccccccc}
\hline
j & 1 & 2 & 3 & 4 & 5 & 6 & 7 & 8 \\
\hline
w_j & 3 & 3 & 6 & 5 & 4 & 4 & 2 & 3 \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{BPP29})=3$, attained by $\{3,5\},\{1,4,7\},\{2,6,8\}$.

- Used in [«Large neighbourhood search 2»](../exercises/metaheuristics.md#esercizio-26-14).

### Instance BPP30 { #sez-sec-cat-ist-bpp30 }

Medium instance with $n=60$ of the MIP heuristics chapter.

Bin capacity $c=100$, $n=60$ items:

$$
\begin{array}{l|cccccccccccc}
\hline
j & 1 & 2 & 3 & 4 & 5 & 6 & 7 & 8 & 9 & 10 & 11 & 12 \\
\hline
w_j & 58 & 29 & 22 & 22 & 55 & 45 & 38 & 40 & 34 & 32 & 43 & 57 \\
\hline
\end{array}
$$

$$
\begin{array}{l|cccccccccccc}
\hline
j & 13 & 14 & 15 & 16 & 17 & 18 & 19 & 20 & 21 & 22 & 23 & 24 \\
\hline
w_j & 20 & 57 & 53 & 32 & 40 & 57 & 50 & 33 & 29 & 49 & 37 & 20 \\
\hline
\end{array}
$$

$$
\begin{array}{l|cccccccccccc}
\hline
j & 25 & 26 & 27 & 28 & 29 & 30 & 31 & 32 & 33 & 34 & 35 & 36 \\
\hline
w_j & 27 & 22 & 55 & 40 & 48 & 40 & 52 & 24 & 21 & 48 & 31 & 36 \\
\hline
\end{array}
$$

$$
\begin{array}{l|cccccccccccc}
\hline
j & 37 & 38 & 39 & 40 & 41 & 42 & 43 & 44 & 45 & 46 & 47 & 48 \\
\hline
w_j & 38 & 46 & 30 & 20 & 31 & 58 & 40 & 28 & 54 & 50 & 26 & 31 \\
\hline
\end{array}
$$

$$
\begin{array}{l|cccccccccccc}
\hline
j & 49 & 50 & 51 & 52 & 53 & 54 & 55 & 56 & 57 & 58 & 59 & 60 \\
\hline
w_j & 27 & 54 & 26 & 26 & 22 & 30 & 33 & 55 & 27 & 50 & 47 & 26 \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{BPP30})=23$.

- Used in [Example «The effect of the heuristics of Gurobi on a medium BPP instance»](../heuristic-algorithms/mip-heuristics-classical.md#box-19-ex-gurobi).

### Instance BPP31 { #sez-sec-cat-ist-bpp31 }

Instance $I_3$ of the algorithm SEP ($c=k=3$, $2k$ unit items).

Bin capacity $c=3$, $n=6$ items:

$$
\begin{array}{l|cccccc}
\hline
j & 1 & 2 & 3 & 4 & 5 & 6 \\
\hline
w_j & 1 & 1 & 1 & 1 & 1 & 1 \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{BPP31})=2$.

- Used in [«An algorithm without a guarantee (1)»](../exercises/approximation.md#esercizio-28-3).

### Instance BPP32 { #sez-sec-cat-ist-bpp32 }

Next Fit is not an Any Fit algorithm.

Bin capacity $c=10$, $n=4$ items:

$$
\begin{array}{l|cccc}
\hline
j & 1 & 2 & 3 & 4 \\
\hline
w_j & 3 & 8 & 3 & 8 \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{BPP32})=3$.

- Used in [Example «NF is not an Any Fit algorithm»](../approximation-algorithms/bin-packing-approximation.md#box-5-ex-notAF), [Example «Half-full property» (Next Fit)](../approximation-algorithms/bin-packing-approximation.md#box-16-ex-halffullNF).

### Instance BPP33 { #sez-sec-cat-ist-bpp33 }

Half-full property, Next Fit.

Bin capacity $c=10$, $n=4$ items:

$$
\begin{array}{l|cccc}
\hline
j & 1 & 2 & 3 & 4 \\
\hline
w_j & 5 & 5 & 5 & 5 \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{BPP33})=2$.

- Used in [Example «Half-full property»](../approximation-algorithms/bin-packing-approximation.md#box-13-ex-halffullNFok).

### Instance BPP34 { #sez-sec-cat-ist-bpp34 }

Half-full property, First Fit.

Bin capacity $c=10$, $n=4$ items:

$$
\begin{array}{l|cccc}
\hline
j & 1 & 2 & 3 & 4 \\
\hline
w_j & 7 & 7 & 3 & 4 \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{BPP34})=3$.

- Used in [Example «Half-full property» (First Fit)](../approximation-algorithms/bin-packing-approximation.md#box-15-ex-halffullFFcheck).

### Instance BPP35 { #sez-sec-cat-ist-bpp35 }

Any Fit exercises, instance 1.

Bin capacity $c=10$, $n=4$ items:

$$
\begin{array}{l|cccc}
\hline
j & 1 & 2 & 3 & 4 \\
\hline
w_j & 6 & 6 & 4 & 4 \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{BPP35})=2$, attained by $\{1,3\},\{2,4\}$.

- Used in [«Next Fit 1»](../exercises/bin-packing-approximation.md#esercizio-29-1), [«First Fit 1»](../exercises/bin-packing-approximation.md#esercizio-29-4), [«Best Fit 1»](../exercises/bin-packing-approximation.md#esercizio-29-7), [«Worst Fit 1»](../exercises/bin-packing-approximation.md#esercizio-29-10).

### Instance BPP36 { #sez-sec-cat-ist-bpp36 }

Any Fit exercises, instance 2.

Bin capacity $c=10$, $n=4$ items:

$$
\begin{array}{l|cccc}
\hline
j & 1 & 2 & 3 & 4 \\
\hline
w_j & 7 & 7 & 3 & 3 \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{BPP36})=2$, attained by $\{1,3\},\{2,4\}$.

- Used in [«Next Fit 2»](../exercises/bin-packing-approximation.md#esercizio-29-2), [«First Fit 2»](../exercises/bin-packing-approximation.md#esercizio-29-5), [«Best Fit 2»](../exercises/bin-packing-approximation.md#esercizio-29-8), [«Worst Fit 2»](../exercises/bin-packing-approximation.md#esercizio-29-11).

### Instance BPP37 { #sez-sec-cat-ist-bpp37 }

Any Fit exercises, instance 3.

Bin capacity $c=10$, $n=5$ items:

$$
\begin{array}{l|ccccc}
\hline
j & 1 & 2 & 3 & 4 & 5 \\
\hline
w_j & 4 & 7 & 6 & 3 & 5 \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{BPP37})=3$, attained by $\{2,4\},\{1,3\},\{5\}$.

- Used in [«Next Fit 3»](../exercises/bin-packing-approximation.md#esercizio-29-3), [«First Fit 3»](../exercises/bin-packing-approximation.md#esercizio-29-6), [«Best Fit 3»](../exercises/bin-packing-approximation.md#esercizio-29-9), [«Worst Fit 3»](../exercises/bin-packing-approximation.md#esercizio-29-12).

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

- [Cutting stock problem (CSP)](../catalogue/packing.md#sez-sec-cat-def-csp): The CSP is the BPP with $d_j$ identical copies of every item $j$, and the BPP is the case $d_j = 1$ for all $j\in\Ioggetti$.
