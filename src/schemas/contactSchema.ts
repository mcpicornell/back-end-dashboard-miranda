import { Document, Schema, Model, model } from 'mongoose';

 export interface IContact extends Document{
    date: string,
    customerName: string,
    customerEmail: string,
    customerPhoneNumber: number,
    subject: string,
    comment: string,
    isArchive: boolean
}

const contactSchema = new Schema<IContact>({
    date: {
        type: String,
        required: true
    },
    customerName: {
        type: String,
        required: true
    },
    customerEmail: {
        type: String,
        required: true
    },
    customerPhoneNumber: {
        type: Number,
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    comment: {
        type: String,
        required: true
    },
    isArchive: {
        type: Boolean,
        required: true
    }
}, {versionKey: false});

export const Contact: Model<IContact> = model<IContact>('Contact', contactSchema);
