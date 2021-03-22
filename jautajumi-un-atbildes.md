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

## Kā var defiēt JavaScript mainīgo un piešķirt tam vērtību?

a. `carName = 'Audi';`
b. `let carName = 'Audi';`
c. `variable carName = 'Audi';`
d. `def carName = 'Audi';`

Pareizā atbilde ir `b`. JavaScript mēs definējam mainīgos ar `let` vai `const` atslēgvārdu, tam seko nosaukums, vienādības zīme un mainīgā vērtība. Rindu beidzam ar semikolu.

### Kāpēc `a` un `d` nav pareizi?

Tie izskatās pēc definīcijām `Python` valodā.
- `a` ir līdzīgs mainīgā definīcijai, vienīgi, `Python` mēs nebeidam rindu ar semikolu.

```python
carName = 'Audi'
```

- `d` ir līdzīgs funkcijas definīcijai `Python`, jo tiek izmantots atslēgvārds `def`. JS gan tas neko nenozīmē.

```python
def carName():
    pass
```

### Kāpēc `c` nav pareizs?

JavaScript nav tāda atslēgvārda `variable`. Līdz ar to šī izteiksme ir vienkārši nepareiza.


## Pareizs koda fragments ar skaidrojumiem:


```html
<html>
    <body>
        <p>Hello</p>

        <script>
            //              0,        1      2
            let colors = ['black', 'blue', 'red'];
            // Mēs definējam mainīgo JS ar `let`
            let i = 0;

            // `i++` ir tas pats, kas `i = i + 1`
            while (colors[i]) {  // i = 3; colors[i] = undefined
                if (colors[i] == 'blue') {
                    console.log('My favorite color is', colors[i]);
                }
                i++; // i = 3
            }
        </script>
    </body>
</html>
```