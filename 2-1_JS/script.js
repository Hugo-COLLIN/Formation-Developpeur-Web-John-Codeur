function Cat(nameP, colorP, ageP) {
    this.name = nameP;
    this.color = colorP;
    this.age = ageP;

    this.miaule = function (n = 2) { //Valeur du paramètre prédéfinie, utilisée par défaut si pas de paramètre fourni
        while (n > 0)
        {
            console.log(n + " Miaou " + this.name);
            n --;
        }
    }
}

var monChat = new Cat("Minou", "black", 8);
console.log(monChat);

var chatDuVoisin = new Cat("Charou", "blanc-roux", 6);
console.log(chatDuVoisin);

chatDuVoisin.miaule();
console.log("--- Param: ---")
monChat.miaule(10);
