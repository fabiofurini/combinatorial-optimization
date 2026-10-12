---
title: "Routing"
---

# Routing

<div class="info-capitolo" markdown>

**Catalogue of combinatorial problems** · [:material-file-pdf-box: Catalogue (PDF)](../pdf/combinatorial-problem-catalogue.pdf)

</div>

<a id="sec:cat-pagina-routing"></a>

## Metric travelling salesman problem (metric TSP) { #sez-sec-cat-def-metrictsp }

<a id="box-1-def-catdef-metrictsp"></a>

!!! definizione "Definition 1: Metric travelling salesman problem"

    A TSP instance is <strong>metric</strong> if its distances satisfy the <strong>triangle inequality</strong>

    $$
    d_{ij} \le d_{ik} + d_{kj}
    \qquad \text{for all distinct } i,j,k \in \mathscr{V}.
    $$

- Defined in [Chapter 6 «The travelling salesman problem»](../combinatorial-optimization-problems/tsp/variants-metric-and-asymmetric-tsp.md#box-3-defMetricTSP).

## Asymmetric travelling salesman problem (ATSP) { #sez-sec-cat-def-atsp }

<a id="box-2-def-catdef-atsp"></a>

!!! definizione "Definition 2: Asymmetric travelling salesman problem"

    In the <strong>asymmetric travelling salesman problem</strong> (ATSP) the distances are not required to be symmetric: $d_{ij}$ may differ from $d_{ji}$. The definition of tour and of its length $L(\sigma)$ is unchanged, but a tour and the same tour travelled backwards are different solutions.

- Defined in [Chapter 6 «The travelling salesman problem»](../combinatorial-optimization-problems/tsp/variants-metric-and-asymmetric-tsp.md#62-variants-metric-and-asymmetric-tsp).

## Hamiltonian cycle problem (HCP) { #sez-sec-cat-def-hcp }

<a id="box-3-def-catdef-hcp"></a>

!!! definizione "Definition 3: Hamiltonian cycle problem"

    The <strong>Hamiltonian cycle problem</strong> asks whether a graph $G=(V,E)$ has a cycle through all its vertices.

- Defined in [Chapter 32 «Approximation for the metric TSP»](../approximation-algorithms/tsp-approximation.md#box-11-prop-TSPinapx).
