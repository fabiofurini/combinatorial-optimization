---
title: "Exercises · Local search"
---

# Exercises · Local search

<div class="info-capitolo" markdown>

**Exercises · Chapter 20** · each solution opens with a click · [:material-book-open-variant: Chapter 20: Local search](../heuristic-algorithms/local-search.md)

</div>

## Knapsack

<a id="esercizio-20-1"></a>

!!! esercizio "Exercise 20.1: Local search KP 1"

    We consider a knapsack of capacity $c = 18$ and a set $\mathscr{I} = \{1,2,3,4,5\}$ of $5$ items ($n=5$), with the following profits and weights:

    $$
    \begin{array}{l|ccccc}
    \hline  & {i=1} & {i=2} & {i=3} & {i=4} & {i=5} \\[1ex]
    \hline {p_i} & {10} & {7} & {13} & {14} & {8} \\[1ex]
    {w_i} & {2} & {3} & {8} & {9} & {7} \\
    \hline
    \end{array}
    $$

    The items are sorted by non-increasing efficiency. The neighbourhood flip+swap contains the feasible vectors obtained by a flip (add or remove one item) or by a swap (remove a selected item $i$, add an unselected item $k$); the flips are examined first, for $i=1,\dots,n$, then the swaps, for increasing $i$ and, for each $i$, increasing $k$. Ties in best improvement are broken in favour of the move examined first.

    **Questions**

    1. Compute the solution of the greedy algorithm $GR$ (by efficiency) and its profit.

    2. Apply the local search with the neighbourhood flip+swap and the best-improvement rule, starting from the solution of $GR$. At every iteration list the neighbours, with their weight and profit, and state the move accepted.

    3. Compute the solution of the greedy by profit $GR_p$, and apply the same local search starting from it.

    4. The optimal value is $z(I)=32$. Which of the two local searches finds an optimal solution? Explain why the other one stops, by looking at the moves needed to reach the optimal solution.

??? soluzione "Solution"

    1. The efficiencies are $\frac{10}{2}$, $\frac{7}{3}$, $\frac{13}{8}$, $\frac{14}{9}$, $\frac{8}{7}$, non-increasing. With $rc=18$:

        - item $1$ ($w_{1}=2$) is selected, $rc=16$;

        - item $2$ ($w_{2}=3$) is selected, $rc=13$;

        - item $3$ ($w_{3}=8$) is selected, $rc=5$;

        - item $4$ ($w_{4}=9>rc=5$) is not selected;

        - item $5$ ($w_{5}=7>rc=5$) is not selected;

        $GR$ returns $x=(1,1,1,0,0)$, the items $\{1,2,3\}$, of weight $13$ and profit $GR(I)=30$.

    2. Iteration 1: current solution $x=(1,1,1,0,0)$, weight $13$, profit $30$.

        <div class="tabella" markdown="0"><table>
        <tr>
        <th>move</th>
        <th>neighbour</th>
        <th>weight</th>
        <th>profit</th>
        <th></th>
        </tr>
        <tr>
        <td>flip <span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\((0,1,1,0,0)\)</span></td>
        <td><span class="arithmatex">\(11\)</span></td>
        <td><span class="arithmatex">\(20\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>flip <span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\((1,0,1,0,0)\)</span></td>
        <td><span class="arithmatex">\(10\)</span></td>
        <td><span class="arithmatex">\(23\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>flip <span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\((1,1,0,0,0)\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(17\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>flip <span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\((1,1,1,1,0)\)</span></td>
        <td><span class="arithmatex">\(22\)</span></td>
        <td>—</td>
        <td>infeasible</td>
        </tr>
        <tr>
        <td>flip <span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\((1,1,1,0,1)\)</span></td>
        <td><span class="arithmatex">\(20\)</span></td>
        <td>—</td>
        <td>infeasible</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span> out, <span class="arithmatex">\(4\)</span> in</td>
        <td><span class="arithmatex">\((0,1,1,1,0)\)</span></td>
        <td><span class="arithmatex">\(20\)</span></td>
        <td>—</td>
        <td>infeasible</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span> out, <span class="arithmatex">\(5\)</span> in</td>
        <td><span class="arithmatex">\((0,1,1,0,1)\)</span></td>
        <td><span class="arithmatex">\(18\)</span></td>
        <td><span class="arithmatex">\(28\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span> out, <span class="arithmatex">\(4\)</span> in</td>
        <td><span class="arithmatex">\((1,0,1,1,0)\)</span></td>
        <td><span class="arithmatex">\(19\)</span></td>
        <td>—</td>
        <td>infeasible</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span> out, <span class="arithmatex">\(5\)</span> in</td>
        <td><span class="arithmatex">\((1,0,1,0,1)\)</span></td>
        <td><span class="arithmatex">\(17\)</span></td>
        <td><span class="arithmatex">\(31\)</span></td>
        <td><span class="arithmatex">\(\leftarrow\)</span> accepted</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span> out, <span class="arithmatex">\(4\)</span> in</td>
        <td><span class="arithmatex">\((1,1,0,1,0)\)</span></td>
        <td><span class="arithmatex">\(14\)</span></td>
        <td><span class="arithmatex">\(31\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span> out, <span class="arithmatex">\(5\)</span> in</td>
        <td><span class="arithmatex">\((1,1,0,0,1)\)</span></td>
        <td><span class="arithmatex">\(12\)</span></td>
        <td><span class="arithmatex">\(25\)</span></td>
        <td></td>
        </tr>
        </table></div>

        The move is accepted after examining 7 feasible neighbours.

        Iteration 2: current solution $x=(1,0,1,0,1)$, weight $17$, profit $31$.

        <div class="tabella" markdown="0"><table>
        <tr>
        <th>move</th>
        <th>neighbour</th>
        <th>weight</th>
        <th>profit</th>
        <th></th>
        </tr>
        <tr>
        <td>flip <span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\((0,0,1,0,1)\)</span></td>
        <td><span class="arithmatex">\(15\)</span></td>
        <td><span class="arithmatex">\(21\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>flip <span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\((1,1,1,0,1)\)</span></td>
        <td><span class="arithmatex">\(20\)</span></td>
        <td>—</td>
        <td>infeasible</td>
        </tr>
        <tr>
        <td>flip <span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\((1,0,0,0,1)\)</span></td>
        <td><span class="arithmatex">\(9\)</span></td>
        <td><span class="arithmatex">\(18\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>flip <span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\((1,0,1,1,1)\)</span></td>
        <td><span class="arithmatex">\(26\)</span></td>
        <td>—</td>
        <td>infeasible</td>
        </tr>
        <tr>
        <td>flip <span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\((1,0,1,0,0)\)</span></td>
        <td><span class="arithmatex">\(10\)</span></td>
        <td><span class="arithmatex">\(23\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span> out, <span class="arithmatex">\(2\)</span> in</td>
        <td><span class="arithmatex">\((0,1,1,0,1)\)</span></td>
        <td><span class="arithmatex">\(18\)</span></td>
        <td><span class="arithmatex">\(28\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span> out, <span class="arithmatex">\(4\)</span> in</td>
        <td><span class="arithmatex">\((0,0,1,1,1)\)</span></td>
        <td><span class="arithmatex">\(24\)</span></td>
        <td>—</td>
        <td>infeasible</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span> out, <span class="arithmatex">\(2\)</span> in</td>
        <td><span class="arithmatex">\((1,1,0,0,1)\)</span></td>
        <td><span class="arithmatex">\(12\)</span></td>
        <td><span class="arithmatex">\(25\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span> out, <span class="arithmatex">\(4\)</span> in</td>
        <td><span class="arithmatex">\((1,0,0,1,1)\)</span></td>
        <td><span class="arithmatex">\(18\)</span></td>
        <td><span class="arithmatex">\(32\)</span></td>
        <td><span class="arithmatex">\(\leftarrow\)</span> accepted</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(5\)</span> out, <span class="arithmatex">\(2\)</span> in</td>
        <td><span class="arithmatex">\((1,1,1,0,0)\)</span></td>
        <td><span class="arithmatex">\(13\)</span></td>
        <td><span class="arithmatex">\(30\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(5\)</span> out, <span class="arithmatex">\(4\)</span> in</td>
        <td><span class="arithmatex">\((1,0,1,1,0)\)</span></td>
        <td><span class="arithmatex">\(19\)</span></td>
        <td>—</td>
        <td>infeasible</td>
        </tr>
        </table></div>

        The move is accepted after examining 7 feasible neighbours.

        Iteration 3: current solution $x=(1,0,0,1,1)$, weight $18$, profit $32$.

        <div class="tabella" markdown="0"><table>
        <tr>
        <th>move</th>
        <th>neighbour</th>
        <th>weight</th>
        <th>profit</th>
        <th></th>
        </tr>
        <tr>
        <td>flip <span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\((0,0,0,1,1)\)</span></td>
        <td><span class="arithmatex">\(16\)</span></td>
        <td><span class="arithmatex">\(22\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>flip <span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\((1,1,0,1,1)\)</span></td>
        <td><span class="arithmatex">\(21\)</span></td>
        <td>—</td>
        <td>infeasible</td>
        </tr>
        <tr>
        <td>flip <span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\((1,0,1,1,1)\)</span></td>
        <td><span class="arithmatex">\(26\)</span></td>
        <td>—</td>
        <td>infeasible</td>
        </tr>
        <tr>
        <td>flip <span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\((1,0,0,0,1)\)</span></td>
        <td><span class="arithmatex">\(9\)</span></td>
        <td><span class="arithmatex">\(18\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>flip <span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\((1,0,0,1,0)\)</span></td>
        <td><span class="arithmatex">\(11\)</span></td>
        <td><span class="arithmatex">\(24\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span> out, <span class="arithmatex">\(2\)</span> in</td>
        <td><span class="arithmatex">\((0,1,0,1,1)\)</span></td>
        <td><span class="arithmatex">\(19\)</span></td>
        <td>—</td>
        <td>infeasible</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span> out, <span class="arithmatex">\(3\)</span> in</td>
        <td><span class="arithmatex">\((0,0,1,1,1)\)</span></td>
        <td><span class="arithmatex">\(24\)</span></td>
        <td>—</td>
        <td>infeasible</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(4\)</span> out, <span class="arithmatex">\(2\)</span> in</td>
        <td><span class="arithmatex">\((1,1,0,0,1)\)</span></td>
        <td><span class="arithmatex">\(12\)</span></td>
        <td><span class="arithmatex">\(25\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(4\)</span> out, <span class="arithmatex">\(3\)</span> in</td>
        <td><span class="arithmatex">\((1,0,1,0,1)\)</span></td>
        <td><span class="arithmatex">\(17\)</span></td>
        <td><span class="arithmatex">\(31\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(5\)</span> out, <span class="arithmatex">\(2\)</span> in</td>
        <td><span class="arithmatex">\((1,1,0,1,0)\)</span></td>
        <td><span class="arithmatex">\(14\)</span></td>
        <td><span class="arithmatex">\(31\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(5\)</span> out, <span class="arithmatex">\(3\)</span> in</td>
        <td><span class="arithmatex">\((1,0,1,1,0)\)</span></td>
        <td><span class="arithmatex">\(19\)</span></td>
        <td>—</td>
        <td>infeasible</td>
        </tr>
        </table></div>

        No feasible neighbour has a larger profit: $x=(1,0,0,1,1)$ is a <strong>local optimum</strong>, of profit $32$ (6 feasible neighbours examined).

        The local search makes 2 moves, $30\to31\to32$, and stops in $x=(1,0,0,1,1)$, of profit $32$.

    3. The items by non-increasing profit are $(4,3,1,5,2)$. With $rc=18$:

        - item $4$ ($w_{4}=9$) is selected, $rc=9$;

        - item $3$ ($w_{3}=8$) is selected, $rc=1$;

        - item $1$ ($w_{1}=2>rc=1$) is not selected;

        - item $5$ ($w_{5}=7>rc=1$) is not selected;

        - item $2$ ($w_{2}=3>rc=1$) is not selected;

        The greedy algorithm by profit returns $x=(0,0,1,1,0)$, of weight $17$ and profit $27$.

        Iteration 1: current solution $x=(0,0,1,1,0)$, weight $17$, profit $27$.

        <div class="tabella" markdown="0"><table>
        <tr>
        <th>move</th>
        <th>neighbour</th>
        <th>weight</th>
        <th>profit</th>
        <th></th>
        </tr>
        <tr>
        <td>flip <span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\((1,0,1,1,0)\)</span></td>
        <td><span class="arithmatex">\(19\)</span></td>
        <td>—</td>
        <td>infeasible</td>
        </tr>
        <tr>
        <td>flip <span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\((0,1,1,1,0)\)</span></td>
        <td><span class="arithmatex">\(20\)</span></td>
        <td>—</td>
        <td>infeasible</td>
        </tr>
        <tr>
        <td>flip <span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\((0,0,0,1,0)\)</span></td>
        <td><span class="arithmatex">\(9\)</span></td>
        <td><span class="arithmatex">\(14\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>flip <span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\((0,0,1,0,0)\)</span></td>
        <td><span class="arithmatex">\(8\)</span></td>
        <td><span class="arithmatex">\(13\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>flip <span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\((0,0,1,1,1)\)</span></td>
        <td><span class="arithmatex">\(24\)</span></td>
        <td>—</td>
        <td>infeasible</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span> out, <span class="arithmatex">\(1\)</span> in</td>
        <td><span class="arithmatex">\((1,0,0,1,0)\)</span></td>
        <td><span class="arithmatex">\(11\)</span></td>
        <td><span class="arithmatex">\(24\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span> out, <span class="arithmatex">\(2\)</span> in</td>
        <td><span class="arithmatex">\((0,1,0,1,0)\)</span></td>
        <td><span class="arithmatex">\(12\)</span></td>
        <td><span class="arithmatex">\(21\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span> out, <span class="arithmatex">\(5\)</span> in</td>
        <td><span class="arithmatex">\((0,0,0,1,1)\)</span></td>
        <td><span class="arithmatex">\(16\)</span></td>
        <td><span class="arithmatex">\(22\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(4\)</span> out, <span class="arithmatex">\(1\)</span> in</td>
        <td><span class="arithmatex">\((1,0,1,0,0)\)</span></td>
        <td><span class="arithmatex">\(10\)</span></td>
        <td><span class="arithmatex">\(23\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(4\)</span> out, <span class="arithmatex">\(2\)</span> in</td>
        <td><span class="arithmatex">\((0,1,1,0,0)\)</span></td>
        <td><span class="arithmatex">\(11\)</span></td>
        <td><span class="arithmatex">\(20\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(4\)</span> out, <span class="arithmatex">\(5\)</span> in</td>
        <td><span class="arithmatex">\((0,0,1,0,1)\)</span></td>
        <td><span class="arithmatex">\(15\)</span></td>
        <td><span class="arithmatex">\(21\)</span></td>
        <td></td>
        </tr>
        </table></div>

        No feasible neighbour has a larger profit: $x=(0,0,1,1,0)$ is a <strong>local optimum</strong>, of profit $27$ (8 feasible neighbours examined).

    4. The local search from $GR$ reaches $x=(1,0,0,1,1)$, of profit $32=z(I)$: an <strong>optimal</strong> solution. The local search from the greedy solution by profit stops immediately in $x=(0,0,1,1,0)$, of profit $27$, a local optimum that is not optimal. To go from $\{3,4\}$ to the optimal set $\{1,4,5\}$ one must remove item $3$ and add the items $1$ and $5$: three flips, or one swap and one flip, and every intermediate vector is either infeasible or worse. The local optimum reached depends on the <strong>starting solution</strong>.

<a id="esercizio-20-2"></a>

!!! esercizio "Exercise 20.2: Local search KP 2"

    We consider a knapsack of capacity $c = 13$ and a set $\mathscr{I} = \{1,2,3,4,5\}$ of $5$ items ($n=5$), with the following profits and weights:

    $$
    \begin{array}{l|ccccc}
    \hline  & {i=1} & {i=2} & {i=3} & {i=4} & {i=5} \\[1ex]
    \hline {p_i} & {8} & {9} & {14} & {11} & {9} \\[1ex]
    {w_i} & {3} & {5} & {9} & {9} & {8} \\
    \hline
    \end{array}
    $$

    The items are sorted by non-increasing efficiency. The neighbourhood flip+swap contains the feasible vectors obtained by a flip (add or remove one item) or by a swap (remove a selected item $i$, add an unselected item $k$); the flips are examined first, for $i=1,\dots,n$, then the swaps, for increasing $i$ and, for each $i$, increasing $k$. Ties in best improvement are broken in favour of the move examined first.

    **Questions**

    1. Compute the solution of the greedy algorithm $GR$ (by efficiency) and its profit.

    2. Apply the local search with the neighbourhood flip+swap and the <strong>first-improvement</strong> rule, starting from the solution of $GR$.

    3. Apply the same local search with the <strong>best-improvement</strong> rule, starting from the solution of $GR$.

    4. Compare the two local optima, and the number of feasible neighbours examined by the two rules. Is one of the two local optima optimal? (Hint: the LP relaxation bound is not enough here; split the solutions according to whether item $3$ is selected.)

??? soluzione "Solution"

    1. The efficiencies are $\frac{8}{3}$, $\frac{9}{5}$, $\frac{14}{9}$, $\frac{11}{9}$, $\frac{9}{8}$, non-increasing. With $rc=13$:

        - item $1$ ($w_{1}=3$) is selected, $rc=10$;

        - item $2$ ($w_{2}=5$) is selected, $rc=5$;

        - item $3$ ($w_{3}=9>rc=5$) is not selected;

        - item $4$ ($w_{4}=9>rc=5$) is not selected;

        - item $5$ ($w_{5}=8>rc=5$) is not selected;

        $GR$ returns $x=(1,1,0,0,0)$, of weight $8$ and profit $GR(I)=17$.

    2. Iteration 1: current solution $x=(1,1,0,0,0)$, weight $8$, profit $17$.

        <div class="tabella" markdown="0"><table>
        <tr>
        <th>move</th>
        <th>neighbour</th>
        <th>weight</th>
        <th>profit</th>
        <th></th>
        </tr>
        <tr>
        <td>flip <span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\((0,1,0,0,0)\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(9\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>flip <span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\((1,0,0,0,0)\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(8\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>flip <span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\((1,1,1,0,0)\)</span></td>
        <td><span class="arithmatex">\(17\)</span></td>
        <td>—</td>
        <td>infeasible</td>
        </tr>
        <tr>
        <td>flip <span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\((1,1,0,1,0)\)</span></td>
        <td><span class="arithmatex">\(17\)</span></td>
        <td>—</td>
        <td>infeasible</td>
        </tr>
        <tr>
        <td>flip <span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\((1,1,0,0,1)\)</span></td>
        <td><span class="arithmatex">\(16\)</span></td>
        <td>—</td>
        <td>infeasible</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span> out, <span class="arithmatex">\(3\)</span> in</td>
        <td><span class="arithmatex">\((0,1,1,0,0)\)</span></td>
        <td><span class="arithmatex">\(14\)</span></td>
        <td>—</td>
        <td>infeasible</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span> out, <span class="arithmatex">\(4\)</span> in</td>
        <td><span class="arithmatex">\((0,1,0,1,0)\)</span></td>
        <td><span class="arithmatex">\(14\)</span></td>
        <td>—</td>
        <td>infeasible</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span> out, <span class="arithmatex">\(5\)</span> in</td>
        <td><span class="arithmatex">\((0,1,0,0,1)\)</span></td>
        <td><span class="arithmatex">\(13\)</span></td>
        <td><span class="arithmatex">\(18\)</span></td>
        <td><span class="arithmatex">\(\leftarrow\)</span> accepted</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span> out, <span class="arithmatex">\(3\)</span> in</td>
        <td><span class="arithmatex">\((1,0,1,0,0)\)</span></td>
        <td><span class="arithmatex">\(12\)</span></td>
        <td><span class="arithmatex">\(22\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span> out, <span class="arithmatex">\(4\)</span> in</td>
        <td><span class="arithmatex">\((1,0,0,1,0)\)</span></td>
        <td><span class="arithmatex">\(12\)</span></td>
        <td><span class="arithmatex">\(19\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span> out, <span class="arithmatex">\(5\)</span> in</td>
        <td><span class="arithmatex">\((1,0,0,0,1)\)</span></td>
        <td><span class="arithmatex">\(11\)</span></td>
        <td><span class="arithmatex">\(17\)</span></td>
        <td></td>
        </tr>
        </table></div>

        The move is accepted after examining 3 feasible neighbours.

        Iteration 2: current solution $x=(0,1,0,0,1)$, weight $13$, profit $18$.

        <div class="tabella" markdown="0"><table>
        <tr>
        <th>move</th>
        <th>neighbour</th>
        <th>weight</th>
        <th>profit</th>
        <th></th>
        </tr>
        <tr>
        <td>flip <span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\((1,1,0,0,1)\)</span></td>
        <td><span class="arithmatex">\(16\)</span></td>
        <td>—</td>
        <td>infeasible</td>
        </tr>
        <tr>
        <td>flip <span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\((0,0,0,0,1)\)</span></td>
        <td><span class="arithmatex">\(8\)</span></td>
        <td><span class="arithmatex">\(9\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>flip <span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\((0,1,1,0,1)\)</span></td>
        <td><span class="arithmatex">\(22\)</span></td>
        <td>—</td>
        <td>infeasible</td>
        </tr>
        <tr>
        <td>flip <span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\((0,1,0,1,1)\)</span></td>
        <td><span class="arithmatex">\(22\)</span></td>
        <td>—</td>
        <td>infeasible</td>
        </tr>
        <tr>
        <td>flip <span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\((0,1,0,0,0)\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(9\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span> out, <span class="arithmatex">\(1\)</span> in</td>
        <td><span class="arithmatex">\((1,0,0,0,1)\)</span></td>
        <td><span class="arithmatex">\(11\)</span></td>
        <td><span class="arithmatex">\(17\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span> out, <span class="arithmatex">\(3\)</span> in</td>
        <td><span class="arithmatex">\((0,0,1,0,1)\)</span></td>
        <td><span class="arithmatex">\(17\)</span></td>
        <td>—</td>
        <td>infeasible</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span> out, <span class="arithmatex">\(4\)</span> in</td>
        <td><span class="arithmatex">\((0,0,0,1,1)\)</span></td>
        <td><span class="arithmatex">\(17\)</span></td>
        <td>—</td>
        <td>infeasible</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(5\)</span> out, <span class="arithmatex">\(1\)</span> in</td>
        <td><span class="arithmatex">\((1,1,0,0,0)\)</span></td>
        <td><span class="arithmatex">\(8\)</span></td>
        <td><span class="arithmatex">\(17\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(5\)</span> out, <span class="arithmatex">\(3\)</span> in</td>
        <td><span class="arithmatex">\((0,1,1,0,0)\)</span></td>
        <td><span class="arithmatex">\(14\)</span></td>
        <td>—</td>
        <td>infeasible</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(5\)</span> out, <span class="arithmatex">\(4\)</span> in</td>
        <td><span class="arithmatex">\((0,1,0,1,0)\)</span></td>
        <td><span class="arithmatex">\(14\)</span></td>
        <td>—</td>
        <td>infeasible</td>
        </tr>
        </table></div>

        No feasible neighbour has a larger profit: $x=(0,1,0,0,1)$ is a <strong>local optimum</strong>, of profit $18$ (4 feasible neighbours examined).

        First improvement stops in $x=(0,1,0,0,1)$, of profit $18$, after examining 7 feasible neighbours in total.

    3. Iteration 1: current solution $x=(1,1,0,0,0)$, weight $8$, profit $17$.

        <div class="tabella" markdown="0"><table>
        <tr>
        <th>move</th>
        <th>neighbour</th>
        <th>weight</th>
        <th>profit</th>
        <th></th>
        </tr>
        <tr>
        <td>flip <span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\((0,1,0,0,0)\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(9\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>flip <span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\((1,0,0,0,0)\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(8\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>flip <span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\((1,1,1,0,0)\)</span></td>
        <td><span class="arithmatex">\(17\)</span></td>
        <td>—</td>
        <td>infeasible</td>
        </tr>
        <tr>
        <td>flip <span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\((1,1,0,1,0)\)</span></td>
        <td><span class="arithmatex">\(17\)</span></td>
        <td>—</td>
        <td>infeasible</td>
        </tr>
        <tr>
        <td>flip <span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\((1,1,0,0,1)\)</span></td>
        <td><span class="arithmatex">\(16\)</span></td>
        <td>—</td>
        <td>infeasible</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span> out, <span class="arithmatex">\(3\)</span> in</td>
        <td><span class="arithmatex">\((0,1,1,0,0)\)</span></td>
        <td><span class="arithmatex">\(14\)</span></td>
        <td>—</td>
        <td>infeasible</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span> out, <span class="arithmatex">\(4\)</span> in</td>
        <td><span class="arithmatex">\((0,1,0,1,0)\)</span></td>
        <td><span class="arithmatex">\(14\)</span></td>
        <td>—</td>
        <td>infeasible</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span> out, <span class="arithmatex">\(5\)</span> in</td>
        <td><span class="arithmatex">\((0,1,0,0,1)\)</span></td>
        <td><span class="arithmatex">\(13\)</span></td>
        <td><span class="arithmatex">\(18\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span> out, <span class="arithmatex">\(3\)</span> in</td>
        <td><span class="arithmatex">\((1,0,1,0,0)\)</span></td>
        <td><span class="arithmatex">\(12\)</span></td>
        <td><span class="arithmatex">\(22\)</span></td>
        <td><span class="arithmatex">\(\leftarrow\)</span> accepted</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span> out, <span class="arithmatex">\(4\)</span> in</td>
        <td><span class="arithmatex">\((1,0,0,1,0)\)</span></td>
        <td><span class="arithmatex">\(12\)</span></td>
        <td><span class="arithmatex">\(19\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span> out, <span class="arithmatex">\(5\)</span> in</td>
        <td><span class="arithmatex">\((1,0,0,0,1)\)</span></td>
        <td><span class="arithmatex">\(11\)</span></td>
        <td><span class="arithmatex">\(17\)</span></td>
        <td></td>
        </tr>
        </table></div>

        The move is accepted after examining 6 feasible neighbours.

        Iteration 2: current solution $x=(1,0,1,0,0)$, weight $12$, profit $22$.

        <div class="tabella" markdown="0"><table>
        <tr>
        <th>move</th>
        <th>neighbour</th>
        <th>weight</th>
        <th>profit</th>
        <th></th>
        </tr>
        <tr>
        <td>flip <span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\((0,0,1,0,0)\)</span></td>
        <td><span class="arithmatex">\(9\)</span></td>
        <td><span class="arithmatex">\(14\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>flip <span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\((1,1,1,0,0)\)</span></td>
        <td><span class="arithmatex">\(17\)</span></td>
        <td>—</td>
        <td>infeasible</td>
        </tr>
        <tr>
        <td>flip <span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\((1,0,0,0,0)\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(8\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>flip <span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\((1,0,1,1,0)\)</span></td>
        <td><span class="arithmatex">\(21\)</span></td>
        <td>—</td>
        <td>infeasible</td>
        </tr>
        <tr>
        <td>flip <span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\((1,0,1,0,1)\)</span></td>
        <td><span class="arithmatex">\(20\)</span></td>
        <td>—</td>
        <td>infeasible</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span> out, <span class="arithmatex">\(2\)</span> in</td>
        <td><span class="arithmatex">\((0,1,1,0,0)\)</span></td>
        <td><span class="arithmatex">\(14\)</span></td>
        <td>—</td>
        <td>infeasible</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span> out, <span class="arithmatex">\(4\)</span> in</td>
        <td><span class="arithmatex">\((0,0,1,1,0)\)</span></td>
        <td><span class="arithmatex">\(18\)</span></td>
        <td>—</td>
        <td>infeasible</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span> out, <span class="arithmatex">\(5\)</span> in</td>
        <td><span class="arithmatex">\((0,0,1,0,1)\)</span></td>
        <td><span class="arithmatex">\(17\)</span></td>
        <td>—</td>
        <td>infeasible</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span> out, <span class="arithmatex">\(2\)</span> in</td>
        <td><span class="arithmatex">\((1,1,0,0,0)\)</span></td>
        <td><span class="arithmatex">\(8\)</span></td>
        <td><span class="arithmatex">\(17\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span> out, <span class="arithmatex">\(4\)</span> in</td>
        <td><span class="arithmatex">\((1,0,0,1,0)\)</span></td>
        <td><span class="arithmatex">\(12\)</span></td>
        <td><span class="arithmatex">\(19\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span> out, <span class="arithmatex">\(5\)</span> in</td>
        <td><span class="arithmatex">\((1,0,0,0,1)\)</span></td>
        <td><span class="arithmatex">\(11\)</span></td>
        <td><span class="arithmatex">\(17\)</span></td>
        <td></td>
        </tr>
        </table></div>

        No feasible neighbour has a larger profit: $x=(1,0,1,0,0)$ is a <strong>local optimum</strong>, of profit $22$ (5 feasible neighbours examined).

        Best improvement stops in $x=(1,0,1,0,0)$, of profit $22$, after examining 11 feasible neighbours in total.

    4. First improvement accepts the first improving swap it finds, which gains only $1$, and stops in a local optimum of profit $18$; best improvement takes the largest gain and reaches profit $22$. They examine 7 and 11 feasible neighbours. The LP relaxation gives $z(I)\le 8+9+14\cdot\frac{5}{9}=\frac{223}{9}$, hence $z(I)\le 24$, which does not prove that $22$ is optimal. We argue directly. If item $3$ is selected, the residual capacity is $4$ and only item $1$ fits, for a profit of $22$. If item $3$ is not selected, the best solution is $\{1,4\}$, of profit $19$. Hence $z(I)=22$ and the solution of best improvement, $x=(1,0,1,0,0)$, is <strong>optimal</strong>. From the same starting solution the two rules reach <strong>different local optima</strong>.

<a id="esercizio-20-3"></a>

!!! esercizio "Exercise 20.3: Local search KP 3"

    We consider a knapsack of capacity $c = 11$ and a set $\mathscr{I} = \{1,2,3,4,5\}$ of $5$ items ($n=5$), with the following profits and weights:

    $$
    \begin{array}{l|ccccc}
    \hline  & {i=1} & {i=2} & {i=3} & {i=4} & {i=5} \\[1ex]
    \hline {p_i} & {14} & {7} & {10} & {8} & {6} \\[1ex]
    {w_i} & {4} & {4} & {7} & {7} & {9} \\
    \hline
    \end{array}
    $$

    The items are sorted by non-increasing efficiency. With penalties, the local search maximizes $g_\alpha(x)=\sum_i p_ix_i-\alpha\max\{0,\sum_i w_ix_i-c\}$ over all the binary vectors, with the flip neighbourhood (flips examined for $i=1,\dots,n$) and the best-improvement rule.

    **Questions**

    1. Compute the solution of $GR$, and show that it is a local optimum for the flip neighbourhood restricted to feasible vectors.

    2. Apply the penalty flip local search with $\alpha=1$, starting from the solution of $GR$. Is the local optimum feasible? Which solution should the search return?

    3. Apply the penalty flip local search with $\alpha=2$, starting from the solution of $GR$.

    4. Apply it with $\alpha=3$. The optimal value is $z(I)=24$: discuss the role of $\alpha$, and state for which values of $\alpha$ the local optima are surely feasible.

??? soluzione "Solution"

    1. With $rc=11$:

        - item $1$ ($w_{1}=4$) is selected, $rc=7$;

        - item $2$ ($w_{2}=4$) is selected, $rc=3$;

        - item $3$ ($w_{3}=7>rc=3$) is not selected;

        - item $4$ ($w_{4}=7>rc=3$) is not selected;

        - item $5$ ($w_{5}=9>rc=3$) is not selected;

        $GR$ returns $x=(1,1,0,0,0)$, of weight $8$ and profit $21$. Its flips are

        <div class="tabella" markdown="0"><table>
        <tr>
        <th>move</th>
        <th>neighbour</th>
        <th>weight</th>
        <th>profit</th>
        <th></th>
        </tr>
        <tr>
        <td>flip <span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\((0,1,0,0,0)\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(7\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>flip <span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\((1,0,0,0,0)\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(14\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>flip <span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\((1,1,1,0,0)\)</span></td>
        <td><span class="arithmatex">\(15\)</span></td>
        <td>—</td>
        <td>infeasible</td>
        </tr>
        <tr>
        <td>flip <span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\((1,1,0,1,0)\)</span></td>
        <td><span class="arithmatex">\(15\)</span></td>
        <td>—</td>
        <td>infeasible</td>
        </tr>
        <tr>
        <td>flip <span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\((1,1,0,0,1)\)</span></td>
        <td><span class="arithmatex">\(17\)</span></td>
        <td>—</td>
        <td>infeasible</td>
        </tr>
        </table></div>

        The feasible neighbours remove an item and have a smaller profit: $x$ is a local optimum for the feasible flip neighbourhood.

    2. Iteration 1: $x=(1,1,0,0,0)$, weight $8$, $g_{1}(x)=21$.

        <div class="tabella" markdown="0"><table>
        <tr>
        <th>move</th>
        <th>neighbour</th>
        <th>weight</th>
        <th>excess</th>
        <th><span class="arithmatex">\(g_{1}\)</span></th>
        <th></th>
        </tr>
        <tr>
        <td>flip <span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\((0,1,0,0,0)\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(7-1\cdot0=7\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>flip <span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\((1,0,0,0,0)\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(14-1\cdot0=14\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>flip <span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\((1,1,1,0,0)\)</span></td>
        <td><span class="arithmatex">\(15\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(31-1\cdot4=27\)</span></td>
        <td><span class="arithmatex">\(\leftarrow\)</span></td>
        </tr>
        <tr>
        <td>flip <span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\((1,1,0,1,0)\)</span></td>
        <td><span class="arithmatex">\(15\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(29-1\cdot4=25\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>flip <span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\((1,1,0,0,1)\)</span></td>
        <td><span class="arithmatex">\(17\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(27-1\cdot6=21\)</span></td>
        <td></td>
        </tr>
        </table></div>

        Iteration 2: $x=(1,1,1,0,0)$, weight $15$, $g_{1}(x)=27$.

        <div class="tabella" markdown="0"><table>
        <tr>
        <th>move</th>
        <th>neighbour</th>
        <th>weight</th>
        <th>excess</th>
        <th><span class="arithmatex">\(g_{1}\)</span></th>
        <th></th>
        </tr>
        <tr>
        <td>flip <span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\((0,1,1,0,0)\)</span></td>
        <td><span class="arithmatex">\(11\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(17-1\cdot0=17\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>flip <span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\((1,0,1,0,0)\)</span></td>
        <td><span class="arithmatex">\(11\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(24-1\cdot0=24\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>flip <span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\((1,1,0,0,0)\)</span></td>
        <td><span class="arithmatex">\(8\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(21-1\cdot0=21\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>flip <span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\((1,1,1,1,0)\)</span></td>
        <td><span class="arithmatex">\(22\)</span></td>
        <td><span class="arithmatex">\(11\)</span></td>
        <td><span class="arithmatex">\(39-1\cdot11=28\)</span></td>
        <td><span class="arithmatex">\(\leftarrow\)</span></td>
        </tr>
        <tr>
        <td>flip <span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\((1,1,1,0,1)\)</span></td>
        <td><span class="arithmatex">\(24\)</span></td>
        <td><span class="arithmatex">\(13\)</span></td>
        <td><span class="arithmatex">\(37-1\cdot13=24\)</span></td>
        <td></td>
        </tr>
        </table></div>

        Iteration 3: $x=(1,1,1,1,0)$, weight $22$, $g_{1}(x)=28$.

        <div class="tabella" markdown="0"><table>
        <tr>
        <th>move</th>
        <th>neighbour</th>
        <th>weight</th>
        <th>excess</th>
        <th><span class="arithmatex">\(g_{1}\)</span></th>
        <th></th>
        </tr>
        <tr>
        <td>flip <span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\((0,1,1,1,0)\)</span></td>
        <td><span class="arithmatex">\(18\)</span></td>
        <td><span class="arithmatex">\(7\)</span></td>
        <td><span class="arithmatex">\(25-1\cdot7=18\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>flip <span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\((1,0,1,1,0)\)</span></td>
        <td><span class="arithmatex">\(18\)</span></td>
        <td><span class="arithmatex">\(7\)</span></td>
        <td><span class="arithmatex">\(32-1\cdot7=25\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>flip <span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\((1,1,0,1,0)\)</span></td>
        <td><span class="arithmatex">\(15\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(29-1\cdot4=25\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>flip <span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\((1,1,1,0,0)\)</span></td>
        <td><span class="arithmatex">\(15\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(31-1\cdot4=27\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>flip <span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\((1,1,1,1,1)\)</span></td>
        <td><span class="arithmatex">\(31\)</span></td>
        <td><span class="arithmatex">\(20\)</span></td>
        <td><span class="arithmatex">\(45-1\cdot20=25\)</span></td>
        <td></td>
        </tr>
        </table></div>

        No flip increases $g_{1}$: the search stops in $x=(1,1,1,1,0)$, of weight $22$ and profit $39$.

        The local optimum is <strong>infeasible</strong> (weight $22>11$): the penalty is too small. The search must return the best feasible vector visited, $(1,1,0,0,0)$, of profit $21$, i.e., the starting solution.

    3. Iteration 1: $x=(1,1,0,0,0)$, weight $8$, $g_{2}(x)=21$.

        <div class="tabella" markdown="0"><table>
        <tr>
        <th>move</th>
        <th>neighbour</th>
        <th>weight</th>
        <th>excess</th>
        <th><span class="arithmatex">\(g_{2}\)</span></th>
        <th></th>
        </tr>
        <tr>
        <td>flip <span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\((0,1,0,0,0)\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(7-2\cdot0=7\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>flip <span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\((1,0,0,0,0)\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(14-2\cdot0=14\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>flip <span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\((1,1,1,0,0)\)</span></td>
        <td><span class="arithmatex">\(15\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(31-2\cdot4=23\)</span></td>
        <td><span class="arithmatex">\(\leftarrow\)</span></td>
        </tr>
        <tr>
        <td>flip <span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\((1,1,0,1,0)\)</span></td>
        <td><span class="arithmatex">\(15\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(29-2\cdot4=21\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>flip <span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\((1,1,0,0,1)\)</span></td>
        <td><span class="arithmatex">\(17\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(27-2\cdot6=15\)</span></td>
        <td></td>
        </tr>
        </table></div>

        Iteration 2: $x=(1,1,1,0,0)$, weight $15$, $g_{2}(x)=23$.

        <div class="tabella" markdown="0"><table>
        <tr>
        <th>move</th>
        <th>neighbour</th>
        <th>weight</th>
        <th>excess</th>
        <th><span class="arithmatex">\(g_{2}\)</span></th>
        <th></th>
        </tr>
        <tr>
        <td>flip <span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\((0,1,1,0,0)\)</span></td>
        <td><span class="arithmatex">\(11\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(17-2\cdot0=17\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>flip <span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\((1,0,1,0,0)\)</span></td>
        <td><span class="arithmatex">\(11\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(24-2\cdot0=24\)</span></td>
        <td><span class="arithmatex">\(\leftarrow\)</span></td>
        </tr>
        <tr>
        <td>flip <span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\((1,1,0,0,0)\)</span></td>
        <td><span class="arithmatex">\(8\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(21-2\cdot0=21\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>flip <span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\((1,1,1,1,0)\)</span></td>
        <td><span class="arithmatex">\(22\)</span></td>
        <td><span class="arithmatex">\(11\)</span></td>
        <td><span class="arithmatex">\(39-2\cdot11=17\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>flip <span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\((1,1,1,0,1)\)</span></td>
        <td><span class="arithmatex">\(24\)</span></td>
        <td><span class="arithmatex">\(13\)</span></td>
        <td><span class="arithmatex">\(37-2\cdot13=11\)</span></td>
        <td></td>
        </tr>
        </table></div>

        Iteration 3: $x=(1,0,1,0,0)$, weight $11$, $g_{2}(x)=24$.

        <div class="tabella" markdown="0"><table>
        <tr>
        <th>move</th>
        <th>neighbour</th>
        <th>weight</th>
        <th>excess</th>
        <th><span class="arithmatex">\(g_{2}\)</span></th>
        <th></th>
        </tr>
        <tr>
        <td>flip <span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\((0,0,1,0,0)\)</span></td>
        <td><span class="arithmatex">\(7\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(10-2\cdot0=10\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>flip <span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\((1,1,1,0,0)\)</span></td>
        <td><span class="arithmatex">\(15\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(31-2\cdot4=23\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>flip <span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\((1,0,0,0,0)\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(14-2\cdot0=14\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>flip <span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\((1,0,1,1,0)\)</span></td>
        <td><span class="arithmatex">\(18\)</span></td>
        <td><span class="arithmatex">\(7\)</span></td>
        <td><span class="arithmatex">\(32-2\cdot7=18\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>flip <span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\((1,0,1,0,1)\)</span></td>
        <td><span class="arithmatex">\(20\)</span></td>
        <td><span class="arithmatex">\(9\)</span></td>
        <td><span class="arithmatex">\(30-2\cdot9=12\)</span></td>
        <td></td>
        </tr>
        </table></div>

        No flip increases $g_{2}$: the search stops in $x=(1,0,1,0,0)$, of weight $11$ and profit $24$.

        The local optimum $(1,0,1,0,0)$ is feasible, of profit $24=z(I)$: it is <strong>optimal</strong>. The search reached it through the infeasible vector $(1,1,1,0,0)$.

    4. Iteration 1: $x=(1,1,0,0,0)$, weight $8$, $g_{3}(x)=21$.

        <div class="tabella" markdown="0"><table>
        <tr>
        <th>move</th>
        <th>neighbour</th>
        <th>weight</th>
        <th>excess</th>
        <th><span class="arithmatex">\(g_{3}\)</span></th>
        <th></th>
        </tr>
        <tr>
        <td>flip <span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\((0,1,0,0,0)\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(7-3\cdot0=7\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>flip <span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\((1,0,0,0,0)\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(14-3\cdot0=14\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>flip <span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\((1,1,1,0,0)\)</span></td>
        <td><span class="arithmatex">\(15\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(31-3\cdot4=19\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>flip <span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\((1,1,0,1,0)\)</span></td>
        <td><span class="arithmatex">\(15\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(29-3\cdot4=17\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>flip <span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\((1,1,0,0,1)\)</span></td>
        <td><span class="arithmatex">\(17\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(27-3\cdot6=9\)</span></td>
        <td></td>
        </tr>
        </table></div>

        No flip increases $g_{3}$: the search stops in $x=(1,1,0,0,0)$, of weight $8$ and profit $21$.

        With $\alpha=3$ the search does not move: it behaves as the feasible search and stops in the solution of $GR$, of profit $21$. A small $\alpha$ ($1$) lets the search stop among infeasible vectors; a large $\alpha$ ($3$) forbids it to cross the infeasible region; here only $\alpha=2$ reaches the optimum. If $\alpha>\max_i p_i=14$, every infeasible vector has an improving flip (removing any selected item decreases the excess by at least $1$ and gains at least $\alpha-p_i>0$), so all the local optima are feasible; but then, from a feasible vector, no flip that creates an excess is improving, and the search never leaves the feasible region.

## Bin packing

<a id="esercizio-20-4"></a>

!!! esercizio "Exercise 20.4: Local search BPP 1"

    Bins of capacity $c=10$ and a set $\mathscr{I}=\{1,2,3,4,5,6,7\}$ of $7$ items with weights

    $$
    \begin{array}{l|ccccccc}
    \hline  & {i=1} & {i=2} & {i=3} & {i=4} & {i=5} & {i=6} & {i=7} \\[1ex]
    \hline {w_i} & {2} & {3} & {2} & {7} & {4} & {7} & {4} \\
    \hline
    \end{array}
    $$

    The bins are labelled $1,2,\dots$ in the order in which $FF$ opens them, and keep their label. A <em>move</em> puts one item into another non-empty bin where it fits (examined for $i=1,\dots,n$ and, for each $i$, for increasing bin label); a <em>swap</em> exchanges two items $i<k$ of different weight in different bins, if both bins stay feasible. The auxiliary objective $SQ=\sum_b L_b^2$ is maximized; the gain of a transfer of $\delta$ from bin $a$ to bin $b$ is $2\delta(L_b-L_a+\delta)$ (a move of item $i$ transfers $\delta=w_i$, a swap of item $i$ in bin $a$ and item $k$ in bin $b$ transfers $\delta=w_i-w_k$). Best improvement breaks ties in favour of the move examined first.

    **Questions**

    1. Compute the solution of First Fit ($FF$), its number of bins and the lower bound $\lceil\sum_i w_i/c\rceil$.

    2. Apply the move local search with the objective $nb$ (number of bins), starting from the solution of $FF$. Why does it stop?

    3. Apply the move local search with the auxiliary objective $SQ=\sum_b L_b^2$ and the best-improvement rule, starting from the solution of $FF$.

    4. Is the final solution optimal? Explain the different behaviour of the two objectives.

??? soluzione "Solution"

    1. - item $1$ ($w_{1}=2$) goes into bin $1$, opened for it, load $2$;

        - item $2$ ($w_{2}=3$) goes into bin $1$, load $5$;

        - item $3$ ($w_{3}=2$) goes into bin $1$, load $7$;

        - item $4$ ($w_{4}=7$) fits in no open bin: bin $2$ is opened, load $7$;

        - item $5$ ($w_{5}=4$) fits in no open bin: bin $3$ is opened, load $4$;

        - item $6$ ($w_{6}=7$) fits in no open bin: bin $4$ is opened, load $7$;

        - item $7$ ($w_{7}=4$) goes into bin $3$, load $8$;

        $FF$ uses $nb=4$ bins, with packing patterns $\{1,2,3\}, \{4\}, \{5,7\}, \{6\}$ and loads $(7,7,8,7)$. The lower bound is $\lceil 29/10\rceil=3$.

    2. Iteration 1 (move): packing patterns $\{1,2,3\}, \{4\}, \{5,7\}, \{6\}$, loads $(7,7,8,7)$, $nb=4$, $SQ=211$.

        <div class="tabella" markdown="0"><table>
        <tr>
        <th>move</th>
        <th>loads</th>
        <th>bin emptied</th>
        <th></th>
        </tr>
        <tr>
        <td>item <span class="arithmatex">\(1\)</span>: bin <span class="arithmatex">\(1\to 2\)</span></td>
        <td><span class="arithmatex">\((5,9,8,7)\)</span></td>
        <td>no</td>
        <td></td>
        </tr>
        <tr>
        <td>item <span class="arithmatex">\(1\)</span>: bin <span class="arithmatex">\(1\to 3\)</span></td>
        <td><span class="arithmatex">\((5,7,10,7)\)</span></td>
        <td>no</td>
        <td></td>
        </tr>
        <tr>
        <td>item <span class="arithmatex">\(1\)</span>: bin <span class="arithmatex">\(1\to 4\)</span></td>
        <td><span class="arithmatex">\((5,7,8,9)\)</span></td>
        <td>no</td>
        <td></td>
        </tr>
        <tr>
        <td>item <span class="arithmatex">\(2\)</span>: bin <span class="arithmatex">\(1\to 2\)</span></td>
        <td><span class="arithmatex">\((4,10,8,7)\)</span></td>
        <td>no</td>
        <td></td>
        </tr>
        <tr>
        <td>item <span class="arithmatex">\(2\)</span>: bin <span class="arithmatex">\(1\to 4\)</span></td>
        <td><span class="arithmatex">\((4,7,8,10)\)</span></td>
        <td>no</td>
        <td></td>
        </tr>
        <tr>
        <td>item <span class="arithmatex">\(3\)</span>: bin <span class="arithmatex">\(1\to 2\)</span></td>
        <td><span class="arithmatex">\((5,9,8,7)\)</span></td>
        <td>no</td>
        <td></td>
        </tr>
        <tr>
        <td>item <span class="arithmatex">\(3\)</span>: bin <span class="arithmatex">\(1\to 3\)</span></td>
        <td><span class="arithmatex">\((5,7,10,7)\)</span></td>
        <td>no</td>
        <td></td>
        </tr>
        <tr>
        <td>item <span class="arithmatex">\(3\)</span>: bin <span class="arithmatex">\(1\to 4\)</span></td>
        <td><span class="arithmatex">\((5,7,8,9)\)</span></td>
        <td>no</td>
        <td></td>
        </tr>
        </table></div>

        No move is improving.

        No move empties a bin, so no move decreases $nb$: the solution of $FF$ is a local optimum with $4$ bins. All the moves are neutral for $nb$: the search is on a <strong>plateau</strong>.

    3. Iteration 1 (move): packing patterns $\{1,2,3\}, \{4\}, \{5,7\}, \{6\}$, loads $(7,7,8,7)$, $nb=4$, $SQ=211$.

        <div class="tabella" markdown="0"><table>
        <tr>
        <th>move</th>
        <th>loads</th>
        <th>gain</th>
        <th></th>
        </tr>
        <tr>
        <td>item <span class="arithmatex">\(1\)</span>: bin <span class="arithmatex">\(1\to 2\)</span></td>
        <td><span class="arithmatex">\((5,9,8,7)\)</span></td>
        <td><span class="arithmatex">\(2\cdot2\cdot(7-7+2)=8\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>item <span class="arithmatex">\(1\)</span>: bin <span class="arithmatex">\(1\to 3\)</span></td>
        <td><span class="arithmatex">\((5,7,10,7)\)</span></td>
        <td><span class="arithmatex">\(2\cdot2\cdot(8-7+2)=12\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>item <span class="arithmatex">\(1\)</span>: bin <span class="arithmatex">\(1\to 4\)</span></td>
        <td><span class="arithmatex">\((5,7,8,9)\)</span></td>
        <td><span class="arithmatex">\(2\cdot2\cdot(7-7+2)=8\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>item <span class="arithmatex">\(2\)</span>: bin <span class="arithmatex">\(1\to 2\)</span></td>
        <td><span class="arithmatex">\((4,10,8,7)\)</span></td>
        <td><span class="arithmatex">\(2\cdot3\cdot(7-7+3)=18\)</span></td>
        <td><span class="arithmatex">\(\leftarrow\)</span></td>
        </tr>
        <tr>
        <td>item <span class="arithmatex">\(2\)</span>: bin <span class="arithmatex">\(1\to 4\)</span></td>
        <td><span class="arithmatex">\((4,7,8,10)\)</span></td>
        <td><span class="arithmatex">\(2\cdot3\cdot(7-7+3)=18\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>item <span class="arithmatex">\(3\)</span>: bin <span class="arithmatex">\(1\to 2\)</span></td>
        <td><span class="arithmatex">\((5,9,8,7)\)</span></td>
        <td><span class="arithmatex">\(2\cdot2\cdot(7-7+2)=8\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>item <span class="arithmatex">\(3\)</span>: bin <span class="arithmatex">\(1\to 3\)</span></td>
        <td><span class="arithmatex">\((5,7,10,7)\)</span></td>
        <td><span class="arithmatex">\(2\cdot2\cdot(8-7+2)=12\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>item <span class="arithmatex">\(3\)</span>: bin <span class="arithmatex">\(1\to 4\)</span></td>
        <td><span class="arithmatex">\((5,7,8,9)\)</span></td>
        <td><span class="arithmatex">\(2\cdot2\cdot(7-7+2)=8\)</span></td>
        <td></td>
        </tr>
        </table></div>

        The move marked is accepted.

        Iteration 2 (move): packing patterns $\{1,3\}, \{2,4\}, \{5,7\}, \{6\}$, loads $(4,10,8,7)$, $nb=4$, $SQ=229$.

        <div class="tabella" markdown="0"><table>
        <tr>
        <th>move</th>
        <th>loads</th>
        <th>gain</th>
        <th></th>
        </tr>
        <tr>
        <td>item <span class="arithmatex">\(1\)</span>: bin <span class="arithmatex">\(1\to 3\)</span></td>
        <td><span class="arithmatex">\((2,10,10,7)\)</span></td>
        <td><span class="arithmatex">\(2\cdot2\cdot(8-4+2)=24\)</span></td>
        <td><span class="arithmatex">\(\leftarrow\)</span></td>
        </tr>
        <tr>
        <td>item <span class="arithmatex">\(1\)</span>: bin <span class="arithmatex">\(1\to 4\)</span></td>
        <td><span class="arithmatex">\((2,10,8,9)\)</span></td>
        <td><span class="arithmatex">\(2\cdot2\cdot(7-4+2)=20\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>item <span class="arithmatex">\(2\)</span>: bin <span class="arithmatex">\(2\to 1\)</span></td>
        <td><span class="arithmatex">\((7,7,8,7)\)</span></td>
        <td><span class="arithmatex">\(2\cdot3\cdot(4-10+3)=-18\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>item <span class="arithmatex">\(2\)</span>: bin <span class="arithmatex">\(2\to 4\)</span></td>
        <td><span class="arithmatex">\((4,7,8,10)\)</span></td>
        <td><span class="arithmatex">\(2\cdot3\cdot(7-10+3)=0\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>item <span class="arithmatex">\(3\)</span>: bin <span class="arithmatex">\(1\to 3\)</span></td>
        <td><span class="arithmatex">\((2,10,10,7)\)</span></td>
        <td><span class="arithmatex">\(2\cdot2\cdot(8-4+2)=24\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>item <span class="arithmatex">\(3\)</span>: bin <span class="arithmatex">\(1\to 4\)</span></td>
        <td><span class="arithmatex">\((2,10,8,9)\)</span></td>
        <td><span class="arithmatex">\(2\cdot2\cdot(7-4+2)=20\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>item <span class="arithmatex">\(5\)</span>: bin <span class="arithmatex">\(3\to 1\)</span></td>
        <td><span class="arithmatex">\((8,10,4,7)\)</span></td>
        <td><span class="arithmatex">\(2\cdot4\cdot(4-8+4)=0\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>item <span class="arithmatex">\(7\)</span>: bin <span class="arithmatex">\(3\to 1\)</span></td>
        <td><span class="arithmatex">\((8,10,4,7)\)</span></td>
        <td><span class="arithmatex">\(2\cdot4\cdot(4-8+4)=0\)</span></td>
        <td></td>
        </tr>
        </table></div>

        The move marked is accepted.

        Iteration 3 (move): packing patterns $\{3\}, \{2,4\}, \{1,5,7\}, \{6\}$, loads $(2,10,10,7)$, $nb=4$, $SQ=253$.

        <div class="tabella" markdown="0"><table>
        <tr>
        <th>move</th>
        <th>loads</th>
        <th>gain</th>
        <th></th>
        </tr>
        <tr>
        <td>item <span class="arithmatex">\(1\)</span>: bin <span class="arithmatex">\(3\to 1\)</span></td>
        <td><span class="arithmatex">\((4,10,8,7)\)</span></td>
        <td><span class="arithmatex">\(2\cdot2\cdot(2-10+2)=-24\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>item <span class="arithmatex">\(1\)</span>: bin <span class="arithmatex">\(3\to 4\)</span></td>
        <td><span class="arithmatex">\((2,10,8,9)\)</span></td>
        <td><span class="arithmatex">\(2\cdot2\cdot(7-10+2)=-4\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>item <span class="arithmatex">\(2\)</span>: bin <span class="arithmatex">\(2\to 1\)</span></td>
        <td><span class="arithmatex">\((5,7,10,7)\)</span></td>
        <td><span class="arithmatex">\(2\cdot3\cdot(2-10+3)=-30\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>item <span class="arithmatex">\(2\)</span>: bin <span class="arithmatex">\(2\to 4\)</span></td>
        <td><span class="arithmatex">\((2,7,10,10)\)</span></td>
        <td><span class="arithmatex">\(2\cdot3\cdot(7-10+3)=0\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>item <span class="arithmatex">\(3\)</span>: bin <span class="arithmatex">\(1\to 4\)</span></td>
        <td><span class="arithmatex">\((10,10,9)\)</span></td>
        <td><span class="arithmatex">\(2\cdot2\cdot(7-2+2)=28\)</span></td>
        <td><span class="arithmatex">\(\leftarrow\)</span></td>
        </tr>
        <tr>
        <td>item <span class="arithmatex">\(4\)</span>: bin <span class="arithmatex">\(2\to 1\)</span></td>
        <td><span class="arithmatex">\((9,3,10,7)\)</span></td>
        <td><span class="arithmatex">\(2\cdot7\cdot(2-10+7)=-14\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>item <span class="arithmatex">\(5\)</span>: bin <span class="arithmatex">\(3\to 1\)</span></td>
        <td><span class="arithmatex">\((6,10,6,7)\)</span></td>
        <td><span class="arithmatex">\(2\cdot4\cdot(2-10+4)=-32\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>item <span class="arithmatex">\(6\)</span>: bin <span class="arithmatex">\(4\to 1\)</span></td>
        <td><span class="arithmatex">\((9,10,10)\)</span></td>
        <td><span class="arithmatex">\(2\cdot7\cdot(2-7+7)=28\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>item <span class="arithmatex">\(7\)</span>: bin <span class="arithmatex">\(3\to 1\)</span></td>
        <td><span class="arithmatex">\((6,10,6,7)\)</span></td>
        <td><span class="arithmatex">\(2\cdot4\cdot(2-10+4)=-32\)</span></td>
        <td></td>
        </tr>
        </table></div>

        The move marked is accepted.

        Iteration 4 (move): packing patterns $\{2,4\}, \{1,5,7\}, \{3,6\}$, loads $(10,10,9)$, $nb=3$, $SQ=281$. There is no feasible move.

        The search makes 3 moves, with $SQ$: $211\to229\to253\to281$, and stops with packing patterns $\{2,4\}, \{1,5,7\}, \{3,6\}$ and $nb=3$.

    4. The final solution uses $3=\lceil 29/10\rceil$ bins: it is <strong>optimal</strong>. With $nb$ the search sees no difference between the neighbours, since only a move that empties a bin changes $nb$; with $SQ$ the moves that make a heavy bin heavier and a light bin lighter are improving, and they prepare the move that empties a bin (which always increases $SQ$).

<a id="esercizio-20-5"></a>

!!! esercizio "Exercise 20.5: Local search BPP 2"

    Bins of capacity $c=10$ and a set $\mathscr{I}=\{1,2,3,4,5,6\}$ of $6$ items with weights

    $$
    \begin{array}{l|cccccc}
    \hline  & {i=1} & {i=2} & {i=3} & {i=4} & {i=5} & {i=6} \\[1ex]
    \hline {w_i} & {2} & {3} & {4} & {5} & {4} & {2} \\
    \hline
    \end{array}
    $$

    The bins are labelled $1,2,\dots$ in the order in which $FF$ opens them, and keep their label. A <em>move</em> puts one item into another non-empty bin where it fits (examined for $i=1,\dots,n$ and, for each $i$, for increasing bin label); a <em>swap</em> exchanges two items $i<k$ of different weight in different bins, if both bins stay feasible. The auxiliary objective $SQ=\sum_b L_b^2$ is maximized; the gain of a transfer of $\delta$ from bin $a$ to bin $b$ is $2\delta(L_b-L_a+\delta)$ (a move of item $i$ transfers $\delta=w_i$, a swap of item $i$ in bin $a$ and item $k$ in bin $b$ transfers $\delta=w_i-w_k$). Best improvement breaks ties in favour of the move examined first.

    **Questions**

    1. Compute the solution of First Fit ($FF$) and the lower bound $\lceil\sum_i w_i/c\rceil$.

    2. Apply the move local search with the auxiliary objective $SQ$ and the best-improvement rule, starting from the solution of $FF$.

    3. Apply the swap local search with the objective $SQ$ and the best-improvement rule, starting from the solution of $FF$.

    4. Apply the variable neighbourhood descent with $N_1=$ move and $N_2=$ swap (objective $SQ$, best improvement), starting from the solution of $FF$. Is the result optimal? What do the three local searches show?

??? soluzione "Solution"

    1. - item $1$ ($w_{1}=2$) goes into bin $1$, opened for it, load $2$;

        - item $2$ ($w_{2}=3$) goes into bin $1$, load $5$;

        - item $3$ ($w_{3}=4$) goes into bin $1$, load $9$;

        - item $4$ ($w_{4}=5$) fits in no open bin: bin $2$ is opened, load $5$;

        - item $5$ ($w_{5}=4$) goes into bin $2$, load $9$;

        - item $6$ ($w_{6}=2$) fits in no open bin: bin $3$ is opened, load $2$;

        $FF$ uses $nb=3$ bins, with packing patterns $\{1,2,3\}, \{4,5\}, \{6\}$ and loads $(9,9,2)$. The lower bound is $\lceil 20/10\rceil=2$.

    2. Iteration 1 (move): packing patterns $\{1,2,3\}, \{4,5\}, \{6\}$, loads $(9,9,2)$, $nb=3$, $SQ=166$.

        <div class="tabella" markdown="0"><table>
        <tr>
        <th>move</th>
        <th>loads</th>
        <th>gain</th>
        <th></th>
        </tr>
        <tr>
        <td>item <span class="arithmatex">\(1\)</span>: bin <span class="arithmatex">\(1\to 3\)</span></td>
        <td><span class="arithmatex">\((7,9,4)\)</span></td>
        <td><span class="arithmatex">\(2\cdot2\cdot(2-9+2)=-20\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>item <span class="arithmatex">\(2\)</span>: bin <span class="arithmatex">\(1\to 3\)</span></td>
        <td><span class="arithmatex">\((6,9,5)\)</span></td>
        <td><span class="arithmatex">\(2\cdot3\cdot(2-9+3)=-24\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>item <span class="arithmatex">\(3\)</span>: bin <span class="arithmatex">\(1\to 3\)</span></td>
        <td><span class="arithmatex">\((5,9,6)\)</span></td>
        <td><span class="arithmatex">\(2\cdot4\cdot(2-9+4)=-24\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>item <span class="arithmatex">\(4\)</span>: bin <span class="arithmatex">\(2\to 3\)</span></td>
        <td><span class="arithmatex">\((9,4,7)\)</span></td>
        <td><span class="arithmatex">\(2\cdot5\cdot(2-9+5)=-20\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>item <span class="arithmatex">\(5\)</span>: bin <span class="arithmatex">\(2\to 3\)</span></td>
        <td><span class="arithmatex">\((9,5,6)\)</span></td>
        <td><span class="arithmatex">\(2\cdot4\cdot(2-9+4)=-24\)</span></td>
        <td></td>
        </tr>
        </table></div>

        No move is improving.

        The solution of $FF$ is a local optimum for move, with $3$ bins.

    3. Iteration 1 (swap): packing patterns $\{1,2,3\}, \{4,5\}, \{6\}$, loads $(9,9,2)$, $nb=3$, $SQ=166$.

        <div class="tabella" markdown="0"><table>
        <tr>
        <th>swap</th>
        <th>loads</th>
        <th>gain</th>
        <th></th>
        </tr>
        <tr>
        <td>items <span class="arithmatex">\(2,5\)</span> (bins <span class="arithmatex">\(1,2\)</span>)</td>
        <td><span class="arithmatex">\((10,8,2)\)</span></td>
        <td><span class="arithmatex">\(2\cdot(-1)\cdot(9-9-1)=2\)</span></td>
        <td><span class="arithmatex">\(\leftarrow\)</span></td>
        </tr>
        <tr>
        <td>items <span class="arithmatex">\(2,6\)</span> (bins <span class="arithmatex">\(1,3\)</span>)</td>
        <td><span class="arithmatex">\((8,9,3)\)</span></td>
        <td><span class="arithmatex">\(2\cdot(1)\cdot(2-9+1)=-12\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>items <span class="arithmatex">\(3,4\)</span> (bins <span class="arithmatex">\(1,2\)</span>)</td>
        <td><span class="arithmatex">\((10,8,2)\)</span></td>
        <td><span class="arithmatex">\(2\cdot(-1)\cdot(9-9-1)=2\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>items <span class="arithmatex">\(3,6\)</span> (bins <span class="arithmatex">\(1,3\)</span>)</td>
        <td><span class="arithmatex">\((7,9,4)\)</span></td>
        <td><span class="arithmatex">\(2\cdot(2)\cdot(2-9+2)=-20\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>items <span class="arithmatex">\(4,6\)</span> (bins <span class="arithmatex">\(2,3\)</span>)</td>
        <td><span class="arithmatex">\((9,6,5)\)</span></td>
        <td><span class="arithmatex">\(2\cdot(3)\cdot(2-9+3)=-24\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>items <span class="arithmatex">\(5,6\)</span> (bins <span class="arithmatex">\(2,3\)</span>)</td>
        <td><span class="arithmatex">\((9,7,4)\)</span></td>
        <td><span class="arithmatex">\(2\cdot(2)\cdot(2-9+2)=-20\)</span></td>
        <td></td>
        </tr>
        </table></div>

        The swap marked is accepted.

        Iteration 2 (swap): packing patterns $\{1,3,5\}, \{2,4\}, \{6\}$, loads $(10,8,2)$, $nb=3$, $SQ=168$.

        <div class="tabella" markdown="0"><table>
        <tr>
        <th>swap</th>
        <th>loads</th>
        <th>gain</th>
        <th></th>
        </tr>
        <tr>
        <td>items <span class="arithmatex">\(2,3\)</span> (bins <span class="arithmatex">\(2,1\)</span>)</td>
        <td><span class="arithmatex">\((9,9,2)\)</span></td>
        <td><span class="arithmatex">\(2\cdot(-1)\cdot(10-8-1)=-2\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>items <span class="arithmatex">\(2,5\)</span> (bins <span class="arithmatex">\(2,1\)</span>)</td>
        <td><span class="arithmatex">\((9,9,2)\)</span></td>
        <td><span class="arithmatex">\(2\cdot(-1)\cdot(10-8-1)=-2\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>items <span class="arithmatex">\(2,6\)</span> (bins <span class="arithmatex">\(2,3\)</span>)</td>
        <td><span class="arithmatex">\((10,7,3)\)</span></td>
        <td><span class="arithmatex">\(2\cdot(1)\cdot(2-8+1)=-10\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>items <span class="arithmatex">\(3,6\)</span> (bins <span class="arithmatex">\(1,3\)</span>)</td>
        <td><span class="arithmatex">\((8,8,4)\)</span></td>
        <td><span class="arithmatex">\(2\cdot(2)\cdot(2-10+2)=-24\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>items <span class="arithmatex">\(4,6\)</span> (bins <span class="arithmatex">\(2,3\)</span>)</td>
        <td><span class="arithmatex">\((10,5,5)\)</span></td>
        <td><span class="arithmatex">\(2\cdot(3)\cdot(2-8+3)=-18\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>items <span class="arithmatex">\(5,6\)</span> (bins <span class="arithmatex">\(1,3\)</span>)</td>
        <td><span class="arithmatex">\((8,8,4)\)</span></td>
        <td><span class="arithmatex">\(2\cdot(2)\cdot(2-10+2)=-24\)</span></td>
        <td></td>
        </tr>
        </table></div>

        No swap is improving.

        The swap local search stops with packing patterns $\{1,3,5\}, \{2,4\}, \{6\}$, $SQ=168$, still $3$ bins (a swap never changes $nb$).

    4. Iteration 1 (move): packing patterns $\{1,2,3\}, \{4,5\}, \{6\}$, loads $(9,9,2)$, $nb=3$, $SQ=166$.

        <div class="tabella" markdown="0"><table>
        <tr>
        <th>move</th>
        <th>loads</th>
        <th>gain</th>
        <th></th>
        </tr>
        <tr>
        <td>item <span class="arithmatex">\(1\)</span>: bin <span class="arithmatex">\(1\to 3\)</span></td>
        <td><span class="arithmatex">\((7,9,4)\)</span></td>
        <td><span class="arithmatex">\(2\cdot2\cdot(2-9+2)=-20\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>item <span class="arithmatex">\(2\)</span>: bin <span class="arithmatex">\(1\to 3\)</span></td>
        <td><span class="arithmatex">\((6,9,5)\)</span></td>
        <td><span class="arithmatex">\(2\cdot3\cdot(2-9+3)=-24\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>item <span class="arithmatex">\(3\)</span>: bin <span class="arithmatex">\(1\to 3\)</span></td>
        <td><span class="arithmatex">\((5,9,6)\)</span></td>
        <td><span class="arithmatex">\(2\cdot4\cdot(2-9+4)=-24\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>item <span class="arithmatex">\(4\)</span>: bin <span class="arithmatex">\(2\to 3\)</span></td>
        <td><span class="arithmatex">\((9,4,7)\)</span></td>
        <td><span class="arithmatex">\(2\cdot5\cdot(2-9+5)=-20\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>item <span class="arithmatex">\(5\)</span>: bin <span class="arithmatex">\(2\to 3\)</span></td>
        <td><span class="arithmatex">\((9,5,6)\)</span></td>
        <td><span class="arithmatex">\(2\cdot4\cdot(2-9+4)=-24\)</span></td>
        <td></td>
        </tr>
        </table></div>

        No move is improving.

        Iteration 2 (swap): packing patterns $\{1,2,3\}, \{4,5\}, \{6\}$, loads $(9,9,2)$, $nb=3$, $SQ=166$.

        <div class="tabella" markdown="0"><table>
        <tr>
        <th>swap</th>
        <th>loads</th>
        <th>gain</th>
        <th></th>
        </tr>
        <tr>
        <td>items <span class="arithmatex">\(2,5\)</span> (bins <span class="arithmatex">\(1,2\)</span>)</td>
        <td><span class="arithmatex">\((10,8,2)\)</span></td>
        <td><span class="arithmatex">\(2\cdot(-1)\cdot(9-9-1)=2\)</span></td>
        <td><span class="arithmatex">\(\leftarrow\)</span></td>
        </tr>
        <tr>
        <td>items <span class="arithmatex">\(2,6\)</span> (bins <span class="arithmatex">\(1,3\)</span>)</td>
        <td><span class="arithmatex">\((8,9,3)\)</span></td>
        <td><span class="arithmatex">\(2\cdot(1)\cdot(2-9+1)=-12\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>items <span class="arithmatex">\(3,4\)</span> (bins <span class="arithmatex">\(1,2\)</span>)</td>
        <td><span class="arithmatex">\((10,8,2)\)</span></td>
        <td><span class="arithmatex">\(2\cdot(-1)\cdot(9-9-1)=2\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>items <span class="arithmatex">\(3,6\)</span> (bins <span class="arithmatex">\(1,3\)</span>)</td>
        <td><span class="arithmatex">\((7,9,4)\)</span></td>
        <td><span class="arithmatex">\(2\cdot(2)\cdot(2-9+2)=-20\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>items <span class="arithmatex">\(4,6\)</span> (bins <span class="arithmatex">\(2,3\)</span>)</td>
        <td><span class="arithmatex">\((9,6,5)\)</span></td>
        <td><span class="arithmatex">\(2\cdot(3)\cdot(2-9+3)=-24\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>items <span class="arithmatex">\(5,6\)</span> (bins <span class="arithmatex">\(2,3\)</span>)</td>
        <td><span class="arithmatex">\((9,7,4)\)</span></td>
        <td><span class="arithmatex">\(2\cdot(2)\cdot(2-9+2)=-20\)</span></td>
        <td></td>
        </tr>
        </table></div>

        The swap marked is accepted, and the search goes back to the move neighbourhood.

        Iteration 3 (move): packing patterns $\{1,3,5\}, \{2,4\}, \{6\}$, loads $(10,8,2)$, $nb=3$, $SQ=168$.

        <div class="tabella" markdown="0"><table>
        <tr>
        <th>move</th>
        <th>loads</th>
        <th>gain</th>
        <th></th>
        </tr>
        <tr>
        <td>item <span class="arithmatex">\(1\)</span>: bin <span class="arithmatex">\(1\to 2\)</span></td>
        <td><span class="arithmatex">\((8,10,2)\)</span></td>
        <td><span class="arithmatex">\(2\cdot2\cdot(8-10+2)=0\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>item <span class="arithmatex">\(1\)</span>: bin <span class="arithmatex">\(1\to 3\)</span></td>
        <td><span class="arithmatex">\((8,8,4)\)</span></td>
        <td><span class="arithmatex">\(2\cdot2\cdot(2-10+2)=-24\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>item <span class="arithmatex">\(2\)</span>: bin <span class="arithmatex">\(2\to 3\)</span></td>
        <td><span class="arithmatex">\((10,5,5)\)</span></td>
        <td><span class="arithmatex">\(2\cdot3\cdot(2-8+3)=-18\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>item <span class="arithmatex">\(3\)</span>: bin <span class="arithmatex">\(1\to 3\)</span></td>
        <td><span class="arithmatex">\((6,8,6)\)</span></td>
        <td><span class="arithmatex">\(2\cdot4\cdot(2-10+4)=-32\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>item <span class="arithmatex">\(4\)</span>: bin <span class="arithmatex">\(2\to 3\)</span></td>
        <td><span class="arithmatex">\((10,3,7)\)</span></td>
        <td><span class="arithmatex">\(2\cdot5\cdot(2-8+5)=-10\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>item <span class="arithmatex">\(5\)</span>: bin <span class="arithmatex">\(1\to 3\)</span></td>
        <td><span class="arithmatex">\((6,8,6)\)</span></td>
        <td><span class="arithmatex">\(2\cdot4\cdot(2-10+4)=-32\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>item <span class="arithmatex">\(6\)</span>: bin <span class="arithmatex">\(3\to 2\)</span></td>
        <td><span class="arithmatex">\((10,10)\)</span></td>
        <td><span class="arithmatex">\(2\cdot2\cdot(8-2+2)=32\)</span></td>
        <td><span class="arithmatex">\(\leftarrow\)</span></td>
        </tr>
        </table></div>

        The move marked is accepted.

        Iteration 4 (move): packing patterns $\{1,3,5\}, \{2,4,6\}$, loads $(10,10)$, $nb=2$, $SQ=200$. There is no feasible move.

        Iteration 5 (swap): packing patterns $\{1,3,5\}, \{2,4,6\}$, loads $(10,10)$, $nb=2$, $SQ=200$. There is no feasible swap.

        No swap is improving.

        $VND$ stops with packing patterns $\{1,3,5\}, \{2,4,6\}$: $2=\lceil 20/10\rceil$ bins, an <strong>optimal</strong> solution. The solution of $FF$ is a local optimum for move, the swap alone cannot change the number of bins, but the swap prepares a move that empties a bin: the local optimum <strong>depends on the neighbourhood</strong>, and combining the two neighbourhoods reaches the optimum.

<a id="esercizio-20-6"></a>

!!! esercizio "Exercise 20.6: Local search BPP 3"

    Bins of capacity $c=10$ and a set $\mathscr{I}=\{1,2,3,4,5,6,7\}$ of $7$ items with weights

    $$
    \begin{array}{l|ccccccc}
    \hline  & {i=1} & {i=2} & {i=3} & {i=4} & {i=5} & {i=6} & {i=7} \\[1ex]
    \hline {w_i} & {5} & {3} & {3} & {2} & {8} & {4} & {4} \\
    \hline
    \end{array}
    $$

    The bins are labelled $1,2,\dots$ in the order in which $FF$ opens them, and keep their label. A <em>move</em> puts one item into another non-empty bin where it fits (examined for $i=1,\dots,n$ and, for each $i$, for increasing bin label); a <em>swap</em> exchanges two items $i<k$ of different weight in different bins, if both bins stay feasible. The auxiliary objective $SQ=\sum_b L_b^2$ is maximized; the gain of a transfer of $\delta$ from bin $a$ to bin $b$ is $2\delta(L_b-L_a+\delta)$ (a move of item $i$ transfers $\delta=w_i$, a swap of item $i$ in bin $a$ and item $k$ in bin $b$ transfers $\delta=w_i-w_k$). Best improvement breaks ties in favour of the move examined first.

    **Questions**

    1. Compute the solution of First Fit ($FF$) and the lower bound $\lceil\sum_i w_i/c\rceil$.

    2. Apply the variable neighbourhood descent with $N_1=$ move and $N_2=$ swap (objective $SQ$, best improvement), starting from the solution of $FF$.

    3. Find a packing that uses $\lceil\sum_i w_i/c\rceil$ bins.

    4. Explain why the local search cannot reach that packing from its local optimum.

??? soluzione "Solution"

    1. - item $1$ ($w_{1}=5$) goes into bin $1$, opened for it, load $5$;

        - item $2$ ($w_{2}=3$) goes into bin $1$, load $8$;

        - item $3$ ($w_{3}=3$) fits in no open bin: bin $2$ is opened, load $3$;

        - item $4$ ($w_{4}=2$) goes into bin $1$, load $10$;

        - item $5$ ($w_{5}=8$) fits in no open bin: bin $3$ is opened, load $8$;

        - item $6$ ($w_{6}=4$) goes into bin $2$, load $7$;

        - item $7$ ($w_{7}=4$) fits in no open bin: bin $4$ is opened, load $4$;

        $FF$ uses $nb=4$ bins, with packing patterns $\{1,2,4\}, \{3,6\}, \{5\}, \{7\}$ and loads $(10,7,8,4)$. The lower bound is $\lceil 29/10\rceil=3$.

    2. Iteration 1 (move): packing patterns $\{1,2,4\}, \{3,6\}, \{5\}, \{7\}$, loads $(10,7,8,4)$, $nb=4$, $SQ=229$.

        <div class="tabella" markdown="0"><table>
        <tr>
        <th>move</th>
        <th>loads</th>
        <th>gain</th>
        <th></th>
        </tr>
        <tr>
        <td>item <span class="arithmatex">\(1\)</span>: bin <span class="arithmatex">\(1\to 4\)</span></td>
        <td><span class="arithmatex">\((5,7,8,9)\)</span></td>
        <td><span class="arithmatex">\(2\cdot5\cdot(4-10+5)=-10\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>item <span class="arithmatex">\(2\)</span>: bin <span class="arithmatex">\(1\to 2\)</span></td>
        <td><span class="arithmatex">\((7,10,8,4)\)</span></td>
        <td><span class="arithmatex">\(2\cdot3\cdot(7-10+3)=0\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>item <span class="arithmatex">\(2\)</span>: bin <span class="arithmatex">\(1\to 4\)</span></td>
        <td><span class="arithmatex">\((7,7,8,7)\)</span></td>
        <td><span class="arithmatex">\(2\cdot3\cdot(4-10+3)=-18\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>item <span class="arithmatex">\(3\)</span>: bin <span class="arithmatex">\(2\to 4\)</span></td>
        <td><span class="arithmatex">\((10,4,8,7)\)</span></td>
        <td><span class="arithmatex">\(2\cdot3\cdot(4-7+3)=0\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>item <span class="arithmatex">\(4\)</span>: bin <span class="arithmatex">\(1\to 2\)</span></td>
        <td><span class="arithmatex">\((8,9,8,4)\)</span></td>
        <td><span class="arithmatex">\(2\cdot2\cdot(7-10+2)=-4\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>item <span class="arithmatex">\(4\)</span>: bin <span class="arithmatex">\(1\to 3\)</span></td>
        <td><span class="arithmatex">\((8,7,10,4)\)</span></td>
        <td><span class="arithmatex">\(2\cdot2\cdot(8-10+2)=0\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>item <span class="arithmatex">\(4\)</span>: bin <span class="arithmatex">\(1\to 4\)</span></td>
        <td><span class="arithmatex">\((8,7,8,6)\)</span></td>
        <td><span class="arithmatex">\(2\cdot2\cdot(4-10+2)=-16\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>item <span class="arithmatex">\(6\)</span>: bin <span class="arithmatex">\(2\to 4\)</span></td>
        <td><span class="arithmatex">\((10,3,8,8)\)</span></td>
        <td><span class="arithmatex">\(2\cdot4\cdot(4-7+4)=8\)</span></td>
        <td><span class="arithmatex">\(\leftarrow\)</span></td>
        </tr>
        </table></div>

        The move marked is accepted.

        Iteration 2 (move): packing patterns $\{1,2,4\}, \{3\}, \{5\}, \{6,7\}$, loads $(10,3,8,8)$, $nb=4$, $SQ=237$.

        <div class="tabella" markdown="0"><table>
        <tr>
        <th>move</th>
        <th>loads</th>
        <th>gain</th>
        <th></th>
        </tr>
        <tr>
        <td>item <span class="arithmatex">\(1\)</span>: bin <span class="arithmatex">\(1\to 2\)</span></td>
        <td><span class="arithmatex">\((5,8,8,8)\)</span></td>
        <td><span class="arithmatex">\(2\cdot5\cdot(3-10+5)=-20\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>item <span class="arithmatex">\(2\)</span>: bin <span class="arithmatex">\(1\to 2\)</span></td>
        <td><span class="arithmatex">\((7,6,8,8)\)</span></td>
        <td><span class="arithmatex">\(2\cdot3\cdot(3-10+3)=-24\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>item <span class="arithmatex">\(4\)</span>: bin <span class="arithmatex">\(1\to 2\)</span></td>
        <td><span class="arithmatex">\((8,5,8,8)\)</span></td>
        <td><span class="arithmatex">\(2\cdot2\cdot(3-10+2)=-20\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>item <span class="arithmatex">\(4\)</span>: bin <span class="arithmatex">\(1\to 3\)</span></td>
        <td><span class="arithmatex">\((8,3,10,8)\)</span></td>
        <td><span class="arithmatex">\(2\cdot2\cdot(8-10+2)=0\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>item <span class="arithmatex">\(4\)</span>: bin <span class="arithmatex">\(1\to 4\)</span></td>
        <td><span class="arithmatex">\((8,3,8,10)\)</span></td>
        <td><span class="arithmatex">\(2\cdot2\cdot(8-10+2)=0\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>item <span class="arithmatex">\(6\)</span>: bin <span class="arithmatex">\(4\to 2\)</span></td>
        <td><span class="arithmatex">\((10,7,8,4)\)</span></td>
        <td><span class="arithmatex">\(2\cdot4\cdot(3-8+4)=-8\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>item <span class="arithmatex">\(7\)</span>: bin <span class="arithmatex">\(4\to 2\)</span></td>
        <td><span class="arithmatex">\((10,7,8,4)\)</span></td>
        <td><span class="arithmatex">\(2\cdot4\cdot(3-8+4)=-8\)</span></td>
        <td></td>
        </tr>
        </table></div>

        No move is improving.

        Iteration 3 (swap): packing patterns $\{1,2,4\}, \{3\}, \{5\}, \{6,7\}$, loads $(10,3,8,8)$, $nb=4$, $SQ=237$.

        <div class="tabella" markdown="0"><table>
        <tr>
        <th>swap</th>
        <th>loads</th>
        <th>gain</th>
        <th></th>
        </tr>
        <tr>
        <td>items <span class="arithmatex">\(1,3\)</span> (bins <span class="arithmatex">\(1,2\)</span>)</td>
        <td><span class="arithmatex">\((8,5,8,8)\)</span></td>
        <td><span class="arithmatex">\(2\cdot(2)\cdot(3-10+2)=-20\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>items <span class="arithmatex">\(1,6\)</span> (bins <span class="arithmatex">\(1,4\)</span>)</td>
        <td><span class="arithmatex">\((9,3,8,9)\)</span></td>
        <td><span class="arithmatex">\(2\cdot(1)\cdot(8-10+1)=-2\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>items <span class="arithmatex">\(1,7\)</span> (bins <span class="arithmatex">\(1,4\)</span>)</td>
        <td><span class="arithmatex">\((9,3,8,9)\)</span></td>
        <td><span class="arithmatex">\(2\cdot(1)\cdot(8-10+1)=-2\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>items <span class="arithmatex">\(3,5\)</span> (bins <span class="arithmatex">\(2,3\)</span>)</td>
        <td><span class="arithmatex">\((10,8,3,8)\)</span></td>
        <td><span class="arithmatex">\(2\cdot(-5)\cdot(8-3-5)=0\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>items <span class="arithmatex">\(3,6\)</span> (bins <span class="arithmatex">\(2,4\)</span>)</td>
        <td><span class="arithmatex">\((10,4,8,7)\)</span></td>
        <td><span class="arithmatex">\(2\cdot(-1)\cdot(8-3-1)=-8\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>items <span class="arithmatex">\(3,7\)</span> (bins <span class="arithmatex">\(2,4\)</span>)</td>
        <td><span class="arithmatex">\((10,4,8,7)\)</span></td>
        <td><span class="arithmatex">\(2\cdot(-1)\cdot(8-3-1)=-8\)</span></td>
        <td></td>
        </tr>
        </table></div>

        No swap is improving.

        $VND$ stops with packing patterns $\{1,2,4\}, \{3\}, \{5\}, \{6,7\}$, loads $(10,3,8,8)$, $SQ=237$ and $nb=4$ bins.

    3. The packing patterns $\{1,6\}, \{4,5\}, \{2,3,7\}$, of loads $(9,10,10)$, use $3$ bins: since $3=\lceil 29/10\rceil$, this packing is <strong>optimal</strong>, and the local optimum is not.

    4. In the optimal packing items $1$ and $2$ are in different bins, while in the local optimum they are together in the full bin $\{1,2,4\}$. To separate them, an item must leave a full bin (load $10$) for a lighter one: by the gain formula $2\delta(L_b-L_a+\delta)$ such a move is improving only if $L_b+\delta>10$, which is impossible. The auxiliary objective protects full bins, which is usually good, but here the full bin of $FF$ is the wrong one: the search is trapped in a local optimum.

## TSP: 2-opt

<a id="esercizio-20-7"></a>

!!! esercizio "Exercise 20.7: Local search TSP 1"

    $6$ cities with the symmetric distances

    $$
    \begin{array}{c|cccccc}
    \hline {d_{ij}} & {1} & {2} & {3} & {4} & {5} & {6} \\
    \hline {1} & --- & {7} & {6} & {3} & {4} & {6} \\
    {2} & {7} & --- & {6} & {5} & {7} & {4} \\
    {3} & {6} & {6} & --- & {5} & {5} & {2} \\
    {4} & {3} & {5} & {5} & --- & {5} & {3} \\
    {5} & {4} & {7} & {5} & {5} & --- & {4} \\
    {6} & {6} & {4} & {2} & {3} & {4} & --- \\
    \hline
    \end{array}
    $$

    A tour $\pi=(\pi_1,\dots,\pi_n)$ keeps city $1$ in the first position. The 2-opt move $(i,j)$, for $i=1,\dots,n-2$ and $j=i+2,\dots,n$ (except $(1,n)$), examined in this order, removes the edges $\{\pi_i,\pi_{i+1}\}$, $\{\pi_j,\pi_{j+1}\}$ (with $\pi_{n+1}=\pi_1$), reverses $\pi_{i+1},\dots,\pi_j$, and changes the length by $\Delta=d_{\pi_i\pi_j}+d_{\pi_{i+1}\pi_{j+1}}-d_{\pi_i\pi_{i+1}}-d_{\pi_j\pi_{j+1}}$. Best improvement breaks ties in favour of the move examined first. The nearest neighbour heuristic $NN$ breaks ties in favour of the city of smallest index.

    **Questions**

    1. Compute the tour of $NN$ from city $1$ and its length.

    2. Compute $\Delta$ for all the 2-opt moves of the tour of $NN$, and check one of them by computing the length of the new tour directly.

    3. Apply the 2-opt local search with the best-improvement rule, starting from the tour of $NN$.

    4. The optimal value is $z(I)=23$. Is the final tour optimal? How many moves were made, compared with the bound $L(\pi^0)-z(I)$ on the number of moves?

??? soluzione "Solution"

    1. - from city $1$ the nearest unvisited city is $4$ ($d_{1,4}=3$);

        - from city $4$ the nearest unvisited city is $6$ ($d_{4,6}=3$);

        - from city $6$ the nearest unvisited city is $3$ ($d_{6,3}=2$);

        - from city $3$ the nearest unvisited city is $5$ ($d_{3,5}=5$);

        - from city $5$ the nearest unvisited city is $2$ ($d_{5,2}=7$);

        - the tour goes back to city $1$ ($d_{2,1}=7$).

        The tour is $\pi=(1,4,6,3,5,2)$, of length $27$.

    2. The $9$ moves of the tour of $NN$ are

        <div class="tabella" markdown="0"><table>
        <tr>
        <th><span class="arithmatex">\((i,j)\)</span></th>
        <th>removed edges</th>
        <th><span class="arithmatex">\(\Delta\)</span></th>
        <th>new tour</th>
        <th>length</th>
        <th></th>
        </tr>
        <tr>
        <td><span class="arithmatex">\((1,3)\)</span></td>
        <td><span class="arithmatex">\(\{1,4\},\{6,3\}\)</span></td>
        <td><span class="arithmatex">\(6+5-3-2=+6\)</span></td>
        <td><span class="arithmatex">\((1,6,4,3,5,2)\)</span></td>
        <td><span class="arithmatex">\(33\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\((1,4)\)</span></td>
        <td><span class="arithmatex">\(\{1,4\},\{3,5\}\)</span></td>
        <td><span class="arithmatex">\(6+5-3-5=+3\)</span></td>
        <td><span class="arithmatex">\((1,3,6,4,5,2)\)</span></td>
        <td><span class="arithmatex">\(30\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\((1,5)\)</span></td>
        <td><span class="arithmatex">\(\{1,4\},\{5,2\}\)</span></td>
        <td><span class="arithmatex">\(4+5-3-7=-1\)</span></td>
        <td><span class="arithmatex">\((1,5,3,6,4,2)\)</span></td>
        <td><span class="arithmatex">\(26\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\((2,4)\)</span></td>
        <td><span class="arithmatex">\(\{4,6\},\{3,5\}\)</span></td>
        <td><span class="arithmatex">\(5+4-3-5=+1\)</span></td>
        <td><span class="arithmatex">\((1,4,3,6,5,2)\)</span></td>
        <td><span class="arithmatex">\(28\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\((2,5)\)</span></td>
        <td><span class="arithmatex">\(\{4,6\},\{5,2\}\)</span></td>
        <td><span class="arithmatex">\(5+4-3-7=-1\)</span></td>
        <td><span class="arithmatex">\((1,4,5,3,6,2)\)</span></td>
        <td><span class="arithmatex">\(26\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\((2,6)\)</span></td>
        <td><span class="arithmatex">\(\{4,6\},\{2,1\}\)</span></td>
        <td><span class="arithmatex">\(5+6-3-7=+1\)</span></td>
        <td><span class="arithmatex">\((1,4,2,5,3,6)\)</span></td>
        <td><span class="arithmatex">\(28\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\((3,5)\)</span></td>
        <td><span class="arithmatex">\(\{6,3\},\{5,2\}\)</span></td>
        <td><span class="arithmatex">\(4+6-2-7=+1\)</span></td>
        <td><span class="arithmatex">\((1,4,6,5,3,2)\)</span></td>
        <td><span class="arithmatex">\(28\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\((3,6)\)</span></td>
        <td><span class="arithmatex">\(\{6,3\},\{2,1\}\)</span></td>
        <td><span class="arithmatex">\(4+6-2-7=+1\)</span></td>
        <td><span class="arithmatex">\((1,4,6,2,5,3)\)</span></td>
        <td><span class="arithmatex">\(28\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\((4,6)\)</span></td>
        <td><span class="arithmatex">\(\{3,5\},\{2,1\}\)</span></td>
        <td><span class="arithmatex">\(6+4-5-7=-2\)</span></td>
        <td><span class="arithmatex">\((1,4,6,3,2,5)\)</span></td>
        <td><span class="arithmatex">\(25\)</span></td>
        <td></td>
        </tr>
        </table></div>

        For example, the move $(1,3)$ gives the tour $(1,6,4,3,5,2)$, of length $6+3+5+5+7+7=33=27+6$.

    3. Iteration 1: $\pi=(1,4,6,3,5,2)$, length $27$.

        <div class="tabella" markdown="0"><table>
        <tr>
        <th><span class="arithmatex">\((i,j)\)</span></th>
        <th>removed edges</th>
        <th><span class="arithmatex">\(\Delta\)</span></th>
        <th>new tour</th>
        <th>length</th>
        <th></th>
        </tr>
        <tr>
        <td><span class="arithmatex">\((1,3)\)</span></td>
        <td><span class="arithmatex">\(\{1,4\},\{6,3\}\)</span></td>
        <td><span class="arithmatex">\(6+5-3-2=+6\)</span></td>
        <td><span class="arithmatex">\((1,6,4,3,5,2)\)</span></td>
        <td><span class="arithmatex">\(33\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\((1,4)\)</span></td>
        <td><span class="arithmatex">\(\{1,4\},\{3,5\}\)</span></td>
        <td><span class="arithmatex">\(6+5-3-5=+3\)</span></td>
        <td><span class="arithmatex">\((1,3,6,4,5,2)\)</span></td>
        <td><span class="arithmatex">\(30\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\((1,5)\)</span></td>
        <td><span class="arithmatex">\(\{1,4\},\{5,2\}\)</span></td>
        <td><span class="arithmatex">\(4+5-3-7=-1\)</span></td>
        <td><span class="arithmatex">\((1,5,3,6,4,2)\)</span></td>
        <td><span class="arithmatex">\(26\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\((2,4)\)</span></td>
        <td><span class="arithmatex">\(\{4,6\},\{3,5\}\)</span></td>
        <td><span class="arithmatex">\(5+4-3-5=+1\)</span></td>
        <td><span class="arithmatex">\((1,4,3,6,5,2)\)</span></td>
        <td><span class="arithmatex">\(28\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\((2,5)\)</span></td>
        <td><span class="arithmatex">\(\{4,6\},\{5,2\}\)</span></td>
        <td><span class="arithmatex">\(5+4-3-7=-1\)</span></td>
        <td><span class="arithmatex">\((1,4,5,3,6,2)\)</span></td>
        <td><span class="arithmatex">\(26\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\((2,6)\)</span></td>
        <td><span class="arithmatex">\(\{4,6\},\{2,1\}\)</span></td>
        <td><span class="arithmatex">\(5+6-3-7=+1\)</span></td>
        <td><span class="arithmatex">\((1,4,2,5,3,6)\)</span></td>
        <td><span class="arithmatex">\(28\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\((3,5)\)</span></td>
        <td><span class="arithmatex">\(\{6,3\},\{5,2\}\)</span></td>
        <td><span class="arithmatex">\(4+6-2-7=+1\)</span></td>
        <td><span class="arithmatex">\((1,4,6,5,3,2)\)</span></td>
        <td><span class="arithmatex">\(28\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\((3,6)\)</span></td>
        <td><span class="arithmatex">\(\{6,3\},\{2,1\}\)</span></td>
        <td><span class="arithmatex">\(4+6-2-7=+1\)</span></td>
        <td><span class="arithmatex">\((1,4,6,2,5,3)\)</span></td>
        <td><span class="arithmatex">\(28\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\((4,6)\)</span></td>
        <td><span class="arithmatex">\(\{3,5\},\{2,1\}\)</span></td>
        <td><span class="arithmatex">\(6+4-5-7=-2\)</span></td>
        <td><span class="arithmatex">\((1,4,6,3,2,5)\)</span></td>
        <td><span class="arithmatex">\(25\)</span></td>
        <td><span class="arithmatex">\(\leftarrow\)</span></td>
        </tr>
        </table></div>

        The move $(4,6)$ is accepted after 9 evaluations.

        Iteration 2: $\pi=(1,4,6,3,2,5)$, length $25$.

        <div class="tabella" markdown="0"><table>
        <tr>
        <th><span class="arithmatex">\((i,j)\)</span></th>
        <th>removed edges</th>
        <th><span class="arithmatex">\(\Delta\)</span></th>
        <th>new tour</th>
        <th>length</th>
        <th></th>
        </tr>
        <tr>
        <td><span class="arithmatex">\((1,3)\)</span></td>
        <td><span class="arithmatex">\(\{1,4\},\{6,3\}\)</span></td>
        <td><span class="arithmatex">\(6+5-3-2=+6\)</span></td>
        <td><span class="arithmatex">\((1,6,4,3,2,5)\)</span></td>
        <td><span class="arithmatex">\(31\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\((1,4)\)</span></td>
        <td><span class="arithmatex">\(\{1,4\},\{3,2\}\)</span></td>
        <td><span class="arithmatex">\(6+5-3-6=+2\)</span></td>
        <td><span class="arithmatex">\((1,3,6,4,2,5)\)</span></td>
        <td><span class="arithmatex">\(27\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\((1,5)\)</span></td>
        <td><span class="arithmatex">\(\{1,4\},\{2,5\}\)</span></td>
        <td><span class="arithmatex">\(7+5-3-7=+2\)</span></td>
        <td><span class="arithmatex">\((1,2,3,6,4,5)\)</span></td>
        <td><span class="arithmatex">\(27\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\((2,4)\)</span></td>
        <td><span class="arithmatex">\(\{4,6\},\{3,2\}\)</span></td>
        <td><span class="arithmatex">\(5+4-3-6=0\)</span></td>
        <td><span class="arithmatex">\((1,4,3,6,2,5)\)</span></td>
        <td><span class="arithmatex">\(25\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\((2,5)\)</span></td>
        <td><span class="arithmatex">\(\{4,6\},\{2,5\}\)</span></td>
        <td><span class="arithmatex">\(5+4-3-7=-1\)</span></td>
        <td><span class="arithmatex">\((1,4,2,3,6,5)\)</span></td>
        <td><span class="arithmatex">\(24\)</span></td>
        <td><span class="arithmatex">\(\leftarrow\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\((2,6)\)</span></td>
        <td><span class="arithmatex">\(\{4,6\},\{5,1\}\)</span></td>
        <td><span class="arithmatex">\(5+6-3-4=+4\)</span></td>
        <td><span class="arithmatex">\((1,4,5,2,3,6)\)</span></td>
        <td><span class="arithmatex">\(29\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\((3,5)\)</span></td>
        <td><span class="arithmatex">\(\{6,3\},\{2,5\}\)</span></td>
        <td><span class="arithmatex">\(4+5-2-7=0\)</span></td>
        <td><span class="arithmatex">\((1,4,6,2,3,5)\)</span></td>
        <td><span class="arithmatex">\(25\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\((3,6)\)</span></td>
        <td><span class="arithmatex">\(\{6,3\},\{5,1\}\)</span></td>
        <td><span class="arithmatex">\(4+6-2-4=+4\)</span></td>
        <td><span class="arithmatex">\((1,4,6,5,2,3)\)</span></td>
        <td><span class="arithmatex">\(29\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\((4,6)\)</span></td>
        <td><span class="arithmatex">\(\{3,2\},\{5,1\}\)</span></td>
        <td><span class="arithmatex">\(5+7-6-4=+2\)</span></td>
        <td><span class="arithmatex">\((1,4,6,3,5,2)\)</span></td>
        <td><span class="arithmatex">\(27\)</span></td>
        <td></td>
        </tr>
        </table></div>

        The move $(2,5)$ is accepted after 9 evaluations.

        Iteration 3: $\pi=(1,4,2,3,6,5)$, length $24$.

        <div class="tabella" markdown="0"><table>
        <tr>
        <th><span class="arithmatex">\((i,j)\)</span></th>
        <th>removed edges</th>
        <th><span class="arithmatex">\(\Delta\)</span></th>
        <th>new tour</th>
        <th>length</th>
        <th></th>
        </tr>
        <tr>
        <td><span class="arithmatex">\((1,3)\)</span></td>
        <td><span class="arithmatex">\(\{1,4\},\{2,3\}\)</span></td>
        <td><span class="arithmatex">\(7+5-3-6=+3\)</span></td>
        <td><span class="arithmatex">\((1,2,4,3,6,5)\)</span></td>
        <td><span class="arithmatex">\(27\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\((1,4)\)</span></td>
        <td><span class="arithmatex">\(\{1,4\},\{3,6\}\)</span></td>
        <td><span class="arithmatex">\(6+3-3-2=+4\)</span></td>
        <td><span class="arithmatex">\((1,3,2,4,6,5)\)</span></td>
        <td><span class="arithmatex">\(28\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\((1,5)\)</span></td>
        <td><span class="arithmatex">\(\{1,4\},\{6,5\}\)</span></td>
        <td><span class="arithmatex">\(6+5-3-4=+4\)</span></td>
        <td><span class="arithmatex">\((1,6,3,2,4,5)\)</span></td>
        <td><span class="arithmatex">\(28\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\((2,4)\)</span></td>
        <td><span class="arithmatex">\(\{4,2\},\{3,6\}\)</span></td>
        <td><span class="arithmatex">\(5+4-5-2=+2\)</span></td>
        <td><span class="arithmatex">\((1,4,3,2,6,5)\)</span></td>
        <td><span class="arithmatex">\(26\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\((2,5)\)</span></td>
        <td><span class="arithmatex">\(\{4,2\},\{6,5\}\)</span></td>
        <td><span class="arithmatex">\(3+7-5-4=+1\)</span></td>
        <td><span class="arithmatex">\((1,4,6,3,2,5)\)</span></td>
        <td><span class="arithmatex">\(25\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\((2,6)\)</span></td>
        <td><span class="arithmatex">\(\{4,2\},\{5,1\}\)</span></td>
        <td><span class="arithmatex">\(5+7-5-4=+3\)</span></td>
        <td><span class="arithmatex">\((1,4,5,6,3,2)\)</span></td>
        <td><span class="arithmatex">\(27\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\((3,5)\)</span></td>
        <td><span class="arithmatex">\(\{2,3\},\{6,5\}\)</span></td>
        <td><span class="arithmatex">\(4+5-6-4=-1\)</span></td>
        <td><span class="arithmatex">\((1,4,2,6,3,5)\)</span></td>
        <td><span class="arithmatex">\(23\)</span></td>
        <td><span class="arithmatex">\(\leftarrow\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\((3,6)\)</span></td>
        <td><span class="arithmatex">\(\{2,3\},\{5,1\}\)</span></td>
        <td><span class="arithmatex">\(7+6-6-4=+3\)</span></td>
        <td><span class="arithmatex">\((1,4,2,5,6,3)\)</span></td>
        <td><span class="arithmatex">\(27\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\((4,6)\)</span></td>
        <td><span class="arithmatex">\(\{3,6\},\{5,1\}\)</span></td>
        <td><span class="arithmatex">\(5+6-2-4=+5\)</span></td>
        <td><span class="arithmatex">\((1,4,2,3,5,6)\)</span></td>
        <td><span class="arithmatex">\(29\)</span></td>
        <td></td>
        </tr>
        </table></div>

        The move $(3,5)$ is accepted after 9 evaluations.

        Iteration 4: $\pi=(1,4,2,6,3,5)$, length $23$.

        <div class="tabella" markdown="0"><table>
        <tr>
        <th><span class="arithmatex">\((i,j)\)</span></th>
        <th>removed edges</th>
        <th><span class="arithmatex">\(\Delta\)</span></th>
        <th>new tour</th>
        <th>length</th>
        <th></th>
        </tr>
        <tr>
        <td><span class="arithmatex">\((1,3)\)</span></td>
        <td><span class="arithmatex">\(\{1,4\},\{2,6\}\)</span></td>
        <td><span class="arithmatex">\(7+3-3-4=+3\)</span></td>
        <td><span class="arithmatex">\((1,2,4,6,3,5)\)</span></td>
        <td><span class="arithmatex">\(26\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\((1,4)\)</span></td>
        <td><span class="arithmatex">\(\{1,4\},\{6,3\}\)</span></td>
        <td><span class="arithmatex">\(6+5-3-2=+6\)</span></td>
        <td><span class="arithmatex">\((1,6,2,4,3,5)\)</span></td>
        <td><span class="arithmatex">\(29\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\((1,5)\)</span></td>
        <td><span class="arithmatex">\(\{1,4\},\{3,5\}\)</span></td>
        <td><span class="arithmatex">\(6+5-3-5=+3\)</span></td>
        <td><span class="arithmatex">\((1,3,6,2,4,5)\)</span></td>
        <td><span class="arithmatex">\(26\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\((2,4)\)</span></td>
        <td><span class="arithmatex">\(\{4,2\},\{6,3\}\)</span></td>
        <td><span class="arithmatex">\(3+6-5-2=+2\)</span></td>
        <td><span class="arithmatex">\((1,4,6,2,3,5)\)</span></td>
        <td><span class="arithmatex">\(25\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\((2,5)\)</span></td>
        <td><span class="arithmatex">\(\{4,2\},\{3,5\}\)</span></td>
        <td><span class="arithmatex">\(5+7-5-5=+2\)</span></td>
        <td><span class="arithmatex">\((1,4,3,6,2,5)\)</span></td>
        <td><span class="arithmatex">\(25\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\((2,6)\)</span></td>
        <td><span class="arithmatex">\(\{4,2\},\{5,1\}\)</span></td>
        <td><span class="arithmatex">\(5+7-5-4=+3\)</span></td>
        <td><span class="arithmatex">\((1,4,5,3,6,2)\)</span></td>
        <td><span class="arithmatex">\(26\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\((3,5)\)</span></td>
        <td><span class="arithmatex">\(\{2,6\},\{3,5\}\)</span></td>
        <td><span class="arithmatex">\(6+4-4-5=+1\)</span></td>
        <td><span class="arithmatex">\((1,4,2,3,6,5)\)</span></td>
        <td><span class="arithmatex">\(24\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\((3,6)\)</span></td>
        <td><span class="arithmatex">\(\{2,6\},\{5,1\}\)</span></td>
        <td><span class="arithmatex">\(7+6-4-4=+5\)</span></td>
        <td><span class="arithmatex">\((1,4,2,5,3,6)\)</span></td>
        <td><span class="arithmatex">\(28\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\((4,6)\)</span></td>
        <td><span class="arithmatex">\(\{6,3\},\{5,1\}\)</span></td>
        <td><span class="arithmatex">\(4+6-2-4=+4\)</span></td>
        <td><span class="arithmatex">\((1,4,2,6,5,3)\)</span></td>
        <td><span class="arithmatex">\(27\)</span></td>
        <td></td>
        </tr>
        </table></div>

        No move has $\Delta<0$: $\pi=(1,4,2,6,3,5)$ is a 2-opt <strong>local optimum</strong> (9 evaluations).

        The search makes 3 moves: $27\to25\to24\to23$.

    4. The final tour has length $23=z(I)$: it is <strong>optimal</strong>. The search made 3 moves, while the termination property of the notes allows at most $27-23=4$.

<a id="esercizio-20-8"></a>

!!! esercizio "Exercise 20.8: Local search TSP 2"

    $6$ cities with the symmetric distances

    $$
    \begin{array}{c|cccccc}
    \hline {d_{ij}} & {1} & {2} & {3} & {4} & {5} & {6} \\
    \hline {1} & --- & {8} & {5} & {6} & {5} & {6} \\
    {2} & {8} & --- & {6} & {7} & {7} & {6} \\
    {3} & {5} & {6} & --- & {4} & {8} & {2} \\
    {4} & {6} & {7} & {4} & --- & {6} & {5} \\
    {5} & {5} & {7} & {8} & {6} & --- & {7} \\
    {6} & {6} & {6} & {2} & {5} & {7} & --- \\
    \hline
    \end{array}
    $$

    A tour $\pi=(\pi_1,\dots,\pi_n)$ keeps city $1$ in the first position. The 2-opt move $(i,j)$, for $i=1,\dots,n-2$ and $j=i+2,\dots,n$ (except $(1,n)$), examined in this order, removes the edges $\{\pi_i,\pi_{i+1}\}$, $\{\pi_j,\pi_{j+1}\}$ (with $\pi_{n+1}=\pi_1$), reverses $\pi_{i+1},\dots,\pi_j$, and changes the length by $\Delta=d_{\pi_i\pi_j}+d_{\pi_{i+1}\pi_{j+1}}-d_{\pi_i\pi_{i+1}}-d_{\pi_j\pi_{j+1}}$. Best improvement breaks ties in favour of the move examined first. The nearest neighbour heuristic $NN$ breaks ties in favour of the city of smallest index.

    **Questions**

    1. Compute the tour of $NN$ from city $1$ and its length.

    2. Apply the 2-opt local search with the <strong>first-improvement</strong> rule, starting from the tour of $NN$.

    3. Apply the 2-opt local search with the <strong>best-improvement</strong> rule, starting from the tour of $NN$.

    4. The optimal value is $z(I)=30$. Compare the two local optima and the number of evaluations of the two rules.

??? soluzione "Solution"

    1. - from city $1$ the nearest unvisited city is $3$ ($d_{1,3}=5$);

        - from city $3$ the nearest unvisited city is $6$ ($d_{3,6}=2$);

        - from city $6$ the nearest unvisited city is $4$ ($d_{6,4}=5$);

        - from city $4$ the nearest unvisited city is $5$ ($d_{4,5}=6$);

        - from city $5$ the nearest unvisited city is $2$ ($d_{5,2}=7$);

        - the tour goes back to city $1$ ($d_{2,1}=8$).

        The tour is $\pi=(1,3,6,4,5,2)$, of length $33$.

    2. Iteration 1: $\pi=(1,3,6,4,5,2)$, length $33$.

        <div class="tabella" markdown="0"><table>
        <tr>
        <th><span class="arithmatex">\((i,j)\)</span></th>
        <th>removed edges</th>
        <th><span class="arithmatex">\(\Delta\)</span></th>
        <th>new tour</th>
        <th>length</th>
        <th></th>
        </tr>
        <tr>
        <td><span class="arithmatex">\((1,3)\)</span></td>
        <td><span class="arithmatex">\(\{1,3\},\{6,4\}\)</span></td>
        <td><span class="arithmatex">\(6+4-5-5=0\)</span></td>
        <td><span class="arithmatex">\((1,6,3,4,5,2)\)</span></td>
        <td><span class="arithmatex">\(33\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\((1,4)\)</span></td>
        <td><span class="arithmatex">\(\{1,3\},\{4,5\}\)</span></td>
        <td><span class="arithmatex">\(6+8-5-6=+3\)</span></td>
        <td><span class="arithmatex">\((1,4,6,3,5,2)\)</span></td>
        <td><span class="arithmatex">\(36\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\((1,5)\)</span></td>
        <td><span class="arithmatex">\(\{1,3\},\{5,2\}\)</span></td>
        <td><span class="arithmatex">\(5+6-5-7=-1\)</span></td>
        <td><span class="arithmatex">\((1,5,4,6,3,2)\)</span></td>
        <td><span class="arithmatex">\(32\)</span></td>
        <td><span class="arithmatex">\(\leftarrow\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\((2,4)\)</span></td>
        <td><span class="arithmatex">\(\{3,6\},\{4,5\}\)</span></td>
        <td><span class="arithmatex">\(4+7-2-6=+3\)</span></td>
        <td><span class="arithmatex">\((1,3,4,6,5,2)\)</span></td>
        <td><span class="arithmatex">\(36\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\((2,5)\)</span></td>
        <td><span class="arithmatex">\(\{3,6\},\{5,2\}\)</span></td>
        <td><span class="arithmatex">\(8+6-2-7=+5\)</span></td>
        <td><span class="arithmatex">\((1,3,5,4,6,2)\)</span></td>
        <td><span class="arithmatex">\(38\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\((2,6)\)</span></td>
        <td><span class="arithmatex">\(\{3,6\},\{2,1\}\)</span></td>
        <td><span class="arithmatex">\(6+6-2-8=+2\)</span></td>
        <td><span class="arithmatex">\((1,3,2,5,4,6)\)</span></td>
        <td><span class="arithmatex">\(35\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\((3,5)\)</span></td>
        <td><span class="arithmatex">\(\{6,4\},\{5,2\}\)</span></td>
        <td><span class="arithmatex">\(7+7-5-7=+2\)</span></td>
        <td><span class="arithmatex">\((1,3,6,5,4,2)\)</span></td>
        <td><span class="arithmatex">\(35\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\((3,6)\)</span></td>
        <td><span class="arithmatex">\(\{6,4\},\{2,1\}\)</span></td>
        <td><span class="arithmatex">\(6+6-5-8=-1\)</span></td>
        <td><span class="arithmatex">\((1,3,6,2,5,4)\)</span></td>
        <td><span class="arithmatex">\(32\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\((4,6)\)</span></td>
        <td><span class="arithmatex">\(\{4,5\},\{2,1\}\)</span></td>
        <td><span class="arithmatex">\(7+5-6-8=-2\)</span></td>
        <td><span class="arithmatex">\((1,3,6,4,2,5)\)</span></td>
        <td><span class="arithmatex">\(31\)</span></td>
        <td></td>
        </tr>
        </table></div>

        The move $(1,5)$ is accepted after 3 evaluations.

        Iteration 2: $\pi=(1,5,4,6,3,2)$, length $32$.

        <div class="tabella" markdown="0"><table>
        <tr>
        <th><span class="arithmatex">\((i,j)\)</span></th>
        <th>removed edges</th>
        <th><span class="arithmatex">\(\Delta\)</span></th>
        <th>new tour</th>
        <th>length</th>
        <th></th>
        </tr>
        <tr>
        <td><span class="arithmatex">\((1,3)\)</span></td>
        <td><span class="arithmatex">\(\{1,5\},\{4,6\}\)</span></td>
        <td><span class="arithmatex">\(6+7-5-5=+3\)</span></td>
        <td><span class="arithmatex">\((1,4,5,6,3,2)\)</span></td>
        <td><span class="arithmatex">\(35\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\((1,4)\)</span></td>
        <td><span class="arithmatex">\(\{1,5\},\{6,3\}\)</span></td>
        <td><span class="arithmatex">\(6+8-5-2=+7\)</span></td>
        <td><span class="arithmatex">\((1,6,4,5,3,2)\)</span></td>
        <td><span class="arithmatex">\(39\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\((1,5)\)</span></td>
        <td><span class="arithmatex">\(\{1,5\},\{3,2\}\)</span></td>
        <td><span class="arithmatex">\(5+7-5-6=+1\)</span></td>
        <td><span class="arithmatex">\((1,3,6,4,5,2)\)</span></td>
        <td><span class="arithmatex">\(33\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\((2,4)\)</span></td>
        <td><span class="arithmatex">\(\{5,4\},\{6,3\}\)</span></td>
        <td><span class="arithmatex">\(7+4-6-2=+3\)</span></td>
        <td><span class="arithmatex">\((1,5,6,4,3,2)\)</span></td>
        <td><span class="arithmatex">\(35\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\((2,5)\)</span></td>
        <td><span class="arithmatex">\(\{5,4\},\{3,2\}\)</span></td>
        <td><span class="arithmatex">\(8+7-6-6=+3\)</span></td>
        <td><span class="arithmatex">\((1,5,3,6,4,2)\)</span></td>
        <td><span class="arithmatex">\(35\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\((2,6)\)</span></td>
        <td><span class="arithmatex">\(\{5,4\},\{2,1\}\)</span></td>
        <td><span class="arithmatex">\(7+6-6-8=-1\)</span></td>
        <td><span class="arithmatex">\((1,5,2,3,6,4)\)</span></td>
        <td><span class="arithmatex">\(31\)</span></td>
        <td><span class="arithmatex">\(\leftarrow\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\((3,5)\)</span></td>
        <td><span class="arithmatex">\(\{4,6\},\{3,2\}\)</span></td>
        <td><span class="arithmatex">\(4+6-5-6=-1\)</span></td>
        <td><span class="arithmatex">\((1,5,4,3,6,2)\)</span></td>
        <td><span class="arithmatex">\(31\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\((3,6)\)</span></td>
        <td><span class="arithmatex">\(\{4,6\},\{2,1\}\)</span></td>
        <td><span class="arithmatex">\(7+6-5-8=0\)</span></td>
        <td><span class="arithmatex">\((1,5,4,2,3,6)\)</span></td>
        <td><span class="arithmatex">\(32\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\((4,6)\)</span></td>
        <td><span class="arithmatex">\(\{6,3\},\{2,1\}\)</span></td>
        <td><span class="arithmatex">\(6+5-2-8=+1\)</span></td>
        <td><span class="arithmatex">\((1,5,4,6,2,3)\)</span></td>
        <td><span class="arithmatex">\(33\)</span></td>
        <td></td>
        </tr>
        </table></div>

        The move $(2,6)$ is accepted after 6 evaluations.

        Iteration 3: $\pi=(1,5,2,3,6,4)$, length $31$.

        <div class="tabella" markdown="0"><table>
        <tr>
        <th><span class="arithmatex">\((i,j)\)</span></th>
        <th>removed edges</th>
        <th><span class="arithmatex">\(\Delta\)</span></th>
        <th>new tour</th>
        <th>length</th>
        <th></th>
        </tr>
        <tr>
        <td><span class="arithmatex">\((1,3)\)</span></td>
        <td><span class="arithmatex">\(\{1,5\},\{2,3\}\)</span></td>
        <td><span class="arithmatex">\(8+8-5-6=+5\)</span></td>
        <td><span class="arithmatex">\((1,2,5,3,6,4)\)</span></td>
        <td><span class="arithmatex">\(36\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\((1,4)\)</span></td>
        <td><span class="arithmatex">\(\{1,5\},\{3,6\}\)</span></td>
        <td><span class="arithmatex">\(5+7-5-2=+5\)</span></td>
        <td><span class="arithmatex">\((1,3,2,5,6,4)\)</span></td>
        <td><span class="arithmatex">\(36\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\((1,5)\)</span></td>
        <td><span class="arithmatex">\(\{1,5\},\{6,4\}\)</span></td>
        <td><span class="arithmatex">\(6+6-5-5=+2\)</span></td>
        <td><span class="arithmatex">\((1,6,3,2,5,4)\)</span></td>
        <td><span class="arithmatex">\(33\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\((2,4)\)</span></td>
        <td><span class="arithmatex">\(\{5,2\},\{3,6\}\)</span></td>
        <td><span class="arithmatex">\(8+6-7-2=+5\)</span></td>
        <td><span class="arithmatex">\((1,5,3,2,6,4)\)</span></td>
        <td><span class="arithmatex">\(36\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\((2,5)\)</span></td>
        <td><span class="arithmatex">\(\{5,2\},\{6,4\}\)</span></td>
        <td><span class="arithmatex">\(7+7-7-5=+2\)</span></td>
        <td><span class="arithmatex">\((1,5,6,3,2,4)\)</span></td>
        <td><span class="arithmatex">\(33\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\((2,6)\)</span></td>
        <td><span class="arithmatex">\(\{5,2\},\{4,1\}\)</span></td>
        <td><span class="arithmatex">\(6+8-7-6=+1\)</span></td>
        <td><span class="arithmatex">\((1,5,4,6,3,2)\)</span></td>
        <td><span class="arithmatex">\(32\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\((3,5)\)</span></td>
        <td><span class="arithmatex">\(\{2,3\},\{6,4\}\)</span></td>
        <td><span class="arithmatex">\(6+4-6-5=-1\)</span></td>
        <td><span class="arithmatex">\((1,5,2,6,3,4)\)</span></td>
        <td><span class="arithmatex">\(30\)</span></td>
        <td><span class="arithmatex">\(\leftarrow\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\((3,6)\)</span></td>
        <td><span class="arithmatex">\(\{2,3\},\{4,1\}\)</span></td>
        <td><span class="arithmatex">\(7+5-6-6=0\)</span></td>
        <td><span class="arithmatex">\((1,5,2,4,6,3)\)</span></td>
        <td><span class="arithmatex">\(31\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\((4,6)\)</span></td>
        <td><span class="arithmatex">\(\{3,6\},\{4,1\}\)</span></td>
        <td><span class="arithmatex">\(4+6-2-6=+2\)</span></td>
        <td><span class="arithmatex">\((1,5,2,3,4,6)\)</span></td>
        <td><span class="arithmatex">\(33\)</span></td>
        <td></td>
        </tr>
        </table></div>

        The move $(3,5)$ is accepted after 7 evaluations.

        Iteration 4: $\pi=(1,5,2,6,3,4)$, length $30$.

        <div class="tabella" markdown="0"><table>
        <tr>
        <th><span class="arithmatex">\((i,j)\)</span></th>
        <th>removed edges</th>
        <th><span class="arithmatex">\(\Delta\)</span></th>
        <th>new tour</th>
        <th>length</th>
        <th></th>
        </tr>
        <tr>
        <td><span class="arithmatex">\((1,3)\)</span></td>
        <td><span class="arithmatex">\(\{1,5\},\{2,6\}\)</span></td>
        <td><span class="arithmatex">\(8+7-5-6=+4\)</span></td>
        <td><span class="arithmatex">\((1,2,5,6,3,4)\)</span></td>
        <td><span class="arithmatex">\(34\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\((1,4)\)</span></td>
        <td><span class="arithmatex">\(\{1,5\},\{6,3\}\)</span></td>
        <td><span class="arithmatex">\(6+8-5-2=+7\)</span></td>
        <td><span class="arithmatex">\((1,6,2,5,3,4)\)</span></td>
        <td><span class="arithmatex">\(37\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\((1,5)\)</span></td>
        <td><span class="arithmatex">\(\{1,5\},\{3,4\}\)</span></td>
        <td><span class="arithmatex">\(5+6-5-4=+2\)</span></td>
        <td><span class="arithmatex">\((1,3,6,2,5,4)\)</span></td>
        <td><span class="arithmatex">\(32\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\((2,4)\)</span></td>
        <td><span class="arithmatex">\(\{5,2\},\{6,3\}\)</span></td>
        <td><span class="arithmatex">\(7+6-7-2=+4\)</span></td>
        <td><span class="arithmatex">\((1,5,6,2,3,4)\)</span></td>
        <td><span class="arithmatex">\(34\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\((2,5)\)</span></td>
        <td><span class="arithmatex">\(\{5,2\},\{3,4\}\)</span></td>
        <td><span class="arithmatex">\(8+7-7-4=+4\)</span></td>
        <td><span class="arithmatex">\((1,5,3,6,2,4)\)</span></td>
        <td><span class="arithmatex">\(34\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\((2,6)\)</span></td>
        <td><span class="arithmatex">\(\{5,2\},\{4,1\}\)</span></td>
        <td><span class="arithmatex">\(6+8-7-6=+1\)</span></td>
        <td><span class="arithmatex">\((1,5,4,3,6,2)\)</span></td>
        <td><span class="arithmatex">\(31\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\((3,5)\)</span></td>
        <td><span class="arithmatex">\(\{2,6\},\{3,4\}\)</span></td>
        <td><span class="arithmatex">\(6+5-6-4=+1\)</span></td>
        <td><span class="arithmatex">\((1,5,2,3,6,4)\)</span></td>
        <td><span class="arithmatex">\(31\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\((3,6)\)</span></td>
        <td><span class="arithmatex">\(\{2,6\},\{4,1\}\)</span></td>
        <td><span class="arithmatex">\(7+6-6-6=+1\)</span></td>
        <td><span class="arithmatex">\((1,5,2,4,3,6)\)</span></td>
        <td><span class="arithmatex">\(31\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\((4,6)\)</span></td>
        <td><span class="arithmatex">\(\{6,3\},\{4,1\}\)</span></td>
        <td><span class="arithmatex">\(5+5-2-6=+2\)</span></td>
        <td><span class="arithmatex">\((1,5,2,6,4,3)\)</span></td>
        <td><span class="arithmatex">\(32\)</span></td>
        <td></td>
        </tr>
        </table></div>

        No move has $\Delta<0$: $\pi=(1,5,2,6,3,4)$ is a 2-opt <strong>local optimum</strong> (9 evaluations).

        First improvement makes 3 moves, $33\to32\to31\to30$, with 25 evaluations in total.

    3. Iteration 1: $\pi=(1,3,6,4,5,2)$, length $33$.

        <div class="tabella" markdown="0"><table>
        <tr>
        <th><span class="arithmatex">\((i,j)\)</span></th>
        <th>removed edges</th>
        <th><span class="arithmatex">\(\Delta\)</span></th>
        <th>new tour</th>
        <th>length</th>
        <th></th>
        </tr>
        <tr>
        <td><span class="arithmatex">\((1,3)\)</span></td>
        <td><span class="arithmatex">\(\{1,3\},\{6,4\}\)</span></td>
        <td><span class="arithmatex">\(6+4-5-5=0\)</span></td>
        <td><span class="arithmatex">\((1,6,3,4,5,2)\)</span></td>
        <td><span class="arithmatex">\(33\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\((1,4)\)</span></td>
        <td><span class="arithmatex">\(\{1,3\},\{4,5\}\)</span></td>
        <td><span class="arithmatex">\(6+8-5-6=+3\)</span></td>
        <td><span class="arithmatex">\((1,4,6,3,5,2)\)</span></td>
        <td><span class="arithmatex">\(36\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\((1,5)\)</span></td>
        <td><span class="arithmatex">\(\{1,3\},\{5,2\}\)</span></td>
        <td><span class="arithmatex">\(5+6-5-7=-1\)</span></td>
        <td><span class="arithmatex">\((1,5,4,6,3,2)\)</span></td>
        <td><span class="arithmatex">\(32\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\((2,4)\)</span></td>
        <td><span class="arithmatex">\(\{3,6\},\{4,5\}\)</span></td>
        <td><span class="arithmatex">\(4+7-2-6=+3\)</span></td>
        <td><span class="arithmatex">\((1,3,4,6,5,2)\)</span></td>
        <td><span class="arithmatex">\(36\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\((2,5)\)</span></td>
        <td><span class="arithmatex">\(\{3,6\},\{5,2\}\)</span></td>
        <td><span class="arithmatex">\(8+6-2-7=+5\)</span></td>
        <td><span class="arithmatex">\((1,3,5,4,6,2)\)</span></td>
        <td><span class="arithmatex">\(38\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\((2,6)\)</span></td>
        <td><span class="arithmatex">\(\{3,6\},\{2,1\}\)</span></td>
        <td><span class="arithmatex">\(6+6-2-8=+2\)</span></td>
        <td><span class="arithmatex">\((1,3,2,5,4,6)\)</span></td>
        <td><span class="arithmatex">\(35\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\((3,5)\)</span></td>
        <td><span class="arithmatex">\(\{6,4\},\{5,2\}\)</span></td>
        <td><span class="arithmatex">\(7+7-5-7=+2\)</span></td>
        <td><span class="arithmatex">\((1,3,6,5,4,2)\)</span></td>
        <td><span class="arithmatex">\(35\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\((3,6)\)</span></td>
        <td><span class="arithmatex">\(\{6,4\},\{2,1\}\)</span></td>
        <td><span class="arithmatex">\(6+6-5-8=-1\)</span></td>
        <td><span class="arithmatex">\((1,3,6,2,5,4)\)</span></td>
        <td><span class="arithmatex">\(32\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\((4,6)\)</span></td>
        <td><span class="arithmatex">\(\{4,5\},\{2,1\}\)</span></td>
        <td><span class="arithmatex">\(7+5-6-8=-2\)</span></td>
        <td><span class="arithmatex">\((1,3,6,4,2,5)\)</span></td>
        <td><span class="arithmatex">\(31\)</span></td>
        <td><span class="arithmatex">\(\leftarrow\)</span></td>
        </tr>
        </table></div>

        The move $(4,6)$ is accepted after 9 evaluations.

        Iteration 2: $\pi=(1,3,6,4,2,5)$, length $31$.

        <div class="tabella" markdown="0"><table>
        <tr>
        <th><span class="arithmatex">\((i,j)\)</span></th>
        <th>removed edges</th>
        <th><span class="arithmatex">\(\Delta\)</span></th>
        <th>new tour</th>
        <th>length</th>
        <th></th>
        </tr>
        <tr>
        <td><span class="arithmatex">\((1,3)\)</span></td>
        <td><span class="arithmatex">\(\{1,3\},\{6,4\}\)</span></td>
        <td><span class="arithmatex">\(6+4-5-5=0\)</span></td>
        <td><span class="arithmatex">\((1,6,3,4,2,5)\)</span></td>
        <td><span class="arithmatex">\(31\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\((1,4)\)</span></td>
        <td><span class="arithmatex">\(\{1,3\},\{4,2\}\)</span></td>
        <td><span class="arithmatex">\(6+6-5-7=0\)</span></td>
        <td><span class="arithmatex">\((1,4,6,3,2,5)\)</span></td>
        <td><span class="arithmatex">\(31\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\((1,5)\)</span></td>
        <td><span class="arithmatex">\(\{1,3\},\{2,5\}\)</span></td>
        <td><span class="arithmatex">\(8+8-5-7=+4\)</span></td>
        <td><span class="arithmatex">\((1,2,4,6,3,5)\)</span></td>
        <td><span class="arithmatex">\(35\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\((2,4)\)</span></td>
        <td><span class="arithmatex">\(\{3,6\},\{4,2\}\)</span></td>
        <td><span class="arithmatex">\(4+6-2-7=+1\)</span></td>
        <td><span class="arithmatex">\((1,3,4,6,2,5)\)</span></td>
        <td><span class="arithmatex">\(32\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\((2,5)\)</span></td>
        <td><span class="arithmatex">\(\{3,6\},\{2,5\}\)</span></td>
        <td><span class="arithmatex">\(6+7-2-7=+4\)</span></td>
        <td><span class="arithmatex">\((1,3,2,4,6,5)\)</span></td>
        <td><span class="arithmatex">\(35\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\((2,6)\)</span></td>
        <td><span class="arithmatex">\(\{3,6\},\{5,1\}\)</span></td>
        <td><span class="arithmatex">\(8+6-2-5=+7\)</span></td>
        <td><span class="arithmatex">\((1,3,5,2,4,6)\)</span></td>
        <td><span class="arithmatex">\(38\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\((3,5)\)</span></td>
        <td><span class="arithmatex">\(\{6,4\},\{2,5\}\)</span></td>
        <td><span class="arithmatex">\(6+6-5-7=0\)</span></td>
        <td><span class="arithmatex">\((1,3,6,2,4,5)\)</span></td>
        <td><span class="arithmatex">\(31\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\((3,6)\)</span></td>
        <td><span class="arithmatex">\(\{6,4\},\{5,1\}\)</span></td>
        <td><span class="arithmatex">\(7+6-5-5=+3\)</span></td>
        <td><span class="arithmatex">\((1,3,6,5,2,4)\)</span></td>
        <td><span class="arithmatex">\(34\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\((4,6)\)</span></td>
        <td><span class="arithmatex">\(\{4,2\},\{5,1\}\)</span></td>
        <td><span class="arithmatex">\(6+8-7-5=+2\)</span></td>
        <td><span class="arithmatex">\((1,3,6,4,5,2)\)</span></td>
        <td><span class="arithmatex">\(33\)</span></td>
        <td></td>
        </tr>
        </table></div>

        No move has $\Delta<0$: $\pi=(1,3,6,4,2,5)$ is a 2-opt <strong>local optimum</strong> (9 evaluations).

        Best improvement makes 1 move, $33\to31$, with 18 evaluations in total.

    4. First improvement reaches a tour of length $30=z(I)$, an <strong>optimal</strong> tour, while best improvement stops in a local optimum of length $31$, $3.3\%$ above the optimum. The steepest first move ($\Delta=-2$) leads into a worse valley: best improvement is not always better than first improvement. First improvement examines 25 moves in total, best improvement 18: the better local optimum costs more evaluations here, because first improvement makes more moves.

<a id="esercizio-20-9"></a>

!!! esercizio "Exercise 20.9: Local search TSP 3"

    $6$ cities with the symmetric distances

    $$
    \begin{array}{c|cccccc}
    \hline {d_{ij}} & {1} & {2} & {3} & {4} & {5} & {6} \\
    \hline {1} & --- & {7} & {8} & {8} & {9} & {9} \\
    {2} & {7} & --- & {7} & {4} & {9} & {8} \\
    {3} & {8} & {7} & --- & {7} & {3} & {9} \\
    {4} & {8} & {4} & {7} & --- & {5} & {6} \\
    {5} & {9} & {9} & {3} & {5} & --- & {7} \\
    {6} & {9} & {8} & {9} & {6} & {7} & --- \\
    \hline
    \end{array}
    $$

    A tour $\pi=(\pi_1,\dots,\pi_n)$ keeps city $1$ in the first position. The 2-opt move $(i,j)$, for $i=1,\dots,n-2$ and $j=i+2,\dots,n$ (except $(1,n)$), examined in this order, removes the edges $\{\pi_i,\pi_{i+1}\}$, $\{\pi_j,\pi_{j+1}\}$ (with $\pi_{n+1}=\pi_1$), reverses $\pi_{i+1},\dots,\pi_j$, and changes the length by $\Delta=d_{\pi_i\pi_j}+d_{\pi_{i+1}\pi_{j+1}}-d_{\pi_i\pi_{i+1}}-d_{\pi_j\pi_{j+1}}$. Best improvement breaks ties in favour of the move examined first. The nearest neighbour heuristic $NN$ breaks ties in favour of the city of smallest index. An Or-opt move with $\ell=1$ takes one city $\pi_i$ ($i\ge 2$) and inserts it between two consecutive cities $\pi_k,\pi_{k+1}$ not adjacent to it ($k\ne i-1,i$); with $p=\pi_{i-1}$, $q=\pi_{i+1}$, $s=\pi_i$, $a=\pi_k$, $b=\pi_{k+1}$ it changes the length by $\Delta=d_{pq}+d_{as}+d_{sb}-d_{ps}-d_{sq}-d_{ab}$. The moves are examined for $i=2,\dots,n$ and $k=1,\dots,n$.

    **Questions**

    1. Compute the tour of $NN$ from city $1$ and its length.

    2. Show that the tour of $NN$ is a 2-opt local optimum.

    3. Apply one iteration of best improvement with the Or-opt moves with $\ell=1$ to the tour of $NN$.

    4. The optimal value is $z(I)=35$. Is the new tour optimal? Is it a 2-opt local optimum? What does this show about combining the two neighbourhoods?

??? soluzione "Solution"

    1. - from city $1$ the nearest unvisited city is $2$ ($d_{1,2}=7$);

        - from city $2$ the nearest unvisited city is $4$ ($d_{2,4}=4$);

        - from city $4$ the nearest unvisited city is $5$ ($d_{4,5}=5$);

        - from city $5$ the nearest unvisited city is $3$ ($d_{5,3}=3$);

        - from city $3$ the nearest unvisited city is $6$ ($d_{3,6}=9$);

        - the tour goes back to city $1$ ($d_{6,1}=9$).

        The tour is $\pi=(1,2,4,5,3,6)$, of length $37$.

    2. The 2-opt moves of the tour of $NN$ are

        <div class="tabella" markdown="0"><table>
        <tr>
        <th><span class="arithmatex">\((i,j)\)</span></th>
        <th>removed edges</th>
        <th><span class="arithmatex">\(\Delta\)</span></th>
        <th>new tour</th>
        <th>length</th>
        <th></th>
        </tr>
        <tr>
        <td><span class="arithmatex">\((1,3)\)</span></td>
        <td><span class="arithmatex">\(\{1,2\},\{4,5\}\)</span></td>
        <td><span class="arithmatex">\(8+9-7-5=+5\)</span></td>
        <td><span class="arithmatex">\((1,4,2,5,3,6)\)</span></td>
        <td><span class="arithmatex">\(42\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\((1,4)\)</span></td>
        <td><span class="arithmatex">\(\{1,2\},\{5,3\}\)</span></td>
        <td><span class="arithmatex">\(9+7-7-3=+6\)</span></td>
        <td><span class="arithmatex">\((1,5,4,2,3,6)\)</span></td>
        <td><span class="arithmatex">\(43\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\((1,5)\)</span></td>
        <td><span class="arithmatex">\(\{1,2\},\{3,6\}\)</span></td>
        <td><span class="arithmatex">\(8+8-7-9=0\)</span></td>
        <td><span class="arithmatex">\((1,3,5,4,2,6)\)</span></td>
        <td><span class="arithmatex">\(37\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\((2,4)\)</span></td>
        <td><span class="arithmatex">\(\{2,4\},\{5,3\}\)</span></td>
        <td><span class="arithmatex">\(9+7-4-3=+9\)</span></td>
        <td><span class="arithmatex">\((1,2,5,4,3,6)\)</span></td>
        <td><span class="arithmatex">\(46\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\((2,5)\)</span></td>
        <td><span class="arithmatex">\(\{2,4\},\{3,6\}\)</span></td>
        <td><span class="arithmatex">\(7+6-4-9=0\)</span></td>
        <td><span class="arithmatex">\((1,2,3,5,4,6)\)</span></td>
        <td><span class="arithmatex">\(37\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\((2,6)\)</span></td>
        <td><span class="arithmatex">\(\{2,4\},\{6,1\}\)</span></td>
        <td><span class="arithmatex">\(8+8-4-9=+3\)</span></td>
        <td><span class="arithmatex">\((1,2,6,3,5,4)\)</span></td>
        <td><span class="arithmatex">\(40\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\((3,5)\)</span></td>
        <td><span class="arithmatex">\(\{4,5\},\{3,6\}\)</span></td>
        <td><span class="arithmatex">\(7+7-5-9=0\)</span></td>
        <td><span class="arithmatex">\((1,2,4,3,5,6)\)</span></td>
        <td><span class="arithmatex">\(37\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\((3,6)\)</span></td>
        <td><span class="arithmatex">\(\{4,5\},\{6,1\}\)</span></td>
        <td><span class="arithmatex">\(6+9-5-9=+1\)</span></td>
        <td><span class="arithmatex">\((1,2,4,6,3,5)\)</span></td>
        <td><span class="arithmatex">\(38\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\((4,6)\)</span></td>
        <td><span class="arithmatex">\(\{5,3\},\{6,1\}\)</span></td>
        <td><span class="arithmatex">\(7+8-3-9=+3\)</span></td>
        <td><span class="arithmatex">\((1,2,4,5,6,3)\)</span></td>
        <td><span class="arithmatex">\(40\)</span></td>
        <td></td>
        </tr>
        </table></div>

        All the moves have $\Delta\ge 0$: the tour of $NN$ is a 2-opt <strong>local optimum</strong>.

    3. The Or-opt moves with $\ell=1$ of the tour of $NN$ are

        <div class="tabella" markdown="0"><table>
        <tr>
        <th>city <span class="arithmatex">\(s\)</span></th>
        <th>between</th>
        <th><span class="arithmatex">\(\Delta\)</span></th>
        <th>length</th>
        <th></th>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(4,5\)</span></td>
        <td><span class="arithmatex">\(8+4+9-7-4-5=+5\)</span></td>
        <td><span class="arithmatex">\(42\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(5,3\)</span></td>
        <td><span class="arithmatex">\(8+9+7-7-4-3=+10\)</span></td>
        <td><span class="arithmatex">\(47\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(3,6\)</span></td>
        <td><span class="arithmatex">\(8+7+8-7-4-9=+3\)</span></td>
        <td><span class="arithmatex">\(40\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(6,1\)</span></td>
        <td><span class="arithmatex">\(8+8+7-7-4-9=+3\)</span></td>
        <td><span class="arithmatex">\(40\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(1,2\)</span></td>
        <td><span class="arithmatex">\(9+8+4-4-5-7=+5\)</span></td>
        <td><span class="arithmatex">\(42\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(5,3\)</span></td>
        <td><span class="arithmatex">\(9+5+7-4-5-3=+9\)</span></td>
        <td><span class="arithmatex">\(46\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(3,6\)</span></td>
        <td><span class="arithmatex">\(9+7+6-4-5-9=+4\)</span></td>
        <td><span class="arithmatex">\(41\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(6,1\)</span></td>
        <td><span class="arithmatex">\(9+6+8-4-5-9=+5\)</span></td>
        <td><span class="arithmatex">\(42\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(1,2\)</span></td>
        <td><span class="arithmatex">\(7+9+9-5-3-7=+10\)</span></td>
        <td><span class="arithmatex">\(47\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(2,4\)</span></td>
        <td><span class="arithmatex">\(7+9+5-5-3-4=+9\)</span></td>
        <td><span class="arithmatex">\(46\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(3,6\)</span></td>
        <td><span class="arithmatex">\(7+3+7-5-3-9=0\)</span></td>
        <td><span class="arithmatex">\(37\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(6,1\)</span></td>
        <td><span class="arithmatex">\(7+7+9-5-3-9=+6\)</span></td>
        <td><span class="arithmatex">\(43\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(1,2\)</span></td>
        <td><span class="arithmatex">\(7+8+7-3-9-7=+3\)</span></td>
        <td><span class="arithmatex">\(40\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(2,4\)</span></td>
        <td><span class="arithmatex">\(7+7+7-3-9-4=+5\)</span></td>
        <td><span class="arithmatex">\(42\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(4,5\)</span></td>
        <td><span class="arithmatex">\(7+7+3-3-9-5=0\)</span></td>
        <td><span class="arithmatex">\(37\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(6,1\)</span></td>
        <td><span class="arithmatex">\(7+9+8-3-9-9=+3\)</span></td>
        <td><span class="arithmatex">\(40\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(1,2\)</span></td>
        <td><span class="arithmatex">\(8+9+8-9-9-7=0\)</span></td>
        <td><span class="arithmatex">\(37\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(2,4\)</span></td>
        <td><span class="arithmatex">\(8+8+6-9-9-4=0\)</span></td>
        <td><span class="arithmatex">\(37\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(4,5\)</span></td>
        <td><span class="arithmatex">\(8+6+7-9-9-5=-2\)</span></td>
        <td><span class="arithmatex">\(35\)</span></td>
        <td><span class="arithmatex">\(\leftarrow\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(5,3\)</span></td>
        <td><span class="arithmatex">\(8+7+9-9-9-3=+3\)</span></td>
        <td><span class="arithmatex">\(40\)</span></td>
        <td></td>
        </tr>
        </table></div>

        The best move inserts city $6$ between cities $4$ and $5$, with $\Delta=-2$: the new tour is $(1,2,4,6,5,3)$, of length $35$.

    4. The new tour has length $35=z(I)$: it is <strong>optimal</strong>, hence also a 2-opt local optimum. The tour of $NN$ is a local optimum for 2-opt but not for Or-opt: a variable neighbourhood descent with $N_1=$ 2-opt and $N_2=$ Or-opt would stop only in a tour that is a local optimum for both, and here it finds the optimum.

## $P\|C_{\max}$

<a id="esercizio-20-10"></a>

!!! esercizio "Exercise 20.10: Local search $P\,||\,C_{\max}$ 1"

    $m=3$ identical machines and $6$ jobs with processing times

    $$
    \begin{array}{l|cccccc}
    \hline  & {j=1} & {j=2} & {j=3} & {j=4} & {j=5} & {j=6} \\[1ex]
    \hline {t_j} & {5} & {7} & {3} & {4} & {4} & {9} \\
    \hline
    \end{array}
    $$

    A <em>move</em> reassigns one job $j$ to another machine $h$ (examined for $j=1,\dots,n$ and $h=1,\dots,m$); a <em>swap</em> exchanges the machines of two jobs $j<k$ on different machines with $t_j\ne t_k$. The local searches use the best-improvement rule, with ties broken in favour of the move examined first.

    **Questions**

    1. Compute the schedule of list scheduling ($LIST$) with the jobs in the order $1,2,\dots,n$, and its makespan.

    2. Apply the move local search with the makespan as objective, starting from the schedule of $LIST$.

    3. Compute the lower bound $\max\{\max_j t_j,\lceil\sum_j t_j/m\rceil\}$.

    4. Prove that the final schedule is optimal.

??? soluzione "Solution"

    1. - job $1$ ($t_{1}=5$) goes to machine $1$, the least loaded (load $0$), which reaches $5$;

        - job $2$ ($t_{2}=7$) goes to machine $2$, the least loaded (load $0$), which reaches $7$;

        - job $3$ ($t_{3}=3$) goes to machine $3$, the least loaded (load $0$), which reaches $3$;

        - job $4$ ($t_{4}=4$) goes to machine $3$, the least loaded (load $3$), which reaches $7$;

        - job $5$ ($t_{5}=4$) goes to machine $1$, the least loaded (load $5$), which reaches $9$;

        - job $6$ ($t_{6}=9$) goes to machine $2$, the least loaded (load $7$), which reaches $16$;

        The schedule is $J_{1}=\{1,5\}, J_{2}=\{2,6\}, J_{3}=\{3,4\}$, with loads $(9,16,7)$ and $C_{\max}=16$.

    2. Iteration 1: $J_{1}=\{1,5\}, J_{2}=\{2,6\}, J_{3}=\{3,4\}$, loads $(9,16,7)$, $C_{\max}=16$.

        <div class="tabella" markdown="0"><table>
        <tr>
        <th>move</th>
        <th>loads</th>
        <th><span class="arithmatex">\(C_{\max}\)</span></th>
        <th></th>
        </tr>
        <tr>
        <td>job <span class="arithmatex">\(1\)</span>: <span class="arithmatex">\(M_1\to M_2\)</span></td>
        <td><span class="arithmatex">\((4,21,7)\)</span></td>
        <td><span class="arithmatex">\(21\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>job <span class="arithmatex">\(1\)</span>: <span class="arithmatex">\(M_1\to M_3\)</span></td>
        <td><span class="arithmatex">\((4,16,12)\)</span></td>
        <td><span class="arithmatex">\(16\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>job <span class="arithmatex">\(2\)</span>: <span class="arithmatex">\(M_2\to M_1\)</span></td>
        <td><span class="arithmatex">\((16,9,7)\)</span></td>
        <td><span class="arithmatex">\(16\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>job <span class="arithmatex">\(2\)</span>: <span class="arithmatex">\(M_2\to M_3\)</span></td>
        <td><span class="arithmatex">\((9,9,14)\)</span></td>
        <td><span class="arithmatex">\(14\)</span></td>
        <td><span class="arithmatex">\(\leftarrow\)</span></td>
        </tr>
        <tr>
        <td>job <span class="arithmatex">\(3\)</span>: <span class="arithmatex">\(M_3\to M_1\)</span></td>
        <td><span class="arithmatex">\((12,16,4)\)</span></td>
        <td><span class="arithmatex">\(16\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>job <span class="arithmatex">\(3\)</span>: <span class="arithmatex">\(M_3\to M_2\)</span></td>
        <td><span class="arithmatex">\((9,19,4)\)</span></td>
        <td><span class="arithmatex">\(19\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>job <span class="arithmatex">\(4\)</span>: <span class="arithmatex">\(M_3\to M_1\)</span></td>
        <td><span class="arithmatex">\((13,16,3)\)</span></td>
        <td><span class="arithmatex">\(16\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>job <span class="arithmatex">\(4\)</span>: <span class="arithmatex">\(M_3\to M_2\)</span></td>
        <td><span class="arithmatex">\((9,20,3)\)</span></td>
        <td><span class="arithmatex">\(20\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>job <span class="arithmatex">\(5\)</span>: <span class="arithmatex">\(M_1\to M_2\)</span></td>
        <td><span class="arithmatex">\((5,20,7)\)</span></td>
        <td><span class="arithmatex">\(20\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>job <span class="arithmatex">\(5\)</span>: <span class="arithmatex">\(M_1\to M_3\)</span></td>
        <td><span class="arithmatex">\((5,16,11)\)</span></td>
        <td><span class="arithmatex">\(16\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>job <span class="arithmatex">\(6\)</span>: <span class="arithmatex">\(M_2\to M_1\)</span></td>
        <td><span class="arithmatex">\((18,7,7)\)</span></td>
        <td><span class="arithmatex">\(18\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>job <span class="arithmatex">\(6\)</span>: <span class="arithmatex">\(M_2\to M_3\)</span></td>
        <td><span class="arithmatex">\((9,7,16)\)</span></td>
        <td><span class="arithmatex">\(16\)</span></td>
        <td></td>
        </tr>
        </table></div>

        The move marked is accepted.

        Iteration 2: $J_{1}=\{1,5\}, J_{2}=\{6\}, J_{3}=\{2,3,4\}$, loads $(9,9,14)$, $C_{\max}=14$.

        <div class="tabella" markdown="0"><table>
        <tr>
        <th>move</th>
        <th>loads</th>
        <th><span class="arithmatex">\(C_{\max}\)</span></th>
        <th></th>
        </tr>
        <tr>
        <td>job <span class="arithmatex">\(1\)</span>: <span class="arithmatex">\(M_1\to M_2\)</span></td>
        <td><span class="arithmatex">\((4,14,14)\)</span></td>
        <td><span class="arithmatex">\(14\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>job <span class="arithmatex">\(1\)</span>: <span class="arithmatex">\(M_1\to M_3\)</span></td>
        <td><span class="arithmatex">\((4,9,19)\)</span></td>
        <td><span class="arithmatex">\(19\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>job <span class="arithmatex">\(2\)</span>: <span class="arithmatex">\(M_3\to M_1\)</span></td>
        <td><span class="arithmatex">\((16,9,7)\)</span></td>
        <td><span class="arithmatex">\(16\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>job <span class="arithmatex">\(2\)</span>: <span class="arithmatex">\(M_3\to M_2\)</span></td>
        <td><span class="arithmatex">\((9,16,7)\)</span></td>
        <td><span class="arithmatex">\(16\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>job <span class="arithmatex">\(3\)</span>: <span class="arithmatex">\(M_3\to M_1\)</span></td>
        <td><span class="arithmatex">\((12,9,11)\)</span></td>
        <td><span class="arithmatex">\(12\)</span></td>
        <td><span class="arithmatex">\(\leftarrow\)</span></td>
        </tr>
        <tr>
        <td>job <span class="arithmatex">\(3\)</span>: <span class="arithmatex">\(M_3\to M_2\)</span></td>
        <td><span class="arithmatex">\((9,12,11)\)</span></td>
        <td><span class="arithmatex">\(12\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>job <span class="arithmatex">\(4\)</span>: <span class="arithmatex">\(M_3\to M_1\)</span></td>
        <td><span class="arithmatex">\((13,9,10)\)</span></td>
        <td><span class="arithmatex">\(13\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>job <span class="arithmatex">\(4\)</span>: <span class="arithmatex">\(M_3\to M_2\)</span></td>
        <td><span class="arithmatex">\((9,13,10)\)</span></td>
        <td><span class="arithmatex">\(13\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>job <span class="arithmatex">\(5\)</span>: <span class="arithmatex">\(M_1\to M_2\)</span></td>
        <td><span class="arithmatex">\((5,13,14)\)</span></td>
        <td><span class="arithmatex">\(14\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>job <span class="arithmatex">\(5\)</span>: <span class="arithmatex">\(M_1\to M_3\)</span></td>
        <td><span class="arithmatex">\((5,9,18)\)</span></td>
        <td><span class="arithmatex">\(18\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>job <span class="arithmatex">\(6\)</span>: <span class="arithmatex">\(M_2\to M_1\)</span></td>
        <td><span class="arithmatex">\((18,0,14)\)</span></td>
        <td><span class="arithmatex">\(18\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>job <span class="arithmatex">\(6\)</span>: <span class="arithmatex">\(M_2\to M_3\)</span></td>
        <td><span class="arithmatex">\((9,0,23)\)</span></td>
        <td><span class="arithmatex">\(23\)</span></td>
        <td></td>
        </tr>
        </table></div>

        The move marked is accepted.

        Iteration 3: $J_{1}=\{1,3,5\}, J_{2}=\{6\}, J_{3}=\{2,4\}$, loads $(12,9,11)$, $C_{\max}=12$.

        <div class="tabella" markdown="0"><table>
        <tr>
        <th>move</th>
        <th>loads</th>
        <th><span class="arithmatex">\(C_{\max}\)</span></th>
        <th></th>
        </tr>
        <tr>
        <td>job <span class="arithmatex">\(1\)</span>: <span class="arithmatex">\(M_1\to M_2\)</span></td>
        <td><span class="arithmatex">\((7,14,11)\)</span></td>
        <td><span class="arithmatex">\(14\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>job <span class="arithmatex">\(1\)</span>: <span class="arithmatex">\(M_1\to M_3\)</span></td>
        <td><span class="arithmatex">\((7,9,16)\)</span></td>
        <td><span class="arithmatex">\(16\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>job <span class="arithmatex">\(2\)</span>: <span class="arithmatex">\(M_3\to M_1\)</span></td>
        <td><span class="arithmatex">\((19,9,4)\)</span></td>
        <td><span class="arithmatex">\(19\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>job <span class="arithmatex">\(2\)</span>: <span class="arithmatex">\(M_3\to M_2\)</span></td>
        <td><span class="arithmatex">\((12,16,4)\)</span></td>
        <td><span class="arithmatex">\(16\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>job <span class="arithmatex">\(3\)</span>: <span class="arithmatex">\(M_1\to M_2\)</span></td>
        <td><span class="arithmatex">\((9,12,11)\)</span></td>
        <td><span class="arithmatex">\(12\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>job <span class="arithmatex">\(3\)</span>: <span class="arithmatex">\(M_1\to M_3\)</span></td>
        <td><span class="arithmatex">\((9,9,14)\)</span></td>
        <td><span class="arithmatex">\(14\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>job <span class="arithmatex">\(4\)</span>: <span class="arithmatex">\(M_3\to M_1\)</span></td>
        <td><span class="arithmatex">\((16,9,7)\)</span></td>
        <td><span class="arithmatex">\(16\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>job <span class="arithmatex">\(4\)</span>: <span class="arithmatex">\(M_3\to M_2\)</span></td>
        <td><span class="arithmatex">\((12,13,7)\)</span></td>
        <td><span class="arithmatex">\(13\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>job <span class="arithmatex">\(5\)</span>: <span class="arithmatex">\(M_1\to M_2\)</span></td>
        <td><span class="arithmatex">\((8,13,11)\)</span></td>
        <td><span class="arithmatex">\(13\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>job <span class="arithmatex">\(5\)</span>: <span class="arithmatex">\(M_1\to M_3\)</span></td>
        <td><span class="arithmatex">\((8,9,15)\)</span></td>
        <td><span class="arithmatex">\(15\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>job <span class="arithmatex">\(6\)</span>: <span class="arithmatex">\(M_2\to M_1\)</span></td>
        <td><span class="arithmatex">\((21,0,11)\)</span></td>
        <td><span class="arithmatex">\(21\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>job <span class="arithmatex">\(6\)</span>: <span class="arithmatex">\(M_2\to M_3\)</span></td>
        <td><span class="arithmatex">\((12,0,20)\)</span></td>
        <td><span class="arithmatex">\(20\)</span></td>
        <td></td>
        </tr>
        </table></div>

        No move is improving: <strong>local optimum</strong>.

        The search makes 2 moves, $16\to14\to12$, and stops in $J_{1}=\{1,3,5\}, J_{2}=\{6\}, J_{3}=\{2,4\}$.

    3. The bound is $\max\{9,\lceil 32/3\rceil\}=11$.

    4. The bound $11$ is not attained, but a makespan of $11$ is impossible. Job $6$ ($t_{6}=9$) can share its machine only with jobs of total time at most $11-9=2$, and every other job has $t_j\ge 3$: its machine contains job $6$ only. The other $5$ jobs, of total time $32-9=23$, should fit on two machines of load at most $11$, i.e., at most $22$: impossible. Hence $z(I)\ge 12$, and the final schedule, with $C_{\max}=12$, is <strong>optimal</strong>.

<a id="esercizio-20-11"></a>

!!! esercizio "Exercise 20.11: Local search $P\,||\,C_{\max}$ 2"

    $m=3$ identical machines and $7$ jobs with processing times

    $$
    \begin{array}{l|ccccccc}
    \hline  & {j=1} & {j=2} & {j=3} & {j=4} & {j=5} & {j=6} & {j=7} \\[1ex]
    \hline {t_j} & {8} & {4} & {6} & {7} & {5} & {9} & {8} \\
    \hline
    \end{array}
    $$

    A <em>move</em> reassigns one job $j$ to another machine $h$ (examined for $j=1,\dots,n$ and $h=1,\dots,m$); a <em>swap</em> exchanges the machines of two jobs $j<k$ on different machines with $t_j\ne t_k$. The local searches use the best-improvement rule, with ties broken in favour of the move examined first.

    **Questions**

    1. Compute the schedule of $LPT$ (ties broken by the smallest index) and its makespan.

    2. Show that the schedule of $LPT$ is a local optimum for the move neighbourhood.

    3. Apply the swap local search with the makespan as objective, starting from the schedule of $LPT$.

    4. Compute the lower bound $\lceil\sum_j t_j/m\rceil$ and conclude. What does the exercise show?

??? soluzione "Solution"

    1. The jobs by non-increasing time are $(6,1,7,4,3,5,2)$.

        - job $6$ ($t_{6}=9$) goes to machine $1$, the least loaded (load $0$), which reaches $9$;

        - job $1$ ($t_{1}=8$) goes to machine $2$, the least loaded (load $0$), which reaches $8$;

        - job $7$ ($t_{7}=8$) goes to machine $3$, the least loaded (load $0$), which reaches $8$;

        - job $4$ ($t_{4}=7$) goes to machine $2$, the least loaded (load $8$), which reaches $15$;

        - job $3$ ($t_{3}=6$) goes to machine $3$, the least loaded (load $8$), which reaches $14$;

        - job $5$ ($t_{5}=5$) goes to machine $1$, the least loaded (load $9$), which reaches $14$;

        - job $2$ ($t_{2}=4$) goes to machine $1$, the least loaded (load $14$), which reaches $18$;

        The schedule is $J_{1}=\{2,5,6\}, J_{2}=\{1,4\}, J_{3}=\{3,7\}$, with loads $(18,15,14)$ and $C_{\max}=18$.

    2. Iteration 1: $J_{1}=\{2,5,6\}, J_{2}=\{1,4\}, J_{3}=\{3,7\}$, loads $(18,15,14)$, $C_{\max}=18$.

        <div class="tabella" markdown="0"><table>
        <tr>
        <th>move</th>
        <th>loads</th>
        <th><span class="arithmatex">\(C_{\max}\)</span></th>
        <th></th>
        </tr>
        <tr>
        <td>job <span class="arithmatex">\(1\)</span>: <span class="arithmatex">\(M_2\to M_1\)</span></td>
        <td><span class="arithmatex">\((26,7,14)\)</span></td>
        <td><span class="arithmatex">\(26\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>job <span class="arithmatex">\(1\)</span>: <span class="arithmatex">\(M_2\to M_3\)</span></td>
        <td><span class="arithmatex">\((18,7,22)\)</span></td>
        <td><span class="arithmatex">\(22\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>job <span class="arithmatex">\(2\)</span>: <span class="arithmatex">\(M_1\to M_2\)</span></td>
        <td><span class="arithmatex">\((14,19,14)\)</span></td>
        <td><span class="arithmatex">\(19\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>job <span class="arithmatex">\(2\)</span>: <span class="arithmatex">\(M_1\to M_3\)</span></td>
        <td><span class="arithmatex">\((14,15,18)\)</span></td>
        <td><span class="arithmatex">\(18\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>job <span class="arithmatex">\(3\)</span>: <span class="arithmatex">\(M_3\to M_1\)</span></td>
        <td><span class="arithmatex">\((24,15,8)\)</span></td>
        <td><span class="arithmatex">\(24\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>job <span class="arithmatex">\(3\)</span>: <span class="arithmatex">\(M_3\to M_2\)</span></td>
        <td><span class="arithmatex">\((18,21,8)\)</span></td>
        <td><span class="arithmatex">\(21\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>job <span class="arithmatex">\(4\)</span>: <span class="arithmatex">\(M_2\to M_1\)</span></td>
        <td><span class="arithmatex">\((25,8,14)\)</span></td>
        <td><span class="arithmatex">\(25\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>job <span class="arithmatex">\(4\)</span>: <span class="arithmatex">\(M_2\to M_3\)</span></td>
        <td><span class="arithmatex">\((18,8,21)\)</span></td>
        <td><span class="arithmatex">\(21\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>job <span class="arithmatex">\(5\)</span>: <span class="arithmatex">\(M_1\to M_2\)</span></td>
        <td><span class="arithmatex">\((13,20,14)\)</span></td>
        <td><span class="arithmatex">\(20\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>job <span class="arithmatex">\(5\)</span>: <span class="arithmatex">\(M_1\to M_3\)</span></td>
        <td><span class="arithmatex">\((13,15,19)\)</span></td>
        <td><span class="arithmatex">\(19\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>job <span class="arithmatex">\(6\)</span>: <span class="arithmatex">\(M_1\to M_2\)</span></td>
        <td><span class="arithmatex">\((9,24,14)\)</span></td>
        <td><span class="arithmatex">\(24\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>job <span class="arithmatex">\(6\)</span>: <span class="arithmatex">\(M_1\to M_3\)</span></td>
        <td><span class="arithmatex">\((9,15,23)\)</span></td>
        <td><span class="arithmatex">\(23\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>job <span class="arithmatex">\(7\)</span>: <span class="arithmatex">\(M_3\to M_1\)</span></td>
        <td><span class="arithmatex">\((26,15,6)\)</span></td>
        <td><span class="arithmatex">\(26\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>job <span class="arithmatex">\(7\)</span>: <span class="arithmatex">\(M_3\to M_2\)</span></td>
        <td><span class="arithmatex">\((18,23,6)\)</span></td>
        <td><span class="arithmatex">\(23\)</span></td>
        <td></td>
        </tr>
        </table></div>

        No move is improving: <strong>local optimum</strong>.

        The schedule of $LPT$ is a <strong>local optimum for move</strong>, with $C_{\max}=18$.

    3. Iteration 1: $J_{1}=\{2,5,6\}, J_{2}=\{1,4\}, J_{3}=\{3,7\}$, loads $(18,15,14)$, $C_{\max}=18$.

        <div class="tabella" markdown="0"><table>
        <tr>
        <th>swap</th>
        <th>loads</th>
        <th><span class="arithmatex">\(C_{\max}\)</span></th>
        <th></th>
        </tr>
        <tr>
        <td>jobs <span class="arithmatex">\(1,2\)</span> (<span class="arithmatex">\(M_2,M_1\)</span>)</td>
        <td><span class="arithmatex">\((22,11,14)\)</span></td>
        <td><span class="arithmatex">\(22\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>jobs <span class="arithmatex">\(1,3\)</span> (<span class="arithmatex">\(M_2,M_3\)</span>)</td>
        <td><span class="arithmatex">\((18,13,16)\)</span></td>
        <td><span class="arithmatex">\(18\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>jobs <span class="arithmatex">\(1,5\)</span> (<span class="arithmatex">\(M_2,M_1\)</span>)</td>
        <td><span class="arithmatex">\((21,12,14)\)</span></td>
        <td><span class="arithmatex">\(21\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>jobs <span class="arithmatex">\(1,6\)</span> (<span class="arithmatex">\(M_2,M_1\)</span>)</td>
        <td><span class="arithmatex">\((17,16,14)\)</span></td>
        <td><span class="arithmatex">\(17\)</span></td>
        <td><span class="arithmatex">\(\leftarrow\)</span></td>
        </tr>
        <tr>
        <td>jobs <span class="arithmatex">\(2,3\)</span> (<span class="arithmatex">\(M_1,M_3\)</span>)</td>
        <td><span class="arithmatex">\((20,15,12)\)</span></td>
        <td><span class="arithmatex">\(20\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>jobs <span class="arithmatex">\(2,4\)</span> (<span class="arithmatex">\(M_1,M_2\)</span>)</td>
        <td><span class="arithmatex">\((21,12,14)\)</span></td>
        <td><span class="arithmatex">\(21\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>jobs <span class="arithmatex">\(2,7\)</span> (<span class="arithmatex">\(M_1,M_3\)</span>)</td>
        <td><span class="arithmatex">\((22,15,10)\)</span></td>
        <td><span class="arithmatex">\(22\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>jobs <span class="arithmatex">\(3,4\)</span> (<span class="arithmatex">\(M_3,M_2\)</span>)</td>
        <td><span class="arithmatex">\((18,14,15)\)</span></td>
        <td><span class="arithmatex">\(18\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>jobs <span class="arithmatex">\(3,5\)</span> (<span class="arithmatex">\(M_3,M_1\)</span>)</td>
        <td><span class="arithmatex">\((19,15,13)\)</span></td>
        <td><span class="arithmatex">\(19\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>jobs <span class="arithmatex">\(3,6\)</span> (<span class="arithmatex">\(M_3,M_1\)</span>)</td>
        <td><span class="arithmatex">\((15,15,17)\)</span></td>
        <td><span class="arithmatex">\(17\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>jobs <span class="arithmatex">\(4,5\)</span> (<span class="arithmatex">\(M_2,M_1\)</span>)</td>
        <td><span class="arithmatex">\((20,13,14)\)</span></td>
        <td><span class="arithmatex">\(20\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>jobs <span class="arithmatex">\(4,6\)</span> (<span class="arithmatex">\(M_2,M_1\)</span>)</td>
        <td><span class="arithmatex">\((16,17,14)\)</span></td>
        <td><span class="arithmatex">\(17\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>jobs <span class="arithmatex">\(4,7\)</span> (<span class="arithmatex">\(M_2,M_3\)</span>)</td>
        <td><span class="arithmatex">\((18,16,13)\)</span></td>
        <td><span class="arithmatex">\(18\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>jobs <span class="arithmatex">\(5,7\)</span> (<span class="arithmatex">\(M_1,M_3\)</span>)</td>
        <td><span class="arithmatex">\((21,15,11)\)</span></td>
        <td><span class="arithmatex">\(21\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>jobs <span class="arithmatex">\(6,7\)</span> (<span class="arithmatex">\(M_1,M_3\)</span>)</td>
        <td><span class="arithmatex">\((17,15,15)\)</span></td>
        <td><span class="arithmatex">\(17\)</span></td>
        <td></td>
        </tr>
        </table></div>

        The swap marked is accepted.

        Iteration 2: $J_{1}=\{1,2,5\}, J_{2}=\{4,6\}, J_{3}=\{3,7\}$, loads $(17,16,14)$, $C_{\max}=17$.

        <div class="tabella" markdown="0"><table>
        <tr>
        <th>swap</th>
        <th>loads</th>
        <th><span class="arithmatex">\(C_{\max}\)</span></th>
        <th></th>
        </tr>
        <tr>
        <td>jobs <span class="arithmatex">\(1,3\)</span> (<span class="arithmatex">\(M_1,M_3\)</span>)</td>
        <td><span class="arithmatex">\((15,16,16)\)</span></td>
        <td><span class="arithmatex">\(16\)</span></td>
        <td><span class="arithmatex">\(\leftarrow\)</span></td>
        </tr>
        <tr>
        <td>jobs <span class="arithmatex">\(1,4\)</span> (<span class="arithmatex">\(M_1,M_2\)</span>)</td>
        <td><span class="arithmatex">\((16,17,14)\)</span></td>
        <td><span class="arithmatex">\(17\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>jobs <span class="arithmatex">\(1,6\)</span> (<span class="arithmatex">\(M_1,M_2\)</span>)</td>
        <td><span class="arithmatex">\((18,15,14)\)</span></td>
        <td><span class="arithmatex">\(18\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>jobs <span class="arithmatex">\(2,3\)</span> (<span class="arithmatex">\(M_1,M_3\)</span>)</td>
        <td><span class="arithmatex">\((19,16,12)\)</span></td>
        <td><span class="arithmatex">\(19\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>jobs <span class="arithmatex">\(2,4\)</span> (<span class="arithmatex">\(M_1,M_2\)</span>)</td>
        <td><span class="arithmatex">\((20,13,14)\)</span></td>
        <td><span class="arithmatex">\(20\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>jobs <span class="arithmatex">\(2,6\)</span> (<span class="arithmatex">\(M_1,M_2\)</span>)</td>
        <td><span class="arithmatex">\((22,11,14)\)</span></td>
        <td><span class="arithmatex">\(22\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>jobs <span class="arithmatex">\(2,7\)</span> (<span class="arithmatex">\(M_1,M_3\)</span>)</td>
        <td><span class="arithmatex">\((21,16,10)\)</span></td>
        <td><span class="arithmatex">\(21\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>jobs <span class="arithmatex">\(3,4\)</span> (<span class="arithmatex">\(M_3,M_2\)</span>)</td>
        <td><span class="arithmatex">\((17,15,15)\)</span></td>
        <td><span class="arithmatex">\(17\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>jobs <span class="arithmatex">\(3,5\)</span> (<span class="arithmatex">\(M_3,M_1\)</span>)</td>
        <td><span class="arithmatex">\((18,16,13)\)</span></td>
        <td><span class="arithmatex">\(18\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>jobs <span class="arithmatex">\(3,6\)</span> (<span class="arithmatex">\(M_3,M_2\)</span>)</td>
        <td><span class="arithmatex">\((17,13,17)\)</span></td>
        <td><span class="arithmatex">\(17\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>jobs <span class="arithmatex">\(4,5\)</span> (<span class="arithmatex">\(M_2,M_1\)</span>)</td>
        <td><span class="arithmatex">\((19,14,14)\)</span></td>
        <td><span class="arithmatex">\(19\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>jobs <span class="arithmatex">\(4,7\)</span> (<span class="arithmatex">\(M_2,M_3\)</span>)</td>
        <td><span class="arithmatex">\((17,17,13)\)</span></td>
        <td><span class="arithmatex">\(17\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>jobs <span class="arithmatex">\(5,6\)</span> (<span class="arithmatex">\(M_1,M_2\)</span>)</td>
        <td><span class="arithmatex">\((21,12,14)\)</span></td>
        <td><span class="arithmatex">\(21\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>jobs <span class="arithmatex">\(5,7\)</span> (<span class="arithmatex">\(M_1,M_3\)</span>)</td>
        <td><span class="arithmatex">\((20,16,11)\)</span></td>
        <td><span class="arithmatex">\(20\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>jobs <span class="arithmatex">\(6,7\)</span> (<span class="arithmatex">\(M_2,M_3\)</span>)</td>
        <td><span class="arithmatex">\((17,15,15)\)</span></td>
        <td><span class="arithmatex">\(17\)</span></td>
        <td></td>
        </tr>
        </table></div>

        The swap marked is accepted.

        Iteration 3: $J_{1}=\{2,3,5\}, J_{2}=\{4,6\}, J_{3}=\{1,7\}$, loads $(15,16,16)$, $C_{\max}=16$.

        <div class="tabella" markdown="0"><table>
        <tr>
        <th>swap</th>
        <th>loads</th>
        <th><span class="arithmatex">\(C_{\max}\)</span></th>
        <th></th>
        </tr>
        <tr>
        <td>jobs <span class="arithmatex">\(1,2\)</span> (<span class="arithmatex">\(M_3,M_1\)</span>)</td>
        <td><span class="arithmatex">\((19,16,12)\)</span></td>
        <td><span class="arithmatex">\(19\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>jobs <span class="arithmatex">\(1,3\)</span> (<span class="arithmatex">\(M_3,M_1\)</span>)</td>
        <td><span class="arithmatex">\((17,16,14)\)</span></td>
        <td><span class="arithmatex">\(17\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>jobs <span class="arithmatex">\(1,4\)</span> (<span class="arithmatex">\(M_3,M_2\)</span>)</td>
        <td><span class="arithmatex">\((15,17,15)\)</span></td>
        <td><span class="arithmatex">\(17\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>jobs <span class="arithmatex">\(1,5\)</span> (<span class="arithmatex">\(M_3,M_1\)</span>)</td>
        <td><span class="arithmatex">\((18,16,13)\)</span></td>
        <td><span class="arithmatex">\(18\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>jobs <span class="arithmatex">\(1,6\)</span> (<span class="arithmatex">\(M_3,M_2\)</span>)</td>
        <td><span class="arithmatex">\((15,15,17)\)</span></td>
        <td><span class="arithmatex">\(17\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>jobs <span class="arithmatex">\(2,4\)</span> (<span class="arithmatex">\(M_1,M_2\)</span>)</td>
        <td><span class="arithmatex">\((18,13,16)\)</span></td>
        <td><span class="arithmatex">\(18\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>jobs <span class="arithmatex">\(2,6\)</span> (<span class="arithmatex">\(M_1,M_2\)</span>)</td>
        <td><span class="arithmatex">\((20,11,16)\)</span></td>
        <td><span class="arithmatex">\(20\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>jobs <span class="arithmatex">\(2,7\)</span> (<span class="arithmatex">\(M_1,M_3\)</span>)</td>
        <td><span class="arithmatex">\((19,16,12)\)</span></td>
        <td><span class="arithmatex">\(19\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>jobs <span class="arithmatex">\(3,4\)</span> (<span class="arithmatex">\(M_1,M_2\)</span>)</td>
        <td><span class="arithmatex">\((16,15,16)\)</span></td>
        <td><span class="arithmatex">\(16\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>jobs <span class="arithmatex">\(3,6\)</span> (<span class="arithmatex">\(M_1,M_2\)</span>)</td>
        <td><span class="arithmatex">\((18,13,16)\)</span></td>
        <td><span class="arithmatex">\(18\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>jobs <span class="arithmatex">\(3,7\)</span> (<span class="arithmatex">\(M_1,M_3\)</span>)</td>
        <td><span class="arithmatex">\((17,16,14)\)</span></td>
        <td><span class="arithmatex">\(17\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>jobs <span class="arithmatex">\(4,5\)</span> (<span class="arithmatex">\(M_2,M_1\)</span>)</td>
        <td><span class="arithmatex">\((17,14,16)\)</span></td>
        <td><span class="arithmatex">\(17\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>jobs <span class="arithmatex">\(4,7\)</span> (<span class="arithmatex">\(M_2,M_3\)</span>)</td>
        <td><span class="arithmatex">\((15,17,15)\)</span></td>
        <td><span class="arithmatex">\(17\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>jobs <span class="arithmatex">\(5,6\)</span> (<span class="arithmatex">\(M_1,M_2\)</span>)</td>
        <td><span class="arithmatex">\((19,12,16)\)</span></td>
        <td><span class="arithmatex">\(19\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>jobs <span class="arithmatex">\(5,7\)</span> (<span class="arithmatex">\(M_1,M_3\)</span>)</td>
        <td><span class="arithmatex">\((18,16,13)\)</span></td>
        <td><span class="arithmatex">\(18\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>jobs <span class="arithmatex">\(6,7\)</span> (<span class="arithmatex">\(M_2,M_3\)</span>)</td>
        <td><span class="arithmatex">\((15,15,17)\)</span></td>
        <td><span class="arithmatex">\(17\)</span></td>
        <td></td>
        </tr>
        </table></div>

        No swap is improving: <strong>local optimum</strong>.

        The swap local search makes 2 moves, $18\to17\to16$, and stops in $J_{1}=\{2,3,5\}, J_{2}=\{4,6\}, J_{3}=\{1,7\}$.

    4. The bound is $\lceil 47/3\rceil=16$, attained by the final schedule: it is <strong>optimal</strong>. The schedule of $LPT$ is a local optimum for move and not for swap: the local optimum <strong>depends on the neighbourhood</strong>.

<a id="esercizio-20-12"></a>

!!! esercizio "Exercise 20.12: Local search $P\,||\,C_{\max}$ 3"

    $m=3$ identical machines and $6$ jobs with processing times

    $$
    \begin{array}{l|cccccc}
    \hline  & {j=1} & {j=2} & {j=3} & {j=4} & {j=5} & {j=6} \\[1ex]
    \hline {t_j} & {5} & {5} & {7} & {9} & {2} & {7} \\
    \hline
    \end{array}
    $$

    A <em>move</em> reassigns one job $j$ to another machine $h$ (examined for $j=1,\dots,n$ and $h=1,\dots,m$); a <em>swap</em> exchanges the machines of two jobs $j<k$ on different machines with $t_j\ne t_k$. The local searches use the best-improvement rule, with ties broken in favour of the move examined first.

    **Questions**

    1. Compute the schedule of list scheduling ($LIST$) with the jobs in the order $1,2,\dots,n$, and its makespan. How many machines are critical?

    2. Apply the move local search with the makespan as objective, starting from the schedule of $LIST$. Why does it stop?

    3. Apply the move local search with the auxiliary objective $\sum_h L_h^2$ (minimized), starting from the schedule of $LIST$.

    4. Compute the lower bound $\max\{\max_j t_j,\lceil\sum_j t_j/m\rceil\}$ and conclude.

??? soluzione "Solution"

    1. - job $1$ ($t_{1}=5$) goes to machine $1$, the least loaded (load $0$), which reaches $5$;

        - job $2$ ($t_{2}=5$) goes to machine $2$, the least loaded (load $0$), which reaches $5$;

        - job $3$ ($t_{3}=7$) goes to machine $3$, the least loaded (load $0$), which reaches $7$;

        - job $4$ ($t_{4}=9$) goes to machine $1$, the least loaded (load $5$), which reaches $14$;

        - job $5$ ($t_{5}=2$) goes to machine $2$, the least loaded (load $5$), which reaches $7$;

        - job $6$ ($t_{6}=7$) goes to machine $2$, the least loaded (load $7$), which reaches $14$;

        The schedule is $J_{1}=\{1,4\}, J_{2}=\{2,5,6\}, J_{3}=\{3\}$, with loads $(14,14,7)$ and $C_{\max}=14$: 2 machines are critical.

    2. Iteration 1: $J_{1}=\{1,4\}, J_{2}=\{2,5,6\}, J_{3}=\{3\}$, loads $(14,14,7)$, $C_{\max}=14$.

        <div class="tabella" markdown="0"><table>
        <tr>
        <th>move</th>
        <th>loads</th>
        <th><span class="arithmatex">\(C_{\max}\)</span></th>
        <th></th>
        </tr>
        <tr>
        <td>job <span class="arithmatex">\(1\)</span>: <span class="arithmatex">\(M_1\to M_2\)</span></td>
        <td><span class="arithmatex">\((9,19,7)\)</span></td>
        <td><span class="arithmatex">\(19\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>job <span class="arithmatex">\(1\)</span>: <span class="arithmatex">\(M_1\to M_3\)</span></td>
        <td><span class="arithmatex">\((9,14,12)\)</span></td>
        <td><span class="arithmatex">\(14\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>job <span class="arithmatex">\(2\)</span>: <span class="arithmatex">\(M_2\to M_1\)</span></td>
        <td><span class="arithmatex">\((19,9,7)\)</span></td>
        <td><span class="arithmatex">\(19\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>job <span class="arithmatex">\(2\)</span>: <span class="arithmatex">\(M_2\to M_3\)</span></td>
        <td><span class="arithmatex">\((14,9,12)\)</span></td>
        <td><span class="arithmatex">\(14\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>job <span class="arithmatex">\(3\)</span>: <span class="arithmatex">\(M_3\to M_1\)</span></td>
        <td><span class="arithmatex">\((21,14,0)\)</span></td>
        <td><span class="arithmatex">\(21\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>job <span class="arithmatex">\(3\)</span>: <span class="arithmatex">\(M_3\to M_2\)</span></td>
        <td><span class="arithmatex">\((14,21,0)\)</span></td>
        <td><span class="arithmatex">\(21\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>job <span class="arithmatex">\(4\)</span>: <span class="arithmatex">\(M_1\to M_2\)</span></td>
        <td><span class="arithmatex">\((5,23,7)\)</span></td>
        <td><span class="arithmatex">\(23\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>job <span class="arithmatex">\(4\)</span>: <span class="arithmatex">\(M_1\to M_3\)</span></td>
        <td><span class="arithmatex">\((5,14,16)\)</span></td>
        <td><span class="arithmatex">\(16\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>job <span class="arithmatex">\(5\)</span>: <span class="arithmatex">\(M_2\to M_1\)</span></td>
        <td><span class="arithmatex">\((16,12,7)\)</span></td>
        <td><span class="arithmatex">\(16\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>job <span class="arithmatex">\(5\)</span>: <span class="arithmatex">\(M_2\to M_3\)</span></td>
        <td><span class="arithmatex">\((14,12,9)\)</span></td>
        <td><span class="arithmatex">\(14\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>job <span class="arithmatex">\(6\)</span>: <span class="arithmatex">\(M_2\to M_1\)</span></td>
        <td><span class="arithmatex">\((21,7,7)\)</span></td>
        <td><span class="arithmatex">\(21\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>job <span class="arithmatex">\(6\)</span>: <span class="arithmatex">\(M_2\to M_3\)</span></td>
        <td><span class="arithmatex">\((14,7,14)\)</span></td>
        <td><span class="arithmatex">\(14\)</span></td>
        <td></td>
        </tr>
        </table></div>

        No move is improving: <strong>local optimum</strong>.

        Two machines have load $14$. A move changes only two loads, and lowers the makespan only if it starts from the unique critical machine: here no move can decrease both critical loads, so the schedule of $LIST$ is a local optimum. Several moves keep $C_{\max}=14$: the search is on a <strong>plateau</strong>.

    3. Iteration 1: $J_{1}=\{1,4\}, J_{2}=\{2,5,6\}, J_{3}=\{3\}$, loads $(14,14,7)$, $C_{\max}=14$, $\sum_hL_h^2=441$.

        <div class="tabella" markdown="0"><table>
        <tr>
        <th>move</th>
        <th>loads</th>
        <th><span class="arithmatex">\(C_{\max}\)</span></th>
        <th><span class="arithmatex">\(\sum_hL_h^2\)</span></th>
        <th></th>
        </tr>
        <tr>
        <td>job <span class="arithmatex">\(1\)</span>: <span class="arithmatex">\(M_1\to M_2\)</span></td>
        <td><span class="arithmatex">\((9,19,7)\)</span></td>
        <td><span class="arithmatex">\(19\)</span></td>
        <td><span class="arithmatex">\(491\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>job <span class="arithmatex">\(1\)</span>: <span class="arithmatex">\(M_1\to M_3\)</span></td>
        <td><span class="arithmatex">\((9,14,12)\)</span></td>
        <td><span class="arithmatex">\(14\)</span></td>
        <td><span class="arithmatex">\(421\)</span></td>
        <td><span class="arithmatex">\(\leftarrow\)</span></td>
        </tr>
        <tr>
        <td>job <span class="arithmatex">\(2\)</span>: <span class="arithmatex">\(M_2\to M_1\)</span></td>
        <td><span class="arithmatex">\((19,9,7)\)</span></td>
        <td><span class="arithmatex">\(19\)</span></td>
        <td><span class="arithmatex">\(491\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>job <span class="arithmatex">\(2\)</span>: <span class="arithmatex">\(M_2\to M_3\)</span></td>
        <td><span class="arithmatex">\((14,9,12)\)</span></td>
        <td><span class="arithmatex">\(14\)</span></td>
        <td><span class="arithmatex">\(421\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>job <span class="arithmatex">\(3\)</span>: <span class="arithmatex">\(M_3\to M_1\)</span></td>
        <td><span class="arithmatex">\((21,14,0)\)</span></td>
        <td><span class="arithmatex">\(21\)</span></td>
        <td><span class="arithmatex">\(637\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>job <span class="arithmatex">\(3\)</span>: <span class="arithmatex">\(M_3\to M_2\)</span></td>
        <td><span class="arithmatex">\((14,21,0)\)</span></td>
        <td><span class="arithmatex">\(21\)</span></td>
        <td><span class="arithmatex">\(637\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>job <span class="arithmatex">\(4\)</span>: <span class="arithmatex">\(M_1\to M_2\)</span></td>
        <td><span class="arithmatex">\((5,23,7)\)</span></td>
        <td><span class="arithmatex">\(23\)</span></td>
        <td><span class="arithmatex">\(603\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>job <span class="arithmatex">\(4\)</span>: <span class="arithmatex">\(M_1\to M_3\)</span></td>
        <td><span class="arithmatex">\((5,14,16)\)</span></td>
        <td><span class="arithmatex">\(16\)</span></td>
        <td><span class="arithmatex">\(477\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>job <span class="arithmatex">\(5\)</span>: <span class="arithmatex">\(M_2\to M_1\)</span></td>
        <td><span class="arithmatex">\((16,12,7)\)</span></td>
        <td><span class="arithmatex">\(16\)</span></td>
        <td><span class="arithmatex">\(449\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>job <span class="arithmatex">\(5\)</span>: <span class="arithmatex">\(M_2\to M_3\)</span></td>
        <td><span class="arithmatex">\((14,12,9)\)</span></td>
        <td><span class="arithmatex">\(14\)</span></td>
        <td><span class="arithmatex">\(421\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>job <span class="arithmatex">\(6\)</span>: <span class="arithmatex">\(M_2\to M_1\)</span></td>
        <td><span class="arithmatex">\((21,7,7)\)</span></td>
        <td><span class="arithmatex">\(21\)</span></td>
        <td><span class="arithmatex">\(539\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>job <span class="arithmatex">\(6\)</span>: <span class="arithmatex">\(M_2\to M_3\)</span></td>
        <td><span class="arithmatex">\((14,7,14)\)</span></td>
        <td><span class="arithmatex">\(14\)</span></td>
        <td><span class="arithmatex">\(441\)</span></td>
        <td></td>
        </tr>
        </table></div>

        The move marked is accepted.

        Iteration 2: $J_{1}=\{4\}, J_{2}=\{2,5,6\}, J_{3}=\{1,3\}$, loads $(9,14,12)$, $C_{\max}=14$, $\sum_hL_h^2=421$.

        <div class="tabella" markdown="0"><table>
        <tr>
        <th>move</th>
        <th>loads</th>
        <th><span class="arithmatex">\(C_{\max}\)</span></th>
        <th><span class="arithmatex">\(\sum_hL_h^2\)</span></th>
        <th></th>
        </tr>
        <tr>
        <td>job <span class="arithmatex">\(1\)</span>: <span class="arithmatex">\(M_3\to M_1\)</span></td>
        <td><span class="arithmatex">\((14,14,7)\)</span></td>
        <td><span class="arithmatex">\(14\)</span></td>
        <td><span class="arithmatex">\(441\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>job <span class="arithmatex">\(1\)</span>: <span class="arithmatex">\(M_3\to M_2\)</span></td>
        <td><span class="arithmatex">\((9,19,7)\)</span></td>
        <td><span class="arithmatex">\(19\)</span></td>
        <td><span class="arithmatex">\(491\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>job <span class="arithmatex">\(2\)</span>: <span class="arithmatex">\(M_2\to M_1\)</span></td>
        <td><span class="arithmatex">\((14,9,12)\)</span></td>
        <td><span class="arithmatex">\(14\)</span></td>
        <td><span class="arithmatex">\(421\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>job <span class="arithmatex">\(2\)</span>: <span class="arithmatex">\(M_2\to M_3\)</span></td>
        <td><span class="arithmatex">\((9,9,17)\)</span></td>
        <td><span class="arithmatex">\(17\)</span></td>
        <td><span class="arithmatex">\(451\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>job <span class="arithmatex">\(3\)</span>: <span class="arithmatex">\(M_3\to M_1\)</span></td>
        <td><span class="arithmatex">\((16,14,5)\)</span></td>
        <td><span class="arithmatex">\(16\)</span></td>
        <td><span class="arithmatex">\(477\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>job <span class="arithmatex">\(3\)</span>: <span class="arithmatex">\(M_3\to M_2\)</span></td>
        <td><span class="arithmatex">\((9,21,5)\)</span></td>
        <td><span class="arithmatex">\(21\)</span></td>
        <td><span class="arithmatex">\(547\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>job <span class="arithmatex">\(4\)</span>: <span class="arithmatex">\(M_1\to M_2\)</span></td>
        <td><span class="arithmatex">\((0,23,12)\)</span></td>
        <td><span class="arithmatex">\(23\)</span></td>
        <td><span class="arithmatex">\(673\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>job <span class="arithmatex">\(4\)</span>: <span class="arithmatex">\(M_1\to M_3\)</span></td>
        <td><span class="arithmatex">\((0,14,21)\)</span></td>
        <td><span class="arithmatex">\(21\)</span></td>
        <td><span class="arithmatex">\(637\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>job <span class="arithmatex">\(5\)</span>: <span class="arithmatex">\(M_2\to M_1\)</span></td>
        <td><span class="arithmatex">\((11,12,12)\)</span></td>
        <td><span class="arithmatex">\(12\)</span></td>
        <td><span class="arithmatex">\(409\)</span></td>
        <td><span class="arithmatex">\(\leftarrow\)</span></td>
        </tr>
        <tr>
        <td>job <span class="arithmatex">\(5\)</span>: <span class="arithmatex">\(M_2\to M_3\)</span></td>
        <td><span class="arithmatex">\((9,12,14)\)</span></td>
        <td><span class="arithmatex">\(14\)</span></td>
        <td><span class="arithmatex">\(421\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>job <span class="arithmatex">\(6\)</span>: <span class="arithmatex">\(M_2\to M_1\)</span></td>
        <td><span class="arithmatex">\((16,7,12)\)</span></td>
        <td><span class="arithmatex">\(16\)</span></td>
        <td><span class="arithmatex">\(449\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>job <span class="arithmatex">\(6\)</span>: <span class="arithmatex">\(M_2\to M_3\)</span></td>
        <td><span class="arithmatex">\((9,7,19)\)</span></td>
        <td><span class="arithmatex">\(19\)</span></td>
        <td><span class="arithmatex">\(491\)</span></td>
        <td></td>
        </tr>
        </table></div>

        The move marked is accepted.

        Iteration 3: $J_{1}=\{4,5\}, J_{2}=\{2,6\}, J_{3}=\{1,3\}$, loads $(11,12,12)$, $C_{\max}=12$, $\sum_hL_h^2=409$.

        <div class="tabella" markdown="0"><table>
        <tr>
        <th>move</th>
        <th>loads</th>
        <th><span class="arithmatex">\(C_{\max}\)</span></th>
        <th><span class="arithmatex">\(\sum_hL_h^2\)</span></th>
        <th></th>
        </tr>
        <tr>
        <td>job <span class="arithmatex">\(1\)</span>: <span class="arithmatex">\(M_3\to M_1\)</span></td>
        <td><span class="arithmatex">\((16,12,7)\)</span></td>
        <td><span class="arithmatex">\(16\)</span></td>
        <td><span class="arithmatex">\(449\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>job <span class="arithmatex">\(1\)</span>: <span class="arithmatex">\(M_3\to M_2\)</span></td>
        <td><span class="arithmatex">\((11,17,7)\)</span></td>
        <td><span class="arithmatex">\(17\)</span></td>
        <td><span class="arithmatex">\(459\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>job <span class="arithmatex">\(2\)</span>: <span class="arithmatex">\(M_2\to M_1\)</span></td>
        <td><span class="arithmatex">\((16,7,12)\)</span></td>
        <td><span class="arithmatex">\(16\)</span></td>
        <td><span class="arithmatex">\(449\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>job <span class="arithmatex">\(2\)</span>: <span class="arithmatex">\(M_2\to M_3\)</span></td>
        <td><span class="arithmatex">\((11,7,17)\)</span></td>
        <td><span class="arithmatex">\(17\)</span></td>
        <td><span class="arithmatex">\(459\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>job <span class="arithmatex">\(3\)</span>: <span class="arithmatex">\(M_3\to M_1\)</span></td>
        <td><span class="arithmatex">\((18,12,5)\)</span></td>
        <td><span class="arithmatex">\(18\)</span></td>
        <td><span class="arithmatex">\(493\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>job <span class="arithmatex">\(3\)</span>: <span class="arithmatex">\(M_3\to M_2\)</span></td>
        <td><span class="arithmatex">\((11,19,5)\)</span></td>
        <td><span class="arithmatex">\(19\)</span></td>
        <td><span class="arithmatex">\(507\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>job <span class="arithmatex">\(4\)</span>: <span class="arithmatex">\(M_1\to M_2\)</span></td>
        <td><span class="arithmatex">\((2,21,12)\)</span></td>
        <td><span class="arithmatex">\(21\)</span></td>
        <td><span class="arithmatex">\(589\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>job <span class="arithmatex">\(4\)</span>: <span class="arithmatex">\(M_1\to M_3\)</span></td>
        <td><span class="arithmatex">\((2,12,21)\)</span></td>
        <td><span class="arithmatex">\(21\)</span></td>
        <td><span class="arithmatex">\(589\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>job <span class="arithmatex">\(5\)</span>: <span class="arithmatex">\(M_1\to M_2\)</span></td>
        <td><span class="arithmatex">\((9,14,12)\)</span></td>
        <td><span class="arithmatex">\(14\)</span></td>
        <td><span class="arithmatex">\(421\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>job <span class="arithmatex">\(5\)</span>: <span class="arithmatex">\(M_1\to M_3\)</span></td>
        <td><span class="arithmatex">\((9,12,14)\)</span></td>
        <td><span class="arithmatex">\(14\)</span></td>
        <td><span class="arithmatex">\(421\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>job <span class="arithmatex">\(6\)</span>: <span class="arithmatex">\(M_2\to M_1\)</span></td>
        <td><span class="arithmatex">\((18,5,12)\)</span></td>
        <td><span class="arithmatex">\(18\)</span></td>
        <td><span class="arithmatex">\(493\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>job <span class="arithmatex">\(6\)</span>: <span class="arithmatex">\(M_2\to M_3\)</span></td>
        <td><span class="arithmatex">\((11,5,19)\)</span></td>
        <td><span class="arithmatex">\(19\)</span></td>
        <td><span class="arithmatex">\(507\)</span></td>
        <td></td>
        </tr>
        </table></div>

        No move is improving: <strong>local optimum</strong>.

        The search makes 2 moves, with makespan $14\to14\to12$ and $\sum_hL_h^2$: $441\to421\to409$. The first move does not change the makespan, but it prepares the second one.

    4. The bound is $\max\{9,\lceil 35/3\rceil\}=12$, attained by the final schedule: it is <strong>optimal</strong>. The auxiliary objective gives a slope to the plateau of the makespan.
