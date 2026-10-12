---
title: "Exercises · Knapsack: branch-and-bound on the critical item"
---

# Exercises · Knapsack: branch-and-bound on the critical item

<div class="info-capitolo" markdown>

**Exercises · Chapter 33** · each solution opens with a click · [:material-book-open-variant: Chapter 33: Knapsack: B&B](../specialized-algorithms/knapsack-branch-and-bound.md) · [:material-file-pdf-box: Exercises, volume 6 (PDF)](../pdf/exercises-6-specialized-algorithms.pdf)

</div>

<a id="esercizio-33-1"></a>

!!! esercizio "Exercise 33.1: Branch-and-Bound Algorithm for the Knapsack Problem (P1)"

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

    1. Check if the items are sorted by non-increasing efficiency otherwise sort them in this order.  Write the $ILP_\text{KP}$ model and the $LP_\text{KP}$ model for the KP instance.

    2. Execute the branch-and-bound algorithm to solve the $ILP_\text{KP}$ model for the Knapsack Problem using:

        1. the split-item rule as branching-variable selection strategy;

        2. the LIFO rule as branching-node selection strategy;

        3. solve first the down-branching node and then the up-branching node;

        4. set the Incumbent Solution ${\bar{\boldsymbol x}}(\,ILP_\text{KP}\,)$ to the following  heuristic solution :

            $$
            \bar{x}_1=1, ~~~ \bar{x}_2=1,~~~ \bar{x}_3= 0,~~\bar{x}_4=1,~~\bar{x}_5=0
            $$

            and set the Lower Bound $LB$ accordingly.

    3. Determine and comment the correspondent branch-and-bound tree showing the reason why the branching nodes can be pruned.

??? soluzione "Solution"

    1. The items are sorted by non-increasing efficiency since we have:

        $$
        \frac{8}{3} ~~\ge~~ \frac{6}{3} ~~\ge~~ \frac{14}{9} ~~\ge~~ \frac{6}{5} ~~\ge~~  \frac{2}{2}
        $$

        This is the $ILP_\text{KP}$ model  for the KP instance:

        $$
        \begin{array}{rrrrrrrrrrrrr}
        {\max} & 8 \, {x_1} & + 6 \, {x_2} & + 14 \, {x_3} & + 6 \, {x_4} & + 2 \, {x_5} \\[2ex]
        & 3 \, {x_1} & + 3 \, {x_2} & + 9 \, {x_3} & + 5 \, {x_4} & + 2 \, {x_5} & {\le} & 11 \\[2ex]
        & {x_1}, & {x_2}, & {x_3}, & {x_4}, & {x_5} & { \in} & { \{0,1\}}
        \end{array}
        $$

        This is the $LP_\text{KP}$ model for the KP instance:

        $$
        \begin{array}{rrrrrrrrrrrrr}
        {\max} & 8 \, {x_1} & + 6 \, {x_2} & + 14 \, {x_3} & + 6 \, {x_4} & + 2 \, {x_5} \\[2ex]
        & 3 \, {x_1} & + 3 \, {x_2} & + 9 \, {x_3} & + 5 \, {x_4} & + 2 \, {x_5} & {\le} & 11 \\[2ex]
        & {x_1} &  &  &  &  & {\le} & 1 \\[1ex]
        &  & {x_2} &  &  &  & {\le} & 1 \\[1ex]
        &  &  & {x_3} &  &  & {\le} & 1 \\[1ex]
        &  &  &  & {x_4} &  & {\le} & 1 \\[1ex]
        &  &  &  &  & {x_5} & {\le} & 1 \\[1ex]
        & {x_1}, & {x_2}, & {x_3}, & {x_4}, & {x_5} & { \ge} & { 0}
        \end{array}
        $$

    2. Execution of the branch-and-bound algorithm to solve the $ILP_\text{KP}$ model.

        - <span style="color:#e03131"><strong>Initialization</strong></span>

            For the $LP^1_\text{KP}$ problem, the split item is $s=3$ and the residual capacity is $\bar c = 5$. An  optimal solution ${ \tilde{ \boldsymbol x}}(\,LP^1_\text{KP}\,)$ is:

            $$
            \tilde{x}_1=1,~~\tilde{x}_2=1,~~\tilde{x}_3=\frac{5}{9},~~\tilde{x}_4=0,~~\tilde{x}_5=0
            $$

            the optimal value is:

            $$
            z(~LP^1_\text{KP}~) = 8 \cdot 1 + 6 \cdot 1 +  14 \cdot \frac{5}{9} =  \frac{196}{9}
            $$

            The optimal solution ${ \tilde{ \boldsymbol x}}(\,LP^1_\text{KP}\,)$ is <strong>fractional</strong> and the $LP^1_\text{KP}$ problem is <strong>feasible</strong>, so the $LP^1_\text{KP}$ problem is inserted in the Problem List $L$ and the Lower Bound $LB$ is set to $20$ ($LB(\bar{\boldsymbol x})= 20$).

            Due to the current Lower Bound $LB$ and Upper Bound $UB$, we have:

            $$
            20 ~~\le~~ z(~ILP~) ~~\le~~  \underbrace{\left\lfloor \dfrac{196}{9} \right\rfloor}_{=21}
            $$

        - <span style="color:#e03131"><strong>Iteration  1</strong></span>

            The $LP^1_\text{KP}$ problem is extracted and deleted from the Problem List $L$.

            The branching variable is $x_3$. The $LP^2_\text{KP}$ and $LP^3_\text{KP}$ problems are created by unselecting ($x_3 \le 0$) and selecting ($x_3 \ge 1$) item $3$.

            1. Solution of the $LP^2_\text{KP}$ problem

                We have

                $$
                \mathscr{I}^2 = \{1,2,4,5\},~~~\mathscr{I}^2_\text{out} = \{3\}, ~~~\mathscr{I}^2_\text{in} = \emptyset
                $$

                The capacity is $c(2)=11$ and the objective-function constant is $p(2)=0$. The split item is $s=5$ and the residual capacity is $\bar c = 0$. An  optimal solution ${ \tilde{ \boldsymbol x}}(\,LP^2_\text{KP}\,)$ is:

                $$
                \tilde{x}_1=1,~~\tilde{x}_2=1,~~\tilde{x}_4=1,~~\tilde{x}_5=0, \text{   and   }  z(~LP^2_\text{KP}~)=   20
                $$

                The $LP^2_{\text{KP}}$ problem is <strong>feasible</strong> and we have:

                $$
                \left\lfloor z(LP^2_\text{KP}) \right\rfloor \le LB
                \qquad \text{since} \qquad
                20 \le 20
                $$

                accordingly, the branching node is <u>pruned by upper bound</u>.

            2. Solution of the $LP^3_\text{KP}$ problem

                We have

                $$
                \mathscr{I}^3 = \{1,2,4,5\},~~~\mathscr{I}^3_\text{out} = \emptyset, ~~~\mathscr{I}^3_\text{in} = \{3\}
                $$

                The capacity is $c(3)=2$ and the objective-function constant is $p(3)=14$. The split item is $s=1$ and the residual capacity is $\bar c = 2$. An  optimal solution ${ \tilde{ \boldsymbol x}}(\,LP^3_\text{KP}\,)$ is:

                $$
                \tilde{x}_1=\frac{2}{3},~~\tilde{x}_2=0,~~\tilde{x}_4=0,~~\tilde{x}_5=0, \text{   and   }  z(~LP^3_\text{KP}~)= 14 + 8 \cdot \frac{2}{3}=   \frac{58}{3}
                $$

                The $LP^3_{\text{KP}}$ problem is <strong>feasible</strong> and we have:

                $$
                \left\lfloor z(LP^3_\text{KP}) \right\rfloor \le LB
                \qquad \text{since} \qquad
                \underbrace{\left\lfloor\frac{58}{3} \right\rfloor}_{ = 19} \le 20
                $$

                accordingly, the branching node is <u>pruned by upper bound</u>.

            At the end of the first iteration, Node 2 and Node 3 are both pruned by upper bound. The corresponding Branch-and-Bound Tree is:

            ![Figure 1](../img/ex-knapsack-branch-and-bound/fig01.svg){ .fig loading=lazy  }

        - <span style="color:#e03131"><strong>Termination</strong></span>

            Since the Problem List $L$ is empty, the $ILP_\text{KP}$ problem is solved to optimality.

            The optimal value is $z(~ILP_\text{KP}~)=20$ (the value of the Lower Bound $LB$) and an optimal solution ${\tilde {\boldsymbol x}}(\,ILP_\text{KP}\,)$  is $\tilde  x_1=1,\tilde  x_2=1,\tilde  x_3=0,\tilde  x_4=1,\tilde  x_5=0$ (the Incumbent Solution ${\bar{\boldsymbol x}}(ILP_{\text{KP}})$).

    3. This is the <strong>Branch-and-Bound Tree</strong> of the previous execution of the <strong>Branch-and-Bound Algorithm</strong>, showing for each solved branching node the optimal value of the associated $LP_\text{KP}$ problem, the current Lower Bound $LB$, and the pruning criteria.

        ![Figure 2](../img/ex-knapsack-branch-and-bound/fig02.svg){ .fig loading=lazy  }

<a id="esercizio-33-2"></a>

!!! esercizio "Exercise 33.2: Branch-and-Bound Algorithm for the Knapsack Problem (P2)"

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

    1. Check if the items are sorted by non-increasing efficiency otherwise sort them in this order.  Write the $ILP_\text{KP}$ model and the $LP_\text{KP}$ model for the KP instance.

    2. Execute the branch-and-bound algorithm to solve the $ILP_\text{KP}$ model for the Knapsack Problem using:

        1. the split-item rule as branching-variable selection strategy;

        2. the LIFO rule as branching-node selection strategy;

        3. solve first the down-branching node and then the up-branching node;

        4. set the Incumbent Solution ${\bar{\boldsymbol x}}(\,ILP_\text{KP}\,)$ to the following  heuristic solution :

            $$
            \bar{x}_1=1, ~~~ \bar{x}_2=0,~~~ \bar{x}_3= 0,~~\bar{x}_4=1
            $$

            and set the Lower Bound $LB$ accordingly.

    3. Determine and comment the correspondent branch-and-bound tree showing the reason why the branching nodes can be pruned.

??? soluzione "Solution"

    1. The items are sorted by non-increasing efficiency since we have:

        $$
        \frac{40}{4} ~~\ge~~ \frac{42}{7} ~~\ge~~ \frac{25}{5} ~~\ge~~ \frac{12}{3}
        $$

        This is the $ILP_\text{KP}$ model  for the KP instance:

        $$
        \begin{array}{rrrrrrrrrrrrr}
        {\max} & 40 \, {x_1} & + 42 \, {x_2} & + 25 \, {x_3} & + 12 \, {x_4} \\[1ex]
        & 4 \, {x_1} & + 7 \, {x_2} & + 5 \, {x_3} & + 3 \, {x_4} & {\le} & 8 \\[1ex]
        & {x_1}, & {x_2}, & {x_3}, & {x_4} & { \in} & { \{0,1\}}
        \end{array}
        $$

        This is the $LP_\text{KP}$ model  for the KP instance:

        $$
        \begin{array}{rrrrrrrrrrrrr}
        {\max} & 40 \, {x_1} & + 42 \, {x_2} & + 25 \, {x_3} & + 12 \, {x_4} \\[1ex]
        & 4 \, {x_1} & + 7 \, {x_2} & + 5 \, {x_3} & + 3 \, {x_4} & {\le} & 8 \\[1ex]
        & {x_1} &  &  &  & {\le} & 1 \\[1ex]
        &  & {x_2} &  &  & {\le} & 1 \\[1ex]
        &  &  & {x_3} &  & {\le} & 1 \\[1ex]
        &  &  &  & {x_4} & {\le} & 1 \\[1ex]
        & {x_1}, & {x_2}, & {x_3}, & {x_4} & { \ge} & { 0}
        \end{array}
        $$

    2. Execution of the branch-and-bound algorithm to solve the $ILP_\text{KP}$ model.

        - <span style="color:#e03131"><strong>Initialization</strong></span>

            For the $LP^1_\text{KP}$ problem, the split item is $s=2$ and the residual capacity is $\bar c = 4$. An  optimal solution ${ \tilde{ \boldsymbol x}}(\,LP^1_\text{KP}\,)$ is:

            $$
            \tilde{x}_1=1,~~\tilde{x}_2=\frac{4}{7},~~\tilde{x}_3=0,~~\tilde{x}_4=0
            $$

            the optimal value is:

            $$
            z(~LP^1_\text{KP}~) = 40 \cdot 1 + 42 \cdot \frac{4}{7} =64
            $$

            The optimal solution ${ \tilde{ \boldsymbol x}}(\,LP^1_\text{KP}\,)$ is <strong>fractional</strong> and the $LP^1_\text{KP}$ problem is <strong>feasible</strong>, so the $LP^1_\text{KP}$ problem is inserted in the Problem List $L$ and the Lower Bound $LB$ is set to $52$ ($LB(\bar{\boldsymbol x})= 52$).

            Due to the current Lower Bound $LB$ and Upper Bound $UB$, we have:

            $$
            52 ~~\le~~ z(~ILP~) ~~\le~~  64
            $$

        - <span style="color:#e03131"><strong>Iteration  1</strong></span>

            The $LP^1_\text{KP}$ problem is extracted and deleted from the Problem List $L$.

            The branching variable is $x_2$. The $LP^2_\text{KP}$ and $LP^3_\text{KP}$ problems are created by unselecting ($x_2 \le 0$) and selecting ($x_2 \ge 1$) item $2$.

            1. Solution of the $LP^2_\text{KP}$ problem

                We have

                $$
                \mathscr{I}^2 = \{1,3,4\},~~~\mathscr{I}^2_\text{out} = \{2\}, ~~~\mathscr{I}^2_\text{in} = \emptyset
                $$

                The capacity is $c(2)=8$ and the objective-function constant is $p(2)=0$. The split item is $s=3$ and the residual capacity is $\bar c = 4$. An  optimal solution ${ \tilde{ \boldsymbol x}}(\,LP^2_\text{KP}\,)$ is:

                $$
                \tilde{x}_1=1,~~\tilde{x}_3=\frac{4}{5},~~\tilde{x}_4=0 \text{   and   }  z(~LP^2_\text{KP}~)=  40\cdot 1 + 25 \cdot \frac{4}{5}= 60
                $$

                The $LP^2_{\text{KP}}$ problem is <strong>feasible</strong> and we have:

                $$
                \left\lfloor z(LP^2_\text{KP}) \right\rfloor > LB
                \qquad \text{since} \qquad
                60 > 52
                $$

                The optimal solution ${ \tilde{ \boldsymbol x}}(\,LP^2_\text{KP}\,)$ is <strong>fractional</strong>, accordingly, the $LP^2_{\text{KP}}$ problem is <strong>inserted in the problem list</strong> $L$.

            2. Solution of the $LP^3_\text{KP}$ problem

                We have

                $$
                \mathscr{I}^3 = \{1,3,4\},~~~\mathscr{I}^3_\text{out} = \emptyset, ~~~\mathscr{I}^3_\text{in} = \{2\}
                $$

                The capacity is $c(3)=1$ and the objective-function constant is $p(3)=42$. The split item is $s=1$ and the residual capacity is $\bar c = 1$. An  optimal solution ${ \tilde{ \boldsymbol x}}(\,LP^3_\text{KP}\,)$ is:

                $$
                \tilde{x}_1=\frac{1}{4},~~\tilde{x}_3=0,~~\tilde{x}_4=0 \text{   and   }  z(~LP^3_\text{KP}~)= 42 + 40 \cdot \frac{1}{4}= 52
                $$

                The $LP^3_{\text{KP}}$ problem is <strong>feasible</strong> and we have:

                $$
                \left\lfloor z(LP^3_\text{KP}) \right\rfloor \le LB
                \qquad \text{since} \qquad
                52 \le 52
                $$

                accordingly, the branching node is <u>pruned by upper bound</u>.

            At the end of the first iteration, Node 2 is inserted in the Problem List $L$, while Node 3 is pruned by upper bound. The corresponding Branch-and-Bound Tree is:

            ![Figure 3](../img/ex-knapsack-branch-and-bound/fig03.svg){ .fig loading=lazy  }

            Due to the current Lower Bound $LB$ and Upper Bound $UB$, we have:

            $$
            52 ~~\le~~ z(~ILP~) ~~\le~~ 60
            $$

        - <span style="color:#e03131"><strong>Iteration  2</strong></span>

            The $LP^2_\text{KP}$ problem is extracted and deleted from the Problem List $L$.

            The branching variable is $x_3$. The $LP^4_\text{KP}$ and $LP^5_\text{KP}$ problems are created by unselecting ($x_3 \le 0$) and selecting ($x_3 \ge 1$) item $3$.

            1. Solution of the $LP^4_\text{KP}$ problem

                We have

                $$
                \mathscr{I}^4 =  \{1,4\},~~~\mathscr{I}^4_\text{out} = \{2,3\}, ~~~\mathscr{I}^4_\text{in} = \emptyset
                $$

                The capacity is $c(4)=8$ and the objective-function constant is $p(4)=0$. All items fit into the knapsack. An  optimal solution ${ \tilde{ \boldsymbol x}}(\,LP^4_\text{KP}\,)$ is:

                $$
                \tilde{x}_1=1,~~\tilde{x}_4=1 \text{   and   }  z(~LP^4_\text{KP}~) = 40 \cdot 1 + 12 \cdot 1  = 52
                $$

                The $LP^4_{\text{KP}}$ problem is <strong>feasible</strong> and we have:

                $$
                \left\lfloor z(LP^4_\text{KP}) \right\rfloor \le  LB
                \qquad \text{since} \qquad
                52 \le 52
                $$

                accordingly, the branching node is <u>pruned by upper bound</u>.

            2. Solution of the $LP^5_\text{KP}$ problem

                We have

                $$
                \mathscr{I}^5 = \{1,4\},~~~\mathscr{I}^5_\text{out} = \{2\}, ~~~\mathscr{I}^5_\text{in}= \{3\}
                $$

                The capacity is $c(5)=3$ and the objective-function constant is $p(5)=25$. The split item is $s=1$ and the residual capacity is $\bar c = 3$. An  optimal solution ${ \tilde{ \boldsymbol x}}(\,LP^5_\text{KP}\,)$ is:

                $$
                \tilde{x}_1=\frac{3}{4},~~\tilde{x}_2=0,~~\tilde{x}_3=1,~~\tilde{x}_4=0 \text{   and   }  z(~LP^5_\text{KP}~)= 25 + 40 \cdot \frac{3}{4} = 55
                $$

                The $LP^5_{\text{KP}}$ problem is <strong>feasible</strong> and we have:

                $$
                \left\lfloor z(LP^5_\text{KP}) \right\rfloor > LB
                \qquad \text{since} \qquad
                55 > 52
                $$

                The optimal solution ${ \tilde{ \boldsymbol x}}(\,LP^5_\text{KP}\,)$ is <strong>fractional</strong>, accordingly, the $LP^5_{\text{KP}}$ problem is <strong>inserted in the problem list</strong> $L$.

            At the end of the second iteration, Node 5 is inserted in the Problem List $L$, while Node 4 is pruned by upper bound. The corresponding Branch-and-Bound Tree is:

            ![Figure 4](../img/ex-knapsack-branch-and-bound/fig04.svg){ .fig loading=lazy  }

            Due to the current Lower Bound $LB$ and Upper Bound $UB$, we have:

            $$
            52 ~~\le~~ z(~ILP~) ~~\le~~ 55
            $$

        - <span style="color:#e03131"><strong>Iteration  3</strong></span>

            The $LP^5_\text{KP}$ problem is extracted and deleted from the Problem List $L$.

            The branching variable is $x_1$. The $LP^6_\text{KP}$ and $LP^7_\text{KP}$ problems are created by unselecting ($x_1 \le 0$) and selecting ($x_1 \ge 1$) item $1$.

            1. Solution of the $LP^6_\text{KP}$ problem

                We have

                $$
                \mathscr{I}^6 =  \{4\},~~~\mathscr{I}^6_\text{out} = \{1,2\}, ~~~\mathscr{I}^6_\text{in} = \{3\}
                $$

                The capacity is $c(6)=3$ and the objective-function constant is $p(6)=25$. All items fit into the knapsack. An  optimal solution ${ \tilde{ \boldsymbol x}}(\,LP^6_\text{KP}\,)$ is:

                $$
                \tilde{x}_4=1 \text{   and   }  z(~LP^6_\text{KP}~)= 25+12 \cdot 1=37
                $$

                The $LP^6_{\text{KP}}$ problem is <strong>feasible</strong> and we have:

                $$
                \left\lfloor z(LP^6_\text{KP}) \right\rfloor \le  LB
                \qquad \text{since} \qquad
                37 \le 52
                $$

                accordingly, the branching node is <u>pruned by upper bound</u>.

            2. Solution of the $LP^7_\text{KP}$ problem

                The $LP^7_\text{KP}$ problem is <strong>infeasible</strong>, accordingly the branching node is <u>pruned by infeasibility</u>.

            At the end of the third iteration, Node 6 is pruned by upper bound and Node 7 is pruned by infeasibility. The corresponding Branch-and-Bound Tree is:

            ![Figure 5](../img/ex-knapsack-branch-and-bound/fig05.svg){ .fig loading=lazy  }

        - <span style="color:#e03131"><strong>Termination</strong></span>

            Since the Problem List $L$ is empty, the $ILP_\text{KP}$ problem is solved to optimality.

            The optimal value is $z(~ILP_\text{KP}~)=52$ (the value of the Lower Bound $LB$) and an optimal solution ${\tilde {\boldsymbol x}}(\,ILP_\text{KP}\,)$  is $\tilde  x_1=1,\tilde  x_2=0,\tilde  x_3=0,\tilde  x_4=1$ (the Incumbent Solution ${\bar{\boldsymbol x}}(ILP_{\text{KP}})$).

    3. This is the <strong>Branch-and-Bound Tree</strong> of the previous execution of the <strong>Branch-and-Bound Algorithm</strong>, showing for each solved branching node the optimal value of the associated $LP_\text{KP}$ problem, the current Lower Bound $LB$, and the pruning criteria.

        ![Figure 6](../img/ex-knapsack-branch-and-bound/fig06.svg){ .fig loading=lazy  }

<a id="esercizio-33-3"></a>

!!! esercizio "Exercise 33.3: Branch-and-Bound Algorithm for the Knapsack Problem (P3)"

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

    1. Check if the items are sorted by non-increasing efficiency otherwise sort them in this order.  Write the $ILP_\text{KP}$ model and the $LP_\text{KP}$ model for the KP instance.

    2. Execute the branch-and-bound algorithm to solve the $ILP_\text{KP}$ model for the Knapsack Problem using:

        1. the split-item rule as branching-variable selection strategy;

        2. the LIFO rule as branching-node selection strategy;

        3. solve first the down-branching node and then the up-branching node;

        4. set the Incumbent Solution ${\bar{\boldsymbol x}}(\,ILP_\text{KP}\,)$ to the following  heuristic solution :

            $$
            \bar{x}_1=1, ~~~ \bar{x}_2=0,~~~ \bar{x}_3= 0,~~\bar{x}_4=1
            $$

            and set the Lower Bound $LB$ accordingly.

    3. Determine and comment the correspondent branch-and-bound tree showing the reason why the branching nodes can be pruned.

??? soluzione "Solution"

    1. The items are sorted by non-increasing efficiency since we have:

        $$
        \frac{24}{10} ~~\ge~~\frac{17}{8} ~~\ge~~\frac{12}{6} ~~\ge~~\frac{6}{5}
        $$

        This is the $ILP_\text{KP}$ model for the KP instance:

        $$
        \begin{array}{rrrrrrrrrrrrr}
        {\max} & 24 \, {x_1} & + 17 \, {x_2} & + 12 \, {x_3} & + 6 \, {x_4} \\[1ex]
        & 10 \, {x_1} & + 8 \, {x_2} & + 6 \, {x_3} & + 5 \, {x_4} & {\le} & 15 \\[1ex]
        & {x_1}, & {x_2}, & {x_3}, & {x_4} & { \in} & { \{0,1\}}
        \end{array}
        $$

        This is the $LP_\text{KP}$ model  for the KP instance:

        $$
        \begin{array}{rrrrrrrrrrrrr}
        {\max} & 24 \, {x_1} & + 17 \, {x_2} & + 12 \, {x_3} & + 6 \, {x_4} \\[1ex]
        & 10 \, {x_1} & + 8 \, {x_2} & + 6 \, {x_3} & + 5 \, {x_4} & {\le} & 15 \\[1ex]
        & {x_1} &  &  &  & {\le} & 1 \\[1ex]
        &  & {x_2} &  &  & {\le} & 1 \\[1ex]
        &  &  & {x_3} &  & {\le} & 1 \\[1ex]
        &  &  &  & {x_4} & {\le} & 1 \\[1ex]
        & {x_1}, & {x_2}, & {x_3}, & {x_4} & { \ge} & { 0}
        \end{array}
        $$

    2. Execution of the branch-and-bound algorithm to solve the $ILP_\text{KP}$ model.

        - <span style="color:#e03131"><strong>Initialization</strong></span>

            For the $LP^1_\text{KP}$ problem, the split item is $s=2$ and the residual capacity is $\bar c = 5$. An  optimal solution ${ \tilde{ \boldsymbol x}}(\,LP^1_\text{KP}\,)$ is:

            $$
            \tilde{x}_1=1,~~\tilde{x}_2=\frac{5}{8},~~\tilde{x}_3=0,~~\tilde{x}_4=0
            $$

            the optimal value is:

            $$
            z(~LP^1_\text{KP}~) = 24 \cdot 1 + 17 \cdot \frac{5}{8} =\frac{277}{8}
            $$

            The optimal solution ${ \tilde{ \boldsymbol x}}(\,LP^1_\text{KP}\,)$ is <strong>fractional</strong> and the $LP^1_\text{KP}$ problem is <strong>feasible</strong>, so the $LP^1_\text{KP}$ problem is inserted in the Problem List $L$ and the Lower Bound $LB$ is set to $30$ ($LB(\bar{\boldsymbol x})= 30$).

            Due to the current Lower Bound $LB$ and Upper Bound $UB$, we have:

            $$
            30 ~~\le~~ z(~ILP~) ~~\le~~  \underbrace{\left\lfloor \dfrac{277}{8} \right\rfloor}_{=34}
            $$

        - <span style="color:#e03131"><strong>Iteration  1</strong></span>

            The $LP^1_\text{KP}$ problem is extracted and deleted from the Problem List $L$.

            The branching variable is $x_2$. The $LP^2_\text{KP}$ and $LP^3_\text{KP}$ problems are created by unselecting ($x_2 \le 0$) and selecting ($x_2 \ge 1$) item $2$.

            1. Solution of the $LP^2_\text{KP}$ problem

                We have

                $$
                \mathscr{I}^2 = \{1,3,4\},~~~\mathscr{I}^2_\text{out} = \{2\}, ~~~\mathscr{I}^2_\text{in} = \emptyset
                $$

                The capacity is $c(2)=15$ and the objective-function constant is $p(2)=0$. The split item is $s=3$ and the residual capacity is $\bar c = 5$. An  optimal solution ${ \tilde{ \boldsymbol x}}(\,LP^2_\text{KP}\,)$ is:

                $$
                \tilde{x}_1=1,~~\tilde{x}_3=\frac{5}{6},~~\tilde{x}_4=0 \text{   and   }  z(~LP^2_\text{KP}~)=  24\cdot 1 + 12 \cdot \frac{5}{6}= 34
                $$

                The $LP^2_{\text{KP}}$ problem is <strong>feasible</strong> and we have:

                $$
                \left\lfloor z(LP^2_\text{KP}) \right\rfloor > LB
                \qquad \text{since} \qquad
                34 > 30
                $$

                The optimal solution ${ \tilde{ \boldsymbol x}}(\,LP^2_\text{KP}\,)$ is <strong>fractional</strong>, accordingly, the $LP^2_{\text{KP}}$ problem is <strong>inserted in the problem list</strong> $L$.

            2. Solution of the $LP^3_\text{KP}$ problem

                We have

                $$
                \mathscr{I}^3 = \{1,3,4\},~~~\mathscr{I}^3_\text{out} = \emptyset, ~~~\mathscr{I}^3_\text{in} = \{2\}
                $$

                The capacity is $c(3)=7$ and the objective-function constant is $p(3)=17$. The split item is $s=1$ and the residual capacity is $\bar c = 7$. An  optimal solution ${ \tilde{ \boldsymbol x}}(\,LP^3_\text{KP}\,)$ is:

                $$
                \tilde{x}_1=\frac{7}{10},~~\tilde{x}_3=0,~~\tilde{x}_4=0 \text{   and   }  z(~LP^3_\text{KP}~)= 17 + 24 \cdot \frac{7}{10}= \frac{169}{5}
                $$

                The $LP^3_{\text{KP}}$ problem is <strong>feasible</strong> and we have:

                $$
                \left\lfloor z(LP^3_\text{KP}) \right\rfloor > LB
                \qquad \text{since} \qquad
                \underbrace{\left\lfloor \frac{169}{5} \right\rfloor}_{=33} > 30
                $$

                The optimal solution ${ \tilde{ \boldsymbol x}}(\,LP^3_\text{KP}\,)$ is <strong>fractional</strong>, accordingly, the $LP^3_{\text{KP}}$ problem is <strong>inserted in the problem list</strong> $L$.

            At the end of the first iteration, Node 2 and Node 3 are both inserted in the Problem List $L$. The corresponding Branch-and-Bound Tree is:

            ![Figure 7](../img/ex-knapsack-branch-and-bound/fig07.svg){ .fig loading=lazy  }

            Due to the current Lower Bound $LB$ and Upper Bound $UB$, we have:

            $$
            30 ~~\le~~ z(~ILP~) ~~\le~~ \underbrace{\max \left\{ 34,~~  \underbrace{\left\lfloor \frac{169}{5} \right\rfloor}_{=33} \right\}}_{=34}
            $$

        - <span style="color:#e03131"><strong>Iteration  2</strong></span>

            The $LP^3_\text{KP}$ problem is extracted and deleted from the Problem List $L$.

            The branching variable is $x_1$. The $LP^4_\text{KP}$ and $LP^5_\text{KP}$ problems are created by unselecting ($x_1 \le 0$) and selecting ($x_1 \ge 1$) item $1$.

            1. Solution of the $LP^4_\text{KP}$ problem

                We have

                $$
                \mathscr{I}^4 =  \{3,4\},~~~\mathscr{I}^4_\text{out} = \{1\}, ~~~\mathscr{I}^4_\text{in} = \{2\}
                $$

                The capacity is $c(4)=7$ and the objective-function constant is $p(4)=17$. The split item is $s=4$ and the residual capacity is $\bar c = 1$. An  optimal solution ${ \tilde{ \boldsymbol x}}(\,LP^4_\text{KP}\,)$ is:

                $$
                \tilde{x}_3=1,~~\tilde{x}_4=\frac{1}{5} \text{   and   }  z(~LP^4_\text{KP}~) = 17+ 12 \cdot 1 + 6 \cdot \frac{1}{5}  = \frac{151}{5}
                $$

                The $LP^4_{\text{KP}}$ problem is <strong>feasible</strong> and we have:

                $$
                \left\lfloor z(LP^4_\text{KP}) \right\rfloor \le  LB
                \qquad \text{since} \qquad
                \underbrace{\left\lfloor \frac{151}{5} \right\rfloor}_{=30} \le 30
                $$

                accordingly, the branching node is <u>pruned by upper bound</u>.

            2. Solution of the $LP^5_\text{KP}$ problem

                The $LP^5_\text{KP}$ problem is <strong>infeasible</strong>, accordingly the branching node is <u>pruned by infeasibility</u>.

            At the end of the second iteration, Node 4 is pruned by upper bound and Node 5 is pruned by infeasibility. The corresponding Branch-and-Bound Tree is:

            ![Figure 8](../img/ex-knapsack-branch-and-bound/fig08.svg){ .fig loading=lazy  }

            Due to the current Lower Bound $LB$ and Upper Bound $UB$, we have:

            $$
            30 ~~\le~~ z(~ILP~) ~~\le~~ 34
            $$

        - <span style="color:#e03131"><strong>Iteration  3</strong></span>

            The $LP^2_\text{KP}$ problem is extracted and deleted from the Problem List $L$.

            The branching variable is $x_3$. The $LP^6_\text{KP}$ and $LP^7_\text{KP}$ problems are created by unselecting ($x_3 \le 0$) and selecting ($x_3 \ge 1$) item $3$.

            1. Solution of the $LP^6_\text{KP}$ problem

                We have

                $$
                \mathscr{I}^6 =  \{1,4\},~~~\mathscr{I}^6_\text{out} = \{2,3\}, ~~~\mathscr{I}^6_\text{in} = \emptyset
                $$

                The capacity is $c(6)=15$ and the objective-function constant is $p(6)=0$. All items fit into the knapsack. An  optimal solution ${ \tilde{ \boldsymbol x}}(\,LP^6_\text{KP}\,)$ is:

                $$
                \tilde{x}_1=1,\tilde{x}_4=1 \text{   and   }  z(~LP^6_\text{KP}~)= 24 \cdot 1+6 \cdot 1=30
                $$

                The $LP^6_{\text{KP}}$ problem is <strong>feasible</strong> and we have:

                $$
                \left\lfloor z(LP^6_\text{KP}) \right\rfloor \le  LB
                \qquad \text{since} \qquad
                30 \le 30
                $$

                accordingly, the branching node is <u>pruned by upper bound</u>.

            2. Solution of the $LP^7_\text{KP}$ problem

                We have

                $$
                \mathscr{I}^7 = \{1,4\},~~~\mathscr{I}^7_\text{out} = \{2\}, ~~~\mathscr{I}^7_\text{in} = \{3\}
                $$

                The capacity is $c(7)=9$ and the objective-function constant is $p(7)=12$. The split item is $s=1$ and the residual capacity is $\bar c = 9$. An  optimal solution ${ \tilde{ \boldsymbol x}}(\,LP^7_\text{KP}\,)$ is:

                $$
                \tilde{x}_1=\frac{9}{10},~~\tilde{x}_4=0 \text{   and   }  z(~LP^7_\text{KP}~)=  12 + 24 \cdot \frac{9}{10}= \frac{168}{5}
                $$

                The $LP^7_{\text{KP}}$ problem is <strong>feasible</strong> and we have:

                $$
                \left\lfloor z(LP^7_\text{KP}) \right\rfloor >  LB
                \qquad \text{since} \qquad
                \underbrace{\left\lfloor  \frac{168}{5} \right\rfloor}_{=33} > 30
                $$

                The optimal solution ${ \tilde{ \boldsymbol x}}(\,LP^7_\text{KP}\,)$ is <strong>fractional</strong>, accordingly, the $LP^7_{\text{KP}}$ problem is <strong>inserted in the problem list</strong> $L$.

            At the end of the third iteration, Node 6 is pruned by upper bound and Node 7 is inserted in the Problem List $L$. The corresponding Branch-and-Bound Tree is:

            ![Figure 9](../img/ex-knapsack-branch-and-bound/fig09.svg){ .fig loading=lazy  }

        - <span style="color:#e03131"><strong>Iteration  4</strong></span>

            The $LP^7_\text{KP}$ problem is extracted and deleted from the Problem List $L$.

            The branching variable is $x_1$. The $LP^8_\text{KP}$ and $LP^9_\text{KP}$ problems are created by unselecting ($x_1 \le 0$) and selecting ($x_1 \ge 1$) item $1$.

            1. Solution of the $LP^8_\text{KP}$ problem

                We have

                $$
                \mathscr{I}^8 =  \{4\},~~~\mathscr{I}^8_\text{out} = \{1,2\}, ~~~\mathscr{I}^8_\text{in} = \{3\}
                $$

                The capacity is $c(8)=9$ and the objective-function constant is $p(8)=12$. All items fit into the knapsack. An  optimal solution ${ \tilde{ \boldsymbol x}}(\,LP^8_\text{KP}\,)$ is:

                $$
                \tilde{x}_4=1 \text{   and   }  z(~LP^8_\text{KP}~)= 12+6 \cdot 1=18
                $$

                The $LP^8_{\text{KP}}$ problem is <strong>feasible</strong> and we have:

                $$
                \left\lfloor z(LP^8_\text{KP}) \right\rfloor \le  LB
                \qquad \text{since} \qquad
                18 \le 30
                $$

                accordingly, the branching node is <u>pruned by upper bound</u>.

            2. Solution of the $LP^9_\text{KP}$ problem

                The $LP^9_\text{KP}$ problem is <strong>infeasible</strong>, accordingly the branching node is <u>pruned by infeasibility</u>.

            At the end of the fourth iteration, Node 8 is pruned by upper bound and Node 9 is pruned by infeasibility. The corresponding Branch-and-Bound Tree is:

            ![Figure 10](../img/ex-knapsack-branch-and-bound/fig10.svg){ .fig loading=lazy  }

        - <span style="color:#e03131"><strong>Termination</strong></span>

            Since the Problem List $L$ is empty, the $ILP_\text{KP}$ problem is solved to optimality.

            The optimal value is $z(~ILP_\text{KP}~)=30$ (the value of the Lower Bound $LB$) and an optimal solution ${\tilde {\boldsymbol x}}(\,ILP_\text{KP}\,)$  is $\tilde  x_1=1,\tilde  x_2=0,\tilde  x_3=0,\tilde  x_4=1$ (the Incumbent Solution ${\bar{\boldsymbol x}}(ILP_{\text{KP}})$).

    3. This is the <strong>Branch-and-Bound Tree</strong> of the previous execution of the <strong>Branch-and-Bound Algorithm</strong>, showing for each solved branching node the optimal value of the associated $LP_\text{KP}$ problem, the current Lower Bound $LB$, and the pruning criteria.

        ![Figure 11](../img/ex-knapsack-branch-and-bound/fig11.svg){ .fig loading=lazy  }

<a id="esercizio-33-4"></a>

!!! esercizio "Exercise 33.4: Branch-and-bound Algorithm for the Knapsack Problem (P4)"

    We consider a knapsack capacity $c=9$ and a set $\mathscr{I}=\{1,2,3,4,5,6\}$ of $6$ items ($n=6$) with the following profits and weights:

    $$
    \begin{array}{l|rrrrrrr}
    \hline  & {i = 1} & {i = 2} & {i = 3} & {i = 4} & {i = 5} & {i = 6} \\[1ex]
    \hline {p_i} & {6} & {5} & {8} & {9} & {6} & {7} \\[1ex]
    {w_i} & {2} & {3} & {6} & {7} & {5} & {9} \\[1ex]
    \hline
    \end{array}
    $$

    **Questions**

    1. Check if the items are sorted by non-increasing efficiency otherwise sort them in this order.  Write the $ILP_\text{KP}$ model and the $LP_\text{KP}$ model for the KP instance.

    2. Execute the branch-and-bound algorithm to solve the $ILP_\text{KP}$ model for the Knapsack Problem using:

        1. the split-item rule as branching-variable selection strategy;

        2. the FIFO rule as branching-node selection strategy;

        3. solve first the down-branching node and then the up-branching node;

        4. set the Incumbent Solution ${\bar{\boldsymbol x}}(\,ILP_\text{KP}\,)$ to the following  heuristic solution :

            $$
            \bar{x}_1=1, ~~~ \bar{x}_2=1,~~~ \bar{x}_3= 0,~~\bar{x}_4=0,~~\bar{x}_5=0,~~\bar{x}_6=0
            $$

            and set the Lower Bound $LB$ accordingly.

    3. Determine and comment the correspondent branch-and-bound tree showing the reason why the branching nodes can be pruned.

??? soluzione "Solution"

    1. The items are sorted by non-increasing efficiency since we have:

        $$
        \frac{6}{2} ~~\ge~~ \frac{5}{3} ~~\ge~~ \frac{8}{6} ~~\ge~~ \frac{9}{7} ~~\ge~~ \frac{6}{5} ~~\ge~~ \frac{7}{9}
        $$

        This is the $ILP_\text{KP}$ model  for the KP instance:

        $$
        \begin{array}{rrrrrrrrrrrrr}
        {\max} & 6 \, {x_1} & + 5 \, {x_2} & + 8 \, {x_3} & + 9 \, {x_4} & + 6 \, {x_5} & + 7 \, {x_6} \\[1.5ex]
        & 2 \, {x_1} & + 3 \, {x_2} & + 6 \, {x_3} & + 7 \, {x_4} & + 5 \, {x_5} & + 9 \, {x_6} & {\le} & 9 \\[1.5ex]
        & {x_1}, & {x_2}, & {x_3}, & {x_4}, & {x_5}, & {x_6} & { \in} & { \{0,1\}}
        \end{array}
        $$

        This is the $LP_\text{KP}$ model for the KP instance:

        $$
        \begin{array}{rrrrrrrrrrrrr}
        {\max} & 6 \, {x_1} & + 5 \, {x_2} & + 8 \, {x_3} & + 9 \, {x_4} & + 6 \, {x_5} & + 7 \, {x_6} \\[1ex]
        & 2 \, {x_1} & + 3 \, {x_2} & + 6 \, {x_3} & + 7 \, {x_4} & + 5 \, {x_5} & + 9 \, {x_6} & {\le} & 9 \\[1ex]
        & {x_1} &  &  &  &  &  & {\le} & 1 \\
        &  & {x_2} &  &  &  &  & {\le} & 1 \\
        &  &  & {x_3} &  &  &  & {\le} & 1 \\
        &  &  &  & {x_4} &  &  & {\le} & 1 \\
        &  &  &  &  & {x_5} &  & {\le} & 1 \\
        &  &  &  &  &  & {x_6} & {\le} & 1 \\[1ex]
        & {x_1}, & {x_2}, & {x_3}, & {x_4}, & {x_5}, & {x_6} & { \ge} & { 0}
        \end{array}
        $$

    2. Execution of the branch-and-bound algorithm to solve the $ILP_\text{KP}$ model.

        - <span style="color:#e03131"><strong>Initialization</strong></span>

            For the $LP^1_\text{KP}$ problem, the split item is $s=3$ and the residual capacity is $\bar c = 4$. An  optimal solution ${ \tilde{ \boldsymbol x}}(\,LP^1_\text{KP}\,)$ is:

            $$
            \tilde{x}_1=1,~~\tilde{x}_2=1,~~\tilde{x}_3=\frac{2}{3},~~\tilde{x}_4=0,~~\tilde{x}_5=0,~~\tilde{x}_6=0
            $$

            the optimal value is:

            $$
            z(~LP^1_\text{KP}~) = 6 \cdot 1 + 5 \cdot 1 +  8 \cdot \frac{2}{3} =\frac{49}{3}
            $$

            The optimal solution ${ \tilde{ \boldsymbol x}}(\,LP^1_\text{KP}\,)$ is <strong>fractional</strong> and the $LP^1_\text{KP}$ problem is <strong>feasible</strong>, so the $LP^1_\text{KP}$ problem is inserted in the Problem List $L$ and the Lower Bound $LB$ is set to $11$ ($LB(\bar{\boldsymbol x})= 11$).

            Due to the current Lower Bound $LB$ and Upper Bound $UB$, we have:

            $$
            11 ~~\le~~ z(~ILP~) ~~\le~~  \underbrace{\left\lfloor \dfrac{49}{3} \right\rfloor}_{=16}
            $$

        - <span style="color:#e03131"><strong>Iteration  1</strong></span>

            The $LP^1_\text{KP}$ problem is extracted and deleted from the Problem List $L$.

            The branching variable is $x_3$. The $LP^2_\text{KP}$ and $LP^3_\text{KP}$ problems are created by unselecting ($x_3 \le 0$) and selecting ($x_3 \ge 1$) item $3$.

            1. Solution of the $LP^2_\text{KP}$ problem

                We have

                $$
                \mathscr{I}^2 = \{1,2,4,5,6\},~~~\mathscr{I}^2_\text{out} = \{3\}, ~~~\mathscr{I}^2_\text{in} = \emptyset
                $$

                The capacity is $c(2)=9$ and the objective-function constant is $p(2)=0$. The split item is $s=4$ and the residual capacity is $\bar c = 4$. An  optimal solution ${ \tilde{ \boldsymbol x}}(\,LP^2_\text{KP}\,)$ is:

                $$
                \begin{gathered}\tilde{x}_1=1,~~\tilde{x}_2=1,~~\tilde{x}_4=\frac{4}{7},~~\tilde{x}_5=0,~~\tilde{x}_6=0
                \qquad \text{and} \\
                z(~LP^2_\text{KP}~) =   6 \cdot 1 + 5 \cdot 1 + 9 \cdot \frac{4}{7} = \frac{113}{7}\end{gathered}
                $$

                The $LP^2_{\text{KP}}$ problem is <strong>feasible</strong> and we have:

                $$
                \left\lfloor z(LP^2_\text{KP}) \right\rfloor > LB
                \qquad \text{since} \qquad
                \underbrace{\left\lfloor\frac{113}{7} \right\rfloor}_{ = 16} >11
                $$

                The optimal solution ${ \tilde{ \boldsymbol x}}(\,LP^2_\text{KP}\,)$ is <strong>fractional</strong>, accordingly, the $LP^2_{\text{KP}}$ problem is <strong>inserted in the problem list</strong> $L$.

            2. Solution of the $LP^3_\text{KP}$ problem

                We have

                $$
                \mathscr{I}^3 = \{1,2,4,5,6\},~~~\mathscr{I}^3_\text{out} = \emptyset, ~~~\mathscr{I}^3_\text{in} = \{3\}
                $$

                The capacity is $c(3)=3$ and the objective-function constant is $p(3)=8$. The split item is $s=2$ and the residual capacity is $\bar c = 1$. An  optimal solution ${ \tilde{ \boldsymbol x}}(\,LP^3_\text{KP}\,)$ is:

                $$
                \begin{gathered} \tilde{x}_1=1,~~\tilde{x}_2=\frac{1}{3},~~\tilde{x}_4=0,~~\tilde{x}_5=0,~~\tilde{x}_6=0 \qquad \text{and} \\  z(~LP^3_\text{KP}~) =  8 + 6 \cdot 1 + 5 \cdot \frac{1}{3} = \frac{47}{3}\end{gathered}
                $$

                The $LP^3_{\text{KP}}$ problem is <strong>feasible</strong> and we have:

                $$
                \left\lfloor z(LP^3_\text{KP}) \right\rfloor > LB
                \qquad \text{since} \qquad
                \underbrace{\left\lfloor\frac{47}{3} \right\rfloor}_{ = 15} > 11
                $$

                The optimal solution ${ \tilde{ \boldsymbol x}}(\,LP^3_\text{KP}\,)$ is <strong>fractional</strong>, accordingly, the $LP^3_{\text{KP}}$ problem is <strong>inserted in the problem list</strong> $L$.

            At the end of the first iteration, Node 2 and Node 3 are both inserted in the Problem List $L$. The corresponding Branch-and-Bound Tree is:

            ![Figure 12](../img/ex-knapsack-branch-and-bound/fig12.svg){ .fig loading=lazy  }

            Due to the current Lower Bound $LB$ and Upper Bound $UB$, we have:

            $$
            11 ~~\le~~ z(~ILP~) ~~\le~~ \underbrace{\max \left\{ \underbrace{\left\lfloor \frac{113}{7} \right\rfloor}_{=16},~~  \underbrace{\left\lfloor \frac{47}{3} \right\rfloor}_{=15} \right\}}_{=16}
            $$

        - <span style="color:#e03131"><strong>Iteration  2</strong></span>

            The $LP^2_\text{KP}$ problem is extracted and deleted from the Problem List $L$.

            The branching variable is $x_4$. The $LP^4_\text{KP}$ and $LP^5_\text{KP}$ problems are created by unselecting ($x_4 \le 0$) and selecting ($x_4 \ge 1$) item $4$.

            1. Solution of the $LP^4_\text{KP}$ problem

                We have

                $$
                \mathscr{I}^4 =  \{1,2,5,6\},~~~\mathscr{I}^4_\text{out} = \{3,4\}, ~~~\mathscr{I}^4_\text{in} = \emptyset
                $$

                The capacity is $c(4)=9$ and the objective-function constant is $p(4)=0$. The split item is $s=5$ and the residual capacity is $\bar c = 4$. An  optimal solution ${ \tilde{ \boldsymbol x}}(\,LP^4_\text{KP}\,)$ is:

                $$
                \tilde{x}_1=1,~~\tilde{x}_2=1,~~\tilde{x}_5=\frac{4}{5},~~\tilde{x}_6=0 \text{   and   }  z(~LP^4_\text{KP}~) = 6 \cdot 1 + 5 \cdot 1 + 6 \cdot \frac{4}{5} = \frac{79}{5}
                $$

                The $LP^4_{\text{KP}}$ problem is <strong>feasible</strong> and we have:

                $$
                \left\lfloor z(LP^4_\text{KP}) \right\rfloor >  LB
                \qquad \text{since} \qquad
                \underbrace{\left\lfloor\frac{79}{5} \right\rfloor}_{ = 15} > 11
                $$

                The optimal solution ${ \tilde{ \boldsymbol x}}(\,LP^4_\text{KP}\,)$ is <strong>fractional</strong>, accordingly, the $LP^4_{\text{KP}}$ problem is <strong>inserted in the problem list</strong> $L$.

            2. Solution of the $LP^5_\text{KP}$ problem

                We have

                $$
                \mathscr{I}^5 = \{1,2,5,6\},~~~\mathscr{I}^5_\text{out} = \{3\}, ~~~ \mathscr{I}^5_\text{in}= \{4\}
                $$

                The capacity is $c(5)=2$ and the objective-function constant is $p(5)=9$. The split item is $s=2$ and the residual capacity is $\bar c = 0$. An  optimal solution ${ \tilde{ \boldsymbol x}}(\,LP^5_\text{KP}\,)$ is:

                $$
                \tilde{x}_1=1,~~\tilde{x}_2=0,~~\tilde{x}_5=0,~~\tilde{x}_6=0 \text{   and   }  z(~LP^5_\text{KP}~) = 9 + 6 \cdot 1  =  15
                $$

                The $LP^5_{\text{KP}}$ problem is <strong>feasible</strong> and we have:

                $$
                \left\lfloor z(LP^5_\text{KP}) \right\rfloor > LB
                \qquad \text{since} \qquad
                15 > 11
                $$

                The optimal solution ${ \tilde{ \boldsymbol x}}(\,LP^5_\text{KP}\,)$ is <strong>integer</strong>, accordingly, the lower bound $LB$ becomes $15$ and the incumbent solution ${\bar{\boldsymbol x}}(ILP)$ becomes $\bar  x_1=1,\bar  x_2=0,\bar  x_3=0,\bar  x_4=1,\bar  x_5=0,\bar  x_6=0$.

                Accordingly, the branching node is <u>pruned by integrality</u>.

                Since the Lower Bound is improved, the $LP^3_\text{KP}$ problem and the $LP^4_\text{KP}$ problem are <u>pruned by upper bound</u> and removed from the problem list $L$.  We have:

                $$
                \left\lfloor z(LP^3_\text{KP}) \right\rfloor \le LB
                \qquad \text{since} \qquad
                \underbrace{\left\lfloor\frac{47}{3} \right\rfloor}_{ = 15} \le  15
                $$

                $$
                \left\lfloor z(LP^4_\text{KP}) \right\rfloor \le LB
                \qquad \text{since} \qquad
                \underbrace{\left\lfloor\frac{79}{5} \right\rfloor}_{ = 15} \le  15
                $$

            At the end of the second iteration, Node 5 improves the Lower Bound to $LB=15$ and is pruned by integrality; Node 3 and Node 4 are then pruned by upper bound. The corresponding Branch-and-Bound Tree is:

            ![Figure 13](../img/ex-knapsack-branch-and-bound/fig13.svg){ .fig loading=lazy  }

        - <span style="color:#e03131"><strong>Termination</strong></span>

            Since the Problem List $L$ is empty, the $ILP_\text{KP}$ problem is solved to optimality.

            The optimal value is $z(~ILP_\text{KP}~)=15$ (the value of the Lower Bound $LB$) and an optimal solution ${\tilde {\boldsymbol x}}(\,ILP_\text{KP}\,)$  is $\tilde  x_1=1,\tilde  x_2=0,\tilde  x_3=0,\tilde  x_4=1,\tilde  x_5=0,\tilde  x_6=0$ (the Incumbent Solution ${\bar{\boldsymbol x}}(ILP_{\text{KP}})$).

    3. This is the <strong>Branch-and-Bound Tree</strong> of the previous execution of the <strong>Branch-and-Bound Algorithm</strong>, showing for each solved branching node the optimal value of the associated $LP_\text{KP}$ problem, the current Lower Bound $LB$, and the pruning criteria.

        ![Figure 14](../img/ex-knapsack-branch-and-bound/fig14.svg){ .fig loading=lazy  }
