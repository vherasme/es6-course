/* styling */
require('styles/main.scss');
/* js */
import $ from 'jquery';
import { log, logTitle } from 'logger';
/* your imports */
import { add, subtract, multiply, division } from './modules/Math'; /* import * from './modules/Math'; */
import Animal from './modules/Animal';

logTitle('Title');
/* coding examples */

log("Add function: " + add(4, 5));
log("Divide function: " + division(9, 8));

var animal = new Animal('Chip', 10);

log(animal.getName() + " is " + animal.getAge() + " years old");
log("\n Template literals: ");
log(`${animal.getName()} is ${animal.getAge()} years old`);

log("Spread operator arrays: ");

const arrayOne = ['maria', 'josefa', 'juana'];
const arrayTwo = ['pedro', 'luis', 'jose'];

const concatArray = [...arrayOne, ...arrayTwo];

concatArray.forEach(function(name) {
    log(name);
});

const addNumbers = function(x,y,z){
    return x + y +z;
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

const person = {...address, ...name};

log('Spread operator with objects: ');
log(JSON.stringify(person, null, 2));