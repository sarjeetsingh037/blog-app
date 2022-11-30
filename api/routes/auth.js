const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
// const saltRounds = 10;

const User = require('../models/User');


//Register
router.post("/register", async(req,res)=> {
    try {
            const salt =await bcrypt.genSalt(10);
           const hashedPass = await bcrypt.hash(req.body.password,salt); 
            const newUser = new User({
                username:req.body.username,
                email:req.body.email,
                password:hashedPass
            });
            const user = await newUser.save();
            res.status(200).json(user);
    }catch(err) {
        res.status(500).json(err);
        console.log(err);
    }
});


router.post("/login", async(req,res)=> {
    try {
        const user =await User.findOne({email:req.body.email});
        // !user && res.status(400).json("Wrong credentials");

        const validated = await bcrypt.compare(req.body.password, user.password);
        // !validated && res.status(400).json("Wrong credentials");
        const {password, ...others}= user._doc;
        if(!user) {
            res.status(400).json("Wrong credentials");
        } else if(!validated) {
            res.status(400).json("Wrong credentials");   
        } else {
             res.status(200).json(others);
        }

        
        // res.send(user);
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;