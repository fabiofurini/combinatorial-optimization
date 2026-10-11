---
title: "Bin packing and cutting stock"
---

# Bin packing and cutting stock

<div class="info-capitolo" markdown>

**Part 1 · Combinatorial optimization problems · Chapter 3** · [:material-file-pdf-box: Lecture notes, volume 1 (PDF)](../pdf/lecture-notes-1-combinatorial-optimization-problems.pdf)

</div>

!!! nota "Prerequisites"

    - From this module, the chapter «Combinatorial optimization problems»: instances, feasible solutions, primal and dual bounds, the gap, and the Bell numbers that count the partitions of a set.

    - From the chapter «Knapsack problems»: the form of the definitions and of the assumptions on the data.

!!! chiave "Objectives"

    At the end of this chapter you will be able to:

    - state the definition of the bin packing problem and of the cutting stock problem, with instances and feasible solutions;

    - explain the assumptions on the data;

    - count the candidate solutions of a small instance and recognize that they are partitions;

    - find a feasible solution by hand and compute the weight bound;

    - use the two bounds to certify that a solution is optimal.

## 3.1 Why bin packing problems?

- <strong>A story.</strong> Parcels of different weights must be shipped with identical trucks of capacity $c$. How many trucks are needed, and which parcels travel together? The same problem arises when virtual machines are placed on identical servers.

- <strong>History.</strong> The worst-case behaviour of simple packing rules, such as First Fit, was analysed in the early 1970s by Garey, Graham and Ullman (1972) and by Johnson, Demers, Ullman, Garey and Graham (1974). The latter proved that First Fit uses at most $\tfrac{17}{10}$ of the optimal number of bins, plus $2$ (Chapter «Approximation algorithms for bin packing»).

- The cutting stock problem is the same problem with items that come in several identical copies: the bins are rolls or sheets of material and the items are the pieces to cut.

- <strong>A challenge.</strong> Before reading on, try to answer two questions on <span style="color:#1971c2">[Example 3.1](#box-2-ex-bpp)</span>. How many bins are needed? How can we prove that fewer bins are not enough, without listing all the partitions? Here the second question has a simple answer.

## 3.2 The bin packing problem

<a id="box-1-defBPP"></a>

!!! definizione "Definition 3.1: Bin Packing Problem"

    Given:

    1. an infinite number of bins, each with <em>capacity</em> $c \in \Z_{\ge 1}$,

    2. a set $\mathscr{I} = \{1,2,\dots,n\}$ of $n$ items,

    3. for each item $j \in \mathscr{I}$, a <em>weight</em> $w_j \in \Z_{\ge 1}$,

    the <strong>Bin Packing Problem</strong> (BPP) asks to decide in which bin to place each item, so that the total weight of the items in any bin does not exceed the bin capacity, and the total number of bins used is minimized.

- A <strong>BPP instance</strong> is specified by:

    1. two integer numbers:

        - the bin capacity $c \in \Z_{\ge 1}$,

        - the number of items $n \in \Z_{\ge 1}$,

    2. one vector of integer numbers of length $n$:

        - $\vet{w} \in \Z_{\ge 1}^n$, containing the item weights.

- A <strong>BPP feasible solution</strong> is a family of <strong>packing patterns</strong>, i.e., subsets of items each assigned to one bin,

    $$
    \mathcal{P} \subseteq 2^{\mathscr{I}}
    $$

    such that:

    - **(i)** $\mathcal{P}$ forms a partition of $\mathscr{I}$ into <em>nonempty</em> packing patterns, namely

        $$
        \begin{gathered}
        P\neq \emptyset, \quad \text{for all } \, P\in\mathcal{P},\\
        P\cap P'=\emptyset, \quad \text{for all } \, P,P'\in\mathcal{P}\ \text{with } P\neq P',\\
        \bigcup_{P\in\mathcal{P}} P=\mathscr{I};
        \end{gathered}
        $$

    - **(ii)** the total weight of every packing pattern in $\mathcal{P}$ respects the bin capacity, namely

        $$
        \sum_{j\in P} w_j \le c, \quad \text{for all }\, P\in\mathcal{P}.
        $$

    Accordingly, the BPP can be equivalently stated as the problem of determining a partition of the item set into packing patterns such that the total weight of the items in each packing pattern does not exceed the bin capacity, and the number of packing patterns (bins) is minimized.

    !!! chiave ""

        Given a BPP instance, the BPP can be formally stated as:

        \begin{equation*}
        \label{BPP}
        \tilde{\mathcal{P}}
        \in
        \argmin_{\mathcal{P}\subseteq 2^{\mathscr{I}}}
        \left\{
        |\mathcal{P}|
        \;:\;
        \begin{array}{l}
        P\neq \emptyset, \quad \forall\, P\in\mathcal{P},\\[8pt]
        P\cap P'=\emptyset, \quad \forall\, P,P'\in\mathcal{P},\, P\neq P',\\[8pt]
        \displaystyle \bigcup_{P\in\mathcal{P}} P=\mathscr{I},\\[14pt]
        \displaystyle \sum_{j\in P} w_j \le c, \quad \forall\, P\in\mathcal{P}
        \end{array}
        \right\}. \tag{3.1}
        \end{equation*}

<a id="box-2-ex-bpp"></a>

!!! esempio "Example 3.1: BPP instances"

    We consider a bin of capacity $c = 10$ and a set $\mathscr{I} = \{1,2,3,4,5\}$ of $5$ items ($n = 5$), with the following item weights:

    <div class="tabella" markdown="0"><table>
    <tr>
    <th>Items</th>
    <th></th>
    <th><span class="arithmatex">\(j=1\)</span></th>
    <th><span class="arithmatex">\(j=2\)</span></th>
    <th><span class="arithmatex">\(j=3\)</span></th>
    <th><span class="arithmatex">\(j=4\)</span></th>
    <th><span class="arithmatex">\(j=5\)</span></th>
    </tr>
    <tr>
    <td>Weights</td>
    <td><span class="arithmatex">\(w_j\)</span></td>
    <td><span class="arithmatex">\(6\)</span></td>
    <td><span class="arithmatex">\(5\)</span></td>
    <td><span class="arithmatex">\(4\)</span></td>
    <td><span class="arithmatex">\(7\)</span></td>
    <td><span class="arithmatex">\(3\)</span></td>
    </tr>
    </table></div>

    We call this BPP instance <span style="color:#1971c2">[Example 3.1](#box-2-ex-bpp)</span>: it is the reference instance of the chapter.

### 3.2.1 Assumptions

- We make the following assumptions:

    1. The total weight of all items exceeds the bin capacity (otherwise, all items could fit in a single bin). Formally:

        $$
        \sum_{j \in \mathscr{I}} w_j > c
        $$

    2. Each item individually fits into a single bin (otherwise, it cannot be packed at all). Formally:

        $$
        w_j \le c,~~~~ \forall j \in \mathscr{I}
        $$

### 3.2.2 Counting the solutions, a first solution and a simple bound

- <strong>Candidate solutions.</strong> The candidate solutions are the partitions of $\mathscr{I}$: they are counted by the Bell numbers (Chapter «Combinatorial optimization problems»). For <span style="color:#1971c2">[Example 3.1](#box-2-ex-bpp)</span> we have $B(5) = 52$ partitions.

- <strong>Feasible solutions.</strong> A partition is feasible if every bin weighs at most $10$. Enumeration gives $11$ feasible partitions: $1$ with $5$ bins (one item per bin), $6$ with $4$ bins and $4$ with $3$ bins. Two bins are not enough, since the total weight $25$ exceeds $2 \cdot 10$.

- <strong>A first solution, by eye.</strong> We pair the heavy items with the light ones: item $4$ (weight $7$) with item $5$ (weight $3$), and item $1$ (weight $6$) with item $3$ (weight $4$); item $2$ (weight $5$) stays alone. The solution

    $$
    \mathcal{P} = \big\{\, \{4,5\},~ \{1,3\},~ \{2\} \,\big\}
    $$

    uses $3$ bins, of weights $10$, $10$ and $5$: it is a <strong>primal bound</strong>, $\UB = 3 \ge z(I)$.

<a id="box-3-obs-bpp-l1"></a>

!!! teorema "Observation 3.2: weight bound"

    Every feasible solution uses at least

    $$
    \left\lceil \frac{\sum_{j \in \mathscr{I}} w_j}{c} \right\rceil
    $$

    bins, so this value is a dual bound.

??? dimostrazione "Proof"

    If a solution uses $k$ bins, the total weight it carries is at most $k \, c$. The total weight of the items is $\sum_{j} w_j$, hence $k\,c \ge \sum_{j} w_j$. The number $k$ is an integer, so $k \ge \lceil \sum_j w_j / c \rceil$. <span class="qed">□</span>

- <strong>The dual bound and the gap.</strong> In <span style="color:#1971c2">[Example 3.1](#box-2-ex-bpp)</span> we have $\sum_j w_j = 25$ and $c = 10$, so $\LB = \lceil 25/10 \rceil = 3$. The two bounds coincide: the gap is zero, the solution found by eye is optimal and $z(I) = 3$, without enumerating the partitions.

- The optimal solution is not unique: there are $4$ optimal partitions,

    $$
    \begin{array}{ll}
    \{\{1\},\{2,3\},\{4,5\}\}, & \{\{2\},\{1,3\},\{4,5\}\},\\[0.5ex]
    \{\{4\},\{1,5\},\{2,3\}\}, & \{\{4\},\{1,3\},\{2,5\}\}.
    \end{array}
    $$

## 3.3 The cutting stock problem

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

### 3.3.1 Assumptions

- We make the following assumptions:

    1. The total weight of all required item copies exceeds the bin capacity (otherwise, all copies could fit in a single bin). Formally:

        $$
        \sum_{j\in \mathscr{I}} d_j\, w_j \;>\; c.
        $$

    2. Each item individually fits into a single bin (otherwise, no copy of that item can be packed at all). Formally:

        $$
        w_j \le c, \qquad \forall\, j\in \mathscr{I}.
        $$

### 3.3.2 Counting the solutions, a first solution and a simple bound

- <strong>Candidate solutions.</strong> The instance of <span style="color:#1971c2">[Example 3.2](#box-5-ex-csp)</span> has $2+1+3+1 = 7$ copies. The partitions of the extended set of items are counted by $B(7) = 877$, where identical copies are counted as different items; $262$ of them are feasible.

- <strong>A first solution, by eye.</strong> We pair item $4$ (weight $6$) with a copy of item $1$ (weight $4$), put the other copy of item $1$ with two copies of item $3$ ($4+3+3$), and the last copy of item $3$ with item $2$ ($3+5$):

    $$
    \mathcal{P} = \big\{\, \{(4,1),(1,1)\},~ \{(1,2),(3,1),(3,2)\},~ \{(2,1),(3,3)\} \,\big\}
    $$

    uses $3$ bins, of weights $10$, $10$ and $8$, hence $\UB = 3$.

- <strong>The dual bound and the gap.</strong> The weight bound of the bin packing problem holds with the weights of all the copies: $\LB = \lceil \sum_j d_j w_j / c \rceil = \lceil 28/10 \rceil = 3$. The gap is zero, so the solution is optimal and $z(I) = 3$.

## 3.4 Typical mistakes

!!! attenzione "Warning"

    - <strong>Believing that the weight bound is always tight.</strong> With three items of weight $6$ and $c = 10$ the bound gives $\lceil 18/10 \rceil = 2$, but no two items fit together, so $3$ bins are needed.

    - <strong>Counting the bins by the weights alone.</strong> The weight bound ignores how the items fit together; it is a dual bound, and the primal bound still needs a solution.

    - <strong>Listing the same packing twice.</strong> In the cutting stock problem the copies of an item are interchangeable: partitions that differ only by the exchange of identical copies are the same packing.

    - <strong>Ignoring the order of the bins.</strong> A solution is a partition: $\{\{4,5\},\{1,3\},\{2\}\}$ and $\{\{2\},\{4,5\},\{1,3\}\}$ are the same solution.

    - <strong>Forgetting the assumptions.</strong> An item with $w_j > c$ fits in no bin, and if the total weight is at most $c$ one bin is enough.

## 3.5 In summary

!!! chiave "In summary"

    - The BPP partitions the items into the minimum number of bins of capacity $c$; the cutting stock problem is the BPP with several identical copies of every item, and the BPP is the case $d_j = 1$.

    - A solution is a partition, so the candidates are counted by the Bell numbers and grow very fast.

    - A solution found by eye is a primal bound; the weight bound $\lceil \sum_j w_j / c \rceil$ is a dual bound.

    - When the two bounds coincide, the gap is zero and the solution is certified optimal.

    <strong>Dashboard of the reference instances.</strong>

    <div class="tabella" markdown="0"><table>
    <tr>
    <th>instance (min)</th>
    <th>lower bound</th>
    <th>upper bound</th>
    <th>from</th>
    </tr>
    <tr>
    <td>BPP, <span style="color:#1971c2">[Example 3.1](#box-2-ex-bpp)</span></td>
    <td><span class="arithmatex">\(3\)</span> (weight bound)</td>
    <td><span class="arithmatex">\(3\)</span> (by eye)</td>
    <td>this chapter</td>
    </tr>
    <tr>
    <td>CSP, <span style="color:#1971c2">[Example 3.2](#box-5-ex-csp)</span></td>
    <td><span class="arithmatex">\(3\)</span> (weight bound)</td>
    <td><span class="arithmatex">\(3\)</span> (by eye)</td>
    <td>this chapter</td>
    </tr>
    </table></div>
