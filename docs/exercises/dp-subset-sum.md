---
title: "Exercises · DP for the subset sum problem"
---

# Exercises · DP for the subset sum problem

<div class="info-capitolo" markdown>

**Exercises · Chapter 20** · each solution opens with a click · [:material-book-open-variant: Chapter 20: Subset sum (SSP)](../dynamic-programming/dp-subset-sum.md) · [:material-file-pdf-box: Exercises, volume 3 (PDF)](../pdf/exercises-3-dynamic-programming.pdf)

</div>

!!! formula "Recurrence used in these exercises"

    The DP algorithm of the chapter [«DP for the subset sum problem»](https://fabiofurini.github.io/combinatorial-optimization/dynamic-programming/dp-subset-sum/): $r(j,k)\in\{\textit{true},\textit{false}\}$ tells whether the target value $k$ is the total weight of a subset of the items $1,2,\dots,j$, and

    $$
    r(j,k)= \left\{ \begin{array}{ll}
    \textit{true}  & \textrm{if $k=0$,}\\[2ex]
    \textit{false} & \textrm{if $j=0$ and $k\ge 1$,}\\[2ex]
    r(j-1,k) & \textrm{if $j,k\ge 1$ and $w_j>k$,}\\[2ex]
    r(j-1,k) \,\lor\, r(j-1,k-w_j) & \textrm{if $j,k\ge 1$ and $w_j\le k$.}
    \end{array} \right.
    $$

    The answer is $r(n,c)$. The matrix $s$ stores $s[j][k]=1$ if item $j$ is used, that is, if $r[j-1][k]$ is <em>false</em> and $r[j-1][k-w_j]$ is <em>true</em>; a subset is reconstructed from $j=n$ and $k=c$ with $x_j\leftarrow s[j][k]$, $k\leftarrow k-s[j][k]\,w_j$.

<a id="esercizio-20-1"></a>

!!! esercizio "Exercise 20.1: Exercise 1: Subset Sum Problem"

    Consider the following SSP instance, with target value $c=7$ and $3$ items with weights:

    $$
    \begin{array}{l|rrr}
    \hline  & {j=1} & {j=2} & {j=3} \\
    \hline {w_j} & 2 & 3 & 5 \\
    \hline
    \end{array}
    $$

    **Questions**

    1. Show the execution of the bottom-up DP algorithm by reporting, for each step, the cells $r[j][k]$ and $s[j][k]$; then write the matrices $r$ and $s$.

    2. Give the answer to the SSP instance and, if it is yes, reconstruct from the matrix $s$ a subset of total weight $c$, as a binary vector $(x_1,x_2,x_3)$.

    3. Using the last row of the matrix $r$, list all the target values $k\in\{1,2,\dots,7\}$ that are reachable with the 3 items.

??? soluzione "Solution"

    The recurrence and the conventions are those of the box at the beginning of these exercises.

    1. Step-by-step execution of the bottom-up DP algorithm. The row $j=0$ is $r[0][0]=\mathrm{T}$ and $r[0][k]=\mathrm{F}$ for $k\ge 1$, with $s[0][k]=0$; $\mathrm{T}$ stands for <em>true</em> and $\mathrm{F}$ for <em>false</em>. Item $j$ is used ($s[j][k]=1$) only if $r[j-1][k]$ is $\mathrm{F}$.

        <div class="tabella" markdown="0"><table>
        <tr>
        <th><span class="arithmatex">\(j\)</span></th>
        <th><span class="arithmatex">\(k\)</span></th>
        <th><span class="arithmatex">\(r[j][k]\)</span></th>
        <th><span class="arithmatex">\(s[j][k]\)</span></th>
        <th>Action</th>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(\mathrm{T}\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(w_1=2>0\)</span>: <span class="arithmatex">\(r[0][0]=\mathrm{T}\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(\mathrm{F}\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(w_1=2>1\)</span>: <span class="arithmatex">\(r[0][1]=\mathrm{F}\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(\mathrm{T}\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(r[0][2]\lor r[0][0]=\mathrm{F}\lor \mathrm{T}=\mathrm{T}\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(\mathrm{F}\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(r[0][3]\lor r[0][1]=\mathrm{F}\lor \mathrm{F}=\mathrm{F}\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(\mathrm{F}\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(r[0][4]\lor r[0][2]=\mathrm{F}\lor \mathrm{F}=\mathrm{F}\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(\mathrm{F}\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(r[0][5]\lor r[0][3]=\mathrm{F}\lor \mathrm{F}=\mathrm{F}\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(\mathrm{F}\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(r[0][6]\lor r[0][4]=\mathrm{F}\lor \mathrm{F}=\mathrm{F}\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(7\)</span></td>
        <td><span class="arithmatex">\(\mathrm{F}\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(r[0][7]\lor r[0][5]=\mathrm{F}\lor \mathrm{F}=\mathrm{F}\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(\mathrm{T}\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(w_2=3>0\)</span>: <span class="arithmatex">\(r[1][0]=\mathrm{T}\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(\mathrm{F}\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(w_2=3>1\)</span>: <span class="arithmatex">\(r[1][1]=\mathrm{F}\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(\mathrm{T}\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(w_2=3>2\)</span>: <span class="arithmatex">\(r[1][2]=\mathrm{T}\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(\mathrm{T}\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(r[1][3]\lor r[1][0]=\mathrm{F}\lor \mathrm{T}=\mathrm{T}\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(\mathrm{F}\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(r[1][4]\lor r[1][1]=\mathrm{F}\lor \mathrm{F}=\mathrm{F}\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(\mathrm{T}\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(r[1][5]\lor r[1][2]=\mathrm{F}\lor \mathrm{T}=\mathrm{T}\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(\mathrm{F}\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(r[1][6]\lor r[1][3]=\mathrm{F}\lor \mathrm{F}=\mathrm{F}\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(7\)</span></td>
        <td><span class="arithmatex">\(\mathrm{F}\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(r[1][7]\lor r[1][4]=\mathrm{F}\lor \mathrm{F}=\mathrm{F}\)</span></td>
        </tr>
        </table></div>

        <div class="tabella" markdown="0"><table>
        <tr>
        <th><span class="arithmatex">\(j\)</span></th>
        <th><span class="arithmatex">\(k\)</span></th>
        <th><span class="arithmatex">\(r[j][k]\)</span></th>
        <th><span class="arithmatex">\(s[j][k]\)</span></th>
        <th>Action</th>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(\mathrm{T}\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(w_3=5>0\)</span>: <span class="arithmatex">\(r[2][0]=\mathrm{T}\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(\mathrm{F}\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(w_3=5>1\)</span>: <span class="arithmatex">\(r[2][1]=\mathrm{F}\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(\mathrm{T}\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(w_3=5>2\)</span>: <span class="arithmatex">\(r[2][2]=\mathrm{T}\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(\mathrm{T}\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(w_3=5>3\)</span>: <span class="arithmatex">\(r[2][3]=\mathrm{T}\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(\mathrm{F}\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(w_3=5>4\)</span>: <span class="arithmatex">\(r[2][4]=\mathrm{F}\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(\mathrm{T}\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(r[2][5]\lor r[2][0]=\mathrm{T}\lor \mathrm{T}=\mathrm{T}\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(\mathrm{F}\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(r[2][6]\lor r[2][1]=\mathrm{F}\lor \mathrm{F}=\mathrm{F}\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(7\)</span></td>
        <td><span class="arithmatex">\(\mathrm{T}\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(r[2][7]\lor r[2][2]=\mathrm{F}\lor \mathrm{T}=\mathrm{T}\)</span></td>
        </tr>
        </table></div>

        This is the matrix $r$ after the execution of the DP algorithm:

        $$
        \begin{array}{l|rrrrrrrr}
        \hline {r[j][k]} & {k=0} & {k=1} & {k=2} & {k=3} & {k=4} & {k=5} & {k=6} & {k=7} \\
        \hline {j=0} & {\mathrm{T}} & {\mathrm{F}} & {\mathrm{F}} & {\mathrm{F}} & {\mathrm{F}} & {\mathrm{F}} & {\mathrm{F}} & {\mathrm{F}} \\
        {j=1} & {\mathrm{T}} & {\mathrm{F}} & {\mathrm{T}} & {\mathrm{F}} & {\mathrm{F}} & {\mathrm{F}} & {\mathrm{F}} & {\mathrm{F}} \\
        {j=2} & {\mathrm{T}} & {\mathrm{F}} & {\mathrm{T}} & {\mathrm{T}} & {\mathrm{F}} & {\mathrm{T}} & {\mathrm{F}} & {\mathrm{F}} \\
        {j=3} & {\mathrm{T}} & {\mathrm{F}} & {\mathrm{T}} & {\mathrm{T}} & {\mathrm{F}} & {\mathrm{T}} & {\mathrm{F}} & {\mathrm{T}} \\
        \hline
        \end{array}
        $$

        This is the matrix $s$ after the execution of the DP algorithm:

        $$
        \begin{array}{l|rrrrrrrr}
        \hline {s[j][k]} & {k=0} & {k=1} & {k=2} & {k=3} & {k=4} & {k=5} & {k=6} & {k=7} \\
        \hline {j=0} & {0} & {0} & {0} & {0} & {0} & {0} & {0} & {0} \\
        {j=1} & {0} & {0} & {1} & {0} & {0} & {0} & {0} & {0} \\
        {j=2} & {0} & {0} & {0} & {1} & {0} & {1} & {0} & {0} \\
        {j=3} & {0} & {0} & {0} & {0} & {0} & {0} & {0} & {1} \\
        \hline
        \end{array}
        $$

    2. Since $r[3][7]=\mathrm{T}$, the answer is <strong>yes</strong>. Starting from $j=3$ and $k=7$:

        <div class="tabella" markdown="0"><table>
        <tr>
        <th>Iteration</th>
        <th><span class="arithmatex">\(j\)</span></th>
        <th><span class="arithmatex">\(k\)</span></th>
        <th><span class="arithmatex">\(s[j][k]\)</span></th>
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
        <td><span class="arithmatex">\(k=7\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(7\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td>0</td>
        <td>0</td>
        <td class="cella-blu">1</td>
        <td><span class="arithmatex">\(x[3]\leftarrow 1\)</span>, <span class="arithmatex">\(k\leftarrow 7-5=2\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td>0</td>
        <td class="cella-blu">0</td>
        <td>1</td>
        <td><span class="arithmatex">\(x[2]\leftarrow 0\)</span>, <span class="arithmatex">\(k=2\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td class="cella-blu">1</td>
        <td>0</td>
        <td>1</td>
        <td><span class="arithmatex">\(x[1]\leftarrow 1\)</span>, <span class="arithmatex">\(k\leftarrow 2-2=0\)</span></td>
        </tr>
        </table></div>

        The vector $(1,0,1)$ selects the subset $\{1,3\}$, of total weight $2+5=7=c$. It is the only subset with total weight $7$.

    3. The last row $r[3][\cdot]$ is $\mathrm{T}$ exactly for $k\in\{2,3,5,7\}$: these are the reachable target values. The other values in $\{1,2,\dots,7\}$ are not the total weight of any subset.

<a id="esercizio-20-2"></a>

!!! esercizio "Exercise 20.2: Exercise 2: Subset Sum Problem"

    Consider the following SSP instance, with target value $c=9$ and $3$ items with weights:

    $$
    \begin{array}{l|rrr}
    \hline  & {j=1} & {j=2} & {j=3} \\
    \hline {w_j} & 3 & 4 & 6 \\
    \hline
    \end{array}
    $$

    **Questions**

    1. Show the execution of the bottom-up DP algorithm by reporting, for each step, the cells $r[j][k]$ and $s[j][k]$; then write the matrices $r$ and $s$.

    2. Give the answer to the SSP instance and, if it is yes, reconstruct from the matrix $s$ a subset of total weight $c$, as a binary vector $(x_1,x_2,x_3)$.

    3. Using the last row of the matrix $r$, list all the target values $k\in\{1,2,\dots,9\}$ that are reachable with the 3 items.

??? soluzione "Solution"

    The recurrence and the conventions are those of the box at the beginning of these exercises.

    1. Step-by-step execution of the bottom-up DP algorithm. The row $j=0$ is $r[0][0]=\mathrm{T}$ and $r[0][k]=\mathrm{F}$ for $k\ge 1$, with $s[0][k]=0$; $\mathrm{T}$ stands for <em>true</em> and $\mathrm{F}$ for <em>false</em>. Item $j$ is used ($s[j][k]=1$) only if $r[j-1][k]$ is $\mathrm{F}$.

        <div class="tabella" markdown="0"><table>
        <tr>
        <th><span class="arithmatex">\(j\)</span></th>
        <th><span class="arithmatex">\(k\)</span></th>
        <th><span class="arithmatex">\(r[j][k]\)</span></th>
        <th><span class="arithmatex">\(s[j][k]\)</span></th>
        <th>Action</th>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(\mathrm{T}\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(w_1=3>0\)</span>: <span class="arithmatex">\(r[0][0]=\mathrm{T}\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(\mathrm{F}\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(w_1=3>1\)</span>: <span class="arithmatex">\(r[0][1]=\mathrm{F}\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(\mathrm{F}\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(w_1=3>2\)</span>: <span class="arithmatex">\(r[0][2]=\mathrm{F}\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(\mathrm{T}\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(r[0][3]\lor r[0][0]=\mathrm{F}\lor \mathrm{T}=\mathrm{T}\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(\mathrm{F}\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(r[0][4]\lor r[0][1]=\mathrm{F}\lor \mathrm{F}=\mathrm{F}\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(\mathrm{F}\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(r[0][5]\lor r[0][2]=\mathrm{F}\lor \mathrm{F}=\mathrm{F}\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(\mathrm{F}\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(r[0][6]\lor r[0][3]=\mathrm{F}\lor \mathrm{F}=\mathrm{F}\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(7\)</span></td>
        <td><span class="arithmatex">\(\mathrm{F}\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(r[0][7]\lor r[0][4]=\mathrm{F}\lor \mathrm{F}=\mathrm{F}\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(8\)</span></td>
        <td><span class="arithmatex">\(\mathrm{F}\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(r[0][8]\lor r[0][5]=\mathrm{F}\lor \mathrm{F}=\mathrm{F}\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(9\)</span></td>
        <td><span class="arithmatex">\(\mathrm{F}\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(r[0][9]\lor r[0][6]=\mathrm{F}\lor \mathrm{F}=\mathrm{F}\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(\mathrm{T}\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(w_2=4>0\)</span>: <span class="arithmatex">\(r[1][0]=\mathrm{T}\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(\mathrm{F}\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(w_2=4>1\)</span>: <span class="arithmatex">\(r[1][1]=\mathrm{F}\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(\mathrm{F}\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(w_2=4>2\)</span>: <span class="arithmatex">\(r[1][2]=\mathrm{F}\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(\mathrm{T}\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(w_2=4>3\)</span>: <span class="arithmatex">\(r[1][3]=\mathrm{T}\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(\mathrm{T}\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(r[1][4]\lor r[1][0]=\mathrm{F}\lor \mathrm{T}=\mathrm{T}\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(\mathrm{F}\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(r[1][5]\lor r[1][1]=\mathrm{F}\lor \mathrm{F}=\mathrm{F}\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(\mathrm{F}\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(r[1][6]\lor r[1][2]=\mathrm{F}\lor \mathrm{F}=\mathrm{F}\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(7\)</span></td>
        <td><span class="arithmatex">\(\mathrm{T}\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(r[1][7]\lor r[1][3]=\mathrm{F}\lor \mathrm{T}=\mathrm{T}\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(8\)</span></td>
        <td><span class="arithmatex">\(\mathrm{F}\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(r[1][8]\lor r[1][4]=\mathrm{F}\lor \mathrm{F}=\mathrm{F}\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(9\)</span></td>
        <td><span class="arithmatex">\(\mathrm{F}\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(r[1][9]\lor r[1][5]=\mathrm{F}\lor \mathrm{F}=\mathrm{F}\)</span></td>
        </tr>
        </table></div>

        <div class="tabella" markdown="0"><table>
        <tr>
        <th><span class="arithmatex">\(j\)</span></th>
        <th><span class="arithmatex">\(k\)</span></th>
        <th><span class="arithmatex">\(r[j][k]\)</span></th>
        <th><span class="arithmatex">\(s[j][k]\)</span></th>
        <th>Action</th>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(\mathrm{T}\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(w_3=6>0\)</span>: <span class="arithmatex">\(r[2][0]=\mathrm{T}\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(\mathrm{F}\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(w_3=6>1\)</span>: <span class="arithmatex">\(r[2][1]=\mathrm{F}\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(\mathrm{F}\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(w_3=6>2\)</span>: <span class="arithmatex">\(r[2][2]=\mathrm{F}\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(\mathrm{T}\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(w_3=6>3\)</span>: <span class="arithmatex">\(r[2][3]=\mathrm{T}\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(\mathrm{T}\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(w_3=6>4\)</span>: <span class="arithmatex">\(r[2][4]=\mathrm{T}\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(\mathrm{F}\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(w_3=6>5\)</span>: <span class="arithmatex">\(r[2][5]=\mathrm{F}\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(\mathrm{T}\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(r[2][6]\lor r[2][0]=\mathrm{F}\lor \mathrm{T}=\mathrm{T}\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(7\)</span></td>
        <td><span class="arithmatex">\(\mathrm{T}\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(r[2][7]\lor r[2][1]=\mathrm{T}\lor \mathrm{F}=\mathrm{T}\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(8\)</span></td>
        <td><span class="arithmatex">\(\mathrm{F}\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(r[2][8]\lor r[2][2]=\mathrm{F}\lor \mathrm{F}=\mathrm{F}\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(9\)</span></td>
        <td><span class="arithmatex">\(\mathrm{T}\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(r[2][9]\lor r[2][3]=\mathrm{F}\lor \mathrm{T}=\mathrm{T}\)</span></td>
        </tr>
        </table></div>

        This is the matrix $r$ after the execution of the DP algorithm:

        $$
        \begin{array}{l|rrrrrrrrrr}
        \hline {r[j][k]} & {k=0} & {k=1} & {k=2} & {k=3} & {k=4} & {k=5} & {k=6} & {k=7} & {k=8} & {k=9} \\
        \hline {j=0} & {\mathrm{T}} & {\mathrm{F}} & {\mathrm{F}} & {\mathrm{F}} & {\mathrm{F}} & {\mathrm{F}} & {\mathrm{F}} & {\mathrm{F}} & {\mathrm{F}} & {\mathrm{F}} \\
        {j=1} & {\mathrm{T}} & {\mathrm{F}} & {\mathrm{F}} & {\mathrm{T}} & {\mathrm{F}} & {\mathrm{F}} & {\mathrm{F}} & {\mathrm{F}} & {\mathrm{F}} & {\mathrm{F}} \\
        {j=2} & {\mathrm{T}} & {\mathrm{F}} & {\mathrm{F}} & {\mathrm{T}} & {\mathrm{T}} & {\mathrm{F}} & {\mathrm{F}} & {\mathrm{T}} & {\mathrm{F}} & {\mathrm{F}} \\
        {j=3} & {\mathrm{T}} & {\mathrm{F}} & {\mathrm{F}} & {\mathrm{T}} & {\mathrm{T}} & {\mathrm{F}} & {\mathrm{T}} & {\mathrm{T}} & {\mathrm{F}} & {\mathrm{T}} \\
        \hline
        \end{array}
        $$

        This is the matrix $s$ after the execution of the DP algorithm:

        $$
        \begin{array}{l|rrrrrrrrrr}
        \hline {s[j][k]} & {k=0} & {k=1} & {k=2} & {k=3} & {k=4} & {k=5} & {k=6} & {k=7} & {k=8} & {k=9} \\
        \hline {j=0} & {0} & {0} & {0} & {0} & {0} & {0} & {0} & {0} & {0} & {0} \\
        {j=1} & {0} & {0} & {0} & {1} & {0} & {0} & {0} & {0} & {0} & {0} \\
        {j=2} & {0} & {0} & {0} & {0} & {1} & {0} & {0} & {1} & {0} & {0} \\
        {j=3} & {0} & {0} & {0} & {0} & {0} & {0} & {1} & {0} & {0} & {1} \\
        \hline
        \end{array}
        $$

    2. Since $r[3][9]=\mathrm{T}$, the answer is <strong>yes</strong>. Starting from $j=3$ and $k=9$:

        <div class="tabella" markdown="0"><table>
        <tr>
        <th>Iteration</th>
        <th><span class="arithmatex">\(j\)</span></th>
        <th><span class="arithmatex">\(k\)</span></th>
        <th><span class="arithmatex">\(s[j][k]\)</span></th>
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
        <td><span class="arithmatex">\(k=9\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(9\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td>0</td>
        <td>0</td>
        <td class="cella-blu">1</td>
        <td><span class="arithmatex">\(x[3]\leftarrow 1\)</span>, <span class="arithmatex">\(k\leftarrow 9-6=3\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td>0</td>
        <td class="cella-blu">0</td>
        <td>1</td>
        <td><span class="arithmatex">\(x[2]\leftarrow 0\)</span>, <span class="arithmatex">\(k=3\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td class="cella-blu">1</td>
        <td>0</td>
        <td>1</td>
        <td><span class="arithmatex">\(x[1]\leftarrow 1\)</span>, <span class="arithmatex">\(k\leftarrow 3-3=0\)</span></td>
        </tr>
        </table></div>

        The vector $(1,0,1)$ selects the subset $\{1,3\}$, of total weight $3+6=9=c$. It is the only subset with total weight $9$.

    3. The last row $r[3][\cdot]$ is $\mathrm{T}$ exactly for $k\in\{3,4,6,7,9\}$: these are the reachable target values. The other values in $\{1,2,\dots,9\}$ are not the total weight of any subset.

<a id="esercizio-20-3"></a>

!!! esercizio "Exercise 20.3: Exercise 3: Subset Sum Problem"

    Consider the following SSP instance, with target value $c=7$ and $3$ items with weights:

    $$
    \begin{array}{l|rrr}
    \hline  & {j=1} & {j=2} & {j=3} \\
    \hline {w_j} & 2 & 4 & 6 \\
    \hline
    \end{array}
    $$

    **Questions**

    1. Show the execution of the bottom-up DP algorithm by reporting, for each step, the cells $r[j][k]$ and $s[j][k]$; then write the matrices $r$ and $s$.

    2. Give the answer to the SSP instance and, if it is yes, reconstruct from the matrix $s$ a subset of total weight $c$, as a binary vector $(x_1,x_2,x_3)$.

    3. Using the last row of the matrix $r$, list all the target values $k\in\{1,2,\dots,7\}$ that are reachable with the 3 items.

??? soluzione "Solution"

    The recurrence and the conventions are those of the box at the beginning of these exercises.

    1. Step-by-step execution of the bottom-up DP algorithm. The row $j=0$ is $r[0][0]=\mathrm{T}$ and $r[0][k]=\mathrm{F}$ for $k\ge 1$, with $s[0][k]=0$; $\mathrm{T}$ stands for <em>true</em> and $\mathrm{F}$ for <em>false</em>. Item $j$ is used ($s[j][k]=1$) only if $r[j-1][k]$ is $\mathrm{F}$.

        <div class="tabella" markdown="0"><table>
        <tr>
        <th><span class="arithmatex">\(j\)</span></th>
        <th><span class="arithmatex">\(k\)</span></th>
        <th><span class="arithmatex">\(r[j][k]\)</span></th>
        <th><span class="arithmatex">\(s[j][k]\)</span></th>
        <th>Action</th>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(\mathrm{T}\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(w_1=2>0\)</span>: <span class="arithmatex">\(r[0][0]=\mathrm{T}\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(\mathrm{F}\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(w_1=2>1\)</span>: <span class="arithmatex">\(r[0][1]=\mathrm{F}\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(\mathrm{T}\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(r[0][2]\lor r[0][0]=\mathrm{F}\lor \mathrm{T}=\mathrm{T}\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(\mathrm{F}\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(r[0][3]\lor r[0][1]=\mathrm{F}\lor \mathrm{F}=\mathrm{F}\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(\mathrm{F}\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(r[0][4]\lor r[0][2]=\mathrm{F}\lor \mathrm{F}=\mathrm{F}\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(\mathrm{F}\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(r[0][5]\lor r[0][3]=\mathrm{F}\lor \mathrm{F}=\mathrm{F}\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(\mathrm{F}\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(r[0][6]\lor r[0][4]=\mathrm{F}\lor \mathrm{F}=\mathrm{F}\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(7\)</span></td>
        <td><span class="arithmatex">\(\mathrm{F}\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(r[0][7]\lor r[0][5]=\mathrm{F}\lor \mathrm{F}=\mathrm{F}\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(\mathrm{T}\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(w_2=4>0\)</span>: <span class="arithmatex">\(r[1][0]=\mathrm{T}\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(\mathrm{F}\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(w_2=4>1\)</span>: <span class="arithmatex">\(r[1][1]=\mathrm{F}\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(\mathrm{T}\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(w_2=4>2\)</span>: <span class="arithmatex">\(r[1][2]=\mathrm{T}\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(\mathrm{F}\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(w_2=4>3\)</span>: <span class="arithmatex">\(r[1][3]=\mathrm{F}\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(\mathrm{T}\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(r[1][4]\lor r[1][0]=\mathrm{F}\lor \mathrm{T}=\mathrm{T}\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(\mathrm{F}\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(r[1][5]\lor r[1][1]=\mathrm{F}\lor \mathrm{F}=\mathrm{F}\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(\mathrm{T}\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(r[1][6]\lor r[1][2]=\mathrm{F}\lor \mathrm{T}=\mathrm{T}\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(7\)</span></td>
        <td><span class="arithmatex">\(\mathrm{F}\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(r[1][7]\lor r[1][3]=\mathrm{F}\lor \mathrm{F}=\mathrm{F}\)</span></td>
        </tr>
        </table></div>

        <div class="tabella" markdown="0"><table>
        <tr>
        <th><span class="arithmatex">\(j\)</span></th>
        <th><span class="arithmatex">\(k\)</span></th>
        <th><span class="arithmatex">\(r[j][k]\)</span></th>
        <th><span class="arithmatex">\(s[j][k]\)</span></th>
        <th>Action</th>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(\mathrm{T}\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(w_3=6>0\)</span>: <span class="arithmatex">\(r[2][0]=\mathrm{T}\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(\mathrm{F}\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(w_3=6>1\)</span>: <span class="arithmatex">\(r[2][1]=\mathrm{F}\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(\mathrm{T}\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(w_3=6>2\)</span>: <span class="arithmatex">\(r[2][2]=\mathrm{T}\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(\mathrm{F}\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(w_3=6>3\)</span>: <span class="arithmatex">\(r[2][3]=\mathrm{F}\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(\mathrm{T}\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(w_3=6>4\)</span>: <span class="arithmatex">\(r[2][4]=\mathrm{T}\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(\mathrm{F}\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(w_3=6>5\)</span>: <span class="arithmatex">\(r[2][5]=\mathrm{F}\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(\mathrm{T}\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(r[2][6]\lor r[2][0]=\mathrm{T}\lor \mathrm{T}=\mathrm{T}\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(7\)</span></td>
        <td><span class="arithmatex">\(\mathrm{F}\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(r[2][7]\lor r[2][1]=\mathrm{F}\lor \mathrm{F}=\mathrm{F}\)</span></td>
        </tr>
        </table></div>

        This is the matrix $r$ after the execution of the DP algorithm:

        $$
        \begin{array}{l|rrrrrrrr}
        \hline {r[j][k]} & {k=0} & {k=1} & {k=2} & {k=3} & {k=4} & {k=5} & {k=6} & {k=7} \\
        \hline {j=0} & {\mathrm{T}} & {\mathrm{F}} & {\mathrm{F}} & {\mathrm{F}} & {\mathrm{F}} & {\mathrm{F}} & {\mathrm{F}} & {\mathrm{F}} \\
        {j=1} & {\mathrm{T}} & {\mathrm{F}} & {\mathrm{T}} & {\mathrm{F}} & {\mathrm{F}} & {\mathrm{F}} & {\mathrm{F}} & {\mathrm{F}} \\
        {j=2} & {\mathrm{T}} & {\mathrm{F}} & {\mathrm{T}} & {\mathrm{F}} & {\mathrm{T}} & {\mathrm{F}} & {\mathrm{T}} & {\mathrm{F}} \\
        {j=3} & {\mathrm{T}} & {\mathrm{F}} & {\mathrm{T}} & {\mathrm{F}} & {\mathrm{T}} & {\mathrm{F}} & {\mathrm{T}} & {\mathrm{F}} \\
        \hline
        \end{array}
        $$

        This is the matrix $s$ after the execution of the DP algorithm:

        $$
        \begin{array}{l|rrrrrrrr}
        \hline {s[j][k]} & {k=0} & {k=1} & {k=2} & {k=3} & {k=4} & {k=5} & {k=6} & {k=7} \\
        \hline {j=0} & {0} & {0} & {0} & {0} & {0} & {0} & {0} & {0} \\
        {j=1} & {0} & {0} & {1} & {0} & {0} & {0} & {0} & {0} \\
        {j=2} & {0} & {0} & {0} & {0} & {1} & {0} & {1} & {0} \\
        {j=3} & {0} & {0} & {0} & {0} & {0} & {0} & {0} & {0} \\
        \hline
        \end{array}
        $$

    2. Since $r[3][7]=\mathrm{F}$, the answer is <strong>no</strong>: no subset of the items has total weight $7$, and there is nothing to reconstruct. Indeed, all the weights $w=(2,4,6)$ are even, so every reachable target value is even, while $c=7$ is odd.

    3. The last row $r[3][\cdot]$ is $\mathrm{T}$ exactly for $k\in\{2,4,6\}$: these are the reachable target values. The other values in $\{1,2,\dots,7\}$ are not the total weight of any subset.

<a id="esercizio-20-4"></a>

!!! esercizio "Exercise 20.4: Exercise 4: Subset Sum Problem"

    Consider the following SSP instance, with target value $c=8$ and $4$ items with weights:

    $$
    \begin{array}{l|rrrr}
    \hline  & {j=1} & {j=2} & {j=3} & {j=4} \\
    \hline {w_j} & 1 & 4 & 5 & 7 \\
    \hline
    \end{array}
    $$

    **Questions**

    1. Show the execution of the bottom-up DP algorithm by reporting, for each step, the cells $r[j][k]$ and $s[j][k]$; then write the matrices $r$ and $s$.

    2. Give the answer to the SSP instance and, if it is yes, reconstruct from the matrix $s$ a subset of total weight $c$, as a binary vector $(x_1,x_2,x_3,x_4)$.

    3. Using the last row of the matrix $r$, list all the target values $k\in\{1,2,\dots,8\}$ that are reachable with the 4 items.

??? soluzione "Solution"

    The recurrence and the conventions are those of the box at the beginning of these exercises.

    1. Step-by-step execution of the bottom-up DP algorithm. The row $j=0$ is $r[0][0]=\mathrm{T}$ and $r[0][k]=\mathrm{F}$ for $k\ge 1$, with $s[0][k]=0$; $\mathrm{T}$ stands for <em>true</em> and $\mathrm{F}$ for <em>false</em>. Item $j$ is used ($s[j][k]=1$) only if $r[j-1][k]$ is $\mathrm{F}$.

        <div class="tabella" markdown="0"><table>
        <tr>
        <th><span class="arithmatex">\(j\)</span></th>
        <th><span class="arithmatex">\(k\)</span></th>
        <th><span class="arithmatex">\(r[j][k]\)</span></th>
        <th><span class="arithmatex">\(s[j][k]\)</span></th>
        <th>Action</th>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(\mathrm{T}\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(w_1=1>0\)</span>: <span class="arithmatex">\(r[0][0]=\mathrm{T}\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(\mathrm{T}\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(r[0][1]\lor r[0][0]=\mathrm{F}\lor \mathrm{T}=\mathrm{T}\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(\mathrm{F}\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(r[0][2]\lor r[0][1]=\mathrm{F}\lor \mathrm{F}=\mathrm{F}\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(\mathrm{F}\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(r[0][3]\lor r[0][2]=\mathrm{F}\lor \mathrm{F}=\mathrm{F}\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(\mathrm{F}\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(r[0][4]\lor r[0][3]=\mathrm{F}\lor \mathrm{F}=\mathrm{F}\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(\mathrm{F}\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(r[0][5]\lor r[0][4]=\mathrm{F}\lor \mathrm{F}=\mathrm{F}\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(\mathrm{F}\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(r[0][6]\lor r[0][5]=\mathrm{F}\lor \mathrm{F}=\mathrm{F}\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(7\)</span></td>
        <td><span class="arithmatex">\(\mathrm{F}\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(r[0][7]\lor r[0][6]=\mathrm{F}\lor \mathrm{F}=\mathrm{F}\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(8\)</span></td>
        <td><span class="arithmatex">\(\mathrm{F}\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(r[0][8]\lor r[0][7]=\mathrm{F}\lor \mathrm{F}=\mathrm{F}\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(\mathrm{T}\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(w_2=4>0\)</span>: <span class="arithmatex">\(r[1][0]=\mathrm{T}\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(\mathrm{T}\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(w_2=4>1\)</span>: <span class="arithmatex">\(r[1][1]=\mathrm{T}\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(\mathrm{F}\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(w_2=4>2\)</span>: <span class="arithmatex">\(r[1][2]=\mathrm{F}\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(\mathrm{F}\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(w_2=4>3\)</span>: <span class="arithmatex">\(r[1][3]=\mathrm{F}\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(\mathrm{T}\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(r[1][4]\lor r[1][0]=\mathrm{F}\lor \mathrm{T}=\mathrm{T}\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(\mathrm{T}\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(r[1][5]\lor r[1][1]=\mathrm{F}\lor \mathrm{T}=\mathrm{T}\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(\mathrm{F}\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(r[1][6]\lor r[1][2]=\mathrm{F}\lor \mathrm{F}=\mathrm{F}\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(7\)</span></td>
        <td><span class="arithmatex">\(\mathrm{F}\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(r[1][7]\lor r[1][3]=\mathrm{F}\lor \mathrm{F}=\mathrm{F}\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(8\)</span></td>
        <td><span class="arithmatex">\(\mathrm{F}\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(r[1][8]\lor r[1][4]=\mathrm{F}\lor \mathrm{F}=\mathrm{F}\)</span></td>
        </tr>
        </table></div>

        <div class="tabella" markdown="0"><table>
        <tr>
        <th><span class="arithmatex">\(j\)</span></th>
        <th><span class="arithmatex">\(k\)</span></th>
        <th><span class="arithmatex">\(r[j][k]\)</span></th>
        <th><span class="arithmatex">\(s[j][k]\)</span></th>
        <th>Action</th>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(\mathrm{T}\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(w_3=5>0\)</span>: <span class="arithmatex">\(r[2][0]=\mathrm{T}\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(\mathrm{T}\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(w_3=5>1\)</span>: <span class="arithmatex">\(r[2][1]=\mathrm{T}\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(\mathrm{F}\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(w_3=5>2\)</span>: <span class="arithmatex">\(r[2][2]=\mathrm{F}\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(\mathrm{F}\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(w_3=5>3\)</span>: <span class="arithmatex">\(r[2][3]=\mathrm{F}\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(\mathrm{T}\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(w_3=5>4\)</span>: <span class="arithmatex">\(r[2][4]=\mathrm{T}\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(\mathrm{T}\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(r[2][5]\lor r[2][0]=\mathrm{T}\lor \mathrm{T}=\mathrm{T}\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(\mathrm{T}\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(r[2][6]\lor r[2][1]=\mathrm{F}\lor \mathrm{T}=\mathrm{T}\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(7\)</span></td>
        <td><span class="arithmatex">\(\mathrm{F}\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(r[2][7]\lor r[2][2]=\mathrm{F}\lor \mathrm{F}=\mathrm{F}\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(8\)</span></td>
        <td><span class="arithmatex">\(\mathrm{F}\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(r[2][8]\lor r[2][3]=\mathrm{F}\lor \mathrm{F}=\mathrm{F}\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(\mathrm{T}\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(w_4=7>0\)</span>: <span class="arithmatex">\(r[3][0]=\mathrm{T}\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(\mathrm{T}\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(w_4=7>1\)</span>: <span class="arithmatex">\(r[3][1]=\mathrm{T}\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(\mathrm{F}\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(w_4=7>2\)</span>: <span class="arithmatex">\(r[3][2]=\mathrm{F}\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(\mathrm{F}\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(w_4=7>3\)</span>: <span class="arithmatex">\(r[3][3]=\mathrm{F}\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(\mathrm{T}\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(w_4=7>4\)</span>: <span class="arithmatex">\(r[3][4]=\mathrm{T}\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(\mathrm{T}\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(w_4=7>5\)</span>: <span class="arithmatex">\(r[3][5]=\mathrm{T}\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(\mathrm{T}\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(w_4=7>6\)</span>: <span class="arithmatex">\(r[3][6]=\mathrm{T}\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(7\)</span></td>
        <td><span class="arithmatex">\(\mathrm{T}\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(r[3][7]\lor r[3][0]=\mathrm{F}\lor \mathrm{T}=\mathrm{T}\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(8\)</span></td>
        <td><span class="arithmatex">\(\mathrm{T}\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(r[3][8]\lor r[3][1]=\mathrm{F}\lor \mathrm{T}=\mathrm{T}\)</span></td>
        </tr>
        </table></div>

        This is the matrix $r$ after the execution of the DP algorithm:

        $$
        \begin{array}{l|rrrrrrrrr}
        \hline {r[j][k]} & {k=0} & {k=1} & {k=2} & {k=3} & {k=4} & {k=5} & {k=6} & {k=7} & {k=8} \\
        \hline {j=0} & {\mathrm{T}} & {\mathrm{F}} & {\mathrm{F}} & {\mathrm{F}} & {\mathrm{F}} & {\mathrm{F}} & {\mathrm{F}} & {\mathrm{F}} & {\mathrm{F}} \\
        {j=1} & {\mathrm{T}} & {\mathrm{T}} & {\mathrm{F}} & {\mathrm{F}} & {\mathrm{F}} & {\mathrm{F}} & {\mathrm{F}} & {\mathrm{F}} & {\mathrm{F}} \\
        {j=2} & {\mathrm{T}} & {\mathrm{T}} & {\mathrm{F}} & {\mathrm{F}} & {\mathrm{T}} & {\mathrm{T}} & {\mathrm{F}} & {\mathrm{F}} & {\mathrm{F}} \\
        {j=3} & {\mathrm{T}} & {\mathrm{T}} & {\mathrm{F}} & {\mathrm{F}} & {\mathrm{T}} & {\mathrm{T}} & {\mathrm{T}} & {\mathrm{F}} & {\mathrm{F}} \\
        {j=4} & {\mathrm{T}} & {\mathrm{T}} & {\mathrm{F}} & {\mathrm{F}} & {\mathrm{T}} & {\mathrm{T}} & {\mathrm{T}} & {\mathrm{T}} & {\mathrm{T}} \\
        \hline
        \end{array}
        $$

        This is the matrix $s$ after the execution of the DP algorithm:

        $$
        \begin{array}{l|rrrrrrrrr}
        \hline {s[j][k]} & {k=0} & {k=1} & {k=2} & {k=3} & {k=4} & {k=5} & {k=6} & {k=7} & {k=8} \\
        \hline {j=0} & {0} & {0} & {0} & {0} & {0} & {0} & {0} & {0} & {0} \\
        {j=1} & {0} & {1} & {0} & {0} & {0} & {0} & {0} & {0} & {0} \\
        {j=2} & {0} & {0} & {0} & {0} & {1} & {1} & {0} & {0} & {0} \\
        {j=3} & {0} & {0} & {0} & {0} & {0} & {0} & {1} & {0} & {0} \\
        {j=4} & {0} & {0} & {0} & {0} & {0} & {0} & {0} & {1} & {1} \\
        \hline
        \end{array}
        $$

    2. Since $r[4][8]=\mathrm{T}$, the answer is <strong>yes</strong>. Starting from $j=4$ and $k=8$:

        <div class="tabella" markdown="0"><table>
        <tr>
        <th>Iteration</th>
        <th><span class="arithmatex">\(j\)</span></th>
        <th><span class="arithmatex">\(k\)</span></th>
        <th><span class="arithmatex">\(s[j][k]\)</span></th>
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
        <td><span class="arithmatex">\(k=8\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(8\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td class="cella-blu">1</td>
        <td><span class="arithmatex">\(x[4]\leftarrow 1\)</span>, <span class="arithmatex">\(k\leftarrow 8-7=1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td>0</td>
        <td>0</td>
        <td class="cella-blu">0</td>
        <td>1</td>
        <td><span class="arithmatex">\(x[3]\leftarrow 0\)</span>, <span class="arithmatex">\(k=1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td>0</td>
        <td class="cella-blu">0</td>
        <td>0</td>
        <td>1</td>
        <td><span class="arithmatex">\(x[2]\leftarrow 0\)</span>, <span class="arithmatex">\(k=1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td class="cella-blu">1</td>
        <td>0</td>
        <td>0</td>
        <td>1</td>
        <td><span class="arithmatex">\(x[1]\leftarrow 1\)</span>, <span class="arithmatex">\(k\leftarrow 1-1=0\)</span></td>
        </tr>
        </table></div>

        The vector $(1,0,0,1)$ selects the subset $\{1,4\}$, of total weight $1+7=8=c$. It is the only subset with total weight $8$.

    3. The last row $r[4][\cdot]$ is $\mathrm{T}$ exactly for $k\in\{1,4,5,6,7,8\}$: these are the reachable target values. The other values in $\{1,2,\dots,8\}$ are not the total weight of any subset.

<a id="esercizio-20-5"></a>

!!! esercizio "Exercise 20.5: Exercise 5: Subset Sum Problem"

    Consider the following SSP instance, with target value $c=8$ and $4$ items with weights:

    $$
    \begin{array}{l|rrrr}
    \hline  & {j=1} & {j=2} & {j=3} & {j=4} \\
    \hline {w_j} & 2 & 5 & 6 & 7 \\
    \hline
    \end{array}
    $$

    **Questions**

    1. Show the execution of the bottom-up DP algorithm by reporting, for each step, the cells $r[j][k]$ and $s[j][k]$; then write the matrices $r$ and $s$.

    2. Give the answer to the SSP instance and, if it is yes, reconstruct from the matrix $s$ a subset of total weight $c$, as a binary vector $(x_1,x_2,x_3,x_4)$.

    3. Using the last row of the matrix $r$, list all the target values $k\in\{1,2,\dots,8\}$ that are reachable with the 4 items.

??? soluzione "Solution"

    The recurrence and the conventions are those of the box at the beginning of these exercises.

    1. Step-by-step execution of the bottom-up DP algorithm. The row $j=0$ is $r[0][0]=\mathrm{T}$ and $r[0][k]=\mathrm{F}$ for $k\ge 1$, with $s[0][k]=0$; $\mathrm{T}$ stands for <em>true</em> and $\mathrm{F}$ for <em>false</em>. Item $j$ is used ($s[j][k]=1$) only if $r[j-1][k]$ is $\mathrm{F}$.

        <div class="tabella" markdown="0"><table>
        <tr>
        <th><span class="arithmatex">\(j\)</span></th>
        <th><span class="arithmatex">\(k\)</span></th>
        <th><span class="arithmatex">\(r[j][k]\)</span></th>
        <th><span class="arithmatex">\(s[j][k]\)</span></th>
        <th>Action</th>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(\mathrm{T}\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(w_1=2>0\)</span>: <span class="arithmatex">\(r[0][0]=\mathrm{T}\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(\mathrm{F}\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(w_1=2>1\)</span>: <span class="arithmatex">\(r[0][1]=\mathrm{F}\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(\mathrm{T}\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(r[0][2]\lor r[0][0]=\mathrm{F}\lor \mathrm{T}=\mathrm{T}\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(\mathrm{F}\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(r[0][3]\lor r[0][1]=\mathrm{F}\lor \mathrm{F}=\mathrm{F}\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(\mathrm{F}\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(r[0][4]\lor r[0][2]=\mathrm{F}\lor \mathrm{F}=\mathrm{F}\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(\mathrm{F}\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(r[0][5]\lor r[0][3]=\mathrm{F}\lor \mathrm{F}=\mathrm{F}\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(\mathrm{F}\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(r[0][6]\lor r[0][4]=\mathrm{F}\lor \mathrm{F}=\mathrm{F}\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(7\)</span></td>
        <td><span class="arithmatex">\(\mathrm{F}\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(r[0][7]\lor r[0][5]=\mathrm{F}\lor \mathrm{F}=\mathrm{F}\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(8\)</span></td>
        <td><span class="arithmatex">\(\mathrm{F}\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(r[0][8]\lor r[0][6]=\mathrm{F}\lor \mathrm{F}=\mathrm{F}\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(\mathrm{T}\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(w_2=5>0\)</span>: <span class="arithmatex">\(r[1][0]=\mathrm{T}\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(\mathrm{F}\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(w_2=5>1\)</span>: <span class="arithmatex">\(r[1][1]=\mathrm{F}\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(\mathrm{T}\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(w_2=5>2\)</span>: <span class="arithmatex">\(r[1][2]=\mathrm{T}\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(\mathrm{F}\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(w_2=5>3\)</span>: <span class="arithmatex">\(r[1][3]=\mathrm{F}\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(\mathrm{F}\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(w_2=5>4\)</span>: <span class="arithmatex">\(r[1][4]=\mathrm{F}\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(\mathrm{T}\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(r[1][5]\lor r[1][0]=\mathrm{F}\lor \mathrm{T}=\mathrm{T}\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(\mathrm{F}\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(r[1][6]\lor r[1][1]=\mathrm{F}\lor \mathrm{F}=\mathrm{F}\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(7\)</span></td>
        <td><span class="arithmatex">\(\mathrm{T}\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(r[1][7]\lor r[1][2]=\mathrm{F}\lor \mathrm{T}=\mathrm{T}\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(8\)</span></td>
        <td><span class="arithmatex">\(\mathrm{F}\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(r[1][8]\lor r[1][3]=\mathrm{F}\lor \mathrm{F}=\mathrm{F}\)</span></td>
        </tr>
        </table></div>

        <div class="tabella" markdown="0"><table>
        <tr>
        <th><span class="arithmatex">\(j\)</span></th>
        <th><span class="arithmatex">\(k\)</span></th>
        <th><span class="arithmatex">\(r[j][k]\)</span></th>
        <th><span class="arithmatex">\(s[j][k]\)</span></th>
        <th>Action</th>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(\mathrm{T}\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(w_3=6>0\)</span>: <span class="arithmatex">\(r[2][0]=\mathrm{T}\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(\mathrm{F}\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(w_3=6>1\)</span>: <span class="arithmatex">\(r[2][1]=\mathrm{F}\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(\mathrm{T}\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(w_3=6>2\)</span>: <span class="arithmatex">\(r[2][2]=\mathrm{T}\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(\mathrm{F}\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(w_3=6>3\)</span>: <span class="arithmatex">\(r[2][3]=\mathrm{F}\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(\mathrm{F}\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(w_3=6>4\)</span>: <span class="arithmatex">\(r[2][4]=\mathrm{F}\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(\mathrm{T}\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(w_3=6>5\)</span>: <span class="arithmatex">\(r[2][5]=\mathrm{T}\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(\mathrm{T}\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(r[2][6]\lor r[2][0]=\mathrm{F}\lor \mathrm{T}=\mathrm{T}\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(7\)</span></td>
        <td><span class="arithmatex">\(\mathrm{T}\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(r[2][7]\lor r[2][1]=\mathrm{T}\lor \mathrm{F}=\mathrm{T}\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(8\)</span></td>
        <td><span class="arithmatex">\(\mathrm{T}\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(r[2][8]\lor r[2][2]=\mathrm{F}\lor \mathrm{T}=\mathrm{T}\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(\mathrm{T}\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(w_4=7>0\)</span>: <span class="arithmatex">\(r[3][0]=\mathrm{T}\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(\mathrm{F}\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(w_4=7>1\)</span>: <span class="arithmatex">\(r[3][1]=\mathrm{F}\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(\mathrm{T}\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(w_4=7>2\)</span>: <span class="arithmatex">\(r[3][2]=\mathrm{T}\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(\mathrm{F}\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(w_4=7>3\)</span>: <span class="arithmatex">\(r[3][3]=\mathrm{F}\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(\mathrm{F}\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(w_4=7>4\)</span>: <span class="arithmatex">\(r[3][4]=\mathrm{F}\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(\mathrm{T}\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(w_4=7>5\)</span>: <span class="arithmatex">\(r[3][5]=\mathrm{T}\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(\mathrm{T}\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(w_4=7>6\)</span>: <span class="arithmatex">\(r[3][6]=\mathrm{T}\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(7\)</span></td>
        <td><span class="arithmatex">\(\mathrm{T}\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(r[3][7]\lor r[3][0]=\mathrm{T}\lor \mathrm{T}=\mathrm{T}\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(8\)</span></td>
        <td><span class="arithmatex">\(\mathrm{T}\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(r[3][8]\lor r[3][1]=\mathrm{T}\lor \mathrm{F}=\mathrm{T}\)</span></td>
        </tr>
        </table></div>

        This is the matrix $r$ after the execution of the DP algorithm:

        $$
        \begin{array}{l|rrrrrrrrr}
        \hline {r[j][k]} & {k=0} & {k=1} & {k=2} & {k=3} & {k=4} & {k=5} & {k=6} & {k=7} & {k=8} \\
        \hline {j=0} & {\mathrm{T}} & {\mathrm{F}} & {\mathrm{F}} & {\mathrm{F}} & {\mathrm{F}} & {\mathrm{F}} & {\mathrm{F}} & {\mathrm{F}} & {\mathrm{F}} \\
        {j=1} & {\mathrm{T}} & {\mathrm{F}} & {\mathrm{T}} & {\mathrm{F}} & {\mathrm{F}} & {\mathrm{F}} & {\mathrm{F}} & {\mathrm{F}} & {\mathrm{F}} \\
        {j=2} & {\mathrm{T}} & {\mathrm{F}} & {\mathrm{T}} & {\mathrm{F}} & {\mathrm{F}} & {\mathrm{T}} & {\mathrm{F}} & {\mathrm{T}} & {\mathrm{F}} \\
        {j=3} & {\mathrm{T}} & {\mathrm{F}} & {\mathrm{T}} & {\mathrm{F}} & {\mathrm{F}} & {\mathrm{T}} & {\mathrm{T}} & {\mathrm{T}} & {\mathrm{T}} \\
        {j=4} & {\mathrm{T}} & {\mathrm{F}} & {\mathrm{T}} & {\mathrm{F}} & {\mathrm{F}} & {\mathrm{T}} & {\mathrm{T}} & {\mathrm{T}} & {\mathrm{T}} \\
        \hline
        \end{array}
        $$

        This is the matrix $s$ after the execution of the DP algorithm:

        $$
        \begin{array}{l|rrrrrrrrr}
        \hline {s[j][k]} & {k=0} & {k=1} & {k=2} & {k=3} & {k=4} & {k=5} & {k=6} & {k=7} & {k=8} \\
        \hline {j=0} & {0} & {0} & {0} & {0} & {0} & {0} & {0} & {0} & {0} \\
        {j=1} & {0} & {0} & {1} & {0} & {0} & {0} & {0} & {0} & {0} \\
        {j=2} & {0} & {0} & {0} & {0} & {0} & {1} & {0} & {1} & {0} \\
        {j=3} & {0} & {0} & {0} & {0} & {0} & {0} & {1} & {0} & {1} \\
        {j=4} & {0} & {0} & {0} & {0} & {0} & {0} & {0} & {0} & {0} \\
        \hline
        \end{array}
        $$

    2. Since $r[4][8]=\mathrm{T}$, the answer is <strong>yes</strong>. Starting from $j=4$ and $k=8$:

        <div class="tabella" markdown="0"><table>
        <tr>
        <th>Iteration</th>
        <th><span class="arithmatex">\(j\)</span></th>
        <th><span class="arithmatex">\(k\)</span></th>
        <th><span class="arithmatex">\(s[j][k]\)</span></th>
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
        <td><span class="arithmatex">\(k=8\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(8\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td class="cella-blu">0</td>
        <td><span class="arithmatex">\(x[4]\leftarrow 0\)</span>, <span class="arithmatex">\(k=8\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(8\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td>0</td>
        <td>0</td>
        <td class="cella-blu">1</td>
        <td>0</td>
        <td><span class="arithmatex">\(x[3]\leftarrow 1\)</span>, <span class="arithmatex">\(k\leftarrow 8-6=2\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td>0</td>
        <td class="cella-blu">0</td>
        <td>1</td>
        <td>0</td>
        <td><span class="arithmatex">\(x[2]\leftarrow 0\)</span>, <span class="arithmatex">\(k=2\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td class="cella-blu">1</td>
        <td>0</td>
        <td>1</td>
        <td>0</td>
        <td><span class="arithmatex">\(x[1]\leftarrow 1\)</span>, <span class="arithmatex">\(k\leftarrow 2-2=0\)</span></td>
        </tr>
        </table></div>

        The vector $(1,0,1,0)$ selects the subset $\{1,3\}$, of total weight $2+6=8=c$. It is the only subset with total weight $8$.

    3. The last row $r[4][\cdot]$ is $\mathrm{T}$ exactly for $k\in\{2,5,6,7,8\}$: these are the reachable target values. The other values in $\{1,2,\dots,8\}$ are not the total weight of any subset.
