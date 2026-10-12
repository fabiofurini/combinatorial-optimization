---
title: Selected problems
---

# Selected problems

The problems of the course, studied in depth one by one: for each problem its definition, the chapters that treat it, what each technique of the course does on it, and the instances of the examples and exercises with their optimal value.

[:material-file-pdf-box: Selected problems (PDF)](../pdf/selected-problems.pdf){ .md-button } [:material-table: The problems at a glance](at-a-glance.md){ .md-button } [:material-book-alphabet: Problem definitions](../combinatorial-optimization-problems/definitions.md){ .md-button }

## The central problems

<div class="grid cards" markdown>

-   **The knapsack problem**

    ---

    Choose a subset of items of maximum total profit whose total weight does not exceed the capacity.

    [:octicons-arrow-right-24: Open](knapsack.md)

-   **The bin packing problem**

    ---

    Pack items of given weights into the minimum number of identical bins of capacity $c$.

    [:octicons-arrow-right-24: Open](bin-packing.md)

-   **The vertex coloring problem**

    ---

    Color the vertices of a graph so that adjacent vertices get different colors, using the minimum number of colors.

    [:octicons-arrow-right-24: Open](vertex-coloring.md)

-   **The maximum clique problem**

    ---

    Find a largest set of pairwise adjacent vertices of a graph.

    [:octicons-arrow-right-24: Open](maximum-clique.md)

-   **The travelling salesman problem**

    ---

    Find a shortest closed route that visits every city exactly once and returns to the starting city.

    [:octicons-arrow-right-24: Open](tsp.md)

-   **Scheduling on identical parallel machines**

    ---

    Assign jobs to $m$ identical machines so that the makespan, the largest machine load, is minimum.

    [:octicons-arrow-right-24: Open](pcmax.md)

-   **Capacitated lot sizing**

    ---

    Plan the production of every period, with capacities, setup costs and stock, at minimum total cost.

    [:octicons-arrow-right-24: Open](lot-sizing.md)

</div>

## Other problems of the course

### Knapsack family

- [Subset sum problem (SSP)](knapsack.md#sez-sec-cat-ssp): the SSP is solved as the KP with $p_j = w_j$ for all $j\in\Ioggetti$: the answer is yes if and only if the optimal value of this KP equals $c$.
- [Bounded knapsack problem (BKP)](knapsack.md#sez-sec-cat-bkp): the BKP reduces to the KP when $b_j=1$ for every item, and to the UKP when every bound $b_j$ is large enough not to be binding.
- [Unbounded knapsack problem (UKP)](knapsack.md#sez-sec-cat-ukp): the UKP is the BKP with $b_j = \hat b_j = \lfloor c/w_j \rfloor$: each item can be taken as many times as it fits.
- [Multidimensional knapsack problem (MDKP)](knapsack.md#sez-sec-cat-mdkp): the MDKP is the KP with $k$ capacity constraints, one for each resource; with $k=1$ it is the KP.
- [Multiple knapsack problem (MKP)](knapsack.md#sez-sec-cat-mkp): the MKP is the KP with $m$ knapsacks; every feasible solution of the MKP is feasible for the KP with capacity $\sum_{k\in\mathscr{K}} c_k$, which gives a dual bound.
- [Multiple-choice knapsack problem (MCKP)](knapsack.md#sez-sec-cat-mckp): the MCKP is the KP with the additional constraint that exactly one item of every class is selected, so an instance can be infeasible.
- [Knapsack problem with setups (KPS)](knapsack.md#sez-sec-cat-kps): the KPS is the KP in which selecting the first item of a class costs the setup $f_h$ and consumes the setup weight $s_h$; a class with no selected item costs nothing.
- [Rod-Cutting Problem (RCP)](knapsack-family.md#sez-sec-cat-rcp): an unbounded knapsack with one item type per piece length $\ell$, weight $\ell$, profit $p_\ell$ and capacity $n$, where the total length must be exactly $n$.
- [Coin Change Problem (CCP)](knapsack-family.md#sez-sec-cat-ccp): like the UKP it has unlimited copies of every item type, but it asks for exactly $c$ and minimizes the number of coins, while the UKP asks for at most $c$ and maximizes the profit.

### Packing

- [Cutting stock problem (CSP)](bin-packing.md#sez-sec-cat-csp): the CSP is the BPP with $d_j$ identical copies of every item $j$, and the BPP is the case $d_j = 1$ for all $j\in\Ioggetti$.

### Graphs

- [3-colorability (3-COL)](vertex-coloring.md#sez-sec-cat-3col): the decision version of the VCP with the number of colors fixed to $3$: an algorithm with ratio below $\frac43$ for the VCP would decide it.
- [Maximum stable set problem (MSSP)](maximum-clique.md#sez-sec-cat-mssp): a subset is a clique of $G$ if and only if it is a stable set of $\overline{G}$: $\omega(G) = \alpha(\overline{G})$ and $\alpha(G) = \omega(\overline{G})$.
- [Vertex-weighted maximum clique problem (VWMCP)](maximum-clique.md#sez-sec-cat-vwmcp): with all the weights $w_v=1$ it is the MCP.
- [Edge-weighted maximum clique problem (EWMCP)](maximum-clique.md#sez-sec-cat-ewmcp): with $r_{uv}=1$ it is again the MCP, since $r(K)=\binom{|K|}{2}$ grows with $|K|$.

### Routing

- [Metric travelling salesman problem (metric TSP)](tsp.md#sez-sec-cat-metrictsp): the special case of the TSP with the triangle inequality, where approximation guarantees exist.
- [Asymmetric travelling salesman problem (ATSP)](tsp.md#sez-sec-cat-atsp): the TSP is the special case of the ATSP in which $d_{ij}=d_{ji}$ for all $i,j$; an ATSP instance has $(n-1)!$ tours.
- [Hamiltonian cycle problem (HCP)](tsp.md#sez-sec-cat-hcp): with $d_{ij}=1$ on the edges and a large distance elsewhere, $G$ is Hamiltonian if and only if $z(I_G)=n$: the TSP contains it.

### Scheduling

- [Scheduling on a fixed number of identical machines ($m$ not part of the input) (PmCMAX)](pcmax.md#sez-sec-cat-pmcmax): special case of $P\,||\,C_{\max}$ with $m$ fixed; with $m=2$ it asks for a split of the jobs into two sets of loads as equal as possible.
- [Scheduling on parallel machines with different speeds, $Q\,||\,C_{\max}$ (QCMAX)](pcmax.md#sez-sec-cat-qcmax): generalizes $P\,||\,C_{\max}$, which is the case of machines with equal speeds.
- [Scheduling on unrelated parallel machines, $R\,||\,C_{\max}$ (RCMAX)](pcmax.md#sez-sec-cat-rcmax): generalizes $Q\,||\,C_{\max}$ and $P\,||\,C_{\max}$.

### Lot sizing

- [Uncapacitated lot sizing problem (ULS)](lot-sizing.md#sez-sec-cat-uls): special case of the CLS in which the capacities are not binding, for example $cap_t \ge \sum_u d_u$.
- [Capacitated lot sizing with constant capacity (CLS-C)](lot-sizing.md#sez-sec-cat-clsc): special case of the CLS; the zero-inventory ordering property is replaced by a weaker one: between two periods with empty inventory at most one period produces a quantity strictly between $0$ and $C$.
- [Lot sizing with several products and setup times (MLS)](lot-sizing.md#sez-sec-cat-mls): generalizes the CLS, which is the case of one product with $vt_t=1$ and no setup time.
- [Lot sizing with initial stock (LS-SI)](lot-sizing.md#sez-sec-cat-lssi): removes the assumption of an empty initial stock of the CLS.
- [Lot sizing with overtime (LS-OT)](lot-sizing.md#sez-sec-cat-lsot): replaces the fixed capacity $cap_t$ of the CLS by two levels of capacity with different costs.
- [Lot sizing with unsatisfied demand (LS-UD)](lot-sizing.md#sez-sec-cat-lsud): relaxes the demand constraints of the CLS, with a penalty in the objective.

### DP examples

- [Minimum-cost staircase (STAIR)](dp-examples.md#sez-sec-cat-stair): a shortest path on the steps $0,1,\dots,n$ with arcs $k-1\to k$ and $k-2\to k$; used to show the optimal substructure and the overlapping subproblems.
- [Billboards with no two consecutive positions (NOCONS)](dp-examples.md#sez-sec-cat-nocons): a maximum weight stable set on a path with $n$ vertices; a subset problem like the KP, with a conflict constraint instead of the capacity.
- [Maximum-profit path on a grid (GRID)](dp-examples.md#sez-sec-cat-grid): a longest path in an acyclic grid network; the exercise compares the $\binom{r+q-2}{r-1}$ paths with the $rq$ cells of the DP table.
- [Shortest path in a layered network (SPP)](dp-examples.md#sez-sec-cat-spp): the DP algorithm of the uncapacitated lot sizing problem computes a shortest path in a network whose arcs are production runs ().
- [Compatible requests (REQ)](dp-examples.md#sez-sec-cat-req): a single-machine selection problem: a subset of jobs (intervals) of maximum weight in which no two overlap.
