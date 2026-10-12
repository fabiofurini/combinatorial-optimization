---
title: "Exercises · Formulations of the maximum clique problem"
---

# Exercises · Formulations of the maximum clique problem

<div class="info-capitolo" markdown>

**Exercises · Chapter 12** · each solution opens with a click · [:material-book-open-variant: Chapter 12: Maximum clique](../formulations/clique-formulations.md) · [:material-file-pdf-box: Exercises, volume 2 (PDF)](../pdf/exercises-2-formulations.pdf)

</div>

<a id="esercizio-12-1"></a>

!!! esercizio "Exercise 12.1: ILP model of the Maximum Clique Problem (MCP)"

    We consider the graph $G=(V,E)$ with $V=\{1,\dots,6\}$ and the $7$ edges

    $$
    E=\{\{1,2\},~\{1,3\},~\{2,3\},~\{2,4\},~\{3,5\},~\{4,5\},~\{5,6\}\}.
    $$

    ![Figure 1](../img/ex-clique-formulations/fig01.svg){ .fig loading=lazy  }

    **Questions**

    1. Write the non-edges of $G$. How many variables and constraints does the $\ILP_{\MCP}$ model have?

    2. Write the $\ILP_{\MCP}$ model of $G$.

    3. Solve the model with Gurobi: give $z(\ILP_{\MCP})$ and the optimal solution. Is it unique?

    4. Which ILP model of the Maximum Stable Set Problem on $\overline{G}$ do you obtain? Explain.

??? soluzione "Solution"

    1. $G$ has $\binom{6}{2}-7=8$ non-edges:

        $$
        \overline{E}=\{\{1,4\},~\{1,5\},~\{1,6\},~\{2,5\},~\{2,6\},~\{3,4\},~\{3,6\},~\{4,6\}\}.
        $$

        The model has $n=6$ binary variables and one constraint per non-edge: $8$ linear constraints.

    2. The $\ILP_{\MCP}$ model is:

        \begin{align*}
        \max\quad & x_1+x_2+x_3+x_4+x_5+x_6\\
        \text{subject to}\quad & x_1+x_4\le 1,~~ x_1+x_5\le 1,~~ x_1+x_6\le 1,~~ x_2+x_5\le 1,\\
        & x_2+x_6\le 1,~~ x_3+x_4\le 1,~~ x_3+x_6\le 1,~~ x_4+x_6\le 1,\\
        & x_1,\dots,x_6\in\{0,1\}.
        \end{align*}

    3. Gurobi returns $z(\ILP_{\MCP})=3$ with $\tilde x_1=\tilde x_2=\tilde x_3=1$ and $\tilde x_4=\tilde x_5=\tilde x_6=0$: the clique $\{1,2,3\}$. The enumeration of the cliques shows that it is the only triangle, and no clique has $4$ vertices (only vertices $2$, $3$ and $5$ have degree $3$). The optimal solution is unique.

        ![Figure 2](../img/ex-clique-formulations/fig02.svg){ .fig loading=lazy  }

    4. The same model: its constraints are written on the edges of $\overline{G}$, whose edge set is $\overline{E}$, and $x_u+x_v\le 1$ says that at most one endpoint of every edge of $\overline{G}$ is selected. It is the edge formulation of the MSSP on $\overline{G}$, and $\alpha(\overline{G})=\omega(G)=3$.

<a id="esercizio-12-2"></a>

!!! esercizio "Exercise 12.2: The complement graph and the clique formulation (MCP)"

    We consider the graph $G=(V,E)$ with $V=\{1,\dots,6\}$ and the $7$ edges

    $$
    E=\{\{1,4\},~\{1,5\},~\{2,4\},~\{2,5\},~\{2,6\},~\{3,6\},~\{4,6\}\}.
    $$

    ![Figure 3](../img/ex-clique-formulations/fig03.svg){ .fig loading=lazy  }

    **Questions**

    1. Write the edges of the complement graph $\overline{G}$ and draw it next to $G$.

    2. List the maximal cliques of $\overline{G}$.

    3. Write the clique formulation $\ILP^{\mathrm{CL}}_{\MCP}$ and compare its number of constraints with the $\ILP_{\MCP}$ model.

    4. Show that every constraint of $\ILP_{\MCP}$ is implied by a constraint of $\ILP^{\mathrm{CL}}_{\MCP}$.

    5. Solve both models with Gurobi and give a maximum clique of $G$.

??? soluzione "Solution"

    1. $\overline{G}$ has the $\binom{6}{2}-7=8$ non-edges of $G$:

        $$
        \overline{E}=\{\{1,2\},~\{1,3\},~\{1,6\},~\{2,3\},~\{3,4\},~\{3,5\},~\{4,5\},~\{5,6\}\}.
        $$

        ![Figure 4](../img/ex-clique-formulations/fig04.svg){ .fig loading=lazy  }

        ![Figure 5](../img/ex-clique-formulations/fig05.svg){ .fig loading=lazy  }

    2. The maximal cliques of $\overline{G}$ are the two triangles $\{1,2,3\}$ and $\{3,4,5\}$, which share vertex $3$, and the two edges $\{1,6\}$ and $\{5,6\}$: vertex $6$ is adjacent in $\overline{G}$ only to $1$ and $5$, which are not adjacent there.

    3. The clique formulation has one constraint per maximal clique of $\overline{G}$:

        \begin{align*}
        \max\quad & x_1+x_2+x_3+x_4+x_5+x_6\\
        \text{subject to}\quad & x_1+x_2+x_3\le 1,~~ x_3+x_4+x_5\le 1,~~ x_1+x_6\le 1,~~ x_5+x_6\le 1,\\
        & x_1,\dots,x_6\in\{0,1\}.
        \end{align*}

        It has $4$ constraints, against the $8$ constraints of $\ILP_{\MCP}$ (one per edge of $\overline{G}$).

    4. Every edge of $\overline{G}$ lies in a maximal clique, and the variables are non-negative:

        <div class="tabella" markdown="0"><table>
        <tr>
        <th>constraint of <span class="arithmatex">\(\ILP_{\MCP}\)</span></th>
        <th>implied by</th>
        </tr>
        <tr>
        <td><span class="arithmatex">\(x_1+x_2\le 1\)</span></td>
        <td><span class="arithmatex">\(x_1+x_2+x_3\le 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(x_1+x_3\le 1\)</span></td>
        <td><span class="arithmatex">\(x_1+x_2+x_3\le 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(x_1+x_6\le 1\)</span></td>
        <td><span class="arithmatex">\(x_1+x_6\le 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(x_2+x_3\le 1\)</span></td>
        <td><span class="arithmatex">\(x_1+x_2+x_3\le 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(x_3+x_4\le 1\)</span></td>
        <td><span class="arithmatex">\(x_3+x_4+x_5\le 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(x_3+x_5\le 1\)</span></td>
        <td><span class="arithmatex">\(x_3+x_4+x_5\le 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(x_4+x_5\le 1\)</span></td>
        <td><span class="arithmatex">\(x_3+x_4+x_5\le 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(x_5+x_6\le 1\)</span></td>
        <td><span class="arithmatex">\(x_5+x_6\le 1\)</span></td>
        </tr>
        </table></div>

    5. Both models give the optimal value $3$, with the clique $\{2,4,6\}$ of $G$: it is a stable set of $\overline{G}$, and it is the unique maximum clique (enumeration).

        ![Figure 6](../img/ex-clique-formulations/fig06.svg){ .fig loading=lazy  }

<a id="esercizio-12-3"></a>

!!! esercizio "Exercise 12.3: LP bounds: edge versus clique formulation (MCP)"

    We consider the graph $G=(V,E)$ with $V=\{1,\dots,7\}$ and the $9$ edges

    \begin{align*}
    E=\{ & \{1,2\},~\{1,4\},~\{1,5\},~\{1,6\},~\{2,7\},\\
    & \{3,4\},~\{3,5\},~\{5,6\},~\{5,7\}\}.
    \end{align*}

    ![Figure 7](../img/ex-clique-formulations/fig07.svg){ .fig loading=lazy  }

    **Questions**

    1. Write the $\LP_{\MCP}$ model (edge formulation with $0\le x_v\le 1$). Show that $\bar x_v=\frac{1}{2}$ for every vertex is feasible, and compute $z(\LP_{\MCP})$ with Gurobi.

    2. List the maximal cliques of $\overline{G}$ and write the $\LP^{\mathrm{CL}}_{\MCP}$ model.

    3. Is the point $\bar x_v=\frac{1}{2}$ feasible for $\LP^{\mathrm{CL}}_{\MCP}$? Compute $z(\LP^{\mathrm{CL}}_{\MCP})$ with Gurobi, and prove the value by summing some constraints.

    4. Find $\omega(G)$ and compare the two LP bounds.

??? soluzione "Solution"

    1. The $12$ non-edges give the model

        \begin{align*}
        \max\quad & x_1+x_2+x_3+x_4+x_5+x_6+x_7\\
        \text{subject to}\quad & x_1+x_3\le 1,~~ x_1+x_7\le 1,~~ x_2+x_3\le 1,~~ x_2+x_4\le 1,\\
        & x_2+x_5\le 1,~~ x_2+x_6\le 1,~~ x_3+x_6\le 1,~~ x_3+x_7\le 1,\\
        & x_4+x_5\le 1,~~ x_4+x_6\le 1,~~ x_4+x_7\le 1,~~ x_6+x_7\le 1,\\
        & 0\le x_1,\dots,x_7\le 1.
        \end{align*}

        With $\bar x_v=\frac{1}{2}$ every constraint reads $\frac{1}{2}+\frac{1}{2}=1\le 1$, and the value is $\frac{7}{2}$. Gurobi returns $z(\LP_{\MCP})=\frac{7}{2}$: the point is optimal.

    2. The $6$ maximal cliques of $\overline{G}$ (maximal stable sets of $G$) are $\{1,3,7\}$, $\{2,3,6\}$, $\{2,4,5\}$, $\{2,4,6\}$, $\{3,6,7\}$, $\{4,6,7\}$, and the model is

        \begin{align*}
        \max\quad & x_1+x_2+x_3+x_4+x_5+x_6+x_7\\
        \text{subject to}\quad & x_1+x_3+x_7\le 1,~~ x_2+x_3+x_6\le 1,~~ x_2+x_4+x_5\le 1,\\
        & x_2+x_4+x_6\le 1,~~ x_3+x_6+x_7\le 1,~~ x_4+x_6+x_7\le 1,\\
        & x_1,\dots,x_7\ge 0.
        \end{align*}

    3. No: $\bar x_1+\bar x_3+\bar x_7=\frac{3}{2}>1$. Gurobi returns $z(\LP^{\mathrm{CL}}_{\MCP})=3$. The three constraints of $\{1,3,7\}$, $\{2,3,6\}$, $\{2,4,5\}$ cover every vertex at least once; summing them, every variable appears with coefficient at least $1$, so $\sum_{v=1}^{7}x_v\le 3$ for every feasible point.

    4. The triangle $\{1,5,6\}$ is the unique maximum clique (enumeration), so $\omega(G)=3$.

        ![Figure 8](../img/ex-clique-formulations/fig08.svg){ .fig loading=lazy  }

        The edge formulation gives $\frac{7}{2}$ (and $\lfloor\frac{7}{2}\rfloor=3$ after rounding down, since $\omega(G)$ is an integer); the clique formulation gives $3$ directly, with no gap.

<a id="esercizio-12-4"></a>

!!! esercizio "Exercise 12.4: Clique number, LP bound and chromatic number (MCP)"

    The wheel $W_5$ has the vertices $V=\{1,\dots,6\}$: the vertices $1,\dots,5$ form a cycle, and vertex $6$ is adjacent to all of them.

    ![Figure 9](../img/ex-clique-formulations/fig09.svg){ .fig loading=lazy  }

    **Questions**

    1. List the maximal stable sets of $W_5$, that is, the maximal cliques of $\overline{W_5}$.

    2. Write the $\LP^{\mathrm{CL}}_{\MCP}$ model and its dual, and say which coloring formulation the dual relaxes.

    3. Find a primal solution and a dual solution of value $\frac{7}{2}$. What can you conclude?

    4. Deduce $\omega(W_5)$ and $\chi(W_5)$ from the integrality of the two numbers, and write the chain of the chapter.

??? soluzione "Solution"

    1. A stable set contains at most $2$ vertices of the cycle, never two consecutive ones, and vertex $6$ is adjacent to all the others. The maximal stable sets are $\{1,3\}$, $\{1,4\}$, $\{2,4\}$, $\{2,5\}$, $\{3,5\}$, $\{6\}$.

    2. With one constraint per maximal stable set:

        \begin{align*}
        \max\quad & x_1+x_2+x_3+x_4+x_5+x_6\\
        \text{subject to}\quad & x_1+x_3\le 1,~~ x_1+x_4\le 1,~~ x_2+x_4\le 1,\\
        & x_2+x_5\le 1,~~ x_3+x_5\le 1,~~ x_6\le 1,\\
        & x_1,\dots,x_6\ge 0.
        \end{align*}

        With a variable $y_Q\ge 0$ per constraint (index $Q$ written as its vertices), the dual is

        \begin{align*}
        \min\quad & y_{13}+y_{14}+y_{24}+y_{25}+y_{35}+y_{6}\\
        \text{subject to}\quad & y_{13}+y_{14}\ge 1,~~ y_{24}+y_{25}\ge 1,~~ y_{13}+y_{35}\ge 1,\\
        & y_{14}+y_{24}\ge 1,~~ y_{25}+y_{35}\ge 1,~~ y_{6}\ge 1,\\
        & y_Q\ge 0 \text{ for every maximal stable set } Q.
        \end{align*}

        It is the LP relaxation of the coloring formulation with the maximal stable sets: every vertex must be covered by a chosen stable set.

    3. The primal point $\bar x_1=\dots=\bar x_5=\frac{1}{2}$, $\bar x_6=1$ satisfies all the constraints and has value $\frac{5}{2}+1=\frac{7}{2}$. The dual point $\bar y_Q=\frac{1}{2}$ for the five pairs and $\bar y_{6}=1$ covers every vertex of the cycle with $\frac{1}{2}+\frac{1}{2}=1$ and vertex $6$ with $1$, and has value $\frac{7}{2}$. Equal values: by weak duality both are optimal, and $z(\LP^{\mathrm{CL}}_{\MCP})=\frac{7}{2}$ (Gurobi agrees).

    4. $\omega(W_5)\le\frac{7}{2}$ and $\omega(W_5)$ is an integer, so $\omega(W_5)\le 3$; the triangle $\{1,2,6\}$ gives $\omega(W_5)=3$. $\chi(W_5)\ge\frac{7}{2}$, so $\chi(W_5)\ge 4$; the coloring $\{1,3\},\{2,4\},\{5\},\{6\}$ gives $\chi(W_5)=4$. The chain reads

        $$
        \omega(W_5)=3\;<\;z(\LP^{\mathrm{CL}}_{\MCP})=\frac{7}{2}\;<\;\chi(W_5)=4 .
        $$

<a id="esercizio-12-5"></a>

!!! esercizio "Exercise 12.5: Feasibility in the two formulations (MCP)"

    We consider the cycle $C_6$ with the vertices $V=\{1,\dots,6\}$ and the edges $\{1,2\},\{2,3\},\{3,4\},\{4,5\},\{5,6\},\{1,6\}$,

    ![Figure 10](../img/ex-clique-formulations/fig10.svg){ .fig loading=lazy  }

    and the five points $\vet{x}=(x_1,\dots,x_6)$:

    $$
    \bar{\vet x}^{a}=(\frac{1}{2},\frac{1}{2},\frac{1}{2},\frac{1}{2},\frac{1}{2},\frac{1}{2}),\quad \bar{\vet x}^{b}=(1,1,0,0,0,0),\quad \bar{\vet x}^{c}=(1,0,1,0,0,0),
    $$

    $$
    \bar{\vet x}^{d}=(\frac{1}{2},\frac{1}{2},\frac{1}{2},0,0,0),\quad \bar{\vet x}^{e}=(\frac{1}{3},\frac{1}{3},\frac{1}{3},\frac{1}{3},\frac{1}{3},\frac{1}{3}).
    $$

    **Questions**

    1. Write the constraints of $\LP_{\MCP}$ and of $\LP^{\mathrm{CL}}_{\MCP}$ for $C_6$.

    2. For each point, decide whether it is feasible for $\LP_{\MCP}$, for $\LP^{\mathrm{CL}}_{\MCP}$ and for $\ILP_{\MCP}$.

    3. What do the values of the feasible points say about the two LP bounds?

    4. Compute the two LP bounds with Gurobi and compare them with $\omega(C_6)$.

??? soluzione "Solution"

    1. $\LP_{\MCP}$ has the $9$ non-edge constraints

        \begin{align*}
        & x_1+x_3\le 1,~~ x_1+x_4\le 1,~~ x_1+x_5\le 1,~~ x_2+x_4\le 1,~~ x_2+x_5\le 1,\\
        & x_2+x_6\le 1,~~ x_3+x_5\le 1,~~ x_3+x_6\le 1,~~ x_4+x_6\le 1,
        \end{align*}

        plus $0\le x_v\le 1$. $\LP^{\mathrm{CL}}_{\MCP}$ has one constraint per maximal stable set of $C_6$:

        \begin{align*}
        & x_1+x_3+x_5\le 1,~~ x_2+x_4+x_6\le 1,~~ x_1+x_4\le 1,~~ x_2+x_5\le 1,~~ x_3+x_6\le 1,
        \end{align*}

        plus $x_v\ge 0$.

    2. - $\bar{\vet x}^{a}$: feasible for $\LP_{\MCP}$; the clique inequality of $\{1,3,5\}$ gives $\frac{3}{2}>1$, so infeasible for $\LP^{\mathrm{CL}}_{\MCP}$ and $\ILP_{\MCP}$.

        - $\bar{\vet x}^{b}$: feasible for all three models: it is the clique $\{1,2\}$.

        - $\bar{\vet x}^{c}$: $x_1+x_3=2>1$ violates a non-edge constraint: infeasible for all three models (every constraint of $\LP_{\MCP}$ is implied by $\LP^{\mathrm{CL}}_{\MCP}$).

        - $\bar{\vet x}^{d}$: feasible for $\LP_{\MCP}$ and $\LP^{\mathrm{CL}}_{\MCP}$, not for $\ILP_{\MCP}$ (fractional).

        - $\bar{\vet x}^{e}$: feasible for $\LP_{\MCP}$ and $\LP^{\mathrm{CL}}_{\MCP}$, not for $\ILP_{\MCP}$ (fractional).

    3. $\bar{\vet x}^{a}$ has value $3$, so $z(\LP_{\MCP})\ge 3$. In $\LP^{\mathrm{CL}}_{\MCP}$ the best feasible point among the five is $\bar{\vet x}^{e}$, of value $2$; $\bar{\vet x}^{d}$ has value $\frac{3}{2}$ and $\bar{\vet x}^{b}$ has value $2$.

    4. Gurobi returns $z(\LP_{\MCP})=3$ and $z(\LP^{\mathrm{CL}}_{\MCP})=2$. The second value is proved by summing the constraints of $\{1,3,5\}$ and $\{2,4,6\}$, which give $\sum_{v=1}^{6}x_v\le 2$. $C_6$ has no triangle, so $\omega(C_6)=2$: the clique formulation closes the gap, the edge formulation leaves $3$ against $2$.
