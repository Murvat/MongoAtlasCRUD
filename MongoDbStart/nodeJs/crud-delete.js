const { MongoClient } = require("mongodb");
const config =require('./config')
// Replace the uri string with your MongoDB deployment's connection string.

const client = new MongoClient(config.uri);

async function run() {
  try {
    await client.connect();
      // database and collection code goes here
const db = client.db("sample_guides");
const coll = db.collection("comets");

      // delete code goes here
const doc = {
  orbitalPeriod: {
    $gt: 5,
    $lt: 85
  }
};

const result = await coll.deleteMany(doc);

      // amount deleted code goes here
console.log("Number of documents deleted: " + result.deletedCount);

  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
