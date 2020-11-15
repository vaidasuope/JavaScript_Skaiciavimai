'use strict';//del klaidu ji uzsirasom

var vardas="Jonas";//
let alga=1200;
//const viena karta sukuriama reiksme, neleidzia perrasyti, taip pat kaip ir let
const title="senas"

// funkcijos sukurimas
function pasisveikinimas (a){
    console.log ("Labas "+a);
}

//funkcijos iskvietimas
pasisveikinimas (vardas);

//funkcijos sukurimas
function metinesPajamos (x){
    console.log(x*12);
}

//funkcijos iskvietimas
metinesPajamos (alga);


//globalus kintamasis name
let name="Vaida";

function printName (){
    console.log(name);
}
printName();

//lokalus kintamasis
function printName (){
    let name="Vaida";
    console.log (name);
}
printName();

var vardas="Simas ";
console.log(vardas+title);

function testas(){
    var kint=20;
    return kint;
}
console.log(testas());

function testas(){
    var kint=20;
    return kint;
}
testas()
var kint=50;
console.log(kint);

//save iskviecianti fukcija kas yra?


function pelnas (a,b){
    return a-b;
}
let pajamos=100;
let islaidos=59;
console.log("uzdirbote pajamu "+pelnas(pajamos,islaidos));


let vardas3="Vaida";
function sveikinimas (vardas3){
    return vardas3+" , sveiki prisijunge!";
}

console.log(sveikinimas(vardas3));

//Pitagoro teorema - funkcija skaiciuoja ilgaja krastine
let a=5;
let b=6;
function ilgojiKrastine(a,b){
    return Math.sqrt(a*a+b*b);
}
console.log(ilgojiKrastine(a,b));

let kaina=2;
function kainosSpausdinimas (kaina){
    return kaina;
}
while (kaina<10) {
    console.log(kainosSpausdinimas(kaina));
    kaina++;
}