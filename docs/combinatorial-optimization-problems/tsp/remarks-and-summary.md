---
title: "Remarks and summary"
---

# Remarks and summary

<div class="info-capitolo" markdown>

**Part 1 · Combinatorial optimization problems · Chapter 6** · [:material-book-open-variant: Chapter 6: TSP](index.md) · [:material-file-pdf-box: Lecture notes, volume 1 (PDF)](../../pdf/lecture-notes-1-combinatorial-optimization-problems.pdf) · [:material-pencil: Exercises: TSP](../../exercises/tsp.md)

</div>

## 6.6 Remarks

- The largest instance solved to optimality, pla85900, has $85\,900$ points from a chip design problem. It was solved in 2005–2006 with the Concorde code; the optimal tour, of length $142\,382\,641$, was certified in 2009 by Applegate, Bixby, Chvátal, Cook, Espinoza, Goycoolea and Helsgaun.

- On the road maps of real countries, the record of 2025 is the instance korea81998, with $81\,998$ bars of South Korea.

- The TSP is strongly NP-hard (chapter «Combinatorial optimization problems»). Christofides (1976) gave an approximation algorithm with ratio $\frac32$ for the metric TSP.

## 6.7 Typical mistakes

!!! attenzione "Warning"

    - <strong>Counting $n!$ tours.</strong> The starting city does not change the tour, and in the symmetric case neither does the direction: the number of tours is $(n-1)!/2$.

    - <strong>Forgetting the return edge.</strong> The length of a tour includes the last distance $d_{\sigma_n \sigma_1}$, from the last city back to the first one.

    - <strong>Taking two cycles for a tour.</strong> Two disjoint cycles that together visit every city once are not a tour: a tour is a single cycle through all the cities.

    - <strong>Reading the bound as a tour.</strong> The value $17$ of the two-shortest-edges bound is not the length of a tour; it only says that no tour is shorter.

    - <strong>Using the triangle inequality without checking it.</strong> The guarantees of the heuristic algorithms hold only for metric instances.

## 6.8 In summary

!!! chiave "In summary"

    - The TSP asks for a shortest closed route through all the cities; a solution is a cyclic ordering of the cities, called a tour.

    - A symmetric instance with $n$ cities has $(n-1)!/2$ tours, an asymmetric one $(n-1)!$; listing them is possible only for very small $n$.

    - The nearest neighbour rule gives a tour quickly, with no guarantee; the two shortest edges of every city give a lower bound on the optimal length.

    - The metric TSP, with the triangle inequality, is the case where approximation guarantees exist.

    <strong>Dashboard of the TSP instance</strong> (minimization: the lower bound is a dual bound, the upper bound is the length of a tour):

    <div class="tabella" markdown="0"><table>
    <tr>
    <th>Chapter</th>
    <th>Lower bound</th>
    <th>Upper bound</th>
    <th>From</th>
    </tr>
    <tr>
    <td>This chapter</td>
    <td><span class="arithmatex">\(17\)</span></td>
    <td><span class="arithmatex">\(25\)</span></td>
    <td>two shortest edges; nearest neighbour from city <span class="arithmatex">\(1\)</span></td>
    </tr>
    <tr>
    <td>This chapter, enumeration</td>
    <td><span class="arithmatex">\(18\)</span></td>
    <td><span class="arithmatex">\(18\)</span></td>
    <td>the <span class="arithmatex">\(12\)</span> tours</td>
    </tr>
    </table></div>

---

**Exercises on this chapter:** [:material-pencil: TSP](../../exercises/tsp.md)

---

**In depth:** [:material-star-outline: the course on this problem](../../selected-problems/tsp.md)

