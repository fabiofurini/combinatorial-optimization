---
title: "Exercises · Formulations of knapsack problems"
---

# Exercises · Formulations of knapsack problems

<div class="info-capitolo" markdown>

**Exercises · Chapter 9** · each solution opens with a click · [:material-book-open-variant: Chapter 9: Knapsack problems](../formulations/knapsack-formulations/index.md) · [:material-file-pdf-box: Exercises, volume 2 (PDF)](../pdf/exercises-2-formulations.pdf)

</div>

## Knapsack: Dantzig and Martello-Toth upper bounds

!!! formula "Upper bounds used in these exercises"

    The bounds of [Chapter 9 «Formulations of knapsack problems»](https://fabiofurini.github.io/combinatorial-optimization/formulations/knapsack-formulations/), for a KP instance with the items sorted by non-increasing efficiency. The <strong>split item</strong> $s\in\mathscr{I}$ and the <strong>residual capacity</strong> $\mathit{rc}$ are

    \begin{equation*}
    \sum_{j=1}^{s-1} w_j \leq c ~~~\text{and}~~~ \sum_{j=1}^{s} w_j > c, \qquad \mathit{rc} = c - \sum_{j=1}^{s-1} w_j . \tag{K1}
    \end{equation*}

    The <strong>Dantzig upper bound</strong> for $z(\mathrm{ILP}_{\mathrm{KP}})$ is

    \begin{equation*}
    \UB_{\mathrm{D}} = \sum_{j=1}^{s-1} p_{j} + \left\lfloor p_s ~ \frac{\mathit{rc}}{w_s} \right\rfloor . \tag{K2}
    \end{equation*}

    The <strong>Martello-Toth upper bound</strong> for $z(\mathrm{ILP}_{\mathrm{KP}})$ is $\UB_{\mathrm{MT}} = \max\{\UB_0,\, \UB_1\}$, where

    \begin{equation*}
    \UB_0 = \sum_{j=1}^{s-1} p_j + \left\lfloor \mathit{rc} ~ \frac{p_{s+1}}{w_{s+1}} \right\rfloor
    \quad \text{and} \quad
    \UB_1 = \sum_{j=1}^{s-1} p_j + \left\lfloor p_{s} - (w_{s} - \mathit{rc}) ~ \frac{p_{s-1}}{w_{s-1}} \right\rfloor . \tag{K3}
    \end{equation*}

<a id="esercizio-9-1"></a>

!!! esercizio "Exercise 9.1: Upper bounds for the 0/1 Knapsack Problem (1)"

    We consider a knapsack capacity $c=11$ and a set $\mathscr{I}=\{1,2,3,4,5\}$ of $5$ items ($n=5$) with the following profits and weights:

    $$
    \begin{array}{l|rrrrrrrrrr}
    \hline  & {j=1} & {j=2} & {j=3} & {j=4} & {j=5} \\[0.7ex]
    \hline {p_j} & {8} & {6} & {14} & {6} & {2} \\[0.7ex]
    {w_j} & {3} & {3} & {9} & {5} & {2} \\[0.7ex]
    \hline
    \end{array}
    $$

    **Questions**

    1. Check if the items are sorted by non-increasing efficiency otherwise sort them in this order.

    2. Compute the Dantzig and the Martello-Toth upper bound and determine which one is stronger for this KP instance.

??? soluzione "Solution"

    We use the split item and the residual capacity (K1), the Dantzig bound (K2) and the Martello-Toth bound (K3) of the box at the beginning of the chapter.

    1. The items are sorted by non-increasing efficiency since we have:

        $$
        \frac{8}{3} ~~\ge~~ \frac{6}{3} ~~\ge~~ \frac{14}{9} ~~\ge~~ \frac{6}{5} ~~\ge~~  \frac{2}{2}
        $$

    2. The split item is $s=3$ since:

        $$
        \sum_{j=1}^{2} w_{j} = 3+3= 6 \le 11 \text{   and   } \sum_{j=1}^{3} w_{j} = 3+3 + 9= 15 > 11
        $$

        and the  residual capacity is:

        $$
        \mathit{rc} = c - \sum_{j=1}^{2} w_{j} = 11 - 3 - 3 = 5
        $$

        The Dantzig upper bound:

        $$
        \UB_{\mathrm{D}} = \sum_{j=1}^{2}  p_j + \left\lfloor p_3  ~ \frac{\mathit{rc}}{w_3} \right\rfloor = 8 + 6 + \left\lfloor 14 ~ \frac{5}{9} \right\rfloor = 14 + \left\lfloor \frac{70}{9}  \right\rfloor = 21
        $$

        The Martello-Toth upper bound is:

        \begin{align*}
        \UB_0 &= \sum_{j=1}^{2}  p_j  + \left\lfloor \mathit{rc} ~   \frac{p_{4}}{w_{4}} \right\rfloor = 8 + 6 + \left\lfloor 5 ~ \frac{6}{5} \right\rfloor = 14 + 6  = 20\\[2ex]
        \UB_1 &= \sum_{j=1}^{2}  p_j  + \left\lfloor p_{3} - (w_{3} - \mathit{rc}) ~  \frac{p_{2}}{w_{2}} \right\rfloor = 8 + 6 + \left\lfloor 14 - (9-5) ~ \frac{6}{3} \right\rfloor = 14 + 6 = 20\\[2ex]
        \UB_{\mathrm{MT}} &= \max \bigg\{~~\UB_0,~~ \UB_1 ~~\bigg\}  = \max \bigg\{~~20,~~ 20 ~~\bigg\} = 20
        \end{align*}

        For this KP instance, the Martello-Toth upper bound is stronger than Dantzig upper bound since we have:

        $$
        \UB_{\mathrm{MT}} < \UB_{\mathrm{D}}
        $$

<a id="esercizio-9-2"></a>

!!! esercizio "Exercise 9.2: Upper bounds for the 0/1 Knapsack Problem (2)"

    We consider a knapsack capacity $c=8$ and a set $\mathscr{I}=\{1,2,3,4\}$ of $4$ items ($n=4$) with the following profits and weights:

    $$
    \begin{array}{l|rrrrrrrrrrrr}
    \hline  & {j=1} & {j=2} & {j=3} & {j=4} \\[0.7ex]
    \hline {p_j} & {40} & {42} & {25} & {12} \\[0.7ex]
    {w_j} & {4} & {7} & {5} & {3} \\[0.7ex]
    \hline
    \end{array}
    $$

    **Questions**

    1. Check if the items are sorted by non-increasing efficiency otherwise sort them in this order.

    2. Compute the Dantzig and the Martello-Toth upper bound and determine which one is stronger for this KP instance.

??? soluzione "Solution"

    We use the split item and the residual capacity (K1), the Dantzig bound (K2) and the Martello-Toth bound (K3) of the box at the beginning of the chapter.

    1. The items are sorted by non-increasing efficiency since we have:

        $$
        \frac{40}{4} ~~\ge~~ \frac{42}{7} ~~\ge~~ \frac{25}{5} ~~\ge~~ \frac{12}{3}
        $$

    2. The split item is $s=2$ since:

        $$
        w_1 = 4 \le 8 \text{   and   } \sum_{j=1}^{2} w_{j} = 4 + 7 = 11 > 8
        $$

        and the  residual capacity is:

        $$
        \mathit{rc} = c - w_1 = 8 - 4 = 4
        $$

        The Dantzig upper bound is:

        $$
        \UB_{\mathrm{D}} = p_1 + \left\lfloor p_2  ~ \frac{\mathit{rc}}{w_2} \right\rfloor = 40 + \left\lfloor 42 ~ \frac{4}{7} \right\rfloor = 40 + \left\lfloor 24 \right\rfloor = 64
        $$

        The Martello-Toth upper bound is:

        \begin{align*}
        \UB_0 &= p_1 + \left\lfloor \mathit{rc} ~   \frac{p_{3}}{w_{3}} \right\rfloor = 40 + \left\lfloor 4 ~ \frac{25}{5} \right\rfloor = 40 + \left\lfloor 20 \right\rfloor = 60\\[2ex]
        \UB_1 &= p_1 + \left\lfloor p_{2} - (w_{2} - \mathit{rc}) ~  \frac{p_{1}}{w_{1}} \right\rfloor = 40 + \left\lfloor 42 - (7-4) ~ \frac{40}{4} \right\rfloor = 40 + \left\lfloor 12 \right\rfloor = 52\\[2ex]
        \UB_{\mathrm{MT}} &= \max \bigg\{~~\UB_0,~~ \UB_1 ~~\bigg\}  = \max \bigg\{~~60,~~ 52 ~~\bigg\} = 60
        \end{align*}

        For this KP instance, the Martello-Toth upper bound is stronger than Dantzig upper bound since we have:

        $$
        \UB_{\mathrm{MT}} < \UB_{\mathrm{D}}
        $$

<a id="esercizio-9-3"></a>

!!! esercizio "Exercise 9.3: Upper bounds for the 0/1 Knapsack Problem (3)"

    We consider a knapsack capacity $c=15$ and a set $\mathscr{I}=\{1,2,3,4\}$ of $4$ items ($n=4$) with the following profits and weights:

    $$
    \begin{array}{l|rrrrrrrrrrrr}
    \hline  & {j=1} & {j=2} & {j=3} & {j=4} \\[0.7ex]
    \hline {p_j} & {24} & {17} & {12} & {6} \\[0.7ex]
    {w_j} & {10} & {8} & {6} & {5} \\[0.7ex]
    \hline
    \end{array}
    $$

    **Questions**

    1. Check if the items are sorted by non-increasing efficiency otherwise sort them in this order.

    2. Compute the Dantzig and the Martello-Toth upper bound and determine which one is stronger for this KP instance.

??? soluzione "Solution"

    We use the split item and the residual capacity (K1), the Dantzig bound (K2) and the Martello-Toth bound (K3) of the box at the beginning of the chapter.

    1. The items are sorted by non-increasing efficiency since we have:

        $$
        \frac{24}{10} ~~\ge~~\frac{17}{8} ~~\ge~~\frac{12}{6} ~~\ge~~\frac{6}{5}
        $$

    2. The split item is $s=2$ since:

        $$
        w_1 = 10 \le 15 \text{   and   } \sum_{j=1}^{2} w_{j} = 10 + 8 = 18 > 15
        $$

        and the  residual capacity is:

        $$
        \mathit{rc} = c - w_1 = 15 - 10 = 5
        $$

        The Dantzig upper bound is:

        $$
        \UB_{\mathrm{D}} = p_1 + \left\lfloor p_2  ~ \frac{\mathit{rc}}{w_2} \right\rfloor = 24 + \left\lfloor 17 ~ \frac{5}{8} \right\rfloor = 24 + \left\lfloor \frac{85}{8} \right\rfloor = 34
        $$

        The Martello-Toth upper bound is:

        \begin{align*}
        \UB_0 &= p_1 + \left\lfloor \mathit{rc} ~   \frac{p_{3}}{w_{3}} \right\rfloor = 24 + \left\lfloor 5 ~ \frac{12}{6} \right\rfloor = 24 + \left\lfloor 10 \right\rfloor = 34\\[2ex]
        \UB_1 &= p_1 + \left\lfloor p_{2} - (w_{2} - \mathit{rc}) ~  \frac{p_{1}}{w_{1}} \right\rfloor = 24 + \left\lfloor 17 - (8-5) ~ \frac{24}{10} \right\rfloor = 24 + \left\lfloor \frac{49}{5} \right\rfloor = 33\\[2ex]
        \UB_{\mathrm{MT}} &= \max \bigg\{~~\UB_0,~~ \UB_1 ~~\bigg\}  = \max \bigg\{~~34,~~ 33 ~~\bigg\} = 34
        \end{align*}

        For this KP instance, the Martello-Toth upper bound is as strong as the Dantzig upper bound since we have:

        $$
        \UB_{\mathrm{MT}}  = \UB_{\mathrm{D}}
        $$

<a id="esercizio-9-4"></a>

!!! esercizio "Exercise 9.4: Upper bounds for the 0/1 Knapsack Problem (4)"

    We consider a knapsack capacity $c=9$ and a set $\mathscr{I}=\{1,2,3,4,5,6\}$ of $6$ items ($n=6$) with the following profits, weights:

    $$
    \begin{array}{l|rrrrrrrrrrrrr}
    \hline  & {j=1} & {j=2} & {j=3} & {j=4} & {j=5} & {j=6} \\[0.7ex]
    \hline {p_j} & {6} & {5} & {8} & {9} & {6} & {7} \\[0.7ex]
    {w_j} & {2} & {3} & {6} & {7} & {5} & {9} \\[0.7ex]
    \hline
    \end{array}
    $$

    **Questions**

    1. Check if the items are sorted by non-increasing efficiency otherwise sort them in this order.

    2. Compute the Dantzig and the Martello-Toth upper bound and determine which one is stronger for this KP instance.

??? soluzione "Solution"

    We use the split item and the residual capacity (K1), the Dantzig bound (K2) and the Martello-Toth bound (K3) of the box at the beginning of the chapter.

    1. The items are sorted by non-increasing efficiency since we have:

        $$
        \frac{6}{2} ~~\ge~~ \frac{5}{3} ~~\ge~~ \frac{8}{6} ~~\ge~~ \frac{9}{7} ~~\ge~~  \frac{6}{5} ~~\ge~~ \frac{7}{9}
        $$

    2. The split item is $s=3$ since:

        $$
        \sum_{j=1}^{2} w_{j} = 2+3= 5 \le 9 \text{   and   } \sum_{j=1}^{3} w_{j} = 2+3 + 6= 11 > 9
        $$

        and the  residual capacity is:

        $$
        \mathit{rc} = c - \sum_{j=1}^{2} w_{j} = 9 - 2 - 3 = 4
        $$

        The Dantzig upper bound is:

        $$
        \UB_{\mathrm{D}} = \sum_{j = 1}^{2} p_{j} + \left\lfloor p_3  ~ \frac{\mathit{rc}}{w_3} \right\rfloor = 6+5 + \left\lfloor 8 ~ \frac{4}{6} \right\rfloor = 11 + \left\lfloor \frac{16}{3} \right\rfloor =16
        $$

        The Martello-Toth upper bound is:

        \begin{align*}
        \UB_0 &= \sum_{j = 1}^{2} p_{j} + \left\lfloor \mathit{rc} ~   \frac{p_{4}}{w_{4}} \right\rfloor = 6+5 + \left\lfloor 4 ~ \frac{9}{7} \right\rfloor = 11 + \left\lfloor \frac{36}{7} \right\rfloor =16\\[2ex]
        \UB_1 &= \sum_{j=1}^{2} p_j + \left\lfloor p_{3} - (w_{3} - \mathit{rc}) ~  \frac{p_{2}}{w_{2}} \right\rfloor = 6+5 + \left\lfloor 8 -(6-4) ~ \frac{5}{3} \right\rfloor = 11 + \left\lfloor  \frac{14}{3}  \right\rfloor =15\\[2ex]
        \UB_{\mathrm{MT}} &= \max \bigg\{~~\UB_0,~~ \UB_1 ~~\bigg\}  = \max \bigg\{~~16,~~ 15 ~~\bigg\} =16
        \end{align*}

        For this KP instance, the Martello-Toth upper bound is as strong as the Dantzig upper bound since we have:

        $$
        \UB_{\mathrm{MT}}  = \UB_{\mathrm{D}}
        $$

<a id="esercizio-9-5"></a>

!!! esercizio "Exercise 9.5: Upper bounds for the 0/1 Knapsack Problem (5)"

    We consider a knapsack capacity $c=21$ and a set $\mathscr{I}=\{1,2,3,4,5,6\}$ of $6$ items ($n=6$) with the following profits, weights:

    $$
    \begin{array}{l|rrrrrrrrrrrrr}
    \hline  & {j=1} & {j=2} & {j=3} & {j=4} & {j=5} & {j=6} \\[0.7ex]
    \hline {p_j} & {24} & {25} & {13} & {10} & {9} & {2} \\[0.7ex]
    {w_j} & {2} & {6} & {8} & {7} & {10} & {3} \\[0.7ex]
    \hline
    \end{array}
    $$

    **Questions**

    1. Check if the items are sorted by non-increasing efficiency otherwise sort them in this order.

    2. Compute the Dantzig and the Martello-Toth upper bound and determine which one is stronger for this KP instance.

??? soluzione "Solution"

    We use the split item and the residual capacity (K1), the Dantzig bound (K2) and the Martello-Toth bound (K3) of the box at the beginning of the chapter.

    1. The items are sorted by non-increasing efficiency since we have:

        $$
        \frac{24}{2} ~~\ge~~ \frac{25}{6} ~~\ge~~ \frac{13}{8} ~~\ge~~ \frac{10}{7} ~~\ge~~  \frac{9}{10} ~~\ge~~ \frac{2}{3}
        $$

    2. The split item is $s=4$ since:

        $$
        \sum_{j=1}^{3} w_{j} = 2+6+8= 16 \le 21 \text{   and   } \sum_{j=1}^{4} w_{j} = 2+6 + 8+7= 23 > 21
        $$

        and the  residual capacity is:

        $$
        \mathit{rc} = c - \sum_{j=1}^{3} w_{j} = 21 -2-6-8 = 5
        $$

        The Dantzig upper bound is:

        $$
        \UB_{\mathrm{D}} = \sum_{j = 1}^{3} p_{j} + \left\lfloor  p_4 ~ \frac{\mathit{rc}}{w_4} \right\rfloor = 24+25+13 + \left\lfloor 10 ~ \frac{5}{7} \right\rfloor = 62 + \left\lfloor \frac{50}{7} \right\rfloor =69
        $$

        The Martello-Toth upper bound is:

        \begin{align*}
        \UB_0 &= \sum_{j = 1}^{3} p_{j} + \left\lfloor \mathit{rc} ~   \frac{p_{5}}{w_{5}} \right\rfloor = 24+25+13  + \left\lfloor 5 ~ \frac{9}{10} \right\rfloor = 62 + \left\lfloor \frac{9}{2} \right\rfloor =66\\[2ex]
        \UB_1 &= \sum_{j=1}^{3} p_j + \left\lfloor p_{4} - (w_{4} - \mathit{rc}) ~  \frac{p_{3}}{w_{3}} \right\rfloor \\ &= 24+25+13  + \left\lfloor 10 -(7-5) ~ \frac{13}{8} \right\rfloor = 62 + \left\lfloor  \frac{27}{4}  \right\rfloor =68\\[2ex]
        \UB_{\mathrm{MT}} &= \max \bigg\{~~\UB_0,~~ \UB_1 ~~\bigg\}  = \max \bigg\{~~66,~~ 68 ~~\bigg\} =68
        \end{align*}

        For this KP instance,  the Martello-Toth upper bound is stronger than the Dantzig upper bound since we have:

        $$
        \UB_{\mathrm{MT}}  < \UB_{\mathrm{D}}
        $$

## ILP models of the knapsack variants

<a id="esercizio-9-6"></a>

!!! esercizio "Exercise 9.6: ILP model of the Subset Sum Problem"

    The Subset Sum Problem (SSP) and its $\mathrm{ILP}_{\mathrm{SSP}}$ model are in [Chapter 9 «Formulations of knapsack problems»](https://fabiofurini.github.io/combinatorial-optimization/formulations/knapsack-formulations/an-ilp-model-for-the-subset-sum-problem/). We consider a target value $c = 16$ and a set $\mathscr{I} = \{1,2,\dots,6\}$ of $6$ items ($n = 6$), with the following weights:

    $$
    \begin{array}{l|rrrrrr}
    \hline  & {j = 1} & {j = 2} & {j = 3} & {j = 4} & {j = 5} & {j = 6} \\
    \hline {w_j} & {2} & {4} & {5} & {8} & {9} & {13} \\
    \hline
    \end{array}
    $$

    **Questions**

    1. Write the $\mathrm{ILP}_{\mathrm{SSP}}$ model of the chapter for this instance.

    2. Solve the model with Gurobi. Give the optimal value, an optimal solution and the associated solution of the SSP, and say whether the optimal solution is unique.

??? soluzione "Solution"

    1. The model has $6$ binary variables and one linear constraint (besides the domains of the variables). The $\mathrm{ILP}_{\mathrm{SSP}}$ model for this instance is:

        $$
        \begin{array}{rrrrrrrcl}
        {\max} & {2\,x_{1}} & {+\,4\,x_{2}} & {+\,5\,x_{3}} & {+\,8\,x_{4}} & {+\,9\,x_{5}} & {+\,13\,x_{6}} \\[1ex]
        \text{subject to} & {2\,x_{1}} & {+\,4\,x_{2}} & {+\,5\,x_{3}} & {+\,8\,x_{4}} & {+\,9\,x_{5}} & {+\,13\,x_{6}} & {\le} & {16} \\[1ex]
        & {x_{1}}, & {x_{2}}, & {x_{3}}, & {x_{4}}, & {x_{5}}, & {x_{6}} & {\in} & {\{0,1\}}
        \end{array}
        $$

    2. Gurobi returns the optimal value $z(\mathrm{ILP}_{\mathrm{SSP}}) = 16$. An optimal solution is

        $$
        \tilde x_{1}=1,~~\tilde x_{2}=0,~~\tilde x_{3}=1,~~\tilde x_{4}=0,~~\tilde x_{5}=1,~~\tilde x_{6}=0
        $$

        The selected items have total weight $2 + 5 + 9 = 16$. Since $z(\mathrm{ILP}_{\mathrm{SSP}}) = c = 16$, the answer to the SSP is <strong>yes</strong>, with the subset $\tilde S = \{1,3,5\}$.

        Enumerating the $22$ subsets of weight at most $16$ shows that $\tilde S$ is the only subset of weight exactly $16$: the optimal solution is unique.

<a id="esercizio-9-7"></a>

!!! esercizio "Exercise 9.7: ILP model of the Bounded Knapsack Problem"

    The Bounded Knapsack Problem (BKP) and its $\mathrm{ILP}_{\mathrm{BKP}}$ model are in [Chapter 9 «Formulations of knapsack problems»](https://fabiofurini.github.io/combinatorial-optimization/formulations/knapsack-formulations/an-ilp-model-for-the-bounded-knapsack-problem/). We consider a knapsack of capacity $c = 18$ and a set $\mathscr{I} = \{1,2,\dots,5\}$ of $5$ items ($n = 5$), with the following profits, weights and available copies:

    $$
    \begin{array}{l|rrrrr}
    \hline  & {j = 1} & {j = 2} & {j = 3} & {j = 4} & {j = 5} \\
    \hline {p_j} & {5} & {12} & {11} & {7} & {4} \\
    {w_j} & {5} & {7} & {3} & {3} & {8} \\
    {b_j} & {3} & {2} & {3} & {2} & {2} \\
    \hline
    \end{array}
    $$

    **Questions**

    1. Write the $\mathrm{ILP}_{\mathrm{BKP}}$ model of the chapter for this instance.

    2. Solve the model with Gurobi. Give the optimal value, an optimal solution and the associated solution of the BKP, and say whether the optimal solution is unique.

??? soluzione "Solution"

    1. The model has $5$ integer variables and one linear constraint (besides the domains of the variables). The $\mathrm{ILP}_{\mathrm{BKP}}$ model for this instance is:

        $$
        \begin{array}{rrrrrrcl}
        {\max} & {5\,x_{1}} & {+\,12\,x_{2}} & {+\,11\,x_{3}} & {+\,7\,x_{4}} & {+\,4\,x_{5}} \\[1ex]
        \text{subject to} & {5\,x_{1}} & {+\,7\,x_{2}} & {+\,3\,x_{3}} & {+\,3\,x_{4}} & {+\,8\,x_{5}} & {\le} & {18} \\[1ex]
        & {x_{1}}, &  & {x_{3}} &  &  & {\in} & {\{0,1,2,3\}} \\
        &  & {x_{2}}, &  & {x_{4}}, & {x_{5}} & {\in} & {\{0,1,2\}}
        \end{array}
        $$

    2. Gurobi returns the optimal value $z(\mathrm{ILP}_{\mathrm{BKP}}) = 47$. An optimal solution is

        $$
        \tilde x_{1}=0,~~\tilde x_{2}=0,~~\tilde x_{3}=3,~~\tilde x_{4}=2,~~\tilde x_{5}=0
        $$

        It takes three copies of item $3$ and two copies of item $4$: the total weight is $3 \cdot 3 + 2 \cdot 3 = 15 \le 18$ and every $\tilde x_j$ is at most $b_j$.

        Enumerating the $68$ feasible vectors of copies shows that the optimal solution is unique.

<a id="esercizio-9-8"></a>

!!! esercizio "Exercise 9.8: ILP model of the Unbounded Knapsack Problem"

    The Unbounded Knapsack Problem (UKP) and its $\mathrm{ILP}_{\mathrm{UKP}}$ model are in [Chapter 9 «Formulations of knapsack problems»](https://fabiofurini.github.io/combinatorial-optimization/formulations/knapsack-formulations/an-ilp-model-for-the-unbounded-knapsack-problem/). We consider a knapsack of capacity $c = 19$ and a set $\mathscr{I} = \{1,2,\dots,5\}$ of $5$ items ($n = 5$), each available in an unlimited number of copies, with the following profits and weights:

    $$
    \begin{array}{l|rrrrr}
    \hline  & {j = 1} & {j = 2} & {j = 3} & {j = 4} & {j = 5} \\
    \hline {p_j} & {4} & {9} & {7} & {5} & {8} \\
    {w_j} & {4} & {5} & {6} & {6} & {9} \\
    \hline
    \end{array}
    $$

    **Questions**

    1. Write the $\mathrm{ILP}_{\mathrm{UKP}}$ model of the chapter for this instance.

    2. Solve the model with Gurobi. Give the optimal value, an optimal solution and the associated solution of the UKP, and say whether the optimal solution is unique.

??? soluzione "Solution"

    1. The model has $5$ integer variables and one linear constraint (besides the domains of the variables). The $\mathrm{ILP}_{\mathrm{UKP}}$ model for this instance is:

        $$
        \begin{array}{rrrrrrcl}
        {\max} & {4\,x_{1}} & {+\,9\,x_{2}} & {+\,7\,x_{3}} & {+\,5\,x_{4}} & {+\,8\,x_{5}} \\[1ex]
        \text{subject to} & {4\,x_{1}} & {+\,5\,x_{2}} & {+\,6\,x_{3}} & {+\,6\,x_{4}} & {+\,9\,x_{5}} & {\le} & {19} \\[1ex]
        & {x_{1}}, & {x_{2}}, & {x_{3}}, & {x_{4}}, & {x_{5}} & {\in} & {\Z_{\ge 0}}
        \end{array}
        $$

    2. Gurobi returns the optimal value $z(\mathrm{ILP}_{\mathrm{UKP}}) = 31$. An optimal solution is

        $$
        \tilde x_{1}=1,~~\tilde x_{2}=3,~~\tilde x_{3}=0,~~\tilde x_{4}=0,~~\tilde x_{5}=0
        $$

        It takes one copy of item $1$ and three copies of item $2$: the total weight is $1 \cdot 4 + 3 \cdot 5 = 19 \le 19$.

        The capacity constraint gives $x_j \le \hat b_j = \lfloor c/w_j \rfloor$, that is $\hat b_1 = 4$, $\hat b_2 = 3$, $\hat b_3 = 3$, $\hat b_4 = 3$, $\hat b_5 = 2$. Enumerating the $54$ feasible vectors of copies within these bounds shows that the optimal solution is unique.

<a id="esercizio-9-9"></a>

!!! esercizio "Exercise 9.9: ILP model of the Multidimensional Knapsack Problem"

    The Multidimensional Knapsack Problem (MDKP) and its $\mathrm{ILP}_{\mathrm{MDKP}}$ model are in [Chapter 9 «Formulations of knapsack problems»](https://fabiofurini.github.io/combinatorial-optimization/formulations/knapsack-formulations/an-ilp-model-for-the-multidimensional-knapsack-problem/). We consider a $2$-dimensional knapsack ($k = 2$) with capacities $c_1 = 17$ and $c_2 = 14$, and a set $\mathscr{I} = \{1,2,\dots,5\}$ of $5$ items ($n = 5$), with the following profits and weights:

    $$
    \begin{array}{l|rrrrr}
    \hline  & {j = 1} & {j = 2} & {j = 3} & {j = 4} & {j = 5} \\
    \hline {p_j} & {10} & {8} & {11} & {6} & {9} \\
    {w_{1j}} & {9} & {9} & {3} & {6} & {3} \\
    {w_{2j}} & {5} & {5} & {2} & {3} & {9} \\
    \hline
    \end{array}
    $$

    **Questions**

    1. Write the $\mathrm{ILP}_{\mathrm{MDKP}}$ model of the chapter for this instance.

    2. Solve the model with Gurobi. Give the optimal value, an optimal solution and the associated solution of the MDKP, and say whether the optimal solution is unique.

??? soluzione "Solution"

    1. The model has $5$ binary variables and $k = 2$ linear constraints, one for each dimension (besides the domains of the variables). The $\mathrm{ILP}_{\mathrm{MDKP}}$ model for this instance is:

        $$
        \begin{array}{rrrrrrcl}
        {\max} & {10\,x_{1}} & {+\,8\,x_{2}} & {+\,11\,x_{3}} & {+\,6\,x_{4}} & {+\,9\,x_{5}} \\[1ex]
        \text{subject to} & {9\,x_{1}} & {+\,9\,x_{2}} & {+\,3\,x_{3}} & {+\,6\,x_{4}} & {+\,3\,x_{5}} & {\le} & {17} \\
        & {5\,x_{1}} & {+\,5\,x_{2}} & {+\,2\,x_{3}} & {+\,3\,x_{4}} & {+\,9\,x_{5}} & {\le} & {14} \\[1ex]
        & {x_{1}}, & {x_{2}}, & {x_{3}}, & {x_{4}}, & {x_{5}} & {\in} & {\{0,1\}}
        \end{array}
        $$

    2. Gurobi returns the optimal value $z(\mathrm{ILP}_{\mathrm{MDKP}}) = 26$. An optimal solution is

        $$
        \tilde x_{1}=0,~~\tilde x_{2}=0,~~\tilde x_{3}=1,~~\tilde x_{4}=1,~~\tilde x_{5}=1
        $$

        The associated subset is $\tilde S = \{3,4,5\}$, with weight $12 \le 17$ in dimension $1$ and $14 \le 14$ in dimension $2$.

        Enumerating the $16$ feasible subsets shows that the optimal solution is unique.

<a id="esercizio-9-10"></a>

!!! esercizio "Exercise 9.10: ILP model of the Multiple Knapsack Problem"

    The Multiple Knapsack Problem (MKP) and its $\mathrm{ILP}_{\mathrm{MKP}}$ model are in [Chapter 9 «Formulations of knapsack problems»](https://fabiofurini.github.io/combinatorial-optimization/formulations/knapsack-formulations/an-ilp-model-for-the-multiple-knapsack-problem/). We consider $m = 2$ knapsacks with capacities $c_1 = 12$ and $c_2 = 14$, and a set $\mathscr{I} = \{1,2,\dots,5\}$ of $5$ items ($n = 5$), with the following profits and weights:

    $$
    \begin{array}{l|rrrrr}
    \hline  & {j = 1} & {j = 2} & {j = 3} & {j = 4} & {j = 5} \\
    \hline {p_j} & {10} & {12} & {6} & {4} & {9} \\
    {w_j} & {9} & {4} & {5} & {7} & {8} \\
    \hline
    \end{array}
    $$

    **Questions**

    1. Write the $\mathrm{ILP}_{\mathrm{MKP}}$ model of the chapter for this instance.

    2. Solve the model with Gurobi. Give the optimal value, an optimal solution and the associated solution of the MKP, and say whether the optimal solution is unique.

??? soluzione "Solution"

    1. The model has $n\,m = 10$ binary variables, $m = 2$ capacity constraints and $n = 5$ assignment constraints (besides the domains of the variables). With so many variables we write one constraint per line. The $\mathrm{ILP}_{\mathrm{MKP}}$ model for this instance is:

        $$
        \begin{array}{rlcl}
        {\max} & {10\,x_{11}+12\,x_{21}+6\,x_{31}+4\,x_{41}+9\,x_{51}} &  &  \\
        & {+10\,x_{12}+12\,x_{22}+6\,x_{32}+4\,x_{42}+9\,x_{52}} &  &  \\[1ex]
        \text{subject to} & {9\,x_{11}+4\,x_{21}+5\,x_{31}+7\,x_{41}+8\,x_{51}} & {\le} & {12} \\
        & {9\,x_{12}+4\,x_{22}+5\,x_{32}+7\,x_{42}+8\,x_{52}} & {\le} & {14} \\
        & {x_{11}+x_{12}} & {\le} & {1} \\
        & {x_{21}+x_{22}} & {\le} & {1} \\
        & {x_{31}+x_{32}} & {\le} & {1} \\
        & {x_{41}+x_{42}} & {\le} & {1} \\
        & {x_{51}+x_{52}} & {\le} & {1} \\[1ex]
        & {x_{11},~x_{21},~x_{31},~\dots,~x_{52}} & {\in} & {\{0,1\}}
        \end{array}
        $$

    2. Gurobi returns the optimal value $z(\mathrm{ILP}_{\mathrm{MKP}}) = 37$. An optimal solution is

        $$
        \tilde x_{21}=1,~~\tilde x_{51}=1,~~\tilde x_{12}=1,~~\tilde x_{32}=1,
        $$

        with all the other variables equal to $0$. The associated solution of the MKP is $(\tilde S_1, \tilde S_2) = (\{2,5\}, \{1,3\})$: knapsack $1$ has weight $4 + 8 = 12 \le 12$, knapsack $2$ has weight $9 + 5 = 14 \le 14$, and item $4$ is left out.

        Enumerating the $81$ feasible assignments of the items to the knapsacks shows that the optimal solution is unique.

<a id="esercizio-9-11"></a>

!!! esercizio "Exercise 9.11: ILP model of the Multiple-Choice Knapsack Problem"

    The Multiple-Choice Knapsack Problem (MCKP) and its $\mathrm{ILP}_{\mathrm{MCKP}}$ model are in [Chapter 9 «Formulations of knapsack problems»](https://fabiofurini.github.io/combinatorial-optimization/formulations/knapsack-formulations/an-ilp-model-for-the-multiple-choice-knapsack-problem/). We consider a knapsack of capacity $c = 14$ and a set $\mathscr{I} = \{1,2,\dots,7\}$ of $7$ items ($n = 7$), partitioned into $q = 3$ classes $\mathscr{J}_1 = \{1,2\}$, $\mathscr{J}_2 = \{3,4,5\}$ and $\mathscr{J}_3 = \{6,7\}$, with the following profits and weights:

    $$
    \begin{array}{l|rrrrrrr}
    \hline  & {j = 1} & {j = 2} & {j = 3} & {j = 4} & {j = 5} & {j = 6} & {j = 7} \\
    \hline {p_j} & {6} & {4} & {12} & {7} & {11} & {12} & {6} \\
    {w_j} & {6} & {6} & {4} & {3} & {6} & {3} & {8} \\
    \hline
    \end{array}
    $$

    **Questions**

    1. Write the $\mathrm{ILP}_{\mathrm{MCKP}}$ model of the chapter for this instance.

    2. Solve the model with Gurobi. Give the optimal value, an optimal solution and the associated solution of the MCKP, and say whether the optimal solution is unique.

??? soluzione "Solution"

    1. The model has $7$ binary variables, one capacity constraint and $q = 3$ class constraints (besides the domains of the variables). The $\mathrm{ILP}_{\mathrm{MCKP}}$ model for this instance is:

        $$
        \begin{array}{rrrrrrrrcl}
        {\max} & {6\,x_{1}} & {+\,4\,x_{2}} & {+\,12\,x_{3}} & {+\,7\,x_{4}} & {+\,11\,x_{5}} & {+\,12\,x_{6}} & {+\,6\,x_{7}} \\[1ex]
        \text{subject to} & {6\,x_{1}} & {+\,6\,x_{2}} & {+\,4\,x_{3}} & {+\,3\,x_{4}} & {+\,6\,x_{5}} & {+\,3\,x_{6}} & {+\,8\,x_{7}} & {\le} & {14} \\
        & {x_{1}} & {+\,x_{2}} &  &  &  &  &  & {=} & {1} \\
        &  &  & {x_{3}} & {+\,x_{4}} & {+\,x_{5}} &  &  & {=} & {1} \\
        &  &  &  &  &  & {x_{6}} & {+\,x_{7}} & {=} & {1} \\[1ex]
        & {x_{1}}, & {x_{2}}, & {x_{3}}, & {x_{4}}, & {x_{5}}, & {x_{6}}, & {x_{7}} & {\in} & {\{0,1\}}
        \end{array}
        $$

    2. Gurobi returns the optimal value $z(\mathrm{ILP}_{\mathrm{MCKP}}) = 30$. An optimal solution is

        $$
        \tilde x_{1}=1,~~\tilde x_{2}=0,~~\tilde x_{3}=1,~~\tilde x_{4}=0,~~\tilde x_{5}=0,~~\tilde x_{6}=1,~~\tilde x_{7}=0
        $$

        The associated subset is $\tilde S = \{1,3,6\}$: one item per class, with total weight $6 + 4 + 3 = 13 \le 14$.

        Only $4$ of the $12$ choices of one item per class fit in the knapsack; enumerating them shows that the optimal solution is unique.

<a id="esercizio-9-12"></a>

!!! esercizio "Exercise 9.12: ILP model of the Knapsack Problem with Setups"

    The Knapsack Problem with Setups (KPS) and its $\mathrm{ILP}_{\mathrm{KPS}}$ model are in [Chapter 9 «Formulations of knapsack problems»](https://fabiofurini.github.io/combinatorial-optimization/formulations/knapsack-formulations/an-ilp-model-for-the-knapsack-problem-with-setups/). We consider a knapsack of capacity $c = 19$ and a set $\mathscr{I} = \{1,2,\dots,6\}$ of $6$ items ($n = 6$), partitioned into $q = 2$ classes $\mathscr{J}_1 = \{1,2,3\}$ and $\mathscr{J}_2 = \{4,5,6\}$, with setup costs $f_1 = 4$, $f_2 = 2$, setup weights $s_1 = 1$, $s_2 = 4$, and the following revenues and weights:

    $$
    \begin{array}{l|rrrrrr}
    \hline  & {j = 1} & {j = 2} & {j = 3} & {j = 4} & {j = 5} & {j = 6} \\
    \hline {p_j} & {4} & {3} & {8} & {5} & {4} & {11} \\
    {w_j} & {7} & {6} & {3} & {6} & {7} & {4} \\
    \hline
    \end{array}
    $$

    **Questions**

    1. Write the $\mathrm{ILP}_{\mathrm{KPS}}$ model of the chapter for this instance.

    2. Solve the model with Gurobi. Give the optimal value, an optimal solution and the associated solution of the KPS, and say whether the optimal solution is unique.

??? soluzione "Solution"

    1. The model has $6$ variables $x_j$, $q = 2$ variables $y_h$, one capacity constraint and $n = 6$ linking constraints $x_j \le y_h$, written as $x_j - y_h \le 0$ (besides the domains of the variables). The $\mathrm{ILP}_{\mathrm{KPS}}$ model for this instance is:

        $$
        \begin{array}{rrrrrrrrrcl}
        {\max} & {4\,x_{1}} & {+\,3\,x_{2}} & {+\,8\,x_{3}} & {+\,5\,x_{4}} & {+\,4\,x_{5}} & {+\,11\,x_{6}} & {-\,4\,y_{1}} & {-\,2\,y_{2}} \\[1ex]
        \text{subject to} & {7\,x_{1}} & {+\,6\,x_{2}} & {+\,3\,x_{3}} & {+\,6\,x_{4}} & {+\,7\,x_{5}} & {+\,4\,x_{6}} & {+\,y_{1}} & {+\,4\,y_{2}} & {\le} & {19} \\
        & {x_{1}} &  &  &  &  &  & {-\,y_{1}} &  & {\le} & {0} \\
        &  & {x_{2}} &  &  &  &  & {-\,y_{1}} &  & {\le} & {0} \\
        &  &  & {x_{3}} &  &  &  & {-\,y_{1}} &  & {\le} & {0} \\
        &  &  &  & {x_{4}} &  &  &  & {-\,y_{2}} & {\le} & {0} \\
        &  &  &  &  & {x_{5}} &  &  & {-\,y_{2}} & {\le} & {0} \\
        &  &  &  &  &  & {x_{6}} &  & {-\,y_{2}} & {\le} & {0} \\[1ex]
        & {x_{1}}, & {x_{2}}, & {x_{3}}, & {x_{4}}, & {x_{5}}, & {x_{6}} &  &  & {\in} & {\{0,1\}} \\
        &  &  &  &  &  &  & {y_{1}}, & {y_{2}} & {\in} & {\{0,1\}}
        \end{array}
        $$

    2. Gurobi returns the optimal value $z(\mathrm{ILP}_{\mathrm{KPS}}) = 18$. An optimal solution is

        $$
        \tilde x_{1}=0,~~\tilde x_{2}=0,~~\tilde x_{3}=1,~~\tilde x_{4}=1,~~\tilde x_{5}=0,~~\tilde x_{6}=1,~~\tilde y_{1}=1,~~\tilde y_{2}=1
        $$

        The associated subset is $\tilde S = \{3,4,6\}$, which activates both classes: the total weight is $3 + 6 + 4 + 1 + 4 = 18 \le 19$, and the value is $8 + 5 + 11 - 4 - 2 = 18$.

        Enumerating the $27$ feasible subsets shows that the optimal solution is unique.
