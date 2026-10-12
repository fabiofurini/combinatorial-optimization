---
title: "Bounded knapsack problem (BKP)"
---

# Bounded knapsack problem (BKP)

<div class="info-capitolo" markdown>

[:material-view-list: **Catalogue of combinatorial problems**](index.md) · [:material-file-pdf-box: Catalogue (PDF)](../pdf/combinatorial-problem-catalogue.pdf)

</div>

<a id="sec:cat-pagina-bounded-knapsack-problem"></a>

<a id="box-1-def-catdef-bkp"></a>

!!! definizione "Definition 1: Bounded knapsack problem"

    Given:

    1. a knapsack of <em>capacity</em> $c \in \Z_{\ge 1}$,

    2. a set $\mathscr{I} = \{1,2,\dots,n\}$ of $n$ items,

    3. for each item $j \in \mathscr{I}$, a <em>profit</em> $p_j \in \Z_{\ge 1}$, a <em>weight</em> $w_j \in \Z_{\ge 1}$, and a <em>number of available copies</em> $b_j \in \Z_{\ge 1}$,

    the <strong>Bounded Knapsack Problem</strong> (BKP) asks to decide how many copies of each item to insert into the knapsack, so that the total weight of all selected item copies does not exceed the knapsack capacity, each item is taken no more than its available copies, and the total profit of all selected item copies is maximized.

<strong>Assumptions</strong>

- We make the following assumptions:

    1. The total weight of all available copies of all items exceeds the knapsack capacity (otherwise, all copies could be selected). Formally:

        $$
        \sum_{j \in \mathscr{I}} b_j \, w_j > c
        $$

    2. Each item individually fits into the knapsack (otherwise, it cannot be selected). Formally:

        $$
        w_j \le c, \qquad \forall j \in \mathscr{I}
        $$

    3. The total weight of all available copies of any single item does not exceed the knapsack capacity (otherwise, that item could never be taken in the maximum allowed number of copies). Formally:

        $$
        b_j \, w_j \le c, \qquad \forall j \in \mathscr{I}
        $$

- Defined in [Chapter 2 «Knapsack problems»](../combinatorial-optimization-problems/knapsack/the-bounded-knapsack-problem.md#box-6-defBKP).
