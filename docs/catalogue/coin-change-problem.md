---
title: "Coin change problem (CCP)"
---

# Coin change problem (CCP)

<div class="info-capitolo" markdown>

[:material-view-list: **Catalogue of combinatorial problems**](index.md) · [:material-file-pdf-box: Catalogue (PDF)](../pdf/combinatorial-problem-catalogue.pdf)

</div>

<a id="sec:cat-pagina-coin-change-problem"></a>

<a id="box-1-def-catdef-ccp"></a>

!!! definizione "Definition 1: Coin change problem"

    Given:

    1. a vector $w \in \Z_{\ge 1}^n$ of $n$ <em>denominations</em>, each available in unlimited supply,

    2. an integer <em>amount of change</em> $c \in \Z_{\ge 0}$ to return,

    the <strong>Coin Change Problem</strong> (CCP) asks to decide how many coins of each denomination to use so that their total value is exactly equal to $c$, and the total number of coins used is minimized. If no combination of coins returns exactly $c$, the instance is <em>infeasible</em>.

- Treated in [Chapter 16 «Principles of dynamic programming»](../dynamic-programming/dp-principles.md), [Chapter 26 «DP for the coin change problem»](../dynamic-programming/dp-coin-change.md).
