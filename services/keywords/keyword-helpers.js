cost fetch = require('isomorphic-fetch');

function getKeywords(req, res, next) {
  fetch('https://api.iextrading.com/1.0/stock/googl/quote', {
    method: 'GET',
    body: JSON.stringify({
      data: 'test string',
    }),
    
