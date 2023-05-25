import { Request, Response, Router, NextFunction } from 'express';
import passport from 'passport'; 

// const login = async (req: Request, res: Response, next: NextFunction) => {
// 	passport.authenticate(
//   	'login',
//   	async (err, user, info) => {
//     	try {
//       	if (err || !user) {
//         	const error = new Error('An error occurred.');

//         	return next(error);
//       	}

//       	req.login(
//         	user,
//         	{ session: false },
//         	async (error) => {
//           	if (error) return next(error);

//           	const body = { _id: user._id, email: user.email };
//           	const token = jwt.sign({ user: body }, ‘CAMBIAME_ASAP’);

//           	return res.json({ token });
//         	}
//       	);
//     	} catch (error) {
//       	return next(error);
//     	}
//   	}
// 	)(req, res, next);
//   };
