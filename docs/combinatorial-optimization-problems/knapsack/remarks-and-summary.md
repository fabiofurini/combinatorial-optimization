---
title: "Remarks and summary"
---

# Remarks and summary

<div class="info-capitolo" markdown>

**Part 1 · Combinatorial optimization problems · Chapter 2** · [:material-book-open-variant: Chapter 2: Knapsack](index.md) · [:material-file-pdf-box: Lecture notes, volume 1 (PDF)](../../pdf/lecture-notes-1-combinatorial-optimization-problems.pdf) · [:material-pencil: Exercises: Knapsack](../../exercises/knapsack.md)

</div>

## 2.10 Remarks

- Dantzig (1957) sorted the items by non-increasing efficiency $p_j/w_j$ and used this order to solve the continuous version of the KP; the same order returns in the bounds of the following chapters.

- Karp (1972) put the subset sum problem, called knapsack in his paper, among the first $21$ NP-complete problems. The KP contains the SSP as the special case $p_j = w_j$, so it is NP-hard.

- Ibarra and Kim (1975) gave the first fully polynomial-time approximation scheme for the KP.

## 2.11 Typical mistakes

!!! attenzione "Warning"

    - <strong>Confusing the KP with the SSP.</strong> The SSP asks for a total weight <em>exactly</em> equal to $c$ and has a yes/no answer; it is the KP with $p_j = w_j$, where the answer is yes if the optimal value is $c$.

    - <strong>Stopping at the order of efficiency.</strong> Taking the items in the order $1, 2, 3, \dots$ of non-increasing $p_j/w_j$ gives $\{1,2\}$ with profit $11$, while the optimal solution of <span style="color:#1971c2">[Example 2.1](index.md#box-2-ex-kp)</span> is $\{1,4\}$ with profit $15$.

    - <strong>Counting identical copies as different solutions.</strong> In the BKP and in the UKP the copies $(j,k)$ of the same item are interchangeable: different subsets of the extended set of items can give the same packing.

    - <strong>Choosing at most one item per class.</strong> In the MCKP exactly one item per class is selected, so an instance can be infeasible; in the KPS a class with no selected item costs nothing.

    - <strong>Forgetting the assumptions.</strong> An item with $w_j > c$ can never be selected, and if all the items fit the problem is trivial: both cases are removed before solving.

## 2.12 In summary

!!! chiave "In summary"

    - The KP selects a subset of items of weight at most $c$ and maximum profit; a solution is a subset, and $2^n$ subsets are candidates.

    - The SSP, the BKP, the UKP, the MDKP, the MKP, the MCKP and the KPS change the number of copies, of resources, of knapsacks or the structure of the items; each one has its assumptions on the data.

    - A solution found by eye is a primal bound; the cardinality bound is a dual bound that uses only the weights and the profits.

    - The order of efficiency is not enough to find an optimal solution, even on a small instance.

    <strong>Dashboard of the reference instance.</strong>

    <div class="tabella" markdown="0"><table>
    <tr>
    <th>KP, <span style="color:#1971c2">[Example 2.1](index.md#box-2-ex-kp)</span> (max)</th>
    <th>lower bound</th>
    <th>upper bound</th>
    <th>from</th>
    </tr>
    <tr>
    <td>this chapter</td>
    <td><span class="arithmatex">\(15\)</span> (by eye)</td>
    <td><span class="arithmatex">\(17\)</span> (cardinality bound)</td>
    <td>definition</td>
    </tr>
    </table></div>

---

**Exercises on this chapter:** [:material-pencil: Knapsack](../../exercises/knapsack.md)

---

**In depth:** [:material-star-outline: the course on this problem](../../selected-problems/knapsack.md)

