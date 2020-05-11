const {Router}  = require('express');

module.exports = function({ConfesionController}){
    const router = Router();

    router.get('/',ConfesionController.getAll);
    router.get('/:id',ConfesionController.getById);
    router.get('/autor/:autor',ConfesionController.getConfesionesByAutor);
    router.post('/',ConfesionController.create);
    router.put('/:id',ConfesionController.update);
    router.put('/positivo/:id',ConfesionController.votarPositivoConfesion);
    router.put('/negativo/:id',ConfesionController.votarNegativoConfesion);
    router.delete('/:id',ConfesionController.delete);

    return router;
}