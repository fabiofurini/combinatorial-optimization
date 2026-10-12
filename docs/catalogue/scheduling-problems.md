---
title: "Scheduling problems"
---

# Scheduling problems

<div class="info-capitolo" markdown>

[:material-view-list: **Catalogue of combinatorial problems**](index.md) · [:material-file-pdf-box: Catalogue (PDF)](../pdf/combinatorial-problem-catalogue.pdf)

</div>

<a id="sec:cat-pagina-scheduling-problems"></a>

- Given $n$ jobs with processing times and $m$ parallel machines, a solution assigns every job to one machine, where it is processed without interruption.

- The objective is to minimize the makespan $C_{\max}$, the completion time of the last job; in the three-field notation $\alpha\|C_{\max}$ the field $\alpha$ describes the machines: identical ($P$), a fixed number of identical machines ($Pm$), with different speeds ($Q$) or unrelated ($R$).

<div class="tabella" markdown="0"><table>
<tr>
<th><strong>Problem</strong></th>
<th><strong>Acronym</strong></th>
<th><strong>Difference</strong></th>
</tr>
<tr>
<td><a href="https://fabiofurini.github.io/combinatorial-optimization/catalogue/scheduling-on-identical-parallel-machines/">Scheduling on identical parallel machines</a></td>
<td><span class="arithmatex">\(P\|C_{\max}\)</span></td>
<td>The central problem of the family.</td>
</tr>
<tr>
<td><a href="https://fabiofurini.github.io/combinatorial-optimization/catalogue/scheduling-on-a-fixed-number-of-identical-machines/">Scheduling on a fixed number of identical machines</a></td>
<td><span class="arithmatex">\(Pm\|C_{\max}\)</span></td>
<td>Special case of <span class="arithmatex">\(P\,||\,C_{\max}\)</span> with <span class="arithmatex">\(m\)</span> fixed; with <span class="arithmatex">\(m=2\)</span> it asks for a split of the jobs into two sets of loads as equal as possible.</td>
</tr>
<tr>
<td><a href="https://fabiofurini.github.io/combinatorial-optimization/catalogue/scheduling-on-parallel-machines-with-different-speeds/">Scheduling on parallel machines with different speeds</a></td>
<td><span class="arithmatex">\(Q\|C_{\max}\)</span></td>
<td>Generalizes <span class="arithmatex">\(P\,||\,C_{\max}\)</span>, which is the case of machines with equal speeds.</td>
</tr>
<tr>
<td><a href="https://fabiofurini.github.io/combinatorial-optimization/catalogue/scheduling-on-unrelated-parallel-machines/">Scheduling on unrelated parallel machines</a></td>
<td><span class="arithmatex">\(R\|C_{\max}\)</span></td>
<td>Generalizes <span class="arithmatex">\(Q\,||\,C_{\max}\)</span> and <span class="arithmatex">\(P\,||\,C_{\max}\)</span>.</td>
</tr>
</table></div>
