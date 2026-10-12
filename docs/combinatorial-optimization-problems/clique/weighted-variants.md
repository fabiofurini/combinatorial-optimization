---
title: "Weighted variants"
---

# 5.5 Weighted variants { #sez-sec-mcp-weighted }

<div class="info-capitolo" markdown>

**Part 1 · Combinatorial optimization problems · Chapter 5** · [:material-book-open-variant: Chapter 5: Clique problems](index.md) · [:material-file-pdf-box: Lecture notes, volume 1 (PDF)](../../pdf/lecture-notes-1-combinatorial-optimization-problems.pdf) · [:material-pencil: Exercises: Clique problems](../../exercises/clique.md)

</div>

- Let $\vet{w} \in \Z_{\ge 1}^n$ be a <strong>vertex-weight vector</strong>, with a weight $w_v$ for each vertex $v \in V$, and let $\vet{r} \in \Z_{\ge 1}^m$ be an <strong>edge-weight vector</strong>, with a weight $r_{uv}$ for each edge $\{u,v\} \in E$. For a clique $K$ we define

    $$
    w(K) = \sum_{v \in K} w_v
    \qquad\text{and}\qquad
    r(K) = \sum_{\{u,v\} \in E[K]} r_{uv},
    $$

    where $E[K]$ is the set of the edges with both endpoints in $K$.

<a id="box-12-mcpP-def-weighted"></a>

!!! definizione "Definition 5.10: weighted maximum clique problems"

    1. Given a graph $G$ and a vertex-weight vector $\vet{w}$, the <strong>vertex-weighted maximum clique problem</strong> asks to find a clique $K$ of $G$ with maximum total vertex weight $w(K)$.

    2. Given a graph $G$ and an edge-weight vector $\vet{r}$, the <strong>edge-weighted maximum clique problem</strong> asks to find a clique $K$ of $G$ with maximum total edge weight $r(K)$.

- With all the weights $w_v=1$ the first problem is the MCP. The edge-weighted problem rewards the cliques with many heavy edges, and with $r_{uv}=1$ it is again the MCP, since $r(K)=\binom{|K|}{2}$ grows with $|K|$.

<a id="box-13-mcpP-ex3"></a>

!!! esempio "Example 5.3: vertex-weighted maximum clique problem"

    We add to the graph of <span style="color:#1971c2">[Example 5.2](the-maximum-clique-problem.md#box-7-mcpP-ex2)</span> the vertex weights in blue. The vertex-weighted maximum clique is $\{2,3,5,8\}$, with weight $8+9+6+9=32$: it is unique, and it is not the maximum clique in red of <span style="color:#1971c2">[Example 5.2](the-maximum-clique-problem.md#box-7-mcpP-ex2)</span>, whose weight is $5+9+5+5=24$.

    ![Figure 3](../../img/clique/fig03.svg){ .fig loading=lazy  }

    A clique takes at most one vertex from each pair $\{1,5\},\{2,6\},\{3,7\},\{4,8\}$; taking the heavier one of each pair gives $6+8+9+9=32$, and these four vertices form a clique.

<a id="box-14-mcpP-ex4"></a>

!!! esempio "Example 5.4: edge-weighted maximum clique problem"

    We add to the graph of <span style="color:#1971c2">[Example 5.2](the-maximum-clique-problem.md#box-7-mcpP-ex2)</span> the edge weights in red. The edge-weighted maximum clique is $\{2,5,7,8\}$, in violet: its six edges weigh $6+4+9+7+3+8=37$, and the enumeration of the $16$ maximum cliques shows that it is the unique optimal solution.

    ![Figure 4](../../img/clique/fig04.svg){ .fig loading=lazy  }

## 5.6 Remarks

- In a coloring, every color class is a stable set: the MSSP is the problem of the largest color class, and the clique number is the dual bound of the chapter «Coloring problems».

- Applications of cliques and stable sets:

    - groups of pairwise connected members in social networks;

    - groups of pairwise compatible tasks or exams, in scheduling and in the planning of timetables;

    - common substructures of two molecules, in chemistry and in biology;

    - codes that correct errors, as large sets of words pairwise far apart.

## 5.7 Typical mistakes

!!! attenzione "Warning"

    - <strong>Confusing a maximal clique with a maximum clique.</strong> A clique is maximal when no vertex can be added to it; it is maximum when no clique is larger. In <span style="color:#1971c2">[Example 5.1](the-maximum-clique-problem.md#box-6-mcpP-ex1)</span>, $\{4,5\}$ is maximal but not maximum.

    - <strong>Building the complement graph with the edges of $G$.</strong> The edges of $\overline{G}$ are exactly the pairs that are <em>not</em> edges of $G$: there are $\binom{n}{2}-m$ of them.

    - <strong>Using a lower bound as an upper bound.</strong> A clique found by hand gives $\LB \le \omega(G)$; the degree bounds and a coloring give $\UB \ge \omega(G)$. In this chapter the problem is a maximization.

    - <strong>Believing that the coloring bound is tight.</strong> On the cycle with $5$ vertices $\omega(G)=2$ and $\chi(G)=3$.

## 5.8 In summary

!!! chiave "In summary"

    - The MCP looks for the largest set of pairwise adjacent vertices; its optimal value is the clique number $\omega(G)$.

    - A clique of $G$ is a stable set of $\overline{G}$: the MCP on $G$ is the MSSP on $\overline{G}$, and $\omega(G)=\alpha(\overline{G})$.

    - A clique found by hand is a primal bound; the degree bound, the edge bound, the degree count bound and the number of colors of a coloring are dual bounds.

    - The MCP is NP-hard and hard to approximate; its weighted variants weigh the vertices or the edges.

    <strong>Dashboard of the reference instances.</strong>

    <div class="tabella" markdown="0"><table>
    <tr>
    <th>instance (max)</th>
    <th>lower bound</th>
    <th>upper bound</th>
    <th>from</th>
    </tr>
    <tr>
    <td><span style="color:#1971c2"><a href="../the-maximum-clique-problem/#box-6-mcpP-ex1">Example 5.1</a></span> (cycle with a chord)</td>
    <td><span class="arithmatex">\(3\)</span> (by hand)</td>
    <td><span class="arithmatex">\(3\)</span> (degree count, coloring)</td>
    <td>this chapter</td>
    </tr>
    <tr>
    <td><span style="color:#1971c2"><a href="../the-maximum-clique-problem/#box-7-mcpP-ex2">Example 5.2</a></span> (dense graph)</td>
    <td><span class="arithmatex">\(4\)</span> (by hand)</td>
    <td><span class="arithmatex">\(4\)</span> (coloring)</td>
    <td>this chapter</td>
    </tr>
    </table></div>

---

**Exercises on this chapter:** [:material-pencil: Clique problems](../../exercises/clique.md)

---

**In depth:** [:material-star-outline: the course on this problem](../../selected-problems/maximum-clique.md)

