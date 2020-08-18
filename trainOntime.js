require('./ajcs').call(module.exports, module, module.exports, module.require);
const alg = module.exports;

/**
 * 生成uid
 * H5GTrPIg7xLqOkNj6d6GxiVFFT
 */
function generateUID() {
    const source = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";

    let result = '';
    for(let i = 0; i < 26; i++) {
        const index = Math.floor(Math.random() * source.length);
        result += source[index];
    }
    return result;
}


/**
 * 根据uid计算sid
 * @param {String} uid uid
 */
function generateSignture(uid) {
    // trainOntime 签名参数
    const data = {
        uid,
        pid: 331553
    };

    let a = ["uid", "pid"].map(k => data[k]).join("");
    let i = alg(a + "/2g!q^l&$5");
    let r = [9, 13, 10, 20, 11, 26, 17, 12].map(index => i[index]).join("");
    const sid = r.toUpperCase();

    return sid;
}

module.exports = {
    generateSignture,
    generateUID,
};
