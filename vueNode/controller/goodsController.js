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
        goodsDao.addgoodsinfo()
            .then(function (data) {
                resp.send(data)
            })
    }
};
module.exports = goodsControoller;