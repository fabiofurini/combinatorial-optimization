---
title: "Graphs"
---

# Graphs

<div class="info-capitolo" markdown>

**Catalogue of combinatorial problems** · [:material-file-pdf-box: Catalogue (PDF)](../pdf/combinatorial-problem-catalogue.pdf)

</div>

<a id="sec:cat-pagina-graphs"></a>

## Maximum stable set problem (MSSP) { #sez-sec-cat-def-mssp }

<a id="box-1-def-catdef-mssp"></a>

!!! definizione "Definition 1: Maximum stable set problem"

    Let $G=(V,E)$ be a graph.

    1. A <strong>stable set</strong> (also called <strong>independent set</strong>) is a subset $Q \subseteq V$ of pairwise non-adjacent vertices: $\{u,v\} \notin E$ for all $u,v \in Q$ with $u \neq v$.

    2. The <strong>Maximum Stable Set Problem</strong> (MSSP) asks to find a stable set of $G$ whose number of vertices is maximum. Its optimal value is the <strong>stability number</strong> $\alpha(G)$.

- Defined in [Chapter 5 «The maximum clique problem»](../combinatorial-optimization-problems/clique/index.md#box-3-mcpP-def-MSSP).

## Vertex-weighted maximum clique problem (VWMCP) { #sez-sec-cat-def-vwmcp }

<a id="box-2-def-catdef-vwmcp"></a>

!!! definizione "Definition 2: Vertex-weighted maximum clique problem"

    Given a graph $G$ and a vertex-weight vector $\vet{w} \in \Z_{\ge 1}^n$, the <strong>vertex-weighted maximum clique problem</strong> asks to find a clique $K$ of $G$ with maximum total vertex weight $w(K) = \sum_{v \in K} w_v$.

- Defined in [Chapter 5 «The maximum clique problem»](../combinatorial-optimization-problems/clique/weighted-variants.md#box-12-mcpP-def-weighted).

## Edge-weighted maximum clique problem (EWMCP) { #sez-sec-cat-def-ewmcp }

<a id="box-3-def-catdef-ewmcp"></a>

!!! definizione "Definition 3: Edge-weighted maximum clique problem"

    Given a graph $G$ and an edge-weight vector $\vet{r} \in \Z_{\ge 1}^m$, the <strong>edge-weighted maximum clique problem</strong> asks to find a clique $K$ of $G$ with maximum total edge weight $r(K) = \sum_{\{u,v\} \in E[K]} r_{uv}$, where $E[K]$ is the set of the edges with both endpoints in $K$.

- Defined in [Chapter 5 «The maximum clique problem»](../combinatorial-optimization-problems/clique/weighted-variants.md#box-12-mcpP-def-weighted).
