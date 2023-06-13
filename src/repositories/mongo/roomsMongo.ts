import Room,{IRoom}  from '../../schemas/roomSchema';

async function getRooms() {
  try {
    const rooms = await Room.find().exec();
    return rooms;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}
async function createRoom(roomData: IRoom) {
  try {
    const newRoom = new Room(roomData);
    const createdRoom = await newRoom.save();
    console.log('Room created succesfully!');
    return createdRoom;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

async function updateRoom(roomId: string, updatedData: IRoom) {
  try {
    const updatedRoom = await Room.findByIdAndUpdate(roomId, updatedData, {
      new: true
    });
    console.log('Room updated succesfully!');
    return updatedRoom;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

async function getByIdRoom(roomId: string): Promise<IRoom | null> {
  try {
    const room = await Room.findById(roomId);
    
    return room;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

async function deleteRoom(roomId: string): Promise<void> {
  try {
    await Room.findByIdAndDelete(roomId);
    console.log('Room deleted succesfully');
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