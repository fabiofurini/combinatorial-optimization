---
title: "0/1 knapsack"
---

# 2.2 The 0/1 knapsack problem { #sez-sec-kp-KP }

<div class="info-capitolo" markdown>

**Part 1 · Combinatorial optimization problems · Chapter 2** · [:material-book-open-variant: Chapter 2: Knapsack problems](index.md) · [:material-file-pdf-box: Lecture notes, volume 1 (PDF)](../../pdf/lecture-notes-1-combinatorial-optimization-problems.pdf) · [:material-presentation: Slides](../../pdf/slides-knapsack.pdf) · [:material-pencil: Exercises: Knapsack problems](../../exercises/knapsack.md) · [:material-gesture-tap: App: Brute force on the 0/1 knapsack problem](../../lab/kp-brute-force.md)

</div>

<a id="box-1-defKP"></a>

!!! definizione "Definition 2.1: 0/1 Knapsack Problem"

    Given:

    1. a knapsack of <em>capacity</em> $c \in \Z_{\ge 1}$,

    2. a set $\mathscr{I} = \{1,2,\dots,n\}$ of $n$ items,

    3. for each item $j \in \mathscr{I}$, a <em>profit</em> $p_j \in \Z_{\ge 1}$ and a <em>weight</em> $w_j \in \Z_{\ge 1}$,

    the <strong>0/1 Knapsack Problem</strong> (KP) asks to decide which items to insert into the knapsack, so that the total weight of the selected items does not exceed the knapsack capacity, and the total profit of the selected items is maximized.

- A <strong>KP instance</strong> is specified by:

    1. two integer numbers:

        - the number of items $n \in \Z_{\ge 1}$,

        - the knapsack capacity $c \in \Z_{\ge 1}$,

    2. two vectors of integer numbers of length $n$:

        - $\vet{p} \in \Z_{\ge 1}^n$, containing the item profits,

        - $\vet{w} \in \Z_{\ge 1}^n$, containing the item weights.

- A <strong>KP feasible solution</strong> is a subset of items

    $$
    S \subseteq \mathscr{I}
    $$

    such that the total weight of the selected items does not exceed the knapsack capacity, namely

    $$
    \sum_{j\in S} w_j \le c .
    $$

    Accordingly, the KP can be equivalently stated as the problem of selecting a subset of items whose total weight respects the knapsack capacity, and whose total profit is maximized.

    !!! chiave ""

        Given a KP instance, the KP can be formally stated as:

        \begin{equation*}
        \label{KP}
        \tilde{S}\in \arg\max_{S \subseteq \mathscr{I}}
        \left\{~~ \sum_{j \in S} p_j \;\;:\;\; \sum_{j \in S} w_j \le c ~~\right\}. \tag{2.1}
        \end{equation*}

<a id="box-2-ex-kp"></a>

!!! esempio "Example 2.1: KP instance"

    We consider a knapsack of capacity $c = 9$ and a set $\mathscr{I} = \{1,2,3,4,5,6\}$ of $6$ items ($n = 6$), with the following profits and weights:

    <div class="tabella" markdown="0"><table>
    <tr>
    <th>Items</th>
    <th></th>
    <th><span class="arithmatex">\(j = 1\)</span></th>
    <th><span class="arithmatex">\(j = 2\)</span></th>
    <th><span class="arithmatex">\(j = 3\)</span></th>
    <th><span class="arithmatex">\(j = 4\)</span></th>
    <th><span class="arithmatex">\(j = 5\)</span></th>
    <th><span class="arithmatex">\(j = 6\)</span></th>
    </tr>
    <tr>
    <td>Profits</td>
    <td><span class="arithmatex">\(p_j\)</span></td>
    <td><span class="arithmatex">\(6\)</span></td>
    <td><span class="arithmatex">\(5\)</span></td>
    <td><span class="arithmatex">\(8\)</span></td>
    <td><span class="arithmatex">\(9\)</span></td>
    <td><span class="arithmatex">\(6\)</span></td>
    <td><span class="arithmatex">\(7\)</span></td>
    </tr>
    <tr>
    <td>Weights</td>
    <td><span class="arithmatex">\(w_j\)</span></td>
    <td><span class="arithmatex">\(2\)</span></td>
    <td><span class="arithmatex">\(3\)</span></td>
    <td><span class="arithmatex">\(6\)</span></td>
    <td><span class="arithmatex">\(7\)</span></td>
    <td><span class="arithmatex">\(5\)</span></td>
    <td><span class="arithmatex">\(9\)</span></td>
    </tr>
    </table></div>

    In the drawing, the knapsack is a box of length $c=9$ and every item is a block of length $w_j$. The items $1$ and $4$ fill the knapsack, with weight $9$ and profit $15$; the other items stay out (dashed).

    ![Figure 1](../../img/knapsack/fig01.svg){ .fig loading=lazy  }

    We call this KP instance <span style="color:#1971c2">[Example 2.1](#box-2-ex-kp)</span>: it is the reference instance of the chapter.

## 2.2.1 Assumptions

- We make the following assumptions:

    1. The total weight of all items exceeds the knapsack capacity (otherwise, all items could be selected). Formally:

        $$
        \sum_{j \in \mathscr{I}} w_j > c
        $$

    2. Each item individually fits into the knapsack (otherwise, it cannot be selected). Formally:

        $$
        w_j \le c,~~~~ \forall j \in \mathscr{I}
        $$

## 2.2.2 Counting the solutions, a first solution and a simple bound

- <strong>Candidate solutions.</strong> Every subset of $\mathscr{I}$ is a candidate solution, so there are $2^n$ of them ([Chapter 1 «Combinatorial optimization problems»](https://fabiofurini.github.io/combinatorial-optimization/combinatorial-optimization-problems/combinatorial-optimization/counting-the-solutions/)). For <span style="color:#1971c2">[Example 2.1](#box-2-ex-kp)</span> we have $2^6 = 64$.

- <strong>Feasible solutions.</strong> The three lightest items weigh $2+3+5 = 10 > 9$, so no subset with three or more items is feasible. The feasible solutions are the empty set, the $6$ singletons and the $6$ pairs of the following table: $13$ solutions out of $64$.

<div class="tabella" markdown="0"><table>
<tr>
<th>pair <span class="arithmatex">\(S\)</span></th>
<th><span class="arithmatex">\(\{1,2\}\)</span></th>
<th><span class="arithmatex">\(\{1,3\}\)</span></th>
<th><span class="arithmatex">\(\{1,4\}\)</span></th>
<th><span class="arithmatex">\(\{1,5\}\)</span></th>
<th><span class="arithmatex">\(\{2,3\}\)</span></th>
<th><span class="arithmatex">\(\{2,5\}\)</span></th>
</tr>
<tr>
<td>weight</td>
<td><span class="arithmatex">\(5\)</span></td>
<td><span class="arithmatex">\(8\)</span></td>
<td><span class="arithmatex">\(9\)</span></td>
<td><span class="arithmatex">\(7\)</span></td>
<td><span class="arithmatex">\(9\)</span></td>
<td><span class="arithmatex">\(8\)</span></td>
</tr>
<tr>
<td>profit</td>
<td><span class="arithmatex">\(11\)</span></td>
<td><span class="arithmatex">\(14\)</span></td>
<td><span class="arithmatex">\(\mathbf{15}\)</span></td>
<td><span class="arithmatex">\(12\)</span></td>
<td><span class="arithmatex">\(13\)</span></td>
<td><span class="arithmatex">\(11\)</span></td>
</tr>
</table></div>

- <strong>A first solution, by eye.</strong> Item $4$ has the largest profit ($9$, weight $7$). The residual capacity $9-7=2$ is enough for item $1$ (weight $2$, profit $6$). The subset $\{1,4\}$ has weight $9$ and profit $15$: it is a <strong>primal bound</strong>, $\LB = 15 \le z(I)$.

<a id="box-3-obs-kp-card"></a>

!!! teorema "Observation 2.2: cardinality bound"

    Let $\bar k$ be the largest integer such that the $\bar k$ lightest items weigh at most $c$. Every feasible subset has at most $\bar k$ items, hence $z(I)$ is at most the sum of the $\bar k$ largest profits.

??? dimostrazione "Proof"

    A subset with $k$ items weighs at least as much as the $k$ lightest items. If $k > \bar k$, the $k$ lightest items weigh more than $c$, so the subset is not feasible. The profit of a subset with at most $\bar k$ items is at most the sum of the $\bar k$ largest profits. <span class="qed">□</span>

- <strong>A first dual bound.</strong> In <span style="color:#1971c2">[Example 2.1](#box-2-ex-kp)</span> we have $\bar k = 2$, since $2+3 = 5 \le 9$ and $2+3+5 = 10 > 9$. The two largest profits are $9$ and $8$, so $\UB = 17$. The sum of all the profits, $41$, is a much weaker dual bound.

- <strong>The gap.</strong> We have $15 \le z(I) \le 17$: the absolute gap is $2$ and the relative gap is $\tfrac{2}{15}$. Listing the $13$ feasible subsets shows that $\{1,4\}$ is the unique optimal solution and $z(I) = 15$; for larger instances we need stronger bounds, which come from relaxations (module <em>Integer linear programming</em>, [Chapter 2 «Primal and dual bounds»](https://fabiofurini.github.io/integer-linear-programming/models-and-bounds/lp-relaxation/)).

---

**Next:** [2.3 The subset sum problem](the-subset-sum-problem.md)
