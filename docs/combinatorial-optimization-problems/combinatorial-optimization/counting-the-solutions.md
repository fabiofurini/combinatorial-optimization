---
title: "Counting the solutions"
---

# 1.3 Counting the solutions { #sez-sec-counting }

<div class="info-capitolo" markdown>

**Part 1 · Combinatorial optimization problems · Chapter 1** · [:material-book-open-variant: Chapter 1: Combinatorial optimization](index.md) · [:material-file-pdf-box: Lecture notes, volume 1 (PDF)](../../pdf/lecture-notes-1-combinatorial-optimization-problems.pdf) · [:material-pencil: Exercises: Combinatorial optimization](../../exercises/combinatorial-optimization.md) · [:material-gesture-tap: App: Brute force on the 0/1 knapsack problem](../../lab/kp-brute-force.md)

</div>

- Before solving a problem we ask <strong>how many</strong> candidate solutions it has. The answer depends only on the combinatorial object: subsets, orderings or partitions.

## 1.3.1 Subsets

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

## 1.3.2 Orderings and cyclic orderings

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

## 1.3.3 Partitions and Bell numbers

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

- These numbers count the <strong>candidate</strong> solutions. The feasible ones can be far fewer: in <span style="color:#1971c2">[Example 1.1](combinatorial-optimization-problems.md#box-2-ex-oc1-small)</span> only $11$ of the $16$ subsets are feasible.

---

**Next:** [1.4 Combinatorial explosion and brute force](combinatorial-explosion-and-brute-force.md)
