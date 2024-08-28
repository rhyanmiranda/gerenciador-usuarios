const { Sequelize } = require("../database/models/index.js")

async function errorHandler (error, req, res, next) {
  console.error(error)

  if(error.name === 'SequelizeValidationError') {
    const messageError = error.errors.map(error => error.message)
    res.status(400).json({
      error: messageError
    })
  } else if(error.name === 'SequelizeUniqueConstraintError') {
    const messageError = error.errors.map(error => error.message)
    return res.status(500).json({
      error: messageError
    })
  } else if(error.name === Sequelize.BaseError){
    return res.status(500).json({
      erro: 'database error'
    })
  } else {
   return res.status(500).json({ 
      error: 'Internal Server Error'
    })
  }
}

module.exports = errorHandler