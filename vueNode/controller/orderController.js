const orderDao = require("../dao/orderDao");
const orderControoller = {
    // 交易记录
    orderrecord(req,resp){
        console.log("请求已拦截");
        orderDao.ordercord()
            .then(function (data) {
                console.log(data);
            })
    }
};
module.exports = orderControoller;