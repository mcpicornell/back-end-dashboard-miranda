import Room,{IRoom}  from '../../schemas/roomSchema';
import { connectMongoDB, disconnectMongoDB } from '../../dataBase/mongoConnector';

async function getRooms() {
  try {
    await connectMongoDB();
    const rooms = await Room.find().exec();
    await disconnectMongoDB();
    console.log(rooms)
    return rooms;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}
async function createRoom(roomData: IRoom) {
  try {
    await connectMongoDB();
    const newRoom = new Room(roomData);
    const createdRoom = await newRoom.save();
    await disconnectMongoDB();
    return createdRoom;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

async function updateRoom(roomId: string, updatedData: IRoom) {
  try {
    await connectMongoDB();
    const updatedRoom = await Room.findByIdAndUpdate(roomId, updatedData, {
      new: true
    });
    await disconnectMongoDB();
    return updatedRoom;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

async function getByIdRoom(roomId: string): Promise<IRoom | null> {
  try {
    await connectMongoDB();
    const room = await Room.findById(roomId);
    await disconnectMongoDB();
    return room;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

async function deleteRoom(roomId: string): Promise<void> {
  try {
    await connectMongoDB();
    await Room.findByIdAndDelete(roomId);
    console.log('Room delted succesfully');
    await disconnectMongoDB();
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}


export const roomsRepository = {
  getByIdRoom,
  deleteRoom,
  updateRoom,
  createRoom,
  getRooms
};