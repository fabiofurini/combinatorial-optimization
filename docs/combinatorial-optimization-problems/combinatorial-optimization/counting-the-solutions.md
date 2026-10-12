---
title: "Counting the solutions · Combinatorial explosion and brute force"
---

# Counting the solutions · Combinatorial explosion and brute force

<div class="info-capitolo" markdown>

**Part 1 · Combinatorial optimization problems · Chapter 1** · [:material-book-open-variant: Chapter 1: Combinatorial optimization](index.md) · [:material-file-pdf-box: Lecture notes, volume 1 (PDF)](../../pdf/lecture-notes-1-combinatorial-optimization-problems.pdf) · [:material-pencil: Exercises: Combinatorial optimization](../../exercises/combinatorial-optimization.md)

</div>

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

- These numbers count the <strong>candidate</strong> solutions. The feasible ones can be far fewer: in <span style="color:#1971c2">[Example 1.1](index.md#box-2-ex-oc1-small)</span> only $11$ of the $16$ subsets are feasible.

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

    For the instance of <span style="color:#1971c2">[Example 1.1](index.md#box-2-ex-oc1-small)</span> the $2^4=16$ subsets of $\mathscr{U}$ are:

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

![Figure 1](../../img/combinatorial-optimization/fig01.svg){ .fig .cornice loading=lazy style="width:65%" }

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

---

**Next:** [Primal bounds, dual bounds and gap · A glimpse of computational complexity](primal-bounds-dual-bounds-and-gap.md)
