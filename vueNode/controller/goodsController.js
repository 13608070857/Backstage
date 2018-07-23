const goodsDao = require("../dao/goodsDao");
const goodsControoller = {
    // 所有商品
    getallgoods(req,resp){
        goodsDao.goodsmsg()
            .then(function (data) {
                console.log(data);
                resp.send(data);
            })
    }
};
module.exports = goodsControoller;