var n = 0;

console.log("While :");
while (n < 3) //Vérifie la condition avant d'exécuter la boucle
{
    console.log(n);
    n ++;
}

console.log("Do-while :");
do //Fait 1 premier tour de boucle quoi qu'il arrive
{
    console.log(n);
    n ++;
}
while (n < 3);


console.log("1er for :");
for (var i = 0 ; i < 5 ; i += 0.5)
{
    console.log(i);
}

console.log("2ème for :");
var i;
for (i = 6 ; i > 0 ; i --)
{
    console.log(i);
}