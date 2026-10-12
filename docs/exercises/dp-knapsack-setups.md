---
title: "Exercises · DP for the knapsack problem with setups"
---

# Exercises · DP for the knapsack problem with setups

<div class="info-capitolo" markdown>

**Exercises · Chapter 23** · each solution opens with a click · [:material-book-open-variant: Chapter 23: Knapsack with setups (KPS)](../dynamic-programming/dp-knapsack-setups.md) · [:material-file-pdf-box: Exercises, volume 3 (PDF)](../pdf/exercises-3-dynamic-programming.pdf)

</div>

!!! formula "Recurrence used in these exercises"

    The DP algorithm of the chapter [«DP for the knapsack problem with setups»](https://fabiofurini.github.io/combinatorial-optimization/dynamic-programming/dp-knapsack-setups/). The items are numbered class by class, $\mathscr{J}_h=\{\ell_{h-1}+1,\dots,\ell_h\}$, $t_h=|\mathscr{J}_h|$, and $j=\ell_{h-1}+i$ is the $i$-th item of class $h$:

    $$
    u(h,i,k)= \left\{ \begin{array}{ll}
    -\infty & \textrm{if $i=0$ and $k<s_h$,}\\[2ex]
    v(h-1,k-s_h)-f_h & \textrm{if $i=0$ and $k\ge s_h$,}\\[2ex]
    u(h,i-1,k) & \textrm{if $i\ge 1$ and $w_j>k$,}\\[2ex]
    \begin{array}[t]{@{}l@{}}\displaystyle \max \bigg\{ u(h,i-1,k),\\ \qquad p_j+u(h,i-1,k-w_j) \bigg\}\end{array} & \textrm{if $i\ge 1$ and $w_j\le k$,}
    \end{array} \right.
    $$

    $$
    v(h,k)= \left\{ \begin{array}{ll}
    0 & \textrm{if $h=0$,}\\[2ex]
    \max \big\{ v(h-1,k),\; u(h,t_h,k) \big\} & \textrm{if $h\ge 1$.}
    \end{array} \right.
    $$

    The optimal value is $v(q,c)$. The choice tables store $s[h][i][k]=1$ if the $i$-th item of class $h$ is selected, and $o[h][k]=1$ if class $h$ is open. The reconstruction scans the classes from $h=q$ and $k=c$: an open class is scanned as in the KP, and then $k$ decreases by $s_h$.

<a id="esercizio-23-1"></a>

!!! esercizio "Exercise 23.1: Exercise 1: Knapsack Problem with Setups"

    Consider the following KPS instance, with a knapsack of capacity $c=7$ and $4$ items partitioned into $q=2$ classes: $\mathscr{J}_1=\{1,2\}$ with $f_1=2$ and $s_1=1$, $\mathscr{J}_2=\{3,4\}$ with $f_2=2$ and $s_2=1$. The revenues and weights are:

    $$
    \begin{array}{l|rr|rr}
    \hline  & {j=1} & {j=2} & {j=3} & {j=4} \\
    \hline {p_j} & 2 & 9 & 3 & 8 \\
    {w_j} & 2 & 1 & 2 & 1 \\
    \hline
    \end{array}
    $$

    **Questions**

    1. Execute the bottom-up DP algorithm and write the table of all the rows $v[h][\cdot]$ and $u[h][i][\cdot]$, in the order of computation.

    2. Write the choice tables $s$ and $o$, reconstruct an optimal solution $(x_1,x_2,x_3,x_4)$, say which classes are open, and report the optimal value.

??? soluzione "Solution"

    The recurrence and the conventions are those of the box at the beginning of these exercises.

    1. For each class $h$ the DP algorithm computes the setup row $u[h][0][\cdot]$, the rows of the items of class $h$, and the row $v[h][\cdot]$. In case of ties the item is not selected and the class stays closed. This is the table after the execution of the DP algorithm:

        <div class="tabella" markdown="0"><table>
        <tr>
        <th>Row</th>
        <th><span class="arithmatex">\(k=0\)</span></th>
        <th><span class="arithmatex">\(k=1\)</span></th>
        <th><span class="arithmatex">\(k=2\)</span></th>
        <th><span class="arithmatex">\(k=3\)</span></th>
        <th><span class="arithmatex">\(k=4\)</span></th>
        <th><span class="arithmatex">\(k=5\)</span></th>
        <th><span class="arithmatex">\(k=6\)</span></th>
        <th><span class="arithmatex">\(k=7\)</span></th>
        </tr>
        <tr>
        <td><span class="arithmatex">\(v[0][k]\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(u[1][0][k]\)</span> (setup)</td>
        <td><span class="arithmatex">\(-\infty\)</span></td>
        <td><span class="arithmatex">\(-2\)</span></td>
        <td><span class="arithmatex">\(-2\)</span></td>
        <td><span class="arithmatex">\(-2\)</span></td>
        <td><span class="arithmatex">\(-2\)</span></td>
        <td><span class="arithmatex">\(-2\)</span></td>
        <td><span class="arithmatex">\(-2\)</span></td>
        <td><span class="arithmatex">\(-2\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(u[1][1][k]\)</span> (<span class="arithmatex">\(j=1\)</span>)</td>
        <td><span class="arithmatex">\(-\infty\)</span></td>
        <td><span class="arithmatex">\(-2\)</span></td>
        <td><span class="arithmatex">\(-2\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(u[1][2][k]\)</span> (<span class="arithmatex">\(j=2\)</span>)</td>
        <td><span class="arithmatex">\(-\infty\)</span></td>
        <td><span class="arithmatex">\(-2\)</span></td>
        <td><span class="arithmatex">\(7\)</span></td>
        <td><span class="arithmatex">\(7\)</span></td>
        <td><span class="arithmatex">\(9\)</span></td>
        <td><span class="arithmatex">\(9\)</span></td>
        <td><span class="arithmatex">\(9\)</span></td>
        <td><span class="arithmatex">\(9\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(v[1][k]\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(7\)</span></td>
        <td><span class="arithmatex">\(7\)</span></td>
        <td><span class="arithmatex">\(9\)</span></td>
        <td><span class="arithmatex">\(9\)</span></td>
        <td><span class="arithmatex">\(9\)</span></td>
        <td><span class="arithmatex">\(9\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(u[2][0][k]\)</span> (setup)</td>
        <td><span class="arithmatex">\(-\infty\)</span></td>
        <td><span class="arithmatex">\(-2\)</span></td>
        <td><span class="arithmatex">\(-2\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(7\)</span></td>
        <td><span class="arithmatex">\(7\)</span></td>
        <td><span class="arithmatex">\(7\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(u[2][1][k]\)</span> (<span class="arithmatex">\(j=3\)</span>)</td>
        <td><span class="arithmatex">\(-\infty\)</span></td>
        <td><span class="arithmatex">\(-2\)</span></td>
        <td><span class="arithmatex">\(-2\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(8\)</span></td>
        <td><span class="arithmatex">\(8\)</span></td>
        <td><span class="arithmatex">\(10\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(u[2][2][k]\)</span> (<span class="arithmatex">\(j=4\)</span>)</td>
        <td><span class="arithmatex">\(-\infty\)</span></td>
        <td><span class="arithmatex">\(-2\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(13\)</span></td>
        <td><span class="arithmatex">\(13\)</span></td>
        <td><span class="arithmatex">\(16\)</span></td>
        <td><span class="arithmatex">\(16\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(v[2][k]\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(7\)</span></td>
        <td><span class="arithmatex">\(7\)</span></td>
        <td><span class="arithmatex">\(13\)</span></td>
        <td><span class="arithmatex">\(13\)</span></td>
        <td><span class="arithmatex">\(16\)</span></td>
        <td><span class="arithmatex">\(16\)</span></td>
        </tr>
        </table></div>

        These are the computations of the cells used by the reconstruction, in the order in which it reads them:

        - $v[2][7]=\max\{v[1][7],\,u[2][2][7]\}=\max\{9,\,16\}=16$

        - $u[2][2][7]=\max\{u[2][1][7],\,p_4+u[2][1][6]\}=\max\{10,\,16\}=16$

        - $u[2][1][6]=\max\{u[2][0][6],\,p_3+u[2][0][4]\}=\max\{7,\,8\}=8$

        - $u[2][0][4]=v[1][3]-f_2=7-2=5$

        - $v[1][3]=\max\{v[0][3],\,u[1][2][3]\}=\max\{0,\,7\}=7$

        - $u[1][2][3]=\max\{u[1][1][3],\,p_2+u[1][1][2]\}=\max\{0,\,7\}=7$

        - $u[1][1][2]=\max\{u[1][0][2],\,p_1+u[1][0][0]\}=\max\{-2,\,-\infty\}=-2$

        - $u[1][0][2]=v[0][1]-f_1=0-2=-2$

    2. These are the choice tables computed by the DP algorithm:

        <div class="tabella" markdown="0"><table>
        <tr>
        <th>Row</th>
        <th><span class="arithmatex">\(k=0\)</span></th>
        <th><span class="arithmatex">\(k=1\)</span></th>
        <th><span class="arithmatex">\(k=2\)</span></th>
        <th><span class="arithmatex">\(k=3\)</span></th>
        <th><span class="arithmatex">\(k=4\)</span></th>
        <th><span class="arithmatex">\(k=5\)</span></th>
        <th><span class="arithmatex">\(k=6\)</span></th>
        <th><span class="arithmatex">\(k=7\)</span></th>
        </tr>
        <tr>
        <td><span class="arithmatex">\(s[1][1][k]\)</span> (<span class="arithmatex">\(j=1\)</span>)</td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(s[1][2][k]\)</span> (<span class="arithmatex">\(j=2\)</span>)</td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(o[1][k]\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(s[2][1][k]\)</span> (<span class="arithmatex">\(j=3\)</span>)</td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(s[2][2][k]\)</span> (<span class="arithmatex">\(j=4\)</span>)</td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(o[2][k]\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        </tr>
        </table></div>

        Starting from $h=2$ and $k=7$:

        <div class="tabella" markdown="0"><table>
        <tr>
        <th>Iteration</th>
        <th>Stage</th>
        <th><span class="arithmatex">\(k\)</span></th>
        <th>Choice</th>
        <th><span class="arithmatex">\(x[1]\)</span></th>
        <th><span class="arithmatex">\(x[2]\)</span></th>
        <th><span class="arithmatex">\(x[3]\)</span></th>
        <th><span class="arithmatex">\(x[4]\)</span></th>
        <th>Action</th>
        </tr>
        <tr>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(k=7\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(h=2\)</span></td>
        <td><span class="arithmatex">\(7\)</span></td>
        <td><span class="arithmatex">\(o[2][7]=1\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>class <span class="arithmatex">\(2\)</span> open</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(j=4\)</span></td>
        <td><span class="arithmatex">\(7\)</span></td>
        <td><span class="arithmatex">\(s[2][2][7]=1\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td class="cella-blu">1</td>
        <td><span class="arithmatex">\(k\leftarrow 7-1=6\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(j=3\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(s[2][1][6]=1\)</span></td>
        <td>0</td>
        <td>0</td>
        <td class="cella-blu">1</td>
        <td>1</td>
        <td><span class="arithmatex">\(k\leftarrow 6-2=4\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>1</td>
        <td>1</td>
        <td>setup: <span class="arithmatex">\(k\leftarrow 4-s_2=3\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(h=1\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(o[1][3]=1\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>1</td>
        <td>1</td>
        <td>class <span class="arithmatex">\(1\)</span> open</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(j=2\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(s[1][2][3]=1\)</span></td>
        <td>0</td>
        <td class="cella-blu">1</td>
        <td>1</td>
        <td>1</td>
        <td><span class="arithmatex">\(k\leftarrow 3-1=2\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(j=1\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(s[1][1][2]=0\)</span></td>
        <td class="cella-blu">0</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td><span class="arithmatex">\(k=2\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>0</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>setup: <span class="arithmatex">\(k\leftarrow 2-s_1=1\)</span></td>
        </tr>
        </table></div>

        The vector $(0,1,1,1)$ is an optimal solution: both classes are open, and the items $\{2,3,4\}$ are selected. Its total weight is $1+2+1+s_1+s_2=6\le c$, and the optimal value is $v[2][7]=9+3+8-f_1-f_2=16$.

<a id="esercizio-23-2"></a>

!!! esercizio "Exercise 23.2: Exercise 2: Knapsack Problem with Setups"

    Consider the following KPS instance, with a knapsack of capacity $c=7$ and $4$ items partitioned into $q=2$ classes: $\mathscr{J}_1=\{1,2\}$ with $f_1=4$ and $s_1=2$, $\mathscr{J}_2=\{3,4\}$ with $f_2=4$ and $s_2=1$. The revenues and weights are:

    $$
    \begin{array}{l|rr|rr}
    \hline  & {j=1} & {j=2} & {j=3} & {j=4} \\
    \hline {p_j} & 7 & 5 & 9 & 2 \\
    {w_j} & 3 & 3 & 3 & 3 \\
    \hline
    \end{array}
    $$

    **Questions**

    1. Execute the bottom-up DP algorithm and write the table of all the rows $v[h][\cdot]$ and $u[h][i][\cdot]$, in the order of computation.

    2. Write the choice tables $s$ and $o$, reconstruct an optimal solution $(x_1,x_2,x_3,x_4)$, say which classes are open, and report the optimal value.

??? soluzione "Solution"

    The recurrence and the conventions are those of the box at the beginning of these exercises.

    1. For each class $h$ the DP algorithm computes the setup row $u[h][0][\cdot]$, the rows of the items of class $h$, and the row $v[h][\cdot]$. In case of ties the item is not selected and the class stays closed. This is the table after the execution of the DP algorithm:

        <div class="tabella" markdown="0"><table>
        <tr>
        <th>Row</th>
        <th><span class="arithmatex">\(k=0\)</span></th>
        <th><span class="arithmatex">\(k=1\)</span></th>
        <th><span class="arithmatex">\(k=2\)</span></th>
        <th><span class="arithmatex">\(k=3\)</span></th>
        <th><span class="arithmatex">\(k=4\)</span></th>
        <th><span class="arithmatex">\(k=5\)</span></th>
        <th><span class="arithmatex">\(k=6\)</span></th>
        <th><span class="arithmatex">\(k=7\)</span></th>
        </tr>
        <tr>
        <td><span class="arithmatex">\(v[0][k]\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(u[1][0][k]\)</span> (setup)</td>
        <td><span class="arithmatex">\(-\infty\)</span></td>
        <td><span class="arithmatex">\(-\infty\)</span></td>
        <td><span class="arithmatex">\(-4\)</span></td>
        <td><span class="arithmatex">\(-4\)</span></td>
        <td><span class="arithmatex">\(-4\)</span></td>
        <td><span class="arithmatex">\(-4\)</span></td>
        <td><span class="arithmatex">\(-4\)</span></td>
        <td><span class="arithmatex">\(-4\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(u[1][1][k]\)</span> (<span class="arithmatex">\(j=1\)</span>)</td>
        <td><span class="arithmatex">\(-\infty\)</span></td>
        <td><span class="arithmatex">\(-\infty\)</span></td>
        <td><span class="arithmatex">\(-4\)</span></td>
        <td><span class="arithmatex">\(-4\)</span></td>
        <td><span class="arithmatex">\(-4\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(u[1][2][k]\)</span> (<span class="arithmatex">\(j=2\)</span>)</td>
        <td><span class="arithmatex">\(-\infty\)</span></td>
        <td><span class="arithmatex">\(-\infty\)</span></td>
        <td><span class="arithmatex">\(-4\)</span></td>
        <td><span class="arithmatex">\(-4\)</span></td>
        <td><span class="arithmatex">\(-4\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(v[1][k]\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(u[2][0][k]\)</span> (setup)</td>
        <td><span class="arithmatex">\(-\infty\)</span></td>
        <td><span class="arithmatex">\(-4\)</span></td>
        <td><span class="arithmatex">\(-4\)</span></td>
        <td><span class="arithmatex">\(-4\)</span></td>
        <td><span class="arithmatex">\(-4\)</span></td>
        <td><span class="arithmatex">\(-4\)</span></td>
        <td><span class="arithmatex">\(-1\)</span></td>
        <td><span class="arithmatex">\(-1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(u[2][1][k]\)</span> (<span class="arithmatex">\(j=3\)</span>)</td>
        <td><span class="arithmatex">\(-\infty\)</span></td>
        <td><span class="arithmatex">\(-4\)</span></td>
        <td><span class="arithmatex">\(-4\)</span></td>
        <td><span class="arithmatex">\(-4\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(u[2][2][k]\)</span> (<span class="arithmatex">\(j=4\)</span>)</td>
        <td><span class="arithmatex">\(-\infty\)</span></td>
        <td><span class="arithmatex">\(-4\)</span></td>
        <td><span class="arithmatex">\(-4\)</span></td>
        <td><span class="arithmatex">\(-4\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(7\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(v[2][k]\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(7\)</span></td>
        </tr>
        </table></div>

        These are the computations of the cells used by the reconstruction, in the order in which it reads them:

        - $v[2][7]=\max\{v[1][7],\,u[2][2][7]\}=\max\{3,\,7\}=7$

        - $u[2][2][7]=\max\{u[2][1][7],\,p_4+u[2][1][4]\}=\max\{5,\,7\}=7$

        - $u[2][1][4]=\max\{u[2][0][4],\,p_3+u[2][0][1]\}=\max\{-4,\,5\}=5$

        - $u[2][0][1]=v[1][0]-f_2=0-4=-4$

        - $v[1][0]=\max\{v[0][0],\,u[1][2][0]\}=\max\{0,\,-\infty\}=0$

    2. These are the choice tables computed by the DP algorithm:

        <div class="tabella" markdown="0"><table>
        <tr>
        <th>Row</th>
        <th><span class="arithmatex">\(k=0\)</span></th>
        <th><span class="arithmatex">\(k=1\)</span></th>
        <th><span class="arithmatex">\(k=2\)</span></th>
        <th><span class="arithmatex">\(k=3\)</span></th>
        <th><span class="arithmatex">\(k=4\)</span></th>
        <th><span class="arithmatex">\(k=5\)</span></th>
        <th><span class="arithmatex">\(k=6\)</span></th>
        <th><span class="arithmatex">\(k=7\)</span></th>
        </tr>
        <tr>
        <td><span class="arithmatex">\(s[1][1][k]\)</span> (<span class="arithmatex">\(j=1\)</span>)</td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(s[1][2][k]\)</span> (<span class="arithmatex">\(j=2\)</span>)</td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(o[1][k]\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(s[2][1][k]\)</span> (<span class="arithmatex">\(j=3\)</span>)</td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(s[2][2][k]\)</span> (<span class="arithmatex">\(j=4\)</span>)</td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(o[2][k]\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        </tr>
        </table></div>

        Starting from $h=2$ and $k=7$:

        <div class="tabella" markdown="0"><table>
        <tr>
        <th>Iteration</th>
        <th>Stage</th>
        <th><span class="arithmatex">\(k\)</span></th>
        <th>Choice</th>
        <th><span class="arithmatex">\(x[1]\)</span></th>
        <th><span class="arithmatex">\(x[2]\)</span></th>
        <th><span class="arithmatex">\(x[3]\)</span></th>
        <th><span class="arithmatex">\(x[4]\)</span></th>
        <th>Action</th>
        </tr>
        <tr>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(k=7\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(h=2\)</span></td>
        <td><span class="arithmatex">\(7\)</span></td>
        <td><span class="arithmatex">\(o[2][7]=1\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>class <span class="arithmatex">\(2\)</span> open</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(j=4\)</span></td>
        <td><span class="arithmatex">\(7\)</span></td>
        <td><span class="arithmatex">\(s[2][2][7]=1\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td class="cella-blu">1</td>
        <td><span class="arithmatex">\(k\leftarrow 7-3=4\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(j=3\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(s[2][1][4]=1\)</span></td>
        <td>0</td>
        <td>0</td>
        <td class="cella-blu">1</td>
        <td>1</td>
        <td><span class="arithmatex">\(k\leftarrow 4-3=1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>1</td>
        <td>1</td>
        <td>setup: <span class="arithmatex">\(k\leftarrow 1-s_2=0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(h=1\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(o[1][0]=0\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>1</td>
        <td>1</td>
        <td>class <span class="arithmatex">\(1\)</span> closed</td>
        </tr>
        </table></div>

        The vector $(0,0,1,1)$ is an optimal solution: only class $2$ is open, and the items $\{3,4\}$ are selected. Its total weight is $3+3+s_2=7\le c$, and the optimal value is $v[2][7]=9+2-f_2=7$.

<a id="esercizio-23-3"></a>

!!! esercizio "Exercise 23.3: Exercise 3: Knapsack Problem with Setups"

    Consider the following KPS instance, with a knapsack of capacity $c=8$ and $5$ items partitioned into $q=2$ classes: $\mathscr{J}_1=\{1,2\}$ with $f_1=1$ and $s_1=1$, $\mathscr{J}_2=\{3,4,5\}$ with $f_2=2$ and $s_2=2$. The revenues and weights are:

    $$
    \begin{array}{l|rr|rrr}
    \hline  & {j=1} & {j=2} & {j=3} & {j=4} & {j=5} \\
    \hline {p_j} & 3 & 9 & 5 & 7 & 9 \\
    {w_j} & 4 & 1 & 1 & 3 & 1 \\
    \hline
    \end{array}
    $$

    **Questions**

    1. Execute the bottom-up DP algorithm and write the table of all the rows $v[h][\cdot]$ and $u[h][i][\cdot]$, in the order of computation.

    2. Write the choice tables $s$ and $o$, reconstruct an optimal solution $(x_1,x_2,x_3,x_4,x_5)$, say which classes are open, and report the optimal value.

??? soluzione "Solution"

    The recurrence and the conventions are those of the box at the beginning of these exercises.

    1. For each class $h$ the DP algorithm computes the setup row $u[h][0][\cdot]$, the rows of the items of class $h$, and the row $v[h][\cdot]$. In case of ties the item is not selected and the class stays closed. This is the table after the execution of the DP algorithm:

        <div class="tabella" markdown="0"><table>
        <tr>
        <th>Row</th>
        <th><span class="arithmatex">\(k=0\)</span></th>
        <th><span class="arithmatex">\(k=1\)</span></th>
        <th><span class="arithmatex">\(k=2\)</span></th>
        <th><span class="arithmatex">\(k=3\)</span></th>
        <th><span class="arithmatex">\(k=4\)</span></th>
        <th><span class="arithmatex">\(k=5\)</span></th>
        <th><span class="arithmatex">\(k=6\)</span></th>
        <th><span class="arithmatex">\(k=7\)</span></th>
        <th><span class="arithmatex">\(k=8\)</span></th>
        </tr>
        <tr>
        <td><span class="arithmatex">\(v[0][k]\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(u[1][0][k]\)</span> (setup)</td>
        <td><span class="arithmatex">\(-\infty\)</span></td>
        <td><span class="arithmatex">\(-1\)</span></td>
        <td><span class="arithmatex">\(-1\)</span></td>
        <td><span class="arithmatex">\(-1\)</span></td>
        <td><span class="arithmatex">\(-1\)</span></td>
        <td><span class="arithmatex">\(-1\)</span></td>
        <td><span class="arithmatex">\(-1\)</span></td>
        <td><span class="arithmatex">\(-1\)</span></td>
        <td><span class="arithmatex">\(-1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(u[1][1][k]\)</span> (<span class="arithmatex">\(j=1\)</span>)</td>
        <td><span class="arithmatex">\(-\infty\)</span></td>
        <td><span class="arithmatex">\(-1\)</span></td>
        <td><span class="arithmatex">\(-1\)</span></td>
        <td><span class="arithmatex">\(-1\)</span></td>
        <td><span class="arithmatex">\(-1\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(u[1][2][k]\)</span> (<span class="arithmatex">\(j=2\)</span>)</td>
        <td><span class="arithmatex">\(-\infty\)</span></td>
        <td><span class="arithmatex">\(-1\)</span></td>
        <td><span class="arithmatex">\(8\)</span></td>
        <td><span class="arithmatex">\(8\)</span></td>
        <td><span class="arithmatex">\(8\)</span></td>
        <td><span class="arithmatex">\(8\)</span></td>
        <td><span class="arithmatex">\(11\)</span></td>
        <td><span class="arithmatex">\(11\)</span></td>
        <td><span class="arithmatex">\(11\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(v[1][k]\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(8\)</span></td>
        <td><span class="arithmatex">\(8\)</span></td>
        <td><span class="arithmatex">\(8\)</span></td>
        <td><span class="arithmatex">\(8\)</span></td>
        <td><span class="arithmatex">\(11\)</span></td>
        <td><span class="arithmatex">\(11\)</span></td>
        <td><span class="arithmatex">\(11\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(u[2][0][k]\)</span> (setup)</td>
        <td><span class="arithmatex">\(-\infty\)</span></td>
        <td><span class="arithmatex">\(-\infty\)</span></td>
        <td><span class="arithmatex">\(-2\)</span></td>
        <td><span class="arithmatex">\(-2\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(9\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(u[2][1][k]\)</span> (<span class="arithmatex">\(j=3\)</span>)</td>
        <td><span class="arithmatex">\(-\infty\)</span></td>
        <td><span class="arithmatex">\(-\infty\)</span></td>
        <td><span class="arithmatex">\(-2\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(11\)</span></td>
        <td><span class="arithmatex">\(11\)</span></td>
        <td><span class="arithmatex">\(11\)</span></td>
        <td><span class="arithmatex">\(11\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(u[2][2][k]\)</span> (<span class="arithmatex">\(j=4\)</span>)</td>
        <td><span class="arithmatex">\(-\infty\)</span></td>
        <td><span class="arithmatex">\(-\infty\)</span></td>
        <td><span class="arithmatex">\(-2\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(11\)</span></td>
        <td><span class="arithmatex">\(11\)</span></td>
        <td><span class="arithmatex">\(13\)</span></td>
        <td><span class="arithmatex">\(18\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(u[2][3][k]\)</span> (<span class="arithmatex">\(j=5\)</span>)</td>
        <td><span class="arithmatex">\(-\infty\)</span></td>
        <td><span class="arithmatex">\(-\infty\)</span></td>
        <td><span class="arithmatex">\(-2\)</span></td>
        <td><span class="arithmatex">\(7\)</span></td>
        <td><span class="arithmatex">\(12\)</span></td>
        <td><span class="arithmatex">\(15\)</span></td>
        <td><span class="arithmatex">\(20\)</span></td>
        <td><span class="arithmatex">\(20\)</span></td>
        <td><span class="arithmatex">\(22\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(v[2][k]\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(8\)</span></td>
        <td><span class="arithmatex">\(8\)</span></td>
        <td><span class="arithmatex">\(12\)</span></td>
        <td><span class="arithmatex">\(15\)</span></td>
        <td><span class="arithmatex">\(20\)</span></td>
        <td><span class="arithmatex">\(20\)</span></td>
        <td><span class="arithmatex">\(22\)</span></td>
        </tr>
        </table></div>

        These are the computations of the cells used by the reconstruction, in the order in which it reads them:

        - $v[2][8]=\max\{v[1][8],\,u[2][3][8]\}=\max\{11,\,22\}=22$

        - $u[2][3][8]=\max\{u[2][2][8],\,p_5+u[2][2][7]\}=\max\{18,\,22\}=22$

        - $u[2][2][7]=\max\{u[2][1][7],\,p_4+u[2][1][4]\}=\max\{11,\,13\}=13$

        - $u[2][1][4]=\max\{u[2][0][4],\,p_3+u[2][0][3]\}=\max\{6,\,3\}=6$

        - $u[2][0][4]=v[1][2]-f_2=8-2=6$

        - $v[1][2]=\max\{v[0][2],\,u[1][2][2]\}=\max\{0,\,8\}=8$

        - $u[1][2][2]=\max\{u[1][1][2],\,p_2+u[1][1][1]\}=\max\{-1,\,8\}=8$

        - $u[1][1][1]=u[1][0][1]=-1$, since $w_1>1$

        - $u[1][0][1]=v[0][0]-f_1=0-1=-1$

    2. These are the choice tables computed by the DP algorithm:

        <div class="tabella" markdown="0"><table>
        <tr>
        <th>Row</th>
        <th><span class="arithmatex">\(k=0\)</span></th>
        <th><span class="arithmatex">\(k=1\)</span></th>
        <th><span class="arithmatex">\(k=2\)</span></th>
        <th><span class="arithmatex">\(k=3\)</span></th>
        <th><span class="arithmatex">\(k=4\)</span></th>
        <th><span class="arithmatex">\(k=5\)</span></th>
        <th><span class="arithmatex">\(k=6\)</span></th>
        <th><span class="arithmatex">\(k=7\)</span></th>
        <th><span class="arithmatex">\(k=8\)</span></th>
        </tr>
        <tr>
        <td><span class="arithmatex">\(s[1][1][k]\)</span> (<span class="arithmatex">\(j=1\)</span>)</td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(s[1][2][k]\)</span> (<span class="arithmatex">\(j=2\)</span>)</td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(o[1][k]\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(s[2][1][k]\)</span> (<span class="arithmatex">\(j=3\)</span>)</td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(s[2][2][k]\)</span> (<span class="arithmatex">\(j=4\)</span>)</td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(s[2][3][k]\)</span> (<span class="arithmatex">\(j=5\)</span>)</td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(o[2][k]\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        </tr>
        </table></div>

        Starting from $h=2$ and $k=8$:

        <div class="tabella" markdown="0"><table>
        <tr>
        <th>Iteration</th>
        <th>Stage</th>
        <th><span class="arithmatex">\(k\)</span></th>
        <th>Choice</th>
        <th><span class="arithmatex">\(x[1]\)</span></th>
        <th><span class="arithmatex">\(x[2]\)</span></th>
        <th><span class="arithmatex">\(x[3]\)</span></th>
        <th><span class="arithmatex">\(x[4]\)</span></th>
        <th><span class="arithmatex">\(x[5]\)</span></th>
        <th>Action</th>
        </tr>
        <tr>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(k=8\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(h=2\)</span></td>
        <td><span class="arithmatex">\(8\)</span></td>
        <td><span class="arithmatex">\(o[2][8]=1\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>class <span class="arithmatex">\(2\)</span> open</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(j=5\)</span></td>
        <td><span class="arithmatex">\(8\)</span></td>
        <td><span class="arithmatex">\(s[2][3][8]=1\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td class="cella-blu">1</td>
        <td><span class="arithmatex">\(k\leftarrow 8-1=7\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(j=4\)</span></td>
        <td><span class="arithmatex">\(7\)</span></td>
        <td><span class="arithmatex">\(s[2][2][7]=1\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td class="cella-blu">1</td>
        <td>1</td>
        <td><span class="arithmatex">\(k\leftarrow 7-3=4\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(j=3\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(s[2][1][4]=0\)</span></td>
        <td>0</td>
        <td>0</td>
        <td class="cella-blu">0</td>
        <td>1</td>
        <td>1</td>
        <td><span class="arithmatex">\(k=4\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>1</td>
        <td>1</td>
        <td>setup: <span class="arithmatex">\(k\leftarrow 4-s_2=2\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(h=1\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(o[1][2]=1\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>1</td>
        <td>1</td>
        <td>class <span class="arithmatex">\(1\)</span> open</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(j=2\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(s[1][2][2]=1\)</span></td>
        <td>0</td>
        <td class="cella-blu">1</td>
        <td>0</td>
        <td>1</td>
        <td>1</td>
        <td><span class="arithmatex">\(k\leftarrow 2-1=1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(7\)</span></td>
        <td><span class="arithmatex">\(j=1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(s[1][1][1]=0\)</span></td>
        <td class="cella-blu">0</td>
        <td>1</td>
        <td>0</td>
        <td>1</td>
        <td>1</td>
        <td><span class="arithmatex">\(k=1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>0</td>
        <td>1</td>
        <td>0</td>
        <td>1</td>
        <td>1</td>
        <td>setup: <span class="arithmatex">\(k\leftarrow 1-s_1=0\)</span></td>
        </tr>
        </table></div>

        The vector $(0,1,0,1,1)$ is an optimal solution: both classes are open, and the items $\{2,4,5\}$ are selected. Its total weight is $1+3+1+s_1+s_2=8\le c$, and the optimal value is $v[2][8]=9+7+9-f_1-f_2=22$.

<a id="esercizio-23-4"></a>

!!! esercizio "Exercise 23.4: Exercise 4: Knapsack Problem with Setups"

    Consider the following KPS instance, with a knapsack of capacity $c=8$ and $5$ items partitioned into $q=2$ classes: $\mathscr{J}_1=\{1,2,3\}$ with $f_1=2$ and $s_1=1$, $\mathscr{J}_2=\{4,5\}$ with $f_2=1$ and $s_2=1$. The revenues and weights are:

    $$
    \begin{array}{l|rrr|rr}
    \hline  & {j=1} & {j=2} & {j=3} & {j=4} & {j=5} \\
    \hline {p_j} & 6 & 9 & 9 & 7 & 5 \\
    {w_j} & 1 & 1 & 4 & 3 & 4 \\
    \hline
    \end{array}
    $$

    **Questions**

    1. Execute the bottom-up DP algorithm and write the table of all the rows $v[h][\cdot]$ and $u[h][i][\cdot]$, in the order of computation.

    2. Write the choice tables $s$ and $o$, reconstruct an optimal solution $(x_1,x_2,x_3,x_4,x_5)$, say which classes are open, and report the optimal value.

??? soluzione "Solution"

    The recurrence and the conventions are those of the box at the beginning of these exercises.

    1. For each class $h$ the DP algorithm computes the setup row $u[h][0][\cdot]$, the rows of the items of class $h$, and the row $v[h][\cdot]$. In case of ties the item is not selected and the class stays closed. This is the table after the execution of the DP algorithm:

        <div class="tabella" markdown="0"><table>
        <tr>
        <th>Row</th>
        <th><span class="arithmatex">\(k=0\)</span></th>
        <th><span class="arithmatex">\(k=1\)</span></th>
        <th><span class="arithmatex">\(k=2\)</span></th>
        <th><span class="arithmatex">\(k=3\)</span></th>
        <th><span class="arithmatex">\(k=4\)</span></th>
        <th><span class="arithmatex">\(k=5\)</span></th>
        <th><span class="arithmatex">\(k=6\)</span></th>
        <th><span class="arithmatex">\(k=7\)</span></th>
        <th><span class="arithmatex">\(k=8\)</span></th>
        </tr>
        <tr>
        <td><span class="arithmatex">\(v[0][k]\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(u[1][0][k]\)</span> (setup)</td>
        <td><span class="arithmatex">\(-\infty\)</span></td>
        <td><span class="arithmatex">\(-2\)</span></td>
        <td><span class="arithmatex">\(-2\)</span></td>
        <td><span class="arithmatex">\(-2\)</span></td>
        <td><span class="arithmatex">\(-2\)</span></td>
        <td><span class="arithmatex">\(-2\)</span></td>
        <td><span class="arithmatex">\(-2\)</span></td>
        <td><span class="arithmatex">\(-2\)</span></td>
        <td><span class="arithmatex">\(-2\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(u[1][1][k]\)</span> (<span class="arithmatex">\(j=1\)</span>)</td>
        <td><span class="arithmatex">\(-\infty\)</span></td>
        <td><span class="arithmatex">\(-2\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(u[1][2][k]\)</span> (<span class="arithmatex">\(j=2\)</span>)</td>
        <td><span class="arithmatex">\(-\infty\)</span></td>
        <td><span class="arithmatex">\(-2\)</span></td>
        <td><span class="arithmatex">\(7\)</span></td>
        <td><span class="arithmatex">\(13\)</span></td>
        <td><span class="arithmatex">\(13\)</span></td>
        <td><span class="arithmatex">\(13\)</span></td>
        <td><span class="arithmatex">\(13\)</span></td>
        <td><span class="arithmatex">\(13\)</span></td>
        <td><span class="arithmatex">\(13\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(u[1][3][k]\)</span> (<span class="arithmatex">\(j=3\)</span>)</td>
        <td><span class="arithmatex">\(-\infty\)</span></td>
        <td><span class="arithmatex">\(-2\)</span></td>
        <td><span class="arithmatex">\(7\)</span></td>
        <td><span class="arithmatex">\(13\)</span></td>
        <td><span class="arithmatex">\(13\)</span></td>
        <td><span class="arithmatex">\(13\)</span></td>
        <td><span class="arithmatex">\(16\)</span></td>
        <td><span class="arithmatex">\(22\)</span></td>
        <td><span class="arithmatex">\(22\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(v[1][k]\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(7\)</span></td>
        <td><span class="arithmatex">\(13\)</span></td>
        <td><span class="arithmatex">\(13\)</span></td>
        <td><span class="arithmatex">\(13\)</span></td>
        <td><span class="arithmatex">\(16\)</span></td>
        <td><span class="arithmatex">\(22\)</span></td>
        <td><span class="arithmatex">\(22\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(u[2][0][k]\)</span> (setup)</td>
        <td><span class="arithmatex">\(-\infty\)</span></td>
        <td><span class="arithmatex">\(-1\)</span></td>
        <td><span class="arithmatex">\(-1\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(12\)</span></td>
        <td><span class="arithmatex">\(12\)</span></td>
        <td><span class="arithmatex">\(12\)</span></td>
        <td><span class="arithmatex">\(15\)</span></td>
        <td><span class="arithmatex">\(21\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(u[2][1][k]\)</span> (<span class="arithmatex">\(j=4\)</span>)</td>
        <td><span class="arithmatex">\(-\infty\)</span></td>
        <td><span class="arithmatex">\(-1\)</span></td>
        <td><span class="arithmatex">\(-1\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(12\)</span></td>
        <td><span class="arithmatex">\(12\)</span></td>
        <td><span class="arithmatex">\(13\)</span></td>
        <td><span class="arithmatex">\(19\)</span></td>
        <td><span class="arithmatex">\(21\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(u[2][2][k]\)</span> (<span class="arithmatex">\(j=5\)</span>)</td>
        <td><span class="arithmatex">\(-\infty\)</span></td>
        <td><span class="arithmatex">\(-1\)</span></td>
        <td><span class="arithmatex">\(-1\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(12\)</span></td>
        <td><span class="arithmatex">\(12\)</span></td>
        <td><span class="arithmatex">\(13\)</span></td>
        <td><span class="arithmatex">\(19\)</span></td>
        <td><span class="arithmatex">\(21\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(v[2][k]\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(7\)</span></td>
        <td><span class="arithmatex">\(13\)</span></td>
        <td><span class="arithmatex">\(13\)</span></td>
        <td><span class="arithmatex">\(13\)</span></td>
        <td><span class="arithmatex">\(16\)</span></td>
        <td><span class="arithmatex">\(22\)</span></td>
        <td><span class="arithmatex">\(22\)</span></td>
        </tr>
        </table></div>

        These are the computations of the cells used by the reconstruction, in the order in which it reads them:

        - $v[2][8]=\max\{v[1][8],\,u[2][2][8]\}=\max\{22,\,21\}=22$

        - $v[1][8]=\max\{v[0][8],\,u[1][3][8]\}=\max\{0,\,22\}=22$

        - $u[1][3][8]=\max\{u[1][2][8],\,p_3+u[1][2][4]\}=\max\{13,\,22\}=22$

        - $u[1][2][4]=\max\{u[1][1][4],\,p_2+u[1][1][3]\}=\max\{4,\,13\}=13$

        - $u[1][1][3]=\max\{u[1][0][3],\,p_1+u[1][0][2]\}=\max\{-2,\,4\}=4$

        - $u[1][0][2]=v[0][1]-f_1=0-2=-2$

    2. These are the choice tables computed by the DP algorithm:

        <div class="tabella" markdown="0"><table>
        <tr>
        <th>Row</th>
        <th><span class="arithmatex">\(k=0\)</span></th>
        <th><span class="arithmatex">\(k=1\)</span></th>
        <th><span class="arithmatex">\(k=2\)</span></th>
        <th><span class="arithmatex">\(k=3\)</span></th>
        <th><span class="arithmatex">\(k=4\)</span></th>
        <th><span class="arithmatex">\(k=5\)</span></th>
        <th><span class="arithmatex">\(k=6\)</span></th>
        <th><span class="arithmatex">\(k=7\)</span></th>
        <th><span class="arithmatex">\(k=8\)</span></th>
        </tr>
        <tr>
        <td><span class="arithmatex">\(s[1][1][k]\)</span> (<span class="arithmatex">\(j=1\)</span>)</td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(s[1][2][k]\)</span> (<span class="arithmatex">\(j=2\)</span>)</td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(s[1][3][k]\)</span> (<span class="arithmatex">\(j=3\)</span>)</td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(o[1][k]\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(s[2][1][k]\)</span> (<span class="arithmatex">\(j=4\)</span>)</td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(s[2][2][k]\)</span> (<span class="arithmatex">\(j=5\)</span>)</td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(o[2][k]\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        </tr>
        </table></div>

        Starting from $h=2$ and $k=8$:

        <div class="tabella" markdown="0"><table>
        <tr>
        <th>Iteration</th>
        <th>Stage</th>
        <th><span class="arithmatex">\(k\)</span></th>
        <th>Choice</th>
        <th><span class="arithmatex">\(x[1]\)</span></th>
        <th><span class="arithmatex">\(x[2]\)</span></th>
        <th><span class="arithmatex">\(x[3]\)</span></th>
        <th><span class="arithmatex">\(x[4]\)</span></th>
        <th><span class="arithmatex">\(x[5]\)</span></th>
        <th>Action</th>
        </tr>
        <tr>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(k=8\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(h=2\)</span></td>
        <td><span class="arithmatex">\(8\)</span></td>
        <td><span class="arithmatex">\(o[2][8]=0\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>class <span class="arithmatex">\(2\)</span> closed</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(h=1\)</span></td>
        <td><span class="arithmatex">\(8\)</span></td>
        <td><span class="arithmatex">\(o[1][8]=1\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>class <span class="arithmatex">\(1\)</span> open</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(j=3\)</span></td>
        <td><span class="arithmatex">\(8\)</span></td>
        <td><span class="arithmatex">\(s[1][3][8]=1\)</span></td>
        <td>0</td>
        <td>0</td>
        <td class="cella-blu">1</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(k\leftarrow 8-4=4\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(j=2\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(s[1][2][4]=1\)</span></td>
        <td>0</td>
        <td class="cella-blu">1</td>
        <td>1</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(k\leftarrow 4-1=3\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(j=1\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(s[1][1][3]=1\)</span></td>
        <td class="cella-blu">1</td>
        <td>1</td>
        <td>1</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(k\leftarrow 3-1=2\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>0</td>
        <td>0</td>
        <td>setup: <span class="arithmatex">\(k\leftarrow 2-s_1=1\)</span></td>
        </tr>
        </table></div>

        The vector $(1,1,1,0,0)$ is an optimal solution: only class $1$ is open, and the items $\{1,2,3\}$ are selected. Its total weight is $1+1+4+s_1=7\le c$, and the optimal value is $v[2][8]=6+9+9-f_1=22$.

<a id="esercizio-23-5"></a>

!!! esercizio "Exercise 23.5: Exercise 5: Knapsack Problem with Setups"

    Consider the following KPS instance, with a knapsack of capacity $c=9$ and $5$ items partitioned into $q=2$ classes: $\mathscr{J}_1=\{1,2\}$ with $f_1=3$ and $s_1=2$, $\mathscr{J}_2=\{3,4,5\}$ with $f_2=2$ and $s_2=2$. The revenues and weights are:

    $$
    \begin{array}{l|rr|rrr}
    \hline  & {j=1} & {j=2} & {j=3} & {j=4} & {j=5} \\
    \hline {p_j} & 6 & 5 & 8 & 6 & 5 \\
    {w_j} & 3 & 1 & 1 & 4 & 3 \\
    \hline
    \end{array}
    $$

    **Questions**

    1. Execute the bottom-up DP algorithm and write the table of all the rows $v[h][\cdot]$ and $u[h][i][\cdot]$, in the order of computation.

    2. Write the choice tables $s$ and $o$, reconstruct an optimal solution $(x_1,x_2,x_3,x_4,x_5)$, say which classes are open, and report the optimal value.

??? soluzione "Solution"

    The recurrence and the conventions are those of the box at the beginning of these exercises.

    1. For each class $h$ the DP algorithm computes the setup row $u[h][0][\cdot]$, the rows of the items of class $h$, and the row $v[h][\cdot]$. In case of ties the item is not selected and the class stays closed. This is the table after the execution of the DP algorithm:

        <div class="tabella" markdown="0"><table>
        <tr>
        <th>Row</th>
        <th><span class="arithmatex">\(k=0\)</span></th>
        <th><span class="arithmatex">\(k=1\)</span></th>
        <th><span class="arithmatex">\(k=2\)</span></th>
        <th><span class="arithmatex">\(k=3\)</span></th>
        <th><span class="arithmatex">\(k=4\)</span></th>
        <th><span class="arithmatex">\(k=5\)</span></th>
        <th><span class="arithmatex">\(k=6\)</span></th>
        <th><span class="arithmatex">\(k=7\)</span></th>
        <th><span class="arithmatex">\(k=8\)</span></th>
        <th><span class="arithmatex">\(k=9\)</span></th>
        </tr>
        <tr>
        <td><span class="arithmatex">\(v[0][k]\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(u[1][0][k]\)</span> (setup)</td>
        <td><span class="arithmatex">\(-\infty\)</span></td>
        <td><span class="arithmatex">\(-\infty\)</span></td>
        <td><span class="arithmatex">\(-3\)</span></td>
        <td><span class="arithmatex">\(-3\)</span></td>
        <td><span class="arithmatex">\(-3\)</span></td>
        <td><span class="arithmatex">\(-3\)</span></td>
        <td><span class="arithmatex">\(-3\)</span></td>
        <td><span class="arithmatex">\(-3\)</span></td>
        <td><span class="arithmatex">\(-3\)</span></td>
        <td><span class="arithmatex">\(-3\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(u[1][1][k]\)</span> (<span class="arithmatex">\(j=1\)</span>)</td>
        <td><span class="arithmatex">\(-\infty\)</span></td>
        <td><span class="arithmatex">\(-\infty\)</span></td>
        <td><span class="arithmatex">\(-3\)</span></td>
        <td><span class="arithmatex">\(-3\)</span></td>
        <td><span class="arithmatex">\(-3\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(u[1][2][k]\)</span> (<span class="arithmatex">\(j=2\)</span>)</td>
        <td><span class="arithmatex">\(-\infty\)</span></td>
        <td><span class="arithmatex">\(-\infty\)</span></td>
        <td><span class="arithmatex">\(-3\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(8\)</span></td>
        <td><span class="arithmatex">\(8\)</span></td>
        <td><span class="arithmatex">\(8\)</span></td>
        <td><span class="arithmatex">\(8\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(v[1][k]\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(8\)</span></td>
        <td><span class="arithmatex">\(8\)</span></td>
        <td><span class="arithmatex">\(8\)</span></td>
        <td><span class="arithmatex">\(8\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(u[2][0][k]\)</span> (setup)</td>
        <td><span class="arithmatex">\(-\infty\)</span></td>
        <td><span class="arithmatex">\(-\infty\)</span></td>
        <td><span class="arithmatex">\(-2\)</span></td>
        <td><span class="arithmatex">\(-2\)</span></td>
        <td><span class="arithmatex">\(-2\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(u[2][1][k]\)</span> (<span class="arithmatex">\(j=3\)</span>)</td>
        <td><span class="arithmatex">\(-\infty\)</span></td>
        <td><span class="arithmatex">\(-\infty\)</span></td>
        <td><span class="arithmatex">\(-2\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(8\)</span></td>
        <td><span class="arithmatex">\(8\)</span></td>
        <td><span class="arithmatex">\(9\)</span></td>
        <td><span class="arithmatex">\(14\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(u[2][2][k]\)</span> (<span class="arithmatex">\(j=4\)</span>)</td>
        <td><span class="arithmatex">\(-\infty\)</span></td>
        <td><span class="arithmatex">\(-\infty\)</span></td>
        <td><span class="arithmatex">\(-2\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(8\)</span></td>
        <td><span class="arithmatex">\(12\)</span></td>
        <td><span class="arithmatex">\(12\)</span></td>
        <td><span class="arithmatex">\(14\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(u[2][3][k]\)</span> (<span class="arithmatex">\(j=5\)</span>)</td>
        <td><span class="arithmatex">\(-\infty\)</span></td>
        <td><span class="arithmatex">\(-\infty\)</span></td>
        <td><span class="arithmatex">\(-2\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(11\)</span></td>
        <td><span class="arithmatex">\(12\)</span></td>
        <td><span class="arithmatex">\(12\)</span></td>
        <td><span class="arithmatex">\(14\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(v[2][k]\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(11\)</span></td>
        <td><span class="arithmatex">\(12\)</span></td>
        <td><span class="arithmatex">\(12\)</span></td>
        <td><span class="arithmatex">\(14\)</span></td>
        </tr>
        </table></div>

        These are the computations of the cells used by the reconstruction, in the order in which it reads them:

        - $v[2][9]=\max\{v[1][9],\,u[2][3][9]\}=\max\{8,\,14\}=14$

        - $u[2][3][9]=\max\{u[2][2][9],\,p_5+u[2][2][6]\}=\max\{14,\,13\}=14$

        - $u[2][2][9]=\max\{u[2][1][9],\,p_4+u[2][1][5]\}=\max\{14,\,12\}=14$

        - $u[2][1][9]=\max\{u[2][0][9],\,p_3+u[2][0][8]\}=\max\{6,\,14\}=14$

        - $u[2][0][8]=v[1][6]-f_2=8-2=6$

        - $v[1][6]=\max\{v[0][6],\,u[1][2][6]\}=\max\{0,\,8\}=8$

        - $u[1][2][6]=\max\{u[1][1][6],\,p_2+u[1][1][5]\}=\max\{3,\,8\}=8$

        - $u[1][1][5]=\max\{u[1][0][5],\,p_1+u[1][0][2]\}=\max\{-3,\,3\}=3$

        - $u[1][0][2]=v[0][0]-f_1=0-3=-3$

    2. These are the choice tables computed by the DP algorithm:

        <div class="tabella" markdown="0"><table>
        <tr>
        <th>Row</th>
        <th><span class="arithmatex">\(k=0\)</span></th>
        <th><span class="arithmatex">\(k=1\)</span></th>
        <th><span class="arithmatex">\(k=2\)</span></th>
        <th><span class="arithmatex">\(k=3\)</span></th>
        <th><span class="arithmatex">\(k=4\)</span></th>
        <th><span class="arithmatex">\(k=5\)</span></th>
        <th><span class="arithmatex">\(k=6\)</span></th>
        <th><span class="arithmatex">\(k=7\)</span></th>
        <th><span class="arithmatex">\(k=8\)</span></th>
        <th><span class="arithmatex">\(k=9\)</span></th>
        </tr>
        <tr>
        <td><span class="arithmatex">\(s[1][1][k]\)</span> (<span class="arithmatex">\(j=1\)</span>)</td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(s[1][2][k]\)</span> (<span class="arithmatex">\(j=2\)</span>)</td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(o[1][k]\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(s[2][1][k]\)</span> (<span class="arithmatex">\(j=3\)</span>)</td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(s[2][2][k]\)</span> (<span class="arithmatex">\(j=4\)</span>)</td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(s[2][3][k]\)</span> (<span class="arithmatex">\(j=5\)</span>)</td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(o[2][k]\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        </tr>
        </table></div>

        Starting from $h=2$ and $k=9$:

        <div class="tabella" markdown="0"><table>
        <tr>
        <th>Iteration</th>
        <th>Stage</th>
        <th><span class="arithmatex">\(k\)</span></th>
        <th>Choice</th>
        <th><span class="arithmatex">\(x[1]\)</span></th>
        <th><span class="arithmatex">\(x[2]\)</span></th>
        <th><span class="arithmatex">\(x[3]\)</span></th>
        <th><span class="arithmatex">\(x[4]\)</span></th>
        <th><span class="arithmatex">\(x[5]\)</span></th>
        <th>Action</th>
        </tr>
        <tr>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(k=9\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(h=2\)</span></td>
        <td><span class="arithmatex">\(9\)</span></td>
        <td><span class="arithmatex">\(o[2][9]=1\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>class <span class="arithmatex">\(2\)</span> open</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(j=5\)</span></td>
        <td><span class="arithmatex">\(9\)</span></td>
        <td><span class="arithmatex">\(s[2][3][9]=0\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td class="cella-blu">0</td>
        <td><span class="arithmatex">\(k=9\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(j=4\)</span></td>
        <td><span class="arithmatex">\(9\)</span></td>
        <td><span class="arithmatex">\(s[2][2][9]=0\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td class="cella-blu">0</td>
        <td>0</td>
        <td><span class="arithmatex">\(k=9\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(j=3\)</span></td>
        <td><span class="arithmatex">\(9\)</span></td>
        <td><span class="arithmatex">\(s[2][1][9]=1\)</span></td>
        <td>0</td>
        <td>0</td>
        <td class="cella-blu">1</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(k\leftarrow 9-1=8\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(8\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>1</td>
        <td>0</td>
        <td>0</td>
        <td>setup: <span class="arithmatex">\(k\leftarrow 8-s_2=6\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(h=1\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(o[1][6]=1\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>1</td>
        <td>0</td>
        <td>0</td>
        <td>class <span class="arithmatex">\(1\)</span> open</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(j=2\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(s[1][2][6]=1\)</span></td>
        <td>0</td>
        <td class="cella-blu">1</td>
        <td>1</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(k\leftarrow 6-1=5\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(7\)</span></td>
        <td><span class="arithmatex">\(j=1\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(s[1][1][5]=1\)</span></td>
        <td class="cella-blu">1</td>
        <td>1</td>
        <td>1</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(k\leftarrow 5-3=2\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>0</td>
        <td>0</td>
        <td>setup: <span class="arithmatex">\(k\leftarrow 2-s_1=0\)</span></td>
        </tr>
        </table></div>

        The vector $(1,1,1,0,0)$ is an optimal solution: both classes are open, and the items $\{1,2,3\}$ are selected. Its total weight is $3+1+1+s_1+s_2=9\le c$, and the optimal value is $v[2][9]=6+5+8-f_1-f_2=14$.
