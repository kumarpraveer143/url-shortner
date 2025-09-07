import mongoose from 'mongoose'

function connectDB() {
    mongoose.connect("mongodb://127.0.0.1:27017/test").then(() => {
        console.log("MongoDB is connected successfully!")
    }).catch((err) => {
        console.log("Something went wrong with DB ", err)
    })
}

export default connectDB;