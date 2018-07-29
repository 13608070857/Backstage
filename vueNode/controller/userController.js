const userDao = require("../dao/userDao");
const userController = {
    getUserInfo(req,resp) {
        var currentP = req.query.currentP;
        var currentIndex = (currentP - 1)*5;
        var queryData = "%" + req.query.queryData + "%";
        console.log(queryData)
        userDao.getAllUser().then(function(data) {
            var getAllData = data;
            var mySql = '';
            var paramsArr = '';
            if(queryData == '%%') {
                mySql = "select u_id,name,tel,email,userImg,DATE_FORMAT(createTime,\"%Y-%m-%d %H:%i:%S\") from users";
                paramsArr = [currentIndex];
            }else {
                mySql = "SELECT u_id,NAME,tel,email,userImg,DATE_FORMAT(createTime,\"%Y-%m-%d %H:%i:%S\") FROM users WHERE NAME LIKE ?";
                paramsArr = [queryData,currentIndex];
            }
            userDao.getForum(mySql,queryData).then(function(data) {
                var getData = data;
                mySql += ' limit ?,5';
                userDao.pacingForum(mySql,paramsArr).then(function(data) {
                    var paceDate = data;
                    dataInfo = {
                        getAllData: getAllData,
                        getData: getData,
                        paceDate: paceDate
                    };
                    resp.send(dataInfo);
                })

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
        var currentP = req.query.currentP;
        var currentIndex = (currentP - 1)*5;
        var queryData = "%" + req.query.queryData + "%";
        userDao.gradex().then(function(data) {
            var getAllData = data;
            var mySql = '';
            var paramsArr = '';
            if(queryData == '%%') {
                mySql = "SELECT Grade_ID,Grade_name,Growth_value FROM grade";
                paramsArr = [currentIndex];
            }else {
                mySql = "SELECT Grade_ID,Grade_name,Growth_value FROM grade WHERE NAME LIKE ?";
                paramsArr = [queryData,currentIndex];
            }
            userDao.getForum(mySql,queryData).then(function(data) {
                var getData = data;
                mySql += ' limit ?,5';
                console.log(getData)
                userDao.pacingForum(mySql,paramsArr).then(function(data) {
                    var paceDate = data;
                    dataInfo = {
                        getAllData: getAllData,
                        getData: getData,
                        paceDate: paceDate
                    };
                    resp.send(dataInfo);
                })

            })
        });
	},
    collection(req,resp) {
        var currentP = req.query.currentP;
        var currentIndex = (currentP - 1)*5;
        var queryData = "%" + req.query.queryData + "%";
        userDao.collectionx().then(function(data) {
            var getAllData = data;
            var mySql = '';
            var paramsArr = '';
            if(queryData == '%%') {
                mySql = "SELECT coll_id,coll_name,coll_img,coll_price,u_id FROM collection";
                paramsArr = [currentIndex];
            }else {
                mySql = "SELECT coll_id,coll_name,coll_img,coll_price,u_id FROM collection WHERE NAME LIKE ?";
                paramsArr = [queryData,currentIndex];
            }
            userDao.getForum(mySql,queryData).then(function(data) {
                var getData = data;
                mySql += ' limit ?,5';
                console.log(getData)
                userDao.pacingForum(mySql,paramsArr).then(function(data) {
                    var paceDate = data;
                    dataInfo = {
                        getAllData: getAllData,
                        getData: getData,
                        paceDate: paceDate
                    };
                    resp.send(dataInfo);
                })

            })
        });
	},
	staff(req,resp) {
        var currentP = req.query.currentP;
        var currentIndex = (currentP - 1)*5;
        var queryData = "%" + req.query.queryData + "%";
        userDao.staffx().then(function(data) {
            var getAllData = data;
            var mySql = '';
            var paramsArr = '';
            if(queryData == '%%') {
                mySql = "SELECT ID,name,A_number,tel,email,qq FROM workuser";
                paramsArr = [currentIndex];
            }else {
                mySql = "SELECT ID,name,A_number,tel,email,qq FROM workuser WHERE NAME LIKE ?";
                paramsArr = [queryData,currentIndex];
            }
            userDao.getForum(mySql,queryData).then(function(data) {
                var getData = data;
                mySql += ' limit ?,5';
                console.log(getData)
                userDao.pacingForum(mySql,paramsArr).then(function(data) {
                    var paceDate = data;
                    dataInfo = {
                        getAllData: getAllData,
                        getData: getData,
                        paceDate: paceDate
                    };
                    resp.send(dataInfo);
                })

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