---
title: "A glimpse of computational complexity"
---

# A glimpse of computational complexity

<div class="info-capitolo" markdown>

**Part 1 · Combinatorial optimization problems · Chapter 1** · [:material-book-open-variant: Chapter 1: Combinatorial optimization](index.md) · [:material-file-pdf-box: Lecture notes, volume 1 (PDF)](../../pdf/lecture-notes-1-combinatorial-optimization-problems.pdf) · [:material-pencil: Exercises: Combinatorial optimization](../../exercises/combinatorial-optimization.md)

</div>

## 1.6 A glimpse of computational complexity { #sez-sec-complexity }

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

### 1.6.1 Pseudo-polynomial algorithms and strong NP-hardness

- Some NP-hard problems can be solved in time polynomial in $n$ <strong>and in the value</strong> of the numbers of the instance. For example, an algorithm that takes $O(n\,M)$ time, where $M$ is the largest number of the instance, is not polynomial: $M$ is exponential in its number of bits $\log_2 M$.

<a id="box-12-def-pseudo"></a>

!!! definizione "Definition 1.8: pseudo-polynomial algorithm, weak and strong NP-hardness"

    1. An algorithm is <strong>pseudo-polynomial</strong> if its running time is bounded by a polynomial in the size of the instance and in the largest number appearing in it.

    2. An NP-hard problem is <strong>strongly NP-hard</strong> if it remains NP-hard when all its numbers are bounded by a polynomial in the size of the instance (equivalently, when the numbers are written in unary). Otherwise, if it admits a pseudo-polynomial algorithm, it is called <strong>weakly NP-hard</strong> (NP-hard in the ordinary sense).

- A strongly NP-hard problem has no pseudo-polynomial algorithm, unless $P = NP$.

!!! chiave ""

    NP-hardness does not mean that an instance cannot be solved: it means that no algorithm is expected to solve <em>every</em> instance in polynomial time. In practice we combine <strong>exact methods</strong> that close the gap between primal and dual bounds, <strong>heuristics</strong> that find good solutions quickly, and <strong>approximation algorithms</strong> that guarantee a bounded gap in the worst case.

- The problems of the next chapters are all NP-hard: the 0/1 knapsack problem is weakly NP-hard, while bin packing, vertex coloring, maximum clique and the travelling salesman problem are strongly NP-hard. Each chapter discusses the complexity of its problem.

## 1.7 Typical mistakes

!!! attenzione "Warning"

    - <strong>Confusing candidate and feasible solutions.</strong> The numbers $2^n$, $(n-1)!/2$ and $B(n)$ count the candidates; the feasible solutions can be far fewer, for example $11$ subsets out of $16$ in <span style="color:#1971c2">[Example 1.1](combinatorial-optimization-problems.md#box-2-ex-oc1-small)</span>.

    - <strong>Exchanging the two directions of the bounds.</strong> In a maximization problem a primal bound is a lower bound and a dual bound is an upper bound; in a minimization problem the roles are exchanged.

    - <strong>Rounding a dual bound when the objective is not integer.</strong> The rounding of [Observation 1.6](primal-bounds-dual-bounds-and-gap.md#box-9-obs-rounding) needs $f(S) \in \Z$ for every feasible solution.

    - <strong>Counting equivalent solutions twice.</strong> A cyclic ordering and its reverse are the same cyclic ordering, and two assignments that differ by a renaming of interchangeable labels are the same solution.

    - <strong>Reading NP-hard as unsolvable.</strong> NP-hardness is a statement on the worst case: many instances of practical size are solved, and the rest of the course shows how.

## 1.8 In summary

!!! chiave "In summary"

    - A combinatorial optimization problem has a finite ground set, a family of feasible subsets and an objective function; an optimal solution exists whenever a feasible solution exists.

    - The category of the decisions gives the combinatorial object of a solution: a subset, a vector of integer quantities, an assignment, an ordering or a partition.

    - The candidate solutions are $2^n$ subsets, $n!$ orderings, $(n-1)!/2$ cyclic orderings and $B(n)$ partitions: brute force works only on very small instances.

    - A feasible solution gives a primal bound, a relaxation or a combinatorial argument gives a dual bound; a zero gap certifies that the feasible solution is optimal.

    - The problems of the course are NP-hard: no polynomial exact algorithm is expected for them.

    <strong>Dashboard of the small instance.</strong>

    <div class="tabella" markdown="0"><table>
    <tr>
    <th><span style="color:#1971c2"><a href="../combinatorial-optimization-problems/#box-2-ex-oc1-small">Example 1.1</a></span> (max)</th>
    <th>lower bound</th>
    <th>upper bound</th>
    <th>from</th>
    </tr>
    <tr>
    <td>first bounds</td>
    <td><span class="arithmatex">\(11\)</span></td>
    <td><span class="arithmatex">\(14\)</span></td>
    <td>greedy choice, one of the weights <span class="arithmatex">\(7\)</span> and <span class="arithmatex">\(6\)</span></td>
    </tr>
    <tr>
    <td>final bounds</td>
    <td><span class="arithmatex">\(13\)</span></td>
    <td><span class="arithmatex">\(13\)</span></td>
    <td>solution <span class="arithmatex">\(\{2,3,4\}\)</span>, argument by cardinality</td>
    </tr>
    </table></div>

---

**Exercises on this chapter:** [:material-pencil: Combinatorial optimization](../../exercises/combinatorial-optimization.md)

