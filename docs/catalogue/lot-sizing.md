---
title: "Lot sizing"
---

# Lot sizing

<div class="info-capitolo" markdown>

**Catalogue of combinatorial problems** · [:material-file-pdf-box: Catalogue (PDF)](../pdf/combinatorial-problem-catalogue.pdf)

</div>

<a id="sec:cat-pagina-lot-sizing"></a>

## Uncapacitated lot sizing problem (ULS) { #sez-sec-cat-def-uls }

<a id="box-1-def-catdef-uls"></a>

!!! definizione "Definition 1: Uncapacitated lot sizing problem"

    Given:

    1. a set $T=\{1,2,\dots,m\}$ of $m \in \Z_{\ge 1}$ <em>time periods</em>,

    2. for each period $t \in T$, a <em>demand</em> $d_t \in \Z_{\ge 1}$,

    3. for each period $t \in T$, a <em>setup cost</em> $sc_t \in \Z_{\ge 0}$, a <em>variable production cost</em> $vc_t \in \Z_{\ge 0}$ per unit, and a <em>holding cost</em> $hc_t \in \Z_{\ge 0}$ per unit in stock at the end of period $t$,

    the <strong>Uncapacitated Lot-Sizing Problem</strong> (ULS) asks to decide how many units to produce in each period, so that, starting with an empty inventory and ending with an empty inventory, the demand of every period is satisfied, and the total cost of setups, production, and holding is minimized.

- Defined in [Chapter 22 «Dynamic programming for lot sizing»](../dynamic-programming/dp-lot-sizing/index.md#box-1-defULS).

## Capacitated lot sizing with constant capacity (CLS-C) { #sez-sec-cat-def-clsc }

<a id="box-2-def-catdef-clsc"></a>

!!! definizione "Definition 2: Capacitated lot sizing with constant capacity"

    The CLS in which the capacity is the same in all periods, $cap_t=C$ for all $t\in T$.

- Defined in [Chapter 22 «Dynamic programming for lot sizing»](../dynamic-programming/dp-lot-sizing/a-dp-algorithm-for-the-capacitated-case.md#2232-the-case-of-constant-capacity).

## Lot sizing with several products and setup times (MLS) { #sez-sec-cat-def-mls }

<a id="box-3-def-catdef-mls"></a>

!!! definizione "Definition 3: Lot sizing with several products and setup times"

    A set $P$ of products shares the resource of each period: $d_{pt}$, $sc_{pt}$, $vc_{pt}$ and $hc_{pt}$ are the data of product $p \in P$ in period $t \in T$; producing a unit of $p$ takes the time $vt_{pt} \in \Z_{\ge 1}$, a setup takes the time $st_{pt} \in \Z_{\ge 0}$, and the capacity $cap_t$ is a time.

- Defined in [Chapter 15 «Formulations of capacitated lot sizing»](../formulations/lot-sizing-formulations.md#155-several-products-setup-times-and-initial-inventory).

## Lot sizing with initial stock (LS-SI) { #sez-sec-cat-def-lssi }

<a id="box-4-def-catdef-lssi"></a>

!!! definizione "Definition 4: Lot sizing with initial stock"

    The quantity $si_p$ of product $p$ available at the beginning of the horizon is a decision, bought at the cost $fc_p$ per unit; the balance of the first period becomes $si_{p} + x_{p1} = d_{p1} + s_{p1}$.

- Defined in [Chapter 8 «Capacitated lot sizing»](../combinatorial-optimization-problems/lot-sizing.md#82-variants).

## Lot sizing with overtime (LS-OT) { #sez-sec-cat-def-lsot }

<a id="box-5-def-catdef-lsot"></a>

!!! definizione "Definition 5: Lot sizing with overtime"

    The capacity is not fixed: working time in normal hours costs $cw_t$ per unit up to $cap^{N}_t$, and overtime costs $co_t$ per unit up to $cap^{O}_t$.

- Defined in [Chapter 8 «Capacitated lot sizing»](../combinatorial-optimization-problems/lot-sizing.md#82-variants).

## Lot sizing with unsatisfied demand (LS-UD) { #sez-sec-cat-def-lsud }

<a id="box-6-def-catdef-lsud"></a>

!!! definizione "Definition 6: Lot sizing with unsatisfied demand"

    A part of the demand may be left unsatisfied, at a penalty $cu_{pt}$ per unit.

- Defined in [Chapter 8 «Capacitated lot sizing»](../combinatorial-optimization-problems/lot-sizing.md#82-variants).
