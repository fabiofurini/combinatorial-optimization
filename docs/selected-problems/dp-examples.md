---
title: "DP examples"
---

# DP examples

<div class="info-capitolo" markdown>

**Selected problems** · [:material-file-pdf-box: Selected problems (PDF)](../pdf/selected-problems.pdf)

</div>

<a id="sec:cat-pagina-dp-examples"></a>

## Minimum-cost staircase { #sez-sec-cat-stair }

!!! nota "Where it is treated"

    - [Exercise 16.1](../exercises/dp-principles.md#esercizio-16-1): Exercise 16.1: recurrence, recursion tree, lookup table, reconstruction

### Definition { #sez-sec-cat-stair-def }

<a id="box-1-def-cat-stair"></a>

!!! definizione "Definition 1: Minimum-cost staircase"

    A staircase has $n$ steps. Stepping on step $k$ costs $c_k$, and from a step we can climb to the next one or skip one step. We start from the ground, step $0$, at no cost, and we want to reach step $n$ at minimum total cost.

- Defined in [Exercise 16.1](../exercises/dp-principles.md#esercizio-16-1).

- The smallest example of the two properties of DP: the top-down recursion evaluates the same values $v(k)$ many times, the lookup table once.

- A shortest path on the steps $0,1,\dots,n$ with arcs $k-1\to k$ and $k-2\to k$; used to show the optimal substructure and the overlapping subproblems.

### Bounds and complexity { #sez-sec-cat-stair-prop }

- <strong>Complexity</strong>: $\Theta(n)$ steps with the lookup table.

### Dynamic programming { #sez-sec-cat-stair-dynamicprogramming }

- $v(k)=c_k+\min\{v(k-1),\,v(k-2)\}$ for $2\le k\le n$, with $v(1)=c_1$ and $v(0)=0$; the recursion tree of $v(6)$ has $25$ calls ([Exercise 16.1](../exercises/dp-principles.md#esercizio-16-1)).

### Instances { #sez-sec-cat-stair-ist }

<strong>Instance STAIR1</strong> <a id="sec:cat-ist-stair1"></a>

Instance of Exercise 16.1.

$n=6$ steps with costs:

$$
\begin{array}{l|cccccc}
\hline
k & 1 & 2 & 3 & 4 & 5 & 6 \\
\hline
c_k & 3 & 1 & 4 & 1 & 5 & 2 \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{STAIR1})=4$, attained by steps $0\to 2\to 4\to 6$.

- Used in [Exercise 16.1](../exercises/dp-principles.md#esercizio-16-1).

### Exercises { #sez-sec-cat-stair-es }

- [Exercise 16.1: Optimal substructure and overlapping subproblems](../exercises/dp-principles.md#esercizio-16-1)

## Billboards with no two consecutive positions { #sez-sec-cat-nocons }

!!! nota "Where it is treated"

    - [Exercise 16.2](../exercises/dp-principles.md#esercizio-16-2): Exercise 16.2: recurrence, lookup table, reconstruction, greedy comparison

### Definition { #sez-sec-cat-nocons-def }

<a id="box-2-def-cat-nocons"></a>

!!! definizione "Definition 2: Billboards with no two consecutive positions"

    Along a road there are $n$ positions for billboards, numbered in order. A billboard in position $k$ brings a profit $p_k$, and two billboards cannot be in consecutive positions. We want a set of positions, no two consecutive, of maximum total profit.

- Defined in [Exercise 16.2](../exercises/dp-principles.md#esercizio-16-2).

- An exercise on writing a recurrence by distinguishing whether the last position is used, and on a greedy choice that is not optimal.

- A maximum weight stable set on a path with $n$ vertices; a subset problem like the KP, with a conflict constraint instead of the capacity.

### Bounds and complexity { #sez-sec-cat-nocons-prop }

- <strong>Complexity</strong>: $\Theta(n)$ steps with the lookup table.

### Dynamic programming { #sez-sec-cat-nocons-dynamicprogramming }

- $v(k)=\max\{v(k-1),\;p_k+v(k-2)\}$ for $2\le k\le n$, with $v(1)=p_1$ and $v(0)=0$ ([Exercise 16.2](../exercises/dp-principles.md#esercizio-16-2)).

### Constructive heuristics { #sez-sec-cat-nocons-constructiveheuristics }

- The greedy choice by non-increasing profit, skipping the neighbours of a chosen position, gives $20<22$ on the instance of the exercise ([Exercise 16.2](../exercises/dp-principles.md#esercizio-16-2)).

### Instances { #sez-sec-cat-nocons-ist }

<strong>Instance NOCONS1</strong> <a id="sec:cat-ist-nocons1"></a>

Instance of Exercise 16.2.

$n=7$ positions with profits:

$$
\begin{array}{l|ccccccc}
\hline
k & 1 & 2 & 3 & 4 & 5 & 6 & 7 \\
\hline
p_k & 5 & 8 & 6 & 3 & 7 & 9 & 4 \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{NOCONS1})=22$, attained by positions $\{1,3,5,7\}$ (greedy: $20$).

- Used in [Exercise 16.2](../exercises/dp-principles.md#esercizio-16-2).

### Exercises { #sez-sec-cat-nocons-es }

- [Exercise 16.2: Writing a recurrence: no two consecutive positions](../exercises/dp-principles.md#esercizio-16-2)

## Maximum-profit path on a grid { #sez-sec-cat-grid }

!!! nota "Where it is treated"

    - [Exercise 16.3](../exercises/dp-principles.md#esercizio-16-3): Exercise 16.3: counting the paths, recurrence, table, reconstruction

### Definition { #sez-sec-cat-grid-def }

<a id="box-3-def-cat-grid"></a>

!!! definizione "Definition 3: Maximum-profit path on a grid"

    A robot moves on a grid of $r$ rows and $q$ columns, from the cell $(1,1)$ to the cell $(r,q)$, one cell down or one cell right at each move. Every cell $(i,j)$ it visits gives a profit $a_{ij}$. We want a path of maximum total profit.

- Defined in [Exercise 16.3](../exercises/dp-principles.md#esercizio-16-3).

- An exercise on filling a two-dimensional DP table row by row and reading the optimal path backwards.

- A longest path in an acyclic grid network; the exercise compares the $\binom{r+q-2}{r-1}$ paths with the $rq$ cells of the DP table.

### Bounds and complexity { #sez-sec-cat-grid-prop }

- <strong>Complexity</strong>: One cell per subproblem, $rq$ cells, while the number of paths grows exponentially with the size of the grid.

### Dynamic programming { #sez-sec-cat-grid-dynamicprogramming }

- $v(i,j)=a_{ij}+\max\{v(i-1,j),\,v(i,j-1)\}$ for $i,j\ge 2$, with the first row and column accumulated and $v(1,1)=a_{11}$ ([Exercise 16.3](../exercises/dp-principles.md#esercizio-16-3)).

### Instances { #sez-sec-cat-grid-ist }

<strong>Instance GRID1</strong> <a id="sec:cat-ist-grid1"></a>

Instance of Exercise 16.3.

Grid with $3$ rows and $4$ columns, profits $a_{ij}$:

$$
\begin{array}{cccc}
\hline
3 & 1 & 4 & 2 \\
2 & 6 & 1 & 5 \\
4 & 2 & 3 & 1 \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{GRID1})=18$, attained by

    $$
    (1,1)\to (2,1)\to (2,2)\to (2,3)\to (2,4)\to (3,4)
    $$

    .

- Used in [Exercise 16.3](../exercises/dp-principles.md#esercizio-16-3).

### Exercises { #sez-sec-cat-grid-es }

- [Exercise 16.3: Filling a DP table: paths on a grid](../exercises/dp-principles.md#esercizio-16-3)

## Shortest path in a layered network { #sez-sec-cat-spp }

!!! nota "Where it is treated"

    - [Exercise 16.4](../exercises/dp-principles.md#esercizio-16-4): Exercise 16.4: recurrence, backward computation, reconstruction

    - [Chapter 22 «Dynamic programming for lot sizing»](../dynamic-programming/dp-lot-sizing/a-dp-algorithm-for-the-uls-step-1-and-step-2.md#2222-step-1-and-step-2): Remark: the recurrence of the ULS computes a shortest path from node $0$ to node $t$

### Definition { #sez-sec-cat-spp-def }

<a id="box-4-def-cat-spp"></a>

!!! definizione "Definition 4: Shortest path in a layered network"

    We look for a shortest path from $s$ to $t$ in a directed network $G=(N,A)$, where every arc $(i,j)\in A$ has a cost $c_{ij}$.

- Defined in [Exercise 16.4](../exercises/dp-principles.md#esercizio-16-4).

- The value $v(i)$ of a shortest path from $i$ to $t$ is used by every predecessor of $i$: the overlapping subproblems are the shared nodes.

- The DP algorithm of the uncapacitated lot sizing problem computes a shortest path in a network whose arcs are production runs ([Chapter 22 «Dynamic programming for lot sizing»](../dynamic-programming/dp-lot-sizing/a-dp-algorithm-for-the-uls-step-1-and-step-2.md#2222-step-1-and-step-2)).

### Dynamic programming { #sez-sec-cat-spp-dynamicprogramming }

- $v(i)=\min\{c_{ij}+v(j):(i,j)\in A\}$ for $i\neq t$, with $v(t)=0$, computed backwards from $t$ ([Exercise 16.4](../exercises/dp-principles.md#esercizio-16-4)).

### Instances { #sez-sec-cat-spp-ist }

<strong>Instance SPP1</strong> <a id="sec:cat-ist-spp1"></a>

Layered network of Exercise 16.4.

Network with $8$ nodes, from $s$ to $t$; arcs with their costs:

$$
\begin{aligned}
& (s,a_{1})\colon 4,\ (s,a_{2})\colon 2,\ (s,a_{3})\colon 5,\ (a_{1},b_{1})\colon 3,\ (a_{1},b_{2})\colon 6,\\
& (a_{2},b_{1})\colon 7,\ (a_{2},b_{2})\colon 4,\ (a_{2},b_{3})\colon 6,\ (a_{3},b_{2})\colon 2,\ (a_{3},b_{3})\colon 3,\\
& (b_{1},t)\colon 6,\ (b_{2},t)\colon 3,\ (b_{3},t)\colon 2.
\end{aligned}
$$

- Optimal value $z(\mathrm{SPP1})=9$, attained by $s\to a_2\to b_2\to t$ (the network has $7$ paths from $s$ to $t$).

- Used in [Exercise 16.4](../exercises/dp-principles.md#esercizio-16-4).

### Exercises { #sez-sec-cat-spp-es }

- [Exercise 16.4: Shortest path in a layered network](../exercises/dp-principles.md#esercizio-16-4)

## Compatible requests { #sez-sec-cat-req }

!!! nota "Where it is treated"

    - [Exercise 16.5](../exercises/dp-principles.md#esercizio-16-5): Exercise 16.5: indices $q(j)$, recurrence, table, reconstruction, greedy comparison

### Definition { #sez-sec-cat-req-def }

<a id="box-5-def-cat-req"></a>

!!! definizione "Definition 5: Compatible requests"

    A room can host one event at a time. There are $n$ requests: request $j$ occupies the room from time $a_j$ to time $b_j$ and pays $w_j$; two requests are compatible if one ends before (or when) the other starts. The requests are numbered by non-decreasing end time. We want a set of pairwise compatible requests of maximum total payment.

- Defined in [Exercise 16.5](../exercises/dp-principles.md#esercizio-16-5).

- An exercise on designing a recurrence for a new problem, with the index $q(j)$ of the last request compatible with $j$.

- A single-machine selection problem: a subset of jobs (intervals) of maximum weight in which no two overlap.

### Dynamic programming { #sez-sec-cat-req-dynamicprogramming }

- $v(j)=\max\{v(j-1),\;w_j+v(q(j))\}$ for $1\le j\le n$, with $v(0)=0$, where $q(j)$ is the largest $i<j$ compatible with $j$ ([Exercise 16.5](../exercises/dp-principles.md#esercizio-16-5)).

### Constructive heuristics { #sez-sec-cat-req-constructiveheuristics }

- The greedy choice by payment gives only $8$ against the optimal value $12$ on the instance of the exercise ([Exercise 16.5](../exercises/dp-principles.md#esercizio-16-5)).

### Instances { #sez-sec-cat-req-ist }

<strong>Instance REQ1</strong> <a id="sec:cat-ist-req1"></a>

Instance of Exercise 16.5.

$6$ requests (start $a_j$, end $b_j$, payment $w_j$):

$$
\begin{array}{l|cccccc}
\hline
j & 1 & 2 & 3 & 4 & 5 & 6 \\
\hline
a_j & 0 & 1 & 4 & 2 & 5 & 7 \\
b_j & 3 & 5 & 6 & 8 & 9 & 10 \\
w_j & 4 & 6 & 3 & 8 & 5 & 5 \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{REQ1})=12$, attained by requests $\{1,3,6\}$ (greedy by payment: $8$).

- Used in [Exercise 16.5](../exercises/dp-principles.md#esercizio-16-5).

### Exercises { #sez-sec-cat-req-es }

- [Exercise 16.5: A recurrence for a new problem: compatible requests](../exercises/dp-principles.md#esercizio-16-5)
