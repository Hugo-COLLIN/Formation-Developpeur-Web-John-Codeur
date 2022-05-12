var bool1 = false;
console.log(bool1); //false

console.log("------------------------------")

var x = 5;
var y = 14;

var res1 = x === 5;
console.log(res1); //true

var res2 = x !== 5;
console.log(res2); //false

var res3 = x === "5";
console.log(res3); //false

var res4 = x == "5";
console.log(res4); //true

var res5 = x != "5";
console.log(res5); //false

console.log("------------------------------")

var res6 = x > 5;
console.log(res6); //false

var res7 = x < 10;
console.log(res7); //true

var res8 = x >= 2;
console.log(res8); //true

var res9 = x <= 5;
console.log(res9); //true

console.log("------------------------------")

var res10 = (x > 1 && y < 15);
console.log(res10); //true

//           false     true
var res10 = (x > 8 || y < 15);
console.log(res10); //true

console.log("------------------------------")

console.log("Tableau de comparaison :")
console.log(true && true); //true
console.log(true && false); //false
console.log(false && true); //false
console.log(false && false); //false
console.log("-----")
console.log(true || true); //true
console.log(true || false); //true
console.log(false || true); //true
console.log(false || false); //false
console.log("-----")
console.log(!true); //false
console.log(!false); //true

console.log("------------------------------")