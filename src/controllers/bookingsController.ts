import { Request, Response, Router } from 'express';
import express from 'express';
import bookingsJSON from '../data/bookings.json'
import { getBookings, deleteBooking, postBooking, putBooking } from '@src/repositories/bookingsJson';
import usersJSON from '../data/users.json'
import roomsJSON from '../data/rooms.json'
import {IRooms, IBookings, IUsers} from '../features/interfaces'
import cors from 'cors'

export const bookingsJsonController = Router();

bookingsJsonController.get("/api/bookings", async (
    req: Request, res: Response
) => {
    try{
        const bookings = await getBookings

    } catch(error){
        return res.send({bookings: [], error}).status(500)
    }
})