import mongoose, {Document} from 'mongoose';

 export interface IBooking extends Document{
    guest: string,
    orderDate: string,
    checkIn: string,
    checkOut: string,
    specialRequest: string,
    roomId: number,
    status: string
}

const bookingSchema = new mongoose.Schema({
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
    roomId: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Room'
        }
    ],
    status: {
        type: String,
        enum: ["Check In", "Check Out", "In Progress"],
        required: true
    }
});

export const Booking = mongoose.model<IBooking>('Booking', bookingSchema);