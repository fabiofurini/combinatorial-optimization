---
title: "Clique problems"
---

# Clique problems

<div class="info-capitolo" markdown>

**Part 1 · Combinatorial optimization problems · Chapter 5** · [:material-file-pdf-box: Lecture notes, volume 1 (PDF)](../../pdf/lecture-notes-1-combinatorial-optimization-problems.pdf) · [:material-presentation: Slides](../../pdf/slides-clique.pdf) · [:material-pencil: Exercises: Clique problems](../../exercises/clique.md)

</div>

!!! nota "Prerequisites"

    - From this module, the chapter [«Combinatorial optimization problems»](https://fabiofurini.github.io/combinatorial-optimization/combinatorial-optimization-problems/combinatorial-optimization/): instances, feasible solutions, primal and dual bounds, and the gap.

    - From this module, the chapter [«Coloring problems»](https://fabiofurini.github.io/combinatorial-optimization/combinatorial-optimization-problems/coloring/): graphs, neighbourhoods, degrees, the complement graph and the chromatic number $\chi(G)$.

!!! chiave "Objectives"

    At the end of this chapter you will be able to:

    - state the maximum clique problem and the maximum stable set problem, and pass from one to the other through the complement graph;

    - describe an instance and a feasible solution, and count the candidate solutions of a small graph;

    - find a clique by hand and compute four simple upper bounds on the clique number;

    - state the weighted variants of the problem and its complexity.

## 5.1 Overview of the family

- The <strong>clique problems</strong> share the same data: a simple undirected graph $G = (V,E)$, with $V = \{1,2,\dots,n\}$ and $m$ edges, possibly with weights on the vertices or on the edges.

- A solution is a clique of $G$, that is, a subset of pairwise adjacent vertices.

- The objective is to maximize the size of the clique, or its total weight.

<a id="box-1-mcpP-def-clique"></a>

!!! definizione "Definition 5.1: clique and clique number"

    Let $G=(V,E)$ be a simple undirected graph with $n$ vertices and $m$ edges.

    1. A <strong>clique</strong> is a subset $K \subseteq V$ of pairwise adjacent vertices: $\{u,v\} \in E$ for all $u,v \in K$ with $u \neq v$. Equivalently, $K$ induces a complete graph.

    2. The <strong>clique number</strong> $\omega(G)$ is the largest number of vertices of a clique of $G$.

!!! chiave ""

    A clique problem selects a clique of maximum size or of maximum weight. On the complement graph $\overline{G}$ the same problems select stable sets.

- The table lists the members of the family, with the section that defines each of them.

<div class="tabella" markdown="0"><table>
<tr>
<th><strong>Problem</strong></th>
<th><strong>Acronym</strong></th>
<th><strong>Objective</strong></th>
<th><strong>Section</strong></th>
</tr>
<tr>
<td>maximum clique problem</td>
<td>MCP</td>
<td>maximum number of vertices of a clique</td>
<td><a href="the-maximum-clique-problem/#sez-sec-mcp-MCP">5.2</a></td>
</tr>
<tr>
<td>maximum stable set problem</td>
<td>MSSP</td>
<td>maximum number of vertices of a stable set</td>
<td><a href="the-maximum-clique-problem/#sez-sec-mcp-MCP">5.2</a></td>
</tr>
<tr>
<td>vertex-weighted maximum clique problem</td>
<td>VWMCP</td>
<td>maximum total vertex weight</td>
<td><a href="weighted-variants/#sez-sec-mcp-weighted">5.5</a></td>
</tr>
<tr>
<td>edge-weighted maximum clique problem</td>
<td>EWMCP</td>
<td>maximum total edge weight</td>
<td><a href="weighted-variants/#sez-sec-mcp-weighted">5.5</a></td>
</tr>
</table></div>

<div class="grid cards sottopagine" markdown>

-   **Overview**

    Overview of the family

    [:octicons-arrow-right-24: Open](#51-overview-of-the-family)

-   **5.2 The maximum clique problem**

    Simple upper bounds

    [:octicons-arrow-right-24: Open](the-maximum-clique-problem.md)

-   **5.5 Weighted variants**

    Typical mistakes · In summary

    [:octicons-arrow-right-24: Open](weighted-variants.md)

</div>

---

**Next:** [5.2 The maximum clique problem](the-maximum-clique-problem.md)

---

**Exercises on this chapter:** [:material-pencil: Clique problems](../../exercises/clique.md)

---

**In depth:** [:material-view-list: what the course does on this problem](../../catalogue/maximum-clique-problem.md)
