class MilkCoffee {
    constructor(coffee) {
        this.coffee = coffee;
    }

    getCost() {
        return this.coffee.getCost() + 2;
    }

    getDescription() {
        return this.coffee.getDescription() + ', milk';
    }
}

class WhipCoffee {
    constructor(coffee) {
        this.coffee = coffee;
    }

    getCost() {
        return this.coffee.getCost() + 5;
    }

    getDescription() {
        return this.coffee.getDescription() + ', whip';
    }
}

class VanillaCoffee {
    constructor(coffee) {
        this.coffee = coffee;
    }

    getCost() {
        return this.coffee.getCost() + 3;
    }

    getDescription() {
        return this.coffee.getDescription() + ', vanilla';
    }
}

module.exports = { MilkCoffee, VanillaCoffee, WhipCoffee };
