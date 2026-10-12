---
title: "Local search"
---

# Local search

<div class="info-capitolo" markdown>

**Part 4 · Heuristic algorithms · Chapter 31** · [:material-file-pdf-box: Lecture notes, volume 4 (PDF)](../../pdf/lecture-notes-4-heuristic-algorithms.pdf) · [:material-pencil: Exercises: Local search](../../exercises/local-search.md) · [:material-gesture-tap: App: TSP: nearest neighbour and 2-opt](../../lab/tsp-nn-2opt.md)

</div>

!!! nota "Prerequisites"

    - From this module, the chapter [«Heuristic algorithms: definitions»](https://fabiofurini.github.io/combinatorial-optimization/heuristic-algorithms/heuristics/): neighbourhoods, local optima, intensification and diversification.

    - From this module, the chapter [«Constructive heuristics»](https://fabiofurini.github.io/combinatorial-optimization/heuristic-algorithms/constructive-heuristics/): the starting solutions used here.

!!! chiave "Objectives"

    At the end of this chapter you will be able to:

    - define the neighbourhoods of the KP, the BPP, the TSP and $P\,||\,C_{\max}$;

    - execute a local search with the first improvement and the best improvement rules;

    - evaluate a move incrementally, in $O(1)$ for the 2-opt move;

    - escape a plateau with an auxiliary objective, and handle infeasible solutions with a penalty;

    - combine neighbourhoods (variable neighbourhood descent) and restarts (multi-start).

## 31.1 Local search { #sez-sec-ls }

<a id="box-1-def-ls"></a>

!!! definizione "Definition 31.1: Local search"

    Given a neighbourhood $N$, a <strong>local search</strong> (denoted by $LS$) is an improvement heuristic. It starts from a feasible solution and, at every iteration, looks in the neighbourhood of the current solution for a <em>better</em> solution. If it finds one, it moves to it and repeats; if no neighbour is better, the current solution is a local optimum with respect to $N$, and the search stops.

- The <strong>neighbourhood</strong> $N(S)$ of a feasible solution $S$, the <strong>move</strong> from $S$ to a neighbour and the <strong>local optimum</strong> with respect to $N$ are defined in the chapter [«Heuristic algorithms: definitions»](../heuristics.md).

!!! chiave ""

    A local search improves a feasible solution by moving from a solution to a better neighbour, and it stops in a local optimum with respect to $N$.

<div class="grid cards sottopagine" markdown>

-   **Overview**

    Local search

    [:octicons-arrow-right-24: Open](#sez-sec-ls)

-   **31.2 The problems, the assumptions and the starting solutions**

    [:octicons-arrow-right-24: Open](the-problems-the-assumptions-and-the-starting-solutions.md)

-   **Local search: the scheme · Neighbourhoods for the four problems**

    KP: flip and swap · BPP: move and swap · TSP: 2-opt and Or-opt · P\,||\,Cmax: move and swap · Summary

    [:octicons-arrow-right-24: Open](local-search-the-scheme.md)

-   **31.5 First improvement and best improvement**

    Best improvement · Comparison

    [:octicons-arrow-right-24: Open](first-improvement-and-best-improvement.md)

-   **31.6 Evaluating a move incrementally**

    [:octicons-arrow-right-24: Open](evaluating-a-move-incrementally.md)

-   **31.7 TSP: 2-opt and Or-opt**

    The Or-opt local search · First and best improvement on a medium instance · 3-opt and Lin–Kernighan

    [:octicons-arrow-right-24: Open](tsp-2-opt-and-or-opt.md)

-   **31.8 $P\,||\,C_{\max}$: move and swap**

    The swap local search

    [:octicons-arrow-right-24: Open](p-cmax-move-and-swap.md)

-   **31.9 Flat landscapes and auxiliary objectives**

    The auxiliary objective · The move local search for the BPP · The swap local search for the BPP · Properties of the auxiliary objective · Examples

    [:octicons-arrow-right-24: Open](flat-landscapes-and-auxiliary-objectives.md)

-   **31.10 KP: feasibility and penalties**

    Penalizing the excess weight

    [:octicons-arrow-right-24: Open](kp-feasibility-and-penalties.md)

-   **31.11 Variable neighbourhood descent**

    [:octicons-arrow-right-24: Open](variable-neighbourhood-descent.md)

-   **31.12 Multi-start local search**

    What local search gives, and what it does not

    [:octicons-arrow-right-24: Open](multi-start-local-search.md)

-   **Typical mistakes · In summary**

    In summary

    [:octicons-arrow-right-24: Open](typical-mistakes.md)

</div>

---

**Next:** [31.2 The problems, the assumptions and the starting solutions](the-problems-the-assumptions-and-the-starting-solutions.md)

---

**Exercises on this chapter:** [:material-pencil: Local search](../../exercises/local-search.md)

<!-- laboratorio-interattivo: sezione generata da interattivi.py -->

:material-flask-outline: **In the interactive lab:** [TSP: nearest neighbour and 2-opt](../../lab/tsp-nn-2opt.md).