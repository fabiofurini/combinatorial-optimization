---
title: "The vertex coloring problem"
---

# The vertex coloring problem

<div class="info-capitolo" markdown>

**Selected problems** · [:material-view-list: Catalogue of combinatorial problems](../catalogue/index.md)

</div>

<a id="sec:cat-vcp"></a>

<a id="sec:cat-scelto-vertex-coloring"></a>

!!! chiave ""

    What the course does on the vertex coloring problem (VCP): a summary.

## Definition { #sez-sec-cat-vcp-definition }

<a id="box-1-def-cat-vcp"></a>

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

Assumptions and full definition: [Catalogue of combinatorial problems](../catalogue/vertex-coloring-problem.md).

- Strongly NP-hard: deciding whether $\chi(G)\le 3$ is NP-complete ([Ch. 1](../combinatorial-optimization-problems/combinatorial-optimization/a-glimpse-of-computational-complexity.md#box-12-def-pseudo)).

- Clique bound $\omega(G) \le \chi(G)$ and stable set bound $\lceil n/\alpha(G) \rceil \le \chi(G)$ ([Ch. 4](../combinatorial-optimization-problems/coloring.md#box-6-obs-clique-bound)).

- The bounds can miss $\chi(G)$: on the Petersen graph $\omega(G)=2<\chi(G)=3$ ([Ch. 4](../combinatorial-optimization-problems/coloring.md#box-7-obs-stable-bound)).

- Brooks: $\chi(G)\le\Delta$ for a connected graph that is neither complete nor an odd cycle ([Ch. 4](../combinatorial-optimization-problems/coloring.md#43-remarks)).

## Formulations { #sez-sec-cat-vcp-formulations }

- The model $\ILP_{\VCP}$ has $kn$ variables $x_{vc}$ and $k$ variables $y_c$, and $k!$ equivalent copies of every coloring ([Ch. 11](../formulations/coloring-formulations.md#112-an-ilp-model-for-the-vertex-coloring-problem)).

- Both LP relaxations have value $2$ for every graph with an edge ([Ch. 11](../formulations/coloring-formulations.md#box-11-cor_lp_vcp_value)).

- On the complete graph with $n$ vertices the gap is $n-2$ and the ratio $\frac{2}{n}$ tends to $0$ ([Ch. 11](../formulations/coloring-formulations.md#115-typical-mistakes)).

## Heuristics { #sez-sec-cat-vcp-heuristics }

- The greedy coloring uses at most $\Delta(G)+1$ colors, and the order of the vertices matters ([Ch. 24](../heuristic-algorithms/constructive-heuristics/vertex-coloring-greedy-and-dsatur.md#sez-sec-VCPgreedy)).

- $DSATUR$ colors first the vertex that sees the most colors; it is exact on bipartite graphs ([Ch. 24](../heuristic-algorithms/constructive-heuristics/vertex-coloring-greedy-and-dsatur.md#sez-sec-VCPgreedy)).

## Approximation { #sez-sec-cat-vcp-approximation }

- Not approximable: no polynomial algorithm guarantees a ratio below $\frac43$ unless $P=NP$, and not even $n^{1-\varepsilon}$ (Zuckerman).

## Exercises { #sez-sec-cat-vcp-es }

- [Ch. 4 — Vertex coloring](../exercises/coloring.md) (5 exercises).

- [Ch. 11 — Formulations of the vertex coloring problem](../exercises/coloring-formulations.md) (5 exercises).
