---
title: "Exercises · Principles of dynamic programming"
---

# Exercises · Principles of dynamic programming

<div class="info-capitolo" markdown>

**Exercises · Chapter 14** · each solution opens with a click · [:material-book-open-variant: Chapter 14: Principles](../dynamic-programming/dp-principles.md)

</div>

<a id="esercizio-14-1"></a>

!!! esercizio "Exercise 14.1: Optimal substructure and overlapping subproblems"

    A staircase has $n=6$ steps. Stepping on step $k$ costs $c_k$, and from a step we can climb to the next one or skip one step. We start from the ground, step $0$, at no cost, and we want to reach step $6$ at minimum total cost:

    $$
    \begin{array}{l|cccccc}
    \hline  & {k=1} & {k=2} & {k=3} & {k=4} & {k=5} & {k=6} \\[1ex]
    \hline {c_k} & {3} & {1} & {4} & {1} & {5} & {2} \\
    \hline
    \end{array}
    $$

    For $k\in\{0,1,\dots,n\}$, let $v(k)$ be the minimum cost to reach step $k$.

    **Questions**

    1. Check the optimal substructure: if an optimal way to reach step $k$ arrives from step $k-1$, what can be said about its part from step $0$ to step $k-1$? Write the recurrence for $v(k)$, with the base cases.

    2. Draw the recursion tree of the top-down evaluation of $v(6)$ down to the base cases. How many times is $v(2)$ evaluated? What property does this show?

    3. Fill the lookup table bottom-up, storing also in $s[k]$ the step from which the best way arrives.

    4. Reconstruct an optimal solution from the table $s$.

??? soluzione "Solution"

    1. The part from step $0$ to step $k-1$ is a way to reach step $k-1$, and it must be optimal: a cheaper way to reach step $k-1$, followed by the last move, would reach step $k$ at a lower cost. The same holds when the last move comes from step $k-2$. Hence:

        !!! nota ""

            $$
            v(k)=\left\{\begin{array}{ll}
            c_k+\min\{v(k-1),\,v(k-2)\} & \textrm{if } 2\le k\le n,\\[1ex]
            c_1 & \textrm{if } k=1,\\[1ex]
            0 & \textrm{if } k=0.
            \end{array}\right.
            $$

    2. Each call for $k\ge 2$ calls $k-1$ and $k-2$. The tree has $25$ calls, and the numbers of evaluations of $v(0),\dots,v(6)$ are $5, 8, 5, 3, 2, 1, 1$:

        ![Figure 1](../img/ex-dp-principles/fig01.svg){ .fig loading=lazy  }

        The value $v(2)$ is evaluated $5$ times: the subproblems <strong>overlap</strong>. With a lookup table each of the $7$ values is computed once.

    3. The values are computed for increasing $k$:

        <div class="tabella" markdown="0"><table>
        <tr>
        <th><span class="arithmatex">\(k\)</span></th>
        <th><span class="arithmatex">\(\min\{v(k-1),v(k-2)\}\)</span></th>
        <th><span class="arithmatex">\({v}[k]\)</span></th>
        <th><span class="arithmatex">\({s}[k]\)</span></th>
        <th>action</th>
        </tr>
        <tr>
        <td><span class="arithmatex">\(0\)</span></td>
        <td>—</td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td>—</td>
        <td>base case</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td>—</td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td>base case: <span class="arithmatex">\({v}[1]\leftarrow c_1=3\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(\min\{3,0\}\)</span></td>
        <td><span class="arithmatex">\(1+0=1\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td>from step <span class="arithmatex">\(0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(\min\{1,3\}\)</span></td>
        <td><span class="arithmatex">\(4+1=5\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td>from step <span class="arithmatex">\(2\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(\min\{5,1\}\)</span></td>
        <td><span class="arithmatex">\(1+1=2\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td>from step <span class="arithmatex">\(2\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(\min\{2,5\}\)</span></td>
        <td><span class="arithmatex">\(5+2=7\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td>from step <span class="arithmatex">\(4\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(\min\{7,2\}\)</span></td>
        <td><span class="arithmatex">\(2+2=4\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td>from step <span class="arithmatex">\(4\)</span></td>
        </tr>
        </table></div>

        A tie is broken in favour of step $k-1$.

    4. Starting from $k=6$ and following $s$ backwards: $s[6]=4$, $s[4]=2$, $s[2]=0$. The optimal way is $0\to 2\to 4\to 6$, with cost $1+1+2=4=v(6)$.

    !!! chiave ""

        $v(6)=4$, reached by the steps $0\to 2\to 4\to 6$; the recursion tree evaluates $v(2)$ $5$ times, the lookup table once.

<a id="esercizio-14-2"></a>

!!! esercizio "Exercise 14.2: Writing a recurrence: no two consecutive positions"

    Along a road there are $n=7$ positions for billboards, numbered in order. A billboard in position $k$ brings a profit $p_k$, and two billboards cannot be in consecutive positions:

    $$
    \begin{array}{l|ccccccc}
    \hline  & {k=1} & {k=2} & {k=3} & {k=4} & {k=5} & {k=6} & {k=7} \\[1ex]
    \hline {p_k} & {5} & {8} & {6} & {3} & {7} & {9} & {4} \\
    \hline
    \end{array}
    $$

    We want a set of positions, no two consecutive, of maximum total profit.

    **Questions**

    1. Define the subproblems: let $v(k)$ be the optimal value when only the positions $1,\dots,k$ are available. Write a recurrence for $v(k)$, distinguishing whether position $k$ is used, and the base cases.

    2. Fill the lookup table bottom-up, storing in $s[k]$ whether position $k$ is used ($1$) or not ($0$).

    3. Reconstruct an optimal solution.

    4. Choose the positions greedily, by non-increasing profit, skipping the positions next to a chosen one. Is the result optimal?

??? soluzione "Solution"

    1. If position $k$ is not used, the best choice among $1,\dots,k$ is the best choice among $1,\dots,k-1$. If it is used, position $k-1$ is forbidden and the rest is an optimal choice among $1,\dots,k-2$ (optimal substructure: a better choice there would improve the whole). Hence:

        !!! nota ""

            $$
            v(k)=\left\{\begin{array}{ll}
            \max\{v(k-1),\;p_k+v(k-2)\} & \textrm{if } 2\le k\le n,\\[1ex]
            p_1 & \textrm{if } k=1,\\[1ex]
            0 & \textrm{if } k=0.
            \end{array}\right.
            $$

    2. The values are computed for increasing $k$ (a tie is broken in favour of not using position $k$):

        $$
        \begin{array}{c|c|c|c|c}
        \hline {k} & {v(k-1)} & {p_k+v(k-2)} & {{v}[k]} & {{s}[k]} \\
        \hline {0} & --- & --- & {0} & {0} \\
        {1} & --- & --- & {5} & {1} \\
        {2} & {5} & {8+0=8} & {8} & {1} \\
        {3} & {8} & {6+5=11} & {11} & {1} \\
        {4} & {11} & {3+8=11} & {11} & {0} \\
        {5} & {11} & {7+11=18} & {18} & {1} \\
        {6} & {18} & {9+11=20} & {20} & {1} \\
        {7} & {20} & {4+18=22} & {22} & {1} \\
        \hline
        \end{array}
        $$

    3. Starting from $k=7$:

        - $s[7]=1$: position $7$ is chosen, go to $k=5$;

        - $s[5]=1$: position $5$ is chosen, go to $k=3$;

        - $s[3]=1$: position $3$ is chosen, go to $k=1$;

        - $s[1]=1$: position $1$ is chosen, go to $k=0$;

        The optimal solution is $\{1,3,5,7\}$, with profit $5+6+7+4=22=v(7)$.

    4. The greedy choice takes the positions $6, 2, 4$ (in this order), of profit $8+3+9=20<22$: it is not optimal. Taking position $6$ first forbids its neighbours, which together are worth more.

    !!! chiave ""

        $v(7)=22$ with the positions $\{1,3,5,7\}$; the greedy choice by profit gives only $20$.

<a id="esercizio-14-3"></a>

!!! esercizio "Exercise 14.3: Filling a DP table: paths on a grid"

    A robot moves on a grid of $3$ rows and $4$ columns, from the cell $(1,1)$ to the cell $(3,4)$, one cell down or one cell right at each move. Every cell $(i,j)$ it visits gives a profit $a_{ij}$:

    $$
    \begin{array}{c|cccc}
    \hline  & {j=1} & {j=2} & {j=3} & {j=4} \\
    \hline {i=1} & {3} & {1} & {4} & {2} \\
    {i=2} & {2} & {6} & {1} & {5} \\
    {i=3} & {4} & {2} & {3} & {1} \\
    \hline
    \end{array}
    $$

    We want a path of maximum total profit.

    **Questions**

    1. How many paths are there? Why is the enumeration of the paths not a good idea on large grids?

    2. Let $v(i,j)$ be the maximum profit of a path from $(1,1)$ to $(i,j)$. Write the recurrence and the base cases.

    3. Fill the table of $v(i,j)$ row by row, storing in $s(i,j)$ whether the best path arrives from above ($\uparrow$) or from the left ($\leftarrow$); a tie is broken in favour of above.

    4. Reconstruct the optimal path.

??? soluzione "Solution"

    1. A path makes $2$ moves down and $3$ moves right, in any order: $\binom{5}{2}=10$ paths. On a grid with $r$ rows and $q$ columns there are $\binom{r+q-2}{r-1}$ paths, which grows exponentially, while the table has only $rq$ cells.

    2. The last move into $(i,j)$ comes from $(i-1,j)$ or from $(i,j-1)$, and the path up to there must be optimal (optimal substructure):

        !!! nota ""

            $$
            v(i,j)=\left\{\begin{array}{ll}
            a_{ij}+\max\{v(i-1,j),\,v(i,j-1)\} & \textrm{if } i\ge 2,\ j\ge 2,\\[1ex]
            a_{1j}+v(1,j-1) & \textrm{if } i=1,\ j\ge 2,\\[1ex]
            a_{i1}+v(i-1,1) & \textrm{if } i\ge 2,\ j=1,\\[1ex]
            a_{11} & \textrm{if } i=j=1.
            \end{array}\right.
            $$

    3. The tables $v$ and $s$ are:

        $$
        \begin{array}{c|cccc}
        \hline {v(i,j)} & {j=1} & {j=2} & {j=3} & {j=4} \\
        \hline {i=1} & {3} & {4} & {8} & {10} \\
        {i=2} & {5} & {11} & {12} & {17} \\
        {i=3} & {9} & {13} & {16} & {18} \\
        \hline
        \end{array}
        $$

        $$
        \begin{array}{c|cccc}
        \hline  & {j=1} & {j=2} & {j=3} & {j=4} \\
        \hline {i=1} & --- & {\leftarrow} & {\leftarrow} & {\leftarrow} \\
        {i=2} & {\uparrow} & {\leftarrow} & {\leftarrow} & {\leftarrow} \\
        {i=3} & {\uparrow} & {\uparrow} & {\leftarrow} & {\uparrow} \\
        \hline
        \end{array}
        $$

        For example $v(2,2)=a_{22}+\max\{v(1,2),v(2,1)\}=6+\max\{4,5\}=11$.

    4. From $(3,4)$ we follow the arrows backwards: the path is $(1,1)\to (2,1)\to (2,2)\to (2,3)\to (2,4)\to (3,4)$, with profit $3+2+6+1+5+1=18=v(3,4)$. Its cells are highlighted:

        $$
        \begin{array}{c|cccc}
        \hline {v(i,j)} & {j=1} & {j=2} & {j=3} & {j=4} \\
        \hline {i=1} & \bbox[#9999ff]{{3}} & {4} & {8} & {10} \\
        {i=2} & \bbox[#9999ff]{{5}} & \bbox[#9999ff]{{11}} & \bbox[#9999ff]{{12}} & \bbox[#9999ff]{{17}} \\
        {i=3} & {9} & {13} & {16} & \bbox[#9999ff]{{18}} \\
        \hline
        \end{array}
        $$

    !!! chiave ""

        The optimal path collects $v(3,4)=18$. The DP algorithm fills one cell per subproblem, $12$ here, while the number of paths grows exponentially with the size of the grid.

<a id="esercizio-14-4"></a>

!!! esercizio "Exercise 14.4: Shortest path in a layered network"

    We look for a shortest path from $s$ to $t$ in the directed network $G=(N,A)$ below, where every arc $(i,j)\in A$ has a cost $c_{ij}$:

    ![Figure 2](../img/ex-dp-principles/fig02.svg){ .fig loading=lazy  }

    For every node $i$, let $v(i)$ be the cost of a shortest path from $i$ to $t$.

    **Questions**

    1. Check the optimal substructure: if a shortest path from $s$ to $t$ passes through node $i$, what can be said about its part from $i$ to $t$? Write the recurrence for $v(i)$ and the base case.

    2. Which values $v(i)$ are needed by more than one node? What property of DP does this show?

    3. Compute the values $v(i)$ backwards, from $t$ to $s$, storing in $s(i)$ the successor of $i$ on the best path (ties broken by the node listed first).

    4. Reconstruct the shortest path and compare its cost with the enumeration of all the paths.

??? soluzione "Solution"

    1. The part from $i$ to $t$ must be a shortest path from $i$ to $t$: a shorter one would give a shorter path from $s$ to $t$. The first arc out of $i$ goes to some successor $j$, hence:

        !!! nota ""

            $$
            v(i)=\left\{\begin{array}{ll}
            \min\{c_{ij}+v(j):(i,j)\in A\} & \textrm{if } i\neq t,\\[1ex]
            0 & \textrm{if } i=t.
            \end{array}\right.
            $$

    2. The values $v(b_1)$, $v(b_2)$, $v(b_3)$ are needed by the nodes $a_1,a_2,a_3$ that point to them: $v(b_1)$ by $2$ nodes, $v(b_2)$ by $3$ and $v(b_3)$ by $2$. The subproblems overlap: with a lookup table each value is computed once.

    3. The values, from $t$ backwards:

        <div class="tabella" markdown="0"><table>
        <tr>
        <th>node <span class="arithmatex">\(i\)</span></th>
        <th><span class="arithmatex">\(c_{ij}+v(j)\)</span> for <span class="arithmatex">\((i,j)\in A\)</span></th>
        <th><span class="arithmatex">\(v(i)\)</span></th>
        <th><span class="arithmatex">\(s(i)\)</span></th>
        </tr>
        <tr>
        <td><span class="arithmatex">\(t\)</span></td>
        <td>—</td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td>—</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(b_3\)</span></td>
        <td><span class="arithmatex">\(2+0=2\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(t\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(b_2\)</span></td>
        <td><span class="arithmatex">\(3+0=3\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(t\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(b_1\)</span></td>
        <td><span class="arithmatex">\(6+0=6\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(t\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(a_3\)</span></td>
        <td><span class="arithmatex">\(2+3=5\)</span>, <span class="arithmatex">\(3+2=5\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(b_2\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(a_2\)</span></td>
        <td><span class="arithmatex">\(7+6=13\)</span>, <span class="arithmatex">\(4+3=7\)</span>, <span class="arithmatex">\(6+2=8\)</span></td>
        <td><span class="arithmatex">\(7\)</span></td>
        <td><span class="arithmatex">\(b_2\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(a_1\)</span></td>
        <td><span class="arithmatex">\(3+6=9\)</span>, <span class="arithmatex">\(6+3=9\)</span></td>
        <td><span class="arithmatex">\(9\)</span></td>
        <td><span class="arithmatex">\(b_1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(s\)</span></td>
        <td><span class="arithmatex">\(4+9=13\)</span>, <span class="arithmatex">\(2+7=9\)</span>, <span class="arithmatex">\(5+5=10\)</span></td>
        <td><span class="arithmatex">\(9\)</span></td>
        <td><span class="arithmatex">\(a_2\)</span></td>
        </tr>
        </table></div>

    4. Following $s$ from $s$: $s\to a_2\to b_2\to t$, of cost $2+4+3=9=v(s)$:

        ![Figure 3](../img/ex-dp-principles/fig03.svg){ .fig loading=lazy  }

        The network has $7$ paths from $s$ to $t$; their enumeration gives the same optimal path, the only one of cost $9$.

    !!! chiave ""

        $v(s)=9$, with the shortest path $s\to a_2\to b_2\to t$; the values of the nodes $b_k$ are computed once and used several times.

<a id="esercizio-14-5"></a>

!!! esercizio "Exercise 14.5: A recurrence for a new problem: compatible requests"

    A room can host one event at a time. There are $n=6$ requests: request $j$ occupies the room from time $a_j$ to time $b_j$ and pays $w_j$; two requests are compatible if one ends before (or when) the other starts. The requests are numbered by non-decreasing end time:

    $$
    \begin{array}{l|cccccc}
    \hline  & {j=1} & {j=2} & {j=3} & {j=4} & {j=5} & {j=6} \\[1ex]
    \hline {a_j} & {0} & {1} & {4} & {2} & {5} & {7} \\[1ex]
    {b_j} & {3} & {5} & {6} & {8} & {9} & {10} \\[1ex]
    {w_j} & {4} & {6} & {3} & {8} & {5} & {5} \\
    \hline
    \end{array}
    $$

    ![Figure 4](../img/ex-dp-principles/fig04.svg){ .fig loading=lazy  }

    We want a set of pairwise compatible requests of maximum total payment.

    **Questions**

    1. For every $j$, let $q(j)$ be the largest index $i<j$ of a request compatible with $j$ ($q(j)=0$ if there is none). Compute $q(1),\dots,q(n)$.

    2. Let $v(j)$ be the optimal value with the requests $1,\dots,j$ only. Write a recurrence for $v(j)$, distinguishing whether request $j$ is taken, and the base case.

    3. Fill the lookup table, storing in $s[j]$ whether request $j$ is taken; a tie is broken in favour of not taking it.

    4. Reconstruct an optimal solution. Does the greedy choice by non-increasing payment find it?

??? soluzione "Solution"

    1. Request $j$ starts at $a_j$, and the compatible requests with smaller index are those with $b_i\le a_j$; since the end times are sorted, they are the requests $1,\dots,q(j)$:

        $$
        \begin{array}{c|cccccc}
        \hline  & {j=1} & {j=2} & {j=3} & {j=4} & {j=5} & {j=6} \\
        \hline {q(j)} & {0} & {0} & {1} & {0} & {2} & {3} \\
        \hline
        \end{array}
        $$

    2. If request $j$ is not taken, the best choice is among $1,\dots,j-1$. If it is taken, the requests $q(j)+1,\dots,j-1$ overlap with it, and the rest is an optimal choice among $1,\dots,q(j)$:

        !!! nota ""

            $$
            v(j)=\left\{\begin{array}{ll}
            \max\{v(j-1),\;w_j+v(q(j))\} & \textrm{if } 1\le j\le n,\\[1ex]
            0 & \textrm{if } j=0.
            \end{array}\right.
            $$

    3. The values are computed for increasing $j$:

        $$
        \begin{array}{c|c|c|c|c|c}
        \hline {j} & {q(j)} & {v(j-1)} & {w_j+v(q(j))} & {{v}[j]} & {{s}[j]} \\
        \hline {0} & --- & --- & --- & {0} & --- \\
        {1} & {0} & {0} & {4+0=4} & {4} & {1} \\
        {2} & {0} & {4} & {6+0=6} & {6} & {1} \\
        {3} & {1} & {6} & {3+4=7} & {7} & {1} \\
        {4} & {0} & {7} & {8+0=8} & {8} & {1} \\
        {5} & {2} & {8} & {5+6=11} & {11} & {1} \\
        {6} & {3} & {11} & {5+7=12} & {12} & {1} \\
        \hline
        \end{array}
        $$

    4. Starting from $j=6$:

        - $s[6]=1$: job $6$ is taken, go to $q(6)=3$;

        - $s[3]=1$: job $3$ is taken, go to $q(3)=1$;

        - $s[1]=1$: job $1$ is taken, go to $q(1)=0$;

        The optimal solution is $\{1,3,6\}$, with payment $4+3+5=12=v(6)$:

        ![Figure 5](../img/ex-dp-principles/fig05.svg){ .fig loading=lazy  }

        The greedy choice by payment takes $4$, of payment $8<12$: request $4$, the richest one, overlaps with the requests $1, 3, 6$ of the optimal solution, which together pay $12$.

    !!! chiave ""

        $v(6)=12$ with the requests $\{1,3,6\}$; the greedy choice by payment gives only $8$.
