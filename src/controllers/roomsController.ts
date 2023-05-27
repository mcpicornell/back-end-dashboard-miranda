import { Request, Response, Router } from 'express';
import { roomsJsonRepository } from '../repositories/roomsJson';
import { IRooms } from '../features/interfaces'

export const roomsJsonController = Router();

const { getRooms, deleteRoom, postRoom, putRoom, getByIdRoom } = roomsJsonRepository;

roomsJsonController.get("/", async (
    req: Request, res: Response
) => {
    try {
        const rooms = await getRooms();
        console.log(rooms)
        return res.send({ data: { rooms }, status: 200 })

    } catch (error) {
        return res.send({ rooms: [], error }).status(500)
    }
})

roomsJsonController.get("/:id", async (
    req: Request<{ id: number }>, res: Response
) => {
    try {
        const id = req.params.id;
        const room = await getByIdRoom(Number(id));
        return res.send({ data: { room }, status: 200 })

    } catch (error) {
        return res.send({ rooms: [], error }).status(500)
    }
})

roomsJsonController.post("/", async (
    req: Request<{ id: number }, {}, IRooms>, res: Response
) => {
    try {
        const post = req.body;
        const roomPosted = await postRoom(post);
        return res.send({ data: { roomPosted } }).status(200)

    } catch (error) {
        return res.send({ rooms: [], error }).status(500)
    }
})


roomsJsonController.delete("/:id", async (
    req: Request<{ id: number }>, res: Response
) => {
    try {
        const id = Number(req.params.id);
        const room = await deleteRoom(id);
        return res.send({ data: { room }, status: 200 })

    } catch (error) {
        return res.send({ rooms: [], error }).status(500)
    }
})

roomsJsonController.put("/:id", async (
    req: Request<{ id: number }, {}, IRooms>, res: Response
) => {
    try {
        const id = Number(req.params.id);
        const update = req.body;
        const room = await putRoom(id, update);
        return res.send({ data: { room }, error: null }).status(200)

    } catch (error) {
        return res.send({ rooms: [], error }).status(500)
    }
})