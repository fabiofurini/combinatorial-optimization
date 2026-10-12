---
title: "Lot sizing problems"
---

# Lot sizing problems

<div class="info-capitolo" markdown>

**Part 1 · Combinatorial optimization problems · Chapter 8** · [:material-file-pdf-box: Lecture notes, volume 1 (PDF)](../../pdf/lecture-notes-1-combinatorial-optimization-problems.pdf) · [:material-pencil: Exercises: Lot sizing problems](../../exercises/lot-sizing.md)

</div>

!!! nota "Prerequisites"

    - From this module, the chapter «Combinatorial optimization problems»: what a combinatorial optimization problem is, the number of candidate solutions, and primal and dual bounds.

!!! chiave "Objectives"

    At the end of this chapter you will be able to:

    - describe a production plan by its quantities, stocks and setups, and compute its cost;

    - state the capacitated lot sizing problem and name its main variants;

    - decide whether a plan is feasible, and count the feasible setup choices of an instance;

    - build a first plan by hand, merging the demands of consecutive periods;

    - compute a lower bound on the cost from the number of setups that the total demand requires.

## 8.1 Overview of the family

- The <strong>lot sizing problems</strong> share the same data: a set $T = \{1,2,\dots,m\}$ of $m$ time periods and, for each period $t \in T$, a <em>demand</em> $d_t$, a production <em>capacity</em> and three costs: the setup cost $sc_t$, the variable production cost $vc_t$ and the holding cost $hc_t$.

- A solution is a <strong>production plan</strong>: the quantity produced in every period, which determines the stock at the end of each period and the periods with a setup.

- The objective is to satisfy all the demands at the minimum total cost of setups, production and holding.

!!! chiave ""

    A lot sizing problem balances the setup costs, paid in every period with production, against the holding costs of the stock. The members of the family differ in the capacities, in the number of products and in the way the demand and the capacity can be adjusted.

- The table lists the members of the family, with the section that defines each of them.

<div class="tabella" markdown="0"><table>
<tr>
<th><strong>Problem</strong></th>
<th><strong>Acronym</strong></th>
<th><strong>Difference with respect to the CLS</strong></th>
<th><strong>Section</strong></th>
</tr>
<tr>
<td>capacitated lot sizing problem</td>
<td>CLS</td>
<td>one product, capacities <span class="arithmatex">\(cap_t\)</span></td>
<td><a href="the-capacitated-lot-sizing-problem/#sez-sec-ls-CLS">8.2</a></td>
</tr>
<tr>
<td>uncapacitated lot sizing problem</td>
<td>ULS</td>
<td>no binding capacity</td>
<td><a href="variants/#sez-sec-ls-variants">8.6</a></td>
</tr>
<tr>
<td>several products and setup times</td>
<td></td>
<td>products sharing the time of each period</td>
<td><a href="variants/#sez-sec-ls-variants">8.6</a></td>
</tr>
<tr>
<td>initial stock</td>
<td></td>
<td>the initial stock is a decision</td>
<td><a href="variants/#sez-sec-ls-variants">8.6</a></td>
</tr>
<tr>
<td>overtime</td>
<td></td>
<td>extra capacity at a higher cost</td>
<td><a href="variants/#sez-sec-ls-variants">8.6</a></td>
</tr>
<tr>
<td>unsatisfied demand</td>
<td></td>
<td>part of the demand lost at a penalty</td>
<td><a href="variants/#sez-sec-ls-variants">8.6</a></td>
</tr>
</table></div>

<div class="grid cards sottopagine" markdown>

-   **Definition**

    Overview of the family

    [:octicons-arrow-right-24: Open](#81-overview-of-the-family)

-   **8.2 The capacitated lot sizing problem**

    Counting the solutions · A first plan by hand · A combinatorial lower bound

    [:octicons-arrow-right-24: Open](the-capacitated-lot-sizing-problem.md)

-   **8.6 Variants**

    Typical mistakes · In summary

    [:octicons-arrow-right-24: Open](variants.md)

</div>

---

**Next:** [8.2 The capacitated lot sizing problem](the-capacitated-lot-sizing-problem.md)

---

**Exercises on this chapter:** [:material-pencil: Lot sizing problems](../../exercises/lot-sizing.md)

---

**In depth:** [:material-star-outline: the course on this problem](../../selected-problems/lot-sizing.md)
