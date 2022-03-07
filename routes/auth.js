const express = require('express')
const router = express.Router()
const { User} = require('../models/User')
const bcryptjs = require('bcryptjs')
const mongoose = require('mongoose')
const {check,validationResult} = require('express-validator')

router.post('/',[
    check('email').isLength({min:3}).withMessage('email error'),
    check('password').isLength({min:8}).withMessage('password'),
], async (req,res) => {
    try{
        const errors = validationResult(req)
        if(!errors.isEmpty()){
            res.json(errors)
        }else{
           let newUser = await User.findOne({email:req.body.email})
           console.log(newUser)
           if (!newUser){
           return res.status(404).json('Accounting Is Not Found');
        }
        const checks = await bcryptjs.compare(req.body.password,newUser.password)
        console.log(checks)
        if(!checks){
         return res.send('Accounting Is Not Found');
        }
        const token = newUser.generateToken();
        res.send(token);
     }
    }catch(err){
        console.log(err)
    }
   
})

module.exports = router