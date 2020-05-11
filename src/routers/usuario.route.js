const {Router}  = require('express');

module.exports = function({UsuarioController}){
    const router = Router();

    router.get('/',UsuarioController.getAll);
    router.get('/:id',UsuarioController.getById);
    router.put('/:id',UsuarioController.update);
    router.delete('/:id',UsuarioController.delete);

    return router;
}