---
title: "Formulations of coloring problems"
---

# Formulations of coloring problems

<div class="info-capitolo" markdown>

**Part 2 · Formulations and their properties · Chapter 11** · [:material-file-pdf-box: Lecture notes, volume 2 (PDF)](../../pdf/lecture-notes-2-formulations.pdf) · [:material-pencil: Exercises: Coloring problems](../../exercises/coloring-formulations.md)

</div>

!!! nota "Prerequisites"

    - From the module <em>Linear Programming</em>, [Chapter 9 «Duality theory»](https://fabiofurini.github.io/linear-programming/duality/09-duality/): the dual of an LP problem, weak and strong duality.

    - From the module <em>Integer linear programming</em>, [Chapter 1 «Integer linear programming»](https://fabiofurini.github.io/integer-linear-programming/models-and-bounds/ilp/) and [Chapter 2 «Primal and dual bounds»](https://fabiofurini.github.io/integer-linear-programming/models-and-bounds/lp-relaxation/): ILP problems, LP relaxations and bounds.

    - From this module, [Chapter 4 «Coloring problems»](https://fabiofurini.github.io/combinatorial-optimization/combinatorial-optimization-problems/coloring/): the problem, its assumptions and the notation on graphs.

!!! chiave "Objectives"

    At the end of this chapter you will be able to:

    - write the ILP model of the Vertex Coloring Problem and explain the role of the activation variables $y_c$;

    - write the two LP relaxations and their duals, and compute their optimal solutions;

    - prove that the optimal value of the LP relaxations is $2$ for every graph with an edge;

    - explain why this bound is very weak, and why the model is not enough to color a graph.

## 11.1 Overview of the family

- The ILP models of the coloring problems use an upper bound $k$ on the number of colors and the set $\mathscr{C} = \{1,2,\dots,k\}$ of the colors that may be used.

- The binary <strong>assignment variables</strong> $x_{vc}$ give a color $c \in \mathscr{C}$ to every vertex $v \in V$, and the binary <strong>activation variables</strong> $y_c$ say whether color $c$ is used.

- Each edge and each color give one constraint, which forbids the same color on the two endpoints of the edge, and the objective function minimizes the number $\sum_{c \in \mathscr{C}} y_c$ of colors used.

!!! chiave ""

    The coloring models are <strong>assignment models</strong>, as the packing models: a vertex is assigned to a color as an item is assigned to a bin, and the edge constraints replace the capacity constraints.

- The table lists the members of the family, with the name of their ILP model and the section that writes it.

<div class="tabella" markdown="0"><table>
<tr>
<th><strong>Problem</strong></th>
<th><strong>Model</strong></th>
<th><strong>Variables</strong></th>
<th><strong>Section</strong></th>
</tr>
<tr>
<td>VCP</td>
<td><span class="arithmatex">\(\mathrm{ILP}_{\mathrm{VCP}}\)</span></td>
<td>binary <span class="arithmatex">\(x_{vc}\)</span> and <span class="arithmatex">\(y_c\)</span></td>
<td><a href="an-ilp-model-for-the-vertex-coloring-problem/#sez-sec-colf-VCP">11.2</a></td>
</tr>
</table></div>

<div class="grid cards sottopagine" markdown>

-   **Overview**

    Overview of the family

    [:octicons-arrow-right-24: Open](#111-overview-of-the-family)

-   **11.2 An ILP model for the Vertex Coloring Problem**

    A second Linear Programming relaxation · Typical mistakes · In summary

    [:octicons-arrow-right-24: Open](an-ilp-model-for-the-vertex-coloring-problem.md)

</div>

---

**Next:** [11.2 An ILP model for the Vertex Coloring Problem](an-ilp-model-for-the-vertex-coloring-problem.md)

---

**Exercises on this chapter:** [:material-pencil: Coloring problems](../../exercises/coloring-formulations.md)
