const Pet = require('../src/pet');

describe('constructor', () => {
    it('returns an object', () => {
        expect( new Pet('Fido')).toBeInstanceOf(Object);
    });
});

describe('pet naming', () => {
    it('sets the name property of a pet', () => {
        const pet = new Pet('Fido')

        expect(pet.name).toEqual('Fido');
    });
});

describe('pet aging', () => {
    it('returns a new pets initial age as 0', () => {
        const pet = new Pet('Fido')

        expect(pet.age).toEqual(0);
    });
    it('incriments the pets age by 1 when growUp() is run', () => {
        const pet = new Pet('Fido')
        pet.growUp()
        expect(pet.age).toEqual(1);
    });

    describe('the effects of aging', () => {
        it('shows the pet has a initial hunger', () => {
            const pet = new Pet('Fido')
            expect(pet.hunger).toEqual(0)
        })
        it('increases the pets hunger when it ages', () => {
            const pet = new Pet('Fido')
            pet.growUp()
            expect(pet.hunger).toEqual(5)
        })
        it('shows the pet has an initial fitness', () => {
            const pet = new Pet('Fido')
            expect(pet.fitness).toEqual(10)
        })
        it('decreases pet fitness when it ages', () => {
            const pet = new Pet('Fido')
            pet.growUp()
            expect(pet.fitness).toEqual(7)
        });
    });
});

describe('walking the pet', () => {
    it('increases the pets fitness', () => {
        const pet = new Pet('Fido')
        pet.fitness = 6
        pet.walk();
        expect(pet.fitness).toEqual(10)
    });
    it('does not allow the pets fitness to go above 100', () => {
        const pet = new Pet('Fido')
        pet.fitness = 9;
        pet.walk();
        expect(pet.fitness).toEqual(10)
    });

});

describe('feeding the pet', () => {
    it('reduces the pets hunger', () => {
        const pet = new Pet('Fido')
        pet.hunger = 5;
        pet.feed();
        expect(pet.hunger).toEqual(0)
    });
    it('does not allow the pets hunger to become less than 0', () => {
        const pet = new Pet('Fido')
        pet.hunger = 2;
        pet.feed();
        expect(pet.hunger).toEqual(0)
    });
});

describe('checkup', () => {
    it('returns I am hungry when hunger is over 10', () => {
        const pet = new Pet('Fido')
        pet.hunger = 15;
        expect(pet.checkUp()).toEqual('I am hungry')
    });
    it('it returns I need a walk when fitness is bellow 6', () => {
        const pet = new Pet('Fido');
        pet.fitness = 3;
        expect(pet.checkUp()).toEqual('I need a walk')
    });
    it('returns I am hungy and I need a walk, when both of the above are true', () => {
        const pet = new Pet('Fido');
        pet.fitness = 3;
        pet.hunger = 15;
        expect(pet.checkup()).toEqual('I am hungry and I need a walk')
    });
    it('returns all is well when the pets hunger and fitness are high', () => {
        const pet = new Pet('Fido');
        expect(pet.checkUp()).toEqual('All is well')
    });
    });