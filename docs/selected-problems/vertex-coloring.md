---
title: "The vertex coloring problem"
---

# The vertex coloring problem

<div class="info-capitolo" markdown>

**Selected problems** · [:material-view-list: Catalogue of combinatorial problems](../catalogue/index.md)

</div>

<a id="sec:cat-vcp"></a>

<a id="sec:cat-pagina-central-problems"></a>

!!! chiave ""

    Color the vertices of a graph so that adjacent vertices get different colors, using the minimum number of colors.

!!! nota "Where it is treated"

    - [Chapter 1 «Combinatorial optimization problems»](../combinatorial-optimization-problems/combinatorial-optimization.md#123-vertex-coloring-problem): First definition, the exam calendar and the count of its partitions

    - [Chapter 4 «Vertex coloring»](../combinatorial-optimization-problems/coloring.md): Definition, assumptions, the clique bound and the stable set bound

    - [Chapter 11 «Formulations of the vertex coloring problem»](../formulations/coloring-formulations.md): The $\ILP_{\VCP}$ model and its two LP relaxations, whose value is always $2$

## Definition { #sez-sec-cat-vcp-def }

- Definition and assumptions: [Catalogue of combinatorial problems](../catalogue/central-problems.md#sez-sec-cat-def-vcp).

- The vertices are objects in conflict and the colors are resources that conflicting objects cannot share, as in the exam calendar of [Chapter 1 «Combinatorial optimization problems»](../combinatorial-optimization-problems/combinatorial-optimization.md#box-7-ex-oc1-vcp), where the colors are the days of the session.

- A feasible solution is a partition of $V$ into nonempty color classes $\mathcal{Q}$, each of which is a stable set, and the number of colors is $|\mathcal{Q}|$.

- The optimal value is the <strong>chromatic number</strong> $\chi(G)$ of the graph, and the candidate solutions are counted by the Bell numbers $B(n)$.

## Bounds and complexity { #sez-sec-cat-vcp-prop }

- <strong>Complexity</strong>: Strongly NP-hard: deciding whether $\chi(G)\le 3$ is NP-complete, and the instance contains no numbers; the chromatic number is among the $21$ NP-complete problems of Karp (1972).

- $\omega(G) \le \chi(G)$ (clique bound): the vertices of a clique need pairwise different colors ([Chapter 4 «Vertex coloring»](../combinatorial-optimization-problems/coloring.md#box-6-obs-clique-bound)).

- $\left\lceil \frac{n}{\alpha(G)} \right\rceil \le \chi(G)$ (stable set bound): every color class is a stable set with at most $\alpha(G)$ vertices ([Chapter 4 «Vertex coloring»](../combinatorial-optimization-problems/coloring.md#box-7-obs-stable-bound)).

- $z(\LP\text{-}0_{\VCP}) = z(\LP_{\VCP}) = 2$ for every graph with an edge: the LP bound is very weak ([Chapter 11 «Formulations of the vertex coloring problem»](../formulations/coloring-formulations.md#box-11-cor_lp_vcp_value)).

- $\chi(G)\le\Delta$ for a connected graph that is neither complete nor an odd cycle (Brooks, 1941) ([Chapter 4 «Vertex coloring»](../combinatorial-optimization-problems/coloring.md#43-remarks)).

- An isolated vertex and a vertex $u$ with $N(u)\subseteq N(v)$ can be removed without changing $\chi(G)$, so the notes assume $\deg(v)\ge1$ and $N(u)\not\subseteq N(v)$ for all $u\neq v$ ([Chapter 4 «Vertex coloring»](../combinatorial-optimization-problems/coloring.md#421-assumptions)).

- The two bounds do not always meet $\chi(G)$: on the Petersen graph $\omega(G)=2<\chi(G)=3$, and on the wheel $W_5$ both bounds give $3$ while $\chi(W_5)=4$ ([Exercise 4.4](../exercises/coloring.md#esercizio-4-4)).

## Formulation { #sez-sec-cat-vcp-formulation }

- <strong>$\ILP_{\VCP}$ model</strong> ([Chapter 11 «Formulations of the vertex coloring problem»](../formulations/coloring-formulations.md#eq-NAT_VCP)):

\begin{align*}
\min\ & \sum_{c \in \mathscr{C}} y_{c} \\
& \sum_{c \in \mathscr{C}} x_{vc} = 1 && \forall v \in V \\
& - x_{uc} - x_{vc} + y_c \geq 0 && \forall c \in \mathscr{C},~\forall \{u,v\} \in E \\
& x_{vc} \in \{0,1\} && \forall v \in V,~ \forall c \in \mathscr{C} \\
& y_{c} \in \{0,1\} && \forall c \in \mathscr{C}
\end{align*}

- The $\ILP_{\VCP}$ model uses $k\,n$ variables $x_{vc}$ (vertex $v$ takes color $c$) and $k$ variables $y_c$ (color $c$ is used), with $k$ an upper bound on the number of colors, for example $k=n$ ([Chapter 11 «Formulations of the vertex coloring problem»](../formulations/coloring-formulations.md#eq-NAT_VCP)).

- The edge constraints $-x_{uc}-x_{vc}+y_c\ge 0$ forbid equal colors on adjacent vertices and switch off the unused colors; the model has $k!$ equivalent copies of every coloring ([Chapter 11 «Formulations of the vertex coloring problem»](../formulations/coloring-formulations.md#112-an-ilp-model-for-the-vertex-coloring-problem)).

- Both relaxations $\LP\text{-}0_{\VCP}$ and $\LP_{\VCP}$ have optimal value $2$ for every graph with an edge: $\tilde x_{v1}=\tilde x_{v2}=\frac12$ for all the vertices, and a dual solution built on one edge ([Chapter 11 «Formulations of the vertex coloring problem»](../formulations/coloring-formulations.md#box-6-cor_lp0_vcp_value)).

- On the complete graph with $n$ vertices the gap is $n-2$ and the ratio $\frac{2}{n}$ tends to $0$ ([Exercise 11.2](../exercises/coloring-formulations.md#esercizio-11-2), [Exercise 11.5](../exercises/coloring-formulations.md#esercizio-11-5)).

## Approximation { #sez-sec-cat-vcp-approximation }

- The VCP is not approximable: no polynomial algorithm guarantees a ratio below $\frac43$ unless $P=NP$, and in general $n^{1-\varepsilon}$ is impossible for every $\varepsilon>0$ (Zuckerman).

## Exercises { #sez-sec-cat-vcp-es }

- [Checking a coloring (VCP)](../exercises/coloring.md#esercizio-4-1)

- [Neighbourhoods, cliques and stable sets (VCP)](../exercises/coloring.md#esercizio-4-2)

- [The stable set bound on a complement graph (VCP)](../exercises/coloring.md#esercizio-4-3)

- [When both bounds are not tight (VCP)](../exercises/coloring.md#esercizio-4-4)

- [The assumptions and the reduction of the graph (VCP)](../exercises/coloring.md#esercizio-4-5)

- [ILP model of the Vertex Coloring Problem (1)](../exercises/coloring-formulations.md#esercizio-11-1)

- [LP relaxations of the VCP model (1)](../exercises/coloring-formulations.md#esercizio-11-2)

- [Feasible solutions of the VCP model (1)](../exercises/coloring-formulations.md#esercizio-11-3)

- [Dual solutions of the VCP relaxations (1)](../exercises/coloring-formulations.md#esercizio-11-4)

- [Integrality gap of the VCP model (1)](../exercises/coloring-formulations.md#esercizio-11-5)
