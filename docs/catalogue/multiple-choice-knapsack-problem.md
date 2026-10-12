---
title: "Multiple-choice knapsack problem (MCKP)"
---

# Multiple-choice knapsack problem (MCKP)

<div class="info-capitolo" markdown>

[:material-view-list: **Catalogue of combinatorial problems**](index.md) · [:material-folder-outline: Knapsack problems](knapsack-problems.md) · [:material-file-pdf-box: Catalogue (PDF)](../pdf/combinatorial-problem-catalogue.pdf)

</div>

<a id="sec:cat-pagina-multiple-choice-knapsack-problem"></a>

<a id="box-1-def-catdef-mckp"></a>

!!! definizione "Definition 1: Multiple-choice knapsack problem"

    Given:

    1. a knapsack of <em>capacity</em> $c \in \Z_{\ge 1}$,

    2. a set $\mathscr{I} = \{1,2,\dots,n\}$ of $n$ items,

    3. the set of items is partitioned into $q \in \Z_{\ge 2}$ classes,

    4. for each class $h \in \{1,2,\dots,q\}$, the subset $\mathscr{J}_h \subseteq \mathscr{I}$ contains the items of that class,

    5. for each item $j \in \mathscr{I}$, a <em>profit</em> $p_j \in \Z_{\ge 1}$ and a <em>weight</em> $w_j \in \Z_{\ge 1}$,

    the <strong>Multiple-Choice Knapsack Problem</strong> (MCKP) asks to decide which items to insert into the knapsack, so that exactly one item is selected from each class, the total weight of the selected items does not exceed the knapsack capacity, and the total profit of the selected items is maximized.

<strong>Assumptions</strong>

- We make the following assumptions:

    1. Each class contains at least one item (otherwise, selecting exactly one item from each class is impossible). Formally:

        $$
        \mathscr{J}_h \neq \emptyset \qquad \forall\, h\in\{1,\dots,q\}.
        $$

    2. The instance is feasible, i.e., there exists at least one choice of exactly one item per class that fits in the knapsack. A necessary and sufficient (and easy-to-check) condition is:

        $$
        \sum_{h=1}^{q}\ \min_{j\in \mathscr{J}_h} w_j \;\le\; c.
        $$

## What the course does on this problem { #sez-sec-cat-mckp-vert }

<div class="tabella" markdown="0"><table>
<tr>
<th><strong>Technique</strong></th>
<th><strong>Where</strong></th>
</tr>
<tr>
<td><strong>Definition</strong></td>
<td><a href="https://fabiofurini.github.io/combinatorial-optimization/combinatorial-optimization-problems/knapsack/the-multiple-choice-knapsack-problem/#box-14-defMCKP">Ch. 2 «Knapsack problems»</a></td>
</tr>
<tr>
<td><strong>Dynamic programming</strong></td>
<td><a href="https://fabiofurini.github.io/combinatorial-optimization/dynamic-programming/dp-multiple-choice-knapsack/">Ch. 21 «DP for the multiple-choice knapsack problem»</a></td>
</tr>
<tr>
<td><strong>Exercises</strong></td>
<td><a href="https://fabiofurini.github.io/combinatorial-optimization/exercises/knapsack/#esercizio-2-5">Exercise 2.5</a>; <a href="https://fabiofurini.github.io/combinatorial-optimization/exercises/dp-multiple-choice-knapsack/">Ch. 21 (5 exercises)</a></td>
</tr>
<tr>
<td><strong>Reference instances</strong></td>
<td><a href="https://fabiofurini.github.io/combinatorial-optimization/combinatorial-optimization-problems/knapsack/the-multiple-choice-knapsack-problem/#box-15-ex-mckp">Ch. 2</a> (<span class="arithmatex">\(z=17\)</span>)</td>
</tr>
</table></div>
