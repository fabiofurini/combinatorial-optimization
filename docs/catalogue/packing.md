---
title: "Packing"
---

# Packing

<div class="info-capitolo" markdown>

**Catalogue of combinatorial problems** · [:material-file-pdf-box: Catalogue (PDF)](../pdf/combinatorial-problem-catalogue.pdf)

</div>

<a id="sec:cat-pagina-packing"></a>

## Cutting stock problem (CSP) { #sez-sec-cat-def-csp }

<a id="box-1-def-catdef-csp"></a>

!!! definizione "Definition 1: Cutting stock problem"

    Given:

    1. an infinite number of bins, each with <em>capacity</em> $c \in \Z_{\ge 1}$,

    2. a set $\mathscr{I} = \{1,2,\dots,n\}$ of $n$ items,

    3. for each item $j \in \mathscr{I}$, a <em>weight</em> $w_j \in \Z_{\ge 1}$ and a <em>number of required copies</em> $d_j \in \Z_{\ge 1}$,

    the <strong>Cutting Stock Problem</strong> (CSP) asks to decide in which bin to place each copy of every item, so that the total weight of all item copies in any bin does not exceed the bin capacity, the required number of copies of each item is placed into the bins, and the total number of bins used is minimized.

<strong>Assumptions</strong>

- We make the following assumptions:

    1. The total weight of all required item copies exceeds the bin capacity (otherwise, all copies could fit in a single bin). Formally:

        $$
        \sum_{j\in \mathscr{I}} d_j\, w_j \;>\; c.
        $$

    2. Each item individually fits into a single bin (otherwise, no copy of that item can be packed at all). Formally:

        $$
        w_j \le c, \qquad \forall\, j\in \mathscr{I}.
        $$

- Defined in [Chapter 3 «Bin packing and cutting stock»](../combinatorial-optimization-problems/bin-packing/the-cutting-stock-problem.md#box-4-defCSP).
