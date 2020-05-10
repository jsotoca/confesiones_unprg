let _UsuarioService = null;

class UsuarioController{
    constructor({UsuarioService}){
        _UsuarioService = UsuarioService;
    }
    async getAll(req,res){
        return res.status(200).json({
            ok:true,
            usuarios:await _UsuarioService.getAll()
        });
    }
    async getById(req,res){
        const {id} = req.params;
        return res.status(200).json({
            ok:true,
            usuario:await _UsuarioService.getById(id)
        });
    }
    async update(req,res){
        const {id} = req.params;
        const {body} = req;

        return res.status(200).json({
            ok:true,
            usuario:await _UsuarioService.update(id,body)
        });
    }
    async delete(req,res){
        const {id} = req.params;
        return res.status(200).json({
            ok:true,
            usuario:await _UsuarioService.delete(id)
        });
    }
}

module.exports = UsuarioController;