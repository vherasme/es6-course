import { log, logTitle } from '../logger';

export default class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getName() {
        return this.name;
    }

    logAge() {
        log(`${this.name} is ${this.age} years old`)
    }

    eat() {
        log(`${this.name} is eating`)
    }

    sleep() {
        log(`${this.name} is sleeping`)
    }

    setName(name) {
        this.name = name;
    }

    setAge(age) {
        this.age = age;
    }
}