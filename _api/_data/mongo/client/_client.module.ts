import mongoose from "mongoose";

import dotenv from 'dotenv'
dotenv.config()


// TODO: ADD METHODS TO WIPE COLLECTIONS AND MAKE TESTS
const mongooseConnect = async () => {
    try {
        const mongooseClient = await mongoose.connect(
            "mongodb://192.168.0.130:27017/dedicar"
        )
        return mongooseClient
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

const connection = await mongooseConnect()

export default connection


