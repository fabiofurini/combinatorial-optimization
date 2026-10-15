---
title: "Scheduling on identical parallel machines"
---

# 14.2 An ILP model for the Scheduling on Identical Parallel Machines Problem { #sez-sec-pmf-PCmax }

<div class="info-capitolo" markdown>

**Part 2 · Formulations and their properties · Chapter 14** · [:material-book-open-variant: Chapter 14: Scheduling problems](index.md) · [:material-file-pdf-box: Lecture notes, volume 2 (PDF)](../../pdf/lecture-notes-2-formulations.pdf) · [:material-presentation: Slides](../../pdf/slides-pcmax-formulations.pdf) · [:material-pencil: Exercises: Scheduling problems](../../exercises/pcmax-formulations.md)

</div>

The problem of this section is the scheduling on identical parallel machines ($P\|C_{\max}$), defined in [Chapter 7 «Scheduling problems»](https://fabiofurini.github.io/combinatorial-optimization/combinatorial-optimization-problems/pcmax/scheduling-on-identical-parallel-machines/).

- Given $m$ identical machines and a set $\mathscr{J}=\{1,2,\ldots,n\}$ of $n$ jobs, with processing times $t_j$, we denote by $\mathscr{H}=\{1,2,\ldots,m\}$ the set of machines.

- We introduce the following $nm$ <strong>binary variables</strong>:

    $$
    x_{jh}=
    \begin{cases}
    1 & \text{if job $j$ is assigned to machine $h$}\\[1.5ex]
    0 & \text{otherwise}
    \end{cases}
    \qquad \forall j\in\mathscr{J},~\forall h\in\mathscr{H},
    $$

    and one <strong>non-negative continuous variable</strong>:

    $$
    C_{\max}=\text{makespan of the schedule}.
    $$

!!! chiave ""

    Using these variables, an Integer Linear Programming (ILP) model for the Scheduling on Identical Parallel Machines Problem ($P\|C_{\max}$) reads as follows:

    <a id="eq-ILP-PCMAX"></a>

    \begin{align*}
    && \min \quad C_{\max} \label{obj:PCMAX} \tag{14.1a}\\[1ex]
    && \text{subject to}\quad \sum_{h\in\mathscr{H}}x_{jh}&=1,
    & \forall j\in\mathscr{J}, \label{assign:PCMAX} \tag{14.1b}\\[1ex]
    && -\sum_{j\in\mathscr{J}}t_jx_{jh}+C_{\max}&\ge0,
    & \forall h\in\mathscr{H}, \label{load:PCMAX} \tag{14.1c}\\[1ex]
    && x_{jh}&\in\{0,1\},
    & \forall j\in\mathscr{J},~\forall h\in\mathscr{H}, \label{bin:PCMAX} \tag{14.1d}\\[1ex]
    && C_{\max}&\ge0. \label{nonneg:PCMAX} \tag{14.1e}
    \end{align*}

    This ILP model is referred to as the $\mathrm{ILP}_{P\|C_{\max}}$ model.

- Description of the objective function and constraints of the $\mathrm{ILP}_{P\|C_{\max}}$ model:

    - the linear objective function $\eqref{obj:PCMAX}$ minimizes the makespan;

    - constraints $\eqref{assign:PCMAX}$ ensure that each job is assigned to exactly one machine ($n$ linear constraints);

    - constraints $\eqref{load:PCMAX}$ link the assignment variables with the makespan variable. In particular, they ensure that the makespan is greater than or equal to the load of every machine ($m$ linear constraints);

    - finally, constraints $\eqref{bin:PCMAX}$ and $\eqref{nonneg:PCMAX}$ define the variables of the ILP model.

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

<a id="box-1-ex-PCMAX-ILP"></a>

!!! esempio "Example 14.1: $\mathrm{ILP}_{P\|C_{\max}}$ model"

    We consider $m=3$ machines ($\mathscr{H}=\{1,2,3\}$) and a set $\mathscr{J}=\{1,2,\dots,7\}$ of $7$ jobs ($n=7$), with the following processing times:

    $$
    \begin{array}{l|ccccccc}
    \hline  & {j=1} & {j=2} & {j=3} & {j=4} & {j=5} & {j=6} & {j=7} \\[1ex]
    \hline {t_j} & {5} & {5} & {4} & {4} & {3} & {3} & {3} \\
    \hline
    \end{array}
    $$

    This is the instance of Example 7.1 of [Chapter 7 «Scheduling problems»](https://fabiofurini.github.io/combinatorial-optimization/combinatorial-optimization-problems/pcmax/scheduling-on-identical-parallel-machines/); we refer to it as <span style="color:#1971c2">[Example 14.1](#box-1-ex-PCMAX-ILP)</span>. The $\mathrm{ILP}_{P\|C_{\max}}$ model for this instance is:

    $$
    \begin{array}{rlcl}
    {\min} & {C_{\max}} &  &  \\[1ex]
    \text{subject to} & {x_{11}+x_{12}+x_{13}} & {=} & {1} \\
    & {x_{21}+x_{22}+x_{23}} & {=} & {1} \\
    & {x_{31}+x_{32}+x_{33}} & {=} & {1} \\
    & {x_{41}+x_{42}+x_{43}} & {=} & {1} \\
    & {x_{51}+x_{52}+x_{53}} & {=} & {1} \\
    & {x_{61}+x_{62}+x_{63}} & {=} & {1} \\
    & {x_{71}+x_{72}+x_{73}} & {=} & {1} \\
    & {-5\,x_{11}-5\,x_{21}-4\,x_{31}-4\,x_{41}-3\,x_{51}-3\,x_{61}-3\,x_{71}+C_{\max}} & {\ge} & {0} \\
    & {-5\,x_{12}-5\,x_{22}-4\,x_{32}-4\,x_{42}-3\,x_{52}-3\,x_{62}-3\,x_{72}+C_{\max}} & {\ge} & {0} \\
    & {-5\,x_{13}-5\,x_{23}-4\,x_{33}-4\,x_{43}-3\,x_{53}-3\,x_{63}-3\,x_{73}+C_{\max}} & {\ge} & {0} \\[1ex]
    & {x_{11},~x_{12},~x_{13},~\dots,~x_{73}} & {\in} & {\{0,1\}} \\
    & {C_{\max}} & {\ge} & {0}
    \end{array}
    $$

    An optimal solution $(\tilde{\vet x},\tilde C_{\max})(\mathrm{ILP}_{P\|C_{\max}})$ is:

    $$
    \tilde x_{11}=\tilde x_{31}=\tilde x_{22}=\tilde x_{42}=\tilde x_{53}=\tilde x_{63}=\tilde x_{73}=1,~~
    \text{all the other } \tilde x_{jh}=0,
    \qquad \tilde C_{\max}=9
    $$

    It assigns the jobs $\{1,3\}$ to machine $1$, $\{2,4\}$ to machine $2$ and $\{5,6,7\}$ to machine $3$, with loads $9$, $9$ and $9$. The optimal value $z(\mathrm{ILP}_{P\|C_{\max}})$ is $9$, since it attains the lower bound

    $$
    \max\left\{\max_{j\in\mathscr{J}}t_j,~\left\lceil\frac{\sum_{j\in\mathscr{J}}t_j}{m}\right\rceil\right\}
    =\max\{5,\lceil27/3\rceil\}=9.
    $$

## 14.3 A first Linear Programming relaxation

!!! chiave ""

    To obtain a Linear Programming (LP) relaxation of the $\mathrm{ILP}_{P\|C_{\max}}$ model, we relax constraints $\eqref{bin:PCMAX}$ into non-negativity constraints. The obtained LP model reads as follows:

    <a id="eq-LP0-PCMAX"></a>

    \begin{align*}
    && \min \quad C_{\max} \label{obj:LP0-PCMAX} \tag{14.2a}\\[1ex]
    && \text{subject to}\quad \sum_{h\in\mathscr{H}}x_{jh}&=1,
    & \forall j\in\mathscr{J}, \label{assign:LP0-PCMAX} \tag{14.2b}\\[1ex]
    && -\sum_{j\in\mathscr{J}}t_jx_{jh}+C_{\max}&\ge0,
    & \forall h\in\mathscr{H}, \label{load:LP0-PCMAX} \tag{14.2c}\\[1ex]
    && x_{jh}&\ge0,
    & \forall j\in\mathscr{J},~\forall h\in\mathscr{H}, \label{nonnegx:LP0-PCMAX} \tag{14.2d}\\[1ex]
    && C_{\max}&\ge0. \label{nonnegC:LP0-PCMAX} \tag{14.2e}
    \end{align*}

    This LP model is referred to as the $\mathrm{LP}\text{-}0_{P\|C_{\max}}$ model.

<a id="box-2-ex-PCMAX-LP0"></a>

!!! esempio "Example 14.2: $\mathrm{LP}\text{-}0_{P\|C_{\max}}$ model"

    The $\mathrm{LP}\text{-}0_{P\|C_{\max}}$ model for the instance of <span style="color:#1971c2">[Example 14.1](#box-1-ex-PCMAX-ILP)</span> is:

    $$
    \begin{array}{rlcl}
    {\min} & {C_{\max}} &  &  \\[1ex]
    \text{subject to} & {x_{11}+x_{12}+x_{13}} & {=} & {1} \\
    & {x_{21}+x_{22}+x_{23}} & {=} & {1} \\
    & {x_{31}+x_{32}+x_{33}} & {=} & {1} \\
    & {x_{41}+x_{42}+x_{43}} & {=} & {1} \\
    & {x_{51}+x_{52}+x_{53}} & {=} & {1} \\
    & {x_{61}+x_{62}+x_{63}} & {=} & {1} \\
    & {x_{71}+x_{72}+x_{73}} & {=} & {1} \\
    & {-5\,x_{11}-5\,x_{21}-4\,x_{31}-4\,x_{41}-3\,x_{51}-3\,x_{61}-3\,x_{71}+C_{\max}} & {\ge} & {0} \\
    & {-5\,x_{12}-5\,x_{22}-4\,x_{32}-4\,x_{42}-3\,x_{52}-3\,x_{62}-3\,x_{72}+C_{\max}} & {\ge} & {0} \\
    & {-5\,x_{13}-5\,x_{23}-4\,x_{33}-4\,x_{43}-3\,x_{53}-3\,x_{63}-3\,x_{73}+C_{\max}} & {\ge} & {0} \\[1ex]
    & {x_{11},~x_{12},~x_{13},~\dots,~x_{73}} & {\ge} & {0} \\
    & {C_{\max}} & {\ge} & {0}
    \end{array}
    $$

    An optimal solution $(\tilde{\vet x},\tilde C_{\max})(\mathrm{LP}\text{-}0_{P\|C_{\max}})$ is:

    $$
    \tilde x_{jh}=\frac{1}{3},~~\forall j\in\mathscr{J},~\forall h\in\mathscr{H},\qquad \tilde C_{\max}=9
    $$

    The optimal value $z(\mathrm{LP}\text{-}0_{P\|C_{\max}})$ is $9$. Accordingly we have the lower bound:

    $$
    9 \le z(\mathrm{ILP}_{P\|C_{\max}})
    $$

!!! chiave ""

    Using a free dual variable $\mu_j$ for each constraint $\eqref{assign:LP0-PCMAX}$ and a non-negative dual variable $\pi_h$ for each constraint $\eqref{load:LP0-PCMAX}$, the dual model of the $\mathrm{LP}\text{-}0_{P\|C_{\max}}$ model is:

    <a id="eq-DLP0-PCMAX"></a>

    \begin{align*}
    && \max \quad \sum_{j\in\mathscr{J}}\mu_j \label{obj:DLP0-PCMAX} \tag{14.3a}\\[1ex]
    && \text{subject to}\quad \mu_j-t_j\pi_h&\le0,
    & \forall j\in\mathscr{J},~\forall h\in\mathscr{H}, \label{x:DLP0-PCMAX} \tag{14.3b}\\[1ex]
    && \sum_{h\in\mathscr{H}}\pi_h&\le1, \label{C:DLP0-PCMAX} \tag{14.3c}\\[1ex]
    && \mu_j&\gtreqless0, & \forall j\in\mathscr{J}, \label{free:DLP0-PCMAX} \tag{14.3d}\\[1ex]
    && \pi_h&\ge0, & \forall h\in\mathscr{H}. \label{nonneg:DLP0-PCMAX} \tag{14.3e}
    \end{align*}

    This LP model is referred to as the $D(\mathrm{LP}\text{-}0_{P\|C_{\max}})$ model.

<a id="box-3-ex-PCMAX-DLP0"></a>

!!! esempio "Example 14.3: $D(\mathrm{LP}\text{-}0_{P\|C_{\max}})$ model"

    The dual $D(\mathrm{LP}\text{-}0_{P\|C_{\max}})$ model for the instance of <span style="color:#1971c2">[Example 14.1](#box-1-ex-PCMAX-ILP)</span> is:

    $$
    \begin{array}{rlcl}
    {\max} & {\mu_1+\mu_2+\mu_3+\mu_4+\mu_5+\mu_6+\mu_7} &  &  \\[1ex]
    \text{subject to} & {\mu_1-5\,\pi_1} & {\le} & {0} \\
    & {\mu_1-5\,\pi_2} & {\le} & {0} \\
    & {\mu_1-5\,\pi_3} & {\le} & {0} \\
    & {\mu_2-5\,\pi_1} & {\le} & {0} \\
    & {\mu_2-5\,\pi_2} & {\le} & {0} \\
    & {\mu_2-5\,\pi_3} & {\le} & {0} \\
    & {\mu_3-4\,\pi_1} & {\le} & {0} \\
    & {\mu_3-4\,\pi_2} & {\le} & {0} \\
    & {\mu_3-4\,\pi_3} & {\le} & {0} \\
    & {\mu_4-4\,\pi_1} & {\le} & {0} \\
    & {\mu_4-4\,\pi_2} & {\le} & {0} \\
    & {\mu_4-4\,\pi_3} & {\le} & {0} \\
    & {\mu_5-3\,\pi_1} & {\le} & {0} \\
    & {\mu_5-3\,\pi_2} & {\le} & {0} \\
    & {\mu_5-3\,\pi_3} & {\le} & {0} \\
    & {\mu_6-3\,\pi_1} & {\le} & {0} \\
    & {\mu_6-3\,\pi_2} & {\le} & {0} \\
    & {\mu_6-3\,\pi_3} & {\le} & {0} \\
    & {\mu_7-3\,\pi_1} & {\le} & {0} \\
    & {\mu_7-3\,\pi_2} & {\le} & {0} \\
    & {\mu_7-3\,\pi_3} & {\le} & {0} \\
    & {\pi_1+\pi_2+\pi_3} & {\le} & {1} \\[1ex]
    & {\mu_1,~\mu_2,~\mu_3,~\mu_4,~\mu_5,~\mu_6,~\mu_7} & {\gtreqless} & {0} \\
    & {\pi_1,~\pi_2,~\pi_3} & {\ge} & {0}
    \end{array}
    $$

    An optimal solution $(\tilde{\vet\mu},\tilde{\vet\pi})(D(\mathrm{LP}\text{-}0_{P\|C_{\max}}))$ is:

    $$
    \tilde\mu_1=\tilde\mu_2=\frac{5}{3},~~\tilde\mu_3=\tilde\mu_4=\frac{4}{3},~~\tilde\mu_5=\tilde\mu_6=\tilde\mu_7=1,
    \qquad \tilde\pi_1=\tilde\pi_2=\tilde\pi_3=\frac{1}{3}
    $$

    The optimal value $z(D(\mathrm{LP}\text{-}0_{P\|C_{\max}}))$ is $9$.

<a id="box-4-prop-LP0-PCMAX"></a>

!!! teorema "Proposition 14.1: Optimal value of $\mathrm{LP}\text{-}0_{P\|C_{\max}}$"

    For every $P\|C_{\max}$ instance,

    $$
    z(\mathrm{LP}\text{-}0_{P\|C_{\max}})=\frac{\sum_{j\in\mathscr{J}}t_j}{m}.
    $$

??? dimostrazione "Proof"

    Set $x_{jh}=1/m$ for every job and every machine, and set

    $$
    C_{\max}=\frac{\sum_{j\in\mathscr{J}}t_j}{m}.
    $$

    Each constraint $\eqref{assign:LP0-PCMAX}$ is satisfied and every machine has the displayed load, hence this is a feasible primal solution. In the dual, set

    $$
    \pi_h=\frac1m\quad\forall h\in\mathscr{H},
    \qquad
    \mu_j=\frac{t_j}{m}\quad\forall j\in\mathscr{J}.
    $$

    Constraints $\eqref{x:DLP0-PCMAX}$ hold at equality, $\sum_h\pi_h=1$, and the dual objective value is

    $$
    \sum_{j\in\mathscr{J}}\mu_j=\frac{\sum_{j\in\mathscr{J}}t_j}{m}.
    $$

    By LP Weak Duality, the two solutions are optimal, and the optimal value is the common value of the objective functions. <span class="qed">□</span>

## 14.4 A second Linear Programming relaxation

!!! chiave ""

    To obtain an LP relaxation of the $\mathrm{ILP}_{P\|C_{\max}}$ model, we relax constraints $\eqref{bin:PCMAX}$ into the bounds $0\le x_{jh}\le 1$. The obtained LP model reads as follows:

    <a id="eq-LP-PCMAX"></a>

    \begin{align*}
    && \min \quad C_{\max} \label{obj:LP-PCMAX} \tag{14.4a}\\[1ex]
    && \text{subject to}\quad \sum_{h\in\mathscr{H}}x_{jh}&=1,
    & \forall j\in\mathscr{J}, \label{assign:LP-PCMAX} \tag{14.4b}\\[1ex]
    && -\sum_{j\in\mathscr{J}}t_jx_{jh}+C_{\max}&\ge0,
    & \forall h\in\mathscr{H}, \label{load:LP-PCMAX} \tag{14.4c}\\[1ex]
    && x_{jh}&\le1,
    & \forall j\in\mathscr{J},~\forall h\in\mathscr{H}, \label{ub:LP-PCMAX} \tag{14.4d}\\[1ex]
    && x_{jh}&\ge0,
    & \forall j\in\mathscr{J},~\forall h\in\mathscr{H}, \label{nonnegx:LP-PCMAX} \tag{14.4e}\\[1ex]
    && C_{\max}&\ge0. \label{nonnegC:LP-PCMAX} \tag{14.4f}
    \end{align*}

    This LP model is referred to as the $\mathrm{LP}_{P\|C_{\max}}$ model.

- Constraints $\eqref{ub:LP-PCMAX}$ do not change the relaxation: by $\eqref{assign:LP-PCMAX}$ and $\eqref{nonnegx:LP-PCMAX}$, each $x_{jh}$ is at most one. Thus

    $$
    z(\mathrm{LP}_{P\|C_{\max}})=z(\mathrm{LP}\text{-}0_{P\|C_{\max}})=\frac{\sum_{j\in\mathscr{J}}t_j}{m}.
    $$

<a id="box-5-ex-PCMAX-LP"></a>

!!! esempio "Example 14.4: $\mathrm{LP}_{P\|C_{\max}}$ model"

    The $\mathrm{LP}_{P\|C_{\max}}$ model for the instance of <span style="color:#1971c2">[Example 14.1](#box-1-ex-PCMAX-ILP)</span> is:

    $$
    \begin{array}{rlcl}
    {\min} & {C_{\max}} &  &  \\[1ex]
    \text{subject to} & {x_{11}+x_{12}+x_{13}} & {=} & {1} \\
    & {x_{21}+x_{22}+x_{23}} & {=} & {1} \\
    & {x_{31}+x_{32}+x_{33}} & {=} & {1} \\
    & {x_{41}+x_{42}+x_{43}} & {=} & {1} \\
    & {x_{51}+x_{52}+x_{53}} & {=} & {1} \\
    & {x_{61}+x_{62}+x_{63}} & {=} & {1} \\
    & {x_{71}+x_{72}+x_{73}} & {=} & {1} \\
    & {-5\,x_{11}-5\,x_{21}-4\,x_{31}-4\,x_{41}-3\,x_{51}-3\,x_{61}-3\,x_{71}+C_{\max}} & {\ge} & {0} \\
    & {-5\,x_{12}-5\,x_{22}-4\,x_{32}-4\,x_{42}-3\,x_{52}-3\,x_{62}-3\,x_{72}+C_{\max}} & {\ge} & {0} \\
    & {-5\,x_{13}-5\,x_{23}-4\,x_{33}-4\,x_{43}-3\,x_{53}-3\,x_{63}-3\,x_{73}+C_{\max}} & {\ge} & {0} \\[1ex]
    & {x_{11},~x_{12},~x_{13},~\dots,~x_{73}} & {\le} & {1} \\
    & {x_{11},~x_{12},~x_{13},~\dots,~x_{73}} & {\ge} & {0} \\
    & {C_{\max}} & {\ge} & {0}
    \end{array}
    $$

    An optimal solution $(\tilde{\vet x},\tilde C_{\max})(\mathrm{LP}_{P\|C_{\max}})$ is the solution of <span style="color:#1971c2">[Example 14.2](#box-2-ex-PCMAX-LP0)</span>:

    $$
    \tilde x_{jh}=\frac{1}{3},~~\forall j\in\mathscr{J},~\forall h\in\mathscr{H},\qquad \tilde C_{\max}=9
    $$

    The optimal value $z(\mathrm{LP}_{P\|C_{\max}})$ is $9$. Accordingly we have the same lower bound.

!!! chiave ""

    Using a free dual variable $\mu_j$ for each constraint $\eqref{assign:LP-PCMAX}$, a non-negative dual variable $\pi_h$ for each constraint $\eqref{load:LP-PCMAX}$ and a non-positive dual variable $\lambda_{jh}$ for each constraint $\eqref{ub:LP-PCMAX}$, the dual model of the $\mathrm{LP}_{P\|C_{\max}}$ model is:

    <a id="eq-DLP-PCMAX"></a>

    \begin{align*}
    && \max \quad \sum_{j\in\mathscr{J}}\mu_j+\sum_{j\in\mathscr{J}}\sum_{h\in\mathscr{H}}\lambda_{jh} \label{obj:DLP-PCMAX} \tag{14.5a}\\[1ex]
    && \text{subject to}\quad \mu_j-t_j\pi_h+\lambda_{jh}&\le0,
    & \forall j\in\mathscr{J},~\forall h\in\mathscr{H}, \label{x:DLP-PCMAX} \tag{14.5b}\\[1ex]
    && \sum_{h\in\mathscr{H}}\pi_h&\le1, \label{C:DLP-PCMAX} \tag{14.5c}\\[1ex]
    && \mu_j&\gtreqless0, & \forall j\in\mathscr{J}, \label{free:DLP-PCMAX} \tag{14.5d}\\[1ex]
    && \pi_h&\ge0, & \forall h\in\mathscr{H}, \label{nonneg:DLP-PCMAX} \tag{14.5e}\\[1ex]
    && \lambda_{jh}&\le0, & \forall j\in\mathscr{J},~\forall h\in\mathscr{H}. \label{nonpos:DLP-PCMAX} \tag{14.5f}
    \end{align*}

    This LP model is referred to as the $D(\mathrm{LP}_{P\|C_{\max}})$ model.

<a id="box-6-ex-PCMAX-DLP"></a>

!!! esempio "Example 14.5: $D(\mathrm{LP}_{P\|C_{\max}})$ model"

    The dual $D(\mathrm{LP}_{P\|C_{\max}})$ model for the instance of <span style="color:#1971c2">[Example 14.1](#box-1-ex-PCMAX-ILP)</span> is:

    $$
    \begin{array}{rlcl}
    {\max} & {\mu_1+\mu_2+\mu_3+\mu_4+\mu_5+\mu_6+\mu_7+\lambda_{11}} &  &  \\
    & {+\lambda_{12}+\lambda_{13}+\lambda_{21}+\lambda_{22}+\lambda_{23}+\lambda_{31}+\lambda_{32}+\lambda_{33}} &  &  \\
    & {+\lambda_{41}+\lambda_{42}+\lambda_{43}+\lambda_{51}+\lambda_{52}+\lambda_{53}+\lambda_{61}+\lambda_{62}} &  &  \\
    & {+\lambda_{63}+\lambda_{71}+\lambda_{72}+\lambda_{73}} &  &  \\[1ex]
    \text{subject to} & {\mu_1-5\,\pi_1+\lambda_{11}} & {\le} & {0} \\
    & {\mu_1-5\,\pi_2+\lambda_{12}} & {\le} & {0} \\
    & {\mu_1-5\,\pi_3+\lambda_{13}} & {\le} & {0} \\
    & {\mu_2-5\,\pi_1+\lambda_{21}} & {\le} & {0} \\
    & {\mu_2-5\,\pi_2+\lambda_{22}} & {\le} & {0} \\
    & {\mu_2-5\,\pi_3+\lambda_{23}} & {\le} & {0} \\
    & {\mu_3-4\,\pi_1+\lambda_{31}} & {\le} & {0} \\
    & {\mu_3-4\,\pi_2+\lambda_{32}} & {\le} & {0} \\
    & {\mu_3-4\,\pi_3+\lambda_{33}} & {\le} & {0} \\
    & {\mu_4-4\,\pi_1+\lambda_{41}} & {\le} & {0} \\
    & {\mu_4-4\,\pi_2+\lambda_{42}} & {\le} & {0} \\
    & {\mu_4-4\,\pi_3+\lambda_{43}} & {\le} & {0} \\
    & {\mu_5-3\,\pi_1+\lambda_{51}} & {\le} & {0} \\
    & {\mu_5-3\,\pi_2+\lambda_{52}} & {\le} & {0} \\
    & {\mu_5-3\,\pi_3+\lambda_{53}} & {\le} & {0} \\
    & {\mu_6-3\,\pi_1+\lambda_{61}} & {\le} & {0} \\
    & {\mu_6-3\,\pi_2+\lambda_{62}} & {\le} & {0} \\
    & {\mu_6-3\,\pi_3+\lambda_{63}} & {\le} & {0} \\
    & {\mu_7-3\,\pi_1+\lambda_{71}} & {\le} & {0} \\
    & {\mu_7-3\,\pi_2+\lambda_{72}} & {\le} & {0} \\
    & {\mu_7-3\,\pi_3+\lambda_{73}} & {\le} & {0} \\
    & {\pi_1+\pi_2+\pi_3} & {\le} & {1} \\[1ex]
    & {\mu_1,~\mu_2,~\mu_3,~\mu_4,~\mu_5,~\mu_6,~\mu_7} & {\gtreqless} & {0} \\
    & {\pi_1,~\pi_2,~\pi_3} & {\ge} & {0} \\
    & {\lambda_{11},~\lambda_{12},~\lambda_{13},~\dots,~\lambda_{73}} & {\le} & {0}
    \end{array}
    $$

    An optimal solution $(\tilde{\vet\mu},\tilde{\vet\pi},\tilde{\vet\lambda})(D(\mathrm{LP}_{P\|C_{\max}}))$ is the solution of <span style="color:#1971c2">[Example 14.3](#box-3-ex-PCMAX-DLP0)</span> with $\tilde\lambda_{jh}=0$ for every job and every machine:

    $$
    \tilde\mu_1=\tilde\mu_2=\frac{5}{3},~~\tilde\mu_3=\tilde\mu_4=\frac{4}{3},~~\tilde\mu_5=\tilde\mu_6=\tilde\mu_7=1,
    \qquad \tilde\pi_1=\tilde\pi_2=\tilde\pi_3=\frac{1}{3},
    \qquad \tilde\lambda_{jh}=0
    $$

    The optimal value $z(D(\mathrm{LP}_{P\|C_{\max}}))$ is $9$.

### 14.4.1 Some important theoretical properties

<a id="box-7-prop-PCMAX-ratio"></a>

!!! teorema "Proposition 14.2: Worst-case ratio of the LP bound"

    For every $P\|C_{\max}$ instance,

    $$
    \frac{z(\mathrm{LP}_{P\|C_{\max}})}{z(\mathrm{ILP}_{P\|C_{\max}})}\ge\frac1m.
    $$

??? dimostrazione "Proof"

    Assigning every job to one machine gives a feasible schedule of makespan $\sum_jt_j$. Hence $z(\mathrm{ILP}_{P\|C_{\max}})\le\sum_jt_j$. By [Proposition 14.1](#box-4-prop-LP0-PCMAX),

    $$
    \frac{z(\mathrm{LP}_{P\|C_{\max}})}{z(\mathrm{ILP}_{P\|C_{\max}})}
    \ge
    \frac{\frac{\sum_jt_j}{m}}{\sum_jt_j}
    =\frac1m.
    $$

    <p class="qed-riga"><span class="qed">□</span></p>

<a id="box-8-prop-PCMAX-tight"></a>

!!! teorema "Proposition 14.3: The ratio $1/m$ is asymptotically attained"

    For a fixed number $m \ge 2$ of machines, there are instances for which

    $$
    \frac{z(\mathrm{LP}_{P\|C_{\max}})}{z(\mathrm{ILP}_{P\|C_{\max}})}\longrightarrow\frac1m.
    $$

??? dimostrazione "Proof"

    For $M\in\Z_{\ge2}$, consider one job of processing time $M$ and $m$ jobs of processing time one. The long job alone forces $z(\mathrm{ILP}_{P\|C_{\max}})\ge M$. The schedule that assigns the long job alone to machine $1$ and the $m$ unit jobs to the other $m-1$ machines has loads at most $2 \le M$, hence the makespan $M$ is feasible. Thus $z(\mathrm{ILP}_{P\|C_{\max}})=M$. [Proposition 14.1](#box-4-prop-LP0-PCMAX) gives

    $$
    z(\mathrm{LP}_{P\|C_{\max}})=\frac{M+m}{m}.
    $$

    Therefore,

    $$
    \lim_{M\to+\infty}\frac{z(\mathrm{LP}_{P\|C_{\max}})}{z(\mathrm{ILP}_{P\|C_{\max}})}
    =\lim_{M\to+\infty}\left(\frac1m+\frac1M\right)=\frac1m.
    $$

    <p class="qed-riga"><span class="qed">□</span></p>

<a id="box-9-ex-PCMAX-gap"></a>

!!! esempio "Example 14.6: an integrality gap"

    Consider two machines and three jobs with processing times $(3,3,2)$. [Proposition 14.1](#box-4-prop-LP0-PCMAX) gives $z(\mathrm{LP}_{P\|C_{\max}})=8/2=4$. In every integer schedule, the job of length two must share a machine with one job of length three, so $z(\mathrm{ILP}_{P\|C_{\max}})=5$. The fractional assignment

    $$
    x_{j1}=x_{j2}=\frac12\qquad\forall j\in\{1,2,3\}
    $$

    has load four on both machines, whereas the integer optimum has loads five and three.

## 14.5 Additional considerations

- For every job $j$, the inequality

    \begin{equation*}
    C_{\max}\ge t_j
    \label{valid:job-PCMAX} \tag{14.6}
    \end{equation*}

    is a <strong>valid inequality</strong> for model [(14.1)](#eq-ILP-PCMAX). In every integer schedule, job $j$ is assigned to one machine, whose load and therefore makespan are at least $t_j$ ($n$ linear constraints);

- The inequality

    \begin{equation*}
    C_{\max}\ge\left\lceil\frac{\sum_{j\in\mathscr{J}}t_j}{m}\right\rceil
    \label{valid:average-PCMAX} \tag{14.7}
    \end{equation*}

    is also a <strong>valid inequality</strong> for model [(14.1)](#eq-ILP-PCMAX): the $m$ machine loads sum to $\sum_jt_j$, so their maximum is at least their average and is an integer in every integer schedule (one linear constraint);

- The machines are identical. The constraints

    \begin{equation*}
    \sum_{j\in\mathscr{J}}t_jx_{jh}\ge
    \sum_{j\in\mathscr{J}}t_jx_{j,h+1}
    \qquad \forall h\in\{1,\ldots,m-1\}
    \label{symmetry:PCMAX} \tag{14.8}
    \end{equation*}

    are <strong>optimality-preserving constraints</strong>: they are not valid for every feasible assignment, but every schedule can be relabelled so that its machine loads are non-increasing, without changing the makespan.

- The constraints $\eqref{symmetry:PCMAX}$ remove the equivalent relabellings of the machines only when the loads are distinct. With equal loads they remove none: in the instance of the chapter all the optimal schedules have loads $9$, $9$, $9$, and all the $12$ optimal solutions of the model satisfy them.

## 14.6 Typical mistakes

!!! attenzione "Warning"

    - <strong>Using the LP bound alone.</strong> The value $\sum_j t_j/m$ ignores the longest job: with one very long job it is much smaller than the optimal value. The valid inequality $C_{\max}\ge t_j$ must be added.

    - <strong>Forgetting to round up.</strong> All the processing times are integer, so $C_{\max}$ is an integer in every integer schedule: the lower bound is $\lceil \sum_j t_j/m \rceil$.

    - <strong>Believing that the symmetry constraints remove all the equivalent solutions.</strong> They remove the relabellings of the machines only when the loads are distinct; with equal loads they remove none.

    - <strong>Forgetting the direction of the load constraints.</strong> The constraints $\eqref{load:PCMAX}$ bound $C_{\max}$ from below: it is the minimization that makes $C_{\max}$ equal to the largest load.

    - <strong>Mixing the indices.</strong> The variable $x_{jh}$ has the job $j$ first and the machine $h$ second.

## 14.7 In summary

!!! chiave "In summary"

    - The $\mathrm{ILP}_{P\|C_{\max}}$ model has $n \cdot m$ assignment variables $x_{jh}$ and the makespan variable $C_{\max}$, linked by one load constraint for each machine.

    - The LP relaxation has optimal value $z(\mathrm{LP}_{P\|C_{\max}}) = \sum_j t_j / m$, attained by assigning every job with value $1/m$ to every machine; the dual solution is $\tilde{\pi}_h = 1/m$ and $\tilde{\mu}_j = t_j/m$.

    - The ratio between $z(\mathrm{LP}_{P\|C_{\max}})$ and $z(\mathrm{ILP}_{P\|C_{\max}})$ is at least $1/m$, and $1/m$ is asymptotically attained.

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

---

**Exercises on this chapter:** [:material-pencil: Scheduling problems](../../exercises/pcmax-formulations.md)

