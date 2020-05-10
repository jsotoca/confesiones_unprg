const {Schema,model} = require('mongoose');

const comentarioSchema = new Schema({
    comentario:{type:String,required:[true,'el comentario es requerido']},
    autor:{
        type:Schema.Types.ObjectId,
        ref:'usuario',
        required:true
    },
    anonimo:{type:Boolean,default:true},
    estado:{type:Boolean,default:true},
},{timestamps:true});


module.exports = model('comentario',comentarioSchema);