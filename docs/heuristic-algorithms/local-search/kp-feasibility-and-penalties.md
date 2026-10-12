---
title: "KP: feasibility and penalties"
---

# 31.10 KP: feasibility and penalties { #sez-sec-kp }

<div class="info-capitolo" markdown>

**Part 4 · Heuristic algorithms · Chapter 31** · [:material-book-open-variant: Chapter 31: Local search](index.md) · [:material-file-pdf-box: Lecture notes, volume 4 (PDF)](../../pdf/lecture-notes-4-heuristic-algorithms.pdf) · [:material-pencil: Exercises: Local search](../../exercises/local-search.md) · [:material-gesture-tap: App: TSP: nearest neighbour and 2-opt](../../lab/tsp-nn-2opt.md)

</div>

- The representation of the KP by a binary vector $x$ describes also infeasible objects, whose weight exceeds the capacity. There are two ways of dealing with them:

    1. <strong>stay feasible</strong>: the neighbourhood contains only the feasible neighbours, as done so far;

    2. <strong>penalize</strong>: the infeasible vectors are allowed, and the search maximizes a function that subtracts from the profit a penalty proportional to the excess weight.

- Staying feasible can make the search short-sighted. In the chapter [«Heuristic algorithms: definitions»](../heuristics.md), $x=(1,0,1,0)$ is a local optimum for flip: to reach the optimal solution $(1,1,0,0)$ with flips one has to add item $2$ and remove item $3$, and the intermediate vector is either $(1,1,1,0)$, infeasible, or $(1,0,0,0)$, of profit $10<16$. The swap neighbourhood solves this case by performing the two flips at once; penalties solve it by letting the search walk through the infeasible vector.

- With penalties, the search space is the whole set $\{0,1\}^n$, and the function to maximize is

!!! chiave ""

    $$
    g_\alpha(x) \;=\; \sum_{j\in\mathscr{I}} p_j x_j \;-\; \alpha\cdot\max\Big\{0,\ \sum_{j\in\mathscr{I}} w_jx_j-c\Big\},
    $$

    where $\alpha>0$ is the <strong>penalty</strong> for each unit of excess weight. For a feasible $x$, $g_\alpha(x)$ is the profit of $x$.

## 31.10.1 Staying feasible

!!! chiave ""

    The <em>flip+swap</em> local search for the KP examines the flips and then the swaps of the current solution, discards those that exceed the capacity, applies an improving one chosen by the first- or the best-improvement rule, and stops when no feasible neighbour has a larger profit.

!!! algoritmo "Algorithm: Flip+swap step for the KP"

    <div class="pseudocodice" markdown="0"><div class="pc" style="--liv:0"><strong>Input:</strong> <span class="arithmatex">\(n\)</span> items, profits <span class="arithmatex">\(p[1..n]\)</span>, weights <span class="arithmatex">\(w[1..n]\)</span>, capacity <span class="arithmatex">\(c\)</span>, feasible solution <span class="arithmatex">\(x[1..n]\)</span>, rule</div><div class="pc" style="--liv:0"><strong>Output:</strong> <em>true</em> if an improving move was applied to <span class="arithmatex">\(x\)</span>, <em>false</em> otherwise</div><div class="pc" style="--liv:0"><span class="pc-n">1</span><strong>Function</strong> KPFlipSwapStep(<span class="arithmatex">\(n, p, w, c, x, \textit{rule}\)</span>)</div><div class="pc" style="--liv:1"><span class="pc-n">2</span><span class="arithmatex">\(W := \sum_{j=1}^n w[j]\,x[j]\)</span>
    <span class="arithmatex">\(\bar\Delta := 0\)</span>; <span class="arithmatex">\((\bar\jmath,\bar k) := (0,0)\)</span> <span class="pc-com">▹ weight of the current solution best move found so far (<span class="arithmatex">\(\bar k=0\)</span>: flip)</span></div><div class="pc" style="--liv:1"><span class="pc-n">3</span><strong>for</strong> <span class="arithmatex">\(j := 1\)</span> <strong>to</strong> <span class="arithmatex">\(n\)</span> <strong>do</strong> <span class="pc-com">▹ flip of item <span class="arithmatex">\(j\)</span></span></div><div class="pc" style="--liv:2"><span class="pc-n">4</span><span class="arithmatex">\(\Delta p := (1-2x[j])\,p[j]\)</span>; <span class="arithmatex">\(\Delta w := (1-2x[j])\,w[j]\)</span> <span class="pc-com">▹ remove, or add, item <span class="arithmatex">\(j\)</span></span></div><div class="pc" style="--liv:2"><span class="pc-n">5</span><strong>if</strong> <span class="arithmatex">\(W+\Delta w \le c\)</span> <strong>and</strong> <span class="arithmatex">\(\Delta p > \bar\Delta\)</span> <strong>then</strong></div><div class="pc" style="--liv:3"><span class="pc-n">6</span><span class="arithmatex">\(\bar\Delta \leftarrow \Delta p\)</span>; <span class="arithmatex">\((\bar\jmath,\bar k) \leftarrow (j,0)\)</span></div><div class="pc" style="--liv:3"><span class="pc-n">7</span><strong>if</strong> <span class="arithmatex">\(\textit{rule}=\textit{first}\)</span> <strong>then</strong></div><div class="pc" style="--liv:4"><span class="pc-n">8</span><strong>leave</strong> all the loops</div><div class="pc" style="--liv:3"><span class="pc-n">9</span><strong>end</strong></div><div class="pc" style="--liv:2"><span class="pc-n">10</span><strong>end</strong></div><div class="pc" style="--liv:1"><span class="pc-n">11</span><strong>end</strong></div><div class="pc" style="--liv:1"><span class="pc-n">12</span><strong>for</strong> <span class="arithmatex">\(j := 1\)</span> <strong>to</strong> <span class="arithmatex">\(n\)</span> with <span class="arithmatex">\(x[j]=1\)</span> <strong>do</strong> <span class="pc-com">▹ swap: <span class="arithmatex">\(j\)</span> out, <span class="arithmatex">\(k\)</span> in</span></div><div class="pc" style="--liv:2"><span class="pc-n">13</span><strong>for</strong> <span class="arithmatex">\(k := 1\)</span> <strong>to</strong> <span class="arithmatex">\(n\)</span> with <span class="arithmatex">\(x[k]=0\)</span> <strong>do</strong></div><div class="pc" style="--liv:3"><span class="pc-n">14</span><span class="arithmatex">\(\Delta p := p[k]-p[j]\)</span>; <span class="arithmatex">\(\Delta w := w[k]-w[j]\)</span></div><div class="pc" style="--liv:3"><span class="pc-n">15</span><strong>if</strong> <span class="arithmatex">\(W+\Delta w \le c\)</span> <strong>and</strong> <span class="arithmatex">\(\Delta p > \bar\Delta\)</span> <strong>then</strong></div><div class="pc" style="--liv:4"><span class="pc-n">16</span><span class="arithmatex">\(\bar\Delta \leftarrow \Delta p\)</span>; <span class="arithmatex">\((\bar\jmath,\bar k) \leftarrow (j,k)\)</span></div><div class="pc" style="--liv:4"><span class="pc-n">17</span><strong>if</strong> <span class="arithmatex">\(\textit{rule}=\textit{first}\)</span> <strong>then</strong></div><div class="pc" style="--liv:5"><span class="pc-n">18</span><strong>leave</strong> all the loops</div><div class="pc" style="--liv:4"><span class="pc-n">19</span><strong>end</strong></div><div class="pc" style="--liv:3"><span class="pc-n">20</span><strong>end</strong></div><div class="pc" style="--liv:2"><span class="pc-n">21</span><strong>end</strong></div><div class="pc" style="--liv:1"><span class="pc-n">22</span><strong>end</strong></div><div class="pc" style="--liv:1"><span class="pc-n">23</span><strong>if</strong> <span class="arithmatex">\(\bar\jmath = 0\)</span> <strong>then</strong> <strong>return</strong> <em>false</em> <span class="pc-com">▹ no improving move: local optimum</span></div><div class="pc" style="--liv:1"><span class="pc-n">24</span><span class="arithmatex">\(x[\bar\jmath] \leftarrow 1-x[\bar\jmath]\)</span> <span class="pc-com">▹ flip, or remove the item that goes out</span></div><div class="pc" style="--liv:1"><span class="pc-n">25</span><strong>if</strong> <span class="arithmatex">\(\bar k \ne 0\)</span> <strong>then</strong></div><div class="pc" style="--liv:2"><span class="pc-n">26</span><span class="arithmatex">\(x[\bar k] \leftarrow 1\)</span> <span class="pc-com">▹ add the item that comes in</span></div><div class="pc" style="--liv:1"><span class="pc-n">27</span><strong>end</strong></div><div class="pc" style="--liv:1"><span class="pc-n">28</span><strong>return</strong> <em>true</em></div></div>

<div class="colab-pulsanti" markdown="0"><span class="colab-etichetta">Run in Colab:</span><a class="colab-pulsante" href="https://colab.research.google.com/github/fabiofurini/combinatorial-optimization/blob/main/notebooks/local-search_python.ipynb" target="_blank" rel="noopener" title="Open the Python notebook of the chapter in Google Colab">Python</a><a class="colab-pulsante" href="https://colab.research.google.com/github/fabiofurini/combinatorial-optimization/blob/main/notebooks/local-search_cpp.ipynb" target="_blank" rel="noopener" title="Open the C++ notebook of the chapter in Google Colab">C++</a></div>

- With the first-improvement rule, if an improving flip is found the swaps are not examined. Only flips that <em>add</em> an item can improve the profit; flips that remove an item are kept in the neighbourhood for uniformity. An iteration costs $O(n^2)$ time, because of the swaps.

## 31.10.2 Penalizing the excess weight

!!! chiave ""

    The <em>penalty flip</em> local search for the KP examines the flips of the current vector, feasible or not, evaluates them with $g_\alpha$, applies an improving one chosen by the first- or the best-improvement rule, and stops when no flip increases $g_\alpha$.

!!! algoritmo "Algorithm: Penalty flip step for the KP"

    <div class="pseudocodice" markdown="0"><div class="pc" style="--liv:0"><strong>Input:</strong> <span class="arithmatex">\(n\)</span> items, profits <span class="arithmatex">\(p[1..n]\)</span>, weights <span class="arithmatex">\(w[1..n]\)</span>, capacity <span class="arithmatex">\(c\)</span>, penalty <span class="arithmatex">\(\alpha\)</span>, vector <span class="arithmatex">\(x[1..n]\)</span>, rule</div><div class="pc" style="--liv:0"><strong>Output:</strong> <em>true</em> if an improving flip was applied to <span class="arithmatex">\(x\)</span>, <em>false</em> otherwise</div><div class="pc" style="--liv:0"><span class="pc-n">1</span><strong>Function</strong> KPPenaltyFlipStep(<span class="arithmatex">\(n, p, w, c, \alpha, x, \textit{rule}\)</span>)</div><div class="pc" style="--liv:1"><span class="pc-n">2</span><span class="arithmatex">\(P := \sum_{j=1}^n p[j]\,x[j]\)</span>; <span class="arithmatex">\(W := \sum_{j=1}^n w[j]\,x[j]\)</span>
    <span class="arithmatex">\(g := P - \alpha \max\{0, W-c\}\)</span>
    <span class="arithmatex">\(\bar\Delta := 0\)</span>; <span class="arithmatex">\(\bar\jmath := 0\)</span> <span class="pc-com">▹ profit and weight of <span class="arithmatex">\(x\)</span> value of <span class="arithmatex">\(x\)</span> best flip found so far</span></div><div class="pc" style="--liv:1"><span class="pc-n">3</span><strong>for</strong> <span class="arithmatex">\(j := 1\)</span> <strong>to</strong> <span class="arithmatex">\(n\)</span> <strong>do</strong></div><div class="pc" style="--liv:2"><span class="pc-n">4</span><span class="arithmatex">\(P' := P+(1-2x[j])\,p[j]\)</span>; <span class="arithmatex">\(W' := W+(1-2x[j])\,w[j]\)</span>
    <span class="arithmatex">\(\Delta := P' - \alpha \max\{0, W'-c\} - g\)</span> <span class="pc-com">▹ flip of item <span class="arithmatex">\(j\)</span> change of <span class="arithmatex">\(g_\alpha\)</span></span></div><div class="pc" style="--liv:2"><span class="pc-n">5</span><strong>if</strong> <span class="arithmatex">\(\Delta > \bar\Delta\)</span> <strong>then</strong></div><div class="pc" style="--liv:3"><span class="pc-n">6</span><span class="arithmatex">\(\bar\Delta \leftarrow \Delta\)</span>; <span class="arithmatex">\(\bar\jmath \leftarrow j\)</span> <span class="pc-com">▹ improving flip</span></div><div class="pc" style="--liv:3"><span class="pc-n">7</span><strong>if</strong> <span class="arithmatex">\(\textit{rule}=\textit{first}\)</span> <strong>then</strong></div><div class="pc" style="--liv:4"><span class="pc-n">8</span><strong>leave</strong> the loop</div><div class="pc" style="--liv:3"><span class="pc-n">9</span><strong>end</strong></div><div class="pc" style="--liv:2"><span class="pc-n">10</span><strong>end</strong></div><div class="pc" style="--liv:1"><span class="pc-n">11</span><strong>end</strong></div><div class="pc" style="--liv:1"><span class="pc-n">12</span><strong>if</strong> <span class="arithmatex">\(\bar\jmath = 0\)</span> <strong>then</strong> <strong>return</strong> <em>false</em> <span class="pc-com">▹ no improving flip: local optimum</span></div><div class="pc" style="--liv:1"><span class="pc-n">13</span><span class="arithmatex">\(x[\bar\jmath] \leftarrow 1-x[\bar\jmath]\)</span> <span class="pc-com">▹ apply the flip</span></div><div class="pc" style="--liv:1"><span class="pc-n">14</span><strong>return</strong> <em>true</em></div></div>

<div class="colab-pulsanti" markdown="0"><span class="colab-etichetta">Run in Colab:</span><a class="colab-pulsante" href="https://colab.research.google.com/github/fabiofurini/combinatorial-optimization/blob/main/notebooks/local-search_python.ipynb" target="_blank" rel="noopener" title="Open the Python notebook of the chapter in Google Colab">Python</a><a class="colab-pulsante" href="https://colab.research.google.com/github/fabiofurini/combinatorial-optimization/blob/main/notebooks/local-search_cpp.ipynb" target="_blank" rel="noopener" title="Open the C++ notebook of the chapter in Google Colab">C++</a></div>

- The local optimum may be infeasible. The search must therefore remember the <strong>best feasible solution</strong> visited, which is the solution it returns.

<a id="box-14-ex-kppen"></a>

!!! esempio "Example 31.8: Penalties on the KP reference instance"

    We start from the solution of $GR$, $x=(1,0,1,0)$, of weight $8$ and profit $16$, which is a local optimum for the flip neighbourhood restricted to feasible solutions. The values $g_\alpha$ of its four flips are

    <div class="tabella" markdown="0"><table>
    <tr>
    <th>flip</th>
    <th>vector</th>
    <th>weight</th>
    <th>excess</th>
    <th><span class="arithmatex">\(\alpha=1\)</span></th>
    <th><span class="arithmatex">\(\alpha=2\)</span></th>
    <th><span class="arithmatex">\(\alpha=\frac94\)</span></th>
    <th><span class="arithmatex">\(\alpha=3\)</span></th>
    </tr>
    <tr>
    <td><span class="arithmatex">\(1\)</span></td>
    <td><span class="arithmatex">\((0,0,1,0)\)</span></td>
    <td><span class="arithmatex">\(3\)</span></td>
    <td><span class="arithmatex">\(0\)</span></td>
    <td><span class="arithmatex">\(6\)</span></td>
    <td><span class="arithmatex">\(6\)</span></td>
    <td><span class="arithmatex">\(6\)</span></td>
    <td><span class="arithmatex">\(6\)</span></td>
    </tr>
    <tr>
    <td><span class="arithmatex">\(2\)</span></td>
    <td><span class="arithmatex">\((1,1,1,0)\)</span></td>
    <td><span class="arithmatex">\(12\)</span></td>
    <td><span class="arithmatex">\(3\)</span></td>
    <td><span class="arithmatex">\(20\)</span></td>
    <td><span class="arithmatex">\(17\)</span></td>
    <td><span class="arithmatex">\(\frac{65}{4}\)</span></td>
    <td><span class="arithmatex">\(14\)</span></td>
    </tr>
    <tr>
    <td><span class="arithmatex">\(3\)</span></td>
    <td><span class="arithmatex">\((1,0,0,0)\)</span></td>
    <td><span class="arithmatex">\(5\)</span></td>
    <td><span class="arithmatex">\(0\)</span></td>
    <td><span class="arithmatex">\(10\)</span></td>
    <td><span class="arithmatex">\(10\)</span></td>
    <td><span class="arithmatex">\(10\)</span></td>
    <td><span class="arithmatex">\(10\)</span></td>
    </tr>
    <tr>
    <td><span class="arithmatex">\(4\)</span></td>
    <td><span class="arithmatex">\((1,0,1,1)\)</span></td>
    <td><span class="arithmatex">\(11\)</span></td>
    <td><span class="arithmatex">\(2\)</span></td>
    <td><span class="arithmatex">\(18\)</span></td>
    <td><span class="arithmatex">\(16\)</span></td>
    <td><span class="arithmatex">\(\frac{31}{2}\)</span></td>
    <td><span class="arithmatex">\(14\)</span></td>
    </tr>
    </table></div>

    The two rules make the same moves:

    - $\alpha=1$: the search adds item $2$ ($g_1=20$), then item $4$ ($g_1=27-6=21$), and stops in $(1,1,1,1)$, of weight $15$: every flip of it removes one item and gives $16$, $18$, $18$ or $20$. The penalty is too small: the local optimum is infeasible, and the best feasible solution visited is the starting one, of profit $16$.

    - $\alpha=2$: the search adds item $2$ ($g_2=17>16$) and stops in $(1,1,1,0)$, infeasible: removing item $3$ gives $(1,1,0,0)$ with $g_2=17$, not strictly better.

    - $\alpha=\frac94$: the search adds item $2$ ($g=\frac{65}{4}=16.25>16$) and then removes item $3$, reaching $(1,1,0,0)$, of profit $17$: the <strong>optimal</strong> solution, through an infeasible vector (see the figure).

    - $\alpha=3$: no flip improves, and the search stops at once in $(1,0,1,0)$, as the feasible search.

    ![Figure 8](../../img/local-search/fig08.svg){ .fig loading=lazy  }

<a id="box-15-prop-penalty"></a>

!!! teorema "Proposition 31.7"

    Let the data be integer and let $\alpha>\max_{j\in\mathscr{I}} p_j$. Then:

    1. from a feasible vector, no flip that produces an infeasible vector increases $g_\alpha$;

    2. every infeasible vector has a flip that increases $g_\alpha$.

??? dimostrazione "Proof"

    (1) If adding item $k$ to a feasible vector produces an excess $e\ge1$, then $g_\alpha$ changes by $p_k-\alpha e\le p_k-\alpha<0$. (2) Let $x$ be infeasible, with excess $e\ge 1$, and let $j$ be a selected item. Removing $j$ decreases the excess by $\min\{w_j,e\}\ge 1$, so $g_\alpha$ changes by $-p_j+\alpha\min\{w_j,e\}\ge -p_j+\alpha>0$. <span class="qed">□</span>

- With a <strong>large</strong> penalty the local optima are feasible, but the search never leaves the feasible region; with a <strong>small</strong> penalty it crosses the infeasible region, but may stop there. The useful values depend on the instance (here $\frac94$ works, $1$, $2$ and $3$ do not), so in practice $\alpha$ is adjusted during the search: increased while the search stays among infeasible vectors, decreased while it stays among feasible ones.

---

**Next:** [31.11 Variable neighbourhood descent](variable-neighbourhood-descent.md)
