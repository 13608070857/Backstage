const forumDao = require("../dao/forumDao");
let dataInfo;

const forumController = {
    getForumInfo(req,resp) {
        forumDao.getAllForum().then(function(data) {
            let getAllData = data;
            // console.log(data);
            forumDao.getForum().then(function(data) {
            	let getData = data;
            	dataInfo = {
            		getAllData: getAllData,
            		getData: getData
            	};
            	resp.send(dataInfo);
            })
        });
    },
    deleteForum(req,resp) {
    	var deleteId = req.query.deleteId;
    	console.log(deleteId)
    	forumDao.deleteForum(deleteId).then(function(data) {
    		console.log(data);
    		resp.send(data);
    	})
    },
    addForum(req,resp) {
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
    	forumDao.addForum(sql,addArr).then(function(data) {
    		resp.send(data);
    	})
    },
    modifyForum(req,resp) {
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
    	forumDao.modifyForum(sql,addArr).then(function(data) {
    		resp.send(data);
    	})
    },
    extract (req,resp) {
        console.log(1)
    },
    setTop (req,resp) {
        console.log(1)
    },
    getForumRep(req,resp) {
        forumDao.getAllForumRep().then(function(data) {
            let getAllData = data;
            // console.log(data);
            forumDao.getForumRep().then(function(data) {
                let getData = data;
                dataInfo = {
                    getAllData: getAllData,
                    getData: getData
                };
                resp.send(dataInfo);
            })
        });
    },
    deleteRep(req,resp) {
        var deleteId = req.query.deleteId;
        console.log(deleteId)
        forumDao.deleteRep(deleteId).then(function(data) {
            console.log(data);
            resp.send(data);
        })
    },
    addRep(req,resp) {
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
        forumDao.addRep(sql,addArr).then(function(data) {
            resp.send(data);
        })
    },
    modifyRep(req,resp) {
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
        forumDao.modifyRep(sql,addArr).then(function(data) {
            resp.send(data);
        })
    }

}
module.exports = forumController;