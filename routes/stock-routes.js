const express = require('express');
const stockRoutes = express.Router();
const stockController = require('../controllers/stock-controller');


stockRoutes.get('/',stockController.index)

stockRoutes.get('/new', (req,res)=>{
  res.render('stock/stock-new',{})
})
stockRoutes.post('/',stockController.create)

stockRoutes.get('/:id', stockController.show)
stockRoutes.get('/:id/edit', stockController.edit);
stockRoutes.put('/:id', stockController.update);
stockRoutes.delete('/:id', stockController.delete);
module.exports = stockRoutes;
