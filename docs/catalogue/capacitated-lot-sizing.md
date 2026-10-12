---
title: "Capacitated lot sizing (CLS)"
---

# Capacitated lot sizing (CLS)

<div class="info-capitolo" markdown>

[:material-view-list: **Catalogue of combinatorial problems**](index.md) · [:material-folder-outline: Lot sizing problems](lot-sizing-problems.md) · [:material-file-pdf-box: Catalogue (PDF)](../pdf/combinatorial-problem-catalogue.pdf)

</div>

<a id="sec:cat-pagina-capacitated-lot-sizing"></a>

<a id="box-1-def-catdef-cls"></a>

!!! definizione "Definition 1: Capacitated lot sizing"

    Given:

    1. a set $T = \{1,2,\dots,m\}$ of $m$ <em>time periods</em>,

    2. for each period $t \in T$, a <em>demand</em> $d_t \in \Z_{\ge 1}$ and a <em>capacity</em> $cap_t \in \Z_{\ge 1}$, both counted in units of one product,

    3. for each period $t \in T$, three non-negative integer costs: the <em>setup cost</em> $sc_t$, the <em>variable production cost</em> $vc_t$ per unit produced and the <em>holding cost</em> $hc_t$ per unit kept in stock at the end of the period,

    the <strong>capacitated lot sizing problem</strong> (CLS) asks to decide how much to produce in every period, so that every demand is satisfied with what is produced and what is in stock, the capacities are respected, and the total cost of setups, production and holding is minimized.

<strong>Assumptions</strong>

- We make the following assumptions:

    1. The stock is empty at the beginning and at the end of the horizon. Leaving stock at the end only adds cost, so no optimal plan needs it; an initial stock is a variant of the problem (Section.

    2. The capacities allow to satisfy the demands, period after period (otherwise there is no feasible plan). Formally:

        $$
        \sum_{u=1}^{t} cap_u \ge \sum_{u=1}^{t} d_u, ~~~~ \forall t \in T
        $$

    3. The quantities are integer. With integer data, once the periods with a setup are fixed, what remains is a minimum cost flow problem, which has an integer optimal solution: restricting the quantities to integers does not change the optimal cost.

## What the course does on this problem { #sez-sec-cat-cls-vert }

<div class="tabella" markdown="0"><table>
<tr>
<th><strong>Technique</strong></th>
<th><strong>Where</strong></th>
</tr>
<tr>
<td><strong>Definition</strong></td>
<td><a href="https://fabiofurini.github.io/combinatorial-optimization/combinatorial-optimization-problems/lot-sizing/the-capacitated-lot-sizing-problem/#box-1-defCLS">Ch. 8 «Lot sizing problems»</a></td>
</tr>
<tr>
<td><strong>Formulations</strong></td>
<td><a href="https://fabiofurini.github.io/combinatorial-optimization/formulations/lot-sizing-formulations/">Ch. 15 «Formulations of lot sizing problems»</a></td>
</tr>
<tr>
<td><strong>Dynamic programming</strong></td>
<td><a href="https://fabiofurini.github.io/combinatorial-optimization/dynamic-programming/dp-principles/#164-the-dp-algorithms-of-this-module">Ch. 16 «Principles of dynamic programming»</a>; <a href="https://fabiofurini.github.io/combinatorial-optimization/dynamic-programming/dp-capacitated-lot-sizing/">Ch. 26 «DP for the capacitated lot sizing problem»</a></td>
</tr>
<tr>
<td><strong>MIP heuristics</strong></td>
<td><a href="https://fabiofurini.github.io/combinatorial-optimization/heuristic-algorithms/mip-heuristics-classical/#sez-sec-rf">Ch. 33 «MIP heuristics for the classical problems»</a></td>
</tr>
<tr>
<td><strong>Exercises</strong></td>
<td><a href="https://fabiofurini.github.io/combinatorial-optimization/exercises/lot-sizing/">Ch. 8 (5 exercises)</a>; <a href="https://fabiofurini.github.io/combinatorial-optimization/exercises/lot-sizing-formulations/">Ch. 15 (5 exercises)</a>; <a href="https://fabiofurini.github.io/combinatorial-optimization/exercises/dp-capacitated-lot-sizing/">Ch. 26 (2 exercises)</a></td>
</tr>
<tr>
<td><strong>Reference instances</strong></td>
<td><a href="https://fabiofurini.github.io/combinatorial-optimization/combinatorial-optimization-problems/lot-sizing/the-capacitated-lot-sizing-problem/#box-2-ex-cls5">Ch. 8</a> (<span class="arithmatex">\(z=180\)</span>)</td>
</tr>
</table></div>

### Properties { #sez-sec-cat-cls-properties }

- NP-hard with general capacities; without capacities (ULS) it is polynomial ([Ch. 1](../combinatorial-optimization-problems/combinatorial-optimization/a-glimpse-of-computational-complexity.md#box-12-def-pseudo)).

- Lower bound: the sum of the $k$ smallest setup costs, with $k$ the fewest periods whose capacities cover the total demand ([Ch. 8](../combinatorial-optimization-problems/lot-sizing/the-capacitated-lot-sizing-problem.md#box-5-obs-cls-lb)).

- Lot-for-lot and merging by hand: $250\to210\to180$ on the instance of Ch. 8, where $180$ is optimal ([Ch. 8](../combinatorial-optimization-problems/lot-sizing/the-capacitated-lot-sizing-problem.md#box-4-ex-cls-hand)).

### Formulations { #sez-sec-cat-cls-formulations }

- Big-M formulation: the strong value $M_t=\min\{cap_t,D_{t,m}\}$ raises the LP bound on the instance of [Ch. 8](../combinatorial-optimization-problems/lot-sizing/index.md) from $99.65$ to $157.5$ ([Ch. 15](../formulations/lot-sizing-formulations/ilp-models-for-the-capacitated-lot-sizing-problem.md#box-3-ex-CLS-bigM)).

- The shortest-path formulation gives the bound $170$, the strongest of the chapter ([Ch. 15](../formulations/lot-sizing-formulations/ilp-models-for-the-capacitated-lot-sizing-problem.md#sez-sec-lsf-compare)).

### Dynamic programming { #sez-sec-cat-cls-dynamicprogramming }

- Without capacities an optimal plan produces only with empty stock (Wagner and Whitin): a DP over the last production run solves the ULS in $\Theta(m^2)$ steps ([Ch. 25](../dynamic-programming/dp-lot-sizing/a-dp-algorithm-for-the-uls.md#252-a-dp-algorithm-for-the-uls)).

- With capacities the state is (period, inventory): $O(m\,D\,C)$ steps, pseudo-polynomial ([Ch. 26](../dynamic-programming/dp-capacitated-lot-sizing.md#2622-number-of-steps)).

### MIP heuristics { #sez-sec-cat-cls-mipheuristics }

- On the uncapacitated instance of the MIP course relax-and-fix finds the optimum $170$, while the least unit cost heuristic gives $200$ ([Ch. 33](../heuristic-algorithms/mip-heuristics-classical.md#box-16-ex-rfcourse)).

- On a capacitated instance relax-and-fix stops at $170$, and fix-and-optimize reaches the optimum $160$ ([Ch. 33](../heuristic-algorithms/mip-heuristics-classical.md#box-18-ex-fo)).
