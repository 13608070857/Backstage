const indexDao = require("../dao/indexDao");

const indexController = {
  index(req,resp) {
    userDao.getUser().then(function(data) {
      console.log(data);
      resp.send(data);
    });
  }
}
module.exports = indexController;
