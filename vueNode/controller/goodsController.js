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
                resp.send(data);
            })
    },
    // 商品评论
    getcomments(req,resp){
        goodsDao.goodscom()
            .then(function (data) {
                resp.send(data);
            })
    }
};
module.exports = goodsControoller;