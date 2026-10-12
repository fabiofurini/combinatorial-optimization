---
title: "Variants"
---

# 8.2 Variants

<div class="info-capitolo" markdown>

**Part 1 · Combinatorial optimization problems · Chapter 8** · [:material-book-open-variant: Chapter 8: Lot sizing](index.md) · [:material-file-pdf-box: Lecture notes, volume 1 (PDF)](../../pdf/lecture-notes-1-combinatorial-optimization-problems.pdf) · [:material-pencil: Exercises: Lot sizing](../../exercises/lot-sizing.md)

</div>

- In the <strong>uncapacitated lot sizing problem</strong> the capacities are not binding, for example $cap_t \ge \sum_u d_u$. It is solved in polynomial time by dynamic programming.

- With <strong>several products</strong>, a set $P$ of products shares one resource: $d_{pt}$ is the demand of product $p \in P$ in period $t$, and $cap_t$ is the time available in period $t$. Producing a unit of $p$ takes $vt_{pt}$ units of time, and a setup of $p$ costs $sc_{pt}$ and takes $st_{pt}$ units of time.

- With an <strong>initial stock</strong>, the quantity $si_p$ of product $p$ available at the beginning of the horizon is a decision, bought at the cost $fc_p$ per unit.

- With <strong>overtime</strong>, the capacity is not fixed: working time in normal hours costs $cw_t$ per unit up to $cap^{N}_t$, and overtime costs $co_t$ per unit up to $cap^{O}_t$.

- With <strong>unsatisfied demand</strong>, a part of the demand may be left unsatisfied, at a penalty $cu_{pt}$ per unit.

- The models of all these variants, with their big-$M$ constraints, are the subject of the chapter «Formulations of capacitated lot sizing». This chapter studies the problem of the definition above.

## 8.3 Counting the solutions

- The combinatorial part of the decision is the choice of the periods with a setup: there are $2^m$ subsets of periods. Not all of them are feasible, because the periods with a setup must have enough capacity to produce everything.

- For a given choice of the setup periods there may be many production plans, since the quantities can be distributed in many ways: the number of feasible plans is larger than the number of feasible setup choices.

<a id="box-3-ex-cls-count"></a>

!!! esempio "Example 8.2: counting the plans"

    For the instance of <span style="color:#1971c2">[Example 8.1](index.md#box-2-ex-cls5)</span> there are $2^5=32$ subsets of periods. Let $k_t$ be the number of setups in the periods $1,\dots,t$: the cumulative demands $2,3,6,10,11$ require, with capacity $4$, at least one setup in the periods $1$–$2$, two in the periods $1$–$3$ and three in the periods $1$–$4$. Since $d_1>0$ there is a setup in period $1$, and in the periods $2,3,4$ we need at least two setups, one of which in the periods $2$ or $3$:

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

## 8.4 A first plan by hand

- The simplest feasible plan is <strong>lot-for-lot</strong>: in every period we produce exactly the demand of that period. There is no stock, and there are $m$ setups; it is feasible when every demand fits in the capacity of its period.

- A plan is improved by <strong>merging</strong>: the demand of a period is produced in an earlier period, which saves a setup and costs the stock of the units anticipated.

<a id="box-4-ex-cls-hand"></a>

!!! esempio "Example 8.3: from lot-for-lot to a better plan"

    On the instance of <span style="color:#1971c2">[Example 8.1](index.md#box-2-ex-cls5)</span>:

    1. the lot-for-lot plan $(2,1,3,4,1)$ has $5$ setups and no stock: cost $5\cdot 50=250$;

    2. producing the demand of period $2$ in period $1$ saves one setup ($-50$) and keeps $1$ unit for one period ($+10$): the plan $(3,0,3,4,1)$ costs $210$;

    3. period $4$ cannot produce the demand of period $5$ as well, because $4+1>cap_4=4$; but period $3$ can anticipate one unit of period $4$, so that period $4$ has room for the demand of period $5$: the plan $(3,0,4,4,0)$ saves a setup ($-50$) and keeps two more units ($+20$).

    The cost is $210-50+20=180$.

- We have found the plan of cost $180$ by hand, but we cannot yet tell whether a cheaper plan exists: we need a lower bound.

## 8.5 A combinatorial lower bound

- Let $D=\sum_{t \in T} d_t$ be the total demand. Let $k$ be the smallest number of periods whose capacities sum up to at least $D$, which is found by taking the periods with the largest capacities.

<a id="box-5-obs-cls-lb"></a>

!!! teorema "Observation 8.2"

    For every CLS instance, every feasible plan has at least $k$ setups, and

    $$
    z(I) \;\ge\; \text{the sum of the } k \text{ smallest setup costs}.
    $$

- The plan must produce $D$ units in the periods with a setup, and a period without setup produces nothing: the capacities of the periods with a setup sum up to at least $D$, hence they are at least $k$.

- The costs of production and holding are non-negative: dropping them, and paying only $k$ setups, the cheapest ones, gives a bound on the cost of every plan.

<a id="box-6-ex-cls-lb"></a>

!!! esempio "Example 8.4: the bound on the reference instance"

    For the instance of <span style="color:#1971c2">[Example 8.1](index.md#box-2-ex-cls5)</span> we have $D=11$ and all capacities equal to $4$, so $k=\lceil 11/4 \rceil = 3$. All the setup costs are $50$, hence

    $$
    z(I) \ge 3 \cdot 50 = 150.
    $$

    Together with the plans of the previous section we obtain

    $$
    150 \le z(I) \le 180,
    $$

    an absolute gap of $30$, that is a relative gap of $\frac{30}{150}=20\%$. The enumeration of the $94$ plans proves that $180$ is optimal.

## 8.6 Remarks

- In 1958 Wagner and Whitin gave a dynamic programming algorithm for the case without capacity and with demand that varies over time. It rests on a property of the optimal plans: one produces only when the stock is empty.

- With capacities the property fails, and the problem is NP-hard (chapter «Combinatorial optimization problems»).

## 8.7 Typical mistakes

!!! attenzione "Warning"

    - <strong>Producing late.</strong> The production of a period cannot serve the demand of an earlier period: the stock $s_t(\vet{x})$ must be non-negative in every period.

    - <strong>Charging a setup when nothing is produced.</strong> A setup cost is paid only in the periods with $x_t > 0$.

    - <strong>Forgetting the stock of the last periods.</strong> The holding cost is paid on the stock at the end of every period, including the periods in which the plan produces nothing.

    - <strong>Believing that one produces only with empty stock.</strong> The property of Wagner and Whitin holds without capacities; with capacities the optimal plan of <span style="color:#1971c2">[Example 8.1](index.md#box-2-ex-cls5)</span> violates it.

    - <strong>Counting $2^m$ feasible plans.</strong> The $2^m$ subsets of periods are the setup choices: some are infeasible, and each feasible one carries one or more plans.

## 8.8 In summary

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

---

**Exercises on this chapter:** [:material-pencil: Lot sizing](../../exercises/lot-sizing.md)

---

**In depth:** [:material-star-outline: the course on this problem](../../selected-problems/lot-sizing.md)

