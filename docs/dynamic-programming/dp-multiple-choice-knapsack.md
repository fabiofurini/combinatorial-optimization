---
title: "DP for the multiple-choice knapsack problem"
---

# DP for the multiple-choice knapsack problem

<div class="info-capitolo" markdown>

**Part 3 · Dynamic programming · Chapter 21** · [:material-file-pdf-box: Lecture notes, volume 3 (PDF)](../pdf/lecture-notes-3-dynamic-programming.pdf) · [:material-presentation: Slides](../pdf/slides-dp-multiple-choice-knapsack.pdf) · [:material-pencil: Exercises: Multiple-choice knapsack (MCKP)](../exercises/dp-multiple-choice-knapsack.md)

</div>

!!! nota "Prerequisites"

    - From this module, the chapter [«DP for the 0/1 knapsack problem»](https://fabiofurini.github.io/combinatorial-optimization/dynamic-programming/dp-knapsack/): the recurrence $v(j,k)$ of the 0/1 knapsack problem (KP) over items and capacities, the matrix $s$ of the decisions and the reconstruction of a solution.

    - From this module, the chapter [«Knapsack problems»](https://fabiofurini.github.io/combinatorial-optimization/combinatorial-optimization-problems/knapsack/the-multiple-choice-knapsack-problem/): the multiple-choice knapsack problem, its classes $\mathscr{J}_h$ and its feasibility condition.

    - From the module <em>Algorithms</em>: [pseudocode conventions (Chapter 2)](https://fabiofurini.github.io/algorithms/basic-algorithms/02-pseudo-code/) and [the size of the input (Chapter 11)](https://fabiofurini.github.io/algorithms/analysis/11-input-size/).

!!! chiave "Objectives"

    At the end of this chapter you will be able to:

    - write the recurrence $v(h,k)$ over the classes and the capacities, with the value $-\infty$ for the subinstances without a feasible solution;

    - run the DP algorithm by hand, trying every item of class $h$ that fits;

    - fill the matrix $s$ of the chosen items and reconstruct an optimal solution, one item per class;

    - count the $\Theta(nc)$ steps of the DP algorithm.

The problem of this chapter is the [multiple-choice knapsack problem (MCKP)](https://fabiofurini.github.io/combinatorial-optimization/catalogue/multiple-choice-knapsack-problem/): its definition and its assumptions are on its page.

## 21.1 A DP algorithm

<a id="box-1-texmckpex1"></a>

!!! esempio "Example 21.1: MCKP instance"

    We consider a knapsack of capacity $c=10$ and a set $\mathscr{I}=\{1,2,\dots,7\}$ of $7$ items ($n=7$), partitioned into $q=3$ classes: $\mathscr{J}_1=\{1,2\}$, $\mathscr{J}_2=\{3,4,5\}$ and $\mathscr{J}_3=\{6,7\}$. The profits and weights are:

    $$
    \begin{array}{l|rr|rrr|rr}
    \hline  & {j=1} & {j=2} & {j=3} & {j=4} & {j=5} & {j=6} & {j=7} \\
    \hline {p_j} & 4 & 8 & 3 & 5 & 7 & 3 & 7 \\
    {w_j} & 1 & 4 & 1 & 2 & 5 & 2 & 3 \\
    \hline
    \end{array}
    $$

    We refer to this MCKP instance as <span style="color:#1971c2">[Example 21.1](#box-1-texmckpex1)</span>.

- A feasible solution chooses exactly one item in each class, so it is described by the selected subset $S\subseteq\mathscr{I}$, with $|S\cap\mathscr{J}_h|=1$ for every class $h$, or by the binary vector $(x_1,x_2,\dots,x_n)$ of $S$.

- The classes are the stages of the DP algorithm: class $h$ is decided after the classes $1,2,\dots,h-1$, and its decision is the item chosen in it.

- <u>Step 1</u>: computation of the optimal value

    !!! formula ""

        For any $h \in \{0,1,\dots,q\}$ and $k \in \{0,1,\dots,c\}$, let $v(h,k)$ be the optimal value of the MCKP subinstance given by:

        1. a knapsack of capacity $k$,

        2. the classes $\mathscr{J}_1,\mathscr{J}_2,\dots,\mathscr{J}_h$,

        3. for each item $j \in \mathscr{J}_1\cup\mathscr{J}_2\cup\dots\cup\mathscr{J}_h$, a profit $p_j$ and a weight $w_j$,

        with $v(h,k)=-\infty$ if this subinstance has no feasible solution.

        The recursive formula to compute $v(h,k)$ reads as follows:

        \begin{equation*}
        \label{eq:mckp}
        v(h,k)= \left\{ \begin{array}{ll}
        0 & \textrm{if $h=0$,}\\[2ex]
        -\infty & \begin{array}[t]{@{}l@{}}\textrm{if $h\ge 1$ and}\\ \textrm{$\forall j\in\mathscr{J}_h$: $w_j>k$,}\end{array}\\[4ex]
        \displaystyle \max_{j \in \mathscr{J}_h:\, w_j \le k} \big\{ p_j + v(h-1,k-w_j) \big\} & \begin{array}[t]{@{}l@{}}\textrm{if $h\ge 1$ and}\\ \textrm{$\exists j\in\mathscr{J}_h$: $w_j\le k$.}\end{array}
        \end{array} \right. \tag{21.1}
        \end{equation*}

    - The value $-\infty$ follows the rules $p_j+(-\infty)=-\infty$ and $\max\{-\infty,a\}=a$: a subinstance without feasible solutions never gives a better value.

    - The base cases are $v(0,k)=0$ for every $k$: with no class, the empty subset is feasible and has profit $0$, whatever the capacity.

    - The formula $\eqref{eq:mckp}$ generates at most $|\mathscr{J}_h|$ <strong>independent subproblems</strong>, one for each item $j$ of class $h$ that fits in capacity $k$: the residual subproblem has the classes $1,2,\dots,h-1$ and the capacity $k-w_j$.

    - Hence, an optimal solution for $(h,k)$ is built by combining the best item $j$ of class $h$ with an optimal solution of its residual subproblem.

        $\rightsquigarrow$ <strong>Optimal Substructure verified!</strong>

    - Different choices in the classes $h,h+1,\dots,q$ can leave the same residual capacity, and therefore the same value $v(h,k)$ may be needed several times during the recursive evaluation of formula $\eqref{eq:mckp}$.

        $\rightsquigarrow$ <strong>Overlapping Subproblems verified!</strong>

    - The value $v(h,k)$ depends only on values $v(h-1,k')$ with $k'< k$. Therefore, the <strong>bottom-up approach</strong> computes the rows $h=0,1,\dots,q$ in this order, each one for increasing $k$, and stores every value in a <strong>lookup table</strong>.

    - The optimal value of the MCKP instance is $v(q,c)$, and the instance is infeasible if and only if $v(q,c)=-\infty$.

- <u>Step 2</u>: computation of an optimal solution

    - For each class $h$ and capacity $k$, we store $s[h][k]$, the item of class $h$ chosen in an optimal solution of the subinstance $(h,k)$, that is, the item that maximizes the right-hand side of formula $\eqref{eq:mckp}$.

    - If $v[h][k]=-\infty$, no item is chosen and $s[h][k]=0$.

    This is the pseudo-code of the <strong>DP algorithm using the bottom-up approach</strong>, which stores the matrix $s$ together with the matrix $v$:

    !!! algoritmo "Algorithm: MCKP\_DP"

        <div class="pseudocodice" markdown="0"><div class="pc" style="--liv:0"><strong>Input:</strong> An MCKP instance given by <span class="arithmatex">\(q\)</span>, the classes <span class="arithmatex">\(\mathscr{J}_1,\dots,\mathscr{J}_q\)</span>, arrays <span class="arithmatex">\(p[1..n]\)</span>, <span class="arithmatex">\(w[1..n]\)</span>, and capacity <span class="arithmatex">\(c\)</span></div><div class="pc" style="--liv:0"><strong>Output:</strong> The optimal value of the MCKP instance and the matrix <span class="arithmatex">\(s[0..q][0..c]\)</span></div><div class="pc" style="--liv:0"><span class="pc-n">1</span><strong>Function</strong> MCKP_DP(<span class="arithmatex">\(q,\mathscr{J},p,w,c\)</span>)</div><div class="pc" style="--liv:1" id="box-2-mckpbu-a"><span class="pc-n">2</span><span class="arithmatex">\(v := \textnormal{new array}[0..q][0..c]\)</span>; <span class="arithmatex">\(s := \textnormal{new array}[0..q][0..c]\)</span></div><div class="pc" style="--liv:1" id="box-3-mckpbu-b"><span class="pc-n">3</span><strong>for</strong> <span class="arithmatex">\(k := 0\)</span> <strong>to</strong> <span class="arithmatex">\(c\)</span>  <strong>do</strong></div><div class="pc" style="--liv:2" id="box-4-mckpbu-c"><span class="pc-n">4</span><span class="arithmatex">\(v[0][k] \leftarrow 0\)</span>; <span class="arithmatex">\(s[0][k] \leftarrow 0\)</span></div><div class="pc" style="--liv:1"><span class="pc-n">5</span><strong>end</strong></div><div class="pc" style="--liv:1" id="box-5-mckpbu-d"><span class="pc-n">6</span><strong>for</strong> <span class="arithmatex">\(h := 1\)</span> <strong>to</strong> <span class="arithmatex">\(q\)</span>  <strong>do</strong></div><div class="pc" style="--liv:2" id="box-6-mckpbu-e"><span class="pc-n">7</span><strong>for</strong> <span class="arithmatex">\(k := 0\)</span> <strong>to</strong> <span class="arithmatex">\(c\)</span>  <strong>do</strong></div><div class="pc" style="--liv:3" id="box-7-mckpbu-f"><span class="pc-n">8</span><span class="arithmatex">\(m := -\infty\)</span>; <span class="arithmatex">\(t := 0\)</span></div><div class="pc" style="--liv:3" id="box-8-mckpbu-g"><span class="pc-n">9</span><strong>for each</strong> <span class="arithmatex">\(j \in \mathscr{J}_h\)</span>  <strong>do</strong></div><div class="pc" style="--liv:4" id="box-9-mckpbu-h"><span class="pc-n">10</span><strong>if</strong> <span class="arithmatex">\(w[j]\le k\)</span> and <span class="arithmatex">\(p[j]+v[h-1][k-w[j]] > m\)</span>  <strong>then</strong></div><div class="pc" style="--liv:5" id="box-10-mckpbu-i"><span class="pc-n">11</span><span class="arithmatex">\(m \leftarrow p[j]+v[h-1][k-w[j]]\)</span>; <span class="arithmatex">\(t \leftarrow j\)</span></div><div class="pc" style="--liv:4"><span class="pc-n">12</span><strong>end</strong></div><div class="pc" style="--liv:3"><span class="pc-n">13</span><strong>end</strong></div><div class="pc" style="--liv:3" id="box-11-mckpbu-j"><span class="pc-n">14</span><span class="arithmatex">\(v[h][k] \leftarrow m\)</span>; <span class="arithmatex">\(s[h][k] \leftarrow t\)</span></div><div class="pc" style="--liv:2"><span class="pc-n">15</span><strong>end</strong></div><div class="pc" style="--liv:1"><span class="pc-n">16</span><strong>end</strong></div><div class="pc" style="--liv:1" id="box-12-mckpbu-k"><span class="pc-n">17</span><strong>return</strong> <span class="arithmatex">\(v[q][c], s\)</span></div></div>

    - The variable $m$ starts from $-\infty$, not from $0$: exactly one item of class $h$ must be chosen, so the value of an empty choice is not available.

    - The innermost loop tries every item $j$ of class $h$ that fits, keeps in $m$ the largest value found so far, and in $t$ the item that gives it.

    - If no item of class $h$ gives a value larger than $-\infty$, the cell keeps $v[h][k]=-\infty$ and $s[h][k]=0$.

    - In case of ties the item met first in $\mathscr{J}_h$ is kept, because $m$ is updated only when the value is strictly larger.

    <a id="box-13-texmckpbu"></a>

    !!! esempio "Example 21.2: Execution of the DP algorithm"

        We consider the MCKP instance of <span style="color:#1971c2">[Example 21.1](#box-1-texmckpex1)</span>, with capacity $c=10$ and classes $\mathscr{J}_1=\{1,2\}$, $\mathscr{J}_2=\{3,4,5\}$, $\mathscr{J}_3=\{6,7\}$.

        For each step of the DP algorithm with $h\ge 1$, the table shows the values of $h$ and $k$, the cells $v[h][k]$ and $s[h][k]$, and the operation performed. The row $h=0$ is $v[0][k]=0$ and $s[0][k]=0$ for every $k$.

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
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(\max\{p_1{+}v[0][0]\}=\max\{4\}=4\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(\max\{p_1{+}v[0][1]\}=\max\{4\}=4\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(\max\{p_1{+}v[0][2]\}=\max\{4\}=4\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(8\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(\max\{p_1{+}v[0][3],\,p_2{+}v[0][0]\}=\max\{4,8\}=8\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(8\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(\max\{p_1{+}v[0][4],\,p_2{+}v[0][1]\}=\max\{4,8\}=8\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(8\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(\max\{p_1{+}v[0][5],\,p_2{+}v[0][2]\}=\max\{4,8\}=8\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(7\)</span></td>
        <td><span class="arithmatex">\(8\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(\max\{p_1{+}v[0][6],\,p_2{+}v[0][3]\}=\max\{4,8\}=8\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(8\)</span></td>
        <td><span class="arithmatex">\(8\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(\max\{p_1{+}v[0][7],\,p_2{+}v[0][4]\}=\max\{4,8\}=8\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(9\)</span></td>
        <td><span class="arithmatex">\(8\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(\max\{p_1{+}v[0][8],\,p_2{+}v[0][5]\}=\max\{4,8\}=8\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(10\)</span></td>
        <td><span class="arithmatex">\(8\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(\max\{p_1{+}v[0][9],\,p_2{+}v[0][6]\}=\max\{4,8\}=8\)</span></td>
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
        <td><span class="arithmatex">\(7\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(\max\{p_3{+}v[1][1],\,p_4{+}v[1][0]\}=\max\{7,-\infty\}=7\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(9\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(\max\{p_3{+}v[1][2],\,p_4{+}v[1][1]\}=\max\{7,9\}=9\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(9\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(\max\{p_3{+}v[1][3],\,p_4{+}v[1][2]\}=\max\{7,9\}=9\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(11\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(\max\{p_3{+}v[1][4],\,p_4{+}v[1][3],\,p_5{+}v[1][0]\}=\max\{11,9,-\infty\}=11\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(13\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(\max\{p_3{+}v[1][5],\,p_4{+}v[1][4],\,p_5{+}v[1][1]\}=\max\{11,13,11\}=13\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(7\)</span></td>
        <td><span class="arithmatex">\(13\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(\max\{p_3{+}v[1][6],\,p_4{+}v[1][5],\,p_5{+}v[1][2]\}=\max\{11,13,11\}=13\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(8\)</span></td>
        <td><span class="arithmatex">\(13\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(\max\{p_3{+}v[1][7],\,p_4{+}v[1][6],\,p_5{+}v[1][3]\}=\max\{11,13,11\}=13\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(9\)</span></td>
        <td><span class="arithmatex">\(15\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(\max\{p_3{+}v[1][8],\,p_4{+}v[1][7],\,p_5{+}v[1][4]\}=\max\{11,13,15\}=15\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(10\)</span></td>
        <td><span class="arithmatex">\(15\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(\max\{p_3{+}v[1][9],\,p_4{+}v[1][8],\,p_5{+}v[1][5]\}=\max\{11,13,15\}=15\)</span></td>
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
        <td><span class="arithmatex">\(\max\{p_6{+}v[2][0]\}=\max\{-\infty\}=-\infty\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(-\infty\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(\max\{p_6{+}v[2][1],\,p_7{+}v[2][0]\}=\max\{-\infty,-\infty\}=-\infty\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(10\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(\max\{p_6{+}v[2][2],\,p_7{+}v[2][1]\}=\max\{10,-\infty\}=10\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(14\)</span></td>
        <td><span class="arithmatex">\(7\)</span></td>
        <td><span class="arithmatex">\(\max\{p_6{+}v[2][3],\,p_7{+}v[2][2]\}=\max\{12,14\}=14\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(16\)</span></td>
        <td><span class="arithmatex">\(7\)</span></td>
        <td><span class="arithmatex">\(\max\{p_6{+}v[2][4],\,p_7{+}v[2][3]\}=\max\{12,16\}=16\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(7\)</span></td>
        <td><span class="arithmatex">\(16\)</span></td>
        <td><span class="arithmatex">\(7\)</span></td>
        <td><span class="arithmatex">\(\max\{p_6{+}v[2][5],\,p_7{+}v[2][4]\}=\max\{14,16\}=16\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(8\)</span></td>
        <td><span class="arithmatex">\(18\)</span></td>
        <td><span class="arithmatex">\(7\)</span></td>
        <td><span class="arithmatex">\(\max\{p_6{+}v[2][6],\,p_7{+}v[2][5]\}=\max\{16,18\}=18\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(9\)</span></td>
        <td><span class="arithmatex">\(20\)</span></td>
        <td><span class="arithmatex">\(7\)</span></td>
        <td><span class="arithmatex">\(\max\{p_6{+}v[2][7],\,p_7{+}v[2][6]\}=\max\{16,20\}=20\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(10\)</span></td>
        <td><span class="arithmatex">\(20\)</span></td>
        <td><span class="arithmatex">\(7\)</span></td>
        <td><span class="arithmatex">\(\max\{p_6{+}v[2][8],\,p_7{+}v[2][7]\}=\max\{16,20\}=20\)</span></td>
        </tr>
        </table></div>

        This is the matrix $v$ after the execution of the DP algorithm:

        $$
        \begin{array}{l|rrrrrrrrrrr}
        \hline {v[h][k]} & {k=0} & {k=1} & {k=2} & {k=3} & {k=4} & {k=5} & {k=6} & {k=7} & {k=8} & {k=9} & {k=10} \\
        \hline {h=0} & {0} & {0} & {0} & {0} & {0} & {0} & {0} & {0} & {0} & {0} & {0} \\
        {h=1} & {-\infty} & {4} & {4} & {4} & {8} & {8} & {8} & {8} & {8} & {8} & {8} \\
        {h=2} & {-\infty} & {-\infty} & {7} & {9} & {9} & {11} & {13} & {13} & {13} & {15} & {15} \\
        {h=3} & {-\infty} & {-\infty} & {-\infty} & {-\infty} & {10} & {14} & {16} & {16} & {18} & {20} & {20} \\
        \hline
        \end{array}
        $$

        This is the matrix $s$ after the execution of the DP algorithm:

        $$
        \begin{array}{l|rrrrrrrrrrr}
        \hline {s[h][k]} & {k=0} & {k=1} & {k=2} & {k=3} & {k=4} & {k=5} & {k=6} & {k=7} & {k=8} & {k=9} & {k=10} \\
        \hline {h=0} & {0} & {0} & {0} & {0} & {0} & {0} & {0} & {0} & {0} & {0} & {0} \\
        {h=1} & {0} & {1} & {1} & {1} & {2} & {2} & {2} & {2} & {2} & {2} & {2} \\
        {h=2} & {0} & {0} & {3} & {4} & {4} & {3} & {4} & {4} & {4} & {5} & {5} \\
        {h=3} & {0} & {0} & {0} & {0} & {6} & {7} & {7} & {7} & {7} & {7} & {7} \\
        \hline
        \end{array}
        $$

        For example, $v[2][1]=-\infty$: every choice of one item in $\mathscr{J}_1$ and one in $\mathscr{J}_2$ weighs at least $w_1+w_3=2$. The optimal value of the instance is $v[3][10]=20$, attained with item $s[3][10]=7$ of class $3$.

    - Once the matrix $s$ has been computed and $v[q][c]>-\infty$, an optimal solution is reconstructed by scanning the classes from $h=q$ down to $h=1$, starting from $k=c$ and $x_j=0$ for every item $j$:

        $$
        j \leftarrow s[h][k], \qquad x_j \leftarrow 1, \qquad k \leftarrow k - w_j.
        $$

    - Every class gives exactly one item, so the reconstruction selects $q$ items.

    !!! algoritmo "Algorithm: MCKP\_Reconstruct"

        <div class="pseudocodice" markdown="0"><div class="pc" style="--liv:0"><strong>Input:</strong> The number <span class="arithmatex">\(q\)</span> of classes, the capacity <span class="arithmatex">\(c\)</span>, the array <span class="arithmatex">\(w[1..n]\)</span>, and the matrix <span class="arithmatex">\(s[0..q][0..c]\)</span>, with <span class="arithmatex">\(v[q][c]>-\infty\)</span></div><div class="pc" style="--liv:0"><strong>Output:</strong> An optimal solution of the MCKP instance, as a binary vector</div><div class="pc" style="--liv:0"><span class="pc-n">1</span><strong>Function</strong> MCKP_Reconstruct(<span class="arithmatex">\(q,c,w,s\)</span>)</div><div class="pc" style="--liv:1"><span class="pc-n">2</span><span class="arithmatex">\(x := \textnormal{new array}[1..n]\)</span>, with <span class="arithmatex">\(x[j]=0\)</span> for every <span class="arithmatex">\(j\)</span></div><div class="pc" style="--liv:1"><span class="pc-n">3</span><span class="arithmatex">\(k := c\)</span></div><div class="pc" style="--liv:1"><span class="pc-n">4</span><strong>for</strong> <span class="arithmatex">\(h := q\)</span> <strong>to</strong> <span class="arithmatex">\(1\)</span> <strong>do</strong></div><div class="pc" style="--liv:2"><span class="pc-n">5</span><span class="arithmatex">\(j \leftarrow s[h][k]\)</span>; <span class="arithmatex">\(x[j] \leftarrow 1\)</span></div><div class="pc" style="--liv:2"><span class="pc-n">6</span><span class="arithmatex">\(k \leftarrow k-w[j]\)</span></div><div class="pc" style="--liv:1"><span class="pc-n">7</span><strong>end</strong></div><div class="pc" style="--liv:1"><span class="pc-n">8</span><strong>return</strong> <span class="arithmatex">\(x\)</span></div></div>

    <a id="box-14-texmckpsol"></a>

    !!! esempio "Example 21.3: Computing an optimal solution"

        After the execution of the DP algorithm on the instance of <span style="color:#1971c2">[Example 21.1](#box-1-texmckpex1)</span>, we start from $h=3$ and $k=10$:

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
        <td><span class="arithmatex">\(k=10\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(10\)</span></td>
        <td><span class="arithmatex">\(7\)</span></td>
        <td><span class="arithmatex">\(x[7]\leftarrow 1\)</span></td>
        <td><span class="arithmatex">\(k\leftarrow 10-3=7\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(7\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(x[4]\leftarrow 1\)</span></td>
        <td><span class="arithmatex">\(k\leftarrow 7-2=5\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(x[2]\leftarrow 1\)</span></td>
        <td><span class="arithmatex">\(k\leftarrow 5-4=1\)</span></td>
        </tr>
        </table></div>

        !!! chiave ""

            An optimal solution of the MCKP instance of <span style="color:#1971c2">[Example 21.1](#box-1-texmckpex1)</span> is $S=\{2,4,7\}$, that is, the vector $x=(0,1,0,1,0,0,1)$. Its total weight is $4+2+3=9\le c$ and its optimal value is $v(3,10)=20$.

### 21.1.1 Number of steps

- Let $S(n,q,c)$ denote the number of steps executed by <code>MCKP\_DP</code> in the worst case. The innermost loop runs over the items of class $h$, so over all the classes it runs $|\mathscr{J}_1|+|\mathscr{J}_2|+\dots+|\mathscr{J}_q|=n$ times for each capacity $k$. Assuming that the condition at line [10](#box-9-mckpbu-h) is always true:

    - <span style="color:#e03131">Lines</span> [2](#box-2-mckpbu-a) and [17](#box-12-mckpbu-k) are executed $1$ time each.

    - <span style="color:#e03131">Lines</span> [3](#box-3-mckpbu-b) and [4](#box-4-mckpbu-c) are executed $c+1$ times each.

    - <span style="color:#e03131">Line</span> [6](#box-5-mckpbu-d) is executed $q$ times.

    - <span style="color:#e03131">Lines</span> [7](#box-6-mckpbu-e), [8](#box-7-mckpbu-f) and [14](#box-11-mckpbu-j) are executed $q(c+1)$ times each.

    - <span style="color:#e03131">Lines</span> [9](#box-8-mckpbu-g), [10](#box-9-mckpbu-h) and [11](#box-10-mckpbu-i) are executed $n(c+1)$ times each.

- Therefore, the total number of steps in the worst case is

    $$
    S(n,q,c)=3n(c+1)+3q(c+1)+q+2c+4.
    $$

    Since every class contains at least one item, $1\le q\le n$, and

    $$
    3n(c+1)\;\le\; S(n,q,c)\;\le\; 6n(c+1)+n+2c+4.
    $$

    Both bounds are $\Theta(nc)$, hence $S(n,q,c)=\Theta(nc)$.

    !!! chiave ""

        The DP algorithm for the MCKP executes

        $$
        S(n,q,c)=\Theta\big(c\,(|\mathscr{J}_1|+|\mathscr{J}_2|+\dots+|\mathscr{J}_q|)\big)=\Theta(nc)
        $$

        steps in the worst case.

- The reconstruction executes $\Theta(q)$ steps, one for each class.

## 21.2 Typical mistakes

!!! attenzione "Warning"

    - <strong>Starting $m$ from $0$ instead of $-\infty$.</strong> With $m=0$ a class with no item that fits would be skipped, and the solution would not contain exactly one item per class.

    - <strong>Adding the option «no item of class $h$».</strong> The term $v(h-1,k)$ of the KP recurrence has no place here: every class gives exactly one item.

    - <strong>Setting $v(0,k)=-\infty$ for $k\ge 1$.</strong> With no class the empty subset is feasible for every capacity: the capacity does not have to be filled.

    - <strong>Reconstructing an infeasible instance.</strong> If $v(q,c)=-\infty$ the instance has no feasible solution, and $s[q][c]=0$ gives no item to select.

## 21.3 In summary

!!! chiave "In summary"

    - The stages of the DP algorithm are the classes: $v(h,k)=\max_{j\in\mathscr{J}_h:\,w_j\le k}\{p_j+v(h-1,k-w_j)\}$, with $v(0,k)=0$.

    - The value $-\infty$ marks the subinstances without a feasible solution, and the instance is infeasible if and only if $v(q,c)=-\infty$.

    - The matrix $s$ stores the item chosen in each class, and an optimal solution is read backwards from $(q,c)$, one item per class.

    - The DP algorithm executes $\Theta(c\sum_{h=1}^{q}|\mathscr{J}_h|)=\Theta(nc)$ steps.

    <strong>Dashboard of the MCKP example.</strong> [Example 21.1](#box-1-texmckpex1) ($c=10$, three classes):

    <div class="tabella" markdown="0"><table>
    <tr>
    <th>Method</th>
    <th>Lower bound</th>
    <th>Upper bound</th>
    <th>Origin</th>
    </tr>
    <tr>
    <td>DP algorithm</td>
    <td><span class="arithmatex">\(20\)</span></td>
    <td><span class="arithmatex">\(20\)</span></td>
    <td>optimal value, solution <span class="arithmatex">\(S=\{2,4,7\}\)</span></td>
    </tr>
    </table></div>

---

**Exercises on this chapter:** [:material-pencil: Multiple-choice knapsack (MCKP)](../exercises/dp-multiple-choice-knapsack.md)
