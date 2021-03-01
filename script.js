let sveikiInput = document.querySelector('#sveiki-input');
let sveikiPoga = document.querySelector('#sveiki-poga');

console.log('input value:', sveikiInput.value);
console.log('poga', sveikiPoga);

function sveicinat(vards) {
    return 'Sveicināts, ' + vards + '!'; // Sveiki, Reinis!
}

sveikiPoga.addEventListener('click', function() {
    let sveiciens = sveicinat(sveikiInput.value);
    alert(sveiciens);
});


