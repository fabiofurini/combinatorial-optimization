---
title: "The problems and the assumptions"
---

# 32.2 The problems and the assumptions { #sez-sec-problems }

<div class="info-capitolo" markdown>

**Part 4 · Heuristic algorithms · Chapter 32** · [:material-book-open-variant: Chapter 32: Metaheuristics](index.md) · [:material-file-pdf-box: Lecture notes, volume 4 (PDF)](../../pdf/lecture-notes-4-heuristic-algorithms.pdf) · [:material-pencil: Exercises: Metaheuristics](../../exercises/metaheuristics.md)

</div>

- The metaheuristics of these notes are illustrated on the four combinatorial optimization problems of the notes on heuristic algorithms. Their definitions and assumptions are given in the notes on combinatorial optimization problems; we recall them briefly.

<div class="tabella" markdown="0"><table>
<tr>
<th>problem</th>
<th>data</th>
<th>solution</th>
<th>objective</th>
</tr>
<tr>
<td>KP</td>
<td>items <span class="arithmatex">\(\mathscr{I}\)</span>, profits <span class="arithmatex">\(p_i\)</span>, weights <span class="arithmatex">\(w_i\)</span>, capacity <span class="arithmatex">\(c\)</span></td>
<td>subset of items</td>
<td>max total profit</td>
</tr>
<tr>
<td>BPP</td>
<td>items <span class="arithmatex">\(\mathscr{I}\)</span>, weights <span class="arithmatex">\(w_i\)</span>, capacity <span class="arithmatex">\(c\)</span></td>
<td>patterns <span class="arithmatex">\(P_b\)</span></td>
<td>min number of bins</td>
</tr>
<tr>
<td>TSP</td>
<td>cities <span class="arithmatex">\(\mathscr{V}\)</span>, distances <span class="arithmatex">\(d_{ij}\)</span></td>
<td>tour <span class="arithmatex">\(\sigma\)</span></td>
<td>min length <span class="arithmatex">\(L(\sigma)\)</span></td>
</tr>
<tr>
<td><span class="arithmatex">\(P\,||\,C_{\max}\)</span></td>
<td>jobs <span class="arithmatex">\(\mathscr{J}\)</span>, times <span class="arithmatex">\(t_j\)</span>, machines <span class="arithmatex">\(m\)</span></td>
<td>sets <span class="arithmatex">\(J_1,\dots,J_m\)</span></td>
<td>min makespan</td>
</tr>
</table></div>

- Every instance satisfies the assumptions of its problem: $w_i\le c$ for all items and $\sum_i w_i > c$ for the KP and the BPP; $n\ge 3$ and symmetric distances for the TSP; $n>m$ for $P\,||\,C_{\max}$. For $P\,||\,C_{\max}$, $L_h=\sum_{j\in J_h}t_j$ is the <strong>load</strong> of machine $h$ and $C_{\max}=\max_h L_h$.

- As in the notes on heuristic algorithms, $\mathscr{A}(I)$ is the value of the solution computed by the algorithm $\mathscr{A}$ on the instance $I$, and $z(I)$ is the optimal value. We write $f(S)$ for the value of a solution $S$, and we describe the algorithms for a <strong>minimization</strong> problem; for the KP, a maximization problem, the inequalities are reversed.

## 32.2.1 The neighbourhoods { #sez-sec-neigh }

- All the metaheuristics of these notes are built on the neighbourhoods of the notes on local search. We recall them by name, with the moves that define them; $n$ is the number of items, cities or jobs.

<div class="tabella" markdown="0"><table>
<tr>
<th>problem</th>
<th>name</th>
<th>move</th>
<th>size</th>
</tr>
<tr>
<td>KP</td>
<td>flip</td>
<td>add one item to the knapsack, or remove one</td>
<td><span class="arithmatex">\(n\)</span></td>
</tr>
<tr>
<td></td>
<td>swap</td>
<td>remove one selected item and add one unselected item</td>
<td><span class="arithmatex">\(\le \frac{n^2}{4}\)</span></td>
</tr>
<tr>
<td>BPP</td>
<td>move</td>
<td>move one item to another bin</td>
<td><span class="arithmatex">\(\le n\cdot nb\)</span></td>
</tr>
<tr>
<td></td>
<td>swap</td>
<td>exchange two items packed in different bins</td>
<td><span class="arithmatex">\(\le \frac{n(n-1)}{2}\)</span></td>
</tr>
<tr>
<td>TSP</td>
<td>2-opt</td>
<td>remove two non-adjacent edges of the tour and reconnect it with the two other edges, reversing the segment between them</td>
<td><span class="arithmatex">\(\frac{n(n-3)}{2}\)</span></td>
</tr>
<tr>
<td></td>
<td>Or-opt</td>
<td>move a segment of <span class="arithmatex">\(1\)</span>, <span class="arithmatex">\(2\)</span> or <span class="arithmatex">\(3\)</span> consecutive cities to another position</td>
<td><span class="arithmatex">\(O(n^2)\)</span></td>
</tr>
<tr>
<td><span class="arithmatex">\(P\,||\,C_{\max}\)</span></td>
<td>move</td>
<td>move one job to another machine</td>
<td><span class="arithmatex">\(n(m-1)\)</span></td>
</tr>
<tr>
<td></td>
<td>swap</td>
<td>exchange two jobs assigned to different machines</td>
<td><span class="arithmatex">\(\le \frac{n(n-1)}{2}\)</span></td>
</tr>
</table></div>

- A TSP tour is stored as a permutation $\sigma=(\sigma_1,\dots,\sigma_n)$ with $\sigma_1=1$. The <strong>2-opt move</strong> $(i,j)$, with $1\le i$, $i+2\le j\le n$ and $(i,j)\neq(1,n)$, removes the edges $(\sigma_i,\sigma_{i+1})$ and $(\sigma_j,\sigma_{j+1})$ (with $\sigma_{n+1}=\sigma_1$), adds the edges $(\sigma_i,\sigma_j)$ and $(\sigma_{i+1},\sigma_{j+1})$, and reverses the segment $\sigma_{i+1},\dots,\sigma_j$. Its effect on the length is computed in $O(1)$:

    $$
    \delta(i,j) \;=\; d_{\sigma_i\sigma_j} + d_{\sigma_{i+1}\sigma_{j+1}} - d_{\sigma_i\sigma_{i+1}} - d_{\sigma_j\sigma_{j+1}} .
    $$

- The objectives of the BPP and of $P\,||\,C_{\max}$ are <strong>flat</strong>: most moves do not change the number of bins, or the makespan. Two solutions with the same value are then compared with an <strong>auxiliary objective</strong>:

    - BPP: the sum of the squared loads $\sum_b \big(\sum_{i\in P_b} w_i\big)^2$, to be <em>maximized</em>: it grows when the items concentrate in fewer, fuller bins;

    - $P\,||\,C_{\max}$: the sum of the squared loads $\sum_h L_h^2$, to be <em>minimized</em>: it decreases when the loads become balanced.

    For $P\,||\,C_{\max}$ we compare two solutions <strong>lexicographically</strong>: first by $C_{\max}$, and if the makespans are equal, by $\sum_h L_h^2$. For move and swap this selects the same improving moves as the auxiliary objective $\sum_h L_h^2$ of the notes on local search: a transfer that decreases $\sum_h L_h^2$ never increases $C_{\max}$, and a transfer that decreases $C_{\max}$ also decreases $\sum_h L_h^2$.

- For the KP the flip neighbourhood contains infeasible solutions (adding an item may exceed the capacity). A local search either discards them or accepts them with a <strong>penalty</strong> on the excess weight; both options appear in these notes.

- The <strong>local searches</strong> used inside the metaheuristics are the descents of the notes on local search: TWOOPTLS (2-opt, best improvement) for the TSP, MOVEDESCENT (move, best improvement, lexicographic comparison) for $P\,||\,C_{\max}$, and KPLOCALSEARCH (feasible flips and swaps, best improvement) for the KP. In every best-improvement descent, ties between equally good moves are broken in favour of the first move found, scanning the indices in increasing order.

## 32.2.2 Random numbers { #sez-sec-random }

- Most metaheuristics make <strong>random choices</strong>. To make every example and every exercise reproducible, all the random numbers of these notes, and of the code in the Colab notebooks of the chapter, are produced by the <strong>minimal standard generator</strong> of Park and Miller (1988):

!!! chiave ""

    $$
    seed \;\leftarrow\; 16807\cdot seed \bmod (2^{31}-1), \qquad\qquad u \;=\; \frac{seed}{2^{31}-1}\in(0,1).
    $$

    A call $\textsc{Rand}()$ updates $seed$ and returns $u$. A random integer in $\{0,1,\dots,K-1\}$ is $\lfloor u\cdot K\rfloor$, and a random element of a list of $K$ elements is the element in position $1+\lfloor u\cdot K\rfloor$.

- The initial value of $seed$, the <strong>seed</strong>, is an integer in $\{1,\dots,2^{31}-2\}$. The same seed always gives the same sequence of numbers; different seeds give different runs of the same algorithm. With $seed=1$ the first numbers are, rounded to four decimals,

    $$
    0.0000,\ 0.1315,\ 0.7556,\ 0.4587,\ 0.5328,\ 0.2190,\ 0.0470,\ 0.6789,\ \dots
    $$

    The first number produced from a small seed is always very close to $0$; it is a property of the generator, not an error.

- In the worked examples the random numbers are written in the text, rounded to four decimals, so that every step can be checked by hand; the rounding never changes a decision.

## 32.2.3 The instances { #sez-sec-instances }

- The worked examples use the four <strong>reference instances</strong> of the notes on heuristic algorithms, whose optimal values are known:

<div class="tabella" markdown="0"><table>
<tr>
<th>problem</th>
<th>reference instance</th>
<th>optimal value and solution</th>
</tr>
<tr>
<td>KP</td>
<td><span class="arithmatex">\(p=(10,7,6,4)\)</span>, <span class="arithmatex">\(w=(5,4,3,3)\)</span>, <span class="arithmatex">\(c=9\)</span></td>
<td><span class="arithmatex">\(z(I)=17\)</span>, items <span class="arithmatex">\(\{1,2\}\)</span></td>
</tr>
<tr>
<td>BPP</td>
<td><span class="arithmatex">\(w=(4,4,5,3,2,3)\)</span>, <span class="arithmatex">\(c=7\)</span></td>
<td><span class="arithmatex">\(z(I)=3\)</span>, patterns <span class="arithmatex">\(\{1,4\},\{2,6\},\{3,5\}\)</span></td>
</tr>
<tr>
<td>TSP</td>
<td><span class="arithmatex">\(5\)</span> cities, distances <span class="arithmatex">\(d_{ij}\)</span> below</td>
<td><span class="arithmatex">\(z(I)=18\)</span>, tour <span class="arithmatex">\((1,3,5,2,4)\)</span></td>
</tr>
<tr>
<td><span class="arithmatex">\(P\,||\,C_{\max}\)</span></td>
<td><span class="arithmatex">\(t=(5,5,4,4,3,3,3)\)</span>, <span class="arithmatex">\(m=3\)</span></td>
<td><span class="arithmatex">\(z(I)=9\)</span>, sets <span class="arithmatex">\(\{1,3\},\{2,4\},\{5,6,7\}\)</span></td>
</tr>
</table></div>

$$
\begin{array}{c|ccccc}
\hline {d_{ij}} & {1} & {2} & {3} & {4} & {5} \\
\hline {1} & --- & {5} & {2} & {2} & {9} \\
{2} & {5} & --- & {4} & {3} & {4} \\
{3} & {2} & {4} & --- & {4} & {7} \\
{4} & {2} & {3} & {4} & --- & {7} \\
{5} & {9} & {4} & {7} & {7} & --- \\
\hline
\end{array}
$$

- The reference instances are small enough to follow every iteration by hand, but too small to show the behaviour of a metaheuristic over thousands of iterations. For the experiments we use one <strong>medium instance</strong> per problem, generated once with the random number generator of Section [32.2.2](#sez-sec-random) and fixed below. Their optimal values have been computed with an exact algorithm, and are used only to measure the quality of the heuristic solutions.

<a id="box-2-ex-tsp20"></a>

!!! esempio "Example 32.1: The medium TSP instance (TSP20)"

    $20$ cities in the plane, with integer coordinates $(x_i,y_i)$, and distances $d_{ij}=\big\lfloor \sqrt{(x_i-x_j)^2+(y_i-y_j)^2} + \frac{1}{2}\big\rfloor$ (the Euclidean distance rounded to the nearest integer):

    $$
    \begin{array}{c|cccccccccc}
    \hline {i} & {1} & {2} & {3} & {4} & {5} & {6} & {7} & {8} & {9} & {10} \\
    \hline {x_i} & {0} & {55} & {32} & {47} & {79} & {83} & {30} & {53} & {71} & {83} \\
    {y_i} & {18} & {35} & {11} & {47} & {20} & {11} & {20} & {17} & {4} & {40} \\
    \hline \hline {i} & {11} & {12} & {13} & {14} & {15} & {16} & {17} & {18} & {19} & {20} \\
    \hline {x_i} & {17} & {88} & {46} & {91} & {15} & {10} & {62} & {36} & {32} & {91} \\
    {y_i} & {52} & {18} & {16} & {32} & {0} & {37} & {28} & {16} & {33} & {39} \\
    \hline
    \end{array}
    $$

    ![Figure 1](../../img/metaheuristics/fig01.svg){ .fig loading=lazy  }

    ![Figure 2](../../img/metaheuristics/fig02.svg){ .fig loading=lazy  }

    The nearest neighbour tour from city $1$ has length $326$; the 2-opt local search started from it stops at a local optimum of length $319$, after two improving moves. The optimal value is $z(I)=291$: the local optimum is $9.6\%$ above it.

<a id="box-3-ex-medium"></a>

!!! esempio "Example 32.2: The medium instances of the KP, the BPP and $P\,||\,C_{\max}$"

    <strong>KP20</strong>: $n=20$ items, capacity $c=389$ (half of the total weight, rounded down),

    $$
    \begin{array}{l|cccccccccc}
    \hline {i} & {1} & {2} & {3} & {4} & {5} & {6} & {7} & {8} & {9} & {10} \\
    \hline {p_i} & {54} & {55} & {55} & {52} & {58} & {42} & {53} & {53} & {22} & {64} \\
    {w_i} & {39} & {43} & {49} & {47} & {44} & {35} & {43} & {44} & {16} & {50} \\
    \hline \hline {i} & {11} & {12} & {13} & {14} & {15} & {16} & {17} & {18} & {19} & {20} \\
    \hline {p_i} & {54} & {51} & {39} & {49} & {53} & {46} & {28} & {64} & {58} & {34} \\
    {w_i} & {40} & {42} & {28} & {38} & {46} & {39} & {14} & {50} & {45} & {27} \\
    \hline
    \end{array}
    $$

    The greedy algorithm by efficiency finds profit $490$, and the local search with flips and swaps started from it reaches $514$; the optimal value is $z(I)=521$.

    <strong>PCM15</strong>: $m=4$ machines and $n=15$ jobs with processing times

    $$
    t=(10,23,26,16,23,11,14,18,18,24,29,22,13,13,15).
    $$

    The total time is $275$, so $z(I)\ge\lceil 275/4\rceil=69$, and an assignment of makespan $69$ exists: $z(I)=69$. LPT finds makespan $73$.

    <strong>BPP24</strong>: bins of capacity $c=100$ and $n=24$ items with weights

    $$
    w=(30,40,57,22,37,23,34,34,55,51,21,47,22,24,22,34,20,51,25,54,35,27,55,48).
    $$

    The total weight is $868$, so at least $\lceil 868/100\rceil=9$ bins are needed, and a packing into $9$ bins exists: $z(I)=9$. FF and FFD both use $10$ bins.

---

**Next:** [How to escape from a local optimum · Simulated annealing](how-to-escape-from-a-local-optimum.md)
