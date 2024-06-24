// Demande le nom et l'age de l'utilisateur/
let nom= prompt("Quel est votre nom")
let sex= prompt("Quel est votre sex")

// 
if (sex.toUpperCase === "F") {
    alert("Bonjour madame " + nom )
}else if (sex.toLocaleUpperCase === "M") {
    alert("Bonjour monsieur" + nom)
}
