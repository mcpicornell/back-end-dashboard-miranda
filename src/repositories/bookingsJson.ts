import fs from 'fs';
import bookingsJSON from '../dataJson/bookings.json';
import { IBookings } from '../features/interfaces';

export const bookings = bookingsJSON as IBookings[];

const write = (bookings: IBookings[]) => {
    fs.writeFileSync("src/data/bookings.json", JSON.stringify(bookings, null, 2))
};

const getBookings = async () => {
    return bookings;
};

const getByIdBooking = async (bookingId: number) => {
    return bookings.find((element) => element.bookingId === bookingId) || null;
};

const postBooking = async (booking: IBookings) => {
    const id = bookings.length + 1;
    booking.bookingId = id;
    write([...bookings, booking])
    return booking;
};

const putBooking = async (bookingId: number, update: Partial<IBookings>) => {
    const booking = await getByIdBooking(bookingId)

    if (!booking) {
        throw new Error('Not found')
    }

    const updatedBooking = { ...booking, ...update };
    const otherBookings = bookings.filter(element => element.bookingId !== bookingId);

    const updatedBookings = [...otherBookings, updatedBooking];
    write(updatedBookings)
    return updatedBooking;
};

const deleteBooking = async (bookingId: number) => {
    const booking = await getByIdBooking(bookingId)

    if (!booking) {
        throw new Error('Not found')
    }

    const updatedBooking = bookings.filter(element => element.bookingId !== bookingId);

    write(updatedBooking)

    return updatedBooking;
};

export const bookingsJsonRepository: any = {
    getBookings, getByIdBooking, postBooking, putBooking, deleteBooking
}