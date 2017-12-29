import Animal from "./Animal";
import { log } from "../logger/index";

log

export default class Dog extends Animal {
    constructor(name, age, breed) {
        super(name, age);
        this.breed = breed;
    }

    logBreed() {
        log(`${this.name} is a ${this.breed}`)
    }

    logAgeFromDog() {
        super.logAge();
    }
}