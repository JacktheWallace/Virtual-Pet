const Pet = require('../src/pet');

describe('Constructor', () => {
    it('Returns an object', () => {
        expect( new Pet('Fido')).toBeInstanceOf(Object);
    });
});

describe('Pet naming', () => {
    it('Sets the name property of a pet', () => {
        const pet = new Pet('Fido')

        expect(pet.name).toEqual('Fido');
    });
});

describe('Pet aging', () => {
    it('Returns a new pets initial age as 0', () => {
        const pet = new Pet('Fido')

        expect(pet.age).toEqual(0);
    });
    it('Incriments the pets age by 1 when growUp() is run', () => {
        const pet = new Pet('Fido')
        pet.growUp()
        expect(pet.age).toEqual(1);
    });

    describe('The effects of aging', () => {
        it('Shows the pet has a initial hunger', () => {
            const pet = new Pet('Fido')
            expect(pet.hunger).toEqual(0)
        })
        it('Increases the pets hunger when it ages', () => {
            const pet = new Pet('Fido')
            pet.growUp()
            expect(pet.hunger).toEqual(5)
        })
        it('Shows the pet has an initial fitness', () => {
            const pet = new Pet('Fido')
            expect(pet.fitness).toEqual(10)
        })
        it('Decreases pet fitness when it ages', () => {
            const pet = new Pet('Fido')
            pet.growUp()
            expect(pet.fitness).toEqual(7)
        });
    });
});

describe('Walking the pet', () => {
    it('Increases the pets fitness', () => {
        const pet = new Pet('Fido')
        pet.fitness = 6
        pet.walk();
        expect(pet.fitness).toEqual(10)
    });
    it('Does not allow the pets fitness to go above 100', () => {
        const pet = new Pet('Fido')
        pet.fitness = 9;
        pet.walk();
        expect(pet.fitness).toEqual(10)
    });
    it('throws an error if the pet is not alive', () => {
        const pet = new Pet('Fido')
        pet.fitness = 0
        expect(() => pet.walk()).toThrow('Your pet is no longer alive :(')

    });

});

describe('Feeding the pet', () => {
    it('Reduces the pets hunger', () => {
        const pet = new Pet('Fido')
        pet.hunger = 5;
        pet.feed();
        expect(pet.hunger).toEqual(0)
    });
    it('Does not allow the pets hunger to become less than 0', () => {
        const pet = new Pet('Fido')
        pet.hunger = 2;
        pet.feed();
        expect(pet.hunger).toEqual(0)
    });
    it('throws an error if the pet is not alive', () => {
        const pet = new Pet('Fido')
        pet.hunger = 20
        expect(() => pet.feed()).toThrow('Your pet is no longer alive :(')

    });
});

describe('Checkup', () => {
    it('Returns I am hungry when hunger is over 10', () => {
        const pet = new Pet('Fido')
        pet.hunger = 15;
        expect(pet.checkUp()).toEqual('I am hungry')
    });
    it('It returns I need a walk when fitness is bellow 5', () => {
        const pet = new Pet('Fido');
        pet.fitness = 3;
        expect(pet.checkUp()).toEqual('I need a walk')
    });
    it('Returns I am hungy and I need a walk, when both of the above are true', () => {
        const pet = new Pet('Fido');
        pet.fitness = 3;
        pet.hunger = 15;
        expect(pet.checkUp()).toEqual('I am hungry and I need a walk')
    });
    it('Returns all is well when the pets hunger and fitness are high', () => {
        const pet = new Pet('Fido');
        expect(pet.checkUp()).toEqual('All is well')
    });
    it('throws an error if the pet is not alive', () => {
        const pet = new Pet('Fido')
        pet.fitness = 0
        expect(() => pet.checkUp()).toThrow('Your pet is no longer alive :(')

    });
});

describe('Life and death', () => { 
    
it('new pets start alive', () => {
    const pet = new Pet('Fido')
    expect(pet.isAlive).toEqual(true)
    });
    it('kills the pet if its fitness is 0 or less', () => {
        const pet = new Pet('Fido')
        pet.fitness = -1;
        expect(pet.isAlive).toEqual(false)
    });
    it('kills the pet if its hunger is 20 or more', () => {
    const pet = new Pet('Fido')
        pet.hunger = 21
        expect(pet.isAlive).toEqual(false)
    });
    it('kills the pet if its age is 30 or more', () => {
        const pet = new Pet('Fido');
        pet.age = 31;
        expect(pet.isAlive).toEqual(false)
    });
});
   