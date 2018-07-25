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
    	var insert = popObj.insert;
    	var val = ''
    	var sql = '';
    	var wh = '';
    	var addArr = [];
    	for(var key in insert) {
    		addArr.push(insert[key].trim());
    		val += key + ',' ;
    		wh +='?,'
    	}
    	val = val.substr(0,val.length-1);
    	wh = wh.substr(0,wh.length-1)
    	sql = 'insert into users (' + val + ') values (' + wh + ')';
    	userDao.addUserInfo(sql,addArr).then(function(data) {
    		resp.send(data);
    	})
    },
    modifyInfo(req,resp) {
    	var popObj = JSON.parse(req.query.popObj);
    	var dataIndex = req.query.dataIndex;
    	var modify = popObj.modify;
    	console.log(dataIndex)
    	console.log(modify)
    	var val = ''
    	var sql = '';
    	var wh = '';
    	var addArr = [];
    	for(var key in modify) {
    		console.log(key)
    		addArr.push(modify[key].trim());
    		val += key + '=?,'
    	}
    	val = val.substr(0,val.length-1);
    	console.log(val)
    	// sql = 'update users set'+ val + values (' + wh + ')';
    	// userDao.addUserInfo(sql,addArr).then(function(data) {
    	// 	resp.send(data);
    	// })
    },
    grade(req,resp) {
        userDao.gradex().then(function(data) {
            let getAllData = data;
            console.log(data);
            userDao.grade().then(function(data) {
                let getData = data;
                dataInfo = {
                    getAllData: getAllData,
                    getData: getData
                };
                resp.send(dataInfo);
            })
        });
	}
}
module.exports = userController;