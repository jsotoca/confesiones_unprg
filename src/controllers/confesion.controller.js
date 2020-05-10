let _ConfesionService = null;

class ConfesionController{
    constructor({ConfesionService}){
        _ConfesionService = ConfesionService;
    }
    async getAll(req,res){
        return res.status(200).json({
            ok:true,
            confesiones:await _ConfesionService.getAll()
        });
    }
    async getById(req,res){
        const {id} = req.params;
        return res.status(200).json({
            ok:true,
            confesion:await _ConfesionService.getById(id)
        });
    }
    async getConfesionesByAutor(req,res){
        const {autor} = req.params;
        return res.status(200).json({
            ok:true,
            confesion:await _ConfesionService.getConfesionesByAutor(autor)
        });
    }
    async create(req,res){
        const {body} = req;
        return res.status(200).json({
            ok:true,
            confesion:await _ConfesionService.create(body)
        });
    }
    async update(req,res){
        const {id} = req.params;
        const {body} = req;

        return res.status(200).json({
            ok:true,
            confesion:await _ConfesionService.update(id,body)
        });
    }
    async delete(req,res){
        const {id} = req.params;
        return res.status(200).json({
            ok:true,
            confesion:await _ConfesionService.delete(id)
        });
    }
    async votarPositivoConfesion(req,res){
        const {id} = req.params;
        return res.status(200).json({
            ok:true,
            confesion:await _ConfesionService.votarPositivoConfesion(id)
        });
    }
    async votarNegativoConfesion(req,res){
        const {id} = req.params;
        return res.status(200).json({
            ok:true,
            confesion:await _ConfesionService.votarNegativoConfesion(id)
        });
    }
}

module.exports = ConfesionController;