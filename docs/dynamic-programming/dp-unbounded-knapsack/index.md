---
title: "DP for the unbounded knapsack problem"
---

# DP for the unbounded knapsack problem

<div class="info-capitolo" markdown>

**Part 3 · Dynamic programming · Chapter 18** · [:material-file-pdf-box: Lecture notes, volume 3 (PDF)](../../pdf/lecture-notes-3-dynamic-programming.pdf) · [:material-pencil: Exercises: UKP](../../exercises/dp-unbounded-knapsack.md)

</div>

!!! nota "Prerequisites"

    - From this module, the chapter [«DP for the knapsack problem»](https://fabiofurini.github.io/combinatorial-optimization/dynamic-programming/dp-knapsack/): the recurrence $v(j,k)$ over items and capacities, and the reconstruction of a solution.

    - From this module, the chapter «Principles of dynamic programming»: optimal substructure, overlapping subproblems, base cases.

    - From the module <em>Algorithms</em>: [pseudocode conventions (Chapter 2)](https://fabiofurini.github.io/algorithms/basic-algorithms/02-pseudo-code/) and [the size of the input (Chapter 11)](https://fabiofurini.github.io/algorithms/analysis/11-input-size/).

!!! chiave "Objectives"

    At the end of this chapter you will be able to:

    - explain why the UKP differs from the KP, and write the recurrence $v(k)$ over the capacities only;

    - run the DP algorithm on the capacities and on the pairs (item type, capacity), by hand;

    - reconstruct an optimal solution, including the case in which part of the capacity is left unused;

    - count the steps of the two DP algorithms and compare them.

<div class="grid cards sottopagine" markdown>

-   **Overview**

    Problem definition

    [:octicons-arrow-right-24: Open](#181-problem-definition)

-   **18.2 A first DP algorithm**

    [:octicons-arrow-right-24: Open](a-first-dp-algorithm.md)

-   **18.3 A second DP algorithm**

    [:octicons-arrow-right-24: Open](a-second-dp-algorithm.md)

-   **Typical mistakes · In summary**

    [:octicons-arrow-right-24: Open](typical-mistakes.md)

</div>

## 18.1 Problem definition

<a id="box-1-defUKP"></a>

!!! definizione "Definition 18.1: Unbounded Knapsack Problem"

    Given:

    1. a knapsack of <em>capacity</em> $c \in \Z_{\ge 1}$,

    2. a set $\mathscr{I} = \{1,2,\dots,n\}$ of $n$ item types,

    3. for each item type $j \in \mathscr{I}$, a <em>profit</em> $p_j \in \Z_{\ge 1}$ and a <em>weight</em> $w_j \in \Z_{\ge 1}$,

    the <strong>Unbounded Knapsack Problem</strong> (UKP) asks to decide how many copies of each item type to insert into the knapsack, so that the total weight does not exceed the capacity and the total profit is maximized. Each item type is available in infinitely many copies.

<a id="box-2-texukpex1"></a>

!!! esempio "Example 18.1: UKP instance"

    We consider a knapsack of capacity $c=7$ and $4$ item types, with the following profits and weights:

    $$
    \begin{array}{l|rrrr}
    \hline  & {j=1} & {j=2} & {j=3} & {j=4} \\
    \hline {p_j} & 4 & 5 & 10 & 11 \\
    {w_j} & 2 & 3 & 5 & 6 \\
    \hline
    \end{array}
    $$

    We refer to this UKP instance as <span style="color:#1971c2">Example 1</span>.

!!! chiave ""

    For each item type $j$, a feasible solution can use at most $\lfloor c/w_j \rfloor$ copies of item type $j$, since using more copies would already exceed the capacity $c$ with item type $j$ alone. Accordingly, the number of feasible solutions is at most $\prod_{j=1}^{n}\big(\lfloor c/w_j \rfloor+1\big)$.

- The number of possible UKP solutions grows quickly with the number $n$ of item types and the capacity $c$, since each variable $x_j$ can independently take any of $\lfloor c/w_j \rfloor+1$ values. Therefore, enumerating all possible solutions quickly becomes impractical as $n$ or $c$ increases.

### 18.1.1 Encoding of feasible solutions

A feasible solution is described by the integer vector

$$
(x_1,x_2,\dots,x_n),
$$

where $x_j\in\Z_{\ge 0}$ is the number of copies of item type $j$ selected. The solution is feasible if

$$
\sum_{j=1}^{n} w_j x_j \le c.
$$

Its total profit is

$$
\sum_{j=1}^{n} p_j x_j.
$$

!!! chiave ""

    The main difference with the $0$–$1$ Knapsack Problem is that the variables are no longer binary. In UKP, each variable $x_j$ can take any non-negative integer value, provided that the capacity constraint is respected.

---

**Next:** [18.2 A first DP algorithm](a-first-dp-algorithm.md)

---

**Exercises on this chapter:** [:material-pencil: UKP](../../exercises/dp-unbounded-knapsack.md)
