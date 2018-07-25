const indexDao = require("../dao/indexDao");

const indexController = {
    index(req,resp) {
        // 总人数
        indexDao.Zuser()
            .then(function(data) {
                let Zuser = data[0].count
                // 总售后
                indexDao.Zsale()
                    .then(function(data) {
                        let Zsale = data[0].count
                        // 总交易
                        indexDao.Ztransaction()
                            .then(function(data){
                                let Ztransaction = data[0].count
                                // 总订单
                                indexDao.ZOrder()
                                    .then(function(data){
                                        let ZOrder = data[0].count
                                        // 周用户
                                        indexDao.weekuser()
                                            .then(function(data){
                                                let weekuser = data[0].count
                                                // 月售后
                                                indexDao.monthsale()
                                                    .then(function(data){
                                                        let monthsale = data[0].count
                                                        // 年交易
                                                        indexDao.yeartransaction()
                                                            .then(function(data){
                                                                let yeartransaction = data[0].count
                                                                // 月订单
                                                                indexDao.monthOrder()
                                                                    .then(function(data){
                                                                        let monthOrder = data[0].count
                                                                        console.log(monthOrder);
                                                                        resp.send({
                                                                            Z: [Zuser,Zsale,Ztransaction,ZOrder],
                                                                            Y: [weekuser,monthsale,yeartransaction,monthOrder]
                                                                        });
                                                                    })
                                                            })
                                                    })
                                            })
                                    })
                            })
                    })
            });
    },
    Newest(req,resp) {
        indexDao.Newest()
            .then(function(data){
                resp.send(data)
            })
    },
    Obtain(req,resp) {
        indexDao.Twelvej()
            .then(function(data){
                let Twelvej = data
                indexDao.Twelves()
                    .then(function(data){
                        let Twelves = data
                        indexDao.Twelvejsh()
                            .then(function(data){
                                let Twelvejsh = data
                                indexDao.Twelved()
                                    .then(function(data){
                                        let Twelved = data
                                        resp.send([Twelves,Twelvejsh,Twelvej,Twelved])
                                    })
                            })
                    })
            })
    },
    xf(req,resp) {
        indexDao.xf()
            .then(function(data){
                resp.send(data)
            })
    },
    login(req,resp) {
        console.log("1");
    }
}
module.exports = indexController;
