const userDao = require("../dao/userDao");
let dataInfo;

const userController = {
    getUserInfo(req,resp) {
        userDao.getAllUser().then(function(data) {
            let getAllData = data;
            // console.log(data);
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
    	console.log(insert)
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
    	var val = ''
    	var sql = '';
    	var wh = '';
    	var addArr = [];
    	console.log(modify)
    	for(var key in modify) {
    		addArr.push(modify[key]);
    		val += key + '=?,'
    	}
    	addArr.push(dataIndex);
    	val = val.substr(0,val.length-1);
    	sql = 'update users set ' + val + ' where u_id=?';
    	userDao.modifyUserInfo(sql,addArr).then(function(data) {
    		resp.send(data);
    	})
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
	},
    collection(req,resp) {
        userDao.collectionx().then(function(data) {
            let getAllData = data;
            console.log(data);
            userDao.collection().then(function(data) {
                let getData = data;
                dataInfo = {
                    getAllData: getAllData,
                    getData: getData
                };
                resp.send(dataInfo);
            })
        });
	},
	staff(req,resp) {
        userDao.staffx().then(function(data) {
            let getAllData = data;
            console.log(data);
            userDao.staff().then(function(data) {
                let getData = data;
                dataInfo = {
                    getAllData: getAllData,
                    getData: getData
                };
                resp.send(dataInfo);
            })
        });
	},
    grademodify(req,resp) {
        var popObj = JSON.parse(req.query.popObj);
        var dataIndex = req.query.dataIndex;
        var modify = popObj.modify;
        var val = ''
        var sql = '';
        var wh = '';
        var addArr = [];
        console.log(modify)
        for(var key in modify) {
            addArr.push(modify[key]);
            val += key + '=?,'
        }
        addArr.push(dataIndex);
        val = val.substr(0,val.length-1);
        sql = 'update grade set ' + val + ' where Grade_ID=?';
        userDao.modifyUserInfo(sql,addArr).then(function(data) {
            resp.send(data);
        })
    },
    gradedelete(req,resp) {
        var deleteId = req.query.deleteId;
        console.log(deleteId)
        userDao.gradedelete(deleteId).then(function(data) {
            console.log(data);
            resp.send(data);
        })
    },
    addgrade(req,resp) {
    	var popObj = JSON.parse(req.query.popObj);
        var insert = popObj.insert;
        var val = ''
        var sql = '';
        var wh = '';
        console.log('insert')
        console.log(insert)
        var addArr = [];
        for(var key in insert) {
            addArr.push(insert[key].trim());
            val += key + ',' ;
            wh +='?,'
        }
        val = val.substr(0,val.length-1);
        wh = wh.substr(0,wh.length-1)
        sql = 'insert into grade (' + val + ') values (' + wh + ')';
        userDao.addUserInfo(sql,addArr).then(function(data) {
            resp.send(data);
        })
    },
    staffmodify(req,resp) {
        var popObj = JSON.parse(req.query.popObj);
        var dataIndex = req.query.dataIndex;
        var modify = popObj.modify;
        var val = ''
        var sql = '';
        var wh = '';
        var addArr = [];
        console.log(modify)
        for(var key in modify) {
            addArr.push(modify[key]);
            val += key + '=?,'
        }
        addArr.push(dataIndex);
        val = val.substr(0,val.length-1);
        sql = 'update workuser set ' + val + ' where ID=?';
        userDao.modifyUserInfo(sql,addArr).then(function(data) {
            resp.send(data);
        })
    },
    staffdelete(req,resp) {
        var deleteId = req.query.deleteId;
        console.log(deleteId)
        userDao.staffdelete(deleteId).then(function(data) {
            console.log(data);
            resp.send(data);
        })
    },
    addstaff(req,resp) {
        var popObj = JSON.parse(req.query.popObj);
        var insert = popObj.insert;
        var val = ''
        var sql = '';
        var wh = '';
        console.log('insert')
        console.log(insert)
        var addArr = [];
        for(var key in insert) {
            addArr.push(insert[key].trim());
            val += key + ',' ;
            wh +='?,'
        }
        val = val.substr(0,val.length-1);
        wh = wh.substr(0,wh.length-1)
        sql = 'insert into workuser (' + val + ') values (' + wh + ')';
        userDao.addUserInfo(sql,addArr).then(function(data) {
            resp.send(data);
        })
    }
}
module.exports = userController;