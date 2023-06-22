import { Request, Response, Router } from 'express';
import {contactsRepository} from '../repositories/mongo/contactsMongo'
import { IContact } from '@src/schemas/contactSchema';
export const contactsController = Router();

 const  {
    getByIdContact, deleteContact, updateContact, createContact, getContacts
} = contactsRepository 
contactsController.get("/", async (
    req: Request, res: Response
) => {
    try {
        const contacts = await getContacts();
        return res.send({ data: {contacts} , status: 200 })

    } catch (error) {
        return res.send({ contacts: [], error }).status(500)
    }
})

contactsController.get("/:id", async (
    req: Request<{ id: string }>, res: Response
) => {
    try {
        const id = req.params.id;
        const contact = await getByIdContact(id);
        return res.send({ data: { contact }, status: 200 })

    } catch (error) {
        return res.send({ contacts: [], error }).status(500)
    }
})

contactsController.post("/", async (
    req: Request<{ id: string }, {}, IContact>, res: Response
) => {
    try {
        const post = req.body;
        const contactPosted = await createContact(post);
        return res.send({ data: { contactPosted } }).status(200)

    } catch (error) {
        return res.send({ contacts: [], error }).status(500)
    }
})


contactsController.delete("/:id", async (
    req: Request<{ id: string }>, res: Response
) => {
    try {
        const id = req.params.id;
        const contact = await deleteContact(id);
        return res.send({ data: { contact }, status: 200 })

    } catch (error) {
        return res.send({ contacts: [], error }).status(500)
    }
})

contactsController.put("/:id", async (
    req: Request<{ id: string }, {}, IContact>, res: Response
) => {
    try {
        const id = req.params.id;
        const update = req.body;
        const contact = await updateContact(id, update);
        return res.send({ data: { contact }, error: null }).status(200)

    } catch (error) {
        return res.send({ contacts: [], error }).status(500)
    }
})