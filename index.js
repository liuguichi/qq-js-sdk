! function (a, b, c) {
    var d = b(window[a] = window[a] || {});
    module.exports = d
}("mqq", function (a, b) {
    "use strict";

    function c(a, b) {
        var c, d, e, f;
        for (a = String(a).split("."), b = String(b).split("."), c = 0, f = Math.max(a.length, b.length); f > c; c++) {
            if (d = isFinite(a[c]) && Number(a[c]) || 0, e = isFinite(b[c]) && Number(b[c]) || 0, e > d) return -1;
            if (d > e) return 1
        }
        return 0
    }

    function d(b) {
        var c = window.MQQfirebug;
        if (a.debuging && c && c.log && "pbReport" !== b.method) try {
            c.log(b)
        } catch (d) {}
    }

    function e(a, b, c) {
        var d;
        for (d in b)(b.hasOwnProperty(d) && !(d in a) || c) && (a[d] = b[d]);
        return a
    }

    function f(b, c, d, e, f) {
        if (a.__needReport !== !1 && b && c && d) {
            var g, h, i, j, k = b + "://" + c + "/" + d;
            if (e = e || [], !f || !M[f] && !window[f])
                for (f = null, h = 0, i = e.length; i > h; h++)
                    if (g = e[h], a.isObject(g) && (g = g.callbackName || g.callback), g && (M[g] || window[g])) {
                        f = g;
                        break
                    }
            f && (N[f] = {
                from: "reportAPI",
                ns: c,
                method: d,
                uri: k,
                startTime: Date.now()
            }, j = String(f).match(/__MQQ_CALLBACK_(\d+)/), j && (N[j[1]] = N[f])), B.send(k, R)
        }
    }

    function g(a) {
        var b = a.split("."),
            c = window;
        return b.forEach(function (a) {
            !c[a] && (c[a] = {}), c = c[a]
        }), c
    }

    function h(b, c, d) {
        var e, f;
        return (b = a.isFunction(b) ? b : window[b]) ? (e = i(b), f = "__MQQ_CALLBACK_" + e, window[f] = function () {
            var a = E.call(arguments);
            k(e, a, c, d)
        }, f) : void 0
    }

    function i(a) {
        var b = "" + Q++;
        return a && (M[b] = a), b
    }

    function j(a) {
        var b, c, d, e = ["retCode", "retcode", "resultCode", "ret", "code", "r"];
        for (c = 0, d = e.length; d > c; c++)
            if (e[c] in a) {
                b = a[e[c]];
                break
            }
        return b
    }

    function k(c, f, g, h) {
        var i, k, l, m = a.isFunction(c) ? c : M[c] || window[c],
            n = Date.now();
        f = f || [], i = f[0], a.isUndefined(h) && (h = !0), a.isObject(i) && ("data" in i || (i.data = e({}, i)), "code" in i || (i.code = j(i) || 0), i.msg = i.msg || ""), a.isFunction(m) ? h ? setTimeout(function () {
            m.apply(null, f)
        }, 0) : m.apply(null, f) : console.log("mqqapi: not found such callback: " + c), g && (delete M[c], delete window["__MQQ_CALLBACK_" + c]), N[c] && (l = N[c], delete N[c], d({
            from: "fireCallback",
            ns: l.ns,
            method: l.method,
            ret: JSON.stringify(f),
            url: l.uri
        }), Number(c) && delete N["__MQQ_CALLBACK_" + c], i && (i.code !== b ? k = i.code : /^-?\d+$/.test(String(i)) && (k = i)), B.send(l.uri + "#callback", k, n - l.startTime))
    }

    function l(b) {
        var c = E.call(arguments, 1);
        a.android && c && c.length && c.forEach(function (b, d) {
            a.isObject(b) && "r" in b && "result" in b && (c[d] = b.result)
        }), k(b, c)
    }

    function m() {}

    function n(b, c) {
        var d = null,
            e = a.platform,
            f = b.split("."),
            h = b.lastIndexOf("."),
            i = f[f.length - 2],
            j = f[f.length - 1],
            k = g(b.substring(0, h));
        (!k[j] || a.debuging) && ((d = c[a.platform]) || "browser" === e || ((d = a.iOS && c.iOS) ? e = "iOS" : (d = a.android && c.android) && (e = "android")), d && c.supportInvoke && (P[i + "." + j] = d), k[j] = d || m, c.support && c.support[e] && (O[i + "." + j] = c.support[e]))
    }

    function o(b) {
        var c, d, e = b.split("."),
            f = e[e.length - 2] + "." + e[e.length - 1];
        return c = O[f] || O[b.replace("qw.", "mqq.").replace("qa.", "mqq.")], a.isObject(c) && (c = c[a.iOS ? "iOS" : a.android ? "android" : "browser"]), c ? (d = c.split("-"), 1 === d.length ? a.compare(d[0]) > -1 : a.compare(d[0]) > -1 && a.compare(d[1]) < 1) : !1
    }

    function p(c, e, f, g) {
        function h() {
            l(g, {
                r: -201,
                result: "error"
            })
        }
        d({
            from: "openURL",
            ns: e,
            method: f,
            url: c
        });
        var i, j = document.createElement("iframe");
        return j.style.cssText = "display:none;width:0px;height:0px;", a.iOS && (j.onload = h, j.src = c), (document.body || document.documentElement).appendChild(j), a.android && (j.onload = h, j.src = c), i = a.__RETURN_VALUE, a.__RETURN_VALUE = b, setTimeout(function () {
            j.parentNode.removeChild(j)
        }, 0), i
    }

    function q(b, c) {
        if ("AndroidQQ" === a.platform) {
            if (a.compare("4.7.2") < 0) return !0;
            if (S[b] && a.compare(S[b]) < 0) return !0
        }
        return !1
    }

    function r(c, d, e, g) {
        if (!c || !d || window !== window.top) return null;
        var h, j, l, m;
        if (l = E.call(arguments, 2), g = l.length && l[l.length - 1], a.isFunction(g) ? l.pop() : a.isUndefined(g) ? l.pop() : g = null, e = l[0], j = i(g), -1 === T.indexOf(d) && f("jsbridge", c, d, l, j), g && a.isObject(e) && !e.callback && (window["__MQQ_CALLBACK_AUTO_" + j] = g, e.callback = "__MQQ_CALLBACK_AUTO_" + j), q(c, d))
            if (a.compare("4.5") > -1 || /_NZ\b/.test(C)) h = "jsbridge://" + encodeURIComponent(c) + "/" + encodeURIComponent(d) + "/" + j, l.forEach(function (b) {
                a.isObject(b) && (b = JSON.stringify(b)), h += "/" + encodeURIComponent(String(b))
            }), p(h, c, d, j);
            else if (window[c] && window[c][d]) {
            if (m = window[c][d].apply(window[c], l), !g) return m;
            k(j, [m])
        } else g && k(j, [a.ERROR_NO_SUCH_METHOD]);
        else if (h = "jsbridge://" + encodeURIComponent(c) + "/" + encodeURIComponent(d), l.forEach(function (b, c) {
            a.isObject(b) && (b = JSON.stringify(b)), h += 0 === c ? "?p=" : "&p" + c + "=", h += encodeURIComponent(String(b))
        }), "pbReport" !== d && (h += "#" + j), m = p(h, c, d), a.iOS && m !== b && m.result !== b) {
            if (!g) return m.result;
            k(j, [m.result])
        }
        return null
    }

    function s(b, c, d, e) {
        var f = P[b + "." + c];
        return a.isFunction(f) ? f.apply(this, E.call(arguments, 2)) : r.apply(this, E.call(arguments))
    }

    function t(b, c, d, e, g) {
        if (!b || !c || !d) return null;
        var i, j, k = E.call(arguments);
        a.isFunction(k[k.length - 1]) ? (g = k[k.length - 1], k.pop()) : g = null, e = 4 === k.length ? k[k.length - 1] : {}, g && (e.callback_type = "javascript", i = h(g), e.callback_name = i), e.src_type = e.src_type || "web", e.version || (e.version = 1), j = b + "://" + encodeURIComponent(c) + "/" + encodeURIComponent(d) + "?" + v(e), p(j, c, d), f(b, c, d, k, i)
    }

    function u(a) {
        var b, c, d, e = a.indexOf("?"),
            f = a.substring(e + 1).split("&"),
            g = {};
        for (b = 0; b < f.length; b++) e = f[b].indexOf("="), c = f[b].substring(0, e), d = f[b].substring(e + 1), g[c] = decodeURIComponent(d);
        return g
    }

    function v(a) {
        var b, c = [];
        for (b in a) a.hasOwnProperty(b) && c.push(encodeURIComponent(String(b)) + "=" + encodeURIComponent(String(a[b])));
        return c.join("&")
    }

    function w(a, b) {
        var c, d = document.createElement("a");
        return d.href = a, d.search && (c = u(String(d.search).substring(1)), b.forEach(function (a) {
            delete c[a]
        }), d.search = "?" + v(c)), d.hash && (c = u(String(d.hash).substring(1)), b.forEach(function (a) {
            delete c[a]
        }), d.hash = "#" + v(c)), a = d.href, d = null, a
    }

    function x(a, b) {
        if ("qbrowserVisibilityChange" === a) return document.addEventListener(a, b, !1), !0;
        var c = "evt-" + a;
        return (M[c] = M[c] || []).push(b), !0
    }

    function y(a, b) {
        var c, d = "evt-" + a,
            e = M[d],
            f = !1;
        if (!e) return !1;
        if (!b) return delete M[d], !0;
        for (c = e.length - 1; c >= 0; c--) b === e[c] && (e.splice(c, 1), f = !0);
        return f
    }

    function z(a) {
        var b = "evt-" + a,
            c = M[b],
            d = E.call(arguments, 1);
        c && c.forEach(function (a) {
            k(a, d, !1)
        })
    }

    function A(b, c, d) {
        var e, g = {
            event: b,
            data: c || {}, options: d || {}
        };
        a.android && g.options.broadcast === !1 && a.compare("5.2") <= 0 && (g.options.domains = ["localhost"], g.options.broadcast = !0), "browser" !== a.platform && (e = "jsbridge://event/dispatchEvent?p=" + encodeURIComponent(JSON.stringify(g) || ""), p(e, "event", "dispatchEvent"), f("jsbridge", "event", "dispatchEvent"))
    }
    var B, C = navigator.userAgent,
        D = window.MQQfirebug,
        E = Array.prototype.slice,
        F = Object.prototype.toString,
        G = /\b(iPad|iPhone|iPod)\b.*? OS ([\d_]+)/,
        H = /\bAndroid ([^;]+)/,
        I = /\bQQ\/([\d\.]+)/,
        J = /\bIPadQQ\/([\d\.]+).*?\bQQ\/([\d\.]+)/,
        K = /\bV1_AND_SQI?_([\d\.]+)(.*? QQ\/([\d\.]+))?/,
        L = /\bTribe\/([\d\.]+)/,
        M = a.__aCallbacks || {},
        N = a.__aReports || {},
        O = a.__aSupports || {},
        P = a.__aFunctions || {},
        Q = 1,
        R = -1e5,
        S = {
            qbizApi: "5.0",
            pay: "999999",
            SetPwdJsInterface: "999999",
            GCApi: "999999",
            q_download: "999999",
            qqZoneAppList: "999999",
            qzone_app: "999999",
            qzone_http: "999999",
            qzone_imageCache: "999999",
            RoamMapJsPlugin: "999999"
        },
        T = ["pbReport", "popBack", "close"];
    return D ? (a.debuging = !0, C = D.ua || C) : a.debuging = !1, a.iOS = G.test(C), a.android = H.test(C), a.iOS && a.android && (a.iOS = !1), a.version = "20160913001", a.QQVersion = "0", a.clientVersion = "0", a.ERROR_NO_SUCH_METHOD = "no such method", a.ERROR_PERMISSION_DENIED = "permission denied", a.compare = function (b) {
        return c(a.clientVersion, b)
    }, a.platform = function () {
        var d, e = "browser";
        return a.android && ((d = C.match(K)) && d.length ? (a.QQVersion = a.clientVersion = (c(d[1], d[3]) >= 0 ? d[1] : d[3]) || "0", e = "AndroidQQ") : (d = C.match(L)) && d.length && (a.clientVersion = d[1] || "0", e = "AndroidTribe"), window.JsBridge = window.JsBridge || {}, window.JsBridge.callMethod = r, window.JsBridge.callback = l, window.JsBridge.compareVersion = a.compare), a.iOS && ((d = C.match(J)) && d.length ? (a.clientVersion = d[1] || "0", a.QQVersion = d[2] || a.clientVersion, e = "iPadQQ") : (d = C.match(I)) && d.length ? (a.QQVersion = a.clientVersion = d[1] || "0", e = "iPhoneQQ") : (d = C.match(L)) && d.length && (a.clientVersion = d[1] || "0", e = "iOSTribe"), window.iOSQQApi = a, a.__RETURN_VALUE = b), e
    }(), Q = function () {
        var a, b = 1;
        for (a in M) M.hasOwnProperty(a) && (a = Number(a), isNaN(a) || (b = Math.max(b, a)));
        return ++b
    }(), B = function () {
        function b() {
            var c, g = d,
                k = {};
            d = [], f = 0, g.length && (k.appid = h, k.typeid = i, k.releaseversion = l, k.sdkversion = a.version, k.qua = m, k.frequency = j, k.t = Date.now(), k.key = ["commandid", "resultcode", "tmcost"].join(","), g.forEach(function (a, b) {
                k[b + 1 + "_1"] = a[0], k[b + 1 + "_2"] = a[1], k[b + 1 + "_3"] = a[2]
            }), k = new String(v(k)), a.compare("4.6") >= 0 ? setTimeout(function () {
                mqq.iOS ? mqq.invokeClient("data", "pbReport", {
                    type: String(10004),
                    data: k
                }) : mqq.invokeClient("publicAccount", "pbReport", String(10004), k)
            }, 0) : (c = new Image, c.onload = function () {
                c = null
            }, c.src = "http://wspeed.qq.com/w.cgi?" + k), f = setTimeout(b, e))
        }

        function c(c, h, i) {
            if (a.__needReport !== !1) {
                var k;
                (h !== R || (h = 0, k = Math.round(Math.random() * j) % j, 1 === k)) && (d.push([c, h || 0, i || 0]), f || (g = Date.now(), f = setTimeout(b, e)))
            }
        }
        var d = [],
            e = 500,
            f = 0,
            g = 0,
            h = 1000218,
            i = 1000280,
            j = 100,
            k = String(a.QQVersion).split(".").slice(0, 3).join("."),
            l = a.platform + "_MQQ_" + k,
            m = a.platform + a.QQVersion + "/" + a.version;
        return {
            send: c
        }
    }(), e(a, function () {
        var a = {},
            b = "Object,Function,String,Number,Boolean,Date,Undefined,Null";
        return b.split(",").forEach(function (b, c) {
            a["is" + b] = function (a) {
                return F.call(a) === "[object " + b + "]"
            }
        }), a
    }()), a.__aCallbacks = M, a.__aReports = N, a.__aSupports = O, a.__aFunctions = P, a.__fireCallback = k, a.__reportAPI = f, e(a, {
        invoke: s,
        invokeClient: r,
        invokeSchema: t,
        build: n,
        callback: h,
        support: o,
        execGlobalCallback: l,
        addEventListener: x,
        removeEventListener: y,
        dispatchEvent: A,
        execEventCallback: z,
        mapQuery: u,
        toQuery: v,
        removeQuery: w,
        extend: e
    }, !0), a
}),
function (a, b, c) {
    var d = b(window[a] = window[a] || {});
    module.exports = d
}("mqq", function (a, b) {
    "use strict";

    function c(a) {
        for (var b in s)
            if (s[b][q] === a) return b;
        return ""
    }

    function d(b, c, d, e) {
        var g = b + "." + c,
            h = {
                errMsg: a.ERROR_NO_SUCH_METHOD
            };
        if (d._SDK_api ? h.api = d._SDK_api : h.ns = g, d._SDK_ignore) delete d._SDK_ignore;
        else {
            if (a.compare("5.7") <= 0) return void t(h);
            if (-1 === p.indexOf(g)) return h.errMsg = a.ERROR_PERMISSION_DENIED, t(h), void f(g, "fail", {
                errMsg: a.ERROR_PERMISSION_DENIED
            }, d)
        }
        var i = r.call(arguments);
        return u.apply(this, i)
    }

    function e(b, c, e, f) {
        var g = a.__aFunctions[b + "." + c];
        return a.isFunction(g) ? g.apply(this, r.call(arguments, 2)) : d.apply(this, r.call(arguments))
    }

    function f(a, b, d, e) {
        var f = e._SDK_api ? e._SDK_api : c(a),
            e = e || {},
            g = {
                api: f,
                type: b,
                result: d
            },
            h = d.msg || "";
        switch (h && delete d.msg, e._SDK_api && delete e._SDK_api, d.errMsg = f + ":", b) {
        case "success":
            d.errMsg += "ok", mqq.isFunction(e.success) && e.success.call(window, d);
            break;
        case "cancel":
            d.errMsg += "cancel", mqq.isFunction(e.cancel) && e.cancel.call(window, d);
            break;
        default:
            d.errMsg += h || "fail", mqq.isFunction(e.fail) && e.fail.call(window, d)
        }
        mqq.isFunction(e.complete) && e.complete.call(window, d), g.errMsg = d.errMsg, t(g, e)
    }

    function g(a) {
        var a = a || [],
            b = [],
            c = "";
        p = [];
        for (var d in a) c = s[a[d]], c && c[q] && (p.push(c[q]), b.push(c[q]));
        return b
    }

    function h(a) {
        var a = a || [],
            b = [];
        for (var c in p) - 1 === a.indexOf(parseInt(c)) && b.push(p[c]);
        p = b
    }

    function i(a) {
        var b = document.URL,
            c = b.indexOf("#"),
            d = (a || "").length + "";
        switch (-1 != c && (b = b.substring(0, c)), d.length) {
        case 0:
            d = "0000";
            break;
        case 1:
            d = "000" + d;
            break;
        case 2:
            d = "00" + d;
            break;
        case 3:
            d = "0" + d;
        case 4:
            break;
        default:
            d = "9999", a = a.substring(0, d)
        }
        return d + a + b
    }

    function j(b) {
        var b = b,
            c = s.config[q];
        b.jsApiList = g(b.jsApiList), a.compare("6.2") < 0 && (b.nonceStr = i(b.nonceStr)), c && (x = "normal", p.push(c), c = c.split("."), b.callback = a.callback(function (a) {
            var b = "",
                a = a || {},
                c = a.forbidden || [];
            y = {
                errMsg: a.msg || ""
            }, 0 === a.retCode ? function () {
                "ready" !== x && (x = "ready", c.length && h(c), b = "success", y.errMsg = "config:ok", y.forbidden = c, m())
            }() : function () {
                x = "error", y.errMsg = y.errMsg || "閴存潈澶辫触", b = "fail", y.errMsg = "config:fail:" + y.errMsg, y.forbidden && delete y.forbidden, n()
            }(), t({
                api: "config",
                result: y,
                type: b,
                errMsg: y.errMsg
            })
        }, !0), a.debuging = b.debug || !1, d(c[0], c[1], b))
    }

    function k(a) {
        "ready" === x ? a && a() : a && v.push(a)
    }

    function l(a) {
        "error" === x ? a && a(y) : a && w.push(a)
    }

    function m() {
        for (var a in v) v[a].call(window);
        v = []
    }

    function n() {
        for (var a in w) w[a].call(window, y)
    }

    function o(b) {
        var b = b || {},
            c = b.jsApiList || [],
            d = {},
            e = "";
        for (var g in c) e = c[g], "checkJsApi" === e || "config" === e ? d[e] = !0 : d[e] = a.support("mqq." + e);
        f("checkJsApi", "success", {
            checkResult: d
        }, b)
    }
    var p, q = a.iOS ? "iOS" : a.android ? "android" : "other",
        r = Array.prototype.slice,
        s = {
            config: {
                iOS: "publicAccount.config",
                android: "publicAccountNew.config"
            },
            checkJsApi: {
                iOS: "checkJsApi",
                android: "checkJsApi"
            },
            chooseImage: {
                iOS: "media.chooseImage",
                android: "publicAccountNew.getPicture"
            },
            previewImage: {
                iOS: "troopNotice.showPicture",
                android: "troopNotice.showPicture"
            },
            uploadImage: {
                iOS: "media.uploadImage",
                android: "publicAccountNew.uploadImage"
            },
            downloadImage: {
                iOS: "media.downloadImage",
                android: "publicAccountNew.downloadImage"
            },
            getNetworkType: {
                iOS: "device.networkStatus",
                android: "qbizApi.getNetworkType"
            },
            closeWindow: {
                iOS: "ui.closeWebViews",
                android: "ui.closeWebViews"
            },
            onMenuShareQQ: {
                iOS: "nav.addShareQQFriend",
                android: "ui.setOnShareQQFriendHandler"
            },
            onMenuShareQzone: {
                iOS: "nav.addShareQZone",
                android: "ui.setOnShareQZoneHandler"
            },
            onMenuShareAppMessage: {
                iOS: "nav.addShareWXFriend",
                android: "ui.setOnShareWXFriendHandler"
            },
            onMenuShareTimeline: {
                iOS: "nav.addShareWXTimeline",
                android: "ui.setOnShareWXTimelineHandler"
            },
            getLocation: {
                iOS: "data.queryCurrentLocation",
                android: "publicAccount.getLocation"
            },
            openLocation: {
                iOS: "publicAccount.openLocation",
                android: "publicAccountNew.openLocation"
            },
            hideMenuItems: {
                iOS: "publicAccount.hideMenuItems",
                android: "publicAccountNew.hideMenuItems"
            },
            showMenuItems: {
                iOS: "publicAccount.showMenuItems",
                android: "publicAccountNew.showMenuItems"
            },
            hideAllNonBaseMenuItem: {
                iOS: "publicAccount.hideAllNonBaseMenuItem",
                android: "publicAccountNew.hideAllNonBaseMenuItem"
            },
            showAllNonBaseMenuItem: {
                iOS: "publicAccount.showAllNonBaseMenuItem",
                android: "publicAccountNew.showAllNonBaseMenuItem"
            },
            showWebBottombar: {
                iOS: "publicAccount.showWebBottomBar",
                android: "publicAccountNew.showWebPanel"
            },
            scanQRCode: {
                iOS: "publicAccount.scanQRcode",
                android: "publicAccountNew.scanQRCode"
            },
            showOptionMenu: {
                iOS: "publicAccount.setActionButtonState",
                android: "publicAccountNew.setRightButtonState"
            },
            hideOptionMenu: {
                iOS: "publicAccount.setActionButtonState",
                android: "publicAccountNew.setRightButtonState"
            },
            hideBottomBar: {
                iOS: "publicAccount.hideWebToolbar",
                android: "publicAccountNew.hideWebToolbar"
            },
            showBottomBar: {
                iOS: "publicAccount.showWebToolbar",
                android: "publicAccountNew.showWebToolbar"
            },
            chooseQQPay: {
                iOS: "wallet.publicPay",
                android: "wallet.publicPay"
            },
            startRecord: {
                iOS: "publicAccount.startRecord",
                android: "publicAccountNew.startRecord"
            },
            stopRecord: {
                iOS: "publicAccount.stopRecord",
                android: "publicAccountNew.stopRecord"
            },
            playVoice: {
                iOS: "publicAccount.playVoice",
                android: "publicAccountNew.playVoice"
            },
            pauseVoice: {
                iOS: "publicAccount.pauseVoice",
                android: "publicAccountNew.pauseVoice"
            },
            stopVoice: {
                iOS: "publicAccount.stopVoice",
                android: "publicAccountNew.stopVoice"
            },
            uploadVoice: {
                iOS: "publicAccount.uploadVoice",
                android: "publicAccountNew.uploadVoice"
            },
            downloadVoice: {
                iOS: "publicAccount.downloadVoice",
                android: "publicAccountNew.downloadVoice"
            },
            onVoicePlayEnd: {
                iOS: "publicAccount.onVoicePlayEnd",
                android: "publicAccountNew.onVoicePlayEnd"
            },
            onVoiceRecordEnd: {
                iOS: "publicAccount.onVoiceRecordEnd",
                android: "publicAccountNew.onVoiceRecordEnd"
            }
        },
        t = function (b, d) {
            if (a.debuging) {
                var e = b.errMsg;
                if (!e) {
                    var f = b.api || c(b.ns);
                    switch (b.type) {
                    case "success":
                        e = f + ":ok";
                        break;
                    case "cancel":
                        e = f + ":cancel";
                        break;
                    default:
                        e = f + ":fail:" + b.msg
                    }
                }
                alert("errMsg:" + e + (b.result ? ", result:" + JSON.stringify(b.result) : "")), d && "browser" === a.platform && console.log(d)
            }
        },
        u = a.invokeClient,
        v = [],
        w = [],
        x = "normal",
        y = {};
    return a.config = j, a.ready = k, a.error = l, a.__methodHash = s, a.__execCallback = f, a.__needReport = !1, a.invokeClient = d, a.invoke = e, a.checkJsApi = o, a
}), mqq.build("mqq.chooseImage", {
    iOS: function (a) {
        var b = mqq.__methodHash.chooseImage.iOS,
            c = b.split("."),
            d = {
                count: 9,
                sizeType: ["original", "compressed"],
                sourceType: ["album", "camera"]
            };
        a = mqq.extend(d, a || {}, !0), a.callback = mqq.callback(function (c) {
            var d = {
                    sourceType: c.sourceType || "",
                    msg: c.msg,
                    localIds: c.value || []
                },
                e = ["success", "cancel", "fail"],
                f = c.code; - 1 == f && (f = 2), e = e[f], mqq.__execCallback(b, e, d, a)
        }, !0), mqq.invokeClient(c[0], c[1], a)
    }, android: function (a) {
        var b = mqq.__methodHash.chooseImage.android,
            c = b.split("."),
            d = {
                count: 9,
                sizeType: ["original", "compressed"],
                sourceType: ["album", "camera"]
            };
        a = mqq.extend(d, a || {}, !0), a.callback = mqq.callback(function (c) {
            var d = {
                    sourceType: c.sourceType || "",
                    msg: c.msg,
                    localIds: c.value || []
                },
                e = ["success", "cancel", "fail"],
                f = c.code; - 1 == f && (f = 2), e = e[f], mqq.__execCallback(b, e, d, a)
        }, !0), mqq.invokeClient(c[0], c[1], a)
    }, support: {
        android: "5.9.5",
        iOS: "5.9.5"
    }
}), mqq.build("mqq.chooseQQPay", {
    iOS: function (a) {
        var b = mqq.__methodHash.chooseQQPay.iOS,
            c = b.split(".");
        a = mqq.extend({}, a || {}), a.timestamp = a.timeStamp, a.signType = a.signType || "MD5", a.callback = mqq.callback(function (c) {
            var c = c || {},
                d = Math.abs("undefined" != typeof c.code ? c.code : 1),
                e = ["success", "fail", "cancel"][d];
            mqq.__execCallback(b, e, {
                msg: c.msg || ""
            }, a)
        }, !0), mqq.invokeClient(c[0], c[1], a)
    }, android: function (a) {
        var b = mqq.__methodHash.chooseQQPay.android,
            c = b.split(".");
        a = mqq.extend({}, a || {}), a.timestamp = a.timeStamp, a.signType = a.signType || "MD5", a.callback = mqq.callback(function (c) {
            var c = c || {},
                d = Math.abs("undefined" != typeof c.code ? c.code : 1),
                e = ["success", "fail", "cancel"][d];
            mqq.__execCallback(b, e, {
                msg: c.msg || ""
            }, a)
        }, !0), mqq.invokeClient(c[0], c[1], a)
    }, support: {
        android: "5.8",
        iOS: "5.8"
    }
}), mqq.build("mqq.closeWindow", {
    iOS: function (a) {
        var b = mqq.__methodHash.closeWindow.iOS,
            c = b.split(".");
        a = a || {}, mqq.invokeClient(c[0], c[1], a)
    }, android: function (a) {
        var b = mqq.__methodHash.closeWindow.android,
            c = b.split(".");
        a = a || {}, mqq.invokeClient(c[0], c[1], a)
    }, support: {
        android: "5.8",
        iOS: "5.8"
    }
}), mqq.build("mqq.downloadImage", {
    iOS: function (a) {
        var b = mqq.__methodHash.downloadImage.iOS,
            c = b.split("."),
            d = {
                isShowProgressTips: 1
            };
        a = mqq.extend(d, a || {}, !0), a.isShowProgressTips && (a.isShowProgressTips = 1), a.callback = mqq.callback(function (c) {
            var d = {
                    msg: c.msg,
                    localId: c.localId
                },
                e = ["success", "cancel", "fail"],
                f = c.code; - 1 == f && (f = 2), e = e[f], mqq.__execCallback(b, e, d, a)
        }, !0), mqq.invokeClient(c[0], c[1], a)
    }, android: function (a) {
        var b = mqq.__methodHash.downloadImage.android,
            c = b.split("."),
            d = {
                isShowProgressTips: 1
            };
        a = mqq.extend(d, a || {}, !0), a.isShowProgressTips && (a.isShowProgressTips = 1), a.callback = mqq.callback(function (c) {
            var d = {
                    msg: c.msg,
                    localId: c.localId
                },
                e = ["success", "cancel", "fail"],
                f = c.code; - 1 == f && (f = 2), e = e[f], mqq.__execCallback(b, e, d, a)
        }, !0), mqq.invokeClient(c[0], c[1], a)
    }, support: {
        android: "5.9.5",
        iOS: "5.9.5"
    }
}), mqq.build("mqq.downloadVoice", {
    iOS: function (a) {
        var b = mqq.__methodHash.downloadVoice.iOS,
            c = b.split("."),
            d = {
                isShowProgressTips: 1
            };
        a = mqq.extend(d, a || {}, !0), a.isShowProgressTips && (a.isShowProgressTips = 1), a.callback = mqq.callback(function (c) {
            var d = {
                    msg: c.msg,
                    localId: c.localId
                },
                e = ["success", "cancel", "fail"],
                f = c.code; - 1 == f && (f = 2), e = e[f], mqq.__execCallback(b, e, d, a)
        }, !0), mqq.invokeClient(c[0], c[1], a)
    }, android: function (a) {
        var b = mqq.__methodHash.downloadVoice.android,
            c = b.split("."),
            d = {
                isShowProgressTips: 1
            };
        a = mqq.extend(d, a || {}, !0), a.isShowProgressTips && (a.isShowProgressTips = 1), a.callback = mqq.callback(function (c) {
            var d = {
                    msg: c.msg,
                    localId: c.localId
                },
                e = ["success", "cancel", "fail"],
                f = c.code; - 1 == f && (f = 2), e = e[f], mqq.__execCallback(b, e, d, a)
        }, !0), mqq.invokeClient(c[0], c[1], a)
    }, support: {
        android: "5.9.5",
        iOS: "5.9.5"
    }
}), mqq.build("mqq.getLocation", {
    iOS: function (a) {
        var b = mqq.__methodHash.getLocation.iOS,
            c = b.split(".");
        a = mqq.extend({}, a || {}), a.allowCacheTime = 60, a.callback = mqq.callback(function (c, d, e) {
            var c = c || 0,
                f = {
                    latitude: d || 0,
                    longitude: e || 0,
                    speed: 0,
                    accuracy: 0
                },
                g = 0 == c ? "success" : "fail";
            mqq.__execCallback(b, g, f, a)
        }, !0), mqq.invokeClient(c[0], c[1], a)
    }, android: function (a) {
        var b = mqq.__methodHash.getLocation.android,
            c = b.split(".");
        a = mqq.extend({}, a || {}), a.allowCacheTime = 60, a.callback = mqq.callback(function (c) {
            var d = -1,
                e = null,
                f = null,
                g = "fail";
            c && "null" !== c && (c = (c + "").split(","), 2 === c.length && (d = 0, e = parseFloat(c[0] || 0), f = parseFloat(c[1] || 0), g = "success")), c = {
                longitude: e || 0,
                latitude: f || 0,
                speed: 0,
                accuracy: 0
            }, mqq.__execCallback(b, g, c, a)
        }, !0), mqq.invokeClient(c[0], c[1], a)
    }, support: {
        android: "5.8",
        iOS: "5.8"
    }
}), mqq.build("mqq.getNetworkType", {
    iOS: function (a) {
        var b = mqq.__methodHash.getNetworkType.iOS,
            c = b.split("."),
            d = function (c) {
                var d = ["unknown", "wifi", "2g", "3g", "4g"],
                    c = c || 0,
                    e = {
                        networkType: d[c]
                    },
                    f = "unknown" === e.networkType ? "fail" : "success";
                mqq.__execCallback(b, f, e, a)
            };
        mqq.invokeClient(c[0], c[1], d)
    }, android: function (a) {
        var b = mqq.__methodHash.getNetworkType.android,
            c = b.split("."),
            d = function (c) {
                var d = ["unknown", "wifi", "2g", "3g", "4g"],
                    c = c || 0,
                    e = {
                        networkType: d[c]
                    },
                    f = "unknown" === e.networkType ? "fail" : "success";
                mqq.__execCallback(b, f, e, a)
            };
        mqq.invokeClient(c[0], c[1], d)
    }, support: {
        android: "5.8",
        iOS: "5.8"
    }
}), mqq.build("mqq.hideAllNonBaseMenuItem", {
    iOS: function (a) {
        var b = mqq.__methodHash.hideAllNonBaseMenuItem.iOS,
            c = b.split(".");
        a = mqq.extend({}, a || {}), a.callback = mqq.callback(function () {
            mqq.__execCallback(b, "success", {}, a)
        }, !0), mqq.invokeClient(c[0], c[1], a)
    }, android: function (a) {
        var b = mqq.__methodHash.hideAllNonBaseMenuItem.android,
            c = b.split(".");
        a = mqq.extend({}, a || {}), a.callback = mqq.callback(function () {
            mqq.__execCallback(b, "success", {}, a)
        }, !0), mqq.invokeClient(c[0], c[1], a)
    }, support: {
        android: "5.8",
        iOS: "5.8"
    }
}), mqq.build("mqq.hideBottomBar", {
    iOS: function (a) {
        var b = mqq.__methodHash.hideBottomBar.iOS,
            c = b.split(".");
        a = mqq.extend({}, a || {}), a.callback = mqq.callback(function () {
            mqq.__execCallback(b, "success", {}, a)
        }, !0), mqq.invokeClient(c[0], c[1], a)
    }, android: function (a) {
        var b = mqq.__methodHash.hideBottomBar.android,
            c = b.split(".");
        a = mqq.extend({}, a || {}), a.callback = mqq.callback(function () {
            mqq.__execCallback(b, "success", {}, a)
        }, !0), mqq.invokeClient(c[0], c[1], a)
    }, support: {
        android: "5.8",
        iOS: "5.8"
    }
}), mqq.build("mqq.hideMenuItems", {
    iOS: function (a) {
        var b = mqq.__methodHash.hideMenuItems.iOS,
            c = b.split(".");
        a = mqq.extend({}, a || {}), a.munuList = a.munuList || [], a.callback = mqq.callback(function () {
            mqq.__execCallback(b, "success", {}, a)
        }, !0), mqq.invokeClient(c[0], c[1], a)
    }, android: function (a) {
        var b = mqq.__methodHash.hideMenuItems.android,
            c = b.split(".");
        a = mqq.extend({}, a || {}), a.munuList = a.munuList || [], a.callback = mqq.callback(function () {
            mqq.__execCallback(b, "success", {}, a)
        }, !0), mqq.invokeClient(c[0], c[1], a)
    }, support: {
        android: "5.8",
        iOS: "5.8"
    }
}), mqq.build("mqq.hideOptionMenu", {
    iOS: function (a) {
        var b = mqq.__methodHash.hideOptionMenu.iOS,
            c = b.split(".");
        a = mqq.extend({}, a || {}), a.hidden = !0, a._SDK_api = "hideOptionMenu", a.callback = mqq.callback(function () {
            mqq.__execCallback(b, "success", {}, a)
        }, !0), mqq.invokeClient(c[0], c[1], a)
    }, android: function (a) {
        var b = mqq.__methodHash.hideOptionMenu.android,
            c = b.split(".");
        a = mqq.extend({}, a || {}), a.hidden = !0, a._SDK_api = "hideOptionMenu", a.callback = mqq.callback(function () {
            mqq.__execCallback(b, "success", {}, a)
        }, !0), mqq.invokeClient(c[0], c[1], a)
    }, support: {
        android: "5.8",
        iOS: "5.8"
    }
}), mqq.build("mqq.onMenuShareAppMessage", {
    iOS: function (a) {
        var b = mqq.__methodHash.onMenuShareAppMessage.iOS,
            c = b.split("."),
            d = arguments.callee,
            e = Array.prototype.slice.call(arguments),
            f = window,
            g = {
                music: "audio",
                video: "video",
                link: "news"
            };
        a = mqq.extend({
            title: "",
            desc: ""
        }, a || {}, !0), a.title = a.title ? a.title : document.title, a.desc = a.desc ? a.desc : document.location.href, a.share_type = 2, a.share_url = mqq.removeQuery(a.link || document.location.href, ["sid", "3g_sid"]), a.image_url = a.imgUrl || "", a.shareElement = g[a.type || "link"] || "news", a.flash_url = "news" === a.shareElement ? "" : a.dataUrl || "", a.desc && (a.desc = a.desc.length > 50 ? a.desc.substring(0, 50) + "..." : a.desc), a.callback = mqq.callback(function (c) {
            var c = c || {},
                g = 0 == c.code ? "success" : "cancel";
            d.apply(f, e), mqq.__execCallback(b, g, {}, a)
        }, !0), mqq.invokeClient(c[0], c[1], {
            callback: mqq.callback(function () {
                mqq.isFunction(a.trigger) && a.trigger({
                    shareTo: "friend",
                    scene: "friend"
                }), a._SDK_ignore = !0, mqq.invokeClient("nav", "shareURLWebRichData", a)
            })
        })
    }, android: function (a) {
        var b = mqq.__methodHash.onMenuShareAppMessage.android,
            c = b.split("."),
            d = arguments.callee,
            e = Array.prototype.slice.call(arguments),
            f = window,
            g = {
                music: "audio",
                video: "video",
                link: "news"
            };
        a = mqq.extend({
            title: "",
            desc: ""
        }, a || {}, !0), a.title = a.title ? a.title : document.title, a.desc = a.desc ? a.desc : document.location.href, a.share_type = 2, a.share_url = mqq.removeQuery(a.link || document.location.href, ["sid", "3g_sid"]), a.image_url = a.imgUrl || "", a.shareElement = g[a.type || "link"] || "news", a.flash_url = "news" === a.shareElement ? "" : a.dataUrl || "", a.desc && (a.desc = a.desc.length > 50 ? a.desc.substring(0, 50) + "..." : a.desc), a.callback = mqq.callback(function (c) {
            var g = c ? "success" : "cancel";
            d.apply(f, e), mqq.__execCallback(b, g, {}, a)
        }, !0), mqq.invokeClient(c[0], c[1], {
            callback: mqq.callback(function () {
                mqq.isFunction(a.trigger) && a.trigger({
                    shareTo: "friend",
                    scene: "friend"
                }), a._SDK_ignore = !0, mqq.invokeClient("QQApi", "shareMsg", a)
            })
        })
    }, support: {
        android: "5.8",
        iOS: "5.8"
    }
}), mqq.build("mqq.onMenuShareQQ", {
    iOS: function (a) {
        var b = mqq.__methodHash.onMenuShareQQ.iOS,
            c = b.split("."),
            d = arguments.callee,
            e = Array.prototype.slice.call(arguments),
            f = window;
        a = mqq.extend({
            title: "",
            desc: ""
        }, a || {}, !0), a.title = a.title ? a.title : document.title, a.desc = a.desc ? a.desc : document.location.href, a.share_type = 0, a.share_url = mqq.removeQuery(a.link || document.location.href, ["sid", "3g_sid"]), a.image_url = a.imgUrl || "", a.needPopBack = !0, a.desc && (a.desc = a.desc.length > 50 ? a.desc.substring(0, 50) + "..." : a.desc), a.callback = mqq.callback(function (c) {
            var c = c || {},
                g = 0 == c.code ? "success" : "cancel";
            d.apply(f, e), mqq.__execCallback(b, g, {}, a)
        }, !0), mqq.invokeClient(c[0], c[1], {
            callback: mqq.callback(function () {
                mqq.isFunction(a.trigger) && a.trigger({
                    shareTo: "qqfriend"
                }), a._SDK_ignore = !0, mqq.invokeClient("nav", "shareURLWebRichData", a)
            })
        })
    }, android: function (a) {
        var b = mqq.__methodHash.onMenuShareQQ.android,
            c = b.split("."),
            d = arguments.callee,
            e = Array.prototype.slice.call(arguments),
            f = window;
        a = mqq.extend({
            title: "",
            desc: ""
        }, a || {}, !0), a.title = a.title ? a.title : document.title, a.desc = a.desc ? a.desc : document.location.href, a.share_type = 0, a.share_url = mqq.removeQuery(a.link || document.location.href, ["sid", "3g_sid"]), a.image_url = a.imgUrl || "", a.back = !0, a.desc && (a.desc = a.desc.length > 50 ? a.desc.substring(0, 50) + "..." : a.desc), a.callback = mqq.callback(function (c) {
            var g = c ? "success" : "cancel";
            d.apply(f, e), mqq.__execCallback(b, g, {}, a)
        }, !0), mqq.invokeClient(c[0], c[1], {
            callback: mqq.callback(function () {
                mqq.isFunction(a.trigger) && a.trigger({
                    shareTo: "qqfriend"
                }), a._SDK_ignore = !0, mqq.invokeClient("QQApi", "shareMsg", a)
            })
        })
    }, support: {
        android: "5.8",
        iOS: "5.8"
    }
}), mqq.build("mqq.onMenuShareQzone", {
    iOS: function (a) {
        var b = mqq.__methodHash.onMenuShareQzone.iOS,
            c = b.split("."),
            d = arguments.callee,
            e = Array.prototype.slice.call(arguments),
            f = window;
        a = mqq.extend({
            title: "",
            desc: ""
        }, a || {}, !0), a.title = a.title ? a.title : document.title, a.desc = a.desc ? a.desc : document.location.href, a.share_type = 1, a.share_url = mqq.removeQuery(a.link || document.location.href, ["sid", "3g_sid"]), a.image_url = a.imgUrl || "", a.desc && (a.desc = a.desc.length > 50 ? a.desc.substring(0, 50) + "..." : a.desc), a.callback = mqq.callback(function (c) {
            var c = c || {},
                g = 0 == c.code ? "success" : "cancel";
            d.apply(f, e), mqq.__execCallback(b, g, {}, a)
        }, !0), mqq.invokeClient(c[0], c[1], {
            callback: mqq.callback(function () {
                mqq.isFunction(a.trigger) && a.trigger({
                    shareTo: "qzone"
                }), a._SDK_ignore = !0, mqq.invokeClient("nav", "shareURLWebRichData", a)
            })
        })
    }, android: function (a) {
        var b = mqq.__methodHash.onMenuShareQzone.android,
            c = b.split("."),
            d = arguments.callee,
            e = Array.prototype.slice.call(arguments),
            f = window;
        a = mqq.extend({
            title: "",
            desc: ""
        }, a || {}, !0), a.title = a.title ? a.title : document.title, a.desc = a.desc ? a.desc : document.location.href, a.share_type = 1, a.share_url = mqq.removeQuery(a.link || document.location.href, ["sid", "3g_sid"]), a.image_url = a.imgUrl || "", a.desc && (a.desc = a.desc.length > 50 ? a.desc.substring(0, 50) + "..." : a.desc), a.callback = mqq.callback(function (c) {
            var g = c ? "success" : "cancel";
            d.apply(f, e), mqq.__execCallback(b, g, {}, a)
        }, !0), mqq.invokeClient(c[0], c[1], {
            callback: mqq.callback(function () {
                mqq.isFunction(a.trigger) && a.trigger({
                    shareTo: "qzone"
                }), a._SDK_ignore = !0, mqq.invokeClient("QQApi", "shareMsg", a)
            })
        })
    }, support: {
        android: "5.8",
        iOS: "5.8"
    }
}), mqq.build("mqq.onMenuShareTimeline", {
    iOS: function (a) {
        var b = mqq.__methodHash.onMenuShareTimeline.iOS,
            c = b.split("."),
            d = arguments.callee,
            e = Array.prototype.slice.call(arguments),
            f = window;
        a = mqq.extend({
            title: "",
            desc: ""
        }, a || {}, !0), a.title = a.title ? a.title : document.title, a.desc = a.desc ? a.desc : document.location.href, a.share_type = 3, a.share_url = mqq.removeQuery(a.link || document.location.href, ["sid", "3g_sid"]), a.image_url = a.imgUrl || "", a.callback = mqq.callback(function (c) {
            var c = c || {},
                g = 0 == c.code ? "success" : "cancel";
            d.apply(f, e), mqq.__execCallback(b, g, {}, a)
        }, !0), mqq.invokeClient(c[0], c[1], {
            callback: mqq.callback(function () {
                mqq.isFunction(a.trigger) && a.trigger({
                    shareTo: "timeline"
                }), a._SDK_ignore = !0, mqq.invokeClient("nav", "shareURLWebRichData", a)
            })
        })
    }, android: function (a) {
        var b = mqq.__methodHash.onMenuShareTimeline.android,
            c = b.split("."),
            d = arguments.callee,
            e = Array.prototype.slice.call(arguments),
            f = window;
        a = mqq.extend({
            title: "",
            desc: ""
        }, a || {}, !0), a.title = a.title ? a.title : document.title, a.desc = a.desc ? a.desc : document.location.href, a.share_type = 3, a.share_url = mqq.removeQuery(a.link || document.location.href, ["sid", "3g_sid"]), a.image_url = a.imgUrl || "", a.callback = mqq.callback(function (c) {
            var g = c ? "success" : "cancel";
            d.apply(f, e), mqq.__execCallback(b, g, {}, a)
        }, !0), mqq.invokeClient(c[0], c[1], {
            callback: mqq.callback(function () {
                mqq.isFunction(a.trigger) && a.trigger({
                    shareTo: "timeline"
                }), a._SDK_ignore = !0, mqq.invokeClient("QQApi", "shareMsg", a)
            })
        })
    }, support: {
        android: "5.8",
        iOS: "5.8"
    }
}), mqq.build("mqq.onVoicePlayEnd", {
    iOS: function (a) {
        var b = mqq.__methodHash.onVoicePlayEnd.iOS,
            c = b.split(".");
        a = mqq.extend({}, a || {}), a.callback = mqq.callback(function (c) {
            var d = {
                    msg: c.msg,
                    localId: c.localId
                },
                e = ["success", "cancel", "fail"],
                f = c.code; - 1 == f && (f = 2), e = e[f], mqq.__execCallback(b, e, d, a)
        }), mqq.invokeClient(c[0], c[1], a)
    }, android: function (a) {
        var b = mqq.__methodHash.onVoicePlayEnd.android,
            c = b.split(".");
        a = mqq.extend({}, a || {}), a.callback = mqq.callback(function (c) {
            var d = {
                    msg: c.msg,
                    localId: c.localId
                },
                e = ["success", "cancel", "fail"],
                f = c.code; - 1 == f && (f = 2), e = e[f], mqq.__execCallback(b, e, d, a)
        }), mqq.invokeClient(c[0], c[1], a)
    }, support: {
        android: "5.9.5",
        iOS: "5.9.5"
    }
}), mqq.build("mqq.onVoiceRecordEnd", {
    iOS: function (a) {
        var b = mqq.__methodHash.onVoiceRecordEnd.iOS,
            c = b.split(".");
        a = mqq.extend({}, a || {}), a.callback = mqq.callback(function (c) {
            var d = {
                    msg: c.msg,
                    localId: c.localId
                },
                e = ["success", "cancel", "fail"],
                f = c.code; - 1 == f && (f = 2), e = e[f], mqq.__execCallback(b, e, d, a)
        }), mqq.invokeClient(c[0], c[1], a)
    }, android: function (a) {
        var b = mqq.__methodHash.onVoiceRecordEnd.android,
            c = b.split(".");
        a = mqq.extend({}, a || {}), a.callback = mqq.callback(function (c) {
            var d = {
                    msg: c.msg,
                    localId: c.localId
                },
                e = ["success", "cancel", "fail"],
                f = c.code; - 1 == f && (f = 2), e = e[f], mqq.__execCallback(b, e, d, a)
        }), mqq.invokeClient(c[0], c[1], a)
    }, support: {
        android: "5.9.5",
        iOS: "5.9.5"
    }
}), mqq.build("mqq.pauseVoice", {
    iOS: function (a) {
        var b = mqq.__methodHash.pauseVoice.iOS,
            c = b.split(".");
        a = mqq.extend({}, a || {}), a.callback = mqq.callback(function (c) {
            var d = {
                    msg: c.msg
                },
                e = ["success", "cancel", "fail"],
                f = c.code; - 1 == f && (f = 2), e = e[f], mqq.__execCallback(b, e, d, a)
        }, !0), mqq.invokeClient(c[0], c[1], a)
    }, android: function (a) {
        var b = mqq.__methodHash.pauseVoice.android,
            c = b.split(".");
        a = mqq.extend({}, a || {}), a.callback = mqq.callback(function (c) {
            var d = {
                    msg: c.msg
                },
                e = ["success", "cancel", "fail"],
                f = c.code; - 1 == f && (f = 2), e = e[f], mqq.__execCallback(b, e, d, a)
        }, !0), mqq.invokeClient(c[0], c[1], a)
    }, support: {
        android: "5.9.5",
        iOS: "5.9.5"
    }
}), mqq.build("mqq.playVoice", {
    iOS: function (a) {
        var b = mqq.__methodHash.playVoice.iOS,
            c = b.split(".");
        a = mqq.extend({}, a || {}), a.callback = mqq.callback(function (c) {
            var d = {
                    msg: c.msg
                },
                e = ["success", "cancel", "fail"],
                f = c.code; - 1 == f && (f = 2), e = e[f], mqq.__execCallback(b, e, d, a)
        }, !0), mqq.invokeClient(c[0], c[1], a)
    }, android: function (a) {
        var b = mqq.__methodHash.playVoice.android,
            c = b.split(".");
        a = mqq.extend({}, a || {}), a.callback = mqq.callback(function (c) {
            var d = {
                    msg: c.msg
                },
                e = ["success", "cancel", "fail"],
                f = c.code; - 1 == f && (f = 2), e = e[f], mqq.__execCallback(b, e, d, a)
        }, !0), mqq.invokeClient(c[0], c[1], a)
    }, support: {
        android: "5.9.5",
        iOS: "5.9.5"
    }
}), mqq.build("mqq.previewImage", {
    iOS: function (a) {
        var b = mqq.__methodHash.previewImage.iOS,
            c = b.split(".");
        a = a || {};
        var d = a.urls || [],
            e = a.current || "",
            f = d.indexOf(e);
        a.imageIDs = d, a.index = -1 === f ? 0 : f, mqq.invokeClient(c[0], c[1], a)
    }, android: function (a) {
        var b = mqq.__methodHash.previewImage.android,
            c = b.split(".");

        a = a || {};
        var d = a.urls || [],
            e = a.current || "",
            f = d.indexOf(e);
        a.imageIDs = d, a.index = -1 === f ? 0 : f, mqq.invokeClient(c[0], c[1], a)
    }, support: {
        android: "5.8",
        iOS: "5.8"
    }
}), mqq.build("mqq.scanQRCode", {
    iOS: function (a) {
        var b = mqq.__methodHash.scanQRCode.iOS,
            c = b.split(".");
        a = mqq.extend({}, a || {}), a.needResult = a.needResult || 0, a.scanType = "[object Array]" === Object.prototype.toString.call(a.scanType) ? a.scanType : [];
        var d = a.scanType.length,
            e = 0,
            f = a.scanType.indexOf("qrCode"),
            g = a.scanType.indexOf("barCode");
        switch (1 === d && (0 === f && (e = 0), 0 === g && (e = 1)), a.scanType = e, a.needResult) {
        case 0:
            mqq.__execCallback(b, "success", {}, a);
            break;
        case 1:
            a.callback = mqq.callback(function (c) {
                var c = c || {},
                    d = 0 == c.code ? "success" : "fail";
                mqq.__execCallback(b, d, {
                    resultStr: c.scanResult || ""
                }, a)
            }, !0)
        }
        mqq.invokeClient(c[0], c[1], a)
    }, android: function (a) {
        var b = mqq.__methodHash.scanQRCode.android,
            c = b.split(".");
        a = mqq.extend({}, a || {}), a.needResult = a.needResult || 0, a.scanType = "[object Array]" === Object.prototype.toString.call(a.scanType) ? a.scanType : [];
        var d = a.scanType.length,
            e = 0,
            f = a.scanType.indexOf("qrCode"),
            g = a.scanType.indexOf("barCode");
        switch (1 === d && (mqq.compare("6.3.5") < 0 ? e = 0 : (0 === f && (e = 0), 0 === g && (e = 1))), a.scanType = e, a.needResult) {
        case 0:
            mqq.__execCallback(b, "success", {}, a);
            break;
        case 1:
            a.callback = mqq.callback(function (c) {
                var c = c || {},
                    d = 0 == c.code ? "success" : "fail";
                mqq.__execCallback(b, d, {
                    resultStr: c.scanResult || ""
                }, a)
            }, !0)
        }
        mqq.invokeClient(c[0], c[1], a)
    }, support: {
        android: "5.8",
        iOS: "5.8"
    }
}), mqq.build("mqq.showAllNonBaseMenuItem", {
    iOS: function (a) {
        var b = mqq.__methodHash.showAllNonBaseMenuItem.iOS,
            c = b.split(".");
        a = mqq.extend({}, a || {}), a.callback = mqq.callback(function () {
            mqq.__execCallback(b, "success", {}, a)
        }, !0), mqq.invokeClient(c[0], c[1], a)
    }, android: function (a) {
        var b = mqq.__methodHash.showAllNonBaseMenuItem.android,
            c = b.split(".");
        a = mqq.extend({}, a || {}), a.callback = mqq.callback(function () {
            mqq.__execCallback(b, "success", {}, a)
        }, !0), mqq.invokeClient(c[0], c[1], a)
    }, support: {
        android: "5.8",
        iOS: "5.8"
    }
}), mqq.build("mqq.showBottomBar", {
    iOS: function (a) {
        var b = mqq.__methodHash.showBottomBar.iOS,
            c = b.split(".");
        a = mqq.extend({}, a || {}), a.callback = mqq.callback(function () {
            mqq.__execCallback(b, "success", {}, a)
        }, !0), mqq.invokeClient(c[0], c[1], a)
    }, android: function (a) {
        var b = mqq.__methodHash.showBottomBar.android,
            c = b.split(".");
        a = mqq.extend({}, a || {}), a.callback = mqq.callback(function () {
            mqq.__execCallback(b, "success", {}, a)
        }, !0), mqq.invokeClient(c[0], c[1], a)
    }, support: {
        android: "5.8",
        iOS: "5.8"
    }
}), mqq.build("mqq.showMenuItems", {
    iOS: function (a) {
        var b = mqq.__methodHash.showMenuItems.iOS,
            c = b.split(".");
        a = mqq.extend({}, a || {}), a.munuList = a.munuList || [], a.callback = mqq.callback(function () {
            mqq.__execCallback(b, "success", {}, a)
        }, !0), mqq.invokeClient(c[0], c[1], a)
    }, android: function (a) {
        var b = mqq.__methodHash.showMenuItems.android,
            c = b.split(".");
        a = mqq.extend({}, a || {}), a.munuList = a.munuList || [], a.callback = mqq.callback(function () {
            mqq.__execCallback(b, "success", {}, a)
        }, !0), mqq.invokeClient(c[0], c[1], a)
    }, support: {
        android: "5.8",
        iOS: "5.8"
    }
}), mqq.build("mqq.showOptionMenu", {
    iOS: function (a) {
        var b = mqq.__methodHash.showOptionMenu.iOS,
            c = b.split(".");
        a = mqq.extend({}, a || {}), a.hidden = !1, a._SDK_api = "showOptionMenu", a.callback = mqq.callback(function () {
            mqq.__execCallback(b, "success", {}, a)
        }, !0), mqq.invokeClient(c[0], c[1], a)
    }, android: function (a) {
        var b = mqq.__methodHash.showOptionMenu.android,
            c = b.split(".");
        a = mqq.extend({}, a || {}), a.hidden = !1, a._SDK_api = "showOptionMenu", a.callback = mqq.callback(function () {
            mqq.__execCallback(b, "success", {}, a)
        }, !0), mqq.invokeClient(c[0], c[1], a)
    }, support: {
        android: "5.8",
        iOS: "5.8"
    }
}), mqq.build("mqq.startRecord", {
    iOS: function (a) {
        var b = mqq.__methodHash.startRecord.iOS,
            c = b.split(".");
        a = mqq.extend({}, a || {}), a.callback = mqq.callback(function (c) {
            var d = {
                    msg: c.msg
                },
                e = ["success", "cancel", "fail"],
                f = c.code; - 1 == f && (f = 2), e = e[f], mqq.__execCallback(b, e, d, a)
        }, !0), mqq.invokeClient(c[0], c[1], a)
    }, android: function (a) {
        var b = mqq.__methodHash.startRecord.android,
            c = b.split(".");
        a = mqq.extend({}, a || {}), a.callback = mqq.callback(function (c) {
            var d = {
                    msg: c.msg
                },
                e = ["success", "cancel", "fail"],
                f = c.code; - 1 == f && (f = 2), e = e[f], mqq.__execCallback(b, e, d, a)
        }, !0), mqq.invokeClient(c[0], c[1], a)
    }, support: {
        android: "5.9.5",
        iOS: "5.9.5"
    }
}), mqq.build("mqq.stopRecord", {
    iOS: function (a) {
        var b = mqq.__methodHash.stopRecord.iOS,
            c = b.split(".");
        a = mqq.extend({}, a || {}), a.callback = mqq.callback(function (c) {
            var d = {
                    msg: c.msg,
                    localId: c.localId
                },
                e = ["success", "cancel", "fail"],
                f = c.code; - 1 == f && (f = 2), e = e[f], mqq.__execCallback(b, e, d, a)
        }, !0), mqq.invokeClient(c[0], c[1], a)
    }, android: function (a) {
        var b = mqq.__methodHash.stopRecord.android,
            c = b.split(".");
        a = mqq.extend({}, a || {}), a.callback = mqq.callback(function (c) {
            var d = {
                    msg: c.msg,
                    localId: c.localId
                },
                e = ["success", "cancel", "fail"],
                f = c.code; - 1 == f && (f = 2), e = e[f], mqq.__execCallback(b, e, d, a)
        }, !0), mqq.invokeClient(c[0], c[1], a)
    }, support: {
        android: "5.9.5",
        iOS: "5.9.5"
    }
}), mqq.build("mqq.stopVoice", {
    iOS: function (a) {
        var b = mqq.__methodHash.stopVoice.iOS,
            c = b.split(".");
        a = mqq.extend({}, a || {}), a.callback = mqq.callback(function (c) {
            var d = {
                    msg: c.msg
                },
                e = ["success", "cancel", "fail"],
                f = c.code; - 1 == f && (f = 2), e = e[f], mqq.__execCallback(b, e, d, a)
        }, !0), mqq.invokeClient(c[0], c[1], a)
    }, android: function (a) {
        var b = mqq.__methodHash.stopVoice.android,
            c = b.split(".");
        a = mqq.extend({}, a || {}), a.callback = mqq.callback(function (c) {
            var d = {
                    msg: c.msg
                },
                e = ["success", "cancel", "fail"],
                f = c.code; - 1 == f && (f = 2), e = e[f], mqq.__execCallback(b, e, d, a)
        }, !0), mqq.invokeClient(c[0], c[1], a)
    }, support: {
        android: "5.9.5",
        iOS: "5.9.5"
    }
}), mqq.build("mqq.uploadImage", {
    iOS: function (a) {
        var b = mqq.__methodHash.uploadImage.iOS,
            c = b.split("."),
            d = {
                isShowProgressTips: 1
            };
        a = mqq.extend(d, a || {}, !0), a.isShowProgressTips && (a.isShowProgressTips = 1), a.callback = mqq.callback(function (c) {
            var d = {
                    msg: c.msg,
                    serverId: c.serverId
                },
                e = ["success", "cancel", "fail"],
                f = c.code; - 1 == f && (f = 2), e = e[f], mqq.__execCallback(b, e, d, a)
        }, !0), mqq.invokeClient(c[0], c[1], a)
    }, android: function (a) {
        var b = mqq.__methodHash.uploadImage.android,
            c = b.split("."),
            d = {
                isShowProgressTips: 1
            };
        a = mqq.extend(d, a || {}, !0), a.isShowProgressTips && (a.isShowProgressTips = 1), a.callback = mqq.callback(function (c) {
            var d = {
                    msg: c.msg,
                    serverId: c.serverId
                },
                e = ["success", "cancel", "fail"],
                f = c.code; - 1 == f && (f = 2), e = e[f], mqq.__execCallback(b, e, d, a)
        }, !0), mqq.invokeClient(c[0], c[1], a)
    }, support: {
        android: "5.9.5",
        iOS: "5.9.5"
    }
}), mqq.build("mqq.uploadVoice", {
    iOS: function (a) {
        var b = mqq.__methodHash.uploadVoice.iOS,
            c = b.split("."),
            d = {
                isShowProgressTips: 1
            };
        a = mqq.extend(d, a || {}, !0), a.isShowProgressTips && (a.isShowProgressTips = 1), a.callback = mqq.callback(function (c) {
            var d = {
                    msg: c.msg,
                    serverId: c.serverId
                },
                e = ["success", "cancel", "fail"],
                f = c.code; - 1 == f && (f = 2), e = e[f], mqq.__execCallback(b, e, d, a)
        }, !0), mqq.invokeClient(c[0], c[1], a)
    }, android: function (a) {
        var b = mqq.__methodHash.uploadVoice.android,
            c = b.split("."),
            d = {
                isShowProgressTips: 1
            };
        a = mqq.extend(d, a || {}, !0), a.isShowProgressTips && (a.isShowProgressTips = 1), a.callback = mqq.callback(function (c) {
            var d = {
                    msg: c.msg,
                    serverId: c.serverId
                },
                e = ["success", "cancel", "fail"],
                f = c.code; - 1 == f && (f = 2), e = e[f], mqq.__execCallback(b, e, d, a)
        }, !0), mqq.invokeClient(c[0], c[1], a)
    }, support: {
        android: "5.9.5",
        iOS: "5.9.5"
    }
});