const {_err} = require('../helpers');
const BaseService = require('./base.service');
let _ConfesionRepository = null;

class ConfesionService extends BaseService{
    constructor({ConfesionRepository}){
        super(ConfesionRepository);
        _ConfesionRepository = ConfesionRepository;
    }
    async getConfesionesByAutor(autor){
        return await _ConfesionRepository.getConfesionesByAutor(autor);
    }
    async votarPositivoConfesion(id){
        if(!id) _err(400,'id no enviado');
        const confesion = await _ConfesionRepository.getById(id);
        if(!id) _err(404,'confesion no encontrada');
        confesion.votosPositivos.push(true);
        return await _ConfesionRepository.update(id,{votosPositivos:confesion.votosPositivos});
    }
    async votarNegativoConfesion(id){
        if(!id) _err(400,'id no enviado');
        const confesion = await _ConfesionRepository.getById(id);
        if(!id) _err(404,'confesion no encontrada');
        confesion.votosNegativos.push(true);
        return await _ConfesionRepository.update(id,{votosNegativos:confesion.votosNegativos});
    }
}

module.exports = ConfesionService;