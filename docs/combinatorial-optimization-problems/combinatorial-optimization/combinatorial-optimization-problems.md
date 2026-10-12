---
title: "Combinatorial optimization problems"
---

# 1.1 Combinatorial optimization problems

<div class="info-capitolo" markdown>

**Part 1 · Combinatorial optimization problems · Chapter 1** · [:material-book-open-variant: Chapter 1: Combinatorial optimization](index.md) · [:material-file-pdf-box: Lecture notes, volume 1 (PDF)](../../pdf/lecture-notes-1-combinatorial-optimization-problems.pdf) · [:material-pencil: Exercises: Combinatorial optimization](../../exercises/combinatorial-optimization.md) · [:material-gesture-tap: App: Brute force on the 0/1 knapsack problem](../../lab/kp-brute-force.md)

</div>

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

    3. finding an optimal solution can be <strong>computationally very difficult</strong> (Section [1.6](a-glimpse-of-computational-complexity.md#sez-sec-complexity));

    4. specialized algorithms are needed to explore the solution space without enumerating it.

---

**Next:** [1.2 Categories of combinatorial optimization problems](categories-of-combinatorial-optimization-problems.md)
