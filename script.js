//Chiedi all’utente/essa il suo nome, poi chiedi il suo cognome, poi chiedi il suo colore preferito. Infine scrivi sulla pagina: <nomecognomecolorepreferito24>

//Chiede all'utente nome, cognome, colore preferito, e dichiarazione della variabile costante 24
const nomeUtente = prompt("type your name");
const cognomeUtente = prompt ("type your surname");
const colorPrefe= prompt("colore preferito?");
const numeroSicurissimo = 24; 


//Stampare in pagina:
document.getElementById("output").innerHTML = nomeUtente + cognomeUtente + colorPrefe + numeroSicurissimo;