import  {Booking, IBooking}  from '../../schemas/bookingSchema';

async function getBookings() {
  try {
    const bookings = await Booking.find().exec();
    return bookings;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}
async function createBooking(userData: IBooking) {
  try {
    const newUser = new Booking(userData);
    const createdBooking = await newUser.save();
    return createdBooking;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

async function updateBooking(bookingId: string, updatedData: IBooking) {
  try {
    const updatedBooking = await Booking.findByIdAndUpdate(bookingId, updatedData, {
      new: true
    });
    return updatedBooking;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

async function getByIdBooking(bookingId: string): Promise<IBooking | null> {
  try {
    const booking = await Booking.findById(bookingId);
    return booking;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

async function deleteBooking(bookingId: string): Promise<void> {
  try {
    await Booking.findByIdAndDelete(bookingId);
    console.log('Booking delted succesfully');
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