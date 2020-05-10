const {Schema,model} = require('mongoose');
const {genSaltSync,hashSync,compareSync} = require('bcryptjs');

const rolesValidos = {
    values: ['admin','mod','user'],
    message: '{{PATH}} no es un rol valido'
}

const usuarioSchema = new Schema({
    nombres:{type:String,required:[true,'nombres son requeridos']},
    nick:{type:String,required:[true,'nick es requerido'],unique:true},
    email:{type:String,required:[true,'email es requerido'],unique:true},
    password:{type:String,required:[true,'la contraseña es requerida']},
    avatar:{type:String,default:'sin_avatar.png'},
    role:{type:String,default:'user',enum:rolesValidos},
    estado:{type:Boolean,default:true},
},{timestamps:true});

usuarioSchema.pre('save',function(next){
    if(!this.isModified('password')) return next;
    const salt = genSaltSync(10);
    const passwordHasheada = hashSync(this.password,salt);
    this.password = passwordHasheada();
    next();
});

usuarioSchema.methods.toJSON = function(){
    let usuario = this.toObject();
    delete usuario.password;
    return usuario;
}

usuarioSchema.methods.compararPasswords = function(password){
    return compareSync(password,this.password);
}



module.exports = model('usuario',usuarioSchema);