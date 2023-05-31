import { queryDb } from "../../dataBase/mysqlConnector";
import { IRooms } from "@src/features/interfaces";

const getRooms = async () => {
    try {
        const rows = await queryDb('SELECT * FROM `rooms`', []);
        return rows;
    }
    catch (error) {
        console.log(error)
    }
}

const getByIdRoom = async (roomId: number) => {
    try {
        const query = 'SELECT * FROM rooms WHERE roomId = ?';
        const params = [roomId];
        const [rows]: IRooms[] = await queryDb(query, params);
        return rows;
    }
    catch (error) {
        console.log(error);
        throw error;
    }
}

const createRoom = async (roomObj: IRooms) => {

    try {
        const query = 'INSERT INTO rooms (roomId, roomName, status, offerPrice, price, roomNumber, roomType, amenities, photos) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';
        const {
            roomId,
            roomName,
            status,
            offerPrice,
            price,
            roomNumber,
            roomType,
            amenities,
            photos } = roomObj;
        const params = [
            roomId,
            roomName,
            status,
            offerPrice,
            price,
            roomNumber,
            roomType,
            JSON.stringify(amenities),
            JSON.stringify(photos)];
        const result = await queryDb(query, params);
        return result;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

const updateRoom = async (roomId: number, updatedData: IRooms) => {
    try {
        const query = 'UPDATE rooms SET status = ?, offerPrice = ?, price = ?, roomNumber = ?, roomType = ?, amenities = ?, photos = ? WHERE roomId = ? '
        const params = [
            updatedData.status,
            updatedData.offerPrice,
            updatedData.price,
            updatedData.roomNumber,
            updatedData.roomType,
            updatedData.amenities,
            updatedData.photos];

        const rows = await queryDb(query, params);
        return rows;

    } catch (error) {
        console.log(error);
        throw error;
    }
}
const deleteRoom = async (roomId: number) => {
    try {
        const query = 'DELETE FROM rooms WHERE roomId = ?';
        const params = [roomId];
        await queryDb(query, params);
        return 'Room deleted successfully';
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const roomsSqlRepository = {
    getByIdRoom, deleteRoom, updateRoom, createRoom, getRooms
}