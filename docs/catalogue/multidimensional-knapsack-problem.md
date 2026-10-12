---
title: "Multidimensional knapsack problem (MDKP)"
---

# Multidimensional knapsack problem (MDKP)

<div class="info-capitolo" markdown>

[:material-view-list: **Catalogue of combinatorial problems**](index.md) · [:material-file-pdf-box: Catalogue (PDF)](../pdf/combinatorial-problem-catalogue.pdf)

</div>

<a id="sec:cat-pagina-multidimensional-knapsack-problem"></a>

<a id="box-1-def-catdef-mdkp"></a>

!!! definizione "Definition 1: Multidimensional knapsack problem"

    Given:

    1. a $k$-dimensional knapsack,

    2. for each dimension $d \in \underbrace{\{1,2,\dots,k\}}_{=\mathscr{D}}$, a <em>capacity</em> $c_d \in \Z_{\ge 1}$,

    3. a set $\mathscr{I} = \{1,2,\dots,n\}$ of $n$ items,

    4. for each item $j \in \mathscr{I}$, a <em>profit</em> $p_j \in \Z_{\ge 1}$,

    5. for each dimension $d \in \mathscr{D}$ and each item $j \in \mathscr{I}$, a <em>weight</em> $w_{dj} \in \Z_{\ge 1}$,

    the <strong>Multidimensional Knapsack Problem</strong> (MDKP) asks to decide which items to insert into the knapsack, so that for every dimension the total weight of the selected items does not exceed the corresponding capacity, and the total profit of the selected items is maximized.

<strong>Assumptions</strong>

- We make the following assumptions:

    1. The set of all items does <em>not</em> fit in the knapsack (otherwise, selecting all items is feasible and optimal). Formally,

        $$
        \exists\, d\in \mathscr{D} \ \text{such that}\ \sum_{j\in \mathscr{I}} w_{dj} \;>\; c_d .
        $$

    2. Each item individually fits in the knapsack in every dimension (otherwise, it can never be selected). Formally,

        $$
        w_{dj} \le c_d, \qquad \forall\, d\in \mathscr{D},\ \forall\, j\in \mathscr{I}.
        $$

- Defined in [Chapter 2 «Knapsack problems»](../combinatorial-optimization-problems/knapsack/the-multidimensional-knapsack-problem.md#box-10-defMDKP).

- Treated in [Chapter 22 «DP for the multidimensional knapsack problem»](../dynamic-programming/dp-multidimensional-knapsack.md).
