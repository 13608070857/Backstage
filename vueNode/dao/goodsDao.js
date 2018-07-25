const db = require("../config/dbpoolConfig");
const goodsDao = {
    //查询所有商品
    goodsmsg(req,resp){
        return new Promise(function (resolve,reject) {
            db.connect("SELECT g.goodsSn,g.goodsName,g.goodsImg,goodsPrice,(SELECT gc.cateName FROM goods_category gc WHERE g.cate_ID=gc.cate_ID),DATE_FORMAT(g.createTime,\"%Y-%m-%d %H:%i:%S\"),IF(g.goodsStatus=1,\"已上架\",\"已下架\") FROM goods g WHERE g.inventory>-1 and g.is_delete=0",
                [],(err,data)=>{
                    if (!err){
                        resolve(data);
                    } else {
                        reject(data);
                    }
                })
        })
    },
    goodsmsg2(req,resp){
        return new Promise(function (resolve,reject) {
            db.connect("SELECT g.goodsSn,gc.cateName,g.goodsName,g.goodsImg,g.goodsPrice,g.is_shelves,g.is_hot,g.is_recom,g.is_new,g.is_sales,g.salesTime,g.inventory\n" +
                "FROM goods g,goods_category gc WHERE g.cate_ID=gc.cate_ID AND g.inventory>-1 and g.is_delete=0",
                [],(err,data)=>{
                    if (!err){
                        resolve(data);
                    } else {
                        reject(data);
                    }
                })
        })
    },
    // 商品分类
    goodscate(req,resp){
        return new Promise(function (resolve,reject) {
            db.connect("SELECT cate_ID,cateName,DATE_FORMAT(cateTime,\"%Y-%m-%d %H:%i:%S\"),IF(gc.status=1,\"已上架\",\"已下架\") FROM goods_category gc",
                [],(err,data)=>{
                    if (!err){
                        resolve(data);
                    } else {
                        reject(data);
                    }
                })
        })
    },
    // 商品评论
    goodscom(req,resp){
        return new Promise(function (resolve,reject) {
            db.connect("SELECT uc.commentsId,u.u_id,u.name,g.goods_ID,g.goodsName,CASE uc.comType WHEN 1 THEN \"好评\" WHEN 2 THEN \"中评\" ELSE \"差评\" END,uc.com_Content,DATE_FORMAT(comTime,\"%Y-%m-%d %H:%i:%S\")\n" +
                "FROM user_comments uc,users u,goods g\n" +
                "WHERE uc.u_id=u.u_id AND uc.goods_ID=g.goods_ID",
                [],(err,data)=>{
                    if (!err){
                        resolve(data);
                    } else {
                        reject(data);
                    }
                })
        })
    },
    // 删除商品
    deletegoods(params) {
        return new Promise(function (resolve, reject) {
            db.connect("update goods set is_delete=1 where goodsSn=?", [params], function (error, data) {
                resolve(data);
            })
        })
    },
};
module.exports = goodsDao;