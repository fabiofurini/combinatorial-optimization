---
title: "A DP algorithm for the capacitated case"
---

# 25.3 A DP algorithm for the capacitated case

<div class="info-capitolo" markdown>

**Part 3 · Dynamic programming · Chapter 25** · [:material-book-open-variant: Chapter 25: Lot sizing](index.md) · [:material-file-pdf-box: Lecture notes, volume 3 (PDF)](../../pdf/lecture-notes-3-dynamic-programming.pdf) · [:material-pencil: Exercises: Lot sizing](../../exercises/dp-lot-sizing.md)

</div>

- In most production systems the quantity that can be produced in a period is limited by the capacity of the resource. The problem of this section is the [capacitated lot sizing problem (CLS)](https://fabiofurini.github.io/combinatorial-optimization/combinatorial-optimization-problems/lot-sizing/): its definition and its assumptions are on its page.

- The MIP model is the model of the ULS with the additional constraints $x_t\le cap_t$, for all $t\in T$ (the big-M value of period $t$ becomes $\min\{cap_t, D_{t,m}\}$). A feasible solution is encoded by the same vector $(x_1,x_2,\dots,x_m)$ as in the ULS, with the additional requirement $x_t \le cap_t$ for all $t\in T$.

- The <strong>zero-inventory ordering property does not hold</strong> for the CLS: a period may have to produce while units are still in stock, because the capacity does not allow to produce everything in the period where it would be cheapest.

<a id="box-31-texcls1"></a>

!!! esempio "Example 25.10: Capacitated lot sizing"

    We consider <span style="color:#1971c2">[Example 25.1](index.md#box-1-texuls1)</span> measured in units of $10$ products (hence the holding cost is $10$ per unit), with a constant capacity of $4$ units per period:

    $$
    \begin{array}{l|rrrrr}
    \hline {t} & {1} & {2} & {3} & {4} & {5} \\
    \hline {d_t} & {2} & {1} & {3} & {4} & {1} \\
    {sc_t} & {50} & {50} & {50} & {50} & {50} \\
    {vc_t} & {0} & {0} & {0} & {0} & {0} \\
    {hc_t} & {10} & {10} & {10} & {10} & {10} \\
    {cap_t} & {4} & {4} & {4} & {4} & {4} \\
    \hline
    \end{array}
    $$

    We refer to this CLS instance as <span style="color:#1971c2">[Example 25.10](#box-31-texcls1)</span>. The optimal solution of <span style="color:#1971c2">[Example 25.1](index.md#box-1-texuls1)</span>, in units of $10$, is the vector $(3,\allowbreak 0,\allowbreak 8,\allowbreak 0,\allowbreak 0)$, of cost $170$: it is not feasible for <span style="color:#1971c2">[Example 25.10](#box-31-texcls1)</span>, since period $3$ produces more than $4$ units.

- <u>Step 1</u>: computation of the optimal value

- For any period $t\in\{1,\dots,m\}$, the <strong>production cost function</strong> of period $t$ is

    $$
    f_t(x)= \left\{ \begin{array}{ll}
    0 & \textrm{if $x=0$,}\\[1ex]
    sc_t+vc_t\,x & \textrm{if $x\in\{1,2,\dots,cap_t\}$.}
    \end{array} \right.
    $$

    The inventory at the end of period $t$ never exceeds the demand $D_{t+1,m}$ of the following periods, since the inventory must be empty at the end of period $m$.

    !!! chiave ""

        For any $t \in \{1,2,\dots,m\}$ and $k \in \{0,1,\dots,D_{t+1,m}\}$, let $v(t,k)$ be the optimal value of the CLS subinstance given by:

        1. a set $\{1,2,\dots,t\}$ of $t$ time periods,

        2. for each period $j \in \{1,2,\dots,t\}$, a demand $d_j$,

        3. for each period $j \in \{1,2,\dots,t\}$, a setup cost $sc_j$, a variable production cost $vc_j$, and a holding cost $hc_j$,

        4. for each period $j \in \{1,2,\dots,t\}$, a capacity $cap_j$,

        5. an inventory equal to $k$ at the end of period $t$.

        The recursive formula to compute $v(t,k)$ reads as follows:

        \begin{equation*}
        \label{eq:cls}
        v(t,k)= \left\{ \begin{array}{ll}
        \begin{array}[t]{@{}l@{}}\displaystyle \min \bigg\{ v(t-1,k+d_t-x) + f_t(x) : x \in X_t(k)\bigg\}\\ {}+ hc_t\,k\end{array} & \textrm{if $1\le t \le m$,}\\[2ex]
        0 & \textrm{if $t=0$ and $k=0$,}\\[2ex]
        +\infty & \textrm{if $t=0$ and $k>0$,}
        \end{array} \right. \tag{25.4}
        \end{equation*}

        where $X_t(k)=\{0,1,\dots,\min\{cap_t,\,k+d_t\}\}$ is the set of the possible productions of period $t$.

    - The pair $(t,k)$ is the <strong>state</strong>: the last period of the subinstance and the inventory at its end. For $t=m$ and $k=0$ we obtain the CLS instance itself, so its optimal value is $v(m,0)$.

    - The recursive decomposition process of formula $\eqref{eq:cls}$ generates at most $cap_t+1$ <strong>independent subproblems</strong>, each corresponding to a possible choice of the production $x$ of the last period $t$.

    - If $x$ units are produced in period $t$ and $k$ units remain at its end, the inventory at the end of period $t-1$ is $k+d_t-x$: the residual subproblem is the CLS subinstance with periods $\{1,\dots,t-1\}$ and final inventory $k+d_t-x$.

    - The production $x$ is at most $cap_t$, and at most $k+d_t$ because the inventory at the end of period $t-1$ cannot be negative. Moreover $k+d_t-x\le D_{t+1,m}+d_t=D_{t,m}$, so the residual subproblem is a state.

    - The base case is $v(0,0)=0$: no period, no inventory, no cost.

    - For $k>0$ we set $v(0,k)=+\infty$: the initial inventory is empty, so no feasible solution has a positive inventory before period $1$. The value $+\infty$ rules out this case, and it propagates to every state that cannot be reached within the capacities, with the convention $+\infty+a=+\infty$.

    - The optimal value $v(t,k)$ is obtained by trying all possible productions $x$ of period $t$ and selecting the one that minimizes the sum $v(t-1,k+d_t-x)+f_t(x)$ of the optimal value of the residual subproblem and the production cost of period $t$; the holding cost $hc_t\,k$ of the final inventory does not depend on $x$.

    - Hence, an optimal solution of the subinstance of state $(t,k)$ is built by combining the chosen production of period $t$ with an optimal solution of the residual subproblem of state $(t-1,k+d_t-x)$.

        $\rightsquigarrow$ <strong>Optimal Substructure verified!</strong>

    - Different sequences of production decisions can lead to the same state. For instance, in <span style="color:#1971c2">[Example 25.10](#box-31-texcls1)</span>, starting from the state $(5,0)$, the decisions $x_5=0$ and $x_4=4$ lead to the state $(3,1)$, and the decisions $x_5=1$ and $x_4=3$ lead to the same state $(3,1)$.

    - Therefore the same value $v(t,k)$ may need to be computed several times during the recursive evaluation of formula $\eqref{eq:cls}$.

        $\rightsquigarrow$ <strong>Overlapping Subproblems verified!</strong>

    - A <strong>first method</strong> to compute the optimal value $v(m,0)$ of the CLS instance is the <strong>top-down approach</strong>. The method starts from the call with $(t,k)=(m,0)$ and evaluates formula $\eqref{eq:cls}$ recursively: each call for a state $(t,k)$ triggers further calls for the states $(t-1,k+d_t-x)$, for all $x \in \{0,\dots,\min\{cap_t,k+d_t\}\}$, until one of the base cases $v(0,k)$ is reached.

    - The value $v(t,k)$ can be computed once the values $v(t-1,k')$ are known for all $k'\in\{0,\dots,D_{t,m}\}$. We can avoid solving the same subproblems repeatedly by storing the value of each subproblem as soon as it is computed, in a <strong>lookup table</strong>: the matrix ${v}[0..m][0..D_{1,m}]$, whose cell ${v}[t][k]$ contains $v(t,k)$ for $k\le D_{t+1,m}$ (the other cells are not used).

    - A <strong>second method</strong> to compute the optimal value $v(m,0)$ of the CLS instance is the <strong>bottom-up approach</strong>. The method starts from the base cases $v(0,0)=0$ and $v(0,k)=+\infty$ for all $k\in\{1,\dots,D_{1,m}\}$.

    - It evaluates formula $\eqref{eq:cls}$ for increasing values of $t\in\{1,\dots,m\}$ and, for each fixed $t$, for $k \in \{0,1,\dots,D_{t+1,m}\}$: each value $v(t,k)$ uses already-computed values of row $t-1$, until $v(m,0)$ is obtained.

        This is the pseudo-code of the <strong>DP algorithm using the bottom-up approach</strong>:

        !!! algoritmo "Algorithm: DP\_CLS"

            <div class="pseudocodice" markdown="0"><div class="pc" style="--liv:0"><strong>Input:</strong> A CLS instance given by the number <span class="arithmatex">\(m\)</span> of periods and the arrays <span class="arithmatex">\(d[1..m]\)</span>, <span class="arithmatex">\(sc[1..m]\)</span>, <span class="arithmatex">\(vc[1..m]\)</span>, <span class="arithmatex">\(hc[1..m]\)</span>, <span class="arithmatex">\(cap[1..m]\)</span></div><div class="pc" style="--liv:0"><strong>Output:</strong> The optimal value</div><div class="pc" style="--liv:0"><span class="pc-n">1</span><strong>Function</strong> DP_CLS(<span class="arithmatex">\(m,d,sc,vc,hc,cap\)</span>)</div><div class="pc" style="--liv:1" id="box-32-cl-a"><span class="pc-n">2</span><span class="arithmatex">\({R} := \textnormal{new array}[0..m]\)</span></div><div class="pc" style="--liv:1" id="box-33-cl-b"><span class="pc-n">3</span><span class="arithmatex">\({R}[m] \leftarrow 0\)</span></div><div class="pc" style="--liv:1" id="box-34-cl-c"><span class="pc-n">4</span><strong>for</strong> <span class="arithmatex">\(t := m-1\)</span> <strong>downto</strong> <span class="arithmatex">\(0\)</span>  <strong>do</strong></div><div class="pc" style="--liv:2" id="box-35-cl-d"><span class="pc-n">5</span><span class="arithmatex">\({R}[t] \leftarrow {R}[t+1] + d[t+1]\)</span></div><div class="pc" style="--liv:1"><span class="pc-n">6</span><strong>end</strong></div><div class="pc" style="--liv:1" id="box-36-cl-e"><span class="pc-n">7</span><span class="arithmatex">\({v} := \textnormal{new array}[0..m][0..{R}[0]]\)</span></div><div class="pc" style="--liv:1" id="box-37-cl-f"><span class="pc-n">8</span><span class="arithmatex">\({v}[0][0] \leftarrow 0\)</span></div><div class="pc" style="--liv:1" id="box-38-cl-g"><span class="pc-n">9</span><strong>for</strong> <span class="arithmatex">\(k := 1\)</span> <strong>to</strong> <span class="arithmatex">\({R}[0]\)</span>  <strong>do</strong></div><div class="pc" style="--liv:2" id="box-39-cl-h"><span class="pc-n">10</span><span class="arithmatex">\({v}[0][k] \leftarrow +\infty\)</span></div><div class="pc" style="--liv:1"><span class="pc-n">11</span><strong>end</strong></div><div class="pc" style="--liv:1" id="box-40-cl-i"><span class="pc-n">12</span><strong>for</strong> <span class="arithmatex">\(t := 1\)</span> <strong>to</strong> <span class="arithmatex">\(m\)</span>  <strong>do</strong></div><div class="pc" style="--liv:2" id="box-41-cl-j"><span class="pc-n">13</span><strong>for</strong> <span class="arithmatex">\(k := 0\)</span> <strong>to</strong> <span class="arithmatex">\({R}[t]\)</span>  <strong>do</strong></div><div class="pc" style="--liv:3" id="box-42-cl-k"><span class="pc-n">14</span><span class="arithmatex">\(\mathit{b} := +\infty\)</span></div><div class="pc" style="--liv:3" id="box-43-cl-l"><span class="pc-n">15</span><strong>for</strong> <span class="arithmatex">\(x := 0\)</span> <strong>to</strong> <span class="arithmatex">\(\min\{cap[t],\,k+d[t]\}\)</span>  <strong>do</strong></div><div class="pc" style="--liv:4" id="box-44-cl-m"><span class="pc-n">16</span><strong>if</strong> <span class="arithmatex">\({v}[t-1][k+d[t]-x] + f_t(x) + hc[t]\cdot k < \mathit{b}\)</span>  <strong>then</strong></div><div class="pc" style="--liv:5" id="box-45-cl-n"><span class="pc-n">17</span><span class="arithmatex">\(\mathit{b} \leftarrow {v}[t-1][k+d[t]-x] + f_t(x) + hc[t]\cdot k\)</span></div><div class="pc" style="--liv:4"><span class="pc-n">18</span><strong>end</strong></div><div class="pc" style="--liv:3"><span class="pc-n">19</span><strong>end</strong></div><div class="pc" style="--liv:3" id="box-46-cl-o"><span class="pc-n">20</span><span class="arithmatex">\({v}[t][k] \leftarrow \mathit{b}\)</span></div><div class="pc" style="--liv:2"><span class="pc-n">21</span><strong>end</strong></div><div class="pc" style="--liv:1"><span class="pc-n">22</span><strong>end</strong></div><div class="pc" style="--liv:1" id="box-47-cl-p"><span class="pc-n">23</span><strong>return</strong> <span class="arithmatex">\({v}[m][0]\)</span></div></div>

        - The vector ${R}[0..m]$ contains the remaining demands ${R}[t]=D_{t+1,m}$, computed backwards from ${R}[m]=0$: the states of period $t$ are the pairs $(t,k)$ with $k\le {R}[t]$.

        - The matrix ${v}$ is the <strong>lookup table</strong>. The initialization sets ${v}[0][0]=0$ and ${v}[0][k]=+\infty$ for all $k\in\{1,\dots,{R}[0]\}$, since the initial inventory is empty.

        - The outer loop, over $t \in \{1,2,\dots,m\}$, considers the periods in increasing order, and the second loop, over $k\in\{0,\dots,{R}[t]\}$, considers all final inventories of period $t$.

        - The inner loop, over the production $x$ of period $t$, keeps in $\mathit{b}$ the smallest value ${v}[t-1][k+d[t]-x]+f_t(x)+hc[t]\cdot k$; the value $f_t(x)$ is $0$ for $x=0$ and $sc[t]+vc[t]\cdot x$ otherwise. If all candidates are $+\infty$, the comparison is never true and ${v}[t][k]=+\infty$: the state $(t,k)$ cannot be reached within the capacities.

        - Finally, the optimal value ${v}[m][0]$ of the CLS instance is returned.

        <a id="box-48-texclsbu"></a>

        !!! esempio "Example 25.11: Execution of the DP algorithm"

            We consider the CLS instance of <span style="color:#1971c2">[Example 25.10](#box-31-texcls1)</span>:

            $$
            \begin{array}{l|rrrrr}
            \hline {t} & {1} & {2} & {3} & {4} & {5} \\
            \hline {d_t} & {2} & {1} & {3} & {4} & {1} \\
            {sc_t} & {50} & {50} & {50} & {50} & {50} \\
            {vc_t} & {0} & {0} & {0} & {0} & {0} \\
            {hc_t} & {10} & {10} & {10} & {10} & {10} \\
            {cap_t} & {4} & {4} & {4} & {4} & {4} \\
            \hline
            \end{array}
            $$

            The remaining demands are $({R}[0],\dots,{R}[5])=(11,\allowbreak 9,\allowbreak 8,\allowbreak 5,\allowbreak 1,\allowbreak 0)$.

            For each step of the DP algorithm, the table shows the values of $t$ and $k$, the cell ${v}[t][k]$, and the operation performed. The candidates of the minimum are listed for $x=0,1,\dots,\min\{cap_t,k+d_t\}$.

            <div class="tabella" markdown="0"><table>
            <tr>
            <th><span class="arithmatex">\(t\)</span></th>
            <th><span class="arithmatex">\(k\)</span></th>
            <th><span class="arithmatex">\({v}[t][k]\)</span></th>
            <th>Action</th>
            </tr>
            <tr>
            <td><span class="arithmatex">\(0\)</span></td>
            <td><span class="arithmatex">\(0\)</span></td>
            <td><span class="arithmatex">\(0\)</span></td>
            <td><span class="arithmatex">\({v}[0][0]\leftarrow 0\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(0\)</span></td>
            <td><span class="arithmatex">\(1\)</span></td>
            <td><span class="arithmatex">\(+\infty\)</span></td>
            <td><span class="arithmatex">\({v}[0][1]\leftarrow +\infty\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(0\)</span></td>
            <td><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\(+\infty\)</span></td>
            <td><span class="arithmatex">\({v}[0][2]\leftarrow +\infty\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(0\)</span></td>
            <td><span class="arithmatex">\(3\)</span></td>
            <td><span class="arithmatex">\(+\infty\)</span></td>
            <td><span class="arithmatex">\({v}[0][3]\leftarrow +\infty\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(0\)</span></td>
            <td><span class="arithmatex">\(4\)</span></td>
            <td><span class="arithmatex">\(+\infty\)</span></td>
            <td><span class="arithmatex">\({v}[0][4]\leftarrow +\infty\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(0\)</span></td>
            <td><span class="arithmatex">\(5\)</span></td>
            <td><span class="arithmatex">\(+\infty\)</span></td>
            <td><span class="arithmatex">\({v}[0][5]\leftarrow +\infty\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(0\)</span></td>
            <td><span class="arithmatex">\(6\)</span></td>
            <td><span class="arithmatex">\(+\infty\)</span></td>
            <td><span class="arithmatex">\({v}[0][6]\leftarrow +\infty\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(0\)</span></td>
            <td><span class="arithmatex">\(7\)</span></td>
            <td><span class="arithmatex">\(+\infty\)</span></td>
            <td><span class="arithmatex">\({v}[0][7]\leftarrow +\infty\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(0\)</span></td>
            <td><span class="arithmatex">\(8\)</span></td>
            <td><span class="arithmatex">\(+\infty\)</span></td>
            <td><span class="arithmatex">\({v}[0][8]\leftarrow +\infty\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(0\)</span></td>
            <td><span class="arithmatex">\(9\)</span></td>
            <td><span class="arithmatex">\(+\infty\)</span></td>
            <td><span class="arithmatex">\({v}[0][9]\leftarrow +\infty\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(0\)</span></td>
            <td><span class="arithmatex">\(10\)</span></td>
            <td><span class="arithmatex">\(+\infty\)</span></td>
            <td><span class="arithmatex">\({v}[0][10]\leftarrow +\infty\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(0\)</span></td>
            <td><span class="arithmatex">\(11\)</span></td>
            <td><span class="arithmatex">\(+\infty\)</span></td>
            <td><span class="arithmatex">\({v}[0][11]\leftarrow +\infty\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(1\)</span></td>
            <td><span class="arithmatex">\(0\)</span></td>
            <td><span class="arithmatex">\(50\)</span></td>
            <td><span class="arithmatex">\(\min\{{v}[0][2]{+}f_{1}(0),\allowbreak {v}[0][1]{+}f_{1}(1),\allowbreak {v}[0][0]{+}f_{1}(2)\}{+}hc_{1}\cdot 0\)</span> <span class="arithmatex">\(=\min\{+\infty,\allowbreak +\infty,\allowbreak 0{+}50\}{+}10\cdot 0=50\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(1\)</span></td>
            <td><span class="arithmatex">\(1\)</span></td>
            <td><span class="arithmatex">\(60\)</span></td>
            <td><span class="arithmatex">\(\min\{{v}[0][3]{+}f_{1}(0),\allowbreak {v}[0][2]{+}f_{1}(1),\allowbreak {v}[0][1]{+}f_{1}(2),\allowbreak {v}[0][0]{+}f_{1}(3)\}{+}hc_{1}\cdot 1\)</span> <span class="arithmatex">\(=\min\{+\infty,\allowbreak +\infty,\allowbreak +\infty,\allowbreak 0{+}50\}{+}10\cdot 1=60\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(1\)</span></td>
            <td><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\(70\)</span></td>
            <td><span class="arithmatex">\(\min\{{v}[0][4]{+}f_{1}(0),\allowbreak {v}[0][3]{+}f_{1}(1),\allowbreak {v}[0][2]{+}f_{1}(2),\allowbreak {v}[0][1]{+}f_{1}(3),\allowbreak {v}[0][0]{+}f_{1}(4)\}{+}hc_{1}\cdot 2\)</span> <span class="arithmatex">\(=\min\{+\infty,\allowbreak +\infty,\allowbreak +\infty,\allowbreak +\infty,\allowbreak 0{+}50\}{+}10\cdot 2=70\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(1\)</span></td>
            <td><span class="arithmatex">\(3\)</span></td>
            <td><span class="arithmatex">\(+\infty\)</span></td>
            <td>the candidates use the cells <span class="arithmatex">\({v}[0][1],\dots,{v}[0][5]\)</span>, which are all <span class="arithmatex">\(+\infty\)</span>: <span class="arithmatex">\({v}[1][3]\leftarrow +\infty\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(1\)</span></td>
            <td><span class="arithmatex">\(4\)</span></td>
            <td><span class="arithmatex">\(+\infty\)</span></td>
            <td>the candidates use the cells <span class="arithmatex">\({v}[0][2],\dots,{v}[0][6]\)</span>, which are all <span class="arithmatex">\(+\infty\)</span>: <span class="arithmatex">\({v}[1][4]\leftarrow +\infty\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(1\)</span></td>
            <td><span class="arithmatex">\(5\)</span></td>
            <td><span class="arithmatex">\(+\infty\)</span></td>
            <td>the candidates use the cells <span class="arithmatex">\({v}[0][3],\dots,{v}[0][7]\)</span>, which are all <span class="arithmatex">\(+\infty\)</span>: <span class="arithmatex">\({v}[1][5]\leftarrow +\infty\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(1\)</span></td>
            <td><span class="arithmatex">\(6\)</span></td>
            <td><span class="arithmatex">\(+\infty\)</span></td>
            <td>the candidates use the cells <span class="arithmatex">\({v}[0][4],\dots,{v}[0][8]\)</span>, which are all <span class="arithmatex">\(+\infty\)</span>: <span class="arithmatex">\({v}[1][6]\leftarrow +\infty\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(1\)</span></td>
            <td><span class="arithmatex">\(7\)</span></td>
            <td><span class="arithmatex">\(+\infty\)</span></td>
            <td>the candidates use the cells <span class="arithmatex">\({v}[0][5],\dots,{v}[0][9]\)</span>, which are all <span class="arithmatex">\(+\infty\)</span>: <span class="arithmatex">\({v}[1][7]\leftarrow +\infty\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(1\)</span></td>
            <td><span class="arithmatex">\(8\)</span></td>
            <td><span class="arithmatex">\(+\infty\)</span></td>
            <td>the candidates use the cells <span class="arithmatex">\({v}[0][6],\dots,{v}[0][10]\)</span>, which are all <span class="arithmatex">\(+\infty\)</span>: <span class="arithmatex">\({v}[1][8]\leftarrow +\infty\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(1\)</span></td>
            <td><span class="arithmatex">\(9\)</span></td>
            <td><span class="arithmatex">\(+\infty\)</span></td>
            <td>the candidates use the cells <span class="arithmatex">\({v}[0][7],\dots,{v}[0][11]\)</span>, which are all <span class="arithmatex">\(+\infty\)</span>: <span class="arithmatex">\({v}[1][9]\leftarrow +\infty\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\(0\)</span></td>
            <td><span class="arithmatex">\(60\)</span></td>
            <td><span class="arithmatex">\(\min\{{v}[1][1]{+}f_{2}(0),\allowbreak {v}[1][0]{+}f_{2}(1)\}{+}hc_{2}\cdot 0\)</span> <span class="arithmatex">\(=\min\{60{+}0,\allowbreak 50{+}50\}{+}10\cdot 0=60\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\(1\)</span></td>
            <td><span class="arithmatex">\(80\)</span></td>
            <td><span class="arithmatex">\(\min\{{v}[1][2]{+}f_{2}(0),\allowbreak {v}[1][1]{+}f_{2}(1),\allowbreak {v}[1][0]{+}f_{2}(2)\}{+}hc_{2}\cdot 1\)</span> <span class="arithmatex">\(=\min\{70{+}0,\allowbreak 60{+}50,\allowbreak 50{+}50\}{+}10\cdot 1=80\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\(120\)</span></td>
            <td><span class="arithmatex">\(\min\{{v}[1][3]{+}f_{2}(0),\allowbreak {v}[1][2]{+}f_{2}(1),\allowbreak {v}[1][1]{+}f_{2}(2),\allowbreak {v}[1][0]{+}f_{2}(3)\}{+}hc_{2}\cdot 2\)</span> <span class="arithmatex">\(=\min\{+\infty,\allowbreak 70{+}50,\allowbreak 60{+}50,\allowbreak 50{+}50\}{+}10\cdot 2=120\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\(3\)</span></td>
            <td><span class="arithmatex">\(130\)</span></td>
            <td><span class="arithmatex">\(\min\{{v}[1][4]{+}f_{2}(0),\allowbreak {v}[1][3]{+}f_{2}(1),\allowbreak {v}[1][2]{+}f_{2}(2),\allowbreak {v}[1][1]{+}f_{2}(3),\allowbreak {v}[1][0]{+}f_{2}(4)\}{+}hc_{2}\cdot 3\)</span> <span class="arithmatex">\(=\min\{+\infty,\allowbreak +\infty,\allowbreak 70{+}50,\allowbreak 60{+}50,\allowbreak 50{+}50\}{+}10\cdot 3=130\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\(4\)</span></td>
            <td><span class="arithmatex">\(150\)</span></td>
            <td><span class="arithmatex">\(\min\{{v}[1][5]{+}f_{2}(0),\allowbreak {v}[1][4]{+}f_{2}(1),\allowbreak {v}[1][3]{+}f_{2}(2),\allowbreak {v}[1][2]{+}f_{2}(3),\allowbreak {v}[1][1]{+}f_{2}(4)\}{+}hc_{2}\cdot 4\)</span> <span class="arithmatex">\(=\min\{+\infty,\allowbreak +\infty,\allowbreak +\infty,\allowbreak 70{+}50,\allowbreak 60{+}50\}{+}10\cdot 4=150\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\(5\)</span></td>
            <td><span class="arithmatex">\(170\)</span></td>
            <td><span class="arithmatex">\(\min\{{v}[1][6]{+}f_{2}(0),\allowbreak {v}[1][5]{+}f_{2}(1),\allowbreak {v}[1][4]{+}f_{2}(2),\allowbreak {v}[1][3]{+}f_{2}(3),\allowbreak {v}[1][2]{+}f_{2}(4)\}{+}hc_{2}\cdot 5\)</span> <span class="arithmatex">\(=\min\{+\infty,\allowbreak +\infty,\allowbreak +\infty,\allowbreak +\infty,\allowbreak 70{+}50\}{+}10\cdot 5=170\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\(6\)</span></td>
            <td><span class="arithmatex">\(+\infty\)</span></td>
            <td>the candidates use the cells <span class="arithmatex">\({v}[1][3],\dots,{v}[1][7]\)</span>, which are all <span class="arithmatex">\(+\infty\)</span>: <span class="arithmatex">\({v}[2][6]\leftarrow +\infty\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\(7\)</span></td>
            <td><span class="arithmatex">\(+\infty\)</span></td>
            <td>the candidates use the cells <span class="arithmatex">\({v}[1][4],\dots,{v}[1][8]\)</span>, which are all <span class="arithmatex">\(+\infty\)</span>: <span class="arithmatex">\({v}[2][7]\leftarrow +\infty\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\(8\)</span></td>
            <td><span class="arithmatex">\(+\infty\)</span></td>
            <td>the candidates use the cells <span class="arithmatex">\({v}[1][5],\dots,{v}[1][9]\)</span>, which are all <span class="arithmatex">\(+\infty\)</span>: <span class="arithmatex">\({v}[2][8]\leftarrow +\infty\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(3\)</span></td>
            <td><span class="arithmatex">\(0\)</span></td>
            <td><span class="arithmatex">\(110\)</span></td>
            <td><span class="arithmatex">\(\min\{{v}[2][3]{+}f_{3}(0),\allowbreak {v}[2][2]{+}f_{3}(1),\allowbreak {v}[2][1]{+}f_{3}(2),\allowbreak {v}[2][0]{+}f_{3}(3)\}{+}hc_{3}\cdot 0\)</span> <span class="arithmatex">\(=\min\{130{+}0,\allowbreak 120{+}50,\allowbreak 80{+}50,\allowbreak 60{+}50\}{+}10\cdot 0=110\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(3\)</span></td>
            <td><span class="arithmatex">\(1\)</span></td>
            <td><span class="arithmatex">\(120\)</span></td>
            <td><span class="arithmatex">\(\min\{{v}[2][4]{+}f_{3}(0),\allowbreak {v}[2][3]{+}f_{3}(1),\allowbreak {v}[2][2]{+}f_{3}(2),\allowbreak {v}[2][1]{+}f_{3}(3),\allowbreak {v}[2][0]{+}f_{3}(4)\}{+}hc_{3}\cdot 1\)</span> <span class="arithmatex">\(=\min\{150{+}0,\allowbreak 130{+}50,\allowbreak 120{+}50,\allowbreak 80{+}50,\allowbreak 60{+}50\}{+}10\cdot 1=120\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(3\)</span></td>
            <td><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\(150\)</span></td>
            <td><span class="arithmatex">\(\min\{{v}[2][5]{+}f_{3}(0),\allowbreak {v}[2][4]{+}f_{3}(1),\allowbreak {v}[2][3]{+}f_{3}(2),\allowbreak {v}[2][2]{+}f_{3}(3),\allowbreak {v}[2][1]{+}f_{3}(4)\}{+}hc_{3}\cdot 2\)</span> <span class="arithmatex">\(=\min\{170{+}0,\allowbreak 150{+}50,\allowbreak 130{+}50,\allowbreak 120{+}50,\allowbreak 80{+}50\}{+}10\cdot 2=150\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(3\)</span></td>
            <td><span class="arithmatex">\(3\)</span></td>
            <td><span class="arithmatex">\(200\)</span></td>
            <td><span class="arithmatex">\(\min\{{v}[2][6]{+}f_{3}(0),\allowbreak {v}[2][5]{+}f_{3}(1),\allowbreak {v}[2][4]{+}f_{3}(2),\allowbreak {v}[2][3]{+}f_{3}(3),\allowbreak {v}[2][2]{+}f_{3}(4)\}{+}hc_{3}\cdot 3\)</span> <span class="arithmatex">\(=\min\{+\infty,\allowbreak 170{+}50,\allowbreak 150{+}50,\allowbreak 130{+}50,\allowbreak 120{+}50\}{+}10\cdot 3=200\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(3\)</span></td>
            <td><span class="arithmatex">\(4\)</span></td>
            <td><span class="arithmatex">\(220\)</span></td>
            <td><span class="arithmatex">\(\min\{{v}[2][7]{+}f_{3}(0),\allowbreak {v}[2][6]{+}f_{3}(1),\allowbreak {v}[2][5]{+}f_{3}(2),\allowbreak {v}[2][4]{+}f_{3}(3),\allowbreak {v}[2][3]{+}f_{3}(4)\}{+}hc_{3}\cdot 4\)</span> <span class="arithmatex">\(=\min\{+\infty,\allowbreak +\infty,\allowbreak 170{+}50,\allowbreak 150{+}50,\allowbreak 130{+}50\}{+}10\cdot 4=220\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(3\)</span></td>
            <td><span class="arithmatex">\(5\)</span></td>
            <td><span class="arithmatex">\(250\)</span></td>
            <td><span class="arithmatex">\(\min\{{v}[2][8]{+}f_{3}(0),\allowbreak {v}[2][7]{+}f_{3}(1),\allowbreak {v}[2][6]{+}f_{3}(2),\allowbreak {v}[2][5]{+}f_{3}(3),\allowbreak {v}[2][4]{+}f_{3}(4)\}{+}hc_{3}\cdot 5\)</span> <span class="arithmatex">\(=\min\{+\infty,\allowbreak +\infty,\allowbreak +\infty,\allowbreak 170{+}50,\allowbreak 150{+}50\}{+}10\cdot 5=250\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(4\)</span></td>
            <td><span class="arithmatex">\(0\)</span></td>
            <td><span class="arithmatex">\(160\)</span></td>
            <td><span class="arithmatex">\(\min\{{v}[3][4]{+}f_{4}(0),\allowbreak {v}[3][3]{+}f_{4}(1),\allowbreak {v}[3][2]{+}f_{4}(2),\allowbreak {v}[3][1]{+}f_{4}(3),\allowbreak {v}[3][0]{+}f_{4}(4)\}{+}hc_{4}\cdot 0\)</span> <span class="arithmatex">\(=\min\{220{+}0,\allowbreak 200{+}50,\allowbreak 150{+}50,\allowbreak 120{+}50,\allowbreak 110{+}50\}{+}10\cdot 0=160\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(4\)</span></td>
            <td><span class="arithmatex">\(1\)</span></td>
            <td><span class="arithmatex">\(180\)</span></td>
            <td><span class="arithmatex">\(\min\{{v}[3][5]{+}f_{4}(0),\allowbreak {v}[3][4]{+}f_{4}(1),\allowbreak {v}[3][3]{+}f_{4}(2),\allowbreak {v}[3][2]{+}f_{4}(3),\allowbreak {v}[3][1]{+}f_{4}(4)\}{+}hc_{4}\cdot 1\)</span> <span class="arithmatex">\(=\min\{250{+}0,\allowbreak 220{+}50,\allowbreak 200{+}50,\allowbreak 150{+}50,\allowbreak 120{+}50\}{+}10\cdot 1=180\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(5\)</span></td>
            <td><span class="arithmatex">\(0\)</span></td>
            <td><span class="arithmatex">\(180\)</span></td>
            <td><span class="arithmatex">\(\min\{{v}[4][1]{+}f_{5}(0),\allowbreak {v}[4][0]{+}f_{5}(1)\}{+}hc_{5}\cdot 0\)</span> <span class="arithmatex">\(=\min\{180{+}0,\allowbreak 160{+}50\}{+}10\cdot 0=180\)</span></td>
            </tr>
            </table></div>

            This is the matrix ${v}$ after the execution of the DP algorithm (a dot marks a pair $(t,k)$ with $k>D_{t+1,m}$, which is not a state):

            $$
            \begin{array}{l|rrrrrrrrrrrr}
            \hline {{v}[t][k]} & {0} & {1} & {2} & {3} & {4} & {5} & {6} & {7} & {8} & {9} & {10} & {11} \\
            \hline {t=0} & {0} & {+\infty} & {+\infty} & {+\infty} & {+\infty} & {+\infty} & {+\infty} & {+\infty} & {+\infty} & {+\infty} & {+\infty} & {+\infty} \\
            {t=1} & {50} & {60} & {70} & {+\infty} & {+\infty} & {+\infty} & {+\infty} & {+\infty} & {+\infty} & {+\infty} & {\cdot} & {\cdot} \\
            {t=2} & {60} & {80} & {120} & {130} & {150} & {170} & {+\infty} & {+\infty} & {+\infty} & {\cdot} & {\cdot} & {\cdot} \\
            {t=3} & {110} & {120} & {150} & {200} & {220} & {250} & {\cdot} & {\cdot} & {\cdot} & {\cdot} & {\cdot} & {\cdot} \\
            {t=4} & {160} & {180} & {\cdot} & {\cdot} & {\cdot} & {\cdot} & {\cdot} & {\cdot} & {\cdot} & {\cdot} & {\cdot} & {\cdot} \\
            {t=5} & {180} & {\cdot} & {\cdot} & {\cdot} & {\cdot} & {\cdot} & {\cdot} & {\cdot} & {\cdot} & {\cdot} & {\cdot} & {\cdot} \\
            \hline
            \end{array}
            $$

            The optimal value of the CLS instance is ${v}[5][0]=180$.

    - After the execution of the DP algorithm, the matrix ${v}$ contains the optimal value ${v}[t][k]$ for every state $(t,k)$.

- <u>Step 2</u>: computation of an optimal solution

    - To compute an optimal solution, it is necessary to store some additional information.

    - For each state $(t,k)$, in addition to the optimal value ${v}[t][k]$, we store ${r}[t][k]$, the production of period $t$ in an optimal solution of the subinstance of state $(t,k)$; for the states with value $+\infty$ we store $0$.

    - Starting from $(t,k)=(m,0)$, the value ${r}[t][k]$ gives the production of period $t$; the inventory at the end of period $t-1$ is then $k+d_t-{r}[t][k]$, and the same rule can be applied again to period $t-1$, and so on, until $t=0$.

        This is the pseudo-code of the <strong>DP algorithm using the bottom-up approach</strong> with the storing of the information necessary to compute an optimal solution:

        !!! algoritmo "Algorithm: DP\_CLS\_InfoSol"

            <div class="pseudocodice" markdown="0"><div class="pc" style="--liv:0"><strong>Input:</strong> A CLS instance given by the number <span class="arithmatex">\(m\)</span> of periods and the arrays <span class="arithmatex">\(d[1..m]\)</span>, <span class="arithmatex">\(sc[1..m]\)</span>, <span class="arithmatex">\(vc[1..m]\)</span>, <span class="arithmatex">\(hc[1..m]\)</span>, <span class="arithmatex">\(cap[1..m]\)</span></div><div class="pc" style="--liv:0"><strong>Output:</strong> The optimal value and the information matrix <span class="arithmatex">\({r}[0..m][0..D_{1,m}]\)</span></div><div class="pc" style="--liv:0"><span class="pc-n">1</span><strong>Function</strong> DP_CLS_InfoSol(<span class="arithmatex">\(m,d,sc,vc,hc,cap\)</span>)</div><div class="pc" style="--liv:1"><span class="pc-n">2</span><span class="arithmatex">\({R} := \textnormal{new array}[0..m]\)</span></div><div class="pc" style="--liv:1"><span class="pc-n">3</span><span class="arithmatex">\({R}[m] \leftarrow 0\)</span></div><div class="pc" style="--liv:1"><span class="pc-n">4</span><strong>for</strong> <span class="arithmatex">\(t := m-1\)</span> <strong>downto</strong> <span class="arithmatex">\(0\)</span> <strong>do</strong></div><div class="pc" style="--liv:2"><span class="pc-n">5</span><span class="arithmatex">\({R}[t] \leftarrow {R}[t+1] + d[t+1]\)</span></div><div class="pc" style="--liv:1"><span class="pc-n">6</span><strong>end</strong></div><div class="pc" style="--liv:1"><span class="pc-n">7</span><span class="arithmatex">\({v} := \textnormal{new array}[0..m][0..{R}[0]]\)</span></div><div class="pc" style="--liv:1"><span class="pc-n">8</span><span class="arithmatex">\({r} := \textnormal{new array}[0..m][0..{R}[0]]\)</span></div><div class="pc" style="--liv:1"><span class="pc-n">9</span><span class="arithmatex">\({v}[0][0] \leftarrow 0\)</span></div><div class="pc" style="--liv:1"><span class="pc-n">10</span><span class="arithmatex">\({r}[0][0] \leftarrow 0\)</span></div><div class="pc" style="--liv:1"><span class="pc-n">11</span><strong>for</strong> <span class="arithmatex">\(k := 1\)</span> <strong>to</strong> <span class="arithmatex">\({R}[0]\)</span> <strong>do</strong></div><div class="pc" style="--liv:2"><span class="pc-n">12</span><span class="arithmatex">\({v}[0][k] \leftarrow +\infty\)</span></div><div class="pc" style="--liv:2"><span class="pc-n">13</span><span class="arithmatex">\({r}[0][k] \leftarrow 0\)</span></div><div class="pc" style="--liv:1"><span class="pc-n">14</span><strong>end</strong></div><div class="pc" style="--liv:1"><span class="pc-n">15</span><strong>for</strong> <span class="arithmatex">\(t := 1\)</span> <strong>to</strong> <span class="arithmatex">\(m\)</span> <strong>do</strong></div><div class="pc" style="--liv:2"><span class="pc-n">16</span><strong>for</strong> <span class="arithmatex">\(k := 0\)</span> <strong>to</strong> <span class="arithmatex">\({R}[t]\)</span> <strong>do</strong></div><div class="pc" style="--liv:3"><span class="pc-n">17</span><span class="arithmatex">\(\mathit{b} := +\infty\)</span></div><div class="pc" style="--liv:3"><span class="pc-n">18</span><span class="arithmatex">\(\mathit{a} := 0\)</span></div><div class="pc" style="--liv:3"><span class="pc-n">19</span><strong>for</strong> <span class="arithmatex">\(x := 0\)</span> <strong>to</strong> <span class="arithmatex">\(\min\{cap[t],\,k+d[t]\}\)</span> <strong>do</strong></div><div class="pc" style="--liv:4"><span class="pc-n">20</span><strong>if</strong> <span class="arithmatex">\({v}[t-1][k+d[t]-x] + f_t(x) + hc[t]\cdot k < \mathit{b}\)</span> <strong>then</strong></div><div class="pc" style="--liv:5"><span class="pc-n">21</span><span class="arithmatex">\(\mathit{b} \leftarrow {v}[t-1][k+d[t]-x] + f_t(x) + hc[t]\cdot k\)</span></div><div class="pc" style="--liv:5"><span class="pc-n">22</span><span class="arithmatex">\(\mathit{a} \leftarrow x\)</span></div><div class="pc" style="--liv:4"><span class="pc-n">23</span><strong>end</strong></div><div class="pc" style="--liv:3"><span class="pc-n">24</span><strong>end</strong></div><div class="pc" style="--liv:3"><span class="pc-n">25</span><span class="arithmatex">\({v}[t][k] \leftarrow \mathit{b}\)</span></div><div class="pc" style="--liv:3"><span class="pc-n">26</span><span class="arithmatex">\({r}[t][k] \leftarrow \mathit{a}\)</span></div><div class="pc" style="--liv:2"><span class="pc-n">27</span><strong>end</strong></div><div class="pc" style="--liv:1"><span class="pc-n">28</span><strong>end</strong></div><div class="pc" style="--liv:1"><span class="pc-n">29</span><strong>return</strong> <span class="arithmatex">\({v}[m][0], {r}\)</span></div></div>

        - The DP algorithm uses the additional temporary variable $\mathit{a}$ to keep track of the decision made when $\mathit{b}$ is updated: if the production $x$ is selected, $\mathit{a}\leftarrow x$ stores this decision, and at the end of the inner loop ${r}[t][k]\leftarrow\mathit{a}$ stores it, together with the optimal value ${v}[t][k]\leftarrow\mathit{b}$. Because of the strict comparison, in case of ties the smallest production is stored.

        <a id="box-49-texclsbuinfo"></a>

        !!! esempio "Example 25.12: Computation of the additional information"

            We consider the CLS instance of <span style="color:#1971c2">[Example 25.10](#box-31-texcls1)</span>:

            $$
            \begin{array}{l|rrrrr}
            \hline {t} & {1} & {2} & {3} & {4} & {5} \\
            \hline {d_t} & {2} & {1} & {3} & {4} & {1} \\
            {sc_t} & {50} & {50} & {50} & {50} & {50} \\
            {vc_t} & {0} & {0} & {0} & {0} & {0} \\
            {hc_t} & {10} & {10} & {10} & {10} & {10} \\
            {cap_t} & {4} & {4} & {4} & {4} & {4} \\
            \hline
            \end{array}
            $$

            For each step of the DP algorithm, the table shows the values of $t$ and $k$, the cell ${r}[t][k]$, and the production $x$ for which the minimum of the corresponding row of <span style="color:#1971c2">[Example 25.11](#box-48-texclsbu)</span> is attained first.

            <div class="tabella" markdown="0"><table>
            <tr>
            <th><span class="arithmatex">\(t\)</span></th>
            <th><span class="arithmatex">\(k\)</span></th>
            <th><span class="arithmatex">\({r}[t][k]\)</span></th>
            <th>Action</th>
            </tr>
            <tr>
            <td><span class="arithmatex">\(0\)</span></td>
            <td><span class="arithmatex">\(0\)</span></td>
            <td>0</td>
            <td><span class="arithmatex">\({r}[0][0]\leftarrow 0\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(0\)</span></td>
            <td><span class="arithmatex">\(1\)</span></td>
            <td>0</td>
            <td><span class="arithmatex">\({r}[0][1]\leftarrow 0\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(0\)</span></td>
            <td><span class="arithmatex">\(2\)</span></td>
            <td>0</td>
            <td><span class="arithmatex">\({r}[0][2]\leftarrow 0\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(0\)</span></td>
            <td><span class="arithmatex">\(3\)</span></td>
            <td>0</td>
            <td><span class="arithmatex">\({r}[0][3]\leftarrow 0\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(0\)</span></td>
            <td><span class="arithmatex">\(4\)</span></td>
            <td>0</td>
            <td><span class="arithmatex">\({r}[0][4]\leftarrow 0\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(0\)</span></td>
            <td><span class="arithmatex">\(5\)</span></td>
            <td>0</td>
            <td><span class="arithmatex">\({r}[0][5]\leftarrow 0\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(0\)</span></td>
            <td><span class="arithmatex">\(6\)</span></td>
            <td>0</td>
            <td><span class="arithmatex">\({r}[0][6]\leftarrow 0\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(0\)</span></td>
            <td><span class="arithmatex">\(7\)</span></td>
            <td>0</td>
            <td><span class="arithmatex">\({r}[0][7]\leftarrow 0\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(0\)</span></td>
            <td><span class="arithmatex">\(8\)</span></td>
            <td>0</td>
            <td><span class="arithmatex">\({r}[0][8]\leftarrow 0\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(0\)</span></td>
            <td><span class="arithmatex">\(9\)</span></td>
            <td>0</td>
            <td><span class="arithmatex">\({r}[0][9]\leftarrow 0\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(0\)</span></td>
            <td><span class="arithmatex">\(10\)</span></td>
            <td>0</td>
            <td><span class="arithmatex">\({r}[0][10]\leftarrow 0\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(0\)</span></td>
            <td><span class="arithmatex">\(11\)</span></td>
            <td>0</td>
            <td><span class="arithmatex">\({r}[0][11]\leftarrow 0\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(1\)</span></td>
            <td><span class="arithmatex">\(0\)</span></td>
            <td><span class="arithmatex">\(2\)</span></td>
            <td>first minimum at <span class="arithmatex">\(x=2\)</span>, i.e., <span class="arithmatex">\({v}[0][0]{+}f_{1}(2){+}hc_{1}\cdot 0=0{+}50{+}0=50\)</span>: <span class="arithmatex">\({r}[1][0]\leftarrow 2\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(1\)</span></td>
            <td><span class="arithmatex">\(1\)</span></td>
            <td><span class="arithmatex">\(3\)</span></td>
            <td>first minimum at <span class="arithmatex">\(x=3\)</span>, i.e., <span class="arithmatex">\({v}[0][0]{+}f_{1}(3){+}hc_{1}\cdot 1=0{+}50{+}10=60\)</span>: <span class="arithmatex">\({r}[1][1]\leftarrow 3\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(1\)</span></td>
            <td><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\(4\)</span></td>
            <td>first minimum at <span class="arithmatex">\(x=4\)</span>, i.e., <span class="arithmatex">\({v}[0][0]{+}f_{1}(4){+}hc_{1}\cdot 2=0{+}50{+}20=70\)</span>: <span class="arithmatex">\({r}[1][2]\leftarrow 4\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(1\)</span></td>
            <td><span class="arithmatex">\(3\)</span></td>
            <td><span class="arithmatex">\(0\)</span></td>
            <td>all candidates equal <span class="arithmatex">\(+\infty\)</span>: <span class="arithmatex">\({r}[1][3]\leftarrow 0\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(1\)</span></td>
            <td><span class="arithmatex">\(4\)</span></td>
            <td><span class="arithmatex">\(0\)</span></td>
            <td>all candidates equal <span class="arithmatex">\(+\infty\)</span>: <span class="arithmatex">\({r}[1][4]\leftarrow 0\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(1\)</span></td>
            <td><span class="arithmatex">\(5\)</span></td>
            <td><span class="arithmatex">\(0\)</span></td>
            <td>all candidates equal <span class="arithmatex">\(+\infty\)</span>: <span class="arithmatex">\({r}[1][5]\leftarrow 0\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(1\)</span></td>
            <td><span class="arithmatex">\(6\)</span></td>
            <td><span class="arithmatex">\(0\)</span></td>
            <td>all candidates equal <span class="arithmatex">\(+\infty\)</span>: <span class="arithmatex">\({r}[1][6]\leftarrow 0\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(1\)</span></td>
            <td><span class="arithmatex">\(7\)</span></td>
            <td><span class="arithmatex">\(0\)</span></td>
            <td>all candidates equal <span class="arithmatex">\(+\infty\)</span>: <span class="arithmatex">\({r}[1][7]\leftarrow 0\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(1\)</span></td>
            <td><span class="arithmatex">\(8\)</span></td>
            <td><span class="arithmatex">\(0\)</span></td>
            <td>all candidates equal <span class="arithmatex">\(+\infty\)</span>: <span class="arithmatex">\({r}[1][8]\leftarrow 0\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(1\)</span></td>
            <td><span class="arithmatex">\(9\)</span></td>
            <td><span class="arithmatex">\(0\)</span></td>
            <td>all candidates equal <span class="arithmatex">\(+\infty\)</span>: <span class="arithmatex">\({r}[1][9]\leftarrow 0\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\(0\)</span></td>
            <td><span class="arithmatex">\(0\)</span></td>
            <td>first minimum at <span class="arithmatex">\(x=0\)</span>, i.e., <span class="arithmatex">\({v}[1][1]{+}f_{2}(0){+}hc_{2}\cdot 0=60{+}0{+}0=60\)</span>: <span class="arithmatex">\({r}[2][0]\leftarrow 0\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\(1\)</span></td>
            <td><span class="arithmatex">\(0\)</span></td>
            <td>first minimum at <span class="arithmatex">\(x=0\)</span>, i.e., <span class="arithmatex">\({v}[1][2]{+}f_{2}(0){+}hc_{2}\cdot 1=70{+}0{+}10=80\)</span>: <span class="arithmatex">\({r}[2][1]\leftarrow 0\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\(3\)</span></td>
            <td>first minimum at <span class="arithmatex">\(x=3\)</span>, i.e., <span class="arithmatex">\({v}[1][0]{+}f_{2}(3){+}hc_{2}\cdot 2=50{+}50{+}20=120\)</span>: <span class="arithmatex">\({r}[2][2]\leftarrow 3\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\(3\)</span></td>
            <td><span class="arithmatex">\(4\)</span></td>
            <td>first minimum at <span class="arithmatex">\(x=4\)</span>, i.e., <span class="arithmatex">\({v}[1][0]{+}f_{2}(4){+}hc_{2}\cdot 3=50{+}50{+}30=130\)</span>: <span class="arithmatex">\({r}[2][3]\leftarrow 4\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\(4\)</span></td>
            <td><span class="arithmatex">\(4\)</span></td>
            <td>first minimum at <span class="arithmatex">\(x=4\)</span>, i.e., <span class="arithmatex">\({v}[1][1]{+}f_{2}(4){+}hc_{2}\cdot 4=60{+}50{+}40=150\)</span>: <span class="arithmatex">\({r}[2][4]\leftarrow 4\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\(5\)</span></td>
            <td><span class="arithmatex">\(4\)</span></td>
            <td>first minimum at <span class="arithmatex">\(x=4\)</span>, i.e., <span class="arithmatex">\({v}[1][2]{+}f_{2}(4){+}hc_{2}\cdot 5=70{+}50{+}50=170\)</span>: <span class="arithmatex">\({r}[2][5]\leftarrow 4\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\(6\)</span></td>
            <td><span class="arithmatex">\(0\)</span></td>
            <td>all candidates equal <span class="arithmatex">\(+\infty\)</span>: <span class="arithmatex">\({r}[2][6]\leftarrow 0\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\(7\)</span></td>
            <td><span class="arithmatex">\(0\)</span></td>
            <td>all candidates equal <span class="arithmatex">\(+\infty\)</span>: <span class="arithmatex">\({r}[2][7]\leftarrow 0\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\(8\)</span></td>
            <td><span class="arithmatex">\(0\)</span></td>
            <td>all candidates equal <span class="arithmatex">\(+\infty\)</span>: <span class="arithmatex">\({r}[2][8]\leftarrow 0\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(3\)</span></td>
            <td><span class="arithmatex">\(0\)</span></td>
            <td><span class="arithmatex">\(3\)</span></td>
            <td>first minimum at <span class="arithmatex">\(x=3\)</span>, i.e., <span class="arithmatex">\({v}[2][0]{+}f_{3}(3){+}hc_{3}\cdot 0=60{+}50{+}0=110\)</span>: <span class="arithmatex">\({r}[3][0]\leftarrow 3\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(3\)</span></td>
            <td><span class="arithmatex">\(1\)</span></td>
            <td><span class="arithmatex">\(4\)</span></td>
            <td>first minimum at <span class="arithmatex">\(x=4\)</span>, i.e., <span class="arithmatex">\({v}[2][0]{+}f_{3}(4){+}hc_{3}\cdot 1=60{+}50{+}10=120\)</span>: <span class="arithmatex">\({r}[3][1]\leftarrow 4\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(3\)</span></td>
            <td><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\(4\)</span></td>
            <td>first minimum at <span class="arithmatex">\(x=4\)</span>, i.e., <span class="arithmatex">\({v}[2][1]{+}f_{3}(4){+}hc_{3}\cdot 2=80{+}50{+}20=150\)</span>: <span class="arithmatex">\({r}[3][2]\leftarrow 4\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(3\)</span></td>
            <td><span class="arithmatex">\(3\)</span></td>
            <td><span class="arithmatex">\(4\)</span></td>
            <td>first minimum at <span class="arithmatex">\(x=4\)</span>, i.e., <span class="arithmatex">\({v}[2][2]{+}f_{3}(4){+}hc_{3}\cdot 3=120{+}50{+}30=200\)</span>: <span class="arithmatex">\({r}[3][3]\leftarrow 4\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(3\)</span></td>
            <td><span class="arithmatex">\(4\)</span></td>
            <td><span class="arithmatex">\(4\)</span></td>
            <td>first minimum at <span class="arithmatex">\(x=4\)</span>, i.e., <span class="arithmatex">\({v}[2][3]{+}f_{3}(4){+}hc_{3}\cdot 4=130{+}50{+}40=220\)</span>: <span class="arithmatex">\({r}[3][4]\leftarrow 4\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(3\)</span></td>
            <td><span class="arithmatex">\(5\)</span></td>
            <td><span class="arithmatex">\(4\)</span></td>
            <td>first minimum at <span class="arithmatex">\(x=4\)</span>, i.e., <span class="arithmatex">\({v}[2][4]{+}f_{3}(4){+}hc_{3}\cdot 5=150{+}50{+}50=250\)</span>: <span class="arithmatex">\({r}[3][5]\leftarrow 4\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(4\)</span></td>
            <td><span class="arithmatex">\(0\)</span></td>
            <td><span class="arithmatex">\(4\)</span></td>
            <td>first minimum at <span class="arithmatex">\(x=4\)</span>, i.e., <span class="arithmatex">\({v}[3][0]{+}f_{4}(4){+}hc_{4}\cdot 0=110{+}50{+}0=160\)</span>: <span class="arithmatex">\({r}[4][0]\leftarrow 4\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(4\)</span></td>
            <td><span class="arithmatex">\(1\)</span></td>
            <td><span class="arithmatex">\(4\)</span></td>
            <td>first minimum at <span class="arithmatex">\(x=4\)</span>, i.e., <span class="arithmatex">\({v}[3][1]{+}f_{4}(4){+}hc_{4}\cdot 1=120{+}50{+}10=180\)</span>: <span class="arithmatex">\({r}[4][1]\leftarrow 4\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(5\)</span></td>
            <td><span class="arithmatex">\(0\)</span></td>
            <td><span class="arithmatex">\(0\)</span></td>
            <td>first minimum at <span class="arithmatex">\(x=0\)</span>, i.e., <span class="arithmatex">\({v}[4][1]{+}f_{5}(0){+}hc_{5}\cdot 0=180{+}0{+}0=180\)</span>: <span class="arithmatex">\({r}[5][0]\leftarrow 0\)</span></td>
            </tr>
            </table></div>

            This is the matrix ${r}$ after the execution of the DP algorithm:

            $$
            \begin{array}{l|rrrrrrrrrrrr}
            \hline {{r}[t][k]} & {0} & {1} & {2} & {3} & {4} & {5} & {6} & {7} & {8} & {9} & {10} & {11} \\
            \hline {t=0} & {0} & {0} & {0} & {0} & {0} & {0} & {0} & {0} & {0} & {0} & {0} & {0} \\
            {t=1} & {2} & {3} & {4} & {0} & {0} & {0} & {0} & {0} & {0} & {0} & {\cdot} & {\cdot} \\
            {t=2} & {0} & {0} & {3} & {4} & {4} & {4} & {0} & {0} & {0} & {\cdot} & {\cdot} & {\cdot} \\
            {t=3} & {3} & {4} & {4} & {4} & {4} & {4} & {\cdot} & {\cdot} & {\cdot} & {\cdot} & {\cdot} & {\cdot} \\
            {t=4} & {4} & {4} & {\cdot} & {\cdot} & {\cdot} & {\cdot} & {\cdot} & {\cdot} & {\cdot} & {\cdot} & {\cdot} & {\cdot} \\
            {t=5} & {0} & {\cdot} & {\cdot} & {\cdot} & {\cdot} & {\cdot} & {\cdot} & {\cdot} & {\cdot} & {\cdot} & {\cdot} & {\cdot} \\
            \hline
            \end{array}
            $$

    - Once the matrix ${r}$ has been computed, an optimal solution of the CLS instance can be computed by applying the following rule for $t=m,m-1,\dots,1$, starting from $k=0$:

        $$
        x_t \leftarrow {r}[t][k],
        \qquad
        k \leftarrow k+d_t-x_t.
        $$

        This yields the vector $(x_1,x_2,\dots,x_m)$, where each entry $x_t$ is the number of units produced in period $t$ in an optimal solution.

    - The following pseudo-code implements the computation of an optimal solution, given the matrix ${r}$.

        !!! algoritmo "Algorithm: DP\_CLS\_SolComputation"

            <div class="pseudocodice" markdown="0"><div class="pc" style="--liv:0"><strong>Input:</strong> The number <span class="arithmatex">\(m\)</span> of periods and the demands <span class="arithmatex">\(d[1..m]\)</span> of the CLS instance, and the matrix <span class="arithmatex">\({r}[0..m][0..D_{1,m}]\)</span></div><div class="pc" style="--liv:0"><strong>Output:</strong> An optimal solution of the CLS instance</div><div class="pc" style="--liv:0"><span class="pc-n">1</span><strong>Function</strong> DP_CLS_SolComputation(<span class="arithmatex">\(m,d,{r}\)</span>)</div><div class="pc" style="--liv:1"><span class="pc-n">2</span><span class="arithmatex">\(x := \textnormal{new array}[1..m]\)</span></div><div class="pc" style="--liv:1"><span class="pc-n">3</span><span class="arithmatex">\(k := 0\)</span></div><div class="pc" style="--liv:1"><span class="pc-n">4</span><strong>for</strong> <span class="arithmatex">\(t := m\)</span> <strong>downto</strong> <span class="arithmatex">\(1\)</span> <strong>do</strong></div><div class="pc" style="--liv:2"><span class="pc-n">5</span><span class="arithmatex">\(x[t] \leftarrow {r}[t][k]\)</span></div><div class="pc" style="--liv:2"><span class="pc-n">6</span><span class="arithmatex">\(k \leftarrow k + d[t] - x[t]\)</span></div><div class="pc" style="--liv:1"><span class="pc-n">7</span><strong>end</strong></div><div class="pc" style="--liv:1"><span class="pc-n">8</span><strong>return</strong> <span class="arithmatex">\(x\)</span></div></div>

        <a id="box-50-texclssolvector"></a>

        !!! esempio "Example 25.13: Computing an optimal solution"

            After the execution of the DP algorithm on the instance of <span style="color:#1971c2">[Example 25.10](#box-31-texcls1)</span>, we have the matrix ${r}$ of <span style="color:#1971c2">[Example 25.12](#box-49-texclsbuinfo)</span>. We can compute an optimal solution as follows:

            <div class="tabella" markdown="0"><table>
            <tr>
            <th>Iteration</th>
            <th><span class="arithmatex">\(t\)</span></th>
            <th><span class="arithmatex">\(k\)</span></th>
            <th><span class="arithmatex">\({r}[t][k]\)</span></th>
            <th><span class="arithmatex">\(x[1]\)</span></th>
            <th><span class="arithmatex">\(x[2]\)</span></th>
            <th><span class="arithmatex">\(x[3]\)</span></th>
            <th><span class="arithmatex">\(x[4]\)</span></th>
            <th><span class="arithmatex">\(x[5]\)</span></th>
            <th><span class="arithmatex">\(k\leftarrow k+d[t]-x[t]\)</span></th>
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
            <td><span class="arithmatex">\(t=5\)</span>, <span class="arithmatex">\(k=0\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(1\)</span></td>
            <td><span class="arithmatex">\(5\)</span></td>
            <td><span class="arithmatex">\(0\)</span></td>
            <td><span class="arithmatex">\(0\)</span></td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td class="cella-blu">0</td>
            <td><span class="arithmatex">\(k=0+1-0=1\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\(4\)</span></td>
            <td><span class="arithmatex">\(1\)</span></td>
            <td><span class="arithmatex">\(4\)</span></td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td class="cella-blu">4</td>
            <td>0</td>
            <td><span class="arithmatex">\(k=1+4-4=1\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(3\)</span></td>
            <td><span class="arithmatex">\(3\)</span></td>
            <td><span class="arithmatex">\(1\)</span></td>
            <td><span class="arithmatex">\(4\)</span></td>
            <td>0</td>
            <td>0</td>
            <td class="cella-blu">4</td>
            <td>4</td>
            <td>0</td>
            <td><span class="arithmatex">\(k=1+3-4=0\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(4\)</span></td>
            <td><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\(0\)</span></td>
            <td><span class="arithmatex">\(0\)</span></td>
            <td>0</td>
            <td class="cella-blu">0</td>
            <td>4</td>
            <td>4</td>
            <td>0</td>
            <td><span class="arithmatex">\(k=0+1-0=1\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(5\)</span></td>
            <td><span class="arithmatex">\(1\)</span></td>
            <td><span class="arithmatex">\(1\)</span></td>
            <td><span class="arithmatex">\(3\)</span></td>
            <td class="cella-blu">3</td>
            <td>0</td>
            <td>4</td>
            <td>4</td>
            <td>0</td>
            <td><span class="arithmatex">\(k=1+2-3=0\)</span></td>
            </tr>
            </table></div>

            An optimal solution is the vector:

            $$
            (3,\allowbreak 0,\allowbreak 4,\allowbreak 4,\allowbreak 0)
            $$

            The setups are in periods $1$, $3$, $4$, the inventories are $(s_1,\dots,s_{5})=(1,\allowbreak 0,\allowbreak 1,\allowbreak 1,\allowbreak 0)$, and the total cost is (there is no variable production cost)

            $$
            \underbrace{50+50+50}_{\text{setup}}+\underbrace{10\cdot 1+10\cdot 0+10\cdot 1+10\cdot 1+10\cdot 0}_{\text{holding}}=150+30=180.
            $$

            The corresponding optimal value is ${v}[5][0]=180$, the same value given by Gurobi on the MIP model; the capacity costs $180-170$ with respect to <span style="color:#1971c2">[Example 25.1](index.md#box-1-texuls1)</span>. The network of the solution is:

            ![Figure 3](../../img/dp-lot-sizing/fig03.svg){ .fig loading=lazy  }

            Period $4$ produces although one unit is in stock at the end of period $3$: the solution does not have the zero-inventory ordering property (and it is the unique optimal solution with integer quantities).

## 25.3.1 Number of steps

- Let $S(m,D,C)$ denote the number of steps executed by DP\_CLS in the worst case, where $m$ is the number of periods, $D=D_{1,m}$ is the total demand, and $C=\max_{t\in T} cap_t$ is the largest capacity. For every $t\ge 1$ we have ${R}[t]+1\le D$ (since $d_1\ge 1$), and the inner loop has at most $C+1$ iterations. In the worst case, the condition at line [16](#box-44-cl-m) is always true. The number of executions of the lines is:

    - <span style="color:#e03131">Line</span> [2](#box-32-cl-a), <span style="color:#e03131">Line</span> [3](#box-33-cl-b), <span style="color:#e03131">Line</span> [7](#box-36-cl-e), and <span style="color:#e03131">Line</span> [8](#box-37-cl-f) are executed $1$ time each.

    - <span style="color:#e03131">Line</span> [4](#box-34-cl-c) and <span style="color:#e03131">Line</span> [5](#box-35-cl-d) are executed $m$ times each.

    - <span style="color:#e03131">Line</span> [9](#box-38-cl-g) and <span style="color:#e03131">Line</span> [10](#box-39-cl-h) are executed $D$ times each.

    - <span style="color:#e03131">Line</span> [12](#box-40-cl-i) is executed $m$ times.

    - <span style="color:#e03131">Line</span> [13](#box-41-cl-j), <span style="color:#e03131">Line</span> [14](#box-42-cl-k), and <span style="color:#e03131">Line</span> [20](#box-46-cl-o) are executed $\displaystyle\sum_{t=1}^{m}({R}[t]+1)\le mD$ times each.

    - <span style="color:#e03131">Line</span> [15](#box-43-cl-l), <span style="color:#e03131">Line</span> [16](#box-44-cl-m), and <span style="color:#e03131">Line</span> [17](#box-45-cl-n) are executed at most $mD(C+1)$ times each.

    - <span style="color:#e03131">Line</span> [23](#box-47-cl-p) is executed $1$ time.

    Therefore,

    $$
    S(m,D,C)\le 5+3m+2D+3mD+3mD(C+1)=5+3m+2D+6mD+3mDC,
    $$

    and hence

    $$
    S(m,D,C)=O(mDC).
    $$

    !!! chiave ""

        The DP algorithm executes

        $$
        S(m,D,C)=O(m\,D\,C)
        $$

        steps in the worst case. The number of steps depends on the values $D$ and $C$, not only on the number $m$ of periods: the DP algorithm is <strong>pseudo-polynomial</strong>.

- DP\_CLS\_InfoSol only adds a constant number of operations inside the same loops, and therefore its number of steps has the same order of growth.

- <em>Example.</em> The capacitated instance of the MIP heuristics notes has $6$ periods, demands $(50,\allowbreak 30,\allowbreak 10,\allowbreak 10,\allowbreak 40,\allowbreak 10)$, setup cost $40$, holding cost $1$, and capacity $80$. Measured in units of $10$, it has $35$ states with $t\ge 1$.

- The DP algorithm gives the optimal value $160$, with the production plan $(50,\allowbreak 50,\allowbreak 0,\allowbreak 0,\allowbreak 50,\allowbreak 0)$ (in the original units): the same value proved optimal by the MIP solver.

## 25.3.2 The case of constant capacity

- With general capacities $cap_t$ the CLS is NP-hard, so a polynomial algorithm is not expected and the pseudo-polynomial DP algorithm is a natural exact method for small values of $D$ and $C$.

- When the capacity is the same in all periods, $cap_t=C$ for all $t\in T$, the CLS can be solved in polynomial time, because the zero-inventory ordering property is replaced by a weaker one:

!!! chiave ""

    If $cap_t=C$ for all $t\in T$, there is an optimal solution in which, between two consecutive periods with empty inventory, at most one period produces a quantity strictly between $0$ and $C$; all the other periods produce $0$ or $C$.

- We do not develop the polynomial algorithms based on this property here.

- <span style="color:#1971c2">[Example 25.10](#box-31-texcls1)</span> has constant capacity $C=4$. Its optimal solution $(3,\allowbreak 0,\allowbreak 4,\allowbreak 4,\allowbreak 0)$ has inventories $(1,\allowbreak 0,\allowbreak 1,\allowbreak 1,\allowbreak 0)$, empty at the end of periods $0$, $2$, and $5$.

- In periods $1$–$2$ only period $1$ produces a quantity strictly between $0$ and $4$, and in periods $3$–$5$ every period produces $0$ or $4$, as stated by the property.

---

**Next:** [Typical mistakes · In summary](typical-mistakes.md)
