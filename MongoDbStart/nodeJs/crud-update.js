const { MongoClient } = require("mongodb");
const config =require('./config')
// Replace the uri string with your MongoDB deployment's connection string.

const client = new MongoClient(config.uri);

async function run() {
  try {
      await client.connect();
      // database and collection code goes here
      // database and collection code goes here
const db = client.db("sample_guides");
const coll = db.collection("comets");

      // update code goes here
      // update code goes here
const filter = { };
const updateDoc = {
  $mul: {
      radius: 1.60934
  }
};

const result = await coll.updateMany(filter, updateDoc);
      console.log(result.modifiedCount)
      
      const cursor = coll.find();
      for await (comet of cursor) {
          console.log(`Radius for comet ${comet.name} is ${comet.radius}`)
      } 
    // amount deleted code goes here
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
