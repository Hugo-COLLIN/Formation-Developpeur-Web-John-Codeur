/*
--- Condition if ---
 */

//Condition simple
if (true)
{
    console.log("On exécute ce code");
}

//Condition if-else
if (false)
{
    console.log("Bloc de code pas exécuté");
}
else if (false)
{
    console.log("Toujours pas exécuté");
}
else
{
    console.log("Code exécuté");
}

// Raccourci d'écriture pour 1 seule instruction
if (false)
    console.log("Instruction 1");
else if (true)
    console.log("Instruction 2");
else
    console.log("Instruction 3");

//Mélange
if (true)
    console.log("Instruction");
else
{
    console.log("Bloc de code")
}

//Imbrication de boucles
if (true)
    if (false)
        console.log("Instruction 1");
    else
        console.log("Instruction 2")
else
{
    console.log("Bloc de code")
}

//Exemples
var speed = 80;

if (speed < 90)
    console.log("Bonne vitesse");
else if (speed < 100)
    console.log("Ralentis un peu");
else
    console.log("Tu roules beaucoup trop vite");

if (speed < 100)
{
    if (speed < 90)
        console.log("Bonne vitesse");
    else
        console.log("Ralentis un peu");
}
else
    console.log("Tu roules beaucoup trop vite");


/*
--- switch ---
 */
var favColor = 'orange';

switch (favColor)
{
    case "vert" :
    case 'orange':
        console.log("C'est également ma couleur préférée !");
        break;
    case "bleu" :
        console.log("Pas mal");
        break;
    default:
        console.log("Ça peut aller");
        break;
}
