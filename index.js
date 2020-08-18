const { generateUID, generateSignture } = require('./trainOntime');
const { redis_lpush } = require('./redis');
const { DateUtil } = require('sn-js-utils');

// uid = H5GTrPIg7xLqOkNj6d6GxiVFFT
// sid = 4ED6F02F

let dbno = 0;

while (dbno <= 64) {
    for (let i = 0; i < 1000; i++) {
        const uid = generateUID();
        const sid = generateSignture(uid);
    
        redis_lpush(`uid.${dbno}`, JSON.stringify({ uid, sid })).then(ret => {
            // console.log('写入redis成功');
        }).catch(err => {
            console.error(err);
        });
    }
    console.log(dbno, '写入完毕');
    // 更新日期
    dbno ++;
}

console.log('写入完毕');
