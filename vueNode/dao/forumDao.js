const db = require("../config/dbpoolConfig");

const forumDao = {
    getAllForum(params) {
        return new Promise(function (resolve, reject) {
            db.connect("select * from post", [], function (error, data) {
                resolve(data);
            });
        });
    },
    getForum(params) {
        return new Promise(function (resolve, reject) {
            db.connect("SELECT postId,postTitle,postImg,(SELECT categoryName FROM forum_category fc WHERE fc.categoryId = p.categoryId) cName,DATE_FORMAT(postTime,\"%Y-%m-%d %H:%i:%S\"),postStatus FROM post p", [], function (error, data) {
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
    getForumRep(params) {
        return new Promise(function (resolve, reject) {
            db.connect("select RestoreId,(SELECT u.name FROM users u WHERE u.u_id=rp.u_id) uName,(SELECT u.userImg FROM users u WHERE u.u_id=rp.u_id) uImg,RestoreBody,DATE_FORMAT(resTime,\"%Y-%m-%d %H:%i:%S\") resTime from rep_post rp", [], function (error, data) {
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
