if(process.env.NODE_ENV !== 'production') require('dotenv').config();

module.exports ={
    PORT:process.env.PORT,
    MONGO_URI:process.env.MONGO_URI,
    SECRET_TOKEN:process.env.SECRET_TOKEN,
    APLICACTION_NAME:'Confesiones unprg'
}