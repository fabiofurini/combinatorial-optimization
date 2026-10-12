---
title: "Local search"
---

# Local search

<div class="info-capitolo" markdown>

**Part 4 · Heuristic algorithms · Chapter 25** · [:material-file-pdf-box: Lecture notes, volume 4 (PDF)](../../pdf/lecture-notes-4-heuristic-algorithms.pdf) · [:material-pencil: Exercises: Local search](../../exercises/local-search.md) · [:material-gesture-tap: App: TSP: nearest neighbour and 2-opt](../../lab/tsp-nn-2opt.md)

</div>

!!! nota "Prerequisites"

    - From this module, the chapter «Heuristic algorithms»: neighbourhoods, local optima, intensification and diversification.

    - From this module, the chapter «Constructive heuristics»: the starting solutions used here.

!!! chiave "Objectives"

    At the end of this chapter you will be able to:

    - define the neighbourhoods of the KP, the BPP, the TSP and $P\,||\,C_{\max}$;

    - execute a local search with the first improvement and the best improvement rules;

    - evaluate a move incrementally, in $O(1)$ for the 2-opt move;

    - escape a plateau with an auxiliary objective, and handle infeasible solutions with a penalty;

    - combine neighbourhoods (variable neighbourhood descent) and restarts (multi-start).

<div class="sottopagine" markdown>

**The chapter is organised in pages: this page and**

1. [25.2 The problems, the assumptions and the starting solutions](the-problems-the-assumptions-and-the-starting-solutions.md)
2. [Local search: the scheme · Neighbourhoods for the four problems](local-search-the-scheme.md)
3. [25.5 First improvement and best improvement](first-improvement-and-best-improvement.md)
4. [25.6 Evaluating a move incrementally](evaluating-a-move-incrementally.md)
5. [25.7 TSP: 2-opt and Or-opt](tsp-2-opt-and-or-opt.md)
6. [25.8 $P\,||\,C_{\max}$: move and swap](p-cmax-move-and-swap.md)
7. [25.9 Flat landscapes and auxiliary objectives](flat-landscapes-and-auxiliary-objectives.md)
8. [25.10 KP: feasibility and penalties](kp-feasibility-and-penalties.md)
9. [25.11 Variable neighbourhood descent](variable-neighbourhood-descent.md)
10. [25.12 Multi-start local search](multi-start-local-search.md)
11. [Typical mistakes · In summary](typical-mistakes.md)
12. [25.15 <code>C++</code> implementation](c-implementation.md)

</div>

## 25.1 Local search { #sez-sec-ls }

<a id="box-1-def-ls"></a>

!!! definizione "Definition 25.1: Local search"

    Given a neighbourhood $N$, a <strong>local search</strong> (denoted by $LS$) is an improvement heuristic. It starts from a feasible solution and, at every iteration, looks in the neighbourhood of the current solution for a <em>better</em> solution. If it finds one, it moves to it and repeats; if no neighbour is better, the current solution is a local optimum with respect to $N$, and the search stops.

- The <strong>neighbourhood</strong> $N(S)$ of a feasible solution $S$, the <strong>move</strong> from $S$ to a neighbour and the <strong>local optimum</strong> with respect to $N$ are defined in the chapter «Heuristic algorithms: definitions».

!!! chiave ""

    A local search improves a feasible solution by moving from a solution to a better neighbour, and it stops in a local optimum with respect to $N$.

---

**Next:** [25.2 The problems, the assumptions and the starting solutions](the-problems-the-assumptions-and-the-starting-solutions.md)

---

**Exercises on this chapter:** [:material-pencil: Local search](../../exercises/local-search.md)

<!-- laboratorio-interattivo: sezione generata da interattivi.py -->

:material-flask-outline: **In the interactive lab:** [TSP: nearest neighbour and 2-opt](../../lab/tsp-nn-2opt.md).