import { Request, Response, Router } from 'express';
import { bookingsJsonRepository } from '../repositories/bookingsJson';
import { IBookings } from '../features/interfaces'
import { bookingsSqlRepository } from '../repositories/sql/bookingsSql'
export const bookingsController = Router();

// const {getBookings, deleteBookings, postBooking, putBooking, getByIdBooking} = bookingsJsonRepository;
const {
    getByIdBooking, deleteBooking, updateBooking, createBooking, getBookings
} = bookingsSqlRepository
bookingsController.get("/", async (
    req: Request, res: Response
) => {
    try {
        const bookings = await getBookings();
        console.log(bookings)
        return res.send({ data: { bookings }, status: 200 })

    } catch (error) {
        return res.send({ bookings: [], error }).status(500)
    }
})

bookingsController.get("/:id", async (
    req: Request<{ id: number }>, res: Response
) => {
    try {
        const id = req.params.id;
        const booking = await getByIdBooking(Number(id));
        return res.send({ data: { booking }, status: 200 })

    } catch (error) {
        return res.send({ bookings: [], error }).status(500)
    }
})

bookingsController.post("/", async (
    req: Request<{}, IBookings>, res: Response
) => {
    try {
        const post = req.body;

        const bookingPosted = await createBooking(post);
        return res.send({ data: { bookingPosted } }).status(200)

    } catch (error) {
        return res.send({ bookings: [], error }).status(500)
    }
})


bookingsController.delete("/:id", async (
    req: Request<{ id: number }>, res: Response
) => {
    try {
        const id = Number(req.params.id);
        const booking = await deleteBooking(id);
        return res.send({ data: { booking }, status: 200 })

    } catch (error) {
        return res.send({ bookings: [], error }).status(500)
    }
})

bookingsController.put("/:id", async (
    req: Request<{ id: number }, {}, IBookings>, res: Response
) => {
    try {
        const id = Number(req.params.id);
        const update = req.body;
        const booking = await updateBooking(id, update);
        return res.send({ data: { booking }, error: null }).status(200)

    } catch (error) {
        return res.send({ bookings: [], error }).status(500)
    }
})