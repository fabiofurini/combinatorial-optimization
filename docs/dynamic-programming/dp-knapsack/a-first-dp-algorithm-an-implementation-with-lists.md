---
title: "A first DP algorithm: An implementation with lists"
---

# 17.2.2 A first DP algorithm: An implementation with lists { #1722-an-implementation-with-lists }

<div class="info-capitolo" markdown>

**Part 3 · Dynamic programming · Chapter 17** · [:material-book-open-variant: Chapter 17: 0/1 knapsack (KP)](index.md) · [:material-file-pdf-box: Lecture notes, volume 3 (PDF)](../../pdf/lecture-notes-3-dynamic-programming.pdf) · [:material-pencil: Exercises: 0/1 knapsack (KP)](../../exercises/dp-knapsack.md) · [:material-gesture-tap: App: DP table for the knapsack](../../lab/dp-knapsack-table.md)

</div>

- <u>Step 1</u>: computation of the optimal value

    - The DP algorithm of this section stores one value for every pair given by an item and a capacity value, that is $(n+1)(c+1)$ values in total. Each row of the matrix ${v}$ is non-decreasing in the capacity value and changes only at a few capacity values: every other cell repeats the value of the cell on its left.

    - This subsection describes a <strong>different implementation of the same DP algorithm</strong>. The recursive decomposition and the optimal substructure are the ones of formula $\eqref{eq:1}$: what changes is the data structure. Instead of a whole row of the matrix, only the pairs at which the row changes are stored, that is only the pairs that are actually obtained by a subset of items. These pairs are kept in a list, one list for each item.

    !!! chiave ""

        A <strong>state</strong> is a pair $(w,p)$, where $w$ is the total weight and $p$ is the total profit of a subset of items whose total weight does not exceed the knapsack capacity $c$.

    - The empty subset gives the state $(0,0)$. A subset of the items $\{1,2,\dots,j\}$ gives a state obtained by summing the weights and the profits of its items.

    - Two different subsets can give the same state. In this case the two subsets are interchangeable: both occupy the same weight in the knapsack and both give the same profit, and therefore it is enough to keep one state.

    - More generally, a state can be discarded whenever another state is at least as good in both components.

        !!! chiave ""

            Given two states $(w,p)$ and $(w',p')$ with $(w,p)\ne(w',p')$, the state $(w,p)$ <strong>dominates</strong> the state $(w',p')$ if

            $$
            w\le w' \qquad \textrm{and} \qquad p\ge p'.
            $$

            A state is <strong>non-dominated</strong> if no other state dominates it.

    - A dominated state can be discarded. Indeed, let $(w,p)$ dominate $(w',p')$ and let $S'$ be a subset of the remaining items that can be added to $(w',p')$ without exceeding the capacity. Since $w\le w'$, the same subset $S'$ can also be added to $(w,p)$, and since $p\ge p'$ the resulting total profit is not smaller. Therefore no optimal solution is lost.

        !!! chiave ""

            For any $j \in \{0,1,\dots,n\}$, let $L_j$ be the list of the non-dominated states of the KP subinstance given by:

            1. a knapsack of capacity $c$,

            2. a set $\{1,2,\dots,j\}$ of available items,

            3. for each item $h \in \{1,2,\dots,j\}$, a profit $p_h$ and a weight $w_h$.

            The states of $L_j$ are sorted by strictly increasing weight.

            The recursive formula to compute $L_j$ reads as follows:

            \begin{equation*}
            \label{eq:4}
            L_j= \left\{ \begin{array}{ll}
            \big\{(0,0)\big\} & \textrm{if $j=0$,}\\[2ex]
            \textrm{nd}\big(L_{j-1}\cup M_j\big) & \textrm{if $1\le j \le n$,}
            \end{array} \right. \tag{17.2}
            \end{equation*}

            where $\textrm{nd}(S)$ denotes the list of the non-dominated states of a set $S$ of states, and

            $$
            M_j=\big\{\,(w+w_j,\;p+p_j)\;:\;(w,p)\in L_{j-1},\ w+w_j\le c\,\big\}.
            $$

    - The recursive decomposition process of formula $\eqref{eq:4}$ generates at most $2$ <strong>independent subproblems</strong> for each state of $L_{j-1}$, corresponding to whether or not to select item $j$. If item $j$ is not selected, the state is unchanged and belongs to $L_{j-1}$. If item $j$ is selected, the state becomes $(w+w_j,p+p_j)$ and belongs to $M_j$; this option is available only when $w+w_j\le c$. Here, $L_0=\{(0,0)\}$ since the only subset of an empty set of items is the empty subset.

    - Hence, every non-dominated state reachable with the items $\{1,2,\dots,j\}$ is built by combining the chosen decision on item $j$ with a non-dominated state reachable with the items $\{1,2,\dots,j-1\}$.

        $\rightsquigarrow$ <strong>Optimal Substructure verified!</strong>

    - Different subsets of the items $\{1,2,\dots,j\}$ can give the same state, and a state can also be dominated by another one. In both cases a single state is kept in $L_j$, and all the subsets that lead to it are treated at once in the following iterations.

        $\rightsquigarrow$ <strong>Overlapping Subproblems verified!</strong>

    - The optimal value of the KP instance is the largest profit stored in the last list.

        !!! chiave ""

            The optimal value of the KP instance is

            \begin{equation*}
            \label{eq:5}
            \max \big\{\, p \;:\; (w,p)\in L_n \,\big\}. \tag{17.3}
            \end{equation*}

    - In a list of non-dominated states sorted by strictly increasing weight, the profits are also strictly increasing: if a state had a weight larger than another one and a profit not larger, it would be dominated. Therefore the maximum of formula $\eqref{eq:5}$ is the profit of the last state of $L_n$.

    - The list $L_j$ holds the information of the row $j$ of the matrix ${v}$ in compressed form:

        $$
        {v}[j][k]=\max\big\{\,p \;:\; (w,p)\in L_j,\ w\le k\,\big\} \qquad \forall k \in \{0,1,\dots,c\}.
        $$

        Every state $(w,p)$ of $L_j$ is a capacity value at which the row increases, and $p$ is the new value.

        <a id="box-28-texkp3graph"></a>

        !!! esempio "Example 17.9: The lists of states"

            We consider the KP instance of <span style="color:#1971c2">Example 1</span> with a knapsack of capacity $c=5$ and the following profits and weights:

            $$
            \begin{array}{l|rrr}
            \hline  & {j = 1} & {j = 2} & {j = 3} \\
            \hline {p_j} & {6} & {7} & {8} \\
            {w_j} & {2} & {3} & {3} \\
            \hline
            \end{array}
            $$

            Each shaded band collects the states of one list. An arc entering the band of $L_j$ corresponds to the decision taken on item $j$: a horizontal arc means that item $j$ is not selected, while a slanted arc means that item $j$ is selected. The thick arcs give the states of an optimal solution.

            ![Figure 4](../../img/dp-knapsack/fig04.svg){ .fig loading=lazy  }

            The two crossed states of the last band are dominated and are therefore discarded: $(3,7)$ is dominated by $(3,8)$ and $(5,13)$ is dominated by $(5,14)$. Selecting item $3$ from the states $(3,7)$ and $(5,13)$ of $L_2$ would give the total weights $6$ and $8$, which exceed the knapsack capacity $c=5$, and therefore no arc leaves these two states towards the states of $M_3$.

    - The lists are computed for increasing values of $j \in \{1,2,\dots,n\}$, starting from $L_0=\{(0,0)\}$: each list $L_j$ is computed from the already-computed list $L_{j-1}$, until the list $L_n$ is obtained.

    - The list $L_{j-1}$ and the list $M_j$ are both sorted by increasing weight, because $M_j$ is obtained from $L_{j-1}$ by adding the same weight $w_j$ to every state. Therefore the union of formula $\eqref{eq:4}$ is computed by scanning the two lists at the same time, as in the merge of two sorted lists.

    - To describe the scanning order we use the following convention.

        !!! chiave ""

            The state $(w,p)$ <strong>precedes</strong> the state $(w',p')$ if

            $$
            w<w' \qquad \textrm{or} \qquad \textrm{($w=w'$ and $p>p'$)}.
            $$

        - If the states are scanned in this order, a state is non-dominated if and only if its profit is strictly larger than the largest profit of the states already scanned. Indeed, every state already scanned has a weight not larger, and therefore it dominates the current state as soon as its profit is not smaller.

        This is the pseudo-code of the <strong>DP algorithm using lists</strong>:

        !!! algoritmo "Algorithm: DP\_Lists"

            <div class="pseudocodice" markdown="0"><div class="pc" style="--liv:0"><strong>Input:</strong> A KP instance given by the number <span class="arithmatex">\(n\)</span> of items, arrays <span class="arithmatex">\(p[1..n]\)</span> and <span class="arithmatex">\(w[1..n]\)</span> of item profits and weights, and the knapsack capacity <span class="arithmatex">\(c\)</span></div><div class="pc" style="--liv:0"><strong>Output:</strong> The optimal value of the KP instance</div><div class="pc" style="--liv:0"><span class="pc-n">1</span><strong>Function</strong> DP_Lists(<span class="arithmatex">\(n,p,w,c\)</span>)</div><div class="pc" style="--liv:1" id="box-29-kplist-a"><span class="pc-n">2</span><span class="arithmatex">\(L := \textnormal{new list containing the single state } (0,0)\)</span></div><div class="pc" style="--liv:1" id="box-30-kplist-b"><span class="pc-n">3</span><strong>for</strong> <span class="arithmatex">\(j := 1\)</span> <strong>to</strong> <span class="arithmatex">\(n\)</span>  <strong>do</strong></div><div class="pc" style="--liv:2" id="box-31-kplist-c"><span class="pc-n">4</span><span class="arithmatex">\(M := \textnormal{new empty list}\)</span></div><div class="pc" style="--liv:2" id="box-32-kplist-d"><span class="pc-n">5</span><strong>for</strong> <span class="arithmatex">\(h := 1\)</span> <strong>to</strong> <span class="arithmatex">\(|L|\)</span>  <strong>do</strong></div><div class="pc" style="--liv:3" id="box-33-kplist-e"><span class="pc-n">6</span><strong>if</strong> <span class="arithmatex">\(L[h].w + w[j] \le c\)</span>  <strong>then</strong></div><div class="pc" style="--liv:4"><span class="pc-n">7</span>append $(L[h].w + w[j],</div><div class="pc" style="--liv:4" id="box-34-kplist-f"><span class="pc-n">8</span>L[h].p + p[j])<span class="arithmatex">\(to\)</span>M$</div><div class="pc" style="--liv:3"><span class="pc-n">9</span><strong>end</strong></div><div class="pc" style="--liv:2"><span class="pc-n">10</span><strong>end</strong></div><div class="pc" style="--liv:2" id="box-35-kplist-g"><span class="pc-n">11</span><span class="arithmatex">\(L \leftarrow \textnormal{\tt Merge}(L,M)\)</span></div><div class="pc" style="--liv:1"><span class="pc-n">12</span><strong>end</strong></div><div class="pc" style="--liv:1" id="box-36-kplist-h"><span class="pc-n">13</span><strong>return</strong> <span class="arithmatex">\(L[|L|].p\)</span></div></div>

        This is the pseudo-code of the procedure that merges two lists and discards the dominated states:

        !!! algoritmo "Algorithm: Merge"

            <div class="pseudocodice" markdown="0"><div class="pc" style="--liv:0"><strong>Input:</strong> Two lists <span class="arithmatex">\(L\)</span> and <span class="arithmatex">\(M\)</span> of states, both sorted by increasing weight</div><div class="pc" style="--liv:0"><strong>Output:</strong> The list of the non-dominated states of <span class="arithmatex">\(L\cup M\)</span>, sorted by increasing weight</div><div class="pc" style="--liv:0"><span class="pc-n">1</span><strong>Function</strong> Merge(<span class="arithmatex">\(L,M\)</span>)</div><div class="pc" style="--liv:1" id="box-37-kpmrg-a"><span class="pc-n">2</span><span class="arithmatex">\(R := \textnormal{new empty list}\)</span></div><div class="pc" style="--liv:1" id="box-38-kpmrg-b"><span class="pc-n">3</span><span class="arithmatex">\(h := 1\)</span></div><div class="pc" style="--liv:1" id="box-39-kpmrg-c"><span class="pc-n">4</span><span class="arithmatex">\(k := 1\)</span></div><div class="pc" style="--liv:1" id="box-40-kpmrg-d"><span class="pc-n">5</span><span class="arithmatex">\(\pi := -1\)</span></div><div class="pc" style="--liv:1" id="box-41-kpmrg-e"><span class="pc-n">6</span><strong>while</strong> <span class="arithmatex">\(h \le |L|\)</span> <strong>or</strong> <span class="arithmatex">\(k \le |M|\)</span>  <strong>do</strong></div><div class="pc" style="--liv:2" id="box-42-kpmrg-f"><span class="pc-n">7</span><strong>if</strong> <span class="arithmatex">\(k>|M|\)</span> <strong>or</strong> (<span class="arithmatex">\(h\le |L|\)</span> <strong>and</strong> <span class="arithmatex">\(L[h]\)</span> precedes <span class="arithmatex">\(M[k]\)</span>)  <strong>then</strong></div><div class="pc" style="--liv:3" id="box-43-kpmrg-g"><span class="pc-n">8</span><span class="arithmatex">\((a,b) \leftarrow L[h]\)</span></div><div class="pc" style="--liv:3" id="box-44-kpmrg-h"><span class="pc-n">9</span><span class="arithmatex">\(h \leftarrow h+1\)</span></div><div class="pc" style="--liv:2"><span class="pc-n">10</span><strong>else</strong></div><div class="pc" style="--liv:3" id="box-45-kpmrg-i"><span class="pc-n">11</span><span class="arithmatex">\((a,b) \leftarrow M[k]\)</span></div><div class="pc" style="--liv:3" id="box-46-kpmrg-j"><span class="pc-n">12</span><span class="arithmatex">\(k \leftarrow k+1\)</span></div><div class="pc" style="--liv:2"><span class="pc-n">13</span><strong>end</strong></div><div class="pc" style="--liv:2" id="box-47-kpmrg-k"><span class="pc-n">14</span><strong>if</strong> <span class="arithmatex">\(b > \pi\)</span>  <strong>then</strong></div><div class="pc" style="--liv:3" id="box-48-kpmrg-l"><span class="pc-n">15</span>append <span class="arithmatex">\((a,b)\)</span> to <span class="arithmatex">\(R\)</span></div><div class="pc" style="--liv:3" id="box-49-kpmrg-m"><span class="pc-n">16</span><span class="arithmatex">\(\pi \leftarrow b\)</span></div><div class="pc" style="--liv:2"><span class="pc-n">17</span><strong>end</strong></div><div class="pc" style="--liv:1"><span class="pc-n">18</span><strong>end</strong></div><div class="pc" style="--liv:1" id="box-50-kpmrg-n"><span class="pc-n">19</span><strong>return</strong> <span class="arithmatex">\(R\)</span></div></div>

        - The list $L$ is the <strong>lookup table</strong>: at the end of the iteration for item $j$, it stores the list $L_j$.

        - The list $L$ is initialized with the single state $(0,0)$, which is the list $L_0$.

        - The outer loop, over items $j \in \{1,2,\dots,n\}$, computes one list for each item.

        - The inner loop builds the list $M$ of the states obtained by selecting item $j$. A state is added to $M$ only when the resulting total weight does not exceed the knapsack capacity.

        - The procedure <code>Merge</code> scans the two lists at the same time and keeps a state only when its profit is strictly larger than the largest profit already appended, which is stored in the auxiliary variable $\pi$. The initial value $\pi=-1$ guarantees that the first scanned state is always appended.

        - Since the states of $L$ are sorted by strictly increasing weight and strictly increasing profit, the largest profit is the one of the last state. Therefore the optimal value of the KP instance is returned as $L[|L|].p$.

        <a id="box-51-texkp3bu"></a>

        !!! esempio "Example 17.10: Execution of the DP algorithm"

            We consider the KP instance of <span style="color:#1971c2">Example 1</span> with a knapsack of capacity $c=5$ and the following profits and weights:

            $$
            \begin{array}{l|rrr}
            \hline  & {j = 1} & {j = 2} & {j = 3} \\
            \hline {p_j} & {6} & {7} & {8} \\
            {w_j} & {2} & {3} & {3} \\
            \hline
            \end{array}
            $$

            For each item $j$, the table shows the list $M_j$ of the states obtained by selecting item $j$ and the resulting list $L_j$.

            $$
            \begin{array}{c|l|l}
            \hline {j} & {M_j} & {L_j} \\
            \hline {0} & {-} & {\{(0,0)\}} \\
            {1} & {\{(2,6)\}} & {\{(0,0),(2,6)\}} \\
            {2} & {\{(3,7),(5,13)\}} & {\{(0,0),(2,6),(3,7),(5,13)\}} \\
            {3} & {\{(3,8),(5,14)\}} & {\{(0,0),(2,6),(3,8),(5,14)\}} \\
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
            <td><span class="arithmatex">\((2,6)\)</span></td>
            <td><span class="arithmatex">\(M_1\)</span></td>
            <td><span class="arithmatex">\(6>\pi=0\)</span>: append</td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\((0,0)\)</span></td>
            <td><span class="arithmatex">\(L_{1}\)</span></td>
            <td><span class="arithmatex">\(0>\pi=-1\)</span>: append</td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\((2,6)\)</span></td>
            <td><span class="arithmatex">\(L_{1}\)</span></td>
            <td><span class="arithmatex">\(6>\pi=0\)</span>: append</td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\((3,7)\)</span></td>
            <td><span class="arithmatex">\(M_2\)</span></td>
            <td><span class="arithmatex">\(7>\pi=6\)</span>: append</td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\((5,13)\)</span></td>
            <td><span class="arithmatex">\(M_2\)</span></td>
            <td><span class="arithmatex">\(13>\pi=7\)</span>: append</td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(3\)</span></td>
            <td><span class="arithmatex">\((0,0)\)</span></td>
            <td><span class="arithmatex">\(L_{2}\)</span></td>
            <td><span class="arithmatex">\(0>\pi=-1\)</span>: append</td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(3\)</span></td>
            <td><span class="arithmatex">\((2,6)\)</span></td>
            <td><span class="arithmatex">\(L_{2}\)</span></td>
            <td><span class="arithmatex">\(6>\pi=0\)</span>: append</td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(3\)</span></td>
            <td><span class="arithmatex">\((3,8)\)</span></td>
            <td><span class="arithmatex">\(M_3\)</span></td>
            <td><span class="arithmatex">\(8>\pi=6\)</span>: append</td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(3\)</span></td>
            <td><span class="arithmatex">\((3,7)\)</span></td>
            <td><span class="arithmatex">\(L_{2}\)</span></td>
            <td><span class="arithmatex">\(7\le\pi=8\)</span>: discard (dominated)</td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(3\)</span></td>
            <td><span class="arithmatex">\((5,14)\)</span></td>
            <td><span class="arithmatex">\(M_3\)</span></td>
            <td><span class="arithmatex">\(14>\pi=8\)</span>: append</td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(3\)</span></td>
            <td><span class="arithmatex">\((5,13)\)</span></td>
            <td><span class="arithmatex">\(L_{2}\)</span></td>
            <td><span class="arithmatex">\(13\le\pi=14\)</span>: discard (dominated)</td>
            </tr>
            </table></div>

            The last state of $L_3$ is $(5,14)$, and therefore the optimal value of the KP instance is $14$.

    - After the execution of the DP algorithm, the list $L$ contains the non-dominated states $L_n$ of the KP instance, sorted by strictly increasing weight and strictly increasing profit.

- <u>Step 2</u>: computation of an optimal solution

    - To compute an optimal solution, i.e., the binary vector $(x_1,x_2,\dots,x_n)$, it is necessary to store some additional information. The list $L_n$ alone gives the optimal value, but it does not say which items produce the state that attains it.

    - For each item $j$ and each position $h \in \{1,2,\dots,|L_j|\}$, in addition to the state $L_j[h]$, we store two values:

        - ${\sigma}_j[h]$, which is equal to $1$ if item $j$ is selected in the state $L_j[h]$, and is equal to $0$ otherwise;

        - ${\rho}_j[h]$, which is the position in $L_{j-1}$ of the state from which $L_j[h]$ is obtained.

    - A state taken from $L_{j-1}$ gives ${\sigma}_j[h]=0$, while a state taken from $M_j$ gives ${\sigma}_j[h]=1$. In both cases ${\rho}_j[h]$ is the position of the state of $L_{j-1}$ that generated it.

    - The DP algorithm must also keep all the lists $L_0,L_1,\dots,L_n$, and not only the last one, because the reconstruction goes backwards through them.

        <a id="box-52-texkp3info"></a>

        !!! esempio "Example 17.11: Computation of the additional information"

            We consider the KP instance of <span style="color:#1971c2">Example 1</span>. For each item $j$ and each position $h$, the table shows the state $L_j[h]$ and the stored values ${\sigma}_j[h]$ and ${\rho}_j[h]$.

            $$
            \begin{array}{c|c|c|c|c}
            \hline {j} & {h} & {L_j[h]} & {\sigma_j[h]} & {\rho_j[h]} \\
            \hline {1} & {1} & {(0,0)} & {0} & {1} \\
            {1} & {2} & {(2,6)} & {1} & {1} \\
            \hline {2} & {1} & {(0,0)} & {0} & {1} \\
            {2} & {2} & {(2,6)} & {0} & {2} \\
            {2} & {3} & {(3,7)} & {1} & {1} \\
            {2} & {4} & {(5,13)} & {1} & {2} \\
            \hline {3} & {1} & {(0,0)} & {0} & {1} \\
            {3} & {2} & {(2,6)} & {0} & {2} \\
            {3} & {3} & {(3,8)} & {1} & {1} \\
            {3} & {4} & {(5,14)} & {1} & {2} \\
            \hline
            \end{array}
            $$

            For instance, the state $L_3[4]=(5,14)$ has ${\sigma}_3[4]=1$ and ${\rho}_3[4]=2$: it is obtained by selecting item $3$ from the state $L_2[2]=(2,6)$, since $2+w_3=2+3=5$ and $6+p_3=6+8=14$.

    - Once the lists and the stored values have been computed, an optimal solution is reconstructed by scanning the items from $j=n$ down to $j=1$, starting from the last position $h=|L_n|$, which holds the state of largest profit:

        $$
        \begin{array}{ll}
        x_j \leftarrow {\sigma}_j[h],\quad h \leftarrow {\rho}_j[h] & \textrm{for $j=n,n-1,\dots,1$.}
        \end{array}
        $$

        This yields the vector $(x_1,x_2,\dots,x_n)$, where $x_j$ is equal to $1$ if item $j$ is selected in an optimal solution, and $0$ otherwise.

        !!! algoritmo "Algorithm: DP\_Lists\_Reconstruct"

            <div class="pseudocodice" markdown="0"><div class="pc" style="--liv:0"><strong>Input:</strong> The number <span class="arithmatex">\(n\)</span> of items, the lists <span class="arithmatex">\(L_0,L_1,\dots,L_n\)</span>, and the stored values <span class="arithmatex">\({\sigma}\)</span> and <span class="arithmatex">\({\rho}\)</span></div><div class="pc" style="--liv:0"><strong>Output:</strong> An optimal solution of the KP instance</div><div class="pc" style="--liv:0"><span class="pc-n">1</span><strong>Function</strong> DP_Lists_Reconstruct(<span class="arithmatex">\(n,L,\sigma,\rho\)</span>)</div><div class="pc" style="--liv:1"><span class="pc-n">2</span><span class="arithmatex">\(x := \textnormal{new array}[1..n]\)</span></div><div class="pc" style="--liv:1"><span class="pc-n">3</span><strong>for</strong> <span class="arithmatex">\(j := 1\)</span> <strong>to</strong> <span class="arithmatex">\(n\)</span> <strong>do</strong></div><div class="pc" style="--liv:2"><span class="pc-n">4</span><span class="arithmatex">\(x[j] \leftarrow 0\)</span></div><div class="pc" style="--liv:1"><span class="pc-n">5</span><strong>end</strong></div><div class="pc" style="--liv:1"><span class="pc-n">6</span><span class="arithmatex">\(h := |L_n|\)</span></div><div class="pc" style="--liv:1"><span class="pc-n">7</span><strong>for</strong> <span class="arithmatex">\(j := n\)</span> <strong>to</strong> <span class="arithmatex">\(1\)</span> <strong>do</strong></div><div class="pc" style="--liv:2"><span class="pc-n">8</span><span class="arithmatex">\(x[j] \leftarrow {\sigma}_j[h]\)</span></div><div class="pc" style="--liv:2"><span class="pc-n">9</span><span class="arithmatex">\(h \leftarrow {\rho}_j[h]\)</span></div><div class="pc" style="--liv:1"><span class="pc-n">10</span><strong>end</strong></div><div class="pc" style="--liv:1"><span class="pc-n">11</span><strong>return</strong> <span class="arithmatex">\(x\)</span></div></div>

        <a id="box-53-texkp3sol"></a>

        !!! esempio "Example 17.12: Computing an optimal solution"

            After the execution of the DP algorithm on the instance of <span style="color:#1971c2">Example 1</span>, the last list is

            $$
            L_3=\big\{(0,0),(2,6),(3,8),(5,14)\big\}
            $$

            and the optimal value is the profit of its last state, that is $14$.

            We can reconstruct an optimal solution by starting from $j=3$ and $h=|L_3|=4$ as follows:

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
            <td><span class="arithmatex">\((5,14)\)</span></td>
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
            <td><span class="arithmatex">\((2,6)\)</span></td>
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
            <td><span class="arithmatex">\((2,6)\)</span></td>
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

            is an optimal solution. The corresponding optimal value is $6+8=14$.

## 17.2.3 Number of steps

- Let $S(n,c)$ denote the number of steps executed by <code>DP\_Lists</code> in the worst case, where $n$ is the number of items and $c$ is the knapsack capacity.

- The states of a list have strictly increasing weights, and every weight belongs to $\{0,1,\dots,c\}$: therefore $|L_j|\le c+1$ for all $j \in \{0,1,\dots,n\}$, and $|M_j|\le|L_{j-1}|$.

- For each item, <code>DP\_Lists</code> scans $L_{j-1}$ once to build $M_j$ and then calls <code>Merge</code>, which scans $|L_{j-1}|+|M_j|\le 2(c+1)$ states and performs a constant number of operations for each of them. Therefore the number of steps executed for each item is $\Theta(c)$ in the worst case, and

    $$
    S(n,c)=\Theta(nc).
    $$

- The three implementations have the same order of growth, but they do not store the same amount of information. The matrix ${v}$ always has $(n+1)(c+1)$ cells, while the lists contain only the states that are actually reachable: a list reaches the bound $c+1$ only when every capacity value is the total weight of a subset of the items. On the KP instance of <span style="color:#1971c2">Example 1</span> the lists contain $1$, $2$, $4$, and $4$ states, against the $24$ cells of the matrix ${v}$.

- The list $L_j$ also satisfies $|L_j|\le 2^j$, since the items $\{1,2,\dots,j\}$ have $2^j$ subsets. Therefore

    $$
    |L_j|\le \min\big\{2^j,\,c+1\big\},
    $$

    and the number of states stays small while $j$ is small, whatever the knapsack capacity.

---

**Next:** [17.3 A second DP algorithm](a-second-dp-algorithm.md)
