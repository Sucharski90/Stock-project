const express = require('express');
const stockRoutes = express.Router();
const stockController = require('../controllers/stock-controller');


stockRoutes.get('/',stockController.index)
stockRoutes.get('/new', (req,res)=>{
  res.render('stock/stock-new',{})
})
stockRoutes.get('/:id', stockController.show)
stockRoutes.post('/',stockController.create)
stockRouter.get('/:id/edit', stockController.edit);
stockRouter.put('/:id', stockController.update);
