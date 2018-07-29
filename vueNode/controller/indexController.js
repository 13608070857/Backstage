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
        console.log("login");
        let username = req.body.user
        indexDao.login(req.body.user,req.body.pass)
            .then(function(data){
                console.log(data.length);
                if(data.length>0) {
                    req.session.user=username;
                    resp.send(req.session.user)
                }else {
                    resp.send(data);
                }
            })
    },
    jinru(req,resp) {
        resp.send(req.session.user)
    },
    personal(req,resp) {
        let user = req.session.user
        indexDao.personal(user)
            .then(function(data){
                resp.send(data)
            })
    },
    tuichu(req,resp) {
        req.session.destroy();
        resp.send(" ")
    },
    upload(req,resp) {
        console.log("111");
        let ID = req.query.ID;
        let name = req.query.name;
        let A_number = req.query.A_number;
        let password = req.query.password;
        let tel = req.query.tel;
        let email = req.query.email;
        let qq = req.query.qq;
        let sex = req.query.sex;
        console.log(ID);
        console.log(name);
        console.log(A_number);
        console.log(password);
        console.log(tel);
        console.log(email);
        console.log(qq);
        console.log(sex);
        // let sql = 'UPDATE workuser SET NAME = "+ID +",A_number = "123456" ,PASSWORD = 123,tel = "15528343906",email = "123@qq.com", qq = 1234, sex = "男" WHERE ID = 1'
        // let sql = 'UPDATE workuser SET NAME ='+name +',A_number = '+ A_number+' ,PASSWORD = '+password +',tel = '+tel+',email = '+email+', qq = '+qq+', sex = '+sex+' WHERE ID = '+ID+''
        indexDao.upload(ID,name,A_number,password,tel,email,qq,sex)
            .then(function (data) {
                console.log(data);
            })
    }
}
module.exports = indexController;
