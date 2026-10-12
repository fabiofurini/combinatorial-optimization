---
title: "Remarks and summary"
---

# Remarks and summary

<div class="info-capitolo" markdown>

**Part 1 · Combinatorial optimization problems · Chapter 7** · [:material-book-open-variant: Chapter 7: Machine scheduling](index.md) · [:material-file-pdf-box: Lecture notes, volume 1 (PDF)](../../pdf/lecture-notes-1-combinatorial-optimization-problems.pdf) · [:material-pencil: Exercises: Machine scheduling](../../exercises/pcmax.md)

</div>

## 7.7 Remarks

- In 1966 R. L. Graham proved that any list of jobs, processed greedily, gives a makespan at most $2-1/m$ times the optimal one.

- In 1969 he proved the better ratio $4/3-1/(3m)$ for the list sorted by non-increasing processing time (the rule called LPT).

## 7.8 Typical mistakes

!!! attenzione "Warning"

    - <strong>Counting $m^n$ different schedules.</strong> The machines are identical: renaming them gives the same schedule, so the distinct schedules are the partitions of the jobs into at most $m$ sets.

    - <strong>Confusing makespan and total load.</strong> The makespan is the <u>largest</u> load of a machine, not the sum of the processing times and not the average load.

    - <strong>Forgetting the ceiling.</strong> The processing times are integer, so is the makespan: the average load $27/3$ is rounded up when it is not an integer.

    - <strong>Assuming that the bound is attained.</strong> The bound of the previous section is a dual bound: a schedule with that makespan may not exist, as the instance $(4,3,3)$ on two machines shows.

    - <strong>Believing that the optimal schedule is unique.</strong> The instance of <span style="color:#1971c2">[Example 7.1](index.md#box-2-ex-pcmax7)</span> has two optimal schedules, and twelve optimal assignments.

## 7.9 In summary

!!! chiave "In summary"

    - The problem $P\,||\,C_{\max}$ asks to assign jobs to identical machines minimizing the largest load, the makespan; a solution is a partition of the jobs into at most $m$ sets.

    - There are $m^n$ assignments, but only $\sum_{k=1}^{m} S(n,k)$ distinct schedules.

    - Giving each job to the least loaded machine builds a schedule quickly; the maximum between the longest job and the rounded average load is a lower bound on the optimal makespan.

    - When a schedule attains the lower bound it is optimal; otherwise the gap remains open.

    - The problem is the mirror of bin packing: here the number of machines is fixed and the capacity is minimized.

    <strong>Dashboard of the $P\,||\,C_{\max}$ instance</strong> (minimization: the lower bound is a dual bound, the upper bound is the makespan of a schedule):

    <div class="tabella" markdown="0"><table>
    <tr>
    <th>Chapter</th>
    <th>Lower bound</th>
    <th>Upper bound</th>
    <th>From</th>
    </tr>
    <tr>
    <td>This chapter</td>
    <td><span class="arithmatex">\(9\)</span></td>
    <td><span class="arithmatex">\(11\)</span></td>
    <td>longest job and average load; least loaded machine</td>
    </tr>
    <tr>
    <td>This chapter, improved schedule</td>
    <td><span class="arithmatex">\(9\)</span></td>
    <td><span class="arithmatex">\(9\)</span></td>
    <td><span class="arithmatex">\(J_1=\{1,3\}\)</span>, <span class="arithmatex">\(J_2=\{2,4\}\)</span>, <span class="arithmatex">\(J_3=\{5,6,7\}\)</span></td>
    </tr>
    </table></div>

---

**Exercises on this chapter:** [:material-pencil: Machine scheduling](../../exercises/pcmax.md)

---

**In depth:** [:material-star-outline: the course on this problem](../../selected-problems/pcmax.md)

