const redis = require('redis');
const { promisify } = require('util');

// 连接redis
const client = redis.createClient({
    host: process.env.REDIS_HOST,
    password: process.env.REDIS_PASS,
    port: process.env.REDIS_PORT,
    no_ready_check: false,
    db: process.env.REDIS_DBNO,
});

// 监听 redis 事件
client.on('ready', () => {
  console.log('[redis]: Ready');
});
client.on('connect', () => {
  console.log('[redis]: Connect');
});
client.on('reconnecting', () => {
  console.log('[redis]: Reconnecting');
});
client.on('error', (error) => {
  console.log('[redis]: error: ', error);
});
client.on('warning', (warning) => {
  console.log('[redis]: warning: ', warning);
});


// 通过接口 promise 化，方面使用 async/await 调用
// string
const set = promisify(client.set).bind(client);
const setnx = promisify(client.setnx).bind(client);
const setex = promisify(client.setex).bind(client);
const psetex = promisify(client.psetex).bind(client);
const get = promisify(client.get).bind(client);
const getset = promisify(client.getset).bind(client);
const strlen = promisify(client.strlen).bind(client);
const append = promisify(client.append).bind(client);
const setrange = promisify(client.setrange).bind(client);
const getrange = promisify(client.getrange).bind(client);
const incr = promisify(client.incr).bind(client);
const incrby = promisify(client.incrby).bind(client);
const incrbyfloat = promisify(client.incrbyfloat).bind(client);
const decr = promisify(client.decr).bind(client);
const decrby = promisify(client.decrby).bind(client);
const mset = promisify(client.mset).bind(client);
const msetnx = promisify(client.msetnx).bind(client);
const mget = promisify(client.mget).bind(client);

// hash
const hset = promisify(client.hset).bind(client);
const hsetnx = promisify(client.hsetnx).bind(client);
const hget = promisify(client.hget).bind(client);
const hexists = promisify(client.hexists).bind(client);
const hdel = promisify(client.hdel).bind(client);
const hlen = promisify(client.hlen).bind(client);
const hstrlen = promisify(client.hstrlen).bind(client);
const hincrby = promisify(client.hincrby).bind(client);
const hincrbyfloat = promisify(client.hincrbyfloat).bind(client);
const hmset = promisify(client.hmset).bind(client);
const hmget = promisify(client.hmget).bind(client);
const hkeys = promisify(client.hkeys).bind(client);
const hvals = promisify(client.hvals).bind(client);
const hgetall = promisify(client.hgetall).bind(client);

// list
const lpush = promisify(client.lpush).bind(client);
const lpushx = promisify(client.lpushx).bind(client);
const rpush = promisify(client.rpush).bind(client);
const rpushx = promisify(client.rpushx).bind(client);
const lpop = promisify(client.lpop).bind(client);
const rpop = promisify(client.rpop).bind(client);
const rpoplpush = promisify(client.rpoplpush).bind(client);
const lrem = promisify(client.lrem).bind(client);
const llen = promisify(client.llen).bind(client);
const lindex = promisify(client.lindex).bind(client);
const linsert = promisify(client.linsert).bind(client);
const lset = promisify(client.lset).bind(client);
const lrange = promisify(client.lrange).bind(client);
const ltrim = promisify(client.ltrim).bind(client);
const blpop = promisify(client.blpop).bind(client);
const brpop = promisify(client.brpop).bind(client);
const brpoplpush = promisify(client.brpoplpush).bind(client);

// set
const sadd = promisify(client.sadd).bind(client);
const sismember = promisify(client.sismember).bind(client);
const spop = promisify(client.spop).bind(client);
const srandmember = promisify(client.srandmember).bind(client);
const srem = promisify(client.srem).bind(client);
const smove = promisify(client.smove).bind(client);
const scard = promisify(client.scard).bind(client);
const smembers = promisify(client.smembers).bind(client);
const sinter = promisify(client.sinter).bind(client);
const sinterstore = promisify(client.sinterstore).bind(client);
const sunion = promisify(client.sunion).bind(client);
const sunionstore = promisify(client.sunionstore).bind(client);
const sdiff = promisify(client.sdiff).bind(client);
const sdiffstore = promisify(client.sdiffstore).bind(client);

// db
const exists = promisify(client.exists).bind(client);
const type = promisify(client.type).bind(client);
const rename = promisify(client.rename).bind(client);
const renamenx = promisify(client.renamenx).bind(client);
const move = promisify(client.move).bind(client);
const del = promisify(client.del).bind(client);
const randomkey = promisify(client.randomkey).bind(client);
const dbsize = promisify(client.dbsize).bind(client);
const keys = promisify(client.keys).bind(client);
const flushdb = promisify(client.flushdb).bind(client);
const flushall = promisify(client.flushall).bind(client);
const select = promisify(client.select).bind(client);

// expire
const expire = promisify(client.expire).bind(client);
const expireat = promisify(client.expireat).bind(client);
const ttl = promisify(client.ttl).bind(client);
const persist = promisify(client.persist).bind(client);
const pexpire = promisify(client.pexpire).bind(client);
const pexpireat = promisify(client.pexpireat).bind(client);
const pttl = promisify(client.pttl).bind(client);

// transaction
const multi = promisify(client.multi).bind(client);

module.exports = {
  redis_set: set,
  redis_setnx: setnx,
  redis_setex: setex,
  redis_psetex: psetex,
  redis_get: get,
  redis_getset: getset,
  redis_strlen: strlen,
  redis_append: append,
  redis_setrange: setrange,
  redis_getrange: getrange,
  redis_incr: incr,
  redis_incrby: incrby,
  redis_incrbyfloat: incrbyfloat,
  redis_decr: decr,
  redis_decrby: decrby,
  redis_mset: mset,
  redis_msetnx: msetnx,
  redis_mget: mget,
  redis_hset: hset,
  redis_hsetnx: hsetnx,
  redis_hget: hget,
  redis_hexists: hexists,
  redis_hdel: hdel,
  redis_hlen: hlen,
  redis_hstrlen: hstrlen,
  redis_hincrby: hincrby,
  redis_hincrbyfloat: hincrbyfloat,
  redis_hmset: hmset,
  redis_hmget: hmget,
  redis_hkeys: hkeys,
  redis_hvals: hvals,
  redis_hgetall: hgetall,
  redis_sadd: sadd,
  redis_sismember: sismember,
  redis_spop: spop,
  redis_srandmember: srandmember,
  redis_srem: srem,
  redis_smove: smove,
  redis_scard: scard,
  redis_smembers: smembers,
  redis_sinter: sinter,
  redis_sinterstore: sinterstore,
  redis_sunion: sunion,
  redis_sunionstore: sunionstore,
  redis_sdiff: sdiff,
  redis_sdiffstore: sdiffstore,
  redis_lpush: lpush,
  redis_lpushx: lpushx,
  redis_rpush: rpush,
  redis_rpushx: rpushx,
  redis_lpop: lpop,
  redis_rpop: rpop,
  redis_rpoplpush: rpoplpush,
  redis_lrem: lrem,
  redis_llen: llen,
  redis_lindex: lindex,
  redis_linsert: linsert,
  redis_lset: lset,
  redis_lrange: lrange,
  redis_ltrim: ltrim,
  redis_blpop: blpop,
  redis_brpop: brpop,
  redis_brpoplpush: brpoplpush,
  redis_exists: exists,
  redis_type: type,
  redis_rename: rename,
  redis_renamenx: renamenx,
  redis_move: move,
  redis_del: del,
  redis_randomkey: randomkey,
  redis_dbsize: dbsize,
  redis_keys: keys,
  redis_flushdb: flushdb,
  redis_flushall: flushall,
  redis_select: select,
  redis_expire: expire,
  redis_expireat: expireat,
  redis_ttl: ttl,
  redis_persist: persist,
  redis_pexpire: pexpire,
  redis_pexpireat: pexpireat,
  redis_pttl: pttl,
  redis_multi: multi,
};
