---
title: "Principles of dynamic programming"
---

# Principles of dynamic programming

<div class="info-capitolo" markdown>

**Part 3 · Dynamic programming · Chapter 14** · [:material-file-pdf-box: Lecture notes, volume 3 (PDF)](../pdf/lecture-notes-3-dynamic-programming.pdf)

</div>

!!! nota "Prerequisites"

    - From this module, the chapter «Combinatorial optimization problems»: the combinatorial optimization problems, their feasible solutions, and the fact that their number grows exponentially.

    - From this module, the chapter «Knapsack problems»: the KP, used as the running example of the following chapters.

    - From the module <em>Algorithms</em>: [pseudocode (Chapter 2)](https://fabiofurini.github.io/algorithms/basic-algorithms/02-pseudo-code/), [recursion (Chapter 14)](https://fabiofurini.github.io/algorithms/recursion/14-recursion/), and the growth of the running time of an algorithm ([Chapter 10 «Asymptotic growth»](https://fabiofurini.github.io/algorithms/asymptotics/10-asymptotic-growth/)).

!!! chiave "Objectives"

    At the end of this chapter you will be able to:

    - explain why enumerating all the feasible solutions fails, and what a DP algorithm does instead;

    - state the divide, conquer and combine principles, and the difference between independent subproblems and overlapping subproblems;

    - check the optimal substructure and the overlapping subproblems on a problem;

    - list the steps of a DP algorithm: recurrence, base cases, lookup table, and reconstruction of an optimal solution.

## 14.1 Why not enumerate all the solutions?

- A brute-force algorithm lists all the feasible solutions of a combinatorial optimization problem; their number grows exponentially (for the KP there are $2^n$ subsets of items). The table shows how the running time of an algorithm with $\mathcal{O}(n)$, $\mathcal{O}(n^2)$ and $\mathcal{O}(2^n)$ steps grows with the size $n$ of the instance, at $1\,\mu$s per step.

<div class="tabella" markdown="0"><table>
<tr>
<th></th>
<th colspan="6">Size <span class="arithmatex">\(n\)</span></th>
</tr>
<tr>
<td>Algorithm</td>
<td>10</td>
<td>20</td>
<td>30</td>
<td>40</td>
<td>50</td>
<td>60</td>
</tr>
<tr>
<td><span class="arithmatex">\(\mathcal{O}(n)\)</span></td>
<td>.00001</td>
<td>.00002</td>
<td>.00003</td>
<td>.00004</td>
<td>.00005</td>
<td>.00006</td>
</tr>
<tr>
<td></td>
<td><span style="color:#1971c2">seconds</span></td>
<td><span style="color:#1971c2">seconds</span></td>
<td><span style="color:#1971c2">seconds</span></td>
<td><span style="color:#1971c2">seconds</span></td>
<td><span style="color:#1971c2">seconds</span></td>
<td><span style="color:#1971c2">seconds</span></td>
</tr>
<tr>
<td><span class="arithmatex">\(\mathcal{O}(n^2)\)</span></td>
<td>.0001</td>
<td>.0004</td>
<td>.0009</td>
<td>.0016</td>
<td>.0025</td>
<td>.0036</td>
</tr>
<tr>
<td></td>
<td><span style="color:#1971c2">seconds</span></td>
<td><span style="color:#1971c2">seconds</span></td>
<td><span style="color:#1971c2">seconds</span></td>
<td><span style="color:#1971c2">seconds</span></td>
<td><span style="color:#1971c2">seconds</span></td>
<td><span style="color:#1971c2">seconds</span></td>
</tr>
<tr>
<td><span class="arithmatex">\(\mathcal{O}(2^n)\)</span></td>
<td>.001</td>
<td>1.0</td>
<td>17.9</td>
<td>12.7</td>
<td>35.7</td>
<td>366</td>
</tr>
<tr>
<td></td>
<td><span style="color:#1971c2">seconds</span></td>
<td><span style="color:#1971c2">second</span></td>
<td><span style="color:#e03131">minutes</span></td>
<td><span style="color:#e03131">days</span></td>
<td><span style="color:#e03131">years</span></td>
<td><span style="color:#e03131">centuries</span></td>
</tr>
</table></div>

- <span style="color:#e03131">Technology will not help.</span>[^1] With a CPU $1000$ times faster, in one hour an $\mathcal{O}(n)$ algorithm solves an instance $1000$ times larger, while an $\mathcal{O}(2^n)$ algorithm solves an instance only $10$ units larger.

!!! chiave ""

    Brute-force algorithms do not work: a DP algorithm avoids the enumeration by reusing the optimal values of the subproblems.

## 14.2 Divide, conquer and combine

- A <strong><em>Dynamic Programming (DP) algorithm</em></strong> is an exact algorithm to find an optimal solution of a class of optimization problems with specific properties (see the next section).

- It is based on decomposing the original problem into smaller subproblems and reusing the information computed when solving them.

- A DP algorithm exploits the <strong><em>divide, conquer, and combine paradigm</em></strong>, whose main principles are:

    1. <strong>Dividing principle</strong> $\rightsquigarrow$  decompose the problem into a number of subproblems that are smaller problems of the same type;

    2. <strong>Conquering principle</strong> $\rightsquigarrow$  solve the subproblems in a recursive manner. If the subproblem sizes are small enough just solve the subproblems in a straightforward manner;

    3. <strong>Combining principle</strong> $\rightsquigarrow$ combine optimal solutions of the subproblems to obtain an optimal solution for the original problem.

- DP algorithms divide the problem into <strong><em>independent subproblems</em></strong>, solve them recursively, and then combine their solutions to solve the original problem. Here, independent means that each subproblem generated by the division can be solved without affecting the others.

- In a DP algorithm, the same subproblem may be generated several times during the recursive solution process. In order to avoid redundant computations, the optimal value of each subproblem is stored in a <strong><em>lookup table</em></strong>. Whenever the same subproblem is generated again, its optimal value is retrieved from the lookup table instead of being recomputed.

## 14.3 Problem properties required by DP algorithms

- DP algorithms work only for combinatorial optimization problems that allow a recursive decomposition process respecting the following properties:

    1. <strong><em>Optimal Substructure</em></strong> $\rightsquigarrow$ the idea is that, when a problem is decomposed into smaller subproblems, an optimal solution of the problem can be built from optimal solutions of the subproblems.

        In practice, to verify this property one usually checks the following points:

        - the problem can be decomposed into smaller subproblems of the same type;

        - subproblems can be solved independently;

        - optimal solutions of the subproblems can be combined to obtain an optimal solution of the original problem;

        - a <strong>recurrence relation</strong> to compute the optimal value of the problem can be established.

    2. <strong><em>Overlapping Subproblems</em></strong> $\rightsquigarrow$ the idea is that, when a problem is recursively decomposed into smaller subproblems, the same subproblems may be generated several times.

        In practice, to verify this property one usually checks the following points:

        - the recursive decomposition process generates the same subproblem more than once;

        - it is possible to store the optimal values of the subproblems in a lookup table; then whenever the same subproblem is required again, its optimal value can be retrieved from the lookup table instead of being recomputed.

!!! chiave ""

    DP algorithms can be used when a problem has both the <u>Optimal Substructure</u> and <u>Overlapping Subproblems</u>.

## 14.4 Steps for designing a DP algorithm

- Identify the <strong><em>recursive decomposition process</em></strong> that, starting from a given problem, generates its subproblems, which are smaller problems of the same type, and verify the following two properties:

    1. the Optimal Substructure property, by checking that an optimal solution of the problem can be obtained by combining the optimal solutions of its subproblems;

    2. the Overlapping Subproblems property, by checking whether the recursive decomposition process generates the same subproblems several times;

- The construction of a DP algorithm usually follows two main steps:

    1. computation of the optimal value

        - define a <strong><em>recurrence relation</em></strong> that expresses the optimal value of a problem in terms of the optimal values of its subproblems;

        - specify the <strong><em>base cases</em></strong>, i.e., the subproblems whose optimal solution is immediate (the optimal value then follows directly from it);

        - determine a DP algorithm that computes the optimal values of all relevant subproblems, typically in a <strong><em>bottom-up fashion</em></strong>, storing each value in a lookup table so that it is computed only once and retrieved whenever needed again;

    2. construction of an optimal solution

        - specify the information that must be additionally stored in order to reconstruct an optimal solution of the problem.

        - identify the way to construct an optimal solution from the information stored.

## 14.5 The DP algorithms of this module

- Every DP algorithm of the following chapters follows the two steps above: a recurrence with its base cases gives the optimal value, an additional table gives an optimal solution.

<div class="tabella" markdown="0"><table>
<tr>
<th>Problem</th>
<th>State</th>
<th>Recurrence over</th>
<th>Steps</th>
</tr>
<tr>
<td>KP</td>
<td><span class="arithmatex">\(v(j,k)\)</span></td>
<td>items and capacities</td>
<td><span class="arithmatex">\(\Theta(nc)\)</span></td>
</tr>
<tr>
<td>UKP</td>
<td><span class="arithmatex">\(v(k)\)</span></td>
<td>capacities</td>
<td><span class="arithmatex">\(\Theta(nc)\)</span></td>
</tr>
<tr>
<td>BKP</td>
<td><span class="arithmatex">\(v(j,k)\)</span></td>
<td>items and capacities</td>
<td><span class="arithmatex">\(\Theta(nc\,b_{\max})\)</span></td>
</tr>
<tr>
<td>RCP</td>
<td><span class="arithmatex">\(v(\ell)\)</span></td>
<td>rod lengths</td>
<td><span class="arithmatex">\(\Theta(n^2)\)</span></td>
</tr>
<tr>
<td>CCP</td>
<td><span class="arithmatex">\(v(k)\)</span></td>
<td>amounts of change</td>
<td><span class="arithmatex">\(\Theta(nc)\)</span></td>
</tr>
<tr>
<td>ULS</td>
<td><span class="arithmatex">\(v(t)\)</span></td>
<td>periods</td>
<td><span class="arithmatex">\(\Theta(m^2)\)</span></td>
</tr>
<tr>
<td>CLS</td>
<td><span class="arithmatex">\(v(t,k)\)</span></td>
<td>periods and inventories</td>
<td><span class="arithmatex">\(O(mDC)\)</span></td>
</tr>
</table></div>

- In all the numerical examples the data are integers: the number of states is finite, and each state is a table cell. The running times $\Theta(nc)$, $\Theta(nc\,b_{\max})$ and $O(mDC)$ contain numbers of the input (a capacity, a bound, a demand), not only its size: they are <strong>pseudo-polynomial</strong>.

## 14.6 Typical mistakes

!!! attenzione "Warning"

    - <strong>Using DP without the optimal substructure.</strong> If an optimal solution of the problem cannot be built from optimal solutions of the subproblems, the recurrence is wrong.

    - <strong>Using DP without overlapping subproblems.</strong> If every subproblem appears once, storing the values in a lookup table gives nothing: the DP algorithm is a plain recursion.

    - <strong>Forgetting the base cases.</strong> The recurrence needs the subproblems whose optimal value is immediate, otherwise the recursion does not stop.

    - <strong>Confusing the optimal value with an optimal solution.</strong> The table of the optimal values does not give the solution: an additional table of the decisions is needed.

## 14.7 In summary

!!! chiave "In summary"

    - A DP algorithm is an exact algorithm that divides a problem into subproblems of the same type, solves them recursively and combines the optimal solutions.

    - It works when the problem has the optimal substructure and overlapping subproblems; the optimal values are stored in a lookup table.

    - The design has two steps: the optimal value (recurrence, base cases, bottom-up table) and an optimal solution (decisions stored and read backwards).

    - Brute force takes exponential time; DP takes a time that is polynomial in the number of states, and pseudo-polynomial when a number of the input is a table dimension.

[^1]: M. Garey, D. Johnson, <em>Computers and Intractability: A Guide to $NP$-Completeness</em>.
