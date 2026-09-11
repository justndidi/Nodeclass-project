import mongoose from "mongoose";
import env from "./env.js";

const connectionUrl = env.DB_URL;
mongoose.set("strictQuery", true);

export default async function connectDb() {
    try{
        if(!connectionUrl){
            console.log("Database Url not set!");
            process.exit(1);
        }
        await mongoose.connect(connectionUrl);
        console.log("Database connected successfully");
    }
    catch(e){
        console.log(`An error occurred: ${e}`);
        process.exit(1);
    }
}