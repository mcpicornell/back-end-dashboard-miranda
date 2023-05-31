import express from 'express';
import { roomsController } from './controllers/roomsController';
import { usersController } from './controllers/usersController';
import { bookingsController } from './controllers/bookingsController';
import { authController } from './controllers/authController';
import "./services/auth"
import cors from 'cors'
import dotenv from 'dotenv';


dotenv.config()


const app = express();
app.use(express.json());
app.use(cors())
app.use("/login", authController)
// app.use("/api/bookings",passport.authenticate('jwt', { session: false }), bookingsController)
// app.use("/api/rooms", passport.authenticate('jwt', { session: false }), roomsJsonController)
// app.use("/api/users", passport.authenticate('jwt', { session: false }), usersJsonController)
app.use("/api/bookings", bookingsController)
app.use("/api/rooms", roomsController)
app.use("/api/users", usersController)

const PORT = Number(process.env.PORT) || 3000;
app.listen(PORT, () => {
  console.log(`CORS-enabled web server listening on port ${PORT}`)
});

export default app;