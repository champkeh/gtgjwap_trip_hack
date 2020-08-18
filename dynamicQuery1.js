// stationQuery
const data = {
    "uid": "H5xB7QxCo5ezPSlUtpHtnq95",
    "pid": 312020,
    "no": "MU5696",
    "date": "2020-08-27",
};
//sid = BF40BE4B

let a = ["uid", "pid", "no", "date", "dep", "arr"].map(k => data[k]).join("");
require('./ajcs').call(module.exports, module, module.exports, module.require)
let i = module.exports(a + "(fup|<@#3,");
let r = [2, 18, 25, 15, 9, 19, 1, 21].map(index => i[index]).join("");
const sid = r.toUpperCase();

console.log(sid);
