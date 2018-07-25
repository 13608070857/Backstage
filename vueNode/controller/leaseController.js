const leaseDao = require("../dao/leaseDao");
let dataInfo;
const leaseController = {
    leaseTransfer(req,resp) {
        leaseDao.leaseInquiry().then(function(data) {
            let getAllData = data;
            console.log(data);
            leaseDao.leaseInquiry().then(function(data) {
                let getData = data;
                dataInfo = {
                    getAllData: getAllData,
                    getData: getData
                };
                resp.send(dataInfo);
            })
        });
    },
}
module.exports = leaseController;