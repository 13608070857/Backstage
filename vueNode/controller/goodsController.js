const goodsDao = require("../dao/goodsDao");
let dataInfo;
const goodsControoller = {
    // 所有商品
    getallgoods(req,resp){
        goodsDao.goodsmsg2()
            .then(function (data) {
                let getAllData = data;
                console.log(data);
                goodsDao.goodsmsg().then(function(data) {
                    let getData = data;
                    dataInfo = {
                        getAllData: getAllData,
                        getData: getData
                    };
                    resp.send(dataInfo);
                })
            })
    },
    //商品分类
    getcategory(req,resp){
        goodsDao.goodscate()
            .then(function (data) {
                let getAllData = data;
                console.log(data);
                goodsDao.goodscate().then(function(data) {
                    let getData = data;
                    dataInfo = {
                        getAllData: getAllData,
                        getData: getData
                    };
                    resp.send(dataInfo);
                })
            })
    },
    // 商品评论
    getcomments(req,resp){
        goodsDao.goodscom()
            .then(function (data) {
                let getAllData = data;
                console.log(data);
                goodsDao.goodscom().then(function(data) {
                    let getData = data;
                    dataInfo = {
                        getAllData: getAllData,
                        getData: getData
                    };
                    resp.send(dataInfo);
                })
            })
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
        goodsDao.goodsdetail2()
            .then(function (data) {
                let getAllData = data;
                console.log(data);
                goodsDao.goodsdetail().then(function(data) {
                    let getData = data;
                    dataInfo = {
                        getAllData: getAllData,
                        getData: getData
                    };
                    resp.send(dataInfo);
                })
            })
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
        console.log("这是SQL");
        console.log(sql);
        goodsDao.addgoodsinfo(sql,addArr)
            .then(function(data) {
                console.log("这是数据")
                console.log(addArr)
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
                console.log("这还是数据");
                console.log(sql);
                console.log(addArr);
                resp.send(data);
        })
    },
    // 商品分类 新增
    getaddcate(req,resp){

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
                console.log("这还是数据");
                console.log(sql);
                console.log(addArr);
                resp.send(data);
            })
    },
    // 商品评论 新增
    getaddcom(req,resp){

    },
    // 商品评论 修改
    getcommodify(req,resp){

    },
    // 商品详情 新增
    getadddetail(req,resp){

    },
    // 商品详情 修改
    getdetailmodify(req,resp){

    },
    // 购物车
    shopping(req,resp){
        console.log(1);
        goodsDao.shopping2()
            .then(function (data) {
                let getAllData = data;
                console.log(data);
                goodsDao.shopping().then(function(data) {
                    let getData = data;
                    dataInfo = {
                        getAllData: getAllData,
                        getData: getData
                    };
                    resp.send(dataInfo);
                })
            })
    }
};
module.exports = goodsControoller;