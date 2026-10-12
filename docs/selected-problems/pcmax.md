---
title: "Scheduling on identical parallel machines"
---

# Scheduling on identical parallel machines

<div class="info-capitolo" markdown>

**Selected problems** · [:material-view-list: Catalogue of combinatorial problems](../catalogue/index.md)

</div>

<a id="sec:cat-pcmax"></a>

<a id="sec:cat-scelto-pcmax"></a>

!!! chiave ""

    What the course does on scheduling on identical parallel machines ($P\|C_{\max}$): a summary.

## Definition { #sez-sec-cat-pcmax-definition }

<a id="box-1-def-cat-pcmax"></a>

!!! definizione "Definition 1: Scheduling on identical parallel machines"

    Given:

    1. a set of $m$ identical <em>machines</em>,

    2. a set $\mathscr{J} = \{1,2,\dots,n\}$ of $n$ <em>jobs</em>,

    3. for each job $j \in \mathscr{J}$, a <em>processing time</em> $t_j \in \Z_{\ge 1}$,

    the problem $P\,||\,C_{\max}$ asks to assign each job to a machine, so that the time needed to complete all the jobs, i.e., the largest total processing time assigned to a machine, is minimized.

Assumptions and full definition: [Catalogue of combinatorial problems](../catalogue/scheduling-on-identical-parallel-machines.md).

- Strongly NP-hard when $m$ is part of the input; weakly NP-hard for a fixed number of machines ([Ch. 1](../combinatorial-optimization-problems/combinatorial-optimization/a-glimpse-of-computational-complexity.md#box-12-def-pseudo)).

- Lower bound $\max\{\max_j t_j, \lceil \sum_j t_j/m \rceil\}$; it is not always attained: $(4,3,3)$ on two machines gives $5$, the optimum is $6$ ([Ch. 7](../combinatorial-optimization-problems/pcmax.md#box-5-obs-pcmaxlb)).

- A makespan at most $T$ exists if and only if the jobs fit into $m$ bins of capacity $T$ ([Ch. 7](../combinatorial-optimization-problems/pcmax.md#76-relation-with-the-bin-packing-problem)).

## Formulations { #sez-sec-cat-pcmax-formulations }

- The model $\ILP_{\PCmax}$ has $nm$ binary variables $x_{jh}$ and the continuous variable $C_{\max}$ ([Ch. 14](../formulations/pcmax-formulations.md#eq-ILP-PCMAX)).

- The LP bound is $\sum_j t_j/m$; its ratio to the optimum is at least $1/m$, and $1/m$ is approached ([Ch. 14](../formulations/pcmax-formulations.md#box-8-prop-PCMAX-tight)).

- Valid inequalities strengthen the model; load ordering breaks the symmetry only when the loads are distinct ([Ch. 14](../formulations/pcmax-formulations.md#144-additional-considerations)).

## Heuristics { #sez-sec-cat-pcmax-heuristics }

- On the instance of [Ch. 7](../combinatorial-optimization-problems/pcmax.md) (three machines, optimum $9$) LIST with the shortest jobs first gives $12$ and LPT gives $11$ ([Ch. 29](../heuristic-algorithms/constructive-heuristics/scheduling-on-parallel-machines-longest-jobs-first.md#sez-sec-LPT)).

- The LPT solution is a local optimum for move, while two swaps reach $9$; the auxiliary objective $\sum_h L_h^2$ gives a slope to the plateaus ([Ch. 30](../heuristic-algorithms/local-search/p-cmax-move-and-swap.md#box-8-ex-lpt)).

- Tabu search and VNS reach $9$ on the same instance ([Ch. 31](../heuristic-algorithms/metaheuristics/variable-neighbourhood-search.md#box-8-ex-vnsPCM)).

## MIP heuristics { #sez-sec-cat-pcmax-mipheuristics }

- On the instance of [Ch. 7](../combinatorial-optimization-problems/pcmax.md) fractional diving ends at $10$, guided diving from LPT finds $9$, the feasibility pump returns $11$ ([Ch. 32](../heuristic-algorithms/mip-heuristics-classical.md#box-5-ex-divepcm)).

- RINS, local branching and proximity search, started from LPT, reach $9$; proximity search also proves it optimal ([Ch. 32](../heuristic-algorithms/mip-heuristics-classical.md#box-10-ex-rinspcm)).

## Approximation { #sez-sec-cat-pcmax-approximation }

- LIST is a $\left(2-\frac1m\right)$-approximation for every list, tight ([Ch. 36](../approximation-algorithms/pcmax-approximation.md#box-5-prop-LIST)).

- LPT is a $\left(\frac43-\frac1{3m}\right)$-approximation, tight on Graham's family; for $m=3$ it is the instance of [Ch. 7](../combinatorial-optimization-problems/pcmax.md) ([Ch. 36](../approximation-algorithms/pcmax-approximation.md#box-7-prop-LPT)).

## Exercises { #sez-sec-cat-pcmax-es }

- [Ch. 7 — Parallel machine scheduling](../exercises/pcmax.md) (5 exercises).

- [Ch. 14 — Formulations of parallel machine scheduling](../exercises/pcmax-formulations.md) (5 exercises).

- [Ch. 28 — Heuristic algorithms: definitions](../exercises/heuristics.md) (2 exercises).

- [Ch. 29 — Constructive heuristics](../exercises/constructive-heuristics.md) (3 exercises).

- [Ch. 30 — Local search](../exercises/local-search.md) (3 exercises).

- [Ch. 31 — Metaheuristics](../exercises/metaheuristics.md) (3 exercises).

- [Ch. 32 — MIP heuristics for the classical problems](../exercises/mip-heuristics-classical.md) (1 exercise).

- [Ch. 33 — Approximation algorithms: definitions](../exercises/approximation.md) (1 exercise).

- [Ch. 36 — Approximation for $P\|C_{\max}$](../exercises/pcmax-approximation.md) (3 exercises).

## Variants { #sez-sec-cat-pcmax-var }

- [Scheduling on a fixed number of identical machines ($Pm\|C_{\max}$)](../catalogue/scheduling-on-a-fixed-number-of-identical-machines.md): Special case of $P\,||\,C_{\max}$ with $m$ fixed; with $m=2$ it asks for a split of the jobs into two sets of loads as equal as possible.

- [Scheduling on parallel machines with different speeds ($Q\|C_{\max}$)](../catalogue/scheduling-on-parallel-machines-with-different-speeds.md): Generalizes $P\,||\,C_{\max}$, which is the case of machines with equal speeds.

- [Scheduling on unrelated parallel machines ($R\|C_{\max}$)](../catalogue/scheduling-on-unrelated-parallel-machines.md): Generalizes $Q\,||\,C_{\max}$ and $P\,||\,C_{\max}$.
