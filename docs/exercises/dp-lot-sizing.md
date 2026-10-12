---
title: "Exercises · Dynamic programming for lot sizing"
---

# Exercises · Dynamic programming for lot sizing

<div class="info-capitolo" markdown>

**Exercises · Chapter 22** · each solution opens with a click · [:material-book-open-variant: Chapter 22: Lot sizing](../dynamic-programming/dp-lot-sizing/index.md) · [:material-file-pdf-box: Exercises, volume 3 (PDF)](../pdf/exercises-3-dynamic-programming.pdf)

</div>

<a id="esercizio-22-1"></a>

!!! esercizio "Exercise 22.1: Exercise 1: Uncapacitated Lot-Sizing Problem"

    Consider the following ULS instance with $m=4$ periods, where the demands, the setup costs, the variable production costs, and the holding costs are:

    $$
    \begin{array}{l|rrrr}
    \hline {t} & {1} & {2} & {3} & {4} \\
    \hline {d_t} & {30} & {10} & {40} & {10} \\
    {sc_t} & {50} & {80} & {70} & {60} \\
    {vc_t} & {2} & {3} & {1} & {2} \\
    {hc_t} & {1} & {2} & {2} & {1} \\
    \hline
    \end{array}
    $$

    **Questions**

    1. Show the execution of the bottom-up DP algorithm by reporting, for each iteration, the values of the matrix ${c}$, of the vector ${v}$, and of the vector ${r}$.

    2. Using the vector ${r}$, reconstruct an optimal solution $(x_1,x_2,\dots,x_m)$, and report the optimal value.

??? soluzione "Solution"

    1. Step-by-step execution of the bottom-up DP algorithm

        First, the matrix ${c}$ is computed. For each step, the table shows the values of $j$ and $t$, the current value of $\mathit{u}$, the cell ${c}[j][t]$, and the operation performed; the cell ${c}[j][t]$ is highlighted in <mark>blue</mark> when assigned.

        <div class="tabella" markdown="0"><table>
        <tr>
        <th><span class="arithmatex">\(j\)</span></th>
        <th><span class="arithmatex">\(t\)</span></th>
        <th><span class="arithmatex">\(\mathit{u}\)</span></th>
        <th><span class="arithmatex">\({c}[j][t]\)</span></th>
        <th>Action</th>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td class="cella-blu"><span class="arithmatex">\(110\)</span></td>
        <td><span class="arithmatex">\(\mathit{u}\leftarrow vc[1]=2\)</span>, <span class="arithmatex">\(\mathit{g}\leftarrow sc[1]{+}vc[1]\cdot d[1]=50{+}2\cdot 30=110\)</span>, <span class="arithmatex">\({c}[1][1]\leftarrow 110\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td class="cella-blu"><span class="arithmatex">\(140\)</span></td>
        <td><span class="arithmatex">\(\mathit{u}\leftarrow \mathit{u}{+}hc[1]=2{+}1=3\)</span>, <span class="arithmatex">\(\mathit{g}\leftarrow \mathit{g}{+}\mathit{u}\cdot d[2]=110{+}3\cdot 10=140\)</span>, <span class="arithmatex">\({c}[1][2]\leftarrow 140\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td class="cella-blu"><span class="arithmatex">\(340\)</span></td>
        <td><span class="arithmatex">\(\mathit{u}\leftarrow \mathit{u}{+}hc[2]=3{+}2=5\)</span>, <span class="arithmatex">\(\mathit{g}\leftarrow \mathit{g}{+}\mathit{u}\cdot d[3]=140{+}5\cdot 40=340\)</span>, <span class="arithmatex">\({c}[1][3]\leftarrow 340\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(7\)</span></td>
        <td class="cella-blu"><span class="arithmatex">\(410\)</span></td>
        <td><span class="arithmatex">\(\mathit{u}\leftarrow \mathit{u}{+}hc[3]=5{+}2=7\)</span>, <span class="arithmatex">\(\mathit{g}\leftarrow \mathit{g}{+}\mathit{u}\cdot d[4]=340{+}7\cdot 10=410\)</span>, <span class="arithmatex">\({c}[1][4]\leftarrow 410\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td class="cella-blu"><span class="arithmatex">\(110\)</span></td>
        <td><span class="arithmatex">\(\mathit{u}\leftarrow vc[2]=3\)</span>, <span class="arithmatex">\(\mathit{g}\leftarrow sc[2]{+}vc[2]\cdot d[2]=80{+}3\cdot 10=110\)</span>, <span class="arithmatex">\({c}[2][2]\leftarrow 110\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td class="cella-blu"><span class="arithmatex">\(310\)</span></td>
        <td><span class="arithmatex">\(\mathit{u}\leftarrow \mathit{u}{+}hc[2]=3{+}2=5\)</span>, <span class="arithmatex">\(\mathit{g}\leftarrow \mathit{g}{+}\mathit{u}\cdot d[3]=110{+}5\cdot 40=310\)</span>, <span class="arithmatex">\({c}[2][3]\leftarrow 310\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(7\)</span></td>
        <td class="cella-blu"><span class="arithmatex">\(380\)</span></td>
        <td><span class="arithmatex">\(\mathit{u}\leftarrow \mathit{u}{+}hc[3]=5{+}2=7\)</span>, <span class="arithmatex">\(\mathit{g}\leftarrow \mathit{g}{+}\mathit{u}\cdot d[4]=310{+}7\cdot 10=380\)</span>, <span class="arithmatex">\({c}[2][4]\leftarrow 380\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td class="cella-blu"><span class="arithmatex">\(110\)</span></td>
        <td><span class="arithmatex">\(\mathit{u}\leftarrow vc[3]=1\)</span>, <span class="arithmatex">\(\mathit{g}\leftarrow sc[3]{+}vc[3]\cdot d[3]=70{+}1\cdot 40=110\)</span>, <span class="arithmatex">\({c}[3][3]\leftarrow 110\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td class="cella-blu"><span class="arithmatex">\(140\)</span></td>
        <td><span class="arithmatex">\(\mathit{u}\leftarrow \mathit{u}{+}hc[3]=1{+}2=3\)</span>, <span class="arithmatex">\(\mathit{g}\leftarrow \mathit{g}{+}\mathit{u}\cdot d[4]=110{+}3\cdot 10=140\)</span>, <span class="arithmatex">\({c}[3][4]\leftarrow 140\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td class="cella-blu"><span class="arithmatex">\(80\)</span></td>
        <td><span class="arithmatex">\(\mathit{u}\leftarrow vc[4]=2\)</span>, <span class="arithmatex">\(\mathit{g}\leftarrow sc[4]{+}vc[4]\cdot d[4]=60{+}2\cdot 10=80\)</span>, <span class="arithmatex">\({c}[4][4]\leftarrow 80\)</span></td>
        </tr>
        </table></div>

        This is the matrix ${c}$:

        $$
        \begin{array}{l|rrrr}
        \hline {{c}[j][t]} & {t=1} & {t=2} & {t=3} & {t=4} \\
        \hline {j=1} & {110} & {140} & {340} & {410} \\
        {j=2} & {-} & {110} & {310} & {380} \\
        {j=3} & {-} & {-} & {110} & {140} \\
        {j=4} & {-} & {-} & {-} & {80} \\
        \hline
        \end{array}
        $$

        For each step of the DP algorithm, the table shows the values of $t$ and $j$, the cells ${v}[t]$ and ${r}[t]$, the current value of $\mathit{b}$, and the current value of $\mathit{a}$. The cell of $\mathit{b}$ is highlighted in <mark>red</mark> when updated; the cell of $\mathit{a}$ is highlighted in <mark>blue</mark> when updated; the cells of ${v}[t]$ and ${r}[t]$ are highlighted in <mark>blue</mark> when assigned.

        <div class="tabella" markdown="0"><table>
        <tr>
        <th><span class="arithmatex">\(t\)</span></th>
        <th><span class="arithmatex">\(j\)</span></th>
        <th><span class="arithmatex">\({v}[t]\)</span></th>
        <th><span class="arithmatex">\({r}[t]\)</span></th>
        <th><span class="arithmatex">\(\mathit{b}\)</span></th>
        <th><span class="arithmatex">\(\mathit{a}\)</span></th>
        <th>Action</th>
        </tr>
        <tr>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td class="cella-blu">0</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\({v}[0]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(+\infty\)</span></td>
        <td>0</td>
        <td><span class="arithmatex">\(\mathit{b}\leftarrow +\infty\)</span>, <span class="arithmatex">\(\mathit{a}\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>1</td>
        <td>1</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td class="cella-rossa">110</td>
        <td class="cella-blu">1</td>
        <td><span class="arithmatex">\({v}[0]{+}{c}[1][1]=0{+}110=110<+\infty\)</span>: <span class="arithmatex">\(\mathit{b}\leftarrow 110\)</span>, <span class="arithmatex">\(\mathit{a}\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td class="cella-blu">110</td>
        <td class="cella-blu">1</td>
        <td>110</td>
        <td>1</td>
        <td><span class="arithmatex">\({v}[1]\leftarrow \mathit{b}=110\)</span>, <span class="arithmatex">\({r}[1]\leftarrow \mathit{a}=1\)</span></td>
        </tr>
        <tr>
        <td></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(+\infty\)</span></td>
        <td>0</td>
        <td><span class="arithmatex">\(\mathit{b}\leftarrow +\infty\)</span>, <span class="arithmatex">\(\mathit{a}\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>2</td>
        <td>1</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td class="cella-rossa">140</td>
        <td class="cella-blu">1</td>
        <td><span class="arithmatex">\({v}[0]{+}{c}[1][2]=0{+}140=140<+\infty\)</span>: <span class="arithmatex">\(\mathit{b}\leftarrow 140\)</span>, <span class="arithmatex">\(\mathit{a}\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td></td>
        <td>2</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>140</td>
        <td>1</td>
        <td><span class="arithmatex">\({v}[1]{+}{c}[2][2]=110{+}110=220>140\)</span>: no update</td>
        </tr>
        <tr>
        <td></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td class="cella-blu">140</td>
        <td class="cella-blu">1</td>
        <td>140</td>
        <td>1</td>
        <td><span class="arithmatex">\({v}[2]\leftarrow \mathit{b}=140\)</span>, <span class="arithmatex">\({r}[2]\leftarrow \mathit{a}=1\)</span></td>
        </tr>
        <tr>
        <td></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(+\infty\)</span></td>
        <td>0</td>
        <td><span class="arithmatex">\(\mathit{b}\leftarrow +\infty\)</span>, <span class="arithmatex">\(\mathit{a}\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>3</td>
        <td>1</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td class="cella-rossa">340</td>
        <td class="cella-blu">1</td>
        <td><span class="arithmatex">\({v}[0]{+}{c}[1][3]=0{+}340=340<+\infty\)</span>: <span class="arithmatex">\(\mathit{b}\leftarrow 340\)</span>, <span class="arithmatex">\(\mathit{a}\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td></td>
        <td>2</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>340</td>
        <td>1</td>
        <td><span class="arithmatex">\({v}[1]{+}{c}[2][3]=110{+}310=420>340\)</span>: no update</td>
        </tr>
        <tr>
        <td></td>
        <td>3</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td class="cella-rossa">250</td>
        <td class="cella-blu">3</td>
        <td><span class="arithmatex">\({v}[2]{+}{c}[3][3]=140{+}110=250<340\)</span>: <span class="arithmatex">\(\mathit{b}\leftarrow 250\)</span>, <span class="arithmatex">\(\mathit{a}\leftarrow 3\)</span></td>
        </tr>
        <tr>
        <td></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td class="cella-blu">250</td>
        <td class="cella-blu">3</td>
        <td>250</td>
        <td>3</td>
        <td><span class="arithmatex">\({v}[3]\leftarrow \mathit{b}=250\)</span>, <span class="arithmatex">\({r}[3]\leftarrow \mathit{a}=3\)</span></td>
        </tr>
        <tr>
        <td></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(+\infty\)</span></td>
        <td>0</td>
        <td><span class="arithmatex">\(\mathit{b}\leftarrow +\infty\)</span>, <span class="arithmatex">\(\mathit{a}\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>4</td>
        <td>1</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td class="cella-rossa">410</td>
        <td class="cella-blu">1</td>
        <td><span class="arithmatex">\({v}[0]{+}{c}[1][4]=0{+}410=410<+\infty\)</span>: <span class="arithmatex">\(\mathit{b}\leftarrow 410\)</span>, <span class="arithmatex">\(\mathit{a}\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td></td>
        <td>2</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>410</td>
        <td>1</td>
        <td><span class="arithmatex">\({v}[1]{+}{c}[2][4]=110{+}380=490>410\)</span>: no update</td>
        </tr>
        <tr>
        <td></td>
        <td>3</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td class="cella-rossa">280</td>
        <td class="cella-blu">3</td>
        <td><span class="arithmatex">\({v}[2]{+}{c}[3][4]=140{+}140=280<410\)</span>: <span class="arithmatex">\(\mathit{b}\leftarrow 280\)</span>, <span class="arithmatex">\(\mathit{a}\leftarrow 3\)</span></td>
        </tr>
        <tr>
        <td></td>
        <td>4</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>280</td>
        <td>3</td>
        <td><span class="arithmatex">\({v}[3]{+}{c}[4][4]=250{+}80=330>280\)</span>: no update</td>
        </tr>
        <tr>
        <td></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td class="cella-blu">280</td>
        <td class="cella-blu">3</td>
        <td>280</td>
        <td>3</td>
        <td><span class="arithmatex">\({v}[4]\leftarrow \mathit{b}=280\)</span>, <span class="arithmatex">\({r}[4]\leftarrow \mathit{a}=3\)</span></td>
        </tr>
        </table></div>

        This is the vector ${v}$ after the execution of the DP algorithm:

        $$
        \begin{array}{c|ccccc}
        \hline  & {t=0} & {t=1} & {t=2} & {t=3} & {t=4} \\
        \hline {{v}[t]} & 0 & 110 & 140 & 250 & 280 \\
        \hline
        \end{array}
        $$

        This is the vector ${r}$ after the execution of the DP algorithm:

        $$
        \begin{array}{c|cccc}
        \hline  & {t=1} & {t=2} & {t=3} & {t=4} \\
        \hline {{r}[t]} & 1 & 1 & 3 & 3 \\
        \hline
        \end{array}
        $$

    2. We have the following vector ${r}$:

        $$
        \begin{array}{c|cccc}
        \hline  & {t=1} & {t=2} & {t=3} & {t=4} \\
        \hline {{r}[t]} & 1 & 1 & 3 & 3 \\
        \hline
        \end{array}
        $$

        We can reconstruct an optimal solution as follows:

        <div class="tabella" markdown="0"><table>
        <tr>
        <th>Iteration</th>
        <th><span class="arithmatex">\(t\)</span></th>
        <th><span class="arithmatex">\({r}[t]\)</span></th>
        <th><span class="arithmatex">\(x[1]\)</span></th>
        <th><span class="arithmatex">\(x[2]\)</span></th>
        <th><span class="arithmatex">\(x[3]\)</span></th>
        <th><span class="arithmatex">\(x[4]\)</span></th>
        <th><span class="arithmatex">\(t\leftarrow {r}[t]-1\)</span></th>
        </tr>
        <tr>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(t=4\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td>0</td>
        <td>0</td>
        <td class="cella-blu">50</td>
        <td>0</td>
        <td><span class="arithmatex">\(t=3-1=2\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td class="cella-blu">40</td>
        <td>0</td>
        <td>50</td>
        <td>0</td>
        <td><span class="arithmatex">\(t=1-1=0\)</span></td>
        </tr>
        </table></div>

        - $t=4$, ${r}[4]=3$: the last production run of periods $1,\dots,4$ is in period $3$ and covers the demands of periods $3,\dots,4$, so $x[3]\leftarrow d_{3}+d_{4}=40+10=50$

        - $t=2$, ${r}[2]=1$: the last production run of periods $1,\dots,2$ is in period $1$ and covers the demands of periods $1,\dots,2$, so $x[1]\leftarrow d_{1}+d_{2}=30+10=40$

        Thus, the vector

        $$
        (40,\allowbreak 0,\allowbreak 50,\allowbreak 0)
        $$

        is an optimal solution. The setups are in periods $1$, $3$, the inventories are $(s_1,\dots,s_{4})=(10,\allowbreak 0,\allowbreak 10,\allowbreak 0)$, and the total cost is

        \begin{align*}
        &\underbrace{50+70}_{\text{setup}}+\underbrace{2\cdot 40+3\cdot 0+1\cdot 50+2\cdot 0}_{\text{production}}\\
        &\quad+\underbrace{1\cdot 10+2\cdot 0+2\cdot 10+1\cdot 0}_{\text{holding}}=120+130+30=280.
        \end{align*}

        The optimal value is

        $$
        {v}[4]=280.
        $$

<a id="esercizio-22-2"></a>

!!! esercizio "Exercise 22.2: Exercise 2: Uncapacitated Lot-Sizing Problem"

    Consider the following ULS instance with $m=4$ periods, where the demands, the setup costs, the variable production costs, and the holding costs are:

    $$
    \begin{array}{l|rrrr}
    \hline {t} & {1} & {2} & {3} & {4} \\
    \hline {d_t} & {30} & {40} & {10} & {20} \\
    {sc_t} & {50} & {80} & {80} & {50} \\
    {vc_t} & {1} & {3} & {2} & {1} \\
    {hc_t} & {1} & {1} & {1} & {2} \\
    \hline
    \end{array}
    $$

    **Questions**

    1. Show the execution of the bottom-up DP algorithm by reporting, for each iteration, the values of the matrix ${c}$, of the vector ${v}$, and of the vector ${r}$.

    2. Using the vector ${r}$, reconstruct an optimal solution $(x_1,x_2,\dots,x_m)$, and report the optimal value.

??? soluzione "Solution"

    1. Step-by-step execution of the bottom-up DP algorithm

        First, the matrix ${c}$ is computed. For each step, the table shows the values of $j$ and $t$, the current value of $\mathit{u}$, the cell ${c}[j][t]$, and the operation performed; the cell ${c}[j][t]$ is highlighted in <mark>blue</mark> when assigned.

        <div class="tabella" markdown="0"><table>
        <tr>
        <th><span class="arithmatex">\(j\)</span></th>
        <th><span class="arithmatex">\(t\)</span></th>
        <th><span class="arithmatex">\(\mathit{u}\)</span></th>
        <th><span class="arithmatex">\({c}[j][t]\)</span></th>
        <th>Action</th>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td class="cella-blu"><span class="arithmatex">\(80\)</span></td>
        <td><span class="arithmatex">\(\mathit{u}\leftarrow vc[1]=1\)</span>, <span class="arithmatex">\(\mathit{g}\leftarrow sc[1]{+}vc[1]\cdot d[1]=50{+}1\cdot 30=80\)</span>, <span class="arithmatex">\({c}[1][1]\leftarrow 80\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td class="cella-blu"><span class="arithmatex">\(160\)</span></td>
        <td><span class="arithmatex">\(\mathit{u}\leftarrow \mathit{u}{+}hc[1]=1{+}1=2\)</span>, <span class="arithmatex">\(\mathit{g}\leftarrow \mathit{g}{+}\mathit{u}\cdot d[2]=80{+}2\cdot 40=160\)</span>, <span class="arithmatex">\({c}[1][2]\leftarrow 160\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td class="cella-blu"><span class="arithmatex">\(190\)</span></td>
        <td><span class="arithmatex">\(\mathit{u}\leftarrow \mathit{u}{+}hc[2]=2{+}1=3\)</span>, <span class="arithmatex">\(\mathit{g}\leftarrow \mathit{g}{+}\mathit{u}\cdot d[3]=160{+}3\cdot 10=190\)</span>, <span class="arithmatex">\({c}[1][3]\leftarrow 190\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td class="cella-blu"><span class="arithmatex">\(270\)</span></td>
        <td><span class="arithmatex">\(\mathit{u}\leftarrow \mathit{u}{+}hc[3]=3{+}1=4\)</span>, <span class="arithmatex">\(\mathit{g}\leftarrow \mathit{g}{+}\mathit{u}\cdot d[4]=190{+}4\cdot 20=270\)</span>, <span class="arithmatex">\({c}[1][4]\leftarrow 270\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td class="cella-blu"><span class="arithmatex">\(200\)</span></td>
        <td><span class="arithmatex">\(\mathit{u}\leftarrow vc[2]=3\)</span>, <span class="arithmatex">\(\mathit{g}\leftarrow sc[2]{+}vc[2]\cdot d[2]=80{+}3\cdot 40=200\)</span>, <span class="arithmatex">\({c}[2][2]\leftarrow 200\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td class="cella-blu"><span class="arithmatex">\(240\)</span></td>
        <td><span class="arithmatex">\(\mathit{u}\leftarrow \mathit{u}{+}hc[2]=3{+}1=4\)</span>, <span class="arithmatex">\(\mathit{g}\leftarrow \mathit{g}{+}\mathit{u}\cdot d[3]=200{+}4\cdot 10=240\)</span>, <span class="arithmatex">\({c}[2][3]\leftarrow 240\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td class="cella-blu"><span class="arithmatex">\(340\)</span></td>
        <td><span class="arithmatex">\(\mathit{u}\leftarrow \mathit{u}{+}hc[3]=4{+}1=5\)</span>, <span class="arithmatex">\(\mathit{g}\leftarrow \mathit{g}{+}\mathit{u}\cdot d[4]=240{+}5\cdot 20=340\)</span>, <span class="arithmatex">\({c}[2][4]\leftarrow 340\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td class="cella-blu"><span class="arithmatex">\(100\)</span></td>
        <td><span class="arithmatex">\(\mathit{u}\leftarrow vc[3]=2\)</span>, <span class="arithmatex">\(\mathit{g}\leftarrow sc[3]{+}vc[3]\cdot d[3]=80{+}2\cdot 10=100\)</span>, <span class="arithmatex">\({c}[3][3]\leftarrow 100\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td class="cella-blu"><span class="arithmatex">\(160\)</span></td>
        <td><span class="arithmatex">\(\mathit{u}\leftarrow \mathit{u}{+}hc[3]=2{+}1=3\)</span>, <span class="arithmatex">\(\mathit{g}\leftarrow \mathit{g}{+}\mathit{u}\cdot d[4]=100{+}3\cdot 20=160\)</span>, <span class="arithmatex">\({c}[3][4]\leftarrow 160\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td class="cella-blu"><span class="arithmatex">\(70\)</span></td>
        <td><span class="arithmatex">\(\mathit{u}\leftarrow vc[4]=1\)</span>, <span class="arithmatex">\(\mathit{g}\leftarrow sc[4]{+}vc[4]\cdot d[4]=50{+}1\cdot 20=70\)</span>, <span class="arithmatex">\({c}[4][4]\leftarrow 70\)</span></td>
        </tr>
        </table></div>

        This is the matrix ${c}$:

        $$
        \begin{array}{l|rrrr}
        \hline {{c}[j][t]} & {t=1} & {t=2} & {t=3} & {t=4} \\
        \hline {j=1} & {80} & {160} & {190} & {270} \\
        {j=2} & {-} & {200} & {240} & {340} \\
        {j=3} & {-} & {-} & {100} & {160} \\
        {j=4} & {-} & {-} & {-} & {70} \\
        \hline
        \end{array}
        $$

        For each step of the DP algorithm, the table shows the values of $t$ and $j$, the cells ${v}[t]$ and ${r}[t]$, the current value of $\mathit{b}$, and the current value of $\mathit{a}$. The cell of $\mathit{b}$ is highlighted in <mark>red</mark> when updated; the cell of $\mathit{a}$ is highlighted in <mark>blue</mark> when updated; the cells of ${v}[t]$ and ${r}[t]$ are highlighted in <mark>blue</mark> when assigned.

        <div class="tabella" markdown="0"><table>
        <tr>
        <th><span class="arithmatex">\(t\)</span></th>
        <th><span class="arithmatex">\(j\)</span></th>
        <th><span class="arithmatex">\({v}[t]\)</span></th>
        <th><span class="arithmatex">\({r}[t]\)</span></th>
        <th><span class="arithmatex">\(\mathit{b}\)</span></th>
        <th><span class="arithmatex">\(\mathit{a}\)</span></th>
        <th>Action</th>
        </tr>
        <tr>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td class="cella-blu">0</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\({v}[0]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(+\infty\)</span></td>
        <td>0</td>
        <td><span class="arithmatex">\(\mathit{b}\leftarrow +\infty\)</span>, <span class="arithmatex">\(\mathit{a}\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>1</td>
        <td>1</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td class="cella-rossa">80</td>
        <td class="cella-blu">1</td>
        <td><span class="arithmatex">\({v}[0]{+}{c}[1][1]=0{+}80=80<+\infty\)</span>: <span class="arithmatex">\(\mathit{b}\leftarrow 80\)</span>, <span class="arithmatex">\(\mathit{a}\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td class="cella-blu">80</td>
        <td class="cella-blu">1</td>
        <td>80</td>
        <td>1</td>
        <td><span class="arithmatex">\({v}[1]\leftarrow \mathit{b}=80\)</span>, <span class="arithmatex">\({r}[1]\leftarrow \mathit{a}=1\)</span></td>
        </tr>
        <tr>
        <td></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(+\infty\)</span></td>
        <td>0</td>
        <td><span class="arithmatex">\(\mathit{b}\leftarrow +\infty\)</span>, <span class="arithmatex">\(\mathit{a}\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>2</td>
        <td>1</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td class="cella-rossa">160</td>
        <td class="cella-blu">1</td>
        <td><span class="arithmatex">\({v}[0]{+}{c}[1][2]=0{+}160=160<+\infty\)</span>: <span class="arithmatex">\(\mathit{b}\leftarrow 160\)</span>, <span class="arithmatex">\(\mathit{a}\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td></td>
        <td>2</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>160</td>
        <td>1</td>
        <td><span class="arithmatex">\({v}[1]{+}{c}[2][2]=80{+}200=280>160\)</span>: no update</td>
        </tr>
        <tr>
        <td></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td class="cella-blu">160</td>
        <td class="cella-blu">1</td>
        <td>160</td>
        <td>1</td>
        <td><span class="arithmatex">\({v}[2]\leftarrow \mathit{b}=160\)</span>, <span class="arithmatex">\({r}[2]\leftarrow \mathit{a}=1\)</span></td>
        </tr>
        <tr>
        <td></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(+\infty\)</span></td>
        <td>0</td>
        <td><span class="arithmatex">\(\mathit{b}\leftarrow +\infty\)</span>, <span class="arithmatex">\(\mathit{a}\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>3</td>
        <td>1</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td class="cella-rossa">190</td>
        <td class="cella-blu">1</td>
        <td><span class="arithmatex">\({v}[0]{+}{c}[1][3]=0{+}190=190<+\infty\)</span>: <span class="arithmatex">\(\mathit{b}\leftarrow 190\)</span>, <span class="arithmatex">\(\mathit{a}\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td></td>
        <td>2</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>190</td>
        <td>1</td>
        <td><span class="arithmatex">\({v}[1]{+}{c}[2][3]=80{+}240=320>190\)</span>: no update</td>
        </tr>
        <tr>
        <td></td>
        <td>3</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>190</td>
        <td>1</td>
        <td><span class="arithmatex">\({v}[2]{+}{c}[3][3]=160{+}100=260>190\)</span>: no update</td>
        </tr>
        <tr>
        <td></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td class="cella-blu">190</td>
        <td class="cella-blu">1</td>
        <td>190</td>
        <td>1</td>
        <td><span class="arithmatex">\({v}[3]\leftarrow \mathit{b}=190\)</span>, <span class="arithmatex">\({r}[3]\leftarrow \mathit{a}=1\)</span></td>
        </tr>
        <tr>
        <td></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(+\infty\)</span></td>
        <td>0</td>
        <td><span class="arithmatex">\(\mathit{b}\leftarrow +\infty\)</span>, <span class="arithmatex">\(\mathit{a}\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>4</td>
        <td>1</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td class="cella-rossa">270</td>
        <td class="cella-blu">1</td>
        <td><span class="arithmatex">\({v}[0]{+}{c}[1][4]=0{+}270=270<+\infty\)</span>: <span class="arithmatex">\(\mathit{b}\leftarrow 270\)</span>, <span class="arithmatex">\(\mathit{a}\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td></td>
        <td>2</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>270</td>
        <td>1</td>
        <td><span class="arithmatex">\({v}[1]{+}{c}[2][4]=80{+}340=420>270\)</span>: no update</td>
        </tr>
        <tr>
        <td></td>
        <td>3</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>270</td>
        <td>1</td>
        <td><span class="arithmatex">\({v}[2]{+}{c}[3][4]=160{+}160=320>270\)</span>: no update</td>
        </tr>
        <tr>
        <td></td>
        <td>4</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td class="cella-rossa">260</td>
        <td class="cella-blu">4</td>
        <td><span class="arithmatex">\({v}[3]{+}{c}[4][4]=190{+}70=260<270\)</span>: <span class="arithmatex">\(\mathit{b}\leftarrow 260\)</span>, <span class="arithmatex">\(\mathit{a}\leftarrow 4\)</span></td>
        </tr>
        <tr>
        <td></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td class="cella-blu">260</td>
        <td class="cella-blu">4</td>
        <td>260</td>
        <td>4</td>
        <td><span class="arithmatex">\({v}[4]\leftarrow \mathit{b}=260\)</span>, <span class="arithmatex">\({r}[4]\leftarrow \mathit{a}=4\)</span></td>
        </tr>
        </table></div>

        This is the vector ${v}$ after the execution of the DP algorithm:

        $$
        \begin{array}{c|ccccc}
        \hline  & {t=0} & {t=1} & {t=2} & {t=3} & {t=4} \\
        \hline {{v}[t]} & 0 & 80 & 160 & 190 & 260 \\
        \hline
        \end{array}
        $$

        This is the vector ${r}$ after the execution of the DP algorithm:

        $$
        \begin{array}{c|cccc}
        \hline  & {t=1} & {t=2} & {t=3} & {t=4} \\
        \hline {{r}[t]} & 1 & 1 & 1 & 4 \\
        \hline
        \end{array}
        $$

    2. We have the following vector ${r}$:

        $$
        \begin{array}{c|cccc}
        \hline  & {t=1} & {t=2} & {t=3} & {t=4} \\
        \hline {{r}[t]} & 1 & 1 & 1 & 4 \\
        \hline
        \end{array}
        $$

        We can reconstruct an optimal solution as follows:

        <div class="tabella" markdown="0"><table>
        <tr>
        <th>Iteration</th>
        <th><span class="arithmatex">\(t\)</span></th>
        <th><span class="arithmatex">\({r}[t]\)</span></th>
        <th><span class="arithmatex">\(x[1]\)</span></th>
        <th><span class="arithmatex">\(x[2]\)</span></th>
        <th><span class="arithmatex">\(x[3]\)</span></th>
        <th><span class="arithmatex">\(x[4]\)</span></th>
        <th><span class="arithmatex">\(t\leftarrow {r}[t]-1\)</span></th>
        </tr>
        <tr>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(t=4\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td class="cella-blu">20</td>
        <td><span class="arithmatex">\(t=4-1=3\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td class="cella-blu">80</td>
        <td>0</td>
        <td>0</td>
        <td>20</td>
        <td><span class="arithmatex">\(t=1-1=0\)</span></td>
        </tr>
        </table></div>

        - $t=4$, ${r}[4]=4$: period $4$ produces only its own demand, so $x[4]\leftarrow d_{4}=20$

        - $t=3$, ${r}[3]=1$: the last production run of periods $1,\dots,3$ is in period $1$ and covers the demands of periods $1,\dots,3$, so $x[1]\leftarrow d_{1}+d_{2}+d_{3}=30+40+10=80$

        Thus, the vector

        $$
        (80,\allowbreak 0,\allowbreak 0,\allowbreak 20)
        $$

        is an optimal solution. The setups are in periods $1$, $4$, the inventories are $(s_1,\dots,s_{4})=(50,\allowbreak 10,\allowbreak 0,\allowbreak 0)$, and the total cost is

        \begin{align*}
        &\underbrace{50+50}_{\text{setup}}+\underbrace{1\cdot 80+3\cdot 0+2\cdot 0+1\cdot 20}_{\text{production}}\\
        &\quad+\underbrace{1\cdot 50+1\cdot 10+1\cdot 0+2\cdot 0}_{\text{holding}}=100+100+60=260.
        \end{align*}

        The optimal value is

        $$
        {v}[4]=260.
        $$

<a id="esercizio-22-3"></a>

!!! esercizio "Exercise 22.3: Exercise 3: Uncapacitated Lot-Sizing Problem"

    Consider the following ULS instance with $m=5$ periods, where the demands, the setup costs, the variable production costs, and the holding costs are:

    $$
    \begin{array}{l|rrrrr}
    \hline {t} & {1} & {2} & {3} & {4} & {5} \\
    \hline {d_t} & {10} & {30} & {40} & {30} & {40} \\
    {sc_t} & {70} & {80} & {50} & {80} & {50} \\
    {vc_t} & {1} & {1} & {1} & {1} & {2} \\
    {hc_t} & {1} & {1} & {2} & {1} & {2} \\
    \hline
    \end{array}
    $$

    **Questions**

    1. Show the execution of the bottom-up DP algorithm by reporting, for each iteration, the values of the matrix ${c}$, of the vector ${v}$, and of the vector ${r}$.

    2. Using the vector ${r}$, reconstruct an optimal solution $(x_1,x_2,\dots,x_m)$, and report the optimal value.

??? soluzione "Solution"

    1. Step-by-step execution of the bottom-up DP algorithm

        First, the matrix ${c}$ is computed. For each step, the table shows the values of $j$ and $t$, the current value of $\mathit{u}$, the cell ${c}[j][t]$, and the operation performed; the cell ${c}[j][t]$ is highlighted in <mark>blue</mark> when assigned.

        <div class="tabella" markdown="0"><table>
        <tr>
        <th><span class="arithmatex">\(j\)</span></th>
        <th><span class="arithmatex">\(t\)</span></th>
        <th><span class="arithmatex">\(\mathit{u}\)</span></th>
        <th><span class="arithmatex">\({c}[j][t]\)</span></th>
        <th>Action</th>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td class="cella-blu"><span class="arithmatex">\(80\)</span></td>
        <td><span class="arithmatex">\(\mathit{u}\leftarrow vc[1]=1\)</span>, <span class="arithmatex">\(\mathit{g}\leftarrow sc[1]{+}vc[1]\cdot d[1]=70{+}1\cdot 10=80\)</span>, <span class="arithmatex">\({c}[1][1]\leftarrow 80\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td class="cella-blu"><span class="arithmatex">\(140\)</span></td>
        <td><span class="arithmatex">\(\mathit{u}\leftarrow \mathit{u}{+}hc[1]=1{+}1=2\)</span>, <span class="arithmatex">\(\mathit{g}\leftarrow \mathit{g}{+}\mathit{u}\cdot d[2]=80{+}2\cdot 30=140\)</span>, <span class="arithmatex">\({c}[1][2]\leftarrow 140\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td class="cella-blu"><span class="arithmatex">\(260\)</span></td>
        <td><span class="arithmatex">\(\mathit{u}\leftarrow \mathit{u}{+}hc[2]=2{+}1=3\)</span>, <span class="arithmatex">\(\mathit{g}\leftarrow \mathit{g}{+}\mathit{u}\cdot d[3]=140{+}3\cdot 40=260\)</span>, <span class="arithmatex">\({c}[1][3]\leftarrow 260\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td class="cella-blu"><span class="arithmatex">\(410\)</span></td>
        <td><span class="arithmatex">\(\mathit{u}\leftarrow \mathit{u}{+}hc[3]=3{+}2=5\)</span>, <span class="arithmatex">\(\mathit{g}\leftarrow \mathit{g}{+}\mathit{u}\cdot d[4]=260{+}5\cdot 30=410\)</span>, <span class="arithmatex">\({c}[1][4]\leftarrow 410\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td class="cella-blu"><span class="arithmatex">\(650\)</span></td>
        <td><span class="arithmatex">\(\mathit{u}\leftarrow \mathit{u}{+}hc[4]=5{+}1=6\)</span>, <span class="arithmatex">\(\mathit{g}\leftarrow \mathit{g}{+}\mathit{u}\cdot d[5]=410{+}6\cdot 40=650\)</span>, <span class="arithmatex">\({c}[1][5]\leftarrow 650\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td class="cella-blu"><span class="arithmatex">\(110\)</span></td>
        <td><span class="arithmatex">\(\mathit{u}\leftarrow vc[2]=1\)</span>, <span class="arithmatex">\(\mathit{g}\leftarrow sc[2]{+}vc[2]\cdot d[2]=80{+}1\cdot 30=110\)</span>, <span class="arithmatex">\({c}[2][2]\leftarrow 110\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td class="cella-blu"><span class="arithmatex">\(190\)</span></td>
        <td><span class="arithmatex">\(\mathit{u}\leftarrow \mathit{u}{+}hc[2]=1{+}1=2\)</span>, <span class="arithmatex">\(\mathit{g}\leftarrow \mathit{g}{+}\mathit{u}\cdot d[3]=110{+}2\cdot 40=190\)</span>, <span class="arithmatex">\({c}[2][3]\leftarrow 190\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td class="cella-blu"><span class="arithmatex">\(310\)</span></td>
        <td><span class="arithmatex">\(\mathit{u}\leftarrow \mathit{u}{+}hc[3]=2{+}2=4\)</span>, <span class="arithmatex">\(\mathit{g}\leftarrow \mathit{g}{+}\mathit{u}\cdot d[4]=190{+}4\cdot 30=310\)</span>, <span class="arithmatex">\({c}[2][4]\leftarrow 310\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td class="cella-blu"><span class="arithmatex">\(510\)</span></td>
        <td><span class="arithmatex">\(\mathit{u}\leftarrow \mathit{u}{+}hc[4]=4{+}1=5\)</span>, <span class="arithmatex">\(\mathit{g}\leftarrow \mathit{g}{+}\mathit{u}\cdot d[5]=310{+}5\cdot 40=510\)</span>, <span class="arithmatex">\({c}[2][5]\leftarrow 510\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td class="cella-blu"><span class="arithmatex">\(90\)</span></td>
        <td><span class="arithmatex">\(\mathit{u}\leftarrow vc[3]=1\)</span>, <span class="arithmatex">\(\mathit{g}\leftarrow sc[3]{+}vc[3]\cdot d[3]=50{+}1\cdot 40=90\)</span>, <span class="arithmatex">\({c}[3][3]\leftarrow 90\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td class="cella-blu"><span class="arithmatex">\(180\)</span></td>
        <td><span class="arithmatex">\(\mathit{u}\leftarrow \mathit{u}{+}hc[3]=1{+}2=3\)</span>, <span class="arithmatex">\(\mathit{g}\leftarrow \mathit{g}{+}\mathit{u}\cdot d[4]=90{+}3\cdot 30=180\)</span>, <span class="arithmatex">\({c}[3][4]\leftarrow 180\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td class="cella-blu"><span class="arithmatex">\(340\)</span></td>
        <td><span class="arithmatex">\(\mathit{u}\leftarrow \mathit{u}{+}hc[4]=3{+}1=4\)</span>, <span class="arithmatex">\(\mathit{g}\leftarrow \mathit{g}{+}\mathit{u}\cdot d[5]=180{+}4\cdot 40=340\)</span>, <span class="arithmatex">\({c}[3][5]\leftarrow 340\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td class="cella-blu"><span class="arithmatex">\(110\)</span></td>
        <td><span class="arithmatex">\(\mathit{u}\leftarrow vc[4]=1\)</span>, <span class="arithmatex">\(\mathit{g}\leftarrow sc[4]{+}vc[4]\cdot d[4]=80{+}1\cdot 30=110\)</span>, <span class="arithmatex">\({c}[4][4]\leftarrow 110\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td class="cella-blu"><span class="arithmatex">\(190\)</span></td>
        <td><span class="arithmatex">\(\mathit{u}\leftarrow \mathit{u}{+}hc[4]=1{+}1=2\)</span>, <span class="arithmatex">\(\mathit{g}\leftarrow \mathit{g}{+}\mathit{u}\cdot d[5]=110{+}2\cdot 40=190\)</span>, <span class="arithmatex">\({c}[4][5]\leftarrow 190\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td class="cella-blu"><span class="arithmatex">\(130\)</span></td>
        <td><span class="arithmatex">\(\mathit{u}\leftarrow vc[5]=2\)</span>, <span class="arithmatex">\(\mathit{g}\leftarrow sc[5]{+}vc[5]\cdot d[5]=50{+}2\cdot 40=130\)</span>, <span class="arithmatex">\({c}[5][5]\leftarrow 130\)</span></td>
        </tr>
        </table></div>

        This is the matrix ${c}$:

        $$
        \begin{array}{l|rrrrr}
        \hline {{c}[j][t]} & {t=1} & {t=2} & {t=3} & {t=4} & {t=5} \\
        \hline {j=1} & {80} & {140} & {260} & {410} & {650} \\
        {j=2} & {-} & {110} & {190} & {310} & {510} \\
        {j=3} & {-} & {-} & {90} & {180} & {340} \\
        {j=4} & {-} & {-} & {-} & {110} & {190} \\
        {j=5} & {-} & {-} & {-} & {-} & {130} \\
        \hline
        \end{array}
        $$

        For each step of the DP algorithm, the table shows the values of $t$ and $j$, the cells ${v}[t]$ and ${r}[t]$, the current value of $\mathit{b}$, and the current value of $\mathit{a}$. The cell of $\mathit{b}$ is highlighted in <mark>red</mark> when updated; the cell of $\mathit{a}$ is highlighted in <mark>blue</mark> when updated; the cells of ${v}[t]$ and ${r}[t]$ are highlighted in <mark>blue</mark> when assigned.

        <div class="tabella" markdown="0"><table>
        <tr>
        <th><span class="arithmatex">\(t\)</span></th>
        <th><span class="arithmatex">\(j\)</span></th>
        <th><span class="arithmatex">\({v}[t]\)</span></th>
        <th><span class="arithmatex">\({r}[t]\)</span></th>
        <th><span class="arithmatex">\(\mathit{b}\)</span></th>
        <th><span class="arithmatex">\(\mathit{a}\)</span></th>
        <th>Action</th>
        </tr>
        <tr>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td class="cella-blu">0</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\({v}[0]\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(+\infty\)</span></td>
        <td>0</td>
        <td><span class="arithmatex">\(\mathit{b}\leftarrow +\infty\)</span>, <span class="arithmatex">\(\mathit{a}\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>1</td>
        <td>1</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td class="cella-rossa">80</td>
        <td class="cella-blu">1</td>
        <td><span class="arithmatex">\({v}[0]{+}{c}[1][1]=0{+}80=80<+\infty\)</span>: <span class="arithmatex">\(\mathit{b}\leftarrow 80\)</span>, <span class="arithmatex">\(\mathit{a}\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td class="cella-blu">80</td>
        <td class="cella-blu">1</td>
        <td>80</td>
        <td>1</td>
        <td><span class="arithmatex">\({v}[1]\leftarrow \mathit{b}=80\)</span>, <span class="arithmatex">\({r}[1]\leftarrow \mathit{a}=1\)</span></td>
        </tr>
        <tr>
        <td></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(+\infty\)</span></td>
        <td>0</td>
        <td><span class="arithmatex">\(\mathit{b}\leftarrow +\infty\)</span>, <span class="arithmatex">\(\mathit{a}\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>2</td>
        <td>1</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td class="cella-rossa">140</td>
        <td class="cella-blu">1</td>
        <td><span class="arithmatex">\({v}[0]{+}{c}[1][2]=0{+}140=140<+\infty\)</span>: <span class="arithmatex">\(\mathit{b}\leftarrow 140\)</span>, <span class="arithmatex">\(\mathit{a}\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td></td>
        <td>2</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>140</td>
        <td>1</td>
        <td><span class="arithmatex">\({v}[1]{+}{c}[2][2]=80{+}110=190>140\)</span>: no update</td>
        </tr>
        <tr>
        <td></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td class="cella-blu">140</td>
        <td class="cella-blu">1</td>
        <td>140</td>
        <td>1</td>
        <td><span class="arithmatex">\({v}[2]\leftarrow \mathit{b}=140\)</span>, <span class="arithmatex">\({r}[2]\leftarrow \mathit{a}=1\)</span></td>
        </tr>
        <tr>
        <td></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(+\infty\)</span></td>
        <td>0</td>
        <td><span class="arithmatex">\(\mathit{b}\leftarrow +\infty\)</span>, <span class="arithmatex">\(\mathit{a}\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>3</td>
        <td>1</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td class="cella-rossa">260</td>
        <td class="cella-blu">1</td>
        <td><span class="arithmatex">\({v}[0]{+}{c}[1][3]=0{+}260=260<+\infty\)</span>: <span class="arithmatex">\(\mathit{b}\leftarrow 260\)</span>, <span class="arithmatex">\(\mathit{a}\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td></td>
        <td>2</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>260</td>
        <td>1</td>
        <td><span class="arithmatex">\({v}[1]{+}{c}[2][3]=80{+}190=270>260\)</span>: no update</td>
        </tr>
        <tr>
        <td></td>
        <td>3</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td class="cella-rossa">230</td>
        <td class="cella-blu">3</td>
        <td><span class="arithmatex">\({v}[2]{+}{c}[3][3]=140{+}90=230<260\)</span>: <span class="arithmatex">\(\mathit{b}\leftarrow 230\)</span>, <span class="arithmatex">\(\mathit{a}\leftarrow 3\)</span></td>
        </tr>
        <tr>
        <td></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td class="cella-blu">230</td>
        <td class="cella-blu">3</td>
        <td>230</td>
        <td>3</td>
        <td><span class="arithmatex">\({v}[3]\leftarrow \mathit{b}=230\)</span>, <span class="arithmatex">\({r}[3]\leftarrow \mathit{a}=3\)</span></td>
        </tr>
        <tr>
        <td></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(+\infty\)</span></td>
        <td>0</td>
        <td><span class="arithmatex">\(\mathit{b}\leftarrow +\infty\)</span>, <span class="arithmatex">\(\mathit{a}\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>4</td>
        <td>1</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td class="cella-rossa">410</td>
        <td class="cella-blu">1</td>
        <td><span class="arithmatex">\({v}[0]{+}{c}[1][4]=0{+}410=410<+\infty\)</span>: <span class="arithmatex">\(\mathit{b}\leftarrow 410\)</span>, <span class="arithmatex">\(\mathit{a}\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td></td>
        <td>2</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td class="cella-rossa">390</td>
        <td class="cella-blu">2</td>
        <td><span class="arithmatex">\({v}[1]{+}{c}[2][4]=80{+}310=390<410\)</span>: <span class="arithmatex">\(\mathit{b}\leftarrow 390\)</span>, <span class="arithmatex">\(\mathit{a}\leftarrow 2\)</span></td>
        </tr>
        <tr>
        <td></td>
        <td>3</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td class="cella-rossa">320</td>
        <td class="cella-blu">3</td>
        <td><span class="arithmatex">\({v}[2]{+}{c}[3][4]=140{+}180=320<390\)</span>: <span class="arithmatex">\(\mathit{b}\leftarrow 320\)</span>, <span class="arithmatex">\(\mathit{a}\leftarrow 3\)</span></td>
        </tr>
        <tr>
        <td></td>
        <td>4</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>320</td>
        <td>3</td>
        <td><span class="arithmatex">\({v}[3]{+}{c}[4][4]=230{+}110=340>320\)</span>: no update</td>
        </tr>
        <tr>
        <td></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td class="cella-blu">320</td>
        <td class="cella-blu">3</td>
        <td>320</td>
        <td>3</td>
        <td><span class="arithmatex">\({v}[4]\leftarrow \mathit{b}=320\)</span>, <span class="arithmatex">\({r}[4]\leftarrow \mathit{a}=3\)</span></td>
        </tr>
        <tr>
        <td></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(+\infty\)</span></td>
        <td>0</td>
        <td><span class="arithmatex">\(\mathit{b}\leftarrow +\infty\)</span>, <span class="arithmatex">\(\mathit{a}\leftarrow 0\)</span></td>
        </tr>
        <tr>
        <td>5</td>
        <td>1</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td class="cella-rossa">650</td>
        <td class="cella-blu">1</td>
        <td><span class="arithmatex">\({v}[0]{+}{c}[1][5]=0{+}650=650<+\infty\)</span>: <span class="arithmatex">\(\mathit{b}\leftarrow 650\)</span>, <span class="arithmatex">\(\mathit{a}\leftarrow 1\)</span></td>
        </tr>
        <tr>
        <td></td>
        <td>2</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td class="cella-rossa">590</td>
        <td class="cella-blu">2</td>
        <td><span class="arithmatex">\({v}[1]{+}{c}[2][5]=80{+}510=590<650\)</span>: <span class="arithmatex">\(\mathit{b}\leftarrow 590\)</span>, <span class="arithmatex">\(\mathit{a}\leftarrow 2\)</span></td>
        </tr>
        <tr>
        <td></td>
        <td>3</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td class="cella-rossa">480</td>
        <td class="cella-blu">3</td>
        <td><span class="arithmatex">\({v}[2]{+}{c}[3][5]=140{+}340=480<590\)</span>: <span class="arithmatex">\(\mathit{b}\leftarrow 480\)</span>, <span class="arithmatex">\(\mathit{a}\leftarrow 3\)</span></td>
        </tr>
        <tr>
        <td></td>
        <td>4</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td class="cella-rossa">420</td>
        <td class="cella-blu">4</td>
        <td><span class="arithmatex">\({v}[3]{+}{c}[4][5]=230{+}190=420<480\)</span>: <span class="arithmatex">\(\mathit{b}\leftarrow 420\)</span>, <span class="arithmatex">\(\mathit{a}\leftarrow 4\)</span></td>
        </tr>
        <tr>
        <td></td>
        <td>5</td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>420</td>
        <td>4</td>
        <td><span class="arithmatex">\({v}[4]{+}{c}[5][5]=320{+}130=450>420\)</span>: no update</td>
        </tr>
        <tr>
        <td></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td class="cella-blu">420</td>
        <td class="cella-blu">4</td>
        <td>420</td>
        <td>4</td>
        <td><span class="arithmatex">\({v}[5]\leftarrow \mathit{b}=420\)</span>, <span class="arithmatex">\({r}[5]\leftarrow \mathit{a}=4\)</span></td>
        </tr>
        </table></div>

        This is the vector ${v}$ after the execution of the DP algorithm:

        $$
        \begin{array}{c|cccccc}
        \hline  & {t=0} & {t=1} & {t=2} & {t=3} & {t=4} & {t=5} \\
        \hline {{v}[t]} & 0 & 80 & 140 & 230 & 320 & 420 \\
        \hline
        \end{array}
        $$

        This is the vector ${r}$ after the execution of the DP algorithm:

        $$
        \begin{array}{c|ccccc}
        \hline  & {t=1} & {t=2} & {t=3} & {t=4} & {t=5} \\
        \hline {{r}[t]} & 1 & 1 & 3 & 3 & 4 \\
        \hline
        \end{array}
        $$

    2. We have the following vector ${r}$:

        $$
        \begin{array}{c|ccccc}
        \hline  & {t=1} & {t=2} & {t=3} & {t=4} & {t=5} \\
        \hline {{r}[t]} & 1 & 1 & 3 & 3 & 4 \\
        \hline
        \end{array}
        $$

        We can reconstruct an optimal solution as follows:

        <div class="tabella" markdown="0"><table>
        <tr>
        <th>Iteration</th>
        <th><span class="arithmatex">\(t\)</span></th>
        <th><span class="arithmatex">\({r}[t]\)</span></th>
        <th><span class="arithmatex">\(x[1]\)</span></th>
        <th><span class="arithmatex">\(x[2]\)</span></th>
        <th><span class="arithmatex">\(x[3]\)</span></th>
        <th><span class="arithmatex">\(x[4]\)</span></th>
        <th><span class="arithmatex">\(x[5]\)</span></th>
        <th><span class="arithmatex">\(t\leftarrow {r}[t]-1\)</span></th>
        </tr>
        <tr>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td><span class="arithmatex">\(-\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(t=5\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td class="cella-blu">70</td>
        <td>0</td>
        <td><span class="arithmatex">\(t=4-1=3\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td>0</td>
        <td>0</td>
        <td class="cella-blu">40</td>
        <td>70</td>
        <td>0</td>
        <td><span class="arithmatex">\(t=3-1=2\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td class="cella-blu">40</td>
        <td>0</td>
        <td>40</td>
        <td>70</td>
        <td>0</td>
        <td><span class="arithmatex">\(t=1-1=0\)</span></td>
        </tr>
        </table></div>

        - $t=5$, ${r}[5]=4$: the last production run of periods $1,\dots,5$ is in period $4$ and covers the demands of periods $4,\dots,5$, so $x[4]\leftarrow d_{4}+d_{5}=30+40=70$

        - $t=3$, ${r}[3]=3$: period $3$ produces only its own demand, so $x[3]\leftarrow d_{3}=40$

        - $t=2$, ${r}[2]=1$: the last production run of periods $1,\dots,2$ is in period $1$ and covers the demands of periods $1,\dots,2$, so $x[1]\leftarrow d_{1}+d_{2}=10+30=40$

        Thus, the vector

        $$
        (40,\allowbreak 0,\allowbreak 40,\allowbreak 70,\allowbreak 0)
        $$

        is an optimal solution. The setups are in periods $1$, $3$, $4$, the inventories are $(s_1,\dots,s_{5})=(30,\allowbreak 0,\allowbreak 0,\allowbreak 40,\allowbreak 0)$, and the total cost is

        \begin{align*}
        &\underbrace{70+50+80}_{\text{setup}}+\underbrace{1\cdot 40+1\cdot 0+1\cdot 40+1\cdot 70+2\cdot 0}_{\text{production}}\\
        &\quad+\underbrace{1\cdot 30+1\cdot 0+2\cdot 0+1\cdot 40+2\cdot 0}_{\text{holding}}=200+150+70=420.
        \end{align*}

        The optimal value is

        $$
        {v}[5]=420.
        $$

<a id="esercizio-22-4"></a>

!!! esercizio "Exercise 22.4: Exercise 4: Capacitated Lot-Sizing Problem"

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

<a id="esercizio-22-5"></a>

!!! esercizio "Exercise 22.5: Exercise 5: Capacitated Lot-Sizing Problem"

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
