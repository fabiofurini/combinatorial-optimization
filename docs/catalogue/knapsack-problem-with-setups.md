---
title: "Knapsack problem with setups (KPS)"
---

# Knapsack problem with setups (KPS)

<div class="info-capitolo" markdown>

[:material-view-list: **Catalogue of combinatorial problems**](index.md) · [:material-folder-outline: Knapsack problems](knapsack-problems.md) · [:material-file-pdf-box: Catalogue (PDF)](../pdf/combinatorial-problem-catalogue.pdf)

</div>

<a id="sec:cat-pagina-knapsack-problem-with-setups"></a>

<a id="box-1-def-catdef-kps"></a>

!!! definizione "Definition 1: Knapsack problem with setups"

    Given:

    1. a knapsack of <em>capacity</em> $c \in \Z_{\ge 1}$,

    2. a set $\mathscr{I} = \{1,2,\dots,n\}$ of $n$ items,

    3. the set of items is partitioned into $q \in \Z_{\ge 2}$ classes,

    4. for each class $h \in \{1,2,\dots,q\}$, the subset $\mathscr{J}_h \subseteq \mathscr{I}$ contains the items of that class, with an associated <em>setup cost</em> $f_h \in \Z_{\ge 1}$ and a <em>setup weight</em> $s_h \in \Z_{\ge 1}$,

    5. for each item $j \in \mathscr{I}$, a <em>revenue</em> $p_j \in \Z_{\ge 1}$ and a <em>weight</em> $w_j \in \Z_{\ge 1}$,

    the <strong>Knapsack Problem with Setups</strong> (KPS) asks to decide which items to insert into the knapsack, so that the total weight of the selected items plus the setup weights of their classes does not exceed the knapsack capacity, and the total revenue of the selected items minus the setup costs of their classes is maximized.

<strong>Assumptions</strong>

- We make the following assumptions:

    1. Each class contains at least one item. Formally:

        $$
        \mathscr{J}_h \neq \emptyset \qquad \forall\, h\in\{1,2,\dots,q\}.
        $$

    2. Each item can fit into the knapsack together with the setup weight of its class (otherwise, it can never be selected). Formally:

        $$
        w_j + s_h \le c \qquad \forall\, h\in\{1,2,\dots,q\},\ \forall\, j\in \mathscr{J}_h.
        $$

## What the course does on this problem { #sez-sec-cat-kps-vert }

<div class="tabella" markdown="0"><table>
<tr>
<th><strong>Technique</strong></th>
<th><strong>Where</strong></th>
</tr>
<tr>
<td><strong>Definition</strong></td>
<td><a href="https://fabiofurini.github.io/combinatorial-optimization/combinatorial-optimization-problems/knapsack/the-knapsack-problem-with-setups/#box-16-defKPS">Ch. 2 «Knapsack problems»</a></td>
</tr>
<tr>
<td><strong>Dynamic programming</strong></td>
<td><a href="https://fabiofurini.github.io/combinatorial-optimization/dynamic-programming/dp-knapsack-setups/">Ch. 23 «DP for the knapsack problem with setups»</a></td>
</tr>
<tr>
<td><strong>Exercises</strong></td>
<td><a href="https://fabiofurini.github.io/combinatorial-optimization/exercises/dp-knapsack-setups/">Ch. 23 (5 exercises)</a></td>
</tr>
<tr>
<td><strong>Reference instances</strong></td>
<td><a href="https://fabiofurini.github.io/combinatorial-optimization/combinatorial-optimization-problems/knapsack/the-knapsack-problem-with-setups/#box-17-ex-kps">Ch. 2</a> (<span class="arithmatex">\(z=16\)</span>)</td>
</tr>
</table></div>
