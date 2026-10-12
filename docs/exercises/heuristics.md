---
title: "Exercises · Heuristic algorithms: definitions"
---

# Exercises · Heuristic algorithms: definitions

<div class="info-capitolo" markdown>

**Exercises · Chapter 23** · each solution opens with a click · [:material-book-open-variant: Chapter 23: Definitions](../heuristic-algorithms/heuristics.md) · [:material-file-pdf-box: Exercises, volume 4 (PDF)](../pdf/exercises-4-heuristic-algorithms.pdf)

</div>

<a id="esercizio-23-1"></a>

!!! esercizio "Exercise 23.1: Gap and relative error (1)"

    We consider a knapsack of capacity $c=12$ and $n=5$ items with the following profits and weights:

    $$
    \begin{array}{l|ccccc}
    \hline  & {j=1} & {j=2} & {j=3} & {j=4} & {j=5} \\[1ex]
    \hline {p_j} & {20} & {18} & {14} & {9} & {6} \\
    {w_j} & {6} & {5} & {4} & {3} & {2} \\
    \hline
    \end{array}
    $$

    A heuristic algorithm returns the items $\{1,2\}$.

    **Questions**

    1. Verify that the heuristic solution is feasible, and give its value $\mathscr{A}(I)$. Is it a primal or a dual bound, an upper or a lower bound?

    2. Compute the dual bound $\mathrm{UB}(I)$ given by the LP relaxation, rounded down.

    3. Compute the gap of the heuristic solution.

    4. Find the optimal value $z(I)$ by enumeration, compute the relative error, and check that it is at most the gap.

??? soluzione "Solution"

    !!! nota ""

        For a heuristic value $\mathscr{A}(I)$ and a dual bound, the gap is the difference of the two bounds divided by the lower one:

        \begin{align*}
        gap(I)&=\frac{\mathscr{A}(I)-\mathrm{LB}(I)}{\mathrm{LB}(I)}~~\text{(minimization)},\\
        gap(I)&=\frac{\mathrm{UB}(I)-\mathscr{A}(I)}{\mathscr{A}(I)}~~\text{(maximization)},
        \end{align*}

        and the relative error is $\frac{\mathscr{A}(I)-z(I)}{z(I)}$ (minimization) or $\frac{z(I)-\mathscr{A}(I)}{z(I)}$ (maximization). The relative error is at most the gap.

    1. The weight is $6+5=11\le 12$, so the solution is feasible, with $\mathscr{A}(I)=20+18=38$. The KP is a maximization problem: $\mathscr{A}(I)$ is a primal bound, and a lower bound on $z(I)$.

    2. The efficiencies $\frac{p_j}{w_j}$ are $\frac{10}{3}$, $\frac{18}{5}$, $\frac{7}{2}$, $3$, $3$, so the items sorted by non-increasing efficiency are $(2,3,1,4,5)$. The relaxation packs the items $2$, $3$ (weight $9$) and a fraction $\frac{1}{2}$ of item $1$:

        $$
        z(I)\le 18+14+20\cdot\frac{1}{2}=42 .
        $$

        The profits are integer, so $\mathrm{UB}(I)=\lfloor 42\rfloor=42$.

    3. &#8203;

        $$
        gap(I)=\frac{\mathrm{UB}(I)-\mathscr{A}(I)}{\mathscr{A}(I)}=\frac{42-38}{38}=\frac{2}{19}\approx 10.5\% .
        $$

    4. Enumerating the $2^5=32$ subsets gives $z(I)=41$, attained by $\{2,3,4\}$ (weight $12$). The relative error is

        $$
        \frac{z(I)-\mathscr{A}(I)}{z(I)}=\frac{41-38}{41}=\frac{3}{41}\approx 7.3\%~\le~ 10.5\% .
        $$

        The gap overestimates the error because $\mathrm{UB}(I)>z(I)$, and because it divides by $\mathscr{A}(I)<z(I)$.

<a id="esercizio-23-2"></a>

!!! esercizio "Exercise 23.2: Gaps for minimization problems (1)"

    Consider the following three instances and heuristic solutions.

    - **(a)** BPP with $c=10$ and weights $(6, 5, 4, 4, 3, 3, 2, 2)$; heuristic packing patterns $\{1\}$, $\{2,3\}$, $\{4,5\}$, $\{6,7,8\}$.

    - **(b)** BPP with $c=10$ and weights $(6, 6, 6, 5, 2)$; heuristic packing patterns $\{1\}$, $\{2\}$, $\{3\}$, $\{4\}$, $\{5\}$.

    - **(c)** $P\|C_{\max}$ with $m=3$ and processing times $(7, 6, 5, 4, 3, 3, 2)$; heuristic schedule $J_1=\{1,4\}$, $J_2=\{2,5,6\}$, $J_3=\{3,7\}$.

    **Questions**

    1. Verify that the three heuristic solutions are feasible, and give their values $\mathscr{A}(I)$.

    2. Compute the dual bounds $\mathrm{LB}(I)=\left\lceil\frac{\sum_j w_j}{c}\right\rceil$ for the BPP and $\mathrm{LB}(I)=\max\left\{\max_j t_j,\left\lceil\frac{\sum_j t_j}{m}\right\rceil\right\}$ for $P\|C_{\max}$, and the gaps.

    3. Compute the optimal values (Gurobi for the BPP, enumeration for $P\|C_{\max}$) and the relative errors. When are the gap and the error equal?

??? soluzione "Solution"

    !!! nota ""

        For a heuristic value $\mathscr{A}(I)$ and a dual bound, the gap is the difference of the two bounds divided by the lower one:

        \begin{align*}
        gap(I)&=\frac{\mathscr{A}(I)-\mathrm{LB}(I)}{\mathrm{LB}(I)}~~\text{(minimization)},\\
        gap(I)&=\frac{\mathrm{UB}(I)-\mathscr{A}(I)}{\mathscr{A}(I)}~~\text{(maximization)},
        \end{align*}

        and the relative error is $\frac{\mathscr{A}(I)-z(I)}{z(I)}$ (minimization) or $\frac{z(I)-\mathscr{A}(I)}{z(I)}$ (maximization). The relative error is at most the gap.

    1. - **(a)** The pattern weights are $6$, $9$, $7$, $7$, all at most $10$: $\mathscr{A}(I)=4$.

        - **(b)** Every item is alone in its bin: $\mathscr{A}(I)=5$.

        - **(c)** The loads are $11$, $12$, $7$: $\mathscr{A}(I)=12$.

        All three problems are minimization problems, so these values are upper bounds on $z(I)$.

    2. - **(a)** $\mathrm{LB}(I)=\left\lceil \frac{29}{10}\right\rceil=3$ and $gap(I)=\frac{4-3}{3}\approx 33.3\%$.

        - **(b)** $\mathrm{LB}(I)=\left\lceil \frac{5}{2}\right\rceil=3$ and $gap(I)=\frac{5-3}{3}\approx 66.7\%$.

        - **(c)** $\mathrm{LB}(I)=\max\{7,\lceil 30/3\rceil\}=10$ and $gap(I)=\frac{12-10}{10}=\frac{1}{5}\approx 20.0\%$.

    3. - **(a)** $z(I)=3$, for instance with $\{1,3\}$, $\{2,5,7\}$, $\{4,6,8\}$; the error is $\frac{4-3}{3}\approx 33.3\%$.

        - **(b)** $z(I)=4$: the three items of weight $6$ need three bins, and the item of weight $5$ fits with none of them; the error is $\frac{5-4}{4}=\frac{1}{4}= 25.0\%$, much smaller than the gap.

        - **(c)** $z(I)=10$, for instance with $\{1,5\}$, $\{2,4\}$, $\{3,6,7\}$; the error is $\frac{1}{5}\approx 20.0\%$.

        The gap equals the relative error exactly when the dual bound equals $z(I)$, as in (a) and (c). In (b) the bound is weak, and the gap overestimates the error.

<a id="esercizio-23-3"></a>

!!! esercizio "Exercise 23.3: A dual bound for the TSP (1)"

    We consider a TSP instance with $n=5$ cities and the symmetric distances

    $$
    \begin{array}{c|ccccc}
    \hline
    d_{ij} & 1 & 2 & 3 & 4 & 5\\
    \hline
    1 & - & 4 & 10 & 2 & 8\\
    2 & 4 & - & 11 & 2 & 5\\
    3 & 10 & 11 & - & 4 & 2\\
    4 & 2 & 2 & 4 & - & 2\\
    5 & 8 & 5 & 2 & 2 & -\\
    \hline
    \end{array}
    $$

    Two heuristic algorithms return the tours $\sigma_1=(1,2,3,4,5)$ and $\sigma_2=(1,4,2,5,3)$.

    **Questions**

    1. Compute the lengths $L(\sigma_1)$ and $L(\sigma_2)$.

    2. Compute the dual bound of the chapter based on the two smallest distances from each city.

    3. Compute the gaps of the two tours.

    4. Find the optimal tour by enumerating the distinct tours, and compute the relative errors. Compare them with the gaps.

??? soluzione "Solution"

    !!! nota ""

        For a heuristic value $\mathscr{A}(I)$ and a dual bound, the gap is the difference of the two bounds divided by the lower one:

        \begin{align*}
        gap(I)&=\frac{\mathscr{A}(I)-\mathrm{LB}(I)}{\mathrm{LB}(I)}~~\text{(minimization)},\\
        gap(I)&=\frac{\mathrm{UB}(I)-\mathscr{A}(I)}{\mathscr{A}(I)}~~\text{(maximization)},
        \end{align*}

        and the relative error is $\frac{\mathscr{A}(I)-z(I)}{z(I)}$ (minimization) or $\frac{z(I)-\mathscr{A}(I)}{z(I)}$ (maximization). The relative error is at most the gap.

    1. $L(\sigma_1)=4+11+4+2+8=29$ and $L(\sigma_2)=2+2+5+2+10=21$.

    2. The two smallest distances from each city are $(2,4)$ for city $1$, $(2,4)$ for city $2$, $(2,4)$ for city $3$, $(2,2)$ for city $4$, $(2,2)$ for city $5$. Hence

        $$
        \mathrm{LB}(I)=\left\lceil\frac{1}{2}\left(6+6+6+4+4\right)\right\rceil=\left\lceil 13\right\rceil=13.
        $$

    3. $gap_1=\frac{29-13}{13}=\frac{16}{13}\approx 123.1\%$ and $gap_2=\frac{21-13}{13}=\frac{8}{13}\approx 61.5\%$.

    4. There are $\frac{(n-1)!}{2}=12$ distinct tours, and the shortest is $(1,2,5,3,4)$, of length $z(I)=17$. The relative errors are $\frac{29-17}{17}\approx 70.6\%$ and $\frac{21-17}{17}\approx 23.5\%$, smaller than the gaps, since $\mathrm{LB}(I)=13<z(I)=17$. Both measures rank $\sigma_2$ better than $\sigma_1$.

<a id="esercizio-23-4"></a>

!!! esercizio "Exercise 23.4: Neighbourhoods and local optima (1)"

    We consider a knapsack of capacity $c=11$ and $n=5$ items:

    $$
    \begin{array}{l|ccccc}
    \hline  & {j=1} & {j=2} & {j=3} & {j=4} & {j=5} \\[1ex]
    \hline {p_j} & {12} & {10} & {9} & {7} & {4} \\
    {w_j} & {6} & {5} & {4} & {3} & {2} \\
    \hline
    \end{array}
    $$

    The solutions are represented by binary vectors $\vet x\in\{0,1\}^n$. The <strong>flip</strong> neighbourhood adds or removes one item; the <strong>swap</strong> neighbourhood removes one selected item and adds one unselected item. Only feasible neighbours count.

    **Questions**

    1. Give the size of the search space, and the number of its elements that are feasible solutions.

    2. Consider the solution $\{1,3\}$. List its flip neighbours and its swap neighbours, and decide whether it is a local optimum for each neighbourhood.

    3. Do the same for the solution $\{1,2\}$.

    4. Find the global optimum by enumeration. Is either neighbourhood exact on this instance?

??? soluzione "Solution"

    1. The search space is $\{0,1\}^5$, with $2^5=32$ vectors; $20$ of them respect the capacity. The others exceed it: the representation can describe infeasible objects.

    2. The solution has weight $10$ and profit $21$.

        Flip neighbours:

        <div class="tabella" markdown="0"><table>
        <tr>
        <th>neighbour</th>
        <th>move</th>
        <th>weight</th>
        <th>profit</th>
        </tr>
        <tr>
        <td><span class="arithmatex">\(\{3\}\)</span></td>
        <td>out <span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(9\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(\{1,2,3\}\)</span></td>
        <td>in <span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(15\)</span></td>
        <td>— (infeasible)</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(\{1\}\)</span></td>
        <td>out <span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(12\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(\{1,3,4\}\)</span></td>
        <td>in <span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(13\)</span></td>
        <td>— (infeasible)</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(\{1,3,5\}\)</span></td>
        <td>in <span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(12\)</span></td>
        <td>— (infeasible)</td>
        </tr>
        </table></div>

        No feasible flip neighbour has profit larger than $21$: the solution is a local optimum for the flip neighbourhood.

        Swap neighbours:

        <div class="tabella" markdown="0"><table>
        <tr>
        <th>neighbour</th>
        <th>move</th>
        <th>weight</th>
        <th>profit</th>
        </tr>
        <tr>
        <td><span class="arithmatex">\(\{2,3\}\)</span></td>
        <td>out <span class="arithmatex">\(1\)</span>, in <span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(9\)</span></td>
        <td><span class="arithmatex">\(19\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(\{3,4\}\)</span></td>
        <td>out <span class="arithmatex">\(1\)</span>, in <span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(7\)</span></td>
        <td><span class="arithmatex">\(16\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(\{3,5\}\)</span></td>
        <td>out <span class="arithmatex">\(1\)</span>, in <span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(13\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(\{1,2\}\)</span></td>
        <td>out <span class="arithmatex">\(3\)</span>, in <span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(11\)</span></td>
        <td><span class="arithmatex">\(22\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(\{1,4\}\)</span></td>
        <td>out <span class="arithmatex">\(3\)</span>, in <span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(9\)</span></td>
        <td><span class="arithmatex">\(19\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(\{1,5\}\)</span></td>
        <td>out <span class="arithmatex">\(3\)</span>, in <span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(8\)</span></td>
        <td><span class="arithmatex">\(16\)</span></td>
        </tr>
        </table></div>

        The neighbour $\{1,2\}$ has profit $22>21$: the solution is not a local optimum for the swap neighbourhood.

    3. The solution has weight $11$ and profit $22$.

        Flip neighbours:

        <div class="tabella" markdown="0"><table>
        <tr>
        <th>neighbour</th>
        <th>move</th>
        <th>weight</th>
        <th>profit</th>
        </tr>
        <tr>
        <td><span class="arithmatex">\(\{2\}\)</span></td>
        <td>out <span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(10\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(\{1\}\)</span></td>
        <td>out <span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(12\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(\{1,2,3\}\)</span></td>
        <td>in <span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(15\)</span></td>
        <td>— (infeasible)</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(\{1,2,4\}\)</span></td>
        <td>in <span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(14\)</span></td>
        <td>— (infeasible)</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(\{1,2,5\}\)</span></td>
        <td>in <span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(13\)</span></td>
        <td>— (infeasible)</td>
        </tr>
        </table></div>

        Swap neighbours:

        <div class="tabella" markdown="0"><table>
        <tr>
        <th>neighbour</th>
        <th>move</th>
        <th>weight</th>
        <th>profit</th>
        </tr>
        <tr>
        <td><span class="arithmatex">\(\{2,3\}\)</span></td>
        <td>out <span class="arithmatex">\(1\)</span>, in <span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(9\)</span></td>
        <td><span class="arithmatex">\(19\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(\{2,4\}\)</span></td>
        <td>out <span class="arithmatex">\(1\)</span>, in <span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(8\)</span></td>
        <td><span class="arithmatex">\(17\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(\{2,5\}\)</span></td>
        <td>out <span class="arithmatex">\(1\)</span>, in <span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(7\)</span></td>
        <td><span class="arithmatex">\(14\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(\{1,3\}\)</span></td>
        <td>out <span class="arithmatex">\(2\)</span>, in <span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(10\)</span></td>
        <td><span class="arithmatex">\(21\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(\{1,4\}\)</span></td>
        <td>out <span class="arithmatex">\(2\)</span>, in <span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(9\)</span></td>
        <td><span class="arithmatex">\(19\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(\{1,5\}\)</span></td>
        <td>out <span class="arithmatex">\(2\)</span>, in <span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(8\)</span></td>
        <td><span class="arithmatex">\(16\)</span></td>
        </tr>
        </table></div>

        No feasible neighbour is better: $\{1,2\}$ is a local optimum for both neighbourhoods.

    4. The global optimum is $\{1,4,5\}$, of weight $11$ and profit $z(I)=23$. The solution $\{1,2\}$ is a local optimum for both neighbourhoods with profit $22<23$, so neither neighbourhood is exact: reaching the optimum from $\{1,2\}$ needs to remove one item and add two.

<a id="esercizio-23-5"></a>

!!! esercizio "Exercise 23.5: Constructive heuristics, local search and metaheuristics (1)"

    We consider $P\|C_{\max}$ with $m=2$ machines and $n=6$ jobs:

    $$
    \begin{array}{l|cccccc}
    \hline  & {j=1} & {j=2} & {j=3} & {j=4} & {j=5} & {j=6} \\[1ex]
    \hline {t_j} & {8} & {4} & {4} & {6} & {3} & {7} \\
    \hline
    \end{array}
    $$

    A solution is represented by the vector $\vet{mach}$, where $mach_j$ is the machine of job $j$. Three procedures are proposed:

    - **(P1)** consider the jobs in the order $1,\dots,n$ and assign each job to the machine with the smallest current load (ties: smallest machine index); never change an assignment;

    - **(P2)** starting from a solution, move one job to the other machine, choosing the move with the smallest makespan (ties: smallest job index); repeat while the makespan strictly decreases;

    - **(P3)** repeat (P2) many times, each time from a solution obtained by assigning every job to a random machine, and keep the best solution found.

    **Questions**

    1. Give the size of the search space of this representation. Are all its elements feasible?

    2. Classify the three procedures using the classes of the chapter.

    3. Apply (P1), and then apply (P2) starting from its solution. Show the neighbours examined at each step.

    4. Find the optimal value by enumeration. Is the solution returned by (P2) a global optimum? Would it be a local optimum for the neighbourhood that exchanges two jobs on different machines?

    5. Explain the roles of intensification and diversification in (P2) and (P3).

??? soluzione "Solution"

    1. The search space is $\{1,2\}^6$, with $m^n=2^6=64$ vectors. Every vector is a feasible schedule, since the machines have no capacity.

    2. (P1) is a constructive heuristic: it extends a partial solution one job at a time and never revises a choice. (P2) is a local search with the neighbourhood that moves one job. (P3) is a metaheuristic: it guides the local search beyond the first local optimum by restarting it from other solutions.

    3. (P1) gives $\vet{mach}=(1,2,2,1,2,2)$, with loads $(14,18)$ and makespan $18$.

        \*\*Iteration 1\*\*<br> The neighbours of the solution of (P1) are:

        <div class="tabella" markdown="0"><table>
        <tr>
        <th>move</th>
        <th>loads</th>
        <th>makespan</th>
        </tr>
        <tr>
        <td>job <span class="arithmatex">\(1\)</span> to machine <span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\((6,26)\)</span></td>
        <td><span class="arithmatex">\(26\)</span></td>
        </tr>
        <tr>
        <td>job <span class="arithmatex">\(2\)</span> to machine <span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\((18,14)\)</span></td>
        <td><span class="arithmatex">\(18\)</span></td>
        </tr>
        <tr>
        <td>job <span class="arithmatex">\(3\)</span> to machine <span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\((18,14)\)</span></td>
        <td><span class="arithmatex">\(18\)</span></td>
        </tr>
        <tr>
        <td>job <span class="arithmatex">\(4\)</span> to machine <span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\((8,24)\)</span></td>
        <td><span class="arithmatex">\(24\)</span></td>
        </tr>
        <tr>
        <td>job <span class="arithmatex">\(5\)</span> to machine <span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\((17,15)\)</span></td>
        <td><span class="arithmatex">\(17\)</span></td>
        </tr>
        <tr>
        <td>job <span class="arithmatex">\(6\)</span> to machine <span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\((21,11)\)</span></td>
        <td><span class="arithmatex">\(21\)</span></td>
        </tr>
        </table></div>

        The best one has makespan $17<18$: the new solution is $\vet{mach}=(1,2,2,1,1,2)$.

        \*\*Iteration 2\*\*<br> Its neighbours are:

        <div class="tabella" markdown="0"><table>
        <tr>
        <th>move</th>
        <th>loads</th>
        <th>makespan</th>
        </tr>
        <tr>
        <td>job <span class="arithmatex">\(1\)</span> to machine <span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\((9,23)\)</span></td>
        <td><span class="arithmatex">\(23\)</span></td>
        </tr>
        <tr>
        <td>job <span class="arithmatex">\(2\)</span> to machine <span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\((21,11)\)</span></td>
        <td><span class="arithmatex">\(21\)</span></td>
        </tr>
        <tr>
        <td>job <span class="arithmatex">\(3\)</span> to machine <span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\((21,11)\)</span></td>
        <td><span class="arithmatex">\(21\)</span></td>
        </tr>
        <tr>
        <td>job <span class="arithmatex">\(4\)</span> to machine <span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\((11,21)\)</span></td>
        <td><span class="arithmatex">\(21\)</span></td>
        </tr>
        <tr>
        <td>job <span class="arithmatex">\(5\)</span> to machine <span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\((14,18)\)</span></td>
        <td><span class="arithmatex">\(18\)</span></td>
        </tr>
        <tr>
        <td>job <span class="arithmatex">\(6\)</span> to machine <span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\((24,8)\)</span></td>
        <td><span class="arithmatex">\(24\)</span></td>
        </tr>
        </table></div>

        No neighbour has makespan smaller than $17$: (P2) stops at a local optimum.

    4. Enumeration gives $z(I)=16$, for instance with $J_1=\{1,2,3\}$ and $J_2=\{4,5,6\}$. The local optimum of (P2), of makespan $17$, is not a global optimum. Exchanging jobs $1$ and $6$ gives loads $(16,16)$ and makespan $16$: for the exchange neighbourhood the solution is not a local optimum. Being a local optimum depends on the neighbourhood.

    5. (P2) is pure intensification: it moves downhill and stops at the bottom of the first valley it meets. The random starting solutions of (P3) are diversification: they bring the search to other regions of the search space, where another local search can find a better valley. Keeping the best solution makes the repeated runs useful.
