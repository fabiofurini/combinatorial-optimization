---
title: "DP for the subset sum problem"
---

# DP for the subset sum problem

<div class="info-capitolo" markdown>

**Part 3 · Dynamic programming · Chapter 20** · [:material-file-pdf-box: Lecture notes, volume 3 (PDF)](../pdf/lecture-notes-3-dynamic-programming.pdf) · [:material-pencil: Exercises: Subset sum (SSP)](../exercises/dp-subset-sum.md)

</div>

!!! nota "Prerequisites"

    - From this module, the chapter [«DP for the knapsack problem»](https://fabiofurini.github.io/combinatorial-optimization/dynamic-programming/dp-knapsack/): the recurrence $v(j,k)$ over items and capacities, the matrix $s$ of the decisions and the reconstruction of a solution.

    - From this module, the chapter [«Knapsack problems»](https://fabiofurini.github.io/combinatorial-optimization/combinatorial-optimization-problems/knapsack/the-subset-sum-problem/): the subset sum problem and its solution as a knapsack problem with $p_j=w_j$.

    - From the module <em>Algorithms</em>: [pseudocode conventions (Chapter 2)](https://fabiofurini.github.io/algorithms/basic-algorithms/02-pseudo-code/) and [the size of the input (Chapter 11)](https://fabiofurini.github.io/algorithms/analysis/11-input-size/).

!!! chiave "Objectives"

    At the end of this chapter you will be able to:

    - write the recurrence $r(j,k)\in\{\textit{true},\textit{false}\}$ of the reachable sums, with its base cases;

    - run the DP algorithm by hand and read the answer of the SSP instance in $r(n,c)$;

    - fill the matrix $s$ and reconstruct a subset of total weight $c$ when the answer is yes;

    - relate $r(j,k)$ to the DP algorithm of the KP with $p_j=w_j$, and count the $\Theta(nc)$ steps.

The problem of this chapter is the [subset sum problem (SSP)](https://fabiofurini.github.io/combinatorial-optimization/catalogue/subset-sum-problem/): its definition and its assumptions are on its page.

## 20.1 A DP algorithm

<a id="box-1-texsspex1"></a>

!!! esempio "Example 20.1: SSP instance"

    We consider a target value $c=10$ and a set $\mathscr{I}=\{1,2,3,4\}$ of $4$ items ($n=4$), with the following weights:

    $$
    \begin{array}{l|rrrr}
    \hline  & {j=1} & {j=2} & {j=3} & {j=4} \\
    \hline {w_j} & 3 & 5 & 4 & 7 \\
    \hline
    \end{array}
    $$

    We refer to this SSP instance as <span style="color:#1971c2">Example 1</span>.

- A subset $S\subseteq\mathscr{I}$ is described by the binary vector $(x_1,x_2,\dots,x_n)$, where $x_j=1$ if item $j$ belongs to $S$ and $x_j=0$ otherwise.

- The answer to the SSP instance is <strong>yes</strong> if some vector satisfies $\sum_{j=1}^{n} w_j x_j = c$, and <strong>no</strong> otherwise.

- <u>Step 1</u>: computation of the answer

    !!! chiave ""

        For any $j \in \{0,1,\dots,n\}$ and $k \in \{0,1,\dots,c\}$, let $r(j,k)\in\{\textit{true},\textit{false}\}$ be the answer of the SSP subinstance given by:

        1. a target value $k$,

        2. a set $\{1,2,\dots,j\}$ of available items,

        3. for each item $h \in \{1,2,\dots,j\}$, a weight $w_h$.

        The recursive formula to compute $r(j,k)$ reads as follows:

        \begin{equation*}
        \label{eq:ssp}
        r(j,k)= \left\{ \begin{array}{ll}
        \textit{true}  & \textrm{if $k=0$,}\\[2ex]
        \textit{false} & \textrm{if $j=0$ and $k\ge 1$,}\\[2ex]
        r(j-1,k) & \textrm{if $j,k\ge 1$ and $w_j>k$,}\\[2ex]
        r(j-1,k) \,\lor\, r(j-1,k-w_j) & \textrm{if $j,k\ge 1$ and $w_j\le k$.}
        \end{array} \right. \tag{20.1}
        \end{equation*}

    - The symbol $\lor$ is the logical <strong>or</strong>: $r(j,k)$ is <em>true</em> if at least one of the two values is <em>true</em>.

    - The base cases are $r(j,0)=\textit{true}$, since the empty subset has total weight $0$, and $r(0,k)=\textit{false}$ for $k\ge 1$, since no item is available.

    - A subset of $\{1,2,\dots,j\}$ with total weight $k$ either does not contain item $j$, and then it is a subset of $\{1,2,\dots,j-1\}$ with total weight $k$, or it contains item $j$, and then the other items form a subset of $\{1,2,\dots,j-1\}$ with total weight $k-w_j$.

    - Hence, the formula $\eqref{eq:ssp}$ generates at most $2$ <strong>independent subproblems</strong>, and a subset for $(j,k)$ is built from a subset of one of them by adding item $j$ or not.

        $\rightsquigarrow$ <strong>Optimal Substructure verified!</strong>

    - Different decisions on the items can lead to the same pair $(j,k)$, and therefore the same value $r(j,k)$ may be needed several times during the recursive evaluation of formula $\eqref{eq:ssp}$.

        $\rightsquigarrow$ <strong>Overlapping Subproblems verified!</strong>

    - The value $r(j,k)$ depends only on values $r(j-1,k')$ with $k'\le k$. Therefore, the <strong>bottom-up approach</strong> computes the rows $j=0,1,\dots,n$ in this order, each one for increasing $k$, and stores every value in a <strong>lookup table</strong>.

    - The SSP can also be solved by the DP algorithm of the KP with $p_j=w_j$ for every item $j$. Its value $v(j,k)$ is the largest total weight, not larger than $k$, of a subset of $\{1,2,\dots,j\}$, and

        $$
        r(j,k)=\textit{true} \iff v(j,k)=k.
        $$

    - The recurrence $\eqref{eq:ssp}$ stores only one bit per cell, and its logical operations replace the sums and the comparisons of the KP recurrence.

- <u>Step 2</u>: computation of a subset

    - When the answer is yes, a subset of total weight $c$ is reconstructed from the matrix $s$: $s[j][k]=1$ if item $j$ is used to reach the value <em>true</em> of $r[j][k]$, and $s[j][k]=0$ otherwise.

    - The DP algorithm prefers not to use item $j$: $s[j][k]=1$ only if $r[j-1][k]$ is <em>false</em> and $r[j-1][k-w_j]$ is <em>true</em>.

    This is the pseudo-code of the <strong>DP algorithm using the bottom-up approach</strong>, which stores the matrix $s$ together with the matrix $r$:

    !!! algoritmo "Algorithm: SSP\_DP"

        <div class="pseudocodice" markdown="0"><div class="pc" style="--liv:0"><strong>Input:</strong> An SSP instance given by <span class="arithmatex">\(n\)</span>, the array <span class="arithmatex">\(w[1..n]\)</span>, and the target value <span class="arithmatex">\(c\)</span></div><div class="pc" style="--liv:0"><strong>Output:</strong> The answer <span class="arithmatex">\(r[n][c]\)</span> of the SSP instance and the matrix <span class="arithmatex">\(s[0..n][0..c]\)</span></div><div class="pc" style="--liv:0"><span class="pc-n">1</span><strong>Function</strong> SSP_DP(<span class="arithmatex">\(n,w,c\)</span>)</div><div class="pc" style="--liv:1" id="box-2-sspbu-a"><span class="pc-n">2</span><span class="arithmatex">\(r := \textnormal{new array}[0..n][0..c]\)</span>; <span class="arithmatex">\(s := \textnormal{new array}[0..n][0..c]\)</span></div><div class="pc" style="--liv:1" id="box-3-sspbu-b"><span class="pc-n">3</span><span class="arithmatex">\(r[0][0] \leftarrow \textit{true}\)</span>; <span class="arithmatex">\(s[0][0] \leftarrow 0\)</span></div><div class="pc" style="--liv:1" id="box-4-sspbu-c"><span class="pc-n">4</span><strong>for</strong> <span class="arithmatex">\(k := 1\)</span> <strong>to</strong> <span class="arithmatex">\(c\)</span>  <strong>do</strong></div><div class="pc" style="--liv:2" id="box-5-sspbu-d"><span class="pc-n">5</span><span class="arithmatex">\(r[0][k] \leftarrow \textit{false}\)</span>; <span class="arithmatex">\(s[0][k] \leftarrow 0\)</span></div><div class="pc" style="--liv:1"><span class="pc-n">6</span><strong>end</strong></div><div class="pc" style="--liv:1" id="box-6-sspbu-e"><span class="pc-n">7</span><strong>for</strong> <span class="arithmatex">\(j := 1\)</span> <strong>to</strong> <span class="arithmatex">\(n\)</span>  <strong>do</strong></div><div class="pc" style="--liv:2" id="box-7-sspbu-f"><span class="pc-n">8</span><strong>for</strong> <span class="arithmatex">\(k := 0\)</span> <strong>to</strong> <span class="arithmatex">\(c\)</span>  <strong>do</strong></div><div class="pc" style="--liv:3" id="box-8-sspbu-g"><span class="pc-n">9</span><span class="arithmatex">\(r[j][k] \leftarrow r[j-1][k]\)</span>; <span class="arithmatex">\(s[j][k] \leftarrow 0\)</span></div><div class="pc" style="--liv:3" id="box-9-sspbu-h"><span class="pc-n">10</span><strong>if</strong> <span class="arithmatex">\(r[j][k]=\textit{false}\)</span> and <span class="arithmatex">\(w[j]\le k\)</span> and <span class="arithmatex">\(r[j-1][k-w[j]]=\textit{true}\)</span>  <strong>then</strong></div><div class="pc" style="--liv:4" id="box-10-sspbu-i"><span class="pc-n">11</span><span class="arithmatex">\(r[j][k] \leftarrow \textit{true}\)</span>; <span class="arithmatex">\(s[j][k] \leftarrow 1\)</span></div><div class="pc" style="--liv:3"><span class="pc-n">12</span><strong>end</strong></div><div class="pc" style="--liv:2"><span class="pc-n">13</span><strong>end</strong></div><div class="pc" style="--liv:1"><span class="pc-n">14</span><strong>end</strong></div><div class="pc" style="--liv:1" id="box-11-sspbu-j"><span class="pc-n">15</span><strong>return</strong> <span class="arithmatex">\(r[n][c], s\)</span></div></div>

    - The matrix $r[0..n][0..c]$ is the <strong>lookup table</strong> of the answers, and the matrix $s[0..n][0..c]$ stores the decisions.

    - The first two lines fill the row $j=0$: only the target value $0$ is reachable without items.

    - For each pair $(j,k)$, the DP algorithm first copies the answer without item $j$, and then uses item $j$ only if this answer is <em>false</em> and item $j$ makes the value $k$ reachable.

    - Finally, the answer of the SSP instance is returned as $r[n][c]$, together with the matrix $s$.

    <a id="box-12-texsspbu"></a>

    !!! esempio "Example 20.2: Execution of the DP algorithm"

        We consider the SSP instance of <span style="color:#1971c2">Example 1</span>, with target value $c=10$ and weights $w=(3,5,4,7)$.

        For each step of the DP algorithm with $j\ge 1$, the table shows the values of $j$ and $k$, the cells $r[j][k]$ and $s[j][k]$, and the operation performed; $\mathrm{T}$ stands for <em>true</em> and $\mathrm{F}$ for <em>false</em>. The row $j=0$ is $r[0][0]=\mathrm{T}$ and $r[0][k]=\mathrm{F}$ for $k\ge 1$, with $s[0][k]=0$.

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
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(10\)</span></td>
        <td><span class="arithmatex">\(\mathrm{F}\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(r[0][10]\lor r[0][7]=\mathrm{F}\lor \mathrm{F}=\mathrm{F}\)</span></td>
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
        <td><span class="arithmatex">\(\mathrm{F}\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(w_2=5>2\)</span>: <span class="arithmatex">\(r[1][2]=\mathrm{F}\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(\mathrm{T}\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(w_2=5>3\)</span>: <span class="arithmatex">\(r[1][3]=\mathrm{T}\)</span></td>
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
        <td><span class="arithmatex">\(\mathrm{F}\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(r[1][7]\lor r[1][2]=\mathrm{F}\lor \mathrm{F}=\mathrm{F}\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(8\)</span></td>
        <td><span class="arithmatex">\(\mathrm{T}\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(r[1][8]\lor r[1][3]=\mathrm{F}\lor \mathrm{T}=\mathrm{T}\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(9\)</span></td>
        <td><span class="arithmatex">\(\mathrm{F}\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(r[1][9]\lor r[1][4]=\mathrm{F}\lor \mathrm{F}=\mathrm{F}\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(10\)</span></td>
        <td><span class="arithmatex">\(\mathrm{F}\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(r[1][10]\lor r[1][5]=\mathrm{F}\lor \mathrm{F}=\mathrm{F}\)</span></td>
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
        <td><span class="arithmatex">\(w_3=4>0\)</span>: <span class="arithmatex">\(r[2][0]=\mathrm{T}\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(\mathrm{F}\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(w_3=4>1\)</span>: <span class="arithmatex">\(r[2][1]=\mathrm{F}\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(\mathrm{F}\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(w_3=4>2\)</span>: <span class="arithmatex">\(r[2][2]=\mathrm{F}\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(\mathrm{T}\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(w_3=4>3\)</span>: <span class="arithmatex">\(r[2][3]=\mathrm{T}\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(\mathrm{T}\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(r[2][4]\lor r[2][0]=\mathrm{F}\lor \mathrm{T}=\mathrm{T}\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(\mathrm{T}\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(r[2][5]\lor r[2][1]=\mathrm{T}\lor \mathrm{F}=\mathrm{T}\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(\mathrm{F}\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(r[2][6]\lor r[2][2]=\mathrm{F}\lor \mathrm{F}=\mathrm{F}\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(7\)</span></td>
        <td><span class="arithmatex">\(\mathrm{T}\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(r[2][7]\lor r[2][3]=\mathrm{F}\lor \mathrm{T}=\mathrm{T}\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(8\)</span></td>
        <td><span class="arithmatex">\(\mathrm{T}\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(r[2][8]\lor r[2][4]=\mathrm{T}\lor \mathrm{F}=\mathrm{T}\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(9\)</span></td>
        <td><span class="arithmatex">\(\mathrm{T}\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(r[2][9]\lor r[2][5]=\mathrm{F}\lor \mathrm{T}=\mathrm{T}\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(10\)</span></td>
        <td><span class="arithmatex">\(\mathrm{F}\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(r[2][10]\lor r[2][6]=\mathrm{F}\lor \mathrm{F}=\mathrm{F}\)</span></td>
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
        <td><span class="arithmatex">\(\mathrm{F}\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(w_4=7>2\)</span>: <span class="arithmatex">\(r[3][2]=\mathrm{F}\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(\mathrm{T}\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(w_4=7>3\)</span>: <span class="arithmatex">\(r[3][3]=\mathrm{T}\)</span></td>
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
        <td><span class="arithmatex">\(\mathrm{F}\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(w_4=7>6\)</span>: <span class="arithmatex">\(r[3][6]=\mathrm{F}\)</span></td>
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
        <tr>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(9\)</span></td>
        <td><span class="arithmatex">\(\mathrm{T}\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(r[3][9]\lor r[3][2]=\mathrm{T}\lor \mathrm{F}=\mathrm{T}\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(10\)</span></td>
        <td><span class="arithmatex">\(\mathrm{T}\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(r[3][10]\lor r[3][3]=\mathrm{F}\lor \mathrm{T}=\mathrm{T}\)</span></td>
        </tr>
        </table></div>

        This is the matrix $r$ after the execution of the DP algorithm:

        $$
        \begin{array}{l|rrrrrrrrrrr}
        \hline {r[j][k]} & {k=0} & {k=1} & {k=2} & {k=3} & {k=4} & {k=5} & {k=6} & {k=7} & {k=8} & {k=9} & {k=10} \\
        \hline {j=0} & {\mathrm{T}} & {\mathrm{F}} & {\mathrm{F}} & {\mathrm{F}} & {\mathrm{F}} & {\mathrm{F}} & {\mathrm{F}} & {\mathrm{F}} & {\mathrm{F}} & {\mathrm{F}} & {\mathrm{F}} \\
        {j=1} & {\mathrm{T}} & {\mathrm{F}} & {\mathrm{F}} & {\mathrm{T}} & {\mathrm{F}} & {\mathrm{F}} & {\mathrm{F}} & {\mathrm{F}} & {\mathrm{F}} & {\mathrm{F}} & {\mathrm{F}} \\
        {j=2} & {\mathrm{T}} & {\mathrm{F}} & {\mathrm{F}} & {\mathrm{T}} & {\mathrm{F}} & {\mathrm{T}} & {\mathrm{F}} & {\mathrm{F}} & {\mathrm{T}} & {\mathrm{F}} & {\mathrm{F}} \\
        {j=3} & {\mathrm{T}} & {\mathrm{F}} & {\mathrm{F}} & {\mathrm{T}} & {\mathrm{T}} & {\mathrm{T}} & {\mathrm{F}} & {\mathrm{T}} & {\mathrm{T}} & {\mathrm{T}} & {\mathrm{F}} \\
        {j=4} & {\mathrm{T}} & {\mathrm{F}} & {\mathrm{F}} & {\mathrm{T}} & {\mathrm{T}} & {\mathrm{T}} & {\mathrm{F}} & {\mathrm{T}} & {\mathrm{T}} & {\mathrm{T}} & {\mathrm{T}} \\
        \hline
        \end{array}
        $$

        This is the matrix $s$ after the execution of the DP algorithm:

        $$
        \begin{array}{l|rrrrrrrrrrr}
        \hline {s[j][k]} & {k=0} & {k=1} & {k=2} & {k=3} & {k=4} & {k=5} & {k=6} & {k=7} & {k=8} & {k=9} & {k=10} \\
        \hline {j=0} & {0} & {0} & {0} & {0} & {0} & {0} & {0} & {0} & {0} & {0} & {0} \\
        {j=1} & {0} & {0} & {0} & {1} & {0} & {0} & {0} & {0} & {0} & {0} & {0} \\
        {j=2} & {0} & {0} & {0} & {0} & {0} & {1} & {0} & {0} & {1} & {0} & {0} \\
        {j=3} & {0} & {0} & {0} & {0} & {1} & {0} & {0} & {1} & {0} & {1} & {0} \\
        {j=4} & {0} & {0} & {0} & {0} & {0} & {0} & {0} & {0} & {0} & {0} & {1} \\
        \hline
        \end{array}
        $$

        Since $r[4][10]=\mathrm{T}$, the answer to the SSP instance is <strong>yes</strong>. For example, $s[4][10]=1$ since $r[3][10]=\mathrm{F}$ and $r[3][3]=\mathrm{T}$: item $4$ is needed to reach the target value $10$.

    - Once the matrix $s$ has been computed and $r[n][c]$ is <em>true</em>, a subset of total weight $c$ is reconstructed by scanning the items from $j=n$ down to $j=1$, starting from $k=c$ and $x_j=0$ for every item $j$:

        $$
        x_j \leftarrow s[j][k], \qquad k \leftarrow k - s[j][k]\,w_j.
        $$

    - The reconstruction ends with $k=0$, since every step keeps $r[j-1][k]$ equal to <em>true</em>.

    !!! algoritmo "Algorithm: SSP\_Reconstruct"

        <div class="pseudocodice" markdown="0"><div class="pc" style="--liv:0"><strong>Input:</strong> The number <span class="arithmatex">\(n\)</span> of items, the target value <span class="arithmatex">\(c\)</span>, the array <span class="arithmatex">\(w[1..n]\)</span>, and the matrix <span class="arithmatex">\(s[0..n][0..c]\)</span>, with <span class="arithmatex">\(r[n][c]=\textit{true}\)</span></div><div class="pc" style="--liv:0"><strong>Output:</strong> A subset of total weight <span class="arithmatex">\(c\)</span>, as a binary vector</div><div class="pc" style="--liv:0"><span class="pc-n">1</span><strong>Function</strong> SSP_Reconstruct(<span class="arithmatex">\(n,c,w,s\)</span>)</div><div class="pc" style="--liv:1"><span class="pc-n">2</span><span class="arithmatex">\(x := \textnormal{new array}[1..n]\)</span></div><div class="pc" style="--liv:1"><span class="pc-n">3</span><span class="arithmatex">\(k := c\)</span></div><div class="pc" style="--liv:1"><span class="pc-n">4</span><strong>for</strong> <span class="arithmatex">\(j := n\)</span> <strong>to</strong> <span class="arithmatex">\(1\)</span> <strong>do</strong></div><div class="pc" style="--liv:2"><span class="pc-n">5</span><span class="arithmatex">\(x[j] \leftarrow s[j][k]\)</span></div><div class="pc" style="--liv:2"><span class="pc-n">6</span><span class="arithmatex">\(k \leftarrow k-x[j]\,w[j]\)</span></div><div class="pc" style="--liv:1"><span class="pc-n">7</span><strong>end</strong></div><div class="pc" style="--liv:1"><span class="pc-n">8</span><strong>return</strong> <span class="arithmatex">\(x\)</span></div></div>

    <a id="box-13-texsspsol"></a>

    !!! esempio "Example 20.3: Computing a subset"

        After the execution of the DP algorithm on the instance of <span style="color:#1971c2">Example 1</span>, we start from $j=4$ and $k=10$:

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
        <td><span class="arithmatex">\(k=10\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(10\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td class="cella-blu">1</td>
        <td><span class="arithmatex">\(x[4]\leftarrow 1\)</span>, <span class="arithmatex">\(k\leftarrow 10-7=3\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td>0</td>
        <td>0</td>
        <td class="cella-blu">0</td>
        <td>1</td>
        <td><span class="arithmatex">\(x[3]\leftarrow 0\)</span>, <span class="arithmatex">\(k=3\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td>0</td>
        <td class="cella-blu">0</td>
        <td>0</td>
        <td>1</td>
        <td><span class="arithmatex">\(x[2]\leftarrow 0\)</span>, <span class="arithmatex">\(k=3\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td class="cella-blu">1</td>
        <td>0</td>
        <td>0</td>
        <td>1</td>
        <td><span class="arithmatex">\(x[1]\leftarrow 1\)</span>, <span class="arithmatex">\(k\leftarrow 3-3=0\)</span></td>
        </tr>
        </table></div>

        !!! chiave ""

            The answer to the SSP instance of <span style="color:#1971c2">Example 1</span> is <strong>yes</strong>: the vector $(1,0,0,1)$ selects the subset $\{1,4\}$, whose total weight is $3+7=c$.

### 20.1.1 Number of steps

- Let $S(n,c)$ denote the number of steps executed by <code>SSP\_DP</code> in the worst case. We count how many times each line of the pseudo-code is executed, assuming that the condition at line [10](#box-9-sspbu-h) is always true:

    - <span style="color:#e03131">Lines</span> [2](#box-2-sspbu-a) and [3](#box-3-sspbu-b) are executed $1$ time each.

    - <span style="color:#e03131">Line</span> [4](#box-4-sspbu-c) is executed $c$ times, and <span style="color:#e03131">line</span> [5](#box-5-sspbu-d) $c$ times.

    - <span style="color:#e03131">Line</span> [7](#box-6-sspbu-e) is executed $n$ times.

    - <span style="color:#e03131">Lines</span> [8](#box-7-sspbu-f), [9](#box-8-sspbu-g), [10](#box-9-sspbu-h) and [11](#box-10-sspbu-i) are executed $n(c+1)$ times each.

    - <span style="color:#e03131">Line</span> [15](#box-11-sspbu-j) is executed $1$ time.

- Therefore, the total number of steps in the worst case is

    $$
    S(n,c)=1+1+2c+n+4n(c+1)+1=4n(c+1)+n+2c+3.
    $$

    Hence,

    $$
    S(n,c)=\Theta(nc),
    $$

    since

    $$
    \lim_{n,c\to\infty}\frac{4n(c+1)+n+2c+3}{nc}
    =\lim_{n,c\to\infty}\left(4+\frac{4}{c}+\frac{1}{c}+\frac{2}{n}+\frac{3}{nc}\right)=4\in\mathbb{R}_{>0}.
    $$

    !!! chiave ""

        The DP algorithm for the SSP executes $S(n,c)=\Theta(nc)$ steps in the worst case, the same number as the DP algorithm of the KP.

- The reconstruction executes $\Theta(n)$ steps, one for each item.

- The number of steps contains the target value $c$, a number of the input, and not only the size of the input: it is <strong>pseudo-polynomial</strong>.

## 20.2 Typical mistakes

!!! attenzione "Warning"

    - <strong>Setting $r(j,0)=\textit{false}$.</strong> The target value $0$ is always reachable with the empty subset; with $r(j,0)=\textit{false}$ no value would ever become <em>true</em>.

    - <strong>Setting $r(0,k)=\textit{true}$ for $k\ge 1$.</strong> Without items, only the target value $0$ is reachable.

    - <strong>Reading the answer in the wrong cell.</strong> The answer is $r(n,c)$; a <em>true</em> value in another cell of the last row says that a different target value is reachable.

    - <strong>Reconstructing when the answer is no.</strong> If $r(n,c)$ is <em>false</em>, no subset has total weight $c$, and the matrix $s$ gives nothing to reconstruct.

## 20.3 In summary

!!! chiave "In summary"

    - The recurrence $r(j,k)=r(j-1,k)\lor r(j-1,k-w_j)$ tells whether the target value $k$ is reachable with the items $1,2,\dots,j$.

    - The base cases are $r(j,0)=\textit{true}$ and $r(0,k)=\textit{false}$ for $k\ge 1$; the answer is $r(n,c)$.

    - The matrix $s$ stores whether item $j$ is used, and a subset of total weight $c$ is read backwards from $(n,c)$.

    - The DP algorithm executes $\Theta(nc)$ steps, as the DP algorithm of the KP with $p_j=w_j$.

    <strong>Dashboard of the SSP example.</strong> Example 1 ($c=10$, four items):

    <div class="tabella" markdown="0"><table>
    <tr>
    <th>Method</th>
    <th>Answer</th>
    <th>Origin</th>
    </tr>
    <tr>
    <td>DP algorithm</td>
    <td>yes</td>
    <td><span class="arithmatex">\(r(4,10)=\textit{true}\)</span>, subset <span class="arithmatex">\(\{1,4\}\)</span></td>
    </tr>
    </table></div>

---

**Exercises on this chapter:** [:material-pencil: Subset sum (SSP)](../exercises/dp-subset-sum.md)
