const express = require("express");
const router = express.Router();

const userController = require("../controller/userController");
const indexController = require("../controller/indexController");
const orderController = require("../controller/orderController");
const goodsController = require("../controller/goodsController");


router.get("/getUserInfo.do",userController.getUserInfo);
router.get("/deleteInfo.do",userController.deleteInfo);

router.get("/index",indexController.index);
router.get("/Newest",indexController.Newest);
router.get("/xf",indexController.xf);

// ============== 商品管理 ==============
router.get("/getgoodsmsg.do",goodsController.getallgoods);
router.get("/getgoodcategory.do",goodsController.getcategory);
router.get("/getgoodcomments.do",goodsController.getcomments);

// =============== 交易管理 =============
router.get("/orderrecord.do",orderController.orderrecord);
router.get("/orderweek.do",orderController.orderweek);
router.get("/orderyear1.do",orderController.orderyear1);
router.get("/orderyear2.do",orderController.orderyear2);
router.get("/orderyear3.do",orderController.orderyear3);
router.get("/orderthisyear.do",orderController.orderthisyear);
router.get("/orderlastyear.do",orderController.orderlastyear);

// ================ 租赁管理 =============
router.get("/LeaseTransfer.do",(req,resp)=>{

});

module.exports = router;
