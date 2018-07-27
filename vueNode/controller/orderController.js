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
        // orderDao.ordermsg()
        //     .then(function (data) {
        //         let getAllData = data;
        //         console.log(data);
        //         orderDao.ordermsg().then(function(data) {
        //             let getData = data;
        //             dataInfo = {
        //                 getAllData: getAllData,
        //                 getData: getData
        //             };
        //             resp.send(dataInfo);
        //         })
        //     })
        var currentP = req.query.currentP;
        var currentIndex = (currentP - 1)*currentP;
        var queryData = "%" + req.query.queryData + "%";
        orderDao.ordermsg().then(function(data) {
            var getAllData = data;
            var mySql = '';
            var paramsArr = '';
            console.log(queryData)
            if(queryData == '') {
                mySql = "SELECT go.o_ID,go.u_id,g.goodsName,g.goodsImg,g.goodsPrice,(CEIL(go.o_price/total)) AS goodsNum,gc.cateName,DATE_FORMAT(go.createTime,'%Y-%m-%d %H:%i:%S') AS createTime,CASE go.orderStatus WHEN 1 THEN '待发货' WHEN 2 THEN '已发货' WHEN 3 THEN '已收货' END AS orderStatus FROM goodsorder go,order_goods og,goods g,goods_category gc WHERE go.u_id=og.u_id AND og.goods_ID=g.goods_ID AND go.o_ID=og.o_ID AND g.cate_ID=gc.cate_ID AND go.is_del=0 AND go.is_del2=0";
                paramsArr = [currentIndex];
            }else {
                mySql = "SELECT go.o_ID,go.u_id,g.goodsName,g.goodsImg,g.goodsPrice,(CEIL(go.o_price/total)) AS goodsNum,gc.cateName,DATE_FORMAT(go.createTime,'%Y-%m-%d %H:%i:%S') AS createTime,CASE go.orderStatus WHEN 1 THEN '待发货' WHEN 2 THEN '已发货' WHEN 3 THEN '已收货' END AS orderStatus FROM goodsorder go,order_goods og,goods g,goods_category gc WHERE go.u_id=og.u_id AND og.goods_ID=g.goods_ID AND go.o_ID=og.o_ID AND g.cate_ID=gc.cate_ID AND go.is_del=0 AND go.is_del2=0 AND g.goodsName IN (SELECT goodsName FROM goods WHERE goodsName LIKE ?)";
                paramsArr = [queryData,currentIndex];
            }
            orderDao.ordermsg2(mySql,queryData).then(function(data) {
                var getData = data;
                mySql += ' limit ?,5';
                orderDao.ordermsg3(mySql,paramsArr).then(function(data) {
                    var paceDate = data;
                    dataInfo = {
                        getAllData: getAllData,
                        getData: getData,
                        paceDate: paceDate
                    };
                    resp.send(dataInfo);
                })

            })
        });
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
        // orderDao.refund()
        //     .then(function (data) {
        //         let getAllData = data;
        //         console.log(data);
        //         orderDao.refund().then(function(data) {
        //             let getData = data;
        //             dataInfo = {
        //                 getAllData: getAllData,
        //                 getData: getData
        //             };
        //             resp.send(dataInfo);
        //         })
        //     })
        var currentP = req.query.currentP;
        var currentIndex = (currentP - 1)*currentP;
        var queryData = "%" + req.query.queryData + "%";
        orderDao.refund().then(function(data) {
            var getAllData = data;
            var mySql = '';
            var paramsArr = '';
            console.log(queryData)
            if(queryData == '') {
                mySql = "SELECT go.o_ID,go.u_id,g.goodsName,g.goodsImg,go.o_price,go.o_price AS o_price2,(CEIL(go.o_price/total)) AS refundNum,DATE_FORMAT(go.createTime,'%Y-%m-%d %H:%i:%S') AS createTime,IFNULL(go.order_desc,'暂无') AS order_desc,CASE go.isClosed WHEN 1 THEN '待退款' WHEN 2 THEN '已退款' WHEN 3 THEN '未通过' WHEN 0 THEN '正常' END AS is_Closed FROM goodsorder go,order_goods og,goods g WHERE go.u_id=og.u_id AND og.goods_ID=g.goods_ID AND go.o_ID=og.o_ID AND go.is_del2=0 AND go.is_del=0";
                paramsArr = [currentIndex];
            }else {
                mySql = "SELECT go.o_ID,go.u_id,g.goodsName,g.goodsImg,go.o_price,go.o_price AS o_price2,(CEIL(go.o_price/total)) AS refundNum,DATE_FORMAT(go.createTime,'%Y-%m-%d %H:%i:%S') AS createTime,IFNULL(go.order_desc,'暂无') AS order_desc,CASE go.isClosed WHEN 1 THEN '待退款' WHEN 2 THEN '已退款' WHEN 3 THEN '未通过' WHEN 0 THEN '正常' END AS is_Closed FROM goodsorder go,order_goods og,goods g WHERE go.u_id=og.u_id AND og.goods_ID=g.goods_ID AND go.o_ID=og.o_ID AND go.is_del2=0 AND go.is_del=0 AND g.goodsName IN (SELECT goodsName FROM goods WHERE goodsName LIKE ?)";
                paramsArr = [queryData,currentIndex];
            }
            orderDao.refund2(mySql,queryData).then(function(data) {
                var getData = data;
                mySql += ' limit ?,5';
                orderDao.refund3(mySql,paramsArr).then(function(data) {
                    var paceDate = data;
                    dataInfo = {
                        getAllData: getAllData,
                        getData: getData,
                        paceDate: paceDate
                    };
                    resp.send(dataInfo);
                })

            })
        });
    },
    // 退款处理 退款
    getonrefund(req,resp){
        var oid=req.query.id;
        orderDao.onrefund(oid)
            .then(function (data) {
                resp.send(data);
            })
    },
    // 退款处理 不通过
    getunrefund(req,resp){
        // var oid=req.query.id;
        // orderDao.onrefund(oid)
        //     .then(function (data) {
        //         resp.send(data);
        //     })
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
        // orderDao.paymsg()
        //     .then(function (data) {
        //         let getAllData = data;
        //         console.log(data);
        //         orderDao.paymsg().then(function(data) {
        //             let getData = data;
        //             dataInfo = {
        //                 getAllData: getAllData,
        //                 getData: getData
        //             };
        //             resp.send(dataInfo);
        //         })
        //     })
        var currentP = req.query.currentP;
        var currentIndex = (currentP - 1)*currentP;
        var queryData = "%" + req.query.queryData + "%";
        orderDao.paymsg().then(function(data) {
            var getAllData = data;
            var mySql = '';
            var paramsArr = '';
            console.log(queryData)
            if(queryData == '') {
                mySql = "select pay_id,payName,if(status=1,'启用','禁用') as pay_status,DATE_FORMAT(catetime,\"%Y-%m-%d %H:%i:%S\") as catetime from payform";
                paramsArr = [currentIndex];
            }else {
                mySql = "SELECT pay_id,payName,IF(STATUS=1,'启用','禁用') AS pay_status,DATE_FORMAT(catetime,\"%Y-%m-%d %H:%i:%S\") AS catetime FROM payform WHERE payName IN (SELECT payName FROM payform WHERE payName LIKE ?)";
                paramsArr = [queryData,currentIndex];
            }
            orderDao.paymsg2(mySql,queryData).then(function(data) {
                var getData = data;
                mySql += ' limit ?,5';
                orderDao.paymsg3(mySql,paramsArr).then(function(data) {
                    var paceDate = data;
                    dataInfo = {
                        getAllData: getAllData,
                        getData: getData,
                        paceDate: paceDate
                    };
                    resp.send(dataInfo);
                })

            })
        });
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
    },
    // 支付管理 新增
    getaddpay(req,resp){
        var popObj = JSON.parse(req.query.popObj);
        var insert = popObj.insert;
        var val = ''
        var sql = '';
        var wh = '';
        var addArr = [];
        for(var key in insert) {
            addArr.push(insert[key]);
            val += key + ',' ;
            wh +='?,'
        }
        val = val.substr(0,val.length-1);
        wh = wh.substr(0,wh.length-1)
        val='';
        val=val+'payName,status,catetime';
        sql = 'insert into payform (' + val + ') values (' + wh + ')';
        orderDao.addorder(sql,addArr)
            .then(function(data) {
                resp.send(data);
            })
    }
};
module.exports = orderControoller;