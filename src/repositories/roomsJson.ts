import fs from 'fs';
import roomsJSON from '../data/rooms.json';
import {IRooms} from '../features/interfaces';

export const rooms = roomsJSON as IRooms[];

const write = (rooms: IRooms[]) => {
    fs.writeFileSync("src/data/rooms.json", JSON.stringify(rooms, null, 2))
};

const getRooms = async () =>{
    return rooms;
};

const getByIdRoom = async (roomId: number) =>{
    return rooms.find((element) => element.id === roomId) || null;
};

const postRoom = async (room: IRooms) =>{
    const id = rooms.length +1;
    room.id = id;
    write([...rooms, room])
    return room;
};

const putRoom = async (roomId: number, update: Partial<IRooms>) =>{
   const room = await getByIdRoom(roomId)

   if (!room){
    throw new Error('Not found')
   }

   const updatedRoom = {...room, ...update};
   const otherRooms = rooms.filter(element => element.id !== roomId);

   const updatedRooms = [...otherRooms, updatedRoom];
   write(updatedRooms)
   return updatedRoom;
};

 const deleteRoom = async (roomId: number) =>{
    const room = await getByIdRoom(roomId)
 
    if (!room){
     throw new Error('Not found')
    }
 
    const updatedRoom = rooms.filter(element => element.id !== roomId);
 
    write(updatedRoom)
 
    return updatedRoom;
 };

 export const roomsJsonRepository:any ={
    getRooms, getByIdRoom, postRoom, putRoom, deleteRoom
 }