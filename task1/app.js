'use strict'

let str = prompt('Введіть рядок');

let symvol = prompt('Введіть символ');

// цикл while

const whileCycle = function(str, symvol) {

let v = 0;
let whileRez = 0;

while(v < str.length) {
    if(str[v] == symvol[0]) {
        whileRez += 1; 
    }

    v++;
}

if(whileRez == 0) {
    console.log(`Введений символ не знайдено`);
} else if(whileRez == 1) {
    console.log(`Введений символ зустрічається ${whileRez} раз`);
} else if(whileRez > 1 && whileRez < 5) {
    console.log(`Введений символ зустрічається ${whileRez} рази`);
} else {
    console.log(`Введений символ зустрічається ${whileRez} разів`);
}

}

whileCycle(str, symvol);

// цикл for

const forCycle = (str, symvol) => {

let forRez = 0;

for(let i = 0;i < str.length; i++) {
    if(str[i] == symvol[0]) {
        forRez += 1;
    }
}

if(forRez == 0) {
    console.log(`Введений символ не знайдено`);
} else if(forRez == 1) {
    console.log(`Введений символ зустрічається ${forRez} раз`);
} else if(forRez > 1 && forRez < 5) {
    console.log(`Введений символ зустрічається ${forRez} рази`);
} else {
    console.log(`Введений символ зустрічається ${forRez} разів`);
}

}

forCycle(str, symvol);

// рекурсія

let recRez = 0;
const recursion = function(a, b, t = 0) {
    
    if(t < str.length) {
        if(str[t] == symvol[0]) {
            recRez += 1;
            t += 1;
        }
        recursion(str, symvol, t + 1);  
    }
    return recRez;
}

const rez = recursion(str, symvol);

if(rez == 0) {
    console.log(`Введений символ не знайдено`);
} else if(rez == 1) {
    console.log(`Введений символ зустрічається ${rez} раз`);
} else if(rez > 1 && rez < 5) {
    console.log(`Введений символ зустрічається ${rez} рази`);
} else {
    console.log(`Введений символ зустрічається ${rez} разів`);
}

// якийсь, рядок, який, потрібно, перевірити, на, наявність, певного,символу,.