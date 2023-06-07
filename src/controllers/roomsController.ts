import { Request, Response, Router } from 'express';
import  Room, {IRoom}  from '../schemas/roomSchema';
import { connectMongoDB, disconnectMongoDB } from '../dataBase/mongoConnector';

export const roomsController = Router();

roomsController.get("/", async (
    req: Request, res: Response
) => {
    try {
        await connectMongoDB();
        const rooms = await Room.find().exec();
        await disconnectMongoDB();
        return res.send({ data: { rooms }, status: 200 });
    } catch (error) {
        return res.send({ rooms: [], error }).status(500);
    }
});

roomsController.get("/:id", async (
    req: Request<{ id: string }>, res: Response
) => {
    try {
        await connectMongoDB();
        const id = req.params.id;
        const room = await Room.findById(id);
        await disconnectMongoDB();
        return res.send({ data: { room }, status: 200 });
    } catch (error) {
        return res.send({ rooms: [], error }).status(500);
    }
});

roomsController.post("/", async (
    req: Request<{}, {}, IRoom>, res: Response
) => {
    try {
        await connectMongoDB();
        const post = req.body;
        const roomPosted = await Room.create(post);
        await disconnectMongoDB();
        return res.send({ data: { roomPosted } }).status(200);
    } catch (error) {
        return res.send({ rooms: [], error }).status(500);
    }
});

roomsController.delete("/:id", async (
    req: Request<{ id: string }>, res: Response
) => {
    try {
        await connectMongoDB();
        const id = req.params.id;
        const room = await Room.findByIdAndDelete(id);
        await disconnectMongoDB();
        return res.send({ data: { room }, status: 200 });
    } catch (error) {
        return res.send({ rooms: [], error }).status(500);
    }
});

roomsController.put("/:id", async (
    req: Request<{ id: string }, {}, IRoom>, res: Response
) => {
    try {
        await connectMongoDB();
        const id = req.params.id;
        const update = req.body;
        const room = await Room.findByIdAndUpdate(id, update, { new: true });
        await disconnectMongoDB();
        return res.send({ data: { room }, error: null }).status(200);
    } catch (error) {
        return res.send({ rooms: [], error }).status(500);
    }
});