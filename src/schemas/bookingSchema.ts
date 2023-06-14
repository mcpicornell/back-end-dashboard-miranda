import mongoose, { Document, Schema, Model, model } from 'mongoose';
import Room, { IRoom } from './roomSchema';

 export interface IBooking extends Document{
    guest: string,
    orderDate: string,
    checkIn: string,
    checkOut: string,
    specialRequest: string,
    roomObj: Schema.Types.Mixed,
    status: string
}

const bookingSchema = new Schema<IBooking>({
    guest: {
        type: String,
        required: true
    },
    orderDate: {
        type: String,
        required: true
    },
    checkIn: {
        type: String,
        required: true
    },
    checkOut: {
        type: String,
        required: true
    },
    specialRequest: {
        type: String,
        required: true
    },
    roomObj: Schema.Types.Mixed,
    status: {
        type: String,
        enum: ["Check In", "Check Out", "In Progress"],
        required: true
    }
}, {versionKey: false});

export const Booking: Model<IBooking> = model<IBooking>('Booking', bookingSchema);
