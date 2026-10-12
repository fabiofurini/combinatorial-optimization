---
title: "Exercises · Formulations of lot sizing problems"
---

# Exercises · Formulations of lot sizing problems

<div class="info-capitolo" markdown>

**Exercises · Chapter 15** · each solution opens with a click · [:material-book-open-variant: Chapter 15: Lot sizing problems](../formulations/lot-sizing-formulations/index.md) · [:material-file-pdf-box: Exercises, volume 2 (PDF)](../pdf/exercises-2-formulations.pdf)

</div>

!!! chiave ""

    <strong>Formulations used in these exercises.</strong> The two formulations of the chapter [Formulations of lot sizing problems](https://fabiofurini.github.io/combinatorial-optimization/formulations/lot-sizing-formulations/), on the periods $T=\{1,\dots,m\}$, with $D_{t,k}=\sum_{s=t}^{k}d_s$. The big-M formulation $\mathrm{ILP}_{\mathrm{CLSP}}$:

    \begin{align*}
    && \min ~~ \sum_{t\in T}\left(sc_t\,y_t+vc_t\,x_t+hc_t\,s_t\right) \tag{L0}\\
    && \text{subject to} \quad s_{t-1}+x_t &= d_t+s_t, & \forall t\in T, \tag{L1}\\
    && x_t &\le M_t\,y_t, & \forall t\in T, \tag{L2}\\
    && x_t &\le cap_t, & \forall t\in T, \tag{L3}\\
    && s_0=s_m &= 0, \tag{L4}\\
    && x_t &\in\Z_{\ge 0}, & \forall t\in T, \tag{L5}\\
    && s_t &\in\Z_{\ge 0}, & \forall t\in T, \tag{L6}\\
    && y_t &\in\{0,1\}, & \forall t\in T. \tag{L7}
    \end{align*}

    Big-M values in (L2): $M^{\mathrm{dem}}_t=D_{t,m}$, $M^{\mathrm{cap}}_t=cap_t$, and the strong value $M_t=\min\{cap_t,D_{t,m}\}$. The shortest-path formulation $\mathrm{MIP}^{\mathrm{SP}}_{\mathrm{CLSP}}$, where $zv_{tk}$ is the fraction of the demands of the periods $t,\dots,k$ produced in period $t$:

    \begin{align*}
    && \min ~~ \sum_{t\in T} sc_t\,y_t+\sum_{t\in T}\sum_{k=t}^{m} cv_{tk}\,zv_{tk} \tag{S0}\\
    && \text{subject to} \quad \sum_{k=1}^{m} zv_{1k} &= 1, \tag{S1}\\
    && \sum_{u=1}^{t-1} zv_{u,t-1}-\sum_{k=t}^{m} zv_{tk} &= 0, & \forall t\in T\setminus\{1\}, \tag{S2}\\
    && \sum_{k=t}^{m} zv_{tk} &\le y_t, & \forall t\in T, \tag{S3}\\
    && \sum_{k=t}^{m} D_{t,k}\,zv_{tk} &\le cap_t, & \forall t\in T, \tag{S4}\\
    && zv_{tk} &\ge 0, & \forall t,k\in T,~k\ge t, \tag{S5}\\
    && y_t &\in\{0,1\}, & \forall t\in T, \tag{S6}
    \end{align*}

    with the costs

    \begin{equation*}
    cv_{tk}=vc_t\,D_{t,k}+\sum_{s=t+1}^{k}\sum_{u=t}^{s-1}hc_u\,d_s . \tag{S7}
    \end{equation*}

    The LP relaxations relax the domains into $x_t,s_t\ge 0$ and $0\le y_t\le 1$.

<a id="esercizio-15-1"></a>

!!! esercizio "Exercise 15.1: The big-M formulation of lot sizing (1)"

    We consider a capacitated lot-sizing instance with $m=4$ periods, $s_0=s_4=0$ and the following data:

    <div class="tabella" markdown="0"><table>
    <tr>
    <th>period <span class="arithmatex">\(t\)</span></th>
    <th><span class="arithmatex">\(1\)</span></th>
    <th><span class="arithmatex">\(2\)</span></th>
    <th><span class="arithmatex">\(3\)</span></th>
    <th><span class="arithmatex">\(4\)</span></th>
    </tr>
    <tr>
    <td>demand <span class="arithmatex">\(d_t\)</span></td>
    <td><span class="arithmatex">\(1\)</span></td>
    <td><span class="arithmatex">\(4\)</span></td>
    <td><span class="arithmatex">\(1\)</span></td>
    <td><span class="arithmatex">\(3\)</span></td>
    </tr>
    <tr>
    <td>capacity <span class="arithmatex">\(cap_t\)</span></td>
    <td><span class="arithmatex">\(4\)</span></td>
    <td><span class="arithmatex">\(4\)</span></td>
    <td><span class="arithmatex">\(4\)</span></td>
    <td><span class="arithmatex">\(4\)</span></td>
    </tr>
    <tr>
    <td>setup cost <span class="arithmatex">\(sc_t\)</span></td>
    <td><span class="arithmatex">\(40\)</span></td>
    <td><span class="arithmatex">\(40\)</span></td>
    <td><span class="arithmatex">\(40\)</span></td>
    <td><span class="arithmatex">\(40\)</span></td>
    </tr>
    <tr>
    <td>production cost <span class="arithmatex">\(vc_t\)</span></td>
    <td><span class="arithmatex">\(0\)</span></td>
    <td><span class="arithmatex">\(0\)</span></td>
    <td><span class="arithmatex">\(0\)</span></td>
    <td><span class="arithmatex">\(0\)</span></td>
    </tr>
    <tr>
    <td>holding cost <span class="arithmatex">\(hc_t\)</span></td>
    <td><span class="arithmatex">\(5\)</span></td>
    <td><span class="arithmatex">\(5\)</span></td>
    <td><span class="arithmatex">\(5\)</span></td>
    <td><span class="arithmatex">\(5\)</span></td>
    </tr>
    </table></div>

    **Questions**

    1. Compute the big-M values $M^{\mathrm{dem}}_t$, $M^{\mathrm{cap}}_t$ and the strong value $M_t$ for every period.

    2. Write the big-M formulation $\mathrm{ILP}_{\mathrm{CLSP}}$ with the strong values $M_t$.

    3. Count the variables and the constraints (besides the domains) of the formulation.

    4. Solve the formulation with Gurobi, and give the optimal plan, its inventories, its setups and its cost.

??? soluzione "Solution"

    We use the big-M values and the costs (S7) of the box at the beginning of the chapter.

    1. The demands of the periods $t,\dots,m$ give $D_{t,m}$, and the strong value is the smaller of the two:

        <div class="tabella" markdown="0"><table>
        <tr>
        <th>period <span class="arithmatex">\(t\)</span></th>
        <th><span class="arithmatex">\(1\)</span></th>
        <th><span class="arithmatex">\(2\)</span></th>
        <th><span class="arithmatex">\(3\)</span></th>
        <th><span class="arithmatex">\(4\)</span></th>
        </tr>
        <tr>
        <td><span class="arithmatex">\(M^{\mathrm{dem}}_t=D_{t,4}\)</span></td>
        <td><span class="arithmatex">\(9\)</span></td>
        <td><span class="arithmatex">\(8\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(M^{\mathrm{cap}}_t=cap_t\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(M_t=\min\{cap_t,D_{t,m}\}\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        </tr>
        </table></div>

    2. With the strong values the formulation is:

        $$
        \begin{array}{rlcl}
        {\min} & {40\,y_1+40\,y_2+40\,y_3+40\,y_4+5\,s_1+5\,s_2+5\,s_3} &  &  \\
        & {+5\,s_4} &  &  \\[1ex]
        \text{subject to} & {x_1-s_1} & {=} & {1} \\
        & {s_1+x_2-s_2} & {=} & {4} \\
        & {s_2+x_3-s_3} & {=} & {1} \\
        & {s_3+x_4-s_4} & {=} & {3} \\
        & {x_1-4\,y_1} & {\le} & {0} \\
        & {x_2-4\,y_2} & {\le} & {0} \\
        & {x_3-4\,y_3} & {\le} & {0} \\
        & {x_4-3\,y_4} & {\le} & {0} \\
        & {x_1} & {\le} & {4} \\
        & {x_2} & {\le} & {4} \\
        & {x_3} & {\le} & {4} \\
        & {x_4} & {\le} & {4} \\
        & {s_4} & {=} & {0} \\[1ex]
        & {x_1,~x_2,~x_3,~x_4} & {\in} & {\Z_{\ge 0}} \\
        & {s_1,~s_2,~s_3,~s_4} & {\in} & {\Z_{\ge 0}} \\
        & {y_1,~y_2,~y_3,~y_4} & {\in} & {\{0,1\}}
        \end{array}
        $$

    3. There are $m=4$ variables $x_t$, $5$ variables $s_0,\dots,s_4$ and $4$ variables $y_t$, so $13$ variables. There are $4$ balance constraints, $4$ big-M constraints, $4$ capacity constraints and the $2$ constraints on the inventories at the ends, so $14$ linear constraints.

    4. Gurobi gives $z(\mathrm{ILP}_{\mathrm{CLSP}})=130$, with the plan $\tilde{\vet x}=(2,4,0,3)$, the inventories $(s_1,\dots,s_4)=(1,1,0,0)$ and the setups $\tilde{\vet y}=(1,1,0,1)$. The cost is $3\cdot 40$ for the setups plus $5\cdot(1+1)=10$ for the holding, that is $130$. By enumeration of the plans, the optimal plan is unique.

<a id="esercizio-15-2"></a>

!!! esercizio "Exercise 15.2: Big-M values and LP bounds for lot sizing (1)"

    We consider a capacitated lot-sizing instance with $m=4$ periods, $s_0=s_4=0$ and the following data:

    <div class="tabella" markdown="0"><table>
    <tr>
    <th>period <span class="arithmatex">\(t\)</span></th>
    <th><span class="arithmatex">\(1\)</span></th>
    <th><span class="arithmatex">\(2\)</span></th>
    <th><span class="arithmatex">\(3\)</span></th>
    <th><span class="arithmatex">\(4\)</span></th>
    </tr>
    <tr>
    <td>demand <span class="arithmatex">\(d_t\)</span></td>
    <td><span class="arithmatex">\(1\)</span></td>
    <td><span class="arithmatex">\(4\)</span></td>
    <td><span class="arithmatex">\(1\)</span></td>
    <td><span class="arithmatex">\(3\)</span></td>
    </tr>
    <tr>
    <td>capacity <span class="arithmatex">\(cap_t\)</span></td>
    <td><span class="arithmatex">\(4\)</span></td>
    <td><span class="arithmatex">\(4\)</span></td>
    <td><span class="arithmatex">\(4\)</span></td>
    <td><span class="arithmatex">\(4\)</span></td>
    </tr>
    <tr>
    <td>setup cost <span class="arithmatex">\(sc_t\)</span></td>
    <td><span class="arithmatex">\(40\)</span></td>
    <td><span class="arithmatex">\(40\)</span></td>
    <td><span class="arithmatex">\(40\)</span></td>
    <td><span class="arithmatex">\(40\)</span></td>
    </tr>
    <tr>
    <td>production cost <span class="arithmatex">\(vc_t\)</span></td>
    <td><span class="arithmatex">\(0\)</span></td>
    <td><span class="arithmatex">\(0\)</span></td>
    <td><span class="arithmatex">\(0\)</span></td>
    <td><span class="arithmatex">\(0\)</span></td>
    </tr>
    <tr>
    <td>holding cost <span class="arithmatex">\(hc_t\)</span></td>
    <td><span class="arithmatex">\(5\)</span></td>
    <td><span class="arithmatex">\(5\)</span></td>
    <td><span class="arithmatex">\(5\)</span></td>
    <td><span class="arithmatex">\(5\)</span></td>
    </tr>
    </table></div>

    **Questions**

    1. Compute the cost of the best plan when the setups are ignored.

    2. Solve with Gurobi the LP relaxations $\mathrm{LP}_{\mathrm{CLSP}}^{\mathrm{dem}}$, $\mathrm{LP}_{\mathrm{CLSP}}^{\mathrm{cap}}$ and $\mathrm{LP}_{\mathrm{CLSP}}^{\mathrm{strong}}$ of the big-M formulation, and give the values of $y_t$ in their optimal solutions.

    3. Explain the values of $y_t$ using the big-M constraints.

    4. Compute the optimal value with Gurobi, and the gap $\frac{z-\LB}{\LB}$ of every bound.

??? soluzione "Solution"

    We use the big-M values and the costs (S7) of the box at the beginning of the chapter.

    1. Without the setups the best plan produces in every period its demand, $\vet x=(1,4,1,3)$: there is no inventory and the production cost is zero, so the bound is $0$.

    2. Gurobi gives:

        <div class="tabella" markdown="0"><table>
        <tr>
        <th>relaxation</th>
        <th>value</th>
        <th><span class="arithmatex">\(\tilde{\vet y}\)</span></th>
        </tr>
        <tr>
        <td><span class="arithmatex">\(\mathrm{LP}_{\mathrm{CLSP}}^{\mathrm{dem}}\)</span> (<span class="arithmatex">\(M_t=D_{t,m}\)</span>)</td>
        <td><span class="arithmatex">\(\frac{670}{9}\)</span></td>
        <td><span class="arithmatex">\((\frac{1}{9},\frac{1}{2},\frac{1}{4},1)\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(\mathrm{LP}_{\mathrm{CLSP}}^{\mathrm{cap}}\)</span> (<span class="arithmatex">\(M_t=cap_t\)</span>)</td>
        <td><span class="arithmatex">\(90\)</span></td>
        <td><span class="arithmatex">\((\frac{1}{4},1,\frac{1}{4},\frac{3}{4})\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(\mathrm{LP}_{\mathrm{CLSP}}^{\mathrm{strong}}\)</span> (<span class="arithmatex">\(M_t=\min\{cap_t,D_{t,m}\}\)</span>)</td>
        <td><span class="arithmatex">\(100\)</span></td>
        <td><span class="arithmatex">\((\frac{1}{4},1,\frac{1}{4},1)\)</span></td>
        </tr>
        </table></div>

    3. In all three solutions the plan is the lot-for-lot plan $\vet x=(1,4,1,3)$, which has no holding cost. The setup variables take the smallest value allowed by the big-M constraints, $y_t=\frac{x_t}{M_t}$: for instance, in period $1$ we get $\frac{1}{9}$, $\frac{1}{4}$ and $\frac{1}{4}$. The smaller $M_t$, the larger $y_t$ and the higher the bound.

    4. Gurobi gives $z(\mathrm{ILP}_{\mathrm{CLSP}})=130$. The gaps are:

        <div class="tabella" markdown="0"><table>
        <tr>
        <th>bound</th>
        <th>value</th>
        <th>gap from <span class="arithmatex">\(130\)</span></th>
        </tr>
        <tr>
        <td>without setups</td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(\text{undefined}\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(\mathrm{LP}_{\mathrm{CLSP}}^{\mathrm{dem}}\)</span></td>
        <td><span class="arithmatex">\(\frac{670}{9}\)</span></td>
        <td><span class="arithmatex">\(74.6\%\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(\mathrm{LP}_{\mathrm{CLSP}}^{\mathrm{cap}}\)</span></td>
        <td><span class="arithmatex">\(90\)</span></td>
        <td><span class="arithmatex">\(44.4\%\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(\mathrm{LP}_{\mathrm{CLSP}}^{\mathrm{strong}}\)</span></td>
        <td><span class="arithmatex">\(100\)</span></td>
        <td><span class="arithmatex">\(30.0\%\)</span></td>
        </tr>
        </table></div>

<a id="esercizio-15-3"></a>

!!! esercizio "Exercise 15.3: Feasible solutions of the lot-sizing formulation (1)"

    We consider a capacitated lot-sizing instance with $m=4$ periods, $s_0=s_4=0$ and the following data:

    <div class="tabella" markdown="0"><table>
    <tr>
    <th>period <span class="arithmatex">\(t\)</span></th>
    <th><span class="arithmatex">\(1\)</span></th>
    <th><span class="arithmatex">\(2\)</span></th>
    <th><span class="arithmatex">\(3\)</span></th>
    <th><span class="arithmatex">\(4\)</span></th>
    </tr>
    <tr>
    <td>demand <span class="arithmatex">\(d_t\)</span></td>
    <td><span class="arithmatex">\(1\)</span></td>
    <td><span class="arithmatex">\(4\)</span></td>
    <td><span class="arithmatex">\(1\)</span></td>
    <td><span class="arithmatex">\(3\)</span></td>
    </tr>
    <tr>
    <td>capacity <span class="arithmatex">\(cap_t\)</span></td>
    <td><span class="arithmatex">\(4\)</span></td>
    <td><span class="arithmatex">\(4\)</span></td>
    <td><span class="arithmatex">\(4\)</span></td>
    <td><span class="arithmatex">\(4\)</span></td>
    </tr>
    <tr>
    <td>setup cost <span class="arithmatex">\(sc_t\)</span></td>
    <td><span class="arithmatex">\(40\)</span></td>
    <td><span class="arithmatex">\(40\)</span></td>
    <td><span class="arithmatex">\(40\)</span></td>
    <td><span class="arithmatex">\(40\)</span></td>
    </tr>
    <tr>
    <td>production cost <span class="arithmatex">\(vc_t\)</span></td>
    <td><span class="arithmatex">\(0\)</span></td>
    <td><span class="arithmatex">\(0\)</span></td>
    <td><span class="arithmatex">\(0\)</span></td>
    <td><span class="arithmatex">\(0\)</span></td>
    </tr>
    <tr>
    <td>holding cost <span class="arithmatex">\(hc_t\)</span></td>
    <td><span class="arithmatex">\(5\)</span></td>
    <td><span class="arithmatex">\(5\)</span></td>
    <td><span class="arithmatex">\(5\)</span></td>
    <td><span class="arithmatex">\(5\)</span></td>
    </tr>
    </table></div>

    We use the big-M formulation with the strong values $M_t=\min\{cap_t,D_{t,m}\}=(4,4,4,3)$. Consider the following candidates $(\vet x,\vet y)$, with the inventories given by the balance constraints:

    - **(a)** $\vet x=(2,4,0,3)$, $\vet y=(1,1,0,1)$;

    - **(b)** $\vet x=(1,4,1,3)$, $\vet y=(1,1,1,1)$;

    - **(c)** $\vet x=(5,0,1,3)$, $\vet y=(1,0,1,1)$;

    - **(d)** $\vet x=(2,4,0,3)$, $\vet y=(1,1,0,0)$;

    - **(e)** $\vet x=(2,4,0,2)$, $\vet y=(1,1,0,1)$;

    - **(f)** $\vet x=(1,4,1,3)$, $\vet y=(\frac{1}{4},1,\frac{1}{4},1)$;

    **Questions**

    1. Compute the inventories $s_1,\dots,s_4$ of every candidate and check the balance constraints with $s_0=s_4=0$.

    2. Check the big-M constraints and the capacity constraints, and decide which candidates are feasible for $\mathrm{ILP}_{\mathrm{CLSP}}$ and which for its LP relaxation.

    3. Give the cost of the feasible candidates, and compare them with $z(\mathrm{LP}_{\mathrm{CLSP}}^{\mathrm{strong}})$ computed with Gurobi.

??? soluzione "Solution"

    1. - **(a)** $(s_1,\dots,s_4)=(1,1,0,0)$: all the inventories are non-negative and $s_4=0$.

        - **(b)** $(s_1,\dots,s_4)=(0,0,0,0)$: all the inventories are non-negative and $s_4=0$.

        - **(c)** $(s_1,\dots,s_4)=(4,0,0,0)$: all the inventories are non-negative and $s_4=0$.

        - **(d)** $(s_1,\dots,s_4)=(1,1,0,0)$: all the inventories are non-negative and $s_4=0$.

        - **(e)** $(s_1,\dots,s_4)=(1,1,0,-1)$: $s_4<0$, the demand is not satisfied.

        - **(f)** $(s_1,\dots,s_4)=(0,0,0,0)$: all the inventories are non-negative and $s_4=0$.

    2. - **(a)** All the constraints hold: feasible for both models.

        - **(b)** All the constraints hold: feasible for both models.

        - **(c)** $x_1=5>cap_1=4$: infeasible.

        - **(d)** $x_4=3>M_4\,y_4=3\cdot0$: infeasible.

        - **(e)** Infeasible, because of the balance constraints.

        - **(f)** All the constraints hold: feasible for the LP relaxation only, since $y_1$ and $y_3$ are fractional.

    3. Candidate (a) costs $3\cdot 40+5\cdot(1+1)=130$ and (b), the lot-for-lot plan with four setups, costs $4\cdot 40=160$. Candidate (f) costs $40\cdot\left(\frac{1}{4}+1+\frac{1}{4}+1\right)=100$. Gurobi gives $z(\mathrm{LP}_{\mathrm{CLSP}}^{\mathrm{strong}})=100$: candidate (f) is an optimal solution of the relaxation, and (a) is the optimal plan of the instance.

<a id="esercizio-15-4"></a>

!!! esercizio "Exercise 15.4: The shortest-path formulation of lot sizing (1)"

    We consider a capacitated lot-sizing instance with $m=4$ periods, $s_0=s_4=0$ and the following data:

    <div class="tabella" markdown="0"><table>
    <tr>
    <th>period <span class="arithmatex">\(t\)</span></th>
    <th><span class="arithmatex">\(1\)</span></th>
    <th><span class="arithmatex">\(2\)</span></th>
    <th><span class="arithmatex">\(3\)</span></th>
    <th><span class="arithmatex">\(4\)</span></th>
    </tr>
    <tr>
    <td>demand <span class="arithmatex">\(d_t\)</span></td>
    <td><span class="arithmatex">\(1\)</span></td>
    <td><span class="arithmatex">\(4\)</span></td>
    <td><span class="arithmatex">\(1\)</span></td>
    <td><span class="arithmatex">\(3\)</span></td>
    </tr>
    <tr>
    <td>capacity <span class="arithmatex">\(cap_t\)</span></td>
    <td><span class="arithmatex">\(4\)</span></td>
    <td><span class="arithmatex">\(4\)</span></td>
    <td><span class="arithmatex">\(4\)</span></td>
    <td><span class="arithmatex">\(4\)</span></td>
    </tr>
    <tr>
    <td>setup cost <span class="arithmatex">\(sc_t\)</span></td>
    <td><span class="arithmatex">\(40\)</span></td>
    <td><span class="arithmatex">\(40\)</span></td>
    <td><span class="arithmatex">\(40\)</span></td>
    <td><span class="arithmatex">\(40\)</span></td>
    </tr>
    <tr>
    <td>production cost <span class="arithmatex">\(vc_t\)</span></td>
    <td><span class="arithmatex">\(0\)</span></td>
    <td><span class="arithmatex">\(0\)</span></td>
    <td><span class="arithmatex">\(0\)</span></td>
    <td><span class="arithmatex">\(0\)</span></td>
    </tr>
    <tr>
    <td>holding cost <span class="arithmatex">\(hc_t\)</span></td>
    <td><span class="arithmatex">\(5\)</span></td>
    <td><span class="arithmatex">\(5\)</span></td>
    <td><span class="arithmatex">\(5\)</span></td>
    <td><span class="arithmatex">\(5\)</span></td>
    </tr>
    </table></div>

    **Questions**

    1. Compute the demands $D_{t,k}$ and the costs $cv_{tk}$ of the shortest-path formulation.

    2. Write the shortest-path formulation for this instance.

    3. Solve its LP relaxation $\mathrm{LP}_{\mathrm{CLSP}}^{\mathrm{SP}}$ with Gurobi, and compare the bound with $z(\mathrm{LP}_{\mathrm{CLSP}}^{\mathrm{strong}})$ of the big-M formulation.

    4. The optimal plan is $\tilde{\vet x}=(2,4,0,3)$. Write it as a combination of paths of the network, and verify its quantities and its cost.

??? soluzione "Solution"

    We use the big-M values and the costs (S7) of the box at the beginning of the chapter.

    1. The production cost is zero, so $cv_{tk}$ is only holding cost:

        $$
        \begin{array}{l|cccc|cccc}
        \hline  & {D_{t,k}} & & & & {cv_{tk}} & & & \\
        {t\backslash k} & {1} & {2} & {3} & {4} & {1} & {2} & {3} & {4} \\
        \hline {1} & {1} & {5} & {6} & {9} & {0} & {20} & {30} & {75} \\
        {2} &  & {4} & {5} & {8} &  & {0} & {5} & {35} \\
        {3} &  &  & {1} & {4} &  &  & {0} & {15} \\
        {4} &  &  &  & {3} &  &  &  & {0} \\
        \hline
        \end{array}
        $$

    2. The variable $zv_{tk}$ is the arc from node $t-1$ to node $k$, with cost $cv_{tk}$. The formulation is:

        $$
        \begin{array}{rlcl}
        {\min} & {40\,y_1+40\,y_2+40\,y_3+40\,y_4+20\,zv_{12}+30\,zv_{13}+75\,zv_{14}} &  &  \\
        & {+5\,zv_{23}+35\,zv_{24}+15\,zv_{34}} &  &  \\[1ex]
        \text{subject to} & {zv_{11}+zv_{12}+zv_{13}+zv_{14}} & {=} & {1} \\
        & {zv_{11}-zv_{22}-zv_{23}-zv_{24}} & {=} & {0} \\
        & {zv_{12}+zv_{22}-zv_{33}-zv_{34}} & {=} & {0} \\
        & {zv_{13}+zv_{23}+zv_{33}-zv_{44}} & {=} & {0} \\
        & {zv_{11}+zv_{12}+zv_{13}+zv_{14}-y_1} & {\le} & {0} \\
        & {zv_{22}+zv_{23}+zv_{24}-y_2} & {\le} & {0} \\
        & {zv_{33}+zv_{34}-y_3} & {\le} & {0} \\
        & {zv_{44}-y_4} & {\le} & {0} \\
        & {zv_{11}+5\,zv_{12}+6\,zv_{13}+9\,zv_{14}} & {\le} & {4} \\
        & {4\,zv_{22}+5\,zv_{23}+8\,zv_{24}} & {\le} & {4} \\
        & {zv_{33}+4\,zv_{34}} & {\le} & {4} \\
        & {3\,zv_{44}} & {\le} & {4} \\[1ex]
        & {zv_{11},~zv_{12},~zv_{13},~\dots,~zv_{44}} & {\ge} & {0} \\
        & {y_1,~y_2,~y_3,~y_4} & {\in} & {\{0,1\}}
        \end{array}
        $$

    3. Gurobi gives $z(\mathrm{LP}_{\mathrm{CLSP}}^{\mathrm{SP}})=112$, with $zv_{11}=\frac{2}{5}$, $zv_{13}=\frac{3}{5}$, $zv_{24}=\frac{2}{5}$, $zv_{44}=\frac{3}{5}$. The bound is better than $z(\mathrm{LP}_{\mathrm{CLSP}}^{\mathrm{strong}})=100$, and the optimal value is $130$.

    4. With the quantities fixed to $\tilde{\vet x}$, Gurobi gives $zv_{11}=\frac{4}{5}$, $zv_{13}=\frac{1}{5}$, $zv_{23}=\frac{4}{5}$, $zv_{44}=1$, all the others $0$. These arcs decompose into the paths

        - $0\to 1\to 3\to 4$ with weight $\frac{4}{5}$, which is the plan $(1,5,0,3)$;

        - $0\to 3\to 4$ with weight $\frac{1}{5}$, which is the plan $(6,0,0,3)$;

        The combination gives $x_1=\frac{4}{5}\cdot 1+\frac{1}{5}\cdot 6=2$, $x_2=\frac{4}{5}\cdot 5=4$, $x_4=\frac{4}{5}\cdot 3+\frac{1}{5}\cdot 3=3$. The single paths may exceed the capacity: only the combined quantities must respect it. The cost is $3\cdot 40+0\cdot\frac{4}{5}+30\cdot\frac{1}{5}+5\cdot\frac{4}{5}+0\cdot1=130$.

<a id="esercizio-15-5"></a>

!!! esercizio "Exercise 15.5: Comparing the lot-sizing formulations (1)"

    We consider a capacitated lot-sizing instance with $m=5$ periods, $s_0=s_5=0$ and the following data:

    <div class="tabella" markdown="0"><table>
    <tr>
    <th>period <span class="arithmatex">\(t\)</span></th>
    <th><span class="arithmatex">\(1\)</span></th>
    <th><span class="arithmatex">\(2\)</span></th>
    <th><span class="arithmatex">\(3\)</span></th>
    <th><span class="arithmatex">\(4\)</span></th>
    <th><span class="arithmatex">\(5\)</span></th>
    </tr>
    <tr>
    <td>demand <span class="arithmatex">\(d_t\)</span></td>
    <td><span class="arithmatex">\(2\)</span></td>
    <td><span class="arithmatex">\(1\)</span></td>
    <td><span class="arithmatex">\(3\)</span></td>
    <td><span class="arithmatex">\(3\)</span></td>
    <td><span class="arithmatex">\(3\)</span></td>
    </tr>
    <tr>
    <td>capacity <span class="arithmatex">\(cap_t\)</span></td>
    <td><span class="arithmatex">\(4\)</span></td>
    <td><span class="arithmatex">\(4\)</span></td>
    <td><span class="arithmatex">\(4\)</span></td>
    <td><span class="arithmatex">\(4\)</span></td>
    <td><span class="arithmatex">\(4\)</span></td>
    </tr>
    <tr>
    <td>setup cost <span class="arithmatex">\(sc_t\)</span></td>
    <td><span class="arithmatex">\(40\)</span></td>
    <td><span class="arithmatex">\(40\)</span></td>
    <td><span class="arithmatex">\(40\)</span></td>
    <td><span class="arithmatex">\(40\)</span></td>
    <td><span class="arithmatex">\(40\)</span></td>
    </tr>
    <tr>
    <td>production cost <span class="arithmatex">\(vc_t\)</span></td>
    <td><span class="arithmatex">\(0\)</span></td>
    <td><span class="arithmatex">\(0\)</span></td>
    <td><span class="arithmatex">\(0\)</span></td>
    <td><span class="arithmatex">\(0\)</span></td>
    <td><span class="arithmatex">\(0\)</span></td>
    </tr>
    <tr>
    <td>holding cost <span class="arithmatex">\(hc_t\)</span></td>
    <td><span class="arithmatex">\(10\)</span></td>
    <td><span class="arithmatex">\(10\)</span></td>
    <td><span class="arithmatex">\(10\)</span></td>
    <td><span class="arithmatex">\(10\)</span></td>
    <td><span class="arithmatex">\(10\)</span></td>
    </tr>
    </table></div>

    **Questions**

    1. Compute the three big-M values of every period.

    2. Compute with Gurobi the bound without setups, the three LP bounds of the big-M formulation and the LP bound of the shortest-path formulation.

    3. Compute the optimal value with Gurobi, using both formulations with integer setups, and the gap $\frac{z-\LB}{\LB}$ of every bound.

    4. Compare the number of variables of the two formulations, and comment on the price of the stronger bound.

??? soluzione "Solution"

    We use the big-M values and the costs (S7) of the box at the beginning of the chapter.

    1. &#8203;

        <div class="tabella" markdown="0"><table>
        <tr>
        <th>period <span class="arithmatex">\(t\)</span></th>
        <th><span class="arithmatex">\(1\)</span></th>
        <th><span class="arithmatex">\(2\)</span></th>
        <th><span class="arithmatex">\(3\)</span></th>
        <th><span class="arithmatex">\(4\)</span></th>
        <th><span class="arithmatex">\(5\)</span></th>
        </tr>
        <tr>
        <td><span class="arithmatex">\(M^{\mathrm{dem}}_t=D_{t,5}\)</span></td>
        <td><span class="arithmatex">\(12\)</span></td>
        <td><span class="arithmatex">\(10\)</span></td>
        <td><span class="arithmatex">\(9\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(M^{\mathrm{cap}}_t=cap_t\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(M_t=\min\{cap_t,D_{t,m}\}\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        </tr>
        </table></div>

    2. Gurobi gives:

        <div class="tabella" markdown="0"><table>
        <tr>
        <th>bound</th>
        <th>value</th>
        </tr>
        <tr>
        <td>without setups</td>
        <td><span class="arithmatex">\(0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(\mathrm{LP}_{\mathrm{CLSP}}^{\mathrm{dem}}\)</span></td>
        <td><span class="arithmatex">\(84\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(\mathrm{LP}_{\mathrm{CLSP}}^{\mathrm{cap}}\)</span></td>
        <td><span class="arithmatex">\(120\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(\mathrm{LP}_{\mathrm{CLSP}}^{\mathrm{strong}}\)</span></td>
        <td><span class="arithmatex">\(130\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(\mathrm{LP}_{\mathrm{CLSP}}^{\mathrm{SP}}\)</span></td>
        <td><span class="arithmatex">\(160\)</span></td>
        </tr>
        </table></div>

        Each bound improves the previous one.

    3. Both formulations give $z(\mathrm{ILP}_{\mathrm{CLSP}})=170$, with the unique optimal plan $\tilde{\vet x}=(3,0,3,3,3)$. The gaps are:

        <div class="tabella" markdown="0"><table>
        <tr>
        <th>bound</th>
        <th>value</th>
        <th>gap from <span class="arithmatex">\(170\)</span></th>
        </tr>
        <tr>
        <td>without setups</td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(\text{undefined}\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(\mathrm{LP}_{\mathrm{CLSP}}^{\mathrm{dem}}\)</span></td>
        <td><span class="arithmatex">\(84\)</span></td>
        <td><span class="arithmatex">\(102.4\%\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(\mathrm{LP}_{\mathrm{CLSP}}^{\mathrm{cap}}\)</span></td>
        <td><span class="arithmatex">\(120\)</span></td>
        <td><span class="arithmatex">\(41.7\%\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(\mathrm{LP}_{\mathrm{CLSP}}^{\mathrm{strong}}\)</span></td>
        <td><span class="arithmatex">\(130\)</span></td>
        <td><span class="arithmatex">\(30.8\%\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(\mathrm{LP}_{\mathrm{CLSP}}^{\mathrm{SP}}\)</span></td>
        <td><span class="arithmatex">\(160\)</span></td>
        <td><span class="arithmatex">\(6.2\%\)</span></td>
        </tr>
        </table></div>

    4. The big-M formulation has $16$ variables ($x_t$, $s_t$ and $y_t$); the shortest-path formulation has $\frac{m(m+1)}{2}+m=20$ variables ($zv_{tk}$ and $y_t$). The number of variables $zv_{tk}$ grows like $m^2$: the stronger bound is paid with a larger model.

<a id="esercizio-15-6"></a>

!!! esercizio "Exercise 15.6: ILP model of the uncapacitated lot sizing problem"

    We consider an uncapacitated lot-sizing instance (ULS) with $m=4$ periods, $s_0=s_4=0$ and the following data:

    <div class="tabella" markdown="0"><table>
    <tr>
    <th>period <span class="arithmatex">\(t\)</span></th>
    <th><span class="arithmatex">\(1\)</span></th>
    <th><span class="arithmatex">\(2\)</span></th>
    <th><span class="arithmatex">\(3\)</span></th>
    <th><span class="arithmatex">\(4\)</span></th>
    </tr>
    <tr>
    <td>demand <span class="arithmatex">\(d_t\)</span></td>
    <td><span class="arithmatex">\(1\)</span></td>
    <td><span class="arithmatex">\(4\)</span></td>
    <td><span class="arithmatex">\(1\)</span></td>
    <td><span class="arithmatex">\(3\)</span></td>
    </tr>
    <tr>
    <td>setup cost <span class="arithmatex">\(sc_t\)</span></td>
    <td><span class="arithmatex">\(40\)</span></td>
    <td><span class="arithmatex">\(40\)</span></td>
    <td><span class="arithmatex">\(40\)</span></td>
    <td><span class="arithmatex">\(40\)</span></td>
    </tr>
    <tr>
    <td>production cost <span class="arithmatex">\(vc_t\)</span></td>
    <td><span class="arithmatex">\(0\)</span></td>
    <td><span class="arithmatex">\(0\)</span></td>
    <td><span class="arithmatex">\(0\)</span></td>
    <td><span class="arithmatex">\(0\)</span></td>
    </tr>
    <tr>
    <td>holding cost <span class="arithmatex">\(hc_t\)</span></td>
    <td><span class="arithmatex">\(5\)</span></td>
    <td><span class="arithmatex">\(5\)</span></td>
    <td><span class="arithmatex">\(5\)</span></td>
    <td><span class="arithmatex">\(5\)</span></td>
    </tr>
    </table></div>

    **Questions**

    1. Compute the big-M values $D_{t,m}$ and write the $\mathrm{ILP}_{\mathrm{ULS}}$ model for this instance.

    2. Count the variables and the constraints (besides the domains) of the model.

    3. Solve the model with Gurobi, and give the optimal plan, its inventories and its cost.

    4. Add the capacity $cap_t=4$ in every period: Gurobi gives the optimal value $130$. Explain why it is larger.

??? soluzione "Solution"

    1. The big-M values are $D_{t,4}=(9,8,4,3)$. The $\mathrm{ILP}_{\mathrm{ULS}}$ model is:

        $$
        \begin{array}{rlcl}
        {\min} & {40\,y_1+40\,y_2+40\,y_3+40\,y_4+5\,s_1+5\,s_2} &  &  \\
        & {+5\,s_3+5\,s_4} &  &  \\[1ex]
        \text{subject to} & {x_1-s_1} & {=} & {1} \\
        & {s_1+x_2-s_2} & {=} & {4} \\
        & {s_2+x_3-s_3} & {=} & {1} \\
        & {s_3+x_4-s_4} & {=} & {3} \\
        & {x_1-9\,y_1} & {\le} & {0} \\
        & {x_2-8\,y_2} & {\le} & {0} \\
        & {x_3-4\,y_3} & {\le} & {0} \\
        & {x_4-3\,y_4} & {\le} & {0} \\
        & {s_4} & {=} & {0} \\[1ex]
        & {x_1,~x_2,~x_3,~x_4} & {\in} & {\Z_{\ge 0}} \\
        & {s_1,~s_2,~s_3,~s_4} & {\in} & {\Z_{\ge 0}} \\
        & {y_1,~y_2,~y_3,~y_4} & {\in} & {\{0,1\}}
        \end{array}
        $$

    2. There are $3m=12$ variables $x_t$, $s_t$, $y_t$ ($s_0=0$ is a constant), $4$ balance constraints, $4$ big-M constraints and the constraint $s_4=0$: $9$ linear constraints.

    3. Gurobi gives $z(\mathrm{ILP}_{\mathrm{ULS}})=110$ with the plan $\tilde{\vet x}=(6,0,0,3)$, the inventories $(5,1,0,0)$ and the setups in the periods $1$ and $4$: the cost is $2\cdot 40+5\cdot(5+1)=110$. By enumeration of the plans, the optimal plan is unique.

    4. The plan $(6,0,0,3)$ produces $6>4$ units in period $1$, so it is not feasible with the capacities. The capacitated problem has fewer feasible plans, hence a larger optimal value: the ULS is a relaxation of the CLS.

<a id="esercizio-15-7"></a>

!!! esercizio "Exercise 15.7: ILP model of lot sizing with several products and setup times"

    We consider a lot sizing problem with $|P|=2$ products, $m=3$ periods, the capacity $cap_t=10$ in every period, $vc_{pt}=0$, $s_{p0}=s_{p3}=0$ and the following data:

    <div class="tabella" markdown="0"><table>
    <tr>
    <th></th>
    <th colspan="3">product <span class="arithmatex">\(1\)</span></th>
    <th colspan="3">product <span class="arithmatex">\(2\)</span></th>
    </tr>
    <tr>
    <td>period <span class="arithmatex">\(t\)</span></td>
    <td><span class="arithmatex">\(1\)</span></td>
    <td><span class="arithmatex">\(2\)</span></td>
    <td><span class="arithmatex">\(3\)</span></td>
    <td><span class="arithmatex">\(1\)</span></td>
    <td><span class="arithmatex">\(2\)</span></td>
    <td><span class="arithmatex">\(3\)</span></td>
    </tr>
    <tr>
    <td><span class="arithmatex">\(d_{pt}\)</span></td>
    <td><span class="arithmatex">\(2\)</span></td>
    <td><span class="arithmatex">\(3\)</span></td>
    <td><span class="arithmatex">\(1\)</span></td>
    <td><span class="arithmatex">\(3\)</span></td>
    <td><span class="arithmatex">\(1\)</span></td>
    <td><span class="arithmatex">\(3\)</span></td>
    </tr>
    <tr>
    <td><span class="arithmatex">\(vt_{pt}\)</span></td>
    <td><span class="arithmatex">\(1\)</span></td>
    <td><span class="arithmatex">\(1\)</span></td>
    <td><span class="arithmatex">\(1\)</span></td>
    <td><span class="arithmatex">\(2\)</span></td>
    <td><span class="arithmatex">\(2\)</span></td>
    <td><span class="arithmatex">\(2\)</span></td>
    </tr>
    <tr>
    <td><span class="arithmatex">\(st_{pt}\)</span></td>
    <td><span class="arithmatex">\(1\)</span></td>
    <td><span class="arithmatex">\(1\)</span></td>
    <td><span class="arithmatex">\(1\)</span></td>
    <td><span class="arithmatex">\(1\)</span></td>
    <td><span class="arithmatex">\(1\)</span></td>
    <td><span class="arithmatex">\(1\)</span></td>
    </tr>
    <tr>
    <td><span class="arithmatex">\(sc_{pt}\)</span></td>
    <td><span class="arithmatex">\(20\)</span></td>
    <td><span class="arithmatex">\(20\)</span></td>
    <td><span class="arithmatex">\(20\)</span></td>
    <td><span class="arithmatex">\(30\)</span></td>
    <td><span class="arithmatex">\(30\)</span></td>
    <td><span class="arithmatex">\(30\)</span></td>
    </tr>
    <tr>
    <td><span class="arithmatex">\(hc_{pt}\)</span></td>
    <td><span class="arithmatex">\(4\)</span></td>
    <td><span class="arithmatex">\(4\)</span></td>
    <td><span class="arithmatex">\(4\)</span></td>
    <td><span class="arithmatex">\(3\)</span></td>
    <td><span class="arithmatex">\(3\)</span></td>
    <td><span class="arithmatex">\(3\)</span></td>
    </tr>
    </table></div>

    **Questions**

    1. Compute the strong big-M values $M_{pt}$.

    2. Write the $\mathrm{ILP}_{\mathrm{CLSP}}^{P}$ model with the strong big-M values for this instance.

    3. Solve the model with Gurobi: give the optimal plan of each product, its cost and the time used in each period.

??? soluzione "Solution"

    1. With $M_{pt}=\min\{\lfloor (cap_t-st_{pt})/vt_{pt}\rfloor,~sd_{ptm}\}$: for product $1$, $\lfloor 9/1\rfloor=9$ and $sd_{1t3}=(6,4,1)$, so $M_{1t}=(6,4,1)$; for product $2$, $\lfloor 9/2\rfloor=4$ and $sd_{2t3}=(7,4,3)$, so $M_{2t}=(4,4,3)$.

    2. The $\mathrm{ILP}_{\mathrm{CLSP}}^{P}$ model is:

        $$
        \begin{array}{rlcl}
        {\min} & {20\,y_{11}+20\,y_{12}+20\,y_{13}+30\,y_{21}+30\,y_{22}+30\,y_{23}} &  &  \\
        & {+4\,s_{11}+4\,s_{12}+4\,s_{13}+3\,s_{21}+3\,s_{22}+3\,s_{23}} &  &  \\[1ex]
        \text{subject to} & {x_{11}-s_{11}} & {=} & {2} \\
        & {s_{11}+x_{12}-s_{12}} & {=} & {3} \\
        & {s_{12}+x_{13}-s_{13}} & {=} & {1} \\
        & {x_{21}-s_{21}} & {=} & {3} \\
        & {s_{21}+x_{22}-s_{22}} & {=} & {1} \\
        & {s_{22}+x_{23}-s_{23}} & {=} & {3} \\
        & {x_{11}+2\,x_{21}+y_{11}+y_{21}} & {\le} & {10} \\
        & {x_{12}+2\,x_{22}+y_{12}+y_{22}} & {\le} & {10} \\
        & {x_{13}+2\,x_{23}+y_{13}+y_{23}} & {\le} & {10} \\
        & {x_{11}-6\,y_{11}} & {\le} & {0} \\
        & {x_{12}-4\,y_{12}} & {\le} & {0} \\
        & {x_{13}-y_{13}} & {\le} & {0} \\
        & {x_{21}-4\,y_{21}} & {\le} & {0} \\
        & {x_{22}-4\,y_{22}} & {\le} & {0} \\
        & {x_{23}-3\,y_{23}} & {\le} & {0} \\
        & {s_{13}} & {=} & {0} \\
        & {s_{23}} & {=} & {0} \\[1ex]
        & {x_{11},~x_{12},~x_{13},~x_{21},~x_{22},~x_{23}} & {\in} & {\Z_{\ge 0}} \\
        & {s_{11},~s_{12},~s_{13},~s_{21},~s_{22},~s_{23}} & {\in} & {\Z_{\ge 0}} \\
        & {y_{11},~y_{12},~y_{13},~y_{21},~y_{22},~y_{23}} & {\in} & {\{0,1\}}
        \end{array}
        $$

    3. Gurobi gives $z(\mathrm{ILP}_{\mathrm{CLSP}}^{P})=134$, and the optimal solution is unique. Product $1$ follows the plan $(2,4,0)$ with the inventories $(0,1,0)$, product $2$ the plan $(3,1,3)$ with the inventories $(0,0,0)$. The times used in the periods, setups included, are $(10,8,7)$, all at most $10$: in period $1$ the capacity is saturated, so product $2$ needs a setup in every period.

<a id="esercizio-15-8"></a>

!!! esercizio "Exercise 15.8: ILP model of lot sizing with overtime"

    We consider a lot sizing problem with overtime, one product, $m=5$ periods, $s_0=s_5=0$, production time $vt_t=1$, setup time $st_t=0$, $vc_t=0$ and the data

    <div class="tabella" markdown="0"><table>
    <tr>
    <th>period <span class="arithmatex">\(t\)</span></th>
    <th><span class="arithmatex">\(1\)</span></th>
    <th><span class="arithmatex">\(2\)</span></th>
    <th><span class="arithmatex">\(3\)</span></th>
    <th><span class="arithmatex">\(4\)</span></th>
    <th><span class="arithmatex">\(5\)</span></th>
    </tr>
    <tr>
    <td>demand <span class="arithmatex">\(d_t\)</span></td>
    <td><span class="arithmatex">\(2\)</span></td>
    <td><span class="arithmatex">\(1\)</span></td>
    <td><span class="arithmatex">\(3\)</span></td>
    <td><span class="arithmatex">\(3\)</span></td>
    <td><span class="arithmatex">\(3\)</span></td>
    </tr>
    <tr>
    <td>setup cost <span class="arithmatex">\(sc_t\)</span></td>
    <td><span class="arithmatex">\(40\)</span></td>
    <td><span class="arithmatex">\(40\)</span></td>
    <td><span class="arithmatex">\(40\)</span></td>
    <td><span class="arithmatex">\(40\)</span></td>
    <td><span class="arithmatex">\(40\)</span></td>
    </tr>
    <tr>
    <td>holding cost <span class="arithmatex">\(hc_t\)</span></td>
    <td><span class="arithmatex">\(10\)</span></td>
    <td><span class="arithmatex">\(10\)</span></td>
    <td><span class="arithmatex">\(10\)</span></td>
    <td><span class="arithmatex">\(10\)</span></td>
    <td><span class="arithmatex">\(10\)</span></td>
    </tr>
    </table></div>

    In every period the normal hours are $cap^{N}_t=2$, at the cost $cw_t=1$ per unit, and the overtime is $cap^{O}_t=2$, at the cost $co_t=5$ per unit.

    **Questions**

    1. Show that the instance has no feasible plan without overtime.

    2. Compute the strong big-M values and write the $\mathrm{ILP}_{\mathrm{CLSP}}^{\mathrm{OT}}$ model for this instance.

    3. Solve the model with Gurobi: give the optimal plan, the working times and the cost.

??? soluzione "Solution"

    1. The total demand is $12$, while the normal hours of the $5$ periods give at most $5\cdot 2=10$ units: some overtime is needed.

    2. With $M_t=\min\{cap^{N}_t+cap^{O}_t,~D_{t,5}\}$ and $D_{t,5}=(12,10,9,6,3)$ we get $M_t=(4,4,4,4,3)$. The model is:

        $$
        \begin{array}{rlcl}
        {\min} & {40\,y_1+40\,y_2+40\,y_3+40\,y_4+40\,y_5+10\,s_1} &  &  \\
        & {+10\,s_2+10\,s_3+10\,s_4+10\,s_5+\mu_1+\mu_2} &  &  \\
        & {+\mu_3+\mu_4+\mu_5+5\,\nu_1+5\,\nu_2+5\,\nu_3} &  &  \\
        & {+5\,\nu_4+5\,\nu_5} &  &  \\[1ex]
        \text{subject to} & {x_1-s_1} & {=} & {2} \\
        & {s_1+x_2-s_2} & {=} & {1} \\
        & {s_2+x_3-s_3} & {=} & {3} \\
        & {s_3+x_4-s_4} & {=} & {3} \\
        & {s_4+x_5-s_5} & {=} & {3} \\
        & {x_1-\mu_1-\nu_1} & {\le} & {0} \\
        & {x_2-\mu_2-\nu_2} & {\le} & {0} \\
        & {x_3-\mu_3-\nu_3} & {\le} & {0} \\
        & {x_4-\mu_4-\nu_4} & {\le} & {0} \\
        & {x_5-\mu_5-\nu_5} & {\le} & {0} \\
        & {x_1-4\,y_1} & {\le} & {0} \\
        & {x_2-4\,y_2} & {\le} & {0} \\
        & {x_3-4\,y_3} & {\le} & {0} \\
        & {x_4-4\,y_4} & {\le} & {0} \\
        & {x_5-3\,y_5} & {\le} & {0} \\
        & {\mu_1} & {\le} & {2} \\
        & {\mu_2} & {\le} & {2} \\
        & {\mu_3} & {\le} & {2} \\
        & {\mu_4} & {\le} & {2} \\
        & {\mu_5} & {\le} & {2} \\
        & {\nu_1} & {\le} & {2} \\
        & {\nu_2} & {\le} & {2} \\
        & {\nu_3} & {\le} & {2} \\
        & {\nu_4} & {\le} & {2} \\
        & {\nu_5} & {\le} & {2} \\
        & {s_5} & {=} & {0} \\[1ex]
        & {x_1,~x_2,~x_3,~x_4,~x_5} & {\in} & {\Z_{\ge 0}} \\
        & {s_1,~s_2,~s_3,~s_4,~s_5} & {\in} & {\Z_{\ge 0}} \\
        & {\mu_1,~\mu_2,~\mu_3,~\dots,~\nu_5} & {\in} & {\Z_{\ge 0}} \\
        & {y_1,~y_2,~y_3,~y_4,~y_5} & {\in} & {\{0,1\}}
        \end{array}
        $$

    3. Gurobi gives $z(\mathrm{ILP}_{\mathrm{CLSP}}^{\mathrm{OT}})=198$, and the optimal solution is unique: the plan $\tilde{\vet x}=(3,0,3,3,3)$, the inventories $(1,0,0,0,0)$, the normal hours $(2,0,2,2,2)$ and the overtime $(1,0,1,1,1)$. The cost is $4\cdot 40$ for the setups, $10\cdot 1$ for the holding, $1\cdot 8$ for the normal hours and $5\cdot 4$ for the overtime: $198$.

<a id="esercizio-15-9"></a>

!!! esercizio "Exercise 15.9: ILP model of lot sizing with unsatisfied demand"

    We consider a capacitated lot-sizing instance with $m=4$ periods, $s_0=s_4=0$ and the following data:

    <div class="tabella" markdown="0"><table>
    <tr>
    <th>period <span class="arithmatex">\(t\)</span></th>
    <th><span class="arithmatex">\(1\)</span></th>
    <th><span class="arithmatex">\(2\)</span></th>
    <th><span class="arithmatex">\(3\)</span></th>
    <th><span class="arithmatex">\(4\)</span></th>
    </tr>
    <tr>
    <td>demand <span class="arithmatex">\(d_t\)</span></td>
    <td><span class="arithmatex">\(1\)</span></td>
    <td><span class="arithmatex">\(4\)</span></td>
    <td><span class="arithmatex">\(1\)</span></td>
    <td><span class="arithmatex">\(3\)</span></td>
    </tr>
    <tr>
    <td>capacity <span class="arithmatex">\(cap_t\)</span></td>
    <td><span class="arithmatex">\(4\)</span></td>
    <td><span class="arithmatex">\(4\)</span></td>
    <td><span class="arithmatex">\(4\)</span></td>
    <td><span class="arithmatex">\(4\)</span></td>
    </tr>
    <tr>
    <td>setup cost <span class="arithmatex">\(sc_t\)</span></td>
    <td><span class="arithmatex">\(40\)</span></td>
    <td><span class="arithmatex">\(40\)</span></td>
    <td><span class="arithmatex">\(40\)</span></td>
    <td><span class="arithmatex">\(40\)</span></td>
    </tr>
    <tr>
    <td>production cost <span class="arithmatex">\(vc_t\)</span></td>
    <td><span class="arithmatex">\(0\)</span></td>
    <td><span class="arithmatex">\(0\)</span></td>
    <td><span class="arithmatex">\(0\)</span></td>
    <td><span class="arithmatex">\(0\)</span></td>
    </tr>
    <tr>
    <td>holding cost <span class="arithmatex">\(hc_t\)</span></td>
    <td><span class="arithmatex">\(5\)</span></td>
    <td><span class="arithmatex">\(5\)</span></td>
    <td><span class="arithmatex">\(5\)</span></td>
    <td><span class="arithmatex">\(5\)</span></td>
    </tr>
    </table></div>

    A unit of demand may be left unsatisfied, at the penalty $cu_t=18$ per unit.

    **Questions**

    1. Write the $\mathrm{ILP}_{\mathrm{CLSP}}^{\mathrm{UD}}$ model with the strong big-M values for this instance.

    2. Solve the model with Gurobi: give the optimal plan, the unsatisfied demand and the cost.

    3. Without unsatisfied demand the optimal value is $130$ (Gurobi). Explain the saving.

??? soluzione "Solution"

    1. The strong big-M values are $M_t=\min\{cap_t,D_{t,4}\}=(4,4,4,3)$. The model is:

        $$
        \begin{array}{rlcl}
        {\min} & {40\,y_1+40\,y_2+40\,y_3+40\,y_4+5\,s_1+5\,s_2} &  &  \\
        & {+5\,s_3+5\,s_4+18\,\varepsilon_1+18\,\varepsilon_2+18\,\varepsilon_3+18\,\varepsilon_4} &  &  \\[1ex]
        \text{subject to} & {x_1-s_1+\varepsilon_1} & {=} & {1} \\
        & {s_1+x_2-s_2+\varepsilon_2} & {=} & {4} \\
        & {s_2+x_3-s_3+\varepsilon_3} & {=} & {1} \\
        & {s_3+x_4-s_4+\varepsilon_4} & {=} & {3} \\
        & {x_1} & {\le} & {4} \\
        & {x_2} & {\le} & {4} \\
        & {x_3} & {\le} & {4} \\
        & {x_4} & {\le} & {4} \\
        & {x_1-4\,y_1} & {\le} & {0} \\
        & {x_2-4\,y_2} & {\le} & {0} \\
        & {x_3-4\,y_3} & {\le} & {0} \\
        & {x_4-3\,y_4} & {\le} & {0} \\
        & {\varepsilon_1} & {\le} & {1} \\
        & {\varepsilon_2} & {\le} & {4} \\
        & {\varepsilon_3} & {\le} & {1} \\
        & {\varepsilon_4} & {\le} & {3} \\
        & {s_4} & {=} & {0} \\[1ex]
        & {x_1,~x_2,~x_3,~x_4} & {\in} & {\Z_{\ge 0}} \\
        & {s_1,~s_2,~s_3,~s_4} & {\in} & {\Z_{\ge 0}} \\
        & {\varepsilon_1,~\varepsilon_2,~\varepsilon_3,~\varepsilon_4} & {\in} & {\Z_{\ge 0}} \\
        & {y_1,~y_2,~y_3,~y_4} & {\in} & {\{0,1\}}
        \end{array}
        $$

    2. Gurobi gives $z(\mathrm{ILP}_{\mathrm{CLSP}}^{\mathrm{UD}})=113$, and the optimal solution is unique: the plan $\tilde{\vet x}=(0,4,4,0)$, the inventories $(0,0,3,0)$ and the unsatisfied demand $\tilde{\vet\varepsilon}=(1,0,0,0)$. The cost is $2\cdot 40+5\cdot 3+18\cdot 1=113$.

    3. Leaving unsatisfied the demand $d_1=1$ removes the setup of period $1$: the penalty $18$ is smaller than what the first period costs in the optimal plan of the CLS, and the value drops from $130$ to $113$.
