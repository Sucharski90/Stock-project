const User = require('../models/user')
const bcrypt = require('bcryptjs');

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

userController.create = (req, res) => {
  const salt = bcrypt.genSaltSync();
  const hash = bcrypt.hashSync(req.body.password, salt);
  User.create({
    username: req.body.username,
    email: req.body.email,
    password_digest: hash,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
  }).then(user => {
    req.login(user, (err) => {
      if (err) return next(err);
      res.redirect('/user');
    });
  }).catch(err => {
    console.log(err);
    res.status(500).json({error: err});
  });
}

module.exports = userController;

userController.index = (req, res) => {
  res.json({
    message: 'Put a user profile page on this route',
    data: {
      user: req.user,
    },
  });
};

module.exports = userController
