const leaseDao = require("../dao/leaseDao");
let dataInfo;
const leaseController = {
    leaseTransfer(req,resp) {
        leaseDao.leaseInquiry().then(function(data) {
            let getAllData = data;
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
    leaseModify(req,resp){
        var popObj = JSON.parse(req.query.popObj);
        var dataIndex = req.query.dataIndex;
        var modify = popObj.modify;
        var val = ''
        var sql = '';
        var wh = '';
        var addArr = [];
        for(var key in modify) {
            addArr.push(modify[key]);
            val += key + '=?,'
        }
        addArr.push(dataIndex);
        sql = 'UPDATE lease l,lease_details ld SET l.ID=?,ld.detailsName=?,l.Maintitle=?,l.Subtitle=?,ld.detailsPrice=?,ld.detailsImg=? WHERE l.ID=? AND ld.detailsID=l.ID';
        leaseDao.modifyRep(sql,addArr).then(function(data) {
            resp.send(data);
        })
    },
    addForum(req,resp) {
        var popObj = JSON.parse(req.query.popObj);
        var insert = popObj.insert;
        var val = '';
        var val2 = '';
        var sql = '';
        var sql2 = '';
        var wh = '';
        var wh2 = '';
        var addArr = [];
        var addArr2 = [];
        for(var key in insert) {
            if(/title/.test(key)) {
                addArr.push(insert[key].trim());
                val += key + ',' ;
                wh +='?,'
            }else {
                console.log(key)
                addArr2.push(insert[key].trim());
                val2 += key + ',' ;
                wh2 +='?,'
            }
        }
        val = val.substr(0,val.length-1);
        wh = wh.substr(0,wh.length-1);
        sql = 'insert into lease (ID,'+ val +') values(null,'+ wh +')';

        val2 = val2.substr(0,val2.length-1);
        wh2 = wh2.substr(0,wh2.length-1);
        sql2 = 'insert into lease_details (ID,'+ val2 +') values(null,'+ wh2 +')';
        console.log(sql2)
        console.log(addArr2)

        // leaseDao.addForum(sql,addArr).then(function(data) {
        //     resp.send(data);
        //     // return  leaseDao.addForum(sql,addArr);
        // })
    },
}
module.exports = leaseController;