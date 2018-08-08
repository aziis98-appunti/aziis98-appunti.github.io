
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

**Dim.**

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

...

## Forma di Jordan

...









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

