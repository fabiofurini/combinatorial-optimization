---
title: "Formulations of packing problems"
---

# Formulations of packing problems

<div class="info-capitolo" markdown>

**Part 2 · Formulations and their properties · Chapter 10** · [:material-file-pdf-box: Lecture notes, volume 2 (PDF)](../../pdf/lecture-notes-2-formulations.pdf) · [:material-pencil: Exercises: Packing problems](../../exercises/bin-packing-formulations.md)

</div>

!!! nota "Prerequisites"

    - From the module <em>Linear Programming</em>, [Chapter 9 «Duality theory»](https://fabiofurini.github.io/linear-programming/duality/09-duality/): the dual of an LP problem, weak and strong duality.

    - From the module <em>Integer linear programming</em>, [Chapter 1 «Integer linear programming»](https://fabiofurini.github.io/integer-linear-programming/models-and-bounds/ilp/) and [Chapter 2 «Primal and dual bounds»](https://fabiofurini.github.io/integer-linear-programming/models-and-bounds/lp-relaxation/): ILP problems, LP relaxations and bounds.

    - From this module, [Chapter 3 «Packing problems»](https://fabiofurini.github.io/combinatorial-optimization/combinatorial-optimization-problems/bin-packing/): the problem and its assumptions.

!!! chiave "Objectives"

    At the end of this chapter you will be able to:

    - write the ILP model of the Bin Packing Problem and explain the link between the assignment variables and the activation variables;

    - write the two LP relaxations and their duals, and prove that their optimal value is $\sum_{j} w_j / c$;

    - round the LP bound up to obtain a lower bound on the number of bins;

    - prove that the LP bound is at least one half of the optimal value, and that the factor is tight;

    - write the ILP model of the Cutting Stock Problem, with integer variables for the copies of the items.

## 10.1 Overview of the family

- The ILP models of the packing problems use an upper bound $m$ on the number of bins and the set $\mathscr{B} = \{1,2,\dots,m\}$ of the bins that may be used.

- The <strong>assignment variables</strong> $x_{jb}$ place the items $j \in \mathscr{I}$ into the bins $b \in \mathscr{B}$, and the binary <strong>activation variables</strong> $y_b$ say whether bin $b$ is used.

- Each bin gives one capacity constraint, which also links the two kinds of variables, and the objective function minimizes the number $\sum_{b \in \mathscr{B}} y_b$ of bins used.

!!! chiave ""

    The packing models are <strong>assignment models</strong>: every item, or every copy of an item, is assigned to a used bin, and the items assigned to a bin respect its capacity. The members of the family change the domain of the assignment variables.

- The table lists the members of the family, with the name of their ILP model and the section that writes it.

<div class="tabella" markdown="0"><table>
<tr>
<th><strong>Problem</strong></th>
<th><strong>Model</strong></th>
<th><strong>Assignment variables</strong></th>
<th><strong>Section</strong></th>
</tr>
<tr>
<td>BPP</td>
<td><span class="arithmatex">\(\mathrm{ILP}_{\mathrm{BPP}}\)</span></td>
<td>binary <span class="arithmatex">\(x_{jb}\)</span></td>
<td><a href="an-ilp-model-for-the-bin-packing-problem/#sez-sec-bpf-BPP">10.2</a></td>
</tr>
<tr>
<td>CSP</td>
<td><span class="arithmatex">\(\mathrm{ILP}_{\mathrm{CSP}}\)</span></td>
<td>integer <span class="arithmatex">\(x_{jb}\)</span>, the copies of item <span class="arithmatex">\(j\)</span> in bin <span class="arithmatex">\(b\)</span></td>
<td><a href="an-ilp-model-for-the-cutting-stock-problem/#sez-sec-bpf-CSP">10.5</a></td>
</tr>
</table></div>

<div class="grid cards sottopagine" markdown>

-   **Overview**

    Overview of the family

    [:octicons-arrow-right-24: Open](#101-overview-of-the-family)

-   **10.2 An ILP model for the Bin Packing Problem**

    Some important theoretical properties

    [:octicons-arrow-right-24: Open](an-ilp-model-for-the-bin-packing-problem.md)

-   **10.5 An ILP model for the Cutting Stock Problem**

    In summary

    [:octicons-arrow-right-24: Open](an-ilp-model-for-the-cutting-stock-problem.md)

</div>

---

**Next:** [10.2 An ILP model for the Bin Packing Problem](an-ilp-model-for-the-bin-packing-problem.md)

---

**Exercises on this chapter:** [:material-pencil: Packing problems](../../exercises/bin-packing-formulations.md)
