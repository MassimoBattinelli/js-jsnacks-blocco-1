let UserNumber
let somma = 0;

for (i = 0; i < 5; i++){
    UserNumber = parseInt(prompt("Inserisci un numero:"));
    somma += UserNumber;
    console.log(somma);
}

alert('La somma è:' + somma);