---
title: "Formulations of lot sizing problems"
---

# Formulations of lot sizing problems

<div class="info-capitolo" markdown>

**Part 2 · Formulations and their properties · Chapter 15** · [:material-file-pdf-box: Lecture notes, volume 2 (PDF)](../../pdf/lecture-notes-2-formulations.pdf) · [:material-pencil: Exercises: Lot sizing problems](../../exercises/lot-sizing-formulations.md)

</div>

!!! nota "Prerequisites"

    - From the module <em>Integer linear programming</em>, [Chapter 1 «Integer linear programming»](https://fabiofurini.github.io/integer-linear-programming/models-and-bounds/ilp/) and [Chapter 2 «Primal and dual bounds»](https://fabiofurini.github.io/integer-linear-programming/models-and-bounds/lp-relaxation/): ILP problems, LP relaxations and lower bounds.

    - From this module, [Chapter 8 «Lot sizing problems»](https://fabiofurini.github.io/combinatorial-optimization/combinatorial-optimization-problems/lot-sizing/): the problem, its assumptions, the plans and the reference instance.

!!! chiave "Objectives"

    At the end of this chapter you will be able to:

    - write the big-M formulation of the capacitated lot sizing problem and compute a weak and a strong big-M value;

    - write the shortest-path formulation and interpret its variables as the arcs of a network;

    - represent a production plan as a combination of paths of the network;

    - compare the LP bounds of the formulations on the reference instance;

    - write the ILP model of the uncapacitated lot sizing problem;

    - extend the big-M formulation to several products with setup times, to the initial stock, to overtime and to unsatisfied demand, and compute the strong big-M values of each model.

## 15.1 Overview of the family

- The big-$M$ models of the lot sizing problems use, for every period $t \in T$, an integer <strong>production variable</strong> $x_t$, an integer <strong>inventory variable</strong> $s_t$ and a binary <strong>setup variable</strong> $y_t$.

- The <strong>flow balancing constraints</strong> link the inventories of consecutive periods to the production and to the demand; the setup variables are linked to the production by big-$M$ constraints.

- The objective function minimizes the total cost of setups, production and holding. The shortest-path formulation of the CLS replaces the production and inventory variables with the arcs of a network.

!!! chiave ""

    The lot sizing models are flow models over the periods, with binary setup variables that switch the production on. The members of the family add products, setup times, an initial stock, overtime or unsatisfied demand to the same balance and big-$M$ constraints.

- The table lists the members of the family, with the names of their models and the sections that write them.

<div class="tabella" markdown="0"><table>
<tr>
<th><strong>Problem</strong></th>
<th><strong>Models</strong></th>
<th><strong>Formulation</strong></th>
<th><strong>Section</strong></th>
</tr>
<tr>
<td>CLS</td>
<td><span class="arithmatex">\(\mathrm{ILP}_{\mathrm{CLSP}}\)</span></td>
<td>big-<span class="arithmatex">\(M\)</span> formulation</td>
<td><a href="ilp-models-for-the-capacitated-lot-sizing-problem/#sez-sec-lsf-bigM">15.3</a></td>
</tr>
<tr>
<td>CLS</td>
<td><span class="arithmatex">\(\mathrm{MIP}^{\mathrm{SP}}_{\mathrm{CLSP}}\)</span></td>
<td>shortest-path formulation</td>
<td><a href="ilp-models-for-the-capacitated-lot-sizing-problem/#sez-sec-lsf-SP">15.5</a></td>
</tr>
<tr>
<td>ULS</td>
<td><span class="arithmatex">\(\mathrm{ILP}_{\mathrm{ULS}}\)</span></td>
<td>big-<span class="arithmatex">\(M\)</span>, no capacity</td>
<td><a href="ilp-models-for-the-variants/#sez-sec-lsf-variants">15.7</a></td>
</tr>
<tr>
<td>MLS</td>
<td><span class="arithmatex">\(\mathrm{ILP}_{\mathrm{CLSP}}^{P}\)</span></td>
<td>big-<span class="arithmatex">\(M\)</span>, setup times</td>
<td><a href="ilp-models-for-the-variants/#sez-sec-lsf-variants">15.7</a></td>
</tr>
<tr>
<td>LS-SI</td>
<td><span class="arithmatex">\(\mathrm{ILP}_{\mathrm{CLSP}}^{\mathrm{SI}}\)</span></td>
<td>big-<span class="arithmatex">\(M\)</span>, initial stock variables</td>
<td><a href="ilp-models-for-the-variants/#sez-sec-lsf-variants">15.7</a></td>
</tr>
<tr>
<td>LS-OT</td>
<td><span class="arithmatex">\(\mathrm{ILP}_{\mathrm{CLSP}}^{\mathrm{OT}}\)</span></td>
<td>big-<span class="arithmatex">\(M\)</span>, overtime variables</td>
<td><a href="ilp-models-for-the-variants/#sez-sec-lsf-variants">15.7</a></td>
</tr>
<tr>
<td>LS-UD</td>
<td><span class="arithmatex">\(\mathrm{ILP}_{\mathrm{CLSP}}^{\mathrm{UD}}\)</span></td>
<td>big-<span class="arithmatex">\(M\)</span>, unsatisfied demand variables</td>
<td><a href="ilp-models-for-the-variants/#sez-sec-lsf-variants">15.7</a></td>
</tr>
</table></div>

<div class="grid cards sottopagine" markdown>

-   **Overview**

    Overview of the family

    [:octicons-arrow-right-24: Open](#151-overview-of-the-family)

-   **15.2 ILP models for the Capacitated Lot Sizing Problem**

    Weak and strong big-M values

    [:octicons-arrow-right-24: Open](ilp-models-for-the-capacitated-lot-sizing-problem.md)

-   **15.7 ILP models for the variants**

    Several products and setup times · Initial stock · Overtime · Unsatisfied demand · Typical mistakes

    [:octicons-arrow-right-24: Open](ilp-models-for-the-variants.md)

</div>

---

**Next:** [15.2 ILP models for the Capacitated Lot Sizing Problem](ilp-models-for-the-capacitated-lot-sizing-problem.md)

---

**Exercises on this chapter:** [:material-pencil: Lot sizing problems](../../exercises/lot-sizing-formulations.md)
