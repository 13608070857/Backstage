const orderDao = require("../dao/orderDao");
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
    }
};
module.exports = orderControoller;