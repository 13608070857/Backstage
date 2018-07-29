const db = require("../config/dbpoolConfig");

const forumDao = {
    getAllForum(params) {
        return new Promise(function (resolve, reject) {
            db.connect("select postId,categoryId,RestoreId,u_id,postTitle,postContent,postImg,postDes,DATE_FORMAT(postTime,\"%Y-%m-%d %H:%i:%S\"),postLike,isRecommend,postStatus from post", [], function (error, data) {
                resolve(data);
            });
        });
    },
    getForum(sql,params) {
        return new Promise(function (resolve, reject) {
            db.connect(sql, [params], function (error, data) {
                resolve(data);
            });
        });
    },
    pacingForum(sql,...args) {
        return new Promise(function (resolve, reject) {
            db.connect(sql, ...args, function (error, data) {
                resolve(data);
            });
        });
    },
    deleteForum(params) {
        return new Promise(function (resolve, reject) {
            db.connect("delete from post where postId=?", [params], function (error, data) {
                resolve(data);
            })
        })
    },
    extractForum(...args) {
        return new Promise(function (resolve, reject) {
            db.connect("update post set postStatus=? where postId=?", [...args], function (error, data) {
                resolve(data);
            })
        })
    },
    setTopForum(...args) {
        return new Promise(function (resolve, reject) {
            db.connect("update post set postStatus=? where postId=?", [...args], function (error, data) {
                resolve(data);
            })
        })
    },
    getAllForumRep(params) {
        return new Promise(function (resolve, reject) {
            db.connect("select RestoreId,(SELECT u.name FROM users u WHERE u.u_id=rp.u_id) uName,(SELECT u.userImg FROM users u WHERE u.u_id=rp.u_id) uImg,RestoreBody,DATE_FORMAT(resTime,\"%Y-%m-%d %H:%i:%S\") resTime from rep_post rp", [], function (error, data) {
                resolve(data);
            });
        });
    },
    getForumRep(sql,params) {
        return new Promise(function (resolve, reject) {
            db.connect(sql, [params], function (error, data) {
                resolve(data);
            });
        });
    },
    pacingForumRep(sql,...args) {
        return new Promise(function (resolve, reject) {
            db.connect(sql, ...args, function (error, data) {
                resolve(data);
            });
        });
    },
    deleteRep(params) {
        return new Promise(function (resolve, reject) {
            db.connect("delete from post where postId=?", [params], function (error, data) {
                resolve(data);
            })
        })
    }

}
module.exports = forumDao;
