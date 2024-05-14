import { NextFunction, Request, Response } from "express";
import { AnyZodObject } from "zod";

const validateResource = (schema: AnyZodObject) => (request: Request, response: Response, next: NextFunction) => {
    try {
        schema.parse({
            body: request.body,
            query: request.query,
            params: request.params
        });
        next();
    } catch (error: any) {
        console.log("ValidateResourceRequestURL:", request.body);
        return response.status(400).send(error.errors);
    }
}

export default validateResource;