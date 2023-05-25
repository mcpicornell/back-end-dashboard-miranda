import { Request, Response, Router } from 'express';
import { bookingsJsonRepository } from '../repositories/bookingsJson';
import {IBookings} from '../features/interfaces'

export const bookingsJsonController = Router();

const {getBookings, deleteBookings, postBooking, putBooking, getByIdBooking} = bookingsJsonRepository;

bookingsJsonController.get("/", async (
    req: Request, res: Response
) => {
    try{
        const bookings = await getBookings();
        console.log(bookings)
        return res.send({ data:{bookings}, status: 200})

    } catch(error){
        return res.send({bookings: [], error}).status(500)
    }
})

bookingsJsonController.get("/:id", async (
    req: Request<{id: number}>, res: Response
) => {
    try{
        const id = req.params.id;
        const booking = await getByIdBooking(Number(id));
        return res.send({ data:{booking}, status: 200})

    } catch(error){
        return res.send({bookings: [], error}).status(500)
    }
})

bookingsJsonController.post("/", async (
    req: Request<{id: number}, {}, IBookings>, res: Response
) => {
    try{
        const post = req.body;
        const bookingPosted = await postBooking(post);
        return res.send({ data:{bookingPosted} }).status(200)

    } catch(error){
        return res.send({bookings: [], error}).status(500)
    }
})


bookingsJsonController.delete("/:id", async (
    req: Request<{id: number}>, res: Response
) => {
    try{
        const id = Number(req.params.id);
        const booking = await deleteBookings(id);
        return res.send({ data:{booking}, status: 200})

    } catch(error){
        return res.send({bookings: [], error}).status(500)
    }
})

bookingsJsonController.put("/:id", async (
    req: Request<{id: number}, {}, IBookings>, res: Response
) => {
    try{
        const id = Number(req.params.id);
        const update = req.body;
        const booking = await putBooking(id, update);
        return res.send({ data:{booking}, error: null}).status(200)

    } catch(error){
        return res.send({bookings: [], error}).status(500)
    }
})