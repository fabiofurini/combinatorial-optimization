---
title: "Knapsack: branch-and-bound on the critical item"
---

# Knapsack: branch-and-bound on the critical item

<div class="info-capitolo" markdown>

**Part 6 · Specialized algorithms · Chapter 27** · [:material-file-pdf-box: Lecture notes, volume 6 (PDF)](../pdf/lecture-notes-6-specialized-algorithms.pdf) · [:material-pencil: Exercises](../exercises/knapsack-branch-and-bound.md)

</div>

!!! nota "Prerequisites"

    - From the module <em>Integer linear programming</em>, [Chapter 7 «Branch-and-bound»](https://fabiofurini.github.io/integer-linear-programming/exact-methods/bb/): branching and bounding operations, the problem list, the pruning criteria, the lower bound $\LB$ and the upper bound $\UB$. The general algorithm is applied here to the knapsack problem.

    - From this module, the chapter «Knapsack formulations»: the models $\ILP_{\KP}$ and $\LP_{\KP}$, the efficiency of an item, the split item $s$, the residual capacity $\mathit{rc}$ and the bound of Dantzig.

!!! chiave "Objectives"

    At the end of this chapter you will be able to:

    - write the problem $\LP_{\KP}^k$ of a node, and solve it with the formulas of Dantzig, without the simplex algorithm;

    - branch on the variable of the split item, unselecting or selecting that item;

    - execute the branch-and-bound algorithm for the KP by hand, with the FIFO or the LIFO rule;

    - explain why the algorithm is simpler than the general one, and what stays the same.

## 27.1 Why a branch-and-bound algorithm for the KP?

- <strong>A challenge.</strong> A knapsack of capacity $9$ and six items with profits $(6,5,8,9,6,7)$ and weights $(2,3,6,7,5,9)$. Find the optimal value of the LP relaxation <em>without</em> the simplex algorithm. Hint: think of the efficiency $\frac{p_j}{w_j}$ of each item.

- The general algorithm solves the LP problem of every node with the dual simplex algorithm. For the KP this is not needed: the LP problem of every node is again a knapsack LP problem, solved by sorting the items by efficiency. This chapter shows what the general algorithm becomes in this case.

## 27.2 The algorithm for the KP

- Chosen a branching variable $x_j$ associated to an item $j \in \mathscr{I}$, the branching constraints of the  branch-and-bound algorithm to solve the $\ILP_{\KP}$ model have the following form:

    $$
    x_j \le 0 \text{    and    } x_j \ge 1
    $$

    They have the effect of <strong>unselecting</strong> or <strong>selecting</strong> an item.

!!! chiave ""

    In a branching node $k$ of a branch-and-bound tree,  we have:

    1. a subset of <strong>unselected  items</strong> $\rightsquigarrow$  denoted $\mathscr{I}_\text{out}^k$

    2. a  subset  of <strong>selected items</strong> $\rightsquigarrow$  denoted $\mathscr{I}_\text{in}^k$

    3. a subset of <strong>remaining items</strong> $\rightsquigarrow$  denoted  $\mathscr{I}^k := \mathscr{I} \setminus \left\{\mathscr{I}^k_\text{out} \cup \mathscr{I}^k_\text{in} \right\}$

- A  $\LP_{\KP}$ problem associated to a branching node $k$, called the $\LP_{\KP}^k$ problem,  reads as follows:

    \begin{align*}
    &&    \max \;\;{\sum_{j \in \mathscr{I}} p_j \, x_j}                                \\[1.5ex]
    && \text{subject to} \quad  {\sum_{j \in \mathscr{I}} w_j \, x_j}  &\leq c,                        \\[1.5ex]
    && x_j                        &\ge  1, & \forall j \in \mathscr{I}^k_\text{in},\\[1.5ex]
    && x_j                        &\le  0, & \forall j \in \mathscr{I}^k_\text{out},\\[1.5ex]
    && x_j                        &\le  1, & \forall j \in \mathscr{I},\\[1.5ex]
    &&x_j                        &\ge  0, & \forall j \in \mathscr{I}.
    \end{align*}

!!! chiave ""

    A $\LP_{\KP}^k$ problem of a branching node $k$ can be equivalently re-written as:

    \begin{align*}
    &&   \underbrace{ \sum_{j \in \mathscr{I}^k_\text{in} } p_j}_{=p(k)}  +  \max \;\;{\sum_{j \in  \mathscr{I}^k } p_j \, x_j}                              \label{eq:KP-obj_LP}  \tag{27.1a}\\[2ex]
    && \text{subject to} \quad  {\sum_{j \in  \mathscr{I}^k} w_j \, x_j}  &\leq \underbrace{c - \sum_{j \in \mathscr{I}^k_\text{in} } w_j}_{=c(k)},                       \label{eq:KP-cap_LP}  \tag{27.1b}\\[2ex]
    &&  x_j                        &\le  1, & \forall j \in  \mathscr{I}^k, \tag{27.1c}\\[2ex]
    && x_j                        &\ge  0, & \forall j \in  \mathscr{I}^k. \label{eq:KP-bin_LP} \tag{27.1d}
    \end{align*}

- A $\LP^k_{\KP}$  problem of a branching node $k$ is <strong>structurally equivalent</strong> to  the  $\LP_{\KP}$ problem but:

    1. the set of items is $\mathscr{I}^k$ instead of $\mathscr{I}$

    2. the capacity is reduced to $c(k):=c - \sum_{j \in \mathscr{I}^k_\text{in} } w_j$

    3. there is an objective-function constant  $p(k):=\sum_{j \in \mathscr{I}^k_\text{in} } p_j$

### 27.2.1 Solving the $\LP_{\KP}^k$ problem of a node

- The problem $\LP_{\KP}^k$ is a knapsack LP problem on the items of $\mathscr{I}^k$, with capacity $c(k)$: it is solved by the formulas of Dantzig, without any simplex iteration. The items of $\mathscr{I}^k$ are kept in the order of non-increasing efficiency.

- If $c(k)<0$ the problem is <strong>infeasible</strong>. If $\sum_{j\in\mathscr{I}^k} w_j \le c(k)$ all the items of $\mathscr{I}^k$ fit, and the optimal solution is $\tilde{x}_j=1$ for all $j\in\mathscr{I}^k$: it is integer.

- Otherwise the <strong>split item</strong> $s$ of the node is the first item of $\mathscr{I}^k$ that does not fit entirely, and the <strong>residual capacity</strong> is the capacity left by the items that precede it:

    $$
    \sum_{j\in\mathscr{I}^k,\,j<s} w_j \le c(k) < \sum_{j\in\mathscr{I}^k,\,j\le s} w_j,
    \qquad
    \mathit{rc}=c(k)-\sum_{j\in\mathscr{I}^k,\,j<s} w_j .
    $$

- The optimal solution is $\tilde{x}_j=1$ for the items of $\mathscr{I}^k$ before $s$, $\tilde{x}_s=\frac{\mathit{rc}}{w_s}$ and $\tilde{x}_j=0$ for the items after $s$, and the optimal value is

    $$
    z(\LP_{\KP}^k) \;=\; p(k)+\sum_{j\in\mathscr{I}^k,\,j<s} p_j + p_s\,\frac{\mathit{rc}}{w_s}.
    $$

!!! chiave ""

    In every node at most one variable is fractional, the one of the split item, and the value of the node is the Dantzig bound of a smaller knapsack: the node is solved by a scan of the items.

### 27.2.2 Branching-variable selection strategy

- The optimal solution of an $\LP_{\KP}^k$ problem given by the formulas of the previous subsection has at most one fractional variable, the one associated to the split item. <strong>Branching can be performed on the variable associated to the split item</strong>: this branching-variable selection strategy is called split-item strategy.

- The optimal solution of an $\LP_{\KP}$ problem is not unique when some items have equal efficiency: the other optimal solutions can have more fractional variables, for instance $x=(\frac12,\frac12)$ for $p=(2,2)$, $w=(2,2)$, $c=2$. Here, as in the general algorithm, we always use the solution given by the formulas.

### 27.2.3 What changes with respect to the general algorithm

- The algorithm is the LP-based branch-and-bound algorithm of the module <em>Integer linear programming</em> ([Chapter 7 «Branch-and-bound»](https://fabiofurini.github.io/integer-linear-programming/exact-methods/bb/)), with its problem list, its pruning criteria and its optimality gap.

- <strong>Bounding.</strong> The problem of a node is solved by the formulas above. All the profits are integer, so the bound of a node is $\lfloor z(\LP_{\KP}^k)\rfloor$: the node is pruned by bound if $\lfloor z(\LP_{\KP}^k)\rfloor \le \LB$, by infeasibility if $c(k)<0$, by integrality if its solution is integer (then $\LB$ is updated when the value is larger).

- <strong>Branching.</strong> The branching variable is the one of the split item $s$: the children are $x_s\le 0$ (down, item unselected) and $x_s\ge 1$ (up, item selected), and the node is not solved with a simplex tableau but described by the sets $\mathscr{I}^k_\text{in}$, $\mathscr{I}^k_\text{out}$ and $\mathscr{I}^k$.

- <strong>Node selection.</strong> The node of the problem list is extracted with the FIFO or the LIFO rule, and the down-branching node is solved before the up-branching node; the nodes are numbered in the order of resolution. The lower bound written in a node is the value at the moment of its resolution.

## 27.3 A worked example

<a id="box-1-texexpbox1"></a>

!!! esempio "Example 27.1: The $\ILP_{\KP}$ model"

    We consider a knapsack of capacity $c = 9$ and a set $\mathscr{I} = \{1,2,3,4,5,6\}$ of $6$ items ($n = 6$), with the following profits and weights:

    <div class="tabella" markdown="0"><table>
    <tr>
    <th></th>
    <th><span class="arithmatex">\(j = 1\)</span></th>
    <th><span class="arithmatex">\(j = 2\)</span></th>
    <th><span class="arithmatex">\(j = 3\)</span></th>
    <th><span class="arithmatex">\(j = 4\)</span></th>
    <th><span class="arithmatex">\(j = 5\)</span></th>
    <th><span class="arithmatex">\(j = 6\)</span></th>
    </tr>
    <tr>
    <td><span class="arithmatex">\(p_j\)</span></td>
    <td><span class="arithmatex">\(6\)</span></td>
    <td><span class="arithmatex">\(5\)</span></td>
    <td><span class="arithmatex">\(8\)</span></td>
    <td><span class="arithmatex">\(9\)</span></td>
    <td><span class="arithmatex">\(6\)</span></td>
    <td><span class="arithmatex">\(7\)</span></td>
    </tr>
    <tr>
    <td><span class="arithmatex">\(w_j\)</span></td>
    <td><span class="arithmatex">\(2\)</span></td>
    <td><span class="arithmatex">\(3\)</span></td>
    <td><span class="arithmatex">\(6\)</span></td>
    <td><span class="arithmatex">\(7\)</span></td>
    <td><span class="arithmatex">\(5\)</span></td>
    <td><span class="arithmatex">\(9\)</span></td>
    </tr>
    </table></div>

    We refer to this KP instance as <span style="color:#1971c2">Example 1</span>. The  $\ILP_{\KP}$ model for this KP instance is:

    <div class="tabella" markdown="0"><table>
    <tr>
    <td><span class="arithmatex">\(\max\)</span></td>
    <td>6	 	<span class="arithmatex">\(x_1\)</span></td>
    <td>\+	5	 	<span class="arithmatex">\(x_2\)</span></td>
    <td>\+	8	 	<span class="arithmatex">\(x_3\)</span></td>
    <td>\+	9	 	<span class="arithmatex">\(x_4\)</span></td>
    <td>\+	6	 	<span class="arithmatex">\(x_5\)</span></td>
    <td>\+	7	 	<span class="arithmatex">\(x_6\)</span></td>
    </tr>
    <tr>
    <td>subject to</td>
    <td>2	 	<span class="arithmatex">\(x_1\)</span></td>
    <td>\+	3	 	<span class="arithmatex">\(x_2\)</span></td>
    <td>\+	6	 	<span class="arithmatex">\(x_3\)</span></td>
    <td>\+	7	 	<span class="arithmatex">\(x_4\)</span></td>
    <td>\+	5	 	<span class="arithmatex">\(x_5\)</span></td>
    <td>\+	9	 	<span class="arithmatex">\(x_6\)</span></td>
    <td><span class="arithmatex">\(\le\)</span></td>
    <td>9</td>
    </tr>
    <tr>
    <td></td>
    <td><span class="arithmatex">\(x_1\)</span>,</td>
    <td><span class="arithmatex">\(x_2\)</span>,</td>
    <td><span class="arithmatex">\(x_3\)</span>,</td>
    <td><span class="arithmatex">\(x_4\)</span>,</td>
    <td><span class="arithmatex">\(x_5\)</span>,</td>
    <td><span class="arithmatex">\(x_6\)</span></td>
    <td><span class="arithmatex">\(\in\)</span></td>
    <td><span class="arithmatex">\(\{0,1\}\)</span></td>
    </tr>
    </table></div>

    An optimal solution $~{\tilde{\vet x}}(\,\ILP_{\KP}\,)$  is:

    $$
    \tilde x_1=1,~~\tilde x_2=0,~~\tilde  x_3=0,~~\tilde  x_4=1,~~\tilde  x_5=0,~~\tilde  x_6=0
    $$

    The optimal value $z(\ILP_{\KP})$  is $15$. The associated optimal solution of the KP is $\tilde{S} =\{1,4\}$. 

    The items are sorted by non-increasing efficiency, since:

    $$
    \frac{6}{2} ~~\ge~~ \frac{5}{3} ~~\ge~~ \frac{8}{6} ~~\ge~~ \frac{9}{7} ~~\ge~~ \frac{6}{5} ~~\ge~~ \frac{7}{9}
    $$

<a id="box-2-texexpbox2"></a>

!!! esempio "Example 27.2: Branch-and-bound algorithm for the $\ILP_{\KP}$ model"

    A branch-and-bound algorithm for $\ILP_{\KP}$ model and the KP instance of <span style="color:#1971c2">Example 1</span> using:

    1. the split-item strategy as branching-variable selection strategy;

    2. the FIFO rule as branching-node selection strategy;

    3. solve first the down-branching node and then the up-branching node;

    4. set the incumbent solution $\bar{\vet x}(\ILP_{\KP})$ to the following  heuristic solution:

        $$
        \bar{x}_1=1, ~~~ \bar{x}_2=0,~~~ \bar{x}_3= 0,~~\bar{x}_4=1,~~\bar{x}_5=0,~~\bar{x}_6=0
        $$

        and set the lower bound $\LB$ accordingly.

    - <span style="color:#e03131"><strong>Initialization</strong></span>

        For the $\LP^1_{\KP}$ problem, the split item is $s=3$ and the residual capacity is $\mathit{rc} = 4$. An  optimal solution $\tilde{\vet x}(\,\LP^1_{\KP}\,)$ is:

        $$
        \tilde{x}_1=1,~~\tilde{x}_2=1,~~\tilde{x}_3=\frac{4}{6},~~\tilde{x}_4=0,~~\tilde{x}_5=0,~~\tilde{x}_6=0
        $$

        the optimal value is:

        $$
        z(~\LP^1_{\KP}~) = 6 \cdot 1 + 5 \cdot 1 +  8 \cdot \frac{4}{6} =\frac{49}{3}
        $$

        The optimal solution $\tilde{\vet x}(\,\LP^1_{\KP}\,)$ is <strong>fractional</strong> and the $\LP^1_{\KP}$ problem is <strong>feasible</strong>, so the $\LP^1_{\KP}$ problem is inserted in the problem list $L$ and the lower bound $\LB$ is set to $15$ ($\LB(\bar{\vet x})= 15$).

        Due to the current lower bound $\LB$ and upper bound $\UB$, we have:

        $$
        15 ~~\le~~ z(\ILP_{\KP}) ~~\le~~  \underbrace{\left\lfloor \dfrac{49}{3} \right\rfloor}_{=16}
        $$

    - <span style="color:#e03131"><strong>Iteration  1</strong></span>

        The $\LP^1_{\KP}$ problem is extracted and deleted from the problem list $L$.

        The branching variable is $x_3$. The $\LP^2_{\KP}$ and $\LP^3_{\KP}$ problems are created by unselecting ($x_3 \le 0$) and selecting ($x_3 \ge 1$) item $3$.

        1. Solution of the $\LP^2_{\KP}$ problem

            We have

            $$
            \mathscr{I}^2 = \{1,2,4,5,6\},~~~\mathscr{I}^2_\text{out} = \{3\}, ~~~\mathscr{I}^2_\text{in} = \emptyset
            $$

            The capacity is $c(2)=9$ and the objective-function constant is $p(2)=0$. The split item is $s=4$ and the residual capacity is $\mathit{rc} = 4$. An  optimal solution $\tilde{\vet x}(\,\LP^2_{\KP}\,)$ is:

            $$
            \tilde{x}_1=1,~~\tilde{x}_2=1,~~\tilde{x}_4=\frac{4}{7},~~\tilde{x}_5=0,~~\tilde{x}_6=0
            $$

            and

            $$
            z(~\LP^2_{\KP}~) =   6 \cdot 1 + 5 \cdot 1 + 9 \cdot \frac{4}{7} = \frac{113}{7}
            $$

            The $\LP^2_{\KP}$ problem is <strong>feasible</strong> and we have:

            $$
            \left\lfloor z(\LP^2_{\KP}) \right\rfloor > \LB
            \qquad \text{since} \qquad
            \underbrace{\left\lfloor\frac{113}{7} \right\rfloor}_{ = 16} >15
            $$

            The optimal solution $\tilde{\vet x}(\,\LP^2_{\KP}\,)$ is <strong>fractional</strong>, accordingly, the $\LP^2_{\KP}$ problem is <strong>inserted in the problem list</strong> $L$.

        2. Solution of the $\LP^3_{\KP}$ problem

            We have

            $$
            \mathscr{I}^3 = \{1,2,4,5,6\},~~~\mathscr{I}^3_\text{out} = \emptyset, ~~~\mathscr{I}^3_\text{in} = \{3\}
            $$

            The capacity is $c(3)=3$ and the objective-function constant is $p(3)=8$. The split item is $s=2$ and the residual capacity is $\mathit{rc} = 1$. An  optimal solution $\tilde{\vet x}(\,\LP^3_{\KP}\,)$ is:

            $$
            \tilde{x}_1=1,~~\tilde{x}_2=\frac{1}{3},~~\tilde{x}_4=0,~~\tilde{x}_5=0,~~\tilde{x}_6=0 \text{   and   }  z(~\LP^3_{\KP}~) =  8 + 6 \cdot 1 + 5 \cdot \frac{1}{3} = \frac{47}{3}
            $$

            The $\LP^3_{\KP}$ problem is <strong>feasible</strong> and we have:

            $$
            \left\lfloor z(\LP^3_{\KP}) \right\rfloor \le \LB
            \qquad \text{since} \qquad
            \underbrace{\left\lfloor\frac{47}{3} \right\rfloor}_{ = 15} \le 15
            $$

            accordingly, the branching node is <u>pruned by upper bound</u>.

        At the end of the first iteration, Node 2 is inserted in the problem list $L$, while Node 3 is pruned by upper bound. The corresponding branch-and-bound tree is:

        ![Figure 1](../img/knapsack-branch-and-bound/fig01.svg){ .fig loading=lazy  }

        Due to the current lower bound $\LB$ and upper bound $\UB$, we have:

        $$
        15 ~~\le~~ z(\ILP_{\KP}) ~~\le~~  \underbrace{\left\lfloor \dfrac{113}{7} \right\rfloor}_{=16}
        $$

    - <span style="color:#e03131"><strong>Iteration  2</strong></span>

        The $\LP^2_{\KP}$ problem is extracted and deleted from the problem list $L$.

        The branching variable is $x_4$. The $\LP^4_{\KP}$ and $\LP^5_{\KP}$ problems are created by unselecting ($x_4 \le 0$) and selecting ($x_4 \ge 1$) item $4$.

        1. Solution of the $\LP^4_{\KP}$ problem

            We have

            $$
            \mathscr{I}^4 =  \{1,2,5,6\},~~~\mathscr{I}^4_\text{out} = \{3,4\}, ~~~\mathscr{I}^4_\text{in} = \emptyset
            $$

            The capacity is $c(4)=9$ and the objective-function constant is $p(4)=0$. The split item is $s=5$ and the residual capacity is $\mathit{rc} = 4$. An  optimal solution $\tilde{\vet x}(\,\LP^4_{\KP}\,)$ is:

            $$
            \tilde{x}_1=1,~~\tilde{x}_2=1,~~\tilde{x}_5=\frac{4}{5},~~\tilde{x}_6=0 \text{   and   }  z(~\LP^4_{\KP}~) = 6 \cdot 1 + 5 \cdot 1 + 6 \cdot \frac{4}{5} = \frac{79}{5}
            $$

            The $\LP^4_{\KP}$ problem is <strong>feasible</strong> and we have:

            $$
            \left\lfloor z(\LP^4_{\KP}) \right\rfloor \le  \LB
            \qquad \text{since} \qquad
            \underbrace{\left\lfloor\frac{79}{5} \right\rfloor}_{ = 15} \le 15
            $$

            accordingly, the branching node is <u>pruned by upper bound</u>.

        2. Solution of the $\LP^5_{\KP}$ problem

            We have

            $$
            \mathscr{I}^5 = \{1,2,5,6\},~~~\mathscr{I}^5_\text{out} = \{3\}, ~~~\mathscr{I}^5_\text{in}= \{4\}
            $$

            The capacity is $c(5)=2$ and the objective-function constant is $p(5)=9$. The split item is $s=2$ and the residual capacity is $\mathit{rc} = 0$. An  optimal solution $\tilde{\vet x}(\,\LP^5_{\KP}\,)$ is:

            $$
            \tilde{x}_1=1,~~\tilde{x}_2=0,~~\tilde{x}_5=0,~~\tilde{x}_6=0 \text{   and   }  z(~\LP^5_{\KP}~) = 9 + 6 \cdot 1  =  15
            $$

            The $\LP^5_{\KP}$ problem is <strong>feasible</strong> and we have:

            $$
            \left\lfloor z(\LP^5_{\KP}) \right\rfloor \le \LB
            \qquad \text{since} \qquad
            15 \le 15
            $$

            accordingly, the branching node is <u>pruned by upper bound</u>. The optimal solution of the $\LP^5_{\KP}$ problem is also integer, but its value does not improve the incumbent solution: the node is pruned by bound, as the other nodes of this example.

        At the end of the second iteration, Node 4 and Node 5 are both pruned by upper bound. The corresponding branch-and-bound tree is:

        ![Figure 2](../img/knapsack-branch-and-bound/fig02.svg){ .fig loading=lazy  }

    - <span style="color:#e03131"><strong>Termination</strong></span>

        Since the problem list $L$ is empty, the $\ILP_{\KP}$ problem is solved to optimality.

        The optimal value is $z(\ILP_{\KP})=15$ (the value of the lower bound $\LB$) and an optimal solution $\tilde{\vet x}(\,\ILP_{\KP}\,)$  is $\tilde  x_1=1,\tilde  x_2=0,\tilde  x_3=0,\tilde  x_4=1,\tilde  x_5=0,\tilde  x_6=0$ (the incumbent solution ${\bar{\vet x}}(ILP_{\text{KP}})$).

    This is the branch-and-bound tree of the previous B&amp;B Algorithm, showing for each branching node the associated $\LP_{\KP}$ problem, its optimal solution and value, the lower bound $\LB$, and the pruning criteria.

    ![Figure 3](../img/knapsack-branch-and-bound/fig03.svg){ .fig loading=lazy  }

## 27.4 Typical mistakes

!!! attenzione "Warning"

    - <strong>Forgetting the upper bounds $x_j\le 1$.</strong> Without them the LP problem of a node would put all the capacity on the item of best efficiency: the node boxes must contain $x_j\le 1$.

    - <strong>Computing the split item on the original instance.</strong> In a node, the split item and the residual capacity are computed on the items of $\mathscr{I}^k$ with the capacity $c(k)$, after fixing the items of $\mathscr{I}^k_\text{in}$ and $\mathscr{I}^k_\text{out}$.

    - <strong>Forgetting the constant $p(k)$.</strong> The value of the node is $p(k)$ plus the value of the items of $\mathscr{I}^k$: the profit of the selected items counts.

    - <strong>Using the old lower bound.</strong> The lower bound is updated as soon as a node has an integer solution of larger value; the nodes of the list that become dominated are discarded.

    - <strong>Numbering the skipped children.</strong> A child that is not solved does not receive a node index, exactly as in the general algorithm.

## 27.5 In summary

!!! chiave "In summary"

    - The branch-and-bound algorithm for the KP is the LP-based algorithm with two simplifications: the problem of every node is solved by the formulas of Dantzig, and the branching variable is the one of the split item.

    - A node is described by the sets $\mathscr{I}^k_\text{in}$, $\mathscr{I}^k_\text{out}$ and $\mathscr{I}^k$, by the capacity $c(k)$ and by the constant $p(k)$.

    - The bound of a node is $\lfloor z(\LP_{\KP}^k)\rfloor$; when the problem list is empty the lower and the upper bound coincide and the incumbent solution is optimal.

    <strong>Dashboard of the KP instance of Example 1</strong> ($c=9$, $p=(6,5,8,9,6,7)$, $w=(2,3,6,7,5,9)$). The bounds on $z(\ILP_{\KP})$ found so far:

    <div class="tabella" markdown="0"><table>
    <tr>
    <th>Source</th>
    <th>Lower bound</th>
    <th>Upper bound</th>
    <th>From</th>
    </tr>
    <tr>
    <td>Dantzig bound</td>
    <td>–</td>
    <td><span class="arithmatex">\(16\)</span></td>
    <td><span class="arithmatex">\(\left\lfloor \frac{49}{3} \right\rfloor\)</span></td>
    </tr>
    <tr>
    <td>This chapter, initialization</td>
    <td><span class="arithmatex">\(15\)</span></td>
    <td><span class="arithmatex">\(16\)</span></td>
    <td>heuristic solution <span class="arithmatex">\(\{1,4\}\)</span></td>
    </tr>
    <tr>
    <td>This chapter, iteration <span class="arithmatex">\(1\)</span></td>
    <td><span class="arithmatex">\(15\)</span></td>
    <td><span class="arithmatex">\(16\)</span></td>
    <td>node <span class="arithmatex">\(2\)</span> in the list, <span class="arithmatex">\(\left\lfloor \frac{113}{7} \right\rfloor\)</span></td>
    </tr>
    <tr>
    <td>This chapter, termination</td>
    <td><span class="arithmatex">\(15\)</span></td>
    <td><span class="arithmatex">\(15\)</span></td>
    <td>empty list, <span class="arithmatex">\(5\)</span> nodes</td>
    </tr>
    </table></div>

<!-- laboratorio-interattivo: sezione generata da interattivi.py -->

:material-flask-outline: **In the interactive lab:** [Branch-and-bound for the knapsack](../lab/knapsack-branch-and-bound.md).