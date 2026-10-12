---
hide:
  - navigation
---

# Interactive lab

Here you can get your hands on combinatorial optimization: each app runs an algorithm step by step on the reference instances of the course,
which you can also change. Pick an app: it opens full page. Everything runs in the browser; the numbers are computed by the algorithm, not typed by hand.

## Combinatorial optimization problems

<div class="grid cards" markdown>

-   :material-graph-outline: **Vertex coloring: greedy and DSATUR**

    ---

    The graph is colored vertex by vertex with greedy and DSATUR: Petersen, crown graph or a random graph.

    [Open the app →](coloring-greedy-dsatur.md)

</div>

## Dynamic programming

<div class="grid cards" markdown>

-   :material-table-large: **DP table for the knapsack**

    ---

    The table v(j,k) fills one cell at a time, with the two choices that determine it; then the reconstruction of the solution.

    [Open the app →](dp-knapsack-table.md)

</div>

## Heuristic algorithms

<div class="grid cards" markdown>

-   :material-package-variant-closed: **Bin packing heuristics**

    ---

    Next Fit, First Fit, Best Fit, Worst Fit and FFD step by step, with the bound and the optimum. In «You pack» you try to beat the algorithm.

    [Open the app →](bin-packing-heuristics.md)

-   :material-chart-gantt: **List scheduling and LPT**

    ---

    The Gantt chart is built job by job; next to it the bound max{max t_j, ⌈Σ t_j / m⌉} and the optimum.

    [Open the app →](list-scheduling-lpt.md)

-   :material-map-marker-path: **TSP: nearest neighbour and 2-opt**

    ---

    The tour is built city by city and then 2-opt improves it: on the course instance or in the plane, with cities to drag.

    [Open the app →](tsp-nn-2opt.md)

</div>

## Approximation algorithms

<div class="grid cards" markdown>

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

</div>
