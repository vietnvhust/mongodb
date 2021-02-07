const mocha = require('mocha')
const assert = require('assert')
const PersonChar = require('./../models/personchar')
// Describe test
describe('Delete document', () => {
    // Saving record
    var character;
    beforeEach(done=>{
        character = new PersonChar({
            name: 'Linh',
            height: 1.68,
            weight: 67
        })
        character.save().then(()=>{
            assert(character.isNew === false);
            done();
        })
    })
    // Create Test
    it('Delete document', (done) => {
        PersonChar.findOneAndRemove({name:'Linh'}).then(()=>{
            PersonChar.findOne({name:'Linh'}).then(result=>{
                assert(result===null)
                done();
            })
        })
    })
})