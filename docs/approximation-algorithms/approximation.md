---
title: "Approximation algorithms: definitions"
---

# Approximation algorithms: definitions

<div class="info-capitolo" markdown>

**Part 5 · Approximation algorithms · Chapter 28** · [:material-file-pdf-box: Lecture notes, volume 5 (PDF)](../pdf/lecture-notes-5-approximation-algorithms.pdf) · [:material-pencil: Exercises: Definitions](../exercises/approximation.md) · [:material-gesture-tap: App: Tight instances](../lab/tight-instances.md)

</div>

!!! nota "Prerequisites"

    - From this module, the chapter «Heuristic algorithms»: heuristic algorithms, feasible solutions and the value of the solution returned by a heuristic algorithm.

    - From this module, the chapters on the combinatorial optimization problems: instances, optimal solutions and the optimal value $z(I)$ of an instance $I$.

!!! chiave "Objectives"

    At the end of this chapter you will be able to:

    - compute the performance ratio, the additive error and the relative error of a heuristic algorithm on an instance, for minimization and maximization problems;

    - state when a number is a relative or an additive performance guarantee, and when it is tight;

    - prove that a guarantee is tight by exhibiting an instance, or a sequence of instances;

    - define an approximation scheme, a PTAS and an FPTAS, and translate the accuracy $\varepsilon$ into a performance guarantee.

## 28.1 Approximation algorithms

<a id="box-1-def-heurvalue"></a>

!!! definizione "Definition 28.1: heuristic value"

    Let $\mathscr{A}$ be a <strong>heuristic algorithm</strong> for an <strong>optimization problem</strong> $\mathscr{P}$. For every <strong>instance</strong> $I$ of $\mathscr{P}$:

    1. $z(I)$ is the <strong>optimal value</strong> of $\mathscr{P}$ on $I$ (assumed positive);

    2. $\mathscr{A}(I)$ is the <strong>heuristic value</strong>, i.e., the objective value of the feasible solution returned by $\mathscr{A}$ on $I$ (assumed positive).

- We assume that $\mathscr{A}$ always outputs a <strong>feasible solution</strong>. Hence, for every instance $I$,

    $$
    \begin{cases}
    \mathscr{A}(I)\ge z(I)\ \ \text{and}\ \ \dfrac{\mathscr{A}(I)}{z(I)} \ge 1
    & \quad \text{if $\mathscr{P}$ is a minimization problem,}\\[2.5ex]
    \mathscr{A}(I)\le z(I)\ \ \text{and}\ \ \dfrac{z(I)}{\mathscr{A}(I)} \ge 1
    & \quad \text{if $\mathscr{P}$ is a maximization problem.}
    \end{cases}
    $$

!!! chiave ""

    In general, a heuristic algorithm may sometimes generate solutions with an almost optimal value, but in other cases it may produce significantly inferior solutions. Accordingly, we are interested in “measuring” (whenever possible) the quality of the solutions provided by a heuristic algorithm.

- We adopt a <strong>worst-case behaviour</strong> point of view: we evaluate a heuristic algorithm by looking at the largest possible deviation, over all instances, between the heuristic value and the optimal value.

- There are two standard ways to measure this deviation:

    1. <strong>Relative performance guarantee</strong> (multiplicative guarantee): in this case we measure the quality of the heuristic solution by looking at the <em>relative error</em>, that is, how far the heuristic value is from the optimum <em>in relative terms</em>, using ratios.

    2. <strong>Absolute performance guarantee</strong> (additive guarantee): in this case we measure the quality of the heuristic solution by looking at the <em>absolute error</em>, that is, the difference between the heuristic value and the optimal value.

### 28.1.1 Relative performance guarantee

<a id="box-2-def-pratio"></a>

!!! definizione "Definition 28.2: performance ratio"

    The <strong>performance ratio</strong> of $\mathscr{A}$ on an instance $I$ is

    $$
    \begin{cases}
    \dfrac{\mathscr{A}(I)}{z(I)} & \quad \text{if $\mathscr{P}$ is a minimization problem,}\\[2.5ex]
    \dfrac{z(I)}{\mathscr{A}(I)} & \quad \text{if $\mathscr{P}$ is a maximization problem.}
    \end{cases}
    $$

- Under the feasibility assumption, the performance ratio is at least $1$ for every instance $I$.

<a id="box-3-def-alpha-approx"></a>

!!! definizione "Definition 28.3: $\alpha$-approximation algorithm"

    A heuristic algorithm $\mathscr{A}$ for an optimization problem $\mathscr{P}$ is an <strong>$\alpha$-approximation algorithm</strong> if there exists a constant $\alpha \in [1,+\infty)$ such that, for every instance $I$ of $~\mathscr{P}$,

    $$
    \begin{cases}
    \dfrac{\mathscr{A}(I)}{z(I)} \le \alpha & \quad \text{if $\mathscr{P}$ is a minimization problem,}\\[2.5ex]
    \dfrac{z(I)}{\mathscr{A}(I)} \le \alpha & \quad \text{if $\mathscr{P}$ is a maximization problem.}
    \end{cases}
    $$

    Any such constant $\alpha$ is called a <strong>relative performance guarantee</strong> of $\mathscr{A}$.

- A relative performance guarantee $\alpha$ for $\mathscr{A}$ is <strong>tight</strong> if no smaller constant $\alpha' < \alpha$ is also a relative performance guarantee for $\mathscr{A}$ (i.e., the same inequalities hold for all instances with $\alpha'$ in place of $\alpha$).

- Tightness is usually proved by exhibiting either an instance $I$ for which the performance ratio attains $\alpha$, namely

    $$
    \frac{\mathscr{A}(I)}{z(I)}=\alpha \ \ \text{(minimization)}
    \qquad \text{or} \qquad
    \frac{z(I)}{\mathscr{A}(I)}=\alpha \ \ \text{(maximization),}
    $$

    or a sequence of instances $\{I_n\}$ such that the corresponding performance ratios get arbitrarily close to $\alpha$.

<a id="box-4-def-wcr"></a>

!!! definizione "Definition 28.4: Worst-case performance ratio"

    The <strong>worst-case performance ratio</strong> of $\mathscr{A}$ is

    $$
    r(\mathscr{A}) \;=\;
    \begin{cases}
    \sup \left\{\, \dfrac{\mathscr{A}(I)}{z(I)} : I \text{ is an instance of } \mathscr{P} \,\right\}
    & \quad \text{if $\mathscr{P}$ is a minimization problem,}\\[3.0ex]
    \sup \left\{\, \dfrac{z(I)}{\mathscr{A}(I)} : I \text{ is an instance of } \mathscr{P} \,\right\}
    & \quad \text{if $\mathscr{P}$ is a maximization problem.}
    \end{cases}
    $$

- The value $r(\mathscr{A})$ is the smallest constant $\alpha$ for which $\mathscr{A}$ is an $\alpha$-approximation algorithm. The relative performance guarantee  $\alpha$ is tight if and only if $\alpha = r(\mathscr{A})$.

- If $r(\mathscr{A})<\infty$, then $\mathscr{A}$ admits a finite relative performance guarantee (equivalently, it has a bounded performance ratio). If $r(\mathscr{A})=\infty$, then $\mathscr{A}$ has no relative worst-case guarantee.

- Terminology used in the literature

    - a finite relative performance guarantee $\alpha$ is also called an <strong>approximation factor</strong> (or <strong>approximation guarantee</strong>)

    - an <strong>$\alpha$-approximation algorithm</strong> is also called a <strong>constant-factor approximation algorithm</strong>

    - $r(\mathscr{A})$ is also called the <strong>(worst-case) approximation ratio</strong> of $\mathscr{A}$

### 28.1.2 Additive performance guarantee

- The <strong>additive error</strong> (or <strong>absolute error</strong>) of $\mathscr{A}$ on an instance $I$ is

    $$
    \begin{cases}
    \mathscr{A}(I)-z(I) & \text{if $\mathscr{P}$ is a minimization problem,}\\[2ex]
    z(I)-\mathscr{A}(I) & \text{if $\mathscr{P}$ is a maximization problem.}
    \end{cases}
    $$

    Under the feasibility assumption, this quantity is non-negative for every instance $I$.

<a id="box-5-def-beta-add"></a>

!!! definizione "Definition 28.5: $\beta$-additive approximation algorithm"

    A heuristic algorithm $\mathscr{A}$ for an optimization problem $\mathscr{P}$ is a <strong>$\beta$-additive approximation algorithm</strong> if there exists a constant $\beta \in [0,+\infty)$ such that, for every instance $I$ of $~\mathscr{P}$,

    $$
    \begin{cases}
    \mathscr{A}(I)-z(I) \le \beta & \text{if $\mathscr{P}$ is a minimization problem,}\\[2ex]
    z(I)-\mathscr{A}(I) \le \beta & \text{if $\mathscr{P}$ is a maximization problem.}
    \end{cases}
    $$

    Any such constant $\beta$ is called an <strong>additive performance guarantee</strong> of $\mathscr{A}$.

- An additive performance guarantee $\beta$ for $\mathscr{A}$ is <strong>tight</strong> if no smaller constant $\beta' < \beta$ is also an additive performance guarantee for $\mathscr{A}$.

- Tightness is usually proved by exhibiting either an instance $I$ for which the additive error attains $\beta$, namely

    $$
    \mathscr{A}(I)-z(I)=\beta \ \ \text{(minimization)}
    \qquad \text{or} \qquad
    z(I)-\mathscr{A}(I)=\beta \ \ \text{(maximization),}
    $$

    or a sequence of instances $\{I_n\}$ such that the corresponding additive errors get arbitrarily close to $\beta$.

<a id="box-6-def-wcae"></a>

!!! definizione "Definition 28.6: Worst-case additive error"

    The <strong>worst-case additive error</strong> of $\mathscr{A}$ is

    $$
    e(\mathscr{A}) \;=\;
    \begin{cases}
    \sup \left\{\, \mathscr{A}(I)-z(I) : I \text{ instance of } \mathscr{P} \,\right\}
    & \text{if $\mathscr{P}$ is a minimization problem,}\\[3.0ex]
    \sup \left\{\, z(I)-\mathscr{A}(I) : I \text{ instance of } \mathscr{P} \,\right\}
    & \text{if $\mathscr{P}$ is a maximization problem.}
    \end{cases}
    $$

- The value $e(\mathscr{A})$ is the smallest constant $\beta$ for which $\mathscr{A}$ is a $\beta$-additive approximation algorithm. The additive performance guarantee $\beta$ is tight if and only if $\beta = e(\mathscr{A})$.

- If $e(\mathscr{A})<\infty$, then $\mathscr{A}$ admits a finite additive performance guarantee (equivalently, it has bounded additive error). If $e(\mathscr{A})=\infty$, then $\mathscr{A}$ has no additive (absolute) worst-case guarantee.

- Terminology used in the literature

    - a finite additive performance guarantee $\beta$ is also called an <strong>absolute performance guarantee</strong> or an <strong>additive approximation guarantee</strong>

    - $e(\mathscr{A})$ is also called the <strong>worst-case absolute (additive) error</strong> of $\mathscr{A}$

## 28.2 Approximation schemes

- The <strong>relative error</strong> (also called <strong>percentage error</strong>) of $\mathscr{A}$ on an instance $I$ is

    $$
    \begin{cases}
    \dfrac{\mathscr{A}(I)-z(I)}{z(I)} & \quad \text{if $\mathscr{P}$ is a minimization problem,}\\[2.5ex]
    \dfrac{z(I)-\mathscr{A}(I)}{z(I)} & \quad \text{if $\mathscr{P}$ is a maximization problem.}
    \end{cases}
    $$

    Under the feasibility assumption, this quantity is non-negative for every instance $I$, and it is equal to $0$ if and only if $\mathscr{A}(I)=z(I)$.

- The relative error divides by the optimal value $z(I)$, and must not be confused with the gap of the chapter «Combinatorial optimization problems», which divides by the lower bound and is never smaller (chapter «Heuristic algorithms»).

<a id="box-7-def-as"></a>

!!! definizione "Definition 28.7: Approximation scheme"

    An <strong>approximation scheme</strong> for an optimization problem $\mathscr{P}$ is a family of heuristic algorithms $\{\mathscr{A}_{\varepsilon}\}_{\varepsilon \in (0,1)}$ such that, for every $\varepsilon \in (0,1)$ and for every instance $I$ of $\mathscr{P}$,

    $$
    \begin{cases}
    \dfrac{\mathscr{A}_{\varepsilon}(I)-z(I)}{z(I)} \le \varepsilon
    & \text{if $\mathscr{P}$ is a minimization problem,}\\[2.5ex]
    \dfrac{z(I)-\mathscr{A}_{\varepsilon}(I)}{z(I)} \le \varepsilon
    & \text{if $\mathscr{P}$ is a maximization problem.}
    \end{cases}
    $$

- For minimization problems,

    $$
    \frac{\mathscr{A}_{\varepsilon}(I)-z(I)}{z(I)} \le \varepsilon
    \qquad \text{for every instance $I$ of $\mathscr{P}$.}
    $$

    implies

    $$
    \mathscr{A}_{\varepsilon}(I)-z(I)\le \varepsilon\,z(I)
    \quad \Longleftrightarrow \quad
    \mathscr{A}_{\varepsilon}(I)\le (1+\varepsilon)\,z(I).
    $$

    Dividing by $z(I)>0$,

    $$
    \frac{\mathscr{A}_{\varepsilon}(I)}{z(I)}\le 1+\varepsilon
    \qquad \text{for every instance $I$ of $\mathscr{P}$.}
    $$

    Hence, $\mathscr{A}_{\varepsilon}$ is a $(1+\varepsilon)$-approximation algorithm.

- For maximization problems,

    $$
    \frac{z(I)-\mathscr{A}_{\varepsilon}(I)}{z(I)} \le \varepsilon
    \qquad \text{for every instance $I$ of $\mathscr{P}$.}
    $$

    implies

    $$
    z(I)-\mathscr{A}_{\varepsilon}(I)\le \varepsilon\,z(I)
    \quad \Longleftrightarrow \quad
    \mathscr{A}_{\varepsilon}(I)\ge (1-\varepsilon)\,z(I).
    $$

    Since $0<\varepsilon<1$ and $z(I)>0$, dividing by $(1-\varepsilon)z(I)$ gives

    $$
    \frac{z(I)}{\mathscr{A}_{\varepsilon}(I)}\le \frac{1}{1-\varepsilon}
    \qquad \text{for every instance $I$ of $\mathscr{P}$.}
    $$

    Hence, $\mathscr{A}_{\varepsilon}$ is a $\left(\frac{1}{1-\varepsilon}\right)$-approximation algorithm.

!!! chiave ""

    It is quite natural that the running time of an approximation scheme increases as $\varepsilon$ decreases: the smaller the allowed error, the higher the required running time.

- The quantity $\frac{1}{\varepsilon}$ is often called the <strong>accuracy</strong>. Indeed, from the defining inequalities of an approximation scheme we obtain

    $$
    \frac{\mathscr{A}_{\varepsilon}(I)-z(I)}{z(I)} \le \varepsilon
    \ \Longrightarrow\
    \mathscr{A}_{\varepsilon}(I)-z(I)\le \varepsilon\,z(I)
    \ \Longrightarrow\
    \frac{z(I)}{\mathscr{A}_{\varepsilon}(I)-z(I)} \ge \frac{1}{\varepsilon}
    \qquad \text{(minimization),}
    $$

    $$
    \frac{z(I)-\mathscr{A}_{\varepsilon}(I)}{z(I)} \le \varepsilon
    \ \Longrightarrow\
    z(I)-\mathscr{A}_{\varepsilon}(I)\le \varepsilon\,z(I)
    \ \Longrightarrow\
    \frac{z(I)}{z(I)-\mathscr{A}_{\varepsilon}(I)} \ge \frac{1}{\varepsilon}
    \qquad \text{(maximization).}
    $$

    In the special case where $\mathscr{A}_{\varepsilon}(I)=z(I)$, the denominators above are zero; in this case we interpret the corresponding fractions as $+\infty$, and the inequalities hold trivially.

- Not all approximation schemes are equally useful in practice: we distinguish them according to how the running time depends on the input size and on the accuracy $\frac{1}{\varepsilon}$.

<a id="box-8-def-ptas"></a>

!!! definizione "Definition 28.8: Polynomial-time approximation scheme (PTAS)"

    An approximation scheme $\{\mathscr{A}_{\varepsilon}\}_{\varepsilon\in(0,1)}$ is a <strong>polynomial-time approximation scheme</strong> if, for every fixed $\varepsilon\in(0,1)$, the running time of $\mathscr{A}_{\varepsilon}$ is polynomial in the size of the instance.

- Thus, the running time is polynomial in the input size, but it may grow very fast as $\varepsilon$ decreases (i.e., as the required accuracy increases).

<a id="box-9-def-fptas"></a>

!!! definizione "Definition 28.9: Fully polynomial-time approximation scheme (FPTAS)"

    An approximation scheme $\{\mathscr{A}_{\varepsilon}\}_{\varepsilon\in(0,1)}$ is a <strong>fully polynomial-time approximation scheme</strong>  if the running time of $\mathscr{A}_{\varepsilon}$ is polynomial both in the size of the instance and in the accuracy $\frac{1}{\varepsilon}$.

## 28.3 Typical mistakes

!!! attenzione "Warning"

    - <strong>Inverting the ratio.</strong> The performance ratio is $\frac{\mathscr{A}(I)}{z(I)}$ for a minimization problem and $\frac{z(I)}{\mathscr{A}(I)}$ for a maximization problem: in both cases it is at least $1$.

    - <strong>Proving a guarantee with examples.</strong> An instance on which the ratio equals $\alpha$ shows that no constant below $\alpha$ is a guarantee, but it does not prove that $\alpha$ is one: this needs a proof for <em>every</em> instance.

    - <strong>Calling a guarantee tight without an instance.</strong> A guarantee $\alpha$ is tight only if some instance, or a sequence of instances, reaches $\alpha$ in the limit.

    - <strong>Confusing $\varepsilon$ and $\alpha$.</strong> An approximation scheme with relative error $\varepsilon$ is a $(1+\varepsilon)$-approximation algorithm for a minimization problem, but a $\frac{1}{1-\varepsilon}$-approximation algorithm for a maximization problem.

    - <strong>PTAS and FPTAS.</strong> The running time of a PTAS may grow like $n^{1/\varepsilon}$; only for an FPTAS it is polynomial in $\frac{1}{\varepsilon}$ as well.

## 28.4 In summary

!!! chiave "In summary"

    - A relative performance guarantee bounds the ratio $\mathscr{A}(I)/z(I)$ (minimization) or $z(I)/\mathscr{A}(I)$ (maximization) over all instances; an additive guarantee bounds the difference.

    - A guarantee is tight if it is reached by an instance, or approached by a sequence of instances; the smallest guarantee is the worst-case ratio $r(\mathscr{A})$, or the worst-case additive error $e(\mathscr{A})$.

    - An approximation scheme has relative error at most $\varepsilon$ for every $\varepsilon \in (0,1)$; it is a PTAS if the running time is polynomial in the size of the instance for every fixed $\varepsilon$, and an FPTAS if it is polynomial in $\frac{1}{\varepsilon}$ too.

    <strong>Dashboard.</strong> A guarantee bounds the gap between a heuristic solution (a lower bound on $z(I)$ for a maximization problem, an upper bound for a minimization problem) and the optimal value, on every instance. The next chapters fill the dashboard of the reference instances with the values of the heuristic algorithms and with their guarantees.

---

**Exercises on this chapter:** [:material-pencil: Definitions](../exercises/approximation.md)

<!-- laboratorio-interattivo: sezione generata da interattivi.py -->

:material-flask-outline: **In the interactive lab:** [Tight instances](../lab/tight-instances.md).