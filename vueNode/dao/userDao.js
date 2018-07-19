const db = require("../config/dbpoolConfig");

const userDao = {
    getUser(req,resp) {
        return new Promise(function(resolve,reject) {
            db.connect("select * from users",[],function(error,data) {
                    resolve(data);
                });
        });
    }
}
module.exports = userDao;
