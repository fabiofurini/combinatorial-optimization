---
title: "Remarks and summary"
---

# Remarks and summary

<div class="info-capitolo" markdown>

**Part 1 · Combinatorial optimization problems · Chapter 3** · [:material-book-open-variant: Chapter 3: Bin packing](index.md) · [:material-file-pdf-box: Lecture notes, volume 1 (PDF)](../../pdf/lecture-notes-1-combinatorial-optimization-problems.pdf) · [:material-pencil: Exercises: Bin packing](../../exercises/bin-packing.md)

</div>

## 3.3 Remarks

- The worst-case behaviour of simple packing rules, such as First Fit, was analysed by Garey, Graham and Ullman (1972) and by Johnson, Demers, Ullman, Garey and Graham (1974).

- Johnson et al. (1974) proved that First Fit uses at most $\tfrac{17}{10}$ of the optimal number of bins, plus $2$.

## 3.4 Typical mistakes

!!! attenzione "Warning"

    - <strong>Believing that the weight bound is always tight.</strong> With three items of weight $6$ and $c = 10$ the bound gives $\lceil 18/10 \rceil = 2$, but no two items fit together, so $3$ bins are needed.

    - <strong>Counting the bins by the weights alone.</strong> The weight bound ignores how the items fit together; it is a dual bound, and the primal bound still needs a solution.

    - <strong>Listing the same packing twice.</strong> In the cutting stock problem the copies of an item are interchangeable: partitions that differ only by the exchange of identical copies are the same packing.

    - <strong>Ignoring the order of the bins.</strong> A solution is a partition: $\{\{4,5\},\{1,3\},\{2\}\}$ and $\{\{2\},\{4,5\},\{1,3\}\}$ are the same solution.

    - <strong>Forgetting the assumptions.</strong> An item with $w_j > c$ fits in no bin, and if the total weight is at most $c$ one bin is enough.

## 3.5 In summary

!!! chiave "In summary"

    - The BPP partitions the items into the minimum number of bins of capacity $c$; the cutting stock problem is the BPP with several identical copies of every item, and the BPP is the case $d_j = 1$.

    - A solution is a partition, so the candidates are counted by the Bell numbers and grow very fast.

    - A solution found by eye is a primal bound; the weight bound $\lceil \sum_j w_j / c \rceil$ is a dual bound.

    - When the two bounds coincide, the gap is zero and the solution is certified optimal.

    <strong>Dashboard of the reference instances.</strong>

    <div class="tabella" markdown="0"><table>
    <tr>
    <th>instance (min)</th>
    <th>lower bound</th>
    <th>upper bound</th>
    <th>from</th>
    </tr>
    <tr>
    <td>BPP, <span style="color:#1971c2">[Example 3.1](index.md#box-2-ex-bpp)</span></td>
    <td><span class="arithmatex">\(3\)</span> (weight bound)</td>
    <td><span class="arithmatex">\(3\)</span> (by eye)</td>
    <td>this chapter</td>
    </tr>
    <tr>
    <td>CSP, <span style="color:#1971c2">[Example 3.2](the-cutting-stock-problem.md#box-5-ex-csp)</span></td>
    <td><span class="arithmatex">\(3\)</span> (weight bound)</td>
    <td><span class="arithmatex">\(3\)</span> (by eye)</td>
    <td>this chapter</td>
    </tr>
    </table></div>

---

**Exercises on this chapter:** [:material-pencil: Bin packing](../../exercises/bin-packing.md)

---

**In depth:** [:material-star-outline: the course on this problem](../../selected-problems/bin-packing.md)

