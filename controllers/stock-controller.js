const Stock = require('../models/stock')

const stockController = {}

stockController.index = (req, res) => {
  Stock.findAll().then((stocks) => {
    console.log(stocks)
    res.render('stock/stock-index', {
      stocks: stocks,
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
    primaryExchange: req.body.primaryExchange,
    sector:  req.body.sector,
    open: req.body.open,
    openTime: req.body.openTime,
    close:  req.body.close,
    closeTime: req.body.closeTime,
    latestPrice: req.body.latestPrice
  }).then(stock => {
    res.redirect(`/stocks/${stock.id}`)
  }).catch(err => {
    console.log(err);
    res.status(500).json({error: err});
  });
};

stockController.show = (req,res) => {
  Stock.findById(req.params.id)
    .then((stock) => {
      res.render('stock/stock-show',{
        data: stock
      })
    }).catch(err => {
      console.log(err)
      res.status(500).json(err)
    })
}


stockController.update = (req,res) => {
  Stock.update(
    [req.body.symbol,
    req.body.companyName,
    req.body.primaryExchange,
    req.body.sector,
    req.body.open,
    req.body.openTime,
    req.body.close,
    req.body.closeTime,
    req.body.latestPrice])
  .then((stock) => {
    res.redirect('back')
  }).catch(err => {
      console.log(err)
      res.status(500).json(err)
    })
}

stockController.delete = (req,res) => {
  stock.delete(req.params.id).then(
    res.redirect('/stock')).catch(err => {
      console.log(err)
      res.status(500).json(err)
    })
}


module.exports = stockController
