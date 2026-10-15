---
title: "DP for the unbounded knapsack problem"
---

# DP for the unbounded knapsack problem

<div class="info-capitolo" markdown>

**Part 3 · Dynamic programming · Chapter 18** · [:material-file-pdf-box: Lecture notes, volume 3 (PDF)](../../pdf/lecture-notes-3-dynamic-programming.pdf) · [:material-presentation: Slides](../../pdf/slides-dp-unbounded-knapsack.pdf) · [:material-pencil: Exercises: Unbounded knapsack (UKP)](../../exercises/dp-unbounded-knapsack.md) · [:material-gesture-tap: App: DP tables for the knapsack problems](../../lab/dp-knapsack-table.md)

</div>

!!! nota "Prerequisites"

    - From this module, the chapter [«DP for the 0/1 knapsack problem»](https://fabiofurini.github.io/combinatorial-optimization/dynamic-programming/dp-knapsack/): the recurrence $v(j,k)$ over items and capacities, and the reconstruction of a solution.

    - From this module, the chapter [«Principles of dynamic programming»](../dp-principles.md): optimal substructure, overlapping subproblems, base cases.

    - From the module <em>Algorithms</em>: [pseudocode conventions (Chapter 2)](https://fabiofurini.github.io/algorithms/basic-algorithms/02-pseudo-code/) and [the size of the input (Chapter 11)](https://fabiofurini.github.io/algorithms/analysis/11-input-size/).

!!! chiave "Objectives"

    At the end of this chapter you will be able to:

    - explain why the UKP differs from the 0/1 knapsack problem (KP), and write the recurrence $v(k)$ over the capacities only;

    - run the DP algorithm on the capacities and on the pairs (item type, capacity), by hand;

    - reconstruct an optimal solution, including the case in which part of the capacity is left unused;

    - count the steps of the two DP algorithms and compare them.

The problem of this chapter is the [unbounded knapsack problem (UKP)](https://fabiofurini.github.io/combinatorial-optimization/combinatorial-optimization-problems/knapsack/the-unbounded-knapsack-problem/): its definition and its assumptions are on its page.

## 18.1 Instances and feasible solutions

<a id="box-1-texukpex1"></a>

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

    We refer to this UKP instance as <span style="color:#1971c2">[Example 18.1](#box-1-texukpex1)</span>.

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

    The main difference with the KP is that the variables are no longer binary. In the UKP, each variable $x_j$ can take any non-negative integer value, provided that the capacity constraint is respected.

<div class="grid cards sottopagine" markdown>

-   **Overview**

    Instances and feasible solutions · Encoding of feasible solutions

    [:octicons-arrow-right-24: Open](#181-instances-and-feasible-solutions)

-   **18.2 A first DP algorithm**

    [:octicons-arrow-right-24: Open](a-first-dp-algorithm.md)

-   **18.3 A second DP algorithm**

    [:octicons-arrow-right-24: Open](a-second-dp-algorithm.md)

-   **Typical mistakes · In summary**

    In summary

    [:octicons-arrow-right-24: Open](typical-mistakes.md)

</div>

---

**Next:** [18.2 A first DP algorithm](a-first-dp-algorithm.md)

---

**Exercises on this chapter:** [:material-pencil: Unbounded knapsack (UKP)](../../exercises/dp-unbounded-knapsack.md)

<!-- laboratorio-interattivo: sezione generata da interattivi.py -->

:material-flask-outline: **In the interactive lab:** [DP tables for the knapsack problems](../../lab/dp-knapsack-table.md#voce=ukp).