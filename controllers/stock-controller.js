const user = require('../models/user')

const User = {}

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
    name:   req.body.name,
    num:    req.body.num,
    exp:    req.body.exp,
    height: req.body.height,
    weight: req.body.weight,
    type:   req.body.type
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
    [req.body.name,
    req.body.num,
    req.body.exp,
    req.body.height,
    req.body.weight,
    req.body.type,
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
