import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import route from "./routes/BookRoute.js";
import {MongoClient} from "mongodb"
import cors from "cors"
const app = express();

dotenv.config();
const PORT=process.env.PORT||5000;
const MONGO_URL=process.env.MONGO_URL;


app.use(cors());
app.use(bodyParser.json());
app.use(express.json()); 


const client = new MongoClient(MONGO_URL);

const dbName = 'test';
const collectionName = 'books';

app.get('/api/search', async (req, res) => {
  const query = req.query.q;
  try {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    const results = await collection.aggregate([
      {
        $search: {
          index: 'default',
          text: {
            query,
            path: ['title'], 
          },
        },
      },
      { $limit: 10 },
    ]).toArray();

    return res.json(results);
  } catch (err) {
    console.error(err);
    return res.status(500).send('Search failed');
  }
});


mongoose.connect(MONGO_URL)
.then(()=>{
    console.log("Database connected")
    app.listen(PORT,()=>{
        console.log(`server running at port ${PORT}`)
    })
})
.catch((error)=>console.log(error));


app.use("/api",route)
