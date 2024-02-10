import mongoose from "mongoose";

export interface UserDocument extends mongoose.Document {
    createdAt: Date;
    dateOfBirth: string;
    email: string;
    fullName: string;
    gender: string;
    password: string;
    profileImage?: string;
    updatedAt: Date;
    username: string;
}