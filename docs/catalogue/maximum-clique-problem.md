---
title: "The maximum clique problem (MCP)"
---

# The maximum clique problem (MCP)

<div class="info-capitolo" markdown>

[:material-view-list: **Catalogue of combinatorial problems**](index.md) · [:material-folder-outline: Clique problems](clique-problems.md) · [:material-file-pdf-box: Catalogue (PDF)](../pdf/combinatorial-problem-catalogue.pdf)

</div>

<a id="sec:cat-pagina-maximum-clique-problem"></a>

<a id="box-1-def-catdef-mcp"></a>

!!! definizione "Definition 1: The maximum clique problem"

    Given:

    1. a simple <em>graph</em> $G = (V,E)$, where

        $$
        V = \{1,2,\dots,n\}
        $$

        is the set of $n$ <em>vertices</em>, and

        $$
        E \subseteq \big\{\, \{u,v\} : u,v \in V,~ u \neq v \,\big\}
        $$

        is the set of $m$ <em>edges</em>,

    the <strong>Maximum Clique Problem</strong> (MCP) asks to find a clique $K \subseteq V$ of $G$ whose number of vertices is maximum. Its optimal value is the clique number $\omega(G)$.

<strong>Assumptions</strong>

- We consider nontrivial instances: the graph has at least one edge and at least one non-edge. Formally:

    $$
    1 \le m < \binom{n}{2}.
    $$

- The assumption can be made without loss of generality: if the graph has no edge, every single vertex is a maximum clique and $\omega(G)=1$; if the graph is complete, $V$ itself is a clique and $\omega(G)=n$.

## What the course does on this problem { #sez-sec-cat-mcp-vert }

<div class="tabella" markdown="0"><table>
<tr>
<th><strong>Technique</strong></th>
<th><strong>Where</strong></th>
</tr>
<tr>
<td><strong>Definition</strong></td>
<td><a href="https://fabiofurini.github.io/combinatorial-optimization/combinatorial-optimization-problems/clique/the-maximum-clique-problem/#box-2-mcpP-def-MCP">Ch. 5 «Clique problems»</a></td>
</tr>
<tr>
<td><strong>Formulations</strong></td>
<td><a href="https://fabiofurini.github.io/combinatorial-optimization/formulations/clique-formulations/an-ilp-model-for-the-maximum-clique-problem-the-edge-formula/#sez-sec-mcpf-MCP">Ch. 12 «Formulations of clique problems»</a></td>
</tr>
<tr>
<td><strong>Limits of approximation</strong></td>
<td><a href="https://fabiofurini.github.io/combinatorial-optimization/approximation-algorithms/clique-inapproximability/">Ch. 38 «Maximum clique: limits of approximation»</a></td>
</tr>
<tr>
<td><strong>Exercises</strong></td>
<td><a href="https://fabiofurini.github.io/combinatorial-optimization/exercises/coloring/">Ch. 4 (2 exercises)</a>; <a href="https://fabiofurini.github.io/combinatorial-optimization/exercises/clique/">Ch. 5 (5 exercises)</a>; <a href="https://fabiofurini.github.io/combinatorial-optimization/exercises/clique-formulations/">Ch. 12 (5 exercises)</a>; <a href="https://fabiofurini.github.io/combinatorial-optimization/exercises/clique-inapproximability/">Ch. 38 (4 exercises)</a></td>
</tr>
</table></div>

### Properties { #sez-sec-cat-mcp-properties }

- NP-hard: deciding whether a clique with $k$ vertices exists is one of the $21$ NP-complete problems of Karp ([Ch. 5](../combinatorial-optimization-problems/clique/index.md)).

- Upper bounds: degree $\Delta+1$, edges, degree count $k^{\max}$ and coloring $\chi(G)$ ([Ch. 5](../combinatorial-optimization-problems/clique/the-maximum-clique-problem.md#box-8-mcpP-obs-degree)).

- A first clique by hand: start from a vertex of maximum degree and add vertices adjacent to all those chosen ([Ch. 5](../combinatorial-optimization-problems/clique/the-maximum-clique-problem.md#box-6-mcpP-ex1)).

### Formulations { #sez-sec-cat-mcp-formulations }

- The model $\ILP_{\MCP}$ has one binary variable per vertex and one constraint $x_u+x_v\le1$ per non-edge ([Ch. 12](../formulations/clique-formulations/an-ilp-model-for-the-maximum-clique-problem-the-edge-formula.md#eq-mcpF-ILP)).

- $x_v=\frac12$ for all vertices is feasible, so $z(\LP_{\MCP})\ge n/2$: the LP bound can be arbitrarily weak ([Ch. 12](../formulations/clique-formulations/an-ilp-model-for-the-maximum-clique-problem-the-edge-formula.md#box-7-mcpF-prop-gap)).

- Clique inequalities on the stable sets of $G$ strengthen the model, and the dual of their relaxation is a VCP relaxation: $\omega(G)\le z(\LP^{\mathrm{CL}}_{\MCP})\le\chi(G)$ ([Ch. 12](../formulations/clique-formulations/an-ilp-model-for-the-maximum-clique-problem-the-edge-formula.md#box-11-mcpF-prop-dual)).

### Approximation { #sez-sec-cat-mcp-approximation }

- Not approximable: for every $\varepsilon>0$ no polynomial algorithm guarantees a ratio within $n^{1-\varepsilon}$, unless $P=NP$ (Zuckerman) ([Ch. 38](../approximation-algorithms/clique-inapproximability.md#box-4-cli-thmHZ)).

- Special cases: planar graphs and graphs of bounded degree, solved exactly by enumeration ([Ch. 38](../approximation-algorithms/clique-inapproximability.md#box-6-cli-propdeg)).
