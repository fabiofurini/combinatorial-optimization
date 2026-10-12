---
title: "The vertex coloring problem (VCP)"
---

# The vertex coloring problem (VCP)

<div class="info-capitolo" markdown>

[:material-view-list: **Catalogue of combinatorial problems**](index.md) · [:material-file-pdf-box: Catalogue (PDF)](../pdf/combinatorial-problem-catalogue.pdf)

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

- Defined in [Chapter 4 «Vertex coloring»](../combinatorial-optimization-problems/coloring.md#box-3-defVCP).

- [The course on this problem $\rightarrow$](../selected-problems/vertex-coloring.md).
