---
title: "Typical mistakes · In summary"
---

# Typical mistakes · In summary

<div class="info-capitolo" markdown>

**Part 4 · Heuristic algorithms · Chapter 31** · [:material-book-open-variant: Chapter 31: Metaheuristics](index.md) · [:material-file-pdf-box: Lecture notes, volume 4 (PDF)](../../pdf/lecture-notes-4-heuristic-algorithms.pdf) · [:material-pencil: Exercises: Metaheuristics](../../exercises/metaheuristics.md)

</div>

## 31.12 Typical mistakes

!!! attenzione "Warning"

    - <strong>Reporting one run.</strong> The results depend on the seed: report minimum, average and maximum over several runs.

    - <strong>Tuning and evaluating on the same instances.</strong> The picture is optimistic; use training instances for the parameters and different ones for the evaluation.

    - <strong>Losing the best solution.</strong> In simulated annealing and tabu search the current solution can be worse than the best one found: the best is stored apart.

    - <strong>Choosing the tenure without testing it.</strong> With tenure $0$ tabu search is a local search; a tenure that is too small cycles, one that is too large forbids almost every move.

    - <strong>Miscounting the random numbers.</strong> Every iteration consumes a fixed number of them (ten in the genetic algorithm of the exercises, with $n=5$); a wrong count changes every later step.

## 31.13 In summary

!!! chiave "In summary"

    - A metaheuristic escapes from local optima by accepting worse solutions (SA, TS), by perturbing (ILS, VNS), by randomizing the construction (GRASP), by destroying and repairing (LNS) or by recombining a population (GA).

    - Each method balances intensification and diversification through a few parameters, and the results depend strongly on them.

    - They use no relaxation: they produce primal bounds only, and cannot tell how good their solutions are.

    <strong>Dashboard of the medium instances.</strong> Best value of the methods against the optimum (the optimum computed by an exact algorithm):

    <div class="tabella" markdown="0"><table>
    <tr>
    <th>instance</th>
    <th>constructive</th>
    <th>local search</th>
    <th>best metaheuristic</th>
    <th>optimum</th>
    </tr>
    <tr>
    <td>TSP20 (min)</td>
    <td><span class="arithmatex">\(326\)</span> (<span class="arithmatex">\(NN\)</span>)</td>
    <td><span class="arithmatex">\(319\)</span> (2-opt)</td>
    <td><span class="arithmatex">\(291\)</span></td>
    <td><span class="arithmatex">\(291\)</span></td>
    </tr>
    <tr>
    <td>KP20 (max)</td>
    <td><span class="arithmatex">\(490\)</span> (greedy)</td>
    <td><span class="arithmatex">\(514\)</span></td>
    <td><span class="arithmatex">\(521\)</span></td>
    <td><span class="arithmatex">\(521\)</span></td>
    </tr>
    <tr>
    <td>PCM15 (min)</td>
    <td><span class="arithmatex">\(73\)</span> (<span class="arithmatex">\(LPT\)</span>)</td>
    <td>—</td>
    <td><span class="arithmatex">\(69\)</span></td>
    <td><span class="arithmatex">\(69\)</span></td>
    </tr>
    <tr>
    <td>BPP24 (min)</td>
    <td><span class="arithmatex">\(10\)</span> (FFD)</td>
    <td>—</td>
    <td><span class="arithmatex">\(9\)</span></td>
    <td><span class="arithmatex">\(9\)</span></td>
    </tr>
    </table></div>

---

**Next:** [<code>C++</code> implementation · References](c-implementation.md)
