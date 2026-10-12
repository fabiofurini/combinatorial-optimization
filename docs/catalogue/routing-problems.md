---
title: "Routing problems"
---

# Routing problems

<div class="info-capitolo" markdown>

[:material-view-list: **Catalogue of combinatorial problems**](index.md) · [:material-file-pdf-box: Catalogue (PDF)](../pdf/combinatorial-problem-catalogue.pdf)

</div>

<a id="sec:cat-pagina-routing-problems"></a>

- Given $n$ cities and the distance $d_{ij}$ between every ordered pair, a solution is a tour that visits every city exactly once and returns to the first one.

- The objective is to minimize the total length of the tour; the members differ in the properties of the distances, symmetric, metric or asymmetric.

- The Hamiltonian cycle problem is the decision problem on a graph: it asks whether a tour made of edges of the graph exists.

<div class="tabella" markdown="0"><table>
<tr>
<th><strong>Problem</strong></th>
<th><strong>Acronym</strong></th>
<th><strong>Difference</strong></th>
</tr>
<tr>
<td><a href="https://fabiofurini.github.io/combinatorial-optimization/catalogue/travelling-salesman-problem/">Travelling salesman problem</a></td>
<td>TSP</td>
<td>The central problem of the family.</td>
</tr>
<tr>
<td><a href="https://fabiofurini.github.io/combinatorial-optimization/catalogue/metric-travelling-salesman-problem/">Metric travelling salesman problem</a></td>
<td>metric TSP</td>
<td>The special case of the TSP with the triangle inequality, where approximation guarantees exist.</td>
</tr>
<tr>
<td><a href="https://fabiofurini.github.io/combinatorial-optimization/catalogue/asymmetric-travelling-salesman-problem/">Asymmetric travelling salesman problem</a></td>
<td>ATSP</td>
<td>The TSP is the special case of the ATSP in which <span class="arithmatex">\(d_{ij}=d_{ji}\)</span> for all <span class="arithmatex">\(i,j\)</span>; an ATSP instance has <span class="arithmatex">\((n-1)!\)</span> tours.</td>
</tr>
<tr>
<td><a href="https://fabiofurini.github.io/combinatorial-optimization/catalogue/hamiltonian-cycle-problem/">Hamiltonian cycle problem</a></td>
<td>HCP</td>
<td>With <span class="arithmatex">\(d_{ij}=1\)</span> on the edges and a large distance elsewhere, <span class="arithmatex">\(G\)</span> is Hamiltonian if and only if <span class="arithmatex">\(z(I_G)=n\)</span>: the TSP contains it.</td>
</tr>
</table></div>
