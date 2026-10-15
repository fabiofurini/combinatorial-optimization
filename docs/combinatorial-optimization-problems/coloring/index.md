---
title: "Coloring problems"
---

# Coloring problems

<div class="info-capitolo" markdown>

**Part 1 · Combinatorial optimization problems · Chapter 4** · [:material-file-pdf-box: Lecture notes, volume 1 (PDF)](../../pdf/lecture-notes-1-combinatorial-optimization-problems.pdf) · [:material-presentation: Slides](../../pdf/slides-coloring.pdf) · [:material-pencil: Exercises: Coloring problems](../../exercises/coloring.md) · [:material-gesture-tap: App: Vertex coloring: greedy and DSATUR](../../lab/coloring-greedy-dsatur.md)

</div>

!!! nota "Prerequisites"

    - From this module, [Chapter 1 «Combinatorial optimization problems»](https://fabiofurini.github.io/combinatorial-optimization/combinatorial-optimization-problems/combinatorial-optimization/): instances, feasible solutions, primal and dual bounds, the gap, and the Bell numbers that count the partitions of a set.

    - From [Chapter 3 «Packing problems»](https://fabiofurini.github.io/combinatorial-optimization/combinatorial-optimization-problems/bin-packing/): the weight bound as an example of a dual bound.

    - No knowledge of graph theory is needed: the definitions used here are recalled in a short section.

!!! chiave "Objectives"

    At the end of this chapter you will be able to:

    - use the basic notions on graphs: neighbourhood, degree, induced graph, complement graph, clique and stable set;

    - state the definition of the vertex coloring problem and the assumptions on the graph;

    - count the candidate solutions of a small instance and recognize that they are partitions;

    - find a coloring by hand and compute the clique bound and the stable set bound;

    - explain why the clique bound is not always tight.

## 4.1 Overview of the family

- The <strong>coloring problems</strong> share the same data: a simple undirected graph $G = (V,E)$, whose edges are the pairs of vertices in conflict.

- A solution assigns a color to every vertex, so that the two endpoints of every edge receive different colors: the vertices with the same color form a stable set of $G$.

- The objective is to minimize the number of colors used.

!!! chiave ""

    A coloring problem partitions the vertices of a graph into the fewest stable sets. The notions on graphs of the next subsection are the common notation of the family.

- The table lists the members of the family, with the section that defines each of them.

<div class="tabella" markdown="0"><table>
<tr>
<th><strong>Problem</strong></th>
<th><strong>Acronym</strong></th>
<th><strong>Solution</strong></th>
<th><strong>Section</strong></th>
</tr>
<tr>
<td>vertex coloring problem</td>
<td>VCP</td>
<td>a partition of <span class="arithmatex">\(V\)</span> into stable sets</td>
<td><a href="the-vertex-coloring-problem/#sez-sec-col-VCP">4.2</a></td>
</tr>
</table></div>

### 4.1.1 A short review of graphs

<a id="box-1-def-graph"></a>

!!! definizione "Definition 4.1: graph, neighbourhood, induced graph and complement graph"

    - A <strong>graph</strong> $G = (V,E)$ is given by a finite set $V$ of <strong>vertices</strong> and a set $E$ of <strong>edges</strong>, each edge being a $2$-element subset of $V$. We write $n = |V|$ and $m = |E|$; the vertices are labelled $1,2,\dots,n$. All the graphs of this chapter are simple and undirected.

    - Two distinct vertices $u$ and $v$ are <strong>adjacent</strong> if $\{u,v\} \in E$. The <strong>neighbourhood</strong> of a vertex $v$ is the set $N(v) = \{\, u \in V : \{u,v\} \in E \,\}$, and its <strong>degree</strong> is $\deg(v) = |N(v)|$.

    - For a subset $U \subseteq V$ the <strong>induced graph</strong> $G[U] = (U, E[U])$ has the vertices of $U$ and the edges of $E$ with both endpoints in $U$.

    - The <strong>complement graph</strong> $\overline{G} = (V, \overline{E})$ has the same vertices as $G$, and two distinct vertices are adjacent in $\overline{G}$ if and only if they are not adjacent in $G$.

<a id="box-2-def-clique-stable"></a>

!!! definizione "Definition 4.2: clique and stable set"

    Let $G = (V,E)$ be a graph.

    1. A <strong>clique</strong> is a subset $K \subseteq V$ of pairwise adjacent vertices: $\{u,v\} \in E$ for all $u,v \in K$ with $u \neq v$.

    2. A <strong>stable set</strong> (also called <strong>independent set</strong>) is a subset $Q \subseteq V$ of pairwise non-adjacent vertices: $\{u,v\} \notin E$ for all $u,v \in Q$ with $u \neq v$.

    The <strong>clique number</strong> $\omega(G)$ is the largest number of vertices of a clique, and the <strong>stability number</strong> $\alpha(G)$ is the largest number of vertices of a stable set.

- A stable set of $G$ is a clique of the complement graph $\overline{G}$, and vice versa. A vertex alone and the empty set are both a clique and a stable set.

!!! chiave ""

    A clique is a group of vertices that pairwise <em>conflict</em>; a stable set is a group of vertices with no conflict. In a coloring, the vertices of a clique need different colors, and the vertices of a stable set can share one.

<div class="grid cards sottopagine" markdown>

-   **Overview**

    Overview of the family · A short review of graphs

    [:octicons-arrow-right-24: Open](#41-overview-of-the-family)

-   **4.2 The vertex coloring problem**

    Two simple bounds · Counting the solutions, a first solution and the bounds · Remarks · Typical mistakes · In summary

    [:octicons-arrow-right-24: Open](the-vertex-coloring-problem.md)

</div>

---

**Next:** [4.2 The vertex coloring problem](the-vertex-coloring-problem.md)

---

**Exercises on this chapter:** [:material-pencil: Coloring problems](../../exercises/coloring.md)

---

**In depth:** [:material-view-list: what the course does on this problem](../../catalogue/vertex-coloring-problem.md)

<!-- laboratorio-interattivo: sezione generata da interattivi.py -->

:material-flask-outline: **In the interactive lab:** [Vertex coloring: greedy and DSATUR](../../lab/coloring-greedy-dsatur.md).