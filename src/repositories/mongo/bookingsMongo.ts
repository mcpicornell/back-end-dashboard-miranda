import  {Booking, IBooking}  from '../../schemas/bookingSchema';
import { connectMongoDB, disconnectMongoDB } from '../../dataBase/mongoConnector';


async function getBookings() {
  try {
    await connectMongoDB();
    const bookings = await Booking.find().exec();
    await disconnectMongoDB();
    return bookings;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}
async function createBooking(userData: IBooking) {
  try {
    await connectMongoDB();
    const newUser = new Booking(userData);
    const createdBooking = await newUser.save();
    await disconnectMongoDB();
    return createdBooking;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

async function updateBooking(bookingId: string, updatedData: IBooking) {
  try {
    await connectMongoDB();
    const updatedBooking = await Booking.findByIdAndUpdate(bookingId, updatedData, {
      new: true
    });
    await disconnectMongoDB();
    return updatedBooking;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

async function getByIdBooking(bookingId: string): Promise<IBooking | null> {
  try {
    await connectMongoDB();
    const booking = await Booking.findById(bookingId);
    await disconnectMongoDB();
    return booking;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

async function deleteBooking(bookingId: string): Promise<void> {
  try {
    await connectMongoDB();
    await Booking.findByIdAndDelete(bookingId);
    console.log('Booking delted succesfully');
    await disconnectMongoDB();
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}


export const bookingsRepository = {
  getByIdBooking,
  deleteBooking,
  updateBooking,
  createBooking,
  getBookings
};