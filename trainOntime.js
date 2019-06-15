// trainOntime
const data = {
    "uid": "H5GTrPIg7xLqOkNj6d6GxiVFFT",
    "pid": 331553,
    "trainNo": "T25",
    "departCode": "SNH",
    "arriveCode": "NNZ",
    "departDate": "2019-06-15",
};
//sid = 4ED6F02F

let a = ["uid", "pid"].map(k => data[k]).join("");
require('./ajcs').call(module.exports, module, module.exports, module.require)
let i = module.exports(a + "/2g!q^l&$5");
let r = [9, 13, 10, 20, 11, 26, 17, 12].map(index => i[index]).join("");
const sid = r.toUpperCase();

console.log(sid);
