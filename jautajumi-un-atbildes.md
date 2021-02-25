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