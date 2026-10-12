---
title: "Remarks and summary"
---

# Remarks and summary

<div class="info-capitolo" markdown>

**Part 1 · Combinatorial optimization problems · Chapter 5** · [:material-book-open-variant: Chapter 5: Maximum clique](index.md) · [:material-file-pdf-box: Lecture notes, volume 1 (PDF)](../../pdf/lecture-notes-1-combinatorial-optimization-problems.pdf) · [:material-pencil: Exercises: Maximum clique](../../exercises/clique.md)

</div>

## 5.5 Remarks

- In a coloring, every color class is a stable set: the MSSP is the problem of the largest color class, and the clique number is the dual bound of the chapter «Vertex coloring».

- Applications of cliques and stable sets:

    - groups of pairwise connected members in social networks;

    - groups of pairwise compatible tasks or exams, in scheduling and in the planning of timetables;

    - common substructures of two molecules, in chemistry and in biology;

    - codes that correct errors, as large sets of words pairwise far apart.

## 5.6 Typical mistakes

!!! attenzione "Warning"

    - <strong>Confusing a maximal clique with a maximum clique.</strong> A clique is maximal when no vertex can be added to it; it is maximum when no clique is larger. In <span style="color:#1971c2">[Example 5.1](index.md#box-6-mcpP-ex1)</span>, $\{4,5\}$ is maximal but not maximum.

    - <strong>Building the complement graph with the edges of $G$.</strong> The edges of $\overline{G}$ are exactly the pairs that are <em>not</em> edges of $G$: there are $\binom{n}{2}-m$ of them.

    - <strong>Using a lower bound as an upper bound.</strong> A clique found by hand gives $\LB \le \omega(G)$; the degree bounds and a coloring give $\UB \ge \omega(G)$. In this chapter the problem is a maximization.

    - <strong>Believing that the coloring bound is tight.</strong> On the cycle with $5$ vertices $\omega(G)=2$ and $\chi(G)=3$.

## 5.7 In summary

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
    <td><span style="color:#1971c2">[Example 5.1](index.md#box-6-mcpP-ex1)</span> (cycle with a chord)</td>
    <td><span class="arithmatex">\(3\)</span> (by hand)</td>
    <td><span class="arithmatex">\(3\)</span> (degree count, coloring)</td>
    <td>this chapter</td>
    </tr>
    <tr>
    <td><span style="color:#1971c2">[Example 5.2](index.md#box-7-mcpP-ex2)</span> (dense graph)</td>
    <td><span class="arithmatex">\(4\)</span> (by hand)</td>
    <td><span class="arithmatex">\(4\)</span> (coloring)</td>
    <td>this chapter</td>
    </tr>
    </table></div>

---

**Exercises on this chapter:** [:material-pencil: Maximum clique](../../exercises/clique.md)

---

**In depth:** [:material-star-outline: the course on this problem](../../selected-problems/maximum-clique.md)

