import { Request, Response, Router } from 'express';
import { bookingsJsonRepository } from '../repositories/bookingsJson';
import {IBookings} from '../features/interfaces';
import { IUser } from '../controllers/authController';

const loginPage = {
    html: `
    <h1>Sign in</h1>
<form action="/login/password" method="post">
    <section>
        <label for="username">Username</label>
        <input id="username" name="username" type="text" autocomplete="username" required autofocus>
    </section>
    <section>
        <label for="current-password">Password</label>
        <input id="current-password" name="password" type="password" autocomplete="current-password" required>
    </section>
    <button type="submit">Sign in</button>
</form>
    `
}

export const loginController = Router();

loginController.get("/", async (
    req: Request, res: Response
) => {

    res.render('login');
})

loginController.post("/", async (
    req: Request<IUser>, res: Response
) => {
    try{
        
    }
    catch(error){
        console.log(error)
    }
    
    
})