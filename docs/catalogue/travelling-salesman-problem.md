---
title: "The travelling salesman problem (TSP)"
---

# The travelling salesman problem (TSP)

<div class="info-capitolo" markdown>

[:material-view-list: **Catalogue of combinatorial problems**](index.md) · [:material-folder-outline: Routing problems](routing-problems.md) · [:material-file-pdf-box: Catalogue (PDF)](../pdf/combinatorial-problem-catalogue.pdf)

</div>

<a id="sec:cat-pagina-travelling-salesman-problem"></a>

<a id="box-1-def-catdef-tsp"></a>

!!! definizione "Definition 1: The travelling salesman problem"

    Given:

    1. a set $\mathscr{V} = \{1,2,\dots,n\}$ of $n$ <em>cities</em>,

    2. for each pair of distinct cities $i,j \in \mathscr{V}$, a <em>distance</em> $d_{ij} \in \Z_{\ge 1}$, with $d_{ij}=d_{ji}$,

    the <strong>travelling salesman problem</strong> (TSP) asks to find a closed route that starts from a city, visits every other city exactly once and returns to the starting city, so that the total distance travelled is minimized.

<strong>Assumptions</strong>

- We make the following assumptions:

    1. There are at least three cities (with one or two cities there is only one route). Formally:

        $$
        n \ge 3
        $$

    2. The distances are symmetric (travelling from $i$ to $j$ costs as much as travelling from $j$ to $i$). Formally:

        $$
        d_{ij}=d_{ji},~~~~ \forall i,j \in \mathscr{V},~ i\neq j
        $$

## What the course does on this problem { #sez-sec-cat-tsp-vert }

<div class="tabella" markdown="0"><table>
<tr>
<th><strong>Technique</strong></th>
<th><strong>Where</strong></th>
</tr>
<tr>
<td><strong>Definition</strong></td>
<td><a href="https://fabiofurini.github.io/combinatorial-optimization/combinatorial-optimization-problems/tsp/the-travelling-salesman-problem/#box-1-defTSP">Ch. 6 «Routing problems»</a></td>
</tr>
<tr>
<td><strong>Formulations</strong></td>
<td><a href="https://fabiofurini.github.io/combinatorial-optimization/formulations/tsp-formulations/">Ch. 13 «Formulations of routing problems»</a></td>
</tr>
<tr>
<td><strong>Heuristics</strong></td>
<td><a href="https://fabiofurini.github.io/heuristic-algorithms/heuristics/#sez-sec-problems"><em>Heuristic Algorithms</em>: «Heuristic algorithms: definitions»</a>; <a href="https://fabiofurini.github.io/heuristic-algorithms/constructive-heuristics/the-travelling-salesman-problem-append-or-insert/#sez-sec-TSP"><em>Heuristic Algorithms</em>: «Constructive heuristics»</a>; <a href="https://fabiofurini.github.io/heuristic-algorithms/local-search/tsp-2-opt-and-or-opt/#sez-sec-tsp"><em>Heuristic Algorithms</em>: «Local search»</a>; <a href="https://fabiofurini.github.io/heuristic-algorithms/metaheuristics/the-problems-and-the-assumptions/#sez-sec-instances"><em>Heuristic Algorithms</em>: «Metaheuristics»</a></td>
</tr>
<tr>
<td><strong>MIP heuristics</strong></td>
<td><a href="https://fabiofurini.github.io/heuristic-algorithms/mip-heuristics-classical/#523-the-travelling-salesman-problem"><em>Heuristic Algorithms</em>: «MIP heuristics for the classical problems»</a></td>
</tr>
<tr>
<td><strong>Approximation</strong></td>
<td><a href="https://fabiofurini.github.io/approximation-algorithms/tsp-approximation/#sez-sec-DT"><em>Approximation Algorithms</em>: «The TSP: the general case and the metric case»</a></td>
</tr>
<tr>
<td><strong>Exercises</strong></td>
<td><a href="https://fabiofurini.github.io/combinatorial-optimization/exercises/tsp/">Ch. 6 (7 exercises)</a>; <a href="https://fabiofurini.github.io/combinatorial-optimization/exercises/tsp-formulations/">Ch. 13 (5 exercises)</a>; <a href="https://fabiofurini.github.io/heuristic-algorithms/exercises/heuristics/#esercizio-1-3"><em>Heuristic Algorithms</em>, Exercise 1.3</a>; <a href="https://fabiofurini.github.io/heuristic-algorithms/exercises/constructive-heuristics/"><em>Heuristic Algorithms</em>: «Constructive heuristics» (3 exercises)</a>; <a href="https://fabiofurini.github.io/heuristic-algorithms/exercises/local-search/"><em>Heuristic Algorithms</em>: «Local search» (3 exercises)</a>; <a href="https://fabiofurini.github.io/heuristic-algorithms/exercises/metaheuristics/"><em>Heuristic Algorithms</em>: «Metaheuristics» (7 exercises)</a>; <a href="https://fabiofurini.github.io/approximation-algorithms/exercises/tsp-approximation/"><em>Approximation Algorithms</em>: «The TSP: the general case and the metric case» (3 exercises)</a></td>
</tr>
</table></div>

### Properties { #sez-sec-cat-tsp-properties }

- Strongly NP-hard: it contains the Hamiltonian cycle problem ([Ch. 1](../combinatorial-optimization-problems/combinatorial-optimization/a-glimpse-of-computational-complexity.md#box-12-def-pseudo)).

- Lower bound $\lceil \frac12 \sum_i (a_i+b_i) \rceil$, with $a_i, b_i$ the two shortest edges at city $i$ ([Ch. 6](../combinatorial-optimization-problems/tsp/the-travelling-salesman-problem.md#box-6-obs-tsp-lb)).

- Nearest neighbour from city $1$ gives $25$ on the five-city instance of Ch. 6, whose optimum is $18$ ([Ch. 6](../combinatorial-optimization-problems/tsp/the-travelling-salesman-problem.md#box-5-ex-tsp-nn)).

### Formulations { #sez-sec-cat-tsp-formulations }

- The MTZ model eliminates the subtours with $n-1$ position variables $u_i$; the DFJ model with $2^{n-1}-n$ subtour constraints, added only when violated ([Ch. 13](../formulations/tsp-formulations/ilp-models-for-the-travelling-salesman-problem.md#box-4-prop-DFJ-subtours)).

- The MTZ relaxation is weak; on the instance of [Ch. 6](../combinatorial-optimization-problems/tsp/index.md) the bounds are $16$ (assignment), $17$ (MTZ) and $18$ (DFJ) ([Ch. 13](../formulations/tsp-formulations/ilp-models-for-the-travelling-salesman-problem.md#box-10-ex-TSP-LP)).

### Heuristics { #sez-sec-cat-tsp-heuristics }

- Multi-start nearest neighbour and the insertion heuristics NI, FI and CI all reach $18$ on the instance of [Ch. 6](../combinatorial-optimization-problems/tsp/index.md) ([<em>Heuristic Algorithms</em>](https://fabiofurini.github.io/heuristic-algorithms/constructive-heuristics/the-travelling-salesman-problem-append-or-insert/#sez-sec-INS)).

- 2-opt evaluates each of its $\frac{n(n-3)}{2}$ moves in $O(1)$ and turns the tour of length $25$ into an optimal one in two moves ([<em>Heuristic Algorithms</em>](https://fabiofurini.github.io/heuristic-algorithms/local-search/tsp-2-opt-and-or-opt/#box-5-ex-twooptref)).

- Or-opt and VND escape the local optima of 2-opt ([<em>Heuristic Algorithms</em>](https://fabiofurini.github.io/heuristic-algorithms/local-search/tsp-2-opt-and-or-opt/#box-7-ex-oropt)).

- Simulated annealing, tabu search, iterated local search, GRASP and LNS are compared on TSP20 (optimum $291$) ([<em>Heuristic Algorithms</em>](https://fabiofurini.github.io/heuristic-algorithms/metaheuristics/comparison-and-conclusions/#4111-the-methods-on-the-medium-instances)).

### MIP heuristics { #sez-sec-cat-tsp-mipheuristics }

- With the subtour constraints the LP optimum of the instance of [Ch. 6](../combinatorial-optimization-problems/tsp/index.md) is integer: rounding gives $18$, gap $0\%$ ([<em>Heuristic Algorithms</em>](https://fabiofurini.github.io/heuristic-algorithms/mip-heuristics-classical/#525-the-lp-relaxations-on-the-reference-instances)).

### Approximation { #sez-sec-cat-tsp-approximation }

- Metric TSP: the double tree algorithm is a $2$-approximation, tight ([<em>Approximation Algorithms</em>](https://fabiofurini.github.io/approximation-algorithms/tsp-approximation/#box-8-prop-DT)).

- Christofides is a $\frac32$-approximation, tight ([<em>Approximation Algorithms</em>](https://fabiofurini.github.io/approximation-algorithms/tsp-approximation/#box-10-prop-CH)).

- General TSP: no constant ratio, unless $P=NP$ ([<em>Approximation Algorithms</em>](https://fabiofurini.github.io/approximation-algorithms/tsp-approximation/#box-1-prop-TSPinapx)).
