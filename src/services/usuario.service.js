const BaseService = require('./base.service');
let _UsuarioRepository = null;

class UsuarioService extends BaseService{
    constructor({UsuarioRepository}){
        super(UsuarioRepository);
        _UsuarioRepository = UsuarioRepository;
    }
    async getUsuarioByEmail(email){
        return await _UsuarioRepository.getUsuarioByEmail(email);
    }
}

module.exports = UsuarioService;