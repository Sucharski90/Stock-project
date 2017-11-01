const express = require('express');
const stockRoutes = express.Router();
const stockController = require('../controllers/stock-controller');


stockRoutes.get('/',stockController.index)
stockRoutes.get('/new', (req,res)=>{
  res.render('stock/stock-new',{})
})
stockRoutes.get('/:id', stockController.show)
stockRoutes.post('/',stockController.create)
//stockRoutes.get('/:id/edit', stockController.edit);
stockRoutes.put('/:id', stockController.update);

module.exports = stockRoutes;
