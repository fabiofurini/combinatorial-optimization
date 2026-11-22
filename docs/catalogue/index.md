---
title: Catalogue
---

# Catalogue of combinatorial problems

All the problems of the course, by family: the name leads to the definition, the labels to the chapters that treat it.

[:material-file-pdf-box: Catalogue (PDF)](../pdf/combinatorial-problem-catalogue.pdf){ .md-button } [:material-table: The problems at a glance](../combinatorial-optimization-problems/problems.md){ .md-button }

<nav class="cat-famiglie" markdown>

[:material-bag-personal-outline: Knapsack problems](#knapsack-problems) [:material-package-variant-closed: Packing problems](#packing-problems) [:material-palette-outline: Coloring problems](#coloring-problems) [:material-graph-outline: Clique problems](#clique-problems) [:material-routes: Routing problems](#routing-problems) [:material-chart-gantt: Scheduling problems](#scheduling-problems) [:material-factory: Lot sizing problems](#lot-sizing-problems) [:material-shape-outline: Miscellaneous problems](#miscellaneous-problems)

</nav>

## :material-bag-personal-outline: Knapsack problems { #knapsack-problems }

<p class="cat-famiglia-riga">Select a subset or a multiset of items of maximum total profit subject to capacity constraints.</p>

<div class="cat-voce" id="knapsack-problem" markdown>

[**0/1 knapsack problem (KP)**](../combinatorial-optimization-problems/knapsack/the-0-1-knapsack-problem.md#box-1-defKP) — Choose a subset of items of maximum total profit whose total weight does not exceed the capacity $c$.

<span class="cat-rimandi"><span class="cat-tag" title="Ch. 9">[:material-sigma: Formulations](../formulations/knapsack-formulations/index.md)</span> <span class="cat-tag" title="Ch. 16">[:material-source-branch: Ad hoc algorithms](../specialized-algorithms/knapsack-branch-and-bound.md)</span> <span class="cat-tag" title="0/1 knapsack problem">[:material-table-large: Dynamic programming](https://fabiofurini.github.io/dynamic-programming/dp-knapsack/)</span> <span class="cat-tag">:material-map-marker-path: Heuristics: [Constructive](https://fabiofurini.github.io/heuristic-algorithms/constructive-heuristics/the-0-1-knapsack-problem-which-order/#sez-sec-KP) · [Local search](https://fabiofurini.github.io/heuristic-algorithms/local-search/kp-feasibility-and-penalties/#sez-sec-kp) · [Metaheuristics](https://fabiofurini.github.io/heuristic-algorithms/metaheuristics/how-to-escape-from-a-local-optimum/#sez-sec-sa-kp)</span> <span class="cat-tag" title="MIP heuristics for the classical problems">[:material-rocket-launch-outline: MIP heuristics](https://fabiofurini.github.io/heuristic-algorithms/mip-heuristics-classical/#eq-eq-kp)</span> <span class="cat-tag" title="Knapsack problem">[:material-approximately-equal: Approximation](https://fabiofurini.github.io/approximation-algorithms/knapsack-approximation/)</span> <span class="cat-tag">:material-pencil: Exercises: [Ch. 2](../exercises/knapsack.md) · [Ch. 9](../exercises/knapsack-formulations.md) · [Ch. 16](../exercises/knapsack-branch-and-bound.md)</span></span>

</div>

<div class="cat-voce" id="subset-sum-problem" markdown>

[**Subset sum problem (SSP)**](../combinatorial-optimization-problems/knapsack/the-subset-sum-problem.md#box-4-defSSP) — Decide whether a subset of the items has total weight exactly equal to $c$.

<span class="cat-rimandi"><span class="cat-tag" title="Ch. 9">[:material-sigma: Formulations](../formulations/knapsack-formulations/an-ilp-model-for-the-subset-sum-problem.md#sez-sec-kpf-SSP)</span> <span class="cat-tag" title="Subset sum problem">[:material-table-large: Dynamic programming](https://fabiofurini.github.io/dynamic-programming/dp-subset-sum/)</span> <span class="cat-tag">:material-pencil: Exercises: [Ch. 2](../exercises/knapsack.md#esercizio-2-2) · [Ch. 9](../exercises/knapsack-formulations.md#esercizio-9-6)</span></span>

</div>

<div class="cat-voce" id="bounded-knapsack-problem" markdown>

[**Bounded knapsack problem (BKP)**](../combinatorial-optimization-problems/knapsack/the-bounded-knapsack-problem.md#box-6-defBKP) — Choose how many copies of each item to take, at most $b_j$ of item $j$, with maximum total profit within the capacity.

<span class="cat-rimandi"><span class="cat-tag" title="Ch. 9">[:material-sigma: Formulations](../formulations/knapsack-formulations/an-ilp-model-for-the-bounded-knapsack-problem.md#sez-sec-kpf-BKP)</span> <span class="cat-tag" title="Bounded knapsack problem">[:material-table-large: Dynamic programming](https://fabiofurini.github.io/dynamic-programming/dp-bounded-knapsack/)</span> <span class="cat-tag">:material-pencil: Exercises: [Ch. 2](../exercises/knapsack.md#esercizio-2-3) · [Ch. 9](../exercises/knapsack-formulations.md#esercizio-9-7)</span></span>

</div>

<div class="cat-voce" id="unbounded-knapsack-problem" markdown>

[**Unbounded knapsack problem (UKP)**](../combinatorial-optimization-problems/knapsack/the-unbounded-knapsack-problem.md#box-8-defUKP) — Choose how many copies of each item to take, with no upper bound, with maximum total profit within the capacity.

<span class="cat-rimandi"><span class="cat-tag" title="Ch. 9">[:material-sigma: Formulations](../formulations/knapsack-formulations/an-ilp-model-for-the-unbounded-knapsack-problem.md#sez-sec-kpf-UKP)</span> <span class="cat-tag">:material-table-large: Dynamic programming: [Unbounded knapsack problem](https://fabiofurini.github.io/dynamic-programming/dp-unbounded-knapsack/) · [Coin change problem](https://fabiofurini.github.io/dynamic-programming/dp-coin-change/) · [Rod cutting problem](https://fabiofurini.github.io/dynamic-programming/dp-rod-cutting/)</span> <span class="cat-tag">:material-pencil: Exercises: [Ch. 2](../exercises/knapsack.md#esercizio-2-3) · [Ch. 9](../exercises/knapsack-formulations.md#esercizio-9-8)</span></span>

</div>

<div class="cat-voce" id="multidimensional-knapsack-problem" markdown>

[**Multidimensional knapsack problem (MDKP)**](../combinatorial-optimization-problems/knapsack/the-multidimensional-knapsack-problem.md#box-10-defMDKP) — Choose items of maximum total profit that respect $k$ capacity constraints, one for each resource.

<span class="cat-rimandi"><span class="cat-tag" title="Ch. 9">[:material-sigma: Formulations](../formulations/knapsack-formulations/an-ilp-model-for-the-multidimensional-knapsack-problem.md#sez-sec-kpf-MDKP)</span> <span class="cat-tag" title="Multidimensional knapsack problem">[:material-table-large: Dynamic programming](https://fabiofurini.github.io/dynamic-programming/dp-multidimensional-knapsack/)</span> <span class="cat-tag" title="Ch. 9">[:material-pencil: Exercises](../exercises/knapsack-formulations.md#esercizio-9-9)</span></span>

</div>

<div class="cat-voce" id="multiple-knapsack-problem" markdown>

[**Multiple knapsack problem (MKP)**](../combinatorial-optimization-problems/knapsack/the-multiple-knapsack-problem.md#box-12-defMKP) — Assign items to $m$ knapsacks, each with its own capacity, so that the total profit of the assigned items is maximum.

<span class="cat-rimandi"><span class="cat-tag" title="Ch. 9">[:material-sigma: Formulations](../formulations/knapsack-formulations/an-ilp-model-for-the-multiple-knapsack-problem.md#sez-sec-kpf-MKP)</span> <span class="cat-tag" title="Multiple knapsack problem">[:material-table-large: Dynamic programming](https://fabiofurini.github.io/dynamic-programming/dp-multiple-knapsack/)</span> <span class="cat-tag">:material-pencil: Exercises: [Ch. 2](../exercises/knapsack.md#esercizio-2-4) · [Ch. 9](../exercises/knapsack-formulations.md#esercizio-9-10)</span></span>

</div>

<div class="cat-voce" id="multiple-choice-knapsack-problem" markdown>

[**Multiple-choice knapsack problem (MCKP)**](../combinatorial-optimization-problems/knapsack/the-multiple-choice-knapsack-problem.md#box-14-defMCKP) — Choose exactly one item from each class, with maximum total profit within the capacity.

<span class="cat-rimandi"><span class="cat-tag" title="Ch. 9">[:material-sigma: Formulations](../formulations/knapsack-formulations/an-ilp-model-for-the-multiple-choice-knapsack-problem.md#sez-sec-kpf-MCKP)</span> <span class="cat-tag" title="Multiple-choice knapsack problem">[:material-table-large: Dynamic programming](https://fabiofurini.github.io/dynamic-programming/dp-multiple-choice-knapsack/)</span> <span class="cat-tag">:material-pencil: Exercises: [Ch. 2](../exercises/knapsack.md#esercizio-2-5) · [Ch. 9](../exercises/knapsack-formulations.md#esercizio-9-11)</span></span>

</div>

<div class="cat-voce" id="knapsack-problem-with-setups" markdown>

[**Knapsack problem with setups (KPS)**](../combinatorial-optimization-problems/knapsack/the-knapsack-problem-with-setups.md#box-16-defKPS) — Choose items grouped in classes, where the first item of a class pays a setup cost and a setup weight, with maximum net profit within the capacity.

<span class="cat-rimandi"><span class="cat-tag" title="Ch. 9">[:material-sigma: Formulations](../formulations/knapsack-formulations/an-ilp-model-for-the-knapsack-problem-with-setups.md#sez-sec-kpf-KPS)</span> <span class="cat-tag" title="Knapsack problem with setups">[:material-table-large: Dynamic programming](https://fabiofurini.github.io/dynamic-programming/dp-knapsack-setups/)</span> <span class="cat-tag" title="Ch. 9">[:material-pencil: Exercises](../exercises/knapsack-formulations.md#esercizio-9-12)</span></span>

</div>

## :material-package-variant-closed: Packing problems { #packing-problems }

<p class="cat-famiglia-riga">Pack items into the minimum number of bins of equal capacity.</p>

<div class="cat-voce" id="bin-packing-problem" markdown>

[**Bin packing problem (BPP)**](../combinatorial-optimization-problems/bin-packing/the-bin-packing-problem.md#box-1-defBPP) — Pack items of weights $w_j$ into the minimum number of bins of capacity $c$.

<span class="cat-rimandi"><span class="cat-tag" title="Ch. 10">[:material-sigma: Formulations](../formulations/bin-packing-formulations/index.md)</span> <span class="cat-tag">:material-map-marker-path: Heuristics: [Constructive](https://fabiofurini.github.io/heuristic-algorithms/constructive-heuristics/the-bin-packing-problem-first-sort-then-pack/#sez-sec-BPP) · [Local search](https://fabiofurini.github.io/heuristic-algorithms/local-search/local-search-the-scheme/#342-bpp-move-and-swap) · [Metaheuristics](https://fabiofurini.github.io/heuristic-algorithms/metaheuristics/large-neighbourhood-search/#sez-sec-lns-bpp)</span> <span class="cat-tag" title="MIP heuristics for the classical problems">[:material-rocket-launch-outline: MIP heuristics](https://fabiofurini.github.io/heuristic-algorithms/mip-heuristics-classical/#eq-eq-bpp)</span> <span class="cat-tag" title="Bin packing">[:material-approximately-equal: Approximation](https://fabiofurini.github.io/approximation-algorithms/bin-packing-approximation/)</span> <span class="cat-tag">:material-pencil: Exercises: [Ch. 3](../exercises/bin-packing.md) · [Ch. 7](../exercises/pcmax.md#esercizio-7-5) · [Ch. 10](../exercises/bin-packing-formulations.md)</span></span>

</div>

<div class="cat-voce" id="cutting-stock-problem" markdown>

[**Cutting stock problem (CSP)**](../combinatorial-optimization-problems/bin-packing/the-cutting-stock-problem.md#box-4-defCSP) — Pack $d_j$ copies of every item type $j$ into the minimum number of bins of capacity $c$.

<span class="cat-rimandi"><span class="cat-tag" title="Ch. 10">[:material-sigma: Formulations](../formulations/bin-packing-formulations/an-ilp-model-for-the-cutting-stock-problem.md#sez-sec-bpf-CSP)</span> <span class="cat-tag">:material-pencil: Exercises: [Ch. 3](../exercises/bin-packing.md#esercizio-3-4) · [Ch. 10](../exercises/bin-packing-formulations.md#esercizio-10-6)</span></span>

</div>

## :material-palette-outline: Coloring problems { #coloring-problems }

<p class="cat-famiglia-riga">Color the vertices of a graph with the minimum number of colors.</p>

<div class="cat-voce" id="vertex-coloring-problem" markdown>

[**Vertex coloring problem (VCP)**](../combinatorial-optimization-problems/coloring/the-vertex-coloring-problem.md#box-3-defVCP) — Color the vertices of a graph, with different colors on adjacent vertices, using the minimum number of colors.

<span class="cat-rimandi"><span class="cat-tag" title="Ch. 11">[:material-sigma: Formulations](../formulations/coloring-formulations/index.md)</span> <span class="cat-tag" title="Ch. 17">[:material-source-branch: Ad hoc algorithms](../specialized-algorithms/dsatur-branch-and-bound.md)</span> <span class="cat-tag" title="Constructive">[:material-map-marker-path: Heuristics](https://fabiofurini.github.io/heuristic-algorithms/constructive-heuristics/vertex-coloring-greedy-and-dsatur/#sez-sec-VCPgreedy)</span> <span class="cat-tag" title="Vertex coloring: limits of approximation">[:material-approximately-equal: Limits of approximation](https://fabiofurini.github.io/approximation-algorithms/coloring-inapproximability/)</span> <span class="cat-tag">:material-pencil: Exercises: [Ch. 4](../exercises/coloring.md) · [Ch. 11](../exercises/coloring-formulations.md) · [Ch. 17](../exercises/dsatur-branch-and-bound.md)</span></span>

</div>

## :material-graph-outline: Clique problems { #clique-problems }

<p class="cat-famiglia-riga">Find a set of pairwise adjacent vertices of maximum cardinality or weight.</p>

<div class="cat-voce" id="maximum-clique-problem" markdown>

[**Maximum clique problem (MCP)**](../combinatorial-optimization-problems/clique/the-maximum-clique-problem.md#box-2-mcpP-def-MCP) — Find a clique of a graph, a set of pairwise adjacent vertices, of maximum cardinality.

<span class="cat-rimandi"><span class="cat-tag" title="Ch. 12">[:material-sigma: Formulations](../formulations/clique-formulations/an-ilp-model-for-the-maximum-clique-problem-the-edge-formula.md#sez-sec-mcpf-MCP)</span> <span class="cat-tag" title="Maximum clique: limits of approximation">[:material-approximately-equal: Limits of approximation](https://fabiofurini.github.io/approximation-algorithms/clique-inapproximability/)</span> <span class="cat-tag">:material-pencil: Exercises: [Ch. 4](../exercises/coloring.md) · [Ch. 5](../exercises/clique.md) · [Ch. 12](../exercises/clique-formulations.md)</span></span>

</div>

<div class="cat-voce" id="maximum-stable-set-problem" markdown>

[**Maximum stable set problem (MSSP)**](../combinatorial-optimization-problems/clique/the-maximum-clique-problem.md#box-3-mcpP-def-MSSP) — Find a stable set of a graph, a set of pairwise non-adjacent vertices, of maximum cardinality.

<span class="cat-rimandi"><span class="cat-tag" title="Ch. 12">[:material-sigma: Formulations](../formulations/clique-formulations/an-ilp-model-for-the-maximum-clique-problem-the-edge-formula.md#sez-sec-mcpf-MSSP)</span> <span class="cat-tag" title="Maximum clique: limits of approximation">[:material-approximately-equal: Limits of approximation](https://fabiofurini.github.io/approximation-algorithms/clique-inapproximability/#box-7-cli-cormssp)</span> <span class="cat-tag">:material-pencil: Exercises: [Ch. 4](../exercises/coloring.md#esercizio-4-3) · [Ch. 5](../exercises/clique.md) · [Ch. 12](../exercises/clique-formulations.md#esercizio-12-6)</span></span>

</div>

<div class="cat-voce" id="vertex-weighted-maximum-clique-problem" markdown>

[**Vertex-weighted maximum clique problem (VWMCP)**](../combinatorial-optimization-problems/clique/weighted-variants.md#box-12-mcpP-def-weighted) — Find a clique of maximum total vertex weight.

<span class="cat-rimandi"><span class="cat-tag" title="Ch. 12">[:material-sigma: Formulations](../formulations/clique-formulations/ilp-models-for-the-weighted-variants.md#eq-mcpF-VW)</span> <span class="cat-tag">:material-pencil: Exercises: [Ch. 5](../exercises/clique.md#esercizio-5-5) · [Ch. 12](../exercises/clique-formulations.md#esercizio-12-7)</span></span>

</div>

<div class="cat-voce" id="edge-weighted-maximum-clique-problem" markdown>

[**Edge-weighted maximum clique problem (EWMCP)**](../combinatorial-optimization-problems/clique/weighted-variants.md#box-12-mcpP-def-weighted) — Find a clique of maximum total weight of the edges with both endpoints in it.

<span class="cat-rimandi"><span class="cat-tag" title="Ch. 12">[:material-sigma: Formulations](../formulations/clique-formulations/ilp-models-for-the-weighted-variants.md#eq-mcpF-EW)</span> <span class="cat-tag" title="Ch. 12">[:material-pencil: Exercises](../exercises/clique-formulations.md#esercizio-12-8)</span></span>

</div>

## :material-routes: Routing problems { #routing-problems }

<p class="cat-famiglia-riga">Find a shortest tour that visits every city exactly once.</p>

<div class="cat-voce" id="travelling-salesman-problem" markdown>

[**Travelling salesman problem (TSP)**](../combinatorial-optimization-problems/tsp/the-travelling-salesman-problem.md#box-1-defTSP) — Find a tour that visits every city exactly once and returns to the first one, of minimum total distance.

<span class="cat-rimandi"><span class="cat-tag" title="Ch. 13">[:material-sigma: Formulations](../formulations/tsp-formulations/index.md)</span> <span class="cat-tag">:material-map-marker-path: Heuristics: [Constructive](https://fabiofurini.github.io/heuristic-algorithms/constructive-heuristics/the-travelling-salesman-problem-append-or-insert/#sez-sec-TSP) · [Local search](https://fabiofurini.github.io/heuristic-algorithms/local-search/tsp-2-opt-and-or-opt/#sez-sec-tsp) · [Metaheuristics](https://fabiofurini.github.io/heuristic-algorithms/metaheuristics/the-problems-and-the-assumptions/#sez-sec-instances)</span> <span class="cat-tag" title="MIP heuristics for the classical problems">[:material-rocket-launch-outline: MIP heuristics](https://fabiofurini.github.io/heuristic-algorithms/mip-heuristics-classical/#523-the-travelling-salesman-problem)</span> <span class="cat-tag" title="The TSP: the general case and the metric case">[:material-approximately-equal: Approximation](https://fabiofurini.github.io/approximation-algorithms/tsp-approximation/#sez-sec-DT)</span> <span class="cat-tag">:material-pencil: Exercises: [Ch. 6](../exercises/tsp.md) · [Ch. 13](../exercises/tsp-formulations.md)</span></span>

</div>

<div class="cat-voce" id="metric-travelling-salesman-problem" markdown>

[**Metric travelling salesman problem (metric TSP)**](../combinatorial-optimization-problems/tsp/variants-metric-and-asymmetric-tsp.md#box-8-defMetricTSP) — The TSP with distances that satisfy the triangle inequality $d_{ij} \le d_{ik} + d_{kj}$.

<span class="cat-rimandi"><span class="cat-tag" title="Ch. 13">[:material-sigma: Formulations](../formulations/tsp-formulations/ilp-models-for-the-metric-and-asymmetric-tsp.md#sez-sec-tspf-variants)</span> <span class="cat-tag" title="Constructive">[:material-map-marker-path: Heuristics](https://fabiofurini.github.io/heuristic-algorithms/constructive-heuristics/the-travelling-salesman-problem-append-or-insert/#sez-sec-INS)</span> <span class="cat-tag" title="The TSP: the general case and the metric case">[:material-approximately-equal: Approximation](https://fabiofurini.github.io/approximation-algorithms/tsp-approximation/#box-2-def-metricTSP)</span> <span class="cat-tag" title="Ch. 6">[:material-pencil: Exercises](../exercises/tsp.md#esercizio-6-4)</span></span>

</div>

<div class="cat-voce" id="asymmetric-travelling-salesman-problem" markdown>

[**Asymmetric travelling salesman problem (ATSP)**](../combinatorial-optimization-problems/tsp/variants-metric-and-asymmetric-tsp.md#sez-sec-tsp-variants) — The TSP with distances that may differ in the two directions, $d_{ij} \ne d_{ji}$.

<span class="cat-rimandi"><span class="cat-tag" title="Ch. 13">[:material-sigma: Formulations](../formulations/tsp-formulations/ilp-models-for-the-metric-and-asymmetric-tsp.md#eq-ILP-ATSP)</span> <span class="cat-tag">:material-pencil: Exercises: [Ch. 6](../exercises/tsp.md#esercizio-6-5) · [Ch. 13](../exercises/tsp-formulations.md#esercizio-13-6)</span></span>

</div>

<div class="cat-voce" id="hamiltonian-cycle-problem" markdown>

[**Hamiltonian cycle problem (HCP)**](hamiltonian-cycle-problem.md) — Decide whether a graph has a cycle through all its vertices.

<span class="cat-rimandi"><span class="cat-tag" title="The TSP: the general case and the metric case">[:material-approximately-equal: Approximation](https://fabiofurini.github.io/approximation-algorithms/tsp-approximation/#box-1-prop-TSPinapx)</span></span>

</div>

## :material-chart-gantt: Scheduling problems { #scheduling-problems }

<p class="cat-famiglia-riga">Assign jobs to parallel machines so as to minimize the makespan.</p>

<div class="cat-voce" id="scheduling-on-identical-parallel-machines" markdown>

[**Scheduling on identical parallel machines (P||Cmax)**](../combinatorial-optimization-problems/pcmax/scheduling-on-identical-parallel-machines.md#box-1-defPCmax) — Assign jobs to $m$ identical parallel machines so that the makespan, the largest load of a machine, is minimum.

<span class="cat-rimandi"><span class="cat-tag" title="Ch. 14">[:material-sigma: Formulations](../formulations/pcmax-formulations/index.md)</span> <span class="cat-tag">:material-map-marker-path: Heuristics: [Constructive](https://fabiofurini.github.io/heuristic-algorithms/constructive-heuristics/scheduling-on-parallel-machines-longest-jobs-first/#sez-sec-PCM) · [Local search](https://fabiofurini.github.io/heuristic-algorithms/local-search/p-cmax-move-and-swap/#sez-sec-pcmax) · [Metaheuristics](https://fabiofurini.github.io/heuristic-algorithms/metaheuristics/tabu-search/#sez-sec-ts)</span> <span class="cat-tag" title="MIP heuristics for the classical problems">[:material-rocket-launch-outline: MIP heuristics](https://fabiofurini.github.io/heuristic-algorithms/mip-heuristics-classical/#eq-eq-pcm)</span> <span class="cat-tag" title="Approximation for $P\|C_{\max}$">[:material-approximately-equal: Approximation](https://fabiofurini.github.io/approximation-algorithms/pcmax-approximation/#sez-sec-LIST)</span> <span class="cat-tag">:material-pencil: Exercises: [Ch. 7](../exercises/pcmax.md) · [Ch. 14](../exercises/pcmax-formulations.md)</span></span>

</div>

<div class="cat-voce" id="scheduling-on-a-fixed-number-of-identical-machines" markdown>

[**Scheduling on a fixed number of identical machines (Pm||Cmax)**](scheduling-on-a-fixed-number-of-identical-machines.md) — The problem $P\,||\,C_{\max}$ with a fixed number $m$ of machines, for example $m=2$.

<span class="cat-rimandi"><span class="cat-tag" title="Principles of dynamic programming">[:material-table-large: Dynamic programming](https://fabiofurini.github.io/dynamic-programming/dp-principles/)</span></span>

</div>

<div class="cat-voce" id="scheduling-on-parallel-machines-with-different-speeds" markdown>

[**Scheduling on parallel machines with different speeds (Q||Cmax)**](../combinatorial-optimization-problems/pcmax/index.md#sez-sec-threefield) — Assign jobs to parallel machines with different speeds so that the makespan is minimum.

</div>

<div class="cat-voce" id="scheduling-on-unrelated-parallel-machines" markdown>

[**Scheduling on unrelated parallel machines (R||Cmax)**](../combinatorial-optimization-problems/pcmax/index.md#sez-sec-threefield) — Assign jobs to unrelated parallel machines, where the processing time of a job depends on the machine, so that the makespan is minimum.

</div>

## :material-factory: Lot sizing problems { #lot-sizing-problems }

<p class="cat-famiglia-riga">Plan the production over a horizon of periods at minimum cost.</p>

<div class="cat-voce" id="capacitated-lot-sizing" markdown>

[**Capacitated lot sizing (CLS)**](../combinatorial-optimization-problems/lot-sizing/the-capacitated-lot-sizing-problem.md#box-1-defCLS) — Fix the production of every period within its capacity, so that every demand is satisfied at minimum total cost of setups, production and holding.

<span class="cat-rimandi"><span class="cat-tag" title="Ch. 15">[:material-sigma: Formulations](../formulations/lot-sizing-formulations/index.md)</span> <span class="cat-tag" title="Capacitated lot sizing problem">[:material-table-large: Dynamic programming](https://fabiofurini.github.io/dynamic-programming/dp-capacitated-lot-sizing/)</span> <span class="cat-tag" title="MIP heuristics for the classical problems">[:material-rocket-launch-outline: MIP heuristics](https://fabiofurini.github.io/heuristic-algorithms/mip-heuristics-classical/#sez-sec-rf)</span> <span class="cat-tag">:material-pencil: Exercises: [Ch. 8](../exercises/lot-sizing.md) · [Ch. 15](../exercises/lot-sizing-formulations.md)</span></span>

</div>

<div class="cat-voce" id="uncapacitated-lot-sizing-problem" markdown>

[**Uncapacitated lot sizing problem (ULS)**](../combinatorial-optimization-problems/lot-sizing/variants.md#box-7-defULS) — The lot sizing problem without capacities: fix the production of every period at minimum total cost.

<span class="cat-rimandi"><span class="cat-tag" title="Ch. 15">[:material-sigma: Formulations](../formulations/lot-sizing-formulations/ilp-models-for-the-capacitated-lot-sizing-problem.md#sez-sec-lsf-compare)</span> <span class="cat-tag" title="Uncapacitated lot sizing problem">[:material-table-large: Dynamic programming](https://fabiofurini.github.io/dynamic-programming/dp-lot-sizing/#box-3-thmZIO)</span> <span class="cat-tag" title="MIP heuristics for the classical problems">[:material-rocket-launch-outline: MIP heuristics](https://fabiofurini.github.io/heuristic-algorithms/mip-heuristics-classical/#box-16-ex-rfcourse)</span> <span class="cat-tag">:material-pencil: Exercises: [Ch. 8](../exercises/lot-sizing.md#esercizio-8-4) · [Ch. 15](../exercises/lot-sizing-formulations.md#esercizio-15-6)</span></span>

</div>

<div class="cat-voce" id="capacitated-lot-sizing-with-constant-capacity" markdown>

[**Capacitated lot sizing with constant capacity (CLS-C)**](https://fabiofurini.github.io/dynamic-programming/dp-capacitated-lot-sizing/#1123-the-case-of-constant-capacity) — The CLS with the same capacity $C$ in all periods.

<span class="cat-rimandi"><span class="cat-tag" title="Capacitated lot sizing problem">[:material-table-large: Dynamic programming](https://fabiofurini.github.io/dynamic-programming/dp-capacitated-lot-sizing/#1123-the-case-of-constant-capacity)</span></span>

</div>

<div class="cat-voce" id="lot-sizing-with-several-products-and-setup-times" markdown>

[**Lot sizing with several products and setup times (MLS)**](../combinatorial-optimization-problems/lot-sizing/variants.md#box-8-defMLS) — Lot sizing of several products that share the capacity of each period, with setup times.

<span class="cat-rimandi"><span class="cat-tag" title="Ch. 15">[:material-sigma: Formulations](../formulations/lot-sizing-formulations/ilp-models-for-the-variants.md#eq-CLSPm-bigM)</span> <span class="cat-tag" title="Ch. 15">[:material-pencil: Exercises](../exercises/lot-sizing-formulations.md#esercizio-15-7)</span></span>

</div>

<div class="cat-voce" id="lot-sizing-with-initial-stock" markdown>

[**Lot sizing with initial stock (LS-SI)**](../combinatorial-optimization-problems/lot-sizing/variants.md#sez-sec-ls-variants) — Lot sizing in which the initial stock of each product is a decision, bought at a unit cost.

<span class="cat-rimandi"><span class="cat-tag" title="Ch. 15">[:material-sigma: Formulations](../formulations/lot-sizing-formulations/ilp-models-for-the-variants.md#eq-CLSP-bigM)</span></span>

</div>

<div class="cat-voce" id="lot-sizing-with-overtime" markdown>

[**Lot sizing with overtime (LS-OT)**](../combinatorial-optimization-problems/lot-sizing/variants.md#sez-sec-ls-variants) — Lot sizing with a normal and an overtime capacity, at different unit costs.

<span class="cat-rimandi"><span class="cat-tag" title="Ch. 15">[:material-sigma: Formulations](../formulations/lot-sizing-formulations/ilp-models-for-the-variants.md#eq-CLSPo-bigM)</span> <span class="cat-tag" title="Ch. 15">[:material-pencil: Exercises](../exercises/lot-sizing-formulations.md#esercizio-15-8)</span></span>

</div>

<div class="cat-voce" id="lot-sizing-with-unsatisfied-demand" markdown>

[**Lot sizing with unsatisfied demand (LS-UD)**](../combinatorial-optimization-problems/lot-sizing/variants.md#sez-sec-ls-variants) — Lot sizing in which a part of the demand may be left unsatisfied, at a penalty per unit.

<span class="cat-rimandi"><span class="cat-tag" title="Ch. 15">[:material-sigma: Formulations](../formulations/lot-sizing-formulations/ilp-models-for-the-variants.md#eq-CLSPu-bigM)</span> <span class="cat-tag" title="Ch. 15">[:material-pencil: Exercises](../exercises/lot-sizing-formulations.md#esercizio-15-9)</span></span>

</div>

## :material-shape-outline: Miscellaneous problems { #miscellaneous-problems }

<p class="cat-famiglia-riga">Problems with an exact total length or amount, solved by dynamic programming.</p>

<div class="cat-voce" id="rod-cutting-problem" markdown>

[**Rod cutting problem (RCP)**](rod-cutting-problem.md) — Cut a rod of length $n$ into pieces of integer lengths with given profits, so that the total profit is maximum.

<span class="cat-rimandi"><span class="cat-tag" title="Rod cutting problem">[:material-table-large: Dynamic programming](https://fabiofurini.github.io/dynamic-programming/dp-rod-cutting/)</span></span>

</div>

<div class="cat-voce" id="coin-change-problem" markdown>

[**Coin change problem (CCP)**](coin-change-problem.md) — Return the amount $c$ exactly with the minimum number of coins of given denominations.

<span class="cat-rimandi"><span class="cat-tag" title="Coin change problem">[:material-table-large: Dynamic programming](https://fabiofurini.github.io/dynamic-programming/dp-coin-change/)</span></span>

</div>
