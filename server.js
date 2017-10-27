const express = require('express');
const app = express();
const logger = require('morgan');
const path = require('path');
const bodyParser = require('body-parser')
const methodOverride = require('method-override')

const port = process.env.PORT || 3002;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

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
