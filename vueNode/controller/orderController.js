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

    },
    // 近一个月
    orderyear1(req,resp){

    },
    // 近两个月
    orderyear2(req,resp){

    },
    // 近三个月
    orderyear3(req,resp){

    },
    // 今年
    orderthisyear(req,resp){

    },
    // 去年
    orderlastyear(req,resp){

    }
};
module.exports = orderControoller;