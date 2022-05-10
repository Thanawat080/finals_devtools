const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://jamew000:0876052422@cluster0.exwhk.mongodb.net/devtools', {
  useNewUrlParser: true,
}).then(()=>{
    
}).catch((eer)=>{
    console.log('someting wrong', eer)
})