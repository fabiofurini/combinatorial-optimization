---
title: "Exercises · DP for the rod cutting problem"
---

# Exercises · DP for the rod cutting problem

<div class="info-capitolo" markdown>

**Exercises · Chapter 25** · each solution opens with a click · [:material-book-open-variant: Chapter 25: Rod cutting](../dynamic-programming/dp-rod-cutting/index.md) · [:material-file-pdf-box: Exercises, volume 3 (PDF)](../pdf/exercises-3-dynamic-programming.pdf)

</div>

<a id="esercizio-25-1"></a>

!!! esercizio "Exercise 25.1: Exercise 1: Rod Cutting Problem"

    Consider the following RCP instance, where the rod has length $n=6$, and the profits associated with the possible piece lengths are:

    $$
    \begin{array}{l|rrrrrr}
    \hline  & {i=1} & {i=2} & {i=3} & {i=4} & {i=5} & {i=6} \\
    \hline {p_i} & {2} & {5} & {7} & {8} & {10} & {13} \\
    \hline
    \end{array}
    $$

    **Questions**

    1. Show the execution of the first bottom-up DP algorithm by reporting, for each iteration, the values of the vector $v$ and the values of the vector $s$.

    2. Using the vector $s$, reconstruct an optimal solution in integer notation $(x_1,x_2,\dots,x_n)$, and report the optimal value.

    3. Show the execution of the second bottom-up DP algorithm by reporting, for each iteration, the values of the matrices $v$ and $s$.

    4. Using the matrix $s$, reconstruct an optimal solution in integer notation $(x_1,x_2,\dots,x_n)$, and report the optimal value.

??? soluzione "Solution"

    1. Step-by-step execution of the first bottom-up DP algorithm

        For each step of the DP algorithm, the table shows the values of $\ell$ and $i$, the cells $v[\ell]$ and $s[\ell]$, the current value of $\mathit{m}$, and the current value of $\mathit{t}$. The cell of $\mathit{m}$ is highlighted in <mark>red</mark> when updated; the cell of $\mathit{t}$ is highlighted in <mark>blue</mark> when updated; the cells of $v[\ell]$ and $s[\ell]$ are highlighted in <mark>blue</mark> when assigned.

        <div class="tabella" markdown="0"><table>
        <tr>
        <th><span class="arithmatex">\(\ell\)</span></th>
        <th><span class="arithmatex">\(i\)</span></th>
        <th><span class="arithmatex">\(v[\ell]\)</span></th>
        <th><span class="arithmatex">\(s[\ell]\)</span></th>
        <th><span class="arithmatex">\(\mathit{m}\)</span></th>
        <th><span class="arithmatex">\(\mathit{t}\)</span></th>
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
        <td></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(\mathit{m}\leftarrow 0\)</span>, <span class="arithmatex">\(\mathit{t}\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>1</td>
        <td>1</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td class="cella-rossa">2</td>
        <td class="cella-blu">1</td>
        <td><span class="arithmatex">\(p[1]+v[0]=2+0=2>0\)</span>: <span class="arithmatex">\(\mathit{m}\leftarrow 2\)</span>, <span class="arithmatex">\(\mathit{t}\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td class="cella-blu">2</td>
        <td class="cella-blu">1</td>
        <td>2</td>
        <td>1</td>
        <td><span class="arithmatex">\(v[1]\leftarrow \mathit{m}=2\)</span>, <span class="arithmatex">\(s[1]\leftarrow \mathit{t}=1\)</span></td>
        </tr>
        <tr>
        <td></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(\mathit{m}\leftarrow 0\)</span>, <span class="arithmatex">\(\mathit{t}\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>2</td>
        <td>1</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td class="cella-rossa">4</td>
        <td class="cella-blu">1</td>
        <td><span class="arithmatex">\(p[1]+v[1]=2+2=4>0\)</span>: <span class="arithmatex">\(\mathit{m}\leftarrow 4\)</span>, <span class="arithmatex">\(\mathit{t}\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td></td>
        <td>2</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td class="cella-rossa">5</td>
        <td class="cella-blu">2</td>
        <td><span class="arithmatex">\(p[2]+v[0]=5+0=5>4\)</span>: <span class="arithmatex">\(\mathit{m}\leftarrow 5\)</span>, <span class="arithmatex">\(\mathit{t}\leftarrow 2\)</span></td>
        </tr>
        <tr>
        <td></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td class="cella-blu">5</td>
        <td class="cella-blu">2</td>
        <td>5</td>
        <td>2</td>
        <td><span class="arithmatex">\(v[2]\leftarrow \mathit{m}=5\)</span>, <span class="arithmatex">\(s[2]\leftarrow \mathit{t}=2\)</span></td>
        </tr>
        <tr>
        <td></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(\mathit{m}\leftarrow 0\)</span>, <span class="arithmatex">\(\mathit{t}\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>3</td>
        <td>1</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td class="cella-rossa">7</td>
        <td class="cella-blu">1</td>
        <td><span class="arithmatex">\(p[1]+v[2]=2+5=7>0\)</span>: <span class="arithmatex">\(\mathit{m}\leftarrow 7\)</span>, <span class="arithmatex">\(\mathit{t}\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td></td>
        <td>2</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>7</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[2]+v[1]=5+2=7=\mathit{m}\)</span>: no update</td>
        </tr>
        <tr>
        <td></td>
        <td>3</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>7</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[3]+v[0]=7+0=7=\mathit{m}\)</span>: no update</td>
        </tr>
        <tr>
        <td></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td class="cella-blu">7</td>
        <td class="cella-blu">1</td>
        <td>7</td>
        <td>1</td>
        <td><span class="arithmatex">\(v[3]\leftarrow \mathit{m}=7\)</span>, <span class="arithmatex">\(s[3]\leftarrow \mathit{t}=1\)</span></td>
        </tr>
        <tr>
        <td></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(\mathit{m}\leftarrow 0\)</span>, <span class="arithmatex">\(\mathit{t}\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>4</td>
        <td>1</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td class="cella-rossa">9</td>
        <td class="cella-blu">1</td>
        <td><span class="arithmatex">\(p[1]+v[3]=2+7=9>0\)</span>: <span class="arithmatex">\(\mathit{m}\leftarrow 9\)</span>, <span class="arithmatex">\(\mathit{t}\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td></td>
        <td>2</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td class="cella-rossa">10</td>
        <td class="cella-blu">2</td>
        <td><span class="arithmatex">\(p[2]+v[2]=5+5=10>9\)</span>: <span class="arithmatex">\(\mathit{m}\leftarrow 10\)</span>, <span class="arithmatex">\(\mathit{t}\leftarrow 2\)</span></td>
        </tr>
        <tr>
        <td></td>
        <td>3</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>10</td>
        <td>2</td>
        <td><span class="arithmatex">\(p[3]+v[1]=7+2=9<10\)</span>: no update</td>
        </tr>
        <tr>
        <td></td>
        <td>4</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>10</td>
        <td>2</td>
        <td><span class="arithmatex">\(p[4]+v[0]=8+0=8<10\)</span>: no update</td>
        </tr>
        <tr>
        <td></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td class="cella-blu">10</td>
        <td class="cella-blu">2</td>
        <td>10</td>
        <td>2</td>
        <td><span class="arithmatex">\(v[4]\leftarrow \mathit{m}=10\)</span>, <span class="arithmatex">\(s[4]\leftarrow \mathit{t}=2\)</span></td>
        </tr>
        <tr>
        <td></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(\mathit{m}\leftarrow 0\)</span>, <span class="arithmatex">\(\mathit{t}\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>5</td>
        <td>1</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td class="cella-rossa">12</td>
        <td class="cella-blu">1</td>
        <td><span class="arithmatex">\(p[1]+v[4]=2+10=12>0\)</span>: <span class="arithmatex">\(\mathit{m}\leftarrow 12\)</span>, <span class="arithmatex">\(\mathit{t}\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td></td>
        <td>2</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>12</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[2]+v[3]=5+7=12=\mathit{m}\)</span>: no update</td>
        </tr>
        <tr>
        <td></td>
        <td>3</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>12</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[3]+v[2]=7+5=12=\mathit{m}\)</span>: no update</td>
        </tr>
        <tr>
        <td></td>
        <td>4</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>12</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[4]+v[1]=8+2=10<12\)</span>: no update</td>
        </tr>
        <tr>
        <td></td>
        <td>5</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>12</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[5]+v[0]=10+0=10<12\)</span>: no update</td>
        </tr>
        <tr>
        <td></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td class="cella-blu">12</td>
        <td class="cella-blu">1</td>
        <td>12</td>
        <td>1</td>
        <td><span class="arithmatex">\(v[5]\leftarrow \mathit{m}=12\)</span>, <span class="arithmatex">\(s[5]\leftarrow \mathit{t}=1\)</span></td>
        </tr>
        <tr>
        <td></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(\mathit{m}\leftarrow 0\)</span>, <span class="arithmatex">\(\mathit{t}\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>6</td>
        <td>1</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td class="cella-rossa">14</td>
        <td class="cella-blu">1</td>
        <td><span class="arithmatex">\(p[1]+v[5]=2+12=14>0\)</span>: <span class="arithmatex">\(\mathit{m}\leftarrow 14\)</span>, <span class="arithmatex">\(\mathit{t}\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td></td>
        <td>2</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td class="cella-rossa">15</td>
        <td class="cella-blu">2</td>
        <td><span class="arithmatex">\(p[2]+v[4]=5+10=15>14\)</span>: <span class="arithmatex">\(\mathit{m}\leftarrow 15\)</span>, <span class="arithmatex">\(\mathit{t}\leftarrow 2\)</span></td>
        </tr>
        <tr>
        <td></td>
        <td>3</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>15</td>
        <td>2</td>
        <td><span class="arithmatex">\(p[3]+v[3]=7+7=14<15\)</span>: no update</td>
        </tr>
        <tr>
        <td></td>
        <td>4</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>15</td>
        <td>2</td>
        <td><span class="arithmatex">\(p[4]+v[2]=8+5=13<15\)</span>: no update</td>
        </tr>
        <tr>
        <td></td>
        <td>5</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>15</td>
        <td>2</td>
        <td><span class="arithmatex">\(p[5]+v[1]=10+2=12<15\)</span>: no update</td>
        </tr>
        <tr>
        <td></td>
        <td>6</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>15</td>
        <td>2</td>
        <td><span class="arithmatex">\(p[6]+v[0]=13+0=13<15\)</span>: no update</td>
        </tr>
        <tr>
        <td></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td class="cella-blu">15</td>
        <td class="cella-blu">2</td>
        <td>15</td>
        <td>2</td>
        <td><span class="arithmatex">\(v[6]\leftarrow \mathit{m}=15\)</span>, <span class="arithmatex">\(s[6]\leftarrow \mathit{t}=2\)</span></td>
        </tr>
        </table></div>

        This is the vector $v$ after the execution of the DP algorithm:

        $$
        \begin{array}{cccccccc}
        \hline  & {\ell=0} & {\ell=1} & {\ell=2} & {\ell=3} & {\ell=4} & {\ell=5} & {\ell=6} \\
        \hline {v[\ell]} & 0 & 2 & 5 & 7 & 10 & 12 & 15 \\
        \hline
        \end{array}
        $$

        This is the vector $s$ after the execution of the DP algorithm:

        $$
        \begin{array}{ccccccc}
        \hline  & {\ell=1} & {\ell=2} & {\ell=3} & {\ell=4} & {\ell=5} & {\ell=6} \\
        \hline {s[\ell]} & 1 & 2 & 1 & 2 & 1 & 2 \\
        \hline
        \end{array}
        $$

    2. We have the following vector $s$:

        $$
        \begin{array}{l|rrrrrr}
        \hline  & {\ell=1} & {\ell=2} & {\ell=3} & {\ell=4} & {\ell=5} & {\ell=6} \\
        \hline {s[\ell]} & 1 & 2 & 1 & 2 & 1 & 2 \\
        \hline
        \end{array}
        $$

        We can reconstruct an optimal solution for a rod of length $n=6$ as follows:

        <div class="tabella" markdown="0"><table>
        <tr>
        <th>Iteration</th>
        <th><span class="arithmatex">\(i\)</span></th>
        <th><span class="arithmatex">\(s[i]\)</span></th>
        <th><span class="arithmatex">\(x[1]\)</span></th>
        <th><span class="arithmatex">\(x[2]\)</span></th>
        <th><span class="arithmatex">\(x[3]\)</span></th>
        <th><span class="arithmatex">\(x[4]\)</span></th>
        <th><span class="arithmatex">\(x[5]\)</span></th>
        <th><span class="arithmatex">\(x[6]\)</span></th>
        <th>Update of <span class="arithmatex">\(i\)</span></th>
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
        <td>0</td>
        <td><span class="arithmatex">\(i=6\)</span></td>
        </tr>
        <tr>
        <td>1</td>
        <td>6</td>
        <td>2</td>
        <td>0</td>
        <td class="cella-blu">1</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(i=6-2=4\)</span></td>
        </tr>
        <tr>
        <td>2</td>
        <td>4</td>
        <td>2</td>
        <td>0</td>
        <td class="cella-blu">2</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(i=4-2=2\)</span></td>
        </tr>
        <tr>
        <td>3</td>
        <td>2</td>
        <td>2</td>
        <td>0</td>
        <td class="cella-blu">3</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(i=2-2=0\)</span></td>
        </tr>
        </table></div>

        Thus, the vector

        $$
        (0,3,0,0,0,0)
        $$

        is an optimal solution. The optimal value is

        $$
        v[6]=15.
        $$

    3. Step-by-step execution of the second bottom-up DP algorithm

        For each step of the DP algorithm, the table shows the values of $i$ and $\ell$, the cells ${v}[i][\ell]$ and ${s}[i][\ell]$, and the operation performed. The cells are computed for increasing values of $i$ and, for each fixed value of $i$, for increasing values of $\ell$.

        <div class="tabella" markdown="0"><table>
        <tr>
        <th><span class="arithmatex">\(i\)</span></th>
        <th><span class="arithmatex">\(\ell\)</span></th>
        <th><span class="arithmatex">\({v}[i][\ell]\)</span></th>
        <th><span class="arithmatex">\({s}[i][\ell]\)</span></th>
        <th>Action</th>
        </tr>
        <tr>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\({v}[0][0]\leftarrow 0\)</span>, <span class="arithmatex">\({s}[0][0]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(-\infty\)</span></td>
        <td>0</td>
        <td><span class="arithmatex">\({v}[0][1]\leftarrow -\infty\)</span>, <span class="arithmatex">\({s}[0][1]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(-\infty\)</span></td>
        <td>0</td>
        <td><span class="arithmatex">\({v}[0][2]\leftarrow -\infty\)</span>, <span class="arithmatex">\({s}[0][2]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(-\infty\)</span></td>
        <td>0</td>
        <td><span class="arithmatex">\({v}[0][3]\leftarrow -\infty\)</span>, <span class="arithmatex">\({s}[0][3]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(-\infty\)</span></td>
        <td>0</td>
        <td><span class="arithmatex">\({v}[0][4]\leftarrow -\infty\)</span>, <span class="arithmatex">\({s}[0][4]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(-\infty\)</span></td>
        <td>0</td>
        <td><span class="arithmatex">\({v}[0][5]\leftarrow -\infty\)</span>, <span class="arithmatex">\({s}[0][5]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(-\infty\)</span></td>
        <td>0</td>
        <td><span class="arithmatex">\({v}[0][6]\leftarrow -\infty\)</span>, <span class="arithmatex">\({s}[0][6]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(i>\ell\)</span>: <span class="arithmatex">\({v}[1][0]\leftarrow {v}[0][0]=0\)</span>, <span class="arithmatex">\({s}[1][0]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td>2</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[1]+{v}[1][0]=2+0>{v}[0][1]=-\infty\)</span>: <span class="arithmatex">\({v}[1][1]\leftarrow 2\)</span>, <span class="arithmatex">\({s}[1][1]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td>4</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[1]+{v}[1][1]=2+2>{v}[0][2]=-\infty\)</span>: <span class="arithmatex">\({v}[1][2]\leftarrow 4\)</span>, <span class="arithmatex">\({s}[1][2]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td>6</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[1]+{v}[1][2]=2+4>{v}[0][3]=-\infty\)</span>: <span class="arithmatex">\({v}[1][3]\leftarrow 6\)</span>, <span class="arithmatex">\({s}[1][3]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td>8</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[1]+{v}[1][3]=2+6>{v}[0][4]=-\infty\)</span>: <span class="arithmatex">\({v}[1][4]\leftarrow 8\)</span>, <span class="arithmatex">\({s}[1][4]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td>10</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[1]+{v}[1][4]=2+8>{v}[0][5]=-\infty\)</span>: <span class="arithmatex">\({v}[1][5]\leftarrow 10\)</span>, <span class="arithmatex">\({s}[1][5]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td>12</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[1]+{v}[1][5]=2+10>{v}[0][6]=-\infty\)</span>: <span class="arithmatex">\({v}[1][6]\leftarrow 12\)</span>, <span class="arithmatex">\({s}[1][6]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(i>\ell\)</span>: <span class="arithmatex">\({v}[2][0]\leftarrow {v}[1][0]=0\)</span>, <span class="arithmatex">\({s}[2][0]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td>2</td>
        <td>0</td>
        <td><span class="arithmatex">\(i>\ell\)</span>: <span class="arithmatex">\({v}[2][1]\leftarrow {v}[1][1]=2\)</span>, <span class="arithmatex">\({s}[2][1]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td>5</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[2]+{v}[2][0]=5+0>{v}[1][2]=4\)</span>: <span class="arithmatex">\({v}[2][2]\leftarrow 5\)</span>, <span class="arithmatex">\({s}[2][2]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td>7</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[2]+{v}[2][1]=5+2>{v}[1][3]=6\)</span>: <span class="arithmatex">\({v}[2][3]\leftarrow 7\)</span>, <span class="arithmatex">\({s}[2][3]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td>10</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[2]+{v}[2][2]=5+5>{v}[1][4]=8\)</span>: <span class="arithmatex">\({v}[2][4]\leftarrow 10\)</span>, <span class="arithmatex">\({s}[2][4]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td>12</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[2]+{v}[2][3]=5+7>{v}[1][5]=10\)</span>: <span class="arithmatex">\({v}[2][5]\leftarrow 12\)</span>, <span class="arithmatex">\({s}[2][5]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td>15</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[2]+{v}[2][4]=5+10>{v}[1][6]=12\)</span>: <span class="arithmatex">\({v}[2][6]\leftarrow 15\)</span>, <span class="arithmatex">\({s}[2][6]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(i>\ell\)</span>: <span class="arithmatex">\({v}[3][0]\leftarrow {v}[2][0]=0\)</span>, <span class="arithmatex">\({s}[3][0]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td>2</td>
        <td>0</td>
        <td><span class="arithmatex">\(i>\ell\)</span>: <span class="arithmatex">\({v}[3][1]\leftarrow {v}[2][1]=2\)</span>, <span class="arithmatex">\({s}[3][1]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td>5</td>
        <td>0</td>
        <td><span class="arithmatex">\(i>\ell\)</span>: <span class="arithmatex">\({v}[3][2]\leftarrow {v}[2][2]=5\)</span>, <span class="arithmatex">\({s}[3][2]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td>7</td>
        <td>0</td>
        <td><span class="arithmatex">\(p[3]+{v}[3][0]=7+0\le {v}[2][3]=7\)</span>: <span class="arithmatex">\({v}[3][3]\leftarrow {v}[2][3]=7\)</span>, <span class="arithmatex">\({s}[3][3]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td>10</td>
        <td>0</td>
        <td><span class="arithmatex">\(p[3]+{v}[3][1]=7+2\le {v}[2][4]=10\)</span>: <span class="arithmatex">\({v}[3][4]\leftarrow {v}[2][4]=10\)</span>, <span class="arithmatex">\({s}[3][4]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td>12</td>
        <td>0</td>
        <td><span class="arithmatex">\(p[3]+{v}[3][2]=7+5\le {v}[2][5]=12\)</span>: <span class="arithmatex">\({v}[3][5]\leftarrow {v}[2][5]=12\)</span>, <span class="arithmatex">\({s}[3][5]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td>15</td>
        <td>0</td>
        <td><span class="arithmatex">\(p[3]+{v}[3][3]=7+7\le {v}[2][6]=15\)</span>: <span class="arithmatex">\({v}[3][6]\leftarrow {v}[2][6]=15\)</span>, <span class="arithmatex">\({s}[3][6]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(i>\ell\)</span>: <span class="arithmatex">\({v}[4][0]\leftarrow {v}[3][0]=0\)</span>, <span class="arithmatex">\({s}[4][0]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td>2</td>
        <td>0</td>
        <td><span class="arithmatex">\(i>\ell\)</span>: <span class="arithmatex">\({v}[4][1]\leftarrow {v}[3][1]=2\)</span>, <span class="arithmatex">\({s}[4][1]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td>5</td>
        <td>0</td>
        <td><span class="arithmatex">\(i>\ell\)</span>: <span class="arithmatex">\({v}[4][2]\leftarrow {v}[3][2]=5\)</span>, <span class="arithmatex">\({s}[4][2]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td>7</td>
        <td>0</td>
        <td><span class="arithmatex">\(i>\ell\)</span>: <span class="arithmatex">\({v}[4][3]\leftarrow {v}[3][3]=7\)</span>, <span class="arithmatex">\({s}[4][3]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td>10</td>
        <td>0</td>
        <td><span class="arithmatex">\(p[4]+{v}[4][0]=8+0\le {v}[3][4]=10\)</span>: <span class="arithmatex">\({v}[4][4]\leftarrow {v}[3][4]=10\)</span>, <span class="arithmatex">\({s}[4][4]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td>12</td>
        <td>0</td>
        <td><span class="arithmatex">\(p[4]+{v}[4][1]=8+2\le {v}[3][5]=12\)</span>: <span class="arithmatex">\({v}[4][5]\leftarrow {v}[3][5]=12\)</span>, <span class="arithmatex">\({s}[4][5]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td>15</td>
        <td>0</td>
        <td><span class="arithmatex">\(p[4]+{v}[4][2]=8+5\le {v}[3][6]=15\)</span>: <span class="arithmatex">\({v}[4][6]\leftarrow {v}[3][6]=15\)</span>, <span class="arithmatex">\({s}[4][6]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(i>\ell\)</span>: <span class="arithmatex">\({v}[5][0]\leftarrow {v}[4][0]=0\)</span>, <span class="arithmatex">\({s}[5][0]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td>2</td>
        <td>0</td>
        <td><span class="arithmatex">\(i>\ell\)</span>: <span class="arithmatex">\({v}[5][1]\leftarrow {v}[4][1]=2\)</span>, <span class="arithmatex">\({s}[5][1]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td>5</td>
        <td>0</td>
        <td><span class="arithmatex">\(i>\ell\)</span>: <span class="arithmatex">\({v}[5][2]\leftarrow {v}[4][2]=5\)</span>, <span class="arithmatex">\({s}[5][2]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td>7</td>
        <td>0</td>
        <td><span class="arithmatex">\(i>\ell\)</span>: <span class="arithmatex">\({v}[5][3]\leftarrow {v}[4][3]=7\)</span>, <span class="arithmatex">\({s}[5][3]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td>10</td>
        <td>0</td>
        <td><span class="arithmatex">\(i>\ell\)</span>: <span class="arithmatex">\({v}[5][4]\leftarrow {v}[4][4]=10\)</span>, <span class="arithmatex">\({s}[5][4]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td>12</td>
        <td>0</td>
        <td><span class="arithmatex">\(p[5]+{v}[5][0]=10+0\le {v}[4][5]=12\)</span>: <span class="arithmatex">\({v}[5][5]\leftarrow {v}[4][5]=12\)</span>, <span class="arithmatex">\({s}[5][5]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td>15</td>
        <td>0</td>
        <td><span class="arithmatex">\(p[5]+{v}[5][1]=10+2\le {v}[4][6]=15\)</span>: <span class="arithmatex">\({v}[5][6]\leftarrow {v}[4][6]=15\)</span>, <span class="arithmatex">\({s}[5][6]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(i>\ell\)</span>: <span class="arithmatex">\({v}[6][0]\leftarrow {v}[5][0]=0\)</span>, <span class="arithmatex">\({s}[6][0]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td>2</td>
        <td>0</td>
        <td><span class="arithmatex">\(i>\ell\)</span>: <span class="arithmatex">\({v}[6][1]\leftarrow {v}[5][1]=2\)</span>, <span class="arithmatex">\({s}[6][1]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td>5</td>
        <td>0</td>
        <td><span class="arithmatex">\(i>\ell\)</span>: <span class="arithmatex">\({v}[6][2]\leftarrow {v}[5][2]=5\)</span>, <span class="arithmatex">\({s}[6][2]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td>7</td>
        <td>0</td>
        <td><span class="arithmatex">\(i>\ell\)</span>: <span class="arithmatex">\({v}[6][3]\leftarrow {v}[5][3]=7\)</span>, <span class="arithmatex">\({s}[6][3]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td>10</td>
        <td>0</td>
        <td><span class="arithmatex">\(i>\ell\)</span>: <span class="arithmatex">\({v}[6][4]\leftarrow {v}[5][4]=10\)</span>, <span class="arithmatex">\({s}[6][4]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td>12</td>
        <td>0</td>
        <td><span class="arithmatex">\(i>\ell\)</span>: <span class="arithmatex">\({v}[6][5]\leftarrow {v}[5][5]=12\)</span>, <span class="arithmatex">\({s}[6][5]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td>15</td>
        <td>0</td>
        <td><span class="arithmatex">\(p[6]+{v}[6][0]=13+0\le {v}[5][6]=15\)</span>: <span class="arithmatex">\({v}[6][6]\leftarrow {v}[5][6]=15\)</span>, <span class="arithmatex">\({s}[6][6]\leftarrow 0\)</span></td>
        </tr>
        </table></div>

        These are the matrices ${v}$ and ${s}$ obtained during the execution of the DP algorithm:

        $$
        \begin{array}{l|rrrrrrr}
        \hline {{v}[i][\ell]} & {\ell=0} & {\ell=1} & {\ell=2} & {\ell=3} & {\ell=4} & {\ell=5} & {\ell=6} \\
        \hline {i=0} & 0 & {-\infty} & {-\infty} & {-\infty} & {-\infty} & {-\infty} & {-\infty} \\
        {i=1} & 0 & 2 & 4 & 6 & 8 & 10 & 12 \\
        {i=2} & 0 & 2 & 5 & 7 & 10 & 12 & 15 \\
        {i=3} & 0 & 2 & 5 & 7 & 10 & 12 & 15 \\
        {i=4} & 0 & 2 & 5 & 7 & 10 & 12 & 15 \\
        {i=5} & 0 & 2 & 5 & 7 & 10 & 12 & 15 \\
        {i=6} & 0 & 2 & 5 & 7 & 10 & 12 & 15 \\
        \hline
        \end{array}
        $$

        $$
        \begin{array}{l|rrrrrrr}
        \hline {{s}[i][\ell]} & {\ell=0} & {\ell=1} & {\ell=2} & {\ell=3} & {\ell=4} & {\ell=5} & {\ell=6} \\
        \hline {i=0} & 0 & 0 & 0 & 0 & 0 & 0 & 0 \\
        {i=1} & 0 & 1 & 1 & 1 & 1 & 1 & 1 \\
        {i=2} & 0 & 0 & 1 & 1 & 1 & 1 & 1 \\
        {i=3} & 0 & 0 & 0 & 0 & 0 & 0 & 0 \\
        {i=4} & 0 & 0 & 0 & 0 & 0 & 0 & 0 \\
        {i=5} & 0 & 0 & 0 & 0 & 0 & 0 & 0 \\
        {i=6} & 0 & 0 & 0 & 0 & 0 & 0 & 0 \\
        \hline
        \end{array}
        $$

        The optimal value of the RCP instance is ${v}[6][6]=15$.

    4. Using the matrix ${s}$, we can reconstruct an optimal solution as follows:

        <div class="tabella" markdown="0"><table>
        <tr>
        <th>Iteration</th>
        <th><span class="arithmatex">\(i\)</span></th>
        <th><span class="arithmatex">\(\ell\)</span></th>
        <th><span class="arithmatex">\({s}[i][\ell]\)</span></th>
        <th><span class="arithmatex">\(x[1]\)</span></th>
        <th><span class="arithmatex">\(x[2]\)</span></th>
        <th><span class="arithmatex">\(x[3]\)</span></th>
        <th><span class="arithmatex">\(x[4]\)</span></th>
        <th><span class="arithmatex">\(x[5]\)</span></th>
        <th><span class="arithmatex">\(x[6]\)</span></th>
        <th>Action</th>
        </tr>
        <tr>
        <td>1</td>
        <td>6</td>
        <td>6</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(i\leftarrow 5\)</span></td>
        </tr>
        <tr>
        <td>2</td>
        <td>5</td>
        <td>6</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(i\leftarrow 4\)</span></td>
        </tr>
        <tr>
        <td>3</td>
        <td>4</td>
        <td>6</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(i\leftarrow 3\)</span></td>
        </tr>
        <tr>
        <td>4</td>
        <td>3</td>
        <td>6</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(i\leftarrow 2\)</span></td>
        </tr>
        <tr>
        <td>5</td>
        <td>2</td>
        <td>6</td>
        <td>1</td>
        <td>0</td>
        <td class="cella-blu">1</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(\ell\leftarrow 4\)</span></td>
        </tr>
        <tr>
        <td>6</td>
        <td>2</td>
        <td>4</td>
        <td>1</td>
        <td>0</td>
        <td class="cella-blu">2</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(\ell\leftarrow 2\)</span></td>
        </tr>
        <tr>
        <td>7</td>
        <td>2</td>
        <td>2</td>
        <td>1</td>
        <td>0</td>
        <td class="cella-blu">3</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(\ell\leftarrow 0\)</span></td>
        </tr>
        </table></div>

        Thus, the vector

        $$
        (0,3,0,0,0,0)
        $$

        is an optimal solution. The optimal value is

        $$
        {v}[6][6]=15.
        $$

<a id="esercizio-25-2"></a>

!!! esercizio "Exercise 25.2: Exercise 2: Rod Cutting Problem"

    Consider the following RCP instance, where the rod has length $n=5$, and the profits associated with the possible piece lengths are:

    $$
    \begin{array}{l|rrrrr}
    \hline  & {i=1} & {i=2} & {i=3} & {i=4} & {i=5} \\
    \hline {p_i} & {1} & {4} & {6} & {8} & {9} \\
    \hline
    \end{array}
    $$

    **Questions**

    1. Show the execution of the first bottom-up DP algorithm by reporting, for each iteration, the values of the vector $v$ and the values of the vector $s$.

    2. Using the vector $s$, reconstruct an optimal solution in integer notation $(x_1,x_2,\dots,x_n)$, and report the optimal value.

    3. Show the execution of the second bottom-up DP algorithm by reporting, for each iteration, the values of the matrices $v$ and $s$.

    4. Using the matrix $s$, reconstruct an optimal solution in integer notation $(x_1,x_2,\dots,x_n)$, and report the optimal value.

??? soluzione "Solution"

    1. Step-by-step execution of the first bottom-up DP algorithm

        For each step of the DP algorithm, the table shows the values of $\ell$ and $i$, the cells $v[\ell]$ and $s[\ell]$, the current value of $\mathit{m}$, and the current value of $\mathit{t}$. The cell of $\mathit{m}$ is highlighted in <mark>red</mark> when updated; the cell of $\mathit{t}$ is highlighted in <mark>blue</mark> when updated; the cells of $v[\ell]$ and $s[\ell]$ are highlighted in <mark>blue</mark> when assigned.

        <div class="tabella" markdown="0"><table>
        <tr>
        <th><span class="arithmatex">\(\ell\)</span></th>
        <th><span class="arithmatex">\(i\)</span></th>
        <th><span class="arithmatex">\(v[\ell]\)</span></th>
        <th><span class="arithmatex">\(s[\ell]\)</span></th>
        <th><span class="arithmatex">\(\mathit{m}\)</span></th>
        <th><span class="arithmatex">\(\mathit{t}\)</span></th>
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
        <td></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(\mathit{m}\leftarrow 0\)</span>, <span class="arithmatex">\(\mathit{t}\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>1</td>
        <td>1</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td class="cella-rossa">1</td>
        <td class="cella-blu">1</td>
        <td><span class="arithmatex">\(p[1]+v[0]=1+0=1>0\)</span>: <span class="arithmatex">\(\mathit{m}\leftarrow 1\)</span>, <span class="arithmatex">\(\mathit{t}\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td class="cella-blu">1</td>
        <td class="cella-blu">1</td>
        <td>1</td>
        <td>1</td>
        <td><span class="arithmatex">\(v[1]\leftarrow \mathit{m}=1\)</span>, <span class="arithmatex">\(s[1]\leftarrow \mathit{t}=1\)</span></td>
        </tr>
        <tr>
        <td></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(\mathit{m}\leftarrow 0\)</span>, <span class="arithmatex">\(\mathit{t}\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>2</td>
        <td>1</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td class="cella-rossa">2</td>
        <td class="cella-blu">1</td>
        <td><span class="arithmatex">\(p[1]+v[1]=1+1=2>0\)</span>: <span class="arithmatex">\(\mathit{m}\leftarrow 2\)</span>, <span class="arithmatex">\(\mathit{t}\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td></td>
        <td>2</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td class="cella-rossa">4</td>
        <td class="cella-blu">2</td>
        <td><span class="arithmatex">\(p[2]+v[0]=4+0=4>2\)</span>: <span class="arithmatex">\(\mathit{m}\leftarrow 4\)</span>, <span class="arithmatex">\(\mathit{t}\leftarrow 2\)</span></td>
        </tr>
        <tr>
        <td></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td class="cella-blu">4</td>
        <td class="cella-blu">2</td>
        <td>4</td>
        <td>2</td>
        <td><span class="arithmatex">\(v[2]\leftarrow \mathit{m}=4\)</span>, <span class="arithmatex">\(s[2]\leftarrow \mathit{t}=2\)</span></td>
        </tr>
        <tr>
        <td></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(\mathit{m}\leftarrow 0\)</span>, <span class="arithmatex">\(\mathit{t}\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>3</td>
        <td>1</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td class="cella-rossa">5</td>
        <td class="cella-blu">1</td>
        <td><span class="arithmatex">\(p[1]+v[2]=1+4=5>0\)</span>: <span class="arithmatex">\(\mathit{m}\leftarrow 5\)</span>, <span class="arithmatex">\(\mathit{t}\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td></td>
        <td>2</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>5</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[2]+v[1]=4+1=5=\mathit{m}\)</span>: no update</td>
        </tr>
        <tr>
        <td></td>
        <td>3</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td class="cella-rossa">6</td>
        <td class="cella-blu">3</td>
        <td><span class="arithmatex">\(p[3]+v[0]=6+0=6>5\)</span>: <span class="arithmatex">\(\mathit{m}\leftarrow 6\)</span>, <span class="arithmatex">\(\mathit{t}\leftarrow 3\)</span></td>
        </tr>
        <tr>
        <td></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td class="cella-blu">6</td>
        <td class="cella-blu">3</td>
        <td>6</td>
        <td>3</td>
        <td><span class="arithmatex">\(v[3]\leftarrow \mathit{m}=6\)</span>, <span class="arithmatex">\(s[3]\leftarrow \mathit{t}=3\)</span></td>
        </tr>
        <tr>
        <td></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(\mathit{m}\leftarrow 0\)</span>, <span class="arithmatex">\(\mathit{t}\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>4</td>
        <td>1</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td class="cella-rossa">7</td>
        <td class="cella-blu">1</td>
        <td><span class="arithmatex">\(p[1]+v[3]=1+6=7>0\)</span>: <span class="arithmatex">\(\mathit{m}\leftarrow 7\)</span>, <span class="arithmatex">\(\mathit{t}\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td></td>
        <td>2</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td class="cella-rossa">8</td>
        <td class="cella-blu">2</td>
        <td><span class="arithmatex">\(p[2]+v[2]=4+4=8>7\)</span>: <span class="arithmatex">\(\mathit{m}\leftarrow 8\)</span>, <span class="arithmatex">\(\mathit{t}\leftarrow 2\)</span></td>
        </tr>
        <tr>
        <td></td>
        <td>3</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>8</td>
        <td>2</td>
        <td><span class="arithmatex">\(p[3]+v[1]=6+1=7<8\)</span>: no update</td>
        </tr>
        <tr>
        <td></td>
        <td>4</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>8</td>
        <td>2</td>
        <td><span class="arithmatex">\(p[4]+v[0]=8+0=8=\mathit{m}\)</span>: no update</td>
        </tr>
        <tr>
        <td></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td class="cella-blu">8</td>
        <td class="cella-blu">2</td>
        <td>8</td>
        <td>2</td>
        <td><span class="arithmatex">\(v[4]\leftarrow \mathit{m}=8\)</span>, <span class="arithmatex">\(s[4]\leftarrow \mathit{t}=2\)</span></td>
        </tr>
        <tr>
        <td></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(\mathit{m}\leftarrow 0\)</span>, <span class="arithmatex">\(\mathit{t}\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>5</td>
        <td>1</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td class="cella-rossa">9</td>
        <td class="cella-blu">1</td>
        <td><span class="arithmatex">\(p[1]+v[4]=1+8=9>0\)</span>: <span class="arithmatex">\(\mathit{m}\leftarrow 9\)</span>, <span class="arithmatex">\(\mathit{t}\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td></td>
        <td>2</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td class="cella-rossa">10</td>
        <td class="cella-blu">2</td>
        <td><span class="arithmatex">\(p[2]+v[3]=4+6=10>9\)</span>: <span class="arithmatex">\(\mathit{m}\leftarrow 10\)</span>, <span class="arithmatex">\(\mathit{t}\leftarrow 2\)</span></td>
        </tr>
        <tr>
        <td></td>
        <td>3</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>10</td>
        <td>2</td>
        <td><span class="arithmatex">\(p[3]+v[2]=6+4=10=\mathit{m}\)</span>: no update</td>
        </tr>
        <tr>
        <td></td>
        <td>4</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>10</td>
        <td>2</td>
        <td><span class="arithmatex">\(p[4]+v[1]=8+1=9<10\)</span>: no update</td>
        </tr>
        <tr>
        <td></td>
        <td>5</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>10</td>
        <td>2</td>
        <td><span class="arithmatex">\(p[5]+v[0]=9+0=9<10\)</span>: no update</td>
        </tr>
        <tr>
        <td></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td class="cella-blu">10</td>
        <td class="cella-blu">2</td>
        <td>10</td>
        <td>2</td>
        <td><span class="arithmatex">\(v[5]\leftarrow \mathit{m}=10\)</span>, <span class="arithmatex">\(s[5]\leftarrow \mathit{t}=2\)</span></td>
        </tr>
        </table></div>

        This is the vector $v$ after the execution of the DP algorithm:

        $$
        \begin{array}{ccccccc}
        \hline  & {\ell=0} & {\ell=1} & {\ell=2} & {\ell=3} & {\ell=4} & {\ell=5} \\
        \hline {v[\ell]} & 0 & 1 & 4 & 6 & 8 & 10 \\
        \hline
        \end{array}
        $$

        This is the vector $s$ after the execution of the DP algorithm:

        $$
        \begin{array}{cccccc}
        \hline  & {\ell=1} & {\ell=2} & {\ell=3} & {\ell=4} & {\ell=5} \\
        \hline {s[\ell]} & 1 & 2 & 3 & 2 & 2 \\
        \hline
        \end{array}
        $$

    2. We have the following vector $s$:

        $$
        \begin{array}{l|rrrrr}
        \hline  & {\ell=1} & {\ell=2} & {\ell=3} & {\ell=4} & {\ell=5} \\
        \hline {s[\ell]} & 1 & 2 & 3 & 2 & 2 \\
        \hline
        \end{array}
        $$

        We can reconstruct an optimal solution for a rod of length $n=5$ as follows:

        <div class="tabella" markdown="0"><table>
        <tr>
        <th>Iteration</th>
        <th><span class="arithmatex">\(i\)</span></th>
        <th><span class="arithmatex">\(s[i]\)</span></th>
        <th><span class="arithmatex">\(x[1]\)</span></th>
        <th><span class="arithmatex">\(x[2]\)</span></th>
        <th><span class="arithmatex">\(x[3]\)</span></th>
        <th><span class="arithmatex">\(x[4]\)</span></th>
        <th><span class="arithmatex">\(x[5]\)</span></th>
        <th>Update of <span class="arithmatex">\(i\)</span></th>
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
        <td><span class="arithmatex">\(i=5\)</span></td>
        </tr>
        <tr>
        <td>1</td>
        <td>5</td>
        <td>2</td>
        <td>0</td>
        <td class="cella-blu">1</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(i=5-2=3\)</span></td>
        </tr>
        <tr>
        <td>2</td>
        <td>3</td>
        <td>3</td>
        <td>0</td>
        <td>1</td>
        <td class="cella-blu">1</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(i=3-3=0\)</span></td>
        </tr>
        </table></div>

        Thus, the vector

        $$
        (0,1,1,0,0)
        $$

        is an optimal solution. The optimal value is

        $$
        v[5]=10.
        $$

    3. Step-by-step execution of the second bottom-up DP algorithm

        For each step of the DP algorithm, the table shows the values of $i$ and $\ell$, the cells ${v}[i][\ell]$ and ${s}[i][\ell]$, and the operation performed. The cells are computed for increasing values of $i$ and, for each fixed value of $i$, for increasing values of $\ell$.

        <div class="tabella" markdown="0"><table>
        <tr>
        <th><span class="arithmatex">\(i\)</span></th>
        <th><span class="arithmatex">\(\ell\)</span></th>
        <th><span class="arithmatex">\({v}[i][\ell]\)</span></th>
        <th><span class="arithmatex">\({s}[i][\ell]\)</span></th>
        <th>Action</th>
        </tr>
        <tr>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\({v}[0][0]\leftarrow 0\)</span>, <span class="arithmatex">\({s}[0][0]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(-\infty\)</span></td>
        <td>0</td>
        <td><span class="arithmatex">\({v}[0][1]\leftarrow -\infty\)</span>, <span class="arithmatex">\({s}[0][1]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(-\infty\)</span></td>
        <td>0</td>
        <td><span class="arithmatex">\({v}[0][2]\leftarrow -\infty\)</span>, <span class="arithmatex">\({s}[0][2]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(-\infty\)</span></td>
        <td>0</td>
        <td><span class="arithmatex">\({v}[0][3]\leftarrow -\infty\)</span>, <span class="arithmatex">\({s}[0][3]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(-\infty\)</span></td>
        <td>0</td>
        <td><span class="arithmatex">\({v}[0][4]\leftarrow -\infty\)</span>, <span class="arithmatex">\({s}[0][4]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(-\infty\)</span></td>
        <td>0</td>
        <td><span class="arithmatex">\({v}[0][5]\leftarrow -\infty\)</span>, <span class="arithmatex">\({s}[0][5]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(i>\ell\)</span>: <span class="arithmatex">\({v}[1][0]\leftarrow {v}[0][0]=0\)</span>, <span class="arithmatex">\({s}[1][0]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td>1</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[1]+{v}[1][0]=1+0>{v}[0][1]=-\infty\)</span>: <span class="arithmatex">\({v}[1][1]\leftarrow 1\)</span>, <span class="arithmatex">\({s}[1][1]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td>2</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[1]+{v}[1][1]=1+1>{v}[0][2]=-\infty\)</span>: <span class="arithmatex">\({v}[1][2]\leftarrow 2\)</span>, <span class="arithmatex">\({s}[1][2]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td>3</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[1]+{v}[1][2]=1+2>{v}[0][3]=-\infty\)</span>: <span class="arithmatex">\({v}[1][3]\leftarrow 3\)</span>, <span class="arithmatex">\({s}[1][3]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td>4</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[1]+{v}[1][3]=1+3>{v}[0][4]=-\infty\)</span>: <span class="arithmatex">\({v}[1][4]\leftarrow 4\)</span>, <span class="arithmatex">\({s}[1][4]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td>5</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[1]+{v}[1][4]=1+4>{v}[0][5]=-\infty\)</span>: <span class="arithmatex">\({v}[1][5]\leftarrow 5\)</span>, <span class="arithmatex">\({s}[1][5]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(i>\ell\)</span>: <span class="arithmatex">\({v}[2][0]\leftarrow {v}[1][0]=0\)</span>, <span class="arithmatex">\({s}[2][0]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td>1</td>
        <td>0</td>
        <td><span class="arithmatex">\(i>\ell\)</span>: <span class="arithmatex">\({v}[2][1]\leftarrow {v}[1][1]=1\)</span>, <span class="arithmatex">\({s}[2][1]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td>4</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[2]+{v}[2][0]=4+0>{v}[1][2]=2\)</span>: <span class="arithmatex">\({v}[2][2]\leftarrow 4\)</span>, <span class="arithmatex">\({s}[2][2]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td>5</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[2]+{v}[2][1]=4+1>{v}[1][3]=3\)</span>: <span class="arithmatex">\({v}[2][3]\leftarrow 5\)</span>, <span class="arithmatex">\({s}[2][3]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td>8</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[2]+{v}[2][2]=4+4>{v}[1][4]=4\)</span>: <span class="arithmatex">\({v}[2][4]\leftarrow 8\)</span>, <span class="arithmatex">\({s}[2][4]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td>9</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[2]+{v}[2][3]=4+5>{v}[1][5]=5\)</span>: <span class="arithmatex">\({v}[2][5]\leftarrow 9\)</span>, <span class="arithmatex">\({s}[2][5]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(i>\ell\)</span>: <span class="arithmatex">\({v}[3][0]\leftarrow {v}[2][0]=0\)</span>, <span class="arithmatex">\({s}[3][0]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td>1</td>
        <td>0</td>
        <td><span class="arithmatex">\(i>\ell\)</span>: <span class="arithmatex">\({v}[3][1]\leftarrow {v}[2][1]=1\)</span>, <span class="arithmatex">\({s}[3][1]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td>4</td>
        <td>0</td>
        <td><span class="arithmatex">\(i>\ell\)</span>: <span class="arithmatex">\({v}[3][2]\leftarrow {v}[2][2]=4\)</span>, <span class="arithmatex">\({s}[3][2]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td>6</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[3]+{v}[3][0]=6+0>{v}[2][3]=5\)</span>: <span class="arithmatex">\({v}[3][3]\leftarrow 6\)</span>, <span class="arithmatex">\({s}[3][3]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td>8</td>
        <td>0</td>
        <td><span class="arithmatex">\(p[3]+{v}[3][1]=6+1\le {v}[2][4]=8\)</span>: <span class="arithmatex">\({v}[3][4]\leftarrow {v}[2][4]=8\)</span>, <span class="arithmatex">\({s}[3][4]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td>10</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[3]+{v}[3][2]=6+4>{v}[2][5]=9\)</span>: <span class="arithmatex">\({v}[3][5]\leftarrow 10\)</span>, <span class="arithmatex">\({s}[3][5]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(i>\ell\)</span>: <span class="arithmatex">\({v}[4][0]\leftarrow {v}[3][0]=0\)</span>, <span class="arithmatex">\({s}[4][0]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td>1</td>
        <td>0</td>
        <td><span class="arithmatex">\(i>\ell\)</span>: <span class="arithmatex">\({v}[4][1]\leftarrow {v}[3][1]=1\)</span>, <span class="arithmatex">\({s}[4][1]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td>4</td>
        <td>0</td>
        <td><span class="arithmatex">\(i>\ell\)</span>: <span class="arithmatex">\({v}[4][2]\leftarrow {v}[3][2]=4\)</span>, <span class="arithmatex">\({s}[4][2]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td>6</td>
        <td>0</td>
        <td><span class="arithmatex">\(i>\ell\)</span>: <span class="arithmatex">\({v}[4][3]\leftarrow {v}[3][3]=6\)</span>, <span class="arithmatex">\({s}[4][3]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td>8</td>
        <td>0</td>
        <td><span class="arithmatex">\(p[4]+{v}[4][0]=8+0\le {v}[3][4]=8\)</span>: <span class="arithmatex">\({v}[4][4]\leftarrow {v}[3][4]=8\)</span>, <span class="arithmatex">\({s}[4][4]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td>10</td>
        <td>0</td>
        <td><span class="arithmatex">\(p[4]+{v}[4][1]=8+1\le {v}[3][5]=10\)</span>: <span class="arithmatex">\({v}[4][5]\leftarrow {v}[3][5]=10\)</span>, <span class="arithmatex">\({s}[4][5]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(i>\ell\)</span>: <span class="arithmatex">\({v}[5][0]\leftarrow {v}[4][0]=0\)</span>, <span class="arithmatex">\({s}[5][0]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td>1</td>
        <td>0</td>
        <td><span class="arithmatex">\(i>\ell\)</span>: <span class="arithmatex">\({v}[5][1]\leftarrow {v}[4][1]=1\)</span>, <span class="arithmatex">\({s}[5][1]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td>4</td>
        <td>0</td>
        <td><span class="arithmatex">\(i>\ell\)</span>: <span class="arithmatex">\({v}[5][2]\leftarrow {v}[4][2]=4\)</span>, <span class="arithmatex">\({s}[5][2]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td>6</td>
        <td>0</td>
        <td><span class="arithmatex">\(i>\ell\)</span>: <span class="arithmatex">\({v}[5][3]\leftarrow {v}[4][3]=6\)</span>, <span class="arithmatex">\({s}[5][3]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td>8</td>
        <td>0</td>
        <td><span class="arithmatex">\(i>\ell\)</span>: <span class="arithmatex">\({v}[5][4]\leftarrow {v}[4][4]=8\)</span>, <span class="arithmatex">\({s}[5][4]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td>10</td>
        <td>0</td>
        <td><span class="arithmatex">\(p[5]+{v}[5][0]=9+0\le {v}[4][5]=10\)</span>: <span class="arithmatex">\({v}[5][5]\leftarrow {v}[4][5]=10\)</span>, <span class="arithmatex">\({s}[5][5]\leftarrow 0\)</span></td>
        </tr>
        </table></div>

        These are the matrices ${v}$ and ${s}$ obtained during the execution of the DP algorithm:

        $$
        \begin{array}{l|rrrrrr}
        \hline {{v}[i][\ell]} & {\ell=0} & {\ell=1} & {\ell=2} & {\ell=3} & {\ell=4} & {\ell=5} \\
        \hline {i=0} & 0 & {-\infty} & {-\infty} & {-\infty} & {-\infty} & {-\infty} \\
        {i=1} & 0 & 1 & 2 & 3 & 4 & 5 \\
        {i=2} & 0 & 1 & 4 & 5 & 8 & 9 \\
        {i=3} & 0 & 1 & 4 & 6 & 8 & 10 \\
        {i=4} & 0 & 1 & 4 & 6 & 8 & 10 \\
        {i=5} & 0 & 1 & 4 & 6 & 8 & 10 \\
        \hline
        \end{array}
        $$

        $$
        \begin{array}{l|rrrrrr}
        \hline {{s}[i][\ell]} & {\ell=0} & {\ell=1} & {\ell=2} & {\ell=3} & {\ell=4} & {\ell=5} \\
        \hline {i=0} & 0 & 0 & 0 & 0 & 0 & 0 \\
        {i=1} & 0 & 1 & 1 & 1 & 1 & 1 \\
        {i=2} & 0 & 0 & 1 & 1 & 1 & 1 \\
        {i=3} & 0 & 0 & 0 & 1 & 0 & 1 \\
        {i=4} & 0 & 0 & 0 & 0 & 0 & 0 \\
        {i=5} & 0 & 0 & 0 & 0 & 0 & 0 \\
        \hline
        \end{array}
        $$

        The optimal value of the RCP instance is ${v}[5][5]=10$.

    4. Using the matrix ${s}$, we can reconstruct an optimal solution as follows:

        <div class="tabella" markdown="0"><table>
        <tr>
        <th>Iteration</th>
        <th><span class="arithmatex">\(i\)</span></th>
        <th><span class="arithmatex">\(\ell\)</span></th>
        <th><span class="arithmatex">\({s}[i][\ell]\)</span></th>
        <th><span class="arithmatex">\(x[1]\)</span></th>
        <th><span class="arithmatex">\(x[2]\)</span></th>
        <th><span class="arithmatex">\(x[3]\)</span></th>
        <th><span class="arithmatex">\(x[4]\)</span></th>
        <th><span class="arithmatex">\(x[5]\)</span></th>
        <th>Action</th>
        </tr>
        <tr>
        <td>1</td>
        <td>5</td>
        <td>5</td>
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
        <td>5</td>
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
        <td>5</td>
        <td>1</td>
        <td>0</td>
        <td>0</td>
        <td class="cella-blu">1</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(\ell\leftarrow 2\)</span></td>
        </tr>
        <tr>
        <td>4</td>
        <td>3</td>
        <td>2</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>1</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(i\leftarrow 2\)</span></td>
        </tr>
        <tr>
        <td>5</td>
        <td>2</td>
        <td>2</td>
        <td>1</td>
        <td>0</td>
        <td class="cella-blu">1</td>
        <td>1</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(\ell\leftarrow 0\)</span></td>
        </tr>
        </table></div>

        Thus, the vector

        $$
        (0,1,1,0,0)
        $$

        is an optimal solution. The optimal value is

        $$
        {v}[5][5]=10.
        $$

<a id="esercizio-25-3"></a>

!!! esercizio "Exercise 25.3: Exercise 3: Rod Cutting Problem"

    Consider the following RCP instance, where the rod has length $n=5$, and the profits associated with the possible piece lengths are:

    $$
    \begin{array}{l|rrrrr}
    \hline  & {i=1} & {i=2} & {i=3} & {i=4} & {i=5} \\
    \hline {p_i} & {3} & {5} & {8} & {9} & {10} \\
    \hline
    \end{array}
    $$

    **Questions**

    1. Show the execution of the first bottom-up DP algorithm by reporting, for each iteration, the values of the vector $v$ and the values of the vector $s$.

    2. Using the vector $s$, reconstruct an optimal solution in integer notation $(x_1,x_2,\dots,x_n)$, and report the optimal value.

    3. Show the execution of the second bottom-up DP algorithm by reporting, for each iteration, the values of the matrices $v$ and $s$.

    4. Using the matrix $s$, reconstruct an optimal solution in integer notation $(x_1,x_2,\dots,x_n)$, and report the optimal value.

??? soluzione "Solution"

    1. Step-by-step execution of the first bottom-up DP algorithm

        For each step of the DP algorithm, the table shows the values of $\ell$ and $i$, the cells $v[\ell]$ and $s[\ell]$, the current value of $\mathit{m}$, and the current value of $\mathit{t}$. The cell of $\mathit{m}$ is highlighted in <mark>red</mark> when updated; the cell of $\mathit{t}$ is highlighted in <mark>blue</mark> when updated; the cells of $v[\ell]$ and $s[\ell]$ are highlighted in <mark>blue</mark> when assigned.

        <div class="tabella" markdown="0"><table>
        <tr>
        <th><span class="arithmatex">\(\ell\)</span></th>
        <th><span class="arithmatex">\(i\)</span></th>
        <th><span class="arithmatex">\(v[\ell]\)</span></th>
        <th><span class="arithmatex">\(s[\ell]\)</span></th>
        <th><span class="arithmatex">\(\mathit{m}\)</span></th>
        <th><span class="arithmatex">\(\mathit{t}\)</span></th>
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
        <td></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(\mathit{m}\leftarrow 0\)</span>, <span class="arithmatex">\(\mathit{t}\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>1</td>
        <td>1</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td class="cella-rossa">3</td>
        <td class="cella-blu">1</td>
        <td><span class="arithmatex">\(p[1]+v[0]=3+0=3>0\)</span>: <span class="arithmatex">\(\mathit{m}\leftarrow 3\)</span>, <span class="arithmatex">\(\mathit{t}\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td class="cella-blu">3</td>
        <td class="cella-blu">1</td>
        <td>3</td>
        <td>1</td>
        <td><span class="arithmatex">\(v[1]\leftarrow \mathit{m}=3\)</span>, <span class="arithmatex">\(s[1]\leftarrow \mathit{t}=1\)</span></td>
        </tr>
        <tr>
        <td></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(\mathit{m}\leftarrow 0\)</span>, <span class="arithmatex">\(\mathit{t}\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>2</td>
        <td>1</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td class="cella-rossa">6</td>
        <td class="cella-blu">1</td>
        <td><span class="arithmatex">\(p[1]+v[1]=3+3=6>0\)</span>: <span class="arithmatex">\(\mathit{m}\leftarrow 6\)</span>, <span class="arithmatex">\(\mathit{t}\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td></td>
        <td>2</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>6</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[2]+v[0]=5+0=5<6\)</span>: no update</td>
        </tr>
        <tr>
        <td></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td class="cella-blu">6</td>
        <td class="cella-blu">1</td>
        <td>6</td>
        <td>1</td>
        <td><span class="arithmatex">\(v[2]\leftarrow \mathit{m}=6\)</span>, <span class="arithmatex">\(s[2]\leftarrow \mathit{t}=1\)</span></td>
        </tr>
        <tr>
        <td></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(\mathit{m}\leftarrow 0\)</span>, <span class="arithmatex">\(\mathit{t}\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>3</td>
        <td>1</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td class="cella-rossa">9</td>
        <td class="cella-blu">1</td>
        <td><span class="arithmatex">\(p[1]+v[2]=3+6=9>0\)</span>: <span class="arithmatex">\(\mathit{m}\leftarrow 9\)</span>, <span class="arithmatex">\(\mathit{t}\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td></td>
        <td>2</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>9</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[2]+v[1]=5+3=8<9\)</span>: no update</td>
        </tr>
        <tr>
        <td></td>
        <td>3</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>9</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[3]+v[0]=8+0=8<9\)</span>: no update</td>
        </tr>
        <tr>
        <td></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td class="cella-blu">9</td>
        <td class="cella-blu">1</td>
        <td>9</td>
        <td>1</td>
        <td><span class="arithmatex">\(v[3]\leftarrow \mathit{m}=9\)</span>, <span class="arithmatex">\(s[3]\leftarrow \mathit{t}=1\)</span></td>
        </tr>
        <tr>
        <td></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(\mathit{m}\leftarrow 0\)</span>, <span class="arithmatex">\(\mathit{t}\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>4</td>
        <td>1</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td class="cella-rossa">12</td>
        <td class="cella-blu">1</td>
        <td><span class="arithmatex">\(p[1]+v[3]=3+9=12>0\)</span>: <span class="arithmatex">\(\mathit{m}\leftarrow 12\)</span>, <span class="arithmatex">\(\mathit{t}\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td></td>
        <td>2</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>12</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[2]+v[2]=5+6=11<12\)</span>: no update</td>
        </tr>
        <tr>
        <td></td>
        <td>3</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>12</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[3]+v[1]=8+3=11<12\)</span>: no update</td>
        </tr>
        <tr>
        <td></td>
        <td>4</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>12</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[4]+v[0]=9+0=9<12\)</span>: no update</td>
        </tr>
        <tr>
        <td></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td class="cella-blu">12</td>
        <td class="cella-blu">1</td>
        <td>12</td>
        <td>1</td>
        <td><span class="arithmatex">\(v[4]\leftarrow \mathit{m}=12\)</span>, <span class="arithmatex">\(s[4]\leftarrow \mathit{t}=1\)</span></td>
        </tr>
        <tr>
        <td></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(\mathit{m}\leftarrow 0\)</span>, <span class="arithmatex">\(\mathit{t}\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>5</td>
        <td>1</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td class="cella-rossa">15</td>
        <td class="cella-blu">1</td>
        <td><span class="arithmatex">\(p[1]+v[4]=3+12=15>0\)</span>: <span class="arithmatex">\(\mathit{m}\leftarrow 15\)</span>, <span class="arithmatex">\(\mathit{t}\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td></td>
        <td>2</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>15</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[2]+v[3]=5+9=14<15\)</span>: no update</td>
        </tr>
        <tr>
        <td></td>
        <td>3</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>15</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[3]+v[2]=8+6=14<15\)</span>: no update</td>
        </tr>
        <tr>
        <td></td>
        <td>4</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>15</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[4]+v[1]=9+3=12<15\)</span>: no update</td>
        </tr>
        <tr>
        <td></td>
        <td>5</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>15</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[5]+v[0]=10+0=10<15\)</span>: no update</td>
        </tr>
        <tr>
        <td></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td class="cella-blu">15</td>
        <td class="cella-blu">1</td>
        <td>15</td>
        <td>1</td>
        <td><span class="arithmatex">\(v[5]\leftarrow \mathit{m}=15\)</span>, <span class="arithmatex">\(s[5]\leftarrow \mathit{t}=1\)</span></td>
        </tr>
        </table></div>

        This is the vector $v$ after the execution of the DP algorithm:

        $$
        \begin{array}{ccccccc}
        \hline  & {\ell=0} & {\ell=1} & {\ell=2} & {\ell=3} & {\ell=4} & {\ell=5} \\
        \hline {v[\ell]} & 0 & 3 & 6 & 9 & 12 & 15 \\
        \hline
        \end{array}
        $$

        This is the vector $s$ after the execution of the DP algorithm:

        $$
        \begin{array}{cccccc}
        \hline  & {\ell=1} & {\ell=2} & {\ell=3} & {\ell=4} & {\ell=5} \\
        \hline {s[\ell]} & 1 & 1 & 1 & 1 & 1 \\
        \hline
        \end{array}
        $$

    2. We have the following vector $s$:

        $$
        \begin{array}{l|rrrrr}
        \hline  & {\ell=1} & {\ell=2} & {\ell=3} & {\ell=4} & {\ell=5} \\
        \hline {s[\ell]} & 1 & 1 & 1 & 1 & 1 \\
        \hline
        \end{array}
        $$

        We can reconstruct an optimal solution for a rod of length $n=5$ as follows:

        <div class="tabella" markdown="0"><table>
        <tr>
        <th>Iteration</th>
        <th><span class="arithmatex">\(i\)</span></th>
        <th><span class="arithmatex">\(s[i]\)</span></th>
        <th><span class="arithmatex">\(x[1]\)</span></th>
        <th><span class="arithmatex">\(x[2]\)</span></th>
        <th><span class="arithmatex">\(x[3]\)</span></th>
        <th><span class="arithmatex">\(x[4]\)</span></th>
        <th><span class="arithmatex">\(x[5]\)</span></th>
        <th>Update of <span class="arithmatex">\(i\)</span></th>
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
        <td><span class="arithmatex">\(i=5\)</span></td>
        </tr>
        <tr>
        <td>1</td>
        <td>5</td>
        <td>1</td>
        <td class="cella-blu">1</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(i=5-1=4\)</span></td>
        </tr>
        <tr>
        <td>2</td>
        <td>4</td>
        <td>1</td>
        <td class="cella-blu">2</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(i=4-1=3\)</span></td>
        </tr>
        <tr>
        <td>3</td>
        <td>3</td>
        <td>1</td>
        <td class="cella-blu">3</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(i=3-1=2\)</span></td>
        </tr>
        <tr>
        <td>4</td>
        <td>2</td>
        <td>1</td>
        <td class="cella-blu">4</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(i=2-1=1\)</span></td>
        </tr>
        <tr>
        <td>5</td>
        <td>1</td>
        <td>1</td>
        <td class="cella-blu">5</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(i=1-1=0\)</span></td>
        </tr>
        </table></div>

        Thus, the vector

        $$
        (5,0,0,0,0)
        $$

        is an optimal solution. The optimal value is

        $$
        v[5]=15.
        $$

    3. Step-by-step execution of the second bottom-up DP algorithm

        For each step of the DP algorithm, the table shows the values of $i$ and $\ell$, the cells ${v}[i][\ell]$ and ${s}[i][\ell]$, and the operation performed. The cells are computed for increasing values of $i$ and, for each fixed value of $i$, for increasing values of $\ell$.

        <div class="tabella" markdown="0"><table>
        <tr>
        <th><span class="arithmatex">\(i\)</span></th>
        <th><span class="arithmatex">\(\ell\)</span></th>
        <th><span class="arithmatex">\({v}[i][\ell]\)</span></th>
        <th><span class="arithmatex">\({s}[i][\ell]\)</span></th>
        <th>Action</th>
        </tr>
        <tr>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\({v}[0][0]\leftarrow 0\)</span>, <span class="arithmatex">\({s}[0][0]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(-\infty\)</span></td>
        <td>0</td>
        <td><span class="arithmatex">\({v}[0][1]\leftarrow -\infty\)</span>, <span class="arithmatex">\({s}[0][1]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(-\infty\)</span></td>
        <td>0</td>
        <td><span class="arithmatex">\({v}[0][2]\leftarrow -\infty\)</span>, <span class="arithmatex">\({s}[0][2]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(-\infty\)</span></td>
        <td>0</td>
        <td><span class="arithmatex">\({v}[0][3]\leftarrow -\infty\)</span>, <span class="arithmatex">\({s}[0][3]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(-\infty\)</span></td>
        <td>0</td>
        <td><span class="arithmatex">\({v}[0][4]\leftarrow -\infty\)</span>, <span class="arithmatex">\({s}[0][4]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(-\infty\)</span></td>
        <td>0</td>
        <td><span class="arithmatex">\({v}[0][5]\leftarrow -\infty\)</span>, <span class="arithmatex">\({s}[0][5]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(i>\ell\)</span>: <span class="arithmatex">\({v}[1][0]\leftarrow {v}[0][0]=0\)</span>, <span class="arithmatex">\({s}[1][0]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td>3</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[1]+{v}[1][0]=3+0>{v}[0][1]=-\infty\)</span>: <span class="arithmatex">\({v}[1][1]\leftarrow 3\)</span>, <span class="arithmatex">\({s}[1][1]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td>6</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[1]+{v}[1][1]=3+3>{v}[0][2]=-\infty\)</span>: <span class="arithmatex">\({v}[1][2]\leftarrow 6\)</span>, <span class="arithmatex">\({s}[1][2]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td>9</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[1]+{v}[1][2]=3+6>{v}[0][3]=-\infty\)</span>: <span class="arithmatex">\({v}[1][3]\leftarrow 9\)</span>, <span class="arithmatex">\({s}[1][3]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td>12</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[1]+{v}[1][3]=3+9>{v}[0][4]=-\infty\)</span>: <span class="arithmatex">\({v}[1][4]\leftarrow 12\)</span>, <span class="arithmatex">\({s}[1][4]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td>15</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[1]+{v}[1][4]=3+12>{v}[0][5]=-\infty\)</span>: <span class="arithmatex">\({v}[1][5]\leftarrow 15\)</span>, <span class="arithmatex">\({s}[1][5]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(i>\ell\)</span>: <span class="arithmatex">\({v}[2][0]\leftarrow {v}[1][0]=0\)</span>, <span class="arithmatex">\({s}[2][0]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td>3</td>
        <td>0</td>
        <td><span class="arithmatex">\(i>\ell\)</span>: <span class="arithmatex">\({v}[2][1]\leftarrow {v}[1][1]=3\)</span>, <span class="arithmatex">\({s}[2][1]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td>6</td>
        <td>0</td>
        <td><span class="arithmatex">\(p[2]+{v}[2][0]=5+0\le {v}[1][2]=6\)</span>: <span class="arithmatex">\({v}[2][2]\leftarrow {v}[1][2]=6\)</span>, <span class="arithmatex">\({s}[2][2]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td>9</td>
        <td>0</td>
        <td><span class="arithmatex">\(p[2]+{v}[2][1]=5+3\le {v}[1][3]=9\)</span>: <span class="arithmatex">\({v}[2][3]\leftarrow {v}[1][3]=9\)</span>, <span class="arithmatex">\({s}[2][3]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td>12</td>
        <td>0</td>
        <td><span class="arithmatex">\(p[2]+{v}[2][2]=5+6\le {v}[1][4]=12\)</span>: <span class="arithmatex">\({v}[2][4]\leftarrow {v}[1][4]=12\)</span>, <span class="arithmatex">\({s}[2][4]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td>15</td>
        <td>0</td>
        <td><span class="arithmatex">\(p[2]+{v}[2][3]=5+9\le {v}[1][5]=15\)</span>: <span class="arithmatex">\({v}[2][5]\leftarrow {v}[1][5]=15\)</span>, <span class="arithmatex">\({s}[2][5]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(i>\ell\)</span>: <span class="arithmatex">\({v}[3][0]\leftarrow {v}[2][0]=0\)</span>, <span class="arithmatex">\({s}[3][0]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td>3</td>
        <td>0</td>
        <td><span class="arithmatex">\(i>\ell\)</span>: <span class="arithmatex">\({v}[3][1]\leftarrow {v}[2][1]=3\)</span>, <span class="arithmatex">\({s}[3][1]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td>6</td>
        <td>0</td>
        <td><span class="arithmatex">\(i>\ell\)</span>: <span class="arithmatex">\({v}[3][2]\leftarrow {v}[2][2]=6\)</span>, <span class="arithmatex">\({s}[3][2]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td>9</td>
        <td>0</td>
        <td><span class="arithmatex">\(p[3]+{v}[3][0]=8+0\le {v}[2][3]=9\)</span>: <span class="arithmatex">\({v}[3][3]\leftarrow {v}[2][3]=9\)</span>, <span class="arithmatex">\({s}[3][3]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td>12</td>
        <td>0</td>
        <td><span class="arithmatex">\(p[3]+{v}[3][1]=8+3\le {v}[2][4]=12\)</span>: <span class="arithmatex">\({v}[3][4]\leftarrow {v}[2][4]=12\)</span>, <span class="arithmatex">\({s}[3][4]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td>15</td>
        <td>0</td>
        <td><span class="arithmatex">\(p[3]+{v}[3][2]=8+6\le {v}[2][5]=15\)</span>: <span class="arithmatex">\({v}[3][5]\leftarrow {v}[2][5]=15\)</span>, <span class="arithmatex">\({s}[3][5]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(i>\ell\)</span>: <span class="arithmatex">\({v}[4][0]\leftarrow {v}[3][0]=0\)</span>, <span class="arithmatex">\({s}[4][0]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td>3</td>
        <td>0</td>
        <td><span class="arithmatex">\(i>\ell\)</span>: <span class="arithmatex">\({v}[4][1]\leftarrow {v}[3][1]=3\)</span>, <span class="arithmatex">\({s}[4][1]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td>6</td>
        <td>0</td>
        <td><span class="arithmatex">\(i>\ell\)</span>: <span class="arithmatex">\({v}[4][2]\leftarrow {v}[3][2]=6\)</span>, <span class="arithmatex">\({s}[4][2]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td>9</td>
        <td>0</td>
        <td><span class="arithmatex">\(i>\ell\)</span>: <span class="arithmatex">\({v}[4][3]\leftarrow {v}[3][3]=9\)</span>, <span class="arithmatex">\({s}[4][3]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td>12</td>
        <td>0</td>
        <td><span class="arithmatex">\(p[4]+{v}[4][0]=9+0\le {v}[3][4]=12\)</span>: <span class="arithmatex">\({v}[4][4]\leftarrow {v}[3][4]=12\)</span>, <span class="arithmatex">\({s}[4][4]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td>15</td>
        <td>0</td>
        <td><span class="arithmatex">\(p[4]+{v}[4][1]=9+3\le {v}[3][5]=15\)</span>: <span class="arithmatex">\({v}[4][5]\leftarrow {v}[3][5]=15\)</span>, <span class="arithmatex">\({s}[4][5]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(i>\ell\)</span>: <span class="arithmatex">\({v}[5][0]\leftarrow {v}[4][0]=0\)</span>, <span class="arithmatex">\({s}[5][0]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td>3</td>
        <td>0</td>
        <td><span class="arithmatex">\(i>\ell\)</span>: <span class="arithmatex">\({v}[5][1]\leftarrow {v}[4][1]=3\)</span>, <span class="arithmatex">\({s}[5][1]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td>6</td>
        <td>0</td>
        <td><span class="arithmatex">\(i>\ell\)</span>: <span class="arithmatex">\({v}[5][2]\leftarrow {v}[4][2]=6\)</span>, <span class="arithmatex">\({s}[5][2]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td>9</td>
        <td>0</td>
        <td><span class="arithmatex">\(i>\ell\)</span>: <span class="arithmatex">\({v}[5][3]\leftarrow {v}[4][3]=9\)</span>, <span class="arithmatex">\({s}[5][3]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td>12</td>
        <td>0</td>
        <td><span class="arithmatex">\(i>\ell\)</span>: <span class="arithmatex">\({v}[5][4]\leftarrow {v}[4][4]=12\)</span>, <span class="arithmatex">\({s}[5][4]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td>15</td>
        <td>0</td>
        <td><span class="arithmatex">\(p[5]+{v}[5][0]=10+0\le {v}[4][5]=15\)</span>: <span class="arithmatex">\({v}[5][5]\leftarrow {v}[4][5]=15\)</span>, <span class="arithmatex">\({s}[5][5]\leftarrow 0\)</span></td>
        </tr>
        </table></div>

        These are the matrices ${v}$ and ${s}$ obtained during the execution of the DP algorithm:

        $$
        \begin{array}{l|rrrrrr}
        \hline {{v}[i][\ell]} & {\ell=0} & {\ell=1} & {\ell=2} & {\ell=3} & {\ell=4} & {\ell=5} \\
        \hline {i=0} & 0 & {-\infty} & {-\infty} & {-\infty} & {-\infty} & {-\infty} \\
        {i=1} & 0 & 3 & 6 & 9 & 12 & 15 \\
        {i=2} & 0 & 3 & 6 & 9 & 12 & 15 \\
        {i=3} & 0 & 3 & 6 & 9 & 12 & 15 \\
        {i=4} & 0 & 3 & 6 & 9 & 12 & 15 \\
        {i=5} & 0 & 3 & 6 & 9 & 12 & 15 \\
        \hline
        \end{array}
        $$

        $$
        \begin{array}{l|rrrrrr}
        \hline {{s}[i][\ell]} & {\ell=0} & {\ell=1} & {\ell=2} & {\ell=3} & {\ell=4} & {\ell=5} \\
        \hline {i=0} & 0 & 0 & 0 & 0 & 0 & 0 \\
        {i=1} & 0 & 1 & 1 & 1 & 1 & 1 \\
        {i=2} & 0 & 0 & 0 & 0 & 0 & 0 \\
        {i=3} & 0 & 0 & 0 & 0 & 0 & 0 \\
        {i=4} & 0 & 0 & 0 & 0 & 0 & 0 \\
        {i=5} & 0 & 0 & 0 & 0 & 0 & 0 \\
        \hline
        \end{array}
        $$

        The optimal value of the RCP instance is ${v}[5][5]=15$.

    4. Using the matrix ${s}$, we can reconstruct an optimal solution as follows:

        <div class="tabella" markdown="0"><table>
        <tr>
        <th>Iteration</th>
        <th><span class="arithmatex">\(i\)</span></th>
        <th><span class="arithmatex">\(\ell\)</span></th>
        <th><span class="arithmatex">\({s}[i][\ell]\)</span></th>
        <th><span class="arithmatex">\(x[1]\)</span></th>
        <th><span class="arithmatex">\(x[2]\)</span></th>
        <th><span class="arithmatex">\(x[3]\)</span></th>
        <th><span class="arithmatex">\(x[4]\)</span></th>
        <th><span class="arithmatex">\(x[5]\)</span></th>
        <th>Action</th>
        </tr>
        <tr>
        <td>1</td>
        <td>5</td>
        <td>5</td>
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
        <td>5</td>
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
        <td>5</td>
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
        <td>5</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(i\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td>5</td>
        <td>1</td>
        <td>5</td>
        <td>1</td>
        <td class="cella-blu">1</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(\ell\leftarrow 4\)</span></td>
        </tr>
        <tr>
        <td>6</td>
        <td>1</td>
        <td>4</td>
        <td>1</td>
        <td class="cella-blu">2</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(\ell\leftarrow 3\)</span></td>
        </tr>
        <tr>
        <td>7</td>
        <td>1</td>
        <td>3</td>
        <td>1</td>
        <td class="cella-blu">3</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(\ell\leftarrow 2\)</span></td>
        </tr>
        <tr>
        <td>8</td>
        <td>1</td>
        <td>2</td>
        <td>1</td>
        <td class="cella-blu">4</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(\ell\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td>9</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td class="cella-blu">5</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(\ell\leftarrow 0\)</span></td>
        </tr>
        </table></div>

        Thus, the vector

        $$
        (5,0,0,0,0)
        $$

        is an optimal solution. The optimal value is

        $$
        {v}[5][5]=15.
        $$

<a id="esercizio-25-4"></a>

!!! esercizio "Exercise 25.4: Exercise 4: Rod Cutting Problem"

    Consider the following RCP instance, where the rod has length $n=6$, and the profits associated with the possible piece lengths are:

    $$
    \begin{array}{l|rrrrrr}
    \hline  & {i=1} & {i=2} & {i=3} & {i=4} & {i=5} & {i=6} \\
    \hline {p_i} & {2} & {6} & {7} & {11} & {13} & {17} \\
    \hline
    \end{array}
    $$

    **Questions**

    1. Show the execution of the first bottom-up DP algorithm by reporting, for each iteration, the values of the vector $v$ and the values of the vector $s$.

    2. Using the vector $s$, reconstruct an optimal solution in integer notation $(x_1,x_2,\dots,x_n)$, and report the optimal value.

    3. Show the execution of the second bottom-up DP algorithm by reporting, for each iteration, the values of the matrices $v$ and $s$.

    4. Using the matrix $s$, reconstruct an optimal solution in integer notation $(x_1,x_2,\dots,x_n)$, and report the optimal value.

??? soluzione "Solution"

    1. Step-by-step execution of the first bottom-up DP algorithm

        For each step of the DP algorithm, the table shows the values of $\ell$ and $i$, the cells $v[\ell]$ and $s[\ell]$, the current value of $\mathit{m}$, and the current value of $\mathit{t}$. The cell of $\mathit{m}$ is highlighted in <mark>red</mark> when updated; the cell of $\mathit{t}$ is highlighted in <mark>blue</mark> when updated; the cells of $v[\ell]$ and $s[\ell]$ are highlighted in <mark>blue</mark> when assigned.

        <div class="tabella" markdown="0"><table>
        <tr>
        <th><span class="arithmatex">\(\ell\)</span></th>
        <th><span class="arithmatex">\(i\)</span></th>
        <th><span class="arithmatex">\(v[\ell]\)</span></th>
        <th><span class="arithmatex">\(s[\ell]\)</span></th>
        <th><span class="arithmatex">\(\mathit{m}\)</span></th>
        <th><span class="arithmatex">\(\mathit{t}\)</span></th>
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
        <td></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(\mathit{m}\leftarrow 0\)</span>, <span class="arithmatex">\(\mathit{t}\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>1</td>
        <td>1</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td class="cella-rossa">2</td>
        <td class="cella-blu">1</td>
        <td><span class="arithmatex">\(p[1]+v[0]=2+0=2>0\)</span>: <span class="arithmatex">\(\mathit{m}\leftarrow 2\)</span>, <span class="arithmatex">\(\mathit{t}\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td class="cella-blu">2</td>
        <td class="cella-blu">1</td>
        <td>2</td>
        <td>1</td>
        <td><span class="arithmatex">\(v[1]\leftarrow \mathit{m}=2\)</span>, <span class="arithmatex">\(s[1]\leftarrow \mathit{t}=1\)</span></td>
        </tr>
        <tr>
        <td></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(\mathit{m}\leftarrow 0\)</span>, <span class="arithmatex">\(\mathit{t}\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>2</td>
        <td>1</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td class="cella-rossa">4</td>
        <td class="cella-blu">1</td>
        <td><span class="arithmatex">\(p[1]+v[1]=2+2=4>0\)</span>: <span class="arithmatex">\(\mathit{m}\leftarrow 4\)</span>, <span class="arithmatex">\(\mathit{t}\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td></td>
        <td>2</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td class="cella-rossa">6</td>
        <td class="cella-blu">2</td>
        <td><span class="arithmatex">\(p[2]+v[0]=6+0=6>4\)</span>: <span class="arithmatex">\(\mathit{m}\leftarrow 6\)</span>, <span class="arithmatex">\(\mathit{t}\leftarrow 2\)</span></td>
        </tr>
        <tr>
        <td></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td class="cella-blu">6</td>
        <td class="cella-blu">2</td>
        <td>6</td>
        <td>2</td>
        <td><span class="arithmatex">\(v[2]\leftarrow \mathit{m}=6\)</span>, <span class="arithmatex">\(s[2]\leftarrow \mathit{t}=2\)</span></td>
        </tr>
        <tr>
        <td></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(\mathit{m}\leftarrow 0\)</span>, <span class="arithmatex">\(\mathit{t}\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>3</td>
        <td>1</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td class="cella-rossa">8</td>
        <td class="cella-blu">1</td>
        <td><span class="arithmatex">\(p[1]+v[2]=2+6=8>0\)</span>: <span class="arithmatex">\(\mathit{m}\leftarrow 8\)</span>, <span class="arithmatex">\(\mathit{t}\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td></td>
        <td>2</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>8</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[2]+v[1]=6+2=8=\mathit{m}\)</span>: no update</td>
        </tr>
        <tr>
        <td></td>
        <td>3</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>8</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[3]+v[0]=7+0=7<8\)</span>: no update</td>
        </tr>
        <tr>
        <td></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td class="cella-blu">8</td>
        <td class="cella-blu">1</td>
        <td>8</td>
        <td>1</td>
        <td><span class="arithmatex">\(v[3]\leftarrow \mathit{m}=8\)</span>, <span class="arithmatex">\(s[3]\leftarrow \mathit{t}=1\)</span></td>
        </tr>
        <tr>
        <td></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(\mathit{m}\leftarrow 0\)</span>, <span class="arithmatex">\(\mathit{t}\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>4</td>
        <td>1</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td class="cella-rossa">10</td>
        <td class="cella-blu">1</td>
        <td><span class="arithmatex">\(p[1]+v[3]=2+8=10>0\)</span>: <span class="arithmatex">\(\mathit{m}\leftarrow 10\)</span>, <span class="arithmatex">\(\mathit{t}\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td></td>
        <td>2</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td class="cella-rossa">12</td>
        <td class="cella-blu">2</td>
        <td><span class="arithmatex">\(p[2]+v[2]=6+6=12>10\)</span>: <span class="arithmatex">\(\mathit{m}\leftarrow 12\)</span>, <span class="arithmatex">\(\mathit{t}\leftarrow 2\)</span></td>
        </tr>
        <tr>
        <td></td>
        <td>3</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>12</td>
        <td>2</td>
        <td><span class="arithmatex">\(p[3]+v[1]=7+2=9<12\)</span>: no update</td>
        </tr>
        <tr>
        <td></td>
        <td>4</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>12</td>
        <td>2</td>
        <td><span class="arithmatex">\(p[4]+v[0]=11+0=11<12\)</span>: no update</td>
        </tr>
        <tr>
        <td></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td class="cella-blu">12</td>
        <td class="cella-blu">2</td>
        <td>12</td>
        <td>2</td>
        <td><span class="arithmatex">\(v[4]\leftarrow \mathit{m}=12\)</span>, <span class="arithmatex">\(s[4]\leftarrow \mathit{t}=2\)</span></td>
        </tr>
        <tr>
        <td></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(\mathit{m}\leftarrow 0\)</span>, <span class="arithmatex">\(\mathit{t}\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>5</td>
        <td>1</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td class="cella-rossa">14</td>
        <td class="cella-blu">1</td>
        <td><span class="arithmatex">\(p[1]+v[4]=2+12=14>0\)</span>: <span class="arithmatex">\(\mathit{m}\leftarrow 14\)</span>, <span class="arithmatex">\(\mathit{t}\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td></td>
        <td>2</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>14</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[2]+v[3]=6+8=14=\mathit{m}\)</span>: no update</td>
        </tr>
        <tr>
        <td></td>
        <td>3</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>14</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[3]+v[2]=7+6=13<14\)</span>: no update</td>
        </tr>
        <tr>
        <td></td>
        <td>4</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>14</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[4]+v[1]=11+2=13<14\)</span>: no update</td>
        </tr>
        <tr>
        <td></td>
        <td>5</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>14</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[5]+v[0]=13+0=13<14\)</span>: no update</td>
        </tr>
        <tr>
        <td></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td class="cella-blu">14</td>
        <td class="cella-blu">1</td>
        <td>14</td>
        <td>1</td>
        <td><span class="arithmatex">\(v[5]\leftarrow \mathit{m}=14\)</span>, <span class="arithmatex">\(s[5]\leftarrow \mathit{t}=1\)</span></td>
        </tr>
        <tr>
        <td></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(\mathit{m}\leftarrow 0\)</span>, <span class="arithmatex">\(\mathit{t}\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>6</td>
        <td>1</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td class="cella-rossa">16</td>
        <td class="cella-blu">1</td>
        <td><span class="arithmatex">\(p[1]+v[5]=2+14=16>0\)</span>: <span class="arithmatex">\(\mathit{m}\leftarrow 16\)</span>, <span class="arithmatex">\(\mathit{t}\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td></td>
        <td>2</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td class="cella-rossa">18</td>
        <td class="cella-blu">2</td>
        <td><span class="arithmatex">\(p[2]+v[4]=6+12=18>16\)</span>: <span class="arithmatex">\(\mathit{m}\leftarrow 18\)</span>, <span class="arithmatex">\(\mathit{t}\leftarrow 2\)</span></td>
        </tr>
        <tr>
        <td></td>
        <td>3</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>18</td>
        <td>2</td>
        <td><span class="arithmatex">\(p[3]+v[3]=7+8=15<18\)</span>: no update</td>
        </tr>
        <tr>
        <td></td>
        <td>4</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>18</td>
        <td>2</td>
        <td><span class="arithmatex">\(p[4]+v[2]=11+6=17<18\)</span>: no update</td>
        </tr>
        <tr>
        <td></td>
        <td>5</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>18</td>
        <td>2</td>
        <td><span class="arithmatex">\(p[5]+v[1]=13+2=15<18\)</span>: no update</td>
        </tr>
        <tr>
        <td></td>
        <td>6</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>18</td>
        <td>2</td>
        <td><span class="arithmatex">\(p[6]+v[0]=17+0=17<18\)</span>: no update</td>
        </tr>
        <tr>
        <td></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td class="cella-blu">18</td>
        <td class="cella-blu">2</td>
        <td>18</td>
        <td>2</td>
        <td><span class="arithmatex">\(v[6]\leftarrow \mathit{m}=18\)</span>, <span class="arithmatex">\(s[6]\leftarrow \mathit{t}=2\)</span></td>
        </tr>
        </table></div>

        This is the vector $v$ after the execution of the DP algorithm:

        $$
        \begin{array}{cccccccc}
        \hline  & {\ell=0} & {\ell=1} & {\ell=2} & {\ell=3} & {\ell=4} & {\ell=5} & {\ell=6} \\
        \hline {v[\ell]} & 0 & 2 & 6 & 8 & 12 & 14 & 18 \\
        \hline
        \end{array}
        $$

        This is the vector $s$ after the execution of the DP algorithm:

        $$
        \begin{array}{ccccccc}
        \hline  & {\ell=1} & {\ell=2} & {\ell=3} & {\ell=4} & {\ell=5} & {\ell=6} \\
        \hline {s[\ell]} & 1 & 2 & 1 & 2 & 1 & 2 \\
        \hline
        \end{array}
        $$

    2. We have the following vector $s$:

        $$
        \begin{array}{l|rrrrrr}
        \hline  & {\ell=1} & {\ell=2} & {\ell=3} & {\ell=4} & {\ell=5} & {\ell=6} \\
        \hline {s[\ell]} & 1 & 2 & 1 & 2 & 1 & 2 \\
        \hline
        \end{array}
        $$

        We can reconstruct an optimal solution for a rod of length $n=6$ as follows:

        <div class="tabella" markdown="0"><table>
        <tr>
        <th>Iteration</th>
        <th><span class="arithmatex">\(i\)</span></th>
        <th><span class="arithmatex">\(s[i]\)</span></th>
        <th><span class="arithmatex">\(x[1]\)</span></th>
        <th><span class="arithmatex">\(x[2]\)</span></th>
        <th><span class="arithmatex">\(x[3]\)</span></th>
        <th><span class="arithmatex">\(x[4]\)</span></th>
        <th><span class="arithmatex">\(x[5]\)</span></th>
        <th><span class="arithmatex">\(x[6]\)</span></th>
        <th>Update of <span class="arithmatex">\(i\)</span></th>
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
        <td>0</td>
        <td><span class="arithmatex">\(i=6\)</span></td>
        </tr>
        <tr>
        <td>1</td>
        <td>6</td>
        <td>2</td>
        <td>0</td>
        <td class="cella-blu">1</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(i=6-2=4\)</span></td>
        </tr>
        <tr>
        <td>2</td>
        <td>4</td>
        <td>2</td>
        <td>0</td>
        <td class="cella-blu">2</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(i=4-2=2\)</span></td>
        </tr>
        <tr>
        <td>3</td>
        <td>2</td>
        <td>2</td>
        <td>0</td>
        <td class="cella-blu">3</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(i=2-2=0\)</span></td>
        </tr>
        </table></div>

        Thus, the vector

        $$
        (0,3,0,0,0,0)
        $$

        is an optimal solution. The optimal value is

        $$
        v[6]=18.
        $$

    3. Step-by-step execution of the second bottom-up DP algorithm

        For each step of the DP algorithm, the table shows the values of $i$ and $\ell$, the cells ${v}[i][\ell]$ and ${s}[i][\ell]$, and the operation performed. The cells are computed for increasing values of $i$ and, for each fixed value of $i$, for increasing values of $\ell$.

        <div class="tabella" markdown="0"><table>
        <tr>
        <th><span class="arithmatex">\(i\)</span></th>
        <th><span class="arithmatex">\(\ell\)</span></th>
        <th><span class="arithmatex">\({v}[i][\ell]\)</span></th>
        <th><span class="arithmatex">\({s}[i][\ell]\)</span></th>
        <th>Action</th>
        </tr>
        <tr>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\({v}[0][0]\leftarrow 0\)</span>, <span class="arithmatex">\({s}[0][0]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(-\infty\)</span></td>
        <td>0</td>
        <td><span class="arithmatex">\({v}[0][1]\leftarrow -\infty\)</span>, <span class="arithmatex">\({s}[0][1]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(-\infty\)</span></td>
        <td>0</td>
        <td><span class="arithmatex">\({v}[0][2]\leftarrow -\infty\)</span>, <span class="arithmatex">\({s}[0][2]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(-\infty\)</span></td>
        <td>0</td>
        <td><span class="arithmatex">\({v}[0][3]\leftarrow -\infty\)</span>, <span class="arithmatex">\({s}[0][3]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(-\infty\)</span></td>
        <td>0</td>
        <td><span class="arithmatex">\({v}[0][4]\leftarrow -\infty\)</span>, <span class="arithmatex">\({s}[0][4]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(-\infty\)</span></td>
        <td>0</td>
        <td><span class="arithmatex">\({v}[0][5]\leftarrow -\infty\)</span>, <span class="arithmatex">\({s}[0][5]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(-\infty\)</span></td>
        <td>0</td>
        <td><span class="arithmatex">\({v}[0][6]\leftarrow -\infty\)</span>, <span class="arithmatex">\({s}[0][6]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(i>\ell\)</span>: <span class="arithmatex">\({v}[1][0]\leftarrow {v}[0][0]=0\)</span>, <span class="arithmatex">\({s}[1][0]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td>2</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[1]+{v}[1][0]=2+0>{v}[0][1]=-\infty\)</span>: <span class="arithmatex">\({v}[1][1]\leftarrow 2\)</span>, <span class="arithmatex">\({s}[1][1]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td>4</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[1]+{v}[1][1]=2+2>{v}[0][2]=-\infty\)</span>: <span class="arithmatex">\({v}[1][2]\leftarrow 4\)</span>, <span class="arithmatex">\({s}[1][2]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td>6</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[1]+{v}[1][2]=2+4>{v}[0][3]=-\infty\)</span>: <span class="arithmatex">\({v}[1][3]\leftarrow 6\)</span>, <span class="arithmatex">\({s}[1][3]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td>8</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[1]+{v}[1][3]=2+6>{v}[0][4]=-\infty\)</span>: <span class="arithmatex">\({v}[1][4]\leftarrow 8\)</span>, <span class="arithmatex">\({s}[1][4]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td>10</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[1]+{v}[1][4]=2+8>{v}[0][5]=-\infty\)</span>: <span class="arithmatex">\({v}[1][5]\leftarrow 10\)</span>, <span class="arithmatex">\({s}[1][5]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td>12</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[1]+{v}[1][5]=2+10>{v}[0][6]=-\infty\)</span>: <span class="arithmatex">\({v}[1][6]\leftarrow 12\)</span>, <span class="arithmatex">\({s}[1][6]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(i>\ell\)</span>: <span class="arithmatex">\({v}[2][0]\leftarrow {v}[1][0]=0\)</span>, <span class="arithmatex">\({s}[2][0]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td>2</td>
        <td>0</td>
        <td><span class="arithmatex">\(i>\ell\)</span>: <span class="arithmatex">\({v}[2][1]\leftarrow {v}[1][1]=2\)</span>, <span class="arithmatex">\({s}[2][1]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td>6</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[2]+{v}[2][0]=6+0>{v}[1][2]=4\)</span>: <span class="arithmatex">\({v}[2][2]\leftarrow 6\)</span>, <span class="arithmatex">\({s}[2][2]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td>8</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[2]+{v}[2][1]=6+2>{v}[1][3]=6\)</span>: <span class="arithmatex">\({v}[2][3]\leftarrow 8\)</span>, <span class="arithmatex">\({s}[2][3]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td>12</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[2]+{v}[2][2]=6+6>{v}[1][4]=8\)</span>: <span class="arithmatex">\({v}[2][4]\leftarrow 12\)</span>, <span class="arithmatex">\({s}[2][4]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td>14</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[2]+{v}[2][3]=6+8>{v}[1][5]=10\)</span>: <span class="arithmatex">\({v}[2][5]\leftarrow 14\)</span>, <span class="arithmatex">\({s}[2][5]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td>18</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[2]+{v}[2][4]=6+12>{v}[1][6]=12\)</span>: <span class="arithmatex">\({v}[2][6]\leftarrow 18\)</span>, <span class="arithmatex">\({s}[2][6]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(i>\ell\)</span>: <span class="arithmatex">\({v}[3][0]\leftarrow {v}[2][0]=0\)</span>, <span class="arithmatex">\({s}[3][0]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td>2</td>
        <td>0</td>
        <td><span class="arithmatex">\(i>\ell\)</span>: <span class="arithmatex">\({v}[3][1]\leftarrow {v}[2][1]=2\)</span>, <span class="arithmatex">\({s}[3][1]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td>6</td>
        <td>0</td>
        <td><span class="arithmatex">\(i>\ell\)</span>: <span class="arithmatex">\({v}[3][2]\leftarrow {v}[2][2]=6\)</span>, <span class="arithmatex">\({s}[3][2]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td>8</td>
        <td>0</td>
        <td><span class="arithmatex">\(p[3]+{v}[3][0]=7+0\le {v}[2][3]=8\)</span>: <span class="arithmatex">\({v}[3][3]\leftarrow {v}[2][3]=8\)</span>, <span class="arithmatex">\({s}[3][3]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td>12</td>
        <td>0</td>
        <td><span class="arithmatex">\(p[3]+{v}[3][1]=7+2\le {v}[2][4]=12\)</span>: <span class="arithmatex">\({v}[3][4]\leftarrow {v}[2][4]=12\)</span>, <span class="arithmatex">\({s}[3][4]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td>14</td>
        <td>0</td>
        <td><span class="arithmatex">\(p[3]+{v}[3][2]=7+6\le {v}[2][5]=14\)</span>: <span class="arithmatex">\({v}[3][5]\leftarrow {v}[2][5]=14\)</span>, <span class="arithmatex">\({s}[3][5]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td>18</td>
        <td>0</td>
        <td><span class="arithmatex">\(p[3]+{v}[3][3]=7+8\le {v}[2][6]=18\)</span>: <span class="arithmatex">\({v}[3][6]\leftarrow {v}[2][6]=18\)</span>, <span class="arithmatex">\({s}[3][6]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(i>\ell\)</span>: <span class="arithmatex">\({v}[4][0]\leftarrow {v}[3][0]=0\)</span>, <span class="arithmatex">\({s}[4][0]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td>2</td>
        <td>0</td>
        <td><span class="arithmatex">\(i>\ell\)</span>: <span class="arithmatex">\({v}[4][1]\leftarrow {v}[3][1]=2\)</span>, <span class="arithmatex">\({s}[4][1]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td>6</td>
        <td>0</td>
        <td><span class="arithmatex">\(i>\ell\)</span>: <span class="arithmatex">\({v}[4][2]\leftarrow {v}[3][2]=6\)</span>, <span class="arithmatex">\({s}[4][2]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td>8</td>
        <td>0</td>
        <td><span class="arithmatex">\(i>\ell\)</span>: <span class="arithmatex">\({v}[4][3]\leftarrow {v}[3][3]=8\)</span>, <span class="arithmatex">\({s}[4][3]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td>12</td>
        <td>0</td>
        <td><span class="arithmatex">\(p[4]+{v}[4][0]=11+0\le {v}[3][4]=12\)</span>: <span class="arithmatex">\({v}[4][4]\leftarrow {v}[3][4]=12\)</span>, <span class="arithmatex">\({s}[4][4]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td>14</td>
        <td>0</td>
        <td><span class="arithmatex">\(p[4]+{v}[4][1]=11+2\le {v}[3][5]=14\)</span>: <span class="arithmatex">\({v}[4][5]\leftarrow {v}[3][5]=14\)</span>, <span class="arithmatex">\({s}[4][5]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td>18</td>
        <td>0</td>
        <td><span class="arithmatex">\(p[4]+{v}[4][2]=11+6\le {v}[3][6]=18\)</span>: <span class="arithmatex">\({v}[4][6]\leftarrow {v}[3][6]=18\)</span>, <span class="arithmatex">\({s}[4][6]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(i>\ell\)</span>: <span class="arithmatex">\({v}[5][0]\leftarrow {v}[4][0]=0\)</span>, <span class="arithmatex">\({s}[5][0]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td>2</td>
        <td>0</td>
        <td><span class="arithmatex">\(i>\ell\)</span>: <span class="arithmatex">\({v}[5][1]\leftarrow {v}[4][1]=2\)</span>, <span class="arithmatex">\({s}[5][1]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td>6</td>
        <td>0</td>
        <td><span class="arithmatex">\(i>\ell\)</span>: <span class="arithmatex">\({v}[5][2]\leftarrow {v}[4][2]=6\)</span>, <span class="arithmatex">\({s}[5][2]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td>8</td>
        <td>0</td>
        <td><span class="arithmatex">\(i>\ell\)</span>: <span class="arithmatex">\({v}[5][3]\leftarrow {v}[4][3]=8\)</span>, <span class="arithmatex">\({s}[5][3]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td>12</td>
        <td>0</td>
        <td><span class="arithmatex">\(i>\ell\)</span>: <span class="arithmatex">\({v}[5][4]\leftarrow {v}[4][4]=12\)</span>, <span class="arithmatex">\({s}[5][4]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td>14</td>
        <td>0</td>
        <td><span class="arithmatex">\(p[5]+{v}[5][0]=13+0\le {v}[4][5]=14\)</span>: <span class="arithmatex">\({v}[5][5]\leftarrow {v}[4][5]=14\)</span>, <span class="arithmatex">\({s}[5][5]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td>18</td>
        <td>0</td>
        <td><span class="arithmatex">\(p[5]+{v}[5][1]=13+2\le {v}[4][6]=18\)</span>: <span class="arithmatex">\({v}[5][6]\leftarrow {v}[4][6]=18\)</span>, <span class="arithmatex">\({s}[5][6]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(i>\ell\)</span>: <span class="arithmatex">\({v}[6][0]\leftarrow {v}[5][0]=0\)</span>, <span class="arithmatex">\({s}[6][0]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td>2</td>
        <td>0</td>
        <td><span class="arithmatex">\(i>\ell\)</span>: <span class="arithmatex">\({v}[6][1]\leftarrow {v}[5][1]=2\)</span>, <span class="arithmatex">\({s}[6][1]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td>6</td>
        <td>0</td>
        <td><span class="arithmatex">\(i>\ell\)</span>: <span class="arithmatex">\({v}[6][2]\leftarrow {v}[5][2]=6\)</span>, <span class="arithmatex">\({s}[6][2]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td>8</td>
        <td>0</td>
        <td><span class="arithmatex">\(i>\ell\)</span>: <span class="arithmatex">\({v}[6][3]\leftarrow {v}[5][3]=8\)</span>, <span class="arithmatex">\({s}[6][3]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td>12</td>
        <td>0</td>
        <td><span class="arithmatex">\(i>\ell\)</span>: <span class="arithmatex">\({v}[6][4]\leftarrow {v}[5][4]=12\)</span>, <span class="arithmatex">\({s}[6][4]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td>14</td>
        <td>0</td>
        <td><span class="arithmatex">\(i>\ell\)</span>: <span class="arithmatex">\({v}[6][5]\leftarrow {v}[5][5]=14\)</span>, <span class="arithmatex">\({s}[6][5]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td>18</td>
        <td>0</td>
        <td><span class="arithmatex">\(p[6]+{v}[6][0]=17+0\le {v}[5][6]=18\)</span>: <span class="arithmatex">\({v}[6][6]\leftarrow {v}[5][6]=18\)</span>, <span class="arithmatex">\({s}[6][6]\leftarrow 0\)</span></td>
        </tr>
        </table></div>

        These are the matrices ${v}$ and ${s}$ obtained during the execution of the DP algorithm:

        $$
        \begin{array}{l|rrrrrrr}
        \hline {{v}[i][\ell]} & {\ell=0} & {\ell=1} & {\ell=2} & {\ell=3} & {\ell=4} & {\ell=5} & {\ell=6} \\
        \hline {i=0} & 0 & {-\infty} & {-\infty} & {-\infty} & {-\infty} & {-\infty} & {-\infty} \\
        {i=1} & 0 & 2 & 4 & 6 & 8 & 10 & 12 \\
        {i=2} & 0 & 2 & 6 & 8 & 12 & 14 & 18 \\
        {i=3} & 0 & 2 & 6 & 8 & 12 & 14 & 18 \\
        {i=4} & 0 & 2 & 6 & 8 & 12 & 14 & 18 \\
        {i=5} & 0 & 2 & 6 & 8 & 12 & 14 & 18 \\
        {i=6} & 0 & 2 & 6 & 8 & 12 & 14 & 18 \\
        \hline
        \end{array}
        $$

        $$
        \begin{array}{l|rrrrrrr}
        \hline {{s}[i][\ell]} & {\ell=0} & {\ell=1} & {\ell=2} & {\ell=3} & {\ell=4} & {\ell=5} & {\ell=6} \\
        \hline {i=0} & 0 & 0 & 0 & 0 & 0 & 0 & 0 \\
        {i=1} & 0 & 1 & 1 & 1 & 1 & 1 & 1 \\
        {i=2} & 0 & 0 & 1 & 1 & 1 & 1 & 1 \\
        {i=3} & 0 & 0 & 0 & 0 & 0 & 0 & 0 \\
        {i=4} & 0 & 0 & 0 & 0 & 0 & 0 & 0 \\
        {i=5} & 0 & 0 & 0 & 0 & 0 & 0 & 0 \\
        {i=6} & 0 & 0 & 0 & 0 & 0 & 0 & 0 \\
        \hline
        \end{array}
        $$

        The optimal value of the RCP instance is ${v}[6][6]=18$.

    4. Using the matrix ${s}$, we can reconstruct an optimal solution as follows:

        <div class="tabella" markdown="0"><table>
        <tr>
        <th>Iteration</th>
        <th><span class="arithmatex">\(i\)</span></th>
        <th><span class="arithmatex">\(\ell\)</span></th>
        <th><span class="arithmatex">\({s}[i][\ell]\)</span></th>
        <th><span class="arithmatex">\(x[1]\)</span></th>
        <th><span class="arithmatex">\(x[2]\)</span></th>
        <th><span class="arithmatex">\(x[3]\)</span></th>
        <th><span class="arithmatex">\(x[4]\)</span></th>
        <th><span class="arithmatex">\(x[5]\)</span></th>
        <th><span class="arithmatex">\(x[6]\)</span></th>
        <th>Action</th>
        </tr>
        <tr>
        <td>1</td>
        <td>6</td>
        <td>6</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(i\leftarrow 5\)</span></td>
        </tr>
        <tr>
        <td>2</td>
        <td>5</td>
        <td>6</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(i\leftarrow 4\)</span></td>
        </tr>
        <tr>
        <td>3</td>
        <td>4</td>
        <td>6</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(i\leftarrow 3\)</span></td>
        </tr>
        <tr>
        <td>4</td>
        <td>3</td>
        <td>6</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(i\leftarrow 2\)</span></td>
        </tr>
        <tr>
        <td>5</td>
        <td>2</td>
        <td>6</td>
        <td>1</td>
        <td>0</td>
        <td class="cella-blu">1</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(\ell\leftarrow 4\)</span></td>
        </tr>
        <tr>
        <td>6</td>
        <td>2</td>
        <td>4</td>
        <td>1</td>
        <td>0</td>
        <td class="cella-blu">2</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(\ell\leftarrow 2\)</span></td>
        </tr>
        <tr>
        <td>7</td>
        <td>2</td>
        <td>2</td>
        <td>1</td>
        <td>0</td>
        <td class="cella-blu">3</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(\ell\leftarrow 0\)</span></td>
        </tr>
        </table></div>

        Thus, the vector

        $$
        (0,3,0,0,0,0)
        $$

        is an optimal solution. The optimal value is

        $$
        {v}[6][6]=18.
        $$

<a id="esercizio-25-5"></a>

!!! esercizio "Exercise 25.5: Exercise 5: Rod Cutting Problem"

    Consider the following RCP instance, where the rod has length $n=6$, and the profits associated with the possible piece lengths are:

    $$
    \begin{array}{l|rrrrrr}
    \hline  & {i=1} & {i=2} & {i=3} & {i=4} & {i=5} & {i=6} \\
    \hline {p_i} & {1} & {5} & {8} & {9} & {12} & {14} \\
    \hline
    \end{array}
    $$

    **Questions**

    1. Show the execution of the first bottom-up DP algorithm by reporting, for each iteration, the values of the vector $v$ and the values of the vector $s$.

    2. Using the vector $s$, reconstruct an optimal solution in integer notation $(x_1,x_2,\dots,x_n)$, and report the optimal value.

    3. Show the execution of the second bottom-up DP algorithm by reporting, for each iteration, the values of the matrices $v$ and $s$.

    4. Using the matrix $s$, reconstruct an optimal solution in integer notation $(x_1,x_2,\dots,x_n)$, and report the optimal value.

??? soluzione "Solution"

    1. Step-by-step execution of the first bottom-up DP algorithm

        For each step of the DP algorithm, the table shows the values of $\ell$ and $i$, the cells $v[\ell]$ and $s[\ell]$, the current value of $\mathit{m}$, and the current value of $\mathit{t}$. The cell of $\mathit{m}$ is highlighted in <mark>red</mark> when updated; the cell of $\mathit{t}$ is highlighted in <mark>blue</mark> when updated; the cells of $v[\ell]$ and $s[\ell]$ are highlighted in <mark>blue</mark> when assigned.

        <div class="tabella" markdown="0"><table>
        <tr>
        <th><span class="arithmatex">\(\ell\)</span></th>
        <th><span class="arithmatex">\(i\)</span></th>
        <th><span class="arithmatex">\(v[\ell]\)</span></th>
        <th><span class="arithmatex">\(s[\ell]\)</span></th>
        <th><span class="arithmatex">\(\mathit{m}\)</span></th>
        <th><span class="arithmatex">\(\mathit{t}\)</span></th>
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
        <td></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(\mathit{m}\leftarrow 0\)</span>, <span class="arithmatex">\(\mathit{t}\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>1</td>
        <td>1</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td class="cella-rossa">1</td>
        <td class="cella-blu">1</td>
        <td><span class="arithmatex">\(p[1]+v[0]=1+0=1>0\)</span>: <span class="arithmatex">\(\mathit{m}\leftarrow 1\)</span>, <span class="arithmatex">\(\mathit{t}\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td class="cella-blu">1</td>
        <td class="cella-blu">1</td>
        <td>1</td>
        <td>1</td>
        <td><span class="arithmatex">\(v[1]\leftarrow \mathit{m}=1\)</span>, <span class="arithmatex">\(s[1]\leftarrow \mathit{t}=1\)</span></td>
        </tr>
        <tr>
        <td></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(\mathit{m}\leftarrow 0\)</span>, <span class="arithmatex">\(\mathit{t}\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>2</td>
        <td>1</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td class="cella-rossa">2</td>
        <td class="cella-blu">1</td>
        <td><span class="arithmatex">\(p[1]+v[1]=1+1=2>0\)</span>: <span class="arithmatex">\(\mathit{m}\leftarrow 2\)</span>, <span class="arithmatex">\(\mathit{t}\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td></td>
        <td>2</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td class="cella-rossa">5</td>
        <td class="cella-blu">2</td>
        <td><span class="arithmatex">\(p[2]+v[0]=5+0=5>2\)</span>: <span class="arithmatex">\(\mathit{m}\leftarrow 5\)</span>, <span class="arithmatex">\(\mathit{t}\leftarrow 2\)</span></td>
        </tr>
        <tr>
        <td></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td class="cella-blu">5</td>
        <td class="cella-blu">2</td>
        <td>5</td>
        <td>2</td>
        <td><span class="arithmatex">\(v[2]\leftarrow \mathit{m}=5\)</span>, <span class="arithmatex">\(s[2]\leftarrow \mathit{t}=2\)</span></td>
        </tr>
        <tr>
        <td></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(\mathit{m}\leftarrow 0\)</span>, <span class="arithmatex">\(\mathit{t}\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>3</td>
        <td>1</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td class="cella-rossa">6</td>
        <td class="cella-blu">1</td>
        <td><span class="arithmatex">\(p[1]+v[2]=1+5=6>0\)</span>: <span class="arithmatex">\(\mathit{m}\leftarrow 6\)</span>, <span class="arithmatex">\(\mathit{t}\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td></td>
        <td>2</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>6</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[2]+v[1]=5+1=6=\mathit{m}\)</span>: no update</td>
        </tr>
        <tr>
        <td></td>
        <td>3</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td class="cella-rossa">8</td>
        <td class="cella-blu">3</td>
        <td><span class="arithmatex">\(p[3]+v[0]=8+0=8>6\)</span>: <span class="arithmatex">\(\mathit{m}\leftarrow 8\)</span>, <span class="arithmatex">\(\mathit{t}\leftarrow 3\)</span></td>
        </tr>
        <tr>
        <td></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td class="cella-blu">8</td>
        <td class="cella-blu">3</td>
        <td>8</td>
        <td>3</td>
        <td><span class="arithmatex">\(v[3]\leftarrow \mathit{m}=8\)</span>, <span class="arithmatex">\(s[3]\leftarrow \mathit{t}=3\)</span></td>
        </tr>
        <tr>
        <td></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(\mathit{m}\leftarrow 0\)</span>, <span class="arithmatex">\(\mathit{t}\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>4</td>
        <td>1</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td class="cella-rossa">9</td>
        <td class="cella-blu">1</td>
        <td><span class="arithmatex">\(p[1]+v[3]=1+8=9>0\)</span>: <span class="arithmatex">\(\mathit{m}\leftarrow 9\)</span>, <span class="arithmatex">\(\mathit{t}\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td></td>
        <td>2</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td class="cella-rossa">10</td>
        <td class="cella-blu">2</td>
        <td><span class="arithmatex">\(p[2]+v[2]=5+5=10>9\)</span>: <span class="arithmatex">\(\mathit{m}\leftarrow 10\)</span>, <span class="arithmatex">\(\mathit{t}\leftarrow 2\)</span></td>
        </tr>
        <tr>
        <td></td>
        <td>3</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>10</td>
        <td>2</td>
        <td><span class="arithmatex">\(p[3]+v[1]=8+1=9<10\)</span>: no update</td>
        </tr>
        <tr>
        <td></td>
        <td>4</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>10</td>
        <td>2</td>
        <td><span class="arithmatex">\(p[4]+v[0]=9+0=9<10\)</span>: no update</td>
        </tr>
        <tr>
        <td></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td class="cella-blu">10</td>
        <td class="cella-blu">2</td>
        <td>10</td>
        <td>2</td>
        <td><span class="arithmatex">\(v[4]\leftarrow \mathit{m}=10\)</span>, <span class="arithmatex">\(s[4]\leftarrow \mathit{t}=2\)</span></td>
        </tr>
        <tr>
        <td></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(\mathit{m}\leftarrow 0\)</span>, <span class="arithmatex">\(\mathit{t}\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>5</td>
        <td>1</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td class="cella-rossa">11</td>
        <td class="cella-blu">1</td>
        <td><span class="arithmatex">\(p[1]+v[4]=1+10=11>0\)</span>: <span class="arithmatex">\(\mathit{m}\leftarrow 11\)</span>, <span class="arithmatex">\(\mathit{t}\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td></td>
        <td>2</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td class="cella-rossa">13</td>
        <td class="cella-blu">2</td>
        <td><span class="arithmatex">\(p[2]+v[3]=5+8=13>11\)</span>: <span class="arithmatex">\(\mathit{m}\leftarrow 13\)</span>, <span class="arithmatex">\(\mathit{t}\leftarrow 2\)</span></td>
        </tr>
        <tr>
        <td></td>
        <td>3</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>13</td>
        <td>2</td>
        <td><span class="arithmatex">\(p[3]+v[2]=8+5=13=\mathit{m}\)</span>: no update</td>
        </tr>
        <tr>
        <td></td>
        <td>4</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>13</td>
        <td>2</td>
        <td><span class="arithmatex">\(p[4]+v[1]=9+1=10<13\)</span>: no update</td>
        </tr>
        <tr>
        <td></td>
        <td>5</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>13</td>
        <td>2</td>
        <td><span class="arithmatex">\(p[5]+v[0]=12+0=12<13\)</span>: no update</td>
        </tr>
        <tr>
        <td></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td class="cella-blu">13</td>
        <td class="cella-blu">2</td>
        <td>13</td>
        <td>2</td>
        <td><span class="arithmatex">\(v[5]\leftarrow \mathit{m}=13\)</span>, <span class="arithmatex">\(s[5]\leftarrow \mathit{t}=2\)</span></td>
        </tr>
        <tr>
        <td></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(\mathit{m}\leftarrow 0\)</span>, <span class="arithmatex">\(\mathit{t}\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>6</td>
        <td>1</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td class="cella-rossa">14</td>
        <td class="cella-blu">1</td>
        <td><span class="arithmatex">\(p[1]+v[5]=1+13=14>0\)</span>: <span class="arithmatex">\(\mathit{m}\leftarrow 14\)</span>, <span class="arithmatex">\(\mathit{t}\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td></td>
        <td>2</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td class="cella-rossa">15</td>
        <td class="cella-blu">2</td>
        <td><span class="arithmatex">\(p[2]+v[4]=5+10=15>14\)</span>: <span class="arithmatex">\(\mathit{m}\leftarrow 15\)</span>, <span class="arithmatex">\(\mathit{t}\leftarrow 2\)</span></td>
        </tr>
        <tr>
        <td></td>
        <td>3</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td class="cella-rossa">16</td>
        <td class="cella-blu">3</td>
        <td><span class="arithmatex">\(p[3]+v[3]=8+8=16>15\)</span>: <span class="arithmatex">\(\mathit{m}\leftarrow 16\)</span>, <span class="arithmatex">\(\mathit{t}\leftarrow 3\)</span></td>
        </tr>
        <tr>
        <td></td>
        <td>4</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>16</td>
        <td>3</td>
        <td><span class="arithmatex">\(p[4]+v[2]=9+5=14<16\)</span>: no update</td>
        </tr>
        <tr>
        <td></td>
        <td>5</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>16</td>
        <td>3</td>
        <td><span class="arithmatex">\(p[5]+v[1]=12+1=13<16\)</span>: no update</td>
        </tr>
        <tr>
        <td></td>
        <td>6</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>16</td>
        <td>3</td>
        <td><span class="arithmatex">\(p[6]+v[0]=14+0=14<16\)</span>: no update</td>
        </tr>
        <tr>
        <td></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td class="cella-blu">16</td>
        <td class="cella-blu">3</td>
        <td>16</td>
        <td>3</td>
        <td><span class="arithmatex">\(v[6]\leftarrow \mathit{m}=16\)</span>, <span class="arithmatex">\(s[6]\leftarrow \mathit{t}=3\)</span></td>
        </tr>
        </table></div>

        This is the vector $v$ after the execution of the DP algorithm:

        $$
        \begin{array}{cccccccc}
        \hline  & {\ell=0} & {\ell=1} & {\ell=2} & {\ell=3} & {\ell=4} & {\ell=5} & {\ell=6} \\
        \hline {v[\ell]} & 0 & 1 & 5 & 8 & 10 & 13 & 16 \\
        \hline
        \end{array}
        $$

        This is the vector $s$ after the execution of the DP algorithm:

        $$
        \begin{array}{ccccccc}
        \hline  & {\ell=1} & {\ell=2} & {\ell=3} & {\ell=4} & {\ell=5} & {\ell=6} \\
        \hline {s[\ell]} & 1 & 2 & 3 & 2 & 2 & 3 \\
        \hline
        \end{array}
        $$

    2. We have the following vector $s$:

        $$
        \begin{array}{l|rrrrrr}
        \hline  & {\ell=1} & {\ell=2} & {\ell=3} & {\ell=4} & {\ell=5} & {\ell=6} \\
        \hline {s[\ell]} & 1 & 2 & 3 & 2 & 2 & 3 \\
        \hline
        \end{array}
        $$

        We can reconstruct an optimal solution for a rod of length $n=6$ as follows:

        <div class="tabella" markdown="0"><table>
        <tr>
        <th>Iteration</th>
        <th><span class="arithmatex">\(i\)</span></th>
        <th><span class="arithmatex">\(s[i]\)</span></th>
        <th><span class="arithmatex">\(x[1]\)</span></th>
        <th><span class="arithmatex">\(x[2]\)</span></th>
        <th><span class="arithmatex">\(x[3]\)</span></th>
        <th><span class="arithmatex">\(x[4]\)</span></th>
        <th><span class="arithmatex">\(x[5]\)</span></th>
        <th><span class="arithmatex">\(x[6]\)</span></th>
        <th>Update of <span class="arithmatex">\(i\)</span></th>
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
        <td>0</td>
        <td><span class="arithmatex">\(i=6\)</span></td>
        </tr>
        <tr>
        <td>1</td>
        <td>6</td>
        <td>3</td>
        <td>0</td>
        <td>0</td>
        <td class="cella-blu">1</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(i=6-3=3\)</span></td>
        </tr>
        <tr>
        <td>2</td>
        <td>3</td>
        <td>3</td>
        <td>0</td>
        <td>0</td>
        <td class="cella-blu">2</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(i=3-3=0\)</span></td>
        </tr>
        </table></div>

        Thus, the vector

        $$
        (0,0,2,0,0,0)
        $$

        is an optimal solution. The optimal value is

        $$
        v[6]=16.
        $$

    3. Step-by-step execution of the second bottom-up DP algorithm

        For each step of the DP algorithm, the table shows the values of $i$ and $\ell$, the cells ${v}[i][\ell]$ and ${s}[i][\ell]$, and the operation performed. The cells are computed for increasing values of $i$ and, for each fixed value of $i$, for increasing values of $\ell$.

        <div class="tabella" markdown="0"><table>
        <tr>
        <th><span class="arithmatex">\(i\)</span></th>
        <th><span class="arithmatex">\(\ell\)</span></th>
        <th><span class="arithmatex">\({v}[i][\ell]\)</span></th>
        <th><span class="arithmatex">\({s}[i][\ell]\)</span></th>
        <th>Action</th>
        </tr>
        <tr>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\({v}[0][0]\leftarrow 0\)</span>, <span class="arithmatex">\({s}[0][0]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(-\infty\)</span></td>
        <td>0</td>
        <td><span class="arithmatex">\({v}[0][1]\leftarrow -\infty\)</span>, <span class="arithmatex">\({s}[0][1]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(-\infty\)</span></td>
        <td>0</td>
        <td><span class="arithmatex">\({v}[0][2]\leftarrow -\infty\)</span>, <span class="arithmatex">\({s}[0][2]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(-\infty\)</span></td>
        <td>0</td>
        <td><span class="arithmatex">\({v}[0][3]\leftarrow -\infty\)</span>, <span class="arithmatex">\({s}[0][3]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(-\infty\)</span></td>
        <td>0</td>
        <td><span class="arithmatex">\({v}[0][4]\leftarrow -\infty\)</span>, <span class="arithmatex">\({s}[0][4]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(-\infty\)</span></td>
        <td>0</td>
        <td><span class="arithmatex">\({v}[0][5]\leftarrow -\infty\)</span>, <span class="arithmatex">\({s}[0][5]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(-\infty\)</span></td>
        <td>0</td>
        <td><span class="arithmatex">\({v}[0][6]\leftarrow -\infty\)</span>, <span class="arithmatex">\({s}[0][6]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(i>\ell\)</span>: <span class="arithmatex">\({v}[1][0]\leftarrow {v}[0][0]=0\)</span>, <span class="arithmatex">\({s}[1][0]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td>1</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[1]+{v}[1][0]=1+0>{v}[0][1]=-\infty\)</span>: <span class="arithmatex">\({v}[1][1]\leftarrow 1\)</span>, <span class="arithmatex">\({s}[1][1]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td>2</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[1]+{v}[1][1]=1+1>{v}[0][2]=-\infty\)</span>: <span class="arithmatex">\({v}[1][2]\leftarrow 2\)</span>, <span class="arithmatex">\({s}[1][2]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td>3</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[1]+{v}[1][2]=1+2>{v}[0][3]=-\infty\)</span>: <span class="arithmatex">\({v}[1][3]\leftarrow 3\)</span>, <span class="arithmatex">\({s}[1][3]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td>4</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[1]+{v}[1][3]=1+3>{v}[0][4]=-\infty\)</span>: <span class="arithmatex">\({v}[1][4]\leftarrow 4\)</span>, <span class="arithmatex">\({s}[1][4]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td>5</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[1]+{v}[1][4]=1+4>{v}[0][5]=-\infty\)</span>: <span class="arithmatex">\({v}[1][5]\leftarrow 5\)</span>, <span class="arithmatex">\({s}[1][5]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td>6</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[1]+{v}[1][5]=1+5>{v}[0][6]=-\infty\)</span>: <span class="arithmatex">\({v}[1][6]\leftarrow 6\)</span>, <span class="arithmatex">\({s}[1][6]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(i>\ell\)</span>: <span class="arithmatex">\({v}[2][0]\leftarrow {v}[1][0]=0\)</span>, <span class="arithmatex">\({s}[2][0]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td>1</td>
        <td>0</td>
        <td><span class="arithmatex">\(i>\ell\)</span>: <span class="arithmatex">\({v}[2][1]\leftarrow {v}[1][1]=1\)</span>, <span class="arithmatex">\({s}[2][1]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td>5</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[2]+{v}[2][0]=5+0>{v}[1][2]=2\)</span>: <span class="arithmatex">\({v}[2][2]\leftarrow 5\)</span>, <span class="arithmatex">\({s}[2][2]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td>6</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[2]+{v}[2][1]=5+1>{v}[1][3]=3\)</span>: <span class="arithmatex">\({v}[2][3]\leftarrow 6\)</span>, <span class="arithmatex">\({s}[2][3]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td>10</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[2]+{v}[2][2]=5+5>{v}[1][4]=4\)</span>: <span class="arithmatex">\({v}[2][4]\leftarrow 10\)</span>, <span class="arithmatex">\({s}[2][4]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td>11</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[2]+{v}[2][3]=5+6>{v}[1][5]=5\)</span>: <span class="arithmatex">\({v}[2][5]\leftarrow 11\)</span>, <span class="arithmatex">\({s}[2][5]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td>15</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[2]+{v}[2][4]=5+10>{v}[1][6]=6\)</span>: <span class="arithmatex">\({v}[2][6]\leftarrow 15\)</span>, <span class="arithmatex">\({s}[2][6]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(i>\ell\)</span>: <span class="arithmatex">\({v}[3][0]\leftarrow {v}[2][0]=0\)</span>, <span class="arithmatex">\({s}[3][0]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td>1</td>
        <td>0</td>
        <td><span class="arithmatex">\(i>\ell\)</span>: <span class="arithmatex">\({v}[3][1]\leftarrow {v}[2][1]=1\)</span>, <span class="arithmatex">\({s}[3][1]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td>5</td>
        <td>0</td>
        <td><span class="arithmatex">\(i>\ell\)</span>: <span class="arithmatex">\({v}[3][2]\leftarrow {v}[2][2]=5\)</span>, <span class="arithmatex">\({s}[3][2]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td>8</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[3]+{v}[3][0]=8+0>{v}[2][3]=6\)</span>: <span class="arithmatex">\({v}[3][3]\leftarrow 8\)</span>, <span class="arithmatex">\({s}[3][3]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td>10</td>
        <td>0</td>
        <td><span class="arithmatex">\(p[3]+{v}[3][1]=8+1\le {v}[2][4]=10\)</span>: <span class="arithmatex">\({v}[3][4]\leftarrow {v}[2][4]=10\)</span>, <span class="arithmatex">\({s}[3][4]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td>13</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[3]+{v}[3][2]=8+5>{v}[2][5]=11\)</span>: <span class="arithmatex">\({v}[3][5]\leftarrow 13\)</span>, <span class="arithmatex">\({s}[3][5]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td>16</td>
        <td>1</td>
        <td><span class="arithmatex">\(p[3]+{v}[3][3]=8+8>{v}[2][6]=15\)</span>: <span class="arithmatex">\({v}[3][6]\leftarrow 16\)</span>, <span class="arithmatex">\({s}[3][6]\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(i>\ell\)</span>: <span class="arithmatex">\({v}[4][0]\leftarrow {v}[3][0]=0\)</span>, <span class="arithmatex">\({s}[4][0]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td>1</td>
        <td>0</td>
        <td><span class="arithmatex">\(i>\ell\)</span>: <span class="arithmatex">\({v}[4][1]\leftarrow {v}[3][1]=1\)</span>, <span class="arithmatex">\({s}[4][1]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td>5</td>
        <td>0</td>
        <td><span class="arithmatex">\(i>\ell\)</span>: <span class="arithmatex">\({v}[4][2]\leftarrow {v}[3][2]=5\)</span>, <span class="arithmatex">\({s}[4][2]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td>8</td>
        <td>0</td>
        <td><span class="arithmatex">\(i>\ell\)</span>: <span class="arithmatex">\({v}[4][3]\leftarrow {v}[3][3]=8\)</span>, <span class="arithmatex">\({s}[4][3]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td>10</td>
        <td>0</td>
        <td><span class="arithmatex">\(p[4]+{v}[4][0]=9+0\le {v}[3][4]=10\)</span>: <span class="arithmatex">\({v}[4][4]\leftarrow {v}[3][4]=10\)</span>, <span class="arithmatex">\({s}[4][4]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td>13</td>
        <td>0</td>
        <td><span class="arithmatex">\(p[4]+{v}[4][1]=9+1\le {v}[3][5]=13\)</span>: <span class="arithmatex">\({v}[4][5]\leftarrow {v}[3][5]=13\)</span>, <span class="arithmatex">\({s}[4][5]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td>16</td>
        <td>0</td>
        <td><span class="arithmatex">\(p[4]+{v}[4][2]=9+5\le {v}[3][6]=16\)</span>: <span class="arithmatex">\({v}[4][6]\leftarrow {v}[3][6]=16\)</span>, <span class="arithmatex">\({s}[4][6]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(i>\ell\)</span>: <span class="arithmatex">\({v}[5][0]\leftarrow {v}[4][0]=0\)</span>, <span class="arithmatex">\({s}[5][0]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td>1</td>
        <td>0</td>
        <td><span class="arithmatex">\(i>\ell\)</span>: <span class="arithmatex">\({v}[5][1]\leftarrow {v}[4][1]=1\)</span>, <span class="arithmatex">\({s}[5][1]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td>5</td>
        <td>0</td>
        <td><span class="arithmatex">\(i>\ell\)</span>: <span class="arithmatex">\({v}[5][2]\leftarrow {v}[4][2]=5\)</span>, <span class="arithmatex">\({s}[5][2]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td>8</td>
        <td>0</td>
        <td><span class="arithmatex">\(i>\ell\)</span>: <span class="arithmatex">\({v}[5][3]\leftarrow {v}[4][3]=8\)</span>, <span class="arithmatex">\({s}[5][3]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td>10</td>
        <td>0</td>
        <td><span class="arithmatex">\(i>\ell\)</span>: <span class="arithmatex">\({v}[5][4]\leftarrow {v}[4][4]=10\)</span>, <span class="arithmatex">\({s}[5][4]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td>13</td>
        <td>0</td>
        <td><span class="arithmatex">\(p[5]+{v}[5][0]=12+0\le {v}[4][5]=13\)</span>: <span class="arithmatex">\({v}[5][5]\leftarrow {v}[4][5]=13\)</span>, <span class="arithmatex">\({s}[5][5]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td>16</td>
        <td>0</td>
        <td><span class="arithmatex">\(p[5]+{v}[5][1]=12+1\le {v}[4][6]=16\)</span>: <span class="arithmatex">\({v}[5][6]\leftarrow {v}[4][6]=16\)</span>, <span class="arithmatex">\({s}[5][6]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(i>\ell\)</span>: <span class="arithmatex">\({v}[6][0]\leftarrow {v}[5][0]=0\)</span>, <span class="arithmatex">\({s}[6][0]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td>1</td>
        <td>0</td>
        <td><span class="arithmatex">\(i>\ell\)</span>: <span class="arithmatex">\({v}[6][1]\leftarrow {v}[5][1]=1\)</span>, <span class="arithmatex">\({s}[6][1]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td>5</td>
        <td>0</td>
        <td><span class="arithmatex">\(i>\ell\)</span>: <span class="arithmatex">\({v}[6][2]\leftarrow {v}[5][2]=5\)</span>, <span class="arithmatex">\({s}[6][2]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td>8</td>
        <td>0</td>
        <td><span class="arithmatex">\(i>\ell\)</span>: <span class="arithmatex">\({v}[6][3]\leftarrow {v}[5][3]=8\)</span>, <span class="arithmatex">\({s}[6][3]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td>10</td>
        <td>0</td>
        <td><span class="arithmatex">\(i>\ell\)</span>: <span class="arithmatex">\({v}[6][4]\leftarrow {v}[5][4]=10\)</span>, <span class="arithmatex">\({s}[6][4]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td>13</td>
        <td>0</td>
        <td><span class="arithmatex">\(i>\ell\)</span>: <span class="arithmatex">\({v}[6][5]\leftarrow {v}[5][5]=13\)</span>, <span class="arithmatex">\({s}[6][5]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td>16</td>
        <td>0</td>
        <td><span class="arithmatex">\(p[6]+{v}[6][0]=14+0\le {v}[5][6]=16\)</span>: <span class="arithmatex">\({v}[6][6]\leftarrow {v}[5][6]=16\)</span>, <span class="arithmatex">\({s}[6][6]\leftarrow 0\)</span></td>
        </tr>
        </table></div>

        These are the matrices ${v}$ and ${s}$ obtained during the execution of the DP algorithm:

        $$
        \begin{array}{l|rrrrrrr}
        \hline {{v}[i][\ell]} & {\ell=0} & {\ell=1} & {\ell=2} & {\ell=3} & {\ell=4} & {\ell=5} & {\ell=6} \\
        \hline {i=0} & 0 & {-\infty} & {-\infty} & {-\infty} & {-\infty} & {-\infty} & {-\infty} \\
        {i=1} & 0 & 1 & 2 & 3 & 4 & 5 & 6 \\
        {i=2} & 0 & 1 & 5 & 6 & 10 & 11 & 15 \\
        {i=3} & 0 & 1 & 5 & 8 & 10 & 13 & 16 \\
        {i=4} & 0 & 1 & 5 & 8 & 10 & 13 & 16 \\
        {i=5} & 0 & 1 & 5 & 8 & 10 & 13 & 16 \\
        {i=6} & 0 & 1 & 5 & 8 & 10 & 13 & 16 \\
        \hline
        \end{array}
        $$

        $$
        \begin{array}{l|rrrrrrr}
        \hline {{s}[i][\ell]} & {\ell=0} & {\ell=1} & {\ell=2} & {\ell=3} & {\ell=4} & {\ell=5} & {\ell=6} \\
        \hline {i=0} & 0 & 0 & 0 & 0 & 0 & 0 & 0 \\
        {i=1} & 0 & 1 & 1 & 1 & 1 & 1 & 1 \\
        {i=2} & 0 & 0 & 1 & 1 & 1 & 1 & 1 \\
        {i=3} & 0 & 0 & 0 & 1 & 0 & 1 & 1 \\
        {i=4} & 0 & 0 & 0 & 0 & 0 & 0 & 0 \\
        {i=5} & 0 & 0 & 0 & 0 & 0 & 0 & 0 \\
        {i=6} & 0 & 0 & 0 & 0 & 0 & 0 & 0 \\
        \hline
        \end{array}
        $$

        The optimal value of the RCP instance is ${v}[6][6]=16$.

    4. Using the matrix ${s}$, we can reconstruct an optimal solution as follows:

        <div class="tabella" markdown="0"><table>
        <tr>
        <th>Iteration</th>
        <th><span class="arithmatex">\(i\)</span></th>
        <th><span class="arithmatex">\(\ell\)</span></th>
        <th><span class="arithmatex">\({s}[i][\ell]\)</span></th>
        <th><span class="arithmatex">\(x[1]\)</span></th>
        <th><span class="arithmatex">\(x[2]\)</span></th>
        <th><span class="arithmatex">\(x[3]\)</span></th>
        <th><span class="arithmatex">\(x[4]\)</span></th>
        <th><span class="arithmatex">\(x[5]\)</span></th>
        <th><span class="arithmatex">\(x[6]\)</span></th>
        <th>Action</th>
        </tr>
        <tr>
        <td>1</td>
        <td>6</td>
        <td>6</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(i\leftarrow 5\)</span></td>
        </tr>
        <tr>
        <td>2</td>
        <td>5</td>
        <td>6</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(i\leftarrow 4\)</span></td>
        </tr>
        <tr>
        <td>3</td>
        <td>4</td>
        <td>6</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(i\leftarrow 3\)</span></td>
        </tr>
        <tr>
        <td>4</td>
        <td>3</td>
        <td>6</td>
        <td>1</td>
        <td>0</td>
        <td>0</td>
        <td class="cella-blu">1</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(\ell\leftarrow 3\)</span></td>
        </tr>
        <tr>
        <td>5</td>
        <td>3</td>
        <td>3</td>
        <td>1</td>
        <td>0</td>
        <td>0</td>
        <td class="cella-blu">2</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(\ell\leftarrow 0\)</span></td>
        </tr>
        </table></div>

        Thus, the vector

        $$
        (0,0,2,0,0,0)
        $$

        is an optimal solution. The optimal value is

        $$
        {v}[6][6]=16.
        $$
