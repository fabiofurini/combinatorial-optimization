---
title: "DP for the knapsack problem with setups"
---

# DP for the knapsack problem with setups

<div class="info-capitolo" markdown>

**Part 3 · Dynamic programming · Chapter 23** · [:material-file-pdf-box: Lecture notes, volume 3 (PDF)](../pdf/lecture-notes-3-dynamic-programming.pdf) · [:material-pencil: Exercises: Knapsack with setups (KPS)](../exercises/dp-knapsack-setups.md)

</div>

!!! nota "Prerequisites"

    - From this module, the chapter [«DP for the knapsack problem»](https://fabiofurini.github.io/combinatorial-optimization/dynamic-programming/dp-knapsack/): the recurrence $v(j,k)$ over items and capacities, the matrix $s$ of the decisions and the reconstruction of a solution.

    - From this module, the chapter [«Knapsack problems»](https://fabiofurini.github.io/combinatorial-optimization/combinatorial-optimization-problems/knapsack/the-knapsack-problem-with-setups/): the knapsack problem with setups, its classes, setup costs $f_h$ and setup weights $s_h$.

    - From the module <em>Algorithms</em>: [pseudocode conventions (Chapter 2)](https://fabiofurini.github.io/algorithms/basic-algorithms/02-pseudo-code/) and [the size of the input (Chapter 11)](https://fabiofurini.github.io/algorithms/analysis/11-input-size/).

!!! chiave "Objectives"

    At the end of this chapter you will be able to:

    - write the recurrence of the KPS: for each class, the best value without opening it and the best value after paying its setup;

    - run the DP algorithm by hand, class by class, with a KP recurrence inside each opened class;

    - reconstruct an optimal solution from the choice tables $s$ and $o$;

    - count the $\Theta(nc)$ steps of the DP algorithm.

The problem of this chapter is the [knapsack problem with setups (KPS)](https://fabiofurini.github.io/combinatorial-optimization/catalogue/knapsack-problem-with-setups/): its definition and its assumptions are on its page.

## 23.1 A DP algorithm

- We number the items class by class, so that $\mathscr{J}_h=\{\ell_{h-1}+1,\dots,\ell_h\}$ for every class $h$, with $\ell_0=0$ and $\ell_q=n$. Class $h$ has $t_h=|\mathscr{J}_h|=\ell_h-\ell_{h-1}$ items, and its $i$-th item is $j=\ell_{h-1}+i$.

- A solution is described by the binary vector $(x_1,x_2,\dots,x_n)$. Class $h$ is <strong>open</strong> if at least one of its items is selected: then its setup weight $s_h$ is added to the total weight, and its setup cost $f_h$ is subtracted from the total revenue.

<a id="box-1-texkpsex1"></a>

!!! esempio "Example 23.1: KPS instance"

    We consider a knapsack of capacity $c=10$ and a set $\mathscr{I}=\{1,2,\dots,5\}$ of $5$ items ($n=5$), partitioned into $q=2$ classes: $\mathscr{J}_1=\{1,2\}$, with setup cost $f_1=2$ and setup weight $s_1=2$, and $\mathscr{J}_2=\{3,4,5\}$, with setup cost $f_2=3$ and setup weight $s_2=1$. The revenues and weights are:

    $$
    \begin{array}{l|rr|rrr}
    \hline  & {j=1} & {j=2} & {j=3} & {j=4} & {j=5} \\
    \hline {p_j} & 6 & 5 & 4 & 7 & 3 \\
    {w_j} & 3 & 2 & 2 & 4 & 1 \\
    \hline
    \end{array}
    $$

    We refer to this KPS instance as <span style="color:#1971c2">Example 1</span>.

- <u>Step 1</u>: computation of the optimal value

    - The classes are the stages of the DP algorithm. For each class $h$ there are two options: class $h$ stays closed, or class $h$ is opened, its setup is paid, and some of its items are selected.

    - Inside an open class, the choice of the items is a KP: the DP algorithm of the KP runs over the items of the class, starting from the value left after paying the setup.

    !!! chiave ""

        For any $h \in \{0,1,\dots,q\}$ and $k \in \{0,1,\dots,c\}$, let $v(h,k)$ be the optimal value of the KPS subinstance with capacity $k$ and the classes $\mathscr{J}_1,\dots,\mathscr{J}_h$. For any $h \in \{1,\dots,q\}$ and $i \in \{0,1,\dots,t_h\}$, let $u(h,i,k)$ be the optimal value of the same subinstance when class $h$ is open (its setup is paid) and only its first $i$ items are available, with $u(h,i,k)=-\infty$ if the setup weight does not fit.

        The recursive formulas to compute $u(h,i,k)$ and $v(h,k)$ read as follows, where $j=\ell_{h-1}+i$ is the $i$-th item of class $h$:

        \begin{equation*}
        \label{eq:kpsu}
        u(h,i,k)= \left\{ \begin{array}{ll}
        -\infty & \textrm{if $i=0$ and $k<s_h$,}\\[2ex]
        v(h-1,k-s_h)-f_h & \textrm{if $i=0$ and $k\ge s_h$,}\\[2ex]
        u(h,i-1,k) & \textrm{if $i\ge 1$ and $w_j>k$,}\\[2ex]
        \begin{array}[t]{@{}l@{}}\displaystyle \max \bigg\{ u(h,i-1,k),\\ \qquad p_j+u(h,i-1,k-w_j) \bigg\}\end{array} & \textrm{if $i\ge 1$ and $w_j\le k$,}
        \end{array} \right. \tag{23.1}
        \end{equation*}

        \begin{equation*}
        \label{eq:kpsv}
        v(h,k)= \left\{ \begin{array}{ll}
        0 & \textrm{if $h=0$,}\\[2ex]
        \max \big\{ v(h-1,k),\; u(h,t_h,k) \big\} & \textrm{if $h\ge 1$.}
        \end{array} \right. \tag{23.2}
        \end{equation*}

    - The row $u(h,0,\cdot)$ <strong>pays the setup</strong> of class $h$: the setup weight $s_h$ leaves the capacity $k-s_h$ to the classes $1,2,\dots,h-1$, and the setup cost $f_h$ is subtracted.

    - The rows $u(h,1,\cdot),\dots,u(h,t_h,\cdot)$ are the recurrence of the KP over the items of class $h$, with $-\infty+p_j=-\infty$.

    - The formula $\eqref{eq:kpsv}$ compares the two options for class $h$: closed, with value $v(h-1,k)$, or open, with value $u(h,t_h,k)$.

    - The row $u(h,0,\cdot)$ allows an open class with no selected item, which is not a solution of the KPS. This value is never chosen in $\eqref{eq:kpsv}$, since $f_h\ge 1$ gives

        $$
        v(h-1,k-s_h)-f_h\;<\;v(h-1,k).
        $$

        Hence, when the maximum in $\eqref{eq:kpsv}$ is attained only by $u(h,t_h,k)$, at least one item of class $h$ is selected.

    - An optimal solution for $(h,k)$ is built from an optimal solution of a smaller subinstance: $(h-1,k)$ if class $h$ is closed, and, inside an open class, $(h,i-1,\cdot)$ with or without item $j$.

        $\rightsquigarrow$ <strong>Optimal Substructure verified!</strong>

    - Different decisions on the classes $h+1,\dots,q$ can leave the same capacity $k$, and therefore the same value $v(h,k)$ may be needed several times.

        $\rightsquigarrow$ <strong>Overlapping Subproblems verified!</strong>

    - The <strong>bottom-up approach</strong> computes, for $h=1,2,\dots,q$, first the rows $u(h,i,\cdot)$ for $i=0,1,\dots,t_h$, and then the row $v(h,\cdot)$, each one for increasing $k$. The optimal value of the KPS instance is $v(q,c)$.

- <u>Step 2</u>: computation of an optimal solution

    - Two choice tables are stored: $s[h][i][k]=1$ if the $i$-th item of class $h$ is selected in the optimal value $u[h][i][k]$, and $o[h][k]=1$ if class $h$ is open in the optimal value $v[h][k]$.

    - The setup weight $s_h$ has one index; the choice $s[h][i][k]$ has three.

    This is the pseudo-code of the <strong>DP algorithm using the bottom-up approach</strong>, which stores the choice tables together with the values:

    !!! algoritmo "Algorithm: KPS\_DP"

        <div class="pseudocodice" markdown="0"><div class="pc" style="--liv:0"><strong>Input:</strong> A KPS instance given by <span class="arithmatex">\(q\)</span>, the classes <span class="arithmatex">\(\mathscr{J}_1,\dots,\mathscr{J}_q\)</span> numbered as above, the setup costs <span class="arithmatex">\(f_h\)</span> and weights <span class="arithmatex">\(s_h\)</span>, arrays <span class="arithmatex">\(p[1..n]\)</span>, <span class="arithmatex">\(w[1..n]\)</span>, and capacity <span class="arithmatex">\(c\)</span></div><div class="pc" style="--liv:0"><strong>Output:</strong> The optimal value of the KPS instance and the choice tables <span class="arithmatex">\(s\)</span> and <span class="arithmatex">\(o\)</span></div><div class="pc" style="--liv:0"><span class="pc-n">1</span><strong>Function</strong> KPS_DP(<span class="arithmatex">\(q,\mathscr{J},p,w,c\)</span>)</div><div class="pc" style="--liv:1" id="box-2-kpsbu-a"><span class="pc-n">2</span><span class="arithmatex">\(v,o := \textnormal{new arrays}[0..q][0..c]\)</span>; <span class="arithmatex">\(u,s := \textnormal{new arrays}[1..q][0..t_h][0..c]\)</span></div><div class="pc" style="--liv:1" id="box-3-kpsbu-b"><span class="pc-n">3</span><strong>for</strong> <span class="arithmatex">\(k := 0\)</span> <strong>to</strong> <span class="arithmatex">\(c\)</span>  <strong>do</strong></div><div class="pc" style="--liv:2" id="box-4-kpsbu-c"><span class="pc-n">4</span><span class="arithmatex">\(v[0][k] \leftarrow 0\)</span>; <span class="arithmatex">\(o[0][k] \leftarrow 0\)</span></div><div class="pc" style="--liv:1"><span class="pc-n">5</span><strong>end</strong></div><div class="pc" style="--liv:1" id="box-5-kpsbu-d"><span class="pc-n">6</span><strong>for</strong> <span class="arithmatex">\(h := 1\)</span> <strong>to</strong> <span class="arithmatex">\(q\)</span>  <strong>do</strong></div><div class="pc" style="--liv:2" id="box-6-kpsbu-e"><span class="pc-n">7</span><strong>for</strong> <span class="arithmatex">\(k := 0\)</span> <strong>to</strong> <span class="arithmatex">\(c\)</span>  <strong>do</strong></div><div class="pc" style="--liv:3" id="box-7-kpsbu-f"><span class="pc-n">8</span><span class="arithmatex">\(u[h][0][k] \leftarrow -\infty\)</span></div><div class="pc" style="--liv:3" id="box-8-kpsbu-fa"><span class="pc-n">9</span><strong>if</strong> <span class="arithmatex">\(k\ge s_h\)</span>  <strong>then</strong></div><div class="pc" style="--liv:4" id="box-9-kpsbu-fb"><span class="pc-n">10</span><span class="arithmatex">\(u[h][0][k] \leftarrow v[h-1][k-s_h]-f_h\)</span></div><div class="pc" style="--liv:3"><span class="pc-n">11</span><strong>end</strong></div><div class="pc" style="--liv:2"><span class="pc-n">12</span><strong>end</strong></div><div class="pc" style="--liv:2" id="box-10-kpsbu-g"><span class="pc-n">13</span><strong>for</strong> <span class="arithmatex">\(i := 1\)</span> <strong>to</strong> <span class="arithmatex">\(t_h\)</span>  <strong>do</strong></div><div class="pc" style="--liv:3" id="box-11-kpsbu-h"><span class="pc-n">14</span><span class="arithmatex">\(j := \ell_{h-1}+i\)</span></div><div class="pc" style="--liv:3" id="box-12-kpsbu-i"><span class="pc-n">15</span><strong>for</strong> <span class="arithmatex">\(k := 0\)</span> <strong>to</strong> <span class="arithmatex">\(c\)</span>  <strong>do</strong></div><div class="pc" style="--liv:4" id="box-13-kpsbu-j"><span class="pc-n">16</span><span class="arithmatex">\(u[h][i][k] \leftarrow u[h][i-1][k]\)</span>; <span class="arithmatex">\(s[h][i][k] \leftarrow 0\)</span></div><div class="pc" style="--liv:4" id="box-14-kpsbu-k"><span class="pc-n">17</span><strong>if</strong> <span class="arithmatex">\(w[j]\le k\)</span> and <span class="arithmatex">\(p[j]+u[h][i-1][k-w[j]] > u[h][i][k]\)</span>  <strong>then</strong></div><div class="pc" style="--liv:5" id="box-15-kpsbu-l"><span class="pc-n">18</span><span class="arithmatex">\(u[h][i][k] \leftarrow p[j]+u[h][i-1][k-w[j]]\)</span>; <span class="arithmatex">\(s[h][i][k] \leftarrow 1\)</span></div><div class="pc" style="--liv:4"><span class="pc-n">19</span><strong>end</strong></div><div class="pc" style="--liv:3"><span class="pc-n">20</span><strong>end</strong></div><div class="pc" style="--liv:2"><span class="pc-n">21</span><strong>end</strong></div><div class="pc" style="--liv:2" id="box-16-kpsbu-m"><span class="pc-n">22</span><strong>for</strong> <span class="arithmatex">\(k := 0\)</span> <strong>to</strong> <span class="arithmatex">\(c\)</span>  <strong>do</strong></div><div class="pc" style="--liv:3" id="box-17-kpsbu-n"><span class="pc-n">23</span><span class="arithmatex">\(v[h][k] \leftarrow v[h-1][k]\)</span>; <span class="arithmatex">\(o[h][k] \leftarrow 0\)</span></div><div class="pc" style="--liv:3" id="box-18-kpsbu-o"><span class="pc-n">24</span><strong>if</strong> <span class="arithmatex">\(u[h][t_h][k] > v[h][k]\)</span>  <strong>then</strong></div><div class="pc" style="--liv:4" id="box-19-kpsbu-p"><span class="pc-n">25</span><span class="arithmatex">\(v[h][k] \leftarrow u[h][t_h][k]\)</span>; <span class="arithmatex">\(o[h][k] \leftarrow 1\)</span></div><div class="pc" style="--liv:3"><span class="pc-n">26</span><strong>end</strong></div><div class="pc" style="--liv:2"><span class="pc-n">27</span><strong>end</strong></div><div class="pc" style="--liv:1"><span class="pc-n">28</span><strong>end</strong></div><div class="pc" style="--liv:1" id="box-20-kpsbu-q"><span class="pc-n">29</span><strong>return</strong> <span class="arithmatex">\(v[q][c], s, o\)</span></div></div>

    - For each class, the first loop over $k$ pays the setup where it fits, the loops over $i$ and $k$ run the DP algorithm of the KP over the items of the class, and the last loop over $k$ compares the closed and the open class.

    - In case of ties the item is not selected and the class stays closed, because the values are updated only when they are strictly larger.

    <a id="box-21-texkpsbu"></a>

    !!! esempio "Example 23.2: Execution of the DP algorithm"

        We consider the KPS instance of <span style="color:#1971c2">Example 1</span>. The rows are computed in the order of the table below, each one for $k=0,1,\dots,10$; these are some of the computations:

        - $u[1][0][1]=-\infty$, since $k=1<s_1=2$

        - $v[1][7]=\max\{v[0][7],\,u[1][2][7]\}=\max\{0,\,9\}=9$

        - $v[2][10]=\max\{v[1][10],\,u[2][3][10]\}=\max\{9,\,11\}=11$

        - $u[2][3][10]=\max\{u[2][2][10],\,p_5+u[2][2][9]\}=\max\{10,\,3+8\}=11$

        - $u[2][2][9]=\max\{u[2][1][9],\,p_4+u[2][1][5]\}=\max\{6,\,7+1\}=8$

        - $u[2][1][5]=\max\{u[2][0][5],\,p_3+u[2][0][3]\}=\max\{0,\,4-3\}=1$

        - $u[2][0][3]=v[1][2]-f_2=0-3=-3$

        - $v[1][2]=\max\{v[0][2],\,u[1][2][2]\}=\max\{0,\,-2\}=0$

        This is the table of the values after the execution of the DP algorithm, row by row in the order of computation:

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
        <th><span class="arithmatex">\(k=10\)</span></th>
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
        <td><span class="arithmatex">\(0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(u[1][0][k]\)</span> (setup)</td>
        <td><span class="arithmatex">\(-\infty\)</span></td>
        <td><span class="arithmatex">\(-\infty\)</span></td>
        <td><span class="arithmatex">\(-2\)</span></td>
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
        <td><span class="arithmatex">\(-\infty\)</span></td>
        <td><span class="arithmatex">\(-2\)</span></td>
        <td><span class="arithmatex">\(-2\)</span></td>
        <td><span class="arithmatex">\(-2\)</span></td>
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
        <td><span class="arithmatex">\(-\infty\)</span></td>
        <td><span class="arithmatex">\(-2\)</span></td>
        <td><span class="arithmatex">\(-2\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(9\)</span></td>
        <td><span class="arithmatex">\(9\)</span></td>
        <td><span class="arithmatex">\(9\)</span></td>
        <td><span class="arithmatex">\(9\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(v[1][k]\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(9\)</span></td>
        <td><span class="arithmatex">\(9\)</span></td>
        <td><span class="arithmatex">\(9\)</span></td>
        <td><span class="arithmatex">\(9\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(u[2][0][k]\)</span> (setup)</td>
        <td><span class="arithmatex">\(-\infty\)</span></td>
        <td><span class="arithmatex">\(-3\)</span></td>
        <td><span class="arithmatex">\(-3\)</span></td>
        <td><span class="arithmatex">\(-3\)</span></td>
        <td><span class="arithmatex">\(-3\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(u[2][1][k]\)</span> (<span class="arithmatex">\(j=3\)</span>)</td>
        <td><span class="arithmatex">\(-\infty\)</span></td>
        <td><span class="arithmatex">\(-3\)</span></td>
        <td><span class="arithmatex">\(-3\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(10\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(u[2][2][k]\)</span> (<span class="arithmatex">\(j=4\)</span>)</td>
        <td><span class="arithmatex">\(-\infty\)</span></td>
        <td><span class="arithmatex">\(-3\)</span></td>
        <td><span class="arithmatex">\(-3\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(8\)</span></td>
        <td><span class="arithmatex">\(8\)</span></td>
        <td><span class="arithmatex">\(8\)</span></td>
        <td><span class="arithmatex">\(10\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(u[2][3][k]\)</span> (<span class="arithmatex">\(j=5\)</span>)</td>
        <td><span class="arithmatex">\(-\infty\)</span></td>
        <td><span class="arithmatex">\(-3\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(7\)</span></td>
        <td><span class="arithmatex">\(8\)</span></td>
        <td><span class="arithmatex">\(11\)</span></td>
        <td><span class="arithmatex">\(11\)</span></td>
        <td><span class="arithmatex">\(11\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(v[2][k]\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(7\)</span></td>
        <td><span class="arithmatex">\(9\)</span></td>
        <td><span class="arithmatex">\(11\)</span></td>
        <td><span class="arithmatex">\(11\)</span></td>
        <td><span class="arithmatex">\(11\)</span></td>
        </tr>
        </table></div>

        The optimal value of the instance is $v[2][10]=11$. The values $-2$ and $-3$ in the setup rows are the setup costs paid before any item is selected.

    <a id="box-22-texkpsinfo"></a>

    !!! esempio "Example 23.3: The choice tables"

        For the instance of <span style="color:#1971c2">Example 1</span>, these are the choice tables computed by the DP algorithm: the rows $s[h][i][\cdot]$ of the items, and the rows $o[h][\cdot]$ of the classes.

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
        <th><span class="arithmatex">\(k=10\)</span></th>
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
        <td><span class="arithmatex">\(1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(s[1][2][k]\)</span> (<span class="arithmatex">\(j=2\)</span>)</td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
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
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(s[2][2][k]\)</span> (<span class="arithmatex">\(j=4\)</span>)</td>
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
        <td><span class="arithmatex">\(0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(s[2][3][k]\)</span> (<span class="arithmatex">\(j=5\)</span>)</td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(o[2][k]\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        </tr>
        </table></div>

    - An optimal solution is reconstructed by scanning the classes from $h=q$ down to $h=1$, starting from $k=c$ and $x_j=0$ for every item $j$.

    - If $o[h][k]=0$, class $h$ is closed and $k$ does not change. If $o[h][k]=1$, the items of class $h$ are scanned from $i=t_h$ down to $i=1$ as in the KP, and at the end the setup weight $s_h$ is subtracted from $k$.

    !!! algoritmo "Algorithm: KPS\_Reconstruct"

        <div class="pseudocodice" markdown="0"><div class="pc" style="--liv:0"><strong>Input:</strong> The number <span class="arithmatex">\(q\)</span> of classes, the setup weights <span class="arithmatex">\(s_h\)</span>, the array <span class="arithmatex">\(w[1..n]\)</span>, the capacity <span class="arithmatex">\(c\)</span>, and the choice tables <span class="arithmatex">\(s\)</span> and <span class="arithmatex">\(o\)</span></div><div class="pc" style="--liv:0"><strong>Output:</strong> An optimal solution of the KPS instance</div><div class="pc" style="--liv:0"><span class="pc-n">1</span><strong>Function</strong> KPS_Reconstruct(<span class="arithmatex">\(q,w,c,s,o\)</span>)</div><div class="pc" style="--liv:1"><span class="pc-n">2</span><span class="arithmatex">\(x := \textnormal{new array}[1..n]\)</span>, with <span class="arithmatex">\(x[j]=0\)</span> for every <span class="arithmatex">\(j\)</span></div><div class="pc" style="--liv:1"><span class="pc-n">3</span><span class="arithmatex">\(k := c\)</span></div><div class="pc" style="--liv:1"><span class="pc-n">4</span><strong>for</strong> <span class="arithmatex">\(h := q\)</span> <strong>to</strong> <span class="arithmatex">\(1\)</span> <strong>do</strong></div><div class="pc" style="--liv:2"><span class="pc-n">5</span><strong>if</strong> <span class="arithmatex">\(o[h][k]=1\)</span> <strong>then</strong></div><div class="pc" style="--liv:3"><span class="pc-n">6</span><strong>for</strong> <span class="arithmatex">\(i := t_h\)</span> <strong>to</strong> <span class="arithmatex">\(1\)</span> <strong>do</strong></div><div class="pc" style="--liv:4"><span class="pc-n">7</span><span class="arithmatex">\(j := \ell_{h-1}+i\)</span>; <span class="arithmatex">\(x[j] \leftarrow s[h][i][k]\)</span></div><div class="pc" style="--liv:4"><span class="pc-n">8</span><span class="arithmatex">\(k \leftarrow k-x[j]\,w[j]\)</span></div><div class="pc" style="--liv:3"><span class="pc-n">9</span><strong>end</strong></div><div class="pc" style="--liv:3"><span class="pc-n">10</span><span class="arithmatex">\(k \leftarrow k-s_h\)</span></div><div class="pc" style="--liv:2"><span class="pc-n">11</span><strong>end</strong></div><div class="pc" style="--liv:1"><span class="pc-n">12</span><strong>end</strong></div><div class="pc" style="--liv:1"><span class="pc-n">13</span><strong>return</strong> <span class="arithmatex">\(x\)</span></div></div>

    <a id="box-23-texkpssol"></a>

    !!! esempio "Example 23.4: Computing an optimal solution"

        After the execution of the DP algorithm on the instance of <span style="color:#1971c2">Example 1</span>, we start from $h=2$ and $k=10$:

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
        <td><span class="arithmatex">\(k=10\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(h=2\)</span></td>
        <td><span class="arithmatex">\(10\)</span></td>
        <td><span class="arithmatex">\(o[2][10]=1\)</span></td>
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
        <td><span class="arithmatex">\(10\)</span></td>
        <td><span class="arithmatex">\(s[2][3][10]=1\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td class="cella-blu">1</td>
        <td><span class="arithmatex">\(k\leftarrow 10-1=9\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(j=4\)</span></td>
        <td><span class="arithmatex">\(9\)</span></td>
        <td><span class="arithmatex">\(s[2][2][9]=1\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td class="cella-blu">1</td>
        <td>1</td>
        <td><span class="arithmatex">\(k\leftarrow 9-4=5\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(j=3\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(s[2][1][5]=1\)</span></td>
        <td>0</td>
        <td>0</td>
        <td class="cella-blu">1</td>
        <td>1</td>
        <td>1</td>
        <td><span class="arithmatex">\(k\leftarrow 5-2=3\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>setup: <span class="arithmatex">\(k\leftarrow 3-s_2=2\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(h=1\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(o[1][2]=0\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>class <span class="arithmatex">\(1\)</span> closed</td>
        </tr>
        </table></div>

        !!! chiave ""

            The vector $x=(0,0,1,1,1)$ is an optimal solution of the KPS instance of <span style="color:#1971c2">Example 1</span>: only class $2$ is open, and the items $\{3,4,5\}$ are selected. Its total weight is $2+4+1+s_2=8\le c$ and its optimal value is $v(2,10)=4+7+3-f_2=11$.

        Class $1$ contains the most efficient items, but it stays closed. With class $1$ alone the best value is $v[1][10]=9$, while the open class $2$ gives $u[2][3][10]=11$; after its items and its setup weight only $k=2$ is left for class $1$, and $o[1][2]=0$.

### 23.1.1 Number of steps

- Let $S(n,q,c)$ denote the number of steps executed by <code>KPS\_DP</code> in the worst case. The loops over $i$ run over the items of each class, so over all the classes they run $t_1+t_2+\dots+t_q=n$ times. Assuming that the conditions at lines [9](#box-8-kpsbu-fa), [17](#box-14-kpsbu-k) and [24](#box-18-kpsbu-o) are always true:

    - <span style="color:#e03131">Lines</span> [2](#box-2-kpsbu-a) and [29](#box-20-kpsbu-q) are executed $1$ time each.

    - <span style="color:#e03131">Lines</span> [3](#box-3-kpsbu-b) and [4](#box-4-kpsbu-c) are executed $c+1$ times each.

    - <span style="color:#e03131">Line</span> [6](#box-5-kpsbu-d) is executed $q$ times.

    - <span style="color:#e03131">Lines</span> [7](#box-6-kpsbu-e), [8](#box-7-kpsbu-f), [9](#box-8-kpsbu-fa), [10](#box-9-kpsbu-fb), [22](#box-16-kpsbu-m), [23](#box-17-kpsbu-n), [24](#box-18-kpsbu-o) and [25](#box-19-kpsbu-p) are executed $q(c+1)$ times each.

    - <span style="color:#e03131">Lines</span> [13](#box-10-kpsbu-g) and [14](#box-11-kpsbu-h) are executed $n$ times each.

    - <span style="color:#e03131">Lines</span> [15](#box-12-kpsbu-i), [16](#box-13-kpsbu-j), [17](#box-14-kpsbu-k) and [18](#box-15-kpsbu-l) are executed $n(c+1)$ times each.

- Therefore, the total number of steps in the worst case is

    $$
    S(n,q,c)=4n(c+1)+8q(c+1)+2n+q+2c+4.
    $$

    Since every class contains at least one item, $1\le q\le n$, and

    $$
    4n(c+1)\;\le\; S(n,q,c)\;\le\; 12n(c+1)+3n+2c+4.
    $$

    Both bounds are $\Theta(nc)$, hence $S(n,q,c)=\Theta(nc)$.

    !!! chiave ""

        The DP algorithm for the KPS executes $S(n,q,c)=\Theta(nc)$ steps in the worst case: the setups add $2q$ rows to the $n$ rows of the KP recurrence.

- The reconstruction executes $\Theta(n)$ steps.

## 23.2 Typical mistakes

!!! attenzione "Warning"

    - <strong>Paying the setup for every item.</strong> The setup of class $h$ is paid once, in the row $u(h,0,\cdot)$; the rows of the items add only $p_j$ and $w_j$.

    - <strong>Starting the items of a class from $v(h-1,k)$.</strong> The rows of an open class start from $v(h-1,k-s_h)-f_h$: starting from $v(h-1,k)$ would select items without paying the setup.

    - <strong>Forgetting the setup weight in the reconstruction.</strong> After the items of an open class, the capacity decreases also by $s_h$.

    - <strong>Confusing $s_h$ with $s[h][i][k]$.</strong> The setup weight of class $h$ has one index; the choice of the $i$-th item of class $h$ has three.

## 23.3 In summary

!!! chiave "In summary"

    - For each class $h$ the DP algorithm compares the closed class, $v(h-1,k)$, with the open class, $u(h,t_h,k)$.

    - The open class starts from $u(h,0,k)=v(h-1,k-s_h)-f_h$, which pays the setup once, and continues with the KP recurrence over its items.

    - The choice tables $s$ (items) and $o$ (classes) give an optimal solution, read backwards from $(q,c)$.

    - The DP algorithm executes $\Theta(nc)$ steps, as the DP algorithm of the KP.

    <strong>Dashboard of the KPS example.</strong> Example 1 ($c=10$, two classes):

    <div class="tabella" markdown="0"><table>
    <tr>
    <th>Method</th>
    <th>Lower bound</th>
    <th>Upper bound</th>
    <th>Origin</th>
    </tr>
    <tr>
    <td>DP algorithm</td>
    <td><span class="arithmatex">\(11\)</span></td>
    <td><span class="arithmatex">\(11\)</span></td>
    <td>optimal value, solution <span class="arithmatex">\(x=(0,0,1,1,1)\)</span></td>
    </tr>
    </table></div>

---

**Exercises on this chapter:** [:material-pencil: Knapsack with setups (KPS)](../exercises/dp-knapsack-setups.md)
