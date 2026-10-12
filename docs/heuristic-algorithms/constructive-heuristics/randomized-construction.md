---
title: "Randomized construction"
---

# 29.9 Randomized construction { #sez-sec-RCL }

<div class="info-capitolo" markdown>

**Part 4 · Heuristic algorithms · Chapter 29** · [:material-book-open-variant: Chapter 29: Constructive](index.md) · [:material-file-pdf-box: Lecture notes, volume 4 (PDF)](../../pdf/lecture-notes-4-heuristic-algorithms.pdf) · [:material-pencil: Exercises: Constructive](../../exercises/constructive-heuristics.md) · [:material-gesture-tap: App: Bin packing heuristics](../../lab/bin-packing-heuristics.md) · [:material-gesture-tap: App: List scheduling and LPT](../../lab/list-scheduling-lpt.md)

</div>

- A greedy heuristic is deterministic: run twice on the same instance, it returns the same solution. The multi-start $NN$ obtains different solutions by changing the starting city, but the number of starts is limited to $n$. A more flexible way to obtain many different, and still good, solutions is to <strong>randomize the choice</strong>: at each step, instead of the best candidate, choose at random one of the <em>good</em> candidates.

- The good candidates form the <strong>restricted candidate list</strong> (RCL). For a minimization criterion with values $g(q)$ of the candidates $q$, let $g^{\min}$ and $g^{\max}$ be the smallest and the largest value; the <em>value-based</em> RCL with parameter $\alpha\in[0,1]$ is

!!! chiave ""

    $$
    RCL \;=\; \Big\{\, q \;:\; g(q) \;\le\; g^{\min} + \alpha\,\big(g^{\max}-g^{\min}\big) \Big\} .
    $$

    With $\alpha=0$ the RCL contains only the best candidates, and the construction is greedy (with random tie-breaking); with $\alpha=1$ it contains all the candidates, and the construction is purely random.

- An alternative is the <em>cardinality-based</em> RCL, made of the $k$ best candidates for a fixed $k$. Randomized construction is the first ingredient of the metaheuristic GRASP (T.A. Feo, M.G.C. Resende, <em>Greedy randomized adaptive search procedures</em>, Journal of Global Optimization 6 (1995) 109–133).

- <strong>Random numbers.</strong> To make examples and exercises reproducible, the notes on heuristic algorithms use the <em>minimal standard</em> generator of Park and Miller, which produces a sequence of numbers $u_1,u_2,\dots$ in $(0,1)$ from an integer <strong>seed</strong>:

!!! chiave ""

    $$
    seed \;\leftarrow\; (16807\cdot seed) \bmod 2147483647, \qquad\qquad u \;=\; \frac{seed}{2147483647} .
    $$

- The modulus is $2^{31}-1$, a prime number; with $64$-bit integers the product never overflows. The same seed gives the same sequence on every computer and in every programming language. A candidate is drawn from an RCL with $|RCL|$ elements, listed by increasing index, by taking the element in position $\lfloor u\cdot|RCL|\rfloor+1$; a random number is used only when $|RCL|\ge 2$.

!!! chiave ""

    The <em>randomized nearest neighbour algorithm</em> (denoted by $RNN_\alpha$) is a constructive heuristic for the TSP. Starting from city $s$, at each step it builds the RCL of the unvisited cities whose distance from the last city is at most $d^{\min}+\alpha\,(d^{\max}-d^{\min})$, and appends a city drawn uniformly at random from the RCL.

!!! algoritmo "Algorithm: Randomized Nearest Neighbour"

    <div class="pseudocodice" markdown="0"><div class="pc" style="--liv:0"><strong>Input:</strong> TSP instance with <span class="arithmatex">\(n\)</span> cities, distances <span class="arithmatex">\(d[1..n][1..n]\)</span>; starting city <span class="arithmatex">\(s\)</span>; <span class="arithmatex">\(\alpha\in[0,1]\)</span>; <span class="arithmatex">\(seed\)</span></div><div class="pc" style="--liv:0"><strong>Output:</strong> Tour <span class="arithmatex">\(\sigma[1..n]\)</span></div><div class="pc" style="--liv:0"><span class="pc-n">1</span><strong>Function</strong> RandomizedNN(<span class="arithmatex">\(n, d, s, \alpha, seed\)</span>)</div><div class="pc" style="--liv:1"><span class="pc-n">2</span><span class="arithmatex">\(\sigma[1] \leftarrow s\)</span>, <span class="arithmatex">\(visited := \{s\}\)</span></div><div class="pc" style="--liv:1"><span class="pc-n">3</span><strong>for</strong> <span class="arithmatex">\(len := 2\)</span> <strong>to</strong> <span class="arithmatex">\(n\)</span> <strong>do</strong></div><div class="pc" style="--liv:2"><span class="pc-n">4</span><span class="arithmatex">\(last := \sigma[len-1]\)</span></div><div class="pc" style="--liv:2"><span class="pc-n">5</span><span class="arithmatex">\(d^{\min} := \min_{j\notin visited} d[last][j]\)</span>, <span class="arithmatex">\(d^{\max} := \max_{j\notin visited} d[last][j]\)</span></div><div class="pc" style="--liv:2"><span class="pc-n">6</span><span class="arithmatex">\(RCL := \{\, j\notin visited : d[last][j] \le d^{\min}+\alpha\,(d^{\max}-d^{\min})\,\}\)</span> <span class="pc-com">▹ by index</span></div><div class="pc" style="--liv:2"><span class="pc-n">7</span><strong>if</strong> <span class="arithmatex">\(|RCL| \ge 2\)</span> <strong>then</strong></div><div class="pc" style="--liv:3"><span class="pc-n">8</span><span class="arithmatex">\(u :=\)</span> ParkMiller(<span class="arithmatex">\(seed\)</span>)
    <span class="arithmatex">\(k :=\)</span> the element in position <span class="arithmatex">\(\lfloor u\cdot|RCL|\rfloor+1\)</span> of <span class="arithmatex">\(RCL\)</span> <span class="pc-com">▹ random number in <span class="arithmatex">\((0,1)\)</span></span></div><div class="pc" style="--liv:2"><span class="pc-n">9</span><strong>else</strong></div><div class="pc" style="--liv:3"><span class="pc-n">10</span><span class="arithmatex">\(k :=\)</span> the only element of <span class="arithmatex">\(RCL\)</span></div><div class="pc" style="--liv:2"><span class="pc-n">11</span><strong>end</strong></div><div class="pc" style="--liv:2"><span class="pc-n">12</span><span class="arithmatex">\(\sigma[len] \leftarrow k\)</span>, <span class="arithmatex">\(visited \leftarrow visited\cup\{k\}\)</span></div><div class="pc" style="--liv:1"><span class="pc-n">13</span><strong>end</strong></div><div class="pc" style="--liv:1"><span class="pc-n">14</span><strong>return</strong> <span class="arithmatex">\(\sigma\)</span></div></div>

- Repeating the construction with the same generator — the seed is <em>not</em> reset between two runs — gives different tours; the best one is kept. The parameter $\alpha$ balances quality and variety: a small $\alpha$ gives tours close to the $NN$ tour, a large $\alpha$ gives very different but usually poor tours.

<a id="box-21-ex-rnn"></a>

!!! esempio "Example 29.15: $RNN_{0.3}$ on the TSP reference instance"

    We run $RNN_\alpha$ four times from city $1$, with $\alpha=0.3$ and initial seed $1$. The generator gives

    $$
    \begin{array}{ccccccccc}
    \hline {u_1} & {u_2} & {u_3} & {u_4} & {u_5} & {u_6} & {u_7} & {u_8} & {u_9} \\
    \hline {0.0000} & {0.1315} & {0.7556} & {0.4587} & {0.5328} & {0.2190} & {0.0470} & {0.6789} & {0.6793} \\
    \hline
    \end{array}
    $$

    ($u_1=\frac{16807}{2147483647}\approx 0.0000078$). From city $1$ the distances to $2,3,4,5$ are $5,2,2,9$, so the threshold is $2+0.3\cdot(9-2)=4.1$ and $RCL=\{3,4\}$.

    <strong>Run 1.</strong> $u_1$: position $\lfloor 0.0000\cdot 2\rfloor+1=1$, city $3$. From $3$ the distances to $2,4,5$ are $4,4,7$, threshold $4+0.3\cdot 3=4.9$, $RCL=\{2,4\}$; $u_2$: position $1$, city $2$. From $2$ the distances to $4,5$ are $3,4$, threshold $3.3$, $RCL=\{4\}$: city $4$, then city $5$. Tour $(1,3,2,4,5)$, $L=25$: the $NN$ tour.

    <strong>Run 2.</strong> $u_3$: position $\lfloor 0.7556\cdot 2\rfloor+1=2$, city $4$. From $4$ the distances to $2,3,5$ are $3,4,7$, threshold $3+0.3\cdot 4=4.2$, $RCL=\{2,3\}$; $u_4$: position $1$, city $2$. From $2$ the distances to $3,5$ are $4,4$: $d^{\min}=d^{\max}=4$ and $RCL=\{3,5\}$; $u_5$: position $\lfloor 0.5328\cdot 2\rfloor+1=2$, city $5$; then city $3$. Tour $(1,4,2,5,3)$, $L=18=z(I)$.

    <strong>Run 3.</strong> $u_6$: city $3$; $u_7$: city $2$; then cities $4$ and $5$. Tour $(1,3,2,4,5)$, $L=25$.

    <strong>Run 4.</strong> $u_8$: city $4$; $RCL=\{2,3\}$ and $u_9$: position $2$, city $3$. From $3$ the distances to $2,5$ are $4,7$, threshold $4.9$, $RCL=\{2\}$: city $2$, then city $5$. Tour $(1,4,3,2,5)$, $L=2+4+4+4+9=23$.

    The four runs give $25,18,25,23$: the second one finds the optimal tour, which $NN$ from city $1$ misses. The randomization has turned a single deterministic answer into a small search.

---

**Next:** [29.10 Look-ahead and regret](look-ahead-and-regret.md)
