---
title: "The travelling salesman problem"
---

# The travelling salesman problem

<div class="info-capitolo" markdown>

**Catalogue of combinatorial problems** · [:material-file-pdf-box: Catalogue of problems (PDF)](../pdf/combinatorial-problem-catalogue.pdf)

</div>

<a id="sec:cat-tsp"></a>

<a id="sec:cat-pagina-tsp"></a>

!!! chiave ""

    Find a shortest closed route that visits every city exactly once and returns to the starting city.

!!! nota "Where it is treated"

    - [Chapter 1 «Combinatorial optimization problems»](../combinatorial-optimization-problems/combinatorial-optimization.md#124-travelling-salesman-problem): First definition, counting the tours, nearest neighbour and the two-shortest-edges bound

    - [Chapter 6 «The travelling salesman problem»](../combinatorial-optimization-problems/tsp.md): Definition, metric TSP and ATSP, counting and enumeration, nearest neighbour, a combinatorial lower bound

    - [Chapter 13 «Formulations of the travelling salesman problem»](../formulations/tsp-formulations.md): The MTZ and DFJ models and their LP relaxations

    - [Chapter 20 «Heuristic algorithms: definitions»](../heuristic-algorithms/heuristics.md#sez-sec-problems): Reference problem of the heuristic part: gap and relative error, the two-edge bound, the search space of the tours

    - [Chapter 21 «Constructive heuristics»](../heuristic-algorithms/constructive-heuristics.md#sez-sec-TSP): Append or insert: $NN$, multi-start $NN$, $NI$, $FI$, $CI$, randomized $NN$, regret insertion, the pilot method

    - [Chapter 22 «Local search»](../heuristic-algorithms/local-search.md#sez-sec-tsp): 2-opt and Or-opt local search, $VND$, multi-start local search

    - [Chapter 23 «Metaheuristics»](../heuristic-algorithms/metaheuristics.md#sez-sec-instances): $SA$, tabu search, $ILS$ with the double bridge, GRASP, LNS and ALNS on TSP20

    - [Chapter 24 «MIP heuristics for the classical problems»](../heuristic-algorithms/mip-heuristics-classical.md#2423-the-travelling-salesman-problem): The symmetric edge model and its LP relaxation on the reference instance

    - [Chapter 28 «$P\|C_{\max}$, metric TSP and the limits of approximation»](../approximation-algorithms/pcmax-tsp-coloring-approximation.md#283-the-metric-tsp): Double tree and Christofides for the metric TSP

    - [Chapter 28 «$P\|C_{\max}$, metric TSP and the limits of approximation»](../approximation-algorithms/pcmax-tsp-coloring-approximation.md#2871-the-general-tsp): No constant ratio for the general TSP unless $P=NP$

## Definition { #sez-sec-cat-tsp-def }

<a id="box-1-def-cat-tsp"></a>

!!! definizione "Definition 1: The travelling salesman problem"

    Given:

    1. a set $\Vcitta = \{1,2,\dots,n\}$ of $n$ <em>cities</em>,

    2. for each pair of distinct cities $i,j \in \Vcitta$, a <em>distance</em> $d_{ij} \in \Z_{\ge 1}$, with $d_{ij}=d_{ji}$,

    the <strong>travelling salesman problem</strong> (TSP) asks to find a closed route that starts from a city, visits every other city exactly once and returns to the starting city, so that the total distance travelled is minimized.

- Defined in [Chapter 6 «The travelling salesman problem»](../combinatorial-optimization-problems/tsp.md#box-1-defTSP).

- The cities are places to visit and $d_{ij}$ the cost of going from $i$ to $j$, as for a technician who visits her sites and comes back to the office ([Chapter 1 «Combinatorial optimization problems»](../combinatorial-optimization-problems/combinatorial-optimization.md#110-exercises)).

- A feasible solution is a <strong>tour</strong>, a permutation $\sigma=(\sigma_1,\dots,\sigma_n)$ read as the closed route $\sigma_1\to\dots\to\sigma_n\to\sigma_1$, of length $L(\sigma) = \sum_{k=1}^{n-1} d_{\sigma_k \sigma_{k+1}} + d_{\sigma_n \sigma_1}$.

- The combinatorial object is a cyclic ordering of the cities: a symmetric instance has $\frac{(n-1)!}{2}$ distinct tours, about $6.1\cdot10^{16}$ for $20$ cities.

## Bounds and complexity { #sez-sec-cat-tsp-prop }

- <strong>Complexity</strong>: Strongly NP-hard: it contains the Hamiltonian cycle problem; for the general TSP no polynomial algorithm has a constant performance ratio unless $P=NP$.

- $z(I) \ge \left\lceil \frac{1}{2} \sum_{i \in \Vcitta} (a_i + b_i) \right\rceil$, where $a_i \le b_i$ are the two smallest distances from city $i$ (two shortest edges) ([Chapter 6 «The travelling salesman problem»](../combinatorial-optimization-problems/tsp.md#box-7-obs-tsp-lb)).

- $d(T)\le z(I)$ for every minimum spanning tree $T$, metric or not ([Chapter 28 «$P\|C_{\max}$, metric TSP and the limits of approximation»](../approximation-algorithms/pcmax-tsp-coloring-approximation.md#box-12-obs-mst)).

- Assignment relaxation $\le z(\LP_{\TSP}^{\mathrm{MTZ}}) \le z(\LP_{\TSP}^{\mathrm{DFJ}}) \le z(I)$ on the reference instance: $16\le17\le18=18$ ([Chapter 13 «Formulations of the travelling salesman problem»](../formulations/tsp-formulations.md#box-8-ex-TSP-LP)).

- $\mathrm{relative~error} \le gap(I)=\frac{\mathscr{A}(I) - \LB(I)}{\LB(I)}$: on the reference instance $47.1\%$ against $38.9\%$ for the $NN$ tour ([Chapter 20 «Heuristic algorithms: definitions»](../heuristic-algorithms/heuristics.md#box-7-ex-gaps)).

- Different permutations describe the same tour: $n$ starting cities and, in the symmetric case, $2$ directions ([Chapter 6 «The travelling salesman problem»](../combinatorial-optimization-problems/tsp.md#box-4-prop-tsp-count)).

- Shortcutting a closed walk does not increase its length in a metric instance, and a minimum perfect matching of an even set of cities weighs at most $\frac{z(I)}{2}$ ([Chapter 28 «$P\|C_{\max}$, metric TSP and the limits of approximation»](../approximation-algorithms/pcmax-tsp-coloring-approximation.md#285-structural-properties)).

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

- The nearest neighbour rule from city $1$ (ties by the smallest index) gives $(1,3,2,4,5)$ of length $25$ on the reference instance ([Chapter 6 «The travelling salesman problem»](../combinatorial-optimization-problems/tsp.md#box-6-ex-tsp-nn)).

- Multi-start $NN$ returns $18=z(I)$ on the reference instance (lengths $25,18,18,19,18$ from cities $1,\dots,5$), in $O(n^3)$ ([Chapter 21 «Constructive heuristics»](../heuristic-algorithms/constructive-heuristics.md#box-12-ex-msnn)).

- Insertion heuristics use the cost $\Delta(i,k,j) = d_{ik} + d_{kj} - d_{ij}$; $NI$, $FI$ and $CI$ all give $18$ on the reference instance, and on metric instances $NI$ and $CI$ are at most twice the optimum ([Chapter 21 «Constructive heuristics»](../heuristic-algorithms/constructive-heuristics.md#sez-sec-INS)).

- Randomized $NN_\alpha$ with a value-based RCL, regret insertion $REG_2$ ($19=z(I)$ against $CI(I)=20$ on $6$ cities) and the pilot method, with $PILOT$-$NN(I)\le NN(I)$ ([Chapter 21 «Constructive heuristics»](../heuristic-algorithms/constructive-heuristics.md#sez-sec-RCL)).

## Local search { #sez-sec-cat-tsp-localsearch }

- A 2-opt move removes two edges and reverses a path, with $\frac{n(n-3)}{2}$ moves and $\Delta = d_{u_1u_2}+d_{v_1v_2}-d_{u_1v_1}-d_{u_2v_2}$ evaluated in $O(1)$ ([Chapter 22 «Local search»](../heuristic-algorithms/local-search.md#box-4-prop-twoopt)).

- From the $NN$ tour of length $25$, 2-opt reaches the optimum $18$ in two moves with first and with best improvement ([Chapter 22 «Local search»](../heuristic-algorithms/local-search.md#box-5-ex-twooptref)).

- Or-opt moves a segment of $\ell\in\{1,2,3\}$ cities: on $10$ cities it escapes the 2-opt local optimum $41$ and reaches $z(I)=39$, as does $VND$ with 2-opt and Or-opt ([Chapter 22 «Local search»](../heuristic-algorithms/local-search.md#box-7-ex-oropt)).

- Multi-start 2-opt on $30$ cities finds $z(I)=478$ in $14$ of $100$ runs, but local search gives no dual bound to recognize it ([Chapter 22 «Local search»](../heuristic-algorithms/local-search.md#box-19-ex-ms30)).

## Metaheuristics { #sez-sec-cat-tsp-metaheuristics }

- Simulated annealing with the 2-opt neighbourhood and the Metropolis rule reaches $18$ on the reference instance and $291$ on TSP20 with slow cooling ([Chapter 23 «Metaheuristics»](../heuristic-algorithms/metaheuristics.md#box-4-ex-saTSP)).

- Tabu search forbids the two removed edges: on TSP20 every tenure from $1$ to $20$ reaches $291$, tenure $0$ stops at $319$ ([Chapter 23 «Metaheuristics»](../heuristic-algorithms/metaheuristics.md#sez-sec-ts-tsp)).

- Iterated local search with the double-bridge kick $(A,B,C,D)\to(A,C,B,D)$ goes from the 2-opt local optimum $319$ to $291=z(I)$ in two kicks ([Chapter 23 «Metaheuristics»](../heuristic-algorithms/metaheuristics.md#box-7-ex-ilsTSP)).

- GRASP (randomized $NN$ plus 2-opt) and LNS / ALNS (removal of $q$ cities and cheapest-insertion repair) are compared on TSP20 ([Chapter 23 «Metaheuristics»](../heuristic-algorithms/metaheuristics.md#23111-the-methods-on-the-medium-instances)).

## MIP heuristics { #sez-sec-cat-tsp-mipheuristics }

- The symmetric model with $\sum_{\{i,j\}\in\delta(i)} x_{ij} = 2$ and the subtour elimination constraints has an integer LP optimum on the reference instance, so rounding gives $18$ with gap $0\%$ ([Chapter 24 «MIP heuristics for the classical problems»](../heuristic-algorithms/mip-heuristics-classical.md#2425-the-lp-relaxations-on-the-reference-instances)).

## Approximation { #sez-sec-cat-tsp-approximation }

- Double tree: $DT(I)\le 2\,d(T)\le 2\,z(I)$, and the ratio $2$ is tight ([Chapter 28 «$P\|C_{\max}$, metric TSP and the limits of approximation»](../approximation-algorithms/pcmax-tsp-coloring-approximation.md#box-18-prop-DT)).

- Christofides: $CH(I)\le d(T)+d(M)\le\frac32\,z(I)$, tight; on the reference instance $CH(I)=18=z(I)$ and $DT(I)=22$ ([Chapter 28 «$P\|C_{\max}$, metric TSP and the limits of approximation»](../approximation-algorithms/pcmax-tsp-coloring-approximation.md#box-20-prop-CH)).

- For the general TSP no polynomial algorithm has $\frac{\mathscr{A}(I)}{z(I)}\le\alpha$ for a constant $\alpha$, unless $P=NP$ (Sahni and Gonzalez, 1976) ([Chapter 28 «$P\|C_{\max}$, metric TSP and the limits of approximation»](../approximation-algorithms/pcmax-tsp-coloring-approximation.md#box-22-prop-TSPinapx)).

## Instances { #sez-sec-cat-tsp-ist }

### Instance TSP1 { #sez-sec-cat-ist-tsp1 }

Reference instance with $5$ cities (the TSP instance of the MIP modelling course).

$n=5$ cities, symmetric distances:

$$
\begin{array}{c|ccccc}
\hline
d_{ij} & 1 & 2 & 3 & 4 & 5 \\
\hline
1 & - & 5 & 2 & 2 & 9 \\
2 & 5 & - & 4 & 3 & 4 \\
3 & 2 & 4 & - & 4 & 7 \\
4 & 2 & 3 & 4 & - & 7 \\
5 & 9 & 4 & 7 & 7 & - \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{TSP1})=18$, attained by $\tilde\sigma=(1,3,5,2,4)$, unique; NN from $1$: $25$; $\LB=17$; $DT(I)=22$, $CH(I)=18$.

- Used in [Example «a small TSP instance»](../combinatorial-optimization-problems/combinatorial-optimization.md#box-9-ex-oc1-tsp), [Example «counting the tours»](../combinatorial-optimization-problems/combinatorial-optimization.md#box-15-ex-oc1-count-tsp), [Example «bounds on the small instances»](../combinatorial-optimization-problems/combinatorial-optimization.md#box-21-ex-oc1-bounds), [Example «TSP instance»](../combinatorial-optimization-problems/tsp.md#box-2-ex-tsp5), [Example «enumeration of the tours»](../combinatorial-optimization-problems/tsp.md#box-5-ex-tsp-enum), [Example «nearest neighbour from city $1$»](../combinatorial-optimization-problems/tsp.md#box-6-ex-tsp-nn), [Example «the bound on the reference instance»](../combinatorial-optimization-problems/tsp.md#box-8-ex-tsp-lb), [Example «the instance of the chapter»](../formulations/tsp-formulations.md#box-2-ex-TSP-inst), [Example «$\ILP_{\TSP}^{\mathrm{MTZ}}$ model»](../formulations/tsp-formulations.md#box-4-ex-TSP-ILP), [Example «$\ILP_{\TSP}^{\mathrm{DFJ}}$ model»](../formulations/tsp-formulations.md#box-6-ex-TSP-DFJ), [Example «comparing the relaxations»](../formulations/tsp-formulations.md#box-8-ex-TSP-LP), [Example «$DT$ on the TSP reference instance»](../approximation-algorithms/pcmax-tsp-coloring-approximation.md#box-6-ex-dt), [Example «$CH$ on the TSP reference instance»](../approximation-algorithms/pcmax-tsp-coloring-approximation.md#box-7-ex-ch), [Example «TSP reference instance»](../heuristic-algorithms/heuristics.md#box-4-ex-refTSP), [Example «Bounds and gaps on the reference instances»](../heuristic-algorithms/heuristics.md#box-7-ex-gaps), [Proposition «two-edge lower bound»](../heuristic-algorithms/heuristics.md#box-8-prop-twoedges), [How to evaluate a heuristic algorithm](../heuristic-algorithms/heuristics.md#sez-sec-evaluation), [Example «NN on the TSP reference instance»](../heuristic-algorithms/constructive-heuristics.md#box-11-ex-nn), [Example «Multi-start NN on the TSP reference instance»](../heuristic-algorithms/constructive-heuristics.md#box-12-ex-msnn), [Example «NI and CI on the TSP reference instance»](../heuristic-algorithms/constructive-heuristics.md#box-13-ex-ni), [Example «FI on the TSP reference instance»](../heuristic-algorithms/constructive-heuristics.md#box-14-ex-fi), [Example «$RNN_{0.3}$ on the TSP reference instance»](../heuristic-algorithms/constructive-heuristics.md#box-16-ex-rnn), [Example «PILOT-NN on the TSP reference instance»](../heuristic-algorithms/constructive-heuristics.md#box-18-ex-pilot), [What constructive heuristics give, and what they do not](../heuristic-algorithms/constructive-heuristics.md#sez-sec-WHAT), [Proposition «termination of local search»](../heuristic-algorithms/local-search.md#box-2-prop-termination), [Example «2OPT on the TSP reference instance»](../heuristic-algorithms/local-search.md#box-5-ex-twooptref), [Example «SA with the 2-opt neighbourhood on the TSP reference instance»](../heuristic-algorithms/metaheuristics.md#box-4-ex-saTSP), [Example «LNS on the TSP reference instance»](../heuristic-algorithms/metaheuristics.md#box-10-ex-lnsTSP), [The LP relaxations on the reference instances](../heuristic-algorithms/mip-heuristics-classical.md#2425-the-lp-relaxations-on-the-reference-instances), [What the MIP-based heuristics give](../heuristic-algorithms/mip-heuristics-classical.md#sez-sec-give).

### Instance TSP2 { #sez-sec-cat-ist-tsp2 }

$4$ cities, ground set of the edges.

$n=4$ cities, symmetric distances:

$$
\begin{array}{c|cccc}
\hline
d_{ij} & 1 & 2 & 3 & 4 \\
\hline
1 & - & 3 & 6 & 4 \\
2 & 3 & - & 5 & 2 \\
3 & 6 & 5 & - & 7 \\
4 & 4 & 2 & 7 & - \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{TSP2})=17$, attained by $\tilde\sigma=(1,3,2,4)$.

- Used in [Exercise 1.1](../exercises/combinatorial-optimization.md#esercizio-1-1).

### Instance TSP3 { #sez-sec-cat-ist-tsp3 }

$4$ cities, the tours of a small TSP.

$n=4$ cities, symmetric distances:

$$
\begin{array}{c|cccc}
\hline
d_{ij} & 1 & 2 & 3 & 4 \\
\hline
1 & - & 4 & 6 & 5 \\
2 & 4 & - & 3 & 7 \\
3 & 6 & 3 & - & 2 \\
4 & 5 & 7 & 2 & - \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{TSP3})=14$, attained by $(1,2,3,4)$.

- Used in [Exercise «The tours of a small TSP»](../combinatorial-optimization-problems/combinatorial-optimization.md#110-exercises).

### Instance TSP4 { #sez-sec-cat-ist-tsp4 }

$5$ cities, primal bound, dual bound and gap.

$n=5$ cities, symmetric distances:

$$
\begin{array}{c|ccccc}
\hline
d_{ij} & 1 & 2 & 3 & 4 & 5 \\
\hline
1 & - & 2 & 2 & 9 & 9 \\
2 & 2 & - & 4 & 5 & 9 \\
3 & 2 & 4 & - & 5 & 4 \\
4 & 9 & 5 & 5 & - & 8 \\
5 & 9 & 9 & 4 & 8 & - \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{TSP4})=21$, attained by $\tilde\sigma=(1,2,4,5,3)$; NN gives $27$, $\LB=19$.

- Used in [Exercise 1.5](../exercises/combinatorial-optimization.md#esercizio-1-5).

### Instance TSP5 { #sez-sec-cat-ist-tsp5 }

$6$ cities, tours and their length.

$n=6$ cities, symmetric distances:

$$
\begin{array}{c|cccccc}
\hline
d_{ij} & 1 & 2 & 3 & 4 & 5 & 6 \\
\hline
1 & - & 4 & 7 & 6 & 3 & 5 \\
2 & 4 & - & 3 & 5 & 6 & 8 \\
3 & 7 & 3 & - & 4 & 7 & 6 \\
4 & 6 & 5 & 4 & - & 3 & 4 \\
5 & 3 & 6 & 7 & 3 & - & 5 \\
6 & 5 & 8 & 6 & 4 & 5 & - \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{TSP5})=23$.

- Used in [Exercise 6.1](../exercises/tsp.md#esercizio-6-1).

### Instance TSP6 { #sez-sec-cat-ist-tsp6 }

$5$ cities with a far city $2$.

$n=5$ cities, symmetric distances:

$$
\begin{array}{c|ccccc}
\hline
d_{ij} & 1 & 2 & 3 & 4 & 5 \\
\hline
1 & - & 12 & 3 & 5 & 3 \\
2 & 12 & - & 9 & 7 & 10 \\
3 & 3 & 9 & - & 4 & 5 \\
4 & 5 & 7 & 4 & - & 4 \\
5 & 3 & 10 & 5 & 4 & - \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{TSP6})=26$, attained by $\tilde\sigma=(1,3,2,4,5)$, unique; NN from $1$ gives $33$.

- Used in [Exercise 6.2](../exercises/tsp.md#esercizio-6-2), [Exercise 6.3](../exercises/tsp.md#esercizio-6-3).

### Instance TSP7 { #sez-sec-cat-ist-tsp7 }

$4$ cities, not metric ($d_{13}=10$).

$n=4$ cities, symmetric distances:

$$
\begin{array}{c|cccc}
\hline
d_{ij} & 1 & 2 & 3 & 4 \\
\hline
1 & - & 4 & 10 & 3 \\
2 & 4 & - & 5 & 2 \\
3 & 10 & 5 & - & 6 \\
4 & 3 & 2 & 6 & - \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{TSP7})=18$, attained by $(1,2,3,4)$.

- Used in [Exercise 6.4](../exercises/tsp.md#esercizio-6-4).

### Instance TSP8 { #sez-sec-cat-ist-tsp8 }

$4$ cities, the metric version with $d_{13}=9$.

$n=4$ cities, symmetric distances:

$$
\begin{array}{c|cccc}
\hline
d_{ij} & 1 & 2 & 3 & 4 \\
\hline
1 & - & 4 & 9 & 3 \\
2 & 4 & - & 5 & 2 \\
3 & 9 & 5 & - & 6 \\
4 & 3 & 2 & 6 & - \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{TSP8})=18$, attained by $(1,2,3,4)$.

- Used in [Exercise 6.4](../exercises/tsp.md#esercizio-6-4).

### Instance TSP9 { #sez-sec-cat-ist-tsp9 }

$4$ cities for the MTZ and DFJ models.

$n=4$ cities, symmetric distances:

$$
\begin{array}{c|cccc}
\hline
d_{ij} & 1 & 2 & 3 & 4 \\
\hline
1 & - & 3 & 5 & 4 \\
2 & 3 & - & 4 & 6 \\
3 & 5 & 4 & - & 2 \\
4 & 4 & 6 & 2 & - \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{TSP9})=13$, attained by $(1,2,3,4)$.

- Used in [Exercise 13.1](../exercises/tsp-formulations.md#esercizio-13-1), [Exercise 13.2](../exercises/tsp-formulations.md#esercizio-13-2).

### Instance TSP10 { #sez-sec-cat-ist-tsp10 }

$5$ cities, feasible solutions of the TSP models.

$n=5$ cities, symmetric distances:

$$
\begin{array}{c|ccccc}
\hline
d_{ij} & 1 & 2 & 3 & 4 & 5 \\
\hline
1 & - & 2 & 3 & 3 & 7 \\
2 & 2 & - & 4 & 12 & 6 \\
3 & 3 & 4 & - & 6 & 11 \\
4 & 3 & 12 & 6 & - & 5 \\
5 & 7 & 6 & 11 & 5 & - \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{TSP10})=21$, attained by $(1,3,2,5,4)$.

- Used in [Exercise 13.3](../exercises/tsp-formulations.md#esercizio-13-3).

### Instance TSP11 { #sez-sec-cat-ist-tsp11 }

$5$ cities, comparing the relaxations.

$n=5$ cities, symmetric distances:

$$
\begin{array}{c|ccccc}
\hline
d_{ij} & 1 & 2 & 3 & 4 & 5 \\
\hline
1 & - & 5 & 12 & 2 & 9 \\
2 & 5 & - & 2 & 8 & 12 \\
3 & 12 & 2 & - & 9 & 9 \\
4 & 2 & 8 & 9 & - & 5 \\
5 & 9 & 12 & 9 & 5 & - \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{TSP11})=23$, attained by $(1,2,3,5,4)$; bounds $20$, $\frac{43}{2}$, $23$.

- Used in [Exercise 13.4](../exercises/tsp-formulations.md#esercizio-13-4).

### Instance TSP12 { #sez-sec-cat-ist-tsp12 }

$5$ cities, adding subtour elimination constraints.

$n=5$ cities, symmetric distances:

$$
\begin{array}{c|ccccc}
\hline
d_{ij} & 1 & 2 & 3 & 4 & 5 \\
\hline
1 & - & 4 & 10 & 2 & 8 \\
2 & 4 & - & 11 & 2 & 5 \\
3 & 10 & 11 & - & 4 & 2 \\
4 & 2 & 2 & 4 & - & 2 \\
5 & 8 & 5 & 2 & 2 & - \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{TSP12})=17$, attained by $(1,2,5,3,4)$; $z(\LP_{\TSP}^{\mathrm{MTZ}})=14$.

- Used in [Exercise 13.5](../exercises/tsp-formulations.md#esercizio-13-5), [Exercise 20.3](../exercises/heuristics.md#esercizio-20-3).

### Instance TSP13 { #sez-sec-cat-ist-tsp13 }

$6$ points in the plane, metric approximation 1.

$n=6$ cities, symmetric distances:

$$
\begin{array}{c|cccccc}
\hline
d_{ij} & 1 & 2 & 3 & 4 & 5 & 6 \\
\hline
1 & - & 4 & 4 & 6 & 3 & 6 \\
2 & 4 & - & 8 & 7 & 7 & 2 \\
3 & 4 & 8 & - & 5 & 5 & 9 \\
4 & 6 & 7 & 5 & - & 9 & 8 \\
5 & 3 & 7 & 5 & 9 & - & 9 \\
6 & 6 & 2 & 9 & 8 & 9 & - \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{TSP13})=27$, attained by $(1,2,6,4,3,5)$, unique; $DT(I)=32$, $CH(I)=27$.

- Used in [Exercise 28.4](../exercises/pcmax-tsp-coloring-approximation.md#esercizio-28-4).

### Instance TSP14 { #sez-sec-cat-ist-tsp14 }

$6$ points in the plane, metric approximation 2.

$n=6$ cities, symmetric distances:

$$
\begin{array}{c|cccccc}
\hline
d_{ij} & 1 & 2 & 3 & 4 & 5 & 6 \\
\hline
1 & - & 6 & 5 & 4 & 4 & 3 \\
2 & 6 & - & 3 & 9 & 6 & 4 \\
3 & 5 & 3 & - & 8 & 7 & 5 \\
4 & 4 & 9 & 8 & - & 6 & 6 \\
5 & 4 & 6 & 7 & 6 & - & 2 \\
6 & 3 & 4 & 5 & 6 & 2 & - \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{TSP14})=24$, attained by $(1,3,2,6,5,4)$, unique; $CH(I)=25$, $DT(I)=28$.

- Used in [Exercise 28.5](../exercises/pcmax-tsp-coloring-approximation.md#esercizio-28-5).

### Instance TSP15 { #sez-sec-cat-ist-tsp15 }

$I_{G_1}$: Hamiltonian graph $G_1$, non-edges at distance $11$.

$n=5$ cities, symmetric distances:

$$
\begin{array}{c|ccccc}
\hline
d_{ij} & 1 & 2 & 3 & 4 & 5 \\
\hline
1 & - & 1 & 1 & 11 & 1 \\
2 & 1 & - & 1 & 11 & 11 \\
3 & 1 & 1 & - & 1 & 11 \\
4 & 11 & 11 & 1 & - & 1 \\
5 & 1 & 11 & 11 & 1 & - \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{TSP15})=5$, attained by $(1,2,3,4,5)$.

- Used in [Exercise 28.6](../exercises/pcmax-tsp-coloring-approximation.md#esercizio-28-6).

### Instance TSP16 { #sez-sec-cat-ist-tsp16 }

$I_{G_2}$: $K_{2,3}$, non-edges at distance $11$ (not metric).

$n=5$ cities, symmetric distances:

$$
\begin{array}{c|ccccc}
\hline
d_{ij} & 1 & 2 & 3 & 4 & 5 \\
\hline
1 & - & 11 & 1 & 1 & 1 \\
2 & 11 & - & 1 & 1 & 1 \\
3 & 1 & 1 & - & 11 & 11 \\
4 & 1 & 1 & 11 & - & 11 \\
5 & 1 & 1 & 11 & 11 & - \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{TSP16})=15$, attained by $(1,3,2,4,5)$; tours of length $15$ or $35$ only.

- Used in [Exercise 28.6](../exercises/pcmax-tsp-coloring-approximation.md#esercizio-28-6).

### Instance TSP17 { #sez-sec-cat-ist-tsp17 }

Tight family of $DT$ for $n=5$ ($a=5$, $b=6$, $P=(3,5,2,4)$).

$n=5$ cities, symmetric distances:

$$
\begin{array}{c|ccccc}
\hline
d_{ij} & 1 & 2 & 3 & 4 & 5 \\
\hline
1 & - & 5 & 5 & 5 & 5 \\
2 & 5 & - & 10 & 6 & 6 \\
3 & 5 & 10 & - & 10 & 6 \\
4 & 5 & 6 & 10 & - & 10 \\
5 & 5 & 6 & 6 & 10 & - \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{TSP17})=28$, attained by $(1,3,5,2,4)$; $DT(I_5)=40$.

- Used in [Proposition (tightness of $DT$)](../approximation-algorithms/pcmax-tsp-coloring-approximation.md#box-19-prop-DTtight).

### Instance TSP18 { #sez-sec-cat-ist-tsp18 }

Tight family of $CH$ for $n=5$ (shortest paths in a strip of triangles, $a=5$, $b=6$).

$n=5$ cities, symmetric distances:

$$
\begin{array}{c|ccccc}
\hline
d_{ij} & 1 & 2 & 3 & 4 & 5 \\
\hline
1 & - & 5 & 6 & 11 & 12 \\
2 & 5 & - & 5 & 6 & 11 \\
3 & 6 & 5 & - & 5 & 6 \\
4 & 11 & 6 & 5 & - & 5 \\
5 & 12 & 11 & 6 & 5 & - \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{TSP18})=28$, attained by $CH(I_5)=32$.

- Used in [Proposition (tightness of $CH$)](../approximation-algorithms/pcmax-tsp-coloring-approximation.md#box-21-prop-CHtight).

### Instance TSP19 { #sez-sec-cat-ist-tsp19 }

$6$ cities in the plane (comparison of constructive heuristics).

$n=6$ cities, symmetric distances:

$$
\begin{array}{c|cccccc}
\hline
d_{ij} & 1 & 2 & 3 & 4 & 5 & 6 \\
\hline
1 & - & 5 & 4 & 4 & 5 & 2 \\
2 & 5 & - & 1 & 5 & 5 & 4 \\
3 & 4 & 1 & - & 4 & 5 & 3 \\
4 & 4 & 5 & 4 & - & 9 & 6 \\
5 & 5 & 5 & 5 & 9 & - & 3 \\
6 & 2 & 4 & 3 & 6 & 3 & - \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{TSP19})=19$, attained by (1,4,3,2,5,6).

- Used in [Example «A TSP instance with 6 cities»](../heuristic-algorithms/constructive-heuristics.md#box-15-ex-tsp6), [Example «$REG_2$ against CI on the 6-city instance»](../heuristic-algorithms/constructive-heuristics.md#box-17-ex-reg), [Example «PILOT-NN on the TSP reference instance»](../heuristic-algorithms/constructive-heuristics.md#box-18-ex-pilot).

### Instance TSP20 { #sez-sec-cat-ist-tsp20 }

$10$ cities in the plane (2-opt / Or-opt / VND / multi-start).

$n=10$ cities, symmetric distances:

$$
\begin{array}{c|cccccccccc}
\hline
d_{ij} & 1 & 2 & 3 & 4 & 5 & 6 & 7 & 8 & 9 & 10 \\
\hline
1 & - & 7 & 10 & 12 & 13 & 11 & 7 & 5 & 9 & 4 \\
2 & 7 & - & 4 & 7 & 10 & 11 & 7 & 4 & 5 & 3 \\
3 & 10 & 4 & - & 4 & 8 & 11 & 7 & 6 & 4 & 6 \\
4 & 12 & 7 & 4 & - & 4 & 8 & 6 & 7 & 3 & 9 \\
5 & 13 & 10 & 8 & 4 & - & 5 & 6 & 8 & 5 & 11 \\
6 & 11 & 11 & 11 & 8 & 5 & - & 4 & 8 & 7 & 11 \\
7 & 7 & 7 & 7 & 6 & 6 & 4 & - & 3 & 4 & 6 \\
8 & 5 & 4 & 6 & 7 & 8 & 8 & 3 & - & 4 & 3 \\
9 & 9 & 5 & 4 & 3 & 5 & 7 & 4 & 4 & - & 6 \\
10 & 4 & 3 & 6 & 9 & 11 & 11 & 6 & 3 & 6 & - \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{TSP20})=39$, attained by (1,10,2,3,9,4,5,6,7,8).

- Used in [Example «A TSP instance with 10 cities»](../heuristic-algorithms/local-search.md#box-6-ex-tsp10), [Example «OROPT from a 2-opt local optimum»](../heuristic-algorithms/local-search.md#box-7-ex-oropt), [Example «VND on the TSP with 2-opt and Or-opt»](../heuristic-algorithms/local-search.md#box-17-ex-vndtsp), [Example «MSLS on the TSP with 10 cities»](../heuristic-algorithms/local-search.md#box-18-ex-ms10).

### Instance TSP21 { #sez-sec-cat-ist-tsp21 }

$30$ random cities (TSP30, multi-start 2-opt).

$n=30$ cities, symmetric distances:

$$
\scriptstyle\begin{array}{c|cccccccccccc}
\hline
d_{ij} & 1 & 2 & 3 & 4 & 5 & 6 & 7 & 8 & 9 & 10 & 11 & 12 \\
\hline
1 & - & 118 & 79 & 72 & 83 & 69 & 17 & 113 & 85 & 70 & 100 & 102 \\
2 & 118 & - & 94 & 59 & 76 & 64 & 103 & 13 & 61 & 70 & 20 & 21 \\
3 & 79 & 94 & - & 93 & 117 & 35 & 79 & 99 & 33 & 27 & 87 & 93 \\
4 & 72 & 59 & 93 & - & 25 & 59 & 55 & 49 & 71 & 67 & 39 & 38 \\
5 & 83 & 76 & 117 & 25 & - & 84 & 66 & 64 & 96 & 91 & 58 & 55 \\
6 & 69 & 64 & 35 & 59 & 84 & - & 61 & 66 & 16 & 8 & 54 & 59 \\
7 & 17 & 103 & 79 & 55 & 66 & 61 & - & 98 & 77 & 64 & 85 & 87 \\
8 & 113 & 13 & 99 & 49 & 64 & 66 & 98 & - & 66 & 73 & 13 & 11 \\
9 & 85 & 61 & 33 & 71 & 96 & 16 & 77 & 66 & - & 15 & 56 & 62 \\
10 & 70 & 70 & 27 & 67 & 91 & 8 & 64 & 73 & 15 & - & 61 & 66 \\
11 & 100 & 20 & 87 & 39 & 58 & 54 & 85 & 13 & 56 & 61 & - & 6 \\
12 & 102 & 21 & 93 & 38 & 55 & 59 & 87 & 11 & 62 & 66 & 6 & - \\
13 & 85 & 91 & 128 & 38 & 15 & 96 & 68 & 79 & 108 & 103 & 73 & 70 \\
14 & 30 & 88 & 65 & 47 & 64 & 44 & 17 & 84 & 60 & 47 & 71 & 73 \\
15 & 77 & 47 & 52 & 48 & 73 & 18 & 66 & 48 & 23 & 25 & 36 & 41 \\
16 & 97 & 30 & 94 & 30 & 46 & 60 & 80 & 20 & 64 & 67 & 13 & 9 \\
17 & 91 & 92 & 133 & 42 & 17 & 101 & 75 & 80 & 113 & 108 & 75 & 71 \\
18 & 116 & 2 & 93 & 57 & 74 & 63 & 101 & 11 & 60 & 69 & 17 & 19 \\
19 & 84 & 86 & 125 & 34 & 10 & 92 & 68 & 74 & 104 & 99 & 68 & 65 \\
20 & 79 & 59 & 35 & 64 & 89 & 9 & 71 & 63 & 7 & 12 & 52 & 58 \\
21 & 66 & 60 & 87 & 7 & 30 & 54 & 49 & 52 & 66 & 61 & 41 & 40 \\
22 & 69 & 72 & 26 & 68 & 92 & 9 & 63 & 75 & 17 & 2 & 63 & 68 \\
23 & 105 & 28 & 102 & 36 & 49 & 68 & 89 & 16 & 72 & 76 & 16 & 11 \\
24 & 46 & 80 & 84 & 27 & 40 & 56 & 28 & 72 & 71 & 61 & 60 & 61 \\
25 & 62 & 58 & 75 & 18 & 42 & 42 & 46 & 52 & 54 & 49 & 39 & 40 \\
26 & 38 & 81 & 66 & 39 & 57 & 41 & 23 & 76 & 57 & 46 & 63 & 65 \\
27 & 25 & 94 & 75 & 47 & 60 & 54 & 9 & 89 & 70 & 57 & 76 & 77 \\
28 & 31 & 97 & 49 & 65 & 84 & 40 & 30 & 95 & 55 & 40 & 82 & 85 \\
29 & 27 & 105 & 52 & 72 & 90 & 47 & 31 & 103 & 61 & 46 & 90 & 93 \\
30 & 19 & 101 & 64 & 61 & 76 & 51 & 16 & 97 & 66 & 52 & 84 & 86 \\
\hline
\end{array}
$$

$$
\scriptstyle\begin{array}{c|cccccccccccc}
\hline
d_{ij} & 13 & 14 & 15 & 16 & 17 & 18 & 19 & 20 & 21 & 22 & 23 & 24 \\
\hline
1 & 85 & 30 & 77 & 97 & 91 & 116 & 84 & 79 & 66 & 69 & 105 & 46 \\
2 & 91 & 88 & 47 & 30 & 92 & 2 & 86 & 59 & 60 & 72 & 28 & 80 \\
3 & 128 & 65 & 52 & 94 & 133 & 93 & 125 & 35 & 87 & 26 & 102 & 84 \\
4 & 38 & 47 & 48 & 30 & 42 & 57 & 34 & 64 & 7 & 68 & 36 & 27 \\
5 & 15 & 64 & 73 & 46 & 17 & 74 & 10 & 89 & 30 & 92 & 49 & 40 \\
6 & 96 & 44 & 18 & 60 & 101 & 63 & 92 & 9 & 54 & 9 & 68 & 56 \\
7 & 68 & 17 & 66 & 80 & 75 & 101 & 68 & 71 & 49 & 63 & 89 & 28 \\
8 & 79 & 84 & 48 & 20 & 80 & 11 & 74 & 63 & 52 & 75 & 16 & 72 \\
9 & 108 & 60 & 23 & 64 & 113 & 60 & 104 & 7 & 66 & 17 & 72 & 71 \\
10 & 103 & 47 & 25 & 67 & 108 & 69 & 99 & 12 & 61 & 2 & 76 & 61 \\
11 & 73 & 71 & 36 & 13 & 75 & 17 & 68 & 52 & 41 & 63 & 16 & 60 \\
12 & 70 & 73 & 41 & 9 & 71 & 19 & 65 & 58 & 40 & 68 & 11 & 61 \\
13 & - & 70 & 86 & 61 & 6 & 89 & 5 & 102 & 43 & 103 & 63 & 46 \\
14 & 70 & - & 49 & 68 & 76 & 86 & 68 & 53 & 40 & 46 & 77 & 24 \\
15 & 86 & 49 & - & 42 & 90 & 45 & 82 & 17 & 43 & 27 & 50 & 52 \\
16 & 61 & 68 & 42 & - & 63 & 28 & 56 & 60 & 33 & 69 & 9 & 54 \\
17 & 6 & 76 & 90 & 63 & - & 90 & 8 & 106 & 47 & 108 & 64 & 52 \\
18 & 89 & 86 & 45 & 28 & 90 & - & 84 & 58 & 58 & 71 & 27 & 78 \\
19 & 5 & 68 & 82 & 56 & 8 & 84 & - & 97 & 39 & 100 & 58 & 44 \\
20 & 102 & 53 & 17 & 60 & 106 & 58 & 97 & - & 59 & 14 & 67 & 63 \\
21 & 43 & 40 & 43 & 33 & 47 & 58 & 39 & 59 & - & 62 & 40 & 21 \\
22 & 103 & 46 & 27 & 69 & 108 & 71 & 100 & 14 & 62 & - & 77 & 61 \\
23 & 63 & 77 & 50 & 9 & 64 & 27 & 58 & 67 & 40 & 77 & - & 62 \\
24 & 46 & 24 & 52 & 54 & 52 & 78 & 44 & 63 & 21 & 61 & 62 & - \\
25 & 54 & 34 & 33 & 34 & 59 & 56 & 50 & 47 & 12 & 50 & 43 & 22 \\
26 & 65 & 9 & 43 & 59 & 70 & 78 & 62 & 50 & 32 & 45 & 68 & 19 \\
27 & 65 & 10 & 57 & 71 & 71 & 92 & 63 & 63 & 41 & 57 & 80 & 21 \\
28 & 91 & 21 & 52 & 81 & 97 & 95 & 89 & 49 & 58 & 38 & 91 & 45 \\
29 & 95 & 26 & 60 & 89 & 101 & 103 & 94 & 56 & 65 & 44 & 98 & 50 \\
30 & 81 & 14 & 59 & 81 & 87 & 99 & 79 & 60 & 54 & 50 & 90 & 36 \\
\hline
\end{array}
$$

$$
\scriptstyle\begin{array}{c|cccccc}
\hline
d_{ij} & 25 & 26 & 27 & 28 & 29 & 30 \\
\hline
1 & 62 & 38 & 25 & 31 & 27 & 19 \\
2 & 58 & 81 & 94 & 97 & 105 & 101 \\
3 & 75 & 66 & 75 & 49 & 52 & 64 \\
4 & 18 & 39 & 47 & 65 & 72 & 61 \\
5 & 42 & 57 & 60 & 84 & 90 & 76 \\
6 & 42 & 41 & 54 & 40 & 47 & 51 \\
7 & 46 & 23 & 9 & 30 & 31 & 16 \\
8 & 52 & 76 & 89 & 95 & 103 & 97 \\
9 & 54 & 57 & 70 & 55 & 61 & 66 \\
10 & 49 & 46 & 57 & 40 & 46 & 52 \\
11 & 39 & 63 & 76 & 82 & 90 & 84 \\
12 & 40 & 65 & 77 & 85 & 93 & 86 \\
13 & 54 & 65 & 65 & 91 & 95 & 81 \\
14 & 34 & 9 & 10 & 21 & 26 & 14 \\
15 & 33 & 43 & 57 & 52 & 60 & 59 \\
16 & 34 & 59 & 71 & 81 & 89 & 81 \\
17 & 59 & 70 & 71 & 97 & 101 & 87 \\
18 & 56 & 78 & 92 & 95 & 103 & 99 \\
19 & 50 & 62 & 63 & 89 & 94 & 79 \\
20 & 47 & 50 & 63 & 49 & 56 & 60 \\
21 & 12 & 32 & 41 & 58 & 65 & 54 \\
22 & 50 & 45 & 57 & 38 & 44 & 50 \\
23 & 43 & 68 & 80 & 91 & 98 & 90 \\
24 & 22 & 19 & 21 & 45 & 50 & 36 \\
25 & - & 25 & 37 & 49 & 56 & 47 \\
26 & 25 & - & 14 & 27 & 33 & 22 \\
27 & 37 & 14 & - & 28 & 31 & 16 \\
28 & 49 & 27 & 28 & - & 8 & 15 \\
29 & 56 & 33 & 31 & 8 & - & 16 \\
30 & 47 & 22 & 16 & 15 & 16 & - \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{TSP21})=478$.

- Used in [Example «MSLS on the TSP with 30 cities»](../heuristic-algorithms/local-search.md#box-19-ex-ms30), [The limits of multi-start](../heuristic-algorithms/local-search.md#22121-the-limits-of-multi-start), [What local search gives, and what it does not](../heuristic-algorithms/local-search.md#22122-what-local-search-gives-and-what-it-does-not).

### Instance TSP22 { #sez-sec-cat-ist-tsp22 }

TSP20, medium instance of the metaheuristics chapter.

$n=20$ cities, symmetric distances:

$$
\scriptstyle\begin{array}{c|cccccccccccc}
\hline
d_{ij} & 1 & 2 & 3 & 4 & 5 & 6 & 7 & 8 & 9 & 10 & 11 & 12 \\
\hline
1 & - & 58 & 33 & 55 & 79 & 83 & 30 & 53 & 72 & 86 & 38 & 88 \\
2 & 58 & - & 33 & 14 & 28 & 37 & 29 & 18 & 35 & 28 & 42 & 37 \\
3 & 33 & 33 & - & 39 & 48 & 51 & 9 & 22 & 40 & 59 & 44 & 56 \\
4 & 55 & 14 & 39 & - & 42 & 51 & 32 & 31 & 49 & 37 & 30 & 50 \\
5 & 79 & 28 & 48 & 42 & - & 10 & 49 & 26 & 18 & 20 & 70 & 9 \\
6 & 83 & 37 & 51 & 51 & 10 & - & 54 & 31 & 14 & 29 & 78 & 9 \\
7 & 30 & 29 & 9 & 32 & 49 & 54 & - & 23 & 44 & 57 & 35 & 58 \\
8 & 53 & 18 & 22 & 31 & 26 & 31 & 23 & - & 22 & 38 & 50 & 35 \\
9 & 72 & 35 & 40 & 49 & 18 & 14 & 44 & 22 & - & 38 & 72 & 22 \\
10 & 86 & 28 & 59 & 37 & 20 & 29 & 57 & 38 & 38 & - & 67 & 23 \\
11 & 38 & 42 & 44 & 30 & 70 & 78 & 35 & 50 & 72 & 67 & - & 79 \\
12 & 88 & 37 & 56 & 50 & 9 & 9 & 58 & 35 & 22 & 23 & 79 & - \\
13 & 46 & 21 & 15 & 31 & 33 & 37 & 16 & 7 & 28 & 44 & 46 & 42 \\
14 & 92 & 36 & 63 & 46 & 17 & 22 & 62 & 41 & 34 & 11 & 77 & 14 \\
15 & 23 & 53 & 20 & 57 & 67 & 69 & 25 & 42 & 56 & 79 & 52 & 75 \\
16 & 21 & 45 & 34 & 38 & 71 & 77 & 26 & 47 & 69 & 73 & 17 & 80 \\
17 & 63 & 10 & 34 & 24 & 19 & 27 & 33 & 14 & 26 & 24 & 51 & 28 \\
18 & 36 & 27 & 6 & 33 & 43 & 47 & 7 & 17 & 37 & 53 & 41 & 52 \\
19 & 35 & 23 & 22 & 21 & 49 & 56 & 13 & 26 & 49 & 51 & 24 & 58 \\
20 & 93 & 36 & 65 & 45 & 22 & 29 & 64 & 44 & 40 & 8 & 75 & 21 \\
\hline
\end{array}
$$

$$
\scriptstyle\begin{array}{c|cccccccc}
\hline
d_{ij} & 13 & 14 & 15 & 16 & 17 & 18 & 19 & 20 \\
\hline
1 & 46 & 92 & 23 & 21 & 63 & 36 & 35 & 93 \\
2 & 21 & 36 & 53 & 45 & 10 & 27 & 23 & 36 \\
3 & 15 & 63 & 20 & 34 & 34 & 6 & 22 & 65 \\
4 & 31 & 46 & 57 & 38 & 24 & 33 & 21 & 45 \\
5 & 33 & 17 & 67 & 71 & 19 & 43 & 49 & 22 \\
6 & 37 & 22 & 69 & 77 & 27 & 47 & 56 & 29 \\
7 & 16 & 62 & 25 & 26 & 33 & 7 & 13 & 64 \\
8 & 7 & 41 & 42 & 47 & 14 & 17 & 26 & 44 \\
9 & 28 & 34 & 56 & 69 & 26 & 37 & 49 & 40 \\
10 & 44 & 11 & 79 & 73 & 24 & 53 & 51 & 8 \\
11 & 46 & 77 & 52 & 17 & 51 & 41 & 24 & 75 \\
12 & 42 & 14 & 75 & 80 & 28 & 52 & 58 & 21 \\
13 & - & 48 & 35 & 42 & 20 & 10 & 22 & 51 \\
14 & 48 & - & 82 & 81 & 29 & 57 & 59 & 7 \\
15 & 35 & 82 & - & 37 & 55 & 26 & 37 & 85 \\
16 & 42 & 81 & 37 & - & 53 & 33 & 22 & 81 \\
17 & 20 & 29 & 55 & 53 & - & 29 & 30 & 31 \\
18 & 10 & 57 & 26 & 33 & 29 & - & 17 & 60 \\
19 & 22 & 59 & 37 & 22 & 30 & 17 & - & 59 \\
20 & 51 & 7 & 85 & 81 & 31 & 60 & 59 & - \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{TSP22})=291$.

- Used in [Example «The medium TSP instance (TSP20)»](../heuristic-algorithms/metaheuristics.md#box-2-ex-tsp20), [An experiment on the medium TSP instance](../heuristic-algorithms/metaheuristics.md#sez-sec-sa-exp), [Tabu search for the TSP, and the effect of the tenure](../heuristic-algorithms/metaheuristics.md#sez-sec-ts-tsp), [Example «ILS on the medium TSP instance»](../heuristic-algorithms/metaheuristics.md#box-7-ex-ilsTSP), [GRASP for the TSP, and the effect of $\alpha$](../heuristic-algorithms/metaheuristics.md#sez-sec-grasp-exp), [Adaptive large neighbourhood search](../heuristic-algorithms/metaheuristics.md#sez-sec-alns), [The methods on the medium instances](../heuristic-algorithms/metaheuristics.md#23111-the-methods-on-the-medium-instances), [In summary](../heuristic-algorithms/metaheuristics.md#2313-in-summary).

### Instance TSP23 { #sez-sec-cat-ist-tsp23 }

$6$ cities in the plane, NN / multi-start exercise.

$n=6$ cities, symmetric distances:

$$
\begin{array}{c|cccccc}
\hline
d_{ij} & 1 & 2 & 3 & 4 & 5 & 6 \\
\hline
1 & - & 7 & 7 & 9 & 4 & 9 \\
2 & 7 & - & 2 & 5 & 6 & 4 \\
3 & 7 & 2 & - & 3 & 5 & 2 \\
4 & 9 & 5 & 3 & - & 5 & 1 \\
5 & 4 & 6 & 5 & 5 & - & 6 \\
6 & 9 & 4 & 2 & 1 & 6 & - \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{TSP23})=21$, attained by (2,3,6,4,5,1)  [= (1,2,3,6,4,5); stated as the multi-start NN tour, of length z=21].

- Used in [Exercise 21.10](../exercises/constructive-heuristics.md#esercizio-21-10).

### Instance TSP24 { #sez-sec-cat-ist-tsp24 }

$6$ cities in the plane, insertion heuristics exercise.

$n=6$ cities, symmetric distances:

$$
\begin{array}{c|cccccc}
\hline
d_{ij} & 1 & 2 & 3 & 4 & 5 & 6 \\
\hline
1 & - & 3 & 4 & 4 & 2 & 3 \\
2 & 3 & - & 7 & 6 & 4 & 2 \\
3 & 4 & 7 & - & 4 & 4 & 6 \\
4 & 4 & 6 & 4 & - & 6 & 4 \\
5 & 2 & 4 & 4 & 6 & - & 5 \\
6 & 3 & 2 & 6 & 4 & 5 & - \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{TSP24})=19$, attained by (1,2,6,4,3,5)  [the FI tour, of length z=19].

- Used in [Exercise 21.11](../exercises/constructive-heuristics.md#esercizio-21-11).

### Instance TSP25 { #sez-sec-cat-ist-tsp25 }

$5$ cities in the plane, randomized NN exercise.

$n=5$ cities, symmetric distances:

$$
\begin{array}{c|ccccc}
\hline
d_{ij} & 1 & 2 & 3 & 4 & 5 \\
\hline
1 & - & 3 & 4 & 3 & 6 \\
2 & 3 & - & 4 & 3 & 5 \\
3 & 4 & 4 & - & 1 & 3 \\
4 & 3 & 3 & 1 & - & 4 \\
5 & 6 & 5 & 3 & 4 & - \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{TSP25})=15$, attained by (1,4,3,5,2)  [second RNN run, of length z=15].

- Used in [Exercise 21.12](../exercises/constructive-heuristics.md#esercizio-21-12).

### Instance TSP26 { #sez-sec-cat-ist-tsp26 }

$6$ cities, 2-opt best improvement exercise.

$n=6$ cities, symmetric distances:

$$
\begin{array}{c|cccccc}
\hline
d_{ij} & 1 & 2 & 3 & 4 & 5 & 6 \\
\hline
1 & - & 7 & 6 & 3 & 4 & 6 \\
2 & 7 & - & 6 & 5 & 7 & 4 \\
3 & 6 & 6 & - & 5 & 5 & 2 \\
4 & 3 & 5 & 5 & - & 5 & 3 \\
5 & 4 & 7 & 5 & 5 & - & 4 \\
6 & 6 & 4 & 2 & 3 & 4 & - \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{TSP26})=23$, attained by (1,4,2,6,3,5)  [final 2-opt tour, stated optimal].

- Used in [Exercise 22.7](../exercises/local-search.md#esercizio-22-7).

### Instance TSP27 { #sez-sec-cat-ist-tsp27 }

$6$ cities, 2-opt first vs best improvement exercise.

$n=6$ cities, symmetric distances:

$$
\begin{array}{c|cccccc}
\hline
d_{ij} & 1 & 2 & 3 & 4 & 5 & 6 \\
\hline
1 & - & 8 & 5 & 6 & 5 & 6 \\
2 & 8 & - & 6 & 7 & 7 & 6 \\
3 & 5 & 6 & - & 4 & 8 & 2 \\
4 & 6 & 7 & 4 & - & 6 & 5 \\
5 & 5 & 7 & 8 & 6 & - & 7 \\
6 & 6 & 6 & 2 & 5 & 7 & - \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{TSP27})=30$, attained by (1,5,2,6,3,4)  [first-improvement local optimum, stated optimal].

- Used in [Exercise 22.8](../exercises/local-search.md#esercizio-22-8).

### Instance TSP28 { #sez-sec-cat-ist-tsp28 }

$6$ cities, 2-opt local optimum + Or-opt exercise.

$n=6$ cities, symmetric distances:

$$
\begin{array}{c|cccccc}
\hline
d_{ij} & 1 & 2 & 3 & 4 & 5 & 6 \\
\hline
1 & - & 7 & 8 & 8 & 9 & 9 \\
2 & 7 & - & 7 & 4 & 9 & 8 \\
3 & 8 & 7 & - & 7 & 3 & 9 \\
4 & 8 & 4 & 7 & - & 5 & 6 \\
5 & 9 & 9 & 3 & 5 & - & 7 \\
6 & 9 & 8 & 9 & 6 & 7 & - \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{TSP28})=35$, attained by (1,2,4,6,5,3)  [after the Or-opt move, stated optimal].

- Used in [Exercise 22.9](../exercises/local-search.md#esercizio-22-9).

### Instance TSP29 { #sez-sec-cat-ist-tsp29 }

$6$ cities, common instance of the metaheuristics exercises (SA, TS, ILS, GRASP, LNS).

$n=6$ cities, symmetric distances:

$$
\begin{array}{c|cccccc}
\hline
d_{ij} & 1 & 2 & 3 & 4 & 5 & 6 \\
\hline
1 & - & 5 & 1 & 7 & 7 & 4 \\
2 & 5 & - & 4 & 5 & 2 & 1 \\
3 & 1 & 4 & - & 6 & 6 & 4 \\
4 & 7 & 5 & 6 & - & 7 & 6 \\
5 & 7 & 2 & 6 & 7 & - & 2 \\
6 & 4 & 1 & 4 & 6 & 2 & - \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{TSP29})=20$, attained by (1,3,4,2,5,6).

- Used in [Exercise 23.1](../exercises/metaheuristics.md#esercizio-23-1), [Exercise 23.3](../exercises/metaheuristics.md#esercizio-23-3), [Exercise 23.6](../exercises/metaheuristics.md#esercizio-23-6), [Exercise 23.7](../exercises/metaheuristics.md#esercizio-23-7), [Exercise 23.8](../exercises/metaheuristics.md#esercizio-23-8), [Exercise 23.11](../exercises/metaheuristics.md#esercizio-23-11), [Exercise 23.15](../exercises/metaheuristics.md#esercizio-23-15).

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

- [Metric TSP approximation 1](../exercises/pcmax-tsp-coloring-approximation.md#esercizio-28-4)

- [Metric TSP approximation 2](../exercises/pcmax-tsp-coloring-approximation.md#esercizio-28-5)

- [Metric TSP approximation 3](../exercises/pcmax-tsp-coloring-approximation.md#esercizio-28-6)

- [A dual bound for the TSP (1)](../exercises/heuristics.md#esercizio-20-3)

- [TSP construction 1](../exercises/constructive-heuristics.md#esercizio-21-10)

- [TSP construction 2](../exercises/constructive-heuristics.md#esercizio-21-11)

- [TSP construction 3](../exercises/constructive-heuristics.md#esercizio-21-12)

- [Local search TSP 1](../exercises/local-search.md#esercizio-22-7)

- [Local search TSP 2](../exercises/local-search.md#esercizio-22-8)

- [Local search TSP 3](../exercises/local-search.md#esercizio-22-9)

- [Simulated annealing 1](../exercises/metaheuristics.md#esercizio-23-1)

- [Simulated annealing 3](../exercises/metaheuristics.md#esercizio-23-3)

- [Tabu search 3](../exercises/metaheuristics.md#esercizio-23-6)

- [Iterated local search and VNS 1](../exercises/metaheuristics.md#esercizio-23-7)

- [Iterated local search and VNS 2](../exercises/metaheuristics.md#esercizio-23-8)

- [GRASP 2](../exercises/metaheuristics.md#esercizio-23-11)

- [Large neighbourhood search 3](../exercises/metaheuristics.md#esercizio-23-15)

## Metric travelling salesman problem (metric TSP) { #sez-sec-cat-metrictsp }

<a id="box-2-def-cat-metrictsp"></a>

!!! definizione "Definition 2: Metric travelling salesman problem"

    A TSP instance is <strong>metric</strong> if its distances satisfy the <strong>triangle inequality</strong>

    $$
    d_{ij} \le d_{ik} + d_{kj}
    \qquad \text{for all distinct } i,j,k \in \Vcitta.
    $$

- Defined in [Chapter 6 «The travelling salesman problem»](../combinatorial-optimization-problems/tsp.md#box-3-defMetricTSP).

- The special case of the TSP with the triangle inequality, where approximation guarantees exist.

- <strong>Complexity</strong>: Approximable within $\frac32$ (Christofides, 1976; Serdyukov, 1978).

<strong>Where it is treated</strong>

- [Chapter 7 «The travelling salesman problem»](../combinatorial-optimization-problems/tsp.md#62-variants-metric-and-asymmetric-tsp): Definition; the reference instance is metric

- [Exercise 7.4](../exercises/tsp.md#esercizio-6-4): Checking the triangle inequality

- [Chapter 28 «$P\|C_{\max}$, metric TSP and the limits of approximation»](../approximation-algorithms/pcmax-tsp-coloring-approximation.md#box-2-def-metricTSP): Definition in the approximation chapter

- [Chapter 28 «$P\|C_{\max}$, metric TSP and the limits of approximation»](../approximation-algorithms/pcmax-tsp-coloring-approximation.md#box-18-prop-DT): $DT$ is a $2$-approximation, tight

- [Chapter 28 «$P\|C_{\max}$, metric TSP and the limits of approximation»](../approximation-algorithms/pcmax-tsp-coloring-approximation.md#box-20-prop-CH): $CH$ is a $\frac32$-approximation, tight

- [Exercise 28.4](../exercises/pcmax-tsp-coloring-approximation.md#esercizio-28-4):

- [Exercise 28.5](../exercises/pcmax-tsp-coloring-approximation.md#esercizio-28-5):

## Asymmetric travelling salesman problem (ATSP) { #sez-sec-cat-atsp }

<a id="box-3-def-cat-atsp"></a>

!!! definizione "Definition 3: Asymmetric travelling salesman problem"

    In the <strong>asymmetric travelling salesman problem</strong> (ATSP) the distances are not required to be symmetric: $d_{ij}$ may differ from $d_{ji}$. The definition of tour and of its length $L(\sigma)$ is unchanged, but a tour and the same tour travelled backwards are different solutions.

- Defined in [Chapter 6 «The travelling salesman problem»](../combinatorial-optimization-problems/tsp.md#62-variants-metric-and-asymmetric-tsp).

- The TSP is the special case of the ATSP in which $d_{ij}=d_{ji}$ for all $i,j$; an ATSP instance has $(n-1)!$ tours.

<strong>Where it is treated</strong>

- [Chapter 7 «The travelling salesman problem»](../combinatorial-optimization-problems/tsp.md#62-variants-metric-and-asymmetric-tsp): Definition

- [Chapter 7 «The travelling salesman problem»](../combinatorial-optimization-problems/tsp.md#box-4-prop-tsp-count): $(n-1)!$ tours

- [Exercise 7.5](../exercises/tsp.md#esercizio-6-5): An ATSP instance with $4$ cities

### Instance ATSP1 { #sez-sec-cat-ist-atsp1 }

$4$ cities with asymmetric distances.

$n=4$ cities, asymmetric distances:

$$
\begin{array}{c|cccc}
\hline
d_{ij} & 1 & 2 & 3 & 4 \\
\hline
1 & - & 3 & 8 & 5 \\
2 & 6 & - & 2 & 9 \\
3 & 4 & 7 & - & 3 \\
4 & 2 & 6 & 5 & - \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{ATSP1})=10$, attained by its reverse has length $23$.

- Used in [Exercise 6.5](../exercises/tsp.md#esercizio-6-5).

## Hamiltonian cycle problem (HCP) { #sez-sec-cat-hcp }

<a id="box-4-def-cat-hcp"></a>

!!! definizione "Definition 4: Hamiltonian cycle problem"

    The <strong>Hamiltonian cycle problem</strong> asks whether a graph $G=(V,E)$ has a cycle through all its vertices.

- Defined in [Chapter 28 «$P\|C_{\max}$, metric TSP and the limits of approximation»](../approximation-algorithms/pcmax-tsp-coloring-approximation.md#box-22-prop-TSPinapx).

- With $d_{ij}=1$ on the edges and a large distance elsewhere, $G$ is Hamiltonian if and only if $z(I_G)=n$: the TSP contains it.

- <strong>Complexity</strong>: NP-complete (Karp, 1972).

<strong>Where it is treated</strong>

- [Chapter 1 «Combinatorial optimization problems»](../combinatorial-optimization-problems/combinatorial-optimization.md#sez-sec-complexity): Why the TSP is strongly NP-hard

- [Chapter 28 «$P\|C_{\max}$, metric TSP and the limits of approximation»](../approximation-algorithms/pcmax-tsp-coloring-approximation.md#box-22-prop-TSPinapx): The reduction behind the inapproximability of the general TSP

- [Exercise 28.6](../exercises/pcmax-tsp-coloring-approximation.md#esercizio-28-6):
