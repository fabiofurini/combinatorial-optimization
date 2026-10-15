---
title: "Maximum clique"
---

# 5.2 The maximum clique problem { #sez-sec-mcp-MCP }

<div class="info-capitolo" markdown>

**Part 1 · Combinatorial optimization problems · Chapter 5** · [:material-book-open-variant: Chapter 5: Clique problems](index.md) · [:material-file-pdf-box: Lecture notes, volume 1 (PDF)](../../pdf/lecture-notes-1-combinatorial-optimization-problems.pdf) · [:material-presentation: Slides](../../pdf/slides-clique.pdf) · [:material-pencil: Exercises: Clique problems](../../exercises/clique.md)

</div>

<a id="box-2-mcpP-def-MCP"></a>

!!! definizione "Definition 5.2: Maximum Clique Problem"

    Given:

    1. a simple <em>graph</em> $G = (V,E)$, where

        $$
        V = \{1,2,\dots,n\}
        $$

        is the set of $n$ <em>vertices</em>, and

        $$
        E \subseteq \big\{\, \{u,v\} : u,v \in V,~ u \neq v \,\big\}
        $$

        is the set of $m$ <em>edges</em>,

    the <strong>Maximum Clique Problem</strong> (MCP) asks to find a clique $K \subseteq V$ of $G$ whose number of vertices is maximum. Its optimal value is the clique number $\omega(G)$.

<a id="box-3-mcpP-def-MSSP"></a>

!!! definizione "Definition 5.3: stable set and Maximum Stable Set Problem"

    Let $G=(V,E)$ be a graph.

    1. A <strong>stable set</strong> (also called <strong>independent set</strong>) is a subset $Q \subseteq V$ of pairwise non-adjacent vertices: $\{u,v\} \notin E$ for all $u,v \in Q$ with $u \neq v$.

    2. The <strong>Maximum Stable Set Problem</strong> (MSSP) asks to find a stable set of $G$ whose number of vertices is maximum. Its optimal value is the <strong>stability number</strong> $\alpha(G)$.

<a id="box-4-mcpP-def-complement"></a>

!!! definizione "Definition 5.4: complement graph"

    The <strong>complement graph</strong> of $G=(V,E)$ is the graph $\overline{G}=(V,\overline{E})$ with the same vertices and the edge set

    $$
    \overline{E} = \big\{\, \{u,v\} : u,v \in V,~ u \neq v,~ \{u,v\} \notin E \,\big\}.
    $$

    The pairs in $\overline{E}$ are the <strong>non-edges</strong> of $G$, and $|\overline{E}| = \binom{n}{2} - m$.

<a id="box-5-mcpP-prop-omega-alpha"></a>

!!! teorema "Proposition 5.5: clique number and stability number"

    A subset $K \subseteq V$ is a clique of $G$ if and only if it is a stable set of $\overline{G}$. Hence

    $$
    \omega(G) = \alpha(\overline{G}) \qquad\text{and}\qquad \alpha(G) = \omega(\overline{G}).
    $$

??? dimostrazione "Proof"

    Two distinct vertices $u,v$ are adjacent in $G$ if and only if they are not adjacent in $\overline{G}$. So all the pairs of $K$ are edges of $G$ exactly when no pair of $K$ is an edge of $\overline{G}$. The two problems have the same feasible solutions, hence the same optimal value. The second equality follows since $\overline{\overline{G}} = G$. <span class="qed">□</span>

!!! chiave ""

    The MCP on $G$ and the MSSP on $\overline{G}$ are the same problem: a maximum clique of $G$ is a maximum stable set of $\overline{G}$. Whatever we learn on one of the two problems holds for the other one.

- An <strong>MCP instance</strong> is specified by:

    1. two integer numbers: the number of vertices $n \in \Z_{\ge 1}$ and the number of edges $m \in \Z_{\ge 1}$;

    2. two vectors of integer numbers of length $m$: $\vet{u} \in \Z_{\ge 1}^m$ and $\vet{v} \in \Z_{\ge 1}^m$, with the two endpoints of the edges.

- An <strong>MCP feasible solution</strong> is a clique $K \subseteq V$. The empty set and a single vertex are cliques, so every instance has feasible solutions.

!!! chiave ""

    Given an MCP instance, the MCP can be formally stated as:

    \begin{equation*}
    \label{mcpP:MCP}
    \tilde{K}
    \in
    \argmax_{K\subseteq V}
    \Big\{\,
    |K|
    \;:\;
    \{u,v\}\in E, \quad \forall\, u,v\in K\ \text{with } u\neq v
    \,\Big\},
    \qquad |\tilde{K}| = \omega(G). \tag{5.1}
    \end{equation*}

<a id="box-6-mcpP-ex1"></a>

!!! esempio "Example 5.1: MCP instance: a cycle with a chord"

    We consider the graph $G=(V,E)$ with $7$ vertices ($n=7$) and $8$ edges ($m=8$): the cycle $1,2,\dots,7,1$ and the chord $\{1,3\}$. On the right, its complement graph $\overline{G}$, with the $\binom{7}{2}-8=13$ non-edges of $G$.

    ![Figure 1](../../img/clique/fig01.svg){ .fig loading=lazy  }

    The vertex set and the edge set are:

    $$
    V=\{1,\dots,7\},\qquad
    E=\big\{\{1,2\},\{1,3\},\{1,7\},\{2,3\},\{3,4\},\{4,5\},\{5,6\},\{6,7\}\big\}.
    $$

    We call this MCP instance <span style="color:#1971c2">[Example 5.1](#box-6-mcpP-ex1)</span>: it is the reference instance of the chapter.

<a id="box-7-mcpP-ex2"></a>

!!! esempio "Example 5.2: MCP instance: a dense graph with $8$ vertices"

    We consider the graph $G=(V,E)$ with $8$ vertices placed on a circle, where every vertex is adjacent to all the others except the opposite one. It has $m=\binom{8}{2}-4=24$ edges, and its complement has only the $4$ edges $\{1,5\},\{2,6\},\{3,7\},\{4,8\}$. A maximum clique $\tilde K=\{1,3,4,6\}$ is in red.

    ![Figure 2](../../img/clique/fig02.svg){ .fig loading=lazy  }

    In $\overline{G}$ the red vertices form a stable set: they take one vertex from each of the $4$ edges. We call this MCP instance <span style="color:#1971c2">[Example 5.2](#box-7-mcpP-ex2)</span>.

- The Petersen graph of [Chapter 4 «Coloring problems»](https://fabiofurini.github.io/combinatorial-optimization/combinatorial-optimization-problems/coloring/the-vertex-coloring-problem/) has no triangle, so its largest cliques are its edges and $\omega(G)=2$.

## 5.2.1 Assumptions

- We consider nontrivial instances: the graph has at least one edge and at least one non-edge. Formally:

    $$
    1 \le m < \binom{n}{2}.
    $$

- The assumption can be made without loss of generality: if the graph has no edge, every single vertex is a maximum clique and $\omega(G)=1$; if the graph is complete, $V$ itself is a clique and $\omega(G)=n$.

## 5.3 Counting the solutions, a first solution and the bounds

- <strong>Candidate solutions.</strong> The candidate solutions are the subsets of $V$: there are $2^n$ of them. For <span style="color:#1971c2">[Example 5.1](#box-6-mcpP-ex1)</span> we have $2^7=128$ subsets, and only $17$ of them are cliques:

    <div class="tabella" markdown="0"><table>
    <tr>
    <th>number of vertices</th>
    <th><span class="arithmatex">\(0\)</span></th>
    <th><span class="arithmatex">\(1\)</span></th>
    <th><span class="arithmatex">\(2\)</span></th>
    <th><span class="arithmatex">\(3\)</span></th>
    <th>total</th>
    </tr>
    <tr>
    <td>cliques</td>
    <td><span class="arithmatex">\(1\)</span></td>
    <td><span class="arithmatex">\(7\)</span></td>
    <td><span class="arithmatex">\(8\)</span></td>
    <td><span class="arithmatex">\(1\)</span></td>
    <td><span class="arithmatex">\(17\)</span></td>
    </tr>
    </table></div>

    The only clique with $3$ vertices is $\{1,2,3\}$, so the optimal solution is unique and $\omega(G)=3$.

- For <span style="color:#1971c2">[Example 5.2](#box-7-mcpP-ex2)</span> we have $2^8=256$ subsets and $81$ cliques. A clique takes at most one vertex from each pair $\{1,5\},\{2,6\},\{3,7\},\{4,8\}$: the maximum cliques take exactly one, so there are $2^4=16$ of them and $\omega(G)=4$.

- <strong>A first solution, by hand.</strong> We start from a vertex of maximum degree and add, one at a time, a vertex adjacent to all the vertices already chosen. In <span style="color:#1971c2">[Example 5.1](#box-6-mcpP-ex1)</span>, vertex $1$ has degree $3$; we add its neighbour $2$, and then $3$, which is adjacent to both.

- No other vertex is adjacent to $1$, $2$ and $3$, so we stop with $K=\{1,2,3\}$. It is a <strong>primal bound</strong>: $\LB = 3 \le \omega(G)$.

### 5.3.1 Simple upper bounds

- The MCP is a maximization problem: a dual bound is an <strong>upper bound</strong> on $\omega(G)$. We denote by $\deg(v)$ the degree of a vertex and by $\Delta$ the maximum degree of the graph.

<a id="box-8-mcpP-obs-degree"></a>

!!! teorema "Observation 5.6: degree bound"

    For every graph $G=(V,E)$ we have $\omega(G) \le \Delta + 1$.

??? dimostrazione "Proof"

    In a clique $K$, every vertex is adjacent to the other $|K|-1$ vertices of $K$, so its degree is at least $|K|-1$. Hence $|K|-1 \le \Delta$ for every clique. <span class="qed">□</span>

<a id="box-9-mcpP-obs-edge"></a>

!!! teorema "Observation 5.7: edge bound"

    For every graph $G=(V,E)$ we have $\omega(G)\,(\omega(G)-1)/2 \le m$.

??? dimostrazione "Proof"

    A clique with $k$ vertices contains all the $\binom{k}{2} = k(k-1)/2$ pairs of its vertices as edges, and these are edges of $G$. <span class="qed">□</span>

<a id="box-10-mcpP-obs-count"></a>

!!! teorema "Observation 5.8: degree count bound"

    Let $k^{\max}$ be the largest integer $k$ such that at least $k$ vertices of $G$ have degree at least $k-1$. Then $\omega(G) \le k^{\max}$.

??? dimostrazione "Proof"

    A clique with $k$ vertices has $k$ vertices, each of degree at least $k-1$ (proof of the degree bound). So $k=\omega(G)$ satisfies the condition, and $\omega(G)\le k^{\max}$. <span class="qed">□</span>

<a id="box-11-mcpP-obs-coloring"></a>

!!! teorema "Observation 5.9: coloring bound"

    For every graph $G=(V,E)$ we have $\omega(G) \le \chi(G)$. In particular, the number of colors of any feasible coloring of $G$ is an upper bound on $\omega(G)$.

??? dimostrazione "Proof"

    The vertices of a clique are pairwise adjacent, so they take pairwise different colors: a coloring with $k$ colors has $k \ge |K|$ for every clique $K$. This is the clique bound of Chapter 4 [«Coloring problems»](../coloring/index.md), read from the side of the clique. <span class="qed">□</span>

- <strong>Bounds on <span style="color:#1971c2">[Example 5.1](#box-6-mcpP-ex1)</span>.</strong> Vertices $1$ and $3$ have degree $3$, the other five have degree $2$. The degree bound gives $\Delta+1=4$, and the edge bound gives $4$ too, since $4\cdot 3/2 = 6 \le 8 < 10 = 5 \cdot 4/2$.

- Only $2$ vertices have degree at least $3$, so $k=4$ fails the condition of the degree count bound, while $k=3$ satisfies it: $k^{\max}=3$. The coloring $\{1,4,6\},\{2,5,7\},\{3\}$ gives $3$ as well. The gap with $\LB=3$ is zero.

- <strong>Bounds on <span style="color:#1971c2">[Example 5.2](#box-7-mcpP-ex2)</span>.</strong> Every vertex has degree $6$: the degree bound and the degree count bound give $7$, and the edge bound gives $7$, since $7 \cdot 6/2 = 21 \le 24 < 28$.

- The four pairs $\{1,5\},\{2,6\},\{3,7\},\{4,8\}$ are stable sets, so they color the graph with $4$ colors: the coloring bound gives $4 = \omega(G)$. On dense graphs the bounds based on degrees are weak, and a good coloring is much better.

## 5.4 Complexity

- The <strong>decision version</strong> of the MCP asks, for a graph $G$ and an integer $k$, whether $G$ has a clique with $k$ vertices. Karp (1972) included it among his $21$ NP-complete problems, so the MCP is NP-hard. By [Proposition 5.5](#box-5-mcpP-prop-omega-alpha), the same holds for the MSSP.

- Listing all the subsets of $V$ and checking the pairs of each one takes $O(2^n\, n^2)$ steps. For a <em>fixed</em> $k$, the $\binom{n}{k}$ subsets with $k$ vertices are checked in $O(n^k\, k^2)$ steps: a polynomial for every fixed $k$, but the exponent grows with the size of the clique.

- The MCP is also hard to approximate: Håstad (1999) proved that, for every $\varepsilon>0$, no polynomial algorithm guarantees a clique with at least $\omega(G)/n^{1-\varepsilon}$ vertices, unless every problem in NP can be solved in randomized polynomial time.

---

**Next:** [5.5 Weighted variants](weighted-variants.md)
