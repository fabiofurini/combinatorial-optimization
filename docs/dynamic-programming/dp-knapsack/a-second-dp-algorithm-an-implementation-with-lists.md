---
title: "A second DP algorithm: An implementation with lists"
---

# 17.3.2 A second DP algorithm: An implementation with lists { #1732-an-implementation-with-lists }

<div class="info-capitolo" markdown>

**Part 3 · Dynamic programming · Chapter 17** · [:material-book-open-variant: Chapter 17: 0/1 knapsack (KP)](index.md) · [:material-file-pdf-box: Lecture notes, volume 3 (PDF)](../../pdf/lecture-notes-3-dynamic-programming.pdf) · [:material-presentation: Slides (1/2)](../../pdf/slides-dp-knapsack-1.pdf) · [:material-presentation: Slides (2/2)](../../pdf/slides-dp-knapsack-2.pdf) · [:material-pencil: Exercises: 0/1 knapsack (KP)](../../exercises/dp-knapsack.md) · [:material-gesture-tap: App: DP tables for the knapsack problems](../../lab/dp-knapsack-table.md)

</div>

- <u>Step 1</u>: computation of the optimal value

    - The DP algorithm of this section stores one value for every pair given by an item and a target profit, that is $(n+1)(P+1)$ values in total. Many of these values are equal to $+\infty$, because no subset of the available items has that total profit.

    - This subsection describes a <strong>different implementation of the same DP algorithm</strong>. The recursive decomposition and the optimal substructure are the ones of formula $\eqref{eq:2}$: what changes is the data structure.

    - Instead of a whole row of the matrix, only the pairs that are actually obtained by a subset of items are stored, and among them only those that can lead to an optimal solution. These pairs are kept in a list, one list for each item.

    !!! chiave ""

        A <strong>state</strong> is a pair $(w,p)$, where $w$ is the total weight and $p$ is the total profit of a subset of items.

    - The empty subset gives the state $(0,0)$. A subset of the items $\{1,2,\dots,j\}$ gives a state obtained by summing the weights and the profits of its items.

    - Two different subsets can give the same state, and in this case it is enough to keep one of them. More generally, a state can be discarded whenever another state is at least as good in both components.

        !!! chiave ""

            Given two states $(w,p)$ and $(w',p')$ with $(w,p)\ne(w',p')$, the state $(w,p)$ <strong>dominates</strong> the state $(w',p')$ if

            $$
            w\le w' \qquad \textrm{and} \qquad p\ge p'.
            $$

            A state is <strong>non-dominated</strong> if no other state dominates it.

    - A dominated state can be discarded. Indeed, let $(w,p)$ dominate $(w',p')$ and let $S'$ be a subset of the remaining items that can be added to $(w',p')$ without exceeding the capacity.

    - Since $w\le w'$, the same subset $S'$ can also be added to $(w,p)$, and since $p\ge p'$ the resulting total profit is not smaller. Therefore no optimal solution is lost.

        !!! formula ""

            For any $j \in \{0,1,\dots,n\}$, let $L_j$ be the list of the non-dominated states that can be obtained by selecting a subset of the items $\{1,2,\dots,j\}$, sorted by strictly increasing weight.

            The recursive formula to compute $L_j$ reads as follows:

            \begin{equation*}
            \label{eq:6}
            L_j= \left\{ \begin{array}{ll}
            \big\{(0,0)\big\} & \textrm{if $j=0$,}\\[2ex]
            \textrm{nd}\big(L_{j-1}\cup M_j\big) & \textrm{if $1\le j \le n$,}
            \end{array} \right. \tag{17.6}
            \end{equation*}

            where $\textrm{nd}(S)$ denotes the list of the non-dominated states of a set $S$ of states, and

            $$
            M_j=\big\{\,(w+w_j,\;p+p_j)\;:\;(w,p)\in L_{j-1}\,\big\}.
            $$

    - The recursive decomposition process of formula $\eqref{eq:6}$ generates $2$ <strong>independent subproblems</strong> for each state of $L_{j-1}$, corresponding to whether or not to select item $j$. If item $j$ is not selected, the state is unchanged and belongs to $L_{j-1}$. If item $j$ is selected, the state becomes $(w+w_j,p+p_j)$ and belongs to $M_j$.

    - Here, $L_0=\{(0,0)\}$ since the only subset of an empty set of items is the empty subset.

    - As in formula $\eqref{eq:2}$, the knapsack capacity does not appear in the recursion: the list $L_j$ collects the states of <em>all</em> the subsets of the items $\{1,2,\dots,j\}$, including those whose total weight exceeds the capacity.

    - Hence, every non-dominated state reachable with the items $\{1,2,\dots,j\}$ is built by combining the chosen decision on item $j$ with a non-dominated state reachable with the items $\{1,2,\dots,j-1\}$.

        $\rightsquigarrow$ <strong>Optimal Substructure verified!</strong>

    - Different subsets of the items $\{1,2,\dots,j\}$ can give the same state, and a state can also be dominated by another one. In both cases a single state is kept in $L_j$, and all the subsets that lead to it are treated at once in the following iterations.

        $\rightsquigarrow$ <strong>Overlapping Subproblems verified!</strong>

    - The knapsack capacity is used only at the end, exactly as in formula [(17.5)](a-second-dp-algorithm.md#mjx-eqn:eq:3): among the states of $L_n$, only those whose total weight does not exceed the capacity correspond to a feasible solution.

        !!! chiave ""

            The optimal value of the KP instance is

            \begin{equation*}
            \label{eq:7}
            \max \big\{\, p \;:\; (w,p)\in L_n,\ w\le c \,\big\}. \tag{17.7}
            \end{equation*}

    - The set in formula $\eqref{eq:7}$ is never empty, since $(0,0)\in L_n$ and $0\le c$, and therefore the maximum is always well defined.

    - The list $L_j$ holds the information of the row $j$ of the matrix ${u}$ in compressed form:

        $$
        \min\big\{\,w \;:\; (w,p)\in L_j,\ p\ge q\,\big\}=\min_{q'\ge q}\ {u}[j][q'] \qquad \forall q \in \{0,1,\dots,P\}.
        $$

        The target profits whose row entry is $+\infty$ leave no state in the list, and a target profit whose minimum weight is not smaller than the one of a larger target profit leaves no state either.

        <a id="box-96-texkp4graph"></a>

        !!! esempio "Example 17.20: The lists of states"

            We consider the KP instance of <span style="color:#1971c2">[Example 17.13](a-second-dp-algorithm.md#box-54-texkp2instance)</span> with a knapsack of capacity $c=5$ and the following profits and weights:

            $$
            \begin{array}{l|rrr}
            \hline  & {j = 1} & {j = 2} & {j = 3} \\
            \hline {p_j} & {3} & {3} & {4} \\
            {w_j} & {2} & {3} & {3} \\
            \hline
            \end{array}
            $$

            Each shaded band collects the states of one list. An arc entering the band of $L_j$ corresponds to the decision taken on item $j$: a horizontal arc means that item $j$ is not selected, while a slanted arc means that item $j$ is selected. The thick arcs give the states of an optimal solution.

            ![Figure 6](../../img/dp-knapsack/fig06.svg){ .fig loading=lazy  }

            The two crossed states are dominated and are therefore discarded: $(3,3)$ is dominated by $(2,3)$ and $(5,6)$ is dominated by $(5,7)$. The state $(8,10)$, drawn with a dashed border, has a total weight larger than the knapsack capacity $c=5$: it is kept in the list, because the capacity is not used during the recursion, and it is discarded only by formula $\eqref{eq:7}$.

    - The list $L_{j-1}$ and the list $M_j$ are both sorted by increasing weight, because $M_j$ is obtained from $L_{j-1}$ by adding the same weight $w_j$ to every state. Therefore the union of formula $\eqref{eq:6}$ is computed by scanning the two lists at the same time, as in the merge of two sorted lists.

    - To describe the scanning order we use the following convention.

        !!! chiave ""

            The state $(w,p)$ <strong>precedes</strong> the state $(w',p')$ if

            $$
            w<w' \qquad \textrm{or} \qquad \textrm{($w=w'$ and $p>p'$)}.
            $$

        - If the states are scanned in this order, a state is non-dominated if and only if its profit is strictly larger than the largest profit of the states already scanned. Indeed, every state already scanned has a weight not larger, and therefore it dominates the current state as soon as its profit is not smaller.

        This is the pseudo-code of the <strong>DP algorithm using lists</strong>:

        !!! algoritmo "Algorithm: DP2\_Lists"

            <div class="pseudocodice" markdown="0"><div class="pc" style="--liv:0"><strong>Input:</strong> A KP instance given by the number <span class="arithmatex">\(n\)</span> of items, arrays <span class="arithmatex">\(p[1..n]\)</span> and <span class="arithmatex">\(w[1..n]\)</span> of item profits and weights, and the knapsack capacity <span class="arithmatex">\(c\)</span></div><div class="pc" style="--liv:0"><strong>Output:</strong> The optimal value of the KP instance</div><div class="pc" style="--liv:0"><span class="pc-n">1</span><strong>Function</strong> DP2_Lists(<span class="arithmatex">\(n,p,w,c\)</span>)</div><div class="pc" style="--liv:1" id="box-97-kplist2-a"><span class="pc-n">2</span><span class="arithmatex">\(L := \textnormal{new list containing the single state } (0,0)\)</span></div><div class="pc" style="--liv:1" id="box-98-kplist2-b"><span class="pc-n">3</span><strong>for</strong> <span class="arithmatex">\(j := 1\)</span> <strong>to</strong> <span class="arithmatex">\(n\)</span>  <strong>do</strong></div><div class="pc" style="--liv:2" id="box-99-kplist2-c"><span class="pc-n">4</span><span class="arithmatex">\(M := \textnormal{new empty list}\)</span></div><div class="pc" style="--liv:2" id="box-100-kplist2-d"><span class="pc-n">5</span><strong>for</strong> <span class="arithmatex">\(h := 1\)</span> <strong>to</strong> <span class="arithmatex">\(|L|\)</span>  <strong>do</strong></div><div class="pc" style="--liv:3"><span class="pc-n">6</span>append $(L[h].w + w[j],</div><div class="pc" style="--liv:3" id="box-101-kplist2-e"><span class="pc-n">7</span>L[h].p + p[j])<span class="arithmatex">\(to\)</span>M$</div><div class="pc" style="--liv:2"><span class="pc-n">8</span><strong>end</strong></div><div class="pc" style="--liv:2" id="box-102-kplist2-f"><span class="pc-n">9</span><span class="arithmatex">\(L \leftarrow \textnormal{\tt Merge}(L,M)\)</span></div><div class="pc" style="--liv:1"><span class="pc-n">10</span><strong>end</strong></div><div class="pc" style="--liv:1" id="box-103-kplist2-g"><span class="pc-n">11</span><span class="arithmatex">\(z := 0\)</span></div><div class="pc" style="--liv:1" id="box-104-kplist2-h"><span class="pc-n">12</span><strong>for</strong> <span class="arithmatex">\(h := 1\)</span> <strong>to</strong> <span class="arithmatex">\(|L|\)</span>  <strong>do</strong></div><div class="pc" style="--liv:2" id="box-105-kplist2-i"><span class="pc-n">13</span><strong>if</strong> <span class="arithmatex">\(L[h].w \le c\)</span>  <strong>then</strong></div><div class="pc" style="--liv:3" id="box-106-kplist2-j"><span class="pc-n">14</span><span class="arithmatex">\(z \leftarrow L[h].p\)</span></div><div class="pc" style="--liv:2"><span class="pc-n">15</span><strong>end</strong></div><div class="pc" style="--liv:1"><span class="pc-n">16</span><strong>end</strong></div><div class="pc" style="--liv:1" id="box-107-kplist2-k"><span class="pc-n">17</span><strong>return</strong> <span class="arithmatex">\(z\)</span></div></div>

        This is the pseudo-code of the procedure that merges two lists and discards the dominated states:

        !!! algoritmo "Algorithm: Merge"

            <div class="pseudocodice" markdown="0"><div class="pc" style="--liv:0"><strong>Input:</strong> Two lists <span class="arithmatex">\(L\)</span> and <span class="arithmatex">\(M\)</span> of states, both sorted by increasing weight</div><div class="pc" style="--liv:0"><strong>Output:</strong> The list of the non-dominated states of <span class="arithmatex">\(L\cup M\)</span>, sorted by increasing weight</div><div class="pc" style="--liv:0"><span class="pc-n">1</span><strong>Function</strong> Merge(<span class="arithmatex">\(L,M\)</span>)</div><div class="pc" style="--liv:1" id="box-108-kpmrg2-a"><span class="pc-n">2</span><span class="arithmatex">\(R := \textnormal{new empty list}\)</span></div><div class="pc" style="--liv:1" id="box-109-kpmrg2-b"><span class="pc-n">3</span><span class="arithmatex">\(h := 1\)</span></div><div class="pc" style="--liv:1" id="box-110-kpmrg2-c"><span class="pc-n">4</span><span class="arithmatex">\(k := 1\)</span></div><div class="pc" style="--liv:1" id="box-111-kpmrg2-d"><span class="pc-n">5</span><span class="arithmatex">\(\pi := -1\)</span></div><div class="pc" style="--liv:1" id="box-112-kpmrg2-e"><span class="pc-n">6</span><strong>while</strong> <span class="arithmatex">\(h \le |L|\)</span> <strong>or</strong> <span class="arithmatex">\(k \le |M|\)</span>  <strong>do</strong></div><div class="pc" style="--liv:2" id="box-113-kpmrg2-f"><span class="pc-n">7</span><strong>if</strong> <span class="arithmatex">\(k>|M|\)</span> <strong>or</strong> (<span class="arithmatex">\(h\le |L|\)</span> <strong>and</strong> <span class="arithmatex">\(L[h]\)</span> precedes <span class="arithmatex">\(M[k]\)</span>)  <strong>then</strong></div><div class="pc" style="--liv:3" id="box-114-kpmrg2-g"><span class="pc-n">8</span><span class="arithmatex">\((a,b) \leftarrow L[h]\)</span></div><div class="pc" style="--liv:3" id="box-115-kpmrg2-h"><span class="pc-n">9</span><span class="arithmatex">\(h \leftarrow h+1\)</span></div><div class="pc" style="--liv:2"><span class="pc-n">10</span><strong>else</strong></div><div class="pc" style="--liv:3" id="box-116-kpmrg2-i"><span class="pc-n">11</span><span class="arithmatex">\((a,b) \leftarrow M[k]\)</span></div><div class="pc" style="--liv:3" id="box-117-kpmrg2-j"><span class="pc-n">12</span><span class="arithmatex">\(k \leftarrow k+1\)</span></div><div class="pc" style="--liv:2"><span class="pc-n">13</span><strong>end</strong></div><div class="pc" style="--liv:2" id="box-118-kpmrg2-k"><span class="pc-n">14</span><strong>if</strong> <span class="arithmatex">\(b > \pi\)</span>  <strong>then</strong></div><div class="pc" style="--liv:3" id="box-119-kpmrg2-l"><span class="pc-n">15</span>append <span class="arithmatex">\((a,b)\)</span> to <span class="arithmatex">\(R\)</span></div><div class="pc" style="--liv:3" id="box-120-kpmrg2-m"><span class="pc-n">16</span><span class="arithmatex">\(\pi \leftarrow b\)</span></div><div class="pc" style="--liv:2"><span class="pc-n">17</span><strong>end</strong></div><div class="pc" style="--liv:1"><span class="pc-n">18</span><strong>end</strong></div><div class="pc" style="--liv:1" id="box-121-kpmrg2-n"><span class="pc-n">19</span><strong>return</strong> <span class="arithmatex">\(R\)</span></div></div>

        - The list $L$ is the <strong>lookup table</strong>: at the end of the iteration for item $j$, it stores the list $L_j$.

        - The list $L$ is initialized with the single state $(0,0)$, which is the list $L_0$.

        - The outer loop, over items $j \in \{1,2,\dots,n\}$, computes one list for each item.

        - The inner loop builds the list $M$ of the states obtained by selecting item $j$. No state is discarded here, because the knapsack capacity is not used during the recursion.

        - The procedure <code>Merge</code> scans the two lists at the same time and keeps a state only when its profit is strictly larger than the largest profit already appended, which is stored in the auxiliary variable $\pi$. The initial value $\pi=-1$ guarantees that the first scanned state is always appended.

        - The last loop implements formula $\eqref{eq:7}$. The states of $L$ have strictly increasing weights and strictly increasing profits, and therefore the auxiliary variable $z$ ends with the profit of the last state whose weight does not exceed the knapsack capacity.

        - Finally, the optimal value of the KP instance is returned as $z$.

        <a id="box-122-texkp4bu"></a>

        !!! esempio "Example 17.21: Execution of the DP algorithm"

            We consider the KP instance of <span style="color:#1971c2">[Example 17.13](a-second-dp-algorithm.md#box-54-texkp2instance)</span> with a knapsack of capacity $c=5$ and the following profits and weights:

            $$
            \begin{array}{l|rrr}
            \hline  & {j = 1} & {j = 2} & {j = 3} \\
            \hline {p_j} & {3} & {3} & {4} \\
            {w_j} & {2} & {3} & {3} \\
            \hline
            \end{array}
            $$

            For each item $j$, the table shows the list $M_j$ of the states obtained by selecting item $j$ and the resulting list $L_j$.

            $$
            \begin{array}{c|l|l}
            \hline {j} & {M_j} & {L_j} \\
            \hline {0} & {-} & {\{(0,0)\}} \\
            {1} & {\{(2,3)\}} & {\{(0,0),(2,3)\}} \\
            {2} & {\{(3,3),(5,6)\}} & {\{(0,0),(2,3),(5,6)\}} \\
            {3} & {\{(3,4),(5,7),(8,10)\}} & {\{(0,0),(2,3),(3,4),(5,7),(8,10)\}} \\
            \hline
            \end{array}
            $$

            For each state scanned by <code>Merge</code>, the table shows the value of $j$, the state, the list it is taken from, and the operation performed.

            <div class="tabella" markdown="0"><table>
            <tr>
            <th><span class="arithmatex">\(j\)</span></th>
            <th>state</th>
            <th>from</th>
            <th>Action</th>
            </tr>
            <tr>
            <td><span class="arithmatex">\(1\)</span></td>
            <td><span class="arithmatex">\((0,0)\)</span></td>
            <td><span class="arithmatex">\(L_{0}\)</span></td>
            <td><span class="arithmatex">\(0>\pi=-1\)</span>: append</td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(1\)</span></td>
            <td><span class="arithmatex">\((2,3)\)</span></td>
            <td><span class="arithmatex">\(M_1\)</span></td>
            <td><span class="arithmatex">\(3>\pi=0\)</span>: append</td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\((0,0)\)</span></td>
            <td><span class="arithmatex">\(L_{1}\)</span></td>
            <td><span class="arithmatex">\(0>\pi=-1\)</span>: append</td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\((2,3)\)</span></td>
            <td><span class="arithmatex">\(L_{1}\)</span></td>
            <td><span class="arithmatex">\(3>\pi=0\)</span>: append</td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\((3,3)\)</span></td>
            <td><span class="arithmatex">\(M_2\)</span></td>
            <td><span class="arithmatex">\(3\le\pi=3\)</span>: discard (dominated)</td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\((5,6)\)</span></td>
            <td><span class="arithmatex">\(M_2\)</span></td>
            <td><span class="arithmatex">\(6>\pi=3\)</span>: append</td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(3\)</span></td>
            <td><span class="arithmatex">\((0,0)\)</span></td>
            <td><span class="arithmatex">\(L_{2}\)</span></td>
            <td><span class="arithmatex">\(0>\pi=-1\)</span>: append</td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(3\)</span></td>
            <td><span class="arithmatex">\((2,3)\)</span></td>
            <td><span class="arithmatex">\(L_{2}\)</span></td>
            <td><span class="arithmatex">\(3>\pi=0\)</span>: append</td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(3\)</span></td>
            <td><span class="arithmatex">\((3,4)\)</span></td>
            <td><span class="arithmatex">\(M_3\)</span></td>
            <td><span class="arithmatex">\(4>\pi=3\)</span>: append</td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(3\)</span></td>
            <td><span class="arithmatex">\((5,7)\)</span></td>
            <td><span class="arithmatex">\(M_3\)</span></td>
            <td><span class="arithmatex">\(7>\pi=4\)</span>: append</td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(3\)</span></td>
            <td><span class="arithmatex">\((5,6)\)</span></td>
            <td><span class="arithmatex">\(L_{2}\)</span></td>
            <td><span class="arithmatex">\(6\le\pi=7\)</span>: discard (dominated)</td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(3\)</span></td>
            <td><span class="arithmatex">\((8,10)\)</span></td>
            <td><span class="arithmatex">\(M_3\)</span></td>
            <td><span class="arithmatex">\(10>\pi=7\)</span>: append</td>
            </tr>
            </table></div>

            The last loop scans $L_3$ and keeps the profit of the last state whose weight does not exceed $c=5$: the states $(0,0)$, $(2,3)$, $(3,4)$ and $(5,7)$ give $z\leftarrow 0$, $z\leftarrow 3$, $z\leftarrow 4$ and $z\leftarrow 7$, while the state $(8,10)$ causes no update since $8>5$. Therefore the optimal value of the KP instance is $7$.

    - After the execution of the DP algorithm, the list $L$ contains the non-dominated states $L_n$, sorted by strictly increasing weight and strictly increasing profit.

- <u>Step 2</u>: computation of an optimal solution

    - To compute an optimal solution, i.e., the binary vector $(x_1,x_2,\dots,x_n)$, it is necessary to store some additional information. The list $L_n$ alone gives the optimal value, but it does not say which items produce the state that attains it.

    - For each item $j$ and each position $h \in \{1,2,\dots,|L_j|\}$, in addition to the state $L_j[h]$, we store two values:

        - ${\sigma}_j[h]$, which is equal to $1$ if item $j$ is selected in the state $L_j[h]$, and is equal to $0$ otherwise;

        - ${\rho}_j[h]$, which is the position in $L_{j-1}$ of the state from which $L_j[h]$ is obtained.

    - A state taken from $L_{j-1}$ gives ${\sigma}_j[h]=0$, while a state taken from $M_j$ gives ${\sigma}_j[h]=1$. In both cases ${\rho}_j[h]$ is the position of the state of $L_{j-1}$ that generated it.

    - The DP algorithm must also keep all the lists $L_0,L_1,\dots,L_n$, and not only the last one, because the reconstruction goes backwards through them.

        <a id="box-123-texkp4info"></a>

        !!! esempio "Example 17.22: Computation of the additional information"

            We consider the KP instance of <span style="color:#1971c2">[Example 17.13](a-second-dp-algorithm.md#box-54-texkp2instance)</span>. For each item $j$ and each position $h$, the table shows the state $L_j[h]$ and the stored values ${\sigma}_j[h]$ and ${\rho}_j[h]$.

            $$
            \begin{array}{c|c|c|c|c}
            \hline {j} & {h} & {L_j[h]} & {\sigma_j[h]} & {\rho_j[h]} \\
            \hline {1} & {1} & {(0,0)} & {0} & {1} \\
            {1} & {2} & {(2,3)} & {1} & {1} \\
            \hline {2} & {1} & {(0,0)} & {0} & {1} \\
            {2} & {2} & {(2,3)} & {0} & {2} \\
            {2} & {3} & {(5,6)} & {1} & {2} \\
            \hline {3} & {1} & {(0,0)} & {0} & {1} \\
            {3} & {2} & {(2,3)} & {0} & {2} \\
            {3} & {3} & {(3,4)} & {1} & {1} \\
            {3} & {4} & {(5,7)} & {1} & {2} \\
            {3} & {5} & {(8,10)} & {1} & {3} \\
            \hline
            \end{array}
            $$

            For instance, the state $L_3[4]=(5,7)$ has ${\sigma}_3[4]=1$ and ${\rho}_3[4]=2$: it is obtained by selecting item $3$ from the state $L_2[2]=(2,3)$, since $2+w_3=2+3=5$ and $3+p_3=3+4=7$.

    - The reconstruction starts from the position $\tilde h$ of the state that attains the maximum of formula $\eqref{eq:7}$, that is the position at which the last loop of <code>DP2\_Lists</code> updates $z$ for the last time. It is not in general the last position of $L_n$, because the last states of $L_n$ may have a total weight larger than the knapsack capacity.

    - An optimal solution is then reconstructed by scanning the items from $j=n$ down to $j=1$, starting from $h=\tilde h$:

        $$
        \begin{array}{ll}
        x_j \leftarrow {\sigma}_j[h],\quad h \leftarrow {\rho}_j[h] & \textrm{for $j=n,n-1,\dots,1$.}
        \end{array}
        $$

    - This yields the vector $(x_1,x_2,\dots,x_n)$, where $x_j$ is equal to $1$ if item $j$ is selected in an optimal solution, and $0$ otherwise.

        !!! algoritmo "Algorithm: DP2\_Lists\_Reconstruct"

            <div class="pseudocodice" markdown="0"><div class="pc" style="--liv:0"><strong>Input:</strong> The number <span class="arithmatex">\(n\)</span> of items, the position <span class="arithmatex">\(\tilde h\)</span> of the optimal state in <span class="arithmatex">\(L_n\)</span>, and the stored values <span class="arithmatex">\({\sigma}\)</span> and <span class="arithmatex">\({\rho}\)</span></div><div class="pc" style="--liv:0"><strong>Output:</strong> An optimal solution of the KP instance</div><div class="pc" style="--liv:0"><span class="pc-n">1</span><strong>Function</strong> DP2_Lists_Reconstruct(<span class="arithmatex">\(n,\tilde h,\sigma,\rho\)</span>)</div><div class="pc" style="--liv:1"><span class="pc-n">2</span><span class="arithmatex">\(x := \textnormal{new array}[1..n]\)</span></div><div class="pc" style="--liv:1"><span class="pc-n">3</span><strong>for</strong> <span class="arithmatex">\(j := 1\)</span> <strong>to</strong> <span class="arithmatex">\(n\)</span> <strong>do</strong></div><div class="pc" style="--liv:2"><span class="pc-n">4</span><span class="arithmatex">\(x[j] \leftarrow 0\)</span></div><div class="pc" style="--liv:1"><span class="pc-n">5</span><strong>end</strong></div><div class="pc" style="--liv:1"><span class="pc-n">6</span><span class="arithmatex">\(h := \tilde h\)</span></div><div class="pc" style="--liv:1"><span class="pc-n">7</span><strong>for</strong> <span class="arithmatex">\(j := n\)</span> <strong>downto</strong> <span class="arithmatex">\(1\)</span> <strong>do</strong></div><div class="pc" style="--liv:2"><span class="pc-n">8</span><span class="arithmatex">\(x[j] \leftarrow {\sigma}_j[h]\)</span></div><div class="pc" style="--liv:2"><span class="pc-n">9</span><span class="arithmatex">\(h \leftarrow {\rho}_j[h]\)</span></div><div class="pc" style="--liv:1"><span class="pc-n">10</span><strong>end</strong></div><div class="pc" style="--liv:1"><span class="pc-n">11</span><strong>return</strong> <span class="arithmatex">\(x\)</span></div></div>

        <a id="box-124-texkp4sol"></a>

        !!! esempio "Example 17.23: Computing an optimal solution"

            After the execution of the DP algorithm on the instance of <span style="color:#1971c2">[Example 17.13](a-second-dp-algorithm.md#box-54-texkp2instance)</span>, the last list is

            $$
            L_3=\big\{(0,0),(2,3),(3,4),(5,7),(8,10)\big\}
            $$

            and the maximum of formula $\eqref{eq:7}$ is attained by the state $L_3[4]=(5,7)$, so that $\tilde h=4$ and the optimal value is $7$.

            We can reconstruct an optimal solution by starting from $j=3$ and $h=\tilde h=4$ as follows:

            <div class="tabella" markdown="0"><table>
            <tr>
            <th>Iteration</th>
            <th><span class="arithmatex">\(j\)</span></th>
            <th><span class="arithmatex">\(h\)</span></th>
            <th><span class="arithmatex">\(L_j[h]\)</span></th>
            <th><span class="arithmatex">\({\sigma}_j[h]\)</span></th>
            <th><span class="arithmatex">\({\rho}_j[h]\)</span></th>
            <th><span class="arithmatex">\(x[1]\)</span></th>
            <th><span class="arithmatex">\(x[2]\)</span></th>
            <th><span class="arithmatex">\(x[3]\)</span></th>
            <th>Action</th>
            </tr>
            <tr>
            <td><span class="arithmatex">\(-\)</span></td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td><span class="arithmatex">\(h=4\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(1\)</span></td>
            <td><span class="arithmatex">\(3\)</span></td>
            <td><span class="arithmatex">\(4\)</span></td>
            <td><span class="arithmatex">\((5,7)\)</span></td>
            <td><span class="arithmatex">\(1\)</span></td>
            <td><span class="arithmatex">\(2\)</span></td>
            <td>0</td>
            <td>0</td>
            <td class="cella-blu">1</td>
            <td><span class="arithmatex">\(h\leftarrow 2\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\((2,3)\)</span></td>
            <td><span class="arithmatex">\(0\)</span></td>
            <td><span class="arithmatex">\(2\)</span></td>
            <td>0</td>
            <td>0</td>
            <td>1</td>
            <td><span class="arithmatex">\(h\leftarrow 2\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(3\)</span></td>
            <td><span class="arithmatex">\(1\)</span></td>
            <td><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\((2,3)\)</span></td>
            <td><span class="arithmatex">\(1\)</span></td>
            <td><span class="arithmatex">\(1\)</span></td>
            <td class="cella-blu">1</td>
            <td>0</td>
            <td>1</td>
            <td><span class="arithmatex">\(h\leftarrow 1\)</span></td>
            </tr>
            </table></div>

            Thus, the vector

            $$
            (1,0,1)
            $$

            is an optimal solution. The corresponding optimal value is $3+4=7$.

## 17.3.3 Number of steps

- Let $S(n,P)$ denote the number of steps executed by <code>DP2\_Lists</code> in the worst case, where $n$ is the number of items and $P=\sum_{j=1}^{n}p_j$ is the total profit of all the items.

- The states of a list have strictly increasing profits, and every profit belongs to $\{0,1,\dots,P\}$: therefore $|L_j|\le P+1$ for all $j \in \{0,1,\dots,n\}$, and $|M_j|=|L_{j-1}|$.

- For each item, <code>DP2\_Lists</code> scans $L_{j-1}$ once to build $M_j$ and then calls <code>Merge</code>, which scans $|L_{j-1}|+|M_j|\le 2(P+1)$ states and performs a constant number of operations for each of them. The final loop scans $L_n$ once. Therefore

    $$
    S(n,P)=\Theta(nP).
    $$

- The matrix ${u}$ always has $(n+1)(P+1)$ cells, most of which are equal to $+\infty$, while the lists contain only the states that are actually reachable. On the KP instance of <span style="color:#1971c2">[Example 17.13](a-second-dp-algorithm.md#box-54-texkp2instance)</span> the lists contain $1$, $2$, $3$, and $5$ states, against the $44$ cells of the matrix ${u}$.

- The list $L_j$ also satisfies $|L_j|\le 2^j$, since the items $\{1,2,\dots,j\}$ have $2^j$ subsets. Therefore

    $$
    |L_j|\le \min\big\{2^j,\,P+1\big\}.
    $$

---

**Next:** [Typical mistakes · In summary](typical-mistakes.md)
