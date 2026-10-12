---
title: "First improvement and best improvement"
---

# 25.5 First improvement and best improvement { #sez-sec-firstbest }

<div class="info-capitolo" markdown>

**Part 4 · Heuristic algorithms · Chapter 25** · [:material-book-open-variant: Chapter 25: Local search](index.md) · [:material-file-pdf-box: Lecture notes, volume 4 (PDF)](../../pdf/lecture-notes-4-heuristic-algorithms.pdf) · [:material-pencil: Exercises: Local search](../../exercises/local-search.md) · [:material-gesture-tap: App: TSP: nearest neighbour and 2-opt](../../lab/tsp-nn-2opt.md)

</div>

- The function $\textit{Improve}$ of $LS$ can stop at the <em>first</em> improving neighbour it finds, or examine the whole neighbourhood and return the <em>best</em> neighbour. The pseudo-codes are written for a minimization problem; for a maximization problem, “$<$” becomes “$>$”.

## 25.5.1 First improvement

!!! chiave ""

    The <em>first improvement</em> rule examines the neighbours of the current solution in a fixed order and returns the first neighbour that is better than the current solution. If no neighbour is better, it returns $\textit{NULL}$.

!!! algoritmo "Algorithm: First improvement"

    <div class="pseudocodice" markdown="0"><div class="pc" style="--liv:0"><strong>Input:</strong> a feasible solution <span class="arithmatex">\(x\)</span>, a neighbourhood <span class="arithmatex">\(N\)</span>, an objective function <span class="arithmatex">\(f\)</span> (to be minimized)</div><div class="pc" style="--liv:0"><strong>Output:</strong> the first neighbour <span class="arithmatex">\(y\in N(x)\)</span> with <span class="arithmatex">\(f(y)<f(x)\)</span>, or <span class="arithmatex">\(\textit{NULL}\)</span></div><div class="pc" style="--liv:0"><span class="pc-n">1</span><strong>Function</strong> FirstImprovement(<span class="arithmatex">\(x, N, f\)</span>)</div><div class="pc" style="--liv:1"><span class="pc-n">2</span><strong>for</strong> <span class="arithmatex">\(y \in N(x)\)</span>, in the order of the neighbourhood <strong>do</strong></div><div class="pc" style="--liv:2"><span class="pc-n">3</span><strong>if</strong> <span class="arithmatex">\(f(y) < f(x)\)</span> <strong>then</strong></div><div class="pc" style="--liv:3"><span class="pc-n">4</span><strong>return</strong> <span class="arithmatex">\(y\)</span> <span class="pc-com">▹ improving neighbour: accept it at once</span></div><div class="pc" style="--liv:2"><span class="pc-n">5</span><strong>end</strong></div><div class="pc" style="--liv:1"><span class="pc-n">6</span><strong>end</strong></div><div class="pc" style="--liv:1"><span class="pc-n">7</span><strong>return</strong> <span class="arithmatex">\(\textit{NULL}\)</span> <span class="pc-com">▹ <span class="arithmatex">\(x\)</span> is a local optimum</span></div></div>

## 25.5.2 Best improvement

!!! chiave ""

    The <em>best improvement</em> rule examines all the neighbours of the current solution and returns the best one, if it is better than the current solution; ties are broken in favour of the neighbour examined first. If no neighbour is better, it returns $\textit{NULL}$.

!!! algoritmo "Algorithm: Best improvement"

    <div class="pseudocodice" markdown="0"><div class="pc" style="--liv:0"><strong>Input:</strong> a feasible solution <span class="arithmatex">\(x\)</span>, a neighbourhood <span class="arithmatex">\(N\)</span>, an objective function <span class="arithmatex">\(f\)</span> (to be minimized)</div><div class="pc" style="--liv:0"><strong>Output:</strong> a best neighbour <span class="arithmatex">\(y\in N(x)\)</span> if <span class="arithmatex">\(f(y)<f(x)\)</span>, otherwise <span class="arithmatex">\(\textit{NULL}\)</span></div><div class="pc" style="--liv:0"><span class="pc-n">1</span><strong>Function</strong> BestImprovement(<span class="arithmatex">\(x, N, f\)</span>)</div><div class="pc" style="--liv:1"><span class="pc-n">2</span><span class="arithmatex">\(y^* := \textit{NULL}\)</span>
    <span class="arithmatex">\(f^* := f(x)\)</span> <span class="pc-com">▹ best improving neighbour found so far its value</span></div><div class="pc" style="--liv:1"><span class="pc-n">3</span><strong>for</strong> <span class="arithmatex">\(y \in N(x)\)</span>, in the order of the neighbourhood <strong>do</strong></div><div class="pc" style="--liv:2"><span class="pc-n">4</span><strong>if</strong> <span class="arithmatex">\(f(y) < f^*\)</span> <strong>then</strong></div><div class="pc" style="--liv:3"><span class="pc-n">5</span><span class="arithmatex">\(y^* \leftarrow y\)</span>
    <span class="arithmatex">\(f^* \leftarrow f(y)\)</span> <span class="pc-com">▹ better than all the neighbours seen so far</span></div><div class="pc" style="--liv:2"><span class="pc-n">6</span><strong>end</strong></div><div class="pc" style="--liv:1"><span class="pc-n">7</span><strong>end</strong></div><div class="pc" style="--liv:1"><span class="pc-n">8</span><strong>return</strong> <span class="arithmatex">\(y^*\)</span> <span class="pc-com">▹ NULL if <span class="arithmatex">\(x\)</span> is a local optimum</span></div></div>

## 25.5.3 Comparison

- In a local optimum both rules examine the whole neighbourhood: the last iteration costs the same.

- Before reaching it, <strong>first improvement</strong> makes <strong>cheaper</strong> iterations, since it stops at the first improving neighbour, but each move usually improves less, so it tends to make <strong>more</strong> moves. <strong>Best improvement</strong> makes the steepest descent: each iteration costs a full exploration of the neighbourhood, and each move improves as much as possible.

- The two rules follow different paths, so they may stop in <strong>different local optima</strong>. Neither rule is better than the other on all instances: the steepest move now can lead into a worse valley later.

- With first improvement the result depends on the order in which the neighbours are examined; randomizing that order is a simple way to obtain different local optima from the same starting solution.

<a id="box-3-ex-kpfirstbest"></a>

!!! esempio "Example 25.1: First and best improvement on the KP"

    We start from the solution of the greedy by weight $GR_w$ on the KP reference instance ($c=9$), i.e., $x=(0,0,1,1)$, of weight $6$ and profit $10$, with the neighbourhood flip+swap. The neighbours are examined in the order of Section [25.4](local-search-the-scheme.md#sez-sec-neigh):

    <div class="tabella" markdown="0"><table>
    <tr>
    <th>move</th>
    <th>neighbour</th>
    <th>weight</th>
    <th>profit</th>
    <th></th>
    </tr>
    <tr>
    <td>flip <span class="arithmatex">\(1\)</span></td>
    <td><span class="arithmatex">\((1,0,1,1)\)</span></td>
    <td><span class="arithmatex">\(11\)</span></td>
    <td>—</td>
    <td>infeasible</td>
    </tr>
    <tr>
    <td>flip <span class="arithmatex">\(2\)</span></td>
    <td><span class="arithmatex">\((0,1,1,1)\)</span></td>
    <td><span class="arithmatex">\(10\)</span></td>
    <td>—</td>
    <td>infeasible</td>
    </tr>
    <tr>
    <td>flip <span class="arithmatex">\(3\)</span></td>
    <td><span class="arithmatex">\((0,0,0,1)\)</span></td>
    <td><span class="arithmatex">\(3\)</span></td>
    <td><span class="arithmatex">\(4\)</span></td>
    <td></td>
    </tr>
    <tr>
    <td>flip <span class="arithmatex">\(4\)</span></td>
    <td><span class="arithmatex">\((0,0,1,0)\)</span></td>
    <td><span class="arithmatex">\(3\)</span></td>
    <td><span class="arithmatex">\(6\)</span></td>
    <td></td>
    </tr>
    <tr>
    <td>swap <span class="arithmatex">\(3\)</span> out, <span class="arithmatex">\(1\)</span> in</td>
    <td><span class="arithmatex">\((1,0,0,1)\)</span></td>
    <td><span class="arithmatex">\(8\)</span></td>
    <td><span class="arithmatex">\(14\)</span></td>
    <td><span class="arithmatex">\(\leftarrow\)</span> first improvement</td>
    </tr>
    <tr>
    <td>swap <span class="arithmatex">\(3\)</span> out, <span class="arithmatex">\(2\)</span> in</td>
    <td><span class="arithmatex">\((0,1,0,1)\)</span></td>
    <td><span class="arithmatex">\(7\)</span></td>
    <td><span class="arithmatex">\(11\)</span></td>
    <td></td>
    </tr>
    <tr>
    <td>swap <span class="arithmatex">\(4\)</span> out, <span class="arithmatex">\(1\)</span> in</td>
    <td><span class="arithmatex">\((1,0,1,0)\)</span></td>
    <td><span class="arithmatex">\(8\)</span></td>
    <td><span class="arithmatex">\(16\)</span></td>
    <td><span class="arithmatex">\(\leftarrow\)</span> best improvement</td>
    </tr>
    <tr>
    <td>swap <span class="arithmatex">\(4\)</span> out, <span class="arithmatex">\(2\)</span> in</td>
    <td><span class="arithmatex">\((0,1,1,0)\)</span></td>
    <td><span class="arithmatex">\(7\)</span></td>
    <td><span class="arithmatex">\(13\)</span></td>
    <td></td>
    </tr>
    </table></div>

    <strong>First improvement</strong> accepts $(1,0,0,1)$, of profit $14$, after examining $3$ feasible neighbours. From $(1,0,0,1)$ (weight $8$) the neighbours are examined again from the beginning:

    <div class="tabella" markdown="0"><table>
    <tr>
    <th>move</th>
    <th>neighbour</th>
    <th>weight</th>
    <th>profit</th>
    <th></th>
    </tr>
    <tr>
    <td>flip <span class="arithmatex">\(1\)</span></td>
    <td><span class="arithmatex">\((0,0,0,1)\)</span></td>
    <td><span class="arithmatex">\(3\)</span></td>
    <td><span class="arithmatex">\(4\)</span></td>
    <td></td>
    </tr>
    <tr>
    <td>flip <span class="arithmatex">\(2\)</span></td>
    <td><span class="arithmatex">\((1,1,0,1)\)</span></td>
    <td><span class="arithmatex">\(12\)</span></td>
    <td>—</td>
    <td>infeasible</td>
    </tr>
    <tr>
    <td>flip <span class="arithmatex">\(3\)</span></td>
    <td><span class="arithmatex">\((1,0,1,1)\)</span></td>
    <td><span class="arithmatex">\(11\)</span></td>
    <td>—</td>
    <td>infeasible</td>
    </tr>
    <tr>
    <td>flip <span class="arithmatex">\(4\)</span></td>
    <td><span class="arithmatex">\((1,0,0,0)\)</span></td>
    <td><span class="arithmatex">\(5\)</span></td>
    <td><span class="arithmatex">\(10\)</span></td>
    <td></td>
    </tr>
    <tr>
    <td>swap <span class="arithmatex">\(1\)</span> out, <span class="arithmatex">\(2\)</span> in</td>
    <td><span class="arithmatex">\((0,1,0,1)\)</span></td>
    <td><span class="arithmatex">\(7\)</span></td>
    <td><span class="arithmatex">\(11\)</span></td>
    <td></td>
    </tr>
    <tr>
    <td>swap <span class="arithmatex">\(1\)</span> out, <span class="arithmatex">\(3\)</span> in</td>
    <td><span class="arithmatex">\((0,0,1,1)\)</span></td>
    <td><span class="arithmatex">\(6\)</span></td>
    <td><span class="arithmatex">\(10\)</span></td>
    <td></td>
    </tr>
    <tr>
    <td>swap <span class="arithmatex">\(4\)</span> out, <span class="arithmatex">\(2\)</span> in</td>
    <td><span class="arithmatex">\((1,1,0,0)\)</span></td>
    <td><span class="arithmatex">\(9\)</span></td>
    <td><span class="arithmatex">\(17\)</span></td>
    <td><span class="arithmatex">\(\leftarrow\)</span> first improvement</td>
    </tr>
    </table></div>

    and $(1,1,0,0)$, of profit $17$, is accepted after $5$ feasible neighbours. It is the optimal solution, so no neighbour is better: the $6$ feasible neighbours are examined and the search stops. In total: $2$ moves, $3+5+6=14$ feasible neighbours examined.

    <strong>Best improvement</strong> examines all the $6$ feasible neighbours of $(0,0,1,1)$ and moves to $(1,0,1,0)$, of profit $16$. This is the solution of $GR$, whose neighbourhood is in the notes on definitions: the best neighbour is $(1,1,0,0)$, of profit $17$, reached with the swap “$3$ out, $2$ in”. The search stops there after examining its $6$ feasible neighbours. In total: $2$ moves, $6+6+6=18$ feasible neighbours examined.

    The two rules reach the optimum along different paths, $10\to14\to17$ and $10\to16\to17$, and first improvement examines fewer neighbours. Note that the flip neighbourhood alone would not have moved at all: from $(0,0,1,1)$ every feasible flip removes an item, so $(0,0,1,1)$, of profit $10$, is a local optimum for flip.

---

**Next:** [25.6 Evaluating a move incrementally](evaluating-a-move-incrementally.md)
