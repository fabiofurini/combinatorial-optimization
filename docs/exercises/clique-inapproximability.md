---
title: "Exercises · Maximum clique: limits of approximation"
---

# Exercises · Maximum clique: limits of approximation

<div class="info-capitolo" markdown>

**Exercises · Chapter 38** · each solution opens with a click · [:material-book-open-variant: Chapter 38: Maximum clique (MCP)](../approximation-algorithms/clique-inapproximability.md) · [:material-file-pdf-box: Exercises, volume 5 (PDF)](../pdf/exercises-5-approximation-algorithms.pdf)

</div>

!!! formula "Results used in these exercises"

    From the chapter [Maximum clique: limits of approximation](https://fabiofurini.github.io/combinatorial-optimization/approximation-algorithms/clique-inapproximability/), for graphs $G=(V,E)$ and $H=(W,F)$:

    \begin{align*}
    &\text{strong product:} && (u,x)\sim(v,y) \iff (u=v \text{ or } \{u,v\}\in E) \text{ and } (x=y \text{ or } \{x,y\}\in F); \tag{Q1}\\
    &\text{clique number:} && \omega(G\boxtimes H)=\omega(G)\,\omega(H),\quad |K|\le|p(K)|\cdot\max_u|K_u|; \tag{Q2}\\
    &\text{amplification:} && \text{ratio } \alpha \text{ on } G\boxtimes G \ \Rightarrow\ \text{ratio } \sqrt{\alpha} \text{ on } G;\ t \text{ products: } \alpha^{1/2^t}; \tag{Q3}\\
    &\text{bounded degree:} && \omega(G)\le\Delta(G)+1, \text{ enumeration of } \textstyle\sum_{v} 2^{\deg(v)} \text{ subsets}; \tag{Q4}\\
    &\text{stable sets:} && \alpha(G)=\omega(\overline{G}),\quad \text{a maximal stable set } S \text{ has } \tfrac{\alpha(G)}{|S|}\le\Delta(G)+1. \tag{Q5}
    \end{align*}

<a id="esercizio-38-1"></a>

!!! esercizio "Exercise 38.1: The strong product (1)"

    Let $G$ be the path with the vertices $1,2,3$ and the edges $\{1,2\},\{2,3\}$, and consider the strong product $G\boxtimes G$, whose vertices are the pairs $(i,j)$ with $i,j\in\{1,2,3\}$.

    **Questions**

    1. List the neighbours of $(2,2)$ and of $(1,1)$ in $G\boxtimes G$, and count its edges.

    2. Is $\{(1,1),(2,2),(3,3)\}$ a clique of $G\boxtimes G$?

    3. Compute $\omega(G)$ and $\omega(G\boxtimes G)$, and give all the maximum cliques of $G\boxtimes G$.

    4. For the clique $K=\{(1,1),(1,2),(2,1),(2,2)\}$, compute the projection $p(K)$ and the fibres $K_u$, and check the inequality of (Q2).

??? soluzione "Solution"

    We use the results (Q1)–(Q5) of the box at the beginning of the chapter.

    1. By (Q1), $(2,2)$ is adjacent to every other pair, since $2$ is adjacent to $1$ and $3$: its $8$ neighbours are all the other vertices. The vertex $(1,1)$ has the neighbours $(1,2), (2,1), (2,2)$. Counting the neighbours of all the vertices and halving, $G\boxtimes G$ has $20$ edges.

    2. No: $(1,1)$ and $(3,3)$ are not adjacent, because $1\neq3$ and $\{1,3\}$ is not an edge of $G$.

    3. $\omega(G)=2$ (the edges), and by (Q2) $\omega(G\boxtimes G)=2\cdot2=4$. Enumeration confirms it, with the $4$ maximum cliques $\{i,i+1\}\times\{j,j+1\}$, $i,j\in\{1,2\}$: $\{(1,1),(1,2),(2,1),(2,2)\}$, $\{(1,2),(1,3),(2,2),(2,3)\}$, $\{(2,1),(2,2),(3,1),(3,2)\}$, $\{(2,2),(2,3),(3,2),(3,3)\}$.

    4. $p(K)=\{1,2\}$, with the fibres $K_1=K_2=\{1,2\}$: all are cliques of $G$, and $|K|=4\le|p(K)|\cdot\max_u|K_u|=2\cdot2=4$.

<a id="esercizio-38-2"></a>

!!! esercizio "Exercise 38.2: Amplifying a ratio (1)"

    Suppose that a polynomial algorithm $\mathscr{A}$ for the MCP had the guarantee $\frac{\omega(G)}{\mathscr{A}(I)}\le\alpha$ with $\alpha=4$ on every graph, and apply the construction of the chapter to a graph $G$ with $n=50$ vertices: $t$ strong products, then $\mathscr{A}$, then $t$ extractions of a clique of at least the square root of the size.

    **Questions**

    1. Compute the guaranteed ratio and the number of vertices of the graph given to $\mathscr{A}$, for $t=0,1,2,3,4$.

    2. Which is the smallest $t$ that gives the ratio $\beta=\frac{3}{2}$? And $\beta=\frac{5}{4}$, $\beta=\frac{11}{10}$?

    3. On $G\boxtimes G$ the algorithm returns a clique $K$ with $10$ vertices. How large is the clique of $G$ extracted from it, at least? What does the guarantee of $\mathscr{A}$ say on $\omega(G)$?

    4. Why can $t$ not grow with $n$, for example $t=\log_2 n$, to obtain the ratio $1$?

??? soluzione "Solution"

    We use the results (Q1)–(Q5) of the box at the beginning of the chapter.

    1. By (Q3) the ratio after $t$ products is $\alpha^{1/2^t}$, and the graph has $n^{2^t}$ vertices:

        <div class="tabella" markdown="0"><table>
        <tr>
        <th><span class="arithmatex">\(t\)</span></th>
        <th>ratio <span class="arithmatex">\(4^{1/2^t}\)</span></th>
        <th>vertices <span class="arithmatex">\(50^{2^t}\)</span></th>
        </tr>
        <tr>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(4.000\)</span></td>
        <td><span class="arithmatex">\(50\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(2.000\)</span></td>
        <td><span class="arithmatex">\(2\,500\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(1.414\)</span></td>
        <td><span class="arithmatex">\(6\,250\,000\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(1.189\)</span></td>
        <td><span class="arithmatex">\(3.9\cdot 10^{13}\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(1.091\)</span></td>
        <td><span class="arithmatex">\(1.5\cdot 10^{27}\)</span></td>
        </tr>
        </table></div>

    2. We need $4^{1/2^t}\le\beta$, i.e., $2^t\ge\frac{\ln 4}{\ln\beta}$:

        - $\beta=\frac{3}{2}$: $\frac{\ln 4}{\ln\beta}\approx3.42$, so $t=2$ (ratio $1.414$).

        - $\beta=\frac{5}{4}$: $\frac{\ln 4}{\ln\beta}\approx6.21$, so $t=3$ (ratio $1.189$).

        - $\beta=\frac{11}{10}$: $\frac{\ln 4}{\ln\beta}\approx14.55$, so $t=4$ (ratio $1.091$).

    3. By (Q2), $|p(K)|\cdot\max_u|K_u|\ge10$; both are integers, and $3\cdot3=9<10$, so the larger one has at least $4$ vertices, a clique of $G$. The guarantee gives $10\ge\frac{\omega(G)^2}{4}$, so $\omega(G)^2\le40$ and $\omega(G)\le6$: the extracted clique is within the ratio $\sqrt{4}=2$, since $2\cdot4\ge6$.

    4. The graph given to $\mathscr{A}$ has $n^{2^t}$ vertices: for $t=\log_2 n$ it has $n^n$ vertices, and the algorithm is no longer polynomial. The construction gives every <em>constant</em> ratio $\beta>1$, with a constant $t$.

<a id="esercizio-38-3"></a>

!!! esercizio "Exercise 38.3: Special cases of the MCP and the MSSP (1)"

    Consider the prism $G$, with $V=\{1,\dots,6\}$ and

    $$
    E=\{\{1,2\},\allowbreak \{1,3\},\allowbreak \{2,3\},\allowbreak \{4,5\},\allowbreak \{4,6\},\allowbreak \{5,6\},\allowbreak \{1,4\},\allowbreak \{2,5\},\allowbreak \{3,6\}\},
    $$

    and the star $S_4$, with the centre $1$ adjacent to the vertices $2,3,4,5$ and no other edge.

    **Questions**

    1. Compute $\Delta(G)$ and the number of subsets examined by the enumeration of (Q4). Which maximum cliques does it find?

    2. Check that $G$ satisfies $m\le 3n-6$ ($G$ is planar). Which bound on $\omega(G)$ does planarity give, and which the degree?

    3. Build a maximal stable set of $G$ by adding the vertices in the order $1,\dots,6$ while possible, and compare it with $\alpha(G)$ and with the bound (Q5).

    4. Do the same on the star $S_4$. How close is the ratio to the bound $\Delta+1$?

??? soluzione "Solution"

    We use the results (Q1)–(Q5) of the box at the beginning of the chapter.

    1. Every vertex has degree $3$: $\Delta(G)=3$, and the enumeration examines $\sum_v 2^{\deg(v)}=6\cdot 2^3=48$ subsets. It finds the two maximum cliques $\{1,2,3\}$ and $\{4,5,6\}$ (each from any of its vertices): $\omega(G)=3$.

    2. $m=9\le 3\cdot6-6=12$. Planarity gives $\omega(G)\le4$, the degree $\omega(G)\le\Delta(G)+1=4$; the true value is $3$.

    3. Vertex $1$ is taken; $2,3,4$ are adjacent to $1$; $5$ is taken; $6$ is adjacent to $5$: $S=\{1,5\}$. A stable set has at most one vertex per triangle, so $\alpha(G)=2$ and $S$ is optimal. The bound (Q5) guarantees $|S|\ge\frac{n}{\Delta+1}=\frac{3}{2}$, so $|S|\ge 2$.

    4. The centre $1$ is taken first, and every other vertex is adjacent to it: $S=\{1\}$. The leaves form a stable set, $\alpha(S_4)=4$, and the ratio is $\frac{4}{1}=4$, against the bound $\Delta+1=5$: a maximal stable set can be far from a maximum one.

<a id="esercizio-38-4"></a>

!!! esercizio "Exercise 38.4: Complement graph and stable sets (1)"

    Let $G$ be the Petersen graph, the reference instance of the VCP, with $V=\{1,\dots,10\}$ and $E=\{\{1,2\},\allowbreak \{1,5\},\allowbreak \{1,6\},\allowbreak \{2,3\},\allowbreak \{2,7\},\allowbreak \{3,4\},\allowbreak \{3,8\},\allowbreak \{4,5\},\allowbreak \{4,9\},\allowbreak \{5,10\},\allowbreak \{6,8\},\allowbreak \{6,9\},\allowbreak \{7,9\},\allowbreak \{7,10\},\allowbreak \{8,10\}\}$.

    **Questions**

    1. Compute the number of edges and the degrees of the complement graph $\overline{G}$. Is $\overline{G}$ planar?

    2. Compute $\alpha(G)$ and deduce $\omega(\overline{G})$. How many subsets does the enumeration of (Q4) examine on $\overline{G}$?

    3. Build a maximal stable set of $G$ by adding the vertices in the order $1,\dots,10$ while possible. What does (Q5) guarantee?

    4. An algorithm for the MCP has ratio at most $\rho$ on every graph with $10$ vertices. What does it give for the MSSP on $G$?

??? soluzione "Solution"

    We use the results (Q1)–(Q5) of the box at the beginning of the chapter.

    1. $\overline{G}$ has $\binom{10}{2}-15=30$ edges, and every vertex has degree $9-3=6$. Since $30>3\cdot10-6=24$, $\overline{G}$ is not planar: the special case of planar graphs does not apply to the MSSP on $G$.

    2. The two $5$-cycles $1,\dots,5$ and $6,\dots,10$ contain at most $2$ vertices of a stable set each, and $\{1,4,7,8\}$ is stable: $\alpha(G)=4$, so $\omega(\overline{G})=4$, as enumeration confirms. On $\overline{G}$ the enumeration examines $10\cdot 2^6=640$ subsets.

    3. The order gives $S=\{1,3,7\}$: each other vertex is adjacent to one of them. By (Q5), $|S|\ge\frac{n}{\Delta(G)+1}=\frac{5}{2}$, so $|S|\ge 3$, and the ratio is $\frac{\alpha(G)}{|S|}=\frac{4}{3}\le\Delta(G)+1=4$.

    4. Applied to $\overline{G}$, which has the same $10$ vertices, it returns a clique of $\overline{G}$, i.e., a stable set of $G$, with at least $\frac{\omega(\overline{G})}{\rho}=\frac{\alpha(G)}{\rho}$ vertices: the same ratio $\rho$ for the MSSP.
