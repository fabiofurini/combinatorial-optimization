---
title: "The travelling salesman problem: append or insert?"
---

# 24.7 The travelling salesman problem: append or insert? { #sez-sec-TSP }

<div class="info-capitolo" markdown>

**Part 4 · Heuristic algorithms · Chapter 24** · [:material-book-open-variant: Chapter 24: Constructive](index.md) · [:material-file-pdf-box: Lecture notes, volume 4 (PDF)](../../pdf/lecture-notes-4-heuristic-algorithms.pdf) · [:material-pencil: Exercises: Constructive](../../exercises/constructive-heuristics.md) · [:material-gesture-tap: App: Bin packing heuristics](../../lab/bin-packing-heuristics.md) · [:material-gesture-tap: App: List scheduling and LPT](../../lab/list-scheduling-lpt.md)

</div>

- For the TSP every permutation of the cities is a feasible tour, so the feasibility test is trivial, and the whole design is in the selection criterion. Two families of constructive heuristics are natural, and they differ in <strong>where</strong> the new city is placed:

    - <strong>append</strong>: the partial solution is a path, and the new city is added at its end;

    - <strong>insert</strong>: the partial solution is a closed subtour, and the new city is inserted between two consecutive cities, wherever it costs least.

## 24.7.1 Nearest neighbour { #sez-sec-NN }

!!! chiave ""

    The <em>Nearest Neighbour Algorithm</em> (denoted by $NN$) is a constructive heuristic for the TSP. Starting from a given city $s$, it repeatedly moves from the last visited city to the <em>nearest</em> city not yet visited (in case of ties, the one with the smallest index); when all the cities have been visited, it goes back to $s$.

!!! algoritmo "Algorithm: Nearest Neighbour"

    <div class="pseudocodice" markdown="0"><div class="pc" style="--liv:0"><strong>Input:</strong> TSP instance with <span class="arithmatex">\(n\)</span> cities, distances <span class="arithmatex">\(d[1..n][1..n]\)</span>; starting city <span class="arithmatex">\(s\)</span></div><div class="pc" style="--liv:0"><strong>Output:</strong> Tour <span class="arithmatex">\(\sigma[1..n]\)</span></div><div class="pc" style="--liv:0"><span class="pc-n">1</span><strong>Function</strong> NearestNeighbour(<span class="arithmatex">\(n, d, s\)</span>)</div><div class="pc" style="--liv:1"><span class="pc-n">2</span><span class="arithmatex">\(\sigma[1] \leftarrow s\)</span>
    <span class="arithmatex">\(visited := \{s\}\)</span> <span class="pc-com">▹ the path starts at <span class="arithmatex">\(s\)</span></span></div><div class="pc" style="--liv:1"><span class="pc-n">3</span><strong>for</strong> <span class="arithmatex">\(len := 2\)</span> <strong>to</strong> <span class="arithmatex">\(n\)</span> <strong>do</strong></div><div class="pc" style="--liv:2"><span class="pc-n">4</span><span class="arithmatex">\(last := \sigma[len-1]\)</span>
    <span class="arithmatex">\(k :=\)</span> the city <span class="arithmatex">\(j\notin visited\)</span> with minimum <span class="arithmatex">\(d[last][j]\)</span> (smallest index) <span class="pc-com">▹ last city of the path</span></div><div class="pc" style="--liv:2"><span class="pc-n">5</span><span class="arithmatex">\(\sigma[len] \leftarrow k\)</span>
    <span class="arithmatex">\(visited \leftarrow visited \cup \{k\}\)</span> <span class="pc-com">▹ append <span class="arithmatex">\(k\)</span> at the end</span></div><div class="pc" style="--liv:1"><span class="pc-n">6</span><strong>end</strong></div><div class="pc" style="--liv:1"><span class="pc-n">7</span><strong>return</strong> <span class="arithmatex">\(\sigma\)</span> <span class="pc-com">▹ the tour closes with the edge <span class="arithmatex">\((\sigma[n],s)\)</span></span></div></div>

- The criterion is dynamic: the distances that matter are those from the last city, which changes at every step. $NN$ runs in $O(n^2)$ time.

- <strong>The weakness of $NN$</strong> is visible in its last steps: the cities that are left are those that were never the nearest to anything, often far from each other and from $s$, and the closing edge back to $s$ is not chosen at all, it is forced.

<a id="box-11-ex-nn"></a>

!!! esempio "Example 24.7: $NN$ on the TSP reference instance"

    Starting from city $1$:

    1. from city $1$ the distances to $2,3,4,5$ are $5,2,2,9$: cities $3$ and $4$ are the nearest, and the tie is broken in favour of city $3$;

    2. from city $3$ the distances to $2,4,5$ are $4,4,7$: city $2$ (tie with $4$);

    3. from city $2$ the distances to $4,5$ are $3,4$: city $4$;

    4. from city $4$ only city $5$ is left, at distance $7$;

    5. the tour closes with the edge $(5,1)$, of length $9$.

    Hence $\sigma=(1,3,2,4,5)$ and

    $$
    NN(I)=d_{13}+d_{32}+d_{24}+d_{45}+d_{51}=2+4+3+7+9=25 ,
    $$

    $39\%$ more than $z(I)=18$; this is the tour used in the notes on the definitions of heuristic algorithms to illustrate the gap. The four edges chosen by the criterion have length $2+4+3+7=16$, and the forced closing edge alone costs $9$, the largest distance of the instance.

    ![Figure 5](../../img/constructive-heuristics/fig05.svg){ .fig loading=lazy  }

## 24.7.2 Multi-start nearest neighbour { #sez-sec-MSNN }

- The result of $NN$ depends on the starting city, which is an arbitrary choice: the tour is a cycle and has no natural first city. Since $NN$ is fast, it can simply be run from every city.

!!! chiave ""

    The <em>multi-start nearest neighbour algorithm</em> runs $NN$ once from every city $s\in\mathscr{V}$ and returns the shortest of the $n$ tours obtained (in case of ties, the first one found).

!!! algoritmo "Algorithm: Multi-start Nearest Neighbour"

    <div class="pseudocodice" markdown="0"><div class="pc" style="--liv:0"><strong>Input:</strong> TSP instance with <span class="arithmatex">\(n\)</span> cities, distances <span class="arithmatex">\(d[1..n][1..n]\)</span></div><div class="pc" style="--liv:0"><strong>Output:</strong> Tour <span class="arithmatex">\(\sigma^{best}[1..n]\)</span></div><div class="pc" style="--liv:0"><span class="pc-n">1</span><strong>Function</strong> MultiStartNN(<span class="arithmatex">\(n, d\)</span>)</div><div class="pc" style="--liv:1"><span class="pc-n">2</span><span class="arithmatex">\(L^{best} := +\infty\)</span></div><div class="pc" style="--liv:1"><span class="pc-n">3</span><strong>for</strong> <span class="arithmatex">\(s := 1\)</span> <strong>to</strong> <span class="arithmatex">\(n\)</span> <strong>do</strong></div><div class="pc" style="--liv:2"><span class="pc-n">4</span><span class="arithmatex">\(\sigma :=\)</span> NearestNeighbour(<span class="arithmatex">\(n, d, s\)</span>)</div><div class="pc" style="--liv:2"><span class="pc-n">5</span><strong>if</strong> <span class="arithmatex">\(L(\sigma) < L^{best}\)</span> <strong>then</strong></div><div class="pc" style="--liv:3"><span class="pc-n">6</span><span class="arithmatex">\(\sigma^{best} \leftarrow \sigma\)</span>, <span class="arithmatex">\(L^{best} \leftarrow L(\sigma)\)</span> <span class="pc-com">▹ new best tour</span></div><div class="pc" style="--liv:2"><span class="pc-n">7</span><strong>end</strong></div><div class="pc" style="--liv:1"><span class="pc-n">8</span><strong>end</strong></div><div class="pc" style="--liv:1"><span class="pc-n">9</span><strong>return</strong> <span class="arithmatex">\(\sigma^{best}\)</span></div></div>

- The running time is $n$ times that of $NN$, i.e., $O(n^3)$. Multi-start is the simplest way to turn an arbitrary choice into a search: each start gives a different solution, and the best one is kept.

<a id="box-12-ex-msnn"></a>

!!! esempio "Example 24.8: Multi-start $NN$ on the TSP reference instance"

    The five runs of $NN$ give

    <div class="tabella" markdown="0"><table>
    <tr>
    <th>start <span class="arithmatex">\(s\)</span></th>
    <th><span class="arithmatex">\(1\)</span></th>
    <th><span class="arithmatex">\(2\)</span></th>
    <th><span class="arithmatex">\(3\)</span></th>
    <th><span class="arithmatex">\(4\)</span></th>
    <th><span class="arithmatex">\(5\)</span></th>
    </tr>
    <tr>
    <td>tour</td>
    <td><span class="arithmatex">\((1,3,2,4,5)\)</span></td>
    <td><span class="arithmatex">\((2,4,1,3,5)\)</span></td>
    <td><span class="arithmatex">\((3,1,4,2,5)\)</span></td>
    <td><span class="arithmatex">\((4,1,3,2,5)\)</span></td>
    <td><span class="arithmatex">\((5,2,4,1,3)\)</span></td>
    </tr>
    <tr>
    <td><span class="arithmatex">\(L\)</span></td>
    <td><span class="arithmatex">\(25\)</span></td>
    <td><span class="arithmatex">\(18\)</span></td>
    <td><span class="arithmatex">\(18\)</span></td>
    <td><span class="arithmatex">\(19\)</span></td>
    <td><span class="arithmatex">\(18\)</span></td>
    </tr>
    </table></div>

    The tours from cities $2$, $3$ and $5$ are the optimal tour $(1,3,5,2,4)$, traversed from different cities and in different directions; the multi-start returns the tour from city $2$, of length $18=z(I)$.

    ![Figure 6](../../img/constructive-heuristics/fig06.svg){ .fig loading=lazy  }

## 24.7.3 Insertion heuristics { #sez-sec-INS }

- $NN$ can only add a city at the end of a path. An <strong>insertion heuristic</strong> keeps a closed <em>subtour</em> $T$ through some of the cities, and inserts the new city wherever it is cheapest. Inserting city $k$ between two consecutive cities $i$ and $j$ of $T$ replaces the edge $(i,j)$ with the edges $(i,k)$ and $(k,j)$, and increases the length by the <strong>insertion cost</strong>

!!! chiave ""

    $$
    \Delta(i,k,j) \;=\; d_{ik} + d_{kj} - d_{ij} \qquad \text{for every edge } (i,j) \text{ of the subtour } T .
    $$

    On metric instances $\Delta(i,k,j)\ge 0$, by the triangle inequality.

- Each step makes two decisions: <strong>which</strong> city is inserted (the selection rule) and <strong>where</strong> (always the edge of minimum insertion cost). The three classical heuristics differ only in the selection rule. Let $d(q,T)=\min_{i\in T} d_{qi}$ be the distance of city $q$ from the subtour.

!!! chiave ""

    The <em>insertion heuristics</em> for the TSP start from the subtour $T=(s)$ and, until all the cities are in $T$, select a city $k\notin T$ and insert it into the edge of $T$ of minimum insertion cost:

    <div class="tabella" markdown="0"><table>
    <tr>
    <th><strong>nearest insertion</strong> (<span class="arithmatex">\(NI\)</span>):</th>
    <th><span class="arithmatex">\(k\)</span> minimizes <span class="arithmatex">\(d(q,T)\)</span>, the distance from the subtour</th>
    </tr>
    <tr>
    <td><strong>farthest insertion</strong> (<span class="arithmatex">\(FI\)</span>):</td>
    <td><span class="arithmatex">\(k\)</span> maximizes <span class="arithmatex">\(d(q,T)\)</span></td>
    </tr>
    <tr>
    <td><strong>cheapest insertion</strong> (<span class="arithmatex">\(CI\)</span>):</td>
    <td><span class="arithmatex">\(k\)</span> minimizes <span class="arithmatex">\(\min\limits_{(i,j)\in T}\Delta(i,q,j)\)</span>, the cost of its insertion</td>
    </tr>
    </table></div>

    Ties are broken in favour of the smallest index, for the city and for the edge.

!!! algoritmo "Algorithm: Insertion (NI, FI, CI)"

    <div class="pseudocodice" markdown="0"><div class="pc" style="--liv:0"><strong>Input:</strong> TSP instance with <span class="arithmatex">\(n\)</span> cities, distances <span class="arithmatex">\(d[1..n][1..n]\)</span>; starting city <span class="arithmatex">\(s\)</span>; <span class="arithmatex">\(rule\in\{NI,FI,CI\}\)</span></div><div class="pc" style="--liv:0"><strong>Output:</strong> Tour <span class="arithmatex">\(\sigma[1..n]\)</span></div><div class="pc" style="--liv:0"><span class="pc-n">1</span><strong>Function</strong> Insertion(<span class="arithmatex">\(n, d, s, rule\)</span>)</div><div class="pc" style="--liv:1"><span class="pc-n">2</span><span class="arithmatex">\(\sigma := (s)\)</span> <span class="pc-com">▹ subtour with one city</span></div><div class="pc" style="--liv:1"><span class="pc-n">3</span><strong>for</strong> <span class="arithmatex">\(len := 1\)</span> <strong>to</strong> <span class="arithmatex">\(n-1\)</span> <strong>do</strong></div><div class="pc" style="--liv:2"><span class="pc-n">4</span><span class="arithmatex">\(k :=\)</span> the city <span class="arithmatex">\(q\notin\sigma\)</span> selected by <span class="arithmatex">\(rule\)</span>
    <span class="arithmatex">\(a :=\)</span> the position <span class="arithmatex">\(a\in\{1,\dots,len\}\)</span> minimizing <span class="arithmatex">\(\Delta(\sigma[a],k,\sigma[a+1])\)</span>, with <span class="arithmatex">\(\sigma[len+1]=\sigma[1]\)</span>
    insert <span class="arithmatex">\(k\)</span> between <span class="arithmatex">\(\sigma[a]\)</span> and <span class="arithmatex">\(\sigma[a+1]\)</span> <span class="pc-com">▹ which city where</span></div><div class="pc" style="--liv:1"><span class="pc-n">5</span><strong>end</strong></div><div class="pc" style="--liv:1"><span class="pc-n">6</span><strong>return</strong> <span class="arithmatex">\(\sigma\)</span></div></div>

- <strong>The subtour with one city.</strong> The subtour $(s)$ is a closed tour with a single “edge” $(s,s)$ of length $0$, so inserting $k$ costs $d_{sk}+d_{ks}-0=2d_{sk}$, and the subtour $(s,k)$ goes from $s$ to $k$ and back. No special case is needed.

- <strong>Append or insert.</strong> Every tour built by $NN$ could also be built by an insertion heuristic, but not conversely: inserting anywhere keeps the subtour closed at every step, so the length of the closing edge is paid, and controlled, from the beginning.

- <strong>The intuition behind FI.</strong> Taking the <em>farthest</em> city looks absurd for a greedy algorithm, but it builds first the outline of the tour, through the cities that are far apart, and then inserts the remaining cities, which are “on the way” and cost little.

- With the distances $d(q,T)$ and the minimum insertion costs updated incrementally after each insertion, $NI$ and $FI$ run in $O(n^2)$ time; a simple implementation of $CI$ runs in $O(n^3)$.

<a id="box-13-ex-ni"></a>

!!! esempio "Example 24.9: $NI$ and $CI$ on the TSP reference instance"

    Starting from $T=(1)$. At each step we list, for every city $q\notin T$, its distance $d(q,T)$ and its insertion costs on the edges of $T$, in the order of $T$.

    <div class="tabella" markdown="0"><table>
    <tr>
    <th>subtour <span class="arithmatex">\(T\)</span></th>
    <th><span class="arithmatex">\(d(q,T)\)</span></th>
    <th>insertion costs</th>
    <th>inserted</th>
    </tr>
    <tr>
    <td><span class="arithmatex">\((1)\)</span></td>
    <td><span class="arithmatex">\(2{:}\,5,\ 3{:}\,2,\ 4{:}\,2,\ 5{:}\,9\)</span></td>
    <td><span class="arithmatex">\(2{:}\,10,\ 3{:}\,4,\ 4{:}\,4,\ 5{:}\,18\)</span></td>
    <td><span class="arithmatex">\(3\)</span> on <span class="arithmatex">\((1,1)\)</span>, cost <span class="arithmatex">\(4\)</span></td>
    </tr>
    <tr>
    <td><span class="arithmatex">\((1,3)\)</span></td>
    <td><span class="arithmatex">\(2{:}\,4,\ 4{:}\,2,\ 5{:}\,7\)</span></td>
    <td><span class="arithmatex">\(2{:}\,(7,7),\ 4{:}\,(4,4),\ 5{:}\,(14,14)\)</span></td>
    <td><span class="arithmatex">\(4\)</span> on <span class="arithmatex">\((1,3)\)</span>, cost <span class="arithmatex">\(4\)</span></td>
    </tr>
    <tr>
    <td><span class="arithmatex">\((1,4,3)\)</span></td>
    <td><span class="arithmatex">\(2{:}\,3,\ 5{:}\,7\)</span></td>
    <td><span class="arithmatex">\(2{:}\,(6,3,7),\ 5{:}\,(14,10,14)\)</span></td>
    <td><span class="arithmatex">\(2\)</span> on <span class="arithmatex">\((4,3)\)</span>, cost <span class="arithmatex">\(3\)</span></td>
    </tr>
    <tr>
    <td><span class="arithmatex">\((1,4,2,3)\)</span></td>
    <td><span class="arithmatex">\(5{:}\,4\)</span></td>
    <td><span class="arithmatex">\(5{:}\,(14,8,7,14)\)</span></td>
    <td><span class="arithmatex">\(5\)</span> on <span class="arithmatex">\((2,3)\)</span>, cost <span class="arithmatex">\(7\)</span></td>
    </tr>
    </table></div>

    $NI$ selects the city with the smallest $d(q,T)$, $CI$ the city with the smallest insertion cost: on this instance the two rules select the same cities at every step (city $3$ at the first step by the tie with city $4$). Both return $\sigma=(1,4,2,5,3)$, and

    $$
    NI(I)=CI(I)=4+4+3+7=18=z(I),
    $$

    the optimal tour $(1,3,5,2,4)$ traversed in the opposite direction. The subtours grow as follows (new edges in red):

    ![Figure 7](../../img/constructive-heuristics/fig07.svg){ .fig loading=lazy  }

<a id="box-14-ex-fi"></a>

!!! esempio "Example 24.10: $FI$ on the TSP reference instance"

    Starting from $T=(1)$:

    <div class="tabella" markdown="0"><table>
    <tr>
    <th>subtour <span class="arithmatex">\(T\)</span></th>
    <th><span class="arithmatex">\(d(q,T)\)</span></th>
    <th>insertion costs of the selected city</th>
    <th>inserted</th>
    </tr>
    <tr>
    <td><span class="arithmatex">\((1)\)</span></td>
    <td><span class="arithmatex">\(2{:}\,5,\ 3{:}\,2,\ 4{:}\,2,\ 5{:}\,9\)</span></td>
    <td><span class="arithmatex">\(5{:}\,18\)</span></td>
    <td><span class="arithmatex">\(5\)</span> on <span class="arithmatex">\((1,1)\)</span>, cost <span class="arithmatex">\(18\)</span></td>
    </tr>
    <tr>
    <td><span class="arithmatex">\((1,5)\)</span></td>
    <td><span class="arithmatex">\(2{:}\,4,\ 3{:}\,2,\ 4{:}\,2\)</span></td>
    <td><span class="arithmatex">\(2{:}\,(0,0)\)</span></td>
    <td><span class="arithmatex">\(2\)</span> on <span class="arithmatex">\((1,5)\)</span>, cost <span class="arithmatex">\(0\)</span></td>
    </tr>
    <tr>
    <td><span class="arithmatex">\((1,2,5)\)</span></td>
    <td><span class="arithmatex">\(3{:}\,2,\ 4{:}\,2\)</span></td>
    <td><span class="arithmatex">\(3{:}\,(1,7,0)\)</span></td>
    <td><span class="arithmatex">\(3\)</span> on <span class="arithmatex">\((5,1)\)</span>, cost <span class="arithmatex">\(0\)</span></td>
    </tr>
    <tr>
    <td><span class="arithmatex">\((1,2,5,3)\)</span></td>
    <td><span class="arithmatex">\(4{:}\,2\)</span></td>
    <td><span class="arithmatex">\(4{:}\,(0,6,4,4)\)</span></td>
    <td><span class="arithmatex">\(4\)</span> on <span class="arithmatex">\((1,2)\)</span>, cost <span class="arithmatex">\(0\)</span></td>
    </tr>
    </table></div>

    At the first step $FI$ takes city $5$, the farthest from city $1$, and the subtour $(1,5)$ already has length $2d_{15}=18$. Cities $2$, $3$ and $4$ lie “on the way” and are inserted at zero cost, because $d_{12}+d_{25}=d_{15}$, $d_{53}+d_{31}=d_{51}$ and $d_{14}+d_{42}=d_{12}$. Hence $\sigma=(1,4,2,5,3)$ and $FI(I)=18=z(I)$: the same tour as $NI$ and $CI$, built in a completely different order.

    ![Figure 8](../../img/constructive-heuristics/fig08.svg){ .fig loading=lazy  }

- <strong>What is known in the worst case.</strong> On metric instances, $NI$ and $CI$ never return a tour longer than twice the optimal one, while the ratio of $NN$ can grow like $\log n$ and only a logarithmic bound is known for $FI$ (D.J. Rosenkrantz, R.E. Stearns, P.M. Lewis, <em>An analysis of several heuristics for the traveling salesman problem</em>, SIAM Journal on Computing 6 (1977) 563–581). In practice, on Euclidean instances, $FI$ is usually the best of the insertion heuristics, and $NN$ tours are typically about $25\%$ longer than the optimum.

## 24.7.4 A comparison on a larger instance { #sez-sec-TSP6 }

- On the reference instance the three insertion heuristics, from every starting city, all find the optimal tour, and the differences between the rules do not show. To compare them we use a second TSP instance, with $6$ cities in the plane and distances equal to the Euclidean distances rounded to the nearest integer. The instance is metric (checked on all the triples of cities).

<a id="box-15-ex-tsp6"></a>

!!! esempio "Example 24.11: A TSP instance with $6$ cities"

    The cities have coordinates

    $$
    1{:}\,(2,1),\quad 2{:}\,(5,5),\quad 3{:}\,(4,4),\quad 4{:}\,(0,5),\quad 5{:}\,(7,0),\quad 6{:}\,(4,1),
    $$

    and distances

    $$
    \begin{array}{c|cccccc}
    \hline {d_{ij}} & {1} & {2} & {3} & {4} & {5} & {6} \\
    \hline {1} & --- & {5} & {4} & {4} & {5} & {2} \\
    {2} & {5} & --- & {1} & {5} & {5} & {4} \\
    {3} & {4} & {1} & --- & {4} & {5} & {3} \\
    {4} & {4} & {5} & {4} & --- & {9} & {6} \\
    {5} & {5} & {5} & {5} & {9} & --- & {3} \\
    {6} & {2} & {4} & {3} & {6} & {3} & --- \\
    \hline
    \end{array}
    $$

    The instance has $\frac{5!}{2}=60$ distinct tours; enumerating them, the unique optimal tour is $(1,4,3,2,5,6)$, with $z(I)=19$, and only $7$ tours have length smaller than $24$. The heuristics of this section give:

    <div class="tabella" markdown="0"><table>
    <tr>
    <th></th>
    <th colspan="6">starting city</th>
    </tr>
    <tr>
    <td></td>
    <td><span class="arithmatex">\(1\)</span></td>
    <td><span class="arithmatex">\(2\)</span></td>
    <td><span class="arithmatex">\(3\)</span></td>
    <td><span class="arithmatex">\(4\)</span></td>
    <td><span class="arithmatex">\(5\)</span></td>
    <td><span class="arithmatex">\(6\)</span></td>
    </tr>
    <tr>
    <td><span class="arithmatex">\(NN\)</span></td>
    <td><span class="arithmatex">\(25\)</span></td>
    <td><span class="arithmatex">\(24\)</span></td>
    <td><span class="arithmatex">\(25\)</span></td>
    <td><span class="arithmatex">\(24\)</span></td>
    <td><span class="arithmatex">\(24\)</span></td>
    <td><span class="arithmatex">\(24\)</span></td>
    </tr>
    </table></div>

    <div class="tabella" markdown="0"><table>
    <tr>
    <th>from city <span class="arithmatex">\(1\)</span></th>
    <th><span class="arithmatex">\(L\)</span></th>
    </tr>
    <tr>
    <td><span class="arithmatex">\(NI\)</span></td>
    <td><span class="arithmatex">\(23\)</span></td>
    </tr>
    <tr>
    <td><span class="arithmatex">\(FI\)</span></td>
    <td><span class="arithmatex">\(19\)</span></td>
    </tr>
    <tr>
    <td><span class="arithmatex">\(CI\)</span></td>
    <td><span class="arithmatex">\(20\)</span></td>
    </tr>
    </table></div>

    The best tour of the multi-start $NN$ has length $24$, $26\%$ above the optimum, while $FI$ finds the optimal tour $(1,6,5,2,3,4)$ (the optimal tour in the opposite direction):

    ![Figure 9](../../img/constructive-heuristics/fig09.svg){ .fig loading=lazy  }

    All six $NN$ tours contain the edge $(4,5)$, of length $9$, the longest of the instance: cities $4$ and $5$ are at opposite ends of the instance, and $NN$, from whatever city it starts, leaves at least one of them to the last steps, when the only way left is the long one.

---

**Next:** [24.8 Randomized construction](randomized-construction.md)
