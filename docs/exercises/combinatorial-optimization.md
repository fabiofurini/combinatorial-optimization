---
title: "Exercises · Combinatorial optimization problems"
---

# Exercises · Combinatorial optimization problems

<div class="info-capitolo" markdown>

**Exercises · Chapter 1** · each solution opens with a click · [:material-book-open-variant: Chapter 1: Combinatorial optimization](../combinatorial-optimization-problems/combinatorial-optimization/index.md) · [:material-file-pdf-box: Exercises, volume 1 (PDF)](../pdf/exercises-1-combinatorial-optimization-problems.pdf)

</div>

<a id="esercizio-1-1"></a>

!!! esercizio "Exercise 1.1: Ground set, feasible solutions and objective"

    We consider the ground set $\mathscr{U}=\{1,\dots,6\}$ with the weights

    $$
    \begin{array}{l|cccccc}
    \hline  & {j=1} & {j=2} & {j=3} & {j=4} & {j=5} & {j=6} \\[1ex]
    \hline {c_j} & {5} & {8} & {6} & {3} & {7} & {4} \\
    \hline
    \end{array}
    $$

    A subset $S\subseteq\mathscr{U}$ is feasible if it contains no two consecutive elements ($j$ and $j+1$), and the objective $f(S)=\sum_{j\in S} c_j$ is to be maximized.

    **Questions**

    1. How many candidate solutions are there? Is $\{1,3,4\}$ feasible? And $\{2,4,6\}$?

    2. Count the feasible subsets, grouped by number of elements.

    3. Find the optimal solution and $z(I)$.

    4. Apply the greedy rule: take the element of largest weight, discard its neighbours, and repeat on the elements left. Give the primal bound and its relative gap with respect to $z(I)$.

??? soluzione "Solution"

    1. The candidates are the $2^6=64$ subsets of $\mathscr{U}$. The subset $\{1,3,4\}$ is not feasible, since it contains $3$ and $4$; the subset $\{2,4,6\}$ is feasible.

    2. A feasible subset of $6$ elements has at most $3$ elements. By enumeration:

        <div class="tabella" markdown="0"><table>
        <tr>
        <th>elements</th>
        <th>feasible subsets</th>
        </tr>
        <tr>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(10\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        </tr>
        <tr>
        <td>total</td>
        <td><span class="arithmatex">\(21\)</span></td>
        </tr>
        </table></div>

        The subsets with $2$ elements are the $\binom{6}{2}=15$ pairs minus the $5$ consecutive pairs: $10$. Only $21$ of the $64$ candidates are feasible.

    3. The feasible subsets with $3$ elements are $\{1,3,5\}$ ($f=18$), $\{1,3,6\}$ ($f=15$), $\{1,4,6\}$ ($f=12$), $\{2,4,6\}$ ($f=15$). A subset with at most $2$ elements has value at most $7+8=15$. Hence the optimal solution is $\tilde S=\{1,3,5\}$, with $z(I)=18$; it is the only optimal solution.

    4. The greedy rule proceeds as follows:

        - we take element $2$ (weight $8$) and discard its neighbours $1, 3$;

        - we take element $5$ (weight $7$) and discard its neighbours $4, 6$;

        It returns $\bar S=\{2,5\}$, of value $15$: a primal bound $\mathrm{LB}=15$. The relative gap with respect to $z(I)$ is $\frac{18-15}{15}=\frac{1}{5}\approx 20.0\%$: taking the heaviest element first forbids two of its neighbours, whose weights together are larger.

    !!! chiave ""

        Only $21$ of the $64$ subsets are feasible; the optimum is $\tilde S=\{1,3,5\}$ with $z(I)=18$, while the greedy rule gives $15$.

<a id="esercizio-1-2"></a>

!!! esercizio "Exercise 1.2: Counting the solutions"

    We count the combinatorial objects of small finite sets.

    - **(a)** The subsets of a set with $6$ elements.

    - **(b)** The orderings and the cyclic orderings of $6$ elements.

    - **(c)** The partitions of the set $\{1,2,3,4,5\}$.

    - **(d)** The assignments of $4$ elements to $2$ labels.

    **Questions**

    1. How many subsets does set (a) have, and how many of them have exactly $2$ elements?

    2. How many orderings of the $6$ elements of (b) are there, how many of them describe the same cyclic ordering, and how many distinct cyclic orderings are there?

    3. Compute the Bell numbers $B(1),\dots,B(5)$ with the recursion of the chapter: how many partitions does set (c) have?

    4. Count, by enumeration, the partitions of set (c), grouped by number of blocks.

    5. How many assignments does (d) have? How many distinct solutions remain if the two labels are interchangeable?

??? soluzione "Solution"

    1. The subsets are $2^6=64$; those with $2$ elements are $\binom{6}{2}=15$.

    2. There are $6!=720$ orderings. A cyclic ordering is described by $6$ orderings, one for every starting element, and by $6$ more read in the opposite direction: $2\cdot 6=12$ orderings each. The distinct cyclic orderings are $\frac{720}{12}=60=\frac{(6-1)!}{2}$.

    3. With $B(0)=1$ and $B(n)=\sum_{k=0}^{n-1}\binom{n-1}{k}B(k)$, each term is a binomial coefficient times a Bell number already computed:

        \begin{align*}
        B(1)&=1\cdot 1=1\\
        B(2)&=1\cdot 1+1\cdot 1=2\\
        B(3)&=1\cdot 1+2\cdot 1+1\cdot 2=5\\
        B(4)&=1\cdot 1+3\cdot 1+3\cdot 2+1\cdot 5=15\\
        B(5)&=1\cdot 1+4\cdot 1+6\cdot 2+4\cdot 5+1\cdot 15=52.
        \end{align*}

        Set (c) has $B(5)=52$ partitions.

    4. By enumeration:

        <div class="tabella" markdown="0"><table>
        <tr>
        <th>blocks</th>
        <th>partitions</th>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(15\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(25\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(10\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        </tr>
        <tr>
        <td>total</td>
        <td><span class="arithmatex">\(52\)</span></td>
        </tr>
        </table></div>

        For example, the $10$ partitions into $4$ blocks put two elements together, and there are $\binom{5}{2}=10$ pairs.

    5. Every element goes to one of the $2$ labels: $2^4=16$ assignments. If the labels are interchangeable, an assignment and the one with the two labels exchanged are the same solution. The assignments with all the elements on one label give $1$ solution (counted twice among the $16$), the other $14$ give $\frac{14}{2}=7$ solutions with two non-empty blocks: $8$ distinct solutions, the partitions of the $4$ elements into at most $2$ blocks.

    !!! chiave ""

        The candidates are $2^n$ subsets, $n!$ orderings, $(n-1)!/2$ cyclic orderings, $B(n)$ partitions and $m^n$ assignments; with interchangeable labels, the assignments become partitions into at most $m$ blocks.

<a id="esercizio-1-3"></a>

!!! esercizio "Exercise 1.3: Brute force and computing time"

    A computer evaluates $10^9$ candidate solutions per second, and we allow one day of computation ($86\,400$ seconds).

    **Questions**

    1. How many candidates can be evaluated in one day?

    2. What is the largest number $n$ of elements for which all the subsets, all the cyclic orderings and all the partitions can be enumerated in one day?

    3. Answer the same question for a computer $1000$ times faster. How many elements does it gain in each case?

??? soluzione "Solution"

    1. $86\,400\cdot 10^9\approx 8.64\cdot 10^{13}$ candidates.

    2. We look for the largest $n$ whose number of candidates does not exceed the budget:

        - subsets: $2^{46}\approx 7.04\cdot 10^{13}\le 8.64\cdot 10^{13}<2^{47}\approx 1.41\cdot 10^{14}$, hence $n=46$;

        - cyclic orderings: $16!/2\approx 1.05\cdot 10^{13}\le 8.64\cdot 10^{13}<17!/2\approx 1.78\cdot 10^{14}$, hence $n=17$;

        - partitions: $B(20)\approx 5.17\cdot 10^{13}\le 8.64\cdot 10^{13}<B(21)\approx 4.75\cdot 10^{14}$, hence $n=20$;

    3. The budget becomes $\approx 8.64\cdot 10^{16}$:

        - subsets: $2^{56}\approx 7.21\cdot 10^{16}\le 8.64\cdot 10^{16}<2^{57}\approx 1.44\cdot 10^{17}$, hence $n=56$;

        - cyclic orderings: $19!/2\approx 6.08\cdot 10^{16}\le 8.64\cdot 10^{16}<20!/2\approx 1.22\cdot 10^{18}$, hence $n=20$;

        - partitions: $B(23)\approx 4.42\cdot 10^{16}\le 8.64\cdot 10^{16}<B(24)\approx 4.46\cdot 10^{17}$, hence $n=23$;

        The faster computer gains $10$ elements for the subsets, $3$ for the partitions and $3$ for the cyclic orderings: a factor $1000$ in speed moves the limit only by a few elements.

    !!! chiave ""

        In one day brute force handles about $46$ elements for the subsets, $20$ for the partitions and $17$ for the cyclic orderings; a computer $1000$ times faster adds only a few elements.

<a id="esercizio-1-4"></a>

!!! esercizio "Exercise 1.4: Primal bound, dual bound and gap"

    We consider the ground set $\mathscr{U}=\{1,\dots,5\}$, the weights $\vet{c}=(4,6,3,5,2)$, the objective $f(S)=\sum_{j\in S}c_j$ to be <strong>minimized</strong>, and the feasible solutions

    $$
    \mathcal{F}=\big\{\{1,2\}, \{1,4\}, \{3,4\}, \{2,3,5\}, \{1,3,5\}, \{2,4,5\}, \{1,2,3,4,5\}\big\}.
    $$

    **Questions**

    1. How many candidate and how many feasible solutions are there?

    2. The solution $\{1,2\}$ is feasible: which bound does it give?

    3. Every feasible subset has at least $2$ elements: which dual bound follows? Compute the absolute and relative gaps.

    4. Improve the dual bound by looking separately at the feasible subsets with $2$ elements and at those with at least $3$ elements. Find an optimal solution and explain why it is optimal.

??? soluzione "Solution"

    1. The candidates are the $2^5=32$ subsets of $\mathscr{U}$; $7$ of them are feasible.

    2. $f(\{1,2\})=4+6=10$ is the value of a feasible solution of a minimization problem, hence a primal bound: $\mathrm{UB}=10$.

    3. A subset with at least $2$ elements weighs at least the two smallest weights: $f(S)\ge 2+3=5$ for every $S\in\mathcal{F}$, so $\mathrm{LB}=5$. The absolute gap is $10-5=5$ and the relative gap, divided by the lower bound, is $\frac{5}{5}\approx 100.0\%$.

    4. The feasible subsets with $2$ elements are $\{1,2\}$ ($f=10$), $\{1,4\}$ ($f=9$), $\{3,4\}$ ($f=8$): their minimum is $8$. A subset with at least $3$ elements weighs at least $2+3+4=9$. Hence $\mathrm{LB}=8$. The feasible solution $\{3,4\}$ has value $3+5=8=\mathrm{LB}$: the gap is zero, so it is optimal and $z(I)=8$.

    !!! chiave ""

        $\{1,2\}$ gives $\mathrm{UB}=10$, the cardinality argument gives $\mathrm{LB}=5$, and the argument by cases gives $\mathrm{LB}=8$, attained by $\{3,4\}$: $z(I)=8$.
