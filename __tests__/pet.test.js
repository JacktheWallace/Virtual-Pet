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
            expect(pet.fitness).toEqual(100)
        })
        it('decreases pet fitness when it ages', () => {
            const pet = new Pet('Fido')
            pet.growUp()
            expect(pet.fitness).toEqual(75)
        });
    });
});

describe('walking the pet', () => {
    it('increases the pets fitness', () => {
        const pet = new Pet('Fido')
        pet.growUp()
        pet.walk()
        expect(pet.fitness).toEqual(100)
    });
    it('does not allow the pets fitness to go above 100', () => {
        const pet = new Pet('Fido')
        pet.walk()
        expect(pet.fitness).toEqual(100)
    });

});