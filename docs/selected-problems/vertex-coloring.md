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

## Instances { #sez-sec-cat-vcp-ist }

### Instance VCP1 { #sez-sec-cat-ist-vcp1 }

The Petersen graph, reference instance of the coloring chapter.

Graph with $n=10$ vertices $V=\{1,\dots,10\}$ and $15$ edges:

$$
\begin{aligned}
E=\big\{ & \{1,2\},\{1,5\},\{1,6\},\{2,3\},\{2,7\},\{3,4\},\{3,8\},\{4,5\},\{4,9\},\\
& \{5,10\},\{6,8\},\{6,9\},\{7,9\},\{7,10\},\{8,10\}\big\}.
\end{aligned}
$$

- Optimal value $z(\mathrm{VCP1})=3$, attained by $\mathcal{Q} = \big\{\, \{1,4,7,8\},~ \{2,5,6\},~ \{3,9,10\} \,\big\}$; $\omega(G)=2$, $\alpha(G)=4$, and $7\,430$ of the $B(10)=115\,975$ partitions are feasible.

- Used in [Example «VCP instance: the Petersen graph»](../combinatorial-optimization-problems/coloring.md#box-5-ex-vcp2), [Counting, a first solution and the bounds](../combinatorial-optimization-problems/coloring.md#423-counting-the-solutions-a-first-solution-and-the-bounds).

### Instance VCP2 { #sez-sec-cat-ist-vcp2 }

The triangle $K_3$.

Graph with $n=3$ vertices $V=\{1,\dots,3\}$ and $3$ edges:

$$
E=\big\{\{1,2\},\{1,3\},\{2,3\}\big\}.
$$

- Optimal value $z(\mathrm{VCP2})=3$, attained by $\tilde{Q}_1=\{1\}$, $\tilde{Q}_2=\{2\}$, $\tilde{Q}_3=\{3\}$, the only feasible partition of the $B(3)=5$; $z(\LP\text{-}0_{\VCP})=z(\LP_{\VCP})=2$.

- Used in [Example «VCP instance: a triangle»](../combinatorial-optimization-problems/coloring.md#box-4-ex-vcp1), [Example «$\ILP_{\VCP}$ model»](../formulations/coloring-formulations.md#box-2-texexpbox_ilp_vcp), [Example «$\LP\text{-}0_{\VCP}$ model»](../formulations/coloring-formulations.md#box-3-texexpbox_lp0_vcp), [Example «$D(\LP\text{-}0_{\VCP})$ model»](../formulations/coloring-formulations.md#box-4-texexpbox_dlp0_vcp), [Example «$\LP_{\VCP}$ model»](../formulations/coloring-formulations.md#box-8-texexpbox_lp_vcp), [Example «$D(\LP_{\VCP})$ model»](../formulations/coloring-formulations.md#box-9-texexpbox_dlp_vcp).

### Instance VCP3 { #sez-sec-cat-ist-vcp3 }

An exam calendar: $6$ exams and their conflicts.

Graph with $n=6$ vertices $V=\{1,\dots,6\}$ and $8$ edges:

$$
E=\big\{\{1,2\},\{1,3\},\{2,3\},\{2,4\},\{3,5\},\{4,5\},\{4,6\},\{5,6\}\big\}.
$$

- Optimal value $z(\mathrm{VCP3})=3$, attained by days $\{1,4\}$, $\{2,5\}$, $\{3,6\}$; $22$ of the $B(6)=203$ partitions are feasible.

- Used in [Example «an exam calendar»](../combinatorial-optimization-problems/combinatorial-optimization.md#box-7-ex-oc1-vcp), [Example «how many candidate solutions»](../combinatorial-optimization-problems/combinatorial-optimization.md#box-16-ex-oc1-count).

### Instance VCP4 { #sez-sec-cat-ist-vcp4 }

The cycle $C_5$.

Graph with $n=5$ vertices $V=\{1,\dots,5\}$ and $5$ edges:

$$
E=\big\{\{1,2\},\{2,3\},\{3,4\},\{4,5\},\{1,5\}\big\}.
$$

- Optimal value $z(\mathrm{VCP4})=3$, attained by $\tilde Q_1=\{1,3\}$, $\tilde Q_2=\{2,4\}$, $\tilde Q_3=\{5\}$; $5$ optimal partitions; $z(\LP_{\VCP})=2$.

- Used in [Exercise 11.1](../exercises/coloring-formulations.md#esercizio-11-1), [Exercise 11.3](../exercises/coloring-formulations.md#esercizio-11-3).

### Instance VCP5 { #sez-sec-cat-ist-vcp5 }

The complete graph $K_4$.

Graph with $n=4$ vertices $V=\{1,\dots,4\}$ and $6$ edges:

$$
E=\big\{\{1,2\},\{1,3\},\{1,4\},\{2,3\},\{2,4\},\{3,4\}\big\}.
$$

- Optimal value $z(\mathrm{VCP5})=4$, attained by four singletons; $z(\LP\text{-}0_{\VCP})=z(\LP_{\VCP})=2$.

- Used in [Exercise 11.2](../exercises/coloring-formulations.md#esercizio-11-2).

### Instance VCP6 { #sez-sec-cat-ist-vcp6 }

The wheel $W_5$: a cycle on $1,\dots,5$ and the hub $6$.

Graph with $n=6$ vertices $V=\{1,\dots,6\}$ and $10$ edges:

$$
\begin{aligned}
E=\big\{ & \{1,2\},\{2,3\},\{3,4\},\{4,5\},\{1,5\},\{1,6\},\{2,6\},\{3,6\},\{4,6\},\\
& \{5,6\}\big\}.
\end{aligned}
$$

- Optimal value $z(\mathrm{VCP6})=4$, attained by $\{\{1,3\},\{2,4\},\{5\},\{6\}\}$; $\omega(W_5)=3$, $\alpha(W_5)=2$, both bounds give $3$; $z(\LP_{\VCP})=2$.

- Used in [Exercise 4.4](../exercises/coloring.md#esercizio-4-4), [Exercise 11.5](../exercises/coloring-formulations.md#esercizio-11-5).

### Instance VCP7 { #sez-sec-cat-ist-vcp7 }

The triangular prism: triangles $\{1,2,3\}$ and $\{4,5,6\}$ joined by $\{1,4\},\{2,5\},\{3,6\}$.

Graph with $n=6$ vertices $V=\{1,\dots,6\}$ and $9$ edges:

$$
E=\big\{\{1,2\},\{1,3\},\{2,3\},\{4,5\},\{4,6\},\{5,6\},\{1,4\},\{2,5\},\{3,6\}\big\}.
$$

- Optimal value $z(\mathrm{VCP7})=3$, attained by $z(\LP\text{-}0_{\VCP})=z(\LP_{\VCP})=2$ and $z(\ILP_{\VCP})=3$.

- Used in [Exercise 11.4](../exercises/coloring-formulations.md#esercizio-11-4).

### Instance VCP8 { #sez-sec-cat-ist-vcp8 }

The prism with a seventh vertex adjacent to $1$ and $2$.

Graph with $n=7$ vertices $V=\{1,\dots,7\}$ and $11$ edges:

$$
\begin{aligned}
E=\big\{ & \{1,2\},\{1,3\},\{1,4\},\{1,7\},\{2,3\},\{2,5\},\{2,7\},\{3,6\},\{4,5\},\\
& \{4,6\},\{5,6\}\big\}.
\end{aligned}
$$

- Optimal value $z(\mathrm{VCP8})=3$, attained by $\mathcal{Q}_a=\{\{1,6\},\{2,4\},\{3,5,7\}\}$.

- Used in [Exercise 4.1](../exercises/coloring.md#esercizio-4-1).

### Instance VCP9 { #sez-sec-cat-ist-vcp9 }

A graph with $6$ vertices and $7$ edges, a unique maximum clique and a unique maximum stable set.

Graph with $n=6$ vertices $V=\{1,\dots,6\}$ and $7$ edges:

$$
E=\big\{\{1,2\},\{1,4\},\{1,5\},\{2,3\},\{2,4\},\{3,6\},\{5,6\}\big\}.
$$

- Optimal value $z(\mathrm{VCP9})=3$, attained by $\{\{3,4,5\},\{1,6\},\{2\}\}$; $\omega(G)=3$ with $\{1,2,4\}$, $\alpha(G)=3$ with $\{3,4,5\}$.

- Used in [Exercise 4.2](../exercises/coloring.md#esercizio-4-2).

### Instance VCP10 { #sez-sec-cat-ist-vcp10 }

The complement of the cycle $C_7$.

Graph with $n=7$ vertices $V=\{1,\dots,7\}$ and $14$ edges:

$$
\begin{aligned}
E=\big\{ & \{1,3\},\{1,4\},\{1,5\},\{1,6\},\{2,4\},\{2,5\},\{2,6\},\{2,7\},\{3,5\},\\
& \{3,6\},\{3,7\},\{4,6\},\{4,7\},\{5,7\}\big\}.
\end{aligned}
$$

- Optimal value $z(\mathrm{VCP10})=4$, attained by $\{\{1,2\},\{3,4\},\{5,6\},\{7\}\}$; $\omega(G)=3$, $\alpha(G)=2$, stable set bound $\lceil 7/2\rceil=4$.

- Used in [Exercise 4.3](../exercises/coloring.md#esercizio-4-3).

### Instance VCP11 { #sez-sec-cat-ist-vcp11 }

A graph with an isolated vertex and two dominated vertices.

Graph with $n=6$ vertices $V=\{1,\dots,6\}$ and $6$ edges:

$$
E=\big\{\{1,2\},\{1,3\},\{2,3\},\{2,4\},\{3,4\},\{4,5\}\big\}.
$$

- Optimal value $z(\mathrm{VCP11})=3$, attained by $\{\{1,4,6\},\{2,5\},\{3\}\}$; the reduced graph is the triangle $\{2,3,4\}$; $B(6)=203$ candidates.

- Used in [Exercise 4.5](../exercises/coloring.md#esercizio-4-5).

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
