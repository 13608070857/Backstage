const db = require("../config/dbpoolConfig");

const indexDao = {
    // 总用户
    Zuser(req, resp) {
        return new Promise((resolve, reject) => {
            db.connect("select count(*) as count from users",
                [], (err, data) => {
                    if (!err) {
                        resolve(data);
                    } else {
                        reject(data);
                    }
                })
        })
    },
// 周用户
    weekuser(req, resp) {
        return new Promise((resolve, reject) => {
            db.connect("SELECT COUNT(*) as count FROM users WHERE DATE_SUB(CURDATE(), INTERVAL 7 DAY) <= DATE(createtime)",
                [], (err, data) => {
                    if (!err) {
                        resolve(data);
                    } else {
                        reject(data);
                    }
                })
        })
    },
// 总售后
    Zsale(req, resp) {
        return new Promise((resolve, reject) => {
            db.connect("select count(*) as count from saleafter",
                [], (err, data) => {
                    if (!err) {
                        resolve(data);
                    } else {
                        reject(data);
                    }
                })
        })
    },
// 月售后
    monthsale(req, resp) {
        return new Promise((resolve, reject) => {
            db.connect("SELECT COUNT(*) as count FROM saleafter WHERE DATE_SUB(CURDATE(), INTERVAL 30 DAY) <= DATE(sf_time)",
                [], (err, data) => {
                    if (!err) {
                        resolve(data);
                    } else {
                        reject(data);
                    }
                })
        })
    },
// 总订单
    ZOrder(req, resp) {
        return new Promise((resolve, reject) => {
            db.connect("SELECT count(*) as count FROM goodsorder",
                [], (err, data) => {
                    if (!err) {
                        resolve(data);
                    } else {
                        reject(data);
                    }
                })
        })
    },
// 月订单
    monthOrder(req, resp) {
        return new Promise((resolve, reject) => {
            db.connect("SELECT COUNT(*) AS count FROM goodsorder WHERE DATE_FORMAT( createtime, '%Y%m' ) = DATE_FORMAT( CURDATE( ) , '%Y%m' )",
                [], (err, data) => {
                    if (!err) {
                        resolve(data);
                    } else {
                        reject(data);
                    }
                })
        })
    },
// 总交易
    Ztransaction(req, resp) {
        return new Promise((resolve, reject) => {
            db.connect("SELECT SUM(o_price) as count FROM goodsorder",
                [], (err, data) => {
                    if (!err) {
                        resolve(data);
                    } else {
                        reject(data);
                    }
                })
        })
    },
// 年交易
    yeartransaction(req, resp) {
        return new Promise((resolve, reject) => {
            db.connect("SELECT SUM(o_price) as count FROM goodsorder WHERE YEAR(createtime)=YEAR(NOW())",
                [], (err, data) => {
                    if (!err) {
                        resolve(data);
                    } else {
                        reject(data);
                    }
                })
        })
    },
// 最新上架
    Newest(req, reap) {
        return new Promise((resolve, reject) => {
            db.connect("SELECT *,DATE_FORMAT(createTime,\"%Y-%m-%d %H:%i:%S\") AS ctime FROM goods ORDER BY createTime DESC LIMIT 4 ",
                [], (err, data) => {
                    if (!err) {
                        resolve(data);
                    } else {
                        reject(data);
                    }
                })
        })
    },
// 消费排行
    xf(req, reap) {
        return new Promise((resolve, reject) => {
            db.connect("SELECT u.u_id,u.name,SUM(g.o_price) as sum FROM users AS u INNER JOIN goodsorder AS g ON u.u_id = g.u_id WHERE g.is_pay = 0 GROUP BY u.u_id ORDER BY SUM(g.o_price) DESC LIMIT 6",
                [], (err, data) => {
                    if (!err) {
                        resolve(data);
                    } else {
                        reject(data);
                    }
                })
        })
    },
// 12月金额
    Twelvej(req, reap) {
        return new Promise((resolve, reject) => {
            db.connect("SELECT \n" +
                "IFNULL(SUM(o_price),0) AS '一',(SELECT \n" +
                "IFNULL(SUM(o_price),0)\n" +
                "FROM goodsorder\n" +
                "WHERE YEAR(createtime)=YEAR(NOW()) AND\n" +
                "CASE MONTH(createtime) WHEN '2' THEN 2 ELSE 0 END) AS '二',\n" +
                "(SELECT \n" +
                "IFNULL(SUM(o_price),0)\n" +
                "FROM goodsorder\n" +
                "WHERE YEAR(createtime)=YEAR(NOW()) AND\n" +
                "CASE MONTH(createtime) WHEN '3' THEN 3 ELSE 0 END) AS '三',\n" +
                "(SELECT \n" +
                "IFNULL(SUM(o_price),0)\n" +
                "FROM goodsorder\n" +
                "WHERE YEAR(createtime)=YEAR(NOW()) AND\n" +
                "CASE MONTH(createtime) WHEN '4' THEN 4 ELSE 0 END) AS '四',\n" +
                "(SELECT \n" +
                "IFNULL(SUM(o_price),0)\n" +
                "FROM goodsorder\n" +
                "WHERE YEAR(createtime)=YEAR(NOW()) AND\n" +
                "CASE MONTH(createtime) WHEN '5' THEN 5 ELSE 0 END) AS '五',\n" +
                "(SELECT \n" +
                "IFNULL(SUM(o_price),0)\n" +
                "FROM goodsorder\n" +
                "WHERE YEAR(createtime)=YEAR(NOW()) AND\n" +
                "CASE MONTH(createtime) WHEN '6' THEN 6 ELSE 0 END) AS '六',\n" +
                "(SELECT \n" +
                "IFNULL(SUM(o_price),0)\n" +
                "FROM goodsorder\n" +
                "WHERE YEAR(createtime)=YEAR(NOW()) AND\n" +
                "CASE MONTH(createtime) WHEN '7' THEN 7 ELSE 0 END) AS '七',\n" +
                "(SELECT \n" +
                "IFNULL(SUM(o_price),0)\n" +
                "FROM goodsorder\n" +
                "WHERE YEAR(createtime)=YEAR(NOW()) AND\n" +
                "CASE MONTH(createtime) WHEN '8' THEN 8 ELSE 0 END) AS '八',\n" +
                "(SELECT \n" +
                "IFNULL(SUM(o_price),0)\n" +
                "FROM goodsorder\n" +
                "WHERE YEAR(createtime)=YEAR(NOW()) AND\n" +
                "CASE MONTH(createtime) WHEN '9' THEN 9 ELSE 0 END) AS '九',\n" +
                "(SELECT \n" +
                "IFNULL(SUM(o_price),0)\n" +
                "FROM goodsorder\n" +
                "WHERE YEAR(createtime)=YEAR(NOW()) AND\n" +
                "CASE MONTH(createtime) WHEN '10' THEN 10 ELSE 0 END) AS '十',\n" +
                "(SELECT \n" +
                "IFNULL(SUM(o_price),0)\n" +
                "FROM goodsorder\n" +
                "WHERE YEAR(createtime)=YEAR(NOW()) AND\n" +
                "CASE MONTH(createtime) WHEN '11' THEN 11 ELSE 0 END) AS '十一',\n" +
                "(SELECT \n" +
                "IFNULL(SUM(o_price),0)\n" +
                "FROM goodsorder\n" +
                "WHERE YEAR(createtime)=YEAR(NOW()) AND\n" +
                "CASE MONTH(createtime) WHEN '12' THEN 12 ELSE 0 END) AS '十二'\n" +
                "FROM goodsorder\n" +
                "WHERE YEAR(createtime)=YEAR(NOW()) AND\n" +
                "CASE MONTH(createtime) WHEN '1' THEN 1 ELSE 0 END",
                [], (err, data) => {
                    if (!err) {
                        resolve(data);
                    } else {
                        reject(data);
                    }
                })
        })
    },
// 12月商城
    Twelves(req, resp) {
        return new Promise((resolve, reject) => {
            db.connect("SELECT \n" +
                "IFNULL(COUNT(*),0) AS '一',(SELECT \n" +
                "IFNULL(COUNT(*),0)\n" +
                "FROM users\n" +
                "WHERE YEAR(createTime)=YEAR(NOW()) AND\n" +
                "CASE MONTH(createTime) WHEN '2' THEN 2 ELSE 0 END) AS '二',\n" +
                "(SELECT \n" +
                "IFNULL(COUNT(*),0)\n" +
                "FROM users\n" +
                "WHERE YEAR(createTime)=YEAR(NOW()) AND\n" +
                "CASE MONTH(createTime) WHEN '3' THEN 3 ELSE 0 END) AS '三',\n" +
                "(SELECT \n" +
                "IFNULL(COUNT(*),0)\n" +
                "FROM users\n" +
                "WHERE YEAR(createTime)=YEAR(NOW()) AND\n" +
                "CASE MONTH(createTime) WHEN '4' THEN 4 ELSE 0 END) AS '四',\n" +
                "(SELECT \n" +
                "IFNULL(COUNT(*),0)\n" +
                "FROM users\n" +
                "WHERE YEAR(createTime)=YEAR(NOW()) AND\n" +
                "CASE MONTH(createTime) WHEN '5' THEN 5 ELSE 0 END) AS '五',\n" +
                "(SELECT \n" +
                "IFNULL(COUNT(*),0)\n" +
                "FROM users\n" +
                "WHERE YEAR(createTime)=YEAR(NOW()) AND\n" +
                "CASE MONTH(createTime) WHEN '6' THEN 6 ELSE 0 END) AS '六',\n" +
                "(SELECT \n" +
                "IFNULL(COUNT(*),0)\n" +
                "FROM users\n" +
                "WHERE YEAR(createTime)=YEAR(NOW()) AND\n" +
                "CASE MONTH(createTime) WHEN '7' THEN 7 ELSE 0 END) AS '七',\n" +
                "(SELECT \n" +
                "IFNULL(COUNT(*),0)\n" +
                "FROM users\n" +
                "WHERE YEAR(createTime)=YEAR(NOW()) AND\n" +
                "CASE MONTH(createTime) WHEN '8' THEN 8 ELSE 0 END) AS '八',\n" +
                "(SELECT \n" +
                "IFNULL(COUNT(*),0)\n" +
                "FROM users\n" +
                "WHERE YEAR(createTime)=YEAR(NOW()) AND\n" +
                "CASE MONTH(createTime) WHEN '9' THEN 9 ELSE 0 END) AS '九',\n" +
                "(SELECT \n" +
                "IFNULL(COUNT(*),0)\n" +
                "FROM users\n" +
                "WHERE YEAR(createTime)=YEAR(NOW()) AND\n" +
                "CASE MONTH(createTime) WHEN '10' THEN 10 ELSE 0 END) AS '十',\n" +
                "(SELECT \n" +
                "IFNULL(COUNT(*),0)\n" +
                "FROM users\n" +
                "WHERE YEAR(createTime)=YEAR(NOW()) AND\n" +
                "CASE MONTH(createTime) WHEN '11' THEN 11 ELSE 0 END) AS '十一',\n" +
                "(SELECT \n" +
                "IFNULL(COUNT(*),0)\n" +
                "FROM users\n" +
                "WHERE YEAR(createTime)=YEAR(NOW()) AND\n" +
                "CASE MONTH(createTime) WHEN '12' THEN 12 ELSE 0 END) AS '十二'\n" +
                "FROM users\n" +
                "WHERE YEAR(createTime)=YEAR(NOW()) AND\n" +
                "CASE MONTH(createTime) WHEN '1' THEN 1 ELSE 0 END\n",
                [], (err, data) => {
                    if (!err) {
                        resolve(data);
                    } else {
                        reject(data);
                    }
                })
        })
    },
// 12月售后
    Twelvejsh(req, resp) {
        return new Promise((resolve, reject) => {
            db.connect("SELECT \n" +
                "IFNULL(COUNT(*),0) AS '一',(SELECT \n" +
                "IFNULL(COUNT(*),0)\n" +
                "FROM saleafter\n" +
                "WHERE YEAR(sf_time)=YEAR(NOW()) AND\n" +
                "CASE MONTH(sf_time) WHEN '2' THEN 2 ELSE 0 END) AS '二',\n" +
                "(SELECT \n" +
                "IFNULL(COUNT(*),0)\n" +
                "FROM saleafter\n" +
                "WHERE YEAR(sf_time)=YEAR(NOW()) AND\n" +
                "CASE MONTH(sf_time) WHEN '3' THEN 3 ELSE 0 END) AS '三',\n" +
                "(SELECT \n" +
                "IFNULL(COUNT(*),0)\n" +
                "FROM saleafter\n" +
                "WHERE YEAR(sf_time)=YEAR(NOW()) AND\n" +
                "CASE MONTH(sf_time) WHEN '4' THEN 4 ELSE 0 END) AS '四',\n" +
                "(SELECT \n" +
                "IFNULL(COUNT(*),0)\n" +
                "FROM saleafter\n" +
                "WHERE YEAR(sf_time)=YEAR(NOW()) AND\n" +
                "CASE MONTH(sf_time) WHEN '5' THEN 5 ELSE 0 END) AS '五',\n" +
                "(SELECT \n" +
                "IFNULL(COUNT(*),0)\n" +
                "FROM saleafter\n" +
                "WHERE YEAR(sf_time)=YEAR(NOW()) AND\n" +
                "CASE MONTH(sf_time) WHEN '6' THEN 6 ELSE 0 END) AS '六',\n" +
                "(SELECT \n" +
                "IFNULL(COUNT(*),0)\n" +
                "FROM saleafter\n" +
                "WHERE YEAR(sf_time)=YEAR(NOW()) AND\n" +
                "CASE MONTH(sf_time) WHEN '7' THEN 7 ELSE 0 END) AS '七',\n" +
                "(SELECT \n" +
                "IFNULL(COUNT(*),0)\n" +
                "FROM saleafter\n" +
                "WHERE YEAR(sf_time)=YEAR(NOW()) AND\n" +
                "CASE MONTH(sf_time) WHEN '8' THEN 8 ELSE 0 END) AS '八',\n" +
                "(SELECT \n" +
                "IFNULL(COUNT(*),0)\n" +
                "FROM saleafter\n" +
                "WHERE YEAR(sf_time)=YEAR(NOW()) AND\n" +
                "CASE MONTH(sf_time) WHEN '9' THEN 9 ELSE 0 END) AS '九',\n" +
                "(SELECT \n" +
                "IFNULL(COUNT(*),0)\n" +
                "FROM saleafter\n" +
                "WHERE YEAR(sf_time)=YEAR(NOW()) AND\n" +
                "CASE MONTH(sf_time) WHEN '10' THEN 10 ELSE 0 END) AS '十',\n" +
                "(SELECT \n" +
                "IFNULL(COUNT(*),0)\n" +
                "FROM saleafter\n" +
                "WHERE YEAR(sf_time)=YEAR(NOW()) AND\n" +
                "CASE MONTH(sf_time) WHEN '11' THEN 11 ELSE 0 END) AS '十一',\n" +
                "(SELECT \n" +
                "IFNULL(COUNT(*),0)\n" +
                "FROM saleafter\n" +
                "WHERE YEAR(sf_time)=YEAR(NOW()) AND\n" +
                "CASE MONTH(sf_time) WHEN '12' THEN 12 ELSE 0 END) AS '十二'\n" +
                "FROM saleafter\n" +
                "WHERE YEAR(sf_time)=YEAR(NOW()) AND\n" +
                "CASE MONTH(sf_time) WHEN '1' THEN 1 ELSE 0 END\n",
                [], (err, data) => {
                    if (!err) {
                        resolve(data);
                    } else {
                        reject(data);
                    }
                })
        })
    },
// 12月订单
    Twelved(req, resp) {
        return new Promise((resolve, reject) => {
            db.connect("SELECT \n" +
                "IFNULL(COUNT(*),0) AS '一',(SELECT \n" +
                "IFNULL(COUNT(*),0)\n" +
                "FROM goodsorder\n" +
                "WHERE YEAR(createtime)=YEAR(NOW()) AND\n" +
                "CASE MONTH(createtime) WHEN '2' THEN 2 ELSE 0 END) AS '二',\n" +
                "(SELECT \n" +
                "IFNULL(COUNT(*),0)\n" +
                "FROM goodsorder\n" +
                "WHERE YEAR(createtime)=YEAR(NOW()) AND\n" +
                "CASE MONTH(createtime) WHEN '3' THEN 3 ELSE 0 END) AS '三',\n" +
                "(SELECT \n" +
                "IFNULL(COUNT(*),0)\n" +
                "FROM goodsorder\n" +
                "WHERE YEAR(createtime)=YEAR(NOW()) AND\n" +
                "CASE MONTH(createtime) WHEN '4' THEN 4 ELSE 0 END) AS '四',\n" +
                "(SELECT \n" +
                "IFNULL(COUNT(*),0)\n" +
                "FROM goodsorder\n" +
                "WHERE YEAR(createtime)=YEAR(NOW()) AND\n" +
                "CASE MONTH(createtime) WHEN '5' THEN 5 ELSE 0 END) AS '五',\n" +
                "(SELECT \n" +
                "IFNULL(COUNT(*),0)\n" +
                "FROM goodsorder\n" +
                "WHERE YEAR(createtime)=YEAR(NOW()) AND\n" +
                "CASE MONTH(createtime) WHEN '6' THEN 6 ELSE 0 END) AS '六',\n" +
                "(SELECT \n" +
                "IFNULL(COUNT(*),0)\n" +
                "FROM goodsorder\n" +
                "WHERE YEAR(createtime)=YEAR(NOW()) AND\n" +
                "CASE MONTH(createtime) WHEN '7' THEN 7 ELSE 0 END) AS '七',\n" +
                "(SELECT \n" +
                "IFNULL(COUNT(*),0)\n" +
                "FROM goodsorder\n" +
                "WHERE YEAR(createtime)=YEAR(NOW()) AND\n" +
                "CASE MONTH(createtime) WHEN '8' THEN 8 ELSE 0 END) AS '八',\n" +
                "(SELECT \n" +
                "IFNULL(COUNT(*),0)\n" +
                "FROM goodsorder\n" +
                "WHERE YEAR(createtime)=YEAR(NOW()) AND\n" +
                "CASE MONTH(createtime) WHEN '9' THEN 9 ELSE 0 END) AS '九',\n" +
                "(SELECT \n" +
                "IFNULL(COUNT(*),0)\n" +
                "FROM goodsorder\n" +
                "WHERE YEAR(createtime)=YEAR(NOW()) AND\n" +
                "CASE MONTH(createtime) WHEN '10' THEN 10 ELSE 0 END) AS '十',\n" +
                "(SELECT \n" +
                "IFNULL(COUNT(*),0)\n" +
                "FROM goodsorder\n" +
                "WHERE YEAR(createtime)=YEAR(NOW()) AND\n" +
                "CASE MONTH(createtime) WHEN '11' THEN 11 ELSE 0 END) AS '十一',\n" +
                "(SELECT \n" +
                "IFNULL(COUNT(*),0)\n" +
                "FROM goodsorder\n" +
                "WHERE YEAR(createtime)=YEAR(NOW()) AND\n" +
                "CASE MONTH(createtime) WHEN '12' THEN 12 ELSE 0 END) AS '十二'\n" +
                "FROM goodsorder\n" +
                "WHERE YEAR(createtime)=YEAR(NOW()) AND\n" +
                "CASE MONTH(createtime) WHEN '1' THEN 1 ELSE 0 END\n",
                [], (err, data) => {
                    if (!err) {
                        resolve(data);
                    } else {
                        reject(data);
                    }
                })
        })
    }
}
module.exports = indexDao;
