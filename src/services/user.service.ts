import { omit } from "lodash";

import UserModel, { UserDocument } from "../models/user.model";
import log from "../utils/logger";

export async function createUser(input: { dateOfBirth: string; email: string; fullName: string; gender: string; password: string; username: string; }) {
    try {
        const user = await UserModel.create(input);
        return omit(user.toJSON(), "password");
    } catch (error: any) {
        log.error(`Error occurred in createUser service.`)
        throw new Error(error);
    }
}

export async function validatePassword({ username, password } : { username: string, password: string }) {

    const user = await UserModel.findOne({ username });

    if(!user) {
        return false;
    }

    return omit(user.toJSON(), "password");
}