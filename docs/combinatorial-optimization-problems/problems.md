# The problems at a glance

The course solves 7 combinatorial optimization problems in every way: their characteristics and, for each, the chapters where it appears.

| Problem | A solution is | Objective | Constraints | Complexity |
|---|---|---|---|---|
| [Knapsack problem (KP)](#knapsack-problem-kp) | a subset of items | maximum total profit | total weight at most $c$ | weakly NP-hard, pseudo-polynomial DP in $O(nc)$ |
| [Bin packing (BPP)](#bin-packing-bpp) | a partition of the items into bins | minimum number of bins | load of each bin at most $c$ | strongly NP-hard |
| [Vertex coloring (VCP)](#vertex-coloring-vcp) | a partition of the vertices into stable sets | minimum number of colors $\chi(G)$ | adjacent vertices with different colors | strongly NP-hard |
| [Maximum clique (MCP)](#maximum-clique-mcp) | a subset of vertices | maximum cardinality $\omega(G)$ | pairwise adjacent vertices | NP-hard |
| [Travelling salesman (TSP)](#travelling-salesman-tsp) | a cyclic ordering of the cities | minimum tour length | each city visited exactly once | strongly NP-hard |
| [Parallel machine scheduling (P\|\|Cmax)](#parallel-machine-scheduling-pcmax) | an assignment of jobs to machines | minimum makespan $C_{\max}$ | each job on one machine, without interruption | strongly NP-hard ($m$ part of the input) |
| [Capacitated lot sizing (CLS)](#capacitated-lot-sizing-cls) | setup periods and production quantities | minimum setup, production and holding cost | demand satisfied, capacities respected | NP-hard (the uncapacitated case is polynomial) |

## Knapsack problem (KP)

*Choose items of maximum profit without exceeding the capacity.*

- Chapter 2: [Knapsack problems](../combinatorial-optimization-problems/knapsack.md)
- Chapter 9: [Formulations of the knapsack problem](../formulations/knapsack-formulations.md)
- Chapter 17: [DP for the knapsack problem](../dynamic-programming/dp-knapsack/index.md)
- Chapter 24: [Constructive heuristics](../heuristic-algorithms/constructive-heuristics/index.md)
- Chapter 30: [Approximation algorithms for the knapsack problem](../approximation-algorithms/knapsack-approximation.md)
- Chapter 34: [Knapsack: branch-and-bound on the critical item](../specialized-algorithms/knapsack-branch-and-bound.md)
- Definition: [Catalogue of combinatorial problems](../catalogue/central-problems.md#sez-sec-cat-def-kp)
- Selected problems: [everything the course does on this problem](../selected-problems/knapsack.md)

## Bin packing (BPP)

*Pack the items into the fewest bins.*

- Chapter 3: [Bin packing and cutting stock](../combinatorial-optimization-problems/bin-packing.md)
- Chapter 10: [Formulations of the bin packing problem](../formulations/bin-packing-formulations.md)
- Chapter 24: [Constructive heuristics](../heuristic-algorithms/constructive-heuristics/index.md)
- Chapter 29: [Approximation algorithms for bin packing](../approximation-algorithms/bin-packing-approximation.md)
- Definition: [Catalogue of combinatorial problems](../catalogue/central-problems.md#sez-sec-cat-def-bpp)
- Selected problems: [everything the course does on this problem](../selected-problems/bin-packing.md)

## Vertex coloring (VCP)

*Color the vertices of a graph with the fewest colors.*

- Chapter 4: [Vertex coloring](../combinatorial-optimization-problems/coloring.md)
- Chapter 11: [Formulations of the vertex coloring problem](../formulations/coloring-formulations.md)
- Chapter 24: [Constructive heuristics](../heuristic-algorithms/constructive-heuristics/index.md)
- Chapter 33: [Limits of approximation: vertex coloring](../approximation-algorithms/coloring-approximation.md)
- Definition: [Catalogue of combinatorial problems](../catalogue/central-problems.md#sez-sec-cat-def-vcp)
- Selected problems: [everything the course does on this problem](../selected-problems/vertex-coloring.md)

## Maximum clique (MCP)

*Find the largest set of pairwise adjacent vertices.*

- Chapter 5: [The maximum clique problem](../combinatorial-optimization-problems/clique.md)
- Chapter 12: [Formulations of the maximum clique problem](../formulations/clique-formulations.md)
- Definition: [Catalogue of combinatorial problems](../catalogue/central-problems.md#sez-sec-cat-def-mcp)
- Selected problems: [everything the course does on this problem](../selected-problems/maximum-clique.md)

## Travelling salesman (TSP)

*The shortest tour visiting all cities.*

- Chapter 6: [The travelling salesman problem](../combinatorial-optimization-problems/tsp.md)
- Chapter 13: [Formulations of the travelling salesman problem](../formulations/tsp-formulations.md)
- Chapter 24: [Constructive heuristics](../heuristic-algorithms/constructive-heuristics/index.md)
- Chapter 25: [Local search](../heuristic-algorithms/local-search/index.md)
- Chapter 26: [Metaheuristics](../heuristic-algorithms/metaheuristics/index.md)
- Chapter 32: [Approximation for the metric TSP](../approximation-algorithms/tsp-approximation.md)
- Definition: [Catalogue of combinatorial problems](../catalogue/central-problems.md#sez-sec-cat-def-tsp)
- Selected problems: [everything the course does on this problem](../selected-problems/tsp.md)

## Parallel machine scheduling (P||Cmax)

*Assign jobs to machines minimizing the makespan.*

- Chapter 7: [Parallel machine scheduling](../combinatorial-optimization-problems/pcmax.md)
- Chapter 14: [Formulations of parallel machine scheduling](../formulations/pcmax-formulations.md)
- Chapter 24: [Constructive heuristics](../heuristic-algorithms/constructive-heuristics/index.md)
- Chapter 31: [Approximation for P|Cmax](../approximation-algorithms/pcmax-approximation.md)
- Definition: [Catalogue of combinatorial problems](../catalogue/central-problems.md#sez-sec-cat-def-pcmax)
- Selected problems: [everything the course does on this problem](../selected-problems/pcmax.md)

## Capacitated lot sizing (CLS)

*Plan production minimizing setup and holding costs.*

- Chapter 8: [Capacitated lot sizing](../combinatorial-optimization-problems/lot-sizing.md)
- Chapter 15: [Formulations of capacitated lot sizing](../formulations/lot-sizing-formulations.md)
- Chapter 22: [Dynamic programming for lot sizing](../dynamic-programming/dp-lot-sizing/index.md)
- Definition: [Catalogue of combinatorial problems](../catalogue/central-problems.md#sez-sec-cat-def-cls)
- Selected problems: [everything the course does on this problem](../selected-problems/lot-sizing.md)

The heuristic algorithms (chapters 23, 24, 25, 26) apply to all the problems.
