---
title: "Capacitated lot sizing (CLS)"
---

# Capacitated lot sizing (CLS)

<div class="info-capitolo" markdown>

[:material-view-list: **Catalogue of combinatorial problems**](index.md) · [:material-file-pdf-box: Catalogue (PDF)](../pdf/combinatorial-problem-catalogue.pdf)

</div>

<a id="sec:cat-pagina-capacitated-lot-sizing"></a>

<a id="box-1-def-catdef-cls"></a>

!!! definizione "Definition 1: Capacitated lot sizing"

    Given:

    1. a set $T = \{1,2,\dots,m\}$ of $m$ <em>time periods</em>,

    2. for each period $t \in T$, a <em>demand</em> $d_t \in \Z_{\ge 1}$ and a <em>capacity</em> $cap_t \in \Z_{\ge 1}$, both counted in units of one product,

    3. for each period $t \in T$, three non-negative integer costs: the <em>setup cost</em> $sc_t$, the <em>variable production cost</em> $vc_t$ per unit produced and the <em>holding cost</em> $hc_t$ per unit kept in stock at the end of the period,

    the <strong>capacitated lot sizing problem</strong> (CLS) asks to decide how much to produce in every period, so that every demand is satisfied with what is produced and what is in stock, the capacities are respected, and the total cost of setups, production and holding is minimized.

<strong>Assumptions</strong>

- We make the following assumptions:

    1. The stock is empty at the beginning and at the end of the horizon. Leaving stock at the end only adds cost, so no optimal plan needs it; an initial stock is a variant of the problem (next section).

    2. The capacities allow to satisfy the demands, period after period (otherwise there is no feasible plan). Formally:

        $$
        \sum_{u=1}^{t} cap_u \ge \sum_{u=1}^{t} d_u, ~~~~ \forall t \in T
        $$

    3. The quantities are integer. With integer data, once the periods with a setup are fixed, what remains is a minimum cost flow problem, which has an integer optimal solution: restricting the quantities to integers does not change the optimal cost.

- Defined in [Chapter 8 «Capacitated lot sizing»](../combinatorial-optimization-problems/lot-sizing/index.md#box-1-defCLS).

- [The course on this problem $\rightarrow$](../selected-problems/lot-sizing.md).
