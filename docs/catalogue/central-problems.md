---
title: "Central problems"
---

# Central problems

<div class="info-capitolo" markdown>

**Catalogue of combinatorial problems** · [:material-file-pdf-box: Catalogue (PDF)](../pdf/combinatorial-problem-catalogue.pdf)

</div>

<a id="sec:cat-pagina-central-problems"></a>

## The knapsack problem (KP) { #sez-sec-cat-def-kp }

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

- Defined in [Chapter 2 «Knapsack problems»](../combinatorial-optimization-problems/knapsack/index.md#box-1-defKP).

- Studied in depth in [Selected problems: The knapsack problem](../problemi-scelti/knapsack.md).

## The bin packing problem (BPP) { #sez-sec-cat-def-bpp }

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

- Defined in [Chapter 3 «Bin packing and cutting stock»](../combinatorial-optimization-problems/bin-packing/index.md#box-1-defBPP).

- Studied in depth in [Selected problems: The bin packing problem](../problemi-scelti/bin-packing.md).

## The vertex coloring problem (VCP) { #sez-sec-cat-def-vcp }

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

- Defined in [Chapter 4 «Vertex coloring»](../combinatorial-optimization-problems/coloring.md#box-3-defVCP).

- Studied in depth in [Selected problems: The vertex coloring problem](../problemi-scelti/vertex-coloring.md).

## The maximum clique problem (MCP) { #sez-sec-cat-def-mcp }

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

- Defined in [Chapter 5 «The maximum clique problem»](../combinatorial-optimization-problems/clique/index.md#box-2-mcpP-def-MCP).

- Studied in depth in [Selected problems: The maximum clique problem](../problemi-scelti/maximum-clique.md).

## The travelling salesman problem (TSP) { #sez-sec-cat-def-tsp }

<a id="box-5-def-catdef-tsp"></a>

!!! definizione "Definition 5: The travelling salesman problem"

    Given:

    1. a set $\Vcitta = \{1,2,\dots,n\}$ of $n$ <em>cities</em>,

    2. for each pair of distinct cities $i,j \in \Vcitta$, a <em>distance</em> $d_{ij} \in \Z_{\ge 1}$, with $d_{ij}=d_{ji}$,

    the <strong>travelling salesman problem</strong> (TSP) asks to find a closed route that starts from a city, visits every other city exactly once and returns to the starting city, so that the total distance travelled is minimized.

- Defined in [Chapter 6 «The travelling salesman problem»](../combinatorial-optimization-problems/tsp/index.md#box-1-defTSP).

- Studied in depth in [Selected problems: The travelling salesman problem](../problemi-scelti/tsp.md).

## Scheduling on identical parallel machines ($P\|C_{\max}$) { #sez-sec-cat-def-pcmax }

<a id="box-6-def-catdef-pcmax"></a>

!!! definizione "Definition 6: Scheduling on identical parallel machines"

    Given:

    1. a set of $m$ identical <em>machines</em>,

    2. a set $\Jlavori = \{1,2,\dots,n\}$ of $n$ <em>jobs</em>,

    3. for each job $j \in \Jlavori$, a <em>processing time</em> $t_j \in \Z_{\ge 1}$,

    the problem $P\,||\,C_{\max}$ asks to assign each job to a machine, so that the time needed to complete all the jobs, i.e., the largest total processing time assigned to a machine, is minimized. With $J_h$ the set of jobs of machine $h$ and $L_h=\sum_{j\in J_h} t_j$ its load, the problem reads

    $$
    \min\left\{\max_{h \in \{1,\dots,m\}} \sum_{j \in J_h} t_j \;:\; J_1,J_2,\dots,J_m \text{ is a partition of } \Jlavori\right\}.
    $$

- Defined in [Chapter 7 «Parallel machine scheduling»](../combinatorial-optimization-problems/pcmax/index.md#box-1-defPCmax).

- Studied in depth in [Selected problems: Scheduling on identical parallel machines](../problemi-scelti/pcmax.md).

## Capacitated lot sizing (CLS) { #sez-sec-cat-def-cls }

<a id="box-7-def-catdef-cls"></a>

!!! definizione "Definition 7: Capacitated lot sizing"

    Given:

    1. a set $T = \{1,2,\dots,m\}$ of $m$ <em>time periods</em>,

    2. for each period $t \in T$, a <em>demand</em> $d_t \in \Z_{\ge 1}$ and a <em>capacity</em> $cap_t \in \Z_{\ge 1}$, both counted in units of one product,

    3. for each period $t \in T$, three non-negative integer costs: the <em>setup cost</em> $sc_t$, the <em>variable production cost</em> $vc_t$ per unit produced and the <em>holding cost</em> $hc_t$ per unit kept in stock at the end of the period,

    the <strong>capacitated lot sizing problem</strong> (CLS) asks to decide how much to produce in every period, so that every demand is satisfied with what is produced and what is in stock, the capacities are respected, and the total cost of setups, production and holding is minimized. With the stock $s_t(\vet{x})=\sum_{u=1}^{t}(x_u-d_u)$ and $y_t=1$ when $x_t>0$, the cost of a plan is $c(\vet{x})=\sum_{t\in T}\bigl(sc_t\,y_t+vc_t\,x_t+hc_t\,s_t(\vet{x})\bigr)$, and the problem reads

    $$
    \min_{\vet{x}}\left\{ c(\vet{x}) \;:\; x_t \le cap_t,~ s_t(\vet{x}) \ge 0,~ \forall t \in T,~ s_m(\vet{x}) = 0,~ \vet{x} \in \Z_{\ge 0}^m \right\}.
    $$

- Defined in [Chapter 8 «Capacitated lot sizing»](../combinatorial-optimization-problems/lot-sizing/index.md#box-1-defCLS).

- Studied in depth in [Selected problems: Capacitated lot sizing](../problemi-scelti/lot-sizing.md).
