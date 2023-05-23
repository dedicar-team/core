import mongoose from 'mongoose';

let cachedDb: mongoose.Connection;

type ConnectToDatabaseProps = { minPoolSize?: number, maxPoolSize?: number }

export async function connectToDatabase({ minPoolSize = 1, maxPoolSize = 5 }: ConnectToDatabaseProps = {}) {
    if (cachedDb) {
        return cachedDb;
    }

    try {
        cachedDb = await mongoose.connect(process.env.MONGODB_URI || "", {
            serverSelectionTimeoutMS: 5000,
            minPoolSize,
            maxPoolSize
        }).then(res => res.connection)
    } catch (error) {
        console.error('Error connecting to the database:', error);
    }
}