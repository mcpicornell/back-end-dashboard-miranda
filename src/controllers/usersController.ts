import { Request, Response, Router } from 'express';
import { usersJsonRepository } from '../repositories/usersJson';
import { IUsers } from '../features/interfaces'
import {usersSqlRepository} from '../repositories/sql/usersSql'

export const usersController = Router();

// const { getUsers, deleteUser, postUser, putUser, getByIdUser } = usersJsonRepository;
 const  {
    getByIdUser, deleteUser, updateUser, createUser, getUsers
} = usersSqlRepository 
usersController.get("/", async (
    req: Request, res: Response
) => {
    try {
        const users = await getUsers();
        return res.send({ data: { users }, status: 200 })

    } catch (error) {
        return res.send({ users: [], error }).status(500)
    }
})

usersController.get("/:id", async (
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

usersController.post("/", async (
    req: Request<{ id: number }, {}, IUsers>, res: Response
) => {
    try {
        const post = req.body;
        const userPosted = await createUser(post);
        return res.send({ data: { userPosted } }).status(200)

    } catch (error) {
        return res.send({ users: [], error }).status(500)
    }
})


usersController.delete("/:id", async (
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

usersController.put("/:id", async (
    req: Request<{ id: number }, {}, IUsers>, res: Response
) => {
    try {
        const id = Number(req.params.id);
        const update = req.body;
        const user = await updateUser(id, update);
        return res.send({ data: { user }, error: null }).status(200)

    } catch (error) {
        return res.send({ users: [], error }).status(500)
    }
})