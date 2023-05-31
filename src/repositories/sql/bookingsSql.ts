import { queryDb } from "../../dataBase/mysqlConnector";
import { IBookings } from "@src/features/interfaces";

const getBookings = async () => {
    try {
        const rows = await queryDb('SELECT * FROM `bookings`', []);
        return rows;
    }
    catch (error) {
        console.log(error)
    }
}

const getByIdBooking = async (bookingId: number) => {
    try {
        const query = 'SELECT * FROM bookings WHERE bookingId = ?';
        const params = [bookingId];

        const [rows]: IBookings[] = await queryDb(query, params);

        return rows;
    }
    catch (error) {
        console.log(error);
        throw error;
    }
}

const createBooking = async (bookingObj: IBookings) => {

    try {
        const query = 'INSERT INTO bookings (bookingId, guest, orderDate, checkIn, checkOut, specialRequest, roomId, status) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
        const { bookingId, guest, orderDate, checkIn, checkOut, specialRequest, roomId, status } = bookingObj;
        const params = [bookingId, guest, orderDate, checkIn, checkOut, specialRequest, roomId, status];
        const result = await queryDb(query, params);
        return result;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

const updateBooking = async (bookingId: number, updatedData: IBookings) => {
    try {
        const query = 'UPDATE bookings SET guest = ?, orderDate = ?, checkIn = ?, checkOut = ?, specialRequest = ?, roomId = ?, status = ? WHERE bookingId = ? '
        const params = [bookingId, updatedData.guest, updatedData.orderDate, updatedData.checkIn, updatedData.checkOut, updatedData.specialRequest, updatedData.roomId, updatedData.status];

        const [rows] = await queryDb(query, params);
        return rows;

    } catch (error) {
        console.log(error);
        throw error;
    }
}
const deleteBooking = async (bookingId: number) => {
    try {
        const query = 'DELETE FROM bookings WHERE bookingId = ?';
        const params = [bookingId];
        await queryDb(query, params);
        return 'Booking deleted successfully';
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const bookingsSqlRepository = {
    getByIdBooking, deleteBooking, updateBooking, createBooking, getBookings
}