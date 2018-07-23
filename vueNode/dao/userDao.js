const db = require("../config/dbpoolConfig");

const userDao = {
    getUser(params) {
        return new Promise(function(resolve,reject) {
            db.connect("select * from users",[],function(error,data) {
                    resolve(data);
                });
        });
    },
    deleteInfo(params) {
    	console.log(params);
    	return new Promise(function(resolve,reject) {
    		db.connect("delete from users where u_id=?",[params],function(error,data) {
    			resolve(data);
    		})
    	})
    }
}
module.exports = userDao;
