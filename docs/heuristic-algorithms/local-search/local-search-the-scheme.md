---
title: "Local search: the scheme · Neighbourhoods for the four problems"
---

# Local search: the scheme · Neighbourhoods for the four problems

<div class="info-capitolo" markdown>

**Part 4 · Heuristic algorithms · Chapter 25** · [:material-book-open-variant: Chapter 25: Local search](index.md) · [:material-file-pdf-box: Lecture notes, volume 4 (PDF)](../../pdf/lecture-notes-4-heuristic-algorithms.pdf) · [:material-pencil: Exercises: Local search](../../exercises/local-search.md) · [:material-gesture-tap: App: TSP: nearest neighbour and 2-opt](../../lab/tsp-nn-2opt.md)

</div>

## 25.3 Local search: the scheme { #sez-sec-scheme }

- The pseudo-code of $LS$ reads as follows. The function $\textit{Improve}$ explores the neighbourhood and returns an improving neighbour of $x$, or $\textit{NULL}$ if there is none.

!!! algoritmo "Algorithm: Local search"

    <div class="pseudocodice" markdown="0"><div class="pc" style="--liv:0"><strong>Input:</strong> a feasible solution <span class="arithmatex">\(x^0\)</span>, a neighbourhood <span class="arithmatex">\(N\)</span>, a rule <span class="arithmatex">\(\in\{\textit{first},\textit{best}\}\)</span></div><div class="pc" style="--liv:0"><strong>Output:</strong> a local optimum <span class="arithmatex">\(x\)</span> with respect to <span class="arithmatex">\(N\)</span></div><div class="pc" style="--liv:0"><span class="pc-n">1</span><strong>Function</strong> LocalSearch(<span class="arithmatex">\(x^0, N, \textit{rule}\)</span>)</div><div class="pc" style="--liv:1"><span class="pc-n">2</span><span class="arithmatex">\(x := x^0\)</span> <span class="pc-com">▹ current solution</span></div><div class="pc" style="--liv:1"><span class="pc-n">3</span><strong>while</strong> true <strong>do</strong></div><div class="pc" style="--liv:2"><span class="pc-n">4</span><span class="arithmatex">\(y := \textit{Improve}(x, N, \textit{rule})\)</span> <span class="pc-com">▹ improving neighbour, or NULL</span></div><div class="pc" style="--liv:2"><span class="pc-n">5</span><strong>if</strong> <span class="arithmatex">\(y = \textit{NULL}\)</span> <strong>then</strong></div><div class="pc" style="--liv:3"><span class="pc-n">6</span><strong>return</strong> <span class="arithmatex">\(x\)</span> <span class="pc-com">▹ no improving neighbour: local optimum</span></div><div class="pc" style="--liv:2"><span class="pc-n">7</span><strong>end</strong></div><div class="pc" style="--liv:2"><span class="pc-n">8</span><span class="arithmatex">\(x \leftarrow y\)</span> <span class="pc-com">▹ move to the improving neighbour</span></div><div class="pc" style="--liv:1"><span class="pc-n">9</span><strong>end</strong></div></div>

- A local search is defined by four ingredients:

    1. the <strong>starting solution</strong> $x^0$, computed by a constructive heuristic or at random;

    2. the <strong>neighbourhood</strong> $N$, i.e., the family of moves, which depends on the representation of the solutions;

    3. the <strong>acceptance criterion</strong>: here, a neighbour is accepted only if it is strictly better than the current solution;

    4. the <strong>stopping criterion</strong>: here, the search stops in the first local optimum; in practice a time limit is often added.

- The function $f$ that decides whether a neighbour is “better” is usually the objective of the problem, but it does not have to be: the search may be guided by a different function, as long as the solution it returns is feasible.

<a id="box-2-prop-termination"></a>

!!! teorema "Proposition 25.2"

    For every starting solution, $LS$ stops after a finite number of moves, in a local optimum with respect to $N$. If the objective function takes integer values and the problem is a minimization problem, the number of moves is at most $f(x^0)-z(I)$; for a maximization problem, at most $z(I)-f(x^0)$.

??? dimostrazione "Proof"

    Every move strictly improves the objective, hence the sequence of the visited solutions never visits the same solution twice. The set of the feasible solutions is finite, so the sequence is finite. When it stops, $\textit{Improve}$ has returned $\textit{NULL}$, i.e., no neighbour is better: the last solution is a local optimum. If $f$ takes integer values, every move improves $f$ by at least $1$, and $f$ can never go beyond $z(I)$, which gives the bounds on the number of moves. <span class="qed">□</span>

- On the TSP reference instance, a local search starting from the tour of $NN$ (length $25$) makes at most $25-18=7$ moves. On large instances this bound is weak, and for some neighbourhoods there are instances on which the number of moves grows exponentially with $n$ (for the 2-opt neighbourhood of the TSP, see Englert, Röglin, Vöcking, <em>Algorithmica</em> 68, 2014). In practice, the number of moves is small, and the running time is dominated by the exploration of the neighbourhoods.

- Local search <strong>intensifies</strong>: it moves downhill until it reaches the bottom of the valley in which it started. Which valley, and therefore which local optimum, depends on the starting solution, on the neighbourhood and on the rule used to choose the move.

## 25.4 Neighbourhoods for the four problems { #sez-sec-neigh }

- The neighbourhoods are defined by small modifications of the representation of the solutions. Only <strong>feasible</strong> neighbours belong to the neighbourhood: a modification that produces an infeasible object is not a move. For every neighbourhood we fix the <strong>order</strong> in which the moves are examined, which matters when the search accepts the first improving neighbour it finds.

### 25.4.1 KP: flip and swap

- The <strong>flip</strong> neighbourhood, defined in the notes on definitions, changes one component of $x$, i.e., adds or removes one item; it has $n$ elements before the feasibility test. The flips are examined for $i=1,2,\dots,n$.

- The <strong>swap</strong> neighbourhood removes one selected item $i$ and adds one unselected item $k$. If $S$ is the set of the selected items, it has $|S|\,(n-|S|)\le n^2/4$ elements; the swaps are examined for $i\in S$ in increasing order and, for each $i$, for $k\notin S$ in increasing order.

- The two neighbourhoods are complementary: a flip changes the number of selected items, a swap keeps it. The neighbourhood <strong>flip+swap</strong> is their union, with the flips examined first.

### 25.4.2 BPP: move and swap

- The <strong>move</strong> neighbourhood moves one item $i$ from its bin $a=bin_i$ to another non-empty bin $b$ with $L_b+w_i\le c$. It has at most $n\,(nb-1)$ elements; the moves are examined for $i=1,2,\dots,n$ and, for each $i$, for the bins in increasing order of their label.

- Moving an item into an empty bin is never useful: it cannot decrease the number of bins. The bins keep the labels of the starting solution; a bin emptied by a move simply disappears.

- The <strong>swap</strong> neighbourhood exchanges two items $i<k$ in different bins, provided that both bins remain feasible: $L_{bin_i}-w_i+w_k\le c$ and $L_{bin_k}-w_k+w_i\le c$. Exchanging two items of equal weight does not change any load, and is not considered. It has at most $\frac{n(n-1)}{2}$ elements, examined for $i=1,\dots,n$ and $k=i+1,\dots,n$.

### 25.4.3 TSP: 2-opt and Or-opt

- A tour is a permutation $\sigma=(\sigma_1,\sigma_2,\dots,\sigma_n)$ of the cities, with $\sigma_{n+1}=\sigma_1$. We keep city $1$ in the first position, $\sigma_1=1$.

- The <strong>2-opt</strong> move with positions $i<j$ removes the two edges $\{\sigma_i,\sigma_{i+1}\}$ and $\{\sigma_j,\sigma_{j+1}\}$, and reconnects the tour in the only other possible way: with the edges $\{\sigma_i,\sigma_j\}$ and $\{\sigma_{i+1},\sigma_{j+1}\}$, travelling the path $\sigma_{i+1},\dots,\sigma_j$ in the opposite direction (Croes, <em>Operations Research</em> 6, 1958):

    $$
    \begin{gathered}
    (\sigma_1,\dots,\sigma_i,\ \underbrace{\sigma_{i+1},\sigma_{i+2},\dots,\sigma_j}_{\text{path}},\ \sigma_{j+1},\dots,\sigma_n)\\
    \downarrow\\
    (\sigma_1,\dots,\sigma_i,\ \underbrace{\sigma_j,\dots,\sigma_{i+2},\sigma_{i+1}}_{\text{reversed path}},\ \sigma_{j+1},\dots,\sigma_n).
    \end{gathered}
    $$

![Figure 1](../../img/local-search/fig01.svg){ .fig loading=lazy  }

- The moves are examined for $i=1,\dots,n-2$ and $j=i+2,\dots,n$, excluding $i=1$, $j=n$ (the two edges would share city $\sigma_1$). The 2-opt neighbourhood has $\frac{n(n-3)}{2}$ elements: $5$ for the reference instance.

- The <strong>Or-opt</strong> move (Or, PhD thesis, Northwestern University, 1976) takes a <strong>segment</strong> of $\ell\in\{1,2,3\}$ consecutive cities $\sigma_i,\dots,\sigma_{i+\ell-1}$ ($2\le i$, $i+\ell-1\le n$) and inserts it, with the same orientation, between two consecutive cities $\sigma_k$ and $\sigma_{k+1}$ outside the segment ($k\notin\{i-1,\dots,i+\ell-1\}$). Let $p=\sigma_{i-1}$ and $q=\sigma_{i+\ell}$ be the cities before and after the segment, $s_1=\sigma_i$ and $s_\ell=\sigma_{i+\ell-1}$ its first and last city, $a=\sigma_k$ and $b=\sigma_{k+1}$:

![Figure 2](../../img/local-search/fig02.svg){ .fig loading=lazy  }

- The moves are examined for $\ell=1,2,3$, then for $i=2,\dots,n-\ell+1$, then for $k=1,\dots,n$. For every $\ell$ there are $n-\ell$ segments and $n-\ell-1$ insertion points, so the neighbourhood has $\sum_{\ell=1}^{3}(n-\ell)(n-\ell-1)$ elements, i.e., $O(n^2)$: $170$ for $n=10$. Some of these moves give the same tour (moving a single city forward by one position is the same as moving its successor backward by one position).

- An Or-opt move removes <em>three</em> edges, $\{p,s_1\}$, $\{s_\ell,q\}$ and $\{a,b\}$. The <strong>3-opt</strong> neighbourhood (Lin, <em>Bell System Technical Journal</em> 44, 1965) contains all the ways of removing three edges and reconnecting the three paths: it has $O(n^3)$ elements, and Or-opt is the part of it that can be explored in $O(n^2)$ time.

### 25.4.4 $P\,||\,C_{\max}$: move and swap

- The <strong>move</strong> neighbourhood moves one job $j$ from its machine $a=mach_j$ to another machine $h\ne a$. Every move is feasible, and the neighbourhood has $n\,(m-1)$ elements, examined for $j=1,\dots,n$ and, for each $j$, for $h=1,\dots,m$.

- The <strong>swap</strong> neighbourhood exchanges the machines of two jobs $j<k$ on different machines with $t_j\ne t_k$ (otherwise no load changes). It has at most $\frac{n(n-1)}{2}$ elements, examined for $j=1,\dots,n$ and $k=j+1,\dots,n$. A swap never changes the number of jobs on a machine.

### 25.4.5 Summary

<div class="tabella" markdown="0"><table>
<tr>
<th>problem</th>
<th>neighbourhood</th>
<th>move</th>
<th>size</th>
</tr>
<tr>
<td>KP</td>
<td>flip</td>
<td>add or remove item <span class="arithmatex">\(i\)</span></td>
<td><span class="arithmatex">\(n\)</span></td>
</tr>
<tr>
<td>KP</td>
<td>swap</td>
<td>item <span class="arithmatex">\(i\)</span> out, item <span class="arithmatex">\(k\)</span> in</td>
<td><span class="arithmatex">\(|S|(n-|S|)\le \frac{n^2}{4}\)</span></td>
</tr>
<tr>
<td>BPP</td>
<td>move</td>
<td>item <span class="arithmatex">\(i\)</span> to another bin</td>
<td><span class="arithmatex">\(\le n\,(nb-1)\)</span></td>
</tr>
<tr>
<td>BPP</td>
<td>swap</td>
<td>exchange items <span class="arithmatex">\(i\)</span> and <span class="arithmatex">\(k\)</span></td>
<td><span class="arithmatex">\(\le \frac{n(n-1)}{2}\)</span></td>
</tr>
<tr>
<td>TSP</td>
<td>2-opt</td>
<td>remove <span class="arithmatex">\(2\)</span> edges, reverse a path</td>
<td><span class="arithmatex">\(\frac{n(n-3)}{2}\)</span></td>
</tr>
<tr>
<td>TSP</td>
<td>Or-opt</td>
<td>move a segment of <span class="arithmatex">\(1\)</span>, <span class="arithmatex">\(2\)</span> or <span class="arithmatex">\(3\)</span> cities</td>
<td><span class="arithmatex">\(\sum_{\ell=1}^{3}(n-\ell)(n-\ell-1)\)</span></td>
</tr>
<tr>
<td>TSP</td>
<td>3-opt</td>
<td>remove <span class="arithmatex">\(3\)</span> edges, reconnect</td>
<td><span class="arithmatex">\(O(n^3)\)</span></td>
</tr>
<tr>
<td><span class="arithmatex">\(P\,||\,C_{\max}\)</span></td>
<td>move</td>
<td>job <span class="arithmatex">\(j\)</span> to another machine</td>
<td><span class="arithmatex">\(n\,(m-1)\)</span></td>
</tr>
<tr>
<td><span class="arithmatex">\(P\,||\,C_{\max}\)</span></td>
<td>swap</td>
<td>exchange jobs <span class="arithmatex">\(j\)</span> and <span class="arithmatex">\(k\)</span></td>
<td><span class="arithmatex">\(\le\frac{n(n-1)}{2}\)</span></td>
</tr>
</table></div>

- The sizes are those <em>before</em> the feasibility test (KP, BPP) and include moves that do not change the objective. The size of a neighbourhood is the number of neighbours to evaluate at every iteration, so it determines the cost of an iteration.

---

**Next:** [25.5 First improvement and best improvement](first-improvement-and-best-improvement.md)
