---
title: "Formulations of clique problems"
---

# Formulations of clique problems

<div class="info-capitolo" markdown>

**Part 2 · Formulations and their properties · Chapter 12** · [:material-file-pdf-box: Lecture notes, volume 2 (PDF)](../../pdf/lecture-notes-2-formulations.pdf) · [:material-pencil: Exercises: Clique problems](../../exercises/clique-formulations.md)

</div>

!!! nota "Prerequisites"

    - From this module, [Chapter 5 «Clique problems»](https://fabiofurini.github.io/combinatorial-optimization/combinatorial-optimization-problems/clique/): the problem, its assumptions, cliques, stable sets, the complement graph and $\omega(G)=\alpha(\overline{G})$.

    - From this module, [Chapter 4 «Coloring problems»](https://fabiofurini.github.io/combinatorial-optimization/combinatorial-optimization-problems/coloring/) and [Chapter 11 «Formulations of coloring problems»](https://fabiofurini.github.io/combinatorial-optimization/formulations/coloring-formulations/): the chromatic number $\chi(G)$ and an ILP model with its LP relaxations.

    - From the module <em>Integer linear programming</em>, [Chapter 2 «Primal and dual bounds»](https://fabiofurini.github.io/integer-linear-programming/models-and-bounds/lp-relaxation/), [Chapter 3 «Ideal formulations»](https://fabiofurini.github.io/integer-linear-programming/formulations/ideal-formulations/) and [Chapter 4 «Valid inequalities»](https://fabiofurini.github.io/integer-linear-programming/formulations/valid-inequalities/): LP relaxations, stronger formulations and valid inequalities.

    - From the module <em>Linear Programming</em>, [Chapter 9 «Duality theory»](https://fabiofurini.github.io/linear-programming/duality/09-duality/): the dual of an LP problem and weak duality.

!!! chiave "Objectives"

    At the end of this chapter you will be able to:

    - write the edge formulation of the Maximum Clique Problem on the non-edges of $G$, that is, on the edges of $\overline{G}$;

    - explain why its LP relaxation is weak: the point $x_v=\tfrac{1}{2}$ is always feasible;

    - write the clique formulation and compare the two LP bounds on a small graph;

    - prove $\omega(G)\le z(\mathrm{LP}^{\mathrm{CL}}_{\mathrm{MCP}})\le\chi(G)$ through LP duality and a coloring formulation;

    - write the edge and the clique formulations of the Maximum Stable Set Problem;

    - write the ILP models of the vertex-weighted and of the edge-weighted maximum clique problems, linearizing the product $x_u\,x_v$ with the variables $y_{uv}$.

## 12.1 Overview of the family

- The ILP models of the clique problems use one <strong>binary selection variable</strong> $x_v$ for each vertex $v \in V$, equal to $1$ if the vertex is in the clique.

- Two vertices that are not adjacent cannot be both selected: the <strong>conflict constraints</strong> are written on the non-edges of $G$, that is, on the edges of the complement graph $\overline{G}$, or on its cliques.

- The objective function maximizes the number of selected vertices or their total weight; the edge-weighted problem adds one variable per edge.

!!! chiave ""

    The clique models select vertices with binary variables and forbid the selection of two non-adjacent vertices. The same models, written on the edges of $G$ instead of $\overline{G}$, select stable sets.

- The table lists the members of the family, with the names of their ILP models and the sections that write them.

<div class="tabella" markdown="0"><table>
<tr>
<th><strong>Problem</strong></th>
<th><strong>Models</strong></th>
<th><strong>Conflict constraints</strong></th>
<th><strong>Section</strong></th>
</tr>
<tr>
<td>MCP</td>
<td><span class="arithmatex">\(\mathrm{ILP}_{\mathrm{MCP}}\)</span> (edge formulation)</td>
<td>on the non-edges of <span class="arithmatex">\(G\)</span></td>
<td><a href="an-ilp-model-for-the-maximum-clique-problem-the-edge-formula/#sez-sec-mcpf-MCP">12.2</a></td>
</tr>
<tr>
<td>MCP</td>
<td><span class="arithmatex">\(\mathrm{ILP}^{\mathrm{CL}}_{\mathrm{MCP}}\)</span> (clique formulation)</td>
<td>on the maximal stable sets of <span class="arithmatex">\(G\)</span></td>
<td><a href="an-ilp-model-for-the-maximum-clique-problem-the-edge-formula/#sez-sec-mcpf-CL">12.5</a></td>
</tr>
<tr>
<td>MSSP</td>
<td><span class="arithmatex">\(\mathrm{ILP}_{\mathrm{MSSP}}\)</span>, <span class="arithmatex">\(\mathrm{ILP}^{\mathrm{CL}}_{\mathrm{MSSP}}\)</span></td>
<td>on the edges and the cliques of <span class="arithmatex">\(G\)</span></td>
<td><a href="an-ilp-model-for-the-maximum-clique-problem-the-edge-formula/#sez-sec-mcpf-MSSP">12.7</a></td>
</tr>
<tr>
<td>VWMCP</td>
<td><span class="arithmatex">\(\mathrm{ILP}^{\mathrm{VW}}_{\mathrm{MCP}}\)</span></td>
<td>on the non-edges of <span class="arithmatex">\(G\)</span></td>
<td><a href="ilp-models-for-the-weighted-variants/#sez-sec-mcpf-weighted">12.8</a></td>
</tr>
<tr>
<td>EWMCP</td>
<td><span class="arithmatex">\(\mathrm{ILP}^{\mathrm{EW}}_{\mathrm{MCP}}\)</span></td>
<td>on the non-edges of <span class="arithmatex">\(G\)</span></td>
<td><a href="ilp-models-for-the-weighted-variants/#sez-sec-mcpf-weighted">12.8</a></td>
</tr>
</table></div>

<div class="grid cards sottopagine" markdown>

-   **Overview**

    Overview of the family

    [:octicons-arrow-right-24: Open](#121-overview-of-the-family)

-   **12.2 An ILP model for the Maximum Clique Problem: the edge formulation**

    A second Linear Programming relaxation · Clique inequalities: a stronger formulation · The relation with vertex coloring · Stable sets on the complement graph

    [:octicons-arrow-right-24: Open](an-ilp-model-for-the-maximum-clique-problem-the-edge-formula.md)

-   **12.8 ILP models for the weighted variants**

    The edge-weighted maximum clique problem · Typical mistakes · In summary

    [:octicons-arrow-right-24: Open](ilp-models-for-the-weighted-variants.md)

</div>

---

**Next:** [12.2 An ILP model for the Maximum Clique Problem: the edge formulation](an-ilp-model-for-the-maximum-clique-problem-the-edge-formula.md)

---

**Exercises on this chapter:** [:material-pencil: Clique problems](../../exercises/clique-formulations.md)
