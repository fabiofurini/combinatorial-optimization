---
title: "Variants"
---

# 8.6 Variants { #sez-sec-ls-variants }

<div class="info-capitolo" markdown>

**Part 1 · Combinatorial optimization problems · Chapter 8** · [:material-book-open-variant: Chapter 8: Lot sizing problems](index.md) · [:material-file-pdf-box: Lecture notes, volume 1 (PDF)](../../pdf/lecture-notes-1-combinatorial-optimization-problems.pdf) · [:material-pencil: Exercises: Lot sizing problems](../../exercises/lot-sizing.md)

</div>

- Each variant keeps the data of the CLS (periods, demands, costs) and changes one feature of the problem. The definitions below give only what changes.

## 8.6.1 The uncapacitated lot sizing problem

<a id="box-7-defULS"></a>

!!! definizione "Definition 8.3: Uncapacitated lot sizing problem"

    The <strong>uncapacitated lot sizing problem</strong> (ULS) is the CLS in which the capacities are not binding, for example $cap_t \ge \sum_{u \in T} d_u$ for every $t \in T$.

- The ULS is solved in polynomial time by dynamic programming.

## 8.6.2 Several products and setup times

<a id="box-8-defMLS"></a>

!!! definizione "Definition 8.4: Lot sizing with several products and setup times"

    In the <strong>lot sizing problem with several products and setup times</strong> (MLS) a set $P$ of products shares the resource of each period: $d_{pt}$ is the demand of product $p \in P$ in period $t$, and $cap_t$ is the time available in period $t$. Producing a unit of $p$ takes $vt_{pt}$ units of time, and a setup of $p$ costs $sc_{pt}$ and takes $st_{pt}$ units of time.

## 8.6.3 Initial stock

<a id="box-9-defLSSI"></a>

!!! definizione "Definition 8.5: Lot sizing with initial stock"

    In the <strong>lot sizing problem with initial stock</strong> (LS-SI) the quantity $si_p$ of product $p$ available at the beginning of the horizon is a decision, bought at the cost $fc_p$ per unit.

## 8.6.4 Overtime

<a id="box-10-defLSOT"></a>

!!! definizione "Definition 8.6: Lot sizing with overtime"

    In the <strong>lot sizing problem with overtime</strong> (LS-OT) the capacity is not fixed: working time in normal hours costs $cw_t$ per unit up to $cap^{N}_t$, and overtime costs $co_t$ per unit up to $cap^{O}_t$.

## 8.6.5 Unsatisfied demand

<a id="box-11-defLSUD"></a>

!!! definizione "Definition 8.7: Lot sizing with unsatisfied demand"

    In the <strong>lot sizing problem with unsatisfied demand</strong> (LS-UD) a part of the demand may be left unsatisfied, at a penalty $cu_{pt}$ per unit.

## 8.7 Remarks

- In 1958 Wagner and Whitin gave a dynamic programming algorithm for the case without capacity and with demand that varies over time. It rests on a property of the optimal plans: one produces only when the stock is empty.

- With capacities the property fails, and the problem is NP-hard ([Chapter 1 «Combinatorial optimization problems»](https://fabiofurini.github.io/combinatorial-optimization/combinatorial-optimization-problems/combinatorial-optimization/)).

## 8.8 Typical mistakes

!!! attenzione "Warning"

    - <strong>Producing late.</strong> The production of a period cannot serve the demand of an earlier period: the stock $s_t(\vet{x})$ must be non-negative in every period.

    - <strong>Charging a setup when nothing is produced.</strong> A setup cost is paid only in the periods with $x_t > 0$.

    - <strong>Forgetting the stock of the last periods.</strong> The holding cost is paid on the stock at the end of every period, including the periods in which the plan produces nothing.

    - <strong>Believing that one produces only with empty stock.</strong> The property of Wagner and Whitin holds without capacities; with capacities the optimal plan of <span style="color:#1971c2">[Example 8.1](the-capacitated-lot-sizing-problem.md#box-2-ex-cls5)</span> violates it.

    - <strong>Counting $2^m$ feasible plans.</strong> The $2^m$ subsets of periods are the setup choices: some are infeasible, and each feasible one carries one or more plans.

## 8.9 In summary

!!! chiave "In summary"

    - The capacitated lot sizing problem asks for the production quantities of every period, with capacities, setups and stock, at the minimum total cost; a solution is a production plan.

    - The combinatorial part is the choice of the periods with a setup: there are $2^m$ choices, only some of them feasible, and each carries one or more plans.

    - Lot-for-lot gives a plan quickly, merging the demands improves it; the number of setups that the total demand requires gives a lower bound.

    - With capacities, optimal plans may produce while the stock is positive; without capacities they never do.

    - The variants add products, setup times, initial stock, overtime or unsatisfied demand; their models are in [Chapter 15 «Formulations of lot sizing problems»](https://fabiofurini.github.io/combinatorial-optimization/formulations/lot-sizing-formulations/).

    <strong>Dashboard of the CLS instance</strong> (minimization: the lower bound is a dual bound, the upper bound is the cost of a plan):

    <div class="tabella" markdown="0"><table>
    <tr>
    <th>Chapter</th>
    <th>Lower bound</th>
    <th>Upper bound</th>
    <th>From</th>
    </tr>
    <tr>
    <td>This chapter</td>
    <td><span class="arithmatex">\(150\)</span></td>
    <td><span class="arithmatex">\(250\)</span></td>
    <td>three setups at least; lot-for-lot</td>
    </tr>
    <tr>
    <td>This chapter, merging</td>
    <td><span class="arithmatex">\(150\)</span></td>
    <td><span class="arithmatex">\(180\)</span></td>
    <td>the plan <span class="arithmatex">\((3,0,4,4,0)\)</span></td>
    </tr>
    <tr>
    <td>This chapter, enumeration</td>
    <td><span class="arithmatex">\(180\)</span></td>
    <td><span class="arithmatex">\(180\)</span></td>
    <td>the <span class="arithmatex">\(94\)</span> feasible plans</td>
    </tr>
    </table></div>

---

**Exercises on this chapter:** [:material-pencil: Lot sizing problems](../../exercises/lot-sizing.md)

---

**In depth:** [:material-view-list: what the course does on this problem](../../catalogue/capacitated-lot-sizing.md)

