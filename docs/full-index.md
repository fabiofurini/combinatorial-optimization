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
    - 14.2 An ILP model for $P\|C_{\max}$
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
17. [DP for the knapsack problem](dynamic-programming/dp-knapsack/index.md)
    - 17.1 Problem definition
    - [17.2 A first DP algorithm](dynamic-programming/dp-knapsack/a-first-dp-algorithm.md)
    - [17.3 A second DP algorithm](dynamic-programming/dp-knapsack/a-second-dp-algorithm.md)
    - [17.4 Typical mistakes](dynamic-programming/dp-knapsack/typical-mistakes.md)
    - [17.5 In summary](dynamic-programming/dp-knapsack/typical-mistakes.md)
18. [DP for the unbounded knapsack problem](dynamic-programming/dp-unbounded-knapsack/index.md)
    - 18.1 Problem definition
    - [18.2 A first DP algorithm](dynamic-programming/dp-unbounded-knapsack/a-first-dp-algorithm.md)
    - [18.3 A second DP algorithm](dynamic-programming/dp-unbounded-knapsack/a-second-dp-algorithm.md)
    - [18.4 Typical mistakes](dynamic-programming/dp-unbounded-knapsack/typical-mistakes.md)
    - [18.5 In summary](dynamic-programming/dp-unbounded-knapsack/typical-mistakes.md)
19. [DP for the bounded knapsack problem](dynamic-programming/dp-bounded-knapsack.md)
    - 19.1 Problem definition
    - 19.2 A DP algorithm
    - 19.3 Typical mistakes
    - 19.4 In summary
20. [DP for the rod cutting problem](dynamic-programming/dp-rod-cutting/index.md)
    - 20.1 Problem definition
    - [20.2 A first DP algorithm](dynamic-programming/dp-rod-cutting/a-first-dp-algorithm.md)
    - [20.3 A second DP algorithm](dynamic-programming/dp-rod-cutting/a-second-dp-algorithm.md)
    - [20.4 Typical mistakes](dynamic-programming/dp-rod-cutting/typical-mistakes.md)
    - [20.5 In summary](dynamic-programming/dp-rod-cutting/typical-mistakes.md)
21. [DP for the coin change problem](dynamic-programming/dp-coin-change.md)
    - 21.1 Problem definition
    - 21.2 A DP algorithm
    - 21.3 Typical mistakes
    - 21.4 In summary
22. [Dynamic programming for lot sizing](dynamic-programming/dp-lot-sizing/index.md)
    - 22.1 Problem definition
    - [22.2 A DP algorithm for the ULS](dynamic-programming/dp-lot-sizing/a-dp-algorithm-for-the-uls.md)
    - [22.3 A DP algorithm for the capacitated case](dynamic-programming/dp-lot-sizing/a-dp-algorithm-for-the-capacitated-case.md)
    - [22.4 Typical mistakes](dynamic-programming/dp-lot-sizing/typical-mistakes.md)
    - [22.5 In summary](dynamic-programming/dp-lot-sizing/typical-mistakes.md)

## [Heuristic algorithms](heuristic-algorithms/index.md)

23. [Heuristic algorithms: definitions](heuristic-algorithms/heuristics.md)
    - 23.1 Heuristic algorithms
    - 23.2 The problems and the assumptions
    - 23.3 Primal and dual bounds
    - 23.4 Classification of heuristic algorithms
    - 23.5 Solution representation and search space
    - 23.6 Neighbourhoods and local optima
    - 23.7 Intensification and diversification
    - 23.8 How to evaluate a heuristic algorithm
    - 23.9 Typical mistakes
    - 23.10 In summary
24. [Constructive heuristics](heuristic-algorithms/constructive-heuristics/index.md)
    - 24.1 Constructive heuristics
    - [24.2 The problems and the assumptions](heuristic-algorithms/constructive-heuristics/the-problems-and-the-assumptions.md)
    - [24.3 The greedy paradigm](heuristic-algorithms/constructive-heuristics/the-problems-and-the-assumptions.md)
    - [24.4 The knapsack problem: which order?](heuristic-algorithms/constructive-heuristics/the-knapsack-problem-which-order.md)
    - [24.5 The bin packing problem: first sort, then pack](heuristic-algorithms/constructive-heuristics/the-bin-packing-problem-first-sort-then-pack.md)
    - [24.6 Scheduling on parallel machines: longest jobs first](heuristic-algorithms/constructive-heuristics/scheduling-on-parallel-machines-longest-jobs-first.md)
    - [24.7 The travelling salesman problem: append or insert?](heuristic-algorithms/constructive-heuristics/the-travelling-salesman-problem-append-or-insert.md)
    - [24.8 Randomized construction](heuristic-algorithms/constructive-heuristics/randomized-construction.md)
    - [24.9 Look-ahead and regret](heuristic-algorithms/constructive-heuristics/look-ahead-and-regret.md)
    - [24.10 What constructive heuristics give, and what they do not](heuristic-algorithms/constructive-heuristics/what-constructive-heuristics-give-and-what-they-do-not.md)
    - [24.11 Typical mistakes](heuristic-algorithms/constructive-heuristics/typical-mistakes.md)
    - [24.12 In summary](heuristic-algorithms/constructive-heuristics/typical-mistakes.md)
    - [24.13 <code>C++</code> implementation](heuristic-algorithms/constructive-heuristics/c-implementation.md)
25. [Local search](heuristic-algorithms/local-search/index.md)
    - 25.1 Local search
    - [25.2 The problems, the assumptions and the starting solutions](heuristic-algorithms/local-search/the-problems-the-assumptions-and-the-starting-solutions.md)
    - [25.3 Local search: the scheme](heuristic-algorithms/local-search/local-search-the-scheme.md)
    - [25.4 Neighbourhoods for the four problems](heuristic-algorithms/local-search/local-search-the-scheme.md)
    - [25.5 First improvement and best improvement](heuristic-algorithms/local-search/first-improvement-and-best-improvement.md)
    - [25.6 Evaluating a move incrementally](heuristic-algorithms/local-search/evaluating-a-move-incrementally.md)
    - [25.7 TSP: 2-opt and Or-opt](heuristic-algorithms/local-search/tsp-2-opt-and-or-opt.md)
    - [25.8 $P\,||\,C_{\max}$: move and swap](heuristic-algorithms/local-search/p-cmax-move-and-swap.md)
    - [25.9 Flat landscapes and auxiliary objectives](heuristic-algorithms/local-search/flat-landscapes-and-auxiliary-objectives.md)
    - [25.10 KP: feasibility and penalties](heuristic-algorithms/local-search/kp-feasibility-and-penalties.md)
    - [25.11 Variable neighbourhood descent](heuristic-algorithms/local-search/variable-neighbourhood-descent.md)
    - [25.12 Multi-start local search](heuristic-algorithms/local-search/multi-start-local-search.md)
    - [25.13 Typical mistakes](heuristic-algorithms/local-search/typical-mistakes.md)
    - [25.14 In summary](heuristic-algorithms/local-search/typical-mistakes.md)
    - [25.15 <code>C++</code> implementation](heuristic-algorithms/local-search/c-implementation.md)
26. [Metaheuristics](heuristic-algorithms/metaheuristics/index.md)
    - 26.1 Metaheuristics
    - [26.2 The problems and the assumptions](heuristic-algorithms/metaheuristics/the-problems-and-the-assumptions.md)
    - [26.3 How to escape from a local optimum](heuristic-algorithms/metaheuristics/how-to-escape-from-a-local-optimum.md)
    - [26.4 Simulated annealing](heuristic-algorithms/metaheuristics/how-to-escape-from-a-local-optimum.md)
    - [26.5 Tabu search](heuristic-algorithms/metaheuristics/tabu-search.md)
    - [26.6 Iterated local search](heuristic-algorithms/metaheuristics/iterated-local-search.md)
    - [26.7 Variable neighbourhood search](heuristic-algorithms/metaheuristics/variable-neighbourhood-search.md)
    - [26.8 GRASP](heuristic-algorithms/metaheuristics/grasp.md)
    - [26.9 Large neighbourhood search](heuristic-algorithms/metaheuristics/large-neighbourhood-search.md)
    - [26.10 Population-based methods: genetic and memetic algorithms](heuristic-algorithms/metaheuristics/population-based-methods-genetic-and-memetic-algorithms.md)
    - [26.11 Comparison and conclusions](heuristic-algorithms/metaheuristics/comparison-and-conclusions.md)
    - [26.12 Typical mistakes](heuristic-algorithms/metaheuristics/typical-mistakes.md)
    - [26.13 In summary](heuristic-algorithms/metaheuristics/typical-mistakes.md)
    - [26.14 <code>C++</code> implementation](heuristic-algorithms/metaheuristics/c-implementation.md)
27. [MIP heuristics for the classical problems](heuristic-algorithms/mip-heuristics-classical.md)
    - 27.1 MIP-based heuristics
    - 27.2 The problems and their MIP models
    - 27.3 Rounding
    - 27.4 Diving
    - 27.5 The feasibility pump
    - 27.6 RINS, local branching and proximity search
    - 27.7 Relax-and-fix and fix-and-optimize on lot sizing
    - 27.8 Heuristics inside the solver
    - 27.9 What the MIP-based heuristics give
    - 27.10 <code>Python</code> implementation
    - 27.11 Typical mistakes
    - 27.12 In summary

## [Approximation algorithms](approximation-algorithms/index.md)

28. [Approximation algorithms: definitions](approximation-algorithms/approximation.md)
    - 28.1 Approximation algorithms
    - 28.2 Approximation schemes
    - 28.3 Typical mistakes
    - 28.4 In summary
29. [Approximation algorithms for bin packing](approximation-algorithms/bin-packing-approximation.md)
    - 29.1 The problem and the assumptions
    - 29.2 The Next Fit
    - 29.3 The Any Fit class
    - 29.4 Half-full property
    - 29.5 Performance guarantees
    - 29.6 Typical mistakes
    - 29.7 In summary
    - 29.8 <code>C++</code> implementation
30. [Approximation algorithms for the knapsack problem](approximation-algorithms/knapsack-approximation.md)
    - 30.1 The problem and the assumptions
    - 30.2 Split item and residual capacity
    - 30.3 The greedy algorithm
    - 30.4 The Ext-Greedy algorithm
    - 30.5 The $H^2$ algorithm
    - 30.6 The $H^{\ell}$ algorithm
    - 30.7 The Basic-FPTAS algorithm
    - 30.8 Performance guarantees
    - 30.9 Absolute performance guarantee
    - 30.10 Typical mistakes
    - 30.11 In summary
    - 30.12 <code>C++</code> implementation
31. [Approximation for P|Cmax](approximation-algorithms/pcmax-approximation.md)
    - 31.1 The problem and the assumptions
    - 31.2 The algorithms $LIST$ and $LPT$
    - 31.3 A property of list scheduling
    - 31.4 Performance guarantees
    - 31.5 Sources
    - 31.6 Typical mistakes
    - 31.7 In summary
32. [Approximation for the metric TSP](approximation-algorithms/tsp-approximation.md)
    - 32.1 The problem and the assumptions
    - 32.2 The double tree and the Christofides algorithms
    - 32.3 Structural properties
    - 32.4 Performance guarantees
    - 32.5 The general TSP
    - 32.6 Sources
    - 32.7 Typical mistakes
    - 32.8 In summary

## [Problem-specific branch-and-bound](specialized-algorithms/index.md)

33. [Knapsack: branch-and-bound on the critical item](specialized-algorithms/knapsack-branch-and-bound.md)
    - 33.1 The algorithm for the KP
    - 33.2 A worked example
    - 33.3 Typical mistakes
    - 33.4 In summary
