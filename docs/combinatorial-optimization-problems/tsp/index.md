---
title: "Routing problems"
---

# Routing problems

<div class="info-capitolo" markdown>

**Part 1 · Combinatorial optimization problems · Chapter 6** · [:material-file-pdf-box: Lecture notes, volume 1 (PDF)](../../pdf/lecture-notes-1-combinatorial-optimization-problems.pdf) · [:material-pencil: Exercises: Routing problems](../../exercises/tsp.md)

</div>

!!! nota "Prerequisites"

    - From this module, the chapter «Combinatorial optimization problems»: what a combinatorial optimization problem is, how the number of solutions explodes, and the notions of primal bound, dual bound and gap.

    - From the same chapter, the reference TSP instance with $5$ cities, which this chapter studies in detail.

!!! chiave "Objectives"

    At the end of this chapter you will be able to:

    - state the TSP, the asymmetric TSP and the metric TSP, and describe an instance and a tour;

    - compute the length of a tour, and count the tours of an instance;

    - explain why listing all the tours is hopeless already for $20$ cities;

    - build a first tour by hand with the nearest neighbour rule;

    - compute a lower bound on the optimal length from the two shortest edges of every city, and measure the gap with a tour.

## 6.1 Overview of the family

- The <strong>routing problems</strong> of this chapter share the same data: a set $\mathscr{V} = \{1,2,\dots,n\}$ of $n$ cities and, for each pair of distinct cities $i,j \in \mathscr{V}$, a <em>distance</em> $d_{ij} \in \Z_{\ge 1}$.

- A solution is a <strong>tour</strong>, a permutation $\sigma$ of the cities read as a closed route that visits every city exactly once; its <strong>length</strong> $L(\sigma)$ is the sum of the distances travelled.

- The objective is to minimize the length of the tour.

!!! chiave ""

    A routing problem finds a shortest tour through all the cities. The members of the family differ in the properties of the distances: symmetric, metric or asymmetric.

- The table lists the members of the family, with the section that defines each of them.

<div class="tabella" markdown="0"><table>
<tr>
<th><strong>Problem</strong></th>
<th><strong>Acronym</strong></th>
<th><strong>Distances</strong></th>
<th><strong>Section</strong></th>
</tr>
<tr>
<td>travelling salesman problem</td>
<td>TSP</td>
<td>symmetric, <span class="arithmatex">\(d_{ij} = d_{ji}\)</span></td>
<td><a href="the-travelling-salesman-problem/#sez-sec-tsp-TSP">6.2</a></td>
</tr>
<tr>
<td>metric travelling salesman problem</td>
<td>metric TSP</td>
<td>symmetric, with the triangle inequality</td>
<td><a href="variants-metric-and-asymmetric-tsp/#sez-sec-tsp-variants">6.3</a></td>
</tr>
<tr>
<td>asymmetric travelling salesman problem</td>
<td>ATSP</td>
<td><span class="arithmatex">\(d_{ij}\)</span> may differ from <span class="arithmatex">\(d_{ji}\)</span></td>
<td><a href="variants-metric-and-asymmetric-tsp/#sez-sec-tsp-variants">6.3</a></td>
</tr>
</table></div>

<div class="grid cards sottopagine" markdown>

-   **Definition**

    Overview of the family

    [:octicons-arrow-right-24: Open](#61-overview-of-the-family)

-   **6.2 The travelling salesman problem**

    [:octicons-arrow-right-24: Open](the-travelling-salesman-problem.md)

-   **6.3 Variants: metric and asymmetric TSP**

    A first tour by hand · A combinatorial lower bound · Remarks · Typical mistakes · In summary

    [:octicons-arrow-right-24: Open](variants-metric-and-asymmetric-tsp.md)

</div>

---

**Next:** [6.2 The travelling salesman problem](the-travelling-salesman-problem.md)

---

**Exercises on this chapter:** [:material-pencil: Routing problems](../../exercises/tsp.md)

---

**In depth:** [:material-star-outline: the course on this problem](../../selected-problems/tsp.md)
