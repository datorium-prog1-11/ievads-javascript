# JavaScript

- Programmēšanas valoda
- Sintakse līdzīga C, PHP, Java, C#, ...
- Interpretēta valoda (līdzīgi kā python)

## 1. Uzdevums

Sarakstīt HTML dokumentu ar šādu saturu:

```
Virsraksts (iecentrēts, Nomainīt fontu)
[ievadlauks] (<input type="text" />)
[poga] (<button>Spied šeit</button>)
Paragrāfs ar tekstu
```

## Saturs:

- JavaScript un HTML
- mainīgie
- if konstrukcijas
- funkcijas

## JavaScript un HTML

### Script elements

JavaScript var like HTML dokumentā izmantojot `<script>` elementu. `<script>` elementu parasti liek HTML dokumenta beigās, pirms aizverošā body taga (`</body>`)

```html
<script>
    // JavaScript būs šeit
</script>
```

JavaScript var iekļaut no atsevišķa faila izmantojot `src=""` atribūtu `<script>` tagam. Šajā gadījumā JavaScript kodu starp atverošo un aizverošo `<script>` tagu neraksta.

```html
<script src="./script.js"></script>
```

---

## JavaScript

### Debug izvade: `print` - `console.log`

```js
console.log('čau');
```

---

### Mainīgie:

Mainīgos var izmantot ar `const` un `let` atslēgvārdiem. Mēs pārsvarā izmantosim `let`.

- `const` nevar pēc tam mainīt
- `let` var pēc tam mainīt

```js
const vards = 'Anna';
let uzvards = 'Vau';
```

---

### 2. Uzdevums

Uztaisīt teksta mainīgo `vards` ar kāda grupas biedra vārdu. Un izvadīt konsolē "Labrīt" un vārdu. Piemēram:

> Labrīt, Anna!

---

### HTML elementu atrašana:

Līdzīgi kā CSS mēs izmantojam selektoru. Šajā gadījumā `id` selektoru.

```js
let input = document.querySelector('#sveiki-ievade');
```

```html
<input type="text" id="sveiki-ievade" />
```

---

### 3. Uzdevums

Atrast pogas HTML elementu un izvadīt konsolē ar `console.log`.

---

### Nosacījumi `if`

Pārbaudīsim vai ievadlaukā (`<input>`) ir kas ievadīts.

```js
<input id="sveiki-ievade" type="text" value="hello" />
```

```js
if (input.value) {
    console.log('input value', input.value);
} else {
    console.log('input ir tukšs');
}
```

---

### Funkcijas (`function`)

Funkcijas definīcijā:

```js
function sveiciens() {
    console.log('this is a function');
}
```

Funkcijas izsaukums:

```js
sveiciens();
```

---

### Reaģējam uz lietotāja darbībām - notikumi (events):

Izmantojam `.addEventListener` metodi, lai novērotu, kas notiek ar elementu.

```js
let poga = document.querySelector('sveiki-poga');
poga.addEventListener('click', sveiciens);
```

