---
title: "Capacitated lot sizing"
---

# 15.2 ILP models for the Capacitated Lot Sizing Problem { #sez-sec-lsf-CLS }

<div class="info-capitolo" markdown>

**Part 2 · Formulations and their properties · Chapter 15** · [:material-book-open-variant: Chapter 15: Lot sizing problems](index.md) · [:material-file-pdf-box: Lecture notes, volume 2 (PDF)](../../pdf/lecture-notes-2-formulations.pdf) · [:material-pencil: Exercises: Lot sizing problems](../../exercises/lot-sizing-formulations.md)

</div>

- The CLS has two formulations: the big-$M$ formulation $\mathrm{ILP}_{\mathrm{CLSP}}$ of Section [15.3](#sez-sec-lsf-bigM) and the shortest-path formulation $\mathrm{MIP}^{\mathrm{SP}}_{\mathrm{CLSP}}$ of Section [15.5](#sez-sec-lsf-SP).

- Section [15.6](#sez-sec-lsf-compare) compares the bounds of their Linear Programming relaxations on the reference instance.

## 15.3 A formulation with a big-M link { #sez-sec-lsf-bigM }

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

### 15.3.1 Weak and strong big-M values

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

    This is the reference instance of the chapter «Lot sizing problems». The big-M values are:

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

    The optimal value $z(\mathrm{ILP}_{\mathrm{CLSP}})$ is $3\cdot 50+3\cdot 10=180$, the cost of the optimal plan of the chapter «Lot sizing problems». The weak big-M values give the same optimal solution.

## 15.4 The Linear Programming relaxation of the big-M formulation

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

## 15.5 A shortest-path formulation { #sez-sec-lsf-SP }

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

![Figure 1](../../img/lot-sizing-formulations/fig01.svg){ .fig loading=lazy  }

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

## 15.6 Comparing the formulations { #sez-sec-lsf-compare }

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

---

**Next:** [15.7 ILP models for the variants](ilp-models-for-the-variants.md)
