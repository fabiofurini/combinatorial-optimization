---
title: "Exercises · Metaheuristics"
---

# Exercises · Metaheuristics

<div class="info-capitolo" markdown>

**Exercises · Chapter 21** · each solution opens with a click · [:material-book-open-variant: Chapter 21](../heuristic-algorithms/metaheuristics.md)

</div>

## Simulated annealing

<a id="esercizio-21-1"></a>

!!! esercizio "Exercise 21.1: Simulated annealing 1"

    A TSP instance with $6$ cities and the symmetric distances

    $$
    \begin{array}{c|cccccc}
    \hline {d_{ij}} & {1} & {2} & {3} & {4} & {5} & {6} \\
    \hline {1} & --- & {5} & {1} & {7} & {7} & {4} \\
    {2} & {5} & --- & {4} & {5} & {2} & {1} \\
    {3} & {1} & {4} & --- & {6} & {6} & {4} \\
    {4} & {7} & {5} & {6} & --- & {7} & {6} \\
    {5} & {7} & {2} & {6} & {7} & --- & {2} \\
    {6} & {4} & {1} & {4} & {6} & {2} & --- \\
    \hline
    \end{array}
    $$

    The 2-opt moves of a tour of $6$ cities are numbered

    $$
    1:(1,3), 2:(1,4), 3:(1,5), 4:(2,4), 5:(2,5), 6:(2,6), 7:(3,5), 8:(3,6), 9:(4,6)
    $$

    and the random numbers to use, in this order, are $0.13$, $0.76$, $0.46$, $0.53$, $0.22$, $0.05$, $0.68$, $0.68$, $0.93$, $0.38$, $0.52$, $0.83$.

    **Questions**

    1. Compute the nearest neighbour tour from city $1$ (ties: smallest index) and its length, and show that it is a local optimum for the 2-opt neighbourhood.

    2. Apply simulated annealing with the 2-opt neighbourhood from this tour, with $T_0=5$, $\alpha=0.8$, $L=2$ and $T_{\min}=3$. How many iterations are performed?

    3. At each iteration the first random number $u$ chooses the move $1+\lfloor 9u\rfloor$ and the second one, $v$, is used in the Metropolis test. Show every iteration: move, $\delta$, acceptance test, current and best tour.

    4. Compare the best tour found with the optimal one, and explain which accepted move made it possible to escape from the starting local optimum.

??? soluzione "Solution"

    1. The nearest neighbour tour is $(1,3,2,6,5,4)$, of length $22$. Its $9$ neighbours have $\delta$: $(1,3)$: $+7$, $(1,4)$: $+7$, $(1,5)$: $+5$, $(2,4)$: $+0$, $(2,5)$: $+0$, $(2,6)$: $+0$, $(3,5)$: $+0$, $(3,6)$: $+1$, $(4,6)$: $+4$. No $\delta$ is negative: the tour is a 2-opt local optimum.

    2. The temperatures are $5$, $4$ and $3.2$; then $T=2.56\le 3$ stops the search: $3\cdot 2=6$ iterations, which use $12$ random numbers.

    3. - Iteration $1$ ($T=5$): $u=0.13$ gives the move $1+\lfloor 9\cdot 0.13\rfloor=2$, i.e. $(1,4)$, with $\delta=7$; $v=0.76 \ge e^{-7/5}=0.2466$: rejected. Current tour $(1,3,2,6,5,4)$, length $22$, best $22$.

        - Iteration $2$ ($T=5$): $u=0.46$ gives the move $1+\lfloor 9\cdot 0.46\rfloor=5$, i.e. $(2,5)$, with $\delta=0$; $\delta\le 0$: accepted. Current tour $(1,3,5,6,2,4)$, length $22$, best $22$.

        - Iteration $3$ ($T=4$): $u=0.22$ gives the move $1+\lfloor 9\cdot 0.22\rfloor=2$, i.e. $(1,4)$, with $\delta=6$; $v=0.05 < e^{-6/4}=0.2231$: accepted. Current tour $(1,6,5,3,2,4)$, length $28$, best $22$.

        - Iteration $4$ ($T=4$): $u=0.68$ gives the move $1+\lfloor 9\cdot 0.68\rfloor=7$, i.e. $(3,5)$, with $\delta=-3$; $\delta\le 0$: accepted. Current tour $(1,6,5,2,3,4)$, length $25$, best $22$.

        - Iteration $5$ ($T=3.2$): $u=0.93$ gives the move $1+\lfloor 9\cdot 0.93\rfloor=9$, i.e. $(4,6)$, with $\delta=-5$; $\delta\le 0$: accepted. Current tour $(1,6,5,2,4,3)$, length $20$, best $20$.

        - Iteration $6$ ($T=3.2$): $u=0.52$ gives the move $1+\lfloor 9\cdot 0.52\rfloor=5$, i.e. $(2,5)$, with $\delta=4$; $v=0.83 \ge e^{-4/3.2}=0.2865$: rejected. Current tour $(1,6,5,2,4,3)$, length $20$, best $20$.

    4. The best tour found is $(1,6,5,2,4,3)$ of length $20$; by enumeration of the $60$ tours the optimal tour is $(1,3,4,2,5,6)$, of length $20$: simulated annealing finds the optimum. The escape is due to the accepted moves with $\delta\ge 0$ (iterations $2$, $3$), which lead the search away from the local optimum $22$, from where improving moves reach $20$.

<a id="esercizio-21-2"></a>

!!! esercizio "Exercise 21.2: Simulated annealing 2"

    A knapsack of capacity $c=16$ and $5$ items:

    $$
    \begin{array}{l|ccccc}
    \hline  & {i=1} & {i=2} & {i=3} & {i=4} & {i=5} \\
    \hline {p_i} & {11} & {5} & {18} & {8} & {8} \\
    {w_i} & {5} & {3} & {11} & {6} & {7} \\
    \hline
    \end{array}
    $$

    Simulated annealing with the flip neighbourhood maximizes

    $$
    f_\beta(x)=\sum_i p_ix_i-\beta\max\Big\{0,\sum_i w_ix_i-c\Big\},
    $$

    with $T_0=4$, $\alpha=0.8$, $L=2$, $T_{\min}=1.7$. At each iteration $u$ chooses the item $1+\lfloor 5u\rfloor$ to flip and $v$ is used in the acceptance test. The random numbers are $0.63$, $0.11$, $0.17$, $0.66$, $0.38$, $0.94$, $0.58$, $0.59$, $0.69$, $0.67$, $0.39$, $0.62$, $0.69$, $0.07$, $0.59$, $0.42$.

    **Questions**

    1. Compute the solution $x$ of the greedy algorithm by efficiency, and show that it is a local optimum for the flip neighbourhood among the feasible solutions.

    2. Apply simulated annealing from $x$ with $\beta=1$. Which is the best feasible solution found, and where is the search at the end?

    3. Apply simulated annealing from $x$ with $\beta=3$, with the same random numbers. Which is the best feasible solution found?

    4. Explain the different behaviour with the two values of $\beta$, and compare with the optimal value.

??? soluzione "Solution"

    1. The efficiencies are $\frac{11}{5}$, $\frac{5}{3}$, $\frac{18}{11}$, $\frac{8}{6}$, $\frac{8}{7}$, already non-increasing. Greedy selects items $1$, $2$ ($rc=8$), skips item $3$ ($w_3=11$), selects item $4$ ($rc=2$) and skips item $5$: $x=(1,1,0,1,0)$, weight $14$, profit $24$. Feasible flips only remove items (adding item $3$ or $5$ exceeds the capacity), so every feasible neighbour has smaller profit: $x$ is a local optimum.

    2. With $\beta=1$ the $8$ iterations ($T=4,4,3.2,3.2,2.56,2.56,2.048,2.048$) are:

        - Iteration $1$ ($T=4$): $u=0.63$ flips item $4$: $y=(1,1,0,0,0)$, weight $8$, profit $16$, $f(y)=16$, $\delta=8$; $v=0.11 < e^{-8/4}=0.1353$: accepted. Best feasible profit: $24$.

        - Iteration $2$ ($T=4$): $u=0.17$ flips item $1$: $y=(0,1,0,0,0)$, weight $3$, profit $5$, $f(y)=5$, $\delta=11$; $v=0.66 \ge e^{-11/4}=0.0639$: rejected. Best feasible profit: $24$.

        - Iteration $3$ ($T=3.2$): $u=0.38$ flips item $2$: $y=(1,0,0,0,0)$, weight $5$, profit $11$, $f(y)=11$, $\delta=5$; $v=0.94 \ge e^{-5/3.2}=0.2096$: rejected. Best feasible profit: $24$.

        - Iteration $4$ ($T=3.2$): $u=0.58$ flips item $3$: $y=(1,1,1,0,0)$, weight $19$, profit $34$, $f(y)=31$, $\delta=-15$; $\delta\le 0$: accepted. Best feasible profit: $24$.

        - Iteration $5$ ($T=2.56$): $u=0.69$ flips item $4$: $y=(1,1,1,1,0)$, weight $25$, profit $42$, $f(y)=33$, $\delta=-2$; $\delta\le 0$: accepted. Best feasible profit: $24$.

        - Iteration $6$ ($T=2.56$): $u=0.39$ flips item $2$: $y=(1,0,1,1,0)$, weight $22$, profit $37$, $f(y)=31$, $\delta=2$; $v=0.62 \ge e^{-2/2.56}=0.4578$: rejected. Best feasible profit: $24$.

        - Iteration $7$ ($T=2.048$): $u=0.69$ flips item $4$: $y=(1,1,1,0,0)$, weight $19$, profit $34$, $f(y)=31$, $\delta=2$; $v=0.07 < e^{-2/2.048}=0.3766$: accepted. Best feasible profit: $24$.

        - Iteration $8$ ($T=2.048$): $u=0.59$ flips item $3$: $y=(1,1,0,0,0)$, weight $8$, profit $16$, $f(y)=16$, $\delta=15$; $v=0.42 \ge e^{-15/2.048}=0.0007$: rejected. Best feasible profit: $24$.

        The best feasible profit remains $24$, and at the end the current solution is $(1,1,1,0,0)$, of weight $19>16$: the search ends in the infeasible region.

    3. With $\beta=3$:

        - Iteration $1$ ($T=4$): $u=0.63$ flips item $4$: $y=(1,1,0,0,0)$, weight $8$, profit $16$, $f(y)=16$, $\delta=8$; $v=0.11 < e^{-8/4}=0.1353$: accepted. Best feasible profit: $24$.

        - Iteration $2$ ($T=4$): $u=0.17$ flips item $1$: $y=(0,1,0,0,0)$, weight $3$, profit $5$, $f(y)=5$, $\delta=11$; $v=0.66 \ge e^{-11/4}=0.0639$: rejected. Best feasible profit: $24$.

        - Iteration $3$ ($T=3.2$): $u=0.38$ flips item $2$: $y=(1,0,0,0,0)$, weight $5$, profit $11$, $f(y)=11$, $\delta=5$; $v=0.94 \ge e^{-5/3.2}=0.2096$: rejected. Best feasible profit: $24$.

        - Iteration $4$ ($T=3.2$): $u=0.58$ flips item $3$: $y=(1,1,1,0,0)$, weight $19$, profit $34$, $f(y)=25$, $\delta=-9$; $\delta\le 0$: accepted. Best feasible profit: $24$.

        - Iteration $5$ ($T=2.56$): $u=0.69$ flips item $4$: $y=(1,1,1,1,0)$, weight $25$, profit $42$, $f(y)=15$, $\delta=10$; $v=0.67 \ge e^{-10/2.56}=0.0201$: rejected. Best feasible profit: $24$.

        - Iteration $6$ ($T=2.56$): $u=0.39$ flips item $2$: $y=(1,0,1,0,0)$, weight $16$, profit $29$, $f(y)=29$, $\delta=-4$; $\delta\le 0$: accepted. Best feasible profit: $29$.

        - Iteration $7$ ($T=2.048$): $u=0.69$ flips item $4$: $y=(1,0,1,1,0)$, weight $22$, profit $37$, $f(y)=19$, $\delta=10$; $v=0.07 \ge e^{-10/2.048}=0.0076$: rejected. Best feasible profit: $29$.

        - Iteration $8$ ($T=2.048$): $u=0.59$ flips item $3$: $y=(1,0,0,0,0)$, weight $5$, profit $11$, $f(y)=11$, $\delta=18$; $v=0.42 \ge e^{-18/2.048}=0.0002$: rejected. Best feasible profit: $29$.

        The best feasible solution is $(1,0,1,0,0)$, of profit $29$.

    4. With $\beta=1$ an excess weight costs only $1$ per unit, and the infeasible solutions containing item $3$ have a large penalized value (for instance $f_1(1,1,1,1,0)=42-9=33$): the search stays in the infeasible region and never comes back to a better feasible solution. With $\beta=3$ the infeasible solutions are only a bridge: the search crosses them and reaches $\{1,3\}$, of profit $29$, which is optimal (by enumeration). The penalty coefficient must be large enough to make the infeasible solutions less attractive than the good feasible ones.

<a id="esercizio-21-3"></a>

!!! esercizio "Exercise 21.3: Simulated annealing 3"

    A TSP instance with $6$ cities and the symmetric distances

    $$
    \begin{array}{c|cccccc}
    \hline {d_{ij}} & {1} & {2} & {3} & {4} & {5} & {6} \\
    \hline {1} & --- & {5} & {1} & {7} & {7} & {4} \\
    {2} & {5} & --- & {4} & {5} & {2} & {1} \\
    {3} & {1} & {4} & --- & {6} & {6} & {4} \\
    {4} & {7} & {5} & {6} & --- & {7} & {6} \\
    {5} & {7} & {2} & {6} & {7} & --- & {2} \\
    {6} & {4} & {1} & {4} & {6} & {2} & --- \\
    \hline
    \end{array}
    $$

    The starting tour is the nearest neighbour tour $(1,3,2,6,5,4)$, of length $22$, a 2-opt local optimum. The 2-opt moves are numbered

    $$
    1:(1,3), 2:(1,4), 3:(1,5), 4:(2,4), 5:(2,5), 6:(2,6), 7:(3,5), 8:(3,6), 9:(4,6)
    $$

    and the random numbers to use are $0.13$, $0.76$, $0.46$, $0.53$, $0.22$, $0.05$, $0.68$, $0.68$, $0.93$, $0.38$, $0.52$, $0.83$.

    **Questions**

    1. Compute the acceptance probability $e^{-\delta/T}$ of a worsening $\delta=6$ at $T=5$ and at $T=0.5$.

    2. With the geometric schedule, how many temperatures are used with $T_0=0.5$, $\alpha=0.8$, $T_{\min}=0.3$? And with $T_0=5$, $\alpha=0.95$, $T_{\min}=0.5$?

    3. Apply simulated annealing with $T_0=0.5$, $\alpha=0.8$, $L=2$, $T_{\min}=0.3$ (move $1+\lfloor 9u\rfloor$, Metropolis test with $v$). Show every iteration.

    4. The same random numbers with $T_0=5$, $T_{\min}=3$ lead to the optimal tour of length $20$. Explain why the run at low temperature does not.

??? soluzione "Solution"

    1. $e^{-6/5}=0.3012$ and $e^{-6/0.5}=e^{-12}=0.000006$: at low temperature a worsening of $6$ is practically never accepted.

    2. With $T_0=0.5$: $0.5$, $0.4$, $0.32$ are larger than $0.3$, and $0.256$ is not: $3$ temperatures, $6$ iterations with $L=2$. With $T_0=5$, $\alpha=0.95$: the smallest $K$ with $5\cdot 0.95^K\le 0.5$ is $K=\lceil \ln(0.1)/\ln(0.95)\rceil=45$ temperatures.

    3. - Iteration $1$ ($T=0.5$): $u=0.13$ gives the move $1+\lfloor 9\cdot 0.13\rfloor=2$, i.e. $(1,4)$, with $\delta=7$; $v=0.76 \ge e^{-7/0.5}=0.0000$: rejected. Current tour $(1,3,2,6,5,4)$, length $22$, best $22$.

        - Iteration $2$ ($T=0.5$): $u=0.46$ gives the move $1+\lfloor 9\cdot 0.46\rfloor=5$, i.e. $(2,5)$, with $\delta=0$; $\delta\le 0$: accepted. Current tour $(1,3,5,6,2,4)$, length $22$, best $22$.

        - Iteration $3$ ($T=0.4$): $u=0.22$ gives the move $1+\lfloor 9\cdot 0.22\rfloor=2$, i.e. $(1,4)$, with $\delta=6$; $v=0.05 \ge e^{-6/0.4}=0.0000$: rejected. Current tour $(1,3,5,6,2,4)$, length $22$, best $22$.

        - Iteration $4$ ($T=0.4$): $u=0.68$ gives the move $1+\lfloor 9\cdot 0.68\rfloor=7$, i.e. $(3,5)$, with $\delta=1$; $v=0.68 \ge e^{-1/0.4}=0.0821$: rejected. Current tour $(1,3,5,6,2,4)$, length $22$, best $22$.

        - Iteration $5$ ($T=0.32$): $u=0.93$ gives the move $1+\lfloor 9\cdot 0.93\rfloor=9$, i.e. $(4,6)$, with $\delta=3$; $v=0.38 \ge e^{-3/0.32}=0.0001$: rejected. Current tour $(1,3,5,6,2,4)$, length $22$, best $22$.

        - Iteration $6$ ($T=0.32$): $u=0.52$ gives the move $1+\lfloor 9\cdot 0.52\rfloor=5$, i.e. $(2,5)$, with $\delta=0$; $\delta\le 0$: accepted. Current tour $(1,3,2,6,5,4)$, length $22$, best $22$.

    4. At $T\le 0.5$ the worsening moves of the starting tour ($\delta\ge 1$) are accepted with probability at most $e^{-2}\approx 0.14$, and with these random numbers they are all rejected: only the moves with $\delta=0$ are accepted, and the search stays on tours of length $22$. Simulated annealing at low temperature is a local search: it cannot leave the valley of the starting local optimum. At $T_0=5$ the worsening move of iteration $3$ ($\delta=6$) is accepted, and the search reaches the optimum.

## Tabu search

<a id="esercizio-21-4"></a>

!!! esercizio "Exercise 21.4: Tabu search 1"

    $m=2$ identical machines and $5$ jobs with processing times $t=(3,3,2,2,2)$. Tabu search uses the move neighbourhood, compares the solutions lexicographically by $(C_{\max},\sum_h L_h^2)$, forbids moving a job back to the machine it has just left for $tenure$ iterations (aspiration: a tabu move is allowed if it gives a makespan smaller than the best one), and stops when $C_{\max}$ equals the lower bound. Ties between moves: smallest job, then smallest machine.

    **Questions**

    1. Compute the LPT solution and the lower bound $LB=\max\{\max_jt_j,\lceil\sum_jt_j/m\rceil\}$.

    2. Show that the LPT solution is a local optimum for the move neighbourhood.

    3. Apply tabu search with $tenure=3$ from the LPT solution, showing at each iteration the evaluation of the neighbours, the move performed and the tabu list.

    4. Is the final solution optimal? At which iteration does the search accept a worse solution, and why?

??? soluzione "Solution"

    1. LPT assigns the jobs $1,2$ (time $3$) to $M_1$ and $M_2$, then job $3$ to $M_1$ ($5$), job $4$ to $M_2$ ($5$), job $5$ to $M_1$ ($7$): $J_1=\{1,3,5\}$, $J_2=\{2,4\}$, loads $(7,5)$, $C_{\max}=7$. $LB=\max\{3,\lceil 12/2\rceil\}=6$.

    2. The neighbours are: job $1\to M_2$: $(8,80)$, job $2\to M_1$: $(10,104)$, job $3\to M_2$: $(7,74)$, job $4\to M_1$: $(9,90)$, job $5\to M_2$: $(7,74)$. No neighbour has makespan smaller than $7$, nor makespan $7$ and $\sum_hL_h^2<74$: the LPT solution is a local optimum.

    3. - Iteration $1$. Neighbours $(C_{\max},\sum_hL_h^2)$: $1\to M_2$: $(8,80)$, $2\to M_1$: $(10,104)$, $3\to M_2$: $(7,74)$, $4\to M_1$: $(9,90)$, $5\to M_2$: $(7,74)$. Move job $3$ from $M_1$ to $M_2$: loads $(5,7)$, $C_{\max}=7$; the attribute $(3,M_1)$ is tabu until iteration $4$; best makespan $7$.

        - Iteration $2$. Neighbours $(C_{\max},\sum_hL_h^2)$: $1\to M_2$: $(10,104)$, $2\to M_1$: $(8,80)$, $3\to M_1$: $(7,74)$ tabu, $4\to M_1$: $(7,74)$, $5\to M_2$: $(9,90)$. Move job $4$ from $M_2$ to $M_1$: loads $(7,5)$, $C_{\max}=7$; the attribute $(4,M_2)$ is tabu until iteration $5$; best makespan $7$.

        - Iteration $3$. Neighbours $(C_{\max},\sum_hL_h^2)$: $1\to M_2$: $(8,80)$, $2\to M_1$: $(10,104)$, $3\to M_1$: $(9,90)$ tabu, $4\to M_2$: $(7,74)$ tabu, $5\to M_2$: $(7,74)$. Move job $5$ from $M_1$ to $M_2$: loads $(5,7)$, $C_{\max}=7$; the attribute $(5,M_1)$ is tabu until iteration $6$; best makespan $7$.

        - Iteration $4$. Neighbours $(C_{\max},\sum_hL_h^2)$: $1\to M_2$: $(10,104)$, $2\to M_1$: $(8,80)$, $3\to M_1$: $(7,74)$ tabu, $4\to M_2$: $(9,90)$ tabu, $5\to M_1$: $(7,74)$ tabu. Move job $2$ from $M_2$ to $M_1$: loads $(8,4)$, $C_{\max}=8$; the attribute $(2,M_2)$ is tabu until iteration $7$; best makespan $7$.

        - Iteration $5$. Neighbours $(C_{\max},\sum_hL_h^2)$: $1\to M_2$: $(7,74)$, $2\to M_2$: $(7,74)$ tabu, $3\to M_1$: $(10,104)$, $4\to M_2$: $(6,72)$ tabu, $5\to M_1$: $(10,104)$ tabu. Move job $4$ from $M_1$ to $M_2$: loads $(6,6)$, $C_{\max}=6$; the attribute $(4,M_1)$ is tabu until iteration $8$; best makespan $6$.

    4. At iteration $5$ the makespan reaches $LB=6$: the solution $J_1=\{1,2\}$, $J_2=\{3,4,5\}$ is optimal and the search stops. The search accepts worse solutions (in the lexicographic order) at iteration $4$, because the best non-tabu neighbour is worse than the current solution: this is how tabu search leaves the plateau of makespan $7$.

<a id="esercizio-21-5"></a>

!!! esercizio "Exercise 21.5: Tabu search 2"

    $m=2$ identical machines and $5$ jobs with processing times $t=(3,3,2,2,2)$. The starting solution is the LPT solution $J_1=\{1,3,5\}$, $J_2=\{2,4\}$. Tabu search uses the move neighbourhood and the lexicographic comparison by $(C_{\max},\sum_hL_h^2)$; after moving job $j$ away from machine $h$, the attribute $(j,h)$ is tabu for $tenure$ iterations. Ties: smallest job, then smallest machine.

    **Questions**

    1. Apply $4$ iterations of tabu search with $tenure=0$ (no memory). What happens?

    2. Apply $6$ iterations with $tenure=1$. What happens?

    3. Explain why short tabu lists do not prevent the search from cycling on this instance.

    4. The same search with $tenure=3$ reaches the optimum $6$ in $5$ iterations. Which is the role of the tabu list, and what can go wrong with a tabu list that is too long?

??? soluzione "Solution"

    1. - Iteration $1$: job $3$ from $M_1$ to $M_2$, loads $(5,7)$.

        - Iteration $2$: job $3$ from $M_2$ to $M_1$, loads $(7,5)$.

        - Iteration $3$: job $3$ from $M_1$ to $M_2$, loads $(5,7)$.

        - Iteration $4$: job $3$ from $M_2$ to $M_1$, loads $(7,5)$.

        The search moves job $3$ back and forth: it cycles between two solutions of makespan $7$.

    2. - Iteration $1$: job $3$ from $M_1$ to $M_2$, loads $(5,7)$.

        - Iteration $2$: job $4$ from $M_2$ to $M_1$, loads $(7,5)$.

        - Iteration $3$: job $5$ from $M_1$ to $M_2$, loads $(5,7)$.

        - Iteration $4$: job $3$ from $M_2$ to $M_1$, loads $(7,5)$.

        - Iteration $5$: job $4$ from $M_1$ to $M_2$, loads $(5,7)$.

        - Iteration $6$: job $5$ from $M_2$ to $M_1$, loads $(7,5)$.

        The search still visits only solutions of makespan $7$, and it repeats the same sequence of moves: a longer cycle.

    3. All the neighbours with makespan $7$ move a job of time $2$ between the machines. With $tenure\le 2$ the attribute just created expires before the search has moved far enough, and the best non-tabu move brings it back to a solution already visited: the cycle is longer than the memory.

    4. The tabu list forbids undoing the recent moves, so that the search is forced to make worse moves and leave the plateau (with $tenure=3$ the worsening moves lead to the optimum). A tabu list that is too long forbids too many moves, possibly the good ones; in the extreme, all moves are tabu and the search is driven only by the aspiration criterion. The tenure must be tuned.

<a id="esercizio-21-6"></a>

!!! esercizio "Exercise 21.6: Tabu search 3"

    A TSP instance with $6$ cities and the symmetric distances

    $$
    \begin{array}{c|cccccc}
    \hline {d_{ij}} & {1} & {2} & {3} & {4} & {5} & {6} \\
    \hline {1} & --- & {5} & {1} & {7} & {7} & {4} \\
    {2} & {5} & --- & {4} & {5} & {2} & {1} \\
    {3} & {1} & {4} & --- & {6} & {6} & {4} \\
    {4} & {7} & {5} & {6} & --- & {7} & {6} \\
    {5} & {7} & {2} & {6} & {7} & --- & {2} \\
    {6} & {4} & {1} & {4} & {6} & {2} & --- \\
    \hline
    \end{array}
    $$

    Tabu search with the 2-opt neighbourhood: at every iteration all the moves $(i,j)$ are evaluated, and the best non-tabu move is performed even if it is not improving (ties: first move in lexicographic order). The two edges removed by a move may not be added back for $tenure=2$ iterations, unless the new tour is shorter than the best one.

    **Questions**

    1. Compute the nearest neighbour tour $\pi$ from city $1$ and show that it is a local optimum for 2-opt.

    2. Perform the first iteration of tabu search from $\pi$: which move is chosen, and which edges become tabu?

    3. Perform the second and the third iteration.

    4. Compare the best tour found with the local optimum of the first question.

??? soluzione "Solution"

    1. $\pi=(1,3,2,6,5,4)$, of length $22$; the deltas of its neighbours are $(1,3)$: $+7$, $(1,4)$: $+7$, $(1,5)$: $+5$, $(2,4)$: $+0$, $(2,5)$: $+0$, $(2,6)$: $+0$, $(3,5)$: $+0$, $(3,6)$: $+1$, $(4,6)$: $+4$: none is negative, so $\pi$ is a 2-opt local optimum.

    2. From $(1,3,2,6,5,4)$ the neighbours have $\delta$: $(1,3)$: $+7$, $(1,4)$: $+7$, $(1,5)$: $+5$, $(2,4)$: $+0$, $(2,5)$: $+0$, $(2,6)$: $+0$, $(3,5)$: $+0$, $(3,6)$: $+1$, $(4,6)$: $+4$. The best non-tabu move is $(2,4)$ with $\delta=0$: it removes the edges $(3,2)$, $(6,5)$, which become tabu until iteration $3$; new tour $(1,3,6,2,5,4)$ of length $22$. The search moves although no move improves: it leaves the local optimum through a tour of the same length.

    3. - From $(1,3,6,2,5,4)$ the neighbours have $\delta$: $(1,3)$: $+6$, $(1,4)$: $+8$, $(1,5)$: $+5$, $(2,4)$: $+0$, $(2,5)$: $+1$, $(2,6)$: $-1$, $(3,5)$: $-1$, $(3,6)$: $+3$, $(4,6)$: $+3$. The best non-tabu move is $(2,6)$ with $\delta=-1$: it removes the edges $(3,6)$, $(4,1)$, which become tabu until iteration $4$; new tour $(1,3,4,5,2,6)$ of length $21$.

        - From $(1,3,4,5,2,6)$ the neighbours have $\delta$: $(1,3)$: $+5$, $(1,4)$: $+8$, $(1,5)$: $+7$, $(2,4)$: $+3$, $(2,5)$: $+3$, $(2,6)$: $+1$, $(3,5)$: $-1$, $(3,6)$: $+2$, $(4,6)$: $+1$. The best non-tabu move is $(3,5)$ with $\delta=-1$: it removes the edges $(4,5)$, $(2,6)$, which become tabu until iteration $5$; new tour $(1,3,4,2,5,6)$ of length $20$.

    4. After $3$ iterations the best tour is $(1,3,4,2,5,6)$, of length $20$: it is the optimal tour (by enumeration of the $60$ tours), better than the local optimum $22$ where the 2-opt local search stops.

## Iterated local search and VNS

<a id="esercizio-21-7"></a>

!!! esercizio "Exercise 21.7: Iterated local search and VNS 1"

    A TSP instance with $6$ cities and the symmetric distances

    $$
    \begin{array}{c|cccccc}
    \hline {d_{ij}} & {1} & {2} & {3} & {4} & {5} & {6} \\
    \hline {1} & --- & {5} & {1} & {7} & {7} & {4} \\
    {2} & {5} & --- & {4} & {5} & {2} & {1} \\
    {3} & {1} & {4} & --- & {6} & {6} & {4} \\
    {4} & {7} & {5} & {6} & --- & {7} & {6} \\
    {5} & {7} & {2} & {6} & {7} & --- & {2} \\
    {6} & {4} & {1} & {4} & {6} & {2} & --- \\
    \hline
    \end{array}
    $$

    The 2-opt local optimum is the nearest neighbour tour $(1,3,2,6,5,4)$ of length $22$. Iterated local search uses the double-bridge kick with cut positions $p_1=1+\lfloor u_1(n-3)\rfloor$, $p_2=p_1+1+\lfloor u_2(n-2-p_1)\rfloor$, $p_3=p_2+1+\lfloor u_3(n-1-p_2)\rfloor$ ($A=\pi_1..\pi_{p_1}$, $B=\pi_{p_1+1}..\pi_{p_2}$, $C=\pi_{p_2+1}..\pi_{p_3}$, $D=\pi_{p_3+1}..\pi_n$, new tour $A\,C\,B\,D$), the 2-opt local search with best improvement, and accepts a new local optimum if it is shorter. The random numbers are $0.13$, $0.76$, $0.46$.

    **Questions**

    1. Compute the cut positions $p_1,p_2,p_3$ and the four segments of the tour.

    2. Build the perturbed tour, list the edges removed and added, and compute its length.

    3. Apply the 2-opt local search (best improvement) to the perturbed tour.

    4. Is the new local optimum accepted? Compare it with the optimal tour, of length $20$.

??? soluzione "Solution"

    1. $p_1=1+\lfloor 0.13\cdot 3\rfloor=1$, $p_2=1+1+\lfloor 0.76\cdot 3\rfloor=4$, $p_3=4+1+\lfloor 0.46\cdot 1\rfloor=5$. Segments $A=(1)$, $B=(3,2,6)$, $C=(5)$, $D=(4)$.

    2. The perturbed tour $A\,C\,B\,D$ is $(1,5,3,2,6,4)$; it removes the edges $(4,5)$, $(5,6)$, $(1,3)$ and adds $(1,5)$, $(4,6)$, $(3,5)$; its length is $31$.

    3. From $(1,5,3,2,6,4)$: the best move is $(1,3)$ with $\delta=-8$, giving $(1,3,5,2,6,4)$ of length $23$; the best move is $(2,4)$ with $\delta=-1$, giving $(1,3,2,5,6,4)$ of length $22$; the best move is $(2,5)$ with $\delta=-1$, giving $(1,3,6,5,2,4)$ of length $21$; the best move is $(2,6)$ with $\delta=-1$, giving $(1,3,4,2,5,6)$ of length $20$; then no move improves the tour. The new local optimum is $(1,3,4,2,5,6)$, of length $20$.

    4. Yes: $20<22$, the new local optimum replaces the current one. Its length is $20$: it is the optimal tour. One kick and one local search have escaped from the local optimum where the 2-opt local search alone stops.

<a id="esercizio-21-8"></a>

!!! esercizio "Exercise 21.8: Iterated local search and VNS 2"

    A TSP instance with $6$ cities and the symmetric distances

    $$
    \begin{array}{c|cccccc}
    \hline {d_{ij}} & {1} & {2} & {3} & {4} & {5} & {6} \\
    \hline {1} & --- & {5} & {1} & {7} & {7} & {4} \\
    {2} & {5} & --- & {4} & {5} & {2} & {1} \\
    {3} & {1} & {4} & --- & {6} & {6} & {4} \\
    {4} & {7} & {5} & {6} & --- & {7} & {6} \\
    {5} & {7} & {2} & {6} & {7} & --- & {2} \\
    {6} & {4} & {1} & {4} & {6} & {2} & --- \\
    \hline
    \end{array}
    $$

    The 2-opt local optimum is the nearest neighbour tour $(1,3,2,6,5,4)$ of length $22$. Iterated local search uses the double-bridge kick with cut positions $p_1=1+\lfloor u_1(n-3)\rfloor$, $p_2=p_1+1+\lfloor u_2(n-2-p_1)\rfloor$, $p_3=p_2+1+\lfloor u_3(n-1-p_2)\rfloor$ ($A=\pi_1..\pi_{p_1}$, $B=\pi_{p_1+1}..\pi_{p_2}$, $C=\pi_{p_2+1}..\pi_{p_3}$, $D=\pi_{p_3+1}..\pi_n$, new tour $A\,C\,B\,D$), the 2-opt local search with best improvement, and accepts a new local optimum if it is shorter. The random numbers are $0.16$, $0.13$, $0.01$.

    **Questions**

    1. Compute the cut positions $p_1,p_2,p_3$ and the four segments of the tour.

    2. Build the perturbed tour, list the edges removed and added, and compute its length.

    3. Apply the 2-opt local search (best improvement) to the perturbed tour.

    4. Is the new local optimum accepted? What would happen with the acceptance criterion “always accept”?

??? soluzione "Solution"

    1. $p_1=1+\lfloor 0.16\cdot 3\rfloor=1$, $p_2=1+1+\lfloor 0.13\cdot 3\rfloor=2$, $p_3=2+1+\lfloor 0.01\cdot 3\rfloor=3$. Segments $A=(1)$, $B=(3)$, $C=(2)$, $D=(6,5,4)$.

    2. The perturbed tour $A\,C\,B\,D$ is $(1,2,3,6,5,4)$; it removes the edges $(1,3)$, $(2,6)$ and adds $(3,6)$, $(1,2)$; its length is $29$.

    3. From $(1,2,3,6,5,4)$: the best move is $(1,3)$ with $\delta=-7$, giving $(1,3,2,6,5,4)$ of length $22$; then no move improves the tour. The new local optimum is $(1,3,2,6,5,4)$, of length $22$.

    4. The new local optimum is the starting tour itself, of length $22$: it is not shorter, and the current solution does not change. The kick was too weak: with segments $B$ and $C$ of a single city it changes only two edges, which is a 2-opt move, and the 2-opt local search undoes it at once. With “always accept” nothing would change either; the strength of the kick, not the acceptance criterion, is the problem here.

<a id="esercizio-21-9"></a>

!!! esercizio "Exercise 21.9: Iterated local search and VNS 3"

    $m=3$ identical machines and $7$ jobs with processing times $t=(4,4,3,3,2,2,2)$. Variable neighbourhood search starts from the LPT solution, uses $k_{\max}=3$, shakes with $k$ random moves (each move: job $j=1+\lfloor 7u\rfloor$ goes to the $g$-th machine different from its own, $g=1+\lfloor 2u\rfloor$, with two consecutive random numbers), uses as local search the move descent with best improvement in the lexicographic order $(C_{\max},\sum_hL_h^2)$, and stops when $C_{\max}=LB$. The random numbers are $0.26$, $0.51$, $0.92$, $0.07$, $0.44$, $0.09$, $0.36$, $0.36$, $0.87$, $0.77$, $0.04$, $0.66$.

    **Questions**

    1. Compute the LPT solution and the lower bound $LB$, and show that LPT is a local optimum for the move neighbourhood.

    2. Explain why the swap of two jobs belongs to the neighbourhood $N_2$ used by the shaking.

    3. Apply VNS, showing for each iteration the shaking, the local search and the decision.

    4. Is the final solution optimal? Which value of $k$ was needed?

??? soluzione "Solution"

    1. LPT assigns the jobs by non-increasing time to the least loaded machine: loads $(8,6,6)$, $J_1=\{1,5,7\}$, $J_2=\{2,6\}$, $J_3=\{3,4\}$, $C_{\max}=8$; $LB=\max\{4,\lceil 20/3\rceil\}=7$. A job moved to a machine of load $6$ brings it to at least $8$, and a job moved to $M_1$ brings it above $8$: no move decreases the makespan, and the moves with makespan $8$ (for instance job $5$ from $M_1$ to $M_2$, loads $(6,8,6)$) have $\sum_hL_h^2\ge 136$, the value of LPT. LPT is a local optimum.

    2. Exchanging job $j$ on $M_a$ with job $j'$ on $M_b$ is the same as two moves: $j$ to $M_b$ and $j'$ to $M_a$. So every swap neighbour is in $N_2$, and the shaking with $k=2$ can produce it.

    3. - Iteration $1$, $k=1$: shaking job $2$: $M_2\to M_3$, loads $(8,2,10)$; MoveDescent: job $2$ from $M_3$ to $M_2$, loads $(8,6,6)$; result loads $(8,6,6)$, not better ($k:=k+1$).

        - Iteration $2$, $k=2$: shaking job $7$: $M_1\to M_2$; job $4$: $M_3\to M_1$, loads $(9,8,3)$; MoveDescent: job $4$ from $M_1$ to $M_3$, loads $(6,8,6)$; result loads $(6,8,6)$, not better ($k:=k+1$).

        - Iteration $3$, $k=3$: shaking job $3$: $M_3\to M_1$; job $7$: $M_1\to M_3$; job $1$: $M_1\to M_3$, loads $(5,6,9)$; MoveDescent: job $7$ from $M_3$ to $M_1$, loads $(7,6,7)$; result loads $(7,6,7)$, better, accepted ($k:=1$).

    4. The final makespan is $7=LB$: the solution is optimal. The neighbourhoods $N_1$ and $N_2$ failed, and $N_3$ (three random moves) was needed.

## GRASP

<a id="esercizio-21-10"></a>

!!! esercizio "Exercise 21.10: GRASP 1"

    A knapsack of capacity $c=16$ and $5$ items:

    $$
    \begin{array}{l|ccccc}
    \hline  & {i=1} & {i=2} & {i=3} & {i=4} & {i=5} \\
    \hline {p_i} & {11} & {5} & {18} & {8} & {8} \\
    {w_i} & {5} & {3} & {11} & {6} & {7} \\
    \hline
    \end{array}
    $$

    GRASP with $\alpha=0.5$: the RCL contains the items that fit with efficiency at least $e_{\max}-\alpha(e_{\max}-e_{\min})$, sorted by non-increasing efficiency, and the item in position $1+\lfloor u|RCL|\rfloor$ is chosen; the local search uses feasible flips and swaps with best improvement. The random numbers are $0.39$, $0.27$, $0.38$, $0.60$, $0.66$.

    **Questions**

    1. Compute the greedy solution by efficiency and the solution of the local search started from it.

    2. Perform the first iteration of GRASP: construction and local search.

    3. Perform the second iteration.

    4. Compare the best solution of GRASP with the optimum, and explain the role of the randomization.

??? soluzione "Solution"

    1. Greedy gives $(1,1,0,1,0)$ of profit $24$ (items $1,2,4$, weight $14$); the local search finds no improving flip or swap: it stops at $24$.

    2. - Iteration $1$: $rc=16$, candidates $\{1,2,3,4,5\}$, threshold $1.6714$, $RCL=(1)$, $u=0.39$ chooses position $1$: item $1$; $rc=11$, candidates $\{2,3,4,5\}$, threshold $1.4048$, $RCL=(2,3)$, $u=0.27$ chooses position $1$: item $2$; $rc=8$, candidates $\{4,5\}$, threshold $1.2381$, $RCL=(4)$, $u=0.38$ chooses position $1$: item $4$. Construction: $(1,1,0,1,0)$, profit $24$. Local search: no improving move. Result: profit $24$.

    3. - Iteration $2$: $rc=16$, candidates $\{1,2,3,4,5\}$, threshold $1.6714$, $RCL=(1)$, $u=0.60$ chooses position $1$: item $1$; $rc=11$, candidates $\{2,3,4,5\}$, threshold $1.4048$, $RCL=(2,3)$, $u=0.66$ chooses position $2$: item $3$. Construction: $(1,0,1,0,0)$, profit $29$. Local search: no improving move. Result: profit $29$.

    4. The best solution is $(1,0,1,0,0)$ of profit $29$, which is optimal (by enumeration: items $\{1,3\}$ fill the capacity exactly). The deterministic greedy algorithm never selects item $3$, because after items $1$ and $2$ it does not fit; the randomized construction sometimes chooses item $3$ before item $2$, and reaches a different valley.

<a id="esercizio-21-11"></a>

!!! esercizio "Exercise 21.11: GRASP 2"

    A TSP instance with $6$ cities and the symmetric distances

    $$
    \begin{array}{c|cccccc}
    \hline {d_{ij}} & {1} & {2} & {3} & {4} & {5} & {6} \\
    \hline {1} & --- & {5} & {1} & {7} & {7} & {4} \\
    {2} & {5} & --- & {4} & {5} & {2} & {1} \\
    {3} & {1} & {4} & --- & {6} & {6} & {4} \\
    {4} & {7} & {5} & {6} & --- & {7} & {6} \\
    {5} & {7} & {2} & {6} & {7} & --- & {2} \\
    {6} & {4} & {1} & {4} & {6} & {2} & --- \\
    \hline
    \end{array}
    $$

    GRASP for the TSP: randomized nearest neighbour from city $1$ with $\alpha=0.5$ (the RCL contains the unvisited cities $j$ with $d_{\ell j}\le d_{\min}+\alpha(d_{\max}-d_{\min})$, sorted by distance, ties by index; position $1+\lfloor u|RCL|\rfloor$), followed by the 2-opt local search with best improvement. The random numbers are $0.45$, $0.31$, $0.05$, $0.86$, $0.41$, $0.52$, $0.47$, $0.47$, $0.28$, $0.22$.

    **Questions**

    1. Perform the first iteration of GRASP.

    2. Perform the second iteration.

    3. Which is the best tour found? Compare it with the nearest neighbour tour.

    4. What would GRASP give with $\alpha=0$, for any number of iterations?

??? soluzione "Solution"

    1. Construction: from $1$: threshold $4$, $RCL=(3,6)$, $u=0.45$: city $3$; from $3$: threshold $5$, $RCL=(2,6)$, $u=0.31$: city $2$; from $2$: threshold $3$, $RCL=(6,5)$, $u=0.05$: city $6$; from $6$: threshold $4$, $RCL=(5)$, $u=0.86$: city $5$; from $5$: threshold $7$, $RCL=(4)$, $u=0.41$: city $4$. Tour $(1,3,2,6,5,4)$, length $22$. Local search: no 2-opt move improves the tour: it is already a 2-opt local optimum. Result: length $22$.

    2. Construction: from $1$: threshold $4$, $RCL=(3,6)$, $u=0.52$: city $6$; from $6$: threshold $3.5$, $RCL=(2,5)$, $u=0.47$: city $2$; from $2$: threshold $3.5$, $RCL=(5)$, $u=0.47$: city $5$; from $5$: threshold $6.5$, $RCL=(3)$, $u=0.28$: city $3$; from $3$: threshold $6$, $RCL=(4)$, $u=0.22$: city $4$. Tour $(1,6,2,5,3,4)$, length $26$. Local search: the best move is $(4,6)$ with $\delta=-5$, giving $(1,6,2,5,4,3)$ of length $21$; the best move is $(2,4)$ with $\delta=-1$, giving $(1,6,5,2,4,3)$ of length $20$; then no move improves the tour. Result: length $20$.

    3. The best tour is $(1,6,5,2,4,3)$, of length $20$, the optimum. The nearest neighbour tour, $(1,3,2,6,5,4)$ of length $22$, is a 2-opt local optimum: the second construction, worse than nearest neighbour ($26$), leads the local search into a better valley.

    4. With $\alpha=0$ the RCL contains only the nearest cities: the construction is the nearest neighbour heuristic (up to ties), every iteration builds $(1,3,2,6,5,4)$, and the local search stops at $22$.

<a id="esercizio-21-12"></a>

!!! esercizio "Exercise 21.12: GRASP 3"

    A knapsack of capacity $c=16$ and $5$ items:

    $$
    \begin{array}{l|ccccc}
    \hline  & {i=1} & {i=2} & {i=3} & {i=4} & {i=5} \\
    \hline {p_i} & {11} & {5} & {18} & {8} & {8} \\
    {w_i} & {5} & {3} & {11} & {6} & {7} \\
    \hline
    \end{array}
    $$

    GRASP with $2$ iterations, RCL by efficiency threshold $e_{\max}-\alpha(e_{\max}-e_{\min})$ (position $1+\lfloor u|RCL|\rfloor$), local search with feasible flips and swaps (best improvement). The random numbers are $0.92$, $0.29$, $0.21$, $0.73$, $0.53$, $0.33$, $0.75$, $0.76$, $0.54$, $0.68$, $0.64$, $0.82$.

    **Questions**

    1. Which items form the RCL at the first step with $\alpha=0$, $\alpha=0.5$ and $\alpha=1$?

    2. Apply GRASP with $\alpha=0$.

    3. Apply GRASP with $\alpha=1$, using the random numbers from the beginning.

    4. Compare the two runs: which one diversifies, and which one intensifies?

??? soluzione "Solution"

    1. $e_{\max}=\frac{11}{5}=2.2$, $e_{\min}=\frac87\approx 1.14$. With $\alpha=0$: $RCL=(1)$; with $\alpha=0.5$ (threshold $1.6714$): $RCL=(1)$; with $\alpha=1$: all items, $RCL=(1,2,3,4,5)$.

    2. - Iteration $1$: $rc=16$, candidates $\{1,2,3,4,5\}$, threshold $2.2000$, $RCL=(1)$, $u=0.92$ chooses position $1$: item $1$; $rc=11$, candidates $\{2,3,4,5\}$, threshold $1.6667$, $RCL=(2)$, $u=0.29$ chooses position $1$: item $2$; $rc=8$, candidates $\{4,5\}$, threshold $1.3333$, $RCL=(4)$, $u=0.21$ chooses position $1$: item $4$. Construction: $(1,1,0,1,0)$, profit $24$. Local search: no improving move. Result: profit $24$.

        - Iteration $2$: $rc=16$, candidates $\{1,2,3,4,5\}$, threshold $2.2000$, $RCL=(1)$, $u=0.73$ chooses position $1$: item $1$; $rc=11$, candidates $\{2,3,4,5\}$, threshold $1.6667$, $RCL=(2)$, $u=0.53$ chooses position $1$: item $2$; $rc=8$, candidates $\{4,5\}$, threshold $1.3333$, $RCL=(4)$, $u=0.33$ chooses position $1$: item $4$. Construction: $(1,1,0,1,0)$, profit $24$. Local search: no improving move. Result: profit $24$.

        With $\alpha=0$ both iterations build the greedy solution and stop at $24$: the random numbers are irrelevant (each RCL has one element).

    3. - Iteration $1$: $rc=16$, candidates $\{1,2,3,4,5\}$, threshold $1.1429$, $RCL=(1,2,3,4,5)$, $u=0.92$ chooses position $5$: item $5$; $rc=9$, candidates $\{1,2,4\}$, threshold $1.3333$, $RCL=(1,2,4)$, $u=0.29$ chooses position $1$: item $1$; $rc=4$, candidates $\{2\}$, threshold $1.6667$, $RCL=(2)$, $u=0.21$ chooses position $1$: item $2$. Construction: $(1,1,0,0,1)$, profit $24$. Local search: no improving move. Result: profit $24$.

        - Iteration $2$: $rc=16$, candidates $\{1,2,3,4,5\}$, threshold $1.1429$, $RCL=(1,2,3,4,5)$, $u=0.73$ chooses position $4$: item $4$; $rc=10$, candidates $\{1,2,5\}$, threshold $1.1429$, $RCL=(1,2,5)$, $u=0.53$ chooses position $2$: item $2$; $rc=7$, candidates $\{1,5\}$, threshold $1.1429$, $RCL=(1,5)$, $u=0.33$ chooses position $1$: item $1$. Construction: $(1,1,0,1,0)$, profit $24$. Local search: no improving move. Result: profit $24$.

        Best profit: $24$.

    4. With $\alpha=0$ GRASP is a single local search from the greedy solution: pure intensification, always $24$. With $\alpha=1$ the constructions are random and different (diversification), and the local search intensifies around each of them; here the best result is $24$, while the optimum is $29$.

## Large neighbourhood search

<a id="esercizio-21-13"></a>

!!! esercizio "Exercise 21.13: Large neighbourhood search 1"

    Bins of capacity $c=10$ and $8$ items with weights $w=(2,7,5,5,3,2,6,6)$. LNS empties the least loaded bin (ties: smallest index) and one other bin chosen at random (the bin in position $1+\lfloor u\cdot(nb-1)\rfloor$ among the others), repacks the removed items by FFD into new bins, keeps the other bins, and accepts the new packing if it uses fewer bins, or as many bins and a sum of squared loads not smaller. It stops when $nb$ reaches $\lceil\sum_iw_i/c\rceil$. The random numbers are $0.13$, $0.76$, $0.46$.

    **Questions**

    1. Compute the First Fit packing and the lower bound $\lceil\sum_iw_i/c\rceil$.

    2. Perform the first iteration of LNS.

    3. Continue until the search stops.

    4. Is the final packing optimal? Why are packings with the same number of bins accepted?

??? soluzione "Solution"

    1. First Fit gives $P_{1}=\{1,2\}$, $P_{2}=\{3,4\}$, $P_{3}=\{5,6\}$, $P_{4}=\{7\}$, $P_{5}=\{8\}$: $5$ bins. $\sum_iw_i=36$, so at least $\lceil 36/10\rceil=4$ bins are needed.

    2. - Iteration $1$: loads $(9,10,5,6,6)$; emptied bins $P_{3},P_{1}$; removed items $\{1,2,5,6\}$; FFD repacking: $P_{1}=\{3,4\}$, $P_{2}=\{7\}$, $P_{3}=\{8\}$, $P_{4}=\{2,5\}$, $P_{5}=\{1,6\}$; $nb'=5$, $\sum_b(\cdot)^2$: $278\to 288$: accepted.

    3. - Iteration $2$: loads $(10,6,6,10,4)$; emptied bins $P_{5},P_{4}$; removed items $\{1,2,5,6\}$; FFD repacking: $P_{1}=\{3,4\}$, $P_{2}=\{7\}$, $P_{3}=\{8\}$, $P_{4}=\{2,5\}$, $P_{5}=\{1,6\}$; $nb'=5$, $\sum_b(\cdot)^2$: $288\to 288$: accepted.

        - Iteration $3$: loads $(10,6,6,10,4)$; emptied bins $P_{5},P_{2}$; removed items $\{1,6,7\}$; FFD repacking: $P_{1}=\{3,4\}$, $P_{2}=\{8\}$, $P_{3}=\{2,5\}$, $P_{4}=\{1,6,7\}$; $nb'=4$, $\sum_b(\cdot)^2$: $288\to 336$: accepted.

    4. The final packing $P_{1}=\{3,4\}$, $P_{2}=\{8\}$, $P_{3}=\{2,5\}$, $P_{4}=\{1,6,7\}$ uses $4$ bins, equal to the lower bound: it is optimal. Accepting packings with the same number of bins and a larger (or equal) sum of squared loads lets the search move on the plateau of the flat objective, toward packings with fuller bins and one almost empty bin, which is easier to eliminate.

<a id="esercizio-21-14"></a>

!!! esercizio "Exercise 21.14: Large neighbourhood search 2"

    Bins of capacity $c=10$ and $8$ items with weights $w=(3,3,6,5,4,4,2,3)$. LNS starts from the FFD packing, empties the least loaded bin and two other bins at random ($q=3$; each one is the bin in position $1+\lfloor uK\rfloor$ among the $K$ bins not yet chosen), and repacks the removed items into new bins, either by FFD or optimally. The random numbers are $0.66$, $0.78$.

    **Questions**

    1. Compute the FFD packing and the lower bound.

    2. Perform one iteration of LNS with the FFD repair.

    3. Perform the same iteration with the exact repair: find the minimum number of bins for the removed items.

    4. Compare the two repairs. Can LNS with FFD repair improve an FFD packing in this way?

??? soluzione "Solution"

    1. FFD (weights $6,5,4,4,3,3,3,2$) gives $P_{1}=\{3,5\}$, $P_{2}=\{4,6\}$, $P_{3}=\{1,2,8\}$, $P_{4}=\{7\}$: $4$ bins; $\lceil 30/10\rceil=3$.

    2. - Iteration $1$: loads $(10,9,9,2)$; emptied bins $P_{4},P_{2},P_{3}$; removed items $\{1,2,4,6,7,8\}$; FFD repacking: $P_{1}=\{3,5\}$, $P_{2}=\{4,6\}$, $P_{3}=\{1,2,8\}$, $P_{4}=\{7\}$; $nb'=4$, $\sum_b(\cdot)^2$: $266\to 266$: accepted.

    3. The removed items $\{1,2,4,6,7,8\}$ have total weight $20>10$, so at least $2$ bins are needed, and $2$ bins suffice:

        - Iteration $1$: loads $(10,9,9,2)$; emptied bins $P_{4},P_{2},P_{3}$; removed items $\{1,2,4,6,7,8\}$; exact repacking: $P_{1}=\{3,5\}$, $P_{2}=\{1,4,7\}$, $P_{3}=\{2,6,8\}$; $nb'=3$, $\sum_b(\cdot)^2$: $266\to 300$: accepted.

    4. The FFD repair repacks the removed items as FFD does, and finds $3$ bins for them; the exact repair finds $2$, and the packing becomes optimal ($3$ bins). Since the removed items are repacked by the same rule that built the packing, LNS with FFD repair tends to rebuild the same bins: with $200$ iterations ($seed=1$) it never goes below $4$. The power of a large neighbourhood depends on the method that explores it.

<a id="esercizio-21-15"></a>

!!! esercizio "Exercise 21.15: Large neighbourhood search 3"

    A TSP instance with $6$ cities and the symmetric distances

    $$
    \begin{array}{c|cccccc}
    \hline {d_{ij}} & {1} & {2} & {3} & {4} & {5} & {6} \\
    \hline {1} & --- & {5} & {1} & {7} & {7} & {4} \\
    {2} & {5} & --- & {4} & {5} & {2} & {1} \\
    {3} & {1} & {4} & --- & {6} & {6} & {4} \\
    {4} & {7} & {5} & {6} & --- & {7} & {6} \\
    {5} & {7} & {2} & {6} & {7} & --- & {2} \\
    {6} & {4} & {1} & {4} & {6} & {2} & --- \\
    \hline
    \end{array}
    $$

    LNS starts from the nearest neighbour tour $(1,3,2,6,5,4)$ (length $22$), removes $q=2$ cities at random (the city in position $2+\lfloor u(|\pi|-1)\rfloor$ of the current partial tour, so that city $1$ is never removed), reinserts them in the order of removal by cheapest insertion (ties: first position), and accepts the new tour if it is shorter. The random numbers are $0.68$, $0.16$, $0.84$, $0.92$.

    **Questions**

    1. Perform the first iteration (destroy and repair) and decide whether the new tour is accepted.

    2. Perform the second iteration.

    3. Compute all the insertion costs of the first removed city in the second iteration.

    4. Is the final tour optimal? How many edges of the starting tour have been changed?

??? soluzione "Solution"

    1. Removed cities: $5, 3$; partial tour $(1,2,6,4)$; insertions: city $5$ between $2$ and $6$ (cost $3$); city $3$ between $1$ and $2$ (cost $0$); new tour $(1,3,2,5,6,4)$ of length $22$: rejected.

    2. Removed cities: $4, 5$; partial tour $(1,3,2,6)$; insertions: city $4$ between $3$ and $2$ (cost $7$); city $5$ between $2$ and $6$ (cost $3$); new tour $(1,3,4,2,5,6)$ of length $20$: accepted.

    3. Inserting city $4$ into $(1,3,2,6)$: $(1,3)$: $12$, $(3,2)$: $7$, $(2,6)$: $10$, $(6,1)$: $9$; the minimum cost is $7$, between cities $3$ and $2$.

    4. The final tour $(1,3,4,2,5,6)$ has length $20$: it is the optimal tour. It shares $2$ edges with the starting tour: one destroy-and-repair step has changed $4$ edges, a move that 2-opt cannot perform in one step.

## Genetic algorithms

<a id="esercizio-21-16"></a>

!!! esercizio "Exercise 21.16: Genetic algorithms 1"

    A knapsack of capacity $c=16$ and $5$ items:

    $$
    \begin{array}{l|ccccc}
    \hline  & {i=1} & {i=2} & {i=3} & {i=4} & {i=5} \\
    \hline {p_i} & {11} & {5} & {18} & {8} & {8} \\
    {w_i} & {5} & {3} & {11} & {6} & {7} \\
    \hline
    \end{array}
    $$

    Steady-state genetic algorithm with population $pop[1]=(0,0,0,1,1)$, $pop[2]=(0,1,0,0,1)$, $pop[3]=(0,1,0,1,1)$, $pop[4]=(1,1,0,1,0)$; binary tournament (individuals $1+\lfloor 4u\rfloor$, the fitter wins, ties: the first), one-point crossover with cut $1+\lfloor 4u\rfloor$ (genes $1..cut$ from $a$, the others from $b$), mutation of each gene if $u<p_m=0.2$, repair by removing the selected item of minimum efficiency until feasible; the child replaces the worst individual (ties: last index) if it is better and not already present. Each iteration uses $10$ random numbers; they are $0.58$, $0.07$, $0.50$, $0.39$, $0.63$, $0.56$, $0.15$, $0.15$, $0.22$, $0.60$, $0.23$, $0.97$, $0.41$, $0.64$, $0.36$, $0.05$, $0.09$, $0.60$, $0.80$, $0.01$.

    **Questions**

    1. Compute the fitness of the initial population. Which items never appear in it?

    2. Perform the first iteration of the genetic algorithm.

    3. Perform the second iteration.

    4. Can crossover alone ever produce a solution containing item $3$? Which operator makes it possible?

??? soluzione "Solution"

    1. Fitness: $16$, $13$, $21$, $24$ (weights $13$, $10$, $16$, $14$). Item $3$ is in no individual.

    2. - Iteration $1$: Tournament $(3,1)$ selects $a=3$, tournament $(3,2)$ selects $b=3$; cut $=3$: child $(0,1,0,1,1)$; mutation of genes $\{2,3\}$: $(0,0,1,1,1)$; repair removes items $\{5,4\}$: $(0,0,1,0,0)$, profit $18$; worst individual $2$; inserted. Population fitness: $(16,18,21,24)$.

    3. - Iteration $2$: Tournament $(1,4)$ selects $a=4$, tournament $(2,3)$ selects $b=3$; cut $=2$: child $(1,1,0,1,1)$; mutation of genes $\{1,2,5\}$: $(0,0,0,1,0)$; feasible, profit $8$; worst individual $1$; not inserted. Population fitness: $(16,18,21,24)$.

    4. No: crossover copies genes from the parents, and gene $3$ is $0$ in every individual. Only mutation can set it to $1$, as in iteration $1$; but the child is infeasible, and the repair removes the least efficient items, not item $3$, so the result is the solution $(0,0,1,0,0)$ of profit 18. The best individual after two iterations has profit $24<29$.

<a id="esercizio-21-17"></a>

!!! esercizio "Exercise 21.17: Genetic algorithms 2"

    A knapsack of capacity $c=16$ and $5$ items:

    $$
    \begin{array}{l|ccccc}
    \hline  & {i=1} & {i=2} & {i=3} & {i=4} & {i=5} \\
    \hline {p_i} & {11} & {5} & {18} & {8} & {8} \\
    {w_i} & {5} & {3} & {11} & {6} & {7} \\
    \hline
    \end{array}
    $$

    Steady-state genetic algorithm with population $pop[1]=(0,0,0,1,1)$, $pop[2]=(0,1,0,0,1)$, $pop[3]=(0,1,0,1,1)$, $pop[4]=(1,1,0,1,0)$; binary tournament (individuals $1+\lfloor 4u\rfloor$, the fitter wins, ties: the first), one-point crossover with cut $1+\lfloor 4u\rfloor$ (genes $1..cut$ from $a$, the others from $b$), mutation of each gene if $u<p_m=0.2$, repair by removing the selected item of minimum efficiency until feasible; the child replaces the worst individual (ties: last index) if it is better and not already present. Each iteration uses $10$ random numbers; they are $0.58$, $0.07$, $0.50$, $0.39$, $0.63$, $0.56$, $0.15$, $0.15$, $0.22$, $0.60$, $0.23$, $0.97$, $0.41$, $0.64$, $0.36$, $0.05$, $0.09$, $0.60$, $0.80$, $0.01$.

    **Questions**

    1. Apply the local search (feasible flips and swaps, best improvement) to each individual of the initial population, as the memetic algorithm does.

    2. Perform the first iteration of the memetic algorithm with the same random numbers.

    3. Perform the second iteration.

    4. Compare with the genetic algorithm without local search, which after the same two iterations has best profit $24$.

??? soluzione "Solution"

    1. After the local search the population is $(1,1,0,0,1)$ (24), $(1,1,0,0,1)$ (24), $(1,1,0,0,1)$ (24), $(1,1,0,1,0)$ (24).

    2. - Iteration $1$: Tournament $(3,1)$ selects $a=3$, tournament $(3,2)$ selects $b=3$; cut $=3$: child $(1,1,0,0,1)$; mutation of genes $\{2,3\}$: $(1,0,1,0,1)$; repair removes items $\{5\}$: $(1,0,1,0,0)$; local search: $(1,0,1,0,0)$, profit $29$; worst individual $4$; inserted. Population fitness: $(24,24,24,29)$.

    3. - Iteration $2$: Tournament $(1,4)$ selects $a=4$, tournament $(2,3)$ selects $b=2$; cut $=2$: child $(1,0,0,0,1)$; mutation of genes $\{1,2,5\}$: $(0,1,0,0,0)$; feasible; local search: $(1,0,1,0,0)$, profit $29$; worst individual $3$; not inserted. Population fitness: $(24,24,24,29)$.

    4. The memetic algorithm reaches the optimum $29$ (items $\{1,3\}$) in the first iteration: the mutation brings item $3$ into the child, and the local search turns the repaired child into a local optimum containing item $3$. Without local search the same child is only repaired, and its value is poor. The local search adds intensification to the diversification of crossover and mutation.
