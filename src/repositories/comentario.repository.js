let _ComentarioModel = null;
const BaseRepository = require('./base.repository');

class ComentarioRepository extends BaseRepository{
    constructor({ComentarioModel}){
        super(ComentarioModel);
        _ComentarioModel = ComentarioModel;
    }
}

module.exports = ComentarioRepository;