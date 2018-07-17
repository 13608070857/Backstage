const express = require("express");
const router = express.Router();

const userController = require("../controller/userController");


router.get("/getUserInfo.do",userController.getUserInfo);


module.exports = router;
