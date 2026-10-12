---
title: "Unbounded knapsack"
---

# 9.8 An ILP model for the Unbounded Knapsack Problem { #sez-sec-kpf-UKP }

<div class="info-capitolo" markdown>

**Part 2 · Formulations and their properties · Chapter 9** · [:material-book-open-variant: Chapter 9: Knapsack problems](index.md) · [:material-file-pdf-box: Lecture notes, volume 2 (PDF)](../../pdf/lecture-notes-2-formulations.pdf) · [:material-pencil: Exercises: Knapsack problems](../../exercises/knapsack-formulations.md)

</div>

The Unbounded Knapsack Problem and its reference instance (Example 2.4) are defined in [Chapter 2 «Knapsack problems», Section 2.5](https://fabiofurini.github.io/combinatorial-optimization/combinatorial-optimization-problems/knapsack/the-unbounded-knapsack-problem/).

- We introduce the following  $n$ <strong>integer variables</strong>:

    \begin{equation*}
    \label{INT_VAR_UKP}
    x_j = \textrm{number of copies of item $j$ inserted in the knapsack} \qquad \forall j \in \mathscr{I}. \tag{9.24}
    \end{equation*}

!!! chiave ""

    Using these variables, an Integer Linear Programming (ILP) model for the Unbounded Knapsack Problem (UKP) reads as follows:

    <a id="eq-NAT_UKP"></a>

    \begin{align*}
    &&   \max \;\;{\sum_{j \in \mathscr{I}} p_j \, x_j}                               \label{obj_UKP}  \tag{9.25a}\\[1ex]
    && \text{subject to} \quad  {\sum_{j \in \mathscr{I}} w_j \, x_j}  &\leq c,                       \label{cons1_UKP}  \tag{9.25b}\\[1ex]
    &&x_j                        &\in  \Z_{\ge 0}, & \forall j \in \mathscr{I}. \label{cons2_UKP} \tag{9.25c}
    \end{align*}

    This ILP model is referred to as the $\mathrm{ILP}_{\mathrm{UKP}}$ model.

- Description of the objective function and constraints of the $\mathrm{ILP}_{\mathrm{UKP}}$ model:

    - the linear objective function $\eqref{obj_UKP}$ maximizes the total profit of the item copies selected in the knapsack;

    - constraint $\eqref{cons1_UKP}$ ensures that the total weight of the selected item copies does not exceed the knapsack capacity (one linear constraint);

    - finally, constraints $\eqref{cons2_UKP}$ define the variables of the ILP model; the capacity constraint already gives $x_j \le \hat{b}_j = \lfloor c/w_j \rfloor$, for every $j \in \mathscr{I}$.

<a id="box-22-texexp_ilp_ukp"></a>

!!! esempio "Example 9.12: $\mathrm{ILP}_{\mathrm{UKP}}$ model"

    We consider a knapsack of capacity $c = 9$ and a set $\mathscr{I} = \{1,2,3,4,5,6\}$ of $6$ items ($n = 6$), each available in an unlimited number of copies, with the following profits and weights:

    $$
    \begin{array}{l|rrrrrrr}
    \hline  & {j = 1} & {j = 2} & {j = 3} & {j = 4} & {j = 5} & {j = 6} \\
    \hline {p_j} & {6} & {5} & {8} & {9} & {6} & {7} \\
    {w_j} & {2} & {3} & {6} & {7} & {5} & {9} \\
    \hline
    \end{array}
    $$

    This is the UKP instance of Example 2.4. The  $\mathrm{ILP}_{\mathrm{UKP}}$ model for this UKP instance is:

    $$
    \begin{array}{rrrrrrrrrrrrr}
    {\max} & 6 \, {x_1} & + 5 \, {x_2} & + 8 \, {x_3} & + 9 \, {x_4} & + 6 \, {x_5} & + 7 \, {x_6} \\[0.5ex]
    \text{subject to} & 2 \, {x_1} & + 3 \, {x_2} & + 6 \, {x_3} & + 7 \, {x_4} & + 5 \, {x_5} & + 9 \, {x_6} & {\le} & 9 \\[0.5ex]
    & {x_1}, & {x_2}, & {x_3}, & {x_4}, & {x_5}, & {x_6} & { \in} & { \Z_{\ge 0}}
    \end{array}
    $$

    An optimal solution $~{\tilde{\vet x}}(\mathrm{ILP}_{\mathrm{UKP}})$  is:

    $$
    \tilde x_1=4,~~\tilde x_2=0,~~\tilde  x_3=0,~~\tilde  x_4=0,~~\tilde  x_5=0,~~\tilde  x_6=0
    $$

    The optimal value $z(\mathrm{ILP}_{\mathrm{UKP}})$  is $24$. The associated optimal solution of the UKP takes four copies of item $1$, and it is the unique optimal solution.

---

**Next:** [9.9 An ILP model for the Multidimensional Knapsack Problem](an-ilp-model-for-the-multidimensional-knapsack-problem.md)
