---
title: "Maximum stable set problem (MSSP)"
---

# Maximum stable set problem (MSSP)

<div class="info-capitolo" markdown>

[:material-view-list: **Catalogue of combinatorial problems**](index.md) · [:material-folder-outline: Clique problems](clique-problems.md) · [:material-file-pdf-box: Catalogue (PDF)](../pdf/combinatorial-problem-catalogue.pdf)

</div>

<a id="sec:cat-pagina-maximum-stable-set-problem"></a>

<a id="box-1-def-catdef-mssp"></a>

!!! definizione "Definition 1: Maximum stable set problem"

    Let $G=(V,E)$ be a graph.

    1. A <strong>stable set</strong> (also called <strong>independent set</strong>) is a subset $Q \subseteq V$ of pairwise non-adjacent vertices: $\{u,v\} \notin E$ for all $u,v \in Q$ with $u \neq v$.

    2. The <strong>Maximum Stable Set Problem</strong> (MSSP) asks to find a stable set of $G$ whose number of vertices is maximum. Its optimal value is the <strong>stability number</strong> $\alpha(G)$.

<strong>Assumptions</strong>

- We consider nontrivial instances: the graph has at least one edge and at least one non-edge. Formally:

    $$
    1 \le m < \binom{n}{2}.
    $$

- The assumption can be made without loss of generality: if the graph has no edge, every single vertex is a maximum clique and $\omega(G)=1$; if the graph is complete, $V$ itself is a clique and $\omega(G)=n$.

## What the course does on this problem { #sez-sec-cat-mssp-vert }

<div class="tabella" markdown="0"><table>
<tr>
<th><strong>Technique</strong></th>
<th><strong>Where</strong></th>
</tr>
<tr>
<td><strong>Definition</strong></td>
<td><a href="https://fabiofurini.github.io/combinatorial-optimization/combinatorial-optimization-problems/clique/the-maximum-clique-problem/#box-3-mcpP-def-MSSP">Ch. 5 «Clique problems»</a></td>
</tr>
<tr>
<td><strong>Formulations</strong></td>
<td><a href="https://fabiofurini.github.io/combinatorial-optimization/formulations/clique-formulations/">Ch. 12 «Formulations of clique problems»</a></td>
</tr>
<tr>
<td><strong>Limits of approximation</strong></td>
<td><a href="https://fabiofurini.github.io/combinatorial-optimization/approximation-algorithms/clique-inapproximability/#box-7-cli-cormssp">Ch. 38 «Maximum clique: limits of approximation»</a></td>
</tr>
<tr>
<td><strong>Exercises</strong></td>
<td><a href="https://fabiofurini.github.io/combinatorial-optimization/exercises/coloring/#esercizio-4-3">Exercise 4.3</a>; <a href="https://fabiofurini.github.io/combinatorial-optimization/exercises/clique/">Ch. 5 (2 exercises)</a>; <a href="https://fabiofurini.github.io/combinatorial-optimization/exercises/clique-formulations/#esercizio-12-6">Exercise 12.6</a>; <a href="https://fabiofurini.github.io/combinatorial-optimization/exercises/clique-inapproximability/">Ch. 38 (2 exercises)</a></td>
</tr>
</table></div>
