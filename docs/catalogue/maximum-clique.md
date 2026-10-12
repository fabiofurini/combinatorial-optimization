---
title: "The maximum clique problem"
---

# The maximum clique problem

<div class="info-capitolo" markdown>

**Catalogue of combinatorial problems** · [:material-file-pdf-box: Catalogue of problems (PDF)](../pdf/combinatorial-problem-catalogue.pdf)

</div>

<a id="sec:cat-mcp"></a>

<a id="sec:cat-pagina-maximum-clique"></a>

!!! chiave ""

    Find a largest set of pairwise adjacent vertices of a graph.

!!! nota "Where it is treated"

    - [Chapter 4 «Vertex coloring»](../combinatorial-optimization-problems/coloring.md#41-a-short-review-of-graphs): Cliques, stable sets, $\omega(G)$ and $\alpha(G)$, the clique bound of the VCP

    - [Chapter 5 «The maximum clique problem»](../combinatorial-optimization-problems/clique.md): Definition, complement graph, counting, a first clique by hand, four upper bounds, weighted variants, complexity

    - [Chapter 12 «Formulations of the maximum clique problem»](../formulations/clique-formulations.md): The $ILP_{MCP}$ model and its LP relaxations

## Definition { #sez-sec-cat-mcp-def }

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

- Defined in [Chapter 5 «The maximum clique problem»](../combinatorial-optimization-problems/clique.md#box-2-mcpP-def-MCP).

- A clique is a set of pairwise adjacent vertices: groups of pairwise connected members of a social network, of pairwise compatible tasks or exams, common substructures of two molecules.

- A feasible solution is a clique $K\subseteq V$, the candidate solutions are the $2^n$ subsets of $V$, and the optimal value is the clique number $\omega(G)$.

- A clique of $G$ is a stable set of the complement graph $\overline{G}$, and in a coloring the vertices of a clique need pairwise different colors.

## Bounds and complexity { #sez-sec-cat-mcp-prop }

- <strong>Complexity</strong>: NP-hard: the decision version (is there a clique with $k$ vertices?) is among the $21$ NP-complete problems of Karp (1972); for every $\varepsilon>0$ no polynomial algorithm guarantees $\omega(G)/n^{1-\varepsilon}$ vertices unless NP problems are solvable in randomized polynomial time (Håstad, 1999).

- $\omega(G) \le \Delta + 1$ (degree bound) ([Chapter 5 «The maximum clique problem»](../combinatorial-optimization-problems/clique.md#box-8-mcpP-obs-degree)).

- $\omega(G)\,(\omega(G)-1)/2 \le m$ (edge bound) ([Chapter 5 «The maximum clique problem»](../combinatorial-optimization-problems/clique.md#box-9-mcpP-obs-edge)).

- $\omega(G) \le k^{\max}$, the largest $k$ such that at least $k$ vertices have degree at least $k-1$ (degree count bound) ([Chapter 5 «The maximum clique problem»](../combinatorial-optimization-problems/clique.md#box-10-mcpP-obs-count)).

- $\omega(G) \le \chi(G)$: the number of colors of any feasible coloring is an upper bound (coloring bound) ([Chapter 5 «The maximum clique problem»](../combinatorial-optimization-problems/clique.md#box-11-mcpP-obs-coloring)).

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

- A first clique by hand: start from a vertex of maximum degree and add, one at a time, a vertex adjacent to all the vertices already chosen; on the reference instance it gives $K=\{1,2,3\}$ and $\LB=3$ ([Chapter 5 «The maximum clique problem»](../combinatorial-optimization-problems/clique.md#box-6-mcpP-ex1)).

## Instances { #sez-sec-cat-mcp-ist }

### Instance MCP1 { #sez-sec-cat-ist-mcp1 }

A cycle with a chord, reference instance of the clique chapter, $z=\omega(G)$.

Graph with $n=7$ vertices $V=\{1,\dots,7\}$ and $8$ edges:

$$
E=\big\{\{1,2\},\{1,3\},\{1,7\},\{2,3\},\{3,4\},\{4,5\},\{5,6\},\{6,7\}\big\}.
$$

- Optimal value $z(\mathrm{MCP1})=3$, attained by $\tilde K=\{1,2,3\}$, unique; $17$ of the $128$ subsets are cliques; bounds $\Delta+1=4$, edge $4$, $k^{\max}=3$, coloring $3$.

- Used in [Example «MCP instance: a cycle with a chord»](../combinatorial-optimization-problems/clique.md#box-6-mcpP-ex1).

### Instance MCP2 { #sez-sec-cat-ist-mcp2 }

A dense graph with $8$ vertices (all pairs except the opposite ones), $z=\omega(G)$.

Graph with $n=8$ vertices $V=\{1,\dots,8\}$ and $24$ edges:

$$
\begin{aligned}
E=\big\{ & \{1,2\},\{1,3\},\{1,4\},\{1,6\},\{1,7\},\{1,8\},\{2,3\},\{2,4\},\{2,5\},\\
& \{2,7\},\{2,8\},\{3,4\},\{3,5\},\{3,6\},\{3,8\},\{4,5\},\{4,6\},\{4,7\},\\
& \{5,6\},\{5,7\},\{5,8\},\{6,7\},\{6,8\},\{7,8\}\big\}.
\end{aligned}
$$

- Optimal value $z(\mathrm{MCP2})=4$, attained by $\tilde K=\{1,3,4,6\}$, one of $16$ maximum cliques; $81$ cliques; degree bounds $7$, coloring bound $4$.

- Used in [Example «MCP instance: a dense graph with $8$ vertices»](../combinatorial-optimization-problems/clique.md#box-7-mcpP-ex2).

### Instance MCP3 { #sez-sec-cat-ist-mcp3 }

The Petersen graph, $z=\omega(G)$.

Graph with $n=10$ vertices $V=\{1,\dots,10\}$ and $15$ edges:

$$
\begin{aligned}
E=\big\{ & \{1,2\},\{1,5\},\{1,6\},\{2,3\},\{2,7\},\{3,4\},\{3,8\},\{4,5\},\{4,9\},\\
& \{5,10\},\{6,8\},\{6,9\},\{7,9\},\{7,10\},\{8,10\}\big\}.
\end{aligned}
$$

- Optimal value $z(\mathrm{MCP3})=2$, attained by no triangle: the maximum cliques are the edges.

- Used in [Dual bounds on the Petersen graph](../combinatorial-optimization-problems/coloring.md#423-counting-the-solutions-a-first-solution-and-the-bounds), [Remark after Example «MCP instance: a dense graph with $8$ vertices»](../combinatorial-optimization-problems/clique.md#box-7-mcpP-ex2).

### Instance MCP4 { #sez-sec-cat-ist-mcp4 }

The cycle $C_5$, $z=\omega(G)$.

Graph with $n=5$ vertices $V=\{1,\dots,5\}$ and $5$ edges:

$$
E=\big\{\{1,2\},\{2,3\},\{3,4\},\{4,5\},\{1,5\}\big\}.
$$

- Optimal value $z(\mathrm{MCP4})=2$, attained by $\omega(C_5)=2<\chi(C_5)=3$.

- Used in [Typical mistakes «believing that the coloring bound is tight»](../combinatorial-optimization-problems/clique.md), [Example «$ILP_{MCP}$ model»](../formulations/clique-formulations.md).

### Instance MCP5 { #sez-sec-cat-ist-mcp5 }

The triangle $K_3$, $z=\omega(G)$.

Graph with $n=3$ vertices $V=\{1,\dots,3\}$ and $3$ edges:

$$
E=\big\{\{1,2\},\{1,3\},\{2,3\}\big\}.
$$

- Optimal value $z(\mathrm{MCP5})=3$, attained by $K=\{1,2,3\}$.

- Used in [Example «VCP instance: a triangle»](../combinatorial-optimization-problems/coloring.md#box-4-ex-vcp1), [Dashboard of the reference instances](../combinatorial-optimization-problems/coloring.md#45-in-summary).

### Instance MCP6 { #sez-sec-cat-ist-mcp6 }

The prism with a seventh vertex adjacent to $1$ and $2$, $z=\omega(G)$.

Graph with $n=7$ vertices $V=\{1,\dots,7\}$ and $11$ edges:

$$
\begin{aligned}
E=\big\{ & \{1,2\},\{1,3\},\{1,4\},\{1,7\},\{2,3\},\{2,5\},\{2,7\},\{3,6\},\{4,5\},\\
& \{4,6\},\{5,6\}\big\}.
\end{aligned}
$$

- Optimal value $z(\mathrm{MCP6})=3$, attained by cliques with $3$ vertices $\{1,2,3\}$, $\{1,2,7\}$, $\{4,5,6\}$; the notes state $\omega(G)\ge3$ and $\chi(G)=3$.

- Used in [Exercise 4.1](../exercises/coloring.md#esercizio-4-1).

### Instance MCP7 { #sez-sec-cat-ist-mcp7 }

A graph with $6$ vertices and $7$ edges, $z=\omega(G)$.

Graph with $n=6$ vertices $V=\{1,\dots,6\}$ and $7$ edges:

$$
E=\big\{\{1,2\},\{1,4\},\{1,5\},\{2,3\},\{2,4\},\{3,6\},\{5,6\}\big\}.
$$

- Optimal value $z(\mathrm{MCP7})=3$, attained by the unique maximum clique $\{1,2,4\}$.

- Used in [Exercise 4.2](../exercises/coloring.md#esercizio-4-2).

### Instance MCP8 { #sez-sec-cat-ist-mcp8 }

The complement of the cycle $C_7$, $z=\omega(G)$.

Graph with $n=7$ vertices $V=\{1,\dots,7\}$ and $14$ edges:

$$
\begin{aligned}
E=\big\{ & \{1,3\},\{1,4\},\{1,5\},\{1,6\},\{2,4\},\{2,5\},\{2,6\},\{2,7\},\{3,5\},\\
& \{3,6\},\{3,7\},\{4,6\},\{4,7\},\{5,7\}\big\}.
\end{aligned}
$$

- Optimal value $z(\mathrm{MCP8})=3$, attained by $\{1,3,5\}$, a stable set of $C_7$.

- Used in [Exercise 4.3](../exercises/coloring.md#esercizio-4-3).

### Instance MCP9 { #sez-sec-cat-ist-mcp9 }

The wheel $W_5$, $z=\omega(W_5)$.

Graph with $n=6$ vertices $V=\{1,\dots,6\}$ and $10$ edges:

$$
\begin{aligned}
E=\big\{ & \{1,2\},\{2,3\},\{3,4\},\{4,5\},\{1,5\},\{1,6\},\{2,6\},\{3,6\},\{4,6\},\\
& \{5,6\}\big\}.
\end{aligned}
$$

- Optimal value $z(\mathrm{MCP9})=3$, attained by $\{1,2,6\}$.

- Used in [Exercise 4.4](../exercises/coloring.md#esercizio-4-4).

### Instance MCP10 { #sez-sec-cat-ist-mcp10 }

A graph with $7$ vertices and $11$ edges, $z=\omega(G)$.

Graph with $n=7$ vertices $V=\{1,\dots,7\}$ and $11$ edges:

$$
\begin{aligned}
E=\big\{ & \{1,2\},\{1,3\},\{1,4\},\{2,4\},\{2,6\},\{3,7\},\{4,5\},\{4,6\},\{5,6\},\\
& \{5,7\},\{6,7\}\big\}.
\end{aligned}
$$

- Optimal value $z(\mathrm{MCP10})=3$, attained by $\{1,2,4\}$; no clique of size $4$.

- Used in [Exercise 30.1](../exercises/coloring-approximation.md#esercizio-30-1).

## Exercises { #sez-sec-cat-mcp-es }

- [Checking a coloring (VCP)](../exercises/coloring.md#esercizio-4-1)

- [Neighbourhoods, cliques and stable sets (VCP)](../exercises/coloring.md#esercizio-4-2)

- [The stable set bound on a complement graph (VCP)](../exercises/coloring.md#esercizio-4-3)

- [When both bounds are not tight (VCP)](../exercises/coloring.md#esercizio-4-4)

- [Vertex coloring approximation 1](../exercises/coloring-approximation.md#esercizio-30-1)

## Maximum stable set problem (MSSP) { #sez-sec-cat-mssp }

<a id="box-2-def-cat-mssp"></a>

!!! definizione "Definition 2: Maximum stable set problem"

    Let $G=(V,E)$ be a graph.

    1. A <strong>stable set</strong> (also called <strong>independent set</strong>) is a subset $Q \subseteq V$ of pairwise non-adjacent vertices: $\{u,v\} \notin E$ for all $u,v \in Q$ with $u \neq v$.

    2. The <strong>Maximum Stable Set Problem</strong> (MSSP) asks to find a stable set of $G$ whose number of vertices is maximum. Its optimal value is the <strong>stability number</strong> $\alpha(G)$.

- Defined in [Chapter 5 «The maximum clique problem»](../combinatorial-optimization-problems/clique.md#box-3-mcpP-def-MSSP).

- A subset is a clique of $G$ if and only if it is a stable set of $\overline{G}$: $\omega(G) = \alpha(\overline{G})$ and $\alpha(G) = \omega(\overline{G})$.

- <strong>Complexity</strong>: NP-hard, as the MCP (through the complement graph).

<strong>Where it is treated</strong>

- [Chapter 4 «Vertex coloring»](../combinatorial-optimization-problems/coloring.md#box-7-obs-stable-bound): The stable set bound $\lceil n/\alpha(G)\rceil\le\chi(G)$ of the VCP

- [Exercise 4.3](../exercises/coloring.md#esercizio-4-3): $\alpha(G)$ as the clique number of the complement graph

- [Chapter 6 «The maximum clique problem»](../combinatorial-optimization-problems/clique.md#box-5-mcpP-prop-omega-alpha): The MCP on $G$ is the MSSP on $\overline{G}$

### Instance MSSP1 { #sez-sec-cat-ist-mssp1 }

The Petersen graph, $z=\alpha(G)$.

Graph with $n=10$ vertices $V=\{1,\dots,10\}$ and $15$ edges:

$$
\begin{aligned}
E=\big\{ & \{1,2\},\{1,5\},\{1,6\},\{2,3\},\{2,7\},\{3,4\},\{3,8\},\{4,5\},\{4,9\},\\
& \{5,10\},\{6,8\},\{6,9\},\{7,9\},\{7,10\},\{8,10\}\big\}.
\end{aligned}
$$

- Optimal value $z(\mathrm{MSSP1})=4$, attained by $\{1,4,7,8\}$.

- Used in [Dual bounds on the Petersen graph](../combinatorial-optimization-problems/coloring.md#423-counting-the-solutions-a-first-solution-and-the-bounds).

### Instance MSSP2 { #sez-sec-cat-ist-mssp2 }

A graph with $6$ vertices and $7$ edges, $z=\alpha(G)$.

Graph with $n=6$ vertices $V=\{1,\dots,6\}$ and $7$ edges:

$$
E=\big\{\{1,2\},\{1,4\},\{1,5\},\{2,3\},\{2,4\},\{3,6\},\{5,6\}\big\}.
$$

- Optimal value $z(\mathrm{MSSP2})=3$, attained by the unique maximum stable set $\{3,4,5\}$.

- Used in [Exercise 4.2](../exercises/coloring.md#esercizio-4-2).

### Instance MSSP3 { #sez-sec-cat-ist-mssp3 }

The complement of the cycle $C_7$, $z=\alpha(G)$.

Graph with $n=7$ vertices $V=\{1,\dots,7\}$ and $14$ edges:

$$
\begin{aligned}
E=\big\{ & \{1,3\},\{1,4\},\{1,5\},\{1,6\},\{2,4\},\{2,5\},\{2,6\},\{2,7\},\{3,5\},\\
& \{3,6\},\{3,7\},\{4,6\},\{4,7\},\{5,7\}\big\}.
\end{aligned}
$$

- Optimal value $z(\mathrm{MSSP3})=2$, attained by $\{1,2\}$, an edge of $\overline{G}=C_7$.

- Used in [Exercise 4.3](../exercises/coloring.md#esercizio-4-3).

### Instance MSSP4 { #sez-sec-cat-ist-mssp4 }

The wheel $W_5$, $z=\alpha(W_5)$.

Graph with $n=6$ vertices $V=\{1,\dots,6\}$ and $10$ edges:

$$
\begin{aligned}
E=\big\{ & \{1,2\},\{2,3\},\{3,4\},\{4,5\},\{1,5\},\{1,6\},\{2,6\},\{3,6\},\{4,6\},\\
& \{5,6\}\big\}.
\end{aligned}
$$

- Optimal value $z(\mathrm{MSSP4})=2$, attained by $\{1,3\}$.

- Used in [Exercise 4.4](../exercises/coloring.md#esercizio-4-4).

## Vertex-weighted maximum clique problem (VWMCP) { #sez-sec-cat-vwmcp }

<a id="box-3-def-cat-vwmcp"></a>

!!! definizione "Definition 3: Vertex-weighted maximum clique problem"

    Given a graph $G$ and a vertex-weight vector $\vet{w} \in \Z_{\ge 1}^n$, the <strong>vertex-weighted maximum clique problem</strong> asks to find a clique $K$ of $G$ with maximum total vertex weight $w(K) = \sum_{v \in K} w_v$.

- Defined in [Chapter 5 «The maximum clique problem»](../combinatorial-optimization-problems/clique.md#box-12-mcpP-def-weighted).

- With all the weights $w_v=1$ it is the MCP.

<strong>Where it is treated</strong>

- [Chapter 6 «The maximum clique problem»](../combinatorial-optimization-problems/clique.md#box-13-mcpP-ex3): Example «vertex-weighted maximum clique problem»

### Instance VWMCP1 { #sez-sec-cat-ist-vwmcp1 }

The dense graph with $8$ vertices and vertex weights.

Graph with $n=8$ vertices $V=\{1,\dots,8\}$ and $24$ edges:

$$
\begin{aligned}
E=\big\{ & \{1,2\},\{1,3\},\{1,4\},\{1,6\},\{1,7\},\{1,8\},\{2,3\},\{2,4\},\{2,5\},\\
& \{2,7\},\{2,8\},\{3,4\},\{3,5\},\{3,6\},\{3,8\},\{4,5\},\{4,6\},\{4,7\},\\
& \{5,6\},\{5,7\},\{5,8\},\{6,7\},\{6,8\},\{7,8\}\big\}.
\end{aligned}
$$

Vertex weights:

$$
\begin{array}{l|cccccccc}
\hline
v & 1 & 2 & 3 & 4 & 5 & 6 & 7 & 8 \\
\hline
w_v & 5 & 8 & 9 & 5 & 6 & 5 & 5 & 9 \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{VWMCP1})=32$, attained by $\{2,3,5,8\}$, unique.

- Used in [Example «vertex-weighted maximum clique problem»](../combinatorial-optimization-problems/clique.md#box-13-mcpP-ex3).

## Edge-weighted maximum clique problem (EWMCP) { #sez-sec-cat-ewmcp }

<a id="box-4-def-cat-ewmcp"></a>

!!! definizione "Definition 4: Edge-weighted maximum clique problem"

    Given a graph $G$ and an edge-weight vector $\vet{r} \in \Z_{\ge 1}^m$, the <strong>edge-weighted maximum clique problem</strong> asks to find a clique $K$ of $G$ with maximum total edge weight $r(K) = \sum_{\{u,v\} \in E[K]} r_{uv}$, where $E[K]$ is the set of the edges with both endpoints in $K$.

- Defined in [Chapter 5 «The maximum clique problem»](../combinatorial-optimization-problems/clique.md#box-12-mcpP-def-weighted).

- With $r_{uv}=1$ it is again the MCP, since $r(K)=\binom{|K|}{2}$ grows with $|K|$.

<strong>Where it is treated</strong>

- [Chapter 6 «The maximum clique problem»](../combinatorial-optimization-problems/clique.md#box-14-mcpP-ex4): Example «edge-weighted maximum clique problem»

### Instance EWMCP1 { #sez-sec-cat-ist-ewmcp1 }

The dense graph with $8$ vertices and edge weights.

Graph with $n=8$ vertices $V=\{1,\dots,8\}$ and $24$ edges:

$$
\begin{aligned}
E=\big\{ & \{1,2\},\{1,3\},\{1,4\},\{1,6\},\{1,7\},\{1,8\},\{2,3\},\{2,4\},\{2,5\},\\
& \{2,7\},\{2,8\},\{3,4\},\{3,5\},\{3,6\},\{3,8\},\{4,5\},\{4,6\},\{4,7\},\\
& \{5,6\},\{5,7\},\{5,8\},\{6,7\},\{6,8\},\{7,8\}\big\}.
\end{aligned}
$$

Edge weights: $r_{12}=1$, $r_{13}=4$, $r_{14}=5$, $r_{16}=4$, $r_{17}=3$, $r_{18}=3$, $r_{23}=2$, $r_{24}=5$, $r_{25}=6$, $r_{27}=9$, $r_{28}=4$, $r_{34}=3$, $r_{35}=6$, $r_{36}=1$, $r_{38}=6$, $r_{45}=4$, $r_{46}=7$, $r_{47}=2$, $r_{56}=5$, $r_{57}=7$, $r_{58}=3$, $r_{67}=1$, $r_{68}=2$, $r_{78}=8$.

- Optimal value $z(\mathrm{EWMCP1})=37$, attained by $\{2,5,7,8\}$, unique.

- Used in [Example «edge-weighted maximum clique problem»](../combinatorial-optimization-problems/clique.md#box-14-mcpP-ex4).
