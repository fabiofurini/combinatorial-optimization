---
title: "Knapsack problems"
---

# Knapsack problems

<div class="info-capitolo" markdown>

**Part 1 · Combinatorial optimization problems · Chapter 2** · [:material-file-pdf-box: Lecture notes, volume 1 (PDF)](../pdf/lecture-notes-1-combinatorial-optimization-problems.pdf) · [:material-pencil: Exercises](../exercises/knapsack.md)

</div>

!!! nota "Prerequisites"

    - From this module, the chapter «Combinatorial optimization problems»: instances, feasible solutions, primal and dual bounds and the gap.

    - From the <em>Preliminaries</em>: subsets of a finite set and the number $2^n$ of subsets.

!!! chiave "Objectives"

    At the end of this chapter you will be able to:

    - state the definition of the knapsack problem and of its variants, with instances and feasible solutions;

    - explain the assumptions on the data and why they can be made without loss of generality;

    - count the candidate solutions and the feasible solutions of a small instance;

    - find a feasible solution by hand and compute a simple combinatorial dual bound;

    - tell the variants apart: copies of the items, several resources, several knapsacks, classes of items.

## 2.1 The knapsack problem

<a id="box-1-defKP"></a>

!!! definizione "Definition 2.1: Knapsack Problem"

    Given:

    1. a knapsack of <em>capacity</em> $c \in \Z_{\ge 1}$,

    2. a set $\mathscr{I} = \{1,2,\dots,n\}$ of $n$ items,

    3. for each item $j \in \mathscr{I}$, a <em>profit</em> $p_j \in \Z_{\ge 1}$ and a <em>weight</em> $w_j \in \Z_{\ge 1}$,

    the <strong>Knapsack Problem</strong> (KP) asks to decide which items to insert into the knapsack, so that the total weight of the selected items does not exceed the knapsack capacity, and the total profit of the selected items is maximized.

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

    We call this KP instance <span style="color:#1971c2">[Example 2.1](#box-2-ex-kp)</span>: it is the reference instance of the chapter.

### 2.1.1 Assumptions

- We make the following assumptions:

    1. The total weight of all items exceeds the knapsack capacity (otherwise, all items could be selected). Formally:

        $$
        \sum_{j \in \mathscr{I}} w_j > c
        $$

    2. Each item individually fits into the knapsack (otherwise, it cannot be selected). Formally:

        $$
        w_j \le c,~~~~ \forall j \in \mathscr{I}
        $$

### 2.1.2 Counting the solutions, a first solution and a simple bound

- <strong>Candidate solutions.</strong> Every subset of $\mathscr{I}$ is a candidate solution, so there are $2^n$ of them (Chapter «Combinatorial optimization problems»). For <span style="color:#1971c2">[Example 2.1](#box-2-ex-kp)</span> we have $2^6 = 64$.

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

- <strong>The gap.</strong> We have $15 \le z(I) \le 17$: the absolute gap is $2$ and the relative gap is $\tfrac{2}{15}$. Listing the $13$ feasible subsets shows that $\{1,4\}$ is the unique optimal solution and $z(I) = 15$; for larger instances we need stronger bounds, which come from relaxations (module <em>Integer linear programming</em> and Chapter «Knapsack: formulations and bounds»).

## 2.2 The subset sum problem

<a id="box-4-defSSP"></a>

!!! definizione "Definition 2.3: Subset Sum Problem"

    Given:

    1. a target value $c \in \Z_{\ge 1}$,

    2. a set $\mathscr{I} = \{1,2,\dots,n\}$ of $n$ items,

    3. for each item $j \in \mathscr{I}$, a <em>weight</em> $w_j \in \Z_{\ge 1}$,

    the <strong>Subset Sum Problem</strong> (SSP) asks whether there exists a subset of items whose total weight is exactly equal to the target value $c$.

- An <strong>SSP instance</strong> is specified by:

    1. two integer numbers:

        - the number of items $n \in \Z_{\ge 1}$,

        - the target value $c \in \Z_{\ge 1}$,

    2. one vector of integer numbers of length $n$:

        - $\vet{w} \in \Z_{\ge 1}^n$, containing the item weights.

- An <strong>SSP feasible solution</strong> is a subset of items

    $$
    S \subseteq \mathscr{I}
    $$

    such that the total weight of the selected items is exactly equal to the target value, namely

    $$
    \sum_{j\in S} w_j = c .
    $$

    Accordingly, the SSP can be equivalently stated as the problem of selecting a subset of items whose total weight matches the target value exactly.

    !!! chiave ""

        Given an SSP instance, the SSP can be formally stated as:

        \begin{equation*}
        \label{SSP}
        \text{find } S \subseteq \mathscr{I}
        \quad \text{such that} \quad
        \sum_{j \in S} w_j = c . \tag{2.2}
        \end{equation*}

<a id="box-5-ex-ssp"></a>

!!! esempio "Example 2.2: SSP instance"

    We consider a target value $c = 9$ and a set $\mathscr{I} = \{1,2,3,4,5,6\}$ of $6$ items ($n = 6$), with the following weights:

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

    For instance, the subset $S=\{1,4\}$ is feasible since $w_1+w_4=2+7=9$. Also, the subset $S=\{6\}$ is feasible since $w_6=9$.

- The SSP is not an <strong>optimization problem</strong>, since its answer is either <strong>yes</strong> or <strong>no</strong>. However, it can be solved by using an optimization problem.

- An SSP instance can be solved as a KP instance by setting the profit of each item equal to its weight, namely

    $$
    p_j = w_j, \qquad \forall j\in \mathscr{I}.
    $$

    In this case, we solve the following KP:

    \begin{equation*}
    \tilde{S}\in \arg\max_{S \subseteq \mathscr{I}}
    \left\{~~ \sum_{j \in S} w_j \;\;:\;\; \sum_{j \in S} w_j \le c ~~\right\}.
    \end{equation*}

    If $\sum_{j\in \tilde{S}} w_j = c$, then the answer to the SSP is <strong>yes</strong>; otherwise, if $\sum_{j\in \tilde{S}} w_j < c$, the answer is <strong>no</strong>.

### 2.2.1 Assumptions

- We make the following assumptions:

    1. The total weight of all items is at least the target value (otherwise, no feasible subset can exist). Formally:

        $$
        \sum_{j \in \mathscr{I}} w_j \ge c
        $$

    2. Each item weight is not larger than the target value (otherwise, it cannot belong to any feasible subset). Formally:

        $$
        w_j \le c,~~~~ \forall j \in \mathscr{I}
        $$

## 2.3 The bounded knapsack problem

<a id="box-6-defBKP"></a>

!!! definizione "Definition 2.4: Bounded Knapsack Problem"

    Given:

    1. a knapsack of <em>capacity</em> $c \in \Z_{\ge 1}$,

    2. a set $\mathscr{I} = \{1,2,\dots,n\}$ of $n$ items,

    3. for each item $j \in \mathscr{I}$, a <em>profit</em> $p_j \in \Z_{\ge 1}$, a <em>weight</em> $w_j \in \Z_{\ge 1}$, and a <em>number of available copies</em> $b_j \in \Z_{\ge 1}$,

    the <strong>Bounded Knapsack Problem</strong> (BKP) asks to decide how many copies of each item to insert into the knapsack, so that the total weight of all selected item copies does not exceed the knapsack capacity, each item is taken no more than its available copies, and the total profit of all selected item copies is maximized.

- A <strong>BKP instance</strong> is specified by:

    1. two integer numbers:

        - the number of items $n \in \Z_{\ge 1}$,

        - the knapsack capacity $c \in \Z_{\ge 1}$,

    2. three vectors of integer numbers of length $n$:

        - $\vet{p} \in \Z_{\ge 1}^n$, containing the item profits,

        - $\vet{w} \in \Z_{\ge 1}^n$, containing the item weights,

        - $\vet{b} \in \Z_{\ge 1}^n$, containing the number of available copies of each item.

- Given a BKP instance, we define the <strong>extended set of items</strong> as

    \begin{equation*}
    \label{ExtSet}
    \hat{\mathscr{I}}
    =
    \big\{\, (j,k) : j \in \mathscr{I},~ k \in \{1,2,\dots,b_j\} \,\big\}, \tag{2.3}
    \end{equation*}

    where each pair $(j,k)$ represents the $k$-th available copy of item $j$. The cardinality of the extended set of items is

    $$
    |\hat{\mathscr{I}}| = \sum_{j \in \mathscr{I}} b_j.
    $$

- A <strong>BKP feasible solution</strong> is a subset of items

    $$
    S \subseteq \hat{\mathscr{I}}
    $$

    such that the total weight of the selected items does not exceed the knapsack capacity, namely

    $$
    \sum_{(j,k)\in S} w_j \le c .
    $$

    Accordingly, the BKP can be equivalently stated as the problem of selecting a subset of the extended set of items whose total weight respects the knapsack capacity, and whose total profit is maximized.

    !!! chiave ""

        Given a BKP instance, the BKP can be formally stated as:

        \begin{equation*}
        \label{BKP}
        \tilde{S}\in
        \arg\max_{S \subseteq \hat{\mathscr{I}} }
        \left\{~~ \sum_{(j,k) \in S} p_j
        \;:\; \sum_{(j,k) \in S} w_j \le c ~~\right\}. \tag{2.4}
        \end{equation*}

<a id="box-7-ex-bkp"></a>

!!! esempio "Example 2.3: BKP instance"

    We consider a knapsack of capacity $c = 9$ and a set $\mathscr{I} = \{1,2,3,4,5,6\}$ of $6$ items ($n = 6$), with the following profits, weights, and available copies:

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
    <tr>
    <td>Available copies</td>
    <td><span class="arithmatex">\(b_j\)</span></td>
    <td><span class="arithmatex">\(2\)</span></td>
    <td><span class="arithmatex">\(2\)</span></td>
    <td><span class="arithmatex">\(1\)</span></td>
    <td><span class="arithmatex">\(1\)</span></td>
    <td><span class="arithmatex">\(1\)</span></td>
    <td><span class="arithmatex">\(1\)</span></td>
    </tr>
    </table></div>

    The extended set of items is:

    $$
    \hat{\mathscr{I}} \;=\; \big\{~(1,1),(1,2),\; (2,1),(2,2),\; (3,1),\; (4,1),\; (5,1),\; (6,1) ~\big\}.
    $$

    Each copy $(j,k)$ has profit $p_j$ and weight $w_j$.

    <div class="tabella" markdown="0"><table>
    <tr>
    <th>Copy label</th>
    <th>1</th>
    <th>2</th>
    <th>3</th>
    <th>4</th>
    <th>5</th>
    <th>6</th>
    <th>7</th>
    <th>8</th>
    </tr>
    <tr>
    <td><span class="arithmatex">\((j,k)\)</span></td>
    <td><span class="arithmatex">\((1,1)\)</span></td>
    <td><span class="arithmatex">\((1,2)\)</span></td>
    <td><span class="arithmatex">\((2,1)\)</span></td>
    <td><span class="arithmatex">\((2,2)\)</span></td>
    <td><span class="arithmatex">\((3,1)\)</span></td>
    <td><span class="arithmatex">\((4,1)\)</span></td>
    <td><span class="arithmatex">\((5,1)\)</span></td>
    <td><span class="arithmatex">\((6,1)\)</span></td>
    </tr>
    <tr>
    <td>Profit <span class="arithmatex">\(p_j\)</span></td>
    <td><span class="arithmatex">\(6\)</span></td>
    <td><span class="arithmatex">\(6\)</span></td>
    <td><span class="arithmatex">\(5\)</span></td>
    <td><span class="arithmatex">\(5\)</span></td>
    <td><span class="arithmatex">\(8\)</span></td>
    <td><span class="arithmatex">\(9\)</span></td>
    <td><span class="arithmatex">\(6\)</span></td>
    <td><span class="arithmatex">\(7\)</span></td>
    </tr>
    <tr>
    <td>Weight <span class="arithmatex">\(w_j\)</span></td>
    <td><span class="arithmatex">\(2\)</span></td>
    <td><span class="arithmatex">\(2\)</span></td>
    <td><span class="arithmatex">\(3\)</span></td>
    <td><span class="arithmatex">\(3\)</span></td>
    <td><span class="arithmatex">\(6\)</span></td>
    <td><span class="arithmatex">\(7\)</span></td>
    <td><span class="arithmatex">\(5\)</span></td>
    <td><span class="arithmatex">\(9\)</span></td>
    </tr>
    </table></div>

### 2.3.1 Assumptions

- We make the following assumptions:

    1. The total weight of all available copies of all items exceeds the knapsack capacity (otherwise, all copies could be selected). Formally:

        $$
        \sum_{j \in \mathscr{I}} b_j \, w_j > c
        $$

    2. Each item individually fits into the knapsack (otherwise, it cannot be selected). Formally:

        $$
        w_j \le c, \qquad \forall j \in \mathscr{I}
        $$

    3. The total weight of all available copies of any single item does not exceed the knapsack capacity (otherwise, that item could never be taken in the maximum allowed number of copies). Formally:

        $$
        b_j \, w_j \le c, \qquad \forall j \in \mathscr{I}
        $$

## 2.4 The unbounded knapsack problem

<a id="box-8-defUKP"></a>

!!! definizione "Definition 2.5: Unbounded Knapsack Problem"

    Given:

    1. a knapsack of <em>capacity</em> $c \in \Z_{\ge 1}$,

    2. a set $\mathscr{I} = \{1,2,\dots,n\}$ of $n$ items,

    3. for each item $j \in \mathscr{I}$, which is available in an unlimited number of copies, a <em>profit</em> $p_j \in \Z_{\ge 1}$ and a <em>weight</em> $w_j \in \Z_{\ge 1}$,

    the <strong>Unbounded Knapsack Problem</strong> (UKP) asks to decide how many copies of each item to insert into the knapsack, so that the total weight of all selected item copies does not exceed the knapsack capacity and the total profit of all selected item copies is maximized.

- A <strong>UKP instance</strong> is specified by:

    1. two integer numbers:

        - the number of items $n \in \Z_{\ge 1}$,

        - the knapsack capacity $c \in \Z_{\ge 1}$,

    2. two vectors of integer numbers of length $n$:

        - $\vet{p} \in \Z_{\ge 1}^n$, containing the item profits,

        - $\vet{w} \in \Z_{\ge 1}^n$, containing the item weights.

- Given a UKP instance, we first define for each item $j \in \mathscr{I}$ the <strong>maximum feasible number of copies</strong>

    \begin{equation*}
    \label{maxCopies}
    \hat{b}_j \;=\; \left\lfloor \frac{c}{w_j} \right\rfloor, \tag{2.5}
    \end{equation*}

    that is, the largest number of copies of item $j$ that can be inserted into the knapsack without exceeding its capacity.

- We then define the <strong>extended set of items</strong> as

    \begin{equation*}
    \label{ExtSetUKP}
    \hat{\mathscr{I}} \;=\; \big\{\, (j,k) : j \in \mathscr{I},~ k \in \{1,2,\dots,\hat{b}_j\} \,\big\}, \tag{2.6}
    \end{equation*}

    where each pair $(j,k)$ represents the $k$-th copy of item $j$. The cardinality of the extended set of items is

    $$
    |\hat{\mathscr{I}}| \;=\; \sum_{j \in \mathscr{I}} \hat{b}_j.
    $$

- A <strong>UKP feasible solution</strong> is a subset of items

    $$
    S \subseteq \hat{\mathscr{I}}
    $$

    such that the total weight of the selected items does not exceed the knapsack capacity, namely

    $$
    \sum_{(j,k)\in S} w_j \le c .
    $$

    Accordingly, the UKP can be equivalently stated as the problem of selecting a subset of the extended set of items whose total weight respects the knapsack capacity, and whose total profit is maximized.

    !!! chiave ""

        Given a UKP instance,  UKP can be formally stated as:

        \begin{equation*}
        \label{UKP}
        \tilde{S} \;=\;
        \argmax_{S \subseteq \hat{\mathscr{I}} }
        \left\{ \sum_{(j,k) \in S} p_j
        \;:\; \sum_{(j,k) \in S} w_j \le c \right\}. \tag{2.7}
        \end{equation*}

<a id="box-9-ex-ukp"></a>

!!! esempio "Example 2.4: UKP instance"

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

    The maximum feasible number of copies of each item are:

    $$
    \hat b_1 = \underbrace{\left\lfloor \tfrac{9}{2} \right\rfloor}_{=4}, \quad
    \hat b_2 = \underbrace{\left\lfloor \tfrac{9}{3} \right\rfloor}_{=3}, \quad
    \hat b_3 = \underbrace{\left\lfloor \tfrac{9}{6} \right\rfloor}_{=1}, \quad
    \hat b_4 = \underbrace{\left\lfloor \tfrac{9}{7} \right\rfloor}_{=1}, \quad
    \hat b_5 = \underbrace{\left\lfloor \tfrac{9}{5} \right\rfloor}_{=1}, \quad
    \hat b_6 = \underbrace{\left\lfloor \tfrac{9}{9} \right\rfloor}_{=1}.
    $$

    The extended set of items is:

    $$
    \hat{\mathscr{I}} \;=\; \big\{~ (1,1),(1,2),(1,3),(1,4),\; (2,1),(2,2),(2,3),\; (3,1),\; (4,1),\; (5,1),\; (6,1) ~\big\}.
    $$

    Each copy $(j,k)$ has profit $p_j$ and weight $w_j$.

    <div class="tabella" markdown="0"><table>
    <tr>
    <th>Copy label</th>
    <th>1</th>
    <th>2</th>
    <th>3</th>
    <th>4</th>
    <th>5</th>
    <th>6</th>
    <th>7</th>
    <th>8</th>
    <th>9</th>
    <th>10</th>
    <th>11</th>
    </tr>
    <tr>
    <td><span class="arithmatex">\((j,k)\)</span></td>
    <td><span class="arithmatex">\((1,1)\)</span></td>
    <td><span class="arithmatex">\((1,2)\)</span></td>
    <td><span class="arithmatex">\((1,3)\)</span></td>
    <td><span class="arithmatex">\((1,4)\)</span></td>
    <td><span class="arithmatex">\((2,1)\)</span></td>
    <td><span class="arithmatex">\((2,2)\)</span></td>
    <td><span class="arithmatex">\((2,3)\)</span></td>
    <td><span class="arithmatex">\((3,1)\)</span></td>
    <td><span class="arithmatex">\((4,1)\)</span></td>
    <td><span class="arithmatex">\((5,1)\)</span></td>
    <td><span class="arithmatex">\((6,1)\)</span></td>
    </tr>
    <tr>
    <td>Profit <span class="arithmatex">\(p_j\)</span></td>
    <td><span class="arithmatex">\(6\)</span></td>
    <td><span class="arithmatex">\(6\)</span></td>
    <td><span class="arithmatex">\(6\)</span></td>
    <td><span class="arithmatex">\(6\)</span></td>
    <td><span class="arithmatex">\(5\)</span></td>
    <td><span class="arithmatex">\(5\)</span></td>
    <td><span class="arithmatex">\(5\)</span></td>
    <td><span class="arithmatex">\(8\)</span></td>
    <td><span class="arithmatex">\(9\)</span></td>
    <td><span class="arithmatex">\(6\)</span></td>
    <td><span class="arithmatex">\(7\)</span></td>
    </tr>
    <tr>
    <td>Weight <span class="arithmatex">\(w_j\)</span></td>
    <td><span class="arithmatex">\(2\)</span></td>
    <td><span class="arithmatex">\(2\)</span></td>
    <td><span class="arithmatex">\(2\)</span></td>
    <td><span class="arithmatex">\(2\)</span></td>
    <td><span class="arithmatex">\(3\)</span></td>
    <td><span class="arithmatex">\(3\)</span></td>
    <td><span class="arithmatex">\(3\)</span></td>
    <td><span class="arithmatex">\(6\)</span></td>
    <td><span class="arithmatex">\(7\)</span></td>
    <td><span class="arithmatex">\(5\)</span></td>
    <td><span class="arithmatex">\(9\)</span></td>
    </tr>
    </table></div>

### 2.4.1 Assumptions

- We make the following assumptions:

    1. The total weight of all possible copies of all items (up to the maximum number that can fit in the knapsack) exceeds the knapsack capacity (otherwise, all copies could be selected). Formally:

        $$
        \sum_{j \in \mathscr{I}} \hat b_j \, w_j > c
        $$

    2. Each item individually fits into the knapsack (otherwise, it cannot be selected). Formally:

        $$
        w_j \le c, \qquad \forall j \in \mathscr{I}
        $$

## 2.5 The multidimensional knapsack problem

<a id="box-10-defMDKP"></a>

!!! definizione "Definition 2.6: Multidimensional Knapsack Problem"

    Given:

    1. a $k$-dimensional knapsack,

    2. for each dimension $d \in \underbrace{\{1,2,\dots,k\}}_{=\mathscr{D}}$, a <em>capacity</em> $c_d \in \Z_{\ge 1}$,

    3. a set $\mathscr{I} = \{1,2,\dots,n\}$ of $n$ items,

    4. for each item $j \in \mathscr{I}$, a <em>profit</em> $p_j \in \Z_{\ge 1}$,

    5. for each dimension $d \in \mathscr{D}$ and each item $j \in \mathscr{I}$, a <em>weight</em> $w_{dj} \in \Z_{\ge 1}$,

    the <strong>Multidimensional Knapsack Problem</strong> (MDKP) asks to decide which items to insert into the knapsack, so that for every dimension the total weight of the selected items does not exceed the corresponding capacity, and the total profit of the selected items is maximized.

- A <strong>MDKP instance</strong> is specified by:

    1. two integer numbers:

        - the number of items $n \in \Z_{\ge 1}$,

        - the number of dimensions $k \in \Z_{\ge 1}$,

    2. one vector of integer numbers of length $n$:

        - $\vet{p} \in \Z_{\ge 1}^n$, containing the item profits,

    3. one vector of integer numbers of length $k$:

        - $\vet{c} \in \Z_{\ge 1}^k$, containing the knapsack capacities for each dimension,

    4. one matrix of integer numbers with $k$ rows and $n$ columns:

        - $\vet{W} \in \Z_{\ge 1}^{k \times n}$,  containing the  the weight of the items for each dimension.

- A <strong>MDKP feasible solution</strong> is a subset of items

    $$
    S \subseteq \mathscr{I}
    $$

    such that the capacity constraints are satisfied in every dimension, namely

    $$
    \sum_{j\in S} w_{dj} \le c_d \qquad \forall\, d\in \mathscr{D}.
    $$

    Accordingly, the MDKP can be equivalently stated as the problem of selecting a subset of items whose total weight respects the knapsack capacities in every dimension, and whose total profit is maximized.

    !!! chiave ""

        Given a MDKP instance, the MDKP can be formally stated as:

        \begin{equation*}
        \label{MDKP}
        \tilde{S}\in \argmax_{S \subseteq \mathscr{I}}
        \left\{~~ \sum_{j \in S} p_j \;\;:\;\; \sum_{j\in S} w_{dj} \le c_d \ \ \forall\, d\in \mathscr{D} ~~\right\}. \tag{2.8}
        \end{equation*}

<a id="box-11-ex-mdkp"></a>

!!! esempio "Example 2.5: MDKP instance"

    We consider a $2$-dimensional knapsack ($k=2$) with capacities $c_1 = 10$ and $c_2 = 12$, and a set $\mathscr{I} = \{1,2,3,4\}$ of $4$ items ($n = 4$), with the following profits and weights:

    <div class="tabella" markdown="0"><table>
    <tr>
    <th>Items</th>
    <th></th>
    <th><span class="arithmatex">\(j = 1\)</span></th>
    <th><span class="arithmatex">\(j = 2\)</span></th>
    <th><span class="arithmatex">\(j = 3\)</span></th>
    <th><span class="arithmatex">\(j = 4\)</span></th>
    </tr>
    <tr>
    <td>Profits</td>
    <td><span class="arithmatex">\(p_j\)</span></td>
    <td><span class="arithmatex">\(6\)</span></td>
    <td><span class="arithmatex">\(7\)</span></td>
    <td><span class="arithmatex">\(5\)</span></td>
    <td><span class="arithmatex">\(9\)</span></td>
    </tr>
    <tr>
    <td>Weights (dim. <span class="arithmatex">\(1\)</span>)</td>
    <td><span class="arithmatex">\(w_{1j}\)</span></td>
    <td><span class="arithmatex">\(4\)</span></td>
    <td><span class="arithmatex">\(5\)</span></td>
    <td><span class="arithmatex">\(3\)</span></td>
    <td><span class="arithmatex">\(7\)</span></td>
    </tr>
    <tr>
    <td>Weights (dim. <span class="arithmatex">\(2\)</span>)</td>
    <td><span class="arithmatex">\(w_{2j}\)</span></td>
    <td><span class="arithmatex">\(6\)</span></td>
    <td><span class="arithmatex">\(4\)</span></td>
    <td><span class="arithmatex">\(5\)</span></td>
    <td><span class="arithmatex">\(3\)</span></td>
    </tr>
    </table></div>

### 2.5.1 Assumptions

- We make the following assumptions:

    1. The set of all items does <em>not</em> fit in the knapsack (otherwise, selecting all items is feasible and optimal). Formally,

        $$
        \exists\, d\in \mathscr{D} \ \text{such that}\ \sum_{j\in \mathscr{I}} w_{dj} \;>\; c_d .
        $$

    2. Each item individually fits in the knapsack in every dimension (otherwise, it can never be selected). Formally,

        $$
        w_{dj} \le c_d, \qquad \forall\, d\in \mathscr{D},\ \forall\, j\in \mathscr{I}.
        $$

## 2.6 The multiple knapsack problem

<a id="box-12-defMKP"></a>

!!! definizione "Definition 2.7: Multiple Knapsack Problem"

    Given:

    1. $m \in \Z_{\ge 1}$ knapsacks,

    2. for each knapsack $k \in \underbrace{\{1,2,\dots,m\}}_{=\mathscr{K}}$, a <em>capacity</em> $c_k \in \Z_{\ge 1}$,

    3. a set $\mathscr{I} = \{1,2,\dots,n\}$ of $n$ items,

    4. for each item $j \in \mathscr{I}$, a <em>profit</em> $p_j \in \Z_{\ge 1}$ and a <em>weight</em> $w_{j} \in \Z_{\ge 1}$,

    the <strong>Multiple Knapsack Problem</strong> (MKP) asks to decide which items to insert into each knapsack, so that in every knapsack the total weight of the assigned items does not exceed its capacity, and the total profit of the selected items is maximized.

- A <strong>MKP instance</strong> is specified by:

    1. two integer numbers:

        - the number of items $n \in \Z_{\ge 1}$,

        - the number of knapsacks $m \in \Z_{\ge 1}$,

    2. one vector of integer numbers of length $n$:

        - $\vet{p} \in \Z_{\ge 1}^n$, containing the item profits,

    3. one vector of integer numbers of length $n$:

        - $\vet{w} \in \Z_{\ge 1}^n$, containing the item weights,

    4. one vector of integer numbers of length $m$:

        - $\vet{c} \in \Z_{\ge 1}^m$, containing the capacities of the knapsacks.

- A <strong>MKP feasible solution</strong> is a family of subsets of items

    $$
    \mathcal{S}=\{S_k\}_{k\in \mathscr{K}},
    \qquad S_k \subseteq \mathscr{I} \ \ \text{for all } k\in \mathscr{K},
    $$

    such that:

    - **(i)** each item is assigned to at most one knapsack, namely

        $$
        S_k \cap S_{k'}=\emptyset \quad \text{for all } k,k'\in \mathscr{K}\ \text{with } k\neq k';
        $$

    - **(ii)** the total weight of the items assigned to each knapsack respects its capacity, namely

        $$
        \sum_{j\in S_k} w_j \le c_k \quad \text{for all } k\in \mathscr{K}.
        $$

    Accordingly, the MKP can be equivalently stated as the problem of selecting pairwise disjoint subsets of items, one subset for each knapsack, such that every knapsack capacity is respected and the total profit is maximized.

    !!! chiave ""

        Given a MKP instance, the MKP can be formally stated as:

        \begin{equation*}
        \label{MKP}
        \tilde{\mathcal{S}}
        \in
        \argmax_{\mathcal{S}=\{S_k\}_{k\in \mathscr{K}}}
        \left\{
        \sum_{k\in \mathscr{K}} \ \sum_{j\in S_k} p_j
        \;:\;
        \begin{array}{l}
        S_k \subseteq \mathscr{I} \quad \forall\, k\in \mathscr{K},\\[6pt]
        S_k \cap S_{k'}=\emptyset \quad \forall\, k,k'\in \mathscr{K}\ \text{with } k\neq k',\\[10pt]
        \displaystyle \sum_{j\in S_k} w_j \le c_k \quad \forall\, k\in \mathscr{K}
        \end{array}
        \right\}. \tag{2.9}
        \end{equation*}

<a id="box-13-ex-mkp"></a>

!!! esempio "Example 2.6: MKP instance"

    We consider $m = 2$ knapsacks with capacities $c_1 = 10$ and $c_2 = 12$, and a set $\mathscr{I} = \{1,2,3,4,5\}$ of $5$ items ($n = 5$), with the following profits and weights:

    <div class="tabella" markdown="0"><table>
    <tr>
    <th>Items</th>
    <th></th>
    <th><span class="arithmatex">\(j = 1\)</span></th>
    <th><span class="arithmatex">\(j = 2\)</span></th>
    <th><span class="arithmatex">\(j = 3\)</span></th>
    <th><span class="arithmatex">\(j = 4\)</span></th>
    <th><span class="arithmatex">\(j = 5\)</span></th>
    </tr>
    <tr>
    <td>Profits</td>
    <td><span class="arithmatex">\(p_j\)</span></td>
    <td><span class="arithmatex">\(6\)</span></td>
    <td><span class="arithmatex">\(8\)</span></td>
    <td><span class="arithmatex">\(5\)</span></td>
    <td><span class="arithmatex">\(7\)</span></td>
    <td><span class="arithmatex">\(9\)</span></td>
    </tr>
    <tr>
    <td>Weights</td>
    <td><span class="arithmatex">\(w_j\)</span></td>
    <td><span class="arithmatex">\(4\)</span></td>
    <td><span class="arithmatex">\(6\)</span></td>
    <td><span class="arithmatex">\(5\)</span></td>
    <td><span class="arithmatex">\(3\)</span></td>
    <td><span class="arithmatex">\(7\)</span></td>
    </tr>
    </table></div>

### 2.6.1 Assumptions

- We make the following assumptions:

    1. The set of all items does <em>not</em> fit in the knapsacks altogether (otherwise, selecting all items is feasible and optimal). Formally,

        $$
        \sum_{j\in \mathscr{I}} w_j \;>\; \sum_{k\in \mathscr{K}} c_k .
        $$

    2. Each item individually fits in (at least) one knapsack (otherwise, it can never be selected). Formally,

        $$
        \exists\, k\in \mathscr{K}\ \text{such that}\ w_j \le c_k, \qquad \forall\, j\in \mathscr{I}.
        $$

## 2.7 The multiple-choice knapsack problem

<a id="box-14-defMCKP"></a>

!!! definizione "Definition 2.8: Multiple-Choice Knapsack Problem"

    Given:

    1. a knapsack of <em>capacity</em> $c \in \Z_{\ge 1}$,

    2. a set $\mathscr{I} = \{1,2,\dots,n\}$ of $n$ items,

    3. the set of items is partitioned into $q \in \Z_{\ge 2}$ classes,

    4. for each class $h \in \{1,2,\dots,q\}$, the subset $\mathscr{J}_h \subseteq \mathscr{I}$ contains the items of that class,

    5. for each item $j \in \mathscr{I}$, a <em>profit</em> $p_j \in \Z_{\ge 1}$ and a <em>weight</em> $w_j \in \Z_{\ge 1}$,

    the <strong>Multiple-Choice Knapsack Problem</strong> (MCKP) asks to decide which items to insert into the knapsack, so that exactly one item is selected from each class, the total weight of the selected items does not exceed the knapsack capacity, and the total profit of the selected items is maximized.

- A <strong>MCKP instance</strong> is specified by:

    1. two integer numbers:

        - the number of items $n \in \Z_{\ge 1}$,

        - the knapsack capacity $c \in \Z_{\ge 1}$,

    2. one vector of integer numbers of length $n$:

        - $\vet{p} \in \Z_{\ge 1}^n$, containing the item profits,

    3. one vector of integer numbers of length $n$:

        - $\vet{w} \in \Z_{\ge 1}^n$, containing the item weights,

    4. one integer number:

        - the number of classes $q \in \Z_{\ge 2}$,

    5. one family of subsets:

        - $\{ \mathscr{J}_1, \mathscr{J}_2, \dots, \mathscr{J}_q \}$, a partition of $\mathscr{I}$ into $q$ classes, where $\mathscr{J}_h \subseteq \mathscr{I}$ is the set of items belonging to class $h$.

- A <strong>MCKP feasible solution</strong> is a subset of items

    $$
    S \subseteq \mathscr{I}
    $$

    such that:

    - **(i)** exactly one item is selected from each class, namely

        $$
        |S \cap \mathscr{J}_h| = 1 \qquad \text{for all } h\in\{1,2,\dots,q\};
        $$

    - **(ii)** the total weight of the selected items does not exceed the knapsack capacity, namely

        $$
        \sum_{j\in S} w_j \le c.
        $$

    Accordingly, the MCKP can be equivalently stated as the problem of selecting exactly one item from each class such that the knapsack capacity is respected and the total profit is maximized.

    !!! chiave ""

        Given a MCKP instance, the MCKP can be formally stated as:

        \begin{equation*}
        \label{MCKP}
        \tilde{S}\in \argmax_{S \subseteq \mathscr{I}}
        \left\{
        ~~ \sum_{j \in S} p_j
        \;\;:\;\;
        \sum_{j \in S} w_j \le c,\ \
        |S \cap \mathscr{J}_h| = 1 \ \ \forall\, h\in\{1,2,\dots,q\}
        ~~\right\}. \tag{2.10}
        \end{equation*}

<a id="box-15-ex-mckp"></a>

!!! esempio "Example 2.7: MCKP instance"

    We consider a knapsack of capacity $c = 15$ and a set $\mathscr{I} = \{1,2,3,4,5,6\}$ of $6$ items ($n = 6$). The items are partitioned into $q = 3$ classes: $\mathscr{J}_1 = \{1,2\}$, $\mathscr{J}_2 = \{3,4\}$, $\mathscr{J}_3 = \{5,6\}$. The profits and weights are given as follows:

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
    <td><span class="arithmatex">\(8\)</span></td>
    <td><span class="arithmatex">\(5\)</span></td>
    <td><span class="arithmatex">\(7\)</span></td>
    <td><span class="arithmatex">\(4\)</span></td>
    <td><span class="arithmatex">\(9\)</span></td>
    </tr>
    <tr>
    <td>Weights</td>
    <td><span class="arithmatex">\(w_j\)</span></td>
    <td><span class="arithmatex">\(4\)</span></td>
    <td><span class="arithmatex">\(6\)</span></td>
    <td><span class="arithmatex">\(5\)</span></td>
    <td><span class="arithmatex">\(8\)</span></td>
    <td><span class="arithmatex">\(3\)</span></td>
    <td><span class="arithmatex">\(7\)</span></td>
    </tr>
    </table></div>

### 2.7.1 Assumptions

- We make the following assumptions:

    1. Each class contains at least one item (otherwise, selecting exactly one item from each class is impossible). Formally:

        $$
        \mathscr{J}_h \neq \emptyset \qquad \forall\, h\in\{1,\dots,q\}.
        $$

    2. The instance is feasible, i.e., there exists at least one choice of exactly one item per class that fits in the knapsack. A necessary and sufficient (and easy-to-check) condition is:

        $$
        \sum_{h=1}^{q}\ \min_{j\in \mathscr{J}_h} w_j \;\le\; c.
        $$

## 2.8 The knapsack problem with setups

<a id="box-16-defKPS"></a>

!!! definizione "Definition 2.9: Knapsack Problem with Setups"

    Given:

    1. a knapsack of <em>capacity</em> $c \in \Z_{\ge 1}$,

    2. a set $\mathscr{I} = \{1,2,\dots,n\}$ of $n$ items,

    3. the set of items is partitioned into $q \in \Z_{\ge 2}$ classes,

    4. for each class $h \in \{1,2,\dots,q\}$, the subset $\mathscr{J}_h \subseteq \mathscr{I}$ contains the items of that class, with an associated <em>setup cost</em> $f_h \in \Z_{\ge 1}$ and a <em>setup weight</em> $s_h \in \Z_{\ge 1}$,

    5. for each item $j \in \mathscr{I}$, a <em>revenue</em> $p_j \in \Z_{\ge 1}$ and a <em>weight</em> $w_j \in \Z_{\ge 1}$,

    the <strong>Knapsack Problem with Setups</strong> (KPS) asks to decide which items to insert into the knapsack, so that the total weight of the selected items plus the setup weights of their classes does not exceed the knapsack capacity, and the total revenue of the selected items minus the setup costs of their classes is maximized.

- A <strong>KPS instance</strong> is specified by:

    1. two integer numbers:

        - the number of items $n \in \Z_{\ge 1}$,

        - the knapsack capacity $c \in \Z_{\ge 1}$,

    2. one vector of integer numbers of length $n$:

        - $\vet{p} \in \Z_{\ge 1}^n$, containing the item revenues,

    3. one vector of integer numbers of length $n$:

        - $\vet{w} \in \Z_{\ge 1}^n$, containing the item weights,

    4. one integer number:

        - the number of classes $q \in \Z_{\ge 2}$,

    5. one family of subsets:

        - $\{ \mathscr{J}_1, \mathscr{J}_2, \dots, \mathscr{J}_q \}$, a partition of $\mathscr{I}$ into $q$ classes, where $\mathscr{J}_h \subseteq \mathscr{I}$ is the set of items belonging to class $h$,

    6. two vectors of integer numbers of length $q$:

        - $\vet{f} \in \Z_{\ge 1}^q$, containing the setup costs of the classes,

        - $\vet{s} \in \Z_{\ge 1}^q$, containing the setup weights of the classes.

- A <strong>KPS feasible solution</strong> is a subset of items

    $$
    S \subseteq \mathscr{I}.
    $$

    Given $S$, define the set of <strong>activated classes</strong> as

    $$
    \mathscr{H}(S) \;:=\; \big\{\, h\in\{1,2,\dots,q\} : S\cap \mathscr{J}_h \neq \emptyset \,\big\}.
    $$

    The subset $S$ is feasible if the total weight of the selected items plus the setup weights of the activated classes does not exceed the knapsack capacity, namely

    $$
    \sum_{j\in S} w_j \;+\; \sum_{h\in \mathscr{H}(S)} s_h \;\le\; c.
    $$

    Accordingly, the KPS can be equivalently stated as the problem of selecting a subset of items so as to maximize the total revenue of the selected items minus the setup costs of their activated classes.

    !!! chiave ""

        Given a KPS instance, the KPS can be formally stated as:

        \begin{equation*}
        \label{KPS}
        \tilde{S}\in \argmax_{S \subseteq \mathscr{I}}
        \left\{~~
        \sum_{j \in S} p_j \;-\; \sum_{h\in \mathscr{H}(S)} f_h
        \;\;:\;\;
        \sum_{j\in S} w_j \;+\; \sum_{h\in \mathscr{H}(S)} s_h \le c
        ~~\right\}. \tag{2.11}
        \end{equation*}

<a id="box-17-ex-kps"></a>

!!! esempio "Example 2.8: KPS instance"

    We consider a knapsack of capacity $c = 20$ and a set $\mathscr{I} = \{1,2,3,4,5,6\}$ of $6$ items ($n = 6$). The items are partitioned into $q = 2$ classes: $\mathscr{J}_1 = \{1,2,3\}$ and $\mathscr{J}_2 = \{4,5,6\}$. Each class has a setup cost and a setup weight: $f_1 = 3$, $s_1 = 2$ for class 1, and $f_2 = 4$, $s_2 = 3$ for class 2. The item revenues and weights are given as follows:

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
    <td>Revenues</td>
    <td><span class="arithmatex">\(p_j\)</span></td>
    <td><span class="arithmatex">\(6\)</span></td>
    <td><span class="arithmatex">\(8\)</span></td>
    <td><span class="arithmatex">\(5\)</span></td>
    <td><span class="arithmatex">\(7\)</span></td>
    <td><span class="arithmatex">\(9\)</span></td>
    <td><span class="arithmatex">\(4\)</span></td>
    </tr>
    <tr>
    <td>Weights</td>
    <td><span class="arithmatex">\(w_j\)</span></td>
    <td><span class="arithmatex">\(4\)</span></td>
    <td><span class="arithmatex">\(5\)</span></td>
    <td><span class="arithmatex">\(3\)</span></td>
    <td><span class="arithmatex">\(6\)</span></td>
    <td><span class="arithmatex">\(7\)</span></td>
    <td><span class="arithmatex">\(2\)</span></td>
    </tr>
    </table></div>

### 2.8.1 Assumptions

- We make the following assumptions:

    1. Each class contains at least one item. Formally:

        $$
        \mathscr{J}_h \neq \emptyset \qquad \forall\, h\in\{1,2,\dots,q\}.
        $$

    2. Each item can fit into the knapsack together with the setup weight of its class (otherwise, it can never be selected). Formally:

        $$
        w_j + s_h \le c \qquad \forall\, h\in\{1,2,\dots,q\},\ \forall\, j\in \mathscr{J}_h.
        $$

## 2.9 The variants at a glance

- The table lists, for the instance of each section, the number of candidate solutions, the number of feasible solutions and the optimal value, computed by enumeration. In the BKP and in the UKP a candidate solution is the vector of the numbers of copies of every item, so that identical copies are not counted twice.

- The optimal solution is not always unique: the MKP, the MCKP and the KPS have several optimal solutions with the same value, and in the SSP three subsets reach the target.

<div class="tabella" markdown="0"><table>
<tr>
<th><strong>Variant</strong></th>
<th><strong>Candidate solutions</strong></th>
<th><strong>Number</strong></th>
<th><strong>Feasible</strong></th>
<th><strong>Optimum</strong></th>
<th><strong>Optimal solutions</strong></th>
</tr>
<tr>
<td>KP</td>
<td>subsets of <span class="arithmatex">\(6\)</span> items</td>
<td><span class="arithmatex">\(64\)</span></td>
<td><span class="arithmatex">\(13\)</span></td>
<td><span class="arithmatex">\(15\)</span></td>
<td><span class="arithmatex">\(\{1,4\}\)</span></td>
</tr>
<tr>
<td>SSP</td>
<td>subsets of <span class="arithmatex">\(6\)</span> items</td>
<td><span class="arithmatex">\(64\)</span></td>
<td><span class="arithmatex">\(3\)</span></td>
<td>yes</td>
<td><span class="arithmatex">\(\{6\}\)</span>, <span class="arithmatex">\(\{1,4\}\)</span>, <span class="arithmatex">\(\{2,3\}\)</span></td>
</tr>
<tr>
<td>BKP</td>
<td>copies <span class="arithmatex">\(x_j \le b_j\)</span></td>
<td><span class="arithmatex">\(144\)</span></td>
<td><span class="arithmatex">\(18\)</span></td>
<td><span class="arithmatex">\(18\)</span></td>
<td>two copies of item <span class="arithmatex">\(1\)</span> and item <span class="arithmatex">\(5\)</span></td>
</tr>
<tr>
<td>UKP</td>
<td>copies <span class="arithmatex">\(x_j \le \hat b_j\)</span></td>
<td><span class="arithmatex">\(320\)</span></td>
<td><span class="arithmatex">\(22\)</span></td>
<td><span class="arithmatex">\(24\)</span></td>
<td>four copies of item <span class="arithmatex">\(1\)</span></td>
</tr>
<tr>
<td>MDKP</td>
<td>subsets of <span class="arithmatex">\(4\)</span> items</td>
<td><span class="arithmatex">\(16\)</span></td>
<td><span class="arithmatex">\(9\)</span></td>
<td><span class="arithmatex">\(14\)</span></td>
<td><span class="arithmatex">\(\{3,4\}\)</span></td>
</tr>
<tr>
<td>MKP</td>
<td>each item in a knapsack or none</td>
<td><span class="arithmatex">\(243\)</span></td>
<td><span class="arithmatex">\(109\)</span></td>
<td><span class="arithmatex">\(30\)</span></td>
<td><span class="arithmatex">\((S_1,S_2) = (\{1,2\},\{4,5\})\)</span>, <span class="arithmatex">\((\{2,4\},\{1,5\})\)</span>, <span class="arithmatex">\((\{4,5\},\{1,2\})\)</span></td>
</tr>
<tr>
<td>MCKP</td>
<td>one item per class</td>
<td><span class="arithmatex">\(8\)</span></td>
<td><span class="arithmatex">\(3\)</span></td>
<td><span class="arithmatex">\(17\)</span></td>
<td><span class="arithmatex">\(\{1,4,5\}\)</span>, <span class="arithmatex">\(\{2,3,5\}\)</span></td>
</tr>
<tr>
<td>KPS</td>
<td>subsets of <span class="arithmatex">\(6\)</span> items</td>
<td><span class="arithmatex">\(64\)</span></td>
<td><span class="arithmatex">\(40\)</span></td>
<td><span class="arithmatex">\(16\)</span></td>
<td><span class="arithmatex">\(\{1,2,3\}\)</span>, <span class="arithmatex">\(\{4,5,6\}\)</span>, <span class="arithmatex">\(\{1,2,3,6\}\)</span></td>
</tr>
</table></div>

- In the MCKP only $3$ of the $8$ choices of one item per class fit in the knapsack: the feasibility condition of the assumptions is not a formality.

## 2.10 Remarks

- Dantzig (1957) sorted the items by non-increasing efficiency $p_j/w_j$ and used this order to solve the continuous version of the KP; the same order returns in the bounds of the following chapters.

- Karp (1972) put the subset sum problem, called knapsack in his paper, among the first $21$ NP-complete problems. The KP contains the SSP as the special case $p_j = w_j$, so it is NP-hard.

- Ibarra and Kim (1975) gave the first fully polynomial-time approximation scheme for the KP (Chapter «Approximation algorithms for the knapsack problem»).

## 2.11 Typical mistakes

!!! attenzione "Warning"

    - <strong>Confusing the KP with the SSP.</strong> The SSP asks for a total weight <em>exactly</em> equal to $c$ and has a yes/no answer; it is the KP with $p_j = w_j$, where the answer is yes if the optimal value is $c$.

    - <strong>Stopping at the order of efficiency.</strong> Taking the items in the order $1, 2, 3, \dots$ of non-increasing $p_j/w_j$ gives $\{1,2\}$ with profit $11$, while the optimal solution of <span style="color:#1971c2">[Example 2.1](#box-2-ex-kp)</span> is $\{1,4\}$ with profit $15$.

    - <strong>Counting identical copies as different solutions.</strong> In the BKP and in the UKP the copies $(j,k)$ of the same item are interchangeable: different subsets of the extended set of items can give the same packing.

    - <strong>Choosing at most one item per class.</strong> In the MCKP exactly one item per class is selected, so an instance can be infeasible; in the KPS a class with no selected item costs nothing.

    - <strong>Forgetting the assumptions.</strong> An item with $w_j > c$ can never be selected, and if all the items fit the problem is trivial: both cases are removed before solving.

## 2.12 In summary

!!! chiave "In summary"

    - The KP selects a subset of items of weight at most $c$ and maximum profit; a solution is a subset, and $2^n$ subsets are candidates.

    - The SSP, the BKP, the UKP, the MDKP, the MKP, the MCKP and the KPS change the number of copies, of resources, of knapsacks or the structure of the items; each one has its assumptions on the data.

    - A solution found by eye is a primal bound; the cardinality bound is a dual bound that uses only the weights and the profits.

    - The order of efficiency is not enough to find an optimal solution, even on a small instance.

    <strong>Dashboard of the reference instance.</strong>

    <div class="tabella" markdown="0"><table>
    <tr>
    <th>KP, <span style="color:#1971c2">[Example 2.1](#box-2-ex-kp)</span> (max)</th>
    <th>lower bound</th>
    <th>upper bound</th>
    <th>from</th>
    </tr>
    <tr>
    <td>this chapter</td>
    <td><span class="arithmatex">\(15\)</span> (by eye)</td>
    <td><span class="arithmatex">\(17\)</span> (cardinality bound)</td>
    <td>definition</td>
    </tr>
    </table></div>
