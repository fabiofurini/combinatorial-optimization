---
title: "Graphs"
---

# Graphs

<div class="info-capitolo" markdown>

**Catalogue of combinatorial problems** · [:material-file-pdf-box: Catalogue (PDF)](../pdf/combinatorial-problem-catalogue.pdf)

</div>

<a id="sec:cat-pagina-graphs"></a>

## 3-colorability (3-COL) { #sez-sec-cat-def-3col }

<a id="box-1-def-catdef-3col"></a>

!!! definizione "Definition 1: 3-colorability"

    Given a graph $G=(V,E)$, decide whether $\chi(G)\le 3$.

- Defined in [Chapter 33 «Limits of approximation: vertex coloring»](../approximation-algorithms/coloring-approximation.md#box-4-prop-VCP43).

## Maximum stable set problem (MSSP) { #sez-sec-cat-def-mssp }

<a id="box-2-def-catdef-mssp"></a>

!!! definizione "Definition 2: Maximum stable set problem"

    Let $G=(V,E)$ be a graph.

    1. A <strong>stable set</strong> (also called <strong>independent set</strong>) is a subset $Q \subseteq V$ of pairwise non-adjacent vertices: $\{u,v\} \notin E$ for all $u,v \in Q$ with $u \neq v$.

    2. The <strong>Maximum Stable Set Problem</strong> (MSSP) asks to find a stable set of $G$ whose number of vertices is maximum. Its optimal value is the <strong>stability number</strong> $\alpha(G)$.

<strong>Assumptions</strong>

- We consider nontrivial instances: the graph has at least one edge and at least one non-edge. Formally:

    $$
    1 \le m < \binom{n}{2}.
    $$

- The assumption can be made without loss of generality: if the graph has no edge, every single vertex is a maximum clique and $\omega(G)=1$; if the graph is complete, $V$ itself is a clique and $\omega(G)=n$.

- Defined in [Chapter 5 «The maximum clique problem»](../combinatorial-optimization-problems/clique.md#box-3-mcpP-def-MSSP).

## Vertex-weighted maximum clique problem (VWMCP) { #sez-sec-cat-def-vwmcp }

<a id="box-3-def-catdef-vwmcp"></a>

!!! definizione "Definition 3: Vertex-weighted maximum clique problem"

    1. Given a graph $G$ and a vertex-weight vector $\vet{w}$, the <strong>vertex-weighted maximum clique problem</strong> asks to find a clique $K$ of $G$ with maximum total vertex weight $w(K)$.

    2. Given a graph $G$ and an edge-weight vector $\vet{r}$, the <strong>edge-weighted maximum clique problem</strong> asks to find a clique $K$ of $G$ with maximum total edge weight $r(K)$.

- Defined in [Chapter 5 «The maximum clique problem»](../combinatorial-optimization-problems/clique.md#box-12-mcpP-def-weighted).

## Edge-weighted maximum clique problem (EWMCP) { #sez-sec-cat-def-ewmcp }

<a id="box-4-def-catdef-ewmcp"></a>

!!! definizione "Definition 4: Edge-weighted maximum clique problem"

    1. Given a graph $G$ and a vertex-weight vector $\vet{w}$, the <strong>vertex-weighted maximum clique problem</strong> asks to find a clique $K$ of $G$ with maximum total vertex weight $w(K)$.

    2. Given a graph $G$ and an edge-weight vector $\vet{r}$, the <strong>edge-weighted maximum clique problem</strong> asks to find a clique $K$ of $G$ with maximum total edge weight $r(K)$.

- Defined in [Chapter 5 «The maximum clique problem»](../combinatorial-optimization-problems/clique.md#box-12-mcpP-def-weighted).
