const db = require('../models/index.js')

class Services {
  constructor(modelName){
    this.model = modelName
  }

  async getAll(){
    return await db[this.model].findAll()
  }

  async getById(id){
    return await db[this.model].findByPk(id)
  }

  async create(data){
    return await db[this.model].create(data)
  }

  async update(id, data){
    const updated = await db[this.model].update(data, {
      where: { id: id }       
    })

    if(updated[0] === null) return false
    
    return true
  }

  async delete(id) {
    return await db[this.model].destroy({
      where: { id:id },
    })
  }
}

module.exports = Services