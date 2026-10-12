---
title: "Metric and asymmetric TSP"
---

# 6.6 Variants: metric and asymmetric TSP { #sez-sec-tsp-variants }

<div class="info-capitolo" markdown>

**Part 1 · Combinatorial optimization problems · Chapter 6** · [:material-book-open-variant: Chapter 6: Routing problems](index.md) · [:material-file-pdf-box: Lecture notes, volume 1 (PDF)](../../pdf/lecture-notes-1-combinatorial-optimization-problems.pdf) · [:material-pencil: Exercises: Routing problems](../../exercises/tsp.md)

</div>

## 6.6.1 The metric travelling salesman problem

<a id="box-8-defMetricTSP"></a>

!!! definizione "Definition 6.4: Metric TSP"

    A TSP instance is <strong>metric</strong> if its distances satisfy the <strong>triangle inequality</strong>

    $$
    d_{ij} \le d_{ik} + d_{kj}
    \qquad \text{for all distinct } i,j,k \in \mathscr{V}.
    $$

    The <strong>metric travelling salesman problem</strong> (metric TSP) is the TSP restricted to metric instances.

- The triangle inequality says that going directly from $i$ to $j$ is never longer than going through a third city $k$.

- The instance of <span style="color:#1971c2">[Example 6.1](the-travelling-salesman-problem.md#box-2-ex-tsp5)</span> is metric: all the $5\cdot4\cdot3=60$ triangle inequalities hold, some of them with equality, e.g., $d_{15}=9=d_{12}+d_{25}=5+4$. In the drawing, the direct edge $\{1,5\}$ (dashed) is as long as the path from $1$ to $5$ through city $2$.

![Figure 2](../../img/tsp/fig02.svg){ .fig loading=lazy  }

- Instances obtained from points in the plane, with $d_{ij}$ equal to the Euclidean distance between the points, are metric (when the distances are not rounded).

- Several heuristic algorithms for the TSP behave well, and some of them have a performance guarantee, only on metric instances.

## 6.6.2 The asymmetric travelling salesman problem

<a id="box-9-defATSP"></a>

!!! definizione "Definition 6.5: Asymmetric travelling salesman problem"

    Given:

    1. a set $\mathscr{V} = \{1,2,\dots,n\}$ of $n$ <em>cities</em>,

    2. for each ordered pair of distinct cities $i,j \in \mathscr{V}$, a <em>distance</em> $d_{ij} \in \Z_{\ge 1}$ from city $i$ to city $j$, where $d_{ij}$ may differ from $d_{ji}$,

    the <strong>asymmetric travelling salesman problem</strong> (ATSP) asks to find a closed route that starts from a city, visits every other city exactly once and returns to the starting city, so that the total distance travelled is minimized.

- Asymmetric distances arise, for example, when travelling along one-way streets or uphill and downhill.

- The definition of tour and of its length $L(\sigma)$ is unchanged, but the direction now matters: a tour and the same tour travelled backwards are different solutions.

- The TSP is the special case of the ATSP in which $d_{ij}=d_{ji}$ for all $i,j$.

- An ATSP instance has $\frac{n!}{n}=(n-1)!$ distinct tours, twice the count of <span style="color:#1971c2">[Proposition 6.2](the-travelling-salesman-problem.md#box-3-prop-tsp-count)</span>: the starting city still does not change the tour, but the direction does, so we do not divide by $2$.

- The instance of <span style="color:#1971c2">[Example 6.1](the-travelling-salesman-problem.md#box-2-ex-tsp5)</span>, read as an ATSP instance, has $4!=24$ tours instead of $12$.

## 6.7 Remarks

- The largest instance solved to optimality, pla85900, has $85\,900$ points from a chip design problem. It was solved in 2005–2006 with the Concorde code; the optimal tour, of length $142\,382\,641$, was certified in 2009 by Applegate, Bixby, Chvátal, Cook, Espinoza, Goycoolea and Helsgaun.

- On the road maps of real countries, the record of 2025 is the instance korea81998, with $81\,998$ bars of South Korea.

- The TSP is strongly NP-hard ([Chapter 1 «Combinatorial optimization problems»](https://fabiofurini.github.io/combinatorial-optimization/combinatorial-optimization-problems/combinatorial-optimization/)). Christofides (1976) gave an approximation algorithm with ratio $\frac32$ for the metric TSP.

## 6.8 Typical mistakes

!!! attenzione "Warning"

    - <strong>Counting $n!$ tours.</strong> The starting city does not change the tour, and in the symmetric case neither does the direction: the number of tours is $(n-1)!/2$.

    - <strong>Forgetting the return edge.</strong> The length of a tour includes the last distance $d_{\sigma_n \sigma_1}$, from the last city back to the first one.

    - <strong>Taking two cycles for a tour.</strong> Two disjoint cycles that together visit every city once are not a tour: a tour is a single cycle through all the cities.

    - <strong>Reading the bound as a tour.</strong> The value $17$ of the two-shortest-edges bound is not the length of a tour; it only says that no tour is shorter.

    - <strong>Using the triangle inequality without checking it.</strong> The guarantees of the heuristic algorithms hold only for metric instances.

## 6.9 In summary

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

**Exercises on this chapter:** [:material-pencil: Routing problems](../../exercises/tsp.md)

---

**In depth:** [:material-view-list: what the course does on this problem](../../catalogue/travelling-salesman-problem.md)

