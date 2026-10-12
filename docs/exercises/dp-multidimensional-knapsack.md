---
title: "Exercises · DP for the multidimensional knapsack problem"
---

# Exercises · DP for the multidimensional knapsack problem

<div class="info-capitolo" markdown>

**Exercises · Chapter 22** · each solution opens with a click · [:material-book-open-variant: Chapter 22: Multidimensional knapsack (MDKP)](../dynamic-programming/dp-multidimensional-knapsack.md) · [:material-file-pdf-box: Exercises, volume 3 (PDF)](../pdf/exercises-3-dynamic-programming.pdf)

</div>

!!! formula "Recurrence used in these exercises"

    The DP algorithm of the chapter [«DP for the multidimensional knapsack problem»](https://fabiofurini.github.io/combinatorial-optimization/dynamic-programming/dp-multidimensional-knapsack/), with $m$ dimensions, the vector $\vet{k}=(k_1,\dots,k_m)$ of the capacities and the weight vector $\vet{w}_j=(w_{1j},\dots,w_{mj})$ of item $j$:

    $$
    v(j,\vet{k})= \left\{ \begin{array}{ll}
    0 & \textrm{if $j=0$,}\\[2ex]
    v(j-1,\vet{k}) & \begin{array}[t]{@{}l@{}}\textrm{if $j\ge 1$ and}\\ \textrm{$w_{dj}>k_d$ for some $d$,}\end{array}\\[4ex]
    \begin{array}[t]{@{}l@{}}\displaystyle \max \bigg\{ v(j-1,\vet{k}),\\ \qquad p_j+v(j-1,\vet{k}-\vet{w}_j) \bigg\}\end{array} & \textrm{if $j\ge 1$ and $\vet{w}_j\le\vet{k}$.}
    \end{array} \right.
    $$

    The optimal value is $v(n,\vet{c})$. The tables $s$ store $s[j][\vet{k}]=1$ if item $j$ is selected; an optimal solution is reconstructed from $j=n$ and $\vet{k}=\vet{c}$ with $x_j\leftarrow s[j][\vet{k}]$, $\vet{k}\leftarrow\vet{k}-x_j\vet{w}_j$.

<a id="esercizio-22-1"></a>

!!! esercizio "Exercise 22.1: Exercise 1: Multidimensional Knapsack Problem"

    Consider the following MDKP instance, with $m=2$ dimensions, capacities $c_1=3$ and $c_2=3$, and $3$ items with profits and weights:

    $$
    \begin{array}{l|rrr}
    \hline  & {j=1} & {j=2} & {j=3} \\
    \hline {p_j} & 9 & 8 & 6 \\
    {w_{1j}} & 2 & 1 & 2 \\
    {w_{2j}} & 2 & 2 & 1 \\
    \hline
    \end{array}
    $$

    **Questions**

    1. Execute the bottom-up DP algorithm: for each item $j$, write the matrices $v[j][k_1][k_2]$ and $s[j][k_1][k_2]$, and show the computation of the cell $\vet{k}=\vet{c}$.

    2. Using the tables $s$, reconstruct an optimal solution $(x_1,x_2,x_3)$ and report the optimal value.

    3. How many cells does the table of the DP algorithm have, including the row $j=0$? How many would it have with a third dimension of capacity $c_3=3$?

??? soluzione "Solution"

    The recurrence and the conventions are those of the box at the beginning of these exercises.

    1. The row $j=0$ is $v[0][\vet{k}]=0$ for every $\vet{k}$. In each matrix there is one row for each $k_1$ and one column for each $k_2$; in case of ties item $j$ is not selected.

        Item $j=1$, with $p_1=9$ and $\vet{w}_1=(2,2)$: $v[1][(3,3)]=\max\{v[0][(3,3)],\,p_1+v[0][(1,1)]\}=\max\{0,\,9+0\}=9$; $\vet{w}_1=(2,2)\not\le(0,0)$, so $v[1][(0,0)]=v[0][(0,0)]=0$.

        $$
        \begin{array}{l|rrrr}
        \hline {v[1][k_1][k_2]} & {k_2=0} & {k_2=1} & {k_2=2} & {k_2=3} \\
        \hline {k_1=0} & {0} & {0} & {0} & {0} \\
        {k_1=1} & {0} & {0} & {0} & {0} \\
        {k_1=2} & {0} & {0} & {9} & {9} \\
        {k_1=3} & {0} & {0} & {9} & {9} \\
        \hline
        \end{array}
        $$

        $$
        \begin{array}{l|rrrr}
        \hline {s[1][k_1][k_2]} & {k_2=0} & {k_2=1} & {k_2=2} & {k_2=3} \\
        \hline {k_1=0} & {0} & {0} & {0} & {0} \\
        {k_1=1} & {0} & {0} & {0} & {0} \\
        {k_1=2} & {0} & {0} & {1} & {1} \\
        {k_1=3} & {0} & {0} & {1} & {1} \\
        \hline
        \end{array}
        $$

        Item $j=2$, with $p_2=8$ and $\vet{w}_2=(1,2)$: $v[2][(3,3)]=\max\{v[1][(3,3)],\,p_2+v[1][(2,1)]\}=\max\{9,\,8+0\}=9$; $v[2][(1,2)]=\max\{v[1][(1,2)],\,p_2+v[1][(0,0)]\}=\max\{0,\,8+0\}=8$.

        $$
        \begin{array}{l|rrrr}
        \hline {v[2][k_1][k_2]} & {k_2=0} & {k_2=1} & {k_2=2} & {k_2=3} \\
        \hline {k_1=0} & {0} & {0} & {0} & {0} \\
        {k_1=1} & {0} & {0} & {8} & {8} \\
        {k_1=2} & {0} & {0} & {9} & {9} \\
        {k_1=3} & {0} & {0} & {9} & {9} \\
        \hline
        \end{array}
        $$

        $$
        \begin{array}{l|rrrr}
        \hline {s[2][k_1][k_2]} & {k_2=0} & {k_2=1} & {k_2=2} & {k_2=3} \\
        \hline {k_1=0} & {0} & {0} & {0} & {0} \\
        {k_1=1} & {0} & {0} & {1} & {1} \\
        {k_1=2} & {0} & {0} & {0} & {0} \\
        {k_1=3} & {0} & {0} & {0} & {0} \\
        \hline
        \end{array}
        $$

        Item $j=3$, with $p_3=6$ and $\vet{w}_3=(2,1)$: $v[3][(3,3)]=\max\{v[2][(3,3)],\,p_3+v[2][(1,2)]\}=\max\{9,\,6+8\}=14$.

        $$
        \begin{array}{l|rrrr}
        \hline {v[3][k_1][k_2]} & {k_2=0} & {k_2=1} & {k_2=2} & {k_2=3} \\
        \hline {k_1=0} & {0} & {0} & {0} & {0} \\
        {k_1=1} & {0} & {0} & {8} & {8} \\
        {k_1=2} & {0} & {6} & {9} & {9} \\
        {k_1=3} & {0} & {6} & {9} & {14} \\
        \hline
        \end{array}
        $$

        $$
        \begin{array}{l|rrrr}
        \hline {s[3][k_1][k_2]} & {k_2=0} & {k_2=1} & {k_2=2} & {k_2=3} \\
        \hline {k_1=0} & {0} & {0} & {0} & {0} \\
        {k_1=1} & {0} & {0} & {0} & {0} \\
        {k_1=2} & {0} & {1} & {0} & {0} \\
        {k_1=3} & {0} & {1} & {0} & {1} \\
        \hline
        \end{array}
        $$

    2. Starting from $j=3$ and $\vet{k}=(3,3)$:

        <div class="tabella" markdown="0"><table>
        <tr>
        <th>Iteration</th>
        <th><span class="arithmatex">\(j\)</span></th>
        <th><span class="arithmatex">\(\vet{k}\)</span></th>
        <th><span class="arithmatex">\(s[j][\vet{k}]\)</span></th>
        <th><span class="arithmatex">\(x[1]\)</span></th>
        <th><span class="arithmatex">\(x[2]\)</span></th>
        <th><span class="arithmatex">\(x[3]\)</span></th>
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
        <td><span class="arithmatex">\(\vet{k}=(3,3)\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\((3,3)\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td>0</td>
        <td>0</td>
        <td class="cella-blu">1</td>
        <td><span class="arithmatex">\(x[3]\leftarrow 1\)</span>, <span class="arithmatex">\(\vet{k}\leftarrow (3,3)-(2,1)=(1,2)\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\((1,2)\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td>0</td>
        <td class="cella-blu">1</td>
        <td>1</td>
        <td><span class="arithmatex">\(x[2]\leftarrow 1\)</span>, <span class="arithmatex">\(\vet{k}\leftarrow (1,2)-(1,2)=(0,0)\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\((0,0)\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td class="cella-blu">0</td>
        <td>1</td>
        <td>1</td>
        <td><span class="arithmatex">\(x[1]\leftarrow 0\)</span>, <span class="arithmatex">\(\vet{k}=(0,0)\)</span></td>
        </tr>
        </table></div>

        The vector $(0,1,1)$ is an optimal solution: its weights are $1+2=3\le c_1$ and $2+1=3\le c_2$, and the optimal value is $v[3][(3,3)]=8+6=14$.

    3. The table has $(n+1)(c_1+1)(c_2+1)=4\cdot4\cdot4=64$ cells. A third dimension of capacity $c_3=3$ multiplies this number by $c_3+1=4$, giving $256$ cells: every new dimension multiplies the number of states.

<a id="esercizio-22-2"></a>

!!! esercizio "Exercise 22.2: Exercise 2: Multidimensional Knapsack Problem"

    Consider the following MDKP instance, with $m=2$ dimensions, capacities $c_1=4$ and $c_2=3$, and $3$ items with profits and weights:

    $$
    \begin{array}{l|rrr}
    \hline  & {j=1} & {j=2} & {j=3} \\
    \hline {p_j} & 4 & 7 & 5 \\
    {w_{1j}} & 3 & 2 & 1 \\
    {w_{2j}} & 1 & 2 & 2 \\
    \hline
    \end{array}
    $$

    **Questions**

    1. Execute the bottom-up DP algorithm: for each item $j$, write the matrices $v[j][k_1][k_2]$ and $s[j][k_1][k_2]$, and show the computation of the cell $\vet{k}=\vet{c}$.

    2. Using the tables $s$, reconstruct an optimal solution $(x_1,x_2,x_3)$ and report the optimal value.

    3. How many cells does the table of the DP algorithm have, including the row $j=0$? How many would it have with a third dimension of capacity $c_3=3$?

??? soluzione "Solution"

    The recurrence and the conventions are those of the box at the beginning of these exercises.

    1. The row $j=0$ is $v[0][\vet{k}]=0$ for every $\vet{k}$. In each matrix there is one row for each $k_1$ and one column for each $k_2$; in case of ties item $j$ is not selected.

        Item $j=1$, with $p_1=4$ and $\vet{w}_1=(3,1)$: $v[1][(4,3)]=\max\{v[0][(4,3)],\,p_1+v[0][(1,2)]\}=\max\{0,\,4+0\}=4$; $v[1][(3,1)]=\max\{v[0][(3,1)],\,p_1+v[0][(0,0)]\}=\max\{0,\,4+0\}=4$.

        $$
        \begin{array}{l|rrrr}
        \hline {v[1][k_1][k_2]} & {k_2=0} & {k_2=1} & {k_2=2} & {k_2=3} \\
        \hline {k_1=0} & {0} & {0} & {0} & {0} \\
        {k_1=1} & {0} & {0} & {0} & {0} \\
        {k_1=2} & {0} & {0} & {0} & {0} \\
        {k_1=3} & {0} & {4} & {4} & {4} \\
        {k_1=4} & {0} & {4} & {4} & {4} \\
        \hline
        \end{array}
        $$

        $$
        \begin{array}{l|rrrr}
        \hline {s[1][k_1][k_2]} & {k_2=0} & {k_2=1} & {k_2=2} & {k_2=3} \\
        \hline {k_1=0} & {0} & {0} & {0} & {0} \\
        {k_1=1} & {0} & {0} & {0} & {0} \\
        {k_1=2} & {0} & {0} & {0} & {0} \\
        {k_1=3} & {0} & {1} & {1} & {1} \\
        {k_1=4} & {0} & {1} & {1} & {1} \\
        \hline
        \end{array}
        $$

        Item $j=2$, with $p_2=7$ and $\vet{w}_2=(2,2)$: $v[2][(4,3)]=\max\{v[1][(4,3)],\,p_2+v[1][(2,1)]\}=\max\{4,\,7+0\}=7$; $\vet{w}_2=(2,2)\not\le(3,1)$, so $v[2][(3,1)]=v[1][(3,1)]=4$.

        $$
        \begin{array}{l|rrrr}
        \hline {v[2][k_1][k_2]} & {k_2=0} & {k_2=1} & {k_2=2} & {k_2=3} \\
        \hline {k_1=0} & {0} & {0} & {0} & {0} \\
        {k_1=1} & {0} & {0} & {0} & {0} \\
        {k_1=2} & {0} & {0} & {7} & {7} \\
        {k_1=3} & {0} & {4} & {7} & {7} \\
        {k_1=4} & {0} & {4} & {7} & {7} \\
        \hline
        \end{array}
        $$

        $$
        \begin{array}{l|rrrr}
        \hline {s[2][k_1][k_2]} & {k_2=0} & {k_2=1} & {k_2=2} & {k_2=3} \\
        \hline {k_1=0} & {0} & {0} & {0} & {0} \\
        {k_1=1} & {0} & {0} & {0} & {0} \\
        {k_1=2} & {0} & {0} & {1} & {1} \\
        {k_1=3} & {0} & {0} & {1} & {1} \\
        {k_1=4} & {0} & {0} & {1} & {1} \\
        \hline
        \end{array}
        $$

        Item $j=3$, with $p_3=5$ and $\vet{w}_3=(1,2)$: $v[3][(4,3)]=\max\{v[2][(4,3)],\,p_3+v[2][(3,1)]\}=\max\{7,\,5+4\}=9$.

        $$
        \begin{array}{l|rrrr}
        \hline {v[3][k_1][k_2]} & {k_2=0} & {k_2=1} & {k_2=2} & {k_2=3} \\
        \hline {k_1=0} & {0} & {0} & {0} & {0} \\
        {k_1=1} & {0} & {0} & {5} & {5} \\
        {k_1=2} & {0} & {0} & {7} & {7} \\
        {k_1=3} & {0} & {4} & {7} & {7} \\
        {k_1=4} & {0} & {4} & {7} & {9} \\
        \hline
        \end{array}
        $$

        $$
        \begin{array}{l|rrrr}
        \hline {s[3][k_1][k_2]} & {k_2=0} & {k_2=1} & {k_2=2} & {k_2=3} \\
        \hline {k_1=0} & {0} & {0} & {0} & {0} \\
        {k_1=1} & {0} & {0} & {1} & {1} \\
        {k_1=2} & {0} & {0} & {0} & {0} \\
        {k_1=3} & {0} & {0} & {0} & {0} \\
        {k_1=4} & {0} & {0} & {0} & {1} \\
        \hline
        \end{array}
        $$

    2. Starting from $j=3$ and $\vet{k}=(4,3)$:

        <div class="tabella" markdown="0"><table>
        <tr>
        <th>Iteration</th>
        <th><span class="arithmatex">\(j\)</span></th>
        <th><span class="arithmatex">\(\vet{k}\)</span></th>
        <th><span class="arithmatex">\(s[j][\vet{k}]\)</span></th>
        <th><span class="arithmatex">\(x[1]\)</span></th>
        <th><span class="arithmatex">\(x[2]\)</span></th>
        <th><span class="arithmatex">\(x[3]\)</span></th>
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
        <td><span class="arithmatex">\(\vet{k}=(4,3)\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\((4,3)\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td>0</td>
        <td>0</td>
        <td class="cella-blu">1</td>
        <td><span class="arithmatex">\(x[3]\leftarrow 1\)</span>, <span class="arithmatex">\(\vet{k}\leftarrow (4,3)-(1,2)=(3,1)\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\((3,1)\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td>0</td>
        <td class="cella-blu">0</td>
        <td>1</td>
        <td><span class="arithmatex">\(x[2]\leftarrow 0\)</span>, <span class="arithmatex">\(\vet{k}=(3,1)\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\((3,1)\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td class="cella-blu">1</td>
        <td>0</td>
        <td>1</td>
        <td><span class="arithmatex">\(x[1]\leftarrow 1\)</span>, <span class="arithmatex">\(\vet{k}\leftarrow (3,1)-(3,1)=(0,0)\)</span></td>
        </tr>
        </table></div>

        The vector $(1,0,1)$ is an optimal solution: its weights are $3+1=4\le c_1$ and $1+2=3\le c_2$, and the optimal value is $v[3][(4,3)]=4+5=9$.

    3. The table has $(n+1)(c_1+1)(c_2+1)=4\cdot5\cdot4=80$ cells. A third dimension of capacity $c_3=3$ multiplies this number by $c_3+1=4$, giving $320$ cells: every new dimension multiplies the number of states.

<a id="esercizio-22-3"></a>

!!! esercizio "Exercise 22.3: Exercise 3: Multidimensional Knapsack Problem"

    Consider the following MDKP instance, with $m=2$ dimensions, capacities $c_1=3$ and $c_2=4$, and $3$ items with profits and weights:

    $$
    \begin{array}{l|rrr}
    \hline  & {j=1} & {j=2} & {j=3} \\
    \hline {p_j} & 6 & 6 & 9 \\
    {w_{1j}} & 2 & 1 & 2 \\
    {w_{2j}} & 1 & 2 & 3 \\
    \hline
    \end{array}
    $$

    **Questions**

    1. Execute the bottom-up DP algorithm: for each item $j$, write the matrices $v[j][k_1][k_2]$ and $s[j][k_1][k_2]$, and show the computation of the cell $\vet{k}=\vet{c}$.

    2. Using the tables $s$, reconstruct an optimal solution $(x_1,x_2,x_3)$ and report the optimal value.

    3. How many cells does the table of the DP algorithm have, including the row $j=0$? How many would it have with a third dimension of capacity $c_3=3$?

??? soluzione "Solution"

    The recurrence and the conventions are those of the box at the beginning of these exercises.

    1. The row $j=0$ is $v[0][\vet{k}]=0$ for every $\vet{k}$. In each matrix there is one row for each $k_1$ and one column for each $k_2$; in case of ties item $j$ is not selected.

        Item $j=1$, with $p_1=6$ and $\vet{w}_1=(2,1)$: $v[1][(3,4)]=\max\{v[0][(3,4)],\,p_1+v[0][(1,3)]\}=\max\{0,\,6+0\}=6$; $v[1][(2,2)]=\max\{v[0][(2,2)],\,p_1+v[0][(0,1)]\}=\max\{0,\,6+0\}=6$.

        $$
        \begin{array}{l|rrrrr}
        \hline {v[1][k_1][k_2]} & {k_2=0} & {k_2=1} & {k_2=2} & {k_2=3} & {k_2=4} \\
        \hline {k_1=0} & {0} & {0} & {0} & {0} & {0} \\
        {k_1=1} & {0} & {0} & {0} & {0} & {0} \\
        {k_1=2} & {0} & {6} & {6} & {6} & {6} \\
        {k_1=3} & {0} & {6} & {6} & {6} & {6} \\
        \hline
        \end{array}
        $$

        $$
        \begin{array}{l|rrrrr}
        \hline {s[1][k_1][k_2]} & {k_2=0} & {k_2=1} & {k_2=2} & {k_2=3} & {k_2=4} \\
        \hline {k_1=0} & {0} & {0} & {0} & {0} & {0} \\
        {k_1=1} & {0} & {0} & {0} & {0} & {0} \\
        {k_1=2} & {0} & {1} & {1} & {1} & {1} \\
        {k_1=3} & {0} & {1} & {1} & {1} & {1} \\
        \hline
        \end{array}
        $$

        Item $j=2$, with $p_2=6$ and $\vet{w}_2=(1,2)$: $v[2][(3,4)]=\max\{v[1][(3,4)],\,p_2+v[1][(2,2)]\}=\max\{6,\,6+6\}=12$.

        $$
        \begin{array}{l|rrrrr}
        \hline {v[2][k_1][k_2]} & {k_2=0} & {k_2=1} & {k_2=2} & {k_2=3} & {k_2=4} \\
        \hline {k_1=0} & {0} & {0} & {0} & {0} & {0} \\
        {k_1=1} & {0} & {0} & {6} & {6} & {6} \\
        {k_1=2} & {0} & {6} & {6} & {6} & {6} \\
        {k_1=3} & {0} & {6} & {6} & {12} & {12} \\
        \hline
        \end{array}
        $$

        $$
        \begin{array}{l|rrrrr}
        \hline {s[2][k_1][k_2]} & {k_2=0} & {k_2=1} & {k_2=2} & {k_2=3} & {k_2=4} \\
        \hline {k_1=0} & {0} & {0} & {0} & {0} & {0} \\
        {k_1=1} & {0} & {0} & {1} & {1} & {1} \\
        {k_1=2} & {0} & {0} & {0} & {0} & {0} \\
        {k_1=3} & {0} & {0} & {0} & {1} & {1} \\
        \hline
        \end{array}
        $$

        Item $j=3$, with $p_3=9$ and $\vet{w}_3=(2,3)$: $v[3][(3,4)]=\max\{v[2][(3,4)],\,p_3+v[2][(1,1)]\}=\max\{12,\,9+0\}=12$.

        $$
        \begin{array}{l|rrrrr}
        \hline {v[3][k_1][k_2]} & {k_2=0} & {k_2=1} & {k_2=2} & {k_2=3} & {k_2=4} \\
        \hline {k_1=0} & {0} & {0} & {0} & {0} & {0} \\
        {k_1=1} & {0} & {0} & {6} & {6} & {6} \\
        {k_1=2} & {0} & {6} & {6} & {9} & {9} \\
        {k_1=3} & {0} & {6} & {6} & {12} & {12} \\
        \hline
        \end{array}
        $$

        $$
        \begin{array}{l|rrrrr}
        \hline {s[3][k_1][k_2]} & {k_2=0} & {k_2=1} & {k_2=2} & {k_2=3} & {k_2=4} \\
        \hline {k_1=0} & {0} & {0} & {0} & {0} & {0} \\
        {k_1=1} & {0} & {0} & {0} & {0} & {0} \\
        {k_1=2} & {0} & {0} & {0} & {1} & {1} \\
        {k_1=3} & {0} & {0} & {0} & {0} & {0} \\
        \hline
        \end{array}
        $$

    2. Starting from $j=3$ and $\vet{k}=(3,4)$:

        <div class="tabella" markdown="0"><table>
        <tr>
        <th>Iteration</th>
        <th><span class="arithmatex">\(j\)</span></th>
        <th><span class="arithmatex">\(\vet{k}\)</span></th>
        <th><span class="arithmatex">\(s[j][\vet{k}]\)</span></th>
        <th><span class="arithmatex">\(x[1]\)</span></th>
        <th><span class="arithmatex">\(x[2]\)</span></th>
        <th><span class="arithmatex">\(x[3]\)</span></th>
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
        <td><span class="arithmatex">\(\vet{k}=(3,4)\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\((3,4)\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td>0</td>
        <td>0</td>
        <td class="cella-blu">0</td>
        <td><span class="arithmatex">\(x[3]\leftarrow 0\)</span>, <span class="arithmatex">\(\vet{k}=(3,4)\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\((3,4)\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td>0</td>
        <td class="cella-blu">1</td>
        <td>0</td>
        <td><span class="arithmatex">\(x[2]\leftarrow 1\)</span>, <span class="arithmatex">\(\vet{k}\leftarrow (3,4)-(1,2)=(2,2)\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\((2,2)\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td class="cella-blu">1</td>
        <td>1</td>
        <td>0</td>
        <td><span class="arithmatex">\(x[1]\leftarrow 1\)</span>, <span class="arithmatex">\(\vet{k}\leftarrow (2,2)-(2,1)=(0,1)\)</span></td>
        </tr>
        </table></div>

        The vector $(1,1,0)$ is an optimal solution: its weights are $2+1=3\le c_1$ and $1+2=3\le c_2$, and the optimal value is $v[3][(3,4)]=6+6=12$.

    3. The table has $(n+1)(c_1+1)(c_2+1)=4\cdot4\cdot5=80$ cells. A third dimension of capacity $c_3=3$ multiplies this number by $c_3+1=4$, giving $320$ cells: every new dimension multiplies the number of states.

<a id="esercizio-22-4"></a>

!!! esercizio "Exercise 22.4: Exercise 4: Multidimensional Knapsack Problem"

    Consider the following MDKP instance, with $m=2$ dimensions, capacities $c_1=4$ and $c_2=3$, and $4$ items with profits and weights:

    $$
    \begin{array}{l|rrrr}
    \hline  & {j=1} & {j=2} & {j=3} & {j=4} \\
    \hline {p_j} & 7 & 3 & 7 & 5 \\
    {w_{1j}} & 2 & 1 & 1 & 2 \\
    {w_{2j}} & 1 & 2 & 1 & 1 \\
    \hline
    \end{array}
    $$

    **Questions**

    1. Execute the bottom-up DP algorithm: for each item $j$, write the matrices $v[j][k_1][k_2]$ and $s[j][k_1][k_2]$, and show the computation of the cell $\vet{k}=\vet{c}$.

    2. Using the tables $s$, reconstruct an optimal solution $(x_1,x_2,x_3,x_4)$ and report the optimal value.

    3. How many cells does the table of the DP algorithm have, including the row $j=0$? How many would it have with a third dimension of capacity $c_3=3$?

??? soluzione "Solution"

    The recurrence and the conventions are those of the box at the beginning of these exercises.

    1. The row $j=0$ is $v[0][\vet{k}]=0$ for every $\vet{k}$. In each matrix there is one row for each $k_1$ and one column for each $k_2$; in case of ties item $j$ is not selected.

        Item $j=1$, with $p_1=7$ and $\vet{w}_1=(2,1)$: $v[1][(4,3)]=\max\{v[0][(4,3)],\,p_1+v[0][(2,2)]\}=\max\{0,\,7+0\}=7$; $v[1][(3,2)]=\max\{v[0][(3,2)],\,p_1+v[0][(1,1)]\}=\max\{0,\,7+0\}=7$.

        $$
        \begin{array}{l|rrrr}
        \hline {v[1][k_1][k_2]} & {k_2=0} & {k_2=1} & {k_2=2} & {k_2=3} \\
        \hline {k_1=0} & {0} & {0} & {0} & {0} \\
        {k_1=1} & {0} & {0} & {0} & {0} \\
        {k_1=2} & {0} & {7} & {7} & {7} \\
        {k_1=3} & {0} & {7} & {7} & {7} \\
        {k_1=4} & {0} & {7} & {7} & {7} \\
        \hline
        \end{array}
        $$

        $$
        \begin{array}{l|rrrr}
        \hline {s[1][k_1][k_2]} & {k_2=0} & {k_2=1} & {k_2=2} & {k_2=3} \\
        \hline {k_1=0} & {0} & {0} & {0} & {0} \\
        {k_1=1} & {0} & {0} & {0} & {0} \\
        {k_1=2} & {0} & {1} & {1} & {1} \\
        {k_1=3} & {0} & {1} & {1} & {1} \\
        {k_1=4} & {0} & {1} & {1} & {1} \\
        \hline
        \end{array}
        $$

        Item $j=2$, with $p_2=3$ and $\vet{w}_2=(1,2)$: $v[2][(4,3)]=\max\{v[1][(4,3)],\,p_2+v[1][(3,1)]\}=\max\{7,\,3+7\}=10$; $v[2][(3,2)]=\max\{v[1][(3,2)],\,p_2+v[1][(2,0)]\}=\max\{7,\,3+0\}=7$.

        $$
        \begin{array}{l|rrrr}
        \hline {v[2][k_1][k_2]} & {k_2=0} & {k_2=1} & {k_2=2} & {k_2=3} \\
        \hline {k_1=0} & {0} & {0} & {0} & {0} \\
        {k_1=1} & {0} & {0} & {3} & {3} \\
        {k_1=2} & {0} & {7} & {7} & {7} \\
        {k_1=3} & {0} & {7} & {7} & {10} \\
        {k_1=4} & {0} & {7} & {7} & {10} \\
        \hline
        \end{array}
        $$

        $$
        \begin{array}{l|rrrr}
        \hline {s[2][k_1][k_2]} & {k_2=0} & {k_2=1} & {k_2=2} & {k_2=3} \\
        \hline {k_1=0} & {0} & {0} & {0} & {0} \\
        {k_1=1} & {0} & {0} & {1} & {1} \\
        {k_1=2} & {0} & {0} & {0} & {0} \\
        {k_1=3} & {0} & {0} & {0} & {1} \\
        {k_1=4} & {0} & {0} & {0} & {1} \\
        \hline
        \end{array}
        $$

        Item $j=3$, with $p_3=7$ and $\vet{w}_3=(1,1)$: $v[3][(4,3)]=\max\{v[2][(4,3)],\,p_3+v[2][(3,2)]\}=\max\{10,\,7+7\}=14$.

        $$
        \begin{array}{l|rrrr}
        \hline {v[3][k_1][k_2]} & {k_2=0} & {k_2=1} & {k_2=2} & {k_2=3} \\
        \hline {k_1=0} & {0} & {0} & {0} & {0} \\
        {k_1=1} & {0} & {7} & {7} & {7} \\
        {k_1=2} & {0} & {7} & {7} & {10} \\
        {k_1=3} & {0} & {7} & {14} & {14} \\
        {k_1=4} & {0} & {7} & {14} & {14} \\
        \hline
        \end{array}
        $$

        $$
        \begin{array}{l|rrrr}
        \hline {s[3][k_1][k_2]} & {k_2=0} & {k_2=1} & {k_2=2} & {k_2=3} \\
        \hline {k_1=0} & {0} & {0} & {0} & {0} \\
        {k_1=1} & {0} & {1} & {1} & {1} \\
        {k_1=2} & {0} & {0} & {0} & {1} \\
        {k_1=3} & {0} & {0} & {1} & {1} \\
        {k_1=4} & {0} & {0} & {1} & {1} \\
        \hline
        \end{array}
        $$

        Item $j=4$, with $p_4=5$ and $\vet{w}_4=(2,1)$: $v[4][(4,3)]=\max\{v[3][(4,3)],\,p_4+v[3][(2,2)]\}=\max\{14,\,5+7\}=14$.

        $$
        \begin{array}{l|rrrr}
        \hline {v[4][k_1][k_2]} & {k_2=0} & {k_2=1} & {k_2=2} & {k_2=3} \\
        \hline {k_1=0} & {0} & {0} & {0} & {0} \\
        {k_1=1} & {0} & {7} & {7} & {7} \\
        {k_1=2} & {0} & {7} & {7} & {10} \\
        {k_1=3} & {0} & {7} & {14} & {14} \\
        {k_1=4} & {0} & {7} & {14} & {14} \\
        \hline
        \end{array}
        $$

        $$
        \begin{array}{l|rrrr}
        \hline {s[4][k_1][k_2]} & {k_2=0} & {k_2=1} & {k_2=2} & {k_2=3} \\
        \hline {k_1=0} & {0} & {0} & {0} & {0} \\
        {k_1=1} & {0} & {0} & {0} & {0} \\
        {k_1=2} & {0} & {0} & {0} & {0} \\
        {k_1=3} & {0} & {0} & {0} & {0} \\
        {k_1=4} & {0} & {0} & {0} & {0} \\
        \hline
        \end{array}
        $$

    2. Starting from $j=4$ and $\vet{k}=(4,3)$:

        <div class="tabella" markdown="0"><table>
        <tr>
        <th>Iteration</th>
        <th><span class="arithmatex">\(j\)</span></th>
        <th><span class="arithmatex">\(\vet{k}\)</span></th>
        <th><span class="arithmatex">\(s[j][\vet{k}]\)</span></th>
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
        <td><span class="arithmatex">\(\vet{k}=(4,3)\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\((4,3)\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td class="cella-blu">0</td>
        <td><span class="arithmatex">\(x[4]\leftarrow 0\)</span>, <span class="arithmatex">\(\vet{k}=(4,3)\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\((4,3)\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td>0</td>
        <td>0</td>
        <td class="cella-blu">1</td>
        <td>0</td>
        <td><span class="arithmatex">\(x[3]\leftarrow 1\)</span>, <span class="arithmatex">\(\vet{k}\leftarrow (4,3)-(1,1)=(3,2)\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\((3,2)\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td>0</td>
        <td class="cella-blu">0</td>
        <td>1</td>
        <td>0</td>
        <td><span class="arithmatex">\(x[2]\leftarrow 0\)</span>, <span class="arithmatex">\(\vet{k}=(3,2)\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\((3,2)\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td class="cella-blu">1</td>
        <td>0</td>
        <td>1</td>
        <td>0</td>
        <td><span class="arithmatex">\(x[1]\leftarrow 1\)</span>, <span class="arithmatex">\(\vet{k}\leftarrow (3,2)-(2,1)=(1,1)\)</span></td>
        </tr>
        </table></div>

        The vector $(1,0,1,0)$ is an optimal solution: its weights are $2+1=3\le c_1$ and $1+1=2\le c_2$, and the optimal value is $v[4][(4,3)]=7+7=14$.

    3. The table has $(n+1)(c_1+1)(c_2+1)=5\cdot5\cdot4=100$ cells. A third dimension of capacity $c_3=3$ multiplies this number by $c_3+1=4$, giving $400$ cells: every new dimension multiplies the number of states.

<a id="esercizio-22-5"></a>

!!! esercizio "Exercise 22.5: Exercise 5: Multidimensional Knapsack Problem"

    Consider the following MDKP instance, with $m=2$ dimensions, capacities $c_1=4$ and $c_2=4$, and $4$ items with profits and weights:

    $$
    \begin{array}{l|rrrr}
    \hline  & {j=1} & {j=2} & {j=3} & {j=4} \\
    \hline {p_j} & 6 & 7 & 2 & 8 \\
    {w_{1j}} & 2 & 3 & 1 & 1 \\
    {w_{2j}} & 1 & 1 & 3 & 1 \\
    \hline
    \end{array}
    $$

    **Questions**

    1. Execute the bottom-up DP algorithm: for each item $j$, write the matrices $v[j][k_1][k_2]$ and $s[j][k_1][k_2]$, and show the computation of the cell $\vet{k}=\vet{c}$.

    2. Using the tables $s$, reconstruct an optimal solution $(x_1,x_2,x_3,x_4)$ and report the optimal value.

    3. How many cells does the table of the DP algorithm have, including the row $j=0$? How many would it have with a third dimension of capacity $c_3=3$?

??? soluzione "Solution"

    The recurrence and the conventions are those of the box at the beginning of these exercises.

    1. The row $j=0$ is $v[0][\vet{k}]=0$ for every $\vet{k}$. In each matrix there is one row for each $k_1$ and one column for each $k_2$; in case of ties item $j$ is not selected.

        Item $j=1$, with $p_1=6$ and $\vet{w}_1=(2,1)$: $v[1][(4,4)]=\max\{v[0][(4,4)],\,p_1+v[0][(2,3)]\}=\max\{0,\,6+0\}=6$; $\vet{w}_1=(2,1)\not\le(0,2)$, so $v[1][(0,2)]=v[0][(0,2)]=0$.

        $$
        \begin{array}{l|rrrrr}
        \hline {v[1][k_1][k_2]} & {k_2=0} & {k_2=1} & {k_2=2} & {k_2=3} & {k_2=4} \\
        \hline {k_1=0} & {0} & {0} & {0} & {0} & {0} \\
        {k_1=1} & {0} & {0} & {0} & {0} & {0} \\
        {k_1=2} & {0} & {6} & {6} & {6} & {6} \\
        {k_1=3} & {0} & {6} & {6} & {6} & {6} \\
        {k_1=4} & {0} & {6} & {6} & {6} & {6} \\
        \hline
        \end{array}
        $$

        $$
        \begin{array}{l|rrrrr}
        \hline {s[1][k_1][k_2]} & {k_2=0} & {k_2=1} & {k_2=2} & {k_2=3} & {k_2=4} \\
        \hline {k_1=0} & {0} & {0} & {0} & {0} & {0} \\
        {k_1=1} & {0} & {0} & {0} & {0} & {0} \\
        {k_1=2} & {0} & {1} & {1} & {1} & {1} \\
        {k_1=3} & {0} & {1} & {1} & {1} & {1} \\
        {k_1=4} & {0} & {1} & {1} & {1} & {1} \\
        \hline
        \end{array}
        $$

        Item $j=2$, with $p_2=7$ and $\vet{w}_2=(3,1)$: $v[2][(4,4)]=\max\{v[1][(4,4)],\,p_2+v[1][(1,3)]\}=\max\{6,\,7+0\}=7$; $v[2][(3,3)]=\max\{v[1][(3,3)],\,p_2+v[1][(0,2)]\}=\max\{6,\,7+0\}=7$.

        $$
        \begin{array}{l|rrrrr}
        \hline {v[2][k_1][k_2]} & {k_2=0} & {k_2=1} & {k_2=2} & {k_2=3} & {k_2=4} \\
        \hline {k_1=0} & {0} & {0} & {0} & {0} & {0} \\
        {k_1=1} & {0} & {0} & {0} & {0} & {0} \\
        {k_1=2} & {0} & {6} & {6} & {6} & {6} \\
        {k_1=3} & {0} & {7} & {7} & {7} & {7} \\
        {k_1=4} & {0} & {7} & {7} & {7} & {7} \\
        \hline
        \end{array}
        $$

        $$
        \begin{array}{l|rrrrr}
        \hline {s[2][k_1][k_2]} & {k_2=0} & {k_2=1} & {k_2=2} & {k_2=3} & {k_2=4} \\
        \hline {k_1=0} & {0} & {0} & {0} & {0} & {0} \\
        {k_1=1} & {0} & {0} & {0} & {0} & {0} \\
        {k_1=2} & {0} & {0} & {0} & {0} & {0} \\
        {k_1=3} & {0} & {1} & {1} & {1} & {1} \\
        {k_1=4} & {0} & {1} & {1} & {1} & {1} \\
        \hline
        \end{array}
        $$

        Item $j=3$, with $p_3=2$ and $\vet{w}_3=(1,3)$: $v[3][(4,4)]=\max\{v[2][(4,4)],\,p_3+v[2][(3,1)]\}=\max\{7,\,2+7\}=9$; $v[3][(3,3)]=\max\{v[2][(3,3)],\,p_3+v[2][(2,0)]\}=\max\{7,\,2+0\}=7$.

        $$
        \begin{array}{l|rrrrr}
        \hline {v[3][k_1][k_2]} & {k_2=0} & {k_2=1} & {k_2=2} & {k_2=3} & {k_2=4} \\
        \hline {k_1=0} & {0} & {0} & {0} & {0} & {0} \\
        {k_1=1} & {0} & {0} & {0} & {2} & {2} \\
        {k_1=2} & {0} & {6} & {6} & {6} & {6} \\
        {k_1=3} & {0} & {7} & {7} & {7} & {8} \\
        {k_1=4} & {0} & {7} & {7} & {7} & {9} \\
        \hline
        \end{array}
        $$

        $$
        \begin{array}{l|rrrrr}
        \hline {s[3][k_1][k_2]} & {k_2=0} & {k_2=1} & {k_2=2} & {k_2=3} & {k_2=4} \\
        \hline {k_1=0} & {0} & {0} & {0} & {0} & {0} \\
        {k_1=1} & {0} & {0} & {0} & {1} & {1} \\
        {k_1=2} & {0} & {0} & {0} & {0} & {0} \\
        {k_1=3} & {0} & {0} & {0} & {0} & {1} \\
        {k_1=4} & {0} & {0} & {0} & {0} & {1} \\
        \hline
        \end{array}
        $$

        Item $j=4$, with $p_4=8$ and $\vet{w}_4=(1,1)$: $v[4][(4,4)]=\max\{v[3][(4,4)],\,p_4+v[3][(3,3)]\}=\max\{9,\,8+7\}=15$.

        $$
        \begin{array}{l|rrrrr}
        \hline {v[4][k_1][k_2]} & {k_2=0} & {k_2=1} & {k_2=2} & {k_2=3} & {k_2=4} \\
        \hline {k_1=0} & {0} & {0} & {0} & {0} & {0} \\
        {k_1=1} & {0} & {8} & {8} & {8} & {8} \\
        {k_1=2} & {0} & {8} & {8} & {8} & {10} \\
        {k_1=3} & {0} & {8} & {14} & {14} & {14} \\
        {k_1=4} & {0} & {8} & {15} & {15} & {15} \\
        \hline
        \end{array}
        $$

        $$
        \begin{array}{l|rrrrr}
        \hline {s[4][k_1][k_2]} & {k_2=0} & {k_2=1} & {k_2=2} & {k_2=3} & {k_2=4} \\
        \hline {k_1=0} & {0} & {0} & {0} & {0} & {0} \\
        {k_1=1} & {0} & {1} & {1} & {1} & {1} \\
        {k_1=2} & {0} & {1} & {1} & {1} & {1} \\
        {k_1=3} & {0} & {1} & {1} & {1} & {1} \\
        {k_1=4} & {0} & {1} & {1} & {1} & {1} \\
        \hline
        \end{array}
        $$

    2. Starting from $j=4$ and $\vet{k}=(4,4)$:

        <div class="tabella" markdown="0"><table>
        <tr>
        <th>Iteration</th>
        <th><span class="arithmatex">\(j\)</span></th>
        <th><span class="arithmatex">\(\vet{k}\)</span></th>
        <th><span class="arithmatex">\(s[j][\vet{k}]\)</span></th>
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
        <td><span class="arithmatex">\(\vet{k}=(4,4)\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\((4,4)\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td class="cella-blu">1</td>
        <td><span class="arithmatex">\(x[4]\leftarrow 1\)</span>, <span class="arithmatex">\(\vet{k}\leftarrow (4,4)-(1,1)=(3,3)\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\((3,3)\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td>0</td>
        <td>0</td>
        <td class="cella-blu">0</td>
        <td>1</td>
        <td><span class="arithmatex">\(x[3]\leftarrow 0\)</span>, <span class="arithmatex">\(\vet{k}=(3,3)\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\((3,3)\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td>0</td>
        <td class="cella-blu">1</td>
        <td>0</td>
        <td>1</td>
        <td><span class="arithmatex">\(x[2]\leftarrow 1\)</span>, <span class="arithmatex">\(\vet{k}\leftarrow (3,3)-(3,1)=(0,2)\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\((0,2)\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td class="cella-blu">0</td>
        <td>1</td>
        <td>0</td>
        <td>1</td>
        <td><span class="arithmatex">\(x[1]\leftarrow 0\)</span>, <span class="arithmatex">\(\vet{k}=(0,2)\)</span></td>
        </tr>
        </table></div>

        The vector $(0,1,0,1)$ is an optimal solution: its weights are $3+1=4\le c_1$ and $1+1=2\le c_2$, and the optimal value is $v[4][(4,4)]=7+8=15$.

    3. The table has $(n+1)(c_1+1)(c_2+1)=5\cdot5\cdot5=125$ cells. A third dimension of capacity $c_3=3$ multiplies this number by $c_3+1=4$, giving $500$ cells: every new dimension multiplies the number of states.
