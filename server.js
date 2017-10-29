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

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

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

//works
app.use('*', (req, res) => {
    res.status(404).send({
      error: 'Nope not there',
    });
});
