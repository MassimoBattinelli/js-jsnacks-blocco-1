const prima = prompt("dammi una parola")
const seconda = prompt ("dammi una seconda parola")
const risultato = document.querySelector ('.parola');

if (prima.length > seconda.length) {
    risultato.innerHTML = prima + ' ' + seconda
} else if (prima.length < seconda.length) {
    risultato.innerHTML = seconda + ' ' + prima
} else {
    risultato.innerHTML = 'hanno la stessa lunghezza'
}