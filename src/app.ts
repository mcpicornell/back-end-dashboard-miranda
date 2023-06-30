import express from 'express';
import cors from 'cors'
import dotenv from 'dotenv';
import passport from 'passport';
import "./services/auth";
import bodyParser from 'body-parser'
import { connectMongoDB, disconnectMongoDB } from './dataBase/mongoConnector';
import serverless from 'serverless-http';
import { roomsController } from './controllers/roomsController';
import { usersController } from './controllers/usersController';
import { bookingsController } from './controllers/bookingsController';
import { authController } from './controllers/authController';
import { contactsController } from './controllers/contactsController';
import mongoose from 'mongoose';
import path from 'path'

dotenv.config()
dotenv.config({ path: path.resolve(__dirname, '.env') });

const app = express();
app.use(express.json({strict: false}));
app.use(bodyParser.json());
app.use(cors());
app.use(passport.initialize());
connectMongoDB();
app.use("/login", authController)
app.use("/api/bookings",passport.authenticate('jwt', { session: false }), bookingsController)
app.use("/api/rooms", passport.authenticate('jwt', { session: false }), roomsController)
app.use("/api/users", passport.authenticate('jwt', { session: false }), usersController)
app.use("/api/contacts", passport.authenticate('jwt', { session: false }), contactsController)

mongoose.connect(String(process.env.MONGO_DB));
const db = mongoose.connection;

db.once('open', () => {
    console.log('Successfully connected to the database!');
  });


export const handler = serverless(app);

// const PORT = Number(process.env.PORT) || 3001;
// app.listen(PORT, () => {
//   console.log(`CORS-enabled web server listening on port ${PORT}`)
// });

