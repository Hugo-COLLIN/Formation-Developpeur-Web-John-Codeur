function csl(log){console.log(log);}

////var cat = {
////    name:"Minou",
////    age:9,
////    color:"black"
////};
////
////for (prop in cat){
////    csl(cat[prop]);
////}
//
//var dog = new Object();
//dog.name="Titi";
//dog['age']=6;
//
//for (prop in dog){
//    csl(dog[prop]);
//}

function Dog (name, color, age){
    this.name=name;
    this.age=age;
    this.color=color;
}

var caniche = new Dog("Choupette","white",6);
var pitbull = new Dog("Rex","black",2);
console.log(caniche,pitbull, pitbull.color)