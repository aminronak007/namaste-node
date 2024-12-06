const { MongoClient } = require("mongodb");

const url =
  "mongodb+srv://admin-ronak:Ar%4025046913@cluster0.ip1tf.mongodb.net";
const client = new MongoClient(url);

const dbName = "namaste-node";

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  const collection = db.collection("user");

  const data = {
    firstName: "Deepika",
    lastName: "Padukone",
    city: "Mumbai",
    country: "India",
    phoneNumber: 7878787878,
  };

  //   const insertResult = await collection.insertOne(data);
  //   console.log("insertResult", insertResult);

  const findResult = await collection.find({}).toArray();
  console.log("findResult", findResult);

  const countResult = await collection.countDocuments({});
  console.log("countResult", countResult);

  return "done.";
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
