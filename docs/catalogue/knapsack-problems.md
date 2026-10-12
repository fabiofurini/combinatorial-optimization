---
title: "Knapsack problems"
---

# Knapsack problems

<div class="info-capitolo" markdown>

[:material-view-list: **Catalogue of combinatorial problems**](index.md) · [:material-file-pdf-box: Catalogue (PDF)](../pdf/combinatorial-problem-catalogue.pdf)

</div>

<a id="sec:cat-pagina-knapsack-problems"></a>

- Each item $j$ has a profit $p_j$ and a weight $w_j$; a solution selects a subset, or a multiset, of the items whose weights satisfy one or more capacity constraints.

- The objective is to maximize the total profit of the selected items; in the subset sum problem the total weight must be equal to a target value.

- The members differ in the number of copies of each item, in the number of capacities and knapsacks, and in additional constraints on the selected items.

<div class="tabella" markdown="0"><table>
<tr>
<th><strong>Problem</strong></th>
<th><strong>Acronym</strong></th>
<th><strong>Difference</strong></th>
</tr>
<tr>
<td><a href="https://fabiofurini.github.io/combinatorial-optimization/catalogue/knapsack-problem/">0/1 knapsack problem</a></td>
<td>KP</td>
<td>The central problem of the family.</td>
</tr>
<tr>
<td><a href="https://fabiofurini.github.io/combinatorial-optimization/catalogue/subset-sum-problem/">Subset sum problem</a></td>
<td>SSP</td>
<td>The SSP is solved as the KP with <span class="arithmatex">\(p_j = w_j\)</span> for all <span class="arithmatex">\(j\in\Ioggetti\)</span>: the answer is yes if and only if the optimal value of this KP equals <span class="arithmatex">\(c\)</span>.</td>
</tr>
<tr>
<td><a href="https://fabiofurini.github.io/combinatorial-optimization/catalogue/bounded-knapsack-problem/">Bounded knapsack problem</a></td>
<td>BKP</td>
<td>The BKP reduces to the KP when <span class="arithmatex">\(b_j=1\)</span> for every item, and to the UKP when every bound <span class="arithmatex">\(b_j\)</span> is large enough not to be binding.</td>
</tr>
<tr>
<td><a href="https://fabiofurini.github.io/combinatorial-optimization/catalogue/unbounded-knapsack-problem/">Unbounded knapsack problem</a></td>
<td>UKP</td>
<td>The UKP is the BKP with <span class="arithmatex">\(b_j = \hat b_j = \lfloor c/w_j \rfloor\)</span>: each item can be taken as many times as it fits.</td>
</tr>
<tr>
<td><a href="https://fabiofurini.github.io/combinatorial-optimization/catalogue/multidimensional-knapsack-problem/">Multidimensional knapsack problem</a></td>
<td>MDKP</td>
<td>The MDKP is the KP with <span class="arithmatex">\(k\)</span> capacity constraints, one for each resource; with <span class="arithmatex">\(k=1\)</span> it is the KP.</td>
</tr>
<tr>
<td><a href="https://fabiofurini.github.io/combinatorial-optimization/catalogue/multiple-knapsack-problem/">Multiple knapsack problem</a></td>
<td>MKP</td>
<td>The MKP is the KP with <span class="arithmatex">\(m\)</span> knapsacks; every feasible solution of the MKP is feasible for the KP with capacity <span class="arithmatex">\(\sum_{k\in\mathscr{K}} c_k\)</span>, which gives a dual bound.</td>
</tr>
<tr>
<td><a href="https://fabiofurini.github.io/combinatorial-optimization/catalogue/multiple-choice-knapsack-problem/">Multiple-choice knapsack problem</a></td>
<td>MCKP</td>
<td>The MCKP is the KP with the additional constraint that exactly one item of every class is selected, so an instance can be infeasible.</td>
</tr>
<tr>
<td><a href="https://fabiofurini.github.io/combinatorial-optimization/catalogue/knapsack-problem-with-setups/">Knapsack problem with setups</a></td>
<td>KPS</td>
<td>The KPS is the KP in which selecting the first item of a class costs the setup <span class="arithmatex">\(f_h\)</span> and consumes the setup weight <span class="arithmatex">\(s_h\)</span>; a class with no selected item costs nothing.</td>
</tr>
</table></div>
