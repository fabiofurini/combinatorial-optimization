---
title: "Variants"
---

# 15.7 ILP models for the variants { #sez-sec-lsf-variants }

<div class="info-capitolo" markdown>

**Part 2 · Formulations and their properties · Chapter 15** · [:material-book-open-variant: Chapter 15: Lot sizing problems](index.md) · [:material-file-pdf-box: Lecture notes, volume 2 (PDF)](../../pdf/lecture-notes-2-formulations.pdf) · [:material-presentation: Slides](../../pdf/slides-lot-sizing-formulations.pdf) · [:material-pencil: Exercises: Lot sizing problems](../../exercises/lot-sizing-formulations.md)

</div>

The problems of this section are the variants of the capacitated lot sizing problem defined in [Chapter 8 «Lot sizing problems», Section 8.6](https://fabiofurini.github.io/combinatorial-optimization/combinatorial-optimization-problems/lot-sizing/variants/). Each subsection writes the ILP model of one variant, in the order of that chapter.

## 15.7.1 The uncapacitated lot sizing problem

- Given a set $T=\{1,2,\dots,m\}$ of periods with demands $d_t$ and no binding capacity, we introduce, for every period $t \in T$, the following <strong>integer variables</strong> and <strong>binary variables</strong>:

    $$
    x_t \in \Z_{\ge 0}~\text{(production)},\qquad s_t \in \Z_{\ge 0}~\text{(inventory at the end of the period)},
    $$

    $$
    y_t=\begin{cases}
    1 & \text{if there is a setup in period $t$}\\[1.5ex]
    0 & \text{otherwise}
    \end{cases}
    $$

- Since $s_m=0$, the production of period $t$ is at most the demand $D_{t,m}$ of the periods $t,\dots,m$: this is the big-M value of the link between $x_t$ and $y_t$.

!!! chiave ""

    Using these variables, an Integer Linear Programming (ILP) model for the uncapacitated lot sizing problem (ULS) reads as follows:

    <a id="eq-ULS-model"></a>

    \begin{align*}
    && \min ~~ \sum_{t \in T} \left(sc_t\, y_t + vc_t\, x_t + hc_t\, s_t\right) \label{ULS:obj} \tag{15.5a}\\[1ex]
    && \text{subject to} \quad s_{t-1} + x_t & = d_t + s_t, & \forall t \in T, \label{ULS:bal} \tag{15.5b}\\[1ex]
    && x_t & \le D_{t,m}\, y_t, & \forall t \in T, \label{ULS:big} \tag{15.5c}\\[1ex]
    && s_0 = s_m & = 0, \label{ULS:end} \tag{15.5d}\\[1ex]
    && x_t & \in \Z_{\ge 0}, & \forall t \in T, \label{ULS:domx} \tag{15.5e}\\[1ex]
    && s_t & \in \Z_{\ge 0}, & \forall t \in T, \label{ULS:doms} \tag{15.5f}\\[1ex]
    && y_t & \in \{0,1\}, & \forall t \in T. \label{ULS:domy} \tag{15.5g}
    \end{align*}

    This ILP model is referred to as the $\mathrm{ILP}_{\mathrm{ULS}}$ model.

- Description of the objective function and constraints of the $\mathrm{ILP}_{\mathrm{ULS}}$ model:

    - the linear objective function $\eqref{ULS:obj}$ minimizes the cost of the setups, of the production and of the holding;

    - constraints $\eqref{ULS:bal}$ are the flow balancing constraints ($m$ linear constraints);

    - constraints $\eqref{ULS:big}$ force a setup in every period with positive production ($m$ linear constraints);

    - constraint $\eqref{ULS:end}$ imposes an empty inventory at the beginning and at the end of the horizon;

    - finally, constraints $\eqref{ULS:domx}$–$\eqref{ULS:domy}$ define the variables of the ILP model.

- The $\mathrm{ILP}_{\mathrm{ULS}}$ model is the $\mathrm{ILP}_{\mathrm{CLSP}}$ model without the capacity constraints [(15.1d)](ilp-models-for-the-capacitated-lot-sizing-problem.md#mjx-eqn:CL1:cap) and with the big-M values $M_t=D_{t,m}$. The DP algorithm of Wagner and Whitin of [Chapter 25 «DP for the uncapacitated lot sizing problem»](https://fabiofurini.github.io/combinatorial-optimization/dynamic-programming/dp-lot-sizing/) solves the ULS in polynomial time.

<a id="box-6-ex-ULS-ILP"></a>

!!! esempio "Example 15.6: $\mathrm{ILP}_{\mathrm{ULS}}$ model"

    We consider the CLS instance of <span style="color:#1971c2">[Example 15.1](ilp-models-for-the-capacitated-lot-sizing-problem.md#box-1-ex-CLS-ref)</span> without the capacities: the demands are $\vet d=(2,1,3,4,1)$, the setup costs $sc_t=50$, the holding costs $hc_t=10$, and $vc_t=0$. The big-M values are $D_{t,5}=(11,9,8,5,1)$, and the $\mathrm{ILP}_{\mathrm{ULS}}$ model for this ULS instance is:

    $$
    \begin{array}{rlcl}
    {\min} & {50\,y_1+50\,y_2+50\,y_3+50\,y_4+50\,y_5+10\,s_1} &  &  \\
    & {+10\,s_2+10\,s_3+10\,s_4+10\,s_5} &  &  \\[1ex]
    \text{subject to} & {x_1-s_1} & {=} & {2} \\
    & {s_1+x_2-s_2} & {=} & {1} \\
    & {s_2+x_3-s_3} & {=} & {3} \\
    & {s_3+x_4-s_4} & {=} & {4} \\
    & {s_4+x_5-s_5} & {=} & {1} \\
    & {x_1-11\,y_1} & {\le} & {0} \\
    & {x_2-9\,y_2} & {\le} & {0} \\
    & {x_3-8\,y_3} & {\le} & {0} \\
    & {x_4-5\,y_4} & {\le} & {0} \\
    & {x_5-y_5} & {\le} & {0} \\
    & {s_5} & {=} & {0} \\[1ex]
    & {x_1,~x_2,~x_3,~x_4,~x_5} & {\in} & {\Z_{\ge 0}} \\
    & {s_1,~s_2,~s_3,~s_4,~s_5} & {\in} & {\Z_{\ge 0}} \\
    & {y_1,~y_2,~y_3,~y_4,~y_5} & {\in} & {\{0,1\}}
    \end{array}
    $$

    An optimal solution $(\tilde{\vet y},\tilde{\vet x},\tilde{\vet s})(\mathrm{ILP}_{\mathrm{ULS}})$ is:

    $$
    \tilde{\vet y}=(1,0,1,0,0),\qquad \tilde{\vet x}=(3,0,8,0,0),\qquad \tilde{\vet s}=(1,0,5,1,0)
    $$

    The optimal value $z(\mathrm{ILP}_{\mathrm{ULS}})$ is $2\cdot 50+(1+5+1)\cdot 10=170$, the bound of the shortest-path formulation of the CLS. The optimal solution is not unique: the plan $(3,0,3,5,0)$, with three setups and the stocks $(1,0,0,1,0)$, also costs $3\cdot 50+2\cdot 10=170$.

## 15.7.2 Several products and setup times

- A set $P$ of products shares the resource of each period. We write $d_{pt}$, $sc_{pt}$, $vc_{pt}$ and $hc_{pt}$ for the data of product $p \in P$ in period $t \in T$. Producing a unit of $p$ takes the time $vt_{pt} \in \Z_{\ge 1}$, a setup takes the time $st_{pt} \in \Z_{\ge 0}$, and the capacity $cap_t$ is a time. For $j\le k$ we write $sd_{pjk}=\sum_{u=j}^{k} d_{pu}$ for the demand of product $p$ in the periods $j,\dots,k$.

- We introduce, for every product $p \in P$ and every period $t \in T$, the following <strong>integer variables</strong> and <strong>binary variables</strong>:

    $$
    x_{pt} \in \Z_{\ge 0}~\text{(production)},\qquad s_{pt} \in \Z_{\ge 0}~\text{(inventory at the end of the period)},
    $$

    $$
    y_{pt}=\begin{cases}
    1 & \text{if there is a setup of product $p$ in period $t$}\\[1.5ex]
    0 & \text{otherwise}
    \end{cases}
    $$

    The inventories at the beginning of the horizon are the constants $s_{p0}=0$.

!!! chiave ""

    Using these variables, an Integer Linear Programming (ILP) model for the lot sizing problem with several products and setup times (MLS) reads as follows:

    <a id="eq-CLSPm-bigM"></a>

    \begin{align*}
    &&\min ~~ \sum_{p \in P}\sum_{t \in T} \left(sc_{pt}\,y_{pt} + vc_{pt}\,x_{pt} + hc_{pt}\,s_{pt} \right) \label{obj:CLSPm} \tag{15.6a}\\[1ex]
    && \text{subject to}\quad s_{p,t-1} + x_{pt} & = d_{pt} + s_{pt}, & \forall p \in P,~\forall t\in T, \label{CLSPm:bal} \tag{15.6b}\\[1ex]
    && \sum_{p \in P}\left(st_{pt}\,y_{pt} + vt_{pt}\,x_{pt}\right) &\leq cap_t, & \forall t\in T, \label{CLSPm:cap} \tag{15.6c}\\[1ex]
    && x_{pt} &\le M_{pt}\, y_{pt}, & \forall p \in P,~ \forall t\in T, \label{CLSPm:M} \tag{15.6d}\\[1ex]
    && s_{p0} = s_{pm} &= 0, & \forall p \in P, \label{CLSPm:end} \tag{15.6e}\\[1ex]
    && x_{pt} &\in \Z_{\ge 0}, & \forall p \in P,~ \forall t\in T, \label{CLSPm:x} \tag{15.6f}\\[1ex]
    && s_{pt} &\in \Z_{\ge 0}, & \forall p \in P,~ \forall t\in T, \label{CLSPm:s} \tag{15.6g}\\[1ex]
    && y_{pt} &\in \{0,1\}, & \forall p \in P,~ \forall t\in T. \label{CLSPm:y} \tag{15.6h}
    \end{align*}

    This ILP model is referred to as the $\mathrm{ILP}_{\mathrm{CLSP}}^{P}$ model.

- Description of the objective function and constraints of the $\mathrm{ILP}_{\mathrm{CLSP}}^{P}$ model:

    - the linear objective function $\eqref{obj:CLSPm}$ minimizes the cost of the setups, of the production and of the holding of all the products;

    - constraints $\eqref{CLSPm:bal}$ are the flow balancing constraints of every product ($|P|\,m$ linear constraints);

    - constraints $\eqref{CLSPm:cap}$ impose that the setup times and the production times of each period do not exceed its capacity ($m$ linear constraints);

    - constraints $\eqref{CLSPm:M}$ link the quantities with the setups ($|P|\,m$ linear constraints);

    - constraints $\eqref{CLSPm:end}$ impose an empty inventory at the beginning and at the end of the horizon;

    - finally, constraints $\eqref{CLSPm:x}$–$\eqref{CLSPm:y}$ define the variables of the ILP model.

- A setup of $p$ in period $t$ leaves the time $cap_t-st_{pt}$ for the production, and $s_{pm}=0$ bounds the production by the remaining demand. The strong big-M value is

    $$
    M_{pt}=\min\left\{\left\lfloor\frac{cap_t-st_{pt}}{vt_{pt}}\right\rfloor,~sd_{ptm}\right\}.
    $$

- The products interact only through the capacity constraints $\eqref{CLSPm:cap}$: without them, the model splits into $|P|$ independent single-product models.

<a id="box-7-ex-CLSPm"></a>

!!! esempio "Example 15.7: $\mathrm{ILP}_{\mathrm{CLSP}}^{P}$ model"

    We consider $|P|=2$ products and $m=3$ periods, with capacities $cap_t=9$, production times $vt_{pt}=1$, setup times $st_{pt}=1$, holding costs $hc_{pt}=5$ and production costs $vc_{pt}=0$. The setup costs are $sc_{1t}=30$ and $sc_{2t}=40$, and the demands are:

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
    <td><span class="arithmatex">\(3\)</span></td>
    <td><span class="arithmatex">\(2\)</span></td>
    <td><span class="arithmatex">\(4\)</span></td>
    <td><span class="arithmatex">\(2\)</span></td>
    <td><span class="arithmatex">\(4\)</span></td>
    <td><span class="arithmatex">\(1\)</span></td>
    </tr>
    <tr>
    <td><span class="arithmatex">\(sd_{ptm}\)</span></td>
    <td><span class="arithmatex">\(9\)</span></td>
    <td><span class="arithmatex">\(6\)</span></td>
    <td><span class="arithmatex">\(4\)</span></td>
    <td><span class="arithmatex">\(7\)</span></td>
    <td><span class="arithmatex">\(5\)</span></td>
    <td><span class="arithmatex">\(1\)</span></td>
    </tr>
    <tr>
    <td><span class="arithmatex">\(M_{pt}\)</span></td>
    <td><span class="arithmatex">\(8\)</span></td>
    <td><span class="arithmatex">\(6\)</span></td>
    <td><span class="arithmatex">\(4\)</span></td>
    <td><span class="arithmatex">\(7\)</span></td>
    <td><span class="arithmatex">\(5\)</span></td>
    <td><span class="arithmatex">\(1\)</span></td>
    </tr>
    </table></div>

    The $\mathrm{ILP}_{\mathrm{CLSP}}^{P}$ model with the strong big-M values for this instance is:

    $$
    \begin{array}{rlcl}
    {\min} & {30\,y_{11}+30\,y_{12}+30\,y_{13}+40\,y_{21}+40\,y_{22}+40\,y_{23}} &  &  \\
    & {+5\,s_{11}+5\,s_{12}+5\,s_{13}+5\,s_{21}+5\,s_{22}+5\,s_{23}} &  &  \\[1ex]
    \text{subject to} & {x_{11}-s_{11}} & {=} & {3} \\
    & {s_{11}+x_{12}-s_{12}} & {=} & {2} \\
    & {s_{12}+x_{13}-s_{13}} & {=} & {4} \\
    & {x_{21}-s_{21}} & {=} & {2} \\
    & {s_{21}+x_{22}-s_{22}} & {=} & {4} \\
    & {s_{22}+x_{23}-s_{23}} & {=} & {1} \\
    & {x_{11}+x_{21}+y_{11}+y_{21}} & {\le} & {9} \\
    & {x_{12}+x_{22}+y_{12}+y_{22}} & {\le} & {9} \\
    & {x_{13}+x_{23}+y_{13}+y_{23}} & {\le} & {9} \\
    & {x_{11}-8\,y_{11}} & {\le} & {0} \\
    & {x_{12}-6\,y_{12}} & {\le} & {0} \\
    & {x_{13}-4\,y_{13}} & {\le} & {0} \\
    & {x_{21}-7\,y_{21}} & {\le} & {0} \\
    & {x_{22}-5\,y_{22}} & {\le} & {0} \\
    & {x_{23}-y_{23}} & {\le} & {0} \\
    & {s_{13}} & {=} & {0} \\
    & {s_{23}} & {=} & {0} \\[1ex]
    & {x_{11},~x_{12},~x_{13},~x_{21},~x_{22},~x_{23}} & {\in} & {\Z_{\ge 0}} \\
    & {s_{11},~s_{12},~s_{13},~s_{21},~s_{22},~s_{23}} & {\in} & {\Z_{\ge 0}} \\
    & {y_{11},~y_{12},~y_{13},~y_{21},~y_{22},~y_{23}} & {\in} & {\{0,1\}}
    \end{array}
    $$

    An optimal solution $(\tilde{\vet y},\tilde{\vet x},\tilde{\vet s})(\mathrm{ILP}_{\mathrm{CLSP}}^{P})$ is:

    \begin{align*}
    &\tilde y_{11}=\tilde y_{13}=\tilde y_{21}=\tilde y_{22}=1,~~\tilde y_{12}=\tilde y_{23}=0,\\
    &\tilde x_{11}=5,~~\tilde x_{13}=4,~~\tilde x_{21}=2,~~\tilde x_{22}=5,~~\tilde x_{12}=\tilde x_{23}=0,\\
    &\tilde s_{11}=2,~~\tilde s_{22}=1,~~\text{all the other }\tilde s_{pt}=0
    \end{align*}

    The optimal value $z(\mathrm{ILP}_{\mathrm{CLSP}}^{P})$ is $2\cdot 30+2\cdot 40+(2+1)\cdot 5=155$, and the optimal solution is unique (Gurobi). Period $1$ uses its whole capacity, $5+2+1+1=9$. Without the capacity constraints product $2$ would be produced only in period $1$, with value $140$: this plan needs the time $5+7+1+1=14>9$.

## 15.7.3 Initial stock

- The data are those of the lot sizing problem with several products and setup times. In addition, the initial inventory of product $p$ is a decision, bought at the cost $fc_p$ per unit.

- We introduce the integer variables $x_{pt}$, $s_{pt}$ and the binary variables $y_{pt}$ of the $\mathrm{ILP}_{\mathrm{CLSP}}^{P}$ model, and, for every product $p\in P$, the following <strong>integer variable</strong>:

    $$
    si_p \in \Z_{\ge 0}~\text{(inventory of product $p$ at the beginning of the horizon)}.
    $$

!!! chiave ""

    Using these variables, an Integer Linear Programming (ILP) model for the lot sizing problem with initial stock (LS-SI) reads as follows:

    <a id="eq-CLSP-bigM"></a>

    \begin{align*}
    &&\min ~~ \sum_{p \in P} fc_p\,si_p + {} \\
    && \sum_{p \in P}\sum_{t \in T} \left(sc_{pt}\,y_{pt} + vc_{pt}\,x_{pt} + hc_{pt}\,s_{pt} \right) \label{obj:CLSP} \tag{15.7a}\\[1ex]
    && \text{subject to}\quad si_{p} + x_{p1} & = d_{p1} + s_{p1}, & \forall p \in P, \label{CLSP:bal1} \tag{15.7b}\\[1ex]
    && s_{p,t-1} + x_{pt} & = d_{pt} + s_{pt}, & \forall p \in P,~\forall t\in T\setminus\{1\}, \label{CLSP:bal} \tag{15.7c}\\[1ex]
    && \sum_{p \in P}\left(st_{pt}\,y_{pt} + vt_{pt}\,x_{pt}\right) &\leq cap_t, & \forall t\in T, \label{CLSP:cap} \tag{15.7d}\\[1ex]
    && x_{pt} &\le M_{pt}\, y_{pt}, & \forall p \in P,~ \forall t\in T, \label{CLSP:M} \tag{15.7e}\\[1ex]
    && s_{pm} &= 0, & \forall p \in P, \label{CLSP:end} \tag{15.7f}\\[1ex]
    && x_{pt} &\in \Z_{\ge 0}, & \forall p \in P,~ \forall t\in T, \label{CLSP:x} \tag{15.7g}\\[1ex]
    && s_{pt} &\in \Z_{\ge 0}, & \forall p \in P,~ \forall t\in T, \label{CLSP:s} \tag{15.7h}\\[1ex]
    && si_{p} &\in \Z_{\ge 0}, & \forall p \in P, \label{CLSP:si} \tag{15.7i}\\[1ex]
    && y_{pt} &\in \{0,1\}, & \forall p \in P,~ \forall t\in T. \label{CLSP:y} \tag{15.7j}
    \end{align*}

    This ILP model is referred to as the $\mathrm{ILP}_{\mathrm{CLSP}}^{\mathrm{SI}}$ model.

- Description of the objective function and constraints of the $\mathrm{ILP}_{\mathrm{CLSP}}^{\mathrm{SI}}$ model:

    - the linear objective function $\eqref{obj:CLSP}$ minimizes the cost of the initial inventory, of the setups, of the production and of the holding;

    - constraints $\eqref{CLSP:bal1}$ and $\eqref{CLSP:bal}$ are the flow balancing constraints of every product, with the initial inventory $si_p$ in the first period ($|P|\,m$ linear constraints);

    - constraints $\eqref{CLSP:cap}$ impose that the setup times and the production times of each period do not exceed its capacity ($m$ linear constraints); constraints $\eqref{CLSP:M}$ link the quantities with the setups ($|P|\,m$ linear constraints);

    - constraints $\eqref{CLSP:end}$ impose an empty inventory at the end of the horizon ($|P|$ linear constraints);

    - finally, constraints $\eqref{CLSP:x}$–$\eqref{CLSP:y}$ define the variables of the ILP model.

- The $\mathrm{ILP}_{\mathrm{CLSP}}^{\mathrm{SI}}$ model is the $\mathrm{ILP}_{\mathrm{CLSP}}^{P}$ model with the variables $si_p$ in place of the constants $s_{p0}=0$, and with their cost in the objective function; the strong big-M values $M_{pt}$ are the same.

<a id="box-8-ex-CLSP-inst"></a>

!!! esempio "Example 15.8: $\mathrm{ILP}_{\mathrm{CLSP}}^{\mathrm{SI}}$ model"

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

    The $\mathrm{ILP}_{\mathrm{CLSP}}^{\mathrm{SI}}$ model with the strong big-M values for this instance is:

    $$
    \begin{array}{rlcl}
    {\min} & {3000\,si_1+3000\,si_2+10000\,y_{11}+10000\,y_{12}+10000\,y_{13}+10000\,y_{21}} &  &  \\
    & {+10000\,y_{22}+10000\,y_{23}+1100\,x_{11}+1000\,x_{12}+1000\,x_{13}+900\,x_{21}} &  &  \\
    & {+800\,x_{22}+800\,x_{23}+110\,s_{11}+100\,s_{12}+100\,s_{13}+105\,s_{21}} &  &  \\
    & {+105\,s_{22}+105\,s_{23}} &  &  \\[1ex]
    \text{subject to} & {si_1+x_{11}-s_{11}} & {=} & {100} \\
    & {s_{11}+x_{12}-s_{12}} & {=} & {200} \\
    & {s_{12}+x_{13}-s_{13}} & {=} & {10} \\
    & {si_2+x_{21}-s_{21}} & {=} & {10} \\
    & {s_{21}+x_{22}-s_{22}} & {=} & {100} \\
    & {s_{22}+x_{23}-s_{23}} & {=} & {150} \\
    & {20\,x_{11}+10\,x_{21}+100\,y_{11}+110\,y_{21}} & {\le} & {2500} \\
    & {10\,x_{12}+5\,x_{22}+100\,y_{12}+110\,y_{22}} & {\le} & {2100} \\
    & {10\,x_{13}+5\,x_{23}+100\,y_{13}+110\,y_{23}} & {\le} & {2500} \\
    & {x_{11}-120\,y_{11}} & {\le} & {0} \\
    & {x_{12}-200\,y_{12}} & {\le} & {0} \\
    & {x_{13}-10\,y_{13}} & {\le} & {0} \\
    & {x_{21}-239\,y_{21}} & {\le} & {0} \\
    & {x_{22}-250\,y_{22}} & {\le} & {0} \\
    & {x_{23}-150\,y_{23}} & {\le} & {0} \\
    & {s_{13}} & {=} & {0} \\
    & {s_{23}} & {=} & {0} \\[1ex]
    & {si_1,~si_2} & {\in} & {\Z_{\ge 0}} \\
    & {x_{11},~x_{12},~x_{13},~x_{21},~x_{22},~x_{23}} & {\in} & {\Z_{\ge 0}} \\
    & {s_{11},~s_{12},~s_{13},~s_{21},~s_{22},~s_{23}} & {\in} & {\Z_{\ge 0}} \\
    & {y_{11},~y_{12},~y_{13},~y_{21},~y_{22},~y_{23}} & {\in} & {\{0,1\}}
    \end{array}
    $$

    An optimal solution of the $\mathrm{ILP}_{\mathrm{CLSP}}^{\mathrm{SI}}$ model is:

    \begin{align*}
    &\tilde x_{11}=59,~~\tilde x_{12}=200,~~\tilde x_{13}=10,~~\tilde x_{21}=110,~~\tilde x_{22}=0,~~\tilde x_{23}=150,\\
    &\tilde{si}_1=41,~~\tilde{si}_2=0,~~\tilde s_{21}=100,~~\text{all the other }\tilde s_{pt}=0,
    \end{align*}

    with a setup in every period except for product $2$ in period $2$. The optimal value $z(\mathrm{ILP}_{\mathrm{CLSP}}^{\mathrm{SI}})$ is $677\,400$, and the optimal solution is unique (Gurobi). Product $1$ starts with $41$ units bought at the beginning of the horizon, because period $1$ has no time to produce all its demand.

!!! chiave ""

    To obtain an LP relaxation of the $\mathrm{ILP}_{\mathrm{CLSP}}^{\mathrm{SI}}$ model, we relax constraints $\eqref{CLSP:x}$–$\eqref{CLSP:y}$ into non-negativity constraints and the bounds $y_{pt}\le 1$. The obtained LP model reads as follows:

    <a id="eq-CLSP-LP"></a>

    \begin{align*}
    &&\min ~~ \sum_{p \in P} fc_p\,si_p + {} \\
    && \sum_{p \in P}\sum_{t \in T} \left(sc_{pt}\,y_{pt} + vc_{pt}\,x_{pt} + hc_{pt}\,s_{pt} \right) \label{obj:CLSP-LP} \tag{15.8a}\\[1ex]
    && \text{subject to}\quad si_{p} + x_{p1} & = d_{p1} + s_{p1}, & \forall p \in P, \label{CLSPLP:bal1} \tag{15.8b}\\[1ex]
    && s_{p,t-1} + x_{pt} & = d_{pt} + s_{pt}, & \forall p \in P,~\forall t\in T\setminus\{1\}, \label{CLSPLP:bal} \tag{15.8c}\\[1ex]
    && \sum_{p \in P}\left(st_{pt}\,y_{pt} + vt_{pt}\,x_{pt}\right) &\leq cap_t, & \forall t\in T, \label{CLSPLP:cap} \tag{15.8d}\\[1ex]
    && x_{pt} &\le M_{pt}\, y_{pt}, & \forall p \in P,~ \forall t\in T, \label{CLSPLP:M} \tag{15.8e}\\[1ex]
    && s_{pm} &= 0, & \forall p \in P, \label{CLSPLP:end} \tag{15.8f}\\[1ex]
    && y_{pt} &\le 1, & \forall p \in P,~ \forall t\in T, \label{CLSPLP:ub} \tag{15.8g}\\[1ex]
    && x_{pt} &\ge 0, & \forall p \in P,~ \forall t\in T, \label{CLSPLP:nn} \tag{15.8h}\\[1ex]
    && s_{pt} &\ge 0, & \forall p \in P,~ \forall t\in T, \label{CLSPLP:nns} \tag{15.8i}\\[1ex]
    && y_{pt} &\ge 0, & \forall p \in P,~ \forall t\in T, \label{CLSPLP:nny} \tag{15.8j}\\[1ex]
    && si_{p} &\ge 0, & \forall p \in P. \label{CLSPLP:si} \tag{15.8k}
    \end{align*}

    This LP model is referred to as the $\mathrm{LP}_{\mathrm{CLSP}}^{\mathrm{SI}}$ model.

- In the shortest-path formulation each product has its own network, with an additional continuous variable $w_{pt}\ge 0$, the arc from node $0$ to node $t$, for the fraction of the initial inventory that covers the demands of the first $t$ periods. The costs of the arcs are

    $$
    cv_{ptk}=vc_{pt}\,sd_{ptk}+\sum_{s=t+1}^{k}\sum_{u=t}^{s-1}hc_{pu}\,d_{ps},
    \qquad
    ci_{pt}=fc_p\,sd_{p1t}+\sum_{s=2}^{t}\sum_{u=1}^{s-1}hc_{pu}\,d_{ps}.
    $$

!!! chiave ""

    Using these variables, a Mixed Integer Linear Programming (MIP) model for the lot sizing problem with initial stock (LS-SI) reads as follows:

    <a id="eq-CLSP-SP"></a>

    \begin{align*}
    &&\min ~~ \sum_{p \in P}\sum_{t \in T}\left(sc_{pt}\,y_{pt} + ci_{pt}\,w_{pt}\right) + {} \\
    && \sum_{p \in P}\sum_{t \in T}\sum_{k=t}^{m} cv_{ptk}\,zv_{ptk} \label{obj:CLSP-SP} \tag{15.9a}\\[1ex]
    && \text{subject to}\quad \sum_{k=1}^{m}\left(w_{pk}+zv_{p1k}\right) &= 1, & \forall p \in P, \label{CLSPSP1} \tag{15.9b}\\[1ex]
    && w_{p,t-1}+\sum_{u=1}^{t-1}zv_{p,u,t-1} - \sum_{k=t}^{m}zv_{ptk} &= 0, & \forall p \in P,~\forall t\in T\setminus\{1\}, \label{CLSPSP2} \tag{15.9c}\\[1ex]
    && \sum_{k=t}^{m}zv_{ptk} &\leq y_{pt}, & \forall p \in P,~\forall t\in T, \label{CLSPSP3} \tag{15.9d}\\[1ex]
    && \sum_{p\in P}st_{pt}\,y_{pt}+\sum_{p\in P}\sum_{k=t}^{m} vt_{pt}\,sd_{ptk}\,zv_{ptk} &\leq cap_t, & \forall t\in T, \label{CLSPSP4} \tag{15.9e}\\[1ex]
    && \sum_{k=t}^{m} sd_{ptk}\,zv_{ptk} &\in \Z_{\ge 0}, & \forall p \in P,~\forall t\in T, \label{CLSPSP-intx} \tag{15.9f}\\[1ex]
    && \sum_{t\in T} sd_{p1t}\,w_{pt} &\in \Z_{\ge 0}, & \forall p \in P, \label{CLSPSP-intsi} \tag{15.9g}\\[1ex]
    && zv_{ptk} & \geq 0, & \forall p \in P,~\forall t,k\in T,~ k\geq t, \label{CLSPSP5} \tag{15.9h}\\[1ex]
    && w_{pt} & \geq 0, & \forall p \in P,~\forall t\in T, \label{CLSPSP6} \tag{15.9i}\\[1ex]
    && y_{pt} & \in \{0, 1\}, & \forall p \in P,~\forall t \in T. \label{CLSPSP7} \tag{15.9j}
    \end{align*}

    This MIP model is referred to as the $\mathrm{MIP}^{\mathrm{SP},\mathrm{SI}}_{\mathrm{CLSP}}$ model. Relaxing constraints $\eqref{CLSPSP7}$ into $0\le y_{pt}\le 1$ and removing constraints $\eqref{CLSPSP-intx}$ and $\eqref{CLSPSP-intsi}$ gives the LP model referred to as the $\mathrm{LP}^{\mathrm{SP},\mathrm{SI}}_{\mathrm{CLSP}}$ model.

- Description of the objective function and constraints of the $\mathrm{MIP}^{\mathrm{SP},\mathrm{SI}}_{\mathrm{CLSP}}$ model:

    - the linear objective function $\eqref{obj:CLSP-SP}$ minimizes the cost of the setups, of the initial inventory and of the arcs of the plans of all the products;

    - constraints $\eqref{CLSPSP1}$ and $\eqref{CLSPSP2}$ are the flow constraints of the network of every product, with the arcs $w_{pt}$ of the initial inventory leaving node $0$ ($|P|\,m$ linear constraints);

    - constraints $\eqref{CLSPSP3}$ force the setup of product $p$ in period $t$ if it is produced ($|P|\,m$ linear constraints), and constraints $\eqref{CLSPSP4}$ impose the capacities, setup times included ($m$ linear constraints);

    - constraints $\eqref{CLSPSP-intx}$ and $\eqref{CLSPSP-intsi}$ keep integer the quantities and the initial inventories;

    - finally, constraints $\eqref{CLSPSP5}$–$\eqref{CLSPSP7}$ define the variables of the MIP model.

- The quantity produced is $x_{pt}=\sum_{k=t}^{m} sd_{ptk}\,zv_{ptk}$, and the initial inventory is $si_p=\sum_{t\in T} sd_{p1t}\,w_{pt}$: constraints $\eqref{CLSPSP-intx}$ and $\eqref{CLSPSP-intsi}$ keep them integer, as in the $\mathrm{ILP}_{\mathrm{CLSP}}^{\mathrm{SI}}$ model.

- With one product and $vt_t=1$ these constraints are not needed: once the setups are fixed, what remains is a minimum cost flow problem, which has an integer optimal solution.

- With several products and production times $vt_{pt}>1$, a fractional quantity can use the capacity better. Without constraints $\eqref{CLSPSP-intx}$ and $\eqref{CLSPSP-intsi}$ the model is only a relaxation of the problem, and its optimal value can be smaller than $z(\mathrm{ILP}_{\mathrm{CLSP}}^{\mathrm{SI}})$ (<span style="color:#1971c2">[Example 15.9](#box-9-ex-CLSP-bounds)</span>).

<a id="box-9-ex-CLSP-bounds"></a>

!!! esempio "Example 15.9: lower bounds with two products"

    For the instance of <span style="color:#1971c2">[Example 15.8](#box-8-ex-CLSP-inst)</span>, ignoring the setups (in the costs and in the capacities), the optimal value is $575400$, attained by the integer solution $x_{11}=120$, $x_{12}=160$, $x_{13}=10$, $x_{21}=10$, $x_{22}=100$, $x_{23}=150$, $s_{11}=40$, $si_1=20$. The lower bounds and the optimal value of the formulations are:

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
    <td><span class="arithmatex">\(\mathrm{LP}_{\mathrm{CLSP}}^{\mathrm{SI}}\)</span> with <span class="arithmatex">\(M_{pt}=sd_{ptm}\)</span></td>
    <td><span class="arithmatex">\(638\,882.20\)</span></td>
    </tr>
    <tr>
    <td><span class="arithmatex">\(\mathrm{LP}_{\mathrm{CLSP}}^{\mathrm{SI}}\)</span> with the strong <span class="arithmatex">\(M_{pt}\)</span></td>
    <td><span class="arithmatex">\(651\,267.37\)</span></td>
    </tr>
    <tr>
    <td><span class="arithmatex">\(\mathrm{LP}^{\mathrm{SP},\mathrm{SI}}_{\mathrm{CLSP}}\)</span></td>
    <td><span class="arithmatex">\(668\,928.57\)</span></td>
    </tr>
    <tr>
    <td><span class="arithmatex">\(\mathrm{MIP}^{\mathrm{SP},\mathrm{SI}}_{\mathrm{CLSP}}\)</span> without <span class="arithmatex">\(\eqref{CLSPSP-intx}\)</span> and <span class="arithmatex">\(\eqref{CLSPSP-intsi}\)</span></td>
    <td><span class="arithmatex">\(676\,450.00\)</span></td>
    </tr>
    <tr>
    <td><span class="arithmatex">\(\mathrm{ILP}_{\mathrm{CLSP}}^{\mathrm{SI}}\)</span> and <span class="arithmatex">\(\mathrm{MIP}^{\mathrm{SP},\mathrm{SI}}_{\mathrm{CLSP}}\)</span> (integer optimum)</td>
    <td><span class="arithmatex">\(677\,400\)</span></td>
    </tr>
    </table></div>

    Without constraints $\eqref{CLSPSP-intx}$ and $\eqref{CLSPSP-intsi}$ the shortest-path model reaches $676\,450$ with the same setups and the fractional quantities $x_{11}=59.5$ and $si_1=40.5$: period $1$ then uses its whole capacity, $100+20\cdot 59.5+110+10\cdot 110=2500$.

## 15.7.4 Overtime

- The data are those of the lot sizing problem with several products and setup times, but the time of each period is not a fixed capacity: in period $t$ the working time in normal hours costs $cw_t$ per unit, up to $cap^{N}_t$, and the overtime costs $co_t$ per unit, up to $cap^{O}_t$.

- We introduce the integer variables $x_{pt}$, $s_{pt}$ and the binary variables $y_{pt}$ of the $\mathrm{ILP}_{\mathrm{CLSP}}^{P}$ model, and, for every period $t\in T$, the following <strong>integer variables</strong>:

    $$
    \mu_t \in \Z_{\ge 0}~\text{(working time in normal hours)},\qquad \nu_t \in \Z_{\ge 0}~\text{(overtime)}.
    $$

    Since the times $vt_{pt}$ and $st_{pt}$ are integer, the working times can be taken integer.

!!! chiave ""

    Using these variables, an Integer Linear Programming (ILP) model for the lot sizing problem with overtime (LS-OT) reads as follows:

    <a id="eq-CLSPo-bigM"></a>

    \begin{align*}
    &&\min ~~ \sum_{p \in P}\sum_{t \in T} \left(sc_{pt}\,y_{pt} + vc_{pt}\,x_{pt} + hc_{pt}\,s_{pt} \right) + {} \\
    && \sum_{t \in T}\left(cw_t\,\mu_t + co_t\,\nu_t\right) \label{obj:CLSPo} \tag{15.10a}\\[1ex]
    && \text{subject to}\quad s_{p,t-1} + x_{pt} & = d_{pt} + s_{pt}, & \forall p \in P,~\forall t\in T, \label{CLSPo:bal} \tag{15.10b}\\[1ex]
    && \sum_{p \in P}\left(st_{pt}\,y_{pt} + vt_{pt}\,x_{pt}\right) &\leq \mu_t+\nu_t, & \forall t\in T, \label{CLSPo:time} \tag{15.10c}\\[1ex]
    && \mu_t &\le cap^{N}_t, & \forall t\in T, \label{CLSPo:N} \tag{15.10d}\\[1ex]
    && \nu_t &\le cap^{O}_t, & \forall t\in T, \label{CLSPo:O} \tag{15.10e}\\[1ex]
    && x_{pt} &\le M_{pt}\, y_{pt}, & \forall p \in P,~ \forall t\in T, \label{CLSPo:M} \tag{15.10f}\\[1ex]
    && s_{p0} = s_{pm} &= 0, & \forall p \in P, \label{CLSPo:end} \tag{15.10g}\\[1ex]
    && x_{pt} &\in \Z_{\ge 0}, & \forall p \in P,~ \forall t\in T, \label{CLSPo:x} \tag{15.10h}\\[1ex]
    && s_{pt} &\in \Z_{\ge 0}, & \forall p \in P,~ \forall t\in T, \label{CLSPo:s} \tag{15.10i}\\[1ex]
    && \mu_t &\in \Z_{\ge 0}, & \forall t\in T, \label{CLSPo:mu} \tag{15.10j}\\[1ex]
    && \nu_t &\in \Z_{\ge 0}, & \forall t\in T, \label{CLSPo:nu} \tag{15.10k}\\[1ex]
    && y_{pt} &\in \{0,1\}, & \forall p \in P,~ \forall t\in T. \label{CLSPo:y} \tag{15.10l}
    \end{align*}

    This ILP model is referred to as the $\mathrm{ILP}_{\mathrm{CLSP}}^{\mathrm{OT}}$ model.

- Description of the objective function and constraints of the $\mathrm{ILP}_{\mathrm{CLSP}}^{\mathrm{OT}}$ model:

    - the linear objective function $\eqref{obj:CLSPo}$ adds to the costs of the $\mathrm{ILP}_{\mathrm{CLSP}}^{P}$ model the cost of the working time in normal hours and in overtime;

    - constraints $\eqref{CLSPo:bal}$ are the flow balancing constraints of every product ($|P|\,m$ linear constraints);

    - constraints $\eqref{CLSPo:time}$ impose that the setup times and the production times of each period are covered by the working time, in normal hours and in overtime ($m$ linear constraints);

    - constraints $\eqref{CLSPo:N}$ and $\eqref{CLSPo:O}$ bound the two working times ($m$ linear constraints each);

    - constraints $\eqref{CLSPo:M}$ link the quantities with the setups ($|P|\,m$ linear constraints);

    - constraints $\eqref{CLSPo:end}$ impose an empty inventory at the beginning and at the end of the horizon;

    - finally, constraints $\eqref{CLSPo:x}$–$\eqref{CLSPo:y}$ define the variables of the ILP model.

- The time available in period $t$ is at most $cap^{N}_t+cap^{O}_t$, so the strong big-M value is

    $$
    M_{pt}=\min\left\{\left\lfloor\frac{cap^{N}_t+cap^{O}_t-st_{pt}}{vt_{pt}}\right\rfloor,~sd_{ptm}\right\}.
    $$

- With $co_t>cw_t$ an optimal solution uses overtime only when the normal hours of the period are exhausted.

<a id="box-10-ex-CLSPo"></a>

!!! esempio "Example 15.10: $\mathrm{ILP}_{\mathrm{CLSP}}^{\mathrm{OT}}$ model"

    We consider the CLS instance of <span style="color:#1971c2">[Example 15.1](ilp-models-for-the-capacitated-lot-sizing-problem.md#box-1-ex-CLS-ref)</span>, with one product ($|P|=1$, and we drop the index $p$), production times $vt_t=1$ and setup times $st_t=0$. The capacity $cap_t=4$ becomes the normal hours $cap^{N}_t=4$, at the cost $cw_t=1$, and one unit of overtime is available in every period: $cap^{O}_t=1$, at the cost $co_t=6$. The big-M values are $M_t=\min\{5,D_{t,5}\}$, that is $(5,5,5,5,1)$. The $\mathrm{ILP}_{\mathrm{CLSP}}^{\mathrm{OT}}$ model for this instance is:

    $$
    \begin{array}{rlcl}
    {\min} & {50\,y_1+50\,y_2+50\,y_3+50\,y_4+50\,y_5+10\,s_1} &  &  \\
    & {+10\,s_2+10\,s_3+10\,s_4+10\,s_5+\mu_1+\mu_2} &  &  \\
    & {+\mu_3+\mu_4+\mu_5+6\,\nu_1+6\,\nu_2+6\,\nu_3} &  &  \\
    & {+6\,\nu_4+6\,\nu_5} &  &  \\[1ex]
    \text{subject to} & {x_1-s_1} & {=} & {2} \\
    & {s_1+x_2-s_2} & {=} & {1} \\
    & {s_2+x_3-s_3} & {=} & {3} \\
    & {s_3+x_4-s_4} & {=} & {4} \\
    & {s_4+x_5-s_5} & {=} & {1} \\
    & {x_1-\mu_1-\nu_1} & {\le} & {0} \\
    & {x_2-\mu_2-\nu_2} & {\le} & {0} \\
    & {x_3-\mu_3-\nu_3} & {\le} & {0} \\
    & {x_4-\mu_4-\nu_4} & {\le} & {0} \\
    & {x_5-\mu_5-\nu_5} & {\le} & {0} \\
    & {x_1-5\,y_1} & {\le} & {0} \\
    & {x_2-5\,y_2} & {\le} & {0} \\
    & {x_3-5\,y_3} & {\le} & {0} \\
    & {x_4-5\,y_4} & {\le} & {0} \\
    & {x_5-y_5} & {\le} & {0} \\
    & {\mu_1} & {\le} & {4} \\
    & {\mu_2} & {\le} & {4} \\
    & {\mu_3} & {\le} & {4} \\
    & {\mu_4} & {\le} & {4} \\
    & {\mu_5} & {\le} & {4} \\
    & {\nu_1} & {\le} & {1} \\
    & {\nu_2} & {\le} & {1} \\
    & {\nu_3} & {\le} & {1} \\
    & {\nu_4} & {\le} & {1} \\
    & {\nu_5} & {\le} & {1} \\
    & {s_5} & {=} & {0} \\[1ex]
    & {x_1,~x_2,~x_3,~x_4,~x_5} & {\in} & {\Z_{\ge 0}} \\
    & {s_1,~s_2,~s_3,~s_4,~s_5} & {\in} & {\Z_{\ge 0}} \\
    & {\mu_1,~\mu_2,~\mu_3,~\dots,~\nu_5} & {\in} & {\Z_{\ge 0}} \\
    & {y_1,~y_2,~y_3,~y_4,~y_5} & {\in} & {\{0,1\}}
    \end{array}
    $$

    An optimal solution of the $\mathrm{ILP}_{\mathrm{CLSP}}^{\mathrm{OT}}$ model is:

    \begin{align*}
    &\tilde{\vet y}=(1,0,1,1,0),\qquad \tilde{\vet x}=(3,0,3,5,0),\qquad \tilde{\vet s}=(1,0,0,1,0),\\
    &\tilde{\vet \mu}=(3,0,3,4,0),\qquad \tilde{\vet \nu}=(0,0,0,1,0)
    \end{align*}

    The optimal value $z(\mathrm{ILP}_{\mathrm{CLSP}}^{\mathrm{OT}})$ is $3\cdot 50+2\cdot 10+10\cdot 1+1\cdot 6=186$, and the optimal solution is unique (Gurobi). One unit of overtime in period $4$, at the cost $6$, replaces one unit stored from period $3$ to period $4$, at the cost $10$: the optimal plan $(3,0,4,4,0)$ of the CLS costs $191$ here.

## 15.7.5 Unsatisfied demand

- The data are those of the lot sizing problem with several products and setup times. In addition, a part of the demand $d_{pt}$ may be left unsatisfied, at the penalty $cu_{pt}$ per unit.

- We introduce the integer variables $x_{pt}$, $s_{pt}$ and the binary variables $y_{pt}$ of the $\mathrm{ILP}_{\mathrm{CLSP}}^{P}$ model, and, for every product $p\in P$ and every period $t\in T$, the following <strong>integer variable</strong>:

    $$
    \varepsilon_{pt} \in \Z_{\ge 0}~\text{(demand of product $p$ in period $t$ left unsatisfied)}.
    $$

!!! chiave ""

    Using these variables, an Integer Linear Programming (ILP) model for the lot sizing problem with unsatisfied demand (LS-UD) reads as follows:

    <a id="eq-CLSPu-bigM"></a>

    \begin{align*}
    &&\min ~~ \sum_{p \in P}\sum_{t \in T} \left(sc_{pt}\,y_{pt} + vc_{pt}\,x_{pt} + hc_{pt}\,s_{pt} \right) + {} \\
    && \sum_{p \in P}\sum_{t \in T} cu_{pt}\,\varepsilon_{pt} \label{obj:CLSPu} \tag{15.11a}\\[1ex]
    && \text{subject to}\quad s_{p,t-1} + x_{pt} & = d_{pt} - \varepsilon_{pt} + s_{pt}, & \forall p \in P,~\forall t\in T, \label{CLSPu:bal} \tag{15.11b}\\[1ex]
    && \sum_{p \in P}\left(st_{pt}\,y_{pt} + vt_{pt}\,x_{pt}\right) &\leq cap_t, & \forall t\in T, \label{CLSPu:cap} \tag{15.11c}\\[1ex]
    && x_{pt} &\le M_{pt}\, y_{pt}, & \forall p \in P,~ \forall t\in T, \label{CLSPu:M} \tag{15.11d}\\[1ex]
    && \varepsilon_{pt} &\le d_{pt}, & \forall p \in P,~ \forall t\in T, \label{CLSPu:eps} \tag{15.11e}\\[1ex]
    && s_{p0} = s_{pm} &= 0, & \forall p \in P, \label{CLSPu:end} \tag{15.11f}\\[1ex]
    && x_{pt} &\in \Z_{\ge 0}, & \forall p \in P,~ \forall t\in T, \label{CLSPu:x} \tag{15.11g}\\[1ex]
    && s_{pt} &\in \Z_{\ge 0}, & \forall p \in P,~ \forall t\in T, \label{CLSPu:s} \tag{15.11h}\\[1ex]
    && \varepsilon_{pt} &\in \Z_{\ge 0}, & \forall p \in P,~ \forall t\in T, \label{CLSPu:epsdom} \tag{15.11i}\\[1ex]
    && y_{pt} &\in \{0,1\}, & \forall p \in P,~ \forall t\in T. \label{CLSPu:y} \tag{15.11j}
    \end{align*}

    This ILP model is referred to as the $\mathrm{ILP}_{\mathrm{CLSP}}^{\mathrm{UD}}$ model.

- Description of the objective function and constraints of the $\mathrm{ILP}_{\mathrm{CLSP}}^{\mathrm{UD}}$ model:

    - the linear objective function $\eqref{obj:CLSPu}$ adds to the costs of the $\mathrm{ILP}_{\mathrm{CLSP}}^{P}$ model the penalty of the unsatisfied demand;

    - constraints $\eqref{CLSPu:bal}$ are the flow balancing constraints, with the demand reduced by its unsatisfied part ($|P|\,m$ linear constraints);

    - constraints $\eqref{CLSPu:cap}$ are the capacity constraints and constraints $\eqref{CLSPu:M}$ link the quantities with the setups ($m$ and $|P|\,m$ linear constraints);

    - constraints $\eqref{CLSPu:eps}$ ensure that the unsatisfied demand does not exceed the demand ($|P|\,m$ linear constraints);

    - constraints $\eqref{CLSPu:end}$ impose an empty inventory at the beginning and at the end of the horizon;

    - finally, constraints $\eqref{CLSPu:x}$–$\eqref{CLSPu:y}$ define the variables of the ILP model.

- The big-M values of the $\mathrm{ILP}_{\mathrm{CLSP}}^{P}$ model remain valid, since the production can only decrease. With $\varepsilon_{pt}=0$ for every product and period the model is the $\mathrm{ILP}_{\mathrm{CLSP}}^{P}$ model.

<a id="box-11-ex-CLSPu"></a>

!!! esempio "Example 15.11: $\mathrm{ILP}_{\mathrm{CLSP}}^{\mathrm{UD}}$ model"

    We consider the CLS instance of <span style="color:#1971c2">[Example 15.1](ilp-models-for-the-capacitated-lot-sizing-problem.md#box-1-ex-CLS-ref)</span>, with one product ($|P|=1$, and we drop the index $p$), production times $vt_t=1$, setup times $st_t=0$ and the strong big-M values $M_t=(4,4,4,4,1)$. Each unit of unsatisfied demand costs $cu_t=18$. The $\mathrm{ILP}_{\mathrm{CLSP}}^{\mathrm{UD}}$ model for this instance is:

    $$
    \begin{array}{rlcl}
    {\min} & {50\,y_1+50\,y_2+50\,y_3+50\,y_4+50\,y_5+10\,s_1} &  &  \\
    & {+10\,s_2+10\,s_3+10\,s_4+10\,s_5+18\,\varepsilon_1+18\,\varepsilon_2} &  &  \\
    & {+18\,\varepsilon_3+18\,\varepsilon_4+18\,\varepsilon_5} &  &  \\[1ex]
    \text{subject to} & {x_1-s_1+\varepsilon_1} & {=} & {2} \\
    & {s_1+x_2-s_2+\varepsilon_2} & {=} & {1} \\
    & {s_2+x_3-s_3+\varepsilon_3} & {=} & {3} \\
    & {s_3+x_4-s_4+\varepsilon_4} & {=} & {4} \\
    & {s_4+x_5-s_5+\varepsilon_5} & {=} & {1} \\
    & {x_1} & {\le} & {4} \\
    & {x_2} & {\le} & {4} \\
    & {x_3} & {\le} & {4} \\
    & {x_4} & {\le} & {4} \\
    & {x_5} & {\le} & {4} \\
    & {x_1-4\,y_1} & {\le} & {0} \\
    & {x_2-4\,y_2} & {\le} & {0} \\
    & {x_3-4\,y_3} & {\le} & {0} \\
    & {x_4-4\,y_4} & {\le} & {0} \\
    & {x_5-y_5} & {\le} & {0} \\
    & {\varepsilon_1} & {\le} & {2} \\
    & {\varepsilon_2} & {\le} & {1} \\
    & {\varepsilon_3} & {\le} & {3} \\
    & {\varepsilon_4} & {\le} & {4} \\
    & {\varepsilon_5} & {\le} & {1} \\
    & {s_5} & {=} & {0} \\[1ex]
    & {x_1,~x_2,~x_3,~x_4,~x_5} & {\in} & {\Z_{\ge 0}} \\
    & {s_1,~s_2,~s_3,~s_4,~s_5} & {\in} & {\Z_{\ge 0}} \\
    & {\varepsilon_1,~\varepsilon_2,~\varepsilon_3,~\varepsilon_4,~\varepsilon_5} & {\in} & {\Z_{\ge 0}} \\
    & {y_1,~y_2,~y_3,~y_4,~y_5} & {\in} & {\{0,1\}}
    \end{array}
    $$

    An optimal solution of the $\mathrm{ILP}_{\mathrm{CLSP}}^{\mathrm{UD}}$ model is:

    $$
    \tilde{\vet y}=(0,0,1,1,0),\qquad \tilde{\vet x}=(0,0,3,4,0),\qquad \tilde{\vet s}=(0,0,0,0,0),\qquad
    \tilde{\vet \varepsilon}=(2,1,0,0,1)
    $$

    The optimal value $z(\mathrm{ILP}_{\mathrm{CLSP}}^{\mathrm{UD}})$ is $2\cdot 50+4\cdot 18=172$, and the optimal solution is unique (Gurobi). The demands of the periods $1$, $2$ and $5$ are not satisfied: their $4$ units cost $72$, and the plan saves one setup and all the holding costs of the optimal plan $(3,0,4,4,0)$ of the CLS, of cost $180$.

## 15.8 Typical mistakes

!!! attenzione "Warning"

    - <strong>Taking a big-M value that is too small.</strong> A value smaller than the production of a feasible plan cuts off that plan: the values $D_{t,m}$ and $cap_t$ are both valid.

    - <strong>Taking a big-M value that is too large.</strong> Every valid value gives a correct model, but a large value gives a weak relaxation: the setup variables become almost zero in the LP solutions, as in the bound $99.65$ of the reference instance.

    - <strong>Forgetting the setup times in the capacity constraints.</strong> With several products the constraints contain $st_{pt}\,y_{pt}$ besides $vt_{pt}\,x_{pt}$.

    - <strong>Counting the holding cost of the demand of the production period.</strong> In $cv_{tk}$ the units for period $t$ are not stored: the holding sum starts from the demand of period $t+1$.

    - <strong>Believing that the shortest-path formulation needs binary paths.</strong> The variables $zv_{tk}$ are continuous: a feasible plan that is not a path is a combination of paths.

    - <strong>Forgetting the integrality of the quantities with several products.</strong> With production times $vt_{pt}>1$ the continuous variables $zv_{ptk}$ can give fractional quantities: the shortest-path model needs the integrality constraints $\eqref{CLSPSP-intx}$ and $\eqref{CLSPSP-intsi}$, otherwise it is only a relaxation ($676\,450<677\,400$).

    - <strong>Keeping the fixed capacity in the model with overtime.</strong> The time of period $t$ is bounded by the working time $\mu_t+\nu_t$, and the big-M values use $cap^{N}_t+cap^{O}_t$.

    - <strong>Leaving the unsatisfied demand unbounded.</strong> Without $\varepsilon_{pt}\le d_{pt}$ the balance constraints would allow a negative net demand, that is, inventory created from nothing at the price of the penalty.

## 15.9 In summary

!!! chiave "In summary"

    - Without the setups the CLS is a simple flow problem; the setups need the binary variables $y_t$ and a link with the quantities.

    - In the big-M formulation the link $x_t \le M_t\, y_t$ is correct for every valid $M_t$, but the LP bound improves when $M_t$ decreases: the strong value is $\min\{cap_t, D_{t,m}\}$.

    - The shortest-path formulation writes the plans as paths in a network, with the link $\sum_k zv_{tk} \le y_t$ and no big-M value: its relaxation is the strongest.

    - The two formulations have the same optimal value; they differ in the lower bound and in the size of the model.

    - The ULS model is the big-M model without capacities and with $M_t=D_{t,m}$: on the reference instance its optimal value is $170$.

    - The variants keep the structure of the big-M model: several products share the capacity with their setup times, the initial stock adds the variables $si_p$, overtime adds the working times $\mu_t,\nu_t$, and the unsatisfied demand adds the variables $\varepsilon_{pt}$. On the reference instance, overtime gives $186$ and unsatisfied demand $172$.

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

**Exercises on this chapter:** [:material-pencil: Lot sizing problems](../../exercises/lot-sizing-formulations.md)

