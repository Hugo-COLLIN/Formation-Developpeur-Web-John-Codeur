//CREATION D'UN OBJET D'UN COUP
/*
var object = {
    propertyName1: propertyValue1,
    propName2: propValue2,
    method1: function ()
    {
        //Contenu de la fonction
    }
};
 */

var cat =
    {
        name: "Minou",
        color: "black",
        age:8
    };

console.log(cat.age)
console.log(cat.name);
console.log(cat["name"]);

console.log("--- For: ---");

for (var propertyName in cat)
{
    console.log(cat[propertyName]);
}

//CREATION D'UN OBJET AVEC LE CONSTRUCTEUR DE OBJECT
var dog = new Object();
var dog2 = {};

dog.name = "Choupette";
dog.age = 2;

dog2.name = "Furie";
dog2.age = 5;


//METHODES
console.log("--- Méthodes: ---");

dog.aboie = function (n) {
    while (n > 0)
    {
        console.log("Ouaf " + n);
        n --;
    }
}

dog.aboie(4); //Appel de la méthode