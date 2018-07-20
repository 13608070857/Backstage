const db = require("../config/dbpoolConfig");
const orderDao = {
    //-- 近一周 交易金额 订单数量 交易成功 交易失败 退款金额
    ordercord(req,resp){
        return new Promise(function (resolve,reject) {
            db.connect("SELECT SUM(go.o_price) AS o_price,SUM(CEILING(go.o_price/go.total)) AS total_price,(SELECT COUNT(is_pay) FROM goodsorder WHERE is_pay!=0) AS cpay,(SELECT COUNT(is_pay) FROM goodsorder WHERE is_pay=0) AS copay,SUM(go.o_price) AS sprice\n" +
                "FROM goodsorder go\n" +
                "WHERE DATE_SUB(CURDATE(), INTERVAL 7 DAY) <= DATE(go.createtime) OR go.isClosed=0",
                [],(err,data)=>{
                    if (!err){
                        resolve(data);
                    } else {
                        reject(data);
                    }
                })
        })
    }
};
module.exports = orderDao;