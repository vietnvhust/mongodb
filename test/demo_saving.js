const mocha = require('mocha')
const assert = require('assert')
const PersonChar = require('./../models/personchar')
// Describe test
describe('Describe Insert', () => {
    // Create Test
    it('Add document', (done) => {
        var character = new PersonChar({
            name: 'Chestnut',
            height: 1.68,
            weight: 67
        })
        character.save().then(()=>{
            assert(character.isNew === false);
            done();
        })
    })
})