---
title: "Formulations of parallel machine scheduling"
---

# Formulations of parallel machine scheduling

<div class="info-capitolo" markdown>

**Part 2 · Formulations and their properties · Chapter 12** · [:material-file-pdf-box: Lecture notes, volume 2 (PDF)](../pdf/lecture-notes-2-formulations.pdf) · [:material-pencil: Exercises](../exercises/pcmax-formulations.md)

</div>

!!! nota "Prerequisites"

    - From the module <em>Linear Programming</em>, [[Chapter 9 «Duality theory»](https://fabiofurini.github.io/linear-programming/duality/09-duality/)](https://fabiofurini.github.io/linear-programming/duality/09-duality/): the dual of an LP problem, weak and strong duality.

    - From the module <em>Integer linear programming</em>, [Chapter 1 «Integer linear programming»](https://fabiofurini.github.io/integer-linear-programming/models-and-bounds/ilp/) and [Chapter 2 «LP relaxation»](https://fabiofurini.github.io/integer-linear-programming/models-and-bounds/lp-relaxation/): ILP problems, LP relaxations and bounds.

    - From this module, the chapter «Parallel machine scheduling»: the problem, the makespan and the instance of Example 1.

!!! chiave "Objectives"

    At the end of this chapter you will be able to:

    - write the ILP model of $\PCmax$ and explain how the makespan variable is linked to the machine loads;

    - write the LP relaxation and its dual, and prove that its optimal value is $\sum_j t_j / m$;

    - prove that the LP bound is at least $1/m$ of the optimal value, and that the factor is tight;

    - use the valid inequalities and the symmetry-breaking constraints of the model.

## 12.1 The problem in brief

!!! nota "Where we were"

    In the chapter «Parallel machine scheduling» we met the problem $\PCmax$ as a <em>problem</em>: definition, Gantt charts and the lower bound on the makespan. Here we look at it as a <em>model</em> and we study its LP relaxations. The problem returns with heuristic algorithms and approximation algorithms.

<a id="box-1-def-PCMAX"></a>

!!! definizione "Definition 12.1: Scheduling on identical parallel machines"

    Given:

    1. a set of $m$ identical <em>machines</em>,

    2. a set $\mathscr{J}=\{1,2,\ldots,n\}$ of $n$ <em>jobs</em>,

    3. for each job $j\in\mathscr{J}$, a <em>processing time</em> $t_j\in\Z_{\ge1}$,

    the problem $\PCmax$ asks to assign each job to a machine, so that the largest total processing time assigned to a machine is minimized.

- We assume that an instance has more jobs than machines, i.e., $n>m$. Otherwise each job can be assigned to a different machine and the optimal makespan is simply $\max_{j\in\mathscr{J}}t_j$.

## 12.2 An ILP model for $\PCmax$

- Let $\mathscr{H}=\{1,2,\ldots,m\}$ be the set of machines. We introduce the following $nm$ <strong>binary variables</strong>:

    $$
    x_{jh}=
    \begin{cases}
    1 & \text{if job $j$ is assigned to machine $h$},\\
    0 & \text{otherwise},
    \end{cases}
    \qquad \forall j\in\mathscr{J},~\forall h\in\mathscr{H},
    $$

    and one <strong>non-negative continuous variable</strong>:

    $$
    C_{\max}=\text{makespan of the schedule}.
    $$

!!! chiave ""

    Using these variables, an Integer Linear Programming (ILP) model for $\PCmax$ reads as follows:

    <a id="eq-ILP-PCMAX"></a>

    \begin{align*}
    && \min \quad C_{\max} && \label{obj:PCMAX} \tag{12.1a}\\[1ex]
    && \text{subject to}\quad \sum_{h\in\mathscr{H}}x_{jh}&=1,
    && \forall j\in\mathscr{J}, \label{assign:PCMAX} \tag{12.1b}\\[1ex]
    && -\sum_{j\in\mathscr{J}}t_jx_{jh}+C_{\max}&\ge0,
    && \forall h\in\mathscr{H}, \label{load:PCMAX} \tag{12.1c}\\[1ex]
    && x_{jh}&\in\{0,1\},
    && \forall j\in\mathscr{J},~\forall h\in\mathscr{H}, \label{bin:PCMAX} \tag{12.1d}\\[1ex]
    && C_{\max}&\ge0. && \label{nonneg:PCMAX} \tag{12.1e}
    \end{align*}

    This ILP model is referred to as the $\ILP_{\PCmax}$ model.

- Description of the objective function and constraints of the $\ILP_{\PCmax}$ model:

    - the linear objective function $\eqref{obj:PCMAX}$ minimizes the makespan;

    - constraints $\eqref{assign:PCMAX}$ ensure that each job is assigned to exactly one machine ($n$ linear constraints);

    - constraints $\eqref{load:PCMAX}$ link the assignment variables with the makespan variable. In particular, they ensure that the makespan is greater than or equal to the load of every machine ($m$ linear constraints);

    - constraints $\eqref{bin:PCMAX}$ and $\eqref{nonneg:PCMAX}$ define the domains of the variables of the ILP model.

<strong>Explanation of the link between the variables</strong>

- For every machine $h$, the makespan and its load must satisfy the direct relation

    $$
    C_{\max}\ge \sum_{j\in\mathscr{J}}t_jx_{jh},
    $$

    which is imposed by constraint $\eqref{load:PCMAX}$.

- Since the constraint holds for every machine, it imposes

    $$
    C_{\max}\ge \max_{h\in\mathscr{H}}\left\{\sum_{j\in\mathscr{J}}t_jx_{jh}\right\}.
    $$

- In every optimal solution equality holds. Indeed, if $C_{\max}$ were larger than the maximum load, replacing $C_{\max}$ with the maximum load would keep all the constraints $\eqref{load:PCMAX}$ satisfied and would decrease the objective value by a positive amount, which contradicts optimality.

- When no job is assigned to a machine, its load is zero.

<a id="box-2-ex-PCMAX-ILP"></a>

!!! esempio "Example 12.1: $\ILP_{\PCmax}$ model"

    Consider $m=3$ machines and the seven jobs with processing times

    $$
    (t_1,t_2,t_3,t_4,t_5,t_6,t_7)=(5,5,4,4,3,3,3).
    $$

    The assignment

    $$
    \{1,3\}\text{ to machine }1,\qquad
    \{2,4\}\text{ to machine }2,\qquad
    \{5,6,7\}\text{ to machine }3
    $$

    has loads $9$, $9$, and $9$. Hence its binary variables have value one precisely for

    $$
    x_{11}=x_{31}=x_{22}=x_{42}=x_{53}=x_{63}=x_{73}=1,
    $$

    and the makespan is $C_{\max}=9$. Since the lower bound

    $$
    \max\left\{\max_{j\in\mathscr{J}}t_j,~\left\lceil\frac{\sum_{j\in\mathscr{J}}t_j}{m}\right\rceil\right\}
    =\max\{5,\lceil27/3\rceil\}=9
    $$

    is attained, $z(\ILP_{\PCmax})=9$.

## 12.3 A first Linear Programming relaxation

- We obtain $\LP\text{-}0_{\PCmax}$ by replacing the binary requirements $\eqref{bin:PCMAX}$ with non-negativity constraints:

!!! chiave ""

    <a id="eq-LP0-PCMAX"></a>

    \begin{align*}
    && \min \quad C_{\max} && \label{obj:LP0-PCMAX} \tag{12.2a}\\[1ex]
    && \text{subject to}\quad \sum_{h\in\mathscr{H}}x_{jh}&=1,
    && \forall j\in\mathscr{J}, \label{assign:LP0-PCMAX} \tag{12.2b}\\[1ex]
    && -\sum_{j\in\mathscr{J}}t_jx_{jh}+C_{\max}&\ge0,
    && \forall h\in\mathscr{H}, \label{load:LP0-PCMAX} \tag{12.2c}\\[1ex]
    && x_{jh}&\ge0,
    && \forall j\in\mathscr{J},~\forall h\in\mathscr{H}, \label{nonnegx:LP0-PCMAX} \tag{12.2d}\\[1ex]
    && C_{\max}&\ge0. && \label{nonnegC:LP0-PCMAX} \tag{12.2e}
    \end{align*}

    This LP relaxation is referred to as the $\LP\text{-}0_{\PCmax}$ model.

- The dual variables associated with constraints $\eqref{assign:LP0-PCMAX}$ are free variables $\mu_j$, and the dual variables associated with constraints $\eqref{load:LP0-PCMAX}$ are non-negative variables $\pi_h$. The dual model is:

!!! chiave ""

    <a id="eq-DLP0-PCMAX"></a>

    \begin{align*}
    && \max \quad \sum_{j\in\mathscr{J}}\mu_j && \label{obj:DLP0-PCMAX} \tag{12.3a}\\[1ex]
    && \text{subject to}\quad \mu_j-t_j\pi_h&\le0,
    && \forall j\in\mathscr{J},~\forall h\in\mathscr{H}, \label{x:DLP0-PCMAX} \tag{12.3b}\\[1ex]
    && \sum_{h\in\mathscr{H}}\pi_h&\le1, && \label{C:DLP0-PCMAX} \tag{12.3c}\\[1ex]
    && \mu_j&\gtreqless0, && \forall j\in\mathscr{J}, \label{free:DLP0-PCMAX} \tag{12.3d}\\[1ex]
    && \pi_h&\ge0, && \forall h\in\mathscr{H}. \label{nonneg:DLP0-PCMAX} \tag{12.3e}
    \end{align*}

    This dual LP model is referred to as $D(\LP\text{-}0_{\PCmax})$.

<a id="box-3-prop-LP0-PCMAX"></a>

!!! teorema "Proposition 12.2: Optimal value of $\LP\text{-}0_{\PCmax}$"

    For every $\PCmax$ instance,

    $$
    z(\LP\text{-}0_{\PCmax})=\frac{\sum_{j\in\mathscr{J}}t_j}{m}.
    $$

??? dimostrazione "Proof"

    Set $x_{jh}=1/m$ for every job and every machine, and set

    $$
    C_{\max}=\frac{\sum_{j\in\mathscr{J}}t_j}{m}.
    $$

    Each job-assignment equation is satisfied and every machine has the displayed load, hence this is a feasible primal solution. In the dual, set

    $$
    \pi_h=\frac1m\quad\forall h\in\mathscr{H},
    \qquad
    \mu_j=\frac{t_j}{m}\quad\forall j\in\mathscr{J}.
    $$

    The dual inequalities hold at equality, $\sum_h\pi_h=1$, and the dual objective value is

    $$
    \sum_{j\in\mathscr{J}}\mu_j=\frac{\sum_{j\in\mathscr{J}}t_j}{m}.
    $$

    By LP Weak Duality, the two solutions are optimal, and the optimal value is the common value of the objective functions. <span class="qed">□</span>

### 12.3.1 A second Linear Programming relaxation

- Adding the upper bounds $x_{jh}\le1$ gives $\LP_{\PCmax}$. They do not change the relaxation: by $\eqref{assign:LP0-PCMAX}$ and non-negativity, each $x_{jh}$ is at most one. Thus

    $$
    z(\LP_{\PCmax})=z(\LP\text{-}0_{\PCmax})=\frac{\sum_{j\in\mathscr{J}}t_j}{m}.
    $$

    The dual is consequently the same as $D(\LP\text{-}0_{\PCmax})$, with zero dual multipliers for the redundant upper bounds.

### 12.3.2 Some important theoretical properties

<a id="box-4-prop-PCMAX-ratio"></a>

!!! teorema "Proposition 12.3: Worst-case ratio of the LP bound"

    For every $\PCmax$ instance,

    $$
    \frac{z(\LP_{\PCmax})}{z(\ILP_{\PCmax})}\ge\frac1m.
    $$

??? dimostrazione "Proof"

    Assigning every job to one machine gives a feasible schedule of makespan $\sum_jt_j$. Hence $z(\ILP_{\PCmax})\le\sum_jt_j$. By [Proposition 12.2](#box-3-prop-LP0-PCMAX),

    $$
    \frac{z(\LP_{\PCmax})}{z(\ILP_{\PCmax})}
    \ge
    \frac{\frac{\sum_jt_j}{m}}{\sum_jt_j}
    =\frac1m.
    $$

    <p class="qed-riga"><span class="qed">□</span></p>

<a id="box-5-prop-PCMAX-tight"></a>

!!! teorema "Proposition 12.4: The ratio $1/m$ is asymptotically attained"

    For a fixed number $m \ge 2$ of machines, there are instances for which

    $$
    \frac{z(\LP_{\PCmax})}{z(\ILP_{\PCmax})}\longrightarrow\frac1m.
    $$

??? dimostrazione "Proof"

    For $M\in\Z_{\ge2}$, consider one job of processing time $M$ and $m$ jobs of processing time one. The long job alone forces $z(\ILP_{\PCmax})\ge M$. The schedule that assigns the long job alone to machine $1$ and the $m$ unit jobs to the other $m-1$ machines has loads at most $2 \le M$, hence the makespan $M$ is feasible. Thus $z(\ILP_{\PCmax})=M$. [Proposition 12.2](#box-3-prop-LP0-PCMAX) gives

    $$
    z(\LP_{\PCmax})=\frac{M+m}{m}.
    $$

    Therefore,

    $$
    \lim_{M\to+\infty}\frac{z(\LP_{\PCmax})}{z(\ILP_{\PCmax})}
    =\lim_{M\to+\infty}\left(\frac1m+\frac1M\right)=\frac1m.
    $$

    <p class="qed-riga"><span class="qed">□</span></p>

<a id="box-6-ex-PCMAX-gap"></a>

!!! esempio "Example 12.2: an integrality gap"

    Consider two machines and three jobs with processing times $(3,3,2)$. [Proposition 12.2](#box-3-prop-LP0-PCMAX) gives $z(\LP_{\PCmax})=8/2=4$. In every integer schedule, the job of length two must share a machine with one job of length three, so $z(\ILP_{\PCmax})=5$. The fractional assignment

    $$
    x_{j1}=x_{j2}=\frac12\qquad\forall j\in\{1,2,3\}
    $$

    has load four on both machines, whereas the integer optimum has loads five and three.

## 12.4 Additional considerations

- For every job $j$, the inequality

    \begin{equation*}
    C_{\max}\ge t_j
    \label{valid:job-PCMAX} \tag{12.4}
    \end{equation*}

    is a <strong>valid inequality</strong> for model [(12.1)](#eq-ILP-PCMAX). In every integer schedule, job $j$ is assigned to one machine, whose load and therefore makespan are at least $t_j$ ($n$ linear constraints);

- The inequality

    \begin{equation*}
    C_{\max}\ge\left\lceil\frac{\sum_{j\in\mathscr{J}}t_j}{m}\right\rceil
    \label{valid:average-PCMAX} \tag{12.5}
    \end{equation*}

    is also a <strong>valid inequality</strong> for model [(12.1)](#eq-ILP-PCMAX): the $m$ machine loads sum to $\sum_jt_j$, so their maximum is at least their average and is an integer in every integer schedule (one linear constraint);

- The machines are identical. The constraints

    \begin{equation*}
    \sum_{j\in\mathscr{J}}t_jx_{jh}\ge
    \sum_{j\in\mathscr{J}}t_jx_{j,h+1}
    \qquad \forall h\in\{1,\ldots,m-1\}
    \label{symmetry:PCMAX} \tag{12.6}
    \end{equation*}

    are <strong>optimality-preserving constraints</strong>: they are not valid for every feasible assignment, but every schedule can be relabelled so that its machine loads are non-increasing, without changing the makespan.

- The constraints $\eqref{symmetry:PCMAX}$ remove the equivalent relabellings of the machines only when the loads are distinct. With equal loads they remove none: in the instance of the chapter all the optimal schedules have loads $9$, $9$, $9$, and all the $12$ optimal solutions of the model satisfy them.

## 12.5 Typical mistakes

!!! attenzione "Warning"

    - <strong>Using the LP bound alone.</strong> The value $\sum_j t_j/m$ ignores the longest job: with one very long job it is much smaller than the optimal value. The valid inequality $C_{\max}\ge t_j$ must be added.

    - <strong>Forgetting to round up.</strong> All the processing times are integer, so $C_{\max}$ is an integer in every integer schedule: the lower bound is $\lceil \sum_j t_j/m \rceil$.

    - <strong>Believing that the symmetry constraints remove all the equivalent solutions.</strong> They remove the relabellings of the machines only when the loads are distinct; with equal loads they remove none.

    - <strong>Forgetting the direction of the load constraints.</strong> The constraints $\eqref{load:PCMAX}$ bound $C_{\max}$ from below: it is the minimization that makes $C_{\max}$ equal to the largest load.

    - <strong>Mixing the indices.</strong> The variable $x_{jh}$ has the job $j$ first and the machine $h$ second.

## 12.6 In summary

!!! chiave "In summary"

    - The $\ILP_{\PCmax}$ model has $n \cdot m$ assignment variables $x_{jh}$ and the makespan variable $C_{\max}$, linked by one load constraint for each machine.

    - The LP relaxation has optimal value $z(\LP_{\PCmax}) = \sum_j t_j / m$, attained by assigning every job with value $1/m$ to every machine; the dual solution is $\tilde{\pi}_h = 1/m$ and $\tilde{\mu}_j = t_j/m$.

    - The ratio between $z(\LP_{\PCmax})$ and $z(\ILP_{\PCmax})$ is at least $1/m$, and $1/m$ is asymptotically attained.

    - The valid inequalities $C_{\max} \ge t_j$ and $C_{\max} \ge \lceil \sum_j t_j/m \rceil$ strengthen the model.

    <strong>Dashboard of the instance of the chapter</strong> ($m=3$, $t=(5,5,4,4,3,3,3)$). Lower bounds on the optimal value $9$:

    <div class="tabella" markdown="0"><table>
    <tr>
    <th>Bound</th>
    <th>Value</th>
    <th>From</th>
    </tr>
    <tr>
    <td>LP relaxation</td>
    <td><span class="arithmatex">\(9\)</span></td>
    <td><span class="arithmatex">\(\sum_j t_j / m = 27/3\)</span></td>
    </tr>
    <tr>
    <td>Valid inequalities</td>
    <td><span class="arithmatex">\(9\)</span></td>
    <td><span class="arithmatex">\(\max\{5, \lceil 27/3 \rceil\}\)</span></td>
    </tr>
    <tr>
    <td>Optimal value</td>
    <td><span class="arithmatex">\(9\)</span></td>
    <td>loads <span class="arithmatex">\(9\)</span>, <span class="arithmatex">\(9\)</span>, <span class="arithmatex">\(9\)</span></td>
    </tr>
    </table></div>

    On the instance of the integrality gap ($m=2$, $t=(3,3,2)$) the LP bound is $4$ and the optimal value is $5$.
