import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import bcrypt from 'bcrypt';
import { queryDb } from '../dataBase/mysqlConnector';
const JWTstrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;


passport.use(
	new LocalStrategy(
		{
			usernameField: 'email',
			passwordField: 'password'
		},

		async (email: string, password: string, done: Function) => {
			try {

				if (email === "admin@admin.com" && password === "1234") {

					bcrypt.hash(password, 10, (error, hash) => {
						if (error) {
							return done(error)
						}
						else {
							const query = 'INSERT INTO superUser (email, password) VALUES (?, ?)';
							const params = [email, hash]
							queryDb(query, params)
								.then(() => {
									const user = {
										email: email
									};
									return done(null, user);
								})
								.catch(error => done(error));
						}
					});
				} else {
					return done(null, false);
				}
			} catch (error) {
				return done(error);
			}
		}
	)
);


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
