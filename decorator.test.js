const { expect } = require('@jest/globals');
const { MilkCoffee, VanillaCoffee, WhipCoffee } = require('./decorator');
const SimpleCoffee = require('./SimpleCoffee');

let someCoffee;

test('should make a simple coffee', () => {
    someCoffee = new SimpleCoffee();
    expect(someCoffee.getCost()).toBe(10);
    expect(someCoffee.getDescription()).toBe('Simple coffee');
});

test('should make a milk coffee', () => {
    someCoffee = new MilkCoffee(someCoffee);
    expect(someCoffee.getCost()).toBe(12);
    expect(someCoffee.getDescription()).toBe('Simple coffee, milk');
});
