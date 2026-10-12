---
title: "Combinatorial optimization problems"
---

# Combinatorial optimization problems

<div class="info-capitolo" markdown>

**Part 1 · Combinatorial optimization problems · Chapter 1** · [:material-file-pdf-box: Lecture notes, volume 1 (PDF)](../pdf/lecture-notes-1-combinatorial-optimization-problems.pdf) · [:material-pencil: Exercises: Combinatorial optimization](../exercises/combinatorial-optimization.md)

</div>

!!! nota "Prerequisites"

    - From the <em>Preliminaries</em>: optimization problems (feasible region, objective function, optimal solution and optimal value), binomial coefficients and partitions of a finite set.

    - No knowledge of integer programming is needed: the bounds of this chapter come from combinatorial arguments.

!!! chiave "Objectives"

    At the end of this chapter you will be able to:

    - recognize a combinatorial optimization problem and the combinatorial object behind its solutions (a subset, an ordering, a partition, an assignment);

    - count the candidate solutions ($2^n$ subsets, $n!$ orderings, $(n-1)!/2$ cyclic orderings, Bell numbers for the partitions) and estimate the computing time of a brute force enumeration;

    - define primal bounds, dual bounds and the gap, and use them to certify that a solution is optimal;

    - place a problem in the classes P, NP and NP-hard, and tell a pseudo-polynomial algorithm from a polynomial one.

## 1.1 Combinatorial optimization problems

<a id="box-1-def-cop"></a>

!!! definizione "Definition 1.1: combinatorial optimization problem"

    Given:

    1. a <u>finite</u> set $\mathscr{U} = \{1,2,\dots,n\}$, called the <strong>ground set</strong>,

    2. a family $\mathcal{F} \subseteq 2^{\mathscr{U}}$ of subsets of $\mathscr{U}$, called the <strong>feasible solutions</strong>,

    3. an <strong>objective function</strong> $f : \mathcal{F} \rr \R$,

    the associated <strong>combinatorial optimization problem</strong> asks to find a feasible solution $\tilde S \in \mathcal{F}$ such that

    $$
    f(\tilde S) \ge f(S), \qquad \forall S \in \mathcal{F} \qquad \text{(maximization form)},
    $$

    or such that

    $$
    f(\tilde S) \le f(S), \qquad \forall S \in \mathcal{F} \qquad \text{(minimization form)}.
    $$

- The feasible region $\mathcal{F}$ is a <strong>finite</strong> set, since $|2^{\mathscr{U}}| = 2^n$. Accordingly, an optimal solution always exists whenever $\mathcal{F} \neq \emptyset$.

- In most problems the objective function is <strong>linear</strong> (additive): each element $j \in \mathscr{U}$ has a weight $c_j$ and

    $$
    f(S) = \sum_{j \in S} c_j .
    $$

    Some problems have a different objective, for example the largest of several sums, which is a maximum and not a sum.

- A <strong>problem</strong> is a general question with symbolic data; an <strong>instance</strong> $I$ of the problem is obtained by fixing the numbers. We denote by $z(I)$ the optimal value of the instance $I$.

<a id="box-2-ex-oc1-small"></a>

!!! esempio "Example 1.1: a small instance"

    We consider the ground set $\mathscr{U} = \{1,2,3,4\}$, the weights $\vet{c} = (7,6,4,3)$ and the additive objective $f(S) = \sum_{j \in S} c_j$, to be maximized. The feasible solutions are the $11$ subsets

    $$
    \mathcal{F} = \big\{ \emptyset, \{1\}, \{2\}, \{3\}, \{4\}, \{1,3\}, \{1,4\}, \{2,3\}, \{2,4\}, \{3,4\},
    \{2,3,4\} \big\}.
    $$

    For example, $f(\{1,3\}) = 7+4 = 11$ and $f(\{2,3,4\}) = 6+4+3 = 13$, while the subset $\{1,2\}$ is not feasible. We call this instance <span style="color:#1971c2">[Example 1.1](#box-2-ex-oc1-small)</span>.

- Here $\mathcal{F}$ is listed. In the problems of the course it is never listed: it is described by a rule, for example a capacity constraint, and it is far too large to be written down.

!!! chiave ""

    <strong>Combinatorial optimization</strong> is the study of optimization problems on <strong>discrete structures</strong> and <strong>combinatorial objects</strong>, such as graphs, subsets, permutations, sequences, partitions, coverings and packings.

- The <strong>main characteristics</strong> of combinatorial optimization problems are:

    1. the set of feasible solutions is <strong>finite</strong>;

    2. the number of feasible solutions is typically <strong>enormous</strong>: it grows exponentially (or faster) with the size of the instance;

    3. finding an optimal solution can be <strong>computationally very difficult</strong> (Section [1.5](#sez-sec-complexity));

    4. specialized algorithms are needed to explore the solution space without enumerating it.

### 1.1.1 Four kinds of discrete decisions

- The discrete decisions met in practice fall into a few families, each one associated with a combinatorial object:

<div class="tabella" markdown="0"><table>
<tr>
<th><strong>Decision</strong></th>
<th><strong>Examples</strong></th>
<th><strong>Combinatorial object</strong></th>
</tr>
<tr>
<td>IN/OUT (inclusion)</td>
<td>select projects to fund with a limited budget; choose the products of a portfolio</td>
<td>a <strong>subset</strong></td>
</tr>
<tr>
<td>ordering, sequencing</td>
<td>order in which jobs are processed; order of visit of the customers</td>
<td>a <strong>permutation</strong></td>
</tr>
<tr>
<td>partitioning, packing</td>
<td>split items among bins; group exams into days</td>
<td>a <strong>partition</strong></td>
</tr>
<tr>
<td>assignment</td>
<td>assign jobs to machines, students to projects</td>
<td>a <strong>function</strong> (a partition with labelled classes)</td>
</tr>
</table></div>

- A fifth family, <strong>counting</strong> decisions (how many units to produce, how many operators in a shift), leads to integer quantities, modelled by integer variables (module <em>Integer Linear Programming</em>, [Chapter 1 «Integer linear programming»](https://fabiofurini.github.io/integer-linear-programming/models-and-bounds/ilp/)).

## 1.2 Counting the solutions { #sez-sec-counting }

- Before solving a problem we ask <strong>how many</strong> candidate solutions it has. The answer depends only on the combinatorial object: subsets, orderings or partitions.

### 1.2.1 Subsets

<a id="box-3-prop-subsets"></a>

!!! teorema "Proposition 1.2"

    A set with $n$ elements has $2^n$ subsets.

??? dimostrazione "Proof"

    A subset $S \subseteq \{1,2,\dots,n\}$ is identified by the binary vector ${\vet{x}} \in \{0,1\}^n$ with $x_j = 1$ if and only if $j \in S$. Each of the $n$ components takes $2$ values independently, hence there are $2 \cdot 2 \cdots 2 = 2^n$ vectors. Equivalently, the number of subsets with $k$ elements is $\binom{n}{k}$, and we have:

    $$
    \sum_{k=0}^{n} \binom{n}{k} = 2^n .
    $$

    <p class="qed-riga"><span class="qed">□</span></p>

- Geometrically, the $2^n$ binary vectors are the vertices of the unit hypercube $[0,1]^n$: the square for $n=2$ ($4$ vertices) and the cube for $n=3$ ($8$ vertices).

- Every IN/OUT decision on $n$ elements is a subset: the $2^n$ subsets are its candidate solutions.

### 1.2.2 Orderings and cyclic orderings

- The $n$ elements of a set can be ordered in $n! = n \cdot (n-1) \cdots 2 \cdot 1$ ways (<strong>permutations</strong>).

- A <strong>cyclic ordering</strong> places the $n$ elements around a circle, as in a round trip through $n$ places: the starting element and the direction of travel do not matter.

<a id="box-4-prop-tours"></a>

!!! teorema "Proposition 1.3"

    For $n \ge 3$ elements, the number of distinct cyclic orderings, where a sequence, its rotations and its reverse are the same cyclic ordering, is

    $$
    \frac{(n-1)!}{2}.
    $$

??? dimostrazione "Proof"

    Since the starting element does not change a cyclic ordering, we can always start from element $1$: the remaining $n-1$ elements can be ordered in $(n-1)!$ ways. Each cyclic ordering is obtained twice, once for each direction, for example $(1,3,5,2,4)$ and $(1,4,2,5,3)$. Hence the number of distinct cyclic orderings is $(n-1)!/2$. <span class="qed">□</span>

- For $n=4$ there are $3!/2 = 3$ cyclic orderings: $(1,2,3,4)$, $(1,2,4,3)$ and $(1,3,2,4)$. Every other sequence is a rotation or a reverse of one of them, for example $(2,1,4,3)$ is the reverse of $(1,2,3,4)$ started from element $2$.

### 1.2.3 Partitions and Bell numbers

- A <strong>partition</strong> of a finite set $A$ is a collection of non-empty, pairwise disjoint subsets of $A$ whose union is $A$. Grouping decisions, such as splitting objects into groups, have partitions as solutions.

- The number of partitions of a set with $n$ elements is the <strong>Bell number</strong> $B(n)$, defined by the recursion:

    \begin{equation*}
    \label{eq:oc1-bell}
    B(0) = 1, \qquad B(n) = \sum_{k=0}^{n-1} \binom{n-1}{k} \, B(k), \quad \forall n \ge 1 . \tag{1.1}
    \end{equation*}

    The recursion counts the partitions by the block that contains element $n$: if this block has $n-1-k$ further elements, they can be chosen in $\binom{n-1}{n-1-k}=\binom{n-1}{k}$ ways, and the remaining $k$ elements are partitioned in $B(k)$ ways.

- The first Bell numbers are:

    $$
    \begin{array}{c|ccccccccccc}
    n & 0 & 1 & 2 & 3 & 4 & 5 & 6 & 7 & 8 & 9 & 10 \\ \hline
    B(n) & 1 & 1 & 2 & 5 & 15 & 52 & 203 & 877 & 4140 & 21147 & 115975
    \end{array}
    $$

- An <strong>assignment</strong> of $n$ elements to $m$ labels is a function from the elements to the labels: there are $m^n$ of them. If the labels are interchangeable (identical resources), two assignments that differ only by a renaming of the labels are the same solution; the distinct solutions are the partitions of the elements into at most $m$ blocks.

<a id="box-5-ex-oc1-objects"></a>

!!! esempio "Example 1.2: how many candidate solutions"

    For a set with $n=5$ elements, the numbers of the four combinatorial objects are:

    <div class="tabella" markdown="0"><table>
    <tr>
    <th>combinatorial object</th>
    <th>number</th>
    </tr>
    <tr>
    <td>subsets</td>
    <td><span class="arithmatex">\(2^5 = 32\)</span></td>
    </tr>
    <tr>
    <td>orderings (permutations)</td>
    <td><span class="arithmatex">\(5! = 120\)</span></td>
    </tr>
    <tr>
    <td>cyclic orderings</td>
    <td><span class="arithmatex">\(4!/2 = 12\)</span></td>
    </tr>
    <tr>
    <td>partitions</td>
    <td><span class="arithmatex">\(B(5) = 52\)</span></td>
    </tr>
    <tr>
    <td>assignments to <span class="arithmatex">\(3\)</span> labels</td>
    <td><span class="arithmatex">\(3^5 = 243\)</span></td>
    </tr>
    <tr>
    <td>partitions into at most <span class="arithmatex">\(3\)</span> blocks</td>
    <td><span class="arithmatex">\(1+15+25 = 41\)</span></td>
    </tr>
    </table></div>

    The last line counts the partitions of $5$ elements into $1$, $2$ or $3$ blocks ($1$, $15$ and $25$ of them); the other $10+1$ partitions of the $52$ have $4$ or $5$ blocks.

- These numbers count the <strong>candidate</strong> solutions. The feasible ones can be far fewer: in <span style="color:#1971c2">[Example 1.1](#box-2-ex-oc1-small)</span> only $11$ of the $16$ subsets are feasible.

## 1.3 Combinatorial explosion and brute force { #sez-sec-bruteforce }

- Since the feasible region is finite, a combinatorial optimization problem can always be solved by <strong>complete enumeration</strong>: we list all candidate solutions, discard the infeasible ones and keep the best. This algorithm is called <strong>brute force</strong>.

!!! algoritmo "Algorithm"

    - <strong>Input:</strong> An instance of a combinatorial optimization problem in maximization form.

    - <strong>Output:</strong> An optimal solution and the optimal value.

    - **Step 0:** <strong>Initialization</strong>. Set $\bar S \leftarrow$ none and $\LB \leftarrow -\infty$.

    - **Step 1:** <strong>Enumeration</strong>. For each candidate solution $S$ (subset, ordering, partition):

        1. if $S$ is not feasible, discard it;

        2. if $S$ is feasible and $f(S) > \LB$, set $\bar S \leftarrow S$ and $\LB \leftarrow f(S)$.

    - **Step 2:** <strong>Output</strong>. Return $\tilde S = \bar S$ and $z(I) = \LB$. <code>STOP</code>

<a id="box-6-ex-oc1-bf"></a>

!!! esempio "Example 1.3: brute force on the small instance"

    For the instance of <span style="color:#1971c2">[Example 1.1](#box-2-ex-oc1-small)</span> the $2^4=16$ subsets of $\mathscr{U}$ are:

    <div class="tabella" markdown="0"><table>
    <tr>
    <th><span class="arithmatex">\(S\)</span></th>
    <th><span class="arithmatex">\(f(S)\)</span></th>
    <th>feasible</th>
    <th><span class="arithmatex">\(S\)</span></th>
    <th><span class="arithmatex">\(f(S)\)</span></th>
    <th>feasible</th>
    </tr>
    <tr>
    <td><span class="arithmatex">\(\emptyset\)</span></td>
    <td><span class="arithmatex">\(0\)</span></td>
    <td>yes</td>
    <td><span class="arithmatex">\(\{2,3\}\)</span></td>
    <td><span class="arithmatex">\(10\)</span></td>
    <td>yes</td>
    </tr>
    <tr>
    <td><span class="arithmatex">\(\{1\}\)</span></td>
    <td><span class="arithmatex">\(7\)</span></td>
    <td>yes</td>
    <td><span class="arithmatex">\(\{2,4\}\)</span></td>
    <td><span class="arithmatex">\(9\)</span></td>
    <td>yes</td>
    </tr>
    <tr>
    <td><span class="arithmatex">\(\{2\}\)</span></td>
    <td><span class="arithmatex">\(6\)</span></td>
    <td>yes</td>
    <td><span class="arithmatex">\(\{3,4\}\)</span></td>
    <td><span class="arithmatex">\(7\)</span></td>
    <td>yes</td>
    </tr>
    <tr>
    <td><span class="arithmatex">\(\{3\}\)</span></td>
    <td><span class="arithmatex">\(4\)</span></td>
    <td>yes</td>
    <td><span class="arithmatex">\(\{1,2,3\}\)</span></td>
    <td><span class="arithmatex">\(17\)</span></td>
    <td>no</td>
    </tr>
    <tr>
    <td><span class="arithmatex">\(\{4\}\)</span></td>
    <td><span class="arithmatex">\(3\)</span></td>
    <td>yes</td>
    <td><span class="arithmatex">\(\{1,2,4\}\)</span></td>
    <td><span class="arithmatex">\(16\)</span></td>
    <td>no</td>
    </tr>
    <tr>
    <td><span class="arithmatex">\(\{1,2\}\)</span></td>
    <td><span class="arithmatex">\(13\)</span></td>
    <td>no</td>
    <td><span class="arithmatex">\(\{1,3,4\}\)</span></td>
    <td><span class="arithmatex">\(14\)</span></td>
    <td>no</td>
    </tr>
    <tr>
    <td><span class="arithmatex">\(\{1,3\}\)</span></td>
    <td><span class="arithmatex">\(11\)</span></td>
    <td>yes</td>
    <td><span class="arithmatex">\(\{2,3,4\}\)</span></td>
    <td><span class="arithmatex">\(\mathbf{13}\)</span></td>
    <td>yes</td>
    </tr>
    <tr>
    <td><span class="arithmatex">\(\{1,4\}\)</span></td>
    <td><span class="arithmatex">\(10\)</span></td>
    <td>yes</td>
    <td><span class="arithmatex">\(\{1,2,3,4\}\)</span></td>
    <td><span class="arithmatex">\(20\)</span></td>
    <td>no</td>
    </tr>
    </table></div>

    Among the $11$ feasible subsets, the best one is $\tilde S = \{2,3,4\}$, with $z(I)=13$. It is the only optimal solution: the subset $\{1,2\}$ also has value $13$, but it is not feasible.

### 1.3.1 Exponential growth

- Brute force works for the small instances above, but the number of candidates grows very quickly with the size $n$ of the instance. The following table compares polynomial and exponential growth.

$$
\begin{array}{rrrrrr}
\hline {n} & {n^2} & {n^3} & {2^n} & {(n-1)!/2} & {B(n)} \\
\hline {5} & {25} & {125} & {32} & {12} & {52} \\
{10} & {100} & {1\,000} & {1\,024} & {181\,440} & {115\,975} \\
{15} & {225} & {3\,375} & {32\,768} & {\approx 4.36 \cdot 10^{10}} & {\approx 1.38 \cdot 10^{9}} \\
{20} & {400} & {8\,000} & {1\,048\,576} & {\approx 6.08 \cdot 10^{16}} & {\approx 5.17 \cdot 10^{13}} \\
{25} & {625} & {15\,625} & {\approx 3.36 \cdot 10^{7}} & {\approx 3.10 \cdot 10^{23}} & {\approx 4.64 \cdot 10^{18}} \\
{30} & {900} & {27\,000} & {\approx 1.07 \cdot 10^{9}} & {\approx 4.42 \cdot 10^{30}} & {\approx 8.47 \cdot 10^{23}} \\
\hline
\end{array}
$$

![Figure 1](../img/combinatorial-optimization/fig01.svg){ .fig .cornice loading=lazy style="width:65%" }

### 1.3.2 Computing times

- We assume that a computer evaluates $10^9$ candidate solutions per second, and we compute the time of a complete enumeration (one year $=365.25$ days):

<div class="tabella" markdown="0"><table>
<tr>
<th><span class="arithmatex">\(n\)</span></th>
<th><span class="arithmatex">\(2^n\)</span></th>
<th>time at <span class="arithmatex">\(10^9\)</span> per second</th>
<th>time at <span class="arithmatex">\(10^{12}\)</span> per second</th>
</tr>
<tr>
<td><span class="arithmatex">\(10\)</span></td>
<td><span class="arithmatex">\(1\,024\)</span></td>
<td><span class="arithmatex">\(\approx 1.02\)</span> microseconds</td>
<td><span class="arithmatex">\(\approx 1.02\)</span> nanoseconds</td>
</tr>
<tr>
<td><span class="arithmatex">\(20\)</span></td>
<td><span class="arithmatex">\(\approx 1.05 \cdot 10^{6}\)</span></td>
<td><span class="arithmatex">\(\approx 1.05\)</span> milliseconds</td>
<td><span class="arithmatex">\(\approx 1.05\)</span> microseconds</td>
</tr>
<tr>
<td><span class="arithmatex">\(30\)</span></td>
<td><span class="arithmatex">\(\approx 1.07 \cdot 10^{9}\)</span></td>
<td><span class="arithmatex">\(\approx 1.07\)</span> seconds</td>
<td><span class="arithmatex">\(\approx 1.07\)</span> milliseconds</td>
</tr>
<tr>
<td><span class="arithmatex">\(40\)</span></td>
<td><span class="arithmatex">\(\approx 1.10 \cdot 10^{12}\)</span></td>
<td><span class="arithmatex">\(\approx 18.3\)</span> minutes</td>
<td><span class="arithmatex">\(\approx 1.10\)</span> seconds</td>
</tr>
<tr>
<td><span class="arithmatex">\(50\)</span></td>
<td><span class="arithmatex">\(\approx 1.13 \cdot 10^{15}\)</span></td>
<td><span class="arithmatex">\(\approx 13.0\)</span> days</td>
<td><span class="arithmatex">\(\approx 18.8\)</span> minutes</td>
</tr>
<tr>
<td><span class="arithmatex">\(60\)</span></td>
<td><span class="arithmatex">\(\approx 1.15 \cdot 10^{18}\)</span></td>
<td><span class="arithmatex">\(\approx 36.5\)</span> years</td>
<td><span class="arithmatex">\(\approx 13.3\)</span> days</td>
</tr>
<tr>
<td><span class="arithmatex">\(70\)</span></td>
<td><span class="arithmatex">\(\approx 1.18 \cdot 10^{21}\)</span></td>
<td><span class="arithmatex">\(\approx 3.74 \cdot 10^{4}\)</span> years</td>
<td><span class="arithmatex">\(\approx 37.4\)</span> years</td>
</tr>
<tr>
<td><span class="arithmatex">\(80\)</span></td>
<td><span class="arithmatex">\(\approx 1.21 \cdot 10^{24}\)</span></td>
<td><span class="arithmatex">\(\approx 3.83 \cdot 10^{7}\)</span> years</td>
<td><span class="arithmatex">\(\approx 3.83 \cdot 10^{4}\)</span> years</td>
</tr>
</table></div>

<div class="tabella" markdown="0"><table>
<tr>
<th></th>
<th colspan="3">cyclic orderings: <span class="arithmatex">\((n-1)!/2\)</span></th>
<th colspan="2">partitions: <span class="arithmatex">\(B(n)\)</span></th>
</tr>
<tr>
<td><span class="arithmatex">\(n\)</span></td>
<td>number</td>
<td><span class="arithmatex">\(10^9\)</span> per second</td>
<td><span class="arithmatex">\(10^{12}\)</span> per second</td>
<td>number</td>
<td><span class="arithmatex">\(10^9\)</span> per second</td>
</tr>
<tr>
<td><span class="arithmatex">\(10\)</span></td>
<td><span class="arithmatex">\(181\,440\)</span></td>
<td><span class="arithmatex">\(\approx 181\)</span> microseconds</td>
<td><span class="arithmatex">\(\approx 181\)</span> nanoseconds</td>
<td><span class="arithmatex">\(115\,975\)</span></td>
<td><span class="arithmatex">\(\approx 116\)</span> microseconds</td>
</tr>
<tr>
<td><span class="arithmatex">\(15\)</span></td>
<td><span class="arithmatex">\(\approx 4.36 \cdot 10^{10}\)</span></td>
<td><span class="arithmatex">\(\approx 43.6\)</span> seconds</td>
<td><span class="arithmatex">\(\approx 43.6\)</span> milliseconds</td>
<td><span class="arithmatex">\(\approx 1.38 \cdot 10^{9}\)</span></td>
<td><span class="arithmatex">\(\approx 1.38\)</span> seconds</td>
</tr>
<tr>
<td><span class="arithmatex">\(20\)</span></td>
<td><span class="arithmatex">\(\approx 6.08 \cdot 10^{16}\)</span></td>
<td><span class="arithmatex">\(\approx 1.93\)</span> years</td>
<td><span class="arithmatex">\(\approx 16.9\)</span> hours</td>
<td><span class="arithmatex">\(\approx 5.17 \cdot 10^{13}\)</span></td>
<td><span class="arithmatex">\(\approx 14.4\)</span> hours</td>
</tr>
<tr>
<td><span class="arithmatex">\(25\)</span></td>
<td><span class="arithmatex">\(\approx 3.10 \cdot 10^{23}\)</span></td>
<td><span class="arithmatex">\(\approx 9.83 \cdot 10^{6}\)</span> years</td>
<td><span class="arithmatex">\(\approx 9.83 \cdot 10^{3}\)</span> years</td>
<td><span class="arithmatex">\(\approx 4.64 \cdot 10^{18}\)</span></td>
<td><span class="arithmatex">\(\approx 147\)</span> years</td>
</tr>
</table></div>

- A computer $1000$ times faster does not change the picture: since $2^{10} = 1024 > 1000$, it enumerates in the same time the subsets of only about $10$ more elements. For the cyclic orderings the gain is even smaller: going from $n$ to $n+1$ elements multiplies their number by $n$, and $15 \cdot 16 \cdot 17 = 4080 > 1000$, so from $15$ elements the faster computer gains fewer than $3$ elements.

!!! chiave ""

    Complete enumeration is possible only for <strong>very small instances</strong>. Faster computers do not help: an exponential number of candidates defeats any constant speed-up. We need smarter approaches, which <strong>exclude</strong> whole parts of the solution space without exploring them.

## 1.4 Primal bounds, dual bounds and gap { #sez-sec-bounds }

- The smarter approaches rest on a simple idea: instead of computing $z(I)$ directly, we <strong>enclose</strong> it between two numbers. One comes from a feasible solution, the other from an argument that holds for <em>all</em> feasible solutions.

<a id="box-7-def-bounds"></a>

!!! definizione "Definition 1.4: primal and dual bounds"

    Consider an instance $I$ of a combinatorial optimization problem with feasible solutions $\mathcal F$, objective function $f$ and optimal value $z(I)$.

    1. A <strong>primal bound</strong> is the value $f(\bar S)$ of a feasible solution $\bar S \in \mathcal F$.

    2. A <strong>dual bound</strong> is a number $\beta$ such that

        $$
        f(S) \le \beta, \qquad \forall S \in \mathcal F \qquad \text{(maximization form)},
        $$

        or such that

        $$
        f(S) \ge \beta, \qquad \forall S \in \mathcal F \qquad \text{(minimization form)}.
        $$

- In the <strong>maximization form</strong> a primal bound is a <strong>lower bound</strong> and a dual bound is an <strong>upper bound</strong>:

    $$
    \LB = f(\bar S) \;\le\; z(I) \;\le\; \UB .
    $$

- In the <strong>minimization form</strong> the roles are exchanged: a primal bound is an <strong>upper bound</strong> $\UB = f(\bar S)$ and a dual bound is a <strong>lower bound</strong> $\LB$, with $\LB \le z(I) \le \UB$.

- Primal bounds come from feasible solutions, for example found by <strong>heuristic algorithms</strong>; dual bounds come from <strong>relaxations</strong> (for example the linear programming relaxation) or from combinatorial arguments.

![Figure 2](../img/combinatorial-optimization/fig02.svg){ .fig loading=lazy  }

<a id="box-8-def-gap"></a>

!!! definizione "Definition 1.5: gap"

    Let $\LB \le z(I) \le \UB$ be a lower and an upper bound of an instance $I$, one primal and one dual. The <strong>absolute gap</strong> is $\UB - \LB$ and, for $\LB \neq 0$, the <strong>relative gap</strong> (or simply <strong>gap</strong>) is

    $$
    gap(I) = \frac{\UB - \LB}{|\LB|}.
    $$

- The denominator is always the <strong>lower bound</strong>: in the maximization form it is the value of the feasible solution, as in the optimality gap of the integer linear programming module; in the minimization form it is the dual bound.

- With this choice the gap is never smaller than the relative error of the feasible solution with respect to $z(I)$ (chapter «Heuristic algorithms»): a gap of $5\%$ guarantees a solution within $5\%$ of the optimum.

- If the gap is zero, the feasible solution $\bar S$ is optimal and the dual bound is a <strong>certificate</strong> of its optimality.

<a id="box-9-obs-rounding"></a>

!!! teorema "Observation 1.6"

    If $f(S) \in \Z$ for every $S \in \mathcal F$, then in the maximization form $\lfloor \beta \rfloor$ is also a dual bound, and in the minimization form $\lceil \beta \rceil$ is also a dual bound.

??? dimostrazione "Proof"

    In the maximization form, for every $S \in \mathcal F$ we have $f(S) \le \beta$ and $f(S) \in \Z$; the largest integer not greater than $\beta$ is $\lfloor \beta \rfloor$, hence $f(S) \le \lfloor \beta \rfloor$. The minimization form is analogous. <span class="qed">□</span>

<a id="box-10-ex-oc1-gap"></a>

!!! esempio "Example 1.4: bounds on the small instance"

    We consider again the instance of <span style="color:#1971c2">[Example 1.1](#box-2-ex-oc1-small)</span> (maximization), and we suppose that we have not enumerated its subsets.

    - <em>Primal bound.</em> We start from $\emptyset$ and examine the elements by non-increasing weight, adding each one if the set stays feasible: $\{1\}$ is feasible, $\{1,2\}$ is not, $\{1,3\}$ is feasible, $\{1,3,4\}$ is not. The feasible solution $\bar S = \{1,3\}$ gives $\LB = 11$.

    - <em>A first dual bound.</em> The weights are positive, so $f(S) \le f(\mathscr{U}) = 20$ for every $S \in \mathcal F$.

    - <em>A better dual bound.</em> No feasible subset contains both $1$ and $2$, so a feasible subset takes at most one of the weights $7$ and $6$:

        $$
        f(S) \le \max\{7,6\} + 4 + 3 = 14, \qquad \forall S \in \mathcal F .
        $$

        The absolute gap is $14-11 = 3$ and the relative gap is $\tfrac{3}{11} \approx 27.3\%$.

    - <em>A better primal bound.</em> The feasible solution $\{2,3,4\}$ gives $\LB = 13$: the gap drops to $\tfrac{1}{13} \approx 7.7\%$.

    - <em>Closing the gap.</em> The only feasible subset with $3$ elements is $\{2,3,4\}$, and a subset with at most $2$ elements has value at most $7+6 = 13$. Hence $\UB = 13 = \LB$: the gap is zero, and this argument is a certificate that $\{2,3,4\}$ is optimal, without listing the $16$ subsets.

    If an argument gave instead the dual bound $13.5$, then $\lfloor 13.5 \rfloor = 13$ would also be a dual bound, since all values $f(S)$ are integer ([Observation 1.6](#box-9-obs-rounding)).

- In the rest of the course, every chapter on a problem records, for its instances, the best primal and dual bounds found so far; every method improves one side or the other.

## 1.5 A glimpse of computational complexity { #sez-sec-complexity }

- Brute force takes exponential time. Is there an algorithm that solves a combinatorial optimization problem in polynomial time? Computational complexity classifies problems according to this question; here we give only the definitions needed in the course.

- The <strong>size</strong> of an instance is the number of bits needed to write it. For example, an instance with $n$ numbers, the largest of which is $M$, has size of the order of $n \log_2 M$: a number $M$ is written with about $\log_2 M$ bits, not with $M$ symbols.

- An algorithm is <strong>polynomial</strong> if its running time is bounded by a polynomial in the size of the instance.

- The <strong>decision version</strong> of an optimization problem asks a yes/no question, for example: “is there a feasible solution with value at least $k$?”.

<a id="box-11-def-pnp"></a>

!!! definizione "Definition 1.7: the classes P and NP"

    1. <strong>P</strong> is the class of decision problems that can be solved by a polynomial algorithm.

    2. <strong>NP</strong> is the class of decision problems whose “yes” instances admit a certificate that can be checked in polynomial time (for example, a feasible solution whose feasibility and value are computed in polynomial time).

    3. A decision problem in NP is <strong>NP-complete</strong> if every problem in NP can be reduced to it in polynomial time. An optimization problem is <strong>NP-hard</strong> if its decision version is NP-complete (more generally, if a polynomial algorithm for it would give a polynomial algorithm for an NP-complete problem).

- It is not known whether $P = NP$. No polynomial algorithm is known for any NP-complete problem, and it is widely believed that none exists: for an NP-hard problem we do not expect a polynomial exact algorithm.

### 1.5.1 Pseudo-polynomial algorithms and strong NP-hardness

- Some NP-hard problems can be solved in time polynomial in $n$ <strong>and in the value</strong> of the numbers of the instance. For example, an algorithm that takes $O(n\,M)$ time, where $M$ is the largest number of the instance, is not polynomial: $M$ is exponential in its number of bits $\log_2 M$.

<a id="box-12-def-pseudo"></a>

!!! definizione "Definition 1.8: pseudo-polynomial algorithm, weak and strong NP-hardness"

    1. An algorithm is <strong>pseudo-polynomial</strong> if its running time is bounded by a polynomial in the size of the instance and in the largest number appearing in it.

    2. An NP-hard problem is <strong>strongly NP-hard</strong> if it remains NP-hard when all its numbers are bounded by a polynomial in the size of the instance (equivalently, when the numbers are written in unary). Otherwise, if it admits a pseudo-polynomial algorithm, it is called <strong>weakly NP-hard</strong> (NP-hard in the ordinary sense).

- A strongly NP-hard problem has no pseudo-polynomial algorithm, unless $P = NP$.

!!! chiave ""

    NP-hardness does not mean that an instance cannot be solved: it means that no algorithm is expected to solve <em>every</em> instance in polynomial time. In practice we combine <strong>exact methods</strong> that close the gap between primal and dual bounds, <strong>heuristics</strong> that find good solutions quickly, and <strong>approximation algorithms</strong> that guarantee a bounded gap in the worst case.

- The problems of the next chapters are all NP-hard: the knapsack problem is weakly NP-hard, while bin packing, vertex coloring, maximum clique and the travelling salesman problem are strongly NP-hard. Each chapter discusses the complexity of its problem.

## 1.6 Typical mistakes

!!! attenzione "Warning"

    - <strong>Confusing candidate and feasible solutions.</strong> The numbers $2^n$, $(n-1)!/2$ and $B(n)$ count the candidates; the feasible solutions can be far fewer, for example $11$ subsets out of $16$ in <span style="color:#1971c2">[Example 1.1](#box-2-ex-oc1-small)</span>.

    - <strong>Exchanging the two directions of the bounds.</strong> In a maximization problem a primal bound is a lower bound and a dual bound is an upper bound; in a minimization problem the roles are exchanged.

    - <strong>Rounding a dual bound when the objective is not integer.</strong> The rounding of [Observation 1.6](#box-9-obs-rounding) needs $f(S) \in \Z$ for every feasible solution.

    - <strong>Counting equivalent solutions twice.</strong> A cyclic ordering and its reverse are the same cyclic ordering, and two assignments that differ by a renaming of interchangeable labels are the same solution.

    - <strong>Reading NP-hard as unsolvable.</strong> NP-hardness is a statement on the worst case: many instances of practical size are solved, and the rest of the course shows how.

## 1.7 In summary

!!! chiave "In summary"

    - A combinatorial optimization problem has a <strong>finite</strong> set of feasible solutions, which are subsets, orderings, partitions or assignments.

    - The number of candidate solutions is $2^n$ for subsets, $n!$ for orderings, $(n-1)!/2$ for cyclic orderings and $B(n)$ for partitions: brute force is limited to very small instances, even on much faster computers.

    - A <strong>primal bound</strong> is the value of a feasible solution, a <strong>dual bound</strong> holds for all feasible solutions; the optimum lies between them, and a zero <strong>gap</strong> certifies optimality.

    - An NP-hard problem has no known polynomial algorithm; a weakly NP-hard problem may have a pseudo-polynomial one, a strongly NP-hard problem has none unless $P=NP$.

## 1.8 Exercises

!!! esercizio "Exercise: Recognizing the combinatorial object (basic)"

    For each situation, name the combinatorial object of a solution (subset, ordering, cyclic ordering, partition, assignment) and the number of candidate solutions.

    <strong>Questions</strong>

    1. A research fund must choose which of $12$ proposals to finance with a fixed budget.

    2. A technician must visit $8$ sites (her office included) and come back to the office.

    3. $8$ boxes must be loaded into identical vans of the same capacity (count the ways of grouping the boxes).

    4. $8$ jobs must be assigned to $3$ machines (count the assignments).

    5. A factory must decide in which of the next $12$ weeks to set up its line.

??? soluzione "Solution"

    1. A subset of the proposals: $2^{12} = 4096$ subsets.

    2. A cyclic ordering of the $8$ sites: $(8-1)!/2 = 5040/2 = 2520$ cyclic orderings.

    3. A partition of the boxes: $B(8) = 4140$ partitions.

    4. An assignment of the jobs to the machines: $3^8 = 6561$ assignments.

    5. A subset of the weeks: $2^{12} = 4096$ choices.

!!! esercizio "Exercise: Brute force, bounds and gap (standard)"

    Consider the ground set $\mathscr{U} = \{1,2,3,4\}$, the weights $\vet{c} = (8,5,4,3)$, the objective $f(S) = \sum_{j \in S} c_j$ to be maximized, and the feasible solutions

    $$
    \mathcal{F} = \big\{ \emptyset, \{1\}, \{2\}, \{3\}, \{4\}, \{1,4\}, \{2,3\}, \{2,4\}, \{3,4\}, \{2,3,4\} \big\}.
    $$

    <strong>Questions</strong>

    1. How many candidate and how many feasible solutions are there?

    2. The solution $\{1,4\}$ is feasible: which bound does it give?

    3. Find a dual bound by distinguishing the feasible subsets that contain element $1$ from those that do not, and compute the absolute and relative gaps.

    4. Find an optimal solution and explain why it is optimal.

??? soluzione "Solution"

    1. The candidates are the $2^4 = 16$ subsets of $\mathscr{U}$; $10$ of them are feasible.

    2. $f(\{1,4\}) = 8+3 = 11$ is the value of a feasible solution of a maximization problem, hence a primal bound: $\LB = 11$.

    3. The feasible subsets that contain $1$ are $\{1\}$ and $\{1,4\}$, of value at most $8+3 = 11$. A feasible subset without $1$ has value at most $5+4+3 = 12$. Hence $f(S) \le 12$ for every $S \in \mathcal{F}$, and $\UB = 12$. The absolute gap is $12-11 = 1$ and the relative gap is $\tfrac{1}{11} \approx 9.1\%$.

    4. The feasible solution $\{2,3,4\}$ has value $5+4+3 = 12 = \UB$. The gap is zero, so it is optimal and $z(I) = 12$: the element of largest weight is not in the optimal solution.

!!! esercizio "Exercise: How large can n be? (standard)"

    A computer evaluates $10^9$ candidate solutions per second, and we allow one hour of computation.

    <strong>Questions</strong>

    1. What is the largest number $n$ of elements for which all the subsets can be enumerated?

    2. What is the largest number $n$ of elements for which all the cyclic orderings can be enumerated?

    3. Answer the same questions for a computer $1000$ times faster.

??? soluzione "Solution"

    In one hour the computer evaluates $3600 \cdot 10^9 = 3.6 \cdot 10^{12}$ candidates.

    1. $2^{41} \approx 2.20 \cdot 10^{12} \le 3.6 \cdot 10^{12} < 2^{42} \approx 4.40 \cdot 10^{12}$, hence $n = 41$ elements.

    2. For $16$ elements $15!/2 \approx 6.54 \cdot 10^{11} \le 3.6 \cdot 10^{12}$, while for $17$ elements $16!/2 \approx 1.05 \cdot 10^{13} > 3.6 \cdot 10^{12}$; hence $n = 16$ elements.

    3. The budget becomes $3.6 \cdot 10^{15}$. For the subsets, $2^{51} \approx 2.25 \cdot 10^{15} \le 3.6 \cdot 10^{15} < 2^{52} \approx 4.50 \cdot 10^{15}$, hence $n = 51$ elements: $10$ more. For the cyclic orderings, $18!/2 \approx 3.20 \cdot 10^{15} \le 3.6 \cdot 10^{15} < 19!/2 \approx 6.08 \cdot 10^{16}$, hence $n = 19$ elements: only $3$ more.

!!! esercizio "Exercise: Rounding the dual bounds (basic)"

    In two instances all the feasible solutions have integer value.

    <strong>Questions</strong>

    1. In a maximization instance, a heuristic finds a solution of value $11$ and a relaxation gives the dual bound $12.6$. Give $\LB$, $\UB$ and the relative gap, before and after rounding the dual bound.

    2. A solution of value $12$ is then found: what can you conclude?

    3. In a minimization instance, a heuristic finds a solution of value $15$ and an argument gives the dual bound $13.2$. Give $\LB$, $\UB$ and the relative gap after rounding.

??? soluzione "Solution"

    1. $\LB = 11$ (primal) and $\UB = 12.6$ (dual): the relative gap is $\tfrac{1.6}{11} \approx 14.5\%$. Since the values are integer, $\lfloor 12.6 \rfloor = 12$ is also a dual bound, and the gap becomes $\tfrac{1}{11} \approx 9.1\%$.

    2. Now $\LB = 12 = \UB$: the gap is zero and the solution of value $12$ is optimal.

    3. In the minimization form the primal bound is $\UB = 15$ and the dual bound is $\LB = \lceil 13.2 \rceil = 14$. The relative gap, divided by the lower bound, is $\tfrac{15-14}{14} = \tfrac{1}{14} \approx 7.1\%$.

## 1.9 Roadmap of the course

- The problems are defined, one per chapter, in the next chapters: [«Knapsack problems»](https://fabiofurini.github.io/combinatorial-optimization/combinatorial-optimization-problems/knapsack/), [«Bin packing and cutting stock»](https://fabiofurini.github.io/combinatorial-optimization/combinatorial-optimization-problems/bin-packing/), [«Vertex coloring»](https://fabiofurini.github.io/combinatorial-optimization/combinatorial-optimization-problems/coloring/), [«The maximum clique problem»](https://fabiofurini.github.io/combinatorial-optimization/combinatorial-optimization-problems/clique/), [«The travelling salesman problem»](https://fabiofurini.github.io/combinatorial-optimization/combinatorial-optimization-problems/tsp/), [«Parallel machine scheduling»](https://fabiofurini.github.io/combinatorial-optimization/combinatorial-optimization-problems/pcmax/) and [«Capacitated lot sizing»](https://fabiofurini.github.io/combinatorial-optimization/combinatorial-optimization-problems/lot-sizing/).

- The following parts solve them, each with a different method: [«Formulations and their properties»](https://fabiofurini.github.io/combinatorial-optimization/formulations/) (dual bounds), [«Dynamic programming»](https://fabiofurini.github.io/combinatorial-optimization/dynamic-programming/) (exact methods), [«Heuristic algorithms»](https://fabiofurini.github.io/combinatorial-optimization/heuristic-algorithms/) (primal bounds), [«Approximation algorithms»](https://fabiofurini.github.io/combinatorial-optimization/approximation-algorithms/) (guarantees in the worst case) and [«Problem-specific branch-and-bound»](https://fabiofurini.github.io/combinatorial-optimization/specialized-algorithms/).

---

**Exercises on this chapter:** [:material-pencil: Combinatorial optimization](../exercises/combinatorial-optimization.md)
