const express = require('express');
const logger = require('morgan');
const path = require('path');
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');

const app = express();
require('dotenv').config();

const port = process.env.PORT || 3002;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));
app.use(cookieParser());
app.use(session({
  secret: process.env.SECRET_KEY,
  resave: false,
  saveUninitialized: true,
}));
app.use(passport.initialize());
app.use(passport.session());

app.use(express.static('public'));


app.get('/', (req, res) => {
  res.render('index');
});

const userRouter = require('./routes/stock_routes');
app.use('/users', userRouter);

app.listen(port, () => {
    console.log(`Living here on port ${port}`);
});

//works if localhost:3002/stocks is in browser
app.get('/stocks', (req, res) => {
    res.send('Stocks');
});

const authRoutes = require('./routes/auth-routes');
app.use('/auth', authRoutes);
const userRoutes = require('./routes/user-routes');
app.use('/user', userRoutes);

//works
app.use('*', (req, res) => {
    res.status(404).send({
      error: 'Nope not there',
    });
});
