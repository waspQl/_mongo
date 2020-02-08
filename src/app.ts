import mongodb from 'mongodb'
const MongoClient = mongodb.MongoClient
//import assert from 'assert'

MongoClient.connect('mongodb://127.0.0.1:27017/sakutaro', (err, db) => {
    //assert.equal(null, err)
    if (err === null) {
      console.log("Connected successfully to mongo server")
    } else {
      console.log("Connection failure to mongo server", err)
    }
    db.close()
})
