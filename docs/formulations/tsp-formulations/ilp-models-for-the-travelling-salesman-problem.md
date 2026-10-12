---
title: "Travelling salesman"
---

# 13.2 ILP models for the Travelling Salesman Problem { #sez-sec-tspf-TSP }

<div class="info-capitolo" markdown>

**Part 2 · Formulations and their properties · Chapter 13** · [:material-book-open-variant: Chapter 13: Routing problems](index.md) · [:material-file-pdf-box: Lecture notes, volume 2 (PDF)](../../pdf/lecture-notes-2-formulations.pdf) · [:material-pencil: Exercises: Routing problems](../../exercises/tsp-formulations.md)

</div>

- The TSP has two classical ILP models on the arc variables $x_{ij}$: the model of Miller, Tucker and Zemlin (MTZ) of Section [13.3](#sez-sec-tspf-MTZ), with position variables, and the model of Dantzig, Fulkerson and Johnson (DFJ) of Section [13.4](#sez-sec-tspf-DFJ), with subtour elimination constraints.

- Section [13.5](#sez-sec-tspf-LP) compares the Linear Programming relaxations of the two models.

## 13.3 A model with position variables (MTZ) { #sez-sec-tspf-MTZ }

- We introduce the following $n(n-1)$ <strong>binary variables</strong>:

    $$
    x_{ij}=
    \begin{cases}
    1 & \text{if arc $(i,j)$ is traversed by the tour}\\[1.5ex]
    0 & \text{otherwise}
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

    Using these variables, an Integer Linear Programming (ILP) model for the Travelling Salesman Problem (TSP) reads as follows:

    <a id="eq-ILP-TSP"></a>

    \begin{align*}
    && \min \quad \sum_{i\in\mathscr{V}}\sum_{\substack{j\in\mathscr{V}\\j\neq i}}
    d_{ij}x_{ij} \label{obj:TSP} \tag{13.1a}\\[1ex]
    && \text{subject to}\quad \sum_{\substack{j\in\mathscr{V}\\j\neq i}}x_{ij}&=1,
    & \forall i\in\mathscr{V}, \label{out:TSP} \tag{13.1b}\\[1ex]
    && \sum_{\substack{i\in\mathscr{V}\\i\neq j}}x_{ij}&=1,
    & \forall j\in\mathscr{V}, \label{in:TSP} \tag{13.1c}\\[1ex]
    && u_i-u_j+(n-1)x_{ij}&\le n-2,
    & \forall i,j\in\mathscr{V}\setminus\{1\},~i\neq j, \label{MTZ:TSP} \tag{13.1d}\\[1ex]
    && x_{ij}&\in\{0,1\},
    & \forall(i,j)\in A, \label{bin:TSP} \tag{13.1e}\\[1ex]
    && 1\le u_i&\le n-1,
    & \forall i\in\mathscr{V}\setminus\{1\}. \label{pos:TSP} \tag{13.1f}
    \end{align*}

    This ILP model is referred to as the $\mathrm{ILP}_{\mathrm{TSP}}^{\mathrm{MTZ}}$ model, or <strong>MTZ model</strong>.

- Description of the objective function and constraints of the $\mathrm{ILP}_{\mathrm{TSP}}^{\mathrm{MTZ}}$ model:

    - the linear objective function $\eqref{obj:TSP}$ minimizes the total distance travelled by the tour;

    - constraints $\eqref{out:TSP}$ ensure that exactly one arc leaves each city ($n$ linear constraints);

    - constraints $\eqref{in:TSP}$ ensure that exactly one arc enters each city ($n$ linear constraints);

    - constraints $\eqref{MTZ:TSP}$ link the arc variables with the position variables and eliminate the subtours that do not contain city $1$ ($(n-1)(n-2)$ linear constraints);

    - finally, constraints $\eqref{bin:TSP}$ and $\eqref{pos:TSP}$ define the variables of the ILP model.

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

<a id="box-1-prop-MTZ-subtours"></a>

!!! teorema "Proposition 13.1: MTZ constraints eliminate subtours"

    The constraints $\eqref{out:TSP}$–$\eqref{pos:TSP}$ are satisfied by an integer solution if and only if its selected arcs form one tour through all the cities.

??? dimostrazione "Proof"

    Constraints $\eqref{out:TSP}$ and $\eqref{in:TSP}$ make the selected arcs a collection of vertex-disjoint directed cycles covering all cities. Suppose that one such cycle does not contain city $1$ and visits, in order, $i_1,i_2,\dots,i_k$. Since every arc $(i_r,i_{r+1})$ is selected, the implication above gives

    $$
    u_{i_{r+1}}\ge u_{i_r}+1
    \qquad r=1,\dots,k,
    $$

    where $i_{k+1}=i_1$. Summing the inequalities gives $u_{i_1}\ge u_{i_1}+k$, a contradiction. Thus no cycle can avoid city $1$, and the collection is one tour.

    Conversely, consider any tour and start it from city $1$. For every city $i\neq1$, set $u_i$ equal to the position at which city $i$ is visited after leaving city $1$. The bounds $\eqref{pos:TSP}$ hold. If a selected arc $(i,j)$ has $i,j\neq1$, then city $j$ immediately follows city $i$, so that $u_j=u_i+1$ and $\eqref{MTZ:TSP}$ holds. If the arc is not selected, constraint $\eqref{MTZ:TSP}$ holds by the bounds on the positions. Hence the tour defines a feasible integer solution. <span class="qed">□</span>

<a id="box-2-ex-TSP-inst"></a>

!!! esempio "Example 13.1: TSP instance"

    We consider the set $\mathscr{V}=\{1,2,3,4,5\}$ of $5$ cities ($n=5$), with the distance matrix

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

    This is the instance of Example 1 of the chapter «Routing problems». We refer to this TSP instance as <span style="color:#1971c2">[Example 13.1](#box-2-ex-TSP-inst)</span>.

<a id="box-3-ex-TSP-ILP"></a>

!!! esempio "Example 13.2: $\mathrm{ILP}_{\mathrm{TSP}}^{\mathrm{MTZ}}$ model"

    The $\mathrm{ILP}_{\mathrm{TSP}}^{\mathrm{MTZ}}$ model for the TSP instance of <span style="color:#1971c2">[Example 13.1](#box-2-ex-TSP-inst)</span> has $20$ arc variables, $4$ position variables, $10$ degree constraints and $12$ constraints $\eqref{MTZ:TSP}$:

    $$
    \begin{array}{rlcl}
    {\min} & {5\,x_{12}+2\,x_{13}+2\,x_{14}+9\,x_{15}+5\,x_{21}+4\,x_{23}+3\,x_{24}} &  &  \\
    & {+4\,x_{25}+2\,x_{31}+4\,x_{32}+4\,x_{34}+7\,x_{35}+2\,x_{41}+3\,x_{42}} &  &  \\
    & {+4\,x_{43}+7\,x_{45}+9\,x_{51}+4\,x_{52}+7\,x_{53}+7\,x_{54}} &  &  \\[1ex]
    \text{subject to} & {x_{12}+x_{13}+x_{14}+x_{15}} & {=} & {1} \\
    & {x_{21}+x_{23}+x_{24}+x_{25}} & {=} & {1} \\
    & {x_{31}+x_{32}+x_{34}+x_{35}} & {=} & {1} \\
    & {x_{41}+x_{42}+x_{43}+x_{45}} & {=} & {1} \\
    & {x_{51}+x_{52}+x_{53}+x_{54}} & {=} & {1} \\
    & {x_{21}+x_{31}+x_{41}+x_{51}} & {=} & {1} \\
    & {x_{12}+x_{32}+x_{42}+x_{52}} & {=} & {1} \\
    & {x_{13}+x_{23}+x_{43}+x_{53}} & {=} & {1} \\
    & {x_{14}+x_{24}+x_{34}+x_{54}} & {=} & {1} \\
    & {x_{15}+x_{25}+x_{35}+x_{45}} & {=} & {1} \\
    & {u_2-u_3+4\,x_{23}} & {\le} & {3} \\
    & {u_2-u_4+4\,x_{24}} & {\le} & {3} \\
    & {u_2-u_5+4\,x_{25}} & {\le} & {3} \\
    & {u_3-u_2+4\,x_{32}} & {\le} & {3} \\
    & {u_3-u_4+4\,x_{34}} & {\le} & {3} \\
    & {u_3-u_5+4\,x_{35}} & {\le} & {3} \\
    & {u_4-u_2+4\,x_{42}} & {\le} & {3} \\
    & {u_4-u_3+4\,x_{43}} & {\le} & {3} \\
    & {u_4-u_5+4\,x_{45}} & {\le} & {3} \\
    & {u_5-u_2+4\,x_{52}} & {\le} & {3} \\
    & {u_5-u_3+4\,x_{53}} & {\le} & {3} \\
    & {u_5-u_4+4\,x_{54}} & {\le} & {3} \\[1ex]
    & {x_{12},~x_{13},~x_{14},~\dots,~x_{54}} & {\in} & {\{0,1\}} \\
    & {u_2,~u_3,~u_4,~u_5} & {\ge} & {1} \\
    & {u_2,~u_3,~u_4,~u_5} & {\le} & {4}
    \end{array}
    $$

    An optimal solution $(\tilde{\vet x},\tilde{\vet u})(\mathrm{ILP}_{\mathrm{TSP}}^{\mathrm{MTZ}})$ is:

    \begin{align*}
    &\tilde x_{13}=\tilde x_{35}=\tilde x_{52}=\tilde x_{24}=\tilde x_{41}=1,~~\text{all the other } \tilde x_{ij}=0,\\
    &\tilde u_3=1,~~\tilde u_5=2,~~\tilde u_2=3,~~\tilde u_4=4
    \end{align*}

    The optimal value $z(\mathrm{ILP}_{\mathrm{TSP}}^{\mathrm{MTZ}})$ is $18$. The associated optimal solution of the TSP is the tour $\tilde\sigma=(1,3,5,2,4)$, of length $L(\tilde\sigma)=2+7+4+3+2=18$; it is the unique optimal tour, up to the direction.

## 13.4 A model with subtour elimination constraints (DFJ) { #sez-sec-tspf-DFJ }

- The second model uses only the $n(n-1)$ arc variables $x_{ij}$ of the MTZ model: there are no position variables. The subtours are forbidden directly, with one constraint for every subset of cities.

!!! chiave ""

    Using these variables, a second ILP model for the Travelling Salesman Problem (TSP) reads as follows:

    <a id="eq-ILP-TSP-DFJ"></a>

    \begin{align*}
    && \min \quad \sum_{i\in\mathscr{V}}\sum_{\substack{j\in\mathscr{V}\\j\neq i}}
    d_{ij}x_{ij} \label{obj:TSP-DFJ} \tag{13.2a}\\[1ex]
    && \text{subject to}\quad \sum_{\substack{j\in\mathscr{V}\\j\neq i}}x_{ij}&=1,
    & \forall i\in\mathscr{V}, \label{out:TSP-DFJ} \tag{13.2b}\\[1ex]
    && \sum_{\substack{i\in\mathscr{V}\\i\neq j}}x_{ij}&=1,
    & \forall j\in\mathscr{V}, \label{in:TSP-DFJ} \tag{13.2c}\\[1ex]
    && \sum_{i\in S}\sum_{\substack{j\in S\\j\neq i}}x_{ij}&\le |S|-1,
    & \forall S\subseteq\mathscr{V}\setminus\{1\},~|S|\ge2, \label{SEC:TSP} \tag{13.2d}\\[1ex]
    && x_{ij}&\in\{0,1\},
    & \forall(i,j)\in A. \label{bin:TSP-DFJ} \tag{13.2e}
    \end{align*}

    This ILP model is referred to as the $\mathrm{ILP}_{\mathrm{TSP}}^{\mathrm{DFJ}}$ model, or <strong>DFJ model</strong>.

- Description of the objective function and constraints of the $\mathrm{ILP}_{\mathrm{TSP}}^{\mathrm{DFJ}}$ model:

    - the objective function $\eqref{obj:TSP-DFJ}$ and the degree constraints $\eqref{out:TSP-DFJ}$ and $\eqref{in:TSP-DFJ}$ are those of the MTZ model;

    - constraints $\eqref{SEC:TSP}$ are called <strong>subtour elimination constraints</strong>: a tour cannot contain all the $|S|$ arcs of a cycle on the cities of $S$, so it uses at most $|S|-1$ arcs inside $S$ ($2^{n-1}-n$ linear constraints);

    - finally, constraints $\eqref{bin:TSP-DFJ}$ define the variables of the ILP model.

- The number $2^{n-1}-n$ of constraints $\eqref{SEC:TSP}$ is exponential in $n$: for $n=5$ they are $11$, for $n=20$ they are $524\,268$.

<a id="box-4-prop-DFJ-subtours"></a>

!!! teorema "Proposition 13.2: Subtour elimination constraints"

    The constraints $\eqref{out:TSP-DFJ}$–$\eqref{bin:TSP-DFJ}$ are satisfied by an integer solution if and only if its selected arcs form one tour through all the cities.

??? dimostrazione "Proof"

    Let a tour be given and let $S\subseteq\mathscr{V}\setminus\{1\}$ with $|S|\ge2$. If the tour used $|S|$ arcs inside $S$, these arcs would form a cycle on the cities of $S$, which is not the whole tour since $1\notin S$: a contradiction. Hence $\eqref{SEC:TSP}$ holds, and the degree constraints hold by definition of a tour.

    Conversely, constraints $\eqref{out:TSP-DFJ}$ and $\eqref{in:TSP-DFJ}$ make the selected arcs a collection of vertex-disjoint directed cycles. If there were more than one cycle, one of them would not contain city $1$. Let $S$ be its set of cities: then $|S|\ge2$ and the cycle uses $|S|$ arcs inside $S$, which violates $\eqref{SEC:TSP}$. Hence there is one cycle, a tour. <span class="qed">□</span>

<a id="box-5-ex-TSP-DFJ"></a>

!!! esempio "Example 13.3: $\mathrm{ILP}_{\mathrm{TSP}}^{\mathrm{DFJ}}$ model"

    The $\mathrm{ILP}_{\mathrm{TSP}}^{\mathrm{DFJ}}$ model for the TSP instance of <span style="color:#1971c2">[Example 13.1](#box-2-ex-TSP-inst)</span> has $20$ arc variables, $10$ degree constraints and $11$ constraints $\eqref{SEC:TSP}$, one for every subset $S\subseteq\{2,3,4,5\}$ with at least two cities:

    $$
    \begin{array}{rlcl}
    {\min} & {5\,x_{12}+2\,x_{13}+2\,x_{14}+9\,x_{15}+5\,x_{21}+4\,x_{23}+3\,x_{24}} &  &  \\
    & {+4\,x_{25}+2\,x_{31}+4\,x_{32}+4\,x_{34}+7\,x_{35}+2\,x_{41}+3\,x_{42}} &  &  \\
    & {+4\,x_{43}+7\,x_{45}+9\,x_{51}+4\,x_{52}+7\,x_{53}+7\,x_{54}} &  &  \\[1ex]
    \text{subject to} & {x_{12}+x_{13}+x_{14}+x_{15}} & {=} & {1} \\
    & {x_{21}+x_{23}+x_{24}+x_{25}} & {=} & {1} \\
    & {x_{31}+x_{32}+x_{34}+x_{35}} & {=} & {1} \\
    & {x_{41}+x_{42}+x_{43}+x_{45}} & {=} & {1} \\
    & {x_{51}+x_{52}+x_{53}+x_{54}} & {=} & {1} \\
    & {x_{21}+x_{31}+x_{41}+x_{51}} & {=} & {1} \\
    & {x_{12}+x_{32}+x_{42}+x_{52}} & {=} & {1} \\
    & {x_{13}+x_{23}+x_{43}+x_{53}} & {=} & {1} \\
    & {x_{14}+x_{24}+x_{34}+x_{54}} & {=} & {1} \\
    & {x_{15}+x_{25}+x_{35}+x_{45}} & {=} & {1} \\
    & {x_{23}+x_{32}} & {\le} & {1} \\
    & {x_{24}+x_{42}} & {\le} & {1} \\
    & {x_{25}+x_{52}} & {\le} & {1} \\
    & {x_{34}+x_{43}} & {\le} & {1} \\
    & {x_{35}+x_{53}} & {\le} & {1} \\
    & {x_{45}+x_{54}} & {\le} & {1} \\
    & {x_{23}+x_{24}+x_{32}+x_{34}+x_{42}+x_{43}} & {\le} & {2} \\
    & {x_{23}+x_{25}+x_{32}+x_{35}+x_{52}+x_{53}} & {\le} & {2} \\
    & {x_{24}+x_{25}+x_{42}+x_{45}+x_{52}+x_{54}} & {\le} & {2} \\
    & {x_{34}+x_{35}+x_{43}+x_{45}+x_{53}+x_{54}} & {\le} & {2} \\
    & {x_{23}+x_{24}+x_{25}+x_{32}+x_{34}+x_{35}+x_{42}+x_{43}+x_{45}+x_{52}+x_{53}+x_{54}} & {\le} & {3} \\[1ex]
    & {x_{12},~x_{13},~x_{14},~\dots,~x_{54}} & {\in} & {\{0,1\}}
    \end{array}
    $$

    The subtour $2\to5\to2$ together with the subtour $1\to3\to4\to1$ satisfies the degree constraints but violates the constraint $x_{25}+x_{52}\le1$ of $S=\{2,5\}$. An optimal solution $\tilde{\vet x}(\mathrm{ILP}_{\mathrm{TSP}}^{\mathrm{DFJ}})$ is the tour $\tilde\sigma=(1,3,5,2,4)$:

    $$
    \tilde x_{13}=\tilde x_{35}=\tilde x_{52}=\tilde x_{24}=\tilde x_{41}=1,~~\text{all the other } \tilde x_{ij}=0
    $$

    The optimal value $z(\mathrm{ILP}_{\mathrm{TSP}}^{\mathrm{DFJ}})$ is $18$.

## 13.5 Linear Programming relaxations { #sez-sec-tspf-LP }

### 13.5.1 The assignment relaxation

!!! chiave ""

    Keeping only the degree constraints of the two models, and relaxing the binary constraints into non-negativity constraints, we obtain the following LP model:

    <a id="eq-LP0-TSP"></a>

    \begin{align*}
    && \min \quad \sum_{i\in\mathscr{V}}\sum_{\substack{j\in\mathscr{V}\\j\neq i}}
    d_{ij}x_{ij} \label{obj:LP0-TSP} \tag{13.3a}\\[1ex]
    && \text{subject to}\quad \sum_{\substack{j\in\mathscr{V}\\j\neq i}}x_{ij}&=1,
    & \forall i\in\mathscr{V}, \label{out:LP0-TSP} \tag{13.3b}\\[1ex]
    && \sum_{\substack{i\in\mathscr{V}\\i\neq j}}x_{ij}&=1,
    & \forall j\in\mathscr{V}, \label{in:LP0-TSP} \tag{13.3c}\\[1ex]
    && x_{ij}&\ge 0,
    & \forall(i,j)\in A. \label{nonneg:LP0-TSP} \tag{13.3d}
    \end{align*}

    This LP model is referred to as the $\mathrm{LP}\text{-}0_{\mathrm{TSP}}$ model, or <strong>assignment relaxation</strong>.

- Adding the upper bounds $x_{ij}\le1$ does not change this relaxation, nor the two relaxations below: for every arc $(i,j)$, non-negativity and the degree equation $\eqref{out:LP0-TSP}$ give

    $$
    x_{ij}\le \sum_{\substack{k\in\mathscr{V}\\k\neq i}}x_{ik}=1.
    $$

<a id="box-6-ex-TSP-LP0"></a>

!!! esempio "Example 13.4: $\mathrm{LP}\text{-}0_{\mathrm{TSP}}$ model"

    The $\mathrm{LP}\text{-}0_{\mathrm{TSP}}$ model for the TSP instance of <span style="color:#1971c2">[Example 13.1](#box-2-ex-TSP-inst)</span> is:

    $$
    \begin{array}{rlcl}
    {\min} & {5\,x_{12}+2\,x_{13}+2\,x_{14}+9\,x_{15}+5\,x_{21}+4\,x_{23}+3\,x_{24}} &  &  \\
    & {+4\,x_{25}+2\,x_{31}+4\,x_{32}+4\,x_{34}+7\,x_{35}+2\,x_{41}+3\,x_{42}} &  &  \\
    & {+4\,x_{43}+7\,x_{45}+9\,x_{51}+4\,x_{52}+7\,x_{53}+7\,x_{54}} &  &  \\[1ex]
    \text{subject to} & {x_{12}+x_{13}+x_{14}+x_{15}} & {=} & {1} \\
    & {x_{21}+x_{23}+x_{24}+x_{25}} & {=} & {1} \\
    & {x_{31}+x_{32}+x_{34}+x_{35}} & {=} & {1} \\
    & {x_{41}+x_{42}+x_{43}+x_{45}} & {=} & {1} \\
    & {x_{51}+x_{52}+x_{53}+x_{54}} & {=} & {1} \\
    & {x_{21}+x_{31}+x_{41}+x_{51}} & {=} & {1} \\
    & {x_{12}+x_{32}+x_{42}+x_{52}} & {=} & {1} \\
    & {x_{13}+x_{23}+x_{43}+x_{53}} & {=} & {1} \\
    & {x_{14}+x_{24}+x_{34}+x_{54}} & {=} & {1} \\
    & {x_{15}+x_{25}+x_{35}+x_{45}} & {=} & {1} \\[1ex]
    & {x_{12},~x_{13},~x_{14},~\dots,~x_{54}} & {\ge} & {0}
    \end{array}
    $$

    An optimal solution $\tilde{\vet x}(\mathrm{LP}\text{-}0_{\mathrm{TSP}})$ is:

    $$
    \tilde x_{13}=\tilde x_{34}=\tilde x_{41}=\tilde x_{25}=\tilde x_{52}=1,~~\text{all the other } \tilde x_{ij}=0
    $$

    It is integer, but it is made of the two subtours $1\to3\to4\to1$ and $2\to5\to2$. The optimal value $z(\mathrm{LP}\text{-}0_{\mathrm{TSP}})$ is $16$. Accordingly we have the lower bound:

    $$
    16 \le z(\mathrm{ILP}_{\mathrm{TSP}}^{\mathrm{MTZ}}) = z(\mathrm{ILP}_{\mathrm{TSP}}^{\mathrm{DFJ}})
    $$

### 13.5.2 The relaxation of the MTZ model

!!! chiave ""

    To obtain an LP relaxation of the $\mathrm{ILP}_{\mathrm{TSP}}^{\mathrm{MTZ}}$ model, we relax constraints $\eqref{bin:TSP}$ into non-negativity constraints; the position variables keep their bounds. The obtained LP model reads as follows:

    <a id="eq-LP-TSP-MTZ"></a>

    \begin{align*}
    && \min \quad \sum_{i\in\mathscr{V}}\sum_{\substack{j\in\mathscr{V}\\j\neq i}}
    d_{ij}x_{ij} \label{obj:LP-MTZ} \tag{13.4a}\\[1ex]
    && \text{subject to}\quad \sum_{\substack{j\in\mathscr{V}\\j\neq i}}x_{ij}&=1,
    & \forall i\in\mathscr{V}, \label{out:LP-MTZ} \tag{13.4b}\\[1ex]
    && \sum_{\substack{i\in\mathscr{V}\\i\neq j}}x_{ij}&=1,
    & \forall j\in\mathscr{V}, \label{in:LP-MTZ} \tag{13.4c}\\[1ex]
    && u_i-u_j+(n-1)x_{ij}&\le n-2,
    & \forall i,j\in\mathscr{V}\setminus\{1\},~i\neq j, \label{MTZ:LP-MTZ} \tag{13.4d}\\[1ex]
    && x_{ij}&\ge 0,
    & \forall(i,j)\in A, \label{nonneg:LP-MTZ} \tag{13.4e}\\[1ex]
    && 1\le u_i&\le n-1,
    & \forall i\in\mathscr{V}\setminus\{1\}. \label{pos:LP-MTZ} \tag{13.4f}
    \end{align*}

    This LP model is referred to as the $\mathrm{LP}_{\mathrm{TSP}}^{\mathrm{MTZ}}$ model.

<a id="box-7-prop-MTZ-weak"></a>

!!! teorema "Proposition 13.3: A weak region of the MTZ relaxation"

    Let $(x,u)$ satisfy the degree equations $\eqref{out:LP-MTZ}$–$\eqref{in:LP-MTZ}$, with $x_{ij}\ge0$. If

    $$
    x_{ij}\le\frac{n-2}{n-1}
    \qquad \forall i,j\in\mathscr{V}\setminus\{1\},~i\neq j,
    $$

    then $(x,u)$ is feasible for $\mathrm{LP}_{\mathrm{TSP}}^{\mathrm{MTZ}}$ after setting $u_i=1$ for every $i\neq1$.

??? dimostrazione "Proof"

    With $u_i=u_j=1$, each constraint $\eqref{MTZ:LP-MTZ}$ becomes

    $$
    (n-1)x_{ij}\le n-2,
    $$

    which is exactly the assumed upper bound. The bounds $\eqref{pos:LP-MTZ}$ on the position variables also hold. <span class="qed">□</span>

- The proposition shows why the compact MTZ formulation can have a weak lower bound: many fractional solutions of the assignment relaxation already satisfy the ordering constraints.

<a id="box-8-ex-TSP-LPMTZ"></a>

!!! esempio "Example 13.5: $\mathrm{LP}_{\mathrm{TSP}}^{\mathrm{MTZ}}$ model"

    The $\mathrm{LP}_{\mathrm{TSP}}^{\mathrm{MTZ}}$ model for the TSP instance of <span style="color:#1971c2">[Example 13.1](#box-2-ex-TSP-inst)</span> is:

    $$
    \begin{array}{rlcl}
    {\min} & {5\,x_{12}+2\,x_{13}+2\,x_{14}+9\,x_{15}+5\,x_{21}+4\,x_{23}+3\,x_{24}} &  &  \\
    & {+4\,x_{25}+2\,x_{31}+4\,x_{32}+4\,x_{34}+7\,x_{35}+2\,x_{41}+3\,x_{42}} &  &  \\
    & {+4\,x_{43}+7\,x_{45}+9\,x_{51}+4\,x_{52}+7\,x_{53}+7\,x_{54}} &  &  \\[1ex]
    \text{subject to} & {x_{12}+x_{13}+x_{14}+x_{15}} & {=} & {1} \\
    & {x_{21}+x_{23}+x_{24}+x_{25}} & {=} & {1} \\
    & {x_{31}+x_{32}+x_{34}+x_{35}} & {=} & {1} \\
    & {x_{41}+x_{42}+x_{43}+x_{45}} & {=} & {1} \\
    & {x_{51}+x_{52}+x_{53}+x_{54}} & {=} & {1} \\
    & {x_{21}+x_{31}+x_{41}+x_{51}} & {=} & {1} \\
    & {x_{12}+x_{32}+x_{42}+x_{52}} & {=} & {1} \\
    & {x_{13}+x_{23}+x_{43}+x_{53}} & {=} & {1} \\
    & {x_{14}+x_{24}+x_{34}+x_{54}} & {=} & {1} \\
    & {x_{15}+x_{25}+x_{35}+x_{45}} & {=} & {1} \\
    & {u_2-u_3+4\,x_{23}} & {\le} & {3} \\
    & {u_2-u_4+4\,x_{24}} & {\le} & {3} \\
    & {u_2-u_5+4\,x_{25}} & {\le} & {3} \\
    & {u_3-u_2+4\,x_{32}} & {\le} & {3} \\
    & {u_3-u_4+4\,x_{34}} & {\le} & {3} \\
    & {u_3-u_5+4\,x_{35}} & {\le} & {3} \\
    & {u_4-u_2+4\,x_{42}} & {\le} & {3} \\
    & {u_4-u_3+4\,x_{43}} & {\le} & {3} \\
    & {u_4-u_5+4\,x_{45}} & {\le} & {3} \\
    & {u_5-u_2+4\,x_{52}} & {\le} & {3} \\
    & {u_5-u_3+4\,x_{53}} & {\le} & {3} \\
    & {u_5-u_4+4\,x_{54}} & {\le} & {3} \\[1ex]
    & {x_{12},~x_{13},~x_{14},~\dots,~x_{54}} & {\ge} & {0} \\
    & {u_2,~u_3,~u_4,~u_5} & {\ge} & {1} \\
    & {u_2,~u_3,~u_4,~u_5} & {\le} & {4}
    \end{array}
    $$

    An optimal solution $(\tilde{\vet x},\tilde{\vet u})(\mathrm{LP}_{\mathrm{TSP}}^{\mathrm{MTZ}})$ is:

    \begin{align*}
    &\tilde x_{13}=1,~~\tilde x_{31}=\tilde x_{34}=\tilde x_{41}=\frac{1}{2},~~\tilde x_{25}=\tilde x_{52}=\frac{3}{4},\\
    &\tilde x_{24}=\tilde x_{42}=\tilde x_{45}=\tilde x_{54}=\frac{1}{4},~~\text{all the other } \tilde x_{ij}=0,\\
    &\tilde u_2=\tilde u_3=\tilde u_4=\tilde u_5=1
    \end{align*}

    All the arcs between the cities $2,3,4,5$ have value at most $\frac{3}{4}=\frac{n-2}{n-1}$, as in [Proposition 13.3](#box-7-prop-MTZ-weak). The optimal value $z(\mathrm{LP}_{\mathrm{TSP}}^{\mathrm{MTZ}})$ is $17$. Accordingly we have the lower bound:

    $$
    17 \le z(\mathrm{ILP}_{\mathrm{TSP}}^{\mathrm{MTZ}})
    $$

### 13.5.3 The relaxation of the DFJ model

!!! chiave ""

    To obtain an LP relaxation of the $\mathrm{ILP}_{\mathrm{TSP}}^{\mathrm{DFJ}}$ model, we relax constraints $\eqref{bin:TSP-DFJ}$ into non-negativity constraints. The obtained LP model reads as follows:

    <a id="eq-LP-TSP-DFJ"></a>

    \begin{align*}
    && \min \quad \sum_{i\in\mathscr{V}}\sum_{\substack{j\in\mathscr{V}\\j\neq i}}
    d_{ij}x_{ij} \label{obj:LP-DFJ} \tag{13.5a}\\[1ex]
    && \text{subject to}\quad \sum_{\substack{j\in\mathscr{V}\\j\neq i}}x_{ij}&=1,
    & \forall i\in\mathscr{V}, \label{out:LP-DFJ} \tag{13.5b}\\[1ex]
    && \sum_{\substack{i\in\mathscr{V}\\i\neq j}}x_{ij}&=1,
    & \forall j\in\mathscr{V}, \label{in:LP-DFJ} \tag{13.5c}\\[1ex]
    && \sum_{i\in S}\sum_{\substack{j\in S\\j\neq i}}x_{ij}&\le |S|-1,
    & \forall S\subseteq\mathscr{V}\setminus\{1\},~|S|\ge2, \label{SEC:LP-DFJ} \tag{13.5d}\\[1ex]
    && x_{ij}&\ge 0,
    & \forall(i,j)\in A. \label{nonneg:LP-DFJ} \tag{13.5e}
    \end{align*}

    This LP model is referred to as the $\mathrm{LP}_{\mathrm{TSP}}^{\mathrm{DFJ}}$ model.

- The MTZ model is valuable because it has only $O(n^2)$ variables and constraints. The DFJ model has a stronger relaxation, but exponentially many constraints: in practice, the subtour elimination constraints are added only when they are violated by the current solution of the relaxation.

<a id="box-9-ex-TSP-LPDFJ"></a>

!!! esempio "Example 13.6: $\mathrm{LP}_{\mathrm{TSP}}^{\mathrm{DFJ}}$ model"

    The $\mathrm{LP}_{\mathrm{TSP}}^{\mathrm{DFJ}}$ model for the TSP instance of <span style="color:#1971c2">[Example 13.1](#box-2-ex-TSP-inst)</span> is:

    $$
    \begin{array}{rlcl}
    {\min} & {5\,x_{12}+2\,x_{13}+2\,x_{14}+9\,x_{15}+5\,x_{21}+4\,x_{23}+3\,x_{24}} &  &  \\
    & {+4\,x_{25}+2\,x_{31}+4\,x_{32}+4\,x_{34}+7\,x_{35}+2\,x_{41}+3\,x_{42}} &  &  \\
    & {+4\,x_{43}+7\,x_{45}+9\,x_{51}+4\,x_{52}+7\,x_{53}+7\,x_{54}} &  &  \\[1ex]
    \text{subject to} & {x_{12}+x_{13}+x_{14}+x_{15}} & {=} & {1} \\
    & {x_{21}+x_{23}+x_{24}+x_{25}} & {=} & {1} \\
    & {x_{31}+x_{32}+x_{34}+x_{35}} & {=} & {1} \\
    & {x_{41}+x_{42}+x_{43}+x_{45}} & {=} & {1} \\
    & {x_{51}+x_{52}+x_{53}+x_{54}} & {=} & {1} \\
    & {x_{21}+x_{31}+x_{41}+x_{51}} & {=} & {1} \\
    & {x_{12}+x_{32}+x_{42}+x_{52}} & {=} & {1} \\
    & {x_{13}+x_{23}+x_{43}+x_{53}} & {=} & {1} \\
    & {x_{14}+x_{24}+x_{34}+x_{54}} & {=} & {1} \\
    & {x_{15}+x_{25}+x_{35}+x_{45}} & {=} & {1} \\
    & {x_{23}+x_{32}} & {\le} & {1} \\
    & {x_{24}+x_{42}} & {\le} & {1} \\
    & {x_{25}+x_{52}} & {\le} & {1} \\
    & {x_{34}+x_{43}} & {\le} & {1} \\
    & {x_{35}+x_{53}} & {\le} & {1} \\
    & {x_{45}+x_{54}} & {\le} & {1} \\
    & {x_{23}+x_{24}+x_{32}+x_{34}+x_{42}+x_{43}} & {\le} & {2} \\
    & {x_{23}+x_{25}+x_{32}+x_{35}+x_{52}+x_{53}} & {\le} & {2} \\
    & {x_{24}+x_{25}+x_{42}+x_{45}+x_{52}+x_{54}} & {\le} & {2} \\
    & {x_{34}+x_{35}+x_{43}+x_{45}+x_{53}+x_{54}} & {\le} & {2} \\
    & {x_{23}+x_{24}+x_{25}+x_{32}+x_{34}+x_{35}+x_{42}+x_{43}+x_{45}+x_{52}+x_{53}+x_{54}} & {\le} & {3} \\[1ex]
    & {x_{12},~x_{13},~x_{14},~\dots,~x_{54}} & {\ge} & {0}
    \end{array}
    $$

    An optimal solution $\tilde{\vet x}(\mathrm{LP}_{\mathrm{TSP}}^{\mathrm{DFJ}})$ is the tour $\tilde\sigma=(1,3,5,2,4)$:

    $$
    \tilde x_{13}=\tilde x_{35}=\tilde x_{52}=\tilde x_{24}=\tilde x_{41}=1,~~\text{all the other } \tilde x_{ij}=0
    $$

    The optimal value $z(\mathrm{LP}_{\mathrm{TSP}}^{\mathrm{DFJ}})$ is $18$: on this instance the relaxation closes the gap.

<a id="box-10-ex-TSP-LP"></a>

!!! esempio "Example 13.7: comparing the relaxations"

    For the TSP instance of <span style="color:#1971c2">[Example 13.1](#box-2-ex-TSP-inst)</span>, the three relaxations give the following lower bounds on the optimal value $18$:

    <div class="tabella" markdown="0"><table>
    <tr>
    <th>Relaxation</th>
    <th>Optimal value</th>
    </tr>
    <tr>
    <td><span class="arithmatex">\(\mathrm{LP}\text{-}0_{\mathrm{TSP}}\)</span> (assignment relaxation)</td>
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

---

**Next:** [13.6 ILP models for the metric and asymmetric TSP](ilp-models-for-the-metric-and-asymmetric-tsp.md)
