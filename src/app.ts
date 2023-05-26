import { Request, Response, Application } from 'express';
import express from 'express';
import { roomsJsonController } from './controllers/roomsController';
import { usersJsonController } from './controllers/usersController';
import { bookingsJsonController } from './controllers/bookingsController';
import { loginController } from './controllers/loginController';
import { authController } from './controllers/authController';
import cors from 'cors'
// import '/auth'
import passport from 'passport';
// const auth = require('./auth/auth');
const app = express();

app.use(cors())

app.use("/login", authController) 

app.use("/api/bookings",  passport.authenticate('jwt', { session: false }) ,bookingsJsonController)

app.use("/api/rooms", passport.authenticate('jwt', { session: false }), roomsJsonController)

app.use("/api/users", passport.authenticate('jwt', { session: false }), usersJsonController)

const PORT  = process.env.PORT || 3000;
app.listen(PORT,  () => {
  console.log(`CORS-enabled web server listening on port ${PORT}`)
})

export default app;