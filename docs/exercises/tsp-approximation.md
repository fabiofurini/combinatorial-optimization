---
title: "Exercises · Approximation for the metric TSP"
---

# Exercises · Approximation for the metric TSP

<div class="info-capitolo" markdown>

**Exercises · Chapter 37** · each solution opens with a click · [:material-book-open-variant: Chapter 37: Metric TSP](../approximation-algorithms/tsp-approximation.md) · [:material-file-pdf-box: Exercises, volume 5 (PDF)](../pdf/exercises-5-approximation-algorithms.pdf)

</div>

<a id="esercizio-37-1"></a>

!!! esercizio "Exercise 37.1: Metric TSP approximation 1"

    We consider a set $\mathscr{V}=\{1,\dots,6\}$ of $6$ cities with coordinates $1{:}\,(3,4)$, $2{:}\,(6,1)$, $3{:}\,(3,8)$, $4{:}\,(8,8)$, $5{:}\,(0,4)$, $6{:}\,(8,0)$ and distances equal to the Euclidean distances rounded to the nearest integer (the instance is metric):

    $$
    \begin{array}{c|cccccc}
    \hline {d_{ij}} & {1} & {2} & {3} & {4} & {5} & {6} \\
    \hline {1} & --- & {4} & {4} & {6} & {3} & {6} \\
    {2} & {4} & --- & {8} & {7} & {7} & {2} \\
    {3} & {4} & {8} & --- & {5} & {5} & {9} \\
    {4} & {6} & {7} & {5} & --- & {9} & {8} \\
    {5} & {3} & {7} & {5} & {9} & --- & {9} \\
    {6} & {6} & {2} & {9} & {8} & {9} & --- \\
    \hline
    \end{array}
    $$

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
        \{\{1,4\},\{5,6\}\}{:}\ 6+9=15,\quad
        \{\{1,5\},\{4,6\}\}{:}\ 3+8=11,\quad
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

        \begin{gather*}
        DT(I)=32\le 2\,d(T)=36\le 2\,z(I)=54,\\
        CH(I)=27\le d(T)+d(M)=29\le\frac32\,z(I)=\frac{81}{2}.
        \end{gather*}

<a id="esercizio-37-2"></a>

!!! esercizio "Exercise 37.2: Metric TSP approximation 2"

    We consider a set $\mathscr{V}=\{1,\dots,6\}$ of $6$ cities with coordinates $1{:}\,(2,4)$, $2{:}\,(6,0)$, $3{:}\,(7,3)$, $4{:}\,(0,7)$, $5{:}\,(0,1)$, $6{:}\,(2,1)$ and distances equal to the Euclidean distances rounded to the nearest integer (the instance is metric):

    $$
    \begin{array}{c|cccccc}
    \hline {d_{ij}} & {1} & {2} & {3} & {4} & {5} & {6} \\
    \hline {1} & --- & {6} & {5} & {4} & {4} & {3} \\
    {2} & {6} & --- & {3} & {9} & {6} & {4} \\
    {3} & {5} & {3} & --- & {8} & {7} & {5} \\
    {4} & {4} & {9} & {8} & --- & {6} & {6} \\
    {5} & {4} & {6} & {7} & {6} & --- & {2} \\
    {6} & {3} & {4} & {5} & {6} & {2} & --- \\
    \hline
    \end{array}
    $$

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
        \{\{3,4\},\{5,6\}\}{:}\ 8+2=10,\quad
        \{\{3,5\},\{4,6\}\}{:}\ 7+6=13,\quad
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

<a id="esercizio-37-3"></a>

!!! esercizio "Exercise 37.3: Metric TSP approximation 3"

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

        $$
        \begin{array}{c|ccccc}
        \hline {I_{G_1}} & {1} & {2} & {3} & {4} & {5} \\
        \hline {1} & --- & {1} & {1} & {11} & {1} \\
        {2} & {1} & --- & {1} & {11} & {11} \\
        {3} & {1} & {1} & --- & {1} & {11} \\
        {4} & {11} & {11} & {1} & --- & {1} \\
        {5} & {1} & {11} & {11} & {1} & --- \\
        \hline
        \end{array}
        $$

        $$
        \begin{array}{c|ccccc}
        \hline {I_{G_2}} & {1} & {2} & {3} & {4} & {5} \\
        \hline {1} & --- & {11} & {1} & {1} & {1} \\
        {2} & {11} & --- & {1} & {1} & {1} \\
        {3} & {1} & {1} & --- & {11} & {11} \\
        {4} & {1} & {1} & {11} & --- & {11} \\
        {5} & {1} & {1} & {11} & {11} & --- \\
        \hline
        \end{array}
        $$

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
