---
title: "Exercises · Approximation algorithms for bin packing"
---

# Exercises · Approximation algorithms for bin packing

<div class="info-capitolo" markdown>

**Exercises · Chapter 24** · each solution opens with a click · [:material-book-open-variant: Chapter 24](../approximation-algorithms/bin-packing-approximation.md)

</div>

## Next Fit

<a id="esercizio-24-1"></a>

!!! esercizio "Exercise 24.1: Next Fit 1"

    We consider a bin of capacity $c = 10$ and a set $\mathscr{I} = \{1,2,3,4\}$ of $4$ items ($n=4$), with the following item weights:

    <div class="tabella" markdown="0"><table>
    <tr>
    <th></th>
    <th><span class="arithmatex">\(i=1\)</span></th>
    <th><span class="arithmatex">\(i=2\)</span></th>
    <th><span class="arithmatex">\(i=3\)</span></th>
    <th><span class="arithmatex">\(i=4\)</span></th>
    </tr>
    <tr>
    <td><span class="arithmatex">\(w_i\)</span></td>
    <td><span class="arithmatex">\(6\)</span></td>
    <td><span class="arithmatex">\(6\)</span></td>
    <td><span class="arithmatex">\(4\)</span></td>
    <td><span class="arithmatex">\(4\)</span></td>
    </tr>
    </table></div>

    **Questions**

    1. Apply the Next Fit (NF) algorithm to this instance. Show the execution step by step, indicating at each iteration whether the item is packed into the currently open bin or a new bin is opened, and the resulting residual capacity. State the final bin assignment and $NF(I)$.

    2. Construct the packing patterns $P_1,\dots,P_{NF(I)}$ from the bin vector obtained in Question 1.

    3. Compute a lower bound on $z(I)$ and determine whether NF finds an optimal solution on this instance.

    4. Verify whether the packing patterns found by NF satisfy the half-full property (i.e., at most one packing pattern has total weight at most $c/2$), and determine whether the solution found is optimal for this BPP instance, either by comparing $NF(I)$ with a lower bound on $z(I)$, or by exhibiting a feasible solution of strictly smaller value.

??? soluzione "Solution"

    1. The NF algorithm produces the following feasible solution:

        1. Item $1$ (weight $6$) is packed into bin $1$. The residual capacity of bin $1$ becomes $10-6=4$.

        2. Item $2$ (weight $6$) does not fit into bin $1$ (residual capacity $4$). Thus bin $1$ is closed and item $2$ is packed into a new bin $2$. The residual capacity of bin $2$ becomes $10-6=4$.

        3. Item $3$ (weight $4$) is packed into bin $2$. The residual capacity of bin $2$ becomes $4-4=0$.

        4. Item $4$ (weight $4$) does not fit into bin $2$ (residual capacity $0$). Thus bin $2$ is closed and item $4$ is packed into a new bin $3$. The residual capacity of bin $3$ becomes $10-4=6$.

        Hence NF returns:

        $$
        bin = \begin{pmatrix} 1 & 2 & 2 & 3 \end{pmatrix},
        \qquad
        nb=3.
        $$

        and therefore

        $$
        NF(I)=nb=3.
        $$

    2. From the bin vector $bin=(1,2,2,3)$, the packing patterns are

        \begin{align*}
        P_1 &= \{ i \in \{1,2,3,4\} : bin_i = 1 \} = \{1\},\\
        P_2 &= \{ i \in \{1,2,3,4\} : bin_i = 2 \} = \{2,3\},\\
        P_3 &= \{ i \in \{1,2,3,4\} : bin_i = 3 \} = \{4\}.
        \end{align*}

    3. Accordingly, $3$ is an upper bound on the optimal number of bins for this instance:

        $$
        z(I)\le 3.
        $$

        Moreover,

        $$
        z(I)\ge \left\lceil \frac{\sum_{i\in\mathscr{I}} w_i}{c} \right\rceil = \left\lceil \frac{6+6+4+4}{10} \right\rceil= \left\lceil \frac{20}{10} \right\rceil =2.
        $$

        In addition, the following is a feasible BPP solution:

        $$
        \tilde{P}_1 = \{1,3\},\qquad \tilde{P}_2 = \{2,4\}
        $$

        which uses $2$ bins; hence $z(I)\le 2$. Therefore $z(I)=2$, and NF does <strong>not</strong> compute an optimal solution on this instance.

    4. From Question 2, the packing patterns found by NF have total weights

        $$
        \sum_{i\in P_1} w_i = 6, \qquad \sum_{i\in P_2} w_i = 6+4=10, \qquad \sum_{i\in P_3} w_i = 4.
        $$

        Since $c/2=5$, only $P_3$ has total weight at most $c/2$ (the other two exceed it); hence the solution <strong>satisfies</strong> the half-full property.

        As shown in Question 3, $NF(I)=3$ while the feasible solution $\tilde{P}_1=\{1,3\}$, $\tilde{P}_2=\{2,4\}$ uses only $2$ bins; since this is strictly smaller than $NF(I)$, the solution found by NF is <strong>not optimal</strong> (indeed $z(I)=2<NF(I)=3$).

<a id="esercizio-24-2"></a>

!!! esercizio "Exercise 24.2: Next Fit 2"

    We consider a bin of capacity $c = 10$ and a set $\mathscr{I} = \{1,2,3,4\}$ of $4$ items ($n=4$), with the following item weights:

    <div class="tabella" markdown="0"><table>
    <tr>
    <th></th>
    <th><span class="arithmatex">\(i=1\)</span></th>
    <th><span class="arithmatex">\(i=2\)</span></th>
    <th><span class="arithmatex">\(i=3\)</span></th>
    <th><span class="arithmatex">\(i=4\)</span></th>
    </tr>
    <tr>
    <td><span class="arithmatex">\(w_i\)</span></td>
    <td><span class="arithmatex">\(7\)</span></td>
    <td><span class="arithmatex">\(7\)</span></td>
    <td><span class="arithmatex">\(3\)</span></td>
    <td><span class="arithmatex">\(3\)</span></td>
    </tr>
    </table></div>

    **Questions**

    1. Apply the Next Fit (NF) algorithm to this instance. Show the execution step by step, indicating at each iteration whether the item is packed into the currently open bin or a new bin is opened, and the resulting residual capacity. State the final bin assignment and $NF(I)$.

    2. Construct the packing patterns $P_1,\dots,P_{NF(I)}$ from the bin vector obtained in Question 1.

    3. Compute a lower bound on $z(I)$ and determine whether NF finds an optimal solution on this instance.

    4. Verify whether the packing patterns found by NF satisfy the half-full property (i.e., at most one packing pattern has total weight at most $c/2$), and determine whether the solution found is optimal for this BPP instance, either by comparing $NF(I)$ with a lower bound on $z(I)$, or by exhibiting a feasible solution of strictly smaller value.

??? soluzione "Solution"

    1. The NF algorithm produces the following feasible solution:

        1. Item $1$ (weight $7$) is packed into bin $1$. The residual capacity of bin $1$ becomes $10-7=3$.

        2. Item $2$ (weight $7$) does not fit into bin $1$ (residual capacity $3$). Thus bin $1$ is closed and item $2$ is packed into a new bin $2$. The residual capacity of bin $2$ becomes $10-7=3$.

        3. Item $3$ (weight $3$) is packed into bin $2$ (residual capacity $3$). The residual capacity of bin $2$ becomes $3-3=0$.

        4. Item $4$ (weight $3$) does not fit into bin $2$ (residual capacity $0$). Thus bin $2$ is closed and item $4$ is packed into a new bin $3$. The residual capacity of bin $3$ becomes $10-3=7$.

        Hence NF returns:

        $$
        bin = \begin{pmatrix} 1 & 2 & 2 & 3 \end{pmatrix},
        \qquad
        nb=3.
        $$

        and therefore

        $$
        NF(I)=nb=3.
        $$

    2. From the bin vector $bin=(1,2,2,3)$, the packing patterns are

        \begin{align*}
        P_1 &= \{ i \in \{1,2,3,4\} : bin_i = 1 \} = \{1\},\\
        P_2 &= \{ i \in \{1,2,3,4\} : bin_i = 2 \} = \{2,3\},\\
        P_3 &= \{ i \in \{1,2,3,4\} : bin_i = 3 \} = \{4\}.
        \end{align*}

    3. Accordingly, $3$ is an upper bound on the optimal number of bins for this instance:

        $$
        z(I)\le 3.
        $$

        Moreover,

        $$
        z(I)\ge \left\lceil \frac{\sum_{i\in\mathscr{I}} w_i}{c} \right\rceil = \left\lceil \frac{7+7+3+3}{10} \right\rceil= \left\lceil \frac{20}{10} \right\rceil =2.
        $$

        In addition, the following is a feasible BPP solution:

        $$
        \tilde{P}_1 = \{1,3\},\qquad \tilde{P}_2 = \{2,4\}
        $$

        which uses $2$ bins (since $w_1+w_3=7+3=10$ and $w_2+w_4=7+3=10$); hence $z(I)\le 2$. Therefore $z(I)=2$, and NF does <strong>not</strong> compute an optimal solution on this instance.

    4. From Question 2, the packing patterns found by NF have total weights

        $$
        \sum_{i\in P_1} w_i = 7, \qquad \sum_{i\in P_2} w_i = 7+3=10, \qquad \sum_{i\in P_3} w_i = 3.
        $$

        Since $c/2=5$, only $P_3$ has total weight at most $c/2$ (the other two exceed it); hence the solution <strong>satisfies</strong> the half-full property.

        As shown in Question 3, $NF(I)=3$ while the feasible solution $\tilde{P}_1=\{1,3\}$, $\tilde{P}_2=\{2,4\}$ uses only $2$ bins; since this is strictly smaller than $NF(I)$, the solution found by NF is <strong>not optimal</strong> (indeed $z(I)=2<NF(I)=3$).

<a id="esercizio-24-3"></a>

!!! esercizio "Exercise 24.3: Next Fit 3"

    We consider a bin of capacity $c = 10$ and a set $\mathscr{I} = \{1,2,3,4,5\}$ of $5$ items ($n=5$), with the following item weights:

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
    <td><span class="arithmatex">\(w_i\)</span></td>
    <td><span class="arithmatex">\(4\)</span></td>
    <td><span class="arithmatex">\(7\)</span></td>
    <td><span class="arithmatex">\(6\)</span></td>
    <td><span class="arithmatex">\(3\)</span></td>
    <td><span class="arithmatex">\(5\)</span></td>
    </tr>
    </table></div>

    **Questions**

    1. Apply the Next Fit (NF) algorithm to this instance. Show the execution step by step, indicating at each iteration whether the item is packed into the currently open bin or a new bin is opened, and the resulting residual capacity. State the final bin assignment and $NF(I)$.

    2. Construct the packing patterns $P_1,\dots,P_{NF(I)}$ from the bin vector obtained in Question 1.

    3. Compute a lower bound on $z(I)$ and determine whether NF finds an optimal solution on this instance.

    4. Verify whether the packing patterns found by NF satisfy the half-full property (i.e., at most one packing pattern has total weight at most $c/2$), and determine whether the solution found is optimal for this BPP instance, either by comparing $NF(I)$ with a lower bound on $z(I)$, or by exhibiting a feasible solution of strictly smaller value.

??? soluzione "Solution"

    1. The NF algorithm produces the following feasible solution:

        1. Item $1$ (weight $4$) is packed into bin $1$. The residual capacity of bin $1$ becomes $10-4=6$.

        2. Item $2$ (weight $7$) does not fit into bin $1$ (residual capacity $6$). Thus bin $1$ is closed and item $2$ is packed into a new bin $2$. The residual capacity of bin $2$ becomes $10-7=3$.

        3. Item $3$ (weight $6$) does not fit into bin $2$ (residual capacity $3$). Thus bin $2$ is closed and item $3$ is packed into a new bin $3$. The residual capacity of bin $3$ becomes $10-6=4$.

        4. Item $4$ (weight $3$) is packed into bin $3$ (residual capacity $4$). The residual capacity of bin $3$ becomes $4-3=1$.

        5. Item $5$ (weight $5$) does not fit into bin $3$ (residual capacity $1$). Thus bin $3$ is closed and item $5$ is packed into a new bin $4$. The residual capacity of bin $4$ becomes $10-5=5$.

        Hence NF returns:

        $$
        bin = \begin{pmatrix} 1 & 2 & 3 & 3 & 4 \end{pmatrix},
        \qquad
        nb=4.
        $$

        and therefore

        $$
        NF(I)=nb=4.
        $$

    2. From the bin vector $bin=(1,2,3,3,4)$, the packing patterns are

        \begin{align*}
        P_1 &= \{ i : bin_i = 1 \} = \{1\},\\
        P_2 &= \{ i : bin_i = 2 \} = \{2\},\\
        P_3 &= \{ i : bin_i = 3 \} = \{3,4\},\\
        P_4 &= \{ i : bin_i = 4 \} = \{5\}.
        \end{align*}

    3. Accordingly, $4$ is an upper bound on the optimal number of bins for this instance:

        $$
        z(I)\le 4.
        $$

        Moreover,

        $$
        z(I)\ge \left\lceil \frac{\sum_{i\in\mathscr{I}} w_i}{c} \right\rceil = \left\lceil \frac{4+7+6+3+5}{10} \right\rceil= \left\lceil \frac{25}{10} \right\rceil =3.
        $$

        In addition, the following is a feasible BPP solution:

        $$
        \tilde{P}_1 = \{2,4\},\qquad \tilde{P}_2 = \{1,3\}, \qquad \tilde{P}_3 = \{5\}
        $$

        which uses $3$ bins (since $w_2+w_4=7+3=10$ and $w_1+w_3=4+6=10$); hence $z(I)\le 3$. Therefore $z(I)=3$, and NF does <strong>not</strong> compute an optimal solution on this instance.

    4. From Question 2, the packing patterns found by NF have total weights

        $$
        \sum_{i\in P_1} w_i = 4, \qquad \sum_{i\in P_2} w_i = 7, \qquad \sum_{i\in P_3} w_i = 6+3=9, \qquad \sum_{i\in P_4} w_i = 5.
        $$

        Since $c/2=5$, <em>both</em> $P_1$ (weight $4$) and $P_4$ (weight $5$) have total weight at most $c/2$; hence the solution found by NF <strong>does not satisfy</strong> the half-full property (this is possible precisely because NF is not an Any Fit algorithm).

        As shown in Question 3, $NF(I)=4$ while the feasible solution $\tilde{P}_1=\{2,4\}$, $\tilde{P}_2=\{1,3\}$, $\tilde{P}_3=\{5\}$ uses only $3$ bins; since this is strictly smaller than $NF(I)$, the solution found by NF is <strong>not optimal</strong> (indeed $z(I)=3<NF(I)=4$).

## First Fit

<a id="esercizio-24-4"></a>

!!! esercizio "Exercise 24.4: First Fit 1"

    We consider a bin of capacity $c = 10$ and a set $\mathscr{I} = \{1,2,3,4\}$ of $4$ items ($n=4$), with the following item weights:

    <div class="tabella" markdown="0"><table>
    <tr>
    <th></th>
    <th><span class="arithmatex">\(i=1\)</span></th>
    <th><span class="arithmatex">\(i=2\)</span></th>
    <th><span class="arithmatex">\(i=3\)</span></th>
    <th><span class="arithmatex">\(i=4\)</span></th>
    </tr>
    <tr>
    <td><span class="arithmatex">\(w_i\)</span></td>
    <td><span class="arithmatex">\(6\)</span></td>
    <td><span class="arithmatex">\(6\)</span></td>
    <td><span class="arithmatex">\(4\)</span></td>
    <td><span class="arithmatex">\(4\)</span></td>
    </tr>
    </table></div>

    **Questions**

    1. Apply the First Fit (FF) algorithm to this instance. Show the execution step by step, indicating at each iteration which bin the item is packed into (scanning bins in the order they were opened) and the resulting residual capacity. State the final bin assignment and $FF(I)$.

    2. Construct the packing patterns $P_1,\dots,P_{FF(I)}$ from the bin vector obtained in Question 1.

    3. Compute a lower bound on $z(I)$ and determine whether FF finds an optimal solution on this instance.

    4. Verify whether the packing patterns found by FF satisfy the half-full property (i.e., at most one packing pattern has total weight at most $c/2$), and determine whether the solution found is optimal for this BPP instance, either by comparing $FF(I)$ with a lower bound on $z(I)$, or by exhibiting a feasible solution of strictly smaller value.

??? soluzione "Solution"

    1. Recall the FF pseudocode: for each item $i$, $s:=-1$ and, for $b:=1$ to $nb$, if $w[i]\le rc[b]$ then $s\leftarrow b$ and stop the scan; if $s=-1$ after the scan, a new bin is opened.

        1. Item $1$ (weight $6$): bin $1$ is open at the start ($nb=1$, $rc[1]=c=10$) and $w[1]\le rc[1]$, so $s=1$ and FF packs item $1$ into bin $1$, and $rc[1]\leftarrow 10-6=4$.

        2. Item $2$ (weight $6$): $b=1$: $w[2]=6\le rc[1]=4$? No. No bin fits, so FF opens bin $2$ ($rc[2]\leftarrow 10$). Item $2$ is packed into bin $2$, and $rc[2]\leftarrow 10-6=4$.

        3. Item $3$ (weight $4$): $b=1$: $w[3]=4\le rc[1]=4$? Yes, so $s\leftarrow 1$ and the scan stops. Item $3$ is packed into bin $1$, and $rc[1]\leftarrow 4-4=0$.

        4. Item $4$ (weight $4$): $b=1$: $w[4]=4\le rc[1]=0$? No. $b=2$: $w[4]=4\le rc[2]=4$? Yes, so $s\leftarrow 2$. Item $4$ is packed into bin $2$, and $rc[2]\leftarrow 4-4=0$.

        Hence FF returns:

        $$
        bin = \begin{pmatrix} 1 & 2 & 1 & 2 \end{pmatrix},
        \qquad
        nb=2.
        $$

        and therefore

        $$
        FF(I)=nb=2.
        $$

    2. From the bin vector $bin=(1,2,1,2)$, the packing patterns are

        \begin{align*}
        P_1 &= \{ i \in \{1,2,3,4\} : bin_i = 1 \} = \{1,3\},\\
        P_2 &= \{ i \in \{1,2,3,4\} : bin_i = 2 \} = \{2,4\}.
        \end{align*}

    3. Accordingly,

        $$
        z(I)\le 2.
        $$

        Moreover,

        $$
        z(I)\ge \left\lceil \frac{\sum_{i\in\mathscr{I}} w_i}{c} \right\rceil = \left\lceil \frac{6+6+4+4}{10} \right\rceil= \left\lceil \frac{20}{10} \right\rceil =2.
        $$

        Hence $z(I)=2$ and FF computes an <strong>optimal</strong> solution on this instance.

    4. From Question 2, the packing patterns found by FF have total weights

        $$
        \sum_{i\in P_1} w_i = 6+4=10, \qquad \sum_{i\in P_2} w_i = 6+4=10.
        $$

        Since $c/2=5$, no packing pattern has total weight at most $c/2$; in particular <em>at most one</em> does, so the solution <strong>satisfies</strong> the half-full property.

        Since $FF(I)=2$ matches the lower bound $z(I)\ge 2$ found in Question 3, the solution found by FF is <strong>optimal</strong>.

<a id="esercizio-24-5"></a>

!!! esercizio "Exercise 24.5: First Fit 2"

    We consider a bin of capacity $c = 10$ and a set $\mathscr{I} = \{1,2,3,4\}$ of $4$ items ($n=4$), with the following item weights:

    <div class="tabella" markdown="0"><table>
    <tr>
    <th></th>
    <th><span class="arithmatex">\(i=1\)</span></th>
    <th><span class="arithmatex">\(i=2\)</span></th>
    <th><span class="arithmatex">\(i=3\)</span></th>
    <th><span class="arithmatex">\(i=4\)</span></th>
    </tr>
    <tr>
    <td><span class="arithmatex">\(w_i\)</span></td>
    <td><span class="arithmatex">\(7\)</span></td>
    <td><span class="arithmatex">\(7\)</span></td>
    <td><span class="arithmatex">\(3\)</span></td>
    <td><span class="arithmatex">\(3\)</span></td>
    </tr>
    </table></div>

    **Questions**

    1. Apply the First Fit (FF) algorithm to this instance. Show the execution step by step, indicating at each iteration which bin the item is packed into (scanning bins in the order they were opened) and the resulting residual capacity. State the final bin assignment and $FF(I)$.

    2. Construct the packing patterns $P_1,\dots,P_{FF(I)}$ from the bin vector obtained in Question 1.

    3. Compute a lower bound on $z(I)$ and determine whether FF finds an optimal solution on this instance.

    4. Verify whether the packing patterns found by FF satisfy the half-full property (i.e., at most one packing pattern has total weight at most $c/2$), and determine whether the solution found is optimal for this BPP instance, either by comparing $FF(I)$ with a lower bound on $z(I)$, or by exhibiting a feasible solution of strictly smaller value.

??? soluzione "Solution"

    1. Recall the FF pseudocode: for each item $i$, $s:=-1$ and, for $b:=1$ to $nb$, if $w[i]\le rc[b]$ then $s\leftarrow b$ and stop the scan; if $s=-1$ after the scan, a new bin is opened.

        1. Item $1$ (weight $7$): bin $1$ is open at the start ($nb=1$, $rc[1]=c=10$) and $w[1]\le rc[1]$, so $s=1$ and FF packs item $1$ into bin $1$, and $rc[1]\leftarrow 10-7=3$.

        2. Item $2$ (weight $7$): $b=1$: $w[2]=7\le rc[1]=3$? No. No bin fits, so FF opens bin $2$ ($rc[2]\leftarrow 10$). Item $2$ is packed into bin $2$, and $rc[2]\leftarrow 10-7=3$.

        3. Item $3$ (weight $3$): $b=1$: $w[3]=3\le rc[1]=3$? Yes, so $s\leftarrow 1$ and the scan stops. Item $3$ is packed into bin $1$, and $rc[1]\leftarrow 3-3=0$.

        4. Item $4$ (weight $3$): $b=1$: $w[4]=3\le rc[1]=0$? No. $b=2$: $w[4]=3\le rc[2]=3$? Yes, so $s\leftarrow 2$. Item $4$ is packed into bin $2$, and $rc[2]\leftarrow 3-3=0$.

        Hence FF returns:

        $$
        bin = \begin{pmatrix} 1 & 2 & 1 & 2 \end{pmatrix},
        \qquad
        nb=2.
        $$

        and therefore

        $$
        FF(I)=nb=2.
        $$

    2. From the bin vector $bin=(1,2,1,2)$, the packing patterns are

        \begin{align*}
        P_1 &= \{ i \in \{1,2,3,4\} : bin_i = 1 \} = \{1,3\},\\
        P_2 &= \{ i \in \{1,2,3,4\} : bin_i = 2 \} = \{2,4\}.
        \end{align*}

    3. Accordingly,

        $$
        z(I)\le 2.
        $$

        Moreover,

        $$
        z(I)\ge \left\lceil \frac{\sum_{i\in\mathscr{I}} w_i}{c} \right\rceil = \left\lceil \frac{7+7+3+3}{10} \right\rceil= \left\lceil \frac{20}{10} \right\rceil =2.
        $$

        Hence $z(I)=2$ and FF computes an <strong>optimal</strong> solution on this instance.

    4. From Question 2, the packing patterns found by FF have total weights

        $$
        \sum_{i\in P_1} w_i = 7+3=10, \qquad \sum_{i\in P_2} w_i = 7+3=10.
        $$

        Since $c/2=5$, no packing pattern has total weight at most $c/2$; in particular <em>at most one</em> does, so the solution <strong>satisfies</strong> the half-full property.

        Since $FF(I)=2$ matches the lower bound $z(I)\ge 2$ found in Question 3, the solution found by FF is <strong>optimal</strong>.

<a id="esercizio-24-6"></a>

!!! esercizio "Exercise 24.6: First Fit 3"

    We consider a bin of capacity $c = 10$ and a set $\mathscr{I} = \{1,2,3,4,5\}$ of $5$ items ($n=5$), with the following item weights:

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
    <td><span class="arithmatex">\(w_i\)</span></td>
    <td><span class="arithmatex">\(4\)</span></td>
    <td><span class="arithmatex">\(7\)</span></td>
    <td><span class="arithmatex">\(6\)</span></td>
    <td><span class="arithmatex">\(3\)</span></td>
    <td><span class="arithmatex">\(5\)</span></td>
    </tr>
    </table></div>

    **Questions**

    1. Apply the First Fit (FF) algorithm to this instance. Show the execution step by step, indicating at each iteration which bin the item is packed into (scanning bins in the order they were opened) and the resulting residual capacity. State the final bin assignment and $FF(I)$.

    2. Construct the packing patterns $P_1,\dots,P_{FF(I)}$ from the bin vector obtained in Question 1.

    3. Compute a lower bound on $z(I)$ and determine whether FF finds an optimal solution on this instance.

    4. Verify whether the packing patterns found by FF satisfy the half-full property (i.e., at most one packing pattern has total weight at most $c/2$), and determine whether the solution found is optimal for this BPP instance, either by comparing $FF(I)$ with a lower bound on $z(I)$, or by exhibiting a feasible solution of strictly smaller value.

??? soluzione "Solution"

    1. Recall the FF pseudocode: for each item $i$, $s:=-1$ and, for $b:=1$ to $nb$, if $w[i]\le rc[b]$ then $s\leftarrow b$ and stop the scan; if $s=-1$ after the scan, a new bin is opened.

        1. Item $1$ (weight $4$): bin $1$ is open at the start ($nb=1$, $rc[1]=c=10$) and $w[1]\le rc[1]$, so $s=1$ and FF packs item $1$ into bin $1$, and $rc[1]\leftarrow 10-4=6$.

        2. Item $2$ (weight $7$): $b=1$: $w[2]=7\le rc[1]=6$? No. No bin fits, so FF opens bin $2$ ($rc[2]\leftarrow 10$). Item $2$ is packed into bin $2$, and $rc[2]\leftarrow 10-7=3$.

        3. Item $3$ (weight $6$): $b=1$: $w[3]=6\le rc[1]=6$? Yes, so $s\leftarrow 1$ and the scan stops. Item $3$ is packed into bin $1$, and $rc[1]\leftarrow 6-6=0$.

        4. Item $4$ (weight $3$): $b=1$: $w[4]=3\le rc[1]=0$? No. $b=2$: $w[4]=3\le rc[2]=3$? Yes, so $s\leftarrow 2$. Item $4$ is packed into bin $2$, and $rc[2]\leftarrow 3-3=0$.

        5. Item $5$ (weight $5$): $b=1$: $w[5]=5\le rc[1]=0$? No. $b=2$: $w[5]=5\le rc[2]=0$? No. No bin fits, so FF opens bin $3$ ($rc[3]\leftarrow 10$). Item $5$ is packed into bin $3$, and $rc[3]\leftarrow 10-5=5$.

        Hence FF returns:

        $$
        bin = \begin{pmatrix} 1 & 2 & 1 & 2 & 3 \end{pmatrix},
        \qquad
        nb=3.
        $$

        and therefore

        $$
        FF(I)=nb=3.
        $$

    2. From the bin vector $bin=(1,2,1,2,3)$, the packing patterns are

        \begin{align*}
        P_1 &= \{ i : bin_i = 1 \} = \{1,3\},\\
        P_2 &= \{ i : bin_i = 2 \} = \{2,4\},\\
        P_3 &= \{ i : bin_i = 3 \} = \{5\}.
        \end{align*}

    3. Accordingly,

        $$
        z(I)\le 3.
        $$

        Moreover,

        $$
        z(I)\ge \left\lceil \frac{\sum_{i\in\mathscr{I}} w_i}{c} \right\rceil = \left\lceil \frac{4+7+6+3+5}{10} \right\rceil= \left\lceil \frac{25}{10} \right\rceil =3.
        $$

        Hence $z(I)=3$ and FF computes an <strong>optimal</strong> solution on this instance.

    4. From Question 2, the packing patterns found by FF have total weights

        $$
        \sum_{i\in P_1} w_i = 4+6=10, \qquad \sum_{i\in P_2} w_i = 7+3=10, \qquad \sum_{i\in P_3} w_i = 5.
        $$

        Since $c/2=5$, only $P_3$ has total weight at most $c/2$ (the other two exceed it); hence the solution <strong>satisfies</strong> the half-full property.

        Since $FF(I)=3$ matches the lower bound $z(I)\ge 3$ found in Question 3, the solution found by FF is <strong>optimal</strong>.

## Best Fit

<a id="esercizio-24-7"></a>

!!! esercizio "Exercise 24.7: Best Fit 1"

    We consider a bin of capacity $c = 10$ and a set $\mathscr{I} = \{1,2,3,4\}$ of $4$ items ($n=4$), with the following item weights:

    <div class="tabella" markdown="0"><table>
    <tr>
    <th></th>
    <th><span class="arithmatex">\(i=1\)</span></th>
    <th><span class="arithmatex">\(i=2\)</span></th>
    <th><span class="arithmatex">\(i=3\)</span></th>
    <th><span class="arithmatex">\(i=4\)</span></th>
    </tr>
    <tr>
    <td><span class="arithmatex">\(w_i\)</span></td>
    <td><span class="arithmatex">\(6\)</span></td>
    <td><span class="arithmatex">\(6\)</span></td>
    <td><span class="arithmatex">\(4\)</span></td>
    <td><span class="arithmatex">\(4\)</span></td>
    </tr>
    </table></div>

    **Questions**

    1. Apply the Best Fit (BF) algorithm to this instance. Show the execution step by step: for each item, trace the pseudocode variables $minrc$ and $s$ over the scan of the open bins, and state into which bin the item is packed and the resulting residual capacity.

    2. Construct the packing patterns $P_1,\dots,P_{BF(I)}$ from the bin vector obtained in Question 1.

    3. Compute a lower bound on $z(I)$ and determine whether BF finds an optimal solution on this instance.

    4. Verify whether the packing patterns found by BF satisfy the half-full property (i.e., at most one packing pattern has total weight at most $c/2$), and determine whether the solution found is optimal for this BPP instance, either by comparing $BF(I)$ with a lower bound on $z(I)$, or by exhibiting a feasible solution of strictly smaller value.

??? soluzione "Solution"

    1. Recall the BF pseudocode: for each item, $minrc:=c+1$, $s:=-1$, and for $b:=1$ to $nb$, if $w[i]\le rc[b]$ and $rc[b]<minrc$ then $s\leftarrow b$, $minrc \leftarrow rc[b]$.

        1. Item $1$ (weight $6$): bin $1$ is open at the start ($nb=1$, $rc[1]=c$) and item $1$ fits into it, so $s=1$ and BF packs item $1$ into bin $1$. Residual capacity of bin $1$: $10-6=4$.

        2. Item $2$ (weight $6$): $minrc:=11$, $s:=-1$. For $b=1$: $w[2]=6\le rc[1]=4$? No. No bin fits, so BF opens bin $2$ and packs item $2$ into it. Residual capacity of bin $2$: $10-6=4$.

        3. Item $3$ (weight $4$): $minrc:=11$, $s:=-1$. For $b=1$: $w[3]=4\le rc[1]=4$ and $rc[1]=4<11$, so $s\leftarrow 1$, $minrc\leftarrow 4$. For $b=2$: $w[3]=4\le rc[2]=4$, but $rc[2]=4$ is <em>not</em> strictly smaller than $minrc=4$, so $s$ is not updated. Hence $s=1$: item $3$ is packed into bin $1$ (the first bin opened, since the tie between bin $1$ and bin $2$ is broken by the strict inequality in the pseudocode). Residual capacity of bin $1$: $4-4=0$.

        4. Item $4$ (weight $4$): $minrc:=11$, $s:=-1$. For $b=1$: $w[4]=4\le rc[1]=0$? No. For $b=2$: $w[4]=4\le rc[2]=4$ and $rc[2]=4<11$, so $s\leftarrow 2$, $minrc\leftarrow 4$. Hence $s=2$: item $4$ is packed into bin $2$. Residual capacity of bin $2$: $4-4=0$.

        Hence BF returns:

        $$
        bin = \begin{pmatrix} 1 & 2 & 1 & 2 \end{pmatrix},
        \qquad
        nb=2.
        $$

        and therefore

        $$
        BF(I)=nb=2.
        $$

    2. From the bin vector $bin=(1,2,1,2)$, the packing patterns are

        \begin{align*}
        P_1 &= \{ i \in \{1,2,3,4\} : bin_i = 1 \} = \{1,3\},\\
        P_2 &= \{ i \in \{1,2,3,4\} : bin_i = 2 \} = \{2,4\}.
        \end{align*}

    3. Accordingly,

        $$
        z(I)\le 2.
        $$

        Moreover,

        $$
        z(I)\ge \left\lceil \frac{\sum_{i\in\mathscr{I}} w_i}{c} \right\rceil = \left\lceil \frac{6+6+4+4}{10} \right\rceil= \left\lceil \frac{20}{10} \right\rceil =2.
        $$

        Hence $z(I)=2$ and BF computes an <strong>optimal</strong> solution on this instance.

    4. From Question 2, the packing patterns found by BF have total weights

        $$
        \sum_{i\in P_1} w_i = 6+4=10, \qquad \sum_{i\in P_2} w_i = 6+4=10.
        $$

        Since $c/2=5$, no packing pattern has total weight at most $c/2$; in particular <em>at most one</em> does, so the solution <strong>satisfies</strong> the half-full property.

        Since $BF(I)=2$ matches the lower bound $z(I)\ge 2$ found in Question 3, the solution found by BF is <strong>optimal</strong>.

<a id="esercizio-24-8"></a>

!!! esercizio "Exercise 24.8: Best Fit 2"

    We consider a bin of capacity $c = 10$ and a set $\mathscr{I} = \{1,2,3,4\}$ of $4$ items ($n=4$), with the following item weights:

    <div class="tabella" markdown="0"><table>
    <tr>
    <th></th>
    <th><span class="arithmatex">\(i=1\)</span></th>
    <th><span class="arithmatex">\(i=2\)</span></th>
    <th><span class="arithmatex">\(i=3\)</span></th>
    <th><span class="arithmatex">\(i=4\)</span></th>
    </tr>
    <tr>
    <td><span class="arithmatex">\(w_i\)</span></td>
    <td><span class="arithmatex">\(7\)</span></td>
    <td><span class="arithmatex">\(7\)</span></td>
    <td><span class="arithmatex">\(3\)</span></td>
    <td><span class="arithmatex">\(3\)</span></td>
    </tr>
    </table></div>

    **Questions**

    1. Apply the Best Fit (BF) algorithm to this instance. Show the execution step by step: for each item, trace the pseudocode variables $minrc$ and $s$ over the scan of the open bins, and state into which bin the item is packed and the resulting residual capacity.

    2. Construct the packing patterns $P_1,\dots,P_{BF(I)}$ from the bin vector obtained in Question 1.

    3. Compute a lower bound on $z(I)$ and determine whether BF finds an optimal solution on this instance.

    4. Verify whether the packing patterns found by BF satisfy the half-full property (i.e., at most one packing pattern has total weight at most $c/2$), and determine whether the solution found is optimal for this BPP instance, either by comparing $BF(I)$ with a lower bound on $z(I)$, or by exhibiting a feasible solution of strictly smaller value.

??? soluzione "Solution"

    1. Recall the BF pseudocode: for each item $i$, $minrc:=c+1$, $s:=-1$, and for $b:=1$ to $nb$, if $w[i]\le rc[b]$ and $rc[b]<minrc$ then $s\leftarrow b$, $minrc\leftarrow rc[b]$.

        1. Item $1$ (weight $7$): bin $1$ is open at the start ($nb=1$, $rc[1]=c$) and item $1$ fits into it, so $s=1$ and BF packs item $1$ into bin $1$. Residual capacity of bin $1$: $10-7=3$.

        2. Item $2$ (weight $7$): $minrc:=11$, $s:=-1$. For $b=1$: $w[2]=7\le rc[1]=3$? No. No bin fits, so BF opens bin $2$ and packs item $2$ into it. Residual capacity of bin $2$: $10-7=3$.

        3. Item $3$ (weight $3$): $minrc:=11$, $s:=-1$. For $b=1$: $w[3]=3\le rc[1]=3$ and $rc[1]=3<11$, so $s\leftarrow 1$, $minrc\leftarrow 3$. For $b=2$: $w[3]=3\le rc[2]=3$, but $rc[2]=3$ is <em>not</em> strictly smaller than $minrc=3$, so $s$ is not updated. Hence $s=1$: item $3$ is packed into bin $1$ (the first bin opened, since the tie between bin $1$ and bin $2$ is broken by the strict inequality in the pseudocode). Residual capacity of bin $1$: $3-3=0$.

        4. Item $4$ (weight $3$): $minrc:=11$, $s:=-1$. For $b=1$: $w[4]=3\le rc[1]=0$? No. For $b=2$: $w[4]=3\le rc[2]=3$ and $rc[2]=3<11$, so $s\leftarrow 2$, $minrc\leftarrow 3$. Hence $s=2$: item $4$ is packed into bin $2$. Residual capacity of bin $2$: $3-3=0$.

        Hence BF returns:

        $$
        bin = \begin{pmatrix} 1 & 2 & 1 & 2 \end{pmatrix},
        \qquad
        nb=2.
        $$

        and therefore

        $$
        BF(I)=nb=2.
        $$

    2. From the bin vector $bin=(1,2,1,2)$, the packing patterns are

        \begin{align*}
        P_1 &= \{ i \in \{1,2,3,4\} : bin_i = 1 \} = \{1,3\},\\
        P_2 &= \{ i \in \{1,2,3,4\} : bin_i = 2 \} = \{2,4\}.
        \end{align*}

    3. Accordingly,

        $$
        z(I)\le 2.
        $$

        Moreover,

        $$
        z(I)\ge \left\lceil \frac{\sum_{i\in\mathscr{I}} w_i}{c} \right\rceil = \left\lceil \frac{7+7+3+3}{10} \right\rceil= \left\lceil \frac{20}{10} \right\rceil =2.
        $$

        Hence $z(I)=2$ and BF computes an <strong>optimal</strong> solution on this instance.

    4. From Question 2, the packing patterns found by BF have total weights

        $$
        \sum_{i\in P_1} w_i = 7+3=10, \qquad \sum_{i\in P_2} w_i = 7+3=10.
        $$

        Since $c/2=5$, no packing pattern has total weight at most $c/2$; in particular <em>at most one</em> does, so the solution <strong>satisfies</strong> the half-full property.

        Since $BF(I)=2$ matches the lower bound $z(I)\ge 2$ found in Question 3, the solution found by BF is <strong>optimal</strong>.

<a id="esercizio-24-9"></a>

!!! esercizio "Exercise 24.9: Best Fit 3"

    We consider a bin of capacity $c = 10$ and a set $\mathscr{I} = \{1,2,3,4,5\}$ of $5$ items ($n=5$), with the following item weights:

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
    <td><span class="arithmatex">\(w_i\)</span></td>
    <td><span class="arithmatex">\(4\)</span></td>
    <td><span class="arithmatex">\(7\)</span></td>
    <td><span class="arithmatex">\(6\)</span></td>
    <td><span class="arithmatex">\(3\)</span></td>
    <td><span class="arithmatex">\(5\)</span></td>
    </tr>
    </table></div>

    **Questions**

    1. Apply the Best Fit (BF) algorithm to this instance. Show the execution step by step: for each item, trace the pseudocode variables $minrc$ and $s$ over the scan of the open bins, and state into which bin the item is packed and the resulting residual capacity.

    2. Construct the packing patterns $P_1,\dots,P_{BF(I)}$ from the bin vector obtained in Question 1.

    3. Compute a lower bound on $z(I)$ and determine whether BF finds an optimal solution on this instance.

    4. Verify whether the packing patterns found by BF satisfy the half-full property (i.e., at most one packing pattern has total weight at most $c/2$), and determine whether the solution found is optimal for this BPP instance, either by comparing $BF(I)$ with a lower bound on $z(I)$, or by exhibiting a feasible solution of strictly smaller value.

??? soluzione "Solution"

    1. Recall the BF pseudocode: for each item $i$, $minrc:=c+1$, $s:=-1$, and for $b:=1$ to $nb$, if $w[i]\le rc[b]$ and $rc[b]<minrc$ then $s\leftarrow b$, $minrc\leftarrow rc[b]$.

        1. Item $1$ (weight $4$): bin $1$ is open at the start ($nb=1$, $rc[1]=c$) and item $1$ fits into it, so $s=1$ and BF packs item $1$ into bin $1$. Residual capacity of bin $1$: $10-4=6$.

        2. Item $2$ (weight $7$): $minrc:=11$, $s:=-1$. For $b=1$: $w[2]=7\le rc[1]=6$? No. No bin fits, so BF opens bin $2$ and packs item $2$ into it. Residual capacity of bin $2$: $10-7=3$.

        3. Item $3$ (weight $6$): $minrc:=11$, $s:=-1$. For $b=1$: $w[3]=6\le rc[1]=6$ and $rc[1]=6<11$, so $s\leftarrow 1$, $minrc\leftarrow 6$. For $b=2$: $w[3]=6\le rc[2]=3$? No. Hence $s=1$: item $3$ is packed into bin $1$. Residual capacity of bin $1$: $6-6=0$.

        4. Item $4$ (weight $3$): $minrc:=11$, $s:=-1$. For $b=1$: $w[4]=3\le rc[1]=0$? No. For $b=2$: $w[4]=3\le rc[2]=3$ and $rc[2]=3<11$, so $s\leftarrow 2$, $minrc\leftarrow 3$. Hence $s=2$: item $4$ is packed into bin $2$. Residual capacity of bin $2$: $3-3=0$.

        5. Item $5$ (weight $5$): $minrc:=11$, $s:=-1$. For $b=1$: $w[5]=5\le rc[1]=0$? No. For $b=2$: $w[5]=5\le rc[2]=0$? No. No bin fits, so BF opens bin $3$ and packs item $5$ into it. Residual capacity of bin $3$: $10-5=5$.

        Hence BF returns:

        $$
        bin = \begin{pmatrix} 1 & 2 & 1 & 2 & 3 \end{pmatrix},
        \qquad
        nb=3.
        $$

        and therefore

        $$
        BF(I)=nb=3.
        $$

    2. From the bin vector $bin=(1,2,1,2,3)$, the packing patterns are

        \begin{align*}
        P_1 &= \{ i : bin_i = 1 \} = \{1,3\},\\
        P_2 &= \{ i : bin_i = 2 \} = \{2,4\},\\
        P_3 &= \{ i : bin_i = 3 \} = \{5\}.
        \end{align*}

    3. Accordingly,

        $$
        z(I)\le 3.
        $$

        Moreover,

        $$
        z(I)\ge \left\lceil \frac{\sum_{i\in\mathscr{I}} w_i}{c} \right\rceil = \left\lceil \frac{4+7+6+3+5}{10} \right\rceil= \left\lceil \frac{25}{10} \right\rceil =3.
        $$

        Hence $z(I)=3$ and BF computes an <strong>optimal</strong> solution on this instance.

    4. From Question 2, the packing patterns found by BF have total weights

        $$
        \sum_{i\in P_1} w_i = 4+6=10, \qquad \sum_{i\in P_2} w_i = 7+3=10, \qquad \sum_{i\in P_3} w_i = 5.
        $$

        Since $c/2=5$, only $P_3$ has total weight at most $c/2$ (the other two exceed it); hence the solution <strong>satisfies</strong> the half-full property.

        Since $BF(I)=3$ matches the lower bound $z(I)\ge 3$ found in Question 3, the solution found by BF is <strong>optimal</strong>.

## Worst Fit

<a id="esercizio-24-10"></a>

!!! esercizio "Exercise 24.10: Worst Fit 1"

    We consider a bin of capacity $c = 10$ and a set $\mathscr{I} = \{1,2,3,4\}$ of $4$ items ($n=4$), with the following item weights:

    <div class="tabella" markdown="0"><table>
    <tr>
    <th></th>
    <th><span class="arithmatex">\(i=1\)</span></th>
    <th><span class="arithmatex">\(i=2\)</span></th>
    <th><span class="arithmatex">\(i=3\)</span></th>
    <th><span class="arithmatex">\(i=4\)</span></th>
    </tr>
    <tr>
    <td><span class="arithmatex">\(w_i\)</span></td>
    <td><span class="arithmatex">\(6\)</span></td>
    <td><span class="arithmatex">\(6\)</span></td>
    <td><span class="arithmatex">\(4\)</span></td>
    <td><span class="arithmatex">\(4\)</span></td>
    </tr>
    </table></div>

    **Questions**

    1. Apply the Worst Fit (WF) algorithm to this instance. Show the execution step by step: for each item, trace the pseudocode variables $maxrc$ and $s$ over the scan of the open bins, and state into which bin the item is packed and the resulting residual capacity.

    2. Construct the packing patterns $P_1,\dots,P_{WF(I)}$ from the bin vector obtained in Question 1.

    3. Compute a lower bound on $z(I)$ and determine whether WF finds an optimal solution on this instance.

    4. Verify whether the packing patterns found by WF satisfy the half-full property (i.e., at most one packing pattern has total weight at most $c/2$), and determine whether the solution found is optimal for this BPP instance, either by comparing $WF(I)$ with a lower bound on $z(I)$, or by exhibiting a feasible solution of strictly smaller value.

??? soluzione "Solution"

    1. Recall the WF pseudocode: for each item $i$, $maxrc:=-1$, $s:=-1$, and for $b:=1$ to $nb$, if $w[i]\le rc[b]$ and $rc[b]>maxrc$ then $s\leftarrow b$, $maxrc\leftarrow rc[b]$.

        1. Item $1$ (weight $6$): bin $1$ is open at the start ($nb=1$, $rc[1]=c$) and item $1$ fits into it, so $s=1$ and WF packs item $1$ into bin $1$. Residual capacity of bin $1$: $10-6=4$.

        2. Item $2$ (weight $6$): $maxrc:=-1$, $s:=-1$. For $b=1$: $w[2]=6\le rc[1]=4$? No. No bin fits, so WF opens bin $2$ and packs item $2$ into it. Residual capacity of bin $2$: $10-6=4$.

        3. Item $3$ (weight $4$): $maxrc:=-1$, $s:=-1$. For $b=1$: $w[3]=4\le rc[1]=4$ and $rc[1]=4>-1$, so $s\leftarrow 1$, $maxrc\leftarrow 4$. For $b=2$: $w[3]=4\le rc[2]=4$, but $rc[2]=4$ is <em>not</em> strictly greater than $maxrc=4$, so $s$ is not updated. Hence $s=1$: item $3$ is packed into bin $1$ (the first bin opened, since the tie between bin $1$ and bin $2$ is broken by the strict inequality in the pseudocode). Residual capacity of bin $1$: $4-4=0$.

        4. Item $4$ (weight $4$): $maxrc:=-1$, $s:=-1$. For $b=1$: $w[4]=4\le rc[1]=0$? No. For $b=2$: $w[4]=4\le rc[2]=4$ and $rc[2]=4>-1$, so $s\leftarrow 2$, $maxrc\leftarrow 4$. Hence $s=2$: item $4$ is packed into bin $2$. Residual capacity of bin $2$: $4-4=0$.

        Hence WF returns:

        $$
        bin = \begin{pmatrix} 1 & 2 & 1 & 2 \end{pmatrix},
        \qquad
        nb=2.
        $$

        and therefore

        $$
        WF(I)=nb=2.
        $$

    2. From the bin vector $bin=(1,2,1,2)$, the packing patterns are

        \begin{align*}
        P_1 &= \{ i \in \{1,2,3,4\} : bin_i = 1 \} = \{1,3\},\\
        P_2 &= \{ i \in \{1,2,3,4\} : bin_i = 2 \} = \{2,4\}.
        \end{align*}

    3. Accordingly,

        $$
        z(I)\le 2.
        $$

        Moreover,

        $$
        z(I)\ge \left\lceil \frac{\sum_{i\in\mathscr{I}} w_i}{c} \right\rceil = \left\lceil \frac{6+6+4+4}{10} \right\rceil= \left\lceil \frac{20}{10} \right\rceil =2.
        $$

        Hence $z(I)=2$ and WF computes an <strong>optimal</strong> solution on this instance.

    4. From Question 2, the packing patterns found by WF have total weights

        $$
        \sum_{i\in P_1} w_i = 6+4=10, \qquad \sum_{i\in P_2} w_i = 6+4=10.
        $$

        Since $c/2=5$, no packing pattern has total weight at most $c/2$; in particular <em>at most one</em> does, so the solution <strong>satisfies</strong> the half-full property.

        Since $WF(I)=2$ matches the lower bound $z(I)\ge 2$ found in Question 3, the solution found by WF is <strong>optimal</strong>.

<a id="esercizio-24-11"></a>

!!! esercizio "Exercise 24.11: Worst Fit 2"

    We consider a bin of capacity $c = 10$ and a set $\mathscr{I} = \{1,2,3,4\}$ of $4$ items ($n=4$), with the following item weights:

    <div class="tabella" markdown="0"><table>
    <tr>
    <th></th>
    <th><span class="arithmatex">\(i=1\)</span></th>
    <th><span class="arithmatex">\(i=2\)</span></th>
    <th><span class="arithmatex">\(i=3\)</span></th>
    <th><span class="arithmatex">\(i=4\)</span></th>
    </tr>
    <tr>
    <td><span class="arithmatex">\(w_i\)</span></td>
    <td><span class="arithmatex">\(7\)</span></td>
    <td><span class="arithmatex">\(7\)</span></td>
    <td><span class="arithmatex">\(3\)</span></td>
    <td><span class="arithmatex">\(3\)</span></td>
    </tr>
    </table></div>

    **Questions**

    1. Apply the Worst Fit (WF) algorithm to this instance. Show the execution step by step: for each item, trace the pseudocode variables $maxrc$ and $s$ over the scan of the open bins, and state into which bin the item is packed and the resulting residual capacity.

    2. Construct the packing patterns $P_1,\dots,P_{WF(I)}$ from the bin vector obtained in Question 1.

    3. Compute a lower bound on $z(I)$ and determine whether WF finds an optimal solution on this instance.

    4. Verify whether the packing patterns found by WF satisfy the half-full property (i.e., at most one packing pattern has total weight at most $c/2$), and determine whether the solution found is optimal for this BPP instance, either by comparing $WF(I)$ with a lower bound on $z(I)$, or by exhibiting a feasible solution of strictly smaller value.

??? soluzione "Solution"

    1. Recall the WF pseudocode: for each item $i$, $maxrc:=-1$, $s:=-1$, and for $b:=1$ to $nb$, if $w[i]\le rc[b]$ and $rc[b]>maxrc$ then $s\leftarrow b$, $maxrc\leftarrow rc[b]$.

        1. Item $1$ (weight $7$): bin $1$ is open at the start ($nb=1$, $rc[1]=c$) and item $1$ fits into it, so $s=1$ and WF packs item $1$ into bin $1$. Residual capacity of bin $1$: $10-7=3$.

        2. Item $2$ (weight $7$): $maxrc:=-1$, $s:=-1$. For $b=1$: $w[2]=7\le rc[1]=3$? No. No bin fits, so WF opens bin $2$ and packs item $2$ into it. Residual capacity of bin $2$: $10-7=3$.

        3. Item $3$ (weight $3$): $maxrc:=-1$, $s:=-1$. For $b=1$: $w[3]=3\le rc[1]=3$ and $rc[1]=3>-1$, so $s\leftarrow 1$, $maxrc\leftarrow 3$. For $b=2$: $w[3]=3\le rc[2]=3$, but $rc[2]=3$ is <em>not</em> strictly greater than $maxrc=3$, so $s$ is not updated. Hence $s=1$: item $3$ is packed into bin $1$ (the first bin opened, since the tie between bin $1$ and bin $2$ is broken by the strict inequality in the pseudocode). Residual capacity of bin $1$: $3-3=0$.

        4. Item $4$ (weight $3$): $maxrc:=-1$, $s:=-1$. For $b=1$: $w[4]=3\le rc[1]=0$? No. For $b=2$: $w[4]=3\le rc[2]=3$ and $rc[2]=3>-1$, so $s\leftarrow 2$, $maxrc\leftarrow 3$. Hence $s=2$: item $4$ is packed into bin $2$. Residual capacity of bin $2$: $3-3=0$.

        Hence WF returns:

        $$
        bin = \begin{pmatrix} 1 & 2 & 1 & 2 \end{pmatrix},
        \qquad
        nb=2.
        $$

        and therefore

        $$
        WF(I)=nb=2.
        $$

    2. From the bin vector $bin=(1,2,1,2)$, the packing patterns are

        \begin{align*}
        P_1 &= \{ i \in \{1,2,3,4\} : bin_i = 1 \} = \{1,3\},\\
        P_2 &= \{ i \in \{1,2,3,4\} : bin_i = 2 \} = \{2,4\}.
        \end{align*}

    3. Accordingly,

        $$
        z(I)\le 2.
        $$

        Moreover,

        $$
        z(I)\ge \left\lceil \frac{\sum_{i\in\mathscr{I}} w_i}{c} \right\rceil = \left\lceil \frac{7+7+3+3}{10} \right\rceil= \left\lceil \frac{20}{10} \right\rceil =2.
        $$

        Hence $z(I)=2$ and WF computes an <strong>optimal</strong> solution on this instance.

    4. From Question 2, the packing patterns found by WF have total weights

        $$
        \sum_{i\in P_1} w_i = 7+3=10, \qquad \sum_{i\in P_2} w_i = 7+3=10.
        $$

        Since $c/2=5$, no packing pattern has total weight at most $c/2$; in particular <em>at most one</em> does, so the solution <strong>satisfies</strong> the half-full property.

        Since $WF(I)=2$ matches the lower bound $z(I)\ge 2$ found in Question 3, the solution found by WF is <strong>optimal</strong>.

<a id="esercizio-24-12"></a>

!!! esercizio "Exercise 24.12: Worst Fit 3"

    We consider a bin of capacity $c = 10$ and a set $\mathscr{I} = \{1,2,3,4,5\}$ of $5$ items ($n=5$), with the following item weights:

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
    <td><span class="arithmatex">\(w_i\)</span></td>
    <td><span class="arithmatex">\(4\)</span></td>
    <td><span class="arithmatex">\(7\)</span></td>
    <td><span class="arithmatex">\(6\)</span></td>
    <td><span class="arithmatex">\(3\)</span></td>
    <td><span class="arithmatex">\(5\)</span></td>
    </tr>
    </table></div>

    **Questions**

    1. Apply the Worst Fit (WF) algorithm to this instance. Show the execution step by step: for each item, trace the pseudocode variables $maxrc$ and $s$ over the scan of the open bins, and state into which bin the item is packed and the resulting residual capacity.

    2. Construct the packing patterns $P_1,\dots,P_{WF(I)}$ from the bin vector obtained in Question 1.

    3. Compute a lower bound on $z(I)$ and determine whether WF finds an optimal solution on this instance.

    4. Verify whether the packing patterns found by WF satisfy the half-full property (i.e., at most one packing pattern has total weight at most $c/2$), and determine whether the solution found is optimal for this BPP instance, either by comparing $WF(I)$ with a lower bound on $z(I)$, or by exhibiting a feasible solution of strictly smaller value.

??? soluzione "Solution"

    1. Recall the WF pseudocode: for each item $i$, $maxrc:=-1$, $s:=-1$, and for $b:=1$ to $nb$, if $w[i]\le rc[b]$ and $rc[b]>maxrc$ then $s\leftarrow b$, $maxrc\leftarrow rc[b]$.

        1. Item $1$ (weight $4$): bin $1$ is open at the start ($nb=1$, $rc[1]=c$) and item $1$ fits into it, so $s=1$ and WF packs item $1$ into bin $1$. Residual capacity of bin $1$: $10-4=6$.

        2. Item $2$ (weight $7$): $maxrc:=-1$, $s:=-1$. For $b=1$: $w[2]=7\le rc[1]=6$? No. No bin fits, so WF opens bin $2$ and packs item $2$ into it. Residual capacity of bin $2$: $10-7=3$.

        3. Item $3$ (weight $6$): $maxrc:=-1$, $s:=-1$. For $b=1$: $w[3]=6\le rc[1]=6$ and $rc[1]=6>-1$, so $s\leftarrow 1$, $maxrc\leftarrow 6$. For $b=2$: $w[3]=6\le rc[2]=3$? No. Hence $s=1$: item $3$ is packed into bin $1$. Residual capacity of bin $1$: $6-6=0$.

        4. Item $4$ (weight $3$): $maxrc:=-1$, $s:=-1$. For $b=1$: $w[4]=3\le rc[1]=0$? No. For $b=2$: $w[4]=3\le rc[2]=3$ and $rc[2]=3>-1$, so $s\leftarrow 2$, $maxrc\leftarrow 3$. Hence $s=2$: item $4$ is packed into bin $2$. Residual capacity of bin $2$: $3-3=0$.

        5. Item $5$ (weight $5$): $maxrc:=-1$, $s:=-1$. For $b=1$: $w[5]=5\le rc[1]=0$? No. For $b=2$: $w[5]=5\le rc[2]=0$? No. No bin fits, so WF opens bin $3$ and packs item $5$ into it. Residual capacity of bin $3$: $10-5=5$.

        Hence WF returns:

        $$
        bin = \begin{pmatrix} 1 & 2 & 1 & 2 & 3 \end{pmatrix},
        \qquad
        nb=3.
        $$

        and therefore

        $$
        WF(I)=nb=3.
        $$

    2. From the bin vector $bin=(1,2,1,2,3)$, the packing patterns are

        \begin{align*}
        P_1 &= \{ i : bin_i = 1 \} = \{1,3\},\\
        P_2 &= \{ i : bin_i = 2 \} = \{2,4\},\\
        P_3 &= \{ i : bin_i = 3 \} = \{5\}.
        \end{align*}

    3. Accordingly,

        $$
        z(I)\le 3.
        $$

        Moreover,

        $$
        z(I)\ge \left\lceil \frac{\sum_{i\in\mathscr{I}} w_i}{c} \right\rceil = \left\lceil \frac{4+7+6+3+5}{10} \right\rceil= \left\lceil \frac{25}{10} \right\rceil =3.
        $$

        Hence $z(I)=3$ and WF computes an <strong>optimal</strong> solution on this instance.

    4. From Question 2, the packing patterns found by WF have total weights

        $$
        \sum_{i\in P_1} w_i = 4+6=10, \qquad \sum_{i\in P_2} w_i = 7+3=10, \qquad \sum_{i\in P_3} w_i = 5.
        $$

        Since $c/2=5$, only $P_3$ has total weight at most $c/2$ (the other two exceed it); hence the solution <strong>satisfies</strong> the half-full property.

        Since $WF(I)=3$ matches the lower bound $z(I)\ge 3$ found in Question 3, the solution found by WF is <strong>optimal</strong>.
