
<center>
	<a href="./index.html">Home</a>
</center>

# Spazio Duale

Sia $V$ uno spazio vettoriale su $\mathbb{K}$. Lo spazio duale è definito nel seguente modo

$$
V^* \coloneqq \text{Hom}(V, \mathbb{K})
$$

e gli $\phi \in V$ sono detti **funzionali** di $V$.

### Esempio su $\KK^n$

Sia $V = \KK^n$ allora avremo che 

$$
V^* = \text{Hom}(\KK^n, \KK) = M(1, n, \KK)
$$

Quindi se abbiamo un vettore $v \in V$ della forma

$$
v = \begin{pmatrix} x_1 \\ \vdots \\ x_n \end{pmatrix}
$$

possiamo ricavare la forma di $\phi(v)$

$$
\phi(v) 
= 
\begin{pmatrix} a_1 & \dots & a_n \end{pmatrix}
\begin{pmatrix} x_1 \\ \vdots \\ x_n \end{pmatrix} 
=
a_1 x_1 + \cdots + a_n x_n
$$

In questo caso la dimensione dello spazio duale sarà

$$
\dim \, \mathbb{K}^n = \dim \, (\mathbb{K}^n)^*
$$

## Base Duale

Sia $V$ uno spazio vettoriale di dimensione $n$. Fissiamo una base $\mathscr{B} = \left\{v_1, ..., v_n\right\}$ di $V$. Definiamo ora $\mathscr{B}^* = \left\{\ v^1, ..., v^n \right\} \subseteq V^*$.

$$
v^i (v_j) 
= \delta_{i, j} 
= \begin{cases} 1 \quad i = j \\ 0 \quad i \neq j \end{cases}
$$

**Prop.** $\forall \mathscr{B}$ base di $V$, $\mathscr{B}^*$ è una base di $V^*$, detta **base duale** di $V$.

**Dim.** Sia $\mathscr{B}^* = \left\{\ v^1, \dots, v^n \right\}$. Dobbiamo far vedere che questo insieme _genera_ tutto $V^*$ e che è formato da funzionali _linearmente indipendenti_.

1. $$\phi = \phi(v_1) v^1 + \cdots + \phi(v_n) v^n$$
	$$v=\alpha_1 v_1 + \cdots + \alpha_n v_n$$
	$$
	\begin{aligned} \phi(v) 
	&= (\phi(v_1) v^1 +_ \cdots + \phi(v_n) v^n)(\alpha_1 v_1 + \cdots + \alpha_n v_n) \\
	&= \alpha_1 \phi(v_1) + \cdots + \alpha_n \phi(v_n)
	\end{aligned}
	$$
	$\qed$

2. Dobbiamo far vedere che $a_1 v^1 + \cdots + a_n v^n = 0 \implies a_1 = \cdots = a_n = 0$. Ciò significa che $\forall v: \phi(v) = 0$. Ora calcoliamo tutti gli $\phi$ nei valori della base di $V$ e, ad esempio per $v_1$ otteniamo
	$$
	\begin{aligned} 
	\phi(v_1)
	&= (a_1 v^1 + \cdots + a_n v^n)(v_1) \\
	&= a_1 v^1 (v_1) + \cdots + a_n v^n (v_1) \\
	&= a_1 (1) + \cdots + a_n (0) = a_1 \\
	\end{aligned}
	$$
	E quindi avremo che $\forall j : \phi(v_j) = a_j$, però sappiamo che $\phi(v) = 0$ quindi anche tutti gli $a_j = 0$.
	$\qed$

$\qed$

In generale $\forall \mathscr{B}$ base di $V$, $\mathscr{B}$ è una base di $V^*$ e quindi hanno la _stessa dimensione_ e si può definire un isomorfismo $\varphi_\mathscr{B} : V \to V^*$ tale che $$ \varphi_\mathscr{B} (v_i) = v^i $$

## Annullatore

Sia $Z \subseteq V$ un sottospazio di $V$ con $\dim V = n$. L'**annullatore** di $Z$ è definito nel seguente modo.

$$
\text{Ann}(Z) \coloneqq 
\left\{ \phi \in V^* \, | \, \phi(z)=0 \forall z \in Z \right\}
$$

$\text{Ann}(Z) \subseteq V^*$ ed è anche un sottospazio. Sappiamo che $0 \leq \dim Z, \dim \text{Ann}(Z) \leq \dim V^* = \dim V$.

**Congettura.** $\dim \text{Ann}(Z) = \dim V - \dim Z$

<script>
	// Moves the view to the bottom for fast checking the last things written.
	setTimeout(() => scrollTo(0, 10000), 500);
</script>