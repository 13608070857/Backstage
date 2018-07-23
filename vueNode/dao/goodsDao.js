const db = require("../config/dbpoolConfig");
const goodsDao = {
    //查询所有商品
    goodsmsg(req,resp){
        return new Promise(function (resolve,reject) {
            db.connect("SELECT g.goodsSn,g.goodsName,g.goodsImg,goodsPrice,(SELECT gc.cateName FROM goods_category gc WHERE g.cate_ID=gc.cate_ID),DATE_FORMAT(g.createTime,\"%Y-%m-%d %H:%i:%S\"),IF(g.goodsStatus=1,\"已上架\",\"已下架\") FROM goods g WHERE g.inventory>-1",
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
    }
};
module.exports = goodsDao;