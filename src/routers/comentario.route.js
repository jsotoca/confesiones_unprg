const {Router}  = require('express');

module.exports = function({ComentarioController}){
    const router = Router();

    router.get('/',ComentarioController.getAll);
    router.get('/:id',ComentarioController.getById);
    router.post('/:confesion',ComentarioController.create);
    router.put('/:id',ComentarioController.update);
    router.delete('/:id',ComentarioController.delete);

    return router;
}