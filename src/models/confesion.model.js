const {Schema,model} = require('mongoose');

const confesionSchema = new Schema({
    confesion:{type:String,required:[true,'la confesion es requerida']},
    votosPositivos:[{type:Boolean}],
    votosNegativos:[{type:Boolean}],
    autor:{
        type:Schema.Types.ObjectId,
        ref:'usuario',
        required:true
    },
    comentarios:[{
        type:Schema.Types.ObjectId,
        ref:'comentario'
    }],
    imagen:{type:String},
    anonimo:{type:Boolean,default:true},
    estado:{type:Boolean,default:true},
},{timestamps:true});


module.exports = model('confesion',confesionSchema);