app.get('/', (req, res) => {
  res.render('index', { message: 'How did this get here?'});
});
