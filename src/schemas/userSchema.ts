import { IUser } from '@src/controllers/authController';
import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
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
    userId: {
        type: Number,
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
  });

  export const User = mongoose.model('User', userSchema);
