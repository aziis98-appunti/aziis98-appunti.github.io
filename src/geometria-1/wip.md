
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

Quindi abbiamo infinite classi di equivalenza. Se invece analizziamo il problema attraverso il rango di $\begin{bmatrix} a \end{bmatrix}$ questo ci da solo due possibili classi di equivalenza, con $a = 0$ e con $a \neq 0$.

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
2. Se $\lambda \in \text{Spettro}(f) \neq \emptyset \implies d_\lambda(f) = d_\lambda(g)$

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

Consideriamo ora $\text{Spettro}(f) \neq \emptyset$ e siano $\lambda_1, \dots, \lambda_m \in \text{Spettro}(f)$ tali che $\lambda_i \neq \lambda_j$ se $i \neq j$ e siano $v_1, \dots, v_m$ dei rispettivi _autovettori_.

$$
\forall j = 1 \dots m \quad
v_j \neq 0 \quad
f(v_j) = \lambda_j v_j
$$

Dimostriamo ora che questi autovettori sono linearmente indipendenti. Consideriamo i primi $k$ autovalori (con $k < m$) ed i rispettivi autovettori e mostriamo che anche il $k+1$-esimo è linearmente indipendente.

**Dim.**

1. Per far partire l'induzione vediamo inizialmente che se $k = 1$, abbiamo che $v_1 \neq 0$ quindi va bene.
2. Ora se prendiamo $\lambda_1, \dots, \lambda_{k+1}$ ed dei rispettivi autovettori $v_1, \dots, v_{k+1}$
	$$
	\begin{cases}
		a_1 v_1 + \dots + a_{k+1} v_{k+1} = 0 \\
		a_1 \lambda_1 v_1 + \dots + a_{k+1} \lambda_{k+1} v_{k+1} = 0
	\end{cases}
	$$
	Ora moltiplichiamo la prima equazione per $\lambda_{k+1}$ e sottraiamola dalla seconda ed otteniamo così
	$$
	a_1 (\lambda_1 - \lambda_{k+1}) v_1 + \dots + a_{k+1} (\underbrace{\lambda_{k+1} - \lambda_{k+1}}_{=0}) v_{k+1} = 0
	$$
	$$
	\implies a_1 (\lambda_1 - \lambda_{k+1}) v_1 + \dots + a_{k} (\lambda_{k} - \lambda_{k+1}) v_{k} = 0
	$$
	Ora l'ipotesi induttiva ci mostra immediatamente ciò che volevamo dimostrare infatti
	$$
	\begin{cases}
		a_1 (\lambda_1 - \lambda_{k+1}) = 0 \\
		\quad \vdots \\
		a_k (\lambda_k - \lambda_{k+1}) = 0
	\end{cases}
	\iff
	a_1 = \dots = a_k = 0
	$$
	$\qed$

**Corollario.** $\left|\text{Spettro}(f)\right| \leq \dim V$

Inoltre se $\left|\text{Spettro}(f)\right| = n$, abbiamo $\lambda_1, \dots, \lambda_n$ con $\lambda_i \neq \lambda_j$ se $i \neq j$ e possiamo considerare una base di $V$ fatta di autovettori di $f$.

$$\mathscr{B} = \{ v_1, \dots, v_n \}$$

Ed avremo che

$$
\mathscr{M}_\mathscr{B}^\mathscr{B}(f) =
\begin{bmatrix}
	\lambda_1 &        &         0 \\
			  & \ddots &           \\
	        0 &        & \lambda_n \\
\end{bmatrix}
$$

**Lemma./Corollario.**

Sia $\text{Spettro}(f) = \{ \lambda_1, \dots, \lambda_m \}$ con $1 < m \leq n = \dim V$ e $\forall j = 1, \dots, m : \lambda_i \neq \lambda_j$ se $i \neq j$ e definiamo 
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
\begin{bmatrix}
	\lambda_1 I_{d_1} &                   &       0 & ? \\
			          & \lambda_2 I_{d_2} &         & ? \\
	                0 &                   & \ddots  & ? \\
\end{bmatrix}
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
	\begin{bmatrix}
		\mu_1 & & 0 \\
		& \ddots & \\
		0 & & \mu_n
	\end{bmatrix}
	=
	\begin{bmatrix}
		f(v_1)]_\mathscr{B} & \dots & [f(v_n)]_\mathscr{B}
	\end{bmatrix}
	$$
	
	Ora basta calcolare l'endomorfismo nei vettori della base e notare che sono tutti autovettori

	$$
	\begin{aligned}
	f(v_1) 
	&= (\text{[ ]}_\mathscr{B}^{-1} \compose \mathscr{M}_\mathscr{B}^\mathscr{B}(f) \compose \text{[ ]}_\mathscr{B})(v_1) \\
	&= (\text{[ ]}_\mathscr{B}^{-1} \compose \mathscr{M}_\mathscr{B}^\mathscr{B}(f))(\begin{bmatrix} 1 \\ 0 \\ \vdots \\ 0 \end{bmatrix}) \\
	&= (\text{[ ]}_\mathscr{B}^{-1})(\begin{bmatrix} \mu_1 \\ 0 \\ \vdots \\ 0 \end{bmatrix}) \\
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
	\begin{bmatrix}
		\lambda_1 I_{d_1} 	& 	   		& 	0			  	\\
						  	& \ddots 	&   				\\
			0			 	& 	   		& \lambda_m I_{d_m} \\
	\end{bmatrix}
	$$

	(con la condizione solita che $\lambda_i \neq \lambda_j \iff i \neq j$ e $d_1 + \dots + d_m = n$) 

	Sappiamo che $\text{Spettro}(f) = \text{Spettro}(A)$, proviamo ora a cercare dei $\mu \in \KK$ per cui $\dim \text{Ker}(A - \mu I_n) > 0 \implies \text{rango}(A - \mu I_n) < n$
	
	$$
	A - \mu I_n 
	=
	\begin{bmatrix}
		(\lambda_1 - \mu) I_{d_1} & & 0 \\
		& \ddots & \\
		0 & & (\lambda_m - \mu) I_{d_m} \\
	\end{bmatrix}
	$$

	Possiamo vedere che $\mu \neq \lambda_j \quad \forall j = 1 \dots m \implies \text{rango}(A - \mu I_n) = n$ e quindi che $\mu \notin \text{Spettro}(f)$

	Inoltre $\mu = \lambda_j \implies \dim \text{Ker}(A - \lambda_j I) = d_j$

	Ed abbiamo così dimostrato la freccia verso destra infatti avremo che 

	$$
	\text{Spettro}(f) = \{ \underset{d_1}{\lambda_1}, \underset{\dots}{\dots}, \underset{d_m}{\lambda_m} \} \qquad \sum d_j = n
	$$

	> **TODO:** Per l'altra freccia basta ripercorrere al contrario la stessa dimostrazione poiché in realtà abbiamo sempre dei $\iff$ (?)

**Lemma./Corollario.**

$$ 
f \text{ diagonalizzabile}
\iff
V = V_{\lambda_1} \oplus \dots \oplus V_{\lambda_m}
$$

**Lemma.**

1. $$ f \sim g $$
	$$ \Downarrow $$
	$$ f \text{ diagonalizzabile} \iff g \text{ diagonalizzabile} $$
2. $$f \text{ e } g \text{ diagonalizzabili}$$
	$$ \Downarrow $$
	$$
	f \sim g \iff 
	\begin{gathered}
		\text{Spettro}(f) = \text{Spettro}(g) \\
		\forall \lambda \text{ autovalore} \quad d_\lambda(f) = d_\lambda(g)
	\end{gathered}
	$$

Abbiamo trovato un'insieme di endomorfismi diagonalizzabili $\mathscr{D}(V) \underset{\normalsize{=}\mathllap{?\,}}{\subset} \text{End}(V)$ e siamo riusciti a classificare almeno questo pezzo

$$
\mathscr{D}(V)/_{ \sim }
$$

---

## Endomorfismi non diagonalizzabili

Un esempio universale che al momento fuoriesce dalla nostra classificazione si può trovare in $V = \KK^2$

$$ A : \KK^2 \to \KK^2 $$
$$ A = \begin{bmatrix} 0 & 1 \\ 0 & 0 \end{bmatrix} $$

Infatti questo endomorfismo ha $\text{Spettro}(A) = \{ 0 \}$ solo che se calcoliamo la dimensione dell'autospazio relativo a $0$ otteniamo

$$
A - \mu \begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix} = 
\begin{bmatrix} -\mu & 1 \\ 0 & -\mu \end{bmatrix}
$$

E $\mu = 0 \implies d_0 = 2 - \text{rango} \begin{bmatrix} 0 & 1 \\ 0 & 0 \end{bmatrix} = 1$

Possiamo anche fare un esempio peggiore, consideriamo le seguenti due matrici

$$
A =
\begin{bmatrix}
	0 & 1 & 0 & 0 \\
	0 & 0 & 1 & 0 \\
	0 & 0 & 0 & 0 \\
	0 & 0 & 0 & 0 \\
\end{bmatrix}
\qquad
B =
\begin{bmatrix}
	0 & 1 & 0 & 0 \\
	0 & 0 & 0 & 0 \\
	0 & 0 & 0 & 1 \\
	0 & 0 & 0 & 0 \\
\end{bmatrix}
$$

Lo spettro è sempre $\text{Spettro}(A) = \text{Spettro}(B) = \{ 0 \}$ e $d_0(A) = d_0(B) = 2$. Dobbiamo provare a trovare altri invarianti, notiamo intanto che se $0 < n \in \mathbb{N}$

$$
f \sim g \implies f^n \sim g^n
$$

**Dim.**

$$
g = h \compose f \compose h^{-1}
$$
$$
g^n = h \compose f \compose h^{-1} \compose h \compose f \compose h^{-1} \compose \cdots \compose h \compose f \compose h^{-1} = h \compose f^n \compose h^{-1}
$$

$\qed$

E possiamo ora rianalizzare l'esempio precedente e notare che

$$
A^2 =
\begin{bmatrix}
	0 & 0 & 1 & 0 \\
	0 & 0 & 0 & 0 \\
	0 & 0 & 0 & 0 \\
	0 & 0 & 0 & 0 \\
\end{bmatrix}
{=}\mathllap{/\,} 0
\qquad
B^2 =
\begin{bmatrix}
	0 & 0 & 0 & 0 \\
	0 & 0 & 0 & 0 \\
	0 & 0 & 0 & 0 \\
	0 & 0 & 0 & 0 \\
\end{bmatrix}
= 0
$$
$$ \implies A \not\sim B $$

> **TODO:** Classificazione di forza bruta delle matrici 1x1 e 2x2 e guarda caso esce la formula del determinante 2x2

## Determinante

### Studio in $\KK$

Se proviamo classificare tutti gli endomorfismi di $V = \KK^1$ otteniamo come abbiamo già visto che le uniche due classi di equivalenza sono

$$
\begin{array}{lll}
& & a_{1, 1} = 0 \implies \text{ non invertibile} \\
& \nearrow & \\	
[a_{1,2}] & & \\
& \searrow & \\	
& & a_{1, 1} \neq 0 \implies \text{ invertibile} \\
\end{array}
$$

E quindi possiamo definire una funzione $D_1$ tale che 

$$ D_1 : M(1, \KK) \to \KK $$
$$ D_([a_{1,1}]) = a_{1,1} $$
$$ [a_{1,1}] \text{ invertibile} \iff D_1([a_{1,1}]) \neq 0 $$

Inoltre la funzione $D_1$ è _lineare_ e vale $D_1([1])=1$

### Studio in $\KK^2$

Se proviamo a fare la stessa cosa con $V = \KK^2$ e applichiamo l'algoritmo di Gauss aggiungendo tutte le varie condizioni ad i passaggi necessari otteniamo

$$
\begin{bmatrix} 
a_{1, 1} & a_{1, 2} \\
a_{2, 1} & a_{2, 2} \\
\end{bmatrix}
\text{ invertibile }
\iff
a_{1, 1} a_{2, 2} - a_{1, 2} a_{2, 1} 
\neq 0
$$

Quindi la nostra funzione $D_2 : M(2, \KK) \to \KK$ sarà

$$
D_2\left(\begin{bmatrix} 
a_{1, 1} & a_{1, 2} \\
a_{2, 1} & a_{2, 2} \\
\end{bmatrix}\right) = a_{1, 1} a_{2, 2} - a_{1, 2} a_{2, 1} 
$$

Ed avremo che $A$ è invertibile $\iff D_2(A) \neq 0$. Possiamo anche intendere la funzione come una funzione sulle colonne

$$
D_2(A) = D_2(A_1, A_2) = 
D_2\left(
\begin{bmatrix} a_{1,1} \\ a_{2,1} \end{bmatrix},
\begin{bmatrix} a_{1,2} \\ a_{2,2} \end{bmatrix}
\right)
$$

La funzione in questo caso però non è lineare ma _bilineare_ infatti

$$
D_2(\lambda A_1, \lambda A_2) = \lambda^2 D_2(A_1, A_2)
$$

Ciò significa che se fisso una colonna e faccio variare l'altra ottengo una applicazione lineare della colonna in $\KK$. Ricapitoliamo ora le proprietà che abbiamo trovato per $D_2$
1. $D_2$ è bilineare (rispetto alle colonne)
2. $D_2(X, X) = 0$
3. $D_2(I) = 1$

#### Proprietà derivate da quelle di base

- $D_2(A_1, A_2) = -D(A_2, A_1)$
	
	**Dim.**
	
	$$D_2(A_1 + A_2, A_1 + A_2) \overset{\text{(2)}}{=} 0 $$
	$$ \underbrace{D_2(A_1, A_1)}_{=\,0} + D_2(A_1, A_2) + D_2(A_2, A_1) + \underbrace{D_2(A_2, A_2)}_{=\,0} = 0$$
	$\qed$

- **Prop. (Unicità)** $D_2$ è l'unica funzione che verifica le proprietà i, ii e iii.
	
	**Dim.**

	Ipotizziamo che esista un'altra $F : \KK^2 \times \KK^2 \to \KK$ che verifica le tre proprietà e mostriamo che $\forall A = (A_1, A_2) \implies F(A) = D_2(A)$

	$$
	A =
	\begin{bmatrix}
		a_{1,1} & a_{1,2} \\
		a_{2,1} & a_{2,2}
	\end{bmatrix}
	=
	\begin{bmatrix}
		a_{1,1} E_1 + a_{2,1} E_2 & 
		a_{1,2} E_1 + a_{2,2} E_2
	\end{bmatrix}
	$$
	
	Dove consideriamo $\KK^2$ nella sua base canonica $\mathscr{C} = \{ E_1, E_2 \}$. Prooviamo ora a calcolare $F(A)$ usando solo le tre proprietà che abbiamo assunto

	$$
	\begin{aligned}
		F(\begin{bmatrix}
			a_{1,1} & a_{1,2} \\
			a_{2,1} & a_{2,2}
		\end{bmatrix})
		&\overset{\text{(1)}}{=}
		a_{1,1} a_{1,2} \underbrace{F(E_1,E_1)}_{=\,0} + a_{1,1} a_{2,2} F(E_1,E_2) \\ & + a_{2,1} a_{1,2} F(E_2,E_1) + a_{2,1} a_{2,2} \underbrace{F(E_2,E_2)}_{=\,0} \\
		&= a_{1,1} a_{2,2} \underbrace{F(I_2)}_{=\,1} + a_{2,1} a_{1,2} \underbrace{F(E_2, E_1)}_{=-F(I)=-1} \\
		&= a_{1,1} a_{2,2} - a_{2,1} a_{1,2} = D_2(A)		
	\end{aligned}
	$$

	$\qed$
	
- Se scegliamo $F_\lambda : \KK^2 \times \KK^2 \to \KK$ in modo che verifichi la prima e la seconda proprietà e tale che $F_\lambda (I_2) = \lambda$ allora otteniamo che $F_\lambda(A) = \lambda D_2(A)$ e possiamo definire
	
	$$
	\Lambda (\KK^2) = \{ F : \KK^2 \times \KK^2 \to \KK \text{ che verificano i) e ii)} \}
	$$

	E' uno spazio vettoriale con $\dim \Lambda = 1$ e $D_2$ ne è una base. 

#### Formula del prodotto di _Binet_

$$
D_2(B A) = D_2(B) D_2(A) = D_2(A) D_2(B) = D_2(A B)
$$

**Dim.**

Consideriamo una $F : \KK^2 \times \KK^2 \to \KK$ in modo che $F(A) \coloneqq D_2(B A)$ abbiamo che

$$
D_2(B A) = F(A) \overset{\text{s.v.}}{=} F(I) D_2(A) = D_2(B) D_2(A)
$$

$\qed$

> **TODO.** Rendere la dimostrazione più chiara

#### Altre proprietà

**Prop.** 

$$ A \text{ invertibile } \iff D_2(A) \neq 0 $$

**Dim.**

- $\boxed{\Leftarrow}$

	Dimostriamo che $A \text{ non invertibile} \implies D_2(A) = 0$. Possiamo assumere che $A_2 = \lambda A_1$

	$$ D_2(A_1, \lambda A_1) = \lambda D_2(A_1, A_1) = 0 $$

	$\qed$

- $\boxed{\Rightarrow}$

	Ora dimostriamo invece che $A \text{ invertibile} \implies D_2(A) \neq 0$. Il fatto che $A$ sia invertibile ci dice che esiste $A^{-1}$ tale che $A A^{-1} = I$ e quindi

	$$ D_2(A A^{-1}) = D_2(I) = 1 $$
	$$ \tag{*} D_2(A) D_2(A^{-1}) = 1$$ 

	E serve che entrambi i termini di $\text{(*)}$ siano non zero affinché sia vera

	$\qed$
	
**Corollario.** $D_2(A^{-1}) = D_2(A)^{-1}$

**Prop.** $A, B \in M(2, \KK) : B \sim A \implies D_2(B) = D_2(A)$

**Dim.**

$$ \exists P \in GL(2, \KK) : B = P A P^{-1} $$
$$ 
\begin{aligned}
D_2(B) 
&= D_2(P A P^{-1}) = D_2(P) D_2(A) D_2(P^{-1}) \\
& = D_2(P) D_2(P^{-1}) D_2(A) = D_2(P P^{-1}) D_2(A) \\
& = D_2(I) D_2(A) = D_2(A) 
\end{aligned}
$$

$\qed$

### Studio in $\KK^n$

**Def.**

Sia $A \in M(n, \KK) = \underbrace{\KK^n \times \cdots \times \KK^n}_{n}$ con $n \geq 1$ ed $A = [A_1, \dots, A_n]$. Una **funzione determinante** a livello $n$ è $D_n : \underbrace{\KK^n \times \cdots \times \KK^n}_{n} \to \KK$ tale che

1. $D_n$ è $n$-lineare
2. $D_n(\dots X, X \dots) = 0$
2. $D_n(I) = 1$

#### Proprietà

- $D_n(\dots X,Y \dots) = -D_n(\dots Y,X \dots)$
	
	**Dim.**

	Basta sviluppare la seguente usando la _prima_ proprietà $D_n( \dots X+Y,X+Y \dots ) \overset{\text{(2)}}{=} 0$ e si ottiene

	$$D_n(\dots X,Y \dots) + D_n(\dots Y,X \dots) = 0$$

	$\qed$

Le due seguenti si mostrano usando la precedente ed _agitando le mani_

- $D_n(\dots X \dots X \dots) = 0$ 

- $D_n(\dots X \dots Y \dots) = -D_n(\dots Y \dots X \dots)$

**Prop.** Se $D_n$ esiste è **unico** e ne possiamo trovare una formula esplicita.

> **Gruppo delle permutazioni**
> 
> $S_n = $ gruppo delle permutazioni su $\{ 1, \dots, n \} = \NN_n$
> 
> Valgono le seguenti proprietà
> - $|S_n| = n!$
> - $S_n \ni \sigma : \{ 1, \dots, n \} \to \{ 1, \dots, n \}$ è bigettiva
> - $(S_n \; \compose)$ è un gruppo
> 

**Dim.**

$\{ E_1, \dots, E_n \}$ base canonica di $\KK^n$, con $A \in M(n, \KK)$

$$
A = [A_1, \dots, A_n] \qquad A = [a_{i, j}]_{\tiny\begin{array}{l} i \in \NN_n \\ j \in \NN_n \end{array}}
$$

$$
A =
\left[
\;
\sum_{i \in \NN_n}{a_{i,1} E_i} 
\quad \dots \quad
\sum_{i \in \NN_n}{a_{i,n} E_i} 
\; 
\right]
$$

<!-- 
> **Test in Latex:** Versione ancora più compatta della formula precedente usando notazioni personali bll
> $$
A =
\left[
\sum_{\NN_n}{a_{\square,j} E_\square} 
\right]_{j \in \NN_n}
$$
> $$
A =
(+ / a_{i,j} E_i :_i \NN_n) :_j \NN_n
$$
 -->

Sviluppando completamente $D_n(A)$ usando la $n$-linearità e cancellando i casi in cui le colonne sono uguali otteniamo

$$
\sum_{\sigma \in S_n} a_{\sigma(1),1} \dots a_{\sigma(n),n} D_n([E_{\sigma(1)} \dots E_{\sigma(n)}])
$$

Possiamo ad esempio vedere il caso $n = 2: S_2 = \{ \text{id}, \begin{bmatrix} 1 & 2 \\ 2 & 1 \end{bmatrix} \}$ che infatti risulta essere 

$$
a_{1,1} a_{2,2} D_2{E_1, E_2} + a_{2,1} a_{1,2} D_2{E_2, E_1}
$$

In generale $D_{\xi_\sigma} = (-1)^{S(AG)}$ dove l'esponente è il numero di scambi da fare per raggiungere l'identità nell'algoritmo di Gauss. E quindi se $D_n$ esiste abbiamo che $\forall A \in M(n, \KK)$

$$
\sum_{\sigma \in S_n} a_{\sigma(1),1} \dots a_{\sigma(n),n} (-1)^{S(AG)}
$$

> **TODO.** Bisognerebbe tipo dimostrare che questa va bene e rispetta le tre proprietà

#### Definizione ricorsiva

Possiamo anche procedere per induzione per definire il determinante, per $n=1$ abbia una funzione che va bene. Ora supponiamo di aver definito $D_n$ e costruiamo una definizione di $D_{n+1}$

Consideriamo le colonne di una matrice $n+1 \times n+1$ e fissiamo un indice di riga $i$.
$$
A = [ A_1, \dots, A_{n+1} ]
$$

Sia $A_{i,j}$ la sottomatrice $n \times n$ ottenuta cancellando la $i$-esima riga e la $j$-esima colonna.

Definiamo ora per induzione $F_i(A)$ nel seguente modo

$$
F_i(A) \coloneqq \sum_{j=1}^{n+1} a_{i,j} D_n(A_{i,j}) (-1)^{i+j}
$$

**Prop.** Per ogni scelta di $i$, $F_i$ verifica le tre proprietà di $D_{n+1}$ e risulta $F_i = D_{n+1}$.

**Dim.**

1. Nel caso $n=2$ con $i=1$ abbiamo
	$$
	\begin{aligned}
		F_1\left(\begin{bmatrix}
				a_{1,1} & a_{1,2} \\
				a_{2,1} & a_{2,2}
			\end{bmatrix}\right) &= \sum_{j=1}^2 a_{1,j} \det (A_{1,j}) (-1)^{i+j} \\
			&= a_{1,1} a_{2,2} (-1)^{1+1} + a_{1,2} a_{2,1} (-1)^{1+2} \\
			&= a_{1,1} a_{2,2} - a_{1,2} a_{2,1} \\
	\end{aligned}
	$$

	$\qed$
2. Ora vediamo che nel caso induttivo $F_i$ verifica la $(n+1)$-linearità.
	
	> **TODO.** Scoprire dove sia finita la dimostrazione

### Cramer

### Formula determinante per $A^{-1}$

### Interpretazione Geometrica del determinante

#### Orientazione

#### Area del parallelogramma 

## Altri invarianti

Per ora sappiamo che lo _spettro_ e le _molteplicità geometriche_ di $f$ sono degli invarianti per simulitudine. Inoltre possiamo vedere che

$$
\lambda \in \text{Spettro}(A) \iff \text{rango}(A - \lambda I) < n \iff \det (A - \lambda I) = 0
$$

**Def.**
Si dice **matrice caratteristica** di $A$
$$
A - t I \in M(n, \KK[t])
$$
e **polinomio caratteristico** di $A$
$$
p_A (t) = \det(A - t I) \in \KK[t]
$$

**Lemma.** $\lambda \in \text{Spettro}(A) \iff \lambda$ è una radice del polinomio caratteristico di $A$.

**Def.** Ora possiamo definire la **molteplicità algebrica** di $\lambda \in \text{Spettro}(A)$ (ovvero $p_A(\lambda) = 0$).
$$
p_A(t) = (\lambda - t)^{m_\lambda} Q(t) \qquad \text{ con } Q(\lambda) \neq 0
$$
Ed in questo caso $m_\lambda$ è detta molteplicità algebrica della radice $\lambda$ di $p_A(t)$.

**Prop.** $p_A(t)$ è un invariante per coniugazione.























































<div style="height: 300px;"></div>

<script>

// Fix for correctly remembering scrollPos

// setTimeout(() => {
// 	window.scrollTo(0, 100000);
// }, 1000);

const scrollPos = localStorage.getItem("mathematics.scroll");

if (scrollPos) {
	setTimeout(() => {
			window.scrollTo(0, parseInt(scrollPos));
	}, 1000);
}

setInterval(() => {
	localStorage.setItem("mathematics.scroll", window.pageYOffset);
}, 1000);

</script>

