---
hide:
  - navigation
---

# Interactive lab

Here you can get your hands on combinatorial optimization: each app runs an algorithm step by step on the reference instances of the course,
which you can also change. Pick an app: it opens full page. Everything runs in the browser; the numbers are computed by the algorithm, not typed by hand.

## Combinatorial optimization problems

<div class="grid cards" markdown>

-   :material-format-list-checks: **Brute force on the 0/1 knapsack problem**

    ---

    All the 2ⁿ subsets of items, one at a time: which ones are feasible, the best one found and the combinatorial explosion.

    [Open the app →](kp-brute-force.md)

</div>

## Formulations and their properties

<div class="grid cards" markdown>

-   :material-chart-bar: **LP relaxation and upper bounds for the 0/1 KP**

    ---

    The items by efficiency, the split item cut by the capacity, the LP solution and the Dantzig and Martello-Toth upper bounds.

    [Open the app →](kp-lp-relaxation-bounds.md)

</div>

## Dynamic programming

<div class="grid cards" markdown>

-   :material-table-large: **DP tables for the knapsack problems**

    ---

    0/1, unbounded, bounded knapsack and subset sum: the table fills one cell at a time, with the cells it depends on; then the reconstruction of the solution.

    [Open the app →](dp-knapsack-table.md)

-   :material-factory: **Wagner-Whitin for uncapacitated lot sizing**

    ---

    The recurrence v(t) tries every period of the last production run: a shortest path in the network of the production runs, then the optimal plan.

    [Open the app →](wagner-whitin-lot-sizing.md)

</div>

## Heuristic algorithms

<div class="grid cards" markdown>

-   :material-package-variant-closed: **Bin packing heuristics**

    ---

    Next Fit, First Fit, Best Fit, Worst Fit and FFD step by step, with the bound and the optimum. In «You pack» you try to beat the algorithm.

    [Open the app →](bin-packing-heuristics.md)

-   :material-graph-outline: **Vertex coloring: greedy and DSATUR**

    ---

    The graph is colored vertex by vertex with greedy and DSATUR: Petersen, crown graph or a random graph.

    [Open the app →](coloring-greedy-dsatur.md)

-   :material-map-marker-path: **TSP: nearest neighbour and 2-opt**

    ---

    The tour is built city by city and then 2-opt improves it: on the course instance or in the plane, with cities to drag.

    [Open the app →](tsp-nn-2opt.md)

-   :material-fire: **TSP: simulated annealing and tabu search**

    ---

    The two metaheuristics with 2-opt, on the reference instance, on TSP20 and on the instance of the exercises, with the random numbers of the notes: current tour, best tour and length curve.

    [Open the app →](simulated-annealing-tabu-search.md)

-   :material-chart-gantt: **List scheduling and LPT**

    ---

    The Gantt chart is built job by job; next to it the bound max{max t_j, ⌈Σ t_j / m⌉} and the optimum.

    [Open the app →](list-scheduling-lpt.md)

</div>

## Approximation algorithms

<div class="grid cards" markdown>

-   :material-approximately-equal: **0/1 KP: greedy, Ext-Greedy, H² and FPTAS**

    ---

    The approximation algorithms of the chapter step by step, with the ratio z(I)/A(I); in the FPTAS the scaled profits and the DP by profits.

    [Open the app →](kp-approximation.md)

-   :material-vector-polyline: **Metric TSP: double tree and Christofides**

    ---

    Minimum spanning tree, matching of the odd vertices, Eulerian circuit and shortcutting, on the reference instance, on the exercises and on the tight families.

    [Open the app →](metric-tsp-double-tree-christofides.md)

-   :material-target: **Tight instances**

    ---

    Next Fit, extended greedy and LPT on families of instances: the ratio with the optimum approaches the guarantee, which cannot be improved.

    [Open the app →](tight-instances.md)

</div>

## Ad hoc algorithms

<div class="grid cards" markdown>

-   :material-file-tree: **Branch-and-bound for the knapsack**

    ---

    The tree grows node by node, with the Dantzig bounds, the prunings and the incumbent.

    [Open the app →](knapsack-branch-and-bound.md)

-   :material-file-tree-outline: **Vertex coloring: the DSATUR branch-and-bound**

    ---

    The tree of the partial colorings node by node: most saturated vertex, one child per feasible color plus one new color, pruning when q ≥ UB.

    [Open the app →](dsatur-branch-and-bound.md)

</div>
