/*
FONCTIONS - PRÉPA 4 : Date valide - version 2
Écrire un programme JS qui teste si une date entrée par l'utilisateur est une date valide ou pas
- Déclarez deux fonctions :
  - isBissextile retourne true ou false selon que l'année est bissextile ou pas
  - isValid retourne true ou false selon que la date est valide ou pas
- Utilisez isBissextile dans isValid pour gérer le cas du mois de février
- Utilisez isValid pour décider si votre date est valide
  avant d'afficher votre message dans la console
*/

// Fonction pour vérifier si une année est bissextile



// Fonction pour vérifier si une date est valide

function isValid (day, month, year) {
    const maxDay = 31
    if (day && month && year) {
        if (day > 0 && month > 0 && year > 0) {
            if (month <= 12){
                if (day <= maxDay) {
                    console.log(`La date ${day}/${month}/${year} est valide`)
                } else {
                    console.log(`Le jour doit être inférieur ou égal à ${maxDay}`)
                }
            } else {
                console.log("Le mois doit être inférieur à 12")
            }
        } else {
            console.log("Entrez un nombre positif");
        }
    } else {
        console.log("Entrez un nombre");
    }
}
isValid(prompt("Entrez le jour"), prompt("Entrez le mois"), prompt("Entrez l'année"))
// Demander à l'utilisateur de saisir une date


// Utilisation de la fonction isValid pour vérifier la date

