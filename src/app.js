const express = require('express')
const db = require('./models/index.js')

const app = express()
app.use(express.json())

app.get('/api/users', async (req, res) => {
  const list = await db.User.findAll()
  res.status(200).send({
    message: 'list users',
    users: list
  })
})

app.get('/api/users/:id', async (req, res) => {
  const id = Number(req.params.id)
  const user = await db.User.findByPk(id)

  if(user === null){
    res.status(404).send({
      message: 'User not found'
    })
  }

  res.status(200).send({
    message: 'user',
    users: user
  })
})

app.post('/api/users', async (req, res) => {
  const newUser = await db.User.create(req.body)
  res.status(201).send({
    message: 'new user created',
    user: newUser
  })
})

app.put('/api/users/:id', async(req, res) => {
  const id = Number(req.params.id)

  await db.User.update(req.body, {
    where: { id: id }       
  })
  // verificando se o ID existe
  const isUser = await db.User.findByPk(id)

  if(isUser === null) {
    res.send({
      message: 'userId not found'
    })
  }

  const userUpdated = await db.User.findAll({
    where: { id:id },
    attributes: ['name', 'email', 'password', 'date_of_birth']
  })

  res.status(200).send({
    message: 'user updated successfully',
    userUpdated: userUpdated,
  })
})

app.delete('/api/users/:id', async (req, res) => {
  const id = Number(req.params.id)
  const userDeleted = await db.User.destroy({
    where: { id:id },
  })

  if (userDeleted === null){
    res.status(400).send({
      message: 'User not found'
    })
  }

  res.status(200).send({
    message: 'user deleted'
  })
})

module.exports = app
