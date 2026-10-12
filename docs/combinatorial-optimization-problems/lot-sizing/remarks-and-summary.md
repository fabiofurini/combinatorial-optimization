---
title: "Remarks and summary"
---

# Remarks and summary

<div class="info-capitolo" markdown>

**Part 1 · Combinatorial optimization problems · Chapter 8** · [:material-book-open-variant: Chapter 8: Lot sizing](index.md) · [:material-file-pdf-box: Lecture notes, volume 1 (PDF)](../../pdf/lecture-notes-1-combinatorial-optimization-problems.pdf) · [:material-pencil: Exercises: Lot sizing](../../exercises/lot-sizing.md)

</div>

## 8.7 Remarks

- In 1958 Wagner and Whitin gave a dynamic programming algorithm for the case without capacity and with demand that varies over time. It rests on a property of the optimal plans: one produces only when the stock is empty.

- With capacities the property fails, and the problem is NP-hard (chapter «Combinatorial optimization problems»).

## 8.8 Typical mistakes

!!! attenzione "Warning"

    - <strong>Producing late.</strong> The production of a period cannot serve the demand of an earlier period: the stock $s_t(\vet{x})$ must be non-negative in every period.

    - <strong>Charging a setup when nothing is produced.</strong> A setup cost is paid only in the periods with $x_t > 0$.

    - <strong>Forgetting the stock of the last periods.</strong> The holding cost is paid on the stock at the end of every period, including the periods in which the plan produces nothing.

    - <strong>Believing that one produces only with empty stock.</strong> The property of Wagner and Whitin holds without capacities; with capacities the optimal plan of <span style="color:#1971c2">[Example 8.1](variants.md#box-2-ex-cls5)</span> violates it.

    - <strong>Counting $2^m$ feasible plans.</strong> The $2^m$ subsets of periods are the setup choices: some are infeasible, and each feasible one carries one or more plans.

## 8.9 In summary

!!! chiave "In summary"

    - The capacitated lot sizing problem asks for the production quantities of every period, with capacities, setups and stock, at the minimum total cost; a solution is a production plan.

    - The combinatorial part is the choice of the periods with a setup: there are $2^m$ choices, only some of them feasible, and each carries one or more plans.

    - Lot-for-lot gives a plan quickly, merging the demands improves it; the number of setups that the total demand requires gives a lower bound.

    - With capacities, optimal plans may produce while the stock is positive; without capacities they never do.

    - The variants add products, setup times, initial stock, overtime or unsatisfied demand; their models are in the chapter on formulations.

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

**Exercises on this chapter:** [:material-pencil: Lot sizing](../../exercises/lot-sizing.md)

---

**In depth:** [:material-star-outline: the course on this problem](../../selected-problems/lot-sizing.md)

