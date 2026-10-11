---
title: "Exercises · Formulations of capacitated lot sizing"
---

# Exercises · Formulations of capacitated lot sizing

<div class="info-capitolo" markdown>

**Exercises · Chapter 13** · each solution opens with a click · [:material-book-open-variant: Chapter 13](../formulations/lot-sizing-formulations.md)

</div>

<a id="esercizio-13-1"></a>

!!! esercizio "Exercise 13.1: The big-M formulation of lot sizing (1)"

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

    2. Write the big-M formulation $\ILP_{\CLSP}$ with the strong values $M_t$.

    3. Count the variables and the constraints (besides the domains) of the formulation.

    4. Solve the formulation with Gurobi, and give the optimal plan, its inventories, its setups and its cost.

??? soluzione "Solution"

    !!! nota ""

        Big-M values for the link $x_t\le M_t\,y_t$: $M^{\mathrm{dem}}_t=D_{t,m}=\sum_{k=t}^{m}d_k$, $M^{\mathrm{cap}}_t=cap_t$, and the strong value $M_t=\min\{cap_t,D_{t,m}\}$. Costs of the shortest-path formulation:

        $$
        cv_{tk}=vc_t\,D_{t,k}+\sum_{s=t+1}^{k}\sum_{u=t}^{s-1}hc_u\,d_s .
        $$

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

        \begin{align*}
        \min~~ & 40y_1 + 40y_2 + 40y_3 + 40y_4 + 5s_1 + 5s_2 + 5s_3 + 5s_4 \\[0.5ex]
        \text{subject to}~~ & s_0 + x_1 = 1 + s_1 \\[0.5ex]
        & s_1 + x_2 = 4 + s_2 \\[0.5ex]
        & s_2 + x_3 = 1 + s_3 \\[0.5ex]
        & s_3 + x_4 = 3 + s_4 \\[0.5ex]
        & x_1 \le 4\,y_1,~~x_2 \le 4\,y_2,~~x_3 \le 4\,y_3,~~x_4 \le 3\,y_4 \\[0.5ex]
        & x_1 \le 4,~~x_2 \le 4,~~x_3 \le 4,~~x_4 \le 4 \\[0.5ex]
        & s_0 = s_4 = 0 \\[0.5ex]
        & x_t,~ s_t \in \Z_{\ge 0},~~ y_t \in \{0,1\}, ~~ t \in T
        \end{align*}

    3. There are $m=4$ variables $x_t$, $5$ variables $s_0,\dots,s_4$ and $4$ variables $y_t$, so $13$ variables. There are $4$ balance constraints, $4$ big-M constraints, $4$ capacity constraints and the $2$ constraints on the inventories at the ends, so $14$ linear constraints.

    4. Gurobi gives $z(\ILP_{\CLSP})=130$, with the plan $\tilde{\vet x}=(2,4,0,3)$, the inventories $(s_1,\dots,s_4)=(1,1,0,0)$ and the setups $\tilde{\vet y}=(1,1,0,1)$. The cost is $3\cdot 40$ for the setups plus $5\cdot(1+1)=10$ for the holding, that is $130$. By enumeration of the plans, the optimal plan is unique.

<a id="esercizio-13-2"></a>

!!! esercizio "Exercise 13.2: Big-M values and LP bounds for lot sizing (1)"

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

    2. Solve with Gurobi the LP relaxations $\LP_{\CLSP}^{\mathrm{dem}}$, $\LP_{\CLSP}^{\mathrm{cap}}$ and $\LP_{\CLSP}^{\mathrm{strong}}$ of the big-M formulation, and give the values of $y_t$ in their optimal solutions.

    3. Explain the values of $y_t$ using the big-M constraints.

    4. Compute the optimal value with Gurobi, and the gap $\frac{z-\LB}{\LB}$ of every bound.

??? soluzione "Solution"

    !!! nota ""

        Big-M values for the link $x_t\le M_t\,y_t$: $M^{\mathrm{dem}}_t=D_{t,m}=\sum_{k=t}^{m}d_k$, $M^{\mathrm{cap}}_t=cap_t$, and the strong value $M_t=\min\{cap_t,D_{t,m}\}$. Costs of the shortest-path formulation:

        $$
        cv_{tk}=vc_t\,D_{t,k}+\sum_{s=t+1}^{k}\sum_{u=t}^{s-1}hc_u\,d_s .
        $$

    1. Without the setups the best plan produces in every period its demand, $\vet x=(1,4,1,3)$: there is no inventory and the production cost is zero, so the bound is $0$.

    2. Gurobi gives:

        <div class="tabella" markdown="0"><table>
        <tr>
        <th>relaxation</th>
        <th>value</th>
        <th><span class="arithmatex">\(\tilde{\vet y}\)</span></th>
        </tr>
        <tr>
        <td><span class="arithmatex">\(\LP_{\CLSP}^{\mathrm{dem}}\)</span> (<span class="arithmatex">\(M_t=D_{t,m}\)</span>)</td>
        <td><span class="arithmatex">\(\frac{670}{9}\)</span></td>
        <td><span class="arithmatex">\((\frac{1}{9},\frac{1}{2},\frac{1}{4},1)\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(\LP_{\CLSP}^{\mathrm{cap}}\)</span> (<span class="arithmatex">\(M_t=cap_t\)</span>)</td>
        <td><span class="arithmatex">\(90\)</span></td>
        <td><span class="arithmatex">\((\frac{1}{4},1,\frac{1}{4},\frac{3}{4})\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(\LP_{\CLSP}^{\mathrm{strong}}\)</span> (<span class="arithmatex">\(M_t=\min\{cap_t,D_{t,m}\}\)</span>)</td>
        <td><span class="arithmatex">\(100\)</span></td>
        <td><span class="arithmatex">\((\frac{1}{4},1,\frac{1}{4},1)\)</span></td>
        </tr>
        </table></div>

    3. In all three solutions the plan is the lot-for-lot plan $\vet x=(1,4,1,3)$, which has no holding cost. The setup variables take the smallest value allowed by the big-M constraints, $y_t=\frac{x_t}{M_t}$: for instance, in period $1$ we get $\frac{1}{9}$, $\frac{1}{4}$ and $\frac{1}{4}$. The smaller $M_t$, the larger $y_t$ and the higher the bound.

    4. Gurobi gives $z(\ILP_{\CLSP})=130$. The gaps are:

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
        <td><span class="arithmatex">\(\LP_{\CLSP}^{\mathrm{dem}}\)</span></td>
        <td><span class="arithmatex">\(\frac{670}{9}\)</span></td>
        <td><span class="arithmatex">\(74.6\%\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(\LP_{\CLSP}^{\mathrm{cap}}\)</span></td>
        <td><span class="arithmatex">\(90\)</span></td>
        <td><span class="arithmatex">\(44.4\%\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(\LP_{\CLSP}^{\mathrm{strong}}\)</span></td>
        <td><span class="arithmatex">\(100\)</span></td>
        <td><span class="arithmatex">\(30.0\%\)</span></td>
        </tr>
        </table></div>

<a id="esercizio-13-3"></a>

!!! esercizio "Exercise 13.3: Feasible solutions of the lot-sizing formulation (1)"

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

    2. Check the big-M constraints and the capacity constraints, and decide which candidates are feasible for $\ILP_{\CLSP}$ and which for its LP relaxation.

    3. Give the cost of the feasible candidates, and compare them with $z(\LP_{\CLSP}^{\mathrm{strong}})$ computed with Gurobi.

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

    3. Candidate (a) costs $3\cdot 40+5\cdot(1+1)=130$ and (b), the lot-for-lot plan with four setups, costs $4\cdot 40=160$. Candidate (f) costs $40\cdot\left(\frac{1}{4}+1+\frac{1}{4}+1\right)=100$. Gurobi gives $z(\LP_{\CLSP}^{\mathrm{strong}})=100$: candidate (f) is an optimal solution of the relaxation, and (a) is the optimal plan of the instance.

<a id="esercizio-13-4"></a>

!!! esercizio "Exercise 13.4: The shortest-path formulation of lot sizing (1)"

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

    3. Solve its LP relaxation $\LP_{\CLSP}^{\mathrm{SP}}$ with Gurobi, and compare the bound with $z(\LP_{\CLSP}^{\mathrm{strong}})$ of the big-M formulation.

    4. The optimal plan is $\tilde{\vet x}=(2,4,0,3)$. Write it as a combination of paths of the network, and verify its quantities and its cost.

??? soluzione "Solution"

    !!! nota ""

        Big-M values for the link $x_t\le M_t\,y_t$: $M^{\mathrm{dem}}_t=D_{t,m}=\sum_{k=t}^{m}d_k$, $M^{\mathrm{cap}}_t=cap_t$, and the strong value $M_t=\min\{cap_t,D_{t,m}\}$. Costs of the shortest-path formulation:

        $$
        cv_{tk}=vc_t\,D_{t,k}+\sum_{s=t+1}^{k}\sum_{u=t}^{s-1}hc_u\,d_s .
        $$

    1. The production cost is zero, so $cv_{tk}$ is only holding cost:

        <div class="tabella" markdown="0"><table>
        <tr>
        <th></th>
        <th colspan="4"><span class="arithmatex">\(D_{t,k}\)</span></th>
        <th colspan="4"><span class="arithmatex">\(cv_{tk}\)</span></th>
        </tr>
        <tr>
        <td><span class="arithmatex">\(t\backslash k\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(9\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(20\)</span></td>
        <td><span class="arithmatex">\(30\)</span></td>
        <td><span class="arithmatex">\(75\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(8\)</span></td>
        <td></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(35\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td></td>
        <td></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td></td>
        <td></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(15\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(4\)</span></td>
        <td></td>
        <td></td>
        <td></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td></td>
        <td></td>
        <td></td>
        <td><span class="arithmatex">\(0\)</span></td>
        </tr>
        </table></div>

    2. The variable $zv_{tk}$ is the arc from node $t-1$ to node $k$, with cost $cv_{tk}$. The formulation is:

        \begin{align*}
        \min~~ & 40y_1 + 40y_2 + 40y_3 + 40y_4 + 20zv_{12} \\[0.4ex]
        & \qquad + 30zv_{13} + 75zv_{14} + 5zv_{23} + 35zv_{24} + 15zv_{34} \\[0.4ex]
        \text{subject to}~~ & zv_{11} + zv_{12} + zv_{13} + zv_{14} = 1 \\[0.4ex]
        & zv_{11} = zv_{22} + zv_{23} + zv_{24} \\[0.4ex]
        & zv_{12} + zv_{22} = zv_{33} + zv_{34} \\[0.4ex]
        & zv_{13} + zv_{23} + zv_{33} = zv_{44} \\[0.4ex]
        & zv_{11} + zv_{12} + zv_{13} + zv_{14} \le y_1 \\[0.4ex]
        & zv_{22} + zv_{23} + zv_{24} \le y_2 \\[0.4ex]
        & zv_{33} + zv_{34} \le y_3 \\[0.4ex]
        & zv_{44} \le y_4 \\[0.4ex]
        & zv_{11} + 5zv_{12} + 6zv_{13} + 9zv_{14} \le 4 \\[0.4ex]
        & 4zv_{22} + 5zv_{23} + 8zv_{24} \le 4 \\[0.4ex]
        & zv_{33} + 4zv_{34} \le 4 \\[0.4ex]
        & 3zv_{44} \le 4 \\[0.4ex]
        & zv_{tk} \ge 0,~~ y_t \in \{0,1\}
        \end{align*}

    3. Gurobi gives $z(\LP_{\CLSP}^{\mathrm{SP}})=112$, with $zv_{11}=\frac{2}{5}$, $zv_{13}=\frac{3}{5}$, $zv_{24}=\frac{2}{5}$, $zv_{44}=\frac{3}{5}$. The bound is better than $z(\LP_{\CLSP}^{\mathrm{strong}})=100$, and the optimal value is $130$.

    4. With the quantities fixed to $\tilde{\vet x}$, Gurobi gives $zv_{11}=\frac{4}{5}$, $zv_{13}=\frac{1}{5}$, $zv_{23}=\frac{4}{5}$, $zv_{44}=1$, all the others $0$. These arcs decompose into the paths

        - $0\to 1\to 3\to 4$ with weight $\frac{4}{5}$, which is the plan $(1,5,0,3)$;

        - $0\to 3\to 4$ with weight $\frac{1}{5}$, which is the plan $(6,0,0,3)$;

        The combination gives $x_1=\frac{4}{5}\cdot 1+\frac{1}{5}\cdot 6=2$, $x_2=\frac{4}{5}\cdot 5=4$, $x_4=\frac{4}{5}\cdot 3+\frac{1}{5}\cdot 3=3$. The single paths may exceed the capacity: only the combined quantities must respect it. The cost is $3\cdot 40+0\cdot\frac{4}{5}+30\cdot\frac{1}{5}+5\cdot\frac{4}{5}+0\cdot1=130$.

<a id="esercizio-13-5"></a>

!!! esercizio "Exercise 13.5: Comparing the lot-sizing formulations (1)"

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

    !!! nota ""

        Big-M values for the link $x_t\le M_t\,y_t$: $M^{\mathrm{dem}}_t=D_{t,m}=\sum_{k=t}^{m}d_k$, $M^{\mathrm{cap}}_t=cap_t$, and the strong value $M_t=\min\{cap_t,D_{t,m}\}$. Costs of the shortest-path formulation:

        $$
        cv_{tk}=vc_t\,D_{t,k}+\sum_{s=t+1}^{k}\sum_{u=t}^{s-1}hc_u\,d_s .
        $$

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
        <td><span class="arithmatex">\(\LP_{\CLSP}^{\mathrm{dem}}\)</span></td>
        <td><span class="arithmatex">\(84\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(\LP_{\CLSP}^{\mathrm{cap}}\)</span></td>
        <td><span class="arithmatex">\(120\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(\LP_{\CLSP}^{\mathrm{strong}}\)</span></td>
        <td><span class="arithmatex">\(130\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(\LP_{\CLSP}^{\mathrm{SP}}\)</span></td>
        <td><span class="arithmatex">\(160\)</span></td>
        </tr>
        </table></div>

        Each bound improves the previous one.

    3. Both formulations give $z(\ILP_{\CLSP})=170$, with the unique optimal plan $\tilde{\vet x}=(3,0,3,3,3)$. The gaps are:

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
        <td><span class="arithmatex">\(\LP_{\CLSP}^{\mathrm{dem}}\)</span></td>
        <td><span class="arithmatex">\(84\)</span></td>
        <td><span class="arithmatex">\(102.4\%\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(\LP_{\CLSP}^{\mathrm{cap}}\)</span></td>
        <td><span class="arithmatex">\(120\)</span></td>
        <td><span class="arithmatex">\(41.7\%\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(\LP_{\CLSP}^{\mathrm{strong}}\)</span></td>
        <td><span class="arithmatex">\(130\)</span></td>
        <td><span class="arithmatex">\(30.8\%\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(\LP_{\CLSP}^{\mathrm{SP}}\)</span></td>
        <td><span class="arithmatex">\(160\)</span></td>
        <td><span class="arithmatex">\(6.2\%\)</span></td>
        </tr>
        </table></div>

    4. The big-M formulation has $16$ variables ($x_t$, $s_t$ and $y_t$); the shortest-path formulation has $\frac{m(m+1)}{2}+m=20$ variables ($zv_{tk}$ and $y_t$). The number of variables $zv_{tk}$ grows like $m^2$: the stronger bound is paid with a larger model.
