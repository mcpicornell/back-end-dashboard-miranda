import { Request, Response, Router } from 'express';
import  Room, {IRoom}  from '../schemas/roomSchema';

export const roomsController = Router();

roomsController.get("/", async (
    req: Request, res: Response
) => {
    try {
        const rooms = await Room.find().exec();
        return res.status(200).send({ data: { rooms }});
    } catch (error) {
        return res.send({ rooms: [], error }).status(500);
    }
    
});

roomsController.get("/:id", async (
    req: Request<{ id: string }>, res: Response
) => {
    try {
        const id = req.params.id;
        const room = await Room.findById(id);
        return res.status(200).send({ data: { room }});
    } catch (error) {
        return res.send({ rooms: [], error }).status(500);
    }
    
});

roomsController.post("/", async (
    req: Request<{}, {}, IRoom>, res: Response
) => {
    try {
        const post = req.body;
        const roomPosted = await Room.create(post);
        return res.status(201).send({ data: { roomPosted } });
    } catch (error) {
        return res.send({ rooms: [], error }).status(500);
    }
    
});

roomsController.delete("/:id", async (
    req: Request<{ id: string }>, res: Response
) => {
    try {
        const id = req.params.id;
        const room = await Room.findByIdAndDelete(id);
        return res.status(202).send({ data: { room } });
    } catch (error) {
        return res.send({ rooms: [], error }).status(500);
    }
    
});

roomsController.put("/:id", async (
    req: Request<{ id: string }, {}, IRoom>, res: Response
) => {
    try {
        const id = req.params.id;
        const update = req.body;
        const room = await Room.findByIdAndUpdate(id, update, { new: true });
        return res.status(201).send({ data: { room }, error: null });
    } catch (error) {
        return res.send({ rooms: [], error }).status(500);
    }
    
});