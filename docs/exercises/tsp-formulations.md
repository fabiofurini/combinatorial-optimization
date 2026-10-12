---
title: "Exercises · Formulations of the travelling salesman problem"
---

# Exercises · Formulations of the travelling salesman problem

<div class="info-capitolo" markdown>

**Exercises · Chapter 13** · each solution opens with a click · [:material-book-open-variant: Chapter 13: TSP](../formulations/tsp-formulations.md) · [:material-file-pdf-box: Exercises, volume 2 (PDF)](../pdf/exercises-2-formulations.pdf)

</div>

<a id="esercizio-13-1"></a>

!!! esercizio "Exercise 13.1: The MTZ model of the TSP (1)"

    We consider a TSP instance with $\mathscr{V}=\{1,\dots,4\}$ ($n=4$ cities) and the symmetric distance matrix

    $$
    \begin{array}{c|cccc}
    \hline
    d_{ij} & 1 & 2 & 3 & 4\\
    \hline
    1 & - & 3 & 5 & 4\\
    2 & 3 & - & 4 & 6\\
    3 & 5 & 4 & - & 2\\
    4 & 4 & 6 & 2 & -\\
    \hline
    \end{array}
    $$

    **Questions**

    1. Count the variables and the constraints (besides the domains) of the $\ILP_{\TSP}^{\mathrm{MTZ}}$ model for $n=4$.

    2. Write the $\ILP_{\TSP}^{\mathrm{MTZ}}$ model for this instance.

    3. List the distinct tours with their lengths, and give the optimal tour $\sigma$.

    4. Write the values of the variables $x_{ij}$ and $u_i$ that represent $\sigma$, and verify the constraints (MTZ) one by one.

    5. Solve the LP relaxation $\LP_{\TSP}^{\mathrm{MTZ}}$ with Gurobi and compare its value with the optimal value.

??? soluzione "Solution"

    1. There are $n(n-1)=12$ binary variables $x_{ij}$ and $n-1=3$ continuous variables $u_i$. There are $2n=8$ degree constraints and $(n-1)(n-2)=6$ constraints (MTZ), so $14$ linear constraints.

    2. With $A=\{(i,j): i,j\in\mathscr{V},~i\neq j\}$ the model is:

        \begin{align*}
        \min~~ & 3x_{12} + 5x_{13} + 4x_{14} + 3x_{21} + 4x_{23} + 6x_{24} \\[0.4ex]
        & \qquad + 5x_{31} + 4x_{32} + 2x_{34} + 4x_{41} + 6x_{42} + 2x_{43} \\[0.4ex]
        \text{subject to}~~ & x_{12} + x_{13} + x_{14} = 1 \\[0.4ex]
        & x_{21} + x_{23} + x_{24} = 1 \\[0.4ex]
        & x_{31} + x_{32} + x_{34} = 1 \\[0.4ex]
        & x_{41} + x_{42} + x_{43} = 1 \\[0.4ex]
        & x_{21} + x_{31} + x_{41} = 1 \\[0.4ex]
        & x_{12} + x_{32} + x_{42} = 1 \\[0.4ex]
        & x_{13} + x_{23} + x_{43} = 1 \\[0.4ex]
        & x_{14} + x_{24} + x_{34} = 1 \\[0.4ex]
        & u_2 - u_3 + 3x_{23} \le 2 \\[0.4ex]
        & u_2 - u_4 + 3x_{24} \le 2 \\[0.4ex]
        & u_3 - u_2 + 3x_{32} \le 2 \\[0.4ex]
        & u_3 - u_4 + 3x_{34} \le 2 \\[0.4ex]
        & u_4 - u_2 + 3x_{42} \le 2 \\[0.4ex]
        & u_4 - u_3 + 3x_{43} \le 2 \\[0.4ex]
        & x_{ij} \in \{0,1\}, ~~ (i,j) \in A \\[0.4ex]
        & 1 \le u_i \le 3, ~~ i \in \{2,\dots,4\}
        \end{align*}

    3. Starting from city $1$, and counting each tour once (one direction), the distinct tours are $\frac{(n-1)!}{2}=3$:

        <div class="tabella" markdown="0"><table>
        <tr>
        <th>tour</th>
        <th>length</th>
        </tr>
        <tr>
        <td><span class="arithmatex">\((1,2,3,4)\)</span></td>
        <td><span class="arithmatex">\(3+4+2+4=13\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\((1,2,4,3)\)</span></td>
        <td><span class="arithmatex">\(3+6+2+5=16\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\((1,3,2,4)\)</span></td>
        <td><span class="arithmatex">\(5+4+6+4=19\)</span></td>
        </tr>
        </table></div>

        The optimal tour is $\sigma=(1,2,3,4)$, of length $L(\sigma)=13$.

    4. The tour uses the arcs

        $$
        x_{12}=1,~~x_{23}=1,~~x_{34}=1,~~x_{41}=1
        $$

        and all the other $x_{ij}$ are $0$. The positions after city $1$ are $u_2=1$, $u_3=2$, $u_4=3$. The constraints (MTZ) give:

        - $(i,j)=(2,3)$: $1-2+3\cdot1=2\le 2$

        - $(i,j)=(2,4)$: $1-3+3\cdot0=-2\le 2$

        - $(i,j)=(3,2)$: $2-1+3\cdot0=1\le 2$

        - $(i,j)=(3,4)$: $2-3+3\cdot1=2\le 2$

        - $(i,j)=(4,2)$: $3-1+3\cdot0=2\le 2$

        - $(i,j)=(4,3)$: $3-2+3\cdot0=1\le 2$

        All of them hold; the selected arcs $(i,j)$ with $i,j\neq 1$ hold with equality.

    5. Gurobi gives $z(\LP_{\TSP}^{\mathrm{MTZ}})=12$, against the optimal value $13$: the relaxation leaves a gap of $1$.

<a id="esercizio-13-2"></a>

!!! esercizio "Exercise 13.2: The DFJ model of the TSP (1)"

    We consider a TSP instance with $\mathscr{V}=\{1,\dots,4\}$ ($n=4$ cities) and the symmetric distance matrix

    $$
    \begin{array}{c|cccc}
    \hline
    d_{ij} & 1 & 2 & 3 & 4\\
    \hline
    1 & - & 3 & 5 & 4\\
    2 & 3 & - & 4 & 6\\
    3 & 5 & 4 & - & 2\\
    4 & 4 & 6 & 2 & -\\
    \hline
    \end{array}
    $$

    **Questions**

    1. Count the subtour elimination constraints of the $\ILP_{\TSP}^{\mathrm{DFJ}}$ model for $n=4$, and write them.

    2. The arcs $(1,2)$, $(2,1)$, $(3,4)$, $(4,3)$ satisfy the degree constraints. Find the subtour elimination constraint they violate.

    3. Do the same for the arcs $(1,3)$, $(3,1)$, $(2,4)$, $(4,2)$, which form two subtours both of length $22$.

    4. Solve with Gurobi the assignment relaxation (degree constraints only), the relaxation $\LP_{\TSP}^{\mathrm{DFJ}}$ and the model $\ILP_{\TSP}^{\mathrm{DFJ}}$, and compare the values.

??? soluzione "Solution"

    1. The sets are the subsets $S\subseteq\{2,3,4\}$ with $|S|\ge 2$: there are $2^{n-1}-n=4$ of them. The constraints are

        \begin{align*}
        S=\{2,3\}:~~ & x_{23} + x_{32} \le 1 \\
        S=\{2,4\}:~~ & x_{24} + x_{42} \le 1 \\
        S=\{3,4\}:~~ & x_{34} + x_{43} \le 1 \\
        S=\{2,3,4\}:~~ & x_{23} + x_{24} + x_{32} + x_{34} + x_{42} + x_{43} \le 2
        \end{align*}

    2. The arcs form the subtours $1\to 2\to 1$ and $3\to 4\to 3$, of total length $10$. The subtour on $\{3,4\}$ does not contain city $1$: for $S=\{3,4\}$ the constraint reads $x_{34}+x_{43}=2>1$. The other three constraints hold, for instance $S=\{2,3,4\}$ gives $0+0+1+0+1+0=2\le 2$.

    3. The arcs form $1\to 3\to 1$ and $2\to 4\to 2$. The subtour without city $1$ is on $\{2,4\}$: $x_{24}+x_{42}=2>1$. One set $S$ is enough for every solution with subtours, because one of the subtours never contains city $1$.

    4. Gurobi gives the assignment relaxation $10$, $z(\LP_{\TSP}^{\mathrm{DFJ}})=13$ and $z(\ILP_{\TSP}^{\mathrm{DFJ}})=13$, attained by the tour $(1,2,3,4)$. The subtour elimination constraints raise the bound from $10$ to $13$, which is the optimal value.

<a id="esercizio-13-3"></a>

!!! esercizio "Exercise 13.3: Feasible solutions of the TSP models (1)"

    We consider a TSP instance with $\mathscr{V}=\{1,\dots,5\}$ ($n=5$ cities) and the symmetric distance matrix

    $$
    \begin{array}{c|ccccc}
    \hline
    d_{ij} & 1 & 2 & 3 & 4 & 5\\
    \hline
    1 & - & 2 & 3 & 3 & 7\\
    2 & 2 & - & 4 & 12 & 6\\
    3 & 3 & 4 & - & 6 & 11\\
    4 & 3 & 12 & 6 & - & 5\\
    5 & 7 & 6 & 11 & 5 & -\\
    \hline
    \end{array}
    $$

    Consider the following candidate solutions (the arcs not listed have $x_{ij}=0$):

    - **(a)** the arcs of the tour $(1,3,2,5,4)$, with $u_2=2$, $u_3=1$, $u_4=4$, $u_5=3$;

    - **(b)** the arcs of the same tour, with $u_2=1,~u_3=2,~u_4=3,~u_5=4$;

    - **(c)** the arcs $(1,2)$, $(2,3)$, $(3,1)$, $(4,5)$, $(5,4)$, with $u_2=1$, $u_3=2$, $u_4=3$, $u_5=4$;

    - **(d)** $x_{ij}=\frac{1}{4}$ for every arc $(i,j)$, with $u_2=u_3=u_4=u_5=1$.

    **Questions**

    1. Check the degree constraints for every candidate.

    2. For every candidate, decide whether it satisfies the constraints (MTZ) with the given positions, and whether its arc variables satisfy the subtour elimination constraints. Name a violated constraint when there is one.

    3. Which candidates represent a feasible solution of the integer models? For candidate (c), show that no choice of the positions $u_i$ satisfies the constraints (MTZ).

    4. Give the objective value of candidate (d), and compare it with the optimal value and with $z(\LP_{\TSP}^{\mathrm{MTZ}})$ (use Gurobi).

??? soluzione "Solution"

    1. In (a), (b) and (c) every city has one outgoing and one incoming arc. In (d) every city has $4$ outgoing and $4$ incoming arcs of value $\frac{1}{4}$: both sums are $1$. All the degree constraints hold.

    2. - **(a)** The arcs form a tour, and the positions are those of the tour: every selected arc $(i,j)$ with $i,j\neq 1$ gives $u_j=u_i+1$, and every constraint holds. The subtour elimination constraints hold too.

        - **(b)** The arcs are the same tour, so the subtour elimination constraints hold. The positions are wrong: the arc $(3,2)$ is selected and $u_3-u_2+4x_{32}=2-1+4=5>3$.

        - **(c)** With the given positions the arc $(5,4)$ gives $u_5-u_4+4x_{54}=4-3+4=5>3$. The subtour on $S=\{4,5\}$ violates $x_{45}+x_{54}\le 1$, since $x_{45}+x_{54}=2$.

        - **(d)** Every arc has $x_{ij}=\frac{1}{4}$, so with $u_i=1$ every constraint (MTZ) reads $4\cdot\frac{1}{4}=1\le 3$. A set $S$ contains $|S|(|S|-1)$ arcs, of total value $\frac{|S|(|S|-1)}{4}\le |S|-1$ since $|S|\le 4$: all the subtour elimination constraints hold.

    3. Only (a) and (b) are integer and form a tour. Candidate (a) is feasible for both integer models; the arcs of (b) are feasible for $\ILP_{\TSP}^{\mathrm{DFJ}}$, and become feasible for $\ILP_{\TSP}^{\mathrm{MTZ}}$ with the positions of (a). Candidate (d) is feasible only for the two relaxations.

        For (c), the selected arcs $(4,5)$ and $(5,4)$ force $u_5\ge u_4+1$ and $u_4\ge u_5+1$. Summing gives $0\ge 2$, which is impossible: no positions work, because the subtour $4\to 5\to 4$ does not contain city $1$.

    4. The value of (d) is one quarter of the sum of $d_{ij}$ over all the arcs, that is $\frac{2\cdot 59}{4}=\frac{59}{2}$. It is larger than the optimal value $L((1,3,2,5,4))=21$, so it does not improve the bound $z(\LP_{\TSP}^{\mathrm{MTZ}})=20$ given by Gurobi; it shows only that the relaxations contain fractional points far from every tour.

<a id="esercizio-13-4"></a>

!!! esercizio "Exercise 13.4: Comparing the TSP relaxations (1)"

    We consider a TSP instance with $\mathscr{V}=\{1,\dots,5\}$ ($n=5$ cities) and the symmetric distance matrix

    $$
    \begin{array}{c|ccccc}
    \hline
    d_{ij} & 1 & 2 & 3 & 4 & 5\\
    \hline
    1 & - & 5 & 12 & 2 & 9\\
    2 & 5 & - & 2 & 8 & 12\\
    3 & 12 & 2 & - & 9 & 9\\
    4 & 2 & 8 & 9 & - & 5\\
    5 & 9 & 12 & 9 & 5 & -\\
    \hline
    \end{array}
    $$

    **Questions**

    1. Count the variables and the constraints (besides the domains) of the three relaxations: degree constraints only, $\LP_{\TSP}^{\mathrm{MTZ}}$ and $\LP_{\TSP}^{\mathrm{DFJ}}$.

    2. Solve the three relaxations with Gurobi and report their optimal solutions.

    3. Find the optimal tour by enumerating the $12$ distinct tours, and compute the gap $\frac{z-\LB}{\LB}$ of each bound.

    4. Show that the optimal solution of $\LP_{\TSP}^{\mathrm{MTZ}}$ found by Gurobi lies in the weak region of the chapter, and that it violates subtour elimination constraints.

??? soluzione "Solution"

    1. All three use the $20$ arc variables; the MTZ relaxation adds the $4$ positions. The constraints are:

        <div class="tabella" markdown="0"><table>
        <tr>
        <th>relaxation</th>
        <th>variables</th>
        <th>constraints</th>
        </tr>
        <tr>
        <td>degree constraints only</td>
        <td><span class="arithmatex">\(20\)</span></td>
        <td><span class="arithmatex">\(10\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(\LP_{\TSP}^{\mathrm{MTZ}}\)</span></td>
        <td><span class="arithmatex">\(20+4\)</span></td>
        <td><span class="arithmatex">\(10+12\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(\LP_{\TSP}^{\mathrm{DFJ}}\)</span></td>
        <td><span class="arithmatex">\(20\)</span></td>
        <td><span class="arithmatex">\(10+11\)</span></td>
        </tr>
        </table></div>

    2. - Degree constraints only: value $20$, with $x_{15}=x_{23}=x_{32}=x_{41}=x_{54}=1$: the subtours $1\to 5\to 4\to 1$, $2\to 3\to 2$.

        - $\LP_{\TSP}^{\mathrm{MTZ}}$: value $\frac{43}{2}$, with $x_{14}=x_{23}=x_{32}=x_{45}=\frac{3}{4},~~x_{51}=\frac{1}{2},~~x_{12}=x_{21}=x_{35}=x_{41}=x_{53}=x_{54}=\frac{1}{4}$ and $u_2=u_3=u_4=u_5=1$.

        - $\LP_{\TSP}^{\mathrm{DFJ}}$: value $23$, with $x_{12}=x_{23}=x_{35}=x_{41}=x_{54}=1$, which is the tour $(1,2,3,5,4)$.

    3. The optimal tour is $\sigma=(1,2,3,5,4)$, of length $L(\sigma)=23$. The gaps are:

        <div class="tabella" markdown="0"><table>
        <tr>
        <th>bound</th>
        <th>value</th>
        <th>gap from <span class="arithmatex">\(23\)</span></th>
        </tr>
        <tr>
        <td>degree constraints only</td>
        <td><span class="arithmatex">\(20\)</span></td>
        <td><span class="arithmatex">\(15.0\%\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(\LP_{\TSP}^{\mathrm{MTZ}}\)</span></td>
        <td><span class="arithmatex">\(\frac{43}{2}\)</span></td>
        <td><span class="arithmatex">\(7.0\%\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(\LP_{\TSP}^{\mathrm{DFJ}}\)</span></td>
        <td><span class="arithmatex">\(23\)</span></td>
        <td><span class="arithmatex">\(0.0\%\)</span></td>
        </tr>
        </table></div>

        The DFJ relaxation closes the gap on this instance.

    4. Every arc $(i,j)$ with $i,j\neq 1$ has $x_{ij}\le\frac{3}{4}=\frac{n-2}{n-1}$, and all the positions are $1$: this is the weak region of the chapter, where every constraint (MTZ) reads $4x_{ij}\le 3$. For $S=\{2,3\}$ the arcs inside $S$ have total value $\frac{3}{2}>1$: the subtour elimination constraint of $S$ is violated, and the DFJ relaxation cuts this point off.

<a id="esercizio-13-5"></a>

!!! esercizio "Exercise 13.5: Adding subtour elimination constraints (1)"

    We consider a TSP instance with $\mathscr{V}=\{1,\dots,5\}$ ($n=5$ cities) and the symmetric distance matrix

    $$
    \begin{array}{c|ccccc}
    \hline
    d_{ij} & 1 & 2 & 3 & 4 & 5\\
    \hline
    1 & - & 4 & 10 & 2 & 8\\
    2 & 4 & - & 11 & 2 & 5\\
    3 & 10 & 11 & - & 4 & 2\\
    4 & 2 & 2 & 4 & - & 2\\
    5 & 8 & 5 & 2 & 2 & -\\
    \hline
    \end{array}
    $$

    We start from the degree constraints only, and we add the subtour elimination constraints one at a time, only when they are violated.

    **Questions**

    1. Solve the relaxation with the degree constraints only (Gurobi), and describe its optimal solution.

    2. Add the subtour elimination constraint of the subtour that does not contain city $1$, solve again and repeat, until the solution is a tour. Give the value of each relaxation.

    3. Compute the optimal value by enumeration and the gap $\frac{z-\LB}{\LB}$ of each relaxation solved, together with the MTZ relaxation.

??? soluzione "Solution"

    1. Gurobi gives value $12$ with $x_{14}=1$, $x_{21}=1$, $x_{35}=1$, $x_{42}=1$, $x_{53}=1$. The arcs form the subtours $1\to 4\to 2\to 1$ and $3\to 5\to 3$.  It satisfies the degree constraints but it is not a tour: the iterations below start from this solution.

    2. \*\*Iteration 1\*\*<br> Gurobi gives value $12$ with $x_{14}=1$, $x_{21}=1$, $x_{35}=1$, $x_{42}=1$, $x_{53}=1$. The arcs form the subtours $1\to 4\to 2\to 1$ and $3\to 5\to 3$. The subtour on $S=\{3,5\}$ violates its constraint, which we add:

        $$
        x_{35} + x_{53}\le 1.
        $$

        \*\*Iteration 2\*\*<br> Gurobi gives value $16$ with $x_{12}=1$, $x_{21}=1$, $x_{34}=1$, $x_{45}=1$, $x_{53}=1$. The arcs form the subtours $1\to 2\to 1$ and $3\to 4\to 5\to 3$. The subtour on $S=\{3,4,5\}$ violates its constraint, which we add:

        $$
        x_{34} + x_{35} + x_{43} + x_{45} + x_{53} + x_{54}\le 2.
        $$

        \*\*Iteration 3\*\*<br> Gurobi gives value $17$ with $x_{12}=1$, $x_{25}=1$, $x_{34}=1$, $x_{41}=1$, $x_{53}=1$. The arcs form the tour $(1,2,5,3,4)$. No subtour elimination constraint is violated, and the procedure stops.

    3. Enumeration gives the optimal tour $(1,2,5,3,4)$, of length $17$, which is the tour found at the last iteration. Gurobi gives $z(\LP_{\TSP}^{\mathrm{MTZ}})=14$. The gaps are:

        <div class="tabella" markdown="0"><table>
        <tr>
        <th>relaxation</th>
        <th>value</th>
        <th>gap from <span class="arithmatex">\(17\)</span></th>
        </tr>
        <tr>
        <td>degree constraints only</td>
        <td><span class="arithmatex">\(12\)</span></td>
        <td><span class="arithmatex">\(41.7\%\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(\LP_{\TSP}^{\mathrm{MTZ}}\)</span></td>
        <td><span class="arithmatex">\(14\)</span></td>
        <td><span class="arithmatex">\(21.4\%\)</span></td>
        </tr>
        <tr>
        <td>with <span class="arithmatex">\(1\)</span> subtour elimination constraint</td>
        <td><span class="arithmatex">\(16\)</span></td>
        <td><span class="arithmatex">\(6.2\%\)</span></td>
        </tr>
        <tr>
        <td>with <span class="arithmatex">\(2\)</span> subtour elimination constraints</td>
        <td><span class="arithmatex">\(17\)</span></td>
        <td><span class="arithmatex">\(0.0\%\)</span></td>
        </tr>
        </table></div>

        Two subtour elimination constraints, out of the $11$ of the DFJ model, are enough to close the gap.
