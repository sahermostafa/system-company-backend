const db = require('../config/database')
const {Event} = require('../models/Event')

let newEvent = [
    new Event({
        fullname:'sahermostafa',
        salary:'10000',
    }),
    new Event ({
        fullname:'samii',
        salary:'20000',
    }),

]
newEvent.forEach((event) => {
    event.save((err) => {
     if(err) {
         console.log(err)
     }
    }
    )
})