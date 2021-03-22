let sveikiInput = document.querySelector('#sveiki-input');
let sveikiPoga = document.querySelector('#sveiki-poga');
let sveikiIzvade = document.querySelector('#sveiki-izvade');

console.log('input value:', sveikiInput.value);
console.log('poga', sveikiPoga);
console.log('izvade', sveikiIzvade);

function sveicinat(vards) {
    return 'Čau, ' + vards + '!'; // Čau, Reinis!
}

// Reaģējam uz klikšķi
sveikiPoga.addEventListener('click', function() {
    if (sveikiInput.value) {
        let sveiciens = sveicinat(sveikiInput.value);
        sveikiIzvade.innerText = sveiciens;
    } else {
        alert('Lūdzu ievadi vērtību!');
    }
});
