import mongoose from 'mongoose'

export interface IBookings {
    guest: string,
    orderDate: string,
    checkIn: string,
    bookingId: number,
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
    bookingId: {
        type: Number,
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
    ]
        
    ,
    status: {
        enum: ["Check In", "Check Out", "In Progress"],
        required: true
    }
  });

  export const Booking = mongoose.model('Booking', bookingSchema);
