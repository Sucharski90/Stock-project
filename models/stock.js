const db = require('../db/config')

const Stock = {}

Stock.findAll = () =>
  db.query('SELECT * FROM stocks')

Stock.findById = (id) => {
  return db.oneOrNone('SELECT * FROM stocks WHERE id = $1',[id]);
};

Stock.create = (stocks) => db.one(
  `
  INSERT INTO stocks
   (symbol, companyName, primaryExchange, sector, open, openTime, close, closeTime, latestPrice)
   VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
   RETURNING *
 `,
 [stocks.symbol, stocks.companyName, stocks.primaryExchange, stocks.sector, stocks.open, stocks.openTime, stocks.close, stocks.closeTime, stocks.latestPrice]
);


Stock.destroy = (id) => {
  return db.none(`DELETE FROM stocks
    WHERE id = $1
    `,[id]);
  };
/*
Stock.update = stocks =>
  db.one(`
    UPDATE users SET
      symbol=$1,
      companyName=$2,
      primaryExchange=$3,
      sector=$4,
      open=$5,
      openTime=$6,
      close=$7,
      closeTime=$8,
      latestPrice=$9
    WHERE
      id=$1
    RETURNING *`,
    stocks)
/*WORKS
Stock.findAll().then(stocks => {
  console.log('stocks', stocks);
})

Stock.findById().then(stocks => {
  console.log('stocks', stocks);
})

Stock.create({
  symbol: 'aaa',
  companyName: 'www',
  primaryExchange: 'nasdaq',
  sector: 'fff',
  open: 4,
  openTime: 3,
  close: 5,
  closeTime: 9,
  latestPrice: 3
})
 .then(stocks => {
   return Stock.findAll()
 })
 .then(stocks => {
   console.log(stocks)
 })
*/










module.exports = Stock
