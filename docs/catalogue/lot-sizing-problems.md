---
title: "Lot sizing problems"
---

# Lot sizing problems

<div class="info-capitolo" markdown>

[:material-view-list: **Catalogue of combinatorial problems**](index.md) · [:material-file-pdf-box: Catalogue (PDF)](../pdf/combinatorial-problem-catalogue.pdf)

</div>

<a id="sec:cat-pagina-lot-sizing-problems"></a>

- Given a horizon of $T$ periods with a demand $d_t$ in every period, a solution fixes the production periods (setups) and the quantity produced in each of them, so that every demand is satisfied.

- The objective is to minimize the total cost of setups, production and inventory holding; the members differ in the capacities, in the number of products and in the treatment of initial stock, overtime and unsatisfied demand.

<div class="tabella" markdown="0"><table>
<tr>
<th><strong>Problem</strong></th>
<th><strong>Acronym</strong></th>
<th><strong>Difference</strong></th>
</tr>
<tr>
<td><a href="https://fabiofurini.github.io/combinatorial-optimization/catalogue/capacitated-lot-sizing/">Capacitated lot sizing</a></td>
<td>CLS</td>
<td>The central problem of the family.</td>
</tr>
<tr>
<td><a href="https://fabiofurini.github.io/combinatorial-optimization/catalogue/uncapacitated-lot-sizing-problem/">Uncapacitated lot sizing problem</a></td>
<td>ULS</td>
<td>Special case of the CLS in which the capacities are not binding, for example <span class="arithmatex">\(cap_t \ge \sum_u d_u\)</span>.</td>
</tr>
<tr>
<td><a href="https://fabiofurini.github.io/combinatorial-optimization/catalogue/capacitated-lot-sizing-with-constant-capacity/">Capacitated lot sizing with constant capacity</a></td>
<td>CLS-C</td>
<td>Special case of the CLS; the zero-inventory ordering property is replaced by a weaker one: between two periods with empty inventory at most one period produces a quantity strictly between <span class="arithmatex">\(0\)</span> and <span class="arithmatex">\(C\)</span>.</td>
</tr>
<tr>
<td><a href="https://fabiofurini.github.io/combinatorial-optimization/catalogue/lot-sizing-with-several-products-and-setup-times/">Lot sizing with several products and setup times</a></td>
<td>MLS</td>
<td>Generalizes the CLS, which is the case of one product with <span class="arithmatex">\(vt_t=1\)</span> and no setup time.</td>
</tr>
<tr>
<td><a href="https://fabiofurini.github.io/combinatorial-optimization/catalogue/lot-sizing-with-initial-stock/">Lot sizing with initial stock</a></td>
<td>LS-SI</td>
<td>Removes the assumption of an empty initial stock of the CLS.</td>
</tr>
<tr>
<td><a href="https://fabiofurini.github.io/combinatorial-optimization/catalogue/lot-sizing-with-overtime/">Lot sizing with overtime</a></td>
<td>LS-OT</td>
<td>Replaces the fixed capacity <span class="arithmatex">\(cap_t\)</span> of the CLS by two levels of capacity with different costs.</td>
</tr>
<tr>
<td><a href="https://fabiofurini.github.io/combinatorial-optimization/catalogue/lot-sizing-with-unsatisfied-demand/">Lot sizing with unsatisfied demand</a></td>
<td>LS-UD</td>
<td>Relaxes the demand constraints of the CLS, with a penalty in the objective.</td>
</tr>
</table></div>
