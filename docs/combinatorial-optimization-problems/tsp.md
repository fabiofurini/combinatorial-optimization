---
title: "The travelling salesman problem"
---

# The travelling salesman problem

<div class="info-capitolo" markdown>

**Part 1 · Combinatorial optimization problems · Chapter 5** · [:material-file-pdf-box: Lecture notes, volume 1 (PDF)](../pdf/lecture-notes-1-combinatorial-optimization-problems.pdf)

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

## 5.1 Why the travelling salesman problem?

- A courier leaves the depot, must deliver a parcel to each of the other cities and come back to the depot. In which order should the cities be visited, so that the total distance travelled is the smallest possible? This is the <strong>travelling salesman problem</strong>.

- <strong>A challenge.</strong> Before reading on, look at the distances of <span style="color:#1971c2">[Example 5.1](#box-2-ex-tsp5)</span> and try to find a short tour of the $5$ cities. Then ask yourself how you could <u>prove</u> that no shorter tour exists. The chapter answers both questions.

- The TSP is one of the most studied problems of combinatorial optimization, and it has long been the test bench of exact algorithms. The largest instance solved to optimality, called pla85900, has $85\,900$ points, which come from a chip design problem. It was solved in 2005–2006 with the Concorde code, and the optimal tour, of length $142\,382\,641$, was certified in a paper of 2009 by Applegate, Bixby, Chvátal, Cook, Espinoza, Goycoolea and Helsgaun.

- On the road maps of real countries, the record of 2025 is the instance korea81998, with $81\,998$ bars of South Korea. These results need very large computations; the instances of this chapter are tiny.

- The TSP is strongly NP-hard (see the chapter «Combinatorial optimization problems»), so no efficient exact algorithm is expected. Approximation algorithms, such as that of Christofides (1976), are studied later in the module.

## 5.2 The travelling salesman problem

<a id="box-1-defTSP"></a>

!!! definizione "Definition 5.1: Travelling salesman problem"

    Given:

    1. a set $\mathscr{V} = \{1,2,\dots,n\}$ of $n$ <em>cities</em>,

    2. for each pair of distinct cities $i,j \in \mathscr{V}$, a <em>distance</em> $d_{ij} \in \Z_{\ge 1}$, with $d_{ij}=d_{ji}$,

    the <strong>travelling salesman problem</strong> (TSP) asks to find a closed route that starts from a city, visits every other city exactly once and returns to the starting city, so that the total distance travelled is minimized.

- A <strong>TSP instance</strong> is specified by:

    1. one integer number:

        - the number of cities $n \in \Z_{\ge 3}$,

    2. one symmetric matrix of integer numbers of size $n \times n$:

        - $D=(d_{ij})$, containing the distances; the diagonal entries are not used.

- A <strong>TSP feasible solution</strong>, called a <strong>tour</strong>, is a permutation of the cities

    $$
    \sigma = (\sigma_1,\sigma_2,\dots,\sigma_n),
    $$

    read as the closed route $\sigma_1 \to \sigma_2 \to \dots \to \sigma_n \to \sigma_1$. Its <strong>length</strong> is

    $$
    L(\sigma) = \sum_{k=1}^{n-1} d_{\sigma_k \sigma_{k+1}} + d_{\sigma_n \sigma_1},
    $$

    where the last term is the distance travelled to return to the starting city.

- Different permutations may describe the same tour: the starting city can be any of the $n$ cities, and, since the distances are symmetric, the tour can be travelled in either direction.

    !!! chiave ""

        Given a TSP instance, the TSP can be formally stated as:

        \begin{equation*}
        \label{TSP}
        \tilde{\sigma}
        \in
        \argmin_{\sigma}
        \left\{
        L(\sigma) = \sum_{k=1}^{n-1} d_{\sigma_k \sigma_{k+1}} + d_{\sigma_n \sigma_1}
        \;:\;
        \sigma \text{ is a permutation of } \mathscr{V}
        \right\}. \tag{5.1}
        \end{equation*}

- We denote by $z(I)$ the length of an optimal tour $\tilde{\sigma}$ of the instance $I$.

### 5.2.1 Assumptions

- We make the following assumptions:

    1. There are at least three cities (with one or two cities there is only one route). Formally:

        $$
        n \ge 3
        $$

    2. The distances are symmetric (travelling from $i$ to $j$ costs as much as travelling from $j$ to $i$). Formally:

        $$
        d_{ij}=d_{ji},~~~~ \forall i,j \in \mathscr{V},~ i\neq j
        $$

<a id="box-2-ex-tsp5"></a>

!!! esempio "Example 5.1: TSP instance"

    We consider a set $\mathscr{V}=\{1,2,3,4,5\}$ of $5$ cities ($n=5$), with the following distances:

    <div class="tabella" markdown="0"><table>
    <tr>
    <th><span class="arithmatex">\(d_{ij}\)</span></th>
    <th><span class="arithmatex">\(1\)</span></th>
    <th><span class="arithmatex">\(2\)</span></th>
    <th><span class="arithmatex">\(3\)</span></th>
    <th><span class="arithmatex">\(4\)</span></th>
    <th><span class="arithmatex">\(5\)</span></th>
    </tr>
    <tr>
    <td><span class="arithmatex">\(1\)</span></td>
    <td>—</td>
    <td><span class="arithmatex">\(5\)</span></td>
    <td><span class="arithmatex">\(2\)</span></td>
    <td><span class="arithmatex">\(2\)</span></td>
    <td><span class="arithmatex">\(9\)</span></td>
    </tr>
    <tr>
    <td><span class="arithmatex">\(2\)</span></td>
    <td><span class="arithmatex">\(5\)</span></td>
    <td>—</td>
    <td><span class="arithmatex">\(4\)</span></td>
    <td><span class="arithmatex">\(3\)</span></td>
    <td><span class="arithmatex">\(4\)</span></td>
    </tr>
    <tr>
    <td><span class="arithmatex">\(3\)</span></td>
    <td><span class="arithmatex">\(2\)</span></td>
    <td><span class="arithmatex">\(4\)</span></td>
    <td>—</td>
    <td><span class="arithmatex">\(4\)</span></td>
    <td><span class="arithmatex">\(7\)</span></td>
    </tr>
    <tr>
    <td><span class="arithmatex">\(4\)</span></td>
    <td><span class="arithmatex">\(2\)</span></td>
    <td><span class="arithmatex">\(3\)</span></td>
    <td><span class="arithmatex">\(4\)</span></td>
    <td>—</td>
    <td><span class="arithmatex">\(7\)</span></td>
    </tr>
    <tr>
    <td><span class="arithmatex">\(5\)</span></td>
    <td><span class="arithmatex">\(9\)</span></td>
    <td><span class="arithmatex">\(4\)</span></td>
    <td><span class="arithmatex">\(7\)</span></td>
    <td><span class="arithmatex">\(7\)</span></td>
    <td>—</td>
    </tr>
    </table></div>

    This is the TSP instance of the MIP modelling course. The instance can be drawn as a complete graph, with one node per city and one edge, labelled with the distance, per pair of cities. The bold edges form the tour $\sigma=(1,3,5,2,4)$, and the cities are drawn in the order of the tour:

    ![Figure 1](../img/tsp/fig01.svg){ .fig loading=lazy  }

    Its length is $L(\sigma)=d_{13}+d_{35}+d_{52}+d_{24}+d_{41}=2+7+4+3+2=18$.

## 5.3 Variants: metric and asymmetric TSP

- Several heuristic algorithms for the TSP behave well, and some of them have a performance guarantee, only if the distances satisfy the triangle inequality: going directly from $i$ to $j$ is never longer than going through a third city.

<a id="box-3-defMetricTSP"></a>

!!! definizione "Definition 5.2: Metric TSP"

    A TSP instance is <strong>metric</strong> if its distances satisfy the <strong>triangle inequality</strong>

    $$
    d_{ij} \le d_{ik} + d_{kj}
    \qquad \text{for all distinct } i,j,k \in \mathscr{V}.
    $$

- The instance of <span style="color:#1971c2">[Example 5.1](#box-2-ex-tsp5)</span> is metric: all the $5\cdot4\cdot3=60$ triangle inequalities hold, some of them with equality, e.g., $d_{15}=9=d_{12}+d_{25}=5+4$.

- Instances obtained from points in the plane, with $d_{ij}$ equal to the Euclidean distance between the points, are metric (when the distances are not rounded).

- In the <strong>asymmetric travelling salesman problem</strong> (ATSP) the distances are not required to be symmetric: $d_{ij}$ may differ from $d_{ji}$, as when travelling along one-way streets or uphill and downhill.

- The definition of tour and of its length $L(\sigma)$ is unchanged, but the direction now matters: a tour and the same tour travelled backwards are different solutions.

- The TSP is the special case of the ATSP in which $d_{ij}=d_{ji}$ for all $i,j$.

## 5.4 Counting the tours

<a id="box-4-prop-tsp-count"></a>

!!! teorema "Proposition 5.3"

    A symmetric TSP instance with $n \ge 3$ cities has

    $$
    \frac{n!}{2n} = \frac{(n-1)!}{2}
    $$

    distinct tours; an ATSP instance has $\frac{n!}{n} = (n-1)!$ distinct tours.

- There are $n!$ permutations of the cities. Each tour is described by $n$ permutations, one for every possible starting city, so there are $n!/n=(n-1)!$ cyclic orderings: this is the ATSP count.

- In the symmetric case the tour travelled backwards has the same length and is not a new solution: every tour is counted twice, and we divide by $2$.

<a id="box-5-ex-tsp-enum"></a>

!!! esempio "Example 5.2: enumeration of the tours"

    The instance of <span style="color:#1971c2">[Example 5.1](#box-2-ex-tsp5)</span> has $\frac{(5-1)!}{2}=12$ distinct tours, which can be enumerated:

    <div class="tabella" markdown="0"><table>
    <tr>
    <th>tour</th>
    <th><span class="arithmatex">\(L\)</span></th>
    <th>tour</th>
    <th><span class="arithmatex">\(L\)</span></th>
    <th>tour</th>
    <th><span class="arithmatex">\(L\)</span></th>
    </tr>
    <tr>
    <td><span class="arithmatex">\((1,3,5,2,4)\)</span></td>
    <td><span class="arithmatex">\(18\)</span></td>
    <td><span class="arithmatex">\((1,3,4,2,5)\)</span></td>
    <td><span class="arithmatex">\(22\)</span></td>
    <td><span class="arithmatex">\((1,2,3,5,4)\)</span></td>
    <td><span class="arithmatex">\(25\)</span></td>
    </tr>
    <tr>
    <td><span class="arithmatex">\((1,3,2,5,4)\)</span></td>
    <td><span class="arithmatex">\(19\)</span></td>
    <td><span class="arithmatex">\((1,4,3,2,5)\)</span></td>
    <td><span class="arithmatex">\(23\)</span></td>
    <td><span class="arithmatex">\((1,3,2,4,5)\)</span></td>
    <td><span class="arithmatex">\(25\)</span></td>
    </tr>
    <tr>
    <td><span class="arithmatex">\((1,2,5,3,4)\)</span></td>
    <td><span class="arithmatex">\(22\)</span></td>
    <td><span class="arithmatex">\((1,2,4,5,3)\)</span></td>
    <td><span class="arithmatex">\(24\)</span></td>
    <td><span class="arithmatex">\((1,4,2,3,5)\)</span></td>
    <td><span class="arithmatex">\(25\)</span></td>
    </tr>
    <tr>
    <td><span class="arithmatex">\((1,2,5,4,3)\)</span></td>
    <td><span class="arithmatex">\(22\)</span></td>
    <td></td>
    <td></td>
    <td><span class="arithmatex">\((1,2,4,3,5)\)</span></td>
    <td><span class="arithmatex">\(28\)</span></td>
    </tr>
    <tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td><span class="arithmatex">\((1,2,3,4,5)\)</span></td>
    <td><span class="arithmatex">\(29\)</span></td>
    </tr>
    </table></div>

    Hence the tour $\sigma=(1,3,5,2,4)$ is the unique optimal tour, and $z(I)=18$. The same instance, read as an ATSP instance, would have $4!=24$ tours.

- The number of tours grows faster than any exponential function:

    <div class="tabella" markdown="0"><table>
    <tr>
    <th><span class="arithmatex">\(n\)</span></th>
    <th><span class="arithmatex">\(5\)</span></th>
    <th><span class="arithmatex">\(10\)</span></th>
    <th><span class="arithmatex">\(15\)</span></th>
    <th><span class="arithmatex">\(20\)</span></th>
    </tr>
    <tr>
    <td><span class="arithmatex">\(\frac{(n-1)!}{2}\)</span></td>
    <td><span class="arithmatex">\(12\)</span></td>
    <td><span class="arithmatex">\(181\,440\)</span></td>
    <td><span class="arithmatex">\(\approx 4.4\cdot 10^{10}\)</span></td>
    <td><span class="arithmatex">\(\approx 6.1\cdot 10^{16}\)</span></td>
    </tr>
    </table></div>

- A computer that evaluates $10^9$ tours per second needs about $6.1\cdot 10^{7}$ seconds, that is about two years, to list the tours of $20$ cities. Enumeration is therefore useful only as a check on tiny instances, and the algorithms of this course must do better.

## 5.5 A first tour by hand

- The simplest way to build a tour is the <strong>nearest neighbour rule</strong>: start from a city and, as long as there are unvisited cities, move to the closest unvisited one; at the end, return to the starting city. In case of a tie we take the city with the smallest index.

<a id="box-6-ex-tsp-nn"></a>

!!! esempio "Example 5.3: nearest neighbour from city $1$"

    On the instance of <span style="color:#1971c2">[Example 5.1](#box-2-ex-tsp5)</span>, starting from city $1$:

    1. from $1$ the closest cities are $3$ and $4$, both at distance $2$: we go to $3$;

    2. from $3$ the unvisited cities $2$ and $4$ are both at distance $4$: we go to $2$;

    3. from $2$ the closest unvisited city is $4$, at distance $3$; then only $5$ is left, at distance $d_{45}=7$;

    4. we return from $5$ to $1$ at distance $d_{51}=9$.

    The tour is $\sigma=(1,3,2,4,5)$, of length $2+4+3+7+9=25$.

- The last edges of the nearest neighbour tour are forced, and may be very long: here the final edge $\{5,1\}$ costs $9$. The tour of length $25$ is worse than the optimal one, of length $18$, by $7$.

- From the nearest neighbour tour alone we cannot tell how far we are from the optimum: we need a lower bound.

## 5.6 A combinatorial lower bound

- For a city $i$, let $a_i \le b_i$ be the two smallest distances from $i$ to the other cities.

<a id="box-7-obs-tsp-lb"></a>

!!! teorema "Observation 5.4"

    For every symmetric TSP instance, the optimal length satisfies

    $$
    z(I) \;\ge\; \left\lceil \frac{1}{2} \sum_{i \in \mathscr{V}} (a_i + b_i) \right\rceil .
    $$

- In a tour, every city is entered by one edge and left by another one, so it has exactly two edges of the tour, each at least as long as $a_i$ and $b_i$ respectively.

- Summing over all the cities, every edge of the tour is counted twice, once for each of its end cities: hence $2L(\sigma) \ge \sum_i (a_i + b_i)$ for every tour $\sigma$.

- The distances are integer, so is $L(\sigma)$, and we can round the bound up.

<a id="box-8-ex-tsp-lb"></a>

!!! esempio "Example 5.4: the bound on the reference instance"

    For the instance of <span style="color:#1971c2">[Example 5.1](#box-2-ex-tsp5)</span> the two smallest distances of each city are:

    <div class="tabella" markdown="0"><table>
    <tr>
    <th>city <span class="arithmatex">\(i\)</span></th>
    <th><span class="arithmatex">\(1\)</span></th>
    <th><span class="arithmatex">\(2\)</span></th>
    <th><span class="arithmatex">\(3\)</span></th>
    <th><span class="arithmatex">\(4\)</span></th>
    <th><span class="arithmatex">\(5\)</span></th>
    <th>sum</th>
    </tr>
    <tr>
    <td><span class="arithmatex">\(a_i\)</span></td>
    <td><span class="arithmatex">\(2\)</span></td>
    <td><span class="arithmatex">\(3\)</span></td>
    <td><span class="arithmatex">\(2\)</span></td>
    <td><span class="arithmatex">\(2\)</span></td>
    <td><span class="arithmatex">\(4\)</span></td>
    <td></td>
    </tr>
    <tr>
    <td><span class="arithmatex">\(b_i\)</span></td>
    <td><span class="arithmatex">\(2\)</span></td>
    <td><span class="arithmatex">\(4\)</span></td>
    <td><span class="arithmatex">\(4\)</span></td>
    <td><span class="arithmatex">\(3\)</span></td>
    <td><span class="arithmatex">\(7\)</span></td>
    <td></td>
    </tr>
    <tr>
    <td><span class="arithmatex">\(a_i+b_i\)</span></td>
    <td><span class="arithmatex">\(4\)</span></td>
    <td><span class="arithmatex">\(7\)</span></td>
    <td><span class="arithmatex">\(6\)</span></td>
    <td><span class="arithmatex">\(5\)</span></td>
    <td><span class="arithmatex">\(11\)</span></td>
    <td><span class="arithmatex">\(33\)</span></td>
    </tr>
    </table></div>

    Hence $z(I) \ge \lceil 33/2 \rceil = 17$. Together with the nearest neighbour tour we obtain

    $$
    17 \le z(I) \le 25,
    $$

    an absolute gap of $8$, that is a relative gap of $\frac{8}{17} \approx 47.1\%$. The tour $(1,3,5,2,4)$ of length $18$ closes most of it, and only the enumeration of the $12$ tours proves that $18$ is optimal.

## 5.7 Typical mistakes

!!! attenzione "Warning"

    - <strong>Counting $n!$ tours.</strong> The starting city does not change the tour, and in the symmetric case neither does the direction: the number of tours is $(n-1)!/2$.

    - <strong>Forgetting the return edge.</strong> The length of a tour includes the last distance $d_{\sigma_n \sigma_1}$, from the last city back to the first one.

    - <strong>Taking two cycles for a tour.</strong> Two disjoint cycles that together visit every city once are not a tour: a tour is a single cycle through all the cities.

    - <strong>Reading the bound as a tour.</strong> The value $17$ of the two-shortest-edges bound is not the length of a tour; it only says that no tour is shorter.

    - <strong>Using the triangle inequality without checking it.</strong> The guarantees of the heuristic algorithms hold only for metric instances.

## 5.8 In summary

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
