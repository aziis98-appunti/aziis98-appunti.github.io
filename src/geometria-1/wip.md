
<center>
	<a 
		href="/geometria-1/index.html"
		title="Geometria 1">Indietro</a>
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

In generale $\forall \mathscr{B}$ base di $V$, $\mathscr{B}^*$ è una base di $V^*$ e quindi hanno la _stessa dimensione_ e si può definire un isomorfismo $\varphi_\mathscr{B} : V \to V^*$ tale che $$\varphi_\mathscr{B} (v_i) = v^i$$

## Annullatore

Sia $Z \subseteq V$ un sottospazio di $V$ con $\dim V = n$. L'**annullatore** di $Z$ è definito nel seguente modo.

<!-- Definizione di Annullatore -->

$$
\text{Ann}(Z) \coloneqq 
\left\{ \phi \in V^* \, | \, \phi(z)=0 \quad \forall z \in Z \right\}
$$

$\text{Ann}(Z) \subseteq V^*$ ed è anche un sottospazio. Sappiamo che $0 \leq \dim Z, \dim \text{Ann}(Z) \leq \dim V^* = \dim V$.

**Congettura:**
$$\dim \text{Ann}(Z) = \dim V - \dim Z$$

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

## Null

Sia $Z \subseteq V^*$ un sottospazio, si può definire il **luogo di zeri** di $Z$

$$
\text{Null}(Z) \coloneqq 
\left\{ v \in V \taleche \forall \phi \in Z \quad \phi(v) = 0 \right\}
$$

La definizione può anche essere riscritta in termini dei $\Kernel \phi$ 

$$
\begin{aligned}
	&= \bigcap_{\phi \in Z} \left\{ v \in V \taleche \phi(v) = 0 \right\} \\
	&= \bigcap_{\phi \in Z} \Kernel \phi
\end{aligned}
$$

#### Proprietà Random

- $\phi = 0 \implies \text{Ker} \, \phi = V$
- $\phi \neq 0 \implies \dim \text{Ker} \, \phi = n - 1$

## Relazione tra $\text{Ann}$ e $\text{Null}$

> **TODO.** 
> Dimostrare $ \text{Null}(\text{Ann}(W)) = W $ e $ \varphi^{-1}(\text{Ann}(\text{Ann}(W))) = \text{Null}(\text{Ann}(W)) $

## Biduale

$$ V \rightsquigarrow \underset{=\text{Hom}\left(V, \KK\right)}{V^*} \rightsquigarrow \underset{=\text{Hom}\left(V^*, \KK\right)}{V^{**}} $$

Il **biduale** è semplicemente il duale del duale. Vediamo ora il comportamento della base del biduale.

$$
\begin{array}{ccccc}
	V & \xrightarrow{ \normalsize \varphi_\mathscr{B} } & V^* & \xrightarrow{ \normalsize \varphi_{\mathscr{B}^*} } & V^{**} \\
	\mathscr{B} & \rightsquigarrow & \mathscr{B}^* & \rightsquigarrow & \mathscr{B}^{**}
\end{array}
$$

$$ 
V \xrightarrow{ \normalsize \varphi_{\mathscr{B}^*} \compose \varphi_\mathscr{B} } V^{**}
$$

**Prop.** Una cosa insolita che accade è che $\varphi = \varphi_{\mathscr{B}^*} \compose \varphi_\mathscr{B}$ non dipende dalla scelta della base $\mathscr{B}$ e quindi $\varphi$ è un **isomorfismo canonico** tra $V$ e $V^{**}$ (isomorfismo che invece non è canonico nel caso da $V$ a $V^*$)

**Dim.**

$$ \varphi : V \to V^{**} = \text{Hom}(V^*, \KK) $$
$$ \varphi(v) = \varphi_v $$

dove $\varphi_v : V^* \to \KK$

$$ \psi \in V^* \mapsto \varphi_v(\psi) \coloneqq \psi(v) $$

e vediamo che questa definizione sembra funzionare, bisogna ora dimostrare che è lineare in $v$...

## Applicazione lineare trasposta di $f$

Data un'applicazione lineare $f : V \to W$ possiamo definire l'applicazione trasposta $f^t : W^* \to V^*$

$$ f^t(\psi) \coloneqq \psi \circ f $$

Mostriamo ora che rispetta la composizione di applicazioni lineari in modo controvariante.

$$
\begin{gathered}
	V \xrightarrow{f} W \xrightarrow{g} Z \\
	V \xrightarrow{ g \compose f } Z
\end{gathered}
$$

Ed infatti vediamo che $(g \compose f)^t$ è la stessa cosa di $g^t \compose f^t$.

$$
\begin{gathered}
	V^* \xleftarrow{f^t} W^* \xleftarrow{g^t} Z^* \\
	V^* \xleftarrow{ (g \compose f)^t } Z^*
\end{gathered}
$$

Possiamo ricavare l'equivalente della relazione $\dim V = \dim \Kernel f + \dim \text{Im } f$.

$$ \dim W^* = \dim \Kernel f^t + \dim \text{Im } f^t $$

$$ \text{Ker} f^t = \left\{ \psi \in W^* \taleche \forall v \in V \quad \psi(f(v)) = 0 \right\} = \text{Ann}(\Image f) $$

$$
\begin{aligned}
	\dim \Kernel f^t
	&= \dim \text{Ann} (\Image f) = \\
	&= \dim V - \dim \Image f = \dim \Kernel f
\end{aligned}
$$

$$
\begin{aligned}
	\dim W^* 
	&= \dim \text{Ann}(\Image f) + \dim \Image f^t = \\
	&= (\dim W - \dim \Image f) + \dim \Image f^t \\
	&\implies \dim \Image f = \dim \Image f^t
\end{aligned}
$$

Ora se osserviamo i seguenti diagrammi che commutano possiamo congetturare che $B = A^t$.

$$
\begin{array}{lllllll}
	
	V_\mathscr{B} & \xrightarrow{f} & W_\mathscr{D} 
	& &
	V^*_\mathscr{B^*} & \xleftarrow{f^t} & W^*_\mathscr{D^*} \\ \\
	
	\downarrow \scriptsize \text{[ ]}_\mathscr{B} & & \downarrow \scriptsize \text{[ ]}_\mathscr{D} 
	& \quad &
	\downarrow \scriptsize \text{[ ]}_\mathscr{B^*} & & \downarrow \scriptsize \text{[ ]}_\mathscr{D^*} \\ \\
	
	\KK^n & \xrightarrow[A]{} & \KK^m
	& &
	\KK^n & \xleftarrow[B]{} & \KK^m \\

\end{array}
$$

Possiamo inoltre vedere che $\dim \Image f = \dim \Image f^t \implies \text{rango} A = \text{rango} A^t$.

$$
\begin{array}{lll}
	
	V_\mathscr{B} & \xrightarrow{\varphi_B} & V^*_\mathscr{B^*} \\ \\
	
	\downarrow & & \downarrow \\ \\
	
	\KK^n_\mathscr{C} & \xrightarrow{\square^t} & M_\mathscr{C^*}(1, n, \KK) \\
	v & \longmapsto & v^t \\

\end{array}
$$