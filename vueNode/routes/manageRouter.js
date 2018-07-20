const express = require("express");
const router = express.Router();

const userController = require("../controller/userController");
const indexController = require("../controller/indexController");
const orderController = require("../controller/orderController");


router.get("/getUserInfo.do",userController.getUserInfo);

router.get("/index",indexController.index);

// ================ 交易管理 ====================
router.get("/orderrecord.do",orderController.orderrecord);


module.exports = router;
