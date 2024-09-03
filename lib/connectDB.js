import { MongoClient, ServerApiVersion } from 'mongodb';

// let db;

const connectDB = async () => {
  // if (db) return db;
  try {
    const uri = process.env.NEXT_PUBLIC_MONGO_URI;
    const client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    });
    let db = client.db('next-crashDB');
    console.log('mongo connected');
    return db;
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
