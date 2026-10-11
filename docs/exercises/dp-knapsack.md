---
title: "Exercises · Dynamic programming for knapsack problems"
---

# Exercises · Dynamic programming for knapsack problems

<div class="info-capitolo" markdown>

**Exercises · Chapter 15** · each solution opens with a click · [:material-book-open-variant: Chapter 15](../dynamic-programming/dp-knapsack.md)

</div>

## A DP algorithm for the Knapsack Problem

<a id="esercizio-15-1"></a>

!!! esercizio "Exercise 15.1: Exercise 1: Knapsack Problem"

    Consider the following KP instance, where the knapsack has capacity $c=6$, and the profits and weights associated with the items are:

    <div class="tabella" markdown="0"><table>
    <tr>
    <th></th>
    <th><span class="arithmatex">\(i=1\)</span></th>
    <th><span class="arithmatex">\(i=2\)</span></th>
    <th><span class="arithmatex">\(i=3\)</span></th>
    <th><span class="arithmatex">\(i=4\)</span></th>
    </tr>
    <tr>
    <td><span class="arithmatex">\(p_i\)</span></td>
    <td><span class="arithmatex">\(6\)</span></td>
    <td><span class="arithmatex">\(7\)</span></td>
    <td><span class="arithmatex">\(8\)</span></td>
    <td><span class="arithmatex">\(9\)</span></td>
    </tr>
    <tr>
    <td><span class="arithmatex">\(w_i\)</span></td>
    <td><span class="arithmatex">\(2\)</span></td>
    <td><span class="arithmatex">\(3\)</span></td>
    <td><span class="arithmatex">\(4\)</span></td>
    <td><span class="arithmatex">\(5\)</span></td>
    </tr>
    </table></div>

    **Questions**

    1. Show the execution of the bottom-up DP algorithm by reporting, for each iteration, the values of the matrices $v$ and $s$.

    2. Using the matrix $s$, reconstruct an optimal solution in integer notation $(x_1,x_2,\dots,x_n)$, and report the optimal value.

??? soluzione "Solution"

    1. Step-by-step execution of the bottom-up DP algorithm

        For each step of the DP algorithm, the table shows the values of $i$ and $k$, the cells ${v}[i][k]$ and ${s}[i][k]$, and the operation performed. The cells are computed for increasing values of $i$ and, for each fixed value of $i$, for increasing values of $k$.

        <div class="tabella" markdown="0"><table>
        <tr>
        <th><span class="arithmatex">\(i\)</span></th>
        <th><span class="arithmatex">\(k\)</span></th>
        <th><span class="arithmatex">\({v}[i][k]\)</span></th>
        <th><span class="arithmatex">\({s}[i][k]\)</span></th>
        <th>Action</th>
        </tr>
        <tr>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\({v}[0][0]\leftarrow 0\)</span>, <span class="arithmatex">\({s}[0][0]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\({v}[0][1]\leftarrow 0\)</span>, <span class="arithmatex">\({s}[0][1]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\({v}[0][2]\leftarrow 0\)</span>, <span class="arithmatex">\({s}[0][2]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\({v}[0][3]\leftarrow 0\)</span>, <span class="arithmatex">\({s}[0][3]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\({v}[0][4]\leftarrow 0\)</span>, <span class="arithmatex">\({s}[0][4]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\({v}[0][5]\leftarrow 0\)</span>, <span class="arithmatex">\({s}[0][5]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\({v}[0][6]\leftarrow 0\)</span>, <span class="arithmatex">\({s}[0][6]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_1\)</span>: <span class="arithmatex">\({v}[1][0]\leftarrow {v}[0][0]=0\)</span>, <span class="arithmatex">\({s}[1][0]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_1\)</span>: <span class="arithmatex">\({v}[1][1]\leftarrow {v}[0][1]=0\)</span>, <span class="arithmatex">\({s}[1][1]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(p[1]+{v}[0][0]=6+0>{v}[0][2]=0\)</span>: <span class="arithmatex">\({v}[1][2]\leftarrow 6\)</span>, <span class="arithmatex">\({s}[1][2]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(p[1]+{v}[0][1]=6+0>{v}[0][3]=0\)</span>: <span class="arithmatex">\({v}[1][3]\leftarrow 6\)</span>, <span class="arithmatex">\({s}[1][3]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(p[1]+{v}[0][2]=6+0>{v}[0][4]=0\)</span>: <span class="arithmatex">\({v}[1][4]\leftarrow 6\)</span>, <span class="arithmatex">\({s}[1][4]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(p[1]+{v}[0][3]=6+0>{v}[0][5]=0\)</span>: <span class="arithmatex">\({v}[1][5]\leftarrow 6\)</span>, <span class="arithmatex">\({s}[1][5]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(p[1]+{v}[0][4]=6+0>{v}[0][6]=0\)</span>: <span class="arithmatex">\({v}[1][6]\leftarrow 6\)</span>, <span class="arithmatex">\({s}[1][6]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_2\)</span>: <span class="arithmatex">\({v}[2][0]\leftarrow {v}[1][0]=0\)</span>, <span class="arithmatex">\({s}[2][0]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_2\)</span>: <span class="arithmatex">\({v}[2][1]\leftarrow {v}[1][1]=0\)</span>, <span class="arithmatex">\({s}[2][1]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_2\)</span>: <span class="arithmatex">\({v}[2][2]\leftarrow {v}[1][2]=6\)</span>, <span class="arithmatex">\({s}[2][2]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(7\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(p[2]+{v}[1][0]=7+0>{v}[1][3]=6\)</span>: <span class="arithmatex">\({v}[2][3]\leftarrow 7\)</span>, <span class="arithmatex">\({s}[2][3]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(7\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(p[2]+{v}[1][1]=7+0>{v}[1][4]=6\)</span>: <span class="arithmatex">\({v}[2][4]\leftarrow 7\)</span>, <span class="arithmatex">\({s}[2][4]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(13\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(p[2]+{v}[1][2]=7+6>{v}[1][5]=6\)</span>: <span class="arithmatex">\({v}[2][5]\leftarrow 13\)</span>, <span class="arithmatex">\({s}[2][5]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(13\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(p[2]+{v}[1][3]=7+6>{v}[1][6]=6\)</span>: <span class="arithmatex">\({v}[2][6]\leftarrow 13\)</span>, <span class="arithmatex">\({s}[2][6]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_3\)</span>: <span class="arithmatex">\({v}[3][0]\leftarrow {v}[2][0]=0\)</span>, <span class="arithmatex">\({s}[3][0]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_3\)</span>: <span class="arithmatex">\({v}[3][1]\leftarrow {v}[2][1]=0\)</span>, <span class="arithmatex">\({s}[3][1]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_3\)</span>: <span class="arithmatex">\({v}[3][2]\leftarrow {v}[2][2]=6\)</span>, <span class="arithmatex">\({s}[3][2]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(7\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_3\)</span>: <span class="arithmatex">\({v}[3][3]\leftarrow {v}[2][3]=7\)</span>, <span class="arithmatex">\({s}[3][3]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(8\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(p[3]+{v}[2][0]=8+0>{v}[2][4]=7\)</span>: <span class="arithmatex">\({v}[3][4]\leftarrow 8\)</span>, <span class="arithmatex">\({s}[3][4]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(13\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(p[3]+{v}[2][1]=8+0\le {v}[2][5]=13\)</span>: <span class="arithmatex">\({v}[3][5]\leftarrow 13\)</span>, <span class="arithmatex">\({s}[3][5]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(14\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(p[3]+{v}[2][2]=8+6>{v}[2][6]=13\)</span>: <span class="arithmatex">\({v}[3][6]\leftarrow 14\)</span>, <span class="arithmatex">\({s}[3][6]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_4\)</span>: <span class="arithmatex">\({v}[4][0]\leftarrow {v}[3][0]=0\)</span>, <span class="arithmatex">\({s}[4][0]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_4\)</span>: <span class="arithmatex">\({v}[4][1]\leftarrow {v}[3][1]=0\)</span>, <span class="arithmatex">\({s}[4][1]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_4\)</span>: <span class="arithmatex">\({v}[4][2]\leftarrow {v}[3][2]=6\)</span>, <span class="arithmatex">\({s}[4][2]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(7\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_4\)</span>: <span class="arithmatex">\({v}[4][3]\leftarrow {v}[3][3]=7\)</span>, <span class="arithmatex">\({s}[4][3]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(8\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_4\)</span>: <span class="arithmatex">\({v}[4][4]\leftarrow {v}[3][4]=8\)</span>, <span class="arithmatex">\({s}[4][4]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(13\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(p[4]+{v}[3][0]=9+0\le {v}[3][5]=13\)</span>: <span class="arithmatex">\({v}[4][5]\leftarrow 13\)</span>, <span class="arithmatex">\({s}[4][5]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(14\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(p[4]+{v}[3][1]=9+0\le {v}[3][6]=14\)</span>: <span class="arithmatex">\({v}[4][6]\leftarrow 14\)</span>, <span class="arithmatex">\({s}[4][6]\leftarrow 0\)</span></td>
        </tr>
        </table></div>

        This is the matrix ${v}$ after the execution of the DP algorithm:

        <div class="tabella" markdown="0"><table>
        <tr>
        <td><span class="arithmatex">\({v}[i][k]\)</span></td>
        <td><span class="arithmatex">\(k=0\)</span></td>
        <td><span class="arithmatex">\(k=1\)</span></td>
        <td><span class="arithmatex">\(k=2\)</span></td>
        <td><span class="arithmatex">\(k=3\)</span></td>
        <td><span class="arithmatex">\(k=4\)</span></td>
        <td><span class="arithmatex">\(k=5\)</span></td>
        <td><span class="arithmatex">\(k=6\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=0\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=1\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>6</td>
        <td>6</td>
        <td>6</td>
        <td>6</td>
        <td>6</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=2\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>6</td>
        <td>7</td>
        <td>7</td>
        <td>13</td>
        <td>13</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=3\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>6</td>
        <td>7</td>
        <td>8</td>
        <td>13</td>
        <td>14</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=4\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>6</td>
        <td>7</td>
        <td>8</td>
        <td>13</td>
        <td>14</td>
        </tr>
        </table></div>

        This is the matrix ${s}$ after the execution of the DP algorithm:

        <div class="tabella" markdown="0"><table>
        <tr>
        <td><span class="arithmatex">\({s}[i][k]\)</span></td>
        <td><span class="arithmatex">\(k=0\)</span></td>
        <td><span class="arithmatex">\(k=1\)</span></td>
        <td><span class="arithmatex">\(k=2\)</span></td>
        <td><span class="arithmatex">\(k=3\)</span></td>
        <td><span class="arithmatex">\(k=4\)</span></td>
        <td><span class="arithmatex">\(k=5\)</span></td>
        <td><span class="arithmatex">\(k=6\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=0\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=1\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=2\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=3\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>1</td>
        <td>0</td>
        <td>1</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=4\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        </tr>
        </table></div>

    2. We have the following matrix ${s}$:

        <div class="tabella" markdown="0"><table>
        <tr>
        <td><span class="arithmatex">\({s}[i][k]\)</span></td>
        <td><span class="arithmatex">\(k=0\)</span></td>
        <td><span class="arithmatex">\(k=1\)</span></td>
        <td><span class="arithmatex">\(k=2\)</span></td>
        <td><span class="arithmatex">\(k=3\)</span></td>
        <td><span class="arithmatex">\(k=4\)</span></td>
        <td><span class="arithmatex">\(k=5\)</span></td>
        <td><span class="arithmatex">\(k=6\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=0\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=1\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=2\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=3\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>1</td>
        <td>0</td>
        <td>1</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=4\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        </tr>
        </table></div>

        We can reconstruct an optimal solution by starting from $i=4$ and $k=6$ as follows:

        <div class="tabella" markdown="0"><table>
        <tr>
        <th>Iteration</th>
        <th><span class="arithmatex">\(i\)</span></th>
        <th><span class="arithmatex">\(k\)</span></th>
        <th><span class="arithmatex">\({s}[i][k]\)</span></th>
        <th><span class="arithmatex">\(x[1]\)</span></th>
        <th><span class="arithmatex">\(x[2]\)</span></th>
        <th><span class="arithmatex">\(x[3]\)</span></th>
        <th><span class="arithmatex">\(x[4]\)</span></th>
        <th>Action</th>
        </tr>
        <tr>
        <td>\-</td>
        <td>\-</td>
        <td>\-</td>
        <td>\-</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(k=6\)</span></td>
        </tr>
        <tr>
        <td>1</td>
        <td>4</td>
        <td>6</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>no update</td>
        </tr>
        <tr>
        <td>2</td>
        <td>3</td>
        <td>6</td>
        <td>1</td>
        <td>0</td>
        <td>0</td>
        <td class="cella-blu">1</td>
        <td>0</td>
        <td><span class="arithmatex">\(x[3]\leftarrow 1\)</span>, <span class="arithmatex">\(k\leftarrow 6-4=2\)</span></td>
        </tr>
        <tr>
        <td>3</td>
        <td>2</td>
        <td>2</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td class="cella-blu">1</td>
        <td>0</td>
        <td>no update</td>
        </tr>
        <tr>
        <td>4</td>
        <td>1</td>
        <td>2</td>
        <td>1</td>
        <td class="cella-blu">1</td>
        <td>0</td>
        <td class="cella-blu">1</td>
        <td>0</td>
        <td><span class="arithmatex">\(x[1]\leftarrow 1\)</span>, <span class="arithmatex">\(k\leftarrow 2-2=0\)</span></td>
        </tr>
        </table></div>

        Thus, the vector

        $$
        (1,0,1,0)
        $$

        is an optimal solution. The optimal value is

        $$
        {v}[4][6]=14.
        $$

<a id="esercizio-15-2"></a>

!!! esercizio "Exercise 15.2: Exercise 2: Knapsack Problem"

    Consider the following KP instance, where the knapsack has capacity $c=7$, and the profits and weights associated with the items are:

    <div class="tabella" markdown="0"><table>
    <tr>
    <th></th>
    <th><span class="arithmatex">\(i=1\)</span></th>
    <th><span class="arithmatex">\(i=2\)</span></th>
    <th><span class="arithmatex">\(i=3\)</span></th>
    <th><span class="arithmatex">\(i=4\)</span></th>
    </tr>
    <tr>
    <td><span class="arithmatex">\(p_i\)</span></td>
    <td><span class="arithmatex">\(4\)</span></td>
    <td><span class="arithmatex">\(5\)</span></td>
    <td><span class="arithmatex">\(10\)</span></td>
    <td><span class="arithmatex">\(11\)</span></td>
    </tr>
    <tr>
    <td><span class="arithmatex">\(w_i\)</span></td>
    <td><span class="arithmatex">\(2\)</span></td>
    <td><span class="arithmatex">\(3\)</span></td>
    <td><span class="arithmatex">\(5\)</span></td>
    <td><span class="arithmatex">\(6\)</span></td>
    </tr>
    </table></div>

    **Questions**

    1. Show the execution of the bottom-up DP algorithm by reporting, for each iteration, the values of the matrices $v$ and $s$.

    2. Using the matrix $s$, reconstruct an optimal solution in integer notation $(x_1,x_2,\dots,x_n)$, and report the optimal value.

??? soluzione "Solution"

    1. Step-by-step execution of the bottom-up DP algorithm

        For each step of the DP algorithm, the table shows the values of $i$ and $k$, the cells ${v}[i][k]$ and ${s}[i][k]$, and the operation performed. The cells are computed for increasing values of $i$ and, for each fixed value of $i$, for increasing values of $k$.

        <div class="tabella" markdown="0"><table>
        <tr>
        <th><span class="arithmatex">\(i\)</span></th>
        <th><span class="arithmatex">\(k\)</span></th>
        <th><span class="arithmatex">\({v}[i][k]\)</span></th>
        <th><span class="arithmatex">\({s}[i][k]\)</span></th>
        <th>Action</th>
        </tr>
        <tr>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\({v}[0][0]\leftarrow 0\)</span>, <span class="arithmatex">\({s}[0][0]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\({v}[0][1]\leftarrow 0\)</span>, <span class="arithmatex">\({s}[0][1]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\({v}[0][2]\leftarrow 0\)</span>, <span class="arithmatex">\({s}[0][2]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\({v}[0][3]\leftarrow 0\)</span>, <span class="arithmatex">\({s}[0][3]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\({v}[0][4]\leftarrow 0\)</span>, <span class="arithmatex">\({s}[0][4]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\({v}[0][5]\leftarrow 0\)</span>, <span class="arithmatex">\({s}[0][5]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\({v}[0][6]\leftarrow 0\)</span>, <span class="arithmatex">\({s}[0][6]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(7\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\({v}[0][7]\leftarrow 0\)</span>, <span class="arithmatex">\({s}[0][7]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_1\)</span>: <span class="arithmatex">\({v}[1][0]\leftarrow {v}[0][0]=0\)</span>, <span class="arithmatex">\({s}[1][0]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_1\)</span>: <span class="arithmatex">\({v}[1][1]\leftarrow {v}[0][1]=0\)</span>, <span class="arithmatex">\({s}[1][1]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(p[1]+{v}[0][0]=4+0>{v}[0][2]=0\)</span>: <span class="arithmatex">\({v}[1][2]\leftarrow 4\)</span>, <span class="arithmatex">\({s}[1][2]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(p[1]+{v}[0][1]=4+0>{v}[0][3]=0\)</span>: <span class="arithmatex">\({v}[1][3]\leftarrow 4\)</span>, <span class="arithmatex">\({s}[1][3]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(p[1]+{v}[0][2]=4+0>{v}[0][4]=0\)</span>: <span class="arithmatex">\({v}[1][4]\leftarrow 4\)</span>, <span class="arithmatex">\({s}[1][4]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(p[1]+{v}[0][3]=4+0>{v}[0][5]=0\)</span>: <span class="arithmatex">\({v}[1][5]\leftarrow 4\)</span>, <span class="arithmatex">\({s}[1][5]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(p[1]+{v}[0][4]=4+0>{v}[0][6]=0\)</span>: <span class="arithmatex">\({v}[1][6]\leftarrow 4\)</span>, <span class="arithmatex">\({s}[1][6]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(7\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(p[1]+{v}[0][5]=4+0>{v}[0][7]=0\)</span>: <span class="arithmatex">\({v}[1][7]\leftarrow 4\)</span>, <span class="arithmatex">\({s}[1][7]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_2\)</span>: <span class="arithmatex">\({v}[2][0]\leftarrow {v}[1][0]=0\)</span>, <span class="arithmatex">\({s}[2][0]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_2\)</span>: <span class="arithmatex">\({v}[2][1]\leftarrow {v}[1][1]=0\)</span>, <span class="arithmatex">\({s}[2][1]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_2\)</span>: <span class="arithmatex">\({v}[2][2]\leftarrow {v}[1][2]=4\)</span>, <span class="arithmatex">\({s}[2][2]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(p[2]+{v}[1][0]=5+0>{v}[1][3]=4\)</span>: <span class="arithmatex">\({v}[2][3]\leftarrow 5\)</span>, <span class="arithmatex">\({s}[2][3]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(p[2]+{v}[1][1]=5+0>{v}[1][4]=4\)</span>: <span class="arithmatex">\({v}[2][4]\leftarrow 5\)</span>, <span class="arithmatex">\({s}[2][4]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(9\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(p[2]+{v}[1][2]=5+4>{v}[1][5]=4\)</span>: <span class="arithmatex">\({v}[2][5]\leftarrow 9\)</span>, <span class="arithmatex">\({s}[2][5]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(9\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(p[2]+{v}[1][3]=5+4>{v}[1][6]=4\)</span>: <span class="arithmatex">\({v}[2][6]\leftarrow 9\)</span>, <span class="arithmatex">\({s}[2][6]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(7\)</span></td>
        <td><span class="arithmatex">\(9\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(p[2]+{v}[1][4]=5+4>{v}[1][7]=4\)</span>: <span class="arithmatex">\({v}[2][7]\leftarrow 9\)</span>, <span class="arithmatex">\({s}[2][7]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_3\)</span>: <span class="arithmatex">\({v}[3][0]\leftarrow {v}[2][0]=0\)</span>, <span class="arithmatex">\({s}[3][0]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_3\)</span>: <span class="arithmatex">\({v}[3][1]\leftarrow {v}[2][1]=0\)</span>, <span class="arithmatex">\({s}[3][1]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_3\)</span>: <span class="arithmatex">\({v}[3][2]\leftarrow {v}[2][2]=4\)</span>, <span class="arithmatex">\({s}[3][2]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_3\)</span>: <span class="arithmatex">\({v}[3][3]\leftarrow {v}[2][3]=5\)</span>, <span class="arithmatex">\({s}[3][3]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_3\)</span>: <span class="arithmatex">\({v}[3][4]\leftarrow {v}[2][4]=5\)</span>, <span class="arithmatex">\({s}[3][4]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(10\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(p[3]+{v}[2][0]=10+0>{v}[2][5]=9\)</span>: <span class="arithmatex">\({v}[3][5]\leftarrow 10\)</span>, <span class="arithmatex">\({s}[3][5]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(10\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(p[3]+{v}[2][1]=10+0>{v}[2][6]=9\)</span>: <span class="arithmatex">\({v}[3][6]\leftarrow 10\)</span>, <span class="arithmatex">\({s}[3][6]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(7\)</span></td>
        <td><span class="arithmatex">\(14\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(p[3]+{v}[2][2]=10+4>{v}[2][7]=9\)</span>: <span class="arithmatex">\({v}[3][7]\leftarrow 14\)</span>, <span class="arithmatex">\({s}[3][7]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_4\)</span>: <span class="arithmatex">\({v}[4][0]\leftarrow {v}[3][0]=0\)</span>, <span class="arithmatex">\({s}[4][0]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_4\)</span>: <span class="arithmatex">\({v}[4][1]\leftarrow {v}[3][1]=0\)</span>, <span class="arithmatex">\({s}[4][1]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_4\)</span>: <span class="arithmatex">\({v}[4][2]\leftarrow {v}[3][2]=4\)</span>, <span class="arithmatex">\({s}[4][2]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_4\)</span>: <span class="arithmatex">\({v}[4][3]\leftarrow {v}[3][3]=5\)</span>, <span class="arithmatex">\({s}[4][3]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_4\)</span>: <span class="arithmatex">\({v}[4][4]\leftarrow {v}[3][4]=5\)</span>, <span class="arithmatex">\({s}[4][4]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(10\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_4\)</span>: <span class="arithmatex">\({v}[4][5]\leftarrow {v}[3][5]=10\)</span>, <span class="arithmatex">\({s}[4][5]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(11\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(p[4]+{v}[3][0]=11+0>{v}[3][6]=10\)</span>: <span class="arithmatex">\({v}[4][6]\leftarrow 11\)</span>, <span class="arithmatex">\({s}[4][6]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(7\)</span></td>
        <td><span class="arithmatex">\(14\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(p[4]+{v}[3][1]=11+0\le {v}[3][7]=14\)</span>: <span class="arithmatex">\({v}[4][7]\leftarrow 14\)</span>, <span class="arithmatex">\({s}[4][7]\leftarrow 0\)</span></td>
        </tr>
        </table></div>

        This is the matrix ${v}$ after the execution of the DP algorithm:

        <div class="tabella" markdown="0"><table>
        <tr>
        <td><span class="arithmatex">\({v}[i][k]\)</span></td>
        <td><span class="arithmatex">\(k=0\)</span></td>
        <td><span class="arithmatex">\(k=1\)</span></td>
        <td><span class="arithmatex">\(k=2\)</span></td>
        <td><span class="arithmatex">\(k=3\)</span></td>
        <td><span class="arithmatex">\(k=4\)</span></td>
        <td><span class="arithmatex">\(k=5\)</span></td>
        <td><span class="arithmatex">\(k=6\)</span></td>
        <td><span class="arithmatex">\(k=7\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=0\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=1\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>4</td>
        <td>4</td>
        <td>4</td>
        <td>4</td>
        <td>4</td>
        <td>4</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=2\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>4</td>
        <td>5</td>
        <td>5</td>
        <td>9</td>
        <td>9</td>
        <td>9</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=3\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>4</td>
        <td>5</td>
        <td>5</td>
        <td>10</td>
        <td>10</td>
        <td>14</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=4\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>4</td>
        <td>5</td>
        <td>5</td>
        <td>10</td>
        <td>11</td>
        <td>14</td>
        </tr>
        </table></div>

        This is the matrix ${s}$ after the execution of the DP algorithm:

        <div class="tabella" markdown="0"><table>
        <tr>
        <td><span class="arithmatex">\({s}[i][k]\)</span></td>
        <td><span class="arithmatex">\(k=0\)</span></td>
        <td><span class="arithmatex">\(k=1\)</span></td>
        <td><span class="arithmatex">\(k=2\)</span></td>
        <td><span class="arithmatex">\(k=3\)</span></td>
        <td><span class="arithmatex">\(k=4\)</span></td>
        <td><span class="arithmatex">\(k=5\)</span></td>
        <td><span class="arithmatex">\(k=6\)</span></td>
        <td><span class="arithmatex">\(k=7\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=0\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=1\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=2\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=3\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=4\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>1</td>
        <td>0</td>
        </tr>
        </table></div>

    2. We have the following matrix ${s}$:

        <div class="tabella" markdown="0"><table>
        <tr>
        <td><span class="arithmatex">\({s}[i][k]\)</span></td>
        <td><span class="arithmatex">\(k=0\)</span></td>
        <td><span class="arithmatex">\(k=1\)</span></td>
        <td><span class="arithmatex">\(k=2\)</span></td>
        <td><span class="arithmatex">\(k=3\)</span></td>
        <td><span class="arithmatex">\(k=4\)</span></td>
        <td><span class="arithmatex">\(k=5\)</span></td>
        <td><span class="arithmatex">\(k=6\)</span></td>
        <td><span class="arithmatex">\(k=7\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=0\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=1\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=2\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=3\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=4\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>1</td>
        <td>0</td>
        </tr>
        </table></div>

        We can reconstruct an optimal solution by starting from $i=4$ and $k=7$ as follows:

        <div class="tabella" markdown="0"><table>
        <tr>
        <th>Iteration</th>
        <th><span class="arithmatex">\(i\)</span></th>
        <th><span class="arithmatex">\(k\)</span></th>
        <th><span class="arithmatex">\({s}[i][k]\)</span></th>
        <th><span class="arithmatex">\(x[1]\)</span></th>
        <th><span class="arithmatex">\(x[2]\)</span></th>
        <th><span class="arithmatex">\(x[3]\)</span></th>
        <th><span class="arithmatex">\(x[4]\)</span></th>
        <th>Action</th>
        </tr>
        <tr>
        <td>\-</td>
        <td>\-</td>
        <td>\-</td>
        <td>\-</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(k=7\)</span></td>
        </tr>
        <tr>
        <td>1</td>
        <td>4</td>
        <td>7</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>no update</td>
        </tr>
        <tr>
        <td>2</td>
        <td>3</td>
        <td>7</td>
        <td>1</td>
        <td>0</td>
        <td>0</td>
        <td class="cella-blu">1</td>
        <td>0</td>
        <td><span class="arithmatex">\(x[3]\leftarrow 1\)</span>, <span class="arithmatex">\(k\leftarrow 7-5=2\)</span></td>
        </tr>
        <tr>
        <td>3</td>
        <td>2</td>
        <td>2</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td class="cella-blu">1</td>
        <td>0</td>
        <td>no update</td>
        </tr>
        <tr>
        <td>4</td>
        <td>1</td>
        <td>2</td>
        <td>1</td>
        <td class="cella-blu">1</td>
        <td>0</td>
        <td class="cella-blu">1</td>
        <td>0</td>
        <td><span class="arithmatex">\(x[1]\leftarrow 1\)</span>, <span class="arithmatex">\(k\leftarrow 2-2=0\)</span></td>
        </tr>
        </table></div>

        Thus, the vector

        $$
        (1,0,1,0)
        $$

        is an optimal solution. The optimal value is

        $$
        {v}[4][7]=14.
        $$

<a id="esercizio-15-3"></a>

!!! esercizio "Exercise 15.3: Exercise 3: Knapsack Problem"

    Consider the following KP instance, where the knapsack has capacity $c=8$, and the profits and weights associated with the items are:

    <div class="tabella" markdown="0"><table>
    <tr>
    <th></th>
    <th><span class="arithmatex">\(i=1\)</span></th>
    <th><span class="arithmatex">\(i=2\)</span></th>
    <th><span class="arithmatex">\(i=3\)</span></th>
    <th><span class="arithmatex">\(i=4\)</span></th>
    <th><span class="arithmatex">\(i=5\)</span></th>
    </tr>
    <tr>
    <td><span class="arithmatex">\(p_i\)</span></td>
    <td><span class="arithmatex">\(3\)</span></td>
    <td><span class="arithmatex">\(4\)</span></td>
    <td><span class="arithmatex">\(8\)</span></td>
    <td><span class="arithmatex">\(8\)</span></td>
    <td><span class="arithmatex">\(10\)</span></td>
    </tr>
    <tr>
    <td><span class="arithmatex">\(w_i\)</span></td>
    <td><span class="arithmatex">\(1\)</span></td>
    <td><span class="arithmatex">\(3\)</span></td>
    <td><span class="arithmatex">\(4\)</span></td>
    <td><span class="arithmatex">\(5\)</span></td>
    <td><span class="arithmatex">\(6\)</span></td>
    </tr>
    </table></div>

    **Questions**

    1. Show the execution of the bottom-up DP algorithm by reporting, for each iteration, the values of the matrices $v$ and $s$.

    2. Using the matrix $s$, reconstruct an optimal solution in integer notation $(x_1,x_2,\dots,x_n)$, and report the optimal value.

??? soluzione "Solution"

    1. Step-by-step execution of the bottom-up DP algorithm

        For each step of the DP algorithm, the table shows the values of $i$ and $k$, the cells ${v}[i][k]$ and ${s}[i][k]$, and the operation performed. The cells are computed for increasing values of $i$ and, for each fixed value of $i$, for increasing values of $k$.

        <div class="tabella" markdown="0"><table>
        <tr>
        <th><span class="arithmatex">\(i\)</span></th>
        <th><span class="arithmatex">\(k\)</span></th>
        <th><span class="arithmatex">\({v}[i][k]\)</span></th>
        <th><span class="arithmatex">\({s}[i][k]\)</span></th>
        <th>Action</th>
        </tr>
        <tr>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\({v}[0][0]\leftarrow 0\)</span>, <span class="arithmatex">\({s}[0][0]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\({v}[0][1]\leftarrow 0\)</span>, <span class="arithmatex">\({s}[0][1]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\({v}[0][2]\leftarrow 0\)</span>, <span class="arithmatex">\({s}[0][2]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\({v}[0][3]\leftarrow 0\)</span>, <span class="arithmatex">\({s}[0][3]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\({v}[0][4]\leftarrow 0\)</span>, <span class="arithmatex">\({s}[0][4]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\({v}[0][5]\leftarrow 0\)</span>, <span class="arithmatex">\({s}[0][5]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\({v}[0][6]\leftarrow 0\)</span>, <span class="arithmatex">\({s}[0][6]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(7\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\({v}[0][7]\leftarrow 0\)</span>, <span class="arithmatex">\({s}[0][7]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(8\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\({v}[0][8]\leftarrow 0\)</span>, <span class="arithmatex">\({s}[0][8]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_1\)</span>: <span class="arithmatex">\({v}[1][0]\leftarrow {v}[0][0]=0\)</span>, <span class="arithmatex">\({s}[1][0]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(p[1]+{v}[0][0]=3+0>{v}[0][1]=0\)</span>: <span class="arithmatex">\({v}[1][1]\leftarrow 3\)</span>, <span class="arithmatex">\({s}[1][1]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(p[1]+{v}[0][1]=3+0>{v}[0][2]=0\)</span>: <span class="arithmatex">\({v}[1][2]\leftarrow 3\)</span>, <span class="arithmatex">\({s}[1][2]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(p[1]+{v}[0][2]=3+0>{v}[0][3]=0\)</span>: <span class="arithmatex">\({v}[1][3]\leftarrow 3\)</span>, <span class="arithmatex">\({s}[1][3]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(p[1]+{v}[0][3]=3+0>{v}[0][4]=0\)</span>: <span class="arithmatex">\({v}[1][4]\leftarrow 3\)</span>, <span class="arithmatex">\({s}[1][4]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(p[1]+{v}[0][4]=3+0>{v}[0][5]=0\)</span>: <span class="arithmatex">\({v}[1][5]\leftarrow 3\)</span>, <span class="arithmatex">\({s}[1][5]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(p[1]+{v}[0][5]=3+0>{v}[0][6]=0\)</span>: <span class="arithmatex">\({v}[1][6]\leftarrow 3\)</span>, <span class="arithmatex">\({s}[1][6]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(7\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(p[1]+{v}[0][6]=3+0>{v}[0][7]=0\)</span>: <span class="arithmatex">\({v}[1][7]\leftarrow 3\)</span>, <span class="arithmatex">\({s}[1][7]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(8\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(p[1]+{v}[0][7]=3+0>{v}[0][8]=0\)</span>: <span class="arithmatex">\({v}[1][8]\leftarrow 3\)</span>, <span class="arithmatex">\({s}[1][8]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_2\)</span>: <span class="arithmatex">\({v}[2][0]\leftarrow {v}[1][0]=0\)</span>, <span class="arithmatex">\({s}[2][0]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_2\)</span>: <span class="arithmatex">\({v}[2][1]\leftarrow {v}[1][1]=3\)</span>, <span class="arithmatex">\({s}[2][1]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_2\)</span>: <span class="arithmatex">\({v}[2][2]\leftarrow {v}[1][2]=3\)</span>, <span class="arithmatex">\({s}[2][2]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(p[2]+{v}[1][0]=4+0>{v}[1][3]=3\)</span>: <span class="arithmatex">\({v}[2][3]\leftarrow 4\)</span>, <span class="arithmatex">\({s}[2][3]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(7\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(p[2]+{v}[1][1]=4+3>{v}[1][4]=3\)</span>: <span class="arithmatex">\({v}[2][4]\leftarrow 7\)</span>, <span class="arithmatex">\({s}[2][4]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(7\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(p[2]+{v}[1][2]=4+3>{v}[1][5]=3\)</span>: <span class="arithmatex">\({v}[2][5]\leftarrow 7\)</span>, <span class="arithmatex">\({s}[2][5]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(7\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(p[2]+{v}[1][3]=4+3>{v}[1][6]=3\)</span>: <span class="arithmatex">\({v}[2][6]\leftarrow 7\)</span>, <span class="arithmatex">\({s}[2][6]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(7\)</span></td>
        <td><span class="arithmatex">\(7\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(p[2]+{v}[1][4]=4+3>{v}[1][7]=3\)</span>: <span class="arithmatex">\({v}[2][7]\leftarrow 7\)</span>, <span class="arithmatex">\({s}[2][7]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(8\)</span></td>
        <td><span class="arithmatex">\(7\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(p[2]+{v}[1][5]=4+3>{v}[1][8]=3\)</span>: <span class="arithmatex">\({v}[2][8]\leftarrow 7\)</span>, <span class="arithmatex">\({s}[2][8]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_3\)</span>: <span class="arithmatex">\({v}[3][0]\leftarrow {v}[2][0]=0\)</span>, <span class="arithmatex">\({s}[3][0]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_3\)</span>: <span class="arithmatex">\({v}[3][1]\leftarrow {v}[2][1]=3\)</span>, <span class="arithmatex">\({s}[3][1]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_3\)</span>: <span class="arithmatex">\({v}[3][2]\leftarrow {v}[2][2]=3\)</span>, <span class="arithmatex">\({s}[3][2]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_3\)</span>: <span class="arithmatex">\({v}[3][3]\leftarrow {v}[2][3]=4\)</span>, <span class="arithmatex">\({s}[3][3]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(8\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(p[3]+{v}[2][0]=8+0>{v}[2][4]=7\)</span>: <span class="arithmatex">\({v}[3][4]\leftarrow 8\)</span>, <span class="arithmatex">\({s}[3][4]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(11\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(p[3]+{v}[2][1]=8+3>{v}[2][5]=7\)</span>: <span class="arithmatex">\({v}[3][5]\leftarrow 11\)</span>, <span class="arithmatex">\({s}[3][5]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(11\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(p[3]+{v}[2][2]=8+3>{v}[2][6]=7\)</span>: <span class="arithmatex">\({v}[3][6]\leftarrow 11\)</span>, <span class="arithmatex">\({s}[3][6]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(7\)</span></td>
        <td><span class="arithmatex">\(12\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(p[3]+{v}[2][3]=8+4>{v}[2][7]=7\)</span>: <span class="arithmatex">\({v}[3][7]\leftarrow 12\)</span>, <span class="arithmatex">\({s}[3][7]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(8\)</span></td>
        <td><span class="arithmatex">\(15\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(p[3]+{v}[2][4]=8+7>{v}[2][8]=7\)</span>: <span class="arithmatex">\({v}[3][8]\leftarrow 15\)</span>, <span class="arithmatex">\({s}[3][8]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_4\)</span>: <span class="arithmatex">\({v}[4][0]\leftarrow {v}[3][0]=0\)</span>, <span class="arithmatex">\({s}[4][0]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_4\)</span>: <span class="arithmatex">\({v}[4][1]\leftarrow {v}[3][1]=3\)</span>, <span class="arithmatex">\({s}[4][1]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_4\)</span>: <span class="arithmatex">\({v}[4][2]\leftarrow {v}[3][2]=3\)</span>, <span class="arithmatex">\({s}[4][2]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_4\)</span>: <span class="arithmatex">\({v}[4][3]\leftarrow {v}[3][3]=4\)</span>, <span class="arithmatex">\({s}[4][3]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(8\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_4\)</span>: <span class="arithmatex">\({v}[4][4]\leftarrow {v}[3][4]=8\)</span>, <span class="arithmatex">\({s}[4][4]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(11\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(p[4]+{v}[3][0]=8+0\le {v}[3][5]=11\)</span>: <span class="arithmatex">\({v}[4][5]\leftarrow 11\)</span>, <span class="arithmatex">\({s}[4][5]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(11\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(p[4]+{v}[3][1]=8+3\le {v}[3][6]=11\)</span>: <span class="arithmatex">\({v}[4][6]\leftarrow 11\)</span>, <span class="arithmatex">\({s}[4][6]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(7\)</span></td>
        <td><span class="arithmatex">\(12\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(p[4]+{v}[3][2]=8+3\le {v}[3][7]=12\)</span>: <span class="arithmatex">\({v}[4][7]\leftarrow 12\)</span>, <span class="arithmatex">\({s}[4][7]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(8\)</span></td>
        <td><span class="arithmatex">\(15\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(p[4]+{v}[3][3]=8+4\le {v}[3][8]=15\)</span>: <span class="arithmatex">\({v}[4][8]\leftarrow 15\)</span>, <span class="arithmatex">\({s}[4][8]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_5\)</span>: <span class="arithmatex">\({v}[5][0]\leftarrow {v}[4][0]=0\)</span>, <span class="arithmatex">\({s}[5][0]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_5\)</span>: <span class="arithmatex">\({v}[5][1]\leftarrow {v}[4][1]=3\)</span>, <span class="arithmatex">\({s}[5][1]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_5\)</span>: <span class="arithmatex">\({v}[5][2]\leftarrow {v}[4][2]=3\)</span>, <span class="arithmatex">\({s}[5][2]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_5\)</span>: <span class="arithmatex">\({v}[5][3]\leftarrow {v}[4][3]=4\)</span>, <span class="arithmatex">\({s}[5][3]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(8\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_5\)</span>: <span class="arithmatex">\({v}[5][4]\leftarrow {v}[4][4]=8\)</span>, <span class="arithmatex">\({s}[5][4]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(11\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_5\)</span>: <span class="arithmatex">\({v}[5][5]\leftarrow {v}[4][5]=11\)</span>, <span class="arithmatex">\({s}[5][5]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(11\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(p[5]+{v}[4][0]=10+0\le {v}[4][6]=11\)</span>: <span class="arithmatex">\({v}[5][6]\leftarrow 11\)</span>, <span class="arithmatex">\({s}[5][6]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(7\)</span></td>
        <td><span class="arithmatex">\(13\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(p[5]+{v}[4][1]=10+3>{v}[4][7]=12\)</span>: <span class="arithmatex">\({v}[5][7]\leftarrow 13\)</span>, <span class="arithmatex">\({s}[5][7]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(8\)</span></td>
        <td><span class="arithmatex">\(15\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(p[5]+{v}[4][2]=10+3\le {v}[4][8]=15\)</span>: <span class="arithmatex">\({v}[5][8]\leftarrow 15\)</span>, <span class="arithmatex">\({s}[5][8]\leftarrow 0\)</span></td>
        </tr>
        </table></div>

        This is the matrix ${v}$ after the execution of the DP algorithm:

        <div class="tabella" markdown="0"><table>
        <tr>
        <td><span class="arithmatex">\({v}[i][k]\)</span></td>
        <td><span class="arithmatex">\(k=0\)</span></td>
        <td><span class="arithmatex">\(k=1\)</span></td>
        <td><span class="arithmatex">\(k=2\)</span></td>
        <td><span class="arithmatex">\(k=3\)</span></td>
        <td><span class="arithmatex">\(k=4\)</span></td>
        <td><span class="arithmatex">\(k=5\)</span></td>
        <td><span class="arithmatex">\(k=6\)</span></td>
        <td><span class="arithmatex">\(k=7\)</span></td>
        <td><span class="arithmatex">\(k=8\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=0\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=1\)</span></td>
        <td>0</td>
        <td>3</td>
        <td>3</td>
        <td>3</td>
        <td>3</td>
        <td>3</td>
        <td>3</td>
        <td>3</td>
        <td>3</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=2\)</span></td>
        <td>0</td>
        <td>3</td>
        <td>3</td>
        <td>4</td>
        <td>7</td>
        <td>7</td>
        <td>7</td>
        <td>7</td>
        <td>7</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=3\)</span></td>
        <td>0</td>
        <td>3</td>
        <td>3</td>
        <td>4</td>
        <td>8</td>
        <td>11</td>
        <td>11</td>
        <td>12</td>
        <td>15</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=4\)</span></td>
        <td>0</td>
        <td>3</td>
        <td>3</td>
        <td>4</td>
        <td>8</td>
        <td>11</td>
        <td>11</td>
        <td>12</td>
        <td>15</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=5\)</span></td>
        <td>0</td>
        <td>3</td>
        <td>3</td>
        <td>4</td>
        <td>8</td>
        <td>11</td>
        <td>11</td>
        <td>13</td>
        <td>15</td>
        </tr>
        </table></div>

        This is the matrix ${s}$ after the execution of the DP algorithm:

        <div class="tabella" markdown="0"><table>
        <tr>
        <td><span class="arithmatex">\({s}[i][k]\)</span></td>
        <td><span class="arithmatex">\(k=0\)</span></td>
        <td><span class="arithmatex">\(k=1\)</span></td>
        <td><span class="arithmatex">\(k=2\)</span></td>
        <td><span class="arithmatex">\(k=3\)</span></td>
        <td><span class="arithmatex">\(k=4\)</span></td>
        <td><span class="arithmatex">\(k=5\)</span></td>
        <td><span class="arithmatex">\(k=6\)</span></td>
        <td><span class="arithmatex">\(k=7\)</span></td>
        <td><span class="arithmatex">\(k=8\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=0\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=1\)</span></td>
        <td>0</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=2\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=3\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=4\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=5\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>1</td>
        <td>0</td>
        </tr>
        </table></div>

    2. We have the following matrix ${s}$:

        <div class="tabella" markdown="0"><table>
        <tr>
        <td><span class="arithmatex">\({s}[i][k]\)</span></td>
        <td><span class="arithmatex">\(k=0\)</span></td>
        <td><span class="arithmatex">\(k=1\)</span></td>
        <td><span class="arithmatex">\(k=2\)</span></td>
        <td><span class="arithmatex">\(k=3\)</span></td>
        <td><span class="arithmatex">\(k=4\)</span></td>
        <td><span class="arithmatex">\(k=5\)</span></td>
        <td><span class="arithmatex">\(k=6\)</span></td>
        <td><span class="arithmatex">\(k=7\)</span></td>
        <td><span class="arithmatex">\(k=8\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=0\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=1\)</span></td>
        <td>0</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=2\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=3\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=4\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=5\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>1</td>
        <td>0</td>
        </tr>
        </table></div>

        We can reconstruct an optimal solution by starting from $i=5$ and $k=8$ as follows:

        <div class="tabella" markdown="0"><table>
        <tr>
        <th>Iteration</th>
        <th><span class="arithmatex">\(i\)</span></th>
        <th><span class="arithmatex">\(k\)</span></th>
        <th><span class="arithmatex">\({s}[i][k]\)</span></th>
        <th><span class="arithmatex">\(x[1]\)</span></th>
        <th><span class="arithmatex">\(x[2]\)</span></th>
        <th><span class="arithmatex">\(x[3]\)</span></th>
        <th><span class="arithmatex">\(x[4]\)</span></th>
        <th><span class="arithmatex">\(x[5]\)</span></th>
        <th>Action</th>
        </tr>
        <tr>
        <td>\-</td>
        <td>\-</td>
        <td>\-</td>
        <td>\-</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(k=8\)</span></td>
        </tr>
        <tr>
        <td>1</td>
        <td>5</td>
        <td>8</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>no update</td>
        </tr>
        <tr>
        <td>2</td>
        <td>4</td>
        <td>8</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>no update</td>
        </tr>
        <tr>
        <td>3</td>
        <td>3</td>
        <td>8</td>
        <td>1</td>
        <td>0</td>
        <td>0</td>
        <td class="cella-blu">1</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(x[3]\leftarrow 1\)</span>, <span class="arithmatex">\(k\leftarrow 8-4=4\)</span></td>
        </tr>
        <tr>
        <td>4</td>
        <td>2</td>
        <td>4</td>
        <td>1</td>
        <td>0</td>
        <td class="cella-blu">1</td>
        <td class="cella-blu">1</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(x[2]\leftarrow 1\)</span>, <span class="arithmatex">\(k\leftarrow 4-3=1\)</span></td>
        </tr>
        <tr>
        <td>5</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td class="cella-blu">1</td>
        <td class="cella-blu">1</td>
        <td class="cella-blu">1</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(x[1]\leftarrow 1\)</span>, <span class="arithmatex">\(k\leftarrow 1-1=0\)</span></td>
        </tr>
        </table></div>

        Thus, the vector

        $$
        (1,1,1,0,0)
        $$

        is an optimal solution. The optimal value is

        $$
        {v}[5][8]=15.
        $$

<a id="esercizio-15-4"></a>

!!! esercizio "Exercise 15.4: Exercise 4: Knapsack Problem"

    Consider the following KP instance, where the knapsack has capacity $c=9$, and the profits and weights associated with the items are:

    <div class="tabella" markdown="0"><table>
    <tr>
    <th></th>
    <th><span class="arithmatex">\(i=1\)</span></th>
    <th><span class="arithmatex">\(i=2\)</span></th>
    <th><span class="arithmatex">\(i=3\)</span></th>
    <th><span class="arithmatex">\(i=4\)</span></th>
    <th><span class="arithmatex">\(i=5\)</span></th>
    </tr>
    <tr>
    <td><span class="arithmatex">\(p_i\)</span></td>
    <td><span class="arithmatex">\(5\)</span></td>
    <td><span class="arithmatex">\(6\)</span></td>
    <td><span class="arithmatex">\(9\)</span></td>
    <td><span class="arithmatex">\(10\)</span></td>
    <td><span class="arithmatex">\(13\)</span></td>
    </tr>
    <tr>
    <td><span class="arithmatex">\(w_i\)</span></td>
    <td><span class="arithmatex">\(2\)</span></td>
    <td><span class="arithmatex">\(4\)</span></td>
    <td><span class="arithmatex">\(5\)</span></td>
    <td><span class="arithmatex">\(6\)</span></td>
    <td><span class="arithmatex">\(7\)</span></td>
    </tr>
    </table></div>

    **Questions**

    1. Show the execution of the bottom-up DP algorithm by reporting, for each iteration, the values of the matrices $v$ and $s$.

    2. Using the matrix $s$, reconstruct an optimal solution in integer notation $(x_1,x_2,\dots,x_n)$, and report the optimal value.

??? soluzione "Solution"

    1. Step-by-step execution of the bottom-up DP algorithm

        For each step of the DP algorithm, the table shows the values of $i$ and $k$, the cells ${v}[i][k]$ and ${s}[i][k]$, and the operation performed. The cells are computed for increasing values of $i$ and, for each fixed value of $i$, for increasing values of $k$.

        <div class="tabella" markdown="0"><table>
        <tr>
        <th><span class="arithmatex">\(i\)</span></th>
        <th><span class="arithmatex">\(k\)</span></th>
        <th><span class="arithmatex">\({v}[i][k]\)</span></th>
        <th><span class="arithmatex">\({s}[i][k]\)</span></th>
        <th>Action</th>
        </tr>
        <tr>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\({v}[0][0]\leftarrow 0\)</span>, <span class="arithmatex">\({s}[0][0]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\({v}[0][1]\leftarrow 0\)</span>, <span class="arithmatex">\({s}[0][1]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\({v}[0][2]\leftarrow 0\)</span>, <span class="arithmatex">\({s}[0][2]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\({v}[0][3]\leftarrow 0\)</span>, <span class="arithmatex">\({s}[0][3]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\({v}[0][4]\leftarrow 0\)</span>, <span class="arithmatex">\({s}[0][4]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\({v}[0][5]\leftarrow 0\)</span>, <span class="arithmatex">\({s}[0][5]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\({v}[0][6]\leftarrow 0\)</span>, <span class="arithmatex">\({s}[0][6]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(7\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\({v}[0][7]\leftarrow 0\)</span>, <span class="arithmatex">\({s}[0][7]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(8\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\({v}[0][8]\leftarrow 0\)</span>, <span class="arithmatex">\({s}[0][8]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(9\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\({v}[0][9]\leftarrow 0\)</span>, <span class="arithmatex">\({s}[0][9]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_1\)</span>: <span class="arithmatex">\({v}[1][0]\leftarrow {v}[0][0]=0\)</span>, <span class="arithmatex">\({s}[1][0]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_1\)</span>: <span class="arithmatex">\({v}[1][1]\leftarrow {v}[0][1]=0\)</span>, <span class="arithmatex">\({s}[1][1]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(p[1]+{v}[0][0]=5+0>{v}[0][2]=0\)</span>: <span class="arithmatex">\({v}[1][2]\leftarrow 5\)</span>, <span class="arithmatex">\({s}[1][2]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(p[1]+{v}[0][1]=5+0>{v}[0][3]=0\)</span>: <span class="arithmatex">\({v}[1][3]\leftarrow 5\)</span>, <span class="arithmatex">\({s}[1][3]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(p[1]+{v}[0][2]=5+0>{v}[0][4]=0\)</span>: <span class="arithmatex">\({v}[1][4]\leftarrow 5\)</span>, <span class="arithmatex">\({s}[1][4]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(p[1]+{v}[0][3]=5+0>{v}[0][5]=0\)</span>: <span class="arithmatex">\({v}[1][5]\leftarrow 5\)</span>, <span class="arithmatex">\({s}[1][5]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(p[1]+{v}[0][4]=5+0>{v}[0][6]=0\)</span>: <span class="arithmatex">\({v}[1][6]\leftarrow 5\)</span>, <span class="arithmatex">\({s}[1][6]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(7\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(p[1]+{v}[0][5]=5+0>{v}[0][7]=0\)</span>: <span class="arithmatex">\({v}[1][7]\leftarrow 5\)</span>, <span class="arithmatex">\({s}[1][7]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(8\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(p[1]+{v}[0][6]=5+0>{v}[0][8]=0\)</span>: <span class="arithmatex">\({v}[1][8]\leftarrow 5\)</span>, <span class="arithmatex">\({s}[1][8]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(9\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(p[1]+{v}[0][7]=5+0>{v}[0][9]=0\)</span>: <span class="arithmatex">\({v}[1][9]\leftarrow 5\)</span>, <span class="arithmatex">\({s}[1][9]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_2\)</span>: <span class="arithmatex">\({v}[2][0]\leftarrow {v}[1][0]=0\)</span>, <span class="arithmatex">\({s}[2][0]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_2\)</span>: <span class="arithmatex">\({v}[2][1]\leftarrow {v}[1][1]=0\)</span>, <span class="arithmatex">\({s}[2][1]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_2\)</span>: <span class="arithmatex">\({v}[2][2]\leftarrow {v}[1][2]=5\)</span>, <span class="arithmatex">\({s}[2][2]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_2\)</span>: <span class="arithmatex">\({v}[2][3]\leftarrow {v}[1][3]=5\)</span>, <span class="arithmatex">\({s}[2][3]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(p[2]+{v}[1][0]=6+0>{v}[1][4]=5\)</span>: <span class="arithmatex">\({v}[2][4]\leftarrow 6\)</span>, <span class="arithmatex">\({s}[2][4]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(p[2]+{v}[1][1]=6+0>{v}[1][5]=5\)</span>: <span class="arithmatex">\({v}[2][5]\leftarrow 6\)</span>, <span class="arithmatex">\({s}[2][5]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(11\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(p[2]+{v}[1][2]=6+5>{v}[1][6]=5\)</span>: <span class="arithmatex">\({v}[2][6]\leftarrow 11\)</span>, <span class="arithmatex">\({s}[2][6]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(7\)</span></td>
        <td><span class="arithmatex">\(11\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(p[2]+{v}[1][3]=6+5>{v}[1][7]=5\)</span>: <span class="arithmatex">\({v}[2][7]\leftarrow 11\)</span>, <span class="arithmatex">\({s}[2][7]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(8\)</span></td>
        <td><span class="arithmatex">\(11\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(p[2]+{v}[1][4]=6+5>{v}[1][8]=5\)</span>: <span class="arithmatex">\({v}[2][8]\leftarrow 11\)</span>, <span class="arithmatex">\({s}[2][8]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(9\)</span></td>
        <td><span class="arithmatex">\(11\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(p[2]+{v}[1][5]=6+5>{v}[1][9]=5\)</span>: <span class="arithmatex">\({v}[2][9]\leftarrow 11\)</span>, <span class="arithmatex">\({s}[2][9]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_3\)</span>: <span class="arithmatex">\({v}[3][0]\leftarrow {v}[2][0]=0\)</span>, <span class="arithmatex">\({s}[3][0]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_3\)</span>: <span class="arithmatex">\({v}[3][1]\leftarrow {v}[2][1]=0\)</span>, <span class="arithmatex">\({s}[3][1]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_3\)</span>: <span class="arithmatex">\({v}[3][2]\leftarrow {v}[2][2]=5\)</span>, <span class="arithmatex">\({s}[3][2]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_3\)</span>: <span class="arithmatex">\({v}[3][3]\leftarrow {v}[2][3]=5\)</span>, <span class="arithmatex">\({s}[3][3]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_3\)</span>: <span class="arithmatex">\({v}[3][4]\leftarrow {v}[2][4]=6\)</span>, <span class="arithmatex">\({s}[3][4]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(9\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(p[3]+{v}[2][0]=9+0>{v}[2][5]=6\)</span>: <span class="arithmatex">\({v}[3][5]\leftarrow 9\)</span>, <span class="arithmatex">\({s}[3][5]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(11\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(p[3]+{v}[2][1]=9+0\le {v}[2][6]=11\)</span>: <span class="arithmatex">\({v}[3][6]\leftarrow 11\)</span>, <span class="arithmatex">\({s}[3][6]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(7\)</span></td>
        <td><span class="arithmatex">\(14\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(p[3]+{v}[2][2]=9+5>{v}[2][7]=11\)</span>: <span class="arithmatex">\({v}[3][7]\leftarrow 14\)</span>, <span class="arithmatex">\({s}[3][7]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(8\)</span></td>
        <td><span class="arithmatex">\(14\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(p[3]+{v}[2][3]=9+5>{v}[2][8]=11\)</span>: <span class="arithmatex">\({v}[3][8]\leftarrow 14\)</span>, <span class="arithmatex">\({s}[3][8]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(9\)</span></td>
        <td><span class="arithmatex">\(15\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(p[3]+{v}[2][4]=9+6>{v}[2][9]=11\)</span>: <span class="arithmatex">\({v}[3][9]\leftarrow 15\)</span>, <span class="arithmatex">\({s}[3][9]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_4\)</span>: <span class="arithmatex">\({v}[4][0]\leftarrow {v}[3][0]=0\)</span>, <span class="arithmatex">\({s}[4][0]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_4\)</span>: <span class="arithmatex">\({v}[4][1]\leftarrow {v}[3][1]=0\)</span>, <span class="arithmatex">\({s}[4][1]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_4\)</span>: <span class="arithmatex">\({v}[4][2]\leftarrow {v}[3][2]=5\)</span>, <span class="arithmatex">\({s}[4][2]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_4\)</span>: <span class="arithmatex">\({v}[4][3]\leftarrow {v}[3][3]=5\)</span>, <span class="arithmatex">\({s}[4][3]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_4\)</span>: <span class="arithmatex">\({v}[4][4]\leftarrow {v}[3][4]=6\)</span>, <span class="arithmatex">\({s}[4][4]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(9\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_4\)</span>: <span class="arithmatex">\({v}[4][5]\leftarrow {v}[3][5]=9\)</span>, <span class="arithmatex">\({s}[4][5]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(11\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(p[4]+{v}[3][0]=10+0\le {v}[3][6]=11\)</span>: <span class="arithmatex">\({v}[4][6]\leftarrow 11\)</span>, <span class="arithmatex">\({s}[4][6]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(7\)</span></td>
        <td><span class="arithmatex">\(14\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(p[4]+{v}[3][1]=10+0\le {v}[3][7]=14\)</span>: <span class="arithmatex">\({v}[4][7]\leftarrow 14\)</span>, <span class="arithmatex">\({s}[4][7]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(8\)</span></td>
        <td><span class="arithmatex">\(15\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(p[4]+{v}[3][2]=10+5>{v}[3][8]=14\)</span>: <span class="arithmatex">\({v}[4][8]\leftarrow 15\)</span>, <span class="arithmatex">\({s}[4][8]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(9\)</span></td>
        <td><span class="arithmatex">\(15\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(p[4]+{v}[3][3]=10+5\le {v}[3][9]=15\)</span>: <span class="arithmatex">\({v}[4][9]\leftarrow 15\)</span>, <span class="arithmatex">\({s}[4][9]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_5\)</span>: <span class="arithmatex">\({v}[5][0]\leftarrow {v}[4][0]=0\)</span>, <span class="arithmatex">\({s}[5][0]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_5\)</span>: <span class="arithmatex">\({v}[5][1]\leftarrow {v}[4][1]=0\)</span>, <span class="arithmatex">\({s}[5][1]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_5\)</span>: <span class="arithmatex">\({v}[5][2]\leftarrow {v}[4][2]=5\)</span>, <span class="arithmatex">\({s}[5][2]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_5\)</span>: <span class="arithmatex">\({v}[5][3]\leftarrow {v}[4][3]=5\)</span>, <span class="arithmatex">\({s}[5][3]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_5\)</span>: <span class="arithmatex">\({v}[5][4]\leftarrow {v}[4][4]=6\)</span>, <span class="arithmatex">\({s}[5][4]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(9\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_5\)</span>: <span class="arithmatex">\({v}[5][5]\leftarrow {v}[4][5]=9\)</span>, <span class="arithmatex">\({s}[5][5]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(11\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_5\)</span>: <span class="arithmatex">\({v}[5][6]\leftarrow {v}[4][6]=11\)</span>, <span class="arithmatex">\({s}[5][6]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(7\)</span></td>
        <td><span class="arithmatex">\(14\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(p[5]+{v}[4][0]=13+0\le {v}[4][7]=14\)</span>: <span class="arithmatex">\({v}[5][7]\leftarrow 14\)</span>, <span class="arithmatex">\({s}[5][7]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(8\)</span></td>
        <td><span class="arithmatex">\(15\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(p[5]+{v}[4][1]=13+0\le {v}[4][8]=15\)</span>: <span class="arithmatex">\({v}[5][8]\leftarrow 15\)</span>, <span class="arithmatex">\({s}[5][8]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(9\)</span></td>
        <td><span class="arithmatex">\(18\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(p[5]+{v}[4][2]=13+5>{v}[4][9]=15\)</span>: <span class="arithmatex">\({v}[5][9]\leftarrow 18\)</span>, <span class="arithmatex">\({s}[5][9]\leftarrow 1\)</span></td>
        </tr>
        </table></div>

        This is the matrix ${v}$ after the execution of the DP algorithm:

        <div class="tabella" markdown="0"><table>
        <tr>
        <td><span class="arithmatex">\({v}[i][k]\)</span></td>
        <td><span class="arithmatex">\(k=0\)</span></td>
        <td><span class="arithmatex">\(k=1\)</span></td>
        <td><span class="arithmatex">\(k=2\)</span></td>
        <td><span class="arithmatex">\(k=3\)</span></td>
        <td><span class="arithmatex">\(k=4\)</span></td>
        <td><span class="arithmatex">\(k=5\)</span></td>
        <td><span class="arithmatex">\(k=6\)</span></td>
        <td><span class="arithmatex">\(k=7\)</span></td>
        <td><span class="arithmatex">\(k=8\)</span></td>
        <td><span class="arithmatex">\(k=9\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=0\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=1\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>5</td>
        <td>5</td>
        <td>5</td>
        <td>5</td>
        <td>5</td>
        <td>5</td>
        <td>5</td>
        <td>5</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=2\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>5</td>
        <td>5</td>
        <td>6</td>
        <td>6</td>
        <td>11</td>
        <td>11</td>
        <td>11</td>
        <td>11</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=3\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>5</td>
        <td>5</td>
        <td>6</td>
        <td>9</td>
        <td>11</td>
        <td>14</td>
        <td>14</td>
        <td>15</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=4\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>5</td>
        <td>5</td>
        <td>6</td>
        <td>9</td>
        <td>11</td>
        <td>14</td>
        <td>15</td>
        <td>15</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=5\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>5</td>
        <td>5</td>
        <td>6</td>
        <td>9</td>
        <td>11</td>
        <td>14</td>
        <td>15</td>
        <td>18</td>
        </tr>
        </table></div>

        This is the matrix ${s}$ after the execution of the DP algorithm:

        <div class="tabella" markdown="0"><table>
        <tr>
        <td><span class="arithmatex">\({s}[i][k]\)</span></td>
        <td><span class="arithmatex">\(k=0\)</span></td>
        <td><span class="arithmatex">\(k=1\)</span></td>
        <td><span class="arithmatex">\(k=2\)</span></td>
        <td><span class="arithmatex">\(k=3\)</span></td>
        <td><span class="arithmatex">\(k=4\)</span></td>
        <td><span class="arithmatex">\(k=5\)</span></td>
        <td><span class="arithmatex">\(k=6\)</span></td>
        <td><span class="arithmatex">\(k=7\)</span></td>
        <td><span class="arithmatex">\(k=8\)</span></td>
        <td><span class="arithmatex">\(k=9\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=0\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=1\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=2\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=3\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>1</td>
        <td>0</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=4\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>1</td>
        <td>0</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=5\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>1</td>
        </tr>
        </table></div>

    2. We have the following matrix ${s}$:

        <div class="tabella" markdown="0"><table>
        <tr>
        <td><span class="arithmatex">\({s}[i][k]\)</span></td>
        <td><span class="arithmatex">\(k=0\)</span></td>
        <td><span class="arithmatex">\(k=1\)</span></td>
        <td><span class="arithmatex">\(k=2\)</span></td>
        <td><span class="arithmatex">\(k=3\)</span></td>
        <td><span class="arithmatex">\(k=4\)</span></td>
        <td><span class="arithmatex">\(k=5\)</span></td>
        <td><span class="arithmatex">\(k=6\)</span></td>
        <td><span class="arithmatex">\(k=7\)</span></td>
        <td><span class="arithmatex">\(k=8\)</span></td>
        <td><span class="arithmatex">\(k=9\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=0\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=1\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=2\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=3\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>1</td>
        <td>0</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=4\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>1</td>
        <td>0</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=5\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>1</td>
        </tr>
        </table></div>

        We can reconstruct an optimal solution by starting from $i=5$ and $k=9$ as follows:

        <div class="tabella" markdown="0"><table>
        <tr>
        <th>Iteration</th>
        <th><span class="arithmatex">\(i\)</span></th>
        <th><span class="arithmatex">\(k\)</span></th>
        <th><span class="arithmatex">\({s}[i][k]\)</span></th>
        <th><span class="arithmatex">\(x[1]\)</span></th>
        <th><span class="arithmatex">\(x[2]\)</span></th>
        <th><span class="arithmatex">\(x[3]\)</span></th>
        <th><span class="arithmatex">\(x[4]\)</span></th>
        <th><span class="arithmatex">\(x[5]\)</span></th>
        <th>Action</th>
        </tr>
        <tr>
        <td>\-</td>
        <td>\-</td>
        <td>\-</td>
        <td>\-</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(k=9\)</span></td>
        </tr>
        <tr>
        <td>1</td>
        <td>5</td>
        <td>9</td>
        <td>1</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td class="cella-blu">1</td>
        <td><span class="arithmatex">\(x[5]\leftarrow 1\)</span>, <span class="arithmatex">\(k\leftarrow 9-7=2\)</span></td>
        </tr>
        <tr>
        <td>2</td>
        <td>4</td>
        <td>2</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td class="cella-blu">1</td>
        <td>no update</td>
        </tr>
        <tr>
        <td>3</td>
        <td>3</td>
        <td>2</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td class="cella-blu">1</td>
        <td>no update</td>
        </tr>
        <tr>
        <td>4</td>
        <td>2</td>
        <td>2</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td class="cella-blu">1</td>
        <td>no update</td>
        </tr>
        <tr>
        <td>5</td>
        <td>1</td>
        <td>2</td>
        <td>1</td>
        <td class="cella-blu">1</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td class="cella-blu">1</td>
        <td><span class="arithmatex">\(x[1]\leftarrow 1\)</span>, <span class="arithmatex">\(k\leftarrow 2-2=0\)</span></td>
        </tr>
        </table></div>

        Thus, the vector

        $$
        (1,0,0,0,1)
        $$

        is an optimal solution. The optimal value is

        $$
        {v}[5][9]=18.
        $$

<a id="esercizio-15-5"></a>

!!! esercizio "Exercise 15.5: Exercise 5: Knapsack Problem"

    Consider the following KP instance, where the knapsack has capacity $c=10$, and the profits and weights associated with the items are:

    <div class="tabella" markdown="0"><table>
    <tr>
    <th></th>
    <th><span class="arithmatex">\(i=1\)</span></th>
    <th><span class="arithmatex">\(i=2\)</span></th>
    <th><span class="arithmatex">\(i=3\)</span></th>
    <th><span class="arithmatex">\(i=4\)</span></th>
    <th><span class="arithmatex">\(i=5\)</span></th>
    </tr>
    <tr>
    <td><span class="arithmatex">\(p_i\)</span></td>
    <td><span class="arithmatex">\(2\)</span></td>
    <td><span class="arithmatex">\(7\)</span></td>
    <td><span class="arithmatex">\(9\)</span></td>
    <td><span class="arithmatex">\(12\)</span></td>
    <td><span class="arithmatex">\(14\)</span></td>
    </tr>
    <tr>
    <td><span class="arithmatex">\(w_i\)</span></td>
    <td><span class="arithmatex">\(1\)</span></td>
    <td><span class="arithmatex">\(4\)</span></td>
    <td><span class="arithmatex">\(5\)</span></td>
    <td><span class="arithmatex">\(7\)</span></td>
    <td><span class="arithmatex">\(8\)</span></td>
    </tr>
    </table></div>

    **Questions**

    1. Show the execution of the bottom-up DP algorithm by reporting, for each iteration, the values of the matrices $v$ and $s$.

    2. Using the matrix $s$, reconstruct an optimal solution in integer notation $(x_1,x_2,\dots,x_n)$, and report the optimal value.

??? soluzione "Solution"

    1. Step-by-step execution of the bottom-up DP algorithm

        For each step of the DP algorithm, the table shows the values of $i$ and $k$, the cells ${v}[i][k]$ and ${s}[i][k]$, and the operation performed. The cells are computed for increasing values of $i$ and, for each fixed value of $i$, for increasing values of $k$.

        <div class="tabella" markdown="0"><table>
        <tr>
        <th><span class="arithmatex">\(i\)</span></th>
        <th><span class="arithmatex">\(k\)</span></th>
        <th><span class="arithmatex">\({v}[i][k]\)</span></th>
        <th><span class="arithmatex">\({s}[i][k]\)</span></th>
        <th>Action</th>
        </tr>
        <tr>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\({v}[0][0]\leftarrow 0\)</span>, <span class="arithmatex">\({s}[0][0]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\({v}[0][1]\leftarrow 0\)</span>, <span class="arithmatex">\({s}[0][1]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\({v}[0][2]\leftarrow 0\)</span>, <span class="arithmatex">\({s}[0][2]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\({v}[0][3]\leftarrow 0\)</span>, <span class="arithmatex">\({s}[0][3]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\({v}[0][4]\leftarrow 0\)</span>, <span class="arithmatex">\({s}[0][4]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\({v}[0][5]\leftarrow 0\)</span>, <span class="arithmatex">\({s}[0][5]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\({v}[0][6]\leftarrow 0\)</span>, <span class="arithmatex">\({s}[0][6]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(7\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\({v}[0][7]\leftarrow 0\)</span>, <span class="arithmatex">\({s}[0][7]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(8\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\({v}[0][8]\leftarrow 0\)</span>, <span class="arithmatex">\({s}[0][8]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(9\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\({v}[0][9]\leftarrow 0\)</span>, <span class="arithmatex">\({s}[0][9]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(10\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\({v}[0][10]\leftarrow 0\)</span>, <span class="arithmatex">\({s}[0][10]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_1\)</span>: <span class="arithmatex">\({v}[1][0]\leftarrow {v}[0][0]=0\)</span>, <span class="arithmatex">\({s}[1][0]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(p[1]+{v}[0][0]=2+0>{v}[0][1]=0\)</span>: <span class="arithmatex">\({v}[1][1]\leftarrow 2\)</span>, <span class="arithmatex">\({s}[1][1]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(p[1]+{v}[0][1]=2+0>{v}[0][2]=0\)</span>: <span class="arithmatex">\({v}[1][2]\leftarrow 2\)</span>, <span class="arithmatex">\({s}[1][2]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(p[1]+{v}[0][2]=2+0>{v}[0][3]=0\)</span>: <span class="arithmatex">\({v}[1][3]\leftarrow 2\)</span>, <span class="arithmatex">\({s}[1][3]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(p[1]+{v}[0][3]=2+0>{v}[0][4]=0\)</span>: <span class="arithmatex">\({v}[1][4]\leftarrow 2\)</span>, <span class="arithmatex">\({s}[1][4]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(p[1]+{v}[0][4]=2+0>{v}[0][5]=0\)</span>: <span class="arithmatex">\({v}[1][5]\leftarrow 2\)</span>, <span class="arithmatex">\({s}[1][5]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(p[1]+{v}[0][5]=2+0>{v}[0][6]=0\)</span>: <span class="arithmatex">\({v}[1][6]\leftarrow 2\)</span>, <span class="arithmatex">\({s}[1][6]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(7\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(p[1]+{v}[0][6]=2+0>{v}[0][7]=0\)</span>: <span class="arithmatex">\({v}[1][7]\leftarrow 2\)</span>, <span class="arithmatex">\({s}[1][7]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(8\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(p[1]+{v}[0][7]=2+0>{v}[0][8]=0\)</span>: <span class="arithmatex">\({v}[1][8]\leftarrow 2\)</span>, <span class="arithmatex">\({s}[1][8]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(9\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(p[1]+{v}[0][8]=2+0>{v}[0][9]=0\)</span>: <span class="arithmatex">\({v}[1][9]\leftarrow 2\)</span>, <span class="arithmatex">\({s}[1][9]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(10\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(p[1]+{v}[0][9]=2+0>{v}[0][10]=0\)</span>: <span class="arithmatex">\({v}[1][10]\leftarrow 2\)</span>, <span class="arithmatex">\({s}[1][10]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_2\)</span>: <span class="arithmatex">\({v}[2][0]\leftarrow {v}[1][0]=0\)</span>, <span class="arithmatex">\({s}[2][0]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_2\)</span>: <span class="arithmatex">\({v}[2][1]\leftarrow {v}[1][1]=2\)</span>, <span class="arithmatex">\({s}[2][1]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_2\)</span>: <span class="arithmatex">\({v}[2][2]\leftarrow {v}[1][2]=2\)</span>, <span class="arithmatex">\({s}[2][2]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_2\)</span>: <span class="arithmatex">\({v}[2][3]\leftarrow {v}[1][3]=2\)</span>, <span class="arithmatex">\({s}[2][3]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(7\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(p[2]+{v}[1][0]=7+0>{v}[1][4]=2\)</span>: <span class="arithmatex">\({v}[2][4]\leftarrow 7\)</span>, <span class="arithmatex">\({s}[2][4]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(9\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(p[2]+{v}[1][1]=7+2>{v}[1][5]=2\)</span>: <span class="arithmatex">\({v}[2][5]\leftarrow 9\)</span>, <span class="arithmatex">\({s}[2][5]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(9\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(p[2]+{v}[1][2]=7+2>{v}[1][6]=2\)</span>: <span class="arithmatex">\({v}[2][6]\leftarrow 9\)</span>, <span class="arithmatex">\({s}[2][6]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(7\)</span></td>
        <td><span class="arithmatex">\(9\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(p[2]+{v}[1][3]=7+2>{v}[1][7]=2\)</span>: <span class="arithmatex">\({v}[2][7]\leftarrow 9\)</span>, <span class="arithmatex">\({s}[2][7]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(8\)</span></td>
        <td><span class="arithmatex">\(9\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(p[2]+{v}[1][4]=7+2>{v}[1][8]=2\)</span>: <span class="arithmatex">\({v}[2][8]\leftarrow 9\)</span>, <span class="arithmatex">\({s}[2][8]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(9\)</span></td>
        <td><span class="arithmatex">\(9\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(p[2]+{v}[1][5]=7+2>{v}[1][9]=2\)</span>: <span class="arithmatex">\({v}[2][9]\leftarrow 9\)</span>, <span class="arithmatex">\({s}[2][9]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(10\)</span></td>
        <td><span class="arithmatex">\(9\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(p[2]+{v}[1][6]=7+2>{v}[1][10]=2\)</span>: <span class="arithmatex">\({v}[2][10]\leftarrow 9\)</span>, <span class="arithmatex">\({s}[2][10]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_3\)</span>: <span class="arithmatex">\({v}[3][0]\leftarrow {v}[2][0]=0\)</span>, <span class="arithmatex">\({s}[3][0]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_3\)</span>: <span class="arithmatex">\({v}[3][1]\leftarrow {v}[2][1]=2\)</span>, <span class="arithmatex">\({s}[3][1]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_3\)</span>: <span class="arithmatex">\({v}[3][2]\leftarrow {v}[2][2]=2\)</span>, <span class="arithmatex">\({s}[3][2]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_3\)</span>: <span class="arithmatex">\({v}[3][3]\leftarrow {v}[2][3]=2\)</span>, <span class="arithmatex">\({s}[3][3]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(7\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_3\)</span>: <span class="arithmatex">\({v}[3][4]\leftarrow {v}[2][4]=7\)</span>, <span class="arithmatex">\({s}[3][4]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(9\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(p[3]+{v}[2][0]=9+0\le {v}[2][5]=9\)</span>: <span class="arithmatex">\({v}[3][5]\leftarrow 9\)</span>, <span class="arithmatex">\({s}[3][5]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(11\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(p[3]+{v}[2][1]=9+2>{v}[2][6]=9\)</span>: <span class="arithmatex">\({v}[3][6]\leftarrow 11\)</span>, <span class="arithmatex">\({s}[3][6]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(7\)</span></td>
        <td><span class="arithmatex">\(11\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(p[3]+{v}[2][2]=9+2>{v}[2][7]=9\)</span>: <span class="arithmatex">\({v}[3][7]\leftarrow 11\)</span>, <span class="arithmatex">\({s}[3][7]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(8\)</span></td>
        <td><span class="arithmatex">\(11\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(p[3]+{v}[2][3]=9+2>{v}[2][8]=9\)</span>: <span class="arithmatex">\({v}[3][8]\leftarrow 11\)</span>, <span class="arithmatex">\({s}[3][8]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(9\)</span></td>
        <td><span class="arithmatex">\(16\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(p[3]+{v}[2][4]=9+7>{v}[2][9]=9\)</span>: <span class="arithmatex">\({v}[3][9]\leftarrow 16\)</span>, <span class="arithmatex">\({s}[3][9]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(10\)</span></td>
        <td><span class="arithmatex">\(18\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(p[3]+{v}[2][5]=9+9>{v}[2][10]=9\)</span>: <span class="arithmatex">\({v}[3][10]\leftarrow 18\)</span>, <span class="arithmatex">\({s}[3][10]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_4\)</span>: <span class="arithmatex">\({v}[4][0]\leftarrow {v}[3][0]=0\)</span>, <span class="arithmatex">\({s}[4][0]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_4\)</span>: <span class="arithmatex">\({v}[4][1]\leftarrow {v}[3][1]=2\)</span>, <span class="arithmatex">\({s}[4][1]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_4\)</span>: <span class="arithmatex">\({v}[4][2]\leftarrow {v}[3][2]=2\)</span>, <span class="arithmatex">\({s}[4][2]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_4\)</span>: <span class="arithmatex">\({v}[4][3]\leftarrow {v}[3][3]=2\)</span>, <span class="arithmatex">\({s}[4][3]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(7\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_4\)</span>: <span class="arithmatex">\({v}[4][4]\leftarrow {v}[3][4]=7\)</span>, <span class="arithmatex">\({s}[4][4]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(9\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_4\)</span>: <span class="arithmatex">\({v}[4][5]\leftarrow {v}[3][5]=9\)</span>, <span class="arithmatex">\({s}[4][5]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(11\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_4\)</span>: <span class="arithmatex">\({v}[4][6]\leftarrow {v}[3][6]=11\)</span>, <span class="arithmatex">\({s}[4][6]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(7\)</span></td>
        <td><span class="arithmatex">\(12\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(p[4]+{v}[3][0]=12+0>{v}[3][7]=11\)</span>: <span class="arithmatex">\({v}[4][7]\leftarrow 12\)</span>, <span class="arithmatex">\({s}[4][7]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(8\)</span></td>
        <td><span class="arithmatex">\(14\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(p[4]+{v}[3][1]=12+2>{v}[3][8]=11\)</span>: <span class="arithmatex">\({v}[4][8]\leftarrow 14\)</span>, <span class="arithmatex">\({s}[4][8]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(9\)</span></td>
        <td><span class="arithmatex">\(16\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(p[4]+{v}[3][2]=12+2\le {v}[3][9]=16\)</span>: <span class="arithmatex">\({v}[4][9]\leftarrow 16\)</span>, <span class="arithmatex">\({s}[4][9]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(10\)</span></td>
        <td><span class="arithmatex">\(18\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(p[4]+{v}[3][3]=12+2\le {v}[3][10]=18\)</span>: <span class="arithmatex">\({v}[4][10]\leftarrow 18\)</span>, <span class="arithmatex">\({s}[4][10]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_5\)</span>: <span class="arithmatex">\({v}[5][0]\leftarrow {v}[4][0]=0\)</span>, <span class="arithmatex">\({s}[5][0]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_5\)</span>: <span class="arithmatex">\({v}[5][1]\leftarrow {v}[4][1]=2\)</span>, <span class="arithmatex">\({s}[5][1]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_5\)</span>: <span class="arithmatex">\({v}[5][2]\leftarrow {v}[4][2]=2\)</span>, <span class="arithmatex">\({s}[5][2]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_5\)</span>: <span class="arithmatex">\({v}[5][3]\leftarrow {v}[4][3]=2\)</span>, <span class="arithmatex">\({s}[5][3]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(7\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_5\)</span>: <span class="arithmatex">\({v}[5][4]\leftarrow {v}[4][4]=7\)</span>, <span class="arithmatex">\({s}[5][4]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(9\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_5\)</span>: <span class="arithmatex">\({v}[5][5]\leftarrow {v}[4][5]=9\)</span>, <span class="arithmatex">\({s}[5][5]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(11\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_5\)</span>: <span class="arithmatex">\({v}[5][6]\leftarrow {v}[4][6]=11\)</span>, <span class="arithmatex">\({s}[5][6]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(7\)</span></td>
        <td><span class="arithmatex">\(12\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(k<w_5\)</span>: <span class="arithmatex">\({v}[5][7]\leftarrow {v}[4][7]=12\)</span>, <span class="arithmatex">\({s}[5][7]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(8\)</span></td>
        <td><span class="arithmatex">\(14\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(p[5]+{v}[4][0]=14+0\le {v}[4][8]=14\)</span>: <span class="arithmatex">\({v}[5][8]\leftarrow 14\)</span>, <span class="arithmatex">\({s}[5][8]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(9\)</span></td>
        <td><span class="arithmatex">\(16\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(p[5]+{v}[4][1]=14+2\le {v}[4][9]=16\)</span>: <span class="arithmatex">\({v}[5][9]\leftarrow 16\)</span>, <span class="arithmatex">\({s}[5][9]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(10\)</span></td>
        <td><span class="arithmatex">\(18\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(p[5]+{v}[4][2]=14+2\le {v}[4][10]=18\)</span>: <span class="arithmatex">\({v}[5][10]\leftarrow 18\)</span>, <span class="arithmatex">\({s}[5][10]\leftarrow 0\)</span></td>
        </tr>
        </table></div>

        This is the matrix ${v}$ after the execution of the DP algorithm:

        <div class="tabella" markdown="0"><table>
        <tr>
        <td><span class="arithmatex">\({v}[i][k]\)</span></td>
        <td><span class="arithmatex">\(k=0\)</span></td>
        <td><span class="arithmatex">\(k=1\)</span></td>
        <td><span class="arithmatex">\(k=2\)</span></td>
        <td><span class="arithmatex">\(k=3\)</span></td>
        <td><span class="arithmatex">\(k=4\)</span></td>
        <td><span class="arithmatex">\(k=5\)</span></td>
        <td><span class="arithmatex">\(k=6\)</span></td>
        <td><span class="arithmatex">\(k=7\)</span></td>
        <td><span class="arithmatex">\(k=8\)</span></td>
        <td><span class="arithmatex">\(k=9\)</span></td>
        <td><span class="arithmatex">\(k=10\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=0\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=1\)</span></td>
        <td>0</td>
        <td>2</td>
        <td>2</td>
        <td>2</td>
        <td>2</td>
        <td>2</td>
        <td>2</td>
        <td>2</td>
        <td>2</td>
        <td>2</td>
        <td>2</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=2\)</span></td>
        <td>0</td>
        <td>2</td>
        <td>2</td>
        <td>2</td>
        <td>7</td>
        <td>9</td>
        <td>9</td>
        <td>9</td>
        <td>9</td>
        <td>9</td>
        <td>9</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=3\)</span></td>
        <td>0</td>
        <td>2</td>
        <td>2</td>
        <td>2</td>
        <td>7</td>
        <td>9</td>
        <td>11</td>
        <td>11</td>
        <td>11</td>
        <td>16</td>
        <td>18</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=4\)</span></td>
        <td>0</td>
        <td>2</td>
        <td>2</td>
        <td>2</td>
        <td>7</td>
        <td>9</td>
        <td>11</td>
        <td>12</td>
        <td>14</td>
        <td>16</td>
        <td>18</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=5\)</span></td>
        <td>0</td>
        <td>2</td>
        <td>2</td>
        <td>2</td>
        <td>7</td>
        <td>9</td>
        <td>11</td>
        <td>12</td>
        <td>14</td>
        <td>16</td>
        <td>18</td>
        </tr>
        </table></div>

        This is the matrix ${s}$ after the execution of the DP algorithm:

        <div class="tabella" markdown="0"><table>
        <tr>
        <td><span class="arithmatex">\({s}[i][k]\)</span></td>
        <td><span class="arithmatex">\(k=0\)</span></td>
        <td><span class="arithmatex">\(k=1\)</span></td>
        <td><span class="arithmatex">\(k=2\)</span></td>
        <td><span class="arithmatex">\(k=3\)</span></td>
        <td><span class="arithmatex">\(k=4\)</span></td>
        <td><span class="arithmatex">\(k=5\)</span></td>
        <td><span class="arithmatex">\(k=6\)</span></td>
        <td><span class="arithmatex">\(k=7\)</span></td>
        <td><span class="arithmatex">\(k=8\)</span></td>
        <td><span class="arithmatex">\(k=9\)</span></td>
        <td><span class="arithmatex">\(k=10\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=0\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=1\)</span></td>
        <td>0</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=2\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=3\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=4\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>1</td>
        <td>1</td>
        <td>0</td>
        <td>0</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=5\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        </tr>
        </table></div>

    2. We have the following matrix ${s}$:

        <div class="tabella" markdown="0"><table>
        <tr>
        <td><span class="arithmatex">\({s}[i][k]\)</span></td>
        <td><span class="arithmatex">\(k=0\)</span></td>
        <td><span class="arithmatex">\(k=1\)</span></td>
        <td><span class="arithmatex">\(k=2\)</span></td>
        <td><span class="arithmatex">\(k=3\)</span></td>
        <td><span class="arithmatex">\(k=4\)</span></td>
        <td><span class="arithmatex">\(k=5\)</span></td>
        <td><span class="arithmatex">\(k=6\)</span></td>
        <td><span class="arithmatex">\(k=7\)</span></td>
        <td><span class="arithmatex">\(k=8\)</span></td>
        <td><span class="arithmatex">\(k=9\)</span></td>
        <td><span class="arithmatex">\(k=10\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=0\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=1\)</span></td>
        <td>0</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=2\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=3\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=4\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>1</td>
        <td>1</td>
        <td>0</td>
        <td>0</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=5\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        </tr>
        </table></div>

        We can reconstruct an optimal solution by starting from $i=5$ and $k=10$ as follows:

        <div class="tabella" markdown="0"><table>
        <tr>
        <th>Iteration</th>
        <th><span class="arithmatex">\(i\)</span></th>
        <th><span class="arithmatex">\(k\)</span></th>
        <th><span class="arithmatex">\({s}[i][k]\)</span></th>
        <th><span class="arithmatex">\(x[1]\)</span></th>
        <th><span class="arithmatex">\(x[2]\)</span></th>
        <th><span class="arithmatex">\(x[3]\)</span></th>
        <th><span class="arithmatex">\(x[4]\)</span></th>
        <th><span class="arithmatex">\(x[5]\)</span></th>
        <th>Action</th>
        </tr>
        <tr>
        <td>\-</td>
        <td>\-</td>
        <td>\-</td>
        <td>\-</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(k=10\)</span></td>
        </tr>
        <tr>
        <td>1</td>
        <td>5</td>
        <td>10</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>no update</td>
        </tr>
        <tr>
        <td>2</td>
        <td>4</td>
        <td>10</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>no update</td>
        </tr>
        <tr>
        <td>3</td>
        <td>3</td>
        <td>10</td>
        <td>1</td>
        <td>0</td>
        <td>0</td>
        <td class="cella-blu">1</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(x[3]\leftarrow 1\)</span>, <span class="arithmatex">\(k\leftarrow 10-5=5\)</span></td>
        </tr>
        <tr>
        <td>4</td>
        <td>2</td>
        <td>5</td>
        <td>1</td>
        <td>0</td>
        <td class="cella-blu">1</td>
        <td class="cella-blu">1</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(x[2]\leftarrow 1\)</span>, <span class="arithmatex">\(k\leftarrow 5-4=1\)</span></td>
        </tr>
        <tr>
        <td>5</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td class="cella-blu">1</td>
        <td class="cella-blu">1</td>
        <td class="cella-blu">1</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(x[1]\leftarrow 1\)</span>, <span class="arithmatex">\(k\leftarrow 1-1=0\)</span></td>
        </tr>
        </table></div>

        Thus, the vector

        $$
        (1,1,1,0,0)
        $$

        is an optimal solution. The optimal value is

        $$
        {v}[5][10]=18.
        $$

## A DP algorithm for the Unbounded Knapsack Problem

<a id="esercizio-15-6"></a>

!!! esercizio "Exercise 15.6: Exercise 1: Unbounded Knapsack Problem"

    Consider the following UKP instance, where the knapsack has capacity $c=7$, each item type is available in infinitely many copies, and the profits and weights associated with the item types are:

    <div class="tabella" markdown="0"><table>
    <tr>
    <th></th>
    <th><span class="arithmatex">\(i=1\)</span></th>
    <th><span class="arithmatex">\(i=2\)</span></th>
    <th><span class="arithmatex">\(i=3\)</span></th>
    <th><span class="arithmatex">\(i=4\)</span></th>
    </tr>
    <tr>
    <td><span class="arithmatex">\(p_i\)</span></td>
    <td>4</td>
    <td>5</td>
    <td>10</td>
    <td>11</td>
    </tr>
    <tr>
    <td><span class="arithmatex">\(w_i\)</span></td>
    <td>2</td>
    <td>3</td>
    <td>5</td>
    <td>6</td>
    </tr>
    </table></div>

    **Questions**

    1. Show the execution of the first bottom-up DP algorithm by reporting, for each iteration, the values of the vector $v$ and the values of the vector $s$.

    2. Using the vector $s$, reconstruct an optimal solution in integer notation $(x_1,x_2,\dots,x_n)$, and report the optimal value.

    3. Show the execution of the second bottom-up DP algorithm by reporting, for each iteration, the values of the matrices $v$ and $s$.

    4. Using the matrix $s$, reconstruct an optimal solution in integer notation $(x_1,x_2,\dots,x_n)$, and report the optimal value.

??? soluzione "Solution"

    1. Step-by-step execution of the first bottom-up DP algorithm

        For each step of the DP algorithm, the table shows the values of $k$ and $i$, the cells $v[k]$ and $s[k]$, the current value of $m$, the current value of $t$, and the operation performed.

        <div class="tabella" markdown="0"><table>
        <tr>
        <th><span class="arithmatex">\(k\)</span></th>
        <th><span class="arithmatex">\(i\)</span></th>
        <th><span class="arithmatex">\(v[k]\)</span></th>
        <th><span class="arithmatex">\(s[k]\)</span></th>
        <th><span class="arithmatex">\(m\)</span></th>
        <th><span class="arithmatex">\(t\)</span></th>
        <th>Action</th>
        </tr>
        <tr>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td class="cella-blu">0</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(v[0]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>1</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(m\leftarrow 0\)</span>, <span class="arithmatex">\(t\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>1</td>
        <td>1</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(w[1]=2>k=1\)</span>: no update</td>
        </tr>
        <tr>
        <td>1</td>
        <td>2</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(w[2]=3>k=1\)</span>: no update</td>
        </tr>
        <tr>
        <td>1</td>
        <td>3</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(w[3]=5>k=1\)</span>: no update</td>
        </tr>
        <tr>
        <td>1</td>
        <td>4</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(w[4]=6>k=1\)</span>: no update</td>
        </tr>
        <tr>
        <td>1</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td class="cella-blu">0</td>
        <td class="cella-blu">0</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(v[1]\leftarrow 0\)</span>, <span class="arithmatex">\(s[1]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>2</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(m\leftarrow 0\)</span>, <span class="arithmatex">\(t\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>2</td>
        <td>1</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>4</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[1]+v[0]=4+0=4>m=0\)</span>: <span class="arithmatex">\(m\leftarrow 4\)</span>, <span class="arithmatex">\(t\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td>2</td>
        <td>2</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>4</td>
        <td>1</td>
        <td><span class="arithmatex">\(w[2]=3>k=2\)</span>: no update</td>
        </tr>
        <tr>
        <td>2</td>
        <td>3</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>4</td>
        <td>1</td>
        <td><span class="arithmatex">\(w[3]=5>k=2\)</span>: no update</td>
        </tr>
        <tr>
        <td>2</td>
        <td>4</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>4</td>
        <td>1</td>
        <td><span class="arithmatex">\(w[4]=6>k=2\)</span>: no update</td>
        </tr>
        <tr>
        <td>2</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td class="cella-blu">4</td>
        <td class="cella-blu">1</td>
        <td>4</td>
        <td>1</td>
        <td><span class="arithmatex">\(v[2]\leftarrow 4\)</span>, <span class="arithmatex">\(s[2]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td>3</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(m\leftarrow 0\)</span>, <span class="arithmatex">\(t\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>3</td>
        <td>1</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>4</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[1]+v[1]=4+0=4>m=0\)</span>: <span class="arithmatex">\(m\leftarrow 4\)</span>, <span class="arithmatex">\(t\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td>3</td>
        <td>2</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>5</td>
        <td>2</td>
        <td><span class="arithmatex">\(p[2]+v[0]=5+0=5>m=4\)</span>: <span class="arithmatex">\(m\leftarrow 5\)</span>, <span class="arithmatex">\(t\leftarrow 2\)</span></td>
        </tr>
        <tr>
        <td>3</td>
        <td>3</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>5</td>
        <td>2</td>
        <td><span class="arithmatex">\(w[3]=5>k=3\)</span>: no update</td>
        </tr>
        <tr>
        <td>3</td>
        <td>4</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>5</td>
        <td>2</td>
        <td><span class="arithmatex">\(w[4]=6>k=3\)</span>: no update</td>
        </tr>
        <tr>
        <td>3</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td class="cella-blu">5</td>
        <td class="cella-blu">2</td>
        <td>5</td>
        <td>2</td>
        <td><span class="arithmatex">\(v[3]\leftarrow 5\)</span>, <span class="arithmatex">\(s[3]\leftarrow 2\)</span></td>
        </tr>
        <tr>
        <td>4</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(m\leftarrow 0\)</span>, <span class="arithmatex">\(t\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>4</td>
        <td>1</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>8</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[1]+v[2]=4+4=8>m=0\)</span>: <span class="arithmatex">\(m\leftarrow 8\)</span>, <span class="arithmatex">\(t\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td>4</td>
        <td>2</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>8</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[2]+v[1]=5+0=5\le m=8\)</span>: no update</td>
        </tr>
        <tr>
        <td>4</td>
        <td>3</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>8</td>
        <td>1</td>
        <td><span class="arithmatex">\(w[3]=5>k=4\)</span>: no update</td>
        </tr>
        <tr>
        <td>4</td>
        <td>4</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>8</td>
        <td>1</td>
        <td><span class="arithmatex">\(w[4]=6>k=4\)</span>: no update</td>
        </tr>
        <tr>
        <td>4</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td class="cella-blu">8</td>
        <td class="cella-blu">1</td>
        <td>8</td>
        <td>1</td>
        <td><span class="arithmatex">\(v[4]\leftarrow 8\)</span>, <span class="arithmatex">\(s[4]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td>5</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(m\leftarrow 0\)</span>, <span class="arithmatex">\(t\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>5</td>
        <td>1</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>9</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[1]+v[3]=4+5=9>m=0\)</span>: <span class="arithmatex">\(m\leftarrow 9\)</span>, <span class="arithmatex">\(t\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td>5</td>
        <td>2</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>9</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[2]+v[2]=5+4=9\le m=9\)</span>: no update</td>
        </tr>
        <tr>
        <td>5</td>
        <td>3</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>10</td>
        <td>3</td>
        <td><span class="arithmatex">\(p[3]+v[0]=10+0=10>m=9\)</span>: <span class="arithmatex">\(m\leftarrow 10\)</span>, <span class="arithmatex">\(t\leftarrow 3\)</span></td>
        </tr>
        <tr>
        <td>5</td>
        <td>4</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>10</td>
        <td>3</td>
        <td><span class="arithmatex">\(w[4]=6>k=5\)</span>: no update</td>
        </tr>
        <tr>
        <td>5</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td class="cella-blu">10</td>
        <td class="cella-blu">3</td>
        <td>10</td>
        <td>3</td>
        <td><span class="arithmatex">\(v[5]\leftarrow 10\)</span>, <span class="arithmatex">\(s[5]\leftarrow 3\)</span></td>
        </tr>
        <tr>
        <td>6</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(m\leftarrow 0\)</span>, <span class="arithmatex">\(t\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>6</td>
        <td>1</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>12</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[1]+v[4]=4+8=12>m=0\)</span>: <span class="arithmatex">\(m\leftarrow 12\)</span>, <span class="arithmatex">\(t\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td>6</td>
        <td>2</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>12</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[2]+v[3]=5+5=10\le m=12\)</span>: no update</td>
        </tr>
        <tr>
        <td>6</td>
        <td>3</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>12</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[3]+v[1]=10+0=10\le m=12\)</span>: no update</td>
        </tr>
        <tr>
        <td>6</td>
        <td>4</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>12</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[4]+v[0]=11+0=11\le m=12\)</span>: no update</td>
        </tr>
        <tr>
        <td>6</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td class="cella-blu">12</td>
        <td class="cella-blu">1</td>
        <td>12</td>
        <td>1</td>
        <td><span class="arithmatex">\(v[6]\leftarrow 12\)</span>, <span class="arithmatex">\(s[6]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td>7</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(m\leftarrow 0\)</span>, <span class="arithmatex">\(t\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>7</td>
        <td>1</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>14</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[1]+v[5]=4+10=14>m=0\)</span>: <span class="arithmatex">\(m\leftarrow 14\)</span>, <span class="arithmatex">\(t\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td>7</td>
        <td>2</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>14</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[2]+v[4]=5+8=13\le m=14\)</span>: no update</td>
        </tr>
        <tr>
        <td>7</td>
        <td>3</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>14</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[3]+v[2]=10+4=14\le m=14\)</span>: no update</td>
        </tr>
        <tr>
        <td>7</td>
        <td>4</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>14</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[4]+v[1]=11+0=11\le m=14\)</span>: no update</td>
        </tr>
        <tr>
        <td>7</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td class="cella-blu">14</td>
        <td class="cella-blu">1</td>
        <td>14</td>
        <td>1</td>
        <td><span class="arithmatex">\(v[7]\leftarrow 14\)</span>, <span class="arithmatex">\(s[7]\leftarrow 1\)</span></td>
        </tr>
        </table></div>

        This is the vector $v$ after the execution of the first DP algorithm:

        <div class="tabella" markdown="0"><table>
        <tr>
        <th></th>
        <th><span class="arithmatex">\(k=0\)</span></th>
        <th><span class="arithmatex">\(k=1\)</span></th>
        <th><span class="arithmatex">\(k=2\)</span></th>
        <th><span class="arithmatex">\(k=3\)</span></th>
        <th><span class="arithmatex">\(k=4\)</span></th>
        <th><span class="arithmatex">\(k=5\)</span></th>
        <th><span class="arithmatex">\(k=6\)</span></th>
        <th><span class="arithmatex">\(k=7\)</span></th>
        </tr>
        <tr>
        <td><span class="arithmatex">\(v[k]\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>4</td>
        <td>5</td>
        <td>8</td>
        <td>10</td>
        <td>12</td>
        <td>14</td>
        </tr>
        </table></div>

        This is the vector $s$ after the execution of the first DP algorithm:

        <div class="tabella" markdown="0"><table>
        <tr>
        <th></th>
        <th><span class="arithmatex">\(k=0\)</span></th>
        <th><span class="arithmatex">\(k=1\)</span></th>
        <th><span class="arithmatex">\(k=2\)</span></th>
        <th><span class="arithmatex">\(k=3\)</span></th>
        <th><span class="arithmatex">\(k=4\)</span></th>
        <th><span class="arithmatex">\(k=5\)</span></th>
        <th><span class="arithmatex">\(k=6\)</span></th>
        <th><span class="arithmatex">\(k=7\)</span></th>
        </tr>
        <tr>
        <td><span class="arithmatex">\(s[k]\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>1</td>
        <td>2</td>
        <td>1</td>
        <td>3</td>
        <td>1</td>
        <td>1</td>
        </tr>
        </table></div>

    2. We have the following vector $s$:

        <div class="tabella" markdown="0"><table>
        <tr>
        <th></th>
        <th><span class="arithmatex">\(k=0\)</span></th>
        <th><span class="arithmatex">\(k=1\)</span></th>
        <th><span class="arithmatex">\(k=2\)</span></th>
        <th><span class="arithmatex">\(k=3\)</span></th>
        <th><span class="arithmatex">\(k=4\)</span></th>
        <th><span class="arithmatex">\(k=5\)</span></th>
        <th><span class="arithmatex">\(k=6\)</span></th>
        <th><span class="arithmatex">\(k=7\)</span></th>
        </tr>
        <tr>
        <td><span class="arithmatex">\(s[k]\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>1</td>
        <td>2</td>
        <td>1</td>
        <td>3</td>
        <td>1</td>
        <td>1</td>
        </tr>
        </table></div>

        We can reconstruct an optimal solution by starting from $k=7$ as follows:

        <div class="tabella" markdown="0"><table>
        <tr>
        <th>Iteration</th>
        <th><span class="arithmatex">\(k\)</span></th>
        <th><span class="arithmatex">\(s[k]\)</span></th>
        <th><span class="arithmatex">\(x[1]\)</span></th>
        <th><span class="arithmatex">\(x[2]\)</span></th>
        <th><span class="arithmatex">\(x[3]\)</span></th>
        <th><span class="arithmatex">\(x[4]\)</span></th>
        <th>Action</th>
        </tr>
        <tr>
        <td>\-</td>
        <td>\-</td>
        <td>\-</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(k=7\)</span></td>
        </tr>
        <tr>
        <td>1</td>
        <td>7</td>
        <td>1</td>
        <td class="cella-blu">1</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(x[1]\leftarrow 1\)</span>, <span class="arithmatex">\(k\leftarrow 7-2=5\)</span></td>
        </tr>
        <tr>
        <td>2</td>
        <td>5</td>
        <td>3</td>
        <td class="cella-blu">1</td>
        <td>0</td>
        <td class="cella-blu">1</td>
        <td>0</td>
        <td><span class="arithmatex">\(x[3]\leftarrow 1\)</span>, <span class="arithmatex">\(k\leftarrow 5-5=0\)</span></td>
        </tr>
        </table></div>

        Thus, the vector

        $$
        (1,0,1,0)
        $$

        is an optimal solution. The optimal value is

        $$
        v[7]=14.
        $$

    3. Step-by-step execution of the second bottom-up DP algorithm

        For each step of the DP algorithm, the table shows the values of $i$ and $k$, the cells $v[i][k]$ and $s[i][k]$, and the operation performed. All entries in row $i=0$ are initialized to $0$.

        <div class="tabella" markdown="0"><table>
        <tr>
        <th><span class="arithmatex">\(i\)</span></th>
        <th><span class="arithmatex">\(k\)</span></th>
        <th><span class="arithmatex">\(v[i][k]\)</span></th>
        <th><span class="arithmatex">\(s[i][k]\)</span></th>
        <th>Action</th>
        </tr>
        <tr>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(v[0][0]\leftarrow 0\)</span>, <span class="arithmatex">\(s[0][0]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>0</td>
        <td>1</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(v[0][1]\leftarrow 0\)</span>, <span class="arithmatex">\(s[0][1]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>0</td>
        <td>2</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(v[0][2]\leftarrow 0\)</span>, <span class="arithmatex">\(s[0][2]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>0</td>
        <td>3</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(v[0][3]\leftarrow 0\)</span>, <span class="arithmatex">\(s[0][3]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>0</td>
        <td>4</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(v[0][4]\leftarrow 0\)</span>, <span class="arithmatex">\(s[0][4]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>0</td>
        <td>5</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(v[0][5]\leftarrow 0\)</span>, <span class="arithmatex">\(s[0][5]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>0</td>
        <td>6</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(v[0][6]\leftarrow 0\)</span>, <span class="arithmatex">\(s[0][6]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>0</td>
        <td>7</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(v[0][7]\leftarrow 0\)</span>, <span class="arithmatex">\(s[0][7]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>1</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(k<w[1]\)</span>: <span class="arithmatex">\(v[1][0]\leftarrow v[0][0]=0\)</span>, <span class="arithmatex">\(s[1][0]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>1</td>
        <td>1</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(k<w[1]\)</span>: <span class="arithmatex">\(v[1][1]\leftarrow v[0][1]=0\)</span>, <span class="arithmatex">\(s[1][1]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>1</td>
        <td>2</td>
        <td>4</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[1]+v[1][0]=4+0>v[0][2]=0\)</span>: <span class="arithmatex">\(v[1][2]\leftarrow 4\)</span>, <span class="arithmatex">\(s[1][2]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td>1</td>
        <td>3</td>
        <td>4</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[1]+v[1][1]=4+0>v[0][3]=0\)</span>: <span class="arithmatex">\(v[1][3]\leftarrow 4\)</span>, <span class="arithmatex">\(s[1][3]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td>1</td>
        <td>4</td>
        <td>8</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[1]+v[1][2]=4+4>v[0][4]=0\)</span>: <span class="arithmatex">\(v[1][4]\leftarrow 8\)</span>, <span class="arithmatex">\(s[1][4]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td>1</td>
        <td>5</td>
        <td>8</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[1]+v[1][3]=4+4>v[0][5]=0\)</span>: <span class="arithmatex">\(v[1][5]\leftarrow 8\)</span>, <span class="arithmatex">\(s[1][5]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td>1</td>
        <td>6</td>
        <td>12</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[1]+v[1][4]=4+8>v[0][6]=0\)</span>: <span class="arithmatex">\(v[1][6]\leftarrow 12\)</span>, <span class="arithmatex">\(s[1][6]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td>1</td>
        <td>7</td>
        <td>12</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[1]+v[1][5]=4+8>v[0][7]=0\)</span>: <span class="arithmatex">\(v[1][7]\leftarrow 12\)</span>, <span class="arithmatex">\(s[1][7]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td>2</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(k<w[2]\)</span>: <span class="arithmatex">\(v[2][0]\leftarrow v[1][0]=0\)</span>, <span class="arithmatex">\(s[2][0]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>2</td>
        <td>1</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(k<w[2]\)</span>: <span class="arithmatex">\(v[2][1]\leftarrow v[1][1]=0\)</span>, <span class="arithmatex">\(s[2][1]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>2</td>
        <td>2</td>
        <td>4</td>
        <td>0</td>
        <td><span class="arithmatex">\(k<w[2]\)</span>: <span class="arithmatex">\(v[2][2]\leftarrow v[1][2]=4\)</span>, <span class="arithmatex">\(s[2][2]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>2</td>
        <td>3</td>
        <td>5</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[2]+v[2][0]=5+0>v[1][3]=4\)</span>: <span class="arithmatex">\(v[2][3]\leftarrow 5\)</span>, <span class="arithmatex">\(s[2][3]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td>2</td>
        <td>4</td>
        <td>8</td>
        <td>0</td>
        <td><span class="arithmatex">\(p[2]+v[2][1]=5+0\le v[1][4]=8\)</span>: <span class="arithmatex">\(v[2][4]\leftarrow 8\)</span>, <span class="arithmatex">\(s[2][4]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>2</td>
        <td>5</td>
        <td>9</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[2]+v[2][2]=5+4>v[1][5]=8\)</span>: <span class="arithmatex">\(v[2][5]\leftarrow 9\)</span>, <span class="arithmatex">\(s[2][5]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td>2</td>
        <td>6</td>
        <td>12</td>
        <td>0</td>
        <td><span class="arithmatex">\(p[2]+v[2][3]=5+5\le v[1][6]=12\)</span>: <span class="arithmatex">\(v[2][6]\leftarrow 12\)</span>, <span class="arithmatex">\(s[2][6]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>2</td>
        <td>7</td>
        <td>13</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[2]+v[2][4]=5+8>v[1][7]=12\)</span>: <span class="arithmatex">\(v[2][7]\leftarrow 13\)</span>, <span class="arithmatex">\(s[2][7]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td>3</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(k<w[3]\)</span>: <span class="arithmatex">\(v[3][0]\leftarrow v[2][0]=0\)</span>, <span class="arithmatex">\(s[3][0]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>3</td>
        <td>1</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(k<w[3]\)</span>: <span class="arithmatex">\(v[3][1]\leftarrow v[2][1]=0\)</span>, <span class="arithmatex">\(s[3][1]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>3</td>
        <td>2</td>
        <td>4</td>
        <td>0</td>
        <td><span class="arithmatex">\(k<w[3]\)</span>: <span class="arithmatex">\(v[3][2]\leftarrow v[2][2]=4\)</span>, <span class="arithmatex">\(s[3][2]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>3</td>
        <td>3</td>
        <td>5</td>
        <td>0</td>
        <td><span class="arithmatex">\(k<w[3]\)</span>: <span class="arithmatex">\(v[3][3]\leftarrow v[2][3]=5\)</span>, <span class="arithmatex">\(s[3][3]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>3</td>
        <td>4</td>
        <td>8</td>
        <td>0</td>
        <td><span class="arithmatex">\(k<w[3]\)</span>: <span class="arithmatex">\(v[3][4]\leftarrow v[2][4]=8\)</span>, <span class="arithmatex">\(s[3][4]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>3</td>
        <td>5</td>
        <td>10</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[3]+v[3][0]=10+0>v[2][5]=9\)</span>: <span class="arithmatex">\(v[3][5]\leftarrow 10\)</span>, <span class="arithmatex">\(s[3][5]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td>3</td>
        <td>6</td>
        <td>12</td>
        <td>0</td>
        <td><span class="arithmatex">\(p[3]+v[3][1]=10+0\le v[2][6]=12\)</span>: <span class="arithmatex">\(v[3][6]\leftarrow 12\)</span>, <span class="arithmatex">\(s[3][6]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>3</td>
        <td>7</td>
        <td>14</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[3]+v[3][2]=10+4>v[2][7]=13\)</span>: <span class="arithmatex">\(v[3][7]\leftarrow 14\)</span>, <span class="arithmatex">\(s[3][7]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td>4</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(k<w[4]\)</span>: <span class="arithmatex">\(v[4][0]\leftarrow v[3][0]=0\)</span>, <span class="arithmatex">\(s[4][0]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>4</td>
        <td>1</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(k<w[4]\)</span>: <span class="arithmatex">\(v[4][1]\leftarrow v[3][1]=0\)</span>, <span class="arithmatex">\(s[4][1]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>4</td>
        <td>2</td>
        <td>4</td>
        <td>0</td>
        <td><span class="arithmatex">\(k<w[4]\)</span>: <span class="arithmatex">\(v[4][2]\leftarrow v[3][2]=4\)</span>, <span class="arithmatex">\(s[4][2]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>4</td>
        <td>3</td>
        <td>5</td>
        <td>0</td>
        <td><span class="arithmatex">\(k<w[4]\)</span>: <span class="arithmatex">\(v[4][3]\leftarrow v[3][3]=5\)</span>, <span class="arithmatex">\(s[4][3]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>4</td>
        <td>4</td>
        <td>8</td>
        <td>0</td>
        <td><span class="arithmatex">\(k<w[4]\)</span>: <span class="arithmatex">\(v[4][4]\leftarrow v[3][4]=8\)</span>, <span class="arithmatex">\(s[4][4]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>4</td>
        <td>5</td>
        <td>10</td>
        <td>0</td>
        <td><span class="arithmatex">\(k<w[4]\)</span>: <span class="arithmatex">\(v[4][5]\leftarrow v[3][5]=10\)</span>, <span class="arithmatex">\(s[4][5]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>4</td>
        <td>6</td>
        <td>12</td>
        <td>0</td>
        <td><span class="arithmatex">\(p[4]+v[4][0]=11+0\le v[3][6]=12\)</span>: <span class="arithmatex">\(v[4][6]\leftarrow 12\)</span>, <span class="arithmatex">\(s[4][6]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>4</td>
        <td>7</td>
        <td>14</td>
        <td>0</td>
        <td><span class="arithmatex">\(p[4]+v[4][1]=11+0\le v[3][7]=14\)</span>: <span class="arithmatex">\(v[4][7]\leftarrow 14\)</span>, <span class="arithmatex">\(s[4][7]\leftarrow 0\)</span></td>
        </tr>
        </table></div>

        This is the matrix $v$ after the execution of the second DP algorithm:

        <div class="tabella" markdown="0"><table>
        <tr>
        <td><span class="arithmatex">\(v[i][k]\)</span></td>
        <td><span class="arithmatex">\(k=0\)</span></td>
        <td><span class="arithmatex">\(k=1\)</span></td>
        <td><span class="arithmatex">\(k=2\)</span></td>
        <td><span class="arithmatex">\(k=3\)</span></td>
        <td><span class="arithmatex">\(k=4\)</span></td>
        <td><span class="arithmatex">\(k=5\)</span></td>
        <td><span class="arithmatex">\(k=6\)</span></td>
        <td><span class="arithmatex">\(k=7\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=0\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=1\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>4</td>
        <td>4</td>
        <td>8</td>
        <td>8</td>
        <td>12</td>
        <td>12</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=2\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>4</td>
        <td>5</td>
        <td>8</td>
        <td>9</td>
        <td>12</td>
        <td>13</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=3\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>4</td>
        <td>5</td>
        <td>8</td>
        <td>10</td>
        <td>12</td>
        <td>14</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=4\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>4</td>
        <td>5</td>
        <td>8</td>
        <td>10</td>
        <td>12</td>
        <td>14</td>
        </tr>
        </table></div>

        This is the matrix $s$ after the execution of the second DP algorithm:

        <div class="tabella" markdown="0"><table>
        <tr>
        <td><span class="arithmatex">\(s[i][k]\)</span></td>
        <td><span class="arithmatex">\(k=0\)</span></td>
        <td><span class="arithmatex">\(k=1\)</span></td>
        <td><span class="arithmatex">\(k=2\)</span></td>
        <td><span class="arithmatex">\(k=3\)</span></td>
        <td><span class="arithmatex">\(k=4\)</span></td>
        <td><span class="arithmatex">\(k=5\)</span></td>
        <td><span class="arithmatex">\(k=6\)</span></td>
        <td><span class="arithmatex">\(k=7\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=0\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=1\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=2\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>1</td>
        <td>0</td>
        <td>1</td>
        <td>0</td>
        <td>1</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=3\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>1</td>
        <td>0</td>
        <td>1</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=4\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        </tr>
        </table></div>

    4. We have the following matrix $s$:

        <div class="tabella" markdown="0"><table>
        <tr>
        <td><span class="arithmatex">\(s[i][k]\)</span></td>
        <td><span class="arithmatex">\(k=0\)</span></td>
        <td><span class="arithmatex">\(k=1\)</span></td>
        <td><span class="arithmatex">\(k=2\)</span></td>
        <td><span class="arithmatex">\(k=3\)</span></td>
        <td><span class="arithmatex">\(k=4\)</span></td>
        <td><span class="arithmatex">\(k=5\)</span></td>
        <td><span class="arithmatex">\(k=6\)</span></td>
        <td><span class="arithmatex">\(k=7\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=0\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=1\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=2\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>1</td>
        <td>0</td>
        <td>1</td>
        <td>0</td>
        <td>1</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=3\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>1</td>
        <td>0</td>
        <td>1</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=4\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        </tr>
        </table></div>

        We can reconstruct an optimal solution by starting from $i=4$ and $k=7$ as follows:

        <div class="tabella" markdown="0"><table>
        <tr>
        <th>Iteration</th>
        <th><span class="arithmatex">\(i\)</span></th>
        <th><span class="arithmatex">\(k\)</span></th>
        <th><span class="arithmatex">\(s[i][k]\)</span></th>
        <th><span class="arithmatex">\(x[1]\)</span></th>
        <th><span class="arithmatex">\(x[2]\)</span></th>
        <th><span class="arithmatex">\(x[3]\)</span></th>
        <th><span class="arithmatex">\(x[4]\)</span></th>
        <th>Action</th>
        </tr>
        <tr>
        <td>\-</td>
        <td>\-</td>
        <td>\-</td>
        <td>\-</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(i=4\)</span>, <span class="arithmatex">\(k=7\)</span></td>
        </tr>
        <tr>
        <td>1</td>
        <td>4</td>
        <td>7</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(i\leftarrow 3\)</span></td>
        </tr>
        <tr>
        <td>2</td>
        <td>3</td>
        <td>7</td>
        <td>1</td>
        <td>0</td>
        <td>0</td>
        <td class="cella-blu">1</td>
        <td>0</td>
        <td><span class="arithmatex">\(x[3]\leftarrow 1\)</span>, <span class="arithmatex">\(k\leftarrow 7-5=2\)</span></td>
        </tr>
        <tr>
        <td>3</td>
        <td>3</td>
        <td>2</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td class="cella-blu">1</td>
        <td>0</td>
        <td><span class="arithmatex">\(i\leftarrow 2\)</span></td>
        </tr>
        <tr>
        <td>4</td>
        <td>2</td>
        <td>2</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td class="cella-blu">1</td>
        <td>0</td>
        <td><span class="arithmatex">\(i\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td>5</td>
        <td>1</td>
        <td>2</td>
        <td>1</td>
        <td class="cella-blu">1</td>
        <td>0</td>
        <td class="cella-blu">1</td>
        <td>0</td>
        <td><span class="arithmatex">\(x[1]\leftarrow 1\)</span>, <span class="arithmatex">\(k\leftarrow 2-2=0\)</span></td>
        </tr>
        </table></div>

        Thus, the vector

        $$
        (1,0,1,0)
        $$

        is an optimal solution. The optimal value is

        $$
        v[4][7]=14.
        $$

<a id="esercizio-15-7"></a>

!!! esercizio "Exercise 15.7: Exercise 2: Unbounded Knapsack Problem"

    Consider the following UKP instance, where the knapsack has capacity $c=8$, each item type is available in infinitely many copies, and the profits and weights associated with the item types are:

    <div class="tabella" markdown="0"><table>
    <tr>
    <th></th>
    <th><span class="arithmatex">\(i=1\)</span></th>
    <th><span class="arithmatex">\(i=2\)</span></th>
    <th><span class="arithmatex">\(i=3\)</span></th>
    <th><span class="arithmatex">\(i=4\)</span></th>
    <th><span class="arithmatex">\(i=5\)</span></th>
    </tr>
    <tr>
    <td><span class="arithmatex">\(p_i\)</span></td>
    <td>2</td>
    <td>5</td>
    <td>7</td>
    <td>8</td>
    <td>10</td>
    </tr>
    <tr>
    <td><span class="arithmatex">\(w_i\)</span></td>
    <td>1</td>
    <td>2</td>
    <td>3</td>
    <td>4</td>
    <td>5</td>
    </tr>
    </table></div>

    **Questions**

    1. Show the execution of the first bottom-up DP algorithm by reporting, for each iteration, the values of the vector $v$ and the values of the vector $s$.

    2. Using the vector $s$, reconstruct an optimal solution in integer notation $(x_1,x_2,\dots,x_n)$, and report the optimal value.

    3. Show the execution of the second bottom-up DP algorithm by reporting, for each iteration, the values of the matrices $v$ and $s$.

    4. Using the matrix $s$, reconstruct an optimal solution in integer notation $(x_1,x_2,\dots,x_n)$, and report the optimal value.

??? soluzione "Solution"

    1. Step-by-step execution of the first bottom-up DP algorithm

        For each step of the DP algorithm, the table shows the values of $k$ and $i$, the cells $v[k]$ and $s[k]$, the current value of $m$, the current value of $t$, and the operation performed.

        <div class="tabella" markdown="0"><table>
        <tr>
        <th><span class="arithmatex">\(k\)</span></th>
        <th><span class="arithmatex">\(i\)</span></th>
        <th><span class="arithmatex">\(v[k]\)</span></th>
        <th><span class="arithmatex">\(s[k]\)</span></th>
        <th><span class="arithmatex">\(m\)</span></th>
        <th><span class="arithmatex">\(t\)</span></th>
        <th>Action</th>
        </tr>
        <tr>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td class="cella-blu">0</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(v[0]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>1</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(m\leftarrow 0\)</span>, <span class="arithmatex">\(t\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>1</td>
        <td>1</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>2</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[1]+v[0]=2+0=2>m=0\)</span>: <span class="arithmatex">\(m\leftarrow 2\)</span>, <span class="arithmatex">\(t\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td>1</td>
        <td>2</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>2</td>
        <td>1</td>
        <td><span class="arithmatex">\(w[2]=2>k=1\)</span>: no update</td>
        </tr>
        <tr>
        <td>1</td>
        <td>3</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>2</td>
        <td>1</td>
        <td><span class="arithmatex">\(w[3]=3>k=1\)</span>: no update</td>
        </tr>
        <tr>
        <td>1</td>
        <td>4</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>2</td>
        <td>1</td>
        <td><span class="arithmatex">\(w[4]=4>k=1\)</span>: no update</td>
        </tr>
        <tr>
        <td>1</td>
        <td>5</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>2</td>
        <td>1</td>
        <td><span class="arithmatex">\(w[5]=5>k=1\)</span>: no update</td>
        </tr>
        <tr>
        <td>1</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td class="cella-blu">2</td>
        <td class="cella-blu">1</td>
        <td>2</td>
        <td>1</td>
        <td><span class="arithmatex">\(v[1]\leftarrow 2\)</span>, <span class="arithmatex">\(s[1]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td>2</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(m\leftarrow 0\)</span>, <span class="arithmatex">\(t\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>2</td>
        <td>1</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>4</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[1]+v[1]=2+2=4>m=0\)</span>: <span class="arithmatex">\(m\leftarrow 4\)</span>, <span class="arithmatex">\(t\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td>2</td>
        <td>2</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>5</td>
        <td>2</td>
        <td><span class="arithmatex">\(p[2]+v[0]=5+0=5>m=4\)</span>: <span class="arithmatex">\(m\leftarrow 5\)</span>, <span class="arithmatex">\(t\leftarrow 2\)</span></td>
        </tr>
        <tr>
        <td>2</td>
        <td>3</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>5</td>
        <td>2</td>
        <td><span class="arithmatex">\(w[3]=3>k=2\)</span>: no update</td>
        </tr>
        <tr>
        <td>2</td>
        <td>4</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>5</td>
        <td>2</td>
        <td><span class="arithmatex">\(w[4]=4>k=2\)</span>: no update</td>
        </tr>
        <tr>
        <td>2</td>
        <td>5</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>5</td>
        <td>2</td>
        <td><span class="arithmatex">\(w[5]=5>k=2\)</span>: no update</td>
        </tr>
        <tr>
        <td>2</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td class="cella-blu">5</td>
        <td class="cella-blu">2</td>
        <td>5</td>
        <td>2</td>
        <td><span class="arithmatex">\(v[2]\leftarrow 5\)</span>, <span class="arithmatex">\(s[2]\leftarrow 2\)</span></td>
        </tr>
        <tr>
        <td>3</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(m\leftarrow 0\)</span>, <span class="arithmatex">\(t\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>3</td>
        <td>1</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>7</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[1]+v[2]=2+5=7>m=0\)</span>: <span class="arithmatex">\(m\leftarrow 7\)</span>, <span class="arithmatex">\(t\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td>3</td>
        <td>2</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>7</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[2]+v[1]=5+2=7\le m=7\)</span>: no update</td>
        </tr>
        <tr>
        <td>3</td>
        <td>3</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>7</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[3]+v[0]=7+0=7\le m=7\)</span>: no update</td>
        </tr>
        <tr>
        <td>3</td>
        <td>4</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>7</td>
        <td>1</td>
        <td><span class="arithmatex">\(w[4]=4>k=3\)</span>: no update</td>
        </tr>
        <tr>
        <td>3</td>
        <td>5</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>7</td>
        <td>1</td>
        <td><span class="arithmatex">\(w[5]=5>k=3\)</span>: no update</td>
        </tr>
        <tr>
        <td>3</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td class="cella-blu">7</td>
        <td class="cella-blu">1</td>
        <td>7</td>
        <td>1</td>
        <td><span class="arithmatex">\(v[3]\leftarrow 7\)</span>, <span class="arithmatex">\(s[3]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td>4</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(m\leftarrow 0\)</span>, <span class="arithmatex">\(t\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>4</td>
        <td>1</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>9</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[1]+v[3]=2+7=9>m=0\)</span>: <span class="arithmatex">\(m\leftarrow 9\)</span>, <span class="arithmatex">\(t\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td>4</td>
        <td>2</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>10</td>
        <td>2</td>
        <td><span class="arithmatex">\(p[2]+v[2]=5+5=10>m=9\)</span>: <span class="arithmatex">\(m\leftarrow 10\)</span>, <span class="arithmatex">\(t\leftarrow 2\)</span></td>
        </tr>
        <tr>
        <td>4</td>
        <td>3</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>10</td>
        <td>2</td>
        <td><span class="arithmatex">\(p[3]+v[1]=7+2=9\le m=10\)</span>: no update</td>
        </tr>
        <tr>
        <td>4</td>
        <td>4</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>10</td>
        <td>2</td>
        <td><span class="arithmatex">\(p[4]+v[0]=8+0=8\le m=10\)</span>: no update</td>
        </tr>
        <tr>
        <td>4</td>
        <td>5</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>10</td>
        <td>2</td>
        <td><span class="arithmatex">\(w[5]=5>k=4\)</span>: no update</td>
        </tr>
        <tr>
        <td>4</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td class="cella-blu">10</td>
        <td class="cella-blu">2</td>
        <td>10</td>
        <td>2</td>
        <td><span class="arithmatex">\(v[4]\leftarrow 10\)</span>, <span class="arithmatex">\(s[4]\leftarrow 2\)</span></td>
        </tr>
        <tr>
        <td>5</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(m\leftarrow 0\)</span>, <span class="arithmatex">\(t\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>5</td>
        <td>1</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>12</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[1]+v[4]=2+10=12>m=0\)</span>: <span class="arithmatex">\(m\leftarrow 12\)</span>, <span class="arithmatex">\(t\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td>5</td>
        <td>2</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>12</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[2]+v[3]=5+7=12\le m=12\)</span>: no update</td>
        </tr>
        <tr>
        <td>5</td>
        <td>3</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>12</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[3]+v[2]=7+5=12\le m=12\)</span>: no update</td>
        </tr>
        <tr>
        <td>5</td>
        <td>4</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>12</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[4]+v[1]=8+2=10\le m=12\)</span>: no update</td>
        </tr>
        <tr>
        <td>5</td>
        <td>5</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>12</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[5]+v[0]=10+0=10\le m=12\)</span>: no update</td>
        </tr>
        <tr>
        <td>5</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td class="cella-blu">12</td>
        <td class="cella-blu">1</td>
        <td>12</td>
        <td>1</td>
        <td><span class="arithmatex">\(v[5]\leftarrow 12\)</span>, <span class="arithmatex">\(s[5]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td>6</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(m\leftarrow 0\)</span>, <span class="arithmatex">\(t\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>6</td>
        <td>1</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>14</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[1]+v[5]=2+12=14>m=0\)</span>: <span class="arithmatex">\(m\leftarrow 14\)</span>, <span class="arithmatex">\(t\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td>6</td>
        <td>2</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>15</td>
        <td>2</td>
        <td><span class="arithmatex">\(p[2]+v[4]=5+10=15>m=14\)</span>: <span class="arithmatex">\(m\leftarrow 15\)</span>, <span class="arithmatex">\(t\leftarrow 2\)</span></td>
        </tr>
        <tr>
        <td>6</td>
        <td>3</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>15</td>
        <td>2</td>
        <td><span class="arithmatex">\(p[3]+v[3]=7+7=14\le m=15\)</span>: no update</td>
        </tr>
        <tr>
        <td>6</td>
        <td>4</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>15</td>
        <td>2</td>
        <td><span class="arithmatex">\(p[4]+v[2]=8+5=13\le m=15\)</span>: no update</td>
        </tr>
        <tr>
        <td>6</td>
        <td>5</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>15</td>
        <td>2</td>
        <td><span class="arithmatex">\(p[5]+v[1]=10+2=12\le m=15\)</span>: no update</td>
        </tr>
        <tr>
        <td>6</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td class="cella-blu">15</td>
        <td class="cella-blu">2</td>
        <td>15</td>
        <td>2</td>
        <td><span class="arithmatex">\(v[6]\leftarrow 15\)</span>, <span class="arithmatex">\(s[6]\leftarrow 2\)</span></td>
        </tr>
        <tr>
        <td>7</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(m\leftarrow 0\)</span>, <span class="arithmatex">\(t\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>7</td>
        <td>1</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>17</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[1]+v[6]=2+15=17>m=0\)</span>: <span class="arithmatex">\(m\leftarrow 17\)</span>, <span class="arithmatex">\(t\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td>7</td>
        <td>2</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>17</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[2]+v[5]=5+12=17\le m=17\)</span>: no update</td>
        </tr>
        <tr>
        <td>7</td>
        <td>3</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>17</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[3]+v[4]=7+10=17\le m=17\)</span>: no update</td>
        </tr>
        <tr>
        <td>7</td>
        <td>4</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>17</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[4]+v[3]=8+7=15\le m=17\)</span>: no update</td>
        </tr>
        <tr>
        <td>7</td>
        <td>5</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>17</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[5]+v[2]=10+5=15\le m=17\)</span>: no update</td>
        </tr>
        <tr>
        <td>7</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td class="cella-blu">17</td>
        <td class="cella-blu">1</td>
        <td>17</td>
        <td>1</td>
        <td><span class="arithmatex">\(v[7]\leftarrow 17\)</span>, <span class="arithmatex">\(s[7]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td>8</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(m\leftarrow 0\)</span>, <span class="arithmatex">\(t\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>8</td>
        <td>1</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>19</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[1]+v[7]=2+17=19>m=0\)</span>: <span class="arithmatex">\(m\leftarrow 19\)</span>, <span class="arithmatex">\(t\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td>8</td>
        <td>2</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>20</td>
        <td>2</td>
        <td><span class="arithmatex">\(p[2]+v[6]=5+15=20>m=19\)</span>: <span class="arithmatex">\(m\leftarrow 20\)</span>, <span class="arithmatex">\(t\leftarrow 2\)</span></td>
        </tr>
        <tr>
        <td>8</td>
        <td>3</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>20</td>
        <td>2</td>
        <td><span class="arithmatex">\(p[3]+v[5]=7+12=19\le m=20\)</span>: no update</td>
        </tr>
        <tr>
        <td>8</td>
        <td>4</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>20</td>
        <td>2</td>
        <td><span class="arithmatex">\(p[4]+v[4]=8+10=18\le m=20\)</span>: no update</td>
        </tr>
        <tr>
        <td>8</td>
        <td>5</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>20</td>
        <td>2</td>
        <td><span class="arithmatex">\(p[5]+v[3]=10+7=17\le m=20\)</span>: no update</td>
        </tr>
        <tr>
        <td>8</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td class="cella-blu">20</td>
        <td class="cella-blu">2</td>
        <td>20</td>
        <td>2</td>
        <td><span class="arithmatex">\(v[8]\leftarrow 20\)</span>, <span class="arithmatex">\(s[8]\leftarrow 2\)</span></td>
        </tr>
        </table></div>

        This is the vector $v$ after the execution of the first DP algorithm:

        <div class="tabella" markdown="0"><table>
        <tr>
        <th></th>
        <th><span class="arithmatex">\(k=0\)</span></th>
        <th><span class="arithmatex">\(k=1\)</span></th>
        <th><span class="arithmatex">\(k=2\)</span></th>
        <th><span class="arithmatex">\(k=3\)</span></th>
        <th><span class="arithmatex">\(k=4\)</span></th>
        <th><span class="arithmatex">\(k=5\)</span></th>
        <th><span class="arithmatex">\(k=6\)</span></th>
        <th><span class="arithmatex">\(k=7\)</span></th>
        <th><span class="arithmatex">\(k=8\)</span></th>
        </tr>
        <tr>
        <td><span class="arithmatex">\(v[k]\)</span></td>
        <td>0</td>
        <td>2</td>
        <td>5</td>
        <td>7</td>
        <td>10</td>
        <td>12</td>
        <td>15</td>
        <td>17</td>
        <td>20</td>
        </tr>
        </table></div>

        This is the vector $s$ after the execution of the first DP algorithm:

        <div class="tabella" markdown="0"><table>
        <tr>
        <th></th>
        <th><span class="arithmatex">\(k=0\)</span></th>
        <th><span class="arithmatex">\(k=1\)</span></th>
        <th><span class="arithmatex">\(k=2\)</span></th>
        <th><span class="arithmatex">\(k=3\)</span></th>
        <th><span class="arithmatex">\(k=4\)</span></th>
        <th><span class="arithmatex">\(k=5\)</span></th>
        <th><span class="arithmatex">\(k=6\)</span></th>
        <th><span class="arithmatex">\(k=7\)</span></th>
        <th><span class="arithmatex">\(k=8\)</span></th>
        </tr>
        <tr>
        <td><span class="arithmatex">\(s[k]\)</span></td>
        <td>0</td>
        <td>1</td>
        <td>2</td>
        <td>1</td>
        <td>2</td>
        <td>1</td>
        <td>2</td>
        <td>1</td>
        <td>2</td>
        </tr>
        </table></div>

    2. We have the following vector $s$:

        <div class="tabella" markdown="0"><table>
        <tr>
        <th></th>
        <th><span class="arithmatex">\(k=0\)</span></th>
        <th><span class="arithmatex">\(k=1\)</span></th>
        <th><span class="arithmatex">\(k=2\)</span></th>
        <th><span class="arithmatex">\(k=3\)</span></th>
        <th><span class="arithmatex">\(k=4\)</span></th>
        <th><span class="arithmatex">\(k=5\)</span></th>
        <th><span class="arithmatex">\(k=6\)</span></th>
        <th><span class="arithmatex">\(k=7\)</span></th>
        <th><span class="arithmatex">\(k=8\)</span></th>
        </tr>
        <tr>
        <td><span class="arithmatex">\(s[k]\)</span></td>
        <td>0</td>
        <td>1</td>
        <td>2</td>
        <td>1</td>
        <td>2</td>
        <td>1</td>
        <td>2</td>
        <td>1</td>
        <td>2</td>
        </tr>
        </table></div>

        We can reconstruct an optimal solution by starting from $k=8$ as follows:

        <div class="tabella" markdown="0"><table>
        <tr>
        <th>Iteration</th>
        <th><span class="arithmatex">\(k\)</span></th>
        <th><span class="arithmatex">\(s[k]\)</span></th>
        <th><span class="arithmatex">\(x[1]\)</span></th>
        <th><span class="arithmatex">\(x[2]\)</span></th>
        <th><span class="arithmatex">\(x[3]\)</span></th>
        <th><span class="arithmatex">\(x[4]\)</span></th>
        <th><span class="arithmatex">\(x[5]\)</span></th>
        <th>Action</th>
        </tr>
        <tr>
        <td>\-</td>
        <td>\-</td>
        <td>\-</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(k=8\)</span></td>
        </tr>
        <tr>
        <td>1</td>
        <td>8</td>
        <td>2</td>
        <td>0</td>
        <td class="cella-blu">1</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(x[2]\leftarrow 1\)</span>, <span class="arithmatex">\(k\leftarrow 8-2=6\)</span></td>
        </tr>
        <tr>
        <td>2</td>
        <td>6</td>
        <td>2</td>
        <td>0</td>
        <td class="cella-blu">2</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(x[2]\leftarrow 2\)</span>, <span class="arithmatex">\(k\leftarrow 6-2=4\)</span></td>
        </tr>
        <tr>
        <td>3</td>
        <td>4</td>
        <td>2</td>
        <td>0</td>
        <td class="cella-blu">3</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(x[2]\leftarrow 3\)</span>, <span class="arithmatex">\(k\leftarrow 4-2=2\)</span></td>
        </tr>
        <tr>
        <td>4</td>
        <td>2</td>
        <td>2</td>
        <td>0</td>
        <td class="cella-blu">4</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(x[2]\leftarrow 4\)</span>, <span class="arithmatex">\(k\leftarrow 2-2=0\)</span></td>
        </tr>
        </table></div>

        Thus, the vector

        $$
        (0,4,0,0,0)
        $$

        is an optimal solution. The optimal value is

        $$
        v[8]=20.
        $$

    3. Step-by-step execution of the second bottom-up DP algorithm

        For each step of the DP algorithm, the table shows the values of $i$ and $k$, the cells $v[i][k]$ and $s[i][k]$, and the operation performed. All entries in row $i=0$ are initialized to $0$.

        <div class="tabella" markdown="0"><table>
        <tr>
        <th><span class="arithmatex">\(i\)</span></th>
        <th><span class="arithmatex">\(k\)</span></th>
        <th><span class="arithmatex">\(v[i][k]\)</span></th>
        <th><span class="arithmatex">\(s[i][k]\)</span></th>
        <th>Action</th>
        </tr>
        <tr>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(v[0][0]\leftarrow 0\)</span>, <span class="arithmatex">\(s[0][0]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>0</td>
        <td>1</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(v[0][1]\leftarrow 0\)</span>, <span class="arithmatex">\(s[0][1]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>0</td>
        <td>2</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(v[0][2]\leftarrow 0\)</span>, <span class="arithmatex">\(s[0][2]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>0</td>
        <td>3</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(v[0][3]\leftarrow 0\)</span>, <span class="arithmatex">\(s[0][3]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>0</td>
        <td>4</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(v[0][4]\leftarrow 0\)</span>, <span class="arithmatex">\(s[0][4]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>0</td>
        <td>5</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(v[0][5]\leftarrow 0\)</span>, <span class="arithmatex">\(s[0][5]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>0</td>
        <td>6</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(v[0][6]\leftarrow 0\)</span>, <span class="arithmatex">\(s[0][6]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>0</td>
        <td>7</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(v[0][7]\leftarrow 0\)</span>, <span class="arithmatex">\(s[0][7]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>0</td>
        <td>8</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(v[0][8]\leftarrow 0\)</span>, <span class="arithmatex">\(s[0][8]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>1</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(k<w[1]\)</span>: <span class="arithmatex">\(v[1][0]\leftarrow v[0][0]=0\)</span>, <span class="arithmatex">\(s[1][0]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>1</td>
        <td>1</td>
        <td>2</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[1]+v[1][0]=2+0>v[0][1]=0\)</span>: <span class="arithmatex">\(v[1][1]\leftarrow 2\)</span>, <span class="arithmatex">\(s[1][1]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td>1</td>
        <td>2</td>
        <td>4</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[1]+v[1][1]=2+2>v[0][2]=0\)</span>: <span class="arithmatex">\(v[1][2]\leftarrow 4\)</span>, <span class="arithmatex">\(s[1][2]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td>1</td>
        <td>3</td>
        <td>6</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[1]+v[1][2]=2+4>v[0][3]=0\)</span>: <span class="arithmatex">\(v[1][3]\leftarrow 6\)</span>, <span class="arithmatex">\(s[1][3]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td>1</td>
        <td>4</td>
        <td>8</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[1]+v[1][3]=2+6>v[0][4]=0\)</span>: <span class="arithmatex">\(v[1][4]\leftarrow 8\)</span>, <span class="arithmatex">\(s[1][4]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td>1</td>
        <td>5</td>
        <td>10</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[1]+v[1][4]=2+8>v[0][5]=0\)</span>: <span class="arithmatex">\(v[1][5]\leftarrow 10\)</span>, <span class="arithmatex">\(s[1][5]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td>1</td>
        <td>6</td>
        <td>12</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[1]+v[1][5]=2+10>v[0][6]=0\)</span>: <span class="arithmatex">\(v[1][6]\leftarrow 12\)</span>, <span class="arithmatex">\(s[1][6]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td>1</td>
        <td>7</td>
        <td>14</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[1]+v[1][6]=2+12>v[0][7]=0\)</span>: <span class="arithmatex">\(v[1][7]\leftarrow 14\)</span>, <span class="arithmatex">\(s[1][7]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td>1</td>
        <td>8</td>
        <td>16</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[1]+v[1][7]=2+14>v[0][8]=0\)</span>: <span class="arithmatex">\(v[1][8]\leftarrow 16\)</span>, <span class="arithmatex">\(s[1][8]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td>2</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(k<w[2]\)</span>: <span class="arithmatex">\(v[2][0]\leftarrow v[1][0]=0\)</span>, <span class="arithmatex">\(s[2][0]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>2</td>
        <td>1</td>
        <td>2</td>
        <td>0</td>
        <td><span class="arithmatex">\(k<w[2]\)</span>: <span class="arithmatex">\(v[2][1]\leftarrow v[1][1]=2\)</span>, <span class="arithmatex">\(s[2][1]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>2</td>
        <td>2</td>
        <td>5</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[2]+v[2][0]=5+0>v[1][2]=4\)</span>: <span class="arithmatex">\(v[2][2]\leftarrow 5\)</span>, <span class="arithmatex">\(s[2][2]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td>2</td>
        <td>3</td>
        <td>7</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[2]+v[2][1]=5+2>v[1][3]=6\)</span>: <span class="arithmatex">\(v[2][3]\leftarrow 7\)</span>, <span class="arithmatex">\(s[2][3]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td>2</td>
        <td>4</td>
        <td>10</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[2]+v[2][2]=5+5>v[1][4]=8\)</span>: <span class="arithmatex">\(v[2][4]\leftarrow 10\)</span>, <span class="arithmatex">\(s[2][4]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td>2</td>
        <td>5</td>
        <td>12</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[2]+v[2][3]=5+7>v[1][5]=10\)</span>: <span class="arithmatex">\(v[2][5]\leftarrow 12\)</span>, <span class="arithmatex">\(s[2][5]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td>2</td>
        <td>6</td>
        <td>15</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[2]+v[2][4]=5+10>v[1][6]=12\)</span>: <span class="arithmatex">\(v[2][6]\leftarrow 15\)</span>, <span class="arithmatex">\(s[2][6]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td>2</td>
        <td>7</td>
        <td>17</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[2]+v[2][5]=5+12>v[1][7]=14\)</span>: <span class="arithmatex">\(v[2][7]\leftarrow 17\)</span>, <span class="arithmatex">\(s[2][7]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td>2</td>
        <td>8</td>
        <td>20</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[2]+v[2][6]=5+15>v[1][8]=16\)</span>: <span class="arithmatex">\(v[2][8]\leftarrow 20\)</span>, <span class="arithmatex">\(s[2][8]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td>3</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(k<w[3]\)</span>: <span class="arithmatex">\(v[3][0]\leftarrow v[2][0]=0\)</span>, <span class="arithmatex">\(s[3][0]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>3</td>
        <td>1</td>
        <td>2</td>
        <td>0</td>
        <td><span class="arithmatex">\(k<w[3]\)</span>: <span class="arithmatex">\(v[3][1]\leftarrow v[2][1]=2\)</span>, <span class="arithmatex">\(s[3][1]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>3</td>
        <td>2</td>
        <td>5</td>
        <td>0</td>
        <td><span class="arithmatex">\(k<w[3]\)</span>: <span class="arithmatex">\(v[3][2]\leftarrow v[2][2]=5\)</span>, <span class="arithmatex">\(s[3][2]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>3</td>
        <td>3</td>
        <td>7</td>
        <td>0</td>
        <td><span class="arithmatex">\(p[3]+v[3][0]=7+0\le v[2][3]=7\)</span>: <span class="arithmatex">\(v[3][3]\leftarrow 7\)</span>, <span class="arithmatex">\(s[3][3]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>3</td>
        <td>4</td>
        <td>10</td>
        <td>0</td>
        <td><span class="arithmatex">\(p[3]+v[3][1]=7+2\le v[2][4]=10\)</span>: <span class="arithmatex">\(v[3][4]\leftarrow 10\)</span>, <span class="arithmatex">\(s[3][4]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>3</td>
        <td>5</td>
        <td>12</td>
        <td>0</td>
        <td><span class="arithmatex">\(p[3]+v[3][2]=7+5\le v[2][5]=12\)</span>: <span class="arithmatex">\(v[3][5]\leftarrow 12\)</span>, <span class="arithmatex">\(s[3][5]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>3</td>
        <td>6</td>
        <td>15</td>
        <td>0</td>
        <td><span class="arithmatex">\(p[3]+v[3][3]=7+7\le v[2][6]=15\)</span>: <span class="arithmatex">\(v[3][6]\leftarrow 15\)</span>, <span class="arithmatex">\(s[3][6]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>3</td>
        <td>7</td>
        <td>17</td>
        <td>0</td>
        <td><span class="arithmatex">\(p[3]+v[3][4]=7+10\le v[2][7]=17\)</span>: <span class="arithmatex">\(v[3][7]\leftarrow 17\)</span>, <span class="arithmatex">\(s[3][7]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>3</td>
        <td>8</td>
        <td>20</td>
        <td>0</td>
        <td><span class="arithmatex">\(p[3]+v[3][5]=7+12\le v[2][8]=20\)</span>: <span class="arithmatex">\(v[3][8]\leftarrow 20\)</span>, <span class="arithmatex">\(s[3][8]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>4</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(k<w[4]\)</span>: <span class="arithmatex">\(v[4][0]\leftarrow v[3][0]=0\)</span>, <span class="arithmatex">\(s[4][0]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>4</td>
        <td>1</td>
        <td>2</td>
        <td>0</td>
        <td><span class="arithmatex">\(k<w[4]\)</span>: <span class="arithmatex">\(v[4][1]\leftarrow v[3][1]=2\)</span>, <span class="arithmatex">\(s[4][1]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>4</td>
        <td>2</td>
        <td>5</td>
        <td>0</td>
        <td><span class="arithmatex">\(k<w[4]\)</span>: <span class="arithmatex">\(v[4][2]\leftarrow v[3][2]=5\)</span>, <span class="arithmatex">\(s[4][2]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>4</td>
        <td>3</td>
        <td>7</td>
        <td>0</td>
        <td><span class="arithmatex">\(k<w[4]\)</span>: <span class="arithmatex">\(v[4][3]\leftarrow v[3][3]=7\)</span>, <span class="arithmatex">\(s[4][3]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>4</td>
        <td>4</td>
        <td>10</td>
        <td>0</td>
        <td><span class="arithmatex">\(p[4]+v[4][0]=8+0\le v[3][4]=10\)</span>: <span class="arithmatex">\(v[4][4]\leftarrow 10\)</span>, <span class="arithmatex">\(s[4][4]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>4</td>
        <td>5</td>
        <td>12</td>
        <td>0</td>
        <td><span class="arithmatex">\(p[4]+v[4][1]=8+2\le v[3][5]=12\)</span>: <span class="arithmatex">\(v[4][5]\leftarrow 12\)</span>, <span class="arithmatex">\(s[4][5]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>4</td>
        <td>6</td>
        <td>15</td>
        <td>0</td>
        <td><span class="arithmatex">\(p[4]+v[4][2]=8+5\le v[3][6]=15\)</span>: <span class="arithmatex">\(v[4][6]\leftarrow 15\)</span>, <span class="arithmatex">\(s[4][6]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>4</td>
        <td>7</td>
        <td>17</td>
        <td>0</td>
        <td><span class="arithmatex">\(p[4]+v[4][3]=8+7\le v[3][7]=17\)</span>: <span class="arithmatex">\(v[4][7]\leftarrow 17\)</span>, <span class="arithmatex">\(s[4][7]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>4</td>
        <td>8</td>
        <td>20</td>
        <td>0</td>
        <td><span class="arithmatex">\(p[4]+v[4][4]=8+10\le v[3][8]=20\)</span>: <span class="arithmatex">\(v[4][8]\leftarrow 20\)</span>, <span class="arithmatex">\(s[4][8]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>5</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(k<w[5]\)</span>: <span class="arithmatex">\(v[5][0]\leftarrow v[4][0]=0\)</span>, <span class="arithmatex">\(s[5][0]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>5</td>
        <td>1</td>
        <td>2</td>
        <td>0</td>
        <td><span class="arithmatex">\(k<w[5]\)</span>: <span class="arithmatex">\(v[5][1]\leftarrow v[4][1]=2\)</span>, <span class="arithmatex">\(s[5][1]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>5</td>
        <td>2</td>
        <td>5</td>
        <td>0</td>
        <td><span class="arithmatex">\(k<w[5]\)</span>: <span class="arithmatex">\(v[5][2]\leftarrow v[4][2]=5\)</span>, <span class="arithmatex">\(s[5][2]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>5</td>
        <td>3</td>
        <td>7</td>
        <td>0</td>
        <td><span class="arithmatex">\(k<w[5]\)</span>: <span class="arithmatex">\(v[5][3]\leftarrow v[4][3]=7\)</span>, <span class="arithmatex">\(s[5][3]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>5</td>
        <td>4</td>
        <td>10</td>
        <td>0</td>
        <td><span class="arithmatex">\(k<w[5]\)</span>: <span class="arithmatex">\(v[5][4]\leftarrow v[4][4]=10\)</span>, <span class="arithmatex">\(s[5][4]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>5</td>
        <td>5</td>
        <td>12</td>
        <td>0</td>
        <td><span class="arithmatex">\(p[5]+v[5][0]=10+0\le v[4][5]=12\)</span>: <span class="arithmatex">\(v[5][5]\leftarrow 12\)</span>, <span class="arithmatex">\(s[5][5]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>5</td>
        <td>6</td>
        <td>15</td>
        <td>0</td>
        <td><span class="arithmatex">\(p[5]+v[5][1]=10+2\le v[4][6]=15\)</span>: <span class="arithmatex">\(v[5][6]\leftarrow 15\)</span>, <span class="arithmatex">\(s[5][6]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>5</td>
        <td>7</td>
        <td>17</td>
        <td>0</td>
        <td><span class="arithmatex">\(p[5]+v[5][2]=10+5\le v[4][7]=17\)</span>: <span class="arithmatex">\(v[5][7]\leftarrow 17\)</span>, <span class="arithmatex">\(s[5][7]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>5</td>
        <td>8</td>
        <td>20</td>
        <td>0</td>
        <td><span class="arithmatex">\(p[5]+v[5][3]=10+7\le v[4][8]=20\)</span>: <span class="arithmatex">\(v[5][8]\leftarrow 20\)</span>, <span class="arithmatex">\(s[5][8]\leftarrow 0\)</span></td>
        </tr>
        </table></div>

        This is the matrix $v$ after the execution of the second DP algorithm:

        <div class="tabella" markdown="0"><table>
        <tr>
        <td><span class="arithmatex">\(v[i][k]\)</span></td>
        <td><span class="arithmatex">\(k=0\)</span></td>
        <td><span class="arithmatex">\(k=1\)</span></td>
        <td><span class="arithmatex">\(k=2\)</span></td>
        <td><span class="arithmatex">\(k=3\)</span></td>
        <td><span class="arithmatex">\(k=4\)</span></td>
        <td><span class="arithmatex">\(k=5\)</span></td>
        <td><span class="arithmatex">\(k=6\)</span></td>
        <td><span class="arithmatex">\(k=7\)</span></td>
        <td><span class="arithmatex">\(k=8\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=0\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=1\)</span></td>
        <td>0</td>
        <td>2</td>
        <td>4</td>
        <td>6</td>
        <td>8</td>
        <td>10</td>
        <td>12</td>
        <td>14</td>
        <td>16</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=2\)</span></td>
        <td>0</td>
        <td>2</td>
        <td>5</td>
        <td>7</td>
        <td>10</td>
        <td>12</td>
        <td>15</td>
        <td>17</td>
        <td>20</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=3\)</span></td>
        <td>0</td>
        <td>2</td>
        <td>5</td>
        <td>7</td>
        <td>10</td>
        <td>12</td>
        <td>15</td>
        <td>17</td>
        <td>20</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=4\)</span></td>
        <td>0</td>
        <td>2</td>
        <td>5</td>
        <td>7</td>
        <td>10</td>
        <td>12</td>
        <td>15</td>
        <td>17</td>
        <td>20</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=5\)</span></td>
        <td>0</td>
        <td>2</td>
        <td>5</td>
        <td>7</td>
        <td>10</td>
        <td>12</td>
        <td>15</td>
        <td>17</td>
        <td>20</td>
        </tr>
        </table></div>

        This is the matrix $s$ after the execution of the second DP algorithm:

        <div class="tabella" markdown="0"><table>
        <tr>
        <td><span class="arithmatex">\(s[i][k]\)</span></td>
        <td><span class="arithmatex">\(k=0\)</span></td>
        <td><span class="arithmatex">\(k=1\)</span></td>
        <td><span class="arithmatex">\(k=2\)</span></td>
        <td><span class="arithmatex">\(k=3\)</span></td>
        <td><span class="arithmatex">\(k=4\)</span></td>
        <td><span class="arithmatex">\(k=5\)</span></td>
        <td><span class="arithmatex">\(k=6\)</span></td>
        <td><span class="arithmatex">\(k=7\)</span></td>
        <td><span class="arithmatex">\(k=8\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=0\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=1\)</span></td>
        <td>0</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=2\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=3\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=4\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=5\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        </tr>
        </table></div>

    4. We have the following matrix $s$:

        <div class="tabella" markdown="0"><table>
        <tr>
        <td><span class="arithmatex">\(s[i][k]\)</span></td>
        <td><span class="arithmatex">\(k=0\)</span></td>
        <td><span class="arithmatex">\(k=1\)</span></td>
        <td><span class="arithmatex">\(k=2\)</span></td>
        <td><span class="arithmatex">\(k=3\)</span></td>
        <td><span class="arithmatex">\(k=4\)</span></td>
        <td><span class="arithmatex">\(k=5\)</span></td>
        <td><span class="arithmatex">\(k=6\)</span></td>
        <td><span class="arithmatex">\(k=7\)</span></td>
        <td><span class="arithmatex">\(k=8\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=0\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=1\)</span></td>
        <td>0</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=2\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=3\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=4\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=5\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        </tr>
        </table></div>

        We can reconstruct an optimal solution by starting from $i=5$ and $k=8$ as follows:

        <div class="tabella" markdown="0"><table>
        <tr>
        <th>Iteration</th>
        <th><span class="arithmatex">\(i\)</span></th>
        <th><span class="arithmatex">\(k\)</span></th>
        <th><span class="arithmatex">\(s[i][k]\)</span></th>
        <th><span class="arithmatex">\(x[1]\)</span></th>
        <th><span class="arithmatex">\(x[2]\)</span></th>
        <th><span class="arithmatex">\(x[3]\)</span></th>
        <th><span class="arithmatex">\(x[4]\)</span></th>
        <th><span class="arithmatex">\(x[5]\)</span></th>
        <th>Action</th>
        </tr>
        <tr>
        <td>\-</td>
        <td>\-</td>
        <td>\-</td>
        <td>\-</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(i=5\)</span>, <span class="arithmatex">\(k=8\)</span></td>
        </tr>
        <tr>
        <td>1</td>
        <td>5</td>
        <td>8</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(i\leftarrow 4\)</span></td>
        </tr>
        <tr>
        <td>2</td>
        <td>4</td>
        <td>8</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(i\leftarrow 3\)</span></td>
        </tr>
        <tr>
        <td>3</td>
        <td>3</td>
        <td>8</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(i\leftarrow 2\)</span></td>
        </tr>
        <tr>
        <td>4</td>
        <td>2</td>
        <td>8</td>
        <td>1</td>
        <td>0</td>
        <td class="cella-blu">1</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(x[2]\leftarrow 1\)</span>, <span class="arithmatex">\(k\leftarrow 8-2=6\)</span></td>
        </tr>
        <tr>
        <td>5</td>
        <td>2</td>
        <td>6</td>
        <td>1</td>
        <td>0</td>
        <td class="cella-blu">2</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(x[2]\leftarrow 2\)</span>, <span class="arithmatex">\(k\leftarrow 6-2=4\)</span></td>
        </tr>
        <tr>
        <td>6</td>
        <td>2</td>
        <td>4</td>
        <td>1</td>
        <td>0</td>
        <td class="cella-blu">3</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(x[2]\leftarrow 3\)</span>, <span class="arithmatex">\(k\leftarrow 4-2=2\)</span></td>
        </tr>
        <tr>
        <td>7</td>
        <td>2</td>
        <td>2</td>
        <td>1</td>
        <td>0</td>
        <td class="cella-blu">4</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(x[2]\leftarrow 4\)</span>, <span class="arithmatex">\(k\leftarrow 2-2=0\)</span></td>
        </tr>
        </table></div>

        Thus, the vector

        $$
        (0,4,0,0,0)
        $$

        is an optimal solution. The optimal value is

        $$
        v[5][8]=20.
        $$

<a id="esercizio-15-8"></a>

!!! esercizio "Exercise 15.8: Exercise 3: Unbounded Knapsack Problem"

    Consider the following UKP instance, where the knapsack has capacity $c=10$, each item type is available in infinitely many copies, and the profits and weights associated with the item types are:

    <div class="tabella" markdown="0"><table>
    <tr>
    <th></th>
    <th><span class="arithmatex">\(i=1\)</span></th>
    <th><span class="arithmatex">\(i=2\)</span></th>
    <th><span class="arithmatex">\(i=3\)</span></th>
    <th><span class="arithmatex">\(i=4\)</span></th>
    </tr>
    <tr>
    <td><span class="arithmatex">\(p_i\)</span></td>
    <td>6</td>
    <td>10</td>
    <td>12</td>
    <td>13</td>
    </tr>
    <tr>
    <td><span class="arithmatex">\(w_i\)</span></td>
    <td>3</td>
    <td>4</td>
    <td>6</td>
    <td>7</td>
    </tr>
    </table></div>

    **Questions**

    1. Show the execution of the first bottom-up DP algorithm by reporting, for each iteration, the values of the vector $v$ and the values of the vector $s$.

    2. Using the vector $s$, reconstruct an optimal solution in integer notation $(x_1,x_2,\dots,x_n)$, and report the optimal value.

    3. Show the execution of the second bottom-up DP algorithm by reporting, for each iteration, the values of the matrices $v$ and $s$.

    4. Using the matrix $s$, reconstruct an optimal solution in integer notation $(x_1,x_2,\dots,x_n)$, and report the optimal value.

??? soluzione "Solution"

    1. Step-by-step execution of the first bottom-up DP algorithm

        For each step of the DP algorithm, the table shows the values of $k$ and $i$, the cells $v[k]$ and $s[k]$, the current value of $m$, the current value of $t$, and the operation performed.

        <div class="tabella" markdown="0"><table>
        <tr>
        <th><span class="arithmatex">\(k\)</span></th>
        <th><span class="arithmatex">\(i\)</span></th>
        <th><span class="arithmatex">\(v[k]\)</span></th>
        <th><span class="arithmatex">\(s[k]\)</span></th>
        <th><span class="arithmatex">\(m\)</span></th>
        <th><span class="arithmatex">\(t\)</span></th>
        <th>Action</th>
        </tr>
        <tr>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td class="cella-blu">0</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(v[0]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>1</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(m\leftarrow 0\)</span>, <span class="arithmatex">\(t\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>1</td>
        <td>1</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(w[1]=3>k=1\)</span>: no update</td>
        </tr>
        <tr>
        <td>1</td>
        <td>2</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(w[2]=4>k=1\)</span>: no update</td>
        </tr>
        <tr>
        <td>1</td>
        <td>3</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(w[3]=6>k=1\)</span>: no update</td>
        </tr>
        <tr>
        <td>1</td>
        <td>4</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(w[4]=7>k=1\)</span>: no update</td>
        </tr>
        <tr>
        <td>1</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td class="cella-blu">0</td>
        <td class="cella-blu">0</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(v[1]\leftarrow 0\)</span>, <span class="arithmatex">\(s[1]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>2</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(m\leftarrow 0\)</span>, <span class="arithmatex">\(t\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>2</td>
        <td>1</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(w[1]=3>k=2\)</span>: no update</td>
        </tr>
        <tr>
        <td>2</td>
        <td>2</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(w[2]=4>k=2\)</span>: no update</td>
        </tr>
        <tr>
        <td>2</td>
        <td>3</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(w[3]=6>k=2\)</span>: no update</td>
        </tr>
        <tr>
        <td>2</td>
        <td>4</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(w[4]=7>k=2\)</span>: no update</td>
        </tr>
        <tr>
        <td>2</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td class="cella-blu">0</td>
        <td class="cella-blu">0</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(v[2]\leftarrow 0\)</span>, <span class="arithmatex">\(s[2]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>3</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(m\leftarrow 0\)</span>, <span class="arithmatex">\(t\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>3</td>
        <td>1</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>6</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[1]+v[0]=6+0=6>m=0\)</span>: <span class="arithmatex">\(m\leftarrow 6\)</span>, <span class="arithmatex">\(t\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td>3</td>
        <td>2</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>6</td>
        <td>1</td>
        <td><span class="arithmatex">\(w[2]=4>k=3\)</span>: no update</td>
        </tr>
        <tr>
        <td>3</td>
        <td>3</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>6</td>
        <td>1</td>
        <td><span class="arithmatex">\(w[3]=6>k=3\)</span>: no update</td>
        </tr>
        <tr>
        <td>3</td>
        <td>4</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>6</td>
        <td>1</td>
        <td><span class="arithmatex">\(w[4]=7>k=3\)</span>: no update</td>
        </tr>
        <tr>
        <td>3</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td class="cella-blu">6</td>
        <td class="cella-blu">1</td>
        <td>6</td>
        <td>1</td>
        <td><span class="arithmatex">\(v[3]\leftarrow 6\)</span>, <span class="arithmatex">\(s[3]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td>4</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(m\leftarrow 0\)</span>, <span class="arithmatex">\(t\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>4</td>
        <td>1</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>6</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[1]+v[1]=6+0=6>m=0\)</span>: <span class="arithmatex">\(m\leftarrow 6\)</span>, <span class="arithmatex">\(t\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td>4</td>
        <td>2</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>10</td>
        <td>2</td>
        <td><span class="arithmatex">\(p[2]+v[0]=10+0=10>m=6\)</span>: <span class="arithmatex">\(m\leftarrow 10\)</span>, <span class="arithmatex">\(t\leftarrow 2\)</span></td>
        </tr>
        <tr>
        <td>4</td>
        <td>3</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>10</td>
        <td>2</td>
        <td><span class="arithmatex">\(w[3]=6>k=4\)</span>: no update</td>
        </tr>
        <tr>
        <td>4</td>
        <td>4</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>10</td>
        <td>2</td>
        <td><span class="arithmatex">\(w[4]=7>k=4\)</span>: no update</td>
        </tr>
        <tr>
        <td>4</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td class="cella-blu">10</td>
        <td class="cella-blu">2</td>
        <td>10</td>
        <td>2</td>
        <td><span class="arithmatex">\(v[4]\leftarrow 10\)</span>, <span class="arithmatex">\(s[4]\leftarrow 2\)</span></td>
        </tr>
        <tr>
        <td>5</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(m\leftarrow 0\)</span>, <span class="arithmatex">\(t\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>5</td>
        <td>1</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>6</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[1]+v[2]=6+0=6>m=0\)</span>: <span class="arithmatex">\(m\leftarrow 6\)</span>, <span class="arithmatex">\(t\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td>5</td>
        <td>2</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>10</td>
        <td>2</td>
        <td><span class="arithmatex">\(p[2]+v[1]=10+0=10>m=6\)</span>: <span class="arithmatex">\(m\leftarrow 10\)</span>, <span class="arithmatex">\(t\leftarrow 2\)</span></td>
        </tr>
        <tr>
        <td>5</td>
        <td>3</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>10</td>
        <td>2</td>
        <td><span class="arithmatex">\(w[3]=6>k=5\)</span>: no update</td>
        </tr>
        <tr>
        <td>5</td>
        <td>4</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>10</td>
        <td>2</td>
        <td><span class="arithmatex">\(w[4]=7>k=5\)</span>: no update</td>
        </tr>
        <tr>
        <td>5</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td class="cella-blu">10</td>
        <td class="cella-blu">2</td>
        <td>10</td>
        <td>2</td>
        <td><span class="arithmatex">\(v[5]\leftarrow 10\)</span>, <span class="arithmatex">\(s[5]\leftarrow 2\)</span></td>
        </tr>
        <tr>
        <td>6</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(m\leftarrow 0\)</span>, <span class="arithmatex">\(t\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>6</td>
        <td>1</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>12</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[1]+v[3]=6+6=12>m=0\)</span>: <span class="arithmatex">\(m\leftarrow 12\)</span>, <span class="arithmatex">\(t\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td>6</td>
        <td>2</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>12</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[2]+v[2]=10+0=10\le m=12\)</span>: no update</td>
        </tr>
        <tr>
        <td>6</td>
        <td>3</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>12</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[3]+v[0]=12+0=12\le m=12\)</span>: no update</td>
        </tr>
        <tr>
        <td>6</td>
        <td>4</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>12</td>
        <td>1</td>
        <td><span class="arithmatex">\(w[4]=7>k=6\)</span>: no update</td>
        </tr>
        <tr>
        <td>6</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td class="cella-blu">12</td>
        <td class="cella-blu">1</td>
        <td>12</td>
        <td>1</td>
        <td><span class="arithmatex">\(v[6]\leftarrow 12\)</span>, <span class="arithmatex">\(s[6]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td>7</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(m\leftarrow 0\)</span>, <span class="arithmatex">\(t\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>7</td>
        <td>1</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>16</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[1]+v[4]=6+10=16>m=0\)</span>: <span class="arithmatex">\(m\leftarrow 16\)</span>, <span class="arithmatex">\(t\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td>7</td>
        <td>2</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>16</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[2]+v[3]=10+6=16\le m=16\)</span>: no update</td>
        </tr>
        <tr>
        <td>7</td>
        <td>3</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>16</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[3]+v[1]=12+0=12\le m=16\)</span>: no update</td>
        </tr>
        <tr>
        <td>7</td>
        <td>4</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>16</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[4]+v[0]=13+0=13\le m=16\)</span>: no update</td>
        </tr>
        <tr>
        <td>7</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td class="cella-blu">16</td>
        <td class="cella-blu">1</td>
        <td>16</td>
        <td>1</td>
        <td><span class="arithmatex">\(v[7]\leftarrow 16\)</span>, <span class="arithmatex">\(s[7]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td>8</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(m\leftarrow 0\)</span>, <span class="arithmatex">\(t\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>8</td>
        <td>1</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>16</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[1]+v[5]=6+10=16>m=0\)</span>: <span class="arithmatex">\(m\leftarrow 16\)</span>, <span class="arithmatex">\(t\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td>8</td>
        <td>2</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>20</td>
        <td>2</td>
        <td><span class="arithmatex">\(p[2]+v[4]=10+10=20>m=16\)</span>: <span class="arithmatex">\(m\leftarrow 20\)</span>, <span class="arithmatex">\(t\leftarrow 2\)</span></td>
        </tr>
        <tr>
        <td>8</td>
        <td>3</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>20</td>
        <td>2</td>
        <td><span class="arithmatex">\(p[3]+v[2]=12+0=12\le m=20\)</span>: no update</td>
        </tr>
        <tr>
        <td>8</td>
        <td>4</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>20</td>
        <td>2</td>
        <td><span class="arithmatex">\(p[4]+v[1]=13+0=13\le m=20\)</span>: no update</td>
        </tr>
        <tr>
        <td>8</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td class="cella-blu">20</td>
        <td class="cella-blu">2</td>
        <td>20</td>
        <td>2</td>
        <td><span class="arithmatex">\(v[8]\leftarrow 20\)</span>, <span class="arithmatex">\(s[8]\leftarrow 2\)</span></td>
        </tr>
        <tr>
        <td>9</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(m\leftarrow 0\)</span>, <span class="arithmatex">\(t\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>9</td>
        <td>1</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>18</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[1]+v[6]=6+12=18>m=0\)</span>: <span class="arithmatex">\(m\leftarrow 18\)</span>, <span class="arithmatex">\(t\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td>9</td>
        <td>2</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>20</td>
        <td>2</td>
        <td><span class="arithmatex">\(p[2]+v[5]=10+10=20>m=18\)</span>: <span class="arithmatex">\(m\leftarrow 20\)</span>, <span class="arithmatex">\(t\leftarrow 2\)</span></td>
        </tr>
        <tr>
        <td>9</td>
        <td>3</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>20</td>
        <td>2</td>
        <td><span class="arithmatex">\(p[3]+v[3]=12+6=18\le m=20\)</span>: no update</td>
        </tr>
        <tr>
        <td>9</td>
        <td>4</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>20</td>
        <td>2</td>
        <td><span class="arithmatex">\(p[4]+v[2]=13+0=13\le m=20\)</span>: no update</td>
        </tr>
        <tr>
        <td>9</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td class="cella-blu">20</td>
        <td class="cella-blu">2</td>
        <td>20</td>
        <td>2</td>
        <td><span class="arithmatex">\(v[9]\leftarrow 20\)</span>, <span class="arithmatex">\(s[9]\leftarrow 2\)</span></td>
        </tr>
        <tr>
        <td>10</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(m\leftarrow 0\)</span>, <span class="arithmatex">\(t\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>10</td>
        <td>1</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>22</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[1]+v[7]=6+16=22>m=0\)</span>: <span class="arithmatex">\(m\leftarrow 22\)</span>, <span class="arithmatex">\(t\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td>10</td>
        <td>2</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>22</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[2]+v[6]=10+12=22\le m=22\)</span>: no update</td>
        </tr>
        <tr>
        <td>10</td>
        <td>3</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>22</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[3]+v[4]=12+10=22\le m=22\)</span>: no update</td>
        </tr>
        <tr>
        <td>10</td>
        <td>4</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>22</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[4]+v[3]=13+6=19\le m=22\)</span>: no update</td>
        </tr>
        <tr>
        <td>10</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td class="cella-blu">22</td>
        <td class="cella-blu">1</td>
        <td>22</td>
        <td>1</td>
        <td><span class="arithmatex">\(v[10]\leftarrow 22\)</span>, <span class="arithmatex">\(s[10]\leftarrow 1\)</span></td>
        </tr>
        </table></div>

        This is the vector $v$ after the execution of the first DP algorithm:

        <div class="tabella" markdown="0"><table>
        <tr>
        <th></th>
        <th><span class="arithmatex">\(k=0\)</span></th>
        <th><span class="arithmatex">\(k=1\)</span></th>
        <th><span class="arithmatex">\(k=2\)</span></th>
        <th><span class="arithmatex">\(k=3\)</span></th>
        <th><span class="arithmatex">\(k=4\)</span></th>
        <th><span class="arithmatex">\(k=5\)</span></th>
        <th><span class="arithmatex">\(k=6\)</span></th>
        <th><span class="arithmatex">\(k=7\)</span></th>
        <th><span class="arithmatex">\(k=8\)</span></th>
        <th><span class="arithmatex">\(k=9\)</span></th>
        <th><span class="arithmatex">\(k=10\)</span></th>
        </tr>
        <tr>
        <td><span class="arithmatex">\(v[k]\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>6</td>
        <td>10</td>
        <td>10</td>
        <td>12</td>
        <td>16</td>
        <td>20</td>
        <td>20</td>
        <td>22</td>
        </tr>
        </table></div>

        This is the vector $s$ after the execution of the first DP algorithm:

        <div class="tabella" markdown="0"><table>
        <tr>
        <th></th>
        <th><span class="arithmatex">\(k=0\)</span></th>
        <th><span class="arithmatex">\(k=1\)</span></th>
        <th><span class="arithmatex">\(k=2\)</span></th>
        <th><span class="arithmatex">\(k=3\)</span></th>
        <th><span class="arithmatex">\(k=4\)</span></th>
        <th><span class="arithmatex">\(k=5\)</span></th>
        <th><span class="arithmatex">\(k=6\)</span></th>
        <th><span class="arithmatex">\(k=7\)</span></th>
        <th><span class="arithmatex">\(k=8\)</span></th>
        <th><span class="arithmatex">\(k=9\)</span></th>
        <th><span class="arithmatex">\(k=10\)</span></th>
        </tr>
        <tr>
        <td><span class="arithmatex">\(s[k]\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>1</td>
        <td>2</td>
        <td>2</td>
        <td>1</td>
        <td>1</td>
        <td>2</td>
        <td>2</td>
        <td>1</td>
        </tr>
        </table></div>

    2. We have the following vector $s$:

        <div class="tabella" markdown="0"><table>
        <tr>
        <th></th>
        <th><span class="arithmatex">\(k=0\)</span></th>
        <th><span class="arithmatex">\(k=1\)</span></th>
        <th><span class="arithmatex">\(k=2\)</span></th>
        <th><span class="arithmatex">\(k=3\)</span></th>
        <th><span class="arithmatex">\(k=4\)</span></th>
        <th><span class="arithmatex">\(k=5\)</span></th>
        <th><span class="arithmatex">\(k=6\)</span></th>
        <th><span class="arithmatex">\(k=7\)</span></th>
        <th><span class="arithmatex">\(k=8\)</span></th>
        <th><span class="arithmatex">\(k=9\)</span></th>
        <th><span class="arithmatex">\(k=10\)</span></th>
        </tr>
        <tr>
        <td><span class="arithmatex">\(s[k]\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>1</td>
        <td>2</td>
        <td>2</td>
        <td>1</td>
        <td>1</td>
        <td>2</td>
        <td>2</td>
        <td>1</td>
        </tr>
        </table></div>

        We can reconstruct an optimal solution by starting from $k=10$ as follows:

        <div class="tabella" markdown="0"><table>
        <tr>
        <th>Iteration</th>
        <th><span class="arithmatex">\(k\)</span></th>
        <th><span class="arithmatex">\(s[k]\)</span></th>
        <th><span class="arithmatex">\(x[1]\)</span></th>
        <th><span class="arithmatex">\(x[2]\)</span></th>
        <th><span class="arithmatex">\(x[3]\)</span></th>
        <th><span class="arithmatex">\(x[4]\)</span></th>
        <th>Action</th>
        </tr>
        <tr>
        <td>\-</td>
        <td>\-</td>
        <td>\-</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(k=10\)</span></td>
        </tr>
        <tr>
        <td>1</td>
        <td>10</td>
        <td>1</td>
        <td class="cella-blu">1</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(x[1]\leftarrow 1\)</span>, <span class="arithmatex">\(k\leftarrow 10-3=7\)</span></td>
        </tr>
        <tr>
        <td>2</td>
        <td>7</td>
        <td>1</td>
        <td class="cella-blu">2</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(x[1]\leftarrow 2\)</span>, <span class="arithmatex">\(k\leftarrow 7-3=4\)</span></td>
        </tr>
        <tr>
        <td>3</td>
        <td>4</td>
        <td>2</td>
        <td class="cella-blu">2</td>
        <td class="cella-blu">1</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(x[2]\leftarrow 1\)</span>, <span class="arithmatex">\(k\leftarrow 4-4=0\)</span></td>
        </tr>
        </table></div>

        Thus, the vector

        $$
        (2,1,0,0)
        $$

        is an optimal solution. The optimal value is

        $$
        v[10]=22.
        $$

    3. Step-by-step execution of the second bottom-up DP algorithm

        For each step of the DP algorithm, the table shows the values of $i$ and $k$, the cells $v[i][k]$ and $s[i][k]$, and the operation performed. All entries in row $i=0$ are initialized to $0$.

        <div class="tabella" markdown="0"><table>
        <tr>
        <th><span class="arithmatex">\(i\)</span></th>
        <th><span class="arithmatex">\(k\)</span></th>
        <th><span class="arithmatex">\(v[i][k]\)</span></th>
        <th><span class="arithmatex">\(s[i][k]\)</span></th>
        <th>Action</th>
        </tr>
        <tr>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(v[0][0]\leftarrow 0\)</span>, <span class="arithmatex">\(s[0][0]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>0</td>
        <td>1</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(v[0][1]\leftarrow 0\)</span>, <span class="arithmatex">\(s[0][1]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>0</td>
        <td>2</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(v[0][2]\leftarrow 0\)</span>, <span class="arithmatex">\(s[0][2]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>0</td>
        <td>3</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(v[0][3]\leftarrow 0\)</span>, <span class="arithmatex">\(s[0][3]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>0</td>
        <td>4</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(v[0][4]\leftarrow 0\)</span>, <span class="arithmatex">\(s[0][4]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>0</td>
        <td>5</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(v[0][5]\leftarrow 0\)</span>, <span class="arithmatex">\(s[0][5]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>0</td>
        <td>6</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(v[0][6]\leftarrow 0\)</span>, <span class="arithmatex">\(s[0][6]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>0</td>
        <td>7</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(v[0][7]\leftarrow 0\)</span>, <span class="arithmatex">\(s[0][7]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>0</td>
        <td>8</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(v[0][8]\leftarrow 0\)</span>, <span class="arithmatex">\(s[0][8]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>0</td>
        <td>9</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(v[0][9]\leftarrow 0\)</span>, <span class="arithmatex">\(s[0][9]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>0</td>
        <td>10</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(v[0][10]\leftarrow 0\)</span>, <span class="arithmatex">\(s[0][10]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>1</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(k<w[1]\)</span>: <span class="arithmatex">\(v[1][0]\leftarrow v[0][0]=0\)</span>, <span class="arithmatex">\(s[1][0]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>1</td>
        <td>1</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(k<w[1]\)</span>: <span class="arithmatex">\(v[1][1]\leftarrow v[0][1]=0\)</span>, <span class="arithmatex">\(s[1][1]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>1</td>
        <td>2</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(k<w[1]\)</span>: <span class="arithmatex">\(v[1][2]\leftarrow v[0][2]=0\)</span>, <span class="arithmatex">\(s[1][2]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>1</td>
        <td>3</td>
        <td>6</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[1]+v[1][0]=6+0>v[0][3]=0\)</span>: <span class="arithmatex">\(v[1][3]\leftarrow 6\)</span>, <span class="arithmatex">\(s[1][3]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td>1</td>
        <td>4</td>
        <td>6</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[1]+v[1][1]=6+0>v[0][4]=0\)</span>: <span class="arithmatex">\(v[1][4]\leftarrow 6\)</span>, <span class="arithmatex">\(s[1][4]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td>1</td>
        <td>5</td>
        <td>6</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[1]+v[1][2]=6+0>v[0][5]=0\)</span>: <span class="arithmatex">\(v[1][5]\leftarrow 6\)</span>, <span class="arithmatex">\(s[1][5]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td>1</td>
        <td>6</td>
        <td>12</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[1]+v[1][3]=6+6>v[0][6]=0\)</span>: <span class="arithmatex">\(v[1][6]\leftarrow 12\)</span>, <span class="arithmatex">\(s[1][6]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td>1</td>
        <td>7</td>
        <td>12</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[1]+v[1][4]=6+6>v[0][7]=0\)</span>: <span class="arithmatex">\(v[1][7]\leftarrow 12\)</span>, <span class="arithmatex">\(s[1][7]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td>1</td>
        <td>8</td>
        <td>12</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[1]+v[1][5]=6+6>v[0][8]=0\)</span>: <span class="arithmatex">\(v[1][8]\leftarrow 12\)</span>, <span class="arithmatex">\(s[1][8]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td>1</td>
        <td>9</td>
        <td>18</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[1]+v[1][6]=6+12>v[0][9]=0\)</span>: <span class="arithmatex">\(v[1][9]\leftarrow 18\)</span>, <span class="arithmatex">\(s[1][9]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td>1</td>
        <td>10</td>
        <td>18</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[1]+v[1][7]=6+12>v[0][10]=0\)</span>: <span class="arithmatex">\(v[1][10]\leftarrow 18\)</span>, <span class="arithmatex">\(s[1][10]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td>2</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(k<w[2]\)</span>: <span class="arithmatex">\(v[2][0]\leftarrow v[1][0]=0\)</span>, <span class="arithmatex">\(s[2][0]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>2</td>
        <td>1</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(k<w[2]\)</span>: <span class="arithmatex">\(v[2][1]\leftarrow v[1][1]=0\)</span>, <span class="arithmatex">\(s[2][1]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>2</td>
        <td>2</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(k<w[2]\)</span>: <span class="arithmatex">\(v[2][2]\leftarrow v[1][2]=0\)</span>, <span class="arithmatex">\(s[2][2]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>2</td>
        <td>3</td>
        <td>6</td>
        <td>0</td>
        <td><span class="arithmatex">\(k<w[2]\)</span>: <span class="arithmatex">\(v[2][3]\leftarrow v[1][3]=6\)</span>, <span class="arithmatex">\(s[2][3]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>2</td>
        <td>4</td>
        <td>10</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[2]+v[2][0]=10+0>v[1][4]=6\)</span>: <span class="arithmatex">\(v[2][4]\leftarrow 10\)</span>, <span class="arithmatex">\(s[2][4]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td>2</td>
        <td>5</td>
        <td>10</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[2]+v[2][1]=10+0>v[1][5]=6\)</span>: <span class="arithmatex">\(v[2][5]\leftarrow 10\)</span>, <span class="arithmatex">\(s[2][5]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td>2</td>
        <td>6</td>
        <td>12</td>
        <td>0</td>
        <td><span class="arithmatex">\(p[2]+v[2][2]=10+0\le v[1][6]=12\)</span>: <span class="arithmatex">\(v[2][6]\leftarrow 12\)</span>, <span class="arithmatex">\(s[2][6]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>2</td>
        <td>7</td>
        <td>16</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[2]+v[2][3]=10+6>v[1][7]=12\)</span>: <span class="arithmatex">\(v[2][7]\leftarrow 16\)</span>, <span class="arithmatex">\(s[2][7]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td>2</td>
        <td>8</td>
        <td>20</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[2]+v[2][4]=10+10>v[1][8]=12\)</span>: <span class="arithmatex">\(v[2][8]\leftarrow 20\)</span>, <span class="arithmatex">\(s[2][8]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td>2</td>
        <td>9</td>
        <td>20</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[2]+v[2][5]=10+10>v[1][9]=18\)</span>: <span class="arithmatex">\(v[2][9]\leftarrow 20\)</span>, <span class="arithmatex">\(s[2][9]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td>2</td>
        <td>10</td>
        <td>22</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[2]+v[2][6]=10+12>v[1][10]=18\)</span>: <span class="arithmatex">\(v[2][10]\leftarrow 22\)</span>, <span class="arithmatex">\(s[2][10]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td>3</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(k<w[3]\)</span>: <span class="arithmatex">\(v[3][0]\leftarrow v[2][0]=0\)</span>, <span class="arithmatex">\(s[3][0]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>3</td>
        <td>1</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(k<w[3]\)</span>: <span class="arithmatex">\(v[3][1]\leftarrow v[2][1]=0\)</span>, <span class="arithmatex">\(s[3][1]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>3</td>
        <td>2</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(k<w[3]\)</span>: <span class="arithmatex">\(v[3][2]\leftarrow v[2][2]=0\)</span>, <span class="arithmatex">\(s[3][2]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>3</td>
        <td>3</td>
        <td>6</td>
        <td>0</td>
        <td><span class="arithmatex">\(k<w[3]\)</span>: <span class="arithmatex">\(v[3][3]\leftarrow v[2][3]=6\)</span>, <span class="arithmatex">\(s[3][3]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>3</td>
        <td>4</td>
        <td>10</td>
        <td>0</td>
        <td><span class="arithmatex">\(k<w[3]\)</span>: <span class="arithmatex">\(v[3][4]\leftarrow v[2][4]=10\)</span>, <span class="arithmatex">\(s[3][4]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>3</td>
        <td>5</td>
        <td>10</td>
        <td>0</td>
        <td><span class="arithmatex">\(k<w[3]\)</span>: <span class="arithmatex">\(v[3][5]\leftarrow v[2][5]=10\)</span>, <span class="arithmatex">\(s[3][5]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>3</td>
        <td>6</td>
        <td>12</td>
        <td>0</td>
        <td><span class="arithmatex">\(p[3]+v[3][0]=12+0\le v[2][6]=12\)</span>: <span class="arithmatex">\(v[3][6]\leftarrow 12\)</span>, <span class="arithmatex">\(s[3][6]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>3</td>
        <td>7</td>
        <td>16</td>
        <td>0</td>
        <td><span class="arithmatex">\(p[3]+v[3][1]=12+0\le v[2][7]=16\)</span>: <span class="arithmatex">\(v[3][7]\leftarrow 16\)</span>, <span class="arithmatex">\(s[3][7]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>3</td>
        <td>8</td>
        <td>20</td>
        <td>0</td>
        <td><span class="arithmatex">\(p[3]+v[3][2]=12+0\le v[2][8]=20\)</span>: <span class="arithmatex">\(v[3][8]\leftarrow 20\)</span>, <span class="arithmatex">\(s[3][8]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>3</td>
        <td>9</td>
        <td>20</td>
        <td>0</td>
        <td><span class="arithmatex">\(p[3]+v[3][3]=12+6\le v[2][9]=20\)</span>: <span class="arithmatex">\(v[3][9]\leftarrow 20\)</span>, <span class="arithmatex">\(s[3][9]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>3</td>
        <td>10</td>
        <td>22</td>
        <td>0</td>
        <td><span class="arithmatex">\(p[3]+v[3][4]=12+10\le v[2][10]=22\)</span>: <span class="arithmatex">\(v[3][10]\leftarrow 22\)</span>, <span class="arithmatex">\(s[3][10]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>4</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(k<w[4]\)</span>: <span class="arithmatex">\(v[4][0]\leftarrow v[3][0]=0\)</span>, <span class="arithmatex">\(s[4][0]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>4</td>
        <td>1</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(k<w[4]\)</span>: <span class="arithmatex">\(v[4][1]\leftarrow v[3][1]=0\)</span>, <span class="arithmatex">\(s[4][1]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>4</td>
        <td>2</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(k<w[4]\)</span>: <span class="arithmatex">\(v[4][2]\leftarrow v[3][2]=0\)</span>, <span class="arithmatex">\(s[4][2]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>4</td>
        <td>3</td>
        <td>6</td>
        <td>0</td>
        <td><span class="arithmatex">\(k<w[4]\)</span>: <span class="arithmatex">\(v[4][3]\leftarrow v[3][3]=6\)</span>, <span class="arithmatex">\(s[4][3]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>4</td>
        <td>4</td>
        <td>10</td>
        <td>0</td>
        <td><span class="arithmatex">\(k<w[4]\)</span>: <span class="arithmatex">\(v[4][4]\leftarrow v[3][4]=10\)</span>, <span class="arithmatex">\(s[4][4]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>4</td>
        <td>5</td>
        <td>10</td>
        <td>0</td>
        <td><span class="arithmatex">\(k<w[4]\)</span>: <span class="arithmatex">\(v[4][5]\leftarrow v[3][5]=10\)</span>, <span class="arithmatex">\(s[4][5]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>4</td>
        <td>6</td>
        <td>12</td>
        <td>0</td>
        <td><span class="arithmatex">\(k<w[4]\)</span>: <span class="arithmatex">\(v[4][6]\leftarrow v[3][6]=12\)</span>, <span class="arithmatex">\(s[4][6]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>4</td>
        <td>7</td>
        <td>16</td>
        <td>0</td>
        <td><span class="arithmatex">\(p[4]+v[4][0]=13+0\le v[3][7]=16\)</span>: <span class="arithmatex">\(v[4][7]\leftarrow 16\)</span>, <span class="arithmatex">\(s[4][7]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>4</td>
        <td>8</td>
        <td>20</td>
        <td>0</td>
        <td><span class="arithmatex">\(p[4]+v[4][1]=13+0\le v[3][8]=20\)</span>: <span class="arithmatex">\(v[4][8]\leftarrow 20\)</span>, <span class="arithmatex">\(s[4][8]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>4</td>
        <td>9</td>
        <td>20</td>
        <td>0</td>
        <td><span class="arithmatex">\(p[4]+v[4][2]=13+0\le v[3][9]=20\)</span>: <span class="arithmatex">\(v[4][9]\leftarrow 20\)</span>, <span class="arithmatex">\(s[4][9]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>4</td>
        <td>10</td>
        <td>22</td>
        <td>0</td>
        <td><span class="arithmatex">\(p[4]+v[4][3]=13+6\le v[3][10]=22\)</span>: <span class="arithmatex">\(v[4][10]\leftarrow 22\)</span>, <span class="arithmatex">\(s[4][10]\leftarrow 0\)</span></td>
        </tr>
        </table></div>

        This is the matrix $v$ after the execution of the second DP algorithm:

        <div class="tabella" markdown="0"><table>
        <tr>
        <td><span class="arithmatex">\(v[i][k]\)</span></td>
        <td><span class="arithmatex">\(k=0\)</span></td>
        <td><span class="arithmatex">\(k=1\)</span></td>
        <td><span class="arithmatex">\(k=2\)</span></td>
        <td><span class="arithmatex">\(k=3\)</span></td>
        <td><span class="arithmatex">\(k=4\)</span></td>
        <td><span class="arithmatex">\(k=5\)</span></td>
        <td><span class="arithmatex">\(k=6\)</span></td>
        <td><span class="arithmatex">\(k=7\)</span></td>
        <td><span class="arithmatex">\(k=8\)</span></td>
        <td><span class="arithmatex">\(k=9\)</span></td>
        <td><span class="arithmatex">\(k=10\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=0\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=1\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>6</td>
        <td>6</td>
        <td>6</td>
        <td>12</td>
        <td>12</td>
        <td>12</td>
        <td>18</td>
        <td>18</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=2\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>6</td>
        <td>10</td>
        <td>10</td>
        <td>12</td>
        <td>16</td>
        <td>20</td>
        <td>20</td>
        <td>22</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=3\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>6</td>
        <td>10</td>
        <td>10</td>
        <td>12</td>
        <td>16</td>
        <td>20</td>
        <td>20</td>
        <td>22</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=4\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>6</td>
        <td>10</td>
        <td>10</td>
        <td>12</td>
        <td>16</td>
        <td>20</td>
        <td>20</td>
        <td>22</td>
        </tr>
        </table></div>

        This is the matrix $s$ after the execution of the second DP algorithm:

        <div class="tabella" markdown="0"><table>
        <tr>
        <td><span class="arithmatex">\(s[i][k]\)</span></td>
        <td><span class="arithmatex">\(k=0\)</span></td>
        <td><span class="arithmatex">\(k=1\)</span></td>
        <td><span class="arithmatex">\(k=2\)</span></td>
        <td><span class="arithmatex">\(k=3\)</span></td>
        <td><span class="arithmatex">\(k=4\)</span></td>
        <td><span class="arithmatex">\(k=5\)</span></td>
        <td><span class="arithmatex">\(k=6\)</span></td>
        <td><span class="arithmatex">\(k=7\)</span></td>
        <td><span class="arithmatex">\(k=8\)</span></td>
        <td><span class="arithmatex">\(k=9\)</span></td>
        <td><span class="arithmatex">\(k=10\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=0\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=1\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=2\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>1</td>
        <td>1</td>
        <td>0</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=3\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=4\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        </tr>
        </table></div>

    4. We have the following matrix $s$:

        <div class="tabella" markdown="0"><table>
        <tr>
        <td><span class="arithmatex">\(s[i][k]\)</span></td>
        <td><span class="arithmatex">\(k=0\)</span></td>
        <td><span class="arithmatex">\(k=1\)</span></td>
        <td><span class="arithmatex">\(k=2\)</span></td>
        <td><span class="arithmatex">\(k=3\)</span></td>
        <td><span class="arithmatex">\(k=4\)</span></td>
        <td><span class="arithmatex">\(k=5\)</span></td>
        <td><span class="arithmatex">\(k=6\)</span></td>
        <td><span class="arithmatex">\(k=7\)</span></td>
        <td><span class="arithmatex">\(k=8\)</span></td>
        <td><span class="arithmatex">\(k=9\)</span></td>
        <td><span class="arithmatex">\(k=10\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=0\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=1\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=2\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>1</td>
        <td>1</td>
        <td>0</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=3\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=4\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        </tr>
        </table></div>

        We can reconstruct an optimal solution by starting from $i=4$ and $k=10$ as follows:

        <div class="tabella" markdown="0"><table>
        <tr>
        <th>Iteration</th>
        <th><span class="arithmatex">\(i\)</span></th>
        <th><span class="arithmatex">\(k\)</span></th>
        <th><span class="arithmatex">\(s[i][k]\)</span></th>
        <th><span class="arithmatex">\(x[1]\)</span></th>
        <th><span class="arithmatex">\(x[2]\)</span></th>
        <th><span class="arithmatex">\(x[3]\)</span></th>
        <th><span class="arithmatex">\(x[4]\)</span></th>
        <th>Action</th>
        </tr>
        <tr>
        <td>\-</td>
        <td>\-</td>
        <td>\-</td>
        <td>\-</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(i=4\)</span>, <span class="arithmatex">\(k=10\)</span></td>
        </tr>
        <tr>
        <td>1</td>
        <td>4</td>
        <td>10</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(i\leftarrow 3\)</span></td>
        </tr>
        <tr>
        <td>2</td>
        <td>3</td>
        <td>10</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(i\leftarrow 2\)</span></td>
        </tr>
        <tr>
        <td>3</td>
        <td>2</td>
        <td>10</td>
        <td>1</td>
        <td>0</td>
        <td class="cella-blu">1</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(x[2]\leftarrow 1\)</span>, <span class="arithmatex">\(k\leftarrow 10-4=6\)</span></td>
        </tr>
        <tr>
        <td>4</td>
        <td>2</td>
        <td>6</td>
        <td>0</td>
        <td>0</td>
        <td class="cella-blu">1</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(i\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td>5</td>
        <td>1</td>
        <td>6</td>
        <td>1</td>
        <td class="cella-blu">1</td>
        <td class="cella-blu">1</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(x[1]\leftarrow 1\)</span>, <span class="arithmatex">\(k\leftarrow 6-3=3\)</span></td>
        </tr>
        <tr>
        <td>6</td>
        <td>1</td>
        <td>3</td>
        <td>1</td>
        <td class="cella-blu">2</td>
        <td class="cella-blu">1</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(x[1]\leftarrow 2\)</span>, <span class="arithmatex">\(k\leftarrow 3-3=0\)</span></td>
        </tr>
        </table></div>

        Thus, the vector

        $$
        (2,1,0,0)
        $$

        is an optimal solution. The optimal value is

        $$
        v[4][10]=22.
        $$

        The optimal solution is not unique: $(0,1,1,0)$, with total weight $4+6=10$ and total profit $10+12=22$, is also optimal. Both DP algorithms find $(2,1,0,0)$, because they update the stored value only when it strictly improves.

<a id="esercizio-15-9"></a>

!!! esercizio "Exercise 15.9: Exercise 4: Unbounded Knapsack Problem"

    Consider the following UKP instance, where the knapsack has capacity $c=9$, each item type is available in infinitely many copies, and the profits and weights associated with the item types are:

    <div class="tabella" markdown="0"><table>
    <tr>
    <th></th>
    <th><span class="arithmatex">\(i=1\)</span></th>
    <th><span class="arithmatex">\(i=2\)</span></th>
    <th><span class="arithmatex">\(i=3\)</span></th>
    <th><span class="arithmatex">\(i=4\)</span></th>
    </tr>
    <tr>
    <td><span class="arithmatex">\(p_i\)</span></td>
    <td>5</td>
    <td>6</td>
    <td>14</td>
    <td>18</td>
    </tr>
    <tr>
    <td><span class="arithmatex">\(w_i\)</span></td>
    <td>2</td>
    <td>3</td>
    <td>6</td>
    <td>7</td>
    </tr>
    </table></div>

    **Questions**

    1. Show the execution of the first bottom-up DP algorithm by reporting, for each iteration, the values of the vector $v$ and the values of the vector $s$.

    2. Using the vector $s$, reconstruct an optimal solution in integer notation $(x_1,x_2,\dots,x_n)$, and report the optimal value.

    3. Show the execution of the second bottom-up DP algorithm by reporting, for each iteration, the values of the matrices $v$ and $s$.

    4. Using the matrix $s$, reconstruct an optimal solution in integer notation $(x_1,x_2,\dots,x_n)$, and report the optimal value.

??? soluzione "Solution"

    1. Step-by-step execution of the first bottom-up DP algorithm

        For each step of the DP algorithm, the table shows the values of $k$ and $i$, the cells $v[k]$ and $s[k]$, the current value of $m$, the current value of $t$, and the operation performed.

        <div class="tabella" markdown="0"><table>
        <tr>
        <th><span class="arithmatex">\(k\)</span></th>
        <th><span class="arithmatex">\(i\)</span></th>
        <th><span class="arithmatex">\(v[k]\)</span></th>
        <th><span class="arithmatex">\(s[k]\)</span></th>
        <th><span class="arithmatex">\(m\)</span></th>
        <th><span class="arithmatex">\(t\)</span></th>
        <th>Action</th>
        </tr>
        <tr>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td class="cella-blu">0</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(v[0]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>1</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(m\leftarrow 0\)</span>, <span class="arithmatex">\(t\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>1</td>
        <td>1</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(w[1]=2>k=1\)</span>: no update</td>
        </tr>
        <tr>
        <td>1</td>
        <td>2</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(w[2]=3>k=1\)</span>: no update</td>
        </tr>
        <tr>
        <td>1</td>
        <td>3</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(w[3]=6>k=1\)</span>: no update</td>
        </tr>
        <tr>
        <td>1</td>
        <td>4</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(w[4]=7>k=1\)</span>: no update</td>
        </tr>
        <tr>
        <td>1</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td class="cella-blu">0</td>
        <td class="cella-blu">0</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(v[1]\leftarrow 0\)</span>, <span class="arithmatex">\(s[1]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>2</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(m\leftarrow 0\)</span>, <span class="arithmatex">\(t\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>2</td>
        <td>1</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>5</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[1]+v[0]=5+0=5>m=0\)</span>: <span class="arithmatex">\(m\leftarrow 5\)</span>, <span class="arithmatex">\(t\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td>2</td>
        <td>2</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>5</td>
        <td>1</td>
        <td><span class="arithmatex">\(w[2]=3>k=2\)</span>: no update</td>
        </tr>
        <tr>
        <td>2</td>
        <td>3</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>5</td>
        <td>1</td>
        <td><span class="arithmatex">\(w[3]=6>k=2\)</span>: no update</td>
        </tr>
        <tr>
        <td>2</td>
        <td>4</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>5</td>
        <td>1</td>
        <td><span class="arithmatex">\(w[4]=7>k=2\)</span>: no update</td>
        </tr>
        <tr>
        <td>2</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td class="cella-blu">5</td>
        <td class="cella-blu">1</td>
        <td>5</td>
        <td>1</td>
        <td><span class="arithmatex">\(v[2]\leftarrow 5\)</span>, <span class="arithmatex">\(s[2]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td>3</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(m\leftarrow 0\)</span>, <span class="arithmatex">\(t\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>3</td>
        <td>1</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>5</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[1]+v[1]=5+0=5>m=0\)</span>: <span class="arithmatex">\(m\leftarrow 5\)</span>, <span class="arithmatex">\(t\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td>3</td>
        <td>2</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>6</td>
        <td>2</td>
        <td><span class="arithmatex">\(p[2]+v[0]=6+0=6>m=5\)</span>: <span class="arithmatex">\(m\leftarrow 6\)</span>, <span class="arithmatex">\(t\leftarrow 2\)</span></td>
        </tr>
        <tr>
        <td>3</td>
        <td>3</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>6</td>
        <td>2</td>
        <td><span class="arithmatex">\(w[3]=6>k=3\)</span>: no update</td>
        </tr>
        <tr>
        <td>3</td>
        <td>4</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>6</td>
        <td>2</td>
        <td><span class="arithmatex">\(w[4]=7>k=3\)</span>: no update</td>
        </tr>
        <tr>
        <td>3</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td class="cella-blu">6</td>
        <td class="cella-blu">2</td>
        <td>6</td>
        <td>2</td>
        <td><span class="arithmatex">\(v[3]\leftarrow 6\)</span>, <span class="arithmatex">\(s[3]\leftarrow 2\)</span></td>
        </tr>
        <tr>
        <td>4</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(m\leftarrow 0\)</span>, <span class="arithmatex">\(t\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>4</td>
        <td>1</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>10</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[1]+v[2]=5+5=10>m=0\)</span>: <span class="arithmatex">\(m\leftarrow 10\)</span>, <span class="arithmatex">\(t\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td>4</td>
        <td>2</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>10</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[2]+v[1]=6+0=6\le m=10\)</span>: no update</td>
        </tr>
        <tr>
        <td>4</td>
        <td>3</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>10</td>
        <td>1</td>
        <td><span class="arithmatex">\(w[3]=6>k=4\)</span>: no update</td>
        </tr>
        <tr>
        <td>4</td>
        <td>4</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>10</td>
        <td>1</td>
        <td><span class="arithmatex">\(w[4]=7>k=4\)</span>: no update</td>
        </tr>
        <tr>
        <td>4</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td class="cella-blu">10</td>
        <td class="cella-blu">1</td>
        <td>10</td>
        <td>1</td>
        <td><span class="arithmatex">\(v[4]\leftarrow 10\)</span>, <span class="arithmatex">\(s[4]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td>5</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(m\leftarrow 0\)</span>, <span class="arithmatex">\(t\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>5</td>
        <td>1</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>11</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[1]+v[3]=5+6=11>m=0\)</span>: <span class="arithmatex">\(m\leftarrow 11\)</span>, <span class="arithmatex">\(t\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td>5</td>
        <td>2</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>11</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[2]+v[2]=6+5=11\le m=11\)</span>: no update</td>
        </tr>
        <tr>
        <td>5</td>
        <td>3</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>11</td>
        <td>1</td>
        <td><span class="arithmatex">\(w[3]=6>k=5\)</span>: no update</td>
        </tr>
        <tr>
        <td>5</td>
        <td>4</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>11</td>
        <td>1</td>
        <td><span class="arithmatex">\(w[4]=7>k=5\)</span>: no update</td>
        </tr>
        <tr>
        <td>5</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td class="cella-blu">11</td>
        <td class="cella-blu">1</td>
        <td>11</td>
        <td>1</td>
        <td><span class="arithmatex">\(v[5]\leftarrow 11\)</span>, <span class="arithmatex">\(s[5]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td>6</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(m\leftarrow 0\)</span>, <span class="arithmatex">\(t\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>6</td>
        <td>1</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>15</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[1]+v[4]=5+10=15>m=0\)</span>: <span class="arithmatex">\(m\leftarrow 15\)</span>, <span class="arithmatex">\(t\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td>6</td>
        <td>2</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>15</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[2]+v[3]=6+6=12\le m=15\)</span>: no update</td>
        </tr>
        <tr>
        <td>6</td>
        <td>3</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>15</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[3]+v[0]=14+0=14\le m=15\)</span>: no update</td>
        </tr>
        <tr>
        <td>6</td>
        <td>4</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>15</td>
        <td>1</td>
        <td><span class="arithmatex">\(w[4]=7>k=6\)</span>: no update</td>
        </tr>
        <tr>
        <td>6</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td class="cella-blu">15</td>
        <td class="cella-blu">1</td>
        <td>15</td>
        <td>1</td>
        <td><span class="arithmatex">\(v[6]\leftarrow 15\)</span>, <span class="arithmatex">\(s[6]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td>7</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(m\leftarrow 0\)</span>, <span class="arithmatex">\(t\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>7</td>
        <td>1</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>16</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[1]+v[5]=5+11=16>m=0\)</span>: <span class="arithmatex">\(m\leftarrow 16\)</span>, <span class="arithmatex">\(t\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td>7</td>
        <td>2</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>16</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[2]+v[4]=6+10=16\le m=16\)</span>: no update</td>
        </tr>
        <tr>
        <td>7</td>
        <td>3</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>16</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[3]+v[1]=14+0=14\le m=16\)</span>: no update</td>
        </tr>
        <tr>
        <td>7</td>
        <td>4</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>18</td>
        <td>4</td>
        <td><span class="arithmatex">\(p[4]+v[0]=18+0=18>m=16\)</span>: <span class="arithmatex">\(m\leftarrow 18\)</span>, <span class="arithmatex">\(t\leftarrow 4\)</span></td>
        </tr>
        <tr>
        <td>7</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td class="cella-blu">18</td>
        <td class="cella-blu">4</td>
        <td>18</td>
        <td>4</td>
        <td><span class="arithmatex">\(v[7]\leftarrow 18\)</span>, <span class="arithmatex">\(s[7]\leftarrow 4\)</span></td>
        </tr>
        <tr>
        <td>8</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(m\leftarrow 0\)</span>, <span class="arithmatex">\(t\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>8</td>
        <td>1</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>20</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[1]+v[6]=5+15=20>m=0\)</span>: <span class="arithmatex">\(m\leftarrow 20\)</span>, <span class="arithmatex">\(t\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td>8</td>
        <td>2</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>20</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[2]+v[5]=6+11=17\le m=20\)</span>: no update</td>
        </tr>
        <tr>
        <td>8</td>
        <td>3</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>20</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[3]+v[2]=14+5=19\le m=20\)</span>: no update</td>
        </tr>
        <tr>
        <td>8</td>
        <td>4</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>20</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[4]+v[1]=18+0=18\le m=20\)</span>: no update</td>
        </tr>
        <tr>
        <td>8</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td class="cella-blu">20</td>
        <td class="cella-blu">1</td>
        <td>20</td>
        <td>1</td>
        <td><span class="arithmatex">\(v[8]\leftarrow 20\)</span>, <span class="arithmatex">\(s[8]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td>9</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(m\leftarrow 0\)</span>, <span class="arithmatex">\(t\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>9</td>
        <td>1</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>23</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[1]+v[7]=5+18=23>m=0\)</span>: <span class="arithmatex">\(m\leftarrow 23\)</span>, <span class="arithmatex">\(t\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td>9</td>
        <td>2</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>23</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[2]+v[6]=6+15=21\le m=23\)</span>: no update</td>
        </tr>
        <tr>
        <td>9</td>
        <td>3</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>23</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[3]+v[3]=14+6=20\le m=23\)</span>: no update</td>
        </tr>
        <tr>
        <td>9</td>
        <td>4</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>23</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[4]+v[2]=18+5=23\le m=23\)</span>: no update</td>
        </tr>
        <tr>
        <td>9</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td class="cella-blu">23</td>
        <td class="cella-blu">1</td>
        <td>23</td>
        <td>1</td>
        <td><span class="arithmatex">\(v[9]\leftarrow 23\)</span>, <span class="arithmatex">\(s[9]\leftarrow 1\)</span></td>
        </tr>
        </table></div>

        This is the vector $v$ after the execution of the first DP algorithm:

        <div class="tabella" markdown="0"><table>
        <tr>
        <th></th>
        <th><span class="arithmatex">\(k=0\)</span></th>
        <th><span class="arithmatex">\(k=1\)</span></th>
        <th><span class="arithmatex">\(k=2\)</span></th>
        <th><span class="arithmatex">\(k=3\)</span></th>
        <th><span class="arithmatex">\(k=4\)</span></th>
        <th><span class="arithmatex">\(k=5\)</span></th>
        <th><span class="arithmatex">\(k=6\)</span></th>
        <th><span class="arithmatex">\(k=7\)</span></th>
        <th><span class="arithmatex">\(k=8\)</span></th>
        <th><span class="arithmatex">\(k=9\)</span></th>
        </tr>
        <tr>
        <td><span class="arithmatex">\(v[k]\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>5</td>
        <td>6</td>
        <td>10</td>
        <td>11</td>
        <td>15</td>
        <td>18</td>
        <td>20</td>
        <td>23</td>
        </tr>
        </table></div>

        This is the vector $s$ after the execution of the first DP algorithm:

        <div class="tabella" markdown="0"><table>
        <tr>
        <th></th>
        <th><span class="arithmatex">\(k=0\)</span></th>
        <th><span class="arithmatex">\(k=1\)</span></th>
        <th><span class="arithmatex">\(k=2\)</span></th>
        <th><span class="arithmatex">\(k=3\)</span></th>
        <th><span class="arithmatex">\(k=4\)</span></th>
        <th><span class="arithmatex">\(k=5\)</span></th>
        <th><span class="arithmatex">\(k=6\)</span></th>
        <th><span class="arithmatex">\(k=7\)</span></th>
        <th><span class="arithmatex">\(k=8\)</span></th>
        <th><span class="arithmatex">\(k=9\)</span></th>
        </tr>
        <tr>
        <td><span class="arithmatex">\(s[k]\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>1</td>
        <td>2</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>4</td>
        <td>1</td>
        <td>1</td>
        </tr>
        </table></div>

    2. We have the following vector $s$:

        <div class="tabella" markdown="0"><table>
        <tr>
        <th></th>
        <th><span class="arithmatex">\(k=0\)</span></th>
        <th><span class="arithmatex">\(k=1\)</span></th>
        <th><span class="arithmatex">\(k=2\)</span></th>
        <th><span class="arithmatex">\(k=3\)</span></th>
        <th><span class="arithmatex">\(k=4\)</span></th>
        <th><span class="arithmatex">\(k=5\)</span></th>
        <th><span class="arithmatex">\(k=6\)</span></th>
        <th><span class="arithmatex">\(k=7\)</span></th>
        <th><span class="arithmatex">\(k=8\)</span></th>
        <th><span class="arithmatex">\(k=9\)</span></th>
        </tr>
        <tr>
        <td><span class="arithmatex">\(s[k]\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>1</td>
        <td>2</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>4</td>
        <td>1</td>
        <td>1</td>
        </tr>
        </table></div>

        We can reconstruct an optimal solution by starting from $k=9$ as follows:

        <div class="tabella" markdown="0"><table>
        <tr>
        <th>Iteration</th>
        <th><span class="arithmatex">\(k\)</span></th>
        <th><span class="arithmatex">\(s[k]\)</span></th>
        <th><span class="arithmatex">\(x[1]\)</span></th>
        <th><span class="arithmatex">\(x[2]\)</span></th>
        <th><span class="arithmatex">\(x[3]\)</span></th>
        <th><span class="arithmatex">\(x[4]\)</span></th>
        <th>Action</th>
        </tr>
        <tr>
        <td>\-</td>
        <td>\-</td>
        <td>\-</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(k=9\)</span></td>
        </tr>
        <tr>
        <td>1</td>
        <td>9</td>
        <td>1</td>
        <td class="cella-blu">1</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(x[1]\leftarrow 1\)</span>, <span class="arithmatex">\(k\leftarrow 9-2=7\)</span></td>
        </tr>
        <tr>
        <td>2</td>
        <td>7</td>
        <td>4</td>
        <td class="cella-blu">1</td>
        <td>0</td>
        <td>0</td>
        <td class="cella-blu">1</td>
        <td><span class="arithmatex">\(x[4]\leftarrow 1\)</span>, <span class="arithmatex">\(k\leftarrow 7-7=0\)</span></td>
        </tr>
        </table></div>

        Thus, the vector

        $$
        (1,0,0,1)
        $$

        is an optimal solution. The optimal value is

        $$
        v[9]=23.
        $$

    3. Step-by-step execution of the second bottom-up DP algorithm

        For each step of the DP algorithm, the table shows the values of $i$ and $k$, the cells $v[i][k]$ and $s[i][k]$, and the operation performed. All entries in row $i=0$ are initialized to $0$.

        <div class="tabella" markdown="0"><table>
        <tr>
        <th><span class="arithmatex">\(i\)</span></th>
        <th><span class="arithmatex">\(k\)</span></th>
        <th><span class="arithmatex">\(v[i][k]\)</span></th>
        <th><span class="arithmatex">\(s[i][k]\)</span></th>
        <th>Action</th>
        </tr>
        <tr>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(v[0][0]\leftarrow 0\)</span>, <span class="arithmatex">\(s[0][0]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>0</td>
        <td>1</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(v[0][1]\leftarrow 0\)</span>, <span class="arithmatex">\(s[0][1]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>0</td>
        <td>2</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(v[0][2]\leftarrow 0\)</span>, <span class="arithmatex">\(s[0][2]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>0</td>
        <td>3</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(v[0][3]\leftarrow 0\)</span>, <span class="arithmatex">\(s[0][3]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>0</td>
        <td>4</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(v[0][4]\leftarrow 0\)</span>, <span class="arithmatex">\(s[0][4]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>0</td>
        <td>5</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(v[0][5]\leftarrow 0\)</span>, <span class="arithmatex">\(s[0][5]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>0</td>
        <td>6</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(v[0][6]\leftarrow 0\)</span>, <span class="arithmatex">\(s[0][6]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>0</td>
        <td>7</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(v[0][7]\leftarrow 0\)</span>, <span class="arithmatex">\(s[0][7]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>0</td>
        <td>8</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(v[0][8]\leftarrow 0\)</span>, <span class="arithmatex">\(s[0][8]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>0</td>
        <td>9</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(v[0][9]\leftarrow 0\)</span>, <span class="arithmatex">\(s[0][9]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>1</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(k<w[1]\)</span>: <span class="arithmatex">\(v[1][0]\leftarrow v[0][0]=0\)</span>, <span class="arithmatex">\(s[1][0]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>1</td>
        <td>1</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(k<w[1]\)</span>: <span class="arithmatex">\(v[1][1]\leftarrow v[0][1]=0\)</span>, <span class="arithmatex">\(s[1][1]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>1</td>
        <td>2</td>
        <td>5</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[1]+v[1][0]=5+0>v[0][2]=0\)</span>: <span class="arithmatex">\(v[1][2]\leftarrow 5\)</span>, <span class="arithmatex">\(s[1][2]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td>1</td>
        <td>3</td>
        <td>5</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[1]+v[1][1]=5+0>v[0][3]=0\)</span>: <span class="arithmatex">\(v[1][3]\leftarrow 5\)</span>, <span class="arithmatex">\(s[1][3]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td>1</td>
        <td>4</td>
        <td>10</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[1]+v[1][2]=5+5>v[0][4]=0\)</span>: <span class="arithmatex">\(v[1][4]\leftarrow 10\)</span>, <span class="arithmatex">\(s[1][4]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td>1</td>
        <td>5</td>
        <td>10</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[1]+v[1][3]=5+5>v[0][5]=0\)</span>: <span class="arithmatex">\(v[1][5]\leftarrow 10\)</span>, <span class="arithmatex">\(s[1][5]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td>1</td>
        <td>6</td>
        <td>15</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[1]+v[1][4]=5+10>v[0][6]=0\)</span>: <span class="arithmatex">\(v[1][6]\leftarrow 15\)</span>, <span class="arithmatex">\(s[1][6]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td>1</td>
        <td>7</td>
        <td>15</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[1]+v[1][5]=5+10>v[0][7]=0\)</span>: <span class="arithmatex">\(v[1][7]\leftarrow 15\)</span>, <span class="arithmatex">\(s[1][7]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td>1</td>
        <td>8</td>
        <td>20</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[1]+v[1][6]=5+15>v[0][8]=0\)</span>: <span class="arithmatex">\(v[1][8]\leftarrow 20\)</span>, <span class="arithmatex">\(s[1][8]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td>1</td>
        <td>9</td>
        <td>20</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[1]+v[1][7]=5+15>v[0][9]=0\)</span>: <span class="arithmatex">\(v[1][9]\leftarrow 20\)</span>, <span class="arithmatex">\(s[1][9]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td>2</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(k<w[2]\)</span>: <span class="arithmatex">\(v[2][0]\leftarrow v[1][0]=0\)</span>, <span class="arithmatex">\(s[2][0]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>2</td>
        <td>1</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(k<w[2]\)</span>: <span class="arithmatex">\(v[2][1]\leftarrow v[1][1]=0\)</span>, <span class="arithmatex">\(s[2][1]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>2</td>
        <td>2</td>
        <td>5</td>
        <td>0</td>
        <td><span class="arithmatex">\(k<w[2]\)</span>: <span class="arithmatex">\(v[2][2]\leftarrow v[1][2]=5\)</span>, <span class="arithmatex">\(s[2][2]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>2</td>
        <td>3</td>
        <td>6</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[2]+v[2][0]=6+0>v[1][3]=5\)</span>: <span class="arithmatex">\(v[2][3]\leftarrow 6\)</span>, <span class="arithmatex">\(s[2][3]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td>2</td>
        <td>4</td>
        <td>10</td>
        <td>0</td>
        <td><span class="arithmatex">\(p[2]+v[2][1]=6+0\le v[1][4]=10\)</span>: <span class="arithmatex">\(v[2][4]\leftarrow 10\)</span>, <span class="arithmatex">\(s[2][4]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>2</td>
        <td>5</td>
        <td>11</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[2]+v[2][2]=6+5>v[1][5]=10\)</span>: <span class="arithmatex">\(v[2][5]\leftarrow 11\)</span>, <span class="arithmatex">\(s[2][5]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td>2</td>
        <td>6</td>
        <td>15</td>
        <td>0</td>
        <td><span class="arithmatex">\(p[2]+v[2][3]=6+6\le v[1][6]=15\)</span>: <span class="arithmatex">\(v[2][6]\leftarrow 15\)</span>, <span class="arithmatex">\(s[2][6]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>2</td>
        <td>7</td>
        <td>16</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[2]+v[2][4]=6+10>v[1][7]=15\)</span>: <span class="arithmatex">\(v[2][7]\leftarrow 16\)</span>, <span class="arithmatex">\(s[2][7]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td>2</td>
        <td>8</td>
        <td>20</td>
        <td>0</td>
        <td><span class="arithmatex">\(p[2]+v[2][5]=6+11\le v[1][8]=20\)</span>: <span class="arithmatex">\(v[2][8]\leftarrow 20\)</span>, <span class="arithmatex">\(s[2][8]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>2</td>
        <td>9</td>
        <td>21</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[2]+v[2][6]=6+15>v[1][9]=20\)</span>: <span class="arithmatex">\(v[2][9]\leftarrow 21\)</span>, <span class="arithmatex">\(s[2][9]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td>3</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(k<w[3]\)</span>: <span class="arithmatex">\(v[3][0]\leftarrow v[2][0]=0\)</span>, <span class="arithmatex">\(s[3][0]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>3</td>
        <td>1</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(k<w[3]\)</span>: <span class="arithmatex">\(v[3][1]\leftarrow v[2][1]=0\)</span>, <span class="arithmatex">\(s[3][1]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>3</td>
        <td>2</td>
        <td>5</td>
        <td>0</td>
        <td><span class="arithmatex">\(k<w[3]\)</span>: <span class="arithmatex">\(v[3][2]\leftarrow v[2][2]=5\)</span>, <span class="arithmatex">\(s[3][2]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>3</td>
        <td>3</td>
        <td>6</td>
        <td>0</td>
        <td><span class="arithmatex">\(k<w[3]\)</span>: <span class="arithmatex">\(v[3][3]\leftarrow v[2][3]=6\)</span>, <span class="arithmatex">\(s[3][3]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>3</td>
        <td>4</td>
        <td>10</td>
        <td>0</td>
        <td><span class="arithmatex">\(k<w[3]\)</span>: <span class="arithmatex">\(v[3][4]\leftarrow v[2][4]=10\)</span>, <span class="arithmatex">\(s[3][4]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>3</td>
        <td>5</td>
        <td>11</td>
        <td>0</td>
        <td><span class="arithmatex">\(k<w[3]\)</span>: <span class="arithmatex">\(v[3][5]\leftarrow v[2][5]=11\)</span>, <span class="arithmatex">\(s[3][5]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>3</td>
        <td>6</td>
        <td>15</td>
        <td>0</td>
        <td><span class="arithmatex">\(p[3]+v[3][0]=14+0\le v[2][6]=15\)</span>: <span class="arithmatex">\(v[3][6]\leftarrow 15\)</span>, <span class="arithmatex">\(s[3][6]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>3</td>
        <td>7</td>
        <td>16</td>
        <td>0</td>
        <td><span class="arithmatex">\(p[3]+v[3][1]=14+0\le v[2][7]=16\)</span>: <span class="arithmatex">\(v[3][7]\leftarrow 16\)</span>, <span class="arithmatex">\(s[3][7]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>3</td>
        <td>8</td>
        <td>20</td>
        <td>0</td>
        <td><span class="arithmatex">\(p[3]+v[3][2]=14+5\le v[2][8]=20\)</span>: <span class="arithmatex">\(v[3][8]\leftarrow 20\)</span>, <span class="arithmatex">\(s[3][8]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>3</td>
        <td>9</td>
        <td>21</td>
        <td>0</td>
        <td><span class="arithmatex">\(p[3]+v[3][3]=14+6\le v[2][9]=21\)</span>: <span class="arithmatex">\(v[3][9]\leftarrow 21\)</span>, <span class="arithmatex">\(s[3][9]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>4</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(k<w[4]\)</span>: <span class="arithmatex">\(v[4][0]\leftarrow v[3][0]=0\)</span>, <span class="arithmatex">\(s[4][0]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>4</td>
        <td>1</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(k<w[4]\)</span>: <span class="arithmatex">\(v[4][1]\leftarrow v[3][1]=0\)</span>, <span class="arithmatex">\(s[4][1]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>4</td>
        <td>2</td>
        <td>5</td>
        <td>0</td>
        <td><span class="arithmatex">\(k<w[4]\)</span>: <span class="arithmatex">\(v[4][2]\leftarrow v[3][2]=5\)</span>, <span class="arithmatex">\(s[4][2]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>4</td>
        <td>3</td>
        <td>6</td>
        <td>0</td>
        <td><span class="arithmatex">\(k<w[4]\)</span>: <span class="arithmatex">\(v[4][3]\leftarrow v[3][3]=6\)</span>, <span class="arithmatex">\(s[4][3]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>4</td>
        <td>4</td>
        <td>10</td>
        <td>0</td>
        <td><span class="arithmatex">\(k<w[4]\)</span>: <span class="arithmatex">\(v[4][4]\leftarrow v[3][4]=10\)</span>, <span class="arithmatex">\(s[4][4]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>4</td>
        <td>5</td>
        <td>11</td>
        <td>0</td>
        <td><span class="arithmatex">\(k<w[4]\)</span>: <span class="arithmatex">\(v[4][5]\leftarrow v[3][5]=11\)</span>, <span class="arithmatex">\(s[4][5]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>4</td>
        <td>6</td>
        <td>15</td>
        <td>0</td>
        <td><span class="arithmatex">\(k<w[4]\)</span>: <span class="arithmatex">\(v[4][6]\leftarrow v[3][6]=15\)</span>, <span class="arithmatex">\(s[4][6]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>4</td>
        <td>7</td>
        <td>18</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[4]+v[4][0]=18+0>v[3][7]=16\)</span>: <span class="arithmatex">\(v[4][7]\leftarrow 18\)</span>, <span class="arithmatex">\(s[4][7]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td>4</td>
        <td>8</td>
        <td>20</td>
        <td>0</td>
        <td><span class="arithmatex">\(p[4]+v[4][1]=18+0\le v[3][8]=20\)</span>: <span class="arithmatex">\(v[4][8]\leftarrow 20\)</span>, <span class="arithmatex">\(s[4][8]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>4</td>
        <td>9</td>
        <td>23</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[4]+v[4][2]=18+5>v[3][9]=21\)</span>: <span class="arithmatex">\(v[4][9]\leftarrow 23\)</span>, <span class="arithmatex">\(s[4][9]\leftarrow 1\)</span></td>
        </tr>
        </table></div>

        This is the matrix $v$ after the execution of the second DP algorithm:

        <div class="tabella" markdown="0"><table>
        <tr>
        <td><span class="arithmatex">\(v[i][k]\)</span></td>
        <td><span class="arithmatex">\(k=0\)</span></td>
        <td><span class="arithmatex">\(k=1\)</span></td>
        <td><span class="arithmatex">\(k=2\)</span></td>
        <td><span class="arithmatex">\(k=3\)</span></td>
        <td><span class="arithmatex">\(k=4\)</span></td>
        <td><span class="arithmatex">\(k=5\)</span></td>
        <td><span class="arithmatex">\(k=6\)</span></td>
        <td><span class="arithmatex">\(k=7\)</span></td>
        <td><span class="arithmatex">\(k=8\)</span></td>
        <td><span class="arithmatex">\(k=9\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=0\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=1\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>5</td>
        <td>5</td>
        <td>10</td>
        <td>10</td>
        <td>15</td>
        <td>15</td>
        <td>20</td>
        <td>20</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=2\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>5</td>
        <td>6</td>
        <td>10</td>
        <td>11</td>
        <td>15</td>
        <td>16</td>
        <td>20</td>
        <td>21</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=3\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>5</td>
        <td>6</td>
        <td>10</td>
        <td>11</td>
        <td>15</td>
        <td>16</td>
        <td>20</td>
        <td>21</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=4\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>5</td>
        <td>6</td>
        <td>10</td>
        <td>11</td>
        <td>15</td>
        <td>18</td>
        <td>20</td>
        <td>23</td>
        </tr>
        </table></div>

        This is the matrix $s$ after the execution of the second DP algorithm:

        <div class="tabella" markdown="0"><table>
        <tr>
        <td><span class="arithmatex">\(s[i][k]\)</span></td>
        <td><span class="arithmatex">\(k=0\)</span></td>
        <td><span class="arithmatex">\(k=1\)</span></td>
        <td><span class="arithmatex">\(k=2\)</span></td>
        <td><span class="arithmatex">\(k=3\)</span></td>
        <td><span class="arithmatex">\(k=4\)</span></td>
        <td><span class="arithmatex">\(k=5\)</span></td>
        <td><span class="arithmatex">\(k=6\)</span></td>
        <td><span class="arithmatex">\(k=7\)</span></td>
        <td><span class="arithmatex">\(k=8\)</span></td>
        <td><span class="arithmatex">\(k=9\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=0\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=1\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=2\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>1</td>
        <td>0</td>
        <td>1</td>
        <td>0</td>
        <td>1</td>
        <td>0</td>
        <td>1</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=3\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=4\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>1</td>
        <td>0</td>
        <td>1</td>
        </tr>
        </table></div>

    4. We have the following matrix $s$:

        <div class="tabella" markdown="0"><table>
        <tr>
        <td><span class="arithmatex">\(s[i][k]\)</span></td>
        <td><span class="arithmatex">\(k=0\)</span></td>
        <td><span class="arithmatex">\(k=1\)</span></td>
        <td><span class="arithmatex">\(k=2\)</span></td>
        <td><span class="arithmatex">\(k=3\)</span></td>
        <td><span class="arithmatex">\(k=4\)</span></td>
        <td><span class="arithmatex">\(k=5\)</span></td>
        <td><span class="arithmatex">\(k=6\)</span></td>
        <td><span class="arithmatex">\(k=7\)</span></td>
        <td><span class="arithmatex">\(k=8\)</span></td>
        <td><span class="arithmatex">\(k=9\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=0\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=1\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=2\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>1</td>
        <td>0</td>
        <td>1</td>
        <td>0</td>
        <td>1</td>
        <td>0</td>
        <td>1</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=3\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=4\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>1</td>
        <td>0</td>
        <td>1</td>
        </tr>
        </table></div>

        We can reconstruct an optimal solution by starting from $i=4$ and $k=9$ as follows:

        <div class="tabella" markdown="0"><table>
        <tr>
        <th>Iteration</th>
        <th><span class="arithmatex">\(i\)</span></th>
        <th><span class="arithmatex">\(k\)</span></th>
        <th><span class="arithmatex">\(s[i][k]\)</span></th>
        <th><span class="arithmatex">\(x[1]\)</span></th>
        <th><span class="arithmatex">\(x[2]\)</span></th>
        <th><span class="arithmatex">\(x[3]\)</span></th>
        <th><span class="arithmatex">\(x[4]\)</span></th>
        <th>Action</th>
        </tr>
        <tr>
        <td>\-</td>
        <td>\-</td>
        <td>\-</td>
        <td>\-</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(i=4\)</span>, <span class="arithmatex">\(k=9\)</span></td>
        </tr>
        <tr>
        <td>1</td>
        <td>4</td>
        <td>9</td>
        <td>1</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td class="cella-blu">1</td>
        <td><span class="arithmatex">\(x[4]\leftarrow 1\)</span>, <span class="arithmatex">\(k\leftarrow 9-7=2\)</span></td>
        </tr>
        <tr>
        <td>2</td>
        <td>4</td>
        <td>2</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td class="cella-blu">1</td>
        <td><span class="arithmatex">\(i\leftarrow 3\)</span></td>
        </tr>
        <tr>
        <td>3</td>
        <td>3</td>
        <td>2</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td class="cella-blu">1</td>
        <td><span class="arithmatex">\(i\leftarrow 2\)</span></td>
        </tr>
        <tr>
        <td>4</td>
        <td>2</td>
        <td>2</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td class="cella-blu">1</td>
        <td><span class="arithmatex">\(i\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td>5</td>
        <td>1</td>
        <td>2</td>
        <td>1</td>
        <td class="cella-blu">1</td>
        <td>0</td>
        <td>0</td>
        <td class="cella-blu">1</td>
        <td><span class="arithmatex">\(x[1]\leftarrow 1\)</span>, <span class="arithmatex">\(k\leftarrow 2-2=0\)</span></td>
        </tr>
        </table></div>

        Thus, the vector

        $$
        (1,0,0,1)
        $$

        is an optimal solution. The optimal value is

        $$
        v[4][9]=23.
        $$

<a id="esercizio-15-10"></a>

!!! esercizio "Exercise 15.10: Exercise 5: Unbounded Knapsack Problem"

    Consider the following UKP instance, where the knapsack has capacity $c=11$, each item type is available in infinitely many copies, and the profits and weights associated with the item types are:

    <div class="tabella" markdown="0"><table>
    <tr>
    <th></th>
    <th><span class="arithmatex">\(i=1\)</span></th>
    <th><span class="arithmatex">\(i=2\)</span></th>
    <th><span class="arithmatex">\(i=3\)</span></th>
    <th><span class="arithmatex">\(i=4\)</span></th>
    <th><span class="arithmatex">\(i=5\)</span></th>
    </tr>
    <tr>
    <td><span class="arithmatex">\(p_i\)</span></td>
    <td>3</td>
    <td>9</td>
    <td>10</td>
    <td>16</td>
    <td>17</td>
    </tr>
    <tr>
    <td><span class="arithmatex">\(w_i\)</span></td>
    <td>2</td>
    <td>5</td>
    <td>6</td>
    <td>9</td>
    <td>10</td>
    </tr>
    </table></div>

    **Questions**

    1. Show the execution of the first bottom-up DP algorithm by reporting, for each iteration, the values of the vector $v$ and the values of the vector $s$.

    2. Using the vector $s$, reconstruct an optimal solution in integer notation $(x_1,x_2,\dots,x_n)$, and report the optimal value.

    3. Show the execution of the second bottom-up DP algorithm by reporting, for each iteration, the values of the matrices $v$ and $s$.

    4. Using the matrix $s$, reconstruct an optimal solution in integer notation $(x_1,x_2,\dots,x_n)$, and report the optimal value.

??? soluzione "Solution"

    1. Step-by-step execution of the first bottom-up DP algorithm

        For each step of the DP algorithm, the table shows the values of $k$ and $i$, the cells $v[k]$ and $s[k]$, the current value of $m$, the current value of $t$, and the operation performed.

        <div class="tabella" markdown="0"><table>
        <tr>
        <th><span class="arithmatex">\(k\)</span></th>
        <th><span class="arithmatex">\(i\)</span></th>
        <th><span class="arithmatex">\(v[k]\)</span></th>
        <th><span class="arithmatex">\(s[k]\)</span></th>
        <th><span class="arithmatex">\(m\)</span></th>
        <th><span class="arithmatex">\(t\)</span></th>
        <th>Action</th>
        </tr>
        <tr>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td class="cella-blu">0</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(v[0]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>1</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(m\leftarrow 0\)</span>, <span class="arithmatex">\(t\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>1</td>
        <td>1</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(w[1]=2>k=1\)</span>: no update</td>
        </tr>
        <tr>
        <td>1</td>
        <td>2</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(w[2]=5>k=1\)</span>: no update</td>
        </tr>
        <tr>
        <td>1</td>
        <td>3</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(w[3]=6>k=1\)</span>: no update</td>
        </tr>
        <tr>
        <td>1</td>
        <td>4</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(w[4]=9>k=1\)</span>: no update</td>
        </tr>
        <tr>
        <td>1</td>
        <td>5</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(w[5]=10>k=1\)</span>: no update</td>
        </tr>
        <tr>
        <td>1</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td class="cella-blu">0</td>
        <td class="cella-blu">0</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(v[1]\leftarrow 0\)</span>, <span class="arithmatex">\(s[1]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>2</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(m\leftarrow 0\)</span>, <span class="arithmatex">\(t\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>2</td>
        <td>1</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>3</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[1]+v[0]=3+0=3>m=0\)</span>: <span class="arithmatex">\(m\leftarrow 3\)</span>, <span class="arithmatex">\(t\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td>2</td>
        <td>2</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>3</td>
        <td>1</td>
        <td><span class="arithmatex">\(w[2]=5>k=2\)</span>: no update</td>
        </tr>
        <tr>
        <td>2</td>
        <td>3</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>3</td>
        <td>1</td>
        <td><span class="arithmatex">\(w[3]=6>k=2\)</span>: no update</td>
        </tr>
        <tr>
        <td>2</td>
        <td>4</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>3</td>
        <td>1</td>
        <td><span class="arithmatex">\(w[4]=9>k=2\)</span>: no update</td>
        </tr>
        <tr>
        <td>2</td>
        <td>5</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>3</td>
        <td>1</td>
        <td><span class="arithmatex">\(w[5]=10>k=2\)</span>: no update</td>
        </tr>
        <tr>
        <td>2</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td class="cella-blu">3</td>
        <td class="cella-blu">1</td>
        <td>3</td>
        <td>1</td>
        <td><span class="arithmatex">\(v[2]\leftarrow 3\)</span>, <span class="arithmatex">\(s[2]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td>3</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(m\leftarrow 0\)</span>, <span class="arithmatex">\(t\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>3</td>
        <td>1</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>3</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[1]+v[1]=3+0=3>m=0\)</span>: <span class="arithmatex">\(m\leftarrow 3\)</span>, <span class="arithmatex">\(t\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td>3</td>
        <td>2</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>3</td>
        <td>1</td>
        <td><span class="arithmatex">\(w[2]=5>k=3\)</span>: no update</td>
        </tr>
        <tr>
        <td>3</td>
        <td>3</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>3</td>
        <td>1</td>
        <td><span class="arithmatex">\(w[3]=6>k=3\)</span>: no update</td>
        </tr>
        <tr>
        <td>3</td>
        <td>4</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>3</td>
        <td>1</td>
        <td><span class="arithmatex">\(w[4]=9>k=3\)</span>: no update</td>
        </tr>
        <tr>
        <td>3</td>
        <td>5</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>3</td>
        <td>1</td>
        <td><span class="arithmatex">\(w[5]=10>k=3\)</span>: no update</td>
        </tr>
        <tr>
        <td>3</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td class="cella-blu">3</td>
        <td class="cella-blu">1</td>
        <td>3</td>
        <td>1</td>
        <td><span class="arithmatex">\(v[3]\leftarrow 3\)</span>, <span class="arithmatex">\(s[3]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td>4</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(m\leftarrow 0\)</span>, <span class="arithmatex">\(t\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>4</td>
        <td>1</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>6</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[1]+v[2]=3+3=6>m=0\)</span>: <span class="arithmatex">\(m\leftarrow 6\)</span>, <span class="arithmatex">\(t\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td>4</td>
        <td>2</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>6</td>
        <td>1</td>
        <td><span class="arithmatex">\(w[2]=5>k=4\)</span>: no update</td>
        </tr>
        <tr>
        <td>4</td>
        <td>3</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>6</td>
        <td>1</td>
        <td><span class="arithmatex">\(w[3]=6>k=4\)</span>: no update</td>
        </tr>
        <tr>
        <td>4</td>
        <td>4</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>6</td>
        <td>1</td>
        <td><span class="arithmatex">\(w[4]=9>k=4\)</span>: no update</td>
        </tr>
        <tr>
        <td>4</td>
        <td>5</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>6</td>
        <td>1</td>
        <td><span class="arithmatex">\(w[5]=10>k=4\)</span>: no update</td>
        </tr>
        <tr>
        <td>4</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td class="cella-blu">6</td>
        <td class="cella-blu">1</td>
        <td>6</td>
        <td>1</td>
        <td><span class="arithmatex">\(v[4]\leftarrow 6\)</span>, <span class="arithmatex">\(s[4]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td>5</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(m\leftarrow 0\)</span>, <span class="arithmatex">\(t\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>5</td>
        <td>1</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>6</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[1]+v[3]=3+3=6>m=0\)</span>: <span class="arithmatex">\(m\leftarrow 6\)</span>, <span class="arithmatex">\(t\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td>5</td>
        <td>2</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>9</td>
        <td>2</td>
        <td><span class="arithmatex">\(p[2]+v[0]=9+0=9>m=6\)</span>: <span class="arithmatex">\(m\leftarrow 9\)</span>, <span class="arithmatex">\(t\leftarrow 2\)</span></td>
        </tr>
        <tr>
        <td>5</td>
        <td>3</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>9</td>
        <td>2</td>
        <td><span class="arithmatex">\(w[3]=6>k=5\)</span>: no update</td>
        </tr>
        <tr>
        <td>5</td>
        <td>4</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>9</td>
        <td>2</td>
        <td><span class="arithmatex">\(w[4]=9>k=5\)</span>: no update</td>
        </tr>
        <tr>
        <td>5</td>
        <td>5</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>9</td>
        <td>2</td>
        <td><span class="arithmatex">\(w[5]=10>k=5\)</span>: no update</td>
        </tr>
        <tr>
        <td>5</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td class="cella-blu">9</td>
        <td class="cella-blu">2</td>
        <td>9</td>
        <td>2</td>
        <td><span class="arithmatex">\(v[5]\leftarrow 9\)</span>, <span class="arithmatex">\(s[5]\leftarrow 2\)</span></td>
        </tr>
        <tr>
        <td>6</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(m\leftarrow 0\)</span>, <span class="arithmatex">\(t\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>6</td>
        <td>1</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>9</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[1]+v[4]=3+6=9>m=0\)</span>: <span class="arithmatex">\(m\leftarrow 9\)</span>, <span class="arithmatex">\(t\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td>6</td>
        <td>2</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>9</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[2]+v[1]=9+0=9\le m=9\)</span>: no update</td>
        </tr>
        <tr>
        <td>6</td>
        <td>3</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>10</td>
        <td>3</td>
        <td><span class="arithmatex">\(p[3]+v[0]=10+0=10>m=9\)</span>: <span class="arithmatex">\(m\leftarrow 10\)</span>, <span class="arithmatex">\(t\leftarrow 3\)</span></td>
        </tr>
        <tr>
        <td>6</td>
        <td>4</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>10</td>
        <td>3</td>
        <td><span class="arithmatex">\(w[4]=9>k=6\)</span>: no update</td>
        </tr>
        <tr>
        <td>6</td>
        <td>5</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>10</td>
        <td>3</td>
        <td><span class="arithmatex">\(w[5]=10>k=6\)</span>: no update</td>
        </tr>
        <tr>
        <td>6</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td class="cella-blu">10</td>
        <td class="cella-blu">3</td>
        <td>10</td>
        <td>3</td>
        <td><span class="arithmatex">\(v[6]\leftarrow 10\)</span>, <span class="arithmatex">\(s[6]\leftarrow 3\)</span></td>
        </tr>
        <tr>
        <td>7</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(m\leftarrow 0\)</span>, <span class="arithmatex">\(t\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>7</td>
        <td>1</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>12</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[1]+v[5]=3+9=12>m=0\)</span>: <span class="arithmatex">\(m\leftarrow 12\)</span>, <span class="arithmatex">\(t\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td>7</td>
        <td>2</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>12</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[2]+v[2]=9+3=12\le m=12\)</span>: no update</td>
        </tr>
        <tr>
        <td>7</td>
        <td>3</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>12</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[3]+v[1]=10+0=10\le m=12\)</span>: no update</td>
        </tr>
        <tr>
        <td>7</td>
        <td>4</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>12</td>
        <td>1</td>
        <td><span class="arithmatex">\(w[4]=9>k=7\)</span>: no update</td>
        </tr>
        <tr>
        <td>7</td>
        <td>5</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>12</td>
        <td>1</td>
        <td><span class="arithmatex">\(w[5]=10>k=7\)</span>: no update</td>
        </tr>
        <tr>
        <td>7</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td class="cella-blu">12</td>
        <td class="cella-blu">1</td>
        <td>12</td>
        <td>1</td>
        <td><span class="arithmatex">\(v[7]\leftarrow 12\)</span>, <span class="arithmatex">\(s[7]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td>8</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(m\leftarrow 0\)</span>, <span class="arithmatex">\(t\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>8</td>
        <td>1</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>13</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[1]+v[6]=3+10=13>m=0\)</span>: <span class="arithmatex">\(m\leftarrow 13\)</span>, <span class="arithmatex">\(t\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td>8</td>
        <td>2</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>13</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[2]+v[3]=9+3=12\le m=13\)</span>: no update</td>
        </tr>
        <tr>
        <td>8</td>
        <td>3</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>13</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[3]+v[2]=10+3=13\le m=13\)</span>: no update</td>
        </tr>
        <tr>
        <td>8</td>
        <td>4</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>13</td>
        <td>1</td>
        <td><span class="arithmatex">\(w[4]=9>k=8\)</span>: no update</td>
        </tr>
        <tr>
        <td>8</td>
        <td>5</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>13</td>
        <td>1</td>
        <td><span class="arithmatex">\(w[5]=10>k=8\)</span>: no update</td>
        </tr>
        <tr>
        <td>8</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td class="cella-blu">13</td>
        <td class="cella-blu">1</td>
        <td>13</td>
        <td>1</td>
        <td><span class="arithmatex">\(v[8]\leftarrow 13\)</span>, <span class="arithmatex">\(s[8]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td>9</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(m\leftarrow 0\)</span>, <span class="arithmatex">\(t\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>9</td>
        <td>1</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>15</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[1]+v[7]=3+12=15>m=0\)</span>: <span class="arithmatex">\(m\leftarrow 15\)</span>, <span class="arithmatex">\(t\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td>9</td>
        <td>2</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>15</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[2]+v[4]=9+6=15\le m=15\)</span>: no update</td>
        </tr>
        <tr>
        <td>9</td>
        <td>3</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>15</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[3]+v[3]=10+3=13\le m=15\)</span>: no update</td>
        </tr>
        <tr>
        <td>9</td>
        <td>4</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>16</td>
        <td>4</td>
        <td><span class="arithmatex">\(p[4]+v[0]=16+0=16>m=15\)</span>: <span class="arithmatex">\(m\leftarrow 16\)</span>, <span class="arithmatex">\(t\leftarrow 4\)</span></td>
        </tr>
        <tr>
        <td>9</td>
        <td>5</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>16</td>
        <td>4</td>
        <td><span class="arithmatex">\(w[5]=10>k=9\)</span>: no update</td>
        </tr>
        <tr>
        <td>9</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td class="cella-blu">16</td>
        <td class="cella-blu">4</td>
        <td>16</td>
        <td>4</td>
        <td><span class="arithmatex">\(v[9]\leftarrow 16\)</span>, <span class="arithmatex">\(s[9]\leftarrow 4\)</span></td>
        </tr>
        <tr>
        <td>10</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(m\leftarrow 0\)</span>, <span class="arithmatex">\(t\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>10</td>
        <td>1</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>16</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[1]+v[8]=3+13=16>m=0\)</span>: <span class="arithmatex">\(m\leftarrow 16\)</span>, <span class="arithmatex">\(t\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td>10</td>
        <td>2</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>18</td>
        <td>2</td>
        <td><span class="arithmatex">\(p[2]+v[5]=9+9=18>m=16\)</span>: <span class="arithmatex">\(m\leftarrow 18\)</span>, <span class="arithmatex">\(t\leftarrow 2\)</span></td>
        </tr>
        <tr>
        <td>10</td>
        <td>3</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>18</td>
        <td>2</td>
        <td><span class="arithmatex">\(p[3]+v[4]=10+6=16\le m=18\)</span>: no update</td>
        </tr>
        <tr>
        <td>10</td>
        <td>4</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>18</td>
        <td>2</td>
        <td><span class="arithmatex">\(p[4]+v[1]=16+0=16\le m=18\)</span>: no update</td>
        </tr>
        <tr>
        <td>10</td>
        <td>5</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>18</td>
        <td>2</td>
        <td><span class="arithmatex">\(p[5]+v[0]=17+0=17\le m=18\)</span>: no update</td>
        </tr>
        <tr>
        <td>10</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td class="cella-blu">18</td>
        <td class="cella-blu">2</td>
        <td>18</td>
        <td>2</td>
        <td><span class="arithmatex">\(v[10]\leftarrow 18\)</span>, <span class="arithmatex">\(s[10]\leftarrow 2\)</span></td>
        </tr>
        <tr>
        <td>11</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(m\leftarrow 0\)</span>, <span class="arithmatex">\(t\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>11</td>
        <td>1</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>19</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[1]+v[9]=3+16=19>m=0\)</span>: <span class="arithmatex">\(m\leftarrow 19\)</span>, <span class="arithmatex">\(t\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td>11</td>
        <td>2</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>19</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[2]+v[6]=9+10=19\le m=19\)</span>: no update</td>
        </tr>
        <tr>
        <td>11</td>
        <td>3</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>19</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[3]+v[5]=10+9=19\le m=19\)</span>: no update</td>
        </tr>
        <tr>
        <td>11</td>
        <td>4</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>19</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[4]+v[2]=16+3=19\le m=19\)</span>: no update</td>
        </tr>
        <tr>
        <td>11</td>
        <td>5</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>19</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[5]+v[1]=17+0=17\le m=19\)</span>: no update</td>
        </tr>
        <tr>
        <td>11</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td class="cella-blu">19</td>
        <td class="cella-blu">1</td>
        <td>19</td>
        <td>1</td>
        <td><span class="arithmatex">\(v[11]\leftarrow 19\)</span>, <span class="arithmatex">\(s[11]\leftarrow 1\)</span></td>
        </tr>
        </table></div>

        This is the vector $v$ after the execution of the first DP algorithm:

        <div class="tabella" markdown="0"><table>
        <tr>
        <th></th>
        <th><span class="arithmatex">\(k=0\)</span></th>
        <th><span class="arithmatex">\(k=1\)</span></th>
        <th><span class="arithmatex">\(k=2\)</span></th>
        <th><span class="arithmatex">\(k=3\)</span></th>
        <th><span class="arithmatex">\(k=4\)</span></th>
        <th><span class="arithmatex">\(k=5\)</span></th>
        <th><span class="arithmatex">\(k=6\)</span></th>
        <th><span class="arithmatex">\(k=7\)</span></th>
        <th><span class="arithmatex">\(k=8\)</span></th>
        <th><span class="arithmatex">\(k=9\)</span></th>
        <th><span class="arithmatex">\(k=10\)</span></th>
        <th><span class="arithmatex">\(k=11\)</span></th>
        </tr>
        <tr>
        <td><span class="arithmatex">\(v[k]\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>3</td>
        <td>3</td>
        <td>6</td>
        <td>9</td>
        <td>10</td>
        <td>12</td>
        <td>13</td>
        <td>16</td>
        <td>18</td>
        <td>19</td>
        </tr>
        </table></div>

        This is the vector $s$ after the execution of the first DP algorithm:

        <div class="tabella" markdown="0"><table>
        <tr>
        <th></th>
        <th><span class="arithmatex">\(k=0\)</span></th>
        <th><span class="arithmatex">\(k=1\)</span></th>
        <th><span class="arithmatex">\(k=2\)</span></th>
        <th><span class="arithmatex">\(k=3\)</span></th>
        <th><span class="arithmatex">\(k=4\)</span></th>
        <th><span class="arithmatex">\(k=5\)</span></th>
        <th><span class="arithmatex">\(k=6\)</span></th>
        <th><span class="arithmatex">\(k=7\)</span></th>
        <th><span class="arithmatex">\(k=8\)</span></th>
        <th><span class="arithmatex">\(k=9\)</span></th>
        <th><span class="arithmatex">\(k=10\)</span></th>
        <th><span class="arithmatex">\(k=11\)</span></th>
        </tr>
        <tr>
        <td><span class="arithmatex">\(s[k]\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>2</td>
        <td>3</td>
        <td>1</td>
        <td>1</td>
        <td>4</td>
        <td>2</td>
        <td>1</td>
        </tr>
        </table></div>

    2. We have the following vector $s$:

        <div class="tabella" markdown="0"><table>
        <tr>
        <th></th>
        <th><span class="arithmatex">\(k=0\)</span></th>
        <th><span class="arithmatex">\(k=1\)</span></th>
        <th><span class="arithmatex">\(k=2\)</span></th>
        <th><span class="arithmatex">\(k=3\)</span></th>
        <th><span class="arithmatex">\(k=4\)</span></th>
        <th><span class="arithmatex">\(k=5\)</span></th>
        <th><span class="arithmatex">\(k=6\)</span></th>
        <th><span class="arithmatex">\(k=7\)</span></th>
        <th><span class="arithmatex">\(k=8\)</span></th>
        <th><span class="arithmatex">\(k=9\)</span></th>
        <th><span class="arithmatex">\(k=10\)</span></th>
        <th><span class="arithmatex">\(k=11\)</span></th>
        </tr>
        <tr>
        <td><span class="arithmatex">\(s[k]\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>2</td>
        <td>3</td>
        <td>1</td>
        <td>1</td>
        <td>4</td>
        <td>2</td>
        <td>1</td>
        </tr>
        </table></div>

        We can reconstruct an optimal solution by starting from $k=11$ as follows:

        <div class="tabella" markdown="0"><table>
        <tr>
        <th>Iteration</th>
        <th><span class="arithmatex">\(k\)</span></th>
        <th><span class="arithmatex">\(s[k]\)</span></th>
        <th><span class="arithmatex">\(x[1]\)</span></th>
        <th><span class="arithmatex">\(x[2]\)</span></th>
        <th><span class="arithmatex">\(x[3]\)</span></th>
        <th><span class="arithmatex">\(x[4]\)</span></th>
        <th><span class="arithmatex">\(x[5]\)</span></th>
        <th>Action</th>
        </tr>
        <tr>
        <td>\-</td>
        <td>\-</td>
        <td>\-</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(k=11\)</span></td>
        </tr>
        <tr>
        <td>1</td>
        <td>11</td>
        <td>1</td>
        <td class="cella-blu">1</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(x[1]\leftarrow 1\)</span>, <span class="arithmatex">\(k\leftarrow 11-2=9\)</span></td>
        </tr>
        <tr>
        <td>2</td>
        <td>9</td>
        <td>4</td>
        <td class="cella-blu">1</td>
        <td>0</td>
        <td>0</td>
        <td class="cella-blu">1</td>
        <td>0</td>
        <td><span class="arithmatex">\(x[4]\leftarrow 1\)</span>, <span class="arithmatex">\(k\leftarrow 9-9=0\)</span></td>
        </tr>
        </table></div>

        Thus, the vector

        $$
        (1,0,0,1,0)
        $$

        is an optimal solution. The optimal value is

        $$
        v[11]=19.
        $$

    3. Step-by-step execution of the second bottom-up DP algorithm

        For each step of the DP algorithm, the table shows the values of $i$ and $k$, the cells $v[i][k]$ and $s[i][k]$, and the operation performed. All entries in row $i=0$ are initialized to $0$.

        <div class="tabella" markdown="0"><table>
        <tr>
        <th><span class="arithmatex">\(i\)</span></th>
        <th><span class="arithmatex">\(k\)</span></th>
        <th><span class="arithmatex">\(v[i][k]\)</span></th>
        <th><span class="arithmatex">\(s[i][k]\)</span></th>
        <th>Action</th>
        </tr>
        <tr>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(v[0][0]\leftarrow 0\)</span>, <span class="arithmatex">\(s[0][0]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>0</td>
        <td>1</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(v[0][1]\leftarrow 0\)</span>, <span class="arithmatex">\(s[0][1]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>0</td>
        <td>2</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(v[0][2]\leftarrow 0\)</span>, <span class="arithmatex">\(s[0][2]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>0</td>
        <td>3</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(v[0][3]\leftarrow 0\)</span>, <span class="arithmatex">\(s[0][3]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>0</td>
        <td>4</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(v[0][4]\leftarrow 0\)</span>, <span class="arithmatex">\(s[0][4]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>0</td>
        <td>5</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(v[0][5]\leftarrow 0\)</span>, <span class="arithmatex">\(s[0][5]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>0</td>
        <td>6</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(v[0][6]\leftarrow 0\)</span>, <span class="arithmatex">\(s[0][6]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>0</td>
        <td>7</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(v[0][7]\leftarrow 0\)</span>, <span class="arithmatex">\(s[0][7]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>0</td>
        <td>8</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(v[0][8]\leftarrow 0\)</span>, <span class="arithmatex">\(s[0][8]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>0</td>
        <td>9</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(v[0][9]\leftarrow 0\)</span>, <span class="arithmatex">\(s[0][9]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>0</td>
        <td>10</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(v[0][10]\leftarrow 0\)</span>, <span class="arithmatex">\(s[0][10]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>0</td>
        <td>11</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(v[0][11]\leftarrow 0\)</span>, <span class="arithmatex">\(s[0][11]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>1</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(k<w[1]\)</span>: <span class="arithmatex">\(v[1][0]\leftarrow v[0][0]=0\)</span>, <span class="arithmatex">\(s[1][0]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>1</td>
        <td>1</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(k<w[1]\)</span>: <span class="arithmatex">\(v[1][1]\leftarrow v[0][1]=0\)</span>, <span class="arithmatex">\(s[1][1]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>1</td>
        <td>2</td>
        <td>3</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[1]+v[1][0]=3+0>v[0][2]=0\)</span>: <span class="arithmatex">\(v[1][2]\leftarrow 3\)</span>, <span class="arithmatex">\(s[1][2]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td>1</td>
        <td>3</td>
        <td>3</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[1]+v[1][1]=3+0>v[0][3]=0\)</span>: <span class="arithmatex">\(v[1][3]\leftarrow 3\)</span>, <span class="arithmatex">\(s[1][3]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td>1</td>
        <td>4</td>
        <td>6</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[1]+v[1][2]=3+3>v[0][4]=0\)</span>: <span class="arithmatex">\(v[1][4]\leftarrow 6\)</span>, <span class="arithmatex">\(s[1][4]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td>1</td>
        <td>5</td>
        <td>6</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[1]+v[1][3]=3+3>v[0][5]=0\)</span>: <span class="arithmatex">\(v[1][5]\leftarrow 6\)</span>, <span class="arithmatex">\(s[1][5]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td>1</td>
        <td>6</td>
        <td>9</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[1]+v[1][4]=3+6>v[0][6]=0\)</span>: <span class="arithmatex">\(v[1][6]\leftarrow 9\)</span>, <span class="arithmatex">\(s[1][6]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td>1</td>
        <td>7</td>
        <td>9</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[1]+v[1][5]=3+6>v[0][7]=0\)</span>: <span class="arithmatex">\(v[1][7]\leftarrow 9\)</span>, <span class="arithmatex">\(s[1][7]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td>1</td>
        <td>8</td>
        <td>12</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[1]+v[1][6]=3+9>v[0][8]=0\)</span>: <span class="arithmatex">\(v[1][8]\leftarrow 12\)</span>, <span class="arithmatex">\(s[1][8]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td>1</td>
        <td>9</td>
        <td>12</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[1]+v[1][7]=3+9>v[0][9]=0\)</span>: <span class="arithmatex">\(v[1][9]\leftarrow 12\)</span>, <span class="arithmatex">\(s[1][9]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td>1</td>
        <td>10</td>
        <td>15</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[1]+v[1][8]=3+12>v[0][10]=0\)</span>: <span class="arithmatex">\(v[1][10]\leftarrow 15\)</span>, <span class="arithmatex">\(s[1][10]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td>1</td>
        <td>11</td>
        <td>15</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[1]+v[1][9]=3+12>v[0][11]=0\)</span>: <span class="arithmatex">\(v[1][11]\leftarrow 15\)</span>, <span class="arithmatex">\(s[1][11]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td>2</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(k<w[2]\)</span>: <span class="arithmatex">\(v[2][0]\leftarrow v[1][0]=0\)</span>, <span class="arithmatex">\(s[2][0]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>2</td>
        <td>1</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(k<w[2]\)</span>: <span class="arithmatex">\(v[2][1]\leftarrow v[1][1]=0\)</span>, <span class="arithmatex">\(s[2][1]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>2</td>
        <td>2</td>
        <td>3</td>
        <td>0</td>
        <td><span class="arithmatex">\(k<w[2]\)</span>: <span class="arithmatex">\(v[2][2]\leftarrow v[1][2]=3\)</span>, <span class="arithmatex">\(s[2][2]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>2</td>
        <td>3</td>
        <td>3</td>
        <td>0</td>
        <td><span class="arithmatex">\(k<w[2]\)</span>: <span class="arithmatex">\(v[2][3]\leftarrow v[1][3]=3\)</span>, <span class="arithmatex">\(s[2][3]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>2</td>
        <td>4</td>
        <td>6</td>
        <td>0</td>
        <td><span class="arithmatex">\(k<w[2]\)</span>: <span class="arithmatex">\(v[2][4]\leftarrow v[1][4]=6\)</span>, <span class="arithmatex">\(s[2][4]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>2</td>
        <td>5</td>
        <td>9</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[2]+v[2][0]=9+0>v[1][5]=6\)</span>: <span class="arithmatex">\(v[2][5]\leftarrow 9\)</span>, <span class="arithmatex">\(s[2][5]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td>2</td>
        <td>6</td>
        <td>9</td>
        <td>0</td>
        <td><span class="arithmatex">\(p[2]+v[2][1]=9+0\le v[1][6]=9\)</span>: <span class="arithmatex">\(v[2][6]\leftarrow 9\)</span>, <span class="arithmatex">\(s[2][6]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>2</td>
        <td>7</td>
        <td>12</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[2]+v[2][2]=9+3>v[1][7]=9\)</span>: <span class="arithmatex">\(v[2][7]\leftarrow 12\)</span>, <span class="arithmatex">\(s[2][7]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td>2</td>
        <td>8</td>
        <td>12</td>
        <td>0</td>
        <td><span class="arithmatex">\(p[2]+v[2][3]=9+3\le v[1][8]=12\)</span>: <span class="arithmatex">\(v[2][8]\leftarrow 12\)</span>, <span class="arithmatex">\(s[2][8]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>2</td>
        <td>9</td>
        <td>15</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[2]+v[2][4]=9+6>v[1][9]=12\)</span>: <span class="arithmatex">\(v[2][9]\leftarrow 15\)</span>, <span class="arithmatex">\(s[2][9]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td>2</td>
        <td>10</td>
        <td>18</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[2]+v[2][5]=9+9>v[1][10]=15\)</span>: <span class="arithmatex">\(v[2][10]\leftarrow 18\)</span>, <span class="arithmatex">\(s[2][10]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td>2</td>
        <td>11</td>
        <td>18</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[2]+v[2][6]=9+9>v[1][11]=15\)</span>: <span class="arithmatex">\(v[2][11]\leftarrow 18\)</span>, <span class="arithmatex">\(s[2][11]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td>3</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(k<w[3]\)</span>: <span class="arithmatex">\(v[3][0]\leftarrow v[2][0]=0\)</span>, <span class="arithmatex">\(s[3][0]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>3</td>
        <td>1</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(k<w[3]\)</span>: <span class="arithmatex">\(v[3][1]\leftarrow v[2][1]=0\)</span>, <span class="arithmatex">\(s[3][1]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>3</td>
        <td>2</td>
        <td>3</td>
        <td>0</td>
        <td><span class="arithmatex">\(k<w[3]\)</span>: <span class="arithmatex">\(v[3][2]\leftarrow v[2][2]=3\)</span>, <span class="arithmatex">\(s[3][2]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>3</td>
        <td>3</td>
        <td>3</td>
        <td>0</td>
        <td><span class="arithmatex">\(k<w[3]\)</span>: <span class="arithmatex">\(v[3][3]\leftarrow v[2][3]=3\)</span>, <span class="arithmatex">\(s[3][3]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>3</td>
        <td>4</td>
        <td>6</td>
        <td>0</td>
        <td><span class="arithmatex">\(k<w[3]\)</span>: <span class="arithmatex">\(v[3][4]\leftarrow v[2][4]=6\)</span>, <span class="arithmatex">\(s[3][4]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>3</td>
        <td>5</td>
        <td>9</td>
        <td>0</td>
        <td><span class="arithmatex">\(k<w[3]\)</span>: <span class="arithmatex">\(v[3][5]\leftarrow v[2][5]=9\)</span>, <span class="arithmatex">\(s[3][5]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>3</td>
        <td>6</td>
        <td>10</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[3]+v[3][0]=10+0>v[2][6]=9\)</span>: <span class="arithmatex">\(v[3][6]\leftarrow 10\)</span>, <span class="arithmatex">\(s[3][6]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td>3</td>
        <td>7</td>
        <td>12</td>
        <td>0</td>
        <td><span class="arithmatex">\(p[3]+v[3][1]=10+0\le v[2][7]=12\)</span>: <span class="arithmatex">\(v[3][7]\leftarrow 12\)</span>, <span class="arithmatex">\(s[3][7]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>3</td>
        <td>8</td>
        <td>13</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[3]+v[3][2]=10+3>v[2][8]=12\)</span>: <span class="arithmatex">\(v[3][8]\leftarrow 13\)</span>, <span class="arithmatex">\(s[3][8]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td>3</td>
        <td>9</td>
        <td>15</td>
        <td>0</td>
        <td><span class="arithmatex">\(p[3]+v[3][3]=10+3\le v[2][9]=15\)</span>: <span class="arithmatex">\(v[3][9]\leftarrow 15\)</span>, <span class="arithmatex">\(s[3][9]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>3</td>
        <td>10</td>
        <td>18</td>
        <td>0</td>
        <td><span class="arithmatex">\(p[3]+v[3][4]=10+6\le v[2][10]=18\)</span>: <span class="arithmatex">\(v[3][10]\leftarrow 18\)</span>, <span class="arithmatex">\(s[3][10]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>3</td>
        <td>11</td>
        <td>19</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[3]+v[3][5]=10+9>v[2][11]=18\)</span>: <span class="arithmatex">\(v[3][11]\leftarrow 19\)</span>, <span class="arithmatex">\(s[3][11]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td>4</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(k<w[4]\)</span>: <span class="arithmatex">\(v[4][0]\leftarrow v[3][0]=0\)</span>, <span class="arithmatex">\(s[4][0]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>4</td>
        <td>1</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(k<w[4]\)</span>: <span class="arithmatex">\(v[4][1]\leftarrow v[3][1]=0\)</span>, <span class="arithmatex">\(s[4][1]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>4</td>
        <td>2</td>
        <td>3</td>
        <td>0</td>
        <td><span class="arithmatex">\(k<w[4]\)</span>: <span class="arithmatex">\(v[4][2]\leftarrow v[3][2]=3\)</span>, <span class="arithmatex">\(s[4][2]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>4</td>
        <td>3</td>
        <td>3</td>
        <td>0</td>
        <td><span class="arithmatex">\(k<w[4]\)</span>: <span class="arithmatex">\(v[4][3]\leftarrow v[3][3]=3\)</span>, <span class="arithmatex">\(s[4][3]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>4</td>
        <td>4</td>
        <td>6</td>
        <td>0</td>
        <td><span class="arithmatex">\(k<w[4]\)</span>: <span class="arithmatex">\(v[4][4]\leftarrow v[3][4]=6\)</span>, <span class="arithmatex">\(s[4][4]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>4</td>
        <td>5</td>
        <td>9</td>
        <td>0</td>
        <td><span class="arithmatex">\(k<w[4]\)</span>: <span class="arithmatex">\(v[4][5]\leftarrow v[3][5]=9\)</span>, <span class="arithmatex">\(s[4][5]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>4</td>
        <td>6</td>
        <td>10</td>
        <td>0</td>
        <td><span class="arithmatex">\(k<w[4]\)</span>: <span class="arithmatex">\(v[4][6]\leftarrow v[3][6]=10\)</span>, <span class="arithmatex">\(s[4][6]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>4</td>
        <td>7</td>
        <td>12</td>
        <td>0</td>
        <td><span class="arithmatex">\(k<w[4]\)</span>: <span class="arithmatex">\(v[4][7]\leftarrow v[3][7]=12\)</span>, <span class="arithmatex">\(s[4][7]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>4</td>
        <td>8</td>
        <td>13</td>
        <td>0</td>
        <td><span class="arithmatex">\(k<w[4]\)</span>: <span class="arithmatex">\(v[4][8]\leftarrow v[3][8]=13\)</span>, <span class="arithmatex">\(s[4][8]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>4</td>
        <td>9</td>
        <td>16</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[4]+v[4][0]=16+0>v[3][9]=15\)</span>: <span class="arithmatex">\(v[4][9]\leftarrow 16\)</span>, <span class="arithmatex">\(s[4][9]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td>4</td>
        <td>10</td>
        <td>18</td>
        <td>0</td>
        <td><span class="arithmatex">\(p[4]+v[4][1]=16+0\le v[3][10]=18\)</span>: <span class="arithmatex">\(v[4][10]\leftarrow 18\)</span>, <span class="arithmatex">\(s[4][10]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>4</td>
        <td>11</td>
        <td>19</td>
        <td>0</td>
        <td><span class="arithmatex">\(p[4]+v[4][2]=16+3\le v[3][11]=19\)</span>: <span class="arithmatex">\(v[4][11]\leftarrow 19\)</span>, <span class="arithmatex">\(s[4][11]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>5</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(k<w[5]\)</span>: <span class="arithmatex">\(v[5][0]\leftarrow v[4][0]=0\)</span>, <span class="arithmatex">\(s[5][0]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>5</td>
        <td>1</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(k<w[5]\)</span>: <span class="arithmatex">\(v[5][1]\leftarrow v[4][1]=0\)</span>, <span class="arithmatex">\(s[5][1]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>5</td>
        <td>2</td>
        <td>3</td>
        <td>0</td>
        <td><span class="arithmatex">\(k<w[5]\)</span>: <span class="arithmatex">\(v[5][2]\leftarrow v[4][2]=3\)</span>, <span class="arithmatex">\(s[5][2]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>5</td>
        <td>3</td>
        <td>3</td>
        <td>0</td>
        <td><span class="arithmatex">\(k<w[5]\)</span>: <span class="arithmatex">\(v[5][3]\leftarrow v[4][3]=3\)</span>, <span class="arithmatex">\(s[5][3]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>5</td>
        <td>4</td>
        <td>6</td>
        <td>0</td>
        <td><span class="arithmatex">\(k<w[5]\)</span>: <span class="arithmatex">\(v[5][4]\leftarrow v[4][4]=6\)</span>, <span class="arithmatex">\(s[5][4]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>5</td>
        <td>5</td>
        <td>9</td>
        <td>0</td>
        <td><span class="arithmatex">\(k<w[5]\)</span>: <span class="arithmatex">\(v[5][5]\leftarrow v[4][5]=9\)</span>, <span class="arithmatex">\(s[5][5]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>5</td>
        <td>6</td>
        <td>10</td>
        <td>0</td>
        <td><span class="arithmatex">\(k<w[5]\)</span>: <span class="arithmatex">\(v[5][6]\leftarrow v[4][6]=10\)</span>, <span class="arithmatex">\(s[5][6]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>5</td>
        <td>7</td>
        <td>12</td>
        <td>0</td>
        <td><span class="arithmatex">\(k<w[5]\)</span>: <span class="arithmatex">\(v[5][7]\leftarrow v[4][7]=12\)</span>, <span class="arithmatex">\(s[5][7]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>5</td>
        <td>8</td>
        <td>13</td>
        <td>0</td>
        <td><span class="arithmatex">\(k<w[5]\)</span>: <span class="arithmatex">\(v[5][8]\leftarrow v[4][8]=13\)</span>, <span class="arithmatex">\(s[5][8]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>5</td>
        <td>9</td>
        <td>16</td>
        <td>0</td>
        <td><span class="arithmatex">\(k<w[5]\)</span>: <span class="arithmatex">\(v[5][9]\leftarrow v[4][9]=16\)</span>, <span class="arithmatex">\(s[5][9]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>5</td>
        <td>10</td>
        <td>18</td>
        <td>0</td>
        <td><span class="arithmatex">\(p[5]+v[5][0]=17+0\le v[4][10]=18\)</span>: <span class="arithmatex">\(v[5][10]\leftarrow 18\)</span>, <span class="arithmatex">\(s[5][10]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>5</td>
        <td>11</td>
        <td>19</td>
        <td>0</td>
        <td><span class="arithmatex">\(p[5]+v[5][1]=17+0\le v[4][11]=19\)</span>: <span class="arithmatex">\(v[5][11]\leftarrow 19\)</span>, <span class="arithmatex">\(s[5][11]\leftarrow 0\)</span></td>
        </tr>
        </table></div>

        This is the matrix $v$ after the execution of the second DP algorithm:

        <div class="tabella" markdown="0"><table>
        <tr>
        <td><span class="arithmatex">\(v[i][k]\)</span></td>
        <td><span class="arithmatex">\(k=0\)</span></td>
        <td><span class="arithmatex">\(k=1\)</span></td>
        <td><span class="arithmatex">\(k=2\)</span></td>
        <td><span class="arithmatex">\(k=3\)</span></td>
        <td><span class="arithmatex">\(k=4\)</span></td>
        <td><span class="arithmatex">\(k=5\)</span></td>
        <td><span class="arithmatex">\(k=6\)</span></td>
        <td><span class="arithmatex">\(k=7\)</span></td>
        <td><span class="arithmatex">\(k=8\)</span></td>
        <td><span class="arithmatex">\(k=9\)</span></td>
        <td><span class="arithmatex">\(k=10\)</span></td>
        <td><span class="arithmatex">\(k=11\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=0\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=1\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>3</td>
        <td>3</td>
        <td>6</td>
        <td>6</td>
        <td>9</td>
        <td>9</td>
        <td>12</td>
        <td>12</td>
        <td>15</td>
        <td>15</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=2\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>3</td>
        <td>3</td>
        <td>6</td>
        <td>9</td>
        <td>9</td>
        <td>12</td>
        <td>12</td>
        <td>15</td>
        <td>18</td>
        <td>18</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=3\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>3</td>
        <td>3</td>
        <td>6</td>
        <td>9</td>
        <td>10</td>
        <td>12</td>
        <td>13</td>
        <td>15</td>
        <td>18</td>
        <td>19</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=4\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>3</td>
        <td>3</td>
        <td>6</td>
        <td>9</td>
        <td>10</td>
        <td>12</td>
        <td>13</td>
        <td>16</td>
        <td>18</td>
        <td>19</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=5\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>3</td>
        <td>3</td>
        <td>6</td>
        <td>9</td>
        <td>10</td>
        <td>12</td>
        <td>13</td>
        <td>16</td>
        <td>18</td>
        <td>19</td>
        </tr>
        </table></div>

        This is the matrix $s$ after the execution of the second DP algorithm:

        <div class="tabella" markdown="0"><table>
        <tr>
        <td><span class="arithmatex">\(s[i][k]\)</span></td>
        <td><span class="arithmatex">\(k=0\)</span></td>
        <td><span class="arithmatex">\(k=1\)</span></td>
        <td><span class="arithmatex">\(k=2\)</span></td>
        <td><span class="arithmatex">\(k=3\)</span></td>
        <td><span class="arithmatex">\(k=4\)</span></td>
        <td><span class="arithmatex">\(k=5\)</span></td>
        <td><span class="arithmatex">\(k=6\)</span></td>
        <td><span class="arithmatex">\(k=7\)</span></td>
        <td><span class="arithmatex">\(k=8\)</span></td>
        <td><span class="arithmatex">\(k=9\)</span></td>
        <td><span class="arithmatex">\(k=10\)</span></td>
        <td><span class="arithmatex">\(k=11\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=0\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=1\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=2\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>1</td>
        <td>0</td>
        <td>1</td>
        <td>0</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=3\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>1</td>
        <td>0</td>
        <td>1</td>
        <td>0</td>
        <td>0</td>
        <td>1</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=4\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>1</td>
        <td>0</td>
        <td>0</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=5\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        </tr>
        </table></div>

    4. We have the following matrix $s$:

        <div class="tabella" markdown="0"><table>
        <tr>
        <td><span class="arithmatex">\(s[i][k]\)</span></td>
        <td><span class="arithmatex">\(k=0\)</span></td>
        <td><span class="arithmatex">\(k=1\)</span></td>
        <td><span class="arithmatex">\(k=2\)</span></td>
        <td><span class="arithmatex">\(k=3\)</span></td>
        <td><span class="arithmatex">\(k=4\)</span></td>
        <td><span class="arithmatex">\(k=5\)</span></td>
        <td><span class="arithmatex">\(k=6\)</span></td>
        <td><span class="arithmatex">\(k=7\)</span></td>
        <td><span class="arithmatex">\(k=8\)</span></td>
        <td><span class="arithmatex">\(k=9\)</span></td>
        <td><span class="arithmatex">\(k=10\)</span></td>
        <td><span class="arithmatex">\(k=11\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=0\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=1\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=2\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>1</td>
        <td>0</td>
        <td>1</td>
        <td>0</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=3\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>1</td>
        <td>0</td>
        <td>1</td>
        <td>0</td>
        <td>0</td>
        <td>1</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=4\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>1</td>
        <td>0</td>
        <td>0</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=5\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        </tr>
        </table></div>

        We can reconstruct an optimal solution by starting from $i=5$ and $k=11$ as follows:

        <div class="tabella" markdown="0"><table>
        <tr>
        <th>Iteration</th>
        <th><span class="arithmatex">\(i\)</span></th>
        <th><span class="arithmatex">\(k\)</span></th>
        <th><span class="arithmatex">\(s[i][k]\)</span></th>
        <th><span class="arithmatex">\(x[1]\)</span></th>
        <th><span class="arithmatex">\(x[2]\)</span></th>
        <th><span class="arithmatex">\(x[3]\)</span></th>
        <th><span class="arithmatex">\(x[4]\)</span></th>
        <th><span class="arithmatex">\(x[5]\)</span></th>
        <th>Action</th>
        </tr>
        <tr>
        <td>\-</td>
        <td>\-</td>
        <td>\-</td>
        <td>\-</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(i=5\)</span>, <span class="arithmatex">\(k=11\)</span></td>
        </tr>
        <tr>
        <td>1</td>
        <td>5</td>
        <td>11</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(i\leftarrow 4\)</span></td>
        </tr>
        <tr>
        <td>2</td>
        <td>4</td>
        <td>11</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(i\leftarrow 3\)</span></td>
        </tr>
        <tr>
        <td>3</td>
        <td>3</td>
        <td>11</td>
        <td>1</td>
        <td>0</td>
        <td>0</td>
        <td class="cella-blu">1</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(x[3]\leftarrow 1\)</span>, <span class="arithmatex">\(k\leftarrow 11-6=5\)</span></td>
        </tr>
        <tr>
        <td>4</td>
        <td>3</td>
        <td>5</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td class="cella-blu">1</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(i\leftarrow 2\)</span></td>
        </tr>
        <tr>
        <td>5</td>
        <td>2</td>
        <td>5</td>
        <td>1</td>
        <td>0</td>
        <td class="cella-blu">1</td>
        <td class="cella-blu">1</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(x[2]\leftarrow 1\)</span>, <span class="arithmatex">\(k\leftarrow 5-5=0\)</span></td>
        </tr>
        </table></div>

        Thus, the vector

        $$
        (0,1,1,0,0)
        $$

        is an optimal solution. The optimal value is

        $$
        v[5][11]=19.
        $$

        The optimal solution is not unique, and the two DP algorithms find different ones: the first finds $(1,0,0,1,0)$, with total weight $2+9=11$ and total profit $3+16=19$; the second finds $(0,1,1,0,0)$, with total weight $5+6=11$ and total profit $9+10=19$. These are the only two optimal solutions.

## A DP algorithm for the Bounded Knapsack Problem

<a id="esercizio-15-11"></a>

!!! esercizio "Exercise 15.11: Exercise 1: Bounded Knapsack Problem"

    Consider the following BKP instance, where the knapsack has capacity $c=6$, and the profits, weights, and bounds associated with the item types are:

    <div class="tabella" markdown="0"><table>
    <tr>
    <th></th>
    <th><span class="arithmatex">\(i=1\)</span></th>
    <th><span class="arithmatex">\(i=2\)</span></th>
    </tr>
    <tr>
    <td><span class="arithmatex">\(p_i\)</span></td>
    <td>4</td>
    <td>5</td>
    </tr>
    <tr>
    <td><span class="arithmatex">\(w_i\)</span></td>
    <td>2</td>
    <td>3</td>
    </tr>
    <tr>
    <td><span class="arithmatex">\(b_i\)</span></td>
    <td>2</td>
    <td>1</td>
    </tr>
    </table></div>

    **Questions**

    1. Show the execution of the bottom-up DP algorithm by reporting, for each iteration, the values of the matrices $v$ and $s$.

    2. Using the matrix $s$, reconstruct an optimal solution in integer notation $(x_1,x_2)$, and report the optimal value.

??? soluzione "Solution"

    1. Step-by-step execution of the bottom-up DP algorithm

        For each step of the DP algorithm, the table shows the values of $i$ and $k$, the cells $v[i][k]$ and $s[i][k]$, and the operation performed.

        <div class="tabella" markdown="0"><table>
        <tr>
        <th><span class="arithmatex">\(i\)</span></th>
        <th><span class="arithmatex">\(k\)</span></th>
        <th><span class="arithmatex">\(v[i][k]\)</span></th>
        <th><span class="arithmatex">\(s[i][k]\)</span></th>
        <th>Action</th>
        </tr>
        <tr>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(v[0][0]\leftarrow 0\)</span>, <span class="arithmatex">\(s[0][0]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>0</td>
        <td>1</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(v[0][1]\leftarrow 0\)</span>, <span class="arithmatex">\(s[0][1]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>0</td>
        <td>2</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(v[0][2]\leftarrow 0\)</span>, <span class="arithmatex">\(s[0][2]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>0</td>
        <td>3</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(v[0][3]\leftarrow 0\)</span>, <span class="arithmatex">\(s[0][3]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>0</td>
        <td>4</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(v[0][4]\leftarrow 0\)</span>, <span class="arithmatex">\(s[0][4]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>0</td>
        <td>5</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(v[0][5]\leftarrow 0\)</span>, <span class="arithmatex">\(s[0][5]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>0</td>
        <td>6</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(v[0][6]\leftarrow 0\)</span>, <span class="arithmatex">\(s[0][6]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>1</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(\max\{v[0][0]\}=0\)</span></td>
        </tr>
        <tr>
        <td>1</td>
        <td>1</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(\max\{v[0][1]\}=0\)</span></td>
        </tr>
        <tr>
        <td>1</td>
        <td>2</td>
        <td>4</td>
        <td>1</td>
        <td><span class="arithmatex">\(\max\{v[0][2],\,p[1]{+}v[0][0]\}=\max\{0,4\}=4\)</span></td>
        </tr>
        <tr>
        <td>1</td>
        <td>3</td>
        <td>4</td>
        <td>1</td>
        <td><span class="arithmatex">\(\max\{v[0][3],\,p[1]{+}v[0][1]\}=\max\{0,4\}=4\)</span></td>
        </tr>
        <tr>
        <td>1</td>
        <td>4</td>
        <td>8</td>
        <td>2</td>
        <td><span class="arithmatex">\(\max\{v[0][4],\,p[1]{+}v[0][2],\,2p[1]{+}v[0][0]\}=\max\{0,4,8\}=8\)</span></td>
        </tr>
        <tr>
        <td>1</td>
        <td>5</td>
        <td>8</td>
        <td>2</td>
        <td><span class="arithmatex">\(\max\{v[0][5],\,p[1]{+}v[0][3],\,2p[1]{+}v[0][1]\}=\max\{0,4,8\}=8\)</span></td>
        </tr>
        <tr>
        <td>1</td>
        <td>6</td>
        <td>8</td>
        <td>2</td>
        <td><span class="arithmatex">\(\max\{v[0][6],\,p[1]{+}v[0][4],\,2p[1]{+}v[0][2]\}=\max\{0,4,8\}=8\)</span></td>
        </tr>
        <tr>
        <td>2</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(\max\{v[1][0]\}=0\)</span></td>
        </tr>
        <tr>
        <td>2</td>
        <td>1</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(\max\{v[1][1]\}=0\)</span></td>
        </tr>
        <tr>
        <td>2</td>
        <td>2</td>
        <td>4</td>
        <td>0</td>
        <td><span class="arithmatex">\(\max\{v[1][2]\}=4\)</span></td>
        </tr>
        <tr>
        <td>2</td>
        <td>3</td>
        <td>5</td>
        <td>1</td>
        <td><span class="arithmatex">\(\max\{v[1][3],\,p[2]{+}v[1][0]\}=\max\{4,5\}=5\)</span></td>
        </tr>
        <tr>
        <td>2</td>
        <td>4</td>
        <td>8</td>
        <td>0</td>
        <td><span class="arithmatex">\(\max\{v[1][4],\,p[2]{+}v[1][1]\}=\max\{8,5\}=8\)</span></td>
        </tr>
        <tr>
        <td>2</td>
        <td>5</td>
        <td>9</td>
        <td>1</td>
        <td><span class="arithmatex">\(\max\{v[1][5],\,p[2]{+}v[1][2]\}=\max\{8,9\}=9\)</span></td>
        </tr>
        <tr>
        <td>2</td>
        <td>6</td>
        <td>9</td>
        <td>1</td>
        <td><span class="arithmatex">\(\max\{v[1][6],\,p[2]{+}v[1][3]\}=\max\{8,9\}=9\)</span></td>
        </tr>
        </table></div>

        This is the matrix $v$ after the execution of the DP algorithm:

        <div class="tabella" markdown="0"><table>
        <tr>
        <td><span class="arithmatex">\(v[i][k]\)</span></td>
        <td><span class="arithmatex">\(k=0\)</span></td>
        <td><span class="arithmatex">\(k=1\)</span></td>
        <td><span class="arithmatex">\(k=2\)</span></td>
        <td><span class="arithmatex">\(k=3\)</span></td>
        <td><span class="arithmatex">\(k=4\)</span></td>
        <td><span class="arithmatex">\(k=5\)</span></td>
        <td><span class="arithmatex">\(k=6\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=0\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=1\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>4</td>
        <td>4</td>
        <td>8</td>
        <td>8</td>
        <td>8</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=2\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>4</td>
        <td>5</td>
        <td>8</td>
        <td>9</td>
        <td>9</td>
        </tr>
        </table></div>

        This is the matrix $s$ after the execution of the DP algorithm:

        <div class="tabella" markdown="0"><table>
        <tr>
        <td><span class="arithmatex">\(s[i][k]\)</span></td>
        <td><span class="arithmatex">\(k=0\)</span></td>
        <td><span class="arithmatex">\(k=1\)</span></td>
        <td><span class="arithmatex">\(k=2\)</span></td>
        <td><span class="arithmatex">\(k=3\)</span></td>
        <td><span class="arithmatex">\(k=4\)</span></td>
        <td><span class="arithmatex">\(k=5\)</span></td>
        <td><span class="arithmatex">\(k=6\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=0\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=1\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>1</td>
        <td>1</td>
        <td>2</td>
        <td>2</td>
        <td>2</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=2\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>1</td>
        <td>0</td>
        <td>1</td>
        <td>1</td>
        </tr>
        </table></div>

    2. We have the following matrix $s$:

        <div class="tabella" markdown="0"><table>
        <tr>
        <td><span class="arithmatex">\(s[i][k]\)</span></td>
        <td><span class="arithmatex">\(k=0\)</span></td>
        <td><span class="arithmatex">\(k=1\)</span></td>
        <td><span class="arithmatex">\(k=2\)</span></td>
        <td><span class="arithmatex">\(k=3\)</span></td>
        <td><span class="arithmatex">\(k=4\)</span></td>
        <td><span class="arithmatex">\(k=5\)</span></td>
        <td><span class="arithmatex">\(k=6\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=0\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=1\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>1</td>
        <td>1</td>
        <td>2</td>
        <td>2</td>
        <td>2</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=2\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>1</td>
        <td>0</td>
        <td>1</td>
        <td>1</td>
        </tr>
        </table></div>

        We can reconstruct an optimal solution by starting from $i=2$ and $k=6$ as follows:

        <div class="tabella" markdown="0"><table>
        <tr>
        <th>Iteration</th>
        <th><span class="arithmatex">\(i\)</span></th>
        <th><span class="arithmatex">\(k\)</span></th>
        <th><span class="arithmatex">\(s[i][k]\)</span></th>
        <th><span class="arithmatex">\(x[1]\)</span></th>
        <th><span class="arithmatex">\(x[2]\)</span></th>
        <th>Action</th>
        </tr>
        <tr>
        <td>\-</td>
        <td>\-</td>
        <td>\-</td>
        <td>\-</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(k=6\)</span></td>
        </tr>
        <tr>
        <td>1</td>
        <td>2</td>
        <td>6</td>
        <td>1</td>
        <td>0</td>
        <td class="cella-blu">1</td>
        <td><span class="arithmatex">\(x[2]\leftarrow 1\)</span>, <span class="arithmatex">\(k\leftarrow 6-1\cdot3=3\)</span></td>
        </tr>
        <tr>
        <td>2</td>
        <td>1</td>
        <td>3</td>
        <td>1</td>
        <td class="cella-blu">1</td>
        <td>1</td>
        <td><span class="arithmatex">\(x[1]\leftarrow 1\)</span>, <span class="arithmatex">\(k\leftarrow 3-1\cdot2=1\)</span></td>
        </tr>
        </table></div>

        Thus, the vector

        $$
        (1,1)
        $$

        is an optimal solution. The optimal value is

        $$
        v[2][6]=9.
        $$

<a id="esercizio-15-12"></a>

!!! esercizio "Exercise 15.12: Exercise 2: Bounded Knapsack Problem"

    Consider the following BKP instance, where the knapsack has capacity $c=7$, and the profits, weights, and bounds associated with the item types are:

    <div class="tabella" markdown="0"><table>
    <tr>
    <th></th>
    <th><span class="arithmatex">\(i=1\)</span></th>
    <th><span class="arithmatex">\(i=2\)</span></th>
    </tr>
    <tr>
    <td><span class="arithmatex">\(p_i\)</span></td>
    <td>3</td>
    <td>8</td>
    </tr>
    <tr>
    <td><span class="arithmatex">\(w_i\)</span></td>
    <td>1</td>
    <td>4</td>
    </tr>
    <tr>
    <td><span class="arithmatex">\(b_i\)</span></td>
    <td>3</td>
    <td>1</td>
    </tr>
    </table></div>

    **Questions**

    1. Show the execution of the bottom-up DP algorithm by reporting, for each iteration, the values of the matrices $v$ and $s$.

    2. Using the matrix $s$, reconstruct an optimal solution in integer notation $(x_1,x_2)$, and report the optimal value.

??? soluzione "Solution"

    1. Step-by-step execution of the bottom-up DP algorithm

        For each step of the DP algorithm, the table shows the values of $i$ and $k$, the cells $v[i][k]$ and $s[i][k]$, and the operation performed.

        <div class="tabella" markdown="0"><table>
        <tr>
        <th><span class="arithmatex">\(i\)</span></th>
        <th><span class="arithmatex">\(k\)</span></th>
        <th><span class="arithmatex">\(v[i][k]\)</span></th>
        <th><span class="arithmatex">\(s[i][k]\)</span></th>
        <th>Action</th>
        </tr>
        <tr>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(v[0][0]\leftarrow 0\)</span>, <span class="arithmatex">\(s[0][0]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>0</td>
        <td>1</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(v[0][1]\leftarrow 0\)</span>, <span class="arithmatex">\(s[0][1]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>0</td>
        <td>2</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(v[0][2]\leftarrow 0\)</span>, <span class="arithmatex">\(s[0][2]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>0</td>
        <td>3</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(v[0][3]\leftarrow 0\)</span>, <span class="arithmatex">\(s[0][3]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>0</td>
        <td>4</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(v[0][4]\leftarrow 0\)</span>, <span class="arithmatex">\(s[0][4]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>0</td>
        <td>5</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(v[0][5]\leftarrow 0\)</span>, <span class="arithmatex">\(s[0][5]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>0</td>
        <td>6</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(v[0][6]\leftarrow 0\)</span>, <span class="arithmatex">\(s[0][6]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>0</td>
        <td>7</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(v[0][7]\leftarrow 0\)</span>, <span class="arithmatex">\(s[0][7]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>1</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(\max\{v[0][0]\}=0\)</span></td>
        </tr>
        <tr>
        <td>1</td>
        <td>1</td>
        <td>3</td>
        <td>1</td>
        <td><span class="arithmatex">\(\max\{v[0][1],\,p[1]{+}v[0][0]\}=\max\{0,3\}=3\)</span></td>
        </tr>
        <tr>
        <td>1</td>
        <td>2</td>
        <td>6</td>
        <td>2</td>
        <td><span class="arithmatex">\(\max\{v[0][2],\,p[1]{+}v[0][1],\,2p[1]{+}v[0][0]\}=\max\{0,3,6\}=6\)</span></td>
        </tr>
        <tr>
        <td>1</td>
        <td>3</td>
        <td>9</td>
        <td>3</td>
        <td><span class="arithmatex">\(\max\{v[0][3],\,p[1]{+}v[0][2],\,2p[1]{+}v[0][1],\,3p[1]{+}v[0][0]\}=\max\{0,3,6,9\}=9\)</span></td>
        </tr>
        <tr>
        <td>1</td>
        <td>4</td>
        <td>9</td>
        <td>3</td>
        <td><span class="arithmatex">\(\max\{v[0][4],\,p[1]{+}v[0][3],\,2p[1]{+}v[0][2],\,3p[1]{+}v[0][1]\}=\max\{0,3,6,9\}=9\)</span></td>
        </tr>
        <tr>
        <td>1</td>
        <td>5</td>
        <td>9</td>
        <td>3</td>
        <td><span class="arithmatex">\(\max\{v[0][5],\,p[1]{+}v[0][4],\,2p[1]{+}v[0][3],\,3p[1]{+}v[0][2]\}=\max\{0,3,6,9\}=9\)</span></td>
        </tr>
        <tr>
        <td>1</td>
        <td>6</td>
        <td>9</td>
        <td>3</td>
        <td><span class="arithmatex">\(\max\{v[0][6],\,p[1]{+}v[0][5],\,2p[1]{+}v[0][4],\,3p[1]{+}v[0][3]\}=\max\{0,3,6,9\}=9\)</span></td>
        </tr>
        <tr>
        <td>1</td>
        <td>7</td>
        <td>9</td>
        <td>3</td>
        <td><span class="arithmatex">\(\max\{v[0][7],\,p[1]{+}v[0][6],\,2p[1]{+}v[0][5],\,3p[1]{+}v[0][4]\}=\max\{0,3,6,9\}=9\)</span></td>
        </tr>
        <tr>
        <td>2</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(\max\{v[1][0]\}=0\)</span></td>
        </tr>
        <tr>
        <td>2</td>
        <td>1</td>
        <td>3</td>
        <td>0</td>
        <td><span class="arithmatex">\(\max\{v[1][1]\}=3\)</span></td>
        </tr>
        <tr>
        <td>2</td>
        <td>2</td>
        <td>6</td>
        <td>0</td>
        <td><span class="arithmatex">\(\max\{v[1][2]\}=6\)</span></td>
        </tr>
        <tr>
        <td>2</td>
        <td>3</td>
        <td>9</td>
        <td>0</td>
        <td><span class="arithmatex">\(\max\{v[1][3]\}=9\)</span></td>
        </tr>
        <tr>
        <td>2</td>
        <td>4</td>
        <td>9</td>
        <td>0</td>
        <td><span class="arithmatex">\(\max\{v[1][4],\,p[2]{+}v[1][0]\}=\max\{9,8\}=9\)</span></td>
        </tr>
        <tr>
        <td>2</td>
        <td>5</td>
        <td>11</td>
        <td>1</td>
        <td><span class="arithmatex">\(\max\{v[1][5],\,p[2]{+}v[1][1]\}=\max\{9,11\}=11\)</span></td>
        </tr>
        <tr>
        <td>2</td>
        <td>6</td>
        <td>14</td>
        <td>1</td>
        <td><span class="arithmatex">\(\max\{v[1][6],\,p[2]{+}v[1][2]\}=\max\{9,14\}=14\)</span></td>
        </tr>
        <tr>
        <td>2</td>
        <td>7</td>
        <td>17</td>
        <td>1</td>
        <td><span class="arithmatex">\(\max\{v[1][7],\,p[2]{+}v[1][3]\}=\max\{9,17\}=17\)</span></td>
        </tr>
        </table></div>

        This is the matrix $v$ after the execution of the DP algorithm:

        <div class="tabella" markdown="0"><table>
        <tr>
        <td><span class="arithmatex">\(v[i][k]\)</span></td>
        <td><span class="arithmatex">\(k=0\)</span></td>
        <td><span class="arithmatex">\(k=1\)</span></td>
        <td><span class="arithmatex">\(k=2\)</span></td>
        <td><span class="arithmatex">\(k=3\)</span></td>
        <td><span class="arithmatex">\(k=4\)</span></td>
        <td><span class="arithmatex">\(k=5\)</span></td>
        <td><span class="arithmatex">\(k=6\)</span></td>
        <td><span class="arithmatex">\(k=7\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=0\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=1\)</span></td>
        <td>0</td>
        <td>3</td>
        <td>6</td>
        <td>9</td>
        <td>9</td>
        <td>9</td>
        <td>9</td>
        <td>9</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=2\)</span></td>
        <td>0</td>
        <td>3</td>
        <td>6</td>
        <td>9</td>
        <td>9</td>
        <td>11</td>
        <td>14</td>
        <td>17</td>
        </tr>
        </table></div>

        This is the matrix $s$ after the execution of the DP algorithm:

        <div class="tabella" markdown="0"><table>
        <tr>
        <td><span class="arithmatex">\(s[i][k]\)</span></td>
        <td><span class="arithmatex">\(k=0\)</span></td>
        <td><span class="arithmatex">\(k=1\)</span></td>
        <td><span class="arithmatex">\(k=2\)</span></td>
        <td><span class="arithmatex">\(k=3\)</span></td>
        <td><span class="arithmatex">\(k=4\)</span></td>
        <td><span class="arithmatex">\(k=5\)</span></td>
        <td><span class="arithmatex">\(k=6\)</span></td>
        <td><span class="arithmatex">\(k=7\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=0\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=1\)</span></td>
        <td>0</td>
        <td>1</td>
        <td>2</td>
        <td>3</td>
        <td>3</td>
        <td>3</td>
        <td>3</td>
        <td>3</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=2\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        </tr>
        </table></div>

    2. We have the following matrix $s$:

        <div class="tabella" markdown="0"><table>
        <tr>
        <td><span class="arithmatex">\(s[i][k]\)</span></td>
        <td><span class="arithmatex">\(k=0\)</span></td>
        <td><span class="arithmatex">\(k=1\)</span></td>
        <td><span class="arithmatex">\(k=2\)</span></td>
        <td><span class="arithmatex">\(k=3\)</span></td>
        <td><span class="arithmatex">\(k=4\)</span></td>
        <td><span class="arithmatex">\(k=5\)</span></td>
        <td><span class="arithmatex">\(k=6\)</span></td>
        <td><span class="arithmatex">\(k=7\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=0\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=1\)</span></td>
        <td>0</td>
        <td>1</td>
        <td>2</td>
        <td>3</td>
        <td>3</td>
        <td>3</td>
        <td>3</td>
        <td>3</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=2\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        </tr>
        </table></div>

        We can reconstruct an optimal solution by starting from $i=2$ and $k=7$ as follows:

        <div class="tabella" markdown="0"><table>
        <tr>
        <th>Iteration</th>
        <th><span class="arithmatex">\(i\)</span></th>
        <th><span class="arithmatex">\(k\)</span></th>
        <th><span class="arithmatex">\(s[i][k]\)</span></th>
        <th><span class="arithmatex">\(x[1]\)</span></th>
        <th><span class="arithmatex">\(x[2]\)</span></th>
        <th>Action</th>
        </tr>
        <tr>
        <td>\-</td>
        <td>\-</td>
        <td>\-</td>
        <td>\-</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(k=7\)</span></td>
        </tr>
        <tr>
        <td>1</td>
        <td>2</td>
        <td>7</td>
        <td>1</td>
        <td>0</td>
        <td class="cella-blu">1</td>
        <td><span class="arithmatex">\(x[2]\leftarrow 1\)</span>, <span class="arithmatex">\(k\leftarrow 7-1\cdot4=3\)</span></td>
        </tr>
        <tr>
        <td>2</td>
        <td>1</td>
        <td>3</td>
        <td>3</td>
        <td class="cella-blu">3</td>
        <td>1</td>
        <td><span class="arithmatex">\(x[1]\leftarrow 3\)</span>, <span class="arithmatex">\(k\leftarrow 3-3\cdot1=0\)</span></td>
        </tr>
        </table></div>

        Thus, the vector

        $$
        (3,1)
        $$

        is an optimal solution. The optimal value is

        $$
        v[2][7]=17.
        $$

<a id="esercizio-15-13"></a>

!!! esercizio "Exercise 15.13: Exercise 3: Bounded Knapsack Problem"

    Consider the following BKP instance, where the knapsack has capacity $c=5$, and the profits, weights, and bounds associated with the item types are:

    <div class="tabella" markdown="0"><table>
    <tr>
    <th></th>
    <th><span class="arithmatex">\(i=1\)</span></th>
    <th><span class="arithmatex">\(i=2\)</span></th>
    <th><span class="arithmatex">\(i=3\)</span></th>
    </tr>
    <tr>
    <td><span class="arithmatex">\(p_i\)</span></td>
    <td>2</td>
    <td>3</td>
    <td>4</td>
    </tr>
    <tr>
    <td><span class="arithmatex">\(w_i\)</span></td>
    <td>1</td>
    <td>2</td>
    <td>3</td>
    </tr>
    <tr>
    <td><span class="arithmatex">\(b_i\)</span></td>
    <td>1</td>
    <td>1</td>
    <td>1</td>
    </tr>
    </table></div>

    **Questions**

    1. Show the execution of the bottom-up DP algorithm by reporting, for each iteration, the values of the matrices $v$ and $s$.

    2. Using the matrix $s$, reconstruct an optimal solution in integer notation $(x_1,x_2,x_3)$, and report the optimal value.

??? soluzione "Solution"

    1. Step-by-step execution of the bottom-up DP algorithm

        For each step of the DP algorithm, the table shows the values of $i$ and $k$, the cells $v[i][k]$ and $s[i][k]$, and the operation performed.

        <div class="tabella" markdown="0"><table>
        <tr>
        <th><span class="arithmatex">\(i\)</span></th>
        <th><span class="arithmatex">\(k\)</span></th>
        <th><span class="arithmatex">\(v[i][k]\)</span></th>
        <th><span class="arithmatex">\(s[i][k]\)</span></th>
        <th>Action</th>
        </tr>
        <tr>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(v[0][0]\leftarrow 0\)</span>, <span class="arithmatex">\(s[0][0]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>0</td>
        <td>1</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(v[0][1]\leftarrow 0\)</span>, <span class="arithmatex">\(s[0][1]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>0</td>
        <td>2</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(v[0][2]\leftarrow 0\)</span>, <span class="arithmatex">\(s[0][2]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>0</td>
        <td>3</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(v[0][3]\leftarrow 0\)</span>, <span class="arithmatex">\(s[0][3]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>0</td>
        <td>4</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(v[0][4]\leftarrow 0\)</span>, <span class="arithmatex">\(s[0][4]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>0</td>
        <td>5</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(v[0][5]\leftarrow 0\)</span>, <span class="arithmatex">\(s[0][5]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>1</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(\max\{v[0][0]\}=0\)</span></td>
        </tr>
        <tr>
        <td>1</td>
        <td>1</td>
        <td>2</td>
        <td>1</td>
        <td><span class="arithmatex">\(\max\{v[0][1],\,p[1]{+}v[0][0]\}=\max\{0,2\}=2\)</span></td>
        </tr>
        <tr>
        <td>1</td>
        <td>2</td>
        <td>2</td>
        <td>1</td>
        <td><span class="arithmatex">\(\max\{v[0][2],\,p[1]{+}v[0][1]\}=\max\{0,2\}=2\)</span></td>
        </tr>
        <tr>
        <td>1</td>
        <td>3</td>
        <td>2</td>
        <td>1</td>
        <td><span class="arithmatex">\(\max\{v[0][3],\,p[1]{+}v[0][2]\}=\max\{0,2\}=2\)</span></td>
        </tr>
        <tr>
        <td>1</td>
        <td>4</td>
        <td>2</td>
        <td>1</td>
        <td><span class="arithmatex">\(\max\{v[0][4],\,p[1]{+}v[0][3]\}=\max\{0,2\}=2\)</span></td>
        </tr>
        <tr>
        <td>1</td>
        <td>5</td>
        <td>2</td>
        <td>1</td>
        <td><span class="arithmatex">\(\max\{v[0][5],\,p[1]{+}v[0][4]\}=\max\{0,2\}=2\)</span></td>
        </tr>
        <tr>
        <td>2</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(\max\{v[1][0]\}=0\)</span></td>
        </tr>
        <tr>
        <td>2</td>
        <td>1</td>
        <td>2</td>
        <td>0</td>
        <td><span class="arithmatex">\(\max\{v[1][1]\}=2\)</span></td>
        </tr>
        <tr>
        <td>2</td>
        <td>2</td>
        <td>3</td>
        <td>1</td>
        <td><span class="arithmatex">\(\max\{v[1][2],\,p[2]{+}v[1][0]\}=\max\{2,3\}=3\)</span></td>
        </tr>
        <tr>
        <td>2</td>
        <td>3</td>
        <td>5</td>
        <td>1</td>
        <td><span class="arithmatex">\(\max\{v[1][3],\,p[2]{+}v[1][1]\}=\max\{2,5\}=5\)</span></td>
        </tr>
        <tr>
        <td>2</td>
        <td>4</td>
        <td>5</td>
        <td>1</td>
        <td><span class="arithmatex">\(\max\{v[1][4],\,p[2]{+}v[1][2]\}=\max\{2,5\}=5\)</span></td>
        </tr>
        <tr>
        <td>2</td>
        <td>5</td>
        <td>5</td>
        <td>1</td>
        <td><span class="arithmatex">\(\max\{v[1][5],\,p[2]{+}v[1][3]\}=\max\{2,5\}=5\)</span></td>
        </tr>
        <tr>
        <td>3</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(\max\{v[2][0]\}=0\)</span></td>
        </tr>
        <tr>
        <td>3</td>
        <td>1</td>
        <td>2</td>
        <td>0</td>
        <td><span class="arithmatex">\(\max\{v[2][1]\}=2\)</span></td>
        </tr>
        <tr>
        <td>3</td>
        <td>2</td>
        <td>3</td>
        <td>0</td>
        <td><span class="arithmatex">\(\max\{v[2][2]\}=3\)</span></td>
        </tr>
        <tr>
        <td>3</td>
        <td>3</td>
        <td>5</td>
        <td>0</td>
        <td><span class="arithmatex">\(\max\{v[2][3],\,p[3]{+}v[2][0]\}=\max\{5,4\}=5\)</span></td>
        </tr>
        <tr>
        <td>3</td>
        <td>4</td>
        <td>6</td>
        <td>1</td>
        <td><span class="arithmatex">\(\max\{v[2][4],\,p[3]{+}v[2][1]\}=\max\{5,6\}=6\)</span></td>
        </tr>
        <tr>
        <td>3</td>
        <td>5</td>
        <td>7</td>
        <td>1</td>
        <td><span class="arithmatex">\(\max\{v[2][5],\,p[3]{+}v[2][2]\}=\max\{5,7\}=7\)</span></td>
        </tr>
        </table></div>

        This is the matrix $v$ after the execution of the DP algorithm:

        <div class="tabella" markdown="0"><table>
        <tr>
        <td><span class="arithmatex">\(v[i][k]\)</span></td>
        <td><span class="arithmatex">\(k=0\)</span></td>
        <td><span class="arithmatex">\(k=1\)</span></td>
        <td><span class="arithmatex">\(k=2\)</span></td>
        <td><span class="arithmatex">\(k=3\)</span></td>
        <td><span class="arithmatex">\(k=4\)</span></td>
        <td><span class="arithmatex">\(k=5\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=0\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=1\)</span></td>
        <td>0</td>
        <td>2</td>
        <td>2</td>
        <td>2</td>
        <td>2</td>
        <td>2</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=2\)</span></td>
        <td>0</td>
        <td>2</td>
        <td>3</td>
        <td>5</td>
        <td>5</td>
        <td>5</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=3\)</span></td>
        <td>0</td>
        <td>2</td>
        <td>3</td>
        <td>5</td>
        <td>6</td>
        <td>7</td>
        </tr>
        </table></div>

        This is the matrix $s$ after the execution of the DP algorithm:

        <div class="tabella" markdown="0"><table>
        <tr>
        <td><span class="arithmatex">\(s[i][k]\)</span></td>
        <td><span class="arithmatex">\(k=0\)</span></td>
        <td><span class="arithmatex">\(k=1\)</span></td>
        <td><span class="arithmatex">\(k=2\)</span></td>
        <td><span class="arithmatex">\(k=3\)</span></td>
        <td><span class="arithmatex">\(k=4\)</span></td>
        <td><span class="arithmatex">\(k=5\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=0\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=1\)</span></td>
        <td>0</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=2\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=3\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>1</td>
        <td>1</td>
        </tr>
        </table></div>

    2. We have the following matrix $s$:

        <div class="tabella" markdown="0"><table>
        <tr>
        <td><span class="arithmatex">\(s[i][k]\)</span></td>
        <td><span class="arithmatex">\(k=0\)</span></td>
        <td><span class="arithmatex">\(k=1\)</span></td>
        <td><span class="arithmatex">\(k=2\)</span></td>
        <td><span class="arithmatex">\(k=3\)</span></td>
        <td><span class="arithmatex">\(k=4\)</span></td>
        <td><span class="arithmatex">\(k=5\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=0\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=1\)</span></td>
        <td>0</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=2\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=3\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>1</td>
        <td>1</td>
        </tr>
        </table></div>

        We can reconstruct an optimal solution by starting from $i=3$ and $k=5$ as follows:

        <div class="tabella" markdown="0"><table>
        <tr>
        <th>Iteration</th>
        <th><span class="arithmatex">\(i\)</span></th>
        <th><span class="arithmatex">\(k\)</span></th>
        <th><span class="arithmatex">\(s[i][k]\)</span></th>
        <th><span class="arithmatex">\(x[1]\)</span></th>
        <th><span class="arithmatex">\(x[2]\)</span></th>
        <th><span class="arithmatex">\(x[3]\)</span></th>
        <th>Action</th>
        </tr>
        <tr>
        <td>\-</td>
        <td>\-</td>
        <td>\-</td>
        <td>\-</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(k=5\)</span></td>
        </tr>
        <tr>
        <td>1</td>
        <td>3</td>
        <td>5</td>
        <td>1</td>
        <td>0</td>
        <td>0</td>
        <td class="cella-blu">1</td>
        <td><span class="arithmatex">\(x[3]\leftarrow 1\)</span>, <span class="arithmatex">\(k\leftarrow 5-1\cdot3=2\)</span></td>
        </tr>
        <tr>
        <td>2</td>
        <td>2</td>
        <td>2</td>
        <td>1</td>
        <td>0</td>
        <td class="cella-blu">1</td>
        <td>1</td>
        <td><span class="arithmatex">\(x[2]\leftarrow 1\)</span>, <span class="arithmatex">\(k\leftarrow 2-1\cdot2=0\)</span></td>
        </tr>
        <tr>
        <td>3</td>
        <td>1</td>
        <td>0</td>
        <td>0</td>
        <td class="cella-blu">0</td>
        <td>1</td>
        <td>1</td>
        <td><span class="arithmatex">\(x[1]\leftarrow 0\)</span>, <span class="arithmatex">\(k\leftarrow 0-0\cdot1=0\)</span></td>
        </tr>
        </table></div>

        Thus, the vector

        $$
        (0,1,1)
        $$

        is an optimal solution. The optimal value is

        $$
        v[3][5]=7.
        $$

<a id="esercizio-15-14"></a>

!!! esercizio "Exercise 15.14: Exercise 4: Bounded Knapsack Problem"

    Consider the following BKP instance, where the knapsack has capacity $c=8$, and the profits, weights, and bounds associated with the item types are:

    <div class="tabella" markdown="0"><table>
    <tr>
    <th></th>
    <th><span class="arithmatex">\(i=1\)</span></th>
    <th><span class="arithmatex">\(i=2\)</span></th>
    </tr>
    <tr>
    <td><span class="arithmatex">\(p_i\)</span></td>
    <td>5</td>
    <td>9</td>
    </tr>
    <tr>
    <td><span class="arithmatex">\(w_i\)</span></td>
    <td>2</td>
    <td>5</td>
    </tr>
    <tr>
    <td><span class="arithmatex">\(b_i\)</span></td>
    <td>3</td>
    <td>1</td>
    </tr>
    </table></div>

    **Questions**

    1. Show the execution of the bottom-up DP algorithm by reporting, for each iteration, the values of the matrices $v$ and $s$.

    2. Using the matrix $s$, reconstruct an optimal solution in integer notation $(x_1,x_2)$, and report the optimal value.

??? soluzione "Solution"

    1. Step-by-step execution of the bottom-up DP algorithm

        For each step of the DP algorithm, the table shows the values of $i$ and $k$, the cells $v[i][k]$ and $s[i][k]$, and the operation performed.

        <div class="tabella" markdown="0"><table>
        <tr>
        <th><span class="arithmatex">\(i\)</span></th>
        <th><span class="arithmatex">\(k\)</span></th>
        <th><span class="arithmatex">\(v[i][k]\)</span></th>
        <th><span class="arithmatex">\(s[i][k]\)</span></th>
        <th>Action</th>
        </tr>
        <tr>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(v[0][0]\leftarrow 0\)</span>, <span class="arithmatex">\(s[0][0]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>0</td>
        <td>1</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(v[0][1]\leftarrow 0\)</span>, <span class="arithmatex">\(s[0][1]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>0</td>
        <td>2</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(v[0][2]\leftarrow 0\)</span>, <span class="arithmatex">\(s[0][2]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>0</td>
        <td>3</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(v[0][3]\leftarrow 0\)</span>, <span class="arithmatex">\(s[0][3]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>0</td>
        <td>4</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(v[0][4]\leftarrow 0\)</span>, <span class="arithmatex">\(s[0][4]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>0</td>
        <td>5</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(v[0][5]\leftarrow 0\)</span>, <span class="arithmatex">\(s[0][5]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>0</td>
        <td>6</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(v[0][6]\leftarrow 0\)</span>, <span class="arithmatex">\(s[0][6]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>0</td>
        <td>7</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(v[0][7]\leftarrow 0\)</span>, <span class="arithmatex">\(s[0][7]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>0</td>
        <td>8</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(v[0][8]\leftarrow 0\)</span>, <span class="arithmatex">\(s[0][8]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>1</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(\max\{v[0][0]\}=0\)</span></td>
        </tr>
        <tr>
        <td>1</td>
        <td>1</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(\max\{v[0][1]\}=0\)</span></td>
        </tr>
        <tr>
        <td>1</td>
        <td>2</td>
        <td>5</td>
        <td>1</td>
        <td><span class="arithmatex">\(\max\{v[0][2],\,p[1]{+}v[0][0]\}=\max\{0,5\}=5\)</span></td>
        </tr>
        <tr>
        <td>1</td>
        <td>3</td>
        <td>5</td>
        <td>1</td>
        <td><span class="arithmatex">\(\max\{v[0][3],\,p[1]{+}v[0][1]\}=\max\{0,5\}=5\)</span></td>
        </tr>
        <tr>
        <td>1</td>
        <td>4</td>
        <td>10</td>
        <td>2</td>
        <td><span class="arithmatex">\(\max\{v[0][4],\,p[1]{+}v[0][2],\,2p[1]{+}v[0][0]\}=\max\{0,5,10\}=10\)</span></td>
        </tr>
        <tr>
        <td>1</td>
        <td>5</td>
        <td>10</td>
        <td>2</td>
        <td><span class="arithmatex">\(\max\{v[0][5],\,p[1]{+}v[0][3],\,2p[1]{+}v[0][1]\}=\max\{0,5,10\}=10\)</span></td>
        </tr>
        <tr>
        <td>1</td>
        <td>6</td>
        <td>15</td>
        <td>3</td>
        <td><span class="arithmatex">\(\max\{v[0][6],\,p[1]{+}v[0][4],\,2p[1]{+}v[0][2],\,3p[1]{+}v[0][0]\}=\max\{0,5,10,15\}=15\)</span></td>
        </tr>
        <tr>
        <td>1</td>
        <td>7</td>
        <td>15</td>
        <td>3</td>
        <td><span class="arithmatex">\(\max\{v[0][7],\,p[1]{+}v[0][5],\,2p[1]{+}v[0][3],\,3p[1]{+}v[0][1]\}=\max\{0,5,10,15\}=15\)</span></td>
        </tr>
        <tr>
        <td>1</td>
        <td>8</td>
        <td>15</td>
        <td>3</td>
        <td><span class="arithmatex">\(\max\{v[0][8],\,p[1]{+}v[0][6],\,2p[1]{+}v[0][4],\,3p[1]{+}v[0][2]\}=\max\{0,5,10,15\}=15\)</span></td>
        </tr>
        <tr>
        <td>2</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(\max\{v[1][0]\}=0\)</span></td>
        </tr>
        <tr>
        <td>2</td>
        <td>1</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(\max\{v[1][1]\}=0\)</span></td>
        </tr>
        <tr>
        <td>2</td>
        <td>2</td>
        <td>5</td>
        <td>0</td>
        <td><span class="arithmatex">\(\max\{v[1][2]\}=5\)</span></td>
        </tr>
        <tr>
        <td>2</td>
        <td>3</td>
        <td>5</td>
        <td>0</td>
        <td><span class="arithmatex">\(\max\{v[1][3]\}=5\)</span></td>
        </tr>
        <tr>
        <td>2</td>
        <td>4</td>
        <td>10</td>
        <td>0</td>
        <td><span class="arithmatex">\(\max\{v[1][4]\}=10\)</span></td>
        </tr>
        <tr>
        <td>2</td>
        <td>5</td>
        <td>10</td>
        <td>0</td>
        <td><span class="arithmatex">\(\max\{v[1][5],\,p[2]{+}v[1][0]\}=\max\{10,9\}=10\)</span></td>
        </tr>
        <tr>
        <td>2</td>
        <td>6</td>
        <td>15</td>
        <td>0</td>
        <td><span class="arithmatex">\(\max\{v[1][6],\,p[2]{+}v[1][1]\}=\max\{15,9\}=15\)</span></td>
        </tr>
        <tr>
        <td>2</td>
        <td>7</td>
        <td>15</td>
        <td>0</td>
        <td><span class="arithmatex">\(\max\{v[1][7],\,p[2]{+}v[1][2]\}=\max\{15,14\}=15\)</span></td>
        </tr>
        <tr>
        <td>2</td>
        <td>8</td>
        <td>15</td>
        <td>0</td>
        <td><span class="arithmatex">\(\max\{v[1][8],\,p[2]{+}v[1][3]\}=\max\{15,14\}=15\)</span></td>
        </tr>
        </table></div>

        This is the matrix $v$ after the execution of the DP algorithm:

        <div class="tabella" markdown="0"><table>
        <tr>
        <td><span class="arithmatex">\(v[i][k]\)</span></td>
        <td><span class="arithmatex">\(k=0\)</span></td>
        <td><span class="arithmatex">\(k=1\)</span></td>
        <td><span class="arithmatex">\(k=2\)</span></td>
        <td><span class="arithmatex">\(k=3\)</span></td>
        <td><span class="arithmatex">\(k=4\)</span></td>
        <td><span class="arithmatex">\(k=5\)</span></td>
        <td><span class="arithmatex">\(k=6\)</span></td>
        <td><span class="arithmatex">\(k=7\)</span></td>
        <td><span class="arithmatex">\(k=8\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=0\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=1\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>5</td>
        <td>5</td>
        <td>10</td>
        <td>10</td>
        <td>15</td>
        <td>15</td>
        <td>15</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=2\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>5</td>
        <td>5</td>
        <td>10</td>
        <td>10</td>
        <td>15</td>
        <td>15</td>
        <td>15</td>
        </tr>
        </table></div>

        This is the matrix $s$ after the execution of the DP algorithm:

        <div class="tabella" markdown="0"><table>
        <tr>
        <td><span class="arithmatex">\(s[i][k]\)</span></td>
        <td><span class="arithmatex">\(k=0\)</span></td>
        <td><span class="arithmatex">\(k=1\)</span></td>
        <td><span class="arithmatex">\(k=2\)</span></td>
        <td><span class="arithmatex">\(k=3\)</span></td>
        <td><span class="arithmatex">\(k=4\)</span></td>
        <td><span class="arithmatex">\(k=5\)</span></td>
        <td><span class="arithmatex">\(k=6\)</span></td>
        <td><span class="arithmatex">\(k=7\)</span></td>
        <td><span class="arithmatex">\(k=8\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=0\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=1\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>1</td>
        <td>1</td>
        <td>2</td>
        <td>2</td>
        <td>3</td>
        <td>3</td>
        <td>3</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=2\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        </tr>
        </table></div>

    2. We have the following matrix $s$:

        <div class="tabella" markdown="0"><table>
        <tr>
        <td><span class="arithmatex">\(s[i][k]\)</span></td>
        <td><span class="arithmatex">\(k=0\)</span></td>
        <td><span class="arithmatex">\(k=1\)</span></td>
        <td><span class="arithmatex">\(k=2\)</span></td>
        <td><span class="arithmatex">\(k=3\)</span></td>
        <td><span class="arithmatex">\(k=4\)</span></td>
        <td><span class="arithmatex">\(k=5\)</span></td>
        <td><span class="arithmatex">\(k=6\)</span></td>
        <td><span class="arithmatex">\(k=7\)</span></td>
        <td><span class="arithmatex">\(k=8\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=0\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=1\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>1</td>
        <td>1</td>
        <td>2</td>
        <td>2</td>
        <td>3</td>
        <td>3</td>
        <td>3</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=2\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        </tr>
        </table></div>

        We can reconstruct an optimal solution by starting from $i=2$ and $k=8$ as follows:

        <div class="tabella" markdown="0"><table>
        <tr>
        <th>Iteration</th>
        <th><span class="arithmatex">\(i\)</span></th>
        <th><span class="arithmatex">\(k\)</span></th>
        <th><span class="arithmatex">\(s[i][k]\)</span></th>
        <th><span class="arithmatex">\(x[1]\)</span></th>
        <th><span class="arithmatex">\(x[2]\)</span></th>
        <th>Action</th>
        </tr>
        <tr>
        <td>\-</td>
        <td>\-</td>
        <td>\-</td>
        <td>\-</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(k=8\)</span></td>
        </tr>
        <tr>
        <td>1</td>
        <td>2</td>
        <td>8</td>
        <td>0</td>
        <td>0</td>
        <td class="cella-blu">0</td>
        <td><span class="arithmatex">\(x[2]\leftarrow 0\)</span>, <span class="arithmatex">\(k\leftarrow 8-0\cdot5=8\)</span></td>
        </tr>
        <tr>
        <td>2</td>
        <td>1</td>
        <td>8</td>
        <td>3</td>
        <td class="cella-blu">3</td>
        <td>0</td>
        <td><span class="arithmatex">\(x[1]\leftarrow 3\)</span>, <span class="arithmatex">\(k\leftarrow 8-3\cdot2=2\)</span></td>
        </tr>
        </table></div>

        Thus, the vector

        $$
        (3,0)
        $$

        is an optimal solution. The optimal value is

        $$
        v[2][8]=15.
        $$

<a id="esercizio-15-15"></a>

!!! esercizio "Exercise 15.15: Exercise 5: Bounded Knapsack Problem"

    Consider the following BKP instance, where the knapsack has capacity $c=9$, and the profits, weights, and bounds associated with the item types are:

    <div class="tabella" markdown="0"><table>
    <tr>
    <th></th>
    <th><span class="arithmatex">\(i=1\)</span></th>
    <th><span class="arithmatex">\(i=2\)</span></th>
    <th><span class="arithmatex">\(i=3\)</span></th>
    </tr>
    <tr>
    <td><span class="arithmatex">\(p_i\)</span></td>
    <td>4</td>
    <td>5</td>
    <td>3</td>
    </tr>
    <tr>
    <td><span class="arithmatex">\(w_i\)</span></td>
    <td>3</td>
    <td>4</td>
    <td>2</td>
    </tr>
    <tr>
    <td><span class="arithmatex">\(b_i\)</span></td>
    <td>2</td>
    <td>1</td>
    <td>2</td>
    </tr>
    </table></div>

    **Questions**

    1. Show the execution of the bottom-up DP algorithm by reporting, for each iteration, the values of the matrices $v$ and $s$.

    2. Using the matrix $s$, reconstruct an optimal solution in integer notation $(x_1,x_2,x_3)$, and report the optimal value.

??? soluzione "Solution"

    1. Step-by-step execution of the bottom-up DP algorithm

        For each step of the DP algorithm, the table shows the values of $i$ and $k$, the cells $v[i][k]$ and $s[i][k]$, and the operation performed.

        <div class="tabella" markdown="0"><table>
        <tr>
        <th><span class="arithmatex">\(i\)</span></th>
        <th><span class="arithmatex">\(k\)</span></th>
        <th><span class="arithmatex">\(v[i][k]\)</span></th>
        <th><span class="arithmatex">\(s[i][k]\)</span></th>
        <th>Action</th>
        </tr>
        <tr>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(v[0][0]\leftarrow 0\)</span>, <span class="arithmatex">\(s[0][0]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>0</td>
        <td>1</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(v[0][1]\leftarrow 0\)</span>, <span class="arithmatex">\(s[0][1]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>0</td>
        <td>2</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(v[0][2]\leftarrow 0\)</span>, <span class="arithmatex">\(s[0][2]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>0</td>
        <td>3</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(v[0][3]\leftarrow 0\)</span>, <span class="arithmatex">\(s[0][3]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>0</td>
        <td>4</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(v[0][4]\leftarrow 0\)</span>, <span class="arithmatex">\(s[0][4]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>0</td>
        <td>5</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(v[0][5]\leftarrow 0\)</span>, <span class="arithmatex">\(s[0][5]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>0</td>
        <td>6</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(v[0][6]\leftarrow 0\)</span>, <span class="arithmatex">\(s[0][6]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>0</td>
        <td>7</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(v[0][7]\leftarrow 0\)</span>, <span class="arithmatex">\(s[0][7]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>0</td>
        <td>8</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(v[0][8]\leftarrow 0\)</span>, <span class="arithmatex">\(s[0][8]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>0</td>
        <td>9</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(v[0][9]\leftarrow 0\)</span>, <span class="arithmatex">\(s[0][9]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>1</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(\max\{v[0][0]\}=0\)</span></td>
        </tr>
        <tr>
        <td>1</td>
        <td>1</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(\max\{v[0][1]\}=0\)</span></td>
        </tr>
        <tr>
        <td>1</td>
        <td>2</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(\max\{v[0][2]\}=0\)</span></td>
        </tr>
        <tr>
        <td>1</td>
        <td>3</td>
        <td>4</td>
        <td>1</td>
        <td><span class="arithmatex">\(\max\{v[0][3],\,p[1]{+}v[0][0]\}=\max\{0,4\}=4\)</span></td>
        </tr>
        <tr>
        <td>1</td>
        <td>4</td>
        <td>4</td>
        <td>1</td>
        <td><span class="arithmatex">\(\max\{v[0][4],\,p[1]{+}v[0][1]\}=\max\{0,4\}=4\)</span></td>
        </tr>
        <tr>
        <td>1</td>
        <td>5</td>
        <td>4</td>
        <td>1</td>
        <td><span class="arithmatex">\(\max\{v[0][5],\,p[1]{+}v[0][2]\}=\max\{0,4\}=4\)</span></td>
        </tr>
        <tr>
        <td>1</td>
        <td>6</td>
        <td>8</td>
        <td>2</td>
        <td><span class="arithmatex">\(\max\{v[0][6],\,p[1]{+}v[0][3],\,2p[1]{+}v[0][0]\}=\max\{0,4,8\}=8\)</span></td>
        </tr>
        <tr>
        <td>1</td>
        <td>7</td>
        <td>8</td>
        <td>2</td>
        <td><span class="arithmatex">\(\max\{v[0][7],\,p[1]{+}v[0][4],\,2p[1]{+}v[0][1]\}=\max\{0,4,8\}=8\)</span></td>
        </tr>
        <tr>
        <td>1</td>
        <td>8</td>
        <td>8</td>
        <td>2</td>
        <td><span class="arithmatex">\(\max\{v[0][8],\,p[1]{+}v[0][5],\,2p[1]{+}v[0][2]\}=\max\{0,4,8\}=8\)</span></td>
        </tr>
        <tr>
        <td>1</td>
        <td>9</td>
        <td>8</td>
        <td>2</td>
        <td><span class="arithmatex">\(\max\{v[0][9],\,p[1]{+}v[0][6],\,2p[1]{+}v[0][3]\}=\max\{0,4,8\}=8\)</span></td>
        </tr>
        <tr>
        <td>2</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(\max\{v[1][0]\}=0\)</span></td>
        </tr>
        <tr>
        <td>2</td>
        <td>1</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(\max\{v[1][1]\}=0\)</span></td>
        </tr>
        <tr>
        <td>2</td>
        <td>2</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(\max\{v[1][2]\}=0\)</span></td>
        </tr>
        <tr>
        <td>2</td>
        <td>3</td>
        <td>4</td>
        <td>0</td>
        <td><span class="arithmatex">\(\max\{v[1][3]\}=4\)</span></td>
        </tr>
        <tr>
        <td>2</td>
        <td>4</td>
        <td>5</td>
        <td>1</td>
        <td><span class="arithmatex">\(\max\{v[1][4],\,p[2]{+}v[1][0]\}=\max\{4,5\}=5\)</span></td>
        </tr>
        <tr>
        <td>2</td>
        <td>5</td>
        <td>5</td>
        <td>1</td>
        <td><span class="arithmatex">\(\max\{v[1][5],\,p[2]{+}v[1][1]\}=\max\{4,5\}=5\)</span></td>
        </tr>
        <tr>
        <td>2</td>
        <td>6</td>
        <td>8</td>
        <td>0</td>
        <td><span class="arithmatex">\(\max\{v[1][6],\,p[2]{+}v[1][2]\}=\max\{8,5\}=8\)</span></td>
        </tr>
        <tr>
        <td>2</td>
        <td>7</td>
        <td>9</td>
        <td>1</td>
        <td><span class="arithmatex">\(\max\{v[1][7],\,p[2]{+}v[1][3]\}=\max\{8,9\}=9\)</span></td>
        </tr>
        <tr>
        <td>2</td>
        <td>8</td>
        <td>9</td>
        <td>1</td>
        <td><span class="arithmatex">\(\max\{v[1][8],\,p[2]{+}v[1][4]\}=\max\{8,9\}=9\)</span></td>
        </tr>
        <tr>
        <td>2</td>
        <td>9</td>
        <td>9</td>
        <td>1</td>
        <td><span class="arithmatex">\(\max\{v[1][9],\,p[2]{+}v[1][5]\}=\max\{8,9\}=9\)</span></td>
        </tr>
        <tr>
        <td>3</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(\max\{v[2][0]\}=0\)</span></td>
        </tr>
        <tr>
        <td>3</td>
        <td>1</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(\max\{v[2][1]\}=0\)</span></td>
        </tr>
        <tr>
        <td>3</td>
        <td>2</td>
        <td>3</td>
        <td>1</td>
        <td><span class="arithmatex">\(\max\{v[2][2],\,p[3]{+}v[2][0]\}=\max\{0,3\}=3\)</span></td>
        </tr>
        <tr>
        <td>3</td>
        <td>3</td>
        <td>4</td>
        <td>0</td>
        <td><span class="arithmatex">\(\max\{v[2][3],\,p[3]{+}v[2][1]\}=\max\{4,3\}=4\)</span></td>
        </tr>
        <tr>
        <td>3</td>
        <td>4</td>
        <td>6</td>
        <td>2</td>
        <td><span class="arithmatex">\(\max\{v[2][4],\,p[3]{+}v[2][2],\,2p[3]{+}v[2][0]\}=\max\{5,3,6\}=6\)</span></td>
        </tr>
        <tr>
        <td>3</td>
        <td>5</td>
        <td>7</td>
        <td>1</td>
        <td><span class="arithmatex">\(\max\{v[2][5],\,p[3]{+}v[2][3],\,2p[3]{+}v[2][1]\}=\max\{5,7,6\}=7\)</span></td>
        </tr>
        <tr>
        <td>3</td>
        <td>6</td>
        <td>8</td>
        <td>0</td>
        <td><span class="arithmatex">\(\max\{v[2][6],\,p[3]{+}v[2][4],\,2p[3]{+}v[2][2]\}=\max\{8,8,6\}=8\)</span></td>
        </tr>
        <tr>
        <td>3</td>
        <td>7</td>
        <td>10</td>
        <td>2</td>
        <td><span class="arithmatex">\(\max\{v[2][7],\,p[3]{+}v[2][5],\,2p[3]{+}v[2][3]\}=\max\{9,8,10\}=10\)</span></td>
        </tr>
        <tr>
        <td>3</td>
        <td>8</td>
        <td>11</td>
        <td>1</td>
        <td><span class="arithmatex">\(\max\{v[2][8],\,p[3]{+}v[2][6],\,2p[3]{+}v[2][4]\}=\max\{9,11,11\}=11\)</span></td>
        </tr>
        <tr>
        <td>3</td>
        <td>9</td>
        <td>12</td>
        <td>1</td>
        <td><span class="arithmatex">\(\max\{v[2][9],\,p[3]{+}v[2][7],\,2p[3]{+}v[2][5]\}=\max\{9,12,11\}=12\)</span></td>
        </tr>
        </table></div>

        This is the matrix $v$ after the execution of the DP algorithm:

        <div class="tabella" markdown="0"><table>
        <tr>
        <td><span class="arithmatex">\(v[i][k]\)</span></td>
        <td><span class="arithmatex">\(k=0\)</span></td>
        <td><span class="arithmatex">\(k=1\)</span></td>
        <td><span class="arithmatex">\(k=2\)</span></td>
        <td><span class="arithmatex">\(k=3\)</span></td>
        <td><span class="arithmatex">\(k=4\)</span></td>
        <td><span class="arithmatex">\(k=5\)</span></td>
        <td><span class="arithmatex">\(k=6\)</span></td>
        <td><span class="arithmatex">\(k=7\)</span></td>
        <td><span class="arithmatex">\(k=8\)</span></td>
        <td><span class="arithmatex">\(k=9\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=0\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=1\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>4</td>
        <td>4</td>
        <td>4</td>
        <td>8</td>
        <td>8</td>
        <td>8</td>
        <td>8</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=2\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>4</td>
        <td>5</td>
        <td>5</td>
        <td>8</td>
        <td>9</td>
        <td>9</td>
        <td>9</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=3\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>3</td>
        <td>4</td>
        <td>6</td>
        <td>7</td>
        <td>8</td>
        <td>10</td>
        <td>11</td>
        <td>12</td>
        </tr>
        </table></div>

        This is the matrix $s$ after the execution of the DP algorithm:

        <div class="tabella" markdown="0"><table>
        <tr>
        <td><span class="arithmatex">\(s[i][k]\)</span></td>
        <td><span class="arithmatex">\(k=0\)</span></td>
        <td><span class="arithmatex">\(k=1\)</span></td>
        <td><span class="arithmatex">\(k=2\)</span></td>
        <td><span class="arithmatex">\(k=3\)</span></td>
        <td><span class="arithmatex">\(k=4\)</span></td>
        <td><span class="arithmatex">\(k=5\)</span></td>
        <td><span class="arithmatex">\(k=6\)</span></td>
        <td><span class="arithmatex">\(k=7\)</span></td>
        <td><span class="arithmatex">\(k=8\)</span></td>
        <td><span class="arithmatex">\(k=9\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=0\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=1\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>2</td>
        <td>2</td>
        <td>2</td>
        <td>2</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=2\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>1</td>
        <td>1</td>
        <td>0</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=3\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>1</td>
        <td>0</td>
        <td>2</td>
        <td>1</td>
        <td>0</td>
        <td>2</td>
        <td>1</td>
        <td>1</td>
        </tr>
        </table></div>

    2. We have the following matrix $s$:

        <div class="tabella" markdown="0"><table>
        <tr>
        <td><span class="arithmatex">\(s[i][k]\)</span></td>
        <td><span class="arithmatex">\(k=0\)</span></td>
        <td><span class="arithmatex">\(k=1\)</span></td>
        <td><span class="arithmatex">\(k=2\)</span></td>
        <td><span class="arithmatex">\(k=3\)</span></td>
        <td><span class="arithmatex">\(k=4\)</span></td>
        <td><span class="arithmatex">\(k=5\)</span></td>
        <td><span class="arithmatex">\(k=6\)</span></td>
        <td><span class="arithmatex">\(k=7\)</span></td>
        <td><span class="arithmatex">\(k=8\)</span></td>
        <td><span class="arithmatex">\(k=9\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=0\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=1\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>2</td>
        <td>2</td>
        <td>2</td>
        <td>2</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=2\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>1</td>
        <td>1</td>
        <td>0</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(i=3\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>1</td>
        <td>0</td>
        <td>2</td>
        <td>1</td>
        <td>0</td>
        <td>2</td>
        <td>1</td>
        <td>1</td>
        </tr>
        </table></div>

        We can reconstruct an optimal solution by starting from $i=3$ and $k=9$ as follows:

        <div class="tabella" markdown="0"><table>
        <tr>
        <th>Iteration</th>
        <th><span class="arithmatex">\(i\)</span></th>
        <th><span class="arithmatex">\(k\)</span></th>
        <th><span class="arithmatex">\(s[i][k]\)</span></th>
        <th><span class="arithmatex">\(x[1]\)</span></th>
        <th><span class="arithmatex">\(x[2]\)</span></th>
        <th><span class="arithmatex">\(x[3]\)</span></th>
        <th>Action</th>
        </tr>
        <tr>
        <td>\-</td>
        <td>\-</td>
        <td>\-</td>
        <td>\-</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(k=9\)</span></td>
        </tr>
        <tr>
        <td>1</td>
        <td>3</td>
        <td>9</td>
        <td>1</td>
        <td>0</td>
        <td>0</td>
        <td class="cella-blu">1</td>
        <td><span class="arithmatex">\(x[3]\leftarrow 1\)</span>, <span class="arithmatex">\(k\leftarrow 9-1\cdot2=7\)</span></td>
        </tr>
        <tr>
        <td>2</td>
        <td>2</td>
        <td>7</td>
        <td>1</td>
        <td>0</td>
        <td class="cella-blu">1</td>
        <td>1</td>
        <td><span class="arithmatex">\(x[2]\leftarrow 1\)</span>, <span class="arithmatex">\(k\leftarrow 7-1\cdot4=3\)</span></td>
        </tr>
        <tr>
        <td>3</td>
        <td>1</td>
        <td>3</td>
        <td>1</td>
        <td class="cella-blu">1</td>
        <td>1</td>
        <td>1</td>
        <td><span class="arithmatex">\(x[1]\leftarrow 1\)</span>, <span class="arithmatex">\(k\leftarrow 3-1\cdot3=0\)</span></td>
        </tr>
        </table></div>

        Thus, the vector

        $$
        (1,1,1)
        $$

        is an optimal solution. The optimal value is

        $$
        v[3][9]=12.
        $$
