//change att to stock att
const db = require('../db/config')

const User = {}

User.findAll = () =>
  db.query('SELECT * FROM stockusers')

User.findById = id =>
  db.one('SELECT * FROM stockusers WHERE id = $1',[id])

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
  stockusers
)

User.delete = id =>
  db.none(`DELETE FROM stockusers WHERE id=$1`,id)

User.update = stockusers =>
  db.one(`
    UPDATE users SET
      id=$1,
      username=$2,
      email=$3,
      password_digest=$4,
      firstname=$5,
      lastname=$6
    WHERE
      id=$1
    RETURNING *`,
    users)

module.exports = User
