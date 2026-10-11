# Full index

## [Combinatorial optimization problems](combinatorial-optimization-problems/index.md)

1. [Combinatorial optimization problems](combinatorial-optimization-problems/combinatorial-optimization.md)
    - 1.1 What is combinatorial optimization
    - 1.2 Where combinatorial optimization problems arise
    - 1.3 The six problems of the course
    - 1.4 Counting the solutions
    - 1.5 Combinatorial explosion and brute force
    - 1.6 Primal bounds, dual bounds and gap
    - 1.7 A glimpse of computational complexity
    - 1.8 Roadmap of the course
    - 1.9 Typical mistakes
    - 1.10 In summary
    - 1.11 Exercises
2. [Knapsack problems](combinatorial-optimization-problems/knapsack.md)
    - 2.1 Why knapsack problems?
    - 2.2 The knapsack problem
    - 2.3 The subset sum problem
    - 2.4 The bounded knapsack problem
    - 2.5 The unbounded knapsack problem
    - 2.6 The multidimensional knapsack problem
    - 2.7 The multiple knapsack problem
    - 2.8 The multiple-choice knapsack problem
    - 2.9 The knapsack problem with setups
    - 2.10 The variants at a glance
    - 2.11 Typical mistakes
    - 2.12 In summary
3. [Bin packing and cutting stock](combinatorial-optimization-problems/bin-packing.md)
    - 3.1 Why bin packing problems?
    - 3.2 The bin packing problem
    - 3.3 The cutting stock problem
    - 3.4 Typical mistakes
    - 3.5 In summary
4. [Vertex coloring](combinatorial-optimization-problems/coloring.md)
    - 4.1 Why vertex coloring problems?
    - 4.2 A short review of graphs
    - 4.3 The vertex coloring problem
    - 4.4 Typical mistakes
    - 4.5 In summary
5. [The travelling salesman problem](combinatorial-optimization-problems/tsp.md)
    - 5.1 Why the travelling salesman problem?
    - 5.2 The travelling salesman problem
    - 5.3 Variants: metric and asymmetric TSP
    - 5.4 Counting the tours
    - 5.5 A first tour by hand
    - 5.6 A combinatorial lower bound
    - 5.7 Typical mistakes
    - 5.8 In summary
6. [Parallel machine scheduling](combinatorial-optimization-problems/pcmax.md)
    - 6.1 Why parallel machine scheduling?
    - 6.2 The three-field notation
    - 6.3 Scheduling on identical parallel machines
    - 6.4 Counting the solutions
    - 6.5 A first schedule by hand
    - 6.6 A combinatorial lower bound
    - 6.7 Relation with the bin packing problem
    - 6.8 Typical mistakes
    - 6.9 In summary
7. [Capacitated lot sizing](combinatorial-optimization-problems/lot-sizing.md)
    - 7.1 Why capacitated lot sizing?
    - 7.2 The capacitated lot sizing problem
    - 7.3 Variants
    - 7.4 The reference instance
    - 7.5 Counting the solutions
    - 7.6 A first plan by hand
    - 7.7 A combinatorial lower bound
    - 7.8 Typical mistakes
    - 7.9 In summary

## [Formulations and their properties](formulations/index.md)

8. [Formulations of the knapsack problem](formulations/knapsack-formulations.md)
    - 8.1 The problem in brief
    - 8.2 An ILP model for the Knapsack Problem
    - 8.3 A first Linear Programming relaxation
    - 8.4 A second Linear Programming relaxation
    - 8.5 Knapsack Problem upper bounds
    - 8.6 Typical mistakes
    - 8.7 In summary
9. [Formulations of the bin packing problem](formulations/bin-packing-formulations.md)
    - 9.1 The problem in brief
    - 9.2 An ILP model for the Bin Packing Problem
    - 9.3 A first Linear Programming relaxation
    - 9.4 A second Linear Programming relaxation
    - 9.5 Typical mistakes
    - 9.6 In summary
10. [Formulations of the vertex coloring problem](formulations/coloring-formulations.md)
    - 10.1 The problem in brief
    - 10.2 An ILP model for the Vertex Coloring Problem
    - 10.3 A first Linear Programming relaxation
    - 10.4 A second Linear Programming relaxation
    - 10.5 Typical mistakes
    - 10.6 In summary
11. [Formulations of the travelling salesman problem](formulations/tsp-formulations.md)
    - 11.1 The problem in brief
    - 11.2 A model with position variables (MTZ)
    - 11.3 A model with subtour elimination constraints (DFJ)
    - 11.4 Linear Programming relaxations
    - 11.5 Typical mistakes
    - 11.6 In summary
12. [Formulations of parallel machine scheduling](formulations/pcmax-formulations.md)
    - 12.1 The problem in brief
    - 12.2 An ILP model for $\PCmax$
    - 12.3 A first Linear Programming relaxation
    - 12.4 Additional considerations
    - 12.5 Typical mistakes
    - 12.6 In summary
13. [Formulations of capacitated lot sizing](formulations/lot-sizing-formulations.md)
    - 13.1 The problem in brief
    - 13.2 A formulation with a big-M link
    - 13.3 A shortest-path formulation
    - 13.4 Comparing the formulations
    - 13.5 Several products, setup times and initial inventory
    - 13.6 Typical mistakes
    - 13.7 In summary

## [Dynamic programming](dynamic-programming/index.md)

14. [Principles of dynamic programming](dynamic-programming/dp-principles.md)
    - 14.1 Why not enumerate all the solutions?
    - 14.2 Divide, conquer and combine
    - 14.3 Problem properties required by DP algorithms
    - 14.4 Steps for designing a DP algorithm
    - 14.5 The DP algorithms of this module
    - 14.6 Typical mistakes
    - 14.7 In summary
15. [Dynamic programming for knapsack problems](dynamic-programming/dp-knapsack.md)
    - 15.1 A DP algorithm for the Knapsack Problem
    - 15.2 A DP algorithm for the Unbounded Knapsack Problem
    - 15.3 A DP algorithm for the Bounded Knapsack Problem
16. [Rod cutting and coin change](dynamic-programming/dp-rod-cutting-coin-change.md)
    - 16.1 A DP algorithm for the Rod Cutting Problem
    - 16.2 A DP algorithm for the Coin Change Problem
17. [Dynamic programming for lot sizing](dynamic-programming/dp-lot-sizing.md)
    - 17.1 Problem definition
    - 17.2 A DP algorithm for the ULS
    - 17.3 A DP algorithm for the capacitated case
    - 17.4 Typical mistakes
    - 17.5 In summary

## [Heuristic algorithms](heuristic-algorithms/index.md)

18. [Heuristic algorithms: definitions](heuristic-algorithms/heuristics.md)
    - 18.1 Heuristic algorithms
    - 18.2 The problems and the assumptions
    - 18.3 Primal and dual bounds
    - 18.4 Classification of heuristic algorithms
    - 18.5 Solution representation and search space
    - 18.6 Neighbourhoods and local optima
    - 18.7 Intensification and diversification
    - 18.8 How to evaluate a heuristic algorithm
    - 18.9 Typical mistakes
    - 18.10 In summary
19. [Constructive heuristics](heuristic-algorithms/constructive-heuristics.md)
    - 19.1 The problems and the assumptions
    - 19.2 The greedy paradigm
    - 19.3 The knapsack problem: which order?
    - 19.4 The bin packing problem: first sort, then pack
    - 19.5 Scheduling on parallel machines: longest jobs first
    - 19.6 The travelling salesman problem: append or insert?
    - 19.7 Randomized construction
    - 19.8 Look-ahead and regret
    - 19.9 What constructive heuristics give, and what they do not
    - 19.10 Typical mistakes
    - 19.11 In summary
    - 19.12 <code>C++</code> implementation
20. [Local search](heuristic-algorithms/local-search.md)
    - 20.1 The problems, the assumptions and the starting solutions
    - 20.2 Local search: the scheme
    - 20.3 Neighbourhoods for the four problems
    - 20.4 First improvement and best improvement
    - 20.5 Evaluating a move incrementally
    - 20.6 TSP: 2-opt and Or-opt
    - 20.7 $P\,||\,C_{\max}$: move and swap
    - 20.8 Flat landscapes and auxiliary objectives
    - 20.9 KP: feasibility and penalties
    - 20.10 Variable neighbourhood descent
    - 20.11 Multi-start local search
    - 20.12 Typical mistakes
    - 20.13 In summary
    - 20.14 <code>C++</code> implementation
21. [Metaheuristics](heuristic-algorithms/metaheuristics.md)
    - 21.1 The problems and the assumptions
    - 21.2 How to escape from a local optimum
    - 21.3 Simulated annealing
    - 21.4 Tabu search
    - 21.5 Iterated local search
    - 21.6 Variable neighbourhood search
    - 21.7 GRASP
    - 21.8 Large neighbourhood search
    - 21.9 Population-based methods: genetic and memetic algorithms
    - 21.10 Comparison and conclusions
    - 21.11 Typical mistakes
    - 21.12 In summary
    - 21.13 <code>C++</code> implementation
22. [MIP heuristics for the classical problems](heuristic-algorithms/mip-heuristics-classical.md)
    - 22.1 From the methods to the classical problems
    - 22.2 The problems and their MIP models
    - 22.3 Rounding
    - 22.4 Diving
    - 22.5 The feasibility pump
    - 22.6 RINS, local branching and proximity search
    - 22.7 Relax-and-fix and fix-and-optimize on lot sizing
    - 22.8 Heuristics inside the solver
    - 22.9 What the MIP-based heuristics give
    - 22.10 <code>Python</code> implementation
    - 22.11 Typical mistakes
    - 22.12 In summary

## [Approximation algorithms](approximation-algorithms/index.md)

23. [Approximation algorithms: definitions](approximation-algorithms/approximation.md)
    - 23.1 Why a performance guarantee?
    - 23.2 Approximation algorithms
    - 23.3 Approximation schemes
    - 23.4 Typical mistakes
    - 23.5 In summary
24. [Approximation algorithms for bin packing](approximation-algorithms/bin-packing-approximation.md)
    - 24.1 Why bin packing algorithms?
    - 24.2 The problem and the assumptions
    - 24.3 The Next Fit
    - 24.4 The Any Fit class
    - 24.5 Half-full property
    - 24.6 Performance guarantees
    - 24.7 Typical mistakes
    - 24.8 In summary
    - 24.9 <code>C++</code> implementation
25. [Approximation algorithms for the knapsack problem](approximation-algorithms/knapsack-approximation.md)
    - 25.1 Why approximation algorithms for the KP?
    - 25.2 The problem and the assumptions
    - 25.3 Split item and residual capacity
    - 25.4 The greedy algorithm
    - 25.5 The Ext-Greedy algorithm
    - 25.6 The $H^2$ algorithm
    - 25.7 The $H^{\ell}$ algorithm
    - 25.8 The Basic-FPTAS algorithm
    - 25.9 Performance guarantees
    - 25.10 Absolute performance guarantee
    - 25.11 Typical mistakes
    - 25.12 In summary
    - 25.13 <code>C++</code> implementation
26. [P|Cmax, metric TSP and the limits of approximation](approximation-algorithms/pcmax-tsp-coloring-approximation.md)
    - 26.1 Why guarantees, and why limits?
    - 26.2 The problems and the assumptions
    - 26.3 Scheduling on parallel machines
    - 26.4 The metric TSP
    - 26.5 Vertex coloring
    - 26.6 Structural properties
    - 26.7 Performance guarantees
    - 26.8 The limits of approximation
    - 26.9 Sources
    - 26.10 Typical mistakes
    - 26.11 In summary

## [Specialized algorithms](specialized-algorithms/index.md)

27. [Knapsack: branch-and-bound on the critical item](specialized-algorithms/knapsack-branch-and-bound.md)
    - 27.1 Why a branch-and-bound algorithm for the KP?
    - 27.2 The algorithm for the KP
    - 27.3 A worked example
    - 27.4 Typical mistakes
    - 27.5 In summary
