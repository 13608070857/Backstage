const forumDao = require("../dao/forumDao");
var dataInfo;

const forumController = {
    getForumInfo(req,resp) {
        var currentP = req.query.currentP;
        var currentIndex = (currentP - 1)*currentP;
        var queryData = "%" + req.query.queryData + "%";

        // 弹出层
        forumDao.getAllForum().then(function(data) {
            var getAllData = data;

            // 表格信息
            var mySql = '';
            var paramsArr = '';
            if(queryData == '') {
                mySql = "SELECT postId,postTitle,postImg,(SELECT categoryName FROM forum_category fc WHERE fc.categoryId = p.categoryId) cName,DATE_FORMAT(postTime,\"%Y-%m-%d %H:%i:%S\"),postStatus FROM post p";
                paramsArr = [currentIndex];
            }else {
                mySql = "SELECT postId,postTitle,postImg,(SELECT categoryName FROM forum_category fc WHERE fc.categoryId = p.categoryId) cName,DATE_FORMAT(postTime,\"%Y-%m-%d %H:%i:%S\"),postStatus FROM post p WHERE p.categoryId in (SELECT categoryId FROM forum_category WHERE categoryName like ?)";
                paramsArr = [queryData,currentIndex];
            }
            forumDao.getForum(mySql,queryData).then(function(data) {
            	var getData = data;

                // 分页
                mySql += ' limit ?,5';
                forumDao.pacingForum(mySql,paramsArr).then(function(data) {
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
    deleteForum(req,resp) {
    	var deleteId = req.query.deleteId;
    	console.log(deleteId)
    	forumDao.deleteForum(deleteId).then(function(data) {
    		console.log(data);
    		resp.send(data);
    	})
    },
    extract (req,resp) {
        var status = req.query.status;
        var extractId = req.query.id;
        forumDao.extractForum(status,extractId).then(function(data) {
            console.log(data);
            resp.send(data);
        })
    },
    setTop (req,resp) {
        var status = req.query.status;
        var extractId = req.query.id;
        forumDao.setTopForum(status,extractId).then(function(data) {
            console.log(data);
            resp.send(data);
        })
    },
    getForumRep(req,resp) {
        var currentP = req.query.currentP;
        var currentIndex = (currentP - 1)*currentP;
        var queryData = "%" + req.query.queryData + "%";
        forumDao.getAllForumRep().then(function(data) {
            var getAllData = data;
            var mySql = '';
            var paramsArr = '';
            if(queryData == '') {
                mySql = "select RestoreId,(SELECT u.name FROM users u WHERE u.u_id=rp.u_id) uName,(SELECT u.userImg FROM users u WHERE u.u_id=rp.u_id) uImg,RestoreBody,DATE_FORMAT(resTime,\"%Y-%m-%d %H:%i:%S\") resTime from rep_post rp";
                paramsArr = [currentIndex];
            }else {
                mySql = "select RestoreId,(SELECT u.name FROM users u WHERE u.u_id=rp.u_id) uName,(SELECT u.userImg FROM users u WHERE u.u_id=rp.u_id) uImg,RestoreBody,DATE_FORMAT(resTime,\"%Y-%m-%d %H:%i:%S\") resTime from rep_post rp WHERE rp.u_id in (SELECT u_id FROM users WHERE name like ?)";
                paramsArr = [queryData,currentIndex];
            }
            forumDao.getForumRep(mySql,queryData).then(function(data) {
                var getData = data;
                mySql += ' limit ?,5';
                forumDao.pacingForumRep(mySql,paramsArr).then(function(data) {
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
    deleteRep(req,resp) {
        var deleteId = req.query.deleteId;
        console.log(deleteId)
        forumDao.deleteRep(deleteId).then(function(data) {
            console.log(data);
            resp.send(data);
        })
    }

}
module.exports = forumController;