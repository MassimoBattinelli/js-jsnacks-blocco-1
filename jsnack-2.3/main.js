const arrNomi = ['Massimo','Mario','Marco','Pietro','Luigi']
const arrCognomi = ['Battinelli','Casoria','Carta','Zito','Russo']

const indexRandomNome = Math.floor(Math.random() * arrNomi.lenght);
const nome = arrNomi[indexRandomNome];

const indexRandomCognome = Math.floor(Math.random() * arrCognomi.lenght);
const nome = arrCognomi[indexRandomCognome];

const nomeFinale = nome + ' ' + cognome;
console.log(nomeFinale)