const express = require('express');
const router = express.Router();

router.get("/",(req,res)=>{
    res.send("User page")});
router.use("/login", express.static("./views/userlogin"));
router.get("/register",(req,res)=>{
    res.send("User register page")});


module.exports = router; 