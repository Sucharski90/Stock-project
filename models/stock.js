const db = require('../db/config')

const Stock = {}

Stock.findAll = () =>
  db.query('SELECT * FROM favstock')

Stock.findById = id =>
  db.one('SELECT * FROM favstock WHERE id = $1',[id])

Stock.create = user => db.one(`
  INSERT INTO favstock (
    symbol,
    companyName,
    primaryExchange,
    sector,
    open,
    openTime,
    close,
    closeTime,
    latestPrice,

  ) VALUES (
    $/symbol/,
    $/companyName/,
    $/primaryExchange/,
    $/sector/.
    $/open/,
    $/openTime/,
    $/close/,
    $/closeTime/,
    $/latestPrice/
  )
  RETURNING *`,
  stockusers
)

User.delete = id =>
  db.none(`DELETE FROM stockusers WHERE id=$1`,id)

User.update = stockusers =>
  db.one(`
    UPDATE users SET
      symbol=$1,
      companyName=$2,
      primaryExchange=$3,
      sector=$4,
      open=$5,
      openTime=$6,
      close=$7,
      closeTime=$8,
      latestPrice=$9
    WHERE
      id=$1
    RETURNING *`,
    users)

module.exports = Stock
