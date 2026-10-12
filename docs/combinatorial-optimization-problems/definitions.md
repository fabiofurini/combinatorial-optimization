---
title: "Problem definitions"
---

# Problem definitions

<div class="info-capitolo" markdown>

**Problem definitions** · [:material-view-list: Selected problems](../selected-problems/index.md) · [:material-file-pdf-box: Selected problems (PDF)](../pdf/selected-problems.pdf)

</div>

<a id="sec:cat-pagina-problem-definitions"></a>

## Central problems

### The knapsack problem (KP) { #sez-sec-catdef-kp }

<a id="box-1-def-catdef-kp"></a>

!!! definizione "Definition 1: The knapsack problem"

    Given:

    1. a knapsack of <em>capacity</em> $c \in \Z_{\ge 1}$,

    2. a set $\mathscr{I} = \{1,2,\dots,n\}$ of $n$ items,

    3. for each item $j \in \mathscr{I}$, a <em>profit</em> $p_j \in \Z_{\ge 1}$ and a <em>weight</em> $w_j \in \Z_{\ge 1}$,

    the <strong>Knapsack Problem</strong> (KP) asks to decide which items to insert into the knapsack, so that the total weight of the selected items does not exceed the knapsack capacity, and the total profit of the selected items is maximized.

<strong>Assumptions</strong>

- We make the following assumptions:

    1. The total weight of all items exceeds the knapsack capacity (otherwise, all items could be selected). Formally:

        $$
        \sum_{j \in \mathscr{I}} w_j > c
        $$

    2. Each item individually fits into the knapsack (otherwise, it cannot be selected). Formally:

        $$
        w_j \le c,~~~~ \forall j \in \mathscr{I}
        $$

### The bin packing problem (BPP) { #sez-sec-catdef-bpp }

<a id="box-2-def-catdef-bpp"></a>

!!! definizione "Definition 2: The bin packing problem"

    Given:

    1. an infinite number of bins, each with <em>capacity</em> $c \in \Z_{\ge 1}$,

    2. a set $\mathscr{I} = \{1,2,\dots,n\}$ of $n$ items,

    3. for each item $j \in \mathscr{I}$, a <em>weight</em> $w_j \in \Z_{\ge 1}$,

    the <strong>Bin Packing Problem</strong> (BPP) asks to decide in which bin to place each item, so that the total weight of the items in any bin does not exceed the bin capacity, and the total number of bins used is minimized.

<strong>Assumptions</strong>

- We make the following assumptions:

    1. The total weight of all items exceeds the bin capacity (otherwise, all items could fit in a single bin). Formally:

        $$
        \sum_{j \in \mathscr{I}} w_j > c
        $$

    2. Each item individually fits into a single bin (otherwise, it cannot be packed at all). Formally:

        $$
        w_j \le c,~~~~ \forall j \in \mathscr{I}
        $$

### The vertex coloring problem (VCP) { #sez-sec-catdef-vcp }

<a id="box-3-def-catdef-vcp"></a>

!!! definizione "Definition 3: The vertex coloring problem"

    Given:

    1. a simple <em>graph</em> $G = (V,E)$, where

        $$
        V = \{1,2,\dots,n\}
        $$

        is the set of $n$ <em>vertices</em>, and

        $$
        E \subseteq \big\{\, \{u,v\} : u,v \in V,~ u \neq v \,\big\}
        $$

        is the set of $m$ <em>edges</em>,

    the <strong>Vertex Coloring Problem</strong> (VCP) asks to decide how to assign a color to each vertex, so that no two adjacent vertices share the same color, and the total number of colors used is minimized.

<strong>Assumptions</strong>

- We make the following assumptions:

    1. The graph has no isolated vertices. An isolated vertex can receive any color used by the rest of the graph; if the graph has no edges, the optimal value is one. Formally:

        $$
        \deg(v) \ge 1, \qquad \forall\, v \in V.
        $$

    2. No vertex has its neighbourhood contained in the neighbourhood of another vertex. Formally:

        $$
        N(u) \not\subseteq N(v), \qquad \forall\, u,v \in V,~ u \neq v.
        $$

- The second assumption can be made without loss of generality, because:

    1. if $N(u) \subseteq N(v)$, the vertex $u$ can be removed without changing the chromatic number: every coloring of $G \setminus \{u\}$ extends to $u$ with the color of $v$;

    2. the vertices $u$ and $v$ are not adjacent: otherwise $v \in N(u) \subseteq N(v)$, which is impossible in a simple graph, so $u$ and $v$ can share a color.

### The maximum clique problem (MCP) { #sez-sec-catdef-mcp }

<a id="box-4-def-catdef-mcp"></a>

!!! definizione "Definition 4: The maximum clique problem"

    Given:

    1. a simple <em>graph</em> $G = (V,E)$, where

        $$
        V = \{1,2,\dots,n\}
        $$

        is the set of $n$ <em>vertices</em>, and

        $$
        E \subseteq \big\{\, \{u,v\} : u,v \in V,~ u \neq v \,\big\}
        $$

        is the set of $m$ <em>edges</em>,

    the <strong>Maximum Clique Problem</strong> (MCP) asks to find a clique $K \subseteq V$ of $G$ whose number of vertices is maximum. Its optimal value is the clique number $\omega(G)$.

<strong>Assumptions</strong>

- We consider nontrivial instances: the graph has at least one edge and at least one non-edge. Formally:

    $$
    1 \le m < \binom{n}{2}.
    $$

- The assumption can be made without loss of generality: if the graph has no edge, every single vertex is a maximum clique and $\omega(G)=1$; if the graph is complete, $V$ itself is a clique and $\omega(G)=n$.

### The travelling salesman problem (TSP) { #sez-sec-catdef-tsp }

<a id="box-5-def-catdef-tsp"></a>

!!! definizione "Definition 5: The travelling salesman problem"

    Given:

    1. a set $\mathscr{V} = \{1,2,\dots,n\}$ of $n$ <em>cities</em>,

    2. for each pair of distinct cities $i,j \in \mathscr{V}$, a <em>distance</em> $d_{ij} \in \Z_{\ge 1}$, with $d_{ij}=d_{ji}$,

    the <strong>travelling salesman problem</strong> (TSP) asks to find a closed route that starts from a city, visits every other city exactly once and returns to the starting city, so that the total distance travelled is minimized.

<strong>Assumptions</strong>

- We make the following assumptions:

    1. There are at least three cities (with one or two cities there is only one route). Formally:

        $$
        n \ge 3
        $$

    2. The distances are symmetric (travelling from $i$ to $j$ costs as much as travelling from $j$ to $i$). Formally:

        $$
        d_{ij}=d_{ji},~~~~ \forall i,j \in \mathscr{V},~ i\neq j
        $$

### Scheduling on identical parallel machines ($P\|C_{\max}$) { #sez-sec-catdef-pcmax }

<a id="box-6-def-catdef-pcmax"></a>

!!! definizione "Definition 6: Scheduling on identical parallel machines"

    Given:

    1. a set of $m$ identical <em>machines</em>,

    2. a set $\mathscr{J} = \{1,2,\dots,n\}$ of $n$ <em>jobs</em>,

    3. for each job $j \in \mathscr{J}$, a <em>processing time</em> $t_j \in \Z_{\ge 1}$,

    the problem $P\,||\,C_{\max}$ asks to assign each job to a machine, so that the time needed to complete all the jobs, i.e., the largest total processing time assigned to a machine, is minimized.

<strong>Assumptions</strong>

- We make the following assumption:

    1. There are more jobs than machines (otherwise each job gets a machine of its own, and the optimal makespan is $\max_j t_j$). Formally:

        $$
        n > m
        $$

### Capacitated lot sizing (CLS) { #sez-sec-catdef-cls }

<a id="box-7-def-catdef-cls"></a>

!!! definizione "Definition 7: Capacitated lot sizing"

    Given:

    1. a set $T = \{1,2,\dots,m\}$ of $m$ <em>time periods</em>,

    2. for each period $t \in T$, a <em>demand</em> $d_t \in \Z_{\ge 1}$ and a <em>capacity</em> $cap_t \in \Z_{\ge 1}$, both counted in units of one product,

    3. for each period $t \in T$, three non-negative integer costs: the <em>setup cost</em> $sc_t$, the <em>variable production cost</em> $vc_t$ per unit produced and the <em>holding cost</em> $hc_t$ per unit kept in stock at the end of the period,

    the <strong>capacitated lot sizing problem</strong> (CLS) asks to decide how much to produce in every period, so that every demand is satisfied with what is produced and what is in stock, the capacities are respected, and the total cost of setups, production and holding is minimized.

<strong>Assumptions</strong>

- We make the following assumptions:

    1. The stock is empty at the beginning and at the end of the horizon. Leaving stock at the end only adds cost, so no optimal plan needs it; an initial stock is a variant of the problem (next section).

    2. The capacities allow to satisfy the demands, period after period (otherwise there is no feasible plan). Formally:

        $$
        \sum_{u=1}^{t} cap_u \ge \sum_{u=1}^{t} d_u, ~~~~ \forall t \in T
        $$

    3. The quantities are integer. With integer data, once the periods with a setup are fixed, what remains is a minimum cost flow problem, which has an integer optimal solution: restricting the quantities to integers does not change the optimal cost.

## Knapsack family

### Subset sum problem (SSP) { #sez-sec-catdef-ssp }

<a id="box-8-def-catdef-ssp"></a>

!!! definizione "Definition 8: Subset sum problem"

    Given:

    1. a target value $c \in \Z_{\ge 1}$,

    2. a set $\mathscr{I} = \{1,2,\dots,n\}$ of $n$ items,

    3. for each item $j \in \mathscr{I}$, a <em>weight</em> $w_j \in \Z_{\ge 1}$,

    the <strong>Subset Sum Problem</strong> (SSP) asks whether there exists a subset of items whose total weight is exactly equal to the target value $c$.

<strong>Assumptions</strong>

- We make the following assumptions:

    1. The total weight of all items is at least the target value (otherwise, no feasible subset can exist). Formally:

        $$
        \sum_{j \in \mathscr{I}} w_j \ge c
        $$

    2. Each item weight is not larger than the target value (otherwise, it cannot belong to any feasible subset). Formally:

        $$
        w_j \le c,~~~~ \forall j \in \mathscr{I}
        $$

### Bounded knapsack problem (BKP) { #sez-sec-catdef-bkp }

<a id="box-9-def-catdef-bkp"></a>

!!! definizione "Definition 9: Bounded knapsack problem"

    Given:

    1. a knapsack of <em>capacity</em> $c \in \Z_{\ge 1}$,

    2. a set $\mathscr{I} = \{1,2,\dots,n\}$ of $n$ items,

    3. for each item $j \in \mathscr{I}$, a <em>profit</em> $p_j \in \Z_{\ge 1}$, a <em>weight</em> $w_j \in \Z_{\ge 1}$, and a <em>number of available copies</em> $b_j \in \Z_{\ge 1}$,

    the <strong>Bounded Knapsack Problem</strong> (BKP) asks to decide how many copies of each item to insert into the knapsack, so that the total weight of all selected item copies does not exceed the knapsack capacity, each item is taken no more than its available copies, and the total profit of all selected item copies is maximized.

<strong>Assumptions</strong>

- We make the following assumptions:

    1. The total weight of all available copies of all items exceeds the knapsack capacity (otherwise, all copies could be selected). Formally:

        $$
        \sum_{j \in \mathscr{I}} b_j \, w_j > c
        $$

    2. Each item individually fits into the knapsack (otherwise, it cannot be selected). Formally:

        $$
        w_j \le c, \qquad \forall j \in \mathscr{I}
        $$

    3. The total weight of all available copies of any single item does not exceed the knapsack capacity (otherwise, that item could never be taken in the maximum allowed number of copies). Formally:

        $$
        b_j \, w_j \le c, \qquad \forall j \in \mathscr{I}
        $$

### Unbounded knapsack problem (UKP) { #sez-sec-catdef-ukp }

<a id="box-10-def-catdef-ukp"></a>

!!! definizione "Definition 10: Unbounded knapsack problem"

    Given:

    1. a knapsack of <em>capacity</em> $c \in \Z_{\ge 1}$,

    2. a set $\mathscr{I} = \{1,2,\dots,n\}$ of $n$ items,

    3. for each item $j \in \mathscr{I}$, which is available in an unlimited number of copies, a <em>profit</em> $p_j \in \Z_{\ge 1}$ and a <em>weight</em> $w_j \in \Z_{\ge 1}$,

    the <strong>Unbounded Knapsack Problem</strong> (UKP) asks to decide how many copies of each item to insert into the knapsack, so that the total weight of all selected item copies does not exceed the knapsack capacity and the total profit of all selected item copies is maximized.

<strong>Assumptions</strong>

- We make the following assumptions:

    1. The total weight of all possible copies of all items (up to the maximum number that can fit in the knapsack) exceeds the knapsack capacity (otherwise, all copies could be selected). Formally:

        $$
        \sum_{j \in \mathscr{I}} \hat b_j \, w_j > c
        $$

    2. Each item individually fits into the knapsack (otherwise, it cannot be selected). Formally:

        $$
        w_j \le c, \qquad \forall j \in \mathscr{I}
        $$

### Multidimensional knapsack problem (MDKP) { #sez-sec-catdef-mdkp }

<a id="box-11-def-catdef-mdkp"></a>

!!! definizione "Definition 11: Multidimensional knapsack problem"

    Given:

    1. a $k$-dimensional knapsack,

    2. for each dimension $d \in \underbrace{\{1,2,\dots,k\}}_{=\mathscr{D}}$, a <em>capacity</em> $c_d \in \Z_{\ge 1}$,

    3. a set $\mathscr{I} = \{1,2,\dots,n\}$ of $n$ items,

    4. for each item $j \in \mathscr{I}$, a <em>profit</em> $p_j \in \Z_{\ge 1}$,

    5. for each dimension $d \in \mathscr{D}$ and each item $j \in \mathscr{I}$, a <em>weight</em> $w_{dj} \in \Z_{\ge 1}$,

    the <strong>Multidimensional Knapsack Problem</strong> (MDKP) asks to decide which items to insert into the knapsack, so that for every dimension the total weight of the selected items does not exceed the corresponding capacity, and the total profit of the selected items is maximized.

<strong>Assumptions</strong>

- We make the following assumptions:

    1. The set of all items does <em>not</em> fit in the knapsack (otherwise, selecting all items is feasible and optimal). Formally,

        $$
        \exists\, d\in \mathscr{D} \ \text{such that}\ \sum_{j\in \mathscr{I}} w_{dj} \;>\; c_d .
        $$

    2. Each item individually fits in the knapsack in every dimension (otherwise, it can never be selected). Formally,

        $$
        w_{dj} \le c_d, \qquad \forall\, d\in \mathscr{D},\ \forall\, j\in \mathscr{I}.
        $$

### Multiple knapsack problem (MKP) { #sez-sec-catdef-mkp }

<a id="box-12-def-catdef-mkp"></a>

!!! definizione "Definition 12: Multiple knapsack problem"

    Given:

    1. $m \in \Z_{\ge 1}$ knapsacks,

    2. for each knapsack $k \in \underbrace{\{1,2,\dots,m\}}_{=\mathscr{K}}$, a <em>capacity</em> $c_k \in \Z_{\ge 1}$,

    3. a set $\mathscr{I} = \{1,2,\dots,n\}$ of $n$ items,

    4. for each item $j \in \mathscr{I}$, a <em>profit</em> $p_j \in \Z_{\ge 1}$ and a <em>weight</em> $w_{j} \in \Z_{\ge 1}$,

    the <strong>Multiple Knapsack Problem</strong> (MKP) asks to decide which items to insert into each knapsack, so that in every knapsack the total weight of the assigned items does not exceed its capacity, and the total profit of the selected items is maximized.

<strong>Assumptions</strong>

- We make the following assumptions:

    1. The set of all items does <em>not</em> fit in the knapsacks altogether (otherwise, selecting all items is feasible and optimal). Formally,

        $$
        \sum_{j\in \mathscr{I}} w_j \;>\; \sum_{k\in \mathscr{K}} c_k .
        $$

    2. Each item individually fits in (at least) one knapsack (otherwise, it can never be selected). Formally,

        $$
        \exists\, k\in \mathscr{K}\ \text{such that}\ w_j \le c_k, \qquad \forall\, j\in \mathscr{I}.
        $$

### Multiple-choice knapsack problem (MCKP) { #sez-sec-catdef-mckp }

<a id="box-13-def-catdef-mckp"></a>

!!! definizione "Definition 13: Multiple-choice knapsack problem"

    Given:

    1. a knapsack of <em>capacity</em> $c \in \Z_{\ge 1}$,

    2. a set $\mathscr{I} = \{1,2,\dots,n\}$ of $n$ items,

    3. the set of items is partitioned into $q \in \Z_{\ge 2}$ classes,

    4. for each class $h \in \{1,2,\dots,q\}$, the subset $\mathscr{J}_h \subseteq \mathscr{I}$ contains the items of that class,

    5. for each item $j \in \mathscr{I}$, a <em>profit</em> $p_j \in \Z_{\ge 1}$ and a <em>weight</em> $w_j \in \Z_{\ge 1}$,

    the <strong>Multiple-Choice Knapsack Problem</strong> (MCKP) asks to decide which items to insert into the knapsack, so that exactly one item is selected from each class, the total weight of the selected items does not exceed the knapsack capacity, and the total profit of the selected items is maximized.

<strong>Assumptions</strong>

- We make the following assumptions:

    1. Each class contains at least one item (otherwise, selecting exactly one item from each class is impossible). Formally:

        $$
        \mathscr{J}_h \neq \emptyset \qquad \forall\, h\in\{1,\dots,q\}.
        $$

    2. The instance is feasible, i.e., there exists at least one choice of exactly one item per class that fits in the knapsack. A necessary and sufficient (and easy-to-check) condition is:

        $$
        \sum_{h=1}^{q}\ \min_{j\in \mathscr{J}_h} w_j \;\le\; c.
        $$

### Knapsack problem with setups (KPS) { #sez-sec-catdef-kps }

<a id="box-14-def-catdef-kps"></a>

!!! definizione "Definition 14: Knapsack problem with setups"

    Given:

    1. a knapsack of <em>capacity</em> $c \in \Z_{\ge 1}$,

    2. a set $\mathscr{I} = \{1,2,\dots,n\}$ of $n$ items,

    3. the set of items is partitioned into $q \in \Z_{\ge 2}$ classes,

    4. for each class $h \in \{1,2,\dots,q\}$, the subset $\mathscr{J}_h \subseteq \mathscr{I}$ contains the items of that class, with an associated <em>setup cost</em> $f_h \in \Z_{\ge 1}$ and a <em>setup weight</em> $s_h \in \Z_{\ge 1}$,

    5. for each item $j \in \mathscr{I}$, a <em>revenue</em> $p_j \in \Z_{\ge 1}$ and a <em>weight</em> $w_j \in \Z_{\ge 1}$,

    the <strong>Knapsack Problem with Setups</strong> (KPS) asks to decide which items to insert into the knapsack, so that the total weight of the selected items plus the setup weights of their classes does not exceed the knapsack capacity, and the total revenue of the selected items minus the setup costs of their classes is maximized.

<strong>Assumptions</strong>

- We make the following assumptions:

    1. Each class contains at least one item. Formally:

        $$
        \mathscr{J}_h \neq \emptyset \qquad \forall\, h\in\{1,2,\dots,q\}.
        $$

    2. Each item can fit into the knapsack together with the setup weight of its class (otherwise, it can never be selected). Formally:

        $$
        w_j + s_h \le c \qquad \forall\, h\in\{1,2,\dots,q\},\ \forall\, j\in \mathscr{J}_h.
        $$

### Rod-Cutting Problem (RCP) { #sez-sec-catdef-rcp }

<a id="box-15-def-catdef-rcp"></a>

!!! definizione "Definition 15: Rod-Cutting Problem"

    Given:

    1. a rod of <em>length</em> $n \in \Z_{\ge 1}$,

    2. a set $\{1,2,\dots,n\}$ of $n$ possible piece lengths,

    3. for each piece length $\ell \in \{1,2,\dots,n\}$, a <em>profit</em> $p_\ell \in \Z_{\ge 1}$,

    the <strong>Rod-Cutting Problem</strong> (RCP) asks to decide how many copies of each piece length to cut, so that the total length of the obtained pieces is equal to the rod length, and the total profit of the obtained pieces is maximized.

### Coin Change Problem (CCP) { #sez-sec-catdef-ccp }

<a id="box-16-def-catdef-ccp"></a>

!!! definizione "Definition 16: Coin Change Problem"

    Given:

    1. a vector $w \in \Z_{\ge 1}^n$ of $n$ <em>denominations</em>, each available in unlimited supply,

    2. an integer <em>amount of change</em> $c \in \Z_{\ge 0}$ to return,

    the <strong>Coin Change Problem</strong> (CCP) asks to decide how many coins of each denomination to use so that their total value is exactly equal to $c$, and the total number of coins used is minimized. If no combination of coins returns exactly $c$, the instance is <em>infeasible</em>.

## Packing

### Cutting stock problem (CSP) { #sez-sec-catdef-csp }

<a id="box-17-def-catdef-csp"></a>

!!! definizione "Definition 17: Cutting stock problem"

    Given:

    1. an infinite number of bins, each with <em>capacity</em> $c \in \Z_{\ge 1}$,

    2. a set $\mathscr{I} = \{1,2,\dots,n\}$ of $n$ items,

    3. for each item $j \in \mathscr{I}$, a <em>weight</em> $w_j \in \Z_{\ge 1}$ and a <em>number of required copies</em> $d_j \in \Z_{\ge 1}$,

    the <strong>Cutting Stock Problem</strong> (CSP) asks to decide in which bin to place each copy of every item, so that the total weight of all item copies in any bin does not exceed the bin capacity, the required number of copies of each item is placed into the bins, and the total number of bins used is minimized.

<strong>Assumptions</strong>

- We make the following assumptions:

    1. The total weight of all required item copies exceeds the bin capacity (otherwise, all copies could fit in a single bin). Formally:

        $$
        \sum_{j\in \mathscr{I}} d_j\, w_j \;>\; c.
        $$

    2. Each item individually fits into a single bin (otherwise, no copy of that item can be packed at all). Formally:

        $$
        w_j \le c, \qquad \forall\, j\in \mathscr{I}.
        $$

## Graphs

### 3-colorability (3-COL) { #sez-sec-catdef-3col }

<a id="box-18-def-catdef-3col"></a>

!!! definizione "Definition 18: 3-colorability"

    Given a graph $G=(V,E)$, decide whether $\chi(G)\le 3$.

### Maximum stable set problem (MSSP) { #sez-sec-catdef-mssp }

<a id="box-19-def-catdef-mssp"></a>

!!! definizione "Definition 19: Maximum stable set problem"

    Let $G=(V,E)$ be a graph.

    1. A <strong>stable set</strong> (also called <strong>independent set</strong>) is a subset $Q \subseteq V$ of pairwise non-adjacent vertices: $\{u,v\} \notin E$ for all $u,v \in Q$ with $u \neq v$.

    2. The <strong>Maximum Stable Set Problem</strong> (MSSP) asks to find a stable set of $G$ whose number of vertices is maximum. Its optimal value is the <strong>stability number</strong> $\alpha(G)$.

<strong>Assumptions</strong>

- We consider nontrivial instances: the graph has at least one edge and at least one non-edge. Formally:

    $$
    1 \le m < \binom{n}{2}.
    $$

- The assumption can be made without loss of generality: if the graph has no edge, every single vertex is a maximum clique and $\omega(G)=1$; if the graph is complete, $V$ itself is a clique and $\omega(G)=n$.

### Vertex-weighted maximum clique problem (VWMCP) { #sez-sec-catdef-vwmcp }

<a id="box-20-def-catdef-vwmcp"></a>

!!! definizione "Definition 20: Vertex-weighted maximum clique problem"

    1. Given a graph $G$ and a vertex-weight vector $\vet{w}$, the <strong>vertex-weighted maximum clique problem</strong> asks to find a clique $K$ of $G$ with maximum total vertex weight $w(K)$.

    2. Given a graph $G$ and an edge-weight vector $\vet{r}$, the <strong>edge-weighted maximum clique problem</strong> asks to find a clique $K$ of $G$ with maximum total edge weight $r(K)$.

### Edge-weighted maximum clique problem (EWMCP) { #sez-sec-catdef-ewmcp }

<a id="box-21-def-catdef-ewmcp"></a>

!!! definizione "Definition 21: Edge-weighted maximum clique problem"

    1. Given a graph $G$ and a vertex-weight vector $\vet{w}$, the <strong>vertex-weighted maximum clique problem</strong> asks to find a clique $K$ of $G$ with maximum total vertex weight $w(K)$.

    2. Given a graph $G$ and an edge-weight vector $\vet{r}$, the <strong>edge-weighted maximum clique problem</strong> asks to find a clique $K$ of $G$ with maximum total edge weight $r(K)$.

## Routing

### Metric travelling salesman problem (metric TSP) { #sez-sec-catdef-metrictsp }

<a id="box-22-def-catdef-metrictsp"></a>

!!! definizione "Definition 22: Metric travelling salesman problem"

    A TSP instance is <strong>metric</strong> if its distances satisfy the <strong>triangle inequality</strong>

    $$
    d_{ij} \le d_{ik} + d_{kj}
    \qquad \text{for all distinct } i,j,k \in \mathscr{V}.
    $$

### Asymmetric travelling salesman problem (ATSP) { #sez-sec-catdef-atsp }

<a id="box-23-def-catdef-atsp"></a>

!!! definizione "Definition 23: Asymmetric travelling salesman problem"

    In the <strong>asymmetric travelling salesman problem</strong> (ATSP) the distances are not required to be symmetric: $d_{ij}$ may differ from $d_{ji}$. The definition of tour and of its length $L(\sigma)$ is unchanged, but a tour and the same tour travelled backwards are different solutions.

### Hamiltonian cycle problem (HCP) { #sez-sec-catdef-hcp }

<a id="box-24-def-catdef-hcp"></a>

!!! definizione "Definition 24: Hamiltonian cycle problem"

    The <strong>Hamiltonian cycle problem</strong> asks whether a graph $G=(V,E)$ has a cycle through all its vertices.

## Scheduling

### Scheduling on a fixed number of identical machines ($m$ not part of the input) ($Pm\|C_{\max}$) { #sez-sec-catdef-pmcmax }

<a id="box-25-def-catdef-pmcmax"></a>

!!! definizione "Definition 25: Scheduling on a fixed number of identical machines"

    The problem $P\,||\,C_{\max}$ in which the number $m$ of machines is a constant, for example $m=2$, and only the jobs $\Jlavori$ and the processing times $t_j \in \Z_{\ge 1}$ form the input.

### Scheduling on parallel machines with different speeds, $Q\,||\,C_{\max}$ { #sez-sec-catdef-qcmax }

<a id="box-26-def-catdef-qcmax"></a>

!!! definizione "Definition 26: Scheduling on parallel machines with different speeds, $Q\,||\,C_{\max}$"

    In the three-field notation $\alpha\,|\,\beta\,|\,\gamma$, the machine environment $\alpha=Q$ denotes parallel machines with different speeds; $Q\,||\,C_{\max}$ assigns jobs without additional characteristics to such machines, minimizing the makespan $C_{\max}$.

### Scheduling on unrelated parallel machines, $R\,||\,C_{\max}$ { #sez-sec-catdef-rcmax }

<a id="box-27-def-catdef-rcmax"></a>

!!! definizione "Definition 27: Scheduling on unrelated parallel machines, $R\,||\,C_{\max}$"

    In the three-field notation $\alpha\,|\,\beta\,|\,\gamma$, the machine environment $\alpha=R$ denotes unrelated parallel machines; $R\,||\,C_{\max}$ assigns jobs without additional characteristics to such machines, minimizing the makespan $C_{\max}$.

## Lot sizing

### Uncapacitated lot sizing problem (ULS) { #sez-sec-catdef-uls }

<a id="box-28-def-catdef-uls"></a>

!!! definizione "Definition 28: Uncapacitated lot sizing problem"

    Given:

    1. a set $T=\{1,2,\dots,m\}$ of $m \in \Z_{\ge 1}$ <em>time periods</em>,

    2. for each period $t \in T$, a <em>demand</em> $d_t \in \Z_{\ge 1}$,

    3. for each period $t \in T$, a <em>setup cost</em> $sc_t \in \Z_{\ge 0}$, a <em>variable production cost</em> $vc_t \in \Z_{\ge 0}$ per unit, and a <em>holding cost</em> $hc_t \in \Z_{\ge 0}$ per unit in stock at the end of period $t$,

    the <strong>Uncapacitated Lot-Sizing Problem</strong> (ULS) asks to decide how many units to produce in each period, so that, starting with an empty inventory and ending with an empty inventory, the demand of every period is satisfied, and the total cost of setups, production, and holding is minimized.

### Capacitated lot sizing with constant capacity (CLS-C) { #sez-sec-catdef-clsc }

<a id="box-29-def-catdef-clsc"></a>

!!! definizione "Definition 29: Capacitated lot sizing with constant capacity"

    The CLS in which the capacity is the same in all periods, $cap_t=C$ for all $t\in T$.

### Lot sizing with several products and setup times (MLS) { #sez-sec-catdef-mls }

<a id="box-30-def-catdef-mls"></a>

!!! definizione "Definition 30: Lot sizing with several products and setup times"

    A set $P$ of products shares the resource of each period: $d_{pt}$, $sc_{pt}$, $vc_{pt}$ and $hc_{pt}$ are the data of product $p \in P$ in period $t \in T$; producing a unit of $p$ takes the time $vt_{pt} \in \Z_{\ge 1}$, a setup takes the time $st_{pt} \in \Z_{\ge 0}$, and the capacity $cap_t$ is a time.

### Lot sizing with initial stock (LS-SI) { #sez-sec-catdef-lssi }

<a id="box-31-def-catdef-lssi"></a>

!!! definizione "Definition 31: Lot sizing with initial stock"

    The quantity $si_p$ of product $p$ available at the beginning of the horizon is a decision, bought at the cost $fc_p$ per unit; the balance of the first period becomes $si_{p} + x_{p1} = d_{p1} + s_{p1}$.

### Lot sizing with overtime (LS-OT) { #sez-sec-catdef-lsot }

<a id="box-32-def-catdef-lsot"></a>

!!! definizione "Definition 32: Lot sizing with overtime"

    The capacity is not fixed: working time in normal hours costs $cw_t$ per unit up to $cap^{N}_t$, and overtime costs $co_t$ per unit up to $cap^{O}_t$.

### Lot sizing with unsatisfied demand (LS-UD) { #sez-sec-catdef-lsud }

<a id="box-33-def-catdef-lsud"></a>

!!! definizione "Definition 33: Lot sizing with unsatisfied demand"

    A part of the demand may be left unsatisfied, at a penalty $cu_{pt}$ per unit.

## DP examples

### Minimum-cost staircase (STAIR) { #sez-sec-catdef-stair }

<a id="box-34-def-catdef-stair"></a>

!!! definizione "Definition 34: Minimum-cost staircase"

    A staircase has $n$ steps. Stepping on step $k$ costs $c_k$, and from a step we can climb to the next one or skip one step. We start from the ground, step $0$, at no cost, and we want to reach step $n$ at minimum total cost.

### Billboards with no two consecutive positions (NOCONS) { #sez-sec-catdef-nocons }

<a id="box-35-def-catdef-nocons"></a>

!!! definizione "Definition 35: Billboards with no two consecutive positions"

    Along a road there are $n$ positions for billboards, numbered in order. A billboard in position $k$ brings a profit $p_k$, and two billboards cannot be in consecutive positions. We want a set of positions, no two consecutive, of maximum total profit.

### Maximum-profit path on a grid (GRID) { #sez-sec-catdef-grid }

<a id="box-36-def-catdef-grid"></a>

!!! definizione "Definition 36: Maximum-profit path on a grid"

    A robot moves on a grid of $r$ rows and $q$ columns, from the cell $(1,1)$ to the cell $(r,q)$, one cell down or one cell right at each move. Every cell $(i,j)$ it visits gives a profit $a_{ij}$. We want a path of maximum total profit.

### Shortest path in a layered network (SPP) { #sez-sec-catdef-spp }

<a id="box-37-def-catdef-spp"></a>

!!! definizione "Definition 37: Shortest path in a layered network"

    We look for a shortest path from $s$ to $t$ in a directed network $G=(N,A)$, where every arc $(i,j)\in A$ has a cost $c_{ij}$.

### Compatible requests (REQ) { #sez-sec-catdef-req }

<a id="box-38-def-catdef-req"></a>

!!! definizione "Definition 38: Compatible requests"

    A room can host one event at a time. There are $n$ requests: request $j$ occupies the room from time $a_j$ to time $b_j$ and pays $w_j$; two requests are compatible if one ends before (or when) the other starts. The requests are numbered by non-decreasing end time. We want a set of pairwise compatible requests of maximum total payment.
