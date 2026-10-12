---
title: "Formulations of the travelling salesman problem"
---

# Formulations of the travelling salesman problem

<div class="info-capitolo" markdown>

**Part 2 · Formulations and their properties · Chapter 13** · [:material-file-pdf-box: Lecture notes, volume 2 (PDF)](../pdf/lecture-notes-2-formulations.pdf) · [:material-pencil: Exercises: TSP](../exercises/tsp-formulations.md)

</div>

!!! nota "Prerequisites"

    - From the module <em>Integer linear programming</em>, [Chapter 1 «Integer linear programming»](https://fabiofurini.github.io/integer-linear-programming/models-and-bounds/ilp/) and [Chapter 2 «LP relaxation»](https://fabiofurini.github.io/integer-linear-programming/models-and-bounds/lp-relaxation/): ILP problems, LP relaxations and bounds.

    - From this module, the chapter «The Travelling Salesman Problem»: the problem, tours and the distance matrix.

    - Later, the chapter «Branch-and-cut algorithms» of the module <em>Integer linear programming</em> shows how the constraints of Section 3 are added only when they are needed.

!!! chiave "Objectives"

    At the end of this chapter you will be able to:

    - write the ILP model of the Travelling Salesman Problem with the position variables of Miller-Tucker-Zemlin (MTZ) and explain how they eliminate subtours;

    - write the ILP model with the subtour elimination constraints of Dantzig-Fulkerson-Johnson (DFJ), and prove that it is correct;

    - count the variables and the constraints of the two models;

    - compare the LP relaxations of the two models on the same instance.

## 13.1 The problem in brief

!!! nota "Where we were"

    In the chapter «The Travelling Salesman Problem» we met the TSP as a <em>problem</em>: definition, tours, the number of tours and the instance of this chapter. Here we look at it as a <em>model</em>, in two ways, and we compare the bounds that the two models give. The TSP returns with heuristic algorithms and approximation algorithms.

<a id="box-1-def-TSP"></a>

!!! definizione "Definition 13.1: Travelling Salesman Problem"

    Given:

    1. a set $\mathscr{V}=\{1,2,\dots,n\}$ of $n$ <em>cities</em>,

    2. for each pair of distinct cities $i,j\in\mathscr{V}$, a <em>distance</em> $d_{ij}\in\Z_{\ge 1}$, with $d_{ij}=d_{ji}$,

    the <strong>Travelling Salesman Problem</strong> (TSP) asks to find a closed route that starts from a city, visits every other city exactly once and returns to the starting city, so that the total distance travelled is minimized.

- We assume that every TSP instance has at least three cities and symmetric distances, i.e.,

    $$
    n\ge 3
    \qquad\text{and}\qquad
    d_{ij}=d_{ji}
    \quad \forall i,j\in\mathscr{V},~i\neq j.
    $$

- The formulations below use directed arcs. This does not change the symmetric problem: each edge $\{i,j\}$ is represented by the two opposite arcs $(i,j)$ and $(j,i)$, which have the same cost.

<a id="box-2-ex-TSP-inst"></a>

!!! esempio "Example 13.1: the instance of the chapter"

    Consider the instance with $\mathscr{V}=\{1,2,3,4,5\}$ and distance matrix

    $$
    \begin{array}{c|ccccc}
    \toprule
    d_{ij}&1&2&3&4&5\\
    \midrule
    1&-&5&2&2&9\\
    2&5&-&4&3&4\\
    3&2&4&-&4&7\\
    4&2&3&4&-&7\\
    5&9&4&7&7&-\\
    \bottomrule
    \end{array}
    $$

    The tour $\sigma=(1,3,5,2,4)$ has length $L(\sigma)=d_{13}+d_{35}+d_{52}+d_{24}+d_{41}=2+7+4+3+2=18$, and no shorter tour exists: the optimal value is $18$ and $\sigma$ is the unique optimal tour, up to the direction.

## 13.2 A model with position variables (MTZ)

- Let

    $$
    A=\{(i,j):i,j\in\mathscr{V},~i\neq j\}
    $$

    be the set of directed arcs. We introduce the following $n(n-1)$ <strong>binary variables</strong>:

    $$
    x_{ij}=
    \begin{cases}
    1 & \text{if arc $(i,j)$ is traversed by the tour},\\
    0 & \text{otherwise},
    \end{cases}
    \qquad \forall (i,j)\in A,
    $$

    and the following $n-1$ <strong>continuous variables</strong>:

    $$
    u_i=\text{position of city $i$ after leaving city $1$},
    \qquad \forall i\in\mathscr{V}\setminus\{1\}.
    $$

    The city $1$ is used only as a reference city: a tour has no preferred starting city.

!!! chiave ""

    Using these variables, the <strong>MTZ model</strong> of the Travelling Salesman Problem (TSP) reads as follows:

    <a id="eq-ILP-TSP"></a>

    \begin{align*}
    && \min \quad \sum_{i\in\mathscr{V}}\sum_{\substack{j\in\mathscr{V}\\j\neq i}}
    d_{ij}x_{ij} && \label{obj:TSP} \tag{13.1a}\\[1ex]
    && \text{subject to}\quad \sum_{\substack{j\in\mathscr{V}\\j\neq i}}x_{ij}&=1,
    && \forall i\in\mathscr{V}, \label{out:TSP} \tag{13.1b}\\[1ex]
    && \sum_{\substack{i\in\mathscr{V}\\i\neq j}}x_{ij}&=1,
    && \forall j\in\mathscr{V}, \label{in:TSP} \tag{13.1c}\\[1ex]
    && u_i-u_j+(n-1)x_{ij}&\le n-2,
    && \forall i,j\in\mathscr{V}\setminus\{1\},~i\neq j, \label{MTZ:TSP} \tag{13.1d}\\[1ex]
    && x_{ij}&\in\{0,1\},
    && \forall(i,j)\in A, \label{bin:TSP} \tag{13.1e}\\[1ex]
    && 1\le u_i&\le n-1,
    && \forall i\in\mathscr{V}\setminus\{1\}. \label{pos:TSP} \tag{13.1f}
    \end{align*}

    This model is referred to as the $\mathrm{ILP}_{\mathrm{TSP}}^{\mathrm{MTZ}}$ model.

- Description of the objective function and constraints of the $\mathrm{ILP}_{\mathrm{TSP}}^{\mathrm{MTZ}}$ model:

    - the linear objective function $\eqref{obj:TSP}$ minimizes the total distance travelled by the tour;

    - constraints $\eqref{out:TSP}$ ensure that exactly one arc leaves each city ($n$ linear constraints);

    - constraints $\eqref{in:TSP}$ ensure that exactly one arc enters each city ($n$ linear constraints);

    - constraints $\eqref{MTZ:TSP}$ link the arc variables with the position variables and eliminate the subtours that do not contain city $1$ ($(n-1)(n-2)$ linear constraints);

    - constraints $\eqref{bin:TSP}$ and $\eqref{pos:TSP}$ define the domains of the variables of the model.

<strong>Explanation of the link between the variables</strong>

- For each pair of cities $i,j$ different from city $1$, if arc $(i,j)$ is traversed, then the position of city $j$ is at least one unit greater than the position of city $i$. This logical relation is the implication

    $$
    x_{ij}=1 ~~~\Longrightarrow~~~ u_j\ge u_i+1.
    $$

- Its contrapositive is

    $$
    u_j< u_i+1 ~~~\Longrightarrow~~~ x_{ij}=0.
    $$

    In particular, an arc from a city to a city in the same or in an earlier position cannot be traversed.

- Both implications are imposed by the linear constraints $\eqref{MTZ:TSP}$. If $x_{ij}=1$, then the constraint gives $u_i-u_j+(n-1)\le n-2$, that is $u_j\ge u_i+1$.

- Conversely, if $u_j<u_i+1$, then the constraint gives $(n-1)x_{ij}\le n-2+u_j-u_i<n-1$. Since $x_{ij}$ is binary, this forces $x_{ij}=0$.

- When $x_{ij}=0$, the constraint becomes $u_i-u_j\le n-2$, which is always satisfied because both positions belong to $[1,n-1]$. Accordingly, $n-1$ is the smallest possible big-M coefficient for these bounds.

<a id="box-3-prop-MTZ-subtours"></a>

!!! teorema "Proposition 13.2: MTZ constraints eliminate subtours"

    The constraints $\eqref{out:TSP}$–$\eqref{pos:TSP}$ are satisfied by an integer solution if and only if its selected arcs form one tour through all the cities.

??? dimostrazione "Proof"

    Constraints $\eqref{out:TSP}$ and $\eqref{in:TSP}$ make the selected arcs a collection of vertex-disjoint directed cycles covering all cities. Suppose that one such cycle does not contain city $1$ and visits, in order, $i_1,i_2,\dots,i_k$. Since every arc $(i_r,i_{r+1})$ is selected, the implication above gives

    $$
    u_{i_{r+1}}\ge u_{i_r}+1
    \qquad r=1,\dots,k,
    $$

    where $i_{k+1}=i_1$. Summing the inequalities gives $u_{i_1}\ge u_{i_1}+k$, a contradiction. Thus no cycle can avoid city $1$, and the collection is one tour.

    Conversely, consider any tour and start it from city $1$. For every city $i\neq1$, set $u_i$ equal to the position at which city $i$ is visited after leaving city $1$. The bounds $\eqref{pos:TSP}$ hold. If a selected arc $(i,j)$ has $i,j\neq1$, then city $j$ immediately follows city $i$, so that $u_j=u_i+1$ and $\eqref{MTZ:TSP}$ holds. If the arc is not selected, constraint $\eqref{MTZ:TSP}$ holds by the bounds on the positions. Hence the tour defines a feasible integer solution. <span class="qed">□</span>

<a id="box-4-ex-TSP-ILP"></a>

!!! esempio "Example 13.2: $\mathrm{ILP}_{\mathrm{TSP}}^{\mathrm{MTZ}}$ model"

    For the instance of the chapter, the tour $\sigma=(1,3,5,2,4)$ is represented by

    $$
    x_{13}=x_{35}=x_{52}=x_{24}=x_{41}=1
    $$

    and all the other arc variables equal to zero. Its position variables are

    $$
    u_3=1,\qquad u_5=2,\qquad u_2=3,\qquad u_4=4.
    $$

    The value of the objective function is $L(\sigma)=18$, hence $z(\mathrm{ILP}_{\mathrm{TSP}}^{\mathrm{MTZ}})=18$.

## 13.3 A model with subtour elimination constraints (DFJ)

- The second model uses only the $n(n-1)$ arc variables $x_{ij}$ of the MTZ model: there are no position variables. The subtours are forbidden directly, with one constraint for every subset of cities.

!!! chiave ""

    The <strong>DFJ model</strong> of the Travelling Salesman Problem reads as follows:

    <a id="eq-ILP-TSP-DFJ"></a>

    \begin{align*}
    && \min \quad \sum_{i\in\mathscr{V}}\sum_{\substack{j\in\mathscr{V}\\j\neq i}}
    d_{ij}x_{ij} && \label{obj:TSP-DFJ} \tag{13.2a}\\[1ex]
    && \text{subject to}\quad \sum_{\substack{j\in\mathscr{V}\\j\neq i}}x_{ij}&=1,
    && \forall i\in\mathscr{V}, \label{out:TSP-DFJ} \tag{13.2b}\\[1ex]
    && \sum_{\substack{i\in\mathscr{V}\\i\neq j}}x_{ij}&=1,
    && \forall j\in\mathscr{V}, \label{in:TSP-DFJ} \tag{13.2c}\\[1ex]
    && \sum_{i\in S}\sum_{\substack{j\in S\\j\neq i}}x_{ij}&\le |S|-1,
    && \forall S\subseteq\mathscr{V}\setminus\{1\},~|S|\ge2, \label{SEC:TSP} \tag{13.2d}\\[1ex]
    && x_{ij}&\in\{0,1\},
    && \forall(i,j)\in A. \label{bin:TSP-DFJ} \tag{13.2e}
    \end{align*}

    This model is referred to as the $\mathrm{ILP}_{\mathrm{TSP}}^{\mathrm{DFJ}}$ model.

- Constraints $\eqref{SEC:TSP}$ are called <strong>subtour elimination constraints</strong>: a tour cannot contain all the $|S|$ arcs of a cycle on the cities of $S$, so it uses at most $|S|-1$ arcs inside $S$.

- The number of constraints $\eqref{SEC:TSP}$ is $2^{n-1}-n$, exponential in $n$: for $n=5$ they are $11$, for $n=20$ they are $524\,268$.

<a id="box-5-prop-DFJ-subtours"></a>

!!! teorema "Proposition 13.3: Subtour elimination constraints"

    The constraints $\eqref{out:TSP-DFJ}$–$\eqref{bin:TSP-DFJ}$ are satisfied by an integer solution if and only if its selected arcs form one tour through all the cities.

??? dimostrazione "Proof"

    Let a tour be given and let $S\subseteq\mathscr{V}\setminus\{1\}$ with $|S|\ge2$. If the tour used $|S|$ arcs inside $S$, these arcs would form a cycle on the cities of $S$, which is not the whole tour since $1\notin S$: a contradiction. Hence $\eqref{SEC:TSP}$ holds, and the degree constraints hold by definition of a tour.

    Conversely, constraints $\eqref{out:TSP-DFJ}$ and $\eqref{in:TSP-DFJ}$ make the selected arcs a collection of vertex-disjoint directed cycles. If there were more than one cycle, one of them would not contain city $1$. Let $S$ be its set of cities: then $|S|\ge2$ and the cycle uses $|S|$ arcs inside $S$, which violates $\eqref{SEC:TSP}$. Hence there is one cycle, a tour. <span class="qed">□</span>

<a id="box-6-ex-TSP-DFJ"></a>

!!! esempio "Example 13.3: $\mathrm{ILP}_{\mathrm{TSP}}^{\mathrm{DFJ}}$ model"

    For the instance of the chapter, the constraints $\eqref{SEC:TSP}$ are $11$, one for every subset $S\subseteq\{2,3,4,5\}$ with at least two cities. The subset $S=\{2,5\}$ gives $x_{25}+x_{52}\le1$, and $S=\{2,4,5\}$ gives

    $$
    x_{24}+x_{25}+x_{42}+x_{45}+x_{52}+x_{54}\le2.
    $$

    The subtour $2\to5\to2$ together with the subtour $1\to3\to4\to1$ satisfies the degree constraints but violates the first one. The tour $\sigma$ satisfies all of them, and $z(\mathrm{ILP}_{\mathrm{TSP}}^{\mathrm{DFJ}})=18$.

## 13.4 Linear Programming relaxations

- We obtain the LP relaxation of each model by replacing the binary requirements with non-negativity constraints. In the MTZ model the position variables remain continuous and keep their bounds. The relaxations are called $\mathrm{LP}_{\mathrm{TSP}}^{\mathrm{MTZ}}$ and $\mathrm{LP}_{\mathrm{TSP}}^{\mathrm{DFJ}}$.

- Adding the upper bounds $x_{ij}\le1$ does not change the relaxations: for every arc $(i,j)$, non-negativity and the degree equation $\eqref{out:TSP}$ give

    $$
    x_{ij}\le \sum_{\substack{k\in\mathscr{V}\\k\neq i}}x_{ik}=1.
    $$

- The dual of the relaxations has one variable for every ordering constraint, or for every subset $S$, and it does not provide a useful closed-form solution. The relevant theoretical point is the strength of the relaxation.

### 13.4.1 A weak region of the MTZ relaxation

<a id="box-7-prop-MTZ-weak"></a>

!!! teorema "Proposition 13.4: A weak region of the MTZ relaxation"

    Let $(x,u)$ satisfy the degree equations $\eqref{out:TSP}$–$\eqref{in:TSP}$, with $x_{ij}\ge0$. If

    $$
    x_{ij}\le\frac{n-2}{n-1}
    \qquad \forall i,j\in\mathscr{V}\setminus\{1\},~i\neq j,
    $$

    then $(x,u)$ is feasible for $\mathrm{LP}_{\mathrm{TSP}}^{\mathrm{MTZ}}$ after setting $u_i=1$ for every $i\neq1$.

??? dimostrazione "Proof"

    With $u_i=u_j=1$, each MTZ constraint $\eqref{MTZ:TSP}$ becomes

    $$
    (n-1)x_{ij}\le n-2,
    $$

    which is exactly the assumed upper bound. The bounds on the position variables also hold. <span class="qed">□</span>

- The proposition shows why the compact MTZ formulation can have a weak lower bound: many fractional solutions of the assignment relaxation already satisfy the ordering constraints.

- The MTZ model is valuable because it has only $O(n^2)$ variables and constraints. The DFJ model has a stronger relaxation, but exponentially many constraints: in practice, the subtour elimination constraints are added only when they are violated by the current solution of the relaxation.

<a id="box-8-ex-TSP-LP"></a>

!!! esempio "Example 13.4: comparing the relaxations"

    For the instance of the chapter, with Gurobi we obtain three lower bounds on the optimal value $18$:

    <div class="tabella" markdown="0"><table>
    <tr>
    <th>Relaxation</th>
    <th>Optimal value</th>
    </tr>
    <tr>
    <td>degree constraints only (assignment relaxation)</td>
    <td><span class="arithmatex">\(16\)</span></td>
    </tr>
    <tr>
    <td><span class="arithmatex">\(\mathrm{LP}_{\mathrm{TSP}}^{\mathrm{MTZ}}\)</span></td>
    <td><span class="arithmatex">\(17\)</span></td>
    </tr>
    <tr>
    <td><span class="arithmatex">\(\mathrm{LP}_{\mathrm{TSP}}^{\mathrm{DFJ}}\)</span></td>
    <td><span class="arithmatex">\(18\)</span></td>
    </tr>
    </table></div>

    The ordering constraints raise the bound from $16$ to $17$; the subtour elimination constraints close the gap on this instance.

## 13.5 Typical mistakes

!!! attenzione "Warning"

    - <strong>Writing the MTZ constraints for the city $1$.</strong> The constraints $\eqref{MTZ:TSP}$ are written only for the pairs of cities different from city $1$: the city $1$ has no position variable.

    - <strong>Using a smaller coefficient than $n-1$.</strong> With a coefficient smaller than $n-1$ the constraint cuts off feasible tours; $n-1$ is the smallest valid value.

    - <strong>Taking $S=\mathscr{V}$ in the subtour elimination constraints.</strong> A tour uses $|\mathscr{V}|$ arcs inside $\mathscr{V}$: the constraint would cut off every tour. The sets $S$ are proper subsets of the cities, with at least two cities.

    - <strong>Trusting the MTZ bound.</strong> By [Proposition 13.4](#box-7-prop-MTZ-weak), many fractional solutions of the assignment relaxation are feasible for the MTZ relaxation: the compact formulation is not a strong one.

    - <strong>Listing all the subtour elimination constraints.</strong> Their number is $2^{n-1}-n$: they are not written all at once, but added when violated.

## 13.6 In summary

!!! chiave "In summary"

    - The two models have the same arc variables $x_{ij}$ and the same degree constraints; they differ in how they forbid the subtours.

    - The MTZ model adds $n-1$ position variables and $(n-1)(n-2)$ constraints: it is compact, but its relaxation is weak.

    - The DFJ model adds $2^{n-1}-n$ subtour elimination constraints: the relaxation is stronger, and the constraints are generated when needed.

    - Both models are correct: an integer solution is feasible if and only if its arcs form one tour.

    <strong>Dashboard of the instance of the chapter.</strong> Lower bounds on the optimal value $18$ computed in this chapter:

    <div class="tabella" markdown="0"><table>
    <tr>
    <th>Bound</th>
    <th>Value</th>
    <th>From</th>
    </tr>
    <tr>
    <td>Assignment relaxation</td>
    <td><span class="arithmatex">\(16\)</span></td>
    <td>degree constraints only</td>
    </tr>
    <tr>
    <td>MTZ relaxation</td>
    <td><span class="arithmatex">\(17\)</span></td>
    <td><span class="arithmatex">\(z(\mathrm{LP}_{\mathrm{TSP}}^{\mathrm{MTZ}})\)</span></td>
    </tr>
    <tr>
    <td>DFJ relaxation</td>
    <td><span class="arithmatex">\(18\)</span></td>
    <td><span class="arithmatex">\(z(\mathrm{LP}_{\mathrm{TSP}}^{\mathrm{DFJ}})\)</span></td>
    </tr>
    <tr>
    <td>Optimal value</td>
    <td><span class="arithmatex">\(18\)</span></td>
    <td>tour <span class="arithmatex">\(\sigma=(1,3,5,2,4)\)</span></td>
    </tr>
    </table></div>

---

**Exercises on this chapter:** [:material-pencil: TSP](../exercises/tsp-formulations.md)
