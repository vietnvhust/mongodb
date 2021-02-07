const mocha = require('mocha')
const assert = require('assert')
const PersonChar = require('./../models/personchar')
// Describe test
describe('Search document', () => {
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
    it('Search document', (done) => {
        PersonChar.findOne({name: 'Linh'}).then(result=>{
            assert(result.name==='Linh');
            done();
        })
    })
    it('Search document by _id', done=>{
        PersonChar.findOne({_id:character._id}).then(dataResult=>{
            assert(dataResult._id.toString() === character._id.toString())
            done()
        })
    })
})