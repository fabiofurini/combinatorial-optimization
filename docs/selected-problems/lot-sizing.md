---
title: "Capacitated lot sizing"
---

# Capacitated lot sizing

<div class="info-capitolo" markdown>

**Selected problems** · [:material-view-list: Catalogue of combinatorial problems](../catalogue/index.md)

</div>

<a id="sec:cat-cls"></a>

<a id="sec:cat-pagina-central-problems"></a>

!!! chiave ""

    Plan the production of every period, with capacities, setup costs and stock, at minimum total cost.

!!! nota "Where it is treated"

    - [Chapter 1 «Combinatorial optimization problems»](../combinatorial-optimization-problems/combinatorial-optimization.md#box-12-def-oc1-cls): One of the six problems of the course: the subset of setup periods and the complexity

    - [Chapter 8 «Capacitated lot sizing»](../combinatorial-optimization-problems/lot-sizing/index.md): Definition, variants, counting the setup choices, a first plan by hand and the setup lower bound

    - [Chapter 15 «Formulations of capacitated lot sizing»](../formulations/lot-sizing-formulations.md): The big-M formulation with weak and strong values, the shortest-path formulation, several products

    - [Chapter 22 «Dynamic programming for lot sizing»](../dynamic-programming/dp-lot-sizing/index.md): Wagner–Whitin DP for the ULS in $\Theta(m^2)$ and the pseudo-polynomial DP on (period, inventory) for the CLS

    - [Chapter 27 «MIP heuristics for the classical problems»](../heuristic-algorithms/mip-heuristics-classical.md#sez-sec-rf): Relax-and-fix and fix-and-optimize on an uncapacitated and a capacitated instance

## Definition { #sez-sec-cat-cls-def }

- Definition and assumptions: [Catalogue of combinatorial problems](../catalogue/central-problems.md#sez-sec-cat-def-cls).

- It models the production planning of one product over a horizon of periods, where every production run pays a fixed setup cost and anticipated units pay a holding cost.

- A solution is a <strong>production plan</strong> $\vet{x}=(x_1,\dots,x_m)\in\Z_{\ge 0}^m$; its combinatorial part is the <strong>subset</strong> of periods with a setup, one of $2^m$ choices.

- Once the setup periods are fixed, the quantities are found by linear programming (a minimum cost flow problem with an integer optimal solution).

## Bounds and complexity { #sez-sec-cat-cls-prop }

- <strong>Complexity</strong>: NP-hard with general capacities; with integer data the DP algorithm on (period, inventory) is pseudo-polynomial, $O(m\,D\,C)$; polynomial with constant capacity, and the ULS in $\Theta(m^2)$.

- $z(I) \ge$ the sum of the $k$ smallest setup costs, with $k$ the smallest number of periods whose capacities sum up to at least $D=\sum_t d_t$ ([Chapter 8 «Capacitated lot sizing»](../combinatorial-optimization-problems/lot-sizing/variants.md#box-5-obs-cls-lb)).

- $z(\LP_{\CLSP}^{\mathrm{strong}})$ with $M_t=\min\{cap_t,D_{t,m}\}$: the smaller the big-M value, the stronger the LP relaxation ([Chapter 15 «Formulations of capacitated lot sizing»](../formulations/lot-sizing-formulations.md#1521-weak-and-strong-big-m-values)).

- $z(\LP_{\CLSP}^{\mathrm{SP}})$ of the shortest-path formulation, the strongest of the LP bounds of the chapter ($170$ on the reference instance) ([Chapter 15 «Formulations of capacitated lot sizing»](../formulations/lot-sizing-formulations.md#154-comparing-the-formulations)).

- Of the $2^m$ setup choices only those whose capacities cover the cumulative demands are feasible, and each carries one or more plans: $8$ choices and $94$ plans on the reference instance.

- With binding capacities an optimal plan may produce while the stock is positive: $(3,0,4,4,0)$ produces in period $4$ with one unit in stock.

- Increasing the capacities can only lower the optimal cost: $132$, $112$ and $104$ with $cap_t=5$, $cap_t=6$ and no capacity in [Exercise 8.4](../exercises/lot-sizing.md#esercizio-8-4).

## Formulation { #sez-sec-cat-cls-formulation }

- <strong>Big-M formulation of the CLS ($\ILP_{\CLSP}$)</strong> ([Chapter 15 «Formulations of capacitated lot sizing»](../formulations/lot-sizing-formulations.md#eq-CLS-bigM)):

\begin{align*}
\min\ & \sum_{t \in T} \left(sc_{t}\,y_{t} + vc_{t}\,x_{t} + hc_{t}\,s_{t} \right) \\
& s_{t-1} + x_{t} = d_{t} + s_{t}, & \forall t\in T, \\
& x_{t} \le M_{t}\, y_{t}, & \forall t\in T, \\
& x_{t} \le cap_{t}, & \forall t\in T, \\
& s_0 = s_m = 0, \\
& x_{t},~ s_{t} \in \Z_{\ge 0}, & \forall t\in T, \\
& y_{t} \in \{0, 1\}, & \forall t\in T.
\end{align*}

- <strong>Shortest-path formulation of the CLS, with $cv_{tk}=vc_{t}\,D_{t,k}+\sum_{s=t+1}^{k}\sum_{u=t}^{s-1}hc_{u}\,d_{s}$</strong> ([Chapter 15 «Formulations of capacitated lot sizing»](../formulations/lot-sizing-formulations.md#eq-CLS-SP)):

\begin{align*}
\min\ & \sum_{t \in T} sc_{t}\,y_{t} + \sum_{t \in T}\sum_{k=t}^{m} cv_{tk}\,zv_{tk} \\
& \sum_{k=1}^{m} zv_{1k} = 1, \\
& \sum_{u=1}^{t-1}zv_{u,t-1} =\sum_{k=t}^{m}zv_{tk}, & \forall t\in T\setminus\{1\}, \\
& \sum_{k=t}^{m}zv_{tk} \leq y_{t}, & \forall t\in T, \\
& \sum_{k=t}^{m} D_{t,k}\,zv_{tk} \leq cap_t, & \forall t\in T, \\
& zv_{tk} \geq 0, & \forall t,k\in T,~ k\geq t, \\
& y_{t} \in \{0, 1\}, & \forall t \in T.
\end{align*}

- The big-M formulation $\ILP_{\CLSP}$ has the balance constraints $s_{t-1}+x_t=d_t+s_t$, the link $x_t\le M_t\,y_t$ and the capacities $x_t\le cap_t$ ([Chapter 15 «Formulations of capacitated lot sizing»](../formulations/lot-sizing-formulations.md#eq-CLS-bigM)).

- The strong value $M_t=\min\{cap_t,D_{t,m}\}$ raises the LP bound of the reference instance from $99.65$ ($M_t=D_{t,m}$) and $137.5$ ($M_t=cap_t$) to $157.5$ ([Chapter 15 «Formulations of capacitated lot sizing»](../formulations/lot-sizing-formulations.md#box-3-ex-CLS-bigM)).

- The shortest-path formulation, with $O(m^2)$ variables $zv_{tk}$ and the link $\sum_k zv_{tk}\le y_t$, gives the bound $170$, the optimal value without capacities ([Chapter 15 «Formulations of capacitated lot sizing»](../formulations/lot-sizing-formulations.md#154-comparing-the-formulations)).

- A plan that is not a path is a combination of paths: the optimal plan $(3,0,4,4,0)$ uses $zv_{33}=\frac45$ and $zv_{35}=\frac15$ ([Chapter 15 «Formulations of capacitated lot sizing»](../formulations/lot-sizing-formulations.md#box-4-ex-CLS-SP)).

## Dynamic programming { #sez-sec-cat-cls-dynamicprogramming }

- Without capacities an optimal plan produces only with empty stock (Wagner and Whitin), so it is a sequence of production runs ([Chapter 22 «Dynamic programming for lot sizing»](../dynamic-programming/dp-lot-sizing/index.md#box-4-thmZIO)).

- The recurrence $v(t)=\min_j\{v(j-1)+c_{j,t}\}$ over the last production run solves the ULS in $\Theta(m^2)$ steps; it is a shortest path ([Chapter 22 «Dynamic programming for lot sizing»](../dynamic-programming/dp-lot-sizing/a-dp-algorithm-for-the-uls.md#222-a-dp-algorithm-for-the-uls)).

- With capacities the property fails: the state is the pair (period $t$, final inventory $k$), and the recurrence $v(t,k)$ with the production cost $f_t(x)$ gives $v(m,0)$ ([Chapter 22 «Dynamic programming for lot sizing»](../dynamic-programming/dp-lot-sizing/a-dp-algorithm-for-the-capacitated-case.md#223-a-dp-algorithm-for-the-capacitated-case)).

- The DP algorithm for the CLS takes $O(m\,D\,C)$ steps, with $D$ the total demand and $C$ the largest capacity: it is pseudo-polynomial ([Chapter 22 «Dynamic programming for lot sizing»](../dynamic-programming/dp-lot-sizing/a-dp-algorithm-for-the-capacitated-case.md#2231-number-of-steps)).

## Constructive heuristics { #sez-sec-cat-cls-constructiveheuristics }

- The lot-for-lot plan produces every demand in its period, and merging moves a demand to an earlier period, saving a setup and paying the stock: $250\to210\to180$ on the reference instance ([Chapter 8 «Capacitated lot sizing»](../combinatorial-optimization-problems/lot-sizing/variants.md#box-4-ex-cls-hand)).

- On the uncapacitated instance of the MIP course the least unit cost heuristic gives $200$, against the optimum $170$ ([Chapter 27 «MIP heuristics for the classical problems»](../heuristic-algorithms/mip-heuristics-classical.md#box-16-ex-rfcourse)).

## MIP heuristics { #sez-sec-cat-cls-mipheuristics }

- Relax-and-fix with one setup variable per block finds the optimum $170$ of the uncapacitated instance of the MIP course ([Chapter 27 «MIP heuristics for the classical problems»](../heuristic-algorithms/mip-heuristics-classical.md#box-16-ex-rfcourse)).

- On a capacitated instance relax-and-fix saves a setup too early and stops at $170$; the capacity forces a setup that the relaxation paid only in part ([Chapter 27 «MIP heuristics for the classical problems»](../heuristic-algorithms/mip-heuristics-classical.md#box-17-ex-rfcap)).

- Fix-and-optimize with windows of two consecutive setups revises that decision and reaches the optimum $160$ ([Chapter 27 «MIP heuristics for the classical problems»](../heuristic-algorithms/mip-heuristics-classical.md#box-18-ex-fo)).

## Exercises { #sez-sec-cat-cls-es }

- [Exercise «Recognizing the problems» (choices of the setup periods)](../combinatorial-optimization-problems/combinatorial-optimization.md#110-exercises)

- [Feasibility and cost of a plan](../exercises/lot-sizing.md#esercizio-8-1)

- [Counting the setup choices](../exercises/lot-sizing.md#esercizio-8-2)

- [The best plan by enumeration of the setups](../exercises/lot-sizing.md#esercizio-8-3)

- [The effect of the capacity](../exercises/lot-sizing.md#esercizio-8-4)

- [Lot-for-lot, a lower bound and the optimum](../exercises/lot-sizing.md#esercizio-8-5)

- [The big-M formulation of lot sizing](../exercises/lot-sizing-formulations.md#esercizio-15-1)

- [Big-M values and LP bounds for lot sizing](../exercises/lot-sizing-formulations.md#esercizio-15-2)

- [Feasible solutions of the lot-sizing formulation](../exercises/lot-sizing-formulations.md#esercizio-15-3)

- [The shortest-path formulation of lot sizing](../exercises/lot-sizing-formulations.md#esercizio-15-4)

- [Comparing the lot-sizing formulations](../exercises/lot-sizing-formulations.md#esercizio-15-5)

- [Uncapacitated lot sizing (Wagner–Whitin) 1](../exercises/dp-lot-sizing.md#esercizio-22-1)

- [Uncapacitated lot sizing (Wagner–Whitin) 2](../exercises/dp-lot-sizing.md#esercizio-22-2)

- [Uncapacitated lot sizing (Wagner–Whitin) 3](../exercises/dp-lot-sizing.md#esercizio-22-3)

- [Capacitated lot sizing, DP on (period, inventory) 1](../exercises/dp-lot-sizing.md#esercizio-22-4)

- [Capacitated lot sizing, DP on (period, inventory) 2](../exercises/dp-lot-sizing.md#esercizio-22-5)

## Variants { #sez-sec-cat-cls-var }

- [Uncapacitated lot sizing problem (ULS)](../catalogue/lot-sizing.md#sez-sec-cat-def-uls): Special case of the CLS in which the capacities are not binding, for example $cap_t \ge \sum_u d_u$.

- [Capacitated lot sizing with constant capacity (CLS-C)](../catalogue/lot-sizing.md#sez-sec-cat-def-clsc): Special case of the CLS; the zero-inventory ordering property is replaced by a weaker one: between two periods with empty inventory at most one period produces a quantity strictly between $0$ and $C$.

- [Lot sizing with several products and setup times (MLS)](../catalogue/lot-sizing.md#sez-sec-cat-def-mls): Generalizes the CLS, which is the case of one product with $vt_t=1$ and no setup time.

- [Lot sizing with initial stock (LS-SI)](../catalogue/lot-sizing.md#sez-sec-cat-def-lssi): Removes the assumption of an empty initial stock of the CLS.

- [Lot sizing with overtime (LS-OT)](../catalogue/lot-sizing.md#sez-sec-cat-def-lsot): Replaces the fixed capacity $cap_t$ of the CLS by two levels of capacity with different costs.

- [Lot sizing with unsatisfied demand (LS-UD)](../catalogue/lot-sizing.md#sez-sec-cat-def-lsud): Relaxes the demand constraints of the CLS, with a penalty in the objective.
