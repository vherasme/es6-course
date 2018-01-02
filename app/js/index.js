/* styling */
require('styles/main.scss');
/* js */
import $ from 'jquery';
import { log, logTitle } from 'logger';
/* your imports */
import { add, subtract, multiply, division } from './modules/Math'; /* import * from './modules/Math'; */
import Animal from './modules/Animal';
import Dog from './modules/dog';

logTitle('Title');
/* coding examples */

log("Add function: " + add(4, 5));
log("Divide function: " + division(9, 8));

var animal = new Animal('Chip', 10);

log("\n Template literals: ");
animal.logAge();

log("Spread operator arrays: ");

const arrayOne = ['maria', 'josefa', 'juana'];
const arrayTwo = ['pedro', 'luis', 'jose'];

const concatArray = [...arrayOne, ...arrayTwo];

concatArray.forEach(function (name) {
    log(name);
});

const addNumbers = function (x, y, z) {
    return x + y + z;
}

const numbers = [1, 2, 3];

const addition = addNumbers(...numbers);

log(`Spread operator addition: ${addition}`);

const address = {
    city: 'LA',
    country: 'USA',
    postCode: '33166'
};

const name = {
    firstName: 'Andy',
    lastName: 'Jones'
};

const person = { ...address, ...name };

log('Spread operator with objects: ');
log(JSON.stringify(person, null, 2));

const hello = () => {
    const es6 = 'ES6';
    return `Hello ${es6}`;
};

const powers = [1, 2, 3, 4, 5].map((number, index) => Math.pow(number, index));

const milesToKm = miles => miles * 1.60934;

const man = {
    name: 'Alex',
    cars: ['Toyota', 'Honda'],
    toString: function () {
        log(`${this.name} has ${this.cars}`)
    }
}

man.toString();

log('Enhanced object properties: ');

const calculator = name => {
    return {
        name: name
    }
}

const names = ['Anna', 'Mariam', 'Joe', 'Mark', 'Matt'];
const anna = names[0];
const mariam = names[1];
const joe = names[2];

log(`${anna} ${mariam} ${joe}`);


const bobby = new Dog('bobby', 3, 'Golden');

bobby.logBreed();
bobby.logAgeFromDog();

log('\n Promises: ');

const firstNamePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(["Juan", "Pedro", "Lucas"]);
    }, 3000);

    setTimeout(() => {
        reject("No data back from the server, there was an error");
    }, 4000);

});

const lastNamePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(["Perez", "Rojas", "Luna"]);
    }, 3000);

    setTimeout(() => {
        reject("No data back from the server, there was an error");
    }, 5000);

});

Promise.all([firstNamePromise, lastNamePromise]).then(data => {
    const [names, surnames] = data;
    for (let index = 0; index < names.length; index++) {
        const name = names[index];
        const surname = surnames[index];
        log(`${name} ${surname}`)
    }
}).catch(error =>{
    log(error);
});

const getRandomUsers = n => {
    const fetchRandomUsers = fetch();
}