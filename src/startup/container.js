const {createContainer,asClass,asFunction,asValue} = require('awilix');

// CONFIGURACIÓN PRINCIPAL
const config = require('../config');
// MODELOS
const {UsuarioModel,ConfesionModel,ComentarioModel} = require('../models');
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

module.exports = container;