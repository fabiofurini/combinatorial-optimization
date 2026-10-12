---
title: "Exercises · DP for the bounded knapsack problem"
---

# Exercises · DP for the bounded knapsack problem

<div class="info-capitolo" markdown>

**Exercises · Chapter 19** · each solution opens with a click · [:material-book-open-variant: Chapter 19: BKP](../dynamic-programming/dp-bounded-knapsack.md) · [:material-file-pdf-box: Exercises, volume 3 (PDF)](../pdf/exercises-3-dynamic-programming.pdf)

</div>

<a id="esercizio-19-1"></a>

!!! esercizio "Exercise 19.1: Exercise 1: Bounded Knapsack Problem"

    Consider the following BKP instance, where the knapsack has capacity $c=6$, and the profits, weights, and bounds associated with the item types are:

    $$
    \begin{array}{l|rr}
    \hline  & {i=1} & {i=2} \\
    \hline {p_i} & 4 & 5 \\
    {w_i} & 2 & 3 \\
    {b_i} & 2 & 1 \\
    \hline
    \end{array}
    $$

    **Questions**

    1. Show the execution of the bottom-up DP algorithm by reporting, for each iteration, the values of the matrices $v$ and $s$.

    2. Using the matrix $s$, reconstruct an optimal solution in integer notation $(x_1,x_2)$, and report the optimal value.

??? soluzione "Solution"

    1. Step-by-step execution of the bottom-up DP algorithm

        For each step of the DP algorithm, the table shows the values of $i$ and $k$, the cells $v[i][k]$ and $s[i][k]$, and the operation performed.

        <div class="tabella" markdown="0"><table>
        <tr>
        <th><span class="arithmatex">\(i\)</span></th>
        <th><span class="arithmatex">\(k\)</span></th>
        <th><span class="arithmatex">\(v[i][k]\)</span></th>
        <th><span class="arithmatex">\(s[i][k]\)</span></th>
        <th>Action</th>
        </tr>
        <tr>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(v[0][0]\leftarrow 0\)</span>, <span class="arithmatex">\(s[0][0]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>0</td>
        <td>1</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(v[0][1]\leftarrow 0\)</span>, <span class="arithmatex">\(s[0][1]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>0</td>
        <td>2</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(v[0][2]\leftarrow 0\)</span>, <span class="arithmatex">\(s[0][2]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>0</td>
        <td>3</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(v[0][3]\leftarrow 0\)</span>, <span class="arithmatex">\(s[0][3]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>0</td>
        <td>4</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(v[0][4]\leftarrow 0\)</span>, <span class="arithmatex">\(s[0][4]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>0</td>
        <td>5</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(v[0][5]\leftarrow 0\)</span>, <span class="arithmatex">\(s[0][5]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>0</td>
        <td>6</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(v[0][6]\leftarrow 0\)</span>, <span class="arithmatex">\(s[0][6]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>1</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(\max\{v[0][0]\}=0\)</span></td>
        </tr>
        <tr>
        <td>1</td>
        <td>1</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(\max\{v[0][1]\}=0\)</span></td>
        </tr>
        <tr>
        <td>1</td>
        <td>2</td>
        <td>4</td>
        <td>1</td>
        <td><span class="arithmatex">\(\max\{v[0][2],\,p[1]{+}v[0][0]\}=\max\{0,4\}=4\)</span></td>
        </tr>
        <tr>
        <td>1</td>
        <td>3</td>
        <td>4</td>
        <td>1</td>
        <td><span class="arithmatex">\(\max\{v[0][3],\,p[1]{+}v[0][1]\}=\max\{0,4\}=4\)</span></td>
        </tr>
        <tr>
        <td>1</td>
        <td>4</td>
        <td>8</td>
        <td>2</td>
        <td><span class="arithmatex">\(\max\{v[0][4],\,p[1]{+}v[0][2],\,2p[1]{+}v[0][0]\}=\max\{0,4,8\}=8\)</span></td>
        </tr>
        <tr>
        <td>1</td>
        <td>5</td>
        <td>8</td>
        <td>2</td>
        <td><span class="arithmatex">\(\max\{v[0][5],\,p[1]{+}v[0][3],\,2p[1]{+}v[0][1]\}=\max\{0,4,8\}=8\)</span></td>
        </tr>
        <tr>
        <td>1</td>
        <td>6</td>
        <td>8</td>
        <td>2</td>
        <td><span class="arithmatex">\(\max\{v[0][6],\,p[1]{+}v[0][4],\,2p[1]{+}v[0][2]\}=\max\{0,4,8\}=8\)</span></td>
        </tr>
        <tr>
        <td>2</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(\max\{v[1][0]\}=0\)</span></td>
        </tr>
        <tr>
        <td>2</td>
        <td>1</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(\max\{v[1][1]\}=0\)</span></td>
        </tr>
        <tr>
        <td>2</td>
        <td>2</td>
        <td>4</td>
        <td>0</td>
        <td><span class="arithmatex">\(\max\{v[1][2]\}=4\)</span></td>
        </tr>
        <tr>
        <td>2</td>
        <td>3</td>
        <td>5</td>
        <td>1</td>
        <td><span class="arithmatex">\(\max\{v[1][3],\,p[2]{+}v[1][0]\}=\max\{4,5\}=5\)</span></td>
        </tr>
        <tr>
        <td>2</td>
        <td>4</td>
        <td>8</td>
        <td>0</td>
        <td><span class="arithmatex">\(\max\{v[1][4],\,p[2]{+}v[1][1]\}=\max\{8,5\}=8\)</span></td>
        </tr>
        <tr>
        <td>2</td>
        <td>5</td>
        <td>9</td>
        <td>1</td>
        <td><span class="arithmatex">\(\max\{v[1][5],\,p[2]{+}v[1][2]\}=\max\{8,9\}=9\)</span></td>
        </tr>
        <tr>
        <td>2</td>
        <td>6</td>
        <td>9</td>
        <td>1</td>
        <td><span class="arithmatex">\(\max\{v[1][6],\,p[2]{+}v[1][3]\}=\max\{8,9\}=9\)</span></td>
        </tr>
        </table></div>

        This is the matrix $v$ after the execution of the DP algorithm:

        $$
        \begin{array}{l|rrrrrrr}
        \hline {v[i][k]} & {k=0} & {k=1} & {k=2} & {k=3} & {k=4} & {k=5} & {k=6} \\
        \hline {i=0} & 0 & 0 & 0 & 0 & 0 & 0 & 0 \\
        {i=1} & 0 & 0 & 4 & 4 & 8 & 8 & 8 \\
        {i=2} & 0 & 0 & 4 & 5 & 8 & 9 & 9 \\
        \hline
        \end{array}
        $$

        This is the matrix $s$ after the execution of the DP algorithm:

        $$
        \begin{array}{l|rrrrrrr}
        \hline {s[i][k]} & {k=0} & {k=1} & {k=2} & {k=3} & {k=4} & {k=5} & {k=6} \\
        \hline {i=0} & 0 & 0 & 0 & 0 & 0 & 0 & 0 \\
        {i=1} & 0 & 0 & 1 & 1 & 2 & 2 & 2 \\
        {i=2} & 0 & 0 & 0 & 1 & 0 & 1 & 1 \\
        \hline
        \end{array}
        $$

    2. We have the following matrix $s$:

        $$
        \begin{array}{l|rrrrrrr}
        \hline {s[i][k]} & {k=0} & {k=1} & {k=2} & {k=3} & {k=4} & {k=5} & {k=6} \\
        \hline {i=0} & 0 & 0 & 0 & 0 & 0 & 0 & 0 \\
        {i=1} & 0 & 0 & 1 & 1 & 2 & 2 & 2 \\
        {i=2} & 0 & 0 & 0 & 1 & 0 & 1 & 1 \\
        \hline
        \end{array}
        $$

        We can reconstruct an optimal solution by starting from $i=2$ and $k=6$ as follows:

        <div class="tabella" markdown="0"><table>
        <tr>
        <th>Iteration</th>
        <th><span class="arithmatex">\(i\)</span></th>
        <th><span class="arithmatex">\(k\)</span></th>
        <th><span class="arithmatex">\(s[i][k]\)</span></th>
        <th><span class="arithmatex">\(x[1]\)</span></th>
        <th><span class="arithmatex">\(x[2]\)</span></th>
        <th>Action</th>
        </tr>
        <tr>
        <td>\-</td>
        <td>\-</td>
        <td>\-</td>
        <td>\-</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(k=6\)</span></td>
        </tr>
        <tr>
        <td>1</td>
        <td>2</td>
        <td>6</td>
        <td>1</td>
        <td>0</td>
        <td class="cella-blu">1</td>
        <td><span class="arithmatex">\(x[2]\leftarrow 1\)</span>, <span class="arithmatex">\(k\leftarrow 6-1\cdot3=3\)</span></td>
        </tr>
        <tr>
        <td>2</td>
        <td>1</td>
        <td>3</td>
        <td>1</td>
        <td class="cella-blu">1</td>
        <td>1</td>
        <td><span class="arithmatex">\(x[1]\leftarrow 1\)</span>, <span class="arithmatex">\(k\leftarrow 3-1\cdot2=1\)</span></td>
        </tr>
        </table></div>

        Thus, the vector

        $$
        (1,1)
        $$

        is an optimal solution. The optimal value is

        $$
        v[2][6]=9.
        $$

<a id="esercizio-19-2"></a>

!!! esercizio "Exercise 19.2: Exercise 2: Bounded Knapsack Problem"

    Consider the following BKP instance, where the knapsack has capacity $c=7$, and the profits, weights, and bounds associated with the item types are:

    $$
    \begin{array}{l|rr}
    \hline  & {i=1} & {i=2} \\
    \hline {p_i} & 3 & 8 \\
    {w_i} & 1 & 4 \\
    {b_i} & 3 & 1 \\
    \hline
    \end{array}
    $$

    **Questions**

    1. Show the execution of the bottom-up DP algorithm by reporting, for each iteration, the values of the matrices $v$ and $s$.

    2. Using the matrix $s$, reconstruct an optimal solution in integer notation $(x_1,x_2)$, and report the optimal value.

??? soluzione "Solution"

    1. Step-by-step execution of the bottom-up DP algorithm

        For each step of the DP algorithm, the table shows the values of $i$ and $k$, the cells $v[i][k]$ and $s[i][k]$, and the operation performed.

        <div class="tabella" markdown="0"><table>
        <tr>
        <th><span class="arithmatex">\(i\)</span></th>
        <th><span class="arithmatex">\(k\)</span></th>
        <th><span class="arithmatex">\(v[i][k]\)</span></th>
        <th><span class="arithmatex">\(s[i][k]\)</span></th>
        <th>Action</th>
        </tr>
        <tr>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(v[0][0]\leftarrow 0\)</span>, <span class="arithmatex">\(s[0][0]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>0</td>
        <td>1</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(v[0][1]\leftarrow 0\)</span>, <span class="arithmatex">\(s[0][1]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>0</td>
        <td>2</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(v[0][2]\leftarrow 0\)</span>, <span class="arithmatex">\(s[0][2]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>0</td>
        <td>3</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(v[0][3]\leftarrow 0\)</span>, <span class="arithmatex">\(s[0][3]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>0</td>
        <td>4</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(v[0][4]\leftarrow 0\)</span>, <span class="arithmatex">\(s[0][4]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>0</td>
        <td>5</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(v[0][5]\leftarrow 0\)</span>, <span class="arithmatex">\(s[0][5]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>0</td>
        <td>6</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(v[0][6]\leftarrow 0\)</span>, <span class="arithmatex">\(s[0][6]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>0</td>
        <td>7</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(v[0][7]\leftarrow 0\)</span>, <span class="arithmatex">\(s[0][7]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>1</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(\max\{v[0][0]\}=0\)</span></td>
        </tr>
        <tr>
        <td>1</td>
        <td>1</td>
        <td>3</td>
        <td>1</td>
        <td><span class="arithmatex">\(\max\{v[0][1],\,p[1]{+}v[0][0]\}=\max\{0,3\}=3\)</span></td>
        </tr>
        <tr>
        <td>1</td>
        <td>2</td>
        <td>6</td>
        <td>2</td>
        <td><span class="arithmatex">\(\max\{v[0][2],\,p[1]{+}v[0][1],\,2p[1]{+}v[0][0]\}=\max\{0,3,6\}=6\)</span></td>
        </tr>
        <tr>
        <td>1</td>
        <td>3</td>
        <td>9</td>
        <td>3</td>
        <td><span class="arithmatex">\(\max\{v[0][3],\,p[1]{+}v[0][2],\,2p[1]{+}v[0][1],\,3p[1]{+}v[0][0]\}=\max\{0,3,6,9\}=9\)</span></td>
        </tr>
        <tr>
        <td>1</td>
        <td>4</td>
        <td>9</td>
        <td>3</td>
        <td><span class="arithmatex">\(\max\{v[0][4],\,p[1]{+}v[0][3],\,2p[1]{+}v[0][2],\,3p[1]{+}v[0][1]\}=\max\{0,3,6,9\}=9\)</span></td>
        </tr>
        <tr>
        <td>1</td>
        <td>5</td>
        <td>9</td>
        <td>3</td>
        <td><span class="arithmatex">\(\max\{v[0][5],\,p[1]{+}v[0][4],\,2p[1]{+}v[0][3],\,3p[1]{+}v[0][2]\}=\max\{0,3,6,9\}=9\)</span></td>
        </tr>
        <tr>
        <td>1</td>
        <td>6</td>
        <td>9</td>
        <td>3</td>
        <td><span class="arithmatex">\(\max\{v[0][6],\,p[1]{+}v[0][5],\,2p[1]{+}v[0][4],\,3p[1]{+}v[0][3]\}=\max\{0,3,6,9\}=9\)</span></td>
        </tr>
        <tr>
        <td>1</td>
        <td>7</td>
        <td>9</td>
        <td>3</td>
        <td><span class="arithmatex">\(\max\{v[0][7],\,p[1]{+}v[0][6],\,2p[1]{+}v[0][5],\,3p[1]{+}v[0][4]\}=\max\{0,3,6,9\}=9\)</span></td>
        </tr>
        <tr>
        <td>2</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(\max\{v[1][0]\}=0\)</span></td>
        </tr>
        <tr>
        <td>2</td>
        <td>1</td>
        <td>3</td>
        <td>0</td>
        <td><span class="arithmatex">\(\max\{v[1][1]\}=3\)</span></td>
        </tr>
        <tr>
        <td>2</td>
        <td>2</td>
        <td>6</td>
        <td>0</td>
        <td><span class="arithmatex">\(\max\{v[1][2]\}=6\)</span></td>
        </tr>
        <tr>
        <td>2</td>
        <td>3</td>
        <td>9</td>
        <td>0</td>
        <td><span class="arithmatex">\(\max\{v[1][3]\}=9\)</span></td>
        </tr>
        <tr>
        <td>2</td>
        <td>4</td>
        <td>9</td>
        <td>0</td>
        <td><span class="arithmatex">\(\max\{v[1][4],\,p[2]{+}v[1][0]\}=\max\{9,8\}=9\)</span></td>
        </tr>
        <tr>
        <td>2</td>
        <td>5</td>
        <td>11</td>
        <td>1</td>
        <td><span class="arithmatex">\(\max\{v[1][5],\,p[2]{+}v[1][1]\}=\max\{9,11\}=11\)</span></td>
        </tr>
        <tr>
        <td>2</td>
        <td>6</td>
        <td>14</td>
        <td>1</td>
        <td><span class="arithmatex">\(\max\{v[1][6],\,p[2]{+}v[1][2]\}=\max\{9,14\}=14\)</span></td>
        </tr>
        <tr>
        <td>2</td>
        <td>7</td>
        <td>17</td>
        <td>1</td>
        <td><span class="arithmatex">\(\max\{v[1][7],\,p[2]{+}v[1][3]\}=\max\{9,17\}=17\)</span></td>
        </tr>
        </table></div>

        This is the matrix $v$ after the execution of the DP algorithm:

        $$
        \begin{array}{l|rrrrrrrr}
        \hline {v[i][k]} & {k=0} & {k=1} & {k=2} & {k=3} & {k=4} & {k=5} & {k=6} & {k=7} \\
        \hline {i=0} & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 \\
        {i=1} & 0 & 3 & 6 & 9 & 9 & 9 & 9 & 9 \\
        {i=2} & 0 & 3 & 6 & 9 & 9 & 11 & 14 & 17 \\
        \hline
        \end{array}
        $$

        This is the matrix $s$ after the execution of the DP algorithm:

        $$
        \begin{array}{l|rrrrrrrr}
        \hline {s[i][k]} & {k=0} & {k=1} & {k=2} & {k=3} & {k=4} & {k=5} & {k=6} & {k=7} \\
        \hline {i=0} & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 \\
        {i=1} & 0 & 1 & 2 & 3 & 3 & 3 & 3 & 3 \\
        {i=2} & 0 & 0 & 0 & 0 & 0 & 1 & 1 & 1 \\
        \hline
        \end{array}
        $$

    2. We have the following matrix $s$:

        $$
        \begin{array}{l|rrrrrrrr}
        \hline {s[i][k]} & {k=0} & {k=1} & {k=2} & {k=3} & {k=4} & {k=5} & {k=6} & {k=7} \\
        \hline {i=0} & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 \\
        {i=1} & 0 & 1 & 2 & 3 & 3 & 3 & 3 & 3 \\
        {i=2} & 0 & 0 & 0 & 0 & 0 & 1 & 1 & 1 \\
        \hline
        \end{array}
        $$

        We can reconstruct an optimal solution by starting from $i=2$ and $k=7$ as follows:

        <div class="tabella" markdown="0"><table>
        <tr>
        <th>Iteration</th>
        <th><span class="arithmatex">\(i\)</span></th>
        <th><span class="arithmatex">\(k\)</span></th>
        <th><span class="arithmatex">\(s[i][k]\)</span></th>
        <th><span class="arithmatex">\(x[1]\)</span></th>
        <th><span class="arithmatex">\(x[2]\)</span></th>
        <th>Action</th>
        </tr>
        <tr>
        <td>\-</td>
        <td>\-</td>
        <td>\-</td>
        <td>\-</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(k=7\)</span></td>
        </tr>
        <tr>
        <td>1</td>
        <td>2</td>
        <td>7</td>
        <td>1</td>
        <td>0</td>
        <td class="cella-blu">1</td>
        <td><span class="arithmatex">\(x[2]\leftarrow 1\)</span>, <span class="arithmatex">\(k\leftarrow 7-1\cdot4=3\)</span></td>
        </tr>
        <tr>
        <td>2</td>
        <td>1</td>
        <td>3</td>
        <td>3</td>
        <td class="cella-blu">3</td>
        <td>1</td>
        <td><span class="arithmatex">\(x[1]\leftarrow 3\)</span>, <span class="arithmatex">\(k\leftarrow 3-3\cdot1=0\)</span></td>
        </tr>
        </table></div>

        Thus, the vector

        $$
        (3,1)
        $$

        is an optimal solution. The optimal value is

        $$
        v[2][7]=17.
        $$

<a id="esercizio-19-3"></a>

!!! esercizio "Exercise 19.3: Exercise 3: Bounded Knapsack Problem"

    Consider the following BKP instance, where the knapsack has capacity $c=5$, and the profits, weights, and bounds associated with the item types are:

    $$
    \begin{array}{l|rrr}
    \hline  & {i=1} & {i=2} & {i=3} \\
    \hline {p_i} & 2 & 3 & 4 \\
    {w_i} & 1 & 2 & 3 \\
    {b_i} & 1 & 1 & 1 \\
    \hline
    \end{array}
    $$

    **Questions**

    1. Show the execution of the bottom-up DP algorithm by reporting, for each iteration, the values of the matrices $v$ and $s$.

    2. Using the matrix $s$, reconstruct an optimal solution in integer notation $(x_1,x_2,x_3)$, and report the optimal value.

??? soluzione "Solution"

    1. Step-by-step execution of the bottom-up DP algorithm

        For each step of the DP algorithm, the table shows the values of $i$ and $k$, the cells $v[i][k]$ and $s[i][k]$, and the operation performed.

        <div class="tabella" markdown="0"><table>
        <tr>
        <th><span class="arithmatex">\(i\)</span></th>
        <th><span class="arithmatex">\(k\)</span></th>
        <th><span class="arithmatex">\(v[i][k]\)</span></th>
        <th><span class="arithmatex">\(s[i][k]\)</span></th>
        <th>Action</th>
        </tr>
        <tr>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(v[0][0]\leftarrow 0\)</span>, <span class="arithmatex">\(s[0][0]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>0</td>
        <td>1</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(v[0][1]\leftarrow 0\)</span>, <span class="arithmatex">\(s[0][1]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>0</td>
        <td>2</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(v[0][2]\leftarrow 0\)</span>, <span class="arithmatex">\(s[0][2]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>0</td>
        <td>3</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(v[0][3]\leftarrow 0\)</span>, <span class="arithmatex">\(s[0][3]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>0</td>
        <td>4</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(v[0][4]\leftarrow 0\)</span>, <span class="arithmatex">\(s[0][4]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>0</td>
        <td>5</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(v[0][5]\leftarrow 0\)</span>, <span class="arithmatex">\(s[0][5]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>1</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(\max\{v[0][0]\}=0\)</span></td>
        </tr>
        <tr>
        <td>1</td>
        <td>1</td>
        <td>2</td>
        <td>1</td>
        <td><span class="arithmatex">\(\max\{v[0][1],\,p[1]{+}v[0][0]\}=\max\{0,2\}=2\)</span></td>
        </tr>
        <tr>
        <td>1</td>
        <td>2</td>
        <td>2</td>
        <td>1</td>
        <td><span class="arithmatex">\(\max\{v[0][2],\,p[1]{+}v[0][1]\}=\max\{0,2\}=2\)</span></td>
        </tr>
        <tr>
        <td>1</td>
        <td>3</td>
        <td>2</td>
        <td>1</td>
        <td><span class="arithmatex">\(\max\{v[0][3],\,p[1]{+}v[0][2]\}=\max\{0,2\}=2\)</span></td>
        </tr>
        <tr>
        <td>1</td>
        <td>4</td>
        <td>2</td>
        <td>1</td>
        <td><span class="arithmatex">\(\max\{v[0][4],\,p[1]{+}v[0][3]\}=\max\{0,2\}=2\)</span></td>
        </tr>
        <tr>
        <td>1</td>
        <td>5</td>
        <td>2</td>
        <td>1</td>
        <td><span class="arithmatex">\(\max\{v[0][5],\,p[1]{+}v[0][4]\}=\max\{0,2\}=2\)</span></td>
        </tr>
        <tr>
        <td>2</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(\max\{v[1][0]\}=0\)</span></td>
        </tr>
        <tr>
        <td>2</td>
        <td>1</td>
        <td>2</td>
        <td>0</td>
        <td><span class="arithmatex">\(\max\{v[1][1]\}=2\)</span></td>
        </tr>
        <tr>
        <td>2</td>
        <td>2</td>
        <td>3</td>
        <td>1</td>
        <td><span class="arithmatex">\(\max\{v[1][2],\,p[2]{+}v[1][0]\}=\max\{2,3\}=3\)</span></td>
        </tr>
        <tr>
        <td>2</td>
        <td>3</td>
        <td>5</td>
        <td>1</td>
        <td><span class="arithmatex">\(\max\{v[1][3],\,p[2]{+}v[1][1]\}=\max\{2,5\}=5\)</span></td>
        </tr>
        <tr>
        <td>2</td>
        <td>4</td>
        <td>5</td>
        <td>1</td>
        <td><span class="arithmatex">\(\max\{v[1][4],\,p[2]{+}v[1][2]\}=\max\{2,5\}=5\)</span></td>
        </tr>
        <tr>
        <td>2</td>
        <td>5</td>
        <td>5</td>
        <td>1</td>
        <td><span class="arithmatex">\(\max\{v[1][5],\,p[2]{+}v[1][3]\}=\max\{2,5\}=5\)</span></td>
        </tr>
        <tr>
        <td>3</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(\max\{v[2][0]\}=0\)</span></td>
        </tr>
        <tr>
        <td>3</td>
        <td>1</td>
        <td>2</td>
        <td>0</td>
        <td><span class="arithmatex">\(\max\{v[2][1]\}=2\)</span></td>
        </tr>
        <tr>
        <td>3</td>
        <td>2</td>
        <td>3</td>
        <td>0</td>
        <td><span class="arithmatex">\(\max\{v[2][2]\}=3\)</span></td>
        </tr>
        <tr>
        <td>3</td>
        <td>3</td>
        <td>5</td>
        <td>0</td>
        <td><span class="arithmatex">\(\max\{v[2][3],\,p[3]{+}v[2][0]\}=\max\{5,4\}=5\)</span></td>
        </tr>
        <tr>
        <td>3</td>
        <td>4</td>
        <td>6</td>
        <td>1</td>
        <td><span class="arithmatex">\(\max\{v[2][4],\,p[3]{+}v[2][1]\}=\max\{5,6\}=6\)</span></td>
        </tr>
        <tr>
        <td>3</td>
        <td>5</td>
        <td>7</td>
        <td>1</td>
        <td><span class="arithmatex">\(\max\{v[2][5],\,p[3]{+}v[2][2]\}=\max\{5,7\}=7\)</span></td>
        </tr>
        </table></div>

        This is the matrix $v$ after the execution of the DP algorithm:

        $$
        \begin{array}{l|rrrrrr}
        \hline {v[i][k]} & {k=0} & {k=1} & {k=2} & {k=3} & {k=4} & {k=5} \\
        \hline {i=0} & 0 & 0 & 0 & 0 & 0 & 0 \\
        {i=1} & 0 & 2 & 2 & 2 & 2 & 2 \\
        {i=2} & 0 & 2 & 3 & 5 & 5 & 5 \\
        {i=3} & 0 & 2 & 3 & 5 & 6 & 7 \\
        \hline
        \end{array}
        $$

        This is the matrix $s$ after the execution of the DP algorithm:

        $$
        \begin{array}{l|rrrrrr}
        \hline {s[i][k]} & {k=0} & {k=1} & {k=2} & {k=3} & {k=4} & {k=5} \\
        \hline {i=0} & 0 & 0 & 0 & 0 & 0 & 0 \\
        {i=1} & 0 & 1 & 1 & 1 & 1 & 1 \\
        {i=2} & 0 & 0 & 1 & 1 & 1 & 1 \\
        {i=3} & 0 & 0 & 0 & 0 & 1 & 1 \\
        \hline
        \end{array}
        $$

    2. We have the following matrix $s$:

        $$
        \begin{array}{l|rrrrrr}
        \hline {s[i][k]} & {k=0} & {k=1} & {k=2} & {k=3} & {k=4} & {k=5} \\
        \hline {i=0} & 0 & 0 & 0 & 0 & 0 & 0 \\
        {i=1} & 0 & 1 & 1 & 1 & 1 & 1 \\
        {i=2} & 0 & 0 & 1 & 1 & 1 & 1 \\
        {i=3} & 0 & 0 & 0 & 0 & 1 & 1 \\
        \hline
        \end{array}
        $$

        We can reconstruct an optimal solution by starting from $i=3$ and $k=5$ as follows:

        <div class="tabella" markdown="0"><table>
        <tr>
        <th>Iteration</th>
        <th><span class="arithmatex">\(i\)</span></th>
        <th><span class="arithmatex">\(k\)</span></th>
        <th><span class="arithmatex">\(s[i][k]\)</span></th>
        <th><span class="arithmatex">\(x[1]\)</span></th>
        <th><span class="arithmatex">\(x[2]\)</span></th>
        <th><span class="arithmatex">\(x[3]\)</span></th>
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
        <td><span class="arithmatex">\(k=5\)</span></td>
        </tr>
        <tr>
        <td>1</td>
        <td>3</td>
        <td>5</td>
        <td>1</td>
        <td>0</td>
        <td>0</td>
        <td class="cella-blu">1</td>
        <td><span class="arithmatex">\(x[3]\leftarrow 1\)</span>, <span class="arithmatex">\(k\leftarrow 5-1\cdot3=2\)</span></td>
        </tr>
        <tr>
        <td>2</td>
        <td>2</td>
        <td>2</td>
        <td>1</td>
        <td>0</td>
        <td class="cella-blu">1</td>
        <td>1</td>
        <td><span class="arithmatex">\(x[2]\leftarrow 1\)</span>, <span class="arithmatex">\(k\leftarrow 2-1\cdot2=0\)</span></td>
        </tr>
        <tr>
        <td>3</td>
        <td>1</td>
        <td>0</td>
        <td>0</td>
        <td class="cella-blu">0</td>
        <td>1</td>
        <td>1</td>
        <td><span class="arithmatex">\(x[1]\leftarrow 0\)</span>, <span class="arithmatex">\(k\leftarrow 0-0\cdot1=0\)</span></td>
        </tr>
        </table></div>

        Thus, the vector

        $$
        (0,1,1)
        $$

        is an optimal solution. The optimal value is

        $$
        v[3][5]=7.
        $$

<a id="esercizio-19-4"></a>

!!! esercizio "Exercise 19.4: Exercise 4: Bounded Knapsack Problem"

    Consider the following BKP instance, where the knapsack has capacity $c=8$, and the profits, weights, and bounds associated with the item types are:

    $$
    \begin{array}{l|rr}
    \hline  & {i=1} & {i=2} \\
    \hline {p_i} & 5 & 9 \\
    {w_i} & 2 & 5 \\
    {b_i} & 3 & 1 \\
    \hline
    \end{array}
    $$

    **Questions**

    1. Show the execution of the bottom-up DP algorithm by reporting, for each iteration, the values of the matrices $v$ and $s$.

    2. Using the matrix $s$, reconstruct an optimal solution in integer notation $(x_1,x_2)$, and report the optimal value.

??? soluzione "Solution"

    1. Step-by-step execution of the bottom-up DP algorithm

        For each step of the DP algorithm, the table shows the values of $i$ and $k$, the cells $v[i][k]$ and $s[i][k]$, and the operation performed.

        <div class="tabella" markdown="0"><table>
        <tr>
        <th><span class="arithmatex">\(i\)</span></th>
        <th><span class="arithmatex">\(k\)</span></th>
        <th><span class="arithmatex">\(v[i][k]\)</span></th>
        <th><span class="arithmatex">\(s[i][k]\)</span></th>
        <th>Action</th>
        </tr>
        <tr>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(v[0][0]\leftarrow 0\)</span>, <span class="arithmatex">\(s[0][0]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>0</td>
        <td>1</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(v[0][1]\leftarrow 0\)</span>, <span class="arithmatex">\(s[0][1]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>0</td>
        <td>2</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(v[0][2]\leftarrow 0\)</span>, <span class="arithmatex">\(s[0][2]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>0</td>
        <td>3</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(v[0][3]\leftarrow 0\)</span>, <span class="arithmatex">\(s[0][3]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>0</td>
        <td>4</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(v[0][4]\leftarrow 0\)</span>, <span class="arithmatex">\(s[0][4]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>0</td>
        <td>5</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(v[0][5]\leftarrow 0\)</span>, <span class="arithmatex">\(s[0][5]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>0</td>
        <td>6</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(v[0][6]\leftarrow 0\)</span>, <span class="arithmatex">\(s[0][6]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>0</td>
        <td>7</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(v[0][7]\leftarrow 0\)</span>, <span class="arithmatex">\(s[0][7]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>0</td>
        <td>8</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(v[0][8]\leftarrow 0\)</span>, <span class="arithmatex">\(s[0][8]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>1</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(\max\{v[0][0]\}=0\)</span></td>
        </tr>
        <tr>
        <td>1</td>
        <td>1</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(\max\{v[0][1]\}=0\)</span></td>
        </tr>
        <tr>
        <td>1</td>
        <td>2</td>
        <td>5</td>
        <td>1</td>
        <td><span class="arithmatex">\(\max\{v[0][2],\,p[1]{+}v[0][0]\}=\max\{0,5\}=5\)</span></td>
        </tr>
        <tr>
        <td>1</td>
        <td>3</td>
        <td>5</td>
        <td>1</td>
        <td><span class="arithmatex">\(\max\{v[0][3],\,p[1]{+}v[0][1]\}=\max\{0,5\}=5\)</span></td>
        </tr>
        <tr>
        <td>1</td>
        <td>4</td>
        <td>10</td>
        <td>2</td>
        <td><span class="arithmatex">\(\max\{v[0][4],\,p[1]{+}v[0][2],\,2p[1]{+}v[0][0]\}=\max\{0,5,10\}=10\)</span></td>
        </tr>
        <tr>
        <td>1</td>
        <td>5</td>
        <td>10</td>
        <td>2</td>
        <td><span class="arithmatex">\(\max\{v[0][5],\,p[1]{+}v[0][3],\,2p[1]{+}v[0][1]\}=\max\{0,5,10\}=10\)</span></td>
        </tr>
        <tr>
        <td>1</td>
        <td>6</td>
        <td>15</td>
        <td>3</td>
        <td><span class="arithmatex">\(\max\{v[0][6],\,p[1]{+}v[0][4],\,2p[1]{+}v[0][2],\,3p[1]{+}v[0][0]\}=\max\{0,5,10,15\}=15\)</span></td>
        </tr>
        <tr>
        <td>1</td>
        <td>7</td>
        <td>15</td>
        <td>3</td>
        <td><span class="arithmatex">\(\max\{v[0][7],\,p[1]{+}v[0][5],\,2p[1]{+}v[0][3],\,3p[1]{+}v[0][1]\}=\max\{0,5,10,15\}=15\)</span></td>
        </tr>
        <tr>
        <td>1</td>
        <td>8</td>
        <td>15</td>
        <td>3</td>
        <td><span class="arithmatex">\(\max\{v[0][8],\,p[1]{+}v[0][6],\,2p[1]{+}v[0][4],\,3p[1]{+}v[0][2]\}=\max\{0,5,10,15\}=15\)</span></td>
        </tr>
        <tr>
        <td>2</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(\max\{v[1][0]\}=0\)</span></td>
        </tr>
        <tr>
        <td>2</td>
        <td>1</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(\max\{v[1][1]\}=0\)</span></td>
        </tr>
        <tr>
        <td>2</td>
        <td>2</td>
        <td>5</td>
        <td>0</td>
        <td><span class="arithmatex">\(\max\{v[1][2]\}=5\)</span></td>
        </tr>
        <tr>
        <td>2</td>
        <td>3</td>
        <td>5</td>
        <td>0</td>
        <td><span class="arithmatex">\(\max\{v[1][3]\}=5\)</span></td>
        </tr>
        <tr>
        <td>2</td>
        <td>4</td>
        <td>10</td>
        <td>0</td>
        <td><span class="arithmatex">\(\max\{v[1][4]\}=10\)</span></td>
        </tr>
        <tr>
        <td>2</td>
        <td>5</td>
        <td>10</td>
        <td>0</td>
        <td><span class="arithmatex">\(\max\{v[1][5],\,p[2]{+}v[1][0]\}=\max\{10,9\}=10\)</span></td>
        </tr>
        <tr>
        <td>2</td>
        <td>6</td>
        <td>15</td>
        <td>0</td>
        <td><span class="arithmatex">\(\max\{v[1][6],\,p[2]{+}v[1][1]\}=\max\{15,9\}=15\)</span></td>
        </tr>
        <tr>
        <td>2</td>
        <td>7</td>
        <td>15</td>
        <td>0</td>
        <td><span class="arithmatex">\(\max\{v[1][7],\,p[2]{+}v[1][2]\}=\max\{15,14\}=15\)</span></td>
        </tr>
        <tr>
        <td>2</td>
        <td>8</td>
        <td>15</td>
        <td>0</td>
        <td><span class="arithmatex">\(\max\{v[1][8],\,p[2]{+}v[1][3]\}=\max\{15,14\}=15\)</span></td>
        </tr>
        </table></div>

        This is the matrix $v$ after the execution of the DP algorithm:

        $$
        \begin{array}{l|rrrrrrrrr}
        \hline {v[i][k]} & {k=0} & {k=1} & {k=2} & {k=3} & {k=4} & {k=5} & {k=6} & {k=7} & {k=8} \\
        \hline {i=0} & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 \\
        {i=1} & 0 & 0 & 5 & 5 & 10 & 10 & 15 & 15 & 15 \\
        {i=2} & 0 & 0 & 5 & 5 & 10 & 10 & 15 & 15 & 15 \\
        \hline
        \end{array}
        $$

        This is the matrix $s$ after the execution of the DP algorithm:

        $$
        \begin{array}{l|rrrrrrrrr}
        \hline {s[i][k]} & {k=0} & {k=1} & {k=2} & {k=3} & {k=4} & {k=5} & {k=6} & {k=7} & {k=8} \\
        \hline {i=0} & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 \\
        {i=1} & 0 & 0 & 1 & 1 & 2 & 2 & 3 & 3 & 3 \\
        {i=2} & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 \\
        \hline
        \end{array}
        $$

    2. We have the following matrix $s$:

        $$
        \begin{array}{l|rrrrrrrrr}
        \hline {s[i][k]} & {k=0} & {k=1} & {k=2} & {k=3} & {k=4} & {k=5} & {k=6} & {k=7} & {k=8} \\
        \hline {i=0} & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 \\
        {i=1} & 0 & 0 & 1 & 1 & 2 & 2 & 3 & 3 & 3 \\
        {i=2} & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 \\
        \hline
        \end{array}
        $$

        We can reconstruct an optimal solution by starting from $i=2$ and $k=8$ as follows:

        <div class="tabella" markdown="0"><table>
        <tr>
        <th>Iteration</th>
        <th><span class="arithmatex">\(i\)</span></th>
        <th><span class="arithmatex">\(k\)</span></th>
        <th><span class="arithmatex">\(s[i][k]\)</span></th>
        <th><span class="arithmatex">\(x[1]\)</span></th>
        <th><span class="arithmatex">\(x[2]\)</span></th>
        <th>Action</th>
        </tr>
        <tr>
        <td>\-</td>
        <td>\-</td>
        <td>\-</td>
        <td>\-</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(k=8\)</span></td>
        </tr>
        <tr>
        <td>1</td>
        <td>2</td>
        <td>8</td>
        <td>0</td>
        <td>0</td>
        <td class="cella-blu">0</td>
        <td><span class="arithmatex">\(x[2]\leftarrow 0\)</span>, <span class="arithmatex">\(k\leftarrow 8-0\cdot5=8\)</span></td>
        </tr>
        <tr>
        <td>2</td>
        <td>1</td>
        <td>8</td>
        <td>3</td>
        <td class="cella-blu">3</td>
        <td>0</td>
        <td><span class="arithmatex">\(x[1]\leftarrow 3\)</span>, <span class="arithmatex">\(k\leftarrow 8-3\cdot2=2\)</span></td>
        </tr>
        </table></div>

        Thus, the vector

        $$
        (3,0)
        $$

        is an optimal solution. The optimal value is

        $$
        v[2][8]=15.
        $$

<a id="esercizio-19-5"></a>

!!! esercizio "Exercise 19.5: Exercise 5: Bounded Knapsack Problem"

    Consider the following BKP instance, where the knapsack has capacity $c=9$, and the profits, weights, and bounds associated with the item types are:

    $$
    \begin{array}{l|rrr}
    \hline  & {i=1} & {i=2} & {i=3} \\
    \hline {p_i} & 4 & 5 & 3 \\
    {w_i} & 3 & 4 & 2 \\
    {b_i} & 2 & 1 & 2 \\
    \hline
    \end{array}
    $$

    **Questions**

    1. Show the execution of the bottom-up DP algorithm by reporting, for each iteration, the values of the matrices $v$ and $s$.

    2. Using the matrix $s$, reconstruct an optimal solution in integer notation $(x_1,x_2,x_3)$, and report the optimal value.

??? soluzione "Solution"

    1. Step-by-step execution of the bottom-up DP algorithm

        For each step of the DP algorithm, the table shows the values of $i$ and $k$, the cells $v[i][k]$ and $s[i][k]$, and the operation performed.

        <div class="tabella" markdown="0"><table>
        <tr>
        <th><span class="arithmatex">\(i\)</span></th>
        <th><span class="arithmatex">\(k\)</span></th>
        <th><span class="arithmatex">\(v[i][k]\)</span></th>
        <th><span class="arithmatex">\(s[i][k]\)</span></th>
        <th>Action</th>
        </tr>
        <tr>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(v[0][0]\leftarrow 0\)</span>, <span class="arithmatex">\(s[0][0]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>0</td>
        <td>1</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(v[0][1]\leftarrow 0\)</span>, <span class="arithmatex">\(s[0][1]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>0</td>
        <td>2</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(v[0][2]\leftarrow 0\)</span>, <span class="arithmatex">\(s[0][2]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>0</td>
        <td>3</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(v[0][3]\leftarrow 0\)</span>, <span class="arithmatex">\(s[0][3]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>0</td>
        <td>4</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(v[0][4]\leftarrow 0\)</span>, <span class="arithmatex">\(s[0][4]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>0</td>
        <td>5</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(v[0][5]\leftarrow 0\)</span>, <span class="arithmatex">\(s[0][5]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>0</td>
        <td>6</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(v[0][6]\leftarrow 0\)</span>, <span class="arithmatex">\(s[0][6]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>0</td>
        <td>7</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(v[0][7]\leftarrow 0\)</span>, <span class="arithmatex">\(s[0][7]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>0</td>
        <td>8</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(v[0][8]\leftarrow 0\)</span>, <span class="arithmatex">\(s[0][8]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>0</td>
        <td>9</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(v[0][9]\leftarrow 0\)</span>, <span class="arithmatex">\(s[0][9]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>1</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(\max\{v[0][0]\}=0\)</span></td>
        </tr>
        <tr>
        <td>1</td>
        <td>1</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(\max\{v[0][1]\}=0\)</span></td>
        </tr>
        <tr>
        <td>1</td>
        <td>2</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(\max\{v[0][2]\}=0\)</span></td>
        </tr>
        <tr>
        <td>1</td>
        <td>3</td>
        <td>4</td>
        <td>1</td>
        <td><span class="arithmatex">\(\max\{v[0][3],\,p[1]{+}v[0][0]\}=\max\{0,4\}=4\)</span></td>
        </tr>
        <tr>
        <td>1</td>
        <td>4</td>
        <td>4</td>
        <td>1</td>
        <td><span class="arithmatex">\(\max\{v[0][4],\,p[1]{+}v[0][1]\}=\max\{0,4\}=4\)</span></td>
        </tr>
        <tr>
        <td>1</td>
        <td>5</td>
        <td>4</td>
        <td>1</td>
        <td><span class="arithmatex">\(\max\{v[0][5],\,p[1]{+}v[0][2]\}=\max\{0,4\}=4\)</span></td>
        </tr>
        <tr>
        <td>1</td>
        <td>6</td>
        <td>8</td>
        <td>2</td>
        <td><span class="arithmatex">\(\max\{v[0][6],\,p[1]{+}v[0][3],\,2p[1]{+}v[0][0]\}=\max\{0,4,8\}=8\)</span></td>
        </tr>
        <tr>
        <td>1</td>
        <td>7</td>
        <td>8</td>
        <td>2</td>
        <td><span class="arithmatex">\(\max\{v[0][7],\,p[1]{+}v[0][4],\,2p[1]{+}v[0][1]\}=\max\{0,4,8\}=8\)</span></td>
        </tr>
        <tr>
        <td>1</td>
        <td>8</td>
        <td>8</td>
        <td>2</td>
        <td><span class="arithmatex">\(\max\{v[0][8],\,p[1]{+}v[0][5],\,2p[1]{+}v[0][2]\}=\max\{0,4,8\}=8\)</span></td>
        </tr>
        <tr>
        <td>1</td>
        <td>9</td>
        <td>8</td>
        <td>2</td>
        <td><span class="arithmatex">\(\max\{v[0][9],\,p[1]{+}v[0][6],\,2p[1]{+}v[0][3]\}=\max\{0,4,8\}=8\)</span></td>
        </tr>
        <tr>
        <td>2</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(\max\{v[1][0]\}=0\)</span></td>
        </tr>
        <tr>
        <td>2</td>
        <td>1</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(\max\{v[1][1]\}=0\)</span></td>
        </tr>
        <tr>
        <td>2</td>
        <td>2</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(\max\{v[1][2]\}=0\)</span></td>
        </tr>
        <tr>
        <td>2</td>
        <td>3</td>
        <td>4</td>
        <td>0</td>
        <td><span class="arithmatex">\(\max\{v[1][3]\}=4\)</span></td>
        </tr>
        <tr>
        <td>2</td>
        <td>4</td>
        <td>5</td>
        <td>1</td>
        <td><span class="arithmatex">\(\max\{v[1][4],\,p[2]{+}v[1][0]\}=\max\{4,5\}=5\)</span></td>
        </tr>
        <tr>
        <td>2</td>
        <td>5</td>
        <td>5</td>
        <td>1</td>
        <td><span class="arithmatex">\(\max\{v[1][5],\,p[2]{+}v[1][1]\}=\max\{4,5\}=5\)</span></td>
        </tr>
        <tr>
        <td>2</td>
        <td>6</td>
        <td>8</td>
        <td>0</td>
        <td><span class="arithmatex">\(\max\{v[1][6],\,p[2]{+}v[1][2]\}=\max\{8,5\}=8\)</span></td>
        </tr>
        <tr>
        <td>2</td>
        <td>7</td>
        <td>9</td>
        <td>1</td>
        <td><span class="arithmatex">\(\max\{v[1][7],\,p[2]{+}v[1][3]\}=\max\{8,9\}=9\)</span></td>
        </tr>
        <tr>
        <td>2</td>
        <td>8</td>
        <td>9</td>
        <td>1</td>
        <td><span class="arithmatex">\(\max\{v[1][8],\,p[2]{+}v[1][4]\}=\max\{8,9\}=9\)</span></td>
        </tr>
        <tr>
        <td>2</td>
        <td>9</td>
        <td>9</td>
        <td>1</td>
        <td><span class="arithmatex">\(\max\{v[1][9],\,p[2]{+}v[1][5]\}=\max\{8,9\}=9\)</span></td>
        </tr>
        <tr>
        <td>3</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(\max\{v[2][0]\}=0\)</span></td>
        </tr>
        <tr>
        <td>3</td>
        <td>1</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(\max\{v[2][1]\}=0\)</span></td>
        </tr>
        <tr>
        <td>3</td>
        <td>2</td>
        <td>3</td>
        <td>1</td>
        <td><span class="arithmatex">\(\max\{v[2][2],\,p[3]{+}v[2][0]\}=\max\{0,3\}=3\)</span></td>
        </tr>
        <tr>
        <td>3</td>
        <td>3</td>
        <td>4</td>
        <td>0</td>
        <td><span class="arithmatex">\(\max\{v[2][3],\,p[3]{+}v[2][1]\}=\max\{4,3\}=4\)</span></td>
        </tr>
        <tr>
        <td>3</td>
        <td>4</td>
        <td>6</td>
        <td>2</td>
        <td><span class="arithmatex">\(\max\{v[2][4],\,p[3]{+}v[2][2],\,2p[3]{+}v[2][0]\}=\max\{5,3,6\}=6\)</span></td>
        </tr>
        <tr>
        <td>3</td>
        <td>5</td>
        <td>7</td>
        <td>1</td>
        <td><span class="arithmatex">\(\max\{v[2][5],\,p[3]{+}v[2][3],\,2p[3]{+}v[2][1]\}=\max\{5,7,6\}=7\)</span></td>
        </tr>
        <tr>
        <td>3</td>
        <td>6</td>
        <td>8</td>
        <td>0</td>
        <td><span class="arithmatex">\(\max\{v[2][6],\,p[3]{+}v[2][4],\,2p[3]{+}v[2][2]\}=\max\{8,8,6\}=8\)</span></td>
        </tr>
        <tr>
        <td>3</td>
        <td>7</td>
        <td>10</td>
        <td>2</td>
        <td><span class="arithmatex">\(\max\{v[2][7],\,p[3]{+}v[2][5],\,2p[3]{+}v[2][3]\}=\max\{9,8,10\}=10\)</span></td>
        </tr>
        <tr>
        <td>3</td>
        <td>8</td>
        <td>11</td>
        <td>1</td>
        <td><span class="arithmatex">\(\max\{v[2][8],\,p[3]{+}v[2][6],\,2p[3]{+}v[2][4]\}=\max\{9,11,11\}=11\)</span></td>
        </tr>
        <tr>
        <td>3</td>
        <td>9</td>
        <td>12</td>
        <td>1</td>
        <td><span class="arithmatex">\(\max\{v[2][9],\,p[3]{+}v[2][7],\,2p[3]{+}v[2][5]\}=\max\{9,12,11\}=12\)</span></td>
        </tr>
        </table></div>

        This is the matrix $v$ after the execution of the DP algorithm:

        $$
        \begin{array}{l|rrrrrrrrrr}
        \hline {v[i][k]} & {k=0} & {k=1} & {k=2} & {k=3} & {k=4} & {k=5} & {k=6} & {k=7} & {k=8} & {k=9} \\
        \hline {i=0} & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 \\
        {i=1} & 0 & 0 & 0 & 4 & 4 & 4 & 8 & 8 & 8 & 8 \\
        {i=2} & 0 & 0 & 0 & 4 & 5 & 5 & 8 & 9 & 9 & 9 \\
        {i=3} & 0 & 0 & 3 & 4 & 6 & 7 & 8 & 10 & 11 & 12 \\
        \hline
        \end{array}
        $$

        This is the matrix $s$ after the execution of the DP algorithm:

        $$
        \begin{array}{l|rrrrrrrrrr}
        \hline {s[i][k]} & {k=0} & {k=1} & {k=2} & {k=3} & {k=4} & {k=5} & {k=6} & {k=7} & {k=8} & {k=9} \\
        \hline {i=0} & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 \\
        {i=1} & 0 & 0 & 0 & 1 & 1 & 1 & 2 & 2 & 2 & 2 \\
        {i=2} & 0 & 0 & 0 & 0 & 1 & 1 & 0 & 1 & 1 & 1 \\
        {i=3} & 0 & 0 & 1 & 0 & 2 & 1 & 0 & 2 & 1 & 1 \\
        \hline
        \end{array}
        $$

    2. We have the following matrix $s$:

        $$
        \begin{array}{l|rrrrrrrrrr}
        \hline {s[i][k]} & {k=0} & {k=1} & {k=2} & {k=3} & {k=4} & {k=5} & {k=6} & {k=7} & {k=8} & {k=9} \\
        \hline {i=0} & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 \\
        {i=1} & 0 & 0 & 0 & 1 & 1 & 1 & 2 & 2 & 2 & 2 \\
        {i=2} & 0 & 0 & 0 & 0 & 1 & 1 & 0 & 1 & 1 & 1 \\
        {i=3} & 0 & 0 & 1 & 0 & 2 & 1 & 0 & 2 & 1 & 1 \\
        \hline
        \end{array}
        $$

        We can reconstruct an optimal solution by starting from $i=3$ and $k=9$ as follows:

        <div class="tabella" markdown="0"><table>
        <tr>
        <th>Iteration</th>
        <th><span class="arithmatex">\(i\)</span></th>
        <th><span class="arithmatex">\(k\)</span></th>
        <th><span class="arithmatex">\(s[i][k]\)</span></th>
        <th><span class="arithmatex">\(x[1]\)</span></th>
        <th><span class="arithmatex">\(x[2]\)</span></th>
        <th><span class="arithmatex">\(x[3]\)</span></th>
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
        <td><span class="arithmatex">\(k=9\)</span></td>
        </tr>
        <tr>
        <td>1</td>
        <td>3</td>
        <td>9</td>
        <td>1</td>
        <td>0</td>
        <td>0</td>
        <td class="cella-blu">1</td>
        <td><span class="arithmatex">\(x[3]\leftarrow 1\)</span>, <span class="arithmatex">\(k\leftarrow 9-1\cdot2=7\)</span></td>
        </tr>
        <tr>
        <td>2</td>
        <td>2</td>
        <td>7</td>
        <td>1</td>
        <td>0</td>
        <td class="cella-blu">1</td>
        <td>1</td>
        <td><span class="arithmatex">\(x[2]\leftarrow 1\)</span>, <span class="arithmatex">\(k\leftarrow 7-1\cdot4=3\)</span></td>
        </tr>
        <tr>
        <td>3</td>
        <td>1</td>
        <td>3</td>
        <td>1</td>
        <td class="cella-blu">1</td>
        <td>1</td>
        <td>1</td>
        <td><span class="arithmatex">\(x[1]\leftarrow 1\)</span>, <span class="arithmatex">\(k\leftarrow 3-1\cdot3=0\)</span></td>
        </tr>
        </table></div>

        Thus, the vector

        $$
        (1,1,1)
        $$

        is an optimal solution. The optimal value is

        $$
        v[3][9]=12.
        $$
