---
title: "Scheduling problems"
---

# Scheduling problems

<div class="info-capitolo" markdown>

**Part 1 · Combinatorial optimization problems · Chapter 7** · [:material-file-pdf-box: Lecture notes, volume 1 (PDF)](../../pdf/lecture-notes-1-combinatorial-optimization-problems.pdf) · [:material-pencil: Exercises: Scheduling problems](../../exercises/pcmax.md)

</div>

!!! nota "Prerequisites"

    - From this module, the chapter «Combinatorial optimization problems»: what a combinatorial optimization problem is, the number of candidate solutions, and primal and dual bounds.

    - From the same chapter, the reference $P\,||\,C_{\max}$ instance with $7$ jobs and $3$ machines, and the partitions of a set (Bell and Stirling numbers).

!!! chiave "Objectives"

    At the end of this chapter you will be able to:

    - classify a scheduling problem with the three-field notation, and state the problem $P\,||\,C_{\max}$;

    - describe a schedule by the sets of jobs of the machines, and compute loads and makespan;

    - count the assignments and the distinct schedules of an instance;

    - build a first schedule by hand, assigning every job to the least loaded machine;

    - compute a lower bound on the optimal makespan and use it to prove that a schedule is optimal.

## 7.1 Overview of the family

- The <strong>scheduling problems</strong> of this chapter share the same data: a set $\mathscr{J} = \{1,2,\dots,n\}$ of $n$ jobs, $m$ parallel machines and, for each job, a <em>processing time</em>.

- A solution assigns every job to a machine: the jobs $J_h$ of machine $h$ are processed one after the other, and the machine completes them at the time $L_h$, its <strong>load</strong>.

- The objective is to minimize the <strong>makespan</strong> $C_{\max} = \max_h L_h$, the completion time of the last job.

!!! chiave ""

    A parallel machine scheduling problem partitions the jobs among the machines so that the last machine finishes as early as possible. The members of the family differ in the machine environment, described by the three-field notation.

- The table lists the members of the family, with the section that defines each of them.

<div class="tabella" markdown="0"><table>
<tr>
<th><strong>Problem</strong></th>
<th><strong>Notation</strong></th>
<th><strong>Machines</strong></th>
<th><strong>Section</strong></th>
</tr>
<tr>
<td>identical parallel machines</td>
<td><span class="arithmatex">\(P\,||\,C_{\max}\)</span></td>
<td>every job takes <span class="arithmatex">\(t_j\)</span> on every machine</td>
<td><a href="scheduling-on-identical-parallel-machines/#sez-sec-pm-PCmax">7.2</a></td>
</tr>
<tr>
<td>machines with different speeds</td>
<td><span class="arithmatex">\(Q\,||\,C_{\max}\)</span></td>
<td>machine <span class="arithmatex">\(h\)</span> has its own speed</td>
<td><a href="#sez-sec-threefield">7.1.1</a></td>
</tr>
<tr>
<td>unrelated parallel machines</td>
<td><span class="arithmatex">\(R\,||\,C_{\max}\)</span></td>
<td>job <span class="arithmatex">\(j\)</span> takes <span class="arithmatex">\(t_{jh}\)</span> on machine <span class="arithmatex">\(h\)</span></td>
<td><a href="#sez-sec-threefield">7.1.1</a></td>
</tr>
</table></div>

### 7.1.1 The three-field notation { #sez-sec-threefield }

- Scheduling problems are classified with the <strong>three-field notation</strong> $\alpha\,|\,\beta\,|\,\gamma$ of Graham, Lawler, Lenstra and Rinnooy Kan, where:

    1. $\alpha$ describes the <strong>machine environment</strong>: $1$ for a single machine, $P$ for identical parallel machines, $Q$ for parallel machines with different speeds, $R$ for unrelated parallel machines;

    2. $\beta$ describes the <strong>job characteristics</strong>, such as release dates $r_j$ or precedence constraints <em>prec</em>; an empty field means that there are none;

    3. $\gamma$ describes the <strong>objective function</strong>, such as the makespan $C_{\max}$ or the total completion time $\sum_j C_j$.

- In this notation, $P\,||\,C_{\max}$ is the problem of scheduling jobs without additional characteristics on identical parallel machines, minimizing the makespan.

<div class="grid cards sottopagine" markdown>

-   **Definition**

    Overview of the family · The three-field notation

    [:octicons-arrow-right-24: Open](#71-overview-of-the-family)

-   **7.2 Scheduling on identical parallel machines**

    Counting the solutions · A first schedule by hand · A combinatorial lower bound · Relation with the bin packing problem · Remarks

    [:octicons-arrow-right-24: Open](scheduling-on-identical-parallel-machines.md)

</div>

---

**Next:** [7.2 Scheduling on identical parallel machines](scheduling-on-identical-parallel-machines.md)

---

**Exercises on this chapter:** [:material-pencil: Scheduling problems](../../exercises/pcmax.md)

---

**In depth:** [:material-star-outline: the course on this problem](../../selected-problems/pcmax.md)
