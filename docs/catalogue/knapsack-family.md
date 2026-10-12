---
title: "Knapsack family"
---

# Knapsack family

<div class="info-capitolo" markdown>

**Catalogue of combinatorial problems** · [:material-file-pdf-box: Catalogue of problems (PDF)](../pdf/combinatorial-problem-catalogue.pdf)

</div>

<a id="sec:cat-pagina-knapsack-family"></a>

## Rod-Cutting Problem { #sez-sec-cat-rcp }

!!! nota "Where it is treated"

    - [Chapter 16 «Principles of dynamic programming»](../dynamic-programming/dp-principles.md#164-the-dp-algorithms-of-this-module): Summary table of the DP algorithms: state $v(\ell)$, $\Theta(n^2)$ steps

    - [Chapter 18 «Rod cutting and coin change»](../dynamic-programming/dp-rod-cutting-coin-change.md#181-a-dp-algorithm-for-the-rod-cutting-problem): Definition, encoding of the solutions, two DP algorithms

    - [Exercise 18.1](../exercises/dp-rod-cutting-coin-change.md#esercizio-18-1): Exercises 18.1–18.5: both DP algorithms by hand

### Definition { #sez-sec-cat-rcp-def }

<a id="box-1-def-cat-rcp"></a>

!!! definizione "Definition 1: Rod-Cutting Problem"

    Given:

    1. a rod of <em>length</em> $n \in \Z_{\ge 1}$,

    2. a set $\{1,2,\dots,n\}$ of $n$ possible piece lengths,

    3. for each piece length $\ell \in \{1,2,\dots,n\}$, a <em>profit</em> $p_\ell \in \Z_{\ge 1}$,

    the <strong>Rod-Cutting Problem</strong> (RCP) asks to decide how many copies of each piece length to cut, so that the total length of the obtained pieces is equal to the rod length, and the total profit of the obtained pieces is maximized.

- Defined in [Chapter 18 «Rod cutting and coin change»](../dynamic-programming/dp-rod-cutting-coin-change.md#box-1-defRCP).

- It models the cutting of a stock piece into smaller pieces with prices, each length available any number of times.

- A solution is the integer vector $(x_1,\dots,x_n)$ of the numbers of pieces, with $\sum_{\ell=1}^{n} \ell\, x_\ell = n$; the $2^{n-1}$ cutting patterns are more than these vectors.

- An unbounded knapsack with one item type per piece length $\ell$, weight $\ell$, profit $p_\ell$ and capacity $n$, where the total length must be exactly $n$.

### Bounds and complexity { #sez-sec-cat-rcp-prop }

- <strong>Complexity</strong>: Solved in $\Theta(n^2)$ steps by DP, polynomial because the input has $n$ profits.

### Dynamic programming { #sez-sec-cat-rcp-dynamicprogramming }

- First recurrence on the rod length: $v(\ell)=\max\{p_j+v(\ell-j) : j\in\{1,2,\dots,\ell\}\}$ for $1\le\ell\le n$, with $v(0)=0$ ([Chapter 18 «Rod cutting and coin change»](../dynamic-programming/dp-rod-cutting-coin-change.md#1812-a-first-dp-algorithm)).

- The vector ${s}$ of the first pieces gives an optimal solution for every rod length $\ell\le n$ at no extra cost ([Chapter 18 «Rod cutting and coin change»](../dynamic-programming/dp-rod-cutting-coin-change.md#box-17-texrcpsolvector)).

- Second recurrence on pairs (largest piece length, rod length): $v(j,\ell)=\max\{v(j-1,\ell),\, p_j+v(j,\ell-j)\}$ if $1\le j\le\ell$, with $v(j,0)=0$ and $v(0,\ell)=-\infty$ for $\ell>0$ ([Chapter 18 «Rod cutting and coin change»](../dynamic-programming/dp-rod-cutting-coin-change.md#1813-a-second-dp-algorithm)).

- Both bottom-up algorithms take $S(n)=\Theta(n^2)$ steps, polynomial because the input has $n$ profits ([Chapter 18 «Rod cutting and coin change»](../dynamic-programming/dp-rod-cutting-coin-change.md#1815-in-summary)).

<strong>Instances</strong> <a id="sec:cat-rcp-ist"></a>

<strong>Instance RCP1</strong> <a id="sec:cat-ist-rcp1"></a>

Reference instance of [Example 18.1](../dynamic-programming/dp-rod-cutting-coin-change.md#box-2-texexpbox1).

Rod of length $n=4$, prices:

$$
\begin{array}{l|cccc}
\hline
i & 1 & 2 & 3 & 4 \\
\hline
p_i & 1 & 5 & 8 & 9 \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{RCP1})=10$, attained by $(x_1,x_2,x_3,x_4)=(0,2,0,0)$: two pieces of length $2$.

- Used in [Example 18.1](../dynamic-programming/dp-rod-cutting-coin-change.md#box-2-texexpbox1), [Example 18.2 (enumeration)](../dynamic-programming/dp-rod-cutting-coin-change.md#box-3-texrcpenumeration), [Execution of the first DP algorithm](../dynamic-programming/dp-rod-cutting-coin-change.md#box-15-texrcpbu), [Execution of the second DP algorithm](../dynamic-programming/dp-rod-cutting-coin-change.md#box-33-texrcpaltbu).

<strong>Instance RCP2</strong> <a id="sec:cat-ist-rcp2"></a>

Instance of Exercise 18.1.

Rod of length $n=6$, prices:

$$
\begin{array}{l|cccccc}
\hline
i & 1 & 2 & 3 & 4 & 5 & 6 \\
\hline
p_i & 2 & 5 & 7 & 8 & 10 & 13 \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{RCP2})=15$, attained by $(0,3,0,0,0,0)$.

- Used in [Exercise 18.1](../exercises/dp-rod-cutting-coin-change.md#esercizio-18-1).

<strong>Instance RCP3</strong> <a id="sec:cat-ist-rcp3"></a>

Instance of Exercise 18.2.

Rod of length $n=5$, prices:

$$
\begin{array}{l|ccccc}
\hline
i & 1 & 2 & 3 & 4 & 5 \\
\hline
p_i & 1 & 4 & 6 & 8 & 9 \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{RCP3})=10$, attained by $(0,1,1,0,0)$.

- Used in [Exercise 18.2](../exercises/dp-rod-cutting-coin-change.md#esercizio-18-2).

<strong>Instance RCP4</strong> <a id="sec:cat-ist-rcp4"></a>

Instance of Exercise 18.3.

Rod of length $n=5$, prices:

$$
\begin{array}{l|ccccc}
\hline
i & 1 & 2 & 3 & 4 & 5 \\
\hline
p_i & 3 & 5 & 8 & 9 & 10 \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{RCP4})=15$, attained by $(5,0,0,0,0)$.

- Used in [Exercise 18.3](../exercises/dp-rod-cutting-coin-change.md#esercizio-18-3).

<strong>Instance RCP5</strong> <a id="sec:cat-ist-rcp5"></a>

Instance of Exercise 18.4.

Rod of length $n=6$, prices:

$$
\begin{array}{l|cccccc}
\hline
i & 1 & 2 & 3 & 4 & 5 & 6 \\
\hline
p_i & 2 & 6 & 7 & 11 & 13 & 17 \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{RCP5})=18$, attained by $(0,3,0,0,0,0)$.

- Used in [Exercise 18.4](../exercises/dp-rod-cutting-coin-change.md#esercizio-18-4).

<strong>Instance RCP6</strong> <a id="sec:cat-ist-rcp6"></a>

Instance of Exercise 18.5.

Rod of length $n=6$, prices:

$$
\begin{array}{l|cccccc}
\hline
i & 1 & 2 & 3 & 4 & 5 & 6 \\
\hline
p_i & 1 & 5 & 8 & 9 & 12 & 14 \\
\hline
\end{array}
$$

- Optimal value $z(\mathrm{RCP6})=16$, attained by $(0,0,2,0,0,0)$.

- Used in [Exercise 18.5](../exercises/dp-rod-cutting-coin-change.md#esercizio-18-5).

### Exercises { #sez-sec-cat-rcp-es }

- [Exercise 20.1: Rod Cutting Problem](../exercises/dp-rod-cutting-coin-change.md#esercizio-18-1)

- [Exercise 20.2: Rod Cutting Problem](../exercises/dp-rod-cutting-coin-change.md#esercizio-18-2)

- [Exercise 20.3: Rod Cutting Problem](../exercises/dp-rod-cutting-coin-change.md#esercizio-18-3)

- [Exercise 20.4: Rod Cutting Problem](../exercises/dp-rod-cutting-coin-change.md#esercizio-18-4)

- [Exercise 20.5: Rod Cutting Problem](../exercises/dp-rod-cutting-coin-change.md#esercizio-18-5)

## Coin Change Problem { #sez-sec-cat-ccp }

!!! nota "Where it is treated"

    - [Chapter 16 «Principles of dynamic programming»](../dynamic-programming/dp-principles.md#164-the-dp-algorithms-of-this-module): Summary table of the DP algorithms: state $v(k)$, $\Theta(nc)$ steps

    - [Chapter 18 «Rod cutting and coin change»](../dynamic-programming/dp-rod-cutting-coin-change.md#182-a-dp-algorithm-for-the-coin-change-problem): Definition, encoding of the solutions, DP algorithm

    - [Exercise 18.6](../exercises/dp-rod-cutting-coin-change.md#esercizio-18-6): Exercises 18.6–18.10: the DP algorithm by hand, one infeasible instance

### Definition { #sez-sec-cat-ccp-def }

<a id="box-2-def-cat-ccp"></a>

!!! definizione "Definition 2: Coin Change Problem"

    Given:

    1. a vector $w \in \Z_{\ge 1}^n$ of $n$ <em>denominations</em>, each available in unlimited supply,

    2. an integer <em>amount of change</em> $c \in \Z_{\ge 0}$ to return,

    the <strong>Coin Change Problem</strong> (CCP) asks to decide how many coins of each denomination to use so that their total value is exactly equal to $c$, and the total number of coins used is minimized. If no combination of coins returns exactly $c$, the instance is <em>infeasible</em>.

- Defined in [Chapter 18 «Rod cutting and coin change»](../dynamic-programming/dp-rod-cutting-coin-change.md#box-37-defCCP).

- It models returning a given amount of change with the fewest coins, each denomination available in unlimited supply.

- A solution is the integer vector $(x_1,\dots,x_n)$ with $\sum_{j=1}^{n} w_j x_j = c$; an instance can be infeasible, for example when every denomination is even and $c$ is odd.

- Like the UKP it has unlimited copies of every item type, but it asks for exactly $c$ and minimizes the number of coins, while the UKP asks for at most $c$ and maximizes the profit.

### Bounds and complexity { #sez-sec-cat-ccp-prop }

- <strong>Complexity</strong>: Solved in $\Theta(nc)$ steps by DP, which is pseudo-polynomial.

### Dynamic programming { #sez-sec-cat-ccp-dynamicprogramming }

- Recurrence on the amount of change: $v(0)=0$, $v(k)=+\infty$ if $w_j>k$ for every $j$, otherwise $v(k)=\min_{j:\,w_j\le k}\{1+v(k-w_j)\}$ ([Chapter 18 «Rod cutting and coin change»](../dynamic-programming/dp-rod-cutting-coin-change.md#1822-a-dp-algorithm)).

- The array $s[k]$ stores the index of the denomination of the first coin; the reconstruction is done only if $v[c]<+\infty$ ([Chapter 18 «Rod cutting and coin change»](../dynamic-programming/dp-rod-cutting-coin-change.md#box-52-texccpsolvector)).

- The bottom-up algorithm takes $S(n,c)=\Theta(nc)$ steps, which is pseudo-polynomial ([Chapter 18 «Rod cutting and coin change»](../dynamic-programming/dp-rod-cutting-coin-change.md#1824-in-summary)).

<strong>Instances</strong> <a id="sec:cat-ccp-ist"></a>

<strong>Instance CCP1</strong> <a id="sec:cat-ist-ccp1"></a>

Reference instance of [Example 18.15](../dynamic-programming/dp-rod-cutting-coin-change.md#box-38-texccpex1).

Coin values $\{2, 3, 5\}$, amount $S=10$.

- Optimal value $z(\mathrm{CCP1})=2$, attained by $(x_1,x_2,x_3)=(0,0,2)$.

- Used in [Example 18.15](../dynamic-programming/dp-rod-cutting-coin-change.md#box-38-texccpex1), [Execution of the DP algorithm](../dynamic-programming/dp-rod-cutting-coin-change.md#box-50-texccpbu), [Reconstruction of an optimal solution](../dynamic-programming/dp-rod-cutting-coin-change.md#box-52-texccpsolvector).

<strong>Instance CCP2</strong> <a id="sec:cat-ist-ccp2"></a>

Instance of Exercise 18.6.

Coin values $\{1, 4\}$, amount $S=6$.

- Optimal value $z(\mathrm{CCP2})=3$, attained by $(2,1)$.

- Used in [Exercise 18.6](../exercises/dp-rod-cutting-coin-change.md#esercizio-18-6).

<strong>Instance CCP3</strong> <a id="sec:cat-ist-ccp3"></a>

Instance of Exercise 18.7.

Coin values $\{3, 5\}$, amount $S=11$.

- Optimal value $z(\mathrm{CCP3})=3$, attained by $(2,1)$.

- Used in [Exercise 18.7](../exercises/dp-rod-cutting-coin-change.md#esercizio-18-7).

<strong>Instance CCP4</strong> <a id="sec:cat-ist-ccp4"></a>

Infeasible instance of Exercise 18.8.

Coin values $\{2, 4\}$, amount $S=7$.

- The instance is infeasible, $z(\mathrm{CCP4})=+\infty$.

- Used in [Exercise 18.8](../exercises/dp-rod-cutting-coin-change.md#esercizio-18-8).

<strong>Instance CCP5</strong> <a id="sec:cat-ist-ccp5"></a>

Instance of Exercise 18.9.

Coin values $\{3, 7\}$, amount $S=12$.

- Optimal value $z(\mathrm{CCP5})=4$, attained by $(4,0)$.

- Used in [Exercise 18.9](../exercises/dp-rod-cutting-coin-change.md#esercizio-18-9).

<strong>Instance CCP6</strong> <a id="sec:cat-ist-ccp6"></a>

Instance of Exercise 18.10.

Coin values $\{2, 3, 7\}$, amount $S=9$.

- Optimal value $z(\mathrm{CCP6})=2$, attained by $(1,0,1)$.

- Used in [Exercise 18.10](../exercises/dp-rod-cutting-coin-change.md#esercizio-18-10).

### Exercises { #sez-sec-cat-ccp-es }

- [Exercise 20.6: Coin Change Problem](../exercises/dp-rod-cutting-coin-change.md#esercizio-18-6)

- [Exercise 20.7: Coin Change Problem](../exercises/dp-rod-cutting-coin-change.md#esercizio-18-7)

- [Exercise 20.8: Coin Change Problem (infeasible instance)](../exercises/dp-rod-cutting-coin-change.md#esercizio-18-8)

- [Exercise 20.9: Coin Change Problem](../exercises/dp-rod-cutting-coin-change.md#esercizio-18-9)

- [Exercise 20.10: Coin Change Problem](../exercises/dp-rod-cutting-coin-change.md#esercizio-18-10)
