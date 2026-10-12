---
title: "Rod cutting problem (RCP)"
---

# Rod cutting problem (RCP)

<div class="info-capitolo" markdown>

[:material-view-list: **Catalogue of combinatorial problems**](index.md) · [:material-file-pdf-box: Catalogue (PDF)](../pdf/combinatorial-problem-catalogue.pdf)

</div>

<a id="sec:cat-pagina-rod-cutting-problem"></a>

<a id="box-1-def-catdef-rcp"></a>

!!! definizione "Definition 1: Rod cutting problem"

    Given:

    1. a rod of <em>length</em> $n \in \Z_{\ge 1}$,

    2. a set $\{1,2,\dots,n\}$ of $n$ possible piece lengths,

    3. for each piece length $\ell \in \{1,2,\dots,n\}$, a <em>profit</em> $p_\ell \in \Z_{\ge 1}$,

    the <strong>Rod-Cutting Problem</strong> (RCP) asks to decide how many copies of each piece length to cut, so that the total length of the obtained pieces is equal to the rod length, and the total profit of the obtained pieces is maximized.

- Defined in [Chapter 20 «DP for the rod cutting problem»](../dynamic-programming/dp-rod-cutting/index.md#box-1-defRCP).
