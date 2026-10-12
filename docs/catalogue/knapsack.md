---
title: "The knapsack problem"
---

# The knapsack problem

<div class="info-capitolo" markdown>

**Catalogue of combinatorial problems** · [:material-file-pdf-box: Catalogue of problems (PDF)](../pdf/combinatorial-problem-catalogue.pdf)

</div>

<a id="sec:cat-kp"></a>

<a id="sec:cat-pagina-knapsack"></a>

!!! chiave ""

    Choose a subset of items of maximum total profit whose total weight does not exceed the capacity.

!!! nota "Where it is treated"

    - [Chapter 1 «Combinatorial optimization problems»](../combinatorial-optimization-problems/combinatorial-optimization.md#121-knapsack-problem): First definition, brute force on a small instance, greedy primal bound and continuous dual bound

    - [Chapter 2 «Knapsack problems»](../combinatorial-optimization-problems/knapsack.md): Definition, assumptions, counting, cardinality bound and the seven variants

    - [Chapter 9 «Formulations of the knapsack problem»](../formulations/knapsack-formulations.md): ILP model, the two LP relaxations and their duals, split item, Dantzig and Martello–Toth bounds

    - [Chapter 16 «Principles of dynamic programming»](../dynamic-programming/dp-principles.md#164-the-dp-algorithms-of-this-module): The KP and the UKP as running examples of dynamic programming

    - [Chapter 17 «Dynamic programming for knapsack problems»](../dynamic-programming/dp-knapsack.md): DP algorithms by capacities, by lists of states and by profits; DP for the UKP and the BKP

    - [Chapter 20 «Heuristic algorithms: definitions»](../heuristic-algorithms/heuristics.md#box-2-ex-refKP): KP reference instance of the heuristic part, gap and the flip and swap neighbourhoods

    - [Chapter 21 «Constructive heuristics»](../heuristic-algorithms/constructive-heuristics.md#sez-sec-KP): Greedy algorithms by profit, by weight and by efficiency

    - [Chapter 22 «Local search»](../heuristic-algorithms/local-search.md#sez-sec-kp): Flip and swap local search, first and best improvement, penalties on the excess weight

    - [Chapter 23 «Metaheuristics»](../heuristic-algorithms/metaheuristics.md#sez-sec-sa-kp): Simulated annealing with a penalty, GRASP, genetic and memetic algorithms, the medium instance KP20

    - [Chapter 24 «MIP heuristics for the classical problems»](../heuristic-algorithms/mip-heuristics-classical.md#2421-the-knapsack-problem): Rounding, diving, RINS, local branching and proximity search on the KP model

    - [Chapter 25 «Approximation algorithms: definitions»](../approximation-algorithms/approximation.md): The greedy algorithm without a constant guarantee, in the exercises

    - [Chapter 27 «Approximation algorithms for the knapsack problem»](../approximation-algorithms/knapsack-approximation.md): Greedy, Ext-Greedy, $H^2$, $H^{\ell}$, the PTAS, the Basic-FPTAS and the absence of an absolute guarantee

    - [Chapter 29 «Knapsack: branch-and-bound on the critical item»](../specialized-algorithms/knapsack-branch-and-bound.md): LP-based branch-and-bound with the Dantzig formulas and branching on the split item

## Definition { #sez-sec-cat-kp-def }

<a id="box-1-def-cat-kp"></a>

!!! definizione "Definition 1: The knapsack problem"

    Given:

    1. a knapsack of <em>capacity</em> $c \in \Z_{\ge 1}$,

    2. a set $\Ioggetti = \{1,2,\dots,n\}$ of $n$ items,

    3. for each item $j \in \Ioggetti$, a <em>profit</em> $p_j \in \Z_{\ge 1}$ and a <em>weight</em> $w_j \in \Z_{\ge 1}$,

    the <strong>Knapsack Problem</strong> (KP) asks to decide which items to insert into the knapsack, so that the total weight of the selected items does not exceed the knapsack capacity, and the total profit of the selected items is maximized. A KP feasible solution is a subset $S \subseteq \Ioggetti$ with $\sum_{j\in S} w_j \le c$, and

    $$
    \tilde{S}\in \argmax_{S \subseteq \Ioggetti}
    \left\{~~ \sum_{j \in S} p_j \;\;:\;\; \sum_{j \in S} w_j \le c ~~\right\}.
    $$

- Defined in [Chapter 2 «Knapsack problems»](../combinatorial-optimization-problems/knapsack.md#box-1-defKP).

- The KP models the choice of a subset of objects, projects or investments under one budget or capacity constraint.

- A solution is a <strong>subset</strong> of the items, so an instance with $n$ items has $2^n$ candidate solutions ([Chapter 1 «Combinatorial optimization problems»](../combinatorial-optimization-problems/combinatorial-optimization.md#box-13-prop-subsets)).

- The assumptions $w_j \le c$ for all $j\in\Ioggetti$ and $\sum_{j\in\Ioggetti} w_j > c$ remove the items that never fit and the trivial instances ([Chapter 2 «Knapsack problems»](../combinatorial-optimization-problems/knapsack.md#211-assumptions)).

## Bounds and complexity { #sez-sec-cat-kp-prop }

- <strong>Complexity</strong>: Weakly NP-hard: it contains the SSP as the special case $p_j=w_j$, and it is solved by dynamic programming in $\Theta(nc)$ steps, a pseudo-polynomial time ([Chapter 1 «Combinatorial optimization problems»](../combinatorial-optimization-problems/combinatorial-optimization.md#box-23-def-pseudo)).

- Cardinality bound: if the $\bar k$ lightest items are the most that fit, $z(I)$ is at most the sum of the $\bar k$ largest profits ([Chapter 2 «Knapsack problems»](../combinatorial-optimization-problems/knapsack.md#box-3-obs-kp-card)).

- $z(\LP\text{-}0_{\KP}) = p_1\,\frac{c}{w_1}$, with item $1$ of largest efficiency (relaxation without $x_j\le 1$) ([Chapter 9 «Formulations of the knapsack problem»](../formulations/knapsack-formulations.md#box-6-propXX)).

- $z(\LP_{\KP}) = \sum_{j=1}^{s-1} p_j + p_s\,\frac{\mathit{rc}}{w_s}$, with the items sorted by non-increasing efficiency ([Chapter 9 «Formulations of the knapsack problem»](../formulations/knapsack-formulations.md#box-14-corLPKP)).

- Dantzig bound $\UB_{\mathrm{D}} = \sum_{j=1}^{s-1} p_j + \left\lfloor p_s\,\frac{\mathit{rc}}{w_s} \right\rfloor$ ([Chapter 9 «Formulations of the knapsack problem»](../formulations/knapsack-formulations.md#box-18-propDantzig)).

- Martello–Toth bound $\UB_{\mathrm{MT}} = \max\{\UB_0,\UB_1\}$, with $\UB_0 = \sum_{j=1}^{s-1} p_j + \left\lfloor \mathit{rc}\,\frac{p_{s+1}}{w_{s+1}} \right\rfloor$ and $\UB_1 = \sum_{j=1}^{s-1} p_j + \left\lfloor p_s - (w_s-\mathit{rc})\,\frac{p_{s-1}}{w_{s-1}} \right\rfloor$ ([Chapter 9 «Formulations of the knapsack problem»](../formulations/knapsack-formulations.md#box-19-propMT)).

- For every instance $z(\LP_{\KP})/z(\ILP_{\KP}) \le 2$, and there are instances where the ratio tends to $2$ as $c\to+\infty$ ([Chapter 9 «Formulations of the knapsack problem»](../formulations/knapsack-formulations.md#box-17-propRatio2tight)).

- The order by efficiency is not enough to find an optimal solution: on the reference instance it gives $\{1,2\}$ with profit $11$, while the optimum is $15$ ([Chapter 2 «Knapsack problems»](../combinatorial-optimization-problems/knapsack.md#211-typical-mistakes)).

- In every node of the branch-and-bound tree at most one variable is fractional, the one of the split item ([Chapter 29 «Knapsack: branch-and-bound on the critical item»](../specialized-algorithms/knapsack-branch-and-bound.md#2911-solving-the-lp_kpk-problem-of-a-node)).

## Formulation { #sez-sec-cat-kp-formulation }

- <strong>ILP model of the KP ($\ILP_{\KP}$)</strong> ([Chapter 9 «Formulations of the knapsack problem»](../formulations/knapsack-formulations.md#eq-NAT_KP)):

\begin{align*}
\max\ & \sum_{j\in\Ioggetti} p_j x_j \\
& \sum_{j\in\Ioggetti} w_j x_j \le c \\
& x_j \in \{0,1\} && j\in\Ioggetti
\end{align*}

- <strong>LP relaxation $\LP_{\KP}$</strong> ([Chapter 9 «Formulations of the knapsack problem»](../formulations/knapsack-formulations.md#94-a-second-linear-programming-relaxation)):

\begin{align*}
\max\ & \sum_{j\in\Ioggetti} p_j x_j \\
& \sum_{j\in\Ioggetti} w_j x_j \le c \\
& x_j \le 1 && j\in\Ioggetti \\
& x_j \ge 0 && j\in\Ioggetti
\end{align*}

- <strong>Dual $D(\LP_{\KP})$</strong> ([Chapter 9 «Formulations of the knapsack problem»](../formulations/knapsack-formulations.md#eq-DUAL)):

\begin{align*}
\min\ & c\,\pi + \sum_{j\in\Ioggetti} \mu_j \\
& w_j\,\pi + \mu_j \ge p_j && j\in\Ioggetti \\
& \pi \ge 0 \\
& \mu_j \ge 0 && j\in\Ioggetti
\end{align*}

- The $\ILP_{\KP}$ model has one binary variable $x_j$ per item, one capacity constraint and the objective of maximizing the total profit ([Chapter 9 «Formulations of the knapsack problem»](../formulations/knapsack-formulations.md#eq-NAT_KP)).

- The relaxation $\LP_{\KP}$ is solved by sorting the items by non-increasing efficiency $p_j/w_j$: the items before the split item $s$ are taken, $s$ for the fraction $\mathit{rc}/w_s$ ([Chapter 9 «Formulations of the knapsack problem»](../formulations/knapsack-formulations.md#box-13-propLPKP)).

- The dual $D(\LP_{\KP})$ has the optimal solution $\tilde{\pi} = p_s/w_s$, $\tilde\mu_j = p_j - w_j\,p_s/w_s$ for $j<s$, and $z(\LP_{\KP}) \le 2\, z(\ILP_{\KP})$ ([Chapter 9 «Formulations of the knapsack problem»](../formulations/knapsack-formulations.md#box-16-propRatio2)).

- Rounding down $z(\LP_{\KP})$ gives the Dantzig bound $\UB_{\mathrm{D}}$; the Martello–Toth bound $\UB_{\mathrm{MT}}$ treats separately the split item out and in ([Chapter 9 «Formulations of the knapsack problem»](../formulations/knapsack-formulations.md#95-knapsack-problem-upper-bounds)).

## Dynamic programming { #sez-sec-cat-kp-dynamicprogramming }

- The recurrence $v(j,k)=\max\{v(j-1,k),\ p_j+v(j-1,k-w_j)\}$ over items and capacities is filled bottom-up in $\Theta(nc)$ steps, which is pseudo-polynomial ([Chapter 17 «Dynamic programming for knapsack problems»](../dynamic-programming/dp-knapsack.md#171-a-dp-algorithm-for-the-knapsack-problem)).

- The lists $L_j$ of the non-dominated states $(w,p)$ store only the reachable states, with $|L_j|\le \min\{2^j, c+1\}$ ([Chapter 17 «Dynamic programming for knapsack problems»](../dynamic-programming/dp-knapsack.md#box-29-texkp3graph)).

- Exchanging profits and weights, $u(j,q)$ is the minimum weight of a subset of profit $q$, and $z = \max\{q : u(n,q)\le c\}$ is computed in $\Theta(nP)$ steps ([Chapter 17 «Dynamic programming for knapsack problems»](../dynamic-programming/dp-knapsack.md#1713-a-second-dp-algorithm)).

- The UKP is solved by the recurrence $v(k)$ over the capacities and the BKP by $v(j,k)$ over the numbers of copies ([Chapter 17 «Dynamic programming for knapsack problems»](../dynamic-programming/dp-knapsack.md#172-a-dp-algorithm-for-the-unbounded-knapsack-problem), [Chapter 17 «Dynamic programming for knapsack problems»](../dynamic-programming/dp-knapsack.md#173-a-dp-algorithm-for-the-bounded-knapsack-problem)).

## Constructive heuristics { #sez-sec-cat-kp-constructiveheuristics }

- A greedy algorithm for the KP is determined by the order of the items: by profit ($GR_p$), by weight ($GR_w$) or by efficiency ($GR$) ([Chapter 21 «Constructive heuristics»](../heuristic-algorithms/constructive-heuristics.md#sez-sec-KP)).

- On the reference instance $GR_p$ finds the optimum $17$, while $GR$ gives $16$ and $GR_w$ gives $10$ ([Chapter 21 «Constructive heuristics»](../heuristic-algorithms/constructive-heuristics.md#box-3-ex-kp3)).

- Each of the three orders can be arbitrarily bad, and taking the better of $GR$ and of the best single item guarantees a ratio of $2$ ([Chapter 21 «Constructive heuristics»](../heuristic-algorithms/constructive-heuristics.md#sez-sec-KP)).

## Local search { #sez-sec-cat-kp-localsearch }

- The flip neighbourhood adds or removes one item, the swap neighbourhood exchanges a selected and an unselected item; being a local optimum depends on the neighbourhood ([Chapter 20 «Heuristic algorithms: definitions»](../heuristic-algorithms/heuristics.md#box-11-ex-kpneigh)).

- From the solution of $GR_w$, first and best improvement reach the optimum along different paths, $10\to14\to17$ and $10\to16\to17$ ([Chapter 22 «Local search»](../heuristic-algorithms/local-search.md#box-3-ex-kpfirstbest)).

- The penalty flip local search maximizes $g_\alpha(x)=\sum_{j} p_j x_j-\alpha\max\{0,\sum_{j} w_jx_j-c\}$ and can cross infeasible vectors; with $\alpha>\max_j p_j$ its local optima are feasible ([Chapter 22 «Local search»](../heuristic-algorithms/local-search.md#box-14-ex-kppen)).

## Metaheuristics { #sez-sec-cat-kp-metaheuristics }

- Simulated annealing with the penalized objective $f_\beta$ reaches the optimum of the reference instance through an infeasible solution ([Chapter 23 «Metaheuristics»](../heuristic-algorithms/metaheuristics.md#box-5-ex-saKP)).

- GRASP builds randomized greedy solutions with a restricted candidate list on the efficiency and improves each one by local search ([Chapter 23 «Metaheuristics»](../heuristic-algorithms/metaheuristics.md#box-9-ex-graspKP)).

- Genetic algorithms use the binary vector as chromosome and repair infeasible children; on KP20 the memetic algorithm reaches the optimum $521$ in every run ([Chapter 23 «Metaheuristics»](../heuristic-algorithms/metaheuristics.md#box-12-ex-gaKP)).

## MIP heuristics { #sez-sec-cat-kp-mipheuristics }

- Rounding down the LP solution is always feasible on the KP, since the model has a single packing constraint ([Chapter 24 «MIP heuristics for the classical problems»](../heuristic-algorithms/mip-heuristics-classical.md#box-3-ex-rounding)).

- Fractional diving on the reference instance fixes $x_2=0$ at the first step and ends with profit $16$, missing the optimum $17$ ([Chapter 24 «MIP heuristics for the classical problems»](../heuristic-algorithms/mip-heuristics-classical.md#box-4-ex-divekp)).

- RINS fails on the reference instance, while local branching and proximity search reach and prove the optimum $\{1,2\}$ ([Chapter 24 «MIP heuristics for the classical problems»](../heuristic-algorithms/mip-heuristics-classical.md#box-12-ex-lbkp), [Chapter 24 «MIP heuristics for the classical problems»](../heuristic-algorithms/mip-heuristics-classical.md#box-14-ex-pskp)).

## Approximation { #sez-sec-cat-kp-approximation }

- The greedy algorithm $GR$ has no constant guarantee, while Ext-Greedy $GR^e$ is a $2$-approximation algorithm and the bound is tight ([Chapter 27 «Approximation algorithms for the knapsack problem»](../approximation-algorithms/knapsack-approximation.md#box-17-prop-GRe2approx)).

- $H^2$ guesses the two items of largest profit and guarantees $\frac{4}{3}$; $H^{\ell}$ guarantees $\frac{\ell+2}{\ell+1}$ in $O(n^{\ell+1})$ time, and $\{H^{\varepsilon}\}$ is a PTAS ([Chapter 27 «Approximation algorithms for the knapsack problem»](../approximation-algorithms/knapsack-approximation.md#box-21-prop-Hlapprox)).

- The Basic-FPTAS rounds down the profits, solves the scaled instance by DP by profits and guarantees $\frac{1}{1-\varepsilon}$ in $O(n^2/\varepsilon)$ time ([Chapter 27 «Approximation algorithms for the knapsack problem»](../approximation-algorithms/knapsack-approximation.md#box-24-prop-fptas)).

- No polynomial algorithm with a fixed absolute performance guarantee exists, unless it solves the KP exactly ([Chapter 27 «Approximation algorithms for the knapsack problem»](../approximation-algorithms/knapsack-approximation.md#box-26-thm-absolute)).

## Branch-and-bound { #sez-sec-cat-kp-branchandbound }

- The problem $\LP_{\KP}^k$ of a node is a knapsack LP on the remaining items with capacity $c(k)$, solved by the Dantzig formulas without the simplex algorithm ([Chapter 29 «Knapsack: branch-and-bound on the critical item»](../specialized-algorithms/knapsack-branch-and-bound.md#box-1-def-LPKPk)).

- The algorithm branches on the variable of the split item, the only fractional one, and prunes a node when $\lfloor z(\LP_{\KP}^k)\rfloor \le \LB$ ([Chapter 29 «Knapsack: branch-and-bound on the critical item»](../specialized-algorithms/knapsack-branch-and-bound.md#291-the-algorithm-for-the-kp)).

- On the reference instance the algorithm closes the gap between $\LB=15$ and $\UB=16$ with $5$ nodes ([Chapter 29 «Knapsack: branch-and-bound on the critical item»](../specialized-algorithms/knapsack-branch-and-bound.md#box-3-texexpbox2)).

## Instances { #sez-sec-cat-kp-ist }

### Instance KP1 { #sez-sec-cat-ist-kp1 }

Reference instance of the KP chapters.

Capacity $c=9$, $n=6$ items:

$$
\begin{array}{l|cccccc}
\hline
j & 1 & 2 & 3 & 4 & 5 & 6 \\
\hline
p_j & 6 & 5 & 8 & 9 & 6 & 7 \\
w_j & 2 & 3 & 6 & 7 & 5 & 9 \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{KP1})=15$, attained by $\tilde S=\{1,4\}$, the unique optimal solution.

- Used in [Example «KP instance»](../combinatorial-optimization-problems/knapsack.md#box-2-ex-kp), [Counting, a first solution and the cardinality bound](../combinatorial-optimization-problems/knapsack.md#212-counting-the-solutions-a-first-solution-and-a-simple-bound), [Example «$\ILP_{\KP}$ model» and the following examples of the chapter](../formulations/knapsack-formulations.md#box-2-texexp_ilp_kp), [Example «Dantzig and Martello-Toth upper bound»](../formulations/knapsack-formulations.md#box-20-texexp_ub_kp), [Example «The $\ILP_{\KP}$ model»](../specialized-algorithms/knapsack-branch-and-bound.md#box-2-texexpbox1), [Example «Branch-and-bound algorithm for the $\ILP_{\KP}$ model»](../specialized-algorithms/knapsack-branch-and-bound.md#box-3-texexpbox2), [Exercise 9.4](../exercises/knapsack-formulations.md#esercizio-9-4), [Exercise 29.4](../exercises/knapsack-branch-and-bound.md#esercizio-29-4).

### Instance KP2 { #sez-sec-cat-ist-kp2 }

Reference instance of the heuristic chapters (four items).

Capacity $c=9$, $n=4$ items:

$$
\begin{array}{l|cccc}
\hline
j & 1 & 2 & 3 & 4 \\
\hline
p_j & 10 & 7 & 6 & 4 \\
w_j & 5 & 4 & 3 & 3 \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{KP2})=17$, attained by $\tilde S=\{1,2\}$, the only optimal solution.

- Used in [Example «a small knapsack instance»](../combinatorial-optimization-problems/combinatorial-optimization.md#box-3-ex-oc1-kp), [Example «brute force on the knapsack instance»](../combinatorial-optimization-problems/combinatorial-optimization.md#box-17-ex-oc1-bf-kp), [Example «bounds on the small instances»](../combinatorial-optimization-problems/combinatorial-optimization.md#box-21-ex-oc1-bounds), [Example «KP reference instance»](../heuristic-algorithms/heuristics.md#box-2-ex-refKP), [Example «Bounds and gaps on the reference instances»](../heuristic-algorithms/heuristics.md#box-7-ex-gaps), [Example «Two neighbourhoods for the KP»](../heuristic-algorithms/heuristics.md#box-11-ex-kpneigh), [Example «Three orders on the KP reference instance»](../heuristic-algorithms/constructive-heuristics.md#box-3-ex-kp3), [Example «First and best improvement on the KP»](../heuristic-algorithms/local-search.md#box-3-ex-kpfirstbest), [Example «Penalties on the KP reference instance»](../heuristic-algorithms/local-search.md#box-14-ex-kppen), [Example «SA with a penalty on the KP reference instance»](../heuristic-algorithms/metaheuristics.md#box-5-ex-saKP), [Example «GRASP on the KP reference instance»](../heuristic-algorithms/metaheuristics.md#box-9-ex-graspKP), [Example «GA on the KP reference instance»](../heuristic-algorithms/metaheuristics.md#box-12-ex-gaKP), [Example «The LP solutions of the reference instances»](../heuristic-algorithms/mip-heuristics-classical.md#box-2-ex-lpsol), [Example «Rounding on the reference instances»](../heuristic-algorithms/mip-heuristics-classical.md#box-3-ex-rounding), [Example «Fractional diving on the KP»](../heuristic-algorithms/mip-heuristics-classical.md#box-4-ex-divekp), [Example «RINS on the KP»](../heuristic-algorithms/mip-heuristics-classical.md#box-9-ex-rinskp), [Example «Local branching on the KP»](../heuristic-algorithms/mip-heuristics-classical.md#box-12-ex-lbkp), [Example «Proximity search on the KP»](../heuristic-algorithms/mip-heuristics-classical.md#box-14-ex-pskp), [instance $I_0$](../exercises/approximation.md#esercizio-25-4).

### Instance KP3 { #sez-sec-cat-ist-kp3 }

Brute force, greedy and bound on a knapsack.

Capacity $c=10$, $n=4$ items:

$$
\begin{array}{l|cccc}
\hline
j & 1 & 2 & 3 & 4 \\
\hline
p_j & 7 & 6 & 5 & 4 \\
w_j & 6 & 5 & 4 & 3 \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{KP3})=12$, attained by $\tilde S=\{1,3\}$.

- Used in [Exercise «Brute force, greedy and bound on a knapsack»](../combinatorial-optimization-problems/combinatorial-optimization.md#110-exercises).

### Instance KP4 { #sez-sec-cat-ist-kp4 }

A budget of $14$ and five projects.

Capacity $c=14$, $n=5$ items:

$$
\begin{array}{l|ccccc}
\hline
j & 1 & 2 & 3 & 4 & 5 \\
\hline
p_j & 14 & 9 & 15 & 13 & 11 \\
w_j & 7 & 2 & 9 & 6 & 8 \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{KP4})=27$, attained by $\tilde S=\{1,4\}$, the only optimal solution.

- Used in [Exercise 1.2](../exercises/combinatorial-optimization.md#esercizio-1-2).

### Instance KP5 { #sez-sec-cat-ist-kp5 }

Feasibility, value and bounds.

Capacity $c=12$, $n=5$ items:

$$
\begin{array}{l|ccccc}
\hline
j & 1 & 2 & 3 & 4 & 5 \\
\hline
p_j & 6 & 12 & 5 & 13 & 8 \\
w_j & 3 & 4 & 5 & 6 & 8 \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{KP5})=25$, attained by $\tilde S=\{2,4\}$, the only optimal solution.

- Used in [Exercise 2.1](../exercises/knapsack.md#esercizio-2-1).

### Instance KP6 { #sez-sec-cat-ist-kp6 }

KP bound of the two-knapsack instance (capacity $c_1+c_2$).

Capacity $c=16$, $n=5$ items:

$$
\begin{array}{l|ccccc}
\hline
j & 1 & 2 & 3 & 4 & 5 \\
\hline
p_j & 4 & 8 & 9 & 10 & 13 \\
w_j & 2 & 5 & 2 & 6 & 3 \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{KP6})=40$, attained by $\{2,3,4,5\}$.

- Used in [question 3](../exercises/knapsack.md#esercizio-2-4).

### Instance KP7 { #sez-sec-cat-ist-kp7 }

Upper bounds (1), solved by branch-and-bound.

Capacity $c=11$, $n=5$ items:

$$
\begin{array}{l|ccccc}
\hline
j & 1 & 2 & 3 & 4 & 5 \\
\hline
p_j & 8 & 6 & 14 & 6 & 2 \\
w_j & 3 & 3 & 9 & 5 & 2 \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{KP7})=20$, attained by $\tilde{\vet x}=(1,1,0,1,0)$.

- Used in [Exercise 9.1](../exercises/knapsack-formulations.md#esercizio-9-1), [Exercise 29.1](../exercises/knapsack-branch-and-bound.md#esercizio-29-1).

### Instance KP8 { #sez-sec-cat-ist-kp8 }

Upper bounds (2), solved by branch-and-bound.

Capacity $c=8$, $n=4$ items:

$$
\begin{array}{l|cccc}
\hline
j & 1 & 2 & 3 & 4 \\
\hline
p_j & 40 & 42 & 25 & 12 \\
w_j & 4 & 7 & 5 & 3 \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{KP8})=52$, attained by $\tilde{\vet x}=(1,0,0,1)$.

- Used in [Exercise 9.2](../exercises/knapsack-formulations.md#esercizio-9-2), [Exercise 29.2](../exercises/knapsack-branch-and-bound.md#esercizio-29-2).

### Instance KP9 { #sez-sec-cat-ist-kp9 }

Upper bounds (3), solved by branch-and-bound.

Capacity $c=15$, $n=4$ items:

$$
\begin{array}{l|cccc}
\hline
j & 1 & 2 & 3 & 4 \\
\hline
p_j & 24 & 17 & 12 & 6 \\
w_j & 10 & 8 & 6 & 5 \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{KP9})=30$, attained by $\tilde{\vet x}=(1,0,0,1)$.

- Used in [Exercise 9.3](../exercises/knapsack-formulations.md#esercizio-9-3), [Exercise 29.3](../exercises/knapsack-branch-and-bound.md#esercizio-29-3).

### Instance KP10 { #sez-sec-cat-ist-kp10 }

Upper bounds (5).

Capacity $c=21$, $n=6$ items:

$$
\begin{array}{l|cccccc}
\hline
j & 1 & 2 & 3 & 4 & 5 & 6 \\
\hline
p_j & 24 & 25 & 13 & 10 & 9 & 2 \\
w_j & 2 & 6 & 8 & 7 & 10 & 3 \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{KP10})=64$.

- Used in [Exercise 9.5](../exercises/knapsack-formulations.md#esercizio-9-5).

### Instance KP11 { #sez-sec-cat-ist-kp11 }

Small instance of the DP algorithm by capacities.

Capacity $c=5$, $n=3$ items:

$$
\begin{array}{l|ccc}
\hline
j & 1 & 2 & 3 \\
\hline
p_j & 6 & 7 & 8 \\
w_j & 2 & 3 & 3 \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{KP11})=14$, attained by $(1,0,1)$.

- Used in [Example «KP instance» and the examples of the first DP algorithm](../dynamic-programming/dp-knapsack.md#box-2-texexpbox1), [Example «The lists of states»](../dynamic-programming/dp-knapsack.md#box-29-texkp3graph).

### Instance KP12 { #sez-sec-cat-ist-kp12 }

Small instance of the DP algorithm by profits.

Capacity $c=5$, $n=3$ items:

$$
\begin{array}{l|ccc}
\hline
j & 1 & 2 & 3 \\
\hline
p_j & 3 & 3 & 4 \\
w_j & 2 & 3 & 3 \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{KP12})=7$, attained by $(1,0,1)$.

- Used in [Example «KP instance» and the examples of the second DP algorithm](../dynamic-programming/dp-knapsack.md#box-55-texkp2instance), [Example «The lists of states»](../dynamic-programming/dp-knapsack.md#box-97-texkp4graph).

### Instance KP13 { #sez-sec-cat-ist-kp13 }

DP exercise 1.

Capacity $c=6$, $n=4$ items:

$$
\begin{array}{l|cccc}
\hline
j & 1 & 2 & 3 & 4 \\
\hline
p_j & 6 & 7 & 8 & 9 \\
w_j & 2 & 3 & 4 & 5 \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{KP13})=14$, attained by $(1,0,1,0)$.

- Used in [Exercise 17.1](../exercises/dp-knapsack.md#esercizio-17-1).

### Instance KP14 { #sez-sec-cat-ist-kp14 }

DP exercise 2 (same data as the UKP instance of the DP chapter).

Capacity $c=7$, $n=4$ items:

$$
\begin{array}{l|cccc}
\hline
j & 1 & 2 & 3 & 4 \\
\hline
p_j & 4 & 5 & 10 & 11 \\
w_j & 2 & 3 & 5 & 6 \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{KP14})=14$, attained by $(1,0,1,0)$.

- Used in [Exercise 17.2](../exercises/dp-knapsack.md#esercizio-17-2).

### Instance KP15 { #sez-sec-cat-ist-kp15 }

DP exercise 3.

Capacity $c=8$, $n=5$ items:

$$
\begin{array}{l|ccccc}
\hline
j & 1 & 2 & 3 & 4 & 5 \\
\hline
p_j & 3 & 4 & 8 & 8 & 10 \\
w_j & 1 & 3 & 4 & 5 & 6 \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{KP15})=15$, attained by $(1,1,1,0,0)$.

- Used in [Exercise 17.3](../exercises/dp-knapsack.md#esercizio-17-3).

### Instance KP16 { #sez-sec-cat-ist-kp16 }

DP exercise 4.

Capacity $c=9$, $n=5$ items:

$$
\begin{array}{l|ccccc}
\hline
j & 1 & 2 & 3 & 4 & 5 \\
\hline
p_j & 5 & 6 & 9 & 10 & 13 \\
w_j & 2 & 4 & 5 & 6 & 7 \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{KP16})=18$, attained by $(1,0,0,0,1)$.

- Used in [Exercise 17.4](../exercises/dp-knapsack.md#esercizio-17-4).

### Instance KP17 { #sez-sec-cat-ist-kp17 }

DP exercise 5.

Capacity $c=10$, $n=5$ items:

$$
\begin{array}{l|ccccc}
\hline
j & 1 & 2 & 3 & 4 & 5 \\
\hline
p_j & 2 & 7 & 9 & 12 & 14 \\
w_j & 1 & 4 & 5 & 7 & 8 \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{KP17})=18$, attained by $(1,1,1,0,0)$.

- Used in [Exercise 17.5](../exercises/dp-knapsack.md#esercizio-17-5).

### Instance KP18 { #sez-sec-cat-ist-kp18 }

Gap and relative error.

Capacity $c=12$, $n=5$ items:

$$
\begin{array}{l|ccccc}
\hline
j & 1 & 2 & 3 & 4 & 5 \\
\hline
p_j & 20 & 18 & 14 & 9 & 6 \\
w_j & 6 & 5 & 4 & 3 & 2 \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{KP18})=41$, attained by $\{2,3,4\}$.

- Used in [Exercise 20.1](../exercises/heuristics.md#esercizio-20-1).

### Instance KP19 { #sez-sec-cat-ist-kp19 }

Neighbourhoods and local optima.

Capacity $c=11$, $n=5$ items:

$$
\begin{array}{l|ccccc}
\hline
j & 1 & 2 & 3 & 4 & 5 \\
\hline
p_j & 12 & 10 & 9 & 7 & 4 \\
w_j & 6 & 5 & 4 & 3 & 2 \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{KP19})=23$, attained by $\{1,4,5\}$.

- Used in [Exercise 20.4](../exercises/heuristics.md#esercizio-20-4).

### Instance KP20 { #sez-sec-cat-ist-kp20 }

Greedy orders 1.

Capacity $c=9$, $n=5$ items:

$$
\begin{array}{l|ccccc}
\hline
j & 1 & 2 & 3 & 4 & 5 \\
\hline
p_j & 4 & 15 & 11 & 8 & 2 \\
w_j & 3 & 8 & 7 & 2 & 5 \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{KP20})=19$, attained by $\{3,4\}$.

- Used in [Exercise 21.1](../exercises/constructive-heuristics.md#esercizio-21-1).

### Instance KP21 { #sez-sec-cat-ist-kp21 }

Greedy orders 2.

Capacity $c=13$, $n=5$ items:

$$
\begin{array}{l|ccccc}
\hline
j & 1 & 2 & 3 & 4 & 5 \\
\hline
p_j & 9 & 4 & 8 & 6 & 7 \\
w_j & 7 & 2 & 9 & 5 & 6 \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{KP21})=17$, attained by $\{2,4,5\}$.

- Used in [Exercise 21.2](../exercises/constructive-heuristics.md#esercizio-21-2).

### Instance KP22 { #sez-sec-cat-ist-kp22 }

Greedy orders 3.

Capacity $c=10$, $n=5$ items:

$$
\begin{array}{l|ccccc}
\hline
j & 1 & 2 & 3 & 4 & 5 \\
\hline
p_j & 8 & 13 & 5 & 12 & 7 \\
w_j & 5 & 9 & 4 & 8 & 2 \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{KP22})=19$, attained by $\{4,5\}$.

- Used in [Exercise 21.3](../exercises/constructive-heuristics.md#esercizio-21-3).

### Instance KP23 { #sez-sec-cat-ist-kp23 }

Local search KP 1.

Capacity $c=18$, $n=5$ items:

$$
\begin{array}{l|ccccc}
\hline
j & 1 & 2 & 3 & 4 & 5 \\
\hline
p_j & 10 & 7 & 13 & 14 & 8 \\
w_j & 2 & 3 & 8 & 9 & 7 \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{KP23})=32$.

- Used in [Exercise 22.1](../exercises/local-search.md#esercizio-22-1).

### Instance KP24 { #sez-sec-cat-ist-kp24 }

Local search KP 2.

Capacity $c=13$, $n=5$ items:

$$
\begin{array}{l|ccccc}
\hline
j & 1 & 2 & 3 & 4 & 5 \\
\hline
p_j & 8 & 9 & 14 & 11 & 9 \\
w_j & 3 & 5 & 9 & 9 & 8 \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{KP24})=22$, attained by $x=(1,0,1,0,0)$.

- Used in [Exercise 22.2](../exercises/local-search.md#esercizio-22-2).

### Instance KP25 { #sez-sec-cat-ist-kp25 }

Local search KP 3 (penalties).

Capacity $c=11$, $n=5$ items:

$$
\begin{array}{l|ccccc}
\hline
j & 1 & 2 & 3 & 4 & 5 \\
\hline
p_j & 14 & 7 & 10 & 8 & 6 \\
w_j & 4 & 4 & 7 & 7 & 9 \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{KP25})=24$, attained by $x=(1,0,1,0,0)$.

- Used in [Exercise 22.3](../exercises/local-search.md#esercizio-22-3).

### Instance KP26 { #sez-sec-cat-ist-kp26 }

Instance of the metaheuristic exercises.

Capacity $c=16$, $n=5$ items:

$$
\begin{array}{l|ccccc}
\hline
j & 1 & 2 & 3 & 4 & 5 \\
\hline
p_j & 11 & 5 & 18 & 8 & 8 \\
w_j & 5 & 3 & 11 & 6 & 7 \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{KP26})=29$, attained by $\{1,3\}$, which fills the capacity exactly.

- Used in [Exercise 23.2](../exercises/metaheuristics.md#esercizio-23-2), [Exercise 23.10](../exercises/metaheuristics.md#esercizio-23-10), [Exercise 23.12](../exercises/metaheuristics.md#esercizio-23-12), [Exercise 23.16](../exercises/metaheuristics.md#esercizio-23-16), [Exercise 23.17](../exercises/metaheuristics.md#esercizio-23-17).

### Instance KP27 { #sez-sec-cat-ist-kp27 }

Medium instance KP20 ($c$ is half of the total weight, rounded down).

Capacity $c=389$, $n=20$ items:

$$
\begin{array}{l|cccccccccccc}
\hline
j & 1 & 2 & 3 & 4 & 5 & 6 & 7 & 8 & 9 & 10 & 11 & 12 \\
\hline
p_j & 54 & 55 & 55 & 52 & 58 & 42 & 53 & 53 & 22 & 64 & 54 & 51 \\
w_j & 39 & 43 & 49 & 47 & 44 & 35 & 43 & 44 & 16 & 50 & 40 & 42 \\
\hline
\end{array}
$$

$$
\begin{array}{l|cccccccc}
\hline
j & 13 & 14 & 15 & 16 & 17 & 18 & 19 & 20 \\
\hline
p_j & 39 & 49 & 53 & 46 & 28 & 64 & 58 & 34 \\
w_j & 28 & 38 & 46 & 39 & 14 & 50 & 45 & 27 \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{KP27})=521$, attained by greedy by efficiency $490$, greedy plus local search $514$.

- Used in [Example «The medium instances of the KP, the BPP and $P\,||\,C_{\max}$»](../heuristic-algorithms/metaheuristics.md#box-2-ex-tsp20), [GRASP experiment](../heuristic-algorithms/metaheuristics.md#sez-sec-grasp-exp), [GA and memetic experiment](../heuristic-algorithms/metaheuristics.md#sez-sec-ga), [Comparison of the methods](../heuristic-algorithms/metaheuristics.md#23111-the-methods-on-the-medium-instances).

### Instance KP28 { #sez-sec-cat-ist-kp28 }

Rounding and diving (KP1).

Capacity $c=16$, $n=5$ items:

$$
\begin{array}{l|ccccc}
\hline
j & 1 & 2 & 3 & 4 & 5 \\
\hline
p_j & 11 & 15 & 18 & 14 & 10 \\
w_j & 3 & 5 & 7 & 10 & 9 \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{KP28})=44$.

- Used in [Exercise 24.1](../exercises/mip-heuristics-classical.md#esercizio-24-1).

### Instance KP29 { #sez-sec-cat-ist-kp29 }

Rounding and diving (KP2).

Capacity $c=15$, $n=5$ items:

$$
\begin{array}{l|ccccc}
\hline
j & 1 & 2 & 3 & 4 & 5 \\
\hline
p_j & 13 & 12 & 14 & 6 & 5 \\
w_j & 2 & 5 & 10 & 6 & 7 \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{KP29})=31$, attained by $\{1,2,4\}$.

- Used in [Exercise 24.2](../exercises/mip-heuristics-classical.md#esercizio-24-2).

### Instance KP30 { #sez-sec-cat-ist-kp30 }

RINS, local branching and proximity search (KP3).

Capacity $c=22$, $n=6$ items:

$$
\begin{array}{l|cccccc}
\hline
j & 1 & 2 & 3 & 4 & 5 & 6 \\
\hline
p_j & 18 & 21 & 4 & 19 & 10 & 7 \\
w_j & 8 & 10 & 2 & 12 & 7 & 10 \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{KP30})=43$, attained by $(1,1,1,0,0,0)$.

- Used in [Exercise 24.3](../exercises/mip-heuristics-classical.md#esercizio-24-3).

### Instance KP31 { #sez-sec-cat-ist-kp31 }

RINS, local branching and proximity search (KP4).

Capacity $c=13$, $n=6$ items:

$$
\begin{array}{l|cccccc}
\hline
j & 1 & 2 & 3 & 4 & 5 & 6 \\
\hline
p_j & 16 & 13 & 8 & 16 & 10 & 9 \\
w_j & 2 & 2 & 4 & 9 & 6 & 8 \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{KP31})=45$.

- Used in [Exercise 24.4](../exercises/mip-heuristics-classical.md#esercizio-24-4).

### Instance KP32 { #sez-sec-cat-ist-kp32 }

Reference instance of the approximation chapter (the KP reference instance with a seventh item).

Capacity $c=9$, $n=7$ items:

$$
\begin{array}{l|ccccccc}
\hline
j & 1 & 2 & 3 & 4 & 5 & 6 & 7 \\
\hline
p_j & 6 & 5 & 8 & 9 & 6 & 7 & 3 \\
w_j & 2 & 3 & 6 & 7 & 5 & 9 & 4 \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{KP32})=15$, attained by $\{1,4\}$ (found by $H^2$, $H^3$ and $FP^{\varepsilon}$).

- Used in [Example «split item and residual capacity»](../approximation-algorithms/knapsack-approximation.md#box-3-ex-split), [Example «Execution of $GR$»](../approximation-algorithms/knapsack-approximation.md#box-4-ex-GR1), [Example «Execution of $GR^e$»](../approximation-algorithms/knapsack-approximation.md#box-8-ex-GRe1), [Dashboard of the chapter](../approximation-algorithms/knapsack-approximation.md#2711-in-summary).

### Instance KP33 { #sez-sec-cat-ist-kp33 }

The seven items of the approximation chapter with capacity $12$.

Capacity $c=12$, $n=7$ items:

$$
\begin{array}{l|ccccccc}
\hline
j & 1 & 2 & 3 & 4 & 5 & 6 & 7 \\
\hline
p_j & 6 & 5 & 8 & 9 & 6 & 7 & 3 \\
w_j & 2 & 3 & 6 & 7 & 5 & 9 & 4 \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{KP33})=20$, attained by $\tilde S=\{1,2,4\}$.

- Used in [Example «$H^2$ algorithm»](../approximation-algorithms/knapsack-approximation.md#box-11-ex-G34).

### Instance KP34 { #sez-sec-cat-ist-kp34 }

Greedy against the item of largest profit.

Capacity $c=10$, $n=4$ items:

$$
\begin{array}{l|cccc}
\hline
j & 1 & 2 & 3 & 4 \\
\hline
p_j & 6 & 8 & 19 & 4 \\
w_j & 2 & 3 & 9 & 5 \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{KP34})=19$, attained by the notes state that item $3$ alone is optimal, i.e. $z(I)=19$.

- Used in [Example «Execution of $GR$»](../approximation-algorithms/knapsack-approximation.md#box-5-ex-GR2), [Example «Execution of $GR^e$»](../approximation-algorithms/knapsack-approximation.md#box-9-ex-GRe2).

### Instance KP35 { #sez-sec-cat-ist-kp35 }

Greedy selects items after the split item.

Capacity $c=10$, $n=5$ items:

$$
\begin{array}{l|ccccc}
\hline
j & 1 & 2 & 3 & 4 & 5 \\
\hline
p_j & 4 & 6 & 5 & 12 & 3 \\
w_j & 1 & 2 & 2 & 6 & 2 \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{KP35})=23$, attained by $\tilde S=\{2,3,4\}$.

- Used in [Example «Execution of $GR$»](../approximation-algorithms/knapsack-approximation.md#box-6-ex-GR3).

### Instance KP36 { #sez-sec-cat-ist-kp36 }

The most profitable item comes last.

Capacity $c=21$, $n=6$ items:

$$
\begin{array}{l|cccccc}
\hline
j & 1 & 2 & 3 & 4 & 5 & 6 \\
\hline
p_j & 4 & 6 & 4 & 3 & 2 & 20 \\
w_j & 1 & 2 & 2 & 2 & 2 & 21 \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{KP36})=20$, attained by $\tilde S=\{6\}$.

- Used in [Example «Execution of $GR$»](../approximation-algorithms/knapsack-approximation.md#box-7-ex-GR4).

### Instance KP37 { #sez-sec-cat-ist-kp37 }

$H^2$ fails, $H^3$ finds the optimum.

Capacity $c=12$, $n=5$ items:

$$
\begin{array}{l|ccccc}
\hline
j & 1 & 2 & 3 & 4 & 5 \\
\hline
p_j & 2 & 3 & 3 & 3 & 3 \\
w_j & 1 & 3 & 3 & 3 & 3 \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{KP37})=12$, attained by the four items of weight $3$.

- Used in [Example «Execution of $H^{\ell}$»](../approximation-algorithms/knapsack-approximation.md#box-13-ex-Hl).

### Instance KP38 { #sez-sec-cat-ist-kp38 }

Basic-FPTAS with $\varepsilon=\frac12$.

Capacity $c=8$, $n=4$ items:

$$
\begin{array}{l|cccc}
\hline
j & 1 & 2 & 3 & 4 \\
\hline
p_j & 19 & 19 & 14 & 14 \\
w_j & 2 & 4 & 3 & 3 \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{KP38})=47$, attained by $\tilde S=\{1,3,4\}$.

- Used in [Example «Execution of $FP^{\varepsilon}$»](../approximation-algorithms/knapsack-approximation.md#box-15-ex-fptas).

### Instance KP39 { #sez-sec-cat-ist-kp39 }

Greedy 1.

Capacity $c=15$, $n=5$ items:

$$
\begin{array}{l|ccccc}
\hline
j & 1 & 2 & 3 & 4 & 5 \\
\hline
p_j & 12 & 6 & 6 & 8 & 6 \\
w_j & 3 & 2 & 3 & 9 & 7 \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{KP39})=30$.

- Used in [Exercise 27.1](../exercises/knapsack-approximation.md#esercizio-27-1).

### Instance KP40 { #sez-sec-cat-ist-kp40 }

Greedy 2.

Capacity $c=13$, $n=6$ items:

$$
\begin{array}{l|cccccc}
\hline
j & 1 & 2 & 3 & 4 & 5 & 6 \\
\hline
p_j & 10 & 6 & 3 & 7 & 11 & 2 \\
w_j & 1 & 1 & 1 & 4 & 8 & 3 \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{KP40})=30$, attained by $\{1,2,3,5\}$.

- Used in [Exercise 27.2](../exercises/knapsack-approximation.md#esercizio-27-2).

### Instance KP41 { #sez-sec-cat-ist-kp41 }

Greedy 3.

Capacity $c=12$, $n=5$ items:

$$
\begin{array}{l|ccccc}
\hline
j & 1 & 2 & 3 & 4 & 5 \\
\hline
p_j & 8 & 7 & 18 & 14 & 10 \\
w_j & 3 & 3 & 9 & 8 & 7 \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{KP41})=26$, attained by $\{1,3\}$.

- Used in [Exercise 27.3](../exercises/knapsack-approximation.md#esercizio-27-3).

### Instance KP42 { #sez-sec-cat-ist-kp42 }

Ext-Greedy 1.

Capacity $c=22$, $n=5$ items:

$$
\begin{array}{l|ccccc}
\hline
j & 1 & 2 & 3 & 4 & 5 \\
\hline
p_j & 11 & 5 & 3 & 4 & 3 \\
w_j & 8 & 4 & 3 & 9 & 8 \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{KP42})=20$, attained by $\{1,2,4\}$.

- Used in [Exercise 27.4](../exercises/knapsack-approximation.md#esercizio-27-4).

### Instance KP43 { #sez-sec-cat-ist-kp43 }

Ext-Greedy 2.

Capacity $c=8$, $n=5$ items:

$$
\begin{array}{l|ccccc}
\hline
j & 1 & 2 & 3 & 4 & 5 \\
\hline
p_j & 16 & 19 & 18 & 14 & 8 \\
w_j & 5 & 8 & 8 & 7 & 6 \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{KP43})=19$, attained by $\{2\}$.

- Used in [Exercise 27.5](../exercises/knapsack-approximation.md#esercizio-27-5).

### Instance KP44 { #sez-sec-cat-ist-kp44 }

Ext-Greedy 3.

Capacity $c=16$, $n=3$ items:

$$
\begin{array}{l|ccc}
\hline
j & 1 & 2 & 3 \\
\hline
p_j & 2 & 8 & 8 \\
w_j & 1 & 8 & 8 \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{KP44})=16$, attained by $\{2,3\}$.

- Used in [Exercise 27.6](../exercises/knapsack-approximation.md#esercizio-27-6).

### Instance KP45 { #sez-sec-cat-ist-kp45 }

$H^2$ 1.

Capacity $c=11$, $n=5$ items:

$$
\begin{array}{l|ccccc}
\hline
j & 1 & 2 & 3 & 4 & 5 \\
\hline
p_j & 8 & 9 & 2 & 3 & 2 \\
w_j & 5 & 8 & 3 & 7 & 9 \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{KP45})=11$, attained by $\{2,3\}$.

- Used in [Exercise 27.7](../exercises/knapsack-approximation.md#esercizio-27-7).

### Instance KP46 { #sez-sec-cat-ist-kp46 }

$H^2$ 2.

Capacity $c=15$, $n=5$ items:

$$
\begin{array}{l|ccccc}
\hline
j & 1 & 2 & 3 & 4 & 5 \\
\hline
p_j & 14 & 9 & 5 & 10 & 15 \\
w_j & 1 & 1 & 2 & 5 & 8 \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{KP46})=48$, attained by $\{1,2,4,5\}$.

- Used in [Exercise 27.8](../exercises/knapsack-approximation.md#esercizio-27-8).

### Instance KP47 { #sez-sec-cat-ist-kp47 }

$H^2$ 3.

Capacity $c=10$, $n=5$ items:

$$
\begin{array}{l|ccccc}
\hline
j & 1 & 2 & 3 & 4 & 5 \\
\hline
p_j & 13 & 5 & 8 & 5 & 7 \\
w_j & 1 & 1 & 3 & 2 & 5 \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{KP47})=33$, attained by $\{1,2,3,5\}$.

- Used in [Exercise 27.9](../exercises/knapsack-approximation.md#esercizio-27-9).

### Instance KP48 { #sez-sec-cat-ist-kp48 }

$H^{\ell}$ 1.

Capacity $c=16$, $n=5$ items:

$$
\begin{array}{l|ccccc}
\hline
j & 1 & 2 & 3 & 4 & 5 \\
\hline
p_j & 14 & 13 & 13 & 10 & 11 \\
w_j & 1 & 2 & 3 & 3 & 9 \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{KP48})=51$, attained by $\{1,2,3,5\}$.

- Used in [Exercise 27.10](../exercises/knapsack-approximation.md#esercizio-27-10).

### Instance KP49 { #sez-sec-cat-ist-kp49 }

$H^{\ell}$ 2.

Capacity $c=20$, $n=6$ items:

$$
\begin{array}{l|cccccc}
\hline
j & 1 & 2 & 3 & 4 & 5 & 6 \\
\hline
p_j & 2 & 4 & 4 & 4 & 4 & 4 \\
w_j & 1 & 4 & 4 & 4 & 4 & 4 \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{KP49})=20$, attained by $\{2,3,4,5,6\}$.

- Used in [Exercise 27.11](../exercises/knapsack-approximation.md#esercizio-27-11).

### Instance KP50 { #sez-sec-cat-ist-kp50 }

$H^{\ell}$ 3.

Capacity $c=18$, $n=6$ items:

$$
\begin{array}{l|cccccc}
\hline
j & 1 & 2 & 3 & 4 & 5 & 6 \\
\hline
p_j & 15 & 15 & 14 & 8 & 12 & 13 \\
w_j & 1 & 2 & 3 & 2 & 6 & 9 \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{KP50})=65$, attained by $\{1,2,3,4,6\}$.

- Used in [Exercise 27.12](../exercises/knapsack-approximation.md#esercizio-27-12).

### Instance KP51 { #sez-sec-cat-ist-kp51 }

Basic-FPTAS 1.

Capacity $c=13$, $n=4$ items:

$$
\begin{array}{l|cccc}
\hline
j & 1 & 2 & 3 & 4 \\
\hline
p_j & 24 & 11 & 23 & 5 \\
w_j & 2 & 3 & 9 & 3 \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{KP51})=47$, attained by $\{1,3\}$.

- Used in [Exercise 27.13](../exercises/knapsack-approximation.md#esercizio-27-13).

### Instance KP52 { #sez-sec-cat-ist-kp52 }

Basic-FPTAS 2 and 3.

Capacity $c=16$, $n=4$ items:

$$
\begin{array}{l|cccc}
\hline
j & 1 & 2 & 3 & 4 \\
\hline
p_j & 14 & 12 & 14 & 18 \\
w_j & 3 & 4 & 5 & 7 \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{KP52})=46$, attained by $\{1,3,4\}$.

- Used in [Exercise 27.14](../exercises/knapsack-approximation.md#esercizio-27-14), [Exercise 27.15](../exercises/knapsack-approximation.md#esercizio-27-15).

## Exercises { #sez-sec-cat-kp-es }

- [Exercise «Brute force, greedy and bound on a knapsack» (in the chapter)](../combinatorial-optimization-problems/combinatorial-optimization.md#110-exercises)

- [«A greedy choice that is not optimal (KP)»](../exercises/combinatorial-optimization.md#esercizio-1-2)

- [«Counting the solutions» (part (a))](../exercises/combinatorial-optimization.md#esercizio-1-3)

- [«Feasibility, value and bounds (KP)»](../exercises/knapsack.md#esercizio-2-1)

- [«Subset sum and its solution as a KP (SSP)»](../exercises/knapsack.md#esercizio-2-2)

- [«Copies of the items (BKP and UKP)»](../exercises/knapsack.md#esercizio-2-3)

- [«Two knapsacks (MKP)»](../exercises/knapsack.md#esercizio-2-4)

- [«One item per class (MCKP)»](../exercises/knapsack.md#esercizio-2-5)

- [«Upper bounds for the Knapsack Problem (1)»](../exercises/knapsack-formulations.md#esercizio-9-1)

- [«Upper bounds for the Knapsack Problem (2)»](../exercises/knapsack-formulations.md#esercizio-9-2)

- [«Upper bounds for the Knapsack Problem (3)»](../exercises/knapsack-formulations.md#esercizio-9-3)

- [«Upper bounds for the Knapsack Problem (4)»](../exercises/knapsack-formulations.md#esercizio-9-4)

- [«Upper bounds for the Knapsack Problem (5)»](../exercises/knapsack-formulations.md#esercizio-9-5)

- [«Knapsack Problem» (DP 1)](../exercises/dp-knapsack.md#esercizio-17-1)

- [«Knapsack Problem» (DP 2)](../exercises/dp-knapsack.md#esercizio-17-2)

- [«Knapsack Problem» (DP 3)](../exercises/dp-knapsack.md#esercizio-17-3)

- [«Knapsack Problem» (DP 4)](../exercises/dp-knapsack.md#esercizio-17-4)

- [«Knapsack Problem» (DP 5)](../exercises/dp-knapsack.md#esercizio-17-5)

- [«Unbounded Knapsack Problem» (DP 1)](../exercises/dp-knapsack.md#esercizio-17-6)

- [«Unbounded Knapsack Problem» (DP 2)](../exercises/dp-knapsack.md#esercizio-17-7)

- [«Unbounded Knapsack Problem» (DP 3)](../exercises/dp-knapsack.md#esercizio-17-8)

- [«Unbounded Knapsack Problem» (DP 4)](../exercises/dp-knapsack.md#esercizio-17-9)

- [«Unbounded Knapsack Problem» (DP 5)](../exercises/dp-knapsack.md#esercizio-17-10)

- [«Bounded Knapsack Problem» (DP 1)](../exercises/dp-knapsack.md#esercizio-17-11)

- [«Bounded Knapsack Problem» (DP 2)](../exercises/dp-knapsack.md#esercizio-17-12)

- [«Bounded Knapsack Problem» (DP 3)](../exercises/dp-knapsack.md#esercizio-17-13)

- [«Bounded Knapsack Problem» (DP 4)](../exercises/dp-knapsack.md#esercizio-17-14)

- [«Bounded Knapsack Problem» (DP 5)](../exercises/dp-knapsack.md#esercizio-17-15)

- [«Gap and relative error»](../exercises/heuristics.md#esercizio-20-1)

- [«Neighbourhoods and local optima»](../exercises/heuristics.md#esercizio-20-4)

- [«Greedy orders for the KP 1»](../exercises/constructive-heuristics.md#esercizio-21-1)

- [«Greedy orders for the KP 2»](../exercises/constructive-heuristics.md#esercizio-21-2)

- [«Greedy orders for the KP 3»](../exercises/constructive-heuristics.md#esercizio-21-3)

- [«Local search KP 1»](../exercises/local-search.md#esercizio-22-1)

- [«Local search KP 2»](../exercises/local-search.md#esercizio-22-2)

- [«Local search KP 3»](../exercises/local-search.md#esercizio-22-3)

- [«Simulated annealing 2» (KP)](../exercises/metaheuristics.md#esercizio-23-2)

- [«GRASP 1» (KP)](../exercises/metaheuristics.md#esercizio-23-10)

- [«GRASP 3» (KP)](../exercises/metaheuristics.md#esercizio-23-12)

- [«Genetic algorithms 1» (KP)](../exercises/metaheuristics.md#esercizio-23-16)

- [«Genetic algorithms 2» (KP)](../exercises/metaheuristics.md#esercizio-23-17)

- [«Rounding and diving on the KP (KP1)»](../exercises/mip-heuristics-classical.md#esercizio-24-1)

- [«Rounding and diving on the KP (KP2)»](../exercises/mip-heuristics-classical.md#esercizio-24-2)

- [«RINS, local branching and proximity search on the KP (KP3)»](../exercises/mip-heuristics-classical.md#esercizio-24-3)

- [«RINS, local branching and proximity search on the KP (KP4)»](../exercises/mip-heuristics-classical.md#esercizio-24-4)

- [«Unbounded ratio of a greedy algorithm»](../exercises/approximation.md#esercizio-25-4)

- [«Greedy 1»](../exercises/knapsack-approximation.md#esercizio-27-1)

- [«Greedy 2»](../exercises/knapsack-approximation.md#esercizio-27-2)

- [«Greedy 3»](../exercises/knapsack-approximation.md#esercizio-27-3)

- [«Ext-Greedy 1»](../exercises/knapsack-approximation.md#esercizio-27-4)

- [«Ext-Greedy 2»](../exercises/knapsack-approximation.md#esercizio-27-5)

- [«Ext-Greedy 3»](../exercises/knapsack-approximation.md#esercizio-27-6)

- [«$H^2$ 1»](../exercises/knapsack-approximation.md#esercizio-27-7)

- [«$H^2$ 2»](../exercises/knapsack-approximation.md#esercizio-27-8)

- [«$H^2$ 3»](../exercises/knapsack-approximation.md#esercizio-27-9)

- [«$H^{\ell}$ 1»](../exercises/knapsack-approximation.md#esercizio-27-10)

- [«$H^{\ell}$ 2»](../exercises/knapsack-approximation.md#esercizio-27-11)

- [«$H^{\ell}$ 3»](../exercises/knapsack-approximation.md#esercizio-27-12)

- [«Basic-FPTAS 1»](../exercises/knapsack-approximation.md#esercizio-27-13)

- [«Basic-FPTAS 2»](../exercises/knapsack-approximation.md#esercizio-27-14)

- [«Basic-FPTAS 3»](../exercises/knapsack-approximation.md#esercizio-27-15)

- [«Branch-and-Bound Algorithm for the Knapsack Problem (P1)»](../exercises/knapsack-branch-and-bound.md#esercizio-29-1)

- [«Branch-and-Bound Algorithm for the Knapsack Problem (P2)»](../exercises/knapsack-branch-and-bound.md#esercizio-29-2)

- [«Branch-and-Bound Algorithm for the Knapsack Problem (P3)»](../exercises/knapsack-branch-and-bound.md#esercizio-29-3)

- [«Branch-and-bound Algorithm for the Knapsack Problem (P4)»](../exercises/knapsack-branch-and-bound.md#esercizio-29-4)

## Subset sum problem (SSP) { #sez-sec-cat-ssp }

<a id="box-2-def-cat-ssp"></a>

!!! definizione "Definition 2: Subset sum problem"

    Given:

    1. a <em>target value</em> $c \in \Z_{\ge 1}$,

    2. a set $\Ioggetti = \{1,2,\dots,n\}$ of $n$ items,

    3. for each item $j \in \Ioggetti$, a <em>weight</em> $w_j \in \Z_{\ge 1}$,

    the <strong>Subset Sum Problem</strong> (SSP) asks to decide whether there exists a subset of items whose total weight is exactly equal to the target value:

    $$
    \text{find } S \subseteq \Ioggetti
    \quad \text{such that} \quad
    \sum_{j \in S} w_j = c .
    $$

- Defined in [Chapter 2 «Knapsack problems»](../combinatorial-optimization-problems/knapsack.md#box-4-defSSP).

- The SSP is solved as the KP with $p_j = w_j$ for all $j\in\Ioggetti$: the answer is yes if and only if the optimal value of this KP equals $c$.

- <strong>Complexity</strong>: Karp (1972) put the SSP among the first $21$ NP-complete problems ([Chapter 2 «Knapsack problems»](../combinatorial-optimization-problems/knapsack.md#210-remarks)).

<strong>Where it is treated</strong>

- [Chapter 2 «Knapsack problems»](../combinatorial-optimization-problems/knapsack.md#box-4-defSSP): Definition, assumptions and solution as a KP

- [Chapter 2 «Knapsack problems»](../combinatorial-optimization-problems/knapsack.md#29-the-variants-at-a-glance): Enumeration of the reference instance: three subsets reach the target

- [Exercise 2.2](../exercises/knapsack.md#esercizio-2-2):

### Instance SSP1 { #sez-sec-cat-ist-ssp1 }

Reference instance of the SSP.

Capacity $c=9$, $n=6$ items:

$$
\begin{array}{l|cccccc}
\hline
j & 1 & 2 & 3 & 4 & 5 & 6 \\
\hline
w_j & 2 & 3 & 6 & 7 & 5 & 9 \\
\hline
\end{array}
$$

- Answer: yes ($\{6\}$, $\{1,4\}$, $\{2,3\}$).

- Used in [Example «SSP instance»](../combinatorial-optimization-problems/knapsack.md#box-5-ex-ssp), [The variants at a glance](../combinatorial-optimization-problems/knapsack.md#29-the-variants-at-a-glance).

### Instance SSP2 { #sez-sec-cat-ist-ssp2 }

Subset sum with target $15$.

Capacity $c=15$, $n=6$ items:

$$
\begin{array}{l|cccccc}
\hline
j & 1 & 2 & 3 & 4 & 5 & 6 \\
\hline
w_j & 5 & 14 & 3 & 6 & 15 & 4 \\
\hline
\end{array}
$$

- Answer: yes ($\{5\}$ and $\{1,4,6\}$).

- Used in [questions 1–3](../exercises/knapsack.md#esercizio-2-2).

### Instance SSP3 { #sez-sec-cat-ist-ssp3 }

Subset sum with target $16$, solved as a KP.

Capacity $c=16$, $n=6$ items:

$$
\begin{array}{l|cccccc}
\hline
j & 1 & 2 & 3 & 4 & 5 & 6 \\
\hline
w_j & 5 & 14 & 3 & 6 & 15 & 4 \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{SSP3})=15$, attained by the KP with $p_j=w_j$ reaches at most $15$, e.g. $\{5\}$.

- Used in [question 4](../exercises/knapsack.md#esercizio-2-2).

## Bounded knapsack problem (BKP) { #sez-sec-cat-bkp }

<a id="box-3-def-cat-bkp"></a>

!!! definizione "Definition 3: Bounded knapsack problem"

    Given:

    1. a knapsack of <em>capacity</em> $c \in \Z_{\ge 1}$,

    2. a set $\Ioggetti = \{1,2,\dots,n\}$ of $n$ items,

    3. for each item $j \in \Ioggetti$, a <em>profit</em> $p_j \in \Z_{\ge 1}$, a <em>weight</em> $w_j \in \Z_{\ge 1}$, and a <em>number of available copies</em> $b_j \in \Z_{\ge 1}$,

    the <strong>Bounded Knapsack Problem</strong> (BKP) asks to decide how many copies of each item to insert into the knapsack, so that the total weight of all selected item copies does not exceed the knapsack capacity, each item is taken no more than its available copies, and the total profit of all selected item copies is maximized. With the extended set of items $\hat{\Ioggetti} = \{(j,k) : j \in \Ioggetti,~ k \in \{1,2,\dots,b_j\}\}$,

    $$
    \tilde{S}\in
    \argmax_{S \subseteq \hat{\Ioggetti} }
    \left\{~~ \sum_{(j,k) \in S} p_j
    \;:\; \sum_{(j,k) \in S} w_j \le c ~~\right\}.
    $$

- Defined in [Chapter 2 «Knapsack problems»](../combinatorial-optimization-problems/knapsack.md#box-6-defBKP).

- The BKP reduces to the KP when $b_j=1$ for every item, and to the UKP when every bound $b_j$ is large enough not to be binding.

- <strong>Complexity</strong>: The DP algorithm takes $\Theta(nc\,b_{\max})$ steps, which is pseudo-polynomial ([Chapter 17 «Dynamic programming for knapsack problems»](../dynamic-programming/dp-knapsack.md#173-a-dp-algorithm-for-the-bounded-knapsack-problem)).

<strong>Where it is treated</strong>

- [Chapter 2 «Knapsack problems»](../combinatorial-optimization-problems/knapsack.md#box-6-defBKP): Definition, extended set of items and assumptions

- [Exercise 2.3](../exercises/knapsack.md#esercizio-2-3):

- [Chapter 19 «Dynamic programming for knapsack problems»](../dynamic-programming/dp-knapsack.md#173-a-dp-algorithm-for-the-bounded-knapsack-problem): DP algorithm $v(j,k)$ over the numbers of copies, $\Theta(nc\,b_{\max})$ steps

- [Exercise 19.11](../exercises/dp-knapsack.md#esercizio-17-11):

### Instance BKP1 { #sez-sec-cat-ist-bkp1 }

Reference instance of the BKP.

Capacity $c=9$, $n=6$ items:

$$
\begin{array}{l|cccccc}
\hline
j & 1 & 2 & 3 & 4 & 5 & 6 \\
\hline
p_j & 6 & 5 & 8 & 9 & 6 & 7 \\
w_j & 2 & 3 & 6 & 7 & 5 & 9 \\
b_j & 2 & 2 & 1 & 1 & 1 & 1 \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{BKP1})=18$, attained by two copies of item $1$ and item $5$.

- Used in [Example «BKP instance»](../combinatorial-optimization-problems/knapsack.md#box-7-ex-bkp), [The variants at a glance](../combinatorial-optimization-problems/knapsack.md#29-the-variants-at-a-glance).

### Instance BKP2 { #sez-sec-cat-ist-bkp2 }

Copies of the items (BKP).

Capacity $c=10$, $n=3$ items:

$$
\begin{array}{l|ccc}
\hline
j & 1 & 2 & 3 \\
\hline
p_j & 4 & 13 & 13 \\
w_j & 3 & 5 & 2 \\
b_j & 1 & 2 & 2 \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{BKP2})=39$, attained by $\tilde x=(0,1,2)$.

- Used in [questions 1–3](../exercises/knapsack.md#esercizio-2-3).

### Instance BKP3 { #sez-sec-cat-ist-bkp3 }

BKP instance of the DP chapter.

Capacity $c=10$, $n=3$ items:

$$
\begin{array}{l|ccc}
\hline
j & 1 & 2 & 3 \\
\hline
p_j & 6 & 10 & 12 \\
w_j & 2 & 3 & 5 \\
b_j & 2 & 2 & 1 \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{BKP3})=32$, attained by $(2,2,0)$.

- Used in [Example «BKP instance» and the examples of the BKP section](../dynamic-programming/dp-knapsack.md#box-160-texbkpex1).

### Instance BKP4 { #sez-sec-cat-ist-bkp4 }

BKP DP exercise 1.

Capacity $c=6$, $n=2$ items:

$$
\begin{array}{l|cc}
\hline
j & 1 & 2 \\
\hline
p_j & 4 & 5 \\
w_j & 2 & 3 \\
b_j & 2 & 1 \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{BKP4})=9$, attained by $(1,1)$.

- Used in [Exercise 17.11](../exercises/dp-knapsack.md#esercizio-17-11).

### Instance BKP5 { #sez-sec-cat-ist-bkp5 }

BKP DP exercise 2.

Capacity $c=7$, $n=2$ items:

$$
\begin{array}{l|cc}
\hline
j & 1 & 2 \\
\hline
p_j & 3 & 8 \\
w_j & 1 & 4 \\
b_j & 3 & 1 \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{BKP5})=17$, attained by $(3,1)$.

- Used in [Exercise 17.12](../exercises/dp-knapsack.md#esercizio-17-12).

### Instance BKP6 { #sez-sec-cat-ist-bkp6 }

BKP DP exercise 3.

Capacity $c=5$, $n=3$ items:

$$
\begin{array}{l|ccc}
\hline
j & 1 & 2 & 3 \\
\hline
p_j & 2 & 3 & 4 \\
w_j & 1 & 2 & 3 \\
b_j & 1 & 1 & 1 \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{BKP6})=7$, attained by $(0,1,1)$.

- Used in [Exercise 17.13](../exercises/dp-knapsack.md#esercizio-17-13).

### Instance BKP7 { #sez-sec-cat-ist-bkp7 }

BKP DP exercise 4.

Capacity $c=8$, $n=2$ items:

$$
\begin{array}{l|cc}
\hline
j & 1 & 2 \\
\hline
p_j & 5 & 9 \\
w_j & 2 & 5 \\
b_j & 3 & 1 \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{BKP7})=15$, attained by $(3,0)$.

- Used in [Exercise 17.14](../exercises/dp-knapsack.md#esercizio-17-14).

### Instance BKP8 { #sez-sec-cat-ist-bkp8 }

BKP DP exercise 5.

Capacity $c=9$, $n=3$ items:

$$
\begin{array}{l|ccc}
\hline
j & 1 & 2 & 3 \\
\hline
p_j & 4 & 5 & 3 \\
w_j & 3 & 4 & 2 \\
b_j & 2 & 1 & 2 \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{BKP8})=12$, attained by $(1,1,1)$.

- Used in [Exercise 17.15](../exercises/dp-knapsack.md#esercizio-17-15).

## Unbounded knapsack problem (UKP) { #sez-sec-cat-ukp }

<a id="box-4-def-cat-ukp"></a>

!!! definizione "Definition 4: Unbounded knapsack problem"

    Given:

    1. a knapsack of <em>capacity</em> $c \in \Z_{\ge 1}$,

    2. a set $\Ioggetti = \{1,2,\dots,n\}$ of $n$ items,

    3. for each item $j \in \Ioggetti$, which is available in an unlimited number of copies, a <em>profit</em> $p_j \in \Z_{\ge 1}$ and a <em>weight</em> $w_j \in \Z_{\ge 1}$,

    the <strong>Unbounded Knapsack Problem</strong> (UKP) asks to decide how many copies of each item to insert into the knapsack, so that the total weight of all selected item copies does not exceed the knapsack capacity and the total profit of all selected item copies is maximized. With $\hat{b}_j = \lfloor c/w_j \rfloor$ and the extended set $\hat{\Ioggetti} = \{(j,k) : j \in \Ioggetti,~ k \in \{1,2,\dots,\hat{b}_j\}\}$,

    $$
    \tilde{S} \in
    \argmax_{S \subseteq \hat{\Ioggetti} }
    \left\{ \sum_{(j,k) \in S} p_j
    \;:\; \sum_{(j,k) \in S} w_j \le c \right\}.
    $$

- Defined in [Chapter 2 «Knapsack problems»](../combinatorial-optimization-problems/knapsack.md#box-8-defUKP).

- The UKP is the BKP with $b_j = \hat b_j = \lfloor c/w_j \rfloor$: each item can be taken as many times as it fits.

- <strong>Complexity</strong>: Both DP algorithms take $\Theta(nc)$ steps, which is pseudo-polynomial ([Chapter 17 «Dynamic programming for knapsack problems»](../dynamic-programming/dp-knapsack.md#172-a-dp-algorithm-for-the-unbounded-knapsack-problem)).

<strong>Where it is treated</strong>

- [Chapter 2 «Knapsack problems»](../combinatorial-optimization-problems/knapsack.md#box-8-defUKP): Definition, maximum feasible number of copies and assumptions

- [Exercise 2.3](../exercises/knapsack.md#esercizio-2-3):

- [Chapter 18 «Principles of dynamic programming»](../dynamic-programming/dp-principles.md#164-the-dp-algorithms-of-this-module): The recurrence $v(k)$ over the capacities among the DP algorithms of the module

- [Chapter 19 «Dynamic programming for knapsack problems»](../dynamic-programming/dp-knapsack.md#172-a-dp-algorithm-for-the-unbounded-knapsack-problem): Two DP algorithms, $v(k)$ and $v(j,k)$, both in $\Theta(nc)$ steps

- [Exercise 19.6](../exercises/dp-knapsack.md#esercizio-17-6):

- [Chapter 20 «Rod cutting and coin change»](../dynamic-programming/dp-rod-cutting-coin-change.md): Rod cutting and coin change reuse the DP of the UKP

### Instance UKP1 { #sez-sec-cat-ist-ukp1 }

Reference instance of the UKP.

Capacity $c=9$, $n=6$ items:

$$
\begin{array}{l|cccccc}
\hline
j & 1 & 2 & 3 & 4 & 5 & 6 \\
\hline
p_j & 6 & 5 & 8 & 9 & 6 & 7 \\
w_j & 2 & 3 & 6 & 7 & 5 & 9 \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{UKP1})=24$, attained by four copies of item $1$.

- Used in [Example «UKP instance»](../combinatorial-optimization-problems/knapsack.md#box-9-ex-ukp), [The variants at a glance](../combinatorial-optimization-problems/knapsack.md#29-the-variants-at-a-glance).

### Instance UKP2 { #sez-sec-cat-ist-ukp2 }

Copies of the items (UKP).

Capacity $c=10$, $n=3$ items:

$$
\begin{array}{l|ccc}
\hline
j & 1 & 2 & 3 \\
\hline
p_j & 4 & 13 & 13 \\
w_j & 3 & 5 & 2 \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{UKP2})=65$, attained by $\tilde x=(0,0,5)$.

- Used in [question 4](../exercises/knapsack.md#esercizio-2-3).

### Instance UKP3 { #sez-sec-cat-ist-ukp3 }

UKP instance of the DP chapter.

Capacity $c=7$, $n=4$ items:

$$
\begin{array}{l|cccc}
\hline
j & 1 & 2 & 3 & 4 \\
\hline
p_j & 4 & 5 & 10 & 11 \\
w_j & 2 & 3 & 5 & 6 \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{UKP3})=14$, attained by $(1,0,1,0)$.

- Used in [Example «UKP instance» and the examples of the UKP section](../dynamic-programming/dp-knapsack.md#box-127-texukpex1), [Exercise 17.6](../exercises/dp-knapsack.md#esercizio-17-6).

### Instance UKP4 { #sez-sec-cat-ist-ukp4 }

UKP DP exercise 2.

Capacity $c=8$, $n=5$ items:

$$
\begin{array}{l|ccccc}
\hline
j & 1 & 2 & 3 & 4 & 5 \\
\hline
p_j & 2 & 5 & 7 & 8 & 10 \\
w_j & 1 & 2 & 3 & 4 & 5 \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{UKP4})=20$, attained by $(0,4,0,0,0)$.

- Used in [Exercise 17.7](../exercises/dp-knapsack.md#esercizio-17-7).

### Instance UKP5 { #sez-sec-cat-ist-ukp5 }

UKP DP exercise 3.

Capacity $c=10$, $n=4$ items:

$$
\begin{array}{l|cccc}
\hline
j & 1 & 2 & 3 & 4 \\
\hline
p_j & 6 & 10 & 12 & 13 \\
w_j & 3 & 4 & 6 & 7 \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{UKP5})=22$, attained by $(2,1,0,0)$.

- Used in [Exercise 17.8](../exercises/dp-knapsack.md#esercizio-17-8).

### Instance UKP6 { #sez-sec-cat-ist-ukp6 }

UKP DP exercise 4.

Capacity $c=9$, $n=4$ items:

$$
\begin{array}{l|cccc}
\hline
j & 1 & 2 & 3 & 4 \\
\hline
p_j & 5 & 6 & 14 & 18 \\
w_j & 2 & 3 & 6 & 7 \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{UKP6})=23$, attained by $(1,0,0,1)$.

- Used in [Exercise 17.9](../exercises/dp-knapsack.md#esercizio-17-9).

### Instance UKP7 { #sez-sec-cat-ist-ukp7 }

UKP DP exercise 5.

Capacity $c=11$, $n=5$ items:

$$
\begin{array}{l|ccccc}
\hline
j & 1 & 2 & 3 & 4 & 5 \\
\hline
p_j & 3 & 9 & 10 & 16 & 17 \\
w_j & 2 & 5 & 6 & 9 & 10 \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{UKP7})=19$, attained by $(1,0,0,1,0)$ with the first DP algorithm, $(0,1,1,0,0)$ with the second one.

- Used in [Exercise 17.10](../exercises/dp-knapsack.md#esercizio-17-10).

## Multidimensional knapsack problem (MDKP) { #sez-sec-cat-mdkp }

<a id="box-5-def-cat-mdkp"></a>

!!! definizione "Definition 5: Multidimensional knapsack problem"

    Given:

    1. a $k$-dimensional knapsack,

    2. for each dimension $d \in \{1,2,\dots,k\} = \mathscr{D}$, a <em>capacity</em> $c_d \in \Z_{\ge 1}$,

    3. a set $\Ioggetti = \{1,2,\dots,n\}$ of $n$ items,

    4. for each item $j \in \Ioggetti$, a <em>profit</em> $p_j \in \Z_{\ge 1}$,

    5. for each dimension $d \in \mathscr{D}$ and each item $j \in \Ioggetti$, a <em>weight</em> $w_{dj} \in \Z_{\ge 1}$,

    the <strong>Multidimensional Knapsack Problem</strong> (MDKP) asks to decide which items to insert into the knapsack, so that for every dimension the total weight of the selected items does not exceed the corresponding capacity, and the total profit of the selected items is maximized:

    $$
    \tilde{S}\in \argmax_{S \subseteq \Ioggetti}
    \left\{~~ \sum_{j \in S} p_j \;\;:\;\; \sum_{j\in S} w_{dj} \le c_d \ \ \forall\, d\in \mathscr{D} ~~\right\}.
    $$

- Defined in [Chapter 2 «Knapsack problems»](../combinatorial-optimization-problems/knapsack.md#box-10-defMDKP).

- The MDKP is the KP with $k$ capacity constraints, one for each resource; with $k=1$ it is the KP.

<strong>Where it is treated</strong>

- [Chapter 2 «Knapsack problems»](../combinatorial-optimization-problems/knapsack.md#box-10-defMDKP): Definition, assumptions and an instance with two dimensions

- [Chapter 2 «Knapsack problems»](../combinatorial-optimization-problems/knapsack.md#29-the-variants-at-a-glance): Enumeration of the reference instance

### Instance MDKP1 { #sez-sec-cat-ist-mdkp1 }

Reference instance of the MDKP.

Capacities $c_{1}=10, c_{2}=12$, $n=4$ items:

$$
\begin{array}{l|cccc}
\hline
j & 1 & 2 & 3 & 4 \\
\hline
p_j & 6 & 7 & 5 & 9 \\
w_{1j} & 4 & 5 & 3 & 7 \\
w_{2j} & 6 & 4 & 5 & 3 \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{MDKP1})=14$, attained by $\{3,4\}$.

- Used in [Example «MDKP instance»](../combinatorial-optimization-problems/knapsack.md#box-11-ex-mdkp), [The variants at a glance](../combinatorial-optimization-problems/knapsack.md#29-the-variants-at-a-glance).

## Multiple knapsack problem (MKP) { #sez-sec-cat-mkp }

<a id="box-6-def-cat-mkp"></a>

!!! definizione "Definition 6: Multiple knapsack problem"

    Given:

    1. $m \in \Z_{\ge 1}$ knapsacks,

    2. for each knapsack $k \in \{1,2,\dots,m\} = \mathscr{K}$, a <em>capacity</em> $c_k \in \Z_{\ge 1}$,

    3. a set $\Ioggetti = \{1,2,\dots,n\}$ of $n$ items,

    4. for each item $j \in \Ioggetti$, a <em>profit</em> $p_j \in \Z_{\ge 1}$ and a <em>weight</em> $w_{j} \in \Z_{\ge 1}$,

    the <strong>Multiple Knapsack Problem</strong> (MKP) asks to decide which items to insert into each knapsack, so that in every knapsack the total weight of the assigned items does not exceed its capacity, and the total profit of the selected items is maximized. A feasible solution is a family $\mathcal{S}=\{S_k\}_{k\in \mathscr{K}}$ of pairwise disjoint subsets $S_k \subseteq \Ioggetti$ with $\sum_{j\in S_k} w_j \le c_k$ for all $k\in \mathscr{K}$, and the objective is $\sum_{k\in \mathscr{K}} \sum_{j\in S_k} p_j$.

- Defined in [Chapter 2 «Knapsack problems»](../combinatorial-optimization-problems/knapsack.md#box-12-defMKP).

- The MKP is the KP with $m$ knapsacks; every feasible solution of the MKP is feasible for the KP with capacity $\sum_{k\in\mathscr{K}} c_k$, which gives a dual bound.

<strong>Where it is treated</strong>

- [Chapter 2 «Knapsack problems»](../combinatorial-optimization-problems/knapsack.md#box-12-defMKP): Definition, assumptions and an instance with two knapsacks

- [Chapter 2 «Knapsack problems»](../combinatorial-optimization-problems/knapsack.md#29-the-variants-at-a-glance): Enumeration of the reference instance: three optimal solutions

- [Exercise 2.4](../exercises/knapsack.md#esercizio-2-4):

### Instance MKP1 { #sez-sec-cat-ist-mkp1 }

Reference instance of the MKP.

$m=2$ knapsacks with capacities $c_{1}=10, c_{2}=12$, $n=5$ items:

$$
\begin{array}{l|ccccc}
\hline
j & 1 & 2 & 3 & 4 & 5 \\
\hline
p_j & 6 & 8 & 5 & 7 & 9 \\
w_j & 4 & 6 & 5 & 3 & 7 \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{MKP1})=30$, attained by $(S_1,S_2) = (\{1,2\},\{4,5\})$, $(\{2,4\},\{1,5\})$, $(\{4,5\},\{1,2\})$.

- Used in [Example «MKP instance»](../combinatorial-optimization-problems/knapsack.md#box-13-ex-mkp), [The variants at a glance](../combinatorial-optimization-problems/knapsack.md#29-the-variants-at-a-glance).

### Instance MKP2 { #sez-sec-cat-ist-mkp2 }

Two knapsacks.

$m=2$ knapsacks with capacities $c_{1}=10, c_{2}=6$, $n=5$ items:

$$
\begin{array}{l|ccccc}
\hline
j & 1 & 2 & 3 & 4 & 5 \\
\hline
p_j & 4 & 8 & 9 & 10 & 13 \\
w_j & 2 & 5 & 2 & 6 & 3 \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{MKP2})=40$, attained by $S_1=\{2,3,5\}$, $S_2=\{4\}$, the only optimal solution.

- Used in [Exercise 2.4](../exercises/knapsack.md#esercizio-2-4).

## Multiple-choice knapsack problem (MCKP) { #sez-sec-cat-mckp }

<a id="box-7-def-cat-mckp"></a>

!!! definizione "Definition 7: Multiple-choice knapsack problem"

    Given:

    1. a knapsack of <em>capacity</em> $c \in \Z_{\ge 1}$,

    2. a set $\Ioggetti = \{1,2,\dots,n\}$ of $n$ items,

    3. the set of items is partitioned into $q \in \Z_{\ge 2}$ classes,

    4. for each class $h \in \{1,2,\dots,q\}$, the subset $\mathscr{J}_h \subseteq \Ioggetti$ contains the items of that class,

    5. for each item $j \in \Ioggetti$, a <em>profit</em> $p_j \in \Z_{\ge 1}$ and a <em>weight</em> $w_j \in \Z_{\ge 1}$,

    the <strong>Multiple-Choice Knapsack Problem</strong> (MCKP) asks to decide which items to insert into the knapsack, so that exactly one item is selected from each class, the total weight of the selected items does not exceed the knapsack capacity, and the total profit of the selected items is maximized:

    $$
    \tilde{S}\in \argmax_{S \subseteq \Ioggetti}
    \left\{
    ~~ \sum_{j \in S} p_j
    \;\;:\;\;
    \sum_{j \in S} w_j \le c,\ \
    |S \cap \mathscr{J}_h| = 1 \ \ \forall\, h\in\{1,2,\dots,q\}
    ~~\right\}.
    $$

- Defined in [Chapter 2 «Knapsack problems»](../combinatorial-optimization-problems/knapsack.md#box-14-defMCKP).

- The MCKP is the KP with the additional constraint that exactly one item of every class is selected, so an instance can be infeasible.

<strong>Where it is treated</strong>

- [Chapter 2 «Knapsack problems»](../combinatorial-optimization-problems/knapsack.md#box-14-defMCKP): Definition, feasibility condition $\sum_{h=1}^{q} \min_{j\in \mathscr{J}_h} w_j \le c$ and an instance

- [Chapter 2 «Knapsack problems»](../combinatorial-optimization-problems/knapsack.md#29-the-variants-at-a-glance): Enumeration of the reference instance: only $3$ of the $8$ choices fit

- [Exercise 2.5](../exercises/knapsack.md#esercizio-2-5):

### Instance MCKP1 { #sez-sec-cat-ist-mckp1 }

Reference instance of the MCKP (classes $\{1,2\}$, $\{3,4\}$, $\{5,6\}$).

Capacity $c=15$, $3$ classes (pairs $(p,w)$ of the items of each class):

- class 1: $(6,4)$, $(8,6)$;

- class 2: $(5,5)$, $(7,8)$;

- class 3: $(4,3)$, $(9,7)$.

- Optimal value $z(\mathrm{MCKP1})=17$, attained by $\{1,4,5\}$ and $\{2,3,5\}$.

- Used in [Example «MCKP instance»](../combinatorial-optimization-problems/knapsack.md#box-15-ex-mckp), [The variants at a glance](../combinatorial-optimization-problems/knapsack.md#29-the-variants-at-a-glance).

### Instance MCKP2 { #sez-sec-cat-ist-mckp2 }

One item per class (classes $\{1,2\}$, $\{3,4,5\}$, $\{6,7\}$).

Capacity $c=16$, $3$ classes (pairs $(p,w)$ of the items of each class):

- class 1: $(5,6)$, $(8,9)$;

- class 2: $(14,4)$, $(13,6)$, $(11,7)$;

- class 3: $(12,8)$, $(6,2)$.

- Optimal value $z(\mathrm{MCKP2})=28$, attained by $\{2,3,7\}$, the only optimal solution.

- Used in [Exercise 2.5](../exercises/knapsack.md#esercizio-2-5).

## Knapsack problem with setups (KPS) { #sez-sec-cat-kps }

<a id="box-8-def-cat-kps"></a>

!!! definizione "Definition 8: Knapsack problem with setups"

    Given:

    1. a knapsack of <em>capacity</em> $c \in \Z_{\ge 1}$,

    2. a set $\Ioggetti = \{1,2,\dots,n\}$ of $n$ items,

    3. the set of items is partitioned into $q \in \Z_{\ge 2}$ classes,

    4. for each class $h \in \{1,2,\dots,q\}$, the subset $\mathscr{J}_h \subseteq \Ioggetti$ contains the items of that class, with an associated <em>setup cost</em> $f_h \in \Z_{\ge 1}$ and a <em>setup weight</em> $s_h \in \Z_{\ge 1}$,

    5. for each item $j \in \Ioggetti$, a <em>revenue</em> $p_j \in \Z_{\ge 1}$ and a <em>weight</em> $w_j \in \Z_{\ge 1}$,

    the <strong>Knapsack Problem with Setups</strong> (KPS) asks to decide which items to insert into the knapsack, so that the total weight of the selected items plus the setup weights of their classes does not exceed the knapsack capacity, and the total revenue of the selected items minus the setup costs of their classes is maximized. With the activated classes $\mathscr{H}(S) := \{ h : S\cap \mathscr{J}_h \neq \emptyset \}$,

    $$
    \tilde{S}\in \argmax_{S \subseteq \Ioggetti}
    \left\{~~
    \sum_{j \in S} p_j \;-\; \sum_{h\in \mathscr{H}(S)} f_h
    \;\;:\;\;
    \sum_{j\in S} w_j \;+\; \sum_{h\in \mathscr{H}(S)} s_h \le c
    ~~\right\}.
    $$

- Defined in [Chapter 2 «Knapsack problems»](../combinatorial-optimization-problems/knapsack.md#box-16-defKPS).

- The KPS is the KP in which selecting the first item of a class costs the setup $f_h$ and consumes the setup weight $s_h$; a class with no selected item costs nothing.

<strong>Where it is treated</strong>

- [Chapter 2 «Knapsack problems»](../combinatorial-optimization-problems/knapsack.md#box-16-defKPS): Definition, activated classes, assumptions and an instance with two classes

- [Chapter 2 «Knapsack problems»](../combinatorial-optimization-problems/knapsack.md#29-the-variants-at-a-glance): Enumeration of the reference instance: three optimal solutions

### Instance KPS1 { #sez-sec-cat-ist-kps1 }

Reference instance of the KPS.

Capacity $c=20$, $n=6$ items; class 1: items $\{1,2,3\}$, setup cost $f_1=3$, setup weight $s_1=2$; class 2: items $\{4,5,6\}$, setup cost $f_2=4$, setup weight $s_2=3$:

$$
\begin{array}{l|cccccc}
\hline
j & 1 & 2 & 3 & 4 & 5 & 6 \\
\hline
p_j & 6 & 8 & 5 & 7 & 9 & 4 \\
w_j & 4 & 5 & 3 & 6 & 7 & 2 \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{KPS1})=16$, attained by $\{1,2,3\}$, $\{4,5,6\}$, $\{1,2,3,6\}$.

- Used in [Example «KPS instance»](../combinatorial-optimization-problems/knapsack.md#box-17-ex-kps), [The variants at a glance](../combinatorial-optimization-problems/knapsack.md#29-the-variants-at-a-glance).
