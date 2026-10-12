---
title: "Approximation algorithms for bin packing"
---

# Approximation algorithms for bin packing

<div class="info-capitolo" markdown>

**Part 5 · Approximation algorithms · Chapter 24** · [:material-file-pdf-box: Lecture notes, volume 5 (PDF)](../pdf/lecture-notes-5-approximation-algorithms.pdf) · [:material-pencil: Exercises: Bin packing](../exercises/bin-packing-approximation.md)

</div>

!!! nota "Prerequisites"

    - From this module, the chapter «Approximation algorithms»: performance ratio, relative performance guarantee, tight guarantee and worst-case performance ratio $r(\mathscr{A})$.

    - From this module, the chapter «Bin packing problems»: the BPP, its instances and the counting lower bound $\left\lceil \frac{\sum_{i\in\mathscr{I}} w_i}{c} \right\rceil$ on the optimal value.

    - From this module, the chapter «Constructive heuristics»: heuristic algorithms that build a solution one item at a time.

!!! chiave "Objectives"

    At the end of this chapter you will be able to:

    - execute the Next Fit, First Fit, Best Fit and Worst Fit algorithms by hand, and write the item-bin assignment and the number of bins;

    - decide whether an algorithm belongs to the Any Fit class, and whether a solution satisfies the half-full property;

    - prove that Next Fit and every Any Fit algorithm have a relative performance guarantee of $2$;

    - describe the families of instances that make the guarantee $2$ tight for Next Fit and Worst Fit, and state the worst-case ratio $\frac{17}{10}$ of First Fit and Best Fit;

    - read and run the <code>C++</code> implementations of the four algorithms.

## 24.1 The problem and the assumptions

<a id="box-1-def-BPP"></a>

!!! definizione "Definition 24.1: Bin Packing Problem"

    Given:

    1. an infinite number of bins, each with <em>capacity</em> $c \in \Z_{\ge 1}$,

    2. a set $\mathscr{I} = \{1,2,\dots,n\}$ of $n$ items,

    3. for each item $i \in \mathscr{I}$, a <em>weight</em> $w_i \in \Z_{\ge 1}$,

    the <strong>Bin Packing Problem</strong> (BPP) asks to decide in which bin to place each item, so that the total weight of the items in any bin does not exceed the bin capacity, and the total number of bins used is minimized.

- We assume that any BPP instance $I$ satisfies the problem assumptions, i.e.,

    $$
    0 < w_i \le c ~~~~\text{for all}~~~~ i \in \underbrace{\{1,2,\dots,n\}}_{=\mathscr{I}} ~~~~~~~\text{and}~~~~~~~ \sum_{i \in \mathscr{I}} w_i>c
    $$

    The first assumption guarantees that every item can be packed into a bin, the second one that more than one bin is needed.

- A <strong>BPP feasible solution</strong> is a partition of $\mathscr{I}$ into nonempty <strong>packing patterns</strong>, i.e., subsets of items each assigned to one bin, such that the total weight of every packing pattern does not exceed the bin capacity $c$.

- We denote by $z(I)$ the <strong>optimal value</strong> of the BPP on the instance $I$, i.e., the minimum number of bins, and by $\mathscr{A}(I)$ the number of bins used by the feasible solution returned by a heuristic algorithm $\mathscr{A}$. Since every heuristic of this document returns a feasible solution,

    $$
    \mathscr{A}(I) \ge z(I) ~~~~~~~\text{and}~~~~~~~ \frac{\mathscr{A}(I)}{z(I)} \ge 1
    $$

    for every BPP instance $I$.

## 24.2 The Next Fit { #sez-sec-NF }

!!! chiave ""

    The <em>Next Fit Algorithm</em>  (denoted by NF) is a constructive heuristic for the BPP. It processes the items in the order in which they are given in the input instance, maintaining exactly one open bin at any time. For each item, NF packs it into the currently open bin if it fits; otherwise, it closes the bin, opens a new one, and places the item there.

- <strong>Data structure for the solution.</strong> We use a vector $bin=(bin_1,bin_2,\dots,bin_n)$ of length $n$ to store the solution. At position $i$, the vector contains the number of the bin to which item $i$ is assigned. More formally:

    $$
    bin_i = b \quad \Longleftrightarrow \quad \text{item } i \text{ is packed into bin } b.
    $$

    For example, if $bin_3 = 2$, then item $3$ is assigned to bin $2$. In addition, we maintain a variable $nb$ that stores the total number of bins used, i.e., at the end of the algorithm $NF(I) = nb$.

- The pseudo-code of NF reads as follows:

!!! algoritmo "Algorithm: Next Fit"

    <div class="pseudocodice" markdown="0"><div class="pc" style="--liv:0"><strong>Input:</strong> BPP instance <span class="arithmatex">\(I\)</span> with <span class="arithmatex">\(n\)</span> items, weights <span class="arithmatex">\(w[1..n]\)</span>, capacity <span class="arithmatex">\(c\)</span></div><div class="pc" style="--liv:0"><strong>Output:</strong> Item-bin assignment <span class="arithmatex">\(bin[1..n]\)</span> and number of used bins <span class="arithmatex">\(nb\)</span></div><div class="pc" style="--liv:0"><span class="pc-n">1</span><strong>Function</strong> NextFit(<span class="arithmatex">\(n, w, c\)</span>)</div><div class="pc" style="--liv:1"><span class="pc-n">2</span><span class="arithmatex">\(bin := \text{new array}[1..n]\)</span>
    <span class="arithmatex">\(nb := 1\)</span> 
    <span class="arithmatex">\(rc := c\)</span> <span class="pc-com">▹ item-bin assignment current bin residual capacity</span></div><div class="pc" style="--liv:1"><span class="pc-n">3</span><strong>for</strong> <span class="arithmatex">\(i := 1\)</span> <strong>to</strong> <span class="arithmatex">\(n\)</span> <strong>do</strong></div><div class="pc" style="--liv:2"><span class="pc-n">4</span><strong>if</strong> <span class="arithmatex">\(w[i] > rc\)</span> <strong>then</strong></div><div class="pc" style="--liv:3"><span class="pc-n">5</span><span class="arithmatex">\(nb \leftarrow nb + 1\)</span> 
    <span class="arithmatex">\(rc \leftarrow c\)</span> <span class="pc-com">▹ open new bin</span></div><div class="pc" style="--liv:2"><span class="pc-n">6</span><strong>end</strong></div><div class="pc" style="--liv:2"><span class="pc-n">7</span><span class="arithmatex">\(bin[i] \leftarrow nb\)</span> 
    <span class="arithmatex">\(rc \leftarrow rc - w[i]\)</span> <span class="pc-com">▹ assign item to bin</span></div><div class="pc" style="--liv:1"><span class="pc-n">8</span><strong>end</strong></div><div class="pc" style="--liv:1"><span class="pc-n">9</span><strong>return</strong> <span class="arithmatex">\(bin\)</span>, <span class="arithmatex">\(nb\)</span></div></div>

<a id="box-2-ex-NFexec1"></a>

!!! esempio "Example 24.1: Execution of NF"

    We consider a bin of capacity $c = 10$ and a set $\mathscr{I} = \{1,2,3,4,5\}$ of $5$ items ($n = 5$), with the following item weights:

    $$
    \begin{array}{l|ccccc}
    \hline  & {i=1} & {i=2} & {i=3} & {i=4} & {i=5} \\[1ex]
    \hline {w_i} & {6} & {5} & {4} & {7} & {3} \\[1ex]
    \hline
    \end{array}
    $$

    Initially $nb:=1$, $rc:=c$. The NF algorithm produces the following feasible solution:

    1. Item $1$ (weight $w[1]=6$): $w[1]=6\le rc=10$, so no new bin is opened. Item $1$ is packed into bin $nb=1$, and $rc\leftarrow 10-6=4$.

    2. Item $2$ (weight $w[2]=5$): $w[2]=5>rc=4$, so $nb\leftarrow 2$ and $rc\leftarrow c=10$. Item $2$ is packed into bin $nb=2$, and $rc\leftarrow 10-5=5$.

    3. Item $3$ (weight $w[3]=4$): $w[3]=4\le rc=5$, so no new bin is opened. Item $3$ is packed into bin $nb=2$, and $rc\leftarrow 5-4=1$.

    4. Item $4$ (weight $w[4]=7$): $w[4]=7>rc=1$, so $nb\leftarrow 3$ and $rc\leftarrow c=10$. Item $4$ is packed into bin $nb=3$, and $rc\leftarrow 10-7=3$.

    5. Item $5$ (weight $w[5]=3$): $w[5]=3\le rc=3$, so no new bin is opened. Item $5$ is packed into bin $nb=3$, and $rc\leftarrow 3-3=0$.

    Hence NF returns:

    $$
    bin = \begin{pmatrix} 1 & 2 & 2 & 3 & 3 \end{pmatrix},
    \qquad
    nb=3.
    $$

    and therefore

    $$
    NF(I)=nb=3.
    $$

- Given the output of an algorithm, namely the vector $bin=(bin_1,bin_2,\dots,bin_n)$ and the number of bins $nb$, we can obtain the <strong>packing pattern</strong> $P_b$ of each bin $b$, i.e., the set of items assigned to it, as follows:

    $$
    P_b = \big\{~ i \in \{1,2,\dots,n\} : bin_i = b ~\big\}, \qquad \text{for } b \in \{1,2,\dots,nb\}.
    $$

    In other words, $P_b$ is the set of all items $i$ such that $bin_i = b$; $P_b$ is the packing pattern of bin $b$, not the bin itself.

<a id="box-3-exsubsets"></a>

!!! esempio "Example 24.2: Packing patterns from bin vector"

    Consider the instance of the previous example where NF returns:

    $$
    bin = \begin{pmatrix} 1 & 2 & 2 & 3 & 3 \end{pmatrix}, \qquad nb = 3.
    $$

    The packing patterns are:

    \begin{align*}
    P_1 &= \{ i \in \{1,2,3,4,5\} : bin_i = 1 \} = \{1\}, \\
    P_2 &= \{ i \in \{1,2,3,4,5\} : bin_i = 2 \} = \{2,3\}, \\
    P_3 &= \{ i \in \{1,2,3,4,5\} : bin_i = 3 \} = \{4,5\}.
    \end{align*}

    These are exactly the sets of items packed into the bins constructed by the algorithm:

    - Bin $1$ contains item $1$ with weight $w_1=6$;

    - Bin $2$ contains items $2$ and $3$ with total weight $w_2+w_3=5+4=9$;

    - Bin $3$ contains items $4$ and $5$ with total weight $w_4+w_5=7+3=10$.

## 24.3 The Any Fit class { #sez-sec-AF }

!!! chiave ""

    A constructive heuristic for the BPP that keeps all the bins opened so far, and opens a new bin <em>only when</em> the current item fits into none of them, is called an <em>Any Fit Algorithm</em> (denoted by AF). Any Fit is therefore not a single algorithm but a <em>family</em> of algorithms: what the condition leaves free is the rule used to select one bin among those in which the item fits, and each rule gives a different member of the family.

<a id="box-4-def-AF"></a>

!!! definizione "Definition 24.2: Any Fit algorithm"

    A constructive heuristic $\mathscr{A}$ for the BPP is an <strong>Any Fit algorithm</strong> if, denoting by $P_1,P_2,\dots,P_{nb}$ the packing patterns of the bins opened so far, it opens a new bin for item $i$ only when

    $$
    \sum_{h \in P_b} w_h + w_i > c \qquad \text{for every } b \in \{1,2,\dots,nb\},
    $$

    whereas the choice of the bin, when more than one can accommodate the item, is left unspecified.

- <strong>The items of two bins never fit together.</strong> Let $b$ and $b'$ be two bins opened by an Any Fit algorithm, with $b<b'$, let $f$ be the first item packed into bin $b'$, and let $W_b$ be the total weight of the items contained in bin $b$ at the moment in which $f$ was processed. Bin $b'$ was opened because $f$ did not fit into any of the bins opened so far, and in particular not into bin $b$, hence $W_b + w_{f} > c$. The total weight of a bin never decreases during the execution, so $\sum_{i\in P_b} w_i \ge W_b$, and $f\in P_{b'}$ gives $\sum_{i\in P_{b'}} w_i \ge w_{f}$. Therefore

    $$
    \sum_{i\in P_b} w_i + \sum_{i\in P_{b'}} w_i \;\ge\; W_b + w_{f} \;>\; c
    $$

    for any two distinct bins $b$ and $b'$: accordingly, no two bins of an Any Fit solution can be merged. Only the Any Fit condition is used here, the selection rule plays no role.

- <strong>NF is not an Any Fit algorithm.</strong> NF keeps a single open bin and closes it as soon as an item does not fit, even when that item would fit into a bin closed earlier.

<a id="box-5-ex-notAF"></a>

!!! esempio "Example 24.3: NF is not an Any Fit algorithm"

    We consider a bin of capacity $c = 10$ and a set $\mathscr{I} = \{1,2,3,4\}$ of $4$ items ($n = 4$), with the following item weights:

    $$
    \begin{array}{l|cccc}
    \hline  & {i=1} & {i=2} & {i=3} & {i=4} \\[1ex]
    \hline {w_i} & {3} & {8} & {3} & {8} \\
    \hline
    \end{array}
    $$

    Initially $nb:=1$, $rc:=c$. The NF algorithm produces the following feasible solution:

    1. Item $1$ (weight $w[1]=3$): $w[1]=3\le rc=10$, so no new bin is opened. Item $1$ is packed into bin $nb=1$, and $rc\leftarrow 10-3=7$.

    2. Item $2$ (weight $w[2]=8$): $w[2]=8>rc=7$, so $nb\leftarrow 2$ and $rc\leftarrow c=10$. Item $2$ is packed into bin $nb=2$, and $rc\leftarrow 10-8=2$.

    3. Item $3$ (weight $w[3]=3$): $w[3]=3>rc=2$, so $nb\leftarrow 3$ and $rc\leftarrow c=10$. Item $3$ is packed into bin $nb=3$, and $rc\leftarrow 10-3=7$.

    4. Item $4$ (weight $w[4]=8$): $w[4]=8>rc=7$, so $nb\leftarrow 4$ and $rc\leftarrow c=10$. Item $4$ is packed into bin $nb=4$, and $rc\leftarrow 10-8=2$.

    Hence NF returns:

    $$
    bin = \begin{pmatrix} 1 & 2 & 3 & 4 \end{pmatrix},
    \qquad
    nb=4.
    $$

    At the third iteration item $3$ would fit into bin $1$, whose residual capacity is $7$, and NF opens a new bin all the same: NF violates the Any Fit condition.

    An Any Fit algorithm, on the contrary, cannot open a third bin for item $3$, because the item fits into bin $1$: it packs item $3$ there and then opens a new bin for item $4$, which fits in neither bin, using $3$ bins instead of $4$. This holds for every algorithm of the class, whatever the selection rule.

### 24.3.1 The First Fit

!!! chiave ""

    The <em>First Fit Algorithm</em> (denoted by FF) is a constructive heuristic for the BPP. It processes the items in the order in which they are given in the input instance, maintaining all bins opened so far. For each item, FF scans the bins in the order they were opened and packs the item into the <em>first</em> bin in which it fits; if no current bin can accommodate the item, FF opens a new bin and places the item there.

- FF is an Any Fit algorithm: it opens a new bin only when the item fits into none of the bins opened so far, and the rule left unspecified by [Definition 24.2](#box-4-def-AF) is here resolved by taking the first bin in which the item fits.

- The pseudo-code of FF reads as follows:

!!! algoritmo "Algorithm: First Fit"

    <div class="pseudocodice" markdown="0"><div class="pc" style="--liv:0"><strong>Input:</strong> BPP instance <span class="arithmatex">\(I\)</span> with <span class="arithmatex">\(n\)</span> items, weights <span class="arithmatex">\(w[1..n]\)</span>, capacity <span class="arithmatex">\(c\)</span></div><div class="pc" style="--liv:0"><strong>Output:</strong> Item-bin assignment <span class="arithmatex">\(bin[1..n]\)</span> and number of used bins <span class="arithmatex">\(nb\)</span></div><div class="pc" style="--liv:0"><span class="pc-n">1</span><strong>Function</strong> FirstFit(<span class="arithmatex">\(n, w, c\)</span>)</div><div class="pc" style="--liv:1"><span class="pc-n">2</span><span class="arithmatex">\(bin := \text{new array}[1..n]\)</span>
    <span class="arithmatex">\(rc := \text{new array}[1..n]\)</span>
    <span class="arithmatex">\(nb := 1\)</span> 
    <span class="arithmatex">\(rc[1] \leftarrow c\)</span> <span class="pc-com">▹ item-bin assignment residual capacities number of bins initialize first bin</span></div><div class="pc" style="--liv:1"><span class="pc-n">3</span><strong>for</strong> <span class="arithmatex">\(i := 1\)</span> <strong>to</strong> <span class="arithmatex">\(n\)</span> <strong>do</strong></div><div class="pc" style="--liv:2"><span class="pc-n">4</span><span class="arithmatex">\(s := -1\)</span> <span class="pc-com">▹ selected bin</span></div><div class="pc" style="--liv:2"><span class="pc-n">5</span><strong>for</strong> <span class="arithmatex">\(b := 1\)</span> <strong>to</strong> <span class="arithmatex">\(nb\)</span> <strong>do</strong></div><div class="pc" style="--liv:3"><span class="pc-n">6</span><strong>if</strong> <span class="arithmatex">\(w[i] \le rc[b]\)</span> <strong>then</strong></div><div class="pc" style="--liv:4"><span class="pc-n">7</span><span class="arithmatex">\(s \leftarrow b\)</span></div><div class="pc" style="--liv:4"><span class="pc-n">8</span><strong>break</strong></div><div class="pc" style="--liv:3"><span class="pc-n">9</span><strong>end</strong></div><div class="pc" style="--liv:2"><span class="pc-n">10</span><strong>end</strong></div><div class="pc" style="--liv:2"><span class="pc-n">11</span><strong>if</strong> <span class="arithmatex">\(s = -1\)</span> <strong>then</strong></div><div class="pc" style="--liv:3"><span class="pc-n">12</span><span class="arithmatex">\(nb \leftarrow nb + 1\)</span> 
    <span class="arithmatex">\(rc[nb] \leftarrow c\)</span> <span class="pc-com">▹ open new bin</span></div><div class="pc" style="--liv:3"><span class="pc-n">13</span><span class="arithmatex">\(s \leftarrow nb\)</span></div><div class="pc" style="--liv:2"><span class="pc-n">14</span><strong>end</strong></div><div class="pc" style="--liv:2"><span class="pc-n">15</span><span class="arithmatex">\(bin[i] \leftarrow s\)</span> 
    <span class="arithmatex">\(rc[s] \leftarrow rc[s] - w[i]\)</span> <span class="pc-com">▹ assign item</span></div><div class="pc" style="--liv:1"><span class="pc-n">16</span><strong>end</strong></div><div class="pc" style="--liv:1"><span class="pc-n">17</span><strong>return</strong> <span class="arithmatex">\(bin\)</span>, <span class="arithmatex">\(nb\)</span></div></div>

<a id="box-6-ex-FFexec1"></a>

!!! esempio "Example 24.4: Execution of FF"

    We consider a bin of capacity $c = 10$ and a set $\mathscr{I} = \{1,2,3,4,5\}$ of $5$ items ($n = 5$), with the following item weights:

    $$
    \begin{array}{l|ccccc}
    \hline  & {i=1} & {i=2} & {i=3} & {i=4} & {i=5} \\[1ex]
    \hline {w_i} & {6} & {5} & {4} & {7} & {3} \\[1ex]
    \hline
    \end{array}
    $$

    The FF algorithm produces the following feasible solution:

    1. Item $1$ (weight $6$): bin $1$ is open at the start ($nb=1$, $rc[1]=c=10$) and $w[1]\le rc[1]$, so $s=1$ and FF packs item $1$ into bin $1$, and $rc[1]\leftarrow 10-6=4$.

    2. Item $2$ (weight $5$): $b=1$: $w[2]=5\le rc[1]=4$? No. No bin fits ($s=-1$), so FF opens bin $2$ ($rc[2]\leftarrow 10$). Item $2$ is packed into bin $2$, and $rc[2]\leftarrow 10-5=5$.

    3. Item $3$ (weight $4$): $b=1$: $w[3]=4\le rc[1]=4$? Yes, so $s\leftarrow 1$ and the scan stops. Item $3$ is packed into bin $1$, and $rc[1]\leftarrow 4-4=0$.

    4. Item $4$ (weight $7$): $b=1$: $w[4]=7\le rc[1]=0$? No. $b=2$: $w[4]=7\le rc[2]=5$? No. No bin fits ($s=-1$), so FF opens bin $3$ ($rc[3]\leftarrow 10$). Item $4$ is packed into bin $3$, and $rc[3]\leftarrow 10-7=3$.

    5. Item $5$ (weight $3$): $b=1$: $w[5]=3\le rc[1]=0$? No. $b=2$: $w[5]=3\le rc[2]=5$? Yes, so $s\leftarrow 2$ and the scan stops. Item $5$ is packed into bin $2$, and $rc[2]\leftarrow 5-3=2$.

    Hence FF returns:

    $$
    bin = \begin{pmatrix} 1 & 2 & 1 & 3 & 2 \end{pmatrix},
    \qquad
    nb=3.
    $$

    and therefore

    $$
    FF(I)=nb=3.
    $$

<a id="box-7-exsubsetsFF"></a>

!!! esempio "Example 24.5: Packing patterns from bin vector"

    Consider the instance of the previous example where FF returns:

    $$
    bin = \begin{pmatrix} 1 & 2 & 1 & 3 & 2 \end{pmatrix}, \qquad nb = 3.
    $$

    The packing patterns are:

    \begin{align*}
    P_1 &= \{ i \in \{1,2,3,4,5\} : bin_i = 1 \} = \{1,3\}, \\
    P_2 &= \{ i \in \{1,2,3,4,5\} : bin_i = 2 \} = \{2,5\}, \\
    P_3 &= \{ i \in \{1,2,3,4,5\} : bin_i = 3 \} = \{4\}.
    \end{align*}

    These are exactly the sets of items packed into the bins constructed by the algorithm:

    - Bin $1$ contains items $1$ and $3$ with total weight $w_1+w_3=6+4=10$;

    - Bin $2$ contains items $2$ and $5$ with total weight $w_2+w_5=5+3=8$;

    - Bin $3$ contains item $4$ with weight $w_4=7$.

### 24.3.2 The Best Fit

!!! chiave ""

    The <em>Best Fit Algorithm</em> (denoted by BF)  is a constructive heuristic for the BPP. It processes the items in the order in which they are given in the input instance, maintaining all bins opened so far. For each item, BF considers all the bins in which the item fits and packs it into the one with the <em>smallest residual capacity</em> (in case of ties, the bin opened first); if no bin can accommodate the item, BF opens a new bin and places the item there.

- The rationale is to fill the bins as tightly as possible: by using the bin where the item leaves the least space unused, BF keeps the bins with a larger residual capacity available for the larger items that may still arrive.

- BF is an Any Fit algorithm: it opens a new bin only when the item fits into none of the bins opened so far, and the rule left unspecified by [Definition 24.2](#box-4-def-AF) is here resolved by taking the bin with the smallest residual capacity.

- The pseudo-code of BF reads as follows:

!!! algoritmo "Algorithm: Best Fit"

    <div class="pseudocodice" markdown="0"><div class="pc" style="--liv:0"><strong>Input:</strong> BPP instance <span class="arithmatex">\(I\)</span> with <span class="arithmatex">\(n\)</span> items, weights <span class="arithmatex">\(w[1..n]\)</span>, capacity <span class="arithmatex">\(c\)</span></div><div class="pc" style="--liv:0"><strong>Output:</strong> Item-bin assignment <span class="arithmatex">\(bin[1..n]\)</span> and number of used bins <span class="arithmatex">\(nb\)</span></div><div class="pc" style="--liv:0"><span class="pc-n">1</span><strong>Function</strong> BestFit(<span class="arithmatex">\(n, w, c\)</span>)</div><div class="pc" style="--liv:1"><span class="pc-n">2</span><span class="arithmatex">\(bin := \text{new array}[1..n]\)</span>
    <span class="arithmatex">\(rc := \text{new array}[1..n]\)</span>
    <span class="arithmatex">\(nb := 1\)</span> 
    <span class="arithmatex">\(rc[1] \leftarrow c\)</span> <span class="pc-com">▹ item-bin assignment residual capacities number of bins initialize first bin</span></div><div class="pc" style="--liv:1"><span class="pc-n">3</span><strong>for</strong> <span class="arithmatex">\(i := 1\)</span> <strong>to</strong> <span class="arithmatex">\(n\)</span> <strong>do</strong></div><div class="pc" style="--liv:2"><span class="pc-n">4</span><span class="arithmatex">\(minrc := c + 1\)</span> 
    <span class="arithmatex">\(s := -1\)</span> <span class="pc-com">▹ smallest residual capacity found so far selected bin</span></div><div class="pc" style="--liv:2"><span class="pc-n">5</span><strong>for</strong> <span class="arithmatex">\(b := 1\)</span> <strong>to</strong> <span class="arithmatex">\(nb\)</span> <strong>do</strong></div><div class="pc" style="--liv:3"><span class="pc-n">6</span><strong>if</strong> <span class="arithmatex">\(w[i] \le rc[b]\)</span> <strong>and</strong> <span class="arithmatex">\(rc[b] < minrc\)</span> <strong>then</strong></div><div class="pc" style="--liv:4"><span class="pc-n">7</span><span class="arithmatex">\(s \leftarrow b\)</span></div><div class="pc" style="--liv:4"><span class="pc-n">8</span><span class="arithmatex">\(minrc \leftarrow rc[b]\)</span></div><div class="pc" style="--liv:3"><span class="pc-n">9</span><strong>end</strong></div><div class="pc" style="--liv:2"><span class="pc-n">10</span><strong>end</strong></div><div class="pc" style="--liv:2"><span class="pc-n">11</span><strong>if</strong> <span class="arithmatex">\(s = -1\)</span> <strong>then</strong></div><div class="pc" style="--liv:3"><span class="pc-n">12</span><span class="arithmatex">\(nb \leftarrow nb + 1\)</span> 
    <span class="arithmatex">\(rc[nb] \leftarrow c\)</span> <span class="pc-com">▹ open new bin</span></div><div class="pc" style="--liv:3"><span class="pc-n">13</span><span class="arithmatex">\(s \leftarrow nb\)</span></div><div class="pc" style="--liv:2"><span class="pc-n">14</span><strong>end</strong></div><div class="pc" style="--liv:2"><span class="pc-n">15</span><span class="arithmatex">\(bin[i] \leftarrow s\)</span> 
    <span class="arithmatex">\(rc[s] \leftarrow rc[s] - w[i]\)</span> <span class="pc-com">▹ assign item</span></div><div class="pc" style="--liv:1"><span class="pc-n">16</span><strong>end</strong></div><div class="pc" style="--liv:1"><span class="pc-n">17</span><strong>return</strong> <span class="arithmatex">\(bin\)</span>, <span class="arithmatex">\(nb\)</span></div></div>

<a id="box-8-ex-BFexec1"></a>

!!! esempio "Example 24.6: Execution of BF"

    We consider a bin of capacity $c = 10$ and a set $\mathscr{I} = \{1,2,3,4,5\}$ of $5$ items ($n = 5$), with the following item weights:

    $$
    \begin{array}{l|ccccc}
    \hline  & {i=1} & {i=2} & {i=3} & {i=4} & {i=5} \\[1ex]
    \hline {w_i} & {6} & {5} & {4} & {7} & {3} \\[1ex]
    \hline
    \end{array}
    $$

    The BF algorithm produces the following feasible solution:

    1. Item $1$ (weight $6$): bin $1$ is open at the start ($nb=1$, $rc[1]=c=10$) and $w[1]\le rc[1]$, so $s=1$ and BF packs item $1$ into bin $1$, and $rc[1]\leftarrow 10-6=4$.

    2. Item $2$ (weight $5$): $minrc:=11$, $s:=-1$. $b=1$: $w[2]=5\le rc[1]=4$? No. No bin fits ($s=-1$), so BF opens bin $2$ ($rc[2]\leftarrow 10$). Item $2$ is packed into bin $2$, and $rc[2]\leftarrow 10-5=5$.

    3. Item $3$ (weight $4$): $minrc:=11$, $s:=-1$. $b=1$: $w[3]=4\le rc[1]=4$ and $rc[1]=4<11$, so $s\leftarrow 1$, $minrc\leftarrow 4$. $b=2$: $w[3]=4\le rc[2]=5$ and $rc[2]=5<minrc=4$? No. Hence $s=1$: item $3$ is packed into bin $1$ (the one leaving the smallest residual capacity, $0$, against $1$ for bin $2$), and $rc[1]\leftarrow 4-4=0$.

    4. Item $4$ (weight $7$): $b=1$: $w[4]=7\le rc[1]=0$? No. $b=2$: $w[4]=7\le rc[2]=5$? No. No bin fits ($s=-1$), so BF opens bin $3$ ($rc[3]\leftarrow 10$). Item $4$ is packed into bin $3$, and $rc[3]\leftarrow 10-7=3$.

    5. Item $5$ (weight $3$): $minrc:=11$, $s:=-1$. $b=1$: $w[5]=3\le rc[1]=0$? No. $b=2$: $w[5]=3\le rc[2]=5$ and $rc[2]=5<11$, so $s\leftarrow 2$, $minrc\leftarrow 5$. $b=3$: $w[5]=3\le rc[3]=3$ and $rc[3]=3<minrc=5$, so $s\leftarrow 3$, $minrc\leftarrow 3$. Hence $s=3$: item $5$ is packed into bin $3$ (the one leaving the smallest residual capacity, $0$, against $2$ for bin $2$), and $rc[3]\leftarrow 3-3=0$.

    Hence BF returns:

    $$
    bin = \begin{pmatrix} 1 & 2 & 1 & 3 & 3 \end{pmatrix},
    \qquad
    nb=3.
    $$

    and therefore

    $$
    BF(I)=nb=3.
    $$

<a id="box-9-exsubsetsBF"></a>

!!! esempio "Example 24.7: Packing patterns from bin vector"

    Consider the instance of the previous example where BF returns:

    $$
    bin = \begin{pmatrix} 1 & 2 & 1 & 3 & 3 \end{pmatrix}, \qquad nb = 3.
    $$

    The packing patterns are:

    \begin{align*}
    P_1 &= \{ i \in \{1,2,3,4,5\} : bin_i = 1 \} = \{1,3\}, \\
    P_2 &= \{ i \in \{1,2,3,4,5\} : bin_i = 2 \} = \{2\}, \\
    P_3 &= \{ i \in \{1,2,3,4,5\} : bin_i = 3 \} = \{4,5\}.
    \end{align*}

    These are exactly the sets of items packed into the bins constructed by the algorithm:

    - Bin $1$ contains items $1$ and $3$ with total weight $w_1+w_3=6+4=10$;

    - Bin $2$ contains item $2$ with weight $w_2=5$;

    - Bin $3$ contains items $4$ and $5$ with total weight $w_4+w_5=7+3=10$.

### 24.3.3 The Worst Fit

!!! chiave ""

    The <em>Worst Fit Algorithm</em> (denoted by WF)  is a constructive heuristic for the BPP. It processes the items in the order in which they are given in the input instance, maintaining all bins opened so far. For each item, WF considers all the bins in which the item fits and packs it into the one with the <em>largest residual capacity</em> (in case of ties, the bin opened first); if no bin can accommodate the item, WF opens a new bin and places the item there.

- The rationale is the opposite of the one of BF: by packing each item into the emptiest bin, WF avoids creating bins whose residual capacity is so small that no future item can use it, and it keeps the free space spread over the open bins.

- WF is an Any Fit algorithm: it opens a new bin only when the item fits into none of the bins opened so far, and the rule left unspecified by [Definition 24.2](#box-4-def-AF) is here resolved by taking the bin with the largest residual capacity.

- The pseudo-code of WF reads as follows:

!!! algoritmo "Algorithm: Worst Fit"

    <div class="pseudocodice" markdown="0"><div class="pc" style="--liv:0"><strong>Input:</strong> BPP instance <span class="arithmatex">\(I\)</span> with <span class="arithmatex">\(n\)</span> items, weights <span class="arithmatex">\(w[1..n]\)</span>, capacity <span class="arithmatex">\(c\)</span></div><div class="pc" style="--liv:0"><strong>Output:</strong> Item-bin assignment <span class="arithmatex">\(bin[1..n]\)</span> and number of used bins <span class="arithmatex">\(nb\)</span></div><div class="pc" style="--liv:0"><span class="pc-n">1</span><strong>Function</strong> WorstFit(<span class="arithmatex">\(n, w, c\)</span>)</div><div class="pc" style="--liv:1"><span class="pc-n">2</span><span class="arithmatex">\(bin := \text{new array}[1..n]\)</span>
    <span class="arithmatex">\(rc := \text{new array}[1..n]\)</span>
    <span class="arithmatex">\(nb := 1\)</span> 
    <span class="arithmatex">\(rc[1] \leftarrow c\)</span> <span class="pc-com">▹ item-bin assignment residual capacities number of bins initialize first bin</span></div><div class="pc" style="--liv:1"><span class="pc-n">3</span><strong>for</strong> <span class="arithmatex">\(i := 1\)</span> <strong>to</strong> <span class="arithmatex">\(n\)</span> <strong>do</strong></div><div class="pc" style="--liv:2"><span class="pc-n">4</span><span class="arithmatex">\(maxrc := -1\)</span> 
    <span class="arithmatex">\(s := -1\)</span> <span class="pc-com">▹ largest residual capacity found so far selected bin</span></div><div class="pc" style="--liv:2"><span class="pc-n">5</span><strong>for</strong> <span class="arithmatex">\(b := 1\)</span> <strong>to</strong> <span class="arithmatex">\(nb\)</span> <strong>do</strong></div><div class="pc" style="--liv:3"><span class="pc-n">6</span><strong>if</strong> <span class="arithmatex">\(w[i] \le rc[b]\)</span> <strong>and</strong> <span class="arithmatex">\(rc[b] > maxrc\)</span> <strong>then</strong></div><div class="pc" style="--liv:4"><span class="pc-n">7</span><span class="arithmatex">\(s \leftarrow b\)</span></div><div class="pc" style="--liv:4"><span class="pc-n">8</span><span class="arithmatex">\(maxrc \leftarrow rc[b]\)</span></div><div class="pc" style="--liv:3"><span class="pc-n">9</span><strong>end</strong></div><div class="pc" style="--liv:2"><span class="pc-n">10</span><strong>end</strong></div><div class="pc" style="--liv:2"><span class="pc-n">11</span><strong>if</strong> <span class="arithmatex">\(s = -1\)</span> <strong>then</strong></div><div class="pc" style="--liv:3"><span class="pc-n">12</span><span class="arithmatex">\(nb \leftarrow nb + 1\)</span> 
    <span class="arithmatex">\(rc[nb] \leftarrow c\)</span> <span class="pc-com">▹ open new bin</span></div><div class="pc" style="--liv:3"><span class="pc-n">13</span><span class="arithmatex">\(s \leftarrow nb\)</span></div><div class="pc" style="--liv:2"><span class="pc-n">14</span><strong>end</strong></div><div class="pc" style="--liv:2"><span class="pc-n">15</span><span class="arithmatex">\(bin[i] \leftarrow s\)</span> 
    <span class="arithmatex">\(rc[s] \leftarrow rc[s] - w[i]\)</span> <span class="pc-com">▹ assign item</span></div><div class="pc" style="--liv:1"><span class="pc-n">16</span><strong>end</strong></div><div class="pc" style="--liv:1"><span class="pc-n">17</span><strong>return</strong> <span class="arithmatex">\(bin\)</span>, <span class="arithmatex">\(nb\)</span></div></div>

<a id="box-10-ex-WFexec1"></a>

!!! esempio "Example 24.8: Execution of WF"

    We consider a bin of capacity $c = 10$ and a set $\mathscr{I} = \{1,2,3,4,5\}$ of $5$ items ($n = 5$), with the following item weights:

    $$
    \begin{array}{l|ccccc}
    \hline  & {i=1} & {i=2} & {i=3} & {i=4} & {i=5} \\[1ex]
    \hline {w_i} & {6} & {5} & {4} & {7} & {3} \\[1ex]
    \hline
    \end{array}
    $$

    The WF algorithm produces the following feasible solution:

    1. Item $1$ (weight $6$): bin $1$ is open at the start ($nb=1$, $rc[1]=c=10$) and $w[1]\le rc[1]$, so $s=1$ and WF packs item $1$ into bin $1$, and $rc[1]\leftarrow 10-6=4$.

    2. Item $2$ (weight $5$): $maxrc:=-1$, $s:=-1$. $b=1$: $w[2]=5\le rc[1]=4$? No. No bin fits ($s=-1$), so WF opens bin $2$ ($rc[2]\leftarrow 10$). Item $2$ is packed into bin $2$, and $rc[2]\leftarrow 10-5=5$.

    3. Item $3$ (weight $4$): $maxrc:=-1$, $s:=-1$. $b=1$: $w[3]=4\le rc[1]=4$ and $rc[1]=4>-1$, so $s\leftarrow 1$, $maxrc\leftarrow 4$. $b=2$: $w[3]=4\le rc[2]=5$ and $rc[2]=5>maxrc=4$, so $s\leftarrow 2$, $maxrc\leftarrow 5$. Hence $s=2$: item $3$ is packed into bin $2$ (the one with the largest residual capacity), and $rc[2]\leftarrow 5-4=1$.

    4. Item $4$ (weight $7$): $b=1$: $w[4]=7\le rc[1]=4$? No. $b=2$: $w[4]=7\le rc[2]=1$? No. No bin fits ($s=-1$), so WF opens bin $3$ ($rc[3]\leftarrow 10$). Item $4$ is packed into bin $3$, and $rc[3]\leftarrow 10-7=3$.

    5. Item $5$ (weight $3$): $maxrc:=-1$, $s:=-1$. $b=1$: $w[5]=3\le rc[1]=4$ and $rc[1]=4>-1$, so $s\leftarrow 1$, $maxrc\leftarrow 4$. $b=2$: $w[5]=3\le rc[2]=1$? No. $b=3$: $w[5]=3\le rc[3]=3$ and $rc[3]=3>maxrc=4$? No. Hence $s=1$: item $5$ is packed into bin $1$ (the one with the largest residual capacity), and $rc[1]\leftarrow 4-3=1$.

    Hence WF returns:

    $$
    bin = \begin{pmatrix} 1 & 2 & 2 & 3 & 1 \end{pmatrix},
    \qquad
    nb=3.
    $$

    and therefore

    $$
    WF(I)=nb=3.
    $$

<a id="box-11-exsubsetsWF"></a>

!!! esempio "Example 24.9: Packing patterns from bin vector"

    Consider the instance of the previous example where WF returns:

    $$
    bin = \begin{pmatrix} 1 & 2 & 2 & 3 & 1 \end{pmatrix}, \qquad nb = 3.
    $$

    The packing patterns are:

    \begin{align*}
    P_1 &= \{ i \in \{1,2,3,4,5\} : bin_i = 1 \} = \{1,5\}, \\
    P_2 &= \{ i \in \{1,2,3,4,5\} : bin_i = 2 \} = \{2,3\}, \\
    P_3 &= \{ i \in \{1,2,3,4,5\} : bin_i = 3 \} = \{4\}.
    \end{align*}

    These are exactly the sets of items packed into the bins constructed by the algorithm:

    - Bin $1$ contains items $1$ and $5$ with total weight $w_1+w_5=6+3=9$;

    - Bin $2$ contains items $2$ and $3$ with total weight $w_2+w_3=5+4=9$;

    - Bin $3$ contains item $4$ with weight $w_4=7$.

## 24.4 Half-full property

- The results of this section do not depend on the rule used to select the bin: they are proved using <em>only</em> the Any Fit condition, and therefore hold for every algorithm of the family, including FF, BF and WF.

- The <strong>half-full property</strong> of a feasible BPP solution states that, with the exception of at most one bin, all bins are filled to more than half of their capacity, or equivalently, that for any pair of distinct bins at least one of them is filled to more than half capacity.

- The half-full property alone does <em>not</em> guarantee that two bins cannot be merged: for instance, with $c=10$ two bins of total weight $6$ and $1$ satisfy the property but can be merged into a single bin. Its role is different: it is exactly what is needed to prove a relative performance guarantee of $2$ (see the proposition at the end of this section).

<a id="box-12-def-halffull"></a>

!!! definizione "Definition 24.3: Half-full property"

    Given a feasible BPP solution with $k$ bins and packing patterns $\mathcal{P}=\{P_1,P_2,\dots,P_k\}$ (where $P_b$ is the set of items packed into bin $b$, for $b\in\{1,2,\dots,k\}$), we say that the solution satisfies the <strong>half-full property</strong> if one of the following equivalent conditions holds:

    - there exists at most one bin $b\in\{1,2,\dots,k\}$ such that

        $$
        \sum_{i\in P_b} w_i \le \frac{c}{2}.
        $$

    - for any two distinct bins $b,b'\in\{1,2,\dots,k\}$, at least one of them is filled to more than half of its capacity, i.e.,

        $$
        \sum_{i\in P_b} w_i > \frac{c}{2}
        \qquad\text{or}\qquad
        \sum_{i\in P_{b'}} w_i > \frac{c}{2}.
        $$

<a id="box-13-ex-halffullNFok"></a>

!!! esempio "Example 24.10: Half-full property"

    We consider a bin of capacity $c = 10$ and a set $\mathscr{I} = \{1,2,3,4\}$ of $4$ items ($n = 4$), with the following item weights:

    $$
    \begin{array}{l|cccc}
    \hline  & {i=1} & {i=2} & {i=3} & {i=4} \\[1ex]
    \hline {w_i} & {5} & {5} & {5} & {5} \\
    \hline
    \end{array}
    $$

    Initially $nb:=1$, $rc:=c$. The NF algorithm produces the following feasible solution:

    1. Item $1$ (weight $w[1]=5$): $w[1]=5\le rc=10$, so no new bin is opened. Item $1$ is packed into bin $nb=1$, and $rc\leftarrow 10-5=5$.

    2. Item $2$ (weight $w[2]=5$): $w[2]=5\le rc=5$, so no new bin is opened. Item $2$ is packed into bin $nb=1$, and $rc\leftarrow 5-5=0$.

    3. Item $3$ (weight $w[3]=5$): $w[3]=5>rc=0$, so $nb\leftarrow 2$ and $rc\leftarrow c=10$. Item $3$ is packed into bin $nb=2$, and $rc\leftarrow 10-5=5$.

    4. Item $4$ (weight $w[4]=5$): $w[4]=5\le rc=5$, so no new bin is opened. Item $4$ is packed into bin $nb=2$, and $rc\leftarrow 5-5=0$.

    Hence NF returns:

    $$
    bin = \begin{pmatrix} 1 & 1 & 2 & 2 \end{pmatrix},
    \qquad
    nb=2.
    $$

    The packing patterns are $P_1=\{1,2\}$, $P_2=\{3,4\}$, with total weights:

    $$
    \sum_{i \in P_1} w_i = 5+5=10 > \frac{c}{2}=5,
    \qquad
    \sum_{i \in P_2} w_i = 5+5=10 > \frac{c}{2}=5.
    $$

    Since there is <em>no</em> bin with total weight at most $\frac{c}{2}$, the solution <strong>satisfies</strong> the half-full property.

<a id="box-14-prop-halffullAF"></a>

!!! teorema "Proposition 24.4"

    For every BPP instance, the heuristic BPP solutions produced by <em>any</em> Any Fit algorithm satisfy the half-full property. In particular this holds for FF, BF and WF.

??? dimostrazione "Proof"

    Let $\mathscr{A}$ be an Any Fit algorithm, let $k := \mathscr{A}(I)$, and let $P_1,P_2,\dots,P_k$ be the packing patterns produced by $\mathscr{A}$, indexed in the order the bins are opened. If $k=1$ there is nothing to prove, so assume $k \ge 2$.

    Suppose, by contradiction, that there exist two distinct bins $b$ and $b'$ such that

    $$
    \sum_{i\in P_b} w_i \le \frac{c}{2}
    \qquad\text{and}\qquad
    \sum_{i\in P_{b'}} w_i \le \frac{c}{2}.
    $$

    Summing the two inequalities gives

    $$
    \sum_{i\in P_b} w_i + \sum_{i\in P_{b'}} w_i \le \frac{c}{2} + \frac{c}{2} = c,
    $$

    which contradicts the property of the Any Fit class proved in Section [24.3](#sez-sec-AF), namely that the items of two distinct bins never fit together into a single bin. Therefore there can be at most one bin with total weight at most $\frac{c}{2}$.

    Only the Any Fit condition is used, so the statement holds for every algorithm of the class. <span class="qed">□</span>

<a id="box-15-ex-halffullFFcheck"></a>

!!! esempio "Example 24.11: Half-full property"

    As an illustration of [Proposition 24.4](#box-14-prop-halffullAF), we consider a bin of capacity $c = 10$ and a set $\mathscr{I} = \{1,2,3,4\}$ of $4$ items ($n = 4$), with the following item weights:

    $$
    \begin{array}{l|cccc}
    \hline  & {i=1} & {i=2} & {i=3} & {i=4} \\[1ex]
    \hline {w_i} & {7} & {7} & {3} & {4} \\
    \hline
    \end{array}
    $$

    Initially $nb:=1$, $rc[1]:=c=10$. The FF algorithm produces the following feasible solution:

    1. Item $1$ (weight $7$): $b=1$: $w[1]=7\le rc[1]=10$? Yes, so $s\leftarrow 1$. Item $1$ is packed into bin $1$, and $rc[1]\leftarrow 10-7=3$.

    2. Item $2$ (weight $7$): $b=1$: $w[2]=7\le rc[1]=3$? No. No bin fits, so FF opens bin $2$ ($rc[2]\leftarrow 10$). Item $2$ is packed into bin $2$, and $rc[2]\leftarrow 10-7=3$.

    3. Item $3$ (weight $3$): $b=1$: $w[3]=3\le rc[1]=3$? Yes, so $s\leftarrow 1$. Item $3$ is packed into bin $1$, and $rc[1]\leftarrow 3-3=0$.

    4. Item $4$ (weight $4$): $b=1$: $w[4]=4\le rc[1]=0$? No. $b=2$: $w[4]=4\le rc[2]=3$? No. No bin fits, so FF opens bin $3$ ($rc[3]\leftarrow 10$). Item $4$ is packed into bin $3$, and $rc[3]\leftarrow 10-4=6$.

    Hence FF returns:

    $$
    bin = \begin{pmatrix} 1 & 2 & 1 & 3 \end{pmatrix},
    \qquad
    nb=3.
    $$

    The packing patterns are $P_1=\{1,3\}$, $P_2=\{2\}$, $P_3=\{4\}$, with total weights:

    $$
    \sum_{i \in P_1} w_i = 7+3=10 > \frac{c}{2}=5,
    \qquad
    \sum_{i \in P_2} w_i = 7 > \frac{c}{2}=5,
    \qquad
    \sum_{i \in P_3} w_i = 4 \le \frac{c}{2}=5.
    $$

    Since there is <em>exactly one</em> bin (bin $3$) with total weight at most $\frac{c}{2}$, the solution <strong>satisfies</strong> the half-full property, as guaranteed by [Proposition 24.4](#box-14-prop-halffullAF) since FF is an Any Fit algorithm.

!!! chiave ""

    The Next Fit  may produce solutions with many bins filled to less than half capacity and therefore does not satisfy the half-full property.

<a id="box-16-ex-halffullNF"></a>

!!! esempio "Example 24.12: Half-full property"

    We consider again the instance of [Example 24.3](#box-5-ex-notAF), with bin capacity $c = 10$ and item weights $w=(3,8,3,8)$, on which NF opens a new bin for every item and returns:

    $$
    bin = \begin{pmatrix} 1 & 2 & 3 & 4 \end{pmatrix},
    \qquad
    nb=4.
    $$

    The packing patterns are:

    \begin{align*}
    P_1 &= \{ i \in \{1,2,3,4\} : bin_i = 1 \} = \{1\}, \\
    P_2 &= \{ i \in \{1,2,3,4\} : bin_i = 2 \} = \{2\}, \\
    P_3 &= \{ i \in \{1,2,3,4\} : bin_i = 3 \} = \{3\}, \\
    P_4 &= \{ i \in \{1,2,3,4\} : bin_i = 4 \} = \{4\}.
    \end{align*}

    The total weights in the bins are:

    $$
    \sum_{i \in P_1} w_i = 3 \le \frac{c}{2}=5,
    \quad
    \sum_{i \in P_2} w_i = 8 > \frac{c}{2}=5,
    \quad
    \sum_{i \in P_3} w_i = 3 \le \frac{c}{2}=5,
    \quad
    \sum_{i \in P_4} w_i = 8 > \frac{c}{2}=5.
    $$

    Since there are <em>two</em> bins (bins $1$ and $3$) with total weight at most $\frac{c}{2}$, the solution does <strong>not</strong> satisfy the half-full property.

## 24.5 Performance guarantees

- We now determine the worst case performance ratio of the four algorithms. Next Fit is not an Any Fit algorithm, so it needs an argument of its own. For the three Any Fit algorithms the bound $\mathscr{A}(I)\le 2\,z(I)$ comes at once from the half-full property, without any assumption on the rule used to select the bin, and the question is how tight that bound is: for WF the factor $2$ cannot be improved, whereas FF and BF obey a strictly better bound.

<a id="box-17-prop-halffull2approx"></a>

!!! teorema "Proposition 24.5"

    Let $\mathscr{A}$ be a heuristic algorithm for the BPP that produces solutions satisfying the half-full property. Then, for every BPP instance $I$, we have

    $$
    \frac{\mathscr{A}(I)}{z(I)} \le 2.
    $$

??? dimostrazione "Proof"

    Let $k := \mathscr{A}(I)$, and let $\mathcal{P}=\{P_1,P_2,\dots,P_k\}$ be the packing patterns produced by $\mathscr{A}$, indexed in the order the bins are opened.

    Since the solution satisfies the half-full property, there exists at most one bin $b\in\{1,2,\dots,k\}$ such that

    $$
    \sum_{i\in P_b} w_i \le \frac{c}{2}.
    $$

    Therefore, at least $k-1$ bins have total weight strictly greater than $\frac{c}{2}$. Summing over these bins, we obtain

    $$
    \sum_{i\in\mathscr{I}} w_i \;>\; (k-1)\,\frac{c}{2}.
    $$

    On the other hand, any feasible packing using $z(I)$ bins satisfies

    $$
    \sum_{i\in\mathscr{I}} w_i \;\le\; z(I)\,c.
    $$

    Combining the two inequalities yields

    $$
    (k-1)\,\frac{c}{2} \;<\; \sum_{i\in\mathscr{I}} w_i \;\le\; z(I)\,c
    \qquad \Longrightarrow \qquad
    k-1 \;<\; 2\,z(I)
    \qquad \Longrightarrow \qquad
    k \;<\; 2\,z(I)+1.
    $$

    Since both $k$ and $z(I)$ are positive integers, we have

    $$
    k \;\le\; 2\,z(I).
    $$

    Dividing by $z(I)\ge 1$ gives

    $$
    \frac{k}{z(I)} = \frac{\mathscr{A}(I)}{z(I)} \;\le\; 2.
    $$

    <p class="qed-riga"><span class="qed">□</span></p>

- Since every Any Fit algorithm produces solutions satisfying the half-full property, it follows immediately that

    $$
    \frac{\mathscr{A}(I)}{z(I)} \le 2
    \qquad\text{for every Any Fit algorithm } \mathscr{A}
    $$

    and for every BPP instance $I$. In particular

    $$
    \frac{FF(I)}{z(I)} \le 2 ,
    \qquad
    \frac{BF(I)}{z(I)} \le 2
    \qquad\text{and}\qquad
    \frac{WF(I)}{z(I)} \le 2 ,
    $$

    and therefore FF, BF and WF are $2$-approximation algorithms.

### 24.5.1 The worst case performance ratio of NF

<a id="box-18-prop-NF2approx"></a>

!!! teorema "Proposition 24.6"

    For every BPP instance $I$, we have:

    \begin{equation*}
    \frac{ NF(I) }{z(I)} \le 2 . \tag{24.1}
    \end{equation*}

??? dimostrazione "Proof"

    Let $k := NF(I)$, and let $P_1,P_2,\dots,P_k$ be the packing patterns produced by NF, indexed in the order the bins are opened.

    Fix any $b\in\{1,2,\dots,k-1\}$. The packing pattern $P_b$ corresponds to a bin that is closed when the next item (call it $f$) does not fit into it, hence

    $$
    \sum_{i\in P_{b}} w_i + w_{f} > c.
    $$

    That same item $f$ is the first item placed into the next bin, whose packing pattern is $P_{b+1}$, so

    $$
    w_{f} \le \sum_{i\in P_{b+1}} w_i.
    $$

    Therefore,

    $$
    \sum_{i\in P_{b}} w_i + \sum_{i\in P_{b+1}} w_i \;>\; c.
    $$

    Now consider the disjoint consecutive pairs $(P_1,P_2),(P_3,P_4),\dots$. Summing the inequality above over the $\lfloor k/2\rfloor$ pairs yields

    $$
    \underbrace{\sum_{b=1}^{k} \ \sum_{i\in P_{b}} w_i}_{\displaystyle =\sum_{i\in\mathscr{I}} w_i ~\le~ z(I)\;c } \;>\; \Big\lfloor \frac{k}{2}\Big\rfloor\, c
    ~~~~ \Longrightarrow ~~~~
    z(I) \;>\; \Big\lfloor \frac{k}{2}\Big\rfloor
    .
    $$

    Since $z(I)\in\mathbb{Z}$, it follows that

    $$
    z(I)\ge \Big\lfloor \frac{k}{2}\Big\rfloor +1.
    $$

    Then

    $$
    \begin{cases}
    \text{if $k$ is even, then } \Big\lfloor \dfrac{k}{2}\Big\rfloor=\dfrac{k}{2}
    \ \Longrightarrow\
    z(I)\ge \dfrac{k}{2}+1
    \ \Longrightarrow\
    k\le 2z(I)-2<2z(I),\\[20pt]
    \text{if $k$ is odd, then } \Big\lfloor \dfrac{k}{2}\Big\rfloor=\dfrac{k-1}{2}
    \ \Longrightarrow\
    z(I)\ge \dfrac{k+1}{2}
    \ \Longrightarrow\
    k\le 2z(I)-1<2z(I).
    \end{cases}
    $$

    Therefore $k<2z(I)$, and dividing by $z(I)\ge 1$ yields

    $$
    \frac{k}{z(I)}=\frac{NF(I)}{z(I)}\le 2.
    $$

    <p class="qed-riga"><span class="qed">□</span></p>

<a id="box-19-prop-NFtight"></a>

!!! teorema "Proposition 24.7"

    There are BPP instances $I_n$ such that:

    \begin{equation*}
    \frac{ NF(I_n) }{z(I_n)} \;\to\; 2 \qquad\text{as}\qquad n\to+\infty . \tag{24.2}
    \end{equation*}

??? dimostrazione "Proof"

    Fix an integer $n \ge 8$ divisible by $4$ and consider the BPP instance $I_n$ with bin capacity $c=n$ and item set $\mathscr{I}=\{1,2,\dots,n\}$, where the item weights are

    $$
    w_i=
    \begin{cases}
    \dfrac{n}{2}, & \text{if $i$ is odd},\\[8pt]
    2, & \text{if $i$ is even}.
    \end{cases}
    $$

    Items are processed by NF in the natural order $1,2,\dots,n$. For every odd $i$,

    $$
    w_i+w_{i+1}=\frac{n}{2}+2<n,
    $$

    so NF packs items $i$ and $i+1$ into the same bin. The remaining space is

    $$
    n-\left(\frac{n}{2}+2\right)=\frac{n}{2}-2<\frac{n}{2},
    $$

    hence the next item of weight $\frac{n}{2}$ does not fit and NF opens a new bin. Therefore,

    $$
    NF(I_n)=\frac{n}{2}.
    $$

    Pack the $\frac{n}{2}$ items of weight $\frac{n}{2}$ two per bin, obtaining $\frac{n}{4}$ full bins, and pack all $\frac{n}{2}$ small items together (since $\frac{n}{2}\;\cdot\;2=n$) in one additional bin; thus $z(I_n)\le \frac{n}{4}+1$. On the other hand,

    $$
    z(I_n) \ge \left\lceil \frac{\sum_{i\in\mathscr{I}} w_i}{c} \right\rceil
    =\left\lceil \frac{\frac{n}{2}\;\frac{n}{2}+\frac{n}{2}\;2}{n} \right\rceil =\left\lceil \frac{n}{4}+1 \right\rceil=\frac{n}{4}+1,
    $$

    Hence

    $$
    z(I_n)=\frac{n}{4}+1.
    $$

    Consequently,

    $$
    \lim_{n\to\infty}\frac{NF(I_n)}{z(I_n)}
    =\lim_{n\to\infty}\frac{\frac{n}{2}}{\frac{n}{4}+1}
    =\lim_{n\to\infty}\frac{\frac{n}{2}}{\frac{n+4}{4}}
    =\lim_{n\to\infty}\frac{2n}{n+4}
    =\lim_{n\to\infty}\frac{2}{1+\frac{4}{n}}
    =2.
    $$

    <p class="qed-riga"><span class="qed">□</span></p>

!!! chiave ""

    From [Proposition 24.6](#box-18-prop-NF2approx) and [Proposition 24.7](#box-19-prop-NFtight) it follows that the worst case performance ratio of NF is two, i.e., we have

    $$
    r(NF)=2
    $$

### 24.5.2 The worst case performance ratio of WF { #sez-sec-WFratio }

<a id="box-20-prop-WFtight"></a>

!!! teorema "Proposition 24.8"

    There are BPP instances $I_n$ such that:

    \begin{equation*}
    \frac{ WF(I_n) }{z(I_n)} \;\to\; 2 \qquad\text{as}\qquad n\to+\infty . \tag{24.3}
    \end{equation*}

??? dimostrazione "Proof"

    Fix an integer $n \ge 8$ divisible by $4$ and consider the BPP instance $I_n$ with bin capacity $c=n$ and item set $\mathscr{I}=\{1,2,\dots,n\}$, where the item weights are

    $$
    w_i=
    \begin{cases}
    \dfrac{n}{2}, & \text{if $i$ is odd},\\[8pt]
    2, & \text{if $i$ is even},
    \end{cases}
    $$

    that is, the same instance used above for NF. Items are processed by WF in the natural order $1,2,\dots,n$.

    We show by induction that, after the first $2k$ items have been processed, WF has opened exactly $k$ bins, each with residual capacity $\frac{n}{2}-2$.

    For $k=1$, item $1$ (of weight $\frac{n}{2}$) is packed into bin $1$, whose residual capacity becomes $\frac{n}{2}$; then item $2$ (of weight $2$) is packed into bin $1$, the only open bin, whose residual capacity becomes $\frac{n}{2}-2$.

    Assume the claim holds for some $k$, and consider items $2k+1$ and $2k+2$. Item $2k+1$ has weight $\frac{n}{2}$, while every open bin has residual capacity $\frac{n}{2}-2<\frac{n}{2}$: the item fits nowhere, so WF opens bin $k+1$, whose residual capacity becomes $\frac{n}{2}$. Item $2k+2$ has weight $2$ and fits into every open bin; since bin $k+1$ is the one with the <em>largest</em> residual capacity, WF packs the item there, and the residual capacity of bin $k+1$ becomes $\frac{n}{2}-2$. This proves the claim for $k+1$.

    It is precisely the Worst Fit rule that keeps every bin at residual capacity $\frac{n}{2}-2$: the small items are always placed in the emptiest bin, so no bin ever receives two items of weight $\frac{n}{2}$. Taking $k=\frac{n}{2}$ we obtain

    $$
    WF(I_n)=\frac{n}{2}.
    $$

    Pack the $\frac{n}{2}$ items of weight $\frac{n}{2}$ two per bin, obtaining $\frac{n}{4}$ full bins, and pack all $\frac{n}{2}$ small items together (since $\frac{n}{2}\;\cdot\;2=n$) in one additional bin; thus $z(I_n)\le \frac{n}{4}+1$. On the other hand,

    $$
    z(I_n) \ge \left\lceil \frac{\sum_{i\in\mathscr{I}} w_i}{c} \right\rceil
    =\left\lceil \frac{\frac{n}{2}\;\frac{n}{2}+\frac{n}{2}\;2}{n} \right\rceil =\left\lceil \frac{n}{4}+1 \right\rceil=\frac{n}{4}+1,
    $$

    hence

    $$
    z(I_n)=\frac{n}{4}+1.
    $$

    Consequently,

    $$
    \lim_{n\to\infty}\frac{WF(I_n)}{z(I_n)}
    =\lim_{n\to\infty}\frac{\frac{n}{2}}{\frac{n}{4}+1}
    =\lim_{n\to\infty}\frac{2n}{n+4}
    =\lim_{n\to\infty}\frac{2}{1+\frac{4}{n}}
    =2.
    $$

    <p class="qed-riga"><span class="qed">□</span></p>

!!! chiave ""

    From [Proposition 24.5](#box-17-prop-halffull2approx) and [Proposition 24.8](#box-20-prop-WFtight) it follows that the worst case performance ratio of WF is two, i.e., we have

    $$
    r(WF)=2
    $$

    For WF the factor $2$ therefore cannot be improved.

- We have $r(WF)=r(NF)=2$: in the worst case WF is no better than NF. The two algorithms are however far from equivalent. WF never opens a new bin while the item still fits into one of the bins opened so far, whereas NF closes a bin as soon as an item does not fit and never reconsiders it. As a consequence NF may leave arbitrarily many bins filled to less than half of their capacity, whereas WF, as shown in the section on the half-full property, can leave at most one.

- The value $r(WF)=2$ is due to

    D.S. Johnson, <em>Fast algorithms for bin packing</em>, Journal of Computer and System Sciences, 8(3):272–314, 1974.

### 24.5.3 The worst case performance ratios of FF and BF

<a id="box-21-propFF"></a>

!!! teorema "Proposition 24.9"

    For every BPP instance $I$, we have:

    \begin{equation*}
    FF(I)\;\le\;\frac{17}{10}\,z(I) ~~~~
    \text{and} ~~~~
    BF(I)\;\le\;\frac{17}{10}\,z(I). \tag{24.4}
    \end{equation*}

??? dimostrazione "Proof"

    Proof omitted. The two bounds were first proved in the weaker form

    $$
    FF(I)\le\frac{17}{10}\,z(I)+2 \qquad\text{and}\qquad BF(I)\le\frac{17}{10}\,z(I)+2
    $$

    in

    D.S. Johnson, A. Demers, J.D. Ullman, M.R. Garey and R.L. Graham, <em>Worst-case performance bounds for simple one-dimensional packing algorithms</em>, SIAM Journal on Computing, 3(4):299–325, 1974.

    The additive constant has later been removed, in the form stated above, respectively in

    G. Dósa and J. Sgall, <em>First Fit bin packing: a tight analysis</em>, STACS 2013, pp. 538–549,

    G. Dósa and J. Sgall, <em>Optimal analysis of Best Fit bin packing</em>, ICALP 2014, pp. 429–441. <span class="qed">□</span>

<a id="box-22-propFFtight"></a>

!!! teorema "Proposition 24.10"

    There are BPP instances $I_n$ such that:

    \begin{equation*}
    \frac{FF(I_n)}{z(I_n)} \;\to\; \frac{17}{10} ~~~~
    \text{and} ~~~~
    \frac{BF(I_n)}{z(I_n)} \;\to\; \frac{17}{10}
    \qquad\text{as}\qquad n\to+\infty . \tag{24.5}
    \end{equation*}

??? dimostrazione "Proof"

    Proof omitted. Families of instances on which the ratio of FF and BF approaches $\frac{17}{10}$ are given in the paper by Johnson, Demers, Ullman, Garey and Graham cited above, and in

    D.S. Johnson, <em>Near-optimal bin packing algorithms</em>, PhD thesis, Massachusetts Institute of Technology, 1973. <span class="qed">□</span>

!!! chiave ""

    From [Proposition 24.9](#box-21-propFF) and [Proposition 24.10](#box-22-propFFtight) it follows that the worst case performance ratio of FF and BF is seventeen tenths, i.e., we have

    $$
    r(FF)=r(BF)=\frac{17}{10}
    $$

    Unlike WF, FF and BF stay strictly below the factor $2$ that the Any Fit condition alone guarantees.

### 24.5.4 What the Any Fit condition does and does not give

- <strong>What the Any Fit condition gives.</strong> The Any Fit condition alone guarantees the half-full property, and therefore the bound

    $$
    \mathscr{A}(I)\le 2\,z(I)
    $$

    for every algorithm $\mathscr{A}$ of the class. This bound cannot be improved for the class as a whole: WF is an Any Fit algorithm and, as shown above, $r(WF)=2$.

- <strong>What the Any Fit condition leaves free.</strong> The rule used to select one of the bins in which the item fits is what distinguishes the members of the family. On the instances of [Proposition 24.10](#box-22-propFFtight) the ratio of FF and BF tends to $\frac{17}{10}$, while on those of [Proposition 24.8](#box-20-prop-WFtight) the ratio of WF tends to $2$: the selection rule alone accounts for the whole gap between $\frac{17}{10}$ and $2$.

- It is known that no algorithm of the class can go below $\frac{17}{10}$, so $\frac{17}{10}$ and $2$ are exactly the best and the worst behaviour that the Any Fit condition allows, and both are attained, the first by FF and BF, the second by WF.

- The Any Fit class and the bounds above are due to the paper of Johnson already cited in Section [24.5.2](#sez-sec-WFratio): in particular, the lower bound $\frac{17}{10}$ for every Any Fit algorithm is due to that paper (D.S. Johnson, 1974).

## 24.6 Typical mistakes

!!! attenzione "Warning"

    - <strong>Believing that Next Fit is an Any Fit algorithm.</strong> NF never reconsiders a closed bin, so it may open a new bin for an item that would fit into an older one ([Example 24.3](#box-5-ex-notAF)).

    - <strong>Choosing the wrong bin in BF and WF.</strong> BF packs the item into the bin with the <em>smallest</em> residual capacity among the bins in which it fits, WF into the one with the <em>largest</em> residual capacity; in case of ties, both take the bin of smallest index.

    - <strong>Reading the half-full property as “no two bins can be merged”.</strong> Two bins of total weight $6$ and $1$ with $c=10$ satisfy the property and can be merged; the property is what proves the guarantee $2$.

    - <strong>Treating $r=2$ as a value that is attained.</strong> The worst-case ratios of NF and WF are suprema: the families of instances approach $2$ as $n$ grows, and no instance reaches it.

    - <strong>Changing the order of the items.</strong> The four algorithms process the items in the order in which they are given; sorting them first is a different algorithm.

## 24.7 In summary

!!! chiave "In summary"

    - NF, FF, BF and WF place each item as it arrives; NF keeps one open bin, the other three keep all the bins opened so far and open a new bin only when the item fits nowhere (Any Fit class).

    - In an Any Fit solution the items of two bins never fit together, so all the bins but at most one are more than half full (half-full property), and $\mathscr{A}(I)\le 2\,z(I)$.

    - $r(NF)=r(WF)=2$ and $r(FF)=r(BF)=\frac{17}{10}$: the selection rule alone separates the best and the worst behaviour of the Any Fit class.

    <strong>Dashboard of the BPP instance</strong> $c=10$, $w=(6,5,4,7,3)$. The bounds on $z(I)$ found so far:

    <div class="tabella" markdown="0"><table>
    <tr>
    <th>Source</th>
    <th>Lower bound</th>
    <th>Upper bound</th>
    <th>From</th>
    </tr>
    <tr>
    <td>Counting bound</td>
    <td><span class="arithmatex">\(3\)</span></td>
    <td>–</td>
    <td><span class="arithmatex">\(\left\lceil \frac{25}{10} \right\rceil\)</span></td>
    </tr>
    <tr>
    <td>This chapter, NF</td>
    <td>–</td>
    <td><span class="arithmatex">\(3\)</span></td>
    <td><span class="arithmatex">\(bin=(1,2,2,3,3)\)</span></td>
    </tr>
    <tr>
    <td>This chapter, FF, BF, WF</td>
    <td>–</td>
    <td><span class="arithmatex">\(3\)</span></td>
    <td><span class="arithmatex">\(3\)</span> bins each, with three different assignments</td>
    </tr>
    <tr>
    <td>Optimal value</td>
    <td><span class="arithmatex">\(3\)</span></td>
    <td><span class="arithmatex">\(3\)</span></td>
    <td>lower and upper bound coincide</td>
    </tr>
    </table></div>

## 24.8 <code>C++</code> implementation

- In this C++ implementation section we use 0-based indexing (items and bins are numbered starting from 0). The algorithmic logic is unchanged.

- The step-by-step executions reported in this section all refer to the same BPP instance, namely a bin of capacity $c = 10$ and a set $\mathscr{I} = \{1,2,3,4,5\}$ of $5$ items ($n = 5$), with the following item weights:

    $$
    \begin{array}{l|ccccc}
    \hline  & {i=1} & {i=2} & {i=3} & {i=4} & {i=5} \\[1ex]
    \hline {w_i} & {6} & {5} & {4} & {7} & {3} \\[1ex]
    \hline
    \end{array}
    $$

    With the 0-based indexing of this section the items are numbered $0,1,2,3,4$ and their weights are $w[0]=6$, $w[1]=5$, $w[2]=4$, $w[3]=7$ and $w[4]=3$. This is the instance used in the examples of the previous sections, so the solutions found here are the ones already computed there.

- This is a <code>C++</code> implementation of <strong>Next Fit</strong>:

??? codice "NextFit.cpp"

    ```cpp
    // items are processed in the input order
    // the function returns the number of bins used
    // bin[i] stores the bin assigned to item i
    // it is assumed that n >= 1

    int NextFit(int n, int c, int *w, int *bin)
    {
        int nb = 1;   // current bin (number of open bins)
        int rc  = c;   // residual capacity of the current bin

        for (int i = 0; i < n; i++)
        {
            // if item i does not fit into the current bin, open a new bin
            if (w[i] > rc)
            {
                nb++;  // move to the next bin
                rc = c; // reset the residual capacity
            }

            bin[i] = nb - 1; // pack item i into the current bin
            rc -= w[i];       // update the residual capacity
        }

        return nb;
    }
    ```

This is the step-by-step execution of the C++ implementation of NF for this instance.

Initialization

$$
\begin{array}{c|c|c|c|c|c|}
{bin[i]} & {i=0} & {i=1} & {i=2} & {i=3} & {i=4} \\
& - & - & - & - & -
\end{array}
$$

$nb=1 \qquad rc=10$

1. Iteration 1 – Item $0$ is packed into bin $0$

    $$
    \begin{array}{c|c|c|c|c|c|}
    {bin[i]} & {i=0} & {i=1} & {i=2} & {i=3} & {i=4} \\
    & \bbox[#9999ff]{0} & - & - & - & -
    \end{array}
    $$

    $nb=1 \qquad rc=4$

2. Iteration 2 – Item $1$ is packed into bin $1$

    $$
    \begin{array}{c|c|c|c|c|c|}
    {bin[i]} & {i=0} & {i=1} & {i=2} & {i=3} & {i=4} \\
    & 0 & \bbox[#9999ff]{1} & - & - & -
    \end{array}
    $$

    $nb=2 \qquad rc=5$

3. Iteration 3 – Item $2$ is packed into bin $1$

    $$
    \begin{array}{c|c|c|c|c|c|}
    {bin[i]} & {i=0} & {i=1} & {i=2} & {i=3} & {i=4} \\
    & 0 & 1 & \bbox[#9999ff]{1} & - & -
    \end{array}
    $$

    $nb=2 \qquad rc=1$

4. Iteration 4 – Item $3$ is packed into bin $2$

    $$
    \begin{array}{c|c|c|c|c|c|}
    {bin[i]} & {i=0} & {i=1} & {i=2} & {i=3} & {i=4} \\
    & 0 & 1 & 1 & \bbox[#9999ff]{2} & -
    \end{array}
    $$

    $nb=3 \qquad rc=3$

5. Iteration 5 – Item $4$ is packed into bin $2$

    $$
    \begin{array}{c|c|c|c|c|c|}
    {bin[i]} & {i=0} & {i=1} & {i=2} & {i=3} & {i=4} \\
    & 0 & 1 & 1 & 2 & \bbox[#9999ff]{2}
    \end{array}
    $$

    $nb=3 \qquad rc=0$

- This is a <code>C++</code> implementation of  <strong>First Fit</strong>:

??? codice "FirstFit.cpp"

    ```cpp
    // items are processed in the input order
    // the function returns the number of bins used
    // bin[i] stores the bin assigned to item i
    // it is assumed that n >= 1

    int FirstFit(int n, int c, int *w, int *bin)
    {
        int nb = 1;          // number of currently open bins
        int *rc = new int[n]; // residual capacities of bins (at most n bins)
        rc[0] = c;            // residual capacity of the first bin

        for (int i = 0; i < n; i++)
        {
            int s = -1;      // selected bin for item i (-1 means: not found yet)

            // scan bins in the order they were opened and pick the first that fits
            for (int b = 0; b < nb; b++)
            {
                if (w[i] <= rc[b])
                {
                    s = b;  // selected bin
                    break;
                }
            }

            // if no open bin can accommodate item i, open a new bin
            if (s == -1)
            {
                rc[nb] = c;   // initialize residual capacity of the new bin
                s = nb;     // select the new bin
                nb++;        // increase the number of open bins
            }

            bin[i] = s;     // pack item i into the selected bin
            rc[s] -= w[i];   // update the residual capacity
        }

        delete[] rc;
        return nb;
    }
    ```

This is the step-by-step execution of the C++ implementation of FF for this instance.

Initialization

<div class="tabella" markdown="0"><table>
<tr>
<td colspan="1">bin<span class="arithmatex">\([i]\)</span></td>
<td colspan="1"><span class="arithmatex">\(i=0\)</span></td>
<td colspan="1"><span class="arithmatex">\(i=1\)</span></td>
<td colspan="1"><span class="arithmatex">\(i=2\)</span></td>
<td colspan="1"><span class="arithmatex">\(i=3\)</span></td>
<td colspan="1"><span class="arithmatex">\(i=4\)</span></td>
</tr>
<tr>
<td></td>
<td>\-</td>
<td>\-</td>
<td>\-</td>
<td>\-</td>
<td>\-</td>
</tr>
</table></div>

<div class="tabella" markdown="0"><table>
<tr>
<td colspan="1">rc<span class="arithmatex">\([b]\)</span></td>
<td colspan="1"><span class="arithmatex">\(b=0\)</span></td>
<td colspan="1"><span class="arithmatex">\(b=1\)</span></td>
<td colspan="1"><span class="arithmatex">\(b=2\)</span></td>
<td colspan="1"><span class="arithmatex">\(b=3\)</span></td>
<td colspan="1"><span class="arithmatex">\(b=4\)</span></td>
</tr>
<tr>
<td></td>
<td class="cella-rossa">10</td>
<td>\-</td>
<td>\-</td>
<td>\-</td>
<td>\-</td>
</tr>
</table></div>

$$
nb=1
$$

1. Iteration 1 – Item $0$ is packed into bin $0$

    <div class="tabella" markdown="0"><table>
    <tr>
    <td colspan="1">bin<span class="arithmatex">\([i]\)</span></td>
    <td colspan="1"><span class="arithmatex">\(i=0\)</span></td>
    <td colspan="1"><span class="arithmatex">\(i=1\)</span></td>
    <td colspan="1"><span class="arithmatex">\(i=2\)</span></td>
    <td colspan="1"><span class="arithmatex">\(i=3\)</span></td>
    <td colspan="1"><span class="arithmatex">\(i=4\)</span></td>
    </tr>
    <tr>
    <td></td>
    <td class="cella-blu">0</td>
    <td>\-</td>
    <td>\-</td>
    <td>\-</td>
    <td>\-</td>
    </tr>
    </table></div>

    <div class="tabella" markdown="0"><table>
    <tr>
    <td colspan="1">rc<span class="arithmatex">\([b]\)</span></td>
    <td colspan="1"><span class="arithmatex">\(b=0\)</span></td>
    <td colspan="1"><span class="arithmatex">\(b=1\)</span></td>
    <td colspan="1"><span class="arithmatex">\(b=2\)</span></td>
    <td colspan="1"><span class="arithmatex">\(b=3\)</span></td>
    <td colspan="1"><span class="arithmatex">\(b=4\)</span></td>
    </tr>
    <tr>
    <td></td>
    <td class="cella-rossa">4</td>
    <td>\-</td>
    <td>\-</td>
    <td>\-</td>
    <td>\-</td>
    </tr>
    </table></div>

    $$
    nb=1
    $$

2. Iteration 2 – Item $1$ is packed into bin $1$

    <div class="tabella" markdown="0"><table>
    <tr>
    <td colspan="1">bin<span class="arithmatex">\([i]\)</span></td>
    <td colspan="1"><span class="arithmatex">\(i=0\)</span></td>
    <td colspan="1"><span class="arithmatex">\(i=1\)</span></td>
    <td colspan="1"><span class="arithmatex">\(i=2\)</span></td>
    <td colspan="1"><span class="arithmatex">\(i=3\)</span></td>
    <td colspan="1"><span class="arithmatex">\(i=4\)</span></td>
    </tr>
    <tr>
    <td></td>
    <td>0</td>
    <td class="cella-blu">1</td>
    <td>\-</td>
    <td>\-</td>
    <td>\-</td>
    </tr>
    </table></div>

    <div class="tabella" markdown="0"><table>
    <tr>
    <td colspan="1">rc<span class="arithmatex">\([b]\)</span></td>
    <td colspan="1"><span class="arithmatex">\(b=0\)</span></td>
    <td colspan="1"><span class="arithmatex">\(b=1\)</span></td>
    <td colspan="1"><span class="arithmatex">\(b=2\)</span></td>
    <td colspan="1"><span class="arithmatex">\(b=3\)</span></td>
    <td colspan="1"><span class="arithmatex">\(b=4\)</span></td>
    </tr>
    <tr>
    <td></td>
    <td>4</td>
    <td class="cella-rossa">5</td>
    <td>\-</td>
    <td>\-</td>
    <td>\-</td>
    </tr>
    </table></div>

    $$
    nb=2
    $$

3. Iteration 3 – Item $2$ is packed into bin $0$

    <div class="tabella" markdown="0"><table>
    <tr>
    <td colspan="1">bin<span class="arithmatex">\([i]\)</span></td>
    <td colspan="1"><span class="arithmatex">\(i=0\)</span></td>
    <td colspan="1"><span class="arithmatex">\(i=1\)</span></td>
    <td colspan="1"><span class="arithmatex">\(i=2\)</span></td>
    <td colspan="1"><span class="arithmatex">\(i=3\)</span></td>
    <td colspan="1"><span class="arithmatex">\(i=4\)</span></td>
    </tr>
    <tr>
    <td></td>
    <td>0</td>
    <td>1</td>
    <td class="cella-blu">0</td>
    <td>\-</td>
    <td>\-</td>
    </tr>
    </table></div>

    <div class="tabella" markdown="0"><table>
    <tr>
    <td colspan="1">rc<span class="arithmatex">\([b]\)</span></td>
    <td colspan="1"><span class="arithmatex">\(b=0\)</span></td>
    <td colspan="1"><span class="arithmatex">\(b=1\)</span></td>
    <td colspan="1"><span class="arithmatex">\(b=2\)</span></td>
    <td colspan="1"><span class="arithmatex">\(b=3\)</span></td>
    <td colspan="1"><span class="arithmatex">\(b=4\)</span></td>
    </tr>
    <tr>
    <td></td>
    <td class="cella-rossa">0</td>
    <td>5</td>
    <td>\-</td>
    <td>\-</td>
    <td>\-</td>
    </tr>
    </table></div>

    $$
    nb=2
    $$

4. Iteration 4 – Item $3$ is packed into bin $2$

    <div class="tabella" markdown="0"><table>
    <tr>
    <td colspan="1">bin<span class="arithmatex">\([i]\)</span></td>
    <td colspan="1"><span class="arithmatex">\(i=0\)</span></td>
    <td colspan="1"><span class="arithmatex">\(i=1\)</span></td>
    <td colspan="1"><span class="arithmatex">\(i=2\)</span></td>
    <td colspan="1"><span class="arithmatex">\(i=3\)</span></td>
    <td colspan="1"><span class="arithmatex">\(i=4\)</span></td>
    </tr>
    <tr>
    <td></td>
    <td>0</td>
    <td>1</td>
    <td>0</td>
    <td class="cella-blu">2</td>
    <td>\-</td>
    </tr>
    </table></div>

    <div class="tabella" markdown="0"><table>
    <tr>
    <td colspan="1">rc<span class="arithmatex">\([b]\)</span></td>
    <td colspan="1"><span class="arithmatex">\(b=0\)</span></td>
    <td colspan="1"><span class="arithmatex">\(b=1\)</span></td>
    <td colspan="1"><span class="arithmatex">\(b=2\)</span></td>
    <td colspan="1"><span class="arithmatex">\(b=3\)</span></td>
    <td colspan="1"><span class="arithmatex">\(b=4\)</span></td>
    </tr>
    <tr>
    <td></td>
    <td>0</td>
    <td>5</td>
    <td class="cella-rossa">3</td>
    <td>\-</td>
    <td>\-</td>
    </tr>
    </table></div>

    $$
    nb=3
    $$

5. Iteration 5 – Item $4$ is packed into  bin $1$

    <div class="tabella" markdown="0"><table>
    <tr>
    <td colspan="1">bin<span class="arithmatex">\([i]\)</span></td>
    <td colspan="1"><span class="arithmatex">\(i=0\)</span></td>
    <td colspan="1"><span class="arithmatex">\(i=1\)</span></td>
    <td colspan="1"><span class="arithmatex">\(i=2\)</span></td>
    <td colspan="1"><span class="arithmatex">\(i=3\)</span></td>
    <td colspan="1"><span class="arithmatex">\(i=4\)</span></td>
    </tr>
    <tr>
    <td></td>
    <td>0</td>
    <td>1</td>
    <td>0</td>
    <td>2</td>
    <td class="cella-blu">1</td>
    </tr>
    </table></div>

    <div class="tabella" markdown="0"><table>
    <tr>
    <td colspan="1">rc<span class="arithmatex">\([b]\)</span></td>
    <td colspan="1"><span class="arithmatex">\(b=0\)</span></td>
    <td colspan="1"><span class="arithmatex">\(b=1\)</span></td>
    <td colspan="1"><span class="arithmatex">\(b=2\)</span></td>
    <td colspan="1"><span class="arithmatex">\(b=3\)</span></td>
    <td colspan="1"><span class="arithmatex">\(b=4\)</span></td>
    </tr>
    <tr>
    <td></td>
    <td>0</td>
    <td class="cella-rossa">2</td>
    <td>3</td>
    <td>\-</td>
    <td>\-</td>
    </tr>
    </table></div>

    $$
    nb=3
    $$

- This is a <code>C++</code> implementation of  <strong>Best Fit</strong>:

??? codice "BestFit.cpp"

    ```cpp
    // items are processed in the input order
    // the function returns the number of bins used
    // bin[i] stores the bin assigned to item i
    // it is assumed that n >= 1

    int BestFit(int n, int c, int *w, int *bin)
    {
        int nb = 1;          // number of currently open bins
        int *rc = new int[n]; // residual capacities of bins (at most n bins)
        rc[0] = c;            // residual capacity of the first bin

        for (int i = 0; i < n; i++)
        {
            int s = -1;      // selected bin for item i (-1 means: not found yet)
            int minrc = c + 1; // smallest residual capacity found so far

            // among the bins where item i fits, pick the one with the smallest residual capacity
            for (int b = 0; b < nb; b++)
            {
                if (w[i] <= rc[b] && rc[b] < minrc)
                {
                    minrc = rc[b];
                    s = b;  // selected bin
                }
            }

            // if no open bin can accommodate item i, open a new bin
            if (s == -1)
            {
                rc[nb] = c;   // initialize residual capacity of the new bin
                s = nb;     // select the new bin
                nb++;        // increase the number of open bins
            }

            bin[i] = s;     // pack item i into the selected bin
            rc[s] -= w[i];   // update the residual capacity
        }

        delete[] rc;
        return nb;
    }
    ```

This is the step-by-step execution of the C++ implementation of BF for this instance.

Initialization

<div class="tabella" markdown="0"><table>
<tr>
<td colspan="1">bin<span class="arithmatex">\([i]\)</span></td>
<td colspan="1"><span class="arithmatex">\(i=0\)</span></td>
<td colspan="1"><span class="arithmatex">\(i=1\)</span></td>
<td colspan="1"><span class="arithmatex">\(i=2\)</span></td>
<td colspan="1"><span class="arithmatex">\(i=3\)</span></td>
<td colspan="1"><span class="arithmatex">\(i=4\)</span></td>
</tr>
<tr>
<td></td>
<td>\-</td>
<td>\-</td>
<td>\-</td>
<td>\-</td>
<td>\-</td>
</tr>
</table></div>

<div class="tabella" markdown="0"><table>
<tr>
<td colspan="1">rc<span class="arithmatex">\([b]\)</span></td>
<td colspan="1"><span class="arithmatex">\(b=0\)</span></td>
<td colspan="1"><span class="arithmatex">\(b=1\)</span></td>
<td colspan="1"><span class="arithmatex">\(b=2\)</span></td>
<td colspan="1"><span class="arithmatex">\(b=3\)</span></td>
<td colspan="1"><span class="arithmatex">\(b=4\)</span></td>
</tr>
<tr>
<td></td>
<td class="cella-rossa">10</td>
<td>\-</td>
<td>\-</td>
<td>\-</td>
<td>\-</td>
</tr>
</table></div>

$$
nb=1
$$

1. Iteration 1 – Item $0$ is packed into bin $0$

    <div class="tabella" markdown="0"><table>
    <tr>
    <td colspan="1">bin<span class="arithmatex">\([i]\)</span></td>
    <td colspan="1"><span class="arithmatex">\(i=0\)</span></td>
    <td colspan="1"><span class="arithmatex">\(i=1\)</span></td>
    <td colspan="1"><span class="arithmatex">\(i=2\)</span></td>
    <td colspan="1"><span class="arithmatex">\(i=3\)</span></td>
    <td colspan="1"><span class="arithmatex">\(i=4\)</span></td>
    </tr>
    <tr>
    <td></td>
    <td class="cella-blu">0</td>
    <td>\-</td>
    <td>\-</td>
    <td>\-</td>
    <td>\-</td>
    </tr>
    </table></div>

    <div class="tabella" markdown="0"><table>
    <tr>
    <td colspan="1">rc<span class="arithmatex">\([b]\)</span></td>
    <td colspan="1"><span class="arithmatex">\(b=0\)</span></td>
    <td colspan="1"><span class="arithmatex">\(b=1\)</span></td>
    <td colspan="1"><span class="arithmatex">\(b=2\)</span></td>
    <td colspan="1"><span class="arithmatex">\(b=3\)</span></td>
    <td colspan="1"><span class="arithmatex">\(b=4\)</span></td>
    </tr>
    <tr>
    <td></td>
    <td class="cella-rossa">4</td>
    <td>\-</td>
    <td>\-</td>
    <td>\-</td>
    <td>\-</td>
    </tr>
    </table></div>

    $$
    nb=1
    $$

2. Iteration 2 – Item $1$ is packed into bin $1$

    <div class="tabella" markdown="0"><table>
    <tr>
    <td colspan="1">bin<span class="arithmatex">\([i]\)</span></td>
    <td colspan="1"><span class="arithmatex">\(i=0\)</span></td>
    <td colspan="1"><span class="arithmatex">\(i=1\)</span></td>
    <td colspan="1"><span class="arithmatex">\(i=2\)</span></td>
    <td colspan="1"><span class="arithmatex">\(i=3\)</span></td>
    <td colspan="1"><span class="arithmatex">\(i=4\)</span></td>
    </tr>
    <tr>
    <td></td>
    <td>0</td>
    <td class="cella-blu">1</td>
    <td>\-</td>
    <td>\-</td>
    <td>\-</td>
    </tr>
    </table></div>

    <div class="tabella" markdown="0"><table>
    <tr>
    <td colspan="1">rc<span class="arithmatex">\([b]\)</span></td>
    <td colspan="1"><span class="arithmatex">\(b=0\)</span></td>
    <td colspan="1"><span class="arithmatex">\(b=1\)</span></td>
    <td colspan="1"><span class="arithmatex">\(b=2\)</span></td>
    <td colspan="1"><span class="arithmatex">\(b=3\)</span></td>
    <td colspan="1"><span class="arithmatex">\(b=4\)</span></td>
    </tr>
    <tr>
    <td></td>
    <td>4</td>
    <td class="cella-rossa">5</td>
    <td>\-</td>
    <td>\-</td>
    <td>\-</td>
    </tr>
    </table></div>

    $$
    nb=2
    $$

3. Iteration 3 – Item $2$ is packed into  bin $0$

    <div class="tabella" markdown="0"><table>
    <tr>
    <td colspan="1">bin<span class="arithmatex">\([i]\)</span></td>
    <td colspan="1"><span class="arithmatex">\(i=0\)</span></td>
    <td colspan="1"><span class="arithmatex">\(i=1\)</span></td>
    <td colspan="1"><span class="arithmatex">\(i=2\)</span></td>
    <td colspan="1"><span class="arithmatex">\(i=3\)</span></td>
    <td colspan="1"><span class="arithmatex">\(i=4\)</span></td>
    </tr>
    <tr>
    <td></td>
    <td>0</td>
    <td>1</td>
    <td class="cella-blu">0</td>
    <td>\-</td>
    <td>\-</td>
    </tr>
    </table></div>

    <div class="tabella" markdown="0"><table>
    <tr>
    <td colspan="1">rc<span class="arithmatex">\([b]\)</span></td>
    <td colspan="1"><span class="arithmatex">\(b=0\)</span></td>
    <td colspan="1"><span class="arithmatex">\(b=1\)</span></td>
    <td colspan="1"><span class="arithmatex">\(b=2\)</span></td>
    <td colspan="1"><span class="arithmatex">\(b=3\)</span></td>
    <td colspan="1"><span class="arithmatex">\(b=4\)</span></td>
    </tr>
    <tr>
    <td></td>
    <td class="cella-rossa">0</td>
    <td>5</td>
    <td>\-</td>
    <td>\-</td>
    <td>\-</td>
    </tr>
    </table></div>

    $$
    nb=2
    $$

4. Iteration 4 – Item $3$ is packed into bin $2$

    <div class="tabella" markdown="0"><table>
    <tr>
    <td colspan="1">bin<span class="arithmatex">\([i]\)</span></td>
    <td colspan="1"><span class="arithmatex">\(i=0\)</span></td>
    <td colspan="1"><span class="arithmatex">\(i=1\)</span></td>
    <td colspan="1"><span class="arithmatex">\(i=2\)</span></td>
    <td colspan="1"><span class="arithmatex">\(i=3\)</span></td>
    <td colspan="1"><span class="arithmatex">\(i=4\)</span></td>
    </tr>
    <tr>
    <td></td>
    <td>0</td>
    <td>1</td>
    <td>0</td>
    <td class="cella-blu">2</td>
    <td>\-</td>
    </tr>
    </table></div>

    <div class="tabella" markdown="0"><table>
    <tr>
    <td colspan="1">rc<span class="arithmatex">\([b]\)</span></td>
    <td colspan="1"><span class="arithmatex">\(b=0\)</span></td>
    <td colspan="1"><span class="arithmatex">\(b=1\)</span></td>
    <td colspan="1"><span class="arithmatex">\(b=2\)</span></td>
    <td colspan="1"><span class="arithmatex">\(b=3\)</span></td>
    <td colspan="1"><span class="arithmatex">\(b=4\)</span></td>
    </tr>
    <tr>
    <td></td>
    <td>0</td>
    <td>5</td>
    <td class="cella-rossa">3</td>
    <td>\-</td>
    <td>\-</td>
    </tr>
    </table></div>

    $$
    nb=3
    $$

5. Iteration 5 – Item $4$ is packed into  bin $2$

    <div class="tabella" markdown="0"><table>
    <tr>
    <td colspan="1">bin<span class="arithmatex">\([i]\)</span></td>
    <td colspan="1"><span class="arithmatex">\(i=0\)</span></td>
    <td colspan="1"><span class="arithmatex">\(i=1\)</span></td>
    <td colspan="1"><span class="arithmatex">\(i=2\)</span></td>
    <td colspan="1"><span class="arithmatex">\(i=3\)</span></td>
    <td colspan="1"><span class="arithmatex">\(i=4\)</span></td>
    </tr>
    <tr>
    <td></td>
    <td>0</td>
    <td>1</td>
    <td>0</td>
    <td>2</td>
    <td class="cella-blu">2</td>
    </tr>
    </table></div>

    <div class="tabella" markdown="0"><table>
    <tr>
    <td colspan="1">rc<span class="arithmatex">\([b]\)</span></td>
    <td colspan="1"><span class="arithmatex">\(b=0\)</span></td>
    <td colspan="1"><span class="arithmatex">\(b=1\)</span></td>
    <td colspan="1"><span class="arithmatex">\(b=2\)</span></td>
    <td colspan="1"><span class="arithmatex">\(b=3\)</span></td>
    <td colspan="1"><span class="arithmatex">\(b=4\)</span></td>
    </tr>
    <tr>
    <td></td>
    <td>0</td>
    <td>5</td>
    <td class="cella-rossa">0</td>
    <td>\-</td>
    <td>\-</td>
    </tr>
    </table></div>

    $$
    nb=3
    $$

- This is a <code>C++</code> implementation of  <strong>Worst Fit</strong>:

??? codice "WorstFit.cpp"

    ```cpp
    // items are processed in the input order
    // the function returns the number of bins used
    // bin[i] stores the bin assigned to item i
    // it is assumed that n >= 1

    int WorstFit(int n, int c, int *w, int *bin)
    {
        int nb = 1;          // number of currently open bins
        int *rc = new int[n]; // residual capacities of bins (at most n bins)
        rc[0] = c;            // residual capacity of the first bin

        for (int i = 0; i < n; i++)
        {
            int s = -1;      // selected bin for item i (-1 means: not found yet)
            int maxrc = -1;   // largest residual capacity found so far

            // among the bins where item i fits, pick the one with the largest residual capacity
            for (int b = 0; b < nb; b++)
            {
                if (w[i] <= rc[b] && rc[b] > maxrc)
                {
                    maxrc = rc[b];
                    s = b;  // selected bin
                }
            }

            // if no open bin can accommodate item i, open a new bin
            if (s == -1)
            {
                rc[nb] = c;   // initialize residual capacity of the new bin
                s = nb;     // select the new bin
                nb++;        // increase the number of open bins
            }

            bin[i] = s;     // pack item i into the selected bin
            rc[s] -= w[i];   // update the residual capacity
        }

        delete[] rc;
        return nb;
    }
    ```

This is the step-by-step execution of the C++ implementation of WF for this instance.

Initialization

<div class="tabella" markdown="0"><table>
<tr>
<td colspan="1">bin<span class="arithmatex">\([i]\)</span></td>
<td colspan="1"><span class="arithmatex">\(i=0\)</span></td>
<td colspan="1"><span class="arithmatex">\(i=1\)</span></td>
<td colspan="1"><span class="arithmatex">\(i=2\)</span></td>
<td colspan="1"><span class="arithmatex">\(i=3\)</span></td>
<td colspan="1"><span class="arithmatex">\(i=4\)</span></td>
</tr>
<tr>
<td></td>
<td>\-</td>
<td>\-</td>
<td>\-</td>
<td>\-</td>
<td>\-</td>
</tr>
</table></div>

<div class="tabella" markdown="0"><table>
<tr>
<td colspan="1">rc<span class="arithmatex">\([b]\)</span></td>
<td colspan="1"><span class="arithmatex">\(b=0\)</span></td>
<td colspan="1"><span class="arithmatex">\(b=1\)</span></td>
<td colspan="1"><span class="arithmatex">\(b=2\)</span></td>
<td colspan="1"><span class="arithmatex">\(b=3\)</span></td>
<td colspan="1"><span class="arithmatex">\(b=4\)</span></td>
</tr>
<tr>
<td></td>
<td class="cella-rossa">10</td>
<td>\-</td>
<td>\-</td>
<td>\-</td>
<td>\-</td>
</tr>
</table></div>

$$
nb=1
$$

1. Iteration 1 – Item $0$ is packed into bin $0$

    <div class="tabella" markdown="0"><table>
    <tr>
    <td colspan="1">bin<span class="arithmatex">\([i]\)</span></td>
    <td colspan="1"><span class="arithmatex">\(i=0\)</span></td>
    <td colspan="1"><span class="arithmatex">\(i=1\)</span></td>
    <td colspan="1"><span class="arithmatex">\(i=2\)</span></td>
    <td colspan="1"><span class="arithmatex">\(i=3\)</span></td>
    <td colspan="1"><span class="arithmatex">\(i=4\)</span></td>
    </tr>
    <tr>
    <td></td>
    <td class="cella-blu">0</td>
    <td>\-</td>
    <td>\-</td>
    <td>\-</td>
    <td>\-</td>
    </tr>
    </table></div>

    <div class="tabella" markdown="0"><table>
    <tr>
    <td colspan="1">rc<span class="arithmatex">\([b]\)</span></td>
    <td colspan="1"><span class="arithmatex">\(b=0\)</span></td>
    <td colspan="1"><span class="arithmatex">\(b=1\)</span></td>
    <td colspan="1"><span class="arithmatex">\(b=2\)</span></td>
    <td colspan="1"><span class="arithmatex">\(b=3\)</span></td>
    <td colspan="1"><span class="arithmatex">\(b=4\)</span></td>
    </tr>
    <tr>
    <td></td>
    <td class="cella-rossa">4</td>
    <td>\-</td>
    <td>\-</td>
    <td>\-</td>
    <td>\-</td>
    </tr>
    </table></div>

    $$
    nb=1
    $$

2. Iteration 2 – Item $1$ is packed into bin $1$

    <div class="tabella" markdown="0"><table>
    <tr>
    <td colspan="1">bin<span class="arithmatex">\([i]\)</span></td>
    <td colspan="1"><span class="arithmatex">\(i=0\)</span></td>
    <td colspan="1"><span class="arithmatex">\(i=1\)</span></td>
    <td colspan="1"><span class="arithmatex">\(i=2\)</span></td>
    <td colspan="1"><span class="arithmatex">\(i=3\)</span></td>
    <td colspan="1"><span class="arithmatex">\(i=4\)</span></td>
    </tr>
    <tr>
    <td></td>
    <td>0</td>
    <td class="cella-blu">1</td>
    <td>\-</td>
    <td>\-</td>
    <td>\-</td>
    </tr>
    </table></div>

    <div class="tabella" markdown="0"><table>
    <tr>
    <td colspan="1">rc<span class="arithmatex">\([b]\)</span></td>
    <td colspan="1"><span class="arithmatex">\(b=0\)</span></td>
    <td colspan="1"><span class="arithmatex">\(b=1\)</span></td>
    <td colspan="1"><span class="arithmatex">\(b=2\)</span></td>
    <td colspan="1"><span class="arithmatex">\(b=3\)</span></td>
    <td colspan="1"><span class="arithmatex">\(b=4\)</span></td>
    </tr>
    <tr>
    <td></td>
    <td>4</td>
    <td class="cella-rossa">5</td>
    <td>\-</td>
    <td>\-</td>
    <td>\-</td>
    </tr>
    </table></div>

    $$
    nb=2
    $$

3. Iteration 3 – Item $2$ is packed into bin $1$

    <div class="tabella" markdown="0"><table>
    <tr>
    <td colspan="1">bin<span class="arithmatex">\([i]\)</span></td>
    <td colspan="1"><span class="arithmatex">\(i=0\)</span></td>
    <td colspan="1"><span class="arithmatex">\(i=1\)</span></td>
    <td colspan="1"><span class="arithmatex">\(i=2\)</span></td>
    <td colspan="1"><span class="arithmatex">\(i=3\)</span></td>
    <td colspan="1"><span class="arithmatex">\(i=4\)</span></td>
    </tr>
    <tr>
    <td></td>
    <td>0</td>
    <td>1</td>
    <td class="cella-blu">1</td>
    <td>\-</td>
    <td>\-</td>
    </tr>
    </table></div>

    <div class="tabella" markdown="0"><table>
    <tr>
    <td colspan="1">rc<span class="arithmatex">\([b]\)</span></td>
    <td colspan="1"><span class="arithmatex">\(b=0\)</span></td>
    <td colspan="1"><span class="arithmatex">\(b=1\)</span></td>
    <td colspan="1"><span class="arithmatex">\(b=2\)</span></td>
    <td colspan="1"><span class="arithmatex">\(b=3\)</span></td>
    <td colspan="1"><span class="arithmatex">\(b=4\)</span></td>
    </tr>
    <tr>
    <td></td>
    <td>4</td>
    <td class="cella-rossa">1</td>
    <td>\-</td>
    <td>\-</td>
    <td>\-</td>
    </tr>
    </table></div>

    $$
    nb=2
    $$

4. Iteration 4 – Item $3$ is packed into bin $2$

    <div class="tabella" markdown="0"><table>
    <tr>
    <td colspan="1">bin<span class="arithmatex">\([i]\)</span></td>
    <td colspan="1"><span class="arithmatex">\(i=0\)</span></td>
    <td colspan="1"><span class="arithmatex">\(i=1\)</span></td>
    <td colspan="1"><span class="arithmatex">\(i=2\)</span></td>
    <td colspan="1"><span class="arithmatex">\(i=3\)</span></td>
    <td colspan="1"><span class="arithmatex">\(i=4\)</span></td>
    </tr>
    <tr>
    <td></td>
    <td>0</td>
    <td>1</td>
    <td>1</td>
    <td class="cella-blu">2</td>
    <td>\-</td>
    </tr>
    </table></div>

    <div class="tabella" markdown="0"><table>
    <tr>
    <td colspan="1">rc<span class="arithmatex">\([b]\)</span></td>
    <td colspan="1"><span class="arithmatex">\(b=0\)</span></td>
    <td colspan="1"><span class="arithmatex">\(b=1\)</span></td>
    <td colspan="1"><span class="arithmatex">\(b=2\)</span></td>
    <td colspan="1"><span class="arithmatex">\(b=3\)</span></td>
    <td colspan="1"><span class="arithmatex">\(b=4\)</span></td>
    </tr>
    <tr>
    <td></td>
    <td>4</td>
    <td>1</td>
    <td class="cella-rossa">3</td>
    <td>\-</td>
    <td>\-</td>
    </tr>
    </table></div>

    $$
    nb=3
    $$

5. Iteration 5 – Item $4$ is packed into bin $0$

    <div class="tabella" markdown="0"><table>
    <tr>
    <td colspan="1">bin<span class="arithmatex">\([i]\)</span></td>
    <td colspan="1"><span class="arithmatex">\(i=0\)</span></td>
    <td colspan="1"><span class="arithmatex">\(i=1\)</span></td>
    <td colspan="1"><span class="arithmatex">\(i=2\)</span></td>
    <td colspan="1"><span class="arithmatex">\(i=3\)</span></td>
    <td colspan="1"><span class="arithmatex">\(i=4\)</span></td>
    </tr>
    <tr>
    <td></td>
    <td>0</td>
    <td>1</td>
    <td>1</td>
    <td>2</td>
    <td class="cella-blu">0</td>
    </tr>
    </table></div>

    <div class="tabella" markdown="0"><table>
    <tr>
    <td colspan="1">rc<span class="arithmatex">\([b]\)</span></td>
    <td colspan="1"><span class="arithmatex">\(b=0\)</span></td>
    <td colspan="1"><span class="arithmatex">\(b=1\)</span></td>
    <td colspan="1"><span class="arithmatex">\(b=2\)</span></td>
    <td colspan="1"><span class="arithmatex">\(b=3\)</span></td>
    <td colspan="1"><span class="arithmatex">\(b=4\)</span></td>
    </tr>
    <tr>
    <td></td>
    <td class="cella-rossa">1</td>
    <td>1</td>
    <td>3</td>
    <td>\-</td>
    <td>\-</td>
    </tr>
    </table></div>

    $$
    nb=3
    $$

- All the functions of this section are in the folder <code>BPP\_HEUR\_CODE/src</code>. The command <code>make test</code> compiles them and runs every example of these notes and every instance of the exercises, checking the number of bins and the item-bin assignment against the expected ones.

---

**Exercises on this chapter:** [:material-pencil: Bin packing](../exercises/bin-packing-approximation.md)
