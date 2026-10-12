---
title: "Subset sum problem (SSP)"
---

# Subset sum problem (SSP)

<div class="info-capitolo" markdown>

[:material-view-list: **Catalogue of combinatorial problems**](index.md) · [:material-folder-outline: Knapsack problems](knapsack-problems.md) · [:material-file-pdf-box: Catalogue (PDF)](../pdf/combinatorial-problem-catalogue.pdf)

</div>

<a id="sec:cat-pagina-subset-sum-problem"></a>

<a id="box-1-def-catdef-ssp"></a>

!!! definizione "Definition 1: Subset sum problem"

    Given:

    1. a target value $c \in \Z_{\ge 1}$,

    2. a set $\mathscr{I} = \{1,2,\dots,n\}$ of $n$ items,

    3. for each item $j \in \mathscr{I}$, a <em>weight</em> $w_j \in \Z_{\ge 1}$,

    the <strong>Subset Sum Problem</strong> (SSP) asks whether there exists a subset of items whose total weight is exactly equal to the target value $c$.

<strong>Assumptions</strong>

- We make the following assumptions:

    1. The total weight of all items is at least the target value (otherwise, no feasible subset can exist). Formally:

        $$
        \sum_{j \in \mathscr{I}} w_j \ge c
        $$

    2. Each item weight is not larger than the target value (otherwise, it cannot belong to any feasible subset). Formally:

        $$
        w_j \le c,~~~~ \forall j \in \mathscr{I}
        $$

## What the course does on this problem { #sez-sec-cat-ssp-vert }

<div class="tabella" markdown="0"><table>
<tr>
<th><strong>Technique</strong></th>
<th><strong>Where</strong></th>
</tr>
<tr>
<td><strong>Definition</strong></td>
<td><a href="https://fabiofurini.github.io/combinatorial-optimization/combinatorial-optimization-problems/knapsack/the-subset-sum-problem/#box-4-defSSP">Ch. 2 «Knapsack problems»</a></td>
</tr>
<tr>
<td><strong>Formulations</strong></td>
<td><a href="https://fabiofurini.github.io/combinatorial-optimization/formulations/knapsack-formulations/an-ilp-model-for-the-subset-sum-problem/#sez-sec-kpf-SSP">Ch. 9 «Formulations of knapsack problems»</a></td>
</tr>
<tr>
<td><strong>Dynamic programming</strong></td>
<td><a href="https://fabiofurini.github.io/combinatorial-optimization/dynamic-programming/dp-principles/#164-the-dp-algorithms-of-this-module">Ch. 16 «Principles of dynamic programming»</a>; <a href="https://fabiofurini.github.io/combinatorial-optimization/dynamic-programming/dp-subset-sum/">Ch. 20 «DP for the subset sum problem»</a></td>
</tr>
<tr>
<td><strong>Exercises</strong></td>
<td><a href="https://fabiofurini.github.io/combinatorial-optimization/exercises/knapsack/#esercizio-2-2">Exercise 2.2</a>; <a href="https://fabiofurini.github.io/combinatorial-optimization/exercises/knapsack-formulations/#esercizio-9-6">Exercise 9.6</a>; <a href="https://fabiofurini.github.io/combinatorial-optimization/exercises/dp-principles/#esercizio-16-2">Exercise 16.2</a>; <a href="https://fabiofurini.github.io/combinatorial-optimization/exercises/dp-subset-sum/">Ch. 20 (5 exercises)</a></td>
</tr>
<tr>
<td><strong>Reference instances</strong></td>
<td><a href="https://fabiofurini.github.io/combinatorial-optimization/combinatorial-optimization-problems/knapsack/the-subset-sum-problem/#box-5-ex-ssp">Ch. 2</a></td>
</tr>
</table></div>
