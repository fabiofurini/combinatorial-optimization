---
title: "Uncapacitated lot sizing problem (ULS)"
---

# Uncapacitated lot sizing problem (ULS)

<div class="info-capitolo" markdown>

[:material-view-list: **Catalogue of combinatorial problems**](index.md) · [:material-folder-outline: Lot sizing problems](lot-sizing-problems.md) · [:material-file-pdf-box: Catalogue (PDF)](../pdf/combinatorial-problem-catalogue.pdf)

</div>

<a id="sec:cat-pagina-uncapacitated-lot-sizing-problem"></a>

<a id="box-1-def-catdef-uls"></a>

!!! definizione "Definition 1: Uncapacitated lot sizing problem"

    Given:

    1. a set $T=\{1,2,\dots,m\}$ of $m \in \Z_{\ge 1}$ <em>time periods</em>,

    2. for each period $t \in T$, a <em>demand</em> $d_t \in \Z_{\ge 1}$,

    3. for each period $t \in T$, a <em>setup cost</em> $sc_t \in \Z_{\ge 0}$, a <em>variable production cost</em> $vc_t \in \Z_{\ge 0}$ per unit, and a <em>holding cost</em> $hc_t \in \Z_{\ge 0}$ per unit in stock at the end of period $t$,

    the <strong>Uncapacitated Lot-Sizing Problem</strong> (ULS) asks to decide how many units to produce in each period, so that, starting with an empty inventory and ending with an empty inventory, the demand of every period is satisfied, and the total cost of setups, production, and holding is minimized.

<strong>Assumptions</strong>

- We make the following assumptions:

    1. There is a single product, and the stock is empty at the beginning and at the end of the horizon: the ULS is the CLS of a single product without capacities and with no initial stock.

    2. The quantities are integer. With integer data, once the periods with a setup are fixed, what remains is a minimum cost flow problem, which has an integer optimal solution: restricting the quantities to integers does not change the optimal cost.

## What the course does on this problem { #sez-sec-cat-uls-vert }

<div class="tabella" markdown="0"><table>
<tr>
<th><strong>Technique</strong></th>
<th><strong>Where</strong></th>
</tr>
<tr>
<td><strong>Definition</strong></td>
<td>This page</td>
</tr>
<tr>
<td><strong>Formulations</strong></td>
<td><a href="https://fabiofurini.github.io/combinatorial-optimization/formulations/lot-sizing-formulations/ilp-models-for-the-capacitated-lot-sizing-problem/#sez-sec-lsf-compare">Ch. 15 «Formulations of lot sizing problems»</a></td>
</tr>
<tr>
<td><strong>Dynamic programming</strong></td>
<td><a href="https://fabiofurini.github.io/combinatorial-optimization/dynamic-programming/dp-principles/#164-the-dp-algorithms-of-this-module">Ch. 16 «Principles of dynamic programming»</a>; <a href="https://fabiofurini.github.io/combinatorial-optimization/dynamic-programming/dp-lot-sizing/#box-3-thmZIO">Ch. 25 «DP for the uncapacitated lot sizing problem»</a></td>
</tr>
<tr>
<td><strong>MIP heuristics</strong></td>
<td><a href="https://fabiofurini.github.io/combinatorial-optimization/heuristic-algorithms/mip-heuristics-classical/#box-16-ex-rfcourse">Ch. 33 «MIP heuristics for the classical problems»</a></td>
</tr>
<tr>
<td><strong>Exercises</strong></td>
<td><a href="https://fabiofurini.github.io/combinatorial-optimization/exercises/lot-sizing/#esercizio-8-4">Exercise 8.4</a>; <a href="https://fabiofurini.github.io/combinatorial-optimization/exercises/lot-sizing-formulations/#esercizio-15-6">Exercise 15.6</a>; <a href="https://fabiofurini.github.io/combinatorial-optimization/exercises/dp-lot-sizing/">Ch. 25 (3 exercises)</a></td>
</tr>
<tr>
<td><strong>Reference instances</strong></td>
<td><a href="https://fabiofurini.github.io/combinatorial-optimization/combinatorial-optimization-problems/lot-sizing/the-capacitated-lot-sizing-problem/#83-counting-the-solutions">Ch. 8</a> (<span class="arithmatex">\(z=170\)</span>)</td>
</tr>
</table></div>
