---
title: "Exercises · P|Cmax, metric TSP and the limits of approximation"
---

# Exercises · P|Cmax, metric TSP and the limits of approximation

<div class="info-capitolo" markdown>

**Exercises · Chapter 26** · each solution opens with a click · [:material-book-open-variant: Chapter 26](../approximation-algorithms/pcmax-tsp-coloring-approximation.md)

</div>

## $P\|C_{\max}$

<a id="esercizio-26-1"></a>

!!! esercizio "Exercise 26.1: $P\,||\,C_{\max}$ approximation 1"

    We consider $m=3$ identical machines and a set $\mathscr{J}=\{1,\dots,7\}$ of $7$ jobs ($n=7$), with the following processing times:

    <div class="tabella" markdown="0"><table>
    <tr>
    <th></th>
    <th><span class="arithmatex">\(j=1\)</span></th>
    <th><span class="arithmatex">\(j=2\)</span></th>
    <th><span class="arithmatex">\(j=3\)</span></th>
    <th><span class="arithmatex">\(j=4\)</span></th>
    <th><span class="arithmatex">\(j=5\)</span></th>
    <th><span class="arithmatex">\(j=6\)</span></th>
    <th><span class="arithmatex">\(j=7\)</span></th>
    </tr>
    <tr>
    <td><span class="arithmatex">\(t_j\)</span></td>
    <td><span class="arithmatex">\(2\)</span></td>
    <td><span class="arithmatex">\(2\)</span></td>
    <td><span class="arithmatex">\(4\)</span></td>
    <td><span class="arithmatex">\(8\)</span></td>
    <td><span class="arithmatex">\(8\)</span></td>
    <td><span class="arithmatex">\(6\)</span></td>
    <td><span class="arithmatex">\(6\)</span></td>
    </tr>
    </table></div>

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

<a id="esercizio-26-2"></a>

!!! esercizio "Exercise 26.2: $P\,||\,C_{\max}$ approximation 2"

    We consider $m=3$ identical machines and a set $\mathscr{J}=\{1,\dots,7\}$ of $7$ jobs ($n=7$), with the following processing times:

    <div class="tabella" markdown="0"><table>
    <tr>
    <th></th>
    <th><span class="arithmatex">\(j=1\)</span></th>
    <th><span class="arithmatex">\(j=2\)</span></th>
    <th><span class="arithmatex">\(j=3\)</span></th>
    <th><span class="arithmatex">\(j=4\)</span></th>
    <th><span class="arithmatex">\(j=5\)</span></th>
    <th><span class="arithmatex">\(j=6\)</span></th>
    <th><span class="arithmatex">\(j=7\)</span></th>
    </tr>
    <tr>
    <td><span class="arithmatex">\(t_j\)</span></td>
    <td><span class="arithmatex">\(1\)</span></td>
    <td><span class="arithmatex">\(1\)</span></td>
    <td><span class="arithmatex">\(1\)</span></td>
    <td><span class="arithmatex">\(1\)</span></td>
    <td><span class="arithmatex">\(1\)</span></td>
    <td><span class="arithmatex">\(1\)</span></td>
    <td><span class="arithmatex">\(3\)</span></td>
    </tr>
    </table></div>

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

<a id="esercizio-26-3"></a>

!!! esercizio "Exercise 26.3: $P\,||\,C_{\max}$ approximation 3"

    We consider $m=4$ identical machines and a set $\mathscr{J}=\{1,\dots,9\}$ of $9$ jobs ($n=9$), with the following processing times:

    <div class="tabella" markdown="0"><table>
    <tr>
    <th></th>
    <th><span class="arithmatex">\(j=1\)</span></th>
    <th><span class="arithmatex">\(j=2\)</span></th>
    <th><span class="arithmatex">\(j=3\)</span></th>
    <th><span class="arithmatex">\(j=4\)</span></th>
    <th><span class="arithmatex">\(j=5\)</span></th>
    <th><span class="arithmatex">\(j=6\)</span></th>
    <th><span class="arithmatex">\(j=7\)</span></th>
    <th><span class="arithmatex">\(j=8\)</span></th>
    <th><span class="arithmatex">\(j=9\)</span></th>
    </tr>
    <tr>
    <td><span class="arithmatex">\(t_j\)</span></td>
    <td><span class="arithmatex">\(7\)</span></td>
    <td><span class="arithmatex">\(7\)</span></td>
    <td><span class="arithmatex">\(6\)</span></td>
    <td><span class="arithmatex">\(6\)</span></td>
    <td><span class="arithmatex">\(5\)</span></td>
    <td><span class="arithmatex">\(5\)</span></td>
    <td><span class="arithmatex">\(4\)</span></td>
    <td><span class="arithmatex">\(4\)</span></td>
    <td><span class="arithmatex">\(4\)</span></td>
    </tr>
    </table></div>

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

## Metric TSP

<a id="esercizio-26-4"></a>

!!! esercizio "Exercise 26.4: Metric TSP approximation 1"

    We consider a set $\mathscr{V}=\{1,\dots,6\}$ of $6$ cities with coordinates $1{:}\,(3,4)$, $2{:}\,(6,1)$, $3{:}\,(3,8)$, $4{:}\,(8,8)$, $5{:}\,(0,4)$, $6{:}\,(8,0)$ and distances equal to the Euclidean distances rounded to the nearest integer (the instance is metric):

    <div class="tabella" markdown="0"><table>
    <tr>
    <th><span class="arithmatex">\(d_{ij}\)</span></th>
    <th><span class="arithmatex">\(1\)</span></th>
    <th><span class="arithmatex">\(2\)</span></th>
    <th><span class="arithmatex">\(3\)</span></th>
    <th><span class="arithmatex">\(4\)</span></th>
    <th><span class="arithmatex">\(5\)</span></th>
    <th><span class="arithmatex">\(6\)</span></th>
    </tr>
    <tr>
    <td><span class="arithmatex">\(1\)</span></td>
    <td>—</td>
    <td><span class="arithmatex">\(4\)</span></td>
    <td><span class="arithmatex">\(4\)</span></td>
    <td><span class="arithmatex">\(6\)</span></td>
    <td><span class="arithmatex">\(3\)</span></td>
    <td><span class="arithmatex">\(6\)</span></td>
    </tr>
    <tr>
    <td><span class="arithmatex">\(2\)</span></td>
    <td><span class="arithmatex">\(4\)</span></td>
    <td>—</td>
    <td><span class="arithmatex">\(8\)</span></td>
    <td><span class="arithmatex">\(7\)</span></td>
    <td><span class="arithmatex">\(7\)</span></td>
    <td><span class="arithmatex">\(2\)</span></td>
    </tr>
    <tr>
    <td><span class="arithmatex">\(3\)</span></td>
    <td><span class="arithmatex">\(4\)</span></td>
    <td><span class="arithmatex">\(8\)</span></td>
    <td>—</td>
    <td><span class="arithmatex">\(5\)</span></td>
    <td><span class="arithmatex">\(5\)</span></td>
    <td><span class="arithmatex">\(9\)</span></td>
    </tr>
    <tr>
    <td><span class="arithmatex">\(4\)</span></td>
    <td><span class="arithmatex">\(6\)</span></td>
    <td><span class="arithmatex">\(7\)</span></td>
    <td><span class="arithmatex">\(5\)</span></td>
    <td>—</td>
    <td><span class="arithmatex">\(9\)</span></td>
    <td><span class="arithmatex">\(8\)</span></td>
    </tr>
    <tr>
    <td><span class="arithmatex">\(5\)</span></td>
    <td><span class="arithmatex">\(3\)</span></td>
    <td><span class="arithmatex">\(7\)</span></td>
    <td><span class="arithmatex">\(5\)</span></td>
    <td><span class="arithmatex">\(9\)</span></td>
    <td>—</td>
    <td><span class="arithmatex">\(9\)</span></td>
    </tr>
    <tr>
    <td><span class="arithmatex">\(6\)</span></td>
    <td><span class="arithmatex">\(6\)</span></td>
    <td><span class="arithmatex">\(2\)</span></td>
    <td><span class="arithmatex">\(9\)</span></td>
    <td><span class="arithmatex">\(8\)</span></td>
    <td><span class="arithmatex">\(9\)</span></td>
    <td>—</td>
    </tr>
    </table></div>

    **Questions**

    1. Compute a minimum spanning tree $T$ with Kruskal's algorithm (edges by non-decreasing distance, ties by the pair of indices) and its weight $d(T)$.

    2. Apply the double tree algorithm $DT$: give the Eulerian circuit of the doubled tree from city $1$ (Fleury's rule), the tour obtained by shortcutting, and $DT(I)$.

    3. Apply the Christofides algorithm $CH$: give the set $O$ of odd-degree cities, the minimum weight perfect matching $M$ (compare all the perfect matchings of $O$), the Eulerian circuit of $T\cup M$ from city $1$, the tour and $CH(I)$.

    4. The optimal tour has length $z(I)=27$. Compute the two ratios and check the inequalities $DT(I)\le2\,d(T)\le2\,z(I)$ and $CH(I)\le d(T)+d(M)\le\frac32\,z(I)$.

??? soluzione "Solution"

    1. Kruskal's algorithm examines $\{2,6\}$ ($2$, taken), $\{1,5\}$ ($3$, taken), $\{1,2\}$ ($4$, taken), $\{1,3\}$ ($4$, taken), $\{3,4\}$ ($5$, taken). After five edges the tree spans the six cities:

        $$
        T=\big\{\{2,6\},\{1,5\},\{1,2\},\{1,3\},\{3,4\}\big\},\qquad d(T)=2+3+4+4+5=18 .
        $$

        It is the unique MST of the instance.

    2. The neighbours in $T$ are $1{:}\,\{2,3,5\}$, $2{:}\,\{1,6\}$, $3{:}\,\{1,4\}$, $4{:}\,\{3\}$, $5{:}\,\{1\}$, $6{:}\,\{2\}$. The Eulerian circuit of the doubled tree from city $1$ is the depth-first visit with the children in increasing order:

        $$
        W=(1,2,6,2,1,3,4,3,1,5,1),\qquad 4+2+2+4+4+5+5+4+3+3=36=2\,d(T).
        $$

        Keeping each city at its first occurrence gives $\sigma=(1,2,6,3,4,5)$, of length

        $$
        DT(I)=d_{12}+d_{26}+d_{63}+d_{34}+d_{45}+d_{51}=4+2+9+5+9+3=32 .
        $$

    3. The degrees in $T$ are $\deg(1)=3$, $\deg(2)=2$, $\deg(3)=2$, $\deg(4)=1$, $\deg(5)=1$, $\deg(6)=1$, so $O=\{1,4,5,6\}$. Its three perfect matchings weigh

        $$
        \{\{1,4\},\{5,6\}\}{:}\ 6+9=15,\qquad
        \{\{1,5\},\{4,6\}\}{:}\ 3+8=11,\qquad
        \{\{1,6\},\{4,5\}\}{:}\ 6+9=15,
        $$

        so $M=\{\{1,5\},\{4,6\}\}$, with $d(M)=11$. The multigraph $T\cup M$ has two copies of $\{1,5\}$. Fleury's rule from city $1$ (neighbours $2,3,5,5$) goes to $2$, then $6$, $4$ (along $M$), $3$, back to $1$, and finally $5$ and $1$ along the two copies of $\{1,5\}$:

        $$
        W=(1,2,6,4,3,1,5,1),\qquad 4+2+8+5+4+3+3=29=d(T)+d(M).
        $$

        City $1$ is repeated in the middle; shortcutting it gives $\sigma=(1,2,6,4,3,5)$, of length

        $$
        CH(I)=d_{12}+d_{26}+d_{64}+d_{43}+d_{35}+d_{51}=4+2+8+5+5+3=27 .
        $$

        The shortcut replaces $3\to1\to5$ ($4+3$) by $3\to5$ ($5$) and saves $2$.

    4. The ratios are

        $$
        \frac{DT(I)}{z(I)}=\frac{32}{27},\qquad \frac{CH(I)}{z(I)}=\frac{27}{27}=1 ,
        $$

        so $CH$ finds the optimal tour, which is unique. The inequalities of the proofs are

        $$
        DT(I)=32\le 2\,d(T)=36\le 2\,z(I)=54,
        \qquad
        CH(I)=27\le d(T)+d(M)=29\le\frac32\,z(I)=\frac{81}{2}.
        $$

<a id="esercizio-26-5"></a>

!!! esercizio "Exercise 26.5: Metric TSP approximation 2"

    We consider a set $\mathscr{V}=\{1,\dots,6\}$ of $6$ cities with coordinates $1{:}\,(2,4)$, $2{:}\,(6,0)$, $3{:}\,(7,3)$, $4{:}\,(0,7)$, $5{:}\,(0,1)$, $6{:}\,(2,1)$ and distances equal to the Euclidean distances rounded to the nearest integer (the instance is metric):

    <div class="tabella" markdown="0"><table>
    <tr>
    <th><span class="arithmatex">\(d_{ij}\)</span></th>
    <th><span class="arithmatex">\(1\)</span></th>
    <th><span class="arithmatex">\(2\)</span></th>
    <th><span class="arithmatex">\(3\)</span></th>
    <th><span class="arithmatex">\(4\)</span></th>
    <th><span class="arithmatex">\(5\)</span></th>
    <th><span class="arithmatex">\(6\)</span></th>
    </tr>
    <tr>
    <td><span class="arithmatex">\(1\)</span></td>
    <td>—</td>
    <td><span class="arithmatex">\(6\)</span></td>
    <td><span class="arithmatex">\(5\)</span></td>
    <td><span class="arithmatex">\(4\)</span></td>
    <td><span class="arithmatex">\(4\)</span></td>
    <td><span class="arithmatex">\(3\)</span></td>
    </tr>
    <tr>
    <td><span class="arithmatex">\(2\)</span></td>
    <td><span class="arithmatex">\(6\)</span></td>
    <td>—</td>
    <td><span class="arithmatex">\(3\)</span></td>
    <td><span class="arithmatex">\(9\)</span></td>
    <td><span class="arithmatex">\(6\)</span></td>
    <td><span class="arithmatex">\(4\)</span></td>
    </tr>
    <tr>
    <td><span class="arithmatex">\(3\)</span></td>
    <td><span class="arithmatex">\(5\)</span></td>
    <td><span class="arithmatex">\(3\)</span></td>
    <td>—</td>
    <td><span class="arithmatex">\(8\)</span></td>
    <td><span class="arithmatex">\(7\)</span></td>
    <td><span class="arithmatex">\(5\)</span></td>
    </tr>
    <tr>
    <td><span class="arithmatex">\(4\)</span></td>
    <td><span class="arithmatex">\(4\)</span></td>
    <td><span class="arithmatex">\(9\)</span></td>
    <td><span class="arithmatex">\(8\)</span></td>
    <td>—</td>
    <td><span class="arithmatex">\(6\)</span></td>
    <td><span class="arithmatex">\(6\)</span></td>
    </tr>
    <tr>
    <td><span class="arithmatex">\(5\)</span></td>
    <td><span class="arithmatex">\(4\)</span></td>
    <td><span class="arithmatex">\(6\)</span></td>
    <td><span class="arithmatex">\(7\)</span></td>
    <td><span class="arithmatex">\(6\)</span></td>
    <td>—</td>
    <td><span class="arithmatex">\(2\)</span></td>
    </tr>
    <tr>
    <td><span class="arithmatex">\(6\)</span></td>
    <td><span class="arithmatex">\(3\)</span></td>
    <td><span class="arithmatex">\(4\)</span></td>
    <td><span class="arithmatex">\(5\)</span></td>
    <td><span class="arithmatex">\(6\)</span></td>
    <td><span class="arithmatex">\(2\)</span></td>
    <td>—</td>
    </tr>
    </table></div>

    **Questions**

    1. Compute a minimum spanning tree $T$ with Kruskal's algorithm and its weight $d(T)$.

    2. Apply $CH$: give $O$, the weights of all the perfect matchings of $O$, the matching $M$, the Eulerian circuit of $T\cup M$ from city $1$ (Fleury's rule), the tour and $CH(I)$.

    3. Apply $DT$ and give $DT(I)$.

    4. The unique optimal tour is $(1,3,2,6,5,4)$. Compute $z(I)$ and the two ratios. Is $CH$ optimal on this instance? Check the bound $d(M)\le\frac{z(I)}{2}$ by shortcutting the optimal tour to the cities of $O$, as in the proof of the notes.

??? soluzione "Solution"

    1. Kruskal's algorithm examines $\{5,6\}$ ($2$, taken), $\{1,6\}$ ($3$, taken), $\{2,3\}$ ($3$, taken), $\{1,4\}$ ($4$, taken), $\{1,5\}$ ($4$, it closes the cycle $1,5,6$: rejected), $\{2,6\}$ ($4$, taken). Hence

        $$
        T=\big\{\{5,6\},\{1,6\},\{2,3\},\{1,4\},\{2,6\}\big\},\qquad d(T)=2+3+3+4+4=16 ,
        $$

        the unique MST of the instance.

    2. The degrees in $T$ are $\deg(1)=2$, $\deg(2)=2$, $\deg(3)=1$, $\deg(4)=1$, $\deg(5)=1$, $\deg(6)=3$, so $O=\{3,4,5,6\}$. Its perfect matchings weigh

        $$
        \{\{3,4\},\{5,6\}\}{:}\ 8+2=10,\qquad
        \{\{3,5\},\{4,6\}\}{:}\ 7+6=13,\qquad
        \{\{3,6\},\{4,5\}\}{:}\ 5+6=11,
        $$

        so $M=\{\{3,4\},\{5,6\}\}$, with $d(M)=10$; $T\cup M$ has two copies of $\{5,6\}$. Fleury's rule from city $1$ (neighbours $4$, $6$) goes to $4$, then to $3$ along $M$, to $2$ and to $6$. At city $6$ the unused edges are $\{6,1\}$ and the two copies of $\{6,5\}$: city $1$ has the smallest index, but $\{6,1\}$ is a bridge of the unused edges (removing it leaves city $1$ isolated from the two copies of $\{5,6\}$), so the walk goes to $5$, back to $6$ and finally to $1$:

        $$
        W=(1,4,3,2,6,5,6,1),\qquad 4+8+3+4+2+2+3=26=d(T)+d(M).
        $$

        Shortcutting the second visit of city $6$ gives $\sigma=(1,4,3,2,6,5)$, of length

        $$
        CH(I)=d_{14}+d_{43}+d_{32}+d_{26}+d_{65}+d_{51}=4+8+3+4+2+4=25 .
        $$

    3. The neighbours in $T$ are $1{:}\,\{4,6\}$, $2{:}\,\{3,6\}$, $3{:}\,\{2\}$, $4{:}\,\{1\}$, $5{:}\,\{6\}$, $6{:}\,\{1,2,5\}$. The depth-first visit from city $1$ is

        $$
        W=(1,4,1,6,2,3,2,6,5,6,1),\qquad \text{of length } 32=2\,d(T),
        $$

        and shortcutting gives $\sigma=(1,4,6,2,3,5)$, of length

        $$
        DT(I)=4+6+4+3+7+4=28 .
        $$

    4. $z(I)=d_{13}+d_{32}+d_{26}+d_{65}+d_{54}+d_{41}=5+3+4+2+6+4=24$, and

        $$
        \frac{CH(I)}{z(I)}=\frac{25}{24},\qquad \frac{DT(I)}{z(I)}=\frac{28}{24}=\frac76 .
        $$

        $CH$ is not optimal here, but it is only one unit above the optimum. Shortcutting the optimal tour to $O=\{3,4,5,6\}$ gives the cycle $(3,6,5,4)$, of length $d_{36}+d_{65}+d_{54}+d_{43}=5+2+6+8=21\le24$. Its alternate edges form the matchings $\{\{3,6\},\{5,4\}\}$, of weight $11$, and $\{\{6,5\},\{4,3\}\}$, of weight $10$, and indeed

        $$
        d(M)=10\le\min\{11,10\}\le\frac{21}{2}\le\frac{z(I)}{2}=12 .
        $$

<a id="esercizio-26-6"></a>

!!! esercizio "Exercise 26.6: Metric TSP approximation 3"

    We consider two graphs with $5$ vertices, $V=\{1,2,3,4,5\}$:

    $$
    G_1:\ E_1=\big\{\{1,2\},\{2,3\},\{3,4\},\{4,5\},\{5,1\},\{1,3\}\big\},
    $$

    $$
    G_2:\ E_2=\big\{\{1,3\},\{1,4\},\{1,5\},\{2,3\},\{2,4\},\{2,5\}\big\}.
    $$

    Suppose that a polynomial algorithm $\mathscr{A}$ for the TSP had the guarantee $\frac{\mathscr{A}(I)}{z(I)}\le\alpha$ with $\alpha=2$ on every TSP instance.

    **Questions**

    1. Build the TSP instances $I_{G_1}$ and $I_{G_2}$ of the proof of the notes: $d_{ij}=1$ if $\{i,j\}$ is an edge and $d_{ij}=\lceil\alpha n\rceil+1$ otherwise.

    2. Determine whether $G_1$ and $G_2$ are Hamiltonian, and compute $z(I_{G_1})$ and $z(I_{G_2})$.

    3. What can $\mathscr{A}$ return on the two instances? Explain how $\mathscr{A}$ would decide whether a graph is Hamiltonian.

    4. Is $I_{G_2}$ metric? Could $\mathscr{A}$ be the Christofides algorithm?

??? soluzione "Solution"

    1. With $n=5$ and $\alpha=2$, the non-edges get distance $\lceil 2\cdot5\rceil+1=11$:

        <div class="tabella" markdown="0"><table>
        <tr>
        <th><span class="arithmatex">\(I_{G_1}\)</span></th>
        <th><span class="arithmatex">\(1\)</span></th>
        <th><span class="arithmatex">\(2\)</span></th>
        <th><span class="arithmatex">\(3\)</span></th>
        <th><span class="arithmatex">\(4\)</span></th>
        <th><span class="arithmatex">\(5\)</span></th>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td>—</td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(11\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td>—</td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(11\)</span></td>
        <td><span class="arithmatex">\(11\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td>—</td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(11\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(11\)</span></td>
        <td><span class="arithmatex">\(11\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td>—</td>
        <td><span class="arithmatex">\(1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(11\)</span></td>
        <td><span class="arithmatex">\(11\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td>—</td>
        </tr>
        </table></div>

        <div class="tabella" markdown="0"><table>
        <tr>
        <th><span class="arithmatex">\(I_{G_2}\)</span></th>
        <th><span class="arithmatex">\(1\)</span></th>
        <th><span class="arithmatex">\(2\)</span></th>
        <th><span class="arithmatex">\(3\)</span></th>
        <th><span class="arithmatex">\(4\)</span></th>
        <th><span class="arithmatex">\(5\)</span></th>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td>—</td>
        <td><span class="arithmatex">\(11\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(11\)</span></td>
        <td>—</td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td>—</td>
        <td><span class="arithmatex">\(11\)</span></td>
        <td><span class="arithmatex">\(11\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(11\)</span></td>
        <td>—</td>
        <td><span class="arithmatex">\(11\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(11\)</span></td>
        <td><span class="arithmatex">\(11\)</span></td>
        <td>—</td>
        </tr>
        </table></div>

    2. $G_1$ contains the cycle $(1,2,3,4,5)$, which is Hamiltonian, so the tour $(1,2,3,4,5)$ has length $5$ and $z(I_{G_1})=5$.

        $G_2$ is the complete bipartite graph with sides $\{1,2\}$ and $\{3,4,5\}$. A cycle in a bipartite graph alternates between the two sides, so it has as many vertices on each side: no cycle can contain the three vertices $3,4,5$ and only two vertices of the other side, and $G_2$ is not Hamiltonian. Every tour of $I_{G_2}$ uses at least one distance $11$. The tour $(1,3,2,4,5)$ uses the edges $\{1,3\},\{3,2\},\{2,4\},\{1,5\}$ and the non-edge $\{4,5\}$, so its length is $4\cdot1+11=15$, and

        $$
        z(I_{G_2})=15 .
        $$

        (Enumerating the $12$ tours, their lengths are only $15$ and $35$.)

    3. On $I_{G_1}$: $\mathscr{A}(I_{G_1})\le2\cdot5=10$. A tour that uses a distance $11$ has length at least $4+11=15>10$, so $\mathscr{A}$ must return a tour of length $5$, i.e., a Hamiltonian cycle of $G_1$.

        On $I_{G_2}$: $\mathscr{A}(I_{G_2})\ge z(I_{G_2})=15>10$.

        So the test “$\mathscr{A}(I_G)\le\alpha n=10$” answers “yes” on $G_1$ and “no” on $G_2$. In general, building $I_G$ and running $\mathscr{A}$ takes polynomial time and gives the right answer on every graph, so the NP-complete Hamiltonian cycle problem would be solved in polynomial time: such an $\mathscr{A}$ cannot exist unless $P=NP$.

    4. $I_{G_2}$ is not metric: for example $d_{12}=11>d_{13}+d_{32}=1+1=2$. The guarantee $\frac32$ of the Christofides algorithm holds only for metric instances, so it says nothing on $I_{G_2}$, and there is no contradiction with the proposition of the notes: it is the triangle inequality that makes the TSP approximable.

## Vertex coloring

<a id="esercizio-26-7"></a>

!!! esercizio "Exercise 26.7: Vertex coloring approximation 1"

    We consider the graph $G=(V,E)$ with $V=\{1,\dots,7\}$ ($n=7$) and $|E|=11$ edges:

    $$
    E=\big\{\{1,2\},\{1,3\},\{1,4\},\{2,4\},\{2,6\},\{3,7\},\{4,5\},\{4,6\},\{5,6\},\{5,7\},\{6,7\}\big\}.
    $$

    ![Figure 1](../img/ex-pcmax-tsp-coloring-approximation/fig01.svg){ .fig loading=lazy  }

    **Questions**

    1. Compute the degrees and $\Delta(G)$, and the bound $\Delta(G)+1$ on the number of colors of $GC$.

    2. Apply $GC$ with the list $\lambda=(1,2,\dots,7)$: for each vertex give the set $U$ of colors of its colored neighbours and the color assigned.

    3. Apply $DSATUR$: for each step give the vertex chosen, its saturation degree $sat$, its degree among the uncolored vertices $du$, and its color.

    4. Find a clique of maximum size and determine $\chi(G)$. Which of the two colorings is optimal?

??? soluzione "Solution"

    1. The neighbourhoods are $N(1)=\{2,3,4\}$, $N(2)=\{1,4,6\}$, $N(3)=\{1,7\}$, $N(4)=\{1,2,5,6\}$, $N(5)=\{4,6,7\}$, $N(6)=\{2,4,5,7\}$, $N(7)=\{3,5,6\}$. The degrees are $(3,3,2,4,3,4,3)$, so $\Delta(G)=4$ and $GC$ uses at most $\Delta(G)+1=5$ colors, with any list.

    2. &#8203;

        <div class="tabella" markdown="0"><table>
        <tr>
        <th><span class="arithmatex">\(v\)</span></th>
        <th><span class="arithmatex">\(1\)</span></th>
        <th><span class="arithmatex">\(2\)</span></th>
        <th><span class="arithmatex">\(3\)</span></th>
        <th><span class="arithmatex">\(4\)</span></th>
        <th><span class="arithmatex">\(5\)</span></th>
        <th><span class="arithmatex">\(6\)</span></th>
        <th><span class="arithmatex">\(7\)</span></th>
        </tr>
        <tr>
        <td><span class="arithmatex">\(U\)</span></td>
        <td><span class="arithmatex">\(\emptyset\)</span></td>
        <td><span class="arithmatex">\(\{1\}\)</span></td>
        <td><span class="arithmatex">\(\{1\}\)</span></td>
        <td><span class="arithmatex">\(\{1,2\}\)</span></td>
        <td><span class="arithmatex">\(\{3\}\)</span></td>
        <td><span class="arithmatex">\(\{1,2,3\}\)</span></td>
        <td><span class="arithmatex">\(\{1,2,4\}\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(col[v]\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        </tr>
        </table></div>

        $GC$ uses $4$ colors: $Q_1=\{1,5\}$, $Q_2=\{2,3\}$, $Q_3=\{4,7\}$, $Q_4=\{6\}$. The trouble starts at vertex $5$: it takes color $1$, and vertex $6$, adjacent to $2$, $4$ and $5$, then sees the colors $1,2,3$.

    3. At step $1$ all the saturation degrees are $0$, and the vertices of largest degree are $4$ and $6$: vertex $4$ is chosen.

        <div class="tabella" markdown="0"><table>
        <tr>
        <th>step</th>
        <th><span class="arithmatex">\(1\)</span></th>
        <th><span class="arithmatex">\(2\)</span></th>
        <th><span class="arithmatex">\(3\)</span></th>
        <th><span class="arithmatex">\(4\)</span></th>
        <th><span class="arithmatex">\(5\)</span></th>
        <th><span class="arithmatex">\(6\)</span></th>
        <th><span class="arithmatex">\(7\)</span></th>
        </tr>
        <tr>
        <td><span class="arithmatex">\(v\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(7\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(sat[v]\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(du[v]\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(col[v]\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        </tr>
        </table></div>

        At step $2$ the neighbours of $4$ have saturation degree $1$, and vertex $6$ has the most uncolored neighbours ($5$, $7$ and $2$). At step $3$ the vertices $2$ and $5$ (both adjacent to $4$ and $6$) have saturation degree $2$ and one uncolored neighbour each, and $2$ is chosen. $DSATUR$ uses $3$ colors: $Q_1=\{4,7\}$, $Q_2=\{1,6\}$, $Q_3=\{2,3,5\}$.

    4. $\{1,2,4\}$ is a clique of size $3$ ($\{1,2\},\{1,4\},\{2,4\}\in E$), so $\chi(G)\ge\omega(G)\ge3$; there are no cliques of size $4$, but this is not needed: the $DSATUR$ coloring uses $3$ colors, hence $\chi(G)=3$. The $DSATUR$ coloring is optimal, the one of $GC$ with the list $(1,\dots,7)$ uses one color more:

        $$
        \frac{GC(I)}{\chi(G)}=\frac43,\qquad\frac{DSATUR(I)}{\chi(G)}=1 .
        $$

<a id="esercizio-26-8"></a>

!!! esercizio "Exercise 26.8: Vertex coloring approximation 2"

    We consider the crown graph $G_5$ with $n=10$ vertices: the vertices $1,\dots,5$ on one side, the vertices $6,\dots,10$ on the other, and vertex $i\in\{1,\dots,5\}$ adjacent to vertex $j+5$, $j\in\{1,\dots,5\}$, if and only if $i\neq j$:

    $$
    E=\big\{\{i,j+5\} : i,j\in\{1,\dots,5\},\ i\neq j\big\},\qquad |E|=20 .
    $$

    **Questions**

    1. Compute $\Delta(G_5)$ and $\chi(G_5)$.

    2. Apply $GC$ with the list $\lambda=(1,6,2,7,3,8,4,9,5,10)$ and give $GC(I)$. Compare it with $\Delta(G_5)+1$ and with $\chi(G_5)$.

    3. Give a list for which $GC$ is optimal.

    4. Apply $DSATUR$ and give $DSATUR(I)$.

??? soluzione "Solution"

    1. Each vertex $i\le5$ is adjacent to the $4$ vertices $j+5$ with $j\neq i$, and symmetrically: every degree is $4$ and $\Delta(G_5)=4$. The graph is bipartite (all the edges join $\{1,\dots,5\}$ and $\{6,\dots,10\}$) and has edges, so $\chi(G_5)=2$.

    2. With $u_i=i$ and $v_i=i+5$ the list is $(u_1,v_1,u_2,v_2,\dots,u_5,v_5)$, the bad list of the notes:

        <div class="tabella" markdown="0"><table>
        <tr>
        <th><span class="arithmatex">\(v\)</span></th>
        <th><span class="arithmatex">\(1\)</span></th>
        <th><span class="arithmatex">\(6\)</span></th>
        <th><span class="arithmatex">\(2\)</span></th>
        <th><span class="arithmatex">\(7\)</span></th>
        <th><span class="arithmatex">\(3\)</span></th>
        <th><span class="arithmatex">\(8\)</span></th>
        <th><span class="arithmatex">\(4\)</span></th>
        <th><span class="arithmatex">\(9\)</span></th>
        <th><span class="arithmatex">\(5\)</span></th>
        <th><span class="arithmatex">\(10\)</span></th>
        </tr>
        <tr>
        <td><span class="arithmatex">\(U\)</span></td>
        <td><span class="arithmatex">\(\emptyset\)</span></td>
        <td><span class="arithmatex">\(\emptyset\)</span></td>
        <td><span class="arithmatex">\(\{1\}\)</span></td>
        <td><span class="arithmatex">\(\{1\}\)</span></td>
        <td><span class="arithmatex">\(\{1,2\}\)</span></td>
        <td><span class="arithmatex">\(\{1,2\}\)</span></td>
        <td><span class="arithmatex">\(\{1,2,3\}\)</span></td>
        <td><span class="arithmatex">\(\{1,2,3\}\)</span></td>
        <td><span class="arithmatex">\(\{1,2,3,4\}\)</span></td>
        <td><span class="arithmatex">\(\{1,2,3,4\}\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(col[v]\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        </tr>
        </table></div>

        Vertices $i$ and $i+5$ are not adjacent and both get color $i$, so $GC(I)=5=\frac n2$. This is exactly the bound $\Delta(G_5)+1=5$, and

        $$
        \frac{GC(I)}{\chi(G_5)}=\frac52 .
        $$

    3. The list $(1,2,3,4,5,6,7,8,9,10)$, one side first: the vertices $1,\dots,5$ are pairwise non-adjacent and all get color $1$; each vertex $6,\dots,10$ has only neighbours of color $1$ and gets color $2$. Hence $GC(I)=2=\chi(G_5)$.

    4. At step $1$ all the vertices have degree $4$ and vertex $1$ is chosen (color $1$). Then:

        <div class="tabella" markdown="0"><table>
        <tr>
        <th>step</th>
        <th><span class="arithmatex">\(1\)</span></th>
        <th><span class="arithmatex">\(2\)</span></th>
        <th><span class="arithmatex">\(3\)</span></th>
        <th><span class="arithmatex">\(4\)</span></th>
        <th><span class="arithmatex">\(5\)</span></th>
        <th><span class="arithmatex">\(6\)</span></th>
        <th><span class="arithmatex">\(7\)</span></th>
        <th><span class="arithmatex">\(8\)</span></th>
        <th><span class="arithmatex">\(9\)</span></th>
        <th><span class="arithmatex">\(10\)</span></th>
        </tr>
        <tr>
        <td><span class="arithmatex">\(v\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(7\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(8\)</span></td>
        <td><span class="arithmatex">\(9\)</span></td>
        <td><span class="arithmatex">\(10\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(sat[v]\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(du[v]\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(col[v]\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        </tr>
        </table></div>

        At step $2$ the neighbours $7,8,9,10$ of vertex $1$ have saturation degree $1$ and $3$ uncolored neighbours each: vertex $7$ is chosen and gets color $2$. From then on, every vertex adjacent to a colored vertex has saturation degree $1$ (its colored neighbours are all on the other side, with the same color); the vertices of the side $\{1,\dots,5\}$ get color $1$ and those of the side $\{6,\dots,10\}$ color $2$. Hence $DSATUR(I)=2=\chi(G_5)$, as guaranteed on bipartite graphs.

<a id="esercizio-26-9"></a>

!!! esercizio "Exercise 26.9: Vertex coloring approximation 3"

    We consider the graph $G=(V,E)$ with $V=\{1,\dots,7\}$ ($n=7$) and $|E|=10$ edges:

    $$
    E=\big\{\{1,3\},\{1,5\},\{1,6\},\{2,4\},\{2,5\},\{2,7\},\{3,5\},\{4,6\},\{4,7\},\{6,7\}\big\}.
    $$

    ![Figure 2](../img/ex-pcmax-tsp-coloring-approximation/fig02.svg){ .fig loading=lazy  }

    **Questions**

    1. Apply $DSATUR$ (ties: largest degree among the uncolored vertices, then smallest index) and give $DSATUR(I)$.

    2. Show that $\chi(G)=3$.

    3. Suppose that a polynomial algorithm $\mathscr{A}$ had $\frac{\mathscr{A}(I)}{\chi(G)}<\frac43$ on every graph. What would $\mathscr{A}$ return on this graph? Why does this show that such an algorithm cannot exist unless $P=NP$?

    4. Is the result of Question 1 in contradiction with the bound $\Delta(G)+1$?

??? soluzione "Solution"

    1. The neighbourhoods are $N(1)=\{3,5,6\}$, $N(2)=\{4,5,7\}$, $N(3)=\{1,5\}$, $N(4)=\{2,6,7\}$, $N(5)=\{1,2,3\}$, $N(6)=\{1,4,7\}$, $N(7)=\{2,4,6\}$.

        <div class="tabella" markdown="0"><table>
        <tr>
        <th>step</th>
        <th><span class="arithmatex">\(1\)</span></th>
        <th><span class="arithmatex">\(2\)</span></th>
        <th><span class="arithmatex">\(3\)</span></th>
        <th><span class="arithmatex">\(4\)</span></th>
        <th><span class="arithmatex">\(5\)</span></th>
        <th><span class="arithmatex">\(6\)</span></th>
        <th><span class="arithmatex">\(7\)</span></th>
        </tr>
        <tr>
        <td><span class="arithmatex">\(v\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(7\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(sat[v]\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(du[v]\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(col[v]\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        </tr>
        </table></div>

        - Step $1$: vertex $1$ (degree $3$, smallest index among the vertices of degree $3$), color $1$.

        - Step $2$: the neighbours $3,5,6$ of vertex $1$ have saturation degree $1$; their uncolored neighbours are $1$, $2$, $2$ respectively, and vertex $5$ is chosen: color $2$.

        - Step $3$: vertex $3$ sees colors $1$ and $2$ (saturation degree $2$): color $3$.

        - Step $4$: the vertices $2$ (neighbour $5$) and $6$ (neighbour $1$) have saturation degree $1$ and two uncolored neighbours each; vertex $2$ is chosen and gets color $1$.

        - Step $5$: the vertices $4$, $6$, $7$ have saturation degree $1$ and two uncolored neighbours each; vertex $4$ gets color $2$.

        - Step $6$: vertex $6$ sees colors $1$ (vertex $1$) and $2$ (vertex $4$), vertex $7$ sees $1$ (vertex $2$) and $2$ (vertex $4$); both have saturation degree $2$ and one uncolored neighbour, and vertex $6$ gets color $3$.

        - Step $7$: vertex $7$ sees colors $1,2,3$ and gets color $4$.

        Hence $DSATUR(I)=4$.

    2. $\{1,3,5\}$ is a triangle, so $\chi(G)\ge3$. The coloring $Q_1=\{1,4\}$, $Q_2=\{2,3,6\}$, $Q_3=\{5,7\}$ is feasible (no edge inside a class: $\{1,4\}$, $\{2,3\}$, $\{2,6\}$, $\{3,6\}$, $\{5,7\}\notin E$), so $\chi(G)=3$ and

        $$
        \frac{DSATUR(I)}{\chi(G)}=\frac43 .
        $$

        The damage is done by step $5$: vertices $6$ and $7$ already see color $1$ (from vertices $1$ and $2$), and vertex $4$, their common neighbour, takes color $2$. The two adjacent vertices $6$ and $7$ are left with color $3$ only, and one of them needs a fourth color. In the optimal coloring vertex $4$ has the same color as vertex $1$.

    3. On this graph $\mathscr{A}(I)<\frac43\cdot3=4$, so $\mathscr{A}(I)\le3$: $\mathscr{A}$ would return a $3$-coloring. On a graph with $\chi(G)\ge4$, instead, $\mathscr{A}(I)\ge4$. Comparing $\mathscr{A}(I)$ with $3$ would decide 3-colorability, an NP-complete problem, in polynomial time. In particular, $DSATUR$ is not such an algorithm: on this graph its ratio is exactly $\frac43$.

    4. No: the degrees are $(3,3,2,3,3,3,3)$, so $\Delta(G)+1=4$ and $DSATUR(I)=4$ attains the bound. The bound $\Delta(G)+1$ limits the number of colors, it does not compare it with $\chi(G)$.
