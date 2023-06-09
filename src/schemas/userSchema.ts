import { Document, Model, Schema, model } from 'mongoose';

 export interface IUser extends Document{
    contact?: number,
    descriptionJob?: string,
    email: string,
    name?: string,
    photo?: string,
    startDate?: string,
    isActive?: boolean,
    password?: string,
}

const userSchema: Schema<IUser> = new Schema<IUser>({
    password: {
        type: String,
        required: true
    },
    contact: {
        type: Number,
        required: true
    },
    descriptionJob: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    photo: {
        type: String,
        required: true
    },
    startDate: {
        type: String,
        required: true
    },
    isActive: {
        type: Boolean,
        required: true
    }
}, {versionKey: false});

export const User: Model<IUser> = model<IUser>('User', userSchema);
