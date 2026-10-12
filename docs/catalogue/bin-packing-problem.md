---
title: "The bin packing problem (BPP)"
---

# The bin packing problem (BPP)

<div class="info-capitolo" markdown>

[:material-view-list: **Catalogue of combinatorial problems**](index.md) · [:material-folder-outline: Packing problems](packing-problems.md) · [:material-file-pdf-box: Catalogue (PDF)](../pdf/combinatorial-problem-catalogue.pdf)

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

## What the course does on this problem { #sez-sec-cat-bpp-vert }

<div class="tabella" markdown="0"><table>
<tr>
<th><strong>Technique</strong></th>
<th><strong>Where</strong></th>
</tr>
<tr>
<td><strong>Definition</strong></td>
<td><a href="https://fabiofurini.github.io/combinatorial-optimization/combinatorial-optimization-problems/bin-packing/the-bin-packing-problem/#box-1-defBPP">Ch. 3 «Packing problems»</a></td>
</tr>
<tr>
<td><strong>Formulations</strong></td>
<td><a href="https://fabiofurini.github.io/combinatorial-optimization/formulations/bin-packing-formulations/">Ch. 10 «Formulations of packing problems»</a></td>
</tr>
<tr>
<td><strong>Heuristics</strong></td>
<td><a href="https://fabiofurini.github.io/combinatorial-optimization/heuristic-algorithms/heuristics/#box-3-ex-refBPP">Ch. 29 «Heuristic algorithms: definitions»</a>; <a href="https://fabiofurini.github.io/combinatorial-optimization/heuristic-algorithms/constructive-heuristics/the-bin-packing-problem-first-sort-then-pack/#sez-sec-BPP">Ch. 30 «Constructive heuristics»</a>; <a href="https://fabiofurini.github.io/combinatorial-optimization/heuristic-algorithms/local-search/local-search-the-scheme/#3142-bpp-move-and-swap">Ch. 31 «Local search»</a>; <a href="https://fabiofurini.github.io/combinatorial-optimization/heuristic-algorithms/metaheuristics/large-neighbourhood-search/#sez-sec-lns-bpp">Ch. 32 «Metaheuristics»</a></td>
</tr>
<tr>
<td><strong>MIP heuristics</strong></td>
<td><a href="https://fabiofurini.github.io/combinatorial-optimization/heuristic-algorithms/mip-heuristics-classical/#eq-eq-bpp">Ch. 33 «MIP heuristics for the classical problems»</a></td>
</tr>
<tr>
<td><strong>Approximation</strong></td>
<td><a href="https://fabiofurini.github.io/combinatorial-optimization/approximation-algorithms/bin-packing-approximation/">Ch. 36 «Approximation algorithms for bin packing»</a></td>
</tr>
<tr>
<td><strong>Exercises</strong></td>
<td><a href="https://fabiofurini.github.io/combinatorial-optimization/exercises/bin-packing/">Ch. 3 (6 exercises)</a>; <a href="https://fabiofurini.github.io/combinatorial-optimization/exercises/pcmax/#esercizio-7-5">Exercise 7.5</a>; <a href="https://fabiofurini.github.io/combinatorial-optimization/exercises/bin-packing-formulations/">Ch. 10 (5 exercises)</a>; <a href="https://fabiofurini.github.io/combinatorial-optimization/exercises/heuristics/#esercizio-29-2">Exercise 29.2</a>; <a href="https://fabiofurini.github.io/combinatorial-optimization/exercises/constructive-heuristics/">Ch. 30 (3 exercises)</a>; <a href="https://fabiofurini.github.io/combinatorial-optimization/exercises/local-search/">Ch. 31 (3 exercises)</a>; <a href="https://fabiofurini.github.io/combinatorial-optimization/exercises/metaheuristics/">Ch. 32 (2 exercises)</a>; <a href="https://fabiofurini.github.io/combinatorial-optimization/exercises/approximation/#esercizio-34-3">Exercise 34.3</a>; <a href="https://fabiofurini.github.io/combinatorial-optimization/exercises/bin-packing-approximation/">Ch. 36 (12 exercises)</a></td>
</tr>
<tr>
<td><strong>Reference instances</strong></td>
<td><a href="https://fabiofurini.github.io/combinatorial-optimization/combinatorial-optimization-problems/bin-packing/the-bin-packing-problem/#box-2-ex-bpp">Ch. 3</a> (<span class="arithmatex">\(z=3\)</span>); <a href="https://fabiofurini.github.io/combinatorial-optimization/heuristic-algorithms/heuristics/#box-3-ex-refBPP">Ch. 29</a> (<span class="arithmatex">\(z=3\)</span>); <a href="https://fabiofurini.github.io/combinatorial-optimization/heuristic-algorithms/local-search/flat-landscapes-and-auxiliary-objectives/#sez-sec-flat">Ch. 31</a> (<span class="arithmatex">\(z=5\)</span>); <a href="https://fabiofurini.github.io/combinatorial-optimization/heuristic-algorithms/metaheuristics/the-problems-and-the-assumptions/#box-3-ex-medium">Ch. 32, BPP24</a> (<span class="arithmatex">\(z=9\)</span>); <a href="https://fabiofurini.github.io/combinatorial-optimization/heuristic-algorithms/mip-heuristics-classical/#box-19-ex-gurobi">Ch. 33</a> (<span class="arithmatex">\(z=23\)</span>)</td>
</tr>
</table></div>

### Properties { #sez-sec-cat-bpp-properties }

- Strongly NP-hard: no pseudo-polynomial algorithm exists, unless $P=NP$ ([Ch. 1](../combinatorial-optimization-problems/combinatorial-optimization/a-glimpse-of-computational-complexity.md#box-12-def-pseudo)).

- Weight bound $\LB = \lceil \sum_j w_j / c \rceil$; it is not always tight: three items of weight $6$ with $c=10$ need $3$ bins, not $2$ ([Ch. 3](../combinatorial-optimization-problems/bin-packing/the-bin-packing-problem.md#box-3-obs-bpp-l1)).

### Formulations { #sez-sec-cat-bpp-formulations }

- The model $\ILP_{\BPP}$ has $mn$ assignment variables $x_{jb}$ and $m$ activation variables $y_b$ ([Ch. 10](../formulations/bin-packing-formulations/an-ilp-model-for-the-bin-packing-problem.md#sez-sec-bpf-BPP)).

- Both LP relaxations have value $\sum_j w_j/c$: rounded up, the weight bound again ([Ch. 10](../formulations/bin-packing-formulations/an-ilp-model-for-the-bin-packing-problem.md#box-10-cor_lp_bpp_value)).

- The ratio of the LP bound to the optimum is at least $\frac12$, and $\frac12$ is approached ([Ch. 10](../formulations/bin-packing-formulations/an-ilp-model-for-the-bin-packing-problem.md#box-11-prop_lp_bpp_ratio_half)).

### Heuristics { #sez-sec-cat-bpp-heuristics }

- First Fit Decreasing and Best Fit Decreasing find the optimum $3$ on the instance of [Ch. 29](../heuristic-algorithms/heuristics.md); $FFD(I) \le \frac{11}{9}\, z(I) + \frac{6}{9}$, tight ([Ch. 30](../heuristic-algorithms/constructive-heuristics/the-bin-packing-problem-first-sort-then-pack.md#sez-sec-FFD)).

- The number of bins is flat, so move and swap local search uses the auxiliary objective $\max \sum_b L_b^2$ ([Ch. 31](../heuristic-algorithms/local-search/flat-landscapes-and-auxiliary-objectives.md#sez-sec-flat)).

- VND with move and swap reaches the optimum in $89$ of $100$ runs on an instance with $n=12$ ([Ch. 31](../heuristic-algorithms/local-search/variable-neighbourhood-descent.md#sez-sec-vnd)).

- Large neighbourhood search: on BPP24 the exact repair with $q\ge 3$ reaches the optimum $9$ in every run ([Ch. 32](../heuristic-algorithms/metaheuristics/large-neighbourhood-search.md#box-11-ex-lnsBPP)).

### MIP heuristics { #sez-sec-cat-bpp-mipheuristics }

- Rounding and fractional diving fail on the instance of [Ch. 29](../heuristic-algorithms/heuristics.md): the LP spreads an item over several bins ([Ch. 33](../heuristic-algorithms/mip-heuristics-classical.md#box-3-ex-rounding)).

- The feasibility pump always finds a packing, but it may leave empty bins open ([Ch. 33](../heuristic-algorithms/mip-heuristics-classical.md#box-8-ex-fpbpp)).

- On an instance with $n=60$ the whole difficulty is primal: the heuristics of Gurobi decide the solution time ([Ch. 33](../heuristic-algorithms/mip-heuristics-classical.md#box-19-ex-gurobi)).

### Approximation { #sez-sec-cat-bpp-approximation }

- Every Any Fit algorithm is half-full, hence a $2$-approximation ([Ch. 36](../approximation-algorithms/bin-packing-approximation.md#364-half-full-property)).

- $r(NF) = r(WF) = 2$ and $r(FF) = r(BF) = \frac{17}{10}$ ([Ch. 36](../approximation-algorithms/bin-packing-approximation.md#box-20-propFF)).
