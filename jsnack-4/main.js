const userName = prompt('inserisci il tuo nome');
const invitedList = ['massimo', 'giuseppe', 'luigi', 'andrea', 'domenico' , 'ida', 'veronica', 'pietro'];

let invited = false;

for (let i = 0; i < invitedList.length; i++) {
if (userName.toLowerCase() == invitedList[i].toLowerCase()){
invited = true;
};
    
}

if (invited) {
alert('puoi entrare');
}else {
alert('non sei stato invitato');
}