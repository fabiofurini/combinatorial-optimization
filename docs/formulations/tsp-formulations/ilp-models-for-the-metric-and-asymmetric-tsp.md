---
title: "Metric and asymmetric TSP"
---

# 13.4 ILP models for the metric and asymmetric TSP

<div class="info-capitolo" markdown>

**Part 2 · Formulations and their properties · Chapter 13** · [:material-book-open-variant: Chapter 13: TSP](index.md) · [:material-file-pdf-box: Lecture notes, volume 2 (PDF)](../../pdf/lecture-notes-2-formulations.pdf) · [:material-pencil: Exercises: TSP](../../exercises/tsp-formulations.md)

</div>

The problems of this section are the asymmetric travelling salesman problem (ATSP) and the metric TSP, defined in [Chapter 6 «The travelling salesman problem»](https://fabiofurini.github.io/combinatorial-optimization/combinatorial-optimization-problems/tsp/variants-metric-and-asymmetric-tsp/).

- Given the set $\mathscr{V}=\{1,2,\dots,n\}$ of cities and the set $A$ of directed arcs, each arc $(i,j)$ has its own distance $d_{ij}$, which may differ from $d_{ji}$. We introduce the following $n(n-1)$ <strong>binary variables</strong>:

    $$
    x_{ij}=
    \begin{cases}
    1 & \text{if arc $(i,j)$ is traversed by the tour}\\[1.5ex]
    0 & \text{otherwise}
    \end{cases}
    \qquad \forall (i,j)\in A.
    $$

!!! chiave ""

    Using these variables, an Integer Linear Programming (ILP) model for the asymmetric travelling salesman problem (ATSP) reads as follows:

    <a id="eq-ILP-ATSP"></a>

    \begin{align*}
    && \min \quad \sum_{i\in\mathscr{V}}\sum_{\substack{j\in\mathscr{V}\\j\neq i}}
    d_{ij}x_{ij} \label{obj:ATSP} \tag{13.6a}\\[1ex]
    && \text{subject to}\quad \sum_{\substack{j\in\mathscr{V}\\j\neq i}}x_{ij}&=1,
    & \forall i\in\mathscr{V}, \label{out:ATSP} \tag{13.6b}\\[1ex]
    && \sum_{\substack{i\in\mathscr{V}\\i\neq j}}x_{ij}&=1,
    & \forall j\in\mathscr{V}, \label{in:ATSP} \tag{13.6c}\\[1ex]
    && \sum_{i\in S}\sum_{\substack{j\in S\\j\neq i}}x_{ij}&\le |S|-1,
    & \forall S\subseteq\mathscr{V}\setminus\{1\},~|S|\ge2, \label{SEC:ATSP} \tag{13.6d}\\[1ex]
    && x_{ij}&\in\{0,1\},
    & \forall(i,j)\in A. \label{bin:ATSP} \tag{13.6e}
    \end{align*}

    This ILP model is referred to as the $\mathrm{ILP}_{\mathrm{ATSP}}$ model.

- Description of the objective function and constraints of the $\mathrm{ILP}_{\mathrm{ATSP}}$ model:

    - the linear objective function $\eqref{obj:ATSP}$ minimizes the total distance travelled along the arcs of the tour, each arc with its own distance;

    - constraints $\eqref{out:ATSP}$ and $\eqref{in:ATSP}$ ensure that exactly one arc leaves and exactly one arc enters each city ($2n$ linear constraints);

    - constraints $\eqref{SEC:ATSP}$ are the subtour elimination constraints ($2^{n-1}-n$ linear constraints);

    - finally, constraints $\eqref{bin:ATSP}$ define the variables of the ILP model.

- The $\mathrm{ILP}_{\mathrm{ATSP}}$ model is the $\mathrm{ILP}_{\mathrm{TSP}}^{\mathrm{DFJ}}$ model with the distances of the arcs: its proof of correctness, [Proposition 13.2](index.md#box-4-prop-DFJ-subtours), never uses $d_{ij}=d_{ji}$. For the same reason the $\mathrm{ILP}_{\mathrm{TSP}}^{\mathrm{MTZ}}$ model is also an ILP model of the ATSP.

- A tour and the same tour travelled backwards use opposite arcs: in the ATSP they are different solutions, with different lengths in general.

- The metric TSP, defined in [Chapter 6 «The travelling salesman problem»](https://fabiofurini.github.io/combinatorial-optimization/combinatorial-optimization-problems/tsp/variants-metric-and-asymmetric-tsp/), has the same ILP models as the TSP: the triangle inequality is a property of the distances, not a constraint of the model. The instance of <span style="color:#1971c2">[Example 13.1](index.md#box-2-ex-TSP-inst)</span> is metric, so the $\mathrm{ILP}_{\mathrm{TSP}}^{\mathrm{MTZ}}$ and $\mathrm{ILP}_{\mathrm{TSP}}^{\mathrm{DFJ}}$ models written for it are already models of a metric TSP instance.

<a id="box-11-ex-ATSP"></a>

!!! esempio "Example 13.8: $\mathrm{ILP}_{\mathrm{ATSP}}$ model"

    We consider the set $\mathscr{V}=\{1,2,3,4\}$ of $4$ cities ($n=4$), with the asymmetric distance matrix

    $$
    \begin{array}{c|cccc}
    \toprule
    d_{ij}&1&2&3&4\\
    \midrule
    1&-&2&7&7\\
    2&2&-&4&2\\
    3&9&7&-&1\\
    4&2&4&1&-\\
    \bottomrule
    \end{array}
    $$

    For instance, $d_{13}=7$ and $d_{31}=9$. The $\mathrm{ILP}_{\mathrm{ATSP}}$ model for this ATSP instance has $12$ arc variables, $8$ degree constraints and $4$ subtour elimination constraints, one for every subset $S\subseteq\{2,3,4\}$ with at least two cities:

    $$
    \begin{array}{rlcl}
    {\min} & {2\,x_{12}+7\,x_{13}+7\,x_{14}+2\,x_{21}+4\,x_{23}+2\,x_{24}} &  &  \\
    & {+9\,x_{31}+7\,x_{32}+x_{34}+2\,x_{41}+4\,x_{42}+x_{43}} &  &  \\[1ex]
    \text{subject to} & {x_{12}+x_{13}+x_{14}} & {=} & {1} \\
    & {x_{21}+x_{23}+x_{24}} & {=} & {1} \\
    & {x_{31}+x_{32}+x_{34}} & {=} & {1} \\
    & {x_{41}+x_{42}+x_{43}} & {=} & {1} \\
    & {x_{21}+x_{31}+x_{41}} & {=} & {1} \\
    & {x_{12}+x_{32}+x_{42}} & {=} & {1} \\
    & {x_{13}+x_{23}+x_{43}} & {=} & {1} \\
    & {x_{14}+x_{24}+x_{34}} & {=} & {1} \\
    & {x_{23}+x_{32}} & {\le} & {1} \\
    & {x_{24}+x_{42}} & {\le} & {1} \\
    & {x_{34}+x_{43}} & {\le} & {1} \\
    & {x_{23}+x_{24}+x_{32}+x_{34}+x_{42}+x_{43}} & {\le} & {2} \\[1ex]
    & {x_{12},~x_{13},~x_{14},~\dots,~x_{43}} & {\in} & {\{0,1\}}
    \end{array}
    $$

    The two subtours $1\to2\to1$ and $3\to4\to3$, of total length $2+2+1+1=6$, satisfy the degree constraints but violate the constraint $x_{34}+x_{43}\le1$ of $S=\{3,4\}$. An optimal solution $\tilde{\vet x}(\mathrm{ILP}_{\mathrm{ATSP}})$ is the tour $\tilde\sigma=(1,2,3,4)$:

    $$
    \tilde x_{12}=\tilde x_{23}=\tilde x_{34}=\tilde x_{41}=1,~~\text{all the other } \tilde x_{ij}=0
    $$

    The optimal value $z(\mathrm{ILP}_{\mathrm{ATSP}})$ is $2+4+1+2=9$, and the optimal tour is unique. The same tour travelled backwards, $(1,4,3,2)$, has length $7+1+7+2=17$.

## 13.5 Typical mistakes

!!! attenzione "Warning"

    - <strong>Writing the MTZ constraints for the city $1$.</strong> The constraints [(13.1d)](index.md#mjx-eqn:MTZ:TSP) are written only for the pairs of cities different from city $1$: the city $1$ has no position variable.

    - <strong>Using a smaller coefficient than $n-1$.</strong> With a coefficient smaller than $n-1$ the constraint cuts off feasible tours; $n-1$ is the smallest valid value.

    - <strong>Taking $S=\mathscr{V}$ in the subtour elimination constraints.</strong> A tour uses $|\mathscr{V}|$ arcs inside $\mathscr{V}$: the constraint would cut off every tour. The sets $S$ are proper subsets of the cities, with at least two cities.

    - <strong>Trusting the MTZ bound.</strong> By [Proposition 13.3](index.md#box-7-prop-MTZ-weak), many fractional solutions of the assignment relaxation are feasible for the MTZ relaxation: the compact formulation is not a strong one.

    - <strong>Listing all the subtour elimination constraints.</strong> Their number is $2^{n-1}-n$: they are not written all at once, but added when violated.

    - <strong>Identifying a tour with its reverse in the ATSP.</strong> With asymmetric distances the two directions of a tour are different solutions: in <span style="color:#1971c2">[Example 13.8](#box-11-ex-ATSP)</span> they have lengths $9$ and $17$.

    - <strong>Adding the triangle inequality as a constraint.</strong> In the metric TSP the triangle inequality holds for the data $d_{ij}$; the variables of the model are the same as in the TSP.

## 13.6 In summary

!!! chiave "In summary"

    - The two models have the same arc variables $x_{ij}$ and the same degree constraints; they differ in how they forbid the subtours.

    - The MTZ model adds $n-1$ position variables and $(n-1)(n-2)$ constraints: it is compact, but its relaxation is weak.

    - The DFJ model adds $2^{n-1}-n$ subtour elimination constraints: the relaxation is stronger, and the constraints are generated when needed.

    - Both models are correct: an integer solution is feasible if and only if its arcs form one tour.

    - Both models are written on arcs, so they are also models of the ATSP: the $\mathrm{ILP}_{\mathrm{ATSP}}$ model is the DFJ model with $d_{ij}\neq d_{ji}$ allowed. The metric TSP has the same models as the TSP.

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
    <td><span class="arithmatex">\(z(\mathrm{LP}\text{-}0_{\mathrm{TSP}})\)</span></td>
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

**Exercises on this chapter:** [:material-pencil: TSP](../../exercises/tsp-formulations.md)

