---
title: "The travelling salesman problem"
---

# The travelling salesman problem

<div class="info-capitolo" markdown>

**Selected problems** · [:material-view-list: Catalogue of combinatorial problems](../catalogue/index.md)

</div>

<a id="sec:cat-tsp"></a>

<a id="sec:cat-pagina-central-problems"></a>

!!! chiave ""

    Find a shortest closed route that visits every city exactly once and returns to the starting city.

!!! nota "Where it is treated"

    - [Chapter 1 «Combinatorial optimization problems»](../combinatorial-optimization-problems/combinatorial-optimization.md#124-travelling-salesman-problem): First definition, counting the tours, nearest neighbour and the two-shortest-edges bound

    - [Chapter 6 «The travelling salesman problem»](../combinatorial-optimization-problems/tsp/index.md): Definition, metric TSP and ATSP, counting and enumeration, nearest neighbour, a combinatorial lower bound

    - [Chapter 13 «Formulations of the travelling salesman problem»](../formulations/tsp-formulations.md): The MTZ and DFJ models and their LP relaxations

    - [Chapter 23 «Heuristic algorithms: definitions»](../heuristic-algorithms/heuristics.md#sez-sec-problems): Reference problem of the heuristic part: gap and relative error, the two-edge bound, the search space of the tours

    - [Chapter 24 «Constructive heuristics»](../heuristic-algorithms/constructive-heuristics/the-travelling-salesman-problem-append-or-insert.md#sez-sec-TSP): Append or insert: $NN$, multi-start $NN$, $NI$, $FI$, $CI$, randomized $NN$, regret insertion, the pilot method

    - [Chapter 25 «Local search»](../heuristic-algorithms/local-search/tsp-2-opt-and-or-opt.md#sez-sec-tsp): 2-opt and Or-opt local search, $VND$, multi-start local search

    - [Chapter 26 «Metaheuristics»](../heuristic-algorithms/metaheuristics/the-problems-and-the-assumptions.md#sez-sec-instances): $SA$, tabu search, $ILS$ with the double bridge, GRASP, LNS and ALNS on TSP20

    - [Chapter 27 «MIP heuristics for the classical problems»](../heuristic-algorithms/mip-heuristics-classical.md#2723-the-travelling-salesman-problem): The symmetric edge model and its LP relaxation on the reference instance

    - [Chapter 32 «Approximation for the metric TSP»](../approximation-algorithms/tsp-approximation.md#322-the-double-tree-and-the-christofides-algorithms): Double tree and Christofides for the metric TSP

    - [Chapter 32 «Approximation for the metric TSP»](../approximation-algorithms/tsp-approximation.md#325-the-general-tsp): No constant ratio for the general TSP unless $P=NP$

## Definition { #sez-sec-cat-tsp-def }

- Definition and assumptions: [Catalogue of combinatorial problems](../catalogo/central-problems.md#sez-sec-cat-def-tsp).

- The cities are places to visit and $d_{ij}$ the cost of going from $i$ to $j$, as for a technician who visits her sites and comes back to the office ([Chapter 1 «Combinatorial optimization problems»](../combinatorial-optimization-problems/combinatorial-optimization.md#110-exercises)).

- A feasible solution is a <strong>tour</strong>, a permutation $\sigma=(\sigma_1,\dots,\sigma_n)$ read as the closed route $\sigma_1\to\dots\to\sigma_n\to\sigma_1$, of length $L(\sigma) = \sum_{k=1}^{n-1} d_{\sigma_k \sigma_{k+1}} + d_{\sigma_n \sigma_1}$.

- The combinatorial object is a cyclic ordering of the cities: a symmetric instance has $\frac{(n-1)!}{2}$ distinct tours, about $6.1\cdot10^{16}$ for $20$ cities.

## Bounds and complexity { #sez-sec-cat-tsp-prop }

- <strong>Complexity</strong>: Strongly NP-hard: it contains the Hamiltonian cycle problem; for the general TSP no polynomial algorithm has a constant performance ratio unless $P=NP$.

- $z(I) \ge \left\lceil \frac{1}{2} \sum_{i \in \Vcitta} (a_i + b_i) \right\rceil$, where $a_i \le b_i$ are the two smallest distances from city $i$ (two shortest edges) ([Chapter 6 «The travelling salesman problem»](../combinatorial-optimization-problems/tsp/variants-metric-and-asymmetric-tsp.md#box-7-obs-tsp-lb)).

- $d(T)\le z(I)$ for every minimum spanning tree $T$, metric or not ([Chapter 32 «Approximation for the metric TSP»](../approximation-algorithms/tsp-approximation.md#box-5-obs-mst)).

- Assignment relaxation $\le z(\LP_{\TSP}^{\mathrm{MTZ}}) \le z(\LP_{\TSP}^{\mathrm{DFJ}}) \le z(I)$ on the reference instance: $16\le17\le18=18$ ([Chapter 13 «Formulations of the travelling salesman problem»](../formulations/tsp-formulations.md#box-8-ex-TSP-LP)).

- $\mathrm{relative~error} \le gap(I)=\frac{\mathscr{A}(I) - \LB(I)}{\LB(I)}$: on the reference instance $47.1\%$ against $38.9\%$ for the $NN$ tour ([Chapter 23 «Heuristic algorithms: definitions»](../heuristic-algorithms/heuristics.md#box-7-ex-gaps)).

- Different permutations describe the same tour: $n$ starting cities and, in the symmetric case, $2$ directions ([Chapter 6 «The travelling salesman problem»](../combinatorial-optimization-problems/tsp/variants-metric-and-asymmetric-tsp.md#box-4-prop-tsp-count)).

- Shortcutting a closed walk does not increase its length in a metric instance, and a minimum perfect matching of an even set of cities weighs at most $\frac{z(I)}{2}$ ([Chapter 32 «Approximation for the metric TSP»](../approximation-algorithms/tsp-approximation.md#323-structural-properties)).

## Formulation { #sez-sec-cat-tsp-formulation }

- <strong>$\ILP_{\TSP}^{\mathrm{MTZ}}$ model</strong> ([Chapter 13 «Formulations of the travelling salesman problem»](../formulations/tsp-formulations.md#eq-ILP-TSP)):

\begin{align*}
\min\ & \sum_{i\in\Vcitta}\sum_{\substack{j\in\Vcitta\\j\neq i}} d_{ij}x_{ij} \\
& \sum_{\substack{j\in\Vcitta\\j\neq i}}x_{ij} = 1 && \forall i\in\Vcitta \\
& \sum_{\substack{i\in\Vcitta\\i\neq j}}x_{ij} = 1 && \forall j\in\Vcitta \\
& u_i-u_j+(n-1)x_{ij} \le n-2 && \forall i,j\in\Vcitta\setminus\{1\},~i\neq j \\
& x_{ij} \in\{0,1\} && \forall(i,j)\in A \\
& 1\le u_i \le n-1 && \forall i\in\Vcitta\setminus\{1\}
\end{align*}

- <strong>$\ILP_{\TSP}^{\mathrm{DFJ}}$ model</strong> ([Chapter 13 «Formulations of the travelling salesman problem»](../formulations/tsp-formulations.md#eq-ILP-TSP-DFJ)):

\begin{align*}
\min\ & \sum_{i\in\Vcitta}\sum_{\substack{j\in\Vcitta\\j\neq i}} d_{ij}x_{ij} \\
& \sum_{\substack{j\in\Vcitta\\j\neq i}}x_{ij} = 1 && \forall i\in\Vcitta \\
& \sum_{\substack{i\in\Vcitta\\i\neq j}}x_{ij} = 1 && \forall j\in\Vcitta \\
& \sum_{i\in S}\sum_{\substack{j\in S\\j\neq i}}x_{ij} \le |S|-1 && \forall S\subseteq\Vcitta\setminus\{1\},~|S|\ge2 \\
& x_{ij} \in\{0,1\} && \forall(i,j)\in A
\end{align*}

- The MTZ model uses $n(n-1)$ arc variables and $n-1$ positions $u_i$; the constraints $u_i-u_j+(n-1)x_{ij}\le n-2$ eliminate the subtours without city $1$ ([Chapter 13 «Formulations of the travelling salesman problem»](../formulations/tsp-formulations.md#box-3-prop-MTZ-subtours)).

- The DFJ model adds $2^{n-1}-n$ subtour elimination constraints, which are added only when violated ([Chapter 13 «Formulations of the travelling salesman problem»](../formulations/tsp-formulations.md#box-5-prop-DFJ-subtours)).

- The MTZ relaxation is weak: every point with $x_{ij}\le\frac{n-2}{n-1}$ and $u_i=1$ is feasible; on the reference instance the bounds are $16$, $17$, $18$ ([Chapter 13 «Formulations of the travelling salesman problem»](../formulations/tsp-formulations.md#box-7-prop-MTZ-weak)).

## Constructive heuristics { #sez-sec-cat-tsp-constructiveheuristics }

- The nearest neighbour rule from city $1$ (ties by the smallest index) gives $(1,3,2,4,5)$ of length $25$ on the reference instance ([Chapter 6 «The travelling salesman problem»](../combinatorial-optimization-problems/tsp/variants-metric-and-asymmetric-tsp.md#box-6-ex-tsp-nn)).

- Multi-start $NN$ returns $18=z(I)$ on the reference instance (lengths $25,18,18,19,18$ from cities $1,\dots,5$), in $O(n^3)$ ([Chapter 24 «Constructive heuristics»](../heuristic-algorithms/constructive-heuristics/the-travelling-salesman-problem-append-or-insert.md#box-12-ex-msnn)).

- Insertion heuristics use the cost $\Delta(i,k,j) = d_{ik} + d_{kj} - d_{ij}$; $NI$, $FI$ and $CI$ all give $18$ on the reference instance, and on metric instances $NI$ and $CI$ are at most twice the optimum ([Chapter 24 «Constructive heuristics»](../heuristic-algorithms/constructive-heuristics/the-travelling-salesman-problem-append-or-insert.md#sez-sec-INS)).

- Randomized $NN_\alpha$ with a value-based RCL, regret insertion $REG_2$ ($19=z(I)$ against $CI(I)=20$ on $6$ cities) and the pilot method, with $PILOT$-$NN(I)\le NN(I)$ ([Chapter 24 «Constructive heuristics»](../heuristic-algorithms/constructive-heuristics/randomized-construction.md#sez-sec-RCL)).

## Local search { #sez-sec-cat-tsp-localsearch }

- A 2-opt move removes two edges and reverses a path, with $\frac{n(n-3)}{2}$ moves and $\Delta = d_{u_1u_2}+d_{v_1v_2}-d_{u_1v_1}-d_{u_2v_2}$ evaluated in $O(1)$ ([Chapter 25 «Local search»](../heuristic-algorithms/local-search/evaluating-a-move-incrementally.md#box-4-prop-twoopt)).

- From the $NN$ tour of length $25$, 2-opt reaches the optimum $18$ in two moves with first and with best improvement ([Chapter 25 «Local search»](../heuristic-algorithms/local-search/tsp-2-opt-and-or-opt.md#box-5-ex-twooptref)).

- Or-opt moves a segment of $\ell\in\{1,2,3\}$ cities: on $10$ cities it escapes the 2-opt local optimum $41$ and reaches $z(I)=39$, as does $VND$ with 2-opt and Or-opt ([Chapter 25 «Local search»](../heuristic-algorithms/local-search/tsp-2-opt-and-or-opt.md#box-7-ex-oropt)).

- Multi-start 2-opt on $30$ cities finds $z(I)=478$ in $14$ of $100$ runs, but local search gives no dual bound to recognize it ([Chapter 25 «Local search»](../heuristic-algorithms/local-search/multi-start-local-search.md#box-19-ex-ms30)).

## Metaheuristics { #sez-sec-cat-tsp-metaheuristics }

- Simulated annealing with the 2-opt neighbourhood and the Metropolis rule reaches $18$ on the reference instance and $291$ on TSP20 with slow cooling ([Chapter 26 «Metaheuristics»](../heuristic-algorithms/metaheuristics/how-to-escape-from-a-local-optimum.md#box-4-ex-saTSP)).

- Tabu search forbids the two removed edges: on TSP20 every tenure from $1$ to $20$ reaches $291$, tenure $0$ stops at $319$ ([Chapter 26 «Metaheuristics»](../heuristic-algorithms/metaheuristics/tabu-search.md#sez-sec-ts-tsp)).

- Iterated local search with the double-bridge kick $(A,B,C,D)\to(A,C,B,D)$ goes from the 2-opt local optimum $319$ to $291=z(I)$ in two kicks ([Chapter 26 «Metaheuristics»](../heuristic-algorithms/metaheuristics/iterated-local-search.md#box-7-ex-ilsTSP)).

- GRASP (randomized $NN$ plus 2-opt) and LNS / ALNS (removal of $q$ cities and cheapest-insertion repair) are compared on TSP20 ([Chapter 26 «Metaheuristics»](../heuristic-algorithms/metaheuristics/comparison-and-conclusions.md#26111-the-methods-on-the-medium-instances)).

## MIP heuristics { #sez-sec-cat-tsp-mipheuristics }

- The symmetric model with $\sum_{\{i,j\}\in\delta(i)} x_{ij} = 2$ and the subtour elimination constraints has an integer LP optimum on the reference instance, so rounding gives $18$ with gap $0\%$ ([Chapter 27 «MIP heuristics for the classical problems»](../heuristic-algorithms/mip-heuristics-classical.md#2725-the-lp-relaxations-on-the-reference-instances)).

## Approximation { #sez-sec-cat-tsp-approximation }

- Double tree: $DT(I)\le 2\,d(T)\le 2\,z(I)$, and the ratio $2$ is tight ([Chapter 32 «Approximation for the metric TSP»](../approximation-algorithms/tsp-approximation.md#box-7-prop-DT)).

- Christofides: $CH(I)\le d(T)+d(M)\le\frac32\,z(I)$, tight; on the reference instance $CH(I)=18=z(I)$ and $DT(I)=22$ ([Chapter 32 «Approximation for the metric TSP»](../approximation-algorithms/tsp-approximation.md#box-9-prop-CH)).

- For the general TSP no polynomial algorithm has $\frac{\mathscr{A}(I)}{z(I)}\le\alpha$ for a constant $\alpha$, unless $P=NP$ (Sahni and Gonzalez, 1976) ([Chapter 32 «Approximation for the metric TSP»](../approximation-algorithms/tsp-approximation.md#box-11-prop-TSPinapx)).

## Exercises { #sez-sec-cat-tsp-es }

- [Ground set, feasible solutions and objective (TSP)](../exercises/combinatorial-optimization.md#esercizio-1-1)

- [Counting the solutions](../exercises/combinatorial-optimization.md#esercizio-1-3)

- [Primal bound, dual bound and gap (TSP)](../exercises/combinatorial-optimization.md#esercizio-1-5)

- [Tours and their length (TSP)](../exercises/tsp.md#esercizio-6-1)

- [Enumeration of the tours (TSP)](../exercises/tsp.md#esercizio-6-2)

- [Nearest neighbour from every city and a lower bound (TSP)](../exercises/tsp.md#esercizio-6-3)

- [The triangle inequality (metric TSP)](../exercises/tsp.md#esercizio-6-4)

- [Asymmetric distances (ATSP)](../exercises/tsp.md#esercizio-6-5)

- [The MTZ model of the TSP (1)](../exercises/tsp-formulations.md#esercizio-13-1)

- [The DFJ model of the TSP (1)](../exercises/tsp-formulations.md#esercizio-13-2)

- [Feasible solutions of the TSP models (1)](../exercises/tsp-formulations.md#esercizio-13-3)

- [Comparing the TSP relaxations (1)](../exercises/tsp-formulations.md#esercizio-13-4)

- [Adding subtour elimination constraints (1)](../exercises/tsp-formulations.md#esercizio-13-5)

- [Metric TSP approximation 1](../exercises/tsp-approximation.md#esercizio-32-1)

- [Metric TSP approximation 2](../exercises/tsp-approximation.md#esercizio-32-2)

- [Metric TSP approximation 3](../exercises/tsp-approximation.md#esercizio-32-3)

- [A dual bound for the TSP (1)](../exercises/heuristics.md#esercizio-23-3)

- [TSP construction 1](../exercises/constructive-heuristics.md#esercizio-24-10)

- [TSP construction 2](../exercises/constructive-heuristics.md#esercizio-24-11)

- [TSP construction 3](../exercises/constructive-heuristics.md#esercizio-24-12)

- [Local search TSP 1](../exercises/local-search.md#esercizio-25-7)

- [Local search TSP 2](../exercises/local-search.md#esercizio-25-8)

- [Local search TSP 3](../exercises/local-search.md#esercizio-25-9)

- [Simulated annealing 1](../exercises/metaheuristics.md#esercizio-26-1)

- [Simulated annealing 3](../exercises/metaheuristics.md#esercizio-26-3)

- [Tabu search 3](../exercises/metaheuristics.md#esercizio-26-6)

- [Iterated local search and VNS 1](../exercises/metaheuristics.md#esercizio-26-7)

- [Iterated local search and VNS 2](../exercises/metaheuristics.md#esercizio-26-8)

- [GRASP 2](../exercises/metaheuristics.md#esercizio-26-11)

- [Large neighbourhood search 3](../exercises/metaheuristics.md#esercizio-26-15)

## Variants { #sez-sec-cat-tsp-var }

- [Metric travelling salesman problem (metric TSP)](../catalogo/routing.md#sez-sec-cat-def-metrictsp): The special case of the TSP with the triangle inequality, where approximation guarantees exist.

- [Asymmetric travelling salesman problem (ATSP)](../catalogo/routing.md#sez-sec-cat-def-atsp): The TSP is the special case of the ATSP in which $d_{ij}=d_{ji}$ for all $i,j$; an ATSP instance has $(n-1)!$ tours.

- [Hamiltonian cycle problem (HCP)](../catalogo/routing.md#sez-sec-cat-def-hcp): With $d_{ij}=1$ on the edges and a large distance elsewhere, $G$ is Hamiltonian if and only if $z(I_G)=n$: the TSP contains it.
