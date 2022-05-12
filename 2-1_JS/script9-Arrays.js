//Array
var liste = [3, true, "Orange", 'Caradec', 63.5];
console.log(liste);

for (var i = 0 ; i <= 5 ; i ++)
{
    console.log(liste[i]);
}

liste.push("Kiwi"); //Ajout d'élément en fin de l'iste
console.log(liste);

liste.pop(); //Suppression de l'élément de fin de liste
console.log(liste);

var chaines = liste.slice(2,4); // retourne une sous-liste entre l'élément d'indice 0 inclus et 2 exclus
console.log(chaines);


//Imbrication d'arrays
var imbricArray = [[0,1], [7, 10, 5], [3, -16]];
console.log(imbricArray[1][2]);

console.log("Parcours d'arrays imbriqués :");
for (var i = 0 ; i < imbricArray.length ; i ++)
{
    for (var j = 0 ; j < imbricArray[i].length ; j ++)
    {
        console.log(imbricArray[i][j]);
    }
}