import express from 'express';
import cors from 'cors'
import dotenv from 'dotenv';
import passport from 'passport';
import "./services/auth";
import bodyParser from 'body-parser'
import { roomsController } from './controllers/roomsController';
import { usersController } from './controllers/usersController';
import { bookingsController } from './controllers/bookingsController';
import { authController } from './controllers/authController';


dotenv.config()


const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());
app.use(passport.initialize());
app.use("/login", authController)
app.use("/api/bookings",passport.authenticate('jwt', { session: false }), bookingsController)
app.use("/api/rooms", passport.authenticate('jwt', { session: false }), roomsController)
app.use("/api/users", passport.authenticate('jwt', { session: false }), usersController)

// app.use("/api/bookings", bookingsController)
// app.use("/api/rooms", roomsController)
// app.use("/api/users", usersController)

// const PORT = Number(process.env.PORT) || 3000;
// app.listen(PORT, () => {
//   console.log(`CORS-enabled web server listening on port ${PORT}`)
// });

export default app;