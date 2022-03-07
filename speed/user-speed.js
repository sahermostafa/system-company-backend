const db = require('../config/database')
const {User} = require('../models/User')

let newUser = [
    new User({
        fullname:'sahermostafa',
        email:'saher@gmail.com',
        password:'1aaafddsssssaa',
    }),
    new User ({
        fullname:'samii',
        email:'sami@gmail.com',
        password:'qqqqsdcdsssss',
    }),

]
newUser.forEach((user) => {
    user.save((err) => {
     if(err) {
         console.log(err)
     }
    }
    )
})