const data = require('./public/mock/index.json')
module.exports = {
  lintOnSave: false,
  devServer: {
    before: app => {
     app.get('/data',(req,res)=>{
       res.json(data)
     })
    }
  }
}