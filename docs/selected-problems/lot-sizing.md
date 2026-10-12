---
title: "Capacitated lot sizing"
---

# Capacitated lot sizing

<div class="info-capitolo" markdown>

**Selected problems** · [:material-view-list: Catalogue of combinatorial problems](../catalogue/index.md)

</div>

<a id="sec:cat-cls"></a>

<a id="sec:cat-scelto-lot-sizing"></a>

!!! chiave ""

    What the course does on capacitated lot sizing (CLS): a summary.

## Definition { #sez-sec-cat-cls-definition }

<a id="box-1-def-cat-cls"></a>

!!! definizione "Definition 1: Capacitated lot sizing"

    Given:

    1. a set $T = \{1,2,\dots,m\}$ of $m$ <em>time periods</em>,

    2. for each period $t \in T$, a <em>demand</em> $d_t \in \Z_{\ge 1}$ and a <em>capacity</em> $cap_t \in \Z_{\ge 1}$, both counted in units of one product,

    3. for each period $t \in T$, three non-negative integer costs: the <em>setup cost</em> $sc_t$, the <em>variable production cost</em> $vc_t$ per unit produced and the <em>holding cost</em> $hc_t$ per unit kept in stock at the end of the period,

    the <strong>capacitated lot sizing problem</strong> (CLS) asks to decide how much to produce in every period, so that every demand is satisfied with what is produced and what is in stock, the capacities are respected, and the total cost of setups, production and holding is minimized.

Assumptions and full definition: [Catalogue of combinatorial problems](../catalogue/capacitated-lot-sizing.md).

- NP-hard with general capacities; without capacities (ULS) it is polynomial ([Ch. 1](../combinatorial-optimization-problems/combinatorial-optimization/a-glimpse-of-computational-complexity.md#box-12-def-pseudo)).

- Lower bound: the sum of the $k$ smallest setup costs, with $k$ the fewest periods whose capacities cover the total demand ([Ch. 8](../combinatorial-optimization-problems/lot-sizing/variants.md#box-5-obs-cls-lb)).

- Lot-for-lot and merging by hand: $250\to210\to180$ on the instance of Ch. 8, where $180$ is optimal ([Ch. 8](../combinatorial-optimization-problems/lot-sizing/variants.md#box-4-ex-cls-hand)).

## Formulations { #sez-sec-cat-cls-formulations }

- Big-M formulation: the strong value $M_t=\min\{cap_t,D_{t,m}\}$ raises the LP bound on the instance of [Ch. 8](../combinatorial-optimization-problems/lot-sizing/index.md) from $99.65$ to $157.5$ ([Ch. 15](../formulations/lot-sizing-formulations.md#box-3-ex-CLS-bigM)).

- The shortest-path formulation gives the bound $170$, the strongest of the chapter ([Ch. 15](../formulations/lot-sizing-formulations.md#154-comparing-the-formulations)).

## Dynamic programming { #sez-sec-cat-cls-dynamicprogramming }

- Without capacities an optimal plan produces only with empty stock (Wagner and Whitin): a DP over the last production run solves the ULS in $\Theta(m^2)$ steps ([Ch. 27](../dynamic-programming/dp-lot-sizing/a-dp-algorithm-for-the-uls.md#272-a-dp-algorithm-for-the-uls)).

- With capacities the state is (period, inventory): $O(m\,D\,C)$ steps, pseudo-polynomial ([Ch. 27](../dynamic-programming/dp-lot-sizing/a-dp-algorithm-for-the-capacitated-case.md#2731-number-of-steps)).

## MIP heuristics { #sez-sec-cat-cls-mipheuristics }

- On the uncapacitated instance of the MIP course relax-and-fix finds the optimum $170$, while the least unit cost heuristic gives $200$ ([Ch. 32](../heuristic-algorithms/mip-heuristics-classical.md#box-16-ex-rfcourse)).

- On a capacitated instance relax-and-fix stops at $170$, and fix-and-optimize reaches the optimum $160$ ([Ch. 32](../heuristic-algorithms/mip-heuristics-classical.md#box-18-ex-fo)).

## Exercises { #sez-sec-cat-cls-es }

- [Ch. 8 — Capacitated lot sizing](../exercises/lot-sizing.md) (5 exercises).

- [Ch. 15 — Formulations of capacitated lot sizing](../exercises/lot-sizing-formulations.md) (5 exercises).

- [Ch. 27 — Dynamic programming for lot sizing](../exercises/dp-lot-sizing.md) (5 exercises).

## Variants { #sez-sec-cat-cls-var }

- [Uncapacitated lot sizing problem (ULS)](../catalogue/uncapacitated-lot-sizing-problem.md): Special case of the CLS in which the capacities are not binding, for example $cap_t \ge \sum_u d_u$.

- [Capacitated lot sizing with constant capacity (CLS-C)](../catalogue/capacitated-lot-sizing-with-constant-capacity.md): Special case of the CLS; the zero-inventory ordering property is replaced by a weaker one: between two periods with empty inventory at most one period produces a quantity strictly between $0$ and $C$.

- [Lot sizing with several products and setup times (MLS)](../catalogue/lot-sizing-with-several-products-and-setup-times.md): Generalizes the CLS, which is the case of one product with $vt_t=1$ and no setup time.

- [Lot sizing with initial stock (LS-SI)](../catalogue/lot-sizing-with-initial-stock.md): Removes the assumption of an empty initial stock of the CLS.

- [Lot sizing with overtime (LS-OT)](../catalogue/lot-sizing-with-overtime.md): Replaces the fixed capacity $cap_t$ of the CLS by two levels of capacity with different costs.

- [Lot sizing with unsatisfied demand (LS-UD)](../catalogue/lot-sizing-with-unsatisfied-demand.md): Relaxes the demand constraints of the CLS, with a penalty in the objective.
