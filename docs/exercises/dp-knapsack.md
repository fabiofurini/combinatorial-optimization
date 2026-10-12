---
title: "Exercises · DP for the 0/1 knapsack problem"
---

# Exercises · DP for the 0/1 knapsack problem

<div class="info-capitolo" markdown>

**Exercises · Chapter 17** · each solution opens with a click · [:material-book-open-variant: Chapter 17: 0/1 knapsack (KP)](../dynamic-programming/dp-knapsack/index.md) · [:material-file-pdf-box: Exercises, volume 3 (PDF)](../pdf/exercises-3-dynamic-programming.pdf)

</div>

<a id="esercizio-17-1"></a>

!!! esercizio "Exercise 17.1: Exercise 1: 0/1 Knapsack Problem"

    Consider the following KP instance, where the knapsack has capacity $c=6$, and the profits and weights associated with the items are:

    $$
    \begin{array}{l|rrrr}
    \hline  & {i=1} & {i=2} & {i=3} & {i=4} \\
    \hline {p_i} & {6} & {7} & {8} & {9} \\
    {w_i} & {2} & {3} & {4} & {5} \\
    \hline
    \end{array}
    $$

    **Questions**

    1. Show the execution of the bottom-up DP algorithm by reporting, for each iteration, the values of the matrices $v$ and $s$.

    2. Using the matrix $s$, reconstruct an optimal solution in integer notation $(x_1,x_2,\dots,x_n)$, and report the optimal value.

??? soluzione "Solution"

    1. Step-by-step execution of the bottom-up DP algorithm

        For each step of the DP algorithm, the table shows the values of $i$ and $k$, the cells ${v}[i][k]$ and ${s}[i][k]$, and the operation performed. The cells are computed for increasing values of $i$ and, for each fixed value of $i$, for increasing values of $k$.

        <div class="tabella" markdown="0"><table>
        <tr>
        <th><span class="arithmatex">\(i\)</span></th>
        <th><span class="arithmatex">\(k\)</span></th>
        <th><span class="arithmatex">\({v}[i][k]\)</span></th>
        <th><span class="arithmatex">\({s}[i][k]\)</span></th>
        <th>Action</th>
        </tr>
        <tr>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\({v}[0][0]\leftarrow 0\)</span>, <span class="arithmatex">\({s}[0][0]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\({v}[0][1]\leftarrow 0\)</span>, <span class="arithmatex">\({s}[0][1]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\({v}[0][2]\leftarrow 0\)</span>, <span class="arithmatex">\({s}[0][2]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\({v}[0][3]\leftarrow 0\)</span>, <span class="arithmatex">\({s}[0][3]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\({v}[0][4]\leftarrow 0\)</span>, <span class="arithmatex">\({s}[0][4]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\({v}[0][5]\leftarrow 0\)</span>, <span class="arithmatex">\({s}[0][5]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\({v}[0][6]\leftarrow 0\)</span>, <span class="arithmatex">\({s}[0][6]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_1\)</span>: <span class="arithmatex">\({v}[1][0]\leftarrow {v}[0][0]=0\)</span>, <span class="arithmatex">\({s}[1][0]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_1\)</span>: <span class="arithmatex">\({v}[1][1]\leftarrow {v}[0][1]=0\)</span>, <span class="arithmatex">\({s}[1][1]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(p[1]+{v}[0][0]=6+0>{v}[0][2]=0\)</span>: <span class="arithmatex">\({v}[1][2]\leftarrow 6\)</span>, <span class="arithmatex">\({s}[1][2]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(p[1]+{v}[0][1]=6+0>{v}[0][3]=0\)</span>: <span class="arithmatex">\({v}[1][3]\leftarrow 6\)</span>, <span class="arithmatex">\({s}[1][3]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(p[1]+{v}[0][2]=6+0>{v}[0][4]=0\)</span>: <span class="arithmatex">\({v}[1][4]\leftarrow 6\)</span>, <span class="arithmatex">\({s}[1][4]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(p[1]+{v}[0][3]=6+0>{v}[0][5]=0\)</span>: <span class="arithmatex">\({v}[1][5]\leftarrow 6\)</span>, <span class="arithmatex">\({s}[1][5]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(p[1]+{v}[0][4]=6+0>{v}[0][6]=0\)</span>: <span class="arithmatex">\({v}[1][6]\leftarrow 6\)</span>, <span class="arithmatex">\({s}[1][6]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_2\)</span>: <span class="arithmatex">\({v}[2][0]\leftarrow {v}[1][0]=0\)</span>, <span class="arithmatex">\({s}[2][0]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_2\)</span>: <span class="arithmatex">\({v}[2][1]\leftarrow {v}[1][1]=0\)</span>, <span class="arithmatex">\({s}[2][1]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_2\)</span>: <span class="arithmatex">\({v}[2][2]\leftarrow {v}[1][2]=6\)</span>, <span class="arithmatex">\({s}[2][2]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(7\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(p[2]+{v}[1][0]=7+0>{v}[1][3]=6\)</span>: <span class="arithmatex">\({v}[2][3]\leftarrow 7\)</span>, <span class="arithmatex">\({s}[2][3]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(7\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(p[2]+{v}[1][1]=7+0>{v}[1][4]=6\)</span>: <span class="arithmatex">\({v}[2][4]\leftarrow 7\)</span>, <span class="arithmatex">\({s}[2][4]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(13\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(p[2]+{v}[1][2]=7+6>{v}[1][5]=6\)</span>: <span class="arithmatex">\({v}[2][5]\leftarrow 13\)</span>, <span class="arithmatex">\({s}[2][5]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(13\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(p[2]+{v}[1][3]=7+6>{v}[1][6]=6\)</span>: <span class="arithmatex">\({v}[2][6]\leftarrow 13\)</span>, <span class="arithmatex">\({s}[2][6]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_3\)</span>: <span class="arithmatex">\({v}[3][0]\leftarrow {v}[2][0]=0\)</span>, <span class="arithmatex">\({s}[3][0]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_3\)</span>: <span class="arithmatex">\({v}[3][1]\leftarrow {v}[2][1]=0\)</span>, <span class="arithmatex">\({s}[3][1]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_3\)</span>: <span class="arithmatex">\({v}[3][2]\leftarrow {v}[2][2]=6\)</span>, <span class="arithmatex">\({s}[3][2]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(7\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_3\)</span>: <span class="arithmatex">\({v}[3][3]\leftarrow {v}[2][3]=7\)</span>, <span class="arithmatex">\({s}[3][3]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(8\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(p[3]+{v}[2][0]=8+0>{v}[2][4]=7\)</span>: <span class="arithmatex">\({v}[3][4]\leftarrow 8\)</span>, <span class="arithmatex">\({s}[3][4]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(13\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(p[3]+{v}[2][1]=8+0\le {v}[2][5]=13\)</span>: <span class="arithmatex">\({v}[3][5]\leftarrow 13\)</span>, <span class="arithmatex">\({s}[3][5]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(14\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(p[3]+{v}[2][2]=8+6>{v}[2][6]=13\)</span>: <span class="arithmatex">\({v}[3][6]\leftarrow 14\)</span>, <span class="arithmatex">\({s}[3][6]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_4\)</span>: <span class="arithmatex">\({v}[4][0]\leftarrow {v}[3][0]=0\)</span>, <span class="arithmatex">\({s}[4][0]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_4\)</span>: <span class="arithmatex">\({v}[4][1]\leftarrow {v}[3][1]=0\)</span>, <span class="arithmatex">\({s}[4][1]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_4\)</span>: <span class="arithmatex">\({v}[4][2]\leftarrow {v}[3][2]=6\)</span>, <span class="arithmatex">\({s}[4][2]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(7\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_4\)</span>: <span class="arithmatex">\({v}[4][3]\leftarrow {v}[3][3]=7\)</span>, <span class="arithmatex">\({s}[4][3]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(8\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_4\)</span>: <span class="arithmatex">\({v}[4][4]\leftarrow {v}[3][4]=8\)</span>, <span class="arithmatex">\({s}[4][4]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(13\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(p[4]+{v}[3][0]=9+0\le {v}[3][5]=13\)</span>: <span class="arithmatex">\({v}[4][5]\leftarrow 13\)</span>, <span class="arithmatex">\({s}[4][5]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(14\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(p[4]+{v}[3][1]=9+0\le {v}[3][6]=14\)</span>: <span class="arithmatex">\({v}[4][6]\leftarrow 14\)</span>, <span class="arithmatex">\({s}[4][6]\leftarrow 0\)</span></td>
        </tr>
        </table></div>

        This is the matrix ${v}$ after the execution of the DP algorithm:

        $$
        \begin{array}{l|rrrrrrr}
        \hline {{v}[i][k]} & {k=0} & {k=1} & {k=2} & {k=3} & {k=4} & {k=5} & {k=6} \\
        \hline {i=0} & 0 & 0 & 0 & 0 & 0 & 0 & 0 \\
        {i=1} & 0 & 0 & 6 & 6 & 6 & 6 & 6 \\
        {i=2} & 0 & 0 & 6 & 7 & 7 & 13 & 13 \\
        {i=3} & 0 & 0 & 6 & 7 & 8 & 13 & 14 \\
        {i=4} & 0 & 0 & 6 & 7 & 8 & 13 & 14 \\
        \hline
        \end{array}
        $$

        This is the matrix ${s}$ after the execution of the DP algorithm:

        $$
        \begin{array}{l|rrrrrrr}
        \hline {{s}[i][k]} & {k=0} & {k=1} & {k=2} & {k=3} & {k=4} & {k=5} & {k=6} \\
        \hline {i=0} & 0 & 0 & 0 & 0 & 0 & 0 & 0 \\
        {i=1} & 0 & 0 & 1 & 1 & 1 & 1 & 1 \\
        {i=2} & 0 & 0 & 0 & 1 & 1 & 1 & 1 \\
        {i=3} & 0 & 0 & 0 & 0 & 1 & 0 & 1 \\
        {i=4} & 0 & 0 & 0 & 0 & 0 & 0 & 0 \\
        \hline
        \end{array}
        $$

    2. We have the following matrix ${s}$:

        $$
        \begin{array}{l|rrrrrrr}
        \hline {{s}[i][k]} & {k=0} & {k=1} & {k=2} & {k=3} & {k=4} & {k=5} & {k=6} \\
        \hline {i=0} & 0 & 0 & 0 & 0 & 0 & 0 & 0 \\
        {i=1} & 0 & 0 & 1 & 1 & 1 & 1 & 1 \\
        {i=2} & 0 & 0 & 0 & 1 & 1 & 1 & 1 \\
        {i=3} & 0 & 0 & 0 & 0 & 1 & 0 & 1 \\
        {i=4} & 0 & 0 & 0 & 0 & 0 & 0 & 0 \\
        \hline
        \end{array}
        $$

        We can reconstruct an optimal solution by starting from $i=4$ and $k=6$ as follows:

        <div class="tabella" markdown="0"><table>
        <tr>
        <th>Iteration</th>
        <th><span class="arithmatex">\(i\)</span></th>
        <th><span class="arithmatex">\(k\)</span></th>
        <th><span class="arithmatex">\({s}[i][k]\)</span></th>
        <th><span class="arithmatex">\(x[1]\)</span></th>
        <th><span class="arithmatex">\(x[2]\)</span></th>
        <th><span class="arithmatex">\(x[3]\)</span></th>
        <th><span class="arithmatex">\(x[4]\)</span></th>
        <th>Action</th>
        </tr>
        <tr>
        <td>\-</td>
        <td>\-</td>
        <td>\-</td>
        <td>\-</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(k=6\)</span></td>
        </tr>
        <tr>
        <td>1</td>
        <td>4</td>
        <td>6</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>no update</td>
        </tr>
        <tr>
        <td>2</td>
        <td>3</td>
        <td>6</td>
        <td>1</td>
        <td>0</td>
        <td>0</td>
        <td class="cella-blu">1</td>
        <td>0</td>
        <td><span class="arithmatex">\(x[3]\leftarrow 1\)</span>, <span class="arithmatex">\(k\leftarrow 6-4=2\)</span></td>
        </tr>
        <tr>
        <td>3</td>
        <td>2</td>
        <td>2</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td class="cella-blu">1</td>
        <td>0</td>
        <td>no update</td>
        </tr>
        <tr>
        <td>4</td>
        <td>1</td>
        <td>2</td>
        <td>1</td>
        <td class="cella-blu">1</td>
        <td>0</td>
        <td class="cella-blu">1</td>
        <td>0</td>
        <td><span class="arithmatex">\(x[1]\leftarrow 1\)</span>, <span class="arithmatex">\(k\leftarrow 2-2=0\)</span></td>
        </tr>
        </table></div>

        Thus, the vector

        $$
        (1,0,1,0)
        $$

        is an optimal solution. The optimal value is

        $$
        {v}[4][6]=14.
        $$

<a id="esercizio-17-2"></a>

!!! esercizio "Exercise 17.2: Exercise 2: 0/1 Knapsack Problem"

    Consider the following KP instance, where the knapsack has capacity $c=7$, and the profits and weights associated with the items are:

    $$
    \begin{array}{l|rrrr}
    \hline  & {i=1} & {i=2} & {i=3} & {i=4} \\
    \hline {p_i} & {4} & {5} & {10} & {11} \\
    {w_i} & {2} & {3} & {5} & {6} \\
    \hline
    \end{array}
    $$

    **Questions**

    1. Show the execution of the bottom-up DP algorithm by reporting, for each iteration, the values of the matrices $v$ and $s$.

    2. Using the matrix $s$, reconstruct an optimal solution in integer notation $(x_1,x_2,\dots,x_n)$, and report the optimal value.

??? soluzione "Solution"

    1. Step-by-step execution of the bottom-up DP algorithm

        For each step of the DP algorithm, the table shows the values of $i$ and $k$, the cells ${v}[i][k]$ and ${s}[i][k]$, and the operation performed. The cells are computed for increasing values of $i$ and, for each fixed value of $i$, for increasing values of $k$.

        <div class="tabella" markdown="0"><table>
        <tr>
        <th><span class="arithmatex">\(i\)</span></th>
        <th><span class="arithmatex">\(k\)</span></th>
        <th><span class="arithmatex">\({v}[i][k]\)</span></th>
        <th><span class="arithmatex">\({s}[i][k]\)</span></th>
        <th>Action</th>
        </tr>
        <tr>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\({v}[0][0]\leftarrow 0\)</span>, <span class="arithmatex">\({s}[0][0]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\({v}[0][1]\leftarrow 0\)</span>, <span class="arithmatex">\({s}[0][1]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\({v}[0][2]\leftarrow 0\)</span>, <span class="arithmatex">\({s}[0][2]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\({v}[0][3]\leftarrow 0\)</span>, <span class="arithmatex">\({s}[0][3]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\({v}[0][4]\leftarrow 0\)</span>, <span class="arithmatex">\({s}[0][4]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\({v}[0][5]\leftarrow 0\)</span>, <span class="arithmatex">\({s}[0][5]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\({v}[0][6]\leftarrow 0\)</span>, <span class="arithmatex">\({s}[0][6]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(7\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\({v}[0][7]\leftarrow 0\)</span>, <span class="arithmatex">\({s}[0][7]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_1\)</span>: <span class="arithmatex">\({v}[1][0]\leftarrow {v}[0][0]=0\)</span>, <span class="arithmatex">\({s}[1][0]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_1\)</span>: <span class="arithmatex">\({v}[1][1]\leftarrow {v}[0][1]=0\)</span>, <span class="arithmatex">\({s}[1][1]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(p[1]+{v}[0][0]=4+0>{v}[0][2]=0\)</span>: <span class="arithmatex">\({v}[1][2]\leftarrow 4\)</span>, <span class="arithmatex">\({s}[1][2]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(p[1]+{v}[0][1]=4+0>{v}[0][3]=0\)</span>: <span class="arithmatex">\({v}[1][3]\leftarrow 4\)</span>, <span class="arithmatex">\({s}[1][3]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(p[1]+{v}[0][2]=4+0>{v}[0][4]=0\)</span>: <span class="arithmatex">\({v}[1][4]\leftarrow 4\)</span>, <span class="arithmatex">\({s}[1][4]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(p[1]+{v}[0][3]=4+0>{v}[0][5]=0\)</span>: <span class="arithmatex">\({v}[1][5]\leftarrow 4\)</span>, <span class="arithmatex">\({s}[1][5]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(p[1]+{v}[0][4]=4+0>{v}[0][6]=0\)</span>: <span class="arithmatex">\({v}[1][6]\leftarrow 4\)</span>, <span class="arithmatex">\({s}[1][6]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(7\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(p[1]+{v}[0][5]=4+0>{v}[0][7]=0\)</span>: <span class="arithmatex">\({v}[1][7]\leftarrow 4\)</span>, <span class="arithmatex">\({s}[1][7]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_2\)</span>: <span class="arithmatex">\({v}[2][0]\leftarrow {v}[1][0]=0\)</span>, <span class="arithmatex">\({s}[2][0]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_2\)</span>: <span class="arithmatex">\({v}[2][1]\leftarrow {v}[1][1]=0\)</span>, <span class="arithmatex">\({s}[2][1]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_2\)</span>: <span class="arithmatex">\({v}[2][2]\leftarrow {v}[1][2]=4\)</span>, <span class="arithmatex">\({s}[2][2]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(p[2]+{v}[1][0]=5+0>{v}[1][3]=4\)</span>: <span class="arithmatex">\({v}[2][3]\leftarrow 5\)</span>, <span class="arithmatex">\({s}[2][3]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(p[2]+{v}[1][1]=5+0>{v}[1][4]=4\)</span>: <span class="arithmatex">\({v}[2][4]\leftarrow 5\)</span>, <span class="arithmatex">\({s}[2][4]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(9\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(p[2]+{v}[1][2]=5+4>{v}[1][5]=4\)</span>: <span class="arithmatex">\({v}[2][5]\leftarrow 9\)</span>, <span class="arithmatex">\({s}[2][5]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(9\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(p[2]+{v}[1][3]=5+4>{v}[1][6]=4\)</span>: <span class="arithmatex">\({v}[2][6]\leftarrow 9\)</span>, <span class="arithmatex">\({s}[2][6]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(7\)</span></td>
        <td><span class="arithmatex">\(9\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(p[2]+{v}[1][4]=5+4>{v}[1][7]=4\)</span>: <span class="arithmatex">\({v}[2][7]\leftarrow 9\)</span>, <span class="arithmatex">\({s}[2][7]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_3\)</span>: <span class="arithmatex">\({v}[3][0]\leftarrow {v}[2][0]=0\)</span>, <span class="arithmatex">\({s}[3][0]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_3\)</span>: <span class="arithmatex">\({v}[3][1]\leftarrow {v}[2][1]=0\)</span>, <span class="arithmatex">\({s}[3][1]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_3\)</span>: <span class="arithmatex">\({v}[3][2]\leftarrow {v}[2][2]=4\)</span>, <span class="arithmatex">\({s}[3][2]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_3\)</span>: <span class="arithmatex">\({v}[3][3]\leftarrow {v}[2][3]=5\)</span>, <span class="arithmatex">\({s}[3][3]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_3\)</span>: <span class="arithmatex">\({v}[3][4]\leftarrow {v}[2][4]=5\)</span>, <span class="arithmatex">\({s}[3][4]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(10\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(p[3]+{v}[2][0]=10+0>{v}[2][5]=9\)</span>: <span class="arithmatex">\({v}[3][5]\leftarrow 10\)</span>, <span class="arithmatex">\({s}[3][5]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(10\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(p[3]+{v}[2][1]=10+0>{v}[2][6]=9\)</span>: <span class="arithmatex">\({v}[3][6]\leftarrow 10\)</span>, <span class="arithmatex">\({s}[3][6]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(7\)</span></td>
        <td><span class="arithmatex">\(14\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(p[3]+{v}[2][2]=10+4>{v}[2][7]=9\)</span>: <span class="arithmatex">\({v}[3][7]\leftarrow 14\)</span>, <span class="arithmatex">\({s}[3][7]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_4\)</span>: <span class="arithmatex">\({v}[4][0]\leftarrow {v}[3][0]=0\)</span>, <span class="arithmatex">\({s}[4][0]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_4\)</span>: <span class="arithmatex">\({v}[4][1]\leftarrow {v}[3][1]=0\)</span>, <span class="arithmatex">\({s}[4][1]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_4\)</span>: <span class="arithmatex">\({v}[4][2]\leftarrow {v}[3][2]=4\)</span>, <span class="arithmatex">\({s}[4][2]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_4\)</span>: <span class="arithmatex">\({v}[4][3]\leftarrow {v}[3][3]=5\)</span>, <span class="arithmatex">\({s}[4][3]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_4\)</span>: <span class="arithmatex">\({v}[4][4]\leftarrow {v}[3][4]=5\)</span>, <span class="arithmatex">\({s}[4][4]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(10\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_4\)</span>: <span class="arithmatex">\({v}[4][5]\leftarrow {v}[3][5]=10\)</span>, <span class="arithmatex">\({s}[4][5]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(11\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(p[4]+{v}[3][0]=11+0>{v}[3][6]=10\)</span>: <span class="arithmatex">\({v}[4][6]\leftarrow 11\)</span>, <span class="arithmatex">\({s}[4][6]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(7\)</span></td>
        <td><span class="arithmatex">\(14\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(p[4]+{v}[3][1]=11+0\le {v}[3][7]=14\)</span>: <span class="arithmatex">\({v}[4][7]\leftarrow 14\)</span>, <span class="arithmatex">\({s}[4][7]\leftarrow 0\)</span></td>
        </tr>
        </table></div>

        This is the matrix ${v}$ after the execution of the DP algorithm:

        $$
        \begin{array}{l|rrrrrrrr}
        \hline {{v}[i][k]} & {k=0} & {k=1} & {k=2} & {k=3} & {k=4} & {k=5} & {k=6} & {k=7} \\
        \hline {i=0} & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 \\
        {i=1} & 0 & 0 & 4 & 4 & 4 & 4 & 4 & 4 \\
        {i=2} & 0 & 0 & 4 & 5 & 5 & 9 & 9 & 9 \\
        {i=3} & 0 & 0 & 4 & 5 & 5 & 10 & 10 & 14 \\
        {i=4} & 0 & 0 & 4 & 5 & 5 & 10 & 11 & 14 \\
        \hline
        \end{array}
        $$

        This is the matrix ${s}$ after the execution of the DP algorithm:

        $$
        \begin{array}{l|rrrrrrrr}
        \hline {{s}[i][k]} & {k=0} & {k=1} & {k=2} & {k=3} & {k=4} & {k=5} & {k=6} & {k=7} \\
        \hline {i=0} & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 \\
        {i=1} & 0 & 0 & 1 & 1 & 1 & 1 & 1 & 1 \\
        {i=2} & 0 & 0 & 0 & 1 & 1 & 1 & 1 & 1 \\
        {i=3} & 0 & 0 & 0 & 0 & 0 & 1 & 1 & 1 \\
        {i=4} & 0 & 0 & 0 & 0 & 0 & 0 & 1 & 0 \\
        \hline
        \end{array}
        $$

    2. We have the following matrix ${s}$:

        $$
        \begin{array}{l|rrrrrrrr}
        \hline {{s}[i][k]} & {k=0} & {k=1} & {k=2} & {k=3} & {k=4} & {k=5} & {k=6} & {k=7} \\
        \hline {i=0} & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 \\
        {i=1} & 0 & 0 & 1 & 1 & 1 & 1 & 1 & 1 \\
        {i=2} & 0 & 0 & 0 & 1 & 1 & 1 & 1 & 1 \\
        {i=3} & 0 & 0 & 0 & 0 & 0 & 1 & 1 & 1 \\
        {i=4} & 0 & 0 & 0 & 0 & 0 & 0 & 1 & 0 \\
        \hline
        \end{array}
        $$

        We can reconstruct an optimal solution by starting from $i=4$ and $k=7$ as follows:

        <div class="tabella" markdown="0"><table>
        <tr>
        <th>Iteration</th>
        <th><span class="arithmatex">\(i\)</span></th>
        <th><span class="arithmatex">\(k\)</span></th>
        <th><span class="arithmatex">\({s}[i][k]\)</span></th>
        <th><span class="arithmatex">\(x[1]\)</span></th>
        <th><span class="arithmatex">\(x[2]\)</span></th>
        <th><span class="arithmatex">\(x[3]\)</span></th>
        <th><span class="arithmatex">\(x[4]\)</span></th>
        <th>Action</th>
        </tr>
        <tr>
        <td>\-</td>
        <td>\-</td>
        <td>\-</td>
        <td>\-</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(k=7\)</span></td>
        </tr>
        <tr>
        <td>1</td>
        <td>4</td>
        <td>7</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>no update</td>
        </tr>
        <tr>
        <td>2</td>
        <td>3</td>
        <td>7</td>
        <td>1</td>
        <td>0</td>
        <td>0</td>
        <td class="cella-blu">1</td>
        <td>0</td>
        <td><span class="arithmatex">\(x[3]\leftarrow 1\)</span>, <span class="arithmatex">\(k\leftarrow 7-5=2\)</span></td>
        </tr>
        <tr>
        <td>3</td>
        <td>2</td>
        <td>2</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td class="cella-blu">1</td>
        <td>0</td>
        <td>no update</td>
        </tr>
        <tr>
        <td>4</td>
        <td>1</td>
        <td>2</td>
        <td>1</td>
        <td class="cella-blu">1</td>
        <td>0</td>
        <td class="cella-blu">1</td>
        <td>0</td>
        <td><span class="arithmatex">\(x[1]\leftarrow 1\)</span>, <span class="arithmatex">\(k\leftarrow 2-2=0\)</span></td>
        </tr>
        </table></div>

        Thus, the vector

        $$
        (1,0,1,0)
        $$

        is an optimal solution. The optimal value is

        $$
        {v}[4][7]=14.
        $$

<a id="esercizio-17-3"></a>

!!! esercizio "Exercise 17.3: Exercise 3: 0/1 Knapsack Problem"

    Consider the following KP instance, where the knapsack has capacity $c=8$, and the profits and weights associated with the items are:

    $$
    \begin{array}{l|rrrrr}
    \hline  & {i=1} & {i=2} & {i=3} & {i=4} & {i=5} \\
    \hline {p_i} & {3} & {4} & {8} & {8} & {10} \\
    {w_i} & {1} & {3} & {4} & {5} & {6} \\
    \hline
    \end{array}
    $$

    **Questions**

    1. Show the execution of the bottom-up DP algorithm by reporting, for each iteration, the values of the matrices $v$ and $s$.

    2. Using the matrix $s$, reconstruct an optimal solution in integer notation $(x_1,x_2,\dots,x_n)$, and report the optimal value.

??? soluzione "Solution"

    1. Step-by-step execution of the bottom-up DP algorithm

        For each step of the DP algorithm, the table shows the values of $i$ and $k$, the cells ${v}[i][k]$ and ${s}[i][k]$, and the operation performed. The cells are computed for increasing values of $i$ and, for each fixed value of $i$, for increasing values of $k$.

        <div class="tabella" markdown="0"><table>
        <tr>
        <th><span class="arithmatex">\(i\)</span></th>
        <th><span class="arithmatex">\(k\)</span></th>
        <th><span class="arithmatex">\({v}[i][k]\)</span></th>
        <th><span class="arithmatex">\({s}[i][k]\)</span></th>
        <th>Action</th>
        </tr>
        <tr>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\({v}[0][0]\leftarrow 0\)</span>, <span class="arithmatex">\({s}[0][0]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\({v}[0][1]\leftarrow 0\)</span>, <span class="arithmatex">\({s}[0][1]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\({v}[0][2]\leftarrow 0\)</span>, <span class="arithmatex">\({s}[0][2]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\({v}[0][3]\leftarrow 0\)</span>, <span class="arithmatex">\({s}[0][3]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\({v}[0][4]\leftarrow 0\)</span>, <span class="arithmatex">\({s}[0][4]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\({v}[0][5]\leftarrow 0\)</span>, <span class="arithmatex">\({s}[0][5]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\({v}[0][6]\leftarrow 0\)</span>, <span class="arithmatex">\({s}[0][6]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(7\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\({v}[0][7]\leftarrow 0\)</span>, <span class="arithmatex">\({s}[0][7]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(8\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\({v}[0][8]\leftarrow 0\)</span>, <span class="arithmatex">\({s}[0][8]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_1\)</span>: <span class="arithmatex">\({v}[1][0]\leftarrow {v}[0][0]=0\)</span>, <span class="arithmatex">\({s}[1][0]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(p[1]+{v}[0][0]=3+0>{v}[0][1]=0\)</span>: <span class="arithmatex">\({v}[1][1]\leftarrow 3\)</span>, <span class="arithmatex">\({s}[1][1]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(p[1]+{v}[0][1]=3+0>{v}[0][2]=0\)</span>: <span class="arithmatex">\({v}[1][2]\leftarrow 3\)</span>, <span class="arithmatex">\({s}[1][2]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(p[1]+{v}[0][2]=3+0>{v}[0][3]=0\)</span>: <span class="arithmatex">\({v}[1][3]\leftarrow 3\)</span>, <span class="arithmatex">\({s}[1][3]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(p[1]+{v}[0][3]=3+0>{v}[0][4]=0\)</span>: <span class="arithmatex">\({v}[1][4]\leftarrow 3\)</span>, <span class="arithmatex">\({s}[1][4]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(p[1]+{v}[0][4]=3+0>{v}[0][5]=0\)</span>: <span class="arithmatex">\({v}[1][5]\leftarrow 3\)</span>, <span class="arithmatex">\({s}[1][5]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(p[1]+{v}[0][5]=3+0>{v}[0][6]=0\)</span>: <span class="arithmatex">\({v}[1][6]\leftarrow 3\)</span>, <span class="arithmatex">\({s}[1][6]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(7\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(p[1]+{v}[0][6]=3+0>{v}[0][7]=0\)</span>: <span class="arithmatex">\({v}[1][7]\leftarrow 3\)</span>, <span class="arithmatex">\({s}[1][7]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(8\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(p[1]+{v}[0][7]=3+0>{v}[0][8]=0\)</span>: <span class="arithmatex">\({v}[1][8]\leftarrow 3\)</span>, <span class="arithmatex">\({s}[1][8]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_2\)</span>: <span class="arithmatex">\({v}[2][0]\leftarrow {v}[1][0]=0\)</span>, <span class="arithmatex">\({s}[2][0]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_2\)</span>: <span class="arithmatex">\({v}[2][1]\leftarrow {v}[1][1]=3\)</span>, <span class="arithmatex">\({s}[2][1]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_2\)</span>: <span class="arithmatex">\({v}[2][2]\leftarrow {v}[1][2]=3\)</span>, <span class="arithmatex">\({s}[2][2]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(p[2]+{v}[1][0]=4+0>{v}[1][3]=3\)</span>: <span class="arithmatex">\({v}[2][3]\leftarrow 4\)</span>, <span class="arithmatex">\({s}[2][3]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(7\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(p[2]+{v}[1][1]=4+3>{v}[1][4]=3\)</span>: <span class="arithmatex">\({v}[2][4]\leftarrow 7\)</span>, <span class="arithmatex">\({s}[2][4]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(7\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(p[2]+{v}[1][2]=4+3>{v}[1][5]=3\)</span>: <span class="arithmatex">\({v}[2][5]\leftarrow 7\)</span>, <span class="arithmatex">\({s}[2][5]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(7\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(p[2]+{v}[1][3]=4+3>{v}[1][6]=3\)</span>: <span class="arithmatex">\({v}[2][6]\leftarrow 7\)</span>, <span class="arithmatex">\({s}[2][6]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(7\)</span></td>
        <td><span class="arithmatex">\(7\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(p[2]+{v}[1][4]=4+3>{v}[1][7]=3\)</span>: <span class="arithmatex">\({v}[2][7]\leftarrow 7\)</span>, <span class="arithmatex">\({s}[2][7]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(8\)</span></td>
        <td><span class="arithmatex">\(7\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(p[2]+{v}[1][5]=4+3>{v}[1][8]=3\)</span>: <span class="arithmatex">\({v}[2][8]\leftarrow 7\)</span>, <span class="arithmatex">\({s}[2][8]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_3\)</span>: <span class="arithmatex">\({v}[3][0]\leftarrow {v}[2][0]=0\)</span>, <span class="arithmatex">\({s}[3][0]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_3\)</span>: <span class="arithmatex">\({v}[3][1]\leftarrow {v}[2][1]=3\)</span>, <span class="arithmatex">\({s}[3][1]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_3\)</span>: <span class="arithmatex">\({v}[3][2]\leftarrow {v}[2][2]=3\)</span>, <span class="arithmatex">\({s}[3][2]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_3\)</span>: <span class="arithmatex">\({v}[3][3]\leftarrow {v}[2][3]=4\)</span>, <span class="arithmatex">\({s}[3][3]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(8\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(p[3]+{v}[2][0]=8+0>{v}[2][4]=7\)</span>: <span class="arithmatex">\({v}[3][4]\leftarrow 8\)</span>, <span class="arithmatex">\({s}[3][4]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(11\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(p[3]+{v}[2][1]=8+3>{v}[2][5]=7\)</span>: <span class="arithmatex">\({v}[3][5]\leftarrow 11\)</span>, <span class="arithmatex">\({s}[3][5]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(11\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(p[3]+{v}[2][2]=8+3>{v}[2][6]=7\)</span>: <span class="arithmatex">\({v}[3][6]\leftarrow 11\)</span>, <span class="arithmatex">\({s}[3][6]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(7\)</span></td>
        <td><span class="arithmatex">\(12\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(p[3]+{v}[2][3]=8+4>{v}[2][7]=7\)</span>: <span class="arithmatex">\({v}[3][7]\leftarrow 12\)</span>, <span class="arithmatex">\({s}[3][7]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(8\)</span></td>
        <td><span class="arithmatex">\(15\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(p[3]+{v}[2][4]=8+7>{v}[2][8]=7\)</span>: <span class="arithmatex">\({v}[3][8]\leftarrow 15\)</span>, <span class="arithmatex">\({s}[3][8]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_4\)</span>: <span class="arithmatex">\({v}[4][0]\leftarrow {v}[3][0]=0\)</span>, <span class="arithmatex">\({s}[4][0]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_4\)</span>: <span class="arithmatex">\({v}[4][1]\leftarrow {v}[3][1]=3\)</span>, <span class="arithmatex">\({s}[4][1]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_4\)</span>: <span class="arithmatex">\({v}[4][2]\leftarrow {v}[3][2]=3\)</span>, <span class="arithmatex">\({s}[4][2]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_4\)</span>: <span class="arithmatex">\({v}[4][3]\leftarrow {v}[3][3]=4\)</span>, <span class="arithmatex">\({s}[4][3]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(8\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_4\)</span>: <span class="arithmatex">\({v}[4][4]\leftarrow {v}[3][4]=8\)</span>, <span class="arithmatex">\({s}[4][4]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(11\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(p[4]+{v}[3][0]=8+0\le {v}[3][5]=11\)</span>: <span class="arithmatex">\({v}[4][5]\leftarrow 11\)</span>, <span class="arithmatex">\({s}[4][5]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(11\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(p[4]+{v}[3][1]=8+3\le {v}[3][6]=11\)</span>: <span class="arithmatex">\({v}[4][6]\leftarrow 11\)</span>, <span class="arithmatex">\({s}[4][6]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(7\)</span></td>
        <td><span class="arithmatex">\(12\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(p[4]+{v}[3][2]=8+3\le {v}[3][7]=12\)</span>: <span class="arithmatex">\({v}[4][7]\leftarrow 12\)</span>, <span class="arithmatex">\({s}[4][7]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(8\)</span></td>
        <td><span class="arithmatex">\(15\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(p[4]+{v}[3][3]=8+4\le {v}[3][8]=15\)</span>: <span class="arithmatex">\({v}[4][8]\leftarrow 15\)</span>, <span class="arithmatex">\({s}[4][8]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_5\)</span>: <span class="arithmatex">\({v}[5][0]\leftarrow {v}[4][0]=0\)</span>, <span class="arithmatex">\({s}[5][0]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_5\)</span>: <span class="arithmatex">\({v}[5][1]\leftarrow {v}[4][1]=3\)</span>, <span class="arithmatex">\({s}[5][1]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_5\)</span>: <span class="arithmatex">\({v}[5][2]\leftarrow {v}[4][2]=3\)</span>, <span class="arithmatex">\({s}[5][2]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_5\)</span>: <span class="arithmatex">\({v}[5][3]\leftarrow {v}[4][3]=4\)</span>, <span class="arithmatex">\({s}[5][3]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(8\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_5\)</span>: <span class="arithmatex">\({v}[5][4]\leftarrow {v}[4][4]=8\)</span>, <span class="arithmatex">\({s}[5][4]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(11\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_5\)</span>: <span class="arithmatex">\({v}[5][5]\leftarrow {v}[4][5]=11\)</span>, <span class="arithmatex">\({s}[5][5]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(11\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(p[5]+{v}[4][0]=10+0\le {v}[4][6]=11\)</span>: <span class="arithmatex">\({v}[5][6]\leftarrow 11\)</span>, <span class="arithmatex">\({s}[5][6]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(7\)</span></td>
        <td><span class="arithmatex">\(13\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(p[5]+{v}[4][1]=10+3>{v}[4][7]=12\)</span>: <span class="arithmatex">\({v}[5][7]\leftarrow 13\)</span>, <span class="arithmatex">\({s}[5][7]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(8\)</span></td>
        <td><span class="arithmatex">\(15\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(p[5]+{v}[4][2]=10+3\le {v}[4][8]=15\)</span>: <span class="arithmatex">\({v}[5][8]\leftarrow 15\)</span>, <span class="arithmatex">\({s}[5][8]\leftarrow 0\)</span></td>
        </tr>
        </table></div>

        This is the matrix ${v}$ after the execution of the DP algorithm:

        $$
        \begin{array}{l|rrrrrrrrr}
        \hline {{v}[i][k]} & {k=0} & {k=1} & {k=2} & {k=3} & {k=4} & {k=5} & {k=6} & {k=7} & {k=8} \\
        \hline {i=0} & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 \\
        {i=1} & 0 & 3 & 3 & 3 & 3 & 3 & 3 & 3 & 3 \\
        {i=2} & 0 & 3 & 3 & 4 & 7 & 7 & 7 & 7 & 7 \\
        {i=3} & 0 & 3 & 3 & 4 & 8 & 11 & 11 & 12 & 15 \\
        {i=4} & 0 & 3 & 3 & 4 & 8 & 11 & 11 & 12 & 15 \\
        {i=5} & 0 & 3 & 3 & 4 & 8 & 11 & 11 & 13 & 15 \\
        \hline
        \end{array}
        $$

        This is the matrix ${s}$ after the execution of the DP algorithm:

        $$
        \begin{array}{l|rrrrrrrrr}
        \hline {{s}[i][k]} & {k=0} & {k=1} & {k=2} & {k=3} & {k=4} & {k=5} & {k=6} & {k=7} & {k=8} \\
        \hline {i=0} & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 \\
        {i=1} & 0 & 1 & 1 & 1 & 1 & 1 & 1 & 1 & 1 \\
        {i=2} & 0 & 0 & 0 & 1 & 1 & 1 & 1 & 1 & 1 \\
        {i=3} & 0 & 0 & 0 & 0 & 1 & 1 & 1 & 1 & 1 \\
        {i=4} & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 \\
        {i=5} & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 1 & 0 \\
        \hline
        \end{array}
        $$

    2. We have the following matrix ${s}$:

        $$
        \begin{array}{l|rrrrrrrrr}
        \hline {{s}[i][k]} & {k=0} & {k=1} & {k=2} & {k=3} & {k=4} & {k=5} & {k=6} & {k=7} & {k=8} \\
        \hline {i=0} & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 \\
        {i=1} & 0 & 1 & 1 & 1 & 1 & 1 & 1 & 1 & 1 \\
        {i=2} & 0 & 0 & 0 & 1 & 1 & 1 & 1 & 1 & 1 \\
        {i=3} & 0 & 0 & 0 & 0 & 1 & 1 & 1 & 1 & 1 \\
        {i=4} & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 \\
        {i=5} & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 1 & 0 \\
        \hline
        \end{array}
        $$

        We can reconstruct an optimal solution by starting from $i=5$ and $k=8$ as follows:

        <div class="tabella" markdown="0"><table>
        <tr>
        <th>Iteration</th>
        <th><span class="arithmatex">\(i\)</span></th>
        <th><span class="arithmatex">\(k\)</span></th>
        <th><span class="arithmatex">\({s}[i][k]\)</span></th>
        <th><span class="arithmatex">\(x[1]\)</span></th>
        <th><span class="arithmatex">\(x[2]\)</span></th>
        <th><span class="arithmatex">\(x[3]\)</span></th>
        <th><span class="arithmatex">\(x[4]\)</span></th>
        <th><span class="arithmatex">\(x[5]\)</span></th>
        <th>Action</th>
        </tr>
        <tr>
        <td>\-</td>
        <td>\-</td>
        <td>\-</td>
        <td>\-</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(k=8\)</span></td>
        </tr>
        <tr>
        <td>1</td>
        <td>5</td>
        <td>8</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>no update</td>
        </tr>
        <tr>
        <td>2</td>
        <td>4</td>
        <td>8</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>no update</td>
        </tr>
        <tr>
        <td>3</td>
        <td>3</td>
        <td>8</td>
        <td>1</td>
        <td>0</td>
        <td>0</td>
        <td class="cella-blu">1</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(x[3]\leftarrow 1\)</span>, <span class="arithmatex">\(k\leftarrow 8-4=4\)</span></td>
        </tr>
        <tr>
        <td>4</td>
        <td>2</td>
        <td>4</td>
        <td>1</td>
        <td>0</td>
        <td class="cella-blu">1</td>
        <td class="cella-blu">1</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(x[2]\leftarrow 1\)</span>, <span class="arithmatex">\(k\leftarrow 4-3=1\)</span></td>
        </tr>
        <tr>
        <td>5</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td class="cella-blu">1</td>
        <td class="cella-blu">1</td>
        <td class="cella-blu">1</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(x[1]\leftarrow 1\)</span>, <span class="arithmatex">\(k\leftarrow 1-1=0\)</span></td>
        </tr>
        </table></div>

        Thus, the vector

        $$
        (1,1,1,0,0)
        $$

        is an optimal solution. The optimal value is

        $$
        {v}[5][8]=15.
        $$

<a id="esercizio-17-4"></a>

!!! esercizio "Exercise 17.4: Exercise 4: 0/1 Knapsack Problem"

    Consider the following KP instance, where the knapsack has capacity $c=9$, and the profits and weights associated with the items are:

    $$
    \begin{array}{l|rrrrr}
    \hline  & {i=1} & {i=2} & {i=3} & {i=4} & {i=5} \\
    \hline {p_i} & {5} & {6} & {9} & {10} & {13} \\
    {w_i} & {2} & {4} & {5} & {6} & {7} \\
    \hline
    \end{array}
    $$

    **Questions**

    1. Show the execution of the bottom-up DP algorithm by reporting, for each iteration, the values of the matrices $v$ and $s$.

    2. Using the matrix $s$, reconstruct an optimal solution in integer notation $(x_1,x_2,\dots,x_n)$, and report the optimal value.

??? soluzione "Solution"

    1. Step-by-step execution of the bottom-up DP algorithm

        For each step of the DP algorithm, the table shows the values of $i$ and $k$, the cells ${v}[i][k]$ and ${s}[i][k]$, and the operation performed. The cells are computed for increasing values of $i$ and, for each fixed value of $i$, for increasing values of $k$.

        <div class="tabella" markdown="0"><table>
        <tr>
        <th><span class="arithmatex">\(i\)</span></th>
        <th><span class="arithmatex">\(k\)</span></th>
        <th><span class="arithmatex">\({v}[i][k]\)</span></th>
        <th><span class="arithmatex">\({s}[i][k]\)</span></th>
        <th>Action</th>
        </tr>
        <tr>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\({v}[0][0]\leftarrow 0\)</span>, <span class="arithmatex">\({s}[0][0]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\({v}[0][1]\leftarrow 0\)</span>, <span class="arithmatex">\({s}[0][1]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\({v}[0][2]\leftarrow 0\)</span>, <span class="arithmatex">\({s}[0][2]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\({v}[0][3]\leftarrow 0\)</span>, <span class="arithmatex">\({s}[0][3]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\({v}[0][4]\leftarrow 0\)</span>, <span class="arithmatex">\({s}[0][4]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\({v}[0][5]\leftarrow 0\)</span>, <span class="arithmatex">\({s}[0][5]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\({v}[0][6]\leftarrow 0\)</span>, <span class="arithmatex">\({s}[0][6]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(7\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\({v}[0][7]\leftarrow 0\)</span>, <span class="arithmatex">\({s}[0][7]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(8\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\({v}[0][8]\leftarrow 0\)</span>, <span class="arithmatex">\({s}[0][8]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(9\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\({v}[0][9]\leftarrow 0\)</span>, <span class="arithmatex">\({s}[0][9]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_1\)</span>: <span class="arithmatex">\({v}[1][0]\leftarrow {v}[0][0]=0\)</span>, <span class="arithmatex">\({s}[1][0]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_1\)</span>: <span class="arithmatex">\({v}[1][1]\leftarrow {v}[0][1]=0\)</span>, <span class="arithmatex">\({s}[1][1]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(p[1]+{v}[0][0]=5+0>{v}[0][2]=0\)</span>: <span class="arithmatex">\({v}[1][2]\leftarrow 5\)</span>, <span class="arithmatex">\({s}[1][2]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(p[1]+{v}[0][1]=5+0>{v}[0][3]=0\)</span>: <span class="arithmatex">\({v}[1][3]\leftarrow 5\)</span>, <span class="arithmatex">\({s}[1][3]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(p[1]+{v}[0][2]=5+0>{v}[0][4]=0\)</span>: <span class="arithmatex">\({v}[1][4]\leftarrow 5\)</span>, <span class="arithmatex">\({s}[1][4]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(p[1]+{v}[0][3]=5+0>{v}[0][5]=0\)</span>: <span class="arithmatex">\({v}[1][5]\leftarrow 5\)</span>, <span class="arithmatex">\({s}[1][5]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(p[1]+{v}[0][4]=5+0>{v}[0][6]=0\)</span>: <span class="arithmatex">\({v}[1][6]\leftarrow 5\)</span>, <span class="arithmatex">\({s}[1][6]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(7\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(p[1]+{v}[0][5]=5+0>{v}[0][7]=0\)</span>: <span class="arithmatex">\({v}[1][7]\leftarrow 5\)</span>, <span class="arithmatex">\({s}[1][7]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(8\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(p[1]+{v}[0][6]=5+0>{v}[0][8]=0\)</span>: <span class="arithmatex">\({v}[1][8]\leftarrow 5\)</span>, <span class="arithmatex">\({s}[1][8]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(9\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(p[1]+{v}[0][7]=5+0>{v}[0][9]=0\)</span>: <span class="arithmatex">\({v}[1][9]\leftarrow 5\)</span>, <span class="arithmatex">\({s}[1][9]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_2\)</span>: <span class="arithmatex">\({v}[2][0]\leftarrow {v}[1][0]=0\)</span>, <span class="arithmatex">\({s}[2][0]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_2\)</span>: <span class="arithmatex">\({v}[2][1]\leftarrow {v}[1][1]=0\)</span>, <span class="arithmatex">\({s}[2][1]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_2\)</span>: <span class="arithmatex">\({v}[2][2]\leftarrow {v}[1][2]=5\)</span>, <span class="arithmatex">\({s}[2][2]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_2\)</span>: <span class="arithmatex">\({v}[2][3]\leftarrow {v}[1][3]=5\)</span>, <span class="arithmatex">\({s}[2][3]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(p[2]+{v}[1][0]=6+0>{v}[1][4]=5\)</span>: <span class="arithmatex">\({v}[2][4]\leftarrow 6\)</span>, <span class="arithmatex">\({s}[2][4]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(p[2]+{v}[1][1]=6+0>{v}[1][5]=5\)</span>: <span class="arithmatex">\({v}[2][5]\leftarrow 6\)</span>, <span class="arithmatex">\({s}[2][5]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(11\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(p[2]+{v}[1][2]=6+5>{v}[1][6]=5\)</span>: <span class="arithmatex">\({v}[2][6]\leftarrow 11\)</span>, <span class="arithmatex">\({s}[2][6]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(7\)</span></td>
        <td><span class="arithmatex">\(11\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(p[2]+{v}[1][3]=6+5>{v}[1][7]=5\)</span>: <span class="arithmatex">\({v}[2][7]\leftarrow 11\)</span>, <span class="arithmatex">\({s}[2][7]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(8\)</span></td>
        <td><span class="arithmatex">\(11\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(p[2]+{v}[1][4]=6+5>{v}[1][8]=5\)</span>: <span class="arithmatex">\({v}[2][8]\leftarrow 11\)</span>, <span class="arithmatex">\({s}[2][8]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(9\)</span></td>
        <td><span class="arithmatex">\(11\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(p[2]+{v}[1][5]=6+5>{v}[1][9]=5\)</span>: <span class="arithmatex">\({v}[2][9]\leftarrow 11\)</span>, <span class="arithmatex">\({s}[2][9]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_3\)</span>: <span class="arithmatex">\({v}[3][0]\leftarrow {v}[2][0]=0\)</span>, <span class="arithmatex">\({s}[3][0]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_3\)</span>: <span class="arithmatex">\({v}[3][1]\leftarrow {v}[2][1]=0\)</span>, <span class="arithmatex">\({s}[3][1]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_3\)</span>: <span class="arithmatex">\({v}[3][2]\leftarrow {v}[2][2]=5\)</span>, <span class="arithmatex">\({s}[3][2]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_3\)</span>: <span class="arithmatex">\({v}[3][3]\leftarrow {v}[2][3]=5\)</span>, <span class="arithmatex">\({s}[3][3]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_3\)</span>: <span class="arithmatex">\({v}[3][4]\leftarrow {v}[2][4]=6\)</span>, <span class="arithmatex">\({s}[3][4]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(9\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(p[3]+{v}[2][0]=9+0>{v}[2][5]=6\)</span>: <span class="arithmatex">\({v}[3][5]\leftarrow 9\)</span>, <span class="arithmatex">\({s}[3][5]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(11\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(p[3]+{v}[2][1]=9+0\le {v}[2][6]=11\)</span>: <span class="arithmatex">\({v}[3][6]\leftarrow 11\)</span>, <span class="arithmatex">\({s}[3][6]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(7\)</span></td>
        <td><span class="arithmatex">\(14\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(p[3]+{v}[2][2]=9+5>{v}[2][7]=11\)</span>: <span class="arithmatex">\({v}[3][7]\leftarrow 14\)</span>, <span class="arithmatex">\({s}[3][7]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(8\)</span></td>
        <td><span class="arithmatex">\(14\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(p[3]+{v}[2][3]=9+5>{v}[2][8]=11\)</span>: <span class="arithmatex">\({v}[3][8]\leftarrow 14\)</span>, <span class="arithmatex">\({s}[3][8]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(9\)</span></td>
        <td><span class="arithmatex">\(15\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(p[3]+{v}[2][4]=9+6>{v}[2][9]=11\)</span>: <span class="arithmatex">\({v}[3][9]\leftarrow 15\)</span>, <span class="arithmatex">\({s}[3][9]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_4\)</span>: <span class="arithmatex">\({v}[4][0]\leftarrow {v}[3][0]=0\)</span>, <span class="arithmatex">\({s}[4][0]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_4\)</span>: <span class="arithmatex">\({v}[4][1]\leftarrow {v}[3][1]=0\)</span>, <span class="arithmatex">\({s}[4][1]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_4\)</span>: <span class="arithmatex">\({v}[4][2]\leftarrow {v}[3][2]=5\)</span>, <span class="arithmatex">\({s}[4][2]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_4\)</span>: <span class="arithmatex">\({v}[4][3]\leftarrow {v}[3][3]=5\)</span>, <span class="arithmatex">\({s}[4][3]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_4\)</span>: <span class="arithmatex">\({v}[4][4]\leftarrow {v}[3][4]=6\)</span>, <span class="arithmatex">\({s}[4][4]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(9\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_4\)</span>: <span class="arithmatex">\({v}[4][5]\leftarrow {v}[3][5]=9\)</span>, <span class="arithmatex">\({s}[4][5]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(11\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(p[4]+{v}[3][0]=10+0\le {v}[3][6]=11\)</span>: <span class="arithmatex">\({v}[4][6]\leftarrow 11\)</span>, <span class="arithmatex">\({s}[4][6]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(7\)</span></td>
        <td><span class="arithmatex">\(14\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(p[4]+{v}[3][1]=10+0\le {v}[3][7]=14\)</span>: <span class="arithmatex">\({v}[4][7]\leftarrow 14\)</span>, <span class="arithmatex">\({s}[4][7]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(8\)</span></td>
        <td><span class="arithmatex">\(15\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(p[4]+{v}[3][2]=10+5>{v}[3][8]=14\)</span>: <span class="arithmatex">\({v}[4][8]\leftarrow 15\)</span>, <span class="arithmatex">\({s}[4][8]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(9\)</span></td>
        <td><span class="arithmatex">\(15\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(p[4]+{v}[3][3]=10+5\le {v}[3][9]=15\)</span>: <span class="arithmatex">\({v}[4][9]\leftarrow 15\)</span>, <span class="arithmatex">\({s}[4][9]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_5\)</span>: <span class="arithmatex">\({v}[5][0]\leftarrow {v}[4][0]=0\)</span>, <span class="arithmatex">\({s}[5][0]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_5\)</span>: <span class="arithmatex">\({v}[5][1]\leftarrow {v}[4][1]=0\)</span>, <span class="arithmatex">\({s}[5][1]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_5\)</span>: <span class="arithmatex">\({v}[5][2]\leftarrow {v}[4][2]=5\)</span>, <span class="arithmatex">\({s}[5][2]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_5\)</span>: <span class="arithmatex">\({v}[5][3]\leftarrow {v}[4][3]=5\)</span>, <span class="arithmatex">\({s}[5][3]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_5\)</span>: <span class="arithmatex">\({v}[5][4]\leftarrow {v}[4][4]=6\)</span>, <span class="arithmatex">\({s}[5][4]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(9\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_5\)</span>: <span class="arithmatex">\({v}[5][5]\leftarrow {v}[4][5]=9\)</span>, <span class="arithmatex">\({s}[5][5]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(11\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_5\)</span>: <span class="arithmatex">\({v}[5][6]\leftarrow {v}[4][6]=11\)</span>, <span class="arithmatex">\({s}[5][6]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(7\)</span></td>
        <td><span class="arithmatex">\(14\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(p[5]+{v}[4][0]=13+0\le {v}[4][7]=14\)</span>: <span class="arithmatex">\({v}[5][7]\leftarrow 14\)</span>, <span class="arithmatex">\({s}[5][7]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(8\)</span></td>
        <td><span class="arithmatex">\(15\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(p[5]+{v}[4][1]=13+0\le {v}[4][8]=15\)</span>: <span class="arithmatex">\({v}[5][8]\leftarrow 15\)</span>, <span class="arithmatex">\({s}[5][8]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(9\)</span></td>
        <td><span class="arithmatex">\(18\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(p[5]+{v}[4][2]=13+5>{v}[4][9]=15\)</span>: <span class="arithmatex">\({v}[5][9]\leftarrow 18\)</span>, <span class="arithmatex">\({s}[5][9]\leftarrow 1\)</span></td>
        </tr>
        </table></div>

        This is the matrix ${v}$ after the execution of the DP algorithm:

        $$
        \begin{array}{l|rrrrrrrrrr}
        \hline {{v}[i][k]} & {k=0} & {k=1} & {k=2} & {k=3} & {k=4} & {k=5} & {k=6} & {k=7} & {k=8} & {k=9} \\
        \hline {i=0} & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 \\
        {i=1} & 0 & 0 & 5 & 5 & 5 & 5 & 5 & 5 & 5 & 5 \\
        {i=2} & 0 & 0 & 5 & 5 & 6 & 6 & 11 & 11 & 11 & 11 \\
        {i=3} & 0 & 0 & 5 & 5 & 6 & 9 & 11 & 14 & 14 & 15 \\
        {i=4} & 0 & 0 & 5 & 5 & 6 & 9 & 11 & 14 & 15 & 15 \\
        {i=5} & 0 & 0 & 5 & 5 & 6 & 9 & 11 & 14 & 15 & 18 \\
        \hline
        \end{array}
        $$

        This is the matrix ${s}$ after the execution of the DP algorithm:

        $$
        \begin{array}{l|rrrrrrrrrr}
        \hline {{s}[i][k]} & {k=0} & {k=1} & {k=2} & {k=3} & {k=4} & {k=5} & {k=6} & {k=7} & {k=8} & {k=9} \\
        \hline {i=0} & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 \\
        {i=1} & 0 & 0 & 1 & 1 & 1 & 1 & 1 & 1 & 1 & 1 \\
        {i=2} & 0 & 0 & 0 & 0 & 1 & 1 & 1 & 1 & 1 & 1 \\
        {i=3} & 0 & 0 & 0 & 0 & 0 & 1 & 0 & 1 & 1 & 1 \\
        {i=4} & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 1 & 0 \\
        {i=5} & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 1 \\
        \hline
        \end{array}
        $$

    2. We have the following matrix ${s}$:

        $$
        \begin{array}{l|rrrrrrrrrr}
        \hline {{s}[i][k]} & {k=0} & {k=1} & {k=2} & {k=3} & {k=4} & {k=5} & {k=6} & {k=7} & {k=8} & {k=9} \\
        \hline {i=0} & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 \\
        {i=1} & 0 & 0 & 1 & 1 & 1 & 1 & 1 & 1 & 1 & 1 \\
        {i=2} & 0 & 0 & 0 & 0 & 1 & 1 & 1 & 1 & 1 & 1 \\
        {i=3} & 0 & 0 & 0 & 0 & 0 & 1 & 0 & 1 & 1 & 1 \\
        {i=4} & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 1 & 0 \\
        {i=5} & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 1 \\
        \hline
        \end{array}
        $$

        We can reconstruct an optimal solution by starting from $i=5$ and $k=9$ as follows:

        <div class="tabella" markdown="0"><table>
        <tr>
        <th>Iteration</th>
        <th><span class="arithmatex">\(i\)</span></th>
        <th><span class="arithmatex">\(k\)</span></th>
        <th><span class="arithmatex">\({s}[i][k]\)</span></th>
        <th><span class="arithmatex">\(x[1]\)</span></th>
        <th><span class="arithmatex">\(x[2]\)</span></th>
        <th><span class="arithmatex">\(x[3]\)</span></th>
        <th><span class="arithmatex">\(x[4]\)</span></th>
        <th><span class="arithmatex">\(x[5]\)</span></th>
        <th>Action</th>
        </tr>
        <tr>
        <td>\-</td>
        <td>\-</td>
        <td>\-</td>
        <td>\-</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(k=9\)</span></td>
        </tr>
        <tr>
        <td>1</td>
        <td>5</td>
        <td>9</td>
        <td>1</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td class="cella-blu">1</td>
        <td><span class="arithmatex">\(x[5]\leftarrow 1\)</span>, <span class="arithmatex">\(k\leftarrow 9-7=2\)</span></td>
        </tr>
        <tr>
        <td>2</td>
        <td>4</td>
        <td>2</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td class="cella-blu">1</td>
        <td>no update</td>
        </tr>
        <tr>
        <td>3</td>
        <td>3</td>
        <td>2</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td class="cella-blu">1</td>
        <td>no update</td>
        </tr>
        <tr>
        <td>4</td>
        <td>2</td>
        <td>2</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td class="cella-blu">1</td>
        <td>no update</td>
        </tr>
        <tr>
        <td>5</td>
        <td>1</td>
        <td>2</td>
        <td>1</td>
        <td class="cella-blu">1</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td class="cella-blu">1</td>
        <td><span class="arithmatex">\(x[1]\leftarrow 1\)</span>, <span class="arithmatex">\(k\leftarrow 2-2=0\)</span></td>
        </tr>
        </table></div>

        Thus, the vector

        $$
        (1,0,0,0,1)
        $$

        is an optimal solution. The optimal value is

        $$
        {v}[5][9]=18.
        $$

<a id="esercizio-17-5"></a>

!!! esercizio "Exercise 17.5: Exercise 5: 0/1 Knapsack Problem"

    Consider the following KP instance, where the knapsack has capacity $c=10$, and the profits and weights associated with the items are:

    $$
    \begin{array}{l|rrrrr}
    \hline  & {i=1} & {i=2} & {i=3} & {i=4} & {i=5} \\
    \hline {p_i} & {2} & {7} & {9} & {12} & {14} \\
    {w_i} & {1} & {4} & {5} & {7} & {8} \\
    \hline
    \end{array}
    $$

    **Questions**

    1. Show the execution of the bottom-up DP algorithm by reporting, for each iteration, the values of the matrices $v$ and $s$.

    2. Using the matrix $s$, reconstruct an optimal solution in integer notation $(x_1,x_2,\dots,x_n)$, and report the optimal value.

??? soluzione "Solution"

    1. Step-by-step execution of the bottom-up DP algorithm

        For each step of the DP algorithm, the table shows the values of $i$ and $k$, the cells ${v}[i][k]$ and ${s}[i][k]$, and the operation performed. The cells are computed for increasing values of $i$ and, for each fixed value of $i$, for increasing values of $k$.

        <div class="tabella" markdown="0"><table>
        <tr>
        <th><span class="arithmatex">\(i\)</span></th>
        <th><span class="arithmatex">\(k\)</span></th>
        <th><span class="arithmatex">\({v}[i][k]\)</span></th>
        <th><span class="arithmatex">\({s}[i][k]\)</span></th>
        <th>Action</th>
        </tr>
        <tr>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\({v}[0][0]\leftarrow 0\)</span>, <span class="arithmatex">\({s}[0][0]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\({v}[0][1]\leftarrow 0\)</span>, <span class="arithmatex">\({s}[0][1]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\({v}[0][2]\leftarrow 0\)</span>, <span class="arithmatex">\({s}[0][2]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\({v}[0][3]\leftarrow 0\)</span>, <span class="arithmatex">\({s}[0][3]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\({v}[0][4]\leftarrow 0\)</span>, <span class="arithmatex">\({s}[0][4]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\({v}[0][5]\leftarrow 0\)</span>, <span class="arithmatex">\({s}[0][5]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\({v}[0][6]\leftarrow 0\)</span>, <span class="arithmatex">\({s}[0][6]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(7\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\({v}[0][7]\leftarrow 0\)</span>, <span class="arithmatex">\({s}[0][7]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(8\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\({v}[0][8]\leftarrow 0\)</span>, <span class="arithmatex">\({s}[0][8]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(9\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\({v}[0][9]\leftarrow 0\)</span>, <span class="arithmatex">\({s}[0][9]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(10\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\({v}[0][10]\leftarrow 0\)</span>, <span class="arithmatex">\({s}[0][10]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_1\)</span>: <span class="arithmatex">\({v}[1][0]\leftarrow {v}[0][0]=0\)</span>, <span class="arithmatex">\({s}[1][0]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(p[1]+{v}[0][0]=2+0>{v}[0][1]=0\)</span>: <span class="arithmatex">\({v}[1][1]\leftarrow 2\)</span>, <span class="arithmatex">\({s}[1][1]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(p[1]+{v}[0][1]=2+0>{v}[0][2]=0\)</span>: <span class="arithmatex">\({v}[1][2]\leftarrow 2\)</span>, <span class="arithmatex">\({s}[1][2]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(p[1]+{v}[0][2]=2+0>{v}[0][3]=0\)</span>: <span class="arithmatex">\({v}[1][3]\leftarrow 2\)</span>, <span class="arithmatex">\({s}[1][3]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(p[1]+{v}[0][3]=2+0>{v}[0][4]=0\)</span>: <span class="arithmatex">\({v}[1][4]\leftarrow 2\)</span>, <span class="arithmatex">\({s}[1][4]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(p[1]+{v}[0][4]=2+0>{v}[0][5]=0\)</span>: <span class="arithmatex">\({v}[1][5]\leftarrow 2\)</span>, <span class="arithmatex">\({s}[1][5]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(p[1]+{v}[0][5]=2+0>{v}[0][6]=0\)</span>: <span class="arithmatex">\({v}[1][6]\leftarrow 2\)</span>, <span class="arithmatex">\({s}[1][6]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(7\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(p[1]+{v}[0][6]=2+0>{v}[0][7]=0\)</span>: <span class="arithmatex">\({v}[1][7]\leftarrow 2\)</span>, <span class="arithmatex">\({s}[1][7]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(8\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(p[1]+{v}[0][7]=2+0>{v}[0][8]=0\)</span>: <span class="arithmatex">\({v}[1][8]\leftarrow 2\)</span>, <span class="arithmatex">\({s}[1][8]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(9\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(p[1]+{v}[0][8]=2+0>{v}[0][9]=0\)</span>: <span class="arithmatex">\({v}[1][9]\leftarrow 2\)</span>, <span class="arithmatex">\({s}[1][9]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(10\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(p[1]+{v}[0][9]=2+0>{v}[0][10]=0\)</span>: <span class="arithmatex">\({v}[1][10]\leftarrow 2\)</span>, <span class="arithmatex">\({s}[1][10]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_2\)</span>: <span class="arithmatex">\({v}[2][0]\leftarrow {v}[1][0]=0\)</span>, <span class="arithmatex">\({s}[2][0]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_2\)</span>: <span class="arithmatex">\({v}[2][1]\leftarrow {v}[1][1]=2\)</span>, <span class="arithmatex">\({s}[2][1]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_2\)</span>: <span class="arithmatex">\({v}[2][2]\leftarrow {v}[1][2]=2\)</span>, <span class="arithmatex">\({s}[2][2]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_2\)</span>: <span class="arithmatex">\({v}[2][3]\leftarrow {v}[1][3]=2\)</span>, <span class="arithmatex">\({s}[2][3]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(7\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(p[2]+{v}[1][0]=7+0>{v}[1][4]=2\)</span>: <span class="arithmatex">\({v}[2][4]\leftarrow 7\)</span>, <span class="arithmatex">\({s}[2][4]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(9\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(p[2]+{v}[1][1]=7+2>{v}[1][5]=2\)</span>: <span class="arithmatex">\({v}[2][5]\leftarrow 9\)</span>, <span class="arithmatex">\({s}[2][5]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(9\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(p[2]+{v}[1][2]=7+2>{v}[1][6]=2\)</span>: <span class="arithmatex">\({v}[2][6]\leftarrow 9\)</span>, <span class="arithmatex">\({s}[2][6]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(7\)</span></td>
        <td><span class="arithmatex">\(9\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(p[2]+{v}[1][3]=7+2>{v}[1][7]=2\)</span>: <span class="arithmatex">\({v}[2][7]\leftarrow 9\)</span>, <span class="arithmatex">\({s}[2][7]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(8\)</span></td>
        <td><span class="arithmatex">\(9\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(p[2]+{v}[1][4]=7+2>{v}[1][8]=2\)</span>: <span class="arithmatex">\({v}[2][8]\leftarrow 9\)</span>, <span class="arithmatex">\({s}[2][8]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(9\)</span></td>
        <td><span class="arithmatex">\(9\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(p[2]+{v}[1][5]=7+2>{v}[1][9]=2\)</span>: <span class="arithmatex">\({v}[2][9]\leftarrow 9\)</span>, <span class="arithmatex">\({s}[2][9]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(10\)</span></td>
        <td><span class="arithmatex">\(9\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(p[2]+{v}[1][6]=7+2>{v}[1][10]=2\)</span>: <span class="arithmatex">\({v}[2][10]\leftarrow 9\)</span>, <span class="arithmatex">\({s}[2][10]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_3\)</span>: <span class="arithmatex">\({v}[3][0]\leftarrow {v}[2][0]=0\)</span>, <span class="arithmatex">\({s}[3][0]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_3\)</span>: <span class="arithmatex">\({v}[3][1]\leftarrow {v}[2][1]=2\)</span>, <span class="arithmatex">\({s}[3][1]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_3\)</span>: <span class="arithmatex">\({v}[3][2]\leftarrow {v}[2][2]=2\)</span>, <span class="arithmatex">\({s}[3][2]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_3\)</span>: <span class="arithmatex">\({v}[3][3]\leftarrow {v}[2][3]=2\)</span>, <span class="arithmatex">\({s}[3][3]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(7\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_3\)</span>: <span class="arithmatex">\({v}[3][4]\leftarrow {v}[2][4]=7\)</span>, <span class="arithmatex">\({s}[3][4]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(9\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(p[3]+{v}[2][0]=9+0\le {v}[2][5]=9\)</span>: <span class="arithmatex">\({v}[3][5]\leftarrow 9\)</span>, <span class="arithmatex">\({s}[3][5]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(11\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(p[3]+{v}[2][1]=9+2>{v}[2][6]=9\)</span>: <span class="arithmatex">\({v}[3][6]\leftarrow 11\)</span>, <span class="arithmatex">\({s}[3][6]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(7\)</span></td>
        <td><span class="arithmatex">\(11\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(p[3]+{v}[2][2]=9+2>{v}[2][7]=9\)</span>: <span class="arithmatex">\({v}[3][7]\leftarrow 11\)</span>, <span class="arithmatex">\({s}[3][7]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(8\)</span></td>
        <td><span class="arithmatex">\(11\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(p[3]+{v}[2][3]=9+2>{v}[2][8]=9\)</span>: <span class="arithmatex">\({v}[3][8]\leftarrow 11\)</span>, <span class="arithmatex">\({s}[3][8]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(9\)</span></td>
        <td><span class="arithmatex">\(16\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(p[3]+{v}[2][4]=9+7>{v}[2][9]=9\)</span>: <span class="arithmatex">\({v}[3][9]\leftarrow 16\)</span>, <span class="arithmatex">\({s}[3][9]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(10\)</span></td>
        <td><span class="arithmatex">\(18\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(p[3]+{v}[2][5]=9+9>{v}[2][10]=9\)</span>: <span class="arithmatex">\({v}[3][10]\leftarrow 18\)</span>, <span class="arithmatex">\({s}[3][10]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_4\)</span>: <span class="arithmatex">\({v}[4][0]\leftarrow {v}[3][0]=0\)</span>, <span class="arithmatex">\({s}[4][0]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_4\)</span>: <span class="arithmatex">\({v}[4][1]\leftarrow {v}[3][1]=2\)</span>, <span class="arithmatex">\({s}[4][1]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_4\)</span>: <span class="arithmatex">\({v}[4][2]\leftarrow {v}[3][2]=2\)</span>, <span class="arithmatex">\({s}[4][2]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_4\)</span>: <span class="arithmatex">\({v}[4][3]\leftarrow {v}[3][3]=2\)</span>, <span class="arithmatex">\({s}[4][3]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(7\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_4\)</span>: <span class="arithmatex">\({v}[4][4]\leftarrow {v}[3][4]=7\)</span>, <span class="arithmatex">\({s}[4][4]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(9\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_4\)</span>: <span class="arithmatex">\({v}[4][5]\leftarrow {v}[3][5]=9\)</span>, <span class="arithmatex">\({s}[4][5]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(11\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_4\)</span>: <span class="arithmatex">\({v}[4][6]\leftarrow {v}[3][6]=11\)</span>, <span class="arithmatex">\({s}[4][6]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(7\)</span></td>
        <td><span class="arithmatex">\(12\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(p[4]+{v}[3][0]=12+0>{v}[3][7]=11\)</span>: <span class="arithmatex">\({v}[4][7]\leftarrow 12\)</span>, <span class="arithmatex">\({s}[4][7]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(8\)</span></td>
        <td><span class="arithmatex">\(14\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(p[4]+{v}[3][1]=12+2>{v}[3][8]=11\)</span>: <span class="arithmatex">\({v}[4][8]\leftarrow 14\)</span>, <span class="arithmatex">\({s}[4][8]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(9\)</span></td>
        <td><span class="arithmatex">\(16\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(p[4]+{v}[3][2]=12+2\le {v}[3][9]=16\)</span>: <span class="arithmatex">\({v}[4][9]\leftarrow 16\)</span>, <span class="arithmatex">\({s}[4][9]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(10\)</span></td>
        <td><span class="arithmatex">\(18\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(p[4]+{v}[3][3]=12+2\le {v}[3][10]=18\)</span>: <span class="arithmatex">\({v}[4][10]\leftarrow 18\)</span>, <span class="arithmatex">\({s}[4][10]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_5\)</span>: <span class="arithmatex">\({v}[5][0]\leftarrow {v}[4][0]=0\)</span>, <span class="arithmatex">\({s}[5][0]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_5\)</span>: <span class="arithmatex">\({v}[5][1]\leftarrow {v}[4][1]=2\)</span>, <span class="arithmatex">\({s}[5][1]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_5\)</span>: <span class="arithmatex">\({v}[5][2]\leftarrow {v}[4][2]=2\)</span>, <span class="arithmatex">\({s}[5][2]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_5\)</span>: <span class="arithmatex">\({v}[5][3]\leftarrow {v}[4][3]=2\)</span>, <span class="arithmatex">\({s}[5][3]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(7\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_5\)</span>: <span class="arithmatex">\({v}[5][4]\leftarrow {v}[4][4]=7\)</span>, <span class="arithmatex">\({s}[5][4]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(9\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_5\)</span>: <span class="arithmatex">\({v}[5][5]\leftarrow {v}[4][5]=9\)</span>, <span class="arithmatex">\({s}[5][5]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(11\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_5\)</span>: <span class="arithmatex">\({v}[5][6]\leftarrow {v}[4][6]=11\)</span>, <span class="arithmatex">\({s}[5][6]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(7\)</span></td>
        <td><span class="arithmatex">\(12\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_5\)</span>: <span class="arithmatex">\({v}[5][7]\leftarrow {v}[4][7]=12\)</span>, <span class="arithmatex">\({s}[5][7]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(8\)</span></td>
        <td><span class="arithmatex">\(14\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(p[5]+{v}[4][0]=14+0\le {v}[4][8]=14\)</span>: <span class="arithmatex">\({v}[5][8]\leftarrow 14\)</span>, <span class="arithmatex">\({s}[5][8]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(9\)</span></td>
        <td><span class="arithmatex">\(16\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(p[5]+{v}[4][1]=14+2\le {v}[4][9]=16\)</span>: <span class="arithmatex">\({v}[5][9]\leftarrow 16\)</span>, <span class="arithmatex">\({s}[5][9]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(10\)</span></td>
        <td><span class="arithmatex">\(18\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(p[5]+{v}[4][2]=14+2\le {v}[4][10]=18\)</span>: <span class="arithmatex">\({v}[5][10]\leftarrow 18\)</span>, <span class="arithmatex">\({s}[5][10]\leftarrow 0\)</span></td>
        </tr>
        </table></div>

        This is the matrix ${v}$ after the execution of the DP algorithm:

        $$
        \begin{array}{l|rrrrrrrrrrr}
        \hline {{v}[i][k]} & {k=0} & {k=1} & {k=2} & {k=3} & {k=4} & {k=5} & {k=6} & {k=7} & {k=8} & {k=9} & {k=10} \\
        \hline {i=0} & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 \\
        {i=1} & 0 & 2 & 2 & 2 & 2 & 2 & 2 & 2 & 2 & 2 & 2 \\
        {i=2} & 0 & 2 & 2 & 2 & 7 & 9 & 9 & 9 & 9 & 9 & 9 \\
        {i=3} & 0 & 2 & 2 & 2 & 7 & 9 & 11 & 11 & 11 & 16 & 18 \\
        {i=4} & 0 & 2 & 2 & 2 & 7 & 9 & 11 & 12 & 14 & 16 & 18 \\
        {i=5} & 0 & 2 & 2 & 2 & 7 & 9 & 11 & 12 & 14 & 16 & 18 \\
        \hline
        \end{array}
        $$

        This is the matrix ${s}$ after the execution of the DP algorithm:

        $$
        \begin{array}{l|rrrrrrrrrrr}
        \hline {{s}[i][k]} & {k=0} & {k=1} & {k=2} & {k=3} & {k=4} & {k=5} & {k=6} & {k=7} & {k=8} & {k=9} & {k=10} \\
        \hline {i=0} & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 \\
        {i=1} & 0 & 1 & 1 & 1 & 1 & 1 & 1 & 1 & 1 & 1 & 1 \\
        {i=2} & 0 & 0 & 0 & 0 & 1 & 1 & 1 & 1 & 1 & 1 & 1 \\
        {i=3} & 0 & 0 & 0 & 0 & 0 & 0 & 1 & 1 & 1 & 1 & 1 \\
        {i=4} & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 1 & 1 & 0 & 0 \\
        {i=5} & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 \\
        \hline
        \end{array}
        $$

    2. We have the following matrix ${s}$:

        $$
        \begin{array}{l|rrrrrrrrrrr}
        \hline {{s}[i][k]} & {k=0} & {k=1} & {k=2} & {k=3} & {k=4} & {k=5} & {k=6} & {k=7} & {k=8} & {k=9} & {k=10} \\
        \hline {i=0} & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 \\
        {i=1} & 0 & 1 & 1 & 1 & 1 & 1 & 1 & 1 & 1 & 1 & 1 \\
        {i=2} & 0 & 0 & 0 & 0 & 1 & 1 & 1 & 1 & 1 & 1 & 1 \\
        {i=3} & 0 & 0 & 0 & 0 & 0 & 0 & 1 & 1 & 1 & 1 & 1 \\
        {i=4} & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 1 & 1 & 0 & 0 \\
        {i=5} & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 \\
        \hline
        \end{array}
        $$

        We can reconstruct an optimal solution by starting from $i=5$ and $k=10$ as follows:

        <div class="tabella" markdown="0"><table>
        <tr>
        <th>Iteration</th>
        <th><span class="arithmatex">\(i\)</span></th>
        <th><span class="arithmatex">\(k\)</span></th>
        <th><span class="arithmatex">\({s}[i][k]\)</span></th>
        <th><span class="arithmatex">\(x[1]\)</span></th>
        <th><span class="arithmatex">\(x[2]\)</span></th>
        <th><span class="arithmatex">\(x[3]\)</span></th>
        <th><span class="arithmatex">\(x[4]\)</span></th>
        <th><span class="arithmatex">\(x[5]\)</span></th>
        <th>Action</th>
        </tr>
        <tr>
        <td>\-</td>
        <td>\-</td>
        <td>\-</td>
        <td>\-</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(k=10\)</span></td>
        </tr>
        <tr>
        <td>1</td>
        <td>5</td>
        <td>10</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>no update</td>
        </tr>
        <tr>
        <td>2</td>
        <td>4</td>
        <td>10</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>no update</td>
        </tr>
        <tr>
        <td>3</td>
        <td>3</td>
        <td>10</td>
        <td>1</td>
        <td>0</td>
        <td>0</td>
        <td class="cella-blu">1</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(x[3]\leftarrow 1\)</span>, <span class="arithmatex">\(k\leftarrow 10-5=5\)</span></td>
        </tr>
        <tr>
        <td>4</td>
        <td>2</td>
        <td>5</td>
        <td>1</td>
        <td>0</td>
        <td class="cella-blu">1</td>
        <td class="cella-blu">1</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(x[2]\leftarrow 1\)</span>, <span class="arithmatex">\(k\leftarrow 5-4=1\)</span></td>
        </tr>
        <tr>
        <td>5</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td class="cella-blu">1</td>
        <td class="cella-blu">1</td>
        <td class="cella-blu">1</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(x[1]\leftarrow 1\)</span>, <span class="arithmatex">\(k\leftarrow 1-1=0\)</span></td>
        </tr>
        </table></div>

        Thus, the vector

        $$
        (1,1,1,0,0)
        $$

        is an optimal solution. The optimal value is

        $$
        {v}[5][10]=18.
        $$
