---
title: "Formulations of the maximum clique problem"
---

# Formulations of the maximum clique problem

<div class="info-capitolo" markdown>

**Part 2 · Formulations and their properties · Chapter 12** · [:material-file-pdf-box: Lecture notes, volume 2 (PDF)](../pdf/lecture-notes-2-formulations.pdf) · [:material-pencil: Exercises: Maximum clique](../exercises/clique-formulations.md)

</div>

!!! nota "Prerequisites"

    - From this module, the chapter [«The maximum clique problem»](https://fabiofurini.github.io/combinatorial-optimization/combinatorial-optimization-problems/clique/): cliques, stable sets, the complement graph and $\omega(G)=\alpha(\overline{G})$.

    - From this module, the chapters [«Vertex coloring»](https://fabiofurini.github.io/combinatorial-optimization/combinatorial-optimization-problems/coloring/) and [«Formulations of the vertex coloring problem»](https://fabiofurini.github.io/combinatorial-optimization/formulations/coloring-formulations/): the chromatic number $\chi(G)$ and an ILP model with its LP relaxations.

    - From the module <em>Integer linear programming</em>, [Chapter 2 «Primal and dual bounds»](https://fabiofurini.github.io/integer-linear-programming/models-and-bounds/lp-relaxation/), [Chapter 3 «Ideal formulations»](https://fabiofurini.github.io/integer-linear-programming/formulations/ideal-formulations/) and [Chapter 4 «Valid inequalities»](https://fabiofurini.github.io/integer-linear-programming/formulations/valid-inequalities/): LP relaxations, stronger formulations and valid inequalities.

    - From the module <em>Linear Programming</em>, [Chapter 9 «Duality theory»](https://fabiofurini.github.io/linear-programming/duality/09-duality/): the dual of an LP problem and weak duality.

!!! chiave "Objectives"

    At the end of this chapter you will be able to:

    - write the edge formulation of the Maximum Clique Problem on the non-edges of $G$, that is, on the edges of $\overline{G}$;

    - explain why its LP relaxation is weak: the point $x_v=\tfrac{1}{2}$ is always feasible;

    - write the clique formulation and compare the two LP bounds on a small graph;

    - prove $\omega(G)\le z(\LP^{\mathrm{CL}}_{\MCP})\le\chi(G)$ through LP duality and a coloring formulation.

## 12.1 The problem in brief

!!! nota "Where we were"

    In the chapter «The maximum clique problem» we met the MCP as a <em>problem</em>: definitions, the complement graph, counting and simple bounds. Here we look at it as a <em>model</em>: we write two ILP formulations and compare their LP relaxations.

<a id="box-1-mcpF-def-MCP"></a>

!!! definizione "Definition 12.1: Maximum Clique Problem"

    Given a simple graph $G = (V,E)$, with $V=\{1,2,\dots,n\}$ and $m$ edges, the <strong>Maximum Clique Problem</strong> (MCP) asks to find a <strong>clique</strong> $K\subseteq V$ (a subset of pairwise adjacent vertices) whose cardinality is maximum. Its optimal value is the <strong>clique number</strong> $\omega(G)$.

- The <strong>complement graph</strong> $\overline{G}=(V,\overline{E})$ has as edges the <strong>non-edges</strong> of $G$:

    $$
    \overline{E} = \big\{\, \{u,v\} : u,v \in V,~ u \neq v,~ \{u,v\} \notin E \,\big\}.
    $$

- A <strong>stable set</strong> is a subset of pairwise non-adjacent vertices. A clique of $G$ is a stable set of $\overline{G}$, so the MCP on $G$ is the Maximum Stable Set Problem (MSSP) on $\overline{G}$, and $\omega(G)=\alpha(\overline{G})$.

- We consider nontrivial graphs, with at least one edge and at least one non-edge: otherwise $\omega(G)$ is $1$ or $n$.

<a id="box-2-mcpF-ex1"></a>

!!! esempio "Example 12.1: MCP instance"

    We consider the graph $G$ with $7$ vertices made of the cycle $1,2,\dots,7,1$ and the chord $\{1,3\}$ (the reference instance of the chapter «The maximum clique problem»), and its complement $\overline{G}$:

    ![Figure 1](../img/clique-formulations/fig01.svg){ .fig loading=lazy  }

    $G$ has $m=8$ edges, and $\overline{G}$ has the $\binom{7}{2}-8=13$ non-edges of $G$:

    \begin{align*}
    \overline{E}=\big\{ & \{1,4\},\{1,5\},\{1,6\},\{2,4\},\{2,5\},\{2,6\},\{2,7\},\\
    & \{3,5\},\{3,6\},\{3,7\},\{4,6\},\{4,7\},\{5,7\}\big\}.
    \end{align*}

    The unique maximum clique is $\{1,2,3\}$ and $\omega(G)=3$. We refer to this MCP instance as <span style="color:#1971c2">[Example 12.1](#box-2-mcpF-ex1)</span>.

## 12.2 The edge formulation

- We introduce $n$ <strong>binary variables</strong>:

    $$
    x_v=\begin{cases}1&\text{if vertex $v$ is selected in the clique},\\0&\text{otherwise},\end{cases}
    \qquad\forall v\in V.
    $$

!!! chiave ""

    Using these variables, an Integer Linear Programming (ILP) model for the Maximum Clique Problem reads as follows:

    <a id="eq-mcpF-ILP"></a>

    \begin{align*}
    \max\quad & \sum_{v\in V}x_v \label{mcpF:obj} \tag{12.1a}\\[1ex]
    \text{subject to}\quad & x_u+x_v\le 1, && \forall\{u,v\}\in\overline{E}, \label{mcpF:nonedge} \tag{12.1b}\\[1ex]
    & x_v\in\{0,1\}, && \forall v\in V. \label{mcpF:bin} \tag{12.1c}
    \end{align*}

    This ILP model is referred to as the $\ILP_{\MCP}$ model, or <strong>edge formulation</strong>: it has one constraint for each edge of $\overline{G}$.

- Description of the objective function and constraints of the $\ILP_{\MCP}$ model:

    - the linear objective function $\eqref{mcpF:obj}$ maximizes the cardinality of the selected clique;

    - constraints $\eqref{mcpF:nonedge}$ ensure that no two non-adjacent vertices are both selected ($|\overline{E}|=\binom{n}{2}-m$ linear constraints);

    - constraints $\eqref{mcpF:bin}$ define the domains of the variables of the ILP model.

- For every non-edge $\{u,v\}$, the constraint $x_u+x_v\le1$ imposes $x_u=1\Rightarrow x_v=0$. The converse is false: $x_u=x_v=0$ is feasible.

- Read on $\overline{G}$, the same model is the <strong>edge formulation of the MSSP</strong>: at most one endpoint of every edge of $\overline{G}$ is selected.

<a id="box-3-mcpF-ex-ilp"></a>

!!! esempio "Example 12.2: $\ILP_{\MCP}$ model"

    The $\ILP_{\MCP}$ model of <span style="color:#1971c2">[Example 12.1](#box-2-mcpF-ex1)</span> has $7$ binary variables and one constraint for each of the $13$ edges of $\overline{G}$:

    \begin{align*}
    \max\quad & x_1+x_2+x_3+x_4+x_5+x_6+x_7\\
    \text{subject to}\quad & x_1+x_4\le 1,~~ x_1+x_5\le 1,~~ x_1+x_6\le 1,~~ x_2+x_4\le 1,~~ x_2+x_5\le 1,\\
    & x_2+x_6\le 1,~~ x_2+x_7\le 1,~~ x_3+x_5\le 1,~~ x_3+x_6\le 1,~~ x_3+x_7\le 1,\\
    & x_4+x_6\le 1,~~ x_4+x_7\le 1,~~ x_5+x_7\le 1,\\
    & x_1,\dots,x_7\in\{0,1\}.
    \end{align*}

    The optimal solution is $\tilde x_1=\tilde x_2=\tilde x_3=1$ and $\tilde x_4=\dots=\tilde x_7=0$, and $z(\ILP_{\MCP})=3=\omega(G)$.

## 12.3 The Linear Programming relaxations

!!! chiave ""

    Replacing constraints $\eqref{mcpF:bin}$ with $x_v\ge 0$ for every $v\in V$ gives the $\LP\text{-}0_{\MCP}$ model. Adding also the valid bounds

    \begin{equation*}
    \label{mcpF:ub}
    x_v\le 1, \qquad \forall v\in V, \tag{12.2}
    \end{equation*}

    gives the $\LP_{\MCP}$ model.

- The upper bounds $x_v\le1$ are not implied in $\LP\text{-}0_{\MCP}$: if a vertex is adjacent to all the others, it belongs to no non-edge constraint, and $\LP\text{-}0_{\MCP}$ is unbounded.

- Using a non-negative dual variable $\pi_{uv}$ for each constraint $\eqref{mcpF:nonedge}$ and a non-negative dual variable $\lambda_v$ for each constraint $\eqref{mcpF:ub}$, the dual of $\LP_{\MCP}$ reads:

    \begin{align*}
    \min\quad & \sum_{\{u,v\}\in\overline{E}}\pi_{uv}+\sum_{v\in V}\lambda_v\\
    \text{subject to}\quad & \sum_{u:\,\{u,v\}\in\overline{E}}\pi_{uv}+\lambda_v\ge 1, && \forall v\in V,\\
    & \pi_{uv}\ge 0,~ \forall\{u,v\}\in\overline{E}, \qquad \lambda_v\ge 0,~ \forall v\in V.
    \end{align*}

    Without the variables $\lambda_v$ it is the dual of $\LP\text{-}0_{\MCP}$: a fractional cover of the vertices with the edges of $\overline{G}$.

<a id="box-4-mcpF-prop-gap"></a>

!!! teorema "Proposition 12.2: The LP bound can be arbitrarily weak"

    For every graph $G$ with $n$ vertices, $z(\LP_{\MCP})\ge n/2$. Consequently, the ratio $z(\LP_{\MCP})/z(\ILP_{\MCP})$ is not bounded over all graphs.

??? dimostrazione "Proof"

    Set $x_v=\frac{1}{2}$ for every vertex. Each non-edge constraint becomes $\frac{1}{2}+\frac{1}{2}=1$, and all the bounds hold, so this is a feasible solution of $\LP_{\MCP}$ of value $n/2$. Graphs without triangles and with an edge have $\omega(G)=2$ for every $n$, and for them the ratio is at least $n/4$. <span class="qed">□</span>

<a id="box-5-mcpF-ex-lp"></a>

!!! esempio "Example 12.3: $\LP_{\MCP}$ model"

    For <span style="color:#1971c2">[Example 12.1](#box-2-mcpF-ex1)</span>, the point $\bar x_v=\frac{1}{2}$ for $v=1,\dots,7$ is feasible, with value $\frac{7}{2}$. It is optimal: the edges of the cycle $1,4,7,2,5,3,6,1$ of $\overline{G}$ with $\tilde\pi_{uv}=\frac{1}{2}$, and all the other dual variables equal to $0$, give every vertex a total of $\frac{1}{2}+\frac{1}{2}=1$. This dual solution has value $7\cdot\frac{1}{2}=\frac{7}{2}$, hence

    $$
    z(\LP_{\MCP})=\frac{7}{2} \qquad\text{and}\qquad \omega(G)=3 \le \Big\lfloor\frac{7}{2}\Big\rfloor = 3.
    $$

    On the cycle with $5$ vertices $C_5$, where $\omega(C_5)=2$, the same point gives $z(\LP_{\MCP})=\frac{5}{2}$.

- The data are integer and the optimal value of the ILP is integer, so $\lfloor z(\LP_{\MCP})\rfloor$ is also a dual bound. On <span style="color:#1971c2">[Example 12.1](#box-2-mcpF-ex1)</span> it gives $3$ by luck; on a graph without triangles it gives $\lfloor n/2\rfloor$, against $\omega(G)=2$.

## 12.4 Clique inequalities: a stronger formulation

<a id="box-6-mcpF-prop-clique"></a>

!!! teorema "Proposition 12.3: clique inequalities"

    Let $Q\subseteq V$ be a clique of $\overline{G}$, that is, a stable set of $G$. Then

    \begin{equation*}
    \label{mcpF:cliqueineq}
    \sum_{v\in Q}x_v\le 1 \tag{12.3}
    \end{equation*}

    is a <strong>valid inequality</strong> for $\ILP_{\MCP}$.

??? dimostrazione "Proof"

    A clique of $G$ and a stable set $Q$ of $G$ share at most one vertex: two common vertices would be both adjacent and non-adjacent. So every feasible solution of $\ILP_{\MCP}$ selects at most one vertex of $Q$. <span class="qed">□</span>

- Inequalities $\eqref{mcpF:cliqueineq}$ are called <strong>clique inequalities</strong>, after the clique $Q$ of $\overline{G}$; read on $G$, they are <strong>stable set inequalities</strong>. The non-edge constraints are the case $|Q|=2$.

- If $Q\subseteq Q'$, the inequality of $Q'$ implies the one of $Q$, since all the variables are non-negative. It is enough to write the inequalities of the <strong>maximal</strong> cliques of $\overline{G}$, whose family we denote by $\mathcal{Q}$.

!!! chiave ""

    The <strong>clique formulation</strong> of the Maximum Clique Problem reads as follows:

    <a id="eq-mcpF-ILPCL"></a>

    \begin{align*}
    \max\quad & \sum_{v\in V}x_v  \tag{12.4a}\\[1ex]
    \text{subject to}\quad & \sum_{v\in Q}x_v\le 1, && \forall Q\in\mathcal{Q}, \label{mcpF:cl} \tag{12.4b}\\[1ex]
    & x_v\in\{0,1\}, && \forall v\in V. \tag{12.4c}
    \end{align*}

    It is referred to as the $\ILP^{\mathrm{CL}}_{\MCP}$ model, and its LP relaxation, with $x_v\ge 0$, as the $\LP^{\mathrm{CL}}_{\MCP}$ model.

- Every vertex lies in some maximal clique of $\overline{G}$, so constraints $\eqref{mcpF:cl}$ imply $x_v\le 1$: the bounds $\eqref{mcpF:ub}$ are not needed.

- Every edge of $\overline{G}$ lies in a maximal clique, so each non-edge constraint is implied by a constraint $\eqref{mcpF:cl}$. Hence the feasible region of $\LP^{\mathrm{CL}}_{\MCP}$ is contained in that of $\LP_{\MCP}$, and

    $$
    \omega(G) \;\le\; z(\LP^{\mathrm{CL}}_{\MCP}) \;\le\; z(\LP_{\MCP}).
    $$

- The family $\mathcal{Q}$ can be very large: Moon and Moser (1965) showed graphs with $3^{n/3}$ maximal cliques. In practice the inequalities are added only when they are violated, as in the chapter «Valid inequalities» of the module <em>Integer linear programming</em>.

<a id="box-7-mcpF-ex-cl"></a>

!!! esempio "Example 12.4: $\ILP^{\mathrm{CL}}_{\MCP}$ model"

    The maximal cliques of $\overline{G}$ in <span style="color:#1971c2">[Example 12.1](#box-2-mcpF-ex1)</span> are the $5$ triangles and the $2$ edges

    $$
    \mathcal{Q}=\big\{\{1,4,6\},\{2,4,6\},\{2,4,7\},\{2,5,7\},\{3,5,7\},\{1,5\},\{3,6\}\big\},
    $$

    and they give $7$ constraints instead of $13$:

    \begin{align*}
    \max\quad & x_1+x_2+x_3+x_4+x_5+x_6+x_7\\
    \text{subject to}\quad & x_1+x_4+x_6\le 1,~~ x_2+x_4+x_6\le 1,~~ x_2+x_4+x_7\le 1,~~ x_2+x_5+x_7\le 1,\\
    & x_3+x_5+x_7\le 1,~~ x_1+x_5\le 1,~~ x_3+x_6\le 1,\\
    & x_1,\dots,x_7\in\{0,1\}.
    \end{align*}

    The point $\bar x_v=\frac{1}{2}$ is no longer feasible: $\bar x_1+\bar x_4+\bar x_6=\frac{3}{2}>1$. Summing the three constraints of $\{1,4,6\}$, $\{2,5,7\}$ and $\{3,5,7\}$ gives

    $$
    \sum_{v=1}^{7}x_v + x_5 + x_7 \le 3
    \quad\Longrightarrow\quad
    \sum_{v=1}^{7}x_v\le 3,
    $$

    and the clique $\{1,2,3\}$ attains the bound: $z(\LP^{\mathrm{CL}}_{\MCP})=3=\omega(G)$. The LP bound drops from $\frac{7}{2}$ to $3$ and closes the gap.

- Clique inequalities do not always close the gap. On $C_5$ the complement is again a cycle with $5$ vertices, whose maximal cliques are its edges: the two formulations coincide and $z(\LP^{\mathrm{CL}}_{\MCP})= \frac{5}{2}>2=\omega(C_5)$.

- If $C$ is a cycle of $\overline{G}$ with an odd number of vertices and no chord, then $\sum_{v\in C}x_v\le(|C|-1)/2$ is a valid inequality (an <strong>odd cycle inequality</strong>): a stable set of $\overline{G}$ takes at most $(|C|-1)/2$ vertices of $C$. For $C_5$ it reads $x_1+\dots+x_5\le 2$ and closes the gap.

## 12.5 The relation with vertex coloring

- In a coloring of $G$ the vertices of a clique take pairwise different colors, hence (chapter «Vertex coloring»)

    $$
    \omega(G)\le\chi(G).
    $$

    Here we place the LP bound of the clique formulation between the two numbers.

- The maximal cliques of $\overline{G}$ are the <strong>maximal stable sets</strong> of $G$, and a color class is a stable set. With a binary variable $y_Q$ for each $Q\in\mathcal{Q}$ ($y_Q=1$ if the stable set $Q$ is a color class), a coloring formulation of the VCP is

    \begin{equation*}
    \label{mcpF:col}
    \min\Big\{\, \sum_{Q\in\mathcal{Q}}y_Q \;:\; \sum_{Q\in\mathcal{Q}:\,v\in Q}y_Q\ge 1,~\forall v\in V,\quad
    y_Q\in\{0,1\},~\forall Q\in\mathcal{Q} \,\Big\}. \tag{12.5}
    \end{equation*}

- Its optimal value is $\chi(G)$: a vertex covered by two chosen sets is kept in one of them, and every subset of a stable set is stable, so the chosen sets give a coloring with the same number of colors.

<a id="box-8-mcpF-prop-dual"></a>

!!! teorema "Proposition 12.4: clique bound from LP duality"

    The dual of $\LP^{\mathrm{CL}}_{\MCP}$ is the LP relaxation of the coloring formulation $\eqref{mcpF:col}$. Hence

    $$
    \omega(G)\;\le\; z(\LP^{\mathrm{CL}}_{\MCP}) \;\le\; \chi(G).
    $$

??? dimostrazione "Proof"

    $\LP^{\mathrm{CL}}_{\MCP}$ has one constraint for each $Q\in\mathcal{Q}$ and one variable for each vertex. With a non-negative dual variable $y_Q$ for constraint $\eqref{mcpF:cl}$, the dual reads

    $$
    \min\Big\{\,\sum_{Q\in\mathcal{Q}}y_Q \;:\; \sum_{Q\in\mathcal{Q}:\,v\in Q}y_Q\ge 1,~\forall v\in V,\quad
    y_Q\ge 0,~\forall Q\in\mathcal{Q}\,\Big\},
    $$

    which is the LP relaxation of $\eqref{mcpF:col}$. By strong duality the two optimal values are equal. The first inequality holds because $\LP^{\mathrm{CL}}_{\MCP}$ is a relaxation of the MCP. The second one holds because the LP relaxation of $\eqref{mcpF:col}$ is a relaxation of a minimization problem with optimal value $\chi(G)$. <span class="qed">□</span>

- The common value $z(\LP^{\mathrm{CL}}_{\MCP})$ is called the <strong>fractional chromatic number</strong> of $G$. The clique formulation of the MCP and the stable set formulation of the VCP are two faces of the same LP.

<a id="box-9-mcpF-ex-chain"></a>

!!! esempio "Example 12.5: the chain $\omega\le z(\LP^{\mathrm{CL}}_{\MCP})\le\chi$"

    - On <span style="color:#1971c2">[Example 12.1](#box-2-mcpF-ex1)</span>, the dual solution $\tilde y_Q=1$ for $Q=\{1,4,6\}$, $\{2,5,7\}$, $\{3,5,7\}$ (the multipliers used above) is a feasible coloring with $3$ colors: the classes $\{1,4,6\}$, $\{2,5,7\}$ and $\{3\}$. The chain reads $3\le 3\le 3$.

    - On $C_5$, with vertices $1,\dots,5$, the maximal stable sets are the $5$ non-edges. Setting $y_Q=\frac{1}{2}$ on each of them gives every vertex a total of $1$, so the dual has value $\frac{5}{2}$, as the primal. The chain reads

        $$
        \omega(C_5)=2 \;<\; z(\LP^{\mathrm{CL}}_{\MCP})=\frac{5}{2} \;<\; \chi(C_5)=3 .
        $$

## 12.6 Typical mistakes

!!! attenzione "Warning"

    - <strong>Writing the constraints on the edges of $G$.</strong> The edge formulation of the MCP has one constraint for each <em>non-edge</em> of $G$; on the edges of $G$ the same constraints describe the stable sets of $G$.

    - <strong>Trusting the LP bound of the edge formulation.</strong> The point $x_v=\frac{1}{2}$ is always feasible, so $z(\LP_{\MCP})\ge n/2$ even when $\omega(G)=2$.

    - <strong>Forgetting the bounds $x_v\le 1$ in the edge formulation.</strong> A vertex adjacent to all the others appears in no constraint, and $\LP\text{-}0_{\MCP}$ becomes unbounded. In the clique formulation the bounds are implied.

    - <strong>Believing that clique inequalities close every gap.</strong> On $C_5$ they coincide with the non-edge constraints, and the odd cycle inequality is needed.

    - <strong>Using non-maximal cliques of $\overline{G}$.</strong> Their inequalities are valid but dominated: the maximal cliques give the strongest constraints of this family.

## 12.7 In summary

!!! chiave "In summary"

    - The edge formulation $\ILP_{\MCP}$ has one binary variable per vertex and one constraint $x_u+x_v\le 1$ per edge of $\overline{G}$: it is the edge formulation of the MSSP on $\overline{G}$.

    - Its LP relaxation is weak: $x_v=\frac{1}{2}$ is feasible and $z(\LP_{\MCP})\ge n/2$.

    - The clique inequalities $\sum_{v\in Q}x_v\le 1$, for the maximal cliques $Q$ of $\overline{G}$, give a stronger formulation with $\omega(G)\le z(\LP^{\mathrm{CL}}_{\MCP})\le z(\LP_{\MCP})$.

    - The dual of $\LP^{\mathrm{CL}}_{\MCP}$ is the LP relaxation of a coloring formulation, hence $\omega(G)\le z(\LP^{\mathrm{CL}}_{\MCP})\le\chi(G)$.

    <strong>Dashboard</strong> (maximization). Bounds on $\omega(G)$ computed in this chapter:

    <div class="tabella" markdown="0"><table>
    <tr>
    <th>instance</th>
    <th><span class="arithmatex">\(z(\LP_{\MCP})\)</span></th>
    <th><span class="arithmatex">\(z(\LP^{\mathrm{CL}}_{\MCP})\)</span></th>
    <th><span class="arithmatex">\(\omega(G)\)</span></th>
    </tr>
    <tr>
    <td><span style="color:#1971c2">[Example 12.1](#box-2-mcpF-ex1)</span> (cycle with a chord)</td>
    <td><span class="arithmatex">\(\frac{7}{2}\)</span></td>
    <td><span class="arithmatex">\(3\)</span></td>
    <td><span class="arithmatex">\(3\)</span></td>
    </tr>
    <tr>
    <td><span class="arithmatex">\(C_5\)</span></td>
    <td><span class="arithmatex">\(\frac{5}{2}\)</span></td>
    <td><span class="arithmatex">\(\frac{5}{2}\)</span></td>
    <td><span class="arithmatex">\(2\)</span> (odd cycle inequality)</td>
    </tr>
    </table></div>

---

**Exercises on this chapter:** [:material-pencil: Maximum clique](../exercises/clique-formulations.md)
