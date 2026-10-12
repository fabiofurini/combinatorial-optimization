---
title: "The bin packing problem"
---

# The bin packing problem

<div class="info-capitolo" markdown>

**Selected problems** · [:material-view-list: Catalogue of combinatorial problems](../catalogue/index.md)

</div>

<a id="sec:cat-bpp"></a>

<a id="sec:cat-pagina-central-problems"></a>

!!! chiave ""

    What the course does on the bin packing problem (BPP): a summary.

## Definition { #sez-sec-cat-bpp-definition }

<a id="box-1-def-cat-bpp"></a>

!!! definizione "Definition 1: The bin packing problem"

    Given:

    1. an infinite number of bins, each with <em>capacity</em> $c \in \Z_{\ge 1}$,

    2. a set $\mathscr{I} = \{1,2,\dots,n\}$ of $n$ items,

    3. for each item $j \in \mathscr{I}$, a <em>weight</em> $w_j \in \Z_{\ge 1}$,

    the <strong>Bin Packing Problem</strong> (BPP) asks to decide in which bin to place each item, so that the total weight of the items in any bin does not exceed the bin capacity, and the total number of bins used is minimized.

Assumptions and full definition: [Catalogue of combinatorial problems](../catalogue/central-problems.md#sez-sec-cat-def-bpp).

- Strongly NP-hard: no pseudo-polynomial algorithm exists, unless $P=NP$ ([Ch. 1](../combinatorial-optimization-problems/combinatorial-optimization.md#box-23-def-pseudo)).

- Weight bound $\LB = \lceil \sum_j w_j / c \rceil$; it is not always tight: three items of weight $6$ with $c=10$ need $3$ bins, not $2$ ([Ch. 3](../combinatorial-optimization-problems/bin-packing/index.md#box-3-obs-bpp-l1)).

## Formulations { #sez-sec-cat-bpp-formulations }

- The model $\ILP_{\BPP}$ has $mn$ assignment variables $x_{jb}$ and $m$ activation variables $y_b$ ([Ch. 10](../formulations/bin-packing-formulations.md#102-an-ilp-model-for-the-bin-packing-problem)).

- Both LP relaxations have value $\sum_j w_j/c$: rounded up, the weight bound again ([Ch. 10](../formulations/bin-packing-formulations.md#box-11-cor_lp_bpp_value)).

- The ratio of the LP bound to the optimum is at least $\frac12$, and $\frac12$ is approached ([Ch. 10](../formulations/bin-packing-formulations.md#box-12-prop_lp_bpp_ratio_half)).

## Heuristics { #sez-sec-cat-bpp-heuristics }

- First Fit Decreasing and Best Fit Decreasing find the optimum $3$ on the instance of [Ch. 23](../heuristic-algorithms/heuristics.md); $FFD(I) \le \frac{11}{9}\, z(I) + \frac{6}{9}$, tight ([Ch. 24](../heuristic-algorithms/constructive-heuristics/the-bin-packing-problem-first-sort-then-pack.md#sez-sec-FFD)).

- The number of bins is flat, so move and swap local search uses the auxiliary objective $\max \sum_b L_b^2$ ([Ch. 25](../heuristic-algorithms/local-search/flat-landscapes-and-auxiliary-objectives.md#sez-sec-flat)).

- VND with move and swap reaches the optimum in $89$ of $100$ runs on an instance with $n=12$ ([Ch. 25](../heuristic-algorithms/local-search/variable-neighbourhood-descent.md#sez-sec-vnd)).

- Large neighbourhood search: on BPP24 the exact repair with $q\ge 3$ reaches the optimum $9$ in every run ([Ch. 26](../heuristic-algorithms/metaheuristics/large-neighbourhood-search.md#box-11-ex-lnsBPP)).

## MIP heuristics { #sez-sec-cat-bpp-mipheuristics }

- Rounding and fractional diving fail on the instance of [Ch. 23](../heuristic-algorithms/heuristics.md): the LP spreads an item over several bins ([Ch. 27](../heuristic-algorithms/mip-heuristics-classical.md#box-3-ex-rounding)).

- The feasibility pump always finds a packing, but it may leave empty bins open ([Ch. 27](../heuristic-algorithms/mip-heuristics-classical.md#box-8-ex-fpbpp)).

- On an instance with $n=60$ the whole difficulty is primal: the heuristics of Gurobi decide the solution time ([Ch. 27](../heuristic-algorithms/mip-heuristics-classical.md#box-19-ex-gurobi)).

## Approximation { #sez-sec-cat-bpp-approximation }

- Every Any Fit algorithm is half-full, hence a $2$-approximation ([Ch. 29](../approximation-algorithms/bin-packing-approximation.md#294-half-full-property)).

- $r(NF) = r(WF) = 2$ and $r(FF) = r(BF) = \frac{17}{10}$ ([Ch. 29](../approximation-algorithms/bin-packing-approximation.md#box-21-propFF)).

- No polynomial algorithm has a ratio below $\frac32$ unless $P=NP$: deciding whether $2$ bins suffice is PARTITION ([Ch. 29](../approximation-algorithms/bin-packing-approximation.md)).

## Exercises { #sez-sec-cat-bpp-es }

- [Ch. 1 — Combinatorial optimization problems](../exercises/combinatorial-optimization.md) (2 exercises).

- [Ch. 3 — Bin packing and cutting stock](../exercises/bin-packing.md) (5 exercises).

- [Ch. 7 — Parallel machine scheduling](../exercises/pcmax.md) (1 exercise).

- [Ch. 10 — Formulations of the bin packing problem](../exercises/bin-packing-formulations.md) (5 exercises).

- [Ch. 23 — Heuristic algorithms: definitions](../exercises/heuristics.md) (1 exercise).

- [Ch. 24 — Constructive heuristics](../exercises/constructive-heuristics.md) (3 exercises).

- [Ch. 25 — Local search](../exercises/local-search.md) (3 exercises).

- [Ch. 26 — Metaheuristics](../exercises/metaheuristics.md) (2 exercises).

- [Ch. 28 — Approximation algorithms: definitions](../exercises/approximation.md) (1 exercise).

- [Ch. 29 — Approximation algorithms for bin packing](../exercises/bin-packing-approximation.md) (12 exercises).

## Variants { #sez-sec-cat-bpp-var }

- [Cutting stock problem (CSP)](../catalogue/packing.md#sez-sec-cat-def-csp): The CSP is the BPP with $d_j$ identical copies of every item $j$, and the BPP is the case $d_j = 1$ for all $j\in\Ioggetti$.
