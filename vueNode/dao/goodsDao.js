const db = require("../config/dbpoolConfig");
const goodsDao = {
    //查询所有商品
    goodsmsg(req,resp){
        return new Promise(function (resolve,reject) {
            db.connect("SELECT g.goods_ID,g.goodsName,g.goodsImg,goodsPrice,gc.cateName,DATE_FORMAT(g.createTime,\"%Y-%m-%d %H:%i:%S\") AS createTime,IF(g.goodsStatus=1,\"已上架\",\"已下架\") AS goodsStatus " +
                "FROM goods g,goods_category gc " +
                "WHERE g.inventory>-1 AND g.is_delete=0 AND g.cate_ID=gc.cate_ID",
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
            db.connect("SELECT g.goods_ID,gc.cateName,g.goodsName,g.goodsImg,g.goodsPrice,g.is_shelves,g.is_hot,g.is_recom,g.is_new,g.is_sales,g.salesTime,g.inventory\n" +
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
            db.connect("SELECT cate_ID,cateName,IF(gc.status=1,\"已上架\",\"已下架\") as status,DATE_FORMAT(cateTime,\"%Y-%m-%d %H:%i:%S\") as cateTime FROM goods_category gc where gc.is_del=0",
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
            db.connect("SELECT uc.commentsId,u.u_id,u.name,g.goods_ID,g.goodsName,CASE uc.comType WHEN 1 THEN \"好评\" WHEN 2 THEN \"中评\" ELSE \"差评\" END as comType,uc.com_Content,DATE_FORMAT(comTime,\"%Y-%m-%d %H:%i:%S\") as comTime " +
                "FROM user_comments uc,users u,goods g " +
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
            db.connect("update goods set is_delete=1 where goods_ID=?", [params], function (error, data) {
                resolve(data);
            })
        })
    },
    // 上架商品
    status(params){
        return new Promise(function (resolve,reject) {
            db.connect("UPDATE goods SET goodsStatus=1 WHERE goods_ID=?",
                [params],(err,data)=>{
                    if (!err){
                        resolve(data);
                    } else {
                        reject(data);
                    }
                })
        })
    },
    //下架商品
    status2(params){
        return new Promise(function (resolve,reject) {
            db.connect("UPDATE goods SET goodsStatus=2 WHERE goods_ID=?",
                [params],(err,data)=>{
                    if (!err){
                        resolve(data);
                    } else {
                        reject(data);
                    }
                })
        })
    },
    //上架种类
    oncatestatus(params){
        return new Promise(function (resolve,reject) {
            db.connect("UPDATE goods_category SET status=1 WHERE cate_ID=?",
                [params],(err,data)=>{
                    if (!err){
                        resolve(data);
                    } else {
                        reject(data);
                    }
                })
        })
    },
    //下架种类
    uncatestatus(params){
        return new Promise(function (resolve,reject) {
            db.connect("UPDATE goods_category SET status=2 WHERE cate_ID=?",
                [params],(err,data)=>{
                    if (!err){
                        resolve(data);
                    } else {
                        reject(data);
                    }
                })
        })
    },
    //删除种类
    delcate(params){
        return new Promise(function (resolve,reject) {
            db.connect("update goods_category set is_del=1 WHERE cate_ID=?",
                [params],(err,data)=>{
                    if (!err){
                        resolve(data);
                    } else {
                        reject(data);
                    }
                })
        })
    },
    // 商品评论删除
    delcom(params){
        return new Promise(function (resolve,reject) {
            db.connect("delete from user_comments WHERE commentsId=?",
                [params],(err,data)=>{
                    if (!err){
                        resolve(data);
                    } else {
                        reject(data);
                    }
                })
        })
    },
    // 商品详情
    goodsdetail(req,resp){
        return new Promise(function (resolve,reject) {
            db.connect("SELECT gd.detailId,g.goods_ID,g.goodsName,gd.descTitle,(CASE WHEN LENGTH(gd.descText)>10 THEN CONCAT(SUBSTRING(gd.descText,1,10),'...') ELSE gd.descText END) AS descText,gd.detailImg FROM goods g,goods_details gd WHERE g.goods_ID=gd.goods_ID",
                [],(err,data)=>{
                    if (!err){
                        resolve(data);
                    } else {
                        reject(data);
                    }
                })
        })
    },
    goodsdetail2(req,resp){
        return new Promise(function (resolve,reject) {
            db.connect("SELECT gd.detailId,g.goods_ID,g.goodsName,gd.descTitle,gd.descText,gd.detailImg FROM goods g,goods_details gd WHERE g.goods_ID=gd.goods_ID\n",
                [],(err,data)=>{
                    if (!err){
                        resolve(data);
                    } else {
                        reject(data);
                    }
                })
        })
    },
    //商品详情 删除
    detaildelete(params){
        return new Promise(function (resolve,reject) {
            db.connect("delete from goods_details where detailId=?",
                [params],(err,data)=>{
                    if (!err){
                        resolve(data);
                    } else {
                        reject(data);
                    }
                })
        })
    },
    // 新增商品
    addgoodsinfo(params){
        return new Promise(function (resolve,reject) {
            db.connect("INSERT INTO goods(cate_ID,goodsSn,goodsName,goodsImg,goodsPrice,is_shelves,is_hot,is_recom,is_new,is_sales,salesTime,inventory,goodsStatus,createTime)\n" +
                "VALUE(?,CONCAT('234',DATE_FORMAT(NOW(),\"%Y%m%d%H%i%S\")),?,CONCAT('img/goods/','jUwLmpwZw_171.jpg'),?,?,?,?,?,?,?,?,'1',NOW())\n",
                [params],(err,data)=>{
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