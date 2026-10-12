---
title: "Exercises · Constructive heuristics"
---

# Exercises · Constructive heuristics

<div class="info-capitolo" markdown>

**Exercises · Chapter 30** · each solution opens with a click · [:material-book-open-variant: Chapter 30: Constructive](../heuristic-algorithms/constructive-heuristics/index.md) · [:material-file-pdf-box: Exercises, volume 4 (PDF)](../pdf/exercises-4-heuristic-algorithms.pdf)

</div>

## Knapsack: orderings of the items

<a id="esercizio-30-1"></a>

!!! esercizio "Exercise 30.1: Greedy orders for the KP 1"

    We consider a knapsack of capacity $c=9$ and a set $\mathscr{I}=\{1,\dots,5\}$ of $5$ items ($n=5$), with the following profits and weights:

    $$
    \begin{array}{l|ccccc}
    \hline  & {i=1} & {i=2} & {i=3} & {i=4} & {i=5} \\[1ex]
    \hline {p_i} & {4} & {15} & {11} & {8} & {2} \\[1ex]
    {w_i} & {3} & {8} & {7} & {2} & {5} \\
    \hline
    \end{array}
    $$

    **Questions**

    1. Sort the items by non-increasing profit, by non-decreasing weight and by non-increasing efficiency $\frac{p_i}{w_i}$ (ties by index).

    2. Apply the greedy algorithm with each of the three orders ($GR_p$, $GR_w$, $GR$), showing the residual capacity $rc$ after each step, and give the three solutions and their profits.

    3. Compute the upper bound $U$ given by the LP relaxation (items by non-increasing efficiency, the split item taken fractionally) and the gap $\frac{\lfloor U\rfloor-\mathscr{A}(I)}{\mathscr{A}(I)}$ of the best of the three solutions.

    4. Knowing that the optimal value is $z(I)=19$, say which orders find an optimal solution, and compute the relative error of the others. Explain what goes wrong.

??? soluzione "Solution"

    1. The efficiencies are

        \begin{gather*}
        \frac{p_{1}}{w_{1}}=\frac{4}{3}\approx 1.33,\quad \frac{p_{2}}{w_{2}}=\frac{15}{8}\approx 1.88,\quad \frac{p_{3}}{w_{3}}=\frac{11}{7}\approx 1.57,\\
        \frac{p_{4}}{w_{4}}=\frac{8}{2}\approx 4.00,\quad \frac{p_{5}}{w_{5}}=\frac{2}{5}\approx 0.40
        \end{gather*}

        and the three orders are

        <div class="tabella" markdown="0"><table>
        <tr>
        <th>criterion</th>
        <th>order</th>
        </tr>
        <tr>
        <td>profit</td>
        <td><span class="arithmatex">\((2,3,4,1,5)\)</span></td>
        </tr>
        <tr>
        <td>weight</td>
        <td><span class="arithmatex">\((4,1,5,3,2)\)</span></td>
        </tr>
        <tr>
        <td>efficiency</td>
        <td><span class="arithmatex">\((4,2,3,1,5)\)</span></td>
        </tr>
        </table></div>

    2. <strong>$GR_p$</strong>, order $(2,3,4,1,5)$, starting from $rc=9$:

        - item $2$ ($w_{2}=8\le rc=9$): selected, $rc\leftarrow 1$;

        - item $3$ ($w_{3}=7> rc=1$): not selected;

        - item $4$ ($w_{4}=2> rc=1$): not selected;

        - item $1$ ($w_{1}=3> rc=1$): not selected;

        - item $5$ ($w_{5}=5> rc=1$): not selected;

        Solution $\{2\}$, $GR_p(I)=15$.

        <strong>$GR_w$</strong>, order $(4,1,5,3,2)$, starting from $rc=9$:

        - item $4$ ($w_{4}=2\le rc=9$): selected, $rc\leftarrow 7$;

        - item $1$ ($w_{1}=3\le rc=7$): selected, $rc\leftarrow 4$;

        - item $5$ ($w_{5}=5> rc=4$): not selected;

        - item $3$ ($w_{3}=7> rc=4$): not selected;

        - item $2$ ($w_{2}=8> rc=4$): not selected;

        Solution $\{1,4\}$, $GR_w(I)=4+8=12$.

        <strong>$GR$</strong>, order $(4,2,3,1,5)$, starting from $rc=9$:

        - item $4$ ($w_{4}=2\le rc=9$): selected, $rc\leftarrow 7$;

        - item $2$ ($w_{2}=8> rc=7$): not selected;

        - item $3$ ($w_{3}=7\le rc=7$): selected, $rc\leftarrow 0$;

        - item $1$ ($w_{1}=3> rc=0$): not selected;

        - item $5$ ($w_{5}=5> rc=0$): not selected;

        Solution $\{3,4\}$, $GR(I)=11+8=19$.

    3. In the efficiency order $(4,2,3,1,5)$ the items $\{4\}$ fit, with total weight $2$, and the split item is $2$, with residual capacity $\bar c=7$. Hence

        $$
        U=8+15\cdot\frac{7}{8}=\frac{169}{8}\approx 21.12,\qquad \lfloor U\rfloor=21.
        $$

        The best of the three solutions has profit $19$, and

        $$
        gap(I)=\frac{21-19}{19}\approx 10.5\%.
        $$

    4. The optimal solution is $\{3,4\}$, with $z(I)=19$ (the bound $\lfloor U\rfloor=21$ is not attained: here the gap overestimates the error). Only $GR$ finds it. $GR_p$ takes item $2$, the most valuable but also the heaviest, which leaves room for nothing else of value: $GR_p(I)=15$, relative error 21.1%. $GR_w$ fills the knapsack with the two lightest items, $4$ and $1$, which have little value: $GR_w(I)=12$, relative error 36.8%. On this instance efficiency is the right criterion.

<a id="esercizio-30-2"></a>

!!! esercizio "Exercise 30.2: Greedy orders for the KP 2"

    We consider a knapsack of capacity $c=13$ and a set $\mathscr{I}=\{1,\dots,5\}$ of $5$ items ($n=5$), with the following profits and weights:

    $$
    \begin{array}{l|ccccc}
    \hline  & {i=1} & {i=2} & {i=3} & {i=4} & {i=5} \\[1ex]
    \hline {p_i} & {9} & {4} & {8} & {6} & {7} \\[1ex]
    {w_i} & {7} & {2} & {9} & {5} & {6} \\
    \hline
    \end{array}
    $$

    **Questions**

    1. Sort the items by non-increasing profit, by non-decreasing weight and by non-increasing efficiency $\frac{p_i}{w_i}$ (ties by index).

    2. Apply the greedy algorithm with each of the three orders ($GR_p$, $GR_w$, $GR$), showing the residual capacity $rc$ after each step, and give the three solutions and their profits.

    3. Compute the upper bound $U$ given by the LP relaxation (items by non-increasing efficiency, the split item taken fractionally) and the gap $\frac{\lfloor U\rfloor-\mathscr{A}(I)}{\mathscr{A}(I)}$ of the best of the three solutions.

    4. Is any of the three solutions optimal? Compute the relative error of the others, and explain why the order by efficiency fails on this instance.

??? soluzione "Solution"

    1. The efficiencies are

        \begin{gather*}
        \frac{p_{1}}{w_{1}}=\frac{9}{7}\approx 1.29,\quad \frac{p_{2}}{w_{2}}=\frac{4}{2}\approx 2.00,\quad \frac{p_{3}}{w_{3}}=\frac{8}{9}\approx 0.89,\\
        \frac{p_{4}}{w_{4}}=\frac{6}{5}\approx 1.20,\quad \frac{p_{5}}{w_{5}}=\frac{7}{6}\approx 1.17
        \end{gather*}

        and the three orders are

        <div class="tabella" markdown="0"><table>
        <tr>
        <th>criterion</th>
        <th>order</th>
        </tr>
        <tr>
        <td>profit</td>
        <td><span class="arithmatex">\((1,3,5,4,2)\)</span></td>
        </tr>
        <tr>
        <td>weight</td>
        <td><span class="arithmatex">\((2,4,5,1,3)\)</span></td>
        </tr>
        <tr>
        <td>efficiency</td>
        <td><span class="arithmatex">\((2,1,4,5,3)\)</span></td>
        </tr>
        </table></div>

    2. <strong>$GR_p$</strong>, order $(1,3,5,4,2)$, starting from $rc=13$:

        - item $1$ ($w_{1}=7\le rc=13$): selected, $rc\leftarrow 6$;

        - item $3$ ($w_{3}=9> rc=6$): not selected;

        - item $5$ ($w_{5}=6\le rc=6$): selected, $rc\leftarrow 0$;

        - item $4$ ($w_{4}=5> rc=0$): not selected;

        - item $2$ ($w_{2}=2> rc=0$): not selected;

        Solution $\{1,5\}$, $GR_p(I)=9+7=16$.

        <strong>$GR_w$</strong>, order $(2,4,5,1,3)$, starting from $rc=13$:

        - item $2$ ($w_{2}=2\le rc=13$): selected, $rc\leftarrow 11$;

        - item $4$ ($w_{4}=5\le rc=11$): selected, $rc\leftarrow 6$;

        - item $5$ ($w_{5}=6\le rc=6$): selected, $rc\leftarrow 0$;

        - item $1$ ($w_{1}=7> rc=0$): not selected;

        - item $3$ ($w_{3}=9> rc=0$): not selected;

        Solution $\{2,4,5\}$, $GR_w(I)=4+6+7=17$.

        <strong>$GR$</strong>, order $(2,1,4,5,3)$, starting from $rc=13$:

        - item $2$ ($w_{2}=2\le rc=13$): selected, $rc\leftarrow 11$;

        - item $1$ ($w_{1}=7\le rc=11$): selected, $rc\leftarrow 4$;

        - item $4$ ($w_{4}=5> rc=4$): not selected;

        - item $5$ ($w_{5}=6> rc=4$): not selected;

        - item $3$ ($w_{3}=9> rc=4$): not selected;

        Solution $\{1,2\}$, $GR(I)=9+4=13$.

    3. In the efficiency order $(2,1,4,5,3)$ the items $\{2,1\}$ fit, with total weight $9$, and the split item is $4$, with residual capacity $\bar c=4$. Hence

        $$
        U=4+9+6\cdot\frac{4}{5}=\frac{89}{5}\approx 17.80,\qquad \lfloor U\rfloor=17.
        $$

        The best of the three solutions has profit $17$, and

        $$
        gap(I)=\frac{17-17}{17}=0\%.
        $$

    4. $GR_w(I)=17=\lfloor U\rfloor$, so the solution $\{2,4,5\}$ of $GR_w$ is optimal and $z(I)=17$. $GR$ fails: after the two most efficient items $2$ and $1$ the residual capacity is $13-9=4$, too small for any other item, and $GR(I)=13$, relative error 23.5%. $GR_p(I)=16$ is also worse than $GR_w$, with relative error $\frac{17-16}{17}\approx 5.9\%$. Three light items fill the knapsack exactly ($2+5+6=13$): here what matters is how well the items fill the capacity, which the efficiency ignores.

<a id="esercizio-30-3"></a>

!!! esercizio "Exercise 30.3: Greedy orders for the KP 3"

    We consider a knapsack of capacity $c=10$ and a set $\mathscr{I}=\{1,\dots,5\}$ of $5$ items ($n=5$), with the following profits and weights:

    $$
    \begin{array}{l|ccccc}
    \hline  & {i=1} & {i=2} & {i=3} & {i=4} & {i=5} \\[1ex]
    \hline {p_i} & {8} & {13} & {5} & {12} & {7} \\[1ex]
    {w_i} & {5} & {9} & {4} & {8} & {2} \\
    \hline
    \end{array}
    $$

    **Questions**

    1. Sort the items by non-increasing profit, by non-decreasing weight and by non-increasing efficiency $\frac{p_i}{w_i}$ (ties by index).

    2. Apply the greedy algorithm with each of the three orders ($GR_p$, $GR_w$, $GR$), showing the residual capacity $rc$ after each step, and give the three solutions and their profits.

    3. Compute the upper bound $U$ given by the LP relaxation (items by non-increasing efficiency, the split item taken fractionally) and the gap $\frac{\lfloor U\rfloor-\mathscr{A}(I)}{\mathscr{A}(I)}$ of the best of the three solutions.

    4. Find a feasible solution of profit $\lfloor U\rfloor$, and compute the relative error of each of the three greedy solutions. Which choice prevents the greedy by efficiency from finding it?

??? soluzione "Solution"

    1. The efficiencies are

        \begin{gather*}
        \frac{p_{1}}{w_{1}}=\frac{8}{5}\approx 1.60,\quad \frac{p_{2}}{w_{2}}=\frac{13}{9}\approx 1.44,\quad \frac{p_{3}}{w_{3}}=\frac{5}{4}\approx 1.25,\\
        \frac{p_{4}}{w_{4}}=\frac{12}{8}\approx 1.50,\quad \frac{p_{5}}{w_{5}}=\frac{7}{2}\approx 3.50
        \end{gather*}

        and the three orders are

        <div class="tabella" markdown="0"><table>
        <tr>
        <th>criterion</th>
        <th>order</th>
        </tr>
        <tr>
        <td>profit</td>
        <td><span class="arithmatex">\((2,4,1,5,3)\)</span></td>
        </tr>
        <tr>
        <td>weight</td>
        <td><span class="arithmatex">\((5,3,1,4,2)\)</span></td>
        </tr>
        <tr>
        <td>efficiency</td>
        <td><span class="arithmatex">\((5,1,4,2,3)\)</span></td>
        </tr>
        </table></div>

    2. <strong>$GR_p$</strong>, order $(2,4,1,5,3)$, starting from $rc=10$:

        - item $2$ ($w_{2}=9\le rc=10$): selected, $rc\leftarrow 1$;

        - item $4$ ($w_{4}=8> rc=1$): not selected;

        - item $1$ ($w_{1}=5> rc=1$): not selected;

        - item $5$ ($w_{5}=2> rc=1$): not selected;

        - item $3$ ($w_{3}=4> rc=1$): not selected;

        Solution $\{2\}$, $GR_p(I)=13$.

        <strong>$GR_w$</strong>, order $(5,3,1,4,2)$, starting from $rc=10$:

        - item $5$ ($w_{5}=2\le rc=10$): selected, $rc\leftarrow 8$;

        - item $3$ ($w_{3}=4\le rc=8$): selected, $rc\leftarrow 4$;

        - item $1$ ($w_{1}=5> rc=4$): not selected;

        - item $4$ ($w_{4}=8> rc=4$): not selected;

        - item $2$ ($w_{2}=9> rc=4$): not selected;

        Solution $\{3,5\}$, $GR_w(I)=5+7=12$.

        <strong>$GR$</strong>, order $(5,1,4,2,3)$, starting from $rc=10$:

        - item $5$ ($w_{5}=2\le rc=10$): selected, $rc\leftarrow 8$;

        - item $1$ ($w_{1}=5\le rc=8$): selected, $rc\leftarrow 3$;

        - item $4$ ($w_{4}=8> rc=3$): not selected;

        - item $2$ ($w_{2}=9> rc=3$): not selected;

        - item $3$ ($w_{3}=4> rc=3$): not selected;

        Solution $\{1,5\}$, $GR(I)=8+7=15$.

    3. In the efficiency order $(5,1,4,2,3)$ the items $\{5,1\}$ fit, with total weight $7$, and the split item is $4$, with residual capacity $\bar c=3$. Hence

        $$
        U=7+8+12\cdot\frac{3}{8}=\frac{39}{2}\approx 19.50,\qquad \lfloor U\rfloor=19.
        $$

        The best of the three solutions has profit $15$, and

        $$
        gap(I)=\frac{19-15}{15}\approx 26.7\%.
        $$

    4. Since $GR(I)=15<\lfloor U\rfloor$, the bound does not certify optimality. Indeed the solution $\{4,5\}$ has weight $8+2=10\le 10$ and profit $19=\lfloor U\rfloor$, so it is optimal, $z(I)=19$. The relative errors are 31.6% for $GR_p$, 36.8% for $GR_w$ and 21.1% for $GR$: no order finds the optimum. The optimal solution combines the most efficient item $5$ with item $4$, which comes third in the efficiency order: after item $1$ is selected, item $4$ no longer fits, and the choice of item $1$ is never revised.

## Bin packing: decreasing heuristics

<a id="esercizio-30-4"></a>

!!! esercizio "Exercise 30.4: Decreasing bin packing 1"

    We consider bins of capacity $c=10$ and a set $\mathscr{I}=\{1,\dots,7\}$ of $7$ items ($n=7$), with the following weights:

    $$
    \begin{array}{l|ccccccc}
    \hline  & {i=1} & {i=2} & {i=3} & {i=4} & {i=5} & {i=6} & {i=7} \\[1ex]
    \hline {w_i} & {3} & {3} & {5} & {2} & {6} & {2} & {6} \\
    \hline
    \end{array}
    $$

    **Questions**

    1. Apply First Fit (FF) to the items in the input order, step by step, and give the packing patterns.

    2. Sort the items by non-increasing weight (ties by index) and apply First Fit Decreasing (FFD).

    3. Apply Best Fit Decreasing (BFD), and compare its packing patterns with those of FFD.

    4. Compute the lower bound $\left\lceil\frac{\sum_i w_i}{c}\right\rceil$. Which solutions are optimal? Explain why sorting helps here.

??? soluzione "Solution"

    1. 1. Item $1$ (weight $3$): open bin $1$, $rc[1]=7$.

        2. Item $2$ (weight $3$): first bin that fits ($rc[1]=7$): bin $1$, $rc[1]=4$.

        3. Item $3$ (weight $5$): fits into no bin ($rc[1]=4$): open bin $2$, $rc[2]=5$.

        4. Item $4$ (weight $2$): first bin that fits ($rc[1]=4$, $rc[2]=5$): bin $1$, $rc[1]=2$.

        5. Item $5$ (weight $6$): fits into no bin ($rc[1]=2$, $rc[2]=5$): open bin $3$, $rc[3]=4$.

        6. Item $6$ (weight $2$): first bin that fits ($rc[1]=2$, $rc[2]=5$, $rc[3]=4$): bin $1$, $rc[1]=0$.

        7. Item $7$ (weight $6$): fits into no bin ($rc[1]=0$, $rc[2]=5$, $rc[3]=4$): open bin $4$, $rc[4]=4$.

        The packing patterns are

        $$
        P_{1}=\{1,2,4,6\},\quad P_{2}=\{3\},\quad P_{3}=\{5\},\quad P_{4}=\{7\}
        $$

        and $FF(I)=4$.

    2. The order is $\sigma=(5,7,3,1,2,4,6)$ (weights $6,6,5,3,3,2,2$).

        1. Item $5$ (weight $6$): open bin $1$, $rc[1]=4$.

        2. Item $7$ (weight $6$): fits into no bin ($rc[1]=4$): open bin $2$, $rc[2]=4$.

        3. Item $3$ (weight $5$): fits into no bin ($rc[1]=4$, $rc[2]=4$): open bin $3$, $rc[3]=5$.

        4. Item $1$ (weight $3$): first bin that fits ($rc[1]=4$, $rc[2]=4$, $rc[3]=5$): bin $1$, $rc[1]=1$.

        5. Item $2$ (weight $3$): first bin that fits ($rc[1]=1$, $rc[2]=4$, $rc[3]=5$): bin $2$, $rc[2]=1$.

        6. Item $4$ (weight $2$): first bin that fits ($rc[1]=1$, $rc[2]=1$, $rc[3]=5$): bin $3$, $rc[3]=3$.

        7. Item $6$ (weight $2$): first bin that fits ($rc[1]=1$, $rc[2]=1$, $rc[3]=3$): bin $3$, $rc[3]=1$.

        The packing patterns are

        $$
        P_{1}=\{1,5\},\quad P_{2}=\{2,7\},\quad P_{3}=\{3,4,6\}
        $$

        and $FFD(I)=3$.

    3. The order is $\sigma=(5,7,3,1,2,4,6)$ (weights $6,6,5,3,3,2,2$).

        1. Item $5$ (weight $6$): open bin $1$, $rc[1]=4$.

        2. Item $7$ (weight $6$): fits into no bin ($rc[1]=4$): open bin $2$, $rc[2]=4$.

        3. Item $3$ (weight $5$): fits into no bin ($rc[1]=4$, $rc[2]=4$): open bin $3$, $rc[3]=5$.

        4. Item $1$ (weight $3$): fits into bins $1, 2, 3$; the fullest is bin $1$ ($rc[1]=4$, $rc[2]=4$, $rc[3]=5$): bin $1$, $rc[1]=1$.

        5. Item $2$ (weight $3$): fits into bins $2, 3$; the fullest is bin $2$ ($rc[1]=1$, $rc[2]=4$, $rc[3]=5$): bin $2$, $rc[2]=1$.

        6. Item $4$ (weight $2$): fits only into bin $3$ ($rc[1]=1$, $rc[2]=1$, $rc[3]=5$): bin $3$, $rc[3]=3$.

        7. Item $6$ (weight $2$): fits only into bin $3$ ($rc[1]=1$, $rc[2]=1$, $rc[3]=3$): bin $3$, $rc[3]=1$.

        The packing patterns are

        $$
        P_{1}=\{1,5\},\quad P_{2}=\{2,7\},\quad P_{3}=\{3,4,6\}
        $$

        and $BFD(I)=3$.

    4. The total weight is $27$, so $LB=\left\lceil\frac{27}{10}\right\rceil=3$. FFD and BFD use $3$ bins and are therefore optimal, $z(I)=3$, while FF uses $4$. In the input order the four small items ($1$, $2$, $4$, $6$, of weights $3,3,2,2$) all end up together in bin $1$, and the large items $3$, $5$, $7$ get a bin each, with gaps $5$, $4$, $4$ that no item is left to fill. Sorting packs the large items first, and the small items fill their gaps: the right order wins.

<a id="esercizio-30-5"></a>

!!! esercizio "Exercise 30.5: Decreasing bin packing 2"

    We consider bins of capacity $c=10$ and a set $\mathscr{I}=\{1,\dots,8\}$ of $8$ items ($n=8$), with the following weights:

    $$
    \begin{array}{l|cccccccc}
    \hline  & {i=1} & {i=2} & {i=3} & {i=4} & {i=5} & {i=6} & {i=7} & {i=8} \\[1ex]
    \hline {w_i} & {2} & {6} & {3} & {5} & {4} & {2} & {6} & {2} \\
    \hline
    \end{array}
    $$

    **Questions**

    1. Apply First Fit (FF) to the items in the input order, step by step, and give the packing patterns.

    2. Sort the items by non-increasing weight (ties by index) and apply First Fit Decreasing (FFD).

    3. Apply Best Fit Decreasing (BFD), and compare its packing patterns with those of FFD.

    4. Compute the lower bound $\left\lceil\frac{\sum_i w_i}{c}\right\rceil$. Which solutions are optimal? Explain why sorting does not help here.

??? soluzione "Solution"

    1. 1. Item $1$ (weight $2$): open bin $1$, $rc[1]=8$.

        2. Item $2$ (weight $6$): first bin that fits ($rc[1]=8$): bin $1$, $rc[1]=2$.

        3. Item $3$ (weight $3$): fits into no bin ($rc[1]=2$): open bin $2$, $rc[2]=7$.

        4. Item $4$ (weight $5$): first bin that fits ($rc[1]=2$, $rc[2]=7$): bin $2$, $rc[2]=2$.

        5. Item $5$ (weight $4$): fits into no bin ($rc[1]=2$, $rc[2]=2$): open bin $3$, $rc[3]=6$.

        6. Item $6$ (weight $2$): first bin that fits ($rc[1]=2$, $rc[2]=2$, $rc[3]=6$): bin $1$, $rc[1]=0$.

        7. Item $7$ (weight $6$): first bin that fits ($rc[1]=0$, $rc[2]=2$, $rc[3]=6$): bin $3$, $rc[3]=0$.

        8. Item $8$ (weight $2$): first bin that fits ($rc[1]=0$, $rc[2]=2$, $rc[3]=0$): bin $2$, $rc[2]=0$.

        The packing patterns are

        $$
        P_{1}=\{1,2,6\},\quad P_{2}=\{3,4,8\},\quad P_{3}=\{5,7\}
        $$

        and $FF(I)=3$.

    2. The order is $\sigma=(2,7,4,5,3,1,6,8)$ (weights $6,6,5,4,3,2,2,2$).

        1. Item $2$ (weight $6$): open bin $1$, $rc[1]=4$.

        2. Item $7$ (weight $6$): fits into no bin ($rc[1]=4$): open bin $2$, $rc[2]=4$.

        3. Item $4$ (weight $5$): fits into no bin ($rc[1]=4$, $rc[2]=4$): open bin $3$, $rc[3]=5$.

        4. Item $5$ (weight $4$): first bin that fits ($rc[1]=4$, $rc[2]=4$, $rc[3]=5$): bin $1$, $rc[1]=0$.

        5. Item $3$ (weight $3$): first bin that fits ($rc[1]=0$, $rc[2]=4$, $rc[3]=5$): bin $2$, $rc[2]=1$.

        6. Item $1$ (weight $2$): first bin that fits ($rc[1]=0$, $rc[2]=1$, $rc[3]=5$): bin $3$, $rc[3]=3$.

        7. Item $6$ (weight $2$): first bin that fits ($rc[1]=0$, $rc[2]=1$, $rc[3]=3$): bin $3$, $rc[3]=1$.

        8. Item $8$ (weight $2$): fits into no bin ($rc[1]=0$, $rc[2]=1$, $rc[3]=1$): open bin $4$, $rc[4]=8$.

        The packing patterns are

        $$
        P_{1}=\{2,5\},\quad P_{2}=\{3,7\},\quad P_{3}=\{1,4,6\},\quad P_{4}=\{8\}
        $$

        and $FFD(I)=4$.

    3. The order is $\sigma=(2,7,4,5,3,1,6,8)$ (weights $6,6,5,4,3,2,2,2$).

        1. Item $2$ (weight $6$): open bin $1$, $rc[1]=4$.

        2. Item $7$ (weight $6$): fits into no bin ($rc[1]=4$): open bin $2$, $rc[2]=4$.

        3. Item $4$ (weight $5$): fits into no bin ($rc[1]=4$, $rc[2]=4$): open bin $3$, $rc[3]=5$.

        4. Item $5$ (weight $4$): fits into bins $1, 2, 3$; the fullest is bin $1$ ($rc[1]=4$, $rc[2]=4$, $rc[3]=5$): bin $1$, $rc[1]=0$.

        5. Item $3$ (weight $3$): fits into bins $2, 3$; the fullest is bin $2$ ($rc[1]=0$, $rc[2]=4$, $rc[3]=5$): bin $2$, $rc[2]=1$.

        6. Item $1$ (weight $2$): fits only into bin $3$ ($rc[1]=0$, $rc[2]=1$, $rc[3]=5$): bin $3$, $rc[3]=3$.

        7. Item $6$ (weight $2$): fits only into bin $3$ ($rc[1]=0$, $rc[2]=1$, $rc[3]=3$): bin $3$, $rc[3]=1$.

        8. Item $8$ (weight $2$): fits into no bin ($rc[1]=0$, $rc[2]=1$, $rc[3]=1$): open bin $4$, $rc[4]=8$.

        The packing patterns are

        $$
        P_{1}=\{2,5\},\quad P_{2}=\{3,7\},\quad P_{3}=\{1,4,6\},\quad P_{4}=\{8\}
        $$

        and $BFD(I)=4$.

    4. The total weight is $30$, so $LB=\left\lceil\frac{30}{10}\right\rceil=3$: FF, with $3$ bins, is optimal, $z(I)=3$, while FFD and BFD use $4$ bins. In the sorted order the two items of weight $6$ are paired with the items of weight $4$ and $3$, which leaves a gap of $1$ in bin $2$; bin $3$ also ends with a gap of $1$, and the last item of weight $2$ fits nowhere. The input order happens to produce three full bins ($2+6+2$, $3+5+2$, $4+6$). A good guarantee in the worst case ($\frac{11}{9}$ for FFD) does not mean a better solution on every instance: here sorting hurts.

<a id="esercizio-30-6"></a>

!!! esercizio "Exercise 30.6: Decreasing bin packing 3"

    We consider bins of capacity $c=10$ and a set $\mathscr{I}=\{1,\dots,7\}$ of $7$ items ($n=7$), with the following weights:

    $$
    \begin{array}{l|ccccccc}
    \hline  & {i=1} & {i=2} & {i=3} & {i=4} & {i=5} & {i=6} & {i=7} \\[1ex]
    \hline {w_i} & {4} & {4} & {5} & {7} & {2} & {2} & {4} \\
    \hline
    \end{array}
    $$

    **Questions**

    1. Apply First Fit (FF) to the items in the input order, step by step, and give the packing patterns.

    2. Sort the items by non-increasing weight (ties by index) and apply First Fit Decreasing (FFD).

    3. Apply Best Fit Decreasing (BFD), and compare its packing patterns with those of FFD.

    4. Compute the lower bound $\left\lceil\frac{\sum_i w_i}{c}\right\rceil$ and compare the four rules FF, BF (both in the input order), FFD and BFD.

??? soluzione "Solution"

    1. 1. Item $1$ (weight $4$): open bin $1$, $rc[1]=6$.

        2. Item $2$ (weight $4$): first bin that fits ($rc[1]=6$): bin $1$, $rc[1]=2$.

        3. Item $3$ (weight $5$): fits into no bin ($rc[1]=2$): open bin $2$, $rc[2]=5$.

        4. Item $4$ (weight $7$): fits into no bin ($rc[1]=2$, $rc[2]=5$): open bin $3$, $rc[3]=3$.

        5. Item $5$ (weight $2$): first bin that fits ($rc[1]=2$, $rc[2]=5$, $rc[3]=3$): bin $1$, $rc[1]=0$.

        6. Item $6$ (weight $2$): first bin that fits ($rc[1]=0$, $rc[2]=5$, $rc[3]=3$): bin $2$, $rc[2]=3$.

        7. Item $7$ (weight $4$): fits into no bin ($rc[1]=0$, $rc[2]=3$, $rc[3]=3$): open bin $4$, $rc[4]=6$.

        The packing patterns are

        $$
        P_{1}=\{1,2,5\},\quad P_{2}=\{3,6\},\quad P_{3}=\{4\},\quad P_{4}=\{7\}
        $$

        and $FF(I)=4$.

    2. The order is $\sigma=(4,3,1,2,7,5,6)$ (weights $7,5,4,4,4,2,2$).

        1. Item $4$ (weight $7$): open bin $1$, $rc[1]=3$.

        2. Item $3$ (weight $5$): fits into no bin ($rc[1]=3$): open bin $2$, $rc[2]=5$.

        3. Item $1$ (weight $4$): first bin that fits ($rc[1]=3$, $rc[2]=5$): bin $2$, $rc[2]=1$.

        4. Item $2$ (weight $4$): fits into no bin ($rc[1]=3$, $rc[2]=1$): open bin $3$, $rc[3]=6$.

        5. Item $7$ (weight $4$): first bin that fits ($rc[1]=3$, $rc[2]=1$, $rc[3]=6$): bin $3$, $rc[3]=2$.

        6. Item $5$ (weight $2$): first bin that fits ($rc[1]=3$, $rc[2]=1$, $rc[3]=2$): bin $1$, $rc[1]=1$.

        7. Item $6$ (weight $2$): first bin that fits ($rc[1]=1$, $rc[2]=1$, $rc[3]=2$): bin $3$, $rc[3]=0$.

        The packing patterns are

        $$
        P_{1}=\{4,5\},\quad P_{2}=\{1,3\},\quad P_{3}=\{2,6,7\}
        $$

        and $FFD(I)=3$.

    3. The order is $\sigma=(4,3,1,2,7,5,6)$ (weights $7,5,4,4,4,2,2$).

        1. Item $4$ (weight $7$): open bin $1$, $rc[1]=3$.

        2. Item $3$ (weight $5$): fits into no bin ($rc[1]=3$): open bin $2$, $rc[2]=5$.

        3. Item $1$ (weight $4$): fits only into bin $2$ ($rc[1]=3$, $rc[2]=5$): bin $2$, $rc[2]=1$.

        4. Item $2$ (weight $4$): fits into no bin ($rc[1]=3$, $rc[2]=1$): open bin $3$, $rc[3]=6$.

        5. Item $7$ (weight $4$): fits only into bin $3$ ($rc[1]=3$, $rc[2]=1$, $rc[3]=6$): bin $3$, $rc[3]=2$.

        6. Item $5$ (weight $2$): fits into bins $1, 3$; the fullest is bin $3$ ($rc[1]=3$, $rc[2]=1$, $rc[3]=2$): bin $3$, $rc[3]=0$.

        7. Item $6$ (weight $2$): fits only into bin $1$ ($rc[1]=3$, $rc[2]=1$, $rc[3]=0$): bin $1$, $rc[1]=1$.

        The packing patterns are

        $$
        P_{1}=\{4,6\},\quad P_{2}=\{1,3\},\quad P_{3}=\{2,5,7\}
        $$

        and $BFD(I)=3$.

    4. The total weight is $28$, so $LB=\left\lceil\frac{28}{10}\right\rceil=3$, and FFD and BFD are both optimal, $z(I)=3$, with different packing patterns: item $5$, of weight $2$, examined right after item $7$, goes into bin $1$ in FFD (the first bin that fits) and into bin $3$ in BFD (the fullest one), and the two rules end with different, equally good, solutions. In the input order, FF needs $4$ bins while BF (Best Fit without sorting) finds $3$, with patterns $P_{1}=\{1,2,5\},\quad P_{2}=\{3,7\},\quad P_{3}=\{4,6\}$. On this instance the choice of the bin matters for the unsorted rules, while after sorting both choices give the optimal number of bins.

## $P\|C_{\max}$: LIST and LPT

<a id="esercizio-30-7"></a>

!!! esercizio "Exercise 30.7: List scheduling and LPT 1"

    We consider $m=3$ identical machines and a set $\mathscr{J}=\{1,\dots,8\}$ of $8$ jobs ($n=8$), with the following processing times:

    $$
    \begin{array}{l|cccccccc}
    \hline  & {j=1} & {j=2} & {j=3} & {j=4} & {j=5} & {j=6} & {j=7} & {j=8} \\[1ex]
    \hline {t_j} & {2} & {8} & {7} & {6} & {8} & {3} & {4} & {9} \\
    \hline
    \end{array}
    $$

    **Questions**

    1. Apply list scheduling ($LIST$) with the jobs in the input order, showing the loads before each assignment.

    2. Apply $LPT$: sort the jobs by non-increasing processing time (ties by index) and apply list scheduling.

    3. Compute the lower bound $\max\left\{\max_j t_j,\left\lceil\frac{\sum_j t_j}{m}\right\rceil\right\}$ and the gaps of the two solutions.

    4. Is the $LPT$ solution optimal? Explain why the input order performs worse.

??? soluzione "Solution"

    1. &#8203;

        <div class="tabella" markdown="0"><table>
        <tr>
        <th>job <span class="arithmatex">\(j\)</span></th>
        <th><span class="arithmatex">\(t_j\)</span></th>
        <th>loads before</th>
        <th>machine</th>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\((0,0,0)\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(8\)</span></td>
        <td><span class="arithmatex">\((2,0,0)\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(7\)</span></td>
        <td><span class="arithmatex">\((2,8,0)\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\((2,8,7)\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(8\)</span></td>
        <td><span class="arithmatex">\((8,8,7)\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\((8,8,15)\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(7\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\((11,8,15)\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(8\)</span></td>
        <td><span class="arithmatex">\(9\)</span></td>
        <td><span class="arithmatex">\((11,12,15)\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        </tr>
        </table></div>

        The sets are $J_{1}=\{1,4,6,8\},\quad J_{2}=\{2,7\},\quad J_{3}=\{3,5\}$, with loads $(20,12,15)$. Hence $LIST(I)=20$.

    2. The list is $\sigma=(8,2,5,3,4,7,6,1)$.

        <div class="tabella" markdown="0"><table>
        <tr>
        <th>job <span class="arithmatex">\(j\)</span></th>
        <th><span class="arithmatex">\(t_j\)</span></th>
        <th>loads before</th>
        <th>machine</th>
        </tr>
        <tr>
        <td><span class="arithmatex">\(8\)</span></td>
        <td><span class="arithmatex">\(9\)</span></td>
        <td><span class="arithmatex">\((0,0,0)\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(8\)</span></td>
        <td><span class="arithmatex">\((9,0,0)\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(8\)</span></td>
        <td><span class="arithmatex">\((9,8,0)\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(7\)</span></td>
        <td><span class="arithmatex">\((9,8,8)\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\((9,15,8)\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(7\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\((9,15,14)\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\((13,15,14)\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\((16,15,14)\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        </tr>
        </table></div>

        The sets are $J_{1}=\{6,7,8\},\quad J_{2}=\{2,3\},\quad J_{3}=\{1,4,5\}$, with loads $(16,15,16)$. Hence $LPT(I)=16$.

    3. $\sum_j t_j=47$ and $\max_j t_j=9$, so

        $$
        LB=\max\left\{9,\left\lceil\frac{47}{3}\right\rceil\right\}=16,
        $$

        and the gaps are $\frac{20-16}{16}=25\%$ for $LIST$ and $\frac{16-16}{16}=0\%$ for $LPT$.

    4. $LPT(I)=16=LB$, so the $LPT$ solution is optimal and $z(I)=16$; $LIST$ in the input order is 25.0% above the optimum. In the input order the longest job, job $8$ of length $9$, is the last one: it arrives when the least loaded machine already has load $11$, and the makespan jumps to $20$. With the longest jobs first, the last jobs are short and level the loads.

<a id="esercizio-30-8"></a>

!!! esercizio "Exercise 30.8: List scheduling and LPT 2"

    We consider $m=3$ identical machines and a set $\mathscr{J}=\{1,\dots,7\}$ of $7$ jobs ($n=7$), with the following processing times:

    $$
    \begin{array}{l|ccccccc}
    \hline  & {j=1} & {j=2} & {j=3} & {j=4} & {j=5} & {j=6} & {j=7} \\[1ex]
    \hline {t_j} & {3} & {6} & {5} & {4} & {4} & {9} & {7} \\
    \hline
    \end{array}
    $$

    **Questions**

    1. Apply list scheduling ($LIST$) with the jobs in the input order, showing the loads before each assignment.

    2. Apply $LPT$: sort the jobs by non-increasing processing time (ties by index) and apply list scheduling.

    3. Compute the lower bound $\max\left\{\max_j t_j,\left\lceil\frac{\sum_j t_j}{m}\right\rceil\right\}$ and the gaps of the two solutions.

    4. Find an assignment with makespan equal to the lower bound. Check Graham's bounds for $LIST$ and $LPT$ on this instance.

??? soluzione "Solution"

    1. &#8203;

        <div class="tabella" markdown="0"><table>
        <tr>
        <th>job <span class="arithmatex">\(j\)</span></th>
        <th><span class="arithmatex">\(t_j\)</span></th>
        <th>loads before</th>
        <th>machine</th>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\((0,0,0)\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\((3,0,0)\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\((3,6,0)\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\((3,6,5)\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\((7,6,5)\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(9\)</span></td>
        <td><span class="arithmatex">\((7,6,9)\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(7\)</span></td>
        <td><span class="arithmatex">\(7\)</span></td>
        <td><span class="arithmatex">\((7,15,9)\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        </tr>
        </table></div>

        The sets are $J_{1}=\{1,4,7\},\quad J_{2}=\{2,6\},\quad J_{3}=\{3,5\}$, with loads $(14,15,9)$. Hence $LIST(I)=15$.

    2. The list is $\sigma=(6,7,2,3,4,5,1)$.

        <div class="tabella" markdown="0"><table>
        <tr>
        <th>job <span class="arithmatex">\(j\)</span></th>
        <th><span class="arithmatex">\(t_j\)</span></th>
        <th>loads before</th>
        <th>machine</th>
        </tr>
        <tr>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(9\)</span></td>
        <td><span class="arithmatex">\((0,0,0)\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(7\)</span></td>
        <td><span class="arithmatex">\(7\)</span></td>
        <td><span class="arithmatex">\((9,0,0)\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\((9,7,0)\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\((9,7,6)\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\((9,7,11)\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\((9,11,11)\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\((13,11,11)\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        </tr>
        </table></div>

        The sets are $J_{1}=\{5,6\},\quad J_{2}=\{1,4,7\},\quad J_{3}=\{2,3\}$, with loads $(13,14,11)$. Hence $LPT(I)=14$.

    3. $\sum_j t_j=38$ and $\max_j t_j=9$, so

        $$
        LB=\max\left\{9,\left\lceil\frac{38}{3}\right\rceil\right\}=13,
        $$

        and the gaps are $\frac{15-13}{13}\approx 15.4\%$ for $LIST$ and $\frac{14-13}{13}\approx 7.7\%$ for $LPT$.

    4. The assignment $J_{1}=\{1,2,4\},\quad J_{2}=\{3,7\},\quad J_{3}=\{5,6\}$ has loads $(13,12,13)$ and makespan $13=LB$: it is optimal, $z(I)=13$, and $LPT$ is not. Graham's bound gives $LPT(I)\le\left(\frac{4}{3}-\frac{1}{9}\right)z(I)=\frac{11}{9}\cdot 13\approx 15.89$, and indeed $14\le 15.89$; for $LIST$, $\left(2-\frac{1}{3}\right)z(I)=\frac{5}{3}\cdot13\approx 21.67\ge 15$. Sorting improves the makespan from $15$ to $14$, but does not reach the optimum.

<a id="esercizio-30-9"></a>

!!! esercizio "Exercise 30.9: List scheduling and LPT 3"

    We consider $m=3$ identical machines and a set $\mathscr{J}=\{1,\dots,7\}$ of $7$ jobs ($n=7$), with the following processing times:

    $$
    \begin{array}{l|ccccccc}
    \hline  & {j=1} & {j=2} & {j=3} & {j=4} & {j=5} & {j=6} & {j=7} \\[1ex]
    \hline {t_j} & {5} & {8} & {8} & {4} & {5} & {7} & {4} \\
    \hline
    \end{array}
    $$

    **Questions**

    1. Apply list scheduling ($LIST$) with the jobs in the input order, showing the loads before each assignment.

    2. Apply $LPT$: sort the jobs by non-increasing processing time (ties by index) and apply list scheduling.

    3. Compute the lower bound $\max\left\{\max_j t_j,\left\lceil\frac{\sum_j t_j}{m}\right\rceil\right\}$ and the gaps of the two solutions.

    4. Compare the two solutions. Knowing that the optimal makespan is $15$, which one is optimal? What does this say about sorting?

??? soluzione "Solution"

    1. &#8203;

        <div class="tabella" markdown="0"><table>
        <tr>
        <th>job <span class="arithmatex">\(j\)</span></th>
        <th><span class="arithmatex">\(t_j\)</span></th>
        <th>loads before</th>
        <th>machine</th>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\((0,0,0)\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(8\)</span></td>
        <td><span class="arithmatex">\((5,0,0)\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(8\)</span></td>
        <td><span class="arithmatex">\((5,8,0)\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\((5,8,8)\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\((9,8,8)\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(7\)</span></td>
        <td><span class="arithmatex">\((9,13,8)\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(7\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\((9,13,15)\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        </tr>
        </table></div>

        The sets are $J_{1}=\{1,4,7\},\quad J_{2}=\{2,5\},\quad J_{3}=\{3,6\}$, with loads $(13,13,15)$. Hence $LIST(I)=15$.

    2. The list is $\sigma=(2,3,6,1,5,4,7)$.

        <div class="tabella" markdown="0"><table>
        <tr>
        <th>job <span class="arithmatex">\(j\)</span></th>
        <th><span class="arithmatex">\(t_j\)</span></th>
        <th>loads before</th>
        <th>machine</th>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(8\)</span></td>
        <td><span class="arithmatex">\((0,0,0)\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(8\)</span></td>
        <td><span class="arithmatex">\((8,0,0)\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(7\)</span></td>
        <td><span class="arithmatex">\((8,8,0)\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\((8,8,7)\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\((8,8,12)\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\((13,8,12)\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(7\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\((13,12,12)\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        </tr>
        </table></div>

        The sets are $J_{1}=\{2,5\},\quad J_{2}=\{3,4,7\},\quad J_{3}=\{1,6\}$, with loads $(13,16,12)$. Hence $LPT(I)=16$.

    3. $\sum_j t_j=41$ and $\max_j t_j=8$, so

        $$
        LB=\max\left\{8,\left\lceil\frac{41}{3}\right\rceil\right\}=14,
        $$

        and the gaps are $\frac{15-14}{14}\approx 7.1\%$ for $LIST$ and $\frac{16-14}{14}\approx 14.3\%$ for $LPT$.

    4. Here $LIST(I)=15<LPT(I)=16$: on this instance the input order is better than the sorted one. The lower bound $14$ is not attained; a complete enumeration of the $3^{7}$ assignments shows that $z(I)=15$ (for instance $J_{1}=\{1,2\},\quad J_{2}=\{3,5\},\quad J_{3}=\{4,6,7\}$, loads $(13,13,15)$), so $LIST$ in the input order is optimal, while $LPT$ is 6.7% above the optimum. Sorting is a rule that works well in general, and Graham's bound for $LPT$ is better than the one for $LIST$; but a guarantee is a statement on the worst case, and on a single instance an arbitrary order can be lucky.

## TSP: constructive heuristics

<a id="esercizio-30-10"></a>

!!! esercizio "Exercise 30.10: TSP construction 1"

    We consider a set $\mathscr{V}=\{1,\dots,6\}$ of $6$ cities with coordinates $1{:}\,(8,0)$, $2{:}\,(1,0)$, $3{:}\,(1,2)$, $4{:}\,(1,5)$, $5{:}\,(6,3)$, $6{:}\,(0,4)$ and distances equal to the Euclidean distances rounded to the nearest integer (the instance is metric):

    $$
    \begin{array}{c|cccccc}
    \hline {d_{ij}} & {1} & {2} & {3} & {4} & {5} & {6} \\
    \hline {1} & --- & {7} & {7} & {9} & {4} & {9} \\
    {2} & {7} & --- & {2} & {5} & {6} & {4} \\
    {3} & {7} & {2} & --- & {3} & {5} & {2} \\
    {4} & {9} & {5} & {3} & --- & {5} & {1} \\
    {5} & {4} & {6} & {5} & {5} & --- & {6} \\
    {6} & {9} & {4} & {2} & {1} & {6} & --- \\
    \hline
    \end{array}
    $$

    **Questions**

    1. Apply the nearest neighbour heuristic ($NN$) from city $1$, step by step (ties by index).

    2. Apply $NN$ from each of the other cities, and give the result of the multi-start $NN$.

    3. Compute the lower bound $\left\lceil\frac12\sum_{i}(a_i+b_i)\right\rceil$, where $a_i$ and $b_i$ are the two smallest distances from city $i$, and the gap of the multi-start solution.

    4. Knowing that the optimal value is $z(I)=21$, compute the relative error of $NN$ from city $1$, and explain why its tour is long.

??? soluzione "Solution"

    1. 1. from city $1$ the distances to $2,3,4,5,6$ are $7,7,9,4,9$: city $5$;

        2. from city $5$ the distances to $2,3,4,6$ are $6,5,5,6$: city $3$ (tie with $4$, broken by index);

        3. from city $3$ the distances to $2,4,6$ are $2,3,2$: city $2$ (tie with $6$, broken by index);

        4. from city $2$ the distances to $4,6$ are $5,4$: city $6$;

        5. from city $6$ only city $4$ is left, at distance $1$;

        6. the tour closes with the edge $(4,1)$, of length $9$;

        Hence $\pi=(1,5,3,2,6,4)$ and $NN(I)=4+5+2+4+1+9=25$.

    2. Proceeding in the same way from every city:

        <div class="tabella" markdown="0"><table>
        <tr>
        <th>start</th>
        <th>tour</th>
        <th><span class="arithmatex">\(L\)</span></th>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\((1,5,3,2,6,4)\)</span></td>
        <td><span class="arithmatex">\(25\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\((2,3,6,4,5,1)\)</span></td>
        <td><span class="arithmatex">\(21\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\((3,2,6,4,5,1)\)</span></td>
        <td><span class="arithmatex">\(23\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\((4,6,3,2,5,1)\)</span></td>
        <td><span class="arithmatex">\(24\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\((5,1,2,3,6,4)\)</span></td>
        <td><span class="arithmatex">\(21\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\((6,4,3,2,5,1)\)</span></td>
        <td><span class="arithmatex">\(25\)</span></td>
        </tr>
        </table></div>

        The multi-start $NN$ returns the first shortest tour, $(2,3,6,4,5,1)$, of length $21$.

    3. The two smallest distances are $(4,7)$ for city $1$, $(2,4)$ for city $2$, $(2,2)$ for city $3$, $(1,3)$ for city $4$, $(4,5)$ for city $5$, $(1,2)$ for city $6$, so

        $$
        LB=\left\lceil\frac{11+6+4+4+9+3}{2}\right\rceil=\left\lceil 18.5\right\rceil=19,
        $$

        and the gap of the multi-start solution is $\frac{21-19}{19}\approx 10.5\%$.

    4. The relative error of $NN$ from city $1$ is $\frac{25-21}{21}\approx 19.0\%$, while the multi-start finds the optimal value $21$ (from cities $2$ and $5$). From city $1$ the nearest city is $5$, and the path then moves to the cluster of cities $2,3,4,6$; city $1$ is far from all of them (its distances to $2,3,4,6$ are $7,7,9,9$), and the path must come back from the last city of the cluster: the closing edge $(4,1)$ has length $9$. Changing the starting city changes which long edge is forced at the end.

<a id="esercizio-30-11"></a>

!!! esercizio "Exercise 30.11: TSP construction 2"

    We consider a set $\mathscr{V}=\{1,\dots,6\}$ of $6$ cities with coordinates $1{:}\,(4,3)$, $2{:}\,(6,1)$, $3{:}\,(0,5)$, $4{:}\,(0,1)$, $5{:}\,(4,5)$, $6{:}\,(4,0)$ and distances equal to the Euclidean distances rounded to the nearest integer (the instance is metric):

    $$
    \begin{array}{c|cccccc}
    \hline {d_{ij}} & {1} & {2} & {3} & {4} & {5} & {6} \\
    \hline {1} & --- & {3} & {4} & {4} & {2} & {3} \\
    {2} & {3} & --- & {7} & {6} & {4} & {2} \\
    {3} & {4} & {7} & --- & {4} & {4} & {6} \\
    {4} & {4} & {6} & {4} & --- & {6} & {4} \\
    {5} & {2} & {4} & {4} & {6} & --- & {5} \\
    {6} & {3} & {2} & {6} & {4} & {5} & --- \\
    \hline
    \end{array}
    $$

    **Questions**

    1. Apply nearest insertion ($NI$) from city $1$: at each step give $d(q,T)$ for the cities $q$ not in the subtour $T$, the selected city and its cheapest edge.

    2. Apply farthest insertion ($FI$) from city $1$.

    3. Apply cheapest insertion ($CI$) from city $1$.

    4. Knowing that the optimal value is $z(I)=19$, compare the three tours with each other and with the tour of $NN$ from city $1$.

??? soluzione "Solution"

    1. Starting from $T=(1)$ (inserting city $q$ into the subtour $(1)$ costs $2d_{1q}$):

        <div class="tabella" markdown="0"><table>
        <tr>
        <th>subtour <span class="arithmatex">\(T\)</span></th>
        <th><span class="arithmatex">\(d(q,T)\)</span></th>
        <th>insertion costs of the selected city</th>
        <th>inserted</th>
        </tr>
        <tr>
        <td><span class="arithmatex">\((1)\)</span></td>
        <td><span class="arithmatex">\(2{:}\,3\)</span>, <span class="arithmatex">\(3{:}\,4\)</span>, <span class="arithmatex">\(4{:}\,4\)</span>, <span class="arithmatex">\(5{:}\,2\)</span>, <span class="arithmatex">\(6{:}\,3\)</span></td>
        <td><span class="arithmatex">\((4)\)</span></td>
        <td><span class="arithmatex">\(5\)</span> on <span class="arithmatex">\((1,1)\)</span>, cost <span class="arithmatex">\(4\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\((1,5)\)</span></td>
        <td><span class="arithmatex">\(2{:}\,3\)</span>, <span class="arithmatex">\(3{:}\,4\)</span>, <span class="arithmatex">\(4{:}\,4\)</span>, <span class="arithmatex">\(6{:}\,3\)</span></td>
        <td><span class="arithmatex">\((5,5)\)</span></td>
        <td><span class="arithmatex">\(2\)</span> on <span class="arithmatex">\((1,5)\)</span>, cost <span class="arithmatex">\(5\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\((1,2,5)\)</span></td>
        <td><span class="arithmatex">\(3{:}\,4\)</span>, <span class="arithmatex">\(4{:}\,4\)</span>, <span class="arithmatex">\(6{:}\,2\)</span></td>
        <td><span class="arithmatex">\((2,3,6)\)</span></td>
        <td><span class="arithmatex">\(6\)</span> on <span class="arithmatex">\((1,2)\)</span>, cost <span class="arithmatex">\(2\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\((1,6,2,5)\)</span></td>
        <td><span class="arithmatex">\(3{:}\,4\)</span>, <span class="arithmatex">\(4{:}\,4\)</span></td>
        <td><span class="arithmatex">\((7,11,7,6)\)</span></td>
        <td><span class="arithmatex">\(3\)</span> on <span class="arithmatex">\((5,1)\)</span>, cost <span class="arithmatex">\(6\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\((1,6,2,5,3)\)</span></td>
        <td><span class="arithmatex">\(4{:}\,4\)</span></td>
        <td><span class="arithmatex">\((5,8,8,6,4)\)</span></td>
        <td><span class="arithmatex">\(4\)</span> on <span class="arithmatex">\((3,1)\)</span>, cost <span class="arithmatex">\(4\)</span></td>
        </tr>
        </table></div>

        Hence $\pi=(1,6,2,5,3,4)$ and $NI(I)=3+2+4+4+4+4=21$.

    2. Starting from $T=(1)$ (inserting city $q$ into the subtour $(1)$ costs $2d_{1q}$):

        <div class="tabella" markdown="0"><table>
        <tr>
        <th>subtour <span class="arithmatex">\(T\)</span></th>
        <th><span class="arithmatex">\(d(q,T)\)</span></th>
        <th>insertion costs of the selected city</th>
        <th>inserted</th>
        </tr>
        <tr>
        <td><span class="arithmatex">\((1)\)</span></td>
        <td><span class="arithmatex">\(2{:}\,3\)</span>, <span class="arithmatex">\(3{:}\,4\)</span>, <span class="arithmatex">\(4{:}\,4\)</span>, <span class="arithmatex">\(5{:}\,2\)</span>, <span class="arithmatex">\(6{:}\,3\)</span></td>
        <td><span class="arithmatex">\((8)\)</span></td>
        <td><span class="arithmatex">\(3\)</span> on <span class="arithmatex">\((1,1)\)</span>, cost <span class="arithmatex">\(8\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\((1,3)\)</span></td>
        <td><span class="arithmatex">\(2{:}\,3\)</span>, <span class="arithmatex">\(4{:}\,4\)</span>, <span class="arithmatex">\(5{:}\,2\)</span>, <span class="arithmatex">\(6{:}\,3\)</span></td>
        <td><span class="arithmatex">\((4,4)\)</span></td>
        <td><span class="arithmatex">\(4\)</span> on <span class="arithmatex">\((1,3)\)</span>, cost <span class="arithmatex">\(4\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\((1,4,3)\)</span></td>
        <td><span class="arithmatex">\(2{:}\,3\)</span>, <span class="arithmatex">\(5{:}\,2\)</span>, <span class="arithmatex">\(6{:}\,3\)</span></td>
        <td><span class="arithmatex">\((5,9,6)\)</span></td>
        <td><span class="arithmatex">\(2\)</span> on <span class="arithmatex">\((1,4)\)</span>, cost <span class="arithmatex">\(5\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\((1,2,4,3)\)</span></td>
        <td><span class="arithmatex">\(5{:}\,2\)</span>, <span class="arithmatex">\(6{:}\,2\)</span></td>
        <td><span class="arithmatex">\((3,4,6,2)\)</span></td>
        <td><span class="arithmatex">\(5\)</span> on <span class="arithmatex">\((3,1)\)</span>, cost <span class="arithmatex">\(2\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\((1,2,4,3,5)\)</span></td>
        <td><span class="arithmatex">\(6{:}\,2\)</span></td>
        <td><span class="arithmatex">\((2,0,6,7,6)\)</span></td>
        <td><span class="arithmatex">\(6\)</span> on <span class="arithmatex">\((2,4)\)</span>, cost <span class="arithmatex">\(0\)</span></td>
        </tr>
        </table></div>

        Hence $\pi=(1,2,6,4,3,5)$ and $FI(I)=3+2+4+4+4+2=19$.

    3. Starting from $T=(1)$ (inserting city $q$ into the subtour $(1)$ costs $2d_{1q}$):

        <div class="tabella" markdown="0"><table>
        <tr>
        <th>subtour <span class="arithmatex">\(T\)</span></th>
        <th>minimum insertion cost</th>
        <th>insertion costs of the selected city</th>
        <th>inserted</th>
        </tr>
        <tr>
        <td><span class="arithmatex">\((1)\)</span></td>
        <td><span class="arithmatex">\(2{:}\,6\)</span>, <span class="arithmatex">\(3{:}\,8\)</span>, <span class="arithmatex">\(4{:}\,8\)</span>, <span class="arithmatex">\(5{:}\,4\)</span>, <span class="arithmatex">\(6{:}\,6\)</span></td>
        <td><span class="arithmatex">\((4)\)</span></td>
        <td><span class="arithmatex">\(5\)</span> on <span class="arithmatex">\((1,1)\)</span>, cost <span class="arithmatex">\(4\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\((1,5)\)</span></td>
        <td><span class="arithmatex">\(2{:}\,5\)</span>, <span class="arithmatex">\(3{:}\,6\)</span>, <span class="arithmatex">\(4{:}\,8\)</span>, <span class="arithmatex">\(6{:}\,6\)</span></td>
        <td><span class="arithmatex">\((5,5)\)</span></td>
        <td><span class="arithmatex">\(2\)</span> on <span class="arithmatex">\((1,5)\)</span>, cost <span class="arithmatex">\(5\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\((1,2,5)\)</span></td>
        <td><span class="arithmatex">\(3{:}\,6\)</span>, <span class="arithmatex">\(4{:}\,7\)</span>, <span class="arithmatex">\(6{:}\,2\)</span></td>
        <td><span class="arithmatex">\((2,3,6)\)</span></td>
        <td><span class="arithmatex">\(6\)</span> on <span class="arithmatex">\((1,2)\)</span>, cost <span class="arithmatex">\(2\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\((1,6,2,5)\)</span></td>
        <td><span class="arithmatex">\(3{:}\,6\)</span>, <span class="arithmatex">\(4{:}\,5\)</span></td>
        <td><span class="arithmatex">\((5,8,8,8)\)</span></td>
        <td><span class="arithmatex">\(4\)</span> on <span class="arithmatex">\((1,6)\)</span>, cost <span class="arithmatex">\(5\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\((1,4,6,2,5)\)</span></td>
        <td><span class="arithmatex">\(3{:}\,4\)</span></td>
        <td><span class="arithmatex">\((4,6,11,7,6)\)</span></td>
        <td><span class="arithmatex">\(3\)</span> on <span class="arithmatex">\((1,4)\)</span>, cost <span class="arithmatex">\(4\)</span></td>
        </tr>
        </table></div>

        Hence $\pi=(1,3,4,6,2,5)$ and $CI(I)=4+4+4+2+4+2=20$.

    4. The lengths are $NI(I)=21$, $FI(I)=19$, $CI(I)=20$ and $NN(I)=20$ from city $1$. $FI$ finds an optimal tour, $z(I)=19$; the relative errors are 10.5% for $NI$, 5.3% for $CI$ and 5.3% for $NN$. $FI$ first builds the outline of the tour through cities $3$ and $4$, the farthest from city $1$, and then inserts cities $2$, $5$ and $6$ where they cost little (city $6$ at cost $0$); $NI$ and $CI$ start from cities $5$, $2$ and $6$, close to city $1$, and must insert the far cities $3$ and $4$ at the end, when the subtour no longer has a cheap place for them.

<a id="esercizio-30-12"></a>

!!! esercizio "Exercise 30.12: TSP construction 3"

    We consider a set $\mathscr{V}=\{1,\dots,5\}$ of $5$ cities with coordinates $1{:}\,(8,1)$, $2{:}\,(5,0)$, $3{:}\,(6,4)$, $4{:}\,(6,3)$, $5{:}\,(3,5)$ and distances equal to the Euclidean distances rounded to the nearest integer (the instance is metric):

    $$
    \begin{array}{c|ccccc}
    \hline {d_{ij}} & {1} & {2} & {3} & {4} & {5} \\
    \hline {1} & --- & {3} & {4} & {3} & {6} \\
    {2} & {3} & --- & {4} & {3} & {5} \\
    {3} & {4} & {4} & --- & {1} & {3} \\
    {4} & {3} & {3} & {1} & --- & {4} \\
    {5} & {6} & {5} & {3} & {4} & --- \\
    \hline
    \end{array}
    $$

    **Questions**

    1. Apply the nearest neighbour heuristic ($NN$) from city $1$.

    2. Apply the randomized nearest neighbour $RNN_\alpha$ from city $1$ with $\alpha=\frac{1}{2}$, using the random numbers $u_{1}=0.0159$, $u_{2}=0.4956$, $u_{3}=0.8564$ in this order. The RCL lists its cities by increasing index, the city in position $\lfloor u\cdot|RCL|\rfloor+1$ is chosen, and a random number is used only when $|RCL|\ge2$. Give the tour of the first run.

    3. Continue with the remaining random numbers for a second run of $RNN_\alpha$ from city $1$.

    4. Knowing that the optimal value is $z(I)=15$, compare the three tours. What happens to the RCL with $\alpha=0$ and with $\alpha=1$?

??? soluzione "Solution"

    1. 1. from city $1$ the distances to $2,3,4,5$ are $3,4,3,6$: city $2$ (tie with $4$, broken by index);

        2. from city $2$ the distances to $3,4,5$ are $4,3,5$: city $4$;

        3. from city $4$ the distances to $3,5$ are $1,4$: city $3$;

        4. from city $3$ only city $5$ is left, at distance $3$;

        5. the tour closes with the edge $(5,1)$, of length $6$;

        Hence $\pi=(1,2,4,3,5)$ and $NN(I)=3+3+1+3+6=16$.

    2. 1. from city $1$ the distances to $2,3,4,5$ are $3,4,3,6$; threshold $3+\frac{1}{2}\cdot(6-3)=4.5$, $RCL=\{2,3,4\}$; $u_{1}=0.0159$, position $\lfloor 0.0159\cdot 3\rfloor+1=1$: city $2$;

        2. from city $2$ the distances to $3,4,5$ are $4,3,5$; threshold $3+\frac{1}{2}\cdot(5-3)=4$, $RCL=\{3,4\}$; $u_{2}=0.4956$, position $\lfloor 0.4956\cdot 2\rfloor+1=1$: city $3$;

        3. from city $3$ the distances to $4,5$ are $1,3$; threshold $1+\frac{1}{2}\cdot(3-1)=2$, $RCL=\{4\}$: city $4$;

        4. from city $4$ only city $5$ is left;

        Hence $\pi=(1,2,3,4,5)$ and $L=3+4+1+4+6=18$.

    3. 1. from city $1$ the distances to $2,3,4,5$ are $3,4,3,6$; threshold $3+\frac{1}{2}\cdot(6-3)=4.5$, $RCL=\{2,3,4\}$; $u_{3}=0.8564$, position $\lfloor 0.8564\cdot 3\rfloor+1=3$: city $4$;

        2. from city $4$ the distances to $2,3,5$ are $3,1,4$; threshold $1+\frac{1}{2}\cdot(4-1)=2.5$, $RCL=\{3\}$: city $3$;

        3. from city $3$ the distances to $2,5$ are $4,3$; threshold $3+\frac{1}{2}\cdot(4-3)=3.5$, $RCL=\{5\}$: city $5$;

        4. from city $5$ only city $2$ is left;

        Hence $\pi=(1,4,3,5,2)$ and $L=3+1+3+5+3=15$.

    4. $NN$ from city $1$ gives $16$, 6.7% above the optimum; the first randomized run gives $18$, worse than $NN$, and the second $15=z(I)$, an optimal tour. Randomization can give worse or better tours than the greedy choice, and repeating the construction and keeping the best tour is what makes it useful. With $\alpha=0$ the RCL contains only the nearest cities, and $RNN_0$ is $NN$ with random tie-breaking; with $\alpha=1$ the RCL contains all the unvisited cities, and the tour is completely random.

## Vertex coloring: greedy and DSATUR

<a id="esercizio-30-13"></a>

!!! esercizio "Exercise 30.13: Greedy coloring and DSATUR 1"

    We consider the graph $G=(V,E)$ with $V=\{1,\dots,7\}$ ($n=7$) and $|E|=11$ edges:

    $$
    E=\big\{\{1,2\},\{1,3\},\{1,4\},\{2,4\},\{2,6\},\{3,7\},\{4,5\},\{4,6\},\{5,6\},\{5,7\},\{6,7\}\big\}.
    $$

    ![Figure 1](../img/ex-constructive-heuristics/fig01.svg){ .fig loading=lazy  }

    **Questions**

    1. Compute the degrees and $\Delta(G)$, and the bound $\Delta(G)+1$ on the number of colors of $GC$.

    2. Apply $GC$ with the list $\lambda=(1,2,\dots,7)$: for each vertex give the set $U$ of colors of its colored neighbours and the color assigned.

    3. Apply $DSATUR$: for each step give the vertex chosen, its saturation degree $sat$, its degree among the uncolored vertices $du$, and its color.

    4. Find a clique of maximum size and determine $\chi(G)$. Which of the two colorings is optimal?

??? soluzione "Solution"

    1. The neighbourhoods are $N(1)=\{2,3,4\}$, $N(2)=\{1,4,6\}$, $N(3)=\{1,7\}$, $N(4)=\{1,2,5,6\}$, $N(5)=\{4,6,7\}$, $N(6)=\{2,4,5,7\}$, $N(7)=\{3,5,6\}$. The degrees are $(3,3,2,4,3,4,3)$, so $\Delta(G)=4$ and $GC$ uses at most $\Delta(G)+1=5$ colors, with any list.

    2. &#8203;

        $$
        \begin{array}{c|ccccccc}
        \hline {v} & {1} & {2} & {3} & {4} & {5} & {6} & {7} \\
        \hline {U} & {\emptyset} & {\{1\}} & {\{1\}} & {\{1,2\}} & {\{3\}} & {\{1,2,3\}} & {\{1,2,4\}} \\
        {col[v]} & {1} & {2} & {2} & {3} & {1} & {4} & {3} \\
        \hline
        \end{array}
        $$

        $GC$ uses $4$ colors: $Q_1=\{1,5\}$, $Q_2=\{2,3\}$, $Q_3=\{4,7\}$, $Q_4=\{6\}$. The trouble starts at vertex $5$: it takes color $1$, and vertex $6$, adjacent to $2$, $4$ and $5$, then sees the colors $1,2,3$.

    3. At step $1$ all the saturation degrees are $0$, and the vertices of largest degree are $4$ and $6$: vertex $4$ is chosen.

        <div class="tabella" markdown="0"><table>
        <tr>
        <th>step</th>
        <th><span class="arithmatex">\(1\)</span></th>
        <th><span class="arithmatex">\(2\)</span></th>
        <th><span class="arithmatex">\(3\)</span></th>
        <th><span class="arithmatex">\(4\)</span></th>
        <th><span class="arithmatex">\(5\)</span></th>
        <th><span class="arithmatex">\(6\)</span></th>
        <th><span class="arithmatex">\(7\)</span></th>
        </tr>
        <tr>
        <td><span class="arithmatex">\(v\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(7\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(sat[v]\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(du[v]\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(col[v]\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        </tr>
        </table></div>

        At step $2$ the neighbours of $4$ have saturation degree $1$, and vertex $6$ has the most uncolored neighbours ($5$, $7$ and $2$). At step $3$ the vertices $2$ and $5$ (both adjacent to $4$ and $6$) have saturation degree $2$ and one uncolored neighbour each, and $2$ is chosen. $DSATUR$ uses $3$ colors: $Q_1=\{4,7\}$, $Q_2=\{1,6\}$, $Q_3=\{2,3,5\}$.

    4. $\{1,2,4\}$ is a clique of size $3$ ($\{1,2\},\{1,4\},\{2,4\}\in E$), so $\chi(G)\ge\omega(G)\ge3$; there are no cliques of size $4$, but this is not needed: the $DSATUR$ coloring uses $3$ colors, hence $\chi(G)=3$. The $DSATUR$ coloring is optimal, the one of $GC$ with the list $(1,\dots,7)$ uses one color more:

        $$
        \frac{GC(I)}{\chi(G)}=\frac43,\qquad\frac{DSATUR(I)}{\chi(G)}=1 .
        $$

<a id="esercizio-30-14"></a>

!!! esercizio "Exercise 30.14: Greedy coloring and DSATUR 2"

    We consider the crown graph $G_5$ with $n=10$ vertices: the vertices $1,\dots,5$ on one side, the vertices $6,\dots,10$ on the other, and vertex $i\in\{1,\dots,5\}$ adjacent to vertex $j+5$, $j\in\{1,\dots,5\}$, if and only if $i\neq j$:

    $$
    E=\big\{\{i,j+5\} : i,j\in\{1,\dots,5\},\ i\neq j\big\},\qquad |E|=20 .
    $$

    **Questions**

    1. Compute $\Delta(G_5)$ and $\chi(G_5)$.

    2. Apply $GC$ with the list $\lambda=(1,6,2,7,3,8,4,9,5,10)$ and give $GC(I)$. Compare it with $\Delta(G_5)+1$ and with $\chi(G_5)$.

    3. Give a list for which $GC$ is optimal.

    4. Apply $DSATUR$ and give $DSATUR(I)$.

??? soluzione "Solution"

    1. Each vertex $i\le5$ is adjacent to the $4$ vertices $j+5$ with $j\neq i$, and symmetrically: every degree is $4$ and $\Delta(G_5)=4$. The graph is bipartite (all the edges join $\{1,\dots,5\}$ and $\{6,\dots,10\}$) and has edges, so $\chi(G_5)=2$.

    2. With $u_i=i$ and $v_i=i+5$ the list is $(u_1,v_1,u_2,v_2,\dots,u_5,v_5)$, the bad list of the notes:

        $$
        \begin{array}{c|cccccccccc}
        \hline {v} & {1} & {6} & {2} & {7} & {3} & {8} & {4} & {9} & {5} & {10} \\
        \hline {U} & {\emptyset} & {\emptyset} & {\{1\}} & {\{1\}} & {\{1,2\}} & {\{1,2\}} & {\{1,2,3\}} & {\{1,2,3\}} & {\{1,2,3,4\}} & {\{1,2,3,4\}} \\
        {col[v]} & {1} & {1} & {2} & {2} & {3} & {3} & {4} & {4} & {5} & {5} \\
        \hline
        \end{array}
        $$

        Vertices $i$ and $i+5$ are not adjacent and both get color $i$, so $GC(I)=5=\frac n2$. This is exactly the bound $\Delta(G_5)+1=5$, and

        $$
        \frac{GC(I)}{\chi(G_5)}=\frac52 .
        $$

    3. The list $(1,2,3,4,5,6,7,8,9,10)$, one side first: the vertices $1,\dots,5$ are pairwise non-adjacent and all get color $1$; each vertex $6,\dots,10$ has only neighbours of color $1$ and gets color $2$. Hence $GC(I)=2=\chi(G_5)$.

    4. At step $1$ all the vertices have degree $4$ and vertex $1$ is chosen (color $1$). Then:

        <div class="tabella" markdown="0"><table>
        <tr>
        <th>step</th>
        <th><span class="arithmatex">\(1\)</span></th>
        <th><span class="arithmatex">\(2\)</span></th>
        <th><span class="arithmatex">\(3\)</span></th>
        <th><span class="arithmatex">\(4\)</span></th>
        <th><span class="arithmatex">\(5\)</span></th>
        <th><span class="arithmatex">\(6\)</span></th>
        <th><span class="arithmatex">\(7\)</span></th>
        <th><span class="arithmatex">\(8\)</span></th>
        <th><span class="arithmatex">\(9\)</span></th>
        <th><span class="arithmatex">\(10\)</span></th>
        </tr>
        <tr>
        <td><span class="arithmatex">\(v\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(7\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(8\)</span></td>
        <td><span class="arithmatex">\(9\)</span></td>
        <td><span class="arithmatex">\(10\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(sat[v]\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(du[v]\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(col[v]\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        </tr>
        </table></div>

        At step $2$ the neighbours $7,8,9,10$ of vertex $1$ have saturation degree $1$ and $3$ uncolored neighbours each: vertex $7$ is chosen and gets color $2$. From then on, every vertex adjacent to a colored vertex has saturation degree $1$ (its colored neighbours are all on the other side, with the same color); the vertices of the side $\{1,\dots,5\}$ get color $1$ and those of the side $\{6,\dots,10\}$ color $2$. Hence $DSATUR(I)=2=\chi(G_5)$, as guaranteed on bipartite graphs.

<a id="esercizio-30-15"></a>

!!! esercizio "Exercise 30.15: Greedy coloring and DSATUR 3"

    We consider the graph $G=(V,E)$ with $V=\{1,\dots,7\}$ ($n=7$) and $|E|=10$ edges:

    $$
    E=\big\{\{1,3\},\{1,5\},\{1,6\},\{2,4\},\{2,5\},\{2,7\},\{3,5\},\{4,6\},\{4,7\},\{6,7\}\big\}.
    $$

    ![Figure 2](../img/ex-constructive-heuristics/fig02.svg){ .fig loading=lazy  }

    **Questions**

    1. Apply $DSATUR$ (ties: largest degree among the uncolored vertices, then smallest index) and give $DSATUR(I)$.

    2. Show that $\chi(G)=3$.

    3. Is the result of Question 1 in contradiction with the bound $\Delta(G)+1$?

??? soluzione "Solution"

    1. The neighbourhoods are $N(1)=\{3,5,6\}$, $N(2)=\{4,5,7\}$, $N(3)=\{1,5\}$, $N(4)=\{2,6,7\}$, $N(5)=\{1,2,3\}$, $N(6)=\{1,4,7\}$, $N(7)=\{2,4,6\}$.

        <div class="tabella" markdown="0"><table>
        <tr>
        <th>step</th>
        <th><span class="arithmatex">\(1\)</span></th>
        <th><span class="arithmatex">\(2\)</span></th>
        <th><span class="arithmatex">\(3\)</span></th>
        <th><span class="arithmatex">\(4\)</span></th>
        <th><span class="arithmatex">\(5\)</span></th>
        <th><span class="arithmatex">\(6\)</span></th>
        <th><span class="arithmatex">\(7\)</span></th>
        </tr>
        <tr>
        <td><span class="arithmatex">\(v\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(7\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(sat[v]\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(du[v]\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(col[v]\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        </tr>
        </table></div>

        - Step $1$: vertex $1$ (degree $3$, smallest index among the vertices of degree $3$), color $1$.

        - Step $2$: the neighbours $3,5,6$ of vertex $1$ have saturation degree $1$; their uncolored neighbours are $1$, $2$, $2$ respectively, and vertex $5$ is chosen: color $2$.

        - Step $3$: vertex $3$ sees colors $1$ and $2$ (saturation degree $2$): color $3$.

        - Step $4$: the vertices $2$ (neighbour $5$) and $6$ (neighbour $1$) have saturation degree $1$ and two uncolored neighbours each; vertex $2$ is chosen and gets color $1$.

        - Step $5$: the vertices $4$, $6$, $7$ have saturation degree $1$ and two uncolored neighbours each; vertex $4$ gets color $2$.

        - Step $6$: vertex $6$ sees colors $1$ (vertex $1$) and $2$ (vertex $4$), vertex $7$ sees $1$ (vertex $2$) and $2$ (vertex $4$); both have saturation degree $2$ and one uncolored neighbour, and vertex $6$ gets color $3$.

        - Step $7$: vertex $7$ sees colors $1,2,3$ and gets color $4$.

        Hence $DSATUR(I)=4$.

    2. $\{1,3,5\}$ is a triangle, so $\chi(G)\ge3$. The coloring $Q_1=\{1,4\}$, $Q_2=\{2,3,6\}$, $Q_3=\{5,7\}$ is feasible (no edge inside a class: $\{1,4\}$, $\{2,3\}$, $\{2,6\}$, $\{3,6\}$, $\{5,7\}\notin E$), so $\chi(G)=3$ and

        $$
        \frac{DSATUR(I)}{\chi(G)}=\frac43 .
        $$

        The damage is done by step $5$: vertices $6$ and $7$ already see color $1$ (from vertices $1$ and $2$), and vertex $4$, their common neighbour, takes color $2$. The two adjacent vertices $6$ and $7$ are left with color $3$ only, and one of them needs a fourth color. In the optimal coloring vertex $4$ has the same color as vertex $1$.

    3. No: the degrees are $(3,3,2,3,3,3,3)$, so $\Delta(G)+1=4$ and $DSATUR(I)=4$ attains the bound. The bound $\Delta(G)+1$ limits the number of colors, it does not compare it with $\chi(G)$.
