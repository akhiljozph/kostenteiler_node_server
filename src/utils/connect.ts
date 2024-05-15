import mongoose from "mongoose";

import config from '../../config/development/default';
import log from "./logger";

async function connect() {
    const dbUri = config.dbUri as string;

    try {
        await mongoose.connect(dbUri);
        log.info("Connection to DB is successful!")
    } catch(error: any) {
        log.error("Error in DB connection", error);
        process.exit(1);
    }
}

export default connect;