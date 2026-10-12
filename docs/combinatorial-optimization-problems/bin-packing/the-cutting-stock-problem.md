---
title: "Cutting stock"
---

# 3.2 The cutting stock problem

<div class="info-capitolo" markdown>

**Part 1 · Combinatorial optimization problems · Chapter 3** · [:material-book-open-variant: Chapter 3: Bin packing](index.md) · [:material-file-pdf-box: Lecture notes, volume 1 (PDF)](../../pdf/lecture-notes-1-combinatorial-optimization-problems.pdf) · [:material-pencil: Exercises: Bin packing](../../exercises/bin-packing.md)

</div>

<a id="box-4-defCSP"></a>

!!! definizione "Definition 3.3: Cutting Stock Problem"

    Given:

    1. an infinite number of bins, each with <em>capacity</em> $c \in \Z_{\ge 1}$,

    2. a set $\mathscr{I} = \{1,2,\dots,n\}$ of $n$ items,

    3. for each item $j \in \mathscr{I}$, a <em>weight</em> $w_j \in \Z_{\ge 1}$ and a <em>number of required copies</em> $d_j \in \Z_{\ge 1}$,

    the <strong>Cutting Stock Problem</strong> (CSP) asks to decide in which bin to place each copy of every item, so that the total weight of all item copies in any bin does not exceed the bin capacity, the required number of copies of each item is placed into the bins, and the total number of bins used is minimized.

- A <strong>CSP instance</strong> is specified by:

    1. two integer numbers:

        - the bin capacity $c \in \Z_{\ge 1}$,

        - the number of items $n \in \Z_{\ge 1}$,

    2. two vectors of integer numbers of length $n$:

        - $\vet{w} \in \Z_{\ge 1}^n$, containing the item weights,

        - $\vet{d} \in \Z_{\ge 1}^n$, containing the required number of copies for each item.

- The problem is called the <em>Cutting Stock Problem</em> because, in its classical application, the bins correspond to large stock rolls (or sheets of material) that must be cut in order to produce the required copies of the items, also known as item demands.

- Given a CSP instance, we define the <strong>extended set of items</strong> as

    \begin{equation*}
    \label{ExtSetCSP}
    \hat{\mathscr{I}}
    =
    \big\{\, (j,k) : j \in \mathscr{I},~ k \in \{1,2,\dots,d_j\} \,\big\}, \tag{3.2}
    \end{equation*}

    where each pair $(j,k)$ represents the $k$-th required copy of item $j$. The cardinality of the extended set of items is

    $$
    |\hat{\mathscr{I}}| = \sum_{j\in \mathscr{I}} d_j.
    $$

- A <strong>CSP feasible solution</strong> is a family of <strong>packing patterns</strong>, i.e., subsets of item copies each assigned to one bin,

    $$
    \mathcal{P} \subseteq 2^{\hat{\mathscr{I}}}
    $$

    such that:

    - **(i)** $\mathcal{P}$ forms a partition of $\hat{\mathscr{I}}$ into <em>nonempty</em> packing patterns, namely

        $$
        \begin{gathered}
        P\neq \emptyset, \quad \text{for all } P\in\mathcal{P},\\
        P\cap P'=\emptyset, \quad \text{for all } P,P'\in\mathcal{P}\ \text{with } P\neq P',\\
        \bigcup_{P\in\mathcal{P}} P=\hat{\mathscr{I}};
        \end{gathered}
        $$

    - **(ii)** the total weight of the item copies in every packing pattern does not exceed the bin capacity, namely

        $$
        \sum_{(j,k)\in P} w_j \le c, \quad \text{for all } P\in\mathcal{P}.
        $$

    Accordingly, the CSP can be equivalently stated as the problem of determining a partition of the extended item set into packing patterns such that the total weight in each packing pattern does not exceed the bin capacity, and the number of packing patterns (bins) is minimized.

    !!! chiave ""

        Given a CSP instance, the CSP can be formally stated as:

        \begin{equation*}
        \label{CSP}
        \tilde{\mathcal{P}}
        \in
        \argmin_{\mathcal{P}\subseteq 2^{\hat{\mathscr{I}}}}
        \left\{
        |\mathcal{P}|
        \;:\;
        \begin{array}{l}
        P\neq \emptyset, \quad \forall\, P\in\mathcal{P},\\[8pt]
        P\cap P'=\emptyset, \quad \forall\, P,P'\in\mathcal{P},\, P\neq P',\\[8pt]
        \displaystyle \bigcup_{P\in\mathcal{P}} P=\hat{\mathscr{I}},\\[14pt]
        \displaystyle \sum_{(j,k)\in P} w_j \le c, \quad \forall\, P\in\mathcal{P}
        \end{array}
        \right\}. \tag{3.3}
        \end{equation*}

<a id="box-5-ex-csp"></a>

!!! esempio "Example 3.2: CSP instances"

    We consider bins of capacity $c = 10$ and a set $\mathscr{I} = \{1,2,3,4\}$ of $4$ items ($n=4$), with the following weights and required copies:

    <div class="tabella" markdown="0"><table>
    <tr>
    <th>Items</th>
    <th></th>
    <th><span class="arithmatex">\(j=1\)</span></th>
    <th><span class="arithmatex">\(j=2\)</span></th>
    <th><span class="arithmatex">\(j=3\)</span></th>
    <th><span class="arithmatex">\(j=4\)</span></th>
    </tr>
    <tr>
    <td>Weights</td>
    <td><span class="arithmatex">\(w_j\)</span></td>
    <td><span class="arithmatex">\(4\)</span></td>
    <td><span class="arithmatex">\(5\)</span></td>
    <td><span class="arithmatex">\(3\)</span></td>
    <td><span class="arithmatex">\(6\)</span></td>
    </tr>
    <tr>
    <td>Copies</td>
    <td><span class="arithmatex">\(d_j\)</span></td>
    <td><span class="arithmatex">\(2\)</span></td>
    <td><span class="arithmatex">\(1\)</span></td>
    <td><span class="arithmatex">\(3\)</span></td>
    <td><span class="arithmatex">\(1\)</span></td>
    </tr>
    </table></div>

## 3.2.1 Assumptions

- We make the following assumptions:

    1. The total weight of all required item copies exceeds the bin capacity (otherwise, all copies could fit in a single bin). Formally:

        $$
        \sum_{j\in \mathscr{I}} d_j\, w_j \;>\; c.
        $$

    2. Each item individually fits into a single bin (otherwise, no copy of that item can be packed at all). Formally:

        $$
        w_j \le c, \qquad \forall\, j\in \mathscr{I}.
        $$

## 3.2.2 Counting the solutions, a first solution and a simple bound

- <strong>Candidate solutions.</strong> The instance of <span style="color:#1971c2">[Example 3.2](#box-5-ex-csp)</span> has $2+1+3+1 = 7$ copies. The partitions of the extended set of items are counted by $B(7) = 877$, where identical copies are counted as different items; $262$ of them are feasible.

- <strong>A first solution, by eye.</strong> We pair item $4$ (weight $6$) with a copy of item $1$ (weight $4$), put the other copy of item $1$ with two copies of item $3$ ($4+3+3$), and the last copy of item $3$ with item $2$ ($3+5$):

    $$
    \mathcal{P} = \big\{\, \{(4,1),(1,1)\},~ \{(1,2),(3,1),(3,2)\},~ \{(2,1),(3,3)\} \,\big\}
    $$

    uses $3$ bins, of weights $10$, $10$ and $8$, hence $\UB = 3$.

- <strong>The dual bound and the gap.</strong> The weight bound of the bin packing problem holds with the weights of all the copies: $\LB = \lceil \sum_j d_j w_j / c \rceil = \lceil 28/10 \rceil = 3$. The gap is zero, so the solution is optimal and $z(I) = 3$.

---

**Next:** [Remarks and summary](remarks-and-summary.md)
