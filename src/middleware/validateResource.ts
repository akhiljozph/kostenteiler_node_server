import { NextFunction, Request, Response } from "express";
import { AnyZodObject } from "zod";
import log from "../utils/logger";

const validateResource = (schema: AnyZodObject) => (request: Request, response: Response, next: NextFunction) => {
    try {
        schema.parse({
            body: request.body,
            query: request.query,
            params: request.params
        });
        next();
    } catch (error: any) {
        log.error(`Error occurred in validateResource for the url '${request.url}'`);
        return response.status(400).send(error.errors);
    }
}

export default validateResource;