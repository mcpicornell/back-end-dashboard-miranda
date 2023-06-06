import { Request, Response, Router } from 'express';
import { bookingsRepository } from '../../repositories/mongo/bookingsMongo';
import { IBooking, Booking } from '../../schemas/bookingSchema';

export const bookingsController = Router();

const {
    getByIdBooking,
    deleteBooking,
    updateBooking,
    createBooking,
    getBookings
} = bookingsRepository;

bookingsController.get("/", async (
    req: Request, res: Response
) => {
    try {
        const bookings = await getBookings();
        console.log(bookings);
        return res.send({ data: { bookings }, status: 200 });

    } catch (error) {
        return res.send({ bookings: [], error }).status(500);
    }
});

bookingsController.get("/:id", async (
    req: Request<{ id: string }>, res: Response
) => {
    try {
        const id = req.params.id;
        const booking = await getByIdBooking(id);
        return res.send({ data: { booking }, status: 200 });

    } catch (error) {
        return res.send({ bookings: [], error }).status(500);
    }
});

bookingsController.post("/", async (
    req: Request<{}, IBooking>, res: Response
) => {
    try {
        const post = req.body;
        const bookingPosted = await createBooking(post);
        return res.send({ data: { bookingPosted } }).status(200);

    } catch (error) {
        return res.send({ bookings: [], error }).status(500);
    }
});

bookingsController.delete("/:id", async (
    req: Request<{ id: string }>, res: Response
) => {
    try {
        const id = req.params.id;
        const booking = await deleteBooking(id);
        return res.send({ data: { booking }, status: 200 });

    } catch (error) {
        return res.send({ bookings: [], error }).status(500);
    }
});

bookingsController.put("/:id", async (
    req: Request<{ id: string }, {}, IBooking>, res: Response
) => {
    try {
        const id = req.params.id;
        const update = req.body;
        const booking = await updateBooking(id, update);
        return res.send({ data: { booking }, error: null }).status(200);

    } catch (error) {
        return res.send({ bookings: [], error }).status(500);
    }
});