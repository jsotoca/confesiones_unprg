const {_err} = require('../helpers');
const BaseService = require('./base.service');
let _ConfesionRepository = null;
let _ComentarioRepository = null;

class ComentarioService extends BaseService{
    constructor({ConfesionRepository,ComentarioRepository}){
        super(ComentarioRepository);
        _ConfesionRepository = ConfesionRepository;
        _ComentarioRepository = ComentarioRepository;
    }
    async getComentariosByConfesion(id){
        if(!id)_err(400,'id no enviado');
        const confesion = await _ConfesionRepository.getById(id);
        if(!confesion) _err(404,'confesion no encontrada');
        const {comentarios} = confesion;
        return comentarios;
    }

    async crearComentario(idConfesion,comentario){
        if(!id)_err(400,'id no enviado');
        const confesion = await _ConfesionRepository.getById(id);
        if(!confesion) _err(404,'confesion no encontrada');
        const comentarioCreado = await _ComentarioRepository.create(comentario);
        confesion.comentarios.push(comentarioCreado);
        return await _ConfesionRepository.update(idConfesion,{comentarios:confesion.comentarios});
    }
}

module.exports = ComentarioService;