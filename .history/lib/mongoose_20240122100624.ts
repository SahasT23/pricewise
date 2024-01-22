import mongoose from 'mongoose';

let isConnected = false; //Variable to track connection status

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);

    if(!process.env.MONGODB_URI) return console.log('MONGODB_URI is not defined');

    if(isConnected) return console.log('=> using existing database connection');

    try {
        await mongoose.connect(process.env.MONGO_DB)
    } catch (error) {
        console.log(error)
    }
} 