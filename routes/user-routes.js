const express = require('express');
const userRoutes = express.Router();
const userController = require('../controllers/users-controller');
const authHelpers = require('../services/auth/auth-helpers');


userRoutes.get('/', authHelpers.loginRequired, usersController.index);


userRoutes.get('/',userController.index)
userRoutes.post('/',userController.create)


userRoutes.get('/add', (req,res)=>{
  res.render('user/user-add',{})
})

userRoutes.get('/:id', userController.show)
userRoutes.put('/', userController.update)
userRoutes.delete('/:id', userController.delete)

module.exports = userRoutes;
