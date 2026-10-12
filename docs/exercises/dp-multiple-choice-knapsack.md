---
title: "Exercises · DP for the multiple-choice knapsack problem"
---

# Exercises · DP for the multiple-choice knapsack problem

<div class="info-capitolo" markdown>

**Exercises · Chapter 21** · each solution opens with a click · [:material-book-open-variant: Chapter 21: Multiple-choice knapsack (MCKP)](../dynamic-programming/dp-multiple-choice-knapsack.md) · [:material-file-pdf-box: Exercises, volume 3 (PDF)](../pdf/exercises-3-dynamic-programming.pdf)

</div>

!!! formula "Recurrence used in these exercises"

    The DP algorithm of the chapter [«DP for the multiple-choice knapsack problem»](https://fabiofurini.github.io/combinatorial-optimization/dynamic-programming/dp-multiple-choice-knapsack/): $v(h,k)$ is the optimal value with the classes $\mathscr{J}_1,\dots,\mathscr{J}_h$ and capacity $k$, with $v(h,k)=-\infty$ if no feasible solution exists, and

    $$
    v(h,k)= \left\{ \begin{array}{ll}
    0 & \textrm{if $h=0$,}\\[2ex]
    -\infty & \begin{array}[t]{@{}l@{}}\textrm{if $h\ge 1$ and}\\ \textrm{$\forall j\in\mathscr{J}_h$: $w_j>k$,}\end{array}\\[4ex]
    \displaystyle \max_{j \in \mathscr{J}_h:\, w_j \le k} \big\{ p_j + v(h-1,k-w_j) \big\} & \begin{array}[t]{@{}l@{}}\textrm{if $h\ge 1$ and}\\ \textrm{$\exists j\in\mathscr{J}_h$: $w_j\le k$.}\end{array}
    \end{array} \right.
    $$

    with $p_j+(-\infty)=-\infty$. The matrix $s$ stores the item $s[h][k]$ chosen in class $h$ ($0$ if $v[h][k]=-\infty$); an optimal solution is reconstructed from $h=q$ and $k=c$ with $j\leftarrow s[h][k]$, $x_j\leftarrow 1$, $k\leftarrow k-w_j$.

<a id="esercizio-21-1"></a>

!!! esercizio "Exercise 21.1: Exercise 1: Multiple-Choice Knapsack Problem"

    Consider the following MCKP instance, with a knapsack of capacity $c=6$ and $4$ items partitioned into $q=2$ classes: $\mathscr{J}_1=\{1,2\}$, $\mathscr{J}_2=\{3,4\}$. The profits and weights are:

    $$
    \begin{array}{l|rr|rr}
    \hline  & {j=1} & {j=2} & {j=3} & {j=4} \\
    \hline {p_j} & 4 & 6 & 3 & 6 \\
    {w_j} & 2 & 4 & 1 & 3 \\
    \hline
    \end{array}
    $$

    **Questions**

    1. Show the execution of the bottom-up DP algorithm by reporting, for each step, the cells $v[h][k]$ and $s[h][k]$; then write the matrices $v$ and $s$.

    2. Using the matrix $s$, reconstruct an optimal solution, one item per class, and report the optimal value.

    3. Using the last row of the matrix $v$, find the smallest capacity for which the instance is feasible, and compare it with $\sum_{h=1}^{q}\min_{j\in\mathscr{J}_h} w_j$.

??? soluzione "Solution"

    The recurrence and the conventions are those of the box at the beginning of these exercises.

    1. Step-by-step execution of the bottom-up DP algorithm. The row $h=0$ is $v[0][k]=0$ and $s[0][k]=0$ for every $k$; $s[h][k]=0$ when $v[h][k]=-\infty$. In case of ties the item met first in $\mathscr{J}_h$ is kept.

        <div class="tabella" markdown="0"><table>
        <tr>
        <th><span class="arithmatex">\(h\)</span></th>
        <th><span class="arithmatex">\(k\)</span></th>
        <th><span class="arithmatex">\(v[h][k]\)</span></th>
        <th><span class="arithmatex">\(s[h][k]\)</span></th>
        <th>Action</th>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(-\infty\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td>no item of <span class="arithmatex">\(\mathscr{J}_1\)</span> fits: <span class="arithmatex">\(-\infty\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(-\infty\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td>no item of <span class="arithmatex">\(\mathscr{J}_1\)</span> fits: <span class="arithmatex">\(-\infty\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(\max\{p_1{+}v[0][0]\}=\max\{4\}=4\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(\max\{p_1{+}v[0][1]\}=\max\{4\}=4\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(\max\{p_1{+}v[0][2],\,p_2{+}v[0][0]\}=\max\{4,6\}=6\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(\max\{p_1{+}v[0][3],\,p_2{+}v[0][1]\}=\max\{4,6\}=6\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(\max\{p_1{+}v[0][4],\,p_2{+}v[0][2]\}=\max\{4,6\}=6\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(-\infty\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td>no item of <span class="arithmatex">\(\mathscr{J}_2\)</span> fits: <span class="arithmatex">\(-\infty\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(-\infty\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(\max\{p_3{+}v[1][0]\}=\max\{-\infty\}=-\infty\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(-\infty\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(\max\{p_3{+}v[1][1]\}=\max\{-\infty\}=-\infty\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(7\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(\max\{p_3{+}v[1][2],\,p_4{+}v[1][0]\}=\max\{7,-\infty\}=7\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(7\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(\max\{p_3{+}v[1][3],\,p_4{+}v[1][1]\}=\max\{7,-\infty\}=7\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(10\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(\max\{p_3{+}v[1][4],\,p_4{+}v[1][2]\}=\max\{9,10\}=10\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(10\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(\max\{p_3{+}v[1][5],\,p_4{+}v[1][3]\}=\max\{9,10\}=10\)</span></td>
        </tr>
        </table></div>

        This is the matrix $v$ after the execution of the DP algorithm:

        $$
        \begin{array}{l|rrrrrrr}
        \hline {v[h][k]} & {k=0} & {k=1} & {k=2} & {k=3} & {k=4} & {k=5} & {k=6} \\
        \hline {h=0} & {0} & {0} & {0} & {0} & {0} & {0} & {0} \\
        {h=1} & {-\infty} & {-\infty} & {4} & {4} & {6} & {6} & {6} \\
        {h=2} & {-\infty} & {-\infty} & {-\infty} & {7} & {7} & {10} & {10} \\
        \hline
        \end{array}
        $$

        This is the matrix $s$ after the execution of the DP algorithm:

        $$
        \begin{array}{l|rrrrrrr}
        \hline {s[h][k]} & {k=0} & {k=1} & {k=2} & {k=3} & {k=4} & {k=5} & {k=6} \\
        \hline {h=0} & {0} & {0} & {0} & {0} & {0} & {0} & {0} \\
        {h=1} & {0} & {0} & {1} & {1} & {2} & {2} & {2} \\
        {h=2} & {0} & {0} & {0} & {3} & {3} & {4} & {4} \\
        \hline
        \end{array}
        $$

    2. Starting from $h=2$ and $k=6$:

        <div class="tabella" markdown="0"><table>
        <tr>
        <th>Iteration</th>
        <th><span class="arithmatex">\(h\)</span></th>
        <th><span class="arithmatex">\(k\)</span></th>
        <th><span class="arithmatex">\(j=s[h][k]\)</span></th>
        <th>Selection</th>
        <th>Capacity</th>
        </tr>
        <tr>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(k=6\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(x[4]\leftarrow 1\)</span></td>
        <td><span class="arithmatex">\(k\leftarrow 6-3=3\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(x[1]\leftarrow 1\)</span></td>
        <td><span class="arithmatex">\(k\leftarrow 3-2=1\)</span></td>
        </tr>
        </table></div>

        The optimal solution is $S=\{1,4\}$, that is, the vector $x=(1,0,0,1)$. Its total weight is $2+3=5\le c$, and the optimal value is $v[2][6]=4+6=10$.

    3. The last row $v[2][\cdot]$ is $-\infty$ for $k<3$ and finite from $k=3$ on, so the smallest capacity for which the instance is feasible is $3$. It equals $\sum_{h=1}^{2}\min_{j\in\mathscr{J}_h} w_j=2+1=3$: the lightest item of every class must fit.

<a id="esercizio-21-2"></a>

!!! esercizio "Exercise 21.2: Exercise 2: Multiple-Choice Knapsack Problem"

    Consider the following MCKP instance, with a knapsack of capacity $c=8$ and $5$ items partitioned into $q=2$ classes: $\mathscr{J}_1=\{1,2\}$, $\mathscr{J}_2=\{3,4,5\}$. The profits and weights are:

    $$
    \begin{array}{l|rr|rrr}
    \hline  & {j=1} & {j=2} & {j=3} & {j=4} & {j=5} \\
    \hline {p_j} & 6 & 9 & 2 & 5 & 6 \\
    {w_j} & 2 & 4 & 1 & 3 & 5 \\
    \hline
    \end{array}
    $$

    **Questions**

    1. Show the execution of the bottom-up DP algorithm by reporting, for each step, the cells $v[h][k]$ and $s[h][k]$; then write the matrices $v$ and $s$.

    2. Using the matrix $s$, reconstruct an optimal solution, one item per class, and report the optimal value.

    3. Using the last row of the matrix $v$, find the smallest capacity for which the instance is feasible, and compare it with $\sum_{h=1}^{q}\min_{j\in\mathscr{J}_h} w_j$.

??? soluzione "Solution"

    The recurrence and the conventions are those of the box at the beginning of these exercises.

    1. Step-by-step execution of the bottom-up DP algorithm. The row $h=0$ is $v[0][k]=0$ and $s[0][k]=0$ for every $k$; $s[h][k]=0$ when $v[h][k]=-\infty$. In case of ties the item met first in $\mathscr{J}_h$ is kept.

        <div class="tabella" markdown="0"><table>
        <tr>
        <th><span class="arithmatex">\(h\)</span></th>
        <th><span class="arithmatex">\(k\)</span></th>
        <th><span class="arithmatex">\(v[h][k]\)</span></th>
        <th><span class="arithmatex">\(s[h][k]\)</span></th>
        <th>Action</th>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(-\infty\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td>no item of <span class="arithmatex">\(\mathscr{J}_1\)</span> fits: <span class="arithmatex">\(-\infty\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(-\infty\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td>no item of <span class="arithmatex">\(\mathscr{J}_1\)</span> fits: <span class="arithmatex">\(-\infty\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(\max\{p_1{+}v[0][0]\}=\max\{6\}=6\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(\max\{p_1{+}v[0][1]\}=\max\{6\}=6\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(9\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(\max\{p_1{+}v[0][2],\,p_2{+}v[0][0]\}=\max\{6,9\}=9\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(9\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(\max\{p_1{+}v[0][3],\,p_2{+}v[0][1]\}=\max\{6,9\}=9\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(9\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(\max\{p_1{+}v[0][4],\,p_2{+}v[0][2]\}=\max\{6,9\}=9\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(7\)</span></td>
        <td><span class="arithmatex">\(9\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(\max\{p_1{+}v[0][5],\,p_2{+}v[0][3]\}=\max\{6,9\}=9\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(8\)</span></td>
        <td><span class="arithmatex">\(9\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(\max\{p_1{+}v[0][6],\,p_2{+}v[0][4]\}=\max\{6,9\}=9\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(-\infty\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td>no item of <span class="arithmatex">\(\mathscr{J}_2\)</span> fits: <span class="arithmatex">\(-\infty\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(-\infty\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(\max\{p_3{+}v[1][0]\}=\max\{-\infty\}=-\infty\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(-\infty\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(\max\{p_3{+}v[1][1]\}=\max\{-\infty\}=-\infty\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(8\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(\max\{p_3{+}v[1][2],\,p_4{+}v[1][0]\}=\max\{8,-\infty\}=8\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(8\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(\max\{p_3{+}v[1][3],\,p_4{+}v[1][1]\}=\max\{8,-\infty\}=8\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(11\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(\max\{p_3{+}v[1][4],\,p_4{+}v[1][2],\,p_5{+}v[1][0]\}=\max\{11,11,-\infty\}=11\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(11\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(\max\{p_3{+}v[1][5],\,p_4{+}v[1][3],\,p_5{+}v[1][1]\}=\max\{11,11,-\infty\}=11\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(7\)</span></td>
        <td><span class="arithmatex">\(14\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(\max\{p_3{+}v[1][6],\,p_4{+}v[1][4],\,p_5{+}v[1][2]\}=\max\{11,14,12\}=14\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(8\)</span></td>
        <td><span class="arithmatex">\(14\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(\max\{p_3{+}v[1][7],\,p_4{+}v[1][5],\,p_5{+}v[1][3]\}=\max\{11,14,12\}=14\)</span></td>
        </tr>
        </table></div>

        This is the matrix $v$ after the execution of the DP algorithm:

        $$
        \begin{array}{l|rrrrrrrrr}
        \hline {v[h][k]} & {k=0} & {k=1} & {k=2} & {k=3} & {k=4} & {k=5} & {k=6} & {k=7} & {k=8} \\
        \hline {h=0} & {0} & {0} & {0} & {0} & {0} & {0} & {0} & {0} & {0} \\
        {h=1} & {-\infty} & {-\infty} & {6} & {6} & {9} & {9} & {9} & {9} & {9} \\
        {h=2} & {-\infty} & {-\infty} & {-\infty} & {8} & {8} & {11} & {11} & {14} & {14} \\
        \hline
        \end{array}
        $$

        This is the matrix $s$ after the execution of the DP algorithm:

        $$
        \begin{array}{l|rrrrrrrrr}
        \hline {s[h][k]} & {k=0} & {k=1} & {k=2} & {k=3} & {k=4} & {k=5} & {k=6} & {k=7} & {k=8} \\
        \hline {h=0} & {0} & {0} & {0} & {0} & {0} & {0} & {0} & {0} & {0} \\
        {h=1} & {0} & {0} & {1} & {1} & {2} & {2} & {2} & {2} & {2} \\
        {h=2} & {0} & {0} & {0} & {3} & {3} & {3} & {3} & {4} & {4} \\
        \hline
        \end{array}
        $$

    2. Starting from $h=2$ and $k=8$:

        <div class="tabella" markdown="0"><table>
        <tr>
        <th>Iteration</th>
        <th><span class="arithmatex">\(h\)</span></th>
        <th><span class="arithmatex">\(k\)</span></th>
        <th><span class="arithmatex">\(j=s[h][k]\)</span></th>
        <th>Selection</th>
        <th>Capacity</th>
        </tr>
        <tr>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(k=8\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(8\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(x[4]\leftarrow 1\)</span></td>
        <td><span class="arithmatex">\(k\leftarrow 8-3=5\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(x[2]\leftarrow 1\)</span></td>
        <td><span class="arithmatex">\(k\leftarrow 5-4=1\)</span></td>
        </tr>
        </table></div>

        The optimal solution is $S=\{2,4\}$, that is, the vector $x=(0,1,0,1,0)$. Its total weight is $4+3=7\le c$, and the optimal value is $v[2][8]=9+5=14$.

    3. The last row $v[2][\cdot]$ is $-\infty$ for $k<3$ and finite from $k=3$ on, so the smallest capacity for which the instance is feasible is $3$. It equals $\sum_{h=1}^{2}\min_{j\in\mathscr{J}_h} w_j=2+1=3$: the lightest item of every class must fit.

<a id="esercizio-21-3"></a>

!!! esercizio "Exercise 21.3: Exercise 3: Multiple-Choice Knapsack Problem"

    Consider the following MCKP instance, with a knapsack of capacity $c=8$ and $6$ items partitioned into $q=3$ classes: $\mathscr{J}_1=\{1,2\}$, $\mathscr{J}_2=\{3,4\}$, $\mathscr{J}_3=\{5,6\}$. The profits and weights are:

    $$
    \begin{array}{l|rr|rr|rr}
    \hline  & {j=1} & {j=2} & {j=3} & {j=4} & {j=5} & {j=6} \\
    \hline {p_j} & 2 & 5 & 3 & 7 & 4 & 6 \\
    {w_j} & 2 & 5 & 1 & 2 & 4 & 5 \\
    \hline
    \end{array}
    $$

    **Questions**

    1. Show the execution of the bottom-up DP algorithm by reporting, for each step, the cells $v[h][k]$ and $s[h][k]$; then write the matrices $v$ and $s$.

    2. Using the matrix $s$, reconstruct an optimal solution, one item per class, and report the optimal value.

    3. Using the last row of the matrix $v$, find the smallest capacity for which the instance is feasible, and compare it with $\sum_{h=1}^{q}\min_{j\in\mathscr{J}_h} w_j$.

??? soluzione "Solution"

    The recurrence and the conventions are those of the box at the beginning of these exercises.

    1. Step-by-step execution of the bottom-up DP algorithm. The row $h=0$ is $v[0][k]=0$ and $s[0][k]=0$ for every $k$; $s[h][k]=0$ when $v[h][k]=-\infty$. In case of ties the item met first in $\mathscr{J}_h$ is kept.

        <div class="tabella" markdown="0"><table>
        <tr>
        <th><span class="arithmatex">\(h\)</span></th>
        <th><span class="arithmatex">\(k\)</span></th>
        <th><span class="arithmatex">\(v[h][k]\)</span></th>
        <th><span class="arithmatex">\(s[h][k]\)</span></th>
        <th>Action</th>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(-\infty\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td>no item of <span class="arithmatex">\(\mathscr{J}_1\)</span> fits: <span class="arithmatex">\(-\infty\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(-\infty\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td>no item of <span class="arithmatex">\(\mathscr{J}_1\)</span> fits: <span class="arithmatex">\(-\infty\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(\max\{p_1{+}v[0][0]\}=\max\{2\}=2\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(\max\{p_1{+}v[0][1]\}=\max\{2\}=2\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(\max\{p_1{+}v[0][2]\}=\max\{2\}=2\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(\max\{p_1{+}v[0][3],\,p_2{+}v[0][0]\}=\max\{2,5\}=5\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(\max\{p_1{+}v[0][4],\,p_2{+}v[0][1]\}=\max\{2,5\}=5\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(7\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(\max\{p_1{+}v[0][5],\,p_2{+}v[0][2]\}=\max\{2,5\}=5\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(8\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(\max\{p_1{+}v[0][6],\,p_2{+}v[0][3]\}=\max\{2,5\}=5\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(-\infty\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td>no item of <span class="arithmatex">\(\mathscr{J}_2\)</span> fits: <span class="arithmatex">\(-\infty\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(-\infty\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(\max\{p_3{+}v[1][0]\}=\max\{-\infty\}=-\infty\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(-\infty\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(\max\{p_3{+}v[1][1],\,p_4{+}v[1][0]\}=\max\{-\infty,-\infty\}=-\infty\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(\max\{p_3{+}v[1][2],\,p_4{+}v[1][1]\}=\max\{5,-\infty\}=5\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(9\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(\max\{p_3{+}v[1][3],\,p_4{+}v[1][2]\}=\max\{5,9\}=9\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(9\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(\max\{p_3{+}v[1][4],\,p_4{+}v[1][3]\}=\max\{5,9\}=9\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(9\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(\max\{p_3{+}v[1][5],\,p_4{+}v[1][4]\}=\max\{8,9\}=9\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(7\)</span></td>
        <td><span class="arithmatex">\(12\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(\max\{p_3{+}v[1][6],\,p_4{+}v[1][5]\}=\max\{8,12\}=12\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(8\)</span></td>
        <td><span class="arithmatex">\(12\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(\max\{p_3{+}v[1][7],\,p_4{+}v[1][6]\}=\max\{8,12\}=12\)</span></td>
        </tr>
        </table></div>

        <div class="tabella" markdown="0"><table>
        <tr>
        <th><span class="arithmatex">\(h\)</span></th>
        <th><span class="arithmatex">\(k\)</span></th>
        <th><span class="arithmatex">\(v[h][k]\)</span></th>
        <th><span class="arithmatex">\(s[h][k]\)</span></th>
        <th>Action</th>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(-\infty\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td>no item of <span class="arithmatex">\(\mathscr{J}_3\)</span> fits: <span class="arithmatex">\(-\infty\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(-\infty\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td>no item of <span class="arithmatex">\(\mathscr{J}_3\)</span> fits: <span class="arithmatex">\(-\infty\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(-\infty\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td>no item of <span class="arithmatex">\(\mathscr{J}_3\)</span> fits: <span class="arithmatex">\(-\infty\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(-\infty\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td>no item of <span class="arithmatex">\(\mathscr{J}_3\)</span> fits: <span class="arithmatex">\(-\infty\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(-\infty\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(\max\{p_5{+}v[2][0]\}=\max\{-\infty\}=-\infty\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(-\infty\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(\max\{p_5{+}v[2][1],\,p_6{+}v[2][0]\}=\max\{-\infty,-\infty\}=-\infty\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(-\infty\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(\max\{p_5{+}v[2][2],\,p_6{+}v[2][1]\}=\max\{-\infty,-\infty\}=-\infty\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(7\)</span></td>
        <td><span class="arithmatex">\(9\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(\max\{p_5{+}v[2][3],\,p_6{+}v[2][2]\}=\max\{9,-\infty\}=9\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(8\)</span></td>
        <td><span class="arithmatex">\(13\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(\max\{p_5{+}v[2][4],\,p_6{+}v[2][3]\}=\max\{13,11\}=13\)</span></td>
        </tr>
        </table></div>

        This is the matrix $v$ after the execution of the DP algorithm:

        $$
        \begin{array}{l|rrrrrrrrr}
        \hline {v[h][k]} & {k=0} & {k=1} & {k=2} & {k=3} & {k=4} & {k=5} & {k=6} & {k=7} & {k=8} \\
        \hline {h=0} & {0} & {0} & {0} & {0} & {0} & {0} & {0} & {0} & {0} \\
        {h=1} & {-\infty} & {-\infty} & {2} & {2} & {2} & {5} & {5} & {5} & {5} \\
        {h=2} & {-\infty} & {-\infty} & {-\infty} & {5} & {9} & {9} & {9} & {12} & {12} \\
        {h=3} & {-\infty} & {-\infty} & {-\infty} & {-\infty} & {-\infty} & {-\infty} & {-\infty} & {9} & {13} \\
        \hline
        \end{array}
        $$

        This is the matrix $s$ after the execution of the DP algorithm:

        $$
        \begin{array}{l|rrrrrrrrr}
        \hline {s[h][k]} & {k=0} & {k=1} & {k=2} & {k=3} & {k=4} & {k=5} & {k=6} & {k=7} & {k=8} \\
        \hline {h=0} & {0} & {0} & {0} & {0} & {0} & {0} & {0} & {0} & {0} \\
        {h=1} & {0} & {0} & {1} & {1} & {1} & {2} & {2} & {2} & {2} \\
        {h=2} & {0} & {0} & {0} & {3} & {4} & {4} & {4} & {4} & {4} \\
        {h=3} & {0} & {0} & {0} & {0} & {0} & {0} & {0} & {5} & {5} \\
        \hline
        \end{array}
        $$

    2. Starting from $h=3$ and $k=8$:

        <div class="tabella" markdown="0"><table>
        <tr>
        <th>Iteration</th>
        <th><span class="arithmatex">\(h\)</span></th>
        <th><span class="arithmatex">\(k\)</span></th>
        <th><span class="arithmatex">\(j=s[h][k]\)</span></th>
        <th>Selection</th>
        <th>Capacity</th>
        </tr>
        <tr>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(k=8\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(8\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(x[5]\leftarrow 1\)</span></td>
        <td><span class="arithmatex">\(k\leftarrow 8-4=4\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(x[4]\leftarrow 1\)</span></td>
        <td><span class="arithmatex">\(k\leftarrow 4-2=2\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(x[1]\leftarrow 1\)</span></td>
        <td><span class="arithmatex">\(k\leftarrow 2-2=0\)</span></td>
        </tr>
        </table></div>

        The optimal solution is $S=\{1,4,5\}$, that is, the vector $x=(1,0,0,1,1,0)$. Its total weight is $2+2+4=8\le c$, and the optimal value is $v[3][8]=2+7+4=13$.

    3. The last row $v[3][\cdot]$ is $-\infty$ for $k<7$ and finite from $k=7$ on, so the smallest capacity for which the instance is feasible is $7$. It equals $\sum_{h=1}^{3}\min_{j\in\mathscr{J}_h} w_j=2+1+4=7$: the lightest item of every class must fit.

<a id="esercizio-21-4"></a>

!!! esercizio "Exercise 21.4: Exercise 4: Multiple-Choice Knapsack Problem"

    Consider the following MCKP instance, with a knapsack of capacity $c=7$ and $5$ items partitioned into $q=2$ classes: $\mathscr{J}_1=\{1,2,3\}$, $\mathscr{J}_2=\{4,5\}$. The profits and weights are:

    $$
    \begin{array}{l|rrr|rr}
    \hline  & {j=1} & {j=2} & {j=3} & {j=4} & {j=5} \\
    \hline {p_j} & 3 & 7 & 8 & 3 & 9 \\
    {w_j} & 2 & 3 & 4 & 4 & 5 \\
    \hline
    \end{array}
    $$

    **Questions**

    1. Show the execution of the bottom-up DP algorithm by reporting, for each step, the cells $v[h][k]$ and $s[h][k]$; then write the matrices $v$ and $s$.

    2. Using the matrix $s$, reconstruct an optimal solution, one item per class, and report the optimal value.

    3. Using the last row of the matrix $v$, find the smallest capacity for which the instance is feasible, and compare it with $\sum_{h=1}^{q}\min_{j\in\mathscr{J}_h} w_j$.

??? soluzione "Solution"

    The recurrence and the conventions are those of the box at the beginning of these exercises.

    1. Step-by-step execution of the bottom-up DP algorithm. The row $h=0$ is $v[0][k]=0$ and $s[0][k]=0$ for every $k$; $s[h][k]=0$ when $v[h][k]=-\infty$. In case of ties the item met first in $\mathscr{J}_h$ is kept.

        <div class="tabella" markdown="0"><table>
        <tr>
        <th><span class="arithmatex">\(h\)</span></th>
        <th><span class="arithmatex">\(k\)</span></th>
        <th><span class="arithmatex">\(v[h][k]\)</span></th>
        <th><span class="arithmatex">\(s[h][k]\)</span></th>
        <th>Action</th>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(-\infty\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td>no item of <span class="arithmatex">\(\mathscr{J}_1\)</span> fits: <span class="arithmatex">\(-\infty\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(-\infty\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td>no item of <span class="arithmatex">\(\mathscr{J}_1\)</span> fits: <span class="arithmatex">\(-\infty\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(\max\{p_1{+}v[0][0]\}=\max\{3\}=3\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(7\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(\max\{p_1{+}v[0][1],\,p_2{+}v[0][0]\}=\max\{3,7\}=7\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(8\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(\max\{p_1{+}v[0][2],\,p_2{+}v[0][1],\,p_3{+}v[0][0]\}=\max\{3,7,8\}=8\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(8\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(\max\{p_1{+}v[0][3],\,p_2{+}v[0][2],\,p_3{+}v[0][1]\}=\max\{3,7,8\}=8\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(8\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(\max\{p_1{+}v[0][4],\,p_2{+}v[0][3],\,p_3{+}v[0][2]\}=\max\{3,7,8\}=8\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(7\)</span></td>
        <td><span class="arithmatex">\(8\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(\max\{p_1{+}v[0][5],\,p_2{+}v[0][4],\,p_3{+}v[0][3]\}=\max\{3,7,8\}=8\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(-\infty\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td>no item of <span class="arithmatex">\(\mathscr{J}_2\)</span> fits: <span class="arithmatex">\(-\infty\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(-\infty\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td>no item of <span class="arithmatex">\(\mathscr{J}_2\)</span> fits: <span class="arithmatex">\(-\infty\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(-\infty\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td>no item of <span class="arithmatex">\(\mathscr{J}_2\)</span> fits: <span class="arithmatex">\(-\infty\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(-\infty\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td>no item of <span class="arithmatex">\(\mathscr{J}_2\)</span> fits: <span class="arithmatex">\(-\infty\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(-\infty\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(\max\{p_4{+}v[1][0]\}=\max\{-\infty\}=-\infty\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(-\infty\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(\max\{p_4{+}v[1][1],\,p_5{+}v[1][0]\}=\max\{-\infty,-\infty\}=-\infty\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(\max\{p_4{+}v[1][2],\,p_5{+}v[1][1]\}=\max\{6,-\infty\}=6\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(7\)</span></td>
        <td><span class="arithmatex">\(12\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(\max\{p_4{+}v[1][3],\,p_5{+}v[1][2]\}=\max\{10,12\}=12\)</span></td>
        </tr>
        </table></div>

        This is the matrix $v$ after the execution of the DP algorithm:

        $$
        \begin{array}{l|rrrrrrrr}
        \hline {v[h][k]} & {k=0} & {k=1} & {k=2} & {k=3} & {k=4} & {k=5} & {k=6} & {k=7} \\
        \hline {h=0} & {0} & {0} & {0} & {0} & {0} & {0} & {0} & {0} \\
        {h=1} & {-\infty} & {-\infty} & {3} & {7} & {8} & {8} & {8} & {8} \\
        {h=2} & {-\infty} & {-\infty} & {-\infty} & {-\infty} & {-\infty} & {-\infty} & {6} & {12} \\
        \hline
        \end{array}
        $$

        This is the matrix $s$ after the execution of the DP algorithm:

        $$
        \begin{array}{l|rrrrrrrr}
        \hline {s[h][k]} & {k=0} & {k=1} & {k=2} & {k=3} & {k=4} & {k=5} & {k=6} & {k=7} \\
        \hline {h=0} & {0} & {0} & {0} & {0} & {0} & {0} & {0} & {0} \\
        {h=1} & {0} & {0} & {1} & {2} & {3} & {3} & {3} & {3} \\
        {h=2} & {0} & {0} & {0} & {0} & {0} & {0} & {4} & {5} \\
        \hline
        \end{array}
        $$

    2. Starting from $h=2$ and $k=7$:

        <div class="tabella" markdown="0"><table>
        <tr>
        <th>Iteration</th>
        <th><span class="arithmatex">\(h\)</span></th>
        <th><span class="arithmatex">\(k\)</span></th>
        <th><span class="arithmatex">\(j=s[h][k]\)</span></th>
        <th>Selection</th>
        <th>Capacity</th>
        </tr>
        <tr>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(k=7\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(7\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(x[5]\leftarrow 1\)</span></td>
        <td><span class="arithmatex">\(k\leftarrow 7-5=2\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(x[1]\leftarrow 1\)</span></td>
        <td><span class="arithmatex">\(k\leftarrow 2-2=0\)</span></td>
        </tr>
        </table></div>

        The optimal solution is $S=\{1,5\}$, that is, the vector $x=(1,0,0,0,1)$. Its total weight is $2+5=7\le c$, and the optimal value is $v[2][7]=3+9=12$.

    3. The last row $v[2][\cdot]$ is $-\infty$ for $k<6$ and finite from $k=6$ on, so the smallest capacity for which the instance is feasible is $6$. It equals $\sum_{h=1}^{2}\min_{j\in\mathscr{J}_h} w_j=2+4=6$: the lightest item of every class must fit.

<a id="esercizio-21-5"></a>

!!! esercizio "Exercise 21.5: Exercise 5: Multiple-Choice Knapsack Problem"

    Consider the following MCKP instance, with a knapsack of capacity $c=9$ and $6$ items partitioned into $q=3$ classes: $\mathscr{J}_1=\{1,2\}$, $\mathscr{J}_2=\{3,4\}$, $\mathscr{J}_3=\{5,6\}$. The profits and weights are:

    $$
    \begin{array}{l|rr|rr|rr}
    \hline  & {j=1} & {j=2} & {j=3} & {j=4} & {j=5} & {j=6} \\
    \hline {p_j} & 3 & 6 & 2 & 7 & 3 & 6 \\
    {w_j} & 1 & 4 & 1 & 3 & 4 & 5 \\
    \hline
    \end{array}
    $$

    **Questions**

    1. Show the execution of the bottom-up DP algorithm by reporting, for each step, the cells $v[h][k]$ and $s[h][k]$; then write the matrices $v$ and $s$.

    2. Using the matrix $s$, reconstruct an optimal solution, one item per class, and report the optimal value.

    3. Using the last row of the matrix $v$, find the smallest capacity for which the instance is feasible, and compare it with $\sum_{h=1}^{q}\min_{j\in\mathscr{J}_h} w_j$.

??? soluzione "Solution"

    The recurrence and the conventions are those of the box at the beginning of these exercises.

    1. Step-by-step execution of the bottom-up DP algorithm. The row $h=0$ is $v[0][k]=0$ and $s[0][k]=0$ for every $k$; $s[h][k]=0$ when $v[h][k]=-\infty$. In case of ties the item met first in $\mathscr{J}_h$ is kept.

        <div class="tabella" markdown="0"><table>
        <tr>
        <th><span class="arithmatex">\(h\)</span></th>
        <th><span class="arithmatex">\(k\)</span></th>
        <th><span class="arithmatex">\(v[h][k]\)</span></th>
        <th><span class="arithmatex">\(s[h][k]\)</span></th>
        <th>Action</th>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(-\infty\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td>no item of <span class="arithmatex">\(\mathscr{J}_1\)</span> fits: <span class="arithmatex">\(-\infty\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(\max\{p_1{+}v[0][0]\}=\max\{3\}=3\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(\max\{p_1{+}v[0][1]\}=\max\{3\}=3\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(\max\{p_1{+}v[0][2]\}=\max\{3\}=3\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(\max\{p_1{+}v[0][3],\,p_2{+}v[0][0]\}=\max\{3,6\}=6\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(\max\{p_1{+}v[0][4],\,p_2{+}v[0][1]\}=\max\{3,6\}=6\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(\max\{p_1{+}v[0][5],\,p_2{+}v[0][2]\}=\max\{3,6\}=6\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(7\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(\max\{p_1{+}v[0][6],\,p_2{+}v[0][3]\}=\max\{3,6\}=6\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(8\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(\max\{p_1{+}v[0][7],\,p_2{+}v[0][4]\}=\max\{3,6\}=6\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(9\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(\max\{p_1{+}v[0][8],\,p_2{+}v[0][5]\}=\max\{3,6\}=6\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(-\infty\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td>no item of <span class="arithmatex">\(\mathscr{J}_2\)</span> fits: <span class="arithmatex">\(-\infty\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(-\infty\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(\max\{p_3{+}v[1][0]\}=\max\{-\infty\}=-\infty\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(\max\{p_3{+}v[1][1]\}=\max\{5\}=5\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(\max\{p_3{+}v[1][2],\,p_4{+}v[1][0]\}=\max\{5,-\infty\}=5\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(10\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(\max\{p_3{+}v[1][3],\,p_4{+}v[1][1]\}=\max\{5,10\}=10\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(10\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(\max\{p_3{+}v[1][4],\,p_4{+}v[1][2]\}=\max\{8,10\}=10\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(10\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(\max\{p_3{+}v[1][5],\,p_4{+}v[1][3]\}=\max\{8,10\}=10\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(7\)</span></td>
        <td><span class="arithmatex">\(13\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(\max\{p_3{+}v[1][6],\,p_4{+}v[1][4]\}=\max\{8,13\}=13\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(8\)</span></td>
        <td><span class="arithmatex">\(13\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(\max\{p_3{+}v[1][7],\,p_4{+}v[1][5]\}=\max\{8,13\}=13\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(9\)</span></td>
        <td><span class="arithmatex">\(13\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(\max\{p_3{+}v[1][8],\,p_4{+}v[1][6]\}=\max\{8,13\}=13\)</span></td>
        </tr>
        </table></div>

        <div class="tabella" markdown="0"><table>
        <tr>
        <th><span class="arithmatex">\(h\)</span></th>
        <th><span class="arithmatex">\(k\)</span></th>
        <th><span class="arithmatex">\(v[h][k]\)</span></th>
        <th><span class="arithmatex">\(s[h][k]\)</span></th>
        <th>Action</th>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(-\infty\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td>no item of <span class="arithmatex">\(\mathscr{J}_3\)</span> fits: <span class="arithmatex">\(-\infty\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(-\infty\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td>no item of <span class="arithmatex">\(\mathscr{J}_3\)</span> fits: <span class="arithmatex">\(-\infty\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(-\infty\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td>no item of <span class="arithmatex">\(\mathscr{J}_3\)</span> fits: <span class="arithmatex">\(-\infty\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(-\infty\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td>no item of <span class="arithmatex">\(\mathscr{J}_3\)</span> fits: <span class="arithmatex">\(-\infty\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(-\infty\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(\max\{p_5{+}v[2][0]\}=\max\{-\infty\}=-\infty\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(-\infty\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(\max\{p_5{+}v[2][1],\,p_6{+}v[2][0]\}=\max\{-\infty,-\infty\}=-\infty\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(8\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(\max\{p_5{+}v[2][2],\,p_6{+}v[2][1]\}=\max\{8,-\infty\}=8\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(7\)</span></td>
        <td><span class="arithmatex">\(11\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(\max\{p_5{+}v[2][3],\,p_6{+}v[2][2]\}=\max\{8,11\}=11\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(8\)</span></td>
        <td><span class="arithmatex">\(13\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(\max\{p_5{+}v[2][4],\,p_6{+}v[2][3]\}=\max\{13,11\}=13\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(9\)</span></td>
        <td><span class="arithmatex">\(16\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(\max\{p_5{+}v[2][5],\,p_6{+}v[2][4]\}=\max\{13,16\}=16\)</span></td>
        </tr>
        </table></div>

        This is the matrix $v$ after the execution of the DP algorithm:

        $$
        \begin{array}{l|rrrrrrrrrr}
        \hline {v[h][k]} & {k=0} & {k=1} & {k=2} & {k=3} & {k=4} & {k=5} & {k=6} & {k=7} & {k=8} & {k=9} \\
        \hline {h=0} & {0} & {0} & {0} & {0} & {0} & {0} & {0} & {0} & {0} & {0} \\
        {h=1} & {-\infty} & {3} & {3} & {3} & {6} & {6} & {6} & {6} & {6} & {6} \\
        {h=2} & {-\infty} & {-\infty} & {5} & {5} & {10} & {10} & {10} & {13} & {13} & {13} \\
        {h=3} & {-\infty} & {-\infty} & {-\infty} & {-\infty} & {-\infty} & {-\infty} & {8} & {11} & {13} & {16} \\
        \hline
        \end{array}
        $$

        This is the matrix $s$ after the execution of the DP algorithm:

        $$
        \begin{array}{l|rrrrrrrrrr}
        \hline {s[h][k]} & {k=0} & {k=1} & {k=2} & {k=3} & {k=4} & {k=5} & {k=6} & {k=7} & {k=8} & {k=9} \\
        \hline {h=0} & {0} & {0} & {0} & {0} & {0} & {0} & {0} & {0} & {0} & {0} \\
        {h=1} & {0} & {1} & {1} & {1} & {2} & {2} & {2} & {2} & {2} & {2} \\
        {h=2} & {0} & {0} & {3} & {3} & {4} & {4} & {4} & {4} & {4} & {4} \\
        {h=3} & {0} & {0} & {0} & {0} & {0} & {0} & {5} & {6} & {5} & {6} \\
        \hline
        \end{array}
        $$

    2. Starting from $h=3$ and $k=9$:

        <div class="tabella" markdown="0"><table>
        <tr>
        <th>Iteration</th>
        <th><span class="arithmatex">\(h\)</span></th>
        <th><span class="arithmatex">\(k\)</span></th>
        <th><span class="arithmatex">\(j=s[h][k]\)</span></th>
        <th>Selection</th>
        <th>Capacity</th>
        </tr>
        <tr>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(k=9\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(9\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(x[6]\leftarrow 1\)</span></td>
        <td><span class="arithmatex">\(k\leftarrow 9-5=4\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(x[4]\leftarrow 1\)</span></td>
        <td><span class="arithmatex">\(k\leftarrow 4-3=1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(x[1]\leftarrow 1\)</span></td>
        <td><span class="arithmatex">\(k\leftarrow 1-1=0\)</span></td>
        </tr>
        </table></div>

        The optimal solution is $S=\{1,4,6\}$, that is, the vector $x=(1,0,0,1,0,1)$. Its total weight is $1+3+5=9\le c$, and the optimal value is $v[3][9]=3+7+6=16$.

    3. The last row $v[3][\cdot]$ is $-\infty$ for $k<6$ and finite from $k=6$ on, so the smallest capacity for which the instance is feasible is $6$. It equals $\sum_{h=1}^{3}\min_{j\in\mathscr{J}_h} w_j=1+1+4=6$: the lightest item of every class must fit.
