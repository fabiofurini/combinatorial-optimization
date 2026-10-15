---
title: "Weighted variants"
---

# 12.8 ILP models for the weighted variants { #sez-sec-mcpf-weighted }

<div class="info-capitolo" markdown>

**Part 2 · Formulations and their properties · Chapter 12** · [:material-book-open-variant: Chapter 12: Clique problems](index.md) · [:material-file-pdf-box: Lecture notes, volume 2 (PDF)](../../pdf/lecture-notes-2-formulations.pdf) · [:material-presentation: Slides](../../pdf/slides-clique-formulations.pdf) · [:material-pencil: Exercises: Clique problems](../../exercises/clique-formulations.md)

</div>

The problems of this section are the vertex-weighted (VWMCP) and the edge-weighted (EWMCP) maximum clique problems, defined in [Chapter 5 «Clique problems», Section 5.5](https://fabiofurini.github.io/combinatorial-optimization/combinatorial-optimization-problems/clique/weighted-variants/), with their reference instances.

## 12.8.1 The vertex-weighted maximum clique problem

- Given a simple graph $G=(V,E)$ and a vertex-weight vector $\vet w\in\Z_{\ge 1}^n$, we use the $n$ <strong>binary variables</strong> $\eqref{mcpF:var}$ of the edge formulation:

    $$
    x_v=\begin{cases}1&\text{if vertex $v$ is selected in the clique}\\[1.5ex]0&\text{otherwise}\end{cases}
    \qquad\forall v\in V.
    $$

!!! chiave ""

    Using these variables, an Integer Linear Programming (ILP) model for the vertex-weighted maximum clique problem (VWMCP) reads as follows:

    <a id="eq-mcpF-VW"></a>

    \begin{align*}
    && \max \;\; \sum_{v\in V}w_v\,x_v \label{mcpF:obj-vw} \tag{12.16a}\\[1ex]
    && \text{subject to} \quad x_u+x_v &\le 1, & \forall\{u,v\}\in\overline{E}, \label{mcpF:nonedge-vw} \tag{12.16b}\\[1ex]
    && x_v &\in\{0,1\}, & \forall v\in V. \label{mcpF:bin-vw} \tag{12.16c}
    \end{align*}

    This ILP model is referred to as the $\mathrm{ILP}^{\mathrm{VW}}_{\mathrm{MCP}}$ model.

- Description of the objective function and constraints of the $\mathrm{ILP}^{\mathrm{VW}}_{\mathrm{MCP}}$ model:

    - the linear objective function $\eqref{mcpF:obj-vw}$ maximizes the total weight $w(K)$ of the selected clique;

    - constraints $\eqref{mcpF:nonedge-vw}$ ensure that no two non-adjacent vertices are both selected ($|\overline{E}|=\binom{n}{2}-m$ linear constraints);

    - finally, constraints $\eqref{mcpF:bin-vw}$ define the variables of the ILP model.

- Only the objective function changes: the feasible solutions are the cliques of $G$, as in the $\mathrm{ILP}_{\mathrm{MCP}}$ model, and with $w_v=1$ for every vertex the two models coincide. The clique inequalities of $\overline{G}$ are valid here too.

<a id="box-16-mcpF-ex-vw"></a>

!!! esempio "Example 12.13: $\mathrm{ILP}^{\mathrm{VW}}_{\mathrm{MCP}}$ model"

    We consider the graph $G$ with $8$ vertices on a circle, where every vertex is adjacent to all the others except the opposite one: $G$ has $24$ edges, and $\overline{G}$ has the $4$ edges $\{1,5\},\{2,6\},\{3,7\},\{4,8\}$. The vertex weights are:

    $$
    \begin{array}{l|cccccccc}
    \hline  & {v=1} & {v=2} & {v=3} & {v=4} & {v=5} & {v=6} & {v=7} & {v=8} \\
    \hline {w_v} & {5} & {8} & {9} & {5} & {6} & {5} & {5} & {9} \\
    \hline
    \end{array}
    $$

    This is the instance of the VWMCP of Chapter 5 [«Clique problems»](../../combinatorial-optimization-problems/clique/index.md). The $\mathrm{ILP}^{\mathrm{VW}}_{\mathrm{MCP}}$ model has $8$ binary variables and one constraint for each of the $4$ edges of $\overline{G}$:

    $$
    \begin{array}{rrrrrrrrrcl}
    {\max} & {5\,x_1} & {+\,8\,x_2} & {+\,9\,x_3} & {+\,5\,x_4} & {+\,6\,x_5} & {+\,5\,x_6} & {+\,5\,x_7} & {+\,9\,x_8} \\[1ex]
    \text{subject to} & {x_1} &  &  &  & {+\,x_5} &  &  &  & {\le} & {1} \\
    &  & {x_2} &  &  &  & {+\,x_6} &  &  & {\le} & {1} \\
    &  &  & {x_3} &  &  &  & {+\,x_7} &  & {\le} & {1} \\
    &  &  &  & {x_4} &  &  &  & {+\,x_8} & {\le} & {1} \\[1ex]
    & {x_1}, & {x_2}, & {x_3}, & {x_4}, & {x_5}, & {x_6}, & {x_7}, & {x_8} & {\in} & {\{0,1\}}
    \end{array}
    $$

    An optimal solution $\tilde{\vet x}(\mathrm{ILP}^{\mathrm{VW}}_{\mathrm{MCP}})$ is:

    $$
    \tilde x_2=\tilde x_3=\tilde x_5=\tilde x_8=1,~~\tilde x_1=\tilde x_4=\tilde x_6=\tilde x_7=0
    $$

    The optimal value $z(\mathrm{ILP}^{\mathrm{VW}}_{\mathrm{MCP}})$ is $8+9+6+9=32$, as stated in Chapter 5 [«Clique problems»](../../combinatorial-optimization-problems/clique/index.md). The associated optimal solution is the clique $\tilde K=\{2,3,5,8\}$, and it is the unique optimal solution: each constraint keeps the heavier vertex of its pair.

## 12.8.2 The edge-weighted maximum clique problem

- Given a simple graph $G=(V,E)$ and an edge-weight vector $\vet r\in\Z_{\ge 1}^m$, the weight of an edge is collected only if both its endpoints are selected: the product $x_u\,x_v$ is not linear. We introduce the $n$ <strong>binary variables</strong> $\eqref{mcpF:var}$ and the following $m$ <strong>binary variables</strong>:

    \begin{equation*}
    \label{mcpF:var-ew}
    y_{uv}=\begin{cases}1&\text{if both endpoints of edge $\{u,v\}$ are selected in the clique}\\[1.5ex]0&\text{otherwise}\end{cases}
    \qquad\forall\{u,v\}\in E. \tag{12.17}
    \end{equation*}

!!! chiave ""

    Using these variables, an Integer Linear Programming (ILP) model for the edge-weighted maximum clique problem (EWMCP) reads as follows:

    <a id="eq-mcpF-EW"></a>

    \begin{align*}
    && \max \;\; \sum_{\{u,v\}\in E}r_{uv}\,y_{uv} \label{mcpF:obj-ew} \tag{12.18a}\\[1ex]
    && \text{subject to} \quad y_{uv} &\le x_u, & \forall\{u,v\}\in E, \label{mcpF:yu-ew} \tag{12.18b}\\[1ex]
    && y_{uv} &\le x_v, & \forall\{u,v\}\in E, \label{mcpF:yv-ew} \tag{12.18c}\\[1ex]
    && x_u+x_v &\le 1, & \forall\{u,v\}\in\overline{E}, \label{mcpF:nonedge-ew} \tag{12.18d}\\[1ex]
    && x_v &\in\{0,1\}, & \forall v\in V, \label{mcpF:binx-ew} \tag{12.18e}\\[1ex]
    && y_{uv} &\in\{0,1\}, & \forall\{u,v\}\in E. \label{mcpF:biny-ew} \tag{12.18f}
    \end{align*}

    This ILP model is referred to as the $\mathrm{ILP}^{\mathrm{EW}}_{\mathrm{MCP}}$ model.

- Description of the objective function and constraints of the $\mathrm{ILP}^{\mathrm{EW}}_{\mathrm{MCP}}$ model:

    - the linear objective function $\eqref{mcpF:obj-ew}$ maximizes the total weight $r(K)$ of the edges with both endpoints in the selected clique;

    - constraints $\eqref{mcpF:yu-ew}$ and $\eqref{mcpF:yv-ew}$ allow $y_{uv}=1$ only if both endpoints are selected ($2m$ linear constraints);

    - constraints $\eqref{mcpF:nonedge-ew}$ ensure that the selected vertices form a clique ($\binom{n}{2}-m$ linear constraints);

    - finally, constraints $\eqref{mcpF:binx-ew}$ and $\eqref{mcpF:biny-ew}$ define the variables of the ILP model.

- Constraints $\eqref{mcpF:yu-ew}$ and $\eqref{mcpF:yv-ew}$ model the implication $y_{uv}=1 \Rightarrow x_u=x_v=1$. The converse implication $x_u=x_v=1 \Rightarrow y_{uv}=1$, that is $y_{uv}\ge x_u+x_v-1$, is not needed: since $r_{uv}>0$, in every optimal solution $y_{uv}$ takes the largest value allowed, $\min\{x_u,x_v\}$.

<a id="box-17-mcpF-ex-ew"></a>

!!! esempio "Example 12.14: $\mathrm{ILP}^{\mathrm{EW}}_{\mathrm{MCP}}$ model"

    We consider the graph $G$ of <span style="color:#1971c2">[Example 12.13](#box-16-mcpF-ex-vw)</span>, with the edge weights of the instance of the EWMCP of Chapter 5 [«Clique problems»](../../combinatorial-optimization-problems/clique/index.md); they are the coefficients of the objective function below. The $\mathrm{ILP}^{\mathrm{EW}}_{\mathrm{MCP}}$ model has $8+24=32$ binary variables, $48$ constraints $y_{uv}\le x_u$, $y_{uv}\le x_v$ and $4$ non-edge constraints:

    $$
    \begin{array}{rllll}
    {\max} & {y_{12}+4\,y_{13}+5\,y_{14}+4\,y_{16}+3\,y_{17}+3\,y_{18}} & & & \\
    & {+2\,y_{23}+5\,y_{24}+6\,y_{25}+9\,y_{27}+4\,y_{28}+3\,y_{34}} & & & \\
    & {+6\,y_{35}+y_{36}+6\,y_{38}+4\,y_{45}+7\,y_{46}+2\,y_{47}} & & & \\
    & {+5\,y_{56}+7\,y_{57}+3\,y_{58}+y_{67}+2\,y_{68}+8\,y_{78}} & & & \\[1ex]
    \text{subject to} & {y_{12}\le x_1} & {y_{12}\le x_2} & {y_{13}\le x_1} & {y_{13}\le x_3} \\
    & {y_{14}\le x_1} & {y_{14}\le x_4} & {y_{16}\le x_1} & {y_{16}\le x_6} \\
    & {y_{17}\le x_1} & {y_{17}\le x_7} & {y_{18}\le x_1} & {y_{18}\le x_8} \\
    & {y_{23}\le x_2} & {y_{23}\le x_3} & {y_{24}\le x_2} & {y_{24}\le x_4} \\
    & {y_{25}\le x_2} & {y_{25}\le x_5} & {y_{27}\le x_2} & {y_{27}\le x_7} \\
    & {y_{28}\le x_2} & {y_{28}\le x_8} & {y_{34}\le x_3} & {y_{34}\le x_4} \\
    & {y_{35}\le x_3} & {y_{35}\le x_5} & {y_{36}\le x_3} & {y_{36}\le x_6} \\
    & {y_{38}\le x_3} & {y_{38}\le x_8} & {y_{45}\le x_4} & {y_{45}\le x_5} \\
    & {y_{46}\le x_4} & {y_{46}\le x_6} & {y_{47}\le x_4} & {y_{47}\le x_7} \\
    & {y_{56}\le x_5} & {y_{56}\le x_6} & {y_{57}\le x_5} & {y_{57}\le x_7} \\
    & {y_{58}\le x_5} & {y_{58}\le x_8} & {y_{67}\le x_6} & {y_{67}\le x_7} \\
    & {y_{68}\le x_6} & {y_{68}\le x_8} & {y_{78}\le x_7} & {y_{78}\le x_8} \\[1ex]
    & {x_1+x_5\le 1} & {x_2+x_6\le 1} & {x_3+x_7\le 1} & {x_4+x_8\le 1} \\[1ex]
    & {x_1,~x_2,~\dots,~x_8\in\{0,1\}} & & & \\
    & {y_{12},~y_{13},~\dots,~y_{78}\in\{0,1\}} & & &
    \end{array}
    $$

    An optimal solution $(\tilde{\vet x},\tilde{\vet y})(\mathrm{ILP}^{\mathrm{EW}}_{\mathrm{MCP}})$ is:

    \begin{align*}
    &\tilde x_2=\tilde x_5=\tilde x_7=\tilde x_8=1,~~\tilde x_1=\tilde x_3=\tilde x_4=\tilde x_6=0,\\
    &\tilde y_{25}=\tilde y_{27}=\tilde y_{28}=\tilde y_{57}=\tilde y_{58}=\tilde y_{78}=1,~~\text{all the other }\tilde y_{uv}=0
    \end{align*}

    The optimal value $z(\mathrm{ILP}^{\mathrm{EW}}_{\mathrm{MCP}})$ is $6+9+4+7+3+8=37$, as stated in Chapter 5 [«Clique problems»](../../combinatorial-optimization-problems/clique/index.md). The associated optimal solution is the clique $\tilde K=\{2,5,7,8\}$, and it is the unique optimal solution.

## 12.9 Typical mistakes

!!! attenzione "Warning"

    - <strong>Writing the constraints on the edges of $G$.</strong> The edge formulation of the MCP has one constraint for each <em>non-edge</em> of $G$; on the edges of $G$ the same constraints describe the stable sets of $G$.

    - <strong>Trusting the LP bound of the edge formulation.</strong> The point $x_v=\frac{1}{2}$ is always feasible, so $z(\mathrm{LP}_{\mathrm{MCP}})\ge n/2$ even when $\omega(G)=2$.

    - <strong>Forgetting the bounds $x_v\le 1$ in the edge formulation.</strong> A vertex adjacent to all the others appears in no constraint, and $\mathrm{LP}\text{-}0_{\mathrm{MCP}}$ becomes unbounded. In the clique formulation the bounds are implied.

    - <strong>Believing that clique inequalities close every gap.</strong> On $C_5$ they coincide with the non-edge constraints, and the odd cycle inequality is needed.

    - <strong>Using non-maximal cliques of $\overline{G}$.</strong> Their inequalities are valid but dominated: the maximal cliques give the strongest constraints of this family.

    - <strong>Mixing up the graphs of the MCP and of the MSSP.</strong> The $\mathrm{ILP}_{\mathrm{MSSP}}$ model has one constraint per edge of $G$, the $\mathrm{ILP}_{\mathrm{MCP}}$ model one per edge of $\overline{G}$.

    - <strong>Writing $y_{uv}=x_u\,x_v$ in the edge-weighted model.</strong> The product is not linear: the constraints $y_{uv}\le x_u$ and $y_{uv}\le x_v$ replace it, and the positive weights make $y_{uv}=1$ whenever both endpoints are selected.

## 12.10 In summary

!!! chiave "In summary"

    - The edge formulation $\mathrm{ILP}_{\mathrm{MCP}}$ has one binary variable per vertex and one constraint $x_u+x_v\le 1$ per edge of $\overline{G}$: it is the edge formulation of the MSSP on $\overline{G}$.

    - Its LP relaxation is weak: $x_v=\frac{1}{2}$ is feasible and $z(\mathrm{LP}_{\mathrm{MCP}})\ge n/2$.

    - The clique inequalities $\sum_{v\in Q}x_v\le 1$, for the maximal cliques $Q$ of $\overline{G}$, give a stronger formulation with $\omega(G)\le z(\mathrm{LP}^{\mathrm{CL}}_{\mathrm{MCP}})\le z(\mathrm{LP}_{\mathrm{MCP}})$.

    - The dual of $\mathrm{LP}^{\mathrm{CL}}_{\mathrm{MCP}}$ is the LP relaxation of a coloring formulation, hence $\omega(G)\le z(\mathrm{LP}^{\mathrm{CL}}_{\mathrm{MCP}})\le\chi(G)$.

    - The $\mathrm{ILP}_{\mathrm{MSSP}}$ model has one constraint $x_u+x_v\le 1$ per edge of $G$; with the maximal cliques of $G$ it becomes the clique formulation. On <span style="color:#1971c2">[Example 12.1](an-ilp-model-for-the-maximum-clique-problem-the-edge-formula.md#box-1-mcpF-ex1)</span> the optimal value is $\alpha(G)=3$.

    - The vertex-weighted model changes only the objective function; the edge-weighted model adds a variable $y_{uv}$ per edge, with $y_{uv}\le x_u$ and $y_{uv}\le x_v$. On the instances of Chapter 5 [«Clique problems»](../../combinatorial-optimization-problems/clique/index.md) their optimal values are $32$ and $37$.

    <strong>Dashboard</strong> (maximization). Bounds on $\omega(G)$ computed in this chapter:

    <div class="tabella" markdown="0"><table>
    <tr>
    <th>instance</th>
    <th><span class="arithmatex">\(z(\mathrm{LP}_{\mathrm{MCP}})\)</span></th>
    <th><span class="arithmatex">\(z(\mathrm{LP}^{\mathrm{CL}}_{\mathrm{MCP}})\)</span></th>
    <th><span class="arithmatex">\(\omega(G)\)</span></th>
    </tr>
    <tr>
    <td><span style="color:#1971c2"><a href="../an-ilp-model-for-the-maximum-clique-problem-the-edge-formula/#box-1-mcpF-ex1">Example 12.1</a></span> (cycle with a chord)</td>
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

**Exercises on this chapter:** [:material-pencil: Clique problems](../../exercises/clique-formulations.md)

