const userDao = require("../dao/userDao");
let dataInfo;

const userController = {
    getUserInfo(req,resp) {
        userDao.getAllUser().then(function(data) {
            let getAllData = data;
            console.log(data);
            userDao.getUser().then(function(data) {
            	let getData = data;
            	dataInfo = {
            		getAllData: getAllData,
            		getData: getData
            	};
            	resp.send(dataInfo);
            })
        });
    },
    deleteInfo(req,resp) {
    	var deleteId = req.query.deleteId;
    	console.log(deleteId)
    	userDao.deleteInfo(deleteId).then(function(data) {
    		console.log(data);
    		resp.send(data);
    	})
    },
    addUserInfo(req,resp) {
    	var popObj = JSON.parse(req.query.popObj);
    	var val = ''
    	var sql = '';
    	var wh = '';
    	var addArr = [];
    	for(var key in popObj) {
    		addArr.push(popObj[key].trim());
    		val += key + ',' ;
    		wh +='?,'
    	}
    	val = val.substr(0,val.length-1);
    	wh = wh.substr(0,wh.length-1)
    	sql = 'insert into users (' + val + ') values (' + wh + ')';
    	userDao.addUserInfo(sql,addArr).then(function(data) {
    		resp.send(data);
    	})
    }
}
module.exports = userController;