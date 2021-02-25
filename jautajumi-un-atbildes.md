# Jautājumi un atbildes

## 1. Kā nodefinēt funkciju JavaScript valodā?

a. `function = myFunction()`
b. `def myFunction()`
c. `function myFunction()`

### Pareizā atbile

Pareizā atbilde ir `c`. Mēs sākam funkcijas definīciju JavaScript ar atslēgvārdu `function`, tad seko funkcijas vārds, parastās iekavas (`()`) parametriem un figūriekavas, kas satur funkcijas kodu.

Piemērs:
```js
function myFunction() {
    console.log('sveiki');
}
```

### Kāpēc atbilde `b` nav pareiza?

Kas notiks ar šo kodu JavaScript?

Atbildē `a` ir lieka vienādības (`=`) zīme starp atslēgvārdu `function` un funkcijas nosaukumu. Līdz ar to tas izskatās kā funkcijas izsaukums, kur mēs to vērtību ko funkcija atgriež piešķiram mainīgajam.

Funkcijas rezultātu mainīgajam var piešķirt šādi:

```js
let mainigais = myFunction();
```

### Kāpēc atbilde `a` nav pareiza?

Kas notiks ar šo kodu JavaScript?

Atbilde `b` ir funkcijas definīcija Python. Un, lai būtu pilnīgi pareizi vajadzētu beigās pievienot `:`:

Pareiza funkcijas definīcija Python:

```python
def myFunction():
    pass
```

---

## 2. Kā definēt mainīgo valodā JavaScript un piešķirt tam vērtību?

a. def carName = 'Audi';
b. carName = 'Audi';
c. let carName = 'Audi';
d. variable carName = 'Audi';

### Pareizā atbilde

Pareizā atbilde ir `c`. Mainīgā definīcija sākas ar atslēgvārdu `let` vai `const`, tad seko mainīgā nosaukums, un, ja mēs gribam piešķirt mainīgajam vērtību, tad vienādības zīme (`=`) un vērtība ('Audi'`).

```js
let carName = 'Audi';
```

---

## 3. Kādu atslēgas vārdu (keyword) izmanto JavaScript, lai deklarētu mainīgo?

a. `let`
b. `dim`
c. `declare`
d. `def`

### Pareizā atbilde

Pareizā atbilde ir `a`. JavaScript mēs definējam mainīgos ar `let` vai `const` atslēgvārdu.

### Kāpēc `b` un `c` nav pareizās atbildes

Šādu atslēgvārdu nav JavaScript un arī citās valodās, ko esam līdz šim skatījušies.

### Kāpēc `d` nav pareizā atbilde?

Ar atslēgvārdu `def` mēs definējam funkcijas valodā Python.

Funkcijas definīcija Python:

```python
def myFunction():
    pass
```