// DATI

const email = ["lorenzo@gmail.com", "giovanni@gmail.com", "liberato@gmail.com"];
const emailUser = prompt("Digita qui la tua e-mail:");

// ESECUZIONE
let emailSearch = false;

for (let i = 0; i < email.length; i++) {


   if (email[i] === emailUser) {
      emailSearch = true

   }

};
console.log(emailSearch)
if (emailSearch === true) {
   console.log("Acceso consentito!")

} else {
   console.log("Accesso negato, riprovare.")
};