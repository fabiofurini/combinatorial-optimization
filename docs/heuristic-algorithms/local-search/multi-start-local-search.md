---
title: "Multi-start local search"
---

# 30.12 Multi-start local search { #sez-sec-multistart }

<div class="info-capitolo" markdown>

**Part 4 · Heuristic algorithms · Chapter 30** · [:material-book-open-variant: Chapter 30: Local search](index.md) · [:material-file-pdf-box: Lecture notes, volume 4 (PDF)](../../pdf/lecture-notes-4-heuristic-algorithms.pdf) · [:material-pencil: Exercises: Local search](../../exercises/local-search.md) · [:material-gesture-tap: App: TSP: nearest neighbour and 2-opt](../../lab/tsp-nn-2opt.md)

</div>

- Local search stops in the local optimum of the valley where it starts. The simplest way to explore other valleys is to <strong>start again</strong> from a different solution, and keep the best local optimum.

!!! chiave ""

    The <em>multi-start local search</em> (denoted by $MSLS$) generates $M$ starting solutions, at random or with a randomized constructive heuristic, runs a local search from each of them, independently, and returns the best local optimum found.

!!! algoritmo "Algorithm: Multi-start 2-opt"

    <div class="pseudocodice" markdown="0"><div class="pc" style="--liv:0"><strong>Input:</strong> <span class="arithmatex">\(n\)</span> cities, distances <span class="arithmatex">\(d\)</span>, number of starts <span class="arithmatex">\(M\)</span>, seed <span class="arithmatex">\(s\)</span> of the generator, rule</div><div class="pc" style="--liv:0"><strong>Output:</strong> the best 2-opt local optimum <span class="arithmatex">\(\sigma^*\)</span> found, and its length <span class="arithmatex">\(L^*\)</span></div><div class="pc" style="--liv:0"><span class="pc-n">1</span><strong>Function</strong> MultiStartTwoOpt(<span class="arithmatex">\(n, d, M, s, \textit{rule}\)</span>)</div><div class="pc" style="--liv:1"><span class="pc-n">2</span><span class="arithmatex">\(L^* := +\infty\)</span> <span class="pc-com">▹ length of the best tour found so far</span></div><div class="pc" style="--liv:1"><span class="pc-n">3</span><strong>for</strong> <span class="arithmatex">\(r := 1\)</span> <strong>to</strong> <span class="arithmatex">\(M\)</span> <strong>do</strong></div><div class="pc" style="--liv:2"><span class="pc-n">4</span><span class="arithmatex">\(\sigma := \textit{RandomTour}(n, s)\)</span> <span class="pc-com">▹ random starting tour; updates the seed</span></div><div class="pc" style="--liv:2"><span class="pc-n">5</span><strong>while</strong> <span class="arithmatex">\(\textit{TwoOptStep}(n, d, \sigma, \textit{rule})\)</span> <strong>do</strong> <span class="pc-com">▹ repeat until <span class="arithmatex">\(\sigma\)</span> is a 2-opt local optimum</span></div><div class="pc" style="--liv:2"><span class="pc-n">6</span><strong>end</strong></div><div class="pc" style="--liv:2"><span class="pc-n">7</span><strong>if</strong> <span class="arithmatex">\(L(\sigma) < L^*\)</span> <strong>then</strong></div><div class="pc" style="--liv:3"><span class="pc-n">8</span><span class="arithmatex">\(L^* \leftarrow L(\sigma)\)</span>; <span class="arithmatex">\(\sigma^* \leftarrow \sigma\)</span> <span class="pc-com">▹ new best local optimum</span></div><div class="pc" style="--liv:2"><span class="pc-n">9</span><strong>end</strong></div><div class="pc" style="--liv:1"><span class="pc-n">10</span><strong>end</strong></div><div class="pc" style="--liv:1"><span class="pc-n">11</span><strong>return</strong> <span class="arithmatex">\((\sigma^*, L^*)\)</span></div></div>

<div class="colab-pulsanti" markdown="0"><span class="colab-etichetta">Run in Colab:</span><a class="colab-pulsante" href="https://colab.research.google.com/github/fabiofurini/combinatorial-optimization/blob/main/notebooks/local-search_python.ipynb" target="_blank" rel="noopener" title="Open the Python notebook of the chapter in Google Colab">Python</a><a class="colab-pulsante" href="https://colab.research.google.com/github/fabiofurini/combinatorial-optimization/blob/main/notebooks/local-search_cpp.ipynb" target="_blank" rel="noopener" title="Open the C++ notebook of the chapter in Google Colab">C++</a></div>

- The $M$ local searches are <strong>independent</strong>: they can run in parallel, and the result does not depend on their order. Multi-start is the simplest form of <strong>diversification</strong>.

<a id="box-18-ex-ms10"></a>

!!! esempio "Example 30.11: $MSLS$ on the TSP with $10$ cities"

    On the instance of [Example 30.3](tsp-2-opt-and-or-opt.md#box-6-ex-tsp10), $100$ random tours (seed $1$), each improved by a local search, end in the following local optima:

    <div class="tabella" markdown="0"><table>
    <tr>
    <th>neighbourhood</th>
    <th>rule</th>
    <th>runs ending in the optimum <span class="arithmatex">\(39\)</span></th>
    <th>other local optima (runs)</th>
    </tr>
    <tr>
    <td>2-opt</td>
    <td>first</td>
    <td><span class="arithmatex">\(46\)</span></td>
    <td><span class="arithmatex">\(41\)</span> (<span class="arithmatex">\(54\)</span>)</td>
    </tr>
    <tr>
    <td>2-opt</td>
    <td>best</td>
    <td><span class="arithmatex">\(87\)</span></td>
    <td><span class="arithmatex">\(41\)</span> (<span class="arithmatex">\(8\)</span>), <span class="arithmatex">\(43\)</span> (<span class="arithmatex">\(5\)</span>)</td>
    </tr>
    <tr>
    <td>Or-opt</td>
    <td>first</td>
    <td><span class="arithmatex">\(72\)</span></td>
    <td><span class="arithmatex">\(43\)</span> (<span class="arithmatex">\(26\)</span>), <span class="arithmatex">\(44\)</span> (<span class="arithmatex">\(2\)</span>)</td>
    </tr>
    <tr>
    <td>Or-opt</td>
    <td>best</td>
    <td><span class="arithmatex">\(77\)</span></td>
    <td><span class="arithmatex">\(43\)</span> (<span class="arithmatex">\(22\)</span>), <span class="arithmatex">\(44\)</span> (<span class="arithmatex">\(1\)</span>)</td>
    </tr>
    <tr>
    <td><span class="arithmatex">\(VND\)</span> (2-opt, Or-opt)</td>
    <td>first</td>
    <td><span class="arithmatex">\(100\)</span></td>
    <td>—</td>
    </tr>
    <tr>
    <td><span class="arithmatex">\(VND\)</span> (2-opt, Or-opt)</td>
    <td>best</td>
    <td><span class="arithmatex">\(100\)</span></td>
    <td>—</td>
    </tr>
    </table></div>

    With 2-opt and first improvement, the first random tour ends in the local optimum of length $41$ and the third one in the optimum. On this instance, best improvement is clearly better than first improvement, and $VND$ always finds the optimum, the only tour that is a local optimum for both neighbourhoods.

<a id="box-19-ex-ms30"></a>

!!! esempio "Example 30.12: $MSLS$ on the TSP with $30$ cities"

    The $30$ cities have coordinates $(\lfloor 101u_{2k-1}\rfloor,\lfloor 101u_{2k}\rfloor)$, $k=1,\dots,30$, where $u_1,u_2,\dots$ are generated with seed $12345$, and $d_{ij}$ is the Euclidean distance rounded to the nearest integer. The optimal tour, computed with a MIP solver, has length $z(I)=478$. The best of the $30$ tours of $NN$ (one for each starting city) has length $537$.

    The $100$ random tours (seed $1$) have an average length of $1768.73$ (between $1364$ and $2080$). After the 2-opt local search:

    <div class="tabella" markdown="0"><table>
    <tr>
    <th></th>
    <th>first improvement</th>
    <th>best improvement</th>
    </tr>
    <tr>
    <td>distinct local optima</td>
    <td><span class="arithmatex">\(59\)</span></td>
    <td><span class="arithmatex">\(54\)</span></td>
    </tr>
    <tr>
    <td>runs ending in the optimum</td>
    <td><span class="arithmatex">\(14\)</span></td>
    <td><span class="arithmatex">\(12\)</span></td>
    </tr>
    <tr>
    <td>average length (relative error)</td>
    <td><span class="arithmatex">\(488.45\)</span> (<span class="arithmatex">\(2.2\%\)</span>)</td>
    <td><span class="arithmatex">\(487.24\)</span> (<span class="arithmatex">\(1.9\%\)</span>)</td>
    </tr>
    <tr>
    <td>worst length (relative error)</td>
    <td><span class="arithmatex">\(537\)</span> (<span class="arithmatex">\(12.3\%\)</span>)</td>
    <td><span class="arithmatex">\(567\)</span> (<span class="arithmatex">\(18.6\%\)</span>)</td>
    </tr>
    <tr>
    <td>first run that finds the optimum</td>
    <td><span class="arithmatex">\(2\)</span></td>
    <td><span class="arithmatex">\(9\)</span></td>
    </tr>
    </table></div>

    The local optima are distributed as follows (number of runs per class of length):

    ![Figure 9](../../img/local-search/fig09.svg){ .fig loading=lazy  }

    Local search turns tours of length about $1769$ into tours within $2\%$ of the optimum on average; but every run ends in its own valley, and only about one run in eight reaches the optimum.

## 30.12.1 The limits of multi-start

- <strong>No memory.</strong> Each run starts from scratch and ignores what the previous runs found. If a run reaches the optimum with probability $q$, independently of the others, $M$ runs all miss it with probability $(1-q)^M$. With $q=0.12$, as in the last example with best improvement, $10$ runs miss the optimum with probability $0.88^{10}\approx 0.28$, and $37$ runs are needed to bring this probability below $1\%$.

- <strong>The probability $q$ shrinks.</strong> The number of local optima grows very quickly with $n$: on $10$ cities only $3$ tours are 2-opt local optima, on $30$ cities $100$ runs find more than $50$ distinct ones. On large instances a random start almost never reaches the optimum, and $(1-q)^M$ is close to $1$ for every reasonable $M$.

- <strong>Most of the time is spent descending.</strong> A random start is far from the good solutions, and the local search spends most of its moves on the descent from it; a good constructive heuristic gives better starting solutions, but few different ones.

- A better strategy would <strong>use the local optima already found</strong>: restart <em>near</em> a good local optimum rather than anywhere, or continue the search from it by accepting some worse moves. These are the ideas of the metaheuristics, studied in the next notes.

## 30.12.2 What local search gives, and what it does not

- Local search improves a feasible solution until it reaches a local optimum: a better <strong>primal bound</strong>, often much better than the starting one.

- It does not give a dual bound, and the fact that it stopped does not mean that it arrived. On the $30$-city instance we know that $478$ is optimal only because a MIP solver proved it; the local search alone could not tell the local optimum of length $479$, found in many runs, from the optimum.

!!! chiave ""

    A local optimum is not a better bound: it is a feasible solution, i.e., one side of the gap. Its quality can be assessed only against a dual bound computed in another way.

---

**Next:** [Typical mistakes · In summary](typical-mistakes.md)
