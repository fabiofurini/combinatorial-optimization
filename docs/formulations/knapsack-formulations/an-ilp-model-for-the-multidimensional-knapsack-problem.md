---
title: "Multidimensional knapsack"
---

# 9.9 An ILP model for the Multidimensional Knapsack Problem { #sez-sec-kpf-MDKP }

<div class="info-capitolo" markdown>

**Part 2 · Formulations and their properties · Chapter 9** · [:material-book-open-variant: Chapter 9: Knapsack problems](index.md) · [:material-file-pdf-box: Lecture notes, volume 2 (PDF)](../../pdf/lecture-notes-2-formulations.pdf) · [:material-pencil: Exercises: Knapsack problems](../../exercises/knapsack-formulations.md) · [:material-gesture-tap: App: LP relaxation and upper bounds for the 0/1 KP](../../lab/kp-lp-relaxation-bounds.md)

</div>

The Multidimensional Knapsack Problem and its reference instance (Example 2.5) are defined in [Chapter 2 «Knapsack problems», Section 2.6](https://fabiofurini.github.io/combinatorial-optimization/combinatorial-optimization-problems/knapsack/the-multidimensional-knapsack-problem/).

- We introduce the following  $n$ <strong>binary variables</strong>:

    \begin{equation*}
    \label{BIN_VAR_MDKP}
    x_j = \left\{ \begin{array}{ll}
    1 & \textrm{if item $j$ is selected in the knapsack}\\[1.5ex]
    0 & \textrm{otherwise}
    \end{array} \qquad \forall j \in \mathscr{I}. \right. \tag{9.26}
    \end{equation*}

!!! chiave ""

    Using these variables, an Integer Linear Programming (ILP) model for the Multidimensional Knapsack Problem (MDKP) reads as follows:

    <a id="eq-NAT_MDKP"></a>

    \begin{align*}
    &&   \max \;\;{\sum_{j \in \mathscr{I}} p_j \, x_j}                               \label{obj_MDKP}  \tag{9.27a}\\[1ex]
    && \text{subject to} \quad  {\sum_{j \in \mathscr{I}} w_{dj} \, x_j}  &\leq c_d, & \forall d \in \mathscr{D},                       \label{cons1_MDKP}  \tag{9.27b}\\[1ex]
    &&x_j                        &\in  \{0,1\}, & \forall j \in \mathscr{I}. \label{cons2_MDKP} \tag{9.27c}
    \end{align*}

    This ILP model is referred to as the $\mathrm{ILP}_{\mathrm{MDKP}}$ model.

- Description of the objective function and constraints of the $\mathrm{ILP}_{\mathrm{MDKP}}$ model:

    - the linear objective function $\eqref{obj_MDKP}$ maximizes the total profit of the items selected in the knapsack;

    - constraints $\eqref{cons1_MDKP}$ ensure that, in every dimension $d$, the total weight of the selected items does not exceed the capacity $c_d$ ($k$ linear constraints, one for each dimension);

    - finally, constraints $\eqref{cons2_MDKP}$ define the variables of the ILP model.

<a id="box-23-texexp_ilp_mdkp"></a>

!!! esempio "Example 9.13: $\mathrm{ILP}_{\mathrm{MDKP}}$ model"

    We consider a $2$-dimensional knapsack ($k = 2$) with capacities $c_1 = 10$ and $c_2 = 12$, and a set $\mathscr{I} = \{1,2,3,4\}$ of $4$ items ($n = 4$), with the following profits and weights:

    $$
    \begin{array}{l|rrrr}
    \hline  & {j = 1} & {j = 2} & {j = 3} & {j = 4} \\
    \hline {p_j} & {6} & {7} & {5} & {9} \\
    {w_{1j}} & {4} & {5} & {3} & {7} \\
    {w_{2j}} & {6} & {4} & {5} & {3} \\
    \hline
    \end{array}
    $$

    This is the MDKP instance of Example 2.5. The  $\mathrm{ILP}_{\mathrm{MDKP}}$ model for this MDKP instance is:

    $$
    \begin{array}{rrrrrrr}
    {\max} & 6 \, {x_1} & + 7 \, {x_2} & + 5 \, {x_3} & + 9 \, {x_4} \\[0.5ex]
    \text{subject to} & 4 \, {x_1} & + 5 \, {x_2} & + 3 \, {x_3} & + 7 \, {x_4} & {\le} & 10 \\[0.5ex]
    & 6 \, {x_1} & + 4 \, {x_2} & + 5 \, {x_3} & + 3 \, {x_4} & {\le} & 12 \\[0.5ex]
    & {x_1}, & {x_2}, & {x_3}, & {x_4} & { \in} & { \{0,1\}}
    \end{array}
    $$

    An optimal solution $~{\tilde{\vet x}}(\mathrm{ILP}_{\mathrm{MDKP}})$  is:

    $$
    \tilde x_1=0,~~\tilde x_2=0,~~\tilde  x_3=1,~~\tilde  x_4=1
    $$

    The optimal value $z(\mathrm{ILP}_{\mathrm{MDKP}})$  is $14$. The associated optimal solution of the MDKP is $\tilde{S} =\{3,4\}$, and it is the unique optimal solution.

---

**Next:** [9.10 An ILP model for the Multiple Knapsack Problem](an-ilp-model-for-the-multiple-knapsack-problem.md)
