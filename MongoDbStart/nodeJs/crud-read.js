const config = require('./config')
const { MongoClient } = require("mongodb");
// Replace the uri string with your MongoDB deployment's connection string.
const client = new MongoClient(config.uri);
async function run() {
  try {
    await client.connect();
    console.log('workkss')
    // database and collection code goes here
    // find code goes here
      // iterate code goes here
      // database and collection code goes here
const db = client.db("sample_guides");
    const coll = db.collection("planets");
    // find code goes here
// const cursor = coll.find();
// iterate code goes here
    const cursor = coll.find({
      $and: [{ orderFromSun: { $gt: 2 } }, { orderFromSun: { $lt: 5 } }]
});

await cursor.forEach(console.log);
// find code goes here


  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
