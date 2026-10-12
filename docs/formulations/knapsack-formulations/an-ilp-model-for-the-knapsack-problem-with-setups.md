---
title: "Knapsack with setups"
---

# 9.12 An ILP model for the Knapsack Problem with Setups { #sez-sec-kpf-KPS }

<div class="info-capitolo" markdown>

**Part 2 · Formulations and their properties · Chapter 9** · [:material-book-open-variant: Chapter 9: Knapsack problems](index.md) · [:material-file-pdf-box: Lecture notes, volume 2 (PDF)](../../pdf/lecture-notes-2-formulations.pdf) · [:material-pencil: Exercises: Knapsack problems](../../exercises/knapsack-formulations.md)

</div>

The Knapsack Problem with Setups and its reference instance (Example 2.8) are defined in [Chapter 2 «Knapsack problems», Section 2.9](https://fabiofurini.github.io/combinatorial-optimization/combinatorial-optimization-problems/knapsack/the-knapsack-problem-with-setups/).

- We introduce the following  $n$ <strong>binary variables</strong>:

    \begin{equation*}
    \label{BIN_VAR_KPS}
    x_j = \left\{ \begin{array}{ll}
    1 & \textrm{if item $j$ is selected in the knapsack}\\[1.5ex]
    0 & \textrm{otherwise}
    \end{array} \qquad \forall j \in \mathscr{I}. \right. \tag{9.32}
    \end{equation*}

- We introduce the following  $q$ <strong>binary variables</strong>:

    \begin{equation*}
    \label{BIN_VAR_KPS_Y}
    y_h = \left\{ \begin{array}{ll}
    1 & \textrm{if class $h$ is activated (its setup is paid)}\\[1.5ex]
    0 & \textrm{otherwise}
    \end{array} \qquad \forall h \in \{1,2,\dots,q\}. \right. \tag{9.33}
    \end{equation*}

!!! chiave ""

    Using these variables, an Integer Linear Programming (ILP) model for the Knapsack Problem with Setups (KPS) reads as follows:

    <a id="eq-NAT_KPS"></a>

    \begin{align*}
    &&   \max \;\;{\sum_{j \in \mathscr{I}} p_j \, x_j - \sum_{h=1}^{q} f_h \, y_h}                               \label{obj_KPS}  \tag{9.34a}\\[1ex]
    && \text{subject to} \quad  {\sum_{j \in \mathscr{I}} w_j \, x_j + \sum_{h=1}^{q} s_h \, y_h}  &\leq c,                       \label{cons1_KPS}  \tag{9.34b}\\[1ex]
    && x_j  &\leq y_h, & \forall h \in \{1,2,\dots,q\},~\forall j \in \mathscr{J}_h,                       \label{cons2_KPS}  \tag{9.34c}\\[1ex]
    &&x_j                        &\in  \{0,1\}, & \forall j \in \mathscr{I}, \label{cons3_KPS}  \tag{9.34d}\\[1ex]
    &&y_h                        &\in  \{0,1\}, & \forall h \in \{1,2,\dots,q\}. \label{cons4_KPS} \tag{9.34e}
    \end{align*}

    This ILP model is referred to as the $\mathrm{ILP}_{\mathrm{KPS}}$ model.

- Description of the objective function and constraints of the $\mathrm{ILP}_{\mathrm{KPS}}$ model:

    - the linear objective function $\eqref{obj_KPS}$ maximizes the total revenue of the selected items minus the setup costs of the activated classes;

    - constraint $\eqref{cons1_KPS}$ ensures that the total weight of the selected items plus the setup weights of the activated classes does not exceed the knapsack capacity (one linear constraint);

    - constraints $\eqref{cons2_KPS}$ ensure that an item can be selected only if its class is activated ($n$ linear constraints, one for each item);

    - finally, constraints $\eqref{cons3_KPS}$ and $\eqref{cons4_KPS}$ define the variables of the ILP model.

<a id="box-26-texexp_ilp_kps"></a>

!!! esempio "Example 9.16: $\mathrm{ILP}_{\mathrm{KPS}}$ model"

    We consider a knapsack of capacity $c = 20$ and a set $\mathscr{I} = \{1,2,3,4,5,6\}$ of $6$ items ($n = 6$), partitioned into $q = 2$ classes $\mathscr{J}_1 = \{1,2,3\}$ and $\mathscr{J}_2 = \{4,5,6\}$, with setup costs $f_1 = 3$, $f_2 = 4$, setup weights $s_1 = 2$, $s_2 = 3$, and the following revenues and weights:

    $$
    \begin{array}{l|rrrrrrr}
    \hline  & {j = 1} & {j = 2} & {j = 3} & {j = 4} & {j = 5} & {j = 6} \\
    \hline {p_j} & {6} & {8} & {5} & {7} & {9} & {4} \\
    {w_j} & {4} & {5} & {3} & {6} & {7} & {2} \\
    \hline
    \end{array}
    $$

    This is the KPS instance of Example 2.8. The  $\mathrm{ILP}_{\mathrm{KPS}}$ model for this KPS instance is:

    $$
    \begin{array}{rrrrrrrrrrr}
    {\max} & 6 \, {x_1} & + 8 \, {x_2} & + 5 \, {x_3} & + 7 \, {x_4} & + 9 \, {x_5} & + 4 \, {x_6} & {-} 3 \, {y_1} & {-} 4 \, {y_2} &  &  \\[0.5ex]
    \text{subject to} & 4 \, {x_1} & + 5 \, {x_2} & + 3 \, {x_3} & + 6 \, {x_4} & + 7 \, {x_5} & + 2 \, {x_6} & + 2 \, {y_1} & + 3 \, {y_2} & {\le} & 20 \\[0.5ex]
    & {x_1} &  &  &  &  &  & {-} {y_1} &  & {\le} & 0 \\[0.5ex]
    &  & {x_2} &  &  &  &  & {-} {y_1} &  & {\le} & 0 \\[0.5ex]
    &  &  & {x_3} &  &  &  & {-} {y_1} &  & {\le} & 0 \\[0.5ex]
    &  &  &  & {x_4} &  &  &  & {-} {y_2} & {\le} & 0 \\[0.5ex]
    &  &  &  &  & {x_5} &  &  & {-} {y_2} & {\le} & 0 \\[0.5ex]
    &  &  &  &  &  & {x_6} &  & {-} {y_2} & {\le} & 0 \\[0.5ex]
    & {x_1}, & {x_2}, & {x_3}, & {x_4}, & {x_5}, & {x_6} &  &  & { \in} & { \{0,1\}} \\[0.5ex]
    &  &  &  &  &  &  & {y_1}, & {y_2} & { \in} & { \{0,1\}}
    \end{array}
    $$

    An optimal solution $~{\tilde{\vet x}}(\mathrm{ILP}_{\mathrm{KPS}})$, $~{\tilde{\vet y}}(\mathrm{ILP}_{\mathrm{KPS}})$  is:

    $$
    \tilde x_1=\tilde x_2=\tilde x_3=1,~~\tilde x_4=\tilde x_5=0,~~\tilde x_6=1,~~\tilde y_1=\tilde y_2=1
    $$

    The optimal value $z(\mathrm{ILP}_{\mathrm{KPS}})$  is $16$. The associated optimal solution of the KPS is $\tilde{S} =\{1,2,3,6\}$. The optimal solution is not unique: the subsets $\{1,2,3\}$ and $\{4,5,6\}$ have the same value.

## 9.13 Typical mistakes

!!! attenzione "Warning"

    - <strong>Forgetting to sort the items.</strong> The formulas [(9.13)](an-ilp-model-for-the-0-1-knapsack-problem.md#mjx-eqn:PP), [(9.14)](an-ilp-model-for-the-0-1-knapsack-problem.md#mjx-eqn:DD) and the bounds hold only if the items are sorted by non-increasing efficiency: with another order the vector [(9.13)](an-ilp-model-for-the-0-1-knapsack-problem.md#mjx-eqn:PP) is feasible but not optimal.

    - <strong>Using $z(\mathrm{LP}\text{-}0_{\mathrm{KP}})$ as the bound.</strong> The first relaxation has no upper bounds on the variables, and it is much weaker: in <span style="color:#1971c2">[Example 9.1](an-ilp-model-for-the-0-1-knapsack-problem.md#box-1-texexp_ilp_kp)</span> it gives $27$, against $\tfrac{49}{3}$ for the second relaxation.

    - <strong>Rounding when the profits are not integer.</strong> The bounds $\UB_{\mathrm{D}}$ and $\UB_{\mathrm{MT}}$ round down the fractional part: this is valid only because all the profits are integer.

    - <strong>Confusing the split item with the last selected item.</strong> The split item $s$ is the first item that does <u>not</u> fit: in <span style="color:#1971c2">[Example 9.1](an-ilp-model-for-the-0-1-knapsack-problem.md#box-1-texexp_ilp_kp)</span> it is $s=3$, while the items $1$ and $2$ are selected entirely.

    - <strong>Assuming that the LP optimum is unique.</strong> With items of equal efficiency the $\mathrm{LP}_{\mathrm{KP}}$ problem has other optimal solutions; the formulas [(9.13)](an-ilp-model-for-the-0-1-knapsack-problem.md#mjx-eqn:PP) give one of them.

    - <strong>Copying the $\mathrm{ILP}_{\mathrm{KP}}$ model to the variants.</strong> In the BKP and in the UKP the variables are integer, not binary; in the MCKP the class constraints [(9.31c)](an-ilp-model-for-the-multiple-choice-knapsack-problem.md#mjx-eqn:cons2_MCKP) are equalities; in the KPS, without the constraints $\eqref{cons2_KPS}$ the model selects items with $y_h = 0$ and never pays a setup.

## 9.14 In summary

!!! chiave "In summary"

    - The $\mathrm{ILP}_{\mathrm{KP}}$ model has one binary variable per item, one capacity constraint and the objective of maximizing the total profit.

    - The relaxation $\mathrm{LP}_{\mathrm{KP}}$ is solved by sorting the items by non-increasing efficiency: the items before the split item are selected, the split item is taken fractionally, the others are discarded.

    - The dual of $\mathrm{LP}_{\mathrm{KP}}$ has the optimal solution $\tilde{\pi} = p_s/w_s$, and $z(\mathrm{LP}_{\mathrm{KP}})$ is never larger than twice $z(\mathrm{ILP}_{\mathrm{KP}})$.

    - Rounding down $z(\mathrm{LP}_{\mathrm{KP}})$ gives the Dantzig bound; the Martello-Toth bound considers separately the split item out and in.

    - Each variant of [Chapter 2 «Knapsack problems»](https://fabiofurini.github.io/combinatorial-optimization/combinatorial-optimization-problems/knapsack/) changes one ingredient of the $\mathrm{ILP}_{\mathrm{KP}}$ model: integer variables (BKP, UKP), one capacity constraint per dimension (MDKP), one variable per item and knapsack (MKP), one equality per class (MCKP), setup variables $y_h$ with $x_j \le y_h$ (KPS); the SSP is the KP with $p_j = w_j$.

    <strong>Dashboard of <span style="color:#1971c2">[Example 9.1](an-ilp-model-for-the-0-1-knapsack-problem.md#box-1-texexp_ilp_kp)</span>.</strong> Upper bounds on $z(\mathrm{ILP}_{\mathrm{KP}})$ computed in this chapter:

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

**Exercises on this chapter:** [:material-pencil: Knapsack problems](../../exercises/knapsack-formulations.md)

