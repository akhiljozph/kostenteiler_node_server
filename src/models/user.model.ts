import mongoose from "mongoose";
import bcrypt from "bcrypt";

import config from '../../config/development/default';

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

const userSchema = new mongoose.Schema({
    dateOfBirth: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    fullName: { type: String, required: true },
    gender: { type: String, required: true },
    password: { type: String, required: true },
    profileImage: { type: String },
    username: { type: String, required: true, unique: true },
}, {
    timestamps: true
});

userSchema.pre("save", async function (next) {
    let user = this as UserDocument;
    if (!user.isModified("password")) {
        return next();
    }
    const salt = await bcrypt.genSalt(config.saltWorkFactor);
    const hash = await bcrypt.hashSync(user.password, salt);
    // user.password = hash;

    return next();
});

const UserModel = mongoose.model<UserDocument>("User", userSchema);

export default UserModel;