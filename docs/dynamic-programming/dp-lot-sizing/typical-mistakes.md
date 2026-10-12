---
title: "Typical mistakes · In summary"
---

# Typical mistakes · In summary

<div class="info-capitolo" markdown>

**Part 3 · Dynamic programming · Chapter 25** · [:material-book-open-variant: Chapter 25: Uncapacitated lot sizing (ULS)](index.md) · [:material-file-pdf-box: Lecture notes, volume 3 (PDF)](../../pdf/lecture-notes-3-dynamic-programming.pdf) · [:material-pencil: Exercises: Uncapacitated lot sizing (ULS)](../../exercises/dp-lot-sizing.md)

</div>

## 25.4 Typical mistakes

!!! attenzione "Warning"

    - <strong>Applying the zero-inventory ordering property with capacities.</strong> With capacities a period can produce while units are in stock: in Example 2 the unique optimal plan violates the property.

    - <strong>Computing the cost of a run from scratch.</strong> Computing every $c_{j,t}$ from its definition costs $O(m^3)$ steps inside the DP algorithm; the incremental computation of CostMatrix keeps $\Theta(m^2)$.

    - <strong>Forgetting the empty final inventory.</strong> The subinstance with periods $\{1,\dots,t\}$ ends with an empty inventory: this is why the run in period $j$ produces exactly $D_{j,t}$ units.

    - <strong>Reading one optimal plan as the only one.</strong> Example 1 has two optimal plans: the DP algorithm returns the one with the smallest period $j$, because it updates only on a strictly smaller value.

    - <strong>Calling $O(mDC)$ polynomial.</strong> The running time contains the total demand $D$ and the largest capacity $C$, which are numbers of the input: the DP algorithm is pseudo-polynomial.

## 25.5 In summary

!!! chiave "In summary"

    - If all costs are non-negative, the uncapacitated problem has an optimal plan in which a period produces only when the inventory is zero (Wagner and Whitin), so $x_j=D_{j,t}$ for every production run.

    - The cost $c_{j,t}$ of every run is computed in $\Theta(m^2)$ steps, and the recurrence $v(t)=\min_j\{v(j-1)+c_{j,t}\}$ gives the optimal value in $\Theta(m^2)$ steps; it is a shortest path.

    - With capacities the property fails: the state is the pair (period, final inventory), and the DP algorithm takes $O(mDC)$ steps, which is pseudo-polynomial.

    - With a constant capacity a weaker property holds, and the problem is polynomial; with general capacities it is NP-hard.

    <strong>Dashboard of the lot-sizing examples.</strong>

    <div class="tabella" markdown="0"><table>
    <tr>
    <th>Instance</th>
    <th>Lower bound</th>
    <th>Upper bound</th>
    <th>Origin</th>
    </tr>
    <tr>
    <td>Example 1 (uncapacitated, <span class="arithmatex">\(m=5\)</span>)</td>
    <td><span class="arithmatex">\(170\)</span></td>
    <td><span class="arithmatex">\(170\)</span></td>
    <td>DP algorithm of Wagner and Whitin</td>
    </tr>
    <tr>
    <td>Example 2 (capacitated, <span class="arithmatex">\(C=4\)</span>)</td>
    <td><span class="arithmatex">\(180\)</span></td>
    <td><span class="arithmatex">\(180\)</span></td>
    <td>DP algorithm on (period, inventory)</td>
    </tr>
    </table></div>

---

**Exercises on this chapter:** [:material-pencil: Uncapacitated lot sizing (ULS)](../../exercises/dp-lot-sizing.md)

