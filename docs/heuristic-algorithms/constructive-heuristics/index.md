---
title: "Constructive heuristics"
---

# Constructive heuristics

<div class="info-capitolo" markdown>

**Part 4 · Heuristic algorithms · Chapter 24** · [:material-file-pdf-box: Lecture notes, volume 4 (PDF)](../../pdf/lecture-notes-4-heuristic-algorithms.pdf) · [:material-pencil: Exercises: Constructive](../../exercises/constructive-heuristics.md) · [:material-gesture-tap: App: Bin packing heuristics](../../lab/bin-packing-heuristics.md) · [:material-gesture-tap: App: List scheduling and LPT](../../lab/list-scheduling-lpt.md) · [:material-gesture-tap: App: Vertex coloring: greedy and DSATUR](../../lab/coloring-greedy-dsatur.md)

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

<div class="sottopagine" markdown>

**The chapter is organised in pages: this page and**

1. [The problems and the assumptions · The greedy paradigm](the-problems-and-the-assumptions.md)
2. [24.4 The knapsack problem: which order?](the-knapsack-problem-which-order.md)
3. [24.5 The bin packing problem: first sort, then pack](the-bin-packing-problem-first-sort-then-pack.md)
4. [24.6 Scheduling on parallel machines: longest jobs first](scheduling-on-parallel-machines-longest-jobs-first.md)
5. [24.7 The travelling salesman problem: append or insert?](the-travelling-salesman-problem-append-or-insert.md)
6. [24.8 Randomized construction](randomized-construction.md)
7. [24.9 Look-ahead and regret](look-ahead-and-regret.md)
8. [24.10 What constructive heuristics give, and what they do not](what-constructive-heuristics-give-and-what-they-do-not.md)
9. [Typical mistakes · In summary](typical-mistakes.md)
10. [24.13 <code>C++</code> implementation](c-implementation.md)

</div>

## 24.1 Constructive heuristics { #sez-sec-constructive }

<a id="box-1-def-constructive"></a>

!!! definizione "Definition 24.1: Constructive heuristic"

    A <strong>constructive heuristic</strong> is a heuristic algorithm that builds one feasible solution step by step: it starts from the empty <strong>partial solution</strong> and extends it with one element at a time, until the solution is complete.

- The elements depend on the problem: the items selected for the knapsack, the assignments of items to bins and of jobs to machines, the edges of a tour.

- The quality of the result depends on how the element to add is chosen at every step (Section [24.3](the-problems-and-the-assumptions.md#sez-sec-greedy)).

---

**Next:** [The problems and the assumptions · The greedy paradigm](the-problems-and-the-assumptions.md)

---

**Exercises on this chapter:** [:material-pencil: Constructive](../../exercises/constructive-heuristics.md)

<!-- laboratorio-interattivo: sezione generata da interattivi.py -->

:material-flask-outline: **In the interactive lab:** [Bin packing heuristics](../../lab/bin-packing-heuristics.md), [List scheduling and LPT](../../lab/list-scheduling-lpt.md), [Vertex coloring: greedy and DSATUR](../../lab/coloring-greedy-dsatur.md).