---
title: "Typical mistakes · In summary"
---

# Typical mistakes · In summary

<div class="info-capitolo" markdown>

**Part 3 · Dynamic programming · Chapter 17** · [:material-book-open-variant: Chapter 17: 0/1 knapsack (KP)](index.md) · [:material-file-pdf-box: Lecture notes, volume 3 (PDF)](../../pdf/lecture-notes-3-dynamic-programming.pdf) · [:material-presentation: Slides (1/2)](../../pdf/slides-dp-knapsack-1.pdf) · [:material-presentation: Slides (2/2)](../../pdf/slides-dp-knapsack-2.pdf) · [:material-pencil: Exercises: 0/1 knapsack (KP)](../../exercises/dp-knapsack.md) · [:material-gesture-tap: App: DP tables for the knapsack problems](../../lab/dp-knapsack-table.md)

</div>

## 17.4 Typical mistakes

!!! attenzione "Warning"

    - <strong>Updating the single vector in increasing order of capacity.</strong> The cell ${v}[k-w_j]$ would already contain row $j$, and item $j$ could be selected more than once; the capacities are scanned from $c$ downwards.

    - <strong>Forgetting the base cases.</strong> With no item available the optimal value is $0$ for every capacity: $v(0,k)=0$ for all $k \in \{0,1,\dots,c\}$, not only for $k=0$.

    - <strong>Reconstructing with the wrong index.</strong> At every step the item index decreases by one, while the capacity decreases by $w_j$ only if item $j$ is selected.

    - <strong>Calling $\Theta(nc)$ polynomial.</strong> The capacity $c$ is written with $\log c$ digits, so the running time is exponential in the size of the input.

    - <strong>Reading $u(n,q)$ as the optimal value.</strong> In the second DP algorithm $u(n,q)$ is a minimum weight; the optimal value is the largest $q$ with $u(n,q)\le c$.

## 17.5 In summary

!!! chiave "In summary"

    - The recurrence $v(j,k)$ chooses between leaving item $j$ out and taking it; it has the optimal substructure and overlapping subproblems.

    - The matrix is filled bottom-up in $\Theta(nc)$ steps; a single vector scanned downwards gives the optimal value with only $c+1$ cells.

    - An optimal solution comes from the matrix ${s}$ of the decisions, read backwards from $(n,c)$.

    - The running time $\Theta(nc)$ is pseudo-polynomial; the lists of non-dominated states store only the states that can be reached.

    - Exchanging profits and weights gives $\Theta(nP)$ steps, which is better when the total profit $P$ is small.

    <strong>Dashboard of the KP example.</strong> [Example 17.1](index.md#box-1-texexpbox1) ($c=5$, three items) with the bounds found so far:

    <div class="tabella" markdown="0"><table>
    <tr>
    <th>Method</th>
    <th>Lower bound</th>
    <th>Upper bound</th>
    <th>Origin</th>
    </tr>
    <tr>
    <td>DP algorithm</td>
    <td><span class="arithmatex">\(14\)</span></td>
    <td><span class="arithmatex">\(14\)</span></td>
    <td>optimal value, <span class="arithmatex">\(\Theta(nc)\)</span> steps</td>
    </tr>
    </table></div>

---

**Exercises on this chapter:** [:material-pencil: 0/1 knapsack (KP)](../../exercises/dp-knapsack.md)

