const passport = require("passport");
const googleStrategy = require("passport-google-oauth20").Strategy;

passport.use(
  new googleStrategy(
    {
      clientID: process.env.GOOGLE_CLINET_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: `${process.env.SERVER_URL}/auth/google/callback`,
      passReqToCallback: true,
    },
    async (req, accessToken, refershToken, profile, done) => {
      if (profile) {
        return done(null, profile);
      }
    }
  )
);

passport.serializeUser((user, cb) => {
  cb(null, user.id);
});

passport.deserializeUser((id, cb) => {
  cb(null, id);
});
