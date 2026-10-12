---
title: "Typical mistakes · In summary"
---

# Typical mistakes · In summary

<div class="info-capitolo" markdown>

**Part 3 · Dynamic programming · Chapter 18** · [:material-book-open-variant: Chapter 18: Unbounded knapsack (UKP)](index.md) · [:material-file-pdf-box: Lecture notes, volume 3 (PDF)](../../pdf/lecture-notes-3-dynamic-programming.pdf) · [:material-pencil: Exercises: Unbounded knapsack (UKP)](../../exercises/dp-unbounded-knapsack.md) · [:material-gesture-tap: App: DP tables for the knapsack problems](../../lab/dp-knapsack-table.md)

</div>

## 18.4 Typical mistakes

!!! attenzione "Warning"

    - <strong>Using row $j-1$ in the second recurrence.</strong> The term $p_j+v(j,k-w_j)$ refers to the same row $j$: this is what allows several copies of item type $j$.

    - <strong>Assuming that the capacity is filled.</strong> Part of the capacity may stay unused: when no item type fits, $v(k)=0$, not $-\infty$; in [Example 18.1](index.md#box-1-texukpex1), $v(1)=0$.

    - <strong>Reconstructing past the end.</strong> The reconstruction stops when the residual capacity is $0$, or when $s[k]=0$ in the first DP algorithm and $j=0$ in the second one; otherwise it reads outside the arrays.

    - <strong>Forgetting the base case.</strong> $v(0)=0$, and $v[0..c]$ has $c+1$ cells, not $c$.

## 18.5 In summary

!!! chiave "In summary"

    - In the UKP an item type can be used any number of times, so the optimal value depends only on the residual capacity: $v(k)=\max_{j:\,w_j\le k}\{p_j+v(k-w_j)\}$.

    - The first DP algorithm fills a vector of $c+1$ cells in $\Theta(nc)$ steps; the second one fills the matrix $v(j,k)$ and reuses the same row for further copies.

    - An optimal solution is read backwards from the information stored, stopping when the residual capacity is zero or unused.

    - The running time is pseudo-polynomial, as for the KP.

    <strong>Dashboard of the UKP example.</strong> [Example 18.1](index.md#box-1-texukpex1) ($c=7$, four item types):

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
    <td>optimal value, solution <span class="arithmatex">\((1,0,1,0)\)</span></td>
    </tr>
    </table></div>

---

**Exercises on this chapter:** [:material-pencil: Unbounded knapsack (UKP)](../../exercises/dp-unbounded-knapsack.md)

