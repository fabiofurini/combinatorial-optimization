---
title: "Capacitated lot sizing"
---

# Capacitated lot sizing

<div class="info-capitolo" markdown>

**Part 1 · Combinatorial optimization problems · Chapter 7** · [:material-file-pdf-box: Lecture notes, volume 1 (PDF)](../pdf/lecture-notes-1-combinatorial-optimization-problems.pdf)

</div>

!!! nota "Prerequisites"

    - From this module, the chapter «Combinatorial optimization problems»: what a combinatorial optimization problem is, the number of candidate solutions, and primal and dual bounds.

!!! chiave "Objectives"

    At the end of this chapter you will be able to:

    - describe a production plan by its quantities, stocks and setups, and compute its cost;

    - state the capacitated lot sizing problem and name its main variants;

    - decide whether a plan is feasible, and count the feasible setup choices of an instance;

    - build a first plan by hand, merging the demands of consecutive periods;

    - compute a lower bound on the cost from the number of setups that the total demand requires.

## 7.1 Why capacitated lot sizing?

- A factory knows the demand of its product in each of the next weeks. Starting the production line costs a fixed amount (the <strong>setup</strong>), and the line can make only a limited quantity per week (the <strong>capacity</strong>). What is made in advance is kept in the warehouse, at a cost for every unit and every week. In which weeks should the factory produce, and how much?

- The decision is a compromise: producing every week avoids the warehouse but pays many setups, producing rarely saves setups but pays the stock, and the capacity limits how much can be anticipated. This is the <strong>capacitated lot sizing problem</strong>.

- <strong>A challenge.</strong> Before reading on, look at the data of <span style="color:#1971c2">[Example 7.1](#box-2-ex-cls5)</span> and try to find a production plan of cost at most $180$. Then ask yourself how many setups every plan needs at least.

- Lot sizing has a classical place in the history of production planning. In 1958 Wagner and Whitin gave a dynamic programming algorithm for the case without capacity and with demand that varies over time. It rests on a property of the optimal plans: one produces only when the stock is empty.

- With capacities the property fails, and the problem is NP-hard (see the chapter «Combinatorial optimization problems»). The dynamic programming approach is the subject of the chapter «Dynamic programming for lot sizing».

## 7.2 The capacitated lot sizing problem

<a id="box-1-defCLS"></a>

!!! definizione "Definition 7.1: Capacitated lot sizing problem"

    Given:

    1. a set $T = \{1,2,\dots,m\}$ of $m$ <em>time periods</em>,

    2. for each period $t \in T$, a <em>demand</em> $d_t \in \Z_{\ge 1}$ and a <em>capacity</em> $cap_t \in \Z_{\ge 1}$, both counted in units of one product,

    3. for each period $t \in T$, three non-negative integer costs: the <em>setup cost</em> $sc_t$, the <em>variable production cost</em> $vc_t$ per unit produced and the <em>holding cost</em> $hc_t$ per unit kept in stock at the end of the period,

    the <strong>capacitated lot sizing problem</strong> (CLS) asks to decide how much to produce in every period, so that every demand is satisfied with what is produced and what is in stock, the capacities are respected, and the total cost of setups, production and holding is minimized.

- A <strong>CLS instance</strong> is specified by:

    1. one integer number:

        - the number of periods $m \in \Z_{\ge 1}$,

    2. five vectors of integer numbers of length $m$:

        - $\vet{d},\ \vet{cap} \in \Z_{\ge 1}^m$, containing demands and capacities,

        - $\vet{sc},\ \vet{vc},\ \vet{hc} \in \Z_{\ge 0}^m$, containing the costs.

- A <strong>CLS feasible solution</strong> is a <strong>production plan</strong>, that is a vector of integer quantities

    $$
    \vet{x} = (x_1,x_2,\dots,x_m) \in \Z_{\ge 0}^m ,
    $$

    where $x_t$ is the quantity produced in period $t$. The stock left at the end of period $t$ is

    $$
    s_t(\vet{x}) = \sum_{u=1}^{t} (x_u - d_u),
    $$

    because the stock of period $t-1$ plus the production of period $t$ must cover the demand of period $t$, and what remains is the stock of period $t$. The plan is <strong>feasible</strong> if

    $$
    x_t \le cap_t \quad \text{and} \quad s_t(\vet{x}) \ge 0 \qquad \forall t \in T, \qquad s_m(\vet{x}) = 0.
    $$

- There is a <strong>setup</strong> in period $t$ when $x_t > 0$: we write $y_t = 1$ in this case and $y_t = 0$ otherwise. The <strong>cost</strong> of a plan is

    $$
    c(\vet{x}) = \sum_{t \in T} \bigl( sc_t\, y_t + vc_t\, x_t + hc_t\, s_t(\vet{x}) \bigr).
    $$

    !!! chiave ""

        Given a CLS instance, the CLS can be formally stated as:

        \begin{equation*}
        \label{CLS}
        \tilde{\vet{x}}
        \in
        \argmin_{\vet{x}}
        \left\{
        c(\vet{x})
        \;:\;
        x_t \le cap_t,~ s_t(\vet{x}) \ge 0,~ \forall t \in T,~ s_m(\vet{x}) = 0,~ \vet{x} \in \Z_{\ge 0}^m
        \right\}. \tag{7.1}
        \end{equation*}

- We denote by $z(I)$ the cost of an optimal plan $\tilde{\vet{x}}$ of the instance $I$.

### 7.2.1 Assumptions

- We make the following assumptions:

    1. The stock is empty at the beginning and at the end of the horizon. Leaving stock at the end only adds cost, so no optimal plan needs it; an initial stock is a variant of the problem (next section).

    2. The capacities allow to satisfy the demands, period after period (otherwise there is no feasible plan). Formally:

        $$
        \sum_{u=1}^{t} cap_u \ge \sum_{u=1}^{t} d_u, ~~~~ \forall t \in T
        $$

    3. The quantities are integer. With integer data, once the periods with a setup are fixed, what remains is a minimum cost flow problem, which has an integer optimal solution: restricting the quantities to integers does not change the optimal cost.

## 7.3 Variants

- In the <strong>uncapacitated lot sizing problem</strong> the capacities are not binding, for example $cap_t \ge \sum_u d_u$. It is solved in polynomial time by dynamic programming.

- With <strong>several products</strong>, a set $P$ of products shares one resource: $d_{pt}$ is the demand of product $p \in P$ in period $t$, and $cap_t$ is the time available in period $t$. Producing a unit of $p$ takes $vt_{pt}$ units of time, and a setup of $p$ costs $sc_{pt}$ and takes $st_{pt}$ units of time.

- With an <strong>initial stock</strong>, the quantity $si_p$ of product $p$ available at the beginning of the horizon is a decision, bought at the cost $fc_p$ per unit.

- With <strong>overtime</strong>, the capacity is not fixed: working time in normal hours costs $cw_t$ per unit up to $cap^{N}_t$, and overtime costs $co_t$ per unit up to $cap^{O}_t$.

- With <strong>unsatisfied demand</strong>, a part of the demand may be left unsatisfied, at a penalty $cu_{pt}$ per unit.

- The models of all these variants, with their big-$M$ constraints, are the subject of the chapter «Formulations of capacitated lot sizing». This chapter studies the problem of the definition above.

## 7.4 The reference instance

<a id="box-2-ex-cls5"></a>

!!! esempio "Example 7.1: CLS instance"

    We consider $m=5$ periods, with the following data, all integer:

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

    This is the lot sizing instance of the course on MIP heuristics, with the demands counted in units of ten items. The total demand is $2+1+3+4+1=11$.

    The plan $\vet{x}=(3,0,4,4,0)$ is feasible: the stocks are $s=(1,0,1,1,0)$, all non-negative, with $s_5=0$, and every quantity is at most $4$. There are $3$ setups, in the periods $1$, $3$ and $4$:

    $$
    c(\vet{x}) = 3\cdot 50 + 10\cdot(1+0+1+1+0) = 150+30=180.
    $$

    The plan is drawn below: the bars are the quantities produced, the dots the demands.

    ![Figure 1](../img/lot-sizing/fig01.svg){ .fig loading=lazy  }

## 7.5 Counting the solutions

- The combinatorial part of the decision is the choice of the periods with a setup: there are $2^m$ subsets of periods. Not all of them are feasible, because the periods with a setup must have enough capacity to produce everything.

- For a given choice of the setup periods there may be many production plans, since the quantities can be distributed in many ways: the number of feasible plans is larger than the number of feasible setup choices.

<a id="box-3-ex-cls-count"></a>

!!! esempio "Example 7.2: counting the plans"

    For the instance of <span style="color:#1971c2">[Example 7.1](#box-2-ex-cls5)</span> there are $2^5=32$ subsets of periods. Let $k_t$ be the number of setups in the periods $1,\dots,t$: the cumulative demands $2,3,6,10,11$ require, with capacity $4$, at least one setup in the periods $1$–$2$, two in the periods $1$–$3$ and three in the periods $1$–$4$. Since $d_1>0$ there is a setup in period $1$, and in the periods $2,3,4$ we need at least two setups, one of which in the periods $2$ or $3$:

    $$
    (y_2,y_3,y_4) \in \{(1,1,0),(1,0,1),(0,1,1),(1,1,1)\}.
    $$

    The period $5$ is free, so the feasible setup choices are $4\cdot 2=8$ out of $32$.

    By enumeration, these setup choices carry $94$ feasible plans. The costs of six of them are:

    <div class="tabella" markdown="0"><table>
    <tr>
    <th>plan</th>
    <th>cost</th>
    <th>plan</th>
    <th>cost</th>
    <th>plan</th>
    <th>cost</th>
    </tr>
    <tr>
    <td><span class="arithmatex">\((3,0,4,4,0)\)</span></td>
    <td><span class="arithmatex">\(\mathbf{180}\)</span></td>
    <td><span class="arithmatex">\((4,0,3,4,0)\)</span></td>
    <td><span class="arithmatex">\(200\)</span></td>
    <td><span class="arithmatex">\((2,1,4,4,0)\)</span></td>
    <td><span class="arithmatex">\(220\)</span></td>
    </tr>
    <tr>
    <td><span class="arithmatex">\((3,0,3,4,1)\)</span></td>
    <td><span class="arithmatex">\(210\)</span></td>
    <td><span class="arithmatex">\((4,0,4,3,0)\)</span></td>
    <td><span class="arithmatex">\(210\)</span></td>
    <td><span class="arithmatex">\((2,1,3,4,1)\)</span></td>
    <td><span class="arithmatex">\(250\)</span></td>
    </tr>
    </table></div>

    The plan $(3,0,4,4,0)$ is the unique optimal plan, and $z(I)=180$.

- Without the capacities the same instance has $2^{m-1}=16$ plans that produce only when the stock is empty, and the optimal cost is $170$: here the capacity costs $10$.

- The optimal plan $(3,0,4,4,0)$ produces in period $4$ with a stock of $1$ unit, so the property of Wagner and Whitin does not hold when the capacities are binding.

- The number of setup choices grows as $2^m$: with $m=52$ weeks it is more than $4\cdot 10^{15}$.

## 7.6 A first plan by hand

- The simplest feasible plan is <strong>lot-for-lot</strong>: in every period we produce exactly the demand of that period. There is no stock, and there are $m$ setups; it is feasible when every demand fits in the capacity of its period.

- A plan is improved by <strong>merging</strong>: the demand of a period is produced in an earlier period, which saves a setup and costs the stock of the units anticipated.

<a id="box-4-ex-cls-hand"></a>

!!! esempio "Example 7.3: from lot-for-lot to a better plan"

    On the instance of <span style="color:#1971c2">[Example 7.1](#box-2-ex-cls5)</span>:

    1. the lot-for-lot plan $(2,1,3,4,1)$ has $5$ setups and no stock: cost $5\cdot 50=250$;

    2. producing the demand of period $2$ in period $1$ saves one setup ($-50$) and keeps $1$ unit for one period ($+10$): the plan $(3,0,3,4,1)$ costs $210$;

    3. period $4$ cannot produce the demand of period $5$ as well, because $4+1>cap_4=4$; but period $3$ can anticipate one unit of period $4$, so that period $4$ has room for the demand of period $5$: the plan $(3,0,4,4,0)$ saves a setup ($-50$) and keeps two more units ($+20$).

    The cost is $210-50+20=180$.

- We have found the plan of cost $180$ by hand, but we cannot yet tell whether a cheaper plan exists: we need a lower bound.

## 7.7 A combinatorial lower bound

- Let $D=\sum_{t \in T} d_t$ be the total demand. Let $k$ be the smallest number of periods whose capacities sum up to at least $D$, which is found by taking the periods with the largest capacities.

<a id="box-5-obs-cls-lb"></a>

!!! teorema "Observation 7.2"

    For every CLS instance, every feasible plan has at least $k$ setups, and

    $$
    z(I) \;\ge\; \text{the sum of the } k \text{ smallest setup costs}.
    $$

- The plan must produce $D$ units in the periods with a setup, and a period without setup produces nothing: the capacities of the periods with a setup sum up to at least $D$, hence they are at least $k$.

- The costs of production and holding are non-negative: dropping them, and paying only $k$ setups, the cheapest ones, gives a bound on the cost of every plan.

<a id="box-6-ex-cls-lb"></a>

!!! esempio "Example 7.4: the bound on the reference instance"

    For the instance of <span style="color:#1971c2">[Example 7.1](#box-2-ex-cls5)</span> we have $D=11$ and all capacities equal to $4$, so $k=\lceil 11/4 \rceil = 3$. All the setup costs are $50$, hence

    $$
    z(I) \ge 3 \cdot 50 = 150.
    $$

    Together with the plans of the previous section we obtain

    $$
    150 \le z(I) \le 180,
    $$

    an absolute gap of $30$, that is a relative gap of $\frac{30}{150}=20\%$. The enumeration of the $94$ plans proves that $180$ is optimal.

## 7.8 Typical mistakes

!!! attenzione "Warning"

    - <strong>Producing late.</strong> The production of a period cannot serve the demand of an earlier period: the stock $s_t(\vet{x})$ must be non-negative in every period.

    - <strong>Charging a setup when nothing is produced.</strong> A setup cost is paid only in the periods with $x_t > 0$.

    - <strong>Forgetting the stock of the last periods.</strong> The holding cost is paid on the stock at the end of every period, including the periods in which the plan produces nothing.

    - <strong>Believing that one produces only with empty stock.</strong> The property of Wagner and Whitin holds without capacities; with capacities the optimal plan of <span style="color:#1971c2">[Example 7.1](#box-2-ex-cls5)</span> violates it.

    - <strong>Counting $2^m$ feasible plans.</strong> The $2^m$ subsets of periods are the setup choices: some are infeasible, and each feasible one carries one or more plans.

## 7.9 In summary

!!! chiave "In summary"

    - The capacitated lot sizing problem asks for the production quantities of every period, with capacities, setups and stock, at the minimum total cost; a solution is a production plan.

    - The combinatorial part is the choice of the periods with a setup: there are $2^m$ choices, only some of them feasible, and each carries one or more plans.

    - Lot-for-lot gives a plan quickly, merging the demands improves it; the number of setups that the total demand requires gives a lower bound.

    - With capacities, optimal plans may produce while the stock is positive; without capacities they never do.

    - The variants add products, setup times, initial stock, overtime or unsatisfied demand; their models are in the chapter on formulations.

    <strong>Dashboard of the CLS instance</strong> (minimization: the lower bound is a dual bound, the upper bound is the cost of a plan):

    <div class="tabella" markdown="0"><table>
    <tr>
    <th>Chapter</th>
    <th>Lower bound</th>
    <th>Upper bound</th>
    <th>From</th>
    </tr>
    <tr>
    <td>This chapter</td>
    <td><span class="arithmatex">\(150\)</span></td>
    <td><span class="arithmatex">\(250\)</span></td>
    <td>three setups at least; lot-for-lot</td>
    </tr>
    <tr>
    <td>This chapter, merging</td>
    <td><span class="arithmatex">\(150\)</span></td>
    <td><span class="arithmatex">\(180\)</span></td>
    <td>the plan <span class="arithmatex">\((3,0,4,4,0)\)</span></td>
    </tr>
    <tr>
    <td>This chapter, enumeration</td>
    <td><span class="arithmatex">\(180\)</span></td>
    <td><span class="arithmatex">\(180\)</span></td>
    <td>the <span class="arithmatex">\(94\)</span> feasible plans</td>
    </tr>
    </table></div>
