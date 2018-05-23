const config = {
  prodcution:{
    SECRET:process.env.SECRET,
    DATABASE: process.env.MONOGDB_URI,
    PORT: process.env.PORT
  },
  default:{
    SECRET:'supersecret',
    DATABASE: 'mongodb://localhost:27017/tgd_app',
    PORT: 3000
  }
}
exports.get = function get(env){
  return config[env] || config.default
}