---
title: "Unbounded knapsack problem (UKP)"
---

# Unbounded knapsack problem (UKP)

<div class="info-capitolo" markdown>

[:material-view-list: **Catalogue of combinatorial problems**](index.md) · [:material-folder-outline: Knapsack problems](knapsack-problems.md) · [:material-file-pdf-box: Catalogue (PDF)](../pdf/combinatorial-problem-catalogue.pdf)

</div>

<a id="sec:cat-pagina-unbounded-knapsack-problem"></a>

<a id="box-1-def-catdef-ukp"></a>

!!! definizione "Definition 1: Unbounded knapsack problem"

    Given:

    1. a knapsack of <em>capacity</em> $c \in \Z_{\ge 1}$,

    2. a set $\mathscr{I} = \{1,2,\dots,n\}$ of $n$ items,

    3. for each item $j \in \mathscr{I}$, which is available in an unlimited number of copies, a <em>profit</em> $p_j \in \Z_{\ge 1}$ and a <em>weight</em> $w_j \in \Z_{\ge 1}$,

    the <strong>Unbounded Knapsack Problem</strong> (UKP) asks to decide how many copies of each item to insert into the knapsack, so that the total weight of all selected item copies does not exceed the knapsack capacity and the total profit of all selected item copies is maximized.

<strong>Assumptions</strong>

- We make the following assumptions:

    1. The total weight of all possible copies of all items (up to the maximum number that can fit in the knapsack) exceeds the knapsack capacity (otherwise, all copies could be selected). Formally:

        $$
        \sum_{j \in \mathscr{I}} \hat b_j \, w_j > c
        $$

    2. Each item individually fits into the knapsack (otherwise, it cannot be selected). Formally:

        $$
        w_j \le c, \qquad \forall j \in \mathscr{I}
        $$

## What the course does on this problem { #sez-sec-cat-ukp-vert }

<div class="tabella" markdown="0"><table>
<tr>
<th><strong>Technique</strong></th>
<th><strong>Where</strong></th>
</tr>
<tr>
<td><strong>Definition</strong></td>
<td><a href="https://fabiofurini.github.io/combinatorial-optimization/combinatorial-optimization-problems/knapsack/the-unbounded-knapsack-problem/#box-8-defUKP">Ch. 2 «Knapsack problems»</a></td>
</tr>
<tr>
<td><strong>Formulations</strong></td>
<td><a href="https://fabiofurini.github.io/combinatorial-optimization/formulations/knapsack-formulations/an-ilp-model-for-the-unbounded-knapsack-problem/#sez-sec-kpf-UKP">Ch. 9 «Formulations of knapsack problems»</a></td>
</tr>
<tr>
<td><strong>Dynamic programming</strong></td>
<td><a href="https://fabiofurini.github.io/combinatorial-optimization/dynamic-programming/dp-principles/#164-the-dp-algorithms-of-this-module">Ch. 16 «Principles of dynamic programming»</a>; <a href="https://fabiofurini.github.io/combinatorial-optimization/dynamic-programming/dp-unbounded-knapsack/">Ch. 18 «DP for the unbounded knapsack problem»</a>; <a href="https://fabiofurini.github.io/combinatorial-optimization/dynamic-programming/dp-coin-change/">Ch. 27 «DP for the coin change problem»</a>; <a href="https://fabiofurini.github.io/combinatorial-optimization/dynamic-programming/dp-rod-cutting/">Ch. 28 «DP for the rod cutting problem»</a></td>
</tr>
<tr>
<td><strong>Exercises</strong></td>
<td><a href="https://fabiofurini.github.io/combinatorial-optimization/exercises/knapsack/#esercizio-2-3">Exercise 2.3</a>; <a href="https://fabiofurini.github.io/combinatorial-optimization/exercises/knapsack-formulations/#esercizio-9-8">Exercise 9.8</a>; <a href="https://fabiofurini.github.io/combinatorial-optimization/exercises/dp-unbounded-knapsack/">Ch. 18 (5 exercises)</a></td>
</tr>
<tr>
<td><strong>Reference instances</strong></td>
<td><a href="https://fabiofurini.github.io/combinatorial-optimization/combinatorial-optimization-problems/knapsack/the-unbounded-knapsack-problem/#box-9-ex-ukp">Ch. 2</a> (<span class="arithmatex">\(z=24\)</span>)</td>
</tr>
</table></div>
