---
title: "Variable neighbourhood search"
---

# 31.7 Variable neighbourhood search { #sez-sec-vns }

<div class="info-capitolo" markdown>

**Part 4 · Heuristic algorithms · Chapter 31** · [:material-book-open-variant: Chapter 31: Metaheuristics](index.md) · [:material-file-pdf-box: Lecture notes, volume 4 (PDF)](../../pdf/lecture-notes-4-heuristic-algorithms.pdf) · [:material-pencil: Exercises: Metaheuristics](../../exercises/metaheuristics.md)

</div>

!!! chiave ""

    <em>Variable neighbourhood search</em> (denoted by $VNS$) uses a sequence of neighbourhoods $N_1,N_2,\dots,N_{k_{\max}}$ of increasing size. From the current local optimum it draws a random solution in $N_k$ (<em>shaking</em>), applies a local search to it, and moves to the new local optimum if it is better, restarting from $k=1$; otherwise it tries the next, larger neighbourhood $N_{k+1}$.

- The pseudo-code of $VNS$ for $P\,||\,C_{\max}$, where $N_k$ contains the assignments obtained with $k$ moves and the local search is MOVEDESCENT, reads as follows:

!!! algoritmo "Algorithm: Variable neighbourhood search for $P\,||\,C_{\max}$"

    <div class="pseudocodice" markdown="0"><div class="pc" style="--liv:0"><strong>Input:</strong> times <span class="arithmatex">\(t[1..n]\)</span>, <span class="arithmatex">\(m\)</span> machines, starting assignment <span class="arithmatex">\(mach[1..n]\)</span>, <span class="arithmatex">\(k_{\max}\)</span>, <span class="arithmatex">\(maxIter\)</span></div><div class="pc" style="--liv:0"><strong>Output:</strong> an assignment <span class="arithmatex">\(mach\)</span> and its makespan <span class="arithmatex">\(C\)</span></div><div class="pc" style="--liv:0"><span class="pc-n">1</span><strong>Function</strong> VNS(<span class="arithmatex">\(t, m, mach, k_{\max}, maxIter\)</span>)</div><div class="pc" style="--liv:1"><span class="pc-n">2</span><span class="arithmatex">\(\LB := \max\{\max_j t[j],\ \lceil \sum_j t[j]/m\rceil\}\)</span></div><div class="pc" style="--liv:1"><span class="pc-n">3</span><span class="arithmatex">\(mach := \textsc{MoveDescent}(mach)\)</span>;  <span class="arithmatex">\(L :=\)</span> loads of <span class="arithmatex">\(mach\)</span>;  <span class="arithmatex">\(C := \max_h L[h]\)</span></div><div class="pc" style="--liv:1"><span class="pc-n">4</span><span class="arithmatex">\(it := 0\)</span>;  <span class="arithmatex">\(k := 1\)</span></div><div class="pc" style="--liv:1"><span class="pc-n">5</span><strong>while</strong> <span class="arithmatex">\(it < maxIter\)</span> <strong>and</strong> <span class="arithmatex">\(C > \LB\)</span> <strong>do</strong></div><div class="pc" style="--liv:2"><span class="pc-n">6</span><span class="arithmatex">\(it := it+1\)</span></div><div class="pc" style="--liv:2"><span class="pc-n">7</span><span class="arithmatex">\(nw := \textsc{Shake}(mach, k)\)</span>
    <span class="arithmatex">\(nw := \textsc{MoveDescent}(nw)\)</span>;  <span class="arithmatex">\(Lnew :=\)</span> loads of <span class="arithmatex">\(nw\)</span> <span class="pc-com">▹ random solution in <span class="arithmatex">\(N_k\)</span> local search</span></div><div class="pc" style="--liv:2"><span class="pc-n">8</span><strong>if</strong> <span class="arithmatex">\(Lnew\)</span> is lexicographically better than <span class="arithmatex">\(L\)</span> <strong>then</strong></div><div class="pc" style="--liv:3"><span class="pc-n">9</span><span class="arithmatex">\(mach := nw\)</span>;  <span class="arithmatex">\(L := Lnew\)</span>;  <span class="arithmatex">\(k := 1\)</span>;  <span class="arithmatex">\(C := \max_h L[h]\)</span> <span class="pc-com">▹ move</span></div><div class="pc" style="--liv:2"><span class="pc-n">10</span><strong>else</strong></div><div class="pc" style="--liv:3"><span class="pc-n">11</span><strong>if</strong> <span class="arithmatex">\(k < k_{\max}\)</span> <strong>then</strong> <span class="arithmatex">\(k := k+1\)</span> <strong>else</strong> <span class="arithmatex">\(k := 1\)</span></div><div class="pc" style="--liv:2"><span class="pc-n">12</span><strong>end</strong></div><div class="pc" style="--liv:1"><span class="pc-n">13</span><strong>end</strong></div><div class="pc" style="--liv:1"><span class="pc-n">14</span><strong>return</strong> <span class="arithmatex">\(mach\)</span>, <span class="arithmatex">\(C\)</span></div><div class="pc" style="--liv:0"><span class="pc-n">15</span><strong>Function</strong> Shake(<span class="arithmatex">\(mach, k\)</span>)</div><div class="pc" style="--liv:1"><span class="pc-n">16</span><strong>for</strong> <span class="arithmatex">\(s := 1\)</span> <strong>to</strong> <span class="arithmatex">\(k\)</span> <strong>do</strong></div><div class="pc" style="--liv:2"><span class="pc-n">17</span><span class="arithmatex">\(j := 1+\lfloor \textsc{Rand}()\cdot n\rfloor\)</span>;  <span class="arithmatex">\(g := 1+\lfloor\textsc{Rand}()\cdot(m-1)\rfloor\)</span></div><div class="pc" style="--liv:2"><span class="pc-n">18</span><span class="arithmatex">\(mach[j] :=\)</span> the <span class="arithmatex">\(g\)</span>-th machine different from <span class="arithmatex">\(mach[j]\)</span></div><div class="pc" style="--liv:1"><span class="pc-n">19</span><strong>end</strong></div><div class="pc" style="--liv:1"><span class="pc-n">20</span><strong>return</strong> <span class="arithmatex">\(mach\)</span></div></div>

- $VNS$ was proposed by Mladenovic and Hansen (1997). It rests on three observations: a local optimum for one neighbourhood need not be a local optimum for another; a global optimum is a local optimum for every neighbourhood; and the local optima of different neighbourhoods are often close to each other.

- <strong>Shaking</strong> diversifies, and the size $k$ controls how much: small $k$ explores the solutions close to the current local optimum, larger $k$ goes farther only when the closer ones have failed. The <strong>local search</strong> intensifies. Returning to $k=1$ after every improvement concentrates the search near the new, better solution.

- The variable neighbourhood descent ($VND$) of the notes on local search also uses several neighbourhoods, but <em>deterministically</em>: it explores them completely, one after the other, and stops at a solution that is a local optimum for all of them. $VNS$ explores the large neighbourhoods only by <em>random samples</em>, which is what makes very large neighbourhoods usable; the local search inside $VNS$ can itself be a $VND$.

- Here $N_k$ contains the assignments obtained by moving $k$ jobs (or fewer, if the same job is drawn twice). Since a swap of two jobs is the combination of two moves, $N_2$ contains the swap neighbourhood: shaking with $k=2$ can reproduce the swaps that the move neighbourhood cannot see.

## 31.7.1 Example

<a id="box-8-ex-vnsPCM"></a>

!!! esempio "Example 31.7: $VNS$ on the $P\,||\,C_{\max}$ reference instance"

    We start from the LPT solution, with loads $(11,8,8)$, and use $k_{\max}=3$ and $seed=1$ (random numbers $0.0000$, $0.1315$, $0.7556$, $0.4587$, $0.5328$, $0.2190$, $0.0470$, $0.6789$). MOVEDESCENT does not change the LPT solution, which is a local optimum for the move neighbourhood ([Example 31.5](tabu-search.md#box-6-ex-tsPCM)). Each random move uses two numbers: $j=1+\lfloor 7u\rfloor$ and $g=1+\lfloor 2u\rfloor$.

    - <strong>Iteration 1</strong>, $k=1$: job $j=1+\lfloor 7\cdot 0.0000\rfloor=1$ moves from $M_1$ to the first other machine ($g=1+\lfloor 2\cdot 0.1315\rfloor=1$), $M_2$: loads $(6,13,8)$. MOVEDESCENT moves job $6$ from $M_2$ to $M_1$: loads $(9,10,8)$, $C_{\max}=10$, better than $11$. The new solution $J_1=\{5,6,7\}$, $J_2=\{1,2\}$, $J_3=\{3,4\}$ is accepted, and $k=1$.

    - <strong>Iteration 2</strong>, $k=1$: job $j=1+\lfloor 7\cdot 0.7556\rfloor=6$ moves from $M_1$ to $M_2$ ($g=1+\lfloor 2\cdot 0.4587\rfloor=1$): loads $(6,13,8)$. MOVEDESCENT moves job $6$ back to $M_1$ and returns the current solution, which is not better: $k=2$.

    - <strong>Iteration 3</strong>, $k=2$: job $j=1+\lfloor 7\cdot 0.5328\rfloor=4$ moves from $M_3$ to the first other machine $M_1$ ($g=1+\lfloor 2\cdot 0.2190\rfloor=1$); then job $j=1+\lfloor 7\cdot 0.0470\rfloor=1$ moves from $M_2$ to the second other machine $M_3$ ($g=1+\lfloor 2\cdot 0.6789\rfloor=2$): loads $(13,5,9)$. MOVEDESCENT moves job $4$ from $M_1$ to $M_2$: loads $(9,9,9)$. The solution is accepted, and since $C_{\max}=9=\LB$ the search stops: $VNS(I)=9=z(I)$.

    In terms of the current solution of iteration $3$, the two random moves and the descent have exchanged jobs $1$ and $4$: a swap, which the move neighbourhood of MOVEDESCENT cannot perform.

![Figure 14](../../img/metaheuristics/fig14.svg){ .fig loading=lazy  }

![Figure 15](../../img/metaheuristics/fig15.svg){ .fig loading=lazy  }

- On PCM15, from the LPT solution ($73$) and with at most $300$ iterations, $VNS$ gives the following makespans for $seed=1,\dots,10$, and the number of iterations performed:

<div class="tabella" markdown="0"><table>
<tr>
<th><span class="arithmatex">\(seed\)</span></th>
<th><span class="arithmatex">\(1\)</span></th>
<th><span class="arithmatex">\(2\)</span></th>
<th><span class="arithmatex">\(3\)</span></th>
<th><span class="arithmatex">\(4\)</span></th>
<th><span class="arithmatex">\(5\)</span></th>
<th><span class="arithmatex">\(6\)</span></th>
<th><span class="arithmatex">\(7\)</span></th>
<th><span class="arithmatex">\(8\)</span></th>
<th><span class="arithmatex">\(9\)</span></th>
<th><span class="arithmatex">\(10\)</span></th>
</tr>
<tr>
<td><span class="arithmatex">\(k_{\max}=1\)</span>: <span class="arithmatex">\(C_{\max}\)</span></td>
<td><span class="arithmatex">\(69\)</span></td>
<td><span class="arithmatex">\(70\)</span></td>
<td><span class="arithmatex">\(70\)</span></td>
<td><span class="arithmatex">\(70\)</span></td>
<td><span class="arithmatex">\(69\)</span></td>
<td><span class="arithmatex">\(69\)</span></td>
<td><span class="arithmatex">\(69\)</span></td>
<td><span class="arithmatex">\(69\)</span></td>
<td><span class="arithmatex">\(70\)</span></td>
<td><span class="arithmatex">\(69\)</span></td>
</tr>
<tr>
<td>iterations</td>
<td><span class="arithmatex">\(27\)</span></td>
<td><span class="arithmatex">\(300\)</span></td>
<td><span class="arithmatex">\(300\)</span></td>
<td><span class="arithmatex">\(300\)</span></td>
<td><span class="arithmatex">\(48\)</span></td>
<td><span class="arithmatex">\(59\)</span></td>
<td><span class="arithmatex">\(20\)</span></td>
<td><span class="arithmatex">\(43\)</span></td>
<td><span class="arithmatex">\(300\)</span></td>
<td><span class="arithmatex">\(13\)</span></td>
</tr>
<tr>
<td><span class="arithmatex">\(k_{\max}=2\)</span>: <span class="arithmatex">\(C_{\max}\)</span></td>
<td><span class="arithmatex">\(70\)</span></td>
<td><span class="arithmatex">\(69\)</span></td>
<td><span class="arithmatex">\(69\)</span></td>
<td><span class="arithmatex">\(69\)</span></td>
<td><span class="arithmatex">\(69\)</span></td>
<td><span class="arithmatex">\(70\)</span></td>
<td><span class="arithmatex">\(69\)</span></td>
<td><span class="arithmatex">\(70\)</span></td>
<td><span class="arithmatex">\(70\)</span></td>
<td><span class="arithmatex">\(69\)</span></td>
</tr>
<tr>
<td>iterations</td>
<td><span class="arithmatex">\(300\)</span></td>
<td><span class="arithmatex">\(41\)</span></td>
<td><span class="arithmatex">\(126\)</span></td>
<td><span class="arithmatex">\(285\)</span></td>
<td><span class="arithmatex">\(33\)</span></td>
<td><span class="arithmatex">\(300\)</span></td>
<td><span class="arithmatex">\(31\)</span></td>
<td><span class="arithmatex">\(300\)</span></td>
<td><span class="arithmatex">\(300\)</span></td>
<td><span class="arithmatex">\(26\)</span></td>
</tr>
<tr>
<td><span class="arithmatex">\(k_{\max}=3\)</span>: <span class="arithmatex">\(C_{\max}\)</span></td>
<td><span class="arithmatex">\(70\)</span></td>
<td><span class="arithmatex">\(69\)</span></td>
<td><span class="arithmatex">\(69\)</span></td>
<td><span class="arithmatex">\(69\)</span></td>
<td><span class="arithmatex">\(69\)</span></td>
<td><span class="arithmatex">\(69\)</span></td>
<td><span class="arithmatex">\(69\)</span></td>
<td><span class="arithmatex">\(70\)</span></td>
<td><span class="arithmatex">\(70\)</span></td>
<td><span class="arithmatex">\(69\)</span></td>
</tr>
<tr>
<td>iterations</td>
<td><span class="arithmatex">\(300\)</span></td>
<td><span class="arithmatex">\(32\)</span></td>
<td><span class="arithmatex">\(38\)</span></td>
<td><span class="arithmatex">\(29\)</span></td>
<td><span class="arithmatex">\(26\)</span></td>
<td><span class="arithmatex">\(11\)</span></td>
<td><span class="arithmatex">\(25\)</span></td>
<td><span class="arithmatex">\(300\)</span></td>
<td><span class="arithmatex">\(300\)</span></td>
<td><span class="arithmatex">\(25\)</span></td>
</tr>
</table></div>

- With $k_{\max}=3$, $VNS$ reaches the optimum $69$ in $7$ runs out of $10$, usually in a few tens of iterations; the best tabu search of Section [31.5.2](tabu-search.md#sez-sec-ts-tsp) needed a carefully tuned tenure. When $VNS$ fails, the search is stuck at $70$: the shaking explores at most three moves away, and the optimum is farther. Larger $k_{\max}$, or restarts, can be added at the price of more iterations.

---

**Next:** [31.8 GRASP](grasp.md)
