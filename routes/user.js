const express = require('express')
const router = express.Router()
const { User, userValidate} = require('../models/User')
const bcryptjs = require('bcryptjs')
const {check,validationResult} = require('express-validator')



router.get('/', async (req,res) => {
    try{
        let users = await  User.find({});
            res.json(users);
    }catch(err){
        console.log(err)
    }
})
router.post('/',[
    check('fullname').isLength({min:3}).withMessage('fullname error'),
    check('email').isLength({min:3}).withMessage('email error'),
    check('password').isLength({min:8}).withMessage('password'),
], async (req,res) => {
    try{
        const errors = validationResult(req)
        if(!errors.isEmpty()){
            
            res.json(errors)
        }else{
           let newUser = await new User ({
                fullname:req.body.fullname,
                email:req.body.email,
                password:req.body.password,
            })
            const saltRound =10;
            const salt = await bcryptjs.genSalt(saltRound);
            newUser.password = await bcryptjs.hash(newUser.password,salt); 
            const token = newUser.generateToken();
            await newUser.save()
            res.header('x-auth-token',token).json(newUser)
        }
    }catch(err){
        console.log(err)
    }
   
})

module.exports = router