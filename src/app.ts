import mongodb from 'mongodb'
const MongoClient = mongodb.MongoClient

// .github/workflowsで定義した28001ポートを介し、
// dockerで起動したmongodbのadminテーブルへ接続する
MongoClient.connect('mongodb://127.0.0.1:28001/admin', (err, db) => {
    if (err === null) {
      console.log("Connected successfully to mongo server")
    } else {
      console.log("Connection failure to mongo server", err)
    }

    db.close()
})
