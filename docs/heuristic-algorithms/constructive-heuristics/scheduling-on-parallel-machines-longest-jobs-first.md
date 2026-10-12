---
title: "Scheduling on parallel machines: longest jobs first"
---

# 24.6 Scheduling on parallel machines: longest jobs first { #sez-sec-PCM }

<div class="info-capitolo" markdown>

**Part 4 · Heuristic algorithms · Chapter 24** · [:material-book-open-variant: Chapter 24: Constructive](index.md) · [:material-file-pdf-box: Lecture notes, volume 4 (PDF)](../../pdf/lecture-notes-4-heuristic-algorithms.pdf) · [:material-pencil: Exercises: Constructive](../../exercises/constructive-heuristics.md) · [:material-gesture-tap: App: Bin packing heuristics](../../lab/bin-packing-heuristics.md) · [:material-gesture-tap: App: List scheduling and LPT](../../lab/list-scheduling-lpt.md) · [:material-gesture-tap: App: Vertex coloring: greedy and DSATUR](../../lab/coloring-greedy-dsatur.md)

</div>

- For $P\,||\,C_{\max}$ the elements are the assignments of jobs to machines, and every assignment is feasible. A natural greedy rule assigns each job to the machine that is currently <strong>least loaded</strong>, so that the loads grow as evenly as possible. As for the BPP, the rule chooses the machine, and the order of the jobs is a second, independent, choice.

## 24.6.1 List scheduling { #sez-sec-LIST }

!!! chiave ""

    The <em>List Scheduling Algorithm</em> (denoted by $LIST$) is a constructive heuristic for $P\,||\,C_{\max}$. It examines the jobs in the order of a given list $\rho$ and assigns each job to a machine with the smallest current load (in case of ties, the machine with the smallest index).

!!! algoritmo "Algorithm: List Scheduling"

    <div class="pseudocodice" markdown="0"><div class="pc" style="--liv:0"><strong>Input:</strong> <span class="arithmatex">\(P\,||\,C_{\max}\)</span> instance with <span class="arithmatex">\(n\)</span> jobs, times <span class="arithmatex">\(t[1..n]\)</span>, <span class="arithmatex">\(m\)</span> machines; list <span class="arithmatex">\(\rho[1..n]\)</span></div><div class="pc" style="--liv:0"><strong>Output:</strong> Job-machine assignment <span class="arithmatex">\(mach[1..n]\)</span> and makespan <span class="arithmatex">\(C_{\max}\)</span></div><div class="pc" style="--liv:0"><span class="pc-n">1</span><strong>Function</strong> ListScheduling(<span class="arithmatex">\(n, m, t, \rho\)</span>)</div><div class="pc" style="--liv:1"><span class="pc-n">2</span><span class="arithmatex">\(mach := \text{new array}[1..n]\)</span> <span class="pc-com">▹ job-machine assignment</span></div><div class="pc" style="--liv:1"><span class="pc-n">3</span><strong>for</strong> <span class="arithmatex">\(h := 1\)</span> <strong>to</strong> <span class="arithmatex">\(m\)</span> <strong>do</strong></div><div class="pc" style="--liv:2"><span class="pc-n">4</span><span class="arithmatex">\(L[h] \leftarrow 0\)</span> <span class="pc-com">▹ loads of the machines</span></div><div class="pc" style="--liv:1"><span class="pc-n">5</span><strong>end</strong></div><div class="pc" style="--liv:1"><span class="pc-n">6</span><strong>for</strong> <span class="arithmatex">\(k := 1\)</span> <strong>to</strong> <span class="arithmatex">\(n\)</span> <strong>do</strong></div><div class="pc" style="--liv:2"><span class="pc-n">7</span><span class="arithmatex">\(j := \rho[k]\)</span>
    <span class="arithmatex">\(s :=\)</span> a machine with minimum <span class="arithmatex">\(L[s]\)</span> (smallest index)
    <span class="arithmatex">\(mach[j] \leftarrow s\)</span>
    <span class="arithmatex">\(L[s] \leftarrow L[s] + t[j]\)</span> <span class="pc-com">▹ <span class="arithmatex">\(k\)</span>-th job of the list least loaded machine assign job <span class="arithmatex">\(j\)</span> to machine <span class="arithmatex">\(s\)</span></span></div><div class="pc" style="--liv:1"><span class="pc-n">8</span><strong>end</strong></div><div class="pc" style="--liv:1"><span class="pc-n">9</span><strong>return</strong> <span class="arithmatex">\(mach\)</span>, <span class="arithmatex">\(C_{\max}=\max_h L[h]\)</span></div></div>

- $LIST$ is the scheduling counterpart of an <em>online</em> rule: it does not need to know the future jobs, and it is used, for example, when jobs arrive one at a time. With a linear scan of the machines it runs in $O(nm)$ time, and in $O(n\log m)$ time with a heap of the loads.

- On the reference instance, $t=(5,5,4,4,3,3,3)$, the jobs are listed by non-increasing processing time, which is a favourable order. To see the effect of the order, the example examines the same jobs in the reverse list.

<a id="box-7-ex-list"></a>

!!! esempio "Example 24.5: $LIST$ on the reference instance, shortest jobs first"

    Consider the list $\rho=(7,6,5,4,3,2,1)$, i.e., the jobs by non-decreasing processing time. The loads before each assignment and the chosen machine are:

    <div class="tabella" markdown="0"><table>
    <tr>
    <th>job <span class="arithmatex">\(j\)</span></th>
    <th><span class="arithmatex">\(t_j\)</span></th>
    <th>loads <span class="arithmatex">\((L_1,L_2,L_3)\)</span> before</th>
    <th>machine</th>
    </tr>
    <tr>
    <td><span class="arithmatex">\(7\)</span></td>
    <td><span class="arithmatex">\(3\)</span></td>
    <td><span class="arithmatex">\((0,0,0)\)</span></td>
    <td><span class="arithmatex">\(1\)</span></td>
    </tr>
    <tr>
    <td><span class="arithmatex">\(6\)</span></td>
    <td><span class="arithmatex">\(3\)</span></td>
    <td><span class="arithmatex">\((3,0,0)\)</span></td>
    <td><span class="arithmatex">\(2\)</span></td>
    </tr>
    <tr>
    <td><span class="arithmatex">\(5\)</span></td>
    <td><span class="arithmatex">\(3\)</span></td>
    <td><span class="arithmatex">\((3,3,0)\)</span></td>
    <td><span class="arithmatex">\(3\)</span></td>
    </tr>
    <tr>
    <td><span class="arithmatex">\(4\)</span></td>
    <td><span class="arithmatex">\(4\)</span></td>
    <td><span class="arithmatex">\((3,3,3)\)</span></td>
    <td><span class="arithmatex">\(1\)</span></td>
    </tr>
    <tr>
    <td><span class="arithmatex">\(3\)</span></td>
    <td><span class="arithmatex">\(4\)</span></td>
    <td><span class="arithmatex">\((7,3,3)\)</span></td>
    <td><span class="arithmatex">\(2\)</span></td>
    </tr>
    <tr>
    <td><span class="arithmatex">\(2\)</span></td>
    <td><span class="arithmatex">\(5\)</span></td>
    <td><span class="arithmatex">\((7,7,3)\)</span></td>
    <td><span class="arithmatex">\(3\)</span></td>
    </tr>
    <tr>
    <td><span class="arithmatex">\(1\)</span></td>
    <td><span class="arithmatex">\(5\)</span></td>
    <td><span class="arithmatex">\((7,7,8)\)</span></td>
    <td><span class="arithmatex">\(1\)</span></td>
    </tr>
    </table></div>

    The final loads are $(12,7,8)$, with $J_1=\{7,4,1\}$, $J_2=\{6,3\}$, $J_3=\{5,2\}$, and $LIST(I)=12$:

    ![Figure 3](../../img/constructive-heuristics/fig03.svg){ .fig loading=lazy  }

    The last job of the list is one of the longest: when it arrives, the least loaded machine already has load $7$, and the makespan jumps to $12$, three units above the lower bound $9$ (dashed grey line).

<a id="box-8-prop-graham66"></a>

!!! teorema "Proposition 24.3"

    For every $P\,||\,C_{\max}$ instance $I$ and every list $\rho$,

    $$
    LIST(I) \;\le\; \left(2-\frac{1}{m}\right) z(I) .
    $$

??? dimostrazione "Proof"

    Proof omitted. The result is due to

    R.L. Graham, <em>Bounds for certain multiprocessing anomalies</em>, Bell System Technical Journal 45 (1966) 1563–1581. <span class="qed">□</span>

!!! chiave ""

    $LIST$ is a $\left(2-\frac{1}{m}\right)$-approximation algorithm for $P\,||\,C_{\max}$, whatever the order of the list.

- On the example, $LIST(I)=12\le \frac{5}{3}\cdot 9=15$.

## 24.6.2 Longest processing time first { #sez-sec-LPT }

!!! chiave ""

    The <em>Longest Processing Time first Algorithm</em> (denoted by $LPT$) is a constructive heuristic for $P\,||\,C_{\max}$. It sorts the jobs by non-increasing processing time and applies $LIST$ to this list: each job, from the longest to the shortest, is assigned to a least loaded machine.

!!! algoritmo "Algorithm: Longest Processing Time first"

    <div class="pseudocodice" markdown="0"><div class="pc" style="--liv:0"><strong>Input:</strong> <span class="arithmatex">\(P\,||\,C_{\max}\)</span> instance with <span class="arithmatex">\(n\)</span> jobs, times <span class="arithmatex">\(t[1..n]\)</span>, <span class="arithmatex">\(m\)</span> machines</div><div class="pc" style="--liv:0"><strong>Output:</strong> Job-machine assignment <span class="arithmatex">\(mach[1..n]\)</span> and makespan <span class="arithmatex">\(C_{\max}\)</span></div><div class="pc" style="--liv:0"><span class="pc-n">1</span><strong>Function</strong> LPT(<span class="arithmatex">\(n, m, t\)</span>)</div><div class="pc" style="--liv:1"><span class="pc-n">2</span><span class="arithmatex">\(\rho :=\)</span> the jobs sorted by non-increasing <span class="arithmatex">\(t[j]\)</span> (ties by index) <span class="pc-com">▹ longest jobs first</span></div><div class="pc" style="--liv:1"><span class="pc-n">3</span><strong>return</strong> ListScheduling(<span class="arithmatex">\(n, m, t, \rho\)</span>)</div></div>

- <strong>Why the longest jobs first.</strong> The makespan is decided by the job that finishes last. If the jobs are short at the end of the list, the last assignments can only add a little to the least loaded machine, and they act as “sand” that levels the loads. The parallel with FFD is exact: the large elements first, the small ones to fill the gaps.

- $LPT$ runs in $O(n\log n + n\log m)$ time.

<a id="box-9-ex-lpt"></a>

!!! esempio "Example 24.6: $LPT$ on the reference instance"

    The jobs are already sorted, $\rho=(1,2,3,4,5,6,7)$. Jobs $1$, $2$, $3$ go to the three empty machines, with loads $(5,5,4)$; job $4$ goes to machine $3$, the least loaded: $(5,5,8)$; job $5$ goes to machine $1$: $(8,5,8)$; job $6$ to machine $2$: $(8,8,8)$; job $7$ finds three machines with load $8$ and goes to machine $1$: $(11,8,8)$. Hence $J_1=\{1,5,7\}$, $J_2=\{2,6\}$, $J_3=\{3,4\}$, $mach=(1,2,3,3,1,2,1)$, and $LPT(I)=11$:

    ![Figure 4](../../img/constructive-heuristics/fig04.svg){ .fig loading=lazy  }

    The elementary lower bound of the notes on combinatorial optimization problems, already used in the notes on the definitions of heuristic algorithms, gives $z(I)\ge\max\left\{\max_j t_j,\left\lceil\frac{\sum_j t_j}{m}\right\rceil\right\}=\max\{5,9\}=9$, and $z(I)=9$. Sorting improves the makespan from $12$ to $11$, but $LPT$ is not optimal: after six jobs the loads are perfectly balanced, $(8,8,8)$, and the seventh job unbalances them by $3$.

<a id="box-10-prop-graham69"></a>

!!! teorema "Proposition 24.4"

    For every $P\,||\,C_{\max}$ instance $I$,

    $$
    LPT(I) \;\le\; \left(\frac{4}{3}-\frac{1}{3m}\right) z(I) .
    $$

??? dimostrazione "Proof"

    Proof omitted. The result is due to

    R.L. Graham, <em>Bounds on multiprocessing timing anomalies</em>, SIAM Journal on Applied Mathematics 17 (1969) 416–429. <span class="qed">□</span>

!!! chiave ""

    $LPT$ is a $\left(\frac{4}{3}-\frac{1}{3m}\right)$-approximation algorithm for $P\,||\,C_{\max}$: sorting the list lowers the guarantee of $LIST$ from $2-\frac{1}{m}$ to $\frac{4}{3}-\frac{1}{3m}$.

- For $m=3$ the bound is $\frac{4}{3}-\frac{1}{9}=\frac{11}{9}$, and on the reference instance

    $$
    \frac{LPT(I)}{z(I)}=\frac{11}{9}.
    $$

    The reference instance attains Graham's bound exactly: it belongs to the family of instances, given by Graham, with $2m+1$ jobs of processing times $2m-1,2m-1,2m-2,2m-2,\dots,m+1,m+1,m,m,m$, on which $LPT$ gives $4m-1$ and the optimum is $3m$. For $m=3$ these are the times $(5,5,4,4,3,3,3)$. The bound of [Proposition 24.4](#box-10-prop-graham69) therefore cannot be improved.

---

**Next:** [24.7 The travelling salesman problem: append or insert?](the-travelling-salesman-problem-append-or-insert.md)
