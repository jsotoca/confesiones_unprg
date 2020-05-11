const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
require('express-async-errors');
const {ErrorsMiddleware,notFoundMiddleware} = require('../middlewares');

module.exports = function({UsuarioRouter,ConfesionRouter,ComentarioRouter,AuthRouter}){
    const router = express.Router();
    const apiRouter = express.Router();

    apiRouter
        .use(express.urlencoded({extended:false}))
        .use(express.json())
        .use(cors())
        .use(helmet())
        .use(compression());

    apiRouter.use('/usuario',UsuarioRouter);
    apiRouter.use('/confesion',ConfesionRouter);
    apiRouter.use('/comentario',ComentarioRouter);
    apiRouter.use('/auth',AuthRouter);

    router.use('/v1/api/',apiRouter);
    router.use(notFoundMiddleware);
    router.use(ErrorsMiddleware);

    return router;
}