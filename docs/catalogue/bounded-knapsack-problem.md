---
title: "Bounded knapsack problem (BKP)"
---

# Bounded knapsack problem (BKP)

<div class="info-capitolo" markdown>

[:material-view-list: **Catalogue of combinatorial problems**](index.md) · [:material-folder-outline: Knapsack problems](knapsack-problems.md) · [:material-file-pdf-box: Catalogue (PDF)](../pdf/combinatorial-problem-catalogue.pdf)

</div>

<a id="sec:cat-pagina-bounded-knapsack-problem"></a>

<a id="box-1-def-catdef-bkp"></a>

!!! definizione "Definition 1: Bounded knapsack problem"

    Given:

    1. a knapsack of <em>capacity</em> $c \in \Z_{\ge 1}$,

    2. a set $\mathscr{I} = \{1,2,\dots,n\}$ of $n$ items,

    3. for each item $j \in \mathscr{I}$, a <em>profit</em> $p_j \in \Z_{\ge 1}$, a <em>weight</em> $w_j \in \Z_{\ge 1}$, and a <em>number of available copies</em> $b_j \in \Z_{\ge 1}$,

    the <strong>Bounded Knapsack Problem</strong> (BKP) asks to decide how many copies of each item to insert into the knapsack, so that the total weight of all selected item copies does not exceed the knapsack capacity, each item is taken no more than its available copies, and the total profit of all selected item copies is maximized.

<strong>Assumptions</strong>

- We make the following assumptions:

    1. The total weight of all available copies of all items exceeds the knapsack capacity (otherwise, all copies could be selected). Formally:

        $$
        \sum_{j \in \mathscr{I}} b_j \, w_j > c
        $$

    2. Each item individually fits into the knapsack (otherwise, it cannot be selected). Formally:

        $$
        w_j \le c, \qquad \forall j \in \mathscr{I}
        $$

    3. The total weight of all available copies of any single item does not exceed the knapsack capacity (otherwise, that item could never be taken in the maximum allowed number of copies). Formally:

        $$
        b_j \, w_j \le c, \qquad \forall j \in \mathscr{I}
        $$

## What the course does on this problem { #sez-sec-cat-bkp-vert }

<div class="tabella" markdown="0"><table>
<tr>
<th><strong>Technique</strong></th>
<th><strong>Where</strong></th>
</tr>
<tr>
<td><strong>Definition</strong></td>
<td><a href="https://fabiofurini.github.io/combinatorial-optimization/combinatorial-optimization-problems/knapsack/the-bounded-knapsack-problem/#box-6-defBKP">Ch. 2 «Knapsack problems»</a></td>
</tr>
<tr>
<td><strong>Formulations</strong></td>
<td><a href="https://fabiofurini.github.io/combinatorial-optimization/formulations/knapsack-formulations/an-ilp-model-for-the-bounded-knapsack-problem/#sez-sec-kpf-BKP">Ch. 9 «Formulations of knapsack problems»</a></td>
</tr>
<tr>
<td><strong>Dynamic programming</strong></td>
<td><a href="https://fabiofurini.github.io/combinatorial-optimization/dynamic-programming/dp-principles/#164-the-dp-algorithms-of-this-module">Ch. 16 «Principles of dynamic programming»</a>; <a href="https://fabiofurini.github.io/combinatorial-optimization/dynamic-programming/dp-bounded-knapsack/">Ch. 19 «DP for the bounded knapsack problem»</a></td>
</tr>
<tr>
<td><strong>Exercises</strong></td>
<td><a href="https://fabiofurini.github.io/combinatorial-optimization/exercises/knapsack/#esercizio-2-3">Exercise 2.3</a>; <a href="https://fabiofurini.github.io/combinatorial-optimization/exercises/knapsack-formulations/#esercizio-9-7">Exercise 9.7</a>; <a href="https://fabiofurini.github.io/combinatorial-optimization/exercises/dp-bounded-knapsack/">Ch. 19 (5 exercises)</a></td>
</tr>
<tr>
<td><strong>Reference instances</strong></td>
<td><a href="https://fabiofurini.github.io/combinatorial-optimization/combinatorial-optimization-problems/knapsack/the-bounded-knapsack-problem/#box-7-ex-bkp">Ch. 2</a> (<span class="arithmatex">\(z=18\)</span>)</td>
</tr>
</table></div>
