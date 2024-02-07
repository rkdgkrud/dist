// server.js
const express = require('express');
const cors = require('cors');
const session = require('express-session');
const passport = require('passport');
const oracleDbModule = require('./oracleDbModule');
const { OAuth2Strategy: GoogleStrategy } = require('passport-google-oauth');

const app = express();
const port = 3000;

// CORS 설정
app.use(cors());

// 세션 설정
app.use(session({ 
  secret: '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',
  resave: true,
  saveUninitialized: true
}));
// Passport 초기화 및 세션 설정
app.use(passport.initialize());
app.use(passport.session());

// Google OAuth2 설정
passport.use(new GoogleStrategy({
  clientID: '666323034611-cdbgaiumph23s72sa97t8ogj9l9i9ctl.apps.googleusercontent.com',
  clientSecret: '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',
  callbackURL: `http:///${process.env.HOST || 'localhost'}:3000/auth/google/callback`
},
function(accessToken, refreshToken, profile, done) {
  return done(null, profile);
}
));

// Passport 세션 설정
passport.serializeUser(function(user, done) {
done(null, user);
});

passport.deserializeUser(function(obj, done) {
done(null, obj);
});

// Google 로그인 라우트
app.get('/auth/google', passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login'] }));

// Google 로그인 콜백 라우트
app.get('/auth/google/callback',
passport.authenticate('google', { failureRedirect: '/' }),
function(req, res) {
  res.redirect('/');
});

// 로그인 여부 확인 미들웨어
function isAuthenticated(req, res, next) {
if (req.isAuthenticated()) {
  return next();
}
res.redirect('/');
}

// 로그아웃 라우트
app.get('/logout', function(req, res) {
req.logout();
res.redirect('/');
});

// 홈 라우트
app.get('/', function(req, res) {
res.send('<h1>Hello, ' + (req.isAuthenticated() ? req.user.displayName : 'Guest') + '!</h1>'
  + '<a href="/auth/google">Login with Google</a>'
  + '<br><a href="/logout">Logout</a>');
});

app.get('/stocks', async (req, res) => {
  let connection;

  try {
    connection = await oracleDbModule.getConnection();

    // 여기에서 SQL 쿼리 또는 작업을 수행합니다.
    // 예시: SELECT * FROM stocks;
    // const result = await connection.execute('SELECT * FROM stocks');

    res.send('Stocks data retrieved successfully!');
  } catch (error) {
    console.error('Error: ', error);
    res.status(500).send('Internal Server Error');
  } finally {
    if (connection) {
      await oracleDbModule.closeConnection(connection);
    }
  }
});

// 서버 시작
app.listen(port, () => {
  console.log(`Server is running at http://${process.env.HOST || 'localhost'}:${port}`);
});