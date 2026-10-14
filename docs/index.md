---
title: Combinatorial Optimization
hide:
  - navigation
  - toc
---

<div class="hero" markdown>

# Combinatorial Optimization

Teaching material conceived and developed by **[Fabio Furini](https://fabiofurini.github.io/)**, associate
professor at [DIAG](https://www.diag.uniroma1.it/), Sapienza University of Rome.

**The course lecture notes, online**: knapsack, packing, coloring, clique, routing, scheduling and lot sizing problems, solved in every way: formulations and their properties, dynamic programming, heuristic, approximation and ad hoc algorithms; with definitions, results with proofs, examples worked out step by step, exercises with solutions, Colab notebooks and interactive apps.

For the students of the Master's degree in Management Engineering at Sapienza, and for anyone who wants to learn how to solve combinatorial optimization problems. Prerequisites: [Integer Linear Programming](https://fabiofurini.github.io/integer-linear-programming/) for the formulations and [Algorithms](https://fabiofurini.github.io/algorithms/) for the algorithms.

[:material-school: Study the course](combinatorial-optimization-problems/combinatorial-optimization/index.md){ .md-button .md-button--primary }
[:material-star-outline: Explore the problems](selected-problems/index.md){ .md-button }
[:material-pencil: Practice](exercises/index.md){ .md-button }
[:material-download: Get the materials](downloads.md){ .md-button }

</div>

## The parts of the course

The same entries as the menu: each card gives its part and its chapters in the lecture notes.

<div class="grid cards" markdown>

-   :material-puzzle-outline: **Combinatorial optimization**

    ---

    *Part 1 · Chapter 1*

    What a combinatorial optimization problem is: categories, counting the solutions, combinatorial explosion, bounds and gap, complexity.

    [:octicons-arrow-right-24: The chapter](combinatorial-optimization-problems/combinatorial-optimization/index.md)

-   :material-star-outline: **Selected problems**

    ---

    *Part 1 · Chapters 2–8*

    Knapsack problems · Packing problems · Coloring problems · Clique problems · Routing problems · Scheduling problems · Lot sizing problems

    [:octicons-arrow-right-24: The families](selected-problems/index.md)

-   :material-function-variant: **Formulations**

    ---

    *Part 2 · Chapters 9–15*

    Knapsack problems · Packing problems · Coloring problems · Clique problems · Routing problems · Scheduling problems · Lot sizing problems

    [:octicons-arrow-right-24: The chapters](formulations/index.md)

-   :material-table-arrow-right: **Dynamic programming**

    ---

    *Part 3 · Chapters 16–28*

    Principles · Knapsack problems · Lot sizing problems · Miscellaneous problems

    [:octicons-arrow-right-24: The chapters](dynamic-programming/index.md)

-   :material-map-marker-path: **Heuristics**

    ---

    *Part 4 · Chapters 29–33*

    Definitions · Constructive heuristics · Local search · Metaheuristics · MIP heuristics

    [:octicons-arrow-right-24: The chapters](heuristic-algorithms/index.md)

-   :material-approximately-equal: **Approximation**

    ---

    *Part 5 · Chapters 34–40*

    Principles · Knapsack problems · Packing problems · Coloring problems · Clique problems · Routing problems · Scheduling problems

    [:octicons-arrow-right-24: The chapters](approximation-algorithms/index.md)

-   :material-tools: **Ad hoc algorithms**

    ---

    *Part 6 · Chapters 41–42*

    Knapsack problems · Coloring problems

    [:octicons-arrow-right-24: The chapters](specialized-algorithms/index.md)

-   :material-view-list: **Catalogue**

    ---

    *All the problems*

    One page per problem, by family: definition, assumptions and what the course does on the problem.

    [:octicons-arrow-right-24: The catalogue](catalogue/index.md) · [:material-file-pdf-box: PDF](pdf/combinatorial-problem-catalogue.pdf)

-   :material-gesture-tap: **Lab**

    ---

    *Interactive apps*

    The algorithms of the course step by step, on the reference instances or on your own.

    [:octicons-arrow-right-24: The apps](lab/index.md)

-   :simple-googlecolab: **Colab notebooks**

    ---

    *Python · C++*

    The code of the algorithms of the chapters, to run in Google Colab on the examples and the exercises.

    [:octicons-arrow-right-24: The notebooks](notebooks.md)

</div>

## How to use these notes

- **Website and PDF.** Each chapter of the website is a chapter of the lecture notes, with the same numbers and the same colors; long chapters are split into one page per section or per problem.
- **At the top of each chapter** a bar with the part, the PDF of the volume, the exercises and the apps of the chapter; at the bottom, the link to the exercises.
- **By problem.** The catalogue has one page per problem: its definition and the chapters that treat it, technique by technique.
- **The code.** On the pages the algorithms are in pseudo-code; the «Run in Colab» buttons open the notebook with the code in Python and C++.

The boxes have the same colors as in the lecture notes:

<div class="grid" markdown>

!!! definizione "Definition"
    The precise meaning of a new concept.

!!! teorema "Theorem, proposition, observation"
    A result to remember, with its hypotheses.

!!! esempio "Example"
    A computation worked out in full, one step at a time.

!!! formula "Formula"
    In pink the formulas to keep at hand (for example the recurrences of dynamic programming).

!!! algoritmo "Algorithm"
    The pseudo-code, step by step as in the lecture notes.

!!! chiave ""
    **In green** the key point to take away.

</div>

??? dimostrazione "Proof: opens with a click"
    All proofs are included, but folded: first read the statement, then open the proof when you want to study it. The same holds for the solutions of the exercises.

---

By the same author:

- **[Linear Programming](https://fabiofurini.github.io/linear-programming/)** — polyhedra, the simplex algorithm, duality and the dual simplex, with the interactive lab;
- **[Convex Optimization](https://fabiofurini.github.io/convex-optimization/)** — convex sets and functions, convex optimization problems, with interactive graphs;
- **[Algorithms](https://fabiofurini.github.io/algorithms/)** — number representation, pseudo-code, sorting and searching, analysis and recursive algorithms;
- **[Integer Linear Programming](https://fabiofurini.github.io/integer-linear-programming/)** — LP relaxation, valid inequalities, cutting planes, branch-and-bound and branch-and-cut;
- **[Network Optimization](https://fabiofurini.github.io/network-optimization/)** — graphs, spanning trees, shortest paths, network flows, the network simplex and project management;
- **[MIP Modelling](https://fabiofurini.github.io/mip-modelling/)** — integer linear programming models, from the formulation to the solution with solvers;
- **[Operations Research Lab](https://fabiofurini.github.io/operations-research-lab/)** — modelling and solving optimization problems with Python and solvers;
- **[Mathematical Analysis 1](https://fabiofurini.github.io/mathematical-analysis-1/)** — real numbers, functions, limits, derivatives and series, with interactive graphs;
- **[Linear Algebra](https://fabiofurini.github.io/linear-algebra/)** — vectors, matrices, determinants, linear systems and eigenvalues, with the computation lab.

Teaching material by **[Fabio Furini](https://fabiofurini.github.io/)** —
[DIAG](https://www.diag.uniroma1.it/), Sapienza University of Rome.

*This website is also available in [Italian](https://fabiofurini.github.io/ottimizzazione-combinatoria/).*

*The course slides may not be available yet.*
