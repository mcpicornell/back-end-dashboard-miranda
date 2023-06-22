import { Request, Response, Router } from 'express';
import { IContacts } from '../features/interfaces'
import {contactsSqlRepository} from '../repositories/sql/contactsSql'

export const contactsController = Router();

 const  {
    getByIdContact, deleteContact, updateContact, createContact, getContacts
} = contactsSqlRepository 
contactsController.get("/", async (
    req: Request, res: Response
) => {
    try {
        const users = await getContacts();
        return res.send({ data: { users }, status: 200 })

    } catch (error) {
        return res.send({ users: [], error }).status(500)
    }
})

contactsController.get("/:id", async (
    req: Request<{ id: number }>, res: Response
) => {
    try {
        const id = req.params.id;
        const user = await getByIdContact(Number(id));
        return res.send({ data: { user }, status: 200 })

    } catch (error) {
        return res.send({ users: [], error }).status(500)
    }
})

contactsController.post("/", async (
    req: Request<{ id: number }, {}, IContacts>, res: Response
) => {
    try {
        const post = req.body;
        const userPosted = await createContact(post);
        return res.send({ data: { userPosted } }).status(200)

    } catch (error) {
        return res.send({ users: [], error }).status(500)
    }
})


contactsController.delete("/:id", async (
    req: Request<{ id: number }>, res: Response
) => {
    try {
        const id = Number(req.params.id);
        const user = await deleteContact(id);
        return res.send({ data: { user }, status: 200 })

    } catch (error) {
        return res.send({ users: [], error }).status(500)
    }
})

contactsController.put("/:id", async (
    req: Request<{ id: number }, {}, IContacts>, res: Response
) => {
    try {
        const id = Number(req.params.id);
        const update = req.body;
        const user = await updateContact(id, update);
        return res.send({ data: { user }, error: null }).status(200)

    } catch (error) {
        return res.send({ users: [], error }).status(500)
    }
})