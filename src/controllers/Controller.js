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
    const registerById = await this.servicesName.getById(id)

    if(registerById === null) {
      res.status(404).send({
        message: 'User not found'
      })
    }

    res.status(200).send({
      message: 'list by id',
      registerById: registerById
    })
  }

  async create(req, res){
    const data = req.body
    const created = await this.servicesName.create(data)
    res.status(201).send({
      message: 'new register created',
      new: created
    })
  }

  async update(req, res){
    const id = req.params.id
    const data = req.body
    const updated = await this.servicesName.update(id, data)

    if(!updated){
      res.status(400).send({
        message:'Error updating',
      })
    }
    res.status(200).send({
      message: 'updated successfully',
      updated: updated
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