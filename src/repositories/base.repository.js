let _model = null;

class BaseRepository {
    constructor(model){
        _model = model;
    }
    async getAll(){
        return await _model.find({});
    }
    async getById(id){
        return await _model.findById(id);
    }
    async create(entity){
        return await _model.create(entity);
    }
    async update(entity,id){
        return await _model.findByIdAndUpdate(id,entity,{new:true,runValidators:true});
    }
    async delete(id){
        return await _model.findByIdAndUpdate(id,{estado:false},{new:true,runValidators:true});
    }
}

module.exports = BaseRepository;