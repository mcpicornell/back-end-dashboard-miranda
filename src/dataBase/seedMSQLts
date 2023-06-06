import { queryDb } from "./mysqlConnector";
import { faker } from '@faker-js/faker';
import { IBookings, IUsers, IRooms } from "../features/interfaces";
import { v4 as uuidv4 } from 'uuid';

const generateSeedData = () => {
    const users = [] as IUsers[];
    const bookings = [] as IBookings[];
    const rooms = [] as IRooms[];

    const generateUniqueId = () => {
        const minId = 1;
        const maxId = 1000000;
        return Math.floor(Math.random() * (maxId - minId + 1)) + minId;
    };


    for (let i = 50; i < 76; i++) {
        try {
            const user = {
                userId: generateUniqueId(),
                name: faker.internet.userName(),
                photo: faker.image.avatar(),
                email: faker.internet.email(),
                startDate: faker.date.past().toString(),
                descriptionJob: faker.lorem.sentence(),
                contact: faker.number.int({ min: 60000000, max: 79999999 }),
                isActive: faker.datatype.boolean()
            };
            users.push(user);
        }
        catch (error) {
            console.log(error)
            throw error
        }
    };
    let idRoomCounter = 101;
    for (let i = 50; i < 76; i++) {

        try {
            const room = {
                roomId: idRoomCounter,
                roomName: faker.string.alphanumeric(),
                isAvaliable: faker.datatype.boolean(),
                price: faker.number.int({ min: 500, max: 1000 }),
                offerPrice: faker.number.int({ min: 0, max: 499 }),
                roomNumber: faker.number.int({ min: 1, max: 1000 }),
                roomType: faker.string.fromCharacters(['Single', 'Double Bed', 'Double Superior', 'Suite']),
                amenities: [faker.internet.userName(), faker.internet.userName(), faker.internet.userName(), faker.internet.userName()],
                photos: [faker.image.url(), faker.image.url(), faker.image.url()]
            };

            const booking = {
                bookingId: generateUniqueId(),
                guest: faker.internet.userName(),
                orderDate: faker.date.past({ years: 2023 }).toString(),
                checkIn: faker.date.past().toString(),
                checkOut: faker.date.future().toString(),
                specialRequest: faker.lorem.sentences(),
                roomId: idRoomCounter,
                status: faker.string.fromCharacters(['Check In', 'Check Out', 'In Progress']),
            };
            rooms.push(room);
            bookings.push(booking);
            idRoomCounter++;
        }
        catch (error) {
            console.log(error)
            throw error
        }

    };

    users.forEach(user => {
        try {
            const query = 'INSERT INTO users (userId, name, photo, email, startDate, descriptionJob, contact, isActive) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
            const params = [user.userId, user.name, user.photo, user.email, user.startDate, user.descriptionJob, user.contact, user.isActive];
            queryDb(query, params);
        } catch (error) {
            console.log(error);
            throw error;
        }
    });


    const insertRoomsAndBookings = async () => {
        try {
            await Promise.all(rooms.map(async (room) => {
                try {
                    const query = 'INSERT INTO rooms (roomId, roomName, isAvaliable, offerPrice, price, roomNumber, roomType, amenities, photos) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';
                    const params = [room.roomId, room.roomName, room.isAvaliable, room.offerPrice, room.price, room.roomNumber, room.roomType, JSON.stringify(room.amenities), JSON.stringify(room.photos)];
                    await queryDb(query, params);
                } catch (error) {
                    console.log(error);
                    throw error;
                }
            }));
            bookings.forEach(async (booking) => {
                try {
                    const query = 'INSERT INTO bookings (bookingId, guest, orderDate, checkIn, checkOut, specialRequest, roomId, status) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
                    const params = [booking.bookingId, booking.guest, booking.orderDate, booking.checkIn, booking.checkOut, booking.specialRequest, booking.roomId, booking.status];
                    await queryDb(query, params);
                } catch (error) {
                    console.log(error);
                    throw error;
                }
            });
        }
        catch (error) {
            console.log(error)
            throw error;
        }
    };

insertRoomsAndBookings()
};
generateSeedData()