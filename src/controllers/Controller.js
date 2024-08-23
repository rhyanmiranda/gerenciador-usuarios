class Controller {
  constructor(servicesName){
    this.servicesName = servicesName
  }

  async getAll(req, res){
    const list = await this.servicesName.getAll()
    res.status(200).send({
      message: 'list users',
      users: list
    })
  }

  async getById(req, res){
    const id = req.params.id
    const user = await this.servicesName.getById(id)

    if(user === null) {
      res.status(404).send({
        message: 'User not found'
      })
    }


    res.status(200).send({
      message: 'user by id',
      user: user
    })
  }

  async create(req, res){
    const data = req.body
    const createdUser = await this.servicesName.create(data)
    res.status(201).send({
      message: 'user created',
      newUser: createdUser
    })
  }

  async update(req, res){
    const id = req.params.id
    const data = req.body
    const updatedUser = await this.servicesName.update(id, data)

    if(!updatedUser){
      res.status(400).send({
        message:'Error updating'
      })
    }
    res.status(200).send({
      message: 'updated successfully'
    })
  }

  async delete(req, res){
    const id = req.params.id
    const deleted = await this.servicesName.delete(id)

   if (deleted === 0) {
    res.status(404).send({
      message: 'failed to delete'
    })
   }

    res.status(201).send({
      message: 'Deleted'
    })
  }
  
}

module.exports = Controller