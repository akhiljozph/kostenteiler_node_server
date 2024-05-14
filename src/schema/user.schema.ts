import { date, object, string, TypeOf } from "zod";

const payload = {
    body: object({
        dateOfBirth: string({
            required_error: "date of birth is required."
        }),
        email: string({
            required_error: "Email is required"
        }).email("Not a valid email."),
        fullName: string({
            required_error: "First name is required."
        }),
        gender: string({
            required_error: "Gender is required."
        }),
        password: string({
            required_error: "Password is required"
        }).min(6, "Password is too short. It should be minimum of 6 characters"),
        username: string({
            required_error: "Username is required."
        })
    })
}

export const createUserSchema = object({
    ...payload
});

export type CreateUserInput = TypeOf<typeof createUserSchema>;