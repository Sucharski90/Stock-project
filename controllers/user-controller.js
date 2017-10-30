const User = require('../models/user')

const userController = {}

userController.index = (req, res) => {
  User.findAll().then((user) => {
    console.log(user)
    res.render('user/user-index', {
      data: user,
    })
  }).catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
};
userController.create = (req,res) => {
  User.create({
    firstname:   req.body.firstname,
    lastname:    req.body.lastname,
    username:    req.body.username,
    email: req.body.email,
    id: req.body.id
  }).then((user)=>{
    res.send(user)
  }).catch(err=>{
    console.log(err)
    res.status(500).json(err)
  })
}
userController.show = (req,res) => {
  User.findById(req.params.id)
    .then((user) => {
      res.render('user/user-single',{
        data: user
      })
    }).catch(err => {
      console.log(err)
      res.status(500).json(err)
    })
}
userController.update = (req,res) => {
  User.update(
    [req.body.username,
    req.body.email,
    req.body.firstname,
    req.body.lastname,
    req.body.id])
  .then((user) => {
    res.redirect('back')
  }).catch(err => {
      console.log(err)
      res.status(500).json(err)
    })
}

userController.delete = (req,res) => {
  user.delete(req.params.id).then(
    res.redirect('/user')).catch(err => {
      console.log(err)
      res.status(500).json(err)
    })
}

module.exports = userController
