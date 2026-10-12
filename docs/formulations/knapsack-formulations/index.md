---
title: "Formulations of knapsack problems"
---

# Formulations of knapsack problems

<div class="info-capitolo" markdown>

**Part 2 · Formulations and their properties · Chapter 9** · [:material-file-pdf-box: Lecture notes, volume 2 (PDF)](../../pdf/lecture-notes-2-formulations.pdf) · [:material-pencil: Exercises: Knapsack problems](../../exercises/knapsack-formulations.md)

</div>

!!! nota "Prerequisites"

    - From the module <em>Linear Programming</em>, [Chapter 9 «Duality theory»](https://fabiofurini.github.io/linear-programming/duality/09-duality/): the dual of an LP problem, weak and strong duality.

    - From the module <em>Integer linear programming</em>, [Chapter 1 «Integer linear programming»](https://fabiofurini.github.io/integer-linear-programming/models-and-bounds/ilp/) and [Chapter 2 «Primal and dual bounds»](https://fabiofurini.github.io/integer-linear-programming/models-and-bounds/lp-relaxation/): ILP problems, LP relaxations and upper bounds.

    - From this module, [Chapter 2 «Knapsack problems»](https://fabiofurini.github.io/combinatorial-optimization/combinatorial-optimization-problems/knapsack/): the 0/1 knapsack problem and its variants, their assumptions and their reference instances.

!!! chiave "Objectives"

    At the end of this chapter you will be able to:

    - write the ILP model of the 0/1 Knapsack Problem and explain each of its constraints;

    - write the ILP models of the SSP, the BKP, the UKP, the MDKP, the MKP, the MCKP and the KPS, and write them on a numerical instance;

    - write the two LP relaxations and their duals, and compute their optimal solutions with closed formulas;

    - compute the split item, the residual capacity and the value $z(\mathrm{LP}_{\mathrm{KP}})$;

    - compute the Dantzig and the Martello-Toth upper bounds, rounding them correctly;

    - explain why $z(\mathrm{LP}_{\mathrm{KP}})$ is never larger than twice $z(\mathrm{ILP}_{\mathrm{KP}})$.

## 9.1 Overview of the family

- The ILP models of the knapsack problems use one variable $x_j$ for each item $j \in \mathscr{I}$: a <strong>binary variable</strong> when the item is selected or not, an <strong>integer variable</strong> when it counts the selected copies of the item.

- Each capacity gives one <strong>knapsack constraint</strong> on the total weight of the selected items, and the objective function maximizes their total profit.

- The members of the family add an index to the variables (the knapsack $k$ of item $j$ in the MKP), some constraints on the classes of items (MCKP, KPS) or binary setup variables $y_h$ (KPS).

!!! chiave ""

    The common pattern of the knapsack models is

    $$
    \max \Big\{ \sum_{j \in \mathscr{I}} p_j \, x_j \;:\; \sum_{j \in \mathscr{I}} w_j \, x_j \le c,~~ x_j \in D_j~~ \forall j \in \mathscr{I} \Big\},
    $$

    where the domain $D_j$ is $\{0,1\}$, $\{0,1,\dots,b_j\}$ or $\Z_{\ge 0}$. The members of the family change the domains and add capacities, knapsacks or classes.

- The table lists the members of the family, with the name of their ILP model and the section that writes it.

<div class="tabella" markdown="0"><table>
<tr>
<th><strong>Problem</strong></th>
<th><strong>Model</strong></th>
<th><strong>Variables</strong></th>
<th><strong>Section</strong></th>
</tr>
<tr>
<td>KP</td>
<td><span class="arithmatex">\(\mathrm{ILP}_{\mathrm{KP}}\)</span></td>
<td>binary <span class="arithmatex">\(x_j\)</span></td>
<td><a href="an-ilp-model-for-the-0-1-knapsack-problem/#sez-sec-kpf-KP">9.2</a></td>
</tr>
<tr>
<td>SSP</td>
<td><span class="arithmatex">\(\mathrm{ILP}_{\mathrm{SSP}}\)</span></td>
<td>binary <span class="arithmatex">\(x_j\)</span></td>
<td><a href="an-ilp-model-for-the-subset-sum-problem/#sez-sec-kpf-SSP">9.6</a></td>
</tr>
<tr>
<td>BKP</td>
<td><span class="arithmatex">\(\mathrm{ILP}_{\mathrm{BKP}}\)</span></td>
<td>integer <span class="arithmatex">\(x_j \in \{0,1,\dots,b_j\}\)</span></td>
<td><a href="an-ilp-model-for-the-bounded-knapsack-problem/#sez-sec-kpf-BKP">9.7</a></td>
</tr>
<tr>
<td>UKP</td>
<td><span class="arithmatex">\(\mathrm{ILP}_{\mathrm{UKP}}\)</span></td>
<td>integer <span class="arithmatex">\(x_j \in \Z_{\ge 0}\)</span></td>
<td><a href="an-ilp-model-for-the-unbounded-knapsack-problem/#sez-sec-kpf-UKP">9.8</a></td>
</tr>
<tr>
<td>MDKP</td>
<td><span class="arithmatex">\(\mathrm{ILP}_{\mathrm{MDKP}}\)</span></td>
<td>binary <span class="arithmatex">\(x_j\)</span>, one constraint per capacity</td>
<td><a href="an-ilp-model-for-the-multidimensional-knapsack-problem/#sez-sec-kpf-MDKP">9.9</a></td>
</tr>
<tr>
<td>MKP</td>
<td><span class="arithmatex">\(\mathrm{ILP}_{\mathrm{MKP}}\)</span></td>
<td>binary <span class="arithmatex">\(x_{jk}\)</span>, item <span class="arithmatex">\(j\)</span> in knapsack <span class="arithmatex">\(k\)</span></td>
<td><a href="an-ilp-model-for-the-multiple-knapsack-problem/#sez-sec-kpf-MKP">9.10</a></td>
</tr>
<tr>
<td>MCKP</td>
<td><span class="arithmatex">\(\mathrm{ILP}_{\mathrm{MCKP}}\)</span></td>
<td>binary <span class="arithmatex">\(x_j\)</span>, one item per class</td>
<td><a href="an-ilp-model-for-the-multiple-choice-knapsack-problem/#sez-sec-kpf-MCKP">9.11</a></td>
</tr>
<tr>
<td>KPS</td>
<td><span class="arithmatex">\(\mathrm{ILP}_{\mathrm{KPS}}\)</span></td>
<td>binary <span class="arithmatex">\(x_j\)</span> and setup variables <span class="arithmatex">\(y_h\)</span></td>
<td><a href="an-ilp-model-for-the-knapsack-problem-with-setups/#sez-sec-kpf-KPS">9.12</a></td>
</tr>
</table></div>

<div class="grid cards sottopagine" markdown>

-   **Overview**

    Overview of the family

    [:octicons-arrow-right-24: Open](#91-overview-of-the-family)

-   **9.2 An ILP model for the 0/1 Knapsack Problem**

    Item efficiency · Split item and residual capacity · Some important theoretical properties

    [:octicons-arrow-right-24: Open](an-ilp-model-for-the-0-1-knapsack-problem.md)

-   **9.6 An ILP model for the Subset Sum Problem**

    [:octicons-arrow-right-24: Open](an-ilp-model-for-the-subset-sum-problem.md)

-   **9.7 An ILP model for the Bounded Knapsack Problem**

    [:octicons-arrow-right-24: Open](an-ilp-model-for-the-bounded-knapsack-problem.md)

-   **9.8 An ILP model for the Unbounded Knapsack Problem**

    [:octicons-arrow-right-24: Open](an-ilp-model-for-the-unbounded-knapsack-problem.md)

-   **9.9 An ILP model for the Multidimensional Knapsack Problem**

    [:octicons-arrow-right-24: Open](an-ilp-model-for-the-multidimensional-knapsack-problem.md)

-   **9.10 An ILP model for the Multiple Knapsack Problem**

    [:octicons-arrow-right-24: Open](an-ilp-model-for-the-multiple-knapsack-problem.md)

-   **9.11 An ILP model for the Multiple-Choice Knapsack Problem**

    [:octicons-arrow-right-24: Open](an-ilp-model-for-the-multiple-choice-knapsack-problem.md)

-   **9.12 An ILP model for the Knapsack Problem with Setups**

    In summary

    [:octicons-arrow-right-24: Open](an-ilp-model-for-the-knapsack-problem-with-setups.md)

</div>

---

**Next:** [9.2 An ILP model for the 0/1 Knapsack Problem](an-ilp-model-for-the-0-1-knapsack-problem.md)

---

**Exercises on this chapter:** [:material-pencil: Knapsack problems](../../exercises/knapsack-formulations.md)
