---
title: "Primal bounds, dual bounds and gap · A glimpse of computational complexity"
---

# Primal bounds, dual bounds and gap · A glimpse of computational complexity

<div class="info-capitolo" markdown>

**Part 1 · Combinatorial optimization problems · Chapter 1** · [:material-book-open-variant: Chapter 1: Combinatorial optimization](index.md) · [:material-file-pdf-box: Lecture notes, volume 1 (PDF)](../../pdf/lecture-notes-1-combinatorial-optimization-problems.pdf) · [:material-pencil: Exercises: Combinatorial optimization](../../exercises/combinatorial-optimization.md)

</div>

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

![Figure 2](../../img/combinatorial-optimization/fig02.svg){ .fig loading=lazy  }

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

    We consider again the instance of <span style="color:#1971c2">[Example 1.1](index.md#box-2-ex-oc1-small)</span> (maximization), and we suppose that we have not enumerated its subsets.

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

---

**Next:** [Typical mistakes · In summary](typical-mistakes.md)
