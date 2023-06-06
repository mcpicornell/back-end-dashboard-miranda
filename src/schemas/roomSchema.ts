import { Document, Model, Schema, model } from 'mongoose';

 export interface IRoom extends Document{
  roomName: string,
  isAvaliable: boolean
  offerPrice: number,
  price: number,
  roomNumber: number,
  roomType: string,
  amenities: string[],
  photos: string[]
}

const roomSchema: Schema<IRoom> = new Schema<IRoom>({
  roomName: {
    type: String,
    required: true,
  },
  isAvaliable: {
    type: Boolean,
    required: true,
  },
  offerPrice: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  roomNumber: {
    type: Number,
    required: true,
  },
  roomType: {
    type: String,
    enum: ['Single Bed', 'Double Bed', 'Double Superior', 'Suite'],
    required: true,
  },
  amenities: {
    type: [String],
    required: true,
  },
  photos: {
    type: [String],
    required: true,
  },
});

const Room: Model<IRoom> = model<IRoom>('Room', roomSchema);

export default Room;