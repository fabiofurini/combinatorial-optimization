---
title: "C++ implementation · References"
---

# <code>C++</code> implementation · References

<div class="info-capitolo" markdown>

**Part 4 · Heuristic algorithms · Chapter 26** · [:material-book-open-variant: Chapter 26: Metaheuristics](index.md) · [:material-file-pdf-box: Lecture notes, volume 4 (PDF)](../../pdf/lecture-notes-4-heuristic-algorithms.pdf) · [:material-pencil: Exercises: Metaheuristics](../../exercises/metaheuristics.md)

</div>

## 26.14 <code>C++</code> implementation { #sez-sec-code }

- All the functions of this section are in the folder <code>METAHEUR\_CODE/src</code>, one function per file, and are declared in the header <code>Metaheuristics.h</code>. The items, cities and jobs are indexed $0,1,\dots,n-1$, the machines $0,\dots,m-1$ and the bins $0,\dots,nb-1$: the algorithmic logic is the one of the pseudo-codes, with $0$-based indices. Vectors are <code>Vec</code> (<code>vector&lt;int&gt;</code>) and matrices <code>Matrix</code> (<code>vector&lt;Vec&gt;</code>).

- The command <code>make test</code> compiles the code and runs every example of these notes and every instance of the exercises, checking the value found against the expected one; <code>make data</code> writes the data of the figure of Section [26.4.4](how-to-escape-from-a-local-optimum.md#sez-sec-sa-exp).

- The random numbers are produced by <code>Rand</code>, the generator of Section [26.2.2](the-problems-and-the-assumptions.md#sez-sec-random). The structure <code>Random</code> contains the seed and, optionally, a list of given numbers, which are returned instead: the exercises give their random numbers explicitly.

??? codice "Rand.cpp"

    ```cpp
    // Park-Miller minimal standard generator: seed = 16807 * seed mod (2^31 - 1), u = seed /
    // (2^31 - 1)
    // if a list of numbers is given, they are returned in order instead

    double Rand(Random& r)
    {
        double u;
        if (r.given.size() > 0)
        {
            u = r.given[r.used];
        }
        else
        {
            r.seed = (16807 * r.seed) % 2147483647;
            u = (double) r.seed / 2147483647.0;
        }
        r.used = r.used + 1;
        return u;
    }
    ```

### 26.14.1 Local searches and auxiliary functions

- The 2-opt local search for the TSP, with the $O(1)$ evaluation of a move:

??? codice "TourLength.cpp"

    ```cpp
    // length L(pi) of the tour pi

    int TourLength(const Vec& pi, const Matrix& d)
    {
        int n = pi.size();
        int len = 0;
        for (int k = 0; k < n; ++k)
        {
            len = len + d[pi[k]][pi[(k + 1) % n]];
        }
        return len;
    }
    ```

??? codice "TwoOptDelta.cpp"

    ```cpp
    // change of length of the 2-opt move (i,j): the edges (pi[i],pi[i+1]) and (pi[j],pi[j+1])
    // are replaced by (pi[i],pi[j]) and (pi[i+1],pi[j+1]); computed in O(1)

    int TwoOptDelta(const Vec& pi, const Matrix& d, int i, int j)
    {
        int n = pi.size();
        int a = pi[i], b = pi[i + 1], c = pi[j], e = pi[(j + 1) % n];
        return d[a][c] + d[b][e] - d[a][b] - d[c][e];
    }
    ```

??? codice "ApplyTwoOpt.cpp"

    ```cpp
    // performs the 2-opt move (i,j): reverses the segment pi[i+1..j]

    void ApplyTwoOpt(Vec& pi, int i, int j)
    {
        int lo = i + 1, hi = j;
        while (lo < hi)
        {
            int tmp = pi[lo]; pi[lo] = pi[hi]; pi[hi] = tmp;
            lo = lo + 1; hi = hi - 1;
        }
    }
    ```

??? codice "TwoOptLS.cpp"

    ```cpp
    // 2-opt local search with best improvement: stops at a local optimum
    // ties between moves are broken in favour of the first move (i,j) in lexicographic order

    void TwoOptLS(Vec& pi, const Matrix& d)
    {
        int n = pi.size();
        while (true)
        {
            int bdelta = 0, bi = -1, bj = -1;
            for (int i = 0; i < n - 1; ++i)
            {
                for (int j = i + 2; j < n; ++j)
                {
                    if (i == 0 && j == n - 1) continue;      // same two edges: no change
                    int delta = TwoOptDelta(pi, d, i, j);
                    if (delta < bdelta) { bdelta = delta; bi = i; bj = j; }
                }
            }
            // no improving move: local optimum
            if (bi < 0) return;
            ApplyTwoOpt(pi, bi, bj);
        }
    }
    ```

??? codice "NearestNeighbour.cpp"

    ```cpp
    // nearest neighbour tour from city 0 (ties: smallest index)

    Vec NearestNeighbour(const Matrix& d)
    {
        int n = d.size();
        Vec pi(1, 0);
        vector<bool> visited(n, false);
        visited[0] = true;
        for (int k = 1; k < n; ++k)
        {
            int last = pi.back(), next = -1;
            for (int j = 0; j < n; ++j)
            {
                if (!visited[j] && (next < 0 || d[last][j] < d[last][next])) next = j;
            }
            pi.push_back(next);
            visited[next] = true;
        }
        return pi;
    }
    ```

- The move descent for $P\,||\,C_{\max}$ with the lexicographic comparison, and the LPT starting solution:

??? codice "Loads.cpp"

    ```cpp
    // loads L[h] of the machines for the assignment mach

    Vec Loads(const Vec& mach, const Vec& t, int m)
    {
        Vec L(m, 0);
        for (int j = 0; j < (int) t.size(); ++j) L[mach[j]] = L[mach[j]] + t[j];
        return L;
    }
    ```

??? codice "LexLess.cpp"

    ```cpp
    // true if the loads L1 are better than L2 in the lexicographic order
    // (makespan first, then sum of the squared loads)

    bool LexLess(const Vec& L1, const Vec& L2)
    {
        int C1 = 0, C2 = 0, S1 = 0, S2 = 0;
        for (int h = 0; h < (int) L1.size(); ++h)
        {
            if (L1[h] > C1) C1 = L1[h];
            if (L2[h] > C2) C2 = L2[h];
            S1 = S1 + L1[h] * L1[h];
            S2 = S2 + L2[h] * L2[h];
        }
        return C1 < C2 || (C1 == C2 && S1 < S2);
    }
    ```

??? codice "MoveDescent.cpp"

    ```cpp
    // local search for P||Cmax with the move neighbourhood and best improvement,
    // with respect to the lexicographic order (makespan, sum of squared loads)

    void MoveDescent(const Vec& t, int m, Vec& mach)
    {
        int n = t.size();
        Vec L = Loads(mach, t, m);
        while (true)
        {
            int bj = -1, bh = -1;
            Vec bL = L;
            for (int j = 0; j < n; ++j)
            {
                for (int h = 0; h < m; ++h)
                {
                    if (h == mach[j]) continue;
                    Vec L2 = L;
                    L2[mach[j]] = L2[mach[j]] - t[j];
                    L2[h] = L2[h] + t[j];
                    if (LexLess(L2, bL)) { bj = j; bh = h; bL = L2; }
                }
            }
            if (bj < 0) return;                              // local optimum
            mach[bj] = bh;
            L = bL;
        }
    }
    ```

??? codice "LPT.cpp"

    ```cpp
    // longest processing time first: jobs by non-increasing t (ties: smallest index),
    // each assigned to the least loaded machine (ties: smallest index)

    Vec LPT(const Vec& t, int m)
    {
        int n = t.size();
        Vec order(n), mach(n), L(m, 0);
        for (int j = 0; j < n; ++j) order[j] = j;
        for (int a = 1; a < n; ++a)                          // insertion sort, stable
        {
            int j = order[a], b = a;
            while (b > 0 && t[order[b - 1]] < t[j]) { order[b] = order[b - 1]; b = b - 1; }
            order[b] = j;
        }
        for (int a = 0; a < n; ++a)
        {
            int j = order[a], h = 0;
            for (int k = 1; k < m; ++k) if (L[k] < L[h]) h = k;
            mach[j] = h;
            L[h] = L[h] + t[j];
        }
        return mach;
    }
    ```

- The local search for the KP with feasible flips and swaps:

??? codice "Profit.cpp"

    ```cpp
    // total profit of the items selected by x

    int Profit(const Vec& p, const Vec& x)
    {
        int P = 0;
        for (int i = 0; i < (int) p.size(); ++i) if (x[i] == 1) P = P + p[i];
        return P;
    }
    ```

??? codice "Weight.cpp"

    ```cpp
    // total weight of the items selected by x

    int Weight(const Vec& w, const Vec& x)
    {
        int W = 0;
        for (int i = 0; i < (int) w.size(); ++i) if (x[i] == 1) W = W + w[i];
        return W;
    }
    ```

??? codice "KPLocalSearch.cpp"

    ```cpp
    // local search for the KP with best improvement on the feasible neighbours of the flip
    // neighbourhood (only additions can improve) and of the swap neighbourhood

    void KPLocalSearch(const Vec& p, const Vec& w, int c, Vec& x)
    {
        int n = p.size();
        while (true)
        {
            int W = Weight(w, x), P = Profit(p, x);
            // bi = -1: add item bk; else swap bi out, bk in
            int bP = P, bi = -1, bk = -1;
            for (int k = 0; k < n; ++k)
                if (x[k] == 0 && W + w[k] <= c && P + p[k] > bP)
                { bP = P + p[k]; bi = -1; bk = k; }
            for (int i = 0; i < n; ++i)
            {
                if (x[i] != 1) continue;
                for (int k = 0; k < n; ++k)
                    if (x[k] == 0 && W - w[i] + w[k] <= c && P - p[i] + p[k] > bP)
                    { bP = P - p[i] + p[k]; bi = i; bk = k; }
            }
            if (bk < 0) return;                              // local optimum
            if (bi >= 0) x[bi] = 0;
            x[bk] = 1;
        }
    }
    ```

### 26.14.2 Simulated annealing

- Simulated annealing for the TSP (Section [26.4](how-to-escape-from-a-local-optimum.md#sez-sec-sa), with the 2-opt neighbourhood), and for the KP with the penalized objective of Section [26.4.3](how-to-escape-from-a-local-optimum.md#sez-sec-sa-kp):

??? codice "SimulatedAnnealingTSP.cpp"

    ```cpp
    // simulated annealing for the TSP with the 2-opt neighbourhood and geometric cooling
    // pi: starting tour on input, best tour found on output; returns its length
    // if curve is not NULL, the length of the current tour after each move is appended to it

    int SimulatedAnnealingTSP(const Matrix& d, Vec& pi, double T0, double alpha, int L,
                              double Tmin, Random& r, Vec* curve)
    {
        int n = pi.size();
        // the M = n(n-3)/2 moves (i,j) of 2-opt
        Vec mi, mj;
        for (int i = 0; i < n - 1; ++i)
            for (int j = i + 2; j < n; ++j)
                if (!(i == 0 && j == n - 1)) { mi.push_back(i); mj.push_back(j); }
        int M = mi.size();

        Vec cur = pi;                                        // current solution
        int fcur = TourLength(cur, d);
        Vec best = cur;                                      // best solution found
        int fbest = fcur;
        double T = T0;                                       // temperature
        while (T > Tmin)
        {
            for (int l = 0; l < L; ++l)                      // L moves at temperature T
            {
                int k = (int) (Rand(r) * M);                 // random neighbour
                int delta = TwoOptDelta(cur, d, mi[k], mj[k]);
                double v = Rand(r);
                if (delta <= 0 || v < exp(-delta / T))       // Metropolis acceptance rule
                {
                    ApplyTwoOpt(cur, mi[k], mj[k]);
                    fcur = fcur + delta;
                    if (fcur < fbest) { best = cur; fbest = fcur; }
                }
                if (curve != NULL) curve->push_back(fcur);
            }
            T = alpha * T;                                   // cooling
        }
        pi = best;
        return fbest;
    }
    ```

??? codice "SimulatedAnnealingKP.cpp"

    ```cpp
    // simulated annealing for the KP with the flip neighbourhood and the penalized objective
    // f(x) = profit(x) - beta * max{0, weight(x) - c}; infeasible solutions may be visited,
    // the best solution is updated with feasible solutions only
    // x: feasible starting solution on input, best solution found on output; returns its
    // profit

    int SimulatedAnnealingKP(const Vec& p, const Vec& w, int c, Vec& x, int beta,
                             double T0, double alpha, int L, double Tmin, Random& r)
    {
        int n = p.size();
        int excess = Weight(w, x) - c;
        int f = Profit(p, x) - beta * (excess > 0 ? excess : 0);
        Vec best = x;
        int zbest = Profit(p, x);
        double T = T0;
        while (T > Tmin)
        {
            for (int l = 0; l < L; ++l)
            {
                int k = (int) (Rand(r) * n);                 // random flip
                Vec y = x;
                y[k] = 1 - y[k];
                int ey = Weight(w, y) - c;
                int fy = Profit(p, y) - beta * (ey > 0 ? ey : 0);
                // maximization: delta > 0 is a worsening
                int delta = f - fy;
                double v = Rand(r);
                if (delta <= 0 || v < exp(-delta / T))
                {
                    x = y; f = fy;
                    if (ey <= 0 && Profit(p, x) > zbest) { best = x; zbest = Profit(p, x); }
                }
            }
            T = alpha * T;
        }
        x = best;
        return zbest;
    }
    ```

### 26.14.3 Tabu search

- Tabu search for $P\,||\,C_{\max}$ (Section [26.5](tabu-search.md#sez-sec-ts)) and for the TSP (Section [26.5.2](tabu-search.md#sez-sec-ts-tsp)):

??? codice "TabuSearchPCmax.cpp"

    ```cpp
    // tabu search for P||Cmax with the move neighbourhood (one job to another machine);
    // the best non-tabu move is performed even if it is worse (makespan first, then sum of
    // squares);
    // after moving job j away from machine h, the attribute (j,h) is tabu for tenure
    // iterations;
    // a tabu move is allowed if it gives a makespan smaller than the best one (aspiration)
    // mach: starting assignment on input, best assignment on output; returns its makespan

    int TabuSearchPCmax(const Vec& t, int m, Vec& mach, int tenure, int maxIter)
    {
        int n = t.size();
        Vec L = Loads(mach, t, m);
        // tabu[j][h] >= it: j may not go to h
        Matrix tabu(n, Vec(m, 0));
        Vec best = mach;
        int bestC = 0, sum = 0, LB = 0;
        for (int h = 0; h < m; ++h) if (L[h] > bestC) bestC = L[h];
        for (int j = 0; j < n; ++j) { sum = sum + t[j]; if (t[j] > LB) LB = t[j]; }
        // LB = max{ max t_j, ceil(sum/m) }
        if ((sum + m - 1) / m > LB) LB = (sum + m - 1) / m;
        int it = 0;
        while (it < maxIter && bestC > LB)
        {
            it = it + 1;
            int bj = -1, bh = -1;
            Vec bL;
            for (int j = 0; j < n; ++j)
            {
                for (int h = 0; h < m; ++h)
                {
                    if (h == mach[j]) continue;
                    Vec L2 = L;
                    L2[mach[j]] = L2[mach[j]] - t[j];
                    L2[h] = L2[h] + t[j];
                    int C2 = 0;
                    for (int k = 0; k < m; ++k) if (L2[k] > C2) C2 = L2[k];
                    // tabu and no aspiration
                    if (tabu[j][h] >= it && !(C2 < bestC)) continue;
                    if (bj < 0 || LexLess(L2, bL)) { bj = j; bh = h; bL = L2; }
                }
            }
            if (bj < 0) break;
            // j may not go back for tenure iterations
            tabu[bj][mach[bj]] = it + tenure;
            mach[bj] = bh;
            L = bL;
            int C = 0;
            for (int k = 0; k < m; ++k) if (L[k] > C) C = L[k];
            if (C < bestC) { bestC = C; best = mach; }
        }
        mach = best;
        return bestC;
    }
    ```

??? codice "TabuSearchTSP.cpp"

    ```cpp
    // tabu search for the TSP with the 2-opt neighbourhood
    // the two edges removed by a move may not be added back for tenure iterations,
    // unless the move gives a tour shorter than the best one (aspiration criterion)

    int TabuSearchTSP(const Matrix& d, Vec& pi, int tenure, int maxIter)
    {
        int n = pi.size();
        Vec cur = pi;
        int lcur = TourLength(cur, d);
        Vec best = cur;
        int lbest = lcur;
        // tabu[a][b] >= it: edge (a,b) is tabu
        Matrix tabu(n, Vec(n, 0));
        for (int it = 1; it <= maxIter; ++it)
        {
            int bdelta = 0, bi = -1, bj = -1;
            for (int i = 0; i < n - 1; ++i)
            {
                for (int j = i + 2; j < n; ++j)
                {
                    if (i == 0 && j == n - 1) continue;
                    int a = cur[i], b = cur[i + 1], c = cur[j], e = cur[(j + 1) % n];
                    int delta = d[a][c] + d[b][e] - d[a][b] - d[c][e];
                    bool isTabu = tabu[a][c] >= it || tabu[b][e] >= it;
                    if (isTabu && !(lcur + delta < lbest)) continue;
                    if (bi < 0 || delta < bdelta) { bdelta = delta; bi = i; bj = j; }
                }
            }
            if (bi < 0) break;                               // every move is tabu
            int a = cur[bi], b = cur[bi + 1], c = cur[bj], e = cur[(bj + 1) % n];
            tabu[a][b] = tabu[b][a] = it + tenure;           // removed edges become tabu
            tabu[c][e] = tabu[e][c] = it + tenure;
            // best non-tabu move, even if worse
            ApplyTwoOpt(cur, bi, bj);
            lcur = lcur + bdelta;
            if (lcur < lbest) { best = cur; lbest = lcur; }
        }
        pi = best;
        return lbest;
    }
    ```

### 26.14.4 Iterated local search and variable neighbourhood search

- Iterated local search for the TSP with the double-bridge kick (Section [26.6](iterated-local-search.md#sez-sec-ils)):

??? codice "DoubleBridge.cpp"

    ```cpp
    // double-bridge kick: the tour A B C D, cut at the positions p1 < p2 < p3, becomes A C B
    // D

    Vec DoubleBridge(const Vec& pi, Random& r)
    {
        int n = pi.size();
        int p1 = 1 + (int) (Rand(r) * (n - 3));
        int p2 = p1 + 1 + (int) (Rand(r) * (n - 2 - p1));
        int p3 = p2 + 1 + (int) (Rand(r) * (n - 1 - p2));
        Vec kick;
        for (int k = 0; k < p1; ++k) kick.push_back(pi[k]);     // A
        for (int k = p2; k < p3; ++k) kick.push_back(pi[k]);    // C
        for (int k = p1; k < p2; ++k) kick.push_back(pi[k]);    // B
        for (int k = p3; k < n; ++k) kick.push_back(pi[k]);     // D
        return kick;
    }
    ```

??? codice "IteratedLocalSearchTSP.cpp"

    ```cpp
    // iterated local search for the TSP: double-bridge kick + 2-opt local search,
    // the new local optimum is accepted if it is better than the current one

    int IteratedLocalSearchTSP(const Matrix& d, Vec& pi, int maxIter, Random& r)
    {
        Vec cur = pi;
        TwoOptLS(cur, d);                                    // first local optimum
        int lcur = TourLength(cur, d);
        for (int it = 1; it <= maxIter; ++it)
        {
            Vec nw = DoubleBridge(cur, r);                   // perturbation
            TwoOptLS(nw, d);                                 // local search
            int lnew = TourLength(nw, d);
            if (lnew < lcur) { cur = nw; lcur = lnew; }      // acceptance criterion
        }
        pi = cur;
        return lcur;
    }
    ```

- Variable neighbourhood search for $P\,||\,C_{\max}$ (Section [26.7](variable-neighbourhood-search.md#sez-sec-vns)):

??? codice "Shake.cpp"

    ```cpp
    // shaking in the k-th neighbourhood: k random moves, each one moving a random job j
    // to a random machine different from mach[j]

    Vec Shake(const Vec& t, int m, const Vec& mach, int k, Random& r)
    {
        int n = t.size();
        Vec sh = mach;
        for (int s = 0; s < k; ++s)
        {
            int j = (int) (Rand(r) * n);
            int g = (int) (Rand(r) * (m - 1));
            // the (g+1)-th machine other than sh[j]
            sh[j] = (g < sh[j]) ? g : g + 1;
        }
        return sh;
    }
    ```

??? codice "VNSPCmax.cpp"

    ```cpp
    // basic variable neighbourhood search for P||Cmax: shaking with k random moves,
    // local search by MoveDescent; k returns to 1 after an improvement, otherwise it grows
    // up to kmax

    int VNSPCmax(const Vec& t, int m, Vec& mach, int kmax, int maxIter, Random& r)
    {
        int n = t.size(), sum = 0, LB = 0;
        for (int j = 0; j < n; ++j) { sum = sum + t[j]; if (t[j] > LB) LB = t[j]; }
        if ((sum + m - 1) / m > LB) LB = (sum + m - 1) / m;
        MoveDescent(t, m, mach);
        Vec L = Loads(mach, t, m);
        int C = 0;
        for (int h = 0; h < m; ++h) if (L[h] > C) C = L[h];
        int it = 0, k = 1;
        while (it < maxIter && C > LB)
        {
            it = it + 1;
            Vec nw = Shake(t, m, mach, k, r);                // shaking
            MoveDescent(t, m, nw);                           // local search
            Vec Lnew = Loads(nw, t, m);
            if (LexLess(Lnew, L))                            // move or not
            {
                mach = nw; L = Lnew; k = 1;
                C = 0;
                for (int h = 0; h < m; ++h) if (L[h] > C) C = L[h];
            }
            else
            {
                k = (k < kmax) ? k + 1 : 1;
            }
        }
        return C;
    }
    ```

### 26.14.5 GRASP

- GRASP for the KP (Section [26.8](grasp.md#sez-sec-grasp)) and for the TSP (Section [26.8.1](grasp.md#sez-sec-grasp-exp)):

??? codice "RandomizedGreedyKP.cpp"

    ```cpp
    // greedy randomized construction for the KP: at each step the candidates are the items
    // that fit,
    // RCL = { i candidate : p_i/w_i >= emax - alpha (emax - emin) }, sorted by non-increasing
    // efficiency (ties: smallest index), and the item is chosen at random in the RCL

    Vec RandomizedGreedyKP(const Vec& p, const Vec& w, int c, double alpha, Random& r)
    {
        int n = p.size(), rc = c;                            // rc: residual capacity
        Vec x(n, 0);
        while (true)
        {
            double emax = -1, emin = -1;
            for (int i = 0; i < n; ++i)
            {
                if (x[i] == 1 || w[i] > rc) continue;
                double e = (double) p[i] / w[i];
                if (emax < 0 || e > emax) emax = e;
                if (emin < 0 || e < emin) emin = e;
            }
            if (emax < 0) return x;                          // no item fits
            double thr = emax - alpha * (emax - emin);
            Vec rcl;
            for (int i = 0; i < n; ++i)
            {
                if (x[i] == 1 || w[i] > rc || (double) p[i] / w[i] < thr - 1e-9) continue;
                int pos = rcl.size();                        // insertion in sorted position
                rcl.push_back(i);
                while (pos > 0 && p[rcl[pos - 1]] * w[i] < p[i] * w[rcl[pos - 1]])
                { rcl[pos] = rcl[pos - 1]; pos = pos - 1; }
                rcl[pos] = i;
            }
            int i = rcl[(int) (Rand(r) * rcl.size())];
            x[i] = 1;
            rc = rc - w[i];
        }
    }
    ```

??? codice "GraspKP.cpp"

    ```cpp
    // GRASP for the KP: greedy randomized construction + local search, maxIter times

    int GraspKP(const Vec& p, const Vec& w, int c, Vec& best, double alpha, int maxIter,
                Random& r)
    {
        int zbest = -1;
        for (int it = 1; it <= maxIter; ++it)
        {
            Vec x = RandomizedGreedyKP(p, w, c, alpha, r);   // construction
            KPLocalSearch(p, w, c, x);                       // local search
            int z = Profit(p, x);
            if (z > zbest) { best = x; zbest = z; }
        }
        return zbest;
    }
    ```

??? codice "RandomizedNN.cpp"

    ```cpp
    // randomized nearest neighbour from city 0: the next city is chosen at random in the
    // restricted candidate list RCL = { j unvisited : d[last][j] <= dmin + alpha (dmax -
    // dmin) },
    // sorted by non-decreasing distance (ties: smallest index)

    Vec RandomizedNN(const Matrix& d, double alpha, Random& r)
    {
        int n = d.size();
        Vec pi(1, 0);
        vector<bool> visited(n, false);
        visited[0] = true;
        for (int k = 1; k < n; ++k)
        {
            int last = pi.back();
            int dmin = -1, dmax = -1;
            for (int j = 0; j < n; ++j)
            {
                if (visited[j]) continue;
                if (dmin < 0 || d[last][j] < dmin) dmin = d[last][j];
                if (dmax < 0 || d[last][j] > dmax) dmax = d[last][j];
            }
            double thr = dmin + alpha * (dmax - dmin);
            Vec rcl;
            for (int j = 0; j < n; ++j)
            {
                if (visited[j] || d[last][j] > thr + 1e-9) continue;
                int pos = rcl.size();                        // insertion in sorted position
                rcl.push_back(j);
                while (pos > 0 && d[last][rcl[pos - 1]] > d[last][j])
                { rcl[pos] = rcl[pos - 1]; pos = pos - 1; }
                rcl[pos] = j;
            }
            int next = rcl[(int) (Rand(r) * rcl.size())];
            pi.push_back(next);
            visited[next] = true;
        }
        return pi;
    }
    ```

??? codice "GraspTSP.cpp"

    ```cpp
    // GRASP for the TSP: randomized nearest neighbour + 2-opt local search, maxIter times

    int GraspTSP(const Matrix& d, Vec& best, double alpha, int maxIter, Random& r)
    {
        int lbest = -1;
        for (int it = 1; it <= maxIter; ++it)
        {
            Vec pi = RandomizedNN(d, alpha, r);              // greedy randomized construction
            TwoOptLS(pi, d);                                 // local search
            int len = TourLength(pi, d);
            if (lbest < 0 || len < lbest) { best = pi; lbest = len; }
        }
        return lbest;
    }
    ```

### 26.14.6 Large neighbourhood search

- LNS and ALNS for the TSP (Sections [26.9](large-neighbourhood-search.md#sez-sec-lns) and [26.9.2](large-neighbourhood-search.md#sez-sec-alns)):

??? codice "RandomRemoval.cpp"

    ```cpp
    // destroy: removes q random cities from the tour pi (never the first city) and returns
    // them

    Vec RandomRemoval(Vec& pi, int q, Random& r)
    {
        Vec removed;
        for (int s = 0; s < q; ++s)
        {
            int k = 1 + (int) (Rand(r) * (pi.size() - 1));
            removed.push_back(pi[k]);
            pi.erase(pi.begin() + k);
        }
        return removed;
    }
    ```

??? codice "WorstRemoval.cpp"

    ```cpp
    // destroy: removes, q times, the city whose removal saves the most length (never the
    // first city)

    Vec WorstRemoval(Vec& pi, int q, const Matrix& d)
    {
        Vec removed;
        for (int s = 0; s < q; ++s)
        {
            int n = pi.size(), bk = -1, bs = 0;
            for (int k = 1; k < n; ++k)
            {
                int a = pi[k - 1], v = pi[k], b = pi[(k + 1) % n];
                int saving = d[a][v] + d[v][b] - d[a][b];
                if (bk < 0 || saving > bs) { bk = k; bs = saving; }
            }
            removed.push_back(pi[bk]);
            pi.erase(pi.begin() + bk);
        }
        return removed;
    }
    ```

??? codice "CheapestInsertionRepair.cpp"

    ```cpp
    // repair: inserts the removed cities, in the order of removal, each in the position
    // of minimum insertion cost d[a][v] + d[v][b] - d[a][b] (ties: first position)

    void CheapestInsertionRepair(Vec& pi, const Vec& removed, const Matrix& d)
    {
        for (int s = 0; s < (int) removed.size(); ++s)
        {
            int v = removed[s], n = pi.size(), bpos = -1, bcost = 0;
            for (int k = 0; k < n; ++k)
            {
                int a = pi[k], b = pi[(k + 1) % n];
                int cost = d[a][v] + d[v][b] - d[a][b];
                if (bpos < 0 || cost < bcost) { bpos = k; bcost = cost; }
            }
            pi.insert(pi.begin() + bpos + 1, v);
        }
    }
    ```

??? codice "LnsTSP.cpp"

    ```cpp
    // large neighbourhood search for the TSP: random removal of q cities + cheapest
    // insertion,
    // the new tour is accepted if it is shorter than the current one

    int LnsTSP(const Matrix& d, Vec& pi, int q, int maxIter, Random& r)
    {
        Vec cur = pi;
        int lcur = TourLength(cur, d);
        for (int it = 1; it <= maxIter; ++it)
        {
            Vec nw = cur;
            Vec removed = RandomRemoval(nw, q, r);           // destroy
            CheapestInsertionRepair(nw, removed, d);         // repair
            int lnew = TourLength(nw, d);
            if (lnew < lcur) { cur = nw; lcur = lnew; }      // acceptance
        }
        pi = cur;
        return lcur;
    }
    ```

??? codice "AlnsTSP.cpp"

    ```cpp
    // adaptive large neighbourhood search for the TSP with two destroy operators
    // (o = 0: random removal, o = 1: worst removal) and cheapest insertion as repair;
    // the operator is chosen with probability proportional to its weight wgt[o],
    // updated as wgt[o] = (1 - rho) wgt[o] + rho psi, with psi = 3, 2, 1, 0 if the new tour
    // is a new best, better than the current one, as good as the current one, worse

    int AlnsTSP(const Matrix& d, Vec& pi, int q, int maxIter, double rho, Random& r,
                double* wgt)
    {
        Vec cur = pi;
        int lcur = TourLength(cur, d);
        Vec best = cur;
        int lbest = lcur;
        wgt[0] = 1.0; wgt[1] = 1.0;
        for (int it = 1; it <= maxIter; ++it)
        {
            int o = (Rand(r) * (wgt[0] + wgt[1]) < wgt[0]) ? 0 : 1;     // roulette wheel
            Vec nw = cur;
            Vec removed = (o == 0) ? RandomRemoval(nw, q, r) : WorstRemoval(nw, q, d);
            CheapestInsertionRepair(nw, removed, d);
            int lnew = TourLength(nw, d);
            double psi;
            if (lnew < lbest) psi = 3.0;
            else if (lnew < lcur) psi = 2.0;
            else if (lnew == lcur) psi = 1.0;
            else psi = 0.0;
            if (lnew <= lcur) { cur = nw; lcur = lnew; }
            if (lcur < lbest) { best = cur; lbest = lcur; }
            wgt[o] = (1 - rho) * wgt[o] + rho * psi;                   // adaptive weights
        }
        pi = best;
        return lbest;
    }
    ```

- LNS for the BPP (Section [26.9.1](large-neighbourhood-search.md#sez-sec-lns-bpp)), with the First Fit starting packing, the destroy method and the two repair methods:

??? codice "FirstFit.cpp"

    ```cpp
    // first fit on the items in the given order; returns the number of bins nb, bin[i] = bin
    // of item i

    int FirstFit(const Vec& w, int c, const Vec& order, Vec& bin)
    {
        Vec load;
        bin.assign(w.size(), -1);
        for (int a = 0; a < (int) order.size(); ++a)
        {
            int i = order[a], b = 0;
            while (b < (int) load.size() && load[b] + w[i] > c) b = b + 1;
            if (b == (int) load.size()) load.push_back(0);   // open a new bin
            bin[i] = b;
            load[b] = load[b] + w[i];
        }
        return load.size();
    }
    ```

??? codice "DestroyBins.cpp"

    ```cpp
    // destroy for the BPP: the least loaded bin (ties: smallest index) and q-1 other bins at
    // random

    Vec DestroyBins(const Vec& bin, int nb, const Vec& w, int q, Random& r)
    {
        Vec load(nb, 0);
        for (int i = 0; i < (int) w.size(); ++i) load[bin[i]] = load[bin[i]] + w[i];
        int e = 0;
        for (int b = 1; b < nb; ++b) if (load[b] < load[e]) e = b;
        Vec empty(1, e);
        while ((int) empty.size() < q && (int) empty.size() < nb)
        {
            Vec others;
            for (int b = 0; b < nb; ++b)
            {
                bool chosen = false;
                for (int s = 0; s < (int) empty.size(); ++s) if (empty[s] == b) chosen = true;
                if (!chosen) others.push_back(b);
            }
            empty.push_back(others[(int) (Rand(r) * others.size())]);
        }
        return empty;
    }
    ```

??? codice "RepairFFD.cpp"

    ```cpp
    // heuristic repair for the BPP: first fit decreasing on the removed items, in new bins;
    // asg[s] = bin (0, 1, ...) of items[s]; returns the number of new bins

    int RepairFFD(const Vec& items, const Vec& w, int c, Vec& asg)
    {
        int k = items.size();
        Vec order(k);
        for (int s = 0; s < k; ++s) order[s] = s;
        for (int a = 1; a < k; ++a)                          // non-increasing weight, stable
        {
            int s = order[a], b = a;
            while (b > 0 && w[items[order[b - 1]]] < w[items[s]])
            { order[b] = order[b - 1]; b = b - 1; }
            order[b] = s;
        }
        Vec load;
        asg.assign(k, -1);
        for (int a = 0; a < k; ++a)
        {
            int s = order[a], b = 0;
            while (b < (int) load.size() && load[b] + w[items[s]] > c) b = b + 1;
            if (b == (int) load.size()) load.push_back(0);
            asg[s] = b;
            load[b] = load[b] + w[items[s]];
        }
        return load.size();
    }
    ```

??? codice "RepairExact.cpp"

    ```cpp
    // exact repair for the BPP: optimal packing of the removed items in new bins, by a
    // depth-first
    // branch and bound (items by non-increasing weight; each item goes in an open bin or in
    // a new one)

    static void Branch(int a, const Vec& order, const Vec& items, const Vec& w, int c,
                       Vec& load, Vec& cur, Vec& asg, int& best)
    {
        if ((int) load.size() >= best) return;              // bound: cannot improve
        if (a == (int) order.size()) { best = load.size(); asg = cur; return; }
        int s = order[a];
        for (int b = 0; b < (int) load.size(); ++b)
        {
            if (load[b] + w[items[s]] > c) continue;
            load[b] = load[b] + w[items[s]]; cur[s] = b;
            Branch(a + 1, order, items, w, c, load, cur, asg, best);
            load[b] = load[b] - w[items[s]];
        }
        load.push_back(w[items[s]]); cur[s] = load.size() - 1;
        Branch(a + 1, order, items, w, c, load, cur, asg, best);
        load.pop_back();
    }

    int RepairExact(const Vec& items, const Vec& w, int c, Vec& asg)
    {
        int k = items.size();
        Vec order(k);
        for (int s = 0; s < k; ++s) order[s] = s;
        for (int a = 1; a < k; ++a)
        {
            int s = order[a], b = a;
            while (b > 0 && w[items[order[b - 1]]] < w[items[s]])
            { order[b] = order[b - 1]; b = b - 1; }
            order[b] = s;
        }
        Vec load, cur(k, -1);
        int best = k + 1;
        Branch(0, order, items, w, c, load, cur, asg, best);
        return best;
    }
    ```

??? codice "LnsBPP.cpp"

    ```cpp
    // large neighbourhood search for the BPP: empty q bins (DestroyBins) and repack their
    // items
    // with FFD (exact = false) or optimally (exact = true); the new packing is accepted if
    // it uses
    // fewer bins, or the same number of bins and a sum of squared loads not smaller
    // bin, nb: starting packing on input, final packing on output; returns the number of bins

    int LnsBPP(const Vec& w, int c, Vec& bin, int nb, int q, bool exact, int maxIter,
               Random& r)
    {
        int n = w.size(), sum = 0;
        for (int i = 0; i < n; ++i) sum = sum + w[i];
        int LB = (sum + c - 1) / c;
        int it = 0;
        while (it < maxIter && nb > LB)
        {
            it = it + 1;
            Vec empty = DestroyBins(bin, nb, w, q, r);      // destroy
            vector<bool> isEmptied(nb, false);
            for (int s = 0; s < (int) empty.size(); ++s) isEmptied[empty[s]] = true;
            Vec items, newbin(n, -1), newIndex(nb, -1);
            int kept = 0;
            for (int b = 0; b < nb; ++b)
                if (!isEmptied[b]) { newIndex[b] = kept; kept = kept + 1; }
            for (int i = 0; i < n; ++i)
            {
                if (isEmptied[bin[i]]) items.push_back(i);
                else newbin[i] = newIndex[bin[i]];
            }
            Vec asg;                                         // repair
            int k = exact ? RepairExact(items, w, c, asg) : RepairFFD(items, w, c, asg);
            for (int s = 0; s < (int) items.size(); ++s) newbin[items[s]] = kept + asg[s];
            int nb2 = kept + k;
            Vec load(nb, 0), load2(nb2, 0);
            for (int i = 0; i < n; ++i) { load[bin[i]] += w[i]; load2[newbin[i]] += w[i]; }
            // auxiliary objective: sum of squared loads
            long long aux = 0, aux2 = 0;
            for (int b = 0; b < nb; ++b) aux = aux + load[b] * load[b];
            for (int b = 0; b < nb2; ++b) aux2 = aux2 + load2[b] * load2[b];
            // acceptance
            if (nb2 < nb || (nb2 == nb && aux2 >= aux)) { bin = newbin; nb = nb2; }
        }
        return nb;
    }
    ```

### 26.14.7 Genetic and memetic algorithm

- The genetic and memetic algorithm for the KP (Section [26.10](population-based-methods-genetic-and-memetic-algorithms.md#sez-sec-ga)):

??? codice "RepairKP.cpp"

    ```cpp
    // repair of an infeasible KP solution: removes the selected item of minimum efficiency
    // (ties: largest index) until the capacity is respected

    void RepairKP(const Vec& p, const Vec& w, int c, Vec& x)
    {
        int n = p.size(), W = Weight(w, x);
        while (W > c)
        {
            int s = -1;
            for (int i = 0; i < n; ++i)
                if (x[i] == 1 && (s < 0 || p[i] * w[s] <= p[s] * w[i])) s = i;
            x[s] = 0;
            W = W - w[s];
        }
    }
    ```

??? codice "Tournament.cpp"

    ```cpp
    // binary tournament: two random individuals, the fitter one wins (ties: the first drawn)

    int Tournament(const Vec& fit, Random& r)
    {
        int P = fit.size();
        int a = (int) (Rand(r) * P);
        int b = (int) (Rand(r) * P);
        return (fit[a] >= fit[b]) ? a : b;
    }
    ```

??? codice "GeneticKP.cpp"

    ```cpp
    // steady-state genetic algorithm for the KP with binary encoding: binary tournament
    // selection,
    // one-point crossover, bit-flip mutation with probability pm, repair; if memetic is true,
    // every new individual is also improved by KPLocalSearch; the child replaces the worst
    // individual (ties: last index) if it is better and not already in the population

    int GeneticKP(const Vec& p, const Vec& w, int c, Vec& best, int P, double pm, int maxIter,
                  bool memetic, Random& r)
    {
        int n = p.size();
        Matrix pop(P, Vec(n, 0));
        Vec fit(P, 0);
        for (int s = 0; s < P; ++s)                          // random initial population
        {
            for (int i = 0; i < n; ++i) pop[s][i] = (Rand(r) < 0.5) ? 1 : 0;
            RepairKP(p, w, c, pop[s]);
            if (memetic) KPLocalSearch(p, w, c, pop[s]);
            fit[s] = Profit(p, pop[s]);
        }
        for (int it = 1; it <= maxIter; ++it)
        {
            int a = Tournament(fit, r);                      // selection
            int b = Tournament(fit, r);
            int cut = 1 + (int) (Rand(r) * (n - 1));         // one-point crossover
            Vec child(n);
            for (int i = 0; i < n; ++i) child[i] = (i < cut) ? pop[a][i] : pop[b][i];
            for (int i = 0; i < n; ++i)                      // mutation
                if (Rand(r) < pm) child[i] = 1 - child[i];
            RepairKP(p, w, c, child);                        // repair
            if (memetic) KPLocalSearch(p, w, c, child);      // memetic: local search
            int fc = Profit(p, child);
            int worst = 0;
            for (int s = 1; s < P; ++s) if (fit[s] <= fit[worst]) worst = s;
            bool present = false;
            for (int s = 0; s < P; ++s) if (pop[s] == child) present = true;
            // replacement
            if (!present && fc > fit[worst]) { pop[worst] = child; fit[worst] = fc; }
        }
        int sb = 0;
        for (int s = 1; s < P; ++s) if (fit[s] > fit[sb]) sb = s;
        best = pop[sb];
        return fit[sb];
    }
    ```

## References

- V. Černy, Thermodynamical approach to the traveling salesman problem: an efficient simulation algorithm, <em>Journal of Optimization Theory and Applications</em> 45 (1985) 41–51.

- T.A. Feo, M.G.C. Resende, A probabilistic heuristic for a computationally difficult set covering problem, <em>Operations Research Letters</em> 8 (1989) 67–71.

- T.A. Feo, M.G.C. Resende, Greedy randomized adaptive search procedures, <em>Journal of Global Optimization</em> 6 (1995) 109–133.

- F. Glover, Future paths for integer programming and links to artificial intelligence, <em>Computers &amp; Operations Research</em> 13 (1986) 533–549.

- F. Glover, M. Laguna, <em>Tabu Search</em>, Kluwer, 1997.

- D.E. Goldberg, <em>Genetic Algorithms in Search, Optimization and Machine Learning</em>, Addison-Wesley, 1989.

- B. Hajek, Cooling schedules for optimal annealing, <em>Mathematics of Operations Research</em> 13 (1988) 311–329.

- J.H. Holland, <em>Adaptation in Natural and Artificial Systems</em>, University of Michigan Press, 1975.

- S. Kirkpatrick, C.D. Gelatt, M.P. Vecchi, Optimization by simulated annealing, <em>Science</em> 220 (1983) 671–680.

- M. López-Ibáñez, J. Dubois-Lacoste, L. Pérez Cáceres, M. Birattari, T. Stützle, The irace package: iterated racing for automatic algorithm configuration, <em>Operations Research Perspectives</em> 3 (2016) 43–58.

- H.R. Lourenço, O.C. Martin, T. Stützle, Iterated local search, in F. Glover, G.A. Kochenberger (eds.), <em>Handbook of Metaheuristics</em>, Kluwer, 2003, 321–353.

- O. Martin, S.W. Otto, E.W. Felten, Large-step Markov chains for the traveling salesman problem, <em>Complex Systems</em> 5 (1991) 299–326.

- N. Metropolis, A.W. Rosenbluth, M.N. Rosenbluth, A.H. Teller, E. Teller, Equation of state calculations by fast computing machines, <em>The Journal of Chemical Physics</em> 21 (1953) 1087–1092.

- N. Mladenovic, P. Hansen, Variable neighborhood search, <em>Computers &amp; Operations Research</em> 24 (1997) 1097–1100.

- P. Moscato, On evolution, search, optimization, genetic algorithms and martial arts: towards memetic algorithms, Technical Report C3P 826, Caltech, 1989.

- S.K. Park, K.W. Miller, Random number generators: good ones are hard to find, <em>Communications of the ACM</em> 31 (1988) 1192–1201.

- S. Ropke, D. Pisinger, An adaptive large neighborhood search heuristic for the pickup and delivery problem with time windows, <em>Transportation Science</em> 40 (2006) 455–472.

- P. Shaw, Using constraint programming and local search methods to solve vehicle routing problems, in <em>Principles and Practice of Constraint Programming – CP98</em>, Lecture Notes in Computer Science 1520, Springer, 1998, 417–431.

- É. Taillard, Robust taboo search for the quadratic assignment problem, <em>Parallel Computing</em> 17 (1991) 443–455.

---

**Exercises on this chapter:** [:material-pencil: Metaheuristics](../../exercises/metaheuristics.md)

