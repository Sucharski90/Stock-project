const Stock = require('../models/stock')

const stockController = {}

stockController.index = (req, res) => {
  Stock.findAll().then((stock) => {
    console.log(stock)
    res.render('stock/stock-index', {
      data: stock,
    })
  }).catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
};

stockController.create = (req, res) => {
  Stock.create({
    symbol: req.body.symbol,
    companyName: req.body.companyName,
    primaryExchange: req.body.companyName,
    sector:  req.body.sector,
    open: req.body.open,
    openTime: req.body.openTime,
    close:  req.body.close,
    closeTime: req.body.closeTime,
    latestPrice: req.body.latestPrice
  })
}

stockController.show = (req,res) => {
  User.findById(req.params.id)
    .then((stock) => {
      res.render('stock/stock-single',{
        data: stock
      })
    }).catch(err => {
      console.log(err)
      res.status(500).json(err)
    })
}

//did not add update because it will be from the api


stockController.delete = (req,res) => {
  stock.delete(req.params.id).then(
    res.redirect('/stock')).catch(err => {
      console.log(err)
      res.status(500).json(err)
    })
}

stockController.index = (req, res) => {
  res.json({
    message: 'Put a stock profile page on this route',
    data: {
      stock: req.stock,
    },
  });
};

module.exports = stockController
