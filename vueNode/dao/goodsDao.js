const db = require("../config/dbpoolConfig");
const goodsDao = {
    //查询所有商品
    goodsmsg(req,resp){
        return new Promise(function (resolve,reject) {
            db.connect("SELECT g.goodsSn,g.goodsName,goodsPrice,(SELECT gc.cateName FROM goods_category gc WHERE g.cate_ID=gc.cate_ID),g.salesTime,IF(g.goodsStatus=1,\"已上架\",\"已下架\") FROM goods g WHERE g.inventory>-1",
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
module.exports = goodsDao;