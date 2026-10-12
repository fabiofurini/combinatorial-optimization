---
title: "Exercises · MIP heuristics for the classical problems"
---

# Exercises · MIP heuristics for the classical problems

<div class="info-capitolo" markdown>

**Exercises · Chapter 22** · each solution opens with a click · [:material-book-open-variant: Chapter 22](../heuristic-algorithms/mip-heuristics-classical.md)

</div>

## Rounding and diving

<a id="esercizio-22-1"></a>

!!! esercizio "Exercise 22.1: Rounding and diving on the KP (KP1)"

    We consider a knapsack of capacity $c=16$ and a set $\mathscr{I}=\{1,2,3,4,5\}$ of $5$ items, with the following profits and weights:

    $$
    \begin{array}{l|ccccc}
    \hline  & {i=1} & {i=2} & {i=3} & {i=4} & {i=5} \\[1ex]
    \hline {p_i} & {11} & {15} & {18} & {14} & {10} \\[1ex]
    {w_i} & {3} & {5} & {7} & {10} & {9} \\
    \hline
    \end{array}
    $$

    **Questions**

    1. Verify that the items are sorted by non-increasing efficiency, and compute the optimal solution $x^*$ of the LP relaxation of the KP model and its value $z_{LP}(I)$.

    2. Apply rounding: round $x^*$ to the nearest integer point $\tilde x$, check whether $\tilde x$ is feasible, and give its profit.

    3. Apply fractional diving: at each step solve the LP relaxation with the variables fixed so far, fix the least fractional variable to its nearest integer, and repeat until the LP solution is integer.

    4. The dive is a path of the branch-and-bound tree. Compute the value of the LP relaxation of the branches that the dive does not visit, and use them to decide whether the solution of the dive is optimal.

??? soluzione "Solution"

    1. The efficiencies are

        $$
        \frac{11}{3}\approx 3.67,\quad \frac{15}{5}=3,\quad \frac{18}{7}\approx 2.57,\quad \frac{14}{10}=1.4,\quad
        \frac{10}{9}\approx 1.11,
        $$

        non-increasing. The LP takes items $1,2,3$ (weight $3+5+7=15$), and the residual capacity $1$ is filled by the fraction $\frac{1}{10}$ of item $4$:

        $$
        x^*=\Big(1,1,1,\frac{1}{10},0\Big),\qquad z_{LP}(I)=11+15+18+\frac{14}{10}=\frac{227}{5}=45.4 .
        $$

    2. $\rnd{\frac1{10}}=0$, so $\tilde x=(1,1,1,0,0)$: weight $15\le16$, feasible, profit $44$.

    3. <strong>Step 1.</strong> The only fractional variable is $x_4=\frac1{10}$: fix $x_4:=0$.

        <strong>Step 2.</strong> Without item $4$, the LP takes items $1,2,3$ and the fraction $\frac19$ of item $5$: $x^*=\big(1,1,1,0,\frac19\big)$, of value $44+\frac{10}{9}=\frac{406}{9}\approx45.11$. Fix $x_5:=\rnd{\frac19}=0$.

        <strong>Step 3.</strong> The LP solution $(1,1,1,0,0)$, of value $44$, is integer: the dive returns $S=\{1,2,3\}$, of profit $44$.

    4. The dive does not visit the branches $x_4=1$ and ($x_4=0$, $x_5=1$).

        - $x_4=1$: item $4$ uses $10$ of the capacity, profit $14$; the LP adds item $1$ (residual $3$) and the fraction $\frac35$ of item $2$: value $14+11+9=34$.

        - $x_4=0$, $x_5=1$: item $5$ uses $9$, profit $10$; the LP adds item $1$ (residual $4$) and the fraction $\frac45$ of item $2$: value $10+11+12=33$.

        Both values are smaller than $44$: no solution in the abandoned branches is better than the solution of the dive, which is therefore <strong>optimal</strong>, $z(I)=44$. The dive, together with the bounds of the branches it leaves, is a complete branch-and-bound.

<a id="esercizio-22-2"></a>

!!! esercizio "Exercise 22.2: Rounding and diving on the KP (KP2)"

    We consider a knapsack of capacity $c=15$ and a set $\mathscr{I}=\{1,2,3,4,5\}$ of $5$ items, with the following profits and weights:

    $$
    \begin{array}{l|ccccc}
    \hline  & {i=1} & {i=2} & {i=3} & {i=4} & {i=5} \\[1ex]
    \hline {p_i} & {13} & {12} & {14} & {6} & {5} \\[1ex]
    {w_i} & {2} & {5} & {10} & {6} & {7} \\
    \hline
    \end{array}
    $$

    **Questions**

    1. Compute the optimal solution $x^*$ of the LP relaxation and its value $z_{LP}(I)$ (the items are sorted by non-increasing efficiency).

    2. Round $x^*$ to the nearest integer point: is it feasible? Round it down instead, and give the profit.

    3. Apply fractional diving, step by step, and give the profit of the solution it returns.

    4. Repeat the dive starting with the opposite decision at the first step, and continue with the rule of fractional diving. Then use the LP bounds of the branches to prove that the best of the two solutions is optimal.

??? soluzione "Solution"

    1. The efficiencies are $6.5$, $2.4$, $1.4$, $1$, $\frac57\approx0.71$. The LP takes items $1,2$ (weight $7$) and the fraction $\frac{8}{10}=\frac45$ of item $3$:

        $$
        x^*=\Big(1,1,\frac45,0,0\Big),\qquad z_{LP}(I)=13+12+14\cdot\frac45=\frac{181}{5}=36.2 .
        $$

    2. $\rnd{\frac45}=1$ gives $(1,1,1,0,0)$, of weight $17>15$: <strong>infeasible</strong>. Rounding down gives $(1,1,0,0,0)$, feasible (Observation on rounding down), of profit $25$.

    3. <strong>Step 1.</strong> Fix $x_3:=\rnd{\frac45}=1$. Item $3$ uses $10$; the LP takes item $1$ (residual $3$) and the fraction $\frac35$ of item $2$: $x^*=\big(1,\frac35,1,0,0\big)$, of value $14+13+\frac{36}{5}=\frac{171}{5}=34.2$.

        <strong>Step 2.</strong> Fix $x_2:=\rnd{\frac35}=1$. Items $2,3$ fill the knapsack ($5+10=15$): the LP solution is $(0,1,1,0,0)$, integer, of value $26$. The dive returns $S=\{2,3\}$, of profit $26$.

    4. <strong>Step 1'.</strong> Fix $x_3:=0$. The LP takes items $1,2,4$ (weight $13$) and the fraction $\frac27$ of item $5$: value $13+12+6+\frac{10}{7}=\frac{227}{7}\approx32.43$.

        <strong>Step 2'.</strong> Fix $x_5:=\rnd{\frac27}=0$: the LP solution $(1,1,0,1,0)$ is integer, of profit $31$.

        The four leaves of the tree are:

        <div class="tabella" markdown="0"><table>
        <tr>
        <th>branch</th>
        <th>LP value</th>
        <th></th>
        </tr>
        <tr>
        <td><span class="arithmatex">\(x_3=1\)</span>, <span class="arithmatex">\(x_2=1\)</span></td>
        <td><span class="arithmatex">\(26\)</span></td>
        <td>integer</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(x_3=1\)</span>, <span class="arithmatex">\(x_2=0\)</span></td>
        <td><span class="arithmatex">\(30\)</span></td>
        <td>items <span class="arithmatex">\(3,1\)</span> and half of item <span class="arithmatex">\(4\)</span>; <span class="arithmatex">\(30<31\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(x_3=0\)</span>, <span class="arithmatex">\(x_5=0\)</span></td>
        <td><span class="arithmatex">\(31\)</span></td>
        <td>integer</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(x_3=0\)</span>, <span class="arithmatex">\(x_5=1\)</span></td>
        <td><span class="arithmatex">\(31\)</span></td>
        <td>not better than <span class="arithmatex">\(31\)</span></td>
        </tr>
        </table></div>

        No branch can contain a solution of profit larger than $31$, so $\{1,2,4\}$ is <strong>optimal</strong>: $z(I)=31$. The first dive ($26$) failed because its first decision, the most natural one for the LP ($x_3=\frac45\to1$), was wrong.

## RINS, local branching and proximity search

<a id="esercizio-22-3"></a>

!!! esercizio "Exercise 22.3: RINS, local branching and proximity search on the KP (KP3)"

    We consider a knapsack of capacity $c=22$ and a set $\mathscr{I}=\{1,2,\dots,6\}$ of $6$ items, sorted by non-increasing efficiency, with the following profits and weights:

    $$
    \begin{array}{l|cccccc}
    \hline  & {i=1} & {i=2} & {i=3} & {i=4} & {i=5} & {i=6} \\[1ex]
    \hline {p_i} & {18} & {21} & {4} & {19} & {10} & {7} \\[1ex]
    {w_i} & {8} & {10} & {2} & {12} & {7} & {10} \\
    \hline
    \end{array}
    $$

    The incumbent is the solution of the greedy by <em>profit</em> $GR_p$.

    **Questions**

    1. Compute the incumbent $\tilde x$ and its profit, and the optimal solution $x^*$ of the LP relaxation.

    2. Apply RINS: list the variables fixed by RINS, write the sub-MIP with the cutoff constraint $\sum_i p_ix_i\ge f(\tilde x)+1$, and solve it by enumeration.

    3. Show that local branching with radius $k=2$ around $\tilde x$ finds no better solution.

    4. Apply proximity search with $\theta=1$ from $\tilde x$ (the optimal solution of this instance has profit $43$, as can be checked by enumerating the $2^6$ subsets). Compare the three methods.

??? soluzione "Solution"

    1. By non-increasing profit the order is $2$ ($21$), $4$ ($19$), $1$ ($18$), $5$, $6$, $3$. Item $2$ is taken ($rc=12$), item $4$ is taken ($rc=0$), nothing else fits: $\tilde x=(0,1,0,1,0,0)$, profit $40$. The LP takes items $1,2,3$ (weight $20$) and the fraction $\frac2{12}=\frac16$ of item $4$:

        $$
        x^*=\Big(1,1,1,\frac16,0,0\Big),\qquad z_{LP}(I)=43+\frac{19}{6}=\frac{277}{6}\approx46.17 .
        $$

    2. $x^*$ and $\tilde x$ agree on $x_2=1$, $x_5=0$, $x_6=0$, which are fixed; $x_1,x_3,x_4$ are free. The sub-MIP is

        \begin{align*}
        && \max ~~ 21+18\,x_1+4\,x_3+19\,x_4 & & \\[0.5ex]
        && \text{subject to} \quad 8\,x_1+2\,x_3+12\,x_4 &\le 12 & \\[0.5ex]
        && 21+18\,x_1+4\,x_3+19\,x_4 &\ge 41 & \\[0.5ex]
        && x_1 &\in\{0,1\} & \\[0.5ex]
        && x_3 &\in\{0,1\} & \\[0.5ex]
        && x_4 &\in\{0,1\} &
        \end{align*}

        If $x_4=1$ the capacity forces $x_1=x_3=0$ and the profit is $40<41$. If $x_4=0$, the best choice is $x_1=x_3=1$ (weight $10\le12$), of profit $43$. RINS returns $\{1,2,3\}$, of profit $43$: the <strong>optimum</strong>.

    3. The incumbent fills the knapsack ($10+12=22$), so adding an item is infeasible, and removing items decreases the profit. The solutions at distance $2$ that keep the weight feasible are the swaps (one item out, one in):

        <div class="tabella" markdown="0"><table>
        <tr>
        <th>out \ in</th>
        <th><span class="arithmatex">\(1\)</span></th>
        <th><span class="arithmatex">\(3\)</span></th>
        <th><span class="arithmatex">\(5\)</span></th>
        <th><span class="arithmatex">\(6\)</span></th>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(37\)</span></td>
        <td><span class="arithmatex">\(23\)</span></td>
        <td><span class="arithmatex">\(29\)</span></td>
        <td><span class="arithmatex">\(26\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(39\)</span></td>
        <td><span class="arithmatex">\(25\)</span></td>
        <td><span class="arithmatex">\(31\)</span></td>
        <td><span class="arithmatex">\(28\)</span></td>
        </tr>
        </table></div>

        all with profit smaller than $41$: the sub-MIP with $\Delta(x,\tilde x)\le 2$ and the cutoff is infeasible. The optimum $(1,1,1,0,0,0)$ differs from $\tilde x$ in $x_1$, $x_3$, $x_4$: it is at distance $3$.

    4. <strong>Iteration 1.</strong> No solution of profit at least $41$ is at distance $\le2$ (question 3). At distance $3$ there are two: $(1,0,1,1,0,0)$, of weight $22$ and profit $41$, and $(1,1,1,0,0,0)$, of profit $43$. The proximity sub-MIP may return either.

        - If it returns $(1,1,1,0,0,0)$, the next sub-MIP asks for profit at least $44$ and is infeasible: the method stops, and $43$ is proved optimal.

        - If it returns $(1,0,1,1,0,0)$, the next sub-MIP asks for profit at least $42$: the closest solution is $(1,1,1,0,0,0)$, at distance $2$ (item $4$ out, item $2$ in); then profit $44$ is infeasible.

        RINS (hard fixing) succeeds because the variables on which $x^*$ and $\tilde x$ agree keep their optimal values; local branching with $k=2$ fails because the optimum is three changes away; proximity search finds it, since the size of the move is decided by the sub-MIP.

<a id="esercizio-22-4"></a>

!!! esercizio "Exercise 22.4: RINS, local branching and proximity search on the KP (KP4)"

    We consider a knapsack of capacity $c=13$ and a set $\mathscr{I}=\{1,2,\dots,6\}$ of $6$ items, sorted by non-increasing efficiency, with the following profits and weights:

    $$
    \begin{array}{l|cccccc}
    \hline  & {i=1} & {i=2} & {i=3} & {i=4} & {i=5} & {i=6} \\[1ex]
    \hline {p_i} & {16} & {13} & {8} & {16} & {10} & {9} \\[1ex]
    {w_i} & {2} & {2} & {4} & {9} & {6} & {8} \\
    \hline
    \end{array}
    $$

    The incumbent is the solution of the greedy algorithm $GR$ (non-increasing efficiency).

    **Questions**

    1. Compute the incumbent $\tilde x$ and the optimal solution $x^*$ of the LP relaxation.

    2. Apply RINS from $\tilde x$: which variables are fixed, and what does the sub-MIP return?

    3. Apply local branching from $\tilde x$ with $k=1$ and then, after adding the reverse constraint, with $k=2$. Write the local branching constraints explicitly.

    4. Prove that the solution found in question 3 is optimal, using the LP relaxation.

??? soluzione "Solution"

    1. $GR$ takes items $1,2,3$ (weight $8$, $rc=5$); items $4,5,6$ do not fit: $\tilde x=(1,1,1,0,0,0)$, profit $37$. The LP takes items $1,2,3$ and the fraction $\frac59$ of item $4$:

        $$
        x^*=\Big(1,1,1,\frac59,0,0\Big),\qquad z_{LP}(I)=37+\frac{80}{9}=\frac{413}{9}\approx45.89 .
        $$

    2. They agree on $x_1=x_2=x_3=1$ and $x_5=x_6=0$: only $x_4$ is free. The sub-MIP asks $8+9x_4\le13$ and $37+16x_4\ge38$: the first forces $x_4=0$, the second $x_4=1$. It is infeasible: <strong>RINS fails</strong> and returns $\tilde x$.

    3. <strong>$k=1$.</strong> The constraint is

        $$
        (1-x_1)+(1-x_2)+(1-x_3)+x_4+x_5+x_6\le 1 .
        $$

        The neighbours are the flips: adding item $4$, $5$ or $6$ gives weight $17$, $14$, $16>13$; removing an item decreases the profit. No solution of profit at least $38$: add the reverse constraint $(1-x_1)+(1-x_2)+(1-x_3)+x_4+x_5+x_6\ge 2$ and set $k=2$.

        <strong>$k=2$.</strong> Now $2\le\Delta(x,\tilde x)\le 2$. Two removals lose profit, two additions exceed the capacity; the swaps (one of $1,2,3$ out, one of $4,5,6$ in) that fit are

        <div class="tabella" markdown="0"><table>
        <tr>
        <th>out \ in</th>
        <th><span class="arithmatex">\(4\)</span></th>
        <th><span class="arithmatex">\(5\)</span></th>
        <th><span class="arithmatex">\(6\)</span></th>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td>— (weight <span class="arithmatex">\(15\)</span>)</td>
        <td><span class="arithmatex">\(31\)</span></td>
        <td>— (weight <span class="arithmatex">\(14\)</span>)</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td>— (weight <span class="arithmatex">\(15\)</span>)</td>
        <td><span class="arithmatex">\(34\)</span></td>
        <td>— (weight <span class="arithmatex">\(14\)</span>)</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(45\)</span></td>
        <td><span class="arithmatex">\(39\)</span></td>
        <td><span class="arithmatex">\(38\)</span></td>
        </tr>
        </table></div>

        The best is to swap item $3$ with item $4$: $(1,1,0,1,0,0)$, of weight $13$ and profit $45$.

    4. The LP relaxation gives $z(I)\le\frac{413}{9}\approx45.89$, and since the profits are integer, $z(I)\le45$. The solution of local branching attains this bound: it is <strong>optimal</strong>. RINS fixed $x_3=1$, the variable that had to change; local branching (soft fixing) lets the solver choose which variables change.

<a id="esercizio-22-5"></a>

!!! esercizio "Exercise 22.5: Proximity search on $P\,||\,C_{\max}$ (PCmax1)"

    We consider an instance of $P\,||\,C_{\max}$ with $m=2$ machines and $6$ jobs with processing times

    $$
    \begin{array}{l|cccccc}
    \hline  & {j=1} & {j=2} & {j=3} & {j=4} & {j=5} & {j=6} \\[1ex]
    \hline {t_j} & {9} & {3} & {9} & {5} & {8} & {2} \\
    \hline
    \end{array}
    $$

    and the MIP model with variables $x_{jh}$ and $C_{\max}$. The incumbent is the solution of list scheduling ($LIST$) in the order $1,2,\dots,6$, each job to the least loaded machine (machine $1$ in case of ties).

    **Questions**

    1. Compute the incumbent and its makespan, and the lower bound $\max\{\max_j t_j,\lceil\sum_j t_j/m\rceil\}$.

    2. Apply the first iteration of proximity search with $\theta=1$: find the solution with $C_{\max}\le f(\tilde x)-1$ at minimum distance $\Delta(x,\tilde x)$ from the incumbent. (Recall that $\Delta=2r$, where $r$ is the number of jobs that change machine.)

    3. Apply the second iteration.

    4. Apply the third iteration, and conclude.

??? soluzione "Solution"

    1. Job $1\to M_1$ ($9,0$), job $2\to M_2$ ($9,3$), job $3\to M_2$ ($9,12$), job $4\to M_1$ ($14,12$), job $5\to M_2$ ($14,20$), job $6\to M_1$ ($16,20$). The incumbent is $J_1=\{1,4,6\}$, $J_2=\{2,3,5\}$, with loads $16$ and $20$: makespan $20$. The lower bound is $\max\{9,\lceil 36/2\rceil\}=18$.

    2. The cutoff is $C_{\max}\le19$. With $r=1$ (distance $2$) a single job moves; moving a job to $M_2$ makes its load larger than $20$, so the job moves from $M_2$ to $M_1$, and needs $20-t_j\le19$ and $16+t_j\le19$, i.e., $1\le t_j\le3$: only job $2$. The new incumbent is $J_1=\{1,2,4,6\}$, $J_2=\{3,5\}$, with loads $19$, $17$: makespan $19$, at distance $2$.

    3. The cutoff is $C_{\max}\le18$: since the total is $36$, both loads must be exactly $18$, i.e., $M_1$ must lose exactly $1$. A single move would need a job with $t_j=1$: none (distance $2$ is impossible). With two jobs ($r=2$, distance $4$): two jobs leaving $M_1$ would need $t_i+t_j=1$, impossible; a swap of $i\in J_1$ with $j\in J_2$ needs $t_i-t_j=1$, and the only pair is job $1$ ($9$) with job $5$ ($8$). The new incumbent is $J_1=\{2,4,5,6\}$, $J_2=\{1,3\}$, with loads $18$, $18$: makespan $18$, at distance $4$.

    4. The cutoff is $C_{\max}\le17$, but $C_{\max}\ge 36/2=18$ for every assignment: the proximity sub-MIP is infeasible, and the method stops. By the proposition on proximity search, makespan $18$ is <strong>optimal</strong>; it also attains the lower bound of question 1.
