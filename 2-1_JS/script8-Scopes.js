function mult (n1, n2, n3)
{
    var resMult = n1*n2*n3;
    varGlobale = resMult; //2. Déclarer une variable sans var ou avec let permet de la rendre globale => Pas conseillé

    return resMult;
}

var a = 2;
var b = 3;

var res = mult(a, b, a);
console.log(res);
console.log(varGlobale); //2. La variable locale est connue de tout le programme
console.log(resMult); //1. Erreur => Une variable n'est pas connue en dehors de la boucle dans laquelle elle a été créée

