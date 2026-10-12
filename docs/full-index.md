# Full index

## [Combinatorial optimization problems](combinatorial-optimization-problems/index.md)

1. [Combinatorial optimization problems](combinatorial-optimization-problems/combinatorial-optimization.md)
    - 1.1 Combinatorial optimization problems
    - 1.2 The six problems of the course
    - 1.3 Counting the solutions
    - 1.4 Combinatorial explosion and brute force
    - 1.5 Primal bounds, dual bounds and gap
    - 1.6 A glimpse of computational complexity
    - 1.7 Roadmap of the course
    - 1.8 Typical mistakes
    - 1.9 In summary
    - 1.10 Exercises
2. [Knapsack problems](combinatorial-optimization-problems/knapsack.md)
    - 2.1 The knapsack problem
    - 2.2 The subset sum problem
    - 2.3 The bounded knapsack problem
    - 2.4 The unbounded knapsack problem
    - 2.5 The multidimensional knapsack problem
    - 2.6 The multiple knapsack problem
    - 2.7 The multiple-choice knapsack problem
    - 2.8 The knapsack problem with setups
    - 2.9 The variants at a glance
    - 2.10 Remarks
    - 2.11 Typical mistakes
    - 2.12 In summary
3. [Bin packing and cutting stock](combinatorial-optimization-problems/bin-packing.md)
    - 3.1 The bin packing problem
    - 3.2 The cutting stock problem
    - 3.3 Remarks
    - 3.4 Typical mistakes
    - 3.5 In summary
4. [Vertex coloring](combinatorial-optimization-problems/coloring.md)
    - 4.1 A short review of graphs
    - 4.2 The vertex coloring problem
    - 4.3 Remarks
    - 4.4 Typical mistakes
    - 4.5 In summary
5. [The maximum clique problem](combinatorial-optimization-problems/clique.md)
    - 5.1 The maximum clique problem
    - 5.2 Counting the solutions, a first solution and the bounds
    - 5.3 Weighted variants
    - 5.4 Complexity
    - 5.5 Remarks
    - 5.6 Typical mistakes
    - 5.7 In summary
6. [The travelling salesman problem](combinatorial-optimization-problems/tsp.md)
    - 6.1 The travelling salesman problem
    - 6.2 Variants: metric and asymmetric TSP
    - 6.3 Counting the tours
    - 6.4 A first tour by hand
    - 6.5 A combinatorial lower bound
    - 6.6 Remarks
    - 6.7 Typical mistakes
    - 6.8 In summary
7. [Parallel machine scheduling](combinatorial-optimization-problems/pcmax.md)
    - 7.1 Scheduling on identical parallel machines
    - 7.2 The three-field notation
    - 7.3 Counting the solutions
    - 7.4 A first schedule by hand
    - 7.5 A combinatorial lower bound
    - 7.6 Relation with the bin packing problem
    - 7.7 Remarks
    - 7.8 Typical mistakes
    - 7.9 In summary
8. [Capacitated lot sizing](combinatorial-optimization-problems/lot-sizing.md)
    - 8.1 The capacitated lot sizing problem
    - 8.2 Variants
    - 8.3 The reference instance
    - 8.4 Counting the solutions
    - 8.5 A first plan by hand
    - 8.6 A combinatorial lower bound
    - 8.7 Remarks
    - 8.8 Typical mistakes
    - 8.9 In summary

## [Formulations and their properties](formulations/index.md)

9. [Formulations of the knapsack problem](formulations/knapsack-formulations.md)
    - 9.1 The problem in brief
    - 9.2 An ILP model for the Knapsack Problem
    - 9.3 A first Linear Programming relaxation
    - 9.4 A second Linear Programming relaxation
    - 9.5 Knapsack Problem upper bounds
    - 9.6 Typical mistakes
    - 9.7 In summary
10. [Formulations of the bin packing problem](formulations/bin-packing-formulations.md)
    - 10.1 The problem in brief
    - 10.2 An ILP model for the Bin Packing Problem
    - 10.3 A first Linear Programming relaxation
    - 10.4 A second Linear Programming relaxation
    - 10.5 Typical mistakes
    - 10.6 In summary
11. [Formulations of the vertex coloring problem](formulations/coloring-formulations.md)
    - 11.1 The problem in brief
    - 11.2 An ILP model for the Vertex Coloring Problem
    - 11.3 A first Linear Programming relaxation
    - 11.4 A second Linear Programming relaxation
    - 11.5 Typical mistakes
    - 11.6 In summary
12. [Formulations of the maximum clique problem](formulations/clique-formulations.md)
    - 12.1 The problem in brief
    - 12.2 The edge formulation
    - 12.3 The Linear Programming relaxations
    - 12.4 Clique inequalities: a stronger formulation
    - 12.5 The relation with vertex coloring
    - 12.6 Typical mistakes
    - 12.7 In summary
13. [Formulations of the travelling salesman problem](formulations/tsp-formulations.md)
    - 13.1 The problem in brief
    - 13.2 A model with position variables (MTZ)
    - 13.3 A model with subtour elimination constraints (DFJ)
    - 13.4 Linear Programming relaxations
    - 13.5 Typical mistakes
    - 13.6 In summary
14. [Formulations of parallel machine scheduling](formulations/pcmax-formulations.md)
    - 14.1 The problem in brief
    - 14.2 An ILP model for $\PCmax$
    - 14.3 A first Linear Programming relaxation
    - 14.4 Additional considerations
    - 14.5 Typical mistakes
    - 14.6 In summary
15. [Formulations of capacitated lot sizing](formulations/lot-sizing-formulations.md)
    - 15.1 The problem in brief
    - 15.2 A formulation with a big-M link
    - 15.3 A shortest-path formulation
    - 15.4 Comparing the formulations
    - 15.5 Several products, setup times and initial inventory
    - 15.6 Typical mistakes
    - 15.7 In summary

## [Dynamic programming](dynamic-programming/index.md)

16. [Principles of dynamic programming](dynamic-programming/dp-principles.md)
    - 16.1 Divide, conquer and combine
    - 16.2 Problem properties required by DP algorithms
    - 16.3 Steps for designing a DP algorithm
    - 16.4 The DP algorithms of this module
    - 16.5 Typical mistakes
    - 16.6 In summary
17. [Dynamic programming for knapsack problems](dynamic-programming/dp-knapsack.md)
    - 17.1 A DP algorithm for the Knapsack Problem
    - 17.2 A DP algorithm for the Unbounded Knapsack Problem
    - 17.3 A DP algorithm for the Bounded Knapsack Problem
18. [Rod cutting and coin change](dynamic-programming/dp-rod-cutting-coin-change.md)
    - 18.1 A DP algorithm for the Rod Cutting Problem
    - 18.2 A DP algorithm for the Coin Change Problem
19. [Dynamic programming for lot sizing](dynamic-programming/dp-lot-sizing.md)
    - 19.1 Problem definition
    - 19.2 A DP algorithm for the ULS
    - 19.3 A DP algorithm for the capacitated case
    - 19.4 Typical mistakes
    - 19.5 In summary

## [Heuristic algorithms](heuristic-algorithms/index.md)

20. [Heuristic algorithms: definitions](heuristic-algorithms/heuristics.md)
    - 20.1 Heuristic algorithms
    - 20.2 The problems and the assumptions
    - 20.3 Primal and dual bounds
    - 20.4 Classification of heuristic algorithms
    - 20.5 Solution representation and search space
    - 20.6 Neighbourhoods and local optima
    - 20.7 Intensification and diversification
    - 20.8 How to evaluate a heuristic algorithm
    - 20.9 Typical mistakes
    - 20.10 In summary
21. [Constructive heuristics](heuristic-algorithms/constructive-heuristics.md)
    - 21.1 Constructive heuristics
    - 21.2 The problems and the assumptions
    - 21.3 The greedy paradigm
    - 21.4 The knapsack problem: which order?
    - 21.5 The bin packing problem: first sort, then pack
    - 21.6 Scheduling on parallel machines: longest jobs first
    - 21.7 The travelling salesman problem: append or insert?
    - 21.8 Randomized construction
    - 21.9 Look-ahead and regret
    - 21.10 What constructive heuristics give, and what they do not
    - 21.11 Typical mistakes
    - 21.12 In summary
    - 21.13 <code>C++</code> implementation
22. [Local search](heuristic-algorithms/local-search.md)
    - 22.1 Local search
    - 22.2 The problems, the assumptions and the starting solutions
    - 22.3 Local search: the scheme
    - 22.4 Neighbourhoods for the four problems
    - 22.5 First improvement and best improvement
    - 22.6 Evaluating a move incrementally
    - 22.7 TSP: 2-opt and Or-opt
    - 22.8 $P\,||\,C_{\max}$: move and swap
    - 22.9 Flat landscapes and auxiliary objectives
    - 22.10 KP: feasibility and penalties
    - 22.11 Variable neighbourhood descent
    - 22.12 Multi-start local search
    - 22.13 Typical mistakes
    - 22.14 In summary
    - 22.15 <code>C++</code> implementation
23. [Metaheuristics](heuristic-algorithms/metaheuristics.md)
    - 23.1 Metaheuristics
    - 23.2 The problems and the assumptions
    - 23.3 How to escape from a local optimum
    - 23.4 Simulated annealing
    - 23.5 Tabu search
    - 23.6 Iterated local search
    - 23.7 Variable neighbourhood search
    - 23.8 GRASP
    - 23.9 Large neighbourhood search
    - 23.10 Population-based methods: genetic and memetic algorithms
    - 23.11 Comparison and conclusions
    - 23.12 Typical mistakes
    - 23.13 In summary
    - 23.14 <code>C++</code> implementation
24. [MIP heuristics for the classical problems](heuristic-algorithms/mip-heuristics-classical.md)
    - 24.1 MIP-based heuristics
    - 24.2 The problems and their MIP models
    - 24.3 Rounding
    - 24.4 Diving
    - 24.5 The feasibility pump
    - 24.6 RINS, local branching and proximity search
    - 24.7 Relax-and-fix and fix-and-optimize on lot sizing
    - 24.8 Heuristics inside the solver
    - 24.9 What the MIP-based heuristics give
    - 24.10 <code>Python</code> implementation
    - 24.11 Typical mistakes
    - 24.12 In summary

## [Approximation algorithms](approximation-algorithms/index.md)

25. [Approximation algorithms: definitions](approximation-algorithms/approximation.md)
    - 25.1 Approximation algorithms
    - 25.2 Approximation schemes
    - 25.3 Typical mistakes
    - 25.4 In summary
26. [Approximation algorithms for bin packing](approximation-algorithms/bin-packing-approximation.md)
    - 26.1 The problem and the assumptions
    - 26.2 The Next Fit
    - 26.3 The Any Fit class
    - 26.4 Half-full property
    - 26.5 Performance guarantees
    - 26.6 Typical mistakes
    - 26.7 In summary
    - 26.8 <code>C++</code> implementation
27. [Approximation algorithms for the knapsack problem](approximation-algorithms/knapsack-approximation.md)
    - 27.1 The problem and the assumptions
    - 27.2 Split item and residual capacity
    - 27.3 The greedy algorithm
    - 27.4 The Ext-Greedy algorithm
    - 27.5 The $H^2$ algorithm
    - 27.6 The $H^{\ell}$ algorithm
    - 27.7 The Basic-FPTAS algorithm
    - 27.8 Performance guarantees
    - 27.9 Absolute performance guarantee
    - 27.10 Typical mistakes
    - 27.11 In summary
    - 27.12 <code>C++</code> implementation
28. [Approximation for P|Cmax](approximation-algorithms/pcmax-approximation.md)
    - 28.1 The problem and the assumptions
    - 28.2 The algorithms $LIST$ and $LPT$
    - 28.3 A property of list scheduling
    - 28.4 Performance guarantees
    - 28.5 Sources
    - 28.6 Typical mistakes
    - 28.7 In summary
29. [Approximation for the metric TSP](approximation-algorithms/tsp-approximation.md)
    - 29.1 The problem and the assumptions
    - 29.2 The double tree and the Christofides algorithms
    - 29.3 Structural properties
    - 29.4 Performance guarantees
    - 29.5 The general TSP
    - 29.6 Sources
    - 29.7 Typical mistakes
    - 29.8 In summary
30. [Limits of approximation: vertex coloring](approximation-algorithms/coloring-approximation.md)
    - 30.1 The problem and the assumptions
    - 30.2 The greedy coloring and DSATUR
    - 30.3 No ratio below four thirds
    - 30.4 What the greedy coloring guarantees
    - 30.5 DSATUR as a heuristic
    - 30.6 Sources
    - 30.7 Typical mistakes
    - 30.8 In summary

## [Specialized algorithms](specialized-algorithms/index.md)

31. [Knapsack: branch-and-bound on the critical item](specialized-algorithms/knapsack-branch-and-bound.md)
    - 31.1 The algorithm for the KP
    - 31.2 A worked example
    - 31.3 Typical mistakes
    - 31.4 In summary
