import { Request, Response } from "express";
import { validatePassword } from "../services/user.service";
import log from "../utils/logger";

export async function createLoginSessionHandler(request: Request, response: Response) {
    log.info(`${request.url} has requested!`);
    const user = await validatePassword(request.body);

    if(!user) {
        return response.status(401).send("Invalid username or password.");
    }

    return response.status(200).send("Login successful.");
}