const { Router } = require('express')
const UserController = require('../controllers/UserController.js')

const router = new Router()
const userController = new UserController()

router.get('/users', (req, res, next) => userController.getAll(req, res, next))
router.get('/users/:id', (req, res, next) => userController.getById(req, res, next))
router.post('/users', (req, res, next) => userController.create(req, res, next))
router.put('/users/:id', (req, res, next) => userController.update(req, res, next))
router.delete('/users/:id', (req, res, next) => userController.delete(req, res, next))

module.exports = router