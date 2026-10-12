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

<div class="sottopagine" markdown>

**The chapter is organised in pages: this page and**

1. [26.2 The problems and the assumptions](the-problems-and-the-assumptions.md)
2. [How to escape from a local optimum · Simulated annealing](how-to-escape-from-a-local-optimum.md)
3. [26.5 Tabu search](tabu-search.md)
4. [26.6 Iterated local search](iterated-local-search.md)
5. [26.7 Variable neighbourhood search](variable-neighbourhood-search.md)
6. [26.8 GRASP](grasp.md)
7. [26.9 Large neighbourhood search](large-neighbourhood-search.md)
8. [26.10 Population-based methods: genetic and memetic algorithms](population-based-methods-genetic-and-memetic-algorithms.md)
9. [26.11 Comparison and conclusions](comparison-and-conclusions.md)
10. [Typical mistakes · In summary](typical-mistakes.md)
11. [<code>C++</code> implementation · References](c-implementation.md)

</div>

## 26.1 Metaheuristics { #sez-sec-metaheuristic }

<a id="box-1-def-metaheuristic"></a>

!!! definizione "Definition 26.1: Metaheuristic"

    A <strong>metaheuristic</strong> is a general strategy that guides a local search beyond the first local optimum, to explore other regions of the set of feasible solutions.

- A metaheuristic is a <em>scheme</em>, not an algorithm: an algorithm is obtained by choosing the representation, the neighbourhoods, the local search and the parameters (Section [26.3](how-to-escape-from-a-local-optimum.md#sez-sec-escape)).

- Every metaheuristic balances <strong>intensification</strong> and <strong>diversification</strong>, defined in the chapter «Heuristic algorithms: definitions».

!!! chiave ""

    A local search stops in the first local optimum; a metaheuristic escapes from it by accepting worse solutions, by jumping to a new starting solution, or by combining several good solutions.

---

**Next:** [26.2 The problems and the assumptions](the-problems-and-the-assumptions.md)

---

**Exercises on this chapter:** [:material-pencil: Metaheuristics](../../exercises/metaheuristics.md)
