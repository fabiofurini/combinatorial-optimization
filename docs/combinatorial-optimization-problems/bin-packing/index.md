---
title: "Packing problems"
---

# Packing problems

<div class="info-capitolo" markdown>

**Part 1 · Combinatorial optimization problems · Chapter 3** · [:material-file-pdf-box: Lecture notes, volume 1 (PDF)](../../pdf/lecture-notes-1-combinatorial-optimization-problems.pdf) · [:material-pencil: Exercises: Packing problems](../../exercises/bin-packing.md)

</div>

!!! nota "Prerequisites"

    - From this module, [Chapter 1 «Combinatorial optimization problems»](https://fabiofurini.github.io/combinatorial-optimization/combinatorial-optimization-problems/combinatorial-optimization/): instances, feasible solutions, primal and dual bounds, the gap, and the Bell numbers that count the partitions of a set.

    - From this module, [Chapter 2 «Knapsack problems»](https://fabiofurini.github.io/combinatorial-optimization/combinatorial-optimization-problems/knapsack/): the form of the definitions and of the assumptions on the data.

!!! chiave "Objectives"

    At the end of this chapter you will be able to:

    - state the definition of the bin packing problem and of the cutting stock problem, with instances and feasible solutions;

    - explain the assumptions on the data;

    - count the candidate solutions of a small instance and recognize that they are partitions;

    - find a feasible solution by hand and compute the weight bound;

    - use the two bounds to certify that a solution is optimal.

## 3.1 Overview of the family

- The <strong>packing problems</strong> share the same data: an infinite number of identical bins of <em>capacity</em> $c \in \Z_{\ge 1}$, a set $\mathscr{I} = \{1,2,\dots,n\}$ of $n$ items and, for each item $j \in \mathscr{I}$, a <em>weight</em> $w_j \in \Z_{\ge 1}$.

- A solution assigns every item, or every required copy of an item, to a bin: the total weight of the items in a bin must not exceed the capacity $c$.

- The objective is to minimize the number of bins used.

!!! chiave ""

    A packing problem places all the items into the fewest bins of capacity $c$. The members of the family differ in the number of copies of each item that must be packed.

- The table lists the members of the family, with the section that defines each of them.

<div class="tabella" markdown="0"><table>
<tr>
<th><strong>Problem</strong></th>
<th><strong>Acronym</strong></th>
<th><strong>Items to pack</strong></th>
<th><strong>Section</strong></th>
</tr>
<tr>
<td>bin packing problem</td>
<td>BPP</td>
<td>one copy of each item</td>
<td><a href="the-bin-packing-problem/#sez-sec-bp-BPP">3.2</a></td>
</tr>
<tr>
<td>cutting stock problem</td>
<td>CSP</td>
<td><span class="arithmatex">\(d_j\)</span> copies of item <span class="arithmatex">\(j\)</span></td>
<td><a href="the-cutting-stock-problem/#sez-sec-bp-CSP">3.3</a></td>
</tr>
</table></div>

<div class="grid cards sottopagine" markdown>

-   **Overview**

    Overview of the family

    [:octicons-arrow-right-24: Open](#31-overview-of-the-family)

-   **3.2 The bin packing problem**

    Counting the solutions, a first solution and a simple bound

    [:octicons-arrow-right-24: Open](the-bin-packing-problem.md)

-   **3.3 The cutting stock problem**

    Counting the solutions, a first solution and a simple bound · Remarks · Typical mistakes · In summary

    [:octicons-arrow-right-24: Open](the-cutting-stock-problem.md)

</div>

---

**Next:** [3.2 The bin packing problem](the-bin-packing-problem.md)

---

**Exercises on this chapter:** [:material-pencil: Packing problems](../../exercises/bin-packing.md)

---

**In depth:** [:material-view-list: what the course does on this problem](../../catalogue/bin-packing-problem.md)
