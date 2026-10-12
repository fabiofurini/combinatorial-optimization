---
title: "Metric travelling salesman problem (metric TSP)"
---

# Metric travelling salesman problem (metric TSP)

<div class="info-capitolo" markdown>

[:material-view-list: **Catalogue of combinatorial problems**](index.md) · [:material-folder-outline: Routing problems](routing-problems.md) · [:material-file-pdf-box: Catalogue (PDF)](../pdf/combinatorial-problem-catalogue.pdf)

</div>

<a id="sec:cat-pagina-metric-travelling-salesman-problem"></a>

<a id="box-1-def-catdef-metrictsp"></a>

!!! definizione "Definition 1: Metric travelling salesman problem"

    A TSP instance is <strong>metric</strong> if its distances satisfy the <strong>triangle inequality</strong>

    $$
    d_{ij} \le d_{ik} + d_{kj}
    \qquad \text{for all distinct } i,j,k \in \mathscr{V}.
    $$

    The <strong>metric travelling salesman problem</strong> (metric TSP) is the TSP restricted to metric instances.

## What the course does on this problem { #sez-sec-cat-metrictsp-vert }

<div class="tabella" markdown="0"><table>
<tr>
<th><strong>Technique</strong></th>
<th><strong>Where</strong></th>
</tr>
<tr>
<td><strong>Definition</strong></td>
<td><a href="https://fabiofurini.github.io/combinatorial-optimization/combinatorial-optimization-problems/tsp/variants-metric-and-asymmetric-tsp/#box-8-defMetricTSP">Ch. 6 «Routing problems»</a></td>
</tr>
<tr>
<td><strong>Formulations</strong></td>
<td><a href="https://fabiofurini.github.io/combinatorial-optimization/formulations/tsp-formulations/ilp-models-for-the-metric-and-asymmetric-tsp/#sez-sec-tspf-variants">Ch. 13 «Formulations of routing problems»</a></td>
</tr>
<tr>
<td><strong>Heuristics</strong></td>
<td><a href="https://fabiofurini.github.io/combinatorial-optimization/heuristic-algorithms/constructive-heuristics/the-travelling-salesman-problem-append-or-insert/#sez-sec-INS">Ch. 30 «Constructive heuristics»</a></td>
</tr>
<tr>
<td><strong>Approximation</strong></td>
<td><a href="https://fabiofurini.github.io/combinatorial-optimization/approximation-algorithms/tsp-approximation/#box-2-def-metricTSP">Ch. 39 «The TSP: the general case and the metric case»</a></td>
</tr>
<tr>
<td><strong>Exercises</strong></td>
<td><a href="https://fabiofurini.github.io/combinatorial-optimization/exercises/tsp/#esercizio-6-4">Exercise 6.4</a>; <a href="https://fabiofurini.github.io/combinatorial-optimization/exercises/tsp-approximation/">Ch. 39 (2 exercises)</a></td>
</tr>
</table></div>
