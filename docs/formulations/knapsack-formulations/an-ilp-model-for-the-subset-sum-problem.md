---
title: "Subset sum"
---

# 9.6 An ILP model for the Subset Sum Problem { #sez-sec-kpf-SSP }

<div class="info-capitolo" markdown>

**Part 2 · Formulations and their properties · Chapter 9** · [:material-book-open-variant: Chapter 9: Knapsack problems](index.md) · [:material-file-pdf-box: Lecture notes, volume 2 (PDF)](../../pdf/lecture-notes-2-formulations.pdf) · [:material-pencil: Exercises: Knapsack problems](../../exercises/knapsack-formulations.md) · [:material-gesture-tap: App: LP relaxation and upper bounds for the 0/1 KP](../../lab/kp-lp-relaxation-bounds.md)

</div>

The Subset Sum Problem and its reference instance (Example 2.2) are defined in [Chapter 2 «Knapsack problems», Section 2.3](https://fabiofurini.github.io/combinatorial-optimization/combinatorial-optimization-problems/knapsack/the-subset-sum-problem/).

- We introduce the following  $n$ <strong>binary variables</strong>:

    \begin{equation*}
    \label{BIN_VAR_SSP}
    x_j = \left\{ \begin{array}{ll}
    1 & \textrm{if item $j$ is selected in the subset}\\[1.5ex]
    0 & \textrm{otherwise}
    \end{array} \qquad \forall j \in \mathscr{I}. \right. \tag{9.20}
    \end{equation*}

!!! chiave ""

    Using these variables, an Integer Linear Programming (ILP) model for the Subset Sum Problem (SSP) reads as follows:

    <a id="eq-NAT_SSP"></a>

    \begin{align*}
    &&   \max \;\;{\sum_{j \in \mathscr{I}} w_j \, x_j}                               \label{obj_SSP}  \tag{9.21a}\\[1ex]
    && \text{subject to} \quad  {\sum_{j \in \mathscr{I}} w_j \, x_j}  &\leq c,                       \label{cons1_SSP}  \tag{9.21b}\\[1ex]
    &&x_j                        &\in  \{0,1\}, & \forall j \in \mathscr{I}. \label{cons2_SSP} \tag{9.21c}
    \end{align*}

    This ILP model is referred to as the $\mathrm{ILP}_{\mathrm{SSP}}$ model.

- Description of the objective function and constraints of the $\mathrm{ILP}_{\mathrm{SSP}}$ model:

    - the linear objective function $\eqref{obj_SSP}$ maximizes the total weight of the items selected in the subset;

    - constraint $\eqref{cons1_SSP}$ ensures that the total weight of the selected items does not exceed the target value (one linear constraint);

    - finally, constraints $\eqref{cons2_SSP}$ define the variables of the ILP model.

- The $\mathrm{ILP}_{\mathrm{SSP}}$ model is the $\mathrm{ILP}_{\mathrm{KP}}$ model with $p_j = w_j$, for every $j \in \mathscr{I}$: the answer to the SSP is <strong>yes</strong> if and only if $z(\mathrm{ILP}_{\mathrm{SSP}}) = c$.

<a id="box-20-texexp_ilp_ssp"></a>

!!! esempio "Example 9.10: $\mathrm{ILP}_{\mathrm{SSP}}$ model"

    We consider a target value $c = 9$ and a set $\mathscr{I} = \{1,2,3,4,5,6\}$ of $6$ items ($n = 6$), with the following weights:

    $$
    \begin{array}{l|rrrrrrr}
    \hline  & {j = 1} & {j = 2} & {j = 3} & {j = 4} & {j = 5} & {j = 6} \\
    \hline {w_j} & {2} & {3} & {6} & {7} & {5} & {9} \\
    \hline
    \end{array}
    $$

    This is the SSP instance of Example 2.2. The  $\mathrm{ILP}_{\mathrm{SSP}}$ model for this SSP instance is:

    $$
    \begin{array}{rrrrrrrrrrrrr}
    {\max} & 2 \, {x_1} & + 3 \, {x_2} & + 6 \, {x_3} & + 7 \, {x_4} & + 5 \, {x_5} & + 9 \, {x_6} \\[0.5ex]
    \text{subject to} & 2 \, {x_1} & + 3 \, {x_2} & + 6 \, {x_3} & + 7 \, {x_4} & + 5 \, {x_5} & + 9 \, {x_6} & {\le} & 9 \\[0.5ex]
    & {x_1}, & {x_2}, & {x_3}, & {x_4}, & {x_5}, & {x_6} & { \in} & { \{0,1\}}
    \end{array}
    $$

    An optimal solution $~{\tilde{\vet x}}(\mathrm{ILP}_{\mathrm{SSP}})$  is:

    $$
    \tilde x_1=1,~~\tilde x_2=0,~~\tilde  x_3=0,~~\tilde  x_4=1,~~\tilde  x_5=0,~~\tilde  x_6=0
    $$

    The optimal value $z(\mathrm{ILP}_{\mathrm{SSP}})$  is $9 = c$, so the answer to the SSP is <strong>yes</strong>. The associated subset is $\tilde{S} =\{1,4\}$. The optimal solution is not unique: the subsets $\{2,3\}$ and $\{6\}$ also reach the target value.

---

**Next:** [9.7 An ILP model for the Bounded Knapsack Problem](an-ilp-model-for-the-bounded-knapsack-problem.md)
