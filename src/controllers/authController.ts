import jwt from 'jsonwebtoken'
import passport from 'passport';
import { Request, Response, NextFunction, Router } from 'express';

export interface IUser {
    id: number,
    email: string,
    pwd?: string
}



export async function authController(req: Request, res: Response, next: NextFunction) {
	passport.authenticate(
  	'local',
  	async (err: any, user: IUser) => {
    	try {
      	if (err || !user) {
        	const error = new Error('An error occurred.');
        	return next(error);
      	}

      	req.login(
        	user,
        	{ session: false },
        	async (error) => {
          	if (error) return next(error);

          	const body = { id: user.id, email: user.email };
          	const token = jwt.sign({ user: body }, "CAMBIAME_ASAP");

          	return res.json({ token });
        	}
      	);
    	} catch (error) {
      	return next(error);
    	}
  	}
	)(req, res, next);
  };


