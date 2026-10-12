# The problems at a glance

The course solves 7 combinatorial optimization problems in every way: their characteristics, what the course does on each one, and its in-depth page.

## Characteristics

| Problem | A solution is | Objective | Constraints | Complexity |
|---|---|---|---|---|
| 0/1 knapsack problem (KP) | a subset of items | maximum total profit | total weight at most $c$ | weakly NP-hard, pseudo-polynomial DP in $O(nc)$ |
| Bin packing (BPP) | a partition of the items into bins | minimum number of bins | load of each bin at most $c$ | strongly NP-hard |
| Vertex coloring (VCP) | a partition of the vertices into stable sets | minimum number of colors $\chi(G)$ | adjacent vertices with different colors | strongly NP-hard |
| Maximum clique (MCP) | a subset of vertices | maximum cardinality $\omega(G)$ | pairwise adjacent vertices | NP-hard |
| Travelling salesman (TSP) | a cyclic ordering of the cities | minimum tour length | each city visited exactly once | strongly NP-hard |
| Parallel machine scheduling (P\|\|Cmax) | an assignment of jobs to machines | minimum makespan $C_{\max}$ | each job on one machine, without interruption | strongly NP-hard ($m$ part of the input) |
| Capacitated lot sizing (CLS) | setup periods and production quantities | minimum setup, production and holding cost | demand satisfied, capacities respected | NP-hard (the uncapacitated case is polynomial) |

## What the course does on each problem

Each cell links to the chapter.

| Problem | Definition | Formulations | DP | Heuristics | MIP heuristics | Approximation | Ad hoc algorithms | Exercises |
|---|---|---|---|---|---|---|---|---|
| KP | Ch. [2](../combinatorial-optimization-problems/knapsack/index.md) | Ch. [9](../formulations/knapsack-formulations/index.md) | Ch. [17](../dynamic-programming/dp-knapsack/index.md), [18](../dynamic-programming/dp-unbounded-knapsack/index.md), [19](../dynamic-programming/dp-bounded-knapsack.md), [20](../dynamic-programming/dp-subset-sum.md), [21](../dynamic-programming/dp-multiple-choice-knapsack.md), [22](../dynamic-programming/dp-multidimensional-knapsack.md), [23](../dynamic-programming/dp-knapsack-setups.md), [24](../dynamic-programming/dp-multiple-knapsack.md) | Ch. [30](../heuristic-algorithms/constructive-heuristics/index.md), [31](../heuristic-algorithms/local-search/index.md), [32](../heuristic-algorithms/metaheuristics/index.md) | Ch. [33](../heuristic-algorithms/mip-heuristics-classical.md) | Ch. [34](../approximation-algorithms/approximation.md), [35](../approximation-algorithms/knapsack-approximation.md) | Ch. [41](../specialized-algorithms/knapsack-branch-and-bound.md) | Ch. [2](../exercises/knapsack.md), [9](../exercises/knapsack-formulations.md), [17](../exercises/dp-knapsack.md), [29](../exercises/heuristics.md), [30](../exercises/constructive-heuristics.md), [31](../exercises/local-search.md), [32](../exercises/metaheuristics.md), [33](../exercises/mip-heuristics-classical.md), [34](../exercises/approximation.md), [35](../exercises/knapsack-approximation.md), [41](../exercises/knapsack-branch-and-bound.md) |
| BPP | Ch. [3](../combinatorial-optimization-problems/bin-packing/index.md) | Ch. [10](../formulations/bin-packing-formulations/index.md) | — | Ch. [30](../heuristic-algorithms/constructive-heuristics/index.md), [31](../heuristic-algorithms/local-search/index.md), [32](../heuristic-algorithms/metaheuristics/index.md) | Ch. [33](../heuristic-algorithms/mip-heuristics-classical.md) | Ch. [30](../heuristic-algorithms/constructive-heuristics/index.md), [36](../approximation-algorithms/bin-packing-approximation.md) | — | Ch. [1](../exercises/combinatorial-optimization.md), [3](../exercises/bin-packing.md), [10](../exercises/bin-packing-formulations.md), [29](../exercises/heuristics.md), [30](../exercises/constructive-heuristics.md), [31](../exercises/local-search.md), [32](../exercises/metaheuristics.md), [34](../exercises/approximation.md), [36](../exercises/bin-packing-approximation.md) |
| VCP | Ch. [4](../combinatorial-optimization-problems/coloring/index.md) | Ch. [11](../formulations/coloring-formulations/index.md) | — | — | — | not approximable | Ch. [42](../specialized-algorithms/dsatur-branch-and-bound.md) | Ch. [4](../exercises/coloring.md), [11](../exercises/coloring-formulations.md), [42](../exercises/dsatur-branch-and-bound.md) |
| MCP | Ch. [5](../combinatorial-optimization-problems/clique/index.md) | Ch. [12](../formulations/clique-formulations/index.md) | — | Ch. [5](../combinatorial-optimization-problems/clique/index.md) | — | not approximable | — | — |
| TSP | Ch. [6](../combinatorial-optimization-problems/tsp/index.md) | Ch. [13](../formulations/tsp-formulations/index.md) | — | Ch. [6](../combinatorial-optimization-problems/tsp/index.md), [30](../heuristic-algorithms/constructive-heuristics/index.md), [31](../heuristic-algorithms/local-search/index.md), [32](../heuristic-algorithms/metaheuristics/index.md) | Ch. [33](../heuristic-algorithms/mip-heuristics-classical.md) | Ch. [39](../approximation-algorithms/tsp-approximation.md) | — | Ch. [1](../exercises/combinatorial-optimization.md), [6](../exercises/tsp.md), [13](../exercises/tsp-formulations.md), [29](../exercises/heuristics.md), [30](../exercises/constructive-heuristics.md), [31](../exercises/local-search.md), [32](../exercises/metaheuristics.md), [39](../exercises/tsp-approximation.md) |
| P||Cmax | Ch. [7](../combinatorial-optimization-problems/pcmax/index.md) | Ch. [14](../formulations/pcmax-formulations/index.md) | — | Ch. [30](../heuristic-algorithms/constructive-heuristics/index.md), [31](../heuristic-algorithms/local-search/index.md), [32](../heuristic-algorithms/metaheuristics/index.md) | Ch. [33](../heuristic-algorithms/mip-heuristics-classical.md) | Ch. [34](../approximation-algorithms/approximation.md), [40](../approximation-algorithms/pcmax-approximation.md) | — | Ch. [1](../exercises/combinatorial-optimization.md), [7](../exercises/pcmax.md), [14](../exercises/pcmax-formulations.md), [29](../exercises/heuristics.md), [30](../exercises/constructive-heuristics.md), [31](../exercises/local-search.md), [32](../exercises/metaheuristics.md), [33](../exercises/mip-heuristics-classical.md), [34](../exercises/approximation.md), [40](../exercises/pcmax-approximation.md) |
| CLS | Ch. [8](../combinatorial-optimization-problems/lot-sizing/index.md) | Ch. [15](../formulations/lot-sizing-formulations/index.md) | Ch. [25](../dynamic-programming/dp-lot-sizing/index.md) | Ch. [8](../combinatorial-optimization-problems/lot-sizing/index.md), [33](../heuristic-algorithms/mip-heuristics-classical.md) | Ch. [33](../heuristic-algorithms/mip-heuristics-classical.md) | — | — | Ch. [1](../exercises/combinatorial-optimization.md), [8](../exercises/lot-sizing.md), [15](../exercises/lot-sizing-formulations.md), [25](../exercises/dp-lot-sizing.md) |

## In depth

- **0/1 knapsack problem (KP)** — In depth: [the course on this problem](../selected-problems/knapsack.md)
- **Bin packing (BPP)** — In depth: [the course on this problem](../selected-problems/bin-packing.md)
- **Vertex coloring (VCP)** — In depth: [the course on this problem](../selected-problems/vertex-coloring.md)
- **Maximum clique (MCP)** — In depth: [the course on this problem](../selected-problems/maximum-clique.md)
- **Travelling salesman (TSP)** — In depth: [the course on this problem](../selected-problems/tsp.md)
- **Parallel machine scheduling (P\|\|Cmax)** — In depth: [the course on this problem](../selected-problems/pcmax.md)
- **Capacitated lot sizing (CLS)** — In depth: [the course on this problem](../selected-problems/lot-sizing.md)
