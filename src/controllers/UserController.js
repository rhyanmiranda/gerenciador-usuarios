const UserServices = require('../services/UserServices.js')
const Controller = require('./Controller.js')

const userService = new UserServices()

class UserController extends Controller {
  constructor(){
    super(userService)
  }
}

module.exports = UserController