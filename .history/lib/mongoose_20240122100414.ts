import mongoose from 'mongoose';

let isConnected = false; //Variable to track connection status

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);

    if(!process.env.MONGODB_URI) return
} 