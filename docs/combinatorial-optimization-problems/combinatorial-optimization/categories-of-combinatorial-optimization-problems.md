---
title: "Categories of combinatorial optimization problems"
---

# 1.2 Categories of combinatorial optimization problems { #sez-sec-categories }

<div class="info-capitolo" markdown>

**Part 1 · Combinatorial optimization problems · Chapter 1** · [:material-book-open-variant: Chapter 1: Combinatorial optimization](index.md) · [:material-file-pdf-box: Lecture notes, volume 1 (PDF)](../../pdf/lecture-notes-1-combinatorial-optimization-problems.pdf) · [:material-pencil: Exercises: Combinatorial optimization](../../exercises/combinatorial-optimization.md)

</div>

- The decisions of a combinatorial optimization problem fall into five <strong>categories</strong>. Each category is associated with a combinatorial object, which is the form of a solution, and with a natural type of decision variables.

## 1.2.1 Categories of decisions

1. <strong>IN/OUT (inclusion/exclusion).</strong> Each element is either selected or not: a solution is a <strong>subset</strong> of the elements, described by binary variables $x_j \in \{0,1\}$, with $x_j = 1$ if and only if element $j$ is selected.

    - Examples: select the projects to fund with a limited budget, choose the products of a portfolio, decide which clients to visit in a route.

2. <strong>Counting (discrete quantities).</strong> The decision is how many units of each element to use: a solution is a vector of <strong>integer quantities</strong>, described by integer variables $x_j \in \Z_{\ge 0}$.

    - Examples: how many units of a product to produce, how many operators to assign to a shift, how many servers to activate in a data center.

3. <strong>Assignment.</strong> Each element is assigned to exactly one of several distinct resources: a solution is a <strong>function</strong> from the elements to the resources, described by binary variables $x_{ij} \in \{0,1\}$, equal to $1$ if and only if element $j$ is assigned to resource $i$.

    - Examples: assign tasks to machines or people, match students to projects, allocate vehicles to delivery routes.

4. <strong>Ordering and sequences.</strong> The decision is the order in which the elements are processed or visited: a solution is a <strong>permutation</strong> $\sigma = (\sigma_1,\dots,\sigma_n)$ of the elements, or a cyclic ordering for a round trip.

    - Examples: the order in which jobs are processed, the sequence of operations on a machine, the order of visit of the customers.

5. <strong>Configuration and partitioning.</strong> The elements are subdivided into groups, each one satisfying a condition such as a capacity: a solution is a <strong>partition</strong> of the elements into interchangeable groups.

    - Examples: subdivide a set of elements into groups, pack objects into bins, cut materials minimizing waste.

<div class="tabella" markdown="0"><table>
<tr>
<th><strong>Category</strong></th>
<th><strong>Combinatorial object</strong></th>
<th><strong>Natural variables</strong></th>
</tr>
<tr>
<td>IN/OUT</td>
<td>subset</td>
<td><span class="arithmatex">\(x_j \in \{0,1\}\)</span></td>
</tr>
<tr>
<td>counting</td>
<td>vector of integer quantities</td>
<td><span class="arithmatex">\(x_j \in \Z_{\ge 0}\)</span></td>
</tr>
<tr>
<td>assignment</td>
<td>function (labelled classes)</td>
<td><span class="arithmatex">\(x_{ij} \in \{0,1\}\)</span>, one resource <span class="arithmatex">\(i\)</span> for each <span class="arithmatex">\(j\)</span></td>
</tr>
<tr>
<td>ordering and sequences</td>
<td>permutation, cyclic ordering</td>
<td><span class="arithmatex">\(x_{ij} \in \{0,1\}\)</span>, equal to <span class="arithmatex">\(1\)</span> if <span class="arithmatex">\(j\)</span> follows <span class="arithmatex">\(i\)</span></td>
</tr>
<tr>
<td>configuration and partitioning</td>
<td>partition (unlabelled classes)</td>
<td><span class="arithmatex">\(x_{ij} \in \{0,1\}\)</span>, element <span class="arithmatex">\(j\)</span> in group <span class="arithmatex">\(i\)</span></td>
</tr>
</table></div>

- The table summarizes the five categories, their combinatorial objects and their natural variables.

- With a suitable ground set every category fits [Definition 1.1](combinatorial-optimization-problems.md#box-1-def-cop): for an assignment the ground set is the set of pairs (element, resource), for an ordering the set of pairs of consecutive elements.

- Assignment and partitioning differ only in the resources: distinct resources give labelled classes, identical resources give interchangeable groups (Section [1.3](counting-the-solutions.md#sez-sec-counting)).

!!! chiave ""

    The category of the decisions determines the combinatorial object of the solutions, the number of candidate solutions and the natural decision variables.

## 1.2.2 Application areas

- Combinatorial optimization problems arise in many application areas. The main ones, with their typical decisions and some examples, are:

<div class="tabella" markdown="0"><table>
<tr>
<th><strong>Area</strong></th>
<th><strong>Typical decisions</strong></th>
<th><strong>Examples</strong></th>
</tr>
<tr>
<td>production planning</td>
<td>what, when and how much to produce, with which resources</td>
<td>lot sizing, capacity planning, assembly line balancing</td>
</tr>
<tr>
<td>scheduling</td>
<td>order and timing of the operations on the resources</td>
<td>job scheduling on machines, project scheduling, maintenance scheduling</td>
</tr>
<tr>
<td>facility location</td>
<td>where to open facilities and which clients each one serves</td>
<td>warehouse location, plant location, emergency service location</td>
</tr>
<tr>
<td>packing</td>
<td>how to fit items into containers</td>
<td>cargo selection, multi-vehicle loading, pallet loading</td>
</tr>
<tr>
<td>cutting</td>
<td>how to cut stock material into the required pieces</td>
<td>cutting of bars and sheets, trim loss minimization, guillotine cutting</td>
</tr>
<tr>
<td>logistics and supply chain</td>
<td>routes, fleets and inventory levels</td>
<td>vehicle routing, fleet management, inventory management</td>
</tr>
<tr>
<td>transportation</td>
<td>crews, vehicles and timetables of a mobility system</td>
<td>crew scheduling, aircraft routing, train timetabling</td>
</tr>
<tr>
<td>personnel management</td>
<td>assignment of people to tasks, shifts and roles</td>
<td>workforce scheduling, nurse rostering, shift scheduling</td>
</tr>
<tr>
<td>network design</td>
<td>which nodes and arcs of a network to activate</td>
<td>telecommunication, energy and transportation networks</td>
</tr>
</table></div>

- A real problem often combines several categories. For example, facility location decides which facilities to open (IN/OUT) and assigns each client to an open facility (assignment).

## 1.2.3 The problems of the course by category

- The table places the problems of the course in their categories; each name links to its page.

<div class="tabella" markdown="0"><table>
<tr>
<th><strong>Problem</strong></th>
<th><strong>Solution</strong></th>
<th><strong>Category</strong></th>
</tr>
<tr>
<td><a href="https://fabiofurini.github.io/combinatorial-optimization/combinatorial-optimization-problems/knapsack/the-0-1-knapsack-problem/">0/1 knapsack problem (KP)</a></td>
<td>subset of items</td>
<td>IN/OUT</td>
</tr>
<tr>
<td><a href="https://fabiofurini.github.io/combinatorial-optimization/combinatorial-optimization-problems/knapsack/the-subset-sum-problem/">subset sum problem (SSP)</a></td>
<td>subset of items</td>
<td>IN/OUT</td>
</tr>
<tr>
<td><a href="https://fabiofurini.github.io/combinatorial-optimization/combinatorial-optimization-problems/knapsack/the-bounded-knapsack-problem/">bounded knapsack problem (BKP)</a></td>
<td>number of copies of each item</td>
<td>counting</td>
</tr>
<tr>
<td><a href="https://fabiofurini.github.io/combinatorial-optimization/combinatorial-optimization-problems/knapsack/the-unbounded-knapsack-problem/">unbounded knapsack problem (UKP)</a></td>
<td>number of copies of each item</td>
<td>counting</td>
</tr>
<tr>
<td><a href="https://fabiofurini.github.io/combinatorial-optimization/combinatorial-optimization-problems/knapsack/the-multidimensional-knapsack-problem/">multidimensional knapsack problem (MDKP)</a></td>
<td>subset of items</td>
<td>IN/OUT</td>
</tr>
<tr>
<td><a href="https://fabiofurini.github.io/combinatorial-optimization/combinatorial-optimization-problems/knapsack/the-multiple-knapsack-problem/">multiple knapsack problem (MKP)</a></td>
<td>each item in a knapsack or none</td>
<td>assignment</td>
</tr>
<tr>
<td><a href="https://fabiofurini.github.io/combinatorial-optimization/combinatorial-optimization-problems/knapsack/the-multiple-choice-knapsack-problem/">multiple-choice knapsack problem (MCKP)</a></td>
<td>one item per class</td>
<td>IN/OUT</td>
</tr>
<tr>
<td><a href="https://fabiofurini.github.io/combinatorial-optimization/combinatorial-optimization-problems/knapsack/the-knapsack-problem-with-setups/">knapsack problem with setups (KPS)</a></td>
<td>subset of classes and of items</td>
<td>IN/OUT</td>
</tr>
<tr>
<td><a href="https://fabiofurini.github.io/combinatorial-optimization/combinatorial-optimization-problems/bin-packing/the-bin-packing-problem/">bin packing problem (BPP)</a></td>
<td>partition of the items into bins</td>
<td>partitioning</td>
</tr>
<tr>
<td><a href="https://fabiofurini.github.io/combinatorial-optimization/combinatorial-optimization-problems/bin-packing/the-cutting-stock-problem/">cutting stock problem (CSP)</a></td>
<td>number of rolls cut with each pattern</td>
<td>configuration, counting</td>
</tr>
<tr>
<td><a href="https://fabiofurini.github.io/combinatorial-optimization/combinatorial-optimization-problems/coloring/the-vertex-coloring-problem/">vertex coloring problem (VCP)</a></td>
<td>partition of the vertices into stable sets</td>
<td>partitioning</td>
</tr>
<tr>
<td><a href="https://fabiofurini.github.io/combinatorial-optimization/combinatorial-optimization-problems/clique/the-maximum-clique-problem/">maximum clique problem (MCP)</a></td>
<td>subset of vertices</td>
<td>IN/OUT</td>
</tr>
<tr>
<td><a href="https://fabiofurini.github.io/combinatorial-optimization/combinatorial-optimization-problems/clique/the-maximum-clique-problem/">maximum stable set problem (MSSP)</a></td>
<td>subset of vertices</td>
<td>IN/OUT</td>
</tr>
<tr>
<td><a href="https://fabiofurini.github.io/combinatorial-optimization/combinatorial-optimization-problems/tsp/the-travelling-salesman-problem/">travelling salesman problem (TSP)</a></td>
<td>cyclic ordering of the cities</td>
<td>ordering</td>
</tr>
<tr>
<td><a href="https://fabiofurini.github.io/combinatorial-optimization/combinatorial-optimization-problems/tsp/variants-metric-and-asymmetric-tsp/">asymmetric travelling salesman problem (ATSP)</a></td>
<td>ordering of the cities on a round trip</td>
<td>ordering</td>
</tr>
<tr>
<td><a href="https://fabiofurini.github.io/combinatorial-optimization/combinatorial-optimization-problems/pcmax/scheduling-on-identical-parallel-machines/">scheduling on identical parallel machines (<span class="arithmatex">\(P\|C_{\max}\)</span>)</a></td>
<td>assignment of the jobs to the machines</td>
<td>assignment</td>
</tr>
<tr>
<td><a href="https://fabiofurini.github.io/combinatorial-optimization/combinatorial-optimization-problems/lot-sizing/the-capacitated-lot-sizing-problem/">capacitated lot sizing problem (CLS)</a></td>
<td>setup periods and quantities produced</td>
<td>IN/OUT, counting</td>
</tr>
</table></div>

---

**Next:** [1.3 Counting the solutions](counting-the-solutions.md)
