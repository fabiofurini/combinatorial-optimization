---
title: "Formulations of scheduling problems"
---

# Formulations of scheduling problems

<div class="info-capitolo" markdown>

**Part 2 · Formulations and their properties · Chapter 14** · [:material-file-pdf-box: Lecture notes, volume 2 (PDF)](../../pdf/lecture-notes-2-formulations.pdf) · [:material-pencil: Exercises: Scheduling problems](../../exercises/pcmax-formulations.md)

</div>

!!! nota "Prerequisites"

    - From the module <em>Linear Programming</em>, [Chapter 9 «Duality theory»](https://fabiofurini.github.io/linear-programming/duality/09-duality/): the dual of an LP problem, weak and strong duality.

    - From the module <em>Integer linear programming</em>, [Chapter 1 «Integer linear programming»](https://fabiofurini.github.io/integer-linear-programming/models-and-bounds/ilp/) and [Chapter 2 «LP relaxation»](https://fabiofurini.github.io/integer-linear-programming/models-and-bounds/lp-relaxation/): ILP problems, LP relaxations and bounds.

    - From this module, [Chapter 7 «Scheduling problems»](https://fabiofurini.github.io/combinatorial-optimization/combinatorial-optimization-problems/pcmax/): the problem, its assumption, the makespan and the instance of Example 1.

!!! chiave "Objectives"

    At the end of this chapter you will be able to:

    - write the ILP model of $P\|C_{\max}$ and explain how the makespan variable is linked to the machine loads;

    - write the LP relaxations and their duals, and prove that their optimal value is $\sum_j t_j / m$;

    - prove that the LP bound is at least $1/m$ of the optimal value, and that the factor is tight;

    - use the valid inequalities and the symmetry-breaking constraints of the model.

## 14.1 Overview of the family

- The ILP models of the parallel machine scheduling problems use the set $\mathscr{H}=\{1,2,\ldots,m\}$ of the machines and one binary <strong>assignment variable</strong> $x_{jh}$ for each job $j \in \mathscr{J}$ and each machine $h \in \mathscr{H}$.

- One continuous variable $C_{\max}$ represents the makespan: one constraint for each machine imposes that $C_{\max}$ is at least the load of the machine.

- The objective function minimizes $C_{\max}$, so at the optimum it is equal to the largest load.

!!! chiave ""

    The scheduling models are assignment models of the jobs to the machines, as the packing models assign items to bins; the min-max objective is linearized with the makespan variable $C_{\max}$.

- The table lists the members of the family, with the name of their ILP model and the section that writes it.

<div class="tabella" markdown="0"><table>
<tr>
<th><strong>Problem</strong></th>
<th><strong>Model</strong></th>
<th><strong>Variables</strong></th>
<th><strong>Section</strong></th>
</tr>
<tr>
<td><span class="arithmatex">\(P\|C_{\max}\)</span></td>
<td><span class="arithmatex">\(\mathrm{ILP}_{P\|C_{\max}}\)</span></td>
<td>binary <span class="arithmatex">\(x_{jh}\)</span> and continuous <span class="arithmatex">\(C_{\max}\)</span></td>
<td><a href="an-ilp-model-for-the-scheduling-on-identical-parallel-machin/#sez-sec-pmf-PCmax">14.2</a></td>
</tr>
</table></div>

<div class="grid cards sottopagine" markdown>

-   **Definition**

    Overview of the family

    [:octicons-arrow-right-24: Open](#141-overview-of-the-family)

-   **14.2 An ILP model for the Scheduling on Identical Parallel Machines Problem**

    Some important theoretical properties

    [:octicons-arrow-right-24: Open](an-ilp-model-for-the-scheduling-on-identical-parallel-machin.md)

</div>

---

**Next:** [14.2 An ILP model for the Scheduling on Identical Parallel Machines Problem](an-ilp-model-for-the-scheduling-on-identical-parallel-machin.md)

---

**Exercises on this chapter:** [:material-pencil: Scheduling problems](../../exercises/pcmax-formulations.md)
