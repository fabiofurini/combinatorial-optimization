---
title: "The travelling salesman problem"
---

# The travelling salesman problem

<div class="info-capitolo" markdown>

**Selected problems** · [:material-view-list: Catalogue of combinatorial problems](../catalogue/index.md)

</div>

<a id="sec:cat-tsp"></a>

<a id="sec:cat-scelto-tsp"></a>

!!! chiave ""

    What the course does on the travelling salesman problem (TSP): a summary.

## Definition { #sez-sec-cat-tsp-definition }

<a id="box-1-def-cat-tsp"></a>

!!! definizione "Definition 1: The travelling salesman problem"

    Given:

    1. a set $\mathscr{V} = \{1,2,\dots,n\}$ of $n$ <em>cities</em>,

    2. for each pair of distinct cities $i,j \in \mathscr{V}$, a <em>distance</em> $d_{ij} \in \Z_{\ge 1}$, with $d_{ij}=d_{ji}$,

    the <strong>travelling salesman problem</strong> (TSP) asks to find a closed route that starts from a city, visits every other city exactly once and returns to the starting city, so that the total distance travelled is minimized.

Assumptions and full definition: [Catalogue of combinatorial problems](../catalogue/travelling-salesman-problem.md).

- Strongly NP-hard: it contains the Hamiltonian cycle problem ([Ch. 1](../combinatorial-optimization-problems/combinatorial-optimization/primal-bounds-dual-bounds-and-gap.md#box-12-def-pseudo)).

- Lower bound $\lceil \frac12 \sum_i (a_i+b_i) \rceil$, with $a_i, b_i$ the two shortest edges at city $i$ ([Ch. 6](../combinatorial-optimization-problems/tsp/variants-metric-and-asymmetric-tsp.md#box-7-obs-tsp-lb)).

- Nearest neighbour from city $1$ gives $25$ on the five-city instance of Ch. 6, whose optimum is $18$ ([Ch. 6](../combinatorial-optimization-problems/tsp/variants-metric-and-asymmetric-tsp.md#box-6-ex-tsp-nn)).

## Formulations { #sez-sec-cat-tsp-formulations }

- The MTZ model eliminates the subtours with $n-1$ position variables $u_i$; the DFJ model with $2^{n-1}-n$ subtour constraints, added only when violated ([Ch. 13](../formulations/tsp-formulations.md#box-5-prop-DFJ-subtours)).

- The MTZ relaxation is weak; on the instance of [Ch. 6](../combinatorial-optimization-problems/tsp/index.md) the bounds are $16$ (assignment), $17$ (MTZ) and $18$ (DFJ) ([Ch. 13](../formulations/tsp-formulations.md#box-8-ex-TSP-LP)).

## Heuristics { #sez-sec-cat-tsp-heuristics }

- Multi-start nearest neighbour and the insertion heuristics NI, FI and CI all reach $18$ on the instance of [Ch. 6](../combinatorial-optimization-problems/tsp/index.md) ([Ch. 24](../heuristic-algorithms/constructive-heuristics/the-travelling-salesman-problem-append-or-insert.md#sez-sec-INS)).

- 2-opt evaluates each of its $\frac{n(n-3)}{2}$ moves in $O(1)$ and turns the tour of length $25$ into an optimal one in two moves ([Ch. 25](../heuristic-algorithms/local-search/tsp-2-opt-and-or-opt.md#box-5-ex-twooptref)).

- Or-opt and VND escape the local optima of 2-opt ([Ch. 25](../heuristic-algorithms/local-search/tsp-2-opt-and-or-opt.md#box-7-ex-oropt)).

- Simulated annealing, tabu search, iterated local search, GRASP and LNS are compared on TSP20 (optimum $291$) ([Ch. 26](../heuristic-algorithms/metaheuristics/comparison-and-conclusions.md#26111-the-methods-on-the-medium-instances)).

## MIP heuristics { #sez-sec-cat-tsp-mipheuristics }

- With the subtour constraints the LP optimum of the instance of [Ch. 6](../combinatorial-optimization-problems/tsp/index.md) is integer: rounding gives $18$, gap $0\%$ ([Ch. 27](../heuristic-algorithms/mip-heuristics-classical.md#2725-the-lp-relaxations-on-the-reference-instances)).

## Approximation { #sez-sec-cat-tsp-approximation }

- Metric TSP: the double tree algorithm is a $2$-approximation, tight ([Ch. 32](../approximation-algorithms/tsp-approximation.md#box-7-prop-DT)).

- Christofides is a $\frac32$-approximation, tight ([Ch. 32](../approximation-algorithms/tsp-approximation.md#box-9-prop-CH)).

- General TSP: no constant ratio, unless $P=NP$ ([Ch. 32](../approximation-algorithms/tsp-approximation.md#box-11-prop-TSPinapx)).

## Exercises { #sez-sec-cat-tsp-es }

- [Ch. 6 — The travelling salesman problem](../exercises/tsp.md) (5 exercises).

- [Ch. 13 — Formulations of the travelling salesman problem](../exercises/tsp-formulations.md) (5 exercises).

- [Ch. 23 — Heuristic algorithms: definitions](../exercises/heuristics.md) (1 exercise).

- [Ch. 24 — Constructive heuristics](../exercises/constructive-heuristics.md) (3 exercises).

- [Ch. 25 — Local search](../exercises/local-search.md) (3 exercises).

- [Ch. 26 — Metaheuristics](../exercises/metaheuristics.md) (7 exercises).

- [Ch. 32 — Approximation for the metric TSP](../exercises/tsp-approximation.md) (3 exercises).

## Variants { #sez-sec-cat-tsp-var }

- [Metric travelling salesman problem (metric TSP)](../catalogue/metric-travelling-salesman-problem.md): The special case of the TSP with the triangle inequality, where approximation guarantees exist.

- [Asymmetric travelling salesman problem (ATSP)](../catalogue/asymmetric-travelling-salesman-problem.md): The TSP is the special case of the ATSP in which $d_{ij}=d_{ji}$ for all $i,j$; an ATSP instance has $(n-1)!$ tours.

- [Hamiltonian cycle problem (HCP)](../catalogue/hamiltonian-cycle-problem.md): With $d_{ij}=1$ on the edges and a large distance elsewhere, $G$ is Hamiltonian if and only if $z(I_G)=n$: the TSP contains it.
