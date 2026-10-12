---
title: Selected problems
---

# Selected problems

The problems on which the whole course focuses: for each one, everything the course does on it — where it is treated, the techniques and the exercises.

[:material-table: Comparison](at-a-glance.md){ .md-button } [:material-view-list: Catalogue of combinatorial problems](../catalogue/index.md){ .md-button }

## Combinatorial optimization problems

- A combinatorial optimization problem is given by a **finite ground set**, a family of its subsets, the **feasible solutions**, and an **objective function**: the goal is a feasible solution of maximum, or minimum, value.

- The feasible solutions are finitely many, but their number grows exponentially with the size of the instance: listing them all is possible only for tiny instances.

- The course attacks these problems in every way: integer linear programming **formulations**, **dynamic programming**, **heuristic algorithms**, **approximation algorithms** and **branch-and-bound**. A primal and a dual bound enclose the optimal value, and the **gap** measures their distance.

- The whole course focuses on the problems below: for each one, a page summarizes what the course does on it.

The general concepts are in [Chapter 1](../combinatorial-optimization-problems/combinatorial-optimization/index.md).

## The selected problems

<div class="grid cards" markdown>

-   **The knapsack problem**

    ---

    Choose a subset of items of maximum total profit whose total weight does not exceed the capacity.

    [:octicons-arrow-right-24: Open](knapsack.md) · [definition](../catalogue/knapsack-problem.md)

-   **The bin packing problem**

    ---

    Pack items of given weights into the minimum number of identical bins of capacity $c$.

    [:octicons-arrow-right-24: Open](bin-packing.md) · [definition](../catalogue/bin-packing-problem.md)

-   **The vertex coloring problem**

    ---

    Color the vertices of a graph so that adjacent vertices get different colors, using the minimum number of colors.

    [:octicons-arrow-right-24: Open](vertex-coloring.md) · [definition](../catalogue/vertex-coloring-problem.md)

-   **The maximum clique problem**

    ---

    Find a largest set of pairwise adjacent vertices of a graph.

    [:octicons-arrow-right-24: Open](maximum-clique.md) · [definition](../catalogue/maximum-clique-problem.md)

-   **The travelling salesman problem**

    ---

    Find a shortest closed route that visits every city exactly once and returns to the starting city.

    [:octicons-arrow-right-24: Open](tsp.md) · [definition](../catalogue/travelling-salesman-problem.md)

-   **Scheduling on identical parallel machines**

    ---

    Assign jobs to $m$ identical machines so that the makespan, the largest machine load, is minimum.

    [:octicons-arrow-right-24: Open](pcmax.md) · [definition](../catalogue/scheduling-on-identical-parallel-machines.md)

-   **Capacitated lot sizing**

    ---

    Plan the production of every period, with capacities, setup costs and stock, at minimum total cost.

    [:octicons-arrow-right-24: Open](lot-sizing.md) · [definition](../catalogue/capacitated-lot-sizing.md)

</div>
