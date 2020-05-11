module.exports = function(req,res,next){
    return res.status(404).json({ok:false,message:'recurso no encontrado'});
}