const db = require("../config/dbpoolConfig");

const userDao = {
    getAllUser(params) {
        return new Promise(function(resolve,reject) {
            db.connect("select * from users",[],function(error,data) {
                    resolve(data);
                });
        });
    },
    getUser(params) {
    	return new Promise(function(resolve,reject) {
            db.connect("select u_id,name,tel,email,userImg,DATE_FORMAT(createTime,\"%Y-%m-%d %H:%i:%S\") from users",[],function(error,data) {
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
