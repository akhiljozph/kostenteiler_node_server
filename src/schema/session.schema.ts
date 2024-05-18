import { any, object, string } from 'zod';

export const createLoginSessionSchema = object({
    body: object({
        username: any({
            required_error: "Username is required."
        }),
        password: any({
            required_error: "Password is required."
        })
    })
});