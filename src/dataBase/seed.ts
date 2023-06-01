import { queryDb } from "./mysqlConnector";
import { faker } from '@faker-js/faker';
import { IBookings, IUsers, IRooms } from "@src/features/interfaces";
import { getRooms } from "@src/controllers/roomsController";

const generateSeedData = () => {
    const users = [] as IUsers[];
    const bookings = [] as IBookings[];
    const rooms = [] as IRooms[];

    // Generar datos ficticios para usuarios
    for (let i = 0; i < 10; i++) {
        try{
            const user = {
                userId:faker.number.int({min:100, max:500}), 
                name: faker.internet.userName(), 
                photo: faker.image.avatar(), 
                email: faker.internet.email(), 
                startDate: faker.date.past().toString(), 
                descriptionJob: faker.lorem.sentence(), 
                contact: faker.number.int({min:60000000,max:79999999}), 
                isActive: faker.datatype.boolean()
            };
            users.push(user);
        }
        catch(error){
            console.log(error)
            throw error
        }
    }

    for (let i = 0; i < 10; i++) {
        try{
            const room = {
                roomId:faker.number.int({min:100, max:500}), 
                roomName: faker.string.alphanumeric(), 
                isAvaliable: faker.datatype.boolean(), 
                price: faker.number.int({min:500, max:1000}), 
                offerPrice: faker.number.int({min:0, max: 499}),
                roomNumber: faker.number.int({min:1, max: 1000}), 
                roomType: faker.number.int({min:0, max:3}), 
                amenities: [faker.internet.userName(), faker.internet.userName(), faker.internet.userName(), faker.internet.userName()], 
                photos: [faker.image.url(), faker.image.url(), faker.image.url()]
            };
            rooms.push(room);

            const booking = {
                bookingId:faker.number.int({min:100, max:500}), 
                guest: faker.internet.userName(), 
                orderDate: faker.date.past({years: 2023}).toString(), 
                checkIn: faker.date.between({from: 2022-1, to: 2022-12}).toString(), 
                checkOut: faker.date.between({from: 2023-1-1, to: 2023-6-1}).toString(),
                specialRequest:  faker.lorem.sentences(), 
                roomId: room.roomId, 
                status: faker.number.int({min:0, max:2}), 
            };
            bookings.push(booking);
        }
        catch(error){
            console.log(error)
            throw error
        }
        
    }

    users.forEach(user => {
        try {
            const query = 'INSERT INTO users SET ?';
            const params = [user]
            queryDb(query, params)
        }
        catch (error) {
            console.log(error)
            throw error
        }
    })

    
    bookings.forEach(booking => {
        try {
            const query = 'INSERT INTO bookings SET ?';
            const params = [booking]
            queryDb(query, params)
        }
        catch (error) {
            console.log(error)
            throw error
        }
    })
    rooms.forEach(room => {
        try {
            const query = 'INSERT INTO rooms SET ?';
            const params = [room]
            queryDb(query, params)
        }
        catch (error) {
            console.log(error)
            throw error
        }
    })
}
generateSeedData()