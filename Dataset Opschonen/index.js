const data = require('./data.json');

let futureCar = [];

for (let i = 0; i < data.length; i++) {
    futureCar.push(data[i]['future-car-brand']);
    futureCar[i] = futureCar[i]
        .charAt(0)
        .toUpperCase() + futureCar[i]
        .substring(1)
        .toLowerCase()

    futureCar[i] = futureCar[i]
        .replace(' cybertruck', '')
        .replace('Delorean dmc-12', 'Delorean')
        .replace('Alfa romeo', 'Alfa Romeo')
        .replace('Aston martin', 'Aston Martin')
}

console.log(futureCar)

let validCarBrand = ['Audi', 'Mercedes', 'Acura', 'Jeep', 'Toyota',  'Alfa Romeo', 'Volkswagen', 'Tesla', 'Tesla ', 'Bmw', 'Aston Martin', 'Nio', 'Dacia', 'Lada', 'Fiat', 'Mazda', 'Polestar', 'Delorean', 'Daihatsu'];
let validAnswers = [];

futureCar.forEach((futureCars) => {
    if (validCarBrand.includes(futureCars)){
        validAnswers.push(futureCars)
    } 

});

console.log(validAnswers)

var sum = {};

validAnswers.forEach((i) => { sum[i] = (sum[i]|0) + 1;
    validAnswers.sort(function(a, b){
        if(a < b) { return -1;}
        if(a > b) { return 1;}
    })
});

console.log(sum);



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








