import passport from 'passport';
import { IUser } from '@src/controllers/authController';
import { Strategy as LocalStrategy } from 'passport-local';



const JWTstrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;



passport.use(
	new LocalStrategy(
		{
			usernameField: 'email',
			passwordField: 'password'
		},

		async (email: string, password: string, done: Function) => {
			console.log('Email:', email);
			console.log('Password:', password);
			try {

				if (email === "admin@admin.com" && password === "1234") {
					const user: IUser = {
						email: email,
					};
					return done(null, user);
				}
				else {
					return done(null, false);
				}
			} catch (error) {
				return done(error);
			}
		}
	)
);

console.log(process.env.SECRET_KEY)

passport.use(
	new JWTstrategy( 
		{
			
			secretOrKey: process.env.SECRET_KEY,
			jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken()
		},
		async (token: any, done: Function) => {
			try {
				return done(null, token.user);
			} catch (error) {
				done(error);
			}
		}
	)
);
