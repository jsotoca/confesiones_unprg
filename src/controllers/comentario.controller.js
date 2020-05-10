let _ComentarioService = null;

class ComentarioController{
    constructor({ComentarioService}){
        _ComentarioService = ComentarioService;
    }
    async getAll(req,res){
        return res.status(200).json({
            ok:true,
            comentarios:await _ComentarioService.getAll()
        });
    }
    async getById(req,res){
        const {id} = req.params;
        return res.status(200).json({
            ok:true,
            comentario:await _ComentarioService.getById(id)
        });
    }
    async getComentariosByConfesion(req,res){
        const {confesion} = req.params;
        return res.status(200).json({
            ok:true,
            comentario:await _ComentarioService.getComentariosByConfesion(confesion)
        });
    }
    async create(req,res){
        const {confesion} = req.params;
        const {body} = req;

        return res.status(200).json({
            ok:true,
            comentario:await _ComentarioService.crearComentario(confesion,body)
        });
    }
    async update(req,res){
        const {id} = req.params;
        const {body} = req;

        return res.status(200).json({
            ok:true,
            comentario:await _ComentarioService.update(id,body)
        });
    }
    async delete(req,res){
        const {id} = req.params;
        return res.status(200).json({
            ok:true,
            comentario:await _ComentarioService.delete(id)
        });
    }
}

module.exports = ComentarioController;