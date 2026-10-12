---
title: "Constructive heuristics"
---

# Constructive heuristics

<div class="info-capitolo" markdown>

**Part 4 · Heuristic algorithms · Chapter 29** · [:material-file-pdf-box: Lecture notes, volume 4 (PDF)](../../pdf/lecture-notes-4-heuristic-algorithms.pdf) · [:material-pencil: Exercises: Constructive](../../exercises/constructive-heuristics.md) · [:material-gesture-tap: App: Bin packing heuristics](../../lab/bin-packing-heuristics.md) · [:material-gesture-tap: App: List scheduling and LPT](../../lab/list-scheduling-lpt.md)

</div>

!!! nota "Prerequisites"

    - From this module, the chapter «Heuristic algorithms»: primal and dual bounds, the gap, and the four reference instances.

    - From this module, the chapters on the problems: the KP, the BPP, $P\,||\,C_{\max}$ and the TSP.

!!! chiave "Objectives"

    At the end of this chapter you will be able to:

    - apply the greedy algorithm to the KP with the three orders (profit, weight, efficiency);

    - execute FF, FFD and BFD for the BPP, and LIST and LPT for $P\,||\,C_{\max}$;

    - build a TSP tour by nearest neighbour and by the insertion heuristics;

    - apply randomized construction, regret insertion and the pilot method;

    - compare the results with the dual bounds, and explain when a constructive heuristic fails.

## 29.1 Constructive heuristics { #sez-sec-constructive }

<a id="box-1-def-constructive"></a>

!!! definizione "Definition 29.1: Constructive heuristic"

    A <strong>constructive heuristic</strong> is a heuristic algorithm that builds one feasible solution step by step: it starts from the empty <strong>partial solution</strong> and extends it with one element at a time, until the solution is complete.

- The elements depend on the problem: the items selected for the knapsack, the assignments of items to bins and of jobs to machines, the edges of a tour.

- The quality of the result depends on how the element to add is chosen at every step (Section [29.3](the-problems-and-the-assumptions.md#sez-sec-greedy)).

<div class="grid cards sottopagine" markdown>

-   **Overview**

    Constructive heuristics

    [:octicons-arrow-right-24: Open](#sez-sec-constructive)

-   **The problems and the assumptions · The greedy paradigm**

    The greedy paradigm

    [:octicons-arrow-right-24: Open](the-problems-and-the-assumptions.md)

-   **29.4 The knapsack problem: which order?**

    [:octicons-arrow-right-24: Open](the-knapsack-problem-which-order.md)

-   **29.5 The bin packing problem: first sort, then pack**

    Best Fit Decreasing · What sorting gives, and what it does not

    [:octicons-arrow-right-24: Open](the-bin-packing-problem-first-sort-then-pack.md)

-   **29.6 Scheduling on parallel machines: longest jobs first**

    Longest processing time first

    [:octicons-arrow-right-24: Open](scheduling-on-parallel-machines-longest-jobs-first.md)

-   **29.7 The travelling salesman problem: append or insert?**

    Multi-start nearest neighbour · Insertion heuristics · A comparison on a larger instance

    [:octicons-arrow-right-24: Open](the-travelling-salesman-problem-append-or-insert.md)

-   **29.8 Vertex coloring: greedy and DSATUR**

    DSATUR · What the greedy coloring guarantees · DSATUR as a heuristic

    [:octicons-arrow-right-24: Open](vertex-coloring-greedy-and-dsatur.md)

-   **29.9 Randomized construction**

    [:octicons-arrow-right-24: Open](randomized-construction.md)

-   **29.10 Look-ahead and regret**

    Look-ahead: the pilot method

    [:octicons-arrow-right-24: Open](look-ahead-and-regret.md)

-   **29.11 What constructive heuristics give, and what they do not**

    [:octicons-arrow-right-24: Open](what-constructive-heuristics-give-and-what-they-do-not.md)

-   **Typical mistakes · In summary**

    In summary

    [:octicons-arrow-right-24: Open](typical-mistakes.md)

</div>

---

**Next:** [The problems and the assumptions · The greedy paradigm](the-problems-and-the-assumptions.md)

---

**Exercises on this chapter:** [:material-pencil: Constructive](../../exercises/constructive-heuristics.md)

<!-- laboratorio-interattivo: sezione generata da interattivi.py -->

:material-flask-outline: **In the interactive lab:** [Bin packing heuristics](../../lab/bin-packing-heuristics.md), [List scheduling and LPT](../../lab/list-scheduling-lpt.md).