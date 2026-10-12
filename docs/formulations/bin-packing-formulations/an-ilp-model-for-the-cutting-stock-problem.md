---
title: "Cutting stock"
---

# 10.4 An ILP model for the Cutting Stock Problem

<div class="info-capitolo" markdown>

**Part 2 · Formulations and their properties · Chapter 10** · [:material-book-open-variant: Chapter 10: Packing problems](index.md) · [:material-file-pdf-box: Lecture notes, volume 2 (PDF)](../../pdf/lecture-notes-2-formulations.pdf) · [:material-pencil: Exercises: Packing problems](../../exercises/bin-packing-formulations.md)

</div>

The problem of this section is the Cutting Stock Problem (CSP), defined in [Chapter 3 «Packing problems»](https://fabiofurini.github.io/combinatorial-optimization/combinatorial-optimization-problems/bin-packing/the-cutting-stock-problem/), with its reference instance.

- Given an upper bound $m \in \Z_{\ge 2}$ on the number of bins used in any optimal CSP solution, we introduce the following $mn$ <strong>integer variables</strong>:

    $$
    x_{jb} = \text{number of copies of item $j$ packed in bin $b$}
    \qquad \forall j \in \mathscr{I},~~ \forall b \in \underbrace{\{1,2,\dots,m\}}_{=\mathscr{B}},
    $$

    and the following $m$ <strong>binary variables</strong>:

    $$
    y_b =
    \begin{cases}
    1 & \text{if bin } b \text{ is used} \\
    0 & \text{otherwise}
    \end{cases}
    \qquad \forall b \in \mathscr{B}.
    $$

    The total number $\sum_{j \in \mathscr{I}} d_j$ of copies is a valid value of $m$, and so is the number of bins of any feasible CSP solution.

!!! chiave ""

    Using these variables, an Integer Linear Programming (ILP) model for the Cutting Stock Problem (CSP) reads as follows:

    <a id="eq-NAT_CSP"></a>

    \begin{align*}
    && \min ~~ \sum_{b \in \mathscr{B}} y_b \label{obj_CSP}  \tag{10.19a}\\[2ex]
    && \text{subject to} \quad \sum_{b \in \mathscr{B}} x_{jb} &= d_j, & \forall j \in \mathscr{I}, \label{cons1_CSP}  \tag{10.19b}\\[2ex]
    && - \sum_{j \in \mathscr{I}}  w_j \; x_{jb} + c \; y_b &\geq 0, & \forall b \in \mathscr{B}, \label{cons2_CSP}  \tag{10.19c}\\[2ex]
    && x_{jb} &\in \Z_{\ge 0}, & \forall j \in \mathscr{I},~ \forall b \in \mathscr{B}, \label{cons3_CSP}  \tag{10.19d}\\[2ex]
    && y_b &\in \{0,1\}, & \forall b \in \mathscr{B}. \label{cons4_CSP} \tag{10.19e}
    \end{align*}

    This ILP model is referred to as the $\mathrm{ILP}_{\mathrm{CSP}}$ model.

- Description of the objective function and constraints of the $\mathrm{ILP}_{\mathrm{CSP}}$ model:

    - the linear objective function $\eqref{obj_CSP}$ minimizes the total number of used bins;

    - constraints $\eqref{cons1_CSP}$ ensure that exactly $d_j$ copies of each item $j$ are packed ($n$ linear constraints);

    - constraints $\eqref{cons2_CSP}$ link the integer variables with the activation variables and impose the capacity restrictions, as constraints [(10.1c)](index.md#mjx-eqn:cons2_BPP) of the $\mathrm{ILP}_{\mathrm{BPP}}$ model ($m$ linear constraints);

    - finally, constraints $\eqref{cons3_CSP}$ and $\eqref{cons4_CSP}$ define the variables of the ILP model.

- With $d_j=1$ for every item, constraints $\eqref{cons1_CSP}$ give $x_{jb}\in\{0,1\}$, and the $\mathrm{ILP}_{\mathrm{CSP}}$ model is the $\mathrm{ILP}_{\mathrm{BPP}}$ model.

- The copies of an item are identical: a single integer variable counts them in each bin. The $\mathrm{ILP}_{\mathrm{BPP}}$ model on the extended set of items would use $m\sum_{j} d_j$ binary variables instead of $mn$ integer ones.

<a id="box-15-texexpbox_ilp_csp"></a>

!!! esempio "Example 10.6: $\mathrm{ILP}_{\mathrm{CSP}}$ model"

    We consider bins of capacity $c = 10$ and a set $\mathscr{I} = \{1,2,3,4\}$ of $4$ items ($n=4$), with the following weights and required copies:

    $$
    \begin{array}{l|cccc}
    \hline  & {j=1} & {j=2} & {j=3} & {j=4} \\[1ex]
    \hline {w_j} & {4} & {5} & {3} & {6} \\[1ex]
    {d_j} & {2} & {1} & {3} & {1} \\[1ex]
    \hline
    \end{array}
    $$

    This is the CSP instance of the chapter «Packing problems», where a solution with $3$ bins is found by eye: hence $m=3$ is a valid upper bound. The $\mathrm{ILP}_{\mathrm{CSP}}$ model with $m=3$ for this CSP instance is:

    $$
    \begin{array}{rlcl}
    {\min} & {y_1+y_2+y_3} &  &  \\[1ex]
    \text{subject to} & {x_{11}+x_{12}+x_{13}} & {=} & {2} \\
    & {x_{21}+x_{22}+x_{23}} & {=} & {1} \\
    & {x_{31}+x_{32}+x_{33}} & {=} & {3} \\
    & {x_{41}+x_{42}+x_{43}} & {=} & {1} \\
    & {-4\,x_{11}-5\,x_{21}-3\,x_{31}-6\,x_{41}+10\,y_1} & {\ge} & {0} \\
    & {-4\,x_{12}-5\,x_{22}-3\,x_{32}-6\,x_{42}+10\,y_2} & {\ge} & {0} \\
    & {-4\,x_{13}-5\,x_{23}-3\,x_{33}-6\,x_{43}+10\,y_3} & {\ge} & {0} \\[1ex]
    & {x_{11},~x_{12},~x_{13},~\dots,~x_{43}} & {\in} & {\Z_{\ge 0}} \\
    & {y_1,~y_2,~y_3} & {\in} & {\{0,1\}}
    \end{array}
    $$

    An optimal solution $\tilde{\vet x}(\mathrm{ILP}_{\mathrm{CSP}})$ is:

    $$
    \tilde{x}_{11} = \tilde{x}_{41} = 1,~~ \tilde{x}_{32} = 3,~~ \tilde{x}_{13} = \tilde{x}_{23} = 1,~~
    \tilde{y}_1 = \tilde{y}_2 = \tilde{y}_3 = 1,
    $$

    with all the other variables equal to $0$. The optimal value is $z(\mathrm{ILP}_{\mathrm{CSP}}) = 3$, as found in the chapter «Packing problems». The bins contain one copy of items $1$ and $4$ (weight $10$), three copies of item $3$ (weight $9$), and one copy of items $1$ and $2$ (weight $9$). The optimal solution is not unique: the solution of that chapter, with the bins $\{4,1\}$, $\{1,3,3\}$ and $\{2,3\}$, also uses $3$ bins.

## 10.5 Typical mistakes

!!! attenzione "Warning"

    - <strong>Choosing $m$ too small.</strong> The number $m$ of bins must be an upper bound on the number of bins of an optimal solution: with $m < z(\mathrm{ILP}_{\mathrm{BPP}})$ the model has no feasible solution. The value $m=n$ is always valid.

    - <strong>Forgetting to round up.</strong> The optimal value of the $\mathrm{ILP}_{\mathrm{BPP}}$ model is an integer, so the lower bound from the relaxations is $\lceil \sum_{j} w_j / c \rceil$; in Example 1 it is $\lceil \tfrac{8}{5} \rceil = 2$, not $\tfrac{8}{5}$.

    - <strong>Believing that the model counts only non-empty bins.</strong> The constraints allow $y_b=1$ for an empty bin: it is the objective function that switches such bins off, in every optimal solution.

    - <strong>Ignoring the symmetry.</strong> Permuting the indices of the bins gives another optimal solution with the same packing: the $\mathrm{ILP}_{\mathrm{BPP}}$ model has many equivalent optimal solutions.

    - <strong>Expecting a better relaxation from $y_b \le 1$.</strong> The second relaxation has the same optimal value as the first one: the upper bounds $y_b \le 1$ do not cut off the optimal solution of the first relaxation.

    - <strong>Declaring binary the variables of the cutting stock model.</strong> In the $\mathrm{ILP}_{\mathrm{CSP}}$ model $x_{jb}$ counts the copies of item $j$ in bin $b$: with $x_{jb}\in\{0,1\}$ the three copies of item $3$ of the example could not share a bin.

## 10.6 In summary

!!! chiave "In summary"

    - The $\mathrm{ILP}_{\mathrm{BPP}}$ model has $m \cdot n$ assignment variables $x_{jb}$ and $m$ activation variables $y_b$; the capacity constraints link them.

    - Both LP relaxations have optimal value $z(\mathrm{LP}_{\mathrm{BPP}}) = \sum_{j} w_j / c$, with dual solution $\tilde{\mu}_j = w_j/c$ and $\tilde{\pi}_b = 1/c$.

    - Since the optimal value is an integer, $\lceil z(\mathrm{LP}_{\mathrm{BPP}}) \rceil$ is a lower bound on the number of bins.

    - The ratio between $z(\mathrm{LP}_{\mathrm{BPP}})$ and $z(\mathrm{ILP}_{\mathrm{BPP}})$ is at least $\tfrac{1}{2}$, and the value $\tfrac{1}{2}$ is asymptotically attained; the same holds for $\lceil z(\mathrm{LP}_{\mathrm{BPP}}) \rceil$.

    - The $\mathrm{ILP}_{\mathrm{CSP}}$ model has the structure of the $\mathrm{ILP}_{\mathrm{BPP}}$ model, with $mn$ integer variables $x_{jb}$ that count the copies and the demands $d_j$ on the right-hand side; on the CSP instance of the chapter «Packing problems» its optimal value is $3$.

    <strong>Dashboard of Example 1.</strong> Bounds on $z(\mathrm{ILP}_{\mathrm{BPP}})$ computed in this chapter:

    <div class="tabella" markdown="0"><table>
    <tr>
    <th>Bound</th>
    <th>Value</th>
    <th>From</th>
    </tr>
    <tr>
    <td>First relaxation</td>
    <td><span class="arithmatex">\(\tfrac{8}{5}\)</span></td>
    <td><span class="arithmatex">\(z(\mathrm{LP}\text{-}0_{\mathrm{BPP}})\)</span></td>
    </tr>
    <tr>
    <td>Second relaxation</td>
    <td><span class="arithmatex">\(\tfrac{8}{5}\)</span></td>
    <td><span class="arithmatex">\(z(\mathrm{LP}_{\mathrm{BPP}})\)</span></td>
    </tr>
    <tr>
    <td>Lower bound</td>
    <td><span class="arithmatex">\(2\)</span></td>
    <td><span class="arithmatex">\(\lceil \tfrac{8}{5} \rceil\)</span></td>
    </tr>
    <tr>
    <td>Optimal value</td>
    <td><span class="arithmatex">\(2\)</span></td>
    <td>patterns <span class="arithmatex">\(\{1,3\}\)</span> and <span class="arithmatex">\(\{2\}\)</span></td>
    </tr>
    </table></div>

    Here the rounded bound is already equal to the optimal value.

---

**Exercises on this chapter:** [:material-pencil: Packing problems](../../exercises/bin-packing-formulations.md)

