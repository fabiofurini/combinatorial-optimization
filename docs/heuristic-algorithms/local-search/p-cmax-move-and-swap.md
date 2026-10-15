---
title: "P||Cmax: move and swap"
---

# 31.8 $P\,||\,C_{\max}$: move and swap { #sez-sec-pcmax }

<div class="info-capitolo" markdown>

**Part 4 · Heuristic algorithms · Chapter 31** · [:material-book-open-variant: Chapter 31: Local search](index.md) · [:material-file-pdf-box: Lecture notes, volume 4 (PDF)](../../pdf/lecture-notes-4-heuristic-algorithms.pdf) · [:material-presentation: Slides (1/2)](../../pdf/slides-local-search-1.pdf) · [:material-presentation: Slides (2/2)](../../pdf/slides-local-search-2.pdf) · [:material-pencil: Exercises: Local search](../../exercises/local-search.md) · [:material-gesture-tap: App: TSP: nearest neighbour and 2-opt](../../lab/tsp-nn-2opt.md)

</div>

- The moves of $P\,||\,C_{\max}$ transfer processing time between two machines: a move of job $j$ from machine $a$ to machine $b$ transfers $\delta=t_j$ from $a$ to $b$; a swap of jobs $j$ (on $a$) and $k$ (on $b$) transfers $\delta=t_j-t_k$, which can be negative. In both cases the new loads are $L_a-\delta$ and $L_b+\delta$, and $F(L,a,b,\delta)$ denotes the resulting change of the objective.

## 31.8.1 The move local search

!!! chiave ""

    The <em>move</em> local search for $P\,||\,C_{\max}$ examines the reassignments of one job to another machine, applies an improving one chosen by the first- or the best-improvement rule, updates the two loads involved, and stops when no reassignment decreases the objective.

!!! algoritmo "Algorithm: Move step for $P\,||\,C_{\max}$"

    <div class="pseudocodice" markdown="0"><div class="pc" style="--liv:0"><strong>Input:</strong> <span class="arithmatex">\(n\)</span> jobs, <span class="arithmatex">\(m\)</span> machines, times <span class="arithmatex">\(t[1..n]\)</span>, assignment <span class="arithmatex">\(mach[1..n]\)</span>, loads <span class="arithmatex">\(L[1..m]\)</span>, rule</div><div class="pc" style="--liv:0"><strong>Output:</strong> <em>true</em> if an improving move was applied, <em>false</em> otherwise</div><div class="pc" style="--liv:0"><span class="pc-n">1</span><strong>Function</strong> PCmaxMoveStep(<span class="arithmatex">\(n, m, t, mach, L, \textit{rule}\)</span>)</div><div class="pc" style="--liv:1"><span class="pc-n">2</span><span class="arithmatex">\(\bar\Delta := 0\)</span>; <span class="arithmatex">\((\bar\jmath,\bar h) := (0,0)\)</span> <span class="pc-com">▹ best move found so far</span></div><div class="pc" style="--liv:1"><span class="pc-n">3</span><strong>for</strong> <span class="arithmatex">\(j := 1\)</span> <strong>to</strong> <span class="arithmatex">\(n\)</span> <strong>do</strong></div><div class="pc" style="--liv:2"><span class="pc-n">4</span><span class="arithmatex">\(a := mach[j]\)</span> <span class="pc-com">▹ machine of job <span class="arithmatex">\(j\)</span></span></div><div class="pc" style="--liv:2"><span class="pc-n">5</span><strong>for</strong> <span class="arithmatex">\(h := 1\)</span> <strong>to</strong> <span class="arithmatex">\(m\)</span> <strong>do</strong></div><div class="pc" style="--liv:3"><span class="pc-n">6</span><strong>if</strong> <span class="arithmatex">\(h = a\)</span> <strong>then</strong></div><div class="pc" style="--liv:4"><span class="pc-n">7</span><strong>continue</strong></div><div class="pc" style="--liv:3"><span class="pc-n">8</span><strong>end</strong></div><div class="pc" style="--liv:3"><span class="pc-n">9</span><span class="arithmatex">\(\Delta := F(L, a, h, t[j])\)</span> <span class="pc-com">▹ change of the objective</span></div><div class="pc" style="--liv:3"><span class="pc-n">10</span><strong>if</strong> <span class="arithmatex">\(\Delta < \bar\Delta\)</span> <strong>then</strong></div><div class="pc" style="--liv:4"><span class="pc-n">11</span><span class="arithmatex">\(\bar\Delta \leftarrow \Delta\)</span>; <span class="arithmatex">\((\bar\jmath,\bar h) \leftarrow (j,h)\)</span> <span class="pc-com">▹ improving move</span></div><div class="pc" style="--liv:4"><span class="pc-n">12</span><strong>if</strong> <span class="arithmatex">\(\textit{rule}=\textit{first}\)</span> <strong>then</strong></div><div class="pc" style="--liv:5"><span class="pc-n">13</span><strong>leave</strong> both loops</div><div class="pc" style="--liv:4"><span class="pc-n">14</span><strong>end</strong></div><div class="pc" style="--liv:3"><span class="pc-n">15</span><strong>end</strong></div><div class="pc" style="--liv:2"><span class="pc-n">16</span><strong>end</strong></div><div class="pc" style="--liv:1"><span class="pc-n">17</span><strong>end</strong></div><div class="pc" style="--liv:1"><span class="pc-n">18</span><strong>if</strong> <span class="arithmatex">\(\bar\jmath = 0\)</span> <strong>then</strong> <strong>return</strong> <em>false</em> <span class="pc-com">▹ no improving move: local optimum</span></div><div class="pc" style="--liv:1"><span class="pc-n">19</span><span class="arithmatex">\(L[mach[\bar\jmath]] \leftarrow L[mach[\bar\jmath]]-t[\bar\jmath]\)</span>; <span class="arithmatex">\(L[\bar h] \leftarrow L[\bar h]+t[\bar\jmath]\)</span>
    <span class="arithmatex">\(mach[\bar\jmath] \leftarrow \bar h\)</span> <span class="pc-com">▹ update the loads apply the move</span></div><div class="pc" style="--liv:1"><span class="pc-n">20</span><strong>return</strong> <em>true</em></div></div>

<div class="colab-pulsanti" markdown="0"><span class="colab-etichetta">Run in Colab:</span><a class="colab-pulsante" href="https://colab.research.google.com/github/fabiofurini/combinatorial-optimization/blob/main/notebooks/local-search_python.ipynb" target="_blank" rel="noopener" title="Open the Python notebook of the chapter in Google Colab">Python</a><a class="colab-pulsante" href="https://colab.research.google.com/github/fabiofurini/combinatorial-optimization/blob/main/notebooks/local-search_cpp.ipynb" target="_blank" rel="noopener" title="Open the C++ notebook of the chapter in Google Colab">C++</a></div>

## 31.8.2 The swap local search

!!! chiave ""

    The <em>swap</em> local search for $P\,||\,C_{\max}$ examines the exchanges of two jobs on different machines, applies an improving one chosen by the first- or the best-improvement rule, updates the two loads involved, and stops when no exchange decreases the objective.

!!! algoritmo "Algorithm: Swap step for $P\,||\,C_{\max}$"

    <div class="pseudocodice" markdown="0"><div class="pc" style="--liv:0"><strong>Input:</strong> <span class="arithmatex">\(n\)</span> jobs, <span class="arithmatex">\(m\)</span> machines, times <span class="arithmatex">\(t[1..n]\)</span>, assignment <span class="arithmatex">\(mach[1..n]\)</span>, loads <span class="arithmatex">\(L[1..m]\)</span>, rule</div><div class="pc" style="--liv:0"><strong>Output:</strong> <em>true</em> if an improving swap was applied, <em>false</em> otherwise</div><div class="pc" style="--liv:0"><span class="pc-n">1</span><strong>Function</strong> PCmaxSwapStep(<span class="arithmatex">\(n, m, t, mach, L, \textit{rule}\)</span>)</div><div class="pc" style="--liv:1"><span class="pc-n">2</span><span class="arithmatex">\(\bar\Delta := 0\)</span>; <span class="arithmatex">\((\bar\jmath,\bar k) := (0,0)\)</span> <span class="pc-com">▹ best swap found so far</span></div><div class="pc" style="--liv:1"><span class="pc-n">3</span><strong>for</strong> <span class="arithmatex">\(j := 1\)</span> <strong>to</strong> <span class="arithmatex">\(n\)</span> <strong>do</strong></div><div class="pc" style="--liv:2"><span class="pc-n">4</span><strong>for</strong> <span class="arithmatex">\(k := j+1\)</span> <strong>to</strong> <span class="arithmatex">\(n\)</span> <strong>do</strong></div><div class="pc" style="--liv:3"><span class="pc-n">5</span><span class="arithmatex">\(a := mach[j]\)</span>; <span class="arithmatex">\(b := mach[k]\)</span></div><div class="pc" style="--liv:3"><span class="pc-n">6</span><strong>if</strong> <span class="arithmatex">\(a = b\)</span> <strong>or</strong> <span class="arithmatex">\(t[j]=t[k]\)</span> <strong>then</strong> <strong>continue</strong> <span class="pc-com">▹ the loads would not change</span></div><div class="pc" style="--liv:3"><span class="pc-n">7</span><span class="arithmatex">\(\Delta := F(L, a, b, t[j]-t[k])\)</span> <span class="pc-com">▹ change of the objective</span></div><div class="pc" style="--liv:3"><span class="pc-n">8</span><strong>if</strong> <span class="arithmatex">\(\Delta < \bar\Delta\)</span> <strong>then</strong></div><div class="pc" style="--liv:4"><span class="pc-n">9</span><span class="arithmatex">\(\bar\Delta \leftarrow \Delta\)</span>; <span class="arithmatex">\((\bar\jmath,\bar k) \leftarrow (j,k)\)</span> <span class="pc-com">▹ improving swap</span></div><div class="pc" style="--liv:4"><span class="pc-n">10</span><strong>if</strong> <span class="arithmatex">\(\textit{rule}=\textit{first}\)</span> <strong>then</strong></div><div class="pc" style="--liv:5"><span class="pc-n">11</span><strong>leave</strong> both loops</div><div class="pc" style="--liv:4"><span class="pc-n">12</span><strong>end</strong></div><div class="pc" style="--liv:3"><span class="pc-n">13</span><strong>end</strong></div><div class="pc" style="--liv:2"><span class="pc-n">14</span><strong>end</strong></div><div class="pc" style="--liv:1"><span class="pc-n">15</span><strong>end</strong></div><div class="pc" style="--liv:1"><span class="pc-n">16</span><strong>if</strong> <span class="arithmatex">\(\bar\jmath = 0\)</span> <strong>then</strong> <strong>return</strong> <em>false</em> <span class="pc-com">▹ no improving swap: local optimum</span></div><div class="pc" style="--liv:1"><span class="pc-n">17</span><span class="arithmatex">\(a := mach[\bar\jmath]\)</span>; <span class="arithmatex">\(b := mach[\bar k]\)</span>; <span class="arithmatex">\(\delta := t[\bar\jmath]-t[\bar k]\)</span></div><div class="pc" style="--liv:1"><span class="pc-n">18</span><span class="arithmatex">\(L[a] \leftarrow L[a]-\delta\)</span>; <span class="arithmatex">\(L[b] \leftarrow L[b]+\delta\)</span>
    <span class="arithmatex">\(mach[\bar\jmath] \leftarrow b\)</span>; <span class="arithmatex">\(mach[\bar k] \leftarrow a\)</span> <span class="pc-com">▹ update the loads apply the swap</span></div><div class="pc" style="--liv:1"><span class="pc-n">19</span><strong>return</strong> <em>true</em></div></div>

<div class="colab-pulsanti" markdown="0"><span class="colab-etichetta">Run in Colab:</span><a class="colab-pulsante" href="https://colab.research.google.com/github/fabiofurini/combinatorial-optimization/blob/main/notebooks/local-search_python.ipynb" target="_blank" rel="noopener" title="Open the Python notebook of the chapter in Google Colab">Python</a><a class="colab-pulsante" href="https://colab.research.google.com/github/fabiofurini/combinatorial-optimization/blob/main/notebooks/local-search_cpp.ipynb" target="_blank" rel="noopener" title="Open the C++ notebook of the chapter in Google Colab">C++</a></div>

- For the makespan, the change of the objective is

!!! chiave ""

    $$
    F(L,a,b,\delta) \;=\; \max\Big\{\,L_a-\delta,\; L_b+\delta,\; \max_{q\ne a,b} L_q\Big\} \;-\; \max_{q} L_q ,
    $$

    computed in $O(m)$ time from the loads $L_1,\dots,L_m$ of the current solution.

- A move or a swap is improving if and only if $F(L,a,b,\delta)<0$. Since only $L_a$ and $L_b$ change, the makespan can decrease only if $a$ is the <strong>unique</strong> critical machine: if another machine has load $C_{\max}$, no move between two machines can lower the makespan.

- An iteration costs $O(nm^2)$ time for move and $O(n^2m)$ for swap, because of the $O(m)$ evaluation of $F$; keeping the loads sorted reduces it, but the simple version is enough here.

- A move changes the number of jobs on two machines, a swap keeps the number of jobs on every machine: if a machine has too many jobs, only a move can fix it, and the two neighbourhoods complement each other.

<a id="box-8-ex-lpt"></a>

!!! esempio "Example 31.5: The solution of $LPT$ is a local optimum for move, but not for swap"

    The solution of $LPT$ on the $P\,||\,C_{\max}$ reference instance has $J_1=\{1,5,7\}$, $J_2=\{2,6\}$, $J_3=\{3,4\}$, loads $(11,8,8)$ and $C_{\max}=11$. Machine $1$ is the unique critical machine.

    <strong>Move.</strong> The $14$ moves give the loads

    <div class="tabella" markdown="0"><table>
    <tr>
    <th>move</th>
    <th>loads</th>
    <th><span class="arithmatex">\(C_{\max}\)</span></th>
    <th>move</th>
    <th>loads</th>
    <th><span class="arithmatex">\(C_{\max}\)</span></th>
    </tr>
    <tr>
    <td>job <span class="arithmatex">\(1\)</span>: <span class="arithmatex">\(M_1\to M_2\)</span></td>
    <td><span class="arithmatex">\((6,13,8)\)</span></td>
    <td><span class="arithmatex">\(13\)</span></td>
    <td>job <span class="arithmatex">\(4\)</span>: <span class="arithmatex">\(M_3\to M_2\)</span></td>
    <td><span class="arithmatex">\((11,12,4)\)</span></td>
    <td><span class="arithmatex">\(12\)</span></td>
    </tr>
    <tr>
    <td>job <span class="arithmatex">\(1\)</span>: <span class="arithmatex">\(M_1\to M_3\)</span></td>
    <td><span class="arithmatex">\((6,8,13)\)</span></td>
    <td><span class="arithmatex">\(13\)</span></td>
    <td>job <span class="arithmatex">\(5\)</span>: <span class="arithmatex">\(M_1\to M_2\)</span></td>
    <td><span class="arithmatex">\((8,11,8)\)</span></td>
    <td><span class="arithmatex">\(11\)</span></td>
    </tr>
    <tr>
    <td>job <span class="arithmatex">\(2\)</span>: <span class="arithmatex">\(M_2\to M_1\)</span></td>
    <td><span class="arithmatex">\((16,3,8)\)</span></td>
    <td><span class="arithmatex">\(16\)</span></td>
    <td>job <span class="arithmatex">\(5\)</span>: <span class="arithmatex">\(M_1\to M_3\)</span></td>
    <td><span class="arithmatex">\((8,8,11)\)</span></td>
    <td><span class="arithmatex">\(11\)</span></td>
    </tr>
    <tr>
    <td>job <span class="arithmatex">\(2\)</span>: <span class="arithmatex">\(M_2\to M_3\)</span></td>
    <td><span class="arithmatex">\((11,3,13)\)</span></td>
    <td><span class="arithmatex">\(13\)</span></td>
    <td>job <span class="arithmatex">\(6\)</span>: <span class="arithmatex">\(M_2\to M_1\)</span></td>
    <td><span class="arithmatex">\((14,5,8)\)</span></td>
    <td><span class="arithmatex">\(14\)</span></td>
    </tr>
    <tr>
    <td>job <span class="arithmatex">\(3\)</span>: <span class="arithmatex">\(M_3\to M_1\)</span></td>
    <td><span class="arithmatex">\((15,8,4)\)</span></td>
    <td><span class="arithmatex">\(15\)</span></td>
    <td>job <span class="arithmatex">\(6\)</span>: <span class="arithmatex">\(M_2\to M_3\)</span></td>
    <td><span class="arithmatex">\((11,5,11)\)</span></td>
    <td><span class="arithmatex">\(11\)</span></td>
    </tr>
    <tr>
    <td>job <span class="arithmatex">\(3\)</span>: <span class="arithmatex">\(M_3\to M_2\)</span></td>
    <td><span class="arithmatex">\((11,12,4)\)</span></td>
    <td><span class="arithmatex">\(12\)</span></td>
    <td>job <span class="arithmatex">\(7\)</span>: <span class="arithmatex">\(M_1\to M_2\)</span></td>
    <td><span class="arithmatex">\((8,11,8)\)</span></td>
    <td><span class="arithmatex">\(11\)</span></td>
    </tr>
    <tr>
    <td>job <span class="arithmatex">\(4\)</span>: <span class="arithmatex">\(M_3\to M_1\)</span></td>
    <td><span class="arithmatex">\((15,8,4)\)</span></td>
    <td><span class="arithmatex">\(15\)</span></td>
    <td>job <span class="arithmatex">\(7\)</span>: <span class="arithmatex">\(M_1\to M_3\)</span></td>
    <td><span class="arithmatex">\((8,8,11)\)</span></td>
    <td><span class="arithmatex">\(11\)</span></td>
    </tr>
    </table></div>

    No move decreases the makespan: moving job $1$ away from machine $1$ makes the receiving machine reach $8+5=13$, and moving job $5$ or $7$ lowers machine $1$ to $8$ but raises the receiving machine to $8+3=11$. The solution of $LPT$ is a <strong>local optimum for move</strong>, with $C_{\max}=11$.

    <strong>Swap.</strong> The first swap examined exchanges job $1$ (on $M_1$, $t_1=5$) and job $3$ (on $M_3$, $t_3=4$): $\delta=1$, the loads become $(10,8,9)$ and $C_{\max}=10$. It is improving, and first improvement accepts it at once; best improvement examines all the $13$ swaps and finds two more with $C_{\max}=10$ (jobs $1$ and $4$, jobs $1$ and $6$), so it accepts the same swap, the first one found. Now $J_1=\{3,5,7\}$, $J_2=\{2,6\}$, $J_3=\{1,4\}$.

    In the second iteration, the swap of job $3$ (on $M_1$, $t_3=4$) and job $6$ (on $M_2$, $t_6=3$) has $\delta=1$ and gives the loads $(9,9,9)$: it is found after $9$ evaluations, and it is the only swap with $C_{\max}<10$, so both rules accept it. The new solution $J_1=\{5,6,7\}$, $J_2=\{2,3\}$, $J_3=\{1,4\}$ has $C_{\max}=9=\left\lceil 27/3\right\rceil$: it is <strong>optimal</strong>.

    ![Figure 5](../../img/local-search/fig05.svg){ .fig loading=lazy  }

- On this example the move neighbourhood stops at $11$, and the swap neighbourhood reaches the optimum $9$. As observed for the KP in the chapter [«Heuristic algorithms: definitions»](../heuristics.md), <strong>the local optimum depends on the neighbourhood</strong>.

- A larger neighbourhood does not always help. On the instance with $m=4$ machines and $12$ jobs with times $t=(11,10,9,8,7,7,6,5,4,4,3,2)$, whose optimal makespan is $z(I)=19=\lceil 76/4\rceil$, $LPT$ gives $J_1=\{1,8,10\}$, $J_2=\{2,7,11\}$, $J_3=\{3,6,12\}$, $J_4=\{4,5,9\}$, with loads $(20,19,18,19)$: this solution is a local optimum for both move and swap.

---

**Next:** [31.9 Flat landscapes and auxiliary objectives](flat-landscapes-and-auxiliary-objectives.md)
