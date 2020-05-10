let _UsuarioModel = null;
const BaseRepository = require('./base.repository');

class UsuarioRepository extends BaseRepository{
    constructor({UsuarioModel}){
        super(UsuarioModel);
        _UsuarioModel = UsuarioModel;
    }
    async getUsuarioByEmail(email){
        return await _UsuarioModel.find({email});
    }
}

module.exports = UsuarioRepository;