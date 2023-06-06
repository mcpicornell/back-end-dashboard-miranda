import { IRooms } from '@src/features/interfaces';
import mongoose from 'mongoose'

const roomSchema = new mongoose.Schema({
    roomName: {
        type: String,
        required: true
    },
    isAvaliable: {
        type: Boolean,
        required: true
    },
    offerPrice: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    roomNumber: {
        type: Number,
        required: true
    },
    roomType: {
        enum: ["Single Bed", "Double Bed", "Double Superior", "Suite"],
        required: true
    },
    amenities: {
        type: [String],
        required: true
    },
    photos: {
        type: [String],
        required: true
    }
  });

  export const Room = mongoose.model('Room', roomSchema);


