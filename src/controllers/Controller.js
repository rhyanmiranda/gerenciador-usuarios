class Controller {
  constructor(servicesName){
    this.servicesName = servicesName
  }

  async getAll(req, res, next){
    try {
      const list = await this.servicesName.getAll()
      res.status(200).send({
        message: 'list',
        users: list
      })
    } catch (error) {
       next(error)
    }
  }

  async getById(req, res, next){
    try {
      const id = req.params.id
      const registerById = await this.servicesName.getById(id)
  
      if(registerById === null) {
        return res.status(404).json({
          message: 'not found'
        })
      }
      res.status(200).send({
        message: 'list by id',
        registerById: registerById
      })
    } catch (error) {
       next(error)
    }
  }

  async create(req, res, next){
    try {
      const data = req.body
      const created = await this.servicesName.create(data)
      res.status(201).send({
        message: 'new register created',
        new: created
      })
    } catch (error) {
       next(error)
    }
  }

  async update(req, res, next){
    try {
      const id = req.params.id
      const data = req.body
      const updated = await this.servicesName.update(id, data)
  
      if(!updated){
        return res.status(400).json({
          message:'Error updating',
        })
      }
      res.status(200).send({
        message: 'updated successfully',
        updated: updated
      })
    } catch (error) {
       next(error)
    }
  }

  async delete(req, res, next){
    try {
      const id = req.params.id
      const deleted = await this.servicesName.delete(id)
  
     if (deleted === 0) {
      return res.status(404).json({
        message: 'Not Found',
      })
     }
  
      res.status(201).send({
        message: 'Deleted successfully'
      })
    } catch (error) {
      next(error)
    }
  }
}

module.exports = Controller