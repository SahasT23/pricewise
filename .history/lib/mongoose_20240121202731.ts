import mongoose from 'mongoose';

let isConnected = false; //Variable to track connection status

export const connectToDB = async () 