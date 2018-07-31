
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

In generale $\forall \mathscr{B}$ base di $V$, $\mathscr{B}^*$ è una base di $V^*$ e quindi hanno la _stessa dimensione_ e si può definire un isomorfismo $\phi_\mathscr{B} : V \to V^*$ tale che $$\phi_\mathscr{B} (v_i) = v^i$$

## Annullatore

Sia $Z \subseteq V$ un sottospazio di $V$ con $\dim V = n$. L'**annullatore** di $Z$ è definito nel seguente modo.

<!-- Definizione di Annullatore -->

$$
\text{Ann}(Z) \coloneqq 
\left\{ \phi \in V^* \, | \, \phi(z)=0 \quad \forall z \in Z \right\}
$$

$\text{Ann}(Z) \subseteq V^*$ ed è anche un sottospazio. Sappiamo che $0 \leq \dim Z, \dim \text{Ann}(Z) \leq \dim V^* = \dim V$.

**Congettura.** $\dim \text{Ann}(Z) = \dim V - \dim Z$

**Dim.** Fissiamo una base $\{ v_1, \dots, v_k \}$ di $Z$ ed estendiamola a base di $V$ ed avremo quindi $\{ v_1, \dots, v_k, v_{k+1}, \dots, v_n\}$ base di $V$.  Prendiamone ora la relativa base duale 
$$
\{ 
	v^1, \dots, v^k, 
	\underbrace{v^{k+1}, \dots, v^n}_{\in \text{Ann}(Z)} \} = \mathscr{B}^*
$$
I funzionali $v^{k+1}, \dots, v^n \in \text{Ann}(Z)$ sono _linearmente indipendenti_ perché formano parte della base $\mathscr{B}^*$. Basta ora mostrare che generano tutto l'annullatore. Poiché $\mathscr{B}^*$ genera $V^*$ possiamo esprimere un funzionale come
$$
\phi = a_1 v^1 + \cdots + a_k v^k + b_1 v^{k+1} + \cdots + b_{n-k} v^n
$$
Aggiungendo ora la condizione che $\phi \in \text{Ann}(Z) \implies \phi(v_j) = 0 \quad \forall j = 1 \dots k$ facendo i calcoli si può vedere che tutti gli $a_j = 0$ e rimangono solo i $b_i$. $\qed$ (?)

### Proprietà & Relazioni

- $\text{Ann}(Z)$ è un **sottospazio** di $V^*$.
- $ S \subset T \subset V \implies \text{Ann}(T) \subset \text{Ann}(S)$
- $U, W \subset V$ sottospazi $\implies \text{Ann}(U+W) = \text{Ann}(U) \cap \text{Ann}(W)$
	
	**Dim.** Per dimostrare questa proposizione mostriamo il doppio contenimento.
	
	$\boxed{\subseteq}$
	$$
	\begin{aligned}
	U,W \subset U+W 
		&\implies \text{Ann}(U+W) \subset \text{Ann}(U), \text{Ann}(W) \\
		&\implies \text{Ann}(U+W) \subset \text{Ann}(U) \cap \text{Ann}(W)
	\end{aligned}
	$$

	$\boxed{\supseteq}$
	$$
	\phi \in \text{Ann}(U) \cap \text{Ann}(W) \implies 
		\begin{cases}
		\phi(u) = 0 & \forall u \in U \\
		\phi(w) = 0 & \forall w \in W 
		\end{cases}
	$$
	$$
	\begin{aligned}
	v \in U + W 
		&\implies \exists u \in U, \exists w \in W \text{ tale che } v = u + w \\
		&\implies \phi(v) = \phi(u + w) = \phi(u) + \phi(v) = 0 \\
		&\implies \phi \in \text{Ann}(U + W)
	\end{aligned}
	$$

	$\qed$
- $\text{Ann}(U \cap W) \supset \text{Ann}(U) + \text{Ann}(W)$ e se $\dim V = n < +\infty$ vale anche l'uguaglianza.

	**Dim.** Dimostriamo un'inclusione e poi confrontiamo le dimensioni dei due oggetti.
	
	$\boxed{\supset}$

	$$
	\begin{aligned}
		U \cap W \subset U, W 
			&\implies \text{Ann}(U \cap W) \supset \text{Ann}(U), \text{Ann}(W) \\
			&\implies \text{Ann}(U \cap W) \supset \text{Ann}(U) + \text{Ann}(W)
	\end{aligned}
	$$

	Ora vediamo le dimensioni

	$$ \text{dim} ( \text{Ann}(U) + \text{Ann}(W) ) = $$
	$$
	\begin{aligned}
		&=
		\underbrace{
			\dim \text{Ann}(U)
		}_{
			= n - \dim U
		}
		+ 
		\underbrace{
			\dim \text{Ann}(W) 
		}_{
			= n - \dim W
		}
		- 
		\underbrace{
			\text{dim}(\text{Ann}(U) \cap \text{Ann}(W))
		}_{
			\scriptsize
			\begin{aligned} 
				&= \dim \text{Ann}(U+W) \\ 
				&= n - \text{dim}(U+W) 
			\end{aligned}
		}
		= \\
		&= n - (\dim U + \dim W - \text{dim}(U + W)) = \\
		&= n - \text{dim} (U \cap W) = \\
		&= \dim \text{Ann}(U \cap W)
	\end{aligned}
	$$

<script>
	// Moves the view to the bottom for fast checking the last things written.
	setTimeout(() => scrollTo(0, 10000), 500);
</script>