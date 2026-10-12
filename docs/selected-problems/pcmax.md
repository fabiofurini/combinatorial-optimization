---
title: "Scheduling on identical parallel machines"
---

# Scheduling on identical parallel machines

<div class="info-capitolo" markdown>

**Selected problems** · [:material-view-list: Catalogue of combinatorial problems](../catalogue/index.md)

</div>

<a id="sec:cat-pcmax"></a>

<a id="sec:cat-pagina-central-problems"></a>

!!! chiave ""

    Assign jobs to $m$ identical machines so that the makespan, the largest machine load, is minimum.

!!! nota "Where it is treated"

    - [Chapter 1 «Combinatorial optimization problems»](../combinatorial-optimization-problems/combinatorial-optimization.md#box-10-def-oc1-pcm): One of the six problems of the course, with the reference instance, the count of the assignments and the first bounds

    - [Chapter 7 «Parallel machine scheduling»](../combinatorial-optimization-problems/pcmax/index.md): Definition, three-field notation, counting the schedules, a first schedule by hand, the lower bound and the relation with bin packing

    - [Chapter 14 «Formulations of parallel machine scheduling»](../formulations/pcmax-formulations.md): The ILP model $\ILP_{\PCmax}$, its LP relaxation and dual, the ratio $1/m$, valid inequalities and symmetry

    - [Chapter 23 «Heuristic algorithms: definitions»](../heuristic-algorithms/heuristics.md#box-5-ex-refPCM): Reference instance of the heuristic chapters, gap and relative error of a schedule

    - [Chapter 24 «Constructive heuristics»](../heuristic-algorithms/constructive-heuristics/scheduling-on-parallel-machines-longest-jobs-first.md#sez-sec-PCM): List scheduling $LIST$ and $LPT$, with Graham's guarantees

    - [Chapter 25 «Local search»](../heuristic-algorithms/local-search/p-cmax-move-and-swap.md#sez-sec-pcmax): Move and swap neighbourhoods, plateaus and the auxiliary objective $\sum_h L_h^2$, VND and multi-start

    - [Chapter 26 «Metaheuristics»](../heuristic-algorithms/metaheuristics/tabu-search.md#sez-sec-ts): Tabu search with the lexicographic comparison $(C_{\max},\sum_h L_h^2)$

    - [Chapter 26 «Metaheuristics»](../heuristic-algorithms/metaheuristics/variable-neighbourhood-search.md#sez-sec-vns): Variable neighbourhood search, on the reference instance and on the medium instance PCM15

    - [Chapter 27 «MIP heuristics for the classical problems»](../heuristic-algorithms/mip-heuristics-classical.md#eq-eq-pcm): Rounding, diving, feasibility pump, RINS, local branching and proximity search on the assignment model

    - [Chapter 28 «Approximation algorithms: definitions»](../approximation-algorithms/approximation.md): Exercise on the algorithm ONE, an $m$-approximation with a tight ratio

    - [Chapter 31 «Approximation for $P\|C_{\max}$»](../approximation-algorithms/pcmax-approximation.md#312-the-algorithms-list-and-lpt): Guarantees of $LIST$ and $LPT$, proved, with Graham's tight families

## Definition { #sez-sec-cat-pcmax-def }

- Definition and assumptions: [Catalogue of combinatorial problems](../catalogo/central-problems.md#sez-sec-cat-def-pcmax).

- It models the balancing of work among identical resources (machines, processors, workers), where the plan ends when the last resource finishes.

- A solution is an <strong>assignment</strong> $\mathrm{mach}_j=h$ of the jobs to the machines; since the machines are identical, a schedule is a partition of $\Jlavori$ into at most $m$ sets $J_1,\dots,J_m$.

- The order of the jobs on a machine does not change its load, so the makespan $C_{\max}=\max_h L_h$ depends only on the sets $J_h$.

## Bounds and complexity { #sez-sec-cat-pcmax-prop }

- <strong>Complexity</strong>: Strongly NP-hard when $m$ is part of the input; weakly NP-hard for a fixed number of machines, e.g. $m=2$.

- $z(I) \ge \max\left\{ \max_{j\in\Jlavori} t_j,\ \left\lceil \frac{1}{m}\sum_{j\in\Jlavori} t_j \right\rceil \right\}$: the longest job and the rounded average load ([Chapter 7 «Parallel machine scheduling»](../combinatorial-optimization-problems/pcmax/index.md#box-5-obs-pcmaxlb)).

- $z(\LP_{\PCmax}) = \frac{1}{m}\sum_{j\in\Jlavori} t_j$ (LP bound, at least $1/m$ of the optimum) ([Chapter 14 «Formulations of parallel machine scheduling»](../formulations/pcmax-formulations.md#box-3-prop-LP0-PCMAX)).

- There are $m^n$ assignments but only $\sum_{k=1}^{m} S(n,k)$ distinct schedules, with $S(n,k)$ the Stirling numbers of the second kind ([Chapter 7 «Parallel machine scheduling»](../combinatorial-optimization-problems/pcmax/index.md#73-counting-the-solutions)).

- A schedule of makespan at most $T$ exists if and only if the jobs, as items of weight $t_j$, fit into $m$ bins of capacity $T$: $P\,||\,C_{\max}$ fixes the number of bins and minimizes the capacity ([Chapter 7 «Parallel machine scheduling»](../combinatorial-optimization-problems/pcmax/index.md#76-relation-with-the-bin-packing-problem)).

- The bound $\max\{\max_j t_j,\lceil\sum_j t_j/m\rceil\}$ is not always attained: $(4,3,3)$ on two machines gives $5$, while the optimum is $6$.

## Formulation { #sez-sec-cat-pcmax-formulation }

- <strong>ILP model of $P\,||\,C_{\max}$ ($\ILP_{\PCmax}$), with $\mathscr{H}=\{1,2,\dots,m\}$</strong> ([Chapter 14 «Formulations of parallel machine scheduling»](../formulations/pcmax-formulations.md#eq-ILP-PCMAX)):

\begin{align*}
\min\ & C_{\max} \\
\text{subject to}\ & \sum_{h\in\mathscr{H}}x_{jh}=1, & \forall j\in\Jlavori, \\
& -\sum_{j\in\Jlavori}t_jx_{jh}+C_{\max}\ge0, & \forall h\in\mathscr{H}, \\
& x_{jh}\in\{0,1\}, & \forall j\in\Jlavori,~\forall h\in\mathscr{H}, \\
& C_{\max}\ge0.
\end{align*}

- The model $\ILP_{\PCmax}$ has $nm$ binary variables $x_{jh}$, the continuous variable $C_{\max}$, $n$ assignment constraints and $m$ load constraints $C_{\max}\ge\sum_j t_jx_{jh}$ ([Chapter 14 «Formulations of parallel machine scheduling»](../formulations/pcmax-formulations.md#eq-ILP-PCMAX)).

- The LP relaxation has value $z(\LP_{\PCmax})=\sum_j t_j/m$, attained by $x_{jh}=1/m$, with the dual solution $\pi_h=1/m$, $\mu_j=t_j/m$ ([Chapter 14 «Formulations of parallel machine scheduling»](../formulations/pcmax-formulations.md#box-3-prop-LP0-PCMAX)).

- The ratio $z(\LP_{\PCmax})/z(\ILP_{\PCmax})$ is at least $1/m$, and one long job of time $M$ with $m$ unit jobs makes it tend to $1/m$ ([Chapter 14 «Formulations of parallel machine scheduling»](../formulations/pcmax-formulations.md#box-5-prop-PCMAX-tight)).

- The valid inequalities $C_{\max}\ge t_j$ and $C_{\max}\ge\lceil\sum_j t_j/m\rceil$ strengthen the model; the load ordering constraints break the symmetry only when the loads are distinct ([Chapter 14 «Formulations of parallel machine scheduling»](../formulations/pcmax-formulations.md#144-additional-considerations)).

## Constructive heuristics { #sez-sec-cat-pcmax-constructiveheuristics }

- $LIST$ assigns the jobs, in the order of a list, to a least loaded machine, in $O(nm)$ or $O(n\log m)$ time; on the reference instance with the shortest jobs first it gives $12$ ([Chapter 24 «Constructive heuristics»](../heuristic-algorithms/constructive-heuristics/scheduling-on-parallel-machines-longest-jobs-first.md#sez-sec-LIST)).

- $LPT$ applies $LIST$ to the jobs by non-increasing $t_j$; on the reference instance it gives $11$, and $11/9=4/3-1/9$ is Graham's bound for $m=3$ ([Chapter 24 «Constructive heuristics»](../heuristic-algorithms/constructive-heuristics/scheduling-on-parallel-machines-longest-jobs-first.md#sez-sec-LPT)).

## Local search { #sez-sec-cat-pcmax-localsearch }

- The <em>move</em> neighbourhood has $n(m-1)$ elements and the <em>swap</em> neighbourhood at most $n(n-1)/2$; a transfer lowers the makespan only from the unique critical machine ([Chapter 25 «Local search»](../heuristic-algorithms/local-search/p-cmax-move-and-swap.md#sez-sec-pcmax)).

- The $LPT$ solution of the reference instance is a local optimum for move, while two swaps reach the optimum $9$ ([Chapter 25 «Local search»](../heuristic-algorithms/local-search/p-cmax-move-and-swap.md#box-8-ex-lpt)).

- The auxiliary objective $\sum_h L_h^2$ gives a slope to the plateaus of the makespan: a move that improves the makespan improves it, and none that worsens the makespan does ([Chapter 25 «Local search»](../heuristic-algorithms/local-search/flat-landscapes-and-auxiliary-objectives.md#box-11-prop-pcmsq)).

- VND with move and swap and the auxiliary objective reaches the optimum $19$ of the instance with $12$ jobs in $68$ of $100$ runs ([Chapter 25 «Local search»](../heuristic-algorithms/local-search/variable-neighbourhood-descent.md#sez-sec-vnd)).

## Metaheuristics { #sez-sec-cat-pcmax-metaheuristics }

- Tabu search with the move neighbourhood leaves the plateau of makespan $11$ of the reference instance and stops at $\LB=9$ at iteration $8$ ([Chapter 26 «Metaheuristics»](../heuristic-algorithms/metaheuristics/tabu-search.md#box-6-ex-tsPCM)).

- VNS with $k_{\max}=3$ reaches the optimum $9$ of the reference instance in three iterations, and the optimum $69$ of PCM15 in $7$ runs out of $10$ ([Chapter 26 «Metaheuristics»](../heuristic-algorithms/metaheuristics/variable-neighbourhood-search.md#box-8-ex-vnsPCM)).

## MIP heuristics { #sez-sec-cat-pcmax-mipheuristics }

- Rounding the LP solution violates an assignment constraint, fractional diving ends at makespan $10$, and guided diving from $LPT$ finds the optimum $9$ ([Chapter 27 «MIP heuristics for the classical problems»](../heuristic-algorithms/mip-heuristics-classical.md#box-5-ex-divepcm)).

- The feasibility pump returns a schedule of makespan $11$, since $C_{\max}$ does not enter the distance $\Delta$ ([Chapter 27 «MIP heuristics for the classical problems»](../heuristic-algorithms/mip-heuristics-classical.md#box-7-ex-fppcm)).

- RINS, local branching and proximity search, started from $LPT$, all reach makespan $9$; proximity search also proves its optimality ([Chapter 27 «MIP heuristics for the classical problems»](../heuristic-algorithms/mip-heuristics-classical.md#box-10-ex-rinspcm)).

## Approximation { #sez-sec-cat-pcmax-approximation }

- $LIST$ is a $\left(2-\frac1m\right)$-approximation algorithm for every list, and the instance with $m(m-1)$ unit jobs followed by a job of time $m$ shows that the ratio is tight ([Chapter 31 «Approximation for $P\|C_{\max}$»](../approximation-algorithms/pcmax-approximation.md#box-5-prop-LIST)).

- $LPT$ is a $\left(\frac43-\frac1{3m}\right)$-approximation algorithm, tight on Graham's family $t=(2m-1,2m-1,\dots,m+1,m+1,m,m,m)$, which for $m=3$ is the reference instance ([Chapter 31 «Approximation for $P\|C_{\max}$»](../approximation-algorithms/pcmax-approximation.md#box-7-prop-LPT)).

- The algorithm ONE, all the jobs on machine $1$, is an $m$-approximation algorithm with $r(\mathrm{ONE})=m$ and no finite additive guarantee ([Exercise 28.2](../exercises/approximation.md#esercizio-28-2)).

## Exercises { #sez-sec-cat-pcmax-es }

- [Exercises «Recognizing the problems» (counting the assignments) and «LPT, bounds and gap on $P\|C_{\max}$»](../combinatorial-optimization-problems/combinatorial-optimization.md#110-exercises)

- [Counting the solutions (instance (d))](../exercises/combinatorial-optimization.md#esercizio-1-3)

- [Loads, makespan and Gantt chart](../exercises/pcmax.md#esercizio-7-1)

- [Counting the schedules](../exercises/pcmax.md#esercizio-7-2)

- [A first schedule, a lower bound and the optimum](../exercises/pcmax.md#esercizio-7-3)

- [When the lower bound is not attained](../exercises/pcmax.md#esercizio-7-4)

- [Makespan and bin packing](../exercises/pcmax.md#esercizio-7-5)

- [ILP model of $P\|C_{\max}$](../exercises/pcmax-formulations.md#esercizio-14-1)

- [LP relaxation of the $P\|C_{\max}$ model](../exercises/pcmax-formulations.md#esercizio-14-2)

- [Feasible solutions of the $P\|C_{\max}$ model](../exercises/pcmax-formulations.md#esercizio-14-3)

- [Valid inequalities and symmetry for $P\|C_{\max}$](../exercises/pcmax-formulations.md#esercizio-14-4)

- [Integrality gap of the $P\|C_{\max}$ model](../exercises/pcmax-formulations.md#esercizio-14-5)

- [Gaps for minimization problems](../exercises/heuristics.md#esercizio-23-2)

- [Constructive heuristics, local search and metaheuristics](../exercises/heuristics.md#esercizio-23-5)

- [List scheduling and LPT 1](../exercises/constructive-heuristics.md#esercizio-24-7)

- [List scheduling and LPT 2](../exercises/constructive-heuristics.md#esercizio-24-8)

- [List scheduling and LPT 3](../exercises/constructive-heuristics.md#esercizio-24-9)

- [Local search $P\,||\,C_{\max}$ 1](../exercises/local-search.md#esercizio-25-10)

- [Local search $P\,||\,C_{\max}$ 2](../exercises/local-search.md#esercizio-25-11)

- [Local search $P\,||\,C_{\max}$ 3](../exercises/local-search.md#esercizio-25-12)

- [Tabu search 1](../exercises/metaheuristics.md#esercizio-26-4)

- [Tabu search 2](../exercises/metaheuristics.md#esercizio-26-5)

- [Iterated local search and VNS 3](../exercises/metaheuristics.md#esercizio-26-9)

- [Proximity search on $P\,||\,C_{\max}$](../exercises/mip-heuristics-classical.md#esercizio-27-5)

- [A tight guarantee for a simple algorithm](../exercises/approximation.md#esercizio-28-2)

- [$P\,||\,C_{\max}$ approximation 1](../exercises/pcmax-approximation.md#esercizio-31-1)

- [$P\,||\,C_{\max}$ approximation 2](../exercises/pcmax-approximation.md#esercizio-31-2)

- [$P\,||\,C_{\max}$ approximation 3](../exercises/pcmax-approximation.md#esercizio-31-3)

## Variants { #sez-sec-cat-pcmax-var }

- [Scheduling on a fixed number of identical machines ($m$ not part of the input) ($Pm\|C_{\max}$)](../catalogo/scheduling.md#sez-sec-cat-def-pmcmax): Special case of $P\,||\,C_{\max}$ with $m$ fixed; with $m=2$ it asks for a split of the jobs into two sets of loads as equal as possible.

- [Scheduling on parallel machines with different speeds, $Q\,||\,C_{\max}$](../catalogo/scheduling.md#sez-sec-cat-def-qcmax): Generalizes $P\,||\,C_{\max}$, which is the case of machines with equal speeds.

- [Scheduling on unrelated parallel machines, $R\,||\,C_{\max}$](../catalogo/scheduling.md#sez-sec-cat-def-rcmax): Generalizes $Q\,||\,C_{\max}$ and $P\,||\,C_{\max}$.
