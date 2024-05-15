import { Request, Response } from "express";

import { CreateUserInput } from "../schema/user.schema";
import { createUser } from "../services/user.service";
import log from "../utils/logger";

export async function createUserHandler(request: Request<{}, {}, CreateUserInput["body"]>, response: Response) {
    log.info(`CreateUserHandler: ${request.url} has requested!`);
    try {
        const user = await createUser(request.body);
        log.info("User creation successful.");
    
        return response.send({"message": "User creation successful!"});
    } catch(error: any) {
        log.error(`Error occurred in createUserHandler for the url '${request.url}'`);
        return response.status(409).send(error.message);
    }
}