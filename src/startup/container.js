const {createContainer,asClass,asFunction,asValue} = require('awilix');

// CONFIGURACIÓN PRINCIPAL
const config = require('../config');
const router = require('../routers');
const server = require('.');
// MODELOS
const {UsuarioModel,ConfesionModel,ComentarioModel} = require('../models');
// REPOSITORIOS
const {UsuarioRepository,ConfesionRepository,ComentarioRepository} = require('../repositories');
// SERVICIOS
const {UsuarioService,ConfesionService,ComentarioService} = require('../services');
// CONTROLADORES
const {UsuarioController,ConfesionController,ComentarioController} = require('../controllers');
// RUTAS
const {UsuarioRouter,ConfesionRouter,ComentarioRouter} = require('../routers/index.route');

const container = createContainer();

container
    .register({
        config:asValue(config),
        router:asFunction(router).singleton(),
        server:asClass(server).singleton()
    })
    .register({
        UsuarioModel:asValue(UsuarioModel),
        ConfesionModel:asValue(ConfesionModel),
        ComentarioModel:asValue(ComentarioModel)
    })
    .register({
        UsuarioRepository:asClass(UsuarioRepository).singleton(),
        ConfesionRepository:asClass(ConfesionRepository).singleton(),
        ComentarioRepository:asClass(ComentarioRepository).singleton()
    })
    .register({
        UsuarioService:asClass(UsuarioService).singleton(),
        ConfesionService:asClass(ConfesionService).singleton(),
        ComentarioService:asClass(ComentarioService).singleton()
    })
    .register({
        UsuarioController:asClass(UsuarioController.bind(UsuarioController)).singleton(),
        ConfesionController:asClass(ConfesionController.bind(ConfesionController)).singleton(),
        ComentarioController:asClass(ComentarioController.bind(ComentarioController)).singleton()
    })
    .register({
        UsuarioRouter:asFunction(UsuarioRouter).singleton(),
        ComentarioRouter:asFunction(ComentarioRouter).singleton(),
        ConfesionRouter:asFunction(ConfesionRouter).singleton()
    })

module.exports = container;