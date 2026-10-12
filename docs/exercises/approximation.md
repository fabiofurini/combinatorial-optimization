---
title: "Exercises · Approximation algorithms: definitions"
---

# Exercises · Approximation algorithms: definitions

<div class="info-capitolo" markdown>

**Exercises · Chapter 28** · each solution opens with a click · [:material-book-open-variant: Chapter 28: Definitions](../approximation-algorithms/approximation.md) · [:material-file-pdf-box: Exercises, volume 5 (PDF)](../pdf/exercises-5-approximation-algorithms.pdf)

</div>

<a id="esercizio-28-1"></a>

!!! esercizio "Exercise 28.1: Performance ratios and errors (1)"

    A heuristic algorithm $\mathscr{A}$ for a <strong>minimization</strong> problem and a heuristic algorithm $\mathscr{B}$ for a <strong>maximization</strong> problem give the following values on some instances:

    $$
    \begin{array}{lccccc}
    \hline {\mathscr{A}}\text{ (min)} & {I_1} & {I_2} & {I_3} & {I_4} & {I_5} \\
    \hline {\mathscr{A}(I)} & {12} & {9} & {15} & {20} & {7} \\
    {z(I)} & {10} & {9} & {10} & {16} & {6} \\
    \hline
    \end{array}
    $$

    $$
    \begin{array}{lccc}
    \hline {\mathscr{B}}\text{ (max)} & {I_1} & {I_2} & {I_3} \\
    \hline {\mathscr{B}(I)} & {30} & {25} & {16} \\
    {z(I)} & {36} & {25} & {24} \\
    \hline
    \end{array}
    $$

    **Questions**

    1. Compute the performance ratio, the additive error and the relative error of $\mathscr{A}$ on its five instances.

    2. Do the same for $\mathscr{B}$ on its three instances.

    3. Using only these data, which of the constants $\alpha=\frac{7}{5}$ and $\alpha=\frac{3}{2}$ can be a relative performance guarantee of $\mathscr{A}$? What would a proof that $\mathscr{A}$ is a $\frac{3}{2}$-approximation algorithm need?

    4. Suppose that $\mathscr{A}$ is proved to be a $\frac{3}{2}$-approximation algorithm. Is the guarantee tight? Give a lower bound on $r(\mathscr{A})$ and on $r(\mathscr{B})$.

??? soluzione "Solution"

    !!! nota ""

        Performance ratio: $\frac{\mathscr{A}(I)}{z(I)}$ (minimization), $\frac{z(I)}{\mathscr{A}(I)}$ (maximization). Additive error: $\mathscr{A}(I)-z(I)$ (minimization), $z(I)-\mathscr{A}(I)$ (maximization). Relative error: $\frac{\mathscr{A}(I)-z(I)}{z(I)}$ (minimization), $\frac{z(I)-\mathscr{A}(I)}{z(I)}$ (maximization). The worst-case performance ratio $r(\mathscr{A})$ is the supremum of the performance ratio over all the instances.

    1. For a minimization problem the ratio is $\frac{\mathscr{A}(I)}{z(I)}$:

        <div class="tabella" markdown="0"><table>
        <tr>
        <th>instance</th>
        <th><span class="arithmatex">\(\mathscr{A}(I)\)</span></th>
        <th><span class="arithmatex">\(z(I)\)</span></th>
        <th>ratio</th>
        <th>additive error</th>
        <th>relative error</th>
        </tr>
        <tr>
        <td><span class="arithmatex">\(I_1\)</span></td>
        <td><span class="arithmatex">\(12\)</span></td>
        <td><span class="arithmatex">\(10\)</span></td>
        <td><span class="arithmatex">\(\frac{6}{5}\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(\frac{1}{5}\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(I_2\)</span></td>
        <td><span class="arithmatex">\(9\)</span></td>
        <td><span class="arithmatex">\(9\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(I_3\)</span></td>
        <td><span class="arithmatex">\(15\)</span></td>
        <td><span class="arithmatex">\(10\)</span></td>
        <td><span class="arithmatex">\(\frac{3}{2}\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(\frac{1}{2}\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(I_4\)</span></td>
        <td><span class="arithmatex">\(20\)</span></td>
        <td><span class="arithmatex">\(16\)</span></td>
        <td><span class="arithmatex">\(\frac{5}{4}\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(\frac{1}{4}\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(I_5\)</span></td>
        <td><span class="arithmatex">\(7\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(\frac{7}{6}\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(\frac{1}{6}\)</span></td>
        </tr>
        </table></div>

    2. For a maximization problem the ratio is $\frac{z(I)}{\mathscr{B}(I)}$:

        <div class="tabella" markdown="0"><table>
        <tr>
        <th>instance</th>
        <th><span class="arithmatex">\(\mathscr{A}(I)\)</span></th>
        <th><span class="arithmatex">\(z(I)\)</span></th>
        <th>ratio</th>
        <th>additive error</th>
        <th>relative error</th>
        </tr>
        <tr>
        <td><span class="arithmatex">\(I_1\)</span></td>
        <td><span class="arithmatex">\(30\)</span></td>
        <td><span class="arithmatex">\(36\)</span></td>
        <td><span class="arithmatex">\(\frac{6}{5}\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(\frac{1}{6}\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(I_2\)</span></td>
        <td><span class="arithmatex">\(25\)</span></td>
        <td><span class="arithmatex">\(25\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(I_3\)</span></td>
        <td><span class="arithmatex">\(16\)</span></td>
        <td><span class="arithmatex">\(24\)</span></td>
        <td><span class="arithmatex">\(\frac{3}{2}\)</span></td>
        <td><span class="arithmatex">\(8\)</span></td>
        <td><span class="arithmatex">\(\frac{1}{3}\)</span></td>
        </tr>
        </table></div>

        All the ratios are at least $1$, as they must be for feasible solutions.

    3. On $I_3$ the ratio is $\frac{3}{2}>\frac{7}{5}$: $\alpha=\frac{7}{5}$ is not a relative performance guarantee. The data do not exclude $\alpha=\frac{3}{2}$, since every ratio is at most $\frac{3}{2}$. A proof must show $\mathscr{A}(I)\le\frac{3}{2}\,z(I)$ for <em>every</em> instance $I$: finitely many examples can only disprove a guarantee.

    4. Yes: the instance $I_3$ attains the ratio $\frac{3}{2}$, so no smaller constant is a guarantee, and $r(\mathscr{A})=\frac{3}{2}$. Without a proof, the data give only lower bounds: $r(\mathscr{A})\ge\frac{3}{2}$ and $r(\mathscr{B})\ge\frac{3}{2}$ (instance $I_3$ of $\mathscr{B}$).

<a id="esercizio-28-2"></a>

!!! esercizio "Exercise 28.2: A tight guarantee for a simple algorithm (1)"

    For $P\|C_{\max}$ consider the algorithm $\mathrm{ONE}$, which assigns all the jobs to machine $1$, so that $\mathrm{ONE}(I)=\sum_{j\in\mathscr{J}}t_j$. Every instance satisfies $z(I)\ge\frac{\sum_j t_j}{m}$, since the $m$ loads sum to $\sum_j t_j$. Consider the instances

    - **$I_1$:** $m=2$ and $t=(7,5,4,3,3)$;

    - **$I_2$:** $m=3$ and $t=(9,2,2,2,1)$;

    - **$I_3$:** $m=3$ and $t=(5,5,4,4,3,3,3)$;

    **Questions**

    1. Compute $\mathrm{ONE}(I)$, $z(I)$ (by enumeration) and the performance ratio on the three instances.

    2. Prove that $\mathrm{ONE}$ is an $m$-approximation algorithm for every fixed number $m$ of machines.

    3. Build, for every $m\ge 2$, an instance on which the ratio is exactly $m$, and check it with $m=4$. What can you conclude?

    4. Does $\mathrm{ONE}$ have a finite additive performance guarantee? Use the instance $I_1$ with all the processing times multiplied by $10$.

??? soluzione "Solution"

    !!! nota ""

        Performance ratio: $\frac{\mathscr{A}(I)}{z(I)}$ (minimization), $\frac{z(I)}{\mathscr{A}(I)}$ (maximization). Additive error: $\mathscr{A}(I)-z(I)$ (minimization), $z(I)-\mathscr{A}(I)$ (maximization). Relative error: $\frac{\mathscr{A}(I)-z(I)}{z(I)}$ (minimization), $\frac{z(I)-\mathscr{A}(I)}{z(I)}$ (maximization). The worst-case performance ratio $r(\mathscr{A})$ is the supremum of the performance ratio over all the instances.

    1. &#8203;

        <div class="tabella" markdown="0"><table>
        <tr>
        <th>instance</th>
        <th><span class="arithmatex">\(m\)</span></th>
        <th><span class="arithmatex">\(\mathrm{ONE}(I)\)</span></th>
        <th><span class="arithmatex">\(z(I)\)</span></th>
        <th>ratio</th>
        <th><span class="arithmatex">\(m\)</span></th>
        </tr>
        <tr>
        <td><span class="arithmatex">\(I_1\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(22\)</span></td>
        <td><span class="arithmatex">\(11\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(I_2\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(16\)</span></td>
        <td><span class="arithmatex">\(9\)</span></td>
        <td><span class="arithmatex">\(\frac{16}{9}\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(I_3\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(27\)</span></td>
        <td><span class="arithmatex">\(9\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        </tr>
        </table></div>

        The ratio never exceeds $m$, and it is equal to $m$ on $I_1$ and $I_3$.

    2. For every instance, $z(I)\ge\frac{\sum_j t_j}{m}$ gives

        $$
        \frac{\mathrm{ONE}(I)}{z(I)}=\frac{\sum_j t_j}{z(I)}\le\frac{\sum_j t_j}{\frac{\sum_j t_j}{m}}=m .
        $$

    3. Take $n=2m$ jobs of time $1$. Two jobs per machine give $z(I)=2$, while $\mathrm{ONE}(I)=2m$: the ratio is $m$. With $m=4$: $\mathrm{ONE}(I)=8$, $z(I)=2$ (enumeration) and the ratio is $4$. The guarantee $m$ is tight and $r(\mathrm{ONE})=m$.

    4. Multiplying the times of $I_1$ by $10$ gives $t=(70,50,40,30,30)$, with $\mathrm{ONE}(I)=220$ and $z(I)=110$: the additive error goes from $11$ to $110$. Multiplying by any $K$ multiplies the error by $K$, so no constant $\beta$ bounds it: $e(\mathrm{ONE})=\infty$, while the ratio stays $2$.

<a id="esercizio-28-3"></a>

!!! esercizio "Exercise 28.3: An algorithm without a guarantee (1)"

    For the BPP consider the algorithm $\mathrm{SEP}$, which packs every item in a separate bin, so that $\mathrm{SEP}(I)=n$. Consider the instance $I_0$ with $c=10$ and weights $(6,5,4,3,2)$, and, for $k\in\Z_{\ge 2}$, the instances $I_k$ with $c=k$ and $2k$ items of weight $1$.

    **Questions**

    1. Compute $\mathrm{SEP}(I_0)$, $z(I_0)$, the performance ratio and the additive error on $I_0$.

    2. Compute the performance ratio on $I_k$ for $k=3,5,10$ (use enumeration for $k=3$), and its expression for every $k$.

    3. Is $\mathrm{SEP}$ an $\alpha$-approximation algorithm for some constant $\alpha$? Give $r(\mathrm{SEP})$ and $e(\mathrm{SEP})$.

    4. Using $z(I)\ge 2$, show that $\frac{\mathrm{SEP}(I)}{z(I)}\le\frac{n}{2}$. Why is $\frac{n}{2}$ not a relative performance guarantee?

??? soluzione "Solution"

    !!! nota ""

        Performance ratio: $\frac{\mathscr{A}(I)}{z(I)}$ (minimization), $\frac{z(I)}{\mathscr{A}(I)}$ (maximization). Additive error: $\mathscr{A}(I)-z(I)$ (minimization), $z(I)-\mathscr{A}(I)$ (maximization). Relative error: $\frac{\mathscr{A}(I)-z(I)}{z(I)}$ (minimization), $\frac{z(I)-\mathscr{A}(I)}{z(I)}$ (maximization). The worst-case performance ratio $r(\mathscr{A})$ is the supremum of the performance ratio over all the instances.

    1. $\mathrm{SEP}(I_0)=5$ and $z(I_0)=2$ (patterns $\{1,3\}$ and $\{2,4,5\}$). The ratio is $\frac{5}{2}$ and the additive error is $5-2=3$.

    2. Two bins of capacity $k$ hold the $2k$ unit items, and one bin is not enough, so $z(I_k)=2$:

        <div class="tabella" markdown="0"><table>
        <tr>
        <th><span class="arithmatex">\(k\)</span></th>
        <th><span class="arithmatex">\(c\)</span></th>
        <th><span class="arithmatex">\(\mathrm{SEP}(I_k)=2k\)</span></th>
        <th><span class="arithmatex">\(z(I_k)\)</span></th>
        <th>ratio</th>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(6\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(10\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(10\)</span></td>
        <td><span class="arithmatex">\(10\)</span></td>
        <td><span class="arithmatex">\(20\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(10\)</span></td>
        </tr>
        </table></div>

        In general the ratio is $\frac{2k}{2}=k$.

    3. No: for every constant $\alpha$, the instance $I_k$ with $k>\alpha$ has ratio $k>\alpha$. Hence $r(\mathrm{SEP})=\infty$. The additive error on $I_k$ is $2k-2$, also unbounded: $e(\mathrm{SEP})=\infty$.

    4. The assumption $\sum_j w_j>c$ gives $z(I)\ge 2$, so $\frac{\mathrm{SEP}(I)}{z(I)}=\frac{n}{z(I)}\le\frac{n}{2}$. The bound depends on the instance through $n$: a relative performance guarantee must be one constant $\alpha$ valid for all the instances.

<a id="esercizio-28-4"></a>

!!! esercizio "Exercise 28.4: Unbounded ratio of a greedy algorithm (1)"

    For the KP consider the algorithm $\mathrm{GR}$: sort the items by non-increasing efficiency $\frac{p_j}{w_j}$ (ties: smallest index) and insert each item, in this order, if it fits in the residual capacity. Consider the instance $I_0$ with $c=9$, $p=(10,7,6,4)$, $w=(5,4,3,3)$, and, for $M\in\Z_{\ge 3}$, the instances $I_M$ with $c=M$ and two items: $p_1=2$, $w_1=1$ and $p_2=M$, $w_2=M$.

    **Questions**

    1. Apply $\mathrm{GR}$ to $I_0$, compute $z(I_0)$ by enumeration, the performance ratio and the relative error.

    2. Apply $\mathrm{GR}$ to $I_M$ and compute $z(I_M)$, the performance ratio and the additive error for $M=3,10,100$.

    3. Is $\mathrm{GR}$ an $\alpha$-approximation algorithm for some constant $\alpha$? Is it a $\beta$-additive approximation algorithm?

    4. Which property of the instances $I_M$ makes $\mathrm{GR}$ fail?

??? soluzione "Solution"

    !!! nota ""

        Performance ratio: $\frac{\mathscr{A}(I)}{z(I)}$ (minimization), $\frac{z(I)}{\mathscr{A}(I)}$ (maximization). Additive error: $\mathscr{A}(I)-z(I)$ (minimization), $z(I)-\mathscr{A}(I)$ (maximization). Relative error: $\frac{\mathscr{A}(I)-z(I)}{z(I)}$ (minimization), $\frac{z(I)-\mathscr{A}(I)}{z(I)}$ (maximization). The worst-case performance ratio $r(\mathscr{A})$ is the supremum of the performance ratio over all the instances.

    1. The efficiencies are $2$, $\frac{7}{4}$, $2$, $\frac{4}{3}$: the order is $(1,3,2,4)$. $\mathrm{GR}$ inserts items $1$, $3$ and gets $\mathrm{GR}(I_0)=16$. Enumeration gives $z(I_0)=17$ (items $\{1,2\}$). The ratio is $\frac{17}{16}=\frac{17}{16}$ and the relative error is $\frac{17-16}{17}=\frac{1}{17}$.

    2. Item $1$ has efficiency $2$ and item $2$ has efficiency $1$: $\mathrm{GR}$ inserts item $1$, and then item $2$ does not fit in the residual capacity $M-1$. Hence $\mathrm{GR}(I_M)=2$, while item $2$ alone gives $z(I_M)=M$:

        <div class="tabella" markdown="0"><table>
        <tr>
        <th><span class="arithmatex">\(M\)</span></th>
        <th><span class="arithmatex">\(\mathrm{GR}(I_M)\)</span></th>
        <th><span class="arithmatex">\(z(I_M)\)</span></th>
        <th>ratio</th>
        <th>additive error</th>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(\frac{3}{2}\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(10\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(10\)</span></td>
        <td><span class="arithmatex">\(5\)</span></td>
        <td><span class="arithmatex">\(8\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(100\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(100\)</span></td>
        <td><span class="arithmatex">\(50\)</span></td>
        <td><span class="arithmatex">\(98\)</span></td>
        </tr>
        </table></div>

    3. The ratio $\frac{M}{2}$ grows without limit, so no constant $\alpha$ works and $r(\mathrm{GR})=\infty$. The additive error $M-2$ is also unbounded: $e(\mathrm{GR})=\infty$.

    4. The efficient item is small and blocks the large item, whose profit is almost all the optimal value: the order by efficiency ignores how much profit an item brings in absolute terms.

<a id="esercizio-28-5"></a>

!!! esercizio "Exercise 28.5: Approximation schemes (1)"

    An approximation scheme $\{\mathscr{A}_\varepsilon\}_{\varepsilon\in(0,1)}$ is run on some instances. The table gives the type of problem, the accuracy parameter $\varepsilon$, the optimal value and the value returned:

    <div class="tabella" markdown="0"><table>
    <tr>
    <th>case</th>
    <th>problem</th>
    <th><span class="arithmatex">\(\varepsilon\)</span></th>
    <th><span class="arithmatex">\(z(I)\)</span></th>
    <th><span class="arithmatex">\(\mathscr{A}_\varepsilon(I)\)</span></th>
    </tr>
    <tr>
    <td>(1)</td>
    <td>minimization</td>
    <td><span class="arithmatex">\(\frac{1}{10}\)</span></td>
    <td><span class="arithmatex">\(100\)</span></td>
    <td><span class="arithmatex">\(108\)</span></td>
    </tr>
    <tr>
    <td>(2)</td>
    <td>minimization</td>
    <td><span class="arithmatex">\(\frac{1}{10}\)</span></td>
    <td><span class="arithmatex">\(60\)</span></td>
    <td><span class="arithmatex">\(67\)</span></td>
    </tr>
    <tr>
    <td>(3)</td>
    <td>maximization</td>
    <td><span class="arithmatex">\(\frac{1}{5}\)</span></td>
    <td><span class="arithmatex">\(50\)</span></td>
    <td><span class="arithmatex">\(41\)</span></td>
    </tr>
    <tr>
    <td>(4)</td>
    <td>maximization</td>
    <td><span class="arithmatex">\(\frac{1}{5}\)</span></td>
    <td><span class="arithmatex">\(50\)</span></td>
    <td><span class="arithmatex">\(38\)</span></td>
    </tr>
    </table></div>

    **Questions**

    1. For each case, compute the relative error and decide whether the value is compatible with the definition of an approximation scheme.

    2. Translate $\varepsilon=\frac{1}{4}$ into a relative performance guarantee, for a minimization and for a maximization problem. What is the accuracy?

    3. A scheme for a maximization problem must be a $\frac{5}{4}$-approximation algorithm. Which value of $\varepsilon$ is needed?

    4. Classify the following running times of an approximation scheme on instances of size $n$: $O(n^{1/\varepsilon})$, $O(n^{3}/\varepsilon)$, $O(n\,2^{1/\varepsilon})$, $O(n^{2}/\varepsilon^{2})$, $O(2^{n}/\varepsilon)$.

??? soluzione "Solution"

    1. - **(1)** $\frac{108-100}{100}=\frac{2}{25}$ $\le$ $\frac{1}{10}$: compatible.

        - **(2)** $\frac{67-60}{60}=\frac{7}{60}$ $>$ $\frac{1}{10}$: not compatible, the scheme is wrong on this instance.

        - **(3)** $\frac{50-41}{50}=\frac{9}{50}$ $\le$ $\frac{1}{5}$: compatible.

        - **(4)** $\frac{50-38}{50}=\frac{6}{25}$ $>$ $\frac{1}{5}$: not compatible, the scheme is wrong on this instance.

    2. For a minimization problem $\mathscr{A}_\varepsilon(I)\le(1+\varepsilon)\,z(I)$, so the guarantee is $1+\frac{1}{4}=\frac{5}{4}$. For a maximization problem $\mathscr{A}_\varepsilon(I)\ge(1-\varepsilon)\,z(I)$, so the guarantee is $\frac{1}{1-\varepsilon}=\frac{4}{3}$. The accuracy is $\frac{1}{\varepsilon}=4$.

    3. We need $\frac{1}{1-\varepsilon}\le\frac{5}{4}$, that is $1-\varepsilon\ge\frac{4}{5}$ and $\varepsilon\le\frac{1}{5}$: any $\varepsilon\le\frac{1}{5}$ works, and $\varepsilon=\frac{1}{5}$ is the largest one.

    4. - $O(n^{1/\varepsilon})$: PTAS, not FPTAS.

        - $O(n^{3}/\varepsilon)$: FPTAS.

        - $O(n\,2^{1/\varepsilon})$: PTAS, not FPTAS.

        - $O(n^{2}/\varepsilon^{2})$: FPTAS.

        - $O(2^{n}/\varepsilon)$: not a PTAS.

        A PTAS needs a polynomial in $n$ for every fixed $\varepsilon$; an FPTAS needs a polynomial in both $n$ and $\frac{1}{\varepsilon}$. The terms $n^{1/\varepsilon}$ and $2^{1/\varepsilon}$ are not polynomial in $\frac{1}{\varepsilon}$, and $2^n$ is not polynomial in $n$.
