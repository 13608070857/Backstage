const express = require("express");
const router = express.Router();

const userController = require("../controller/userController");
const indexController = require("../controller/indexController");
const orderController = require("../controller/orderController");


router.get("/getUserInfo.do",userController.getUserInfo);

router.get("/index",indexController.index);

// ================ 交易管理 ====================
router.get("/orderrecord.do",orderController.orderrecord);
router.get("/orderweek.do",orderController.orderweek);
router.get("/orderyear1.do",orderController.orderyear1);
router.get("/orderyear2.do",orderController.orderyear2);
router.get("/orderyear3.do",orderController.orderyear3);
router.get("/orderthisyear.do",orderController.orderthisyear);
router.get("/orderlastyear.do",orderController.orderlastyear);

// =================== 租赁管理 ==================
router.get("/LeaseTransfer",(req,resp)=>{
    console.log(resp);
})

module.exports = router;
