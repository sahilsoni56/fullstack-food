const express = require("express");
const router = express.Router()

router.post("/foodData",(req,res)=>{
    try{
        res.send([global.fooditems ,global.foodcategory])
    }catch(e){
        console.error(e.message)
    }
})

module.exports = router;