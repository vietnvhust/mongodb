const mocha = require('mocha')
const assert = require('assert')
const PersonChar = require('./../models/personchar')
// Describe test
describe('Update document', () => {
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
    // Update Test
    it('Update document', (done) => {
        PersonChar.findOneAndUpdate({name:'Linh'},{name:"Chestnut"}).then(()=>{
            PersonChar.findOne({_id:character._id}).then(result=>{
                assert(result.name==="Chestnut")
                done()
            })
        })
    })
    // Increase
    it('Increase document', (done) => {
        PersonChar.update({},{ $inc: {height: 0.02} }).then(()=>{
            PersonChar.findOne({_id:character._id}).then(result=>{
                assert(result.height===1.7)
                done()
            })
        })
    })
})