const db = require('../db/config')

const Stock = {}

Stock.findAll = () =>
  db.query('SELECT * FROM stocks')

Stock.findById = id =>
  db.one('SELECT * FROM stocks WHERE id = $1',[id])

Stock.create = stocks => db.one(`
  INSERT INTO stocks (
    id,
    username,
    email,
    password_digest,
    firstnme,
    lastname
  ) VALUES (
    $/id/,
    $/username/,
    $/email/,
    $/password_digest/.
    $/firstnme/,
    $/lastname/
  )
  RETURNING *`,
  stocks
)

Stock.delete = id =>
  db.none(`DELETE FROM stocks WHERE id=$1`,id)

Stock.update = stocks =>
  db.one(`
    UPDATE stocks SET
      id=$1,
      username=$2,
      email=$3,
      password_digest=$4,
      firstname=$5,
      lastname=$6
    WHERE
      id=$7
    RETURNING *`,
    stocks)

module.exports = Stock
