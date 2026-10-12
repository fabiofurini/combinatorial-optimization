---
title: "Multiple knapsack problem (MKP)"
---

# Multiple knapsack problem (MKP)

<div class="info-capitolo" markdown>

[:material-view-list: **Catalogue of combinatorial problems**](index.md) · [:material-file-pdf-box: Catalogue (PDF)](../pdf/combinatorial-problem-catalogue.pdf)

</div>

<a id="sec:cat-pagina-multiple-knapsack-problem"></a>

<a id="box-1-def-catdef-mkp"></a>

!!! definizione "Definition 1: Multiple knapsack problem"

    Given:

    1. $m \in \Z_{\ge 1}$ knapsacks,

    2. for each knapsack $k \in \underbrace{\{1,2,\dots,m\}}_{=\mathscr{K}}$, a <em>capacity</em> $c_k \in \Z_{\ge 1}$,

    3. a set $\mathscr{I} = \{1,2,\dots,n\}$ of $n$ items,

    4. for each item $j \in \mathscr{I}$, a <em>profit</em> $p_j \in \Z_{\ge 1}$ and a <em>weight</em> $w_{j} \in \Z_{\ge 1}$,

    the <strong>Multiple Knapsack Problem</strong> (MKP) asks to decide which items to insert into each knapsack, so that in every knapsack the total weight of the assigned items does not exceed its capacity, and the total profit of the selected items is maximized.

<strong>Assumptions</strong>

- We make the following assumptions:

    1. The set of all items does <em>not</em> fit in the knapsacks altogether (otherwise, selecting all items is feasible and optimal). Formally,

        $$
        \sum_{j\in \mathscr{I}} w_j \;>\; \sum_{k\in \mathscr{K}} c_k .
        $$

    2. Each item individually fits in (at least) one knapsack (otherwise, it can never be selected). Formally,

        $$
        \exists\, k\in \mathscr{K}\ \text{such that}\ w_j \le c_k, \qquad \forall\, j\in \mathscr{I}.
        $$

- Defined in [Chapter 2 «Knapsack problems»](../combinatorial-optimization-problems/knapsack/the-multiple-knapsack-problem.md#box-12-defMKP).

- Treated in [Chapter 24 «DP for the multiple knapsack problem»](../dynamic-programming/dp-multiple-knapsack.md).
