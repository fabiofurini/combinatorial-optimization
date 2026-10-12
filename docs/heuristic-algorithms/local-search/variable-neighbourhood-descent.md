---
title: "Variable neighbourhood descent"
---

# 31.11 Variable neighbourhood descent { #sez-sec-vnd }

<div class="info-capitolo" markdown>

**Part 4 · Heuristic algorithms · Chapter 31** · [:material-book-open-variant: Chapter 31: Local search](index.md) · [:material-file-pdf-box: Lecture notes, volume 4 (PDF)](../../pdf/lecture-notes-4-heuristic-algorithms.pdf) · [:material-pencil: Exercises: Local search](../../exercises/local-search.md) · [:material-gesture-tap: App: TSP: nearest neighbour and 2-opt](../../lab/tsp-nn-2opt.md)

</div>

- The examples of the previous sections show that a local optimum for one neighbourhood is often not a local optimum for another: the solution of $LPT$ for move and swap, the 2-opt local optimum of length $41$ for 2-opt and Or-opt. The natural idea is to use <strong>several neighbourhoods</strong> $N_1,\dots,N_K$, and to stop only when none of them contains an improving neighbour.

!!! chiave ""

    The <em>variable neighbourhood descent</em> (denoted by $VND$) explores the neighbourhoods $N_1,\dots,N_K$ in this order. It looks for an improving move in the current neighbourhood $N_k$: if it finds one, it applies it and goes back to $N_1$; otherwise it passes to $N_{k+1}$. It stops when the current solution is a local optimum for all the $K$ neighbourhoods.

!!! algoritmo "Algorithm: Variable neighbourhood descent"

    <div class="pseudocodice" markdown="0"><div class="pc" style="--liv:0"><strong>Input:</strong> a feasible solution <span class="arithmatex">\(x\)</span>, the steps <span class="arithmatex">\(\textit{Step}_1,\dots,\textit{Step}_K\)</span> of <span class="arithmatex">\(K\)</span> neighbourhoods, a rule</div><div class="pc" style="--liv:0"><strong>Output:</strong> a local optimum <span class="arithmatex">\(x\)</span> for all the <span class="arithmatex">\(K\)</span> neighbourhoods</div><div class="pc" style="--liv:0"><span class="pc-n">1</span><strong>Function</strong> VND(<span class="arithmatex">\(x, \textit{Step}_1,\dots,\textit{Step}_K, \textit{rule}\)</span>)</div><div class="pc" style="--liv:1"><span class="pc-n">2</span><span class="arithmatex">\(k := 1\)</span> <span class="pc-com">▹ current neighbourhood</span></div><div class="pc" style="--liv:1"><span class="pc-n">3</span><strong>while</strong> <span class="arithmatex">\(k \le K\)</span> <strong>do</strong></div><div class="pc" style="--liv:2"><span class="pc-n">4</span><strong>if</strong> <span class="arithmatex">\(\textit{Step}_k(x, \textit{rule})\)</span> <strong>then</strong></div><div class="pc" style="--liv:3"><span class="pc-n">5</span><span class="arithmatex">\(k \leftarrow 1\)</span> <span class="pc-com">▹ improving move applied: back to the first neighbourhood</span></div><div class="pc" style="--liv:2"><span class="pc-n">6</span><strong>else</strong></div><div class="pc" style="--liv:3"><span class="pc-n">7</span><span class="arithmatex">\(k \leftarrow k+1\)</span> <span class="pc-com">▹ local optimum for <span class="arithmatex">\(N_k\)</span>: next neighbourhood</span></div><div class="pc" style="--liv:2"><span class="pc-n">8</span><strong>end</strong></div><div class="pc" style="--liv:1"><span class="pc-n">9</span><strong>end</strong></div><div class="pc" style="--liv:1"><span class="pc-n">10</span><strong>return</strong> <span class="arithmatex">\(x\)</span></div></div>

<div class="colab-pulsanti" markdown="0"><span class="colab-etichetta">Run in Colab:</span><a class="colab-pulsante" href="https://colab.research.google.com/github/fabiofurini/combinatorial-optimization/blob/main/notebooks/local-search_python.ipynb" target="_blank" rel="noopener" title="Open the Python notebook of the chapter in Google Colab">Python</a><a class="colab-pulsante" href="https://colab.research.google.com/github/fabiofurini/combinatorial-optimization/blob/main/notebooks/local-search_cpp.ipynb" target="_blank" rel="noopener" title="Open the C++ notebook of the chapter in Google Colab">C++</a></div>

- $VND$ stops after a finite number of moves, by the argument of [Proposition 31.2](local-search-the-scheme.md#box-2-prop-termination). When it stops, $\textit{Step}_K$ has failed and, since the last improving move, all of $\textit{Step}_1,\dots,\textit{Step}_{K-1}$ have failed on the same solution: the solution returned is a local optimum for every $N_k$, i.e., for the union $N_1\cup\dots\cup N_K$.

- The neighbourhoods are ordered from the <strong>smallest and cheapest</strong> to the largest: the expensive neighbourhoods are explored only when the cheap ones are exhausted. $VND$ is the deterministic part of the variable neighbourhood search of Mladenovic and Hansen (<em>Computers &amp; Operations Research</em> 24, 1997).

<a id="box-16-ex-vndpcm"></a>

!!! esempio "Example 31.9: $VND$ on $P\,||\,C_{\max}$ with move and swap"

    On the reference instance, from the solution of $LPT$, with $N_1=$ move and $N_2=$ swap, and the makespan as objective:

    <div class="tabella" markdown="0"><table>
    <tr>
    <th><span class="arithmatex">\(k\)</span></th>
    <th>result of <span class="arithmatex">\(\textit{Step}_k\)</span></th>
    <th>loads</th>
    <th>next</th>
    </tr>
    <tr>
    <td><span class="arithmatex">\(1\)</span></td>
    <td>no improving move</td>
    <td><span class="arithmatex">\((11,8,8)\)</span></td>
    <td><span class="arithmatex">\(k=2\)</span></td>
    </tr>
    <tr>
    <td><span class="arithmatex">\(2\)</span></td>
    <td>swap jobs <span class="arithmatex">\(1\)</span> and <span class="arithmatex">\(3\)</span></td>
    <td><span class="arithmatex">\((10,8,9)\)</span></td>
    <td><span class="arithmatex">\(k=1\)</span></td>
    </tr>
    <tr>
    <td><span class="arithmatex">\(1\)</span></td>
    <td>no improving move</td>
    <td><span class="arithmatex">\((10,8,9)\)</span></td>
    <td><span class="arithmatex">\(k=2\)</span></td>
    </tr>
    <tr>
    <td><span class="arithmatex">\(2\)</span></td>
    <td>swap jobs <span class="arithmatex">\(3\)</span> and <span class="arithmatex">\(6\)</span></td>
    <td><span class="arithmatex">\((9,9,9)\)</span></td>
    <td><span class="arithmatex">\(k=1\)</span></td>
    </tr>
    <tr>
    <td><span class="arithmatex">\(1\)</span></td>
    <td>no improving move</td>
    <td><span class="arithmatex">\((9,9,9)\)</span></td>
    <td><span class="arithmatex">\(k=2\)</span></td>
    </tr>
    <tr>
    <td><span class="arithmatex">\(2\)</span></td>
    <td>no improving swap</td>
    <td><span class="arithmatex">\((9,9,9)\)</span></td>
    <td>stop</td>
    </tr>
    </table></div>

    In the solution with loads $(10,8,9)$ the best move gives makespan $11$ (job $5$ or job $7$ from machine $1$ to machine $2$), so move is again exhausted, and swap finds the optimum.

<a id="box-17-ex-vndtsp"></a>

!!! esempio "Example 31.10: $VND$ on the TSP with 2-opt and Or-opt"

    On the instance with $10$ cities of [Example 31.3](tsp-2-opt-and-or-opt.md#box-6-ex-tsp10), from the tour of $NN$ (length $49$), with $N_1=$ 2-opt, $N_2=$ Or-opt and the first-improvement rule, $VND$ makes the four 2-opt moves of the 2-opt local search ($49\to47\to46\to43\to41$), then the Or-opt move of [Example 31.4](tsp-2-opt-and-or-opt.md#box-7-ex-oropt), which inserts city $9$ between cities $3$ and $4$ ($41\to39$), and stops: the optimal tour is a local optimum for both neighbourhoods. With the best-improvement rule, 2-opt alone already reaches the optimum.

- On the two medium instances of Section [31.9](flat-landscapes-and-auxiliary-objectives.md#sez-sec-flat), with $100$ random starting solutions (seed $1$) and best improvement, $VND$ with $N_1=$ move and $N_2=$ swap gives:

<div class="tabella" markdown="0"><table>
<tr>
<th>instance</th>
<th>objective</th>
<th>runs ending in an optimum</th>
<th>average value</th>
</tr>
<tr>
<td><span class="arithmatex">\(P\,||\,C_{\max}\)</span>, <span class="arithmatex">\(m=4\)</span>, <span class="arithmatex">\(n=12\)</span></td>
<td><span class="arithmatex">\(C_{\max}\)</span></td>
<td><span class="arithmatex">\(15\)</span></td>
<td><span class="arithmatex">\(20.62\)</span></td>
</tr>
<tr>
<td><span class="arithmatex">\(P\,||\,C_{\max}\)</span>, <span class="arithmatex">\(m=4\)</span>, <span class="arithmatex">\(n=12\)</span></td>
<td><span class="arithmatex">\(\sum_h L_h^2\)</span></td>
<td><span class="arithmatex">\(68\)</span></td>
<td><span class="arithmatex">\(19.32\)</span></td>
</tr>
<tr>
<td>BPP, <span class="arithmatex">\(c=10\)</span>, <span class="arithmatex">\(n=12\)</span></td>
<td><span class="arithmatex">\(\sum_b L_b^2\)</span></td>
<td><span class="arithmatex">\(89\)</span></td>
<td><span class="arithmatex">\(5.11\)</span></td>
</tr>
</table></div>

- Compared with the single neighbourhoods of Section [31.9](flat-landscapes-and-auxiliary-objectives.md#sez-sec-flat), $VND$ with the auxiliary objective reaches the optimum in $68$ runs out of $100$ for $P\,||\,C_{\max}$ (move alone: $4$) and in $89$ for the BPP (move alone: $76$). Combining neighbourhoods and using the auxiliary objective are independent improvements, and they add up.

---

**Next:** [31.12 Multi-start local search](multi-start-local-search.md)
