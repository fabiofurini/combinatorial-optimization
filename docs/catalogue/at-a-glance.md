---
title: "The problems at a glance"
---

# The problems at a glance

<div class="info-capitolo" markdown>

**Catalogue of combinatorial problems** · [:material-file-pdf-box: Catalogue of problems (PDF)](../pdf/combinatorial-problem-catalogue.pdf)

</div>

<a id="sec:cat-sintesi"></a><a id="sec:cat-pagina-at-a-glance"></a>

!!! chiave ""

    The course seen problem by problem: for each problem defined in the course, its definition, the chapters that treat it, its models and bounds, what each technique of the course gives on it, and the instances of the examples and exercises with their optimal value.

## The central problems { #sez-sec-cat-centrali }

<div class="tabella" markdown="0"><table>
<tr>
<th><strong>Problem</strong></th>
<th><strong>Objective</strong></th>
<th><strong>Complexity</strong></th>
<th><strong>Simple bound</strong></th>
<th><strong>Approximation</strong></th>
</tr>
<tr>
<td>[KP](../catalogue/knapsack.md)</td>
<td>max total profit, total weight <span class="arithmatex">\(\le c\)</span></td>
<td>weakly NP-hard, DP in <span class="arithmatex">\(\Theta(nc)\)</span></td>
<td>Dantzig: <span class="arithmatex">\(\UB_{\mathrm{D}} = \sum_{j<s} p_j + \lfloor p_s\,\mathit{rc}/w_s \rfloor\)</span></td>
<td>Ext-Greedy <span class="arithmatex">\(2\)</span>; <span class="arithmatex">\(H^{\ell}\)</span>: <span class="arithmatex">\(\frac{\ell+2}{\ell+1}\)</span>; FPTAS <span class="arithmatex">\(\frac{1}{1-\varepsilon}\)</span></td>
</tr>
<tr>
<td>[BPP](../catalogue/bin-packing.md)</td>
<td>min number of bins</td>
<td>strongly NP-hard</td>
<td><span class="arithmatex">\(\LB = \lceil \sum_j w_j / c \rceil\)</span></td>
<td>NF, WF <span class="arithmatex">\(2\)</span>; FF, BF <span class="arithmatex">\(\frac{17}{10}\)</span>; no ratio <span class="arithmatex">\(<\frac32\)</span></td>
</tr>
<tr>
<td>[VCP](../catalogue/vertex-coloring.md)</td>
<td>min number of colors <span class="arithmatex">\(\chi(G)\)</span></td>
<td>strongly NP-hard</td>
<td><span class="arithmatex">\(\omega(G) \le \chi(G) \le \Delta(G)+1\)</span></td>
<td>no ratio <span class="arithmatex">\(<\frac43\)</span>; greedy <span class="arithmatex">\(GC\)</span> no constant ratio</td>
</tr>
<tr>
<td>[MCP](../catalogue/maximum-clique.md)</td>
<td>max clique size <span class="arithmatex">\(\omega(G)\)</span></td>
<td>NP-hard</td>
<td><span class="arithmatex">\(\omega(G) \le \chi(G)\)</span>, <span class="arithmatex">\(\omega(G) \le \Delta+1\)</span></td>
<td>no <span class="arithmatex">\(n^{1-\varepsilon}\)</span> guarantee (Håstad)</td>
</tr>
<tr>
<td>[TSP](../catalogue/tsp.md)</td>
<td>min tour length <span class="arithmatex">\(L(\sigma)\)</span></td>
<td>strongly NP-hard</td>
<td><span class="arithmatex">\(\lceil \frac12 \sum_i (a_i+b_i) \rceil\)</span>; MST <span class="arithmatex">\(d(T) \le z(I)\)</span></td>
<td>metric: double tree <span class="arithmatex">\(2\)</span>, Christofides <span class="arithmatex">\(\frac32\)</span>; general: no constant ratio</td>
</tr>
<tr>
<td>[<span class="arithmatex">\(P\|C_{\max}\)</span>](../catalogue/pcmax.md)</td>
<td>min makespan <span class="arithmatex">\(C_{\max}\)</span></td>
<td>strongly NP-hard (<span class="arithmatex">\(m\)</span> in the input)</td>
<td><span class="arithmatex">\(\max\{\max_j t_j, \lceil \frac1m \sum_j t_j \rceil\}\)</span></td>
<td>LIST <span class="arithmatex">\(2-\frac1m\)</span>; LPT <span class="arithmatex">\(\frac43-\frac1{3m}\)</span></td>
</tr>
<tr>
<td>[CLS](../catalogue/lot-sizing.md)</td>
<td>min setup, production and holding cost</td>
<td>NP-hard; ULS in <span class="arithmatex">\(\Theta(m^2)\)</span></td>
<td><span class="arithmatex">\(k\)</span> smallest setup costs; LP of the shortest-path formulation</td>
<td>MIP heuristics: relax-and-fix, fix-and-optimize</td>
</tr>
</table></div>

## All the problems of the course { #sez-sec-cat-tutti }

<strong>Central problems</strong>

- [The knapsack problem](../catalogue/knapsack.md) (KP).

- [The bin packing problem](../catalogue/bin-packing.md) (BPP).

- [The vertex coloring problem](../catalogue/vertex-coloring.md) (VCP).

- [The maximum clique problem](../catalogue/maximum-clique.md) (MCP).

- [The travelling salesman problem](../catalogue/tsp.md) (TSP).

- [Scheduling on identical parallel machines](../catalogue/pcmax.md) ($P\|C_{\max}$).

- [Capacitated lot sizing](../catalogue/lot-sizing.md) (CLS).

<strong>Knapsack family</strong>

- [Subset sum problem](../catalogue/knapsack.md#sez-sec-cat-ssp) (SSP).

- [Bounded knapsack problem](../catalogue/knapsack.md#sez-sec-cat-bkp) (BKP).

- [Unbounded knapsack problem](../catalogue/knapsack.md#sez-sec-cat-ukp) (UKP).

- [Multidimensional knapsack problem](../catalogue/knapsack.md#sez-sec-cat-mdkp) (MDKP).

- [Multiple knapsack problem](../catalogue/knapsack.md#sez-sec-cat-mkp) (MKP).

- [Multiple-choice knapsack problem](../catalogue/knapsack.md#sez-sec-cat-mckp) (MCKP).

- [Knapsack problem with setups](../catalogue/knapsack.md#sez-sec-cat-kps) (KPS).

- [Rod-Cutting Problem](../catalogue/knapsack-family.md#sez-sec-cat-rcp) (RCP).

- [Coin Change Problem](../catalogue/knapsack-family.md#sez-sec-cat-ccp) (CCP).

<strong>Packing</strong>

- [Cutting stock problem](../catalogue/bin-packing.md#sez-sec-cat-csp) (CSP).

<strong>Graphs</strong>

- [3-colorability](../catalogue/vertex-coloring.md#sez-sec-cat-3col) (3-COL).

- [Maximum stable set problem](../catalogue/maximum-clique.md#sez-sec-cat-mssp) (MSSP).

- [Vertex-weighted maximum clique problem](../catalogue/maximum-clique.md#sez-sec-cat-vwmcp) (VWMCP).

- [Edge-weighted maximum clique problem](../catalogue/maximum-clique.md#sez-sec-cat-ewmcp) (EWMCP).

<strong>Routing</strong>

- [Metric travelling salesman problem](../catalogue/tsp.md#sez-sec-cat-metrictsp) (metric TSP).

- [Asymmetric travelling salesman problem](../catalogue/tsp.md#sez-sec-cat-atsp) (ATSP).

- [Hamiltonian cycle problem](../catalogue/tsp.md#sez-sec-cat-hcp) (HCP).

<strong>Scheduling</strong>

- [Scheduling on a fixed number of identical machines ($m$ not part of the input)](../catalogue/pcmax.md#sez-sec-cat-pmcmax) ($Pm\|C_{\max}$).

- [Scheduling on parallel machines with different speeds, $Q\,||\,C_{\max}$](../catalogue/pcmax.md#sez-sec-cat-qcmax).

- [Scheduling on unrelated parallel machines, $R\,||\,C_{\max}$](../catalogue/pcmax.md#sez-sec-cat-rcmax).

<strong>Lot sizing</strong>

- [Uncapacitated lot sizing problem](../catalogue/lot-sizing.md#sez-sec-cat-uls) (ULS).

- [Capacitated lot sizing with constant capacity](../catalogue/lot-sizing.md#sez-sec-cat-clsc) (CLS-C).

- [Lot sizing with several products and setup times](../catalogue/lot-sizing.md#sez-sec-cat-mls) (MLS).

- [Lot sizing with initial stock](../catalogue/lot-sizing.md#sez-sec-cat-lssi) (LS-SI).

- [Lot sizing with overtime](../catalogue/lot-sizing.md#sez-sec-cat-lsot) (LS-OT).

- [Lot sizing with unsatisfied demand](../catalogue/lot-sizing.md#sez-sec-cat-lsud) (LS-UD).

<strong>DP examples</strong>

- [Minimum-cost staircase](../catalogue/dp-examples.md#sez-sec-cat-stair) (STAIR).

- [Billboards with no two consecutive positions](../catalogue/dp-examples.md#sez-sec-cat-nocons) (NOCONS).

- [Maximum-profit path on a grid](../catalogue/dp-examples.md#sez-sec-cat-grid) (GRID).

- [Shortest path in a layered network](../catalogue/dp-examples.md#sez-sec-cat-spp) (SPP).

- [Compatible requests](../catalogue/dp-examples.md#sez-sec-cat-req) (REQ).
