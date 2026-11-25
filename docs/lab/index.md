---
hide:
  - navigation
---

# Interactive lab

Each app runs an algorithm step by step on the reference instances of the course,
which you can also change. Pick an app: it opens full page. Everything runs in the browser.

## Problems

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
