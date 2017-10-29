//change att to stock att
const db = require('../db/config')

const User = {}

User.findAll = () =>
  db.query('SELECT * FROM users')

User.findById = id =>
  db.one('SELECT * FROM users WHERE id = $1',[id])

User.create = user => db.one(`
  INSERT INTO users (
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
  users
)

User.delete = id =>
  db.none(`DELETE FROM users WHERE id=$1`,id)

User.update = users =>
  db.one(`
    UPDATE users SET
      id=$1,
      username=$2,
      email=$3,
      password_digest=$4,
      firstname=$5,
      lastname=$6
    WHERE
      id=$7
    RETURNING *`,
    users)

module.exports = User
