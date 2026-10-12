---
title: "Uncapacitated lot sizing problem (ULS)"
---

# Uncapacitated lot sizing problem (ULS)

<div class="info-capitolo" markdown>

[:material-view-list: **Catalogue of combinatorial problems**](index.md) · [:material-file-pdf-box: Catalogue (PDF)](../pdf/combinatorial-problem-catalogue.pdf)

</div>

<a id="sec:cat-pagina-uncapacitated-lot-sizing-problem"></a>

<a id="box-1-def-catdef-uls"></a>

!!! definizione "Definition 1: Uncapacitated lot sizing problem"

    Given:

    1. a set $T=\{1,2,\dots,m\}$ of $m \in \Z_{\ge 1}$ <em>time periods</em>,

    2. for each period $t \in T$, a <em>demand</em> $d_t \in \Z_{\ge 1}$,

    3. for each period $t \in T$, a <em>setup cost</em> $sc_t \in \Z_{\ge 0}$, a <em>variable production cost</em> $vc_t \in \Z_{\ge 0}$ per unit, and a <em>holding cost</em> $hc_t \in \Z_{\ge 0}$ per unit in stock at the end of period $t$,

    the <strong>Uncapacitated Lot-Sizing Problem</strong> (ULS) asks to decide how many units to produce in each period, so that, starting with an empty inventory and ending with an empty inventory, the demand of every period is satisfied, and the total cost of setups, production, and holding is minimized.

<strong>Assumptions</strong>

- We make the following assumptions:

    1. There is a single product, and the stock is empty at the beginning and at the end of the horizon: the ULS is the CLS of a single product without capacities and with no initial stock.

    2. The quantities are integer. With integer data, once the periods with a setup are fixed, what remains is a minimum cost flow problem, which has an integer optimal solution: restricting the quantities to integers does not change the optimal cost.

- Treated in [Chapter 8 «Lot sizing problems»](../combinatorial-optimization-problems/lot-sizing/index.md), [Chapter 15 «Formulations of lot sizing problems»](../formulations/lot-sizing-formulations/index.md), [Chapter 25 «DP for the uncapacitated lot sizing problem»](../dynamic-programming/dp-lot-sizing/index.md), [Chapter 33 «MIP heuristics for the classical problems»](../heuristic-algorithms/mip-heuristics-classical.md).
