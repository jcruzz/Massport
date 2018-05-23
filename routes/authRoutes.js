const router = require('express').Router();
const passport = require('passport');

router.get('/login', (req, res, next) => {
  next();
});

router.get('/logout', (req,res, next) => {
  next();
});

router.get('/google', passport.authenticate('google', {
  scope: ['profile']
}));

router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
  res.redirect('/user');
});

module.exports = router;
