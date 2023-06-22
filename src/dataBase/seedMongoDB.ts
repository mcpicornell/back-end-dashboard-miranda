import { faker } from "@faker-js/faker";
import { User } from "../schemas/userSchema";
import Room from "../schemas/roomSchema";
import {Contact } from '../schemas/contactSchema'
import { Booking } from "../schemas/bookingSchema";
import { connectMongoDB, disconnectMongoDB } from "./mongoConnector";
import casual from 'casual'

export const convertToDateFormat = (date: Date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const dateFormated = `${year}-${month}-${day}`;
  return dateFormated;
};

const shuffleArray = (array: string[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const checksInCheckInOut = (checkIn: string, checkOut: string) => {
  const date = new Date();
  const checkInDate = new Date(checkIn);
  const checkOutDate = new Date(checkOut);
  if (date > checkOutDate) {
    return "Check Out";
  } else if (date >= checkInDate && date <= checkOutDate) {
    return "In Progress";
  } else {
    return "Check In";
  }
};

const randomNameRoom = (roomType: string) => {
  switch (roomType) {
    case "Single":
      return `Deluxe C-${faker.number.int({ min: 0, max: 50 })}`;

    case "Double Bed":
      return `Deluxe B-${faker.number.int({ min: 0, max: 50 })}`;

    case "Double Superior":
      return `Deluxe A-${faker.number.int({ min: 0, max: 50 })}`;

    case "Suite":
      return `Deluxe S-${faker.number.int({ min: 0, max: 50 })}`;
  }
};

const getRandomArrayPhotosRoom = (roomType: string) => {
  switch (roomType) {
    case "Single":
      return [
        "https://23c133e0c1637be1e07d-be55c16c6d91e6ac40d594f7e280b390.ssl.cf1.rackcdn.com/u/phhk/home/1a-Superior-Single-Room-min1.jpg",
        "https://webbox.imgix.net/images/owvecfmxulwbfvxm/c56a0c0d-8454-431a-9b3e-f420c72e82e3.jpg",
        "https://www.berjayahotel.com/sites/default/files/hotel-room-type/london/c1-classic-single-room.jpg",
        "https://www.rathbonehotel.co.uk/app/uploads/2020/04/RBH-Single.jpg",
      ];
    case "Double Bed":
      return [
        "https://www.residenthotels.com/wp-content/uploads/2022/06/The-Resident-Victoria-double-room-1400x928.jpg",
        "https://d3rg18dos0rgue.cloudfront.net/wp-content/uploads/sites/3/2017/12/Deluxe-Double-Guestroom2.jpg",
        "https://res.cloudinary.com/traveltripperweb/image/upload/c_limit,f_auto,h_2500,q_auto,w_2500/v1580455406/vahre6fc9gt8ygcdmkuu.jpg",
        "https://cdn.traveltripper.io/site-assets/512_855_12327/media/2018-02-27-080006/large_ex-double-2.jpg",
      ];
    case "Double Superior":
      return [
        "https://img.freepik.com/free-photo/elegant-hotel-room-with-big-bed_1203-1494.jpg?w=2000",
        "https://lh3.googleusercontent.com/yjDoBdvT5hee7GpGXk5fSi43sU0E_4_f2YeopUW99NJODjcMWAHbDWhkLO6KvjwTXvjQwlyRR0gQx2w2CnGfyohY8ETkGVzVwo-O5ti6uk8gaHecDEMA4w4yyiCAHepf29ZGXE8M",
        "https://www.cvent.com/sites/default/files/image/2021-10/hotel%20room%20with%20beachfront%20view.jpg",
        "https://www.telegraph-hotel.com/wp-content/uploads/2020/06/P1144452-scaled.jpg",
      ];
    case "Suite":
      return [
        "https://www.luxurylifestylemag.co.uk/wp-content/uploads/2023/04/bigstock-Luxury-Bed-In-A-Large-Neoclass-157835027.jpg",
        "https://grandpalaceriga.com/wp-content/uploads/2019/10/Junior-Suite-King_main.jpg",
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.behance.net%2Fgallery%2F37227475%2FSTUDIO-SUITE-HOTEL-ROOM&psig=AOvVaw1bUVMW6OXnoY7YV7z0F-nq&ust=1687097455067000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCPj9lfa9yv8CFQAAAAAdAAAAABAJ",
        "https://publish.purewow.net/wp-content/uploads/sites/2/2019/08/grand-velas.jpeg?fit=1360%2C906",
      ];
  }
};

const generateContactsData = async () => {
  let uniqueIdContact = 1;
    for (let i = 0; i < 15; i++) {
        try {
          const firstName = casual.first_name;
          const lastName = casual.last_name;
          const contact = new Contact({
            contactId: uniqueIdContact,
            date: convertToDateFormat(faker.date
              .past()),
            customerName: `${firstName} ${lastName}`,
            customerEmail: faker.internet.email(),
            customerPhoneNumber: faker.number.int({ min: 60000000, max: 79999999 }),
            subject: faker.lorem.words(),
            comment: faker.lorem.sentences(),
            isArchive: faker.datatype.boolean()
          });
          await contact.save()
        }
          
          catch(error){
            console.log(error)
          }
    }
    console.log("Contacts data created correctly!");

}

const generateRoomsData = async () => {
  for (let i = 0; i < 16; i++) {
    try {
      const roomType = faker.string.fromCharacters([
        "Single",
        "Double Bed",
        "Double Superior",
        "Suite",
      ]);
      const amenityList = [
        "Shower",
        "Bath",
        "TV",
        "Sea Views",
        "WiFi",
        "Air-conditioning system",
      ];

      const shuffledAmenities = shuffleArray(amenityList);
      const amenities = shuffledAmenities.slice(0, 4);

      const room = new Room({
        roomName: randomNameRoom(roomType),
        isAvailable: true,
        price: faker.number.int({ min: 500, max: 1000 }),
        offerPrice: faker.number.int({ min: 0, max: 499 }),
        roomNumber: faker.number.int({ min: 1, max: 1000 }),
        roomType: roomType,
        amenities: amenities,
        photos: getRandomArrayPhotosRoom(roomType),
      });
      await room.save();
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  console.log("Rooms data created correctly!");
};

const generateBookingsAndRoomsData = async () => {
  for (let i = 0; i < 16; i++) {
    try {
      const roomType = faker.string.fromCharacters([
        "Single",
        "Double Bed",
        "Double Superior",
        "Suite",
      ]);
      const amenityList = [
        "Shower",
        "Bath",
        "TV",
        "Sea Views",
        "WiFi",
        "Air-conditioning system",
      ];

      const shuffledAmenities = shuffleArray(amenityList);
      const amenities = shuffledAmenities.slice(0, 4);

      const room = new Room({
        roomName: randomNameRoom(roomType),
        isAvailable: false,
        price: faker.number.int({ min: 500, max: 1000 }),
        offerPrice: faker.number.int({ min: 0, max: 499 }),
        roomNumber: faker.number.int({ min: 1, max: 1000 }),
        roomType: roomType,
        amenities: amenities,
        photos: getRandomArrayPhotosRoom(roomType),
      });
      await room.save();

      const startTimestamp = faker.date
        .past({ years: 2, refDate: "2023-01-01" })
        .getTime();
      const endTimestamp = faker.date
        .future({ years: 2, refDate: new Date() })
        .getTime();
      const checkInTimestamp = faker.number.int({
        min: startTimestamp,
        max: endTimestamp,
      });
      const checkOutTimestamp = faker.number.int({
        min: checkInTimestamp,
        max: endTimestamp,
      });

      const orderDate = new Date(
        faker.date
          .past({ years: 1, refDate: new Date(startTimestamp) })
          .getTime()
      );
      const checkInDate = new Date(checkInTimestamp);
      const checkOutDate = new Date(checkOutTimestamp);
      const checkIn = convertToDateFormat(checkInDate);
      const checkOut = convertToDateFormat(checkOutDate);
      const status = checksInCheckInOut(checkIn, checkOut);

      const firstName = casual.first_name;
      const lastName = casual.last_name;
      const booking = new Booking({
        guest: `${firstName} ${lastName}`,
        orderDate: convertToDateFormat(orderDate),
        checkIn: checkIn,
        checkOut: checkOut,
        specialRequest: faker.lorem.sentences(),
        roomObj: room,
        status: status,
      });
      await booking.save();
    } catch (error) {
      console.log("Error al guardar bookings y rooms", error);
      throw error;
    }
  }
  console.log("Rooms and Bookings data created correctly!");
};

const generateUsersData = async () => {
  for (let i = 0; i < 16; i++) {
    try {
      const user = new User({
        name: faker.internet.userName(),
        photo: faker.image.avatar(),
        email: faker.internet.email(),
        startDate: convertToDateFormat(faker.date.past()),
        descriptionJob: faker.lorem.sentence(),
        contact: faker.number.int({ min: 60000000, max: 79999999 }),
        isActive: faker.datatype.boolean(),
        password: faker.string.alphanumeric(8),
        isAdmin: false,
      });
      await user.save();
      console.log("Users data created correctly!");
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
};

const deleteAllRooms = async () => {
  try {
    await Room.deleteMany({});
    console.log("All rooms data deleted successfully.");
  } catch (error) {
    console.log("Error deleting data:", error);
  }
};

const deleteAllBookings = async () => {
  try {
    await Booking.deleteMany({});
    console.log("All bookings data deleted successfully.");
  } catch (error) {
    console.log("Error deleting data:", error);
  }
};

const deleteAllUsers = async () => {
  try {
    await User.deleteMany({});
    console.log("All users data deleted successfully.");
  } catch (error) {
    console.log("Error deleting data:", error);
  }
};
const deleteAllDataBase = async () => {
  try {
    await deleteAllUsers();
    await deleteAllBookings();
    await deleteAllRooms();
    console.log("All data base has been successfully deleted.");
  } catch (error) {
    console.log(error);
  }
};

const createSeeds = async () => {
  await connectMongoDB();
  await deleteAllBookings();
  await deleteAllRooms();
  await generateRoomsData();
  await generateBookingsAndRoomsData();
  await disconnectMongoDB();
};

