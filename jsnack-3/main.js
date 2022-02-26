let arrNum = [];

for (i = 0; i < 10; i++) {
    let userNum = parseInt (prompt("Inserisci un numero"));
    arrNum.push(userNum);
}
console.log(arrNum);

let somma = 0;
for (i=0; i< arrNum.length; i++) {
    somma=somma + arrNum[i];
} 
alert (somma);