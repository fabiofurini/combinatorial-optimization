---
title: "Typical mistakes · In summary"
---

# Typical mistakes · In summary

<div class="info-capitolo" markdown>

**Part 4 · Heuristic algorithms · Chapter 31** · [:material-book-open-variant: Chapter 31: Local search](index.md) · [:material-file-pdf-box: Lecture notes, volume 4 (PDF)](../../pdf/lecture-notes-4-heuristic-algorithms.pdf) · [:material-pencil: Exercises: Local search](../../exercises/local-search.md) · [:material-gesture-tap: App: TSP: nearest neighbour and 2-opt](../../lab/tsp-nn-2opt.md)

</div>

## 31.13 Typical mistakes

!!! attenzione "Warning"

    - <strong>Forgetting that a local optimum depends on the neighbourhood.</strong> The $LPT$ solution is a local optimum for move, but not for swap.

    - <strong>Using the number of bins as the only objective.</strong> It is blind: most neighbours have the same value, and the search stops on a plateau; the auxiliary objective $SQ$ tells them apart.

    - <strong>Ignoring the order of examination.</strong> The moves are examined in a fixed order and ties go to the first one examined (in [Example 31.6](flat-landscapes-and-auxiliary-objectives.md#box-12-ex-bppff) item $3$ comes before item $5$).

    - <strong>Computing the wrong $\Delta$ for a 2-opt move.</strong> Only the two removed and the two added edges count; the two edges cannot share a city.

    - <strong>Concluding that a local optimum is optimal.</strong> Only a dual bound can say so.

## 31.14 In summary

!!! chiave "In summary"

    - A local search moves to a better neighbour until none exists: it returns a local optimum, a better primal bound.

    - First improvement is faster per step, best improvement takes the largest gain; both stop in a local optimum of the neighbourhood.

    - Incremental evaluation, auxiliary objectives and penalties make the search fast and able to cross plateaus and infeasible regions.

    - Variable neighbourhood descent and multi-start enlarge what the search can reach, but the restarts have no memory.

    <strong>Dashboard of the reference instances.</strong> Starting solution and local optimum:

    <div class="tabella" markdown="0"><table>
    <tr>
    <th>problem</th>
    <th>start</th>
    <th>local search</th>
    <th><span class="arithmatex">\(z(I)\)</span></th>
    </tr>
    <tr>
    <td>TSP</td>
    <td><span class="arithmatex">\(25\)</span> (<span class="arithmatex">\(NN\)</span>)</td>
    <td><span class="arithmatex">\(18\)</span> (2-opt)</td>
    <td><span class="arithmatex">\(18\)</span></td>
    </tr>
    <tr>
    <td><span class="arithmatex">\(P\,||\,C_{\max}\)</span></td>
    <td><span class="arithmatex">\(11\)</span> (<span class="arithmatex">\(LPT\)</span>)</td>
    <td><span class="arithmatex">\(9\)</span> (swap, <span class="arithmatex">\(=\mathrm{LB}(I)\)</span>)</td>
    <td><span class="arithmatex">\(9\)</span></td>
    </tr>
    <tr>
    <td>BPP</td>
    <td><span class="arithmatex">\(4\)</span> (<span class="arithmatex">\(FF\)</span>)</td>
    <td><span class="arithmatex">\(3\)</span> (move, <span class="arithmatex">\(SQ\)</span>)</td>
    <td><span class="arithmatex">\(3\)</span></td>
    </tr>
    </table></div>

    The dual bounds come from the notes on heuristic algorithms: the local search alone does not certify its result.

---

**Exercises on this chapter:** [:material-pencil: Local search](../../exercises/local-search.md)

