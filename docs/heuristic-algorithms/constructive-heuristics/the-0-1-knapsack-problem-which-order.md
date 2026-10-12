---
title: "The 0/1 knapsack problem: which order?"
---

# 30.4 The 0/1 knapsack problem: which order? { #sez-sec-KP }

<div class="info-capitolo" markdown>

**Part 4 · Heuristic algorithms · Chapter 30** · [:material-book-open-variant: Chapter 30: Constructive](index.md) · [:material-file-pdf-box: Lecture notes, volume 4 (PDF)](../../pdf/lecture-notes-4-heuristic-algorithms.pdf) · [:material-pencil: Exercises: Constructive](../../exercises/constructive-heuristics.md) · [:material-gesture-tap: App: Bin packing heuristics](../../lab/bin-packing-heuristics.md) · [:material-gesture-tap: App: List scheduling and LPT](../../lab/list-scheduling-lpt.md)

</div>

- For the KP the elements are the items, and the feasibility test is the capacity constraint: an item is selected if its weight does not exceed the residual capacity $rc$. Since the test is fixed, a greedy heuristic for the KP is completely determined by the <strong>order</strong> in which the items are examined. Three orders are natural:

!!! chiave ""

    <div class="tabella" markdown="0"><table>
    <tr>
    <th>by <strong>profit</strong> (<span class="arithmatex">\(GR_{p}\)</span>):</th>
    <th>non-increasing <span class="arithmatex">\(p_i\)</span></th>
    <th>most valuable items first</th>
    </tr>
    <tr>
    <td>by <strong>weight</strong> (<span class="arithmatex">\(GR_{w}\)</span>):</td>
    <td>non-decreasing <span class="arithmatex">\(w_i\)</span></td>
    <td>as many items as possible</td>
    </tr>
    <tr>
    <td>by <strong>efficiency</strong> (<span class="arithmatex">\(GR\)</span>):</td>
    <td>non-increasing <span class="arithmatex">\(\dfrac{p_i}{w_i}\)</span></td>
    <td>best value per unit of weight</td>
    </tr>
    </table></div>

    Ties are broken in favour of the item with the smallest index.

- The greedy by efficiency is the algorithm $GR$ of the notes on approximation algorithms for the KP, where it is analysed together with the Ext-Greedy algorithm $GR^e$; here we compare it with the other two orders.

!!! chiave ""

    The <em>greedy algorithm with order</em> $\rho$ is a constructive heuristic for the KP. It examines the items in the order $\rho=(\rho_1,\dots,\rho_n)$, a permutation of $\mathscr{I}$, starting from the empty knapsack, and selects each item if and only if it fits into the residual capacity.

!!! algoritmo "Algorithm: Greedy with order"

    <div class="pseudocodice" markdown="0"><div class="pc" style="--liv:0"><strong>Input:</strong> KP instance with <span class="arithmatex">\(n\)</span> items, profits <span class="arithmatex">\(p[1..n]\)</span>, weights <span class="arithmatex">\(w[1..n]\)</span>, capacity <span class="arithmatex">\(c\)</span>; order <span class="arithmatex">\(\rho[1..n]\)</span></div><div class="pc" style="--liv:0"><strong>Output:</strong> Feasible KP solution <span class="arithmatex">\(x[1..n]\)</span></div><div class="pc" style="--liv:0"><span class="pc-n">1</span><strong>Function</strong> GreedyOrderKP(<span class="arithmatex">\(n, c, w, p, \rho\)</span>)</div><div class="pc" style="--liv:1"><span class="pc-n">2</span><strong>for</strong> <span class="arithmatex">\(i := 1\)</span> <strong>to</strong> <span class="arithmatex">\(n\)</span> <strong>do</strong></div><div class="pc" style="--liv:2"><span class="pc-n">3</span><span class="arithmatex">\(x[i] \leftarrow 0\)</span> <span class="pc-com">▹ item <span class="arithmatex">\(i\)</span> is initially not selected</span></div><div class="pc" style="--liv:1"><span class="pc-n">4</span><strong>end</strong></div><div class="pc" style="--liv:1"><span class="pc-n">5</span><span class="arithmatex">\(rc := c\)</span> <span class="pc-com">▹ residual capacity</span></div><div class="pc" style="--liv:1"><span class="pc-n">6</span><strong>for</strong> <span class="arithmatex">\(k := 1\)</span> <strong>to</strong> <span class="arithmatex">\(n\)</span> <strong>do</strong></div><div class="pc" style="--liv:2"><span class="pc-n">7</span><span class="arithmatex">\(i := \rho[k]\)</span> <span class="pc-com">▹ <span class="arithmatex">\(k\)</span>-th item in the order</span></div><div class="pc" style="--liv:2"><span class="pc-n">8</span><strong>if</strong> <span class="arithmatex">\(w[i] \le rc\)</span> <strong>then</strong></div><div class="pc" style="--liv:3"><span class="pc-n">9</span><span class="arithmatex">\(x[i] \leftarrow 1\)</span>
    <span class="arithmatex">\(rc \leftarrow rc - w[i]\)</span> <span class="pc-com">▹ select item <span class="arithmatex">\(i\)</span> update residual capacity</span></div><div class="pc" style="--liv:2"><span class="pc-n">10</span><strong>end</strong></div><div class="pc" style="--liv:1"><span class="pc-n">11</span><strong>end</strong></div><div class="pc" style="--liv:1"><span class="pc-n">12</span><strong>return</strong> <span class="arithmatex">\(x\)</span></div></div>

<div class="colab-pulsanti" markdown="0"><span class="colab-etichetta">Run in Colab:</span><a class="colab-pulsante" href="https://colab.research.google.com/github/fabiofurini/combinatorial-optimization/blob/main/notebooks/constructive-heuristics_python.ipynb" target="_blank" rel="noopener" title="Open the Python notebook of the chapter in Google Colab">Python</a><a class="colab-pulsante" href="https://colab.research.google.com/github/fabiofurini/combinatorial-optimization/blob/main/notebooks/constructive-heuristics_cpp.ipynb" target="_blank" rel="noopener" title="Open the C++ notebook of the chapter in Google Colab">C++</a></div>

- The three heuristics differ only in the order $\rho$, computed once by sorting the items in $O(n\log n)$ time. Each criterion captures one aspect of a good solution and ignores the other: the profit ignores how much capacity an item consumes, the weight ignores how much an item is worth, and the efficiency balances the two, but ignores how well the items fill the knapsack.

<a id="box-3-ex-kp3"></a>

!!! esempio "Example 30.1: Three orders on the KP reference instance"

    On the KP reference instance ($c=9$) the three orders are

    <div class="tabella" markdown="0"><table>
    <tr>
    <th>criterion</th>
    <th>values</th>
    <th>order <span class="arithmatex">\(\rho\)</span></th>
    </tr>
    <tr>
    <td>profit</td>
    <td><span class="arithmatex">\(p=(10,7,6,4)\)</span></td>
    <td><span class="arithmatex">\((1,2,3,4)\)</span></td>
    </tr>
    <tr>
    <td>weight</td>
    <td><span class="arithmatex">\(w=(5,4,3,3)\)</span></td>
    <td><span class="arithmatex">\((3,4,2,1)\)</span></td>
    </tr>
    <tr>
    <td>efficiency</td>
    <td><span class="arithmatex">\(\frac{p}{w}=\left(\frac{10}{5},\frac{7}{4},\frac{6}{3},\frac{4}{3}\right)=(2,\,1.75,\,2,\,1.33)\)</span></td>
    <td><span class="arithmatex">\((1,3,2,4)\)</span></td>
    </tr>
    </table></div>

    (items $3$ and $4$ have the same weight, items $1$ and $3$ the same efficiency, and the ties are broken by the index). The executions, with the residual capacity after each step, are:

    <div class="tabella" markdown="0"><table>
    <tr>
    <th></th>
    <th>step 1</th>
    <th>step 2</th>
    <th>step 3</th>
    <th>step 4</th>
    </tr>
    <tr>
    <td><span class="arithmatex">\(GR_p\)</span></td>
    <td>item <span class="arithmatex">\(1\)</span>: in, <span class="arithmatex">\(rc=4\)</span></td>
    <td>item <span class="arithmatex">\(2\)</span>: in, <span class="arithmatex">\(rc=0\)</span></td>
    <td>item <span class="arithmatex">\(3\)</span>: out</td>
    <td>item <span class="arithmatex">\(4\)</span>: out</td>
    </tr>
    <tr>
    <td><span class="arithmatex">\(GR_w\)</span></td>
    <td>item <span class="arithmatex">\(3\)</span>: in, <span class="arithmatex">\(rc=6\)</span></td>
    <td>item <span class="arithmatex">\(4\)</span>: in, <span class="arithmatex">\(rc=3\)</span></td>
    <td>item <span class="arithmatex">\(2\)</span>: out</td>
    <td>item <span class="arithmatex">\(1\)</span>: out</td>
    </tr>
    <tr>
    <td><span class="arithmatex">\(GR\)</span></td>
    <td>item <span class="arithmatex">\(1\)</span>: in, <span class="arithmatex">\(rc=4\)</span></td>
    <td>item <span class="arithmatex">\(3\)</span>: in, <span class="arithmatex">\(rc=1\)</span></td>
    <td>item <span class="arithmatex">\(2\)</span>: out</td>
    <td>item <span class="arithmatex">\(4\)</span>: out</td>
    </tr>
    </table></div>

    Hence

    $$
    GR_p(I)=p_1+p_2=17, \qquad GR_w(I)=p_3+p_4=10, \qquad GR(I)=p_1+p_3=16 .
    $$

    The greedy by profit finds the optimal solution $\{1,2\}$, which fills the knapsack exactly; the greedy by efficiency, after items $1$ and $3$, is left with $rc=1$, too little for any other item; the greedy by weight takes the two light items, which are also the least valuable ones.

- On this instance the “naive” criterion wins. This is not a general rule: no order is the best on every instance, and <strong>each of the three orders can be arbitrarily bad</strong>. Let $c\ge 3$:

    - <strong>profit</strong>: one item with $p_1=2$, $w_1=c$ and $c$ items with $p_i=1$, $w_i=1$. $GR_p$ takes item $1$, which fills the knapsack: $GR_p(I)=2$, while the $c$ light items together give $z(I)=c$;

    - <strong>weight</strong>: two items with $p_1=1$, $w_1=1$ and $p_2=c$, $w_2=c$. $GR_w$ takes item $1$ and item $2$ no longer fits: $GR_w(I)=1$, while $z(I)=c$;

    - <strong>efficiency</strong>: two items with $p_1=2$, $w_1=1$ and $p_2=c$, $w_2=c$: this is the instance used in the notes on approximation algorithms to show that $r(GR)=+\infty$; here $GR(I)=2$ and $z(I)=c$.

    In all three cases the ratio $\frac{z(I)}{\mathscr{A}(I)}$ grows with $c$.

- The remedy studied in the notes on approximation algorithms is to <strong>combine</strong> two solutions: the Ext-Greedy algorithm returns the better of the solution of $GR$ and of the best single item, and this simple combination guarantees $\frac{z(I)}{GR^e(I)}\le 2$. Running several greedy heuristics and keeping the best solution is a general and cheap way to protect against the weakness of each single criterion.

---

**Next:** [30.5 The bin packing problem: first sort, then pack](the-bin-packing-problem-first-sort-then-pack.md)
