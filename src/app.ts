import { Request, Response, Application } from 'express';
import express from 'express';
import bookingsJSON from './data/bookings.json'
import usersJSON from './data/users.json'
import roomsJSON from './data/rooms.json'
import {IRooms, IBookings, IUsers} from './features/interfaces'
import cors from 'cors'

const app: Application = express();

app.use(cors())

app.get('/', (req: Request, res: Response) => {
  res.send("My first server")
})

app.get('/api/bookings', (req: Request, res: Response) => {
    res.send(bookingsJSON)
})

app.get('/api/rooms', (req: Request, res: Response) => {
res.send(roomsJSON)
})

app.get('/api/users', (req: Request, res: Response) => {
res.send(usersJSON)
})
app.get('/api/users/:id', (req: Request, res: Response) => {
    const id = req.params.id;
    console.log(usersJSON)
    
    const results = usersJSON.filter((element:IUsers) => element.id.toString() == id) 

    if (results.length === 0){
        return res.status(404).send(`The id ${id} doesn't exist in our database`)
    }
    res.send(JSON.stringify(results))
})

const PORT  = process.env.PORT || 3000;
app.listen(PORT,  () => {
  console.log(`CORS-enabled web server listening on port ${PORT}`)
})