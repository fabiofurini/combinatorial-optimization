---
title: "The problems at a glance"
---

# The problems at a glance

<div class="info-capitolo" markdown>

**Selected problems** · [:material-view-list: Catalogue of combinatorial problems](../catalogue/index.md)

</div>

<a id="sec:cat-sintesi"></a>

!!! chiave ""

    The problems the course dwells on most, compared: objective, complexity, the simplest bound and the approximation results of the course. Each name opens its page.

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
<td><a href="../../selected-problems/knapsack/">KP</a></td>
<td>max total profit, total weight <span class="arithmatex">\(\le c\)</span></td>
<td>weakly NP-hard, DP in <span class="arithmatex">\(\Theta(nc)\)</span></td>
<td>Dantzig: <span class="arithmatex">\(\UB_{\mathrm{D}} = \sum_{j<s} p_j + \lfloor p_s\,\mathit{rc}/w_s \rfloor\)</span></td>
<td>Ext-Greedy <span class="arithmatex">\(2\)</span>; <span class="arithmatex">\(H^{\ell}\)</span>: <span class="arithmatex">\(\frac{\ell+2}{\ell+1}\)</span>; FPTAS <span class="arithmatex">\(\frac{1}{1-\varepsilon}\)</span></td>
</tr>
<tr>
<td><a href="../../selected-problems/bin-packing/">BPP</a></td>
<td>min number of bins</td>
<td>strongly NP-hard</td>
<td><span class="arithmatex">\(\LB = \lceil \sum_j w_j / c \rceil\)</span></td>
<td>NF, WF <span class="arithmatex">\(2\)</span>; FF, BF <span class="arithmatex">\(\frac{17}{10}\)</span>; no ratio <span class="arithmatex">\(<\frac32\)</span></td>
</tr>
<tr>
<td><a href="../../selected-problems/vertex-coloring/">VCP</a></td>
<td>min number of colors <span class="arithmatex">\(\chi(G)\)</span></td>
<td>strongly NP-hard</td>
<td><span class="arithmatex">\(\omega(G) \le \chi(G) \le \Delta(G)+1\)</span></td>
<td>not approximable: no ratio <span class="arithmatex">\(<\frac43\)</span> unless <span class="arithmatex">\(P=NP\)</span>; no <span class="arithmatex">\(n^{1-\varepsilon}\)</span> (Zuckerman)</td>
</tr>
<tr>
<td><a href="../../selected-problems/maximum-clique/">MCP</a></td>
<td>max clique size <span class="arithmatex">\(\omega(G)\)</span></td>
<td>NP-hard</td>
<td><span class="arithmatex">\(\omega(G) \le \chi(G)\)</span>, <span class="arithmatex">\(\omega(G) \le \Delta+1\)</span></td>
<td>not approximable: no <span class="arithmatex">\(n^{1-\varepsilon}\)</span> (Håstad, Zuckerman)</td>
</tr>
<tr>
<td><a href="../../selected-problems/tsp/">TSP</a></td>
<td>min tour length <span class="arithmatex">\(L(\sigma)\)</span></td>
<td>strongly NP-hard</td>
<td><span class="arithmatex">\(\lceil \frac12 \sum_i (a_i+b_i) \rceil\)</span>; MST <span class="arithmatex">\(d(T) \le z(I)\)</span></td>
<td>metric: double tree <span class="arithmatex">\(2\)</span>, Christofides <span class="arithmatex">\(\frac32\)</span>; general: no constant ratio</td>
</tr>
<tr>
<td><a href="../../selected-problems/pcmax/"><span class="arithmatex">\(P\|C_{\max}\)</span></a></td>
<td>min makespan <span class="arithmatex">\(C_{\max}\)</span></td>
<td>strongly NP-hard (<span class="arithmatex">\(m\)</span> in the input)</td>
<td><span class="arithmatex">\(\max\{\max_j t_j, \lceil \frac1m \sum_j t_j \rceil\}\)</span></td>
<td>LIST <span class="arithmatex">\(2-\frac1m\)</span>; LPT <span class="arithmatex">\(\frac43-\frac1{3m}\)</span></td>
</tr>
<tr>
<td><a href="../../selected-problems/lot-sizing/">CLS</a></td>
<td>min setup, production and holding cost</td>
<td>NP-hard; ULS in <span class="arithmatex">\(\Theta(m^2)\)</span></td>
<td><span class="arithmatex">\(k\)</span> smallest setup costs; LP of the shortest-path formulation</td>
<td>MIP heuristics: relax-and-fix, fix-and-optimize</td>
</tr>
</table></div>

- The definitions of all the problems of the course, the central ones and their variants, are in the [Catalogue of combinatorial problems](../catalogue/central-problems.md#sez-sec-cat-def-kp).
