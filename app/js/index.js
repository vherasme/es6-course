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
log("Template literals: ");
log(`${animal.getName()} is ${animal.getAge()} years old`)