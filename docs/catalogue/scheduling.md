---
title: "Scheduling"
---

# Scheduling

<div class="info-capitolo" markdown>

**Catalogue of combinatorial problems** · [:material-file-pdf-box: Catalogue (PDF)](../pdf/combinatorial-problem-catalogue.pdf)

</div>

<a id="sec:cat-pagina-scheduling"></a>

## Scheduling on a fixed number of identical machines ($Pm\|C_{\max}$) { #sez-sec-cat-def-pmcmax }

<a id="box-1-def-catdef-pmcmax"></a>

!!! definizione "Definition 1: Scheduling on a fixed number of identical machines"

    The problem $P\,||\,C_{\max}$ in which the number $m$ of machines is a constant, for example $m=2$, and only the jobs $\Jlavori$ and the processing times $t_j \in \Z_{\ge 1}$ form the input.

- Defined in [Chapter 1 «Combinatorial optimization problems»](../combinatorial-optimization-problems/combinatorial-optimization.md#sez-sec-complexity).

## Scheduling on parallel machines with different speeds ($Q\|C_{\max}$) { #sez-sec-cat-def-qcmax }

<a id="box-2-def-catdef-qcmax"></a>

!!! definizione "Definition 2: Scheduling on parallel machines with different speeds"

    In the three-field notation $\alpha\,|\,\beta\,|\,\gamma$, the machine environment $\alpha=Q$ denotes parallel machines with different speeds; $Q\,||\,C_{\max}$ assigns jobs without additional characteristics to such machines, minimizing the makespan $C_{\max}$.

- Defined in [Chapter 7 «Parallel machine scheduling»](../combinatorial-optimization-problems/pcmax/index.md#sez-sec-threefield).

## Scheduling on unrelated parallel machines ($R\|C_{\max}$) { #sez-sec-cat-def-rcmax }

<a id="box-3-def-catdef-rcmax"></a>

!!! definizione "Definition 3: Scheduling on unrelated parallel machines"

    In the three-field notation $\alpha\,|\,\beta\,|\,\gamma$, the machine environment $\alpha=R$ denotes unrelated parallel machines; $R\,||\,C_{\max}$ assigns jobs without additional characteristics to such machines, minimizing the makespan $C_{\max}$.

- Defined in [Chapter 7 «Parallel machine scheduling»](../combinatorial-optimization-problems/pcmax/index.md#sez-sec-threefield).
