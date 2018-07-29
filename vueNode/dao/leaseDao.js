const db = require("../config/dbpoolConfig");
const leaseDao = {
    leaseInquiry(params) {
        return new Promise(function (resolve, reject) {
            db.connect("SELECT l.ID,ld.detailsName,l.Maintitle,l.Subtitle,ld.detailsPrice,ld.detailsImg FROM lease l,lease_details ld WHERE l.ID=ld.ID", [], function (error, data) {
                resolve(data)
            })
        })
    },
    getLease(sql,params) {
        return new Promise(function (resolve, reject) {
            db.connect(sql, [params], function (error, data) {
                resolve(data);
            });
        });
    },
    pacingLease(sql,...args) {
        return new Promise(function (resolve, reject) {
            db.connect(sql, ...args, function (error, data) {
                resolve(data);
            });
        });
    },
    modifyRep(sql, ...args) {
        return new Promise(function (resolve, reject) {
            db.connect(sql, ...args, function (error, data) {
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
    addForum2(sql2, ...args) {
        return new Promise(function (resolve, reject) {
            db.connect(sql2, ...args, function (error, data) {
                resolve(data);
                console.log(sql2)
                console.log(...args)
                console.log(data)
            })
        })
    },
};
module.exports = leaseDao;