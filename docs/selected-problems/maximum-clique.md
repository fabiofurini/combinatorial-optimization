---
title: "The maximum clique problem"
---

# The maximum clique problem

<div class="info-capitolo" markdown>

**Selected problems** · [:material-view-list: Catalogue of combinatorial problems](../catalogue/index.md)

</div>

<a id="sec:cat-mcp"></a>

<a id="sec:cat-pagina-central-problems"></a>

!!! chiave ""

    Find a largest set of pairwise adjacent vertices of a graph.

!!! nota "Where it is treated"

    - [Chapter 4 «Vertex coloring»](../combinatorial-optimization-problems/coloring.md#41-a-short-review-of-graphs): Cliques, stable sets, $\omega(G)$ and $\alpha(G)$, the clique bound of the VCP

    - [Chapter 5 «The maximum clique problem»](../combinatorial-optimization-problems/clique/index.md): Definition, complement graph, counting, a first clique by hand, four upper bounds, weighted variants, complexity

    - [Chapter 12 «Formulations of the maximum clique problem»](../formulations/clique-formulations.md): The $ILP_{MCP}$ model and its LP relaxations

## Definition { #sez-sec-cat-mcp-def }

- Definition and assumptions: [Catalogue of combinatorial problems](../catalogue/central-problems.md#sez-sec-cat-def-mcp).

- A clique is a set of pairwise adjacent vertices: groups of pairwise connected members of a social network, of pairwise compatible tasks or exams, common substructures of two molecules.

- A feasible solution is a clique $K\subseteq V$, the candidate solutions are the $2^n$ subsets of $V$, and the optimal value is the clique number $\omega(G)$.

- A clique of $G$ is a stable set of the complement graph $\overline{G}$, and in a coloring the vertices of a clique need pairwise different colors.

## Bounds and complexity { #sez-sec-cat-mcp-prop }

- <strong>Complexity</strong>: NP-hard: the decision version (is there a clique with $k$ vertices?) is among the $21$ NP-complete problems of Karp (1972); for every $\varepsilon>0$ no polynomial algorithm guarantees $\omega(G)/n^{1-\varepsilon}$ vertices unless NP problems are solvable in randomized polynomial time (Håstad, 1999).

- $\omega(G) \le \Delta + 1$ (degree bound) ([Chapter 5 «The maximum clique problem»](../combinatorial-optimization-problems/clique/index.md#box-8-mcpP-obs-degree)).

- $\omega(G)\,(\omega(G)-1)/2 \le m$ (edge bound) ([Chapter 5 «The maximum clique problem»](../combinatorial-optimization-problems/clique/index.md#box-9-mcpP-obs-edge)).

- $\omega(G) \le k^{\max}$, the largest $k$ such that at least $k$ vertices have degree at least $k-1$ (degree count bound) ([Chapter 5 «The maximum clique problem»](../combinatorial-optimization-problems/clique/index.md#box-10-mcpP-obs-count)).

- $\omega(G) \le \chi(G)$: the number of colors of any feasible coloring is an upper bound (coloring bound) ([Chapter 5 «The maximum clique problem»](../combinatorial-optimization-problems/clique/index.md#box-11-mcpP-obs-coloring)).

- $z(LP_{MCP})\ge n/2$: the LP bound can be arbitrarily weak ([Chapter 12 «Formulations of the maximum clique problem»](../formulations/clique-formulations.md)).

- For a fixed $k$, the cliques with $k$ vertices are checked in $O(n^k\, k^2)$ steps, while listing all the subsets takes $O(2^n\, n^2)$.

- A maximal clique is not necessarily maximum: in the reference instance $\{4,5\}$ is maximal but not maximum.

- The coloring bound is not always tight: on the cycle with $5$ vertices $\omega(G)=2$ and $\chi(G)=3$, and on the wheel $W_5$ $\omega=3<\chi=4$ ([Exercise 4.4](../exercises/coloring.md#esercizio-4-4)).

## Formulation { #sez-sec-cat-mcp-formulation }

- <strong>$ILP_{MCP}$ model</strong> ([Chapter 12 «Formulations of the maximum clique problem»](../formulations/clique-formulations.md)):

\begin{align*}
\max\ & \sum_{v\in V}x_v \\
& x_u+x_v \le 1 && \forall\{u,v\}\in\overline{E} \\
& x_v \in \{0,1\} && \forall v\in V
\end{align*}

- The $ILP_{MCP}$ model has one binary variable $x_v$ per vertex and one constraint $x_u+x_v\le1$ per non-edge $\{u,v\}\in\overline{E}$ ([Chapter 12 «Formulations of the maximum clique problem»](../formulations/clique-formulations.md)).

- Setting $x_v=\frac12$ for every vertex is feasible for $LP_{MCP}$, so $z(LP_{MCP})\ge n/2$ and the ratio $z(LP_{MCP})/z(ILP_{MCP})$ is not bounded above over all graphs ([Chapter 12 «Formulations of the maximum clique problem»](../formulations/clique-formulations.md)).

- For a stable set $S$ of $G$, $\sum_{v\in S}x_v\le1$ is a valid inequality, and so is $\sum_{v\in C}x_v\le(|C|-1)/2$ for a chordless odd cycle $C$ of $\overline{G}$ ([Chapter 12 «Formulations of the maximum clique problem»](../formulations/clique-formulations.md)).

## Constructive heuristics { #sez-sec-cat-mcp-constructiveheuristics }

- A first clique by hand: start from a vertex of maximum degree and add, one at a time, a vertex adjacent to all the vertices already chosen; on the reference instance it gives $K=\{1,2,3\}$ and $\LB=3$ ([Chapter 5 «The maximum clique problem»](../combinatorial-optimization-problems/clique/index.md#box-6-mcpP-ex1)).

## Approximation { #sez-sec-cat-mcp-approximation }

- The MCP is not approximable: for every $\varepsilon>0$ no polynomial algorithm guarantees a ratio within $n^{1-\varepsilon}$, unless NP problems are solvable in randomized polynomial time (Håstad), or unless $P=NP$ (Zuckerman).

## Exercises { #sez-sec-cat-mcp-es }

- [Checking a coloring (VCP)](../exercises/coloring.md#esercizio-4-1)

- [Neighbourhoods, cliques and stable sets (VCP)](../exercises/coloring.md#esercizio-4-2)

- [The stable set bound on a complement graph (VCP)](../exercises/coloring.md#esercizio-4-3)

- [When both bounds are not tight (VCP)](../exercises/coloring.md#esercizio-4-4)

## Variants { #sez-sec-cat-mcp-var }

- [Maximum stable set problem (MSSP)](../catalogue/graphs.md#sez-sec-cat-def-mssp): A subset is a clique of $G$ if and only if it is a stable set of $\overline{G}$: $\omega(G) = \alpha(\overline{G})$ and $\alpha(G) = \omega(\overline{G})$.

- [Vertex-weighted maximum clique problem (VWMCP)](../catalogue/graphs.md#sez-sec-cat-def-vwmcp): With all the weights $w_v=1$ it is the MCP.

- [Edge-weighted maximum clique problem (EWMCP)](../catalogue/graphs.md#sez-sec-cat-def-ewmcp): With $r_{uv}=1$ it is again the MCP, since $r(K)=\binom{|K|}{2}$ grows with $|K|$.
