---
title: "Scheduling on identical parallel machines (P||Cmax)"
---

# Scheduling on identical parallel machines ($P\|C_{\max}$)

<div class="info-capitolo" markdown>

[:material-view-list: **Catalogue of combinatorial problems**](index.md) · [:material-folder-outline: Scheduling problems](scheduling-problems.md) · [:material-file-pdf-box: Catalogue (PDF)](../pdf/combinatorial-problem-catalogue.pdf)

</div>

<a id="sec:cat-pagina-scheduling-on-identical-parallel-machines"></a>

<a id="box-1-def-catdef-pcmax"></a>

!!! definizione "Definition 1: Scheduling on identical parallel machines"

    Given:

    1. a set of $m$ identical <em>machines</em>,

    2. a set $\mathscr{J} = \{1,2,\dots,n\}$ of $n$ <em>jobs</em>,

    3. for each job $j \in \mathscr{J}$, a <em>processing time</em> $t_j \in \Z_{\ge 1}$,

    the problem $P\,||\,C_{\max}$ asks to assign each job to a machine, so that the time needed to complete all the jobs, i.e., the largest total processing time assigned to a machine, is minimized.

<strong>Assumptions</strong>

- We make the following assumption:

    1. There are more jobs than machines (otherwise each job gets a machine of its own, and the optimal makespan is $\max_j t_j$). Formally:

        $$
        n > m
        $$

## What the course does on this problem { #sez-sec-cat-pcmax-vert }

<div class="tabella" markdown="0"><table>
<tr>
<th><strong>Technique</strong></th>
<th><strong>Where</strong></th>
</tr>
<tr>
<td><strong>Definition</strong></td>
<td><a href="https://fabiofurini.github.io/combinatorial-optimization/combinatorial-optimization-problems/pcmax/scheduling-on-identical-parallel-machines/#box-1-defPCmax">Ch. 7 «Scheduling problems»</a></td>
</tr>
<tr>
<td><strong>Formulations</strong></td>
<td><a href="https://fabiofurini.github.io/combinatorial-optimization/formulations/pcmax-formulations/">Ch. 14 «Formulations of scheduling problems»</a></td>
</tr>
<tr>
<td><strong>Heuristics</strong></td>
<td><a href="https://fabiofurini.github.io/heuristic-algorithms/heuristics/#box-5-ex-refPCM"><em>Heuristic Algorithms</em>: «Heuristic algorithms: definitions»</a>; <a href="https://fabiofurini.github.io/heuristic-algorithms/constructive-heuristics/scheduling-on-parallel-machines-longest-jobs-first/#sez-sec-PCM"><em>Heuristic Algorithms</em>: «Constructive heuristics»</a>; <a href="https://fabiofurini.github.io/heuristic-algorithms/local-search/p-cmax-move-and-swap/#sez-sec-pcmax"><em>Heuristic Algorithms</em>: «Local search»</a>; <a href="https://fabiofurini.github.io/heuristic-algorithms/metaheuristics/tabu-search/#sez-sec-ts"><em>Heuristic Algorithms</em>: «Metaheuristics»</a></td>
</tr>
<tr>
<td><strong>MIP heuristics</strong></td>
<td><a href="https://fabiofurini.github.io/heuristic-algorithms/mip-heuristics-classical/#eq-eq-pcm"><em>Heuristic Algorithms</em>: «MIP heuristics for the classical problems»</a></td>
</tr>
<tr>
<td><strong>Approximation</strong></td>
<td><a href="https://fabiofurini.github.io/approximation-algorithms/approximation/"><em>Approximation Algorithms</em>: «Principles of approximation algorithms»</a>; <a href="https://fabiofurini.github.io/approximation-algorithms/pcmax-approximation/#sez-sec-LIST"><em>Approximation Algorithms</em>: «Approximation for <span class="arithmatex">\(P\|C_{\max}\)</span>»</a></td>
</tr>
<tr>
<td><strong>Exercises</strong></td>
<td><a href="https://fabiofurini.github.io/combinatorial-optimization/exercises/pcmax/">Ch. 7 (5 exercises)</a>; <a href="https://fabiofurini.github.io/combinatorial-optimization/exercises/pcmax-formulations/">Ch. 14 (5 exercises)</a>; <a href="https://fabiofurini.github.io/heuristic-algorithms/exercises/heuristics/"><em>Heuristic Algorithms</em>: «Heuristic algorithms: definitions» (2 exercises)</a>; <a href="https://fabiofurini.github.io/heuristic-algorithms/exercises/constructive-heuristics/"><em>Heuristic Algorithms</em>: «Constructive heuristics» (3 exercises)</a>; <a href="https://fabiofurini.github.io/heuristic-algorithms/exercises/local-search/"><em>Heuristic Algorithms</em>: «Local search» (3 exercises)</a>; <a href="https://fabiofurini.github.io/heuristic-algorithms/exercises/metaheuristics/"><em>Heuristic Algorithms</em>: «Metaheuristics» (3 exercises)</a>; <a href="https://fabiofurini.github.io/heuristic-algorithms/exercises/mip-heuristics-classical/#esercizio-5-5"><em>Heuristic Algorithms</em>, Exercise 5.5</a>; <a href="https://fabiofurini.github.io/approximation-algorithms/exercises/approximation/#esercizio-1-2"><em>Approximation Algorithms</em>, Exercise 1.2</a>; <a href="https://fabiofurini.github.io/approximation-algorithms/exercises/pcmax-approximation/"><em>Approximation Algorithms</em>: «Approximation for <span class="arithmatex">\(P\|C_{\max}\)</span>» (3 exercises)</a></td>
</tr>
</table></div>

### Properties { #sez-sec-cat-pcmax-properties }

- Strongly NP-hard when $m$ is part of the input; weakly NP-hard for a fixed number of machines ([Ch. 1](../combinatorial-optimization-problems/combinatorial-optimization/a-glimpse-of-computational-complexity.md#box-12-def-pseudo)).

- Lower bound $\max\{\max_j t_j, \lceil \sum_j t_j/m \rceil\}$; it is not always attained: $(4,3,3)$ on two machines gives $5$, the optimum is $6$ ([Ch. 7](../combinatorial-optimization-problems/pcmax/scheduling-on-identical-parallel-machines.md#box-5-obs-pcmaxlb)).

- A makespan at most $T$ exists if and only if the jobs fit into $m$ bins of capacity $T$ ([Ch. 7](../combinatorial-optimization-problems/pcmax/scheduling-on-identical-parallel-machines.md#76-relation-with-the-bin-packing-problem)).

### Formulations { #sez-sec-cat-pcmax-formulations }

- The model $\ILP_{\PCmax}$ has $nm$ binary variables $x_{jh}$ and the continuous variable $C_{\max}$ ([Ch. 14](../formulations/pcmax-formulations/an-ilp-model-for-the-scheduling-on-identical-parallel-machin.md#eq-ILP-PCMAX)).

- The LP bound is $\sum_j t_j/m$; its ratio to the optimum is at least $1/m$, and $1/m$ is approached ([Ch. 14](../formulations/pcmax-formulations/an-ilp-model-for-the-scheduling-on-identical-parallel-machin.md#box-8-prop-PCMAX-tight)).

- Valid inequalities strengthen the model; load ordering breaks the symmetry only when the loads are distinct ([Ch. 14](../formulations/pcmax-formulations/an-ilp-model-for-the-scheduling-on-identical-parallel-machin.md#145-additional-considerations)).

### Heuristics { #sez-sec-cat-pcmax-heuristics }

- On the instance of [Ch. 7](../combinatorial-optimization-problems/pcmax/index.md) (three machines, optimum $9$) LIST with the shortest jobs first gives $12$ and LPT gives $11$ ([<em>Heuristic Algorithms</em>](https://fabiofurini.github.io/heuristic-algorithms/constructive-heuristics/scheduling-on-parallel-machines-longest-jobs-first/#sez-sec-LPT)).

- The LPT solution is a local optimum for move, while two swaps reach $9$; the auxiliary objective $\sum_h L_h^2$ gives a slope to the plateaus ([<em>Heuristic Algorithms</em>](https://fabiofurini.github.io/heuristic-algorithms/local-search/p-cmax-move-and-swap/#box-8-ex-lpt)).

- Tabu search and VNS reach $9$ on the same instance ([<em>Heuristic Algorithms</em>](https://fabiofurini.github.io/heuristic-algorithms/metaheuristics/variable-neighbourhood-search/#box-8-ex-vnsPCM)).

### MIP heuristics { #sez-sec-cat-pcmax-mipheuristics }

- On the instance of [Ch. 7](../combinatorial-optimization-problems/pcmax/index.md) fractional diving ends at $10$, guided diving from LPT finds $9$, the feasibility pump returns $11$ ([<em>Heuristic Algorithms</em>](https://fabiofurini.github.io/heuristic-algorithms/mip-heuristics-classical/#box-5-ex-divepcm)).

- RINS, local branching and proximity search, started from LPT, reach $9$; proximity search also proves it optimal ([<em>Heuristic Algorithms</em>](https://fabiofurini.github.io/heuristic-algorithms/mip-heuristics-classical/#box-10-ex-rinspcm)).

### Approximation { #sez-sec-cat-pcmax-approximation }

- LIST is a $\left(2-\frac1m\right)$-approximation for every list, tight ([<em>Approximation Algorithms</em>](https://fabiofurini.github.io/approximation-algorithms/pcmax-approximation/#box-4-prop-LIST)).

- LPT is a $\left(\frac43-\frac1{3m}\right)$-approximation, tight on Graham's family; for $m=3$ it is the instance of [Ch. 7](../combinatorial-optimization-problems/pcmax/index.md) ([<em>Approximation Algorithms</em>](https://fabiofurini.github.io/approximation-algorithms/pcmax-approximation/#box-6-prop-LPT)).
