const db = require("../config/dbpoolConfig");

const userDao = {
    getAllUser(params) {
        return new Promise(function (resolve, reject) {
            db.connect("select * from users", [], function (error, data) {
                resolve(data);
            });
        });
    },
    getUser(params) {
        return new Promise(function (resolve, reject) {
            db.connect("select u_id,name,tel,email,userImg,DATE_FORMAT(createTime,\"%Y-%m-%d %H:%i:%S\") from users", [], function (error, data) {
                resolve(data);
            });
        });
    },
    deleteInfo(params) {
        return new Promise(function (resolve, reject) {
            db.connect("delete from users where u_id=?", [params], function (error, data) {
                resolve(data);
            })
        })
    },
    addUserInfo(sql, ...args) {
        return new Promise(function (resolve, reject) {
            db.connect(sql, ...args, function (error, data) {
                resolve(data);
            })
        })
    },
    modifyUserInfo(sql, ...args) {
        return new Promise(function (resolve, reject) {
            db.connect(sql, ...args, function (error, data) {
                resolve(data);
            })
        })
    },
    gradex(req, resp) {
        return new Promise((resolve, reject) => {
            db.connect("SELECT * FROM grade",
                [], (err, data) => {
                    if (!err) {
                        resolve(data);
                    } else {
                        reject(data);
                    }
                })
        })
    },
    grade(req, resp) {
        return new Promise((resolve, reject) => {
            db.connect("SELECT Grade_ID,Grade_name,Growth_value FROM grade",
                [], (err, data) => {
                    if (!err) {
                        resolve(data);
                    } else {
                        reject(data);
                    }
                })
        })
    },
    collection(req, resp) {
        return new Promise((resolve, reject) => {
            db.connect("SELECT * FROM collection",
                [], (err, data) => {
                    if (!err) {
                        resolve(data);
                    } else {
                        reject(data);
                    }
                })
        })
    },
    collectionx(req, resp) {
        return new Promise((resolve, reject) => {
            db.connect("SELECT coll_id,coll_img,coll_name,coll_price,u_id,goods_ID FROM collection",
                [], (err, data) => {
                    if (!err) {
                        resolve(data);
                    } else {
                        reject(data);
                    }
                })
        })
    },

}
module.exports = userDao;
