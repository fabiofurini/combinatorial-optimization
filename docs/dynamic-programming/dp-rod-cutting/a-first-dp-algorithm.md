---
title: "A first DP algorithm"
---

# 28.2 A first DP algorithm

<div class="info-capitolo" markdown>

**Part 3 · Dynamic programming · Chapter 28** · [:material-book-open-variant: Chapter 28: Rod cutting](index.md) · [:material-file-pdf-box: Lecture notes, volume 3 (PDF)](../../pdf/lecture-notes-3-dynamic-programming.pdf) · [:material-pencil: Exercises: Rod cutting](../../exercises/dp-rod-cutting.md)

</div>

- <u>Step 1</u>: computation of the optimal value

    !!! chiave ""

        For any $\ell \in \{0,1,\dots,n\}$, let $v(\ell)$ be the optimal value of the RCP subinstance given by:

        1. a rod of length $\ell$,

        2. a set $\{1,2,\dots,\ell\}$ of $\ell$ possible piece lengths,

        3. for each piece length $j \in \{1,2,\dots,\ell\}$, a profit $p_j$.

        The recursive formula to compute $v(\ell)$ reads as follows:

        \begin{equation*}
        \label{eq:1}
        v(\ell)= \left\{ \begin{array}{ll}
        \displaystyle \max \bigg\{ p_j + v(\ell-j) : j \in \{1,2,\dots,\ell\}\bigg\} & \textrm{if $1\le \ell \le n$,}\\[2ex]
        0 & \textrm{if $\ell=0$.}
        \end{array} \right. \tag{28.1}
        \end{equation*}

    - The recursive decomposition process of formula $\eqref{eq:1}$ generates $\ell$ <strong>independent subproblems</strong>, each corresponding to a possible choice of cutting a first piece of length $j$ from a rod of length $\ell$.  Here, $v(0)=0$ since a rod of length $0$ cannot be cut and has profit $0$.

    - The optimal value $v(\ell)$ is obtained by trying all possible first-piece lengths and selecting the one that maximizes the sum $p_j+v(\ell-j)$ of the profit of the first piece and the optimal value of the residual subproblem.

    - Hence, an optimal solution for a rod of length $\ell$ is built by combining the chosen first piece of length $j$ with an optimal solution of the residual subproblem of length $\ell-j$.

        $\rightsquigarrow$ <strong>Optimal Substructure verified!</strong>

    - Different choices of the first-piece length, possibly made for different values of $\ell$, can lead to the same residual length, and therefore the same value $v(\ell)$ may need to be computed several times during the recursive evaluation of formula $\eqref{eq:1}$.

        $\rightsquigarrow$ <strong>Overlapping Subproblems verified!</strong>

    - A <strong>first method</strong> to compute the optimal value $v(n)$ of the RCP instance is the <strong>top-down approach</strong>. The method starts from the call with $\ell=n$ and evaluates formula $\eqref{eq:1}$ recursively: each call for a rod of length $\ell$ triggers further calls for rods of length $\ell-j$, for all $j \in \{1,2,\dots,\ell\}$, until the base case $v(0)$ is reached.

    - The <strong>recursion tree</strong> of the function $v$ has one node for each recursive call, labeled with the function call it represents. The root represents the initial call. The children of a node represent the recursive calls made by that call. The leaf nodes represent the base cases.

        <a id="box-3-texrcptree"></a>

        !!! esempio "Example 28.3: Recursion tree"

            We consider the RCP instance of <span style="color:#1971c2">Example 1</span>. This is the recursion tree of the top-down approach to compute $v(4)$:

            ![Figure 3](../../img/dp-rod-cutting/fig03.svg){ .fig loading=lazy  }

            The function $v$ is called $16$ times, and the same subproblems are solved multiple times: $v(2)$ is called $2$ times, $v(1)$ is called $4$ times, and $v(0)$ is called $8$ times. All the other calls are made only once.

    - The value $v(\ell)$, for a generic rod length $\ell$, can be computed once the values $v(j)$ are known for all smaller lengths $j<\ell$.

        <a id="box-4-texrcpsmallervalues"></a>

        !!! esempio "Example 28.4: Computing the values of the $v$ function"

            We consider the RCP instance of  <span style="color:#1971c2">Example 1</span> with a rod of length $n = 4$ and the profits associated with the possible piece lengths are:

            $$
            \begin{array}{l|rrrrrrr}
            \hline  & {\ell = 1} & {\ell = 2} & {\ell = 3} & {\ell = 4} \\
            \hline {p_\ell} & {1} & {5} & {8} & {9} \\
            \hline
            \end{array}
            $$

            The value of the function $v$ can be computed by starting from the base case $v(0)=0$ and then computing the values of $v(1)$, $v(2)$, $v(3)$, and $v(4)$ in order, as follows:

            - Since we know the value of $v(0)$, we can compute $v(1)$, as follows:

                $$
                v(1)=p_1 + v(0) = 1 + 0 = 1
                $$

            - Once we have computed  $v(1)$, we can compute $v(2)$, as follows:

                $$
                v(2)= \max\{p_1+v(1),p_2+v(0)\} = \max\{1+1,5+0\} = 5
                $$

            - Once we have computed $v(2)$ and $v(1)$, we can compute $v(3)$, as follows:

                $$
                v(3)= \max\{p_1+v(2),p_2+v(1),p_3+v(0)\} = \max\{1+5,5+1,8+0\} = 8
                $$

            - Once we have computed $v(3)$, $v(2)$ and $v(1)$, we can compute $v(4)$, as follows:

                \begin{align*}
                v(4)&= \max\{p_1+v(3),p_2+v(2),p_3+v(1),p_4+v(0)\}\\ &= \max\{1+8,5+5,8+1,9+0\} = 10
                \end{align*}

    - We can avoid solving the same subproblems repeatedly by storing the value of each subproblem as soon as it is computed. The values are stored in a <strong>lookup table</strong>.

    - Since solving a subproblem with value $v(\ell)$ depends only on subproblems with values $v(j)$, with $j<\ell$, we can solve the subproblems for increasing values of $\ell$, starting from the base case $v(0)=0$ and building up to $v(n)$: this observation naturally leads to a <strong>much more efficient method</strong> to compute the optimal value $v(n)$ of the RCP instance.

    - A <strong>second method</strong> to compute the optimal value $v(n)$ of the RCP instance is the <strong>bottom-up approach</strong>. The method starts from the base case $v(0)=0$ and evaluates formula $\eqref{eq:1}$ for increasing rod lengths $\ell \in \{1,2,\dots,n\}$: each value $v(\ell)$ is computed using the already-computed values $v(0), v(1), \dots, v(\ell-1)$, until the value $v(n)$ of the RCP instance is obtained.

        This is the pseudo-code of the <strong>DP algorithm using the bottom-up approach</strong>:

        !!! algoritmo "Algorithm: DP1"

            <div class="pseudocodice" markdown="0"><div class="pc" style="--liv:0"><strong>Input:</strong> An RCP instance given by the length <span class="arithmatex">\(n\)</span> of the rod and an array <span class="arithmatex">\(p[1..n]\)</span> of piece profits</div><div class="pc" style="--liv:0"><strong>Output:</strong> The optimal value of the RCP instance</div><div class="pc" style="--liv:0"><span class="pc-n">1</span><strong>Function</strong> DP1(<span class="arithmatex">\(n,p\)</span>)</div><div class="pc" style="--liv:1" id="box-5-bu-a"><span class="pc-n">2</span><span class="arithmatex">\({v} := \textnormal{new array}[0..n]\)</span></div><div class="pc" style="--liv:1" id="box-6-bu-b"><span class="pc-n">3</span><span class="arithmatex">\({v}[0] \leftarrow 0\)</span></div><div class="pc" style="--liv:1" id="box-7-bu-c"><span class="pc-n">4</span><strong>for</strong> <span class="arithmatex">\(\ell := 1\)</span> <strong>to</strong> <span class="arithmatex">\(n\)</span>  <strong>do</strong></div><div class="pc" style="--liv:2" id="box-8-bu-d"><span class="pc-n">5</span><span class="arithmatex">\(\mathit{m} := 0\)</span></div><div class="pc" style="--liv:2" id="box-9-bu-e"><span class="pc-n">6</span><strong>for</strong> <span class="arithmatex">\(j := 1\)</span> <strong>to</strong> <span class="arithmatex">\(\ell\)</span>  <strong>do</strong></div><div class="pc" style="--liv:3" id="box-10-bu-f"><span class="pc-n">7</span><strong>if</strong> <span class="arithmatex">\(\mathit{m} < p[j] + {v}[\ell-j]\)</span>  <strong>then</strong></div><div class="pc" style="--liv:4" id="box-11-bu-g"><span class="pc-n">8</span><span class="arithmatex">\(\mathit{m} \leftarrow p[j] + {v}[\ell-j]\)</span></div><div class="pc" style="--liv:3"><span class="pc-n">9</span><strong>end</strong></div><div class="pc" style="--liv:2"><span class="pc-n">10</span><strong>end</strong></div><div class="pc" style="--liv:2" id="box-12-bu-h"><span class="pc-n">11</span><span class="arithmatex">\({v}[\ell] \leftarrow \mathit{m}\)</span></div><div class="pc" style="--liv:1"><span class="pc-n">12</span><strong>end</strong></div><div class="pc" style="--liv:1" id="box-13-bu-i"><span class="pc-n">13</span><strong>return</strong> <span class="arithmatex">\({v}[n]\)</span></div></div>

        - The vector ${v}[0..n]$ is the <strong>lookup table</strong>: it stores the optimal values of all subproblems, with the base case ${v}[0]=0$.

        - The outer loop, over $\ell \in \{1,2,\dots,n\}$, computes ${v}[\ell]$ in increasing order of rod length.

        - The inner loop, over $j \in \{1,2,\dots,\ell\}$, evaluates all possible first-piece lengths and keeps in $\mathit{m}$ the largest value $p[j]+{v}[\ell-j]$.

        - At the end of the inner loop, ${v}[\ell] \leftarrow \mathit{m}$ stores the optimal value ${v}[\ell]$.

        - Finally, the optimal value ${v}[n]$ of the RCP instance is returned.

        <a id="box-14-texrcpbu"></a>

        !!! esempio "Example 28.5: Execution of the DP algorithm"

            We consider the RCP instance of  <span style="color:#1971c2">Example 1</span> with a rod of length $n = 4$ and the profits associated with the possible piece lengths are:

            $$
            \begin{array}{l|rrrrrrr}
            \hline  & {\ell = 1} & {\ell = 2} & {\ell = 3} & {\ell = 4} \\
            \hline {p_\ell} & {1} & {5} & {8} & {9} \\
            \hline
            \end{array}
            $$

            For each step of the DP algorithm, the table shows the values of $\ell$ and $j$, the current value of $\mathit{m}$, and the cell ${v}[\ell]$. The cell of $\mathit{m}$ is highlighted in <mark>red</mark> when updated; the cell of ${v}[\ell]$ is highlighted in <mark>blue</mark> when assigned.

            <div class="tabella" markdown="0"><table>
            <tr>
            <th><span class="arithmatex">\(\ell\)</span></th>
            <th><span class="arithmatex">\(j\)</span></th>
            <th><span class="arithmatex">\({v}[\ell]\)</span></th>
            <th><span class="arithmatex">\(\mathit{m}\)</span></th>
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
            <td>0</td>
            <td><span class="arithmatex">\(\mathit{m}\leftarrow 0\)</span></td>
            </tr>
            <tr>
            <td>1</td>
            <td>1</td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td class="cella-rossa">1</td>
            <td><span class="arithmatex">\(p[1]{+}{v}[0]=1{+}0=1>0\)</span>: <span class="arithmatex">\(\mathit{m}\leftarrow 1\)</span></td>
            </tr>
            <tr>
            <td></td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td class="cella-blu">1</td>
            <td>1</td>
            <td><span class="arithmatex">\({v}[1]\leftarrow \mathit{m}=1\)</span></td>
            </tr>
            <tr>
            <td></td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td>0</td>
            <td><span class="arithmatex">\(\mathit{m}\leftarrow 0\)</span></td>
            </tr>
            <tr>
            <td>2</td>
            <td>1</td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td class="cella-rossa">2</td>
            <td><span class="arithmatex">\(p[1]{+}{v}[1]=1{+}1=2>0\)</span>: <span class="arithmatex">\(\mathit{m}\leftarrow 2\)</span></td>
            </tr>
            <tr>
            <td></td>
            <td>2</td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td class="cella-rossa">5</td>
            <td><span class="arithmatex">\(p[2]{+}{v}[0]=5{+}0=5>2\)</span>: <span class="arithmatex">\(\mathit{m}\leftarrow 5\)</span></td>
            </tr>
            <tr>
            <td></td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td class="cella-blu">5</td>
            <td>5</td>
            <td><span class="arithmatex">\({v}[2]\leftarrow \mathit{m}=5\)</span></td>
            </tr>
            <tr>
            <td></td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td>0</td>
            <td><span class="arithmatex">\(\mathit{m}\leftarrow 0\)</span></td>
            </tr>
            <tr>
            <td>3</td>
            <td>1</td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td class="cella-rossa">6</td>
            <td><span class="arithmatex">\(p[1]{+}{v}[2]=1{+}5=6>0\)</span>: <span class="arithmatex">\(\mathit{m}\leftarrow 6\)</span></td>
            </tr>
            <tr>
            <td></td>
            <td>2</td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td>6</td>
            <td><span class="arithmatex">\(p[2]{+}{v}[1]=5{+}1=6=\mathit{m}\)</span>: no update</td>
            </tr>
            <tr>
            <td></td>
            <td>3</td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td class="cella-rossa">8</td>
            <td><span class="arithmatex">\(p[3]{+}{v}[0]=8{+}0=8>6\)</span>: <span class="arithmatex">\(\mathit{m}\leftarrow 8\)</span></td>
            </tr>
            <tr>
            <td></td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td class="cella-blu">8</td>
            <td>8</td>
            <td><span class="arithmatex">\({v}[3]\leftarrow \mathit{m}=8\)</span></td>
            </tr>
            <tr>
            <td></td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td>0</td>
            <td><span class="arithmatex">\(\mathit{m}\leftarrow 0\)</span></td>
            </tr>
            <tr>
            <td>4</td>
            <td>1</td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td class="cella-rossa">9</td>
            <td><span class="arithmatex">\(p[1]{+}{v}[3]=1{+}8=9>0\)</span>: <span class="arithmatex">\(\mathit{m}\leftarrow 9\)</span></td>
            </tr>
            <tr>
            <td></td>
            <td>2</td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td class="cella-rossa">10</td>
            <td><span class="arithmatex">\(p[2]{+}{v}[2]=5{+}5=10>9\)</span>: <span class="arithmatex">\(\mathit{m}\leftarrow 10\)</span></td>
            </tr>
            <tr>
            <td></td>
            <td>3</td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td>10</td>
            <td><span class="arithmatex">\(p[3]{+}{v}[1]=8{+}1=9<10\)</span>: no update</td>
            </tr>
            <tr>
            <td></td>
            <td>4</td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td>10</td>
            <td><span class="arithmatex">\(p[4]{+}{v}[0]=9{+}0=9<10\)</span>: no update</td>
            </tr>
            <tr>
            <td></td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td class="cella-blu">10</td>
            <td>10</td>
            <td><span class="arithmatex">\({v}[4]\leftarrow \mathit{m}=10\)</span></td>
            </tr>
            </table></div>

            This is the vector ${v}$ after the execution of the DP algorithm:

            $$
            \begin{array}{c|ccccc}
            \hline  & {\ell = 0} & {\ell=1} & {\ell=2} & {\ell=3} & {\ell=4} \\
            \hline {{v}[\ell]} & 0 & 1 & 5 & 8 & 10 \\
            \hline
            \end{array}
            $$

    - After the execution of the DP algorithm, the vector ${v}$ contains the optimal value ${v}[\ell]$ for every rod length.

- <u>Step 2</u>: computation of an optimal solution

    - To compute an optimal solution, it is necessary to store some additional information.

    - For each rod length $\ell$, in addition to the optimal value ${v}[\ell]$, we store ${s}[\ell]$, the size of the first piece to cut off in an optimal solution for a rod of length $\ell$.

    - Starting from $\ell=n$, the value ${s}[\ell]$ gives the length of the first piece to cut; the remaining rod has length $\ell-{s}[\ell]$, and the same rule can be applied again, and so on, until the residual length reaches $0$.

        This is the pseudo-code of the <strong>DP algorithm using the bottom-up approach</strong> with the storing of the information necessary to compute an optimal solution:

        !!! algoritmo "Algorithm: DP1\_InfoSol"

            <div class="pseudocodice" markdown="0"><div class="pc" style="--liv:0"><strong>Input:</strong> An RCP instance given by the length <span class="arithmatex">\(n\)</span> of the rod and an array <span class="arithmatex">\(p[1..n]\)</span> of piece profits</div><div class="pc" style="--liv:0"><strong>Output:</strong> The optimal value of the RCP instance and the information vector <span class="arithmatex">\({s}[1..n]\)</span></div><div class="pc" style="--liv:0"><span class="pc-n">1</span><strong>Function</strong> DP1_InfoSol(<span class="arithmatex">\(n,p\)</span>)</div><div class="pc" style="--liv:1"><span class="pc-n">2</span><span class="arithmatex">\({v} := \textnormal{new array}[0..n]\)</span></div><div class="pc" style="--liv:1"><span class="pc-n">3</span><span class="arithmatex">\({s} := \textnormal{new array}[1..n]\)</span></div><div class="pc" style="--liv:1"><span class="pc-n">4</span><span class="arithmatex">\({v}[0] \leftarrow 0\)</span></div><div class="pc" style="--liv:1"><span class="pc-n">5</span><strong>for</strong> <span class="arithmatex">\(\ell := 1\)</span> <strong>to</strong> <span class="arithmatex">\(n\)</span> <strong>do</strong></div><div class="pc" style="--liv:2"><span class="pc-n">6</span><span class="arithmatex">\(\mathit{m} := 0\)</span></div><div class="pc" style="--liv:2"><span class="pc-n">7</span><span class="arithmatex">\(\mathit{t} := 0\)</span></div><div class="pc" style="--liv:2"><span class="pc-n">8</span><strong>for</strong> <span class="arithmatex">\(j := 1\)</span> <strong>to</strong> <span class="arithmatex">\(\ell\)</span> <strong>do</strong></div><div class="pc" style="--liv:3"><span class="pc-n">9</span><strong>if</strong> <span class="arithmatex">\(\mathit{m} < p[j] + {v}[\ell-j]\)</span> <strong>then</strong></div><div class="pc" style="--liv:4"><span class="pc-n">10</span><span class="arithmatex">\(\mathit{m} \leftarrow p[j] + {v}[\ell-j]\)</span></div><div class="pc" style="--liv:4"><span class="pc-n">11</span><span class="arithmatex">\(\mathit{t} \leftarrow j\)</span></div><div class="pc" style="--liv:3"><span class="pc-n">12</span><strong>end</strong></div><div class="pc" style="--liv:2"><span class="pc-n">13</span><strong>end</strong></div><div class="pc" style="--liv:2"><span class="pc-n">14</span><span class="arithmatex">\({v}[\ell] \leftarrow \mathit{m}\)</span></div><div class="pc" style="--liv:2"><span class="pc-n">15</span><span class="arithmatex">\({s}[\ell] \leftarrow \mathit{t}\)</span></div><div class="pc" style="--liv:1"><span class="pc-n">16</span><strong>end</strong></div><div class="pc" style="--liv:1"><span class="pc-n">17</span><strong>return</strong> <span class="arithmatex">\({v}[n], {s}\)</span></div></div>

        - The DP algorithm uses the additional temporary variable $\mathit{t}$ to keep track of the decision made when $\mathit{m}$ is updated. If a first piece of length $j$ is selected, $\mathit{t}\leftarrow j$ stores this decision. At the end of the inner loop, ${s}[\ell]\leftarrow \mathit{t}$ stores the length of the selected first piece, together with the optimal value ${v}[\ell]\leftarrow \mathit{m}$.

        <a id="box-15-texrcpbuinfo"></a>

        !!! esempio "Example 28.6: Computation of the additional information"

            We consider the RCP instance of  <span style="color:#1971c2">Example 1</span> with a rod of length $n = 4$ and the profits associated with the possible piece lengths are:

            $$
            \begin{array}{l|rrrrrrr}
            \hline  & {\ell = 1} & {\ell = 2} & {\ell = 3} & {\ell = 4} \\
            \hline {p_\ell} & {1} & {5} & {8} & {9} \\
            \hline
            \end{array}
            $$

            For each step of the DP algorithm, the table shows the values of $\ell$ and $j$, the cell ${s}[\ell]$, the current value of $\mathit{m}$, and the current value of $\mathit{t}$. The cell of $\mathit{m}$ is highlighted in <mark>red</mark> when updated; the cell of $\mathit{t}$ and the cell of ${s}[\ell]$ are highlighted in <mark>blue</mark> when updated.

            <div class="tabella" markdown="0"><table>
            <tr>
            <th><span class="arithmatex">\(\ell\)</span></th>
            <th><span class="arithmatex">\(j\)</span></th>
            <th><span class="arithmatex">\({s}[\ell]\)</span></th>
            <th><span class="arithmatex">\(\mathit{m}\)</span></th>
            <th><span class="arithmatex">\(\mathit{t}\)</span></th>
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
            <td>0</td>
            <td>0</td>
            <td><span class="arithmatex">\(\mathit{m}\leftarrow 0\)</span>, <span class="arithmatex">\(\mathit{t}\leftarrow 0\)</span></td>
            </tr>
            <tr>
            <td>1</td>
            <td>1</td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td class="cella-rossa">1</td>
            <td class="cella-blu">1</td>
            <td><span class="arithmatex">\(1{+}0=1>0\)</span>: <span class="arithmatex">\(\mathit{m}\leftarrow 1\)</span>, <span class="arithmatex">\(\mathit{t}\leftarrow 1\)</span></td>
            </tr>
            <tr>
            <td></td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td class="cella-blu">1</td>
            <td>1</td>
            <td>1</td>
            <td><span class="arithmatex">\({v}[1]\leftarrow \mathit{m}=1\)</span>, <span class="arithmatex">\({s}[1]\leftarrow \mathit{t}=1\)</span></td>
            </tr>
            <tr>
            <td></td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td>0</td>
            <td>0</td>
            <td><span class="arithmatex">\(\mathit{m}\leftarrow 0\)</span>, <span class="arithmatex">\(\mathit{t}\leftarrow 0\)</span></td>
            </tr>
            <tr>
            <td>2</td>
            <td>1</td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td class="cella-rossa">2</td>
            <td class="cella-blu">1</td>
            <td><span class="arithmatex">\(1{+}1=2>0\)</span>: <span class="arithmatex">\(\mathit{m}\leftarrow 2\)</span>, <span class="arithmatex">\(\mathit{t}\leftarrow 1\)</span></td>
            </tr>
            <tr>
            <td></td>
            <td>2</td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td class="cella-rossa">5</td>
            <td class="cella-blu">2</td>
            <td><span class="arithmatex">\(5{+}0=5>2\)</span>: <span class="arithmatex">\(\mathit{m}\leftarrow 5\)</span>, <span class="arithmatex">\(\mathit{t}\leftarrow 2\)</span></td>
            </tr>
            <tr>
            <td></td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td class="cella-blu">2</td>
            <td>5</td>
            <td>2</td>
            <td><span class="arithmatex">\({v}[2]\leftarrow \mathit{m}=5\)</span>, <span class="arithmatex">\({s}[2]\leftarrow \mathit{t}=2\)</span></td>
            </tr>
            <tr>
            <td></td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td>0</td>
            <td>0</td>
            <td><span class="arithmatex">\(\mathit{m}\leftarrow 0\)</span>, <span class="arithmatex">\(\mathit{t}\leftarrow 0\)</span></td>
            </tr>
            <tr>
            <td>3</td>
            <td>1</td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td class="cella-rossa">6</td>
            <td class="cella-blu">1</td>
            <td><span class="arithmatex">\(1{+}5=6>0\)</span>: <span class="arithmatex">\(\mathit{m}\leftarrow 6\)</span>, <span class="arithmatex">\(\mathit{t}\leftarrow 1\)</span></td>
            </tr>
            <tr>
            <td></td>
            <td>2</td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td>6</td>
            <td>1</td>
            <td><span class="arithmatex">\(5{+}1=6=\mathit{m}\)</span>: no update</td>
            </tr>
            <tr>
            <td></td>
            <td>3</td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td class="cella-rossa">8</td>
            <td class="cella-blu">3</td>
            <td><span class="arithmatex">\(8{+}0=8>6\)</span>: <span class="arithmatex">\(\mathit{m}\leftarrow 8\)</span>, <span class="arithmatex">\(\mathit{t}\leftarrow 3\)</span></td>
            </tr>
            <tr>
            <td></td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td class="cella-blu">3</td>
            <td>8</td>
            <td>3</td>
            <td><span class="arithmatex">\({v}[3]\leftarrow \mathit{m}=8\)</span>, <span class="arithmatex">\({s}[3]\leftarrow \mathit{t}=3\)</span></td>
            </tr>
            <tr>
            <td></td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td>0</td>
            <td>0</td>
            <td><span class="arithmatex">\(\mathit{m}\leftarrow 0\)</span>, <span class="arithmatex">\(\mathit{t}\leftarrow 0\)</span></td>
            </tr>
            <tr>
            <td>4</td>
            <td>1</td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td class="cella-rossa">9</td>
            <td class="cella-blu">1</td>
            <td><span class="arithmatex">\(1{+}8=9>0\)</span>: <span class="arithmatex">\(\mathit{m}\leftarrow 9\)</span>, <span class="arithmatex">\(\mathit{t}\leftarrow 1\)</span></td>
            </tr>
            <tr>
            <td></td>
            <td>2</td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td class="cella-rossa">10</td>
            <td class="cella-blu">2</td>
            <td><span class="arithmatex">\(5{+}5=10>9\)</span>: <span class="arithmatex">\(\mathit{m}\leftarrow 10\)</span>, <span class="arithmatex">\(\mathit{t}\leftarrow 2\)</span></td>
            </tr>
            <tr>
            <td></td>
            <td>3</td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td>10</td>
            <td>2</td>
            <td><span class="arithmatex">\(8{+}1=9<10\)</span>: no update</td>
            </tr>
            <tr>
            <td></td>
            <td>4</td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td>10</td>
            <td>2</td>
            <td><span class="arithmatex">\(9{+}0=9<10\)</span>: no update</td>
            </tr>
            <tr>
            <td></td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td class="cella-blu">2</td>
            <td>10</td>
            <td>2</td>
            <td><span class="arithmatex">\({v}[4]\leftarrow \mathit{m}=10\)</span>, <span class="arithmatex">\({s}[4]\leftarrow \mathit{t}=2\)</span></td>
            </tr>
            </table></div>

            This is the vector ${s}$ after the execution of the DP algorithm:

            $$
            \begin{array}{c|cccc}
            \hline  & {\ell=1} & {\ell=2} & {\ell=3} & {\ell=4} \\
            \hline {{s}[\ell]} & 1 & 2 & 3 & 2 \\
            \hline
            \end{array}
            $$

    - Once the vector ${s}$ has been computed, an optimal solution of the RCP instance can be computed by repeatedly applying the following rule, starting from $j=n$ and $x_{\ell}=0$ for all $\ell \in \{1,2,\dots,n\}$:

        $$
        x_{{s}[j]} \leftarrow x_{{s}[j]}+1,
        \qquad
        j \leftarrow j-{s}[j],
        $$

        until $j=0$. This yields the vector $(x_1,x_2,\dots,x_n)$, where each entry $x_{\ell}$ is the number of pieces of length $\ell$ in an optimal solution.

    - The following pseudo-code implements the computation of an optimal solution, given the vector ${s}$.

        !!! algoritmo "Algorithm: DP1\_SolComputation"

            <div class="pseudocodice" markdown="0"><div class="pc" style="--liv:0"><strong>Input:</strong> The rod length <span class="arithmatex">\(n\)</span> of the RCP instance and the vector <span class="arithmatex">\({s}[1..n]\)</span></div><div class="pc" style="--liv:0"><strong>Output:</strong> An optimal solution of the RCP instance</div><div class="pc" style="--liv:0"><span class="pc-n">1</span><strong>Function</strong> DP1_SolComputation(<span class="arithmatex">\(n,{s}\)</span>)</div><div class="pc" style="--liv:1"><span class="pc-n">2</span><span class="arithmatex">\(x := \textnormal{new array}[1..n]\)</span></div><div class="pc" style="--liv:1"><span class="pc-n">3</span><strong>for</strong> <span class="arithmatex">\(\ell := 1\)</span> <strong>to</strong> <span class="arithmatex">\(n\)</span> <strong>do</strong></div><div class="pc" style="--liv:2"><span class="pc-n">4</span><span class="arithmatex">\(x[\ell] \leftarrow 0\)</span></div><div class="pc" style="--liv:1"><span class="pc-n">5</span><strong>end</strong></div><div class="pc" style="--liv:1"><span class="pc-n">6</span><span class="arithmatex">\(j := n\)</span></div><div class="pc" style="--liv:1"><span class="pc-n">7</span><strong>while</strong> <span class="arithmatex">\(j > 0\)</span> <strong>do</strong></div><div class="pc" style="--liv:2"><span class="pc-n">8</span><span class="arithmatex">\(x[{s}[j]] \leftarrow x[{s}[j]]+1\)</span></div><div class="pc" style="--liv:2"><span class="pc-n">9</span><span class="arithmatex">\(j \leftarrow j - {s}[j]\)</span></div><div class="pc" style="--liv:1"><span class="pc-n">10</span><strong>end</strong></div><div class="pc" style="--liv:1"><span class="pc-n">11</span><strong>return</strong> <span class="arithmatex">\(x\)</span></div></div>

        <a id="box-16-texrcpsolvector"></a>

        !!! esempio "Example 28.7: Computing an optimal solution"

            After the execution of the DP algorithm on the instance of <span style="color:#1971c2">Example 1</span>, we have the following vector ${s}$:

            $$
            \begin{array}{l|rrrr}
            \hline  & {\ell=1} & {\ell=2} & {\ell=3} & {\ell=4} \\
            \hline {{s}[\ell]} & 1 & 2 & 3 & 2 \\
            \hline
            \end{array}
            $$

            We can compute an optimal solution for a rod of length $n=4$ as follows:

            <div class="tabella" markdown="0"><table>
            <tr>
            <th>Iteration</th>
            <th><span class="arithmatex">\(j\)</span></th>
            <th><span class="arithmatex">\({s}[j]\)</span></th>
            <th><span class="arithmatex">\(x[1]\)</span></th>
            <th><span class="arithmatex">\(x[2]\)</span></th>
            <th><span class="arithmatex">\(x[3]\)</span></th>
            <th><span class="arithmatex">\(x[4]\)</span></th>
            <th><span class="arithmatex">\(j \leftarrow j-{s}[j]\)</span></th>
            </tr>
            <tr>
            <td><span class="arithmatex">\(-\)</span></td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td><span class="arithmatex">\(j=4\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(1\)</span></td>
            <td><span class="arithmatex">\(4\)</span></td>
            <td><span class="arithmatex">\(2\)</span></td>
            <td>0</td>
            <td class="cella-blu">1</td>
            <td>0</td>
            <td>0</td>
            <td><span class="arithmatex">\(j=4-2=2\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\(2\)</span></td>
            <td>0</td>
            <td class="cella-blu">2</td>
            <td>0</td>
            <td>0</td>
            <td><span class="arithmatex">\(j=2-2=0\)</span></td>
            </tr>
            </table></div>

            An optimal solution is the vector:

            $$
            (0,2,0,0)
            $$

    - The same computation procedure, based on the vector $s$, can be applied starting from any rod length $\ell$.

        <a id="box-17-texrcpsolvector32"></a>

        !!! esempio "Example 28.8: Computing optimal solutions for rod lengths 3 and 2"

            After the execution of the DP algorithm on the instance of <span style="color:#1971c2">Example 1</span>, we have the following vector ${s}$:

            $$
            \begin{array}{l|rrrr}
            \hline  & {\ell=1} & {\ell=2} & {\ell=3} & {\ell=4} \\
            \hline {{s}[\ell]} & 1 & 2 & 3 & 2 \\
            \hline
            \end{array}
            $$

            We can compute an optimal solution for a rod of length $n=3$ as follows:

            <div class="tabella" markdown="0"><table>
            <tr>
            <th>Iteration</th>
            <th><span class="arithmatex">\(j\)</span></th>
            <th><span class="arithmatex">\({s}[j]\)</span></th>
            <th><span class="arithmatex">\(x[1]\)</span></th>
            <th><span class="arithmatex">\(x[2]\)</span></th>
            <th><span class="arithmatex">\(x[3]\)</span></th>
            <th><span class="arithmatex">\(x[4]\)</span></th>
            <th><span class="arithmatex">\(j \leftarrow j-{s}[j]\)</span></th>
            </tr>
            <tr>
            <td><span class="arithmatex">\(-\)</span></td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td><span class="arithmatex">\(j=3\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(1\)</span></td>
            <td><span class="arithmatex">\(3\)</span></td>
            <td><span class="arithmatex">\(3\)</span></td>
            <td>0</td>
            <td>0</td>
            <td class="cella-blu">1</td>
            <td>0</td>
            <td><span class="arithmatex">\(j=3-3=0\)</span></td>
            </tr>
            </table></div>

            An optimal solution is the vector:

            $$
            (0,0,1,0)
            $$

            We can compute an optimal solution for a rod of length $n=2$ as follows:

            <div class="tabella" markdown="0"><table>
            <tr>
            <th>Iteration</th>
            <th><span class="arithmatex">\(j\)</span></th>
            <th><span class="arithmatex">\({s}[j]\)</span></th>
            <th><span class="arithmatex">\(x[1]\)</span></th>
            <th><span class="arithmatex">\(x[2]\)</span></th>
            <th><span class="arithmatex">\(x[3]\)</span></th>
            <th><span class="arithmatex">\(x[4]\)</span></th>
            <th><span class="arithmatex">\(j \leftarrow j-{s}[j]\)</span></th>
            </tr>
            <tr>
            <td><span class="arithmatex">\(-\)</span></td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td><span class="arithmatex">\(j=2\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(1\)</span></td>
            <td><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\(2\)</span></td>
            <td>0</td>
            <td class="cella-blu">1</td>
            <td>0</td>
            <td>0</td>
            <td><span class="arithmatex">\(j=2-2=0\)</span></td>
            </tr>
            </table></div>

            An optimal solution is the vector:

            $$
            (0,1,0,0)
            $$

## 28.2.1 Number of steps

- Let $S(n)$ denote the number of steps executed by <code>DP1</code> in the worst case, where $n$ is the rod length. We compute $S(n)$ by counting how many times <span style="color:#e03131">Line</span> [2](#box-5-bu-a)–<span style="color:#e03131">Line</span> [13](#box-13-bu-i) are executed.

- In the worst case, the condition at line [7](#box-10-bu-f) is true at every iteration of the inner loop, and therefore line [8](#box-11-bu-g) is executed as often as line [7](#box-10-bu-f). The number of executions of the relevant lines is:

    - <span style="color:#e03131">Line</span> [2](#box-5-bu-a) is executed $1$ time.

    - <span style="color:#e03131">Line</span> [3](#box-6-bu-b) is executed $1$ time.

    - <span style="color:#e03131">Line</span> [4](#box-7-bu-c) is executed $n$ times.

    - <span style="color:#e03131">Line</span> [5](#box-8-bu-d) is executed $n$ times.

    - <span style="color:#e03131">Line</span> [6](#box-9-bu-e) is executed $\displaystyle\sum_{\ell=1}^{n}\ell$ times.

    - <span style="color:#e03131">Line</span> [7](#box-10-bu-f) is executed $\displaystyle\sum_{\ell=1}^{n}\ell$ times.

    - <span style="color:#e03131">Line</span> [8](#box-11-bu-g) is executed $\displaystyle\sum_{\ell=1}^{n}\ell$ times.

    - <span style="color:#e03131">Line</span> [11](#box-12-bu-h) is executed $n$ times.

    - <span style="color:#e03131">Line</span> [13](#box-13-bu-i) is executed $1$ time.

    Therefore, the total number of steps in the worst case is

    $$
    1+1+n+n+\sum_{\ell=1}^{n}\ell+\sum_{\ell=1}^{n}\ell+\sum_{\ell=1}^{n}\ell+n+1
    =
    3+3n+3\sum_{\ell=1}^{n}\ell.
    $$

    Using $\sum_{\ell=1}^{n}\ell=\dfrac{n(n+1)}{2}$, we obtain

    $$
    S(n)=3+3n+3\cdot\frac{n(n+1)}{2}
    =
    \frac{3n^2+9n+6}{2}.
    $$

    Hence,

    $$
    S(n)=\Theta(n^2).
    $$

    Indeed,

    $$
    \lim_{n\to\infty}
    \frac{\frac{3n^2+9n+6}{2}}{n^2}
    =
    \lim_{n\to\infty}
    \frac{1}{2}\left(3+\frac{9}{n}+\frac{6}{n^2}\right)
    =
    \frac{3}{2}\in\mathbb{R}_{>0}.
    $$

    !!! chiave ""

        The DP algorithm executes

        $$
        S(n)=\Theta(n^2)
        $$

        steps in the worst case.

---

**Next:** [28.3 A second DP algorithm](a-second-dp-algorithm.md)
