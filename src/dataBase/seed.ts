import { queryDb } from "./mysqlConnector";
import { faker } from "@faker-js/faker";
import { IBookings, IUsers, IRooms, IContacts } from "@src/features/interfaces";
import casual from "casual";

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

const priceDependingType = (roomType: string) => {
  switch (roomType) {
    case "Suite":
      return faker.number.int({ min: 1200, max: 1500 });

    case "Double Superior":
      return faker.number.int({ min: 900, max: 1100 });

    case "Double Bed":
      return faker.number.int({ min: 600, max: 850 });

    case "Single":
      return faker.number.int({ min: 250, max: 550 });
  }
}

const offerPriceDependingType = (roomType: string) => {
  switch (roomType) {
    case "Single":
      return faker.number.int({ min: 50, max: 220 });

    case "Double Bed":
      return faker.number.int({ min: 250, max: 550 });

    case "Double Superior":
      return faker.number.int({ min: 600, max: 850 });

    case "Suite":
      return faker.number.int({ min: 900, max: 1200 });
  }
}

const randomNameRoom = (roomType: string) => {
  switch (roomType) {
    case "Single":
      return `Independent C-${faker.number.int({ min: 0, max: 50 })}`;

    case "Double Bed":
      return `Double B-${faker.number.int({ min: 0, max: 50 })}`;

    case "Double Superior":
      return `Superior A-${faker.number.int({ min: 0, max: 50 })}`;

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

const users = [] as IUsers[];
const bookings = [] as IBookings[];
const rooms = [] as IRooms[];
const contacts = [] as IContacts[]

const generateContactsData = () => {
  let uniqueIdContact = 1;
    for (let i = 0; i < 15; i++) {
        try {
          const firstName = casual.first_name;
          const lastName = casual.last_name;
          const contact = {
            contactId: uniqueIdContact,
            date: convertToDateFormat(faker.date
              .past()),
            customerName: `${firstName} ${lastName}`,
            customerEmail: faker.internet.email(),
            customerPhoneNumber: faker.number.int({ min: 60000000, max: 79999999 }),
            subject: faker.lorem.words(),
            comment: faker.lorem.sentences(),
            isArchive: faker.datatype.boolean()
          };
          contacts.push(contact);
          uniqueIdContact++;
        }
          
          catch(error){
            console.log(error)
          }

    contacts.forEach((contact) => {
        try {
          const query =
            "INSERT INTO contacts (contactId, date, customerName, customerEmail, customerPhoneNumber, subject, comment, isArchive) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
          const params = [
            contact.contactId,
            contact.date,
            contact.customerName,
            contact.customerEmail,
            contact.customerPhoneNumber,
            contact.subject,
            contact.comment,
            contact.isArchive
          ];
          queryDb(query, params);
        } catch (error) {
          console.log(error);
          throw error;
        }
      })
}}


const generateBookingsAndRoomsData = async () => {

  let uniqueIdRoom = 100;
  let uniqueIdBooking = 200;
  
  for (let i = 0; i < 15; i++) {
    try {
      uniqueIdRoom++;
      uniqueIdBooking++;
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

      const room = {
        roomId: uniqueIdRoom,
        roomName: randomNameRoom(roomType) as string,
        isAvailable: false,
        price: priceDependingType(roomType) as number,
        offerPrice: offerPriceDependingType(roomType) as number,
        roomNumber: faker.number.int({ min: 1, max: 1000 }),
        roomType: roomType,
        amenities: amenities,
        photos: getRandomArrayPhotosRoom(roomType) as string[],
      };

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

      const booking = {
        bookingId: uniqueIdBooking,
        guest: `${firstName} ${lastName}`,
        orderDate: convertToDateFormat(orderDate),
        checkIn: checkIn,
        checkOut: checkOut,
        specialRequest: faker.lorem.sentences(),
        roomObj: room,
        status: status,
        roomId: room.roomId,
      };
      uniqueIdBooking = uniqueIdBooking+i;
      uniqueIdRoom = uniqueIdRoom+i;
      rooms.push(room);
      bookings.push(booking);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  bookings.forEach((booking) => {
    try {
      const query =
        "INSERT INTO bookings (bookingId, guest, orderDate, checkIn, checkOut, specialRequest, roomId, status) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
      const params = [
        booking.bookingId,
        booking.guest,
        booking.orderDate,
        booking.checkIn,
        booking.checkOut,
        booking.specialRequest,
        booking.roomId,
        booking.status,
      ];
      queryDb(query, params);
    } catch (error) {
      console.log(error);
      throw error;
    }
  });
  rooms.forEach((room) => {
    try {
      const query =
        "INSERT INTO rooms (roomId, roomName, isAvailable, offerPrice, price, roomNumber, roomType, amenities, photos) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
      const params = [
        room.roomId,
        room.roomName,
        room.isAvailable,
        room.offerPrice,
        room.price,
        room.roomNumber,
        room.roomType,
        JSON.stringify(room.amenities),
        JSON.stringify(room.photos),
      ];
      queryDb(query, params);
    } catch (error) {
      console.log(error);
      throw error;
    }
  });
};

const generateRoomsData = () => {
  let uniqueIdRoom = 600;
    for (let i = 0; i < 15; i++) {
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
    
          const room = {
            roomId: uniqueIdRoom,
            roomName: randomNameRoom(roomType) as string,
            isAvailable: true,
            price: priceDependingType(roomType) as number,
            offerPrice: offerPriceDependingType(roomType) as number,
            roomNumber: faker.number.int({ min: 1, max: 1000 }),
            roomType: roomType,
            amenities: amenities,
            photos: getRandomArrayPhotosRoom(roomType) as string[],
          };
          rooms.push(room);
          uniqueIdRoom = uniqueIdRoom + i;
        }
          
          catch(error){
            console.log(error)
          }

    rooms.forEach((room) => {
        try {
          const query =
            "INSERT INTO rooms (roomId, roomName, isAvailable, offerPrice, price, roomNumber, roomType, amenities, photos) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
          const params = [
            room.roomId,
            room.roomName,
            room.isAvailable,
            room.offerPrice,
            room.price,
            room.roomNumber,
            room.roomType,
            JSON.stringify(room.amenities),
            JSON.stringify(room.photos),
          ];
          queryDb(query, params);
        } catch (error) {
          console.log(error);
          throw error;
        }
      })
}}

const generateUsersData = () => {
    let uniqueIdUser = 300;
    for (let i = 0; i < 15; i++) {
      uniqueIdUser++;
      try {
        const user = {
          userId: uniqueIdUser,
          name: faker.internet.userName(),
          photo: faker.image.avatar(),
          email: faker.internet.email(),
          startDate: convertToDateFormat(faker.date.past()),
          descriptionJob: faker.lorem.sentence(),
          contact: faker.number.int({ min: 60000000, max: 79999999 }),
          isActive: faker.datatype.boolean(),
          password: faker.string.alphanumeric(8),
          isAdmin: false,
        };
        users.push(user);
      } catch (error) {
        console.log(error);
        throw error;
      }
    }
    users.forEach((user) => {
        try {
          const query =
            "INSERT INTO users (userId, name, photo, email, startDate, descriptionJob, contact, isActive) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
          const params = [
            user.userId,
            user.name,
            user.photo,
            user.email,
            user.startDate,
            user.descriptionJob,
            user.contact,
            user.isActive,
          ];
          queryDb(query, params);
        } catch (error) {
          console.log(error);
          throw error;
        }
      });
};

 const clearTables = async (): Promise<void> => {
  try {
    const query = `
      DELETE FROM users;
      DELETE FROM rooms;
      DELETE FROM bookings;
    `;
    await queryDb<void>(query, null);
    console.log('Content of tables deleted successfully.');
  } catch (error) {
    console.log('Error occurred while deleting content of tables:', error);
    throw error;
  }
};

const generateSeed = async () => {
    generateRoomsData();
    generateUsersData();
    await generateBookingsAndRoomsData();
};


generateBookingsAndRoomsData()
// generateRoomsData()
// generateUsersData()