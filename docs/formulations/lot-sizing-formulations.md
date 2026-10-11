---
title: "Formulations of capacitated lot sizing"
---

# Formulations of capacitated lot sizing

<div class="info-capitolo" markdown>

**Part 2 · Formulations and their properties · Chapter 13** · [:material-file-pdf-box: Lecture notes, volume 2 (PDF)](../pdf/lecture-notes-2-formulations.pdf)

</div>

!!! nota "Prerequisites"

    - From the module <em>Integer linear programming</em>, the chapters «Integer linear programming» and «LP relaxation and dual bounds»: ILP problems, LP relaxations and lower bounds.

    - From this module, the chapter «Capacitated lot sizing»: the problem, the plans and the reference instance.

    - From this module, the chapter «Dynamic programming for lot sizing»: the demand $D_{j,t}$ of a range of periods and the plans that produce only when the stock is empty.

!!! chiave "Objectives"

    At the end of this chapter you will be able to:

    - write the big-M formulation of the capacitated lot-sizing problem and compute a weak and a strong big-M value;

    - write the shortest-path formulation and interpret its variables as the arcs of a network;

    - represent a production plan as a combination of paths of the network;

    - compare the LP bounds of the formulations on the reference instance;

    - extend the formulations to several products, with setup times and initial inventory.

## 13.1 The problem in brief

!!! nota "Where we were"

    In the chapter «Capacitated lot sizing» we met the lot-sizing problem as a <em>problem</em>: plans, setups, counting and a first bound, on a reference instance of five periods. Here we look at it as a <em>model</em>: the natural formulation is weak, and we study how to make it stronger. The case without capacity returns with the DP algorithm of Wagner and Whitin.

- In the <strong>capacitated lot-sizing problem</strong> (CLS) a set $T=\{1,2,\dots,m\}$ of $m$ periods is given. In every period $t \in T$ we know the demand $d_t \in \Z_{\ge 1}$, the capacity $cap_t \in \Z_{\ge 1}$, the setup cost $sc_t$, the variable production cost $vc_t$ per unit and the holding cost $hc_t$ per unit in stock at the end of the period, all in $\Z_{\ge 0}$.

- We decide the integer quantity $x_t \in \Z_{\ge 0}$ produced in every period $t$, with $x_t \le cap_t$, so that the demands are satisfied, the stock $s_t$ at the end of period $t$ is non-negative, and $s_0=s_m=0$. A <strong>setup</strong> is paid in the periods with $x_t>0$.

- For $j \le t$ we write $D_{j,t}=\sum_{k=j}^{t} d_k$ for the total demand of the periods $j,j+1,\dots,t$.

<a id="box-1-ex-CLS-ref"></a>

!!! esempio "Example 13.1: the reference instance"

    We consider $m=5$ periods, with the following data:

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
    <td><span class="arithmatex">\(4\)</span></td>
    <td><span class="arithmatex">\(1\)</span></td>
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
    <td><span class="arithmatex">\(50\)</span></td>
    <td><span class="arithmatex">\(50\)</span></td>
    <td><span class="arithmatex">\(50\)</span></td>
    <td><span class="arithmatex">\(50\)</span></td>
    <td><span class="arithmatex">\(50\)</span></td>
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

    This is the reference instance of the chapter «Capacitated lot sizing», with optimal plan $\vet{x}=(3,0,4,4,0)$ of cost $180$.

## 13.2 A formulation with a big-M link

- We introduce the following <strong>integer variables</strong> and <strong>binary variables</strong>, for every period $t \in T$:

    $$
    x_t \in \Z_{\ge 0}~\text{(production)},\qquad s_t \in \Z_{\ge 0}~\text{(inventory at the end of the period)},
    $$

    $$
    y_t=\begin{cases}
    1 & \text{if there is a setup in period $t$},\\
    0 & \text{otherwise}.
    \end{cases}
    $$

- The setup variables are linked to the quantities by the logical implication

    $$
    x_t>0 ~~~\Longrightarrow~~~ y_t=1,
    $$

    modeled by the <strong>big-M constraint</strong> $x_t \le M_t\, y_t$, where $M_t$ is an upper bound on the production of period $t$.

- If the setups are ignored, the best plan produces in every period exactly its demand: it has no inventory and, in the reference instance, cost $0$. This is a very weak lower bound: the setup costs must be modeled.

!!! chiave ""

    The <strong>big-M formulation</strong> of the CLS reads as follows:

    <a id="eq-CLS-bigM"></a>

    \begin{align*}
    &&\min ~~ \sum_{t \in T} \left(sc_{t}\,y_{t} + vc_{t}\,x_{t} + hc_{t}\,s_{t} \right) && \label{obj:CLS-1} \tag{13.1a}\\[1ex]
    && s_{t-1} + x_{t} & = d_{t} + s_{t}, & \forall t\in T, \label{CL1:bal} \tag{13.1b}\\[1ex]
    && x_{t} & \le M_{t}\, y_{t}, & \forall t\in T, \label{CL1:M} \tag{13.1c}\\[1ex]
    && x_{t} & \le cap_{t}, & \forall t\in T, \label{CL1:cap} \tag{13.1d}\\[1ex]
    && s_0 = s_m &= 0, && \label{CL1:end} \tag{13.1e}\\[1ex]
    && x_{t},~ s_{t} &\in \Z_{\ge 0}, & \forall t\in T, \label{CL1:int} \tag{13.1f}\\[1ex]
    && y_{t} & \in \{0, 1\}, & \forall t\in T. \label{CL1:bin} \tag{13.1g}
    \end{align*}

    This model is referred to as the $\ILP_{\CLSP}$ model.

- Description of the objective function and constraints of the $\ILP_{\CLSP}$ model:

    - the objective function $\eqref{obj:CLS-1}$ minimizes the cost of the setups, of the production and of the holding;

    - constraints $\eqref{CL1:bal}$ are the <strong>flow balancing constraints</strong>: the demand of period $t$ is satisfied by the production of the period and by the inventory of the previous period, and the surplus becomes the inventory at the end of period $t$;

    - constraints $\eqref{CL1:M}$ link the quantities with the setups, and constraints $\eqref{CL1:cap}$ are the capacity constraints;

    - constraints $\eqref{CL1:end}$ impose an empty inventory at the beginning and at the end of the horizon.

### 13.2.1 Weak and strong big-M values

- <strong>A weak value.</strong> Since $s_m=0$ and the inventories are non-negative, the production of period $t$ cannot exceed the demand of the periods $t,\dots,m$: $M^{\mathrm{dem}}_{t}=D_{t,m}$ is a valid value.

- <strong>A second value.</strong> By the capacity constraints $\eqref{CL1:cap}$, $M^{\mathrm{cap}}_{t}=cap_t$ is also valid.

- <strong>A strong value.</strong> The best value is the smallest of the two:

    $$
    M_t=\min\left\{cap_t,~D_{t,m}\right\}.
    $$

!!! chiave ""

    <strong>The smaller the big-M value, the stronger the LP relaxation</strong>: the constraint $x_t \le M_t y_t$ cuts off the fractional values of $y_t$ below $x_t/M_t$. A value that is too small, however, cuts off feasible plans.

<a id="box-2-ex-CLS-bigM"></a>

!!! esempio "Example 13.2: big-M values and LP bounds"

    For the reference instance we obtain the following values:

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
    <td><span class="arithmatex">\(M^{\mathrm{dem}}_t = D_{t,5}\)</span></td>
    <td><span class="arithmatex">\(11\)</span></td>
    <td><span class="arithmatex">\(9\)</span></td>
    <td><span class="arithmatex">\(8\)</span></td>
    <td><span class="arithmatex">\(5\)</span></td>
    <td><span class="arithmatex">\(1\)</span></td>
    </tr>
    <tr>
    <td><span class="arithmatex">\(M^{\mathrm{cap}}_t = cap_t\)</span></td>
    <td><span class="arithmatex">\(4\)</span></td>
    <td><span class="arithmatex">\(4\)</span></td>
    <td><span class="arithmatex">\(4\)</span></td>
    <td><span class="arithmatex">\(4\)</span></td>
    <td><span class="arithmatex">\(4\)</span></td>
    </tr>
    <tr>
    <td><span class="arithmatex">\(M_t\)</span></td>
    <td><span class="arithmatex">\(4\)</span></td>
    <td><span class="arithmatex">\(4\)</span></td>
    <td><span class="arithmatex">\(4\)</span></td>
    <td><span class="arithmatex">\(4\)</span></td>
    <td><span class="arithmatex">\(1\)</span></td>
    </tr>
    </table></div>

    The three choices give the following optimal values of the LP relaxation, called $\LP_{\CLSP}^{\mathrm{dem}}$, $\LP_{\CLSP}^{\mathrm{cap}}$ and $\LP_{\CLSP}^{\mathrm{strong}}$:

    \begin{align*}
    z(\LP_{\CLSP}^{\mathrm{dem}})&=\frac{9865}{99}\approx 99.65,\\
    z(\LP_{\CLSP}^{\mathrm{cap}})&=\frac{275}{2}=137.5,\\
    z(\LP_{\CLSP}^{\mathrm{strong}})&=\frac{315}{2}=157.5.
    \end{align*}

    The integer optimal solution is the same for all the choices: $\tilde{\vet x}=(3,0,4,4,0)$ with $\tilde{\vet y}=(1,0,1,1,0)$, and $z(\ILP_{\CLSP})=180$.

## 13.3 A shortest-path formulation

- The second formulation does not decide the quantities directly. For every $t,k \in T$, with $k \ge t$, we introduce the following <strong>continuous variable</strong>: $zv_{tk} \ge 0$, the fraction of the demand $D_{t,k}$ of the periods $t,\dots,k$ that is produced in period $t$.

- Producing in period $t$ the demand of the periods $t,\dots,k$ costs the production of $D_{t,k}$ units and the holding of the units that wait for their period:

    $$
    cv_{tk}=vc_{t}\;D_{t,k}+\sum_{s=t+1}^{k}\sum_{u=t}^{s-1}hc_{u}\,d_{s}.
    $$

!!! chiave ""

    The <strong>shortest-path formulation</strong> of the CLS reads as follows:

    <a id="eq-CLS-SP"></a>

    \begin{align*}
    &&\min ~~ \sum_{t \in T} sc_{t}\,y_{t} + \sum_{t \in T}\sum_{k=t}^{m} cv_{tk}\,zv_{tk} && \label{obj:CLS-2} \tag{13.2a}\\[1ex]
    && \sum_{k=1}^{m} zv_{1k} &= 1, & \label{SP1} \tag{13.2b}\\[1ex]
    && \sum_{u=1}^{t-1}zv_{u,t-1} &=\sum_{k=t}^{m}zv_{tk}, & \forall t\in T\setminus\{1\}, \label{SP2} \tag{13.2c}\\[1ex]
    && \sum_{k=t}^{m}zv_{tk} &\leq y_{t}, & \forall t\in T, \label{SP3} \tag{13.2d}\\[1ex]
    && \sum_{k=t}^{m} D_{t,k}\,zv_{tk} &\leq cap_t, & \forall t\in T, \label{SP4} \tag{13.2e}\\[1ex]
    && zv_{tk} & \geq 0, & \forall t,k\in T,~ k\geq t,  \tag{13.2f}\\[1ex]
    && y_{t} & \in \{0, 1\}, & \forall t \in T. \tag{13.2g}
    \end{align*}

    This model is referred to as the shortest-path formulation; its LP relaxation is the $\LP_{\CLSP}^{\mathrm{SP}}$ model.

- Constraints $\eqref{SP1}$ and $\eqref{SP2}$ are the flow constraints of a network, drawn in Figure $\ref{fig:CLS-SP}$: the nodes are $0,1,\dots,m$, and the variable $zv_{tk}$ is the arc from node $t-1$ to node $k$, with cost $cv_{tk}$. A unit of flow leaves node $0$ (constraint $\eqref{SP1}$), and the flow is conserved at the other nodes (constraint $\eqref{SP2}$).

- A path from node $0$ to node $m$ is a plan that produces only when the stock is empty: each arc $(t-1,k)$ is a production in period $t$ for the periods $t,\dots,k$. This is why the formulation is called a shortest-path formulation: with the capacities relaxed, the optimal plan is a shortest path.

- Constraints $\eqref{SP3}$ force the setup if the product is produced in period $t$, with the coefficient $1$ instead of a big-M value. Constraints $\eqref{SP4}$ impose the capacity: the quantity produced in period $t$ is $x_t=\sum_{k} D_{t,k}\,zv_{tk}$.

- The paths are the building blocks, and a plan that is not a path is a <strong>combination of paths</strong>: the quantities are integer, but the variables $zv_{tk}$ may be fractional.

![Figure 1](../img/lot-sizing-formulations/fig01.svg){ .fig loading=lazy  }

<a id="fig:CLS-SP"></a>

<p class="didascalia">Network of the variables <span class="arithmatex">\(zv_{tk}\)</span> for <span class="arithmatex">\(m=3\)</span>: the variable <span class="arithmatex">\(zv_{tk}\)</span> is the arc from node <span class="arithmatex">\(t-1\)</span> to node <span class="arithmatex">\(k\)</span>.</p>

<a id="box-3-ex-CLS-SP"></a>

!!! esempio "Example 13.3: costs and combinations of paths"

    For the reference instance the demands $D_{t,k}$ and the costs $cv_{tk}$ are (the production cost is zero, so $cv_{tk}$ is only holding cost):

    <div class="tabella" markdown="0"><table>
    <tr>
    <th></th>
    <th colspan="5"><span class="arithmatex">\(D_{t,k}\)</span></th>
    <th colspan="5"><span class="arithmatex">\(cv_{tk}\)</span></th>
    </tr>
    <tr>
    <td><span class="arithmatex">\(t \backslash k\)</span></td>
    <td><span class="arithmatex">\(1\)</span></td>
    <td><span class="arithmatex">\(2\)</span></td>
    <td><span class="arithmatex">\(3\)</span></td>
    <td><span class="arithmatex">\(4\)</span></td>
    <td><span class="arithmatex">\(5\)</span></td>
    <td><span class="arithmatex">\(1\)</span></td>
    <td><span class="arithmatex">\(2\)</span></td>
    <td><span class="arithmatex">\(3\)</span></td>
    <td><span class="arithmatex">\(4\)</span></td>
    <td><span class="arithmatex">\(5\)</span></td>
    </tr>
    <tr>
    <td><span class="arithmatex">\(1\)</span></td>
    <td><span class="arithmatex">\(2\)</span></td>
    <td><span class="arithmatex">\(3\)</span></td>
    <td><span class="arithmatex">\(6\)</span></td>
    <td><span class="arithmatex">\(10\)</span></td>
    <td><span class="arithmatex">\(11\)</span></td>
    <td><span class="arithmatex">\(0\)</span></td>
    <td><span class="arithmatex">\(10\)</span></td>
    <td><span class="arithmatex">\(70\)</span></td>
    <td><span class="arithmatex">\(190\)</span></td>
    <td><span class="arithmatex">\(230\)</span></td>
    </tr>
    <tr>
    <td><span class="arithmatex">\(2\)</span></td>
    <td></td>
    <td><span class="arithmatex">\(1\)</span></td>
    <td><span class="arithmatex">\(4\)</span></td>
    <td><span class="arithmatex">\(8\)</span></td>
    <td><span class="arithmatex">\(9\)</span></td>
    <td></td>
    <td><span class="arithmatex">\(0\)</span></td>
    <td><span class="arithmatex">\(30\)</span></td>
    <td><span class="arithmatex">\(110\)</span></td>
    <td><span class="arithmatex">\(140\)</span></td>
    </tr>
    <tr>
    <td><span class="arithmatex">\(3\)</span></td>
    <td></td>
    <td></td>
    <td><span class="arithmatex">\(3\)</span></td>
    <td><span class="arithmatex">\(7\)</span></td>
    <td><span class="arithmatex">\(8\)</span></td>
    <td></td>
    <td></td>
    <td><span class="arithmatex">\(0\)</span></td>
    <td><span class="arithmatex">\(40\)</span></td>
    <td><span class="arithmatex">\(60\)</span></td>
    </tr>
    <tr>
    <td><span class="arithmatex">\(4\)</span></td>
    <td></td>
    <td></td>
    <td></td>
    <td><span class="arithmatex">\(4\)</span></td>
    <td><span class="arithmatex">\(5\)</span></td>
    <td></td>
    <td></td>
    <td></td>
    <td><span class="arithmatex">\(0\)</span></td>
    <td><span class="arithmatex">\(10\)</span></td>
    </tr>
    <tr>
    <td><span class="arithmatex">\(5\)</span></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td><span class="arithmatex">\(1\)</span></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td><span class="arithmatex">\(0\)</span></td>
    </tr>
    </table></div>

    The optimal plan $\tilde{\vet x}=(3,0,4,4,0)$ is not a path: in period $3$ it produces $4$ units, more than the demand $3$ of period $3$, and less than the demand $7$ of the periods $3$ and $4$. It is the following combination of paths:

    $$
    zv_{12}=1,\qquad zv_{33}=\tfrac{4}{5},\quad zv_{35}=\tfrac{1}{5},\qquad zv_{45}=\tfrac{4}{5},
    $$

    and all the other variables $zv_{tk}$ are zero: it is the combination, with weights $\tfrac{4}{5}$ and $\tfrac{1}{5}$, of the paths $0\to2\to3\to5$ (plan $(3,0,3,5,0)$) and $0\to2\to5$ (plan $(3,0,8,0,0)$). The quantities are $x_1=D_{1,2}\,zv_{12}=3$, $x_3=3\cdot\tfrac{4}{5}+8\cdot\tfrac{1}{5}=4$ and $x_4=5\cdot\tfrac{4}{5}=4$. The cost is

    $$
    \underbrace{3 \cdot 50}_{\text{setups}} + \underbrace{10 \cdot 1 + 0 \cdot \tfrac{4}{5} + 60 \cdot \tfrac{1}{5} + 10 \cdot \tfrac{4}{5}}_{=\,30} = 180.
    $$

## 13.4 Comparing the formulations

- The formulations have the same optimal value $z(\ILP_{\CLSP})=180$, but their LP relaxations have different optimal values. On the reference instance the lower bounds, computed with the exact simplex algorithm and checked with Gurobi, are the following; the shortest-path formulation, solved with integer quantities, gives again the optimal value $180$.

<div class="tabella" markdown="0"><table>
<tr>
<th>Model</th>
<th>Lower bound</th>
<th>Gap from <span class="arithmatex">\(180\)</span></th>
</tr>
<tr>
<td>Without setups</td>
<td><span class="arithmatex">\(0\)</span></td>
<td><span class="arithmatex">\(100\%\)</span></td>
</tr>
<tr>
<td><span class="arithmatex">\(\LP_{\CLSP}^{\mathrm{dem}}\)</span> (<span class="arithmatex">\(M_t=D_{t,m}\)</span>)</td>
<td><span class="arithmatex">\(99.65\)</span></td>
<td><span class="arithmatex">\(44.6\%\)</span></td>
</tr>
<tr>
<td><span class="arithmatex">\(\LP_{\CLSP}^{\mathrm{cap}}\)</span> (<span class="arithmatex">\(M_t=cap_t\)</span>)</td>
<td><span class="arithmatex">\(137.50\)</span></td>
<td><span class="arithmatex">\(23.6\%\)</span></td>
</tr>
<tr>
<td><span class="arithmatex">\(\LP_{\CLSP}^{\mathrm{strong}}\)</span> (<span class="arithmatex">\(M_t=\min\{cap_t,D_{t,m}\}\)</span>)</td>
<td><span class="arithmatex">\(157.50\)</span></td>
<td><span class="arithmatex">\(12.5\%\)</span></td>
</tr>
<tr>
<td><span class="arithmatex">\(\LP_{\CLSP}^{\mathrm{SP}}\)</span> (shortest path)</td>
<td><span class="arithmatex">\(170\)</span></td>
<td><span class="arithmatex">\(5.6\%\)</span></td>
</tr>
</table></div>

- The bound $170$ of the shortest-path formulation is the optimal value of the problem without capacity (plan $(3,0,8,0,0)$, of cost $170$): the capacity constraints $\eqref{SP4}$ act only on the quantities, and a combination of paths can satisfy them.

- The price of the shortest-path formulation is its size: there are $O(m^2)$ variables $zv_{tk}$, against the $O(m)$ variables of the big-M formulation.

## 13.5 Several products, setup times and initial inventory

- In the general problem a set $P$ of products shares the resource of each period. We write $d_{pt}$, $sc_{pt}$, $vc_{pt}$ and $hc_{pt}$ for the data of product $p \in P$ in period $t \in T$. Producing a unit of $p$ takes the time $vt_{pt} \in \Z_{\ge 1}$, a setup takes the time $st_{pt} \in \Z_{\ge 0}$, and the capacity $cap_t$ is a time. The initial inventory $si_p \in \Z_{\ge 0}$ of product $p$ is a decision, bought at the cost $fc_p$ per unit.

- The variables are $x_{pt}$, $s_{pt}$, $si_p$ and $y_{pt}$. The balance constraints become $si_{p} + x_{p1} = d_{p1} + s_{p1}$ for the first period and $s_{p,t-1} + x_{pt} = d_{pt} + s_{pt}$ for the others. The capacity constraints and the big-M link become

    \begin{align*}
    \sum_{p \in P}\left(st_{pt}\,y_{pt} + vt_{pt}\,x_{pt}\right) &\leq cap_t, & \forall t\in T,\\[1ex]
    x_{pt} &\le M_{pt}\, y_{pt}, & \forall p \in P,~ \forall t\in T,
    \end{align*}

    with the strong big-M value

    $$
    M_{pt}=\min\left\{\left\lfloor\frac{cap_t-st_{pt}}{vt_{pt}}\right\rfloor,~sd_{ptm}\right\},\qquad sd_{ptk}=\sum_{j=t}^{k} d_{pj}.
    $$

- In the shortest-path formulation each product has its own network, with an additional arc $w_{pt}$ from node $0$ to node $t$ for the fraction of the initial inventory that covers the demands of the first $t$ periods; its cost is $ci_{pt}=fc_p\,sd_{p1t}+\sum_{s=2}^{t}\sum_{u=1}^{s-1}hc_{pu}\,d_{ps}$. The constraint $\eqref{SP1}$ becomes $\sum_{k}(w_{pk}+zv_{p1k})=1$, the constraint $\eqref{SP2}$ has the arc $w_{p,t-1}$ on the left-hand side, and the capacity constraint is $\sum_{p}st_{pt}\,y_{pt}+\sum_{p}\sum_{k=t}^{m} vt_{pt}\,sd_{ptk}\,zv_{ptk} \le cap_t$.

<a id="box-4-ex-CLSP-inst"></a>

!!! esempio "Example 13.4: two products"

    We consider $n=2$ products and $m=3$ periods, with capacities $cap_1=2500$, $cap_2=2100$, $cap_3=2500$, the initial inventory costs $fc_1=fc_2=3000$ and the setup costs $sc_{pt}=10000$. The other data are:

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
    <td><span class="arithmatex">\(100\)</span></td>
    <td><span class="arithmatex">\(200\)</span></td>
    <td><span class="arithmatex">\(10\)</span></td>
    <td><span class="arithmatex">\(10\)</span></td>
    <td><span class="arithmatex">\(100\)</span></td>
    <td><span class="arithmatex">\(150\)</span></td>
    </tr>
    <tr>
    <td><span class="arithmatex">\(vt_{pt}\)</span></td>
    <td><span class="arithmatex">\(20\)</span></td>
    <td><span class="arithmatex">\(10\)</span></td>
    <td><span class="arithmatex">\(10\)</span></td>
    <td><span class="arithmatex">\(10\)</span></td>
    <td><span class="arithmatex">\(5\)</span></td>
    <td><span class="arithmatex">\(5\)</span></td>
    </tr>
    <tr>
    <td><span class="arithmatex">\(st_{pt}\)</span></td>
    <td><span class="arithmatex">\(100\)</span></td>
    <td><span class="arithmatex">\(100\)</span></td>
    <td><span class="arithmatex">\(100\)</span></td>
    <td><span class="arithmatex">\(110\)</span></td>
    <td><span class="arithmatex">\(110\)</span></td>
    <td><span class="arithmatex">\(110\)</span></td>
    </tr>
    <tr>
    <td><span class="arithmatex">\(hc_{pt}\)</span></td>
    <td><span class="arithmatex">\(110\)</span></td>
    <td><span class="arithmatex">\(100\)</span></td>
    <td><span class="arithmatex">\(100\)</span></td>
    <td><span class="arithmatex">\(105\)</span></td>
    <td><span class="arithmatex">\(105\)</span></td>
    <td><span class="arithmatex">\(105\)</span></td>
    </tr>
    <tr>
    <td><span class="arithmatex">\(vc_{pt}\)</span></td>
    <td><span class="arithmatex">\(1100\)</span></td>
    <td><span class="arithmatex">\(1000\)</span></td>
    <td><span class="arithmatex">\(1000\)</span></td>
    <td><span class="arithmatex">\(900\)</span></td>
    <td><span class="arithmatex">\(800\)</span></td>
    <td><span class="arithmatex">\(800\)</span></td>
    </tr>
    </table></div>

    The big-M values are:

    <div class="tabella" markdown="0"><table>
    <tr>
    <th>period <span class="arithmatex">\(t\)</span></th>
    <th><span class="arithmatex">\(1\)</span></th>
    <th><span class="arithmatex">\(2\)</span></th>
    <th><span class="arithmatex">\(3\)</span></th>
    <th><span class="arithmatex">\(1\)</span></th>
    <th><span class="arithmatex">\(2\)</span></th>
    <th><span class="arithmatex">\(3\)</span></th>
    </tr>
    <tr>
    <td><span class="arithmatex">\(sd_{ptm}\)</span></td>
    <td><span class="arithmatex">\(310\)</span></td>
    <td><span class="arithmatex">\(210\)</span></td>
    <td><span class="arithmatex">\(10\)</span></td>
    <td><span class="arithmatex">\(260\)</span></td>
    <td><span class="arithmatex">\(250\)</span></td>
    <td><span class="arithmatex">\(150\)</span></td>
    </tr>
    <tr>
    <td><span class="arithmatex">\(\lfloor (cap_t-st_{pt})/vt_{pt} \rfloor\)</span></td>
    <td><span class="arithmatex">\(120\)</span></td>
    <td><span class="arithmatex">\(200\)</span></td>
    <td><span class="arithmatex">\(240\)</span></td>
    <td><span class="arithmatex">\(239\)</span></td>
    <td><span class="arithmatex">\(398\)</span></td>
    <td><span class="arithmatex">\(478\)</span></td>
    </tr>
    <tr>
    <td><span class="arithmatex">\(M_{pt}\)</span></td>
    <td><span class="arithmatex">\(120\)</span></td>
    <td><span class="arithmatex">\(200\)</span></td>
    <td><span class="arithmatex">\(10\)</span></td>
    <td><span class="arithmatex">\(239\)</span></td>
    <td><span class="arithmatex">\(250\)</span></td>
    <td><span class="arithmatex">\(150\)</span></td>
    </tr>
    </table></div>

    Ignoring the setups (in the costs and in the capacities), the optimal value is $575400$, attained by the integer solution $x_{11}=120$, $x_{12}=160$, $x_{13}=10$, $x_{21}=10$, $x_{22}=100$, $x_{23}=150$, $s_{11}=40$, $si_1=20$. The lower bounds and the optimal value of the formulations are:

    <div class="tabella" markdown="0"><table>
    <tr>
    <th>Model</th>
    <th>Value</th>
    </tr>
    <tr>
    <td>Without setups</td>
    <td><span class="arithmatex">\(575\,400.00\)</span></td>
    </tr>
    <tr>
    <td><span class="arithmatex">\(M_{pt}=sd_{ptm}\)</span></td>
    <td><span class="arithmatex">\(638\,882.20\)</span></td>
    </tr>
    <tr>
    <td>strong <span class="arithmatex">\(M_{pt}\)</span></td>
    <td><span class="arithmatex">\(651\,267.37\)</span></td>
    </tr>
    <tr>
    <td>shortest path</td>
    <td><span class="arithmatex">\(668\,928.57\)</span></td>
    </tr>
    <tr>
    <td>integer optimum</td>
    <td><span class="arithmatex">\(677\,400\)</span></td>
    </tr>
    </table></div>

    The optimal solution is unique: $x_{11}=59$, $x_{12}=200$, $x_{13}=10$, $x_{21}=110$, $x_{22}=0$, $x_{23}=150$, $si_1=41$, with a setup in every period except for product $2$ in period $2$.

## 13.6 Typical mistakes

!!! attenzione "Warning"

    - <strong>Taking a big-M value that is too small.</strong> A value smaller than the production of a feasible plan cuts off that plan: the values $D_{t,m}$ and $cap_t$ are both valid.

    - <strong>Taking a big-M value that is too large.</strong> Every valid value gives a correct model, but a large value gives a weak relaxation: the setup variables become almost zero in the LP solutions, as in the bound $99.65$ of the reference instance.

    - <strong>Forgetting the setup times in the capacity constraints.</strong> With several products the constraints contain $st_{pt}\,y_{pt}$ besides $vt_{pt}\,x_{pt}$.

    - <strong>Counting the holding cost of the demand of the production period.</strong> In $cv_{tk}$ the units for period $t$ are not stored: the holding sum starts from the demand of period $t+1$.

    - <strong>Believing that the shortest-path formulation needs binary paths.</strong> The variables $zv_{tk}$ are continuous: a feasible plan that is not a path is a combination of paths.

## 13.7 In summary

!!! chiave "In summary"

    - Without the setups the CLS is a simple flow problem; the setups need the binary variables $y_t$ and a link with the quantities.

    - In the big-M formulation the link $x_t \le M_t\, y_t$ is correct for every valid $M_t$, but the LP bound improves when $M_t$ decreases: the strong value is $\min\{cap_t, D_{t,m}\}$.

    - The shortest-path formulation writes the plans as paths in a network, with the link $\sum_k zv_{tk} \le y_t$ and no big-M value: its relaxation is the strongest.

    - The three formulations have the same optimal value; they differ in the lower bound and in the size of the model.

    <strong>Dashboard of the reference instance.</strong> Lower bounds on the optimal value computed in this chapter:

    <div class="tabella" markdown="0"><table>
    <tr>
    <th>Bound</th>
    <th>Value</th>
    <th>From</th>
    </tr>
    <tr>
    <td>Without setups</td>
    <td><span class="arithmatex">\(0\)</span></td>
    <td>lot-for-lot plan</td>
    </tr>
    <tr>
    <td>Big-M, <span class="arithmatex">\(M_t=D_{t,m}\)</span></td>
    <td><span class="arithmatex">\(99.65\)</span></td>
    <td><span class="arithmatex">\(z(\LP_{\CLSP}^{\mathrm{dem}})=\tfrac{9865}{99}\)</span></td>
    </tr>
    <tr>
    <td>Big-M, <span class="arithmatex">\(M_t=cap_t\)</span></td>
    <td><span class="arithmatex">\(137.5\)</span></td>
    <td><span class="arithmatex">\(z(\LP_{\CLSP}^{\mathrm{cap}})\)</span></td>
    </tr>
    <tr>
    <td>Strong big-M</td>
    <td><span class="arithmatex">\(157.5\)</span></td>
    <td><span class="arithmatex">\(z(\LP_{\CLSP}^{\mathrm{strong}})\)</span></td>
    </tr>
    <tr>
    <td>Shortest path</td>
    <td><span class="arithmatex">\(170\)</span></td>
    <td><span class="arithmatex">\(z(\LP_{\CLSP}^{\mathrm{SP}})\)</span></td>
    </tr>
    <tr>
    <td>Optimal value</td>
    <td><span class="arithmatex">\(180\)</span></td>
    <td>plan <span class="arithmatex">\((3,0,4,4,0)\)</span></td>
    </tr>
    </table></div>
