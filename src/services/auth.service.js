const { _err,generateToken } = require('../helpers');
let _UsuarioService = null;

class AuthService {
    constructor({UsuarioService}){
        _UsuarioService = UsuarioService;
    }
    async signup(usuario){
        if(!usuario) _err(400,'usuario es requerido');
        const {email} = usuario;
        delete usuario.rol;
        const usuarioEncontrado = await _UsuarioService.getUsuarioByEmail(email);
        if(usuarioEncontrado) _err(401,'email ya registrado');
        else{
            const nuevoUsuario = await _UsuarioService.create(usuario);
            const token = generateToken(nuevoUsuario);
            return {
                nuevoUsuario,
                token
            };
        }
    }
    async signin(usuario){
        if(!usuario) _err(400,'usuario es requerido');
        const {email,password} = usuario;
        const usuarioEncontrado = await _UsuarioService.getUsuarioByEmail(email);
        if(!usuarioEncontrado) _err(400,'usuario y/o contraseña incorrectas');
        if(!usuarioEncontrado.compararPasswords(password)) _err(400,'usuario y/o contraseña incorrectas');
        const token = generateToken(usuarioEncontrado);
        return {
            usuarioEncontrado,
            token
        }
    }
}

module.exports = AuthService;