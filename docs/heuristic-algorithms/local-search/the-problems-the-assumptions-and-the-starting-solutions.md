---
title: "The problems, the assumptions and the starting solutions"
---

# 25.2 The problems, the assumptions and the starting solutions { #sez-sec-problems }

<div class="info-capitolo" markdown>

**Part 4 · Heuristic algorithms · Chapter 25** · [:material-book-open-variant: Chapter 25: Local search](index.md) · [:material-file-pdf-box: Lecture notes, volume 4 (PDF)](../../pdf/lecture-notes-4-heuristic-algorithms.pdf) · [:material-pencil: Exercises: Local search](../../exercises/local-search.md) · [:material-gesture-tap: App: TSP: nearest neighbour and 2-opt](../../lab/tsp-nn-2opt.md)

</div>

- The algorithms are illustrated on the four problems of the notes on heuristic algorithms, defined in the notes on combinatorial optimization problems, with the same notation and assumptions:

<div class="tabella" markdown="0"><table>
<tr>
<th>problem</th>
<th>data</th>
<th>representation of a solution</th>
<th>objective</th>
</tr>
<tr>
<td>KP</td>
<td><span class="arithmatex">\(p_i\)</span>, <span class="arithmatex">\(w_i\)</span> (<span class="arithmatex">\(i\in\mathscr{I}\)</span>), capacity <span class="arithmatex">\(c\)</span></td>
<td>binary vector <span class="arithmatex">\(x\)</span></td>
<td>max profit</td>
</tr>
<tr>
<td>BPP</td>
<td><span class="arithmatex">\(w_i\)</span> (<span class="arithmatex">\(i\in\mathscr{I}\)</span>), capacity <span class="arithmatex">\(c\)</span></td>
<td>vector <span class="arithmatex">\(bin\)</span>, packing patterns <span class="arithmatex">\(P_b\)</span></td>
<td>min number of bins <span class="arithmatex">\(nb\)</span></td>
</tr>
<tr>
<td>TSP</td>
<td><span class="arithmatex">\(d_{ij}\)</span> (<span class="arithmatex">\(i,j\in\mathscr{V}\)</span>)</td>
<td>tour <span class="arithmatex">\(\sigma\)</span></td>
<td>min length <span class="arithmatex">\(L(\sigma)\)</span></td>
</tr>
<tr>
<td><span class="arithmatex">\(P\,||\,C_{\max}\)</span></td>
<td><span class="arithmatex">\(t_j\)</span> (<span class="arithmatex">\(j\in\mathscr{J}\)</span>), <span class="arithmatex">\(m\)</span> machines</td>
<td>vector <span class="arithmatex">\(mach\)</span>, sets <span class="arithmatex">\(J_h\)</span></td>
<td>min makespan <span class="arithmatex">\(C_{\max}\)</span></td>
</tr>
</table></div>

- For $P\,||\,C_{\max}$, $L_h=\sum_{j\in J_h} t_j$ is the <strong>load</strong> of machine $h$ and $C_{\max}=\max_h L_h$. For the BPP, $L_b=\sum_{i\in P_b} w_i$ is the <strong>load</strong> of bin $b$. A machine (or a bin) whose load equals the objective value is called <strong>critical</strong>.

- The <strong>reference instances</strong> are those of the notes on definitions: the KP with $p=(10,7,6,4)$, $w=(5,4,3,3)$, $c=9$; the BPP with $w=(4,4,5,3,2,3)$, $c=7$; the TSP with $5$ cities; $P\,||\,C_{\max}$ with $t=(5,5,4,4,3,3,3)$ and $m=3$. Their optimal values are $17$, $3$, $18$ and $9$.

## 25.2.1 Starting solutions

- A local search needs a feasible <strong>starting solution</strong>. We use the solutions computed in the notes on constructive heuristics and in the notes on approximation algorithms, recalled below.

<div class="tabella" markdown="0"><table>
<tr>
<th>problem</th>
<th>algorithm</th>
<th>starting solution</th>
<th>value</th>
<th><span class="arithmatex">\(z(I)\)</span></th>
</tr>
<tr>
<td>KP</td>
<td><span class="arithmatex">\(GR\)</span> (greedy by efficiency)</td>
<td><span class="arithmatex">\(x=(1,0,1,0)\)</span>, items <span class="arithmatex">\(\{1,3\}\)</span></td>
<td><span class="arithmatex">\(16\)</span></td>
<td><span class="arithmatex">\(17\)</span></td>
</tr>
<tr>
<td>KP</td>
<td>greedy by weight <span class="arithmatex">\(GR_w\)</span></td>
<td><span class="arithmatex">\(x=(0,0,1,1)\)</span>, items <span class="arithmatex">\(\{3,4\}\)</span></td>
<td><span class="arithmatex">\(10\)</span></td>
<td><span class="arithmatex">\(17\)</span></td>
</tr>
<tr>
<td>BPP</td>
<td><span class="arithmatex">\(NF\)</span></td>
<td><span class="arithmatex">\(\{1\},\{2\},\{3\},\{4,5\},\{6\}\)</span></td>
<td><span class="arithmatex">\(5\)</span></td>
<td><span class="arithmatex">\(3\)</span></td>
</tr>
<tr>
<td>BPP</td>
<td><span class="arithmatex">\(FF\)</span></td>
<td><span class="arithmatex">\(\{1,4\},\{2,5\},\{3\},\{6\}\)</span></td>
<td><span class="arithmatex">\(4\)</span></td>
<td><span class="arithmatex">\(3\)</span></td>
</tr>
<tr>
<td>BPP</td>
<td><span class="arithmatex">\(FFD\)</span></td>
<td><span class="arithmatex">\(\{3,5\},\{1,4\},\{2,6\}\)</span></td>
<td><span class="arithmatex">\(3\)</span></td>
<td><span class="arithmatex">\(3\)</span></td>
</tr>
<tr>
<td>TSP</td>
<td><span class="arithmatex">\(NN\)</span> from city <span class="arithmatex">\(1\)</span></td>
<td><span class="arithmatex">\(\sigma=(1,3,2,4,5)\)</span></td>
<td><span class="arithmatex">\(25\)</span></td>
<td><span class="arithmatex">\(18\)</span></td>
</tr>
<tr>
<td><span class="arithmatex">\(P\,||\,C_{\max}\)</span></td>
<td><span class="arithmatex">\(LPT\)</span></td>
<td><span class="arithmatex">\(J_1=\{1,5,7\}\)</span>, <span class="arithmatex">\(J_2=\{2,6\}\)</span>, <span class="arithmatex">\(J_3=\{3,4\}\)</span></td>
<td><span class="arithmatex">\(11\)</span></td>
<td><span class="arithmatex">\(9\)</span></td>
</tr>
</table></div>

- The solution of $FFD$ is already optimal, so no local search can improve it: for the BPP we start from the solutions of $NF$ and $FF$.

- To study the behaviour of a local search on many starting solutions we also use <strong>random starting solutions</strong>. They are generated with the Park–Miller minimal standard generator: given an integer <strong>seed</strong> $s_0\in\{1,\dots,2^{31}-2\}$, the $k$-th pseudo-random number is

!!! chiave ""

    $$
    s_k = 16807\cdot s_{k-1} \bmod (2^{31}-1),
    \qquad\qquad
    u_k = \frac{s_k}{2^{31}-1}\in(0,1),
    $$

    and a pseudo-random integer in $\{0,1,\dots,q-1\}$ is $\lfloor q\, u_k\rfloor$.

- The sequence is completely determined by the seed: the same seed gives the same starting solutions, in the notes, in the exercises and in the code. A <strong>random tour</strong> keeps city $1$ in the first position and shuffles the other cities (Fisher–Yates: for $k=n,n-1,\dots,3$, the city in position $k$ is exchanged with the city in a random position among $2,\dots,k$); a <strong>random assignment</strong> of the jobs draws the machine of the jobs $1,2,\dots,n$ in this order; a <strong>random BPP solution</strong> is computed by $FF$ on a random order of the items (Fisher–Yates on all the positions: for $k=n,n-1,\dots,2$, the item in position $k$ is exchanged with the item in a random position among $1,\dots,k$).

---

**Next:** [Local search: the scheme · Neighbourhoods for the four problems](local-search-the-scheme.md)
