---
title: "Typical mistakes · In summary"
---

# Typical mistakes · In summary

<div class="info-capitolo" markdown>

**Part 3 · Dynamic programming · Chapter 28** · [:material-book-open-variant: Chapter 28: Rod cutting (RCP)](index.md) · [:material-file-pdf-box: Lecture notes, volume 3 (PDF)](../../pdf/lecture-notes-3-dynamic-programming.pdf) · [:material-presentation: Slides](../../pdf/slides-dp-rod-cutting.pdf) · [:material-pencil: Exercises: Rod cutting (RCP)](../../exercises/dp-rod-cutting.md)

</div>

## 28.4 Typical mistakes

!!! attenzione "Warning"

    - <strong>Counting vectors instead of cutting patterns.</strong> The $2^{n-1}$ cutting patterns of a rod of length $n$ are more than the solution vectors when $n\ge 3$, because different patterns can give the same vector.

    - <strong>Forgetting the base case.</strong> $v(0)=0$ is used when the first piece has the length of the whole rod: $v(\ell)$ contains the term $p_\ell+v(0)$.

    - <strong>Using row $j-1$ in the second recurrence.</strong> The term $p_j+v(j,\ell-j)$ stays in row $j$: otherwise a piece length could be cut only once.

    - <strong>Stopping the reconstruction early.</strong> The rule $x_{{s}[\ell]}\leftarrow x_{{s}[\ell]}+1$, $\ell\leftarrow\ell-{s}[\ell]$ is repeated until $\ell=0$; the last piece completes the rod.

## 28.5 In summary

!!! chiave "In summary"

    - The RCP asks how to cut a rod of length $n$ into pieces, with each length available any number of times, to maximize the total profit.

    - The recurrence $v(\ell)=\max_{j\le\ell}\{p_j+v(\ell-j)\}$ has the optimal substructure and overlapping subproblems, and $v(0)=0$.

    - The vector $v$ is filled bottom-up in $\Theta(n^2)$ steps, which is polynomial because the input has $n$ profits.

    - The vector ${s}$ of the first pieces gives an optimal solution for every rod length at no extra cost.

    <strong>Dashboard of the RCP example.</strong> [Example 28.1](index.md#box-1-texexpbox1) (rod of length $4$):

    <div class="tabella" markdown="0"><table>
    <tr>
    <th>Method</th>
    <th>Lower bound</th>
    <th>Upper bound</th>
    <th>Origin</th>
    </tr>
    <tr>
    <td>DP algorithm</td>
    <td><span class="arithmatex">\(10\)</span></td>
    <td><span class="arithmatex">\(10\)</span></td>
    <td>optimal value, two pieces of length <span class="arithmatex">\(2\)</span></td>
    </tr>
    </table></div>

---

**Exercises on this chapter:** [:material-pencil: Rod cutting (RCP)](../../exercises/dp-rod-cutting.md)

