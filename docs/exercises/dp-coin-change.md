---
title: "Exercises · DP for the coin change problem"
---

# Exercises · DP for the coin change problem

<div class="info-capitolo" markdown>

**Exercises · Chapter 27** · each solution opens with a click · [:material-book-open-variant: Chapter 27: Coin change (CCP)](../dynamic-programming/dp-coin-change.md) · [:material-file-pdf-box: Exercises, volume 3 (PDF)](../pdf/exercises-3-dynamic-programming.pdf)

</div>

<a id="esercizio-27-1"></a>

!!! esercizio "Exercise 27.1: Exercise 1: Coin Change Problem"

    Consider the following CCP instance, where the amount of change to return is $c=6$, and the denominations are

    $$
    w=(1,4).
    $$

    **Questions**

    1. Show the execution of the bottom-up DP algorithm by reporting, for each iteration, the values of the array $v$ and the array $s$.

    2. Using the array $s$, reconstruct an optimal solution in integer notation $(x_1,x_2)$, and report the optimal value.

??? soluzione "Solution"

    1. Step-by-step execution of the bottom-up DP algorithm

        For each step of the DP algorithm, the table shows the amount of change $k$, the cells $v[k]$ and $s[k]$, and the operation performed; $s[k]$ is the index $j$ of the denomination of the coin used. In case of ties the smallest index is kept, because $m$ is updated only when the value is strictly smaller.

        <div class="tabella" markdown="0"><table>
        <tr>
        <th><span class="arithmatex">\(k\)</span></th>
        <th><span class="arithmatex">\(v[k]\)</span></th>
        <th><span class="arithmatex">\(s[k]\)</span></th>
        <th>Action</th>
        </tr>
        <tr>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(v[0]\leftarrow 0\)</span>, <span class="arithmatex">\(s[0]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td><span class="arithmatex">\(\min\{1+v[0]\}=\min\{1\}=1\)</span></td>
        </tr>
        <tr>
        <td>2</td>
        <td>2</td>
        <td>1</td>
        <td><span class="arithmatex">\(\min\{1+v[1]\}=\min\{2\}=2\)</span></td>
        </tr>
        <tr>
        <td>3</td>
        <td>3</td>
        <td>1</td>
        <td><span class="arithmatex">\(\min\{1+v[2]\}=\min\{3\}=3\)</span></td>
        </tr>
        <tr>
        <td>4</td>
        <td>1</td>
        <td>2</td>
        <td><span class="arithmatex">\(\min\{1+v[3],\,1+v[0]\}=\min\{4,1\}=1\)</span></td>
        </tr>
        <tr>
        <td>5</td>
        <td>2</td>
        <td>1</td>
        <td><span class="arithmatex">\(\min\{1+v[4],\,1+v[1]\}=\min\{2,2\}=2\)</span></td>
        </tr>
        <tr>
        <td>6</td>
        <td>3</td>
        <td>1</td>
        <td><span class="arithmatex">\(\min\{1+v[5],\,1+v[2]\}=\min\{3,3\}=3\)</span></td>
        </tr>
        </table></div>

        This is the array $v$ after the execution of the DP algorithm:

        $$
        \begin{array}{l|rrrrrrr}
        \hline {k} & 0 & 1 & 2 & 3 & 4 & 5 & 6 \\
        \hline {v[k]} & 0 & 1 & 2 & 3 & 1 & 2 & 3 \\
        \hline
        \end{array}
        $$

        This is the array $s$ after the execution of the DP algorithm:

        $$
        \begin{array}{l|rrrrrrr}
        \hline {k} & 0 & 1 & 2 & 3 & 4 & 5 & 6 \\
        \hline {s[k]} & 0 & 1 & 1 & 1 & 2 & 1 & 1 \\
        \hline
        \end{array}
        $$

    2. We have the following array $s$:

        $$
        \begin{array}{l|rrrrrrr}
        \hline {k} & 0 & 1 & 2 & 3 & 4 & 5 & 6 \\
        \hline {s[k]} & 0 & 1 & 1 & 1 & 2 & 1 & 1 \\
        \hline
        \end{array}
        $$

        We can reconstruct an optimal solution by starting from $k=6$ as follows:

        <div class="tabella" markdown="0"><table>
        <tr>
        <th>Iteration</th>
        <th><span class="arithmatex">\(k\)</span></th>
        <th><span class="arithmatex">\(s[k]\)</span></th>
        <th><span class="arithmatex">\(x[1]\)</span></th>
        <th><span class="arithmatex">\(x[2]\)</span></th>
        <th><span class="arithmatex">\(k \leftarrow k-w_{s[k]}\)</span></th>
        </tr>
        <tr>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(k=6\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td class="cella-blu">1</td>
        <td>0</td>
        <td><span class="arithmatex">\(k=6-1=5\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td class="cella-blu">2</td>
        <td>0</td>
        <td><span class="arithmatex">\(k=5-1=4\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td>2</td>
        <td class="cella-blu">1</td>
        <td><span class="arithmatex">\(k=4-4=0\)</span></td>
        </tr>
        </table></div>

        Thus, the vector

        $$
        (2,1)
        $$

        is an optimal solution: its total value is $2\cdot1+1\cdot4=6=c$. The optimal value is

        $$
        v[6]=3.
        $$

<a id="esercizio-27-2"></a>

!!! esercizio "Exercise 27.2: Exercise 2: Coin Change Problem"

    Consider the following CCP instance, where the amount of change to return is $c=11$, and the denominations are

    $$
    w=(3,5).
    $$

    **Questions**

    1. Show the execution of the bottom-up DP algorithm by reporting, for each iteration, the values of the array $v$ and the array $s$.

    2. Using the array $s$, reconstruct an optimal solution in integer notation $(x_1,x_2)$, and report the optimal value.

??? soluzione "Solution"

    1. Step-by-step execution of the bottom-up DP algorithm

        For each step of the DP algorithm, the table shows the amount of change $k$, the cells $v[k]$ and $s[k]$, and the operation performed; $s[k]$ is the index $j$ of the denomination of the coin used. In case of ties the smallest index is kept, because $m$ is updated only when the value is strictly smaller. The value $+\infty$ denotes an amount of change that cannot be returned, for which $s[k]=0$.

        <div class="tabella" markdown="0"><table>
        <tr>
        <th><span class="arithmatex">\(k\)</span></th>
        <th><span class="arithmatex">\(v[k]\)</span></th>
        <th><span class="arithmatex">\(s[k]\)</span></th>
        <th>Action</th>
        </tr>
        <tr>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(v[0]\leftarrow 0\)</span>, <span class="arithmatex">\(s[0]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>1</td>
        <td><span class="arithmatex">\(+\infty\)</span></td>
        <td>0</td>
        <td>no denomination <span class="arithmatex">\(w_j\le 1\)</span>: <span class="arithmatex">\(v[1]\leftarrow +\infty\)</span></td>
        </tr>
        <tr>
        <td>2</td>
        <td><span class="arithmatex">\(+\infty\)</span></td>
        <td>0</td>
        <td>no denomination <span class="arithmatex">\(w_j\le 2\)</span>: <span class="arithmatex">\(v[2]\leftarrow +\infty\)</span></td>
        </tr>
        <tr>
        <td>3</td>
        <td>1</td>
        <td>1</td>
        <td><span class="arithmatex">\(\min\{1+v[0]\}=\min\{1\}=1\)</span></td>
        </tr>
        <tr>
        <td>4</td>
        <td><span class="arithmatex">\(+\infty\)</span></td>
        <td>0</td>
        <td><span class="arithmatex">\(\min\{1+v[1]\}=\min\{+\infty\}=+\infty\)</span></td>
        </tr>
        <tr>
        <td>5</td>
        <td>1</td>
        <td>2</td>
        <td><span class="arithmatex">\(\min\{1+v[2],\,1+v[0]\}=\min\{+\infty,1\}=1\)</span></td>
        </tr>
        <tr>
        <td>6</td>
        <td>2</td>
        <td>1</td>
        <td><span class="arithmatex">\(\min\{1+v[3],\,1+v[1]\}=\min\{2,+\infty\}=2\)</span></td>
        </tr>
        <tr>
        <td>7</td>
        <td><span class="arithmatex">\(+\infty\)</span></td>
        <td>0</td>
        <td><span class="arithmatex">\(\min\{1+v[4],\,1+v[2]\}=\min\{+\infty,+\infty\}=+\infty\)</span></td>
        </tr>
        <tr>
        <td>8</td>
        <td>2</td>
        <td>1</td>
        <td><span class="arithmatex">\(\min\{1+v[5],\,1+v[3]\}=\min\{2,2\}=2\)</span></td>
        </tr>
        <tr>
        <td>9</td>
        <td>3</td>
        <td>1</td>
        <td><span class="arithmatex">\(\min\{1+v[6],\,1+v[4]\}=\min\{3,+\infty\}=3\)</span></td>
        </tr>
        <tr>
        <td>10</td>
        <td>2</td>
        <td>2</td>
        <td><span class="arithmatex">\(\min\{1+v[7],\,1+v[5]\}=\min\{+\infty,2\}=2\)</span></td>
        </tr>
        <tr>
        <td>11</td>
        <td>3</td>
        <td>1</td>
        <td><span class="arithmatex">\(\min\{1+v[8],\,1+v[6]\}=\min\{3,3\}=3\)</span></td>
        </tr>
        </table></div>

        This is the array $v$ after the execution of the DP algorithm:

        $$
        \begin{array}{l|rrrrrrrrrrrr}
        \hline {k} & 0 & 1 & 2 & 3 & 4 & 5 & 6 & 7 & 8 & 9 & 10 & 11 \\
        \hline {v[k]} & 0 & {+\infty} & {+\infty} & 1 & {+\infty} & 1 & 2 & {+\infty} & 2 & 3 & 2 & 3 \\
        \hline
        \end{array}
        $$

        This is the array $s$ after the execution of the DP algorithm:

        $$
        \begin{array}{l|rrrrrrrrrrrr}
        \hline {k} & 0 & 1 & 2 & 3 & 4 & 5 & 6 & 7 & 8 & 9 & 10 & 11 \\
        \hline {s[k]} & 0 & 0 & 0 & 1 & 0 & 2 & 1 & 0 & 1 & 1 & 2 & 1 \\
        \hline
        \end{array}
        $$

    2. We have the following array $s$:

        $$
        \begin{array}{l|rrrrrrrrrrrr}
        \hline {k} & 0 & 1 & 2 & 3 & 4 & 5 & 6 & 7 & 8 & 9 & 10 & 11 \\
        \hline {s[k]} & 0 & 0 & 0 & 1 & 0 & 2 & 1 & 0 & 1 & 1 & 2 & 1 \\
        \hline
        \end{array}
        $$

        We can reconstruct an optimal solution by starting from $k=11$ as follows:

        <div class="tabella" markdown="0"><table>
        <tr>
        <th>Iteration</th>
        <th><span class="arithmatex">\(k\)</span></th>
        <th><span class="arithmatex">\(s[k]\)</span></th>
        <th><span class="arithmatex">\(x[1]\)</span></th>
        <th><span class="arithmatex">\(x[2]\)</span></th>
        <th><span class="arithmatex">\(k \leftarrow k-w_{s[k]}\)</span></th>
        </tr>
        <tr>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(k=11\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(11\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td class="cella-blu">1</td>
        <td>0</td>
        <td><span class="arithmatex">\(k=11-3=8\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(8\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td class="cella-blu">2</td>
        <td>0</td>
        <td><span class="arithmatex">\(k=8-3=5\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td>2</td>
        <td class="cella-blu">1</td>
        <td><span class="arithmatex">\(k=5-5=0\)</span></td>
        </tr>
        </table></div>

        Thus, the vector

        $$
        (2,1)
        $$

        is an optimal solution: its total value is $2\cdot3+1\cdot5=11=c$. The optimal value is

        $$
        v[11]=3.
        $$

<a id="esercizio-27-3"></a>

!!! esercizio "Exercise 27.3: Exercise 3: Coin Change Problem"

    Consider the following CCP instance, where the amount of change to return is $c=7$, and the denominations are

    $$
    w=(2,4).
    $$

    **Questions**

    1. Show the execution of the bottom-up DP algorithm by reporting, for each iteration, the values of the array $v$ and the array $s$.

    2. Using the array $s$, reconstruct an optimal solution in integer notation $(x_1,x_2)$, or explain why the instance is infeasible, and report the optimal value.

??? soluzione "Solution"

    1. Step-by-step execution of the bottom-up DP algorithm

        For each step of the DP algorithm, the table shows the amount of change $k$, the cells $v[k]$ and $s[k]$, and the operation performed; $s[k]$ is the index $j$ of the denomination of the coin used. In case of ties the smallest index is kept, because $m$ is updated only when the value is strictly smaller. The value $+\infty$ denotes an amount of change that cannot be returned, for which $s[k]=0$.

        <div class="tabella" markdown="0"><table>
        <tr>
        <th><span class="arithmatex">\(k\)</span></th>
        <th><span class="arithmatex">\(v[k]\)</span></th>
        <th><span class="arithmatex">\(s[k]\)</span></th>
        <th>Action</th>
        </tr>
        <tr>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(v[0]\leftarrow 0\)</span>, <span class="arithmatex">\(s[0]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>1</td>
        <td><span class="arithmatex">\(+\infty\)</span></td>
        <td>0</td>
        <td>no denomination <span class="arithmatex">\(w_j\le 1\)</span>: <span class="arithmatex">\(v[1]\leftarrow +\infty\)</span></td>
        </tr>
        <tr>
        <td>2</td>
        <td>1</td>
        <td>1</td>
        <td><span class="arithmatex">\(\min\{1+v[0]\}=\min\{1\}=1\)</span></td>
        </tr>
        <tr>
        <td>3</td>
        <td><span class="arithmatex">\(+\infty\)</span></td>
        <td>0</td>
        <td><span class="arithmatex">\(\min\{1+v[1]\}=\min\{+\infty\}=+\infty\)</span></td>
        </tr>
        <tr>
        <td>4</td>
        <td>1</td>
        <td>2</td>
        <td><span class="arithmatex">\(\min\{1+v[2],\,1+v[0]\}=\min\{2,1\}=1\)</span></td>
        </tr>
        <tr>
        <td>5</td>
        <td><span class="arithmatex">\(+\infty\)</span></td>
        <td>0</td>
        <td><span class="arithmatex">\(\min\{1+v[3],\,1+v[1]\}=\min\{+\infty,+\infty\}=+\infty\)</span></td>
        </tr>
        <tr>
        <td>6</td>
        <td>2</td>
        <td>1</td>
        <td><span class="arithmatex">\(\min\{1+v[4],\,1+v[2]\}=\min\{2,2\}=2\)</span></td>
        </tr>
        <tr>
        <td>7</td>
        <td><span class="arithmatex">\(+\infty\)</span></td>
        <td>0</td>
        <td><span class="arithmatex">\(\min\{1+v[5],\,1+v[3]\}=\min\{+\infty,+\infty\}=+\infty\)</span></td>
        </tr>
        </table></div>

        This is the array $v$ after the execution of the DP algorithm:

        $$
        \begin{array}{l|rrrrrrrr}
        \hline {k} & 0 & 1 & 2 & 3 & 4 & 5 & 6 & 7 \\
        \hline {v[k]} & 0 & {+\infty} & 1 & {+\infty} & 1 & {+\infty} & 2 & {+\infty} \\
        \hline
        \end{array}
        $$

        This is the array $s$ after the execution of the DP algorithm:

        $$
        \begin{array}{l|rrrrrrrr}
        \hline {k} & 0 & 1 & 2 & 3 & 4 & 5 & 6 & 7 \\
        \hline {s[k]} & 0 & 0 & 1 & 0 & 2 & 0 & 1 & 0 \\
        \hline
        \end{array}
        $$

    2. Since $v[7]=+\infty$, the instance is <strong>infeasible</strong>: no combination of coins of denominations $w=(2,4)$ returns an amount of change exactly equal to $c=7$. Indeed, every denomination is even, so every amount of change that can be returned is even, while $c=7$ is odd.

        Since $s[7]=0$, there is no solution to reconstruct. The optimal value is

        $$
        v[7]=+\infty.
        $$

<a id="esercizio-27-4"></a>

!!! esercizio "Exercise 27.4: Exercise 4: Coin Change Problem"

    Consider the following CCP instance, where the amount of change to return is $c=12$, and the denominations are

    $$
    w=(3,7).
    $$

    **Questions**

    1. Show the execution of the bottom-up DP algorithm by reporting, for each iteration, the values of the array $v$ and the array $s$.

    2. Using the array $s$, reconstruct an optimal solution in integer notation $(x_1,x_2)$, and report the optimal value.

??? soluzione "Solution"

    1. Step-by-step execution of the bottom-up DP algorithm

        For each step of the DP algorithm, the table shows the amount of change $k$, the cells $v[k]$ and $s[k]$, and the operation performed; $s[k]$ is the index $j$ of the denomination of the coin used. In case of ties the smallest index is kept, because $m$ is updated only when the value is strictly smaller. The value $+\infty$ denotes an amount of change that cannot be returned, for which $s[k]=0$.

        <div class="tabella" markdown="0"><table>
        <tr>
        <th><span class="arithmatex">\(k\)</span></th>
        <th><span class="arithmatex">\(v[k]\)</span></th>
        <th><span class="arithmatex">\(s[k]\)</span></th>
        <th>Action</th>
        </tr>
        <tr>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(v[0]\leftarrow 0\)</span>, <span class="arithmatex">\(s[0]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>1</td>
        <td><span class="arithmatex">\(+\infty\)</span></td>
        <td>0</td>
        <td>no denomination <span class="arithmatex">\(w_j\le 1\)</span>: <span class="arithmatex">\(v[1]\leftarrow +\infty\)</span></td>
        </tr>
        <tr>
        <td>2</td>
        <td><span class="arithmatex">\(+\infty\)</span></td>
        <td>0</td>
        <td>no denomination <span class="arithmatex">\(w_j\le 2\)</span>: <span class="arithmatex">\(v[2]\leftarrow +\infty\)</span></td>
        </tr>
        <tr>
        <td>3</td>
        <td>1</td>
        <td>1</td>
        <td><span class="arithmatex">\(\min\{1+v[0]\}=\min\{1\}=1\)</span></td>
        </tr>
        <tr>
        <td>4</td>
        <td><span class="arithmatex">\(+\infty\)</span></td>
        <td>0</td>
        <td><span class="arithmatex">\(\min\{1+v[1]\}=\min\{+\infty\}=+\infty\)</span></td>
        </tr>
        <tr>
        <td>5</td>
        <td><span class="arithmatex">\(+\infty\)</span></td>
        <td>0</td>
        <td><span class="arithmatex">\(\min\{1+v[2]\}=\min\{+\infty\}=+\infty\)</span></td>
        </tr>
        <tr>
        <td>6</td>
        <td>2</td>
        <td>1</td>
        <td><span class="arithmatex">\(\min\{1+v[3]\}=\min\{2\}=2\)</span></td>
        </tr>
        <tr>
        <td>7</td>
        <td>1</td>
        <td>2</td>
        <td><span class="arithmatex">\(\min\{1+v[4],\,1+v[0]\}=\min\{+\infty,1\}=1\)</span></td>
        </tr>
        <tr>
        <td>8</td>
        <td><span class="arithmatex">\(+\infty\)</span></td>
        <td>0</td>
        <td><span class="arithmatex">\(\min\{1+v[5],\,1+v[1]\}=\min\{+\infty,+\infty\}=+\infty\)</span></td>
        </tr>
        <tr>
        <td>9</td>
        <td>3</td>
        <td>1</td>
        <td><span class="arithmatex">\(\min\{1+v[6],\,1+v[2]\}=\min\{3,+\infty\}=3\)</span></td>
        </tr>
        <tr>
        <td>10</td>
        <td>2</td>
        <td>1</td>
        <td><span class="arithmatex">\(\min\{1+v[7],\,1+v[3]\}=\min\{2,2\}=2\)</span></td>
        </tr>
        <tr>
        <td>11</td>
        <td><span class="arithmatex">\(+\infty\)</span></td>
        <td>0</td>
        <td><span class="arithmatex">\(\min\{1+v[8],\,1+v[4]\}=\min\{+\infty,+\infty\}=+\infty\)</span></td>
        </tr>
        <tr>
        <td>12</td>
        <td>4</td>
        <td>1</td>
        <td><span class="arithmatex">\(\min\{1+v[9],\,1+v[5]\}=\min\{4,+\infty\}=4\)</span></td>
        </tr>
        </table></div>

        This is the array $v$ after the execution of the DP algorithm:

        $$
        \begin{array}{l|rrrrrrrrrrrrr}
        \hline {k} & 0 & 1 & 2 & 3 & 4 & 5 & 6 & 7 & 8 & 9 & 10 & 11 & 12 \\
        \hline {v[k]} & 0 & {+\infty} & {+\infty} & 1 & {+\infty} & {+\infty} & 2 & 1 & {+\infty} & 3 & 2 & {+\infty} & 4 \\
        \hline
        \end{array}
        $$

        This is the array $s$ after the execution of the DP algorithm:

        $$
        \begin{array}{l|rrrrrrrrrrrrr}
        \hline {k} & 0 & 1 & 2 & 3 & 4 & 5 & 6 & 7 & 8 & 9 & 10 & 11 & 12 \\
        \hline {s[k]} & 0 & 0 & 0 & 1 & 0 & 0 & 1 & 2 & 0 & 1 & 1 & 0 & 1 \\
        \hline
        \end{array}
        $$

    2. We have the following array $s$:

        $$
        \begin{array}{l|rrrrrrrrrrrrr}
        \hline {k} & 0 & 1 & 2 & 3 & 4 & 5 & 6 & 7 & 8 & 9 & 10 & 11 & 12 \\
        \hline {s[k]} & 0 & 0 & 0 & 1 & 0 & 0 & 1 & 2 & 0 & 1 & 1 & 0 & 1 \\
        \hline
        \end{array}
        $$

        We can reconstruct an optimal solution by starting from $k=12$ as follows:

        <div class="tabella" markdown="0"><table>
        <tr>
        <th>Iteration</th>
        <th><span class="arithmatex">\(k\)</span></th>
        <th><span class="arithmatex">\(s[k]\)</span></th>
        <th><span class="arithmatex">\(x[1]\)</span></th>
        <th><span class="arithmatex">\(x[2]\)</span></th>
        <th><span class="arithmatex">\(k \leftarrow k-w_{s[k]}\)</span></th>
        </tr>
        <tr>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(k=12\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(12\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td class="cella-blu">1</td>
        <td>0</td>
        <td><span class="arithmatex">\(k=12-3=9\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(9\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td class="cella-blu">2</td>
        <td>0</td>
        <td><span class="arithmatex">\(k=9-3=6\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td class="cella-blu">3</td>
        <td>0</td>
        <td><span class="arithmatex">\(k=6-3=3\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td class="cella-blu">4</td>
        <td>0</td>
        <td><span class="arithmatex">\(k=3-3=0\)</span></td>
        </tr>
        </table></div>

        Thus, the vector

        $$
        (4,0)
        $$

        is an optimal solution: its total value is $4\cdot3=12=c$. The optimal value is

        $$
        v[12]=4.
        $$

<a id="esercizio-27-5"></a>

!!! esercizio "Exercise 27.5: Exercise 5: Coin Change Problem"

    Consider the following CCP instance, where the amount of change to return is $c=9$, and the denominations are

    $$
    w=(2,3,7).
    $$

    **Questions**

    1. Show the execution of the bottom-up DP algorithm by reporting, for each iteration, the values of the array $v$ and the array $s$.

    2. Using the array $s$, reconstruct an optimal solution in integer notation $(x_1,x_2,x_3)$, and report the optimal value.

??? soluzione "Solution"

    1. Step-by-step execution of the bottom-up DP algorithm

        For each step of the DP algorithm, the table shows the amount of change $k$, the cells $v[k]$ and $s[k]$, and the operation performed; $s[k]$ is the index $j$ of the denomination of the coin used. In case of ties the smallest index is kept, because $m$ is updated only when the value is strictly smaller. The value $+\infty$ denotes an amount of change that cannot be returned, for which $s[k]=0$.

        <div class="tabella" markdown="0"><table>
        <tr>
        <th><span class="arithmatex">\(k\)</span></th>
        <th><span class="arithmatex">\(v[k]\)</span></th>
        <th><span class="arithmatex">\(s[k]\)</span></th>
        <th>Action</th>
        </tr>
        <tr>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(v[0]\leftarrow 0\)</span>, <span class="arithmatex">\(s[0]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>1</td>
        <td><span class="arithmatex">\(+\infty\)</span></td>
        <td>0</td>
        <td>no denomination <span class="arithmatex">\(w_j\le 1\)</span>: <span class="arithmatex">\(v[1]\leftarrow +\infty\)</span></td>
        </tr>
        <tr>
        <td>2</td>
        <td>1</td>
        <td>1</td>
        <td><span class="arithmatex">\(\min\{1+v[0]\}=\min\{1\}=1\)</span></td>
        </tr>
        <tr>
        <td>3</td>
        <td>1</td>
        <td>2</td>
        <td><span class="arithmatex">\(\min\{1+v[1],\,1+v[0]\}=\min\{+\infty,1\}=1\)</span></td>
        </tr>
        <tr>
        <td>4</td>
        <td>2</td>
        <td>1</td>
        <td><span class="arithmatex">\(\min\{1+v[2],\,1+v[1]\}=\min\{2,+\infty\}=2\)</span></td>
        </tr>
        <tr>
        <td>5</td>
        <td>2</td>
        <td>1</td>
        <td><span class="arithmatex">\(\min\{1+v[3],\,1+v[2]\}=\min\{2,2\}=2\)</span></td>
        </tr>
        <tr>
        <td>6</td>
        <td>2</td>
        <td>2</td>
        <td><span class="arithmatex">\(\min\{1+v[4],\,1+v[3]\}=\min\{3,2\}=2\)</span></td>
        </tr>
        <tr>
        <td>7</td>
        <td>1</td>
        <td>3</td>
        <td><span class="arithmatex">\(\min\{1+v[5],\,1+v[4],\,1+v[0]\}=\min\{3,3,1\}=1\)</span></td>
        </tr>
        <tr>
        <td>8</td>
        <td>3</td>
        <td>1</td>
        <td><span class="arithmatex">\(\min\{1+v[6],\,1+v[5],\,1+v[1]\}=\min\{3,3,+\infty\}=3\)</span></td>
        </tr>
        <tr>
        <td>9</td>
        <td>2</td>
        <td>1</td>
        <td><span class="arithmatex">\(\min\{1+v[7],\,1+v[6],\,1+v[2]\}=\min\{2,3,2\}=2\)</span></td>
        </tr>
        </table></div>

        This is the array $v$ after the execution of the DP algorithm:

        $$
        \begin{array}{l|rrrrrrrrrr}
        \hline {k} & 0 & 1 & 2 & 3 & 4 & 5 & 6 & 7 & 8 & 9 \\
        \hline {v[k]} & 0 & {+\infty} & 1 & 1 & 2 & 2 & 2 & 1 & 3 & 2 \\
        \hline
        \end{array}
        $$

        This is the array $s$ after the execution of the DP algorithm:

        $$
        \begin{array}{l|rrrrrrrrrr}
        \hline {k} & 0 & 1 & 2 & 3 & 4 & 5 & 6 & 7 & 8 & 9 \\
        \hline {s[k]} & 0 & 0 & 1 & 2 & 1 & 1 & 2 & 3 & 1 & 1 \\
        \hline
        \end{array}
        $$

    2. We have the following array $s$:

        $$
        \begin{array}{l|rrrrrrrrrr}
        \hline {k} & 0 & 1 & 2 & 3 & 4 & 5 & 6 & 7 & 8 & 9 \\
        \hline {s[k]} & 0 & 0 & 1 & 2 & 1 & 1 & 2 & 3 & 1 & 1 \\
        \hline
        \end{array}
        $$

        We can reconstruct an optimal solution by starting from $k=9$ as follows:

        <div class="tabella" markdown="0"><table>
        <tr>
        <th>Iteration</th>
        <th><span class="arithmatex">\(k\)</span></th>
        <th><span class="arithmatex">\(s[k]\)</span></th>
        <th><span class="arithmatex">\(x[1]\)</span></th>
        <th><span class="arithmatex">\(x[2]\)</span></th>
        <th><span class="arithmatex">\(x[3]\)</span></th>
        <th><span class="arithmatex">\(k \leftarrow k-w_{s[k]}\)</span></th>
        </tr>
        <tr>
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
        <td><span class="arithmatex">\(9\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td class="cella-blu">1</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(k=9-2=7\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(7\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td>1</td>
        <td>0</td>
        <td class="cella-blu">1</td>
        <td><span class="arithmatex">\(k=7-7=0\)</span></td>
        </tr>
        </table></div>

        Thus, the vector

        $$
        (1,0,1)
        $$

        is an optimal solution: its total value is $1\cdot2+1\cdot7=9=c$. The optimal value is

        $$
        v[9]=2.
        $$
