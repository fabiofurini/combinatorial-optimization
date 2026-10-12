---
title: "DP for the 0/1 knapsack problem"
---

# DP for the 0/1 knapsack problem

<div class="info-capitolo" markdown>

**Part 3 · Dynamic programming · Chapter 17** · [:material-file-pdf-box: Lecture notes, volume 3 (PDF)](../../pdf/lecture-notes-3-dynamic-programming.pdf) · [:material-pencil: Exercises: 0/1 knapsack (KP)](../../exercises/dp-knapsack.md) · [:material-gesture-tap: App: DP tables for the knapsack problems](../../lab/dp-knapsack-table.md)

</div>

!!! nota "Prerequisites"

    - From this module, the chapter [«Principles of dynamic programming»](../dp-principles.md): optimal substructure, overlapping subproblems, recurrence relations, base cases, and the top-down and bottom-up approaches.

    - From this module, the chapter [«Knapsack problems»](../../combinatorial-optimization-problems/knapsack/index.md): the 0/1 knapsack problem (KP), the binary encoding of a solution, and the $2^n$ subsets of items.

    - From the module <em>Algorithms</em>: how to read [pseudocode (Chapter 2)](https://fabiofurini.github.io/algorithms/basic-algorithms/02-pseudo-code/), and [the size of the input of an algorithm (Chapter 11)](https://fabiofurini.github.io/algorithms/analysis/11-input-size/) (needed to explain why $\Theta(nc)$ is pseudo-polynomial).

!!! nota "Where we were"

    - <strong>As a problem</strong>: the KP, its instances and the $2^n$ subsets (chapter [«Knapsack problems»](../../combinatorial-optimization-problems/knapsack/index.md)).

    - <strong>As a model</strong>: the ILP model, its LP relaxation and the dual bounds (chapter [«Formulations of knapsack problems»](../../formulations/knapsack-formulations/index.md)).

    - <strong>Now, as a table</strong>: the DP algorithm computes the optimal value exactly, with no model and no solver.

!!! chiave "Objectives"

    At the end of this chapter you will be able to:

    - write the recurrence $v(j,k)$ of the KP, explain why it is correct, and compute the table by hand with the top-down approach, the bottom-up approach and a single vector;

    - reconstruct an optimal solution from the matrix ${s}$ of the decisions;

    - count the steps of the DP algorithm and explain why $\Theta(nc)$ is pseudo-polynomial, not polynomial;

    - describe the states $(w,p)$, discard the dominated ones, and run the DP algorithm on lists of states;

    - exchange the roles of profits and weights, and compute the optimal value from the table $u(j,q)$.

The problem of this chapter is the [0/1 knapsack problem (KP)](https://fabiofurini.github.io/combinatorial-optimization/combinatorial-optimization-problems/knapsack/the-0-1-knapsack-problem/): its definition and its assumptions are on its page.

## 17.1 Instances and feasible solutions

<a id="box-1-texexpbox1"></a>

!!! esempio "Example 17.1: KP instance"

    We consider a knapsack of capacity $c = 5$ and a set $\{1,2,3\}$ of $3$ items ($n = 3$), with the following profits and weights:

    $$
    \begin{array}{l|rrr}
    \hline  & {j = 1} & {j = 2} & {j = 3} \\
    \hline {p_j} & {6} & {7} & {8} \\
    {w_j} & {2} & {3} & {3} \\
    \hline
    \end{array}
    $$

    We refer to this KP instance as <span style="color:#1971c2">[Example 17.1](#box-1-texexpbox1)</span>.

!!! chiave ""

    The number of possible subsets of items is $2^n$ since, for each item, there is an independent option of inserting it or not into the knapsack. Some subsets may not respect the knapsack capacity. Accordingly, the number of feasible solutions is at most $2^n$.

- The number of possible KP solutions grows exponentially with the number $n$ of items. Therefore, enumerating all possible solutions quickly becomes impractical as $n$ increases.

### 17.1.1 Encoding of feasible solutions

!!! chiave ""

    A <em>feasible solution</em> of the KP is a subset of items whose total weight does not exceed the knapsack capacity.

- A KP feasible solution can be described by the binary vector

    $$
    (x_1,x_2,\dots,x_n)
    $$

    where each component has the following meaning:

    $$
    x_j =
    \left\{
    \begin{array}{ll}
    1 & \textrm{if item } j \textrm{ is selected,}\\[1ex]
    0 & \textrm{otherwise,}
    \end{array}
    \right.
    \qquad \forall j \in \{1,2,\dots,n\}.
    $$

    Since the solution is feasible, the total weight of the selected items must not exceed the knapsack capacity:

    $$
    \sum_{j=1}^{n} w_j x_j \le c.
    $$

    The total profit of a feasible solution is

    $$
    \sum_{j=1}^{n} p_j x_j.
    $$

<a id="box-2-texexpbox2"></a>

!!! esempio "Example 17.2: Enumeration of all possible KP solutions"

    We consider the KP instance of <span style="color:#1971c2">[Example 17.1](#box-1-texexpbox1)</span> with a knapsack of capacity $c=5$ and the following profits and weights:

    $$
    \begin{array}{l|rrr}
    \hline  & {j = 1} & {j = 2} & {j = 3} \\
    \hline {p_j} & {6} & {7} & {8} \\
    {w_j} & {2} & {3} & {3} \\
    \hline
    \end{array}
    $$

    There are $2^3 = 8$ possible subsets of items, corresponding to the different ways of selecting or not selecting the items.

    In the following binary tree, each level corresponds to an item: an edge labeled $1$ means that the item is selected, while an edge labeled $0$ means that it is not selected. Each leaf represents one complete subset of items and reports the corresponding vector.

    ![Figure 1](../../img/dp-knapsack/fig01.svg){ .fig .ovale loading=lazy style="width:95%" }

    The figure below shows the subsets associated with the leaves of the tree, through the labels $(1),(2),\ldots,(8)$. For each selected item, the number written inside the parallelepiped is its weight, while the number above it is its profit. The width of each parallelepiped is proportional to the item weight. Subsets whose total weight exceeds the knapsack capacity are marked as not feasible.

    ![Figure 2](../../img/dp-knapsack/fig02.svg){ .fig .ovale loading=lazy style="width:100%" }

    <div class="tabella" markdown="0"><table>
    <tr>
    <th>Label</th>
    <th>Solution vector</th>
    <th>Total weight</th>
    <th>Total profit</th>
    <th>Feasible?</th>
    </tr>
    <tr>
    <td><span style="color:#1971c2"><span class="arithmatex">\((1)\)</span></span></td>
    <td><span class="arithmatex">\((0,0,0)\)</span></td>
    <td><span class="arithmatex">\(0\)</span></td>
    <td><span class="arithmatex">\(0\)</span></td>
    <td>yes</td>
    </tr>
    <tr>
    <td><span style="color:#1971c2"><span class="arithmatex">\((2)\)</span></span></td>
    <td><span class="arithmatex">\((1,0,0)\)</span></td>
    <td><span class="arithmatex">\(2\)</span></td>
    <td><span class="arithmatex">\(6\)</span></td>
    <td>yes</td>
    </tr>
    <tr>
    <td><span style="color:#1971c2"><span class="arithmatex">\((3)\)</span></span></td>
    <td><span class="arithmatex">\((0,1,0)\)</span></td>
    <td><span class="arithmatex">\(3\)</span></td>
    <td><span class="arithmatex">\(7\)</span></td>
    <td>yes</td>
    </tr>
    <tr>
    <td><span style="color:#1971c2"><span class="arithmatex">\((4)\)</span></span></td>
    <td><span class="arithmatex">\((0,0,1)\)</span></td>
    <td><span class="arithmatex">\(3\)</span></td>
    <td><span class="arithmatex">\(8\)</span></td>
    <td>yes</td>
    </tr>
    <tr>
    <td><span style="color:#1971c2"><span class="arithmatex">\((5)\)</span></span></td>
    <td><span class="arithmatex">\((1,1,0)\)</span></td>
    <td><span class="arithmatex">\(2+3=5\)</span></td>
    <td><span class="arithmatex">\(6+7=13\)</span></td>
    <td>yes</td>
    </tr>
    <tr>
    <td><span style="color:#1971c2"><span class="arithmatex">\((6)\)</span></span></td>
    <td><span class="arithmatex">\((1,0,1)\)</span></td>
    <td><span class="arithmatex">\(2+3=5\)</span></td>
    <td><span class="arithmatex">\(6+8=14\)</span></td>
    <td>yes</td>
    </tr>
    <tr>
    <td><span style="color:#1971c2"><span class="arithmatex">\((7)\)</span></span></td>
    <td><span class="arithmatex">\((0,1,1)\)</span></td>
    <td><span class="arithmatex">\(3+3=6\)</span></td>
    <td><span class="arithmatex">\(7+8=15\)</span></td>
    <td>no</td>
    </tr>
    <tr>
    <td><span style="color:#1971c2"><span class="arithmatex">\((8)\)</span></span></td>
    <td><span class="arithmatex">\((1,1,1)\)</span></td>
    <td><span class="arithmatex">\(2+3+3=8\)</span></td>
    <td><span class="arithmatex">\(6+7+8=21\)</span></td>
    <td>no</td>
    </tr>
    </table></div>

<div class="grid cards sottopagine" markdown>

-   **Overview**

    Instances and feasible solutions · Encoding of feasible solutions

    [:octicons-arrow-right-24: Open](#171-instances-and-feasible-solutions)

-   **17.2 A first DP algorithm**

    [:octicons-arrow-right-24: Open](a-first-dp-algorithm.md)

-   **17.2.2 A first DP algorithm: An implementation with lists**

    [:octicons-arrow-right-24: Open](a-first-dp-algorithm-an-implementation-with-lists.md)

-   **17.3 A second DP algorithm**

    [:octicons-arrow-right-24: Open](a-second-dp-algorithm.md)

-   **17.3.2 A second DP algorithm: An implementation with lists**

    [:octicons-arrow-right-24: Open](a-second-dp-algorithm-an-implementation-with-lists.md)

-   **Typical mistakes · In summary**

    In summary

    [:octicons-arrow-right-24: Open](typical-mistakes.md)

</div>

---

**Next:** [17.2 A first DP algorithm](a-first-dp-algorithm.md)

---

**Exercises on this chapter:** [:material-pencil: 0/1 knapsack (KP)](../../exercises/dp-knapsack.md)

<!-- laboratorio-interattivo: sezione generata da interattivi.py -->

:material-flask-outline: **In the interactive lab:** [DP tables for the knapsack problems](../../lab/dp-knapsack-table.md).