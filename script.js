let sveikiInput = document.querySelector('#sveiki-input');
console.log('sveiki input', sveikiInput);

let sveikiPoga = document.querySelector('#sveiki-poga');
console.log('poga', sveikiPoga);

// Funkcijas definīcija
function sveicinat(vards) {
    return 'Čau, ' + vards + '!';
}

// Ierindas funkcija - inline function
sveikiPoga.addEventListener('click', function() {
    let vards = sveikiInput.value;
    let sveiciens = sveicinat(vards);
    console.log(sveiciens);
});