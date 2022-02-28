let array = [];
let input;
for(let i = 0; i < 6; i++){
    input = parseInt(prompt("Inserisci il numero "));
    if(input%2 != 0) array.push(input);
}
