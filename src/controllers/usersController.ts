import { Request, Response, Router } from 'express';
import { usersJsonRepository } from '../repositories/usersJson';
import { IUsers } from '../features/interfaces'

export const usersJsonController = Router();

const { getUsers, deleteUser, postUser, putUser, getByIdUser } = usersJsonRepository;

usersJsonController.get("/", async (
    req: Request, res: Response
) => {
    try {
        const users = await getUsers();
        console.log(users)
        return res.send({ data: { users }, status: 200 })

    } catch (error) {
        return res.send({ users: [], error }).status(500)
    }
})

usersJsonController.get("/:id", async (
    req: Request<{ id: number }>, res: Response
) => {
    try {
        const id = req.params.id;
        const user = await getByIdUser(Number(id));
        return res.send({ data: { user }, status: 200 })

    } catch (error) {
        return res.send({ users: [], error }).status(500)
    }
})

usersJsonController.post("/", async (
    req: Request<{ id: number }, {}, IUsers>, res: Response
) => {
    try {
        const post = req.body;
        const userPosted = await postUser(post);
        return res.send({ data: { userPosted } }).status(200)

    } catch (error) {
        return res.send({ users: [], error }).status(500)
    }
})


usersJsonController.delete("/:id", async (
    req: Request<{ id: number }>, res: Response
) => {
    try {
        const id = Number(req.params.id);
        const user = await deleteUser(id);
        return res.send({ data: { user }, status: 200 })

    } catch (error) {
        return res.send({ users: [], error }).status(500)
    }
})

usersJsonController.put("/:id", async (
    req: Request<{ id: number }, {}, IUsers>, res: Response
) => {
    try {
        const id = Number(req.params.id);
        const update = req.body;
        const user = await putUser(id, update);
        return res.send({ data: { user }, error: null }).status(200)

    } catch (error) {
        return res.send({ users: [], error }).status(500)
    }
})