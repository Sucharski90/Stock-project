const express = require('express')

const stockRoutes = express.Router()
const stockController = require('../controllers/stock-controller')

stockRoutes.get('/',stockController.index)
stockRoutes.post('/',stockController.create)

stockRoutes.get('/add', (req,res)=>{
  res.render('stock/stock-add',{})
})

stockRoutes.get('/:id', stockController.show)
stockRoutes.put('/', stockController.update)
stockRoutes.delete('/:id', stockController.delete)

module.exports = stockRoutes
