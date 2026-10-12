---
title: "The bin packing problem: first sort, then pack"
---

# 24.5 The bin packing problem: first sort, then pack { #sez-sec-BPP }

<div class="info-capitolo" markdown>

**Part 4 · Heuristic algorithms · Chapter 24** · [:material-book-open-variant: Chapter 24: Constructive](index.md) · [:material-file-pdf-box: Lecture notes, volume 4 (PDF)](../../pdf/lecture-notes-4-heuristic-algorithms.pdf) · [:material-pencil: Exercises: Constructive](../../exercises/constructive-heuristics.md) · [:material-gesture-tap: App: Bin packing heuristics](../../lab/bin-packing-heuristics.md) · [:material-gesture-tap: App: List scheduling and LPT](../../lab/list-scheduling-lpt.md) · [:material-gesture-tap: App: Vertex coloring: greedy and DSATUR](../../lab/coloring-greedy-dsatur.md)

</div>

- The notes on approximation algorithms for the BPP study four greedy heuristics that process the items <strong>in the input order</strong> and differ in the rule used to choose the bin: Next Fit (NF) keeps a single open bin, while First Fit (FF), Best Fit (BF) and Worst Fit (WF) keep all the bins and choose, among those in which the item fits, the first opened, the fullest or the emptiest one. On the BPP reference instance ($c=7$, $w=(4,4,5,3,2,3)$, $z(I)=3$) they give

    $$
    NF(I)=5, \qquad FF(I)=4, \qquad BF(I)=3, \qquad WF(I)=4 .
    $$

- In those heuristics the <em>bin</em> is chosen by a criterion, but the <em>item</em> is not: the items arrive in the order of the input, which may be a bad one. When the whole instance is known in advance — the <em>offline</em> setting — nothing forces us to accept that order. The idea of this section is to choose the order of the items too: <strong>first sort, then pack</strong>.

- <strong>Why the large items first.</strong> The difficult items of a BPP instance are the large ones: two items larger than $\frac{c}{2}$ never share a bin, and a large item fits only into a bin that is still almost empty. Small items, on the contrary, can fill the gaps left in any bin. If the small items come first, they are spread over the bins and occupy the space that the large items will need later; if the large items come first, each of them gets its own bin, and the small items are then used to fill the gaps.

## 24.5.1 First Fit Decreasing { #sez-sec-FFD }

!!! chiave ""

    The <em>First Fit Decreasing Algorithm</em> (denoted by FFD) is a constructive heuristic for the BPP. It first sorts the items by non-increasing weight, and then packs them in this order by First Fit: each item is packed into the first bin, in the order in which the bins were opened, in which it fits; if it fits into no bin, a new bin is opened.

!!! algoritmo "Algorithm: First Fit Decreasing"

    <div class="pseudocodice" markdown="0"><div class="pc" style="--liv:0"><strong>Input:</strong> BPP instance <span class="arithmatex">\(I\)</span> with <span class="arithmatex">\(n\)</span> items, weights <span class="arithmatex">\(w[1..n]\)</span>, capacity <span class="arithmatex">\(c\)</span></div><div class="pc" style="--liv:0"><strong>Output:</strong> Item-bin assignment <span class="arithmatex">\(bin[1..n]\)</span> and number of used bins <span class="arithmatex">\(nb\)</span></div><div class="pc" style="--liv:0"><span class="pc-n">1</span><strong>Function</strong> FirstFitDecreasing(<span class="arithmatex">\(n, w, c\)</span>)</div><div class="pc" style="--liv:1"><span class="pc-n">2</span><span class="arithmatex">\(\rho :=\)</span> the items sorted by non-increasing weight
    <span class="arithmatex">\(bin := \text{new array}[1..n]\)</span>
    <span class="arithmatex">\(rc := \text{new array}[1..n]\)</span>
    <span class="arithmatex">\(nb := 0\)</span> <span class="pc-com">▹ first sort item-bin assignment residual capacities number of bins</span></div><div class="pc" style="--liv:1"><span class="pc-n">3</span><strong>for</strong> <span class="arithmatex">\(k := 1\)</span> <strong>to</strong> <span class="arithmatex">\(n\)</span> <strong>do</strong></div><div class="pc" style="--liv:2"><span class="pc-n">4</span><span class="arithmatex">\(i := \rho[k]\)</span>
    <span class="arithmatex">\(s := -1\)</span> <span class="pc-com">▹ then pack: <span class="arithmatex">\(k\)</span>-th largest item selected bin</span></div><div class="pc" style="--liv:2"><span class="pc-n">5</span><strong>for</strong> <span class="arithmatex">\(b := 1\)</span> <strong>to</strong> <span class="arithmatex">\(nb\)</span> <strong>do</strong></div><div class="pc" style="--liv:3"><span class="pc-n">6</span><strong>if</strong> <span class="arithmatex">\(w[i] \le rc[b]\)</span> <strong>then</strong></div><div class="pc" style="--liv:4"><span class="pc-n">7</span><span class="arithmatex">\(s \leftarrow b\)</span></div><div class="pc" style="--liv:4"><span class="pc-n">8</span><strong>break</strong></div><div class="pc" style="--liv:3"><span class="pc-n">9</span><strong>end</strong></div><div class="pc" style="--liv:2"><span class="pc-n">10</span><strong>end</strong></div><div class="pc" style="--liv:2"><span class="pc-n">11</span><strong>if</strong> <span class="arithmatex">\(s = -1\)</span> <strong>then</strong></div><div class="pc" style="--liv:3"><span class="pc-n">12</span><span class="arithmatex">\(nb \leftarrow nb + 1\)</span> 
    <span class="arithmatex">\(rc[nb] \leftarrow c\)</span> <span class="pc-com">▹ open new bin</span></div><div class="pc" style="--liv:3"><span class="pc-n">13</span><span class="arithmatex">\(s \leftarrow nb\)</span></div><div class="pc" style="--liv:2"><span class="pc-n">14</span><strong>end</strong></div><div class="pc" style="--liv:2"><span class="pc-n">15</span><span class="arithmatex">\(bin[i] \leftarrow s\)</span> 
    <span class="arithmatex">\(rc[s] \leftarrow rc[s] - w[i]\)</span> <span class="pc-com">▹ assign item</span></div><div class="pc" style="--liv:1"><span class="pc-n">16</span><strong>end</strong></div><div class="pc" style="--liv:1"><span class="pc-n">17</span><strong>return</strong> <span class="arithmatex">\(bin\)</span>, <span class="arithmatex">\(nb\)</span></div></div>

- The packing loop is exactly the loop of FF: the only difference is the line that computes the order $\rho$. Sorting costs $O(n\log n)$, and FFD runs in the same time as FF, $O(n^2)$ with the simple scan of the bins.

<a id="box-4-ex-ffd"></a>

!!! esempio "Example 24.2: FF and FFD on the BPP reference instance"

    <strong>FF</strong>, in the input order: items $1$, $2$ and $3$ (weights $4,4,5$) open one bin each, because no two of them fit together; item $4$ (weight $3$) goes into bin $1$ ($rc[1]=0$); item $5$ (weight $2$) goes into bin $2$ ($rc[2]=1$); item $6$ (weight $3$) fits into no bin, whose residual capacities are $0,1,2$, and opens bin $4$. Hence $FF(I)=4$.

    <strong>FFD</strong>. The weights sorted by non-increasing value are $5,4,4,3,3,2$, i.e., $\rho=(3,1,2,4,6,5)$ (ties by index). Then:

    1. Item $3$ (weight $5$): no bin is open, FFD opens bin $1$; $rc[1]=7-5=2$.

    2. Item $1$ (weight $4$): $4> rc[1]=2$, FFD opens bin $2$; $rc[2]=7-4=3$.

    3. Item $2$ (weight $4$): $4>rc[1]=2$, $4>rc[2]=3$, FFD opens bin $3$; $rc[3]=7-4=3$.

    4. Item $4$ (weight $3$): $3>rc[1]=2$, $3\le rc[2]=3$: bin $2$; $rc[2]=0$.

    5. Item $6$ (weight $3$): $3>rc[1]=2$, $3>rc[2]=0$, $3\le rc[3]=3$: bin $3$; $rc[3]=0$.

    6. Item $5$ (weight $2$): $2\le rc[1]=2$: bin $1$; $rc[1]=0$.

    Hence $bin=(2,3,1,2,1,3)$, the packing patterns are

    $$
    P_1=\{3,5\}, \qquad P_2=\{1,4\}, \qquad P_3=\{2,6\},
    $$

    and $FFD(I)=3=\left\lceil\frac{21}{7}\right\rceil$: the solution is optimal, and all three bins are full.

    ![Figure 2](../../img/constructive-heuristics/fig02.svg){ .fig loading=lazy  }

    In FF the small item $5$ arrives before the large item $6$ and takes the space that item $6$ would need in bin $2$; in FFD item $5$ comes last and fills the gap of bin $1$.

## 24.5.2 Best Fit Decreasing { #sez-sec-BFD }

!!! chiave ""

    The <em>Best Fit Decreasing Algorithm</em> (denoted by BFD) is a constructive heuristic for the BPP. It first sorts the items by non-increasing weight, and then packs them in this order by Best Fit: each item is packed into the bin with the smallest residual capacity among those in which it fits (in case of ties, the bin opened first); if it fits into no bin, a new bin is opened.

!!! algoritmo "Algorithm: Best Fit Decreasing"

    <div class="pseudocodice" markdown="0"><div class="pc" style="--liv:0"><strong>Input:</strong> BPP instance <span class="arithmatex">\(I\)</span> with <span class="arithmatex">\(n\)</span> items, weights <span class="arithmatex">\(w[1..n]\)</span>, capacity <span class="arithmatex">\(c\)</span></div><div class="pc" style="--liv:0"><strong>Output:</strong> Item-bin assignment <span class="arithmatex">\(bin[1..n]\)</span> and number of used bins <span class="arithmatex">\(nb\)</span></div><div class="pc" style="--liv:0"><span class="pc-n">1</span><strong>Function</strong> BestFitDecreasing(<span class="arithmatex">\(n, w, c\)</span>)</div><div class="pc" style="--liv:1"><span class="pc-n">2</span><span class="arithmatex">\(\rho :=\)</span> the items sorted by non-increasing weight
    <span class="arithmatex">\(bin := \text{new array}[1..n]\)</span>
    <span class="arithmatex">\(rc := \text{new array}[1..n]\)</span>
    <span class="arithmatex">\(nb := 0\)</span> <span class="pc-com">▹ first sort item-bin assignment residual capacities number of bins</span></div><div class="pc" style="--liv:1"><span class="pc-n">3</span><strong>for</strong> <span class="arithmatex">\(k := 1\)</span> <strong>to</strong> <span class="arithmatex">\(n\)</span> <strong>do</strong></div><div class="pc" style="--liv:2"><span class="pc-n">4</span><span class="arithmatex">\(i := \rho[k]\)</span>
    <span class="arithmatex">\(s := -1\)</span> <span class="pc-com">▹ then pack: <span class="arithmatex">\(k\)</span>-th largest item selected bin</span></div><div class="pc" style="--liv:2"><span class="pc-n">5</span><strong>for</strong> <span class="arithmatex">\(b := 1\)</span> <strong>to</strong> <span class="arithmatex">\(nb\)</span> <strong>do</strong></div><div class="pc" style="--liv:3"><span class="pc-n">6</span><strong>if</strong> <span class="arithmatex">\(w[i] \le rc[b]\)</span> <strong>and</strong> <span class="arithmatex">\((s=-1\)</span> <strong>or</strong> <span class="arithmatex">\(rc[b] < rc[s])\)</span> <strong>then</strong></div><div class="pc" style="--liv:4"><span class="pc-n">7</span><span class="arithmatex">\(s \leftarrow b\)</span> <span class="pc-com">▹ fullest bin found so far</span></div><div class="pc" style="--liv:3"><span class="pc-n">8</span><strong>end</strong></div><div class="pc" style="--liv:2"><span class="pc-n">9</span><strong>end</strong></div><div class="pc" style="--liv:2"><span class="pc-n">10</span><strong>if</strong> <span class="arithmatex">\(s = -1\)</span> <strong>then</strong></div><div class="pc" style="--liv:3"><span class="pc-n">11</span><span class="arithmatex">\(nb \leftarrow nb + 1\)</span> 
    <span class="arithmatex">\(rc[nb] \leftarrow c\)</span> <span class="pc-com">▹ open new bin</span></div><div class="pc" style="--liv:3"><span class="pc-n">12</span><span class="arithmatex">\(s \leftarrow nb\)</span></div><div class="pc" style="--liv:2"><span class="pc-n">13</span><strong>end</strong></div><div class="pc" style="--liv:2"><span class="pc-n">14</span><span class="arithmatex">\(bin[i] \leftarrow s\)</span> 
    <span class="arithmatex">\(rc[s] \leftarrow rc[s] - w[i]\)</span> <span class="pc-com">▹ assign item</span></div><div class="pc" style="--liv:1"><span class="pc-n">15</span><strong>end</strong></div><div class="pc" style="--liv:1"><span class="pc-n">16</span><strong>return</strong> <span class="arithmatex">\(bin\)</span>, <span class="arithmatex">\(nb\)</span></div></div>

- Again, the packing loop is that of BF, preceded by the sorting.

<a id="box-5-ex-bfd"></a>

!!! esempio "Example 24.3: BFD on the BPP reference instance"

    The order is $\rho=(3,1,2,4,6,5)$, as for FFD. Items $3$, $1$ and $2$ open bins $1$, $2$, $3$, with residual capacities $2,3,3$. Item $4$ (weight $3$) fits into bins $2$ and $3$, both with residual capacity $3$: the tie is broken in favour of bin $2$, and $rc[2]=0$. Item $6$ (weight $3$) fits only into bin $3$, and $rc[3]=0$. Item $5$ (weight $2$) fits only into bin $1$, and $rc[1]=0$. BFD returns the same packing patterns as FFD, $P_1=\{3,5\}$, $P_2=\{1,4\}$, $P_3=\{2,6\}$, and $BFD(I)=3$.

## 24.5.3 What sorting gives, and what it does not

- <strong>A better guarantee.</strong> Sorting the items improves the worst case. The notes on approximation algorithms show that FF and BF have worst-case performance ratio $\frac{17}{10}$. For FFD it is known that

    $$
    FFD(I) \;\le\; \frac{11}{9}\, z(I) + \frac{6}{9} \qquad \text{for every BPP instance } I,
    $$

    and that the bound is tight. A bound of the form $\frac{11}{9}z(I)+4$ was first proved for both FFD and BFD by D.S. Johnson, A. Demers, J.D. Ullman, M.R. Garey and R.L. Graham (<em>Worst-case performance bounds for simple one-dimensional packing algorithms</em>, SIAM Journal on Computing 3 (1974) 299–325); the tight additive constant is due to G. Dósa (<em>The tight bound of First Fit Decreasing bin-packing algorithm is $FFD(I)\le 11/9\,OPT(I)+6/9$</em>, ESCAPE 2007, LNCS 4614, pp. 1–11).

- <strong>Not a better solution on every instance.</strong> A worst-case guarantee compares the algorithm with the optimum, not with another algorithm: on some instances the input order is luckier than the sorted one.

<a id="box-6-ex-ffdworse"></a>

!!! esempio "Example 24.4: Sorting can hurt"

    Let $c=7$ and $w=(2,2,3,2,2,3)$, with total weight $14$, so that $z(I)\ge\left\lceil\frac{14}{7}\right\rceil=2$.

    <strong>FF</strong> packs items $1,2,3$ into bin $1$ ($2+2+3=7$) and items $4,5,6$ into bin $2$ ($2+2+3=7$): $FF(I)=2$, which is optimal.

    <strong>FFD</strong> examines the items in the order $\rho=(3,6,1,2,4,5)$. Items $3$ and $6$ go into bin $1$ ($rc[1]=1$); items $1$, $2$, $4$ do not fit into bin $1$ and go into bin $2$ ($rc[2]=1$); item $5$ fits into neither bin and opens bin $3$: $FFD(I)=3$.

    The two items of weight $3$, packed together by FFD, waste one unit of capacity in bin $1$; the input order happened to pair each of them with two items of weight $2$, filling both bins exactly.

---

**Next:** [24.6 Scheduling on parallel machines: longest jobs first](scheduling-on-parallel-machines-longest-jobs-first.md)
