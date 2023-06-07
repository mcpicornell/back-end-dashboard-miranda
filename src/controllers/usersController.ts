import { Request, Response, Router } from 'express';
import { IUser, User } from '../schemas/userSchema';
import { usersRepository } from '../repositories/mongo/usersMongo';
import { connectMongoDB, disconnectMongoDB } from '../dataBase/mongoConnector';

export const usersController = Router();

const {
    getByIdUser,
    deleteUser,
    updateUser,
    createUser,
    getUsers
} = usersRepository;

usersController.get("/", async (
    req: Request, res: Response
) => {
    try {
        await connectMongoDB();
        const users = await getUsers();
        await disconnectMongoDB();
        return res.send({ data: { users }, status: 200 });

    } catch (error) {
        return res.send({ users: [], error }).status(500);
    }
});

usersController.get("/:id", async (
    req: Request<{ id: string }>, res: Response
) => {
    try {
        await connectMongoDB();
        const id = req.params.id;
        const user = await getByIdUser(id);
        await disconnectMongoDB();
        return res.send({ data: { user }, status: 200 });

    } catch (error) {
        return res.send({ users: [], error }).status(500);
    }
});

usersController.post("/", async (
    req: Request<{}, IUser>, res: Response
) => {
    try {        
        await connectMongoDB();
        const post = req.body;
        const userPosted = await createUser(post);
        await disconnectMongoDB();
        return res.send({ data: { userPosted } }).status(200);

    } catch (error) {
        return res.send({ users: [], error }).status(500);
    }
});

usersController.delete("/:id", async (
    req: Request<{ id: string }>, res: Response
) => {
    try {        
        await connectMongoDB();
        const id = req.params.id;
        const user = await deleteUser(id);
        await disconnectMongoDB();
        return res.send({ data: { user }, status: 200 });

    } catch (error) {
        return res.send({ users: [], error }).status(500);
    }
});

usersController.put("/:id", async (
    req: Request<{ id: string }, {}, IUser>, res: Response
) => {
    try {        
        await connectMongoDB();
        const id = req.params.id;
        const update = req.body;
        const user = await updateUser(id, update);
        await disconnectMongoDB();
        return res.send({ data: { user }, error: null }).status(200);

    } catch (error) {
        return res.send({ users: [], error }).status(500);
    }
});