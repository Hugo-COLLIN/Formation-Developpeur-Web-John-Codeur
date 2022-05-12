//Types de variables
var str1 = 'Chaine de caractère';
console.log(str1);

var str2 = "Chaine de caractère 2";
console.log(str2);

var int = 7;
console.log(int);

var float = 4.01;
console.log(float);


//Fonctions sur les chaines de caractère
var floatToStr = float.toString();
console.log(floatToStr);

var strLength = str1.length;
console.log(strLength);

var str3 = "15";
var strToInt = parseInt(str3);
console.log(strToInt);

strFloatToInt = parseInt(floatToStr);
console.log(strFloatToInt); //perte de précision

strToFloat = parseFloat(floatToStr);
console.log(strToFloat);

var pos = str1.indexOf("caractère");
console.log(pos);

var strReplace = str2.replace("caractère", "télévision");
console.log(strReplace);
console.log(str2);

var strConcat = str1 + " " + str3;
console.log(strConcat);