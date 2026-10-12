---
title: "Typical mistakes · In summary"
---

# Typical mistakes · In summary

<div class="info-capitolo" markdown>

**Part 3 · Dynamic programming · Chapter 25** · [:material-book-open-variant: Chapter 25: Uncapacitated lot sizing (ULS)](index.md) · [:material-file-pdf-box: Lecture notes, volume 3 (PDF)](../../pdf/lecture-notes-3-dynamic-programming.pdf) · [:material-pencil: Exercises: Uncapacitated lot sizing (ULS)](../../exercises/dp-lot-sizing.md) · [:material-gesture-tap: App: Wagner-Whitin for uncapacitated lot sizing](../../lab/wagner-whitin-lot-sizing.md)

</div>

## 25.3 Typical mistakes

!!! attenzione "Warning"

    - <strong>Applying the zero-inventory ordering property with capacities.</strong> The proof moves production between two periods without limits: with capacities a period can produce while units are in stock.

    - <strong>Computing the cost of a run from scratch.</strong> Computing every $c_{j,t}$ from its definition costs $O(m^3)$ steps inside the DP algorithm; the incremental computation of CostMatrix keeps $\Theta(m^2)$.

    - <strong>Forgetting the empty final inventory.</strong> The subinstance with periods $\{1,\dots,t\}$ ends with an empty inventory: this is why the run in period $j$ produces exactly $D_{j,t}$ units.

    - <strong>Reading one optimal plan as the only one.</strong> [Example 25.1](index.md#box-1-texuls1) has two optimal plans: the DP algorithm returns the one with the smallest period $j$, because it updates only on a strictly smaller value.

## 25.4 In summary

!!! chiave "In summary"

    - If all costs are non-negative, the uncapacitated problem has an optimal plan in which a period produces only when the inventory is zero (Wagner and Whitin), so $x_j=D_{j,t}$ for every production run.

    - The cost $c_{j,t}$ of every run is computed in $\Theta(m^2)$ steps, and the recurrence $v(t)=\min_j\{v(j-1)+c_{j,t}\}$ gives the optimal value in $\Theta(m^2)$ steps; it is a shortest path.

    - The zero-inventory ordering property rests on production without limits: with capacities it fails.

    <strong>Dashboard of the example.</strong>

    <div class="tabella" markdown="0"><table>
    <tr>
    <th>Instance</th>
    <th>Lower bound</th>
    <th>Upper bound</th>
    <th>Origin</th>
    </tr>
    <tr>
    <td><a href="../#box-1-texuls1">Example 25.1</a> (uncapacitated, <span class="arithmatex">\(m=5\)</span>)</td>
    <td><span class="arithmatex">\(170\)</span></td>
    <td><span class="arithmatex">\(170\)</span></td>
    <td>DP algorithm of Wagner and Whitin</td>
    </tr>
    </table></div>

---

**Exercises on this chapter:** [:material-pencil: Uncapacitated lot sizing (ULS)](../../exercises/dp-lot-sizing.md)

