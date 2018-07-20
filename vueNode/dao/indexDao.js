const db = require("../config/dbpoolConfig");

const indexDao = {
  index(req,resp) {
    return new Promise(function(resolve,reject) {
      db.connect("select count(*) from users",
        [],(err,data)=>{
          if (!err){
            resolve(data);
          } else {
            reject(data);
          }
        });
    });
  }
}
module.exports = indexDao;
