import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import bcrypt from 'bcrypt';
import { User } from '../schemas/userSchema';
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

passport.use(
  new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'password',
    },
    async (email: string, password: string, done: Function) => {
      try {
        if (email === 'admin@admin.com' && password === '1234') {
          bcrypt.hash(password, 10, async (error, hash) => {
            if (error) {
              return done(error);
            } else {
              try {
                const user = await User.create({ email, password: hash });
                return done(null, user);
              } catch (error) {
                return done(error);
              }
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
  new JwtStrategy(
    {
      secretOrKey: process.env.SECRET_KEY,
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
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