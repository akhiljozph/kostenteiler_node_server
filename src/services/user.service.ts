import { omit } from "lodash";
import DocumentDefinition, { FilterQuery, QueryOptions, UpdateQuery } from "mongoose";
import UserModel, { UserDocument } from "../models/user.models";

export async function createUser(input: DocumentDefinition<Omit<UserDocument, "createdAt" | "updatedAt" | "comparePassword">>) {
    try {
        const user = await UserModel.create(input);
        return omit(user.toJSON(), "password");
    } catch (error: any) {
        throw new Error(error);
    }
}