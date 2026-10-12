---
title: "Multiple-choice knapsack"
---

# 9.11 An ILP model for the Multiple-Choice Knapsack Problem { #sez-sec-kpf-MCKP }

<div class="info-capitolo" markdown>

**Part 2 · Formulations and their properties · Chapter 9** · [:material-book-open-variant: Chapter 9: Knapsack problems](index.md) · [:material-file-pdf-box: Lecture notes, volume 2 (PDF)](../../pdf/lecture-notes-2-formulations.pdf) · [:material-pencil: Exercises: Knapsack problems](../../exercises/knapsack-formulations.md) · [:material-gesture-tap: App: LP relaxation and upper bounds for the 0/1 KP](../../lab/kp-lp-relaxation-bounds.md)

</div>

The Multiple-Choice Knapsack Problem and its reference instance (Example 2.7) are defined in [Chapter 2 «Knapsack problems», Section 2.8](https://fabiofurini.github.io/combinatorial-optimization/combinatorial-optimization-problems/knapsack/the-multiple-choice-knapsack-problem/).

- We introduce the following  $n$ <strong>binary variables</strong>:

    \begin{equation*}
    \label{BIN_VAR_MCKP}
    x_j = \left\{ \begin{array}{ll}
    1 & \textrm{if item $j$ is selected in the knapsack}\\[1.5ex]
    0 & \textrm{otherwise}
    \end{array} \qquad \forall j \in \mathscr{I}. \right. \tag{9.30}
    \end{equation*}

!!! chiave ""

    Using these variables, an Integer Linear Programming (ILP) model for the Multiple-Choice Knapsack Problem (MCKP) reads as follows:

    <a id="eq-NAT_MCKP"></a>

    \begin{align*}
    &&   \max \;\;{\sum_{j \in \mathscr{I}} p_j \, x_j}                               \label{obj_MCKP}  \tag{9.31a}\\[1ex]
    && \text{subject to} \quad  {\sum_{j \in \mathscr{I}} w_j \, x_j}  &\leq c,                       \label{cons1_MCKP}  \tag{9.31b}\\[1ex]
    && {\sum_{j \in \mathscr{J}_h} x_j}  &= 1, & \forall h \in \{1,2,\dots,q\},                       \label{cons2_MCKP}  \tag{9.31c}\\[1ex]
    &&x_j                        &\in  \{0,1\}, & \forall j \in \mathscr{I}. \label{cons3_MCKP} \tag{9.31d}
    \end{align*}

    This ILP model is referred to as the $\mathrm{ILP}_{\mathrm{MCKP}}$ model.

- Description of the objective function and constraints of the $\mathrm{ILP}_{\mathrm{MCKP}}$ model:

    - the linear objective function $\eqref{obj_MCKP}$ maximizes the total profit of the items selected in the knapsack;

    - constraint $\eqref{cons1_MCKP}$ ensures that the total weight of the selected items does not exceed the knapsack capacity (one linear constraint);

    - constraints $\eqref{cons2_MCKP}$ ensure that exactly one item is selected from each class ($q$ linear constraints, one for each class);

    - finally, constraints $\eqref{cons3_MCKP}$ define the variables of the ILP model.

<a id="box-25-texexp_ilp_mckp"></a>

!!! esempio "Example 9.15: $\mathrm{ILP}_{\mathrm{MCKP}}$ model"

    We consider a knapsack of capacity $c = 15$ and a set $\mathscr{I} = \{1,2,3,4,5,6\}$ of $6$ items ($n = 6$), partitioned into $q = 3$ classes $\mathscr{J}_1 = \{1,2\}$, $\mathscr{J}_2 = \{3,4\}$ and $\mathscr{J}_3 = \{5,6\}$, with the following profits and weights:

    $$
    \begin{array}{l|rrrrrrr}
    \hline  & {j = 1} & {j = 2} & {j = 3} & {j = 4} & {j = 5} & {j = 6} \\
    \hline {p_j} & {6} & {8} & {5} & {7} & {4} & {9} \\
    {w_j} & {4} & {6} & {5} & {8} & {3} & {7} \\
    \hline
    \end{array}
    $$

    This is the MCKP instance of Example 2.7. The  $\mathrm{ILP}_{\mathrm{MCKP}}$ model for this MCKP instance is:

    $$
    \begin{array}{rrrrrrrrrrrrr}
    {\max} & 6 \, {x_1} & + 8 \, {x_2} & + 5 \, {x_3} & + 7 \, {x_4} & + 4 \, {x_5} & + 9 \, {x_6} \\[0.5ex]
    \text{subject to} & 4 \, {x_1} & + 6 \, {x_2} & + 5 \, {x_3} & + 8 \, {x_4} & + 3 \, {x_5} & + 7 \, {x_6} & {\le} & 15 \\[0.5ex]
    & {x_1} & + {x_2} &  &  &  &  & {=} & 1 \\[0.5ex]
    &  &  & {x_3} & + {x_4} &  &  & {=} & 1 \\[0.5ex]
    &  &  &  &  & {x_5} & + {x_6} & {=} & 1 \\[0.5ex]
    & {x_1}, & {x_2}, & {x_3}, & {x_4}, & {x_5}, & {x_6} & { \in} & { \{0,1\}}
    \end{array}
    $$

    An optimal solution $~{\tilde{\vet x}}(\mathrm{ILP}_{\mathrm{MCKP}})$  is:

    $$
    \tilde x_1=1,~~\tilde x_2=0,~~\tilde  x_3=0,~~\tilde  x_4=1,~~\tilde  x_5=1,~~\tilde  x_6=0
    $$

    The optimal value $z(\mathrm{ILP}_{\mathrm{MCKP}})$  is $17$. The associated optimal solution of the MCKP is $\tilde{S} =\{1,4,5\}$. The optimal solution is not unique: the subset $\{2,3,5\}$ has the same value.

---

**Next:** [9.12 An ILP model for the Knapsack Problem with Setups](an-ilp-model-for-the-knapsack-problem-with-setups.md)
