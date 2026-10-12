---
title: "Formulations of routing problems"
---

# Formulations of routing problems

<div class="info-capitolo" markdown>

**Part 2 · Formulations and their properties · Chapter 13** · [:material-file-pdf-box: Lecture notes, volume 2 (PDF)](../../pdf/lecture-notes-2-formulations.pdf) · [:material-pencil: Exercises: Routing problems](../../exercises/tsp-formulations.md)

</div>

!!! nota "Prerequisites"

    - From the module <em>Integer linear programming</em>, [Chapter 1 «Integer linear programming»](https://fabiofurini.github.io/integer-linear-programming/models-and-bounds/ilp/) and [Chapter 2 «Primal and dual bounds»](https://fabiofurini.github.io/integer-linear-programming/models-and-bounds/lp-relaxation/): ILP problems, LP relaxations and bounds.

    - From this module, [Chapter 6 «Routing problems»](https://fabiofurini.github.io/combinatorial-optimization/combinatorial-optimization-problems/tsp/): the problem, its assumptions, tours, the distance matrix and the instance of Example 6.1.

!!! chiave "Objectives"

    At the end of this chapter you will be able to:

    - write the ILP model of the Travelling Salesman Problem with the position variables of Miller-Tucker-Zemlin (MTZ) and explain how they eliminate subtours;

    - write the ILP model with the subtour elimination constraints of Dantzig-Fulkerson-Johnson (DFJ), and prove that it is correct;

    - count the variables and the constraints of the two models;

    - compare the LP relaxations of the two models on the same instance;

    - write the ILP model of the asymmetric TSP, and explain why the metric TSP has the same models as the TSP.

## 13.1 Overview of the family

- Given the set $\mathscr{V}=\{1,2,\dots,n\}$ of cities, the models of this chapter use the set of directed arcs

    $$
    A=\{(i,j):i,j\in\mathscr{V},~i\neq j\}.
    $$

    Each edge $\{i,j\}$ of the symmetric problem is represented by the two opposite arcs $(i,j)$ and $(j,i)$, which have the same cost $d_{ij}=d_{ji}$.

- The ILP models of the routing problems use one binary <strong>arc variable</strong> $x_{ij}$ for each arc $(i,j) \in A$, equal to $1$ if the tour goes from city $i$ to city $j$.

- The <strong>degree constraints</strong> impose that exactly one arc leaves and exactly one arc enters each city; the models differ in the constraints that eliminate the subtours.

!!! chiave ""

    The routing models are assignment models on the arcs, with the degree constraints, plus constraints that forbid the subtours. The objective function minimizes the total distance $\sum_{(i,j) \in A} d_{ij}\,x_{ij}$.

- The table lists the members of the family, with the names of their ILP models and the sections that write them.

<div class="tabella" markdown="0"><table>
<tr>
<th><strong>Problem</strong></th>
<th><strong>Model</strong></th>
<th><strong>Subtour elimination</strong></th>
<th><strong>Section</strong></th>
</tr>
<tr>
<td>TSP</td>
<td><span class="arithmatex">\(\mathrm{ILP}_{\mathrm{TSP}}^{\mathrm{MTZ}}\)</span></td>
<td>position variables <span class="arithmatex">\(u_i\)</span></td>
<td><a href="ilp-models-for-the-travelling-salesman-problem/#sez-sec-tspf-MTZ">13.3</a></td>
</tr>
<tr>
<td>TSP</td>
<td><span class="arithmatex">\(\mathrm{ILP}_{\mathrm{TSP}}^{\mathrm{DFJ}}\)</span></td>
<td>one constraint per subset of cities</td>
<td><a href="ilp-models-for-the-travelling-salesman-problem/#sez-sec-tspf-DFJ">13.4</a></td>
</tr>
<tr>
<td>metric TSP</td>
<td><span class="arithmatex">\(\mathrm{ILP}_{\mathrm{TSP}}^{\mathrm{MTZ}}\)</span>, <span class="arithmatex">\(\mathrm{ILP}_{\mathrm{TSP}}^{\mathrm{DFJ}}\)</span></td>
<td>the models of the TSP</td>
<td><a href="ilp-models-for-the-metric-and-asymmetric-tsp/#sez-sec-tspf-variants">13.6</a></td>
</tr>
<tr>
<td>ATSP</td>
<td><span class="arithmatex">\(\mathrm{ILP}_{\mathrm{ATSP}}\)</span></td>
<td>the constraints of the TSP models</td>
<td><a href="ilp-models-for-the-metric-and-asymmetric-tsp/#sez-sec-tspf-variants">13.6</a></td>
</tr>
</table></div>

<div class="grid cards sottopagine" markdown>

-   **Overview**

    Overview of the family

    [:octicons-arrow-right-24: Open](#131-overview-of-the-family)

-   **13.2 ILP models for the Travelling Salesman Problem**

    The assignment relaxation · The relaxation of the MTZ model · The relaxation of the DFJ model

    [:octicons-arrow-right-24: Open](ilp-models-for-the-travelling-salesman-problem.md)

-   **13.6 ILP models for the metric and asymmetric TSP**

    In summary

    [:octicons-arrow-right-24: Open](ilp-models-for-the-metric-and-asymmetric-tsp.md)

</div>

---

**Next:** [13.2 ILP models for the Travelling Salesman Problem](ilp-models-for-the-travelling-salesman-problem.md)

---

**Exercises on this chapter:** [:material-pencil: Routing problems](../../exercises/tsp-formulations.md)
