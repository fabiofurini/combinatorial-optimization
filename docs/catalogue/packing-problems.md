---
title: "Packing problems"
---

# Packing problems

<div class="info-capitolo" markdown>

[:material-view-list: **Catalogue of combinatorial problems**](index.md) · [:material-file-pdf-box: Catalogue (PDF)](../pdf/combinatorial-problem-catalogue.pdf)

</div>

<a id="sec:cat-pagina-packing-problems"></a>

- Each item $j$ has a weight $w_j$; a solution is a partition of the items into bins of capacity $c$, such that the total weight of the items in every bin is at most $c$.

- The objective is to minimize the number of bins; in the cutting stock problem the items are grouped into types with a demand $d_j$.

<div class="tabella" markdown="0"><table>
<tr>
<th><strong>Problem</strong></th>
<th><strong>Acronym</strong></th>
<th><strong>Difference</strong></th>
</tr>
<tr>
<td><a href="https://fabiofurini.github.io/combinatorial-optimization/catalogue/bin-packing-problem/">Bin packing problem</a></td>
<td>BPP</td>
<td>The central problem of the family.</td>
</tr>
<tr>
<td><a href="https://fabiofurini.github.io/combinatorial-optimization/catalogue/cutting-stock-problem/">Cutting stock problem</a></td>
<td>CSP</td>
<td>The CSP is the BPP with <span class="arithmatex">\(d_j\)</span> identical copies of every item <span class="arithmatex">\(j\)</span>, and the BPP is the case <span class="arithmatex">\(d_j = 1\)</span> for all <span class="arithmatex">\(j\in\Ioggetti\)</span>.</td>
</tr>
</table></div>
