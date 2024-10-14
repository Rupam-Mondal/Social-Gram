import mongoose from 'mongoose'
import { db_url } from './serverconfig.js';

export async function connectDB(){
    try {
        await mongoose.connect(db_url);
        console.log("Database connected");
    } catch (error) {
        console.log("Some error occured");
    }
}