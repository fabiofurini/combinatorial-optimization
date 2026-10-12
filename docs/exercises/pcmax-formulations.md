---
title: "Exercises · Formulations of parallel machine scheduling"
---

# Exercises · Formulations of parallel machine scheduling

<div class="info-capitolo" markdown>

**Exercises · Chapter 14** · each solution opens with a click · [:material-book-open-variant: Chapter 14: Machine scheduling](../formulations/pcmax-formulations.md) · [:material-file-pdf-box: Exercises, volume 2 (PDF)](../pdf/exercises-2-formulations.pdf)

</div>

!!! formula "Formulations used in these exercises"

    The model $\mathrm{ILP}_{P\|C_{\max}}$ of the chapter [Formulations of parallel machine scheduling](https://fabiofurini.github.io/combinatorial-optimization/formulations/pcmax-formulations/), with the set of machines $\mathscr{H}=\{1,\dots,m\}$:

    \begin{align*}
    \min~~ & C_{\max} \tag{P0}\\
    \text{subject to}~~ & \sum_{h\in\mathscr{H}} x_{jh}=1, && j\in\mathscr{J}, \tag{P1}\\
    & -\sum_{j\in\mathscr{J}} t_j\,x_{jh}+C_{\max}\ge 0, && h\in\mathscr{H}, \tag{P2}\\
    & x_{jh}\in\{0,1\},~~ C_{\max}\ge 0, && j\in\mathscr{J},~h\in\mathscr{H}. \tag{P3}
    \end{align*}

    The relaxation $\mathrm{LP}\text{-}0_{P\|C_{\max}}$ replaces $x_{jh}\in\{0,1\}$ with $x_{jh}\ge 0$; the relaxation $\mathrm{LP}_{P\|C_{\max}}$ also keeps $x_{jh}\le 1$. For every instance

    \begin{equation*}
    z(\mathrm{LP}\text{-}0_{P\|C_{\max}})=z(\mathrm{LP}_{P\|C_{\max}})=\frac{\sum_{j\in\mathscr{J}}t_j}{m}, \tag{P4}
    \end{equation*}

    attained by $\tilde x_{jh}=\frac{1}{m}$; an optimal dual solution is $\tilde\pi_h=\frac{1}{m}$ and $\tilde\mu_j=\frac{t_j}{m}$. The inequalities

    \begin{equation*}
    C_{\max}\ge t_j~~(j\in\mathscr{J}), \qquad C_{\max}\ge\left\lceil\frac{\sum_j t_j}{m}\right\rceil \tag{P5}
    \end{equation*}

    are valid for the model $\mathrm{ILP}_{P\|C_{\max}}$.

<a id="esercizio-14-1"></a>

!!! esercizio "Exercise 14.1: ILP model of $P\|C_{\max}$ (1)"

    We consider $m=2$ identical machines and a set $\mathscr{J}=\{1,\dots,5\}$ of $5$ jobs ($n=5$) with the following processing times:

    $$
    \begin{array}{l|ccccc}
    \hline  & {j=1} & {j=2} & {j=3} & {j=4} & {j=5} \\[1ex]
    \hline {t_j} & {7} & {5} & {4} & {3} & {3} \\
    \hline
    \end{array}
    $$

    **Questions**

    1. Count the variables and the constraints (besides the domains) of the $\mathrm{ILP}_{P\|C_{\max}}$ model for this instance.

    2. Write the $\mathrm{ILP}_{P\|C_{\max}}$ model for this instance.

    3. Compute the lower bound $\max\left\{\max_j t_j,\left\lceil\frac{\sum_j t_j}{m}\right\rceil\right\}$ on the makespan.

    4. Solve the model with Gurobi, give an optimal schedule, and say how many optimal solutions the model has.

??? soluzione "Solution"

    1. There are $n\,m=5\cdot2=10$ binary variables $x_{jh}$ and the continuous variable $C_{\max}$, so $11$ variables. There are $n=5$ assignment constraints and $m=2$ load constraints, so $7$ linear constraints.

    2. With $\mathscr{H}=\{1,2\}$ the model is:

        \begin{align*}
        \min~~ & C_{\max} \\[0.5ex]
        \text{subject to}~~ & x_{11} + x_{12} = 1 \\[0.5ex]
        & x_{21} + x_{22} = 1 \\[0.5ex]
        & x_{31} + x_{32} = 1 \\[0.5ex]
        & x_{41} + x_{42} = 1 \\[0.5ex]
        & x_{51} + x_{52} = 1 \\[0.5ex]
        & {-}7x_{11} - 5x_{21} - 4x_{31} - 3x_{41} - 3x_{51} + C_{\max} \ge 0 \\[0.5ex]
        & {-}7x_{12} - 5x_{22} - 4x_{32} - 3x_{42} - 3x_{52} + C_{\max} \ge 0 \\[0.5ex]
        & x_{jh} \in \{0,1\}, ~~ j \in \mathscr{J},~ h \in \mathscr{H} \\[0.5ex]
        & C_{\max} \ge 0
        \end{align*}

    3. The total processing time is $7+5+4+3+3=22$, so

        $$
        \max\left\{7,~\left\lceil22/2\right\rceil\right\}=\max\{7,11\}=11.
        $$

    4. Gurobi gives $z(\mathrm{ILP}_{P\|C_{\max}})=11$, equal to the lower bound. An optimal schedule is $J_1=\{1,3\}$ and $J_2=\{2,4,5\}$, with loads $11$ and $11$: $\tilde x_{11}=1$, $\tilde x_{31}=1$, $\tilde x_{22}=1$, $\tilde x_{42}=1$, $\tilde x_{52}=1$, $\tilde C_{\max}=11$.

        By enumeration of the $2^5=32$ assignments, the partition of the jobs is unique: job $1$ can share a machine only with job $3$. Exchanging the two machines gives the second optimal solution of the model, so there are $2$ optimal solutions.

<a id="esercizio-14-2"></a>

!!! esercizio "Exercise 14.2: LP relaxation of the $P\|C_{\max}$ model (1)"

    We consider $m=3$ identical machines and a set $\mathscr{J}=\{1,\dots,6\}$ of $6$ jobs ($n=6$) with the following processing times:

    $$
    \begin{array}{l|cccccc}
    \hline  & {j=1} & {j=2} & {j=3} & {j=4} & {j=5} & {j=6} \\[1ex]
    \hline {t_j} & {8} & {6} & {5} & {4} & {4} & {2} \\
    \hline
    \end{array}
    $$

    **Questions**

    1. Solve $\mathrm{LP}\text{-}0_{P\|C_{\max}}$ with Gurobi and compare its value with formula (P4).

    2. Write the primal and the dual solutions of the chapter for this instance, and verify feasibility and equal objective values.

    3. Solve the $\mathrm{ILP}_{P\|C_{\max}}$ model with Gurobi, and compute the ratio $\frac{z(\mathrm{LP}_{P\|C_{\max}})}{z(\mathrm{ILP}_{P\|C_{\max}})}$. Compare it with $\frac{1}{m}$.

??? soluzione "Solution"

    We use the value (P4) of the relaxations, the primal and dual solutions given with it and the valid inequalities (P5) of the box at the beginning of the chapter.

    1. Gurobi gives $z(\mathrm{LP}\text{-}0_{P\|C_{\max}})=\frac{29}{3}$, and the formula gives $\frac{\sum_j t_j}{m}=\frac{29}{3}$, the same value. Adding the bounds $x_{jh}\le 1$ does not change it.

    2. Primal: $\tilde x_{jh}=\frac{1}{3}$ for every job and machine, and $\tilde C_{\max}=\frac{29}{3}$. Each job has $3\cdot\frac{1}{3}=1$, and each machine has load $\frac{1}{3}\sum_j t_j=\frac{29}{3}=\tilde C_{\max}$: all the constraints hold with equality.

        Dual: $\tilde\pi_h=\frac{1}{3}$ for every machine and $\tilde\mu_j=\frac{t_j}{3}$, that is

        $$
        \tilde\mu_1=\frac{8}{3},~~\tilde\mu_2=2,~~\tilde\mu_3=\frac{5}{3},~~\tilde\mu_4=\frac{4}{3},~~\tilde\mu_5=\frac{4}{3},~~\tilde\mu_6=\frac{2}{3}.
        $$

        Every constraint $\mu_j-t_j\pi_h\le 0$ holds with equality, and $\sum_h\tilde\pi_h=3\cdot\frac{1}{3}=1$. The dual value is $\sum_j\tilde\mu_j=\frac{29}{3}$, equal to the primal value: both solutions are optimal.

    3. Gurobi gives $z(\mathrm{ILP}_{P\|C_{\max}})=10$ (for instance $J_1=\{1,6\}$, $J_2=\{2,4\}$, $J_3=\{3,5\}$, with loads $10$, $10$, $9$). The ratio is $\frac{\frac{29}{3}}{10}=\frac{29}{30}$, much larger than $\frac{1}{3}$: the worst case of the chapter needs one very long job.

<a id="esercizio-14-3"></a>

!!! esercizio "Exercise 14.3: Feasible solutions of the $P\|C_{\max}$ model (1)"

    We consider $m=2$ identical machines and a set $\mathscr{J}=\{1,\dots,5\}$ of $5$ jobs ($n=5$) with the following processing times:

    $$
    \begin{array}{l|ccccc}
    \hline  & {j=1} & {j=2} & {j=3} & {j=4} & {j=5} \\[1ex]
    \hline {t_j} & {6} & {5} & {4} & {3} & {2} \\
    \hline
    \end{array}
    $$

    Consider the following candidate solutions of the $\mathrm{ILP}_{P\|C_{\max}}$ model, given by the jobs on each machine:

    - **(a)** machine $1$: $\{1,3\}$, machine $2$: $\{2,4,5\}$, and $C_{\max}=10$;

    - **(b)** machine $1$: $\{1,2\}$, machine $2$: $\{3,4,5\}$, and $C_{\max}=10$;

    - **(c)** machine $1$: $\{1,2\}$, machine $2$: $\{3,4,5\}$, and $C_{\max}=12$;

    - **(d)** $x_{j1}=x_{j2}=\frac{1}{2}$ for every job $j$, and $C_{\max}=10$;

    - **(e)** machine $1$: $\{1,3,5\}$, machine $2$: $\{2,4,5\}$, and $C_{\max}=12$.

    **Questions**

    1. For each candidate, check the assignment constraints and the load constraints.

    2. Decide which candidates are feasible for $\mathrm{ILP}_{P\|C_{\max}}$ and which for $\mathrm{LP}_{P\|C_{\max}}$. For the feasible ones, give the value and the smallest value of $C_{\max}$ that keeps the same assignment feasible.

    3. Find the optimal value of the instance, and decide which candidates are optimal for $\mathrm{ILP}_{P\|C_{\max}}$ or for $\mathrm{LP}_{P\|C_{\max}}$ (use Gurobi).

??? soluzione "Solution"

    1. - **(a)** Every job is on one machine. The loads are $10$ and $10$, and $C_{\max}=10$: the load constraints hold.

        - **(b)** Every job is on one machine. The loads are $11$ and $9$, and $C_{\max}=10$: the load constraint of machine $1$ is violated, since $11>10$.

        - **(c)** Every job is on one machine. The loads are $11$ and $9$, and $C_{\max}=12$: the load constraints hold.

        - **(d)** Every job is on one machine. The loads are $10$ and $10$, and $C_{\max}=10$: the load constraints hold.

        - **(e)** Job $5$ is on both machines: its assignment constraint gives $2\neq 1$. The loads are $12$ and $10$, and $C_{\max}=12$: the load constraints hold.

    2. - **(a)** Feasible for both models, of value $10$, which is also the largest load.

        - **(b)** Infeasible for both models.

        - **(c)** Feasible for both models, of value $12$; the largest load is $11$, so $C_{\max}=11$ keeps the assignment feasible and is better.

        - **(d)** Feasible for $\mathrm{LP}_{P\|C_{\max}}$ only, of value $10$: the fractional assignment balances the loads exactly.

        - **(e)** Infeasible for both models.

    3. The lower bound is $\left\lceil20/2\right\rceil=10$ and candidate (a) attains it: $z(\mathrm{ILP}_{P\|C_{\max}})=10$, and (a) is optimal. Gurobi gives $z(\mathrm{LP}_{P\|C_{\max}})=10$, so (a) and (d) are both optimal for the relaxation: on this instance there is no integrality gap.

<a id="esercizio-14-4"></a>

!!! esercizio "Exercise 14.4: Valid inequalities and symmetry for $P\|C_{\max}$ (1)"

    We consider $m=3$ identical machines and a set $\mathscr{J}=\{1,\dots,6\}$ of $6$ jobs ($n=6$) with the following processing times:

    $$
    \begin{array}{l|cccccc}
    \hline  & {j=1} & {j=2} & {j=3} & {j=4} & {j=5} & {j=6} \\[1ex]
    \hline {t_j} & {12} & {3} & {3} & {2} & {2} & {2} \\
    \hline
    \end{array}
    $$

    **Questions**

    1. Compute $z(\mathrm{LP}_{P\|C_{\max}})$ with Gurobi.

    2. Add the valid inequality $C_{\max}\ge\left\lceil\frac{\sum_j t_j}{m}\right\rceil$ and solve the relaxation again. Then add the valid inequalities $C_{\max}\ge t_j$ instead, and solve again.

    3. Compute the optimal value with Gurobi, and compare it with the three bounds.

    4. Count, by enumeration, the optimal solutions of the model without and with the symmetry-breaking constraints $\sum_j t_jx_{jh}\ge\sum_j t_jx_{j,h+1}$ ($h=1,2$).

??? soluzione "Solution"

    We use the value (P4) of the relaxations, the primal and dual solutions given with it and the valid inequalities (P5) of the box at the beginning of the chapter.

    1. Gurobi gives $z(\mathrm{LP}_{P\|C_{\max}})=24/3=8$.

    2. The inequality $C_{\max}\ge\left\lceil24/3\right\rceil=8$ does not change the bound: Gurobi gives again $8$, since $24/3$ is already an integer. The inequalities $C_{\max}\ge t_j$ include $C_{\max}\ge 12$, and Gurobi gives $12$: the long job alone fixes the bound.

    3. Gurobi gives $z(\mathrm{ILP}_{P\|C_{\max}})=12$: job $1$ alone on one machine, the other jobs on the other two machines. The LP bound $8$ has gap $\frac{12-8}{8}=50.0\%$; with the inequalities $C_{\max}\ge t_j$ the bound is $12$, equal to the optimal value.

    4. Without the symmetry-breaking constraints: job $1$ must be alone (any other job would give a load larger than $12$), it can be on any of the $3$ machines, and the other $5$ jobs can be split in any way between the other two machines, whose loads stay at most $12$. This gives $3\cdot 2^5=96$ optimal solutions.

        With the constraints the loads must be non-increasing. The enumeration gives $18$ optimal solutions: job $1$ on machine $1$ with the other jobs split so that machine $2$ has load at least machine $3$, plus the solution with all the short jobs on machine $1$ and job $1$ on machine $2$ (loads $12$, $12$, $0$). The constraints remove most, but not all, of the equivalent solutions.

<a id="esercizio-14-5"></a>

!!! esercizio "Exercise 14.5: Integrality gap of the $P\|C_{\max}$ model (1)"

    We consider $m=2$ identical machines and a set $\mathscr{J}=\{1,\dots,3\}$ of $3$ jobs ($n=3$) with the following processing times:

    $$
    \begin{array}{l|ccc}
    \hline  & {j=1} & {j=2} & {j=3} \\[1ex]
    \hline {t_j} & {5} & {5} & {3} \\
    \hline
    \end{array}
    $$

    **Questions**

    1. Compute $z(\mathrm{LP}_{P\|C_{\max}})$ and $z(\mathrm{ILP}_{P\|C_{\max}})$ with Gurobi, and explain the optimal value.

    2. Compute the absolute gap and the ratio $\frac{z(\mathrm{LP}_{P\|C_{\max}})}{z(\mathrm{ILP}_{P\|C_{\max}})}$.

    3. Add both valid inequalities (P5) and solve the relaxation again. How much of the gap is closed?

    4. Consider the family of the chapter with $m=3$ machines, one job of time $M=10$ and $3$ jobs of time $1$. Compute the ratio with Gurobi, and its limit for $M\to+\infty$.

??? soluzione "Solution"

    We use the value (P4) of the relaxations, the primal and dual solutions given with it and the valid inequalities (P5) of the box at the beginning of the chapter.

    1. Gurobi gives $z(\mathrm{LP}_{P\|C_{\max}})=\frac{13}{2}=\frac{13}{2}$ and $z(\mathrm{ILP}_{P\|C_{\max}})=8$. The two jobs of time $5$ on the same machine give load $10$; otherwise the job of time $3$ shares a machine with a job of time $5$, with load $8$.

    2. The absolute gap is $8-\frac{13}{2}=\frac{3}{2}$, and the ratio is $\frac{\frac{13}{2}}{8}=\frac{13}{16}$, which is larger than $\frac{1}{m}=\frac{1}{2}$.

    3. The inequalities give $C_{\max}\ge\max\{5,\lceil \frac{13}{2}\rceil\}=7$, and Gurobi gives $7$. The gap goes from $\frac{3}{2}$ to $1$: the rounding closes one third of it, and the remaining unit comes from the integer assignment.

    4. Gurobi gives $z(\mathrm{LP}_{P\|C_{\max}})=\frac{10+3}{3}=\frac{13}{3}$ and $z(\mathrm{ILP}_{P\|C_{\max}})=10$, the long job. The ratio is $\frac{\frac{13}{3}}{10}=\frac{13}{30}$. In general it is $\frac{M+m}{m\,M}=\frac{1}{m}+\frac{1}{M}$, which tends to $\frac{1}{3}$ as $M\to+\infty$.
