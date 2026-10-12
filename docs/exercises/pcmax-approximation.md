---
title: "Exercises · Approximation for P|Cmax"
---

# Exercises · Approximation for P|Cmax

<div class="info-capitolo" markdown>

**Exercises · Chapter 36** · each solution opens with a click · [:material-book-open-variant: Chapter 36: P||Cmax](../approximation-algorithms/pcmax-approximation.md) · [:material-file-pdf-box: Exercises, volume 5 (PDF)](../pdf/exercises-5-approximation-algorithms.pdf)

</div>

<a id="esercizio-36-1"></a>

!!! esercizio "Exercise 36.1: $P\,||\,C_{\max}$ approximation 1"

    We consider $m=3$ identical machines and a set $\mathscr{J}=\{1,\dots,7\}$ of $7$ jobs ($n=7$), with the following processing times:

    $$
    \begin{array}{l|ccccccc}
    \hline  & {j=1} & {j=2} & {j=3} & {j=4} & {j=5} & {j=6} & {j=7} \\[1ex]
    \hline {t_j} & {2} & {2} & {4} & {8} & {8} & {6} & {6} \\
    \hline
    \end{array}
    $$

    **Questions**

    1. Apply $LIST$ with the list $\lambda=(1,2,\dots,7)$. Show, for each job, the loads before the assignment and the chosen machine, and give $LIST(I)$.

    2. Identify a job $\ell$ that ends last in the schedule of Question 1 and check the inequality $S_\ell\le\frac1m\sum_{j\neq\ell}t_j$ used in the proof of the guarantee of $LIST$.

    3. Apply $LPT$ and give $LPT(I)$.

    4. Compute the lower bound $\max\{\max_j t_j,\frac1m\sum_j t_j\}$ on $z(I)$ and determine $z(I)$. Compute the two ratios $\frac{LIST(I)}{z(I)}$ and $\frac{LPT(I)}{z(I)}$ and compare them with the guarantees $2-\frac1m$ and $\frac43-\frac1{3m}$.

??? soluzione "Solution"

    1. Each job goes to a machine with the smallest load (smallest index in case of ties):

        <div class="tabella" markdown="0"><table>
        <tr>
        <th>job <span class="arithmatex">\(j\)</span></th>
        <th><span class="arithmatex">\(t_j\)</span></th>
        <th>loads <span class="arithmatex">\((L_1,L_2,L_3)\)</span> before</th>
        <th>machine</th>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\((0,0,0)\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\((2,0,0)\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\((2,2,0)\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(8\)</span></td>
        <td><span class="arithmatex">\((2,2,4)\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(8\)</span></td>
        <td><span class="arithmatex">\((10,2,4)\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\((10,10,4)\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(7\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\((10,10,10)\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        </tr>
        </table></div>

        Hence $mach=(1,2,3,1,2,3,1)$, $J_1=\{1,4,7\}$, $J_2=\{2,5\}$, $J_3=\{3,6\}$, the loads are $(16,10,10)$ and

        $$
        LIST(I)=16 .
        $$

    2. Job $\ell=7$ ends last: it starts at $S_7=10$ on machine $1$ and ends at $16$. The bound gives

        $$
        S_7=10 \;\le\; \frac13\sum_{j\neq7}t_j=\frac{2+2+4+8+8+6}{3}=\frac{30}{3}=10,
        $$

        which holds with equality: when job $7$ arrives the three loads are equal, so the smallest one coincides with the average.

    3. The jobs sorted by non-increasing processing time (ties by index) are $\lambda=(4,5,6,7,3,1,2)$:

        <div class="tabella" markdown="0"><table>
        <tr>
        <th>job <span class="arithmatex">\(j\)</span></th>
        <th><span class="arithmatex">\(t_j\)</span></th>
        <th>loads <span class="arithmatex">\((L_1,L_2,L_3)\)</span> before</th>
        <th>machine</th>
        </tr>
        <tr>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(8\)</span></td>
        <td><span class="arithmatex">\((0,0,0)\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(8\)</span></td>
        <td><span class="arithmatex">\((8,0,0)\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\((8,8,0)\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(7\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\((8,8,6)\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\((8,8,12)\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\((12,8,12)\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\((12,10,12)\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        </tr>
        </table></div>

        Hence $J_1=\{3,4\}$, $J_2=\{1,2,5\}$, $J_3=\{6,7\}$, the loads are $(12,12,12)$ and

        $$
        LPT(I)=12 .
        $$

    4. The lower bound is

        $$
        z(I)\;\ge\;\max\left\{8,\;\frac{2+2+4+8+8+6+6}{3}\right\}=\max\left\{8,\;\frac{36}{3}\right\}=12 .
        $$

        $LPT$ attains it, so $z(I)=12$ and the schedule of $LPT$ is optimal. The ratios are

        $$
        \frac{LIST(I)}{z(I)}=\frac{16}{12}=\frac43\;\le\;2-\frac13=\frac53,
        \qquad
        \frac{LPT(I)}{z(I)}=\frac{12}{12}=1\;\le\;\frac43-\frac19=\frac{11}{9}.
        $$

        Both guarantees hold. With the list in the input order, the two longest jobs arrive when the machines are already loaded, and $LIST$ is $4$ units above the optimum; sorting the list puts them first and closes the gap.

<a id="esercizio-36-2"></a>

!!! esercizio "Exercise 36.2: $P\,||\,C_{\max}$ approximation 2"

    We consider $m=3$ identical machines and a set $\mathscr{J}=\{1,\dots,7\}$ of $7$ jobs ($n=7$), with the following processing times:

    $$
    \begin{array}{l|ccccccc}
    \hline  & {j=1} & {j=2} & {j=3} & {j=4} & {j=5} & {j=6} & {j=7} \\[1ex]
    \hline {t_j} & {1} & {1} & {1} & {1} & {1} & {1} & {3} \\
    \hline
    \end{array}
    $$

    **Questions**

    1. Apply $LIST$ with the list $\lambda=(1,2,\dots,7)$ and give $LIST(I)$.

    2. Determine $z(I)$, by exhibiting an optimal schedule and a matching lower bound.

    3. Compute $\frac{LIST(I)}{z(I)}$ and compare it with the guarantee of $LIST$. Which instance of the notes is this?

    4. Apply $LPT$ and give $LPT(I)$. Explain why sorting the list removes the bad case.

??? soluzione "Solution"

    1. &#8203;

        <div class="tabella" markdown="0"><table>
        <tr>
        <th>job <span class="arithmatex">\(j\)</span></th>
        <th><span class="arithmatex">\(t_j\)</span></th>
        <th>loads <span class="arithmatex">\((L_1,L_2,L_3)\)</span> before</th>
        <th>machine</th>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\((0,0,0)\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\((1,0,0)\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\((1,1,0)\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\((1,1,1)\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\((2,1,1)\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\((2,2,1)\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(7\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\((2,2,2)\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        </tr>
        </table></div>

        The loads are $(5,2,2)$, with $J_1=\{1,4,7\}$, $J_2=\{2,5\}$, $J_3=\{3,6\}$, and

        $$
        LIST(I)=5 .
        $$

    2. The schedule $J_1=\{7\}$, $J_2=\{1,2,3\}$, $J_3=\{4,5,6\}$ has loads $(3,3,3)$ and makespan $3$. The lower bound gives

        $$
        z(I)\;\ge\;\max\left\{3,\;\frac{6\cdot1+3}{3}\right\}=\max\{3,3\}=3 .
        $$

        Hence $z(I)=3$.

    3. &#8203;

        $$
        \frac{LIST(I)}{z(I)}=\frac53=2-\frac13 ,
        $$

        exactly the guarantee $2-\frac1m$ for $m=3$: the bound of $LIST$ is attained. This is the tight instance $I_m$ of the notes for $m=3$: $m(m-1)=6$ unit jobs followed by one job of length $m=3$. The unit jobs fill all the machines up to $m-1=2$, and the long job starts on top of one of them.

    4. The sorted list is $\lambda=(7,1,2,3,4,5,6)$. Job $7$ goes to machine $1$, with loads $(3,0,0)$; the unit jobs then go to machines $2,3,2,3,2,3$ (machine $1$ is never the least loaded again, since its load $3$ is never smaller than the others'), giving the loads $(3,3,3)$. Hence

        $$
        LPT(I)=3=z(I).
        $$

        The long job is the one that hurts when it comes last; $LPT$ schedules it first, and the short jobs level the loads around it.

<a id="esercizio-36-3"></a>

!!! esercizio "Exercise 36.3: $P\,||\,C_{\max}$ approximation 3"

    We consider $m=4$ identical machines and a set $\mathscr{J}=\{1,\dots,9\}$ of $9$ jobs ($n=9$), with the following processing times:

    $$
    \begin{array}{l|ccccccccc}
    \hline  & {j=1} & {j=2} & {j=3} & {j=4} & {j=5} & {j=6} & {j=7} & {j=8} & {j=9} \\[1ex]
    \hline {t_j} & {7} & {7} & {6} & {6} & {5} & {5} & {4} & {4} & {4} \\
    \hline
    \end{array}
    $$

    **Questions**

    1. Apply $LPT$ and give $LPT(I)$.

    2. Determine $z(I)$.

    3. Compute $\frac{LPT(I)}{z(I)}$ and compare it with the guarantee $\frac43-\frac1{3m}$.

    4. In the proof of the guarantee of $LPT$, which of the two cases applies to the job $\ell$ that ends last? Check that every inequality of that case holds with equality on this instance.

??? soluzione "Solution"

    1. The jobs are already sorted, $\lambda=(1,2,\dots,9)$:

        <div class="tabella" markdown="0"><table>
        <tr>
        <th>job <span class="arithmatex">\(j\)</span></th>
        <th><span class="arithmatex">\(t_j\)</span></th>
        <th>loads <span class="arithmatex">\((L_1,L_2,L_3,L_4)\)</span> before</th>
        <th>machine</th>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(7\)</span></td>
        <td><span class="arithmatex">\((0,0,0,0)\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(7\)</span></td>
        <td><span class="arithmatex">\((7,0,0,0)\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\((7,7,0,0)\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\((7,7,6,0)\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\((7,7,6,6)\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\((7,7,11,6)\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(7\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\((7,7,11,11)\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(8\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\((11,7,11,11)\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(9\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\((11,11,11,11)\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        </tr>
        </table></div>

        Hence $J_1=\{1,7,9\}$, $J_2=\{2,8\}$, $J_3=\{3,5\}$, $J_4=\{4,6\}$, the loads are $(15,11,11,11)$ and

        $$
        LPT(I)=15 .
        $$

    2. The total processing time is $48$, so $z(I)\ge\max\{7,\frac{48}{4}\}=12$. The schedule $J_1=\{1,5\}$, $J_2=\{2,6\}$, $J_3=\{3,4\}$, $J_4=\{7,8,9\}$ has loads $(12,12,12,12)$. Hence $z(I)=12$.

    3. &#8203;

        $$
        \frac{LPT(I)}{z(I)}=\frac{15}{12}=\frac54=\frac43-\frac1{12}=\frac43-\frac{1}{3\cdot4}.
        $$

        The guarantee of $LPT$ is attained: this is the tight instance of the notes for $m=4$, with two jobs of each length $2m-1=7$, $6$, $m+1=5$ and three jobs of length $m=4$; after $2m=8$ jobs all the loads are $3m-1=11$, and the last job gives $4m-1=15$, while $z(I)=3m=12$.

    4. The last job is $\ell=9$, with $t_9=4=\frac{z(I)}{3}$, so Case 1 ($t_\ell\le\frac{z}{3}$) applies, at its border. Its inequalities are:

        \begin{align*}
        LPT(I) = S_9+t_9 = 11+4 &= 15,\\
        \frac1m\sum_{j}t_j+\Big(1-\frac1m\Big)t_9 = \frac{48}{4}+\frac34\cdot4 &= 15,\\
        z(I)+\Big(1-\frac1m\Big)\frac{z(I)}{3} = 12+\frac34\cdot4 &= 15,\\
        \Big(\frac43-\frac1{3m}\Big)z(I)=\frac54\cdot12 &= 15.
        \end{align*}

        All the quantities are equal: the starting time $S_9=11$ equals the average $\frac{48-4}{4}=11$ of the other loads (the four machines are perfectly balanced), $\frac1m\sum_j t_j=z(I)$, and $t_9=\frac{z(I)}3$.
