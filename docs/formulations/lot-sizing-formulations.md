---
title: "Formulations of capacitated lot sizing"
---

# Formulations of capacitated lot sizing

<div class="info-capitolo" markdown>

**Part 2 · Formulations and their properties · Chapter 15** · [:material-file-pdf-box: Lecture notes, volume 2 (PDF)](../pdf/lecture-notes-2-formulations.pdf) · [:material-pencil: Exercises: Lot sizing](../exercises/lot-sizing-formulations.md)

</div>

!!! nota "Prerequisites"

    - From the module <em>Integer linear programming</em>, [Chapter 1 «Integer linear programming»](https://fabiofurini.github.io/integer-linear-programming/models-and-bounds/ilp/) and [Chapter 2 «LP relaxation»](https://fabiofurini.github.io/integer-linear-programming/models-and-bounds/lp-relaxation/): ILP problems, LP relaxations and lower bounds.

    - From this module, [Chapter 8 «Capacitated lot sizing»](https://fabiofurini.github.io/combinatorial-optimization/combinatorial-optimization-problems/lot-sizing/): the problem, its assumptions, the plans and the reference instance.

!!! chiave "Objectives"

    At the end of this chapter you will be able to:

    - write the big-M formulation of the capacitated lot-sizing problem and compute a weak and a strong big-M value;

    - write the shortest-path formulation and interpret its variables as the arcs of a network;

    - represent a production plan as a combination of paths of the network;

    - compare the LP bounds of the formulations on the reference instance;

    - extend the formulations to several products, with setup times and initial inventory.

## 15.1 A formulation with a big-M link

- Given a set $T=\{1,2,\dots,m\}$ of periods with demands $d_t$, for $j \le t$ we write $D_{j,t}=\sum_{k=j}^{t} d_k$ for the total demand of the periods $j,j+1,\dots,t$.

- We introduce the following <strong>integer variables</strong> and <strong>binary variables</strong>, for every period $t \in T$:

    $$
    x_t \in \Z_{\ge 0}~\text{(production)},\qquad s_t \in \Z_{\ge 0}~\text{(inventory at the end of the period)},
    $$

    $$
    y_t=\begin{cases}
    1 & \text{if there is a setup in period $t$}\\[1.5ex]
    0 & \text{otherwise}
    \end{cases}
    $$

    The inventory at the beginning of the horizon is the constant $s_0$.

- The setup variables are linked to the quantities by the logical implication

    $$
    x_t>0 ~~~\Longrightarrow~~~ y_t=1,
    $$

    modeled by the <strong>big-M constraint</strong> $x_t \le M_t\, y_t$, where $M_t$ is an upper bound on the production of period $t$.

- If the setups are ignored, the best plan produces in every period exactly its demand: it has no inventory and, in the reference instance, cost $0$. This is a very weak lower bound: the setup costs must be modeled.

!!! chiave ""

    Using these variables, an Integer Linear Programming (ILP) model for the capacitated lot-sizing problem (CLS) reads as follows:

    <a id="eq-CLS-bigM"></a>

    \begin{align*}
    &&\min ~~ \sum_{t \in T} \left(sc_{t}\,y_{t} + vc_{t}\,x_{t} + hc_{t}\,s_{t} \right) \label{obj:CLS-1} \tag{15.1a}\\[1ex]
    && \text{subject to}\quad s_{t-1} + x_{t} & = d_{t} + s_{t}, & \forall t\in T, \label{CL1:bal} \tag{15.1b}\\[1ex]
    && x_{t} & \le M_{t}\, y_{t}, & \forall t\in T, \label{CL1:M} \tag{15.1c}\\[1ex]
    && x_{t} & \le cap_{t}, & \forall t\in T, \label{CL1:cap} \tag{15.1d}\\[1ex]
    && s_0 = s_m &= 0, \label{CL1:end} \tag{15.1e}\\[1ex]
    && x_{t} &\in \Z_{\ge 0}, & \forall t\in T, \label{CL1:int} \tag{15.1f}\\[1ex]
    && s_{t} &\in \Z_{\ge 0}, & \forall t\in T, \label{CL1:ints} \tag{15.1g}\\[1ex]
    && y_{t} & \in \{0, 1\}, & \forall t\in T. \label{CL1:bin} \tag{15.1h}
    \end{align*}

    This ILP model is referred to as the $\mathrm{ILP}_{\mathrm{CLSP}}$ model, or <strong>big-M formulation</strong>.

- Description of the objective function and constraints of the $\mathrm{ILP}_{\mathrm{CLSP}}$ model:

    - the linear objective function $\eqref{obj:CLS-1}$ minimizes the cost of the setups, of the production and of the holding;

    - constraints $\eqref{CL1:bal}$ are the <strong>flow balancing constraints</strong>: the demand of period $t$ is satisfied by the production of the period and by the inventory of the previous period, and the surplus becomes the inventory at the end of period $t$ ($m$ linear constraints);

    - constraints $\eqref{CL1:M}$ link the quantities with the setups, and constraints $\eqref{CL1:cap}$ are the capacity constraints ($m$ linear constraints each);

    - constraint $\eqref{CL1:end}$ imposes an empty inventory at the beginning and at the end of the horizon;

    - finally, constraints $\eqref{CL1:int}$, $\eqref{CL1:ints}$ and $\eqref{CL1:bin}$ define the variables of the ILP model.

### 15.1.1 Weak and strong big-M values

- <strong>A weak value.</strong> Since $s_m=0$ and the inventories are non-negative, the production of period $t$ cannot exceed the demand of the periods $t,\dots,m$: $M^{\mathrm{dem}}_{t}=D_{t,m}$ is a valid value.

- <strong>A second value.</strong> By the capacity constraints $\eqref{CL1:cap}$, $M^{\mathrm{cap}}_{t}=cap_t$ is also valid.

- <strong>A strong value.</strong> The best value is the smallest of the two:

    $$
    M_t=\min\left\{cap_t,~D_{t,m}\right\}.
    $$

!!! chiave ""

    <strong>The smaller the big-M value, the stronger the LP relaxation</strong>: the constraint $x_t \le M_t y_t$ cuts off the fractional values of $y_t$ below $x_t/M_t$. A value that is too small, however, cuts off feasible plans.

<a id="box-1-ex-CLS-ref"></a>

!!! esempio "Example 15.1: the reference instance"

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

    This is the reference instance of the chapter «Capacitated lot sizing». The big-M values are:

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

    We refer to this CLS instance as <span style="color:#1971c2">[Example 15.1](#box-1-ex-CLS-ref)</span>.

<a id="box-2-ex-CLS-ILP"></a>

!!! esempio "Example 15.2: $\mathrm{ILP}_{\mathrm{CLSP}}$ model"

    The $\mathrm{ILP}_{\mathrm{CLSP}}$ model with the strong big-M values for the CLS instance of <span style="color:#1971c2">[Example 15.1](#box-1-ex-CLS-ref)</span> is ($s_0=0$ is a constant, and it does not appear):

    $$
    \begin{array}{rlcl}
    {\min} & {50\,y_1+50\,y_2+50\,y_3+50\,y_4+50\,y_5+10\,s_1+10\,s_2} &  &  \\
    & {+10\,s_3+10\,s_4+10\,s_5} &  &  \\[1ex]
    \text{subject to} & {x_1-s_1} & {=} & {2} \\
    & {s_1+x_2-s_2} & {=} & {1} \\
    & {s_2+x_3-s_3} & {=} & {3} \\
    & {s_3+x_4-s_4} & {=} & {4} \\
    & {s_4+x_5-s_5} & {=} & {1} \\
    & {x_1-4\,y_1} & {\le} & {0} \\
    & {x_2-4\,y_2} & {\le} & {0} \\
    & {x_3-4\,y_3} & {\le} & {0} \\
    & {x_4-4\,y_4} & {\le} & {0} \\
    & {x_5-y_5} & {\le} & {0} \\
    & {x_1} & {\le} & {4} \\
    & {x_2} & {\le} & {4} \\
    & {x_3} & {\le} & {4} \\
    & {x_4} & {\le} & {4} \\
    & {x_5} & {\le} & {4} \\
    & {s_5} & {=} & {0} \\[1ex]
    & {x_1,~x_2,~x_3,~x_4,~x_5} & {\in} & {\Z_{\ge 0}} \\
    & {s_1,~s_2,~s_3,~s_4,~s_5} & {\in} & {\Z_{\ge 0}} \\
    & {y_1,~y_2,~y_3,~y_4,~y_5} & {\in} & {\{0,1\}}
    \end{array}
    $$

    An optimal solution $(\tilde{\vet y},\tilde{\vet x},\tilde{\vet s})(\mathrm{ILP}_{\mathrm{CLSP}})$ is:

    $$
    \tilde{\vet y}=(1,0,1,1,0),\qquad \tilde{\vet x}=(3,0,4,4,0),\qquad \tilde{\vet s}=(1,0,1,1,0)
    $$

    The optimal value $z(\mathrm{ILP}_{\mathrm{CLSP}})$ is $3\cdot 50+3\cdot 10=180$, the cost of the optimal plan of the chapter «Capacitated lot sizing». The weak big-M values give the same optimal solution.

## 15.2 The Linear Programming relaxation of the big-M formulation

!!! chiave ""

    To obtain a Linear Programming (LP) relaxation of the $\mathrm{ILP}_{\mathrm{CLSP}}$ model, we relax constraints $\eqref{CL1:int}$–$\eqref{CL1:bin}$ into non-negativity constraints and the bounds $y_t\le 1$. The obtained LP model reads as follows:

    <a id="eq-CLS-LP"></a>

    \begin{align*}
    &&\min ~~ \sum_{t \in T} \left(sc_{t}\,y_{t} + vc_{t}\,x_{t} + hc_{t}\,s_{t} \right) \label{obj:CLS-LP} \tag{15.2a}\\[1ex]
    && \text{subject to}\quad s_{t-1} + x_{t} & = d_{t} + s_{t}, & \forall t\in T, \label{LP1:bal} \tag{15.2b}\\[1ex]
    && x_{t} & \le M_{t}\, y_{t}, & \forall t\in T, \label{LP1:M} \tag{15.2c}\\[1ex]
    && x_{t} & \le cap_{t}, & \forall t\in T, \label{LP1:cap} \tag{15.2d}\\[1ex]
    && s_0 = s_m &= 0, \label{LP1:end} \tag{15.2e}\\[1ex]
    && y_{t} & \le 1, & \forall t\in T, \label{LP1:ub} \tag{15.2f}\\[1ex]
    && x_{t} &\ge 0, & \forall t\in T, \label{LP1:x} \tag{15.2g}\\[1ex]
    && s_{t} &\ge 0, & \forall t\in T, \label{LP1:s} \tag{15.2h}\\[1ex]
    && y_{t} &\ge 0, & \forall t\in T. \label{LP1:y} \tag{15.2i}
    \end{align*}

    This LP model is referred to as the $\mathrm{LP}_{\mathrm{CLSP}}^{\mathrm{dem}}$, $\mathrm{LP}_{\mathrm{CLSP}}^{\mathrm{cap}}$ or $\mathrm{LP}_{\mathrm{CLSP}}^{\mathrm{strong}}$ model, when the big-M values are $M^{\mathrm{dem}}_t$, $M^{\mathrm{cap}}_t$ or the strong values $M_t$.

<a id="box-3-ex-CLS-bigM"></a>

!!! esempio "Example 15.3: big-M values and LP bounds"

    The LP model [(15.2)](#eq-CLS-LP) for the CLS instance of <span style="color:#1971c2">[Example 15.1](#box-1-ex-CLS-ref)</span> is:

    $$
    \begin{array}{rlcl}
    {\min} & {50\,y_1+50\,y_2+50\,y_3+50\,y_4+50\,y_5+10\,s_1+10\,s_2} &  &  \\
    & {+10\,s_3+10\,s_4+10\,s_5} &  &  \\[1ex]
    \text{subject to} & {x_1-s_1} & {=} & {2} \\
    & {s_1+x_2-s_2} & {=} & {1} \\
    & {s_2+x_3-s_3} & {=} & {3} \\
    & {s_3+x_4-s_4} & {=} & {4} \\
    & {s_4+x_5-s_5} & {=} & {1} \\
    & {x_1-M_1\,y_1} & {\le} & {0} \\
    & {x_2-M_2\,y_2} & {\le} & {0} \\
    & {x_3-M_3\,y_3} & {\le} & {0} \\
    & {x_4-M_4\,y_4} & {\le} & {0} \\
    & {x_5-M_5\,y_5} & {\le} & {0} \\
    & {x_1} & {\le} & {4} \\
    & {x_2} & {\le} & {4} \\
    & {x_3} & {\le} & {4} \\
    & {x_4} & {\le} & {4} \\
    & {x_5} & {\le} & {4} \\
    & {s_5} & {=} & {0} \\
    & {y_1} & {\le} & {1} \\
    & {y_2} & {\le} & {1} \\
    & {y_3} & {\le} & {1} \\
    & {y_4} & {\le} & {1} \\
    & {y_5} & {\le} & {1} \\[1ex]
    & {x_1,~x_2,~x_3,~x_4,~x_5} & {\ge} & {0} \\
    & {s_1,~s_2,~s_3,~s_4,~s_5} & {\ge} & {0} \\
    & {y_1,~y_2,~y_3,~y_4,~y_5} & {\ge} & {0}
    \end{array}
    $$

    with the values $M_1,\dots,M_5$ of the table of <span style="color:#1971c2">[Example 15.1](#box-1-ex-CLS-ref)</span>. The three choices give the following optimal solutions $(\tilde{\vet y},\tilde{\vet x},\tilde{\vet s})$, with $\tilde s_5=0$:

    <div class="tabella" markdown="0"><table>
    <tr>
    <th>Model</th>
    <th><span class="arithmatex">\(\tilde{\vet y}\)</span></th>
    <th><span class="arithmatex">\(\tilde{\vet x}\)</span></th>
    <th><span class="arithmatex">\((\tilde s_1,\dots,\tilde s_4)\)</span></th>
    <th>optimal value</th>
    </tr>
    <tr>
    <td><span class="arithmatex">\(\mathrm{LP}_{\mathrm{CLSP}}^{\mathrm{dem}}\)</span></td>
    <td><span class="arithmatex">\((\frac{2}{11},\frac{1}{9},\frac{1}{2},\frac{4}{5},0)\)</span></td>
    <td><span class="arithmatex">\((2,1,4,4,0)\)</span></td>
    <td><span class="arithmatex">\((0,0,1,1)\)</span></td>
    <td><span class="arithmatex">\(\frac{9865}{99}\approx 99.65\)</span></td>
    </tr>
    <tr>
    <td><span class="arithmatex">\(\mathrm{LP}_{\mathrm{CLSP}}^{\mathrm{cap}}\)</span></td>
    <td><span class="arithmatex">\((\frac{1}{2},\frac{1}{4},\frac{3}{4},1,\frac{1}{4})\)</span></td>
    <td><span class="arithmatex">\((2,1,3,4,1)\)</span></td>
    <td><span class="arithmatex">\((0,0,0,0)\)</span></td>
    <td><span class="arithmatex">\(\frac{275}{2}=137.5\)</span></td>
    </tr>
    <tr>
    <td><span class="arithmatex">\(\mathrm{LP}_{\mathrm{CLSP}}^{\mathrm{strong}}\)</span></td>
    <td><span class="arithmatex">\((\frac{1}{2},\frac{1}{4},1,1,0)\)</span></td>
    <td><span class="arithmatex">\((2,1,4,4,0)\)</span></td>
    <td><span class="arithmatex">\((0,0,1,1)\)</span></td>
    <td><span class="arithmatex">\(\frac{315}{2}=157.5\)</span></td>
    </tr>
    </table></div>

    In every solution $\tilde y_t=\tilde x_t/M_t$: the smaller $M_t$, the larger the cost of the setups paid by the LP. The integer optimal solution of <span style="color:#1971c2">[Example 15.2](#box-2-ex-CLS-ILP)</span> has value $z(\mathrm{ILP}_{\mathrm{CLSP}})=180$.

## 15.3 A shortest-path formulation

- The second formulation does not decide the quantities directly. For every $t,k \in T$, with $k \ge t$, we introduce the following <strong>continuous variable</strong>: $zv_{tk} \ge 0$, the fraction of the demand $D_{t,k}$ of the periods $t,\dots,k$ that is produced in period $t$.

- Producing in period $t$ the demand of the periods $t,\dots,k$ costs the production of $D_{t,k}$ units and the holding of the units that wait for their period:

    $$
    cv_{tk}=vc_{t}\;D_{t,k}+\sum_{s=t+1}^{k}\sum_{u=t}^{s-1}hc_{u}\,d_{s}.
    $$

!!! chiave ""

    Using these variables and the binary variables $y_t$, a Mixed Integer Linear Programming (MIP) model for the CLS reads as follows:

    <a id="eq-CLS-SP"></a>

    \begin{align*}
    &&\min ~~ \sum_{t \in T} sc_{t}\,y_{t} + \sum_{t \in T}\sum_{k=t}^{m} cv_{tk}\,zv_{tk} \label{obj:CLS-2} \tag{15.3a}\\[1ex]
    && \text{subject to}\quad \sum_{k=1}^{m} zv_{1k} &= 1, \label{SP1} \tag{15.3b}\\[1ex]
    && \sum_{u=1}^{t-1}zv_{u,t-1} - \sum_{k=t}^{m}zv_{tk} &= 0, & \forall t\in T\setminus\{1\}, \label{SP2} \tag{15.3c}\\[1ex]
    && \sum_{k=t}^{m}zv_{tk} &\leq y_{t}, & \forall t\in T, \label{SP3} \tag{15.3d}\\[1ex]
    && \sum_{k=t}^{m} D_{t,k}\,zv_{tk} &\leq cap_t, & \forall t\in T, \label{SP4} \tag{15.3e}\\[1ex]
    && zv_{tk} & \geq 0, & \forall t,k\in T,~ k\geq t, \label{SP5} \tag{15.3f}\\[1ex]
    && y_{t} & \in \{0, 1\}, & \forall t \in T. \label{SP6} \tag{15.3g}
    \end{align*}

    This MIP model is referred to as the $\mathrm{MIP}^{\mathrm{SP}}_{\mathrm{CLSP}}$ model, or <strong>shortest-path formulation</strong>.

- Description of the objective function and constraints of the $\mathrm{MIP}^{\mathrm{SP}}_{\mathrm{CLSP}}$ model:

    - the linear objective function $\eqref{obj:CLS-2}$ minimizes the cost of the setups and of the arcs of the plan;

    - constraints $\eqref{SP1}$ and $\eqref{SP2}$ are the flow constraints of a network ($m$ linear constraints);

    - constraints $\eqref{SP3}$ force the setup if the product is produced in period $t$, and constraints $\eqref{SP4}$ impose the capacities ($m$ linear constraints each);

    - finally, constraints $\eqref{SP5}$ and $\eqref{SP6}$ define the variables of the MIP model.

- The network is drawn in Figure $\ref{fig:CLS-SP}$: the nodes are $0,1,\dots,m$, and the variable $zv_{tk}$ is the arc from node $t-1$ to node $k$, with cost $cv_{tk}$. A unit of flow leaves node $0$ (constraint $\eqref{SP1}$), and the flow is conserved at the other nodes (constraints $\eqref{SP2}$).

- A path from node $0$ to node $m$ is a plan that produces only when the stock is empty: each arc $(t-1,k)$ is a production in period $t$ for the periods $t,\dots,k$. This is why the formulation is called a shortest-path formulation: with the capacities relaxed, the optimal plan is a shortest path.

- Constraints $\eqref{SP3}$ link the arcs with the setups with the coefficient $1$ instead of a big-M value. In constraints $\eqref{SP4}$ the quantity produced in period $t$ is $x_t=\sum_{k} D_{t,k}\,zv_{tk}$.

- The paths are the building blocks, and a plan that is not a path is a <strong>combination of paths</strong>: the quantities are integer, but the variables $zv_{tk}$ may be fractional.

![Figure 1](../img/lot-sizing-formulations/fig01.svg){ .fig loading=lazy  }

<a id="fig:CLS-SP"></a>

<p class="didascalia">Network of the variables <span class="arithmatex">\(zv_{tk}\)</span> for <span class="arithmatex">\(m=3\)</span>: the variable <span class="arithmatex">\(zv_{tk}\)</span> is the arc from node <span class="arithmatex">\(t-1\)</span> to node <span class="arithmatex">\(k\)</span>.</p>

<a id="box-4-ex-CLS-SP"></a>

!!! esempio "Example 15.4: $\mathrm{MIP}^{\mathrm{SP}}_{\mathrm{CLSP}}$ model and combinations of paths"

    For the CLS instance of <span style="color:#1971c2">[Example 15.1](#box-1-ex-CLS-ref)</span> the demands $D_{t,k}$ and the costs $cv_{tk}$ are (the production cost is zero, so $cv_{tk}$ is only holding cost):

    $$
    \begin{array}{l|ccccc|ccccc}
    \hline  & {D_{t,k}} & & & & & {cv_{tk}} & & & & \\
    {t \backslash k} & {1} & {2} & {3} & {4} & {5} & {1} & {2} & {3} & {4} & {5} \\
    \hline {1} & {2} & {3} & {6} & {10} & {11} & {0} & {10} & {70} & {190} & {230} \\
    {2} &  & {1} & {4} & {8} & {9} &  & {0} & {30} & {110} & {140} \\
    {3} &  &  & {3} & {7} & {8} &  &  & {0} & {40} & {60} \\
    {4} &  &  &  & {4} & {5} &  &  &  & {0} & {10} \\
    {5} &  &  &  &  & {1} &  &  &  &  & {0} \\
    \hline
    \end{array}
    $$

    The $\mathrm{MIP}^{\mathrm{SP}}_{\mathrm{CLSP}}$ model for this instance is:

    $$
    \begin{array}{rlcl}
    {\min} & {50\,y_1+50\,y_2+50\,y_3+50\,y_4+50\,y_5+10\,zv_{12}+70\,zv_{13}} &  &  \\
    & {+190\,zv_{14}+230\,zv_{15}+30\,zv_{23}+110\,zv_{24}+140\,zv_{25}+40\,zv_{34}} &  &  \\
    & {+60\,zv_{35}+10\,zv_{45}} &  &  \\[1ex]
    \text{subject to} & {zv_{11}+zv_{12}+zv_{13}+zv_{14}+zv_{15}} & {=} & {1} \\
    & {zv_{11}-zv_{22}-zv_{23}-zv_{24}-zv_{25}} & {=} & {0} \\
    & {zv_{12}+zv_{22}-zv_{33}-zv_{34}-zv_{35}} & {=} & {0} \\
    & {zv_{13}+zv_{23}+zv_{33}-zv_{44}-zv_{45}} & {=} & {0} \\
    & {zv_{14}+zv_{24}+zv_{34}+zv_{44}-zv_{55}} & {=} & {0} \\
    & {zv_{11}+zv_{12}+zv_{13}+zv_{14}+zv_{15}-y_1} & {\le} & {0} \\
    & {zv_{22}+zv_{23}+zv_{24}+zv_{25}-y_2} & {\le} & {0} \\
    & {zv_{33}+zv_{34}+zv_{35}-y_3} & {\le} & {0} \\
    & {zv_{44}+zv_{45}-y_4} & {\le} & {0} \\
    & {zv_{55}-y_5} & {\le} & {0} \\
    & {2\,zv_{11}+3\,zv_{12}+6\,zv_{13}+10\,zv_{14}+11\,zv_{15}} & {\le} & {4} \\
    & {zv_{22}+4\,zv_{23}+8\,zv_{24}+9\,zv_{25}} & {\le} & {4} \\
    & {3\,zv_{33}+7\,zv_{34}+8\,zv_{35}} & {\le} & {4} \\
    & {4\,zv_{44}+5\,zv_{45}} & {\le} & {4} \\
    & {zv_{55}} & {\le} & {4} \\[1ex]
    & {zv_{11},~zv_{12},~zv_{13},~\dots,~zv_{55}} & {\ge} & {0} \\
    & {y_1,~y_2,~y_3,~y_4,~y_5} & {\in} & {\{0,1\}}
    \end{array}
    $$

    An optimal solution $(\tilde{\vet{zv}},\tilde{\vet y})(\mathrm{MIP}^{\mathrm{SP}}_{\mathrm{CLSP}})$ is:

    $$
    \tilde{zv}_{12}=1,\qquad \tilde{zv}_{33}=\tfrac{4}{5},\quad \tilde{zv}_{35}=\tfrac{1}{5},\qquad \tilde{zv}_{45}=\tfrac{4}{5},
    \qquad \tilde{\vet y}=(1,0,1,1,0),
    $$

    and all the other variables $zv_{tk}$ are zero. It is the optimal plan $\tilde{\vet x}=(3,0,4,4,0)$, which is not a path: in period $3$ it produces $4$ units, more than the demand $3$ of period $3$, and less than the demand $7$ of the periods $3$ and $4$. It is the combination, with weights $\tfrac{4}{5}$ and $\tfrac{1}{5}$, of the paths $0\to2\to3\to5$ (plan $(3,0,3,5,0)$) and $0\to2\to5$ (plan $(3,0,8,0,0)$). The quantities are $x_1=D_{1,2}\,zv_{12}=3$, $x_3=3\cdot\tfrac{4}{5}+8\cdot\tfrac{1}{5}=4$ and $x_4=5\cdot\tfrac{4}{5}=4$. The optimal value $z(\mathrm{MIP}^{\mathrm{SP}}_{\mathrm{CLSP}})$ is

    $$
    \underbrace{3 \cdot 50}_{\text{setups}} + \underbrace{10 \cdot 1 + 0 \cdot \tfrac{4}{5} + 60 \cdot \tfrac{1}{5} + 10 \cdot \tfrac{4}{5}}_{=\,30} = 180.
    $$

!!! chiave ""

    To obtain an LP relaxation of the $\mathrm{MIP}^{\mathrm{SP}}_{\mathrm{CLSP}}$ model, we relax constraints $\eqref{SP6}$ into the bounds $0\le y_t\le 1$. The obtained LP model reads as follows:

    <a id="eq-CLS-LPSP"></a>

    \begin{align*}
    &&\min ~~ \sum_{t \in T} sc_{t}\,y_{t} + \sum_{t \in T}\sum_{k=t}^{m} cv_{tk}\,zv_{tk} \label{obj:CLS-LPSP} \tag{15.4a}\\[1ex]
    && \text{subject to}\quad \sum_{k=1}^{m} zv_{1k} &= 1, \label{LPSP1} \tag{15.4b}\\[1ex]
    && \sum_{u=1}^{t-1}zv_{u,t-1} - \sum_{k=t}^{m}zv_{tk} &= 0, & \forall t\in T\setminus\{1\}, \label{LPSP2} \tag{15.4c}\\[1ex]
    && \sum_{k=t}^{m}zv_{tk} &\leq y_{t}, & \forall t\in T, \label{LPSP3} \tag{15.4d}\\[1ex]
    && \sum_{k=t}^{m} D_{t,k}\,zv_{tk} &\leq cap_t, & \forall t\in T, \label{LPSP4} \tag{15.4e}\\[1ex]
    && y_{t} & \le 1, & \forall t \in T, \label{LPSP5} \tag{15.4f}\\[1ex]
    && zv_{tk} & \geq 0, & \forall t,k\in T,~ k\geq t, \label{LPSP6} \tag{15.4g}\\[1ex]
    && y_{t} & \ge 0, & \forall t \in T. \label{LPSP7} \tag{15.4h}
    \end{align*}

    This LP model is referred to as the $\mathrm{LP}^{\mathrm{SP}}_{\mathrm{CLSP}}$ model.

<a id="box-5-ex-CLS-LPSP"></a>

!!! esempio "Example 15.5: $\mathrm{LP}^{\mathrm{SP}}_{\mathrm{CLSP}}$ model"

    The $\mathrm{LP}^{\mathrm{SP}}_{\mathrm{CLSP}}$ model for the CLS instance of <span style="color:#1971c2">[Example 15.1](#box-1-ex-CLS-ref)</span> is:

    $$
    \begin{array}{rlcl}
    {\min} & {50\,y_1+50\,y_2+50\,y_3+50\,y_4+50\,y_5+10\,zv_{12}+70\,zv_{13}} &  &  \\
    & {+190\,zv_{14}+230\,zv_{15}+30\,zv_{23}+110\,zv_{24}+140\,zv_{25}+40\,zv_{34}} &  &  \\
    & {+60\,zv_{35}+10\,zv_{45}} &  &  \\[1ex]
    \text{subject to} & {zv_{11}+zv_{12}+zv_{13}+zv_{14}+zv_{15}} & {=} & {1} \\
    & {zv_{11}-zv_{22}-zv_{23}-zv_{24}-zv_{25}} & {=} & {0} \\
    & {zv_{12}+zv_{22}-zv_{33}-zv_{34}-zv_{35}} & {=} & {0} \\
    & {zv_{13}+zv_{23}+zv_{33}-zv_{44}-zv_{45}} & {=} & {0} \\
    & {zv_{14}+zv_{24}+zv_{34}+zv_{44}-zv_{55}} & {=} & {0} \\
    & {zv_{11}+zv_{12}+zv_{13}+zv_{14}+zv_{15}-y_1} & {\le} & {0} \\
    & {zv_{22}+zv_{23}+zv_{24}+zv_{25}-y_2} & {\le} & {0} \\
    & {zv_{33}+zv_{34}+zv_{35}-y_3} & {\le} & {0} \\
    & {zv_{44}+zv_{45}-y_4} & {\le} & {0} \\
    & {zv_{55}-y_5} & {\le} & {0} \\
    & {2\,zv_{11}+3\,zv_{12}+6\,zv_{13}+10\,zv_{14}+11\,zv_{15}} & {\le} & {4} \\
    & {zv_{22}+4\,zv_{23}+8\,zv_{24}+9\,zv_{25}} & {\le} & {4} \\
    & {3\,zv_{33}+7\,zv_{34}+8\,zv_{35}} & {\le} & {4} \\
    & {4\,zv_{44}+5\,zv_{45}} & {\le} & {4} \\
    & {zv_{55}} & {\le} & {4} \\
    & {y_1} & {\le} & {1} \\
    & {y_2} & {\le} & {1} \\
    & {y_3} & {\le} & {1} \\
    & {y_4} & {\le} & {1} \\
    & {y_5} & {\le} & {1} \\[1ex]
    & {zv_{11},~zv_{12},~zv_{13},~\dots,~zv_{55}} & {\ge} & {0} \\
    & {y_1,~y_2,~y_3,~y_4,~y_5} & {\ge} & {0}
    \end{array}
    $$

    An optimal solution $(\tilde{\vet{zv}},\tilde{\vet y})(\mathrm{LP}^{\mathrm{SP}}_{\mathrm{CLSP}})$ is:

    $$
    \tilde{zv}_{12}=1,\qquad \tilde{zv}_{33}=\tfrac{4}{5},\quad \tilde{zv}_{35}=\tfrac{1}{5},\qquad \tilde{zv}_{45}=\tfrac{4}{5},
    \qquad \tilde{\vet y}=(1,0,1,\tfrac{4}{5},0),
    $$

    and all the other variables $zv_{tk}$ are zero: the arcs of the optimal plan, with the setup of period $4$ paid only for the fraction $\tfrac{4}{5}$. The optimal value $z(\mathrm{LP}^{\mathrm{SP}}_{\mathrm{CLSP}})$ is $180-\tfrac{1}{5}\cdot 50=170$.

## 15.4 Comparing the formulations

- The formulations have the same optimal value $z(\mathrm{ILP}_{\mathrm{CLSP}})=z(\mathrm{MIP}^{\mathrm{SP}}_{\mathrm{CLSP}})=180$, but their LP relaxations have different optimal values. On the reference instance the lower bounds, computed with the exact simplex algorithm and checked with Gurobi, are the following.

- The last column is the gap of Chapter «Combinatorial optimization problems» between the bound and the optimal value; it is undefined for the bound $0$.

<div class="tabella" markdown="0"><table>
<tr>
<th>Model</th>
<th>Lower bound</th>
<th>Gap <span class="arithmatex">\(\frac{180-\LB}{\LB}\)</span></th>
</tr>
<tr>
<td>Without setups</td>
<td><span class="arithmatex">\(0\)</span></td>
<td>undefined</td>
</tr>
<tr>
<td><span class="arithmatex">\(\mathrm{LP}_{\mathrm{CLSP}}^{\mathrm{dem}}\)</span> (<span class="arithmatex">\(M_t=D_{t,m}\)</span>)</td>
<td><span class="arithmatex">\(99.65\)</span></td>
<td><span class="arithmatex">\(80.6\%\)</span></td>
</tr>
<tr>
<td><span class="arithmatex">\(\mathrm{LP}_{\mathrm{CLSP}}^{\mathrm{cap}}\)</span> (<span class="arithmatex">\(M_t=cap_t\)</span>)</td>
<td><span class="arithmatex">\(137.50\)</span></td>
<td><span class="arithmatex">\(30.9\%\)</span></td>
</tr>
<tr>
<td><span class="arithmatex">\(\mathrm{LP}_{\mathrm{CLSP}}^{\mathrm{strong}}\)</span> (<span class="arithmatex">\(M_t=\min\{cap_t,D_{t,m}\}\)</span>)</td>
<td><span class="arithmatex">\(157.50\)</span></td>
<td><span class="arithmatex">\(14.3\%\)</span></td>
</tr>
<tr>
<td><span class="arithmatex">\(\mathrm{LP}_{\mathrm{CLSP}}^{\mathrm{SP}}\)</span> (shortest path)</td>
<td><span class="arithmatex">\(170\)</span></td>
<td><span class="arithmatex">\(5.9\%\)</span></td>
</tr>
</table></div>

- The bound $170$ of the shortest-path formulation is the optimal value of the problem without capacity (plan $(3,0,8,0,0)$, of cost $170$): the capacity constraints $\eqref{LPSP4}$ act only on the quantities, and a combination of paths can satisfy them.

- The price of the shortest-path formulation is its size: there are $O(m^2)$ variables $zv_{tk}$, against the $O(m)$ variables of the big-M formulation.

## 15.5 Several products, setup times and initial inventory

- In the general problem a set $P$ of products shares the resource of each period. We write $d_{pt}$, $sc_{pt}$, $vc_{pt}$ and $hc_{pt}$ for the data of product $p \in P$ in period $t \in T$. Producing a unit of $p$ takes the time $vt_{pt} \in \Z_{\ge 1}$, a setup takes the time $st_{pt} \in \Z_{\ge 0}$, and the capacity $cap_t$ is a time. The initial inventory $si_p \in \Z_{\ge 0}$ of product $p$ is a decision, bought at the cost $fc_p$ per unit.

- For $j\le k$ we write $sd_{pjk}=\sum_{u=j}^{k} d_{pu}$ for the demand of product $p$ in the periods $j,\dots,k$. The variables are $x_{pt}$, $s_{pt}$, $si_p$ and $y_{pt}$, with the meaning of the single-product model.

!!! chiave ""

    Using these variables, an ILP model for the CLS with several products, setup times and initial inventory reads as follows:

    <a id="eq-CLSP-bigM"></a>

    \begin{align*}
    &&\min ~~ \sum_{p \in P} fc_p\,si_p + {} \\
    && \sum_{p \in P}\sum_{t \in T} \left(sc_{pt}\,y_{pt} + vc_{pt}\,x_{pt} + hc_{pt}\,s_{pt} \right) \label{obj:CLSP} \tag{15.5a}\\[1ex]
    && \text{subject to}\quad si_{p} + x_{p1} & = d_{p1} + s_{p1}, & \forall p \in P, \label{CLSP:bal1} \tag{15.5b}\\[1ex]
    && s_{p,t-1} + x_{pt} & = d_{pt} + s_{pt}, & \forall p \in P,~\forall t\in T\setminus\{1\}, \label{CLSP:bal} \tag{15.5c}\\[1ex]
    && \sum_{p \in P}\left(st_{pt}\,y_{pt} + vt_{pt}\,x_{pt}\right) &\leq cap_t, & \forall t\in T, \label{CLSP:cap} \tag{15.5d}\\[1ex]
    && x_{pt} &\le M_{pt}\, y_{pt}, & \forall p \in P,~ \forall t\in T, \label{CLSP:M} \tag{15.5e}\\[1ex]
    && s_{pm} &= 0, & \forall p \in P, \label{CLSP:end} \tag{15.5f}\\[1ex]
    && x_{pt} &\in \Z_{\ge 0}, & \forall p \in P,~ \forall t\in T, \label{CLSP:x} \tag{15.5g}\\[1ex]
    && s_{pt} &\in \Z_{\ge 0}, & \forall p \in P,~ \forall t\in T, \label{CLSP:s} \tag{15.5h}\\[1ex]
    && si_{p} &\in \Z_{\ge 0}, & \forall p \in P, \label{CLSP:si} \tag{15.5i}\\[1ex]
    && y_{pt} &\in \{0,1\}, & \forall p \in P,~ \forall t\in T. \label{CLSP:y} \tag{15.5j}
    \end{align*}

    This ILP model is referred to as the $\mathrm{ILP}_{\mathrm{CLSP}}^{P}$ model.

- Description of the objective function and constraints of the $\mathrm{ILP}_{\mathrm{CLSP}}^{P}$ model:

    - the linear objective function $\eqref{obj:CLSP}$ minimizes the cost of the initial inventory, of the setups, of the production and of the holding;

    - constraints $\eqref{CLSP:bal1}$ and $\eqref{CLSP:bal}$ are the flow balancing constraints of every product, with the initial inventory $si_p$ in the first period;

    - constraints $\eqref{CLSP:cap}$ impose that the setup times and the production times of each period do not exceed its capacity; constraints $\eqref{CLSP:M}$ link the quantities with the setups;

    - constraints $\eqref{CLSP:end}$ impose an empty inventory at the end of the horizon;

    - finally, constraints $\eqref{CLSP:x}$–$\eqref{CLSP:y}$ define the variables of the ILP model.

- The strong big-M value is

    $$
    M_{pt}=\min\left\{\left\lfloor\frac{cap_t-st_{pt}}{vt_{pt}}\right\rfloor,~sd_{ptm}\right\}.
    $$

!!! chiave ""

    To obtain an LP relaxation of the $\mathrm{ILP}_{\mathrm{CLSP}}^{P}$ model, we relax constraints $\eqref{CLSP:x}$–$\eqref{CLSP:y}$ into non-negativity constraints and the bounds $y_{pt}\le 1$. The obtained LP model reads as follows:

    <a id="eq-CLSP-LP"></a>

    \begin{align*}
    &&\min ~~ \sum_{p \in P} fc_p\,si_p + {} \\
    && \sum_{p \in P}\sum_{t \in T} \left(sc_{pt}\,y_{pt} + vc_{pt}\,x_{pt} + hc_{pt}\,s_{pt} \right) \label{obj:CLSP-LP} \tag{15.6a}\\[1ex]
    && \text{subject to}\quad si_{p} + x_{p1} & = d_{p1} + s_{p1}, & \forall p \in P, \label{CLSPLP:bal1} \tag{15.6b}\\[1ex]
    && s_{p,t-1} + x_{pt} & = d_{pt} + s_{pt}, & \forall p \in P,~\forall t\in T\setminus\{1\}, \label{CLSPLP:bal} \tag{15.6c}\\[1ex]
    && \sum_{p \in P}\left(st_{pt}\,y_{pt} + vt_{pt}\,x_{pt}\right) &\leq cap_t, & \forall t\in T, \label{CLSPLP:cap} \tag{15.6d}\\[1ex]
    && x_{pt} &\le M_{pt}\, y_{pt}, & \forall p \in P,~ \forall t\in T, \label{CLSPLP:M} \tag{15.6e}\\[1ex]
    && s_{pm} &= 0, & \forall p \in P, \label{CLSPLP:end} \tag{15.6f}\\[1ex]
    && y_{pt} &\le 1, & \forall p \in P,~ \forall t\in T, \label{CLSPLP:ub} \tag{15.6g}\\[1ex]
    && x_{pt},\; s_{pt},\; y_{pt} &\ge 0, & \forall p \in P,~ \forall t\in T, \label{CLSPLP:nn} \tag{15.6h}\\[1ex]
    && si_{p} &\ge 0, & \forall p \in P. \label{CLSPLP:si} \tag{15.6i}
    \end{align*}

    This LP model is referred to as the $\mathrm{LP}_{\mathrm{CLSP}}^{P}$ model.

- In the shortest-path formulation each product has its own network, with an additional continuous variable $w_{pt}\ge 0$, the arc from node $0$ to node $t$, for the fraction of the initial inventory that covers the demands of the first $t$ periods. The costs of the arcs are

    $$
    cv_{ptk}=vc_{pt}\,sd_{ptk}+\sum_{s=t+1}^{k}\sum_{u=t}^{s-1}hc_{pu}\,d_{ps},
    \qquad
    ci_{pt}=fc_p\,sd_{p1t}+\sum_{s=2}^{t}\sum_{u=1}^{s-1}hc_{pu}\,d_{ps}.
    $$

!!! chiave ""

    Using these variables, a MIP model for the CLS with several products, setup times and initial inventory reads as follows:

    <a id="eq-CLSP-SP"></a>

    \begin{align*}
    &&\min ~~ \sum_{p \in P}\sum_{t \in T}\left(sc_{pt}\,y_{pt} + ci_{pt}\,w_{pt}\right) + {} \\
    && \sum_{p \in P}\sum_{t \in T}\sum_{k=t}^{m} cv_{ptk}\,zv_{ptk} \label{obj:CLSP-SP} \tag{15.7a}\\[1ex]
    && \text{subject to}\quad \sum_{k=1}^{m}\left(w_{pk}+zv_{p1k}\right) &= 1, & \forall p \in P, \label{CLSPSP1} \tag{15.7b}\\[1ex]
    && w_{p,t-1}+\sum_{u=1}^{t-1}zv_{p,u,t-1} - \sum_{k=t}^{m}zv_{ptk} &= 0, & \forall p \in P,~\forall t\in T\setminus\{1\}, \label{CLSPSP2} \tag{15.7c}\\[1ex]
    && \sum_{k=t}^{m}zv_{ptk} &\leq y_{pt}, & \forall p \in P,~\forall t\in T, \label{CLSPSP3} \tag{15.7d}\\[1ex]
    && \sum_{p\in P}st_{pt}\,y_{pt}+\sum_{p\in P}\sum_{k=t}^{m} vt_{pt}\,sd_{ptk}\,zv_{ptk} &\leq cap_t, & \forall t\in T, \label{CLSPSP4} \tag{15.7e}\\[1ex]
    && zv_{ptk} & \geq 0, & \forall p \in P,~\forall t,k\in T,~ k\geq t, \label{CLSPSP5} \tag{15.7f}\\[1ex]
    && w_{pt} & \geq 0, & \forall p \in P,~\forall t\in T, \label{CLSPSP6} \tag{15.7g}\\[1ex]
    && y_{pt} & \in \{0, 1\}, & \forall p \in P,~\forall t \in T. \label{CLSPSP7} \tag{15.7h}
    \end{align*}

    This MIP model is referred to as the $\mathrm{MIP}^{\mathrm{SP},P}_{\mathrm{CLSP}}$ model. Relaxing constraints $\eqref{CLSPSP7}$ into $0\le y_{pt}\le 1$ gives the LP model referred to as the $\mathrm{LP}^{\mathrm{SP},P}_{\mathrm{CLSP}}$ model.

<a id="box-6-ex-CLSP-inst"></a>

!!! esempio "Example 15.6: two products"

    We consider $|P|=2$ products and $m=3$ periods, with capacities $cap_1=2500$, $cap_2=2100$, $cap_3=2500$, the initial inventory costs $fc_1=fc_2=3000$ and the setup costs $sc_{pt}=10000$. The other data are:

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
    <td><span class="arithmatex">\(\mathrm{LP}_{\mathrm{CLSP}}^{P}\)</span> with <span class="arithmatex">\(M_{pt}=sd_{ptm}\)</span></td>
    <td><span class="arithmatex">\(638\,882.20\)</span></td>
    </tr>
    <tr>
    <td><span class="arithmatex">\(\mathrm{LP}_{\mathrm{CLSP}}^{P}\)</span> with the strong <span class="arithmatex">\(M_{pt}\)</span></td>
    <td><span class="arithmatex">\(651\,267.37\)</span></td>
    </tr>
    <tr>
    <td><span class="arithmatex">\(\mathrm{LP}^{\mathrm{SP},P}_{\mathrm{CLSP}}\)</span></td>
    <td><span class="arithmatex">\(668\,928.57\)</span></td>
    </tr>
    <tr>
    <td><span class="arithmatex">\(\mathrm{ILP}_{\mathrm{CLSP}}^{P}\)</span> (integer optimum)</td>
    <td><span class="arithmatex">\(677\,400\)</span></td>
    </tr>
    </table></div>

    The optimal solution of the $\mathrm{ILP}_{\mathrm{CLSP}}^{P}$ model is unique: $x_{11}=59$, $x_{12}=200$, $x_{13}=10$, $x_{21}=110$, $x_{22}=0$, $x_{23}=150$, $si_1=41$, with a setup in every period except for product $2$ in period $2$.

## 15.6 Typical mistakes

!!! attenzione "Warning"

    - <strong>Taking a big-M value that is too small.</strong> A value smaller than the production of a feasible plan cuts off that plan: the values $D_{t,m}$ and $cap_t$ are both valid.

    - <strong>Taking a big-M value that is too large.</strong> Every valid value gives a correct model, but a large value gives a weak relaxation: the setup variables become almost zero in the LP solutions, as in the bound $99.65$ of the reference instance.

    - <strong>Forgetting the setup times in the capacity constraints.</strong> With several products the constraints contain $st_{pt}\,y_{pt}$ besides $vt_{pt}\,x_{pt}$.

    - <strong>Counting the holding cost of the demand of the production period.</strong> In $cv_{tk}$ the units for period $t$ are not stored: the holding sum starts from the demand of period $t+1$.

    - <strong>Believing that the shortest-path formulation needs binary paths.</strong> The variables $zv_{tk}$ are continuous: a feasible plan that is not a path is a combination of paths.

## 15.7 In summary

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
    <td><span class="arithmatex">\(z(\mathrm{LP}_{\mathrm{CLSP}}^{\mathrm{dem}})=\tfrac{9865}{99}\)</span></td>
    </tr>
    <tr>
    <td>Big-M, <span class="arithmatex">\(M_t=cap_t\)</span></td>
    <td><span class="arithmatex">\(137.5\)</span></td>
    <td><span class="arithmatex">\(z(\mathrm{LP}_{\mathrm{CLSP}}^{\mathrm{cap}})\)</span></td>
    </tr>
    <tr>
    <td>Strong big-M</td>
    <td><span class="arithmatex">\(157.5\)</span></td>
    <td><span class="arithmatex">\(z(\mathrm{LP}_{\mathrm{CLSP}}^{\mathrm{strong}})\)</span></td>
    </tr>
    <tr>
    <td>Shortest path</td>
    <td><span class="arithmatex">\(170\)</span></td>
    <td><span class="arithmatex">\(z(\mathrm{LP}_{\mathrm{CLSP}}^{\mathrm{SP}})\)</span></td>
    </tr>
    <tr>
    <td>Optimal value</td>
    <td><span class="arithmatex">\(180\)</span></td>
    <td>plan <span class="arithmatex">\((3,0,4,4,0)\)</span></td>
    </tr>
    </table></div>

---

**Exercises on this chapter:** [:material-pencil: Lot sizing](../exercises/lot-sizing-formulations.md)
