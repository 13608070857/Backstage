const express = require("express");
const router = express.Router();

const userController = require("../controller/userController");
const indexController = require("../controller/indexController");
const orderController = require("../controller/orderController");
const goodsController = require("../controller/goodsController");
const leaseController = require("../controller/leaseController");
const forumController = require("../controller/forumController");
const upFileController = require("../controller/upFileController");


router.get("/getUserInfo.do",userController.getUserInfo);
router.get("/deleteInfo.do",userController.deleteInfo);
router.get("/addUserInfo.do",userController.addUserInfo);
router.get("/modifyInfo.do",userController.modifyInfo);
router.get("/grade.do",userController.grade);
router.get("/grademodify",userController.grademodify);
router.get("/gradedelete",userController.gradedelete);
router.get("/addgrade",userController.addgrade);

router.get("/collection",userController.collection);

router.get("/staff.do",userController.staff);
router.get("/staffmodify",userController.staffmodify);
router.get("/staffdelete",userController.staffdelete);
router.get("/addstaff",userController.addstaff);

router.get("/index",indexController.index);
router.get("/Newest",indexController.Newest);
router.get("/xf",indexController.xf);
router.get("/Obtain",indexController.Obtain);
router.post("/login.do",indexController.login);
router.get("/jinru",indexController.jinru);
router.get("/tuichu",indexController.tuichu);

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
router.get("/addgoodsinfo.do",goodsController.getaddgoodsinfo);
router.get("/goodsmodify.do",goodsController.getgoodsmodify);
router.get("/catemodify.do",goodsController.getcatemodify);
router.get("/addcate.do",goodsController.getaddcate);
router.get("/detailmodify.do",goodsController.getdetailmodify);
router.get("/adddetail.do",goodsController.getadddetail);
router.get("/shopping",goodsController.shopping);

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
router.get("/addpay.do",orderController.getaddpay);

// ================ 租赁管理 =============
router.get("/leaseTransfer.do",leaseController.leaseTransfer);
router.get("/leaseModify.do",leaseController.leaseModify);
router.get("/leaseAdd.do",leaseController.addForum);


// ================ 论坛管理 =============
router.get("/getForumInfo.do",forumController.getForumInfo);
router.get("/extract.do",forumController.extract);
router.get("/setTop.do",forumController.setTop);
router.get("/deleteForum.do",forumController.deleteForum);

router.get("/getForumRep.do",forumController.getForumRep);
router.get("/deleteRep.do",forumController.deleteRep);

// ================ 图片上传 =============
router.post('/upFile.do',upFileController.upFile);

module.exports = router;
