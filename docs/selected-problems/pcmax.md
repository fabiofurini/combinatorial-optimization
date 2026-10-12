---
title: "Scheduling on identical parallel machines"
---

# Scheduling on identical parallel machines

<div class="info-capitolo" markdown>

**Selected problems** · [:material-file-pdf-box: Selected problems (PDF)](../pdf/selected-problems.pdf)

</div>

<a id="sec:cat-pcmax"></a>

<a id="sec:cat-pagina-pcmax"></a>

!!! chiave ""

    Assign jobs to $m$ identical machines so that the makespan, the largest machine load, is minimum.

!!! nota "Where it is treated"

    - [Chapter 1 «Combinatorial optimization problems»](../combinatorial-optimization-problems/combinatorial-optimization.md#box-10-def-oc1-pcm): One of the six problems of the course, with the reference instance, the count of the assignments and the first bounds

    - [Chapter 7 «Parallel machine scheduling»](../combinatorial-optimization-problems/pcmax.md): Definition, three-field notation, counting the schedules, a first schedule by hand, the lower bound and the relation with bin packing

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

<a id="box-1-def-cat-pcmax"></a>

!!! definizione "Definition 1: Scheduling on identical parallel machines"

    Given:

    1. a set of $m$ identical <em>machines</em>,

    2. a set $\Jlavori = \{1,2,\dots,n\}$ of $n$ <em>jobs</em>,

    3. for each job $j \in \Jlavori$, a <em>processing time</em> $t_j \in \Z_{\ge 1}$,

    the problem $P\,||\,C_{\max}$ asks to assign each job to a machine, so that the time needed to complete all the jobs, i.e., the largest total processing time assigned to a machine, is minimized. With $J_h$ the set of jobs of machine $h$ and $L_h=\sum_{j\in J_h} t_j$ its load, the problem reads

    $$
    \min\left\{\max_{h \in \{1,\dots,m\}} \sum_{j \in J_h} t_j \;:\; J_1,J_2,\dots,J_m \text{ is a partition of } \Jlavori\right\}.
    $$

- Defined in [Chapter 7 «Parallel machine scheduling»](../combinatorial-optimization-problems/pcmax.md#box-1-defPCmax).

- It models the balancing of work among identical resources (machines, processors, workers), where the plan ends when the last resource finishes.

- A solution is an <strong>assignment</strong> $\mathrm{mach}_j=h$ of the jobs to the machines; since the machines are identical, a schedule is a partition of $\Jlavori$ into at most $m$ sets $J_1,\dots,J_m$.

- The order of the jobs on a machine does not change its load, so the makespan $C_{\max}=\max_h L_h$ depends only on the sets $J_h$.

## Bounds and complexity { #sez-sec-cat-pcmax-prop }

- <strong>Complexity</strong>: Strongly NP-hard when $m$ is part of the input; weakly NP-hard for a fixed number of machines, e.g. $m=2$.

- $z(I) \ge \max\left\{ \max_{j\in\Jlavori} t_j,\ \left\lceil \frac{1}{m}\sum_{j\in\Jlavori} t_j \right\rceil \right\}$: the longest job and the rounded average load ([Chapter 7 «Parallel machine scheduling»](../combinatorial-optimization-problems/pcmax.md#box-5-obs-pcmaxlb)).

- $z(\LP_{\PCmax}) = \frac{1}{m}\sum_{j\in\Jlavori} t_j$ (LP bound, at least $1/m$ of the optimum) ([Chapter 14 «Formulations of parallel machine scheduling»](../formulations/pcmax-formulations.md#box-3-prop-LP0-PCMAX)).

- There are $m^n$ assignments but only $\sum_{k=1}^{m} S(n,k)$ distinct schedules, with $S(n,k)$ the Stirling numbers of the second kind ([Chapter 7 «Parallel machine scheduling»](../combinatorial-optimization-problems/pcmax.md#73-counting-the-solutions)).

- A schedule of makespan at most $T$ exists if and only if the jobs, as items of weight $t_j$, fit into $m$ bins of capacity $T$: $P\,||\,C_{\max}$ fixes the number of bins and minimizes the capacity ([Chapter 7 «Parallel machine scheduling»](../combinatorial-optimization-problems/pcmax.md#76-relation-with-the-bin-packing-problem)).

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

## Instances { #sez-sec-cat-pcmax-ist }

### Instance PCM1 { #sez-sec-cat-ist-pcm1 }

Reference instance (Graham's tight instance of $LPT$ for $m=3$).

$m=3$ machines, $n=7$ jobs:

$$
\begin{array}{l|ccccccc}
\hline
j & 1 & 2 & 3 & 4 & 5 & 6 & 7 \\
\hline
t_j & 5 & 5 & 4 & 4 & 3 & 3 & 3 \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{PCM1})=9$, attained by $J_1=\{1,3\}$, $J_2=\{2,4\}$, $J_3=\{5,6,7\}$ (two optimal schedules, twelve optimal assignments).

- Used in [A small $P\,||\,C_{\max}$ instance](../combinatorial-optimization-problems/combinatorial-optimization.md#box-11-ex-oc1-pcm), [Primal and dual bounds ($LPT$ $11$, $\LB=9$)](../combinatorial-optimization-problems/combinatorial-optimization.md#box-21-ex-oc1-bounds), [$P\,||\,C_{\max}$ instance](../combinatorial-optimization-problems/pcmax.md#box-2-ex-pcmax7), [Counting the schedules](../combinatorial-optimization-problems/pcmax.md#box-3-ex-pcmax-count), [Assigning every job to the least loaded machine](../combinatorial-optimization-problems/pcmax.md#box-4-ex-pcmax-list), [The bound on the reference instance](../combinatorial-optimization-problems/pcmax.md#box-6-ex-pcmax-lb), [$\ILP_{\PCmax}$ model](../formulations/pcmax-formulations.md#box-2-ex-PCMAX-ILP), [$P\,||\,C_{\max}$ reference instance](../heuristic-algorithms/heuristics.md#box-5-ex-refPCM), [Gaps of the reference instances](../heuristic-algorithms/heuristics.md#box-7-ex-gaps), [$LIST$ on the reference instance, shortest jobs first](../heuristic-algorithms/constructive-heuristics/scheduling-on-parallel-machines-longest-jobs-first.md#box-7-ex-list), [$LPT$ on the reference instance](../heuristic-algorithms/constructive-heuristics/scheduling-on-parallel-machines-longest-jobs-first.md#box-9-ex-lpt), [The solution of $LPT$ is a local optimum for move, but not for swap](../heuristic-algorithms/local-search/p-cmax-move-and-swap.md#box-8-ex-lpt), [$VND$ on $P\,||\,C_{\max}$ with move and swap](../heuristic-algorithms/local-search/variable-neighbourhood-descent.md#box-16-ex-vndpcm), [$TS$ on the $P\,||\,C_{\max}$ reference instance](../heuristic-algorithms/metaheuristics/tabu-search.md#box-6-ex-tsPCM), [$VNS$ on the $P\,||\,C_{\max}$ reference instance](../heuristic-algorithms/metaheuristics/variable-neighbourhood-search.md#box-8-ex-vnsPCM), [The LP solutions of the reference instances](../heuristic-algorithms/mip-heuristics-classical.md#box-2-ex-lpsol), [Rounding on the reference instances](../heuristic-algorithms/mip-heuristics-classical.md#box-3-ex-rounding), [Fractional diving on $P\,||\,C_{\max}$](../heuristic-algorithms/mip-heuristics-classical.md#box-5-ex-divepcm), [Guided diving on $P\,||\,C_{\max}$](../heuristic-algorithms/mip-heuristics-classical.md#box-6-ex-guided), [The feasibility pump on $P\,||\,C_{\max}$](../heuristic-algorithms/mip-heuristics-classical.md#box-7-ex-fppcm), [RINS on $P\,||\,C_{\max}$](../heuristic-algorithms/mip-heuristics-classical.md#box-10-ex-rinspcm), [Local branching on $P\,||\,C_{\max}$](../heuristic-algorithms/mip-heuristics-classical.md#box-13-ex-lbpcm), [Proximity search on $P\,||\,C_{\max}$](../heuristic-algorithms/mip-heuristics-classical.md#box-15-ex-pspcm), [$LIST$ on the reference instance, shortest jobs first](../approximation-algorithms/pcmax-approximation.md#box-2-ex-list), [$LPT$ on the reference instance](../approximation-algorithms/pcmax-approximation.md#box-3-ex-lpt), [Tight family of $LPT$, case $m=3$](../approximation-algorithms/pcmax-approximation.md#box-8-prop-LPTtight), [instance $I_3$](../exercises/approximation.md#esercizio-28-2).

### Instance PCM2 { #sez-sec-cat-ist-pcm2 }

Three jobs on two machines: the lower bound is not attained.

$m=2$ machines, $n=3$ jobs:

$$
\begin{array}{l|ccc}
\hline
j & 1 & 2 & 3 \\
\hline
t_j & 4 & 3 & 3 \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{PCM2})=6$, attained by $\{1\},\{2,3\}$ (the bound gives $5$).

- Used in [A combinatorial lower bound](../combinatorial-optimization-problems/pcmax.md#75-a-combinatorial-lower-bound).

### Instance PCM3 { #sez-sec-cat-ist-pcm3 }

Two machines, five jobs: LPT, bounds and gap.

$m=2$ machines, $n=5$ jobs:

$$
\begin{array}{l|ccccc}
\hline
j & 1 & 2 & 3 & 4 & 5 \\
\hline
t_j & 5 & 4 & 3 & 3 & 3 \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{PCM3})=9$, attained by $J_1=\{1,2\}$, $J_2=\{3,4,5\}$ ($LPT$ gives $10$).

- Used in [Exercise «LPT, bounds and gap on $P\|C_{\max}$»](../combinatorial-optimization-problems/combinatorial-optimization.md#110-exercises).

### Instance PCM4 { #sez-sec-cat-ist-pcm4 }

Loads, makespan and Gantt chart.

$m=3$ machines, $n=7$ jobs:

$$
\begin{array}{l|ccccccc}
\hline
j & 1 & 2 & 3 & 4 & 5 & 6 & 7 \\
\hline
t_j & 4 & 2 & 5 & 3 & 6 & 2 & 3 \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{PCM4})=9$, attained by $J_1=\{1,3\}$, $J_2=\{4,5\}$, $J_3=\{2,6,7\}$.

- Used in [Exercise 7.1](../exercises/pcmax.md#esercizio-7-1).

### Instance PCM5 { #sez-sec-cat-ist-pcm5 }

A first schedule, a lower bound and the optimum.

$m=3$ machines, $n=7$ jobs:

$$
\begin{array}{l|ccccccc}
\hline
j & 1 & 2 & 3 & 4 & 5 & 6 & 7 \\
\hline
t_j & 3 & 5 & 2 & 6 & 4 & 4 & 3 \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{PCM5})=9$, attained by $J_1=\{4,7\}$, $J_2=\{2,6\}$, $J_3=\{1,3,5\}$ (four optimal schedules).

- Used in [Exercise 7.3](../exercises/pcmax.md#esercizio-7-3).

### Instance PCM6 { #sez-sec-cat-ist-pcm6 }

When the lower bound is not attained.

$m=2$ machines, $n=4$ jobs:

$$
\begin{array}{l|cccc}
\hline
j & 1 & 2 & 3 & 4 \\
\hline
t_j & 8 & 5 & 4 & 3 \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{PCM6})=11$, attained by $J_1=\{1,4\}$, $J_2=\{2,3\}$, unique (the bound gives $10$).

- Used in [Exercise 7.4](../exercises/pcmax.md#esercizio-7-4).

### Instance PCM7 { #sez-sec-cat-ist-pcm7 }

Makespan and bin packing.

$m=3$ machines, $n=5$ jobs:

$$
\begin{array}{l|ccccc}
\hline
j & 1 & 2 & 3 & 4 & 5 \\
\hline
t_j & 7 & 6 & 5 & 5 & 4 \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{PCM7})=10$, attained by $J_1=\{1\}$, $J_2=\{2,5\}$, $J_3=\{3,4\}$, unique (the bound gives $9$).

- Used in [Exercise 7.5](../exercises/pcmax.md#esercizio-7-5).

### Instance PCM8 { #sez-sec-cat-ist-pcm8 }

An integrality gap of the LP relaxation.

$m=2$ machines, $n=3$ jobs:

$$
\begin{array}{l|ccc}
\hline
j & 1 & 2 & 3 \\
\hline
t_j & 3 & 3 & 2 \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{PCM8})=5$, attained by loads $5$ and $3$; $z(\LP_{\PCmax})=4$.

- Used in [An integrality gap](../formulations/pcmax-formulations.md#box-6-ex-PCMAX-gap).

### Instance PCM9 { #sez-sec-cat-ist-pcm9 }

Two machines, five jobs: ILP model and algorithm ONE.

$m=2$ machines, $n=5$ jobs:

$$
\begin{array}{l|ccccc}
\hline
j & 1 & 2 & 3 & 4 & 5 \\
\hline
t_j & 7 & 5 & 4 & 3 & 3 \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{PCM9})=11$, attained by $J_1=\{1,3\}$, $J_2=\{2,4,5\}$, unique partition.

- Used in [Exercise 14.1](../exercises/pcmax-formulations.md#esercizio-14-1), [instance $I_1$](../exercises/approximation.md#esercizio-28-2).

### Instance PCM10 { #sez-sec-cat-ist-pcm10 }

LP relaxation and its dual.

$m=3$ machines, $n=6$ jobs:

$$
\begin{array}{l|cccccc}
\hline
j & 1 & 2 & 3 & 4 & 5 & 6 \\
\hline
t_j & 8 & 6 & 5 & 4 & 4 & 2 \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{PCM10})=10$, attained by $J_1=\{1,6\}$, $J_2=\{2,4\}$, $J_3=\{3,5\}$; $z(\LP_{\PCmax})=29/3$.

- Used in [Exercise 14.2](../exercises/pcmax-formulations.md#esercizio-14-2).

### Instance PCM11 { #sez-sec-cat-ist-pcm11 }

Feasible solutions of the model.

$m=2$ machines, $n=5$ jobs:

$$
\begin{array}{l|ccccc}
\hline
j & 1 & 2 & 3 & 4 & 5 \\
\hline
t_j & 6 & 5 & 4 & 3 & 2 \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{PCM11})=10$, attained by $J_1=\{1,3\}$, $J_2=\{2,4,5\}$; no integrality gap.

- Used in [Exercise 14.3](../exercises/pcmax-formulations.md#esercizio-14-3).

### Instance PCM12 { #sez-sec-cat-ist-pcm12 }

One long job: valid inequalities and symmetry.

$m=3$ machines, $n=6$ jobs:

$$
\begin{array}{l|cccccc}
\hline
j & 1 & 2 & 3 & 4 & 5 & 6 \\
\hline
t_j & 12 & 3 & 3 & 2 & 2 & 2 \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{PCM12})=12$, attained by job $1$ alone; $96$ optimal solutions of the model, $18$ with the symmetry-breaking constraints.

- Used in [Exercise 14.4](../exercises/pcmax-formulations.md#esercizio-14-4).

### Instance PCM13 { #sez-sec-cat-ist-pcm13 }

Integrality gap on three jobs.

$m=2$ machines, $n=3$ jobs:

$$
\begin{array}{l|ccc}
\hline
j & 1 & 2 & 3 \\
\hline
t_j & 5 & 5 & 3 \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{PCM13})=8$, attained by $\{1,3\},\{2\}$; $z(\LP_{\PCmax})=13/2$.

- Used in [Exercise 14.5](../exercises/pcmax-formulations.md#esercizio-14-5).

### Instance PCM14 { #sez-sec-cat-ist-pcm14 }

The family of the ratio $1/m$ with $M=10$, $m=3$.

$m=3$ machines, $n=4$ jobs:

$$
\begin{array}{l|cccc}
\hline
j & 1 & 2 & 3 & 4 \\
\hline
t_j & 10 & 1 & 1 & 1 \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{PCM14})=10$, attained by the long job alone; $z(\LP_{\PCmax})=13/3$.

- Used in [question 4](../exercises/pcmax-formulations.md#esercizio-14-5), [The ratio $1/m$ is asymptotically attained (family)](../formulations/pcmax-formulations.md#box-5-prop-PCMAX-tight).

### Instance PCM15 { #sez-sec-cat-ist-pcm15 }

Gap of a heuristic schedule.

$m=3$ machines, $n=7$ jobs:

$$
\begin{array}{l|ccccccc}
\hline
j & 1 & 2 & 3 & 4 & 5 & 6 & 7 \\
\hline
t_j & 7 & 6 & 5 & 4 & 3 & 3 & 2 \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{PCM15})=10$, attained by $\{1,5\},\{2,4\},\{3,6,7\}$.

- Used in [instance (c)](../exercises/heuristics.md#esercizio-23-2).

### Instance PCM16 { #sez-sec-cat-ist-pcm16 }

Constructive heuristic, local search and multi-start on two machines.

$m=2$ machines, $n=6$ jobs:

$$
\begin{array}{l|cccccc}
\hline
j & 1 & 2 & 3 & 4 & 5 & 6 \\
\hline
t_j & 8 & 4 & 4 & 6 & 3 & 7 \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{PCM16})=16$, attained by $J_1=\{1,2,3\}$, $J_2=\{4,5,6\}$.

- Used in [Exercise 23.5](../exercises/heuristics.md#esercizio-23-5).

### Instance PCM17 { #sez-sec-cat-ist-pcm17 }

List scheduling and LPT 1.

$m=3$ machines, $n=8$ jobs:

$$
\begin{array}{l|cccccccc}
\hline
j & 1 & 2 & 3 & 4 & 5 & 6 & 7 & 8 \\
\hline
t_j & 2 & 8 & 7 & 6 & 8 & 3 & 4 & 9 \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{PCM17})=16$, attained by the $LPT$ schedule $J_1=\{6,7,8\}$, $J_2=\{2,3\}$, $J_3=\{1,4,5\}$.

- Used in [Exercise 24.7](../exercises/constructive-heuristics.md#esercizio-24-7).

### Instance PCM18 { #sez-sec-cat-ist-pcm18 }

List scheduling and LPT 2.

$m=3$ machines, $n=7$ jobs:

$$
\begin{array}{l|ccccccc}
\hline
j & 1 & 2 & 3 & 4 & 5 & 6 & 7 \\
\hline
t_j & 3 & 6 & 5 & 4 & 4 & 9 & 7 \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{PCM18})=13$, attained by $J_1=\{1,2,4\}$, $J_2=\{3,7\}$, $J_3=\{5,6\}$ ($LPT$ gives $14$).

- Used in [Exercise 24.8](../exercises/constructive-heuristics.md#esercizio-24-8).

### Instance PCM19 { #sez-sec-cat-ist-pcm19 }

List scheduling and LPT 3: the input order beats LPT.

$m=3$ machines, $n=7$ jobs:

$$
\begin{array}{l|ccccccc}
\hline
j & 1 & 2 & 3 & 4 & 5 & 6 & 7 \\
\hline
t_j & 5 & 8 & 8 & 4 & 5 & 7 & 4 \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{PCM19})=15$, attained by $J_1=\{1,2\}$, $J_2=\{3,5\}$, $J_3=\{4,6,7\}$ ($LIST$ gives $15$, $LPT$ $16$).

- Used in [Exercise 24.9](../exercises/constructive-heuristics.md#esercizio-24-9).

### Instance PCM20 { #sez-sec-cat-ist-pcm20 }

Medium instance with $12$ jobs on $4$ machines (PCM12).

$m=4$ machines, $n=12$ jobs:

$$
\begin{array}{l|cccccccccccc}
\hline
j & 1 & 2 & 3 & 4 & 5 & 6 & 7 & 8 & 9 & 10 & 11 & 12 \\
\hline
t_j & 11 & 10 & 9 & 8 & 7 & 7 & 6 & 5 & 4 & 4 & 3 & 2 \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{PCM20})=19$, attained by $z(I)=\lceil 76/4\rceil$; $LPT$ gives $20$, a local optimum for move and swap.

- Used in [A larger neighbourhood does not always help](../heuristic-algorithms/local-search/p-cmax-move-and-swap.md#sez-sec-pcmax), [Plateaus](../heuristic-algorithms/local-search/flat-landscapes-and-auxiliary-objectives.md#2591-plateaus), [Experiments on two medium instances](../heuristic-algorithms/local-search/flat-landscapes-and-auxiliary-objectives.md#2597-experiments-on-two-medium-instances), [VND from $100$ random starts](../heuristic-algorithms/local-search/variable-neighbourhood-descent.md#sez-sec-vnd).

### Instance PCM21 { #sez-sec-cat-ist-pcm21 }

Local search with move from LIST.

$m=3$ machines, $n=6$ jobs:

$$
\begin{array}{l|cccccc}
\hline
j & 1 & 2 & 3 & 4 & 5 & 6 \\
\hline
t_j & 5 & 7 & 3 & 4 & 4 & 9 \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{PCM21})=12$, attained by final schedule of the move local search, makespan $12$ (the bound $11$ is not attained).

- Used in [Exercise 25.10](../exercises/local-search.md#esercizio-25-10).

### Instance PCM22 { #sez-sec-cat-ist-pcm22 }

LPT is a local optimum for move, not for swap.

$m=3$ machines, $n=7$ jobs:

$$
\begin{array}{l|ccccccc}
\hline
j & 1 & 2 & 3 & 4 & 5 & 6 & 7 \\
\hline
t_j & 8 & 4 & 6 & 7 & 5 & 9 & 8 \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{PCM22})=16$, attained by final schedule of the swap local search, makespan $16=\lceil 47/3\rceil$.

- Used in [Exercise 25.11](../exercises/local-search.md#esercizio-25-11).

### Instance PCM23 { #sez-sec-cat-ist-pcm23 }

A plateau and the auxiliary objective.

$m=3$ machines, $n=6$ jobs:

$$
\begin{array}{l|cccccc}
\hline
j & 1 & 2 & 3 & 4 & 5 & 6 \\
\hline
t_j & 5 & 5 & 7 & 9 & 2 & 7 \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{PCM23})=12$, attained by final schedule of the move local search with $\sum_h L_h^2$, makespan $12$.

- Used in [Exercise 25.12](../exercises/local-search.md#esercizio-25-12).

### Instance PCM24 { #sez-sec-cat-ist-pcm24 }

Medium instance with $15$ jobs on $4$ machines (PCM15).

$m=4$ machines, $n=15$ jobs:

$$
\begin{array}{l|cccccccccccc}
\hline
j & 1 & 2 & 3 & 4 & 5 & 6 & 7 & 8 & 9 & 10 & 11 & 12 \\
\hline
t_j & 10 & 23 & 26 & 16 & 23 & 11 & 14 & 18 & 18 & 24 & 29 & 22 \\
\hline
\end{array}
$$

$$
\begin{array}{l|ccc}
\hline
j & 13 & 14 & 15 \\
\hline
t_j & 13 & 13 & 15 \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{PCM24})=69$, attained by $z(I)=\lceil 275/4\rceil$; $LPT$ gives $73$.

- Used in [The medium instances of the KP, the BPP and $P\,||\,C_{\max}$](../heuristic-algorithms/metaheuristics/the-problems-and-the-assumptions.md#box-3-ex-medium), [VNS on PCM15](../heuristic-algorithms/metaheuristics/variable-neighbourhood-search.md#sez-sec-vns), [The methods on the medium instances](../heuristic-algorithms/metaheuristics/comparison-and-conclusions.md#26111-the-methods-on-the-medium-instances).

### Instance PCM25 { #sez-sec-cat-ist-pcm25 }

Tabu search on two machines.

$m=2$ machines, $n=5$ jobs:

$$
\begin{array}{l|ccccc}
\hline
j & 1 & 2 & 3 & 4 & 5 \\
\hline
t_j & 3 & 3 & 2 & 2 & 2 \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{PCM25})=6$, attained by $J_1=\{1,2\}$, $J_2=\{3,4,5\}$.

- Used in [Exercise 26.4](../exercises/metaheuristics.md#esercizio-26-4), [Exercise 26.5](../exercises/metaheuristics.md#esercizio-26-5).

### Instance PCM26 { #sez-sec-cat-ist-pcm26 }

Variable neighbourhood search on three machines.

$m=3$ machines, $n=7$ jobs:

$$
\begin{array}{l|ccccccc}
\hline
j & 1 & 2 & 3 & 4 & 5 & 6 & 7 \\
\hline
t_j & 4 & 4 & 3 & 3 & 2 & 2 & 2 \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{PCM26})=7$, attained by loads $(7,6,7)$, makespan $7=\LB$.

- Used in [Exercise 26.9](../exercises/metaheuristics.md#esercizio-26-9).

### Instance PCM27 { #sez-sec-cat-ist-pcm27 }

Proximity search on two machines.

$m=2$ machines, $n=6$ jobs:

$$
\begin{array}{l|cccccc}
\hline
j & 1 & 2 & 3 & 4 & 5 & 6 \\
\hline
t_j & 9 & 3 & 9 & 5 & 8 & 2 \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{PCM27})=18$, attained by $J_1=\{2,4,5,6\}$, $J_2=\{1,3\}$.

- Used in [Exercise 27.5](../exercises/mip-heuristics-classical.md#esercizio-27-5).

### Instance PCM28 { #sez-sec-cat-ist-pcm28 }

Algorithm ONE, instance $I_2$.

$m=3$ machines, $n=5$ jobs:

$$
\begin{array}{l|ccccc}
\hline
j & 1 & 2 & 3 & 4 & 5 \\
\hline
t_j & 9 & 2 & 2 & 2 & 1 \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{PCM28})=9$.

- Used in [instance $I_2$](../exercises/approximation.md#esercizio-28-2).

### Instance PCM29 { #sez-sec-cat-ist-pcm29 }

Algorithm ONE: $2m$ unit jobs with $m=4$.

$m=4$ machines, $n=8$ jobs:

$$
\begin{array}{l|cccccccc}
\hline
j & 1 & 2 & 3 & 4 & 5 & 6 & 7 & 8 \\
\hline
t_j & 1 & 1 & 1 & 1 & 1 & 1 & 1 & 1 \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{PCM29})=2$, attained by two jobs per machine.

- Used in [question 3](../exercises/approximation.md#esercizio-28-2).

### Instance PCM30 { #sez-sec-cat-ist-pcm30 }

Algorithm ONE: instance $I_1$ scaled by $10$.

$m=2$ machines, $n=5$ jobs:

$$
\begin{array}{l|ccccc}
\hline
j & 1 & 2 & 3 & 4 & 5 \\
\hline
t_j & 70 & 50 & 40 & 30 & 30 \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{PCM30})=110$.

- Used in [question 4](../exercises/approximation.md#esercizio-28-2).

### Instance PCM31 { #sez-sec-cat-ist-pcm31 }

Graham's tight instance of $LIST$ for $m=3$.

$m=3$ machines, $n=7$ jobs:

$$
\begin{array}{l|ccccccc}
\hline
j & 1 & 2 & 3 & 4 & 5 & 6 & 7 \\
\hline
t_j & 1 & 1 & 1 & 1 & 1 & 1 & 3 \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{PCM31})=3$, attained by $J_1=\{7\}$, $J_2=\{1,2,3\}$, $J_3=\{4,5,6\}$ ($LIST$ gives $5$).

- Used in [Tight family of $LIST$, case $m=3$](../approximation-algorithms/pcmax-approximation.md#box-6-prop-LISTtight), [Exercise 31.2](../exercises/pcmax-approximation.md#esercizio-31-2).

### Instance PCM32 { #sez-sec-cat-ist-pcm32 }

$LIST$ and $LPT$ guarantees on seven jobs.

$m=3$ machines, $n=7$ jobs:

$$
\begin{array}{l|ccccccc}
\hline
j & 1 & 2 & 3 & 4 & 5 & 6 & 7 \\
\hline
t_j & 2 & 2 & 4 & 8 & 8 & 6 & 6 \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{PCM32})=12$, attained by the $LPT$ schedule ($LIST$ gives $16$).

- Used in [Exercise 31.1](../exercises/pcmax-approximation.md#esercizio-31-1).

### Instance PCM33 { #sez-sec-cat-ist-pcm33 }

Graham's tight instance of $LPT$ for $m=4$.

$m=4$ machines, $n=9$ jobs:

$$
\begin{array}{l|ccccccccc}
\hline
j & 1 & 2 & 3 & 4 & 5 & 6 & 7 & 8 & 9 \\
\hline
t_j & 7 & 7 & 6 & 6 & 5 & 5 & 4 & 4 & 4 \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{PCM33})=12$, attained by $J_1=\{1,5\}$, $J_2=\{2,6\}$, $J_3=\{3,4\}$, $J_4=\{7,8,9\}$ ($LPT$ gives $15$).

- Used in [Exercise 31.3](../exercises/pcmax-approximation.md#esercizio-31-3).

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

## Scheduling on a fixed number of identical machines ($m$ not part of the input) ($Pm\|C_{\max}$) { #sez-sec-cat-pmcmax }

<a id="box-2-def-cat-pmcmax"></a>

!!! definizione "Definition 2: Scheduling on a fixed number of identical machines"

    The problem $P\,||\,C_{\max}$ in which the number $m$ of machines is a constant, for example $m=2$, and only the jobs $\Jlavori$ and the processing times $t_j \in \Z_{\ge 1}$ form the input.

- Defined in [Chapter 1 «Combinatorial optimization problems»](../combinatorial-optimization-problems/combinatorial-optimization.md#sez-sec-complexity).

- Special case of $P\,||\,C_{\max}$ with $m$ fixed; with $m=2$ it asks for a split of the jobs into two sets of loads as equal as possible.

- <strong>Complexity</strong>: Weakly NP-hard for a fixed number of machines, e.g. $m=2$.

<strong>Where it is treated</strong>

- [Chapter 1 «Combinatorial optimization problems»](../combinatorial-optimization-problems/combinatorial-optimization.md#sez-sec-complexity): Complexity: weakly NP-hard for a fixed number of machines

- [Chapter 7 «Parallel machine scheduling»](../combinatorial-optimization-problems/pcmax.md#box-6-ex-pcmax-lb): Instances with $m=2$ in the examples and exercises

## Scheduling on parallel machines with different speeds, $Q\,||\,C_{\max}$ { #sez-sec-cat-qcmax }

<a id="box-3-def-cat-qcmax"></a>

!!! definizione "Definition 3: Scheduling on parallel machines with different speeds, $Q\,||\,C_{\max}$"

    In the three-field notation $\alpha\,|\,\beta\,|\,\gamma$, the machine environment $\alpha=Q$ denotes parallel machines with different speeds; $Q\,||\,C_{\max}$ assigns jobs without additional characteristics to such machines, minimizing the makespan $C_{\max}$.

- Defined in [Chapter 7 «Parallel machine scheduling»](../combinatorial-optimization-problems/pcmax.md#sez-sec-threefield).

- Generalizes $P\,||\,C_{\max}$, which is the case of machines with equal speeds.

<strong>Where it is treated</strong>

- [Chapter 7 «Parallel machine scheduling»](../combinatorial-optimization-problems/pcmax.md#sez-sec-threefield): Three-field notation

## Scheduling on unrelated parallel machines, $R\,||\,C_{\max}$ { #sez-sec-cat-rcmax }

<a id="box-4-def-cat-rcmax"></a>

!!! definizione "Definition 4: Scheduling on unrelated parallel machines, $R\,||\,C_{\max}$"

    In the three-field notation $\alpha\,|\,\beta\,|\,\gamma$, the machine environment $\alpha=R$ denotes unrelated parallel machines; $R\,||\,C_{\max}$ assigns jobs without additional characteristics to such machines, minimizing the makespan $C_{\max}$.

- Defined in [Chapter 7 «Parallel machine scheduling»](../combinatorial-optimization-problems/pcmax.md#sez-sec-threefield).

- Generalizes $Q\,||\,C_{\max}$ and $P\,||\,C_{\max}$.

<strong>Where it is treated</strong>

- [Chapter 7 «Parallel machine scheduling»](../combinatorial-optimization-problems/pcmax.md#sez-sec-threefield): Three-field notation
