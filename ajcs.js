function ajcs(t, e, n) {
    var r;
    !function(o) {
        "use strict";
        function i(t, e) {
            var n = (65535 & t) + (65535 & e);
            return (t >> 16) + (e >> 16) + (n >> 16) << 16 | 65535 & n
        }
        function a(t, e, n, r, o, a) {
            return i((s = i(i(e, t), i(r, a))) << (c = o) | s >>> 32 - c, n);
            var s, c
        }
        function s(t, e, n, r, o, i, s) {
            return a(e & n | ~e & r, t, e, o, i, s)
        }
        function c(t, e, n, r, o, i, s) {
            return a(e & r | n & ~r, t, e, o, i, s)
        }
        function u(t, e, n, r, o, i, s) {
            return a(e ^ n ^ r, t, e, o, i, s)
        }
        function f(t, e, n, r, o, i, s) {
            return a(n ^ (e | ~r), t, e, o, i, s)
        }
        function l(t, e) {
            var n, r, o, a, l;
            t[e >> 5] |= 128 << e % 32,
            t[14 + (e + 64 >>> 9 << 4)] = e;
            var p = 1732584193
              , d = -271733879
              , v = -1732584194
              , h = 271733878;
            for (n = 0; n < t.length; n += 16)
                r = p,
                o = d,
                a = v,
                l = h,
                d = f(d = f(d = f(d = f(d = u(d = u(d = u(d = u(d = c(d = c(d = c(d = c(d = s(d = s(d = s(d = s(d, v = s(v, h = s(h, p = s(p, d, v, h, t[n], 7, -680876936), d, v, t[n + 1], 12, -389564586), p, d, t[n + 2], 17, 606105819), h, p, t[n + 3], 22, -1044525330), v = s(v, h = s(h, p = s(p, d, v, h, t[n + 4], 7, -176418897), d, v, t[n + 5], 12, 1200080426), p, d, t[n + 6], 17, -1473231341), h, p, t[n + 7], 22, -45705983), v = s(v, h = s(h, p = s(p, d, v, h, t[n + 8], 7, 1770035416), d, v, t[n + 9], 12, -1958414417), p, d, t[n + 10], 17, -42063), h, p, t[n + 11], 22, -1990404162), v = s(v, h = s(h, p = s(p, d, v, h, t[n + 12], 7, 1804603682), d, v, t[n + 13], 12, -40341101), p, d, t[n + 14], 17, -1502002290), h, p, t[n + 15], 22, 1236535329), v = c(v, h = c(h, p = c(p, d, v, h, t[n + 1], 5, -165796510), d, v, t[n + 6], 9, -1069501632), p, d, t[n + 11], 14, 643717713), h, p, t[n], 20, -373897302), v = c(v, h = c(h, p = c(p, d, v, h, t[n + 5], 5, -701558691), d, v, t[n + 10], 9, 38016083), p, d, t[n + 15], 14, -660478335), h, p, t[n + 4], 20, -405537848), v = c(v, h = c(h, p = c(p, d, v, h, t[n + 9], 5, 568446438), d, v, t[n + 14], 9, -1019803690), p, d, t[n + 3], 14, -187363961), h, p, t[n + 8], 20, 1163531501), v = c(v, h = c(h, p = c(p, d, v, h, t[n + 13], 5, -1444681467), d, v, t[n + 2], 9, -51403784), p, d, t[n + 7], 14, 1735328473), h, p, t[n + 12], 20, -1926607734), v = u(v, h = u(h, p = u(p, d, v, h, t[n + 5], 4, -378558), d, v, t[n + 8], 11, -2022574463), p, d, t[n + 11], 16, 1839030562), h, p, t[n + 14], 23, -35309556), v = u(v, h = u(h, p = u(p, d, v, h, t[n + 1], 4, -1530992060), d, v, t[n + 4], 11, 1272893353), p, d, t[n + 7], 16, -155497632), h, p, t[n + 10], 23, -1094730640), v = u(v, h = u(h, p = u(p, d, v, h, t[n + 13], 4, 681279174), d, v, t[n], 11, -358537222), p, d, t[n + 3], 16, -722521979), h, p, t[n + 6], 23, 76029189), v = u(v, h = u(h, p = u(p, d, v, h, t[n + 9], 4, -640364487), d, v, t[n + 12], 11, -421815835), p, d, t[n + 15], 16, 530742520), h, p, t[n + 2], 23, -995338651), v = f(v, h = f(h, p = f(p, d, v, h, t[n], 6, -198630844), d, v, t[n + 7], 10, 1126891415), p, d, t[n + 14], 15, -1416354905), h, p, t[n + 5], 21, -57434055), v = f(v, h = f(h, p = f(p, d, v, h, t[n + 12], 6, 1700485571), d, v, t[n + 3], 10, -1894986606), p, d, t[n + 10], 15, -1051523), h, p, t[n + 1], 21, -2054922799), v = f(v, h = f(h, p = f(p, d, v, h, t[n + 8], 6, 1873313359), d, v, t[n + 15], 10, -30611744), p, d, t[n + 6], 15, -1560198380), h, p, t[n + 13], 21, 1309151649), v = f(v, h = f(h, p = f(p, d, v, h, t[n + 4], 6, -145523070), d, v, t[n + 11], 10, -1120210379), p, d, t[n + 2], 15, 718787259), h, p, t[n + 9], 21, -343485551),
                p = i(p, r),
                d = i(d, o),
                v = i(v, a),
                h = i(h, l);
            return [p, d, v, h]
        }
        function p(t) {
            var e, n = "", r = 32 * t.length;
            for (e = 0; e < r; e += 8)
                n += String.fromCharCode(t[e >> 5] >>> e % 32 & 255);
            return n
        }
        function d(t) {
            var e, n = [];
            for (n[(t.length >> 2) - 1] = void 0,
            e = 0; e < n.length; e += 1)
                n[e] = 0;
            var r = 8 * t.length;
            for (e = 0; e < r; e += 8)
                n[e >> 5] |= (255 & t.charCodeAt(e / 8)) << e % 32;
            return n
        }
        function v(t) {
            var e, n, r = "";
            for (n = 0; n < t.length; n += 1)
                e = t.charCodeAt(n),
                r += "0123456789abcdef".charAt(e >>> 4 & 15) + "0123456789abcdef".charAt(15 & e);
            return r
        }
        function h(t) {
            return unescape(encodeURIComponent(t))
        }
        function y(t) {
            return function(t) {
                return p(l(d(t), 8 * t.length))
            }(h(t))
        }
        function m(t, e) {
            return function(t, e) {
                var n, r, o = d(t), i = [], a = [];
                for (i[15] = a[15] = void 0,
                o.length > 16 && (o = l(o, 8 * t.length)),
                n = 0; n < 16; n += 1)
                    i[n] = 909522486 ^ o[n],
                    a[n] = 1549556828 ^ o[n];
                return r = l(i.concat(d(e)), 512 + 8 * e.length),
                p(l(a.concat(r), 640))
            }(h(t), h(e))
        }
        function g(t, e, n) {
            return e ? n ? m(e, t) : v(m(e, t)) : n ? y(t) : v(y(t))
        }
        void 0 === (r = function() {
            return g
        }
        .call(e, n, e, t)) || (t.exports = r)
    }()
}

module.exports = ajcs