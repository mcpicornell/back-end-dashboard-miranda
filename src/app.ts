import { Request, Response, Application } from 'express';
import express from 'express';
import { roomsJsonController } from './controllers/roomsController';
import { usersJsonController } from './controllers/usersController';
import { bookingsJsonController } from './controllers/bookingsController';
import cors from 'cors'
// import '/auth'
import passport from 'passport';

const app = express();

app.use(cors())
// app.use(app.router);
// routes.initialize(app);

// require('auth');

// app.use('/rooms', passport.authenticate('jwt', { session: false }), roomsJsonRepository);


// app.use("/login")

app.use("/api/bookings", bookingsJsonController)

app.use("/api/rooms", roomsJsonController)

app.use("/api/users", usersJsonController)

const PORT  = process.env.PORT || 3000;
app.listen(PORT,  () => {
  console.log(`CORS-enabled web server listening on port ${PORT}`)
})

export default app;