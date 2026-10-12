---
title: "C++ implementation"
---

# 29.14 <code>C++</code> implementation { #sez-sec-CODE }

<div class="info-capitolo" markdown>

**Part 4 · Heuristic algorithms · Chapter 29** · [:material-book-open-variant: Chapter 29: Constructive](index.md) · [:material-file-pdf-box: Lecture notes, volume 4 (PDF)](../../pdf/lecture-notes-4-heuristic-algorithms.pdf) · [:material-pencil: Exercises: Constructive](../../exercises/constructive-heuristics.md) · [:material-gesture-tap: App: Bin packing heuristics](../../lab/bin-packing-heuristics.md) · [:material-gesture-tap: App: List scheduling and LPT](../../lab/list-scheduling-lpt.md)

</div>

- The folder <code>CONSTR\_HEUR\_CODE</code> contains a <code>C++</code> implementation of the heuristics of these notes, one function per file, with the same names and the same steps as the pseudo-codes. Items, bins, jobs, machines and cities are indexed from $0$; the algorithmic logic is unchanged, and ties are always broken in favour of the smallest index.

- The command <code>make</code> builds the program, and <code>make test</code> runs every example of these notes and every instance of the exercises, comparing each value and each solution with those computed by an independent implementation in Python: $202$ checks, $0$ errors.

- The header <code>Constr\_heuristics.h</code> declares all the functions:

??? codice "Constr\_heuristics.h"

    ```cpp
    #ifndef CONSTR_HEURISTICS_HEADER
    #define CONSTR_HEURISTICS_HEADER

    // constructive heuristics for the KP, the BPP, P||Cmax and the TSP
    // items, bins, jobs, machines and cities are indexed starting from 0
    // ties are always broken in favour of the smallest index

    // sorting
    void KPOrder(int n, int* p, int* w, int criterion, int* order);   // 0 profit, 1 weight, 2 efficiency
    void DecreasingOrder(int n, int* a, int* order);

    // KP: returns the profit, x[i] = 1 if item i is selected
    int GreedyOrderKP(int n, int c, int* w, int* p, int* order, int* x);

    // BPP: returns the number of bins, bin[i] = bin of item i
    int FirstFitDecreasing(int n, int c, int* w, int* bin);
    int BestFitDecreasing(int n, int c, int* w, int* bin);

    // P||Cmax: returns the makespan, mach[j] = machine of job j
    int ListScheduling(int n, int m, int* t, int* order, int* mach);
    int LPT(int n, int m, int* t, int* mach);

    // TSP: d is the n x n distance matrix; every function returns the length of the tour
    int TourLength(int n, int** d, int* tour);
    int NearestNeighbour(int n, int** d, int s, int* tour);
    int MultiStartNN(int n, int** d, int* tour);
    int Insertion(int n, int** d, int s, int rule, int* tour);           // 0 NI, 1 FI, 2 CI
    int Regret2Insertion(int n, int** d, int s, int* tour);
    int PilotNN(int n, int** d, int s, int* tour);

    // randomized construction
    double ParkMiller(long long* seed);
    int RandomizedNN(int n, int** d, int s, int alpha_num, int alpha_den, long long* seed, int* tour);

    #endif
    ```

## 29.14.1 Sorting

- The orders of the KP items (Section [29.4](the-knapsack-problem-which-order.md#sez-sec-KP)) and the decreasing order used by FFD, BFD and $LPT$ are computed by insertion sort, which keeps the index order among equal keys. The efficiencies are compared without divisions: $\frac{p_i}{w_i}>\frac{p_j}{w_j}$ if and only if $p_iw_j>p_jw_i$.

??? codice "KPOrder.cpp"

    ```cpp
    // order[0..n-1] receives the items sorted by the criterion:
    // 0 = non-increasing profit, 1 = non-decreasing weight, 2 = non-increasing efficiency p/w
    // insertion sort: items with equal keys keep their index order

    static bool Before(int i, int j, int* p, int* w, int criterion)
    {
        if (criterion == 0) return p[i] > p[j];
        if (criterion == 1) return w[i] < w[j];
        return p[i] * w[j] > p[j] * w[i];      // p_i/w_i > p_j/w_j without divisions
    }

    void KPOrder(int n, int* p, int* w, int criterion, int* order)
    {
        for (int k = 0; k < n; k++)
        {
            int i = k;                         // item to be inserted in order[0..k-1]
            int pos = k;
            while (pos > 0 && Before(i, order[pos - 1], p, w, criterion))
            {
                order[pos] = order[pos - 1];
                pos--;
            }
            order[pos] = i;
        }
    }
    ```

??? codice "DecreasingOrder.cpp"

    ```cpp
    // order[0..n-1] receives the indices sorted by non-increasing a[i]
    // insertion sort: indices with equal values keep their order

    void DecreasingOrder(int n, int* a, int* order)
    {
        for (int k = 0; k < n; k++)
        {
            int pos = k;
            while (pos > 0 && a[k] > a[order[pos - 1]])
            {
                order[pos] = order[pos - 1];
                pos--;
            }
            order[pos] = k;
        }
    }
    ```

## 29.14.2 The knapsack problem

??? codice "GreedyOrderKP.cpp"

    ```cpp
    // the items are examined in the order given by order[0..n-1]
    // x[i] stores the selection decision for item i
    // the function returns the profit of the solution x

    int GreedyOrderKP(int n, int c, int* w, int* p, int* order, int* x)
    {
        for (int i = 0; i < n; i++)
        {
            x[i] = 0;                          // item i is initially not selected
        }
        int rc = c;                            // residual capacity
        int z = 0;                             // profit of the selected items

        for (int k = 0; k < n; k++)
        {
            int i = order[k];                  // k-th item in the order
            if (w[i] <= rc)                    // feasibility test
            {
                x[i] = 1;                      // select item i
                rc = rc - w[i];                // update residual capacity
                z = z + p[i];
            }
        }
        return z;
    }
    ```

## 29.14.3 The bin packing problem

??? codice "FirstFitDecreasing.cpp"

    ```cpp
    // the items are sorted by non-increasing weight and packed by First Fit
    // the function returns the number of bins used
    // bin[i] stores the bin assigned to item i

    int FirstFitDecreasing(int n, int c, int* w, int* bin)
    {
        int* order = new int[n];
        DecreasingOrder(n, w, order);          // sort: largest items first

        int* rc = new int[n];                  // residual capacities (at most n bins)
        int nb = 0;                            // number of bins opened so far

        for (int k = 0; k < n; k++)
        {
            int i = order[k];                  // k-th largest item
            int s = -1;                        // selected bin (-1 means: not found yet)
            for (int b = 0; b < nb; b++)       // first bin in which item i fits
            {
                if (w[i] <= rc[b])
                {
                    s = b;
                    break;
                }
            }
            if (s == -1)                       // no bin fits: open a new one
            {
                rc[nb] = c;
                s = nb;
                nb++;
            }
            bin[i] = s;                        // pack item i into bin s
            rc[s] = rc[s] - w[i];
        }

        delete[] rc;
        delete[] order;
        return nb;
    }
    ```

??? codice "BestFitDecreasing.cpp"

    ```cpp
    // the items are sorted by non-increasing weight and packed by Best Fit
    // the function returns the number of bins used
    // bin[i] stores the bin assigned to item i

    int BestFitDecreasing(int n, int c, int* w, int* bin)
    {
        int* order = new int[n];
        DecreasingOrder(n, w, order);          // sort: largest items first

        int* rc = new int[n];                  // residual capacities (at most n bins)
        int nb = 0;                            // number of bins opened so far

        for (int k = 0; k < n; k++)
        {
            int i = order[k];                  // k-th largest item
            int s = -1;                        // selected bin (-1 means: not found yet)
            for (int b = 0; b < nb; b++)       // fullest bin in which item i fits
            {
                if (w[i] <= rc[b] && (s == -1 || rc[b] < rc[s]))
                {
                    s = b;
                }
            }
            if (s == -1)                       // no bin fits: open a new one
            {
                rc[nb] = c;
                s = nb;
                nb++;
            }
            bin[i] = s;                        // pack item i into bin s
            rc[s] = rc[s] - w[i];
        }

        delete[] rc;
        delete[] order;
        return nb;
    }
    ```

## 29.14.4 Scheduling on parallel machines

??? codice "ListScheduling.cpp"

    ```cpp
    // the jobs are examined in the order given by order[0..n-1]
    // each job is assigned to the machine with the smallest current load
    // the function returns the makespan; mach[j] stores the machine of job j

    int ListScheduling(int n, int m, int* t, int* order, int* mach)
    {
        int* L = new int[m];                   // loads of the machines
        for (int h = 0; h < m; h++)
        {
            L[h] = 0;
        }

        for (int k = 0; k < n; k++)
        {
            int j = order[k];                  // k-th job of the list
            int s = 0;                         // least loaded machine
            for (int h = 1; h < m; h++)
            {
                if (L[h] < L[s]) s = h;
            }
            mach[j] = s;                       // assign job j to machine s
            L[s] = L[s] + t[j];
        }

        int Cmax = 0;                          // makespan = largest load
        for (int h = 0; h < m; h++)
        {
            if (L[h] > Cmax) Cmax = L[h];
        }
        delete[] L;
        return Cmax;
    }
    ```

??? codice "LPT.cpp"

    ```cpp
    // Longest Processing Time first: list scheduling with the jobs
    // sorted by non-increasing processing time
    // the function returns the makespan; mach[j] stores the machine of job j

    int LPT(int n, int m, int* t, int* mach)
    {
        int* order = new int[n];
        DecreasingOrder(n, t, order);          // longest jobs first
        int Cmax = ListScheduling(n, m, t, order, mach);
        delete[] order;
        return Cmax;
    }
    ```

## 29.14.5 The travelling salesman problem

- The distances are stored in an $n\times n$ matrix <code>d</code>, and a tour in an array of $n$ cities.

??? codice "TourLength.cpp"

    ```cpp
    // length of the tour tour[0], tour[1], ..., tour[n-1], tour[0]

    int TourLength(int n, int** d, int* tour)
    {
        int L = 0;
        for (int k = 0; k < n - 1; k++)
        {
            L = L + d[tour[k]][tour[k + 1]];
        }
        return L + d[tour[n - 1]][tour[0]];    // closing edge
    }
    ```

??? codice "NearestNeighbour.cpp"

    ```cpp
    // starting from city s, the tour is extended at its end with the
    // nearest city not yet visited
    // the function returns the length of the tour stored in tour[0..n-1]

    int NearestNeighbour(int n, int** d, int s, int* tour)
    {
        bool* visited = new bool[n];
        for (int i = 0; i < n; i++)
        {
            visited[i] = false;
        }
        tour[0] = s;                           // the tour starts at city s
        visited[s] = true;

        for (int len = 1; len < n; len++)
        {
            int last = tour[len - 1];          // last city of the partial tour
            int k = -1;                        // nearest unvisited city
            for (int j = 0; j < n; j++)
            {
                if (!visited[j] && (k == -1 || d[last][j] < d[last][k])) k = j;
            }
            tour[len] = k;                     // append k at the end
            visited[k] = true;
        }

        delete[] visited;
        return TourLength(n, d, tour);
    }
    ```

??? codice "MultiStartNN.cpp"

    ```cpp
    // runs the nearest neighbour heuristic from every city
    // and keeps the shortest tour (the first one found, in case of ties)
    // the function returns its length; the tour is stored in tour[0..n-1]

    int MultiStartNN(int n, int** d, int* tour)
    {
        int* cur = new int[n];
        int best = -1;                         // length of the best tour found
        for (int s = 0; s < n; s++)
        {
            int L = NearestNeighbour(n, d, s, cur);
            if (best == -1 || L < best)
            {
                best = L;
                for (int k = 0; k < n; k++) tour[k] = cur[k];
            }
        }
        delete[] cur;
        return best;
    }
    ```

- In <code>Insertion</code> the three selection rules share the same loop: the value of a candidate is its distance from the subtour ($NI$), the same distance with the sign changed, so that the minimum corresponds to the farthest city ($FI$), or its minimum insertion cost ($CI$).

??? codice "Insertion.cpp"

    ```cpp
    // insertion heuristics: starting from the subtour (s), the city selected by
    // the rule is inserted into the subtour where it increases the length the least
    // rule: 0 = nearest insertion (NI), 1 = farthest insertion (FI), 2 = cheapest insertion (CI)
    // the function returns the length of the tour stored in tour[0..n-1]

    // cheapest position for city k in the subtour tour[0..len-1]:
    // returns the increase of length, and in *pos the edge (tour[a], tour[a+1]) to break
    static int BestPosition(int len, int** d, int* tour, int k, int* pos)
    {
        int best = -1;
        for (int a = 0; a < len; a++)
        {
            int i = tour[a], j = tour[(a + 1) % len];
            int cost = d[i][k] + d[k][j] - d[i][j];
            if (best == -1 || cost < best)
            {
                best = cost;
                *pos = a;
            }
        }
        return best;
    }

    int Insertion(int n, int** d, int s, int rule, int* tour)
    {
        bool* in = new bool[n];                // in[i] = true if city i is in the subtour
        for (int i = 0; i < n; i++)
        {
            in[i] = false;
        }
        tour[0] = s;                           // the subtour (s)
        in[s] = true;

        for (int len = 1; len < n; len++)
        {
            // selection step: city k to be inserted
            int k = -1, keyk = 0, pos = 0;
            for (int q = 0; q < n; q++)
            {
                if (in[q]) continue;
                int key;                       // value of city q for the rule
                if (rule == 2)
                {
                    int a;
                    key = BestPosition(len, d, tour, q, &a);   // insertion cost
                }
                else
                {
                    key = d[q][tour[0]];       // distance from the subtour
                    for (int a = 1; a < len; a++)
                    {
                        if (d[q][tour[a]] < key) key = d[q][tour[a]];
                    }
                    if (rule == 1) key = -key; // farthest: maximize the distance
                }
                if (k == -1 || key < keyk)
                {
                    k = q;
                    keyk = key;
                }
            }
            // insertion step: k goes where it increases the length the least
            BestPosition(len, d, tour, k, &pos);
            for (int a = len; a > pos + 1; a--)
            {
                tour[a] = tour[a - 1];
            }
            tour[pos + 1] = k;
            in[k] = true;
        }

        delete[] in;
        return TourLength(n, d, tour);
    }
    ```

## 29.14.6 Randomized construction

- The threshold of the RCL is tested in integer arithmetic, with $\alpha$ given as a fraction $\frac{\alpha_{num}}{\alpha_{den}}$, so that no rounding error can change the list.

??? codice "ParkMiller.cpp"

    ```cpp
    // Park-Miller minimal standard generator:
    // seed <- 16807 * seed mod (2^31 - 1), and u = seed / (2^31 - 1) in (0,1)

    double ParkMiller(long long* seed)
    {
        *seed = (16807LL * (*seed)) % 2147483647LL;
        return (double)(*seed) / 2147483647.0;
    }
    ```

??? codice "RandomizedNN.cpp"

    ```cpp
    // randomized nearest neighbour with a value-based restricted candidate list:
    // RCL = { j unvisited : d[last][j] <= dmin + alpha (dmax - dmin) },
    // with alpha = alpha_num / alpha_den; the next city is drawn uniformly from the RCL
    // (a random number is used only when the RCL has at least two cities)
    // the function returns the length of the tour stored in tour[0..n-1]

    int RandomizedNN(int n, int** d, int s, int alpha_num, int alpha_den,
                     long long* seed, int* tour)
    {
        bool* visited = new bool[n];
        int* RCL = new int[n];
        for (int i = 0; i < n; i++)
        {
            visited[i] = false;
        }
        tour[0] = s;
        visited[s] = true;

        for (int len = 1; len < n; len++)
        {
            int last = tour[len - 1];
            int dmin = -1, dmax = -1;          // smallest and largest distance from last
            for (int j = 0; j < n; j++)
            {
                if (visited[j]) continue;
                if (dmin == -1 || d[last][j] < dmin) dmin = d[last][j];
                if (dmax == -1 || d[last][j] > dmax) dmax = d[last][j];
            }
            int size = 0;                      // restricted candidate list
            for (int j = 0; j < n; j++)
            {
                // d <= dmin + alpha (dmax - dmin), in integer arithmetic
                if (!visited[j] && alpha_den * d[last][j] <= alpha_den * dmin + alpha_num * (dmax - dmin))
                {
                    RCL[size] = j;
                    size++;
                }
            }
            int k = RCL[0];
            if (size > 1)
            {
                double u = ParkMiller(seed);   // random number in (0,1)
                k = RCL[(int)(u * size)];      // uniform choice in the RCL
            }
            tour[len] = k;
            visited[k] = true;
        }

        delete[] RCL;
        delete[] visited;
        return TourLength(n, d, tour);
    }
    ```

## 29.14.7 Regret and look-ahead

??? codice "Regret2Insertion.cpp"

    ```cpp
    // regret-2 insertion: starting from the subtour (s), insert the city with the largest
    // regret = (second cheapest insertion cost) - (cheapest insertion cost),
    // ties broken by the smaller cheapest cost, then by the smaller index,
    // at its cheapest position
    // the function returns the length of the tour stored in tour[0..n-1]

    int Regret2Insertion(int n, int** d, int s, int* tour)
    {
        bool* in = new bool[n];
        for (int i = 0; i < n; i++)
        {
            in[i] = false;
        }
        tour[0] = s;
        in[s] = true;

        for (int len = 1; len < n; len++)
        {
            int k = -1, regk = 0, c1k = 0, posk = 0;
            for (int q = 0; q < n; q++)
            {
                if (in[q]) continue;
                int c1 = -1, c2 = -1, pos = 0; // cheapest and second cheapest cost
                for (int a = 0; a < len; a++)
                {
                    int i = tour[a], j = tour[(a + 1) % len];
                    int cost = d[i][q] + d[q][j] - d[i][j];
                    if (c1 == -1 || cost < c1)
                    {
                        c2 = c1;
                        c1 = cost;
                        pos = a;
                    }
                    else if (c2 == -1 || cost < c2)
                    {
                        c2 = cost;
                    }
                }
                if (c2 == -1) c2 = c1;         // a single position: no regret
                int reg = c2 - c1;
                if (k == -1 || reg > regk || (reg == regk && c1 < c1k))
                {
                    k = q;
                    regk = reg;
                    c1k = c1;
                    posk = pos;
                }
            }
            for (int a = len; a > posk + 1; a--)   // insert k after position posk
            {
                tour[a] = tour[a - 1];
            }
            tour[posk + 1] = k;
            in[k] = true;
        }

        delete[] in;
        return TourLength(n, d, tour);
    }
    ```

??? codice "PilotNN.cpp"

    ```cpp
    // pilot method with the nearest neighbour heuristic as pilot:
    // every candidate next city is evaluated by completing the partial tour
    // with nearest neighbour; the candidate with the shortest completed tour is appended
    // the function returns the length of the tour stored in tour[0..n-1]

    int PilotNN(int n, int** d, int s, int* tour)
    {
        bool* visited = new bool[n];
        int* trial = new int[n];               // partial tour completed by the pilot
        bool* used = new bool[n];
        for (int i = 0; i < n; i++)
        {
            visited[i] = false;
        }
        tour[0] = s;
        visited[s] = true;

        for (int len = 1; len < n; len++)
        {
            int k = -1, bestL = -1;
            for (int q = 0; q < n; q++)        // candidate next city q
            {
                if (visited[q]) continue;
                for (int i = 0; i < n; i++) used[i] = visited[i];
                for (int a = 0; a < len; a++) trial[a] = tour[a];
                trial[len] = q;
                used[q] = true;
                for (int t = len + 1; t < n; t++)  // pilot: nearest neighbour completion
                {
                    int last = trial[t - 1], next = -1;
                    for (int j = 0; j < n; j++)
                    {
                        if (!used[j] && (next == -1 || d[last][j] < d[last][next])) next = j;
                    }
                    trial[t] = next;
                    used[next] = true;
                }
                int L = TourLength(n, d, trial);
                if (k == -1 || L < bestL)
                {
                    k = q;
                    bestL = L;
                }
            }
            tour[len] = k;                     // append the best candidate
            visited[k] = true;
        }

        delete[] used;
        delete[] trial;
        delete[] visited;
        return TourLength(n, d, tour);
    }
    ```

---

**Exercises on this chapter:** [:material-pencil: Constructive](../../exercises/constructive-heuristics.md)

