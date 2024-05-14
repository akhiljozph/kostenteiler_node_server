import { Request, Response } from "express";

import { CreateUserInput } from "../schema/user.schema";
import { createUser } from "../services/user.service";

export async function createUserHandler(request: Request<{}, {}, CreateUserInput["body"]>, response: Response) {
    console.log(`CreateUserHandler: ${request.url} has requested!`);
    try {
        const user = await createUser(request.body);
        console.log("User creation successful.");
    
        return response.send({"message": "User creation successful!"});
    } catch(error: any) {
        console.log(error);
        return response.status(409).send(error.message);
    }
}