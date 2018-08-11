
<center>
	<a 
		href="/geometria-1/index.html"
		title="Geometria 1">Indietro</a>
</center>

# Endomorfismi

Sia $V$ uno spazio vettoriale su $\KK$, allora l'insieme degli endomorfismi è definito nel seguente modo.

$$
\text{End}(V) = \text{Hom}(V, V)
$$

Questa struttura è in modo naturale una $\KK$-algebra. Ovvero $\text{End}(V)$ è un $\KK$ spazio vettoriale con l'operazione della composizione $\compose$ e valgono le seguenti proprietà

$$
\forall x,y,z \in \text{End}(V)
\quad
\forall \lambda \in \KK
$$

- $(x + y) \compose z = x \compose z + y \compose z$
- $x \compose (y + z) = x \compose y + x \compose z$
- $(\lambda x) \compose y = \lambda (x \compose y)$
- $x \compose (\lambda y) = \lambda (x \compose y)$

$\text{End}(V) \supseteq \text{GL}(V)$ è il **gruppo lineare degli endomorfismi invertibili**.

### Il caso di $\KK^n$

$$ \text{End}(V) = M(n, \KK) $$

Dove $M(n, \KK)$ è l'insieme delle matrici quadrate. In questo caso la composizione corrisponde al prodotto tra matrici

$$ A \compose B = A B $$

Ed inoltre

$$ \text{GL}(\KK^n) = \text{GL}(n, \KK) $$

## Relazione di Equivalenza sugli Endomorfismi

Definiamo ora una specializzazione della relazione della SD-equivalenza.

**Def.** $f, g \in \text{End}(V)$ diremo che $g$ è _coniugata_ ad $f$ (e scriveremo $g \sim f$) se

$$
g \sim f \iff \exists h \in \text{GL}(V): \; g = h \compose f \compose h^{-1}
$$

Questa è una relazione di equivalenza e nel corso del capitolo studieremo il quoziente $\text{End}(V)/_{ \sim }$.

### Caso delle Matrici

Nel caso in cui $V = \KK^n$

$$
B \sim A \iff \exists P \in \text{GL}(n, \KK): \; B = P A P^{-1}
$$

Ciò è equivalente a dire che il seguente diagramma commuta
![Latex in arrivo](/assets/geometria-1/endomorfismi-001.jpg) 

---

In generale possiamo ricondurre lo studio nel caso di $V$ generico a quello in $\KK^n$ nel seguente modo mostrato nel diagramma

![Latex in arrivo](/assets/geometria-1/endomorfismi-002.jpg)

**Prop.** Quindi possiamo dire che dato $V$ con $\dim V = n$ e dati $f,g \in \text{End}(V)$ i seguenti fatti sono equivalenti tra loro

1. $g \sim f$

2. $\exists \mathscr{B}$ base di $V$ tale che $B = \mathscr{M}_\mathscr{B}^\mathscr{B}(g)$ è simile ad $A = \mathscr{M}_\mathscr{B}^\mathscr{B}(f)$

3. $\forall \mathscr{B}$ basi di $V$ si ha che $B = \mathscr{M}_\mathscr{B}^\mathscr{B}(g)$ è simile ad $A = \mathscr{M}_\mathscr{B}^\mathscr{B}(f)$

4. $\exists \mathscr{B}, \mathscr{D}$ basi di $V$ tale che $\mathscr{M}_\mathscr{B}^\mathscr{B}(g) = \mathscr{M}_{\mathscr{D}}^{\mathscr{D}}(f)$

Ci poniamo quindi l'obbiettivo di trovare altri _invarianti_ oltre a $\dim \Image$ e $\text{rango}$ per le relazioni

$$
\text{End}(V)/_{ \sim }
\qquad
\text{M}(n, \KK)/_{ \sim }
$$

### Esempio Banale

Se $V = \KK^1$ abbiamo che l'insieme degli endomorfismi sarà $M(1, \KK) \simeq \KK$ e quindi la relazione di congruenza diventerà

$$
b \sim a \quad b = h a h^{-1} = h h^{-1} a = a
$$

Quindi abbiamo infinite classi di equivalenza. Se invece analizziamo il problema attraverso il rango di 
<span class="dotted">$(a)$</span>
<span class="tip">Matrice 1x1 con unico valore $a$</span>
questo ci da solo due possibili classi di equivalenza, con $a = 0$ e con $a \neq 0$.

---

## Autovalori

Sia $f \in \text{End}(V)$ 

#### Autovalore

$\lambda \in \KK$ è un **autovalore** di $f$ se

$$ \dim \text{Ker}(f - \lambda \, \text{id}_V) > 0 $$

equivalentemente 

$$\lambda \text{ è un autovalore } \iff \exists v \neq 0 : f(v) = \lambda v $$

#### Spettro

$$
\text{Spettro}(f) = \{ \lambda \in \KK \taleche \lambda \text{ è un autovalore di } f \}
$$

#### Autospazio

Un **autospazio** di $f$ relativo ad un autovalore $\lambda \in \text{Spettro}(f)$

$$
V_\lambda \coloneqq V_\lambda(f) \coloneqq \text{Ker} (f - \lambda \, \text{id}_V)
$$

Inoltre i $v \in V_\lambda$ con $v \neq 0$ sono detti **autovettori** di $f$ relativi all'autovalore $\lambda$.

#### Molteplicità Geometrica

$$
0 < d_\lambda \coloneqq \dim V_\lambda(f)
$$

E' detta la **molteplicità geometrica** dell'autovalore $\lambda$ di $f$.

### Considerazioni

**Oss.** Lo spettro può essere vuoto, basti pensare ad esempio alle rotazioni in $\mathbb{R}^2$

**Prop.** Siano $f, g \in \text{End}(V)$. Se $g \sim f \implies$

1. $\text{Spettro}(g) = \text{Spettro}(f)$
2. Se $\lambda \in \text{Spettro}(f) = \text{Spettro}(g) \neq \varnothing \implies d_\lambda(f) = d_\lambda(g)$

**Dim.** 

1. Poiché $g \sim f$ abbiamo che $\exists h \in \text{GL}(V) : g = h \compose f \compose h^{-1} \iff g \compose h = h \compose f$.
	Sia $\lambda \in \text{Spettro}(f) : \exists v \neq 0 \quad f(v) = \lambda v$.

	$$ (g \compose h)(v) = (h \compose f)(v) = h(\lambda v) = \lambda h (v) $$

	$$ (g \compose h)(v) = g(\underbrace{h(v)}_{w}) = \lambda \underbrace{h (v)}_{w} $$

	$w \neq 0$ poiché $h \in \text{GL}(V)$ e $v \neq 0$

	$$ \implies \text{Spettro}(f) \subseteq \text{Spettro}(g) $$

	Ovvero otteniamo che ogni autovalore di $f$ è anche un autovalore di $g$. Poi semplicemente scambiando i ruoli di $f$ e $g$ otteniamo l'ugualianza

	$$ \implies \text{Spettro}(f) = \text{Spettro}(g) $$

	$\qed$

2. $\lambda \in \text{Spettro}(f)=\text{Spettro}(g)$. Poiché $g \sim f$ abbiamo che $\exists h \in \text{GL}(V) : g = h \compose f \compose h^{-1}$

	$$
	h(V_\lambda(f)) = V_\lambda(g) 
	\qquad
	h(V_\lambda(g)) = V_\lambda(f)
	$$

	E poiché $h$ è un isomorfismo abbiamo che le dimensioni sono preservate.

	$$
	\implies \dim V_\lambda(f) = \dim V_\lambda(g)
	$$

	> TODO: Non mi ispira molto questa dimostrazione di Benedetti, in futuro aggiungerò dettagli.

### Passando alle Matrici...

Se $\lambda \in \text{Spettro}(f)$ e $\dim V = n$ possiamo considerare $A = \mathscr{M}_\mathscr{B}^\mathscr{B}(f)$

$$
\begin{array}{rcl}
V_\mathscr{B} & \xrightarrow{f} & V_\mathscr{B} \\
& &\\
\text{[ ]}_\mathscr{B} \Big\downarrow \; & & \; \Big\downarrow \; \text{[ ]}_\mathscr{B} \\
& & \\
\KK^n & \xrightarrow[A]{} & \KK^n
\end{array}
$$ 

intanto possiamo notare subito che $d_\lambda(f) = d_\lambda(A)$ poiché $\mathscr{B}$ è un isomorfismo e preserva la dimensione dell'autospazio $V_\lambda(f)$ quando passa in $\KK^n$. Vogliamo ora mostrare che $\text{Spettro}(f) = \text{Spettro}(A)$

**Oss.**

$$
v \neq 0: f(v) = \lambda v 
\quad \rightsquigarrow \quad
[v]_\mathscr{B} \neq 0: A [v]_\mathscr{B} = \lambda [v]_\mathscr{B}
$$

$$
V_\lambda(A) = \text{Ker}(A - \lambda I_n)
$$

$$
\implies d_\lambda(A) = n - \text{rango}(A - \lambda I_n)
$$

### Gli autovalori generano spazi in somma diretta (?)

Consideriamo ora $\text{Spettro}(f) \neq \emptyset$ e siano $\lambda_1, \dots, \lambda_m \in \text{Spettro}(f)$ tali che $\lambda_i \neq \lambda_j$ se $i \neq j$ (wow che novità, gli insiemi non hanno elementi ripetuti) e siano $v_1, \dots, v_m$ dei rispettivi _autovettori_.

$$
\forall j = 1 \dots m \quad
v_j \neq 0 \quad
f(v_j) = \lambda_j v_j
$$

> **TODO:** Dimostrazioni mistiche per induzione

**Corollario.** $\left|\text{Spettro}(f)\right| \leq \dim V$

Inoltre se $\left|\text{Spettro}(f)\right| = n$, abbiamo $\lambda_1, \dots, \lambda_n$ con $\lambda_i \neq \lambda_j$ se $i \neq j$ e possiamo considerare una base di $V$ fatta di autovettori di $f$.

$$\mathscr{B} = \{ v_1, \dots, v_n \}$$

Ed avremo che

$$
\mathscr{M}_\mathscr{B}^\mathscr{B}(f) =
\begin{pmatrix}
	\lambda_1 &        &         0 \\
			  & \ddots &           \\
	        0 &        & \lambda_n \\
\end{pmatrix}
$$

**Lemma.**

Sia $\text{Spettro}(f) = \{ \lambda_1, \dots, \lambda_m \}$ con $1 < m \leq n = \dim V$ e $\forall j = 1 \dots m : \lambda_i \neq \lambda_j$ se $i \neq j$ e definiamo 
$$
\underset{(d_1)}{V_{\lambda_1}} + \dots + \underset{(d_m)}{V_{\lambda_m}} \coloneqq \text{Span}(\bigcup_{j=1}^m V_{\lambda_j}(f))
$$
$$
\implies
\text{dim}(V_{\lambda_1} + \dots + V_{\lambda_m}) = \sum_{j=1}^m d_{\lambda_j}
$$

Se abbiamo un endomorfismo $f$ possiamo considerare una base di $V$
$$
\mathscr{A} = \{ \mathscr{B}_1, \dots, \mathscr{B}_m, \mathscr{P} \}
$$
$$
\implies V = V_{\lambda_1} \oplus \dots \oplus V_{\lambda_m} \oplus W
$$

$$
\mathscr{M}_\mathscr{A}^\mathscr{A}(f) =
\begin{pmatrix}
	\lambda_1 I_{d_1} &                   &       0 & ? \\
			          & \lambda_2 I_{d_2} &         & ? \\
	                0 &                   & \ddots  & ? \\
\end{pmatrix}
$$

**Def.**

$f$ si dice **diagonalizzabile**:

$$
\exists \mathscr{B} \text{ base di } V \text{ tale che } \mathscr{M}_\mathscr{B}^\mathscr{B}(f) \text{ sia diagonale } 
$$
$$ \Updownarrow $$
$$ 
\exists \mathscr{B} \text{ base di } V \text{ formata di autovettori di } f 
$$
$$ \Updownarrow $$
$$
\text{Spettro}(f) \neq \emptyset \text{ e } \sum_{j=1}^m d_j = \dim V = n
$$

---

### Endomorfismi Diagonalizzabili

Dimostriamo ora che i seguenti fatti sono equivalenti:

1. $\exists \mathscr{B}$ base di $V$ tale che $\mathscr{M}_\mathscr{B}^\mathscr{B}(f)$ sia diagonale
2. $\exists \mathscr{B}$ base di $V$ formata di autovettori di $f$
3. $\text{Spettro}(f) = \{ \lambda_1, \dots, \lambda_m \} \neq \emptyset$ e $V = V_{\lambda_1} \oplus \dots \oplus V_{\lambda_m} \quad \lambda_i \neq \lambda_j \iff i \neq j$


- $\boxed{\text{i} \implies \text{ii}}$

	**Dim.**
	
	Sappiamo che esiste per ipotesi una base $\mathscr{B}$ di $V$ tale che la matrice del cambiamento di base dalla base in se stessa è diagonale
	$$\mathscr{B} = \{ v_1, \dots, v_n \}$$
	$$
	\mathscr{M}_\mathscr{B}^\mathscr{B}(f)
	=
	\begin{pmatrix}
		\mu_1 & & 0 \\
		& \ddots & \\
		0 & & \mu_n
	\end{pmatrix}
	=
	\begin{pmatrix}
		[f(v_1)]_\mathscr{B} & \dots & [f(v_n)]_\mathscr{B}
	\end{pmatrix}
	$$
	
	Ora basta calcolare l'endomorfismo nei vettori della base e notare che sono tutti autovettori

	$$
	\begin{aligned}
	f(v_1) 
	&= (\text{[ ]}_\mathscr{B}^{-1} \compose \mathscr{M}_\mathscr{B}^\mathscr{B}(f) \compose \text{[ ]}_\mathscr{B})(v_1) \\
	&= (\text{[ ]}_\mathscr{B}^{-1} \compose \mathscr{M}_\mathscr{B}^\mathscr{B}(f))(\begin{pmatrix} 1 \\ 0 \\ \vdots \\ 0 \end{pmatrix}) \\
	&= (\text{[ ]}_\mathscr{B}^{-1})(\begin{pmatrix} \mu_1 \\ 0 \\ \vdots \\ 0 \end{pmatrix}) \\
	&= \mu_1 v_1
	\end{aligned}
	$$

	$$ \implies f(v_1) = \mu_1 v_1 \quad \dots \quad f(v_n) = \mu_n v_n $$

	$\qed$
	
	> **TODO:** Forse togliere tutti i passaggi in questa dimostrazione (è banale?)

- $\boxed{\text{ii} \iff \text{iii}}$
	
	**Dim.**
	
	Per l'ipotesi ii abbiamo che $\exists\mathscr{B} = \{ v_1, \dots, v_n \}$ base di autovettori di $f$. 

	$$
	\mathscr{M}_\mathscr{B}^\mathscr{B}(f)
	=
	\begin{pmatrix}
		\lambda_1 I_{d_1} 	& 	   		& 	0			  	\\
						  	& \ddots 	&   				\\
			0			 	& 	   		& \lambda_m I_{d_m} \\
	\end{pmatrix}
	$$

	(con la condizione solita che $\lambda_i \neq \lambda_j \iff i \neq j$ e $d_1 + \dots + d_m = n$) 

	Sappiamo che $\text{Spettro}(f) = \text{Spettro}(A)$, proviamo ora a cercare dei $\mu \in \KK$ per cui $\dim \text{Ker}(A - \mu I_n) > 0 \implies \text{rango}(A - \mu I_n) < n$
	
	$$
	A - \mu I_n 
	=
	\begin{pmatrix}
		(\lambda_1 - \mu) I_{d_1} & & 0 \\
		& \ddots & \\
		0 & & (\lambda_m - \mu) I_{d_m} \\
	\end{pmatrix}
	$$

	Possiamo vedere che $\mu \neq \lambda_j \quad \forall j = 1 \dots m \implies \text{rango}(A - \mu I_n) = n$ e quindi che $\mu \notin \text{Spettro}(f)$

	Inoltre $\mu = \lambda_j \implies \dim \text{Ker}(A - \lambda_j I) = d_j$

	Ed abbiamo così dimostrato la freccia verso destra infatti avremo che 

	$$
	\text{Spettro}(f) = \{ \underset{d_1}{\lambda_1}, \underset{\dots}{\dots}, \underset{d_m}{\lambda_m} \} \qquad \sum d_j = n
	$$

	> **TODO:** Per l'altra freccia basta ripercorrere al contrario la stessa dimostrazione poiché in realtà abbiamo sempre dei $\iff$ (?)

**Lemma.**

$$ V = V_{\lambda_1} \oplus \dots \oplus V_{\lambda_m} $$

**Lemma.**

1. $$ f \sim g $$
	$$ \Downarrow $$
	$$ f \text{ diagonalizzabile} \iff g \text{ diagonalizzabile} $$
2. $$f \text{ e } g \text{ diagonalizzabili}$$
	$$ \Downarrow $$
	$$
	f \sim g \iff \text{Spettro}(f) = \text{Spettro}(g)
	\text{ e }
	\forall \lambda \text{ autovalore} \quad d_\lambda(f) = d_\lambda(g)
	$$




<div style="height: 300px;"></div>

<script>

// Fix for correctly remembering scrollPos

// setTimeout(() => {
// 	window.scrollTo(0, 10000);
// }, 1000);

// const scrollPos = localStorage.getItem("mathematics.scroll");

// if (scrollPos) {
// 	setTimeout(() => {
// 			window.scrollTo(0, parseInt(scrollPos));
// 	}, 1000);
// }

// setInterval(() => {
// 	localStorage.setItem("mathematics.scroll", window.pageYOffset);
// }, 1000);

</script>

