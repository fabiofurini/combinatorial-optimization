---
title: "Unbounded knapsack problem (UKP)"
---

# Unbounded knapsack problem (UKP)

<div class="info-capitolo" markdown>

[:material-view-list: **Catalogue of combinatorial problems**](index.md) · [:material-file-pdf-box: Catalogue (PDF)](../pdf/combinatorial-problem-catalogue.pdf)

</div>

<a id="sec:cat-pagina-unbounded-knapsack-problem"></a>

<a id="box-1-def-catdef-ukp"></a>

!!! definizione "Definition 1: Unbounded knapsack problem"

    Given:

    1. a knapsack of <em>capacity</em> $c \in \Z_{\ge 1}$,

    2. a set $\mathscr{I} = \{1,2,\dots,n\}$ of $n$ items,

    3. for each item $j \in \mathscr{I}$, which is available in an unlimited number of copies, a <em>profit</em> $p_j \in \Z_{\ge 1}$ and a <em>weight</em> $w_j \in \Z_{\ge 1}$,

    the <strong>Unbounded Knapsack Problem</strong> (UKP) asks to decide how many copies of each item to insert into the knapsack, so that the total weight of all selected item copies does not exceed the knapsack capacity and the total profit of all selected item copies is maximized.

<strong>Assumptions</strong>

- We make the following assumptions:

    1. The total weight of all possible copies of all items (up to the maximum number that can fit in the knapsack) exceeds the knapsack capacity (otherwise, all copies could be selected). Formally:

        $$
        \sum_{j \in \mathscr{I}} \hat b_j \, w_j > c
        $$

    2. Each item individually fits into the knapsack (otherwise, it cannot be selected). Formally:

        $$
        w_j \le c, \qquad \forall j \in \mathscr{I}
        $$

- Defined in [Chapter 2 «Knapsack problems»](../combinatorial-optimization-problems/knapsack/the-unbounded-knapsack-problem.md#box-8-defUKP).
