---
title: "Bounded knapsack"
---

# 9.7 An ILP model for the Bounded Knapsack Problem { #sez-sec-kpf-BKP }

<div class="info-capitolo" markdown>

**Part 2 · Formulations and their properties · Chapter 9** · [:material-book-open-variant: Chapter 9: Knapsack problems](index.md) · [:material-file-pdf-box: Lecture notes, volume 2 (PDF)](../../pdf/lecture-notes-2-formulations.pdf) · [:material-pencil: Exercises: Knapsack problems](../../exercises/knapsack-formulations.md)

</div>

The Bounded Knapsack Problem and its reference instance (Example 2.3) are defined in [Chapter 2 «Knapsack problems», Section 2.4](https://fabiofurini.github.io/combinatorial-optimization/combinatorial-optimization-problems/knapsack/the-bounded-knapsack-problem/).

- We introduce the following  $n$ <strong>integer variables</strong>:

    \begin{equation*}
    \label{INT_VAR_BKP}
    x_j = \textrm{number of copies of item $j$ inserted in the knapsack} \qquad \forall j \in \mathscr{I}. \tag{9.22}
    \end{equation*}

!!! chiave ""

    Using these variables, an Integer Linear Programming (ILP) model for the Bounded Knapsack Problem (BKP) reads as follows:

    <a id="eq-NAT_BKP"></a>

    \begin{align*}
    &&   \max \;\;{\sum_{j \in \mathscr{I}} p_j \, x_j}                               \label{obj_BKP}  \tag{9.23a}\\[1ex]
    && \text{subject to} \quad  {\sum_{j \in \mathscr{I}} w_j \, x_j}  &\leq c,                       \label{cons1_BKP}  \tag{9.23b}\\[1ex]
    &&x_j                        &\in  \{0,1,\dots,b_j\}, & \forall j \in \mathscr{I}. \label{cons2_BKP} \tag{9.23c}
    \end{align*}

    This ILP model is referred to as the $\mathrm{ILP}_{\mathrm{BKP}}$ model.

- Description of the objective function and constraints of the $\mathrm{ILP}_{\mathrm{BKP}}$ model:

    - the linear objective function $\eqref{obj_BKP}$ maximizes the total profit of the item copies selected in the knapsack;

    - constraint $\eqref{cons1_BKP}$ ensures that the total weight of the selected item copies does not exceed the knapsack capacity (one linear constraint);

    - finally, constraints $\eqref{cons2_BKP}$ define the variables of the ILP model: each item $j$ is taken at most $b_j$ times.

<a id="box-21-texexp_ilp_bkp"></a>

!!! esempio "Example 9.11: $\mathrm{ILP}_{\mathrm{BKP}}$ model"

    We consider a knapsack of capacity $c = 9$ and a set $\mathscr{I} = \{1,2,3,4,5,6\}$ of $6$ items ($n = 6$), with the following profits, weights and available copies:

    $$
    \begin{array}{l|rrrrrrr}
    \hline  & {j = 1} & {j = 2} & {j = 3} & {j = 4} & {j = 5} & {j = 6} \\
    \hline {p_j} & {6} & {5} & {8} & {9} & {6} & {7} \\
    {w_j} & {2} & {3} & {6} & {7} & {5} & {9} \\
    {b_j} & {2} & {2} & {1} & {1} & {1} & {1} \\
    \hline
    \end{array}
    $$

    This is the BKP instance of Example 2.3. The  $\mathrm{ILP}_{\mathrm{BKP}}$ model for this BKP instance is:

    $$
    \begin{array}{rrrrrrrrrrrrr}
    {\max} & 6 \, {x_1} & + 5 \, {x_2} & + 8 \, {x_3} & + 9 \, {x_4} & + 6 \, {x_5} & + 7 \, {x_6} \\[0.5ex]
    \text{subject to} & 2 \, {x_1} & + 3 \, {x_2} & + 6 \, {x_3} & + 7 \, {x_4} & + 5 \, {x_5} & + 9 \, {x_6} & {\le} & 9 \\[0.5ex]
    & {x_1}, & {x_2} &  &  &  &  & { \in} & { \{0,1,2\}} \\[0.5ex]
    &  &  & {x_3}, & {x_4}, & {x_5}, & {x_6} & { \in} & { \{0,1\}}
    \end{array}
    $$

    An optimal solution $~{\tilde{\vet x}}(\mathrm{ILP}_{\mathrm{BKP}})$  is:

    $$
    \tilde x_1=2,~~\tilde x_2=0,~~\tilde  x_3=0,~~\tilde  x_4=0,~~\tilde  x_5=1,~~\tilde  x_6=0
    $$

    The optimal value $z(\mathrm{ILP}_{\mathrm{BKP}})$  is $18$. The associated optimal solution of the BKP takes two copies of item $1$ and one copy of item $5$, and it is the unique optimal solution.

---

**Next:** [9.8 An ILP model for the Unbounded Knapsack Problem](an-ilp-model-for-the-unbounded-knapsack-problem.md)
