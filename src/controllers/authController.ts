import jwt from 'jsonwebtoken';
import passport from 'passport';
import { Request, Response, NextFunction, Router } from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { IUser, User } from '../schemas/userSchema';
import "../services/auth";
import bycript from 'bcrypt'

dotenv.config({ path: path.resolve(__dirname, '../.env') });
console.log(process.env.SECRET_KEY)
export const authController = Router();

authController.post("/", (req: Request, res: Response, next: NextFunction) => {
	const { email, password } = req.body;
	passport.authenticate('local', { session: false }, async (err: Error, user: IUser) => {
	  try {
		if (err || !user) {
		  const error = new Error('Invalid credentials');
		  return next(error);
		}
		if (user.password){
			const isPasswordValid = await bycript.compare(password, user.password);
			if (!isPasswordValid) {
				const error = new Error('Invalid credentials');
				return next(error);
			  }
		
			  req.login(user, { session: false }, async (error) => {
				if (error) return next(error);
		
				const body = { email: user.email };
				const token = jwt.sign({ user: body }, process.env.SECRET_KEY!);
				console.log('LogIn correct');
				return res.json({ token });
			  });
		}
	  } catch (error) {
		return next(error);
	  }
	})(req, res, next);
  });