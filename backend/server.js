import express from 'express'
import dotnev from 'dotenv'
import connectDB from './config/mongodb.config.js';
dotnev.config({ quiet: true });


const app = express();
const port = process.env.PORT




app.get("/", (req, res) => {
    res.send("Url shortner is working properly!")
})


app.listen(port, () => {
    connectDB();
    console.log("Server is up at the port", port);
})