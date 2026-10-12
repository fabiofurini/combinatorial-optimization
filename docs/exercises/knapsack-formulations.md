---
title: "Exercises · Formulations of the knapsack problem"
---

# Exercises · Formulations of the knapsack problem

<div class="info-capitolo" markdown>

**Exercises · Chapter 8** · each solution opens with a click · [:material-book-open-variant: Chapter 8: Knapsack](../formulations/knapsack-formulations.md)

</div>

<a id="esercizio-8-1"></a>

!!! esercizio "Exercise 8.1: Upper bounds for the Knapsack Problem (1)"

    We consider a knapsack capacity $c=11$ and a set $\mathscr N=\{1,2,3,4,5\}$ of $5$ items ($n=5$) with the following profits and weights:

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

    !!! nota ""

        Given a KP instance with items are sorted by non-increasing efficiency,  the <strong>Dantzig upper bound</strong> for $z(~{\rm ILP_{KP}}~)$ is:

        \begin{equation*}
        UB_D =  \sum_{j = 1}^{s-1} p_{j}  +  \left\lfloor p_s ~   \frac{\bar{c}}{w_s} \right\rfloor
        \end{equation*}

        where the <strong>split item</strong> is the item

        \begin{equation*}
        {s} \in \mathscr{N}
        ~~~~\text{such that }~~~~
        \sum_{i=1}^{s-1} w_i \leq c
        ~~~~\text{and }~~~~
        \sum_{i=1}^{s} w_i > c
        \end{equation*}

        and the <strong>residual capacity</strong>  is

        \begin{equation*}
        \bar{c} = c - \sum_{i=1}^{s-1} w_i
        \end{equation*}

        The <strong>Martello-Toth upper bound</strong> for $z(~{\rm ILP_{KP}}~)$ is:

        \begin{equation*}
        UB_{MT} = \max \bigg\{~~UB_0,~~ UB_1 ~~\bigg\}
        \end{equation*}

        where

        $$
        UB_0 = \sum_{j=1}^{s - 1} p_j + \left\lfloor \bar{c} ~  \frac{p_{s+1}}{w_{s+1}} \right\rfloor
        \quad \text{and} \quad
        UB_1= \sum_{j=1}^{s - 1} p_j + \left\lfloor p_{s} - (w_{s} - \bar{c}) ~  \frac{p_{s-1}}{w_{s-1}} \right\rfloor
        $$

??? soluzione "Solution"

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
        \bar{c} = c - \sum_{j=1}^{2} w_{j} = 11 - 3 - 3 = 5
        $$

        The Dantzig upper bound:

        $$
        UB_D = \sum_{j=1}^{2}  p_j + \left\lfloor p_3  ~ \frac{\bar{c}}{w_3} \right\rfloor = 8 + 6 + \left\lfloor 14 ~ \frac{5}{9} \right\rfloor = 14 + \left\lfloor \frac{70}{9}  \right\rfloor = 21
        $$

        The Martello-Toth upper bound is:

        \begin{align*}
        UB_0 &= \sum_{j=1}^{2}  p_j  + \left\lfloor \bar{c} ~   \frac{p_{4}}{w_{4}} \right\rfloor = 8 + 6 + \left\lfloor 5 ~ \frac{6}{5} \right\rfloor = 14 + 6  = 20\\[2ex]
        UB_1 &= \sum_{j=1}^{2}  p_j  + \left\lfloor p_{3} - (w_{3} - \bar{c}) ~  \frac{p_{2}}{w_{2}} \right\rfloor = 8 + 6 + \left\lfloor 14 - (9-5) ~ \frac{6}{3} \right\rfloor = 14 + 6 = 20\\[2ex]
        UB_{MT} &= \max \bigg\{~~UB_0,~~ UB_1 ~~\bigg\}  = \max \bigg\{~~20,~~ 20 ~~\bigg\} = 20
        \end{align*}

        For this KP instance, the Martello-Toth upper bound is stronger than Dantzig upper bound since we have:

        $$
        UB_{MT} < UB_{D}
        $$

<a id="esercizio-8-2"></a>

!!! esercizio "Exercise 8.2: Upper bounds for the Knapsack Problem (2)"

    We consider a knapsack capacity $c=8$ and a set $\mathscr N=\{1,2,3,4\}$ of $4$ items ($n=4$) with the following profits and weights:

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

    !!! nota ""

        Given a KP instance with items are sorted by non-increasing efficiency,  the <strong>Dantzig upper bound</strong> for $z(~{\rm ILP_{KP}}~)$ is:

        \begin{equation*}
        UB_D =  \sum_{j = 1}^{s-1} p_{j}  +  \left\lfloor p_s ~   \frac{\bar{c}}{w_s} \right\rfloor
        \end{equation*}

        where the <strong>split item</strong> is the item

        \begin{equation*}
        {s} \in \mathscr{N}
        ~~~~\text{such that }~~~~
        \sum_{i=1}^{s-1} w_i \leq c
        ~~~~\text{and }~~~~
        \sum_{i=1}^{s} w_i > c
        \end{equation*}

        and the <strong>residual capacity</strong>  is

        \begin{equation*}
        \bar{c} = c - \sum_{i=1}^{s-1} w_i
        \end{equation*}

        The <strong>Martello-Toth upper bound</strong> for $z(~{\rm ILP_{KP}}~)$ is:

        \begin{equation*}
        UB_{MT} = \max \bigg\{~~UB_0,~~ UB_1 ~~\bigg\}
        \end{equation*}

        where

        $$
        UB_0 = \sum_{j=1}^{s - 1} p_j + \left\lfloor \bar{c} ~  \frac{p_{s+1}}{w_{s+1}} \right\rfloor
        \quad \text{and} \quad
        UB_1= \sum_{j=1}^{s - 1} p_j + \left\lfloor p_{s} - (w_{s} - \bar{c}) ~  \frac{p_{s-1}}{w_{s-1}} \right\rfloor
        $$

??? soluzione "Solution"

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
        \bar{c} = c - w_1 = 8 - 4 = 4
        $$

        The Dantzig upper bound is:

        $$
        UB_D = p_1 + \left\lfloor p_2  ~ \frac{\bar{c}}{w_2} \right\rfloor = 40 + \left\lfloor 42 ~ \frac{4}{7} \right\rfloor = 40 + \left\lfloor 24 \right\rfloor = 64
        $$

        The Martello-Toth upper bound is:

        \begin{align*}
        UB_0 &= p_1 + \left\lfloor \bar{c} ~   \frac{p_{3}}{w_{3}} \right\rfloor = 40 + \left\lfloor 4 ~ \frac{25}{5} \right\rfloor = 40 + \left\lfloor 20 \right\rfloor = 60\\[2ex]
        UB_1 &= p_1 + \left\lfloor p_{2} - (w_{2} - \bar{c}) ~  \frac{p_{1}}{w_{1}} \right\rfloor = 40 + \left\lfloor 42 - (7-4) ~ \frac{40}{4} \right\rfloor = 40 + \left\lfloor 12 \right\rfloor = 52\\[2ex]
        UB_{MT} &= \max \bigg\{~~UB_0,~~ UB_1 ~~\bigg\}  = \max \bigg\{~~60,~~ 52 ~~\bigg\} = 60
        \end{align*}

        For this KP instance, the Martello-Toth upper bound is stronger than Dantzig upper bound since we have:

        $$
        UB_{MT} < UB_{D}
        $$

<a id="esercizio-8-3"></a>

!!! esercizio "Exercise 8.3: Upper bounds for the Knapsack Problem (3)"

    We consider a knapsack capacity $c=15$ and a set $\mathscr N=\{1,2,3,4\}$ of $4$ items ($n=4$) with the following profits and weights:

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

    !!! nota ""

        Given a KP instance with items are sorted by non-increasing efficiency,  the <strong>Dantzig upper bound</strong> for $z(~{\rm ILP_{KP}}~)$ is:

        \begin{equation*}
        UB_D =  \sum_{j = 1}^{s-1} p_{j}  +  \left\lfloor p_s ~   \frac{\bar{c}}{w_s} \right\rfloor
        \end{equation*}

        where the <strong>split item</strong> is the item

        \begin{equation*}
        {s} \in \mathscr{N}
        ~~~~\text{such that }~~~~
        \sum_{i=1}^{s-1} w_i \leq c
        ~~~~\text{and }~~~~
        \sum_{i=1}^{s} w_i > c
        \end{equation*}

        and the <strong>residual capacity</strong>  is

        \begin{equation*}
        \bar{c} = c - \sum_{i=1}^{s-1} w_i
        \end{equation*}

        The <strong>Martello-Toth upper bound</strong> for $z(~{\rm ILP_{KP}}~)$ is:

        \begin{equation*}
        UB_{MT} = \max \bigg\{~~UB_0,~~ UB_1 ~~\bigg\}
        \end{equation*}

        where

        $$
        UB_0 = \sum_{j=1}^{s - 1} p_j + \left\lfloor \bar{c} ~  \frac{p_{s+1}}{w_{s+1}} \right\rfloor
        \quad \text{and} \quad
        UB_1= \sum_{j=1}^{s - 1} p_j + \left\lfloor p_{s} - (w_{s} - \bar{c}) ~  \frac{p_{s-1}}{w_{s-1}} \right\rfloor
        $$

??? soluzione "Solution"

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
        \bar{c} = c - w_1 = 15 - 10 = 5
        $$

        The Dantzig upper bound is:

        $$
        UB_D = p_1 + \left\lfloor p_2  ~ \frac{\bar{c}}{w_2} \right\rfloor = 24 + \left\lfloor 17 ~ \frac{5}{8} \right\rfloor = 24 + \left\lfloor \frac{85}{8} \right\rfloor = 34
        $$

        The Martello-Toth upper bound is:

        \begin{align*}
        UB_0 &= p_1 + \left\lfloor \bar{c} ~   \frac{p_{3}}{w_{3}} \right\rfloor = 24 + \left\lfloor 5 ~ \frac{12}{6} \right\rfloor = 24 + \left\lfloor 10 \right\rfloor = 34\\[2ex]
        UB_1 &= p_1 + \left\lfloor p_{2} - (w_{2} - \bar{c}) ~  \frac{p_{1}}{w_{1}} \right\rfloor = 24 + \left\lfloor 17 - (8-5) ~ \frac{24}{10} \right\rfloor = 24 + \left\lfloor \frac{49}{5} \right\rfloor = 33\\[2ex]
        UB_{MT} &= \max \bigg\{~~UB_0,~~ UB_1 ~~\bigg\}  = \max \bigg\{~~34,~~ 33 ~~\bigg\} = 34
        \end{align*}

        For this KP instance, the Martello-Toth upper bound is as strong as the Dantzig upper bound since we have:

        $$
        UB_{MT}  = UB_{D}
        $$

<a id="esercizio-8-4"></a>

!!! esercizio "Exercise 8.4: Upper bounds for the Knapsack Problem (4)"

    We consider a knapsack capacity $c=9$ and a set $\mathscr{N}=\{1,2,3,4,5,6\}$ of $6$ items ($n=6$) with the following profits, weights:

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

    !!! nota ""

        Given a KP instance with items are sorted by non-increasing efficiency,  the <strong>Dantzig upper bound</strong> for $z(~{\rm ILP_{KP}}~)$ is:

        \begin{equation*}
        UB_D =  \sum_{j = 1}^{s-1} p_{j}  +  \left\lfloor p_s ~   \frac{\bar{c}}{w_s} \right\rfloor
        \end{equation*}

        where the <strong>split item</strong> is the item

        \begin{equation*}
        {s} \in \mathscr{N}
        ~~~~\text{such that }~~~~
        \sum_{i=1}^{s-1} w_i \leq c
        ~~~~\text{and }~~~~
        \sum_{i=1}^{s} w_i > c
        \end{equation*}

        and the <strong>residual capacity</strong>  is

        \begin{equation*}
        \bar{c} = c - \sum_{i=1}^{s-1} w_i
        \end{equation*}

        The <strong>Martello-Toth upper bound</strong> for $z(~{\rm ILP_{KP}}~)$ is:

        \begin{equation*}
        UB_{MT} = \max \bigg\{~~UB_0,~~ UB_1 ~~\bigg\}
        \end{equation*}

        where

        $$
        UB_0 = \sum_{j=1}^{s - 1} p_j + \left\lfloor \bar{c} ~  \frac{p_{s+1}}{w_{s+1}} \right\rfloor
        \quad \text{and} \quad
        UB_1= \sum_{j=1}^{s - 1} p_j + \left\lfloor p_{s} - (w_{s} - \bar{c}) ~  \frac{p_{s-1}}{w_{s-1}} \right\rfloor
        $$

??? soluzione "Solution"

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
        \bar{c} = c - \sum_{j=1}^{2} w_{j} = 9 - 2 - 3 = 4
        $$

        The Dantzig upper bound is:

        $$
        UB_D = \sum_{j = 1}^{2} p_{j} + \left\lfloor p_3  ~ \frac{\bar{c}}{w_3} \right\rfloor = 6+5 + \left\lfloor 8 ~ \frac{4}{6} \right\rfloor = 11 + \left\lfloor \frac{16}{3} \right\rfloor =16
        $$

        The Martello-Toth upper bound is:

        \begin{align*}
        UB_0 &= \sum_{j = 1}^{2} p_{j} + \left\lfloor \bar{c} ~   \frac{p_{4}}{w_{4}} \right\rfloor = 6+5 + \left\lfloor 4 ~ \frac{9}{7} \right\rfloor = 11 + \left\lfloor \frac{36}{7} \right\rfloor =16\\[2ex]
        UB_1 &= \sum_{j=1}^{2} p_j + \left\lfloor p_{3} - (w_{3} - \bar{c}) ~  \frac{p_{2}}{w_{2}} \right\rfloor = 6+5 + \left\lfloor 8 -(6-4) ~ \frac{5}{3} \right\rfloor = 11 + \left\lfloor  \frac{14}{3}  \right\rfloor =15\\[2ex]
        UB_{MT} &= \max \bigg\{~~UB_0,~~ UB_1 ~~\bigg\}  = \max \bigg\{~~16,~~ 15 ~~\bigg\} =16
        \end{align*}

        For this KP instance, the Martello-Toth upper bound is as strong as the Dantzig upper bound since we have:

        $$
        UB_{MT}  = UB_{D}
        $$

<a id="esercizio-8-5"></a>

!!! esercizio "Exercise 8.5: Upper bounds for the Knapsack Problem (5)"

    We consider a knapsack capacity $c=21$ and a set $\mathscr{N}=\{1,2,3,4,5,6\}$ of $6$ items ($n=6$) with the following profits, weights:

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

    !!! nota ""

        Given a KP instance with items are sorted by non-increasing efficiency,  the <strong>Dantzig upper bound</strong> for $z(~{\rm ILP_{KP}}~)$ is:

        \begin{equation*}
        UB_D =  \sum_{j = 1}^{s-1} p_{j}  +  \left\lfloor p_s ~   \frac{\bar{c}}{w_s} \right\rfloor
        \end{equation*}

        where the <strong>split item</strong> is the item

        \begin{equation*}
        {s} \in \mathscr{N}
        ~~~~\text{such that }~~~~
        \sum_{i=1}^{s-1} w_i \leq c
        ~~~~\text{and }~~~~
        \sum_{i=1}^{s} w_i > c
        \end{equation*}

        and the <strong>residual capacity</strong>  is

        \begin{equation*}
        \bar{c} = c - \sum_{i=1}^{s-1} w_i
        \end{equation*}

        The <strong>Martello-Toth upper bound</strong> for $z(~{\rm ILP_{KP}}~)$ is:

        \begin{equation*}
        UB_{MT} = \max \bigg\{~~UB_0,~~ UB_1 ~~\bigg\}
        \end{equation*}

        where

        $$
        UB_0 = \sum_{j=1}^{s - 1} p_j + \left\lfloor \bar{c} ~  \frac{p_{s+1}}{w_{s+1}} \right\rfloor
        \quad \text{and} \quad
        UB_1= \sum_{j=1}^{s - 1} p_j + \left\lfloor p_{s} - (w_{s} - \bar{c}) ~  \frac{p_{s-1}}{w_{s-1}} \right\rfloor
        $$

??? soluzione "Solution"

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
        \bar{c} = c - \sum_{j=1}^{3} w_{j} = 21 -2-6-8 = 5
        $$

        The Dantzig upper bound is:

        $$
        UB_D = \sum_{j = 1}^{3} p_{j} + \left\lfloor  p_4 ~ \frac{\bar{c}}{w_4} \right\rfloor = 24+25+13 + \left\lfloor 10 ~ \frac{5}{7} \right\rfloor = 62 + \left\lfloor \frac{50}{7} \right\rfloor =69
        $$

        The Martello-Toth upper bound is:

        \begin{align*}
        UB_0 &= \sum_{j = 1}^{3} p_{j} + \left\lfloor \bar{c} ~   \frac{p_{5}}{w_{5}} \right\rfloor = 24+25+13  + \left\lfloor 5 ~ \frac{9}{10} \right\rfloor = 62 + \left\lfloor \frac{9}{2} \right\rfloor =66\\[2ex]
        UB_1 &= \sum_{j=1}^{3} p_j + \left\lfloor p_{4} - (w_{4} - \bar{c}) ~  \frac{p_{3}}{w_{3}} \right\rfloor \\ &= 24+25+13  + \left\lfloor 10 -(7-5) ~ \frac{13}{8} \right\rfloor = 62 + \left\lfloor  \frac{27}{4}  \right\rfloor =68\\[2ex]
        UB_{MT} &= \max \bigg\{~~UB_0,~~ UB_1 ~~\bigg\}  = \max \bigg\{~~66,~~ 68 ~~\bigg\} =68
        \end{align*}

        For this KP instance,  the Martello-Toth upper bound is stronger than the Dantzig upper bound since we have:

        $$
        UB_{MT}  < UB_{D}
        $$
