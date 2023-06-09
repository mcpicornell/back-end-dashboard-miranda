import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import bcrypt from 'bcrypt';
import { User, IUser } from '../schemas/userSchema';
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import "../controllers/authController";

passport.use(
  new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'password',
    },
    async (email: string, password: string, done: Function) => {
      try {
        const user = await User.findOne({ email });
        if (!user) {
          return done(null, false);
        }
        else {
          const isPasswordValid = await bcrypt.compare(password, user.password!);
          console.log(isPasswordValid)
          if (password === user.password) {
            return done(null, user);
          }
          
          else if (!isPasswordValid) {
            return done(null, false)
          }
          else {
            return done(null, user);
          }

        }
      } catch (error) {
        return done(error);
      }
    }
  )
);

export default passport;

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