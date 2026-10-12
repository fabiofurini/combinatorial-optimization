---
title: "Exercises · DP for the capacitated lot sizing problem"
---

# Exercises · DP for the capacitated lot sizing problem

<div class="info-capitolo" markdown>

**Exercises · Chapter 26** · each solution opens with a click · [:material-book-open-variant: Chapter 26: Capacitated lot sizing (CLS)](../dynamic-programming/dp-capacitated-lot-sizing.md) · [:material-file-pdf-box: Exercises, volume 3 (PDF)](../pdf/exercises-3-dynamic-programming.pdf)

</div>

<a id="esercizio-26-1"></a>

!!! esercizio "Exercise 26.1: Exercise 1: Capacitated Lot-Sizing Problem"

    Consider the following CLS instance with $m=3$ periods, where the demands, the setup costs, the variable production costs, the holding costs, and the capacities are:

    $$
    \begin{array}{l|rrr}
    \hline {t} & {1} & {2} & {3} \\
    \hline {d_t} & {1} & {2} & {3} \\
    {sc_t} & {10} & {5} & {8} \\
    {vc_t} & {1} & {1} & {2} \\
    {hc_t} & {1} & {1} & {2} \\
    {cap_t} & {2} & {4} & {4} \\
    \hline
    \end{array}
    $$

    **Questions**

    1. Show the execution of the bottom-up DP algorithm by reporting, for each iteration, the values of the matrices ${v}$ and ${r}$.

    2. Using the matrix ${r}$, reconstruct an optimal solution $(x_1,x_2,\dots,x_m)$, and report the optimal value.

??? soluzione "Solution"

    1. Step-by-step execution of the bottom-up DP algorithm

        For each step of the DP algorithm, the table shows the values of $t$ and $k$, the cells ${v}[t][k]$ and ${r}[t][k]$, and the operation performed. The cells are computed for increasing values of $t$ and, for each fixed value of $t$, for increasing values of $k\in\{0,1,\dots,D_{t+1,m}\}$. We recall that $f_t(0)=0$ and $f_t(x)=sc_t+vc_t\,x$ for $x\ge 1$.

        <div class="tabella" markdown="0"><table>
        <tr>
        <th><span class="arithmatex">\(t\)</span></th>
        <th><span class="arithmatex">\(k\)</span></th>
        <th><span class="arithmatex">\({v}[t][k]\)</span></th>
        <th><span class="arithmatex">\({r}[t][k]\)</span></th>
        <th>Action</th>
        </tr>
        <tr>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td>0</td>
        <td><span class="arithmatex">\({v}[0][0]\leftarrow 0\)</span>, <span class="arithmatex">\({r}[0][0]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(+\infty\)</span></td>
        <td>0</td>
        <td><span class="arithmatex">\({v}[0][1]\leftarrow +\infty\)</span>, <span class="arithmatex">\({r}[0][1]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(+\infty\)</span></td>
        <td>0</td>
        <td><span class="arithmatex">\({v}[0][2]\leftarrow +\infty\)</span>, <span class="arithmatex">\({r}[0][2]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(+\infty\)</span></td>
        <td>0</td>
        <td><span class="arithmatex">\({v}[0][3]\leftarrow +\infty\)</span>, <span class="arithmatex">\({r}[0][3]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(+\infty\)</span></td>
        <td>0</td>
        <td><span class="arithmatex">\({v}[0][4]\leftarrow +\infty\)</span>, <span class="arithmatex">\({r}[0][4]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(+\infty\)</span></td>
        <td>0</td>
        <td><span class="arithmatex">\({v}[0][5]\leftarrow +\infty\)</span>, <span class="arithmatex">\({r}[0][5]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(+\infty\)</span></td>
        <td>0</td>
        <td><span class="arithmatex">\({v}[0][6]\leftarrow +\infty\)</span>, <span class="arithmatex">\({r}[0][6]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(11\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(\min\{{v}[0][1]{+}f_{1}(0),\allowbreak {v}[0][0]{+}f_{1}(1)\}{+}hc_{1}\cdot 0\)</span> <span class="arithmatex">\(=\min\{+\infty,\allowbreak 0{+}11\}{+}1\cdot 0=11\)</span>; first minimum at <span class="arithmatex">\(x=1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(13\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(\min\{{v}[0][2]{+}f_{1}(0),\allowbreak {v}[0][1]{+}f_{1}(1),\allowbreak {v}[0][0]{+}f_{1}(2)\}{+}hc_{1}\cdot 1\)</span> <span class="arithmatex">\(=\min\{+\infty,\allowbreak +\infty,\allowbreak 0{+}12\}{+}1\cdot 1=13\)</span>; first minimum at <span class="arithmatex">\(x=2\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(+\infty\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td>the candidates use the cells <span class="arithmatex">\({v}[0][1],\dots,{v}[0][3]\)</span>, which are all <span class="arithmatex">\(+\infty\)</span>: <span class="arithmatex">\({v}[1][2]\leftarrow +\infty\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(+\infty\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td>the candidates use the cells <span class="arithmatex">\({v}[0][2],\dots,{v}[0][4]\)</span>, which are all <span class="arithmatex">\(+\infty\)</span>: <span class="arithmatex">\({v}[1][3]\leftarrow +\infty\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(+\infty\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td>the candidates use the cells <span class="arithmatex">\({v}[0][3],\dots,{v}[0][5]\)</span>, which are all <span class="arithmatex">\(+\infty\)</span>: <span class="arithmatex">\({v}[1][4]\leftarrow +\infty\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(+\infty\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td>the candidates use the cells <span class="arithmatex">\({v}[0][4],\dots,{v}[0][6]\)</span>, which are all <span class="arithmatex">\(+\infty\)</span>: <span class="arithmatex">\({v}[1][5]\leftarrow +\infty\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(18\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(\min\{{v}[1][2]{+}f_{2}(0),\allowbreak {v}[1][1]{+}f_{2}(1),\allowbreak {v}[1][0]{+}f_{2}(2)\}{+}hc_{2}\cdot 0\)</span> <span class="arithmatex">\(=\min\{+\infty,\allowbreak 13{+}6,\allowbreak 11{+}7\}{+}1\cdot 0=18\)</span>; first minimum at <span class="arithmatex">\(x=2\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(20\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(\min\{{v}[1][3]{+}f_{2}(0),\allowbreak {v}[1][2]{+}f_{2}(1),\allowbreak {v}[1][1]{+}f_{2}(2),\allowbreak {v}[1][0]{+}f_{2}(3)\}{+}hc_{2}\cdot 1\)</span> <span class="arithmatex">\(=\min\{+\infty,\allowbreak +\infty,\allowbreak 13{+}7,\allowbreak 11{+}8\}{+}1\cdot 1=20\)</span>; first minimum at <span class="arithmatex">\(x=3\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(22\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(\min\{{v}[1][4]{+}f_{2}(0),\allowbreak {v}[1][3]{+}f_{2}(1),\allowbreak {v}[1][2]{+}f_{2}(2),\allowbreak {v}[1][1]{+}f_{2}(3),\allowbreak {v}[1][0]{+}f_{2}(4)\}{+}hc_{2}\cdot 2\)</span> <span class="arithmatex">\(=\min\{+\infty,\allowbreak +\infty,\allowbreak +\infty,\allowbreak 13{+}8,\allowbreak 11{+}9\}{+}1\cdot 2=22\)</span>; first minimum at <span class="arithmatex">\(x=4\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(25\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(\min\{{v}[1][5]{+}f_{2}(0),\allowbreak {v}[1][4]{+}f_{2}(1),\allowbreak {v}[1][3]{+}f_{2}(2),\allowbreak {v}[1][2]{+}f_{2}(3),\allowbreak {v}[1][1]{+}f_{2}(4)\}{+}hc_{2}\cdot 3\)</span> <span class="arithmatex">\(=\min\{+\infty,\allowbreak +\infty,\allowbreak +\infty,\allowbreak +\infty,\allowbreak 13{+}9\}{+}1\cdot 3=25\)</span>; first minimum at <span class="arithmatex">\(x=4\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(25\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(\min\{{v}[2][3]{+}f_{3}(0),\allowbreak {v}[2][2]{+}f_{3}(1),\allowbreak {v}[2][1]{+}f_{3}(2),\allowbreak {v}[2][0]{+}f_{3}(3)\}{+}hc_{3}\cdot 0\)</span> <span class="arithmatex">\(=\min\{25{+}0,\allowbreak 22{+}10,\allowbreak 20{+}12,\allowbreak 18{+}14\}{+}2\cdot 0=25\)</span>; first minimum at <span class="arithmatex">\(x=0\)</span></td>
        </tr>
        </table></div>

        These are the matrices ${v}$ and ${r}$ obtained during the execution of the DP algorithm (a dot marks a pair $(t,k)$ with $k>D_{t+1,m}$, which is not a state):

        $$
        \begin{array}{l|rrrrrrr}
        \hline {{v}[t][k]} & {0} & {1} & {2} & {3} & {4} & {5} & {6} \\
        \hline {t=0} & {0} & {+\infty} & {+\infty} & {+\infty} & {+\infty} & {+\infty} & {+\infty} \\
        {t=1} & {11} & {13} & {+\infty} & {+\infty} & {+\infty} & {+\infty} & {\cdot} \\
        {t=2} & {18} & {20} & {22} & {25} & {\cdot} & {\cdot} & {\cdot} \\
        {t=3} & {25} & {\cdot} & {\cdot} & {\cdot} & {\cdot} & {\cdot} & {\cdot} \\
        \hline
        \end{array}
        $$

        $$
        \begin{array}{l|rrrrrrr}
        \hline {{r}[t][k]} & {0} & {1} & {2} & {3} & {4} & {5} & {6} \\
        \hline {t=0} & {0} & {0} & {0} & {0} & {0} & {0} & {0} \\
        {t=1} & {1} & {2} & {0} & {0} & {0} & {0} & {\cdot} \\
        {t=2} & {2} & {3} & {4} & {4} & {\cdot} & {\cdot} & {\cdot} \\
        {t=3} & {0} & {\cdot} & {\cdot} & {\cdot} & {\cdot} & {\cdot} & {\cdot} \\
        \hline
        \end{array}
        $$

        The optimal value of the CLS instance is ${v}[3][0]=25$.

    2. Using the matrix ${r}$, we can reconstruct an optimal solution as follows:

        <div class="tabella" markdown="0"><table>
        <tr>
        <th>Iteration</th>
        <th><span class="arithmatex">\(t\)</span></th>
        <th><span class="arithmatex">\(k\)</span></th>
        <th><span class="arithmatex">\({r}[t][k]\)</span></th>
        <th><span class="arithmatex">\(x[1]\)</span></th>
        <th><span class="arithmatex">\(x[2]\)</span></th>
        <th><span class="arithmatex">\(x[3]\)</span></th>
        <th><span class="arithmatex">\(k\leftarrow k+d[t]-x[t]\)</span></th>
        </tr>
        <tr>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(t=3\)</span>, <span class="arithmatex">\(k=0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td>0</td>
        <td>0</td>
        <td class="cella-blu">0</td>
        <td><span class="arithmatex">\(k=0+3-0=3\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td>0</td>
        <td class="cella-blu">4</td>
        <td>0</td>
        <td><span class="arithmatex">\(k=3+2-4=1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td class="cella-blu">2</td>
        <td>4</td>
        <td>0</td>
        <td><span class="arithmatex">\(k=1+1-2=0\)</span></td>
        </tr>
        </table></div>

        Thus, the vector

        $$
        (2,\allowbreak 4,\allowbreak 0)
        $$

        is an optimal solution. The setups are in periods $1$, $2$, the inventories are $(s_1,\dots,s_{3})=(1,\allowbreak 3,\allowbreak 0)$, and the total cost is

        \begin{align*}
        &\underbrace{10+5}_{\text{setup}}+\underbrace{1\cdot 2+1\cdot 4+2\cdot 0}_{\text{production}}\\
        &\quad+\underbrace{1\cdot 1+1\cdot 3+2\cdot 0}_{\text{holding}}=15+6+4=25.
        \end{align*}

        The optimal value is

        $$
        {v}[3][0]=25.
        $$

<a id="esercizio-26-2"></a>

!!! esercizio "Exercise 26.2: Exercise 2: Capacitated Lot-Sizing Problem"

    Consider the following CLS instance with $m=4$ periods, where the demands, the setup costs, the variable production costs, the holding costs, and the capacities are:

    $$
    \begin{array}{l|rrrr}
    \hline {t} & {1} & {2} & {3} & {4} \\
    \hline {d_t} & {3} & {1} & {1} & {2} \\
    {sc_t} & {5} & {6} & {10} & {10} \\
    {vc_t} & {2} & {1} & {1} & {1} \\
    {hc_t} & {1} & {1} & {2} & {2} \\
    {cap_t} & {4} & {3} & {3} & {2} \\
    \hline
    \end{array}
    $$

    **Questions**

    1. Show the execution of the bottom-up DP algorithm by reporting, for each iteration, the values of the matrices ${v}$ and ${r}$.

    2. Using the matrix ${r}$, reconstruct an optimal solution $(x_1,x_2,\dots,x_m)$, and report the optimal value.

??? soluzione "Solution"

    1. Step-by-step execution of the bottom-up DP algorithm

        For each step of the DP algorithm, the table shows the values of $t$ and $k$, the cells ${v}[t][k]$ and ${r}[t][k]$, and the operation performed. The cells are computed for increasing values of $t$ and, for each fixed value of $t$, for increasing values of $k\in\{0,1,\dots,D_{t+1,m}\}$. We recall that $f_t(0)=0$ and $f_t(x)=sc_t+vc_t\,x$ for $x\ge 1$.

        <div class="tabella" markdown="0"><table>
        <tr>
        <th><span class="arithmatex">\(t\)</span></th>
        <th><span class="arithmatex">\(k\)</span></th>
        <th><span class="arithmatex">\({v}[t][k]\)</span></th>
        <th><span class="arithmatex">\({r}[t][k]\)</span></th>
        <th>Action</th>
        </tr>
        <tr>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td>0</td>
        <td><span class="arithmatex">\({v}[0][0]\leftarrow 0\)</span>, <span class="arithmatex">\({r}[0][0]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(+\infty\)</span></td>
        <td>0</td>
        <td><span class="arithmatex">\({v}[0][1]\leftarrow +\infty\)</span>, <span class="arithmatex">\({r}[0][1]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(+\infty\)</span></td>
        <td>0</td>
        <td><span class="arithmatex">\({v}[0][2]\leftarrow +\infty\)</span>, <span class="arithmatex">\({r}[0][2]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(+\infty\)</span></td>
        <td>0</td>
        <td><span class="arithmatex">\({v}[0][3]\leftarrow +\infty\)</span>, <span class="arithmatex">\({r}[0][3]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(+\infty\)</span></td>
        <td>0</td>
        <td><span class="arithmatex">\({v}[0][4]\leftarrow +\infty\)</span>, <span class="arithmatex">\({r}[0][4]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(+\infty\)</span></td>
        <td>0</td>
        <td><span class="arithmatex">\({v}[0][5]\leftarrow +\infty\)</span>, <span class="arithmatex">\({r}[0][5]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(+\infty\)</span></td>
        <td>0</td>
        <td><span class="arithmatex">\({v}[0][6]\leftarrow +\infty\)</span>, <span class="arithmatex">\({r}[0][6]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(7\)</span></td>
        <td><span class="arithmatex">\(+\infty\)</span></td>
        <td>0</td>
        <td><span class="arithmatex">\({v}[0][7]\leftarrow +\infty\)</span>, <span class="arithmatex">\({r}[0][7]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(11\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(\min\{{v}[0][3]{+}f_{1}(0),\allowbreak {v}[0][2]{+}f_{1}(1),\allowbreak {v}[0][1]{+}f_{1}(2),\allowbreak {v}[0][0]{+}f_{1}(3)\}{+}hc_{1}\cdot 0\)</span> <span class="arithmatex">\(=\min\{+\infty,\allowbreak +\infty,\allowbreak +\infty,\allowbreak 0{+}11\}{+}1\cdot 0=11\)</span>; first minimum at <span class="arithmatex">\(x=3\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(14\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(\min\{{v}[0][4]{+}f_{1}(0),\allowbreak {v}[0][3]{+}f_{1}(1),\allowbreak {v}[0][2]{+}f_{1}(2),\allowbreak {v}[0][1]{+}f_{1}(3),\allowbreak {v}[0][0]{+}f_{1}(4)\}{+}hc_{1}\cdot 1\)</span> <span class="arithmatex">\(=\min\{+\infty,\allowbreak +\infty,\allowbreak +\infty,\allowbreak +\infty,\allowbreak 0{+}13\}{+}1\cdot 1=14\)</span>; first minimum at <span class="arithmatex">\(x=4\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(+\infty\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td>the candidates use the cells <span class="arithmatex">\({v}[0][1],\dots,{v}[0][5]\)</span>, which are all <span class="arithmatex">\(+\infty\)</span>: <span class="arithmatex">\({v}[1][2]\leftarrow +\infty\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(+\infty\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td>the candidates use the cells <span class="arithmatex">\({v}[0][2],\dots,{v}[0][6]\)</span>, which are all <span class="arithmatex">\(+\infty\)</span>: <span class="arithmatex">\({v}[1][3]\leftarrow +\infty\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(+\infty\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td>the candidates use the cells <span class="arithmatex">\({v}[0][3],\dots,{v}[0][7]\)</span>, which are all <span class="arithmatex">\(+\infty\)</span>: <span class="arithmatex">\({v}[1][4]\leftarrow +\infty\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(14\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(\min\{{v}[1][1]{+}f_{2}(0),\allowbreak {v}[1][0]{+}f_{2}(1)\}{+}hc_{2}\cdot 0\)</span> <span class="arithmatex">\(=\min\{14{+}0,\allowbreak 11{+}7\}{+}1\cdot 0=14\)</span>; first minimum at <span class="arithmatex">\(x=0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(20\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(\min\{{v}[1][2]{+}f_{2}(0),\allowbreak {v}[1][1]{+}f_{2}(1),\allowbreak {v}[1][0]{+}f_{2}(2)\}{+}hc_{2}\cdot 1\)</span> <span class="arithmatex">\(=\min\{+\infty,\allowbreak 14{+}7,\allowbreak 11{+}8\}{+}1\cdot 1=20\)</span>; first minimum at <span class="arithmatex">\(x=2\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(22\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(\min\{{v}[1][3]{+}f_{2}(0),\allowbreak {v}[1][2]{+}f_{2}(1),\allowbreak {v}[1][1]{+}f_{2}(2),\allowbreak {v}[1][0]{+}f_{2}(3)\}{+}hc_{2}\cdot 2\)</span> <span class="arithmatex">\(=\min\{+\infty,\allowbreak +\infty,\allowbreak 14{+}8,\allowbreak 11{+}9\}{+}1\cdot 2=22\)</span>; first minimum at <span class="arithmatex">\(x=3\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(26\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(\min\{{v}[1][4]{+}f_{2}(0),\allowbreak {v}[1][3]{+}f_{2}(1),\allowbreak {v}[1][2]{+}f_{2}(2),\allowbreak {v}[1][1]{+}f_{2}(3)\}{+}hc_{2}\cdot 3\)</span> <span class="arithmatex">\(=\min\{+\infty,\allowbreak +\infty,\allowbreak +\infty,\allowbreak 14{+}9\}{+}1\cdot 3=26\)</span>; first minimum at <span class="arithmatex">\(x=3\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(20\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(\min\{{v}[2][1]{+}f_{3}(0),\allowbreak {v}[2][0]{+}f_{3}(1)\}{+}hc_{3}\cdot 0\)</span> <span class="arithmatex">\(=\min\{20{+}0,\allowbreak 14{+}11\}{+}2\cdot 0=20\)</span>; first minimum at <span class="arithmatex">\(x=0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(24\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(\min\{{v}[2][2]{+}f_{3}(0),\allowbreak {v}[2][1]{+}f_{3}(1),\allowbreak {v}[2][0]{+}f_{3}(2)\}{+}hc_{3}\cdot 1\)</span> <span class="arithmatex">\(=\min\{22{+}0,\allowbreak 20{+}11,\allowbreak 14{+}12\}{+}2\cdot 1=24\)</span>; first minimum at <span class="arithmatex">\(x=0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(30\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(\min\{{v}[2][3]{+}f_{3}(0),\allowbreak {v}[2][2]{+}f_{3}(1),\allowbreak {v}[2][1]{+}f_{3}(2),\allowbreak {v}[2][0]{+}f_{3}(3)\}{+}hc_{3}\cdot 2\)</span> <span class="arithmatex">\(=\min\{26{+}0,\allowbreak 22{+}11,\allowbreak 20{+}12,\allowbreak 14{+}13\}{+}2\cdot 2=30\)</span>; first minimum at <span class="arithmatex">\(x=0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(30\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(\min\{{v}[3][2]{+}f_{4}(0),\allowbreak {v}[3][1]{+}f_{4}(1),\allowbreak {v}[3][0]{+}f_{4}(2)\}{+}hc_{4}\cdot 0\)</span> <span class="arithmatex">\(=\min\{30{+}0,\allowbreak 24{+}11,\allowbreak 20{+}12\}{+}2\cdot 0=30\)</span>; first minimum at <span class="arithmatex">\(x=0\)</span></td>
        </tr>
        </table></div>

        These are the matrices ${v}$ and ${r}$ obtained during the execution of the DP algorithm (a dot marks a pair $(t,k)$ with $k>D_{t+1,m}$, which is not a state):

        $$
        \begin{array}{l|rrrrrrrr}
        \hline {{v}[t][k]} & {0} & {1} & {2} & {3} & {4} & {5} & {6} & {7} \\
        \hline {t=0} & {0} & {+\infty} & {+\infty} & {+\infty} & {+\infty} & {+\infty} & {+\infty} & {+\infty} \\
        {t=1} & {11} & {14} & {+\infty} & {+\infty} & {+\infty} & {\cdot} & {\cdot} & {\cdot} \\
        {t=2} & {14} & {20} & {22} & {26} & {\cdot} & {\cdot} & {\cdot} & {\cdot} \\
        {t=3} & {20} & {24} & {30} & {\cdot} & {\cdot} & {\cdot} & {\cdot} & {\cdot} \\
        {t=4} & {30} & {\cdot} & {\cdot} & {\cdot} & {\cdot} & {\cdot} & {\cdot} & {\cdot} \\
        \hline
        \end{array}
        $$

        $$
        \begin{array}{l|rrrrrrrr}
        \hline {{r}[t][k]} & {0} & {1} & {2} & {3} & {4} & {5} & {6} & {7} \\
        \hline {t=0} & {0} & {0} & {0} & {0} & {0} & {0} & {0} & {0} \\
        {t=1} & {3} & {4} & {0} & {0} & {0} & {\cdot} & {\cdot} & {\cdot} \\
        {t=2} & {0} & {2} & {3} & {3} & {\cdot} & {\cdot} & {\cdot} & {\cdot} \\
        {t=3} & {0} & {0} & {0} & {\cdot} & {\cdot} & {\cdot} & {\cdot} & {\cdot} \\
        {t=4} & {0} & {\cdot} & {\cdot} & {\cdot} & {\cdot} & {\cdot} & {\cdot} & {\cdot} \\
        \hline
        \end{array}
        $$

        The optimal value of the CLS instance is ${v}[4][0]=30$.

    2. Using the matrix ${r}$, we can reconstruct an optimal solution as follows:

        <div class="tabella" markdown="0"><table>
        <tr>
        <th>Iteration</th>
        <th><span class="arithmatex">\(t\)</span></th>
        <th><span class="arithmatex">\(k\)</span></th>
        <th><span class="arithmatex">\({r}[t][k]\)</span></th>
        <th><span class="arithmatex">\(x[1]\)</span></th>
        <th><span class="arithmatex">\(x[2]\)</span></th>
        <th><span class="arithmatex">\(x[3]\)</span></th>
        <th><span class="arithmatex">\(x[4]\)</span></th>
        <th><span class="arithmatex">\(k\leftarrow k+d[t]-x[t]\)</span></th>
        </tr>
        <tr>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(t=4\)</span>, <span class="arithmatex">\(k=0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td class="cella-blu">0</td>
        <td><span class="arithmatex">\(k=0+2-0=2\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td>0</td>
        <td>0</td>
        <td class="cella-blu">0</td>
        <td>0</td>
        <td><span class="arithmatex">\(k=2+1-0=3\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td>0</td>
        <td class="cella-blu">3</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(k=3+1-3=1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td class="cella-blu">4</td>
        <td>3</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(k=1+3-4=0\)</span></td>
        </tr>
        </table></div>

        Thus, the vector

        $$
        (4,\allowbreak 3,\allowbreak 0,\allowbreak 0)
        $$

        is an optimal solution. The setups are in periods $1$, $2$, the inventories are $(s_1,\dots,s_{4})=(1,\allowbreak 3,\allowbreak 2,\allowbreak 0)$, and the total cost is

        \begin{align*}
        &\underbrace{5+6}_{\text{setup}}+\underbrace{2\cdot 4+1\cdot 3+1\cdot 0+1\cdot 0}_{\text{production}}\\
        &\quad+\underbrace{1\cdot 1+1\cdot 3+2\cdot 2+2\cdot 0}_{\text{holding}}=11+11+8=30.
        \end{align*}

        The optimal value is

        $$
        {v}[4][0]=30.
        $$
