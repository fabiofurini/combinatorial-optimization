---
title: "The maximum clique problem"
---

# The maximum clique problem

<div class="info-capitolo" markdown>

**Selected problems** · [:material-view-list: Catalogue of combinatorial problems](../catalogue/index.md)

</div>

<a id="sec:cat-mcp"></a>

<a id="sec:cat-scelto-maximum-clique"></a>

!!! chiave ""

    What the course does on the maximum clique problem (MCP): a summary.

## Definition { #sez-sec-cat-mcp-definition }

<a id="box-1-def-cat-mcp"></a>

!!! definizione "Definition 1: The maximum clique problem"

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

    the <strong>Maximum Clique Problem</strong> (MCP) asks to find a clique $K \subseteq V$ of $G$ whose number of vertices is maximum. Its optimal value is the clique number $\omega(G)$.

Assumptions and full definition: [Catalogue of combinatorial problems](../catalogue/maximum-clique-problem.md).

- NP-hard: deciding whether a clique with $k$ vertices exists is one of the $21$ NP-complete problems of Karp ([Ch. 5](../combinatorial-optimization-problems/clique/index.md)).

- Upper bounds: degree $\Delta+1$, edges, degree count $k^{\max}$ and coloring $\chi(G)$ ([Ch. 5](../combinatorial-optimization-problems/clique/index.md#box-8-mcpP-obs-degree)).

- A first clique by hand: start from a vertex of maximum degree and add vertices adjacent to all those chosen ([Ch. 5](../combinatorial-optimization-problems/clique/index.md#box-6-mcpP-ex1)).

## Formulations { #sez-sec-cat-mcp-formulations }

- The model $\ILP_{\MCP}$ has one binary variable per vertex and one constraint $x_u+x_v\le1$ per non-edge ([Ch. 12](../formulations/clique-formulations.md)).

- $x_v=\frac12$ for all vertices is feasible, so $z(\LP_{\MCP})\ge n/2$: the LP bound can be arbitrarily weak ([Ch. 12](../formulations/clique-formulations.md)).

- Stable set inequalities and odd cycle inequalities strengthen the model ([Ch. 12](../formulations/clique-formulations.md)).

## Approximation { #sez-sec-cat-mcp-approximation }

- Not approximable: for every $\varepsilon>0$ no polynomial algorithm guarantees a ratio within $n^{1-\varepsilon}$, unless $P=NP$ (Zuckerman).

## Exercises { #sez-sec-cat-mcp-es }

- [Ch. 4 — Vertex coloring](../exercises/coloring.md) (4 exercises).

## Variants { #sez-sec-cat-mcp-var }

- [Maximum stable set problem (MSSP)](../catalogue/maximum-stable-set-problem.md): A subset is a clique of $G$ if and only if it is a stable set of $\overline{G}$: $\omega(G) = \alpha(\overline{G})$ and $\alpha(G) = \omega(\overline{G})$.

- [Vertex-weighted maximum clique problem (VWMCP)](../catalogue/vertex-weighted-maximum-clique-problem.md): With all the weights $w_v=1$ it is the MCP.

- [Edge-weighted maximum clique problem (EWMCP)](../catalogue/edge-weighted-maximum-clique-problem.md): With $r_{uv}=1$ it is again the MCP, since $r(K)=\binom{|K|}{2}$ grows with $|K|$.
