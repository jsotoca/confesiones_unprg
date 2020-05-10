let _ConfesionModel = null;
const BaseRepository = require('./base.repository');

class ConfesionRepository extends BaseRepository{
    constructor({ConfesionModel}){
        super(ConfesionModel);
        _ConfesionModel = ConfesionModel;
    }
    async getConfesionByAutor(autor){
        return await _ConfesionModel.find({autor});
    }
}

module.exports = ConfesionRepository;