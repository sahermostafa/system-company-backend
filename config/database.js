const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/GPF',(err) => {
    if(err){
        console.log(err)
    }else {
        console.log('success...')
    }
})