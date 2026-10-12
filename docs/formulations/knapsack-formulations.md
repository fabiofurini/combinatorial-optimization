---
title: "Formulations of the knapsack problem"
---

# Formulations of the knapsack problem

<div class="info-capitolo" markdown>

**Part 2 · Formulations and their properties · Chapter 9** · [:material-file-pdf-box: Lecture notes, volume 2 (PDF)](../pdf/lecture-notes-2-formulations.pdf) · [:material-pencil: Exercises: Knapsack](../exercises/knapsack-formulations.md)

</div>

!!! nota "Prerequisites"

    - From the module <em>Linear Programming</em>, [Chapter 9 «Duality theory»](https://fabiofurini.github.io/linear-programming/duality/09-duality/): the dual of an LP problem, weak and strong duality.

    - From the module <em>Integer linear programming</em>, [Chapter 1 «Integer linear programming»](https://fabiofurini.github.io/integer-linear-programming/models-and-bounds/ilp/) and [Chapter 2 «LP relaxation»](https://fabiofurini.github.io/integer-linear-programming/models-and-bounds/lp-relaxation/): ILP problems, LP relaxations and upper bounds.

    - From this module, [Chapter 2 «Knapsack problems»](https://fabiofurini.github.io/combinatorial-optimization/combinatorial-optimization-problems/knapsack/): the problem, its assumptions and the instance of Example 1.

!!! chiave "Objectives"

    At the end of this chapter you will be able to:

    - write the ILP model of the Knapsack Problem and explain each of its constraints;

    - write the two LP relaxations and their duals, and compute their optimal solutions with closed formulas;

    - compute the split item, the residual capacity and the value $z(\mathrm{LP}_{\mathrm{KP}})$;

    - compute the Dantzig and the Martello-Toth upper bounds, rounding them correctly;

    - explain why $z(\mathrm{LP}_{\mathrm{KP}})$ is never larger than twice $z(\mathrm{ILP}_{\mathrm{KP}})$.

## 9.1 An ILP model for the Knapsack Problem

- We introduce the following  $n$ <strong>binary variables</strong>:

    \begin{equation*}
    \label{BIN_VAR}
    x_j = \left\{ \begin{array}{ll}
    1 & \textrm{if item $j$ is selected in the knapsack}\\[1.5ex]
    0 & \textrm{otherwise}
    \end{array} \qquad \forall j \in \underbrace{\{1,2,\dots,n\}}_{=\mathscr{I}}. \right. \tag{9.1}
    \end{equation*}

!!! chiave ""

    Using these variables, an Integer Linear Programming (ILP) model for the Knapsack Problem (KP) reads as follows:

    <a id="eq-NAT_KP"></a>

    \begin{align*}
    &&   \max \;\;{\sum_{j \in \mathscr{I}} p_j \, x_j}                               \label{obj_KP}  \tag{9.2a}\\[1ex]
    && \text{subject to} \quad  {\sum_{j \in \mathscr{I}} w_j \, x_j}  &\leq c,                       \label{cons1_KP}  \tag{9.2b}\\[1ex]
    &&x_j                        &\in  \{0,1\}, & \forall j \in \mathscr{I}. \label{cons2_KP} \tag{9.2c}
    \end{align*}

    This ILP model is referred to as the $\mathrm{ILP}_{\mathrm{KP}}$ model.

- Description of the objective function and constraints of the $\mathrm{ILP}_{\mathrm{KP}}$ model:

    - the linear objective function $\eqref{obj_KP}$ maximizes the total profit of the items selected in the knapsack;

    - constraint $\eqref{cons1_KP}$ ensures that the total weight of the selected items does not exceed the knapsack capacity (one linear constraint);

    - finally, constraints $\eqref{cons2_KP}$ define the variables of the ILP model.

<a id="box-1-texexp_ilp_kp"></a>

!!! esempio "Example 9.1: $\mathrm{ILP}_{\mathrm{KP}}$ model"

    We consider a knapsack of capacity $c = 9$ and a set $\mathscr{I} = \{1,2,3,4,5,6\}$ of $6$ items ($n = 6$), with the following profits and weights:

    $$
    \begin{array}{l|rrrrrrr}
    \hline  & {j = 1} & {j = 2} & {j = 3} & {j = 4} & {j = 5} & {j = 6} \\
    \hline {p_j} & {6} & {5} & {8} & {9} & {6} & {7} \\
    {w_j} & {2} & {3} & {6} & {7} & {5} & {9} \\
    \hline
    \end{array}
    $$

    We refer to this KP instance as <span style="color:#1971c2">Example 1</span>. The  $\mathrm{ILP}_{\mathrm{KP}}$ model for this KP instance is:

    $$
    \begin{array}{rrrrrrrrrrrrr}
    {\max} & 6 \, {x_1} & + 5 \, {x_2} & + 8 \, {x_3} & + 9 \, {x_4} & + 6 \, {x_5} & + 7 \, {x_6} \\[0.5ex]
    \text{subject to} & 2 \, {x_1} & + 3 \, {x_2} & + 6 \, {x_3} & + 7 \, {x_4} & + 5 \, {x_5} & + 9 \, {x_6} & {\le} & 9 \\[0.5ex]
    & {x_1}, & {x_2}, & {x_3}, & {x_4}, & {x_5}, & {x_6} & { \in} & { \{0,1\}}
    \end{array}
    $$

    An optimal solution $~{\tilde{\vet x}}(\mathrm{ILP}_{\mathrm{KP}})$  is:

    $$
    \tilde x_1=1,~~\tilde x_2=0,~~\tilde  x_3=0,~~\tilde  x_4=1,~~\tilde  x_5=0,~~\tilde  x_6=0
    $$

    The optimal value $z(\mathrm{ILP}_{\mathrm{KP}})$  is $15$. The associated optimal solution of the KP is $\tilde{S} =\{1,4\}$, and it is the unique optimal solution.

## 9.2 A first Linear Programming relaxation

!!! chiave ""

    To obtain a Linear Programming (LP) relaxation of the $\mathrm{ILP}_{\mathrm{KP}}$ model,  we relax  constraints $\eqref{cons2_KP}$  with the following ones:

    \begin{equation*}
    \label{cons2_KP_LP}
    x_j \ge 0,~~~~~~ \forall j \in \mathscr{I}, \tag{9.3}
    \end{equation*}

    This LP model is referred to as the $\mathrm{LP}\text{-}0_{\mathrm{KP}}$ model.

<a id="box-2-texexp_lp0_kp"></a>

!!! esempio "Example 9.2: $\mathrm{LP}\text{-}0_{\mathrm{KP}}$ model"

    The  $\mathrm{LP}\text{-}0_{\mathrm{KP}}$ model for the KP instance of <span style="color:#1971c2">Example 1</span> is:

    $$
    \begin{array}{rrrrrrrrrrrrr}
    {\max} & 6 \, {x_1} & + 5 \, {x_2} & + 8 \, {x_3} & + 9 \, {x_4} & + 6 \, {x_5} & + 7 \, {x_6} \\[1ex]
    \text{subject to} & 2 \, {x_1} & + 3 \, {x_2} & + 6 \, {x_3} & + 7 \, {x_4} & + 5 \, {x_5} & + 9 \, {x_6} & {\le} & 9 \\[1ex]
    & {x_1}, & {x_2}, & {x_3}, & {x_4}, & {x_5}, & {x_6} & { \ge} & { 0}
    \end{array}
    $$

    An optimal solution $~{\tilde{\vet x}}(\mathrm{LP}\text{-}0_{\mathrm{KP}})$  is:

    $$
    \tilde{x}_1=\frac{9}{2},~~\tilde{x}_2=\tilde{x}_3=\tilde{x}_4=\tilde{x}_5=\tilde{x}_6=0
    $$

    The optimal value $z(\mathrm{LP}\text{-}0_{\mathrm{KP}})$  is $27$.

    Accordingly we have the upper bound:

    $$
    z(\mathrm{ILP}_{\mathrm{KP}}) \le 27
    $$

!!! chiave ""

    Using a non-negative dual variable $\pi$ for the constraint $\eqref{cons1_KP}$, the dual model of the $\mathrm{LP}\text{-}0_{\mathrm{KP}}$ model is:

    <a id="eq-DUAL_0"></a>

    \begin{align*}
    &&   \min \;\; c \, \pi                                \label{eq:KP-obj_LP_D_0}  \tag{9.4a}\\[2ex]
    && \text{subject to} \quad  w_j \, \pi  &\geq p_j, & \forall j \in \mathscr{I},                       \label{eq:KP-cap_LP_D_0}  \tag{9.4b}\\[2ex]
    &&\pi                        &\ge  0\label{eq:KP-cont1_LP_D_0}. \tag{9.4c}
    \end{align*}

<a id="box-3-texexp_dlp0_kp"></a>

!!! esempio "Example 9.3: $D(\mathrm{LP}\text{-}0_{\mathrm{KP}})$ model"

    The dual $D(\mathrm{LP}\text{-}0_{\mathrm{KP}})$ model for the KP instance of <span style="color:#1971c2">Example 1</span> is:

    $$
    \begin{array}{rrrrrrrrrrrrrrrr}
    {\min} & 9 \, {\pi} \\[1ex]
    \text{subject to} & 2 \, {\pi} & {\ge} & 6 \\[1ex]
    & 3 \, {\pi} & {\ge} & 5 \\[1ex]
    & 6 \, {\pi} & {\ge} & 8 \\[1ex]
    & 7 \, {\pi} & {\ge} & 9 \\[1ex]
    & 5 \, {\pi} & {\ge} & 6 \\[1ex]
    & 9 \, {\pi} & {\ge} & 7 \\[1ex]
    & {\pi} & { \ge} & { 0}
    \end{array}
    $$

    An optimal solution $~{\tilde{\pi}}(D(\mathrm{LP}\text{-}0_{\mathrm{KP}}))$  is:

    $$
    \tilde{\pi}=3
    $$

    The optimal value $z(D(\mathrm{LP}\text{-}0_{\mathrm{KP}}))$  is $27$.

- The following proposition provides formulas to compute an optimal solution of the primal $\mathrm{LP}\text{-}0_{\mathrm{KP}}$ model and of the dual $D(\mathrm{LP}\text{-}0_{\mathrm{KP}})$ model.

<a id="box-4-propXX"></a>

!!! teorema "Proposition 9.1"

    If the first item $j=1$ has the largest efficiency, an optimal solution of  the primal $\mathrm{LP}\text{-}0_{\mathrm{KP}}$ model is:

    \begin{equation*}
    \label{PP_0}
    \tilde{x}_1=\frac{c}{w_1}
    \text{    and     }
    \tilde{x}_j=0,  \quad \forall j \in\{2,3,\dots, n\}, \tag{9.5}
    \end{equation*}

    and  an optimal  solution of the dual  $D(\mathrm{LP}\text{-}0_{\mathrm{KP}})$ model is:

    \begin{equation*}
    \label{DD_0}
    \tilde{\pi}= \frac{p_1}{w_1}. \tag{9.6}
    \end{equation*}

<a id="box-5-propXX"></a>

!!! teorema "Corollary 9.2"

    The optimal value of the primal $\mathrm{LP}\text{-}0_{\mathrm{KP}}$ and dual $D(\mathrm{LP}\text{-}0_{\mathrm{KP}})$ models is:

    \begin{equation*}
    \label{VAL0}
    z(\mathrm{LP}\text{-}0_{\mathrm{KP}})
    =
    p_1 \frac{c}{w_1}
    =
    z(D(\mathrm{LP}\text{-}0_{\mathrm{KP}})) \tag{9.7}
    \end{equation*}

- The proof proceeds in three steps:

    1. We show that $\eqref{PP_0}$ is a feasible solution for the primal $\mathrm{LP}\text{-}0_{\mathrm{KP}}$ model;

    2. We show that $\eqref{DD_0}$ is a feasible solution for the dual $D(\mathrm{LP}\text{-}0_{\mathrm{KP}})$ model;

    3. We show that both feasible solutions have the same objective function value.

    Therefore, by LP Strong Duality, $\eqref{PP_0}$ and $\eqref{DD_0}$ are a pair of optimal primal and dual solutions.

??? dimostrazione "Proof"

    - **1.** We have:

        $$
        \sum_{j \in \mathscr{I}} w_j \, \tilde{x}_j = w_1 \; \frac{c}{w_1} = c
        $$

        thus constraint $\eqref{cons1_KP}$ is satisfied.

        Since $\tilde{x}_j \ge 0$, for every $j \in \mathscr{I}$,   constraints $\eqref{cons2_KP_LP}$ are satisfied.

        Therefore, $\eqref{PP_0}$ is a feasible solution for the primal $\mathrm{LP}\text{-}0_{\mathrm{KP}}$ model.

    - **2.** For every $j \in \mathscr{I}$, we have:

        $$
        w_j \, \tilde{\pi} = w_j \; \frac{p_1}{w_1} \ge p_j \qquad \text{since} \qquad \frac{p_1}{w_1} \ge \frac{p_j}{w_j}
        $$

        thus constraints $\eqref{eq:KP-cap_LP_D_0}$ are satisfied.

        We have $\tilde{\pi} \ge 0$, thus constraint $\eqref{eq:KP-cont1_LP_D_0}$ is satisfied.

        Therefore, $\eqref{DD_0}$ is a feasible solution for the dual $D(\mathrm{LP}\text{-}0_{\mathrm{KP}})$ model.

    - **3.** For the objective functions, we have:

        $$
        \sum_{j \in \mathscr{I}} p_j \, \tilde{x}_j = p_1 \; \frac{c}{w_1} = c \, \tilde{\pi}
        $$

        thus the primal and dual objective function values are equal.

    Therefore, by LP Strong Duality, $\eqref{PP_0}$ and $\eqref{DD_0}$ are a pair of optimal primal and dual solutions. <span class="qed">□</span>

## 9.3 A second Linear Programming relaxation

!!! chiave ""

    To obtain a LP relaxation of the ILP model,  we relax  constraints $\eqref{cons2_KP}$  with the following ones:

    \begin{align*}
    && x_j &\le 1,& \forall j \in \mathscr{I}, \label{cons2_KP_LP_bis} \tag{9.8a}\\[2ex]
    &&  x_j &\ge 0,& \forall j \in \mathscr{I}. \label{cons2_KP_LP_tris} \tag{9.8b}
    \end{align*}

    The obtained LP model is referred to as the $\mathrm{LP}_{\mathrm{KP}}$ model.

<a id="box-6-texexp_lp_kp"></a>

!!! esempio "Example 9.4: $\mathrm{LP}_{\mathrm{KP}}$ model"

    The  $\mathrm{LP}_{\mathrm{KP}}$ model for the KP instance of <span style="color:#1971c2">Example 1</span> is:

    $$
    \begin{array}{rrrrrrrrrrrrr}
    {\max} & 6 \, {x_1} & + 5 \, {x_2} & + 8 \, {x_3} & + 9 \, {x_4} & + 6 \, {x_5} & + 7 \, {x_6} \\[1ex]
    \text{subject to} & 2 \, {x_1} & + 3 \, {x_2} & + 6 \, {x_3} & + 7 \, {x_4} & + 5 \, {x_5} & + 9 \, {x_6} & {\le} & 9 \\[1ex]
    & {x_1} &  &  &  &  &  & {\le} & 1 \\
    &  & {x_2} &  &  &  &  & {\le} & 1 \\
    &  &  & {x_3} &  &  &  & {\le} & 1 \\
    &  &  &  & {x_4} &  &  & {\le} & 1 \\
    &  &  &  &  & {x_5} &  & {\le} & 1 \\
    &  &  &  &  &  & {x_6} & {\le} & 1 \\[1ex]
    & {x_1}, & {x_2}, & {x_3}, & {x_4}, & {x_5}, & {x_6} & { \ge} & { 0}
    \end{array}
    $$

    An optimal solution $~{\tilde{\vet x}}(\mathrm{LP}_{\mathrm{KP}})$  is:

    $$
    \tilde{x}_1=\tilde{x}_2=1,~~\tilde{x}_3=\frac{2}{3},~~\tilde{x}_4=\tilde{x}_5=\tilde{x}_6=0
    $$

    The optimal value $z(\mathrm{LP}_{\mathrm{KP}})$  is $\frac{49}{3}$.

    Accordingly we have the upper bound:

    $$
    z(\mathrm{ILP}_{\mathrm{KP}}) \le \frac{49}{3}
    $$

!!! chiave ""

    Using a non-negative dual variable $\pi$ for the constraint $\eqref{cons1_KP}$ and a non-negative dual variable $\mu_j$ for each constraint $\eqref{cons2_KP_LP_bis}$, the dual model of the $\mathrm{LP}_{\mathrm{KP}}$ model is:

    <a id="eq-DUAL"></a>

    \begin{align*}
    &&   \min \;\; c \, \pi + \;\;{\sum_{j \in \mathscr{I}}  \mu_j}                               \label{eq:KP-obj_LP_D}  \tag{9.9a}\\[2ex]
    && \text{subject to} \quad  w_j \, \pi + \mu_j  &\geq p_j, & \forall j \in \mathscr{I},                       \label{eq:KP-cap_LP_D}  \tag{9.9b}\\[2ex]
    &&\pi                        &\ge  0,\label{eq:KP-cont1_LP_D} \tag{9.9c}\\[2ex]
    &&\mu_j                        &\ge  0, & \forall j \in \mathscr{I}. \label{eq:KP-cont2_LP_D} \tag{9.9d}
    \end{align*}

<a id="box-7-texexp_dlp_kp"></a>

!!! esempio "Example 9.5: $D(\mathrm{LP}_{\mathrm{KP}})$ model"

    The  dual $D(\mathrm{LP}_{\mathrm{KP}})$ model for the KP instance of <span style="color:#1971c2">Example 1</span> is:

    $$
    \begin{array}{rrrrrrrrrrrrrrrr}
    {\min} & 9 \, {\pi} & + {\mu_1} & + {\mu_2} & + {\mu_3} & + {\mu_4} & + {\mu_5} & + {\mu_6} \\[1ex]
    & 2 \, {\pi} & + {\mu_1} &  &  &  &  &  & {\ge} & 6 \\[1ex]
    & 3 \, {\pi} &  & + {\mu_2} &  &  &  &  & {\ge} & 5 \\[1ex]
    & 6 \, {\pi} &  &  & + {\mu_3} &  &  &  & {\ge} & 8 \\[1ex]
    & 7 \, {\pi} &  &  &  & + {\mu_4} &  &  & {\ge} & 9 \\[1ex]
    & 5 \, {\pi} &  &  &  &  & + {\mu_5} &  & {\ge} & 6 \\[1ex]
    & 9 \, {\pi} &  &  &  &  &  & + {\mu_6} & {\ge} & 7 \\[1ex]
    & {\pi,} & {\mu_1}, & {\mu_2}, & {\mu_3}, & {\mu_4}, & {\mu_5}, & {\mu_6} & { \ge} & { 0}
    \end{array}
    $$

    An optimal solution $(\tilde{\pi},\tilde{\vet \mu})(D(\mathrm{LP}_{\mathrm{KP}}))$  is:

    $$
    \tilde{\pi}=\frac{4}{3},~~~~~\tilde{\mu}_1=\frac{10}{3},~~~\tilde{\mu}_2=1,~~~\tilde{\mu}_3=\tilde{\mu}_4=\tilde{\mu}_5=\tilde{\mu}_6=0
    $$

    The optimal value $z(D(\mathrm{LP}_{\mathrm{KP}}))$  is $\frac{49}{3}$.

### 9.3.1 Item efficiency

<a id="box-8-defEff"></a>

!!! definizione "Definition 9.3: efficiency"

    The <strong>efficiency</strong> of an item $j \in \mathscr{I}$ is defined as the ratio between its profit and its weight:

    \begin{equation*}
    \label{eq:efficiency}
    \frac{p_j}{w_j} \tag{9.10}
    \end{equation*}

- The efficiency of an item is a measure of its profitability per unit of weight: it indicates how much profit is gained for each unit of weight.

<a id="box-9-texexp_eff_kp"></a>

!!! esempio "Example 9.6: item efficiencies"

    Let us consider the KP instance of <span style="color:#1971c2">Example 1</span>. We have:

    <div class="tabella" markdown="0"><table>
    <tr>
    <th>Items</th>
    <th></th>
    <th><span class="arithmatex">\(j=1\)</span></th>
    <th><span class="arithmatex">\(j=2\)</span></th>
    <th><span class="arithmatex">\(j=3\)</span></th>
    <th><span class="arithmatex">\(j=4\)</span></th>
    <th><span class="arithmatex">\(j=5\)</span></th>
    <th><span class="arithmatex">\(j=6\)</span></th>
    </tr>
    <tr>
    <td>Profits</td>
    <td><span class="arithmatex">\(p_j\)</span></td>
    <td><span class="arithmatex">\(6\)</span></td>
    <td><span class="arithmatex">\(5\)</span></td>
    <td><span class="arithmatex">\(8\)</span></td>
    <td><span class="arithmatex">\(9\)</span></td>
    <td><span class="arithmatex">\(6\)</span></td>
    <td><span class="arithmatex">\(7\)</span></td>
    </tr>
    <tr>
    <td>Weights</td>
    <td><span class="arithmatex">\(w_j\)</span></td>
    <td><span class="arithmatex">\(2\)</span></td>
    <td><span class="arithmatex">\(3\)</span></td>
    <td><span class="arithmatex">\(6\)</span></td>
    <td><span class="arithmatex">\(7\)</span></td>
    <td><span class="arithmatex">\(5\)</span></td>
    <td><span class="arithmatex">\(9\)</span></td>
    </tr>
    <tr>
    <td>Efficiencies</td>
    <td><span class="arithmatex">\(\frac{p_j}{w_j}\)</span></td>
    <td><span class="arithmatex">\(3\)</span></td>
    <td><span class="arithmatex">\(\frac{5}{3}\)</span></td>
    <td><span class="arithmatex">\(\frac{4}{3}\)</span></td>
    <td><span class="arithmatex">\(\frac{9}{7}\)</span></td>
    <td><span class="arithmatex">\(\frac{6}{5}\)</span></td>
    <td><span class="arithmatex">\(\frac{7}{9}\)</span></td>
    </tr>
    </table></div>

    The items are sorted by non-increasing efficiency, since:

    $$
    3 ~~\ge~~ \frac{5}{3} ~~\ge~~ \frac{4}{3} ~~\ge~~ \frac{9}{7} ~~\ge~~ \frac{6}{5} ~~\ge~~ \frac{7}{9}
    $$

!!! chiave ""

    Sorting the items by non-increasing efficiency requires a sorting algorithm with running time $O(n \log n)$, which is a polynomial function of the number $n$ of items.

### 9.3.2 Split item and residual capacity

<a id="box-10-defSplit"></a>

!!! definizione "Definition 9.4: split item and residual capacity"

    Given a set $\mathscr{I}=\{1,2,\dots,n\}$ of $n$ items  ordered by non-increasing efficiency, the <strong>split item</strong> is the item

    \begin{equation*}
    {s} \in \mathscr{I}
    ~~~~\text{such that }~~~~
    \sum_{j=1}^{s-1} w_j \leq c
    ~~~~\text{and }~~~~
    \sum_{j=1}^{s} w_j > c
    \label{split_item} \tag{9.11}
    \end{equation*}

    and the <strong>residual capacity</strong>  is

    \begin{equation*}
    \mathit{rc} = c - \sum_{j=1}^{s-1} w_j
    \label{res_cap} \tag{9.12}
    \end{equation*}

- The split item is the first one that does not fit entirely in the knapsack if all the previous ones are selected. It is also called <strong>break item</strong> or <strong>critical item</strong>, and it can be written as

    \begin{equation*}
    s = \min \left\{ j \in \mathscr{I} : \sum_{k=1}^{j} w_k > c \right\}
    \end{equation*}

- The residual capacity is the knapsack capacity remaining when all the items that precede the split item are selected. It satisfies $0 \le \mathit{rc} < w_s$.

<a id="box-11-texexp_split_kp"></a>

!!! esempio "Example 9.7: split item and residual capacity"

    For the KP instance of <span style="color:#1971c2">Example 1</span>, the split item is $s=3$ since:

    $$
    \sum_{j=1}^{2} w_j = 2+3= 5 \le 9 \text{   and   } \sum_{j=1}^{3} w_j = 2+3 + 6= 11 > 9
    $$

    and the  residual capacity is:

    $$
    \mathit{rc} = c - \sum_{j=1}^{2} w_j = 9 - 2 - 3 = 4
    $$

- The following proposition provides formulas to compute an optimal solution of the primal $\mathrm{LP}_{\mathrm{KP}}$ model and of the dual $D(\mathrm{LP}_{\mathrm{KP}})$ model.

<a id="box-12-propLPKP"></a>

!!! teorema "Proposition 9.5"

    If the items are sorted  by non-increasing efficiency, an optimal solution of the primal $\mathrm{LP}_{\mathrm{KP}}$ model is:

    \begin{equation*}
    \label{PP}
    \tilde{x}_j=1, \quad \forall j \in \{1,2,\dots, s-1\}  , ~~~~
    \tilde{x}_s= \frac{\mathit{rc}}{w_s}
    \text{   and   }
    \tilde{x}_j=0,  \quad \forall j\in\{s+1,s+2,\dots, n\}, \tag{9.13}
    \end{equation*}

    and an optimal  solution of the dual  $D(\mathrm{LP}_{\mathrm{KP}})$ model is:

    \begin{equation*}
    \label{DD}
    \tilde{\pi}= \frac{p_s}{w_s}, \qquad
    \tilde{\mu}_j = p_j  - w_j \; \frac{p_s}{w_s},~~ \forall j \in \{1,2,\dots, s - 1\}
    \text{   and   }
    \tilde{\mu}_j = 0,~~ \forall j \in \{s,s+1,\dots, n\}. \tag{9.14}
    \end{equation*}

<a id="box-13-corLPKP"></a>

!!! teorema "Corollary 9.6"

    The optimal value of the primal $\mathrm{LP}_{\mathrm{KP}}$ and dual $D(\mathrm{LP}_{\mathrm{KP}})$ models is:

    \begin{equation*}
    \label{VAL}
    z(\mathrm{LP}_{\mathrm{KP}})
    =
    \sum_{j=1}^{s-1} p_j
    +
    p_s \frac{\mathit{rc}}{w_s}
    =
    z(D(\mathrm{LP}_{\mathrm{KP}})) \tag{9.15}
    \end{equation*}

- The proof proceeds in three steps:

    1. We show that $\eqref{PP}$ is a feasible solution for the primal $\mathrm{LP}_{\mathrm{KP}}$ model;

    2. We show that $\eqref{DD}$ is a feasible solution for the dual $D(\mathrm{LP}_{\mathrm{KP}})$ model;

    3. We show that both feasible solutions have the same objective function value.

    Therefore, by LP Strong Duality, $\eqref{PP}$ and $\eqref{DD}$ are a pair of optimal primal and dual solutions.

??? dimostrazione "Proof"

    - **1.** We have:

        $$
        {\sum_{j \in \mathscr{I}} w_j \, \tilde{x}_j} = \sum_{j=1}^{s-1} w_j + w_s \frac{\mathit{rc}}{w_s} = \sum_{j=1}^{s-1} w_j + c - \sum_{j=1}^{s-1} w_j = c
        $$

        thus,  constraint $\eqref{cons1_KP}$ is satisfied.

        Since $\mathit{rc} < w_s$, we have $0 \le \tilde{x}_j \le 1$, for every $j \in \mathscr{I}$.  Accordingly,  constraints $\eqref{cons2_KP_LP_bis}$  and $\eqref{cons2_KP_LP_tris}$  are satisfied.

        Therefore, $\eqref{PP}$ is a feasible solution for the primal $\mathrm{LP}_{\mathrm{KP}}$ model.

    <p class="qed-riga"><span class="qed">□</span></p>

??? dimostrazione "Proof"

    - **2.** For every  $j \in \{1,2,\dots, s-1\}$, we have:

        $$
        w_j \, \tilde{\pi} + \tilde{\mu}_j = w_j \; \frac{p_s}{w_s } + \bigg(p_j  - w_j \; \frac{p_s}{w_s }\bigg) = p_j
        $$

        and, for every  $j \in \{s,s+1\dots, n\}$, we have:

        $$
        w_j \, \tilde{\pi} + \tilde{\mu}_j = w_j \; \frac{p_s}{w_s }   \ge p_j \text{     since      }   \frac{p_s}{w_s }   \ge \frac{p_j}{w_j}
        $$

        thus constraints $\eqref{eq:KP-cap_LP_D}$ are satisfied.

        We have $\tilde{\pi} \ge 0$. For every  $j \in \{1,2,\dots, s - 1\}$, we have:

        $$
        p_j  - w_j \; \frac{p_s}{w_s} \ge 0  \text{     since      }   \frac{p_j}{w_j}    \ge \frac{p_s}{w_s }
        $$

        accordingly, $\tilde{\mu}_j \ge  0$ for every $j \in \mathscr{I}$. Thus constraint $\eqref{eq:KP-cont1_LP_D}$ and constraints $\eqref{eq:KP-cont2_LP_D}$ are satisfied.

        Therefore, $\eqref{DD}$ is a feasible solution for the dual $D(\mathrm{LP}_{\mathrm{KP}})$ model.

    - **3.** For the objective functions we have:

        \begin{align*}
        {\sum_{j \in \mathscr{I}} p_j \, \tilde{x}_j} & = \sum_{j=1}^{s-1} p_j + p_s \; \frac{\mathit{rc}}{w_s}\\[1.5ex]
        &=   \sum_{j=1}^{s-1} p_j + \frac{p_s}{w_s} \; \left(c - \sum_{j=1}^{s-1} w_j \right)\\[1.5ex]
        &= c \; \frac{p_s}{w_s} +  \sum_{j=1}^{s-1} \left( p_j  - w_j \; \frac{p_s}{w_s} \right) \\[1.5ex]
        &=c \, \tilde{\pi} + \;\;{\sum_{j \in \mathscr{I}}  \tilde{\mu}_j}
        \end{align*}

        thus the primal and dual objective function values are equal.

    Therefore, by LP Strong Duality, $\eqref{PP}$ and $\eqref{DD}$ are a pair of optimal primal and dual solutions. <span class="qed">□</span>

!!! chiave ""

    In the majority of KP instances the ratio between $z(\mathrm{LP}_{\mathrm{KP}})$ and $z(\mathrm{ILP}_{\mathrm{KP}})$ slightly exceeds one: $z(\mathrm{LP}_{\mathrm{KP}})$ typically is a tight upper bound for $z(\mathrm{ILP}_{\mathrm{KP}})$.

- We report an alternative proof for the formulas $\eqref{PP}$. We proceed by contradiction, proving that a different solution cannot be optimal.

- In this proof we assume that items with the same efficiency are merged into a single item. As we are allowed to choose any fraction of an item, this does not change the problem, and we avoid discussing symmetric solutions.

??? dimostrazione "Proof"

    Assume $\bar{\vet x}=(\bar{x}_1,\bar{x}_2,\dots,\bar{x}_n)$ is an optimal solution of $\mathrm{LP}_{\mathrm{KP}}$ different from $\tilde{\vet x}= (\tilde{x}_1,\tilde{x}_2,\dots,\tilde{x}_n)$ determined with formulas $\eqref{PP}$. Every optimal solution of $\mathrm{LP}_{\mathrm{KP}}$ has a total weight equal to $c$, i.e., constraint $\eqref{cons1_KP}$ is satisfied at equality (otherwise it can be improved).

    Assume that no pair of items $h<k$ exists with $\bar{x}_h<1$ and $\bar{x}_k>0$. Then $\bar{\vet x}$ selects the items in order of efficiency, filling the knapsack item by item up to the weight $c$: this is exactly $\tilde{\vet x}$, a contradiction. Hence such a pair of items $h<k$ exists (the case $k=s$ is included).

    Let:

    $$
    d= \min \big\{ ~~w_k \: \bar{x}_k~,~ w_h\;(1-\bar{x}_h) ~~\big\} > 0
    $$

    Construct a new feasible solution  $\hat{\vet x} = (\hat{x}_1,\hat{x}_2,\dots, \hat{x}_n)$ which is identical to $\bar{\vet x}$ except that:

    $$
    \hat{x}_k= \bar{x}_k - \frac{d}{w_k} \ge 0 \text{     and   } \hat{x}_h=\bar{x}_h + \frac{d}{w_h} \le 1
    $$

    Notice that $\hat{x}_k \ge 0$ and $\hat{x}_h \le 1$ due to the definition of $d$, and $\hat{\vet x}$ is a feasible solution since:

    $$
    \sum_{j \in \mathscr{I}} w_j \: \hat{x}_j = \sum_{j \in \mathscr{I}} w_j \: \bar{x}_j +w_h \: \frac{d}{w_h} - w_k \: \frac{d}{w_k} =  \sum_{j \in \mathscr{I}} w_j \: \bar{x}_j = c
    $$

    The objective function value of $\hat{\vet x}$ is:

    $$
    \sum_{j \in \mathscr{I}} p_j \: \hat{x}_j = \sum_{j \in \mathscr{I}} p_j \: \bar{x}_j + d \: \underbrace{\left( \frac{p_h}{w_h} - \frac{p_k}{w_k} \right)}_{>0 \text{  since  } \frac{p_h}{w_h} > \frac{p_k}{w_k}}>  \sum_{j \in \mathscr{I}} p_j \: \bar{x}_j
    $$

    Then the objective function value of $\hat{\vet x}$  is larger than the objective function value of $\bar{\vet x}$, contradicting the fact that $\bar{\vet x}$ is an optimal solution.

    The strict inequality $p_h/w_h > p_k/w_k$ holds for every $h<k$, since items with the same efficiency have been merged. <span class="qed">□</span>

<a id="box-14-texexp_pd_kp"></a>

!!! esempio "Example 9.8: Primal and dual LP solutions"

    For the KP instance of <span style="color:#1971c2">Example 1</span>,  we have $s=3$ and $\mathit{rc} = 4$.

    Using formulas  $\eqref{PP}$, we can compute the following optimal solution of the $\mathrm{LP}_{\mathrm{KP}}$ model:

    $$
    \tilde{x}_1=\tilde{x}_2=1,~~\tilde{x}_3=\frac{2}{3},~~\tilde{x}_4=\tilde{x}_5=\tilde{x}_6=0
    $$

    Using formulas  $\eqref{DD}$,  we can compute the following optimal solution of the $D(\mathrm{LP}_{\mathrm{KP}})$ model:

    $$
    \tilde{\pi}=\frac{4}{3},~~~~~\tilde{\mu}_1=6- 2\; \frac{4}{3}=\frac{10}{3},~~~\tilde{\mu}_2=5 - 3\; \frac{4}{3}= 1,~~~\tilde{\mu}_3=\tilde{\mu}_4=\tilde{\mu}_5=\tilde{\mu}_6=0
    $$

    Using formula  $\eqref{VAL}$,  the optimal value of both LP models, primal and dual,  is:

    $$
    \sum_{j=1}^{2} p_j + p_s \frac{\mathit{rc}}{w_s} = 6+5 + 8 \; \frac{2}{3} = \frac{49}{3}
    $$

### 9.3.3 Some important theoretical properties

- The following two propositions show that the ratio between $z(\mathrm{LP}_{\mathrm{KP}})$ and $z(\mathrm{ILP}_{\mathrm{KP}})$ is at most two for all KP instances. Furthermore, there exist instances for which the value two can be asymptotically achieved as the capacity $c \to +\infty$.

<a id="box-15-propRatio2"></a>

!!! teorema "Proposition 9.7"

    For every KP instance, we have:

    \begin{equation*}
    \frac{z(\mathrm{LP}_{\mathrm{KP}})}{z(\mathrm{ILP}_{\mathrm{KP}})} \le 2 \tag{9.16}
    \end{equation*}

??? dimostrazione "Proof"

    We consider two feasible solutions of the $\mathrm{ILP}_{\mathrm{KP}}$ model:

    1. The solution selecting all items preceding the split item:

        $$
        \bar{x}_j = 1, \quad \forall j \in \{1,2,\dots, s-1\}
        \quad
        \text{and}
        \quad
        \bar{x}_j = 0, \quad \forall j \in \{s, s+1, \dots, n\}
        $$

        which is feasible by definition of the split item, and provides the valid lower bound:

        $$
        \sum_{j=1}^{s-1} p_j \le z(\mathrm{ILP}_{\mathrm{KP}})
        $$

    2. The solution selecting only the split item:

        $$
        \bar{x}_j = 0, \quad \forall j \in \mathscr{I} \setminus \{s\} \quad
        \text{and}
        \quad
        \bar{x}_s = 1
        $$

        which is feasible by assumption that $w_s \le c$,  and provides the valid lower bound:

        $$
        p_s \le z(\mathrm{ILP}_{\mathrm{KP}})
        $$

    Adding the two inequalities yields:

    $$
    2 \; z(\mathrm{ILP}_{\mathrm{KP}})
    \ge \sum_{j=1}^{s-1} p_j + p_s
    \ge z(\mathrm{LP}_{\mathrm{KP}})
    $$

    and thus:

    $$
    \frac{z(\mathrm{LP}_{\mathrm{KP}})}{z(\mathrm{ILP}_{\mathrm{KP}})} \le 2
    $$

    <p class="qed-riga"><span class="qed">□</span></p>

<a id="box-16-propRatio2tight"></a>

!!! teorema "Proposition 9.8"

    There are KP instances such that:

    \begin{equation*}
    \frac{z(\mathrm{LP}_{\mathrm{KP}})}{z(\mathrm{ILP}_{\mathrm{KP}})} \to 2 \text{    as    } c \to +\infty \tag{9.17}
    \end{equation*}

??? dimostrazione "Proof"

    Given $\vartheta \in \Z_{\ge 1}$, consider the KP instance with knapsack capacity $c = 2\vartheta$ and $n = 2$ items having the following profits and weights:

    $$
    p_1 = 1, \quad w_1 = \vartheta + 1 \qquad \text{and} \qquad p_2 = 1, \quad w_2 = \vartheta + 1
    $$

    Since only one item can be selected, an optimal solution ${\tilde{\vet x}}(\mathrm{ILP}_{\mathrm{KP}})$ of the $\mathrm{ILP}_{\mathrm{KP}}$ model is:

    $$
    \tilde{x}_1 = 1, \qquad \tilde{x}_2 = 0 \qquad \text{and} \qquad z(\mathrm{ILP}_{\mathrm{KP}}) = 1
    $$

    The split item is $s = 2$, and the residual capacity is:

    $$
    \mathit{rc} = 2\vartheta - (\vartheta + 1) = \vartheta - 1
    $$

    Accordingly, an optimal solution ${\tilde{\vet x}}(\mathrm{LP}_{\mathrm{KP}})$ of the $\mathrm{LP}_{\mathrm{KP}}$ model is:

    $$
    \tilde{x}_1 = 1, \qquad \tilde{x}_2 = \frac{\vartheta - 1}{\vartheta + 1} \qquad \text{and} \qquad z(\mathrm{LP}_{\mathrm{KP}}) = 1 + \frac{\vartheta - 1}{\vartheta + 1} = \frac{2\vartheta}{\vartheta + 1}
    $$

    It follows that:

    $$
    \lim_{\vartheta \to +\infty} \frac{z(\mathrm{LP}_{\mathrm{KP}})}{z(\mathrm{ILP}_{\mathrm{KP}})}
    = \lim_{\vartheta \to +\infty} \frac{\frac{2\vartheta}{\vartheta + 1}}{1}
    = \lim_{\vartheta \to +\infty} \frac{2\:(\vartheta+1)-2}{\vartheta+1} =\lim_{\vartheta \to +\infty} 2 - \underbrace{\frac{2}{\vartheta+1}}_{\to 0} = 2
    $$

    Accordingly, we conclude that:

    $$
    \frac{z(\mathrm{LP}_{\mathrm{KP}})}{z(\mathrm{ILP}_{\mathrm{KP}})} \to 2 \qquad \text{as} \qquad c \to +\infty
    $$

    <p class="qed-riga"><span class="qed">□</span></p>

## 9.4 Knapsack Problem upper bounds

- <strong>The following two propositions require that the items are sorted by non-increasing efficiency</strong>.

<a id="box-17-propDantzig"></a>

!!! teorema "Proposition 9.9: Dantzig upper bound"

    For every KP instance,  we have:

    \begin{equation*}
    \label{DANTZIG}
    z(\mathrm{ILP}_{\mathrm{KP}}) \le     \underbrace{\sum_{j=1}^{s-1} p_j  +  \left\lfloor p_s \;   \frac{\mathit{rc}}{w_s} \right\rfloor}_{\UB_{\mathrm{D}}} \tag{9.18}
    \end{equation*}

    and $\UB_{\mathrm{D}}$ is called the <strong>Dantzig upper bound</strong> for the KP.

??? dimostrazione "Proof"

    We have:

    $$
    \left\lfloor  z(\mathrm{LP}_{\mathrm{KP}}) \right\rfloor =  \left\lfloor \sum_{j=1}^{s-1} p_j + p_s \;   \frac{\mathit{rc}}{w_s} \right\rfloor = \sum_{j=1}^{s-1} p_j  +  \left\lfloor p_s \;   \frac{\mathit{rc}}{w_s} \right\rfloor
    $$

    which is a valid upper bound for $z(\mathrm{ILP}_{\mathrm{KP}})$ since $p_j \in \Z_{\ge 1}$,  for every $j \in \mathscr{I}$. <span class="qed">□</span>

- The Martello-Toth bound uses the items $s-1$ and $s+1$. Since $w_1 \le c$ and $\sum_{j} w_j > c$ we have $s \ge 2$, so the item $s-1$ always exists. If $s = n$ the item $s+1$ does not exist, and we set $p_{n+1}/w_{n+1} := 0$: in this case $\UB_0 = \sum_{j=1}^{s-1} p_j$.

<a id="box-18-propMT"></a>

!!! teorema "Proposition 9.10: Martello-Toth upper bound"

    For every KP instance,  we have:

    \begin{equation*}
    \label{boundMT}
    z(\mathrm{ILP}_{\mathrm{KP}}) \le  \UB_{\mathrm{MT}} = \max \bigg\{~~\UB_0,~~ \UB_1 ~~\bigg\} \tag{9.19}
    \end{equation*}

    where

    \begin{align*}
    \UB_0 &= \sum_{j=1}^{s - 1} p_j + \left\lfloor \mathit{rc} \;  \frac{p_{s+1}}{w_{s+1}} \right\rfloor\\[2ex]
    \UB_1 &= \sum_{j=1}^{s - 1} p_j + \left\lfloor p_{s} - (w_{s} - \mathit{rc}) \;  \frac{p_{s-1}}{w_{s-1}} \right\rfloor
    \end{align*}

    and $\UB_{\mathrm{MT}}$ is called the <strong>Martello-Toth upper bound</strong> for the KP.

??? dimostrazione "Proof"

    Since  $x_s$  cannot take a fractional value,  an optimal solution ${\tilde{\vet x}}(\mathrm{ILP}_{\mathrm{KP}})$  can be obtained from  an optimal solution ${\tilde{\vet x}}(\mathrm{LP}_{\mathrm{KP}})$  either without the split item $s$  or with  the split item $s$  and hence removing at least one of the first $s-1$ items.

    1. If the split item is out,  we have $z(\mathrm{ILP}_{\mathrm{KP}}) \le \UB_0$ since the residual capacity $\mathit{rc}$ is filled with items having the largest possible efficiency  $\frac{p_{s+1}}{w_{s+1}}$

    2. If the split item is in,  we have $z(\mathrm{ILP}_{\mathrm{KP}}) \le \UB_1$ since it is supposed that the item to be removed has exactly the minimum necessary weight $w_s- \mathit{rc}$ and the smallest possible efficiency  $\frac{p_{s-1}}{w_{s-1}}$ <span class="qed">□</span>

<a id="box-19-texexp_ub_kp"></a>

!!! esempio "Example 9.9: Dantzig and Martello-Toth upper bound"

    For the KP instance of <span style="color:#1971c2">Example 1</span>,  using formula $\eqref{DANTZIG}$,  we can compute the Dantzig upper bound:

    $$
    \UB_{\mathrm{D}} = \sum_{j=1}^{2} p_j + \left\lfloor p_3  \; \frac{\mathit{rc}}{w_3} \right\rfloor = 6+5 + \left\lfloor 8 ~ \frac{2}{3} \right\rfloor = 11 + \left\lfloor \frac{16}{3} \right\rfloor =16
    $$

    Using formula $\eqref{boundMT}$, we can compute the Martello-Toth upper bound:

    \begin{align*}
    \UB_0 &= \sum_{j=1}^{2} p_j + \left\lfloor \mathit{rc} \;   \frac{p_{4}}{w_{4}} \right\rfloor = 6+5 + \left\lfloor 4 ~ \frac{9}{7} \right\rfloor = 11 + \left\lfloor \frac{36}{7} \right\rfloor =16\\[2ex]
    \UB_1 &= \sum_{j=1}^{2} p_j + \left\lfloor p_{3} - (w_{3} - \mathit{rc}) \;  \frac{p_{2}}{w_{2}} \right\rfloor = 6+5 + \left\lfloor 8 -(6-4) \; \frac{5}{3} \right\rfloor = 11 + \left\lfloor  \frac{14}{3}  \right\rfloor =15\\[2ex]
    \UB_{\mathrm{MT}} &= \max \bigg\{~~\UB_0,~~ \UB_1 ~~\bigg\}  = \max \bigg\{~~16,~~ 15 ~~\bigg\} =16
    \end{align*}

    For this KP instance, the Martello-Toth upper bound is as strong as the Dantzig upper bound.

## 9.5 Typical mistakes

!!! attenzione "Warning"

    - <strong>Forgetting to sort the items.</strong> The formulas $\eqref{PP}$, $\eqref{DD}$ and the bounds hold only if the items are sorted by non-increasing efficiency: with another order the vector $\eqref{PP}$ is feasible but not optimal.

    - <strong>Using $z(\mathrm{LP}\text{-}0_{\mathrm{KP}})$ as the bound.</strong> The first relaxation has no upper bounds on the variables, and it is much weaker: in Example 1 it gives $27$, against $\tfrac{49}{3}$ for the second relaxation.

    - <strong>Rounding when the profits are not integer.</strong> The bounds $\UB_{\mathrm{D}}$ and $\UB_{\mathrm{MT}}$ round down the fractional part: this is valid only because all the profits are integer.

    - <strong>Confusing the split item with the last selected item.</strong> The split item $s$ is the first item that does <u>not</u> fit: in Example 1 it is $s=3$, while the items $1$ and $2$ are selected entirely.

    - <strong>Assuming that the LP optimum is unique.</strong> With items of equal efficiency the $\mathrm{LP}_{\mathrm{KP}}$ problem has other optimal solutions; the formulas $\eqref{PP}$ give one of them.

## 9.6 In summary

!!! chiave "In summary"

    - The $\mathrm{ILP}_{\mathrm{KP}}$ model has one binary variable per item, one capacity constraint and the objective of maximizing the total profit.

    - The relaxation $\mathrm{LP}_{\mathrm{KP}}$ is solved by sorting the items by non-increasing efficiency: the items before the split item are selected, the split item is taken fractionally, the others are discarded.

    - The dual of $\mathrm{LP}_{\mathrm{KP}}$ has the optimal solution $\tilde{\pi} = p_s/w_s$, and $z(\mathrm{LP}_{\mathrm{KP}})$ is never larger than twice $z(\mathrm{ILP}_{\mathrm{KP}})$.

    - Rounding down $z(\mathrm{LP}_{\mathrm{KP}})$ gives the Dantzig bound; the Martello-Toth bound considers separately the split item out and in.

    <strong>Dashboard of Example 1.</strong> Upper bounds on $z(\mathrm{ILP}_{\mathrm{KP}})$ computed in this chapter:

    <div class="tabella" markdown="0"><table>
    <tr>
    <th>Bound</th>
    <th>Value</th>
    <th>From</th>
    </tr>
    <tr>
    <td>First relaxation</td>
    <td><span class="arithmatex">\(27\)</span></td>
    <td><span class="arithmatex">\(z(\mathrm{LP}\text{-}0_{\mathrm{KP}})\)</span>, item <span class="arithmatex">\(1\)</span> with <span class="arithmatex">\(\tfrac{9}{2}\)</span> copies</td>
    </tr>
    <tr>
    <td>Second relaxation</td>
    <td><span class="arithmatex">\(\tfrac{49}{3}\)</span></td>
    <td><span class="arithmatex">\(z(\mathrm{LP}_{\mathrm{KP}})\)</span>, split item <span class="arithmatex">\(s=3\)</span></td>
    </tr>
    <tr>
    <td>Dantzig bound</td>
    <td><span class="arithmatex">\(16\)</span></td>
    <td><span class="arithmatex">\(\lfloor \tfrac{49}{3} \rfloor\)</span></td>
    </tr>
    <tr>
    <td>Martello-Toth bound</td>
    <td><span class="arithmatex">\(16\)</span></td>
    <td><span class="arithmatex">\(\max\{16, 15\}\)</span></td>
    </tr>
    <tr>
    <td>Optimal value</td>
    <td><span class="arithmatex">\(15\)</span></td>
    <td>solution <span class="arithmatex">\(\{1,4\}\)</span> of the <span class="arithmatex">\(\mathrm{ILP}_{\mathrm{KP}}\)</span> model</td>
    </tr>
    </table></div>

    The gap between the best upper bound ($16$) and the optimal value ($15$) is closed by the exact algorithms of the following chapters.

---

**Exercises on this chapter:** [:material-pencil: Knapsack](../exercises/knapsack-formulations.md)
