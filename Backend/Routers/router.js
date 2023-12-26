const express=require('express');
const router=express.Router();
const {getUser , postUser,getAllUsers}=require('../Controllers/control')
router.route("/getAllUsers").get(getAllUsers)
router.route("/getUser").post(getUser);
router.route("/signup").post(postUser);

module.exports=router;