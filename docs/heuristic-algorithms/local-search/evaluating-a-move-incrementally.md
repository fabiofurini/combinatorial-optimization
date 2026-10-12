---
title: "Evaluating a move incrementally"
---

# 30.6 Evaluating a move incrementally { #sez-sec-incremental }

<div class="info-capitolo" markdown>

**Part 4 · Heuristic algorithms · Chapter 30** · [:material-book-open-variant: Chapter 30: Local search](index.md) · [:material-file-pdf-box: Lecture notes, volume 4 (PDF)](../../pdf/lecture-notes-4-heuristic-algorithms.pdf) · [:material-pencil: Exercises: Local search](../../exercises/local-search.md) · [:material-gesture-tap: App: TSP: nearest neighbour and 2-opt](../../lab/tsp-nn-2opt.md)

</div>

- Every iteration of $LS$ evaluates many neighbours, and most of the running time is spent there. Computing $f(y)$ <strong>from scratch</strong> costs $O(n)$ for each of the four problems: the profit of a KP solution, the loads of the bins or of the machines, the length of a tour are sums of $n$ terms.

- A move changes only a few components of the solution. The <strong>incremental evaluation</strong> computes the <strong>change</strong> $\Delta=f(y)-f(x)$ from the components that change, keeping some information about the current solution (its profit and weight, its loads), without recomputing $f(y)$.

<a id="box-4-prop-twoopt"></a>

!!! teorema "Proposition 30.3"

    Let $\sigma'$ be the tour obtained from $\sigma$ by the 2-opt move with positions $i<j$, and let $u_1=\sigma_i$, $v_1=\sigma_{i+1}$, $u_2=\sigma_j$, $v_2=\sigma_{j+1}$. Then $L(\sigma')=L(\sigma)+\Delta$, with

    $$
    \Delta \;=\; d_{u_1u_2}+d_{v_1v_2}-d_{u_1v_1}-d_{u_2v_2}.
    $$

??? dimostrazione "Proof"

    The tours $\sigma$ and $\sigma'$ have the same edges, except that $\sigma$ contains $\{u_1,v_1\}$ and $\{u_2,v_2\}$ while $\sigma'$ contains $\{u_1,u_2\}$ and $\{v_1,v_2\}$. The reversed path $v_1,\dots,u_2$ uses the same edges in the opposite direction, and its length does not change because the distances are symmetric. <span class="qed">□</span>

!!! chiave ""

    The change of length of a 2-opt move is computed in $O(1)$ time:

    $$
    \Delta \;=\; \underbrace{d_{u_1u_2}+d_{v_1v_2}}_{\text{added edges}}\;-\;\underbrace{d_{u_1v_1}+d_{u_2v_2}}_{\text{removed edges}}
    $$

    and the move is improving if and only if $\Delta<0$.

- For example, on the tour $(1,3,2,4,5)$ of the reference instance, of length $25$, the move with positions $i=2$, $j=4$ removes $\{3,2\}$ and $\{4,5\}$ and adds $\{3,4\}$ and $\{2,5\}$: $\Delta=d_{34}+d_{25}-d_{32}-d_{45}=4+4-4-7=-3$. The new tour $(1,3,4,2,5)$ has length $25-3=22$, as a direct computation confirms: $2+4+3+4+9=22$.

- <strong>Why it matters.</strong> The 2-opt neighbourhood has $\frac{n(n-3)}{2}$ moves. With the incremental evaluation an iteration of best improvement costs $O(n^2)$; recomputing every tour from scratch would cost $O(n^3)$. For $n=1000$ cities, an iteration evaluates $498\,500$ moves: about $5\cdot 10^5$ operations instead of about $5\cdot 10^8$. The reversal of the path, which costs $O(n)$, is performed only once per iteration, for the accepted move.

- The same idea applies to the other neighbourhoods:

<div class="tabella" markdown="0"><table>
<tr>
<th>move</th>
<th>change of the solution</th>
<th>time</th>
</tr>
<tr>
<td>KP, flip of <span class="arithmatex">\(i\)</span></td>
<td>profit <span class="arithmatex">\(\pm p_i\)</span>, weight <span class="arithmatex">\(\pm w_i\)</span></td>
<td><span class="arithmatex">\(O(1)\)</span></td>
</tr>
<tr>
<td>KP, swap <span class="arithmatex">\(i\)</span> out, <span class="arithmatex">\(k\)</span> in</td>
<td>profit <span class="arithmatex">\(+p_k-p_i\)</span>, weight <span class="arithmatex">\(+w_k-w_i\)</span></td>
<td><span class="arithmatex">\(O(1)\)</span></td>
</tr>
<tr>
<td>BPP, move <span class="arithmatex">\(i\)</span> from <span class="arithmatex">\(a\)</span> to <span class="arithmatex">\(b\)</span></td>
<td><span class="arithmatex">\(L_a-w_i\)</span>, <span class="arithmatex">\(L_b+w_i\)</span>; bin <span class="arithmatex">\(a\)</span> is emptied iff <span class="arithmatex">\(L_a=w_i\)</span></td>
<td><span class="arithmatex">\(O(1)\)</span></td>
</tr>
<tr>
<td>TSP, 2-opt</td>
<td><span class="arithmatex">\(d_{u_1u_2}+d_{v_1v_2}-d_{u_1v_1}-d_{u_2v_2}\)</span></td>
<td><span class="arithmatex">\(O(1)\)</span></td>
</tr>
<tr>
<td>TSP, Or-opt</td>
<td><span class="arithmatex">\(d_{pq}+d_{as_1}+d_{s_\ell b}-d_{ps_1}-d_{s_\ell q}-d_{ab}\)</span></td>
<td><span class="arithmatex">\(O(1)\)</span></td>
</tr>
<tr>
<td><span class="arithmatex">\(P\,||\,C_{\max}\)</span>, move <span class="arithmatex">\(j\)</span> from <span class="arithmatex">\(a\)</span> to <span class="arithmatex">\(h\)</span></td>
<td><span class="arithmatex">\(L_a-t_j\)</span>, <span class="arithmatex">\(L_h+t_j\)</span>; <span class="arithmatex">\(C_{\max}=\max\{L_a-t_j,\,L_h+t_j,\,\max_{q\ne a,h}L_q\}\)</span></td>
<td><span class="arithmatex">\(O(m)\)</span></td>
</tr>
</table></div>

- The Or-opt formula follows as for 2-opt: the move removes the edges $\{p,s_1\}$, $\{s_\ell,q\}$, $\{a,b\}$ and adds $\{p,q\}$, $\{a,s_1\}$, $\{s_\ell,b\}$, and the segment keeps its orientation.

- The cost of an iteration of $LS$ is the size of the neighbourhood times the cost of evaluating a move (plus the cost of applying the accepted move, which is paid once per iteration):

<div class="tabella" markdown="0"><table>
<tr>
<th>problem</th>
<th>neighbourhood</th>
<th>evaluation of a move</th>
<th>cost of an iteration</th>
</tr>
<tr>
<td>KP</td>
<td>flip</td>
<td><span class="arithmatex">\(O(1)\)</span></td>
<td><span class="arithmatex">\(O(n)\)</span></td>
</tr>
<tr>
<td>KP</td>
<td>swap</td>
<td><span class="arithmatex">\(O(1)\)</span></td>
<td><span class="arithmatex">\(O(n^2)\)</span></td>
</tr>
<tr>
<td>BPP</td>
<td>move</td>
<td><span class="arithmatex">\(O(1)\)</span></td>
<td><span class="arithmatex">\(O(n\cdot nb)\)</span></td>
</tr>
<tr>
<td>BPP</td>
<td>swap</td>
<td><span class="arithmatex">\(O(1)\)</span></td>
<td><span class="arithmatex">\(O(n^2)\)</span></td>
</tr>
<tr>
<td>TSP</td>
<td>2-opt, Or-opt</td>
<td><span class="arithmatex">\(O(1)\)</span></td>
<td><span class="arithmatex">\(O(n^2)\)</span></td>
</tr>
<tr>
<td>TSP</td>
<td>3-opt</td>
<td><span class="arithmatex">\(O(1)\)</span></td>
<td><span class="arithmatex">\(O(n^3)\)</span></td>
</tr>
<tr>
<td><span class="arithmatex">\(P\,||\,C_{\max}\)</span></td>
<td>move</td>
<td><span class="arithmatex">\(O(m)\)</span></td>
<td><span class="arithmatex">\(O(nm^2)\)</span></td>
</tr>
<tr>
<td><span class="arithmatex">\(P\,||\,C_{\max}\)</span></td>
<td>swap</td>
<td><span class="arithmatex">\(O(m)\)</span></td>
<td><span class="arithmatex">\(O(n^2m)\)</span></td>
</tr>
</table></div>

- The incremental evaluation does not change the local optima, nor the path followed by the search: it changes only the time needed to follow it. This is why the design of a local search always starts with two questions: <em>which moves?</em> and <em>how fast can a move be evaluated?</em>

---

**Next:** [30.7 TSP: 2-opt and Or-opt](tsp-2-opt-and-or-opt.md)
