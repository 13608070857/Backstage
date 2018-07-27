const db = require("../config/dbpoolConfig");

const userDao = {
    getAllUser(params) {
        return new Promise(function (resolve, reject) {
            db.connect("select * from users", [], function (error, data) {
                resolve(data);
            });
        });
    },
    getForum(sql,params) {
        // console.log(sql)
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
    getUser(params) {
        return new Promise(function (resolve, reject) {
            db.connect(sql, [params], function (error, data) {
                resolve(data);
            });
        });
    },
    deleteInfo(params) {
        return new Promise(function (resolve, reject) {
            db.connect(sql, ...args, function (error, data) {
                resolve(data);
            });
        });
    },
    gradedelete(params) {
        return new Promise(function (resolve, reject) {
            db.connect("delete from grade where Grade_ID=?", [params], function (error, data) {
                resolve(data);
            })
        })
    },
    staffdelete(params) {
        return new Promise(function (resolve, reject) {
            db.connect("delete from workuser where ID=?", [params], function (error, data) {
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
    collectionx(req, resp) {
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
    staffx(req, resp) {
        return new Promise((resolve, reject) => {
            db.connect("SELECT * FROM workuser",
                [], (err, data) => {
                    if (!err) {
                        resolve(data);
                    } else {
                        reject(data);
                    }
                })
        })
    }

}
module.exports = userDao;
