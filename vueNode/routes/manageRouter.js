const express = require("express");
const router = express.Router();

const userController = require("../controller/userController");
const indexController = require("../controller/indexController");
const orderController = require("../controller/orderController");
const goodsController = require("../controller/goodsController");
const leaseController = require("../controller/leaseController");


router.get("/getUserInfo.do",userController.getUserInfo);
router.get("/grade.do",userController.grade);
router.get("/deleteInfo.do",userController.deleteInfo);
router.get("/addUserInfo.do",userController.addUserInfo);
router.get("/modifyInfo.do",userController.modifyInfo);

router.get("/index",indexController.index);
router.get("/Newest",indexController.Newest);
router.get("/xf",indexController.xf);
router.get("/Obtain",indexController.Obtain);
router.post("/login.do",indexController.login);

// ============== 商品管理 ==============
router.get("/getgoodsmsg.do",goodsController.getallgoods);
router.get("/getgoodcategory.do",goodsController.getcategory);
router.get("/getgoodcomments.do",goodsController.getcomments);
router.get("/goodsdelete.do",goodsController.getgoodsdelete);
router.get("/onstatus.do",goodsController.getonstatus);
router.get("/unstatus.do",goodsController.getunstatus);
router.get("/oncatestatus.do",goodsController.getoncatestatus);
router.get("/uncatestatus.do",goodsController.getuncatestatus);
router.get("/delcate.do",goodsController.getdelcate);
router.get("/delcom.do",goodsController.getdelcom);
router.get("/getgoodsdetail.do",goodsController.getgoodsdetail);
router.get("/detaildelete.do",goodsController.getdetaildelete);

// =============== 交易管理 =============
router.get("/orderrecord.do",orderController.orderrecord);
router.get("/orderweek.do",orderController.orderweek);
router.get("/orderyear1.do",orderController.orderyear1);
router.get("/orderyear2.do",orderController.orderyear2);
router.get("/orderyear3.do",orderController.orderyear3);
router.get("/orderthisyear.do",orderController.orderthisyear);
router.get("/orderthisyear2.do",orderController.orderthisyear2);
router.get("/orderlastyear.do",orderController.orderlastyear);
router.get("/orderispay.do",orderController.orderispay);
router.get("/orderispay2.do",orderController.orderispay2);
router.get("/orderispay3.do",orderController.orderispay3);
router.get("/getordermsg.do",orderController.getordermsg);
router.get("/onwith.do",orderController.getonwith);
router.get("/owithdelete.do",orderController.getowithdelete);
router.get("/getrefund.do",orderController.getrefund);
router.get("/onrefund.do",orderController.getonrefund);
router.get("/refunddelete.do",orderController.getrefunddelete);
router.get("/getpaymsg.do",orderController.getpaymsg);
router.get("/onpay.do",orderController.getonpay);
router.get("/unpay.do",orderController.getunpay);

// ================ 租赁管理 =============
router.get("/leaseTransfer.do",leaseController.leaseTransfer);

module.exports = router;
