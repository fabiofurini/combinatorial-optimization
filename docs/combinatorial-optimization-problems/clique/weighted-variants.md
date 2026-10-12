---
title: "Weighted variants"
---

# 5.3 Weighted variants

<div class="info-capitolo" markdown>

**Part 1 · Combinatorial optimization problems · Chapter 5** · [:material-book-open-variant: Chapter 5: Maximum clique](index.md) · [:material-file-pdf-box: Lecture notes, volume 1 (PDF)](../../pdf/lecture-notes-1-combinatorial-optimization-problems.pdf) · [:material-pencil: Exercises: Maximum clique](../../exercises/clique.md)

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

    We add to the graph of <span style="color:#1971c2">[Example 5.2](index.md#box-7-mcpP-ex2)</span> the vertex weights in blue. The vertex-weighted maximum clique is $\{2,3,5,8\}$, with weight $8+9+6+9=32$: it is unique, and it is not the maximum clique in red of <span style="color:#1971c2">[Example 5.2](index.md#box-7-mcpP-ex2)</span>, whose weight is $5+9+5+5=24$.

    ![Figure 3](../../img/clique/fig03.svg){ .fig loading=lazy  }

    A clique takes at most one vertex from each pair $\{1,5\},\{2,6\},\{3,7\},\{4,8\}$; taking the heavier one of each pair gives $6+8+9+9=32$, and these four vertices form a clique.

<a id="box-14-mcpP-ex4"></a>

!!! esempio "Example 5.4: edge-weighted maximum clique problem"

    We add to the graph of <span style="color:#1971c2">[Example 5.2](index.md#box-7-mcpP-ex2)</span> the edge weights in red. The edge-weighted maximum clique is $\{2,5,7,8\}$, in violet: its six edges weigh $6+4+9+7+3+8=37$, and the enumeration of the $16$ maximum cliques shows that it is the unique optimal solution.

    ![Figure 4](../../img/clique/fig04.svg){ .fig loading=lazy  }

## 5.4 Complexity

- The <strong>decision version</strong> of the MCP asks, for a graph $G$ and an integer $k$, whether $G$ has a clique with $k$ vertices. Karp (1972) included it among his $21$ NP-complete problems, so the MCP is NP-hard. By [Proposition 5.5](index.md#box-5-mcpP-prop-omega-alpha), the same holds for the MSSP.

- Listing all the subsets of $V$ and checking the pairs of each one takes $O(2^n\, n^2)$ steps. For a <em>fixed</em> $k$, the $\binom{n}{k}$ subsets with $k$ vertices are checked in $O(n^k\, k^2)$ steps: a polynomial for every fixed $k$, but the exponent grows with the size of the clique.

- The MCP is also hard to approximate: Håstad (1999) proved that, for every $\varepsilon>0$, no polynomial algorithm guarantees a clique with at least $\omega(G)/n^{1-\varepsilon}$ vertices, unless every problem in NP can be solved in randomized polynomial time.

---

**Next:** [Remarks and summary](remarks-and-summary.md)
