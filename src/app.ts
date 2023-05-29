import express from 'express';
import { roomsJsonController } from './controllers/roomsController';
import { usersJsonController } from './controllers/usersController';
import { bookingsJsonController } from './controllers/bookingsController';
import { authController } from './controllers/authController';
import "./services/auth"
import cors from 'cors'
import passport from 'passport';
import dotenv from 'dotenv';
import mysql from 'mysql';

dotenv.config()

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'admin',
  password: 'admin',
  database: 'miranda_db'
})

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to database:', err);
    return;
  }
  console.log('Connected to database!');
});
const app = express();
app.use(express.json());
app.use(cors())
app.use("/login", authController)
app.use("/api/bookings", passport.authenticate('jwt', { session: false }), bookingsJsonController)
app.use("/api/rooms", passport.authenticate('jwt', { session: false }), roomsJsonController)
app.use("/api/users", passport.authenticate('jwt', { session: false }), usersJsonController)

const PORT = Number(process.env.PORT) || 3000;
app.listen(PORT, () => {
  console.log(`CORS-enabled web server listening on port ${PORT}`)
});

export default app;