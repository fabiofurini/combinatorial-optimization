---
title: "Clique problems"
---

# Clique problems

<div class="info-capitolo" markdown>

[:material-view-list: **Catalogue of combinatorial problems**](index.md) · [:material-file-pdf-box: Catalogue (PDF)](../pdf/combinatorial-problem-catalogue.pdf)

</div>

<a id="sec:cat-pagina-clique-problems"></a>

- Given an undirected graph $G=(V,E)$, a clique is a subset of pairwise adjacent vertices; the objective is to maximize its cardinality $\omega(G)$, or a weight of its vertices or edges.

- A stable set of $G$ is a clique of the complement graph $\bar G$, so the maximum stable set problem belongs to the same family.

<div class="tabella" markdown="0"><table>
<tr>
<th><strong>Problem</strong></th>
<th><strong>Acronym</strong></th>
<th><strong>Difference</strong></th>
</tr>
<tr>
<td><a href="https://fabiofurini.github.io/combinatorial-optimization/catalogue/maximum-clique-problem/">Maximum clique problem</a></td>
<td>MCP</td>
<td>The central problem of the family.</td>
</tr>
<tr>
<td><a href="https://fabiofurini.github.io/combinatorial-optimization/catalogue/maximum-stable-set-problem/">Maximum stable set problem</a></td>
<td>MSSP</td>
<td>A subset is a clique of <span class="arithmatex">\(G\)</span> if and only if it is a stable set of <span class="arithmatex">\(\overline{G}\)</span>: <span class="arithmatex">\(\omega(G) = \alpha(\overline{G})\)</span> and <span class="arithmatex">\(\alpha(G) = \omega(\overline{G})\)</span>.</td>
</tr>
<tr>
<td><a href="https://fabiofurini.github.io/combinatorial-optimization/catalogue/vertex-weighted-maximum-clique-problem/">Vertex-weighted maximum clique problem</a></td>
<td>VWMCP</td>
<td>With all the weights <span class="arithmatex">\(w_v=1\)</span> it is the MCP.</td>
</tr>
<tr>
<td><a href="https://fabiofurini.github.io/combinatorial-optimization/catalogue/edge-weighted-maximum-clique-problem/">Edge-weighted maximum clique problem</a></td>
<td>EWMCP</td>
<td>With <span class="arithmatex">\(r_{uv}=1\)</span> it is again the MCP, since <span class="arithmatex">\(r(K)=\binom{|K|}{2}\)</span> grows with <span class="arithmatex">\(|K|\)</span>.</td>
</tr>
</table></div>
