import { faker } from '@faker-js/faker';
import { User } from "../schemas/userSchema";
import Room  from "../schemas/roomSchema";
import { Booking } from "../schemas/bookingSchema";
import { connectMongoDB, disconnectMongoDB } from './mongoConnector';

const generateSeedData = async () => {
    await connectMongoDB();
    for (let i = 50; i < 76; i++) {
        try {
          
            const user = new User( {
                name: faker.internet.userName(),
                photo: faker.image.avatar(),
                email: faker.internet.email(),
                startDate: faker.date.past().toString(),
                descriptionJob: faker.lorem.sentence(),
                contact: faker.number.int({ min: 60000000, max: 79999999 }),
                isActive: faker.datatype.boolean()
                
            });
            await user.save()
        }
        catch (error) {
            console.log(error)
            throw error
        }
    };
    let idRoomCounter = 101;
    for (let i = 50; i < 76; i++) {

        try {
            const room = new Room({
                roomName: faker.string.alphanumeric(),
                isAvaliable: faker.datatype.boolean(),
                price: faker.number.int({ min: 500, max: 1000 }),
                offerPrice: faker.number.int({ min: 0, max: 499 }),
                roomNumber: faker.number.int({ min: 1, max: 1000 }),
                roomType: faker.string.fromCharacters(['Single', 'Double Bed', 'Double Superior', 'Suite']),
                amenities: [faker.internet.userName(), faker.internet.userName(), faker.internet.userName(), faker.internet.userName()],
                photos: [faker.image.url(), faker.image.url(), faker.image.url()]
            });
            await room.save();
            const roomId = room._id;

            const booking = new Booking ({
                guest: faker.internet.userName(),
                orderDate: faker.date.past({ years: 2023 }).toString(),
                checkIn: faker.date.past().toString(),
                checkOut: faker.date.future().toString(),
                specialRequest: faker.lorem.sentences(),
                roomId: roomId,
                status: faker.string.fromCharacters(['Check In', 'Check Out', 'In Progress']),
            });
            await booking.save()
        }
        catch (error) {
            console.log(error)
            throw error
        }

    };
    await disconnectMongoDB();
};

const deleteAllRooms = async () => {
  try {
    await Room.deleteMany({});
    console.log('All data deleted successfully.');
  } catch (error) {
    console.log('Error deleting data:', error);
  }
};

const deleteAllBookings = async () => {
    try {
      await Booking.deleteMany({});
      console.log('All data deleted successfully.');
    } catch (error) {
      console.log('Error deleting data:', error);
    }
  };

  const deleteAllUsers = async () => {
    try {
      await User.deleteMany({});
      console.log('All data deleted successfully.');
    } catch (error) {
      console.log('Error deleting data:', error);
    }
  };

generateSeedData()