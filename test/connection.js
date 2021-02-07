const mongoose = require('mongoose')
// ES6 Promise
mongoose.Promise = global.Promise
before(done=>{
    // Connect to mongodb
    mongoose.connect('mongodb://localhost/testdb')
    mongoose.connection.once('open', function(){
        console.log("Connection success!");
        done();
    }).on('error', function(error){
        console.log(`Connection false: ${error}`);
    })
})

beforeEach(done=>{
    mongoose.connection.collections.personchars.drop(()=>{
        done();
    })
})