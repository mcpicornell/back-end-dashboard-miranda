import { Request, Response, Router } from 'express';
import fs from 'fs';
import express from 'express';
import bookingsJSON from '../data/bookings.json';
import usersJSON from '../data/users.json';
import roomsJSON from '../data/rooms.json';
import {IRooms, IBookings, IUsers} from '../features/interfaces';
import cors from 'cors';



export const bookings = bookingsJSON as IBookings[];

const write = (bookings: IBookings[]) => {
    fs.writeFileSync("src/data/bookings.json", JSON.stringify(bookings, null, 2))
};

export const getBookings = async () =>{
    return bookings;
};

const getByIdBooking = async (bookingId: number) =>{
    return bookings.find((element) => element.id === bookingId) || null;
};

export const postBooking = async (booking: IBookings) =>{
    const id = bookings.length +1;
    booking.id = id;
    write([...bookings, booking])
    return booking;
};

export const putBooking = async (bookingId: number, update: Partial<IBookings>) =>{
   const booking = await getByIdBooking(bookingId)

   if (!booking){
    throw new Error('Not found')
   }

   const updatedBooking = {...booking, ...update};
   const otherBookings = bookings.filter(element => element.id !== bookingId);

   const updatedBookings = [...otherBookings, updatedBooking];
   write(updatedBookings)
   return updatedBooking;
};

export const put = async (bookingId: number, update: Partial<IBookings>) =>{
    const booking = await getByIdBooking(bookingId)
    if (!booking){
     throw new Error('Not found')
    }
 
    const updatedBooking = {...booking, ...update};
    const otherBookings = bookings.filter(element => element.id !== bookingId);
 
    const updatedBookings = [...otherBookings, updatedBooking];
    write(updatedBookings)
    return updatedBooking;
 };

 export const deleteBooking = async (bookingId: number) =>{
    const booking = await getByIdBooking(bookingId)
 
    if (!booking){
     throw new Error('Not found')
    }
 
    const updatedBooking = bookings.filter(element => element.id !== bookingId);
 
    write(updatedBooking)
 
    return updatedBooking;
 };

 export const bookingsJsonRepostory:any ={
    getBookings, getByIdBooking, postBooking, putBooking, deleteBooking
 }