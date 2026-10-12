---
title: "Knapsack problems"
---

# Knapsack problems

<div class="info-capitolo" markdown>

**Part 1 · Combinatorial optimization problems · Chapter 2** · [:material-file-pdf-box: Lecture notes, volume 1 (PDF)](../../pdf/lecture-notes-1-combinatorial-optimization-problems.pdf) · [:material-pencil: Exercises: Knapsack problems](../../exercises/knapsack.md)

</div>

!!! nota "Prerequisites"

    - From this module, the chapter «Combinatorial optimization problems»: instances, feasible solutions, primal and dual bounds and the gap.

    - From the <em>Preliminaries</em>: subsets of a finite set and the number $2^n$ of subsets.

!!! chiave "Objectives"

    At the end of this chapter you will be able to:

    - state the definition of the 0/1 knapsack problem and of its variants, with instances and feasible solutions;

    - explain the assumptions on the data and why they can be made without loss of generality;

    - count the candidate solutions and the feasible solutions of a small instance;

    - find a feasible solution by hand and compute a simple combinatorial dual bound;

    - tell the variants apart: copies of the items, several resources, several knapsacks, classes of items.

## 2.1 Overview of the family

- The <strong>knapsack problems</strong> share the same data: a set $\mathscr{I} = \{1,2,\dots,n\}$ of $n$ items, for each item $j \in \mathscr{I}$ a <em>weight</em> $w_j \in \Z_{\ge 1}$ and a <em>profit</em> $p_j \in \Z_{\ge 1}$, and one or more knapsacks with a <em>capacity</em> in $\Z_{\ge 1}$.

- A solution decides which items are selected, or how many copies of each item: the total weight of the selected items must not exceed the capacity of the knapsack that receives them.

- The objective is to maximize the total profit of the selected items.

!!! chiave ""

    A knapsack problem selects items of maximum total profit whose total weight respects the capacities. The members of the family differ in the number of copies of the items, in the number of capacities and of knapsacks, and in the classes into which the items are grouped.

- The table lists the members of the family, with the section that defines each of them.

<div class="tabella" markdown="0"><table>
<tr>
<th><strong>Problem</strong></th>
<th><strong>Acronym</strong></th>
<th><strong>Difference with respect to the KP</strong></th>
<th><strong>Section</strong></th>
</tr>
<tr>
<td>0/1 knapsack problem</td>
<td>KP</td>
<td>one copy of each item, one knapsack</td>
<td><a href="the-0-1-knapsack-problem/#sez-sec-kp-KP">2.2</a></td>
</tr>
<tr>
<td>subset sum problem</td>
<td>SSP</td>
<td><span class="arithmatex">\(p_j = w_j\)</span>, total weight exactly equal to <span class="arithmatex">\(c\)</span></td>
<td><a href="the-subset-sum-problem/#sez-sec-kp-SSP">2.3</a></td>
</tr>
<tr>
<td>bounded knapsack problem</td>
<td>BKP</td>
<td>at most <span class="arithmatex">\(b_j\)</span> copies of item <span class="arithmatex">\(j\)</span></td>
<td><a href="the-bounded-knapsack-problem/#sez-sec-kp-BKP">2.4</a></td>
</tr>
<tr>
<td>unbounded knapsack problem</td>
<td>UKP</td>
<td>an unlimited number of copies of each item</td>
<td><a href="the-unbounded-knapsack-problem/#sez-sec-kp-UKP">2.5</a></td>
</tr>
<tr>
<td>multidimensional knapsack problem</td>
<td>MDKP</td>
<td><span class="arithmatex">\(k\)</span> capacities <span class="arithmatex">\(c_d\)</span> and weights <span class="arithmatex">\(w_{dj}\)</span></td>
<td><a href="the-multidimensional-knapsack-problem/#sez-sec-kp-MDKP">2.6</a></td>
</tr>
<tr>
<td>multiple knapsack problem</td>
<td>MKP</td>
<td><span class="arithmatex">\(m\)</span> knapsacks with capacities <span class="arithmatex">\(c_k\)</span></td>
<td><a href="the-multiple-knapsack-problem/#sez-sec-kp-MKP">2.7</a></td>
</tr>
<tr>
<td>multiple-choice knapsack problem</td>
<td>MCKP</td>
<td>classes <span class="arithmatex">\(\mathscr{J}_h\)</span>, exactly one item per class</td>
<td><a href="the-multiple-choice-knapsack-problem/#sez-sec-kp-MCKP">2.8</a></td>
</tr>
<tr>
<td>knapsack problem with setups</td>
<td>KPS</td>
<td>classes <span class="arithmatex">\(\mathscr{J}_h\)</span> with setup costs <span class="arithmatex">\(f_h\)</span> and setup weights <span class="arithmatex">\(s_h\)</span></td>
<td><a href="the-knapsack-problem-with-setups/#sez-sec-kp-KPS">2.9</a></td>
</tr>
</table></div>

<div class="grid cards sottopagine" markdown>

-   **Definition**

    Overview of the family

    [:octicons-arrow-right-24: Open](#21-overview-of-the-family)

-   **2.2 The 0/1 knapsack problem**

    Counting the solutions, a first solution and a simple bound

    [:octicons-arrow-right-24: Open](the-0-1-knapsack-problem.md)

-   **2.3 The subset sum problem**

    [:octicons-arrow-right-24: Open](the-subset-sum-problem.md)

-   **2.4 The bounded knapsack problem**

    [:octicons-arrow-right-24: Open](the-bounded-knapsack-problem.md)

-   **2.5 The unbounded knapsack problem**

    [:octicons-arrow-right-24: Open](the-unbounded-knapsack-problem.md)

-   **2.6 The multidimensional knapsack problem**

    [:octicons-arrow-right-24: Open](the-multidimensional-knapsack-problem.md)

-   **2.7 The multiple knapsack problem**

    [:octicons-arrow-right-24: Open](the-multiple-knapsack-problem.md)

-   **2.8 The multiple-choice knapsack problem**

    [:octicons-arrow-right-24: Open](the-multiple-choice-knapsack-problem.md)

-   **2.9 The knapsack problem with setups**

    The variants at a glance · Remarks · Typical mistakes · In summary

    [:octicons-arrow-right-24: Open](the-knapsack-problem-with-setups.md)

</div>

---

**Next:** [2.2 The 0/1 knapsack problem](the-0-1-knapsack-problem.md)

---

**Exercises on this chapter:** [:material-pencil: Knapsack problems](../../exercises/knapsack.md)

---

**In depth:** [:material-star-outline: the course on this problem](../../selected-problems/knapsack.md)
