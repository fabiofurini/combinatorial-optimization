---
title: "C++ implementation"
---

# 30.15 <code>C++</code> implementation { #sez-sec-code }

<div class="info-capitolo" markdown>

**Part 4 · Heuristic algorithms · Chapter 30** · [:material-book-open-variant: Chapter 30: Local search](index.md) · [:material-file-pdf-box: Lecture notes, volume 4 (PDF)](../../pdf/lecture-notes-4-heuristic-algorithms.pdf) · [:material-pencil: Exercises: Local search](../../exercises/local-search.md) · [:material-gesture-tap: App: TSP: nearest neighbour and 2-opt](../../lab/tsp-nn-2opt.md)

</div>

- The code is in the folder <code>LOCAL\_SEARCH\_CODE</code>: one function per file in <code>src/</code>, the declarations in <code>src/LocalSearch.h</code>. The command <code>make</code> builds the program, and <code>make test</code> runs all the examples of these notes and all the instances of the exercises, and compares the results (the values along every trajectory, and the statistics of the experiments) with those computed by an independent engine.

- In this section we use 0-based indexing for items, jobs, machines, bins and cities, and city $0$ stays in the first position of the tour. The algorithmic logic is unchanged. The constants <code>FIRST</code>, <code>BEST</code> select the rule, <code>CMAX</code>, <code>SQ</code>, <code>NB</code> the objective; <code>Vec</code> is <code>std::vector&lt;int&gt;</code> and <code>Mat</code> a vector of <code>Vec</code>.

- The generic <strong>local search</strong> and the <strong>variable neighbourhood descent</strong> receive the steps as functions without arguments, which act on the current solution:

??? codice "LocalSearch.cpp"

    ```cpp
    // generic local search: Step looks for an improving neighbour of the current solution
    // and, if it finds one, moves to it and returns true
    // the function returns the number of moves performed

    int LocalSearch(const std::function<bool()>& Step)
    {
        int moves = 0;                      // number of moves performed
        while (Step())                      // an improving neighbour was found and accepted
        {
            moves = moves + 1;
        }
        return moves;                       // the current solution is a local optimum
    }
    ```

??? codice "VND.cpp"

    ```cpp
    // variable neighbourhood descent: Steps[0], ..., Steps[K-1] explore the neighbourhoods N_1, ..., N_K
    // after every improving move the search restarts from the first neighbourhood
    // the function returns the number of moves performed

    int VND(const std::vector<std::function<bool()>>& Steps)
    {
        int K = (int)Steps.size();          // number of neighbourhoods
        int k = 0;                          // current neighbourhood
        int moves = 0;                      // number of moves performed
        while (k < K)
        {
            if (Steps[k]())                 // improving neighbour found in N_k, and accepted
            {
                moves = moves + 1;
                k = 0;                      // back to the first neighbourhood
            }
            else
            {
                k = k + 1;                  // local optimum for N_k: try the next neighbourhood
            }
        }
        return moves;                       // local optimum for all the K neighbourhoods
    }
    ```

- For example, the 2-opt local search on a tour <code>pi</code>, and $VND$ with 2-opt and Or-opt, are

```python
LocalSearch([&]() { return TwoOptStep(n, d, pi, BEST); });
VND({ [&]() { return TwoOptStep(n, d, pi, FIRST); },
      [&]() { return OrOptStep(n, d, pi, FIRST); } });
```

- The <strong>2-opt step</strong>:

??? codice "TwoOptStep.cpp"

    ```cpp
    // one step of the 2-opt local search on the tour pi[0..n-1] (pi[0] never moves)
    // the move (i, j) removes the edges {pi[i], pi[i+1]} and {pi[j], pi[j+1]},
    // reverses the path pi[i+1..j] and adds the edges {pi[i], pi[j]} and {pi[i+1], pi[j+1]}

    bool TwoOptStep(int n, const Mat& d, Vec& pi, int rule)
    {
        int bestDelta = 0;                  // best length change found so far
        int bi = -1, bj = -1;               // best move found so far
        bool stop = false;
        for (int i = 0; i <= n - 3 && !stop; ++i)
        {
            for (int j = i + 2; j <= n - 1; ++j)
            {
                if (i == 0 && j == n - 1) continue;          // the two edges are adjacent
                int u1 = pi[i], v1 = pi[i + 1];               // first removed edge
                int u2 = pi[j], v2 = pi[(j + 1) % n];         // second removed edge
                int delta = d[u1][u2] + d[v1][v2] - d[u1][v1] - d[u2][v2];
                if (delta < bestDelta)
                {
                    bestDelta = delta; bi = i; bj = j;        // improving move
                    if (rule == FIRST) { stop = true; break; }
                }
            }
        }
        if (bi == -1) return false;         // no improving move: local optimum

        for (int a = bi + 1, b = bj; a < b; ++a, --b)        // reverse pi[bi+1..bj]
        {
            int tmp = pi[a]; pi[a] = pi[b]; pi[b] = tmp;
        }
        return true;
    }
    ```

- The <strong>Or-opt step</strong>:

??? codice "OrOptStep.cpp"

    ```cpp
    // one step of the Or-opt local search on the tour pi[0..n-1] (pi[0] never moves)
    // the move (l, i, k) takes the segment pi[i..i+l-1] of l = 1, 2, 3 consecutive cities
    // and inserts it, with the same orientation, between pi[k] and pi[k+1]

    bool OrOptStep(int n, const Mat& d, Vec& pi, int rule)
    {
        int bestDelta = 0;                  // best length change found so far
        int bl = -1, bi = -1, bk = -1;      // best move found so far
        bool stop = false;
        for (int l = 1; l <= 3 && !stop; ++l)
        {
            for (int i = 1; i + l - 1 <= n - 1 && !stop; ++i)
            {
                int p = pi[i - 1], s1 = pi[i];                // predecessor and first city of the segment
                int sl = pi[i + l - 1], q = pi[(i + l) % n];  // last city of the segment and successor
                for (int k = 0; k <= n - 1; ++k)
                {
                    if (k >= i - 1 && k <= i + l - 1) continue;   // same position, or inside the segment
                    int a = pi[k], b = pi[(k + 1) % n];           // edge where the segment is inserted
                    int delta = d[p][q] + d[a][s1] + d[sl][b] - d[p][s1] - d[sl][q] - d[a][b];
                    if (delta < bestDelta)
                    {
                        bestDelta = delta; bl = l; bi = i; bk = k;   // improving move
                        if (rule == FIRST) { stop = true; break; }
                    }
                }
            }
        }
        if (bl == -1) return false;         // no improving move: local optimum

        Vec newpi;                          // the new tour
        for (int k = 0; k <= n - 1; ++k)
        {
            if (k >= bi && k <= bi + bl - 1) continue;        // the segment is copied after pi[bk]
            newpi.push_back(pi[k]);
            if (k == bk)
                for (int r = bi; r <= bi + bl - 1; ++r) newpi.push_back(pi[r]);
        }
        pi = newpi;
        return true;
    }
    ```

- The change $F$ of the objective of $P\,||\,C_{\max}$, for the makespan and for the sum of the squared loads, and the <strong>move</strong> and <strong>swap steps</strong> for $P\,||\,C_{\max}$:

??? codice "ObjectiveChange.cpp"

    ```cpp
    // change of the objective of P||Cmax when the time delta is transferred from machine a to machine b
    // (a move transfers delta = t_j, a swap transfers delta = t_j - t_k)
    // obj = CMAX: change of the makespan; obj = SQ: change of the sum of the squared loads

    int ObjectiveChange(int m, const Vec& L, int a, int b, int delta, int obj)
    {
        if (obj == SQ)
            return 2 * delta * (L[b] - L[a] + delta);

        int Cmax = 0, newC = 0;                             // makespan before and after
        for (int q = 0; q < m; ++q)
        {
            if (L[q] > Cmax) Cmax = L[q];
            int newL = L[q];
            if (q == a) newL = L[q] - delta;
            if (q == b) newL = L[q] + delta;
            if (newL > newC) newC = newL;
        }
        return newC - Cmax;
    }
    ```

??? codice "PCmaxMoveStep.cpp"

    ```cpp
    // one step of the move local search for P||Cmax
    // mach[j] is the machine of job j, L[h] the load of machine h
    // obj = CMAX (makespan) or SQ (sum of the squared loads); both are minimized

    bool PCmaxMoveStep(int n, int m, const Vec& t, Vec& mach, Vec& L, int obj, int rule)
    {
        int bestDelta = 0;                                  // best change of the objective found so far
        int bj = -1, bh = -1;                               // best move found so far
        bool stop = false;
        for (int j = 0; j < n && !stop; ++j)
        {
            int a = mach[j];                                // machine of job j
            for (int h = 0; h < m; ++h)
            {
                if (h == a) continue;
                int delta = ObjectiveChange(m, L, a, h, t[j], obj);   // job j from a to h
                if (delta < bestDelta)
                {
                    bestDelta = delta; bj = j; bh = h;      // improving move
                    if (rule == FIRST) { stop = true; break; }
                }
            }
        }
        if (bj == -1) return false;                         // no improving move: local optimum

        L[mach[bj]] = L[mach[bj]] - t[bj];                  // apply the move
        L[bh] = L[bh] + t[bj];
        mach[bj] = bh;
        return true;
    }
    ```

??? codice "PCmaxSwapStep.cpp"

    ```cpp
    // one step of the swap local search for P||Cmax
    // the move (j, k) exchanges the machines of the jobs j and k
    // obj = CMAX (makespan) or SQ (sum of the squared loads); both are minimized

    bool PCmaxSwapStep(int n, int m, const Vec& t, Vec& mach, Vec& L, int obj, int rule)
    {
        int bestDelta = 0;                                  // best change of the objective found so far
        int bj = -1, bk = -1;                               // best move found so far
        bool stop = false;
        for (int j = 0; j < n && !stop; ++j)
        {
            for (int k = j + 1; k < n; ++k)
            {
                int a = mach[j], b = mach[k];
                if (a == b || t[j] == t[k]) continue;       // the loads would not change
                int delta = ObjectiveChange(m, L, a, b, t[j] - t[k], obj);   // t_j - t_k from a to b
                if (delta < bestDelta)
                {
                    bestDelta = delta; bj = j; bk = k;      // improving move
                    if (rule == FIRST) { stop = true; break; }
                }
            }
        }
        if (bj == -1) return false;                         // no improving move: local optimum

        int a = mach[bj], b = mach[bk];                     // apply the move
        L[a] = L[a] - (t[bj] - t[bk]);
        L[b] = L[b] + (t[bj] - t[bk]);
        mach[bj] = b; mach[bk] = a;
        return true;
    }
    ```

- The <strong>move</strong> and <strong>swap steps</strong> for the BPP:

??? codice "BPPMoveStep.cpp"

    ```cpp
    // one step of the move local search for the BPP
    // bin[i] is the bin of item i, L[b] the load of bin b (L[b] = 0 if bin b is empty)
    // obj = NB (number of bins, minimized) or SQ (sum of the squared loads, maximized)

    bool BPPMoveStep(int n, const Vec& w, int c, Vec& bin, Vec& L, int obj, int rule)
    {
        int bestGain = 0;                                   // best gain found so far
        int bi = -1, bb = -1;                               // best move found so far
        bool stop = false;
        for (int i = 0; i < n && !stop; ++i)
        {
            int a = bin[i];                                 // bin of item i
            for (int b = 0; b < (int)L.size(); ++b)
            {
                if (b == a || L[b] == 0) continue;          // same bin, or empty bin
                if (L[b] + w[i] > c) continue;              // item i does not fit into bin b
                int gain;                                   // improvement of the objective
                if (obj == SQ)
                    gain = 2 * w[i] * (L[b] - L[a] + w[i]);
                else
                    gain = (L[a] == w[i]) ? 1 : 0;          // bin a becomes empty
                if (gain > bestGain)
                {
                    bestGain = gain; bi = i; bb = b;        // improving move
                    if (rule == FIRST) { stop = true; break; }
                }
            }
        }
        if (bi == -1) return false;                         // no improving move: local optimum

        L[bin[bi]] = L[bin[bi]] - w[bi];                    // apply the move
        L[bb] = L[bb] + w[bi];
        bin[bi] = bb;
        return true;
    }
    ```

??? codice "BPPSwapStep.cpp"

    ```cpp
    // one step of the swap local search for the BPP, with the auxiliary objective
    // sum of the squared loads (maximized); a swap never changes the number of bins
    // the move (i, k) exchanges the bins of the items i and k

    bool BPPSwapStep(int n, const Vec& w, int c, Vec& bin, Vec& L, int rule)
    {
        int bestGain = 0;                                   // best gain found so far
        int bi = -1, bk = -1;                               // best move found so far
        bool stop = false;
        for (int i = 0; i < n && !stop; ++i)
        {
            for (int k = i + 1; k < n; ++k)
            {
                int a = bin[i], b = bin[k];
                if (a == b || w[i] == w[k]) continue;       // the loads would not change
                int dw = w[i] - w[k];                       // weight transferred from a to b
                if (L[b] + dw > c || L[a] - dw > c) continue;   // a bin would be overfull
                int gain = 2 * dw * (L[b] - L[a] + dw);     // improvement of the objective
                if (gain > bestGain)
                {
                    bestGain = gain; bi = i; bk = k;        // improving move
                    if (rule == FIRST) { stop = true; break; }
                }
            }
        }
        if (bi == -1) return false;                         // no improving move: local optimum

        int a = bin[bi], b = bin[bk], dw = w[bi] - w[bk];   // apply the move
        L[a] = L[a] - dw;
        L[b] = L[b] + dw;
        bin[bi] = b; bin[bk] = a;
        return true;
    }
    ```

- The <strong>flip+swap step</strong> and the <strong>penalty flip step</strong> for the KP (the penalty $\alpha=\texttt{alpha\_num}/\texttt{alpha\_den}$ is a fraction, and all the values are multiplied by <code>alpha\_den</code> to work with integers):

??? codice "KPFlipSwapStep.cpp"

    ```cpp
    // one step of the local search for the KP with the neighbourhood flip + swap,
    // restricted to feasible solutions; x[i] = 1 if item i is selected
    // the flips are examined first, then the swaps (item i out, item k in)

    bool KPFlipSwapStep(int n, const Vec& p, const Vec& w, int c, Vec& x, int rule)
    {
        int W = 0;                                          // weight of the current solution
        for (int i = 0; i < n; ++i) W = W + w[i] * x[i];

        int bestDp = 0;                                     // best profit increase found so far
        int bi = -1, bk = -1;                               // best move found so far (bk = -1: flip)
        bool stop = false;
        for (int i = 0; i < n && !stop; ++i)                // flip of item i
        {
            int dp = (1 - 2 * x[i]) * p[i];                 // remove, or add, item i
            int dw = (1 - 2 * x[i]) * w[i];
            if (W + dw <= c && dp > bestDp)
            {
                bestDp = dp; bi = i; bk = -1;               // improving move
                if (rule == FIRST) stop = true;
            }
        }
        for (int i = 0; i < n && !stop; ++i)                // swap: item i out, item k in
        {
            if (x[i] == 0) continue;
            for (int k = 0; k < n; ++k)
            {
                if (x[k] == 1) continue;
                int dp = p[k] - p[i];
                int dw = w[k] - w[i];
                if (W + dw <= c && dp > bestDp)
                {
                    bestDp = dp; bi = i; bk = k;            // improving move
                    if (rule == FIRST) { stop = true; break; }
                }
            }
        }
        if (bi == -1) return false;                         // no improving move: local optimum

        x[bi] = 1 - x[bi];                                  // apply the flip, or the swap
        if (bk != -1) x[bk] = 1;
        return true;
    }
    ```

??? codice "KPPenaltyFlipStep.cpp"

    ```cpp
    // one step of the flip local search for the KP with a penalty for the excess weight:
    // g(x) = profit(x) - alpha * max(0, weight(x) - c), with alpha = alpha_num / alpha_den
    // infeasible solutions are allowed; all the values are multiplied by alpha_den

    bool KPPenaltyFlipStep(int n, const Vec& p, const Vec& w, int c, int alpha_num, int alpha_den, Vec& x, int rule)
    {
        int P = 0, W = 0;                                   // profit and weight of the current solution
        for (int i = 0; i < n; ++i) { P = P + p[i] * x[i]; W = W + w[i] * x[i]; }
        int excess = (W > c) ? W - c : 0;
        int g = alpha_den * P - alpha_num * excess;        // alpha_den * g(x)

        int bestDelta = 0;                                  // best increase of alpha_den * g found so far
        int bi = -1;                                        // best move found so far
        for (int i = 0; i < n; ++i)                         // flip of item i
        {
            int newP = P + (1 - 2 * x[i]) * p[i];
            int newW = W + (1 - 2 * x[i]) * w[i];
            int newExcess = (newW > c) ? newW - c : 0;
            int delta = alpha_den * newP - alpha_num * newExcess - g;
            if (delta > bestDelta)
            {
                bestDelta = delta; bi = i;                  // improving move
                if (rule == FIRST) break;
            }
        }
        if (bi == -1) return false;                         // no improving move: local optimum

        x[bi] = 1 - x[bi];                                  // apply the flip
        return true;
    }
    ```

- The <strong>multi-start 2-opt</strong>, the Park–Miller generator and the random tours:

??? codice "MultiStartTwoOpt.cpp"

    ```cpp
    // multi-start local search for the TSP: M random tours, each improved by 2-opt
    // the random tours are generated by the Park-Miller generator, starting from seed
    // best receives the best local optimum found; the function returns its length

    int MultiStartTwoOpt(int n, const Mat& d, int M, long long seed, int rule, Vec& best)
    {
        int bestLength = -1;                                // length of the best tour found so far
        for (int s = 1; s <= M; ++s)
        {
            Vec pi = RandomTour(n, seed);                   // random starting tour
            LocalSearch([&]() { return TwoOptStep(n, d, pi, rule); });
            int length = TourLength(n, d, pi);              // length of the local optimum
            if (bestLength == -1 || length < bestLength)
            {
                bestLength = length;                        // new best tour
                best = pi;
            }
        }
        return bestLength;
    }
    ```

??? codice "ParkMiller.cpp"

    ```cpp
    // Park-Miller minimal standard generator: seed = 16807 * seed mod (2^31 - 1)
    // returns u = seed / (2^31 - 1), a pseudo-random number in (0, 1)

    double ParkMiller(long long& seed)
    {
        seed = (16807LL * seed) % 2147483647LL;
        return (double)seed / 2147483647.0;
    }
    ```

??? codice "RandomInt.cpp"

    ```cpp
    // pseudo-random integer in {0, 1, ..., k-1}: floor(u * k), computed in exact integer arithmetic

    int RandomInt(long long& seed, int k)
    {
        ParkMiller(seed);
        return (int)((seed * (long long)k) / 2147483647LL);
    }
    ```

??? codice "RandomTour.cpp"

    ```cpp
    // random tour with city 0 in the first position (Fisher-Yates shuffle of the positions 1..n-1)

    Vec RandomTour(int n, long long& seed)
    {
        Vec pi(n);
        for (int i = 0; i < n; ++i) pi[i] = i;
        for (int i = n - 1; i >= 2; --i)
        {
            int j = 1 + RandomInt(seed, i);                 // j in {1, ..., i}
            int tmp = pi[i]; pi[i] = pi[j]; pi[j] = tmp;
        }
        return pi;
    }
    ```

---

**Exercises on this chapter:** [:material-pencil: Local search](../../exercises/local-search.md)

