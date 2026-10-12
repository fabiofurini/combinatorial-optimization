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

    - [Chapter 8 «Capacitated lot sizing»](../combinatorial-optimization-problems/lot-sizing.md): Definition, variants, counting the setup choices, a first plan by hand and the setup lower bound

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

- $z(I) \ge$ the sum of the $k$ smallest setup costs, with $k$ the smallest number of periods whose capacities sum up to at least $D=\sum_t d_t$ ([Chapter 8 «Capacitated lot sizing»](../combinatorial-optimization-problems/lot-sizing.md#box-5-obs-cls-lb)).

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

- The lot-for-lot plan produces every demand in its period, and merging moves a demand to an earlier period, saving a setup and paying the stock: $250\to210\to180$ on the reference instance ([Chapter 8 «Capacitated lot sizing»](../combinatorial-optimization-problems/lot-sizing.md#box-4-ex-cls-hand)).

- On the uncapacitated instance of the MIP course the least unit cost heuristic gives $200$, against the optimum $170$ ([Chapter 27 «MIP heuristics for the classical problems»](../heuristic-algorithms/mip-heuristics-classical.md#box-16-ex-rfcourse)).

## MIP heuristics { #sez-sec-cat-cls-mipheuristics }

- Relax-and-fix with one setup variable per block finds the optimum $170$ of the uncapacitated instance of the MIP course ([Chapter 27 «MIP heuristics for the classical problems»](../heuristic-algorithms/mip-heuristics-classical.md#box-16-ex-rfcourse)).

- On a capacitated instance relax-and-fix saves a setup too early and stops at $170$; the capacity forces a setup that the relaxation paid only in part ([Chapter 27 «MIP heuristics for the classical problems»](../heuristic-algorithms/mip-heuristics-classical.md#box-17-ex-rfcap)).

- Fix-and-optimize with windows of two consecutive setups revises that decision and reaches the optimum $160$ ([Chapter 27 «MIP heuristics for the classical problems»](../heuristic-algorithms/mip-heuristics-classical.md#box-18-ex-fo)).

## Instances { #sez-sec-cat-cls-ist }

### Instance CLS1 { #sez-sec-cat-ist-cls1 }

Reference instance (lot sizing instance of the MIP course in units of ten items, capacity $4$).

$T=5$ periods:

$$
\begin{array}{l|ccccc}
\hline
t & 1 & 2 & 3 & 4 & 5 \\
\hline
d_t & 2 & 1 & 3 & 4 & 1 \\
C_t & 4 & 4 & 4 & 4 & 4 \\
f_t & 50 & 50 & 50 & 50 & 50 \\
p_t & 0 & 0 & 0 & 0 & 0 \\
h_t & 10 & 10 & 10 & 10 & 10 \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{CLS1})=180$, attained by $\tilde{\vet x}=(3,0,4,4,0)$, $\tilde{\vet y}=(1,0,1,1,0)$, stocks $(1,0,1,1,0)$; unique.

- Used in [CLS instance](../combinatorial-optimization-problems/lot-sizing.md#box-2-ex-cls5), [Counting the plans](../combinatorial-optimization-problems/lot-sizing.md#box-3-ex-cls-count), [From lot-for-lot to a better plan](../combinatorial-optimization-problems/lot-sizing.md#box-4-ex-cls-hand), [The bound on the reference instance](../combinatorial-optimization-problems/lot-sizing.md#box-6-ex-cls-lb), [The reference instance](../formulations/lot-sizing-formulations.md#box-2-ex-CLS-ref), [Big-M values and LP bounds](../formulations/lot-sizing-formulations.md#box-3-ex-CLS-bigM), [Costs and combinations of paths](../formulations/lot-sizing-formulations.md#box-4-ex-CLS-SP), [Comparing the formulations](../formulations/lot-sizing-formulations.md#154-comparing-the-formulations), [Capacitated lot sizing](../dynamic-programming/dp-lot-sizing/a-dp-algorithm-for-the-capacitated-case.md#box-33-texcls1), [Execution of the DP algorithm](../dynamic-programming/dp-lot-sizing/a-dp-algorithm-for-the-capacitated-case.md#box-50-texclsbu), [Computing an optimal solution](../dynamic-programming/dp-lot-sizing/a-dp-algorithm-for-the-capacitated-case.md#box-52-texclssolvector), [The case of constant capacity](../dynamic-programming/dp-lot-sizing/a-dp-algorithm-for-the-capacitated-case.md#2232-the-case-of-constant-capacity).

### Instance ULS1 { #sez-sec-cat-ist-uls1 }

The reference instance without capacities.

$T=5$ periods:

$$
\begin{array}{l|ccccc}
\hline
t & 1 & 2 & 3 & 4 & 5 \\
\hline
d_t & 2 & 1 & 3 & 4 & 1 \\
f_t & 50 & 50 & 50 & 50 & 50 \\
p_t & 0 & 0 & 0 & 0 & 0 \\
h_t & 10 & 10 & 10 & 10 & 10 \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{ULS1})=170$, attained by $(3,0,8,0,0)$.

- Used in [Counting the solutions: without the capacities the optimal cost is $170$](../combinatorial-optimization-problems/lot-sizing.md#84-counting-the-solutions), [Bound of the shortest-path formulation](../formulations/lot-sizing-formulations.md#154-comparing-the-formulations), [Optimal ULS solution, not feasible with capacity $4$](../dynamic-programming/dp-lot-sizing/a-dp-algorithm-for-the-capacitated-case.md#box-33-texcls1).

### Instance ULS2 { #sez-sec-cat-ist-uls2 }

Uncapacitated instance of the MIP course (the ULS above in original units: demands $\times 10$, holding cost $1$).

$T=5$ periods:

$$
\begin{array}{l|ccccc}
\hline
t & 1 & 2 & 3 & 4 & 5 \\
\hline
d_t & 20 & 10 & 30 & 40 & 10 \\
f_t & 50 & 50 & 50 & 50 & 50 \\
p_t & 0 & 0 & 0 & 0 & 0 \\
h_t & 1 & 1 & 1 & 1 & 1 \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{ULS2})=170$, attained by $(30,0,80,0,0)$ and $(30,0,30,50,0)$, two optimal plans.

- Used in [Uncapacitated lot sizing](../dynamic-programming/dp-lot-sizing/index.md#box-2-texuls1), [Enumeration of the solutions with the zero-inventory ordering property](../dynamic-programming/dp-lot-sizing/index.md#box-5-texulsenum), [Computation of the production-run costs](../dynamic-programming/dp-lot-sizing/a-dp-algorithm-for-the-uls.md#box-16-texulscost), [Computing the values of the $v$ function](../dynamic-programming/dp-lot-sizing/a-dp-algorithm-for-the-uls-step-1-and-step-2.md#box-18-texulsvalues), [Execution of the DP algorithm](../dynamic-programming/dp-lot-sizing/a-dp-algorithm-for-the-uls-step-1-and-step-2.md#box-29-texulsbu), [Computing an optimal solution](../dynamic-programming/dp-lot-sizing/a-dp-algorithm-for-the-uls-step-1-and-step-2.md#box-31-texulssolvector), [Relax-and-fix on the lot sizing instance of the MIP course](../heuristic-algorithms/mip-heuristics-classical.md#box-16-ex-rfcourse).

### Instance CLS2 { #sez-sec-cat-ist-cls2 }

Capacitated instance of the MIP course ($F=40$, $h=1$, $Q=80$).

$T=6$ periods:

$$
\begin{array}{l|cccccc}
\hline
t & 1 & 2 & 3 & 4 & 5 & 6 \\
\hline
d_t & 50 & 30 & 10 & 10 & 40 & 10 \\
C_t & 80 & 80 & 80 & 80 & 80 & 80 \\
f_t & 40 & 40 & 40 & 40 & 40 & 40 \\
p_t & 0 & 0 & 0 & 0 & 0 & 0 \\
h_t & 1 & 1 & 1 & 1 & 1 & 1 \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{CLS2})=160$, attained by $(50,50,0,0,50,0)$, setups in periods $1,2,5$.

- Used in [Relax-and-fix on a capacitated instance](../heuristic-algorithms/mip-heuristics-classical.md#box-17-ex-rfcap), [Fix-and-optimize on the capacitated instance](../heuristic-algorithms/mip-heuristics-classical.md#box-18-ex-fo), [Number of steps of the DP (in units of $10$: $d=(5,3,1,1,4,1)$, $hc_t=10$, $cap_t=8$)](../dynamic-programming/dp-lot-sizing/a-dp-algorithm-for-the-capacitated-case.md#2231-number-of-steps).

### Instance CLS3 { #sez-sec-cat-ist-cls3 }

Four periods, capacity $5$.

$T=4$ periods:

$$
\begin{array}{l|cccc}
\hline
t & 1 & 2 & 3 & 4 \\
\hline
d_t & 3 & 2 & 4 & 3 \\
C_t & 5 & 5 & 5 & 5 \\
f_t & 30 & 40 & 30 & 40 \\
p_t & 2 & 2 & 2 & 2 \\
h_t & 4 & 4 & 4 & 4 \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{CLS3})=132$, attained by $(5,0,4,3)$, setups in periods $1,3,4$; unique.

- Used in [Exercise 8.1](../exercises/lot-sizing.md#esercizio-8-1), [Exercise 8.2](../exercises/lot-sizing.md#esercizio-8-2), [Exercise 8.3](../exercises/lot-sizing.md#esercizio-8-3), [Exercise 8.4](../exercises/lot-sizing.md#esercizio-8-4).

### Instance CLS4 { #sez-sec-cat-ist-cls4 }

The same four periods with capacity $6$.

$T=4$ periods:

$$
\begin{array}{l|cccc}
\hline
t & 1 & 2 & 3 & 4 \\
\hline
d_t & 3 & 2 & 4 & 3 \\
C_t & 6 & 6 & 6 & 6 \\
f_t & 30 & 40 & 30 & 40 \\
p_t & 2 & 2 & 2 & 2 \\
h_t & 4 & 4 & 4 & 4 \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{CLS4})=112$, attained by $(6,0,6,0)$; unique.

- Used in [capacity $6$](../exercises/lot-sizing.md#esercizio-8-4).

### Instance ULS3 { #sez-sec-cat-ist-uls3 }

The same four periods without capacities.

$T=4$ periods:

$$
\begin{array}{l|cccc}
\hline
t & 1 & 2 & 3 & 4 \\
\hline
d_t & 3 & 2 & 4 & 3 \\
f_t & 30 & 40 & 30 & 40 \\
p_t & 2 & 2 & 2 & 2 \\
h_t & 4 & 4 & 4 & 4 \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{ULS3})=104$, attained by $(5,0,7,0)$.

- Used in [no capacity](../exercises/lot-sizing.md#esercizio-8-4).

### Instance CLS5 { #sez-sec-cat-ist-cls5 }

Lot-for-lot, a lower bound and the optimum.

$T=3$ periods:

$$
\begin{array}{l|ccc}
\hline
t & 1 & 2 & 3 \\
\hline
d_t & 4 & 3 & 5 \\
C_t & 7 & 6 & 7 \\
f_t & 50 & 20 & 60 \\
p_t & 0 & 0 & 0 \\
h_t & 3 & 3 & 3 \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{CLS5})=91$, attained by $(6,6,0)$ (lot-for-lot $130$, bound $70$).

- Used in [Exercise 8.5](../exercises/lot-sizing.md#esercizio-8-5).

### Instance CLS6 { #sez-sec-cat-ist-cls6 }

Four periods, capacity $4$: formulations.

$T=4$ periods:

$$
\begin{array}{l|cccc}
\hline
t & 1 & 2 & 3 & 4 \\
\hline
d_t & 1 & 4 & 1 & 3 \\
C_t & 4 & 4 & 4 & 4 \\
f_t & 40 & 40 & 40 & 40 \\
p_t & 0 & 0 & 0 & 0 \\
h_t & 5 & 5 & 5 & 5 \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{CLS6})=130$, attained by $(2,4,0,3)$, $\tilde{\vet y}=(1,1,0,1)$; unique.

- Used in [Exercise 15.1](../exercises/lot-sizing-formulations.md#esercizio-15-1), [Exercise 15.2](../exercises/lot-sizing-formulations.md#esercizio-15-2), [Exercise 15.3](../exercises/lot-sizing-formulations.md#esercizio-15-3), [Exercise 15.4](../exercises/lot-sizing-formulations.md#esercizio-15-4).

### Instance CLS7 { #sez-sec-cat-ist-cls7 }

Five periods, capacity $4$: comparing the formulations.

$T=5$ periods:

$$
\begin{array}{l|ccccc}
\hline
t & 1 & 2 & 3 & 4 & 5 \\
\hline
d_t & 2 & 1 & 3 & 3 & 3 \\
C_t & 4 & 4 & 4 & 4 & 4 \\
f_t & 40 & 40 & 40 & 40 & 40 \\
p_t & 0 & 0 & 0 & 0 & 0 \\
h_t & 10 & 10 & 10 & 10 & 10 \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{CLS7})=170$, attained by $(3,0,3,3,3)$; unique.

- Used in [Exercise 15.5](../exercises/lot-sizing-formulations.md#esercizio-15-5).

### Instance MLS1 { #sez-sec-cat-ist-mls1 }

Two products, three periods, setup times and initial inventory.

$2$ products, $T=3$ periods, capacities (time) $cap_1=2500$, $cap_2=2100$, $cap_3=2500$, unit costs of the initial stock $3000$, $3000$: product 1:

$$
\begin{array}{l|ccc}
\hline
t & 1 & 2 & 3 \\
\hline
d_{1t} & 100 & 200 & 10 \\
vt_{1t} & 20 & 10 & 10 \\
st_{1t} & 100 & 100 & 100 \\
f_{1t} & 10000 & 10000 & 10000 \\
p_{1t} & 1100 & 1000 & 1000 \\
h_{1t} & 110 & 100 & 100 \\
\hline
\end{array}
$$

product 2:

$$
\begin{array}{l|ccc}
\hline
t & 1 & 2 & 3 \\
\hline
d_{2t} & 10 & 100 & 150 \\
vt_{2t} & 10 & 5 & 5 \\
st_{2t} & 110 & 110 & 110 \\
f_{2t} & 10000 & 10000 & 10000 \\
p_{2t} & 900 & 800 & 800 \\
h_{2t} & 105 & 105 & 105 \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{MLS1})=677400$, attained by $x_{11}=59$, $x_{12}=200$, $x_{13}=10$, $x_{21}=110$, $x_{22}=0$, $x_{23}=150$, $si_1=41$; unique.

- Used in [Two products](../formulations/lot-sizing-formulations.md#box-5-ex-CLSP-inst).

### Instance ULS4 { #sez-sec-cat-ist-uls4 }

Wagner–Whitin DP, exercise 1.

$T=4$ periods:

$$
\begin{array}{l|cccc}
\hline
t & 1 & 2 & 3 & 4 \\
\hline
d_t & 30 & 10 & 40 & 10 \\
f_t & 50 & 80 & 70 & 60 \\
p_t & 2 & 3 & 1 & 2 \\
h_t & 1 & 2 & 2 & 1 \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{ULS4})=280$, attained by $(40,0,50,0)$.

- Used in [Exercise 22.1](../exercises/dp-lot-sizing.md#esercizio-22-1).

### Instance ULS5 { #sez-sec-cat-ist-uls5 }

Wagner–Whitin DP, exercise 2.

$T=4$ periods:

$$
\begin{array}{l|cccc}
\hline
t & 1 & 2 & 3 & 4 \\
\hline
d_t & 30 & 40 & 10 & 20 \\
f_t & 50 & 80 & 80 & 50 \\
p_t & 1 & 3 & 2 & 1 \\
h_t & 1 & 1 & 1 & 2 \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{ULS5})=260$, attained by $(80,0,0,20)$.

- Used in [Exercise 22.2](../exercises/dp-lot-sizing.md#esercizio-22-2).

### Instance ULS6 { #sez-sec-cat-ist-uls6 }

Wagner–Whitin DP, exercise 3.

$T=5$ periods:

$$
\begin{array}{l|ccccc}
\hline
t & 1 & 2 & 3 & 4 & 5 \\
\hline
d_t & 10 & 30 & 40 & 30 & 40 \\
f_t & 70 & 80 & 50 & 80 & 50 \\
p_t & 1 & 1 & 1 & 1 & 2 \\
h_t & 1 & 1 & 2 & 1 & 2 \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{ULS6})=420$, attained by $(40,0,40,70,0)$.

- Used in [Exercise 22.3](../exercises/dp-lot-sizing.md#esercizio-22-3).

### Instance CLS8 { #sez-sec-cat-ist-cls8 }

DP on (period, inventory), exercise 4.

$T=3$ periods:

$$
\begin{array}{l|ccc}
\hline
t & 1 & 2 & 3 \\
\hline
d_t & 1 & 2 & 3 \\
C_t & 2 & 4 & 4 \\
f_t & 10 & 5 & 8 \\
p_t & 1 & 1 & 2 \\
h_t & 1 & 1 & 2 \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{CLS8})=25$, attained by $(2,4,0)$.

- Used in [Exercise 22.4](../exercises/dp-lot-sizing.md#esercizio-22-4).

### Instance CLS9 { #sez-sec-cat-ist-cls9 }

DP on (period, inventory), exercise 5.

$T=4$ periods:

$$
\begin{array}{l|cccc}
\hline
t & 1 & 2 & 3 & 4 \\
\hline
d_t & 3 & 1 & 1 & 2 \\
C_t & 4 & 3 & 3 & 2 \\
f_t & 5 & 6 & 10 & 10 \\
p_t & 2 & 1 & 1 & 1 \\
h_t & 1 & 1 & 2 & 2 \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{CLS9})=30$, attained by $(4,3,0,0)$.

- Used in [Exercise 22.5](../exercises/dp-lot-sizing.md#esercizio-22-5).

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
