const forumDao = require("../dao/forumDao");
let dataInfo;

const forumController = {
    getForumInfo(req,resp) {
        forumDao.getAllForum().then(function(data) {
            let getAllData = data;
            console.log(getAllData[0])
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
        forumDao.getAllForumRep().then(function(data) {
            let getAllData = data;
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
    }

}
module.exports = forumController;