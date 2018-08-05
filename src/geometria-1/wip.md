
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

Siano $f \in \text{End}(V)$ e $\lambda \in \KK$

## Autovalori

...

### Spettro

...

### Autospazio

**Def.**
$$
V_\lambda \coloneqq V_\lambda(f) \coloneqq \text{Ker} (f - \lambda \text{id}_V)
$$





<div style="height: 300px;"></div>

<script>

// Fix for correctly remembering scrollPos

setTimeout(() => {
	window.scrollTo(0, 10000);
}, 1000);

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