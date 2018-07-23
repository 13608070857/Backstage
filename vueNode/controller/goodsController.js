const goodsDao = require("../dao/goodsDao");
const goodsControoller = {
    // 所有商品
    getallgoods(req,resp){
        goodsDao.goodsmsg()
            .then(function (data) {
                console.log(data);
                resp.send(data);
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