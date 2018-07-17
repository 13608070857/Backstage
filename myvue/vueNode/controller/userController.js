const userDao = require("../dao/userDao");

const userController = {
    getUserInfo(req,resp) {
        userDao.getUser().then(function(data) {
            console.log(data);
            resp.send(data);
        });
    }
}
module.exports = userController;