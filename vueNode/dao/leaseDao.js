const db = require("../config/dbpoolConfig");
const leaseDao = {
    leaseInquiry(params) {
        return new Promise(function (resolve, reject) {
            db.connect("SELECT l.ID,ld.detailsName,l.Maintitle,l.Subtitle,ld.detailsPrice,ld.detailsImg FROM lease l,lease_details ld WHERE l.ID=ld.ID", [], function (error, data) {
                resolve(data)
            })
        })
    }
};
module.exports = leaseDao;