/* Laboratorio di «Ottimizzazione combinatoria / Combinatorial Optimization»: zaino e colorazione.
 *
 *   oc-dp-knapsack   zaino 0-1: la tabella v(j,k) della programmazione dinamica si riempie una cella alla volta,
 *                    poi la ricostruzione della soluzione dall'ultima cella
 *   oc-bb-knapsack   zaino 0-1: branch-and-bound a profondità, albero con i bound di Dantzig (esatti, frazioni)
 *   oc-coloring      colorazione dei vertici: greedy (lista data o grado decrescente) e DSATUR, passo per passo
 *
 * Notazione del corso: capacità c, profitti p_j, pesi w_j, v(j,k) = valore ottimo con i primi j oggetti e capacità k;
 * istanza di riferimento KP p = (10, 7, 6, 4), w = (5, 4, 3, 3), c = 9; colorazione: grafo di Petersen e grafo
 * a corona G_4 (vertici u_i = 2i-1, v_i = 2i, spigoli {2i-1, 2j} con i ≠ j).
 * Le funzioni di calcolo sono anche in window.GI_OC_A, per le prove.
 */
(function () {
  "use strict";
  const GI = window.GI, M = window.GI_MIP, O = window.GI_OC;
  const T = GI.T;
  const { PASSO, parPasso, DESCR_PASSO, vaiA, clamp, somma, lista, pct, nuovoId, osservaDimensioni, nuovaVoce, dim, pix, disegno, daIndirizzo, chiedi, interi } = O;
  window.GI_RICETTE = window.GI_RICETTE || {};

  // =================================================================
  // 1. PROGRAMMAZIONE DINAMICA PER LO ZAINO
  // =================================================================
  const KP_ES = [{ p: [10, 7, 6, 4], w: [5, 4, 3, 3], c: 9 }, { p: [3, 4, 5, 6], w: [2, 3, 4, 5], c: 5 }];
  function dpCalcola(I) {
    const { p, w, c } = I, n = p.length, V = [];
    for (let j = 0; j <= n; j++) V.push(new Array(c + 1).fill(0));
    const celle = [];
    for (let j = 1; j <= n; j++) for (let k = 0; k <= c; k++) {
      const a = V[j - 1][k], ok = w[j - 1] <= k, b = ok ? V[j - 1][k - w[j - 1]] + p[j - 1] : null;
      V[j][k] = ok && b > a ? b : a;
      celle.push({ j, k, a, ok, b, v: V[j][k], prende: ok && b > a });
    }
    // ricostruzione: se v(j,k) = v(j-1,k) l'oggetto j non serve (pareggio: non si prende)
    const tb = [];
    let k = c;
    for (let j = n; j >= 1; j--) {
      const prende = V[j][k] !== V[j - 1][k];
      tb.push({ j, k, prende });
      if (prende) k -= w[j - 1];
    }
    const presi = tb.filter((x) => x.prende).map((x) => x.j).sort((a, b) => a - b);
    return { V, celle, tb, presi, N: celle.length, K: celle.length + n, kfin: k, val: V[n][c], peso: somma(presi.map((j) => w[j - 1])) };
  }
  function kpCasuale() {
    const n = M.casuale(4, 6), p = [], w = [];
    for (let j = 0; j < n; j++) { w.push(M.casuale(2, 6)); p.push(M.casuale(3, 12)); }
    return { p, w, c: M.casuale(7, 12) };
  }
  function dpStato(st) {
    const D = st.dati;
    if (!D.ist) D.ist = { p: KP_ES[0].p.slice(), w: KP_ES[0].w.slice(), c: KP_ES[0].c, id: nuovoId() };
    if (D.dpId !== D.ist.id) { D.dpId = D.ist.id; D.dp = dpCalcola(D.ist); }
    const R = D.dp, k = M.passoK(st, R.K, PASSO);
    return { D, I: D.ist, R, k, cur: k >= 1 && k <= R.N ? R.celle[k - 1] : null, t: k > R.N ? k - R.N : 0 };
  }

  window.GI_RICETTE["oc-dp-knapsack"] = {
    titolo: T("Tabella della programmazione dinamica per lo zaino", "DP table for the knapsack"),
    parametri: [parPasso(T("◀ ▶ una cella alla volta, «Esegui» per vederle tutte", "◀ ▶ one cell at a time, «Run» to watch them all"))],
    assi: false,
    opzioniBoard: M.OPZ,
    vista: [-1, 10, 20, -2],
    legenda: (st) => {
      const C = M.COL(st);
      return [
        [C.b, T("celle già calcolate", "cells already computed"), "pieno"],
        [C.a, T("cella che si calcola", "cell being computed"), "pieno"],
        [C.blu, T("\\(v(j-1,k)\\): non prendo l'oggetto \\(j\\)", "\\(v(j-1,k)\\): item \\(j\\) is not taken"), "dashed"],
        [C.verde, T("\\(v(j-1,k-w_j)+p_j\\): prendo l'oggetto \\(j\\)", "\\(v(j-1,k-w_j)+p_j\\): item \\(j\\) is taken"), "dashed"],
        [C.verde, T("percorso della ricostruzione", "reconstruction path"), "pieno"],
      ];
    },
    monta(board, st) {
      const D = st.dati;
      const nuova = (I) => { D.ist = Object.assign(I, { id: nuovoId() }); vaiA(st, 1); M.ferma(st); st.aggiorna(); };
      M.comandi(st, [
        [T("Esempio 1", "Example 1"), T("istanza del corso: p = (10, 7, 6, 4), w = (5, 4, 3, 3), c = 9", "course instance: p = (10, 7, 6, 4), w = (5, 4, 3, 3), c = 9"), () => nuova({ p: KP_ES[0].p.slice(), w: KP_ES[0].w.slice(), c: KP_ES[0].c })],
        [T("Esempio 2", "Example 2"), T("p = (3, 4, 5, 6), w = (2, 3, 4, 5), c = 5", "p = (3, 4, 5, 6), w = (2, 3, 4, 5), c = 5"), () => nuova({ p: KP_ES[1].p.slice(), w: KP_ES[1].w.slice(), c: KP_ES[1].c })],
        [T("Casuale", "Random"), T("dati casuali", "random data"), () => nuova(kpCasuale())],
        [T("Modifica…", "Edit…"), T("scrivi profitti, pesi e capacità", "type profits, weights and capacity"), () => {
          const s = chiedi(T("Profitti, pesi e capacità separati da «;» (da 2 a 7 oggetti, c fino a 20), per esempio: 10 7 6 4 ; 5 4 3 3 ; 9",
            "Profits, weights and capacity separated by «;» (2 to 7 items, c up to 20), for example: 10 7 6 4 ; 5 4 3 3 ; 9"),
            D.ist.p.join(" ") + " ; " + D.ist.w.join(" ") + " ; " + D.ist.c);
          if (!s) return;
          const [a, b, c] = s.split(";"), p = interi(a || ""), w = interi(b || ""), cc = interi(c || "");
          if (!p || !w || !cc || cc.length !== 1 || p.length !== w.length || p.length < 2 || p.length > 7 || cc[0] > 20) { window.alert(T("Dati non validi: interi positivi, stesso numero di profitti e di pesi.", "Invalid data: positive integers, as many profits as weights.")); return; }
          nuova({ p, w, c: cc[0] });
        }],
      ], { k: PASSO, ritmo: 450 });
      osservaDimensioni(board, st);
      daIndirizzo(st);
    },
    aggiorna(board, st) {
      const S = dpStato(st), C = M.COL(st), [W, H] = dim(board), { I, R, k, cur, t } = S, n = I.p.length, c = I.c;
      M.ridisegna(board, st, [I.dpId || S.D.dpId, k, M.scuro(), W, H].join("|"), (crea) => {
        pix(board);
        const d = disegno(crea, H);
        const lw = clamp(W * 0.2, 96, 200), top = 40, pad = 10;
        const cs = Math.max(14, Math.min((W - lw - pad) / (c + 1), (H - top - pad) / (n + 1)));
        const fs = clamp(cs * 0.42, 9, 17), fl = clamp(cs * 0.36, 9, 15);
        const cx = (kk) => lw + kk * cs, cy = (j) => top + j * cs;
        d.text(lw - 8, top - 10, T("capacità k →", "capacity k →"), { anchorX: "right", fontSize: fl, strokeColor: C.muted, cssStyle: "font-style:italic" });
        for (let kk = 0; kk <= c; kk++) d.text(cx(kk) + cs / 2, top - 10, String(kk), { fontSize: fl, strokeColor: C.muted, cssStyle: "font-weight:600" });
        const cella = (j, kk, attr) => d.rect(cx(kk) + 1, cy(j) + 1, cs - 2, cs - 2, attr);
        const fatte = Math.min(k, R.N);
        const prese = new Set(R.tb.slice(0, t).filter((x) => x.prende).map((x) => x.j));
        const rifiutate = new Set(R.tb.slice(0, t).filter((x) => !x.prende).map((x) => x.j));
        for (let j = 0; j <= n; j++) {
          const lab = j === 0 ? T("j = 0 (nessun oggetto)", "j = 0 (no item)") : `j = ${j}:  p=${I.p[j - 1]}, w=${I.w[j - 1]}`;
          const col = prese.has(j) ? C.verde : rifiutate.has(j) ? C.muted : C.testo;
          d.text(lw - 8, cy(j) + cs / 2, lab + (prese.has(j) ? " ✓" : rifiutate.has(j) ? " ✗" : ""), { anchorX: "right", fontSize: fl, strokeColor: col, cssStyle: "font-weight:" + (prese.has(j) ? 700 : 500) });
          for (let kk = 0; kk <= c; kk++) {
            const idx = j === 0 ? -1 : (j - 1) * (c + 1) + kk;
            const calc = j === 0 || idx < fatte;
            if (calc) {
              cella(j, kk, { strokeColor: C.line, strokeWidth: 1, fillColor: C.b, fillOpacity: j === 0 ? 0.06 : 0.14 });
              d.text(cx(kk) + cs / 2, cy(j) + cs / 2, String(R.V[j][kk]), { fontSize: fs, strokeColor: C.testo });
            } else cella(j, kk, { strokeColor: C.line, strokeWidth: 1, fillColor: "none", fillOpacity: 0 });
          }
        }
        if (cur) {
          const { j, k: kk } = cur;
          cella(j, kk, { strokeColor: C.a, strokeWidth: 3, fillColor: C.a, fillOpacity: 0.5 });
          d.text(cx(kk) + cs / 2, cy(j) + cs / 2, String(cur.v), { fontSize: fs, strokeColor: C.testo, cssStyle: "font-weight:800" });
          cella(j - 1, kk, { strokeColor: C.blu, strokeWidth: 3.5, fillColor: "none", fillOpacity: 0 });
          if (cur.ok) cella(j - 1, kk - I.w[j - 1], { strokeColor: C.verde, strokeWidth: 3.5, fillColor: "none", fillOpacity: 0, dash: 2 });
        }
        if (t > 0) {
          R.tb.slice(0, t).forEach((x, i) => {
            cella(x.j, x.k, { strokeColor: C.verde, strokeWidth: i === t - 1 ? 4 : 2.5, fillColor: C.verde, fillOpacity: i === t - 1 ? 0.4 : 0.22 });
            d.text(cx(x.k) + cs / 2, cy(x.j) + cs / 2, String(R.V[x.j][x.k]), { fontSize: fs, strokeColor: C.testo, cssStyle: "font-weight:800" });
          });
          if (t === n) {
            cella(0, R.kfin, { strokeColor: C.verde, strokeWidth: 3, fillColor: C.verde, fillOpacity: 0.25 });
            d.text(cx(R.kfin) + cs / 2, cy(0) + cs / 2, "0", { fontSize: fs, strokeColor: C.testo, cssStyle: "font-weight:800" });
          }
        }
      });
    },
    formula(p, st) {
      const S = dpStato(st), { I, R, k, cur, t } = S;
      if (k === 0) return T("v(0,k) = 0 \\quad \\text{per ogni } k", "v(0,k) = 0 \\quad \\text{for every } k");
      if (cur) {
        const { j, k: kk } = cur, wj = I.w[j - 1], pj = I.p[j - 1];
        if (!cur.ok) return `v(${j},${kk}) = v(${j - 1},${kk}) = ${cur.v} \\qquad (w_{${j}} = ${wj} > ${kk})`;
        return `v(${j},${kk}) = \\max\\{v(${j - 1},${kk}),\\ v(${j - 1},${kk - wj}) + ${pj}\\} = \\max\\{${cur.a},\\ ${cur.b - pj} + ${pj}\\} = ${cur.v}`;
      }
      const x = R.tb[t - 1];
      return x.prende ? `v(${x.j},${x.k}) \\ne v(${x.j - 1},${x.k}) \\;\\Rightarrow\\; x_{${x.j}} = 1,\\quad k \\leftarrow ${x.k} - ${I.w[x.j - 1]}`
        : `v(${x.j},${x.k}) = v(${x.j - 1},${x.k}) \\;\\Rightarrow\\; x_{${x.j}} = 0`;
    },
    letture(p, st) {
      const S = dpStato(st), { I, R, k, cur, t } = S, C = M.COL(st), n = I.p.length;
      let nota;
      if (k === 0) nota = T(`Riga \\(j=0\\): senza oggetti il valore è \\(0\\) per ogni capacità. Capacità \\(c = ${I.c}\\), \\(n = ${n}\\) oggetti: la tabella ha \\(${n}\\cdot ${I.c + 1} = ${R.N}\\) celle da calcolare (\\(\\Theta(nc)\\)).`,
        `Row \\(j=0\\): with no items the value is \\(0\\) for every capacity. Capacity \\(c = ${I.c}\\), \\(n = ${n}\\) items: the table has \\(${n}\\cdot ${I.c + 1} = ${R.N}\\) cells to compute (\\(\\Theta(nc)\\)).`);
      else if (cur) {
        const { j, k: kk } = cur;
        nota = !cur.ok
          ? T(`Cella \\((${j},${kk})\\): l'oggetto ${j} pesa \\(${I.w[j - 1]} > ${kk}\\), non entra: si copia ${M.tinta(C.blu, "la cella sopra")}, \\(${cur.v}\\).`,
            `Cell \\((${j},${kk})\\): item ${j} weighs \\(${I.w[j - 1]} > ${kk}\\), it does not fit: copy ${M.tinta(C.blu, "the cell above")}, \\(${cur.v}\\).`)
          : T(`Cella \\((${j},${kk})\\): non prendo l'oggetto ${j}, ${M.tinta(C.blu, "\\(" + cur.a + "\\)")}; lo prendo, ${M.tinta(C.verde, "\\(" + (cur.b - I.p[j - 1]) + " + " + I.p[j - 1] + " = " + cur.b + "\\)")} (cella \\((${j - 1},${kk - I.w[j - 1]})\\) più il profitto). Vale il massimo: \\(${cur.v}\\)${cur.prende ? "" : " (a pari valore, non si prende)"}.`,
            `Cell \\((${j},${kk})\\): without item ${j}, ${M.tinta(C.blu, "\\(" + cur.a + "\\)")}; with it, ${M.tinta(C.verde, "\\(" + (cur.b - I.p[j - 1]) + " + " + I.p[j - 1] + " = " + cur.b + "\\)")} (cell \\((${j - 1},${kk - I.w[j - 1]})\\) plus the profit). The maximum is \\(${cur.v}\\)${cur.prende ? "" : " (on a tie, the item is not taken)"}.`);
        if (k === R.N) nota += T(` Tabella completa: il valore ottimo è \\(v(${n},${I.c}) = ${R.val}\\). Ora si risale dalla cella \\((${n},${I.c})\\).`, ` Table complete: the optimal value is \\(v(${n},${I.c}) = ${R.val}\\). Now go back up from cell \\((${n},${I.c})\\).`);
      } else {
        const x = R.tb[t - 1];
        nota = x.prende
          ? T(`Cella \\((${x.j},${x.k})\\): \\(v(${x.j},${x.k}) = ${R.V[x.j][x.k]} \\neq ${R.V[x.j - 1][x.k]} = v(${x.j - 1},${x.k})\\): l'oggetto ${x.j} è stato preso, \\(x_{${x.j}} = 1\\); si sale alla colonna \\(${x.k} - ${I.w[x.j - 1]} = ${x.k - I.w[x.j - 1]}\\).`,
            `Cell \\((${x.j},${x.k})\\): \\(v(${x.j},${x.k}) = ${R.V[x.j][x.k]} \\neq ${R.V[x.j - 1][x.k]} = v(${x.j - 1},${x.k})\\): item ${x.j} was taken, \\(x_{${x.j}} = 1\\); go up to column \\(${x.k} - ${I.w[x.j - 1]} = ${x.k - I.w[x.j - 1]}\\).`)
          : T(`Cella \\((${x.j},${x.k})\\): \\(v(${x.j},${x.k}) = v(${x.j - 1},${x.k})\\): l'oggetto ${x.j} non serve, \\(x_{${x.j}} = 0\\); si sale restando nella colonna \\(${x.k}\\).`,
            `Cell \\((${x.j},${x.k})\\): \\(v(${x.j},${x.k}) = v(${x.j - 1},${x.k})\\): item ${x.j} is not needed, \\(x_{${x.j}} = 0\\); go up staying in column \\(${x.k}\\).`);
        if (t === n) nota += T(` Fine: si prendono gli oggetti ${lista(R.presi)}, peso ${R.peso} ≤ ${I.c}, profitto ${M.tinta(C.verde, String(R.val))}.`, ` End: items ${lista(R.presi)} are taken, weight ${R.peso} ≤ ${I.c}, profit ${M.tinta(C.verde, String(R.val))}.`);
      }
      const righe = [
        [T("celle calcolate", "cells computed"), `\\(${Math.min(k, R.N)} / ${R.N}\\)`],
        [T("valore ottimo \\(v(n,c)\\)", "optimal value \\(v(n,c)\\)"), k >= R.N ? `\\(${R.val}\\)` : "—"],
        [T("oggetti presi", "items taken"), t === n ? `\\(\\{${lista(R.presi)}\\}\\)` : "—"],
      ];
      return nota + M.tab([T("tabella", "table"), T("valore", "value")], righe, -1, C.a);
    },
    domanda: T("Quante celle della tabella non servono per la soluzione? Dopo la ricostruzione, quale oggetto è stato scartato anche se entrava? Cambia \\(c\\) con «Modifica…» e guarda come cambia il percorso.",
      "How many cells of the table are not needed for the solution? After the reconstruction, which item was discarded although it fit? Change \\(c\\) with «Edit…» and see how the path changes."),
  };

  // =================================================================
  // 2. BRANCH-AND-BOUND PER LO ZAINO
  // =================================================================
  const BB_ES = [{ p: [10, 7, 6, 4], w: [5, 4, 3, 3], c: 9 }, { p: [15, 12, 10, 9, 7, 5, 3], w: [7, 6, 5, 5, 4, 3, 2], c: 16 }];
  /** albero del branch-and-bound a profondità: x_j = 1 prima di x_j = 0, bound di Dantzig, incumbent z */
  function bbCalcola(I) {
    const { p, w, c } = I, n = p.length;
    const ord = p.map((_, j) => j).sort((i, j) => (p[j] * w[i] - p[i] * w[j]) || (i - j));
    const ps = ord.map((j) => p[j]), ws = ord.map((j) => w[j]);
    const nodi = [];
    let z = 0, xott = [];
    const dantzig = (j, P, Wt) => {
      let r = c - Wt, v = M.Q(P), split = null;
      for (let i = j; i < n; i++) {
        if (ws[i] <= r) { r -= ws[i]; v = M.Qadd(v, M.Q(ps[i])); }
        else { if (r > 0) v = M.Qadd(v, M.Q(ps[i] * r, ws[i])); split = i; break; }
      }
      return { v, split, r };
    };
    const visita = (j, P, Wt, padre, x, xs) => {
      const nodo = { id: nodi.length, padre, liv: j, x, P, W: Wt, xs: xs.slice(), figli: [] };
      nodi.push(nodo);
      if (padre !== null) nodi[padre].figli.push(nodo.id);
      if (Wt > c) { nodo.stato = "inammissibile"; nodo.z = z; return; }
      const u = dantzig(j, P, Wt);
      nodo.ub = u.v; nodo.split = u.split; nodo.ubInt = M.Qfloor(u.v);
      if (u.split === null) {   // il bound è una soluzione ammissibile: tutti gli oggetti rimasti entrano
        const val = M.Qv(u.v);
        nodo.stato = val > z ? "migliora" : "integrale";
        if (val > z) { z = val; xott = xs.concat(Array(n - j).fill(1)); }
        nodo.z = z;
        return;
      }
      if (nodo.ubInt <= z) { nodo.stato = "potato"; nodo.z = z; return; }
      nodo.stato = "ramifica"; nodo.z = z;
      nodo.ramo = j;
      if (Wt + ws[j] <= c) visita(j + 1, P + ps[j], Wt + ws[j], nodo.id, 1, xs.concat([1]));
      else { const f = { id: nodi.length, padre: nodo.id, liv: j + 1, x: 1, P: P + ps[j], W: Wt + ws[j], xs: xs.concat([1]), figli: [], stato: "inammissibile", z }; nodi.push(f); nodo.figli.push(f.id); }
      visita(j + 1, P, Wt, nodo.id, 0, xs.concat([0]));
      nodo.zDopo = z;
    };
    visita(0, 0, 0, null, null, []);
    // posizioni orizzontali: le foglie in ordine, i nodi interni al centro dei figli
    let foglia = 0;
    const pos = (id) => {
      const nd = nodi[id];
      if (!nd.figli.length) nd.xp = foglia++;
      else { nd.figli.forEach(pos); nd.xp = (nodi[nd.figli[0]].xp + nodi[nd.figli[nd.figli.length - 1]].xp) / 2; }
    };
    pos(0);
    const prof = dpCalcola(I);
    return { nodi, ord, ps, ws, z, xott: ord.map((j, i) => [j, xott[i] || 0]), foglie: foglia, ottDP: prof.val, c };
  }
  function bbStato(st) {
    const D = st.dati;
    if (!D.ist) D.ist = { p: BB_ES[0].p.slice(), w: BB_ES[0].w.slice(), c: BB_ES[0].c, id: nuovoId() };
    if (D.bbId !== D.ist.id) { D.bbId = D.ist.id; D.bb = bbCalcola(D.ist); }
    const R = D.bb, k = M.passoK(st, R.nodi.length, PASSO);
    return { D, I: D.ist, R, k, cur: k >= 1 ? R.nodi[k - 1] : null };
  }
  const STILE_NODO = (C) => ({
    ramifica: { f: C.b, o: 0.25, s: C.b }, potato: { f: C.rosso, o: 0.3, s: C.rosso }, inammissibile: { f: C.grigio, o: 0.3, s: C.grigio },
    integrale: { f: C.verde, o: 0.22, s: C.verde }, migliora: { f: C.verde, o: 0.5, s: C.verde },
  });

  window.GI_RICETTE["oc-bb-knapsack"] = {
    titolo: T("Branch-and-bound per lo zaino", "Branch-and-bound for the knapsack"),
    parametri: [parPasso(T("◀ ▶ un nodo alla volta, «Esegui» per vederli tutti", "◀ ▶ one node at a time, «Run» to watch them all"))],
    assi: false,
    opzioniBoard: M.OPZ,
    vista: [-1, 10, 20, -2],
    legenda: (st) => {
      const C = M.COL(st);
      return [
        [C.a, T("nodo in esame", "node under examination"), "pieno"],
        [C.b, T("nodo che si ramifica", "branching node"), "pieno"],
        [C.rosso, T("potato per bound (\\(\\lfloor UB \\rfloor \\le z\\))", "pruned by bound (\\(\\lfloor UB \\rfloor \\le z\\))"), "pieno"],
        [C.grigio, T("inammissibile (\\(W > c\\))", "infeasible (\\(W > c\\))"), "pieno"],
        [C.verde, T("soluzione intera: aggiorna \\(z\\)", "integer solution: updates \\(z\\)"), "pieno"],
      ];
    },
    monta(board, st) {
      const D = st.dati;
      const nuova = (I) => { D.ist = Object.assign(I, { id: nuovoId() }); vaiA(st, 1); M.ferma(st); st.aggiorna(); };
      M.comandi(st, [
        [T("Esempio 1", "Example 1"), T("istanza del corso: p = (10, 7, 6, 4), w = (5, 4, 3, 3), c = 9", "course instance: p = (10, 7, 6, 4), w = (5, 4, 3, 3), c = 9"), () => nuova({ p: BB_ES[0].p.slice(), w: BB_ES[0].w.slice(), c: BB_ES[0].c })],
        [T("Esempio 2", "Example 2"), T("sette oggetti, c = 16", "seven items, c = 16"), () => nuova({ p: BB_ES[1].p.slice(), w: BB_ES[1].w.slice(), c: BB_ES[1].c })],
        [T("Casuale", "Random"), T("dati casuali", "random data"), () => { const I = kpCasuale(); nuova(I); }],
        [T("Modifica…", "Edit…"), T("scrivi profitti, pesi e capacità", "type profits, weights and capacity"), () => {
          const s = chiedi(T("Profitti, pesi e capacità separati da «;» (da 2 a 8 oggetti), per esempio: 10 7 6 4 ; 5 4 3 3 ; 9",
            "Profits, weights and capacity separated by «;» (2 to 8 items), for example: 10 7 6 4 ; 5 4 3 3 ; 9"), D.ist.p.join(" ") + " ; " + D.ist.w.join(" ") + " ; " + D.ist.c);
          if (!s) return;
          const [a, b, c] = s.split(";"), p = interi(a || ""), w = interi(b || ""), cc = interi(c || "");
          if (!p || !w || !cc || cc.length !== 1 || p.length !== w.length || p.length < 2 || p.length > 8) { window.alert(T("Dati non validi: interi positivi, stesso numero di profitti e di pesi.", "Invalid data: positive integers, as many profits as weights.")); return; }
          nuova({ p, w, c: cc[0] });
        }],
      ], { k: PASSO });
      osservaDimensioni(board, st);
      daIndirizzo(st);
    },
    aggiorna(board, st) {
      const S = bbStato(st), C = M.COL(st), [W, H] = dim(board), { I, R, k, cur } = S, n = I.p.length, stili = STILE_NODO(C);
      M.ridisegna(board, st, [S.D.bbId, k, M.scuro(), W, H].join("|"), (crea) => {
        pix(board);
        const d = disegno(crea, H);
        const lw = clamp(W * 0.13, 70, 130), top = 34, pad = 14;
        const dx = (W - lw - pad) / Math.max(1, R.foglie), nh = clamp((H - top - 60) / (n + 1) * 0.6, 26, 44), dy = (H - top - nh - 34) / n;
        const nw = clamp(dx - 8, 30, 74), fs = clamp(nw * 0.24, 9, 14);
        const X = (nd) => lw + (nd.xp + 0.5) * dx, Y = (nd) => top + nd.liv * dy + nh / 2;
        d.text(8, 12, T("oggetti in ordine di p/w", "items by p/w"), { anchorX: "left", fontSize: fs, strokeColor: C.muted, cssStyle: "font-style:italic" });
        for (let l = 0; l <= n; l++) {
          const y = top + l * dy + nh / 2;
          d.text(8, y, l === 0 ? T("radice", "root") : `${T("oggetto", "item")} ${R.ord[l - 1] + 1}`, { anchorX: "left", fontSize: fs, strokeColor: C.muted, cssStyle: "font-weight:600" });
        }
        const vis = R.nodi.slice(0, k);
        for (const nd of vis) if (nd.padre !== null) {
          const pa = R.nodi[nd.padre];
          d.line(X(pa), Y(pa) + nh / 2, X(nd), Y(nd) - nh / 2, { strokeColor: C.muted, strokeWidth: 1.6 });
          d.text((X(pa) + X(nd)) / 2 + (nd.x === 1 ? -9 : 9), (Y(pa) + Y(nd)) / 2, nd.x === 1 ? "1" : "0", { fontSize: fs, strokeColor: nd.x === 1 ? C.verde : C.muted, cssStyle: "font-weight:800" });
        }
        for (const nd of vis) {
          const st1 = stili[nd.stato], attuale = nd === cur;
          d.rect(X(nd) - nw / 2, Y(nd) - nh / 2, nw, nh, { strokeColor: attuale ? C.a : st1.s, strokeWidth: attuale ? 3.5 : 1.6, fillColor: attuale ? C.a : st1.f, fillOpacity: attuale ? 0.55 : st1.o });
          if (nd.stato === "inammissibile") d.text(X(nd), Y(nd), `✗ W=${nd.W}`, { fontSize: fs, strokeColor: C.testo });
          else {
            d.text(X(nd), Y(nd) - nh * 0.17, `UB=${nd.ubInt}`, { fontSize: fs, strokeColor: C.testo, cssStyle: "font-weight:800" });
            d.text(X(nd), Y(nd) + nh * 0.22, `P=${nd.P} W=${nd.W}`, { fontSize: fs * 0.82, strokeColor: C.muted });
          }
        }
        d.text(W - 10, H - 14, `z = ${cur ? cur.z : 0}`, { anchorX: "right", fontSize: clamp(fs * 1.3, 12, 17), strokeColor: C.verde, cssStyle: "font-weight:800" });
        d.text(W - 100, H - 14, T("incumbent", "incumbent"), { anchorX: "right", fontSize: fs, strokeColor: C.muted });
      });
    },
    formula(p, st) {
      const S = bbStato(st), { R, k, cur, I } = S;
      if (!cur) return "";
      const fin = k === R.nodi.length;
      if (fin) return T(`z = ${R.z} = z(I) \\quad \\text{(nodi esaminati: } ${R.nodi.length}\\text{ su } 2^{${I.p.length + 1}}-1 = ${2 ** (I.p.length + 1) - 1}\\text{)}`,
        `z = ${R.z} = z(I) \\quad \\text{(nodes examined: } ${R.nodi.length}\\text{ out of } 2^{${I.p.length + 1}}-1 = ${2 ** (I.p.length + 1) - 1}\\text{)}`);
      if (cur.stato === "inammissibile") return `W = ${cur.W} > c = ${I.c}`;
      return `UB = P + \\text{Dantzig} = ${M.Qtex(cur.ub)} \\;\\Rightarrow\\; \\lfloor UB \\rfloor = ${cur.ubInt} \\qquad z = ${cur.z}`;
    },
    letture(p, st) {
      const S = bbStato(st), { I, R, k, cur } = S, C = M.COL(st);
      if (!cur) return "";
      const ord = R.ord, xs = (nd) => nd.xs.length ? `\\((${nd.xs.map((v, i) => `x_{${ord[i] + 1}}=${v}`).join(",\\ ")})\\)` : T("nessuna decisione", "no decision");
      let nota;
      if (k === 1) nota = T(`Oggetti ordinati per \\(p_j/w_j\\) decrescente: ${lista(ord.map((j) => j + 1))}. L'albero esplora prima \\(x=1\\), poi \\(x=0\\) (profondità). Il bound di un nodo è il valore del rilassamento continuo, calcolato con la formula di Dantzig; essendo i profitti interi si può arrotondare per difetto. \\(z\\) è il valore della migliore soluzione trovata, all'inizio \\(0\\). `,
        `Items sorted by non-increasing \\(p_j/w_j\\): ${lista(ord.map((j) => j + 1))}. The tree explores \\(x=1\\) first, then \\(x=0\\) (depth first). The bound of a node is the value of the continuous relaxation, computed with the formula of Dantzig; since the profits are integer it can be rounded down. \\(z\\) is the value of the best solution found, initially \\(0\\). `);
      else nota = "";
      if (cur.stato === "inammissibile") nota += T(`Nodo ${cur.id + 1}: ${xs(cur)} dà peso \\(W = ${cur.W} > c = ${I.c}\\): ${M.tinta(C.muted, "inammissibile")}.`, `Node ${cur.id + 1}: ${xs(cur)} gives weight \\(W = ${cur.W} > c = ${I.c}\\): ${M.tinta(C.muted, "infeasible")}.`);
      else {
        const sp = cur.split;
        const dz = sp === null ? T(`Tutti gli oggetti rimasti entrano: il bound è una soluzione ammissibile, \\(\\mathrm{UB} = ${M.Qtex(cur.ub)}\\).`, `All the remaining items fit: the bound is a feasible solution, \\(\\mathrm{UB} = ${M.Qtex(cur.ub)}\\).`)
          : T(`Con residuo \\(c - W = ${I.c - cur.W}\\) l'oggetto critico è ${ord[sp] + 1} e \\(\\mathrm{UB} = ${M.Qtex(cur.ub)}\\), cioè \\(\\lfloor \\mathrm{UB} \\rfloor = ${cur.ubInt}\\).`,
            `With residual \\(c - W = ${I.c - cur.W}\\) the split item is ${ord[sp] + 1} and \\(\\mathrm{UB} = ${M.Qtex(cur.ub)}\\), that is \\(\\lfloor \\mathrm{UB} \\rfloor = ${cur.ubInt}\\).`);
        const zPrima = cur.stato === "migliora" ? cur.z : cur.z;
        let esito;
        if (cur.stato === "ramifica") esito = T(`\\(${cur.ubInt} > z = ${cur.z}\\): ${M.tinta(C.b, "si ramifica")} sull'oggetto ${ord[cur.ramo] + 1}.`, `\\(${cur.ubInt} > z = ${cur.z}\\): ${M.tinta(C.b, "branch")} on item ${ord[cur.ramo] + 1}.`);
        else if (cur.stato === "potato") esito = T(`\\(\\lfloor \\mathrm{UB} \\rfloor = ${cur.ubInt} \\le z = ${cur.z}\\): ${M.tinta(C.rosso, "potato per bound")}, nessuna soluzione migliore qui sotto.`, `\\(\\lfloor \\mathrm{UB} \\rfloor = ${cur.ubInt} \\le z = ${cur.z}\\): ${M.tinta(C.rosso, "pruned by bound")}, no better solution below.`);
        else if (cur.stato === "migliora") esito = T(`Nuovo incumbent: ${M.tinta(C.verde, "z = " + cur.z)}.`, `New incumbent: ${M.tinta(C.verde, "z = " + cur.z)}.`);
        else esito = T(`Valore non migliore di \\(z = ${cur.z}\\): il nodo si chiude.`, `Value not better than \\(z = ${cur.z}\\): the node is closed.`);
        nota += T(`Nodo ${cur.id + 1}: ${xs(cur)}, \\(P = ${cur.P}\\), \\(W = ${cur.W}\\). ${dz} ${esito}`, `Node ${cur.id + 1}: ${xs(cur)}, \\(P = ${cur.P}\\), \\(W = ${cur.W}\\). ${dz} ${esito}`);
      }
      if (k === R.nodi.length) nota += T(` Albero finito: ${M.tinta(C.verde, "z = " + R.z)}, oggetti ${lista(R.xott.filter(([, v]) => v).map(([j]) => j + 1).sort((a, b) => a - b))}.`, ` Tree finished: ${M.tinta(C.verde, "z = " + R.z)}, items ${lista(R.xott.filter(([, v]) => v).map(([j]) => j + 1).sort((a, b) => a - b))}.`);
      const righe = [
        [T("nodi esaminati", "nodes examined"), `\\(${k} / ${R.nodi.length}\\)`],
        [T("incumbent \\(z\\)", "incumbent \\(z\\)"), `\\(${cur.z}\\)`],
        [T("ottimo (programmazione dinamica)", "optimum (dynamic programming)"), k === R.nodi.length ? `\\(${R.ottDP}\\)` : "—"],
      ];
      return nota + M.tab([T("albero", "tree"), T("valore", "value")], righe, -1, C.a);
    },
    domanda: T("Perché il ramo \\(x=1\\) si esplora per primo? Prova a ordinare gli oggetti in modo diverso (con «Modifica…» metti più avanti quelli con rapporto \\(p/w\\) alto): quanti nodi in più servono?",
      "Why is the branch \\(x=1\\) explored first? Try other data with «Edit…»: how many more nodes does the tree need when the best-ratio items are far from the top?"),
  };

  // =================================================================
  // 3. COLORAZIONE DEI VERTICI
  // =================================================================
  const LATO = 10;
  const ang = (i, r, a0 = 90) => [5 + r * Math.cos((a0 + 72 * i) * Math.PI / 180), 5 + r * Math.sin((a0 + 72 * i) * Math.PI / 180)];
  const PETERSEN = {
    n: 10,
    E: [[1, 2], [1, 5], [1, 6], [2, 3], [2, 7], [3, 4], [3, 8], [4, 5], [4, 9], [5, 10], [6, 8], [6, 9], [7, 9], [7, 10], [8, 10]].map(([a, b]) => [a - 1, b - 1]),
    P: [0, 1, 2, 3, 4].map((i) => ang(i, 4.3)).concat([0, 1, 2, 3, 4].map((i) => ang(i, 2.1))),
    nome: "Petersen",
  };
  const CORONA = (() => {
    const E = [];
    for (let i = 1; i <= 4; i++) for (let j = 1; j <= 4; j++) if (i !== j) E.push([2 * i - 2, 2 * j - 1]);
    const P = [];
    for (let i = 1; i <= 4; i++) { P[2 * i - 2] = [2.5, 9 - 2.5 * (i - 1)]; P[2 * i - 1] = [7.5, 9 - 2.5 * (i - 1)]; }
    return { n: 8, E, P, nome: "crown" };
  })();
  const adiacenze = (G) => { const A = Array.from({ length: G.n }, () => new Set()); for (const [a, b] of G.E) { A[a].add(b); A[b].add(a); } return A; };
  function grafoCasuale() {
    const n = M.casuale(7, 10), E = [], P = [];
    for (let i = 0; i < n; i++) { let q; for (let t = 0; t < 200; t++) { q = [M.casuale(0, LATO), M.casuale(0, LATO)]; if (P.every((r) => Math.hypot(q[0] - r[0], q[1] - r[1]) >= 2.4)) break; } P.push(q); }
    for (let i = 0; i < n; i++) for (let j = i + 1; j < n; j++) if (Math.hypot(P[i][0] - P[j][0], P[i][1] - P[j][1]) < 5.2 && Math.random() < 0.65) E.push([i, j]);
    const A = adiacenze({ n, E });
    for (let i = 0; i < n; i++) if (!A[i].size) { let b = (i + 1) % n, dm = 1e9; for (let j = 0; j < n; j++) if (j !== i) { const dd = Math.hypot(P[i][0] - P[j][0], P[i][1] - P[j][1]); if (dd < dm) { dm = dd; b = j; } } E.push([i, b]); A[i].add(b); A[b].add(i); }
    return { n, E, P, nome: "random" };
  }
  /** passi di GC (lista data o grado decrescente) e di DSATUR; colori da 0 */
  function colTraccia(G, regola) {
    const n = G.n, A = adiacenze(G), grado = A.map((s) => s.size), col = new Array(n).fill(-1);
    const ord = regola === "gcg" ? [...Array(n).keys()].sort((i, j) => grado[j] - grado[i] || i - j) : [...Array(n).keys()];
    const passi = [{ col: col.slice(), cur: null, ord }];
    for (let s = 0; s < n; s++) {
      let v, cand = null;
      if (regola === "dsatur") {
        cand = [];
        for (let u = 0; u < n; u++) if (col[u] < 0) {
          const sat = new Set([...A[u]].filter((w) => col[w] >= 0).map((w) => col[w])).size;
          cand.push({ u, sat, du: [...A[u]].filter((w) => col[w] < 0).length });
        }
        v = cand.reduce((b, x) => (x.sat > b.sat || (x.sat === b.sat && x.du > b.du) ? x : b), cand[0]).u;
      } else v = ord[s];
      const forb = [...new Set([...A[v]].filter((w) => col[w] >= 0).map((w) => col[w]))].sort((a, b) => a - b);
      let c = 0;
      while (forb.includes(c)) c++;
      col[v] = c;
      passi.push({ col: col.slice(), cur: v, forb, c, cand, vicini: [...A[v]].sort((a, b) => a - b) });
    }
    return { passi, nc: Math.max(...col) + 1 };
  }
  /** numero cromatico (n <= 10) e numero di clique, per enumerazione */
  function cromatico(G) {
    const n = G.n, A = adiacenze(G), col = new Array(n).fill(-1);
    let best = n;
    const dfs = (v, usati) => {
      if (usati >= best) return;
      if (v === n) { best = usati; return; }
      for (let c = 0; c <= usati && c < best; c++) {
        if ([...A[v]].some((w) => w < v && col[w] === c)) continue;
        col[v] = c; dfs(v + 1, Math.max(usati, c + 1)); col[v] = -1;
      }
    };
    dfs(0, 0);
    let om = 1;
    for (let m = 1; m < 1 << n; m++) {
      const S = []; for (let i = 0; i < n; i++) if (m & (1 << i)) S.push(i);
      if (S.length > om && S.every((a, i) => S.slice(i + 1).every((b) => A[a].has(b)))) om = S.length;
    }
    return { chi: best, omega: om };
  }
  function colStato(st) {
    const D = st.dati;
    if (!D.G) { D.G = PETERSEN; D.Gid = nuovoId(); D.P = PETERSEN.P.map((q) => q.slice()); }
    if (D.cFirma !== D.Gid) {
      D.cFirma = D.Gid;
      D.ctr = {}; for (const r of ["gc", "gcg", "dsatur"]) D.ctr[r] = colTraccia(D.G, r);
      D.cro = cromatico(D.G);
    }
    const regola = st.chiave(), R = D.ctr[regola], K = D.G.n, k = M.passoK(st, K, PASSO);
    return { D, G: D.G, regola, R, K, k, E: R.passi[k] };
  }
  const COL_FUNZ = {
    gc: { etichetta: T("Greedy (lista 1…n)", "Greedy (list 1…n)") },
    gcg: { etichetta: T("Greedy (grado decrescente)", "Greedy (decreasing degree)") },
    dsatur: { etichetta: "DSATUR" },
  };
  const NOME_COL = { gc: T("Greedy, lista 1…n", "Greedy, list 1…n"), gcg: T("Greedy, grado decrescente", "Greedy, decreasing degree"), dsatur: "DSATUR" };

  window.GI_RICETTE["oc-coloring"] = {
    titolo: T("Colorazione dei vertici: greedy e DSATUR", "Vertex coloring: greedy and DSATUR"),
    funzioni: COL_FUNZ,
    etichettaFunzioni: T("Algoritmo", "Algorithm"),
    parametri: [parPasso(T("◀ ▶ un vertice alla volta, «Esegui» per vederli tutti", "◀ ▶ one vertex at a time, «Run» to watch them all"))],
    assi: false,
    stessaScala: true,
    opzioniBoard: M.OPZ,
    vista: [-1, LATO + 1, LATO + 1, -1],
    legenda: (st) => {
      const C = M.COL(st);
      return [
        [C.a, T("vertice appena colorato (bordo spesso)", "vertex just colored (thick border)"), "punto"],
        [C.muted, T("spigoli del vertice corrente", "edges of the current vertex"), ""],
        [C.grigio, T("non ancora colorato (bianco)", "not yet colored (white)"), "punto"],
      ];
    },
    monta(board, st) {
      const D = st.dati;
      nuovaVoce(st);
      D.ptsBoard = null;
      const nuovo = (G) => { D.G = G; D.Gid = nuovoId(); D.P = G.P.map((q) => q.slice()); vaiA(st, 1); M.ferma(st); st.aggiorna(); };
      M.comandi(st, [
        [T("Petersen", "Petersen"), T("il grafo di Petersen, istanza di riferimento del corso", "the Petersen graph, the reference instance of the course"), () => nuovo(PETERSEN)],
        [T("Grafo a corona", "Crown graph"), T("\\(G_4\\): il greedy con la lista 1…8 usa 4 colori, DSATUR 2", "G_4: greedy with the list 1…8 uses 4 colors, DSATUR 2"), () => nuovo(CORONA)],
        [T("Casuale", "Random"), T("un grafo casuale di 7–10 vertici", "a random graph with 7–10 vertices"), () => nuovo(grafoCasuale())],
      ], { k: PASSO });
      osservaDimensioni(board, st);
      daIndirizzo(st);
    },
    aggiorna(board, st) {
      const S = colStato(st), D = st.dati, C = M.COL(st), { G, E, k } = S, P = D.P, PAL = O.PALETTE(C);
      // i vertici: punti trascinabili
      if (D.ptsBoard !== board || D.pts.length !== G.n) {
        if (D.ptsBoard === board) for (const o of D.pts) { try { board.removeObject(o); } catch (e) { /* già tolto */ } }
        D.ptsBoard = board;
        D.pts = P.map((q, i) => {
          const pt = board.create("point", q.slice(), {
            name: String(i + 1), withLabel: false, size: 11, showInfobox: false, fillColor: "#fff", strokeColor: C.muted, strokeWidth: 2.5,
            highlightFillColor: C.grigio, highlightStrokeColor: C.a, snapToGrid: true, snapSizeX: 0.25, snapSizeY: 0.25,
          });
          pt.on("drag", () => {
            const X = clamp(pt.X(), 0, LATO), Y = clamp(pt.Y(), 0, LATO);
            if (X !== pt.X() || Y !== pt.Y()) pt.moveTo([X, Y]);
            P[i] = [pt.X(), pt.Y()];
            st.aggiorna();
          });
          return pt;
        });
      } else D.pts.forEach((pt, i) => { if (Math.abs(pt.X() - P[i][0]) > 1e-9 || Math.abs(pt.Y() - P[i][1]) > 1e-9) pt.moveTo(P[i]); });
      D.pts.forEach((pt, i) => {
        const c = E.col[i], cur = i === E.cur;
        pt.setAttribute({
          fillColor: c >= 0 ? (PAL[c] || C.muted) : (M.scuro() ? "#1b2636" : "#ffffff"),
          strokeColor: cur ? C.testo : c >= 0 ? (PAL[c] || C.muted) : C.muted, strokeWidth: cur ? 5 : 2.5, size: cur ? 13 : 11,
        });
      });
      const [W, H] = dim(board);
      if (D.dim !== W + "x" + H) { D.dim = W + "x" + H; M.adatta(board, -0.8, LATO + 0.9, LATO + 0.8, -0.8); }
      M.ridisegna(board, st, [D.Gid, k, S.regola, P.map((q) => q[0].toFixed(2) + q[1].toFixed(2)).join(";"), M.scuro(), W, H].join("|"), (crea) => {
        for (const [a, b] of G.E) {
          const sul = E.cur != null && (a === E.cur || b === E.cur);
          M.linea(crea, P[a][0], P[a][1], P[b][0], P[b][1], { strokeColor: sul ? C.testo : C.muted, strokeWidth: sul ? 3.2 : 1.8, strokeOpacity: sul ? 0.9 : 0.7 });
        }
        // il numero di ogni vertice sopra il punto, e il numero del colore accanto ai vertici colorati
        P.forEach((q, i) => M.scritta(crea, q[0], q[1], String(i + 1), { fontSize: 15, layer: 10, strokeColor: E.col[i] >= 0 ? "#ffffff" : C.testo, cssStyle: "font-weight:800;pointer-events:none" }));
        P.forEach((q, i) => { if (E.col[i] >= 0) M.scritta(crea, q[0] + 0.48, q[1] + 0.5, "c" + (E.col[i] + 1), { fontSize: 14, strokeColor: PAL[E.col[i]] || C.muted, cssStyle: "font-weight:800" }); });
      });
    },
    formula(p, st) {
      const S = colStato(st), { E, k, K, R, D } = S;
      const usati = E.col.some((c) => c >= 0) ? Math.max(...E.col) + 1 : 0;
      if (k === K) return T(`\\text{colori usati} = ${R.nc} \\qquad \\omega(G) = ${D.cro.omega} \\;\\le\\; \\chi(G) = ${D.cro.chi} \\;\\le\\; ${R.nc}`, `\\text{colors used} = ${R.nc} \\qquad \\omega(G) = ${D.cro.omega} \\;\\le\\; \\chi(G) = ${D.cro.chi} \\;\\le\\; ${R.nc}`);
      return T(`\\text{passo } ${k}/${K}:\\quad \\text{colori usati} = ${usati}`, `\\text{step } ${k}/${K}:\\quad \\text{colors used} = ${usati}`);
    },
    letture(p, st) {
      const S = colStato(st), { E, k, K, R, D, regola, G } = S, C = M.COL(st), PAL = O.PALETTE(C);
      const col = (c) => M.tinta(PAL[c] || C.muted, "c" + (c + 1));
      let nota;
      if (k === 0) nota = regola === "dsatur"
        ? T("DSATUR: a ogni passo si colora, con il colore libero più piccolo, il vertice non colorato con più colori diversi fra i vicini (grado di saturazione); a pari saturazione, il maggior numero di vicini non colorati, poi l'indice più piccolo.",
          "DSATUR: at each step color, with the smallest free color, the uncolored vertex with the most different colors among its neighbours (saturation degree); on a tie, the most uncolored neighbours, then the smallest index.")
        : T(`Greedy: i vertici si guardano nella lista ${lista(R.passi[0].ord.map((v) => v + 1))}; ognuno prende il colore libero più piccolo.`,
          `Greedy: the vertices are examined in the list ${lista(R.passi[0].ord.map((v) => v + 1))}; each takes the smallest free color.`);
      else {
        const v = E.cur + 1, vic = E.vicini.map((x) => x + 1);
        const proibiti = E.forb.length ? lista(E.forb.map((c) => col(c))) : T("nessuno", "none");
        nota = T(`Vertice ${v}, vicini ${lista(vic)}; colori già usati dai vicini: ${proibiti}. Il colore libero più piccolo è ${col(E.c)}.`,
          `Vertex ${v}, neighbours ${lista(vic)}; colors already used by the neighbours: ${proibiti}. The smallest free color is ${col(E.c)}.`);
        if (regola === "dsatur") {
          const prima = E.cand, scelto = prima.find((x) => x.u === E.cur);
          nota += `<br>${T("Scelta: fra i non colorati", "Choice: among the uncolored")}, ${prima.map((x) => `${x.u + 1}: (sat ${x.sat}, ${T("gr", "deg")} ${x.du})`).join("; ")} → ${T("vertice", "vertex")} ${scelto.u + 1}.`;
        }
        if (k === K) nota += T(` Fine: ${M.tinta(C.a, R.nc + " colori")}, un upper bound su \\(\\chi(G)\\).`, ` End: ${M.tinta(C.a, R.nc + " colors")}, an upper bound on \\(\\chi(G)\\).`);
      }
      const righe = [
        [T("colori usati dall'algoritmo", "colors used by the algorithm"), k === K ? `\\(${R.nc}\\)` : "—"],
        ...["gc", "gcg", "dsatur"].map((r) => [NOME_COL[r], `\\(${D.ctr[r].nc}\\)`]),
        [T("\\(\\chi(G)\\) (esatto)", "\\(\\chi(G)\\) (exact)"), `\\(${D.cro.chi}\\)`],
        [T("\\(\\omega(G)\\), lower bound", "\\(\\omega(G)\\), lower bound"), `\\(${D.cro.omega}\\)`],
      ];
      return nota + M.tab([T("colorazione", "coloring"), T("colori", "colors")], righe, -1, C.a);
    },
    domanda: T("Sul grafo a corona confronta il greedy con la lista 1…8 e DSATUR: perché DSATUR trova subito 2 colori? Poi trascina i vertici: cambia il risultato? (No: dipende solo dal grafo.) Con «Casuale» cerca un grafo in cui DSATUR usa più di \\(\\chi(G)\\) colori.",
      "On the crown graph compare greedy with the list 1…8 and DSATUR: why does DSATUR find 2 colors at once? Then drag the vertices: does the result change? (No: it depends only on the graph.) With «Random» look for a graph where DSATUR uses more than \\(\\chi(G)\\) colors."),
  };

  window.GI_OC_A = { dpCalcola, bbCalcola, colTraccia, cromatico, PETERSEN, CORONA };
})();
