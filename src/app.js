const express = require('express')
const data = require('./data/data.js')

const app = express()
app.use(express.json())

app.get('/api/users', (req, res) => {
  res.status(200).send({
    message: 'list users',
    users: data
  })
})

app.post('/api/users', (req, res) => {
  const newUser = data.push(req.body)
  res.status(201).send({
    message: 'new user created',
    user: newUser
  })
})

app.put('/api/users/:id', (req, res) => {
  const id = Number(req.params.id)
  const index = data.findIndex(user => user.id === id)
  data[index] = {...data[index], ...req.body}

  res.send({
    message: 'user found',
    user: data[index]
  })
})

app.delete('/api/users/:id', (req, res) => {
  const id = Number(req.params.id)
  const index = data.findIndex(user => user.id === id)
  const userDeleted = data.splice(index, 1)

  res.status(200).send({
    message: 'user deleted',
    user: userDeleted
  })
})

module.exports = app
