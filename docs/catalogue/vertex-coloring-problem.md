---
title: "The vertex coloring problem (VCP)"
---

# The vertex coloring problem (VCP)

<div class="info-capitolo" markdown>

[:material-view-list: **Catalogue of combinatorial problems**](index.md) · [:material-folder-outline: Coloring problems](coloring-problems.md) · [:material-file-pdf-box: Catalogue (PDF)](../pdf/combinatorial-problem-catalogue.pdf)

</div>

<a id="sec:cat-pagina-vertex-coloring-problem"></a>

<a id="box-1-def-catdef-vcp"></a>

!!! definizione "Definition 1: The vertex coloring problem"

    Given:

    1. a simple <em>graph</em> $G = (V,E)$, where

        $$
        V = \{1,2,\dots,n\}
        $$

        is the set of $n$ <em>vertices</em>, and

        $$
        E \subseteq \big\{\, \{u,v\} : u,v \in V,~ u \neq v \,\big\}
        $$

        is the set of $m$ <em>edges</em>,

    the <strong>Vertex Coloring Problem</strong> (VCP) asks to decide how to assign a color to each vertex, so that no two adjacent vertices share the same color, and the total number of colors used is minimized.

<strong>Assumptions</strong>

- We make the following assumptions:

    1. The graph has no isolated vertices. An isolated vertex can receive any color used by the rest of the graph; if the graph has no edges, the optimal value is one. Formally:

        $$
        \deg(v) \ge 1, \qquad \forall\, v \in V.
        $$

    2. No vertex has its neighbourhood contained in the neighbourhood of another vertex. Formally:

        $$
        N(u) \not\subseteq N(v), \qquad \forall\, u,v \in V,~ u \neq v.
        $$

- The second assumption can be made without loss of generality, because:

    1. if $N(u) \subseteq N(v)$, the vertex $u$ can be removed without changing the chromatic number: every coloring of $G \setminus \{u\}$ extends to $u$ with the color of $v$;

    2. the vertices $u$ and $v$ are not adjacent: otherwise $v \in N(u) \subseteq N(v)$, which is impossible in a simple graph, so $u$ and $v$ can share a color.

## What the course does on this problem { #sez-sec-cat-vcp-vert }

<div class="tabella" markdown="0"><table>
<tr>
<th><strong>Technique</strong></th>
<th><strong>Where</strong></th>
</tr>
<tr>
<td><strong>Definition</strong></td>
<td><a href="https://fabiofurini.github.io/combinatorial-optimization/combinatorial-optimization-problems/coloring/the-vertex-coloring-problem/#box-3-defVCP">Ch. 4 «Coloring problems»</a></td>
</tr>
<tr>
<td><strong>Formulations</strong></td>
<td><a href="https://fabiofurini.github.io/combinatorial-optimization/formulations/coloring-formulations/">Ch. 11 «Formulations of coloring problems»</a></td>
</tr>
<tr>
<td><strong>Heuristics</strong></td>
<td><a href="https://fabiofurini.github.io/combinatorial-optimization/heuristic-algorithms/constructive-heuristics/vertex-coloring-greedy-and-dsatur/#sez-sec-VCPgreedy">Ch. 30 «Constructive heuristics»</a></td>
</tr>
<tr>
<td><strong>Limits of approximation</strong></td>
<td><a href="https://fabiofurini.github.io/combinatorial-optimization/approximation-algorithms/coloring-inapproximability/">Ch. 37 «Vertex coloring: limits of approximation»</a></td>
</tr>
<tr>
<td><strong>Ad hoc algorithms</strong></td>
<td><a href="https://fabiofurini.github.io/combinatorial-optimization/specialized-algorithms/dsatur-branch-and-bound/">Ch. 42 «Vertex coloring: the DSATUR branch-and-bound»</a></td>
</tr>
<tr>
<td><strong>Exercises</strong></td>
<td><a href="https://fabiofurini.github.io/combinatorial-optimization/exercises/coloring/">Ch. 4 (5 exercises)</a>; <a href="https://fabiofurini.github.io/combinatorial-optimization/exercises/coloring-formulations/">Ch. 11 (5 exercises)</a>; <a href="https://fabiofurini.github.io/combinatorial-optimization/exercises/constructive-heuristics/">Ch. 30 (3 exercises)</a>; <a href="https://fabiofurini.github.io/combinatorial-optimization/exercises/coloring-inapproximability/">Ch. 37 (5 exercises)</a>; <a href="https://fabiofurini.github.io/combinatorial-optimization/exercises/dsatur-branch-and-bound/">Ch. 42 (5 exercises)</a></td>
</tr>
<tr>
<td><strong>Reference instances</strong></td>
<td><a href="https://fabiofurini.github.io/combinatorial-optimization/combinatorial-optimization-problems/coloring/the-vertex-coloring-problem/#box-5-ex-vcp2">Ch. 4</a> (<span class="arithmatex">\(z=3\)</span>)</td>
</tr>
</table></div>

### Properties { #sez-sec-cat-vcp-properties }

- Strongly NP-hard: deciding whether $\chi(G)\le 3$ is NP-complete ([Ch. 1](../combinatorial-optimization-problems/combinatorial-optimization/a-glimpse-of-computational-complexity.md#box-12-def-pseudo)).

- Clique bound $\omega(G) \le \chi(G)$ and stable set bound $\lceil n/\alpha(G) \rceil \le \chi(G)$ ([Ch. 4](../combinatorial-optimization-problems/coloring/the-vertex-coloring-problem.md#box-6-obs-clique-bound)).

- The bounds can miss $\chi(G)$: on the Petersen graph $\omega(G)=2<\chi(G)=3$ ([Ch. 4](../combinatorial-optimization-problems/coloring/the-vertex-coloring-problem.md#box-7-obs-stable-bound)).

- Brooks: $\chi(G)\le\Delta$ for a connected graph that is neither complete nor an odd cycle ([Ch. 4](../combinatorial-optimization-problems/coloring/the-vertex-coloring-problem.md#43-remarks)).

### Formulations { #sez-sec-cat-vcp-formulations }

- The model $\ILP_{\VCP}$ has $kn$ variables $x_{vc}$ and $k$ variables $y_c$, and $k!$ equivalent copies of every coloring ([Ch. 11](../formulations/coloring-formulations/an-ilp-model-for-the-vertex-coloring-problem.md#sez-sec-colf-VCP)).

- Both LP relaxations have value $2$ for every graph with an edge ([Ch. 11](../formulations/coloring-formulations/an-ilp-model-for-the-vertex-coloring-problem.md#box-10-cor_lp_vcp_value)).

- On the complete graph with $n$ vertices the gap is $n-2$ and the ratio $\frac{2}{n}$ tends to $0$ ([Ch. 11](../formulations/coloring-formulations/an-ilp-model-for-the-vertex-coloring-problem.md#115-typical-mistakes)).

### Heuristics { #sez-sec-cat-vcp-heuristics }

- The greedy coloring uses at most $\Delta(G)+1$ colors, and the order of the vertices matters ([Ch. 30](../heuristic-algorithms/constructive-heuristics/vertex-coloring-greedy-and-dsatur.md#sez-sec-VCPgreedy)).

- $DSATUR$ colors first the vertex that sees the most colors; it is exact on bipartite graphs ([Ch. 30](../heuristic-algorithms/constructive-heuristics/vertex-coloring-greedy-and-dsatur.md#sez-sec-VCPgreedy)).

### Approximation { #sez-sec-cat-vcp-approximation }

- Not approximable: no polynomial algorithm guarantees a ratio below $\frac43$ unless $P=NP$, and not even $n^{1-\varepsilon}$ (Zuckerman) ([Ch. 37](../approximation-algorithms/coloring-inapproximability.md#box-1-vci-thm43)).

- Special cases: bipartite and interval graphs exactly, planar graphs within $2$ colors of the optimum ([Ch. 37](../approximation-algorithms/coloring-inapproximability.md#box-9-vci-corPL)).

### Ad hoc algorithms { #sez-sec-cat-vcp-adhocalgorithms }

- The DSATUR branch-and-bound branches on the most saturated vertex, with one child per feasible color and one new color, and prunes a node when $q(k)\ge\UB$ ([Ch. 42](../specialized-algorithms/dsatur-branch-and-bound.md#box-1-def-VCPnode)).

- On the Petersen graph it proves $\chi(G)=3$ with $6$ nodes ([Ch. 42](../specialized-algorithms/dsatur-branch-and-bound.md#box-3-ex-petersenBB)).
