const {_err} = require('../helpers');
let _repository = null;

class BaseService {
    constructor(repository){
        _repository = repository;
    }
    async getAll(){
        return await _repository.getAll();
    }
    async getById(id){
        if(!id) _err(400,'id no enviado')
        const data = await _repository.getById(id);
        if(!data) _err(404,'datos no encontrados');
    }
    async create(entity){
        const data = await _repository.create(entity);
        return data;
    }
    async update(id,entity){
        if(!id) _err(400,'id no enviado')
        const data = await _repository.update(id,entity);
        if(!data) _err(404,'datos no encontrados');
    }
    async delete(id){
        if(!id) _err(400,'id no enviado')
        const data = await _repository.delete(id);
        if(!data) _err(404,'datos no encontrados');
    }
}

module.exports = BaseService;