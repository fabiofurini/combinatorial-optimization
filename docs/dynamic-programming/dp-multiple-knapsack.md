---
title: "DP for the multiple knapsack problem"
---

# DP for the multiple knapsack problem

<div class="info-capitolo" markdown>

**Part 3 · Dynamic programming · Chapter 24** · [:material-file-pdf-box: Lecture notes, volume 3 (PDF)](../pdf/lecture-notes-3-dynamic-programming.pdf) · [:material-pencil: Exercises: Multiple knapsack (MKP)](../exercises/dp-multiple-knapsack.md)

</div>

!!! nota "Prerequisites"

    - From this module, the chapter [«DP for the 0/1 knapsack problem»](https://fabiofurini.github.io/combinatorial-optimization/dynamic-programming/dp-knapsack/): the recurrence $v(j,k)$ of the 0/1 knapsack problem (KP) over items and capacities, the matrix $s$ of the decisions and the reconstruction of a solution.

    - From this module, the chapter [«Knapsack problems»](https://fabiofurini.github.io/combinatorial-optimization/combinatorial-optimization-problems/knapsack/the-multiple-knapsack-problem/): the multiple knapsack problem, with $m$ knapsacks of capacities $c_1,\dots,c_m$.

    - From the module <em>Algorithms</em>: [pseudocode conventions (Chapter 2)](https://fabiofurini.github.io/algorithms/basic-algorithms/02-pseudo-code/) and [the size of the input (Chapter 11)](https://fabiofurini.github.io/algorithms/analysis/11-input-size/).

!!! chiave "Objectives"

    At the end of this chapter you will be able to:

    - write the recurrence $v(j,k_1,\dots,k_m)$ over the items and the residual capacities of the $m$ knapsacks;

    - run the DP algorithm by hand on an instance with $m=2$ knapsacks, one matrix for each item;

    - reconstruct an optimal solution, with the knapsack of every selected item, from the tables $s$;

    - count the $\Theta(m\,n\prod_{i=1}^{m}(c_i+1))$ steps and explain why the number of states grows exponentially with $m$.

The problem of this chapter is the [multiple knapsack problem (MKP)](https://fabiofurini.github.io/combinatorial-optimization/catalogue/multiple-knapsack-problem/): its definition and its assumptions are on its page.

## 24.1 A DP algorithm

- We write $i\in\mathscr{K}=\{1,2,\dots,m\}$ for a generic knapsack, because in the DP chapters the letter $k$ denotes a capacity. Knapsack $i$ has capacity $c_i$.

- A solution assigns each item $j$ to one knapsack or leaves it out: it is described by the vector $(a_1,a_2,\dots,a_n)$, where $a_j=i$ if item $j$ is inserted into knapsack $i$, and $a_j=0$ if item $j$ is not selected.

- The vector $\vet{e}_i$ is the $i$-th unit vector of length $m$: $\vet{k}-w_j\vet{e}_i$ is the vector $\vet{k}$ with the component $k_i$ decreased by $w_j$.

<a id="box-1-texmkpex1"></a>

!!! esempio "Example 24.1: MKP instance"

    We consider $m=2$ knapsacks with capacities $c_1=5$ and $c_2=4$, and a set $\mathscr{I}=\{1,2,3,4\}$ of $4$ items ($n=4$), with the following profits and weights:

    $$
    \begin{array}{l|rrrr}
    \hline  & {j=1} & {j=2} & {j=3} & {j=4} \\
    \hline {p_j} & 3 & 9 & 7 & 5 \\
    {w_j} & 3 & 4 & 4 & 2 \\
    \hline
    \end{array}
    $$

    We refer to this MKP instance as <span style="color:#1971c2">[Example 24.1](#box-1-texmkpex1)</span>.

- <u>Step 1</u>: computation of the optimal value

    !!! formula ""

        For any $j \in \{0,1,\dots,n\}$ and any vector $\vet{k}=(k_1,k_2,\dots,k_m)$ with $k_i \in \{0,1,\dots,c_i\}$ for every $i\in\mathscr{K}$, let $v(j,\vet{k})=v(j,k_1,\dots,k_m)$ be the optimal value of the MKP subinstance given by:

        1. $m$ knapsacks, knapsack $i$ with capacity $k_i$,

        2. a set $\{1,2,\dots,j\}$ of available items,

        3. for each item $h \in \{1,2,\dots,j\}$, a profit $p_h$ and a weight $w_h$.

        The recursive formula to compute $v(j,\vet{k})$ reads as follows:

        \begin{equation*}
        \label{eq:mkp}
        v(j,\vet{k})= \left\{ \begin{array}{ll}
        0 & \textrm{if $j=0$,}\\[2ex]
        v(j-1,\vet{k}) & \begin{array}[t]{@{}l@{}}\textrm{if $j\ge 1$ and}\\ \textrm{$w_j>k_i$ for all $i$,}\end{array}\\[4ex]
        \begin{array}[t]{@{}l@{}}\displaystyle \max \big\{ v(j-1,\vet{k}),\\ \quad p_j+\displaystyle\max_{i:\,w_j\le k_i} v(j-1,\vet{k}-w_j\vet{e}_i) \big\}\end{array} & \begin{array}[t]{@{}l@{}}\textrm{if $j\ge 1$ and}\\ \textrm{$w_j\le k_i$ for some $i$.}\end{array}
        \end{array} \right. \tag{24.1}
        \end{equation*}

    - The components of $\vet{k}$ are the <strong>residual capacities</strong> of the knapsacks: in the top-down view, the decisions on the items $j+1,\dots,n$ have already used $c_i-k_i$ units of knapsack $i$.

    - With $m=1$ the formula $\eqref{eq:mkp}$ is the recurrence of the KP.

    - The base cases are $v(0,\vet{k})=0$ for every vector $\vet{k}$, since no item is available.

    - The formula generates at most $m+1$ <strong>independent subproblems</strong>: item $j$ is left out, or it is inserted into one of the knapsacks $i$ with $w_j\le k_i$, and then only the capacity of knapsack $i$ decreases.

        $\rightsquigarrow$ <strong>Optimal Substructure verified!</strong>

    - Different assignments of the items $j+1,\dots,n$ can leave the same residual capacities, and therefore the same value $v(j,\vet{k})$ may be needed several times.

        $\rightsquigarrow$ <strong>Overlapping Subproblems verified!</strong>

    - The value $v(j,\vet{k})$ depends only on values of row $j-1$. Therefore, the <strong>bottom-up approach</strong> computes the rows $j=0,1,\dots,n$ in this order, and in each row all the vectors $\vet{k}$ in any order. With $m=2$ the row $j$ is a matrix, with one row for each $k_1$ and one column for each $k_2$.

- <u>Step 2</u>: computation of an optimal solution

    - For each item $j$ and vector $\vet{k}$ we store $s[j][\vet{k}]=i$ if item $j$ is inserted into knapsack $i$ in the optimal solution found for $(j,\vet{k})$, and $s[j][\vet{k}]=0$ if item $j$ is left out.

    - The set of all the vectors $\vet{k}$ is $\mathscr{C}=\{0,1,\dots,c_1\}\times\{0,1,\dots,c_2\}\times\dots\times\{0,1,\dots,c_m\}$.

    This is the pseudo-code of the <strong>DP algorithm using the bottom-up approach</strong>, which stores the tables $s$ together with the tables $v$:

    !!! algoritmo "Algorithm: MKP\_DP"

        <div class="pseudocodice" markdown="0"><div class="pc" style="--liv:0"><strong>Input:</strong> An MKP instance given by <span class="arithmatex">\(n\)</span>, <span class="arithmatex">\(m\)</span>, arrays <span class="arithmatex">\(p[1..n]\)</span>, <span class="arithmatex">\(w[1..n]\)</span>, and the capacity vector <span class="arithmatex">\(\vet{c}\)</span></div><div class="pc" style="--liv:0"><strong>Output:</strong> The optimal value of the MKP instance and the tables <span class="arithmatex">\(s[j][\vet{k}]\)</span></div><div class="pc" style="--liv:0"><span class="pc-n">1</span><strong>Function</strong> MKP_DP(<span class="arithmatex">\(n,m,p,w,\vet{c}\)</span>)</div><div class="pc" style="--liv:1" id="box-2-mkpbu-a"><span class="pc-n">2</span><span class="arithmatex">\(v := \textnormal{new array}[0..n][0..c_1]\cdots[0..c_m]\)</span>; <span class="arithmatex">\(s := \textnormal{new array}[0..n][0..c_1]\cdots[0..c_m]\)</span></div><div class="pc" style="--liv:1" id="box-3-mkpbu-b"><span class="pc-n">3</span><strong>for each</strong> <span class="arithmatex">\(\vet{k} \in \mathscr{C}\)</span>  <strong>do</strong></div><div class="pc" style="--liv:2" id="box-4-mkpbu-c"><span class="pc-n">4</span><span class="arithmatex">\(v[0][\vet{k}] \leftarrow 0\)</span>; <span class="arithmatex">\(s[0][\vet{k}] \leftarrow 0\)</span></div><div class="pc" style="--liv:1"><span class="pc-n">5</span><strong>end</strong></div><div class="pc" style="--liv:1" id="box-5-mkpbu-d"><span class="pc-n">6</span><strong>for</strong> <span class="arithmatex">\(j := 1\)</span> <strong>to</strong> <span class="arithmatex">\(n\)</span>  <strong>do</strong></div><div class="pc" style="--liv:2" id="box-6-mkpbu-e"><span class="pc-n">7</span><strong>for each</strong> <span class="arithmatex">\(\vet{k} \in \mathscr{C}\)</span>  <strong>do</strong></div><div class="pc" style="--liv:3" id="box-7-mkpbu-f"><span class="pc-n">8</span><span class="arithmatex">\(v[j][\vet{k}] \leftarrow v[j-1][\vet{k}]\)</span>; <span class="arithmatex">\(s[j][\vet{k}] \leftarrow 0\)</span></div><div class="pc" style="--liv:3" id="box-8-mkpbu-g"><span class="pc-n">9</span><strong>for</strong> <span class="arithmatex">\(i := 1\)</span> <strong>to</strong> <span class="arithmatex">\(m\)</span>  <strong>do</strong></div><div class="pc" style="--liv:4" id="box-9-mkpbu-h"><span class="pc-n">10</span><strong>if</strong> <span class="arithmatex">\(w[j]\le k_i\)</span> and <span class="arithmatex">\(p[j]+v[j-1][\vet{k}-w[j]\,\vet{e}_i] > v[j][\vet{k}]\)</span>  <strong>then</strong></div><div class="pc" style="--liv:5" id="box-10-mkpbu-i"><span class="pc-n">11</span><span class="arithmatex">\(v[j][\vet{k}] \leftarrow p[j]+v[j-1][\vet{k}-w[j]\,\vet{e}_i]\)</span>; <span class="arithmatex">\(s[j][\vet{k}] \leftarrow i\)</span></div><div class="pc" style="--liv:4"><span class="pc-n">12</span><strong>end</strong></div><div class="pc" style="--liv:3"><span class="pc-n">13</span><strong>end</strong></div><div class="pc" style="--liv:2"><span class="pc-n">14</span><strong>end</strong></div><div class="pc" style="--liv:1"><span class="pc-n">15</span><strong>end</strong></div><div class="pc" style="--liv:1" id="box-11-mkpbu-j"><span class="pc-n">16</span><strong>return</strong> <span class="arithmatex">\(v[n][\vet{c}], s\)</span></div></div>

    - For each vector $\vet{k}$, the DP algorithm first leaves item $j$ out, and then tries to insert it into each knapsack $i=1,2,\dots,m$ in which it fits.

    - In case of ties the first option met is kept: leaving item $j$ out, then the knapsack of smallest index, because the value is updated only when it is strictly larger.

    <a id="box-12-texmkpbu"></a>

    !!! esempio "Example 24.2: Execution of the DP algorithm"

        We consider the MKP instance of <span style="color:#1971c2">[Example 24.1](#box-1-texmkpex1)</span>, with capacities $c_1=5$ and $c_2=4$. The row $j=0$ is $v[0][\vet{k}]=0$ for every $\vet{k}$. For each item $j$ we compute the matrix $v[j][k_1][k_2]$, with one row for each $k_1\in\{0,1,\dots,5\}$ and one column for each $k_2\in\{0,1,\dots,4\}$.

        These are the computations of the cell $\vet{k}=\vet{c}=(5,4)$ for each item, and of the cells used by the reconstruction:

        - $v[1][(5,4)]=\max\{v[0][(5,4)],\,p_1+v[0][(2,4)],\,p_1+v[0][(5,1)]\}=\max\{0,\,3+0,\,3+0\}=3$

        - $v[1][(3,0)]=\max\{v[0][(3,0)],\,p_1+v[0][(0,0)]\}=\max\{0,\,3+0\}=3$

        - $v[2][(5,4)]=\max\{v[1][(5,4)],\,p_2+v[1][(1,4)],\,p_2+v[1][(5,0)]\}=\max\{3,\,9+3,\,9+3\}=12$

        - $v[2][(3,4)]=\max\{v[1][(3,4)],\,p_2+v[1][(3,0)]\}=\max\{3,\,9+3\}=12$

        - $v[3][(5,4)]=\max\{v[2][(5,4)],\,p_3+v[2][(1,4)],\,p_3+v[2][(5,0)]\}=\max\{12,\,7+9,\,7+9\}=16$

        - $v[3][(3,4)]=\max\{v[2][(3,4)],\,p_3+v[2][(3,0)]\}=\max\{12,\,7+3\}=12$

        - $v[4][(5,4)]=\max\{v[3][(5,4)],\,p_4+v[3][(3,4)],\,p_4+v[3][(5,2)]\}=\max\{16,\,5+12,\,5+9\}=17$

        Item $j=1$, with $p_1=3$ and $w_1=3$:

        $$
        \begin{array}{l|rrrrr}
        \hline {v[1][k_1][k_2]} & {k_2=0} & {k_2=1} & {k_2=2} & {k_2=3} & {k_2=4} \\
        \hline {k_1=0} & {0} & {0} & {0} & {3} & {3} \\
        {k_1=1} & {0} & {0} & {0} & {3} & {3} \\
        {k_1=2} & {0} & {0} & {0} & {3} & {3} \\
        {k_1=3} & {3} & {3} & {3} & {3} & {3} \\
        {k_1=4} & {3} & {3} & {3} & {3} & {3} \\
        {k_1=5} & {3} & {3} & {3} & {3} & {3} \\
        \hline
        \end{array}
        $$

        Item $j=2$, with $p_2=9$ and $w_2=4$:

        $$
        \begin{array}{l|rrrrr}
        \hline {v[2][k_1][k_2]} & {k_2=0} & {k_2=1} & {k_2=2} & {k_2=3} & {k_2=4} \\
        \hline {k_1=0} & {0} & {0} & {0} & {3} & {9} \\
        {k_1=1} & {0} & {0} & {0} & {3} & {9} \\
        {k_1=2} & {0} & {0} & {0} & {3} & {9} \\
        {k_1=3} & {3} & {3} & {3} & {3} & {12} \\
        {k_1=4} & {9} & {9} & {9} & {12} & {12} \\
        {k_1=5} & {9} & {9} & {9} & {12} & {12} \\
        \hline
        \end{array}
        $$

        Item $j=3$, with $p_3=7$ and $w_3=4$:

        $$
        \begin{array}{l|rrrrr}
        \hline {v[3][k_1][k_2]} & {k_2=0} & {k_2=1} & {k_2=2} & {k_2=3} & {k_2=4} \\
        \hline {k_1=0} & {0} & {0} & {0} & {3} & {9} \\
        {k_1=1} & {0} & {0} & {0} & {3} & {9} \\
        {k_1=2} & {0} & {0} & {0} & {3} & {9} \\
        {k_1=3} & {3} & {3} & {3} & {3} & {12} \\
        {k_1=4} & {9} & {9} & {9} & {12} & {16} \\
        {k_1=5} & {9} & {9} & {9} & {12} & {16} \\
        \hline
        \end{array}
        $$

        Item $j=4$, with $p_4=5$ and $w_4=2$:

        $$
        \begin{array}{l|rrrrr}
        \hline {v[4][k_1][k_2]} & {k_2=0} & {k_2=1} & {k_2=2} & {k_2=3} & {k_2=4} \\
        \hline {k_1=0} & {0} & {0} & {5} & {5} & {9} \\
        {k_1=1} & {0} & {0} & {5} & {5} & {9} \\
        {k_1=2} & {5} & {5} & {5} & {8} & {14} \\
        {k_1=3} & {5} & {5} & {8} & {8} & {14} \\
        {k_1=4} & {9} & {9} & {14} & {14} & {16} \\
        {k_1=5} & {9} & {9} & {14} & {14} & {17} \\
        \hline
        \end{array}
        $$

    <a id="box-13-texmkpinfo"></a>

    !!! esempio "Example 24.3: The tables $s$"

        For the instance of <span style="color:#1971c2">[Example 24.1](#box-1-texmkpex1)</span>, these are the matrices $s[j][k_1][k_2]$ computed by the DP algorithm: $0$ means that item $j$ is left out, $1$ and $2$ the knapsack into which it is inserted.

        Item $j=1$, with $p_1=3$ and $w_1=3$:

        $$
        \begin{array}{l|rrrrr}
        \hline {s[1][k_1][k_2]} & {k_2=0} & {k_2=1} & {k_2=2} & {k_2=3} & {k_2=4} \\
        \hline {k_1=0} & {0} & {0} & {0} & {2} & {2} \\
        {k_1=1} & {0} & {0} & {0} & {2} & {2} \\
        {k_1=2} & {0} & {0} & {0} & {2} & {2} \\
        {k_1=3} & {1} & {1} & {1} & {1} & {1} \\
        {k_1=4} & {1} & {1} & {1} & {1} & {1} \\
        {k_1=5} & {1} & {1} & {1} & {1} & {1} \\
        \hline
        \end{array}
        $$

        Item $j=2$, with $p_2=9$ and $w_2=4$:

        $$
        \begin{array}{l|rrrrr}
        \hline {s[2][k_1][k_2]} & {k_2=0} & {k_2=1} & {k_2=2} & {k_2=3} & {k_2=4} \\
        \hline {k_1=0} & {0} & {0} & {0} & {0} & {2} \\
        {k_1=1} & {0} & {0} & {0} & {0} & {2} \\
        {k_1=2} & {0} & {0} & {0} & {0} & {2} \\
        {k_1=3} & {0} & {0} & {0} & {0} & {2} \\
        {k_1=4} & {1} & {1} & {1} & {1} & {1} \\
        {k_1=5} & {1} & {1} & {1} & {1} & {1} \\
        \hline
        \end{array}
        $$

        Item $j=3$, with $p_3=7$ and $w_3=4$:

        $$
        \begin{array}{l|rrrrr}
        \hline {s[3][k_1][k_2]} & {k_2=0} & {k_2=1} & {k_2=2} & {k_2=3} & {k_2=4} \\
        \hline {k_1=0} & {0} & {0} & {0} & {0} & {0} \\
        {k_1=1} & {0} & {0} & {0} & {0} & {0} \\
        {k_1=2} & {0} & {0} & {0} & {0} & {0} \\
        {k_1=3} & {0} & {0} & {0} & {0} & {0} \\
        {k_1=4} & {0} & {0} & {0} & {0} & {1} \\
        {k_1=5} & {0} & {0} & {0} & {0} & {1} \\
        \hline
        \end{array}
        $$

        Item $j=4$, with $p_4=5$ and $w_4=2$:

        $$
        \begin{array}{l|rrrrr}
        \hline {s[4][k_1][k_2]} & {k_2=0} & {k_2=1} & {k_2=2} & {k_2=3} & {k_2=4} \\
        \hline {k_1=0} & {0} & {0} & {2} & {2} & {0} \\
        {k_1=1} & {0} & {0} & {2} & {2} & {0} \\
        {k_1=2} & {1} & {1} & {1} & {1} & {1} \\
        {k_1=3} & {1} & {1} & {2} & {1} & {1} \\
        {k_1=4} & {0} & {0} & {2} & {2} & {0} \\
        {k_1=5} & {0} & {0} & {2} & {2} & {1} \\
        \hline
        \end{array}
        $$

    - Once the tables $s$ have been computed, an optimal solution is reconstructed by scanning the items from $j=n$ down to $j=1$, starting from $\vet{k}=\vet{c}$ and $a_j=0$ for every item $j$:

        $$
        a_j \leftarrow s[j][\vet{k}], \qquad \textrm{and, if } a_j=i\ge 1,\quad \vet{k} \leftarrow \vet{k} - w_j\vet{e}_i.
        $$

    !!! algoritmo "Algorithm: MKP\_Reconstruct"

        <div class="pseudocodice" markdown="0"><div class="pc" style="--liv:0"><strong>Input:</strong> The number <span class="arithmatex">\(n\)</span> of items, the capacity vector <span class="arithmatex">\(\vet{c}\)</span>, the array <span class="arithmatex">\(w[1..n]\)</span>, and the tables <span class="arithmatex">\(s\)</span></div><div class="pc" style="--liv:0"><strong>Output:</strong> An optimal solution of the MKP instance, as the vector of the knapsacks</div><div class="pc" style="--liv:0"><span class="pc-n">1</span><strong>Function</strong> MKP_Reconstruct(<span class="arithmatex">\(n,\vet{c},w,s\)</span>)</div><div class="pc" style="--liv:1"><span class="pc-n">2</span><span class="arithmatex">\(a := \textnormal{new array}[1..n]\)</span></div><div class="pc" style="--liv:1"><span class="pc-n">3</span><span class="arithmatex">\(\vet{k} := \vet{c}\)</span></div><div class="pc" style="--liv:1"><span class="pc-n">4</span><strong>for</strong> <span class="arithmatex">\(j := n\)</span> <strong>to</strong> <span class="arithmatex">\(1\)</span> <strong>do</strong></div><div class="pc" style="--liv:2"><span class="pc-n">5</span><span class="arithmatex">\(a[j] \leftarrow s[j][\vet{k}]\)</span></div><div class="pc" style="--liv:2"><span class="pc-n">6</span><strong>if</strong> <span class="arithmatex">\(a[j]\ge 1\)</span> <strong>then</strong></div><div class="pc" style="--liv:3"><span class="pc-n">7</span><span class="arithmatex">\(\vet{k} \leftarrow \vet{k}-w[j]\,\vet{e}_{a[j]}\)</span></div><div class="pc" style="--liv:2"><span class="pc-n">8</span><strong>end</strong></div><div class="pc" style="--liv:1"><span class="pc-n">9</span><strong>end</strong></div><div class="pc" style="--liv:1"><span class="pc-n">10</span><strong>return</strong> <span class="arithmatex">\(a\)</span></div></div>

    <a id="box-14-texmkpsol"></a>

    !!! esempio "Example 24.4: Computing an optimal solution"

        After the execution of the DP algorithm on the instance of <span style="color:#1971c2">[Example 24.1](#box-1-texmkpex1)</span>, we start from $j=4$ and $\vet{k}=(5,4)$:

        <div class="tabella" markdown="0"><table>
        <tr>
        <th>Iteration</th>
        <th><span class="arithmatex">\(j\)</span></th>
        <th><span class="arithmatex">\(\vet{k}\)</span></th>
        <th><span class="arithmatex">\(s[j][\vet{k}]\)</span></th>
        <th><span class="arithmatex">\(a[1]\)</span></th>
        <th><span class="arithmatex">\(a[2]\)</span></th>
        <th><span class="arithmatex">\(a[3]\)</span></th>
        <th><span class="arithmatex">\(a[4]\)</span></th>
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
        <td><span class="arithmatex">\(\vet{k}=(5,4)\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\((5,4)\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td class="cella-blu">1</td>
        <td><span class="arithmatex">\(a[4]\leftarrow 1\)</span>, <span class="arithmatex">\(\vet{k}\leftarrow (3,4)\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\((3,4)\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td>0</td>
        <td>0</td>
        <td class="cella-blu">0</td>
        <td>1</td>
        <td><span class="arithmatex">\(a[3]\leftarrow 0\)</span>, <span class="arithmatex">\(\vet{k}=(3,4)\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\((3,4)\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td>0</td>
        <td class="cella-blu">2</td>
        <td>0</td>
        <td>1</td>
        <td><span class="arithmatex">\(a[2]\leftarrow 2\)</span>, <span class="arithmatex">\(\vet{k}\leftarrow (3,0)\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\((3,0)\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td class="cella-blu">1</td>
        <td>2</td>
        <td>0</td>
        <td>1</td>
        <td><span class="arithmatex">\(a[1]\leftarrow 1\)</span>, <span class="arithmatex">\(\vet{k}\leftarrow (0,0)\)</span></td>
        </tr>
        </table></div>

        !!! chiave ""

            The vector $a=(1,2,0,1)$ is an optimal solution of the MKP instance of <span style="color:#1971c2">[Example 24.1](#box-1-texmkpex1)</span>: knapsack $1$ contains the items $\{1,4\}$, of total weight $3+2=5\le c_1$, and knapsack $2$ contains the items $\{2\}$, of total weight $4\le c_2$. The optimal value is $v(4,5,4)=17$.

        Filling the knapsacks one after the other is not enough: the best filling of knapsack $1$ alone is $\{2\}$, of profit $9$, and the best filling of knapsack $2$ with the remaining items is $\{3\}$, of profit $7$, for a total of $16<17$.

### 24.1.1 Number of steps

- Let $N=|\mathscr{C}|=\prod_{i=1}^{m}(c_i+1)$ be the number of vectors $\vet{k}$, and let $S(n,m,\vet{c})$ denote the number of steps executed by <code>MKP\_DP</code> in the worst case. Inserting item $j$ into knapsack $i$ changes only the component $k_i$, so lines [10](#box-9-mkpbu-h) and [11](#box-10-mkpbu-i) count one step each:

    - <span style="color:#e03131">Lines</span> [2](#box-2-mkpbu-a) and [16](#box-11-mkpbu-j) are executed $1$ time each.

    - <span style="color:#e03131">Lines</span> [3](#box-3-mkpbu-b) and [4](#box-4-mkpbu-c) are executed $N$ times each.

    - <span style="color:#e03131">Line</span> [6](#box-5-mkpbu-d) is executed $n$ times.

    - <span style="color:#e03131">Lines</span> [7](#box-6-mkpbu-e) and [8](#box-7-mkpbu-f) are executed $nN$ times each.

    - <span style="color:#e03131">Lines</span> [9](#box-8-mkpbu-g), [10](#box-9-mkpbu-h) and [11](#box-10-mkpbu-i) are executed at most $m\,nN$ times each.

- Therefore, the total number of steps in the worst case is

    $$
    S(n,m,\vet{c})=3m\,nN+2nN+2N+n+2,
    $$

    and, since $3m\,nN\le S(n,m,\vet{c})\le 10m\,nN$,

    $$
    S(n,m,\vet{c})=\Theta\Big(m\,n\prod_{i=1}^{m}(c_i+1)\Big).
    $$

    !!! chiave ""

        The DP algorithm for the MKP executes $\Theta(m\,n\prod_{i=1}^{m}(c_i+1))$ steps in the worst case. For a fixed number $m$ of knapsacks this is $\Theta(n\prod_{i=1}^{m}c_i)$, a pseudo-polynomial number of steps.

- The reconstruction executes $\Theta(n)$ steps.

### 24.1.2 The growth with the number of knapsacks

- Each new knapsack multiplies the number of states by $c_i+1$. If all the capacities are equal to $c$, the table has $(n+1)(c+1)^m$ cells: the number of states grows <strong>exponentially</strong> with $m$, while the size of the input grows only by one number, the capacity $c_i$.

- With $n=50$ items and capacities $c_i=100$, the table has $51\cdot 101=5151$ cells with $m=1$, $51\cdot 101^2=520\,251$ with $m=2$, and $51\cdot 101^5\approx 5.4\cdot 10^{11}$ with $m=5$.

- Knapsacks with the same capacity give symmetric states: if $c_1=c_2$, the vectors $(k_1,k_2,\dots)$ and $(k_2,k_1,\dots)$ have the same optimal value, and the DP algorithm computes both.

## 24.2 Typical mistakes

!!! attenzione "Warning"

    - <strong>Decreasing all the capacities.</strong> Item $j$ goes into one knapsack only: $\vet{k}-w_j\vet{e}_i$ decreases the component $k_i$, not all of them as in the multidimensional knapsack problem.

    - <strong>Using one capacity $c_1+\dots+c_m$.</strong> The KP with the total capacity gives only an upper bound: its solution may not be divisible among the knapsacks.

    - <strong>Filling the knapsacks one after the other.</strong> An optimal filling of knapsack $1$, followed by an optimal filling of knapsack $2$ with the remaining items, can be worse than the optimum.

    - <strong>Forgetting the option «item left out».</strong> The term $v(j-1,\vet{k})$ is always a candidate, also when item $j$ fits into some knapsack.

## 24.3 In summary

!!! chiave "In summary"

    - The state of the DP algorithm is the item $j$ and the vector $\vet{k}$ of the residual capacities of the $m$ knapsacks.

    - Item $j$ is left out or inserted into one knapsack $i$ in which it fits: $m+1$ options, and only $k_i$ decreases.

    - The DP algorithm executes $\Theta(m\,n\prod_{i=1}^{m}(c_i+1))$ steps: the number of states grows exponentially with $m$.

    - The tables $s$ store the knapsack of each item, and an optimal solution is read backwards from $(n,\vet{c})$.

    <strong>Dashboard of the MKP example.</strong> [Example 24.1](#box-1-texmkpex1) ($\vet{c}=(5,4)$, four items):

    <div class="tabella" markdown="0"><table>
    <tr>
    <th>Method</th>
    <th>Lower bound</th>
    <th>Upper bound</th>
    <th>Origin</th>
    </tr>
    <tr>
    <td>DP algorithm</td>
    <td><span class="arithmatex">\(17\)</span></td>
    <td><span class="arithmatex">\(17\)</span></td>
    <td>optimal value, solution <span class="arithmatex">\(a=(1,2,0,1)\)</span></td>
    </tr>
    </table></div>

---

**Exercises on this chapter:** [:material-pencil: Multiple knapsack (MKP)](../exercises/dp-multiple-knapsack.md)
