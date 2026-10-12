---
title: "Subset sum problem (SSP)"
---

# Subset sum problem (SSP)

<div class="info-capitolo" markdown>

[:material-view-list: **Catalogue of combinatorial problems**](index.md) · [:material-file-pdf-box: Catalogue (PDF)](../pdf/combinatorial-problem-catalogue.pdf)

</div>

<a id="sec:cat-pagina-subset-sum-problem"></a>

<a id="box-1-def-catdef-ssp"></a>

!!! definizione "Definition 1: Subset sum problem"

    Given:

    1. a target value $c \in \Z_{\ge 1}$,

    2. a set $\mathscr{I} = \{1,2,\dots,n\}$ of $n$ items,

    3. for each item $j \in \mathscr{I}$, a <em>weight</em> $w_j \in \Z_{\ge 1}$,

    the <strong>Subset Sum Problem</strong> (SSP) asks whether there exists a subset of items whose total weight is exactly equal to the target value $c$.

<strong>Assumptions</strong>

- We make the following assumptions:

    1. The total weight of all items is at least the target value (otherwise, no feasible subset can exist). Formally:

        $$
        \sum_{j \in \mathscr{I}} w_j \ge c
        $$

    2. Each item weight is not larger than the target value (otherwise, it cannot belong to any feasible subset). Formally:

        $$
        w_j \le c,~~~~ \forall j \in \mathscr{I}
        $$

- Defined in [Chapter 2 «Knapsack problems»](../combinatorial-optimization-problems/knapsack/the-subset-sum-problem.md#box-4-defSSP).
