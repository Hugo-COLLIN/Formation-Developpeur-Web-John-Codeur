var x = 12;
console.log(x);

var y;
y = 8;
console.log(y);

var addition = x + y;
console.log(addition);

var soustraction = x - y;
console.log(soustraction);

var multiplication = x * y;
console.log(multiplication);

var division = x / y;
console.log(division);

var modulo = x % y;
console.log(modulo);


x += y;
console.log(x);

x -= y;
console.log(x);

x *= y;
console.log(x);

x /= y;
console.log(x);

x %= y;
console.log(x);


x ++;
console.log(x);

x --;
console.log(x);

++ x;
console.log(x);

-- x;
console.log(x);

var res1 = x ++; // Mets le contenu de x dans res1, puis ajoute 1 à x
console.log(res1 + "\t" + x);

var res2 = ++ x; // Ajoute 1 à x, puis mets le contenu de x dans res2
console.log(res2 + "\t" + x);


str1 = "Bonjour";
str2 = "Hugo";
str3 = str1 + " " + str2;
console.log(str3);

str3 += " " + y;
console.log(str3);