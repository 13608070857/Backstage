const db = require("../config/dbpoolConfig");

const userDao = {
    getAllForum(params) {
        return new Promise(function (resolve, reject) {
            db.connect("select * from users", [], function (error, data) {
                resolve(data);
            });
        });
    },
    getForum(params) {
        return new Promise(function (resolve, reject) {
            db.connect("select u_id,name,tel,email,userImg,DATE_FORMAT(createTime,\"%Y-%m-%d %H:%i:%S\") from users", [], function (error, data) {
                resolve(data);
            });
        });
    },
    deleteForum(params) {
        return new Promise(function (resolve, reject) {
            db.connect("delete from users where u_id=?", [params], function (error, data) {
                resolve(data);
            })
        })
    },
    addForum(sql, ...args) {
        return new Promise(function (resolve, reject) {
            db.connect(sql, ...args, function (error, data) {
                resolve(data);
            })
        })
    },
    modifyForum(sql, ...args) {
        return new Promise(function (resolve, reject) {
            db.connect(sql, ...args, function (error, data) {
                resolve(data);
            })
        })
    },
    getAllForumRep(params) {
        return new Promise(function (resolve, reject) {
            db.connect("select * from users", [], function (error, data) {
                resolve(data);
            });
        });
    },
    getForumRep(params) {
        return new Promise(function (resolve, reject) {
            db.connect("select u_id,name,tel,email,userImg,DATE_FORMAT(createTime,\"%Y-%m-%d %H:%i:%S\") from users", [], function (error, data) {
                resolve(data);
            });
        });
    },
    deleteRep(params) {
        return new Promise(function (resolve, reject) {
            db.connect("delete from users where u_id=?", [params], function (error, data) {
                resolve(data);
            })
        })
    },
    addRep(sql, ...args) {
        return new Promise(function (resolve, reject) {
            db.connect(sql, ...args, function (error, data) {
                resolve(data);
            })
        })
    },
    modifyRep(sql, ...args) {
        return new Promise(function (resolve, reject) {
            db.connect(sql, ...args, function (error, data) {
                resolve(data);
            })
        })
    }

}
module.exports = userDao;
