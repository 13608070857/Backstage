const userDao = require("../dao/userDao");

const userController = {
    getUserInfo(req,resp) {
        userDao.getUser().then(function(data) {
            // console.log(data);
            resp.send(data);
        });
    },
    deleteInfo(req,resp) {
    	var deleteId = req.query.deleteId;
    	console.log(deleteId)
    	userDao.deleteInfo(deleteId).then(function(data) {
    		console.log(data);
    	}).catch(error=> {
    		console.log(error)
    	})
    }
}
module.exports = userController;