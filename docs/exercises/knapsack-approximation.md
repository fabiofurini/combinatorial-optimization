---
title: "Exercises · Approximation algorithms for the knapsack problem"
---

# Exercises · Approximation algorithms for the knapsack problem

<div class="info-capitolo" markdown>

**Exercises · Chapter 27** · each solution opens with a click · [:material-book-open-variant: Chapter 27: Knapsack](../approximation-algorithms/knapsack-approximation.md) · [:material-file-pdf-box: Exercises, volume 5 (PDF)](../pdf/exercises-5-approximation-algorithms.pdf)

</div>

## Greedy algorithm

<a id="esercizio-27-1"></a>

!!! esercizio "Exercise 27.1: Greedy 1"

    We consider a knapsack of capacity $c = 15$ and a set $\mathscr{I} = \{1,2,3,4,5\}$ of $5$ items ($n=5$), with the following profits and weights:

    $$
    \begin{array}{l|ccccc}
    \hline  & {i=1} & {i=2} & {i=3} & {i=4} & {i=5} \\[1ex]
    \hline {p_i} & {12} & {6} & {6} & {8} & {6} \\[1ex]
    {w_i} & {3} & {2} & {3} & {9} & {7} \\
    \hline
    \end{array}
    $$

    **Questions**

    1. Verify that the items are sorted by non-increasing efficiency, and determine the split item $s$ and the residual capacity $\bar c$.

    2. Apply the greedy algorithm ($GR$) to this instance. Show the execution step by step, indicating at each iteration whether the item is selected and the resulting residual capacity. State the solution $S$ returned by $GR$ and $GR(I)$.

    3. Compute the upper bound $U=\sum_{i=1}^{s-1}p_i + p_s\,\frac{\bar c}{w_s}$ on $z(I)$ given by the LP relaxation, and deduce an upper bound on the performance ratio $\frac{z(I)}{GR(I)}$.

    4. Determine whether $GR$ finds an optimal solution on this instance, either by showing that $GR(I)$ attains the upper bound $\lfloor U\rfloor$, or by exhibiting a feasible solution of larger profit.

??? soluzione "Solution"

    1. The efficiencies of the items are

        $$
        \begin{gathered}
        \frac{p_{1}}{w_{1}}=\frac{12}{3}=4,\quad \frac{p_{2}}{w_{2}}=\frac{6}{2}=3,\quad \frac{p_{3}}{w_{3}}=\frac{6}{3}=2,\quad \frac{p_{4}}{w_{4}}=\frac{8}{9}\approx 0.89,\\
        \frac{p_{5}}{w_{5}}=\frac{6}{7}\approx 0.86
        \end{gathered},
        $$

        hence the items are sorted by non-increasing efficiency. Since

        $$
        \sum_{i=1}^{3} w_i = 3+2+3 = 8 \le 15
        \qquad\text{and}\qquad
        \sum_{i=1}^{4} w_i = 3+2+3+9 = 17 > 15,
        $$

        the split item is $s=4$ and the residual capacity is $\bar c = 15 - 8 = 7$.

    2. Initially $rc:=c=15$. The execution of $GR$ proceeds as follows:

        1. Item $1$ (weight $w_{1}=3$): $w_{1}=3\le rc=15$, so the item is selected and $rc\leftarrow 15-3=12$.

        2. Item $2$ (weight $w_{2}=2$): $w_{2}=2\le rc=12$, so the item is selected and $rc\leftarrow 12-2=10$.

        3. Item $3$ (weight $w_{3}=3$): $w_{3}=3\le rc=10$, so the item is selected and $rc\leftarrow 10-3=7$.

        4. Item $4$ (weight $w_{4}=9$): $w_{4}=9> rc=7$, so the item is not selected.

        5. Item $5$ (weight $w_{5}=7$): $w_{5}=7\le rc=7$, so the item is selected and $rc\leftarrow 7-7=0$.

        Hence $GR$ returns the solution $S=\{1,2,3,5\}$ with

        $$
        GR(I)=12+6+6+6=30.
        $$

        Note that $GR$ selects all the items preceding the split item, does not select the split item $4$, and also selects item $5$, which follows it.

    3. The LP relaxation gives

        $$
        z(I)\le U = 12+6+6 + 8\cdot\frac{7}{9} = \frac{272}{9} \approx 30.22 ,
        $$

        and since $z(I)$ is integer, $z(I)\le \lfloor U\rfloor = 30$. Hence

        $$
        \frac{z(I)}{GR(I)} \le \frac{30}{30} \approx 1 .
        $$

    4. Since $GR(I)=30=\lfloor U\rfloor$, no feasible solution has a larger profit: $GR$ finds an <strong>optimal</strong> solution on this instance, and $z(I)=30$.

<a id="esercizio-27-2"></a>

!!! esercizio "Exercise 27.2: Greedy 2"

    We consider a knapsack of capacity $c = 13$ and a set $\mathscr{I} = \{1,2,3,4,5,6\}$ of $6$ items ($n=6$), with the following profits and weights:

    $$
    \begin{array}{l|cccccc}
    \hline  & {i=1} & {i=2} & {i=3} & {i=4} & {i=5} & {i=6} \\[1ex]
    \hline {p_i} & {10} & {6} & {3} & {7} & {11} & {2} \\[1ex]
    {w_i} & {1} & {1} & {1} & {4} & {8} & {3} \\
    \hline
    \end{array}
    $$

    **Questions**

    1. Verify that the items are sorted by non-increasing efficiency, and determine the split item $s$ and the residual capacity $\bar c$.

    2. Apply the greedy algorithm ($GR$) to this instance. Show the execution step by step, indicating at each iteration whether the item is selected and the resulting residual capacity. State the solution $S$ returned by $GR$ and $GR(I)$.

    3. Compute the upper bound $U=\sum_{i=1}^{s-1}p_i + p_s\,\frac{\bar c}{w_s}$ on $z(I)$ given by the LP relaxation, and deduce an upper bound on the performance ratio $\frac{z(I)}{GR(I)}$.

    4. Determine whether $GR$ finds an optimal solution on this instance, either by showing that $GR(I)$ attains the upper bound $\lfloor U\rfloor$, or by exhibiting a feasible solution of larger profit.

??? soluzione "Solution"

    1. The efficiencies of the items are

        $$
        \begin{gathered}
        \frac{p_{1}}{w_{1}}=\frac{10}{1}=10,\quad \frac{p_{2}}{w_{2}}=\frac{6}{1}=6,\quad \frac{p_{3}}{w_{3}}=\frac{3}{1}=3,\quad \frac{p_{4}}{w_{4}}=\frac{7}{4}=1.75,\\
        \frac{p_{5}}{w_{5}}=\frac{11}{8}\approx 1.38,\quad \frac{p_{6}}{w_{6}}=\frac{2}{3}\approx 0.67
        \end{gathered},
        $$

        hence the items are sorted by non-increasing efficiency. Since

        $$
        \sum_{i=1}^{4} w_i = 1+1+1+4 = 7 \le 13
        \qquad\text{and}\qquad
        \sum_{i=1}^{5} w_i = 1+1+1+4+8 = 15 > 13,
        $$

        the split item is $s=5$ and the residual capacity is $\bar c = 13 - 7 = 6$.

    2. Initially $rc:=c=13$. The execution of $GR$ proceeds as follows:

        1. Item $1$ (weight $w_{1}=1$): $w_{1}=1\le rc=13$, so the item is selected and $rc\leftarrow 13-1=12$.

        2. Item $2$ (weight $w_{2}=1$): $w_{2}=1\le rc=12$, so the item is selected and $rc\leftarrow 12-1=11$.

        3. Item $3$ (weight $w_{3}=1$): $w_{3}=1\le rc=11$, so the item is selected and $rc\leftarrow 11-1=10$.

        4. Item $4$ (weight $w_{4}=4$): $w_{4}=4\le rc=10$, so the item is selected and $rc\leftarrow 10-4=6$.

        5. Item $5$ (weight $w_{5}=8$): $w_{5}=8> rc=6$, so the item is not selected.

        6. Item $6$ (weight $w_{6}=3$): $w_{6}=3\le rc=6$, so the item is selected and $rc\leftarrow 6-3=3$.

        Hence $GR$ returns the solution $S=\{1,2,3,4,6\}$ with

        $$
        GR(I)=10+6+3+7+2=28.
        $$

        Note that $GR$ selects all the items preceding the split item, does not select the split item $5$, and also selects item $6$, which follows it.

    3. The LP relaxation gives

        $$
        z(I)\le U = 10+6+3+7 + 11\cdot\frac{6}{8} = \frac{137}{4} \approx 34.25 ,
        $$

        and since $z(I)$ is integer, $z(I)\le \lfloor U\rfloor = 34$. Hence

        $$
        \frac{z(I)}{GR(I)} \le \frac{34}{28} \approx 1.21 .
        $$

    4. The solution $S^*=\{1,2,3,5\}$, of weight $1+1+1+8=11\le 13$ and profit $z(I)=10+6+3+11=30$ is feasible and has a larger profit than $GR(I)=28$. Hence $GR$ does <strong>not</strong> find an optimal solution on this instance; the solution $S^*$ is optimal (this can be checked by enumerating the feasible solutions), and the performance ratio is

        $$
        \frac{z(I)}{GR(I)}=\frac{30}{28}\approx 1.07 .
        $$

        Note that the item of maximum profit, item $5$ with $p_{5}=11$, is not selected by $GR$: its low efficiency puts it late in the order, when the residual capacity is no longer sufficient.

<a id="esercizio-27-3"></a>

!!! esercizio "Exercise 27.3: Greedy 3"

    We consider a knapsack of capacity $c = 12$ and a set $\mathscr{I} = \{1,2,3,4,5\}$ of $5$ items ($n=5$), with the following profits and weights:

    $$
    \begin{array}{l|ccccc}
    \hline  & {i=1} & {i=2} & {i=3} & {i=4} & {i=5} \\[1ex]
    \hline {p_i} & {8} & {7} & {18} & {14} & {10} \\[1ex]
    {w_i} & {3} & {3} & {9} & {8} & {7} \\
    \hline
    \end{array}
    $$

    **Questions**

    1. Verify that the items are sorted by non-increasing efficiency, and determine the split item $s$ and the residual capacity $\bar c$.

    2. Apply the greedy algorithm ($GR$) to this instance. Show the execution step by step, indicating at each iteration whether the item is selected and the resulting residual capacity. State the solution $S$ returned by $GR$ and $GR(I)$.

    3. Compute the upper bound $U=\sum_{i=1}^{s-1}p_i + p_s\,\frac{\bar c}{w_s}$ on $z(I)$ given by the LP relaxation, and deduce an upper bound on the performance ratio $\frac{z(I)}{GR(I)}$.

    4. Determine whether $GR$ finds an optimal solution on this instance, either by showing that $GR(I)$ attains the upper bound $\lfloor U\rfloor$, or by exhibiting a feasible solution of larger profit.

??? soluzione "Solution"

    1. The efficiencies of the items are

        $$
        \begin{gathered}
        \frac{p_{1}}{w_{1}}=\frac{8}{3}\approx 2.67,\quad \frac{p_{2}}{w_{2}}=\frac{7}{3}\approx 2.33,\quad \frac{p_{3}}{w_{3}}=\frac{18}{9}=2,\quad \frac{p_{4}}{w_{4}}=\frac{14}{8}=1.75,\\
        \frac{p_{5}}{w_{5}}=\frac{10}{7}\approx 1.43
        \end{gathered},
        $$

        hence the items are sorted by non-increasing efficiency. Since

        $$
        \sum_{i=1}^{2} w_i = 3+3 = 6 \le 12
        \qquad\text{and}\qquad
        \sum_{i=1}^{3} w_i = 3+3+9 = 15 > 12,
        $$

        the split item is $s=3$ and the residual capacity is $\bar c = 12 - 6 = 6$.

    2. Initially $rc:=c=12$. The execution of $GR$ proceeds as follows:

        1. Item $1$ (weight $w_{1}=3$): $w_{1}=3\le rc=12$, so the item is selected and $rc\leftarrow 12-3=9$.

        2. Item $2$ (weight $w_{2}=3$): $w_{2}=3\le rc=9$, so the item is selected and $rc\leftarrow 9-3=6$.

        3. Item $3$ (weight $w_{3}=9$): $w_{3}=9> rc=6$, so the item is not selected.

        4. Item $4$ (weight $w_{4}=8$): $w_{4}=8> rc=6$, so the item is not selected.

        5. Item $5$ (weight $w_{5}=7$): $w_{5}=7> rc=6$, so the item is not selected.

        Hence $GR$ returns the solution $S=\{1,2\}$ with

        $$
        GR(I)=8+7=15.
        $$

        Here $GR$ selects exactly the items preceding the split item.

    3. The LP relaxation gives

        $$
        z(I)\le U = 8+7 + 18\cdot\frac{6}{9} = 27 \approx 27 ,
        $$

        and since $z(I)$ is integer, $z(I)\le \lfloor U\rfloor = 27$. Hence

        $$
        \frac{z(I)}{GR(I)} \le \frac{27}{15} \approx 1.8 .
        $$

    4. The solution $S^*=\{1,3\}$, of weight $3+9=12\le 12$ and profit $z(I)=8+18=26$ is feasible and has a larger profit than $GR(I)=15$. Hence $GR$ does <strong>not</strong> find an optimal solution on this instance; the solution $S^*$ is optimal (this can be checked by enumerating the feasible solutions), and the performance ratio is

        $$
        \frac{z(I)}{GR(I)}=\frac{26}{15}\approx 1.73 .
        $$

        Note that the item of maximum profit, item $3$ with $p_{3}=18$, is not selected by $GR$: its low efficiency puts it late in the order, when the residual capacity is no longer sufficient.

## Extended greedy algorithm

<a id="esercizio-27-4"></a>

!!! esercizio "Exercise 27.4: Ext-Greedy 1"

    We consider a knapsack of capacity $c = 22$ and a set $\mathscr{I} = \{1,2,3,4,5\}$ of $5$ items ($n=5$), with the following profits and weights:

    $$
    \begin{array}{l|ccccc}
    \hline  & {i=1} & {i=2} & {i=3} & {i=4} & {i=5} \\[1ex]
    \hline {p_i} & {11} & {5} & {3} & {4} & {3} \\[1ex]
    {w_i} & {8} & {4} & {3} & {9} & {8} \\
    \hline
    \end{array}
    $$

    **Questions**

    1. Apply the greedy algorithm ($GR$) to this instance step by step, and state $GR(I)$.

    2. Determine the maximum profit $\hat p$ and the best single-item feasible solution $\hat S$. State the solution returned by the Ext-Greedy algorithm ($GR^e$) and $GR^e(I)$.

    3. Determine the split item $s$ and verify the two inequalities $\sum_{i=1}^{s-1}p_i\le GR^e(I)$ and $p_s\le GR^e(I)$ used in the proof of the performance guarantee of $GR^e$. Deduce an upper bound on $z(I)$.

    4. Determine whether $GR^e$ finds an optimal solution on this instance, and compute the performance ratio $\frac{z(I)}{GR^e(I)}$, comparing it with the relative performance guarantee $2$ of $GR^e$.

??? soluzione "Solution"

    1. The efficiencies of the items are

        $$
        \begin{gathered}
        \frac{p_{1}}{w_{1}}=\frac{11}{8}\approx 1.38,\quad \frac{p_{2}}{w_{2}}=\frac{5}{4}=1.25,\quad \frac{p_{3}}{w_{3}}=\frac{3}{3}=1,\quad \frac{p_{4}}{w_{4}}=\frac{4}{9}\approx 0.44,\\
        \frac{p_{5}}{w_{5}}=\frac{3}{8}\approx 0.38
        \end{gathered},
        $$

        so the items are sorted by non-increasing efficiency. Initially $rc:=c=22$, and $GR$ proceeds as follows:

        1. Item $1$ (weight $w_{1}=8$): $w_{1}=8\le rc=22$, so the item is selected and $rc\leftarrow 22-8=14$.

        2. Item $2$ (weight $w_{2}=4$): $w_{2}=4\le rc=14$, so the item is selected and $rc\leftarrow 14-4=10$.

        3. Item $3$ (weight $w_{3}=3$): $w_{3}=3\le rc=10$, so the item is selected and $rc\leftarrow 10-3=7$.

        4. Item $4$ (weight $w_{4}=9$): $w_{4}=9> rc=7$, so the item is not selected.

        5. Item $5$ (weight $w_{5}=8$): $w_{5}=8> rc=7$, so the item is not selected.

        Hence $GR$ returns $S=\{1,2,3\}$ and $GR(I)=11+5+3=19$.

    2. The maximum profit is $\hat p = p_{1} = 11$, and item $1$ fits into the knapsack ($w_{1}=8\le 22$), so $\hat S=\{1\}$. Since $GR(I)=19\ge \hat p=11$, $GR^e$ keeps the greedy solution:

        $$
        GR^e(I)=GR(I)=19 .
        $$

    3. Since $\sum_{i=1}^{3} w_i=15\le 22$ and $\sum_{i=1}^{4} w_i=24> 22$, the split item is $s=4$. Then

        $$
        \sum_{i=1}^{s-1}p_i = 11+5+3 = 19 \le GR^e(I)=19
        \qquad\text{and}\qquad
        p_s = p_{4} = 4 \le GR^e(I)=19,
        $$

        and, as in the proof of the performance guarantee,

        $$
        z(I) \;\le\; \sum_{i=1}^{s-1}p_i + p_s \;=\; 23 \;\le\; 2\,GR^e(I) = 38 .
        $$

    4. The solution $S^*=\{1,2,4\}$, of weight $8+4+9=21\le 22$ and profit $z(I)=11+5+4=20$ is feasible and better than the one returned by $GR^e$, so $GR^e$ does <strong>not</strong> find an optimal solution; $S^*$ is optimal (this can be checked by enumerating the feasible solutions). The performance ratio is

        $$
        \frac{z(I)}{GR^e(I)}=\frac{20}{19}\approx 1.05 \;\le\; 2,
        $$

        as guaranteed.

<a id="esercizio-27-5"></a>

!!! esercizio "Exercise 27.5: Ext-Greedy 2"

    We consider a knapsack of capacity $c = 8$ and a set $\mathscr{I} = \{1,2,3,4,5\}$ of $5$ items ($n=5$), with the following profits and weights:

    $$
    \begin{array}{l|ccccc}
    \hline  & {i=1} & {i=2} & {i=3} & {i=4} & {i=5} \\[1ex]
    \hline {p_i} & {16} & {19} & {18} & {14} & {8} \\[1ex]
    {w_i} & {5} & {8} & {8} & {7} & {6} \\
    \hline
    \end{array}
    $$

    **Questions**

    1. Apply the greedy algorithm ($GR$) to this instance step by step, and state $GR(I)$.

    2. Determine the maximum profit $\hat p$ and the best single-item feasible solution $\hat S$. State the solution returned by the Ext-Greedy algorithm ($GR^e$) and $GR^e(I)$.

    3. Determine the split item $s$ and verify the two inequalities $\sum_{i=1}^{s-1}p_i\le GR^e(I)$ and $p_s\le GR^e(I)$ used in the proof of the performance guarantee of $GR^e$. Deduce an upper bound on $z(I)$.

    4. Determine whether $GR^e$ finds an optimal solution on this instance, and compute the performance ratio $\frac{z(I)}{GR^e(I)}$, comparing it with the relative performance guarantee $2$ of $GR^e$.

??? soluzione "Solution"

    1. The efficiencies of the items are

        $$
        \begin{gathered}
        \frac{p_{1}}{w_{1}}=\frac{16}{5}=3.2,\quad \frac{p_{2}}{w_{2}}=\frac{19}{8}\approx 2.38,\quad \frac{p_{3}}{w_{3}}=\frac{18}{8}=2.25,\quad \frac{p_{4}}{w_{4}}=\frac{14}{7}=2,\\
        \frac{p_{5}}{w_{5}}=\frac{8}{6}\approx 1.33
        \end{gathered},
        $$

        so the items are sorted by non-increasing efficiency. Initially $rc:=c=8$, and $GR$ proceeds as follows:

        1. Item $1$ (weight $w_{1}=5$): $w_{1}=5\le rc=8$, so the item is selected and $rc\leftarrow 8-5=3$.

        2. Item $2$ (weight $w_{2}=8$): $w_{2}=8> rc=3$, so the item is not selected.

        3. Item $3$ (weight $w_{3}=8$): $w_{3}=8> rc=3$, so the item is not selected.

        4. Item $4$ (weight $w_{4}=7$): $w_{4}=7> rc=3$, so the item is not selected.

        5. Item $5$ (weight $w_{5}=6$): $w_{5}=6> rc=3$, so the item is not selected.

        Hence $GR$ returns $S=\{1\}$ and $GR(I)=16=16$.

    2. The maximum profit is $\hat p = p_{2} = 19$, and item $2$ fits into the knapsack ($w_{2}=8\le 8$), so $\hat S=\{2\}$. Since $GR(I)=16<\hat p=19$, $GR^e$ replaces the greedy solution with $\hat S$:

        $$
        GR^e(I)=\hat p=19 .
        $$

    3. Since $\sum_{i=1}^{1} w_i=5\le 8$ and $\sum_{i=1}^{2} w_i=13> 8$, the split item is $s=2$. Then

        $$
        \sum_{i=1}^{s-1}p_i = 16 = 16 \le GR^e(I)=19
        \qquad\text{and}\qquad
        p_s = p_{2} = 19 \le GR^e(I)=19,
        $$

        and, as in the proof of the performance guarantee,

        $$
        z(I) \;\le\; \sum_{i=1}^{s-1}p_i + p_s \;=\; 35 \;\le\; 2\,GR^e(I) = 38 .
        $$

    4. The solution returned by $GR^e$ is <strong>optimal</strong>: $S^*=\{2\}$, of weight $8=8\le 8$ and profit $z(I)=19=19$. The performance ratio is $\frac{z(I)}{GR^e(I)}=1$.

<a id="esercizio-27-6"></a>

!!! esercizio "Exercise 27.6: Ext-Greedy 3"

    We consider a knapsack of capacity $c = 16$ and a set $\mathscr{I} = \{1,2,3\}$ of $3$ items ($n=3$), with the following profits and weights:

    $$
    \begin{array}{l|ccc}
    \hline  & {i=1} & {i=2} & {i=3} \\[1ex]
    \hline {p_i} & {2} & {8} & {8} \\[1ex]
    {w_i} & {1} & {8} & {8} \\
    \hline
    \end{array}
    $$

    **Questions**

    1. Apply the greedy algorithm ($GR$) to this instance step by step, and state $GR(I)$.

    2. Determine the maximum profit $\hat p$ and the best single-item feasible solution $\hat S$. State the solution returned by the Ext-Greedy algorithm ($GR^e$) and $GR^e(I)$.

    3. Determine the split item $s$ and verify the two inequalities $\sum_{i=1}^{s-1}p_i\le GR^e(I)$ and $p_s\le GR^e(I)$ used in the proof of the performance guarantee of $GR^e$. Deduce an upper bound on $z(I)$.

    4. Determine whether $GR^e$ finds an optimal solution on this instance, and compute the performance ratio $\frac{z(I)}{GR^e(I)}$, comparing it with the relative performance guarantee $2$ of $GR^e$.

??? soluzione "Solution"

    1. The efficiencies of the items are

        $$
        \frac{p_{1}}{w_{1}}=\frac{2}{1}=2,\quad \frac{p_{2}}{w_{2}}=\frac{8}{8}=1,\quad \frac{p_{3}}{w_{3}}=\frac{8}{8}=1,
        $$

        so the items are sorted by non-increasing efficiency. Initially $rc:=c=16$, and $GR$ proceeds as follows:

        1. Item $1$ (weight $w_{1}=1$): $w_{1}=1\le rc=16$, so the item is selected and $rc\leftarrow 16-1=15$.

        2. Item $2$ (weight $w_{2}=8$): $w_{2}=8\le rc=15$, so the item is selected and $rc\leftarrow 15-8=7$.

        3. Item $3$ (weight $w_{3}=8$): $w_{3}=8> rc=7$, so the item is not selected.

        Hence $GR$ returns $S=\{1,2\}$ and $GR(I)=2+8=10$.

    2. The maximum profit is $\hat p = p_{2} = 8$, and item $2$ fits into the knapsack ($w_{2}=8\le 16$), so $\hat S=\{2\}$. Since $GR(I)=10\ge \hat p=8$, $GR^e$ keeps the greedy solution:

        $$
        GR^e(I)=GR(I)=10 .
        $$

    3. Since $\sum_{i=1}^{2} w_i=9\le 16$ and $\sum_{i=1}^{3} w_i=17> 16$, the split item is $s=3$. Then

        $$
        \sum_{i=1}^{s-1}p_i = 2+8 = 10 \le GR^e(I)=10
        \qquad\text{and}\qquad
        p_s = p_{3} = 8 \le GR^e(I)=10,
        $$

        and, as in the proof of the performance guarantee,

        $$
        z(I) \;\le\; \sum_{i=1}^{s-1}p_i + p_s \;=\; 18 \;\le\; 2\,GR^e(I) = 20 .
        $$

    4. The solution $S^*=\{2,3\}$, of weight $8+8=16\le 16$ and profit $z(I)=8+8=16$ is feasible and better than the one returned by $GR^e$, so $GR^e$ does <strong>not</strong> find an optimal solution; $S^*$ is optimal (this can be checked by enumerating the feasible solutions). The performance ratio is

        $$
        \frac{z(I)}{GR^e(I)}=\frac{16}{10}\approx 1.6 \;\le\; 2,
        $$

        as guaranteed.

    - <strong>Remark.</strong> This instance belongs to the family of instances used to show that the relative performance guarantee $2$ of $GR^e$ is tight, with $\vartheta=8$: there the ratio is $\frac{2\vartheta}{\vartheta+2}$, and here $\frac{16}{10}=1.6$; it tends to $2$ as $\vartheta$ grows.

## The $H^2$ heuristic

<a id="esercizio-27-7"></a>

!!! esercizio "Exercise 27.7: $H^2$ 1"

    We consider a knapsack of capacity $c = 11$ and a set $\mathscr{I} = \{1,2,3,4,5\}$ of $5$ items ($n=5$), with the following profits and weights:

    $$
    \begin{array}{l|ccccc}
    \hline  & {i=1} & {i=2} & {i=3} & {i=4} & {i=5} \\[1ex]
    \hline {p_i} & {8} & {9} & {2} & {3} & {2} \\[1ex]
    {w_i} & {5} & {8} & {3} & {7} & {9} \\
    \hline
    \end{array}
    $$

    **Questions**

    1. Verify that the items are sorted by non-increasing efficiency, and determine the set $\mathscr{P}$ of the feasible pairs of items.

    2. Apply the $H^2$ algorithm to this instance: for each feasible pair $(i,k)$ compute the residual capacity $\bar c$, the residual set $\mathscr{I}(i,k)$, the value of $GR^e$ on the residual instance and the value $lb(i,k)$.

    3. State the solution returned by $H^2$ and $H^2(I)$.

    4. Compare $H^2(I)$ with $GR^e(I)$ and with $z(I)$, and compute the performance ratio $\frac{z(I)}{H^2(I)}$, comparing it with the relative performance guarantee $\frac{4}{3}$ of $H^2$.

??? soluzione "Solution"

    1. The efficiencies of the items are

        $$
        \begin{gathered}
        \frac{p_{1}}{w_{1}}=\frac{8}{5}=1.6,\quad \frac{p_{2}}{w_{2}}=\frac{9}{8}\approx 1.12,\quad \frac{p_{3}}{w_{3}}=\frac{2}{3}\approx 0.67,\quad \frac{p_{4}}{w_{4}}=\frac{3}{7}\approx 0.43,\\
        \frac{p_{5}}{w_{5}}=\frac{2}{9}\approx 0.22
        \end{gathered},
        $$

        so the items are sorted by non-increasing efficiency. A pair $(i,k)$ with $i<k$ is feasible if $w_i+w_k\le c=11$, hence

        $$
        \mathscr{P}=\big\{(1,3),(2,3),(3,4)\big\}.
        $$

    2. The algorithm starts from the best single item, $lb=p_{\max}=p_{2}=9$. For each feasible pair, the residual set keeps the items $j\notin\{i,k\}$ with $p_j\le\min\{p_i,p_k\}$ and $w_j\le\bar c$:

        <div class="tabella" markdown="0"><table>
        <tr>
        <th>pair</th>
        <th>weight</th>
        <th><span class="arithmatex">\(\bar c\)</span></th>
        <th>residual set</th>
        <th><span class="arithmatex">\(GR^e\)</span> on the residual</th>
        <th>value</th>
        </tr>
        <tr>
        <td><span class="arithmatex">\((1,2)\)</span></td>
        <td><span class="arithmatex">\(13>11\)</span></td>
        <td colspan="4">not feasible</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\((1,3)\)</span></td>
        <td><span class="arithmatex">\(8\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(\varnothing\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(10\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\((1,4)\)</span></td>
        <td><span class="arithmatex">\(12>11\)</span></td>
        <td colspan="4">not feasible</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\((1,5)\)</span></td>
        <td><span class="arithmatex">\(14>11\)</span></td>
        <td colspan="4">not feasible</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\((2,3)\)</span></td>
        <td><span class="arithmatex">\(11\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(\varnothing\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(11\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\((2,4)\)</span></td>
        <td><span class="arithmatex">\(15>11\)</span></td>
        <td colspan="4">not feasible</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\((2,5)\)</span></td>
        <td><span class="arithmatex">\(17>11\)</span></td>
        <td colspan="4">not feasible</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\((3,4)\)</span></td>
        <td><span class="arithmatex">\(10\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(\varnothing\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\((3,5)\)</span></td>
        <td><span class="arithmatex">\(12>11\)</span></td>
        <td colspan="4">not feasible</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\((4,5)\)</span></td>
        <td><span class="arithmatex">\(16>11\)</span></td>
        <td colspan="4">not feasible</td>
        </tr>
        </table></div>

    3. The largest value is $11$, obtained with the solution $\{2,3\}$. Hence

        $$
        H^2(I)=11 .
        $$

    4. On this instance $GR^e(I)=10$, so $H^2$ improves on $GR^e$. The solution returned by $H^2$ is <strong>optimal</strong>: $S^*=\{2,3\}$, of weight $8+3=11\le 11$ and profit $z(I)=9+2=11$, and the performance ratio is $1$.

<a id="esercizio-27-8"></a>

!!! esercizio "Exercise 27.8: $H^2$ 2"

    We consider a knapsack of capacity $c = 15$ and a set $\mathscr{I} = \{1,2,3,4,5\}$ of $5$ items ($n=5$), with the following profits and weights:

    $$
    \begin{array}{l|ccccc}
    \hline  & {i=1} & {i=2} & {i=3} & {i=4} & {i=5} \\[1ex]
    \hline {p_i} & {14} & {9} & {5} & {10} & {15} \\[1ex]
    {w_i} & {1} & {1} & {2} & {5} & {8} \\
    \hline
    \end{array}
    $$

    **Questions**

    1. Verify that the items are sorted by non-increasing efficiency, and determine the set $\mathscr{P}$ of the feasible pairs of items.

    2. Apply the $H^2$ algorithm to this instance: for each feasible pair $(i,k)$ compute the residual capacity $\bar c$, the residual set $\mathscr{I}(i,k)$, the value of $GR^e$ on the residual instance and the value $lb(i,k)$.

    3. State the solution returned by $H^2$ and $H^2(I)$.

    4. Compare $H^2(I)$ with $GR^e(I)$ and with $z(I)$, and compute the performance ratio $\frac{z(I)}{H^2(I)}$, comparing it with the relative performance guarantee $\frac{4}{3}$ of $H^2$.

??? soluzione "Solution"

    1. The efficiencies of the items are

        $$
        \begin{gathered}
        \frac{p_{1}}{w_{1}}=\frac{14}{1}=14,\quad \frac{p_{2}}{w_{2}}=\frac{9}{1}=9,\quad \frac{p_{3}}{w_{3}}=\frac{5}{2}=2.5,\quad \frac{p_{4}}{w_{4}}=\frac{10}{5}=2,\\
        \frac{p_{5}}{w_{5}}=\frac{15}{8}\approx 1.88
        \end{gathered},
        $$

        so the items are sorted by non-increasing efficiency. A pair $(i,k)$ with $i<k$ is feasible if $w_i+w_k\le c=15$, hence

        $$
        \mathscr{P}=\big\{(1,2),(1,3),(1,4),(1,5),(2,3),(2,4),(2,5),(3,4),(3,5),(4,5)\big\}.
        $$

    2. The algorithm starts from the best single item, $lb=p_{\max}=p_{5}=15$. For each feasible pair, the residual set keeps the items $j\notin\{i,k\}$ with $p_j\le\min\{p_i,p_k\}$ and $w_j\le\bar c$:

        <div class="tabella" markdown="0"><table>
        <tr>
        <th>pair</th>
        <th>weight</th>
        <th><span class="arithmatex">\(\bar c\)</span></th>
        <th>residual set</th>
        <th><span class="arithmatex">\(GR^e\)</span> on the residual</th>
        <th>value</th>
        </tr>
        <tr>
        <td><span class="arithmatex">\((1,2)\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(13\)</span></td>
        <td><span class="arithmatex">\(\{3\}\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(28\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\((1,3)\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(12\)</span></td>
        <td><span class="arithmatex">\(\varnothing\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(19\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\((1,4)\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(9\)</span></td>
        <td><span class="arithmatex">\(\{2,3\}\)</span></td>
        <td><span class="arithmatex">\(14\)</span></td>
        <td><span class="arithmatex">\(38\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\((1,5)\)</span></td>
        <td><span class="arithmatex">\(9\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(\{2,3,4\}\)</span></td>
        <td><span class="arithmatex">\(14\)</span></td>
        <td><span class="arithmatex">\(43\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\((2,3)\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(12\)</span></td>
        <td><span class="arithmatex">\(\varnothing\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(14\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\((2,4)\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(9\)</span></td>
        <td><span class="arithmatex">\(\{3\}\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(24\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\((2,5)\)</span></td>
        <td><span class="arithmatex">\(9\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(\{3\}\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(29\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\((3,4)\)</span></td>
        <td><span class="arithmatex">\(7\)</span></td>
        <td><span class="arithmatex">\(8\)</span></td>
        <td><span class="arithmatex">\(\varnothing\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(15\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\((3,5)\)</span></td>
        <td><span class="arithmatex">\(10\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(\varnothing\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(20\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\((4,5)\)</span></td>
        <td><span class="arithmatex">\(13\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(\{2,3\}\)</span></td>
        <td><span class="arithmatex">\(9\)</span></td>
        <td><span class="arithmatex">\(34\)</span></td>
        </tr>
        </table></div>

    3. The largest value is $43$, obtained with the solution $\{1,2,3,5\}$. Hence

        $$
        H^2(I)=43 .
        $$

    4. On this instance $GR^e(I)=38$, so $H^2$ improves on $GR^e$. The solution $S^*=\{1,2,4,5\}$, of weight $1+1+5+8=15\le 15$ and profit $z(I)=14+9+10+15=48$ is better, so $H^2$ does <strong>not</strong> find an optimal solution; $S^*$ is optimal (this can be checked by enumerating the feasible solutions). The performance ratio is

        $$
        \frac{z(I)}{H^2(I)}=\frac{48}{43}\approx 1.12\;\le\;\frac{4}{3}\approx 1.33,
        $$

        as guaranteed.

<a id="esercizio-27-9"></a>

!!! esercizio "Exercise 27.9: $H^2$ 3"

    We consider a knapsack of capacity $c = 10$ and a set $\mathscr{I} = \{1,2,3,4,5\}$ of $5$ items ($n=5$), with the following profits and weights:

    $$
    \begin{array}{l|ccccc}
    \hline  & {i=1} & {i=2} & {i=3} & {i=4} & {i=5} \\[1ex]
    \hline {p_i} & {13} & {5} & {8} & {5} & {7} \\[1ex]
    {w_i} & {1} & {1} & {3} & {2} & {5} \\
    \hline
    \end{array}
    $$

    **Questions**

    1. Verify that the items are sorted by non-increasing efficiency, and determine the set $\mathscr{P}$ of the feasible pairs of items.

    2. Apply the $H^2$ algorithm to this instance: for each feasible pair $(i,k)$ compute the residual capacity $\bar c$, the residual set $\mathscr{I}(i,k)$, the value of $GR^e$ on the residual instance and the value $lb(i,k)$.

    3. State the solution returned by $H^2$ and $H^2(I)$.

    4. Compare $H^2(I)$ with $GR^e(I)$ and with $z(I)$, and compute the performance ratio $\frac{z(I)}{H^2(I)}$, comparing it with the relative performance guarantee $\frac{4}{3}$ of $H^2$.

??? soluzione "Solution"

    1. The efficiencies of the items are

        $$
        \begin{gathered}
        \frac{p_{1}}{w_{1}}=\frac{13}{1}=13,\quad \frac{p_{2}}{w_{2}}=\frac{5}{1}=5,\quad \frac{p_{3}}{w_{3}}=\frac{8}{3}\approx 2.67,\quad \frac{p_{4}}{w_{4}}=\frac{5}{2}=2.5,\\
        \frac{p_{5}}{w_{5}}=\frac{7}{5}=1.4
        \end{gathered},
        $$

        so the items are sorted by non-increasing efficiency. A pair $(i,k)$ with $i<k$ is feasible if $w_i+w_k\le c=10$, hence

        $$
        \mathscr{P}=\big\{(1,2),(1,3),(1,4),(1,5),(2,3),(2,4),(2,5),(3,4),(3,5),(4,5)\big\}.
        $$

    2. The algorithm starts from the best single item, $lb=p_{\max}=p_{1}=13$. For each feasible pair, the residual set keeps the items $j\notin\{i,k\}$ with $p_j\le\min\{p_i,p_k\}$ and $w_j\le\bar c$:

        <div class="tabella" markdown="0"><table>
        <tr>
        <th>pair</th>
        <th>weight</th>
        <th><span class="arithmatex">\(\bar c\)</span></th>
        <th>residual set</th>
        <th><span class="arithmatex">\(GR^e\)</span> on the residual</th>
        <th>value</th>
        </tr>
        <tr>
        <td><span class="arithmatex">\((1,2)\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(8\)</span></td>
        <td><span class="arithmatex">\(\{4\}\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(23\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\((1,3)\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(\{2,4,5\}\)</span></td>
        <td><span class="arithmatex">\(10\)</span></td>
        <td><span class="arithmatex">\(31\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\((1,4)\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(7\)</span></td>
        <td><span class="arithmatex">\(\{2\}\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(23\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\((1,5)\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(\{2,4\}\)</span></td>
        <td><span class="arithmatex">\(10\)</span></td>
        <td><span class="arithmatex">\(30\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\((2,3)\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(\{4\}\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(18\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\((2,4)\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(7\)</span></td>
        <td><span class="arithmatex">\(\varnothing\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(10\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\((2,5)\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(\{4\}\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(17\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\((3,4)\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(\{2\}\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(18\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\((3,5)\)</span></td>
        <td><span class="arithmatex">\(8\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(\{2,4\}\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(20\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\((4,5)\)</span></td>
        <td><span class="arithmatex">\(7\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(\{2\}\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(17\)</span></td>
        </tr>
        </table></div>

    3. The largest value is $31$, obtained with the solution $\{1,2,3,4\}$. Hence

        $$
        H^2(I)=31 .
        $$

    4. On this instance $GR^e(I)=31$, the same value as $H^2$. The solution $S^*=\{1,2,3,5\}$, of weight $1+1+3+5=10\le 10$ and profit $z(I)=13+5+8+7=33$ is better, so $H^2$ does <strong>not</strong> find an optimal solution; $S^*$ is optimal (this can be checked by enumerating the feasible solutions). The performance ratio is

        $$
        \frac{z(I)}{H^2(I)}=\frac{33}{31}\approx 1.06\;\le\;\frac{4}{3}\approx 1.33,
        $$

        as guaranteed.

## The $H^\ell$ heuristic

<a id="esercizio-27-10"></a>

!!! esercizio "Exercise 27.10: $H^{\ell}$ 1"

    We consider a knapsack of capacity $c = 16$ and a set $\mathscr{I} = \{1,2,3,4,5\}$ of $5$ items ($n=5$), with the following profits and weights:

    $$
    \begin{array}{l|ccccc}
    \hline  & {i=1} & {i=2} & {i=3} & {i=4} & {i=5} \\[1ex]
    \hline {p_i} & {14} & {13} & {13} & {10} & {11} \\[1ex]
    {w_i} & {1} & {2} & {3} & {3} & {9} \\
    \hline
    \end{array}
    $$

    **Questions**

    1. We apply the $H^{\ell}$ algorithm with $\ell=3$. Compute the best feasible solution made of at most $\ell-1=2$ items.

    2. For each feasible set $L$ of exactly $\ell=3$ items, compute the residual capacity $\bar c$, the residual set $\mathscr{I}(L)$, the value of $GR^e$ on the residual instance and the value $lb(L)$.

    3. State the solution returned by $H^{3}$ and $H^{3}(I)$.

    4. Determine whether $H^{3}$ finds an optimal solution on this instance, and compute the performance ratio $\frac{z(I)}{H^{3}(I)}$, comparing it with the relative performance guarantee $\frac{\ell+2}{\ell+1}=\frac{5}{4}$.

??? soluzione "Solution"

    1. The best feasible solution with at most $2$ items is $\{1,2\}$, of weight $1+2=3\le 16$ and profit $14+13=27$.

    2. For each set $L$ of $3$ items, the residual set keeps the items $j\notin L$ with $p_j\le\min\{p_i:i\in L\}$ and $w_j\le\bar c$:

        <div class="tabella" markdown="0"><table>
        <tr>
        <th>set <span class="arithmatex">\(L\)</span></th>
        <th>weight</th>
        <th><span class="arithmatex">\(\bar c\)</span></th>
        <th>residual set</th>
        <th><span class="arithmatex">\(GR^e\)</span> on the residual</th>
        <th>value</th>
        </tr>
        <tr>
        <td><span class="arithmatex">\(\{1,2,3\}\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(10\)</span></td>
        <td><span class="arithmatex">\(\{4,5\}\)</span></td>
        <td><span class="arithmatex">\(11\)</span></td>
        <td><span class="arithmatex">\(51\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(\{1,2,4\}\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(10\)</span></td>
        <td><span class="arithmatex">\(\varnothing\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(37\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(\{1,2,5\}\)</span></td>
        <td><span class="arithmatex">\(12\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(\{4\}\)</span></td>
        <td><span class="arithmatex">\(10\)</span></td>
        <td><span class="arithmatex">\(48\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(\{1,3,4\}\)</span></td>
        <td><span class="arithmatex">\(7\)</span></td>
        <td><span class="arithmatex">\(9\)</span></td>
        <td><span class="arithmatex">\(\varnothing\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(37\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(\{1,3,5\}\)</span></td>
        <td><span class="arithmatex">\(13\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(\{4\}\)</span></td>
        <td><span class="arithmatex">\(10\)</span></td>
        <td><span class="arithmatex">\(48\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(\{1,4,5\}\)</span></td>
        <td><span class="arithmatex">\(13\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(\varnothing\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(35\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(\{2,3,4\}\)</span></td>
        <td><span class="arithmatex">\(8\)</span></td>
        <td><span class="arithmatex">\(8\)</span></td>
        <td><span class="arithmatex">\(\varnothing\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(36\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(\{2,3,5\}\)</span></td>
        <td><span class="arithmatex">\(14\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(\varnothing\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(37\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(\{2,4,5\}\)</span></td>
        <td><span class="arithmatex">\(14\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(\varnothing\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(34\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(\{3,4,5\}\)</span></td>
        <td><span class="arithmatex">\(15\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(\varnothing\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(34\)</span></td>
        </tr>
        </table></div>

    3. The largest value is $51$, obtained with the solution $\{1,2,3,5\}$. Hence

        $$
        H^{3}(I)=51 .
        $$

    4. The solution returned by $H^{3}$ is <strong>optimal</strong>: $S^*=\{1,2,3,5\}$, of weight $1+2+3+9=15\le 16$ and profit $z(I)=14+13+13+11=51$, and the performance ratio is $1$. For comparison, on this instance $H^2(I)=50$: guessing three items instead of two is enough to find the optimal solution.

<a id="esercizio-27-11"></a>

!!! esercizio "Exercise 27.11: $H^{\ell}$ 2"

    We consider a knapsack of capacity $c = 20$ and a set $\mathscr{I} = \{1,2,3,4,5,6\}$ of $6$ items ($n=6$), with the following profits and weights:

    $$
    \begin{array}{l|cccccc}
    \hline  & {i=1} & {i=2} & {i=3} & {i=4} & {i=5} & {i=6} \\[1ex]
    \hline {p_i} & {2} & {4} & {4} & {4} & {4} & {4} \\[1ex]
    {w_i} & {1} & {4} & {4} & {4} & {4} & {4} \\
    \hline
    \end{array}
    $$

    **Questions**

    1. We apply the $H^{\ell}$ algorithm with $\ell=3$. Compute the best feasible solution made of at most $\ell-1=2$ items.

    2. For each feasible set $L$ of exactly $\ell=3$ items, compute the residual capacity $\bar c$, the residual set $\mathscr{I}(L)$, the value of $GR^e$ on the residual instance and the value $lb(L)$.

    3. State the solution returned by $H^{3}$ and $H^{3}(I)$.

    4. Determine whether $H^{3}$ finds an optimal solution on this instance, and compute the performance ratio $\frac{z(I)}{H^{3}(I)}$, comparing it with the relative performance guarantee $\frac{\ell+2}{\ell+1}=\frac{5}{4}$.

??? soluzione "Solution"

    1. The best feasible solution with at most $2$ items is $\{2,3\}$, of weight $4+4=8\le 20$ and profit $4+4=8$.

    2. For each set $L$ of $3$ items, the residual set keeps the items $j\notin L$ with $p_j\le\min\{p_i:i\in L\}$ and $w_j\le\bar c$:

        <div class="tabella" markdown="0"><table>
        <tr>
        <th>set <span class="arithmatex">\(L\)</span></th>
        <th>weight</th>
        <th><span class="arithmatex">\(\bar c\)</span></th>
        <th>residual set</th>
        <th><span class="arithmatex">\(GR^e\)</span> on the residual</th>
        <th>value</th>
        </tr>
        <tr>
        <td><span class="arithmatex">\(\{1,2,3\}\)</span></td>
        <td><span class="arithmatex">\(9\)</span></td>
        <td><span class="arithmatex">\(11\)</span></td>
        <td><span class="arithmatex">\(\varnothing\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(10\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(\{1,2,4\}\)</span></td>
        <td><span class="arithmatex">\(9\)</span></td>
        <td><span class="arithmatex">\(11\)</span></td>
        <td><span class="arithmatex">\(\varnothing\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(10\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(\{1,2,5\}\)</span></td>
        <td><span class="arithmatex">\(9\)</span></td>
        <td><span class="arithmatex">\(11\)</span></td>
        <td><span class="arithmatex">\(\varnothing\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(10\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(\{1,2,6\}\)</span></td>
        <td><span class="arithmatex">\(9\)</span></td>
        <td><span class="arithmatex">\(11\)</span></td>
        <td><span class="arithmatex">\(\varnothing\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(10\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(\{1,3,4\}\)</span></td>
        <td><span class="arithmatex">\(9\)</span></td>
        <td><span class="arithmatex">\(11\)</span></td>
        <td><span class="arithmatex">\(\varnothing\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(10\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(\{1,3,5\}\)</span></td>
        <td><span class="arithmatex">\(9\)</span></td>
        <td><span class="arithmatex">\(11\)</span></td>
        <td><span class="arithmatex">\(\varnothing\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(10\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(\{1,3,6\}\)</span></td>
        <td><span class="arithmatex">\(9\)</span></td>
        <td><span class="arithmatex">\(11\)</span></td>
        <td><span class="arithmatex">\(\varnothing\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(10\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(\{1,4,5\}\)</span></td>
        <td><span class="arithmatex">\(9\)</span></td>
        <td><span class="arithmatex">\(11\)</span></td>
        <td><span class="arithmatex">\(\varnothing\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(10\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(\{1,4,6\}\)</span></td>
        <td><span class="arithmatex">\(9\)</span></td>
        <td><span class="arithmatex">\(11\)</span></td>
        <td><span class="arithmatex">\(\varnothing\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(10\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(\{1,5,6\}\)</span></td>
        <td><span class="arithmatex">\(9\)</span></td>
        <td><span class="arithmatex">\(11\)</span></td>
        <td><span class="arithmatex">\(\varnothing\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(10\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(\{2,3,4\}\)</span></td>
        <td><span class="arithmatex">\(12\)</span></td>
        <td><span class="arithmatex">\(8\)</span></td>
        <td><span class="arithmatex">\(\{1,5,6\}\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(18\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(\{2,3,5\}\)</span></td>
        <td><span class="arithmatex">\(12\)</span></td>
        <td><span class="arithmatex">\(8\)</span></td>
        <td><span class="arithmatex">\(\{1,4,6\}\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(18\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(\{2,3,6\}\)</span></td>
        <td><span class="arithmatex">\(12\)</span></td>
        <td><span class="arithmatex">\(8\)</span></td>
        <td><span class="arithmatex">\(\{1,4,5\}\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(18\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(\{2,4,5\}\)</span></td>
        <td><span class="arithmatex">\(12\)</span></td>
        <td><span class="arithmatex">\(8\)</span></td>
        <td><span class="arithmatex">\(\{1,3,6\}\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(18\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(\{2,4,6\}\)</span></td>
        <td><span class="arithmatex">\(12\)</span></td>
        <td><span class="arithmatex">\(8\)</span></td>
        <td><span class="arithmatex">\(\{1,3,5\}\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(18\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(\{2,5,6\}\)</span></td>
        <td><span class="arithmatex">\(12\)</span></td>
        <td><span class="arithmatex">\(8\)</span></td>
        <td><span class="arithmatex">\(\{1,3,4\}\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(18\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(\{3,4,5\}\)</span></td>
        <td><span class="arithmatex">\(12\)</span></td>
        <td><span class="arithmatex">\(8\)</span></td>
        <td><span class="arithmatex">\(\{1,2,6\}\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(18\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(\{3,4,6\}\)</span></td>
        <td><span class="arithmatex">\(12\)</span></td>
        <td><span class="arithmatex">\(8\)</span></td>
        <td><span class="arithmatex">\(\{1,2,5\}\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(18\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(\{3,5,6\}\)</span></td>
        <td><span class="arithmatex">\(12\)</span></td>
        <td><span class="arithmatex">\(8\)</span></td>
        <td><span class="arithmatex">\(\{1,2,4\}\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(18\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(\{4,5,6\}\)</span></td>
        <td><span class="arithmatex">\(12\)</span></td>
        <td><span class="arithmatex">\(8\)</span></td>
        <td><span class="arithmatex">\(\{1,2,3\}\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(18\)</span></td>
        </tr>
        </table></div>

    3. The largest value is $18$, obtained with the solution $\{1,2,3,4,5\}$. Hence

        $$
        H^{3}(I)=18 .
        $$

    4. The solution $S^*=\{2,3,4,5,6\}$, of weight $4+4+4+4+4=20\le 20$ and profit $z(I)=4+4+4+4+4=20$ is better, so $H^{3}$ does <strong>not</strong> find an optimal solution; $S^*$ is optimal (this can be checked by enumerating the feasible solutions). The performance ratio is

        $$
        \frac{z(I)}{H^{3}(I)}=\frac{20}{18}\approx 1.11\;\le\;\frac{5}{4}=1.25,
        $$

        as guaranteed. For comparison, on this instance $H^2(I)=18$.

    - <strong>Remark.</strong> This instance belongs to the family of instances used to show that the relative performance guarantee $\frac{\ell+2}{\ell+1}$ of $H^{\ell}$ is tight, with $\ell=3$ and $M=4$: there $H^{\ell}(I_M)=(\ell+1)\,M+2$ and $z(I_M)=(\ell+2)\,M$, here $18$ and $20$.

<a id="esercizio-27-12"></a>

!!! esercizio "Exercise 27.12: $H^{\ell}$ 3"

    We consider a knapsack of capacity $c = 18$ and a set $\mathscr{I} = \{1,2,3,4,5,6\}$ of $6$ items ($n=6$), with the following profits and weights:

    $$
    \begin{array}{l|cccccc}
    \hline  & {i=1} & {i=2} & {i=3} & {i=4} & {i=5} & {i=6} \\[1ex]
    \hline {p_i} & {15} & {15} & {14} & {8} & {12} & {13} \\[1ex]
    {w_i} & {1} & {2} & {3} & {2} & {6} & {9} \\
    \hline
    \end{array}
    $$

    **Questions**

    1. We apply the $H^{\ell}$ algorithm with $\ell=3$. Compute the best feasible solution made of at most $\ell-1=2$ items.

    2. For each feasible set $L$ of exactly $\ell=3$ items, compute the residual capacity $\bar c$, the residual set $\mathscr{I}(L)$, the value of $GR^e$ on the residual instance and the value $lb(L)$.

    3. State the solution returned by $H^{3}$ and $H^{3}(I)$.

    4. Determine whether $H^{3}$ finds an optimal solution on this instance, and compute the performance ratio $\frac{z(I)}{H^{3}(I)}$, comparing it with the relative performance guarantee $\frac{\ell+2}{\ell+1}=\frac{5}{4}$.

??? soluzione "Solution"

    1. The best feasible solution with at most $2$ items is $\{1,2\}$, of weight $1+2=3\le 18$ and profit $15+15=30$.

    2. For each set $L$ of $3$ items, the residual set keeps the items $j\notin L$ with $p_j\le\min\{p_i:i\in L\}$ and $w_j\le\bar c$:

        <div class="tabella" markdown="0"><table>
        <tr>
        <th>set <span class="arithmatex">\(L\)</span></th>
        <th>weight</th>
        <th><span class="arithmatex">\(\bar c\)</span></th>
        <th>residual set</th>
        <th><span class="arithmatex">\(GR^e\)</span> on the residual</th>
        <th>value</th>
        </tr>
        <tr>
        <td><span class="arithmatex">\(\{1,2,3\}\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(12\)</span></td>
        <td><span class="arithmatex">\(\{4,5,6\}\)</span></td>
        <td><span class="arithmatex">\(20\)</span></td>
        <td><span class="arithmatex">\(64\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(\{1,2,4\}\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(13\)</span></td>
        <td><span class="arithmatex">\(\varnothing\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(38\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(\{1,2,5\}\)</span></td>
        <td><span class="arithmatex">\(9\)</span></td>
        <td><span class="arithmatex">\(9\)</span></td>
        <td><span class="arithmatex">\(\{4\}\)</span></td>
        <td><span class="arithmatex">\(8\)</span></td>
        <td><span class="arithmatex">\(50\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(\{1,2,6\}\)</span></td>
        <td><span class="arithmatex">\(12\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(\{4,5\}\)</span></td>
        <td><span class="arithmatex">\(12\)</span></td>
        <td><span class="arithmatex">\(55\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(\{1,3,4\}\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(12\)</span></td>
        <td><span class="arithmatex">\(\varnothing\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(37\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(\{1,3,5\}\)</span></td>
        <td><span class="arithmatex">\(10\)</span></td>
        <td><span class="arithmatex">\(8\)</span></td>
        <td><span class="arithmatex">\(\{4\}\)</span></td>
        <td><span class="arithmatex">\(8\)</span></td>
        <td><span class="arithmatex">\(49\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(\{1,3,6\}\)</span></td>
        <td><span class="arithmatex">\(13\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(\{4\}\)</span></td>
        <td><span class="arithmatex">\(8\)</span></td>
        <td><span class="arithmatex">\(50\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(\{1,4,5\}\)</span></td>
        <td><span class="arithmatex">\(9\)</span></td>
        <td><span class="arithmatex">\(9\)</span></td>
        <td><span class="arithmatex">\(\varnothing\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(35\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(\{1,4,6\}\)</span></td>
        <td><span class="arithmatex">\(12\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(\varnothing\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(36\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(\{1,5,6\}\)</span></td>
        <td><span class="arithmatex">\(16\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(\{4\}\)</span></td>
        <td><span class="arithmatex">\(8\)</span></td>
        <td><span class="arithmatex">\(48\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(\{2,3,4\}\)</span></td>
        <td><span class="arithmatex">\(7\)</span></td>
        <td><span class="arithmatex">\(11\)</span></td>
        <td><span class="arithmatex">\(\varnothing\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(37\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(\{2,3,5\}\)</span></td>
        <td><span class="arithmatex">\(11\)</span></td>
        <td><span class="arithmatex">\(7\)</span></td>
        <td><span class="arithmatex">\(\{4\}\)</span></td>
        <td><span class="arithmatex">\(8\)</span></td>
        <td><span class="arithmatex">\(49\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(\{2,3,6\}\)</span></td>
        <td><span class="arithmatex">\(14\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(\{4\}\)</span></td>
        <td><span class="arithmatex">\(8\)</span></td>
        <td><span class="arithmatex">\(50\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(\{2,4,5\}\)</span></td>
        <td><span class="arithmatex">\(10\)</span></td>
        <td><span class="arithmatex">\(8\)</span></td>
        <td><span class="arithmatex">\(\varnothing\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(35\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(\{2,4,6\}\)</span></td>
        <td><span class="arithmatex">\(13\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(\varnothing\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(36\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(\{2,5,6\}\)</span></td>
        <td><span class="arithmatex">\(17\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(\varnothing\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(40\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(\{3,4,5\}\)</span></td>
        <td><span class="arithmatex">\(11\)</span></td>
        <td><span class="arithmatex">\(7\)</span></td>
        <td><span class="arithmatex">\(\varnothing\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(34\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(\{3,4,6\}\)</span></td>
        <td><span class="arithmatex">\(14\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(\varnothing\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(35\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(\{3,5,6\}\)</span></td>
        <td><span class="arithmatex">\(18\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(\varnothing\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(39\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(\{4,5,6\}\)</span></td>
        <td><span class="arithmatex">\(17\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(\varnothing\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(33\)</span></td>
        </tr>
        </table></div>

    3. The largest value is $64$, obtained with the solution $\{1,2,3,4,5\}$. Hence

        $$
        H^{3}(I)=64 .
        $$

    4. The solution $S^*=\{1,2,3,4,6\}$, of weight $1+2+3+2+9=17\le 18$ and profit $z(I)=15+15+14+8+13=65$ is better, so $H^{3}$ does <strong>not</strong> find an optimal solution; $S^*$ is optimal (this can be checked by enumerating the feasible solutions). The performance ratio is

        $$
        \frac{z(I)}{H^{3}(I)}=\frac{65}{64}\approx 1.02\;\le\;\frac{5}{4}=1.25,
        $$

        as guaranteed. For comparison, on this instance $H^2(I)=64$.

## The FPTAS

<a id="esercizio-27-13"></a>

!!! esercizio "Exercise 27.13: Basic-FPTAS 1"

    We consider a knapsack of capacity $c = 13$ and a set $\mathscr{I} = \{1,2,3,4\}$ of $4$ items ($n=4$), with the following profits and weights:

    $$
    \begin{array}{l|cccc}
    \hline  & {i=1} & {i=2} & {i=3} & {i=4} \\[1ex]
    \hline {p_i} & {24} & {11} & {23} & {5} \\[1ex]
    {w_i} & {2} & {3} & {9} & {3} \\
    \hline
    \end{array}
    $$

    We apply the Basic-FPTAS algorithm with accuracy $\varepsilon=\frac{1}{2}$.

    **Questions**

    1. Compute the lower bound $GR^e(I)$ used by the Basic-FPTAS algorithm.

    2. Compute the scaling factor and the scaled profits

        $$
        K=\frac{\varepsilon\,GR^e(I)}{n}
        \qquad\text{and}\qquad
        p'_j=\left\lfloor\frac{p_j}{K}\right\rfloor \quad \text{for all } j\in\mathscr{I}.
        $$

    3. Solve the scaled instance by dynamic programming by profits, i.e., compute the minimum weights $u(i,q)$ and find the largest profit $q$ such that $u(4,q)\le c$.

    4. State the solution returned by $FP^{\varepsilon}$, its profit $FP^{\varepsilon}(I)$ in the original instance, and compare it with $GR^e(I)$ and $z(I)$. Compute the performance ratio and compare it with the guarantee $\frac{1}{1-\varepsilon}$.

??? soluzione "Solution"

    1. The items are sorted by non-increasing efficiency. $GR$ selects the items $\{1,2,4\}$, with $GR(I)=24+11+5=40$; the maximum profit is $\hat p=p_{1}=24$. Hence

        $$
        GR^e(I)=40 .
        $$

    2. The scaling factor is

        $$
        K=\frac{\varepsilon\,GR^e(I)}{n}=\frac{\frac{1}{2}\cdot 40}{4}=5,
        $$

        and the scaled profits are

        $$
        p'_{1}=\left\lfloor\frac{24}{5}\right\rfloor=4,\quad p'_{2}=\left\lfloor\frac{11}{5}\right\rfloor=2,\quad p'_{3}=\left\lfloor\frac{23}{5}\right\rfloor=4,\quad p'_{4}=\left\lfloor\frac{5}{5}\right\rfloor=1.
        $$

        The total scaled profit is $P'=4+2+4+1=11$.

    3. The minimum weights $u(i,q)$ of a subset of $\{1,\dots,i\}$ with scaled profit exactly $q$ are (only the values of $q$ that can be attained are reported; $\infty$ means that $q$ cannot be attained with the first $i$ items):

        $$
        \begin{array}{c|ccccccccccc}
        \hline {q} & {0} & {1} & {2} & {3} & {4} & {5} & {6} & {7} & {8} & {9} & {10} \\
        \hline {u(0,q)} & {0} & {\infty} & {\infty} & {\infty} & {\infty} & {\infty} & {\infty} & {\infty} & {\infty} & {\infty} & {\infty} \\
        {u(1,q)} & {0} & {\infty} & {\infty} & {\infty} & {2} & {\infty} & {\infty} & {\infty} & {\infty} & {\infty} & {\infty} \\
        {u(2,q)} & {0} & {\infty} & {3} & {\infty} & {2} & {\infty} & {5} & {\infty} & {\infty} & {\infty} & {\infty} \\
        {u(3,q)} & {0} & {\infty} & {3} & {\infty} & {2} & {\infty} & {5} & {\infty} & {11} & {\infty} & {14} \\
        {u(4,q)} & {0} & {3} & {3} & {6} & {2} & {5} & {5} & {8} & {11} & {14} & {14} \\
        \hline
        \end{array}
        $$

        $$
        \begin{array}{c|c}
        \hline {q} & {11} \\
        \hline {u(0,q)} & {\infty} \\
        {u(1,q)} & {\infty} \\
        {u(2,q)} & {\infty} \\
        {u(3,q)} & {\infty} \\
        {u(4,q)} & {17} \\
        \hline
        \end{array}
        $$

        The largest $q$ with $u(4,q)\le c=13$ is $q=8$, of weight $u(4,8)=11$, attained by the items $\{1,3\}$.

    4. $FP^{\varepsilon}$ returns $S=\{1,3\}$, of profit

        $$
        FP^{\varepsilon}(I)=24+23=47
        $$

        in the original instance, better than $GR^e(I)=40$. The solution is <strong>optimal</strong>: $S^*=\{1,3\}$, of weight $2+9=11\le 13$ and profit $z(I)=24+23=47$, and the performance ratio is $1$.

<a id="esercizio-27-14"></a>

!!! esercizio "Exercise 27.14: Basic-FPTAS 2"

    We consider a knapsack of capacity $c = 16$ and a set $\mathscr{I} = \{1,2,3,4\}$ of $4$ items ($n=4$), with the following profits and weights:

    $$
    \begin{array}{l|cccc}
    \hline  & {i=1} & {i=2} & {i=3} & {i=4} \\[1ex]
    \hline {p_i} & {14} & {12} & {14} & {18} \\[1ex]
    {w_i} & {3} & {4} & {5} & {7} \\
    \hline
    \end{array}
    $$

    We apply the Basic-FPTAS algorithm with accuracy $\varepsilon=\frac{1}{2}$.

    **Questions**

    1. Compute the lower bound $GR^e(I)$ used by the Basic-FPTAS algorithm.

    2. Compute the scaling factor and the scaled profits

        $$
        K=\frac{\varepsilon\,GR^e(I)}{n}
        \qquad\text{and}\qquad
        p'_j=\left\lfloor\frac{p_j}{K}\right\rfloor \quad \text{for all } j\in\mathscr{I}.
        $$

    3. Solve the scaled instance by dynamic programming by profits, i.e., compute the minimum weights $u(i,q)$ and find the largest profit $q$ such that $u(4,q)\le c$.

    4. State the solution returned by $FP^{\varepsilon}$, its profit $FP^{\varepsilon}(I)$ in the original instance, and compare it with $GR^e(I)$ and $z(I)$. Compute the performance ratio and compare it with the guarantee $\frac{1}{1-\varepsilon}$.

??? soluzione "Solution"

    1. The items are sorted by non-increasing efficiency. $GR$ selects the items $\{1,2,3\}$, with $GR(I)=14+12+14=40$; the maximum profit is $\hat p=p_{4}=18$. Hence

        $$
        GR^e(I)=40 .
        $$

    2. The scaling factor is

        $$
        K=\frac{\varepsilon\,GR^e(I)}{n}=\frac{\frac{1}{2}\cdot 40}{4}=5,
        $$

        and the scaled profits are

        $$
        p'_{1}=\left\lfloor\frac{14}{5}\right\rfloor=2,\quad p'_{2}=\left\lfloor\frac{12}{5}\right\rfloor=2,\quad p'_{3}=\left\lfloor\frac{14}{5}\right\rfloor=2,\quad p'_{4}=\left\lfloor\frac{18}{5}\right\rfloor=3.
        $$

        The total scaled profit is $P'=2+2+2+3=9$.

    3. The minimum weights $u(i,q)$ of a subset of $\{1,\dots,i\}$ with scaled profit exactly $q$ are (only the values of $q$ that can be attained are reported; $\infty$ means that $q$ cannot be attained with the first $i$ items):

        $$
        \begin{array}{c|cccccccc}
        \hline {q} & {0} & {2} & {3} & {4} & {5} & {6} & {7} & {9} \\
        \hline {u(0,q)} & {0} & {\infty} & {\infty} & {\infty} & {\infty} & {\infty} & {\infty} & {\infty} \\
        {u(1,q)} & {0} & {3} & {\infty} & {\infty} & {\infty} & {\infty} & {\infty} & {\infty} \\
        {u(2,q)} & {0} & {3} & {\infty} & {7} & {\infty} & {\infty} & {\infty} & {\infty} \\
        {u(3,q)} & {0} & {3} & {\infty} & {7} & {\infty} & {12} & {\infty} & {\infty} \\
        {u(4,q)} & {0} & {3} & {7} & {7} & {10} & {12} & {14} & {19} \\
        \hline
        \end{array}
        $$

        The largest $q$ with $u(4,q)\le c=16$ is $q=7$, of weight $u(4,7)=14$, attained by the items $\{1,2,4\}$.

    4. $FP^{\varepsilon}$ returns $S=\{1,2,4\}$, of profit

        $$
        FP^{\varepsilon}(I)=14+12+18=44
        $$

        in the original instance, better than $GR^e(I)=40$. The solution $S^*=\{1,3,4\}$, of weight $3+5+7=15\le 16$ and profit $z(I)=14+14+18=46$ is better, so $FP^{\varepsilon}$ does <strong>not</strong> find an optimal solution; $S^*$ is optimal (this can be checked by enumerating the feasible solutions). The performance ratio is

        $$
        \frac{z(I)}{FP^{\varepsilon}(I)}=\frac{46}{44}\approx 1.05\;\le\;\frac{1}{1-\varepsilon}=2,
        $$

        as guaranteed.

<a id="esercizio-27-15"></a>

!!! esercizio "Exercise 27.15: Basic-FPTAS 3"

    We consider a knapsack of capacity $c = 16$ and a set $\mathscr{I} = \{1,2,3,4\}$ of $4$ items ($n=4$), with the following profits and weights:

    $$
    \begin{array}{l|cccc}
    \hline  & {i=1} & {i=2} & {i=3} & {i=4} \\[1ex]
    \hline {p_i} & {14} & {12} & {14} & {18} \\[1ex]
    {w_i} & {3} & {4} & {5} & {7} \\
    \hline
    \end{array}
    $$

    We apply the Basic-FPTAS algorithm with accuracy $\varepsilon=\frac{1}{4}$.

    **Questions**

    1. Compute the lower bound $GR^e(I)$ used by the Basic-FPTAS algorithm.

    2. Compute the scaling factor and the scaled profits

        $$
        K=\frac{\varepsilon\,GR^e(I)}{n}
        \qquad\text{and}\qquad
        p'_j=\left\lfloor\frac{p_j}{K}\right\rfloor \quad \text{for all } j\in\mathscr{I}.
        $$

    3. Solve the scaled instance by dynamic programming by profits, i.e., compute the minimum weights $u(i,q)$ and find the largest profit $q$ such that $u(4,q)\le c$.

    4. State the solution returned by $FP^{\varepsilon}$, its profit $FP^{\varepsilon}(I)$ in the original instance, and compare it with $GR^e(I)$ and $z(I)$. Compute the performance ratio and compare it with the guarantee $\frac{1}{1-\varepsilon}$.

??? soluzione "Solution"

    1. The items are sorted by non-increasing efficiency. $GR$ selects the items $\{1,2,3\}$, with $GR(I)=14+12+14=40$; the maximum profit is $\hat p=p_{4}=18$. Hence

        $$
        GR^e(I)=40 .
        $$

    2. The scaling factor is

        $$
        K=\frac{\varepsilon\,GR^e(I)}{n}=\frac{\frac{1}{4}\cdot 40}{4}=\frac{5}{2}=2.5,
        $$

        and the scaled profits are

        $$
        p'_{1}=\left\lfloor\frac{14}{\frac{5}{2}}\right\rfloor=5,\quad p'_{2}=\left\lfloor\frac{12}{\frac{5}{2}}\right\rfloor=4,\quad p'_{3}=\left\lfloor\frac{14}{\frac{5}{2}}\right\rfloor=5,\quad p'_{4}=\left\lfloor\frac{18}{\frac{5}{2}}\right\rfloor=7.
        $$

        The total scaled profit is $P'=5+4+5+7=21$.

    3. The minimum weights $u(i,q)$ of a subset of $\{1,\dots,i\}$ with scaled profit exactly $q$ are (only the values of $q$ that can be attained are reported; $\infty$ means that $q$ cannot be attained with the first $i$ items):

        $$
        \begin{array}{c|ccccccccccc}
        \hline {q} & {0} & {4} & {5} & {7} & {9} & {10} & {11} & {12} & {14} & {16} & {17} \\
        \hline {u(0,q)} & {0} & {\infty} & {\infty} & {\infty} & {\infty} & {\infty} & {\infty} & {\infty} & {\infty} & {\infty} & {\infty} \\
        {u(1,q)} & {0} & {\infty} & {3} & {\infty} & {\infty} & {\infty} & {\infty} & {\infty} & {\infty} & {\infty} & {\infty} \\
        {u(2,q)} & {0} & {4} & {3} & {\infty} & {7} & {\infty} & {\infty} & {\infty} & {\infty} & {\infty} & {\infty} \\
        {u(3,q)} & {0} & {4} & {3} & {\infty} & {7} & {8} & {\infty} & {\infty} & {12} & {\infty} & {\infty} \\
        {u(4,q)} & {0} & {4} & {3} & {7} & {7} & {8} & {11} & {10} & {12} & {14} & {15} \\
        \hline
        \end{array}
        $$

        $$
        \begin{array}{c|c}
        \hline {q} & {21} \\
        \hline {u(0,q)} & {\infty} \\
        {u(1,q)} & {\infty} \\
        {u(2,q)} & {\infty} \\
        {u(3,q)} & {\infty} \\
        {u(4,q)} & {19} \\
        \hline
        \end{array}
        $$

        The largest $q$ with $u(4,q)\le c=16$ is $q=17$, of weight $u(4,17)=15$, attained by the items $\{1,3,4\}$.

    4. $FP^{\varepsilon}$ returns $S=\{1,3,4\}$, of profit

        $$
        FP^{\varepsilon}(I)=14+14+18=46
        $$

        in the original instance, better than $GR^e(I)=40$. The solution is <strong>optimal</strong>: $S^*=\{1,3,4\}$, of weight $3+5+7=15\le 16$ and profit $z(I)=14+14+18=46$, and the performance ratio is $1$.

    - <strong>Remark.</strong> This is the instance of the exercise Basic-FPTAS 2, solved there with $\varepsilon=\frac{1}{2}$. Halving $\varepsilon$ halves the scaling factor $K$: the scaled profits are finer, the dynamic programming table is longer ($P'$ grows), and the optimal solution is found.
