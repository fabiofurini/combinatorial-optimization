# The problems at a glance

The course solves 7 combinatorial optimization problems in every way: their characteristics and, for each, the chapters where it appears.

[:material-view-list: Catalogue of problems](../catalogue/index.md){ .md-button } [:material-file-pdf-box: Catalogue of problems (PDF)](../pdf/combinatorial-problem-catalogue.pdf){ .md-button }

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
- Chapter 17: [Dynamic programming for knapsack problems](../dynamic-programming/dp-knapsack.md)
- Chapter 21: [Constructive heuristics](../heuristic-algorithms/constructive-heuristics.md)
- Chapter 27: [Approximation algorithms for the knapsack problem](../approximation-algorithms/knapsack-approximation.md)
- Chapter 29: [Knapsack: branch-and-bound on the critical item](../specialized-algorithms/knapsack-branch-and-bound.md)
- Catalogue: [everything the course does on this problem](../catalogue/knapsack.md)

## Bin packing (BPP)

*Pack the items into the fewest bins.*

- Chapter 3: [Bin packing and cutting stock](../combinatorial-optimization-problems/bin-packing.md)
- Chapter 10: [Formulations of the bin packing problem](../formulations/bin-packing-formulations.md)
- Chapter 21: [Constructive heuristics](../heuristic-algorithms/constructive-heuristics.md)
- Chapter 26: [Approximation algorithms for bin packing](../approximation-algorithms/bin-packing-approximation.md)
- Catalogue: [everything the course does on this problem](../catalogue/bin-packing.md)

## Vertex coloring (VCP)

*Color the vertices of a graph with the fewest colors.*

- Chapter 4: [Vertex coloring](../combinatorial-optimization-problems/coloring.md)
- Chapter 11: [Formulations of the vertex coloring problem](../formulations/coloring-formulations.md)
- Chapter 21: [Constructive heuristics](../heuristic-algorithms/constructive-heuristics.md)
- Chapter 28: [P|Cmax, metric TSP and the limits of approximation](../approximation-algorithms/pcmax-tsp-coloring-approximation.md)
- Catalogue: [everything the course does on this problem](../catalogue/vertex-coloring.md)

## Maximum clique (MCP)

*Find the largest set of pairwise adjacent vertices.*

- Chapter 5: [The maximum clique problem](../combinatorial-optimization-problems/clique.md)
- Chapter 12: [Formulations of the maximum clique problem](../formulations/clique-formulations.md)
- Catalogue: [everything the course does on this problem](../catalogue/maximum-clique.md)

## Travelling salesman (TSP)

*The shortest tour visiting all cities.*

- Chapter 6: [The travelling salesman problem](../combinatorial-optimization-problems/tsp.md)
- Chapter 13: [Formulations of the travelling salesman problem](../formulations/tsp-formulations.md)
- Chapter 21: [Constructive heuristics](../heuristic-algorithms/constructive-heuristics.md)
- Chapter 22: [Local search](../heuristic-algorithms/local-search.md)
- Chapter 23: [Metaheuristics](../heuristic-algorithms/metaheuristics.md)
- Chapter 28: [P|Cmax, metric TSP and the limits of approximation](../approximation-algorithms/pcmax-tsp-coloring-approximation.md)
- Catalogue: [everything the course does on this problem](../catalogue/tsp.md)

## Parallel machine scheduling (P||Cmax)

*Assign jobs to machines minimizing the makespan.*

- Chapter 7: [Parallel machine scheduling](../combinatorial-optimization-problems/pcmax.md)
- Chapter 14: [Formulations of parallel machine scheduling](../formulations/pcmax-formulations.md)
- Chapter 21: [Constructive heuristics](../heuristic-algorithms/constructive-heuristics.md)
- Chapter 28: [P|Cmax, metric TSP and the limits of approximation](../approximation-algorithms/pcmax-tsp-coloring-approximation.md)
- Catalogue: [everything the course does on this problem](../catalogue/pcmax.md)

## Capacitated lot sizing (CLS)

*Plan production minimizing setup and holding costs.*

- Chapter 8: [Capacitated lot sizing](../combinatorial-optimization-problems/lot-sizing.md)
- Chapter 15: [Formulations of capacitated lot sizing](../formulations/lot-sizing-formulations.md)
- Chapter 19: [Dynamic programming for lot sizing](../dynamic-programming/dp-lot-sizing.md)
- Catalogue: [everything the course does on this problem](../catalogue/lot-sizing.md)

The heuristic algorithms (chapters 20, 21, 22, 23) apply to all the problems.
