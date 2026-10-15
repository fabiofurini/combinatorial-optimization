---
title: "Vertex coloring: greedy and DSATUR"
---

# 30.8 Vertex coloring: greedy and DSATUR { #sez-sec-VCPgreedy }

<div class="info-capitolo" markdown>

**Part 4 · Heuristic algorithms · Chapter 30** · [:material-book-open-variant: Chapter 30: Constructive heuristics](index.md) · [:material-file-pdf-box: Lecture notes, volume 4 (PDF)](../../pdf/lecture-notes-4-heuristic-algorithms.pdf) · [:material-presentation: Slides (1/2)](../../pdf/slides-constructive-heuristics-1.pdf) · [:material-presentation: Slides (2/2)](../../pdf/slides-constructive-heuristics-2.pdf) · [:material-pencil: Exercises: Constructive heuristics](../../exercises/constructive-heuristics.md) · [:material-gesture-tap: App: Bin packing heuristics](../../lab/bin-packing-heuristics.md) · [:material-gesture-tap: App: List scheduling and LPT](../../lab/list-scheduling-lpt.md) · [:material-gesture-tap: App: Vertex coloring: greedy and DSATUR](../../lab/coloring-greedy-dsatur.md) · [:material-gesture-tap: App: TSP: nearest neighbour and 2-opt](../../lab/tsp-nn-2opt.md)

</div>

- The problem of this section is the [vertex coloring problem (VCP)](https://fabiofurini.github.io/combinatorial-optimization/combinatorial-optimization-problems/coloring/the-vertex-coloring-problem/): its definition and its assumptions are on its page. The graph is $G=(V,E)$, and the optimal value is the chromatic number $\chi(G)$.

## 30.8.1 The greedy coloring { #sez-sec-GC }

!!! chiave ""

    The <em>Greedy Coloring Algorithm</em> (denoted by $GC$) is a constructive heuristic for the VCP. The colors are the integers $1,2,3,\dots$; the algorithm examines the vertices in the order of a given list $\lambda$ and gives each vertex the smallest color not used by its neighbours already colored.

!!! algoritmo "Algorithm: Greedy Coloring"

    <div class="pseudocodice" markdown="0"><div class="pc" style="--liv:0"><strong>Input:</strong> VCP instance <span class="arithmatex">\(G=(V,E)\)</span> with <span class="arithmatex">\(n\)</span> vertices; list <span class="arithmatex">\(\lambda[1..n]\)</span></div><div class="pc" style="--liv:0"><strong>Output:</strong> Vertex-color assignment <span class="arithmatex">\(col[1..n]\)</span> and number of colors <span class="arithmatex">\(nc\)</span></div><div class="pc" style="--liv:0"><span class="pc-n">1</span><strong>Function</strong> GreedyColoring(<span class="arithmatex">\(n, E, \lambda\)</span>)</div><div class="pc" style="--liv:1"><span class="pc-n">2</span><span class="arithmatex">\(col := \text{new array}[1..n]\)</span>, all entries <span class="arithmatex">\(0\)</span> <span class="pc-com">▹ <span class="arithmatex">\(0\)</span> = not yet colored</span></div><div class="pc" style="--liv:1"><span class="pc-n">3</span><strong>for</strong> <span class="arithmatex">\(k := 1\)</span> <strong>to</strong> <span class="arithmatex">\(n\)</span> <strong>do</strong></div><div class="pc" style="--liv:2"><span class="pc-n">4</span><span class="arithmatex">\(v := \lambda[k]\)</span></div><div class="pc" style="--liv:2"><span class="pc-n">5</span><span class="arithmatex">\(U := \{\, col[u] : u \in N(v),\ col[u] \neq 0 \,\}\)</span>
    <span class="arithmatex">\(col[v] \leftarrow \min\{\, c\in\Z_{\ge1} : c \notin U \,\}\)</span> <span class="pc-com">▹ colors of the colored neighbours smallest free color</span></div><div class="pc" style="--liv:1"><span class="pc-n">6</span><strong>end</strong></div><div class="pc" style="--liv:1"><span class="pc-n">7</span><strong>return</strong> <span class="arithmatex">\(col\)</span>, <span class="arithmatex">\(nc = \max_v col[v]\)</span></div></div>

- The color classes $Q_c=\{v : col[v]=c\}$ are independent sets by construction, so $GC$ always returns a feasible coloring. It runs in $O(n+|E|)$ time.

- As $LIST$, $GC$ depends on the order of the list, and the order can make a large difference.

<a id="box-16-ex-gc"></a>

!!! esempio "Example 30.12: $GC$ on the Petersen graph, two orders"

    ![Figure 10](../../img/constructive-heuristics/fig10.svg){ .fig loading=lazy  }

    <strong>List $\lambda=(1,2,\dots,10)$.</strong> The colors of the colored neighbours $U$ and the color assigned are:

    $$
    \begin{array}{c|cccccccccc}
    \hline {v} & {1} & {2} & {3} & {4} & {5} & {6} & {7} & {8} & {9} & {10} \\
    \hline {U} & {\emptyset} & {\{1\}} & {\{2\}} & {\{1\}} & {\{1,2\}} & {\{1\}} & {\{2\}} & {\{1,2\}} & {\{1,2\}} & {\{1,3\}} \\
    {col[v]} & {1} & {2} & {1} & {2} & {3} & {2} & {1} & {3} & {3} & {2} \\
    \hline
    \end{array}
    $$

    $GC$ uses $3$ colors (red $=1$, blue $=2$, yellow $=3$ in the figure). The outer $5$-cycle $1,2,3,4,5$ is an odd cycle and needs $3$ colors, so $\chi(G)=3$ and this coloring is optimal.

    <strong>List $\lambda=(1,2,3,4,5,7,8,6,9,10)$.</strong> The first five vertices get the same colors as before; then

    $$
    \begin{array}{c|ccccc}
    \hline {v} & {7} & {8} & {6} & {9} & {10} \\
    \hline {U} & {\{2\}} & {\{1\}} & {\{1,2\}} & {\{1,2,3\}} & {\{1,2,3\}} \\
    {col[v]} & {1} & {2} & {3} & {4} & {4} \\
    \hline
    \end{array}
    $$

    and $GC$ uses $4$ colors: vertex $8$ takes color $2$, which the first order gave to vertex $6$, and vertices $9$ and $10$ then see all three colors among their neighbours.

## 30.8.2 DSATUR { #sez-sec-DSATUR }

!!! chiave ""

    The <em>DSATUR Algorithm</em> (Degree of SATURation, denoted by $DSATUR$) is a constructive heuristic for the VCP. It does not use a fixed list: at each step it colors, with the smallest free color, an uncolored vertex of maximum <strong>saturation degree</strong>, i.e., with the largest number of <em>different</em> colors among its neighbours; ties are broken by the largest degree in the subgraph of the uncolored vertices, and then by the smallest index.

!!! algoritmo "Algorithm: DSATUR"

    <div class="pseudocodice" markdown="0"><div class="pc" style="--liv:0"><strong>Input:</strong> VCP instance <span class="arithmatex">\(G=(V,E)\)</span> with <span class="arithmatex">\(n\)</span> vertices</div><div class="pc" style="--liv:0"><strong>Output:</strong> Vertex-color assignment <span class="arithmatex">\(col[1..n]\)</span> and number of colors <span class="arithmatex">\(nc\)</span></div><div class="pc" style="--liv:0"><span class="pc-n">1</span><strong>Function</strong> DSATUR(<span class="arithmatex">\(n, E\)</span>)</div><div class="pc" style="--liv:1"><span class="pc-n">2</span><span class="arithmatex">\(col := \text{new array}[1..n]\)</span>, all entries <span class="arithmatex">\(0\)</span></div><div class="pc" style="--liv:1"><span class="pc-n">3</span><strong>for</strong> <span class="arithmatex">\(k := 1\)</span> <strong>to</strong> <span class="arithmatex">\(n\)</span> <strong>do</strong></div><div class="pc" style="--liv:2"><span class="pc-n">4</span><strong>for</strong> each uncolored <span class="arithmatex">\(u\)</span> <strong>do</strong></div><div class="pc" style="--liv:3"><span class="pc-n">5</span><span class="arithmatex">\(sat[u] \leftarrow |\{\, col[w] : w\in N(u),\ col[w]\neq0 \,\}|\)</span>
    <span class="arithmatex">\(du[u] \leftarrow |\{\, w\in N(u) : col[w]=0 \,\}|\)</span> <span class="pc-com">▹ saturation degree degree among the uncolored</span></div><div class="pc" style="--liv:2"><span class="pc-n">6</span><strong>end</strong></div><div class="pc" style="--liv:2"><span class="pc-n">7</span><span class="arithmatex">\(v :=\)</span> the uncolored vertex maximizing <span class="arithmatex">\((sat[v], du[v])\)</span> lexicographically (smallest index)</div><div class="pc" style="--liv:2"><span class="pc-n">8</span><span class="arithmatex">\(col[v] \leftarrow \min\{\, c\in\Z_{\ge1} : c \neq col[w]~\forall w\in N(v) \,\}\)</span></div><div class="pc" style="--liv:1"><span class="pc-n">9</span><strong>end</strong></div><div class="pc" style="--liv:1"><span class="pc-n">10</span><strong>return</strong> <span class="arithmatex">\(col\)</span>, <span class="arithmatex">\(nc = \max_v col[v]\)</span></div></div>

- <strong>Why the saturation degree.</strong> A vertex with many different colors around it has few colors left: if we postpone it, it may end up with none of the colors already in use. $DSATUR$ colors first the vertices that are most constrained, the same idea as “the hardest items first” of FFD and $LPT$, but updated dynamically after each assignment.

- $DSATUR$ is $GC$ with a list built on the fly, so every property of $GC$ that holds for every list holds for $DSATUR$ too. A straightforward implementation runs in $O(n^2)$ time.

<a id="box-17-ex-dsatur"></a>

!!! esempio "Example 30.13: $DSATUR$ on the Petersen graph"

    All the vertices have degree $3$. The vertex chosen at each step, its saturation degree, its degree among the uncolored vertices and its color are:

    <div class="tabella" markdown="0"><table>
    <tr>
    <th>step</th>
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
    <td><span class="arithmatex">\(v\)</span></td>
    <td><span class="arithmatex">\(1\)</span></td>
    <td><span class="arithmatex">\(2\)</span></td>
    <td><span class="arithmatex">\(3\)</span></td>
    <td><span class="arithmatex">\(4\)</span></td>
    <td><span class="arithmatex">\(5\)</span></td>
    <td><span class="arithmatex">\(6\)</span></td>
    <td><span class="arithmatex">\(8\)</span></td>
    <td><span class="arithmatex">\(7\)</span></td>
    <td><span class="arithmatex">\(9\)</span></td>
    <td><span class="arithmatex">\(10\)</span></td>
    </tr>
    <tr>
    <td><span class="arithmatex">\(sat[v]\)</span></td>
    <td><span class="arithmatex">\(0\)</span></td>
    <td><span class="arithmatex">\(1\)</span></td>
    <td><span class="arithmatex">\(1\)</span></td>
    <td><span class="arithmatex">\(1\)</span></td>
    <td><span class="arithmatex">\(2\)</span></td>
    <td><span class="arithmatex">\(1\)</span></td>
    <td><span class="arithmatex">\(2\)</span></td>
    <td><span class="arithmatex">\(1\)</span></td>
    <td><span class="arithmatex">\(2\)</span></td>
    <td><span class="arithmatex">\(2\)</span></td>
    </tr>
    <tr>
    <td><span class="arithmatex">\(du[v]\)</span></td>
    <td><span class="arithmatex">\(3\)</span></td>
    <td><span class="arithmatex">\(2\)</span></td>
    <td><span class="arithmatex">\(2\)</span></td>
    <td><span class="arithmatex">\(2\)</span></td>
    <td><span class="arithmatex">\(1\)</span></td>
    <td><span class="arithmatex">\(2\)</span></td>
    <td><span class="arithmatex">\(1\)</span></td>
    <td><span class="arithmatex">\(2\)</span></td>
    <td><span class="arithmatex">\(0\)</span></td>
    <td><span class="arithmatex">\(0\)</span></td>
    </tr>
    <tr>
    <td><span class="arithmatex">\(col[v]\)</span></td>
    <td><span class="arithmatex">\(1\)</span></td>
    <td><span class="arithmatex">\(2\)</span></td>
    <td><span class="arithmatex">\(1\)</span></td>
    <td><span class="arithmatex">\(2\)</span></td>
    <td><span class="arithmatex">\(3\)</span></td>
    <td><span class="arithmatex">\(2\)</span></td>
    <td><span class="arithmatex">\(3\)</span></td>
    <td><span class="arithmatex">\(1\)</span></td>
    <td><span class="arithmatex">\(3\)</span></td>
    <td><span class="arithmatex">\(2\)</span></td>
    </tr>
    </table></div>

    At step $1$ all the vertices tie and vertex $1$ is chosen. At step $2$ the vertices $2$, $5$, $6$ have saturation degree $1$ and two uncolored neighbours each: the smallest index, $2$, is chosen. At step $7$ vertex $8$ (neighbours $3$ and $6$, colors $1$ and $2$) has saturation degree $2$ and goes before vertex $7$. $DSATUR$ uses $3=\chi(G)$ colors, the same coloring as $GC$ with the list $(1,2,\dots,10)$.

## 30.8.3 What the greedy coloring guarantees

<a id="box-18-prop-GCDelta"></a>

!!! teorema "Proposition 30.5"

    For every graph $G$ and every list $\lambda$,

    $$
    GC(I) \;\le\; \Delta(G)+1 .
    $$

??? dimostrazione "Proof"

    When vertex $v$ is colored, the set $U$ of the colors of its colored neighbours has at most $\deg(v)\le\Delta(G)$ elements, so one of the colors $1,2,\dots,\Delta(G)+1$ is not in $U$, and the smallest free color is at most $\Delta(G)+1$. <span class="qed">□</span>

- The bound holds for $DSATUR$ too, which is $GC$ with a particular list, and it is attained by complete graphs ($\Delta=n-1$, $\chi=n$) and odd cycles ($\Delta=2$, $\chi=3$), whatever the list.

- It is <em>not</em> a performance guarantee: it compares $GC(I)$ with $\Delta(G)+1$, not with $\chi(G)$, and $\Delta(G)+1$ can be much larger than $\chi(G)$. The next proposition shows that a bad list can really force that many colors on a graph that needs only two.

- On the other hand, <strong>some</strong> list is always optimal: if $Q_1,\dots,Q_{\chi(G)}$ are the color classes of an optimal coloring, $GC$ with the vertices of $Q_1$ first, then those of $Q_2$, and so on, gives each vertex of $Q_c$ a color at most $c$, so it uses at most $\chi(G)$ colors. The difficulty is entirely in finding the list.

<a id="box-19-prop-crown"></a>

!!! teorema "Proposition 30.6"

    For every $k\ge3$ there is a graph $G_k$ with $n=2k$ vertices, $\chi(G_k)=2$ and $\Delta(G_k)=k-1$, and a list $\lambda$, such that

    $$
    GC(I_k) \;=\; k \;=\; \frac{n}{2} .
    $$

??? dimostrazione "Proof"

    $G_k$ is the <strong>crown graph</strong>: the vertices are $u_1,\dots,u_k$ and $v_1,\dots,v_k$, and $u_i$ is adjacent to $v_j$ if and only if $i\neq j$ (the complete bipartite graph $K_{k,k}$ without a perfect matching). It is bipartite, with an edge, so $\chi(G_k)=2$; every vertex has degree $k-1$. The list is $\lambda=(u_1,v_1,u_2,v_2,\dots,u_k,v_k)$.

    We show by induction on $i$ that $GC$ gives color $i$ to both $u_i$ and $v_i$. For $i=1$ no neighbour is colored when $u_1$ is examined, and $v_1$ is not adjacent to $u_1$: both get color $1$. When $u_i$ is examined, its colored neighbours are $v_1,\dots,v_{i-1}$, with colors $1,\dots,i-1$ by induction, so $u_i$ gets color $i$; when $v_i$ is examined, its colored neighbours are $u_1,\dots,u_{i-1}$ ($u_i$ is not a neighbour), with colors $1,\dots,i-1$, so $v_i$ gets color $i$ too. Hence $GC(I_k)=k$. <span class="qed">□</span>

- On the crown graphs $\frac{GC(I_k)}{\chi(G_k)}=\frac{k}{2}=\frac{n}{4}$, which grows without bound: with an arbitrary list, $GC$ has no constant performance guarantee. The list $(u_1,\dots,u_k,v_1,\dots,v_k)$, the color classes first, gives $2$ colors.

- The crown graphs satisfy the assumptions of the VCP for $k\ge3$: no isolated vertices, and $N(u_i)=\{v_j:j\neq i\}$ is not contained in $N(u_{i'})$ nor in any $N(v_j)\subseteq\{u_1,\dots,u_k\}$.

<a id="box-20-ex-crown"></a>

!!! esempio "Example 30.14: $GC$ and $DSATUR$ on the crown graph $G_4$"

    Number the vertices $u_i=2i-1$ and $v_i=2i$, so that $u_1,v_1,\dots,u_4,v_4$ are $1,2,\dots,8$, and $E=\{\{2i-1,2j\}: i\neq j\}$, with $12$ edges.

    ![Figure 11](../../img/constructive-heuristics/fig11.svg){ .fig loading=lazy  }

    With the list $(1,2,\dots,8)=(u_1,v_1,\dots,u_4,v_4)$, $GC$ uses $4$ colors, one for each pair $\{u_i,v_i\}$ (shown in the figure); with the list $(1,3,5,7,2,4,6,8)$ it uses $2$ colors.

    $DSATUR$ chooses vertex $1$ ($u_1$, color $1$), then the vertices $4$, $5$, $2$, $3$, $6$, $7$, $8$, with colors $2,1,2,1,2,1,2$: the vertices $u_i$ get color $1$ and the vertices $v_i$ color $2$, and $DSATUR$ uses $2=\chi(G_4)$ colors. After the first step, every vertex adjacent to a colored vertex has saturation degree $1$, and the vertex chosen is always on the side opposite to the last one colored.

## 30.8.4 DSATUR as a heuristic

- On bipartite graphs $DSATUR$ always uses at most $2$ colors, as on the crown graphs; this is proved in the paper that introduced it (Brélaz, 1979).

- On general graphs $DSATUR$ has no performance guarantee, since the VCP is not approximable. It is nevertheless one of the most used constructive heuristics for the VCP, because on most graphs it uses few colors more than $\chi(G)$, often none; it is also the base of exact branch-and-bound algorithms for the VCP, which branch on the vertex chosen by the $DSATUR$ rule.

---

**Next:** [30.9 Randomized construction](randomized-construction.md)
