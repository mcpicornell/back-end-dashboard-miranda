import passport from 'passport';
import passportJwt from 'passport-jwt'
// const localStrategy = passportJwt.Strategy;
// const JWTstrategy = passportJwt.Strategy;
// const ExtractJWT = passportJwt.ExtractJwt;

const localStrategy = require('passport-local').Strategy;
const JWTstrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;





// passport.use(
//   'login',
//   new localStrategy(
// 	{
//   	usernameField: 'email',
//   	passwordField: 'password'
// 	},
// 	async (email, password, done) => {
//   	try {
//     	if (email === 'admin@admin.com' && password === '1234')
//    		 return done(null, {email: ‘admin@admin.com’}, { message: 'Logged in Successfully' });	 
//   	return done(null, false, { message: 'Invalid credentials' });
//   	} catch (error) {
//     	return done(error);
//   	}
// 	}
//   )
// );


// passport.use(
//   new JWTstrategy(
// 	{
//   	secretOrKey: ‘CAMBIAME_ASAP’,
//   	jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken('secret_token')
// 	},
// 	async (token, done) => {
//   	try {
//     	return done(null, token.user);
//   	} catch (error) {
//     	done(error);
//   	}
// 	}
//   )
// );
