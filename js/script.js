// DATI

const email = ["lorenzo@gmail.com" , "giovanni@gmail.com" , "liberato@gmail.com"];
const emailUser = prompt("Digita qui la tua e-mail:");

// ESECUZIONE
let emailSearch = false;

for (let i = 0; i < email.lenght; i++) {

    
    if ( email[i] === emailUser) {
    emailSearch = true
    }
 };
 if (emailSearch === true ) {
    console.log("Acceso consentito!")

 } else {
    console.log("Accesso negato, riprovare.")
 };