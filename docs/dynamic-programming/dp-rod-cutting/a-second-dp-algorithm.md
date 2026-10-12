---
title: "A second DP algorithm"
---

# 25.3 A second DP algorithm

<div class="info-capitolo" markdown>

**Part 3 · Dynamic programming · Chapter 25** · [:material-book-open-variant: Chapter 25: Rod cutting](index.md) · [:material-file-pdf-box: Lecture notes, volume 3 (PDF)](../../pdf/lecture-notes-3-dynamic-programming.pdf) · [:material-pencil: Exercises: Rod cutting](../../exercises/dp-rod-cutting.md)

</div>

- <u>Step 1</u>: computation of the optimal value

    !!! chiave ""

        For any $j \in \{0,1,\dots,n\}$ and $\ell \in \{0,1,\dots,n\}$, let $v(j,\ell)$ be the optimal value of the RCP subinstance given by:

        1. a rod of length $\ell$,

        2. a set $\{1,2,\dots,j\}$ of $j$ possible piece lengths,

        3. for each piece length $k \in \{1,2,\dots,j\}$, a profit $p_k$.

        The recursive formula to compute $v(j,\ell)$ reads as follows:

        \begin{equation*}
        \label{eq:rcpalt}
        v(j,\ell)= \left\{ \begin{array}{ll}
        \displaystyle \max \bigg\{ v(j-1,\ell),\; p_j + v(j,\ell-j) \bigg\} & \textrm{if $1\le j \le \ell$,}\\[2ex]
        v(j-1,\ell) & \textrm{if $1 \le \ell < j$,}\\[2ex]
        0 & \textrm{if $\ell=0$,}\\[2ex]
        -\infty & \textrm{if $j=0$ and $\ell>0$.}
        \end{array} \right. \tag{25.2}
        \end{equation*}

    - The recursive decomposition process of formula $\eqref{eq:rcpalt}$ generates at most $2$ <strong>independent subproblems</strong>, corresponding to whether or not to cut a piece of length $j$ from a rod of length $\ell$. If $j>\ell$, a piece of length $j$ cannot be cut from the rod, and therefore the only feasible option is not to cut it. Here, $v(j,0)=0$ since a rod of length $0$ cannot be cut and has profit $0$. Moreover, $v(0,\ell)=-\infty$ for $\ell>0$: in this case no positive piece length is available, so no feasible solution exists for a rod of positive length. The value $-\infty$ is used to rule out this infeasible case.

    - If $1 \le j \le \ell$, the optimal value $v(j,\ell)$ is obtained by trying the two possible options, cutting or not cutting a first piece of length $j$, and selecting the one that maximizes the profit. The corresponding values are $p_j+v(j,\ell-j)$ and $v(j-1,\ell)$, respectively. If $1 \le \ell < j$, piece length $j$ cannot be used, and therefore $v(j,\ell)=v(j-1,\ell)$.

    - Hence, an optimal solution for a rod of length $\ell$ with largest available piece length $j$ is built by combining the chosen decision on piece length $j$ with an optimal solution of the corresponding residual subproblem.

        $\rightsquigarrow$ <strong>Optimal Substructure verified!</strong>

    - Different sequences of decisions on the piece lengths, possibly made for different values of $j$ and $\ell$, can lead to the same subproblem, and therefore the same value $v(j,\ell)$ may need to be computed several times during the recursive evaluation of formula $\eqref{eq:rcpalt}$.

        $\rightsquigarrow$ <strong>Overlapping Subproblems verified!</strong>

    - A <strong>first method</strong> to compute the optimal value $v(n,n)$ of the RCP instance is the <strong>top-down approach</strong>. The method starts from the call with $(j,\ell)=(n,n)$ and evaluates formula $\eqref{eq:rcpalt}$ recursively: each call for a rod of length $\ell$ and largest available piece length $j$ triggers further calls corresponding to the feasible decisions on piece length $j$, until one of the base cases $v(j,0)$ or $v(0,\ell)$ is reached.

    - The <strong>recursion tree</strong> of the function $v$ has one node for each recursive call, labeled with the function call it represents. The root represents the initial call. The children of a node represent the recursive calls made by that call. The leaf nodes represent the base cases.

        <a id="box-19-texrcpalttree"></a>

        !!! esempio "Example 25.9: Recursion tree"

            We consider the RCP instance of <span style="color:#1971c2">Example 1</span>. This is the recursion tree of the top-down approach to compute $v(4,4)$:

            ![Figure 4](../../img/dp-rod-cutting/fig04.svg){ .fig loading=lazy  }

            The function $v$ is called $25$ times, and the same subproblems are solved multiple times: $v(1,2)$ is called $2$ times, $v(0,2)$ is called $2$ times, $v(1,1)$ is called $3$ times, $v(0,1)$ is called $3$ times, and $v(1,0)$ is called $3$ times. All the other calls are made only once.

    - The value $v(j,\ell)$ can be computed once $v(j-1,\ell)$ is known and, when $j\le\ell$, $v(j,\ell-j)$ is also known. Therefore, for a fixed value of $j$, all values $v(j,\ell)$ can be computed by considering the values of $\ell$ in increasing order. Starting from the base cases $v(j,0)=0$ and $v(0,\ell)=-\infty$, the values of the function $v$ can be computed row by row, moving to the next value of $j$ only after all values $v(j,\ell)$ for the current value of $j$ have been computed.

        <a id="box-20-texrcpaltvalues"></a>

        !!! esempio "Example 25.10: Computing the values of the $v$ function"

            We consider the RCP instance of  <span style="color:#1971c2">Example 1</span> with a rod of length $n = 4$ and the profits associated with the possible piece lengths are:

            $$
            \begin{array}{l|rrrrrrr}
            \hline  & {\ell = 1} & {\ell = 2} & {\ell = 3} & {\ell = 4} \\
            \hline {p_\ell} & {1} & {5} & {8} & {9} \\
            \hline
            \end{array}
            $$

            The values of the function $v$ are computed as follows:

            - For $j=1$, only pieces of length $1$ can be used. Therefore:

                $$
                v(1,0)=0,
                $$

                $$
                v(1,1)=\max\{v(0,1),p_1+v(1,0)\}=\max\{-\infty,1+0\}=1,
                $$

                $$
                v(1,2)=\max\{v(0,2),p_1+v(1,1)\}=\max\{-\infty,1+1\}=2,
                $$

                $$
                v(1,3)=\max\{v(0,3),p_1+v(1,2)\}=\max\{-\infty,1+2\}=3,
                $$

                $$
                v(1,4)=\max\{v(0,4),p_1+v(1,3)\}=\max\{-\infty,1+3\}=4.
                $$

            - For $j=2$, pieces of length $1$ and $2$ can be used. We obtain:

                $$
                v(2,0)=0,\qquad v(2,1)=v(1,1)=1,
                $$

                $$
                v(2,2)=\max\{v(1,2),p_2+v(2,0)\}=\max\{2,5+0\}=5,
                $$

                $$
                v(2,3)=\max\{v(1,3),p_2+v(2,1)\}=\max\{3,5+1\}=6,
                $$

                $$
                v(2,4)=\max\{v(1,4),p_2+v(2,2)\}=\max\{4,5+5\}=10.
                $$

            - For $j=3$, pieces of length $1$, $2$, and $3$ can be used. We obtain:

                $$
                v(3,0)=0,\qquad v(3,1)=v(2,1)=1,\qquad v(3,2)=v(2,2)=5,
                $$

                $$
                v(3,3)=\max\{v(2,3),p_3+v(3,0)\}=\max\{6,8+0\}=8,
                $$

                $$
                v(3,4)=\max\{v(2,4),p_3+v(3,1)\}=\max\{10,8+1\}=10.
                $$

            - For $j=4$, all piece lengths are available. We obtain:

                $$
                \begin{gathered}
                v(4,0)=0,\qquad v(4,1)=v(3,1)=1,\\ v(4,2)=v(3,2)=5,\qquad v(4,3)=v(3,3)=8,
                \end{gathered}
                $$

                $$
                v(4,4)=\max\{v(3,4),p_4+v(4,0)\}=\max\{10,9+0\}=10.
                $$

    - We can avoid solving the same subproblems repeatedly by storing the value of each subproblem as soon as it is computed. The values are stored in a <strong>lookup table</strong>.

    - Since solving any particular subproblem depends only on subproblems with a smaller value of $j$, or with the same value of $j$ and a smaller rod length, we can solve the subproblems in increasing order of $j$ and, for each fixed value of $j$, in increasing order of rod length, starting from the base cases $v(0,0)=0$ and $v(0,\ell)=-\infty$ for all $\ell \in \{1,\dots,n\}$ and building up to $v(n,n)$: this observation naturally leads to a <strong>much more efficient method</strong> to compute the optimal value $v(n,n)$ of the RCP instance.

    - A <strong>second method</strong> to compute the optimal value $v(n,n)$ of the RCP instance is the <strong>bottom-up approach</strong>. The method starts from the base cases $v(0,0)=0$ and $v(0,\ell)=-\infty$ for all $\ell \in \{1,\dots,n\}$ and evaluates formula $\eqref{eq:rcpalt}$ for increasing values of $j \in \{1,2,\dots,n\}$ and $\ell \in \{0,1,\dots,n\}$: each value $v(j,\ell)$ is computed using already-computed values, until the value $v(n,n)$ of the RCP instance is obtained.

        This is the pseudo-code of the <strong>DP algorithm using the bottom-up approach</strong>:

        !!! algoritmo "Algorithm: DP2"

            <div class="pseudocodice" markdown="0"><div class="pc" style="--liv:0"><strong>Input:</strong> An RCP instance given by the length <span class="arithmatex">\(n\)</span> of the rod and an array <span class="arithmatex">\(p[1..n]\)</span> of piece profits</div><div class="pc" style="--liv:0"><strong>Output:</strong> The optimal value of the RCP instance</div><div class="pc" style="--liv:0"><span class="pc-n">1</span><strong>Function</strong> DP2(<span class="arithmatex">\(n,p\)</span>)</div><div class="pc" style="--liv:1" id="box-21-bu2-a"><span class="pc-n">2</span><span class="arithmatex">\({v} := \textnormal{new array}[0..n][0..n]\)</span></div><div class="pc" style="--liv:1" id="box-22-bu2-b"><span class="pc-n">3</span><span class="arithmatex">\({v}[0][0] \leftarrow 0\)</span></div><div class="pc" style="--liv:1" id="box-23-bu2-c"><span class="pc-n">4</span><strong>for</strong> <span class="arithmatex">\(\ell := 1\)</span> <strong>to</strong> <span class="arithmatex">\(n\)</span>  <strong>do</strong></div><div class="pc" style="--liv:2" id="box-24-bu2-d"><span class="pc-n">5</span><span class="arithmatex">\({v}[0][\ell] \leftarrow -\infty\)</span></div><div class="pc" style="--liv:1"><span class="pc-n">6</span><strong>end</strong></div><div class="pc" style="--liv:1" id="box-25-bu2-e"><span class="pc-n">7</span><strong>for</strong> <span class="arithmatex">\(j := 1\)</span> <strong>to</strong> <span class="arithmatex">\(n\)</span>  <strong>do</strong></div><div class="pc" style="--liv:2" id="box-26-bu2-f"><span class="pc-n">8</span><strong>for</strong> <span class="arithmatex">\(\ell := 0\)</span> <strong>to</strong> <span class="arithmatex">\(n\)</span>  <strong>do</strong></div><div class="pc" style="--liv:3" id="box-27-bu2-g"><span class="pc-n">9</span><strong>if</strong> <span class="arithmatex">\(j > \ell\)</span>  <strong>then</strong></div><div class="pc" style="--liv:4" id="box-28-bu2-h"><span class="pc-n">10</span><span class="arithmatex">\({v}[j][\ell] \leftarrow {v}[j-1][\ell]\)</span></div><div class="pc" style="--liv:3"><span class="pc-n">11</span><strong>else</strong></div><div class="pc" style="--liv:4" id="box-29-bu2-i"><span class="pc-n">12</span><strong>if</strong> <span class="arithmatex">\(p[j] + {v}[j][\ell-j] > {v}[j-1][\ell]\)</span>  <strong>then</strong></div><div class="pc" style="--liv:5" id="box-30-bu2-j"><span class="pc-n">13</span><span class="arithmatex">\({v}[j][\ell] \leftarrow p[j] + {v}[j][\ell-j]\)</span></div><div class="pc" style="--liv:4"><span class="pc-n">14</span><strong>else</strong></div><div class="pc" style="--liv:5" id="box-31-bu2-k"><span class="pc-n">15</span><span class="arithmatex">\({v}[j][\ell] \leftarrow {v}[j-1][\ell]\)</span></div><div class="pc" style="--liv:4"><span class="pc-n">16</span><strong>end</strong></div><div class="pc" style="--liv:3"><span class="pc-n">17</span><strong>end</strong></div><div class="pc" style="--liv:2"><span class="pc-n">18</span><strong>end</strong></div><div class="pc" style="--liv:1"><span class="pc-n">19</span><strong>end</strong></div><div class="pc" style="--liv:1" id="box-32-bu2-l"><span class="pc-n">20</span><strong>return</strong> <span class="arithmatex">\({v}[n][n]\)</span></div></div>

        - The matrix ${v}[0..n][0..n]$ is the <strong>lookup table</strong>: it stores the optimal values of all subproblems.

        - The initialization sets ${v}[0][0]=0$ and ${v}[0][\ell]=-\infty$ for all rod lengths $\ell \in \{1,\dots,n\}$, since a positive length cannot be filled if no piece length is available.

        - The outer loop, over $j \in \{1,2,\dots,n\}$, considers the available piece lengths in increasing order.

        - The inner loop, over $\ell \in \{0,1,\dots,n\}$, computes the best value for each rod length using only pieces of length at most $j$.

        - If $j>\ell$, piece length $j$ cannot be used, and therefore ${v}[j][\ell] \leftarrow {v}[j-1][\ell]$.

        - Otherwise, the DP algorithm compares the value obtained by not using piece length $j$, namely ${v}[j-1][\ell]$, with the value obtained by using one piece of length $j$, namely $p[j]+{v}[j][\ell-j]$.

        - Finally, the optimal value of the RCP instance is returned as ${v}[n][n]$.

        <a id="box-33-texrcpaltbu"></a>

        !!! esempio "Example 25.11: Execution of the DP algorithm"

            We consider the RCP instance of  <span style="color:#1971c2">Example 1</span> with a rod of length $n = 4$ and the profits associated with the possible piece lengths are:

            $$
            \begin{array}{l|rrrrrrr}
            \hline  & {\ell = 1} & {\ell = 2} & {\ell = 3} & {\ell = 4} \\
            \hline {p_\ell} & {1} & {5} & {8} & {9} \\
            \hline
            \end{array}
            $$

            For each step of the DP algorithm, the table shows the values of $j$ and $\ell$, the cell ${v}[j][\ell]$, and the operation performed.

            <div class="tabella" markdown="0"><table>
            <tr>
            <th><span class="arithmatex">\(j\)</span></th>
            <th><span class="arithmatex">\(\ell\)</span></th>
            <th><span class="arithmatex">\({v}[j][\ell]\)</span></th>
            <th>Action</th>
            </tr>
            <tr>
            <td><span class="arithmatex">\(0\)</span></td>
            <td><span class="arithmatex">\(0\)</span></td>
            <td>0</td>
            <td><span class="arithmatex">\({v}[0][0]\leftarrow 0\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(0\)</span></td>
            <td><span class="arithmatex">\(1\)</span></td>
            <td><span class="arithmatex">\(-\infty\)</span></td>
            <td><span class="arithmatex">\({v}[0][1]\leftarrow -\infty\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(0\)</span></td>
            <td><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\(-\infty\)</span></td>
            <td><span class="arithmatex">\({v}[0][2]\leftarrow -\infty\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(0\)</span></td>
            <td><span class="arithmatex">\(3\)</span></td>
            <td><span class="arithmatex">\(-\infty\)</span></td>
            <td><span class="arithmatex">\({v}[0][3]\leftarrow -\infty\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(0\)</span></td>
            <td><span class="arithmatex">\(4\)</span></td>
            <td><span class="arithmatex">\(-\infty\)</span></td>
            <td><span class="arithmatex">\({v}[0][4]\leftarrow -\infty\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(1\)</span></td>
            <td><span class="arithmatex">\(0\)</span></td>
            <td>0</td>
            <td><span class="arithmatex">\({v}[1][0]\leftarrow {v}[0][0]=0\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(1\)</span></td>
            <td><span class="arithmatex">\(1\)</span></td>
            <td>1</td>
            <td><span class="arithmatex">\(\max\{{v}[0][1],p[1]+{v}[1][0]\}=\max\{-\infty,1+0\}=1\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(1\)</span></td>
            <td><span class="arithmatex">\(2\)</span></td>
            <td>2</td>
            <td><span class="arithmatex">\(\max\{{v}[0][2],p[1]+{v}[1][1]\}=\max\{-\infty,1+1\}=2\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(1\)</span></td>
            <td><span class="arithmatex">\(3\)</span></td>
            <td>3</td>
            <td><span class="arithmatex">\(\max\{{v}[0][3],p[1]+{v}[1][2]\}=\max\{-\infty,1+2\}=3\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(1\)</span></td>
            <td><span class="arithmatex">\(4\)</span></td>
            <td>4</td>
            <td><span class="arithmatex">\(\max\{{v}[0][4],p[1]+{v}[1][3]\}=\max\{-\infty,1+3\}=4\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\(0\)</span></td>
            <td>0</td>
            <td><span class="arithmatex">\({v}[2][0]\leftarrow {v}[1][0]=0\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\(1\)</span></td>
            <td>1</td>
            <td><span class="arithmatex">\(2>1\)</span>: <span class="arithmatex">\({v}[2][1]\leftarrow {v}[1][1]=1\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\(2\)</span></td>
            <td>5</td>
            <td><span class="arithmatex">\(\max\{{v}[1][2],p[2]+{v}[2][0]\}=\max\{2,5+0\}=5\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\(3\)</span></td>
            <td>6</td>
            <td><span class="arithmatex">\(\max\{{v}[1][3],p[2]+{v}[2][1]\}=\max\{3,5+1\}=6\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\(4\)</span></td>
            <td>10</td>
            <td><span class="arithmatex">\(\max\{{v}[1][4],p[2]+{v}[2][2]\}=\max\{4,5+5\}=10\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(3\)</span></td>
            <td><span class="arithmatex">\(0\)</span></td>
            <td>0</td>
            <td><span class="arithmatex">\({v}[3][0]\leftarrow {v}[2][0]=0\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(3\)</span></td>
            <td><span class="arithmatex">\(1\)</span></td>
            <td>1</td>
            <td><span class="arithmatex">\(3>1\)</span>: <span class="arithmatex">\({v}[3][1]\leftarrow {v}[2][1]=1\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(3\)</span></td>
            <td><span class="arithmatex">\(2\)</span></td>
            <td>5</td>
            <td><span class="arithmatex">\(3>2\)</span>: <span class="arithmatex">\({v}[3][2]\leftarrow {v}[2][2]=5\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(3\)</span></td>
            <td><span class="arithmatex">\(3\)</span></td>
            <td>8</td>
            <td><span class="arithmatex">\(\max\{{v}[2][3],p[3]+{v}[3][0]\}=\max\{6,8+0\}=8\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(3\)</span></td>
            <td><span class="arithmatex">\(4\)</span></td>
            <td>10</td>
            <td><span class="arithmatex">\(\max\{{v}[2][4],p[3]+{v}[3][1]\}=\max\{10,8+1\}=10\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(4\)</span></td>
            <td><span class="arithmatex">\(0\)</span></td>
            <td>0</td>
            <td><span class="arithmatex">\({v}[4][0]\leftarrow {v}[3][0]=0\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(4\)</span></td>
            <td><span class="arithmatex">\(1\)</span></td>
            <td>1</td>
            <td><span class="arithmatex">\(4>1\)</span>: <span class="arithmatex">\({v}[4][1]\leftarrow {v}[3][1]=1\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(4\)</span></td>
            <td><span class="arithmatex">\(2\)</span></td>
            <td>5</td>
            <td><span class="arithmatex">\(4>2\)</span>: <span class="arithmatex">\({v}[4][2]\leftarrow {v}[3][2]=5\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(4\)</span></td>
            <td><span class="arithmatex">\(3\)</span></td>
            <td>8</td>
            <td><span class="arithmatex">\(4>3\)</span>: <span class="arithmatex">\({v}[4][3]\leftarrow {v}[3][3]=8\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(4\)</span></td>
            <td><span class="arithmatex">\(4\)</span></td>
            <td>10</td>
            <td><span class="arithmatex">\(\max\{{v}[3][4],p[4]+{v}[4][0]\}=\max\{10,9+0\}=10\)</span></td>
            </tr>
            </table></div>

            This is the matrix ${v}$ after the execution of the DP algorithm:

            $$
            \begin{array}{l|rrrrr}
            \hline {{v}[j][\ell]} & {\ell=0} & {\ell=1} & {\ell=2} & {\ell=3} & {\ell=4} \\
            \hline {j=0} & 0 & {-\infty} & {-\infty} & {-\infty} & {-\infty} \\
            {j=1} & 0 & 1 & 2 & 3 & 4 \\
            {j=2} & 0 & 1 & 5 & 6 & 10 \\
            {j=3} & 0 & 1 & 5 & 8 & 10 \\
            {j=4} & 0 & 1 & 5 & 8 & 10 \\
            \hline
            \end{array}
            $$

    - After the execution of the DP algorithm, the matrix ${v}$ contains the optimal value ${v}[j][\ell]$ for every subproblem $(j,\ell)$.

- <u>Step 2</u>: computation of an optimal solution

    - To compute an optimal solution, it is necessary to store some additional information.

    - For each value $j$ of the largest available piece length and each rod length $\ell$, in addition to the optimal value ${v}[j][\ell]$, we store ${s}[j][\ell]$, which is equal to $1$ if one piece of length $j$ is used and to $0$ otherwise.

    - Starting from $j=n$ and $\ell=n$, if ${s}[j][\ell]=0$, then piece length $j$ is not used and $j$ is decreased by $1$. If ${s}[j][\ell]=1$, then one piece of length $j$ is used and the residual rod length becomes $\ell-j$. The procedure stops when the residual length reaches $0$.

        This is the pseudo-code of the <strong>DP algorithm using the bottom-up approach</strong> with the storing of the information necessary to compute an optimal solution:

        !!! algoritmo "Algorithm: DP2\_InfoSol"

            <div class="pseudocodice" markdown="0"><div class="pc" style="--liv:0"><strong>Input:</strong> An RCP instance given by the length <span class="arithmatex">\(n\)</span> of the rod and an array <span class="arithmatex">\(p[1..n]\)</span> of piece profits</div><div class="pc" style="--liv:0"><strong>Output:</strong> The optimal value of the RCP instance and the matrix of binary information <span class="arithmatex">\({s}[0..n][0..n]\)</span></div><div class="pc" style="--liv:0"><span class="pc-n">1</span><strong>Function</strong> DP2_InfoSol(<span class="arithmatex">\(n,p\)</span>)</div><div class="pc" style="--liv:1"><span class="pc-n">2</span><span class="arithmatex">\({v} := \textnormal{new array}[0..n][0..n]\)</span></div><div class="pc" style="--liv:1"><span class="pc-n">3</span><span class="arithmatex">\({s} := \textnormal{new array}[0..n][0..n]\)</span></div><div class="pc" style="--liv:1"><span class="pc-n">4</span><span class="arithmatex">\({v}[0][0] \leftarrow 0\)</span></div><div class="pc" style="--liv:1"><span class="pc-n">5</span><span class="arithmatex">\({s}[0][0] \leftarrow 0\)</span></div><div class="pc" style="--liv:1"><span class="pc-n">6</span><strong>for</strong> <span class="arithmatex">\(\ell := 1\)</span> <strong>to</strong> <span class="arithmatex">\(n\)</span> <strong>do</strong></div><div class="pc" style="--liv:2"><span class="pc-n">7</span><span class="arithmatex">\({v}[0][\ell] \leftarrow -\infty\)</span></div><div class="pc" style="--liv:2"><span class="pc-n">8</span><span class="arithmatex">\({s}[0][\ell] \leftarrow 0\)</span></div><div class="pc" style="--liv:1"><span class="pc-n">9</span><strong>end</strong></div><div class="pc" style="--liv:1"><span class="pc-n">10</span><strong>for</strong> <span class="arithmatex">\(j := 1\)</span> <strong>to</strong> <span class="arithmatex">\(n\)</span> <strong>do</strong></div><div class="pc" style="--liv:2"><span class="pc-n">11</span><strong>for</strong> <span class="arithmatex">\(\ell := 0\)</span> <strong>to</strong> <span class="arithmatex">\(n\)</span> <strong>do</strong></div><div class="pc" style="--liv:3"><span class="pc-n">12</span><strong>if</strong> <span class="arithmatex">\(j > \ell\)</span> <strong>then</strong></div><div class="pc" style="--liv:4"><span class="pc-n">13</span><span class="arithmatex">\({v}[j][\ell] \leftarrow {v}[j-1][\ell]\)</span></div><div class="pc" style="--liv:4"><span class="pc-n">14</span><span class="arithmatex">\({s}[j][\ell] \leftarrow 0\)</span></div><div class="pc" style="--liv:3"><span class="pc-n">15</span><strong>else</strong></div><div class="pc" style="--liv:4"><span class="pc-n">16</span><strong>if</strong> <span class="arithmatex">\(p[j] + {v}[j][\ell-j] > {v}[j-1][\ell]\)</span> <strong>then</strong></div><div class="pc" style="--liv:5"><span class="pc-n">17</span><span class="arithmatex">\({v}[j][\ell] \leftarrow p[j] + {v}[j][\ell-j]\)</span></div><div class="pc" style="--liv:5"><span class="pc-n">18</span><span class="arithmatex">\({s}[j][\ell] \leftarrow 1\)</span></div><div class="pc" style="--liv:4"><span class="pc-n">19</span><strong>else</strong></div><div class="pc" style="--liv:5"><span class="pc-n">20</span><span class="arithmatex">\({v}[j][\ell] \leftarrow {v}[j-1][\ell]\)</span></div><div class="pc" style="--liv:5"><span class="pc-n">21</span><span class="arithmatex">\({s}[j][\ell] \leftarrow 0\)</span></div><div class="pc" style="--liv:4"><span class="pc-n">22</span><strong>end</strong></div><div class="pc" style="--liv:3"><span class="pc-n">23</span><strong>end</strong></div><div class="pc" style="--liv:2"><span class="pc-n">24</span><strong>end</strong></div><div class="pc" style="--liv:1"><span class="pc-n">25</span><strong>end</strong></div><div class="pc" style="--liv:1"><span class="pc-n">26</span><strong>return</strong> <span class="arithmatex">\({v}[n][n], {s}\)</span></div></div>

        - The DP algorithm uses the additional matrix ${s}$, which keeps track of the decision made when ${v}[j][\ell]$ is computed. If one piece of length $j$ is selected, ${s}[j][\ell]\leftarrow 1$ stores this decision; otherwise, ${s}[j][\ell]\leftarrow 0$ stores that piece length $j$ is not used.

        <a id="box-34-texrcpaltbuinfo"></a>

        !!! esempio "Example 25.12: Computation of the additional information"

            We consider the RCP instance of  <span style="color:#1971c2">Example 1</span> with a rod of length $n = 4$ and the profits associated with the possible piece lengths are:

            $$
            \begin{array}{l|rrrrrrr}
            \hline  & {\ell = 1} & {\ell = 2} & {\ell = 3} & {\ell = 4} \\
            \hline {p_\ell} & {1} & {5} & {8} & {9} \\
            \hline
            \end{array}
            $$

            For each step of the DP algorithm, the table shows the values of $j$ and $\ell$, the cell ${s}[j][\ell]$, and the operation performed.

            <div class="tabella" markdown="0"><table>
            <tr>
            <th><span class="arithmatex">\(j\)</span></th>
            <th><span class="arithmatex">\(\ell\)</span></th>
            <th><span class="arithmatex">\({s}[j][\ell]\)</span></th>
            <th>Action</th>
            </tr>
            <tr>
            <td><span class="arithmatex">\(0\)</span></td>
            <td><span class="arithmatex">\(0\)</span></td>
            <td>0</td>
            <td><span class="arithmatex">\({s}[0][0]\leftarrow 0\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(0\)</span></td>
            <td><span class="arithmatex">\(1\)</span></td>
            <td>0</td>
            <td><span class="arithmatex">\({s}[0][1]\leftarrow 0\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(0\)</span></td>
            <td><span class="arithmatex">\(2\)</span></td>
            <td>0</td>
            <td><span class="arithmatex">\({s}[0][2]\leftarrow 0\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(0\)</span></td>
            <td><span class="arithmatex">\(3\)</span></td>
            <td>0</td>
            <td><span class="arithmatex">\({s}[0][3]\leftarrow 0\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(0\)</span></td>
            <td><span class="arithmatex">\(4\)</span></td>
            <td>0</td>
            <td><span class="arithmatex">\({s}[0][4]\leftarrow 0\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(1\)</span></td>
            <td><span class="arithmatex">\(0\)</span></td>
            <td>0</td>
            <td><span class="arithmatex">\(1>0\)</span>: <span class="arithmatex">\({s}[1][0]\leftarrow 0\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(1\)</span></td>
            <td><span class="arithmatex">\(1\)</span></td>
            <td>1</td>
            <td><span class="arithmatex">\(p[1]+{v}[1][0]=1+0>{v}[0][1]=-\infty\)</span>: <span class="arithmatex">\({s}[1][1]\leftarrow 1\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(1\)</span></td>
            <td><span class="arithmatex">\(2\)</span></td>
            <td>1</td>
            <td><span class="arithmatex">\(p[1]+{v}[1][1]=1+1>{v}[0][2]=-\infty\)</span>: <span class="arithmatex">\({s}[1][2]\leftarrow 1\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(1\)</span></td>
            <td><span class="arithmatex">\(3\)</span></td>
            <td>1</td>
            <td><span class="arithmatex">\(p[1]+{v}[1][2]=1+2>{v}[0][3]=-\infty\)</span>: <span class="arithmatex">\({s}[1][3]\leftarrow 1\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(1\)</span></td>
            <td><span class="arithmatex">\(4\)</span></td>
            <td>1</td>
            <td><span class="arithmatex">\(p[1]+{v}[1][3]=1+3>{v}[0][4]=-\infty\)</span>: <span class="arithmatex">\({s}[1][4]\leftarrow 1\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\(0\)</span></td>
            <td>0</td>
            <td><span class="arithmatex">\(2>0\)</span>: <span class="arithmatex">\({s}[2][0]\leftarrow 0\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\(1\)</span></td>
            <td>0</td>
            <td><span class="arithmatex">\(2>1\)</span>: <span class="arithmatex">\({s}[2][1]\leftarrow 0\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\(2\)</span></td>
            <td>1</td>
            <td><span class="arithmatex">\(p[2]+{v}[2][0]=5+0>{v}[1][2]=2\)</span>: <span class="arithmatex">\({s}[2][2]\leftarrow 1\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\(3\)</span></td>
            <td>1</td>
            <td><span class="arithmatex">\(p[2]+{v}[2][1]=5+1>{v}[1][3]=3\)</span>: <span class="arithmatex">\({s}[2][3]\leftarrow 1\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\(4\)</span></td>
            <td>1</td>
            <td><span class="arithmatex">\(p[2]+{v}[2][2]=5+5>{v}[1][4]=4\)</span>: <span class="arithmatex">\({s}[2][4]\leftarrow 1\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(3\)</span></td>
            <td><span class="arithmatex">\(0\)</span></td>
            <td>0</td>
            <td><span class="arithmatex">\(3>0\)</span>: <span class="arithmatex">\({s}[3][0]\leftarrow 0\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(3\)</span></td>
            <td><span class="arithmatex">\(1\)</span></td>
            <td>0</td>
            <td><span class="arithmatex">\(3>1\)</span>: <span class="arithmatex">\({s}[3][1]\leftarrow 0\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(3\)</span></td>
            <td><span class="arithmatex">\(2\)</span></td>
            <td>0</td>
            <td><span class="arithmatex">\(3>2\)</span>: <span class="arithmatex">\({s}[3][2]\leftarrow 0\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(3\)</span></td>
            <td><span class="arithmatex">\(3\)</span></td>
            <td>1</td>
            <td><span class="arithmatex">\(p[3]+{v}[3][0]=8+0>{v}[2][3]=6\)</span>: <span class="arithmatex">\({s}[3][3]\leftarrow 1\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(3\)</span></td>
            <td><span class="arithmatex">\(4\)</span></td>
            <td>0</td>
            <td><span class="arithmatex">\(p[3]+{v}[3][1]=8+1\le {v}[2][4]=10\)</span>: <span class="arithmatex">\({s}[3][4]\leftarrow 0\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(4\)</span></td>
            <td><span class="arithmatex">\(0\)</span></td>
            <td>0</td>
            <td><span class="arithmatex">\(4>0\)</span>: <span class="arithmatex">\({s}[4][0]\leftarrow 0\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(4\)</span></td>
            <td><span class="arithmatex">\(1\)</span></td>
            <td>0</td>
            <td><span class="arithmatex">\(4>1\)</span>: <span class="arithmatex">\({s}[4][1]\leftarrow 0\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(4\)</span></td>
            <td><span class="arithmatex">\(2\)</span></td>
            <td>0</td>
            <td><span class="arithmatex">\(4>2\)</span>: <span class="arithmatex">\({s}[4][2]\leftarrow 0\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(4\)</span></td>
            <td><span class="arithmatex">\(3\)</span></td>
            <td>0</td>
            <td><span class="arithmatex">\(4>3\)</span>: <span class="arithmatex">\({s}[4][3]\leftarrow 0\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(4\)</span></td>
            <td><span class="arithmatex">\(4\)</span></td>
            <td>0</td>
            <td><span class="arithmatex">\(p[4]+{v}[4][0]=9+0\le {v}[3][4]=10\)</span>: <span class="arithmatex">\({s}[4][4]\leftarrow 0\)</span></td>
            </tr>
            </table></div>

            This is the matrix ${s}$ after the execution of the DP algorithm:

            $$
            \begin{array}{l|rrrrr}
            \hline {{s}[j][\ell]} & {\ell=0} & {\ell=1} & {\ell=2} & {\ell=3} & {\ell=4} \\
            \hline {j=0} & 0 & 0 & 0 & 0 & 0 \\
            {j=1} & 0 & 1 & 1 & 1 & 1 \\
            {j=2} & 0 & 0 & 1 & 1 & 1 \\
            {j=3} & 0 & 0 & 0 & 1 & 0 \\
            {j=4} & 0 & 0 & 0 & 0 & 0 \\
            \hline
            \end{array}
            $$

    - Once the matrix ${s}$ has been computed, an optimal solution for a rod of length $n$ can be computed by repeatedly applying the following rule, starting from $(j,\ell)=(n,n)$ and $x_h=0$ for all $h \in \{1,2,\dots,n\}$:

        $$
        \begin{array}{ll}
        j \leftarrow j-1 & \textrm{if ${s}[j][\ell]=0$,}\\[1ex]
        x_j \leftarrow x_j+1,\quad \ell \leftarrow \ell-j & \textrm{if ${s}[j][\ell]=1$.}
        \end{array}
        $$

        The procedure stops when $\ell=0$. This yields the vector $(x_1,x_2,\dots,x_n)$, where each entry $x_h$ is the number of pieces of length $h$ in an optimal solution.

    - The following pseudo-code implements the computation of an optimal solution, given the matrix ${s}$.

        !!! algoritmo "Algorithm: DP2\_SolComputation"

            <div class="pseudocodice" markdown="0"><div class="pc" style="--liv:0"><strong>Input:</strong> The rod length <span class="arithmatex">\(n\)</span> and the matrix <span class="arithmatex">\({s}[0..n][0..n]\)</span></div><div class="pc" style="--liv:0"><strong>Output:</strong> An optimal solution of the RCP instance</div><div class="pc" style="--liv:0"><span class="pc-n">1</span><strong>Function</strong> DP2_SolComputation(<span class="arithmatex">\(n,{s}\)</span>)</div><div class="pc" style="--liv:1"><span class="pc-n">2</span><span class="arithmatex">\(x := \textnormal{new array}[1..n]\)</span></div><div class="pc" style="--liv:1"><span class="pc-n">3</span><strong>for</strong> <span class="arithmatex">\(h := 1\)</span> <strong>to</strong> <span class="arithmatex">\(n\)</span> <strong>do</strong></div><div class="pc" style="--liv:2"><span class="pc-n">4</span><span class="arithmatex">\(x[h] \leftarrow 0\)</span></div><div class="pc" style="--liv:1"><span class="pc-n">5</span><strong>end</strong></div><div class="pc" style="--liv:1"><span class="pc-n">6</span><span class="arithmatex">\(j := n\)</span></div><div class="pc" style="--liv:1"><span class="pc-n">7</span><span class="arithmatex">\(\ell := n\)</span></div><div class="pc" style="--liv:1"><span class="pc-n">8</span><strong>while</strong> <span class="arithmatex">\(\ell > 0\)</span> <strong>do</strong></div><div class="pc" style="--liv:2"><span class="pc-n">9</span><strong>if</strong> <span class="arithmatex">\({s}[j][\ell] = 0\)</span> <strong>then</strong></div><div class="pc" style="--liv:3"><span class="pc-n">10</span><span class="arithmatex">\(j \leftarrow j-1\)</span></div><div class="pc" style="--liv:2"><span class="pc-n">11</span><strong>else</strong></div><div class="pc" style="--liv:3"><span class="pc-n">12</span><span class="arithmatex">\(x[j] \leftarrow x[j]+1\)</span></div><div class="pc" style="--liv:3"><span class="pc-n">13</span><span class="arithmatex">\(\ell \leftarrow \ell-j\)</span></div><div class="pc" style="--liv:2"><span class="pc-n">14</span><strong>end</strong></div><div class="pc" style="--liv:1"><span class="pc-n">15</span><strong>end</strong></div><div class="pc" style="--liv:1"><span class="pc-n">16</span><strong>return</strong> <span class="arithmatex">\(x\)</span></div></div>

        <a id="box-35-texrcpaltsolvector"></a>

        !!! esempio "Example 25.13: Computing an optimal solution"

            After the execution of the DP algorithm on the instance of <span style="color:#1971c2">Example 1</span>, we have the following matrix ${s}$:

            $$
            \begin{array}{l|rrrrr}
            \hline {{s}[j][\ell]} & {\ell=0} & {\ell=1} & {\ell=2} & {\ell=3} & {\ell=4} \\
            \hline {j=0} & 0 & 0 & 0 & 0 & 0 \\
            {j=1} & 0 & 1 & 1 & 1 & 1 \\
            {j=2} & 0 & 0 & 1 & 1 & 1 \\
            {j=3} & 0 & 0 & 0 & 1 & 0 \\
            {j=4} & 0 & 0 & 0 & 0 & 0 \\
            \hline
            \end{array}
            $$

            We can compute an optimal solution for a rod of length $n=4$ as follows:

            <div class="tabella" markdown="0"><table>
            <tr>
            <th>Iteration</th>
            <th><span class="arithmatex">\(j\)</span></th>
            <th><span class="arithmatex">\(\ell\)</span></th>
            <th><span class="arithmatex">\({s}[j][\ell]\)</span></th>
            <th><span class="arithmatex">\(x[1]\)</span></th>
            <th><span class="arithmatex">\(x[2]\)</span></th>
            <th><span class="arithmatex">\(x[3]\)</span></th>
            <th><span class="arithmatex">\(x[4]\)</span></th>
            <th>Action</th>
            </tr>
            <tr>
            <td><span class="arithmatex">\(1\)</span></td>
            <td><span class="arithmatex">\(4\)</span></td>
            <td><span class="arithmatex">\(4\)</span></td>
            <td><span class="arithmatex">\(0\)</span></td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td><span class="arithmatex">\(j\leftarrow 3\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\(3\)</span></td>
            <td><span class="arithmatex">\(4\)</span></td>
            <td><span class="arithmatex">\(0\)</span></td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td><span class="arithmatex">\(j\leftarrow 2\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(3\)</span></td>
            <td><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\(4\)</span></td>
            <td><span class="arithmatex">\(1\)</span></td>
            <td>0</td>
            <td class="cella-blu">1</td>
            <td>0</td>
            <td>0</td>
            <td><span class="arithmatex">\(x[2]\leftarrow 1\)</span>, <span class="arithmatex">\(\ell\leftarrow 4-2=2\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(4\)</span></td>
            <td><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\(1\)</span></td>
            <td>0</td>
            <td class="cella-blu">2</td>
            <td>0</td>
            <td>0</td>
            <td><span class="arithmatex">\(x[2]\leftarrow 2\)</span>, <span class="arithmatex">\(\ell\leftarrow 2-2=0\)</span></td>
            </tr>
            </table></div>

            An optimal solution is the vector:

            $$
            (0,2,0,0)
            $$

    - The same computation procedure, based on the matrix ${s}$, can be applied to any rod length $\ell \le n$ by starting from $j=n$.

        <a id="box-36-texrcpaltsolvector32"></a>

        !!! esempio "Example 25.14: Computing optimal solutions"

            After the execution of the DP algorithm on the instance of <span style="color:#1971c2">Example 1</span>, we have the following matrix ${s}$:

            $$
            \begin{array}{l|rrrrr}
            \hline {{s}[j][\ell]} & {\ell=0} & {\ell=1} & {\ell=2} & {\ell=3} & {\ell=4} \\
            \hline {j=0} & 0 & 0 & 0 & 0 & 0 \\
            {j=1} & 0 & 1 & 1 & 1 & 1 \\
            {j=2} & 0 & 0 & 1 & 1 & 1 \\
            {j=3} & 0 & 0 & 0 & 1 & 0 \\
            {j=4} & 0 & 0 & 0 & 0 & 0 \\
            \hline
            \end{array}
            $$

            We can compute an optimal solution for a rod of length $\ell=3$ as follows:

            <div class="tabella" markdown="0"><table>
            <tr>
            <th>Iteration</th>
            <th><span class="arithmatex">\(j\)</span></th>
            <th><span class="arithmatex">\(\ell\)</span></th>
            <th><span class="arithmatex">\({s}[j][\ell]\)</span></th>
            <th><span class="arithmatex">\(x[1]\)</span></th>
            <th><span class="arithmatex">\(x[2]\)</span></th>
            <th><span class="arithmatex">\(x[3]\)</span></th>
            <th><span class="arithmatex">\(x[4]\)</span></th>
            <th>Action</th>
            </tr>
            <tr>
            <td><span class="arithmatex">\(1\)</span></td>
            <td><span class="arithmatex">\(4\)</span></td>
            <td><span class="arithmatex">\(3\)</span></td>
            <td><span class="arithmatex">\(0\)</span></td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td><span class="arithmatex">\(j\leftarrow 3\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\(3\)</span></td>
            <td><span class="arithmatex">\(3\)</span></td>
            <td><span class="arithmatex">\(1\)</span></td>
            <td>0</td>
            <td>0</td>
            <td class="cella-blu">1</td>
            <td>0</td>
            <td><span class="arithmatex">\(x[3]\leftarrow 1\)</span>, <span class="arithmatex">\(\ell\leftarrow 3-3=0\)</span></td>
            </tr>
            </table></div>

            An optimal solution is the vector:

            $$
            (0,0,1,0)
            $$

            We can compute an optimal solution for a rod of length $\ell=2$ as follows:

            <div class="tabella" markdown="0"><table>
            <tr>
            <th>Iteration</th>
            <th><span class="arithmatex">\(j\)</span></th>
            <th><span class="arithmatex">\(\ell\)</span></th>
            <th><span class="arithmatex">\({s}[j][\ell]\)</span></th>
            <th><span class="arithmatex">\(x[1]\)</span></th>
            <th><span class="arithmatex">\(x[2]\)</span></th>
            <th><span class="arithmatex">\(x[3]\)</span></th>
            <th><span class="arithmatex">\(x[4]\)</span></th>
            <th>Action</th>
            </tr>
            <tr>
            <td><span class="arithmatex">\(1\)</span></td>
            <td><span class="arithmatex">\(4\)</span></td>
            <td><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\(0\)</span></td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td><span class="arithmatex">\(j\leftarrow 3\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\(3\)</span></td>
            <td><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\(0\)</span></td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td><span class="arithmatex">\(j\leftarrow 2\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(3\)</span></td>
            <td><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\(1\)</span></td>
            <td>0</td>
            <td class="cella-blu">1</td>
            <td>0</td>
            <td>0</td>
            <td><span class="arithmatex">\(x[2]\leftarrow 1\)</span>, <span class="arithmatex">\(\ell\leftarrow 2-2=0\)</span></td>
            </tr>
            </table></div>

            An optimal solution is the vector:

            $$
            (0,1,0,0)
            $$

## 25.3.1 Number of steps

- Let $S(n)$ denote the number of steps executed by <code>DP2</code> in the worst case, where $n$ is the rod length. We compute $S(n)$ by counting how many times the lines of the pseudo-code of <code>DP2</code> are executed.

- The number of times each line of code is executed is:

    - <span style="color:#e03131">Line</span> [2](#box-21-bu2-a) is executed $1$ time.

    - <span style="color:#e03131">Line</span> [3](#box-22-bu2-b) is executed $1$ time.

    - <span style="color:#e03131">Line</span> [4](#box-23-bu2-c) is executed $n$ times.

    - <span style="color:#e03131">Line</span> [5](#box-24-bu2-d) is executed $n$ times.

    - <span style="color:#e03131">Line</span> [7](#box-25-bu2-e) is executed $n$ times.

    - <span style="color:#e03131">Line</span> [8](#box-26-bu2-f) is executed $n(n+1)$ times.

    - <span style="color:#e03131">Line</span> [9](#box-27-bu2-g) is executed $n(n+1)$ times.

    - <span style="color:#e03131">Line</span> [12](#box-29-bu2-i) is checked only when $j\le \ell$, that is

        $$
        \sum_{j=1}^{n}(n-j+1)=\sum_{j=1}^{n}j=\frac{n(n+1)}{2}
        $$

        times.

    - One among <span style="color:#e03131">Line</span> [10](#box-28-bu2-h), <span style="color:#e03131">Line</span> [13](#box-30-bu2-j), and <span style="color:#e03131">Line</span> [15](#box-31-bu2-k) is executed for each pair $(j,\ell)$, and therefore these assignment lines are executed $n(n+1)$ times in total.

    - <span style="color:#e03131">Line</span> [20](#box-32-bu2-l) is executed $1$ time.

    Therefore, the total number of steps in the worst case is

    $$
    1+1+n+n+n+n(n+1)+n(n+1)+\frac{n(n+1)}{2}+n(n+1)+1.
    $$

    Thus,

    $$
    S(n)=3+3n+3n(n+1)+\frac{n(n+1)}{2}
    =
    \frac{7n^2+13n+6}{2}.
    $$

    Hence,

    $$
    S(n)=\Theta(n^2).
    $$

    Indeed,

    $$
    \lim_{n\to\infty}
    \frac{\frac{7n^2+13n+6}{2}}{n^2}
    =
    \lim_{n\to\infty}
    \frac{1}{2}\left(7+\frac{13}{n}+\frac{6}{n^2}\right)
    =
    \frac{7}{2}\in\mathbb{R}_{>0}.
    $$

    !!! chiave ""

        The DP algorithm executes

        $$
        S(n)=\Theta(n^2)
        $$

        steps in the worst case.

---

**Next:** [Typical mistakes · In summary](typical-mistakes.md)
