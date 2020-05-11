const {sign} = require('jsonwebtoken');
const {SECRET_TOKEN} = require('../config');
module.exports = function(usuario){
    return sign({usuario},SECRET_TOKEN,{expiresIn:'4h'});
}