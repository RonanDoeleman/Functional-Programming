const data = require('./data.json');

let futureCar = [];

for (let i = 0; i < data.length; i++) {
    futureCar.push(data[i]['future-car-brand']);
    futureCar[i] = futureCar[i]
    // Hier heb ik een array aangemaakt voor alle antwoorden van de vraag future-car-brand
        .charAt(0)
        .toUpperCase() + futureCar[i]
        .substring(1)
        .toLowerCase()
    // Eerst heb ik met .charAt alle eerste letters hoofdletters gemaakt. Omdat dit dan een kopie wordt
    // van de eerste letter die was ingevuld heb ik met substring(1) het tweede karakter verwijderd. vervolgens
    // heb ik met .toLowerCase alle andere letters klein gemaakt.

    futureCar[i] = futureCar[i]
        .replace(' cybertruck', '')
        .replace('Delorean dmc-12', 'Delorean')
        .replace('Alfa romeo', 'Alfa Romeo')
        .replace('Aston martin', 'Aston Martin')
    // Omdat een aantal antwoorden meer dan alleen het merk bevatte, heb ik deze verwijderd met .replace, Ook
    // waren er twee merken die bestonden uit twee losse strings, deze heb ik camelcase gemaakt
}

console.log(futureCar)

let validCarBrand = ['Audi', 'Mercedes', 'Acura', 'Jeep', 'Toyota',  'Alfa Romeo', 'Volkswagen', 'Tesla', 'Tesla ', 'Bmw', 'Aston Martin', 'Nio', 'Dacia', 'Lada', 'Fiat', 'Mazda', 'Polestar', 'Delorean', 'Daihatsu'];
let validAnswers = [];
// Een aantal mensen hadden weet ik niet ingevuld of iets anders dan een merknaam. Vervolgens heb ik met een nieuwe
// array genaamd validCarBrand alleen juiste termen gemaakt en deze in een nieuwe array validAnswers geplaatst.

futureCar.forEach((futureCars) => {
    if (validCarBrand.includes(futureCars)){
        validAnswers.push(futureCars)
    } 
});
// Als een merknaam niet gelijk is aan validCarBrand wordt hij nu niet meer gedisplayed. De merknamen die wel
// hieraan gelijk zijn worden in de nieuwe array validAnswers geplaatst.

console.log(validAnswers)


var sum = {};

validAnswers.forEach((i) => { sum[i] = (sum[i]|0) + 1;
    validAnswers.sort(function(a, b){
        if(a < b) { return -1;}
        if(a > b) { return 1;}
    })
});
// Hier heb ik alle antwoorden die meer dan 1 keer voorkwamen bij elkaar opgeteld, zo zie je welke merknamen 
// het meeste voorkomen.

console.log(sum);








// Notities:


// const carBrands = [];
// let sum = 0;

// for (let i = 0; i < carBrands.length; i++) {
//     sum += carBrands[i];
// }

// console.log(sum)


// console.log(futureCar);

// let changeName = ['']


// let huisDier = [];

// for (let i = 0; i < data.length; i++) {
//     huisDier.push(data[i]['favourite-pet']);
//     huisDier[i] = huisDier[i]
//         .charAt(0)
//         .toUpperCase() + huisDier[i]
//         .substring(1)
// }

// console.log(huisDier);


// const hoofdletter = ['future-car-brand'];

// const hoofdletter1 = hoofdletter.charAt(0).toUpperCase() + hoofdletter.slice(1);
// console.log(data)








