---
title: "Comparison and conclusions"
---

# 26.11 Comparison and conclusions { #sez-sec-closing }

<div class="info-capitolo" markdown>

**Part 4 · Heuristic algorithms · Chapter 26** · [:material-book-open-variant: Chapter 26: Metaheuristics](index.md) · [:material-file-pdf-box: Lecture notes, volume 4 (PDF)](../../pdf/lecture-notes-4-heuristic-algorithms.pdf) · [:material-pencil: Exercises: Metaheuristics](../../exercises/metaheuristics.md)

</div>

## 26.11.1 The methods on the medium instances

- The table collects the results of the experiments of the previous sections: for each method, the best value found in $10$ runs ($seed=1,\dots,10$), as minimum, average and maximum, and the number of runs that reach the optimum. Deterministic methods give the same value in every run.

<div class="tabella" markdown="0"><table>
<tr>
<th>instance</th>
<th>method</th>
<th>parameters</th>
<th>min</th>
<th>average</th>
<th>max</th>
<th>optimal</th>
</tr>
<tr>
<td>TSP20</td>
<td>NN</td>
<td>—</td>
<td><span class="arithmatex">\(326\)</span></td>
<td><span class="arithmatex">\(326\)</span></td>
<td><span class="arithmatex">\(326\)</span></td>
<td><span class="arithmatex">\(0\)</span></td>
</tr>
<tr>
<td></td>
<td>NN + 2-opt</td>
<td>—</td>
<td><span class="arithmatex">\(319\)</span></td>
<td><span class="arithmatex">\(319\)</span></td>
<td><span class="arithmatex">\(319\)</span></td>
<td><span class="arithmatex">\(0\)</span></td>
</tr>
<tr>
<td></td>
<td><span class="arithmatex">\(SA\)</span></td>
<td><span class="arithmatex">\(T_0=20\)</span>, <span class="arithmatex">\(\alpha=0.95\)</span></td>
<td><span class="arithmatex">\(291\)</span></td>
<td><span class="arithmatex">\(294.3\)</span></td>
<td><span class="arithmatex">\(298\)</span></td>
<td><span class="arithmatex">\(5\)</span></td>
</tr>
<tr>
<td></td>
<td><span class="arithmatex">\(SA\)</span></td>
<td><span class="arithmatex">\(T_0=20\)</span>, <span class="arithmatex">\(\alpha=0.99\)</span></td>
<td><span class="arithmatex">\(291\)</span></td>
<td><span class="arithmatex">\(291.0\)</span></td>
<td><span class="arithmatex">\(291\)</span></td>
<td><span class="arithmatex">\(10\)</span></td>
</tr>
<tr>
<td></td>
<td><span class="arithmatex">\(TS\)</span></td>
<td><span class="arithmatex">\(tenure=5\)</span>, <span class="arithmatex">\(200\)</span> it.</td>
<td><span class="arithmatex">\(291\)</span></td>
<td><span class="arithmatex">\(291\)</span></td>
<td><span class="arithmatex">\(291\)</span></td>
<td><span class="arithmatex">\(10\)</span></td>
</tr>
<tr>
<td></td>
<td><span class="arithmatex">\(ILS\)</span></td>
<td><span class="arithmatex">\(100\)</span> it.</td>
<td><span class="arithmatex">\(291\)</span></td>
<td><span class="arithmatex">\(291.0\)</span></td>
<td><span class="arithmatex">\(291\)</span></td>
<td><span class="arithmatex">\(10\)</span></td>
</tr>
<tr>
<td></td>
<td><span class="arithmatex">\(GRASP\)</span></td>
<td><span class="arithmatex">\(\alpha=0.25\)</span>, <span class="arithmatex">\(20\)</span> it.</td>
<td><span class="arithmatex">\(291\)</span></td>
<td><span class="arithmatex">\(291.0\)</span></td>
<td><span class="arithmatex">\(291\)</span></td>
<td><span class="arithmatex">\(10\)</span></td>
</tr>
<tr>
<td></td>
<td><span class="arithmatex">\(LNS\)</span></td>
<td><span class="arithmatex">\(q=5\)</span>, <span class="arithmatex">\(200\)</span> it.</td>
<td><span class="arithmatex">\(291\)</span></td>
<td><span class="arithmatex">\(293.8\)</span></td>
<td><span class="arithmatex">\(319\)</span></td>
<td><span class="arithmatex">\(9\)</span></td>
</tr>
<tr>
<td></td>
<td>ALNS</td>
<td><span class="arithmatex">\(q=5\)</span>, <span class="arithmatex">\(200\)</span> it.</td>
<td><span class="arithmatex">\(291\)</span></td>
<td><span class="arithmatex">\(299.4\)</span></td>
<td><span class="arithmatex">\(319\)</span></td>
<td><span class="arithmatex">\(7\)</span></td>
</tr>
<tr>
<td>KP20</td>
<td>greedy</td>
<td>—</td>
<td><span class="arithmatex">\(490\)</span></td>
<td><span class="arithmatex">\(490\)</span></td>
<td><span class="arithmatex">\(490\)</span></td>
<td><span class="arithmatex">\(0\)</span></td>
</tr>
<tr>
<td></td>
<td>greedy + local search</td>
<td>—</td>
<td><span class="arithmatex">\(514\)</span></td>
<td><span class="arithmatex">\(514\)</span></td>
<td><span class="arithmatex">\(514\)</span></td>
<td><span class="arithmatex">\(0\)</span></td>
</tr>
<tr>
<td></td>
<td><span class="arithmatex">\(GRASP\)</span></td>
<td><span class="arithmatex">\(\alpha=0.25\)</span>, <span class="arithmatex">\(20\)</span> it.</td>
<td><span class="arithmatex">\(521\)</span></td>
<td><span class="arithmatex">\(521.0\)</span></td>
<td><span class="arithmatex">\(521\)</span></td>
<td><span class="arithmatex">\(10\)</span></td>
</tr>
<tr>
<td></td>
<td><span class="arithmatex">\(GA\)</span></td>
<td><span class="arithmatex">\(P=10\)</span>, <span class="arithmatex">\(300\)</span> it.</td>
<td><span class="arithmatex">\(508\)</span></td>
<td><span class="arithmatex">\(516.9\)</span></td>
<td><span class="arithmatex">\(521\)</span></td>
<td><span class="arithmatex">\(4\)</span></td>
</tr>
<tr>
<td></td>
<td>memetic</td>
<td><span class="arithmatex">\(P=10\)</span>, <span class="arithmatex">\(300\)</span> it.</td>
<td><span class="arithmatex">\(521\)</span></td>
<td><span class="arithmatex">\(521.0\)</span></td>
<td><span class="arithmatex">\(521\)</span></td>
<td><span class="arithmatex">\(10\)</span></td>
</tr>
<tr>
<td>PCM15</td>
<td>LPT</td>
<td>—</td>
<td><span class="arithmatex">\(73\)</span></td>
<td><span class="arithmatex">\(73\)</span></td>
<td><span class="arithmatex">\(73\)</span></td>
<td><span class="arithmatex">\(0\)</span></td>
</tr>
<tr>
<td></td>
<td><span class="arithmatex">\(TS\)</span></td>
<td><span class="arithmatex">\(tenure=15\)</span>, <span class="arithmatex">\(300\)</span> it.</td>
<td><span class="arithmatex">\(69\)</span></td>
<td><span class="arithmatex">\(69\)</span></td>
<td><span class="arithmatex">\(69\)</span></td>
<td><span class="arithmatex">\(10\)</span></td>
</tr>
<tr>
<td></td>
<td><span class="arithmatex">\(VNS\)</span></td>
<td><span class="arithmatex">\(k_{\max}=3\)</span>, <span class="arithmatex">\(300\)</span> it.</td>
<td><span class="arithmatex">\(69\)</span></td>
<td><span class="arithmatex">\(69.3\)</span></td>
<td><span class="arithmatex">\(70\)</span></td>
<td><span class="arithmatex">\(7\)</span></td>
</tr>
<tr>
<td>BPP24</td>
<td>FFD</td>
<td>—</td>
<td><span class="arithmatex">\(10\)</span></td>
<td><span class="arithmatex">\(10\)</span></td>
<td><span class="arithmatex">\(10\)</span></td>
<td><span class="arithmatex">\(0\)</span></td>
</tr>
<tr>
<td></td>
<td><span class="arithmatex">\(LNS\)</span>, FFD repair</td>
<td><span class="arithmatex">\(q=3\)</span>, <span class="arithmatex">\(200\)</span> it.</td>
<td><span class="arithmatex">\(10\)</span></td>
<td><span class="arithmatex">\(10.0\)</span></td>
<td><span class="arithmatex">\(10\)</span></td>
<td><span class="arithmatex">\(0\)</span></td>
</tr>
<tr>
<td></td>
<td><span class="arithmatex">\(LNS\)</span>, exact repair</td>
<td><span class="arithmatex">\(q=3\)</span>, <span class="arithmatex">\(200\)</span> it.</td>
<td><span class="arithmatex">\(9\)</span></td>
<td><span class="arithmatex">\(9.0\)</span></td>
<td><span class="arithmatex">\(9\)</span></td>
<td><span class="arithmatex">\(10\)</span></td>
</tr>
</table></div>

- Every metaheuristic improves on the local search it is built on, and with suitable parameters several of them reach the optimum in every run. The table, however, also shows how much the result depends on the parameters (the tenure of $TS$, the strength $q$ of the destruction, the cooling of $SA$) and on the components (the repair of $LNS$, the local search of the memetic algorithm). On four small instances it does not rank the methods: such a ranking needs many instances and equal running times, as discussed in the notes on heuristic algorithms.

## 26.11.2 Intensification and diversification

- Every metaheuristic of these notes combines a component that <strong>intensifies</strong> (searches around the good solutions already found) and a component that <strong>diversifies</strong> (moves the search to unexplored regions), and has parameters that set the balance between the two.

<div class="tabella" markdown="0"><table>
<tr>
<th>method</th>
<th>intensification</th>
<th>diversification</th>
<th>balance set by</th>
</tr>
<tr>
<td><span class="arithmatex">\(SA\)</span></td>
<td>accepting only improving moves at low temperature</td>
<td>accepting worse moves at high temperature</td>
<td><span class="arithmatex">\(T_0\)</span>, cooling factor <span class="arithmatex">\(\alpha\)</span>, <span class="arithmatex">\(L\)</span></td>
</tr>
<tr>
<td><span class="arithmatex">\(TS\)</span></td>
<td>moving to the best neighbour; restarting from elite solutions</td>
<td>tabu list; penalties on frequent attributes</td>
<td>tenure, aspiration criterion</td>
</tr>
<tr>
<td><span class="arithmatex">\(ILS\)</span></td>
<td>local search after every kick; accepting only better local optima</td>
<td>the kick</td>
<td>strength of the kick, acceptance criterion</td>
</tr>
<tr>
<td><span class="arithmatex">\(VNS\)</span></td>
<td>local search; return to <span class="arithmatex">\(k=1\)</span> after an improvement</td>
<td>shaking in <span class="arithmatex">\(N_k\)</span> with growing <span class="arithmatex">\(k\)</span></td>
<td><span class="arithmatex">\(k_{\max}\)</span>, the neighbourhoods <span class="arithmatex">\(N_k\)</span></td>
</tr>
<tr>
<td><span class="arithmatex">\(GRASP\)</span></td>
<td>local search on every constructed solution</td>
<td>randomized construction</td>
<td><span class="arithmatex">\(\alpha\)</span></td>
</tr>
<tr>
<td><span class="arithmatex">\(LNS\)</span> / ALNS</td>
<td>repair (heuristic or exact), acceptance</td>
<td>random destroy</td>
<td><span class="arithmatex">\(q\)</span>, choice of the methods, weights</td>
</tr>
<tr>
<td><span class="arithmatex">\(GA\)</span> / memetic</td>
<td>selection, replacement, local search (memetic)</td>
<td>crossover, mutation</td>
<td>population size, <span class="arithmatex">\(p_m\)</span></td>
</tr>
</table></div>

## 26.11.3 Parameters and tuning

- A metaheuristic is an algorithm only after its parameters are fixed, and the experiments of these notes show that the parameters can make the difference between finding the optimum in every run and never finding it. Choosing them is called <strong>tuning</strong>.

- The parameters must be tuned on <strong>training</strong> instances and evaluated on <em>different</em> ones, otherwise the picture is optimistic. Tuning one parameter at a time ignores their interactions (for $SA$, the best $T_0$ depends on $\alpha$); tools such as <code>irace</code> (López-Ibáñez et al., 2016) tune all of them together. A method that works well for a wide range of parameters is preferable to one that works very well only for a narrow range.

## 26.11.4 What these methods do not use

- None of the metaheuristics of these notes uses a <strong>relaxation</strong> of the problem or a <strong>MIP solver</strong>. They manipulate feasible (or penalized) solutions only, and they produce only <em>primal</em> bounds.

- As a consequence, they cannot tell how good their solutions are. On the medium instances we could measure the quality only because the optimal values had been computed separately, by exact algorithms. The two exceptions confirm the rule: for $P\,||\,C_{\max}$ and the BPP, $TS$, $VNS$ and $LNS$ stopped as soon as they reached a simple lower bound, which is a <em>dual</em> bound that certifies optimality; when the optimum is above the bound, no such certificate exists, and the search goes on until the iteration limit. The exact repair of $LNS$ (Section [26.9.1](large-neighbourhood-search.md#sez-sec-lns-bpp)), finally, showed that re-optimizing a part of the solution exactly, with the rest fixed, gives very powerful neighbourhoods.

!!! chiave ""

    Metaheuristics escape from local optima, but they give only one side of the gap. The notes on MIP-based heuristics use the MIP formulation of the problem, its relaxation and a MIP solver, both to guide the search and to obtain the dual bound on the other side.

---

**Next:** [Typical mistakes · In summary](typical-mistakes.md)
