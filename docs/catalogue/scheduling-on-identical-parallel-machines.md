---
title: "Scheduling on identical parallel machines (P|Cmax)"
---

# Scheduling on identical parallel machines ($P\|C_{\max}$)

<div class="info-capitolo" markdown>

[:material-view-list: **Catalogue of combinatorial problems**](index.md) · [:material-file-pdf-box: Catalogue (PDF)](../pdf/combinatorial-problem-catalogue.pdf)

</div>

<a id="sec:cat-pagina-scheduling-on-identical-parallel-machines"></a>

<a id="box-1-def-catdef-pcmax"></a>

!!! definizione "Definition 1: Scheduling on identical parallel machines"

    Given:

    1. a set of $m$ identical <em>machines</em>,

    2. a set $\mathscr{J} = \{1,2,\dots,n\}$ of $n$ <em>jobs</em>,

    3. for each job $j \in \mathscr{J}$, a <em>processing time</em> $t_j \in \Z_{\ge 1}$,

    the problem $P\,||\,C_{\max}$ asks to assign each job to a machine, so that the time needed to complete all the jobs, i.e., the largest total processing time assigned to a machine, is minimized.

<strong>Assumptions</strong>

- We make the following assumption:

    1. There are more jobs than machines (otherwise each job gets a machine of its own, and the optimal makespan is $\max_j t_j$). Formally:

        $$
        n > m
        $$

- Defined in [Chapter 7 «Parallel machine scheduling»](../combinatorial-optimization-problems/pcmax/index.md#box-1-defPCmax).

- [The course on this problem $\rightarrow$](../selected-problems/pcmax.md).
