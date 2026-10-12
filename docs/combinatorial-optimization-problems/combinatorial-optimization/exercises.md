---
title: "Exercises · Roadmap of the course"
---

# Exercises · Roadmap of the course

<div class="info-capitolo" markdown>

**Part 1 · Combinatorial optimization problems · Chapter 1** · [:material-book-open-variant: Chapter 1: Combinatorial optimization](index.md) · [:material-file-pdf-box: Lecture notes, volume 1 (PDF)](../../pdf/lecture-notes-1-combinatorial-optimization-problems.pdf) · [:material-pencil: Exercises: Combinatorial optimization](../../exercises/combinatorial-optimization.md)

</div>

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

**Exercises on this chapter:** [:material-pencil: Combinatorial optimization](../../exercises/combinatorial-optimization.md)

