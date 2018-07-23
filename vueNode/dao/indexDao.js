const db = require("../config/dbpoolConfig");

const indexDao = {
       // 总用户
    Zuser(req,resp) {
    return new Promise((resolve,reject)=>{
        db.connect("select count(*) as count from users",
            [],(err,data)=>{
                if (!err){
                    resolve(data);
                } else {
                    reject(data);
                }
            })
    })
},
// 周用户
weekuser(req,resp) {
    return new Promise((resolve,reject)=>{
        db.connect("SELECT COUNT(*) as count FROM users WHERE DATE_SUB(CURDATE(), INTERVAL 7 DAY) <= DATE(createtime)",
            [],(err,data)=>{
                if (!err){
                    resolve(data);
                } else {
                    reject(data);
                }
            })
    })
},
// 总售后
Zsale(req,resp) {
    return new Promise((resolve,reject)=>{
        db.connect("select count(*) as count from saleafter",
            [],(err,data)=>{
                if (!err){
                    resolve(data);
                } else {
                    reject(data);
                }
            })
    })
},
// 月售后
monthsale(req,resp) {
    return new Promise((resolve,reject)=>{
        db.connect("SELECT COUNT(*) as count FROM saleafter WHERE DATE_SUB(CURDATE(), INTERVAL 30 DAY) <= DATE(sf_time)",
            [],(err,data)=>{
                if (!err){
                    resolve(data);
                } else {
                    reject(data);
                }
            })
    })
},
// 总订单
ZOrder(req,resp) {
    return new Promise((resolve,reject)=>{
        db.connect("SELECT count(*) as count FROM goodsorder",
            [],(err,data)=>{
                if (!err){
                    resolve(data);
                } else {
                    reject(data);
                }
            })
    })
},
// 月订单
monthOrder(req,resp) {
    return new Promise((resolve,reject)=>{
        db.connect("SELECT COUNT(*) as count FROM goodsorder WHERE DATE_SUB(CURDATE(), INTERVAL 30 DAY) <= DATE(createtime)",
            [],(err,data)=>{
                if (!err){
                    resolve(data);
                } else {
                    reject(data);
                }
            })
    })
},
// 总交易
Ztransaction(req,resp) {
    return new Promise((resolve,reject)=>{
        db.connect("SELECT SUM(o_price) as count FROM goodsorder",
            [],(err,data)=>{
                if (!err){
                    resolve(data);
                } else {
                    reject(data);
                }
            })
    })
},
// 年交易
yeartransaction(req,resp) {
    return new Promise((resolve,reject)=>{
        db.connect("SELECT SUM(o_price) as count FROM goodsorder WHERE YEAR(createtime)=YEAR(NOW())",
            [],(err,data)=>{
                if (!err){
                    resolve(data);
                } else {
                    reject(data);
                }
            })
    })
},
// 最新上架
Newest(req,reap) {
    return new Promise((resolve,reject)=>{
        db.connect("SELECT * FROM goods ORDER BY salesTime ASC LIMIT 6",
            [],(err,data)=>{
                if (!err){
                    resolve(data);
                } else {
                    reject(data);
                }
            })
    })
},
// 最新上架
xf(req,reap) {
    return new Promise((resolve,reject)=>{
        db.connect("SELECT * FROM goods ORDER BY salesTime ASC LIMIT 6",
            [],(err,data)=>{
                if (!err){
                    resolve(data);
                } else {
                    reject(data);
                }
            })
    })
}

}
module.exports = indexDao;
