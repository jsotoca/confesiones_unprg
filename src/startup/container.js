const {createContainer,asClass,asFunction,asValue} = require('awilix');

// CONFIGURACIÓN PRINCIPAL
const config = require('../config');
// MODELOS
const {UsuarioModel,ConfesionModel,ComentarioModel} = require('../models');
// REPOSITORIOS
const {UsuarioRepository,ConfesionRepository,ComentarioRepository} = require('../repositories');


const container = createContainer();

container
    .register({
        config:asValue(config)
    })
    .register({
        UsuarioModel:asValue(UsuarioModel),
        ConfesionModel:asValue(ConfesionModel),
        ComentarioModel:asValue(ComentarioModel)
    })
    .register({
        UsuarioRepository:asClass(UsuarioRepository).singleton(),
        ConfesionRepository:asClass(ConfesionRepository).singleton(),
        ComentarioRepository:asClass(ComentarioRepository).singleton(),
    })

module.exports = container;