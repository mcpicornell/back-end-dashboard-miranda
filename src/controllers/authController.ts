import jwt from 'jsonwebtoken';
import passport from '../services/auth';
import { Request, Response, NextFunction, Router } from 'express';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, '../.env') });

export const authController = Router();

authController.post("/", (req: Request, res: Response, next: NextFunction) => {
  passport.authenticate('local', { session: false }, async (err: Error, user: any) => {
    try {
      if (err || !user) {
        const error = new Error('Invalid credentials');
        return next(error);
      }

      req.login(user, { session: false }, async (error) => {
        if (error) return next(error);

        const body = { email: user.email };
        const token = jwt.sign({ user: body }, process.env.SECRET_KEY!);
        console.log('Login correct');
        return res.json({ token });
      });
    } catch (error) {
      return next(error);
    }
  })(req, res, next);
});