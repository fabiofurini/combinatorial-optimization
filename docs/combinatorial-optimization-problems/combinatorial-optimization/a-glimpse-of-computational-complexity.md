---
title: "A glimpse of computational complexity"
---

# 1.5 A glimpse of computational complexity { #sez-sec-complexity }

<div class="info-capitolo" markdown>

**Part 1 · Combinatorial optimization problems · Chapter 1** · [:material-book-open-variant: Chapter 1: Combinatorial optimization](index.md) · [:material-file-pdf-box: Lecture notes, volume 1 (PDF)](../../pdf/lecture-notes-1-combinatorial-optimization-problems.pdf) · [:material-pencil: Exercises: Combinatorial optimization](../../exercises/combinatorial-optimization.md)

</div>

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

## 1.5.1 Pseudo-polynomial algorithms and strong NP-hardness

- Some NP-hard problems can be solved in time polynomial in $n$ <strong>and in the value</strong> of the numbers of the instance. For example, an algorithm that takes $O(n\,M)$ time, where $M$ is the largest number of the instance, is not polynomial: $M$ is exponential in its number of bits $\log_2 M$.

<a id="box-12-def-pseudo"></a>

!!! definizione "Definition 1.8: pseudo-polynomial algorithm, weak and strong NP-hardness"

    1. An algorithm is <strong>pseudo-polynomial</strong> if its running time is bounded by a polynomial in the size of the instance and in the largest number appearing in it.

    2. An NP-hard problem is <strong>strongly NP-hard</strong> if it remains NP-hard when all its numbers are bounded by a polynomial in the size of the instance (equivalently, when the numbers are written in unary). Otherwise, if it admits a pseudo-polynomial algorithm, it is called <strong>weakly NP-hard</strong> (NP-hard in the ordinary sense).

- A strongly NP-hard problem has no pseudo-polynomial algorithm, unless $P = NP$.

!!! chiave ""

    NP-hardness does not mean that an instance cannot be solved: it means that no algorithm is expected to solve <em>every</em> instance in polynomial time. In practice we combine <strong>exact methods</strong> that close the gap between primal and dual bounds, <strong>heuristics</strong> that find good solutions quickly, and <strong>approximation algorithms</strong> that guarantee a bounded gap in the worst case.

- The problems of the next chapters are all NP-hard: the knapsack problem is weakly NP-hard, while bin packing, vertex coloring, maximum clique and the travelling salesman problem are strongly NP-hard. Each chapter discusses the complexity of its problem.

---

**Next:** [Typical mistakes · In summary](typical-mistakes.md)
