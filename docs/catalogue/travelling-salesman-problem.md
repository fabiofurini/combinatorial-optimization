---
title: "The travelling salesman problem (TSP)"
---

# The travelling salesman problem (TSP)

<div class="info-capitolo" markdown>

[:material-view-list: **Catalogue of combinatorial problems**](index.md) · [:material-file-pdf-box: Catalogue (PDF)](../pdf/combinatorial-problem-catalogue.pdf)

</div>

<a id="sec:cat-pagina-travelling-salesman-problem"></a>

<a id="box-1-def-catdef-tsp"></a>

!!! definizione "Definition 1: The travelling salesman problem"

    Given:

    1. a set $\mathscr{V} = \{1,2,\dots,n\}$ of $n$ <em>cities</em>,

    2. for each pair of distinct cities $i,j \in \mathscr{V}$, a <em>distance</em> $d_{ij} \in \Z_{\ge 1}$, with $d_{ij}=d_{ji}$,

    the <strong>travelling salesman problem</strong> (TSP) asks to find a closed route that starts from a city, visits every other city exactly once and returns to the starting city, so that the total distance travelled is minimized.

<strong>Assumptions</strong>

- We make the following assumptions:

    1. There are at least three cities (with one or two cities there is only one route). Formally:

        $$
        n \ge 3
        $$

    2. The distances are symmetric (travelling from $i$ to $j$ costs as much as travelling from $j$ to $i$). Formally:

        $$
        d_{ij}=d_{ji},~~~~ \forall i,j \in \mathscr{V},~ i\neq j
        $$

- Defined in [Chapter 6 «The travelling salesman problem»](../combinatorial-optimization-problems/tsp/index.md#box-1-defTSP).

- [The course on this problem $\rightarrow$](../selected-problems/tsp.md).
