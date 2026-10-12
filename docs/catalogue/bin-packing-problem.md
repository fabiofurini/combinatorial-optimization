---
title: "The bin packing problem (BPP)"
---

# The bin packing problem (BPP)

<div class="info-capitolo" markdown>

[:material-view-list: **Catalogue of combinatorial problems**](index.md) · [:material-file-pdf-box: Catalogue (PDF)](../pdf/combinatorial-problem-catalogue.pdf)

</div>

<a id="sec:cat-pagina-bin-packing-problem"></a>

<a id="box-1-def-catdef-bpp"></a>

!!! definizione "Definition 1: The bin packing problem"

    Given:

    1. an infinite number of bins, each with <em>capacity</em> $c \in \Z_{\ge 1}$,

    2. a set $\mathscr{I} = \{1,2,\dots,n\}$ of $n$ items,

    3. for each item $j \in \mathscr{I}$, a <em>weight</em> $w_j \in \Z_{\ge 1}$,

    the <strong>Bin Packing Problem</strong> (BPP) asks to decide in which bin to place each item, so that the total weight of the items in any bin does not exceed the bin capacity, and the total number of bins used is minimized.

<strong>Assumptions</strong>

- We make the following assumptions:

    1. The total weight of all items exceeds the bin capacity (otherwise, all items could fit in a single bin). Formally:

        $$
        \sum_{j \in \mathscr{I}} w_j > c
        $$

    2. Each item individually fits into a single bin (otherwise, it cannot be packed at all). Formally:

        $$
        w_j \le c,~~~~ \forall j \in \mathscr{I}
        $$

- Defined in [Chapter 3 «Packing problems»](../combinatorial-optimization-problems/bin-packing/index.md#box-1-defBPP).

- [The course on this problem $\rightarrow$](../selected-problems/bin-packing.md).
