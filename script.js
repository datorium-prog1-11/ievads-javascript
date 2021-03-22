let sveikiInput = document.querySelector('#sveiki-input');
console.log('sveiki input', sveikiInput);

let sveikiPoga = document.querySelector('#sveiki-poga');
console.log('poga', sveikiPoga);

let sveikiIzvade = document.querySelector('#sveiki-izvade');
console.log(sveikiIzvade);

// Funkcijas definīcija
function sveicinat(vards) {
    return 'Čau, ' + vards + '!';
}

// Ierindas funkcija - inline function
sveikiPoga.addEventListener('click', function() {
    let vards = sveikiInput.value;

    if (vards) {
        let sveiciens = sveicinat(vards);
        sveikiIzvade.innerText = sveiciens;
    } else {
        alert('Lūdzu ievadi vērtību!');
    }
});