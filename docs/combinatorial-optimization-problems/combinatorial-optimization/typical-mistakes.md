---
title: "Typical mistakes · In summary"
---

# Typical mistakes · In summary

<div class="info-capitolo" markdown>

**Part 1 · Combinatorial optimization problems · Chapter 1** · [:material-book-open-variant: Chapter 1: Combinatorial optimization](index.md) · [:material-file-pdf-box: Lecture notes, volume 1 (PDF)](../../pdf/lecture-notes-1-combinatorial-optimization-problems.pdf) · [:material-pencil: Exercises: Combinatorial optimization](../../exercises/combinatorial-optimization.md)

</div>

## 1.6 Typical mistakes

!!! attenzione "Warning"

    - <strong>Confusing candidate and feasible solutions.</strong> The numbers $2^n$, $(n-1)!/2$ and $B(n)$ count the candidates; the feasible solutions can be far fewer, for example $11$ subsets out of $16$ in <span style="color:#1971c2">[Example 1.1](index.md#box-2-ex-oc1-small)</span>.

    - <strong>Exchanging the two directions of the bounds.</strong> In a maximization problem a primal bound is a lower bound and a dual bound is an upper bound; in a minimization problem the roles are exchanged.

    - <strong>Rounding a dual bound when the objective is not integer.</strong> The rounding of [Observation 1.6](primal-bounds-dual-bounds-and-gap.md#box-9-obs-rounding) needs $f(S) \in \Z$ for every feasible solution.

    - <strong>Counting equivalent solutions twice.</strong> A cyclic ordering and its reverse are the same cyclic ordering, and two assignments that differ by a renaming of interchangeable labels are the same solution.

    - <strong>Reading NP-hard as unsolvable.</strong> NP-hardness is a statement on the worst case: many instances of practical size are solved, and the rest of the course shows how.

## 1.7 In summary

!!! chiave "In summary"

    - A combinatorial optimization problem has a <strong>finite</strong> set of feasible solutions, which are subsets, orderings, partitions or assignments.

    - The number of candidate solutions is $2^n$ for subsets, $n!$ for orderings, $(n-1)!/2$ for cyclic orderings and $B(n)$ for partitions: brute force is limited to very small instances, even on much faster computers.

    - A <strong>primal bound</strong> is the value of a feasible solution, a <strong>dual bound</strong> holds for all feasible solutions; the optimum lies between them, and a zero <strong>gap</strong> certifies optimality.

    - An NP-hard problem has no known polynomial algorithm; a weakly NP-hard problem may have a pseudo-polynomial one, a strongly NP-hard problem has none unless $P=NP$.

---

**Next:** [1.8 Exercises](exercises.md)
