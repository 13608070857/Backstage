const indexDao = require("../dao/indexDao");

const indexController = {
  index(req,resp) {
    indexDao.index()
      .then(function(data) {
        console.log(data);
        // resp.send(data);
    });
  }
}
module.exports = indexController;
