---
title: "Exercises · Formulations of the bin packing problem"
---

# Exercises · Formulations of the bin packing problem

<div class="info-capitolo" markdown>

**Exercises · Chapter 10** · each solution opens with a click · [:material-book-open-variant: Chapter 10: Bin packing](../formulations/bin-packing-formulations.md) · [:material-file-pdf-box: Exercises, volume 2 (PDF)](../pdf/exercises-2-formulations.pdf)

</div>

<a id="esercizio-10-1"></a>

!!! esercizio "Exercise 10.1: ILP model of the Bin Packing Problem (1)"

    We consider a bin capacity $c=10$ and a set $\mathscr{I}=\{1,2,\dots,5\}$ of $5$ items ($n=5$), with the following item weights:

    $$
    \begin{array}{l|ccccc}
    \hline  & {j=1} & {j=2} & {j=3} & {j=4} & {j=5} \\[1ex]
    \hline {w_j} & {6} & {5} & {4} & {3} & {2} \\
    \hline
    \end{array}
    $$

    The packing patterns $\{1,4\}$, $\{2,3\}$ and $\{5\}$ are a feasible solution.

    **Questions**

    1. Explain why $m=3$ is a valid upper bound on the number of bins used in any optimal solution.

    2. Count the variables and the constraints (besides the domains of the variables) of the $\mathrm{ILP}_{\mathrm{BPP}}$ model with $m=3$.

    3. Write the $\mathrm{ILP}_{\mathrm{BPP}}$ model with $m=3$ for this instance.

    4. Solve the model with Gurobi. Give the optimal value, an optimal solution and the associated packing patterns, and say whether the optimal solution is unique.

??? soluzione "Solution"

    1. The given packing patterns have weights $9$, $9$ and $2$, all at most $c=10$: they are a feasible solution with $3$ bins. Hence $z(\mathrm{ILP}_{\mathrm{BPP}})\le 3$, and $m=3$ is a valid upper bound.

    2. There are $m\,n=3\cdot5=15$ assignment variables $x_{jb}$ and $m=3$ activation variables $y_b$, so $18$ binary variables. There are $n=5$ assignment constraints and $m=3$ capacity constraints, so $8$ linear constraints.

    3. With $\mathscr{B}=\{1,2,3\}$ the $\mathrm{ILP}_{\mathrm{BPP}}$ model is:

        \begin{align*}
        \min~~ & y_1 + y_2 + y_3 \\[0.5ex]
        \text{subject to}~~ & x_{11} + x_{12} + x_{13} = 1 \\[0.5ex]
        & x_{21} + x_{22} + x_{23} = 1 \\[0.5ex]
        & x_{31} + x_{32} + x_{33} = 1 \\[0.5ex]
        & x_{41} + x_{42} + x_{43} = 1 \\[0.5ex]
        & x_{51} + x_{52} + x_{53} = 1 \\[0.5ex]
        & {-}6x_{11} - 5x_{21} - 4x_{31} - 3x_{41} - 2x_{51} + 10y_1 \ge 0 \\[0.5ex]
        & {-}6x_{12} - 5x_{22} - 4x_{32} - 3x_{42} - 2x_{52} + 10y_2 \ge 0 \\[0.5ex]
        & {-}6x_{13} - 5x_{23} - 4x_{33} - 3x_{43} - 2x_{53} + 10y_3 \ge 0 \\[0.5ex]
        & x_{jb} \in \{0,1\}, ~~ j \in \mathscr{I},~ b \in \mathscr{B} \\[0.5ex]
        & y_b \in \{0,1\}, ~~ b \in \mathscr{B}
        \end{align*}

    4. Gurobi returns the optimal value $z(\mathrm{ILP}_{\mathrm{BPP}})=2$. The lower bound $\left\lceil \frac{6+5+4+3+2}{10}\right\rceil=2$ confirms it. An optimal solution is

        $$
        \tilde x_{11}=1,~~\tilde x_{31}=1,~~\tilde x_{22}=1,~~\tilde x_{42}=1,~~\tilde x_{52}=1,~~ \tilde y_1=\tilde y_2=1,~~\tilde y_3=0,
        $$

        with all the other variables equal to $0$. The packing patterns are $\tilde P_1=\{1,3\}$ (weight $10$) and $\tilde P_2=\{2,4,5\}$ (weight $10$).

        The partition of the items is unique: item $1$ can share a bin only with weight at most $4$, and only $\{1,3\}$ leaves a second bin of weight at most $10$. The optimal solution of the model is not unique: the two patterns can go into any two of the $3$ bins, which gives $3\cdot 2=6$ optimal solutions.

<a id="esercizio-10-2"></a>

!!! esercizio "Exercise 10.2: LP relaxations of the BPP model (1)"

    We consider a bin capacity $c=12$ and a set $\mathscr{I}=\{1,2,\dots,5\}$ of $5$ items ($n=5$), with the following item weights:

    $$
    \begin{array}{l|ccccc}
    \hline  & {j=1} & {j=2} & {j=3} & {j=4} & {j=5} \\[1ex]
    \hline {w_j} & {7} & {6} & {5} & {4} & {3} \\
    \hline
    \end{array}
    $$

    We use $m=3$ bins: the packing patterns $\{1,3\}$, $\{2,4\}$ and $\{5\}$ are feasible.

    **Questions**

    1. Solve the two LP relaxations $\mathrm{LP}\text{-}0_{\mathrm{BPP}}$ and $\mathrm{LP}_{\mathrm{BPP}}$ with Gurobi and compare their optimal values with the formula of the chapter.

    2. Write the primal solution and the dual solution given by the chapter for this instance, and verify that they are feasible and have the same objective value.

    3. Derive the lower bound on the number of bins, and decide whether it is equal to the optimal value.

??? soluzione "Solution"

    !!! nota ""

        For every BPP instance and every valid $m$, the optimal value of both LP relaxations is

        $$
        z(\mathrm{LP}\text{-}0_{\mathrm{BPP}}) \;=\; z(\mathrm{LP}_{\mathrm{BPP}}) \;=\; \frac{\sum_{j\in\mathscr{I}} w_j}{c},
        $$

        attained by $\tilde x_{jb}=\frac{1}{m}$ and $\tilde y_b=\frac{\sum_{j} w_j}{m\,c}$; an optimal dual solution is $\tilde\mu_j=\frac{w_j}{c}$ and $\tilde\pi_b=\frac{1}{c}$ (and $\tilde\lambda_b=0$ for $\mathrm{LP}_{\mathrm{BPP}}$).

    1. Gurobi returns $z(\mathrm{LP}\text{-}0_{\mathrm{BPP}})=\frac{25}{12}$ and $z(\mathrm{LP}_{\mathrm{BPP}})=\frac{25}{12}$. The formula gives the same value:

        $$
        \frac{\sum_{j\in\mathscr{I}} w_j}{c}=\frac{7+6+5+4+3}{12}=\frac{25}{12}.
        $$

        The upper bounds $y_b\le 1$ do not change the optimal value.

    2. The primal solution is $\tilde x_{jb}=\frac{1}{3}$ for every $j$ and $b$, and $\tilde y_b=\frac{25}{3\cdot 12}=\frac{25}{36}$ for every $b$.

        - Assignment: $\sum_b \tilde x_{jb}=3\cdot\frac{1}{3}=1$ for every item $j$.

        - Capacity: $-\sum_j w_j\,\tilde x_{jb}+12\,\tilde y_b=-\frac{25}{3}+12\cdot\frac{25}{36}=0$ for every bin $b$.

        - Bounds: $0\le \frac{25}{36}\le 1$, so $\tilde y_b\le 1$ holds as well.

        The dual solution is $\tilde\pi_b=\frac{1}{12}$ for every bin and $\tilde\mu_j=\frac{w_j}{12}$:

        $$
        \tilde\mu_1=\frac{7}{12},~~\tilde\mu_2=\frac{1}{2},~~\tilde\mu_3=\frac{5}{12},~~\tilde\mu_4=\frac{1}{3},~~\tilde\mu_5=\frac{1}{4}.
        $$

        Every constraint $\mu_j-w_j\,\pi_b\le 0$ holds with equality, since $\frac{w_j}{12}-w_j\,\frac{1}{12}=0$, and every constraint $c\,\pi_b\le 1$ holds with equality, since $12\cdot\frac{1}{12}=1$.

        Primal value: $\sum_b\tilde y_b=3\cdot\frac{25}{36}=\frac{25}{12}$. Dual value: $\sum_j\tilde\mu_j=\frac{25}{12}$. The two values are equal, so by LP Weak Duality both solutions are optimal.

    3. Since $z(\mathrm{ILP}_{\mathrm{BPP}})$ is an integer, $z(\mathrm{ILP}_{\mathrm{BPP}})\ge\left\lceil \frac{25}{12}\right\rceil=3$. The feasible solution of the statement uses $3$ bins, so $z(\mathrm{ILP}_{\mathrm{BPP}})=3$ (Gurobi gives the same value): the rounded bound is equal to the optimal value.

<a id="esercizio-10-3"></a>

!!! esercizio "Exercise 10.3: Feasible solutions of the BPP model (1)"

    We consider a bin capacity $c=10$ and a set $\mathscr{I}=\{1,2,\dots,6\}$ of $6$ items ($n=6$), with the following item weights:

    $$
    \begin{array}{l|cccccc}
    \hline  & {j=1} & {j=2} & {j=3} & {j=4} & {j=5} & {j=6} \\[1ex]
    \hline {w_j} & {5} & {4} & {4} & {3} & {2} & {2} \\
    \hline
    \end{array}
    $$

    We use the $\mathrm{ILP}_{\mathrm{BPP}}$ model with $m=3$ bins. The following candidate solutions give the items in each bin (all the variables not listed are equal to $0$):

    - **(a)** bin $1$: $\{1,3\}$, bin $2$: $\{2,4,5\}$, bin $3$: $\{6\}$, and $y_1=y_2=y_3=1$;

    - **(b)** bin $1$: $\{1,2,4\}$, bin $2$: $\{3,5\}$, bin $3$: $\{6\}$, and $y_1=y_2=y_3=1$;

    - **(c)** bin $1$: $\{1,4,5\}$, bin $2$: $\{2,3,6\}$, bin $3$ empty, and $y_1=y_2=y_3=1$;

    - **(d)** bin $1$: $\{1,4,5\}$, bin $2$: $\{2,3,6\}$, bin $3$: $\{6\}$, and $y_1=y_2=y_3=1$;

    - **(e)** $x_{jb}=\frac{1}{3}$ for every item $j$ and every bin $b$, and $y_1=y_2=y_3=\frac{2}{3}$.

    **Questions**

    1. For each candidate, check the assignment constraints and the capacity constraints of the model.

    2. Decide which candidates are feasible for the $\mathrm{ILP}_{\mathrm{BPP}}$ model and which are feasible for its relaxation $\mathrm{LP}_{\mathrm{BPP}}$, and give the objective value of the feasible ones.

    3. Use the candidates to find the optimal value of the instance.

??? soluzione "Solution"

    1. - **(a)** Every item is in exactly one bin. The loads are $9$, $9$, $2$ against the capacities $10$, $10$, $10$. All the capacity constraints hold.

        - **(b)** Every item is in exactly one bin. The loads are $12$, $6$, $2$ against the capacities $10$, $10$, $10$. The capacity constraint of bin $1$ is violated.

        - **(c)** Every item is in exactly one bin. The loads are $10$, $10$, $0$ against the capacities $10$, $10$, $10$. All the capacity constraints hold.

        - **(d)** Item $6$ is in $2$ bins: the assignment constraint of item $6$ is violated. The loads are $10$, $10$, $2$ against the capacities $10$, $10$, $10$. All the capacity constraints hold.

        - **(e)** Every item is in exactly one bin. The loads are $\frac{20}{3}$, $\frac{20}{3}$, $\frac{20}{3}$ against the capacities $\frac{20}{3}$, $\frac{20}{3}$, $\frac{20}{3}$. All the capacity constraints hold.

    2. - **(a)** Feasible for $\mathrm{ILP}_{\mathrm{BPP}}$, hence for $\mathrm{LP}_{\mathrm{BPP}}$, of value $3$.

        - **(b)** Infeasible for both models: bin $1$ contains weight $12>10$.

        - **(c)** Feasible for both models, of value $3$. Bin $3$ is empty but counted: setting $y_3=0$ keeps all the constraints satisfied and gives value $2$.

        - **(d)** Infeasible for both models: item $6$ is packed twice.

        - **(e)** Feasible for $\mathrm{LP}_{\mathrm{BPP}}$, of value $3\cdot\frac{2}{3}=2$, but not for $\mathrm{ILP}_{\mathrm{BPP}}$, since the variables are fractional. Every capacity constraint holds with equality: $\frac{20}{3}=10\cdot\frac{2}{3}$.

    3. Candidate (c) with $y_3=0$ uses $2$ bins, with patterns $\{1,4,5\}$ and $\{2,3,6\}$, both of weight $10$. The lower bound $\left\lceil\frac{5+4+4+3+2+2}{10}\right\rceil=2$ shows that no solution uses fewer bins: $z(\mathrm{ILP}_{\mathrm{BPP}})=2$. The value $2$ of candidate (e) is the value $\frac{\sum_j w_j}{c}=2$ of the LP relaxations.

<a id="esercizio-10-4"></a>

!!! esercizio "Exercise 10.4: The bounds $y_b\le 1$ and the choice of m (1)"

    We consider a bin capacity $c=10$ and a set $\mathscr{I}=\{1,2,\dots,3\}$ of $3$ items ($n=3$), with the following item weights:

    $$
    \begin{array}{l|ccc}
    \hline  & {j=1} & {j=2} & {j=3} \\[1ex]
    \hline {w_j} & {6} & {6} & {6} \\
    \hline
    \end{array}
    $$

    The two relaxations differ only in the upper bounds $y_b\le 1$.

    **Questions**

    1. Solve $\mathrm{LP}\text{-}0_{\mathrm{BPP}}$, $\mathrm{LP}_{\mathrm{BPP}}$ and $\mathrm{ILP}_{\mathrm{BPP}}$ with $m=3$ using Gurobi, and explain why the bounds $y_b\le 1$ do not change the value of the relaxation.

    2. Show that the upper bounds $x_{jb}\le 1$ are valid but implied by the other constraints.

    3. Repeat the computation with $m=2$. Explain the result.

    4. Repeat the computation with $m=1$, and compare the two relaxations.

??? soluzione "Solution"

    1. Gurobi gives $z(\mathrm{LP}\text{-}0_{\mathrm{BPP}})=z(\mathrm{LP}_{\mathrm{BPP}})=\frac{9}{5}$ and $z(\mathrm{ILP}_{\mathrm{BPP}})=3$. The optimal solution of the chapter has $\tilde y_b=\frac{18}{3\cdot 10}=\frac{3}{5}\le 1$: it satisfies the bounds $y_b\le 1$, so adding them cuts off no optimal solution of $\mathrm{LP}\text{-}0_{\mathrm{BPP}}$. In general $\frac{\sum_j w_j}{m\,c}\le 1$ whenever $\frac{\sum_j w_j}{c}\le z(\mathrm{ILP}_{\mathrm{BPP}})\le m$.

    2. For every item $j$ and bin $b$, the assignment constraint and $x_{jk}\ge 0$ give

        $$
        x_{jb}\;\le\;\sum_{k\in\mathscr{B}} x_{jk}\;=\;1 .
        $$

        Every point that satisfies the assignment constraints and the non-negativity constraints already satisfies $x_{jb}\le 1$.

    3. With $m=2$ the $\mathrm{ILP}_{\mathrm{BPP}}$ model is infeasible (Gurobi): every item has weight $6>\frac{c}{2}=5$, so no two items share a bin and $3$ bins are needed. The relaxations are feasible, with value $\frac{9}{5}$ and $\tilde y_1=\tilde y_2=\frac{18}{2\cdot 10}=\frac{9}{10}\le 1$. A value $m<z(\mathrm{ILP}_{\mathrm{BPP}})$ makes the model wrong, and the relaxation does not reveal it.

    4. With $m=1$, $\mathrm{LP}\text{-}0_{\mathrm{BPP}}$ is still feasible, with $\tilde y_1=\frac{9}{5}$ and value $\frac{9}{5}$. Instead $\mathrm{LP}_{\mathrm{BPP}}$ is infeasible (Gurobi): the capacity constraint and the assignment constraints give $10\,y_1\ge 18$, that is $y_1\ge \frac{9}{5}>1$, against $y_1\le 1$. Here the bounds $y_b\le 1$ do make a difference: they detect that one bin cannot hold all the items.

<a id="esercizio-10-5"></a>

!!! esercizio "Exercise 10.5: Integrality gap of the BPP model (1)"

    Given $\vartheta\in\Z_{\ge 1}$, the chapter considers the BPP instances with capacity $c=2\vartheta$ and $n$ items of weight $w_j=\vartheta+1$. We take $\vartheta=4$ and $n=4$, that is $c=8$ and the weights:

    $$
    \begin{array}{l|cccc}
    \hline  & {j=1} & {j=2} & {j=3} & {j=4} \\[1ex]
    \hline {w_j} & {5} & {5} & {5} & {5} \\
    \hline
    \end{array}
    $$

    **Questions**

    1. Use $m=4$ and Gurobi to compute $z(\mathrm{LP}_{\mathrm{BPP}})$ and $z(\mathrm{ILP}_{\mathrm{BPP}})$, and explain the value of $z(\mathrm{ILP}_{\mathrm{BPP}})$.

    2. Compute the absolute gap $z(\mathrm{ILP}_{\mathrm{BPP}})-z(\mathrm{LP}_{\mathrm{BPP}})$ and the ratios $\frac{z(\mathrm{LP}_{\mathrm{BPP}})}{z(\mathrm{ILP}_{\mathrm{BPP}})}$ and $\frac{\lceil z(\mathrm{LP}_{\mathrm{BPP}})\rceil}{z(\mathrm{ILP}_{\mathrm{BPP}})}$, and compare them with the value $\frac{1}{2}$ of the chapter.

    3. Find the smallest $\vartheta$ for which the ratio $\frac{z(\mathrm{LP}_{\mathrm{BPP}})}{z(\mathrm{ILP}_{\mathrm{BPP}})}$ is at most $\frac{11}{20}$.

    4. Consider the second family of the chapter with $n=6$: capacity $c=6$ and $6$ items of weight $\frac{c}{2}+1=4$. Compute the ratio $\frac{\lceil z(\mathrm{LP}_{\mathrm{BPP}})\rceil}{z(\mathrm{ILP}_{\mathrm{BPP}})}$ with Gurobi.

??? soluzione "Solution"

    !!! nota ""

        For every BPP instance and every valid $m$, the optimal value of both LP relaxations is

        $$
        z(\mathrm{LP}\text{-}0_{\mathrm{BPP}}) \;=\; z(\mathrm{LP}_{\mathrm{BPP}}) \;=\; \frac{\sum_{j\in\mathscr{I}} w_j}{c},
        $$

        attained by $\tilde x_{jb}=\frac{1}{m}$ and $\tilde y_b=\frac{\sum_{j} w_j}{m\,c}$; an optimal dual solution is $\tilde\mu_j=\frac{w_j}{c}$ and $\tilde\pi_b=\frac{1}{c}$ (and $\tilde\lambda_b=0$ for $\mathrm{LP}_{\mathrm{BPP}}$).

    1. Gurobi gives $z(\mathrm{LP}_{\mathrm{BPP}})=\frac{4\cdot 5}{8}=\frac{5}{2}$ and $z(\mathrm{ILP}_{\mathrm{BPP}})=4$. Every item has weight $5>\frac{c}{2}=4$, so two items never fit in the same bin, and each item needs its own bin.

    2. The absolute gap is $4-\frac{5}{2}=\frac{3}{2}$. The ratios are

        $$
        \frac{z(\mathrm{LP}_{\mathrm{BPP}})}{z(\mathrm{ILP}_{\mathrm{BPP}})}=\frac{\frac{5}{2}}{4}=\frac{5}{8}\qquad\text{and}\qquad\frac{\lceil z(\mathrm{LP}_{\mathrm{BPP}})\rceil}{z(\mathrm{ILP}_{\mathrm{BPP}})}=\frac{3}{4}=\frac{3}{4}.
        $$

        Both are at least $\frac{1}{2}$, as the chapter proves for every instance.

    3. For this family the ratio is

        $$
        \frac{z(\mathrm{LP}_{\mathrm{BPP}})}{z(\mathrm{ILP}_{\mathrm{BPP}})}=\frac{\frac{n(\vartheta+1)}{2\vartheta}}{n}=\frac{\vartheta+1}{2\vartheta}.
        $$

        The condition $\frac{\vartheta+1}{2\vartheta}\le\frac{11}{20}$ is $20\vartheta+20\le 22\vartheta$, that is $\vartheta\ge 10$. The smallest value is $\vartheta=10$, with $c=20$ and items of weight $11$.

    4. Gurobi gives $z(\mathrm{LP}_{\mathrm{BPP}})=\frac{6\cdot 4}{6}=4$ and $z(\mathrm{ILP}_{\mathrm{BPP}})=6$, since again no two items share a bin. The ratio is $4/6=\frac{2}{3}$. In general it is $\frac{n/2+1}{n}=\frac{1}{2}+\frac{1}{n}$, which tends to $\frac{1}{2}$.
