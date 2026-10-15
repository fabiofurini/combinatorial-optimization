---
title: "Bin packing"
---

# 10.2 An ILP model for the Bin Packing Problem { #sez-sec-bpf-BPP }

<div class="info-capitolo" markdown>

**Part 2 · Formulations and their properties · Chapter 10** · [:material-book-open-variant: Chapter 10: Packing problems](index.md) · [:material-file-pdf-box: Lecture notes, volume 2 (PDF)](../../pdf/lecture-notes-2-formulations.pdf) · [:material-presentation: Slides](../../pdf/slides-bin-packing-formulations.pdf) · [:material-pencil: Exercises: Packing problems](../../exercises/bin-packing-formulations.md)

</div>

The problem of this section is the Bin Packing Problem (BPP), defined in [Chapter 3 «Packing problems»](https://fabiofurini.github.io/combinatorial-optimization/combinatorial-optimization-problems/bin-packing/the-bin-packing-problem/).

- Given an upper bound $m \in \Z_{\ge 2}$ on the number of bins used in any optimal BPP solution, we introduce the following $mn$ <strong>binary variables</strong>:

    $$
    x_{jb} =
    \begin{cases}
    1 & \text{if item } j \text{ is packed in bin } b \\
    0 & \text{otherwise}
    \end{cases}
    \qquad \forall j \in \underbrace{\{1,2,\dots,n\}}_{=\mathscr{I}},~~ \forall b \in \underbrace{\{1,2,\dots,m\}}_{=\mathscr{B}},
    $$

    and the following $m$ <strong>binary variables</strong>:

    $$
    y_b =
    \begin{cases}
    1 & \text{if bin } b \text{ is used} \\
    0 & \text{otherwise}
    \end{cases}
    \qquad \forall b \in \underbrace{\{1,2,\dots,m\}}_{=\mathscr{B}}.
    $$

    The number $n$ of items is a valid upper bound on the minimum number of bins needed to pack all the items since, in the worst possible case, each item is packed in a different bin. Also the number of bins used in any feasible BPP solution is a valid upper bound.

!!! chiave ""

    Using these variables, an Integer Linear Programming (ILP) model for the Bin Packing Problem (BPP) reads as follows:

    <a id="eq-NAT_BPP"></a>

    \begin{align*}
    && \min ~~ \sum_{b \in \mathscr{B}} y_b \label{obj_BPP}  \tag{10.1a}\\[2ex]
    && \text{subject to} \quad \sum_{b \in \mathscr{B}} x_{jb} &= 1, & \forall j \in \mathscr{I}, \label{cons1_BPP}  \tag{10.1b}\\[2ex]
    && - \sum_{j \in \mathscr{I}}  w_j \; x_{jb} + c \; y_b &\geq 0, & \forall b \in \mathscr{B}, \label{cons2_BPP}  \tag{10.1c}\\[2ex]
    && x_{jb} &\in \{0,1\}, & \forall j \in \mathscr{I},~ \forall b \in \mathscr{B}, \label{cons4_BPP}  \tag{10.1d}\\[2ex]
    && y_b &\in \{0,1\}, & \forall b \in \mathscr{B}. \label{cons3_BPP} \tag{10.1e}
    \end{align*}

    This ILP model is referred to as the $\mathrm{ILP}_{\mathrm{BPP}}$ model.

- Description of the objective function and constraints of the $\mathrm{ILP}_{\mathrm{BPP}}$ model:

    - the linear objective function $\eqref{obj_BPP}$ minimizes the total number of used bins;

    - constraints $\eqref{cons1_BPP}$ ensure that each item is packed in exactly one bin, so that all items are packed ($n$ linear constraints);

    - constraints $\eqref{cons2_BPP}$ link the assignment variables with the activation variables and impose the capacity restrictions: if bin $b$ is used, the weight of its items is at most $c$; if it is not used, it contains no item ($m$ linear constraints);

    - finally, constraints $\eqref{cons4_BPP}$ and $\eqref{cons3_BPP}$ define the variables of the ILP model.

<strong>Explanation of the link between the variables</strong>

- <strong>If at least one item is packed in bin $b$, then the bin is used.</strong> The logical implication is

    $$
    (x_{1b} {\tt ~OR~} x_{2b} {\tt ~OR~} \dots {\tt ~OR~} x_{nb}) ~~~ \Longrightarrow ~~~ y_b .
    $$

    Since $w_j>0$, packing an item in bin $b$ gives $\sum_{j \in \mathscr{I}} w_j x_{jb} > 0$, and the constraint $\sum_{j \in \mathscr{I}} w_j x_{jb} \le c\,y_b$ forces $y_b=1$.

- <strong>If bin $b$ is not used, then it is empty.</strong> This is the contrapositive of the previous implication. For $y_b=0$ the constraint reads $\sum_{j \in \mathscr{I}} w_j x_{jb} \le 0$, and since $w_j>0$ we obtain $x_{jb}=0$ for every item $j$.

- <strong>If bin $b$ is used, then it contains at least one item, but only in an optimal solution.</strong> The constraints do not impose it. However, if $x_{jb}=0$ for all $j$ and $y_b=1$, setting $y_b=0$ keeps all the constraints satisfied and decreases the objective value by one. Hence, in every optimal solution, empty bins are not counted as used.

<a id="box-1-texexpbox_ilp_bpp"></a>

!!! esempio "Example 10.1: $\mathrm{ILP}_{\mathrm{BPP}}$ model"

    We consider a bin of capacity $c = 10$ and a set $\mathscr{I} = \{1,2,3\}$ of $3$ items ($n=3$), with the following item weights:

    $$
    \begin{array}{l|ccc}
    \hline  & {j=1} & {j=2} & {j=3} \\[1ex]
    \hline {w_j} & {7} & {6} & {3} \\[1ex]
    \hline
    \end{array}
    $$

    We refer to this BPP instance as <span style="color:#1971c2">[Example 10.1](#box-1-texexpbox_ilp_bpp)</span>.

    The $\mathrm{ILP}_{\mathrm{BPP}}$ model with $m=3$ for this BPP instance is:

    $$
    \begin{array}{rccccccccccccr}
    {\min} &  &  &  &  &  &  &  &  &  & {y_{1}} & {+} {y_{2}} & {+} {y_{3}} &  \\[1ex]
    \text{subject to} & {x_{11}} & {+} {x_{12}} & {+} {x_{13}} &  &  &  &  &  &  &  &  &  & {=1} \\[1ex]
    &  &  &  & {x_{21}} & {+} {x_{22}} & {+} {x_{23}} &  &  &  &  &  &  & {=1} \\[1ex]
    &  &  &  &  &  &  & {x_{31}} & {+} {x_{32}} & {+} {x_{33}} &  &  &  & {=1} \\[1ex]
    & {-} {7x_{11}} &  &  & {-} {6x_{21}} &  &  & {-} {3x_{31}} &  &  & {+} {10y_1} &  &  & {\ge 0} \\[1ex]
    &  & {-} {7x_{12}} &  &  & {-} {6x_{22}} &  &  & {-} {3x_{32}} &  &  & {+} {10y_2} &  & {\ge 0} \\[1ex]
    &  &  & {-} {7x_{13}} &  &  & {-} {6x_{23}} &  &  & {-} {3x_{33}} &  &  & {+} {10y_3} & {\ge 0} \\[1ex]
    & {x_{11}}, & {x_{12}}, & {x_{13}}, & {x_{21}}, & {x_{22}}, & {x_{23}}, & {x_{31}}, & {x_{32}}, & {x_{33}}, & {y_{1}}, & {y_{2}}, & {y_{3}} & {\in \{0,1\}}
    \end{array}
    $$

    An optimal solution ${\tilde{\vet{x}}}(\mathrm{ILP}_{\mathrm{BPP}})$ is:

    $$
    \tilde{x}_{11} = \tilde{x}_{31} = 1,~~ \tilde{x}_{12} = \tilde{x}_{13} =  \tilde{x}_{21} = 0,~~ \tilde{x}_{22} = 1,~~ \tilde{x}_{23} = \tilde{x}_{32} = \tilde{x}_{33} = 0,~~ \tilde{y}_1 = \tilde{y}_2 = 1,~~ \tilde{y}_3 = 0
    $$

    Another optimal solution, obtained by permuting the indices of bins $1$ and $2$, is:

    $$
    \tilde{x}_{12} = \tilde{x}_{32} = 1,~~ \tilde{x}_{11} = \tilde{x}_{13} =  \tilde{x}_{22} = 0,~~ \tilde{x}_{21} = 1,~~ \tilde{x}_{23} = \tilde{x}_{31} = \tilde{x}_{33} = 0,~~ \tilde{y}_1 = \tilde{y}_2 = 1,~~ \tilde{y}_3 = 0.
    $$

    The optimal value is:

    $$
    z(\mathrm{ILP}_{\mathrm{BPP}}) = 2
    $$

    The associated optimal solution of the BPP is given by the packing patterns

    $$
    \tilde{P}_1 = \{1,3\} \quad \text{and} \quad  \tilde{P}_2 = \{2\}
    $$

    The optimal solution is not unique: also the packing patterns $\{1\}$ and $\{2,3\}$ use two bins.

## 10.3 A first Linear Programming relaxation

!!! chiave ""

    To obtain a Linear Programming (LP) relaxation of the $\mathrm{ILP}_{\mathrm{BPP}}$ model, we relax constraints $\eqref{cons4_BPP}$ and $\eqref{cons3_BPP}$ with the following ones:

    \begin{align*}
    && x_{jb} &\ge 0, & \forall j \in \mathscr{I},~ \forall b \in \mathscr{B}, \label{cons4_BPP_LP}  \tag{10.2a}\\[2ex]
    && y_b &\ge 0, & \forall b \in \mathscr{B}. \label{cons3_BPP_LP} \tag{10.2b}
    \end{align*}

    This LP model is referred to as the $\mathrm{LP}\text{-}0_{\mathrm{BPP}}$ model.

<a id="box-2-texexpbox_lp0_bpp"></a>

!!! esempio "Example 10.2: $\mathrm{LP}\text{-}0_{\mathrm{BPP}}$ model"

    The $\mathrm{LP}\text{-}0_{\mathrm{BPP}}$ model for the BPP instance of <span style="color:#1971c2">[Example 10.1](#box-1-texexpbox_ilp_bpp)</span> is:

    $$
    \begin{array}{rccccccccccccr}
    {\min} &  &  &  &  &  &  &  &  &  & {y_{1}} & {+} {y_{2}} & {+} {y_{3}} &  \\[1ex]
    \text{subject to} & {x_{11}} & {+} {x_{12}} & {+} {x_{13}} &  &  &  &  &  &  &  &  &  & {=1} \\[1ex]
    &  &  &  & {x_{21}} & {+} {x_{22}} & {+} {x_{23}} &  &  &  &  &  &  & {=1} \\[1ex]
    &  &  &  &  &  &  & {x_{31}} & {+} {x_{32}} & {+} {x_{33}} &  &  &  & {=1} \\[1ex]
    & {-} {7x_{11}} &  &  & {-} {6x_{21}} &  &  & {-} {3x_{31}} &  &  & {+} {10y_1} &  &  & {\ge 0} \\[1ex]
    &  & {-} {7x_{12}} &  &  & {-} {6x_{22}} &  &  & {-} {3x_{32}} &  &  & {+} {10y_2} &  & {\ge 0} \\[1ex]
    &  &  & {-} {7x_{13}} &  &  & {-} {6x_{23}} &  &  & {-} {3x_{33}} &  &  & {+} {10y_3} & {\ge 0} \\[1ex]
    & {x_{11}}, & {x_{12}}, & {x_{13}}, & {x_{21}}, & {x_{22}}, & {x_{23}}, & {x_{31}}, & {x_{32}}, & {x_{33}}, & {y_{1}}, & {y_{2}}, & {y_{3}} & {\ge 0}
    \end{array}
    $$

    An optimal solution ${\tilde{\vet{x}}}(\mathrm{LP}\text{-}0_{\mathrm{BPP}})$ is:

    $$
    \tilde x_{11}=\tilde x_{12}=\tilde  x_{13}=\tilde  x_{21}=\tilde x_{22}=\tilde  x_{23}= \tilde  x_{31}=\tilde x_{32}=\tilde  x_{33}=\frac{1}{3},
    \quad
    \tilde{y}_1 = \tilde{y}_2 = \tilde{y}_3 = \frac{8}{15}
    $$

    The optimal value $z(\mathrm{LP}\text{-}0_{\mathrm{BPP}})$ is $\frac{8}{5}$.

    Accordingly, we have the lower bound:

    $$
    \frac{8}{5} \leq z(\mathrm{ILP}_{\mathrm{BPP}})
    $$

    and, since $z(\mathrm{ILP}_{\mathrm{BPP}})$ is an integer, $z(\mathrm{ILP}_{\mathrm{BPP}}) \ge \lceil \frac{8}{5} \rceil = 2$.

!!! chiave ""

    Using

    - a free dual variable $\mu_j$ for each constraint $\eqref{cons1_BPP}$ ($j \in \mathscr{I}$)

    - a non-negative dual variable $\pi_b$ for each constraint $\eqref{cons2_BPP}$ ($b \in \mathscr{B}$)

    the dual model of the $\mathrm{LP}\text{-}0_{\mathrm{BPP}}$ model reads as follows:

    <a id="eq-DUAL_0"></a>

    \begin{align*}
    && \max ~~ \sum_{j \in \mathscr{I}}  \mu_j \label{obj_D}  \tag{10.3a}\\[2ex]
    && \text{subject to} \quad \mu_j - w_j \; \pi_b &\le 0, & \forall j \in \mathscr{I},~\forall b \in \mathscr{B}, \label{cons2_D}  \tag{10.3b}\\[2ex]
    && c \; \pi_b &\le 1, & \forall b \in \mathscr{B}, \label{cons1_D}  \tag{10.3c}\\[2ex]
    && \mu_j &\gtreqless 0, & \forall j \in \mathscr{I}, \label{cons3_D}  \tag{10.3d}\\[2ex]
    && \pi_b &\ge 0, & \forall b \in \mathscr{B}. \label{cons4_D} \tag{10.3e}
    \end{align*}

    This LP model is referred to as the dual $D(\mathrm{LP}\text{-}0_{\mathrm{BPP}})$ model.

<a id="box-3-texexpbox_dlp0_bpp"></a>

!!! esempio "Example 10.3: $D(\mathrm{LP}\text{-}0_{\mathrm{BPP}})$ model"

    The dual $D(\mathrm{LP}\text{-}0_{\mathrm{BPP}})$ model for the BPP instance of <span style="color:#1971c2">[Example 10.1](#box-1-texexpbox_ilp_bpp)</span> is:

    $$
    \begin{array}{rccccccr}
    {\max} & {\mu_{1}} & {+} {\mu_{2}} & {+} {\mu_{3}} &  &  &  &  \\[1ex]
    \text{subject to} & {\mu_1} &  &  & {-} {7\pi_1} &  &  & {\le 0} \\[1ex]
    & {\mu_1} &  &  &  & {-} {7\pi_2} &  & {\le 0} \\[1ex]
    & {\mu_1} &  &  &  &  & {-} {7\pi_3} & {\le 0} \\[1ex]
    &  & {\mu_2} &  & {-} {6\pi_1} &  &  & {\le 0} \\[1ex]
    &  & {\mu_2} &  &  & {-} {6\pi_2} &  & {\le 0} \\[1ex]
    &  & {\mu_2} &  &  &  & {-} {6\pi_3} & {\le 0} \\[1ex]
    &  &  & {\mu_3} & {-} {3\pi_1} &  &  & {\le 0} \\[1ex]
    &  &  & {\mu_3} &  & {-} {3\pi_2} &  & {\le 0} \\[1ex]
    &  &  & {\mu_3} &  &  & {-} {3\pi_3} & {\le 0} \\[1ex]
    &  &  &  & {10\pi_1} &  &  & {\le 1} \\[1ex]
    &  &  &  &  & {10\pi_2} &  & {\le 1} \\[1ex]
    &  &  &  &  &  & {10\pi_3} & {\le 1} \\[1ex]
    & {\mu_1}, & {\mu_2}, & {\mu_3} &  &  &  & {\gtreqless 0} \\[1ex]
    &  &  &  & {\pi_1}, & {\pi_2}, & {\pi_3} & {\ge 0}
    \end{array}
    $$

    An optimal solution $(\tilde{\vet{\mu}},\tilde{\vet{\pi}})$ of $D(\mathrm{LP}\text{-}0_{\mathrm{BPP}})$ is:

    $$
    \tilde{\mu}_1 = \frac{7}{10}, \quad \tilde{\mu}_2 = \frac{3}{5}, \quad \tilde{\mu}_3 = \frac{3}{10}, \quad \tilde{\pi}_1 = \tilde{\pi}_2 = \tilde{\pi}_3 = \frac{1}{10}
    $$

    The optimal value $z(D(\mathrm{LP}\text{-}0_{\mathrm{BPP}}))$ is $\frac{8}{5}$.

<a id="box-4-prop_lp0_bpp_opt"></a>

!!! teorema "Proposition 10.1"

    An optimal solution of the primal $\mathrm{LP}\text{-}0_{\mathrm{BPP}}$ model is:

    \begin{equation*}
    \label{PP}
    \begin{aligned}
    \tilde{x}_{jb} &= \frac{1}{m},
    & \forall j \in \mathscr{I},\; \forall b \in \mathscr{B},\\[2ex]
    \tilde{y}_b &= \frac{\sum_{j \in \mathscr{I}}  w_j}{m \; c},
    & \forall b \in \mathscr{B},
    \end{aligned} \tag{10.4}
    \end{equation*}

    and an optimal solution of the dual $D(\mathrm{LP}\text{-}0_{\mathrm{BPP}})$ model is:

    \begin{equation*}
    \label{DD}
    \begin{aligned}
    \tilde{\mu}_j &= \frac{w_j}{c},
    & \forall j \in \mathscr{I},\\[2ex]
    \tilde{\pi}_b &= \frac{1}{c},
    & \forall b \in \mathscr{B}.
    \end{aligned} \tag{10.5}
    \end{equation*}

<a id="box-5-cor_lp0_bpp_value"></a>

!!! teorema "Corollary 10.2"

    The optimal value of the primal $\mathrm{LP}\text{-}0_{\mathrm{BPP}}$ and dual $D(\mathrm{LP}\text{-}0_{\mathrm{BPP}})$ models is:

    \begin{equation*}
    \label{VAL_LP0_BPP}
    z(\mathrm{LP}\text{-}0_{\mathrm{BPP}})
    =
    \frac{\sum_{j \in \mathscr{I}} w_j}{c}
    =
    z(D(\mathrm{LP}\text{-}0_{\mathrm{BPP}})) \tag{10.6}
    \end{equation*}

- The proof proceeds in three steps:

    1. We show that $\eqref{PP}$ is a feasible solution for the primal $\mathrm{LP}\text{-}0_{\mathrm{BPP}}$ model;

    2. We show that $\eqref{DD}$ is a feasible solution for the dual $D(\mathrm{LP}\text{-}0_{\mathrm{BPP}})$ model;

    3. We show that both feasible solutions have the same objective function value.

    Therefore, by LP Weak Duality, $\eqref{PP}$ and $\eqref{DD}$ are a pair of optimal primal and dual solutions.

??? dimostrazione "Proof"

    - **1.** For every $j \in \mathscr{I}$, we have:

        $$
        \sum_{b \in \mathscr{B}} \tilde{x}_{jb} = \sum_{b \in \mathscr{B}} \frac{1}{m} = \frac{m}{m} = 1
        $$

        thus constraints $\eqref{cons1_BPP}$ are satisfied.

        For every $b \in \mathscr{B}$, we have:

        $$
        - \sum_{j \in \mathscr{I}}  w_j \; \tilde{x}_{jb} + c \; \tilde{y}_b = - \sum_{j \in \mathscr{I}}  w_j \; \frac{1}{m} + c \; \frac{\sum_{j \in \mathscr{I}}  w_j}{m \; c} = 0
        $$

        thus constraints $\eqref{cons2_BPP}$ are satisfied.

        We have $\tilde{x}_{jb} \geq 0$ and $\tilde{y}_b \geq 0$, for every $j \in \mathscr{I}$ and every $b \in \mathscr{B}$, thus constraints $\eqref{cons4_BPP_LP}$ and $\eqref{cons3_BPP_LP}$ are satisfied.

        Therefore, $\eqref{PP}$ provides a feasible solution for the primal $\mathrm{LP}\text{-}0_{\mathrm{BPP}}$ model.

    - **2.** For every $b \in \mathscr{B}$ and every $j \in \mathscr{I}$, we have:

        $$
        \tilde{\mu}_j - w_j \; \tilde{\pi}_b = \frac{w_j}{c} -   \frac{w_j}{c} = 0
        $$

        thus constraints $\eqref{cons2_D}$ are satisfied.

        For every $b \in \mathscr{B}$, we have:

        $$
        c \; \tilde{\pi}_b =  \frac{c}{c} = 1
        $$

        thus constraints $\eqref{cons1_D}$ are satisfied.

        We have $\tilde{\mu}_j \geq 0$ and $\tilde{\pi}_b \geq 0$, for every $b \in \mathscr{B}$ and every $j \in \mathscr{I}$, thus constraints $\eqref{cons3_D}$ and $\eqref{cons4_D}$ are satisfied.

        Therefore, $\eqref{DD}$ provides a feasible solution for the dual $D(\mathrm{LP}\text{-}0_{\mathrm{BPP}})$ model.

    - **3.** For the objective functions, we have:

        $$
        \sum_{b \in \mathscr{B}} \tilde{y}_b = \sum_{b \in \mathscr{B}} \frac{\sum_{j \in \mathscr{I}}  w_j}{m \; c} = \frac{\sum_{j \in \mathscr{I}}  w_j}{c} = \sum_{j \in \mathscr{I}}  \tilde{\mu}_j
        $$

        thus the primal and dual objective function values are equal.

    Therefore, by LP Weak Duality, $\eqref{PP}$ and $\eqref{DD}$ are a pair of optimal primal and dual solutions. <span class="qed">□</span>

- This is an alternative proof that does not rely on the dual formulation but instead reasons directly on the minimum objective function value imposed by the constraints.

<a id="box-6-prop_lp0_bpp_alternative"></a>

!!! teorema "Proposition 10.3"

    An optimal solution of the primal $\mathrm{LP}\text{-}0_{\mathrm{BPP}}$ model is:

    \begin{equation*}
    \label{PP_alternative}
    \begin{aligned}
    \tilde{x}_{jb} &= \frac{1}{m},
    & \forall j \in \mathscr{I},\; \forall b \in \mathscr{B},\\[2ex]
    \tilde{y}_b &= \frac{\sum_{j \in \mathscr{I}}  w_j}{m \; c},
    & \forall b \in \mathscr{B},
    \end{aligned} \tag{10.7}
    \end{equation*}

    and the optimal value is

    \begin{equation*}
    \label{VAL_alternative}
    z(\mathrm{LP}\text{-}0_{\mathrm{BPP}}) = \frac{\sum_{j \in \mathscr{I}} w_j}{c}. \tag{10.8}
    \end{equation*}

??? dimostrazione "Proof"

    Summing the capacity constraints $\eqref{cons2_BPP}$ over all $b\in\mathscr{B}$ gives

    $$
    c \sum_{b\in\mathscr{B}} y_b \;\ge\; \sum_{b\in\mathscr{B}} \sum_{j\in\mathscr{I}} w_j x_{jb}
    = \sum_{j\in\mathscr{I}} w_j \underbrace{\sum_{b\in\mathscr{B}} x_{jb}}_{\text{by }\eqref{cons1_BPP}=1}
    = \sum_{j\in\mathscr{I}} w_j,
    $$

    hence

    \begin{equation*}
    \label{eq:bpp-lb}
    \sum_{b\in\mathscr{B}} y_b \;\ge\; \frac{1}{c}\sum_{j\in\mathscr{I}} w_j . \tag{10.9}
    \end{equation*}

    Therefore every feasible solution of $\mathrm{LP}\text{-}0_{\mathrm{BPP}}$ satisfies $\eqref{eq:bpp-lb}$.

    Now consider the point defined in $\eqref{PP_alternative}$. For every $j\in\mathscr{I}$, we have

    $$
    \sum_{b\in\mathscr{B}} \tilde x_{jb}
    = m \; \tfrac{1}{m}=1,
    $$

    so constraints $\eqref{cons1_BPP}$ hold. Moreover, for every $b\in\mathscr{B}$, we have

    $$
    \sum_{j\in\mathscr{I}} w_j \tilde x_{jb}
    = \sum_{j\in\mathscr{I}} w_j \; \tfrac{1}{m}
    = \frac{1}{m} \sum_{j\in\mathscr{I}} w_j
    = c \; \tilde y_b ,
    $$

    so constraints $\eqref{cons2_BPP}$ hold with equality. Finally, constraints $\eqref{cons4_BPP_LP}$ and $\eqref{cons3_BPP_LP}$ are satisfied by construction. Hence the point defined in $\eqref{PP_alternative}$ is a feasible solution for $\mathrm{LP}\text{-}0_{\mathrm{BPP}}$.

    The objective value of $\eqref{PP_alternative}$ is

    $$
    \sum_{b\in\mathscr{B}} \tilde y_b
    = m \; \frac{\sum_{j\in\mathscr{I}} w_j}{m\,c}
    = \frac{1}{c} \sum_{j\in\mathscr{I}} w_j ,
    $$

    which matches the lower bound $\eqref{eq:bpp-lb}$. Therefore the point $\eqref{PP_alternative}$ is an optimal solution with objective value $\eqref{VAL_alternative}$. <span class="qed">□</span>

## 10.4 A second Linear Programming relaxation

!!! chiave ""

    To obtain a Linear Programming (LP) relaxation of the $\mathrm{ILP}_{\mathrm{BPP}}$ model, we relax constraints $\eqref{cons4_BPP}$ and $\eqref{cons3_BPP}$ with the following ones:

    \begin{align*}
    && x_{jb} &\ge 0, & \forall j \in \mathscr{I},\; \forall b \in \mathscr{B}, \label{cons5_BPP_LP_LL}  \tag{10.10a}\\[2ex]
    && y_{b} &\le 1, & \forall b \in \mathscr{B}, \label{cons3_BPP_LP_LL}  \tag{10.10b}\\[2ex]
    && y_{b} &\ge 0, & \forall b \in \mathscr{B}. \label{cons4_BPP_LP_LL} \tag{10.10c}
    \end{align*}

<a id="box-7-texexpbox_lp_bpp"></a>

!!! esempio "Example 10.4: $\mathrm{LP}_{\mathrm{BPP}}$ model"

    The  $\mathrm{LP}_{\mathrm{BPP}}$ model for the BPP instance of <span style="color:#1971c2">[Example 10.1](#box-1-texexpbox_ilp_bpp)</span> is:

    $$
    \begin{array}{rccccccccccccr}
    {\min} &  &  &  &  &  &  &  &  &  & {y_{1}} & {+} {y_{2}} & {+} {y_{3}} &  \\[1ex]
    \text{subject to} & {x_{11}} & {+} {x_{12}} & {+} {x_{13}} &  &  &  &  &  &  &  &  &  & {=1} \\[1ex]
    &  &  &  & {x_{21}} & {+} {x_{22}} & {+} {x_{23}} &  &  &  &  &  &  & {=1} \\[1ex]
    &  &  &  &  &  &  & {x_{31}} & {+} {x_{32}} & {+} {x_{33}} &  &  &  & {=1} \\[1ex]
    & {-} {7x_{11}} &  &  & {-} {6x_{21}} &  &  & {-} {3x_{31}} &  &  & {+} {10y_1} &  &  & {\ge 0} \\[1ex]
    &  & {-} {7x_{12}} &  &  & {-} {6x_{22}} &  &  & {-} {3x_{32}} &  &  & {+} {10y_2} &  & {\ge 0} \\[1ex]
    &  &  & {-} {7x_{13}} &  &  & {-} {6x_{23}} &  &  & {-} {3x_{33}} &  &  & {+} {10y_3} & {\ge 0} \\[1ex]
    &  &  &  &  &  &  &  &  &  & {y_{1}} &  &  & {\le 1} \\[1ex]
    &  &  &  &  &  &  &  &  &  &  & {y_{2}} &  & {\le 1} \\[1ex]
    &  &  &  &  &  &  &  &  &  &  &  & {y_{3}} & {\le 1} \\[1ex]
    & {x_{11}}, & {x_{12}}, & {x_{13}}, & {x_{21}}, & {x_{22}}, & {x_{23}}, & {x_{31}}, & {x_{32}}, & {x_{33}}, & {y_{1}}, & {y_{2}}, & {y_{3}} & {\ge 0}
    \end{array}
    $$

    An optimal solution ${\tilde{\vet{x}}}(\mathrm{LP}_{\mathrm{BPP}})$ is:

    $$
    \tilde x_{11}=\tilde x_{12}=\tilde  x_{13}=\tilde  x_{21}=\tilde x_{22}=\tilde  x_{23}= \tilde  x_{31}=\tilde x_{32}=\tilde  x_{33}=\frac{1}{3},
    \quad
    \tilde{y}_1 = \tilde{y}_2 = \tilde{y}_3 = \frac{8}{15}
    $$

    The optimal value $z(\mathrm{LP}_{\mathrm{BPP}})$ is $\frac{8}{5}$. Accordingly, we have the same lower bound as before.

!!! chiave ""

    Using

    - a free dual variable $\mu_j$ for each constraint $\eqref{cons1_BPP}$ ($j \in \mathscr{I}$)

    - a non-negative dual variable $\pi_b$ for each constraint $\eqref{cons2_BPP}$ ($b \in \mathscr{B}$)

    - a non-positive dual variable $\lambda_b$ for each constraint $\eqref{cons3_BPP_LP_LL}$ ($b \in \mathscr{B}$)

    the dual model of the $\mathrm{LP}_{\mathrm{BPP}}$ model reads as follows:

    <a id="eq-DUAL_2"></a>

    \begin{align*}
    &&   \max  ~~ \sum_{j \in \mathscr{I}}   \mu_{j} + \sum_{b \in \mathscr{B}}  \lambda_{b} \label{obj_D_2}  \tag{10.11a}\\[2ex]
    && \text{subject to} \quad \mu_j - w_j \; \pi_{b} &\leq 0, & \forall j \in \mathscr{I},\; \forall b \in \mathscr{B}, \label{cons2_D_2}  \tag{10.11b}\\[2ex]
    && c \; \pi_{b} + \lambda_b &\leq 1, & \forall b \in \mathscr{B}, \label{cons1_D_2}  \tag{10.11c}\\[2ex]
    && \mu_{j} &\gtreqless 0, & \forall j \in \mathscr{I}, \label{cons3_D_2}  \tag{10.11d}\\[2ex]
    && \pi_{b} &\ge 0, & \forall b \in \mathscr{B}, \label{cons4_D_2}  \tag{10.11e}\\[2ex]
    && \lambda_{b} &\le 0, & \forall b \in \mathscr{B}. \label{cons5_D_2} \tag{10.11f}
    \end{align*}

<a id="box-8-texexpbox_dlp_bpp"></a>

!!! esempio "Example 10.5: $D(\mathrm{LP}_{\mathrm{BPP}})$ model"

    The  $D(\mathrm{LP}_{\mathrm{BPP}})$ model of <span style="color:#1971c2">[Example 10.1](#box-1-texexpbox_ilp_bpp)</span> is:

    $$
    \begin{array}{rcccccccccc}
    {\max} & {\mu_{1}} & {+} {\mu_{2}} & {+} {\mu_{3}} &  &  &  & {+} {\lambda_{1}} & {+} {\lambda_{2}} & {+} {\lambda_{3}} &  \\[1ex]
    \text{subject to} & {\mu_1} &  &  & {-} {7\pi_1} &  &  &  &  &  & {\le 0} \\[1ex]
    & {\mu_1} &  &  &  & {-} {7\pi_2} &  &  &  &  & {\le 0} \\[1ex]
    & {\mu_1} &  &  &  &  & {-} {7\pi_3} &  &  &  & {\le 0} \\[1ex]
    &  & {\mu_2} &  & {-} {6\pi_1} &  &  &  &  &  & {\le 0} \\[1ex]
    &  & {\mu_2} &  &  & {-} {6\pi_2} &  &  &  &  & {\le 0} \\[1ex]
    &  & {\mu_2} &  &  &  & {-} {6\pi_3} &  &  &  & {\le 0} \\[1ex]
    &  &  & {\mu_3} & {-} {3\pi_1} &  &  &  &  &  & {\le 0} \\[1ex]
    &  &  & {\mu_3} &  & {-} {3\pi_2} &  &  &  &  & {\le 0} \\[1ex]
    &  &  & {\mu_3} &  &  & {-} {3\pi_3} &  &  &  & {\le 0} \\[1ex]
    &  &  &  & {10\pi_1} &  &  & {+\lambda_1} &  &  & {\le 1} \\[1ex]
    &  &  &  &  & {10\pi_2} &  &  & {+\lambda_2} &  & {\le 1} \\[1ex]
    &  &  &  &  &  & {10\pi_3} &  &  & {+\lambda_3} & {\le 1} \\[1ex]
    & {\mu_1}, & {\mu_2}, & {\mu_3} &  &  &  &  &  &  & {\gtreqless 0} \\[1ex]
    &  &  &  & {\pi_1}, & {\pi_2}, & {\pi_3} &  &  &  & {\ge 0} \\[1ex]
    &  &  &  &  &  &  & {\lambda_1}, & {\lambda_2}, & {\lambda_3} & {\le 0}
    \end{array}
    $$

    The optimal value $z(D(\mathrm{LP}_{\mathrm{BPP}}))$  is $\frac{8}{5}$.  An optimal solution $(\tilde{\vet{\mu}},\tilde{\vet{\pi}},\tilde{\vet{\lambda}})$ of $D(\mathrm{LP}_{\mathrm{BPP}})$ is:

    $$
    \tilde \mu_{1}= \frac{7}{10},~~~~\tilde \mu_{2}=\frac{3}{5},~~~~\tilde  \mu_{3}=\frac{3}{10},~~~~\tilde \pi_{1}= \tilde \pi_{2}=\tilde \pi_{3}=\frac{1}{10},~~~~\tilde  \lambda_{1}=\tilde  \lambda_{2}=\tilde \lambda_{3}=0
    $$

- The constraints:

    $$
    x_{jb} \le 1, \qquad \forall j \in \mathscr{I},\; \forall b \in \mathscr{B},
    $$

    are also valid since, for every $j \in \mathscr{I}$ and every $b \in \mathscr{B}$, we have:

    $$
    x_{jb} \in \{0,1\} ~~~~~\Rightarrow~~~~~ x_{jb} \le 1
    $$

    but they are implied by constraints $\eqref{cons1_BPP}$.

<a id="box-9-prop_lp_bpp_opt"></a>

!!! teorema "Proposition 10.4"

    An optimal solution of the primal $\mathrm{LP}_{\mathrm{BPP}}$ model is:

    \begin{equation*}
    \label{PP_bis}
    \begin{aligned}
    \tilde{x}_{jb} &= \frac{1}{m},
    & \forall j \in \mathscr{I},~ \forall b \in \mathscr{B},\\[2ex]
    \tilde{y}_b &= \frac{\sum_{j \in \mathscr{I}}  w_j}{m \; c},
    & \forall b \in \mathscr{B},
    \end{aligned} \tag{10.12}
    \end{equation*}

    and an optimal solution of the dual $D(\mathrm{LP}_{\mathrm{BPP}})$ model is:

    \begin{equation*}
    \label{DD_bis}
    \begin{aligned}
    \tilde{\mu}_j &= \frac{w_j}{c},
    & \forall j \in \mathscr{I},\\[2ex]
    \tilde{\pi}_b &= \frac{1}{c},
    & \forall b \in \mathscr{B},\\[2ex]
    \tilde{\lambda}_b &= 0,
    & \forall b \in \mathscr{B}.
    \end{aligned} \tag{10.13}
    \end{equation*}

<a id="box-10-cor_lp_bpp_value"></a>

!!! teorema "Corollary 10.5"

    The optimal value of the primal $\mathrm{LP}_{\mathrm{BPP}}$ and dual $D(\mathrm{LP}_{\mathrm{BPP}})$ models is:

    \begin{equation*}
    \label{VAL_LP_BPP}
    z(\mathrm{LP}_{\mathrm{BPP}})
    =
    \frac{\sum_{j \in \mathscr{I}} w_j}{c}
    =
    z(D(\mathrm{LP}_{\mathrm{BPP}})) \tag{10.14}
    \end{equation*}

??? dimostrazione "Proof"

    The proof is similar to the previous one. In addition, it is necessary to observe that

    $$
    \tilde{y}_b = \frac{\sum_{j \in \mathscr{I}}  w_j}{m \; c} \le 1, \quad \forall b \in \mathscr{B},
    $$

    since $\sum_{j} w_j / c \le z(\mathrm{ILP}_{\mathrm{BPP}}) \le m$, where the last inequality holds because $m$ is an upper bound on the number of bins in any optimal BPP solution. Accordingly, constraints $\eqref{cons3_BPP_LP_LL}$ are also satisfied. <span class="qed">□</span>

### 10.4.1 Some important theoretical properties

- The following two propositions show that the ratio between $z(\mathrm{LP}_{\mathrm{BPP}})$ and $z(\mathrm{ILP}_{\mathrm{BPP}})$ is at least one half for every BPP instance (<strong>by hypothesis</strong>  $z(\mathrm{ILP}_{\mathrm{BPP}}) >1$ since not all items fit in a single bin). Furthermore, there exist instances for which the value one half can be asymptotically achieved as the capacity $c \to +\infty$.

<a id="box-11-prop_lp_bpp_ratio_half"></a>

!!! teorema "Proposition 10.6"

    For every BPP instance, we have:

    \begin{equation*}
    \frac{ z(\mathrm{LP}_{\mathrm{BPP}}) }{z(\mathrm{ILP}_{\mathrm{BPP}})} \ge \frac{1}{2} \tag{10.15}
    \end{equation*}

??? dimostrazione "Proof"

    Consider an optimal solution $\tilde{\vet{x}}(\mathrm{ILP}_{\mathrm{BPP}})$ of value $z=z(\mathrm{ILP}_{\mathrm{BPP}})$ (number of used bins). We can assume, without loss of generality, that bins $1,2,\dots,z$ are the non-empty ones.

    In an optimal solution, no two bins can have total item weight at most $c/2$, since otherwise their contents could be merged into a single bin without exceeding the bin capacity $c$ (contradicting optimality).

    If all non-empty bins have total item weight greater than $c/2$, then

    $$
    \sum_{j\in\mathscr{I}} w_j
    =\sum_{b=1}^{z}\sum_{j\in\mathscr{I}} w_j\,\tilde x_{jb}
    >z \;\frac{c}{2}
    ~~~ \Longrightarrow ~~~
    \frac{ \frac{\sum_{j\in\mathscr{I}} w_j}{c} }{z} > \frac{1}{2}
    ~~~ \Longrightarrow ~~~
    \frac{ z(\mathrm{LP}_{\mathrm{BPP}}) }{z(\mathrm{ILP}_{\mathrm{BPP}})} \ge \frac{1}{2}.
    $$

    Otherwise, suppose that there exists a bin with total item weight at most $c/2$. Renumbering bins if necessary, let it be bin $z$, so that

    $$
    \sum_{j\in\mathscr{I}} w_j\,\tilde x_{jz}\le \frac{c}{2}.
    $$

    Since $z>1$, there exists another bin say bin 1; by optimality, we must have

    $$
    \sum_{j\in\mathscr{I}} w_j\,\tilde x_{j1}
    +
    \sum_{j\in\mathscr{I}} w_j\,\tilde x_{jz}
    \;>\; c,
    $$

    and, by optimality, every bin in $\{2,3,\dots,z-1\}$ has total item weight $>c/2$. Hence,

    $$
    \begin{aligned}
    \sum_{j\in\mathscr I} w_j
    &=\sum_{b=1}^{z}\sum_{j\in\mathscr I} w_j\,\tilde x_{jb}\ =\underbrace{\sum_{b=2}^{z-1}\sum_{j\in\mathscr I} w_j\,\tilde x_{jb}}_{\ge\frac{c}{2}(z-2)}
    \;+\; \underbrace{\sum_{j\in\mathscr I} w_j\,\tilde x_{j1}
    \;+\;\sum_{j\in\mathscr I} w_j\,\tilde x_{jz}}_{>c}\\[1ex]
    &>\frac{c}{2}(z-2)+c
    =z\,\frac{c}{2}
    ~~~ \Longrightarrow ~~~
    \frac{ \frac{\sum_{j\in\mathscr{I}} w_j}{c} }{z} > \frac{1}{2}
    ~~~ \Longrightarrow ~~~
    \frac{ z(\mathrm{LP}_{\mathrm{BPP}}) }{z(\mathrm{ILP}_{\mathrm{BPP}})} \ge \frac{1}{2}.
    \end{aligned}
    $$

    <p class="qed-riga"><span class="qed">□</span></p>

<a id="box-12-prop_lp_bpp_ratio_tight"></a>

!!! teorema "Proposition 10.7"

    There are BPP instances such that:

    \begin{equation*}
    \frac{ z(\mathrm{LP}_{\mathrm{BPP}}) }{z(\mathrm{ILP}_{\mathrm{BPP}})} \to \frac{1}{2} \text{    as    } c \to +\infty \tag{10.16}
    \end{equation*}

??? dimostrazione "Proof"

    Given $\vartheta \in \Z_{\ge 1}$, consider the BPP instance with bin capacity $c = 2\vartheta$ and $n$ items having the following weights:

    $$
    w_j = \vartheta+1,~~~ \forall j \in \mathscr{I}.
    $$

    No bin can contain more than one item, thus each item must be packed alone in its own bin. Therefore, the BPP optimal value is

    $$
    z(\mathrm{ILP}_{\mathrm{BPP}}) = n.
    $$

    For the LP relaxation we have:

    $$
    z(\mathrm{LP}_{\mathrm{BPP}})  =  \frac{n(\vartheta+1)}{2\;\vartheta}.
    $$

    It follows that:

    \begin{align*}
    \lim_{\vartheta \to +\infty} \frac{ z(\mathrm{LP}_{\mathrm{BPP}}) }{z(\mathrm{ILP}_{\mathrm{BPP}})}
    &= \lim_{\vartheta \to +\infty} \frac{ \frac{n(\vartheta+1)}{2\;\vartheta} }{n}
    =\lim_{\vartheta \to +\infty}  \left( \frac{1}{2} + \underbrace{\frac{1}{2\;\vartheta}}_{\to 0}  \right) = \frac{1}{2}.
    \end{align*}

    Accordingly,  we conclude that:

    $$
    \frac{ z(\mathrm{LP}_{\mathrm{BPP}}) }{z(\mathrm{ILP}_{\mathrm{BPP}})} \to \frac{1}{2} \qquad \text{as} \qquad c \to +\infty.
    $$

    <p class="qed-riga"><span class="qed">□</span></p>

- The following two propositions show that the ratio between $\lceil z(\mathrm{LP}_{\mathrm{BPP}}) \rceil$ and $z(\mathrm{ILP}_{\mathrm{BPP}})$ is at least one half for every BPP instance. Furthermore, there exist instances for which the value one half can be asymptotically achieved as the number of items $n \to +\infty$.

<a id="box-13-prop_ceil_lp_bpp_ratio_half"></a>

!!! teorema "Proposition 10.8"

    For every BPP instance, we have:

    \begin{equation*}
    \frac{\lceil z(\mathrm{LP}_{\mathrm{BPP}}) \rceil}{z(\mathrm{ILP}_{\mathrm{BPP}})} \ge \frac{1}{2} \tag{10.17}
    \end{equation*}

??? dimostrazione "Proof"

    Consider an optimal solution $\tilde{\vet{x}}(\mathrm{ILP}_{\mathrm{BPP}})$ of value $z=z(\mathrm{ILP}_{\mathrm{BPP}})$ (number of used bins). We can assume, without loss of generality, that bins $1,2,\dots,z$ are the non-empty ones.

    In an optimal solution, no two bins can have total item weight at most $c/2$, since otherwise their contents could be merged into a single bin without exceeding the bin capacity $c$ (contradicting optimality).

    If all non-empty bins have total item weight greater than $c/2$, then

    $$
    \begin{aligned}
    \sum_{j\in\mathscr{I}} w_j
    &=\sum_{b=1}^{z}\sum_{j\in\mathscr{I}} w_j\,\tilde x_{jb}
    >\frac{z\,c}{2}
    ~~~ \Longrightarrow ~~~
    \frac{\sum_{j\in\mathscr{I}} w_j}{c} > \frac{z}{2}
    ~~~ \Longrightarrow ~~~
    \left\lceil \frac{\sum_{j\in\mathscr{I}} w_j}{c} \right\rceil \ge \left\lceil \frac{z}{2} \right\rceil \ge \frac{z}{2} \\[2ex]
    &\Longrightarrow ~~~
    \frac{\left\lceil \frac{\sum_{j\in\mathscr{I}} w_j}{c} \right\rceil}{z} \ge \frac{1}{2}
    ~~~ \Longrightarrow ~~~
    \frac{\lceil z(\mathrm{LP}_{\mathrm{BPP}})\rceil}{z(\mathrm{ILP}_{\mathrm{BPP}})} \ge \frac{1}{2}.
    \end{aligned}
    $$

    Otherwise, suppose that there exists a bin with total item weight at most $c/2$. Renumbering bins if necessary, let it be bin $z$. Then we have:

    $$
    \sum_{j \in \mathscr{I}}  w_j
    =\sum_{b=1}^{z} \sum_{j \in \mathscr{I}}  w_j \tilde{x}_{jb}
    >  \sum_{b=1}^{z-1} \sum_{j \in \mathscr{I}}  w_j \tilde{x}_{jb}
    >
    (z-1)\frac{c}{2}
    ~~~ \Longrightarrow ~~~
    z < 2 \sum_{j \in \mathscr{I}}  \frac{w_j}{c} + 1.
    $$

    Since $z$ must be an integer, this implies:

    $$
    z \le \left\lceil 2 \sum_{j \in \mathscr{I}}  \frac{w_j}{c} \right\rceil
    \le 2 \left\lceil  \sum_{j \in \mathscr{I}}  \frac{w_j}{c} \right\rceil .
    $$

    Therefore:

    $$
    \frac{\left\lceil  \sum_{j \in \mathscr{I}}  \frac{w_j}{c} \right\rceil }{z} \ge \frac{1}{2} ~~~~
    \Longrightarrow ~~~~
    \frac{\lceil z(\mathrm{LP}_{\mathrm{BPP}}) \rceil}{z(\mathrm{ILP}_{\mathrm{BPP}})} \ge \frac{1}{2}.
    $$

    <p class="qed-riga"><span class="qed">□</span></p>

<a id="box-14-prop_ceil_lp_bpp_ratio_tight"></a>

!!! teorema "Proposition 10.9"

    There are BPP instances such that:

    \begin{equation*}
    \frac{\lceil z(\mathrm{LP}_{\mathrm{BPP}}) \rceil}{z(\mathrm{ILP}_{\mathrm{BPP}})}  \to \frac{1}{2} \text{    as    } n \to +\infty \tag{10.18}
    \end{equation*}

??? dimostrazione "Proof"

    Given $n \in \Z_{\ge 2}$ (take $n$ even), consider the BPP instance with bin capacity $c=n$ and $n$ items having the following weights:

    $$
    w_j=\frac{c}{2}+1=\frac{n}{2}+1, \qquad \forall j\in\mathscr I.
    $$

    No bin can contain more than one item, since $w_j>c/2$ for every $j$. Thus each item must be packed alone in its own bin. Therefore, the BPP optimal value is

    $$
    z(\mathrm{ILP}_{\mathrm{BPP}})=n.
    $$

    For the LP relaxation we have:

    $$
    z(\mathrm{LP}_{\mathrm{BPP}})=\frac{\sum_{j\in\mathscr I} w_j}{c}
    =\frac{n\left(\frac{n}{2}+1\right)}{n}
    =\frac{n}{2}+1,
    $$

    hence $\lceil z(\mathrm{LP}_{\mathrm{BPP}})\rceil=\frac{n}{2}+1$ (since $n$ is even). It follows that:

    $$
    \lim_{n\to+\infty}\frac{\lceil z(\mathrm{LP}_{\mathrm{BPP}})\rceil}{z(\mathrm{ILP}_{\mathrm{BPP}})}
    =
    \lim_{n\to+\infty}\frac{\frac{n}{2}+1}{n}
    =
    \lim_{n\to+\infty}\left(\frac{1}{2}+\underbrace{\frac{1}{n}}_{\to 0}\right)
    =\frac{1}{2}.
    $$

    Accordingly, we conclude that:

    $$
    \frac{\lceil z(\mathrm{LP}_{\mathrm{BPP}})\rceil}{z(\mathrm{ILP}_{\mathrm{BPP}})} \to \frac{1}{2}
    \qquad \text{as} \qquad n \to +\infty.
    $$

    <p class="qed-riga"><span class="qed">□</span></p>

---

**Next:** [10.5 An ILP model for the Cutting Stock Problem](an-ilp-model-for-the-cutting-stock-problem.md)
