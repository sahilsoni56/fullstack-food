const express = require("express");
const router = express.Router()
const User = require("../models/user")
const {body , validationResult} = require("express-validator");
const session = require("express-session");
const bcrypt = require("bcrypt")
router.use(
    session({
      secret: "dbdbdfdfdfndndf", // Change this to a secret key for session encryption
      resave: false,
      saveUninitialized: false,
    })
  );



router.post("/createuser",[
body("email").isEmail(),
body("password").isLength({min:5}),
]

,async (req,res) =>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    }
 try{

    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    await User.create({
        name :req.body.name,
        password:hashedPassword,
        email:req.body.email,
        location:req.body.location
    })
    res.json({success : true})
}catch(e){
    console.log(e)
    res.json({success : false})
 }
})

router.post("/checklogin", (req, res) => {
    try {
      // Check if user is logged in by verifying the presence of user_id in the session
      if (req.session.user_id) {
        res.json({ isLoggedIn: true, userId: req.session.user_id });
      } else {
        res.json({ isLoggedIn: false });
      }
    } catch (e) {
      console.error(e);
      res.status(500).json({ success: false, error: "Internal server error" });
    }
  });


router.post("/login",[
    body("email").isEmail(),
    body("password").isLength({min:5}),
    ],async (req,res) =>{
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(500).json({errors: errors.array()})
        }
    try{
       const user = await User.findOne({email: req.body.email})
       if(!user){
           return res.status(400).json({errors : "try logging with another email"})

       }

      if(await bcrypt.compare(req.body.password,user.password)){
       return res.status(400).json({errors : "password wrong"})
      }
      req.session.user_id = user._id;
       res.json({success : true})
   }catch(e){
       console.log(e)
       res.json({success : false})
    }
   })



module.exports = router