---
title: "DP examples"
---

# DP examples

<div class="info-capitolo" markdown>

**Catalogue of combinatorial problems** · [:material-file-pdf-box: Catalogue (PDF)](../pdf/combinatorial-problem-catalogue.pdf)

</div>

<a id="sec:cat-pagina-dp-examples"></a>

## Minimum-cost staircase (STAIR) { #sez-sec-cat-def-stair }

<a id="box-1-def-catdef-stair"></a>

!!! definizione "Definition 1: Minimum-cost staircase"

    A staircase has $n$ steps. Stepping on step $k$ costs $c_k$, and from a step we can climb to the next one or skip one step. We start from the ground, step $0$, at no cost, and we want to reach step $n$ at minimum total cost.

- Defined in [Exercise 16.1](../exercises/dp-principles.md#esercizio-16-1).

## Billboards with no two consecutive positions (NOCONS) { #sez-sec-cat-def-nocons }

<a id="box-2-def-catdef-nocons"></a>

!!! definizione "Definition 2: Billboards with no two consecutive positions"

    Along a road there are $n$ positions for billboards, numbered in order. A billboard in position $k$ brings a profit $p_k$, and two billboards cannot be in consecutive positions. We want a set of positions, no two consecutive, of maximum total profit.

- Defined in [Exercise 16.2](../exercises/dp-principles.md#esercizio-16-2).

## Maximum-profit path on a grid (GRID) { #sez-sec-cat-def-grid }

<a id="box-3-def-catdef-grid"></a>

!!! definizione "Definition 3: Maximum-profit path on a grid"

    A robot moves on a grid of $r$ rows and $q$ columns, from the cell $(1,1)$ to the cell $(r,q)$, one cell down or one cell right at each move. Every cell $(i,j)$ it visits gives a profit $a_{ij}$. We want a path of maximum total profit.

- Defined in [Exercise 16.3](../exercises/dp-principles.md#esercizio-16-3).

## Shortest path in a layered network (SPP) { #sez-sec-cat-def-spp }

<a id="box-4-def-catdef-spp"></a>

!!! definizione "Definition 4: Shortest path in a layered network"

    We look for a shortest path from $s$ to $t$ in a directed network $G=(N,A)$, where every arc $(i,j)\in A$ has a cost $c_{ij}$.

- Defined in [Exercise 16.4](../exercises/dp-principles.md#esercizio-16-4).

## Compatible requests (REQ) { #sez-sec-cat-def-req }

<a id="box-5-def-catdef-req"></a>

!!! definizione "Definition 5: Compatible requests"

    A room can host one event at a time. There are $n$ requests: request $j$ occupies the room from time $a_j$ to time $b_j$ and pays $w_j$; two requests are compatible if one ends before (or when) the other starts. The requests are numbered by non-decreasing end time. We want a set of pairwise compatible requests of maximum total payment.

- Defined in [Exercise 16.5](../exercises/dp-principles.md#esercizio-16-5).
