---
title: "Combinatorial optimization problems"
---

# Combinatorial optimization problems

<div class="info-capitolo" markdown>

**Part 1 · Combinatorial optimization problems · Chapter 1** · [:material-file-pdf-box: Lecture notes, volume 1 (PDF)](../../pdf/lecture-notes-1-combinatorial-optimization-problems.pdf) · [:material-presentation: Slides (PDF)](../../pdf/slides-01-combinatorial-optimization-problems.pdf) · [:material-pencil: Exercises: Combinatorial optimization](../../exercises/combinatorial-optimization.md) · [:material-gesture-tap: App: Brute force on the 0/1 knapsack problem](../../lab/kp-brute-force.md)

</div>

<div class="grid cards sottopagine" markdown>

-   **1.1 Combinatorial optimization problems**

    [:octicons-arrow-right-24: Open](combinatorial-optimization-problems.md)

-   **1.2 Categories of combinatorial optimization problems**

    Application areas · The problems of the course by category

    [:octicons-arrow-right-24: Open](categories-of-combinatorial-optimization-problems.md)

-   **1.3 Counting the solutions**

    Orderings and cyclic orderings · Partitions and Bell numbers

    [:octicons-arrow-right-24: Open](counting-the-solutions.md)

-   **1.4 Combinatorial explosion and brute force**

    Computing times

    [:octicons-arrow-right-24: Open](combinatorial-explosion-and-brute-force.md)

-   **1.5 Primal bounds, dual bounds and gap**

    [:octicons-arrow-right-24: Open](primal-bounds-dual-bounds-and-gap.md)

-   **A glimpse of computational complexity**

    Pseudo-polynomial algorithms and strong NP-hardness

    [:octicons-arrow-right-24: Open](a-glimpse-of-computational-complexity.md)

</div>

!!! nota "Prerequisites"

    - From the <em>Preliminaries</em>: optimization problems (feasible region, objective function, optimal solution and optimal value), binomial coefficients and partitions of a finite set.

    - No knowledge of integer programming is needed: the bounds of this chapter come from combinatorial arguments.

!!! chiave "Objectives"

    At the end of this chapter you will be able to:

    - recognize a combinatorial optimization problem, the category of its decisions and the combinatorial object behind its solutions (a subset, an ordering, a partition, an assignment);

    - count the candidate solutions ($2^n$ subsets, $n!$ orderings, $(n-1)!/2$ cyclic orderings, Bell numbers for the partitions) and estimate the computing time of a brute force enumeration;

    - define primal bounds, dual bounds and the gap, and use them to certify that a solution is optimal;

    - place a problem in the classes P, NP and NP-hard, and tell a pseudo-polynomial algorithm from a polynomial one.

---

**Next:** [1.1 Combinatorial optimization problems](combinatorial-optimization-problems.md)

---

**Exercises on this chapter:** [:material-pencil: Combinatorial optimization](../../exercises/combinatorial-optimization.md)

<!-- laboratorio-interattivo: sezione generata da interattivi.py -->

:material-flask-outline: **In the interactive lab:** [Brute force on the 0/1 knapsack problem](../../lab/kp-brute-force.md).
