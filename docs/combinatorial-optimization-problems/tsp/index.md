---
title: "The travelling salesman problem"
---

# The travelling salesman problem

<div class="info-capitolo" markdown>

**Part 1 · Combinatorial optimization problems · Chapter 6** · [:material-file-pdf-box: Lecture notes, volume 1 (PDF)](../../pdf/lecture-notes-1-combinatorial-optimization-problems.pdf) · [:material-pencil: Exercises: TSP](../../exercises/tsp.md)

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

## 6.1 The travelling salesman problem

<a id="box-1-defTSP"></a>

!!! definizione "Definition 6.1: Travelling salesman problem"

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
        \right\}. \tag{6.1}
        \end{equation*}

- We denote by $z(I)$ the length of an optimal tour $\tilde{\sigma}$ of the instance $I$.

### 6.1.1 Assumptions

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

!!! esempio "Example 6.1: TSP instance"

    We consider a set $\mathscr{V}=\{1,2,3,4,5\}$ of $5$ cities ($n=5$), with the following distances:

    $$
    \begin{array}{c|ccccc}
    \hline {d_{ij}} & {1} & {2} & {3} & {4} & {5} \\
    \hline {1} & --- & {5} & {2} & {2} & {9} \\
    {2} & {5} & --- & {4} & {3} & {4} \\
    {3} & {2} & {4} & --- & {4} & {7} \\
    {4} & {2} & {3} & {4} & --- & {7} \\
    {5} & {9} & {4} & {7} & {7} & --- \\
    \hline
    \end{array}
    $$

    This is the TSP instance of the MIP modelling course. The instance can be drawn as a complete graph, with one node per city and one edge, labelled with the distance, per pair of cities. The bold edges form the tour $\sigma=(1,3,5,2,4)$, and the cities are drawn in the order of the tour:

    ![Figure 1](../../img/tsp/fig01.svg){ .fig loading=lazy  }

    Its length is $L(\sigma)=d_{13}+d_{35}+d_{52}+d_{24}+d_{41}=2+7+4+3+2=18$.

<div class="grid cards sottopagine" markdown>

-   **Definition**

    The travelling salesman problem · Assumptions

    [:octicons-arrow-right-24: Open](#61-the-travelling-salesman-problem)

-   **6.2 Variants: metric and asymmetric TSP**

    A first tour by hand · A combinatorial lower bound

    [:octicons-arrow-right-24: Open](variants-metric-and-asymmetric-tsp.md)

-   **Remarks and summary**

    Typical mistakes · In summary

    [:octicons-arrow-right-24: Open](remarks-and-summary.md)

</div>

---

**Next:** [6.2 Variants: metric and asymmetric TSP](variants-metric-and-asymmetric-tsp.md)

---

**Exercises on this chapter:** [:material-pencil: TSP](../../exercises/tsp.md)

---

**In depth:** [:material-star-outline: the course on this problem](../../selected-problems/tsp.md)
