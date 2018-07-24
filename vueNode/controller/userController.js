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
    	var addArr = [];
    	for(var key in popObj) {
    		addArr.push(popObj[key].trim());
    		val += key + ',' ;
    	}
    	val = val.substr(0,val.length-1);
    	sql = 'insert into users (' + val + ')';
    	console.log(sql);
    	console.log(addArr);
    	// userDao.deleteInfo(popObj).then(function(data) {
    	// 	resp.send(data);
    	// })
    }
}
module.exports = userController;