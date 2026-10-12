---
title: "Metaheuristics"
---

# Metaheuristics

<div class="info-capitolo" markdown>

**Part 4 · Heuristic algorithms · Chapter 26** · [:material-file-pdf-box: Lecture notes, volume 4 (PDF)](../../pdf/lecture-notes-4-heuristic-algorithms.pdf) · [:material-pencil: Exercises: Metaheuristics](../../exercises/metaheuristics.md)

</div>

!!! nota "Prerequisites"

    - From this module, the chapter «Local search»: neighbourhoods, first and best improvement, variable neighbourhood descent and multi-start.

    - From this module, the chapters «Constructive heuristics» (randomized construction) and «Heuristic algorithms» (intensification and diversification, experimental evaluation).

!!! chiave "Objectives"

    At the end of this chapter you will be able to:

    - execute by hand simulated annealing, tabu search, iterated local search and variable neighbourhood search, with given random numbers;

    - execute GRASP, large neighbourhood search and a genetic or memetic algorithm on small instances;

    - explain how each method escapes from a local optimum, and which parameters tune it;

    - compare the methods on the same instances, over several seeds;

    - say what metaheuristics do not give: a dual bound.

## 26.1 Metaheuristics { #sez-sec-metaheuristic }

<a id="box-1-def-metaheuristic"></a>

!!! definizione "Definition 26.1: Metaheuristic"

    A <strong>metaheuristic</strong> is a general strategy that guides a local search beyond the first local optimum, to explore other regions of the set of feasible solutions.

- A metaheuristic is a <em>scheme</em>, not an algorithm: an algorithm is obtained by choosing the representation, the neighbourhoods, the local search and the parameters (Section [26.3](how-to-escape-from-a-local-optimum.md#sez-sec-escape)).

- Every metaheuristic balances <strong>intensification</strong> and <strong>diversification</strong>, defined in the chapter «Heuristic algorithms: definitions».

!!! chiave ""

    A local search stops in the first local optimum; a metaheuristic escapes from it by accepting worse solutions, by jumping to a new starting solution, or by combining several good solutions.

<div class="grid cards sottopagine" markdown>

-   **Overview**

    Metaheuristics

    [:octicons-arrow-right-24: Open](#sez-sec-metaheuristic)

-   **26.2 The problems and the assumptions**

    Random numbers · The instances

    [:octicons-arrow-right-24: Open](the-problems-and-the-assumptions.md)

-   **How to escape from a local optimum · Simulated annealing**

    The cooling schedule and the parameters · Examples · Infeasible solutions: simulated annealing with a penalty · An experiment on the medium TSP instance · Properties

    [:octicons-arrow-right-24: Open](how-to-escape-from-a-local-optimum.md)

-   **26.5 Tabu search**

    Tabu search for the TSP, and the effect of the tenure

    [:octicons-arrow-right-24: Open](tabu-search.md)

-   **26.6 Iterated local search**

    [:octicons-arrow-right-24: Open](iterated-local-search.md)

-   **26.7 Variable neighbourhood search**

    [:octicons-arrow-right-24: Open](variable-neighbourhood-search.md)

-   **26.8 GRASP**

    [:octicons-arrow-right-24: Open](grasp.md)

-   **26.9 Large neighbourhood search**

    Adaptive large neighbourhood search

    [:octicons-arrow-right-24: Open](large-neighbourhood-search.md)

-   **26.10 Population-based methods: genetic and memetic algorithms**

    [:octicons-arrow-right-24: Open](population-based-methods-genetic-and-memetic-algorithms.md)

-   **26.11 Comparison and conclusions**

    Intensification and diversification · Parameters and tuning · What these methods do not use

    [:octicons-arrow-right-24: Open](comparison-and-conclusions.md)

-   **Typical mistakes · In summary**

    In summary

    [:octicons-arrow-right-24: Open](typical-mistakes.md)

-   **<code>C++</code> implementation · References**

    Local searches and auxiliary functions · Simulated annealing · Tabu search · Iterated local search and variable neighbourhood search · GRASP

    [:octicons-arrow-right-24: Open](c-implementation.md)

</div>

---

**Next:** [26.2 The problems and the assumptions](the-problems-and-the-assumptions.md)

---

**Exercises on this chapter:** [:material-pencil: Metaheuristics](../../exercises/metaheuristics.md)
