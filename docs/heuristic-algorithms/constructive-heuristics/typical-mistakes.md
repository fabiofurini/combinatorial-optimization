---
title: "Typical mistakes · In summary"
---

# Typical mistakes · In summary

<div class="info-capitolo" markdown>

**Part 4 · Heuristic algorithms · Chapter 24** · [:material-book-open-variant: Chapter 24: Constructive](index.md) · [:material-file-pdf-box: Lecture notes, volume 4 (PDF)](../../pdf/lecture-notes-4-heuristic-algorithms.pdf) · [:material-pencil: Exercises: Constructive](../../exercises/constructive-heuristics.md) · [:material-gesture-tap: App: Bin packing heuristics](../../lab/bin-packing-heuristics.md) · [:material-gesture-tap: App: List scheduling and LPT](../../lab/list-scheduling-lpt.md) · [:material-gesture-tap: App: Vertex coloring: greedy and DSATUR](../../lab/coloring-greedy-dsatur.md)

</div>

## 24.11 Typical mistakes

!!! attenzione "Warning"

    - <strong>Expecting the greedy by efficiency to be optimal.</strong> It can be arbitrarily bad, and so can each of the other two orders: the notes contain a family of instances for each of them.

    - <strong>Believing that sorting always helps.</strong> FFD can be worse than FF ([Example 24.4](the-bin-packing-problem-first-sort-then-pack.md#box-6-ex-ffdworse)).

    - <strong>Breaking ties in the wrong way.</strong> Every example uses one fixed rule (smallest index, first bin that fits, fullest bin for BF): changing it changes the solution.

    - <strong>Forgetting the closing edge.</strong> The length of a tour includes the edge from the last city back to the first one; the cost of an insertion is $d_{ik}+d_{kj}-d_{ij}$, and every position, closing edge included, must be tried.

    - <strong>Reading $\mathscr{A}(I)$ as a bound on $z(I)$.</strong> It is only a primal bound.

## 24.12 In summary

!!! chiave "In summary"

    - A constructive heuristic builds one solution, one element at a time, and never revises a choice.

    - The order of the choices is the main design decision: efficiency for the KP, decreasing weights for the BPP, longest jobs first for $P\,||\,C_{\max}$; no order wins on every instance.

    - Several orders, starting points or randomized constructions, keeping the best solution, are a cheap protection.

    - The solutions are starting points for local search.

    <strong>Dashboard of the reference instances.</strong> Best constructive value and dual bound:

    <div class="tabella" markdown="0"><table>
    <tr>
    <th>problem</th>
    <th>best heuristic value</th>
    <th>dual bound</th>
    <th>gap</th>
    <th><span class="arithmatex">\(z(I)\)</span></th>
    </tr>
    <tr>
    <td>KP (max)</td>
    <td><span class="arithmatex">\(17\)</span> (<span class="arithmatex">\(GR_p\)</span>)</td>
    <td><span class="arithmatex">\(\mathrm{UB}(I)=17\)</span></td>
    <td><span class="arithmatex">\(0\%\)</span></td>
    <td><span class="arithmatex">\(17\)</span></td>
    </tr>
    <tr>
    <td>BPP (min)</td>
    <td><span class="arithmatex">\(3\)</span> (FFD, BFD)</td>
    <td><span class="arithmatex">\(\mathrm{LB}(I)=3\)</span></td>
    <td><span class="arithmatex">\(0\%\)</span></td>
    <td><span class="arithmatex">\(3\)</span></td>
    </tr>
    <tr>
    <td><span class="arithmatex">\(P\,||\,C_{\max}\)</span> (min)</td>
    <td><span class="arithmatex">\(11\)</span> (<span class="arithmatex">\(LPT\)</span>)</td>
    <td><span class="arithmatex">\(\mathrm{LB}(I)=9\)</span></td>
    <td><span class="arithmatex">\(22.2\%\)</span></td>
    <td><span class="arithmatex">\(9\)</span></td>
    </tr>
    <tr>
    <td>TSP (min)</td>
    <td><span class="arithmatex">\(18\)</span> (multi-start <span class="arithmatex">\(NN\)</span>, <span class="arithmatex">\(NI\)</span>, <span class="arithmatex">\(FI\)</span>, <span class="arithmatex">\(CI\)</span>)</td>
    <td><span class="arithmatex">\(\mathrm{LB}(I)=17\)</span></td>
    <td><span class="arithmatex">\(5.9\%\)</span></td>
    <td><span class="arithmatex">\(18\)</span></td>
    </tr>
    </table></div>

---

**Next:** [24.13 <code>C++</code> implementation](c-implementation.md)
