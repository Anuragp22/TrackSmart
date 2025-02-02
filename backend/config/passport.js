// // src/config/passport.js
// import passport from 'passport';
// import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
// import config from './environment.js';
// import User from '../models/user.model.js';

// passport.use(
//   new GoogleStrategy(
//     {
//       clientID: config.google.clientId,
//       clientSecret: config.google.clientSecret,
//       callbackURL: config.google.callbackUrl,
//     },
//     async (accessToken, refreshToken, profile, done) => {
//       try {
//         // Check if a user already exists with this Google ID
//         let user = await User.findOne({ googleId: profile.id });
//         if (!user) {
//           // Create a new user if one doesn't exist
//           user = await User.create({
//             googleId: profile.id,
//             name: profile.displayName,
//             email: profile.emails[0].value,
//             active: true,
//           });
//         }
//         return done(null, user);
//       } catch (error) {
//         return done(error, null);
//       }
//     }
//   )
// );
