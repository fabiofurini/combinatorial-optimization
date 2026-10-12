---
title: "Exercises · Limits of approximation: vertex coloring"
---

# Exercises · Limits of approximation: vertex coloring

<div class="info-capitolo" markdown>

**Exercises · Chapter 33** · each solution opens with a click · [:material-book-open-variant: Chapter 33: Coloring: limits](../approximation-algorithms/coloring-approximation.md) · [:material-file-pdf-box: Exercises, volume 5 (PDF)](../pdf/exercises-5-approximation-algorithms.pdf)

</div>

<a id="esercizio-33-1"></a>

!!! esercizio "Exercise 33.1: Vertex coloring approximation 1"

    We consider the graph $G=(V,E)$ with $V=\{1,\dots,7\}$ ($n=7$) and $|E|=11$ edges:

    $$
    E=\big\{\{1,2\},\{1,3\},\{1,4\},\{2,4\},\{2,6\},\{3,7\},\{4,5\},\{4,6\},\{5,6\},\{5,7\},\{6,7\}\big\}.
    $$

    ![Figure 1](../img/ex-coloring-approximation/fig01.svg){ .fig loading=lazy  }

    **Questions**

    1. Compute the degrees and $\Delta(G)$, and the bound $\Delta(G)+1$ on the number of colors of $GC$.

    2. Apply $GC$ with the list $\lambda=(1,2,\dots,7)$: for each vertex give the set $U$ of colors of its colored neighbours and the color assigned.

    3. Apply $DSATUR$: for each step give the vertex chosen, its saturation degree $sat$, its degree among the uncolored vertices $du$, and its color.

    4. Find a clique of maximum size and determine $\chi(G)$. Which of the two colorings is optimal?

??? soluzione "Solution"

    1. The neighbourhoods are $N(1)=\{2,3,4\}$, $N(2)=\{1,4,6\}$, $N(3)=\{1,7\}$, $N(4)=\{1,2,5,6\}$, $N(5)=\{4,6,7\}$, $N(6)=\{2,4,5,7\}$, $N(7)=\{3,5,6\}$. The degrees are $(3,3,2,4,3,4,3)$, so $\Delta(G)=4$ and $GC$ uses at most $\Delta(G)+1=5$ colors, with any list.

    2. &#8203;

        $$
        \begin{array}{c|ccccccc}
        \hline {v} & {1} & {2} & {3} & {4} & {5} & {6} & {7} \\
        \hline {U} & {\emptyset} & {\{1\}} & {\{1\}} & {\{1,2\}} & {\{3\}} & {\{1,2,3\}} & {\{1,2,4\}} \\
        {col[v]} & {1} & {2} & {2} & {3} & {1} & {4} & {3} \\
        \hline
        \end{array}
        $$

        $GC$ uses $4$ colors: $Q_1=\{1,5\}$, $Q_2=\{2,3\}$, $Q_3=\{4,7\}$, $Q_4=\{6\}$. The trouble starts at vertex $5$: it takes color $1$, and vertex $6$, adjacent to $2$, $4$ and $5$, then sees the colors $1,2,3$.

    3. At step $1$ all the saturation degrees are $0$, and the vertices of largest degree are $4$ and $6$: vertex $4$ is chosen.

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
        </tr>
        <tr>
        <td><span class="arithmatex">\(v\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(7\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(sat[v]\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(du[v]\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(col[v]\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        </tr>
        </table></div>

        At step $2$ the neighbours of $4$ have saturation degree $1$, and vertex $6$ has the most uncolored neighbours ($5$, $7$ and $2$). At step $3$ the vertices $2$ and $5$ (both adjacent to $4$ and $6$) have saturation degree $2$ and one uncolored neighbour each, and $2$ is chosen. $DSATUR$ uses $3$ colors: $Q_1=\{4,7\}$, $Q_2=\{1,6\}$, $Q_3=\{2,3,5\}$.

    4. $\{1,2,4\}$ is a clique of size $3$ ($\{1,2\},\{1,4\},\{2,4\}\in E$), so $\chi(G)\ge\omega(G)\ge3$; there are no cliques of size $4$, but this is not needed: the $DSATUR$ coloring uses $3$ colors, hence $\chi(G)=3$. The $DSATUR$ coloring is optimal, the one of $GC$ with the list $(1,\dots,7)$ uses one color more:

        $$
        \frac{GC(I)}{\chi(G)}=\frac43,\qquad\frac{DSATUR(I)}{\chi(G)}=1 .
        $$

<a id="esercizio-33-2"></a>

!!! esercizio "Exercise 33.2: Vertex coloring approximation 2"

    We consider the crown graph $G_5$ with $n=10$ vertices: the vertices $1,\dots,5$ on one side, the vertices $6,\dots,10$ on the other, and vertex $i\in\{1,\dots,5\}$ adjacent to vertex $j+5$, $j\in\{1,\dots,5\}$, if and only if $i\neq j$:

    $$
    E=\big\{\{i,j+5\} : i,j\in\{1,\dots,5\},\ i\neq j\big\},\qquad |E|=20 .
    $$

    **Questions**

    1. Compute $\Delta(G_5)$ and $\chi(G_5)$.

    2. Apply $GC$ with the list $\lambda=(1,6,2,7,3,8,4,9,5,10)$ and give $GC(I)$. Compare it with $\Delta(G_5)+1$ and with $\chi(G_5)$.

    3. Give a list for which $GC$ is optimal.

    4. Apply $DSATUR$ and give $DSATUR(I)$.

??? soluzione "Solution"

    1. Each vertex $i\le5$ is adjacent to the $4$ vertices $j+5$ with $j\neq i$, and symmetrically: every degree is $4$ and $\Delta(G_5)=4$. The graph is bipartite (all the edges join $\{1,\dots,5\}$ and $\{6,\dots,10\}$) and has edges, so $\chi(G_5)=2$.

    2. With $u_i=i$ and $v_i=i+5$ the list is $(u_1,v_1,u_2,v_2,\dots,u_5,v_5)$, the bad list of the notes:

        $$
        \begin{array}{c|cccccccccc}
        \hline {v} & {1} & {6} & {2} & {7} & {3} & {8} & {4} & {9} & {5} & {10} \\
        \hline {U} & {\emptyset} & {\emptyset} & {\{1\}} & {\{1\}} & {\{1,2\}} & {\{1,2\}} & {\{1,2,3\}} & {\{1,2,3\}} & {\{1,2,3,4\}} & {\{1,2,3,4\}} \\
        {col[v]} & {1} & {1} & {2} & {2} & {3} & {3} & {4} & {4} & {5} & {5} \\
        \hline
        \end{array}
        $$

        Vertices $i$ and $i+5$ are not adjacent and both get color $i$, so $GC(I)=5=\frac n2$. This is exactly the bound $\Delta(G_5)+1=5$, and

        $$
        \frac{GC(I)}{\chi(G_5)}=\frac52 .
        $$

    3. The list $(1,2,3,4,5,6,7,8,9,10)$, one side first: the vertices $1,\dots,5$ are pairwise non-adjacent and all get color $1$; each vertex $6,\dots,10$ has only neighbours of color $1$ and gets color $2$. Hence $GC(I)=2=\chi(G_5)$.

    4. At step $1$ all the vertices have degree $4$ and vertex $1$ is chosen (color $1$). Then:

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
        <td><span class="arithmatex">\(7\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(8\)</span></td>
        <td><span class="arithmatex">\(9\)</span></td>
        <td><span class="arithmatex">\(10\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(sat[v]\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(du[v]\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(col[v]\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        </tr>
        </table></div>

        At step $2$ the neighbours $7,8,9,10$ of vertex $1$ have saturation degree $1$ and $3$ uncolored neighbours each: vertex $7$ is chosen and gets color $2$. From then on, every vertex adjacent to a colored vertex has saturation degree $1$ (its colored neighbours are all on the other side, with the same color); the vertices of the side $\{1,\dots,5\}$ get color $1$ and those of the side $\{6,\dots,10\}$ color $2$. Hence $DSATUR(I)=2=\chi(G_5)$, as guaranteed on bipartite graphs.

<a id="esercizio-33-3"></a>

!!! esercizio "Exercise 33.3: Vertex coloring approximation 3"

    We consider the graph $G=(V,E)$ with $V=\{1,\dots,7\}$ ($n=7$) and $|E|=10$ edges:

    $$
    E=\big\{\{1,3\},\{1,5\},\{1,6\},\{2,4\},\{2,5\},\{2,7\},\{3,5\},\{4,6\},\{4,7\},\{6,7\}\big\}.
    $$

    ![Figure 2](../img/ex-coloring-approximation/fig02.svg){ .fig loading=lazy  }

    **Questions**

    1. Apply $DSATUR$ (ties: largest degree among the uncolored vertices, then smallest index) and give $DSATUR(I)$.

    2. Show that $\chi(G)=3$.

    3. Suppose that a polynomial algorithm $\mathscr{A}$ had $\frac{\mathscr{A}(I)}{\chi(G)}<\frac43$ on every graph. What would $\mathscr{A}$ return on this graph? Why does this show that such an algorithm cannot exist unless $P=NP$?

    4. Is the result of Question 1 in contradiction with the bound $\Delta(G)+1$?

??? soluzione "Solution"

    1. The neighbourhoods are $N(1)=\{3,5,6\}$, $N(2)=\{4,5,7\}$, $N(3)=\{1,5\}$, $N(4)=\{2,6,7\}$, $N(5)=\{1,2,3\}$, $N(6)=\{1,4,7\}$, $N(7)=\{2,4,6\}$.

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
        </tr>
        <tr>
        <td><span class="arithmatex">\(v\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(7\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(sat[v]\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(du[v]\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(col[v]\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        </tr>
        </table></div>

        - Step $1$: vertex $1$ (degree $3$, smallest index among the vertices of degree $3$), color $1$.

        - Step $2$: the neighbours $3,5,6$ of vertex $1$ have saturation degree $1$; their uncolored neighbours are $1$, $2$, $2$ respectively, and vertex $5$ is chosen: color $2$.

        - Step $3$: vertex $3$ sees colors $1$ and $2$ (saturation degree $2$): color $3$.

        - Step $4$: the vertices $2$ (neighbour $5$) and $6$ (neighbour $1$) have saturation degree $1$ and two uncolored neighbours each; vertex $2$ is chosen and gets color $1$.

        - Step $5$: the vertices $4$, $6$, $7$ have saturation degree $1$ and two uncolored neighbours each; vertex $4$ gets color $2$.

        - Step $6$: vertex $6$ sees colors $1$ (vertex $1$) and $2$ (vertex $4$), vertex $7$ sees $1$ (vertex $2$) and $2$ (vertex $4$); both have saturation degree $2$ and one uncolored neighbour, and vertex $6$ gets color $3$.

        - Step $7$: vertex $7$ sees colors $1,2,3$ and gets color $4$.

        Hence $DSATUR(I)=4$.

    2. $\{1,3,5\}$ is a triangle, so $\chi(G)\ge3$. The coloring $Q_1=\{1,4\}$, $Q_2=\{2,3,6\}$, $Q_3=\{5,7\}$ is feasible (no edge inside a class: $\{1,4\}$, $\{2,3\}$, $\{2,6\}$, $\{3,6\}$, $\{5,7\}\notin E$), so $\chi(G)=3$ and

        $$
        \frac{DSATUR(I)}{\chi(G)}=\frac43 .
        $$

        The damage is done by step $5$: vertices $6$ and $7$ already see color $1$ (from vertices $1$ and $2$), and vertex $4$, their common neighbour, takes color $2$. The two adjacent vertices $6$ and $7$ are left with color $3$ only, and one of them needs a fourth color. In the optimal coloring vertex $4$ has the same color as vertex $1$.

    3. On this graph $\mathscr{A}(I)<\frac43\cdot3=4$, so $\mathscr{A}(I)\le3$: $\mathscr{A}$ would return a $3$-coloring. On a graph with $\chi(G)\ge4$, instead, $\mathscr{A}(I)\ge4$. Comparing $\mathscr{A}(I)$ with $3$ would decide 3-colorability, an NP-complete problem, in polynomial time. In particular, $DSATUR$ is not such an algorithm: on this graph its ratio is exactly $\frac43$.

    4. No: the degrees are $(3,3,2,3,3,3,3)$, so $\Delta(G)+1=4$ and $DSATUR(I)=4$ attains the bound. The bound $\Delta(G)+1$ limits the number of colors, it does not compare it with $\chi(G)$.
