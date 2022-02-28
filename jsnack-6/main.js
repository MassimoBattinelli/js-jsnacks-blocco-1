let userNumber = prompt('inserisci un numero a quattro cifre');
while (userNumber.length != 4) {
    alert('questo numero non ha quattro cifre');
    userNumber = prompt('inserisci un numero a quattro cifre');
}
let somma = 0;
for (let i = 0; i < userNumber.length; i++) {
    somma += parseInt(userNumber[i]);
}
alert(`la somma delle cifre e': ${somma}`);