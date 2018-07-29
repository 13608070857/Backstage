const goodsDao = require("../dao/goodsDao");
let dataInfo;
const goodsControoller = {
    // 所有商品
    getallgoods(req,resp){
        // goodsDao.goodsmsg2()
        //     .then(function (data) {
        //         let getAllData = data;
        //         console.log(data);
        //         goodsDao.goodsmsg().then(function(data) {
        //             let getData = data;
        //             dataInfo = {
        //                 getAllData: getAllData,
        //                 getData: getData
        //             };
        //             resp.send(dataInfo);
        //         })
        //     })
        var currentP = req.query.currentP;
        var currentIndex = (currentP - 1)*5;
        var queryData = "%" + req.query.queryData + "%";
        goodsDao.goodsmsg2().then(function(data) {
            var getAllData = data;
            var mySql = '';
            var paramsArr = '';
            console.log(queryData)
            if(queryData == '') {
                mySql = "SELECT g.goods_ID,g.goodsName,g.goodsImg,goodsPrice,gc.cateName,DATE_FORMAT(g.createTime,\"%Y-%m-%d %H:%i:%S\") AS createTime,IF(g.goodsStatus=1,\"已上架\",\"已下架\") AS goodsStatus FROM goods g,goods_category gc WHERE g.inventory>-1 AND g.is_delete=0 AND g.cate_ID=gc.cate_ID";
                paramsArr = [currentIndex];
            }else {
                mySql = "SELECT g.goods_ID,g.goodsName,g.goodsImg,goodsPrice,gc.cateName,DATE_FORMAT(g.createTime,\"%Y-%m-%d %H:%i:%S\") AS createTime,IF(g.goodsStatus=1,\"已上架\",\"已下架\") AS goodsStatus FROM goods g,goods_category gc WHERE g.inventory>-1 AND g.is_delete=0 AND g.cate_ID=gc.cate_ID AND g.goodsName IN (SELECT goodsName FROM goods WHERE goodsName LIKE ?)";
                paramsArr = [queryData,currentIndex];
            }
            goodsDao.goodsmsg(mySql,queryData).then(function(data) {
                var getData = data;
                mySql += ' limit ?,5';
                goodsDao.goodsmsg3(mySql,paramsArr).then(function(data) {
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
    //商品分类
    getcategory(req,resp){
        // goodsDao.goodscate()
        //     .then(function (data) {
        //         let getAllData = data;
        //         console.log(data);
        //         goodsDao.goodscate().then(function(data) {
        //             let getData = data;
        //             dataInfo = {
        //                 getAllData: getAllData,
        //                 getData: getData
        //             };
        //             resp.send(dataInfo);
        //         })
        //     })
        var currentP = req.query.currentP;
        var currentIndex = (currentP - 1)*5;
        var queryData = "%" + req.query.queryData + "%";
        goodsDao.goodscate().then(function(data) {
            var getAllData = data;
            var mySql = '';
            var paramsArr = '';
            console.log(queryData)
            if(queryData == '') {
                mySql = "SELECT cate_ID,cateName,IF(gc.status=1,'已上架','已下架') as status,DATE_FORMAT(cateTime,'%Y-%m-%d %H:%i:%S') as cateTime FROM goods_category gc where gc.is_del=0";
                paramsArr = [currentIndex];
            }else {
                mySql = "SELECT cate_ID,cateName,IF(gc.status=1,'已上架','已下架') AS STATUS,DATE_FORMAT(cateTime,'%Y-%m-%d %H:%i:%S') AS cateTime FROM goods_category gc WHERE gc.is_del=0 AND gc.cateName IN (SELECT cateName FROM goods_category WHERE cateName LIKE ?)";
                paramsArr = [queryData,currentIndex];
            }
            goodsDao.goodscate2(mySql,queryData).then(function(data) {
                var getData = data;
                mySql += ' limit ?,5';
                goodsDao.goodscate3(mySql,paramsArr).then(function(data) {
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
    // 商品评论
    getcomments(req,resp){
        // goodsDao.goodscom()
        //     .then(function (data) {
        //         let getAllData = data;
        //         console.log(data);
        //         goodsDao.goodscom().then(function(data) {
        //             let getData = data;
        //             dataInfo = {
        //                 getAllData: getAllData,
        //                 getData: getData
        //             };
        //             resp.send(dataInfo);
        //         })
        //     })
        var currentP = req.query.currentP;
        var currentIndex = (currentP - 1)*5;
        var queryData = "%" + req.query.queryData + "%";
        goodsDao.goodscom().then(function(data) {
            var getAllData = data;
            var mySql = '';
            var paramsArr = '';
            console.log(queryData)
            if(queryData == '') {
                mySql = "SELECT uc.commentsId,u.u_id,u.name,g.goods_ID,g.goodsName,CASE uc.comType WHEN 1 THEN '好评' WHEN 2 THEN '中评' ELSE '差评' END AS comType,uc.com_Content,DATE_FORMAT(comTime,'%Y-%m-%d %H:%i:%S') AS comTime FROM user_comments uc,users u,goods g WHERE uc.u_id=u.u_id AND uc.goods_ID=g.goods_ID";
                paramsArr = [currentIndex];
            }else {
                mySql = "SELECT uc.commentsId,u.u_id,u.name,g.goods_ID,g.goodsName,CASE uc.comType WHEN 1 THEN '好评' WHEN 2 THEN '中评' ELSE '差评' END AS comType,uc.com_Content,DATE_FORMAT(comTime,'%Y-%m-%d %H:%i:%S') AS comTime FROM user_comments uc,users u,goods g WHERE uc.u_id=u.u_id AND uc.goods_ID=g.goods_ID AND comType IN (SELECT comType FROM user_comments WHERE comType LIKE ?)";
                paramsArr = [queryData,currentIndex];
            }
            goodsDao.goodscom2(mySql,queryData).then(function(data) {
                var getData = data;
                mySql += ' limit ?,5';
                goodsDao.goodscom3(mySql,paramsArr).then(function(data) {
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
    // 删除商品
    getgoodsdelete(req,resp){
        var deleteId = req.query.deleteId;
        console.log(deleteId)
        goodsDao.deletegoods(deleteId)
            .then(function(data) {
            console.log(data);
            resp.send(data);
        })
    },
    // 商品上架
    getonstatus(req,resp){
        var deleteId = req.query.id;
        goodsDao.status(deleteId)
            .then(function (data) {
                resp.send(data);
            })
    },
    // 商品下架
    getunstatus(req,resp){
        var deleteId = req.query.id;
        console.log(deleteId);
        goodsDao.status2(deleteId)
            .then(function (data) {
                resp.send(data);
            })
    },
    // 商品种类上架
    getoncatestatus(req,resp){
        var deleteId = req.query.id;
        goodsDao.oncatestatus(deleteId)
            .then(function (data) {
                resp.send(data);
            })
    },
    // 商品种类下架
    getuncatestatus(req,resp){
        var deleteId = req.query.id;
        goodsDao.uncatestatus(deleteId)
            .then(function (data) {
                resp.send(data);
            })
    },
    // 商品种类删除
    getdelcate(req,resp){
        var deleteId = req.query.deleteId;
        goodsDao.delcate(deleteId)
            .then(function(data) {
            resp.send(data);
        })
    },
    //商品评论删除
    getdelcom(req,resp){
        var deleteId = req.query.deleteId;
        goodsDao.delcom(deleteId)
            .then(function(data) {
                resp.send(data);
            })
    },
    // 商品详情
    getgoodsdetail(req,resp){
        // goodsDao.goodsdetail2()
        //     .then(function (data) {
        //         let getAllData = data;
        //         console.log(data);
        //         goodsDao.goodsdetail().then(function(data) {
        //             let getData = data;
        //             dataInfo = {
        //                 getAllData: getAllData,
        //                 getData: getData
        //             };
        //             resp.send(dataInfo);
        //         })
        //     })
        var currentP = req.query.currentP;
        var currentIndex = (currentP - 1)*5;
        var queryData = "%" + req.query.queryData + "%";
        goodsDao.goodsdetail2().then(function(data) {
            var getAllData = data;
            var mySql = '';
            var paramsArr = '';
            console.log(queryData)
            if(queryData == '') {
                mySql = "SELECT gd.detailId,g.goods_ID,g.goodsName,gd.descTitle,(CASE WHEN LENGTH(gd.descText)>10 THEN CONCAT(SUBSTRING(gd.descText,1,10),'...') ELSE gd.descText END) AS descText,gd.detailImg FROM goods g,goods_details gd WHERE g.goods_ID=gd.goods_ID";
                paramsArr = [currentIndex];
            }else {
                mySql = "SELECT gd.detailId,g.goods_ID,g.goodsName,gd.descTitle,(CASE WHEN LENGTH(gd.descText)>10 THEN CONCAT(SUBSTRING(gd.descText,1,10),'...') ELSE gd.descText END) AS descText,gd.detailImg FROM goods g,goods_details gd WHERE g.goods_ID=gd.goods_ID AND g.goodsName IN (SELECT goodsName FROM goods WHERE goodsName LIKE ?)";
                paramsArr = [queryData,currentIndex];
            }
            goodsDao.goodsdetail(mySql,queryData).then(function(data) {
                var getData = data;
                mySql += ' limit ?,5';
                goodsDao.goodsdetail3(mySql,paramsArr).then(function(data) {
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
    // 商品详情 删除
    getdetaildelete(req,resp){
        var deleteId = req.query.deleteId;
        goodsDao.detaildelete(deleteId)
            .then(function (data) {
                resp.send(data)
            })
    },
    // 新增商品
    getaddgoodsinfo(req,resp){
        var popObj = JSON.parse(req.query.popObj);
        var insert = popObj.insert;
        var val = ''
        var sql = '';
        var wh = '';
        var newDate = new Date();
        var y=newDate.getFullYear(); //获取完整的年份(4位,1970-????)
        var m=newDate.getMonth()+1; //获取当前月份(0-11,0代表1月)
        var d=newDate.getDate(); //获取当前日(1-31)
        var h=newDate.getHours(); //获取当前小时数(0-23)
        var mi=newDate.getMinutes(); //获取当前分钟数(0-59)
        var s=newDate.getSeconds(); //获取当前秒数(0-59)
        var myDate=y+""+m+""+d+""+h+""+mi+""+s;
        var myDate2=y+"-"+m+"-"+d+" "+h+":"+mi+":"+s;
        insert.goodsSn="234"+myDate;
        insert.createTime=myDate2;
        console.log(insert)
        var addArr = [];
        for(var key in insert) {
            addArr.push(insert[key]);
            val += key + ',' ;
            wh +='?,'
        }
        val = val.substr(0,val.length-1);
        wh = wh.substr(0,wh.length-1)
        sql = 'insert into goods (' + val + ') values (' + wh + ')';
        goodsDao.addgoodsinfo(sql,addArr)
            .then(function(data) {
                resp.send(data);
        })
    },
    // 商品信息修改
    getgoodsmodify(req,resp){
        var popObj = JSON.parse(req.query.popObj);
        var dataIndex = req.query.dataIndex;
        var modify = popObj.modify;
        var val = ''
        var sql = '';
        var wh = '';
        var addArr = [];
        console.log(modify)
        for(var key in modify) {
            if (modify[key]=='适用空间' || modify[key]=='已上架') {
                modify[key]=1;
            } else if (modify[key]=='植物品种' || modify[key]=='已下架') {
                modify[key]=2;
            } else if (modify[key]=='选购热点') {
                modify[key]=3;
            }
            console.log(modify[key])
            addArr.push(modify[key]);
            val += key + '=?,'
        }
        addArr.push(dataIndex);
        val = val.substr(0,val.length-1);
        sql = 'update goods set ' + val + ' where goods_ID=?';
        goodsDao.modifygoods(sql,addArr)
            .then(function(data) {
                resp.send(data);
        })
    },
    // 商品分类 新增
    getaddcate(req,resp){
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
        sql = 'insert into goods_category (' + val + ') values (' + wh + ')';
        goodsDao.addgoodsinfo(sql,addArr)
            .then(function(data) {
                resp.send(data);
            })
    },
    // 商品分类 修改
    getcatemodify(req,resp){
        var popObj = JSON.parse(req.query.popObj);
        var dataIndex = req.query.dataIndex;
        var modify = popObj.modify;
        var val = ''
        var sql = '';
        var wh = '';
        var addArr = [];
        console.log(modify)
        for(var key in modify) {
            if (modify[key]=="已上架"){
                modify[key]=1
            } else if (modify[key]=="已下架") {
                modify[key]=2
            }
            addArr.push(modify[key]);
            val += key + '=?,'
        }
        addArr.push(dataIndex);
        val = val.substr(0,val.length-1);
        sql = 'update goods_category set ' + val + ' where cate_ID=?';
        goodsDao.modifycate(sql,addArr)
            .then(function(data) {
                resp.send(data);
            })
    },
    // 商品详情 新增
    getadddetail(req,resp){
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
        val=val+'detailImg,goods_ID,descTitle,descText';
        sql = 'insert into goods_details (' + val + ') values (' + wh + ')';
        goodsDao.adddetail(sql,addArr)
            .then(function(data) {
                resp.send(data);
            })
    },
    // 商品详情 修改
    getdetailmodify(req,resp){
        var popObj = JSON.parse(req.query.popObj);
        var dataIndex = req.query.dataIndex;
        var modify = popObj.modify;
        var val = ''
        var sql = '';
        var wh = '';
        var addArr = [];
        console.log(modify)
        for(var key in modify) {
            addArr.push(modify[key]);
            val += key + '=?,'
        }
        addArr.push(dataIndex);
        val = val.substr(0,val.length-1);
        val='';
        val=val+'detailId=?,goods_ID=?,descTitle=?,descText=?,detailImg=?';
        sql = 'update goods_details set ' + val + ' where detailId=?';
        goodsDao.modifydetail(sql,addArr)
            .then(function(data) {
                resp.send(data);
            })
    },
    // 购物车
    shopping(req,resp){
        // console.log(1);
        // goodsDao.shopping2()
        //     .then(function (data) {
        //         let getAllData = data;
        //         console.log(data);
        //         goodsDao.shopping().then(function(data) {
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
        goodsDao.shopping2().then(function(data) {
            var getAllData = data;
            var mySql = '';
            var paramsArr = '';
            console.log(queryData)
            if(queryData == '') {
                mySql = "SELECT shop_ID,goods_ID,goodsNum,toal,total_of FROM shop_cart";
                paramsArr = [currentIndex];
            }else {
                mySql = "SELECT shop_ID,goods_ID,goodsNum,toal,total_of FROM shop_cart WHERE goods_ID IN (SELECT goods_ID FROM shop_cart WHERE goods_ID LIKE ?)";
                paramsArr = [queryData,currentIndex];
            }
            goodsDao.shopping(mySql,queryData).then(function(data) {
                var getData = data;
                mySql += ' limit ?,5';
                goodsDao.shopping3(mySql,paramsArr).then(function(data) {
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
    }
};
module.exports = goodsControoller;