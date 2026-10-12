---
title: "A DP algorithm for the ULS: Step 1 and Step 2"
---

# 25.2.2 A DP algorithm for the ULS: Step 1 and Step 2 { #2522-step-1-and-step-2 }

<div class="info-capitolo" markdown>

**Part 3 · Dynamic programming · Chapter 25** · [:material-book-open-variant: Chapter 25: Uncapacitated lot sizing (ULS)](index.md) · [:material-file-pdf-box: Lecture notes, volume 3 (PDF)](../../pdf/lecture-notes-3-dynamic-programming.pdf) · [:material-pencil: Exercises: Uncapacitated lot sizing (ULS)](../../exercises/dp-lot-sizing.md) · [:material-gesture-tap: App: Wagner-Whitin for uncapacitated lot sizing](../../lab/wagner-whitin-lot-sizing.md)

</div>

- <u>Step 1</u>: computation of the optimal value

    !!! formula ""

        For any $t \in \{1,2,\dots,m\}$, let $v(t)$ be the optimal value of the ULS subinstance given by:

        1. a set $\{1,2,\dots,t\}$ of $t$ time periods,

        2. for each period $j \in \{1,2,\dots,t\}$, a demand $d_j$,

        3. for each period $j \in \{1,2,\dots,t\}$, a setup cost $sc_j$, a variable production cost $vc_j$, and a holding cost $hc_j$.

        The recursive formula to compute $v(t)$ reads as follows:

        \begin{equation*}
        \label{eq:ww}
        v(t)= \left\{ \begin{array}{ll}
        \displaystyle \min \bigg\{ v(j-1) + c_{j,t} : j \in \{1,2,\dots,t\}\bigg\} & \textrm{if $1\le t \le m$,}\\[2ex]
        0 & \textrm{if $t=0$.}
        \end{array} \right. \tag{25.3}
        \end{equation*}

    - The subinstance with periods $\{1,\dots,t\}$ is a ULS instance of the same type: its inventory must be empty at the end of period $t$. Here, $v(0)=0$, since an empty set of periods has no demand and no cost.

    - The recursive decomposition process of formula $\eqref{eq:ww}$ generates $t$ <strong>independent subproblems</strong>, each corresponding to a possible choice of the period $j$ of the <strong>last production run</strong>, which produces the demands of periods $j,\dots,t$.

    - By the zero-inventory ordering property applied to the subinstance, the inventory is empty at the end of period $j-1$, and the residual subproblem is the ULS subinstance with periods $\{1,\dots,j-1\}$.

    - The optimal value $v(t)$ is obtained by trying all possible periods of the last production run and selecting the one that minimizes the sum $v(j-1)+c_{j,t}$ of the optimal value of the residual subproblem and the cost of the last run.

    - Hence, an optimal solution for periods $\{1,\dots,t\}$ is built by combining the chosen last production run in period $j$ with an optimal solution of the residual subproblem with periods $\{1,\dots,j-1\}$.

        $\rightsquigarrow$ <strong>Optimal Substructure verified!</strong>

    - Different choices of the last production run, possibly made for different values of $t$, can lead to the same residual set of periods, and therefore the same value $v(t)$ may need to be computed several times during the recursive evaluation of formula $\eqref{eq:ww}$.

        $\rightsquigarrow$ <strong>Overlapping Subproblems verified!</strong>

    - A <strong>first method</strong> to compute the optimal value $v(m)$ of the ULS instance is the <strong>top-down approach</strong>. The method starts from the call with $t=m$ and evaluates formula $\eqref{eq:ww}$ recursively: each call for periods $\{1,\dots,t\}$ triggers further calls for periods $\{1,\dots,j-1\}$, for all $j \in \{1,2,\dots,t\}$, until the base case $v(0)$ is reached.

    - The <strong>recursion tree</strong> of the function $v$ has one node for each recursive call, labeled with the function call it represents. The root represents the initial call. The children of a node represent the recursive calls made by that call. The leaf nodes represent the base cases.

        <a id="box-16-texulstree"></a>

        !!! esempio "Example 25.5: Recursion tree"

            We consider the first four periods of the ULS instance of <span style="color:#1971c2">[Example 25.1](index.md#box-1-texuls1)</span> (with five periods the tree has $32$ nodes). This is the recursion tree of the top-down approach to compute $v(4)$:

            ![Figure 2](../../img/dp-lot-sizing/fig02.svg){ .fig loading=lazy  }

            The children of a node $v(t)$ are ordered by $j\in\{1,\dots,t\}$: the child $v(j-1)$ corresponds to a last production run in period $j$. The function $v$ is called $16$ times, and the same subproblems are solved multiple times: $v(2)$ is called $2$ times, $v(1)$ is called $4$ times, and $v(0)$ is called $8$ times. All the other calls are made only once.

    - The value $v(t)$, for a generic period $t$, can be computed once the values $v(j)$ are known for all smaller periods $j<t$.

        <a id="box-17-texulsvalues"></a>

        !!! esempio "Example 25.6: Computing the values of the $v$ function"

            We consider the ULS instance of <span style="color:#1971c2">[Example 25.1](index.md#box-1-texuls1)</span>, with the matrix ${c}$ of the production-run costs:

            $$
            \begin{array}{l|rrrrr}
            \hline {{c}[j][t]} & {t=1} & {t=2} & {t=3} & {t=4} & {t=5} \\
            \hline {j=1} & {50} & {60} & {120} & {240} & {280} \\
            {j=2} & {-} & {50} & {80} & {160} & {190} \\
            {j=3} & {-} & {-} & {50} & {90} & {110} \\
            {j=4} & {-} & {-} & {-} & {50} & {60} \\
            {j=5} & {-} & {-} & {-} & {-} & {50} \\
            \hline
            \end{array}
            $$

            The value of the function $v$ can be computed by starting from the base case $v(0)=0$ and then computing the values of $v(1)$, $v(2)$, $v(3)$, $v(4)$, and $v(5)$ in order, as follows:

            - Since we know the value of $v(0)$, we can compute $v(1)$, as follows:

                $$
                v(1)=v(0)+c_{1,1}=0+50=50
                $$

            - Once we have computed $v(1)$ and $v(0)$, we can compute $v(2)$, as follows:

                \begin{align*}
                v(2)&=\min\{v(0)+c_{1,2},v(1)+c_{2,2}\}\\
                &=\min\{0+60,50+50\}=60
                \end{align*}

            - Once we have computed $v(2)$, $v(1)$ and $v(0)$, we can compute $v(3)$, as follows:

                \begin{align*}
                v(3)&=\min\{v(0)+c_{1,3},v(1)+c_{2,3},v(2)+c_{3,3}\}\\
                &=\min\{0+120,50+80,60+50\}=110
                \end{align*}

            - Once we have computed $v(3)$, $v(2)$, $v(1)$ and $v(0)$, we can compute $v(4)$, as follows:

                \begin{align*}
                v(4)&=\min\{v(0)+c_{1,4},v(1)+c_{2,4},v(2)+c_{3,4},v(3)+c_{4,4}\}\\
                &=\min\{0+240,50+160,60+90,110+50\}=150
                \end{align*}

            - Once we have computed $v(4)$, $v(3)$, $v(2)$, $v(1)$ and $v(0)$, we can compute $v(5)$, as follows:

                \begin{align*}
                v(5)&=\min\{v(0)+c_{1,5},v(1)+c_{2,5},v(2)+c_{3,5},v(3)+c_{4,5},v(4)+c_{5,5}\}\\
                &=\min\{0+280,50+190,60+110,110+60,150+50\}=170
                \end{align*}

    - We can avoid solving the same subproblems repeatedly by storing the value of each subproblem as soon as it is computed. The values are stored in a <strong>lookup table</strong>, the vector ${v}[0..m]$, whose cell ${v}[t]$ contains $v(t)$.

    - Since solving a subproblem with value $v(t)$ depends only on subproblems with values $v(j-1)$, with $j-1<t$, we can solve the subproblems for increasing values of $t$, starting from the base case $v(0)=0$ and building up to $v(m)$: this observation naturally leads to a <strong>much more efficient method</strong> to compute the optimal value $v(m)$ of the ULS instance.

    - A <strong>second method</strong> to compute the optimal value $v(m)$ of the ULS instance is the <strong>bottom-up approach</strong>. The method starts from the base case $v(0)=0$ and evaluates formula $\eqref{eq:ww}$ for increasing periods $t \in \{1,2,\dots,m\}$: each value $v(t)$ is computed using the already-computed values $v(0), v(1), \dots, v(t-1)$, until the value $v(m)$ of the ULS instance is obtained.

        This is the pseudo-code of the <strong>DP algorithm using the bottom-up approach</strong>:

        !!! algoritmo "Algorithm: DP\_WW"

            <div class="pseudocodice" markdown="0"><div class="pc" style="--liv:0"><strong>Input:</strong> A ULS instance given by the number <span class="arithmatex">\(m\)</span> of periods and the arrays <span class="arithmatex">\(d[1..m]\)</span>, <span class="arithmatex">\(sc[1..m]\)</span>, <span class="arithmatex">\(vc[1..m]\)</span>, <span class="arithmatex">\(hc[1..m]\)</span></div><div class="pc" style="--liv:0"><strong>Output:</strong> The optimal value</div><div class="pc" style="--liv:0"><span class="pc-n">1</span><strong>Function</strong> DP_WW(<span class="arithmatex">\(m,d,sc,vc,hc\)</span>)</div><div class="pc" style="--liv:1" id="box-18-ww-a"><span class="pc-n">2</span><span class="arithmatex">\({c} := \textnormal{CostMatrix}(m,d,sc,vc,hc)\)</span></div><div class="pc" style="--liv:1" id="box-19-ww-b"><span class="pc-n">3</span><span class="arithmatex">\({v} := \textnormal{new array}[0..m]\)</span></div><div class="pc" style="--liv:1" id="box-20-ww-c"><span class="pc-n">4</span><span class="arithmatex">\({v}[0] \leftarrow 0\)</span></div><div class="pc" style="--liv:1" id="box-21-ww-d"><span class="pc-n">5</span><strong>for</strong> <span class="arithmatex">\(t := 1\)</span> <strong>to</strong> <span class="arithmatex">\(m\)</span>  <strong>do</strong></div><div class="pc" style="--liv:2" id="box-22-ww-e"><span class="pc-n">6</span><span class="arithmatex">\(\mathit{b} := +\infty\)</span></div><div class="pc" style="--liv:2" id="box-23-ww-f"><span class="pc-n">7</span><strong>for</strong> <span class="arithmatex">\(j := 1\)</span> <strong>to</strong> <span class="arithmatex">\(t\)</span>  <strong>do</strong></div><div class="pc" style="--liv:3" id="box-24-ww-g"><span class="pc-n">8</span><strong>if</strong> <span class="arithmatex">\({v}[j-1] + {c}[j][t] < \mathit{b}\)</span>  <strong>then</strong></div><div class="pc" style="--liv:4" id="box-25-ww-h"><span class="pc-n">9</span><span class="arithmatex">\(\mathit{b} \leftarrow {v}[j-1] + {c}[j][t]\)</span></div><div class="pc" style="--liv:3"><span class="pc-n">10</span><strong>end</strong></div><div class="pc" style="--liv:2"><span class="pc-n">11</span><strong>end</strong></div><div class="pc" style="--liv:2" id="box-26-ww-i"><span class="pc-n">12</span><span class="arithmatex">\({v}[t] \leftarrow \mathit{b}\)</span></div><div class="pc" style="--liv:1"><span class="pc-n">13</span><strong>end</strong></div><div class="pc" style="--liv:1" id="box-27-ww-j"><span class="pc-n">14</span><strong>return</strong> <span class="arithmatex">\({v}[m]\)</span></div></div>

        - The matrix ${c}$ contains the production-run costs, computed by the algorithm CostMatrix.

        - The vector ${v}[0..m]$ is the <strong>lookup table</strong>: it stores the optimal values of all subproblems, with the base case ${v}[0]=0$.

        - The outer loop, over $t \in \{1,2,\dots,m\}$, computes ${v}[t]$ in increasing order of the last period.

        - The inner loop, over $j \in \{1,2,\dots,t\}$, evaluates all possible periods of the last production run and keeps in $\mathit{b}$ the smallest value ${v}[j-1]+{c}[j][t]$; the variable $\mathit{b}$ starts from $+\infty$, so the first comparison always updates it.

        - At the end of the inner loop, ${v}[t] \leftarrow \mathit{b}$ stores the optimal value ${v}[t]$.

        - Finally, the optimal value ${v}[m]$ of the ULS instance is returned.

        <a id="box-28-texulsbu"></a>

        !!! esempio "Example 25.7: Execution of the DP algorithm"

            We consider the ULS instance of <span style="color:#1971c2">[Example 25.1](index.md#box-1-texuls1)</span>, with the matrix ${c}$ of the production-run costs:

            $$
            \begin{array}{l|rrrrr}
            \hline {{c}[j][t]} & {t=1} & {t=2} & {t=3} & {t=4} & {t=5} \\
            \hline {j=1} & {50} & {60} & {120} & {240} & {280} \\
            {j=2} & {-} & {50} & {80} & {160} & {190} \\
            {j=3} & {-} & {-} & {50} & {90} & {110} \\
            {j=4} & {-} & {-} & {-} & {50} & {60} \\
            {j=5} & {-} & {-} & {-} & {-} & {50} \\
            \hline
            \end{array}
            $$

            For each step of the DP algorithm, the table shows the values of $t$ and $j$, the current value of $\mathit{b}$, and the cell ${v}[t]$. The cell of $\mathit{b}$ is highlighted in <mark>red</mark> when updated; the cell of ${v}[t]$ is highlighted in <mark>blue</mark> when assigned.

            <div class="tabella" markdown="0"><table>
            <tr>
            <th><span class="arithmatex">\(t\)</span></th>
            <th><span class="arithmatex">\(j\)</span></th>
            <th><span class="arithmatex">\({v}[t]\)</span></th>
            <th><span class="arithmatex">\(\mathit{b}\)</span></th>
            <th>Action</th>
            </tr>
            <tr>
            <td><span class="arithmatex">\(-\)</span></td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td class="cella-blu">0</td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td><span class="arithmatex">\({v}[0]\leftarrow 0\)</span></td>
            </tr>
            <tr>
            <td></td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td><span class="arithmatex">\(+\infty\)</span></td>
            <td><span class="arithmatex">\(\mathit{b}\leftarrow +\infty\)</span></td>
            </tr>
            <tr>
            <td>1</td>
            <td>1</td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td class="cella-rossa">50</td>
            <td><span class="arithmatex">\({v}[0]{+}{c}[1][1]=0{+}50=50<+\infty\)</span>: <span class="arithmatex">\(\mathit{b}\leftarrow 50\)</span></td>
            </tr>
            <tr>
            <td></td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td class="cella-blu">50</td>
            <td>50</td>
            <td><span class="arithmatex">\({v}[1]\leftarrow \mathit{b}=50\)</span></td>
            </tr>
            <tr>
            <td></td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td><span class="arithmatex">\(+\infty\)</span></td>
            <td><span class="arithmatex">\(\mathit{b}\leftarrow +\infty\)</span></td>
            </tr>
            <tr>
            <td>2</td>
            <td>1</td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td class="cella-rossa">60</td>
            <td><span class="arithmatex">\({v}[0]{+}{c}[1][2]=0{+}60=60<+\infty\)</span>: <span class="arithmatex">\(\mathit{b}\leftarrow 60\)</span></td>
            </tr>
            <tr>
            <td></td>
            <td>2</td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td>60</td>
            <td><span class="arithmatex">\({v}[1]{+}{c}[2][2]=50{+}50=100>60\)</span>: no update</td>
            </tr>
            <tr>
            <td></td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td class="cella-blu">60</td>
            <td>60</td>
            <td><span class="arithmatex">\({v}[2]\leftarrow \mathit{b}=60\)</span></td>
            </tr>
            <tr>
            <td></td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td><span class="arithmatex">\(+\infty\)</span></td>
            <td><span class="arithmatex">\(\mathit{b}\leftarrow +\infty\)</span></td>
            </tr>
            <tr>
            <td>3</td>
            <td>1</td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td class="cella-rossa">120</td>
            <td><span class="arithmatex">\({v}[0]{+}{c}[1][3]=0{+}120=120<+\infty\)</span>: <span class="arithmatex">\(\mathit{b}\leftarrow 120\)</span></td>
            </tr>
            <tr>
            <td></td>
            <td>2</td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td>120</td>
            <td><span class="arithmatex">\({v}[1]{+}{c}[2][3]=50{+}80=130>120\)</span>: no update</td>
            </tr>
            <tr>
            <td></td>
            <td>3</td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td class="cella-rossa">110</td>
            <td><span class="arithmatex">\({v}[2]{+}{c}[3][3]=60{+}50=110<120\)</span>: <span class="arithmatex">\(\mathit{b}\leftarrow 110\)</span></td>
            </tr>
            <tr>
            <td></td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td class="cella-blu">110</td>
            <td>110</td>
            <td><span class="arithmatex">\({v}[3]\leftarrow \mathit{b}=110\)</span></td>
            </tr>
            <tr>
            <td></td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td><span class="arithmatex">\(+\infty\)</span></td>
            <td><span class="arithmatex">\(\mathit{b}\leftarrow +\infty\)</span></td>
            </tr>
            <tr>
            <td>4</td>
            <td>1</td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td class="cella-rossa">240</td>
            <td><span class="arithmatex">\({v}[0]{+}{c}[1][4]=0{+}240=240<+\infty\)</span>: <span class="arithmatex">\(\mathit{b}\leftarrow 240\)</span></td>
            </tr>
            <tr>
            <td></td>
            <td>2</td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td class="cella-rossa">210</td>
            <td><span class="arithmatex">\({v}[1]{+}{c}[2][4]=50{+}160=210<240\)</span>: <span class="arithmatex">\(\mathit{b}\leftarrow 210\)</span></td>
            </tr>
            <tr>
            <td></td>
            <td>3</td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td class="cella-rossa">150</td>
            <td><span class="arithmatex">\({v}[2]{+}{c}[3][4]=60{+}90=150<210\)</span>: <span class="arithmatex">\(\mathit{b}\leftarrow 150\)</span></td>
            </tr>
            <tr>
            <td></td>
            <td>4</td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td>150</td>
            <td><span class="arithmatex">\({v}[3]{+}{c}[4][4]=110{+}50=160>150\)</span>: no update</td>
            </tr>
            <tr>
            <td></td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td class="cella-blu">150</td>
            <td>150</td>
            <td><span class="arithmatex">\({v}[4]\leftarrow \mathit{b}=150\)</span></td>
            </tr>
            <tr>
            <td></td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td><span class="arithmatex">\(+\infty\)</span></td>
            <td><span class="arithmatex">\(\mathit{b}\leftarrow +\infty\)</span></td>
            </tr>
            <tr>
            <td>5</td>
            <td>1</td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td class="cella-rossa">280</td>
            <td><span class="arithmatex">\({v}[0]{+}{c}[1][5]=0{+}280=280<+\infty\)</span>: <span class="arithmatex">\(\mathit{b}\leftarrow 280\)</span></td>
            </tr>
            <tr>
            <td></td>
            <td>2</td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td class="cella-rossa">240</td>
            <td><span class="arithmatex">\({v}[1]{+}{c}[2][5]=50{+}190=240<280\)</span>: <span class="arithmatex">\(\mathit{b}\leftarrow 240\)</span></td>
            </tr>
            <tr>
            <td></td>
            <td>3</td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td class="cella-rossa">170</td>
            <td><span class="arithmatex">\({v}[2]{+}{c}[3][5]=60{+}110=170<240\)</span>: <span class="arithmatex">\(\mathit{b}\leftarrow 170\)</span></td>
            </tr>
            <tr>
            <td></td>
            <td>4</td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td>170</td>
            <td><span class="arithmatex">\({v}[3]{+}{c}[4][5]=110{+}60=170=\mathit{b}\)</span>: no update</td>
            </tr>
            <tr>
            <td></td>
            <td>5</td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td>170</td>
            <td><span class="arithmatex">\({v}[4]{+}{c}[5][5]=150{+}50=200>170\)</span>: no update</td>
            </tr>
            <tr>
            <td></td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td class="cella-blu">170</td>
            <td>170</td>
            <td><span class="arithmatex">\({v}[5]\leftarrow \mathit{b}=170\)</span></td>
            </tr>
            </table></div>

            This is the vector ${v}$ after the execution of the DP algorithm:

            $$
            \begin{array}{c|cccccc}
            \hline  & {t=0} & {t=1} & {t=2} & {t=3} & {t=4} & {t=5} \\
            \hline {{v}[t]} & 0 & 50 & 60 & 110 & 150 & 170 \\
            \hline
            \end{array}
            $$

    - After the execution of the DP algorithm, the vector ${v}$ contains the optimal value ${v}[t]$ for every set of periods $\{1,\dots,t\}$.

    - <em>Remark (shortest path).</em> Formula $\eqref{eq:ww}$ computes a shortest path in a network with nodes $0,1,\dots,m$ and one arc from node $j-1$ to node $t$, of cost $c_{j,t}$, for every $j\le t$. The value $v(t)$ is the length of a shortest path from node $0$ to node $t$. This is the shortest-path formulation of [Chapter 15 «Formulations of lot sizing problems»](https://fabiofurini.github.io/combinatorial-optimization/formulations/lot-sizing-formulations/), without the capacities: an arc is a production run.

- <u>Step 2</u>: computation of an optimal solution

    - To compute an optimal solution, it is necessary to store some additional information.

    - For each period $t$, in addition to the optimal value ${v}[t]$, we store ${r}[t]$, the period of the last production run in an optimal solution for periods $\{1,\dots,t\}$.

    - Starting from $t=m$, the value ${r}[t]$ gives the period of the last production run, which produces $D_{{r}[t],t}$ units; the remaining periods are $\{1,\dots,{r}[t]-1\}$, and the same rule can be applied again, and so on, until no period remains.

        This is the pseudo-code of the <strong>DP algorithm using the bottom-up approach</strong> with the storing of the information necessary to compute an optimal solution:

        !!! algoritmo "Algorithm: DP\_WW\_InfoSol"

            <div class="pseudocodice" markdown="0"><div class="pc" style="--liv:0"><strong>Input:</strong> A ULS instance given by the number <span class="arithmatex">\(m\)</span> of periods and the arrays <span class="arithmatex">\(d[1..m]\)</span>, <span class="arithmatex">\(sc[1..m]\)</span>, <span class="arithmatex">\(vc[1..m]\)</span>, <span class="arithmatex">\(hc[1..m]\)</span></div><div class="pc" style="--liv:0"><strong>Output:</strong> The optimal value and the information vector <span class="arithmatex">\({r}[1..m]\)</span></div><div class="pc" style="--liv:0"><span class="pc-n">1</span><strong>Function</strong> DP_WW_InfoSol(<span class="arithmatex">\(m,d,sc,vc,hc\)</span>)</div><div class="pc" style="--liv:1"><span class="pc-n">2</span><span class="arithmatex">\({c} := \textnormal{CostMatrix}(m,d,sc,vc,hc)\)</span></div><div class="pc" style="--liv:1"><span class="pc-n">3</span><span class="arithmatex">\({v} := \textnormal{new array}[0..m]\)</span></div><div class="pc" style="--liv:1"><span class="pc-n">4</span><span class="arithmatex">\({r} := \textnormal{new array}[1..m]\)</span></div><div class="pc" style="--liv:1"><span class="pc-n">5</span><span class="arithmatex">\({v}[0] \leftarrow 0\)</span></div><div class="pc" style="--liv:1"><span class="pc-n">6</span><strong>for</strong> <span class="arithmatex">\(t := 1\)</span> <strong>to</strong> <span class="arithmatex">\(m\)</span> <strong>do</strong></div><div class="pc" style="--liv:2"><span class="pc-n">7</span><span class="arithmatex">\(\mathit{b} := +\infty\)</span></div><div class="pc" style="--liv:2"><span class="pc-n">8</span><span class="arithmatex">\(\mathit{a} := 0\)</span></div><div class="pc" style="--liv:2"><span class="pc-n">9</span><strong>for</strong> <span class="arithmatex">\(j := 1\)</span> <strong>to</strong> <span class="arithmatex">\(t\)</span> <strong>do</strong></div><div class="pc" style="--liv:3"><span class="pc-n">10</span><strong>if</strong> <span class="arithmatex">\({v}[j-1] + {c}[j][t] < \mathit{b}\)</span> <strong>then</strong></div><div class="pc" style="--liv:4"><span class="pc-n">11</span><span class="arithmatex">\(\mathit{b} \leftarrow {v}[j-1] + {c}[j][t]\)</span></div><div class="pc" style="--liv:4"><span class="pc-n">12</span><span class="arithmatex">\(\mathit{a} \leftarrow j\)</span></div><div class="pc" style="--liv:3"><span class="pc-n">13</span><strong>end</strong></div><div class="pc" style="--liv:2"><span class="pc-n">14</span><strong>end</strong></div><div class="pc" style="--liv:2"><span class="pc-n">15</span><span class="arithmatex">\({v}[t] \leftarrow \mathit{b}\)</span></div><div class="pc" style="--liv:2"><span class="pc-n">16</span><span class="arithmatex">\({r}[t] \leftarrow \mathit{a}\)</span></div><div class="pc" style="--liv:1"><span class="pc-n">17</span><strong>end</strong></div><div class="pc" style="--liv:1"><span class="pc-n">18</span><strong>return</strong> <span class="arithmatex">\({v}[m], {r}\)</span></div></div>

        - The DP algorithm uses the additional temporary variable $\mathit{a}$ to keep track of the decision made when $\mathit{b}$ is updated. If the last production run in period $j$ is selected, $\mathit{a}\leftarrow j$ stores this decision. At the end of the inner loop, ${r}[t]\leftarrow \mathit{a}$ stores the period of the selected last production run, together with the optimal value ${v}[t]\leftarrow \mathit{b}$.

        - Because of the strict comparison, in case of ties the smallest period $j$ is stored.

        <a id="box-29-texulsbuinfo"></a>

        !!! esempio "Example 25.8: Computation of the additional information"

            We consider the ULS instance of <span style="color:#1971c2">[Example 25.1](index.md#box-1-texuls1)</span>, with the matrix ${c}$ of the production-run costs:

            $$
            \begin{array}{l|rrrrr}
            \hline {{c}[j][t]} & {t=1} & {t=2} & {t=3} & {t=4} & {t=5} \\
            \hline {j=1} & {50} & {60} & {120} & {240} & {280} \\
            {j=2} & {-} & {50} & {80} & {160} & {190} \\
            {j=3} & {-} & {-} & {50} & {90} & {110} \\
            {j=4} & {-} & {-} & {-} & {50} & {60} \\
            {j=5} & {-} & {-} & {-} & {-} & {50} \\
            \hline
            \end{array}
            $$

            For each step of the DP algorithm, the table shows the values of $t$ and $j$, the cell ${r}[t]$, the current value of $\mathit{b}$, and the current value of $\mathit{a}$. The cell of $\mathit{b}$ is highlighted in <mark>red</mark> when updated; the cell of $\mathit{a}$ and the cell of ${r}[t]$ are highlighted in <mark>blue</mark> when updated.

            <div class="tabella" markdown="0"><table>
            <tr>
            <th><span class="arithmatex">\(t\)</span></th>
            <th><span class="arithmatex">\(j\)</span></th>
            <th><span class="arithmatex">\({r}[t]\)</span></th>
            <th><span class="arithmatex">\(\mathit{b}\)</span></th>
            <th><span class="arithmatex">\(\mathit{a}\)</span></th>
            <th>Action</th>
            </tr>
            <tr>
            <td><span class="arithmatex">\(-\)</span></td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td>Initial state</td>
            </tr>
            <tr>
            <td></td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td><span class="arithmatex">\(+\infty\)</span></td>
            <td>0</td>
            <td><span class="arithmatex">\(\mathit{b}\leftarrow +\infty\)</span>, <span class="arithmatex">\(\mathit{a}\leftarrow 0\)</span></td>
            </tr>
            <tr>
            <td>1</td>
            <td>1</td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td class="cella-rossa">50</td>
            <td class="cella-blu">1</td>
            <td><span class="arithmatex">\({v}[0]{+}{c}[1][1]=0{+}50=50<+\infty\)</span>: <span class="arithmatex">\(\mathit{b}\leftarrow 50\)</span>, <span class="arithmatex">\(\mathit{a}\leftarrow 1\)</span></td>
            </tr>
            <tr>
            <td></td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td class="cella-blu">1</td>
            <td>50</td>
            <td>1</td>
            <td><span class="arithmatex">\({v}[1]\leftarrow \mathit{b}=50\)</span>, <span class="arithmatex">\({r}[1]\leftarrow \mathit{a}=1\)</span></td>
            </tr>
            <tr>
            <td></td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td><span class="arithmatex">\(+\infty\)</span></td>
            <td>0</td>
            <td><span class="arithmatex">\(\mathit{b}\leftarrow +\infty\)</span>, <span class="arithmatex">\(\mathit{a}\leftarrow 0\)</span></td>
            </tr>
            <tr>
            <td>2</td>
            <td>1</td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td class="cella-rossa">60</td>
            <td class="cella-blu">1</td>
            <td><span class="arithmatex">\({v}[0]{+}{c}[1][2]=0{+}60=60<+\infty\)</span>: <span class="arithmatex">\(\mathit{b}\leftarrow 60\)</span>, <span class="arithmatex">\(\mathit{a}\leftarrow 1\)</span></td>
            </tr>
            <tr>
            <td></td>
            <td>2</td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td>60</td>
            <td>1</td>
            <td><span class="arithmatex">\({v}[1]{+}{c}[2][2]=50{+}50=100>60\)</span>: no update</td>
            </tr>
            <tr>
            <td></td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td class="cella-blu">1</td>
            <td>60</td>
            <td>1</td>
            <td><span class="arithmatex">\({v}[2]\leftarrow \mathit{b}=60\)</span>, <span class="arithmatex">\({r}[2]\leftarrow \mathit{a}=1\)</span></td>
            </tr>
            <tr>
            <td></td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td><span class="arithmatex">\(+\infty\)</span></td>
            <td>0</td>
            <td><span class="arithmatex">\(\mathit{b}\leftarrow +\infty\)</span>, <span class="arithmatex">\(\mathit{a}\leftarrow 0\)</span></td>
            </tr>
            <tr>
            <td>3</td>
            <td>1</td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td class="cella-rossa">120</td>
            <td class="cella-blu">1</td>
            <td><span class="arithmatex">\({v}[0]{+}{c}[1][3]=0{+}120=120<+\infty\)</span>: <span class="arithmatex">\(\mathit{b}\leftarrow 120\)</span>, <span class="arithmatex">\(\mathit{a}\leftarrow 1\)</span></td>
            </tr>
            <tr>
            <td></td>
            <td>2</td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td>120</td>
            <td>1</td>
            <td><span class="arithmatex">\({v}[1]{+}{c}[2][3]=50{+}80=130>120\)</span>: no update</td>
            </tr>
            <tr>
            <td></td>
            <td>3</td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td class="cella-rossa">110</td>
            <td class="cella-blu">3</td>
            <td><span class="arithmatex">\({v}[2]{+}{c}[3][3]=60{+}50=110<120\)</span>: <span class="arithmatex">\(\mathit{b}\leftarrow 110\)</span>, <span class="arithmatex">\(\mathit{a}\leftarrow 3\)</span></td>
            </tr>
            <tr>
            <td></td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td class="cella-blu">3</td>
            <td>110</td>
            <td>3</td>
            <td><span class="arithmatex">\({v}[3]\leftarrow \mathit{b}=110\)</span>, <span class="arithmatex">\({r}[3]\leftarrow \mathit{a}=3\)</span></td>
            </tr>
            <tr>
            <td></td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td><span class="arithmatex">\(+\infty\)</span></td>
            <td>0</td>
            <td><span class="arithmatex">\(\mathit{b}\leftarrow +\infty\)</span>, <span class="arithmatex">\(\mathit{a}\leftarrow 0\)</span></td>
            </tr>
            <tr>
            <td>4</td>
            <td>1</td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td class="cella-rossa">240</td>
            <td class="cella-blu">1</td>
            <td><span class="arithmatex">\({v}[0]{+}{c}[1][4]=0{+}240=240<+\infty\)</span>: <span class="arithmatex">\(\mathit{b}\leftarrow 240\)</span>, <span class="arithmatex">\(\mathit{a}\leftarrow 1\)</span></td>
            </tr>
            <tr>
            <td></td>
            <td>2</td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td class="cella-rossa">210</td>
            <td class="cella-blu">2</td>
            <td><span class="arithmatex">\({v}[1]{+}{c}[2][4]=50{+}160=210<240\)</span>: <span class="arithmatex">\(\mathit{b}\leftarrow 210\)</span>, <span class="arithmatex">\(\mathit{a}\leftarrow 2\)</span></td>
            </tr>
            <tr>
            <td></td>
            <td>3</td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td class="cella-rossa">150</td>
            <td class="cella-blu">3</td>
            <td><span class="arithmatex">\({v}[2]{+}{c}[3][4]=60{+}90=150<210\)</span>: <span class="arithmatex">\(\mathit{b}\leftarrow 150\)</span>, <span class="arithmatex">\(\mathit{a}\leftarrow 3\)</span></td>
            </tr>
            <tr>
            <td></td>
            <td>4</td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td>150</td>
            <td>3</td>
            <td><span class="arithmatex">\({v}[3]{+}{c}[4][4]=110{+}50=160>150\)</span>: no update</td>
            </tr>
            <tr>
            <td></td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td class="cella-blu">3</td>
            <td>150</td>
            <td>3</td>
            <td><span class="arithmatex">\({v}[4]\leftarrow \mathit{b}=150\)</span>, <span class="arithmatex">\({r}[4]\leftarrow \mathit{a}=3\)</span></td>
            </tr>
            <tr>
            <td></td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td><span class="arithmatex">\(+\infty\)</span></td>
            <td>0</td>
            <td><span class="arithmatex">\(\mathit{b}\leftarrow +\infty\)</span>, <span class="arithmatex">\(\mathit{a}\leftarrow 0\)</span></td>
            </tr>
            <tr>
            <td>5</td>
            <td>1</td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td class="cella-rossa">280</td>
            <td class="cella-blu">1</td>
            <td><span class="arithmatex">\({v}[0]{+}{c}[1][5]=0{+}280=280<+\infty\)</span>: <span class="arithmatex">\(\mathit{b}\leftarrow 280\)</span>, <span class="arithmatex">\(\mathit{a}\leftarrow 1\)</span></td>
            </tr>
            <tr>
            <td></td>
            <td>2</td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td class="cella-rossa">240</td>
            <td class="cella-blu">2</td>
            <td><span class="arithmatex">\({v}[1]{+}{c}[2][5]=50{+}190=240<280\)</span>: <span class="arithmatex">\(\mathit{b}\leftarrow 240\)</span>, <span class="arithmatex">\(\mathit{a}\leftarrow 2\)</span></td>
            </tr>
            <tr>
            <td></td>
            <td>3</td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td class="cella-rossa">170</td>
            <td class="cella-blu">3</td>
            <td><span class="arithmatex">\({v}[2]{+}{c}[3][5]=60{+}110=170<240\)</span>: <span class="arithmatex">\(\mathit{b}\leftarrow 170\)</span>, <span class="arithmatex">\(\mathit{a}\leftarrow 3\)</span></td>
            </tr>
            <tr>
            <td></td>
            <td>4</td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td>170</td>
            <td>3</td>
            <td><span class="arithmatex">\({v}[3]{+}{c}[4][5]=110{+}60=170=\mathit{b}\)</span>: no update</td>
            </tr>
            <tr>
            <td></td>
            <td>5</td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td>170</td>
            <td>3</td>
            <td><span class="arithmatex">\({v}[4]{+}{c}[5][5]=150{+}50=200>170\)</span>: no update</td>
            </tr>
            <tr>
            <td></td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td class="cella-blu">3</td>
            <td>170</td>
            <td>3</td>
            <td><span class="arithmatex">\({v}[5]\leftarrow \mathit{b}=170\)</span>, <span class="arithmatex">\({r}[5]\leftarrow \mathit{a}=3\)</span></td>
            </tr>
            </table></div>

            This is the vector ${r}$ after the execution of the DP algorithm:

            $$
            \begin{array}{c|ccccc}
            \hline  & {t=1} & {t=2} & {t=3} & {t=4} & {t=5} \\
            \hline {{r}[t]} & 1 & 1 & 3 & 3 & 3 \\
            \hline
            \end{array}
            $$

    - Once the vector ${r}$ has been computed, an optimal solution of the ULS instance can be computed by repeatedly applying the following rule, starting from $t=m$ and $x_j=0$ for all $j \in \{1,2,\dots,m\}$:

        $$
        x_{{r}[t]} \leftarrow D_{{r}[t],t},
        \qquad
        t \leftarrow {r}[t]-1,
        $$

        until $t=0$. This yields the vector $(x_1,x_2,\dots,x_m)$, where each entry $x_j$ is the number of units produced in period $j$ in an optimal solution.

    - The following pseudo-code implements the computation of an optimal solution, given the vector ${r}$.

        !!! algoritmo "Algorithm: DP\_WW\_SolComputation"

            <div class="pseudocodice" markdown="0"><div class="pc" style="--liv:0"><strong>Input:</strong> The number <span class="arithmatex">\(m\)</span> of periods and the demands <span class="arithmatex">\(d[1..m]\)</span> of the ULS instance, and the vector <span class="arithmatex">\({r}[1..m]\)</span></div><div class="pc" style="--liv:0"><strong>Output:</strong> An optimal solution of the ULS instance</div><div class="pc" style="--liv:0"><span class="pc-n">1</span><strong>Function</strong> DP_WW_SolComputation(<span class="arithmatex">\(m,d,{r}\)</span>)</div><div class="pc" style="--liv:1"><span class="pc-n">2</span><span class="arithmatex">\(x := \textnormal{new array}[1..m]\)</span></div><div class="pc" style="--liv:1"><span class="pc-n">3</span><strong>for</strong> <span class="arithmatex">\(j := 1\)</span> <strong>to</strong> <span class="arithmatex">\(m\)</span> <strong>do</strong></div><div class="pc" style="--liv:2"><span class="pc-n">4</span><span class="arithmatex">\(x[j] \leftarrow 0\)</span></div><div class="pc" style="--liv:1"><span class="pc-n">5</span><strong>end</strong></div><div class="pc" style="--liv:1"><span class="pc-n">6</span><span class="arithmatex">\(t := m\)</span></div><div class="pc" style="--liv:1"><span class="pc-n">7</span><strong>while</strong> <span class="arithmatex">\(t > 0\)</span> <strong>do</strong></div><div class="pc" style="--liv:2"><span class="pc-n">8</span><span class="arithmatex">\(x[{r}[t]] \leftarrow \sum_{k={r}[t]}^{t} d[k]\)</span></div><div class="pc" style="--liv:2"><span class="pc-n">9</span><span class="arithmatex">\(t \leftarrow {r}[t] - 1\)</span></div><div class="pc" style="--liv:1"><span class="pc-n">10</span><strong>end</strong></div><div class="pc" style="--liv:1"><span class="pc-n">11</span><strong>return</strong> <span class="arithmatex">\(x\)</span></div></div>

        <a id="box-30-texulssolvector"></a>

        !!! esempio "Example 25.9: Computing an optimal solution"

            After the execution of the DP algorithm on the instance of <span style="color:#1971c2">[Example 25.1](index.md#box-1-texuls1)</span>, we have the following vector ${r}$:

            $$
            \begin{array}{c|ccccc}
            \hline  & {t=1} & {t=2} & {t=3} & {t=4} & {t=5} \\
            \hline {{r}[t]} & 1 & 1 & 3 & 3 & 3 \\
            \hline
            \end{array}
            $$

            We can compute an optimal solution for $m=5$ periods as follows:

            <div class="tabella" markdown="0"><table>
            <tr>
            <th>Iteration</th>
            <th><span class="arithmatex">\(t\)</span></th>
            <th><span class="arithmatex">\({r}[t]\)</span></th>
            <th><span class="arithmatex">\(x[1]\)</span></th>
            <th><span class="arithmatex">\(x[2]\)</span></th>
            <th><span class="arithmatex">\(x[3]\)</span></th>
            <th><span class="arithmatex">\(x[4]\)</span></th>
            <th><span class="arithmatex">\(x[5]\)</span></th>
            <th><span class="arithmatex">\(t\leftarrow {r}[t]-1\)</span></th>
            </tr>
            <tr>
            <td><span class="arithmatex">\(-\)</span></td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td><span class="arithmatex">\(t=5\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(1\)</span></td>
            <td><span class="arithmatex">\(5\)</span></td>
            <td><span class="arithmatex">\(3\)</span></td>
            <td>0</td>
            <td>0</td>
            <td class="cella-blu">80</td>
            <td>0</td>
            <td>0</td>
            <td><span class="arithmatex">\(t=3-1=2\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\(1\)</span></td>
            <td class="cella-blu">30</td>
            <td>0</td>
            <td>80</td>
            <td>0</td>
            <td>0</td>
            <td><span class="arithmatex">\(t=1-1=0\)</span></td>
            </tr>
            </table></div>

            - $t=5$, ${r}[5]=3$: the last production run of periods $1,\dots,5$ is in period $3$ and covers the demands of periods $3,\dots,5$, so $x[3]\leftarrow d_{3}+d_{4}+d_{5}=30+40+10=80$

            - $t=2$, ${r}[2]=1$: the last production run of periods $1,\dots,2$ is in period $1$ and covers the demands of periods $1,\dots,2$, so $x[1]\leftarrow d_{1}+d_{2}=20+10=30$

            An optimal solution is the vector:

            $$
            (30,\allowbreak 0,\allowbreak 80,\allowbreak 0,\allowbreak 0)
            $$

            The corresponding optimal value is ${v}[5]=170$, the same value obtained by the enumeration of <span style="color:#1971c2">[Example 25.3](index.md#box-4-texulsenum)</span> and by Gurobi on the $\mathrm{ILP}_{\mathrm{ULS}}$ model.

    - <em>Remark (ties).</em> In the computation of ${v}[5]$, the run in period $4$ gives the same value as the run in period $3$, but the strict comparison keeps $j=3$. Choosing $j=4$ instead leads to the other optimal solution $(30,\allowbreak 0,\allowbreak 30,\allowbreak 50,\allowbreak 0)$ of <span style="color:#1971c2">[Example 25.3](index.md#box-4-texulsenum)</span>. The DP algorithm returns one optimal solution, not all of them.

## 25.2.3 Number of steps

- Let $S_c(m)$ denote the number of steps executed by CostMatrix in the worst case, where $m$ is the number of periods. The number of executions of its lines is:

    - <span style="color:#e03131">Line</span> [2](a-dp-algorithm-for-the-uls.md#box-5-cm-a) is executed $1$ time.

    - <span style="color:#e03131">Line</span> [3](a-dp-algorithm-for-the-uls.md#box-6-cm-b), <span style="color:#e03131">Line</span> [4](a-dp-algorithm-for-the-uls.md#box-7-cm-c), <span style="color:#e03131">Line</span> [5](a-dp-algorithm-for-the-uls.md#box-8-cm-d), and <span style="color:#e03131">Line</span> [6](a-dp-algorithm-for-the-uls.md#box-9-cm-e) are executed $m$ times each.

    - <span style="color:#e03131">Line</span> [7](a-dp-algorithm-for-the-uls.md#box-10-cm-f), <span style="color:#e03131">Line</span> [8](a-dp-algorithm-for-the-uls.md#box-11-cm-g), <span style="color:#e03131">Line</span> [9](a-dp-algorithm-for-the-uls.md#box-12-cm-h), and <span style="color:#e03131">Line</span> [10](a-dp-algorithm-for-the-uls.md#box-13-cm-i) are executed $\displaystyle\sum_{j=1}^{m}(m-j)=\frac{m(m-1)}{2}$ times each.

    - <span style="color:#e03131">Line</span> [13](a-dp-algorithm-for-the-uls.md#box-14-cm-j) is executed $1$ time.

    Therefore,

    $$
    S_c(m)=2+4m+4\cdot\frac{m(m-1)}{2}=2m^2+2m+2.
    $$

- Let $S(m)$ denote the number of steps executed by DP\_WW in the worst case. <span style="color:#e03131">Line</span> [2](#box-18-ww-a) executes CostMatrix, that is, $S_c(m)$ steps. In the worst case, the condition at line [8](#box-24-ww-g) is true at every iteration of the inner loop, and therefore line [9](#box-25-ww-h) is executed as often as line [8](#box-24-ww-g). The number of executions of the other lines is:

    - <span style="color:#e03131">Line</span> [3](#box-19-ww-b) is executed $1$ time.

    - <span style="color:#e03131">Line</span> [4](#box-20-ww-c) is executed $1$ time.

    - <span style="color:#e03131">Line</span> [5](#box-21-ww-d) is executed $m$ times.

    - <span style="color:#e03131">Line</span> [6](#box-22-ww-e) is executed $m$ times.

    - <span style="color:#e03131">Line</span> [7](#box-23-ww-f) is executed $\displaystyle\sum_{t=1}^{m}t$ times.

    - <span style="color:#e03131">Line</span> [8](#box-24-ww-g) is executed $\displaystyle\sum_{t=1}^{m}t$ times.

    - <span style="color:#e03131">Line</span> [9](#box-25-ww-h) is executed $\displaystyle\sum_{t=1}^{m}t$ times.

    - <span style="color:#e03131">Line</span> [12](#box-26-ww-i) is executed $m$ times.

    - <span style="color:#e03131">Line</span> [14](#box-27-ww-j) is executed $1$ time.

    Therefore, the total number of steps in the worst case is

    $$
    S(m)=S_c(m)+3+3m+3\sum_{t=1}^{m}t
    =2m^2+2m+2+3+3m+3\cdot\frac{m(m+1)}{2}
    =\frac{7m^2+13m+10}{2}.
    $$

    Hence,

    $$
    S(m)=\Theta(m^2).
    $$

    Indeed,

    $$
    \lim_{m\to\infty}
    \frac{\frac{7m^2+13m+10}{2}}{m^2}
    =
    \lim_{m\to\infty}
    \frac{1}{2}\left(7+\frac{13}{m}+\frac{10}{m^2}\right)
    =
    \frac{7}{2}\in\mathbb{R}_{>0}.
    $$

    !!! chiave ""

        The DP algorithm executes

        $$
        S(m)=\Theta(m^2)
        $$

        steps in the worst case.

- DP\_WW\_InfoSol only adds a constant number of operations inside the same loops, and therefore its number of steps has the same order of growth.

---

**Next:** [Typical mistakes · In summary](typical-mistakes.md)
