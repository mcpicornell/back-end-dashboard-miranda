import jwt from 'jsonwebtoken'
import passport from 'passport';
import { Request, Response, NextFunction, Router } from 'express';

export interface IUser {
    email: string,
}

export const authController = Router();

  authController.post("/", async(req: Request, res: Response, next: NextFunction) => {
	const { email, password } = req.body;
	console.log('Email:', email);
  console.log('Password:', password);
	passport.authenticate(
  	'local',
	  { session: false },
  	async (err: Error, user: IUser) => {
    	try {
      	if (err || !user) {
        	const error = new Error('Invalid credentials');
        	return next(error);
      	}

      	req.login(
        	user,
        	{ session: false },
        	async (error) => {
          	if (error) return next(error);

          	const body = { email: user.email };
          	const token = jwt.sign({ user: body }, "CAMBIAME_ASAP");

          	return res.json({ token });
        	}
      	);
    	} catch (error) {
      	return next(error);
    	}
  	}
	)(req, res, next);
  });


