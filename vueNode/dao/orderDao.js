const db = require("../config/dbpoolConfig");
const orderDao = {
    //-- 近一周 交易金额 订单数量 交易成功 交易失败 退款金额
    ordercord(req,resp){
        return new Promise(function (resolve,reject) {
            db.connect("SELECT IFNULL(SUM(go.o_price),0) AS o_price,IFNULL(SUM(CEILING(go.o_price/go.total)),0) AS total_price,(SELECT IFNULL(COUNT(is_pay),0) FROM goodsorder WHERE is_pay!=0 AND DATE_SUB(CURDATE(), INTERVAL 7 DAY) <= DATE(createtime)) AS cpay,(SELECT IFNULL(COUNT(is_pay),0) FROM goodsorder WHERE is_pay=0 AND DATE_SUB(CURDATE(), INTERVAL 7 DAY) <= DATE(createtime)) AS copay,(SELECT IFNULL(SUM(go.o_price),0) FROM goodsorder go WHERE go.isClosed=0 AND DATE_SUB(CURDATE(), INTERVAL 7 DAY) <= DATE(createtime)) AS sprice\n" +
                "FROM goodsorder go\n" +
                "WHERE DATE_SUB(CURDATE(), INTERVAL 7 DAY) <= DATE(createtime)",
                [],(err,data)=>{
                    if (!err){
                        resolve(data);
                    } else {
                        reject(data);
                    }
                })
        })
    },
    // 近一个月 交易金额 订单数量 交易成功 交易失败 退款金额
    ordercordyear1(req,resp){
        return new Promise(function (resolve,reject) {
            db.connect("SELECT IFNULL(SUM(go.o_price),0) AS o_price,IFNULL(SUM(CEILING(go.o_price/go.total)),0) AS total_price,(SELECT ifnull(COUNT(is_pay),0) FROM goodsorder WHERE is_pay!=0 and DATE_SUB(CURDATE(), INTERVAL 30 DAY) <= DATE(createtime)) AS cpay,(SELECT ifnull(COUNT(is_pay),0) FROM goodsorder WHERE is_pay=0 and DATE_SUB(CURDATE(), INTERVAL 30 DAY) <= DATE(createtime)) AS copay,(SELECT ifnull(SUM(go.o_price),0) FROM goodsorder go WHERE go.isClosed=0 and DATE_SUB(CURDATE(), INTERVAL 30 DAY) <= DATE(createtime)) AS sprice\n" +
                "FROM goodsorder go\n" +
                "WHERE DATE_SUB(CURDATE(), INTERVAL 30 DAY) <= DATE(createtime)",
                [],(err,data)=>{
                    if (!err){
                        resolve(data);
                    } else {
                        reject(data);
                    }
                })
        })
    },
    // 近两个月 交易金额 订单数量 交易成功 交易失败 退款金额
    ordercordyear2(req,resp){
        return new Promise(function (resolve,reject) {
            db.connect("SELECT IFNULL(SUM(go.o_price),0) AS o_price,IFNULL(SUM(CEILING(go.o_price/go.total)),0) AS total_price,(SELECT ifnull(COUNT(is_pay),0) FROM goodsorder WHERE is_pay!=0 and DATE_SUB(CURDATE(), INTERVAL 60 DAY) <= DATE(createtime)) AS cpay,(SELECT ifnull(COUNT(is_pay),0) FROM goodsorder WHERE is_pay=0 and DATE_SUB(CURDATE(), INTERVAL 60 DAY) <= DATE(createtime)) AS copay,(SELECT ifnull(SUM(go.o_price),0) FROM goodsorder go WHERE go.isClosed=0 and DATE_SUB(CURDATE(), INTERVAL 60 DAY) <= DATE(createtime)) AS sprice\n" +
                "FROM goodsorder go\n" +
                "WHERE DATE_SUB(CURDATE(), INTERVAL 60 DAY) <= DATE(createtime)",
                [],(err,data)=>{
                    if (!err){
                        resolve(data);
                    } else {
                        reject(data);
                    }
                })
        })
    },
    // 近三个月 交易金额 订单数量 交易成功 交易失败 退款金额
    ordercordyear3(req,resp){
        return new Promise(function (resolve,reject) {
            db.connect("SELECT IFNULL(SUM(go.o_price),0) AS o_price,IFNULL(SUM(CEILING(go.o_price/go.total)),0) AS total_price,(SELECT ifnull(COUNT(is_pay),0) FROM goodsorder WHERE is_pay!=0 and DATE_SUB(CURDATE(), INTERVAL 90 DAY) <= DATE(createtime)) AS cpay,(SELECT ifnull(COUNT(is_pay),0) FROM goodsorder WHERE is_pay=0 and DATE_SUB(CURDATE(), INTERVAL 90 DAY) <= DATE(createtime)) AS copay,(SELECT ifnull(SUM(go.o_price),0) FROM goodsorder go WHERE go.isClosed=0 and DATE_SUB(CURDATE(), INTERVAL 60 DAY) <= DATE(createtime)) AS sprice\n" +
                "FROM goodsorder go\n" +
                "WHERE DATE_SUB(CURDATE(), INTERVAL 90 DAY) <= DATE(createtime)",
                [],(err,data)=>{
                    if (!err){
                        resolve(data);
                    } else {
                        reject(data);
                    }
                })
        })
    },
    // 今年 交易金额 订单数量 交易成功 交易失败 退款金额
    ordercordthisyear(req,resp){
        return new Promise(function (resolve,reject) {
            db.connect("SELECT IFNULL(SUM(go.o_price),0) AS o_price,IFNULL(SUM(CEILING(go.o_price/go.total)),0) AS total_price,(SELECT ifnull(COUNT(is_pay),0) FROM goodsorder WHERE is_pay!=0 and YEAR(createtime)=YEAR(NOW())) AS cpay,(SELECT ifnull(COUNT(is_pay),0) FROM goodsorder WHERE is_pay=0 and YEAR(createtime)=YEAR(NOW())) AS copay,(SELECT ifnull(SUM(go.o_price),0) FROM goodsorder go WHERE go.isClosed=0 and YEAR(createtime)=YEAR(NOW())) AS sprice\n" +
                "FROM goodsorder go\n" +
                "WHERE YEAR(createtime)=YEAR(NOW())",
                [],(err,data)=>{
                    if (!err){
                        resolve(data);
                    } else {
                        reject(data);
                    }
                })
        })
    },
    // 去年 交易金额 订单数量 交易成功 交易失败 退款金额
    ordercordlastyear(req,resp){
        return new Promise(function (resolve,reject) {
            db.connect("SELECT IFNULL(SUM(go.o_price),0) AS o_price,IFNULL(SUM(CEILING(go.o_price/go.total)),0) AS total_price,(SELECT ifnull(COUNT(is_pay),0) FROM goodsorder WHERE is_pay!=0 AND YEAR(createtime)=YEAR(DATE_SUB(NOW(),INTERVAL 1 YEAR))) AS cpay,(SELECT ifnull(COUNT(is_pay),0) FROM goodsorder WHERE is_pay=0 AND YEAR(createtime)=YEAR(DATE_SUB(NOW(),INTERVAL 1 YEAR))) AS copay,(SELECT IFNULL(SUM(go.o_price),0) FROM goodsorder go WHERE go.isClosed=0 AND YEAR(createtime)=YEAR(DATE_SUB(NOW(),INTERVAL 1 YEAR))) AS sprice\n" +
                "FROM goodsorder go\n" +
                "WHERE YEAR(createtime)=YEAR(DATE_SUB(NOW(),INTERVAL 1 YEAR))",
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