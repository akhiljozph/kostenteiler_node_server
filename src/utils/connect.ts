import mongoose from "mongoose";

import config from '../../config/default';

async function connect() {
    const dbUri = config.dbUri as string;

    try {
        await mongoose.connect(dbUri);
        console.log("Connection to DB is successful!")
    } catch(error: any) {
        console.log("Error in DB connection", error);
        process.exit(1);
    }
}

export default connect;