---
title: "What constructive heuristics give, and what they do not"
---

# 30.11 What constructive heuristics give, and what they do not { #sez-sec-WHAT }

<div class="info-capitolo" markdown>

**Part 4 · Heuristic algorithms · Chapter 30** · [:material-book-open-variant: Chapter 30: Constructive](index.md) · [:material-file-pdf-box: Lecture notes, volume 4 (PDF)](../../pdf/lecture-notes-4-heuristic-algorithms.pdf) · [:material-pencil: Exercises: Constructive](../../exercises/constructive-heuristics.md) · [:material-gesture-tap: App: Bin packing heuristics](../../lab/bin-packing-heuristics.md) · [:material-gesture-tap: App: List scheduling and LPT](../../lab/list-scheduling-lpt.md)

</div>

- The table collects the results on the four reference instances, with the dual bounds of the notes on the definitions of heuristic algorithms ($\UB$ for the KP, $\LB$ for the other problems) and the gap of the best heuristic solution.

<div class="tabella" markdown="0"><table>
<tr>
<th>problem</th>
<th>heuristic</th>
<th>values</th>
<th>dual bound</th>
<th>gap</th>
<th><span class="arithmatex">\(z(I)\)</span></th>
</tr>
<tr>
<td>KP</td>
<td><span class="arithmatex">\(GR_p\)</span>, <span class="arithmatex">\(GR\)</span>, <span class="arithmatex">\(GR_w\)</span></td>
<td><span class="arithmatex">\(17\)</span>, <span class="arithmatex">\(16\)</span>, <span class="arithmatex">\(10\)</span></td>
<td><span class="arithmatex">\(\UB=17\)</span></td>
<td><span class="arithmatex">\(0\%\)</span></td>
<td><span class="arithmatex">\(17\)</span></td>
</tr>
<tr>
<td>BPP</td>
<td>FF, FFD, BFD</td>
<td><span class="arithmatex">\(4\)</span>, <span class="arithmatex">\(3\)</span>, <span class="arithmatex">\(3\)</span></td>
<td><span class="arithmatex">\(\LB=3\)</span></td>
<td><span class="arithmatex">\(0\%\)</span></td>
<td><span class="arithmatex">\(3\)</span></td>
</tr>
<tr>
<td><span class="arithmatex">\(P\,||\,C_{\max}\)</span></td>
<td><span class="arithmatex">\(LIST\)</span> (reverse list), <span class="arithmatex">\(LPT\)</span></td>
<td><span class="arithmatex">\(12\)</span>, <span class="arithmatex">\(11\)</span></td>
<td><span class="arithmatex">\(\LB=9\)</span></td>
<td><span class="arithmatex">\(22.2\%\)</span></td>
<td><span class="arithmatex">\(9\)</span></td>
</tr>
<tr>
<td>TSP</td>
<td><span class="arithmatex">\(NN\)</span>, multi-start <span class="arithmatex">\(NN\)</span>, <span class="arithmatex">\(NI\)</span>, <span class="arithmatex">\(FI\)</span>, <span class="arithmatex">\(CI\)</span></td>
<td><span class="arithmatex">\(25\)</span>, <span class="arithmatex">\(18\)</span>, <span class="arithmatex">\(18\)</span>, <span class="arithmatex">\(18\)</span>, <span class="arithmatex">\(18\)</span></td>
<td><span class="arithmatex">\(\LB=17\)</span></td>
<td><span class="arithmatex">\(5.9\%\)</span></td>
<td><span class="arithmatex">\(18\)</span></td>
</tr>
</table></div>

- <strong>A primal bound, and nothing more.</strong> A constructive heuristic returns a feasible solution, and its value is a primal bound. For the KP and the BPP the best heuristic value meets the dual bound, and the solution is <em>proved</em> optimal; for the TSP the tour of length $18$ is optimal, but the dual bound $17$ cannot prove it; for $P\,||\,C_{\max}$ the gap of $22.2\%$ is real. The heuristic itself never knows in which of these situations it is.

- <strong>A choice is never revised.</strong> Every heuristic of these notes stops as soon as the solution is complete, and every decision taken along the way is final. In the $LPT$ schedule, job $7$ is put on machine $1$ when the three loads are equal, and the makespan $11$ is fixed at that moment; in the $NN$ tour from city $1$, the edge $(5,1)$ of length $9$ is the consequence of the very first choices. Looking at the Gantt chart or at the tour, a better solution seems close; but a constructive heuristic has no mechanism to go back.

- <strong>The order decides everything.</strong> The examples of these notes show the same lesson on four problems: sorting the elements in the right order (efficiency, decreasing weights, longest jobs first) is the main design choice; still, no order is the best on every instance ([Example 30.1](the-0-1-knapsack-problem-which-order.md#box-3-ex-kp3), [Example 30.4](the-bin-packing-problem-first-sort-then-pack.md#box-6-ex-ffdworse)), and running several orders, several starting points or several randomized constructions, and keeping the best solution, is a cheap and effective protection.

- <strong>Cheap, and useful as a start.</strong> Constructive heuristics are fast, and they are rarely used alone: their solutions are the starting points of the methods that try to improve a complete solution. The next notes, on local search, start from the solutions computed here and modify them, a little at a time, as long as they improve.

!!! chiave ""

    A constructive heuristic builds one solution, one element at a time, choosing at each step the element that looks best now. The order of the choices decides the quality of the result, and a choice, once made, is never revised.

---

**Next:** [Typical mistakes · In summary](typical-mistakes.md)
