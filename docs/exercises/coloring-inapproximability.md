---
title: "Exercises · Vertex coloring: limits of approximation"
---

# Exercises · Vertex coloring: limits of approximation

<div class="info-capitolo" markdown>

**Exercises · Chapter 37** · each solution opens with a click · [:material-book-open-variant: Chapter 37: Vertex coloring (VCP)](../approximation-algorithms/coloring-inapproximability.md) · [:material-file-pdf-box: Exercises, volume 5 (PDF)](../pdf/exercises-5-approximation-algorithms.pdf)

</div>

!!! formula "Results used in these exercises"

    From the chapter [Vertex coloring: limits of approximation](https://fabiofurini.github.io/combinatorial-optimization/approximation-algorithms/coloring-inapproximability/), for a graph $G=(V,E)$ with $n$ vertices, $m$ edges and maximum degree $\Delta(G)$:

    \begin{align*}
    &\text{no ratio below } \tfrac43\text{:} && \tfrac{\mathscr{A}(I)}{\chi(G)}<\tfrac43 \text{ on every graph would decide } \chi(G)\le 3 \text{, unless } P=NP; \tag{C1}\\
    &\text{bipartite graphs:} && \chi(G)\le 2 \iff \text{no odd cycle; breadth-first search in } O(n+m); \tag{C2}\\
    &\text{greedy coloring:} && GC(I)\le\Delta(G)+1 \text{ for every order of the vertices}; \tag{C3}\\
    &\text{planar graphs:} && m\le 3n-6~(n\ge3),\quad PL(I)-\chi(G)\le 2~(\le 1 \text{ with } 4 \text{ colors}); \tag{C4}\\
    &\text{interval graphs:} && GC \text{ by non-decreasing left endpoint uses } \omega(G)=\chi(G) \text{ colors}. \tag{C5}
    \end{align*}

<a id="esercizio-37-1"></a>

!!! esercizio "Exercise 37.1: The ratio four thirds (1)"

    Consider the two graphs

    - **$G_1$:** the wheel with $6$ vertices: the cycle $1,2,3,4,5,1$ and the vertex $6$ adjacent to all the others, $E_1=\{\{1,2\},\allowbreak \{2,3\},\allowbreak \{3,4\},\allowbreak \{4,5\},\allowbreak \{1,5\},\allowbreak \{1,6\},\allowbreak \{2,6\},\allowbreak \{3,6\},\allowbreak \{4,6\},\allowbreak \{5,6\}\}$;

    - **$G_2$:** the cycle with $7$ vertices, $E_2=\{\{1,2\},\allowbreak \{2,3\},\allowbreak \{3,4\},\allowbreak \{4,5\},\allowbreak \{5,6\},\allowbreak \{6,7\},\allowbreak \{1,7\}\}$.

    Suppose that a polynomial algorithm $\mathscr{A}$ for the VCP had the guarantee $\frac{\mathscr{A}(I)}{\chi(G)}<\frac{4}{3}$ on every graph.

    **Questions**

    1. Compute $\chi(G_1)$ and $\chi(G_2)$, with a coloring and a proof that fewer colors are not enough.

    2. Which numbers of colors can $\mathscr{A}$ return on $G_1$ and on $G_2$?

    3. On a third graph $G_3$, $\mathscr{A}$ returns $5$ colors. What can you say about $\chi(G_3)$? Would $\mathscr{A}$ decide whether $\chi(G_3)\le 3$?

    4. The same argument with $\frac{\mathscr{A}(I)}{\chi(G)}<\frac{3}{2}$ would decide whether $\chi(G)\le 2$. Why does this prove nothing?

??? soluzione "Solution"

    We use the results (C1)–(C5) of the box at the beginning of the chapter.

    1. $G_2$ is a cycle of odd length, which needs $3$ colors, and $1,2,1,2,1,2,3$ is a coloring: $\chi(G_2)=3$. In $G_1$ the outer cycle $1,2,3,4,5$ is odd and needs $3$ colors, and vertex $6$ is adjacent to all of them and needs a fourth one; the coloring $1,2,1,2,3$ of the cycle and $4$ for vertex $6$ gives $\chi(G_1)=4$. Enumeration confirms both values.

    2. On $G_2$: $\mathscr{A}(I)\ge\chi(G_2)=3$ and $\mathscr{A}(I)<\frac{4}{3}\cdot 3=4$, so $\mathscr{A}(I)=3$. On $G_1$: $4\le\mathscr{A}(I)<\frac{4}{3}\cdot 4=\frac{16}{3}$, so $\mathscr{A}(I)\in\{4,5\}$. As in (C1), $\mathscr{A}$ returns at most $3$ colors exactly on the graphs with $\chi(G)\le 3$.

    3. From $5<\frac{4}{3}\chi(G_3)$ we get $\chi(G_3)>\frac{15}{4}$, so $\chi(G_3)\ge 4$; feasibility gives $\chi(G_3)\le 5$. Yes: $\mathscr{A}$ returned more than $3$ colors, so $\chi(G_3)\ge 4$ and $G_3$ is not $3$-colorable.

    4. Deciding whether $\chi(G)\le 2$ takes polynomial time by breadth-first search (C2): an algorithm that decides it gives no contradiction with $P\neq NP$. The threshold $\frac{4}{3}$ comes from $3$-colorability, which is NP-complete.

<a id="esercizio-37-2"></a>

!!! esercizio "Exercise 37.2: Bipartite graphs and breadth-first search (1)"

    Consider the graphs

    - **$G_a$:** $V=\{1,\dots,8\}$, $E_a=\{\{1,2\},\allowbreak \{1,4\},\allowbreak \{1,5\},\allowbreak \{2,3\},\allowbreak \{2,6\},\allowbreak \{3,4\},\allowbreak \{3,7\},\allowbreak \{4,8\},\allowbreak \{5,6\},\allowbreak \{5,8\},\allowbreak \{6,7\},\allowbreak \{7,8\}\}$;

    - **$G_b$:** $V=\{1,\dots,7\}$, $E_b=\{\{1,2\},\allowbreak \{2,3\},\allowbreak \{3,4\},\allowbreak \{4,5\},\allowbreak \{5,6\},\allowbreak \{1,6\},\allowbreak \{1,4\},\allowbreak \{2,7\},\allowbreak \{5,7\}\}$.

    Run the breadth-first search from vertex $1$, visiting the neighbours of a vertex in increasing order.

    **Questions**

    1. Compute the levels of the vertices of $G_a$ and decide whether $G_a$ is bipartite. If it is, give a coloring with $2$ colors.

    2. Compute the levels of the vertices of $G_b$ and find an edge between two levels of the same parity (the first one in lexicographic order).

    3. From that edge, build a cycle of odd length of $G_b$ and conclude on $\chi(G_b)$.

    4. Give a coloring of $G_b$ with $3$ colors. What is $\chi(G_b)$?

??? soluzione "Solution"

    We use the results (C1)–(C5) of the box at the beginning of the chapter.

    1. The levels are: level $0$: $\{1\}$; level $1$: $\{2,4,5\}$; level $2$: $\{3,6,8\}$; level $3$: $\{7\}$. No edge joins two levels of the same parity, so $G_a$ is bipartite (C2): color $1$ for the even levels, $\{1,3,6,8\}$, and color $2$ for the odd levels, $\{2,4,5,7\}$. Hence $\chi(G_a)=2$.

    2. The levels are: level $0$: $\{1\}$; level $1$: $\{2,4,6\}$; level $2$: $\{3,5,7\}$. The first edge with both endpoints at levels of the same parity is $\{5,7\}$, with levels $2$ and $2$.

    3. The tree paths from the common ancestor to $5$ and to $7$, with the edge $\{5,7\}$, give the cycle $5,4,1,2,7,5$ with $5$ edges, an odd number. An odd cycle needs $3$ colors: $\chi(G_b)\ge 3$.

    4. The greedy coloring in the order $1,\dots,7$ gives the colors $1,2,1,2,1,2,3$, a feasible coloring with $3$ colors. Hence $\chi(G_b)=3$.

<a id="esercizio-37-3"></a>

!!! esercizio "Exercise 37.3: The greedy coloring and the degree bound (1)"

    The crown graph $G_k$, $k\ge 3$, has the vertices $a_i=i$ and $b_i=k+i$, $i=1,\dots,k$, and the edges $\{a_i,b_j\}$ for all $i\neq j$. For $k=4$: $E=\{\{1,6\},\allowbreak \{1,7\},\allowbreak \{1,8\},\allowbreak \{2,5\},\allowbreak \{2,7\},\allowbreak \{2,8\},\allowbreak \{3,5\},\allowbreak \{3,6\},\allowbreak \{3,8\},\allowbreak \{4,5\},\allowbreak \{4,6\},\allowbreak \{4,7\}\}$. The greedy coloring $GC$ gives each vertex, in a given order, the smallest color not used by its neighbours already colored.

    **Questions**

    1. Compute $\Delta(G_4)$ and $\chi(G_4)$.

    2. Apply $GC$ to $G_4$ with the order $\lambda_1=(1,2,3,4,5,6,7,8)$ and with the order $\lambda_2=(1,5,2,6,3,7,4,8)$.

    3. Compare the two results with the bound (C3) and with $\chi(G_4)$. Is the bound $\Delta(G)+1$ attained?

    4. Generalize the order $\lambda_2$ to $G_k$ and compute the ratio $\frac{GC(I)}{\chi(G_k)}$ for $k=3,\dots,6$. Is $GC$, with an arbitrary order, an $\alpha$-approximation algorithm for some constant $\alpha$?

??? soluzione "Solution"

    We use the results (C1)–(C5) of the box at the beginning of the chapter.

    1. Every vertex is adjacent to $k-1=3$ vertices of the other side: $\Delta(G_4)=3$. The sets $\{1,2,3,4\}$ and $\{5,6,7,8\}$ are stable, and there are edges: $\chi(G_4)=2$.

    2. With $\lambda_1$ the vertices $1,2,3,4$ have no colored neighbour and take color $1$; then $5,\dots,8$ take color $2$: $GC(I)=2$. With $\lambda_2$, vertex $a_i$ is adjacent to $b_1,\dots,b_{i-1}$, which have the colors $1,\dots,i-1$, and takes color $i$; vertex $b_i$ does the same. The colors are $1,1,2,2,3,3,4,4$ and $GC(I)=4$.

    3. Both results satisfy $GC(I)\le\Delta(G_4)+1=4$, and $\lambda_2$ attains the bound. With $\lambda_2$ the greedy coloring uses twice the optimal number of colors, while with $\lambda_1$ it is optimal: the order matters.

    4. With the order $a_1,b_1,a_2,b_2,\dots,a_k,b_k$ the vertices $a_i$ and $b_i$ take color $i$, so $GC(I)=k$:

        $$
        \begin{array}{ccccc}
        \hline {k} & {n} & {\Delta(G_k)} & {GC(I)} & {\frac{GC(I)}{\chi(G_k)}} \\
        \hline {3} & {6} & {2} & {3} & {\frac{3}{2}} \\
        {4} & {8} & {3} & {4} & {2} \\
        {5} & {10} & {4} & {5} & {\frac{5}{2}} \\
        {6} & {12} & {5} & {6} & {3} \\
        \hline
        \end{array}
        $$

        The ratio $\frac{k}{2}$ grows without limit: on all graphs, $GC$ has no constant guarantee. On graphs of maximum degree at most $\Delta$ the ratio is at most $\frac{\Delta+1}{2}$, attained here.

<a id="esercizio-37-4"></a>

!!! esercizio "Exercise 37.4: Interval graphs (1)"

    Seven requests use a room in the time intervals

    <div class="tabella" markdown="0"><table>
    <tr>
    <th>request <span class="arithmatex">\(v\)</span></th>
    <th><span class="arithmatex">\(1\)</span></th>
    <th><span class="arithmatex">\(2\)</span></th>
    <th><span class="arithmatex">\(3\)</span></th>
    <th><span class="arithmatex">\(4\)</span></th>
    <th><span class="arithmatex">\(5\)</span></th>
    <th><span class="arithmatex">\(6\)</span></th>
    <th><span class="arithmatex">\(7\)</span></th>
    </tr>
    <tr>
    <td><span class="arithmatex">\([a_v,b_v]\)</span></td>
    <td><span class="arithmatex">\([1,3]\)</span></td>
    <td><span class="arithmatex">\([2,6]\)</span></td>
    <td><span class="arithmatex">\([4,7]\)</span></td>
    <td><span class="arithmatex">\([3,5]\)</span></td>
    <td><span class="arithmatex">\([6,10]\)</span></td>
    <td><span class="arithmatex">\([8,9]\)</span></td>
    <td><span class="arithmatex">\([9,12]\)</span></td>
    </tr>
    </table></div>

    Two requests conflict if their closed intervals intersect, and a color is a room.

    **Questions**

    1. Build the interval graph $G$: list its edges.

    2. Apply the greedy coloring with the requests in order of non-decreasing left endpoint.

    3. Find a point covered by the largest number of intervals, and deduce $\omega(G)$. Is the coloring of question 2 optimal?

    4. Apply the greedy coloring with the order $(1,2,4,5,3,6,7)$. What does this show?

??? soluzione "Solution"

    We use the results (C1)–(C5) of the box at the beginning of the chapter.

    1. $E=\{\{1,2\},\allowbreak \{1,4\},\allowbreak \{2,3\},\allowbreak \{2,4\},\allowbreak \{2,5\},\allowbreak \{3,4\},\allowbreak \{3,5\},\allowbreak \{5,6\},\allowbreak \{5,7\},\allowbreak \{6,7\}\}$: $10$ edges.

    2. The order is $(1,2,4,3,5,6,7)$, and the colors are $1\to1$, $2\to2$, $4\to3$, $3\to1$, $5\to3$, $6\to1$, $7\to2$: $GC(I)=3$.

    3. The point $3$ lies in the intervals $\{1,2,4\}$, which pairwise intersect and form a clique: $\omega(G)\ge3$; no point lies in more than $3$ intervals, so $\omega(G)=3$. By (C5) and the clique bound, $GC(I)=\omega(G)=\chi(G)=3$: the coloring is optimal, with $3$ rooms.

    4. The colors are $1\to1$, $2\to2$, $4\to3$, $5\to1$, $3\to4$, $6\to2$, $7\to3$: vertex $3$ sees the colors $\{1,2,3\}$ on its neighbours and takes color $4$. $GC(I)=4>\chi(G)$: the order of the left endpoints is what makes the greedy coloring exact.

<a id="esercizio-37-5"></a>

!!! esercizio "Exercise 37.5: Planar graphs and an additive guarantee (1)"

    Consider the graphs

    - **$W$:** the wheel, $E=\{\{1,2\},\allowbreak \{2,3\},\allowbreak \{3,4\},\allowbreak \{4,5\},\allowbreak \{1,5\},\allowbreak \{1,6\},\allowbreak \{2,6\},\allowbreak \{3,6\},\allowbreak \{4,6\},\allowbreak \{5,6\}\}$;

    - **$O$:** the octahedron, with $V=\{1,\dots,6\}$ and all the edges except $\{1,6\},\{2,5\},\{3,4\}$;

    - **$K_5$:** the complete graph with $5$ vertices.

    The algorithm $PL$ for planar graphs uses $1$ color if there is no edge, $2$ colors if the graph is bipartite, and otherwise the $5$ colors of the theorem of Heawood.

    **Questions**

    1. Compute $n$, $m$ and $3n-6$ for the three graphs. Which of them can be planar?

    2. $W$ and $O$ are planar (draw them). Find in each a vertex of degree at most $5$, as the lemma of the chapter guarantees.

    3. Is $W$ bipartite? Is $O$? What does $PL$ guarantee on them, and what are $\chi(W)$ and $\chi(O)$ (by enumeration)?

    4. Bound the additive error of $PL$ on $W$ and on $O$, and the additive error with the four color algorithm in place of the five color one.

??? soluzione "Solution"

    We use the results (C1)–(C5) of the box at the beginning of the chapter.

    1. &#8203;

        <div class="tabella" markdown="0"><table>
        <tr>
        <th>graph</th>
        <th><span class="arithmatex">\(n\)</span></th>
        <th><span class="arithmatex">\(m\)</span></th>
        <th><span class="arithmatex">\(3n-6\)</span></th>
        </tr>
        <tr>
        <td><span class="arithmatex">\(W\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(10\)</span></td>
        <td><span class="arithmatex">\(12\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(O\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(12\)</span></td>
        <td><span class="arithmatex">\(12\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(K_5\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(10\)</span></td>
        <td><span class="arithmatex">\(9\)</span></td>
        </tr>
        </table></div>

        By (C4) a planar graph has $m\le 3n-6$: $K_5$, with $10>9$, is not planar. The bound does not exclude $W$ and $O$.

    2. In $W$ the vertices of the cycle have degree $3$, and in $O$ every vertex has degree $4$: both values are at most $5$.

    3. Both graphs contain triangles ($\{1,2,6\}$ in $W$, $\{1,2,3\}$ in $O$), odd cycles: neither is bipartite, so $PL$ uses at most $5$ colors. Enumeration gives $\chi(W)=4$ (the odd cycle $1,\dots,5$ needs $3$ colors and vertex $6$ a fourth) and $\chi(O)=3$ (the classes $\{1,6\},\{2,5\},\{3,4\}$).

    4. On $W$: $PL(I)-\chi(W)\le 5-4=1$; on $O$: $PL(I)-\chi(O)\le 5-3=2$, the bound of (C4). With $4$ colors the errors are at most $0$ on $W$, where the four color algorithm is exact, and $1$ on $O$.
