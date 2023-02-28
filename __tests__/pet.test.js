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