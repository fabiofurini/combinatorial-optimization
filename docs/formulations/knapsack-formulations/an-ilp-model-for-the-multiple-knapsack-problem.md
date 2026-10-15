---
title: "Multiple knapsack"
---

# 9.10 An ILP model for the Multiple Knapsack Problem { #sez-sec-kpf-MKP }

<div class="info-capitolo" markdown>

**Part 2 · Formulations and their properties · Chapter 9** · [:material-book-open-variant: Chapter 9: Knapsack problems](index.md) · [:material-file-pdf-box: Lecture notes, volume 2 (PDF)](../../pdf/lecture-notes-2-formulations.pdf) · [:material-presentation: Slides](../../pdf/slides-knapsack-formulations.pdf) · [:material-pencil: Exercises: Knapsack problems](../../exercises/knapsack-formulations.md) · [:material-gesture-tap: App: LP relaxation and upper bounds for the 0/1 KP](../../lab/kp-lp-relaxation-bounds.md)

</div>

The Multiple Knapsack Problem and its reference instance (Example 2.6) are defined in [Chapter 2 «Knapsack problems», Section 2.7](https://fabiofurini.github.io/combinatorial-optimization/combinatorial-optimization-problems/knapsack/the-multiple-knapsack-problem/).

- We introduce the following  $n \, m$ <strong>binary variables</strong>:

    \begin{equation*}
    \label{BIN_VAR_MKP}
    x_{jk} = \left\{ \begin{array}{ll}
    1 & \textrm{if item $j$ is inserted in knapsack $k$}\\[1.5ex]
    0 & \textrm{otherwise}
    \end{array} \qquad \forall j \in \mathscr{I},~\forall k \in \mathscr{K}. \right. \tag{9.28}
    \end{equation*}

!!! chiave ""

    Using these variables, an Integer Linear Programming (ILP) model for the Multiple Knapsack Problem (MKP) reads as follows:

    <a id="eq-NAT_MKP"></a>

    \begin{align*}
    &&   \max \;\;{\sum_{k \in \mathscr{K}} \sum_{j \in \mathscr{I}} p_j \, x_{jk}}                               \label{obj_MKP}  \tag{9.29a}\\[1ex]
    && \text{subject to} \quad  {\sum_{j \in \mathscr{I}} w_j \, x_{jk}}  &\leq c_k, & \forall k \in \mathscr{K},                       \label{cons1_MKP}  \tag{9.29b}\\[1ex]
    && {\sum_{k \in \mathscr{K}} x_{jk}}  &\leq 1, & \forall j \in \mathscr{I},                       \label{cons2_MKP}  \tag{9.29c}\\[1ex]
    &&x_{jk}                        &\in  \{0,1\}, & \forall j \in \mathscr{I},~\forall k \in \mathscr{K}. \label{cons3_MKP} \tag{9.29d}
    \end{align*}

    This ILP model is referred to as the $\mathrm{ILP}_{\mathrm{MKP}}$ model.

- Description of the objective function and constraints of the $\mathrm{ILP}_{\mathrm{MKP}}$ model:

    - the linear objective function $\eqref{obj_MKP}$ maximizes the total profit of the items inserted in the knapsacks;

    - constraints $\eqref{cons1_MKP}$ ensure that, in every knapsack $k$, the total weight of the assigned items does not exceed the capacity $c_k$ ($m$ linear constraints, one for each knapsack);

    - constraints $\eqref{cons2_MKP}$ ensure that each item is inserted in at most one knapsack ($n$ linear constraints, one for each item);

    - finally, constraints $\eqref{cons3_MKP}$ define the variables of the ILP model.

<a id="box-24-texexp_ilp_mkp"></a>

!!! esempio "Example 9.14: $\mathrm{ILP}_{\mathrm{MKP}}$ model"

    We consider $m = 2$ knapsacks with capacities $c_1 = 10$ and $c_2 = 12$, and a set $\mathscr{I} = \{1,2,3,4,5\}$ of $5$ items ($n = 5$), with the following profits and weights:

    $$
    \begin{array}{l|rrrrr}
    \hline  & {j = 1} & {j = 2} & {j = 3} & {j = 4} & {j = 5} \\
    \hline {p_j} & {6} & {8} & {5} & {7} & {9} \\
    {w_j} & {4} & {6} & {5} & {3} & {7} \\
    \hline
    \end{array}
    $$

    This is the MKP instance of Example 2.6. The model has $10$ variables, so we write one constraint per line. The  $\mathrm{ILP}_{\mathrm{MKP}}$ model for this MKP instance is:

    $$
    \begin{array}{rlcl}
    {\max} & {6\,x_{11} + 8\,x_{21} + 5\,x_{31} + 7\,x_{41} + 9\,x_{51}} &  &  \\
    & {+\, 6\,x_{12} + 8\,x_{22} + 5\,x_{32} + 7\,x_{42} + 9\,x_{52}} &  &  \\[0.5ex]
    \text{subject to} & {4\,x_{11} + 6\,x_{21} + 5\,x_{31} + 3\,x_{41} + 7\,x_{51}} & {\le} & {10} \\
    & {4\,x_{12} + 6\,x_{22} + 5\,x_{32} + 3\,x_{42} + 7\,x_{52}} & {\le} & {12} \\[0.5ex]
    & {x_{11} + x_{12}} & {\le} & {1} \\
    & {x_{21} + x_{22}} & {\le} & {1} \\
    & {x_{31} + x_{32}} & {\le} & {1} \\
    & {x_{41} + x_{42}} & {\le} & {1} \\
    & {x_{51} + x_{52}} & {\le} & {1} \\[0.5ex]
    & {x_{11},~x_{21},~x_{31},~x_{41},~x_{51},~x_{12},~x_{22},~x_{32},~x_{42},~x_{52}} & {\in} & {\{0,1\}}
    \end{array}
    $$

    An optimal solution $~{\tilde{\vet x}}(\mathrm{ILP}_{\mathrm{MKP}})$  is:

    $$
    \tilde x_{11}=\tilde x_{21}=1,~~\tilde x_{42}=\tilde x_{52}=1,~~\textrm{and all the other variables equal to $0$.}
    $$

    The optimal value $z(\mathrm{ILP}_{\mathrm{MKP}})$  is $30$. The associated optimal solution of the MKP is $(\tilde{S}_1,\tilde{S}_2) = (\{1,2\},\{4,5\})$. The optimal solution is not unique: $(\{2,4\},\{1,5\})$ and $(\{4,5\},\{1,2\})$ have the same value.

---

**Next:** [9.11 An ILP model for the Multiple-Choice Knapsack Problem](an-ilp-model-for-the-multiple-choice-knapsack-problem.md)
