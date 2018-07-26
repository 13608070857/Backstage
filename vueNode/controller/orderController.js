const orderDao = require("../dao/orderDao");
let dataInfo;
const orderControoller = {
    // 交易记录
    orderrecord(req,resp){
        console.log("请求已拦截");
        orderDao.ordercord()
            .then(function (data) {
                console.log(data);
                resp.send(data);
            })
    },
    // 近一周
    orderweek(req,resp){
        orderDao.ordercord()
            .then(function (data) {
                console.log(data);
                resp.send(data);
            })
    },
    // 近一个月
    orderyear1(req,resp){
        orderDao.ordercordyear1()
            .then(function (data) {
                console.log(data);
                resp.send(data);
            })
    },
    // 近两个月
    orderyear2(req,resp){
        orderDao.ordercordyear2()
            .then(function (data) {
                console.log(data);
                resp.send(data);
            })
    },
    // 近三个月
    orderyear3(req,resp){
        orderDao.ordercordyear3()
            .then(function (data) {
                console.log(data);
                resp.send(data);
            })
    },
    // 今年
    orderthisyear(req,resp){
        orderDao.ordercordthisyear()
            .then(function (data) {
                console.log(data);
                resp.send(data);
            })
    },
    orderthisyear2(req,resp){
        orderDao.ordercordthisyear2()
            .then(function (data) {
                console.log(data);
                resp.send(data);
            })
    },
    // 去年
    orderlastyear(req,resp){
        orderDao.ordercordlastyear()
            .then(function (data) {
                console.log(data);
                resp.send(data);
            })
    },
    //待付款
    orderispay(req,resp){
        orderDao.nopay()
            .then(function (data) {
                resp.send(data);
            })
    },
    //已付款
    orderispay2(req,resp){
        orderDao.nopay2()
            .then(function (data) {
                resp.send(data);
            })
    },
    //待发货
    orderispay3(req,resp){
        orderDao.nopay3()
            .then(function (data) {
                resp.send(data);
            })
    },
    // 订单处理
    getordermsg(req,resp){
        orderDao.ordermsg()
            .then(function (data) {
                let getAllData = data;
                console.log(data);
                orderDao.ordermsg().then(function(data) {
                    let getData = data;
                    dataInfo = {
                        getAllData: getAllData,
                        getData: getData
                    };
                    resp.send(dataInfo);
                })
            })
    },
    // 订单发货
    getonwith(req,resp){
        var oid=req.query.id;
        orderDao.onwith(oid)
            .then(function (data) {
                resp.send(data);
            })
    },
    // 订单处理 删除
    getowithdelete(req,resp){
        var deleteId = req.query.deleteId;
        orderDao.owithdelete(deleteId)
            .then(function (data) {
                resp.send(data);
            })
    },
    // 退款处理
    getrefund(req,resp){
        orderDao.refund()
            .then(function (data) {
                let getAllData = data;
                console.log(data);
                orderDao.refund().then(function(data) {
                    let getData = data;
                    dataInfo = {
                        getAllData: getAllData,
                        getData: getData
                    };
                    resp.send(dataInfo);
                })
            })
    },
    // 退款处理 退款
    getonrefund(req,resp){
        var oid=req.query.id;
        orderDao.onrefund(oid)
            .then(function (data) {
                resp.send(data);
            })
    },
    // 退款处理 删除
    getrefunddelete(req,resp){
        var deleteId = req.query.deleteId;
        orderDao.refunddelete(deleteId)
            .then(function (data) {
                resp.send(data);
            })
    },
    // 支付管理
    getpaymsg(req,resp){
        orderDao.paymsg()
            .then(function (data) {
                let getAllData = data;
                console.log(data);
                orderDao.paymsg().then(function(data) {
                    let getData = data;
                    dataInfo = {
                        getAllData: getAllData,
                        getData: getData
                    };
                    resp.send(dataInfo);
                })
            })
    },
    // 支付管理 启用
    getonpay(req,resp){
        var payid=req.query.id;
        orderDao.onpay(payid)
            .then(function (data) {
                resp.send(data);
            })
    },
    // 支付管理 禁用
    getunpay(req,resp){
        var payid=req.query.id;
        orderDao.unpay(payid)
            .then(function (data) {
                resp.send(data);
            })
    }
};
module.exports = orderControoller;