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
    // 今年1到12月份的所有订单
    ordercordthisyear2(req,resp){
        return new Promise(function (resolve,reject) {
            db.connect("SELECT \n" +
                "IFNULL(SUM(o_price),0) AS 'a',(SELECT \n" +
                "IFNULL(SUM(o_price),0)\n" +
                "FROM goodsorder\n" +
                "WHERE YEAR(createtime)=YEAR(NOW()) AND\n" +
                "CASE MONTH(createtime) WHEN '2' THEN 2 ELSE 0 END) AS 'b',\n" +
                "(SELECT \n" +
                "IFNULL(SUM(o_price),0)\n" +
                "FROM goodsorder\n" +
                "WHERE YEAR(createtime)=YEAR(NOW()) AND\n" +
                "CASE MONTH(createtime) WHEN '3' THEN 3 ELSE 0 END) AS 'c',\n" +
                "(SELECT \n" +
                "IFNULL(SUM(o_price),0)\n" +
                "FROM goodsorder\n" +
                "WHERE YEAR(createtime)=YEAR(NOW()) AND\n" +
                "CASE MONTH(createtime) WHEN '4' THEN 4 ELSE 0 END) AS 'd',\n" +
                "(SELECT \n" +
                "IFNULL(SUM(o_price),0)\n" +
                "FROM goodsorder\n" +
                "WHERE YEAR(createtime)=YEAR(NOW()) AND\n" +
                "CASE MONTH(createtime) WHEN '5' THEN 5 ELSE 0 END) AS 'e',\n" +
                "(SELECT \n" +
                "IFNULL(SUM(o_price),0)\n" +
                "FROM goodsorder\n" +
                "WHERE YEAR(createtime)=YEAR(NOW()) AND\n" +
                "CASE MONTH(createtime) WHEN '6' THEN 6 ELSE 0 END) AS 'f',\n" +
                "(SELECT \n" +
                "IFNULL(SUM(o_price),0)\n" +
                "FROM goodsorder\n" +
                "WHERE YEAR(createtime)=YEAR(NOW()) AND\n" +
                "CASE MONTH(createtime) WHEN '7' THEN 7 ELSE 0 END) AS 'i',\n" +
                "(SELECT \n" +
                "IFNULL(SUM(o_price),0)\n" +
                "FROM goodsorder\n" +
                "WHERE YEAR(createtime)=YEAR(NOW()) AND\n" +
                "CASE MONTH(createtime) WHEN '8' THEN 8 ELSE 0 END) AS 'j',\n" +
                "(SELECT \n" +
                "IFNULL(SUM(o_price),0)\n" +
                "FROM goodsorder\n" +
                "WHERE YEAR(createtime)=YEAR(NOW()) AND\n" +
                "CASE MONTH(createtime) WHEN '9' THEN 9 ELSE 0 END) AS 'k',\n" +
                "(SELECT \n" +
                "IFNULL(SUM(o_price),0)\n" +
                "FROM goodsorder\n" +
                "WHERE YEAR(createtime)=YEAR(NOW()) AND\n" +
                "CASE MONTH(createtime) WHEN '10' THEN 10 ELSE 0 END) AS 'l',\n" +
                "(SELECT \n" +
                "IFNULL(SUM(o_price),0)\n" +
                "FROM goodsorder\n" +
                "WHERE YEAR(createtime)=YEAR(NOW()) AND\n" +
                "CASE MONTH(createtime) WHEN '11' THEN 11 ELSE 0 END) AS 'm',\n" +
                "(SELECT \n" +
                "IFNULL(SUM(o_price),0)\n" +
                "FROM goodsorder\n" +
                "WHERE YEAR(createtime)=YEAR(NOW()) AND\n" +
                "CASE MONTH(createtime) WHEN '12' THEN 12 ELSE 0 END) AS 'n'\n" +
                "FROM goodsorder\n" +
                "WHERE YEAR(createtime)=YEAR(NOW()) AND\n" +
                "CASE MONTH(createtime) WHEN '1' THEN 1 ELSE 0 END\n",
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
    },
    //待付款
    nopay(req,resp){
        return new Promise(function (resolve,reject) {
            db.connect("SELECT \n" +
                "IFNULL(COUNT(is_pay),0) AS '一',(SELECT \n" +
                "IFNULL(COUNT(is_pay),0)\n" +
                "FROM goodsorder\n" +
                "WHERE YEAR(createtime)=YEAR(NOW()) AND\n" +
                "CASE MONTH(createtime) WHEN '2' THEN 2 ELSE 0 END AND is_pay=1) AS '二',\n" +
                "(SELECT \n" +
                "IFNULL(COUNT(is_pay),0)\n" +
                "FROM goodsorder\n" +
                "WHERE YEAR(createtime)=YEAR(NOW()) AND\n" +
                "CASE MONTH(createtime) WHEN '3' THEN 3 ELSE 0 END AND is_pay=1) AS '三',\n" +
                "(SELECT \n" +
                "IFNULL(COUNT(is_pay),0)\n" +
                "FROM goodsorder\n" +
                "WHERE YEAR(createtime)=YEAR(NOW()) AND\n" +
                "CASE MONTH(createtime) WHEN '4' THEN 4 ELSE 0 END AND is_pay=1) AS '四',\n" +
                "(SELECT \n" +
                "IFNULL(COUNT(is_pay),0)\n" +
                "FROM goodsorder\n" +
                "WHERE YEAR(createtime)=YEAR(NOW()) AND\n" +
                "CASE MONTH(createtime) WHEN '5' THEN 5 ELSE 0 END AND is_pay=1) AS '五',\n" +
                "(SELECT \n" +
                "IFNULL(COUNT(is_pay),0)\n" +
                "FROM goodsorder\n" +
                "WHERE YEAR(createtime)=YEAR(NOW()) AND\n" +
                "CASE MONTH(createtime) WHEN '6' THEN 6 ELSE 0 END AND is_pay=1) AS '六',\n" +
                "(SELECT \n" +
                "IFNULL(COUNT(is_pay),0)\n" +
                "FROM goodsorder\n" +
                "WHERE YEAR(createtime)=YEAR(NOW()) AND\n" +
                "CASE MONTH(createtime) WHEN '7' THEN 7 ELSE 0 END AND is_pay=1) AS '七',\n" +
                "(SELECT \n" +
                "IFNULL(COUNT(is_pay),0)\n" +
                "FROM goodsorder\n" +
                "WHERE YEAR(createtime)=YEAR(NOW()) AND\n" +
                "CASE MONTH(createtime) WHEN '8' THEN 8 ELSE 0 END AND is_pay=1) AS '八',\n" +
                "(SELECT \n" +
                "IFNULL(COUNT(is_pay),0)\n" +
                "FROM goodsorder\n" +
                "WHERE YEAR(createtime)=YEAR(NOW()) AND\n" +
                "CASE MONTH(createtime) WHEN '9' THEN 9 ELSE 0 END OR is_pay=1) AS '九',\n" +
                "(SELECT \n" +
                "IFNULL(COUNT(is_pay),0)\n" +
                "FROM goodsorder\n" +
                "WHERE YEAR(createtime)=YEAR(NOW()) AND\n" +
                "CASE MONTH(createtime) WHEN '10' THEN 10 ELSE 0 END AND is_pay=1) AS '十',\n" +
                "(SELECT \n" +
                "IFNULL(COUNT(is_pay),0)\n" +
                "FROM goodsorder\n" +
                "WHERE YEAR(createtime)=YEAR(NOW()) AND\n" +
                "CASE MONTH(createtime) WHEN '11' THEN 11 ELSE 0 END AND is_pay=1) AS '十一',\n" +
                "(SELECT \n" +
                "IFNULL(COUNT(is_pay),0)\n" +
                "FROM goodsorder\n" +
                "WHERE YEAR(createtime)=YEAR(NOW()) AND\n" +
                "CASE MONTH(createtime) WHEN '12' THEN 12 ELSE 0 END AND is_pay=1) AS '十二'\n" +
                "FROM goodsorder\n" +
                "WHERE YEAR(createtime)=YEAR(NOW()) AND\n" +
                "CASE MONTH(createtime) WHEN '1' THEN 1 ELSE 0 END AND is_pay=1",
                [],(err,data)=>{
                    if (!err){
                        resolve(data);
                    } else {
                        reject(data);
                    }
                })
        })
    },
    //已付款
    nopay2(req,resp){
        return new Promise(function (resolve,reject) {
            db.connect("SELECT \n" +
                "IFNULL(COUNT(is_pay),0) AS '一',(SELECT \n" +
                "IFNULL(COUNT(is_pay),0)\n" +
                "FROM goodsorder\n" +
                "WHERE YEAR(createtime)=YEAR(NOW()) AND\n" +
                "CASE MONTH(createtime) WHEN '2' THEN 2 ELSE 0 END AND is_pay=0) AS '二',\n" +
                "(SELECT \n" +
                "IFNULL(COUNT(is_pay),0)\n" +
                "FROM goodsorder\n" +
                "WHERE YEAR(createtime)=YEAR(NOW()) AND\n" +
                "CASE MONTH(createtime) WHEN '3' THEN 3 ELSE 0 END AND is_pay=0) AS '三',\n" +
                "(SELECT \n" +
                "IFNULL(COUNT(is_pay),0)\n" +
                "FROM goodsorder\n" +
                "WHERE YEAR(createtime)=YEAR(NOW()) AND\n" +
                "CASE MONTH(createtime) WHEN '4' THEN 4 ELSE 0 END AND is_pay=0) AS '四',\n" +
                "(SELECT \n" +
                "IFNULL(COUNT(is_pay),0)\n" +
                "FROM goodsorder\n" +
                "WHERE YEAR(createtime)=YEAR(NOW()) AND\n" +
                "CASE MONTH(createtime) WHEN '5' THEN 5 ELSE 0 END AND is_pay=0) AS '五',\n" +
                "(SELECT \n" +
                "IFNULL(COUNT(is_pay),0)\n" +
                "FROM goodsorder\n" +
                "WHERE YEAR(createtime)=YEAR(NOW()) AND\n" +
                "CASE MONTH(createtime) WHEN '6' THEN 6 ELSE 0 END AND is_pay=0) AS '六',\n" +
                "(SELECT \n" +
                "IFNULL(COUNT(is_pay),0)\n" +
                "FROM goodsorder\n" +
                "WHERE YEAR(createtime)=YEAR(NOW()) AND\n" +
                "CASE MONTH(createtime) WHEN '7' THEN 7 ELSE 0 END AND is_pay=0) AS '七',\n" +
                "(SELECT \n" +
                "IFNULL(COUNT(is_pay),0)\n" +
                "FROM goodsorder\n" +
                "WHERE YEAR(createtime)=YEAR(NOW()) AND\n" +
                "CASE MONTH(createtime) WHEN '8' THEN 8 ELSE 0 END AND is_pay=0) AS '八',\n" +
                "(SELECT \n" +
                "IFNULL(COUNT(is_pay),0)\n" +
                "FROM goodsorder\n" +
                "WHERE YEAR(createtime)=YEAR(NOW()) AND\n" +
                "CASE MONTH(createtime) WHEN '9' THEN 9 ELSE 0 END OR is_pay=0) AS '九',\n" +
                "(SELECT \n" +
                "IFNULL(COUNT(is_pay),0)\n" +
                "FROM goodsorder\n" +
                "WHERE YEAR(createtime)=YEAR(NOW()) AND\n" +
                "CASE MONTH(createtime) WHEN '10' THEN 10 ELSE 0 END AND is_pay=0) AS '十',\n" +
                "(SELECT \n" +
                "IFNULL(COUNT(is_pay),0)\n" +
                "FROM goodsorder\n" +
                "WHERE YEAR(createtime)=YEAR(NOW()) AND\n" +
                "CASE MONTH(createtime) WHEN '11' THEN 11 ELSE 0 END AND is_pay=0) AS '十一',\n" +
                "(SELECT \n" +
                "IFNULL(COUNT(is_pay),0)\n" +
                "FROM goodsorder\n" +
                "WHERE YEAR(createtime)=YEAR(NOW()) AND\n" +
                "CASE MONTH(createtime) WHEN '12' THEN 12 ELSE 0 END AND is_pay=0) AS '十二'\n" +
                "FROM goodsorder\n" +
                "WHERE YEAR(createtime)=YEAR(NOW()) AND\n" +
                "CASE MONTH(createtime) WHEN '1' THEN 1 ELSE 0 END AND is_pay=0",
                [],(err,data)=>{
                    if (!err){
                        resolve(data);
                    } else {
                        reject(data);
                    }
                })
        })
    },
    //待发货
    nopay3(req,resp){
        return new Promise(function (resolve,reject) {
            db.connect("SELECT \n" +
                "IFNULL(COUNT(orderStatus),0) AS '一',(SELECT \n" +
                "IFNULL(COUNT(orderStatus),0)\n" +
                "FROM goodsorder\n" +
                "WHERE YEAR(createtime)=YEAR(NOW()) AND\n" +
                "CASE MONTH(createtime) WHEN '2' THEN 2 ELSE 0 END AND orderStatus=1) AS '二',\n" +
                "(SELECT \n" +
                "IFNULL(COUNT(orderStatus),0)\n" +
                "FROM goodsorder\n" +
                "WHERE YEAR(createtime)=YEAR(NOW()) AND\n" +
                "CASE MONTH(createtime) WHEN '3' THEN 3 ELSE 0 END AND orderStatus=1) AS '三',\n" +
                "(SELECT \n" +
                "IFNULL(COUNT(orderStatus),0)\n" +
                "FROM goodsorder\n" +
                "WHERE YEAR(createtime)=YEAR(NOW()) AND\n" +
                "CASE MONTH(createtime) WHEN '4' THEN 4 ELSE 0 END AND orderStatus=1) AS '四',\n" +
                "(SELECT \n" +
                "IFNULL(COUNT(orderStatus),0)\n" +
                "FROM goodsorder\n" +
                "WHERE YEAR(createtime)=YEAR(NOW()) AND\n" +
                "CASE MONTH(createtime) WHEN '5' THEN 5 ELSE 0 END AND orderStatus=1) AS '五',\n" +
                "(SELECT \n" +
                "IFNULL(COUNT(orderStatus),0)\n" +
                "FROM goodsorder\n" +
                "WHERE YEAR(createtime)=YEAR(NOW()) AND\n" +
                "CASE MONTH(createtime) WHEN '6' THEN 6 ELSE 0 END AND orderStatus=1) AS '六',\n" +
                "(SELECT \n" +
                "IFNULL(COUNT(orderStatus),0)\n" +
                "FROM goodsorder\n" +
                "WHERE YEAR(createtime)=YEAR(NOW()) AND\n" +
                "CASE MONTH(createtime) WHEN '7' THEN 7 ELSE 0 END AND orderStatus=1) AS '七',\n" +
                "(SELECT \n" +
                "IFNULL(COUNT(orderStatus),0)\n" +
                "FROM goodsorder\n" +
                "WHERE YEAR(createtime)=YEAR(NOW()) AND\n" +
                "CASE MONTH(createtime) WHEN '8' THEN 8 ELSE 0 END AND orderStatus=1) AS '八',\n" +
                "(SELECT \n" +
                "IFNULL(COUNT(orderStatus),0)\n" +
                "FROM goodsorder\n" +
                "WHERE YEAR(createtime)=YEAR(NOW()) AND\n" +
                "CASE MONTH(createtime) WHEN '9' THEN 9 ELSE 0 END OR orderStatus=1) AS '九',\n" +
                "(SELECT \n" +
                "IFNULL(COUNT(orderStatus),0)\n" +
                "FROM goodsorder\n" +
                "WHERE YEAR(createtime)=YEAR(NOW()) AND\n" +
                "CASE MONTH(createtime) WHEN '10' THEN 10 ELSE 0 END AND orderStatus=1) AS '十',\n" +
                "(SELECT \n" +
                "IFNULL(COUNT(orderStatus),0)\n" +
                "FROM goodsorder\n" +
                "WHERE YEAR(createtime)=YEAR(NOW()) AND\n" +
                "CASE MONTH(createtime) WHEN '11' THEN 11 ELSE 0 END AND orderStatus=1) AS '十一',\n" +
                "(SELECT \n" +
                "IFNULL(COUNT(orderStatus),0)\n" +
                "FROM goodsorder\n" +
                "WHERE YEAR(createtime)=YEAR(NOW()) AND\n" +
                "CASE MONTH(createtime) WHEN '12' THEN 12 ELSE 0 END AND orderStatus=1) AS '十二'\n" +
                "FROM goodsorder\n" +
                "WHERE YEAR(createtime)=YEAR(NOW()) AND\n" +
                "CASE MONTH(createtime) WHEN '1' THEN 1 ELSE 0 END AND orderStatus=1",
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