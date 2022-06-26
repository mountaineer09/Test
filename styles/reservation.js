/* noyau-1.0, build 08c4a6, 2021-12-21T08:05:02+0000 */
const reservation = () => {
    ! function (h, w) {
        if (!h.AllianceReseaux) {
            h.AllianceReseaux = {};

            function t(e, t) {
                return t.toUpperCase()
            }

            function r(e) {
                !m.addEventListener && "load" !== e.type && "complete" !== m.readyState || (I(), Ce.ready())
            }
            var i, n, xe = function (e) {
                for (var t = e[0], n = 0; n < e.length - 1; n++) e[n] = e[n + 1];
                return 0 < e.length && e.length--, t
            },
                v = typeof w,
                e = h.location,
                m = h.document,
                a = m.documentElement,
                o = h.jQuery,
                s = h.$,
                l = {},
                p = [],
                u = "1.10.2",
                g = p.concat,
                c = p.push,
                d = p.slice,
                f = p.indexOf,
                y = l.toString,
                b = l.hasOwnProperty,
                x = u.trim,
                Ce = function (e, t) {
                    return new Ce.fn.init(e, t, n)
                },
                C = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
                j = /\S+/g,
                k = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
                A = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
                T = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
                S = /^[\],:{}\s]*$/,
                P = /(?:^|:|,)(?:\s*\[)+/g,
                O = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
                D = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
                N = /^-ms-/,
                L = /-([\da-z])/gi,
                I = function () {
                    m.addEventListener ? (m.removeEventListener("DOMContentLoaded", r, !1), h.removeEventListener("load", r, !1)) : (m.detachEvent("onreadystatechange", r), h.detachEvent("onload", r))
                };
            Ce.fn = Ce.prototype = {
                jquery: u,
                constructor: Ce,
                init: function (e, t, n) {
                    var r, i;
                    if (!e) return this;
                    if ("string" != typeof e) return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : Ce.isFunction(e) ? n.ready(e) : (e.selector !== w && (this.selector = e.selector, this.context = e.context), Ce.makeArray(e, this));
                    if (!(r = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && 3 <= e.length ? [null, e, null] : A.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                    if (r[1]) {
                        if (t = t instanceof Ce ? t[0] : t, Ce.merge(this, Ce.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : m, !0)), T.test(r[1]) && Ce.isPlainObject(t))
                            for (r in t) Ce.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                        return this
                    }
                    if ((i = m.getElementById(r[2])) && i.parentNode) {
                        if (i.id !== r[2]) return n.find(e);
                        this.length = 1, this[0] = i
                    }
                    return this.context = m, this.selector = e, this
                },
                selector: "",
                length: 0,
                toArray: function () {
                    return d.call(this)
                },
                get: function (e) {
                    return null == e ? this.toArray() : e < 0 ? this[this.length + e] : this[e]
                },
                pushStack: function (e) {
                    var t = Ce.merge(this.constructor(), e);
                    return t.prevObject = this, t.context = this.context, t
                },
                each: function (e, t) {
                    return Ce.each(this, e, t)
                },
                ready: function (e) {
                    return Ce.ready.promise().done(e), this
                },
                slice: function () {
                    return this.pushStack(d.apply(this, arguments))
                },
                first: function () {
                    return this.eq(0)
                },
                last: function () {
                    return this.eq(-1)
                },
                eq: function (e) {
                    var t = this.length,
                        n = +e + (e < 0 ? t : 0);
                    return this.pushStack(0 <= n && n < t ? [this[n]] : [])
                },
                map: function (n) {
                    return this.pushStack(Ce.map(this, function (e, t) {
                        return n.call(e, t, e)
                    }))
                },
                end: function () {
                    return this.prevObject || this.constructor(null)
                },
                push: c,
                sort: [].sort,
                splice: [].splice
            }, Ce.fn.init.prototype = Ce.fn, Ce.extend = Ce.fn.extend = function () {
                var e, t, n, r, i, a, o = arguments[0] || {},
                    s = 1,
                    l = arguments.length,
                    u = !1;
                for ("boolean" == typeof o && (u = o, o = arguments[1] || {}, s = 2), "object" == typeof o || Ce.isFunction(o) || (o = {}), l === s && (o = this, --s); s < l; s++)
                    if (null != (i = arguments[s]))
                        for (r in i) e = o[r], o !== (n = i[r]) && (u && n && (Ce.isPlainObject(n) || (t = Ce.isArray(n))) ? (a = t ? (t = !1, e && Ce.isArray(e) ? e : []) : e && Ce.isPlainObject(e) ? e : {}, o[r] = Ce.extend(u, a, n)) : n !== w && (o[r] = n));
                return o
            }, Ce.extend({
                expando: "jQuery" + (u + Math.random()).replace(/\D/g, ""),
                noConflict: function (e) {
                    return h.$ === Ce && (h.$ = s), e && h.jQuery === Ce && (h.jQuery = o), Ce
                },
                isReady: !1,
                readyWait: 1,
                holdReady: function (e) {
                    e ? Ce.readyWait++ : Ce.ready(!0)
                },
                ready: function (e) {
                    if (!0 === e ? !--Ce.readyWait : !Ce.isReady) {
                        if (!m.body) return setTimeout(Ce.ready);
                        (Ce.isReady = !0) !== e && 0 < --Ce.readyWait || (i.resolveWith(m, [Ce]), Ce.fn.trigger && Ce(m).trigger("ready").off("ready"))
                    }
                },
                isFunction: function (e) {
                    return "function" === Ce.type(e)
                },
                isArray: Array.isArray || function (e) {
                    return "array" === Ce.type(e)
                },
                isWindow: function (e) {
                    return null != e && e == e.window
                },
                isNumeric: function (e) {
                    return !isNaN(parseFloat(e)) && isFinite(e)
                },
                type: function (e) {
                    return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? l[y.call(e)] || "object" : typeof e
                },
                isPlainObject: function (e) {
                    var t;
                    if (!e || "object" !== Ce.type(e) || e.nodeType || Ce.isWindow(e)) return !1;
                    try {
                        if (e.constructor && !b.call(e, "constructor") && !b.call(e.constructor.prototype, "isPrototypeOf")) return !1
                    } catch (e) {
                        return !1
                    }
                    if (Ce.support.ownLast)
                        for (t in e) return b.call(e, t);
                    for (t in e);
                    return t === w || b.call(e, t)
                },
                isEmptyObject: function (e) {
                    var t;
                    for (t in e) return !1;
                    return !0
                },
                error: function (e) {
                    throw Error(e)
                },
                parseHTML: function (e, t, n) {
                    if (!e || "string" != typeof e) return null;
                    "boolean" == typeof t && (n = t, t = !1), t = t || m;
                    var r = T.exec(e),
                        i = !n && [];
                    return r ? [t.createElement(r[1])] : (r = Ce.buildFragment([e], t, i), i && Ce(i).remove(), Ce.merge([], r.childNodes))
                },
                parseJSON: function (e) {
                    return h.JSON && h.JSON.parse ? h.JSON.parse(e) : null === e ? e : "string" == typeof e && ((e = Ce.trim(e)) && S.test(e.replace(O, "@").replace(D, "]").replace(P, ""))) ? Function("return " + e)() : (Ce.error("Invalid JSON: " + e), w)
                },
                parseXML: function (e) {
                    var t;
                    if (!e || "string" != typeof e) return null;
                    try {
                        h.DOMParser ? t = (new DOMParser).parseFromString(e, "text/xml") : ((t = new ActiveXObject("Microsoft.XMLDOM")).async = "false", t.loadXML(e))
                    } catch (e) {
                        t = w
                    }
                    return t && t.documentElement && !t.getElementsByTagName("parsererror").length || Ce.error("Invalid XML: " + e), t
                },
                noop: function () { },
                globalEval: function (e) {
                    e && Ce.trim(e) && (h.execScript || function (e) {
                        h.eval.call(h, e)
                    })(e)
                },
                camelCase: function (e) {
                    return e.replace(N, "ms-").replace(L, t)
                },
                nodeName: function (e, t) {
                    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
                },
                each: function (e, t, n) {
                    var r = 0,
                        i = e.length,
                        a = ft(e);
                    if (n) {
                        if (a)
                            for (; r < i && !1 !== t.apply(e[r], n); r++);
                        else
                            for (r in e)
                                if (!1 === t.apply(e[r], n)) break
                    } else if (a)
                        for (; r < i && !1 !== t.call(e[r], r, e[r]); r++);
                    else
                        for (r in e)
                            if (!1 === t.call(e[r], r, e[r])) break;
                    return e
                },
                trim: x && !x.call("\ufeff ") ? function (e) {
                    return null == e ? "" : x.call(e)
                } : function (e) {
                    return null == e ? "" : (e + "").replace(k, "")
                },
                makeArray: function (e, t) {
                    var n = t || [];
                    return null != e && (ft(Object(e)) ? Ce.merge(n, "string" == typeof e ? [e] : e) : c.call(n, e)), n
                },
                inArray: function (e, t, n) {
                    var r;
                    if (t) {
                        if (f) return f.call(t, e, n);
                        for (r = t.length, n = n ? n < 0 ? Math.max(0, r + n) : n : 0; n < r; n++)
                            if (n in t && t[n] === e) return n
                    }
                    return -1
                },
                merge: function (e, t) {
                    var n = t.length,
                        r = e.length,
                        i = 0;
                    if ("number" == typeof n)
                        for (; i < n; i++) e[r++] = t[i];
                    else
                        for (; t[i] !== w;) e[r++] = t[i++];
                    return e.length = r, e
                },
                grep: function (e, t, n) {
                    var r = [],
                        i = 0,
                        a = e.length;
                    for (n = !!n; i < a; i++) n !== !!t(e[i], i) && r.push(e[i]);
                    return r
                },
                map: function (e, t, n) {
                    var r, i = 0,
                        a = e.length,
                        o = [];
                    if (ft(e))
                        for (; i < a; i++) null != (r = t(e[i], i, n)) && (o[o.length] = r);
                    else
                        for (i in e) null != (r = t(e[i], i, n)) && (o[o.length] = r);
                    return g.apply([], o)
                },
                guid: 1,
                proxy: function (e, t) {
                    var n, r, i;
                    return "string" == typeof t && (i = e[t], t = e, e = i), Ce.isFunction(e) ? (n = d.call(arguments, 2), (r = function () {
                        return e.apply(t || this, n.concat(d.call(arguments)))
                    }).guid = e.guid = e.guid || Ce.guid++, r) : w
                },
                access: function (e, t, n, r, i, a, o) {
                    var s = 0,
                        l = e.length,
                        u = null == n;
                    if ("object" === Ce.type(n))
                        for (s in i = !0, n) Ce.access(e, t, s, n[s], !0, a, o);
                    else if (r !== w && (i = !0, Ce.isFunction(r) || (o = !0), u && (t = o ? (t.call(e, r), null) : (u = t, function (e, t, n) {
                        return u.call(Ce(e), n)
                    })), t))
                        for (; s < l; s++) t(e[s], n, o ? r : r.call(e[s], s, t(e[s], n)));
                    return i ? e : u ? t.call(e) : l ? t(e[0], n) : a
                },
                now: function () {
                    return (new Date).getTime()
                },
                swap: function (e, t, n, r) {
                    var i, a, o = {};
                    for (a in t) o[a] = e.style[a], e.style[a] = t[a];
                    for (a in i = n.apply(e, r || []), t) e.style[a] = o[a];
                    return i
                }
            }), Ce.ready.promise = function (e) {
                if (!i)
                    if (i = Ce.Deferred(), "complete" === m.readyState) setTimeout(Ce.ready);
                    else if (m.addEventListener) m.addEventListener("DOMContentLoaded", r, !1), h.addEventListener("load", r, !1);
                    else {
                        m.attachEvent("onreadystatechange", r), h.attachEvent("onload", r);
                        var n = !1;
                        try {
                            n = null == h.frameElement && m.documentElement
                        } catch (e) { }
                        n && n.doScroll && function t() {
                            if (!Ce.isReady) {
                                try {
                                    n.doScroll("left")
                                } catch (e) {
                                    return setTimeout(t, 50)
                                }
                                I(), Ce.ready()
                            }
                        }()
                    }
                return i.promise(e)
            }, Ce.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (e, t) {
                l["[object " + t + "]"] = t.toLowerCase()
            }), n = Ce(m),
                function (n, i) {
                    var e, h, C, k, a, r, m, w, u, g, j, o, v, y, s, c, b, x = "sizzle" + -new Date,
                        A = n.document,
                        T = 0,
                        p = 0,
                        l = ie(),
                        d = ie(),
                        f = ie(),
                        S = !1,
                        P = function (e, t) {
                            return e === t && (S = !0), 0
                        },
                        O = typeof i,
                        D = {}.hasOwnProperty,
                        t = [],
                        N = t.pop,
                        L = t.push,
                        I = t.push,
                        M = t.slice,
                        E = t.indexOf || function (e) {
                            for (var t = 0, n = this.length; t < n; t++)
                                if (this[t] === e) return t;
                            return -1
                        },
                        _ = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                        B = "[\\x20\\t\\r\\n\\f]",
                        R = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                        $ = R.replace("w", "w#"),
                        H = "\\[" + B + "*(" + R + ")" + B + "*(?:([*^$|!~]?=)" + B + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + $ + ")|)|)" + B + "*\\]",
                        F = ":(" + R + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + H.replace(3, 8) + ")*)|.*)\\)|)",
                        q = RegExp("^" + B + "+|((?:^|[^\\\\])(?:\\\\.)*)" + B + "+$", "g"),
                        G = RegExp("^" + B + "*," + B + "*"),
                        U = RegExp("^" + B + "*([>+~]|" + B + ")" + B + "*"),
                        Q = RegExp(B + "*[+~]"),
                        z = RegExp("=" + B + "*([^\\]'\"]*)" + B + "*\\]", "g"),
                        J = RegExp(F),
                        W = RegExp("^" + $ + "$"),
                        V = {
                            ID: RegExp("^#(" + R + ")"),
                            CLASS: RegExp("^\\.(" + R + ")"),
                            TAG: RegExp("^(" + R.replace("w", "w*") + ")"),
                            ATTR: RegExp("^" + H),
                            PSEUDO: RegExp("^" + F),
                            CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + B + "*(even|odd|(([+-]|)(\\d*)n|)" + B + "*(?:([+-]|)" + B + "*(\\d+)|))" + B + "*\\)|)", "i"),
                            bool: RegExp("^(?:" + _ + ")$", "i"),
                            needsContext: RegExp("^" + B + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + B + "*((?:-\\d)?\\d*)" + B + "*\\)|)(?=[^-]|$)", "i")
                        },
                        X = /^[^{]+\{\s*\[native \w/,
                        Y = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                        K = /^(?:input|select|textarea|button)$/i,
                        Z = /^h\d$/i,
                        ee = /'|\\/g,
                        te = RegExp("\\\\([\\da-f]{1,6}" + B + "?|(" + B + ")|.)", "ig"),
                        ne = function (e, t, n) {
                            var r = "0x" + t - 65536;
                            return r != r || n ? t : r < 0 ? String.fromCharCode(65536 + r) : String.fromCharCode(55296 | r >> 10, 56320 | 1023 & r)
                        };
                    try {
                        I.apply(t = M.call(A.childNodes), A.childNodes), t[A.childNodes.length].nodeType
                    } catch (e) {
                        I = {
                            apply: t.length ? function (e, t) {
                                L.apply(e, M.call(t))
                            } : function (e, t) {
                                for (var n = e.length, r = 0; e[n++] = t[r++];);
                                e.length = n - 1
                            }
                        }
                    }

                    function re(e, t, n, r) {
                        var i, a, o, s, l, u, c, p, d, f;
                        if ((t ? t.ownerDocument || t : A) !== j && g(t), n = n || [], !e || "string" != typeof e) return n;
                        if (1 !== (s = (t = t || j).nodeType) && 9 !== s) return [];
                        if (v && !r) {
                            if (i = Y.exec(e))
                                if (o = i[1]) {
                                    if (9 === s) {
                                        if (!(a = t.getElementById(o)) || !a.parentNode) return n;
                                        if (a.id === o) return n.push(a), n
                                    } else if (t.ownerDocument && (a = t.ownerDocument.getElementById(o)) && b(t, a) && a.id === o) return n.push(a), n
                                } else {
                                    if (i[2]) return I.apply(n, t.getElementsByTagName(e)), n;
                                    if ((o = i[3]) && h.getElementsByClassName && t.getElementsByClassName) return I.apply(n, t.getElementsByClassName(o)), n
                                } if (h.qsa && (!y || !y.test(e))) {
                                    if (p = c = x, d = t, f = 9 === s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
                                        for (u = fe(e), (c = t.getAttribute("id")) ? p = c.replace(ee, "\\$&") : t.setAttribute("id", p), p = "[id='" + p + "'] ", l = u.length; l--;) u[l] = p + he(u[l]);
                                        d = Q.test(e) && t.parentNode || t, f = u.join(",")
                                    }
                                    if (f) try {
                                        return I.apply(n, d.querySelectorAll(f)), n
                                    } catch (e) { } finally {
                                            c || t.removeAttribute("id")
                                        }
                                }
                        }
                        return function (e, t, n, r) {
                            var i, a, o, s, l, u = fe(e);
                            if (!r && 1 === u.length) {
                                if (2 < (a = u[0] = u[0].slice(0)).length && "ID" === (o = a[0]).type && h.getById && 9 === t.nodeType && v && k.relative[a[1].type]) {
                                    if (!(t = (k.find.ID(o.matches[0].replace(te, ne), t) || [])[0])) return n;
                                    e = e.slice(xe(a).value.length)
                                }
                                for (i = V.needsContext.test(e) ? 0 : a.length; i-- && (o = a[i], !k.relative[s = o.type]);)
                                    if ((l = k.find[s]) && (r = l(o.matches[0].replace(te, ne), Q.test(a[0].type) && t.parentNode || t))) {
                                        if (a.splice(i, 1), !(e = r.length && he(a))) return I.apply(n, r), n;
                                        break
                                    }
                            }
                            return m(e, u)(r, t, !v, n, Q.test(e)), n
                        }(e.replace(q, "$1"), t, n, r)
                    }

                    function ie() {
                        var r = [];
                        return function e(t, n) {
                            return r.push(t += " ") > k.cacheLength && delete e[xe(r)], e[t] = n
                        }
                    }

                    function ae(e) {
                        return e[x] = !0, e
                    }

                    function oe(e) {
                        var t = j.createElement("div");
                        try {
                            return !!e(t)
                        } catch (e) {
                            return !1
                        } finally {
                            t.parentNode && t.parentNode.removeChild(t), t = null
                        }
                    }

                    function se(e, t) {
                        for (var n = e.split("|"), r = e.length; r--;) k.attrHandle[n[r]] = t
                    }

                    function le(e, t) {
                        var n = t && e,
                            r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || 1 << 31) - (~e.sourceIndex || 1 << 31);
                        if (r) return r;
                        if (n)
                            for (; n = n.nextSibling;)
                                if (n === t) return -1;
                        return e ? 1 : -1
                    }

                    function ue(t) {
                        return function (e) {
                            return "input" === e.nodeName.toLowerCase() && e.type === t
                        }
                    }

                    function ce(n) {
                        return function (e) {
                            var t = e.nodeName.toLowerCase();
                            return ("input" === t || "button" === t) && e.type === n
                        }
                    }

                    function pe(o) {
                        return ae(function (a) {
                            return a = +a, ae(function (e, t) {
                                for (var n, r = o([], e.length, a), i = r.length; i--;) e[n = r[i]] && (e[n] = !(t[n] = e[n]))
                            })
                        })
                    }
                    for (e in r = re.isXML = function (e) {
                        var t = e && (e.ownerDocument || e).documentElement;
                        return !!t && "HTML" !== t.nodeName
                    }, h = re.support = {}, g = re.setDocument = function (e) {
                        var l = e ? e.ownerDocument || e : A,
                            t = l.defaultView;
                        return l !== j && 9 === l.nodeType && l.documentElement ? (o = (j = l).documentElement, v = !r(l), t && t.attachEvent && t !== t.top && t.attachEvent("onbeforeunload", function () {
                            g()
                        }), h.attributes = oe(function (e) {
                            return e.className = "i", !e.getAttribute("className")
                        }), h.getElementsByTagName = oe(function (e) {
                            return e.appendChild(l.createComment("")), !e.getElementsByTagName("*").length
                        }), h.getElementsByClassName = oe(function (e) {
                            return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", 2 === e.getElementsByClassName("i").length
                        }), h.getById = oe(function (e) {
                            return o.appendChild(e).id = x, !l.getElementsByName || !l.getElementsByName(x).length
                        }), h.getById ? (k.find.ID = function (e, t) {
                            if (typeof t.getElementById != O && v) {
                                var n = t.getElementById(e);
                                return n && n.parentNode ? [n] : []
                            }
                        }, k.filter.ID = function (e) {
                            var t = e.replace(te, ne);
                            return function (e) {
                                return e.getAttribute("id") === t
                            }
                        }) : (delete k.find.ID, k.filter.ID = function (e) {
                            var n = e.replace(te, ne);
                            return function (e) {
                                var t = typeof e.getAttributeNode != O && e.getAttributeNode("id");
                                return t && t.value === n
                            }
                        }), k.find.TAG = h.getElementsByTagName ? function (e, t) {
                            return typeof t.getElementsByTagName != O ? t.getElementsByTagName(e) : i
                        } : function (e, t) {
                            var n, r = [],
                                i = 0,
                                a = t.getElementsByTagName(e);
                            if ("*" !== e) return a;
                            for (; n = a[i++];) 1 === n.nodeType && r.push(n);
                            return r
                        }, k.find.CLASS = h.getElementsByClassName && function (e, t) {
                            return typeof t.getElementsByClassName != O && v ? t.getElementsByClassName(e) : i
                        }, s = [], y = [], (h.qsa = X.test(l.querySelectorAll)) && (oe(function (e) {
                            e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || y.push("\\[" + B + "*(?:value|" + _ + ")"), e.querySelectorAll(":checked").length || y.push(":checked")
                        }), oe(function (e) {
                            var t = l.createElement("input");
                            t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("t", ""), e.querySelectorAll("[t^='']").length && y.push("[*^$]=" + B + "*(?:''|\"\")"), e.querySelectorAll(":enabled").length || y.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), y.push(",.*:")
                        })), (h.matchesSelector = X.test(c = o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && oe(function (e) {
                            h.disconnectedMatch = c.call(e, "div"), c.call(e, "[s!='']:x"), s.push("!=", F)
                        }), y = y.length && RegExp(y.join("|")), s = s.length && RegExp(s.join("|")), b = X.test(o.contains) || o.compareDocumentPosition ? function (e, t) {
                            var n = 9 === e.nodeType ? e.documentElement : e,
                                r = t && t.parentNode;
                            return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                        } : function (e, t) {
                            if (t)
                                for (; t = t.parentNode;)
                                    if (t === e) return !0;
                            return !1
                        }, P = o.compareDocumentPosition ? function (e, t) {
                            if (e === t) return S = !0, 0;
                            var n = t.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(t);
                            return n ? 1 & n || !h.sortDetached && t.compareDocumentPosition(e) === n ? e === l || b(A, e) ? -1 : t === l || b(A, t) ? 1 : u ? E.call(u, e) - E.call(u, t) : 0 : 4 & n ? -1 : 1 : e.compareDocumentPosition ? -1 : 1
                        } : function (e, t) {
                            var n, r = 0,
                                i = e.parentNode,
                                a = t.parentNode,
                                o = [e],
                                s = [t];
                            if (e === t) return S = !0, 0;
                            if (!i || !a) return e === l ? -1 : t === l ? 1 : i ? -1 : a ? 1 : u ? E.call(u, e) - E.call(u, t) : 0;
                            if (i === a) return le(e, t);
                            for (n = e; n = n.parentNode;) o.unshift(n);
                            for (n = t; n = n.parentNode;) s.unshift(n);
                            for (; o[r] === s[r];) r++;
                            return r ? le(o[r], s[r]) : o[r] === A ? -1 : s[r] === A ? 1 : 0
                        }, l) : j
                    }, re.matches = function (e, t) {
                        return re(e, null, null, t)
                    }, re.matchesSelector = function (e, t) {
                        if ((e.ownerDocument || e) !== j && g(e), t = t.replace(z, "='$1']"), !(!h.matchesSelector || !v || s && s.test(t) || y && y.test(t))) try {
                            var n = c.call(e, t);
                            if (n || h.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
                        } catch (e) { }
                        return 0 < re(t, j, null, [e]).length
                    }, re.contains = function (e, t) {
                        return (e.ownerDocument || e) !== j && g(e), b(e, t)
                    }, re.attr = function (e, t) {
                        (e.ownerDocument || e) !== j && g(e);
                        var n = k.attrHandle[t.toLowerCase()],
                            r = n && D.call(k.attrHandle, t.toLowerCase()) ? n(e, t, !v) : i;
                        return r === i ? h.attributes || !v ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null : r
                    }, re.error = function (e) {
                        throw Error("Syntax error, unrecognized expression: " + e)
                    }, re.uniqueSort = function (e) {
                        var t, n = [],
                            r = 0,
                            i = 0;
                        if (S = !h.detectDuplicates, u = !h.sortStable && e.slice(0), e.sort(P), S) {
                            for (; t = e[i++];) t === e[i] && (r = n.push(i));
                            for (; r--;) e.splice(n[r], 1)
                        }
                        return e
                    }, a = re.getText = function (e) {
                        var t, n = "",
                            r = 0,
                            i = e.nodeType;
                        if (i) {
                            if (1 === i || 9 === i || 11 === i) {
                                if ("string" == typeof e.textContent) return e.textContent;
                                for (e = e.firstChild; e; e = e.nextSibling) n += a(e)
                            } else if (3 === i || 4 === i) return e.nodeValue
                        } else
                            for (; t = e[r]; r++) n += a(t);
                        return n
                    }, (k = re.selectors = {
                        cacheLength: 50,
                        createPseudo: ae,
                        match: V,
                        attrHandle: {},
                        find: {},
                        relative: {
                            ">": {
                                dir: "parentNode",
                                first: !0
                            },
                            " ": {
                                dir: "parentNode"
                            },
                            "+": {
                                dir: "previousSibling",
                                first: !0
                            },
                            "~": {
                                dir: "previousSibling"
                            }
                        },
                        preFilter: {
                            ATTR: function (e) {
                                return e[1] = e[1].replace(te, ne), e[3] = (e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                            },
                            CHILD: function (e) {
                                return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || re.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && re.error(e[0]), e
                            },
                            PSEUDO: function (e) {
                                var t, n = !e[5] && e[2];
                                return V.CHILD.test(e[0]) ? null : (e[3] && e[4] !== i ? e[2] = e[4] : n && J.test(n) && (t = fe(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                            }
                        },
                        filter: {
                            TAG: function (e) {
                                var t = e.replace(te, ne).toLowerCase();
                                return "*" === e ? function () {
                                    return !0
                                } : function (e) {
                                    return e.nodeName && e.nodeName.toLowerCase() === t
                                }
                            },
                            CLASS: function (e) {
                                var t = l[e + " "];
                                return t || (t = RegExp("(^|" + B + ")" + e + "(" + B + "|$)")) && l(e, function (e) {
                                    return t.test("string" == typeof e.className && e.className || typeof e.getAttribute != O && e.getAttribute("class") || "")
                                })
                            },
                            ATTR: function (n, r, i) {
                                return function (e) {
                                    var t = re.attr(e, n);
                                    return null == t ? "!=" === r : !r || (t += "", "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice(-i.length) === i : "~=" === r ? -1 < (" " + t + " ").indexOf(i) : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-"))
                                }
                            },
                            CHILD: function (f, e, t, h, m) {
                                var g = "nth" !== f.slice(0, 3),
                                    v = "last" !== f.slice(-4),
                                    y = "of-type" === e;
                                return 1 === h && 0 === m ? function (e) {
                                    return !!e.parentNode
                                } : function (e, t, n) {
                                    var r, i, a, o, s, l, u = g != v ? "nextSibling" : "previousSibling",
                                        c = e.parentNode,
                                        p = y && e.nodeName.toLowerCase(),
                                        d = !n && !y;
                                    if (c) {
                                        if (g) {
                                            for (; u;) {
                                                for (a = e; a = a[u];)
                                                    if (y ? a.nodeName.toLowerCase() === p : 1 === a.nodeType) return !1;
                                                l = u = "only" === f && !l && "nextSibling"
                                            }
                                            return !0
                                        }
                                        if (l = [v ? c.firstChild : c.lastChild], v && d) {
                                            for (s = (r = (i = c[x] || (c[x] = {}))[f] || [])[0] === T && r[1], o = r[0] === T && r[2], a = s && c.childNodes[s]; a = ++s && a && a[u] || (o = s = 0) || l.pop();)
                                                if (1 === a.nodeType && ++o && a === e) {
                                                    i[f] = [T, s, o];
                                                    break
                                                }
                                        } else if (d && (r = (e[x] || (e[x] = {}))[f]) && r[0] === T) o = r[1];
                                        else
                                            for (;
                                                (a = ++s && a && a[u] || (o = s = 0) || l.pop()) && ((y ? a.nodeName.toLowerCase() !== p : 1 !== a.nodeType) || !++o || (d && ((a[x] || (a[x] = {}))[f] = [T, o]), a !== e)););
                                        return (o -= m) === h || 0 == o % h && 0 <= o / h
                                    }
                                }
                            },
                            PSEUDO: function (e, a) {
                                var t, o = k.pseudos[e] || k.setFilters[e.toLowerCase()] || re.error("unsupported pseudo: " + e);
                                return o[x] ? o(a) : 1 < o.length ? (t = [e, e, "", a], k.setFilters.hasOwnProperty(e.toLowerCase()) ? ae(function (e, t) {
                                    for (var n, r = o(e, a), i = r.length; i--;) e[n = E.call(e, r[i])] = !(t[n] = r[i])
                                }) : function (e) {
                                    return o(e, 0, t)
                                }) : o
                            }
                        },
                        pseudos: {
                            not: ae(function (e) {
                                var r = [],
                                    i = [],
                                    s = m(e.replace(q, "$1"));
                                return s[x] ? ae(function (e, t, n, r) {
                                    for (var i, a = s(e, null, r, []), o = e.length; o--;)(i = a[o]) && (e[o] = !(t[o] = i))
                                }) : function (e, t, n) {
                                    return r[0] = e, s(r, null, n, i), !i.pop()
                                }
                            }),
                            has: ae(function (t) {
                                return function (e) {
                                    return 0 < re(t, e).length
                                }
                            }),
                            contains: ae(function (t) {
                                return function (e) {
                                    return -1 < (e.textContent || e.innerText || a(e)).indexOf(t)
                                }
                            }),
                            lang: ae(function (n) {
                                return W.test(n || "") || re.error("unsupported lang: " + n), n = n.replace(te, ne).toLowerCase(),
                                    function (e) {
                                        var t;
                                        do {
                                            if (t = v ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                                        } while ((e = e.parentNode) && 1 === e.nodeType);
                                        return !1
                                    }
                            }),
                            target: function (e) {
                                var t = n.location && n.location.hash;
                                return t && t.slice(1) === e.id
                            },
                            root: function (e) {
                                return e === o
                            },
                            focus: function (e) {
                                return e === j.activeElement && (!j.hasFocus || j.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                            },
                            enabled: function (e) {
                                return !1 === e.disabled
                            },
                            disabled: function (e) {
                                return !0 === e.disabled
                            },
                            checked: function (e) {
                                var t = e.nodeName.toLowerCase();
                                return "input" === t && !!e.checked || "option" === t && !!e.selected
                            },
                            selected: function (e) {
                                return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                            },
                            empty: function (e) {
                                for (e = e.firstChild; e; e = e.nextSibling)
                                    if ("@" < e.nodeName || 3 === e.nodeType || 4 === e.nodeType) return !1;
                                return !0
                            },
                            parent: function (e) {
                                return !k.pseudos.empty(e)
                            },
                            header: function (e) {
                                return Z.test(e.nodeName)
                            },
                            input: function (e) {
                                return K.test(e.nodeName)
                            },
                            button: function (e) {
                                var t = e.nodeName.toLowerCase();
                                return "input" === t && "button" === e.type || "button" === t
                            },
                            text: function (e) {
                                var t;
                                return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type)
                            },
                            first: pe(function () {
                                return [0]
                            }),
                            last: pe(function (e, t) {
                                return [t - 1]
                            }),
                            eq: pe(function (e, t, n) {
                                return [n < 0 ? n + t : n]
                            }),
                            even: pe(function (e, t) {
                                for (var n = 0; n < t; n += 2) e.push(n);
                                return e
                            }),
                            odd: pe(function (e, t) {
                                for (var n = 1; n < t; n += 2) e.push(n);
                                return e
                            }),
                            lt: pe(function (e, t, n) {
                                for (var r = n < 0 ? n + t : n; 0 <= --r;) e.push(r);
                                return e
                            }),
                            gt: pe(function (e, t, n) {
                                for (var r = n < 0 ? n + t : n; t > ++r;) e.push(r);
                                return e
                            })
                        }
                    }).pseudos.nth = k.pseudos.eq, {
                        radio: !0,
                        checkbox: !0,
                        file: !0,
                        password: !0,
                        image: !0
                    }) k.pseudos[e] = ue(e);
                    for (e in {
                        submit: !0,
                        reset: !0
                    }) k.pseudos[e] = ce(e);

                    function de() { }

                    function fe(e, t) {
                        var n, r, i, a, o, s, l, u = d[e + " "];
                        if (u) return t ? 0 : u.slice(0);
                        for (o = e, s = [], l = k.preFilter; o;) {
                            for (a in n && !(r = G.exec(o)) || (r && (o = o.slice(r[0].length) || o), s.push(i = [])), n = !1, (r = U.exec(o)) && (n = xe(r), i.push({
                                value: n,
                                type: r[0].replace(q, " ")
                            }), o = o.slice(n.length)), k.filter) !(r = V[a].exec(o)) || l[a] && !(r = l[a](r)) || (n = xe(r), i.push({
                                value: n,
                                type: a,
                                matches: r
                            }), o = o.slice(n.length));
                            if (!n) break
                        }
                        return t ? o.length : o ? re.error(e) : d(e, s).slice(0)
                    }

                    function he(e) {
                        for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
                        return r
                    }

                    function me(s, e, t) {
                        var l = e.dir,
                            u = t && "parentNode" === l,
                            c = p++;
                        return e.first ? function (e, t, n) {
                            for (; e = e[l];)
                                if (1 === e.nodeType || u) return s(e, t, n)
                        } : function (e, t, n) {
                            var r, i, a, o = T + " " + c;
                            if (n) {
                                for (; e = e[l];)
                                    if ((1 === e.nodeType || u) && s(e, t, n)) return !0
                            } else
                                for (; e = e[l];)
                                    if (1 === e.nodeType || u)
                                        if ((i = (a = e[x] || (e[x] = {}))[l]) && i[0] === o) {
                                            if (!0 === (r = i[1]) || r === C) return !0 === r
                                        } else if ((i = a[l] = [o])[1] = s(e, t, n) || C, !0 === i[1]) return !0
                        }
                    }

                    function ge(i) {
                        return 1 < i.length ? function (e, t, n) {
                            for (var r = i.length; r--;)
                                if (!i[r](e, t, n)) return !1;
                            return !0
                        } : i[0]
                    }

                    function ve(e, t, n, r, i) {
                        for (var a, o = [], s = 0, l = e.length, u = null != t; s < l; s++) !(a = e[s]) || n && !n(a, r, i) || (o.push(a), u && t.push(s));
                        return o
                    }

                    function ye(f, h, m, g, v, e) {
                        return g && !g[x] && (g = ye(g)), v && !v[x] && (v = ye(v, e)), ae(function (e, t, n, r) {
                            var i, a, o, s = [],
                                l = [],
                                u = t.length,
                                c = e || function (e, t, n) {
                                    for (var r = 0, i = t.length; r < i; r++) re(e, t[r], n);
                                    return n
                                }(h || "*", n.nodeType ? [n] : n, []),
                                p = !f || !e && h ? c : ve(c, s, f, n, r),
                                d = m ? v || (e ? f : u || g) ? [] : t : p;
                            if (m && m(p, d, n, r), g)
                                for (i = ve(d, l), g(i, [], n, r), a = i.length; a--;)(o = i[a]) && (d[l[a]] = !(p[l[a]] = o));
                            if (e) {
                                if (v || f) {
                                    if (v) {
                                        for (i = [], a = d.length; a--;)(o = d[a]) && i.push(p[a] = o);
                                        v(null, d = [], i, r)
                                    }
                                    for (a = d.length; a--;)(o = d[a]) && -1 < (i = v ? E.call(e, o) : s[a]) && (e[i] = !(t[i] = o))
                                }
                            } else d = ve(d === t ? d.splice(u, d.length) : d), v ? v(null, t, d, r) : I.apply(t, d)
                        })
                    }

                    function be(e) {
                        for (var r, t, n, i = e.length, a = k.relative[e[0].type], o = a || k.relative[" "], s = a ? 1 : 0, l = me(function (e) {
                            return e === r
                        }, o, !0), u = me(function (e) {
                            return -1 < E.call(r, e)
                        }, o, !0), c = [function (e, t, n) {
                            return !a && (n || t !== w) || ((r = t).nodeType ? l(e, t, n) : u(e, t, n))
                        }]; s < i; s++)
                            if (t = k.relative[e[s].type]) c = [me(ge(c), t)];
                            else {
                                if ((t = k.filter[e[s].type].apply(null, e[s].matches))[x]) {
                                    for (n = ++s; n < i && !k.relative[e[n].type]; n++);
                                    return ye(1 < s && ge(c), 1 < s && he(e.slice(0, s - 1).concat({
                                        value: " " === e[s - 2].type ? "*" : ""
                                    })).replace(q, "$1"), t, s < n && be(e.slice(s, n)), n < i && be(e = e.slice(n)), n < i && he(e))
                                }
                                c.push(t)
                            } return ge(c)
                    }
                    de.prototype = k.filters = k.pseudos, k.setFilters = new de, m = re.compile = function (e, t) {
                        var n, r = [],
                            i = [],
                            a = f[e + " "];
                        if (!a) {
                            for (n = (t = t || fe(e)).length; n--;)(a = be(t[n]))[x] ? r.push(a) : i.push(a);
                            a = f(e, function (g, v) {
                                function e(e, t, n, r, i) {
                                    var a, o, s, l = [],
                                        u = 0,
                                        c = "0",
                                        p = e && [],
                                        d = null != i,
                                        f = w,
                                        h = e || x && k.find.TAG("*", i && t.parentNode || t),
                                        m = T += null == f ? 1 : Math.random() || .1;
                                    for (d && (w = t !== j && t, C = y); null != (a = h[c]); c++) {
                                        if (x && a) {
                                            for (o = 0; s = g[o++];)
                                                if (s(a, t, n)) {
                                                    r.push(a);
                                                    break
                                                } d && (T = m, C = ++y)
                                        }
                                        b && ((a = !s && a) && u--, e && p.push(a))
                                    }
                                    if (u += c, b && c !== u) {
                                        for (o = 0; s = v[o++];) s(p, l, t, n);
                                        if (e) {
                                            if (0 < u)
                                                for (; c--;) p[c] || l[c] || (l[c] = N.call(r));
                                            l = ve(l)
                                        }
                                        I.apply(r, l), d && !e && 0 < l.length && 1 < u + v.length && re.uniqueSort(r)
                                    }
                                    return d && (T = m, w = f), p
                                }
                                var y = 0,
                                    b = 0 < v.length,
                                    x = 0 < g.length;
                                return b ? ae(e) : e
                            }(i, r))
                        }
                        return a
                    }, h.sortStable = x.split("").sort(P).join("") === x, h.detectDuplicates = S, g(), h.sortDetached = oe(function (e) {
                        return 1 & e.compareDocumentPosition(j.createElement("div"))
                    }), oe(function (e) {
                        return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
                    }) || se("type|href|height|width", function (e, t, n) {
                        return n ? i : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
                    }), h.attributes && oe(function (e) {
                        return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
                    }) || se("value", function (e, t, n) {
                        return n || "input" !== e.nodeName.toLowerCase() ? i : e.defaultValue
                    }), oe(function (e) {
                        return null == e.getAttribute("disabled")
                    }) || se(_, function (e, t, n) {
                        var r;
                        return n ? i : (r = e.getAttributeNode(t)) && r.specified ? r.value : !0 === e[t] ? t.toLowerCase() : null
                    }), Ce.find = re, Ce.expr = re.selectors, Ce.expr[":"] = Ce.expr.pseudos, Ce.unique = re.uniqueSort, Ce.text = re.getText, Ce.isXMLDoc = re.isXML, Ce.contains = re.contains
                }(h);
            var M = {};
            Ce.Callbacks = function (i) {
                i = "string" == typeof i ? M[i] || function (e) {
                    var n = M[e] = {};
                    return Ce.each(e.match(j) || [], function (e, t) {
                        n[t] = !0
                    }), n
                }(i) : Ce.extend({}, i);
                var r, t, n, a, o, s, l = [],
                    u = !i.once && [],
                    c = function (e) {
                        for (t = i.memory && e, n = !0, o = s || 0, s = 0, a = l.length, r = !0; l && o < a; o++)
                            if (!1 === l[o].apply(e[0], e[1]) && i.stopOnFalse) {
                                t = !1;
                                break
                            } r = !1, l && (u ? u.length && c(xe(u)) : t ? l = [] : p.disable())
                    },
                    p = {
                        add: function () {
                            if (l) {
                                var e = l.length;
                                (function r(e) {
                                    Ce.each(e, function (e, t) {
                                        var n = Ce.type(t);
                                        "function" === n ? i.unique && p.has(t) || l.push(t) : t && t.length && "string" !== n && r(t)
                                    })
                                })(arguments), r ? a = l.length : t && (s = e, c(t))
                            }
                            return this
                        },
                        remove: function () {
                            return l && Ce.each(arguments, function (e, t) {
                                for (var n; - 1 < (n = Ce.inArray(t, l, n));) l.splice(n, 1), r && (n <= a && a--, n <= o && o--)
                            }), this
                        },
                        has: function (e) {
                            return e ? -1 < Ce.inArray(e, l) : !(!l || !l.length)
                        },
                        empty: function () {
                            return l = [], a = 0, this
                        },
                        disable: function () {
                            return l = u = t = w, this
                        },
                        disabled: function () {
                            return !l
                        },
                        lock: function () {
                            return u = w, t || p.disable(), this
                        },
                        locked: function () {
                            return !u
                        },
                        fireWith: function (e, t) {
                            return !l || n && !u || (t = [e, (t = t || []).slice ? t.slice() : t], r ? u.push(t) : c(t)), this
                        },
                        fire: function () {
                            return p.fireWith(this, arguments), this
                        },
                        fired: function () {
                            return !!n
                        }
                    };
                return p
            }, Ce.extend({
                Deferred: function (e) {
                    var o = [
                        ["resolve", "done", Ce.Callbacks("once memory"), "resolved"],
                        ["reject", "fail", Ce.Callbacks("once memory"), "rejected"],
                        ["notify", "progress", Ce.Callbacks("memory")]
                    ],
                        i = "pending",
                        s = {
                            state: function () {
                                return i
                            },
                            always: function () {
                                return l.done(arguments).fail(arguments), this
                            },
                            then: function () {
                                var a = arguments;
                                return Ce.Deferred(function (i) {
                                    Ce.each(o, function (e, t) {
                                        var n = t[0],
                                            r = Ce.isFunction(a[e]) && a[e];
                                        l[t[1]](function () {
                                            var e = r && r.apply(this, arguments);
                                            e && Ce.isFunction(e.promise) ? e.promise().done(i.resolve).fail(i.reject).progress(i.notify) : i[n + "With"](this === s ? i.promise() : this, r ? [e] : arguments)
                                        })
                                    }), a = null
                                }).promise()
                            },
                            promise: function (e) {
                                return null != e ? Ce.extend(e, s) : s
                            }
                        },
                        l = {};
                    return s.pipe = s.then, Ce.each(o, function (e, t) {
                        var n = t[2],
                            r = t[3];
                        s[t[1]] = n.add, r && n.add(function () {
                            i = r
                        }, o[1 ^ e][2].disable, o[2][2].lock), l[t[0]] = function () {
                            return l[t[0] + "With"](this === l ? s : this, arguments), this
                        }, l[t[0] + "With"] = n.fireWith
                    }), s.promise(l), e && e.call(l, l), l
                },
                when: function (e) {
                    function t(t, n, r) {
                        return function (e) {
                            n[t] = this, r[t] = 1 < arguments.length ? d.call(arguments) : e, r === i ? u.notifyWith(n, r) : --l || u.resolveWith(n, r)
                        }
                    }
                    var i, n, r, a = 0,
                        o = d.call(arguments),
                        s = o.length,
                        l = 1 !== s || e && Ce.isFunction(e.promise) ? s : 0,
                        u = 1 === l ? e : Ce.Deferred();
                    if (1 < s)
                        for (i = Array(s), n = Array(s), r = Array(s); a < s; a++) o[a] && Ce.isFunction(o[a].promise) ? o[a].promise().done(t(a, r, o)).fail(u.reject).progress(t(a, n, i)) : --l;
                    return l || u.resolveWith(r, o), u.promise()
                }
            }), Ce.support = function (a) {
                var e, t, n, r, i, o, s, l, u, c = m.createElement("div");
                if (c.setAttribute("className", "t"), c.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", e = c.getElementsByTagName("*") || [], !(t = c.getElementsByTagName("a")[0]) || !t.style || !e.length) return a;
                o = (r = m.createElement("select")).appendChild(m.createElement("option")), n = c.getElementsByTagName("input")[0], t.style.cssText = "top:1px;float:left;opacity:.5", a.getSetAttribute = "t" !== c.className, a.leadingWhitespace = 3 === c.firstChild.nodeType, a.tbody = !c.getElementsByTagName("tbody").length, a.htmlSerialize = !!c.getElementsByTagName("link").length, a.style = /top/.test(t.getAttribute("style")), a.hrefNormalized = "/a" === t.getAttribute("href"), a.opacity = /^0.5/.test(t.style.opacity), a.cssFloat = !!t.style.cssFloat, a.checkOn = !!n.value, a.optSelected = o.selected, a.enctype = !!m.createElement("form").enctype, a.html5Clone = "<:nav></:nav>" !== m.createElement("nav").cloneNode(!0).outerHTML, a.inlineBlockNeedsLayout = !1, a.shrinkWrapBlocks = !1, a.pixelPosition = !1, a.deleteExpando = !0, a.noCloneEvent = !0, a.reliableMarginRight = !0, a.boxSizingReliable = !0, n.checked = !0, a.noCloneChecked = n.cloneNode(!0).checked, r.disabled = !0, a.optDisabled = !o.disabled;
                try {
                    delete c.test
                } catch (e) {
                    a.deleteExpando = !1
                }
                for (u in (n = m.createElement("input")).setAttribute("value", ""), a.input = "" === n.getAttribute("value"), n.value = "t", n.setAttribute("type", "radio"), a.radioValue = "t" === n.value, n.setAttribute("checked", "t"), n.setAttribute("name", "t"), (i = m.createDocumentFragment()).appendChild(n), a.appendChecked = n.checked, a.checkClone = i.cloneNode(!0).cloneNode(!0).lastChild.checked, c.attachEvent && (c.attachEvent("onclick", function () {
                    a.noCloneEvent = !1
                }), c.cloneNode(!0).click()), {
                    submit: !0,
                    change: !0,
                    focusin: !0
                }) c.setAttribute(s = "on" + u, "t"), a[u + "Bubbles"] = s in h || !1 === c.attributes[s].expando;
                for (u in c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", a.clearCloneStyle = "content-box" === c.style.backgroundClip, Ce(a)) break;
                return a.ownLast = "0" !== u, Ce(function () {
                    var e, t, n, r = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
                        i = m.getElementsByTagName("body")[0];
                    i && ((e = m.createElement("div")).style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", i.appendChild(e).appendChild(c), c.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", (n = c.getElementsByTagName("td"))[0].style.cssText = "padding:0;margin:0;border:0;display:none", l = 0 === n[0].offsetHeight, n[0].style.display = "", n[1].style.display = "none", a.reliableHiddenOffsets = l && 0 === n[0].offsetHeight, c.innerHTML = "", c.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", Ce.swap(i, null != i.style.zoom ? {
                        zoom: 1
                    } : {}, function () {
                        a.boxSizing = 4 === c.offsetWidth
                    }), h.getComputedStyle && (a.pixelPosition = "1%" !== (h.getComputedStyle(c, null) || {}).top, a.boxSizingReliable = "4px" === (h.getComputedStyle(c, null) || {
                        width: "4px"
                    }).width, (t = c.appendChild(m.createElement("div"))).style.cssText = c.style.cssText = r, t.style.marginRight = t.style.width = "0", c.style.width = "1px", a.reliableMarginRight = !parseFloat((h.getComputedStyle(t, null) || {}).marginRight)), typeof c.style.zoom !== v && (c.innerHTML = "", c.style.cssText = r + "width:1px;padding:1px;display:inline;zoom:1", a.inlineBlockNeedsLayout = 3 === c.offsetWidth, c.style.display = "block", c.innerHTML = "<div></div>", c.firstChild.style.width = "5px", a.shrinkWrapBlocks = 3 !== c.offsetWidth, a.inlineBlockNeedsLayout && (i.style.zoom = 1)), i.removeChild(e), e = c = n = t = null)
                }), e = r = i = o = t = n = null, a
            }({});
            var E = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
                _ = /([A-Z])/g;
            Ce.extend({
                cache: {},
                noData: {
                    applet: !0,
                    embed: !0,
                    object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
                },
                hasData: function (e) {
                    return !!(e = e.nodeType ? Ce.cache[e[Ce.expando]] : e[Ce.expando]) && !vt(e)
                },
                data: function (e, t, n) {
                    return ht(e, t, n)
                },
                removeData: function (e, t) {
                    return mt(e, t)
                },
                _data: function (e, t, n) {
                    return ht(e, t, n, !0)
                },
                _removeData: function (e, t) {
                    return mt(e, t, !0)
                },
                acceptData: function (e) {
                    if (e.nodeType && 1 !== e.nodeType && 9 !== e.nodeType) return !1;
                    var t = e.nodeName && Ce.noData[e.nodeName.toLowerCase()];
                    return !t || !0 !== t && e.getAttribute("classid") === t
                }
            }), Ce.fn.extend({
                data: function (e, t) {
                    var n, r, i = null,
                        a = 0,
                        o = this[0];
                    if (e !== w) return "object" == typeof e ? this.each(function () {
                        Ce.data(this, e)
                    }) : 1 < arguments.length ? this.each(function () {
                        Ce.data(this, e, t)
                    }) : o ? gt(o, e, Ce.data(o, e)) : null;
                    if (this.length && (i = Ce.data(o), 1 === o.nodeType && !Ce._data(o, "parsedAttrs"))) {
                        for (n = o.attributes; n.length > a; a++) 0 === (r = n[a].name).indexOf("data-") && gt(o, r = Ce.camelCase(r.slice(5)), i[r]);
                        Ce._data(o, "parsedAttrs", !0)
                    }
                    return i
                },
                removeData: function (e) {
                    return this.each(function () {
                        Ce.removeData(this, e)
                    })
                }
            }), Ce.extend({
                queue: function (e, t, n) {
                    var r;
                    return e ? (t = (t || "fx") + "queue", r = Ce._data(e, t), n && (!r || Ce.isArray(n) ? r = Ce._data(e, t, Ce.makeArray(n)) : r.push(n)), r || []) : w
                },
                dequeue: function (e, t) {
                    t = t || "fx";
                    var n = Ce.queue(e, t),
                        r = n.length,
                        i = xe(n),
                        a = Ce._queueHooks(e, t);
                    "inprogress" === i && (i = xe(n), r--), i && ("fx" === t && n.unshift("inprogress"), delete a.stop, i.call(e, function () {
                        Ce.dequeue(e, t)
                    }, a)), !r && a && a.empty.fire()
                },
                _queueHooks: function (e, t) {
                    var n = t + "queueHooks";
                    return Ce._data(e, n) || Ce._data(e, n, {
                        empty: Ce.Callbacks("once memory").add(function () {
                            Ce._removeData(e, t + "queue"), Ce._removeData(e, n)
                        })
                    })
                }
            }), Ce.fn.extend({
                queue: function (t, n) {
                    var e = 2;
                    return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? Ce.queue(this[0], t) : n === w ? this : this.each(function () {
                        var e = Ce.queue(this, t, n);
                        Ce._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && Ce.dequeue(this, t)
                    })
                },
                dequeue: function (e) {
                    return this.each(function () {
                        Ce.dequeue(this, e)
                    })
                },
                delay: function (r, e) {
                    return r = Ce.fx && Ce.fx.speeds[r] || r, e = e || "fx", this.queue(e, function (e, t) {
                        var n = setTimeout(e, r);
                        t.stop = function () {
                            clearTimeout(n)
                        }
                    })
                },
                clearQueue: function (e) {
                    return this.queue(e || "fx", [])
                },
                promise: function (e, t) {
                    function n() {
                        --i || a.resolveWith(o, [o])
                    }
                    var r, i = 1,
                        a = Ce.Deferred(),
                        o = this,
                        s = this.length;
                    for ("string" != typeof e && (t = e, e = w), e = e || "fx"; s--;)(r = Ce._data(o[s], e + "queueHooks")) && r.empty && (i++, r.empty.add(n));
                    return n(), a.promise(t)
                }
            });
            var B, R, $ = /[\t\r\n\f]/g,
                H = /\r/g,
                F = /^(?:input|select|textarea|button|object)$/i,
                q = /^(?:a|area)$/i,
                G = /^(?:checked|selected)$/i,
                U = Ce.support.getSetAttribute,
                Q = Ce.support.input;
            Ce.fn.extend({
                attr: function (e, t) {
                    return Ce.access(this, Ce.attr, e, t, 1 < arguments.length)
                },
                removeAttr: function (e) {
                    return this.each(function () {
                        Ce.removeAttr(this, e)
                    })
                },
                prop: function (e, t) {
                    return Ce.access(this, Ce.prop, e, t, 1 < arguments.length)
                },
                removeProp: function (e) {
                    return e = Ce.propFix[e] || e, this.each(function () {
                        try {
                            this[e] = w, delete this[e]
                        } catch (e) { }
                    })
                },
                addClass: function (t) {
                    var e, n, r, i, a, o = 0,
                        s = this.length,
                        l = "string" == typeof t && t;
                    if (Ce.isFunction(t)) return this.each(function (e) {
                        Ce(this).addClass(t.call(this, e, this.className))
                    });
                    if (l)
                        for (e = (t || "").match(j) || []; o < s; o++)
                            if (r = 1 === (n = this[o]).nodeType && (n.className ? (" " + n.className + " ").replace($, " ") : " ")) {
                                for (a = 0; i = e[a++];) r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                                n.className = Ce.trim(r)
                            } return this
                },
                removeClass: function (t) {
                    var e, n, r, i, a, o = 0,
                        s = this.length,
                        l = 0 === arguments.length || "string" == typeof t && t;
                    if (Ce.isFunction(t)) return this.each(function (e) {
                        Ce(this).removeClass(t.call(this, e, this.className))
                    });
                    if (l)
                        for (e = (t || "").match(j) || []; o < s; o++)
                            if (r = 1 === (n = this[o]).nodeType && (n.className ? (" " + n.className + " ").replace($, " ") : "")) {
                                for (a = 0; i = e[a++];)
                                    for (; 0 <= r.indexOf(" " + i + " ");) r = r.replace(" " + i + " ", " ");
                                n.className = t ? Ce.trim(r) : ""
                            } return this
                },
                toggleClass: function (i, t) {
                    var a = typeof i;
                    return "boolean" == typeof t && "string" == a ? t ? this.addClass(i) : this.removeClass(i) : Ce.isFunction(i) ? this.each(function (e) {
                        Ce(this).toggleClass(i.call(this, e, this.className, t), t)
                    }) : this.each(function () {
                        if ("string" == a)
                            for (var e, t = 0, n = Ce(this), r = i.match(j) || []; e = r[t++];) n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
                        else a !== v && "boolean" != a || (this.className && Ce._data(this, "__className__", this.className), this.className = this.className || !1 === i ? "" : Ce._data(this, "__className__") || "")
                    })
                },
                hasClass: function (e) {
                    for (var t = " " + e + " ", n = 0, r = this.length; n < r; n++)
                        if (1 === this[n].nodeType && 0 <= (" " + this[n].className + " ").replace($, " ").indexOf(t)) return !0;
                    return !1
                },
                val: function (n) {
                    var e, r, i, t = this[0];
                    return arguments.length ? (i = Ce.isFunction(n), this.each(function (e) {
                        var t;
                        1 === this.nodeType && (null == (t = i ? n.call(this, e, Ce(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Ce.isArray(t) && (t = Ce.map(t, function (e) {
                            return null == e ? "" : e + ""
                        })), (r = Ce.valHooks[this.type] || Ce.valHooks[this.nodeName.toLowerCase()]) && "set" in r && r.set(this, t, "value") !== w || (this.value = t))
                    })) : t ? (r = Ce.valHooks[t.type] || Ce.valHooks[t.nodeName.toLowerCase()]) && "get" in r && (e = r.get(t, "value")) !== w ? e : "string" == typeof (e = t.value) ? e.replace(H, "") : null == e ? "" : e : void 0
                }
            }), Ce.extend({
                valHooks: {
                    option: {
                        get: function (e) {
                            var t = Ce.find.attr(e, "value");
                            return null != t ? t : e.text
                        }
                    },
                    select: {
                        get: function (e) {
                            for (var t, n, r = e.options, i = e.selectedIndex, a = "select-one" === e.type || i < 0, o = a ? null : [], s = a ? i + 1 : r.length, l = i < 0 ? s : a ? i : 0; l < s; l++)
                                if (!(!(n = r[l]).selected && l !== i || (Ce.support.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && Ce.nodeName(n.parentNode, "optgroup"))) {
                                    if (t = Ce(n).val(), a) return t;
                                    o.push(t)
                                } return o
                        },
                        set: function (e, t) {
                            for (var n, r, i = e.options, a = Ce.makeArray(t), o = i.length; o--;)((r = i[o]).selected = 0 <= Ce.inArray(Ce(r).val(), a)) && (n = !0);
                            return n || (e.selectedIndex = -1), a
                        }
                    }
                },
                attr: function (e, t, n) {
                    var r, i, a = e.nodeType;
                    if (e && 3 !== a && 8 !== a && 2 !== a) return typeof e.getAttribute === v ? Ce.prop(e, t, n) : (1 === a && Ce.isXMLDoc(e) || (t = t.toLowerCase(), r = Ce.attrHooks[t] || (Ce.expr.match.bool.test(t) ? R : B)), n === w ? r && "get" in r && null !== (i = r.get(e, t)) ? i : null == (i = Ce.find.attr(e, t)) ? w : i : null !== n ? r && "set" in r && (i = r.set(e, n, t)) !== w ? i : (e.setAttribute(t, n + ""), n) : (Ce.removeAttr(e, t), w))
                },
                removeAttr: function (e, t) {
                    var n, r, i = 0,
                        a = t && t.match(j);
                    if (a && 1 === e.nodeType)
                        for (; n = a[i++];) r = Ce.propFix[n] || n, Ce.expr.match.bool.test(n) ? Q && U || !G.test(n) ? e[r] = !1 : e[Ce.camelCase("default-" + n)] = e[r] = !1 : Ce.attr(e, n, ""), e.removeAttribute(U ? n : r)
                },
                attrHooks: {
                    type: {
                        set: function (e, t) {
                            if (!Ce.support.radioValue && "radio" === t && Ce.nodeName(e, "input")) {
                                var n = e.value;
                                return e.setAttribute("type", t), n && (e.value = n), t
                            }
                        }
                    }
                },
                propFix: {
                    for: "htmlFor",
                    class: "className"
                },
                prop: function (e, t, n) {
                    var r, i, a = e.nodeType;
                    if (e && 3 !== a && 8 !== a && 2 !== a) return (1 !== a || !Ce.isXMLDoc(e)) && (t = Ce.propFix[t] || t, i = Ce.propHooks[t]), n !== w ? i && "set" in i && (r = i.set(e, n, t)) !== w ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
                },
                propHooks: {
                    tabIndex: {
                        get: function (e) {
                            var t = Ce.find.attr(e, "tabindex");
                            return t ? parseInt(t, 10) : F.test(e.nodeName) || q.test(e.nodeName) && e.href ? 0 : -1
                        }
                    }
                }
            }), R = {
                set: function (e, t, n) {
                    return !1 === t ? Ce.removeAttr(e, n) : Q && U || !G.test(n) ? e.setAttribute(!U && Ce.propFix[n] || n, n) : e[Ce.camelCase("default-" + n)] = e[n] = !0, n
                }
            }, Ce.each(Ce.expr.match.bool.source.match(/\w+/g), function (e, t) {
                var a = Ce.expr.attrHandle[t] || Ce.find.attr;
                Ce.expr.attrHandle[t] = Q && U || !G.test(t) ? function (e, t, n) {
                    var r = Ce.expr.attrHandle[t],
                        i = n ? w : (Ce.expr.attrHandle[t] = w) != a(e, t, n) ? t.toLowerCase() : null;
                    return Ce.expr.attrHandle[t] = r, i
                } : function (e, t, n) {
                    return n ? w : e[Ce.camelCase("default-" + t)] ? t.toLowerCase() : null
                }
            }), Q && U || (Ce.attrHooks.value = {
                set: function (e, t, n) {
                    return Ce.nodeName(e, "input") ? (e.defaultValue = t, w) : B && B.set(e, t, n)
                }
            }), U || (B = {
                set: function (e, t, n) {
                    var r = e.getAttributeNode(n);
                    return r || e.setAttributeNode(r = e.ownerDocument.createAttribute(n)), r.value = t += "", "value" === n || t === e.getAttribute(n) ? t : w
                }
            }, Ce.expr.attrHandle.id = Ce.expr.attrHandle.name = Ce.expr.attrHandle.coords = function (e, t, n) {
                var r;
                return n ? w : (r = e.getAttributeNode(t)) && "" !== r.value ? r.value : null
            }, Ce.valHooks.button = {
                get: function (e, t) {
                    var n = e.getAttributeNode(t);
                    return n && n.specified ? n.value : w
                },
                set: B.set
            }, Ce.attrHooks.contenteditable = {
                set: function (e, t, n) {
                    B.set(e, "" !== t && t, n)
                }
            }, Ce.each(["width", "height"], function (e, n) {
                Ce.attrHooks[n] = {
                    set: function (e, t) {
                        return "" === t ? (e.setAttribute(n, "auto"), t) : w
                    }
                }
            })), Ce.support.hrefNormalized || Ce.each(["href", "src"], function (e, t) {
                Ce.propHooks[t] = {
                    get: function (e) {
                        return e.getAttribute(t, 4)
                    }
                }
            }), Ce.support.style || (Ce.attrHooks.style = {
                get: function (e) {
                    return e.style.cssText || w
                },
                set: function (e, t) {
                    return e.style.cssText = t + ""
                }
            }), Ce.support.optSelected || (Ce.propHooks.selected = {
                get: function (e) {
                    var t = e.parentNode;
                    return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
                }
            }), Ce.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
                Ce.propFix[this.toLowerCase()] = this
            }), Ce.support.enctype || (Ce.propFix.enctype = "encoding"), Ce.each(["radio", "checkbox"], function () {
                Ce.valHooks[this] = {
                    set: function (e, t) {
                        return Ce.isArray(t) ? e.checked = 0 <= Ce.inArray(Ce(e).val(), t) : w
                    }
                }, Ce.support.checkOn || (Ce.valHooks[this].get = function (e) {
                    return null === e.getAttribute("value") ? "on" : e.value
                })
            });
            var z = /^(?:input|select|textarea)$/i,
                J = /^key/,
                W = /^(?:mouse|contextmenu)|click/,
                V = /^(?:focusinfocus|focusoutblur)$/,
                X = /^([^.]*)(?:\.(.+)|)$/;
            Ce.event = {
                global: {},
                add: function (e, t, n, r, i) {
                    var a, o, s, l, u, c, p, d, f, h, m, g = Ce._data(e);
                    if (g) {
                        for (n.handler && (n = (l = n).handler, i = l.selector), n.guid || (n.guid = Ce.guid++), (o = g.events) || (o = g.events = {}), (c = g.handle) || ((c = g.handle = function (e) {
                            return typeof Ce === v || e && Ce.event.triggered === e.type ? w : Ce.event.dispatch.apply(c.elem, arguments)
                        }).elem = e), s = (t = (t || "").match(j) || [""]).length; s--;) f = m = (a = X.exec(t[s]) || [])[1], h = (a[2] || "").split(".").sort(), f && (u = Ce.event.special[f] || {}, f = (i ? u.delegateType : u.bindType) || f, u = Ce.event.special[f] || {}, p = Ce.extend({
                            type: f,
                            origType: m,
                            data: r,
                            handler: n,
                            guid: n.guid,
                            selector: i,
                            needsContext: i && Ce.expr.match.needsContext.test(i),
                            namespace: h.join(".")
                        }, l), (d = o[f]) || ((d = o[f] = []).delegateCount = 0, u.setup && !1 !== u.setup.call(e, r, h, c) || (e.addEventListener ? e.addEventListener(f, c, !1) : e.attachEvent && e.attachEvent("on" + f, c))), u.add && (u.add.call(e, p), p.handler.guid || (p.handler.guid = n.guid)), i ? d.splice(d.delegateCount++, 0, p) : d.push(p), Ce.event.global[f] = !0);
                        e = null
                    }
                },
                remove: function (e, t, n, r, i) {
                    var a, o, s, l, u, c, p, d, f, h, m, g = Ce.hasData(e) && Ce._data(e);
                    if (g && (c = g.events)) {
                        for (u = (t = (t || "").match(j) || [""]).length; u--;)
                            if (f = m = (s = X.exec(t[u]) || [])[1], h = (s[2] || "").split(".").sort(), f) {
                                for (p = Ce.event.special[f] || {}, d = c[f = (r ? p.delegateType : p.bindType) || f] || [], s = s[2] && RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = a = d.length; a--;) o = d[a], !i && m !== o.origType || n && n.guid !== o.guid || s && !s.test(o.namespace) || r && r !== o.selector && ("**" !== r || !o.selector) || (d.splice(a, 1), o.selector && d.delegateCount--, p.remove && p.remove.call(e, o));
                                l && !d.length && (p.teardown && !1 !== p.teardown.call(e, h, g.handle) || Ce.removeEvent(e, f, g.handle), delete c[f])
                            } else
                                for (f in c) Ce.event.remove(e, f + t[u], n, r, !0);
                        Ce.isEmptyObject(c) && (delete g.handle, Ce._removeData(e, "events"))
                    }
                },
                trigger: function (e, t, n, r) {
                    var i, a, o, s, l, u, c, p = [n || m],
                        d = b.call(e, "type") ? e.type : e,
                        f = b.call(e, "namespace") ? e.namespace.split(".") : [];
                    if (o = u = n = n || m, 3 !== n.nodeType && 8 !== n.nodeType && !V.test(d + Ce.event.triggered) && (0 <= d.indexOf(".") && (f = d.split("."), d = xe(f), f.sort()), a = d.indexOf(":") < 0 && "on" + d, (e = e[Ce.expando] ? e : new Ce.Event(d, "object" == typeof e && e)).isTrigger = r ? 2 : 3, e.namespace = f.join("."), e.namespace_re = e.namespace ? RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = w, e.target || (e.target = n), t = null == t ? [e] : Ce.makeArray(t, [e]), l = Ce.event.special[d] || {}, r || !l.trigger || !1 !== l.trigger.apply(n, t))) {
                        if (!r && !l.noBubble && !Ce.isWindow(n)) {
                            for (s = l.delegateType || d, V.test(s + d) || (o = o.parentNode); o; o = o.parentNode) p.push(o), u = o;
                            u === (n.ownerDocument || m) && p.push(u.defaultView || u.parentWindow || h)
                        }
                        for (c = 0;
                            (o = p[c++]) && !e.isPropagationStopped();) e.type = 1 < c ? s : l.bindType || d, (i = (Ce._data(o, "events") || {})[e.type] && Ce._data(o, "handle")) && i.apply(o, t), (i = a && o[a]) && Ce.acceptData(o) && i.apply && !1 === i.apply(o, t) && e.preventDefault();
                        if (e.type = d, !r && !e.isDefaultPrevented() && (!l._default || !1 === l._default.apply(p.pop(), t)) && Ce.acceptData(n) && a && n[d] && !Ce.isWindow(n)) {
                            (u = n[a]) && (n[a] = null), Ce.event.triggered = d;
                            try {
                                n[d]()
                            } catch (e) { }
                            Ce.event.triggered = w, u && (n[a] = u)
                        }
                        return e.result
                    }
                },
                dispatch: function (e) {
                    e = Ce.event.fix(e);
                    var t, n, r, i, a, o = [],
                        s = d.call(arguments),
                        l = (Ce._data(this, "events") || {})[e.type] || [],
                        u = Ce.event.special[e.type] || {};
                    if ((s[0] = e).delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, e)) {
                        for (o = Ce.event.handlers.call(this, e, l), t = 0;
                            (i = o[t++]) && !e.isPropagationStopped();)
                            for (e.currentTarget = i.elem, a = 0;
                                (r = i.handlers[a++]) && !e.isImmediatePropagationStopped();) e.namespace_re && !e.namespace_re.test(r.namespace) || (e.handleObj = r, e.data = r.data, (n = ((Ce.event.special[r.origType] || {}).handle || r.handler).apply(i.elem, s)) !== w && !1 === (e.result = n) && (e.preventDefault(), e.stopPropagation()));
                        return u.postDispatch && u.postDispatch.call(this, e), e.result
                    }
                },
                handlers: function (e, t) {
                    var n, r, i, a, o = [],
                        s = t.delegateCount,
                        l = e.target;
                    if (s && l.nodeType && (!e.button || "click" !== e.type))
                        for (; l != this; l = l.parentNode || this)
                            if (1 === l.nodeType && (!0 !== l.disabled || "click" !== e.type)) {
                                for (i = [], a = 0; a < s; a++) i[n = (r = t[a]).selector + " "] === w && (i[n] = r.needsContext ? 0 <= Ce(n, this).index(l) : Ce.find(n, this, null, [l]).length), i[n] && i.push(r);
                                i.length && o.push({
                                    elem: l,
                                    handlers: i
                                })
                            } return t.length > s && o.push({
                                elem: this,
                                handlers: t.slice(s)
                            }), o
                },
                fix: function (e) {
                    if (e[Ce.expando]) return e;
                    var t, n, r, i = e.type,
                        a = e,
                        o = this.fixHooks[i];
                    for (o || (this.fixHooks[i] = o = W.test(i) ? this.mouseHooks : J.test(i) ? this.keyHooks : {}), r = o.props ? this.props.concat(o.props) : this.props, e = new Ce.Event(a), t = r.length; t--;) e[n = r[t]] = a[n];
                    return e.target || (e.target = a.srcElement || m), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, o.filter ? o.filter(e, a) : e
                },
                props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
                fixHooks: {},
                keyHooks: {
                    props: "char charCode key keyCode".split(" "),
                    filter: function (e, t) {
                        return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
                    }
                },
                mouseHooks: {
                    props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                    filter: function (e, t) {
                        var n, r, i, a = t.button,
                            o = t.fromElement;
                        return null == e.pageX && null != t.clientX && (i = (r = e.target.ownerDocument || m).documentElement, n = r.body, e.pageX = t.clientX + (i && i.scrollLeft || n && n.scrollLeft || 0) - (i && i.clientLeft || n && n.clientLeft || 0), e.pageY = t.clientY + (i && i.scrollTop || n && n.scrollTop || 0) - (i && i.clientTop || n && n.clientTop || 0)), !e.relatedTarget && o && (e.relatedTarget = o === e.target ? t.toElement : o), e.which || a === w || (e.which = 1 & a ? 1 : 2 & a ? 3 : 4 & a ? 2 : 0), e
                    }
                },
                special: {
                    load: {
                        noBubble: !0
                    },
                    focus: {
                        trigger: function () {
                            if (this !== xt() && this.focus) try {
                                return this.focus(), !1
                            } catch (e) { }
                        },
                        delegateType: "focusin"
                    },
                    blur: {
                        trigger: function () {
                            return this === xt() && this.blur ? (this.blur(), !1) : w
                        },
                        delegateType: "focusout"
                    },
                    click: {
                        trigger: function () {
                            return Ce.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : w
                        },
                        _default: function (e) {
                            return Ce.nodeName(e.target, "a")
                        }
                    },
                    beforeunload: {
                        postDispatch: function (e) {
                            e.result !== w && (e.originalEvent.returnValue = e.result)
                        }
                    }
                },
                simulate: function (e, t, n, r) {
                    var i = Ce.extend(new Ce.Event, n, {
                        type: e,
                        isSimulated: !0,
                        originalEvent: {}
                    });
                    r ? Ce.event.trigger(i, null, t) : Ce.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
                }
            }, Ce.removeEvent = m.removeEventListener ? function (e, t, n) {
                e.removeEventListener && e.removeEventListener(t, n, !1)
            } : function (e, t, n) {
                var r = "on" + t;
                e.detachEvent && (typeof e[r] === v && (e[r] = null), e.detachEvent(r, n))
            }, Ce.Event = function (e, t) {
                return this instanceof Ce.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || !1 === e.returnValue || e.getPreventDefault && e.getPreventDefault() ? yt : bt) : this.type = e, t && Ce.extend(this, t), this.timeStamp = e && e.timeStamp || Ce.now(), this[Ce.expando] = !0, w) : new Ce.Event(e, t)
            }, Ce.Event.prototype = {
                isDefaultPrevented: bt,
                isPropagationStopped: bt,
                isImmediatePropagationStopped: bt,
                preventDefault: function () {
                    var e = this.originalEvent;
                    this.isDefaultPrevented = yt, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
                },
                stopPropagation: function () {
                    var e = this.originalEvent;
                    this.isPropagationStopped = yt, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
                },
                stopImmediatePropagation: function () {
                    this.isImmediatePropagationStopped = yt, this.stopPropagation()
                }
            }, Ce.each({
                mouseenter: "mouseover",
                mouseleave: "mouseout"
            }, function (e, i) {
                Ce.event.special[e] = {
                    delegateType: i,
                    bindType: i,
                    handle: function (e) {
                        var t, n = e.relatedTarget,
                            r = e.handleObj;
                        return n && (n === this || Ce.contains(this, n)) || (e.type = r.origType, t = r.handler.apply(this, arguments), e.type = i), t
                    }
                }
            }), Ce.support.submitBubbles || (Ce.event.special.submit = {
                setup: function () {
                    return !Ce.nodeName(this, "form") && (Ce.event.add(this, "click._submit keypress._submit", function (e) {
                        var t = e.target,
                            n = Ce.nodeName(t, "input") || Ce.nodeName(t, "button") ? t.form : w;
                        n && !Ce._data(n, "submitBubbles") && (Ce.event.add(n, "submit._submit", function (e) {
                            e._submit_bubble = !0
                        }), Ce._data(n, "submitBubbles", !0))
                    }), w)
                },
                postDispatch: function (e) {
                    e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && Ce.event.simulate("submit", this.parentNode, e, !0))
                },
                teardown: function () {
                    return !Ce.nodeName(this, "form") && (Ce.event.remove(this, "._submit"), w)
                }
            }), Ce.support.changeBubbles || (Ce.event.special.change = {
                setup: function () {
                    return z.test(this.nodeName) ? ("checkbox" !== this.type && "radio" !== this.type || (Ce.event.add(this, "propertychange._change", function (e) {
                        "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
                    }), Ce.event.add(this, "click._change", function (e) {
                        this._just_changed && !e.isTrigger && (this._just_changed = !1), Ce.event.simulate("change", this, e, !0)
                    })), !1) : (Ce.event.add(this, "beforeactivate._change", function (e) {
                        var t = e.target;
                        z.test(t.nodeName) && !Ce._data(t, "changeBubbles") && (Ce.event.add(t, "change._change", function (e) {
                            !this.parentNode || e.isSimulated || e.isTrigger || Ce.event.simulate("change", this.parentNode, e, !0)
                        }), Ce._data(t, "changeBubbles", !0))
                    }), w)
                },
                handle: function (e) {
                    var t = e.target;
                    return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : w
                },
                teardown: function () {
                    return Ce.event.remove(this, "._change"), !z.test(this.nodeName)
                }
            }), Ce.support.focusinBubbles || Ce.each({
                focus: "focusin",
                blur: "focusout"
            }, function (e, t) {
                function n(e) {
                    Ce.event.simulate(t, e.target, Ce.event.fix(e), !0)
                }
                var r = 0;
                Ce.event.special[t] = {
                    setup: function () {
                        0 == r++ && m.addEventListener(e, n, !0)
                    },
                    teardown: function () {
                        0 == --r && m.removeEventListener(e, n, !0)
                    }
                }
            }), Ce.fn.extend({
                on: function (e, t, n, r, i) {
                    var a, o;
                    if ("object" == typeof e) {
                        for (a in "string" != typeof t && (n = n || t, t = w), e) this.on(a, t, n, e[a], i);
                        return this
                    }
                    if (null == n && null == r ? (r = t, n = t = w) : null == r && ("string" == typeof t ? (r = n, n = w) : (r = n, n = t, t = w)), !1 === r) r = bt;
                    else if (!r) return this;
                    return 1 === i && (o = r, (r = function (e) {
                        return Ce().off(e), o.apply(this, arguments)
                    }).guid = o.guid || (o.guid = Ce.guid++)), this.each(function () {
                        Ce.event.add(this, e, r, n, t)
                    })
                },
                one: function (e, t, n, r) {
                    return this.on(e, t, n, r, 1)
                },
                off: function (e, t, n) {
                    var r, i;
                    if (e && e.preventDefault && e.handleObj) return r = e.handleObj, Ce(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
                    if ("object" != typeof e) return !1 !== t && "function" != typeof t || (n = t, t = w), !1 === n && (n = bt), this.each(function () {
                        Ce.event.remove(this, e, n, t)
                    });
                    for (i in e) this.off(i, t, e[i]);
                    return this
                },
                trigger: function (e, t) {
                    return this.each(function () {
                        Ce.event.trigger(e, t, this)
                    })
                },
                triggerHandler: function (e, t) {
                    var n = this[0];
                    return n ? Ce.event.trigger(e, t, n, !0) : w
                }
            });
            var Y = /^.[^:#\[\.,]*$/,
                K = /^(?:parents|prev(?:Until|All))/,
                Z = Ce.expr.match.needsContext,
                ee = {
                    children: !0,
                    contents: !0,
                    next: !0,
                    prev: !0
                };
            Ce.fn.extend({
                find: function (e) {
                    var t, n = [],
                        r = this,
                        i = r.length;
                    if ("string" != typeof e) return this.pushStack(Ce(e).filter(function () {
                        for (t = 0; t < i; t++)
                            if (Ce.contains(r[t], this)) return !0
                    }));
                    for (t = 0; t < i; t++) Ce.find(e, r[t], n);
                    return (n = this.pushStack(1 < i ? Ce.unique(n) : n)).selector = this.selector ? this.selector + " " + e : e, n
                },
                has: function (e) {
                    var t, n = Ce(e, this),
                        r = n.length;
                    return this.filter(function () {
                        for (t = 0; t < r; t++)
                            if (Ce.contains(this, n[t])) return !0
                    })
                },
                not: function (e) {
                    return this.pushStack(kt(this, e || [], !0))
                },
                filter: function (e) {
                    return this.pushStack(kt(this, e || [], !1))
                },
                is: function (e) {
                    return !!kt(this, "string" == typeof e && Z.test(e) ? Ce(e) : e || [], !1).length
                },
                closest: function (e, t) {
                    for (var n, r = 0, i = this.length, a = [], o = Z.test(e) || "string" != typeof e ? Ce(e, t || this.context) : 0; r < i; r++)
                        for (n = this[r]; n && n !== t; n = n.parentNode)
                            if (n.nodeType < 11 && (o ? -1 < o.index(n) : 1 === n.nodeType && Ce.find.matchesSelector(n, e))) {
                                n = a.push(n);
                                break
                            } return this.pushStack(1 < a.length ? Ce.unique(a) : a)
                },
                index: function (e) {
                    return e ? "string" == typeof e ? Ce.inArray(this[0], Ce(e)) : Ce.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
                },
                add: function (e, t) {
                    var n = "string" == typeof e ? Ce(e, t) : Ce.makeArray(e && e.nodeType ? [e] : e),
                        r = Ce.merge(this.get(), n);
                    return this.pushStack(Ce.unique(r))
                },
                addBack: function (e) {
                    return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
                }
            }), Ce.each({
                parent: function (e) {
                    var t = e.parentNode;
                    return t && 11 !== t.nodeType ? t : null
                },
                parents: function (e) {
                    return Ce.dir(e, "parentNode")
                },
                parentsUntil: function (e, t, n) {
                    return Ce.dir(e, "parentNode", n)
                },
                next: function (e) {
                    return Ct(e, "nextSibling")
                },
                prev: function (e) {
                    return Ct(e, "previousSibling")
                },
                nextAll: function (e) {
                    return Ce.dir(e, "nextSibling")
                },
                prevAll: function (e) {
                    return Ce.dir(e, "previousSibling")
                },
                nextUntil: function (e, t, n) {
                    return Ce.dir(e, "nextSibling", n)
                },
                prevUntil: function (e, t, n) {
                    return Ce.dir(e, "previousSibling", n)
                },
                siblings: function (e) {
                    return Ce.sibling((e.parentNode || {}).firstChild, e)
                },
                children: function (e) {
                    return Ce.sibling(e.firstChild)
                },
                contents: function (e) {
                    return Ce.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : Ce.merge([], e.childNodes)
                }
            }, function (r, i) {
                Ce.fn[r] = function (e, t) {
                    var n = Ce.map(this, i, e);
                    return "Until" !== r.slice(-5) && (t = e), t && "string" == typeof t && (n = Ce.filter(t, n)), 1 < this.length && (ee[r] || (n = Ce.unique(n)), K.test(r) && (n = n.reverse())), this.pushStack(n)
                }
            }), Ce.extend({
                filter: function (e, t, n) {
                    var r = t[0];
                    return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? Ce.find.matchesSelector(r, e) ? [r] : [] : Ce.find.matches(e, Ce.grep(t, function (e) {
                        return 1 === e.nodeType
                    }))
                },
                dir: function (e, t, n) {
                    for (var r = [], i = e[t]; i && 9 !== i.nodeType && (n === w || 1 !== i.nodeType || !Ce(i).is(n));) 1 === i.nodeType && r.push(i), i = i[t];
                    return r
                },
                sibling: function (e, t) {
                    for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                    return n
                }
            });
            var te = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
                ne = / jQuery\d+="(?:null|\d+)"/g,
                re = RegExp("<(?:" + te + ")[\\s/>]", "i"),
                ie = /^\s+/,
                ae = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
                oe = /<([\w:]+)/,
                se = /<tbody/i,
                le = /<|&#?\w+;/,
                ue = /<(?:script|style|link)/i,
                ce = /^(?:checkbox|radio)$/i,
                pe = /checked\s*(?:[^=]|=\s*.checked.)/i,
                de = /^$|\/(?:java|ecma)script/i,
                fe = /^true\/(.*)/,
                he = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
                me = {
                    option: [1, "<select multiple='multiple'>", "</select>"],
                    legend: [1, "<fieldset>", "</fieldset>"],
                    area: [1, "<map>", "</map>"],
                    param: [1, "<object>", "</object>"],
                    thead: [1, "<table>", "</table>"],
                    tr: [2, "<table><tbody>", "</tbody></table>"],
                    col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
                    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                    _default: Ce.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
                },
                ge = wt(m).appendChild(m.createElement("div"));
            me.optgroup = me.option, me.tbody = me.tfoot = me.colgroup = me.caption = me.thead, me.th = me.td, Ce.fn.extend({
                text: function (e) {
                    return Ce.access(this, function (e) {
                        return e === w ? Ce.text(this) : this.empty().append((this[0] && this[0].ownerDocument || m).createTextNode(e))
                    }, null, e, arguments.length)
                },
                append: function () {
                    return this.domManip(arguments, function (e) {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || jt(this, e).appendChild(e)
                    })
                },
                prepend: function () {
                    return this.domManip(arguments, function (e) {
                        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                            var t = jt(this, e);
                            t.insertBefore(e, t.firstChild)
                        }
                    })
                },
                before: function () {
                    return this.domManip(arguments, function (e) {
                        this.parentNode && this.parentNode.insertBefore(e, this)
                    })
                },
                after: function () {
                    return this.domManip(arguments, function (e) {
                        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                    })
                },
                remove: function (e, t) {
                    for (var n, r = e ? Ce.filter(e, this) : this, i = 0; null != (n = r[i]); i++) t || 1 !== n.nodeType || Ce.cleanData(Dt(n)), n.parentNode && (t && Ce.contains(n.ownerDocument, n) && St(Dt(n, "script")), n.parentNode.removeChild(n));
                    return this
                },
                empty: function () {
                    for (var e, t = 0; null != (e = this[t]); t++) {
                        for (1 === e.nodeType && Ce.cleanData(Dt(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
                        e.options && Ce.nodeName(e, "select") && (e.options.length = 0)
                    }
                    return this
                },
                clone: function (e, t) {
                    return e = null != e && e, t = null == t ? e : t, this.map(function () {
                        return Ce.clone(this, e, t)
                    })
                },
                html: function (e) {
                    return Ce.access(this, function (e) {
                        var t = this[0] || {},
                            n = 0,
                            r = this.length;
                        if (e === w) return 1 === t.nodeType ? t.innerHTML.replace(ne, "") : w;
                        if (!("string" != typeof e || ue.test(e) || !Ce.support.htmlSerialize && re.test(e) || !Ce.support.leadingWhitespace && ie.test(e) || me[(oe.exec(e) || ["", ""])[1].toLowerCase()])) {
                            e = e.replace(ae, "<$1></$2>");
                            try {
                                for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (Ce.cleanData(Dt(t, !1)), t.innerHTML = e);
                                t = 0
                            } catch (e) { }
                        }
                        t && this.empty().append(e)
                    }, null, e, arguments.length)
                },
                replaceWith: function () {
                    var r = Ce.map(this, function (e) {
                        return [e.nextSibling, e.parentNode]
                    }),
                        i = 0;
                    return this.domManip(arguments, function (e) {
                        var t = r[i++],
                            n = r[i++];
                        n && (t && t.parentNode !== n && (t = this.nextSibling), Ce(this).remove(), n.insertBefore(e, t))
                    }, !0), i ? this : this.remove()
                },
                detach: function (e) {
                    return this.remove(e, !0)
                },
                domManip: function (n, r, i) {
                    n = g.apply([], n);
                    var e, t, a, o, s, l, u = 0,
                        c = this.length,
                        p = this,
                        d = c - 1,
                        f = n[0],
                        h = Ce.isFunction(f);
                    if (h || !(c <= 1 || "string" != typeof f || Ce.support.checkClone) && pe.test(f)) return this.each(function (e) {
                        var t = p.eq(e);
                        h && (n[0] = f.call(this, e, t.html())), t.domManip(n, r, i)
                    });
                    if (c && (e = (l = Ce.buildFragment(n, this[0].ownerDocument, !1, !i && this)).firstChild, 1 === l.childNodes.length && (l = e), e)) {
                        for (a = (o = Ce.map(Dt(l, "script"), At)).length; u < c; u++) t = l, u !== d && (t = Ce.clone(t, !0, !0), a && Ce.merge(o, Dt(t, "script"))), r.call(this[u], t, u);
                        if (a)
                            for (s = o[o.length - 1].ownerDocument, Ce.map(o, Tt), u = 0; u < a; u++) t = o[u], de.test(t.type || "") && !Ce._data(t, "globalEval") && Ce.contains(s, t) && (t.src ? Ce._evalUrl(t.src) : Ce.globalEval((t.text || t.textContent || t.innerHTML || "").replace(he, "")));
                        l = e = null
                    }
                    return this
                }
            }), Ce.each({
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith"
            }, function (e, o) {
                Ce.fn[e] = function (e) {
                    for (var t, n = 0, r = [], i = Ce(e), a = i.length - 1; n <= a; n++) t = n === a ? this : this.clone(!0), Ce(i[n])[o](t), c.apply(r, t.get());
                    return this.pushStack(r)
                }
            }), Ce.extend({
                clone: function (e, t, n) {
                    var r, i, a, o, s, l = Ce.contains(e.ownerDocument, e);
                    if (Ce.support.html5Clone || Ce.isXMLDoc(e) || !re.test("<" + e.nodeName + ">") ? a = e.cloneNode(!0) : (ge.innerHTML = e.outerHTML, ge.removeChild(a = ge.firstChild)), !(Ce.support.noCloneEvent && Ce.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || Ce.isXMLDoc(e)))
                        for (r = Dt(a), s = Dt(e), o = 0; null != (i = s[o]); ++o) r[o] && Ot(i, r[o]);
                    if (t)
                        if (n)
                            for (s = s || Dt(e), r = r || Dt(a), o = 0; null != (i = s[o]); o++) Pt(i, r[o]);
                        else Pt(e, a);
                    return 0 < (r = Dt(a, "script")).length && St(r, !l && Dt(e, "script")), r = s = i = null, a
                },
                buildFragment: function (e, t, n, r) {
                    for (var i, a, o, s, l, u, c, p = e.length, d = wt(t), f = [], h = 0; h < p; h++)
                        if ((a = e[h]) || 0 === a)
                            if ("object" === Ce.type(a)) Ce.merge(f, a.nodeType ? [a] : a);
                            else if (le.test(a)) {
                                for (s = s || d.appendChild(t.createElement("div")), l = (oe.exec(a) || ["", ""])[1].toLowerCase(), c = me[l] || me._default, s.innerHTML = c[1] + a.replace(ae, "<$1></$2>") + c[2], i = c[0]; i--;) s = s.lastChild;
                                if (!Ce.support.leadingWhitespace && ie.test(a) && f.push(t.createTextNode(ie.exec(a)[0])), !Ce.support.tbody)
                                    for (i = (a = "table" !== l || se.test(a) ? "<table>" !== c[1] || se.test(a) ? 0 : s : s.firstChild) && a.childNodes.length; i--;) Ce.nodeName(u = a.childNodes[i], "tbody") && !u.childNodes.length && a.removeChild(u);
                                for (Ce.merge(f, s.childNodes), s.textContent = ""; s.firstChild;) s.removeChild(s.firstChild);
                                s = d.lastChild
                            } else f.push(t.createTextNode(a));
                    for (s && d.removeChild(s), Ce.support.appendChecked || Ce.grep(Dt(f, "input"), Nt), h = 0; a = f[h++];)
                        if ((!r || -1 === Ce.inArray(a, r)) && (o = Ce.contains(a.ownerDocument, a), s = Dt(d.appendChild(a), "script"), o && St(s), n))
                            for (i = 0; a = s[i++];) de.test(a.type || "") && n.push(a);
                    return s = null, d
                },
                cleanData: function (e, t) {
                    for (var n, r, i, a, o = 0, s = Ce.expando, l = Ce.cache, u = Ce.support.deleteExpando, c = Ce.event.special; null != (n = e[o]); o++)
                        if ((t || Ce.acceptData(n)) && (a = (i = n[s]) && l[i])) {
                            if (a.events)
                                for (r in a.events) c[r] ? Ce.event.remove(n, r) : Ce.removeEvent(n, r, a.handle);
                            l[i] && (delete l[i], u ? delete n[s] : typeof n.removeAttribute !== v ? n.removeAttribute(s) : n[s] = null, p.push(i))
                        }
                },
                _evalUrl: function (e) {
                    return Ce.ajax({
                        url: e,
                        type: "GET",
                        dataType: "script",
                        async: !1,
                        global: !1,
                        throws: !0
                    })
                }
            }), Ce.fn.extend({
                wrapAll: function (t) {
                    if (Ce.isFunction(t)) return this.each(function (e) {
                        Ce(this).wrapAll(t.call(this, e))
                    });
                    if (this[0]) {
                        var e = Ce(t, this[0].ownerDocument).eq(0).clone(!0);
                        this[0].parentNode && e.insertBefore(this[0]), e.map(function () {
                            for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
                            return e
                        }).append(this)
                    }
                    return this
                },
                wrapInner: function (n) {
                    return Ce.isFunction(n) ? this.each(function (e) {
                        Ce(this).wrapInner(n.call(this, e))
                    }) : this.each(function () {
                        var e = Ce(this),
                            t = e.contents();
                        t.length ? t.wrapAll(n) : e.append(n)
                    })
                },
                wrap: function (t) {
                    var n = Ce.isFunction(t);
                    return this.each(function (e) {
                        Ce(this).wrapAll(n ? t.call(this, e) : t)
                    })
                },
                unwrap: function () {
                    return this.parent().each(function () {
                        Ce.nodeName(this, "body") || Ce(this).replaceWith(this.childNodes)
                    }).end()
                }
            });
            var ve, ye, be, ke = /alpha\([^)]*\)/i,
                we = /opacity\s*=\s*([^)]*)/,
                je = /^(top|right|bottom|left)$/,
                Ae = /^(none|table(?!-c[ea]).+)/,
                Te = /^margin/,
                Se = RegExp("^(" + C + ")(.*)$", "i"),
                Pe = RegExp("^(" + C + ")(?!px)[a-z%]+$", "i"),
                Oe = RegExp("^([+-])=(" + C + ")", "i"),
                De = {
                    BODY: "block"
                },
                Ne = {
                    position: "absolute",
                    visibility: "hidden",
                    display: "block"
                },
                Le = {
                    letterSpacing: 0,
                    fontWeight: 400
                },
                Ie = ["Top", "Right", "Bottom", "Left"],
                Me = ["Webkit", "O", "Moz", "ms"];
            Ce.fn.extend({
                css: function (e, t) {
                    return Ce.access(this, function (e, t, n) {
                        var r, i, a = {},
                            o = 0;
                        if (Ce.isArray(t)) {
                            for (i = ye(e), r = t.length; o < r; o++) a[t[o]] = Ce.css(e, t[o], !1, i);
                            return a
                        }
                        return n !== w ? Ce.style(e, t, n) : Ce.css(e, t)
                    }, e, t, 1 < arguments.length)
                },
                show: function () {
                    return Mt(this, !0)
                },
                hide: function () {
                    return Mt(this)
                },
                toggle: function (e) {
                    return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                        It(this) ? Ce(this).show() : Ce(this).hide()
                    })
                }
            }), Ce.extend({
                cssHooks: {
                    opacity: {
                        get: function (e, t) {
                            if (t) {
                                var n = be(e, "opacity");
                                return "" === n ? "1" : n
                            }
                        }
                    }
                },
                cssNumber: {
                    columnCount: !0,
                    fillOpacity: !0,
                    fontWeight: !0,
                    lineHeight: !0,
                    opacity: !0,
                    order: !0,
                    orphans: !0,
                    widows: !0,
                    zIndex: !0,
                    zoom: !0
                },
                cssProps: {
                    float: Ce.support.cssFloat ? "cssFloat" : "styleFloat"
                },
                style: function (e, t, n, r) {
                    if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                        var i, a, o, s = Ce.camelCase(t),
                            l = e.style;
                        if (t = Ce.cssProps[s] || (Ce.cssProps[s] = Lt(l, s)), o = Ce.cssHooks[t] || Ce.cssHooks[s], n === w) return o && "get" in o && (i = o.get(e, !1, r)) !== w ? i : l[t];
                        if ("string" === (a = typeof n) && (i = Oe.exec(n)) && (n = (i[1] + 1) * i[2] + parseFloat(Ce.css(e, t)), a = "number"), !(null == n || "number" === a && isNaN(n) || ("number" !== a || Ce.cssNumber[s] || (n += "px"), Ce.support.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), o && "set" in o && (n = o.set(e, n, r)) === w))) try {
                            l[t] = n
                        } catch (e) { }
                    }
                },
                css: function (e, t, n, r) {
                    var i, a, o, s = Ce.camelCase(t);
                    return t = Ce.cssProps[s] || (Ce.cssProps[s] = Lt(e.style, s)), (o = Ce.cssHooks[t] || Ce.cssHooks[s]) && "get" in o && (a = o.get(e, !0, n)), a === w && (a = be(e, t, r)), "normal" === a && t in Le && (a = Le[t]), "" === n || n ? (i = parseFloat(a), !0 === n || Ce.isNumeric(i) ? i || 0 : a) : a
                }
            }), h.getComputedStyle ? (ye = function (e) {
                return h.getComputedStyle(e, null)
            }, be = function (e, t, n) {
                var r, i, a, o = n || ye(e),
                    s = o ? o.getPropertyValue(t) || o[t] : w,
                    l = e.style;
                return o && ("" !== s || Ce.contains(e.ownerDocument, e) || (s = Ce.style(e, t)), Pe.test(s) && Te.test(t) && (r = l.width, i = l.minWidth, a = l.maxWidth, l.minWidth = l.maxWidth = l.width = s, s = o.width, l.width = r, l.minWidth = i, l.maxWidth = a)), s
            }) : m.documentElement.currentStyle && (ye = function (e) {
                return e.currentStyle
            }, be = function (e, t, n) {
                var r, i, a, o = n || ye(e),
                    s = o ? o[t] : w,
                    l = e.style;
                return null == s && l && l[t] && (s = l[t]), Pe.test(s) && !je.test(t) && (r = l.left, (a = (i = e.runtimeStyle) && i.left) && (i.left = e.currentStyle.left), l.left = "fontSize" === t ? "1em" : s, s = l.pixelLeft + "px", l.left = r, a && (i.left = a)), "" === s ? "auto" : s
            }), Ce.each(["height", "width"], function (e, i) {
                Ce.cssHooks[i] = {
                    get: function (e, t, n) {
                        return t ? 0 === e.offsetWidth && Ae.test(Ce.css(e, "display")) ? Ce.swap(e, Ne, function () {
                            return Bt(e, i, n)
                        }) : Bt(e, i, n) : w
                    },
                    set: function (e, t, n) {
                        var r = n && ye(e);
                        return Et(0, t, n ? _t(e, i, n, Ce.support.boxSizing && "border-box" === Ce.css(e, "boxSizing", !1, r), r) : 0)
                    }
                }
            }), Ce.support.opacity || (Ce.cssHooks.opacity = {
                get: function (e, t) {
                    return we.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
                },
                set: function (e, t) {
                    var n = e.style,
                        r = e.currentStyle,
                        i = Ce.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                        a = r && r.filter || n.filter || "";
                    ((n.zoom = 1) <= t || "" === t) && "" === Ce.trim(a.replace(ke, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || r && !r.filter) || (n.filter = ke.test(a) ? a.replace(ke, i) : a + " " + i)
                }
            }), Ce(function () {
                Ce.support.reliableMarginRight || (Ce.cssHooks.marginRight = {
                    get: function (e, t) {
                        return t ? Ce.swap(e, {
                            display: "inline-block"
                        }, be, [e, "marginRight"]) : w
                    }
                }), !Ce.support.pixelPosition && Ce.fn.position && Ce.each(["top", "left"], function (e, n) {
                    Ce.cssHooks[n] = {
                        get: function (e, t) {
                            return t ? (t = be(e, n), Pe.test(t) ? Ce(e).position()[n] + "px" : t) : w
                        }
                    }
                })
            }), Ce.expr && Ce.expr.filters && (Ce.expr.filters.hidden = function (e) {
                return e.offsetWidth <= 0 && e.offsetHeight <= 0 || !Ce.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || Ce.css(e, "display"))
            }, Ce.expr.filters.visible = function (e) {
                return !Ce.expr.filters.hidden(e)
            }), Ce.each({
                margin: "",
                padding: "",
                border: "Width"
            }, function (i, a) {
                Ce.cssHooks[i + a] = {
                    expand: function (e) {
                        for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[i + Ie[t] + a] = r[t] || r[t - 2] || r[0];
                        return n
                    }
                }, Te.test(i) || (Ce.cssHooks[i + a].set = Et)
            });
            var Ee = /%20/g,
                _e = /\[\]$/,
                Be = /\r?\n/g,
                Re = /^(?:submit|button|image|reset|file)$/i,
                $e = /^(?:input|select|textarea|keygen)/i;
            Ce.fn.extend({
                serialize: function () {
                    return Ce.param(this.serializeArray())
                },
                serializeArray: function () {
                    return this.map(function () {
                        var e = Ce.prop(this, "elements");
                        return e ? Ce.makeArray(e) : this
                    }).filter(function () {
                        var e = this.type;
                        return this.name && !Ce(this).is(":disabled") && $e.test(this.nodeName) && !Re.test(e) && (this.checked || !ce.test(e))
                    }).map(function (e, t) {
                        var n = Ce(this).val();
                        return null == n ? null : Ce.isArray(n) ? Ce.map(n, function (e) {
                            return {
                                name: t.name,
                                value: e.replace(Be, "\r\n")
                            }
                        }) : {
                            name: t.name,
                            value: n.replace(Be, "\r\n")
                        }
                    }).get()
                }
            }), Ce.param = function (e, t) {
                function n(e, t) {
                    t = Ce.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
                }
                var r, i = [];
                if (t === w && (t = Ce.ajaxSettings && Ce.ajaxSettings.traditional), Ce.isArray(e) || e.jquery && !Ce.isPlainObject(e)) Ce.each(e, function () {
                    n(this.name, this.value)
                });
                else
                    for (r in e) Ht(r, e[r], t, n);
                return i.join("&").replace(Ee, "+")
            }, Ce.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, n) {
                Ce.fn[n] = function (e, t) {
                    return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
                }
            }), Ce.fn.extend({
                hover: function (e, t) {
                    return this.mouseenter(e).mouseleave(t || e)
                },
                bind: function (e, t, n) {
                    return this.on(e, null, t, n)
                },
                unbind: function (e, t) {
                    return this.off(e, null, t)
                },
                delegate: function (e, t, n, r) {
                    return this.on(t, e, n, r)
                },
                undelegate: function (e, t, n) {
                    return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
                }
            });
            var He, Fe, qe = Ce.now(),
                Ge = /\?/,
                Ue = /#.*$/,
                Qe = /([?&])_=[^&]*/,
                ze = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
                Je = /^(?:GET|HEAD)$/,
                We = /^\/\//,
                Ve = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
                Xe = Ce.fn.load,
                Ye = {},
                Ke = {},
                Ze = "*/".concat("*");
            try {
                Fe = e.href
            } catch (e) {
                (Fe = m.createElement("a")).href = "", Fe = Fe.href
            }
            He = Ve.exec(Fe.toLowerCase()) || [], Ce.fn.load = function (e, t, n) {
                if ("string" != typeof e && Xe) return Xe.apply(this, arguments);
                var r, i, a, o = this,
                    s = e.indexOf(" ");
                return 0 <= s && (r = e.slice(s, e.length), e = e.slice(0, s)), Ce.isFunction(t) ? (n = t, t = w) : t && "object" == typeof t && (a = "POST"), 0 < o.length && Ce.ajax({
                    url: e,
                    type: a,
                    dataType: "html",
                    data: t
                }).done(function (e) {
                    i = arguments, o.html(r ? Ce("<div>").append(Ce.parseHTML(e)).find(r) : e)
                }).complete(n && function (e, t) {
                    o.each(n, i || [e.responseText, t, e])
                }), this
            }, Ce.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
                Ce.fn[t] = function (e) {
                    return this.on(t, e)
                }
            }), Ce.extend({
                active: 0,
                lastModified: {},
                etag: {},
                ajaxSettings: {
                    url: Fe,
                    type: "GET",
                    isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(He[1]),
                    global: !0,
                    processData: !0,
                    async: !0,
                    contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                    accepts: {
                        "*": Ze,
                        text: "text/plain",
                        html: "text/html",
                        xml: "application/xml, text/xml",
                        json: "application/json, text/javascript"
                    },
                    contents: {
                        xml: /xml/,
                        html: /html/,
                        json: /json/
                    },
                    responseFields: {
                        xml: "responseXML",
                        text: "responseText",
                        json: "responseJSON"
                    },
                    converters: {
                        "* text": String,
                        "text html": !0,
                        "text json": Ce.parseJSON,
                        "text xml": Ce.parseXML
                    },
                    flatOptions: {
                        url: !0,
                        context: !0
                    }
                },
                ajaxSetup: function (e, t) {
                    return t ? Gt(Gt(e, Ce.ajaxSettings), t) : Gt(Ce.ajaxSettings, e)
                },
                ajaxPrefilter: Ft(Ye),
                ajaxTransport: Ft(Ke),
                ajax: function (e, t) {
                    "object" == typeof e && (t = e, e = w), t = t || {};
                    var n, r, c, p, d, f, h, i, m = Ce.ajaxSetup({}, t),
                        g = m.context || m,
                        v = m.context && (g.nodeType || g.jquery) ? Ce(g) : Ce.event,
                        y = Ce.Deferred(),
                        b = Ce.Callbacks("once memory"),
                        x = m.statusCode || {},
                        a = {},
                        o = {},
                        C = 0,
                        s = "canceled",
                        k = {
                            readyState: 0,
                            getResponseHeader: function (e) {
                                var t;
                                if (2 === C) {
                                    if (!i)
                                        for (i = {}; t = ze.exec(p);) i[t[1].toLowerCase()] = t[2];
                                    t = i[e.toLowerCase()]
                                }
                                return null == t ? null : t
                            },
                            getAllResponseHeaders: function () {
                                return 2 === C ? p : null
                            },
                            setRequestHeader: function (e, t) {
                                var n = e.toLowerCase();
                                return C || (e = o[n] = o[n] || e, a[e] = t), this
                            },
                            overrideMimeType: function (e) {
                                return C || (m.mimeType = e), this
                            },
                            statusCode: function (e) {
                                var t;
                                if (e)
                                    if (C < 2)
                                        for (t in e) x[t] = [x[t], e[t]];
                                    else k.always(e[k.status]);
                                return this
                            },
                            abort: function (e) {
                                var t = e || s;
                                return h && h.abort(t), l(0, t), this
                            }
                        };
                    if (y.promise(k).complete = b.add, k.success = k.done, k.error = k.fail, m.url = ((e || m.url || Fe) + "").replace(Ue, "").replace(We, He[1] + "//"), m.type = t.method || t.type || m.method || m.type, m.dataTypes = Ce.trim(m.dataType || "*").toLowerCase().match(j) || [""], null == m.crossDomain && (n = Ve.exec(m.url.toLowerCase()), m.crossDomain = !(!n || n[1] === He[1] && n[2] === He[2] && (n[3] || ("http:" === n[1] ? "80" : "443")) === (He[3] || ("http:" === He[1] ? "80" : "443")))), m.data && m.processData && "string" != typeof m.data && (m.data = Ce.param(m.data, m.traditional)), qt(Ye, m, t, k), 2 === C) return k;
                    for (r in (f = m.global) && 0 == Ce.active++ && Ce.event.trigger("ajaxStart"), m.type = m.type.toUpperCase(), m.hasContent = !Je.test(m.type), c = m.url, m.hasContent || (m.data && (c = m.url += (Ge.test(c) ? "&" : "?") + m.data, delete m.data), !1 === m.cache && (m.url = Qe.test(c) ? c.replace(Qe, "$1_=" + qe++) : c + (Ge.test(c) ? "&" : "?") + "_=" + qe++)), m.ifModified && (Ce.lastModified[c] && k.setRequestHeader("If-Modified-Since", Ce.lastModified[c]), Ce.etag[c] && k.setRequestHeader("If-None-Match", Ce.etag[c])), (m.data && m.hasContent && !1 !== m.contentType || t.contentType) && k.setRequestHeader("Content-Type", m.contentType), k.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + Ze + "; q=0.01" : "") : m.accepts["*"]), m.headers) k.setRequestHeader(r, m.headers[r]);
                    if (m.beforeSend && (!1 === m.beforeSend.call(g, k, m) || 2 === C)) return k.abort();
                    for (r in s = "abort", {
                        success: 1,
                        error: 1,
                        complete: 1
                    }) k[r](m[r]);
                    if (h = qt(Ke, m, t, k)) {
                        k.readyState = 1, f && v.trigger("ajaxSend", [k, m]), m.async && 0 < m.timeout && (d = setTimeout(function () {
                            k.abort("timeout")
                        }, m.timeout));
                        try {
                            C = 1, h.send(a, l)
                        } catch (e) {
                            if (!(C < 2)) throw e;
                            l(-1, e)
                        }
                    } else l(-1, "No Transport");

                    function l(e, t, n, r) {
                        var i, a, o, s, l, u = t;
                        2 !== C && (C = 2, d && clearTimeout(d), h = w, p = r || "", k.readyState = 0 < e ? 4 : 0, i = 200 <= e && e < 300 || 304 === e, n && (s = function (e, t, n) {
                            var r, i, a, o, s = e.contents,
                                l = e.dataTypes;
                            for (;
                                "*" === l[0];) xe(l), i === w && (i = e.mimeType || t.getResponseHeader("Content-Type"));
                            if (i)
                                for (o in s)
                                    if (s[o] && s[o].test(i)) {
                                        l.unshift(o);
                                        break
                                    } if (l[0] in n) a = l[0];
                            else {
                                for (o in n) {
                                    if (!l[0] || e.converters[o + " " + l[0]]) {
                                        a = o;
                                        break
                                    }
                                    r = r || o
                                }
                                a = a || r
                            }
                            return a ? (a !== l[0] && l.unshift(a), n[a]) : w
                        }(m, k, n)), s = function (e, t, n, r) {
                            var i, a, o, s, l, u = {},
                                c = e.dataTypes.slice();
                            if (c[1])
                                for (o in e.converters) u[o.toLowerCase()] = e.converters[o];
                            a = xe(c);
                            for (; a;)
                                if (e.responseFields[a] && (n[e.responseFields[a]] = t), !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = a, a = xe(c))
                                    if ("*" === a) a = l;
                                    else if ("*" !== l && l !== a) {
                                        if (!(o = u[l + " " + a] || u["* " + a]))
                                            for (i in u)
                                                if ((s = i.split(" "))[1] === a && (o = u[l + " " + s[0]] || u["* " + s[0]])) {
                                                    !0 === o ? o = u[i] : !0 !== u[i] && (a = s[0], c.unshift(s[1]));
                                                    break
                                                } if (!0 !== o)
                                            if (o && e.throws) t = o(t);
                                            else try {
                                                t = o(t)
                                            } catch (e) {
                                                return {
                                                    state: "parsererror",
                                                    error: o ? e : "No conversion from " + l + " to " + a
                                                }
                                            }
                                    }
                            return {
                                state: "success",
                                data: t
                            }
                        }(m, s, k, i), i ? (m.ifModified && ((l = k.getResponseHeader("Last-Modified")) && (Ce.lastModified[c] = l), (l = k.getResponseHeader("etag")) && (Ce.etag[c] = l)), 204 === e || "HEAD" === m.type ? u = "nocontent" : 304 === e ? u = "notmodified" : (u = s.state, a = s.data, i = !(o = s.error))) : (o = u, !e && u || (u = "error", e < 0 && (e = 0))), k.status = e, k.statusText = (t || u) + "", i ? y.resolveWith(g, [a, u, k]) : y.rejectWith(g, [k, u, o]), k.statusCode(x), x = w, f && v.trigger(i ? "ajaxSuccess" : "ajaxError", [k, m, i ? a : o]), b.fireWith(g, [k, u]), f && (v.trigger("ajaxComplete", [k, m]), --Ce.active || Ce.event.trigger("ajaxStop")))
                    }
                    return k
                },
                getJSON: function (e, t, n) {
                    return Ce.get(e, t, n, "json")
                },
                getScript: function (e, t) {
                    return Ce.get(e, w, t, "script")
                }
            }), Ce.each(["get", "post"], function (e, i) {
                Ce[i] = function (e, t, n, r) {
                    return Ce.isFunction(t) && (r = r || n, n = t, t = w), Ce.ajax({
                        url: e,
                        type: i,
                        dataType: r,
                        data: t,
                        success: n
                    })
                }
            }), Ce.ajaxSetup({
                accepts: {
                    script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
                },
                contents: {
                    script: /(?:java|ecma)script/
                },
                converters: {
                    "text script": function (e) {
                        return Ce.globalEval(e), e
                    }
                }
            }), Ce.ajaxPrefilter("script", function (e) {
                e.cache === w && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
            }), Ce.ajaxTransport("script", function (t) {
                if (t.crossDomain) {
                    var r, i = m.head || Ce("head")[0] || m.documentElement;
                    return {
                        send: function (e, n) {
                            (r = m.createElement("script")).async = !0, t.scriptCharset && (r.charset = t.scriptCharset), r.src = t.url, r.onload = r.onreadystatechange = function (e, t) {
                                !t && r.readyState && !/loaded|complete/.test(r.readyState) || (r.onload = r.onreadystatechange = null, r.parentNode && r.parentNode.removeChild(r), r = null, t || n(200, "success"))
                            }, i.insertBefore(r, i.firstChild)
                        },
                        abort: function () {
                            r && r.onload(w, !0)
                        }
                    }
                }
            });
            var et = [],
                tt = /(=)\?(?=&|$)|\?\?/;
            Ce.ajaxSetup({
                jsonp: "callback",
                jsonpCallback: function () {
                    var e = et.pop() || Ce.expando + "_" + qe++;
                    return this[e] = !0, e
                }
            }), Ce.ajaxPrefilter("json jsonp", function (e, t, n) {
                var r, i, a, o = !1 !== e.jsonp && (tt.test(e.url) ? "url" : "string" == typeof e.data && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && tt.test(e.data) && "data");
                return o || "jsonp" === e.dataTypes[0] ? (r = e.jsonpCallback = Ce.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, o ? e[o] = e[o].replace(tt, "$1" + r) : !1 !== e.jsonp && (e.url += (Ge.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function () {
                    return a || Ce.error(r + " was not called"), a[0]
                }, e.dataTypes[0] = "json", i = h[r], h[r] = function () {
                    a = arguments
                }, n.always(function () {
                    h[r] = i, e[r] && (e.jsonpCallback = t.jsonpCallback, et.push(r)), a && Ce.isFunction(i) && i(a[0]), a = i = w
                }), "script") : w
            });
            var nt, rt, it = 0,
                at = h.ActiveXObject && function () {
                    var e;
                    for (e in nt) nt[e](w, !0)
                };
            Ce.ajaxSettings.xhr = h.ActiveXObject ? function () {
                return !this.isLocal && Ut() || function () {
                    try {
                        return new h.ActiveXObject("Microsoft.XMLHTTP")
                    } catch (e) { }
                }()
            } : Ut, rt = Ce.ajaxSettings.xhr(), Ce.support.cors = !!rt && "withCredentials" in rt, (rt = Ce.support.ajax = !!rt) && Ce.ajaxTransport(function (u) {
                var c;
                if (!u.crossDomain || Ce.support.cors) return {
                    send: function (e, o) {
                        var s, t, l = u.xhr();
                        if (u.username ? l.open(u.type, u.url, u.async, u.username, u.password) : l.open(u.type, u.url, u.async), u.xhrFields)
                            for (t in u.xhrFields) l[t] = u.xhrFields[t];
                        u.mimeType && l.overrideMimeType && l.overrideMimeType(u.mimeType), u.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest");
                        try {
                            for (t in e) l.setRequestHeader(t, e[t])
                        } catch (e) { }
                        l.send(u.hasContent && u.data || null), c = function (e, t) {
                            var n, r, i, a;
                            try {
                                if (c && (t || 4 === l.readyState))
                                    if (c = w, s && (l.onreadystatechange = Ce.noop, at && delete nt[s]), t) 4 !== l.readyState && l.abort();
                                    else {
                                        a = {}, n = l.status, r = l.getAllResponseHeaders(), "string" == typeof l.responseText && (a.text = l.responseText);
                                        try {
                                            i = l.statusText
                                        } catch (e) {
                                            i = ""
                                        }
                                        n || !u.isLocal || u.crossDomain ? 1223 === n && (n = 204) : n = a.text ? 200 : 404
                                    }
                            } catch (e) {
                                t || o(-1, e)
                            }
                            a && o(n, i, a, r)
                        }, u.async ? 4 === l.readyState ? setTimeout(c) : (s = ++it, at && (nt || (nt = {}, Ce(h).unload(at)), nt[s] = c), l.onreadystatechange = c) : c()
                    },
                    abort: function () {
                        c && c(w, !0)
                    }
                }
            });
            var ot, st, lt = /^(?:toggle|show|hide)$/,
                ut = RegExp("^(?:([+-])=|)(" + C + ")([a-z%]*)$", "i"),
                ct = /queueHooks$/,
                pt = [function (t, e, n) {
                    var r, i, a, o, s, l, u = this,
                        c = {},
                        p = t.style,
                        d = t.nodeType && It(t),
                        f = Ce._data(t, "fxshow");
                    for (r in n.queue || (null == (s = Ce._queueHooks(t, "fx")).unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function () {
                        s.unqueued || l()
                    }), s.unqueued++, u.always(function () {
                        u.always(function () {
                            s.unqueued--, Ce.queue(t, "fx").length || s.empty.fire()
                        })
                    })), 1 === t.nodeType && ("height" in e || "width" in e) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], "inline" === Ce.css(t, "display") && "none" === Ce.css(t, "float") && (Ce.support.inlineBlockNeedsLayout && "inline" !== Rt(t.nodeName) ? p.zoom = 1 : p.display = "inline-block")), n.overflow && (p.overflow = "hidden", Ce.support.shrinkWrapBlocks || u.always(function () {
                        p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
                    })), e)
                        if (i = e[r], lt.exec(i)) {
                            if (delete e[r], a = a || "toggle" === i, i === (d ? "hide" : "show")) continue;
                            c[r] = f && f[r] || Ce.style(t, r)
                        } if (!Ce.isEmptyObject(c))
                        for (r in f ? "hidden" in f && (d = f.hidden) : f = Ce._data(t, "fxshow", {}), a && (f.hidden = !d), d ? Ce(t).show() : u.done(function () {
                            Ce(t).hide()
                        }), u.done(function () {
                            var e;
                            for (e in Ce._removeData(t, "fxshow"), c) Ce.style(t, e, c[e])
                        }), c) o = zt(d ? f[r] : 0, r, u), r in f || (f[r] = o.start, d && (o.end = o.start, o.start = "width" === r || "height" === r ? 1 : 0))
                }],
                dt = {
                    "*": [function (e, t) {
                        var n = this.createTween(e, t),
                            r = n.cur(),
                            i = ut.exec(t),
                            a = i && i[3] || (Ce.cssNumber[e] ? "" : "px"),
                            o = (Ce.cssNumber[e] || "px" !== a && +r) && ut.exec(Ce.css(n.elem, e)),
                            s = 1,
                            l = 20;
                        if (o && o[3] !== a)
                            for (a = a || o[3], i = i || [], o = +r || 1; o /= s = s || ".5", Ce.style(n.elem, e, o + a), s !== (s = n.cur() / r) && 1 !== s && --l;);
                        return i && (o = n.start = +o || +r || 0, n.unit = a, n.end = i[1] ? o + (i[1] + 1) * i[2] : +i[2]), n
                    }]
                };
            Ce.Animation = Ce.extend(Jt, {
                tweener: function (e, t) {
                    for (var n, r = 0, i = (e = Ce.isFunction(e) ? (t = e, ["*"]) : e.split(" ")).length; r < i; r++) n = e[r], dt[n] = dt[n] || [], dt[n].unshift(t)
                },
                prefilter: function (e, t) {
                    t ? pt.unshift(e) : pt.push(e)
                }
            }), ((Ce.Tween = Wt).prototype = {
                constructor: Wt,
                init: function (e, t, n, r, i, a) {
                    this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = a || (Ce.cssNumber[n] ? "" : "px")
                },
                cur: function () {
                    var e = Wt.propHooks[this.prop];
                    return e && e.get ? e.get(this) : Wt.propHooks._default.get(this)
                },
                run: function (e) {
                    var t, n = Wt.propHooks[this.prop];
                    return this.pos = t = this.options.duration ? Ce.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Wt.propHooks._default.set(this), this
                }
            }).init.prototype = Wt.prototype, (Wt.propHooks = {
                _default: {
                    get: function (e) {
                        var t;
                        return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = Ce.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0 : e.elem[e.prop]
                    },
                    set: function (e) {
                        Ce.fx.step[e.prop] ? Ce.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[Ce.cssProps[e.prop]] || Ce.cssHooks[e.prop]) ? Ce.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
                    }
                }
            }).scrollTop = Wt.propHooks.scrollLeft = {
                set: function (e) {
                    e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
                }
            }, Ce.each(["toggle", "show", "hide"], function (e, r) {
                var i = Ce.fn[r];
                Ce.fn[r] = function (e, t, n) {
                    return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(Vt(r, !0), e, t, n)
                }
            }), Ce.fn.extend({
                fadeTo: function (e, t, n, r) {
                    return this.filter(It).css("opacity", 0).show().end().animate({
                        opacity: t
                    }, e, n, r)
                },
                animate: function (t, e, n, r) {
                    function i() {
                        var e = Jt(this, Ce.extend({}, t), o);
                        (a || Ce._data(this, "finish")) && e.stop(!0)
                    }
                    var a = Ce.isEmptyObject(t),
                        o = Ce.speed(e, n, r);
                    return i.finish = i, a || !1 === o.queue ? this.each(i) : this.queue(o.queue, i)
                },
                stop: function (i, e, a) {
                    function o(e) {
                        var t = e.stop;
                        delete e.stop, t(a)
                    }
                    return "string" != typeof i && (a = e, e = i, i = w), e && !1 !== i && this.queue(i || "fx", []), this.each(function () {
                        var e = !0,
                            t = null != i && i + "queueHooks",
                            n = Ce.timers,
                            r = Ce._data(this);
                        if (t) r[t] && r[t].stop && o(r[t]);
                        else
                            for (t in r) r[t] && r[t].stop && ct.test(t) && o(r[t]);
                        for (t = n.length; t--;) n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(a), e = !1, n.splice(t, 1));
                        !e && a || Ce.dequeue(this, i)
                    })
                },
                finish: function (o) {
                    return !1 !== o && (o = o || "fx"), this.each(function () {
                        var e, t = Ce._data(this),
                            n = t[o + "queue"],
                            r = t[o + "queueHooks"],
                            i = Ce.timers,
                            a = n ? n.length : 0;
                        for (t.finish = !0, Ce.queue(this, o, []), r && r.stop && r.stop.call(this, !0), e = i.length; e--;) i[e].elem === this && i[e].queue === o && (i[e].anim.stop(!0), i.splice(e, 1));
                        for (e = 0; e < a; e++) n[e] && n[e].finish && n[e].finish.call(this);
                        delete t.finish
                    })
                }
            }), Ce.each({
                slideDown: Vt("show"),
                slideUp: Vt("hide"),
                slideToggle: Vt("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            }, function (e, r) {
                Ce.fn[e] = function (e, t, n) {
                    return this.animate(r, e, t, n)
                }
            }), Ce.speed = function (e, t, n) {
                var r = e && "object" == typeof e ? Ce.extend({}, e) : {
                    complete: n || !n && t || Ce.isFunction(e) && e,
                    duration: e,
                    easing: n && t || t && !Ce.isFunction(t) && t
                };
                return r.duration = Ce.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in Ce.fx.speeds ? Ce.fx.speeds[r.duration] : Ce.fx.speeds._default, null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function () {
                    Ce.isFunction(r.old) && r.old.call(this), r.queue && Ce.dequeue(this, r.queue)
                }, r
            }, Ce.easing = {
                linear: function (e) {
                    return e
                },
                swing: function (e) {
                    return .5 - Math.cos(e * Math.PI) / 2
                }
            }, Ce.timers = [], Ce.fx = Wt.prototype.init, Ce.fx.tick = function () {
                var e, t = Ce.timers,
                    n = 0;
                for (ot = Ce.now(); t.length > n; n++)(e = t[n])() || t[n] !== e || t.splice(n--, 1);
                t.length || Ce.fx.stop(), ot = w
            }, Ce.fx.timer = function (e) {
                e() && Ce.timers.push(e) && Ce.fx.start()
            }, Ce.fx.interval = 13, Ce.fx.start = function () {
                st = st || setInterval(Ce.fx.tick, Ce.fx.interval)
            }, Ce.fx.stop = function () {
                clearInterval(st), st = null
            }, Ce.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            }, Ce.fx.step = {}, Ce.expr && Ce.expr.filters && (Ce.expr.filters.animated = function (t) {
                return Ce.grep(Ce.timers, function (e) {
                    return t === e.elem
                }).length
            }), Ce.fn.offset = function (t) {
                if (arguments.length) return t === w ? this : this.each(function (e) {
                    Ce.offset.setOffset(this, t, e)
                });
                var e, n, r = {
                    top: 0,
                    left: 0
                },
                    i = this[0],
                    a = i && i.ownerDocument;
                return a ? (e = a.documentElement, Ce.contains(e, i) ? (typeof i.getBoundingClientRect !== v && (r = i.getBoundingClientRect()), n = Xt(a), {
                    top: r.top + (n.pageYOffset || e.scrollTop) - (e.clientTop || 0),
                    left: r.left + (n.pageXOffset || e.scrollLeft) - (e.clientLeft || 0)
                }) : r) : void 0
            }, Ce.offset = {
                setOffset: function (e, t, n) {
                    var r = Ce.css(e, "position");
                    "static" === r && (e.style.position = "relative");
                    var i, a, o = Ce(e),
                        s = o.offset(),
                        l = Ce.css(e, "top"),
                        u = Ce.css(e, "left"),
                        c = {},
                        p = {};
                    a = ("absolute" === r || "fixed" === r) && -1 < Ce.inArray("auto", [l, u]) ? (i = (p = o.position()).top, p.left) : (i = parseFloat(l) || 0, parseFloat(u) || 0), Ce.isFunction(t) && (t = t.call(e, n, s)), null != t.top && (c.top = t.top - s.top + i), null != t.left && (c.left = t.left - s.left + a), "using" in t ? t.using.call(e, c) : o.css(c)
                }
            }, Ce.fn.extend({
                position: function () {
                    if (this[0]) {
                        var e, t, n = {
                            top: 0,
                            left: 0
                        },
                            r = this[0];
                        return "fixed" === Ce.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), Ce.nodeName(e[0], "html") || (n = e.offset()), n.top += Ce.css(e[0], "borderTopWidth", !0), n.left += Ce.css(e[0], "borderLeftWidth", !0)), {
                            top: t.top - n.top - Ce.css(r, "marginTop", !0),
                            left: t.left - n.left - Ce.css(r, "marginLeft", !0)
                        }
                    }
                },
                offsetParent: function () {
                    return this.map(function () {
                        for (var e = this.offsetParent || a; e && !Ce.nodeName(e, "html") && "static" === Ce.css(e, "position");) e = e.offsetParent;
                        return e || a
                    })
                }
            }), Ce.each({
                scrollLeft: "pageXOffset",
                scrollTop: "pageYOffset"
            }, function (t, i) {
                var a = /Y/.test(i);
                Ce.fn[t] = function (e) {
                    return Ce.access(this, function (e, t, n) {
                        var r = Xt(e);
                        return n === w ? r ? i in r ? r[i] : r.document.documentElement[t] : e[t] : (r ? r.scrollTo(a ? Ce(r).scrollLeft() : n, a ? n : Ce(r).scrollTop()) : e[t] = n, w)
                    }, t, e, arguments.length, null)
                }
            }), Ce.each({
                Height: "height",
                Width: "width"
            }, function (a, o) {
                Ce.each({
                    padding: "inner" + a,
                    content: o,
                    "": "outer" + a
                }, function (r, e) {
                    Ce.fn[e] = function (e, t) {
                        var n = arguments.length && (r || "boolean" != typeof e),
                            i = r || (!0 === e || !0 === t ? "margin" : "border");
                        return Ce.access(this, function (e, t, n) {
                            var r;
                            return Ce.isWindow(e) ? e.document.documentElement["client" + a] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a])) : n === w ? Ce.css(e, t, i) : Ce.style(e, t, n, i)
                        }, o, n ? e : w, n, null)
                    }
                })
            }), Ce.fn.size = function () {
                return this.length
            }, Ce.fn.andSelf = Ce.fn.addBack, "object" == typeof module && module && "object" == typeof module.exports ? module.exports = Ce : (h.AllianceReseaux.jQuery = Ce, "function" == typeof define && define.amd && define("jquery", [], function () {
                return Ce
            }))
        }

        function ft(e) {
            var t = e.length,
                n = Ce.type(e);
            return !Ce.isWindow(e) && (!(1 !== e.nodeType || !t) || ("array" === n || "function" !== n && (0 === t || "number" == typeof t && 0 < t && t - 1 in e)))
        }

        function ht(e, t, n, r) {
            if (Ce.acceptData(e)) {
                var i, a, o = Ce.expando,
                    s = e.nodeType,
                    l = s ? Ce.cache : e,
                    u = s ? e[o] : e[o] && o;
                if (u && l[u] && (r || l[u].data) || n !== w || "string" != typeof t) return l[u = u || (s ? e[o] = p.pop() || Ce.guid++ : o)] || (l[u] = s ? {} : {
                    toJSON: Ce.noop
                }), "object" != typeof t && "function" != typeof t || (r ? l[u] = Ce.extend(l[u], t) : l[u].data = Ce.extend(l[u].data, t)), a = l[u], r || (a.data || (a.data = {}), a = a.data), n !== w && (a[Ce.camelCase(t)] = n), "string" == typeof t ? null == (i = a[t]) && (i = a[Ce.camelCase(t)]) : i = a, i
            }
        }

        function mt(e, t, n) {
            if (Ce.acceptData(e)) {
                var r, i, a = e.nodeType,
                    o = a ? Ce.cache : e,
                    s = a ? e[Ce.expando] : Ce.expando;
                if (o[s]) {
                    if (t && (r = n ? o[s] : o[s].data)) {
                        i = (t = Ce.isArray(t) ? t.concat(Ce.map(t, Ce.camelCase)) : t in r ? [t] : (t = Ce.camelCase(t)) in r ? [t] : t.split(" ")).length;
                        for (; i--;) delete r[t[i]];
                        if (n ? !vt(r) : !Ce.isEmptyObject(r)) return
                    } (n || (delete o[s].data, vt(o[s]))) && (a ? Ce.cleanData([e], !0) : Ce.support.deleteExpando || o != o.window ? delete o[s] : o[s] = null)
                }
            }
        }

        function gt(e, t, n) {
            if (n === w && 1 === e.nodeType) {
                var r = "data-" + t.replace(_, "-$1").toLowerCase();
                if ("string" == typeof (n = e.getAttribute(r))) {
                    try {
                        n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : E.test(n) ? Ce.parseJSON(n) : n)
                    } catch (e) { }
                    Ce.data(e, t, n)
                } else n = w
            }
            return n
        }

        function vt(e) {
            var t;
            for (t in e)
                if (("data" !== t || !Ce.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
            return !0
        }

        function yt() {
            return !0
        }

        function bt() {
            return !1
        }

        function xt() {
            try {
                return m.activeElement
            } catch (e) { }
        }

        function Ct(e, t) {
            for (;
                (e = e[t]) && 1 !== e.nodeType;);
            return e
        }

        function kt(e, n, r) {
            if (Ce.isFunction(n)) return Ce.grep(e, function (e, t) {
                return !!n.call(e, t, e) !== r
            });
            if (n.nodeType) return Ce.grep(e, function (e) {
                return e === n !== r
            });
            if ("string" == typeof n) {
                if (Y.test(n)) return Ce.filter(n, e, r);
                n = Ce.filter(n, e)
            }
            return Ce.grep(e, function (e) {
                return 0 <= Ce.inArray(e, n) !== r
            })
        }

        function wt(e) {
            var t = te.split("|"),
                n = e.createDocumentFragment();
            if (n.createElement)
                for (; t.length;) n.createElement(t.pop());
            return n
        }

        function jt(e, t) {
            return Ce.nodeName(e, "table") && Ce.nodeName(1 === t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
        }

        function At(e) {
            return e.type = (null !== Ce.find.attr(e, "type")) + "/" + e.type, e
        }

        function Tt(e) {
            var t = fe.exec(e.type);
            return t ? e.type = t[1] : e.removeAttribute("type"), e
        }

        function St(e, t) {
            for (var n, r = 0; null != (n = e[r]); r++) Ce._data(n, "globalEval", !t || Ce._data(t[r], "globalEval"))
        }

        function Pt(e, t) {
            if (1 === t.nodeType && Ce.hasData(e)) {
                var n, r, i, a = Ce._data(e),
                    o = Ce._data(t, a),
                    s = a.events;
                if (s)
                    for (n in delete o.handle, o.events = {}, s)
                        for (r = 0, i = s[n].length; r < i; r++) Ce.event.add(t, n, s[n][r]);
                o.data && (o.data = Ce.extend({}, o.data))
            }
        }

        function Ot(e, t) {
            var n, r, i;
            if (1 === t.nodeType) {
                if (n = t.nodeName.toLowerCase(), !Ce.support.noCloneEvent && t[Ce.expando]) {
                    for (r in (i = Ce._data(t)).events) Ce.removeEvent(t, r, i.handle);
                    t.removeAttribute(Ce.expando)
                }
                "script" === n && t.text !== e.text ? (At(t).text = e.text, Tt(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), Ce.support.html5Clone && e.innerHTML && !Ce.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && ce.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
            }
        }

        function Dt(e, t) {
            var n, r, i = 0,
                a = typeof e.getElementsByTagName !== v ? e.getElementsByTagName(t || "*") : typeof e.querySelectorAll !== v ? e.querySelectorAll(t || "*") : w;
            if (!a)
                for (a = [], n = e.childNodes || e; null != (r = n[i]); i++) !t || Ce.nodeName(r, t) ? a.push(r) : Ce.merge(a, Dt(r, t));
            return t === w || t && Ce.nodeName(e, t) ? Ce.merge([e], a) : a
        }

        function Nt(e) {
            ce.test(e.type) && (e.defaultChecked = e.checked)
        }

        function Lt(e, t) {
            if (t in e) return t;
            for (var n = t.charAt(0).toUpperCase() + t.slice(1), r = t, i = Me.length; i--;)
                if ((t = Me[i] + n) in e) return t;
            return r
        }

        function It(e, t) {
            return e = t || e, "none" === Ce.css(e, "display") || !Ce.contains(e.ownerDocument, e)
        }

        function Mt(e, t) {
            for (var n, r, i, a = [], o = 0, s = e.length; o < s; o++)(r = e[o]).style && (a[o] = Ce._data(r, "olddisplay"), n = r.style.display, t ? (a[o] || "none" !== n || (r.style.display = ""), "" === r.style.display && It(r) && (a[o] = Ce._data(r, "olddisplay", Rt(r.nodeName)))) : a[o] || (i = It(r), (n && "none" !== n || !i) && Ce._data(r, "olddisplay", i ? n : Ce.css(r, "display"))));
            for (o = 0; o < s; o++)(r = e[o]).style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? a[o] || "" : "none"));
            return e
        }

        function Et(e, t, n) {
            var r = Se.exec(t);
            return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
        }

        function _t(e, t, n, r, i) {
            for (var a = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, o = 0; a < 4; a += 2) "margin" === n && (o += Ce.css(e, n + Ie[a], !0, i)), r ? ("content" === n && (o -= Ce.css(e, "padding" + Ie[a], !0, i)), "margin" !== n && (o -= Ce.css(e, "border" + Ie[a] + "Width", !0, i))) : (o += Ce.css(e, "padding" + Ie[a], !0, i), "padding" !== n && (o += Ce.css(e, "border" + Ie[a] + "Width", !0, i)));
            return o
        }

        function Bt(e, t, n) {
            var r = !0,
                i = "width" === t ? e.offsetWidth : e.offsetHeight,
                a = ye(e),
                o = Ce.support.boxSizing && "border-box" === Ce.css(e, "boxSizing", !1, a);
            if (i <= 0 || null == i) {
                if (((i = be(e, t, a)) < 0 || null == i) && (i = e.style[t]), Pe.test(i)) return i;
                r = o && (Ce.support.boxSizingReliable || i === e.style[t]), i = parseFloat(i) || 0
            }
            return i + _t(e, t, n || (o ? "border" : "content"), r, a) + "px"
        }

        function Rt(e) {
            var t = m,
                n = De[e];
            return n || ("none" !== (n = $t(e, t)) && n || ((t = ((ve = (ve || Ce("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement))[0].contentWindow || ve[0].contentDocument).document).write("<!doctype html><html><body>"), t.close(), n = $t(e, t), ve.detach()), De[e] = n), n
        }

        function $t(e, t) {
            var n = Ce(t.createElement(e)).appendTo(t.body),
                r = Ce.css(n[0], "display");
            return n.remove(), r
        }

        function Ht(n, e, r, i) {
            var t;
            if (Ce.isArray(e)) Ce.each(e, function (e, t) {
                r || _e.test(n) ? i(n, t) : Ht(n + "[" + ("object" == typeof t ? e : "") + "]", t, r, i)
            });
            else if (r || "object" !== Ce.type(e)) i(n, e);
            else
                for (t in e) Ht(n + "[" + t + "]", e[t], r, i)
        }

        function Ft(a) {
            return function (e, t) {
                "string" != typeof e && (t = e, e = "*");
                var n, r = 0,
                    i = e.toLowerCase().match(j) || [];
                if (Ce.isFunction(t))
                    for (; n = i[r++];) "+" === n[0] ? (n = n.slice(1) || "*", (a[n] = a[n] || []).unshift(t)) : (a[n] = a[n] || []).push(t)
            }
        }

        function qt(t, i, a, o) {
            var s = {},
                l = t === Ke;

            function u(e) {
                var r;
                return s[e] = !0, Ce.each(t[e] || [], function (e, t) {
                    var n = t(i, a, o);
                    return "string" != typeof n || l || s[n] ? l ? !(r = n) : w : (i.dataTypes.unshift(n), u(n), !1)
                }), r
            }
            return u(i.dataTypes[0]) || !s["*"] && u("*")
        }

        function Gt(e, t) {
            var n, r, i = Ce.ajaxSettings.flatOptions || {};
            for (r in t) t[r] !== w && ((i[r] ? e : n = n || {})[r] = t[r]);
            return n && Ce.extend(!0, e, n), e
        }

        function Ut() {
            try {
                return new h.XMLHttpRequest
            } catch (e) { }
        }

        function Qt() {
            return setTimeout(function () {
                ot = w
            }), ot = Ce.now()
        }

        function zt(e, t, n) {
            for (var r, i = (dt[t] || []).concat(dt["*"]), a = 0, o = i.length; a < o; a++)
                if (r = i[a].call(n, t, e)) return r
        }

        function Jt(a, e, t) {
            var n, o, r = 0,
                i = pt.length,
                s = Ce.Deferred().always(function () {
                    delete l.elem
                }),
                l = function () {
                    if (o) return !1;
                    for (var e = ot || Qt(), t = Math.max(0, u.startTime + u.duration - e), n = 1 - (t / u.duration || 0), r = 0, i = u.tweens.length; r < i; r++) u.tweens[r].run(n);
                    return s.notifyWith(a, [u, n, t]), n < 1 && i ? t : (s.resolveWith(a, [u]), !1)
                },
                u = s.promise({
                    elem: a,
                    props: Ce.extend({}, e),
                    opts: Ce.extend(!0, {
                        specialEasing: {}
                    }, t),
                    originalProperties: e,
                    originalOptions: t,
                    startTime: ot || Qt(),
                    duration: t.duration,
                    tweens: [],
                    createTween: function (e, t) {
                        var n = Ce.Tween(a, u.opts, e, t, u.opts.specialEasing[e] || u.opts.easing);
                        return u.tweens.push(n), n
                    },
                    stop: function (e) {
                        var t = 0,
                            n = e ? u.tweens.length : 0;
                        if (o) return this;
                        for (o = !0; t < n; t++) u.tweens[t].run(1);
                        return e ? s.resolveWith(a, [u, e]) : s.rejectWith(a, [u, e]), this
                    }
                }),
                c = u.props;
            for (function (e, t) {
                var n, r, i, a, o;
                for (n in e)
                    if (r = Ce.camelCase(n), i = t[r], a = e[n], Ce.isArray(a) && (i = a[1], a = e[n] = a[0]), n !== r && (e[r] = a, delete e[n]), (o = Ce.cssHooks[r]) && "expand" in o)
                        for (n in a = o.expand(a), delete e[r], a) n in e || (e[n] = a[n], t[n] = i);
                    else t[r] = i
            }(c, u.opts.specialEasing); r < i; r++)
                if (n = pt[r].call(u, a, c, u.opts)) return n;
            return Ce.map(c, zt, u), Ce.isFunction(u.opts.start) && u.opts.start.call(a, u), Ce.fx.timer(Ce.extend(l, {
                elem: a,
                anim: u,
                queue: u.opts.queue
            })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
        }

        function Wt(e, t, n, r, i) {
            return new Wt.prototype.init(e, t, n, r, i)
        }

        function Vt(e, t) {
            var n, r = {
                height: e
            },
                i = 0;
            for (t = t ? 1 : 0; i < 4; i += 2 - t) r["margin" + (n = Ie[i])] = r["padding" + n] = e;
            return t && (r.opacity = r.width = e), r
        }

        function Xt(e) {
            return Ce.isWindow(e) ? e : 9 === e.nodeType && (e.defaultView || e.parentWindow)
        }
    }(window), void 0 === AllianceReseaux.jQuery.migrateMute && (AllianceReseaux.jQuery.migrateMute = !0),
        function (u, n, c) {
            function p(e) {
                var t = n.console;
                r[e] || (r[e] = !0, u.migrateWarnings.push(e), t && t.warn && !u.migrateMute && (t.warn("JQMIGRATE: " + e), u.migrateTrace && t.trace && t.trace()))
            }

            function e(e, t, n, r) {
                if (Object.defineProperty) try {
                    return Object.defineProperty(e, t, {
                        configurable: !0,
                        enumerable: !0,
                        get: function () {
                            return p(r), n
                        },
                        set: function (e) {
                            p(r), n = e
                        }
                    }), c
                } catch (e) { }
                u._definePropertyBroken = !0, e[t] = n
            }
            var r = {};
            u.migrateWarnings = [], !u.migrateMute && n.console && n.console.log && n.console.log("JQMIGRATE: Logging is active"), u.migrateTrace === c && (u.migrateTrace = !0), u.migrateReset = function () {
                r = {}, u.migrateWarnings.length = 0
            }, "BackCompat" === document.compatMode && p("jQuery is not compatible with Quirks Mode");
            var o = u("<input/>", {
                size: 1
            }).attr("size") && u.attrFn,
                s = u.attr,
                i = u.attrHooks.value && u.attrHooks.value.get || function () {
                    return null
                },
                a = u.attrHooks.value && u.attrHooks.value.set || function () {
                    return c
                },
                l = /^(?:input|button)$/i,
                d = /^[238]$/,
                f = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
                h = /^(?:checked|selected)$/i;
            e(u, "attrFn", o || {}, "jQuery.attrFn is deprecated"), u.attr = function (e, t, n, r) {
                var i = t.toLowerCase(),
                    a = e && e.nodeType;
                return r && (s.length < 4 && p("jQuery.fn.attr( props, pass ) is deprecated"), e && !d.test(a) && (o ? t in o : u.isFunction(u.fn[t]))) ? u(e)[t](n) : ("type" === t && n !== c && l.test(e.nodeName) && e.parentNode && p("Can't change the 'type' of an input or button in IE 6/7/8"), !u.attrHooks[i] && f.test(i) && (u.attrHooks[i] = {
                    get: function (e, t) {
                        var n, r = u.prop(e, t);
                        return !0 === r || "boolean" != typeof r && (n = e.getAttributeNode(t)) && !1 !== n.nodeValue ? t.toLowerCase() : c
                    },
                    set: function (e, t, n) {
                        var r;
                        return !1 === t ? u.removeAttr(e, n) : ((r = u.propFix[n] || n) in e && (e[r] = !0), e.setAttribute(n, n.toLowerCase())), n
                    }
                }, h.test(i) && p("jQuery.fn.attr('" + i + "') may use property instead of attribute")), s.call(u, e, t, n))
            }, u.attrHooks.value = {
                get: function (e, t) {
                    var n = (e.nodeName || "").toLowerCase();
                    return "button" === n ? i.apply(this, arguments) : ("input" !== n && "option" !== n && p("jQuery.fn.attr('value') no longer gets properties"), t in e ? e.value : null)
                },
                set: function (e, t) {
                    var n = (e.nodeName || "").toLowerCase();
                    return "button" === n ? a.apply(this, arguments) : ("input" !== n && "option" !== n && p("jQuery.fn.attr('value', val) no longer sets properties"), e.value = t, c)
                }
            };
            var t, m, g = u.fn.init,
                v = u.parseJSON,
                y = /^([^<]*)(<[\w\W]+>)([^>]*)$/;
            u.fn.init = function (e, t, n) {
                var r;
                return e && "string" == typeof e && !u.isPlainObject(t) && (r = y.exec(u.trim(e))) && r[0] && ("<" !== e.charAt(0) && p("$(html) HTML strings must start with '<' character"), r[3] && p("$(html) HTML text after last tag is ignored"), "#" === r[0].charAt(0) && (p("HTML string cannot start with a '#' character"), u.error("JQMIGRATE: Invalid selector string (XSS)")), t && t.context && (t = t.context), u.parseHTML) ? g.call(this, u.parseHTML(r[2], t, !0), t, n) : g.apply(this, arguments)
            }, u.fn.init.prototype = u.fn, u.parseJSON = function (e) {
                return e || null === e ? v.apply(this, arguments) : (p("jQuery.parseJSON requires a valid JSON string"), null)
            }, u.uaMatch = function (e) {
                e = e.toLowerCase();
                var t = /(chrome)[ \/]([\w.]+)/.exec(e) || /(webkit)[ \/]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e) || /(msie) ([\w.]+)/.exec(e) || e.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e) || [];
                return {
                    browser: t[1] || "",
                    version: t[2] || "0"
                }
            }, u.browser || (m = {}, (t = u.uaMatch(navigator.userAgent)).browser && (m[t.browser] = !0, m.version = t.version), m.chrome ? m.webkit = !0 : m.webkit && (m.safari = !0), u.browser = m), e(u, "browser", u.browser, "jQuery.browser is deprecated"), u.sub = function () {
                function n(e, t) {
                    return new n.fn.init(e, t)
                }
                u.extend(!0, n, this), n.superclass = this, ((n.fn = n.prototype = this()).constructor = n).sub = this.sub, n.fn.init = function (e, t) {
                    return t && t instanceof u && !(t instanceof n) && (t = n(t)), u.fn.init.call(this, e, t, r)
                }, n.fn.init.prototype = n.fn;
                var r = n(document);
                return p("jQuery.sub() is deprecated"), n
            }, u.ajaxSetup({
                converters: {
                    "text json": u.parseJSON
                }
            });
            var b = u.fn.data;
            u.fn.data = function (e) {
                var t, n, r = this[0];
                return !r || "events" !== e || 1 !== arguments.length || (t = u.data(r, e), n = u._data(r, e), t !== c && t !== n || n === c) ? b.apply(this, arguments) : (p("Use of jQuery.fn.data('events') is deprecated"), n)
            };
            var x = /\/(java|ecma)script/i,
                C = u.fn.andSelf || u.fn.addBack;
            u.fn.andSelf = function () {
                return p("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"), C.apply(this, arguments)
            }, u.clean || (u.clean = function (e, t, n, r) {
                t = (t = !(t = t || document).nodeType && t[0] || t).ownerDocument || t, p("jQuery.clean() is deprecated");
                var i, a, o, s, l = [];
                if (u.merge(l, u.buildFragment(e, t).childNodes), n)
                    for (o = function (e) {
                        return !e.type || x.test(e.type) ? r ? r.push(e.parentNode ? e.parentNode.removeChild(e) : e) : n.appendChild(e) : c
                    }, i = 0; null != (a = l[i]); i++) u.nodeName(a, "script") && o(a) || (n.appendChild(a), a.getElementsByTagName !== c && (s = u.grep(u.merge([], a.getElementsByTagName("script")), o), l.splice.apply(l, [i + 1, 0].concat(s)), i += s.length));
                return l
            });

            function k(e) {
                return "string" != typeof e || u.event.special.hover ? e : (N.test(e) && p("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"), e && e.replace(N, "mouseenter$1 mouseleave$1"))
            }
            var w = u.event.add,
                j = u.event.remove,
                A = u.event.trigger,
                T = u.fn.toggle,
                S = u.fn.live,
                P = u.fn.die,
                O = "ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",
                D = RegExp("\\b(?:" + O + ")\\b"),
                N = /(?:^|\s)hover(\.\S+|)\b/;
            u.event.props && "attrChange" !== u.event.props[0] && u.event.props.unshift("attrChange", "attrName", "relatedNode", "srcElement"), u.event.dispatch && e(u.event, "handle", u.event.dispatch, "jQuery.event.handle is undocumented and deprecated"), u.event.add = function (e, t, n, r, i) {
                e !== document && D.test(t) && p("AJAX events should be attached to document: " + t), w.call(this, e, k(t || ""), n, r, i)
            }, u.event.remove = function (e, t, n, r, i) {
                j.call(this, e, k(t) || "", n, r, i)
            }, u.fn.error = function () {
                var e = Array.prototype.slice.call(arguments, 0);
                return p("jQuery.fn.error() is deprecated"), e.splice(0, 0, "error"), arguments.length ? this.bind.apply(this, e) : (this.triggerHandler.apply(this, e), this)
            }, u.fn.toggle = function (n, e) {
                if (!u.isFunction(n) || !u.isFunction(e)) return T.apply(this, arguments);
                p("jQuery.fn.toggle(handler, handler...) is deprecated");

                function t(e) {
                    var t = (u._data(this, "lastToggle" + n.guid) || 0) % a;
                    return u._data(this, "lastToggle" + n.guid, 1 + t), e.preventDefault(), r[t].apply(this, arguments) || !1
                }
                var r = arguments,
                    i = n.guid || u.guid++,
                    a = 0;
                for (t.guid = i; r.length > a;) r[a++].guid = i;
                return this.click(t)
            }, u.fn.live = function (e, t, n) {
                return p("jQuery.fn.live() is deprecated"), S ? S.apply(this, arguments) : (u(this.context).on(e, this.selector, t, n), this)
            }, u.fn.die = function (e, t) {
                return p("jQuery.fn.die() is deprecated"), P ? P.apply(this, arguments) : (u(this.context).off(e, this.selector || "**", t), this)
            }, u.event.trigger = function (e, t, n, r) {
                return n || D.test(e) || p("Global events are undocumented and deprecated"), A.call(this, e, t, n || document, r)
            }, u.each(O.split("|"), function (e, t) {
                u.event.special[t] = {
                    setup: function () {
                        var e = this;
                        return e !== document && (u.event.add(document, t + "." + u.guid, function () {
                            u.event.trigger(t, null, e, !0)
                        }), u._data(this, t, u.guid++)), !1
                    },
                    teardown: function () {
                        return this !== document && u.event.remove(document, t + "." + u._data(this, t)), !1
                    }
                }
            })
        }(AllianceReseaux.jQuery, window),
        function (e, o) {
            var s = 0;
            if (AllianceReseaux._build = {
                _packs: {},
                _https: "https:" == (document.location.protocol || "")
            }, AllianceReseaux.jQuery('script[src*="widgets-libs/rel/noyau-"][src*="packs="]').each(function () {
                var e = this.src.match(/packs=([^&$]*)/i);
                if (e && e[1])
                    for (var t, n = e[1].split(","), r = 0; t = n[r]; r++) AllianceReseaux._build._packs[t.toLowerCase()] || (AllianceReseaux._build._packs[t.toLowerCase()] = {}, AllianceReseaux.jQuery.ajax({
                        url: this.src.match(/(.*)\/widgets-libs\/rel\/noyau-/i)[1] + "/widgets-libs/rel/os" + t.toLowerCase() + "/os" + t.toLowerCase() + "-pack-1.0.min.js",
                        dataType: "script",
                        cache: !0
                    }))
            }), !AllianceReseaux.Widget) {
                AllianceReseaux.Widget = new function () {
                    this.Instance = function (e, t) {
                        return new n(e, t)
                    };
                    var n = function (r, t) {
                        var n = null,
                            e = "osw-" + s++;
                        t = o.extend(!0, {
                            instanceId: e
                        }, t), "Panier" == r && (this.Instance = function () {
                            return n || AllianceReseaux.Interne.Panier.Instance(t)
                        });
                        var i = function (e) {
                            AllianceReseaux._build._load ? e() : setTimeout(function () {
                                i(e)
                            }, 200)
                        },
                            a = function (e) {
                                (n = AllianceReseaux._build._load ? n || (((AllianceReseaux.Interne || {})[r] || {}).Instance || function () {
                                    return null
                                })(t) : null) ? e() : setTimeout(function () {
                                    a(e)
                                }, 200)
                            };
                        i(function () {
                            if (!AllianceReseaux.Interne[r] && !AllianceReseaux._build._packs[r.toLowerCase()]) {
                                AllianceReseaux._build._packs[r.toLowerCase()] = {};
                                var e = AllianceReseaux.jQuery('script[src*="widgets-libs/rel/noyau-"]'),
                                    t = 0 < e.length ? e[0].src.match(/(.*)\/widgets-libs\/rel\/noyau-/i)[1] : (AllianceReseaux._build._https ? "https:" : "http:") + "//gadget.open-system.fr",
                                    n = r.toLowerCase();
                                AllianceReseaux.jQuery.ajax({
                                    url: t + "/widgets-libs/rel/os" + n.toLowerCase() + "/os" + n.toLowerCase() + "-pack-1.0.min.js",
                                    dataType: "script",
                                    cache: !0
                                })
                            }
                        }), this.Type = function () {
                            return r
                        }, this.PreApp = function (e, t) {
                            a(function () {
                                n.PreApp(e, t)
                            })
                        }, this.Initialise = function (e) {
                            a(function () {
                                n.Initialise(e)
                            })
                        }, this.App = function (e, t) {
                            a(function () {
                                n.App(e, t)
                            })
                        }, this.Evt = function (e, t) {
                            a(function () {
                                n.Evt && n.Evt(e, t)
                            })
                        }, this.Extension = function (e, t) {
                            a(function () {
                                n.Extension && n.Extension(e, t)
                            })
                        }, this.GetInstanceId = function () {
                            return e
                        }
                    }
                }
            }
        }(window, AllianceReseaux.jQuery),
        function (e, t, n) {
            n.URLHelper || (n.URLHelper = {}, n.URLHelper.isLocalhost = function (e) {
                return -1 < e.indexOf("//localhost")
            }, n.URLHelper.isPageLocalhost = function (e) {
                return n.URLHelper.isLocalhost(document.location.href)
            }, n.URLHelper.setScheme = function (e, t) {
                return e + "://" + t.replace(/^(?:https?:)?\/\//i, "")
            }, n.URLHelper.getScheme = function (e) {
                var t = e.indexOf("://");
                return -1 === t ? "" : e.substring(0, t).toLowerCase()
            }, n.URLHelper.setPageCompatibleScheme = function (e) {
                return n.URLHelper.setScheme("https" === function () {
                    var e = document.location.protocol;
                    return e ? e.substring(0, Math.max(0, e.length - 1)) : ""
                }() || "http" !== n.URLHelper.getScheme(e) ? "https" : "http", e)
            }, n.URLHelper.combine = function () {
                var n = "";
                return t.each(arguments, function (e, t) {
                    null != t && "" !== t && ("" !== n ? (/\/$/.test(n) || (n += "/"), n += /^\//.test(t) ? t.substring(1) : t) : n += t)
                }), n
            })
        }(window, AllianceReseaux.jQuery, AllianceReseaux),
        function (e, t, n) {
            if (!n.Config) {
                var r = n.URLHelper.setPageCompatibleScheme("//etape-rest.for-system.com/index.aspx"),
                    i = n.URLHelper.setPageCompatibleScheme("//gadget.open-system.fr"),
                    a = n.URLHelper.setPageCompatibleScheme("//img.for-system.com"),
                    o = n.URLHelper.setPageCompatibleScheme("//api-dossier.open-system.fr");
                n.Config = {}, n.Config.getUrlEtapeRest = function () {
                    return r
                }, n.Config.setUrlEtapeRest = function (e) {
                    r = n.URLHelper.setPageCompatibleScheme(e)
                }, n.Config.setUrlGadget = function (e) {
                    i = n.URLHelper.setPageCompatibleScheme(e)
                }, n.Config.getUrlGadget = function (e) {
                    return n.URLHelper.combine(i, e)
                }, n.Config.getUrlImgOS = function (e, t) {
                    return n.URLHelper.combine(a, e, t)
                }, n.Config.getUrlApiDossier = function () {
                    return o
                }, n.Config.setUrlApiDossier = function (e) {
                    o = n.URLHelper.setPageCompatibleScheme(e)
                }, n.Config.getUrlProxyHttps = function (e) {
                    return "https://widgetproxy.open-system.fr/?url=" + encodeURIComponent(e)
                }
            }
        }(window, AllianceReseaux.jQuery, AllianceReseaux),
        function (o, s, l) {
            if (!l.Loader) {
                var r = {},
                    u = {
                        OsPanier: {
                            getUrl: function () {
                                return "/widgets-libs/rel/ospanier/ospanier.min.js"
                            },
                            check: function () {
                                return null != l.OsPanier
                            }
                        },
                        OsOverlay: {
                            getUrl: function () {
                                return "/widgets-libs/rel/osoverlay/osoverlay-1.0.min.js"
                            },
                            check: function () {
                                return null != l.OsOverlay
                            }
                        },
                        WTooltip: {
                            getUrl: function () {
                                return "/widgets-libs/libs/wtooltip.min.js"
                            },
                            check: function () {
                                return null != s.fn.osLibWTooltip
                            }
                        },
                        Overlay: {
                            getUrl: function () {
                                return "/widgets-libs/libs/overlay.min.js"
                            },
                            check: function () {
                                return null != s.fn.osLibOverlay
                            }
                        },
                        RangeInput: {
                            getUrl: function () {
                                return "/widgets-libs/libs/rangeinput.min.js"
                            },
                            check: function () {
                                return null != s.fn.osLibRangeInput
                            }
                        },
                        JQueryJson: {
                            getUrl: function () {
                                return "/widgets-libs/libs/jquery.json-2.2.min.js"
                            },
                            check: function () {
                                return null != s.toJSON
                            }
                        },
                        UICore: {
                            getUrl: function () {
                                return "/widgets-libs/libs/jquery-ui-1.8.11.core.min.js"
                            },
                            check: function () {
                                return null != s.ui && null != s.ui.version
                            }
                        },
                        UIDatePicker: {
                            getUrl: function () {
                                return "/widgets-libs/libs/jquery-ui-1.8.11.datepicker.min.js"
                            },
                            check: function () {
                                return null != s.datepicker
                            },
                            charset: "iso-8859-1"
                        },
                        Galleriffic: {
                            getUrl: function () {
                                return "/widgets-libs/libs/jquery.galleriffic-modifie.min.js"
                            },
                            check: function () {
                                return null != s.galleriffic
                            }
                        },
                        OpacityRollOver: {
                            getUrl: function () {
                                return "/widgets-libs/libs/jquery.opacityrollover.min.js"
                            },
                            check: function () {
                                return null != s.fn.opacityrollover
                            }
                        },
                        GoogleAnalytics: {
                            getUrl: function () {
                                return "http://www.google-analytics.com/ga.js"
                            },
                            check: function () {
                                return o._gat
                            }
                        },
                        SelectBox: {
                            getUrl: function () {
                                return "/widgets-libs/libs/jquery.selectbox-modifie-0.1.3.min.js"
                            },
                            check: function () {
                                return s.fn.selectbox
                            }
                        },
                        Flash: {
                            getUrl: function () {
                                return "/widgets-libs/libs/jquery.flash.min.js"
                            },
                            check: function () {
                                return s.fn.flash
                            }
                        },
                        OsTimeline: {
                            getUrl: function () {
                                return "/widgets-libs/rel/ostimeline/ostimeline-1.0.min.js"
                            },
                            check: function () {
                                return null != l.OsTimeline
                            }
                        },
                        JQueryMobile: {
                            getUrl: function () {
                                return "/widgets-libs/libs/jquery.mobile-1.3.2.min.js"
                            },
                            check: function () {
                                return s.mobile
                            }
                        },
                        OsLibFormuleAge: {
                            getUrl: function () {
                                return "/widgets-libs/rel/metiers/oslibformuleage-1.0.min.js"
                            },
                            check: function () {
                                return l.OsLibFormuleAge
                            }
                        },
                        OsLibOpenProRate: {
                            getUrl: function () {
                                return "/widgets-libs/rel/metiers/oslibopenprorate-1.0.min.js"
                            },
                            check: function () {
                                return l.OsLibOpenProRate
                            }
                        },
                        OsFormulaire: {
                            getUrl: function () {
                                return "/widgets-libs/rel/osformulaire/osformulaire-1.0.min.js"
                            },
                            check: function () {
                                return l.OsFormulaire
                            }
                        },
                        DateRangePicker: {
                            getUrl: function () {
                                return "/widgets-libs/libs/daterangepicker.min.js"
                            },
                            check: function () {
                                return null != s.fn.daterangepicker
                            }
                        },
                        Moment: {
                            getUrl: function () {
                                return "/widgets-libs/libs/moment.min.js"
                            },
                            check: function () {
                                return null != l.moment
                            }
                        }
                    };
                l.Loader = {}, l.Loader.registerLib = function (e, t, n) {
                    return u[e] = t, n ? l.Loader.load([e]) : null
                }, l.Loader.loadScript = function (e, t) {
                    if ((t = t || {}).recharger || !r[t.idScript ? t.idScript : e]) {
                        var n = {
                            url: e,
                            dataType: "script",
                            cache: r[t.idScript ? t.idScript : e] = !0,
                            success: t.ApresChargement
                        };
                        t.charset && (n.scriptCharset = t.charset), s.ajax(n)
                    } else t.ApresChargement && t.ApresChargement()
                }, l.Loader.when = function (n, r, i) {
                    var a, o = s.Deferred();
                    return i = s.extend({
                        delai: 200
                    }, i), (a = function (e) {
                        var t = n();
                        t ? (r && r(this), o.resolve(t)) : 0 < e ? setTimeout(function () {
                            a(e - 1)
                        }, i.delai) : (i.err && i.err("TimeOut"), o.reject())
                    })(0 === i.nb || 0 < i.nb ? i.nb : 100), o.promise()
                }, l.Loader.whenLibLoaded = function (e, t) {
                    return l.Loader.when(u[e].check, t)
                }, l.Loader.whenAllLibsLoaded = function (t, n) {
                    var r;
                    return n ? ((r = function (e) {
                        l.Loader.whenLibLoaded(t[e], function () {
                            e === t.length - 1 ? n() : r(e + 1)
                        })
                    })(0), null) : s.when.apply(s, s.map(t, function (e) {
                        return l.Loader.whenLibLoaded(e)
                    }))
                }, l.Loader.load = function (e, t) {
                    for (var n, r = 0; r < e.length; r++)
                        if (n = e[r], !o["_oslib_" + n] && !u[n].check()) {
                            o["_oslib_" + n] = !0;
                            var i = u[n].getUrl(),
                                a = /^http/i.test(i) ? l.URLHelper.setPageCompatibleScheme(i) : l.URLHelper.combine(l.Config.getUrlGadget(), i);
                            l.Loader.loadScript(a, {
                                charset: u[n].charset
                            })
                        } return l.Loader.whenAllLibsLoaded(e, t)
                }
            }
        }(window, AllianceReseaux.jQuery, AllianceReseaux),
        function (e, t, n) {
            if (!n.DateHelper) {
                var i = {
                    fr: {
                        monthNames: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"],
                        monthNamesShort: ["Janv.", "Févr.", "Mars", "Avril", "Mai", "Juin", "Juil.", "Août", "Sept.", "Oct.", "Nov.", "Déc."],
                        dayNames: ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"],
                        dayNamesShort: ["Dim.", "Lun.", "Mar.", "Mer.", "Jeu.", "Ven.", "Sam."]
                    },
                    uk: {
                        monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                        monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                        dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                        dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
                    },
                    es: {
                        monthNames: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
                        monthNamesShort: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
                        dayNames: ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"],
                        dayNamesShort: ["Dom", "Lun", "Mar", "Mié", "Juv", "Vie", "Sáb"]
                    },
                    de: {
                        monthNames: ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"],
                        monthNamesShort: ["Jan", "Feb", "Mär", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"],
                        dayNames: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"],
                        dayNamesShort: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"]
                    },
                    nl: {
                        monthNames: ["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"],
                        monthNamesShort: ["jan", "feb", "maa", "apr", "mei", "jun", "jul", "aug", "sep", "okt", "nov", "dec"],
                        dayNames: ["zondag", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag"],
                        dayNamesShort: ["zon", "maa", "din", "woe", "don", "vri", "zat"]
                    },
                    it: {
                        monthNames: ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"],
                        monthNamesShort: ["Gen", "Feb", "Mar", "Apr", "Mag", "Giu", "Lug", "Ago", "Set", "Ott", "Nov", "Dic"],
                        dayNames: ["Domenica", "Luned&#236", "Marted&#236", "Mercoled&#236", "Gioved&#236", "Venerd&#236", "Sabato"],
                        dayNamesShort: ["Dom", "Lun", "Mar", "Mer", "Gio", "Ven", "Sab"]
                    },
                    ca: {
                        monthNames: ["Gener", "Febrer", "Mar&ccedil;", "Abril", "Maig", "Juny", "Juliol", "Agost", "Setembre", "Octubre", "Novembre", "Desembre"],
                        monthNamesShort: ["Gen", "Feb", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Oct", "Nov", "Des"],
                        dayNames: ["Diumenge", "Dilluns", "Dimarts", "Dimecres", "Dijous", "Divendres", "Dissabte"],
                        dayNamesShort: ["Dug", "Dln", "Dmt", "Dmc", "Djs", "Dvn", "Dsb"]
                    },
                    pt: {
                        monthNames: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
                        monthNamesShort: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
                        dayNames: ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"],
                        dayNamesShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"]
                    }
                };
                n.DateHelper = {}, n.DateHelper.format = function (e, t, n) {
                    var r = i[n || "fr"];
                    return null == r && (r = i.fr), e = "string" == typeof e ? new Date(e) : e, t.replace(/dddd/g, r.dayNames[e.getDay()]).replace(/ddd/g, r.dayNamesShort[e.getDay()]).replace(/dd/g, ("" + (e.getDate() + 100)).substring(1)).replace(/MMMM/g, r.monthNames[e.getMonth()]).replace(/MMM/g, r.monthNamesShort[e.getMonth()]).replace(/MM/g, ("" + (e.getMonth() + 101)).substring(1)).replace(/yyyy/g, e.getFullYear()).replace(/yy/g, ("" + e.getFullYear()).substring(2)).replace(/HH/g, ("" + (e.getHours() + 100)).substring(1)).replace(/mm/g, ("" + (e.getMinutes() + 100)).substring(1))
                }, n.DateHelper.formatToISO8601Date = function (e) {
                    return n.DateHelper.format(e, "yyyy-MM-dd")
                }, n.DateHelper.addDays = function (e, t) {
                    return new Date(e.getFullYear(), e.getMonth(), e.getDate() + t)
                }, n.DateHelper.diffDays = function (e, t) {
                    return Math.round((new Date(t.getFullYear(), t.getMonth(), t.getDate(), 12, 0, 0).getTime() - new Date(e.getFullYear(), e.getMonth(), e.getDate(), 12, 0, 0).getTime()) / 1e3 / 3600 / 24)
                }
            }
        }(window, AllianceReseaux.jQuery, AllianceReseaux),
        function (e, t, d) {
            t.XmlConverter = function () {
                function o(e) {
                    return new RegExp("^@").test(e)
                }

                function s(e, t) {
                    return "<" + e + (null != t && 0 < t.length ? " " + t.join(" ") : "") + ">"
                }

                function l(e) {
                    return "</" + e + ">"
                }

                function u(e) {
                    var t = [];
                    for (var n in e) o(n) && t.push(n.substring(1) + '="' + r(e[n]) + '"');
                    return t
                }

                function c(e) {
                    return t.XmlConverter.escape(e.toString())
                }
                var r = function (e) {
                    return t.XmlConverter.escapeAttributeValue(e.toString()).replace('"', "&quot;")
                },
                    p = function (e) {
                        var t, n, r = typeof e;
                        if ("string" == r || "number" == r || "boolean" == r) return c(e);
                        for (var i in t = "", e)
                            if (!o(i))
                                if (n = e[i], d.isArray(n))
                                    for (var a = 0; a < n.length; a++) t += s(i, u(n[a])) + p(n[a]) + l(i);
                                else switch (i) {
                                    case "#text":
                                        t += c(n);
                                        break;
                                    default:
                                        t += s(i, "object" == typeof n ? u(n) : "") + p(n) + l(i)
                                }
                        return t
                    };
                this.serializeObject = function (e, t) {
                    var n;
                    return null != t && ((n = {})[t] = e, e = n), p(e)
                }
            }, t.XmlConverter.escape = function (e) {
                return e.replace(/&/gi, "&amp;").replace(/</gi, "&lt;").replace(/>/gi, "&gt;")
            }, t.XmlConverter.escapeAttributeValue = function (e) {
                return t.XmlConverter.escape(e).replace("'", "&apos;").replace('"', "&quot;")
            }, t.XmlConverter.parseDate = function (e) {
                var t = new RegExp("^(?:(\\d*)-(\\d*)-(\\d*))?(?:T?(\\d+):(\\d+):(\\d+))?", "gi").exec(e);
                return new Date(parseInt(t[1] || 1, 10), parseInt(t[2] || 1, 10) - 1, parseInt(t[3] || 2e3, 10), parseInt(t[4] || 0, 10), parseInt(t[5] || 0, 10), parseInt(t[6] || 0, 10))
            }
        }(window, AllianceReseaux, AllianceReseaux.jQuery),
        function (e, r, i) {
            i.JPath || (i.JPath = {}, i.JPath.set = function (e, t, n, r) {
                e = e || {};
                for (var i, a = t.match(/[^.]+/gi), o = 0, s = e; o < a.length; o++) {
                    if (i = a[o], o === a.length - 1 && r) {
                        var l = s[i] || [];
                        l.push(n), n = l
                    }
                    s = s[i] = o === a.length - 1 ? n : s[i] || {}
                }
                return n
            }, i.JPath.get = function (e, t) {
                for (var n = t.split("."), r = 0; r < n.length; r++) {
                    if (null == e[n[r]]) return null;
                    e = e[n[r]]
                }
                return e
            }, i.JPath.setOrGetExisting = function (e, t, n) {
                var r = i.JPath.get(e, t);
                return null != r ? r : i.JPath.set(e, t, n)
            }, i.JPath.extend = function (e, t, n) {
                return i.JPath.set(e, t, r.extend(!0, i.JPath.get(e, t), n))
            })
        }(window, AllianceReseaux.jQuery, AllianceReseaux),
        function (e, t, n) {
            n.Guid || (n.Guid = {}, n.Guid.newGuid = function () {
                return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (e) {
                    var t = 16 * Math.random() | 0;
                    return ("x" === e ? t : 3 & t | 8).toString(16)
                })
            })
        }(window, AllianceReseaux.jQuery, AllianceReseaux),
        function (o, d, s, l) {
            if (null == s.OsBase) {
                var n = s.URLHelper.isPageLocalhost(),
                    r = -1 < document.location.href.indexOf("http://os40"),
                    u = s.URLHelper.setPageCompatibleScheme("//json-post.for-system.com/postv2.aspx"),
                    t = s.URLHelper.setPageCompatibleScheme("//json-catalogue.for-system.com/z6078"),
                    i = s.URLHelper.setPageCompatibleScheme("//service-api.open-system.fr/dispo/Produit.aspx"),
                    a = [s.URLHelper.setPageCompatibleScheme("//map-jsonp.open-system.fr"), s.URLHelper.setPageCompatibleScheme("//map-jsonp1.open-system.fr"), s.URLHelper.setPageCompatibleScheme("//map-jsonp2.open-system.fr")];
                s.Integrations = function () { }, s.Extensions = {}, s.plugins = {
                    rates: {},
                    gm: {}
                }, s.Textes = function () { }, s.Interne = {}, s.Data = {}, null == s.Regional && (s.Regional = {
                    fr: {
                        closeText: "Fermer",
                        prevText: "Précédent",
                        nextText: "Suivant",
                        currentText: "Aujourd'hui",
                        monthNames: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"],
                        monthNamesShort: ["Janv.", "Févr.", "Mars", "Avril", "Mai", "Juin", "Juil.", "Août", "Sept.", "Oct.", "Nov.", "Déc."],
                        dayNames: ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"],
                        dayNamesShort: ["Dim.", "Lun.", "Mar.", "Mer.", "Jeu.", "Ven.", "Sam."],
                        dayNamesMin: ["D", "L", "M", "M", "J", "V", "S"],
                        weekHeader: "Sem.",
                        dateFormat: "dd/mm/yy",
                        firstDay: 1,
                        isRTL: !1,
                        showMonthAfterYear: !1,
                        yearSuffix: "",
                        closeOverlay: "Fermer",
                        aPartirDe: "à partir de",
                        adulte: "adulte",
                        nbSemaines: function (e) {
                            return 1 === e ? e + " semaine" : e + " semaines"
                        },
                        nbNuits: function (e) {
                            return 1 === e ? e + " nuit" : e + " nuits"
                        }
                    },
                    uk: {
                        closeText: "Done",
                        prevText: "Prev",
                        nextText: "Next",
                        currentText: "Today",
                        monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                        monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                        dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                        dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                        dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
                        weekHeader: "Wk",
                        dateFormat: "dd/mm/yy",
                        firstDay: 1,
                        isRTL: !1,
                        showMonthAfterYear: !1,
                        yearSuffix: "",
                        closeOverlay: "Close",
                        aPartirDe: "from",
                        adulte: "adult",
                        nbSemaines: function (e) {
                            return 1 === e ? e + " week" : e + " weeks"
                        },
                        nbNuits: function (e) {
                            return 1 === e ? e + " night" : e + " nights"
                        }
                    },
                    es: {
                        closeText: "Cerrar",
                        prevText: "&#x3c;Ant",
                        nextText: "Sig&#x3e;",
                        currentText: "Hoy",
                        monthNames: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
                        monthNamesShort: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
                        dayNames: ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"],
                        dayNamesShort: ["Dom", "Lun", "Mar", "Mié", "Juv", "Vie", "Sáb"],
                        dayNamesMin: ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sá"],
                        weekHeader: "Sm",
                        dateFormat: "dd/mm/yy",
                        firstDay: 1,
                        isRTL: !1,
                        showMonthAfterYear: !1,
                        yearSuffix: "",
                        closeOverlay: "Cerrar",
                        aPartirDe: "a partir de",
                        adulte: "adulto",
                        nbSemaines: function (e) {
                            return 1 === e ? e + " semana" : e + " semanas"
                        },
                        nbNuits: function (e) {
                            return 1 === e ? e + " noche" : e + " noches"
                        }
                    },
                    de: {
                        closeText: "schließen",
                        prevText: "&#x3c;zurück",
                        nextText: "Vor&#x3e;",
                        currentText: "heute",
                        monthNames: ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"],
                        monthNamesShort: ["Jan", "Feb", "Mär", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"],
                        dayNames: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"],
                        dayNamesShort: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
                        dayNamesMin: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
                        weekHeader: "Wo",
                        dateFormat: "dd.mm.yy",
                        firstDay: 1,
                        isRTL: !1,
                        showMonthAfterYear: !1,
                        yearSuffix: "",
                        closeOverlay: "schließen",
                        aPartirDe: "ab",
                        adulte: "erwachsener",
                        nbSemaines: function (e) {
                            return 1 === e ? e + " woche" : e + " wochen"
                        },
                        nbNuits: function (e) {
                            return 1 === e ? e + " nacht" : e + " nächte"
                        }
                    },
                    nl: {
                        closeText: "Sluiten",
                        prevText: "?",
                        nextText: "?",
                        currentText: "Vandaag",
                        monthNames: ["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"],
                        monthNamesShort: ["jan", "feb", "maa", "apr", "mei", "jun", "jul", "aug", "sep", "okt", "nov", "dec"],
                        dayNames: ["zondag", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag"],
                        dayNamesShort: ["zon", "maa", "din", "woe", "don", "vri", "zat"],
                        dayNamesMin: ["zo", "ma", "di", "wo", "do", "vr", "za"],
                        weekHeader: "Wk",
                        dateFormat: "dd/mm/yy",
                        firstDay: 1,
                        isRTL: !1,
                        showMonthAfterYear: !1,
                        yearSuffix: "",
                        closeOverlay: "Sluiten",
                        aPartirDe: "van",
                        adulte: "volwassene",
                        nbSemaines: function (e) {
                            return 1 === e ? e + " week" : e + " weken"
                        },
                        nbNuits: function (e) {
                            return 1 === e ? e + " nacht" : e + " nachten"
                        }
                    },
                    it: {
                        closeText: "Chiudi",
                        prevText: "&#x3c;Prec",
                        nextText: "Succ&#x3e;",
                        currentText: "Oggi",
                        monthNames: ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"],
                        monthNamesShort: ["Gen", "Feb", "Mar", "Apr", "Mag", "Giu", "Lug", "Ago", "Set", "Ott", "Nov", "Dic"],
                        dayNames: ["Domenica", "Luned&#236", "Marted&#236", "Mercoled&#236", "Gioved&#236", "Venerd&#236", "Sabato"],
                        dayNamesShort: ["Dom", "Lun", "Mar", "Mer", "Gio", "Ven", "Sab"],
                        dayNamesMin: ["Do", "Lu", "Ma", "Me", "Gi", "Ve", "Sa"],
                        weekHeader: "Sm",
                        dateFormat: "dd/mm/yy",
                        firstDay: 1,
                        isRTL: !1,
                        showMonthAfterYear: !1,
                        yearSuffix: "",
                        closeOverlay: "Chiudi",
                        aPartirDe: "da",
                        adulte: "adulto",
                        nbSemaines: function (e) {
                            return 1 === e ? e + " settimana" : e + " settimane"
                        },
                        nbNuits: function (e) {
                            return 1 === e ? e + " notte" : e + " notti"
                        }
                    },
                    ca: {
                        closeText: "Tancar",
                        prevText: "&#x3c;Ant",
                        nextText: "Seg&#x3e;",
                        currentText: "Avui",
                        monthNames: ["Gener", "Febrer", "Mar&ccedil;", "Abril", "Maig", "Juny", "Juliol", "Agost", "Setembre", "Octubre", "Novembre", "Desembre"],
                        monthNamesShort: ["Gen", "Feb", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Oct", "Nov", "Des"],
                        dayNames: ["Diumenge", "Dilluns", "Dimarts", "Dimecres", "Dijous", "Divendres", "Dissabte"],
                        dayNamesShort: ["Dug", "Dln", "Dmt", "Dmc", "Djs", "Dvn", "Dsb"],
                        dayNamesMin: ["Dg", "Dl", "Dt", "Dc", "Dj", "Dv", "Ds"],
                        weekHeader: "Sm",
                        dateFormat: "dd/mm/yy",
                        firstDay: 1,
                        isRTL: !1,
                        showMonthAfterYear: !1,
                        yearSuffix: "",
                        closeOverlay: "Tancar",
                        aPartirDe: "des de",
                        adulte: "adulto",
                        nbSemaines: function (e) {
                            return 1 === e ? e + " setmana" : e + " setmanes"
                        },
                        nbNuits: function (e) {
                            return 1 === e ? e + " nit" : e + " nits"
                        }
                    },
                    pt: {
                        closeText: "Fechar",
                        prevText: "Anterior",
                        nextText: "Seguinte",
                        currentText: "Hoje",
                        monthNames: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
                        monthNamesShort: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
                        dayNames: ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"],
                        dayNamesShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
                        dayNamesMin: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
                        weekHeader: "Sem",
                        dateFormat: "dd/mm/yy",
                        firstDay: 0,
                        isRTL: !1,
                        showMonthAfterYear: !1,
                        yearSuffix: "",
                        closeOverlay: "Close",
                        aPartirDe: "from",
                        adulte: "adult",
                        nbSemaines: function (e) {
                            return 1 === e ? e + " semana" : e + " semanas"
                        },
                        nbNuits: function (e) {
                            return 1 === e ? e + " noite" : e + " noites"
                        }
                    }
                });
                var c = {};
                e.prototype = {
                    cible: null,
                    nom: null
                }, s.OsEvt = e;
                s.OsBase = {
                    Localhost: function () {
                        return n
                    },
                    Https: function () {
                        return s._build._https
                    },
                    GetUrlHttpsCompatible: function (e) {
                        return s.URLHelper.setPageCompatibleScheme(e)
                    },
                    AjouteLib: function (e, t, n) {
                        s.Loader.registerLib(e, t, n)
                    },
                    SetUrlGadget: function (e) {
                        return s.Config.setUrlGadget(e)
                    },
                    SetUrlPost: function (e) {
                        u = e
                    },
                    UrlJSONCatalogue: function (e) {
                        return e != l && (t = e), t
                    },
                    UrlServiceAPIProduit: function (e) {
                        return e != l && (i = e), i
                    },
                    UrlEtapeRest: function (e) {
                        return e != l && s.Config.setUrlEtapeRest(e), s.Config.getUrlEtapeRest()
                    },
                    UrlImg: function (e, t) {
                        return s.Config.getUrlImgOS(e, t)
                    },
                    Trigger: function (e, t, n) {
                        if (!e) return !0;
                        for (var r, i = 0; r = e[i]; i++) {
                            var a = !r(r._osEvt, t, n);
                            if (null != a && !a) return !1
                        }
                        return !0
                    },
                    GetUrlGadget: function (e, t) {
                        return t && n ? "http://localhost" + e : t && r ? "http://os40" + e : s.Config.getUrlGadget(e)
                    },
                    GetUrlScriptStatique: function (e) {
                        return a[parseInt(Math.random() * (a.length - .01))] + e.toLowerCase()
                    },
                    ChargeLibs: function (e, t) {
                        return s.Loader.load(e, t)
                    },
                    ChargeDatePicker: function (t, n) {
                        this.ChargeLibs(["UICore", "UIDatePicker"], function () {
                            var e = s.Regional[t];
                            d.datepicker.setDefaults(d.datepicker.regional[t] = e), n && n()
                        })
                    },
                    AttendreLib: function (e, t) {
                        return s.Loader.whenLibLoaded(e, t)
                    },
                    AttendreLibs: function (e, t) {
                        return s.Loader.whenAllLibsLoaded(e, t)
                    },
                    PostJSONP: function (e) {
                        if (e && e.url && e.data) {
                            var t = e.url,
                                n = e.data,
                                i = e.success || e.callback || function () { };
                            if (d.support.cors && "string" != typeof n) d.ajax({
                                url: t,
                                type: "post",
                                dataType: "json",
                                xhrFields: {
                                    withCredentials: !0
                                },
                                data: n,
                                success: i
                            });
                            else {
                                var a = n && "string" == typeof n ? "&" + n : "";
                                if (n && "string" != typeof n)
                                    for (var r in n) a += "&" + encodeURIComponent(r) + "=" + encodeURIComponent(n[r]);
                                d.ajax({
                                    url: u,
                                    dataType: "jsonp",
                                    data: {
                                        c: "open",
                                        url: t
                                    },
                                    success: function (e) {
                                        var n = e.id,
                                            r = function (e) {
                                                var t = a.substring(1e3 * e, 1e3 * (e + 1));
                                                d.ajax({
                                                    url: u,
                                                    dataType: "jsonp",
                                                    data: {
                                                        c: "bloc",
                                                        id: n,
                                                        i: e,
                                                        b: t
                                                    },
                                                    success: function () {
                                                        e + 1 <= a.length / 1e3 ? r(e + 1) : d.ajax({
                                                            url: u,
                                                            dataType: "jsonp",
                                                            data: {
                                                                c: "post",
                                                                id: n
                                                            },
                                                            success: i
                                                        })
                                                    }
                                                })
                                            };
                                        r(0)
                                    }
                                })
                            }
                        }
                    },
                    Attendre: function (e, t, n) {
                        return s.Loader.when(e, t, n)
                    },
                    ChargeCss: function (e, t) {
                        var n = t || {},
                            r = d("link[href$='" + e + "']");
                        if (0 != r.length) return r.get(0);
                        this.ExtensionLog({
                            categorie: "Css",
                            lien: e
                        });
                        var i = document.createElement("link");
                        return i.href = e, i.rel = "stylesheet", i.type = "text/css", n.apresDom ? d(n.apresDom).after(i) : d("head").prepend(i), i
                    },
                    ChargeStyle: function (e, t) {
                        c[e] || (c[e] = !0, d(document.head || "head").append('<style type="text/css">' + t + "</style>"))
                    },
                    ChargeScript: function (e, t) {
                        s.Loader.loadScript(e, t)
                    },
                    ChargeIntegration: function (e, t) {
                        if (e) {
                            if (!s.Integrations[e]) {
                                var n = "integration/" + 100 * Math.floor(e / 100) + "/" + e;
                                this.ChargeScript(this.GetUrlGadget("/widgets/" + n + ".js"), {
                                    idScript: n,
                                    charset: "utf-8"
                                })
                            }
                            return this.AttendreIntegration(e, t)
                        }
                    },
                    AttendreIntegration: function (e, t) {
                        if (!e) throw new Error("Paramètre idIntegration manquant");
                        var n;
                        return n = this.Attendre(function () {
                            return s.Integrations[e]
                        }), t && n.done(function (e) {
                            t({
                                integration: e
                            })
                        }), n
                    },
                    StandardiseOptions: function (e, t, n) {
                        var r = {};
                        for (var i in e) {
                            for (var a = !1, o = 0; !a && o < n.length; o++) a = i == n[o];
                            a ? this.SetJPath(r, t + "." + i, e[i]) : r[i] = e[i]
                        }
                        return r
                    },
                    ChargeCatalogue: function (e) {
                        var t = "/data/" + e.replace(/\s*-/gi, "/").replace(/\*/gi, "!u002a").replace(/\|/gi, "!u007c").toLowerCase() + "/catalogue.js";
                        s.OsBase.ChargeScript(s.OsBase.GetUrlScriptStatique(t), {
                            idScript: t
                        })
                    },
                    AttendreCatalogue: function (e, t) {
                        s.OsBase.Attendre(function () {
                            return null != s.Data[e]
                        }, function () {
                            t(s.Data[e]())
                        })
                    },
                    ChargeGoogleMaps: function (e, t, n) {
                        var r = this;
                        if (!o._oscarte_googlemaps_load && o.google && o.google.maps && o.google.maps.Map) o._oscarte_googlemaps_load = 2;
                        else if (0 == (o._oscarte_googlemaps_load || 0)) {
                            o._oscarte_googlemaps_load = 1, o._oscarte_googlemaps_callback = function () {
                                o._oscarte_googlemaps_load = 2
                            };
                            var i = document.createElement("script");
                            i.type = "text/javascript", d(function () {
                                if (i.src = r.GetUrlHttpsCompatible("maps.google.com/maps/api/js?") + (t ? "&key=" + t : "") + ((n || {}).places ? "&libraries=places" : "") + "&callback=_oscarte_googlemaps_callback", document.body.appendChild(i), e) try {
                                    s.OsBase.Quota({
                                        idIntegration: e,
                                        api: "GoogleMaps"
                                    })
                                } catch (e) { }
                            })
                        }
                    },
                    AttendreGoogleMaps: function (e) {
                        s.OsBase.Attendre(function () {
                            return 2 == o._oscarte_googlemaps_load
                        }, e)
                    },
                    ChargeUniversalAnalytics: function () {
                        var e, t, n, r, i;
                        e = o, t = document, n = "__gaTracker", e.GoogleAnalyticsObject = n, e[n] = e[n] || function () {
                            (e[n].q = e[n].q || []).push(arguments)
                        }, e[n].l = 1 * new Date, r = t.createElement("script"), i = t.getElementsByTagName("script")[0], r.async = 1, r.src = "//www.google-analytics.com/analytics.js", i.parentNode.insertBefore(r, i)
                    },
                    AttendreUniversalAnalytics: function (e) {
                        s.OsBase.Attendre(function () {
                            return o.__gaTracker
                        }, e)
                    },
                    GenereBlocTypeAnnonce: function (e, t, n) {
                        return null == t || 0 === t ? e.hide() : (n = d.extend({
                            langue: "fr",
                            textes: {
                                particulier: {
                                    fr: "Annonce d'un particulier",
                                    uk: "private accommodation provider",
                                    ca: "Anunci d'un particular",
                                    de: "Anzeige privat",
                                    es: "Anuncio de particular",
                                    it: "Annuncio per privati",
                                    nl: "Particuliere advertentie"
                                },
                                professionnel: {
                                    fr: "Annonce professionnelle",
                                    uk: "professional rental company",
                                    ca: "Anunci d’un professional",
                                    de: "Anzeige gewerbsmäßig",
                                    es: "Anuncio profesional",
                                    it: "Annuncio per professionisti",
                                    nl: "Zakelijke advertentie"
                                }
                            }
                        }, n), e.empty().show().addClass("TypeAnnonce").toggleClass("TypeAnnonceParticulier", 1 === t).toggleClass("TypeAnnoncePro", 2 === t).append(d('<span class="osw-badge__stroke"></span>').text(1 === t ? n.textes.particulier[n.langue] : n.textes.professionnel[n.langue])))
                    },
                    FormatePrix: function (e, t) {
                        var n = t || {};
                        if (0 == e) return n.span ? '<span class="Entiere Entiere0 osw-montant-partie-entiere">0</span><span class="Decimale Decimale00 osw-montant-partie-decimale">.00</span>' + (n.devise ? '<span class="SymboleMonnaie osw-montant-symbole-monnaie">&nbsp;' + n.devise.symbole + "</span>" : "") : "0.00" + (n.devise ? " " + n.devise.symbole : "");
                        var r = "" + Math.round(e),
                            i = e < 0 ? 1 : 0,
                            a = r.substr(i, r.length - 2 - i) || "0",
                            o = r.substr(r.length - 2);
                        return n.span ? (e < 0 ? '<span class="SymboleSigne osw-montant-symbole-signe">-</span>' : "") + '<span class="Entiere osw-montant-partie-entiere' + ("0" == a ? " Entiere0" : "") + '">' + a + '</span><span class="Decimale osw-montant-partie-decimale' + ("00" == o ? " Decimale00" : "") + '">.' + o + "</span>" + (n.devise ? '<span class="SymboleMonnaie osw-montant-symbole-monnaie">&nbsp;' + n.devise.symbole + "</span>" : "") : a + "." + o + (n.devise ? " " + n.devise.symbole : "")
                    },
                    GenereBlocPrix: function (e) {
                        function t(e) {
                            return null == e ? '<span class="Entiere EntiereNulle osw-montant-partie-entiere">-</span><span class="Decimale DecimaleNulle osw-montant-partie-decimale">.--</span><span class="SymboleMonnaie osw-montant-symbole-monnaie">&nbsp;' + a.symbole + "</span>" : s.OsBase.FormatePrix(100 * e, {
                                span: !0,
                                devise: a
                            })
                        }
                        var n, r, i, a = e.devise || {
                            symbole: "€"
                        },
                            o = s.Regional[e.langue || "fr"];
                        return n = '<div class="BlocInfosPrix osw-bloc-prix">', "string" == typeof e.prefixe ? r = e.prefixe : e.prixAPartirDe && (r = o.aPartirDe), r && (n += '<div class="BlocPrefixe osw-prix-prefixe">' + r + "</div>"), null != e.prixBarre && e.prixBarre > e.prix && (n += '<div class="BlocPrixBarre osw-prix osw-prix-barre">', n += '<div class="PrixBarreValeur osw-prix-valeur">', n += '<span class="BlocMontant osw-montant">' + t(e.prixBarre) + "</span>", n += "</div>", n += '<div class="Clear"></div>', n += "</div>"), n += '<div class="BlocPrixStd osw-prix osw-prix-std">', n += '<div class="PrixValeur osw-prix-valeur">', n += '<span class="BlocMontant osw-montant">' + t(e.prix) + "</span>", n += "</div>", n += '<div class="Clear"></div>', n += "</div>", "string" == typeof e.infosSupp ? i = e.infosSupp : e.infosSupp && (i = "", e.infosSupp.prefixe && (i += e.infosSupp.prefixe), e.infosSupp.nbNuits && (i += e.infosSupp.nbNuits % 7 == 0 ? o.nbSemaines(e.infosSupp.nbNuits / 7) : o.nbNuits(e.infosSupp.nbNuits))), i && (n += '<div class="InfoSupp osw-prix-suffixe">' + i + "</div>"), n += '<div class="Clear"></div>', {
                            dom: d(n += "</div>").get(0),
                            html: n
                        }
                    },
                    FormateMinutes: function (e, t) {
                        var n = parseInt(e / 60, 10),
                            r = (e % 60 + 100 + "").substring(1);
                        return t ? t.replace(/HH/g, n).replace(/mm/g, r) : 60 < e ? n + "h" + r : e + "min"
                    },
                    FormateDate: function (e, t, n) {
                        return s.DateHelper.format(e, t, n)
                    },
                    DateXmlEnJs: function (e) {
                        return s.XmlConverter.parseDate(e)
                    },
                    DateCalEnJs: function (e) {
                        if (!e) return null;
                        var t = e.split("/");
                        return t.length < 3 ? null : new Date(parseInt(t[2], 10), parseInt(t[1], 10) - 1, parseInt(t[0], 10))
                    },
                    FormateDateCal: function (e, t, n) {
                        var r = this.DateCalEnJs(e);
                        return r ? this.FormateDate(r, t, n) : ""
                    },
                    DateAddDays: function (e, t) {
                        return s.DateHelper.addDays(e, t)
                    },
                    DateDiffDays: function (e, t) {
                        return s.DateHelper.diffDays(e, t)
                    },
                    toXML: function (e) {
                        if (!e) return "";
                        var t = "";
                        for (var n in e) t += "<" + n + ">" + e[n] + "</" + n + ">";
                        return t
                    },
                    toXMLText: function (e) {
                        return s.XmlConverter.escape(e)
                    },
                    CreeGuid: function () {
                        return s.Guid.newGuid()
                    },
                    WTooltip: function (e) {
                        this.ChargeLibs(["WTooltip"], function () {
                            d(e).find("*[id^='_tooltip_']").osLibWTooltip({
                                style: "",
                                content: !0,
                                callBefore: function (e, t) {
                                    d(e).html(d("#" + t.id + "_tooltip").html())
                                }
                            })
                        })
                    },
                    Paginer: function (r) {
                        var e = d(r.canvas),
                            i = r.nb || 5,
                            a = 0,
                            o = e.find(".js-pagination-item").removeClass("js-pagination-item");
                        if (o.length > i) {
                            function t(e) {
                                0 == (a += e || 0) ? s.hide() : s.show(), a * i + i >= o.length ? l.hide() : l.show();
                                for (var t, n = 0; t = o[n]; n++) a * i <= n && n < a * i + i ? ((r.avantAffichageItem || function () { })({
                                    item: t
                                }), d(t).show()) : d(t).hide()
                            }
                            var s = e.find(".js-pagination-bloc-precedent").removeClass("js-pagination-bloc-precedent"),
                                l = e.find(".js-pagination-bloc-suivant").removeClass("js-pagination-bloc-suivant"),
                                n = e.find(".js-pagination-precedent").removeClass("js-pagination-precedent"),
                                u = e.find(".js-pagination-suivant").removeClass("js-pagination-suivant");
                            n.click(function () {
                                t(-1)
                            }), u.click(function () {
                                t(1)
                            }), t(0), e.find(".js-pagination-nav").removeClass("js-pagination-nav").css("display", "block")
                        }
                    },
                    Metiers: function () {
                        return {
                            1: "Meuble",
                            2: "Hotel",
                            3: "Camping",
                            4: "ChHote",
                            5: "Activite",
                            9: "Sejour",
                            10: "Billet",
                            16: "Refuge",
                            17: "Package",
                            20: "Loisirs"
                        }
                    },
                    MetierParPrefixeUI: function (e) {
                        return {
                            ARDI: "ardecheendirect",
                            AVAI: "hotel",
                            AWOO: "Awoo",
                            B2FM: "meuble",
                            B2F2M: "meuble",
                            CVERT: "camping",
                            ESF: "esf",
                            FBKH: "hotel",
                            GPIM: "meuble",
                            HELI: "meuble",
                            HRES: "meuble",
                            HRIT: "hotel",
                            NOVH: "hotel",
                            INGCA: "camping",
                            INGCH: "chhote",
                            INGH: "hotel",
                            INGM: "meuble",
                            ITEAC: "chhote",
                            ITEAG: "meuble",
                            MARK: "meuble",
                            MTF: "chhote",
                            OACTI: "activite",
                            OPBI: "billet",
                            OPBO: "boutique",
                            OPLM: "magasinlocation",
                            OPRE: "restaurant",
                            OPRF: "refuge",
                            OPTR: "transport",
                            OSCA: "camping",
                            OSCH: "chhote",
                            OSHO: "hotel",
                            OSMB: "meuble",
                            OSNOM: "nomade",
                            OSSEJ: "sejour",
                            UNIC: "camping",
                            WRESM: "meuble",
                            ZEPH: "meuble",
                            ELIB: "forfait",
                            RESAL: "meuble",
                            GEST: "meuble",
                            CVMB: "meuble",
                            CVCH: "chhote",
                            ADOC: "loisirs",
                            ADOCD: "loisirs"
                        }[e] || "indetermine"
                    },
                    Quota: function (e) {
                        ! function (e) {
                            e && e.idIntegration && e.api && d.ajax({
                                url: s.URLHelper.setPageCompatibleScheme("//quota.for-system.com/index.aspx"),
                                dataType: "jsonp",
                                data: {
                                    i: e.idIntegration,
                                    a: e.api
                                }
                            })
                        }(e)
                    },
                    CreeDevTracker: function (e, t, n) {
                        if (e && t && t.ID) {
                            try {
                                this.ChargeLibs(["GoogleAnalytics"], function () {
                                    try {
                                        e.tracker = _gat._createTracker(t.ID), t.Domaine && e.tracker._setDomainName(t.Domaine), e.tracker._setAllowLinker(!0), n && n()
                                    } catch (e) { }
                                })
                            } catch (e) { }
                        }
                    },
                    UI: {
                        Ajoute: function (e, t) {
                            for (var n, r = 0; n = e[r]; r++) s.OsBase.UI[n] = t
                        },
                        Parse: function (e) {
                            var t = e.match("(CF|CP|CC|CA|CG)*-*([A-Z0-9]+){1}-{1}([0-9]+)-*(.*)", "i");
                            if (5 != ((t || []).length || 0)) return null;
                            if ("OSMB" == t[2]) {
                                if ({
                                    29160: 1,
                                    33308: 1,
                                    33830: 1,
                                    33831: 1,
                                    30514: 1,
                                    32172: 1,
                                    30463: 1,
                                    27605: 1,
                                    27607: 1,
                                    27627: 1,
                                    27645: 1,
                                    27788: 1,
                                    27867: 1,
                                    27910: 1,
                                    27994: 1,
                                    27995: 1,
                                    28046: 1,
                                    28114: 1,
                                    28175: 1,
                                    28377: 1,
                                    28470: 1,
                                    29732: 1,
                                    29796: 1,
                                    30103: 1,
                                    30159: 1,
                                    30178: 1,
                                    30719: 1,
                                    30762: 1,
                                    32152: 1,
                                    32687: 1,
                                    34092: 1,
                                    41537: 1,
                                    30852: 1
                                }[t[3]]) return {
                                    ui: e.replace("OSMB", "CVMB"),
                                    type: t[1],
                                    source: "CVMB",
                                    id1: t[3],
                                    id2: t[4]
                                }
                            } else if ("OSCH" == t[2]) {
                                if ({
                                    37095: 1,
                                    30205: 1,
                                    30417: 1,
                                    28044: 1,
                                    28047: 1,
                                    28113: 1,
                                    30656: 1,
                                    41473: 1
                                }[t[3]]) return {
                                    ui: e.replace("OSCH", "CVCH"),
                                    type: t[1],
                                    source: "CVCH",
                                    id1: t[3],
                                    id2: t[4]
                                }
                            }
                            return {
                                ui: t[0],
                                type: t[1],
                                source: t[2],
                                id1: t[3],
                                id2: t[4]
                            }
                        }
                    },
                    SetJPath: function (e, t, n, r) {
                        s.JPath.set(e, t, n, r)
                    },
                    GetJPath: function (e, t) {
                        return s.JPath.get(e, t)
                    },
                    ExtensionLog: function (e) {
                        try {
                            e.heure = (new Date).toLocaleTimeString(), document._AllianceReseaux_ExtensionLog = document._AllianceReseaux_ExtensionLog || [], document._AllianceReseaux_ExtensionLog.push(e)
                        } catch (e) { }
                    },
                    Pax2NbPers: function (e) {
                        var t = (e.nbAdultes || 0) + (e.enfants || []).length;
                        return e.cmax && (0 == t || t > e.cmax) ? e.cmax : e.cmin && t < e.cmin ? e.cmin : t
                    },
                    IsMobile: function () {
                        return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))
                    },
                    StringifyXmlJSON: function (e, t) {
                        var i = "",
                            a = function (e, t, n) {
                                if (!(t == l || 5 < n || e.match(/[^a-z0-9-_]/gi))) switch (t.constructor) {
                                    case o.Object:
                                    case o.Array:
                                        if (d.isArray(t) && 0 == t.length) return;
                                        if (i += "<" + e + ' type="' + (d.isArray(t) ? "col" : "obj") + '">', d.isArray(t)) d(t).each(function (e, t) {
                                            a("item", t, n + 1)
                                        });
                                        else
                                            for (var r in t) a(r, t[r], n + 1);
                                        i += "</" + e + ">";
                                        break;
                                    case o.Number:
                                        i += "<" + e + ' type="num">' + t + "</" + e + ">";
                                        break;
                                    case o.String:
                                        i += "<" + e + ">" + s.OsBase.toXMLText(t) + "</" + e + ">"
                                }
                            };
                        return a(e, t, 0), i
                    }
                }, d.cookie = function (e, t, n) {
                    if (void 0 === t) {
                        var r = null;
                        if (document.cookie && "" != document.cookie)
                            for (var i = document.cookie.split(";"), a = 0; a < i.length; a++) {
                                var o = d.trim(i[a]);
                                if (o.substring(0, e.length + 1) == e + "=") {
                                    r = decodeURIComponent(o.substring(e.length + 1));
                                    break
                                }
                            }
                        return r
                    }
                    n = n || {}, null === t && (t = "", n.expires = -1);
                    var s, l = "";
                    n.expires && ("number" == typeof n.expires || n.expires.toUTCString) && ("number" == typeof n.expires ? (s = new Date).setTime(s.getTime() + 24 * n.expires * 60 * 60 * 1e3) : s = n.expires, l = "; expires=" + s.toUTCString());
                    var u = n.path ? "; path=" + n.path : "",
                        c = n.domain ? "; domain=" + n.domain : "",
                        p = n.secure ? "; secure" : "";
                    document.cookie = [e, "=", encodeURIComponent(t), l, u, c, p].join("")
                }
            }

            function e(e, t, n) {
                this.cible = e, this.nom = t, n._osEvt = this, e.evts && e.evts[t] && e.evts[t].push(n)
            }
        }(window, AllianceReseaux.jQuery, AllianceReseaux),
        function (n, e, r) {
            if (!r.Console) {
                var i = r.URLHelper.isPageLocalhost();
                r.Console = {}, e.each(["log", "dir", "time", "timeEnd", "groupCollapsed", "groupEnd", "timeStamp"], function (e, t) {
                    r.Console[t] = function () {
                        if (i) try {
                            var e = n.console;
                            if (e && e[t])
                                if (e[t].apply) e[t].apply(e, arguments);
                                else if (Function.prototype.bind) {
                                    Function.prototype.bind.call(e[t], e).apply(e, arguments)
                                }
                        } catch (e) { }
                    }
                }), r.Console.groupDir = function (e, t) {
                    r.Console.groupCollapsed(e), r.Console.dir(t), r.Console.groupEnd(e)
                }, r.Console.enable = function () {
                    i = !0
                }
            }
        }(window, AllianceReseaux.jQuery, AllianceReseaux),
        function (e, s, l) {
            s.Interne.Broker || (s.Interne.Broker = function () {
                function a(e, t) {
                    return e + "." + t
                }
                var i = this,
                    o = {};
                this.subscribe = function (e, t, n) {
                    var r, i;
                    "string" != typeof t && (n = t, t = "*"), i = a(e, t), null == (r = o[i]) && (r = l.Callbacks(), o[i] = r), r.add(n)
                }, this.subscribeOnce = function (e, t, n) {
                    var r;
                    "string" != typeof t && (n = t, t = "*"), r = function () {
                        i.unsubscribe(e, t, r), n.apply(i, arguments)
                    }, n.onceWrapper = r, i.subscribe(e, t, r)
                }, this.publish = function (e, t, n) {
                    var r, i;
                    "string" != typeof t && (n = t, t = "*"), i = a(e, t), s.Console.groupDir("AR.Events.publish " + i, n), null != (r = o[a(e, "*")]) && r.fire(n), "*" !== t && null != (r = o[i]) && r.fire(n)
                }, this.unsubscribe = function (e, t, n) {
                    var r;
                    a(e, t);
                    "string" != typeof t && (n = t, t = "*"), null != (r = o[a(e, t)]) && r.remove(n.onceWrapper || n)
                }
            }, s.Events = new s.Interne.Broker)
        }(window, AllianceReseaux, AllianceReseaux.jQuery),
        function (b, x, c) {
            null == c.Tracking && (c.Tracking = new function () {
                function m(e, t) {
                    if (!t || !e) return e;
                    for (var n in t) e = e.replace(new RegExp("\\$" + n, "gim"), t[n]);
                    return e
                }

                function g(e, t) {
                    if (!t || !e) return e;
                    if ("function" == typeof e) e = e(t);
                    else
                        for (var n in e) e[n] = m(e[n], t);
                    return e
                }
                var u = {},
                    i = this,
                    v = (this.Cree = function (t, e) {
                        try {
                            if (!t || !t.ID) return;
                            var n = u[t.ID];
                            if (n) return x.extend(!0, n.options, t), void a(t.ID, e);
                            n = u[t.ID] = {
                                options: t,
                                contexte: e || {}
                            }, t.tracker ? u[t.ID].tracker = t.tracker : (t.instancierTracker = null == t.instancierTracker || t.instancierTracker, t.tagManager ? t.instancierTracker && function (e, t, n, r, i) {
                                e[r] = e[r] || [], e[r].push({
                                    "gtm.start": (new Date).getTime(),
                                    event: "gtm.js"
                                });
                                var a = t.getElementsByTagName("script")[0],
                                    o = t.createElement("script");
                                o.async = !0, o.src = "https://www.googletagmanager.com/gtm.js?id=" + i, a.parentNode.insertBefore(o, a)
                            }(b, document, 0, "dataLayer", t.ID) : t.universal ? t.instancierTracker ? (c.OsBase.ChargeUniversalAnalytics(), c.OsBase.AttendreUniversalAnalytics(function () {
                                __gaTracker("create", t.ID, "auto", {
                                    name: t.ID.replace(/\-/gi, ""),
                                    cookieDomain: t.Domaine ? t.Domaine : "none",
                                    allowLinker: !0
                                }), u[t.ID].tracker = {}
                            })) : c.OsBase.AttendreUniversalAnalytics(function () {
                                u[t.ID].tracker = {}
                            }) : t.instancierTracker ? c.OsBase.ChargeLibs(["GoogleAnalytics"], function () {
                                var e = _gat._createTracker(t.ID);
                                t.Domaine && e._setDomainName(t.Domaine), e._setAllowLinker(!0), u[t.ID].tracker = e
                            }) : c.OsBase.Attendre(function () {
                                return b._gat
                            }, function () {
                                u[t.ID].tracker = tracker
                            }));
                            var r = c.OsBase.GetUrlGadget("/widgets/themes/std/json/tracking/dico.js");
                            c.OsBase.ChargeScript(r, {
                                idScript: r,
                                charset: "utf-8"
                            }), c.OsBase.Attendre(function () {
                                return !!i.GetDico
                            }, function () {
                                var e = i.GetDico();
                                if (n.options.Dico) {
                                    var t = c.OsBase.GetUrlGadget("/widgets/themes/std/json/tracking/dico-" + n.options.Dico + ".js");
                                    c.OsBase.ChargeScript(t, {
                                        idScript: t,
                                        charset: "utf-8"
                                    }), c.OsBase.Attendre(function () {
                                        return !!i["GetDico" + n.options.Dico]
                                    }, function () {
                                        x.extend(e, i["GetDico" + n.options.Dico]()), n.dico = e
                                    })
                                } else n.dico = e
                            })
                        } catch (e) { }
                    }, this.TrackDicoEvent = function (p, d, e, f) {
                        try {
                            if (!d || !p) return null;
                            var h = u[p];
                            if (!h) return;
                            x.extend(h.contexte, e), h.contexte && h.contexte.ui && !h.contexte.metier && (h.contexte.metier = c.OsBase.MetierParPrefixeUI(c.OsBase.UI.Parse(h.contexte.ui).source)), c.OsBase.Attendre(function () {
                                return h.dico
                            }, function () {
                                try {
                                    var e = h.dico[d + "#event"];
                                    if (e)
                                        for (var t = 0; t < e.length; t++) e[t](h.contexte);
                                    var n = h.dico[d + "#datalayer"];
                                    if (b.dataLayer && n) {
                                        n = x.extend(!0, {}, n);
                                        for (var r, i = 0; r = n[i]; i++) {
                                            var a = g(r, h.contexte);
                                            a.content && (a = g(a.content, h.contexte)), b.dataLayer.push(a)
                                        }
                                    }
                                    if (h.options.tagManager) return;
                                    var o = h.dico[d + "#pageview"];
                                    if (o) {
                                        var s = "string" == typeof o ? {
                                            page: o
                                        } : x.extend(!0, {}, o);
                                        s.page = m(s.page, h.contexte), y(p, s, f)
                                    }
                                    var l = h.dico[d],
                                        u = [];
                                    if (l) {
                                        for (var c = 0; c < 5; c++) u[c] = l[c], u[c] && (u[c] = m(u[c], h.contexte));
                                        v(p, u[0], u[1], u[2], u[3], u[4], f)
                                    }
                                } catch (e) { }
                            })
                        } catch (e) { }
                    }, this.TrackEvent = function (e, t, n, r, i, a, o) {
                        var s = {};
                        o && o.push(s);
                        try {
                            var l = u[e];
                            if (!l || l.options.tagManager) return;
                            t = (t || "").replace(/\s*>\s*$/gi, ""), n = (n || "").replace(/\s*>\s*$/gi, ""), r = (r || "").replace(/\s*>\s*$/gi, ""), a = l.options.baseUrlPage ? l.options.baseUrlPage.replace(/\s*\/\s*$/gi, "") + "/" + (a || "").replace(/^\s*\/\s*/gi, "") : a, l.options.universal ? c.OsBase.Attendre(function () {
                                return __gaTracker
                            }, function () {
                                __gaTracker(function () {
                                    c.OsBase.Attendre(function () {
                                        return __gaTracker.getByName(e.replace(/\-/gi, ""))
                                    }, function () {
                                        __gaTracker(e.replace(/\-/gi, "") + ".send", "event", t, n, r, null == i || null == i ? null : parseFloat(i), {
                                            page: a,
                                            hitCallback: function () {
                                                s.ok = !0
                                            }
                                        })
                                    })
                                })
                            }) : c.OsBase.Attendre(function () {
                                return l.tracker
                            }, function () {
                                l.tracker._trackEvent(t, n, r, null == i || null == i ? null : parseFloat(i)), s.ok = !0
                            })
                        } catch (e) {
                            s.ok = !0
                        }
                    }),
                    y = this.TrackPage = function (e, t, n) {
                        var r = {};
                        n && n.push(r);
                        try {
                            var i = u[e];
                            if (!i || i.options.tagManager) return;
                            var a = "string" == typeof t ? {
                                page: t
                            } : t;
                            a.page = i.options.baseUrlPage ? i.options.baseUrlPage.replace(/\s*\/\s*$/gi, "") + "/" + (a.page || "").replace(/^\s*\/\s*/gi, "") : a.page, i.options.universal ? c.OsBase.Attendre(function () {
                                return __gaTracker
                            }, function () {
                                __gaTracker(function () {
                                    c.OsBase.Attendre(function () {
                                        return __gaTracker.getByName(e.replace(/\-/gi, ""))
                                    }, function () {
                                        i.options.requireDisplayFeatures && __gaTracker(e.replace(/\-/gi, "") + ".require", "displayfeatures"), i.options.requireLinkId && __gaTracker(e.replace(/\-/gi, "") + ".require", "linkid", "linkid.js"), i.options.requireLinker && __gaTracker(e.replace(/\-/gi, "") + ".require", "linker"), i.options.linkerAutoLink && __gaTracker(e.replace(/\-/gi, "") + ".linker:autoLink", i.options.linkerAutoLink), i.options.anonymizeIp && __gaTracker(e.replace(/\-/gi, "") + ".set", "anonymizeIp", !0), __gaTracker(e.replace(/\-/gi, "") + ".send", "pageview", x.extend(!0, {}, a, {
                                            hitCallback: function () {
                                                r.ok = !0
                                            }
                                        }))
                                    })
                                })
                            }) : c.OsBase.Attendre(function () {
                                return i.tracker
                            }, function () {
                                i.tracker._trackPageview(a.page), r.ok = !0
                            })
                        } catch (e) {
                            r.ok = !0
                        }
                    },
                    a = (this.AddTransaction = function (e, t, n) {
                        var r = {};
                        n && n.push(r);
                        try {
                            var i = u[e];
                            if (!i) return;
                            if (i.options.tagManager) return b.dataLayer ? void b.dataLayer.push(x.extend(!0, {}, t, {
                                eventCallback: function () {
                                    r.ok = !0
                                }
                            })) : void (r.ok = !0);
                            i.options.universal && c.OsBase.Attendre(function () {
                                return __gaTracker
                            }, function () {
                                __gaTracker(function () {
                                    c.OsBase.Attendre(function () {
                                        return __gaTracker.getByName(e.replace(/\-/gi, ""))
                                    }, function () {
                                        __gaTracker(e.replace(/\-/gi, "") + ".require", "ecommerce", "ecommerce.js"), __gaTracker(e.replace(/\-/gi, "") + ".ecommerce:addTransaction", x.extend(!0, {}, t, {
                                            hitCallback: function () {
                                                r.ok = !0
                                            }
                                        }))
                                    })
                                })
                            })
                        } catch (e) {
                            r.ok = !0
                        }
                    }, this.AddItem = function (e, t, n) {
                        var r = {};
                        n && n.push(r);
                        try {
                            var i = u[e];
                            if (!i) return;
                            i.options.universal && c.OsBase.Attendre(function () {
                                return __gaTracker
                            }, function () {
                                __gaTracker(function () {
                                    c.OsBase.Attendre(function () {
                                        return __gaTracker.getByName(e.replace(/\-/gi, ""))
                                    }, function () {
                                        __gaTracker(e.replace(/\-/gi, "") + ".require", "ecommerce", "ecommerce.js"), __gaTracker(e.replace(/\-/gi, "") + ".ecommerce:addItem", x.extend(!0, {}, t, {
                                            hitCallback: function () {
                                                r.ok = !0
                                            }
                                        }))
                                    })
                                })
                            })
                        } catch (e) {
                            r.ok = !0
                        }
                    }, this.TrackTrans = function (e) {
                        try {
                            var t = u[e];
                            if (!t) return;
                            t.options.universal && c.OsBase.Attendre(function () {
                                return __gaTracker
                            }, function () {
                                __gaTracker(function () {
                                    c.OsBase.Attendre(function () {
                                        return __gaTracker.getByName(e.replace(/\-/gi, ""))
                                    }, function () {
                                        __gaTracker(e.replace(/\-/gi, "") + ".require", "ecommerce", "ecommerce.js"), __gaTracker(e.replace(/\-/gi, "") + ".ecommerce:send")
                                    })
                                })
                            })
                        } catch (e) { }
                    }, this.Contexte = function (e, t) {
                        if (void 0 === t) return (u[e] || {}).contexte;
                        u[e] && x.extend(u[e].contexte, t)
                    })
            })
        }(window, AllianceReseaux.jQuery, AllianceReseaux),
        function (e, t, n) {
            n.Tracking.Mappers = n.Tracking.Mappers || {}, n.Tracking.Mappers.TagManager = n.Tracking.Mappers.TagManager || {}, n.Tracking.Mappers.TagManager.UniversalEC = {
                Checkout: function (o) {
                    return o = AllianceReseaux.jQuery.extend(!0, {
                        event: "checkout",
                        step: 1
                    }, o),
                        function (e) {
                            for (var t, n, r = [], i = 0; i < e.osTracker.Paniers.length; i++) {
                                t = e.osTracker.Paniers[i];
                                for (var a = 0; a < t.Produits.length; a++) n = t.Produits[a], r.push({
                                    name: n.Nom,
                                    id: n.Sku,
                                    price: n.Prix,
                                    category: n.Categorie,
                                    quantity: n.Qt
                                })
                            }
                            return {
                                event: o.event,
                                currencyCode: e.osTracker.Paniers[0].Devise.CodeAlpha,
                                ecommerce: {
                                    checkout: {
                                        actionField: {
                                            step: o.step
                                        },
                                        products: r
                                    }
                                }
                            }
                        }
                },
                Purchase: function (s) {
                    return s = AllianceReseaux.jQuery.extend(!0, {
                        event: "purchase"
                    }, s),
                        function (e) {
                            for (var t, n, r = 0, i = [], a = 0; a < e.osTracker.Paniers.length; a++)
                                if (2 == (t = e.osTracker.Paniers[a]).Etat || 3 == t.Etat) {
                                    r += t.Total;
                                    for (var o = 0; o < t.Produits.length; o++) n = t.Produits[o], i.push({
                                        name: n.Nom,
                                        id: n.Sku,
                                        price: n.Prix,
                                        category: n.Categorie,
                                        quantity: n.Qt
                                    })
                                } return {
                                    event: s.event,
                                    ecommerce: {
                                        currencyCode: e.osTracker.Paniers[0].Devise.CodeAlpha,
                                        purchase: {
                                            actionField: {
                                                id: e.osTracker.IdActionContact,
                                                revenue: r,
                                                affiliation: e.osTracker.Domaine
                                            },
                                            products: i
                                        }
                                    }
                                }
                        }
                }
            }
        }(window, AllianceReseaux.jQuery, AllianceReseaux),
        function (n) {
            function r() {
                if (n.browser.msie) {
                    var e = n(document).height(),
                        t = n(window).height();
                    return [window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth, e - t < 20 ? t : e]
                }
                return [n(document).width(), n(document).height()]
            }

            function i(e) {
                if (e) return e.call(n.mask)
            }
            var a, o, s, l, u, c;
            n.tools = n.tools || {
                version: "1.2.5"
            }, a = n.tools.expose = {
                conf: {
                    maskId: "exposeMask",
                    loadSpeed: "slow",
                    closeSpeed: "fast",
                    closeOnClick: !0,
                    closeOnEsc: !0,
                    zIndex: 9998,
                    opacity: .8,
                    startOpacity: 0,
                    color: "#fff",
                    onLoad: null,
                    onClose: null
                }
            }, n.mask = {
                load: function (e, t) {
                    if (l) return this;
                    "string" == typeof e && (e = {
                        color: e
                    }), e = e || u, u = e = n.extend(n.extend({}, a.conf), e), (o = n("#" + e.maskId)).length || (o = n("<div/>").attr("id", e.maskId), n("body").append(o));
                    r();
                    return o.css({
                        position: "fixed",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        display: "none",
                        opacity: e.startOpacity,
                        zIndex: e.zIndex
                    }), e.color && o.css("backgroundColor", e.color), !1 === i(e.onBeforeLoad) || (e.closeOnEsc && n(document).bind("keydown.mask", function (e) {
                        27 == e.keyCode && n.mask.close(e)
                    }), e.closeOnClick && o.bind("click.mask", function (e) {
                        n.mask.close(e)
                    }), n(window).bind("resize.mask", function () {
                        n.mask.fit()
                    }), t && t.length && (c = t.eq(0).css("zIndex"), n.each(t, function () {
                        var e = n(this);
                        /relative|absolute|fixed/i.test(e.css("position")) || e.css("position", "relative")
                    }), s = t.css({
                        zIndex: Math.max(e.zIndex + 1, "auto" == c ? 0 : c)
                    })), o.css({
                        display: "block"
                    }).fadeTo(e.loadSpeed, e.opacity, function () {
                        n.mask.fit(), i(e.onLoad), l = "full"
                    }), l = !0), this
                },
                close: function () {
                    if (l) {
                        if (!1 === i(u.onBeforeClose)) return this;
                        o.fadeOut(u.closeSpeed, function () {
                            i(u.onClose), s && s.css({
                                zIndex: c
                            }), l = !1
                        }), n(document).unbind("keydown.mask"), o.unbind("click.mask"), n(window).unbind("resize.mask")
                    }
                    return this
                },
                fit: function () {
                    if (l) {
                        var e = r();
                        o.css({
                            width: e[0],
                            height: e[1]
                        })
                    }
                },
                getMask: function () {
                    return o
                },
                isLoaded: function (e) {
                    return e ? "full" == l : l
                },
                getConf: function () {
                    return u
                },
                getExposed: function () {
                    return s
                }
            }, n.fn.mask = function (e) {
                return n.mask.load(e), this
            }, n.fn.expose = function (e) {
                return n.mask.load(e, this), this
            }
        }(AllianceReseaux.jQuery),
        function (h) {
            function n(e, o) {
                var t, s, l, u = this,
                    c = e.add(u),
                    p = h(window),
                    d = h.tools.expose && (o.mask || o.expose),
                    f = Math.random().toString().slice(10);
                d && ("string" == typeof d && (d = {
                    color: d
                }), d.closeOnClick = d.closeOnEsc = !1);
                var n = o.target || e.attr("rel");
                if (!(s = n ? h(n) : e).length) throw "Could not find osLibOverlay: " + n;
                e && -1 == e.index(s) && e.click(function (e) {
                    return u.load(e), e.preventDefault()
                }), h.extend(u, {
                    load: function (e) {
                        if (u.isOpened()) return u;
                        var t = g[o.effect];
                        if (!t) throw 'osLibOverlay: cannot find effect : "' + o.effect + '"';
                        if (o.oneInstance && h.each(m, function () {
                            this.close(e)
                        }), (e = e || h.Event()).type = "onBeforeLoad", c.trigger(e), e.isDefaultPrevented()) return u;
                        l = !0, d && h(s).expose(d);
                        var n = o.top,
                            r = o.left,
                            i = s.outerWidth({
                                margin: !0
                            }),
                            a = s.outerHeight({
                                margin: !0
                            });
                        return "string" == typeof n && (n = "center" == n ? Math.max((p.height() - a) / 2, 0) : parseInt(n, 10) / 100 * p.height()), "center" == r && (r = Math.max((p.width() - i) / 2, 0)), t[0].call(u, {
                            top: n,
                            left: r
                        }, function () {
                            l && (e.type = "onLoad", c.trigger(e))
                        }), d && o.closeOnClick && h.mask.getMask().one("click", u.close), o.closeOnClick && h(document).bind("click." + f, function (e) {
                            h(e.target).parents(s).length || u.close(e)
                        }), o.closeOnEsc && h(document).bind("keydown." + f, function (e) {
                            27 == e.keyCode && u.close(e)
                        }), u
                    },
                    close: function (e) {
                        return u.isOpened() ? ((e = e || h.Event()).type = "onBeforeClose", c.trigger(e), e.isDefaultPrevented() ? void 0 : (l = !1, g[o.effect][1].call(u, function () {
                            e.type = "onClose", c.trigger(e)
                        }), h(document).unbind("click." + f).unbind("keydown." + f), d && h.mask.close(), u)) : u
                    },
                    getOverlay: function () {
                        return s
                    },
                    getTrigger: function () {
                        return e
                    },
                    getClosers: function () {
                        return t
                    },
                    isOpened: function () {
                        return l
                    },
                    getConf: function () {
                        return o
                    }
                }), h.each("onBeforeLoad,onStart,onLoad,onBeforeClose,onClose".split(","), function (e, t) {
                    h.isFunction(o[t]) && h(u).bind(t, o[t]), u[t] = function (e) {
                        return e && h(u).bind(t, e), u
                    }
                }), (t = s.find(o.close || ".close")).length || o.close || (t = h('<a class="close"></a>'), s.prepend(t)), t.click(function (e) {
                    u.close(e)
                }), o.load && u.load()
            }
            h.tools = h.tools || {
                version: "1.2.5"
            }, h.tools.osLibOverlay = {
                addEffect: function (e, t, n) {
                    g[e] = [t, n]
                },
                conf: {
                    close: null,
                    closeOnClick: !0,
                    closeOnEsc: !0,
                    closeSpeed: "fast",
                    effect: "default",
                    fixed: !h.browser.msie || 6 < h.browser.version,
                    left: "center",
                    load: !1,
                    mask: null,
                    oneInstance: !0,
                    speed: "normal",
                    target: null,
                    top: "10%"
                }
            };
            var m = [],
                g = {};
            h.tools.osLibOverlay.addEffect("default", function (e, t) {
                var n = this.getConf(),
                    r = h(window);
                n.fixed || (e.top += r.scrollTop(), e.left += r.scrollLeft()), e.position = n.fixed ? "fixed" : "absolute", this.getOverlay().css(e).fadeIn(n.speed, t)
            }, function (e) {
                this.getOverlay().fadeOut(this.getConf().closeSpeed, e)
            }), h.fn.osLibOverlay = function (e) {
                var t = this.data("osLibOverlay");
                return t || (h.isFunction(e) && (e = {
                    onBeforeLoad: e
                }), e = h.extend(!0, {}, h.tools.osLibOverlay.conf, e), this.each(function () {
                    t = new n(h(this), e), m.push(t), h(this).data("osLibOverlay", t)
                }), e.api ? t : this)
            }
        }(AllianceReseaux.jQuery),
        function (m, g) {
            if (null == AllianceReseaux.OsOverlay) {
                var v = {};
                g(m).scroll(function () {
                    var e = g(document).height();
                    e && g(".os-overlay-mask").height(e)
                }), AllianceReseaux.OsOverlay = function (n) {
                    if (n) {
                        function e() {
                            var e = g(g(".os-overlay").last()),
                                t = parseInt((g(m).width() - e.width()) / 2, 10) + g(document).scrollLeft();
                            t = t < 0 ? 0 : t, e.css("left", t)
                        }
                        var t = AllianceReseaux.OsBase.CreeGuid(),
                            r = n.theme || "std",
                            i = n.personnalisation || "",
                            a = n.nePasFermerSurClic,
                            o = this.Ferme = function () {
                                g(".os-overlay:visible").last().osLibOverlay().close()
                            },
                            s = (this.FermerSurClic = function (e) {
                                a = !e
                            }, v[n.persistance]),
                            l = s ? g(s) : g(n.cible).addClass(r).addClass(i).addClass("os-overlay").appendTo(g("body"));
                        s || g.data(l[0], "guid", t);
                        var u = "_osoverlay_fixobjects_" + (new Date).getTime(),
                            c = "_osoverlay_fixoverlays_" + (new Date).getTime();
                        g.browser.msie && !g.data(document, "__scrollBUGIE9") && (g.data(document, "__scrollBUGIE9", !0), g(document).bind("scroll", function () {
                            0 < g(".overlay:visible").length && g(document).scrollTop() < 10 && g(document).scrollTop(10)
                        })), g.browser.msie && 0 == g(document).scrollTop() && g(document).scrollTop(10);
                        var p = {
                            fixed: !1,
                            top: 50,
                            closeOnClick: !1,
                            closeOnEsc: !1,
                            load: !0,
                            oneInstance: !1,
                            onLoad: function () {
                                n.onLoad && n.onLoad(), g(m).resize(e), e()
                            },
                            onClose: function () {
                                document[u].css("visibility", ""), n.affichageunique && document[c].css("visibility", ""), n.onClose && n.onClose();
                                var e = this.getOverlay(),
                                    t = g.data(e[0], "mask");
                                n.persistance || g(e).remove(), g(t).remove(), g(".os-overlay-mask").last().css("visibility", ""), !1
                            },
                            onBeforeClose: function () {
                                return document._fix_ie_fermeture_overlay_document_location ? document._fix_ie_fermeture_overlay_document_location = !1 : (n.onBeforeClose && n.onBeforeClose(), !0)
                            },
                            onBeforeLoad: function () {
                                if (document[u] = g("object:visible").css("visibility", "hidden"), n.affichageunique) {
                                    var e = g(".os-overlay");
                                    document[c] = g(e.splice(0, e.length - 1) || []), document[c].css("visibility", "hidden")
                                }
                                n.onBeforeLoad && n.onBeforeLoad()
                            }
                        };
                        0 == g(".os-overlay-mask").length && (p.mask = {
                            color: "#000",
                            loadSpeed: 0,
                            opacity: .7
                        }), s ? (l.osLibOverlay().load(), overlay = s) : (overlay = l.osLibOverlay(p)[0], n.persistance && (v[n.persistance] = overlay));
                        var d = g("#exposeMask").removeClass("os-overlay-mask").addClass("os-overlay-mask")[0];
                        if (p.mask) {
                            h = g(d).click(function () {
                                a || (n.onClose && n.onClose(), o())
                            });
                            g.data(l[0], "mask", h[0])
                        } else {
                            var f = parseInt(g(".os-overlay-mask").last().css("z-index"), 10) + 2;
                            l.css("z-index", f + 1);
                            var h = g(".os-overlay-mask").last().clone().css("z-index", f).appendTo(g("body")).click(function () {
                                a || (n.onClose && n.onClose(), o())
                            });
                            g.data(l[0], "mask", h[0])
                        }
                        g(".os-overlay-mask:not(:last)").css("visibility", "hidden")
                    }
                }
            }
        }(window, AllianceReseaux.jQuery),
        function (s, t) {
            if (null == AllianceReseaux.OsStorage) {
                var l = AllianceReseaux.OsBase.GetUrlGadget(""),
                    n = null,
                    r = !1,
                    u = [];
                if (s.localStorage && !AllianceReseaux.OsStorage) {
                    AllianceReseaux.OsStorage = i;

                    function e(e) {
                        if ("string" == typeof e.data && 0 == e.data.indexOf("__lit")) {
                            var t = u[e.data.substring(0, 41)];
                            t && t(e.data.substring(41))
                        }
                    }
                    s.addEventListener ? s.addEventListener("message", e, !0) : s.attachEvent && s.attachEvent("onmessage", e)
                } else AllianceReseaux.OsStorage = i
            }

            function i(e) {
                r || AllianceReseaux.OsBase.Attendre(function () {
                    return 0 < t("body").length
                }, function () {
                    n = n || t("<iframe style='display:none;' src='" + l + "/widgets/osstorage/local.html'></iframe>").load(function () {
                        r = !0
                    }).appendTo(t("body"))[0]
                });

                function o(e) {
                    AllianceReseaux.OsBase.Attendre(function () {
                        return r
                    }, function () {
                        e(n)
                    })
                }
                this.Lit = function (r, i, a) {
                    return s.localStorage && r && "" != r ? (o(function (e) {
                        var t = AllianceReseaux.OsBase.CreeGuid(),
                            n = "__lit" + (a ? "lock" : "");
                        u["__lit" + t] = i, e.contentWindow.postMessage(n + t + r, l)
                    }), !0) : (i(null), !1)
                }, this.Ecrit = function (n, r, i) {
                    return !(!s.localStorage || !n || "" == n) && (o(function (e) {
                        var t = new Date;
                        t.setDate(t.getDate() + 2), e.contentWindow.postMessage("__ecrit" + n + "__expiration" + (i && i.getTime ? i.getTime() : t.getTime()) + "__donnees" + r, l)
                    }), !0)
                }, this.UnLock = function (t) {
                    return !(!s.localStorage || !t || "" == t) && (o(function (e) {
                        e.contentWindow.postMessage("__unlock" + t, l)
                    }), !0)
                }
            }
        }(window, AllianceReseaux.jQuery),
        function (T, S) {
            if (!AllianceReseaux.PopInPanier) {
                var r = "<style>.OsPanierPopIn { font-size:12px; background-color:#fff; border-radius:4px; width:600px; min-height:100px; color:#000; } .OsPanierPopIn .Clear { clear:both; }\n .OsPanierPopIn .BlocAttente { display:none; }\n .OsPanierPopIn.Attente .BlocAttente { display:block; }\n .OsPanierPopIn.Attente .BlocContenu { display:none; }\n .OsPanierPopIn.Attente .close { display:none; }\n .OsPanierPopIn .BlocPage { padding:10px; }\n .OsPanierPopIn .BlocTitre { background-image: none; background-color: transparent; border-bottom: 1px dotted #CCC; color: #666; font-size: 14px; font-weight: bold; line-height: 23px; margin-bottom: 5px; text-align: left; padding: 3px 0 0; }\n .OsPanierPopIn .BlocAttente { height:100px; width:100%; }\n .OsPanierPopIn .TableSupplement { width:100%; font-size:12px;border-bottom: 1px solid #E6E7E8;padding-bottom: 0; }\n .OsPanierPopIn .TableSupplement TD { border:0; padding:0; vertical-align:top; text-align:left; }\n .OsPanierPopIn .BlocContenu { width:100%; }\n .OsPanierPopIn .BlocSupplement .Info { color: white; font-weight: bold; cursor: help; display: inline; margin-left: 5px; margin-right: 0px; border-radius: 4px; padding: 1px 4px; border: 1px solid #292929; background-color: #A99E96; font-size: 9px; box-shadow: 1px 1px 2px #888; }\n .OsPanierPopIn .BlocSupplement .Info.Over { background-color: #000; }\n .OsPanierPopIn.OverlayPlusInfo { width:400px; border-radius: 4px; padding:15px; font-size:15px; }\n .OsPanierPopIn.Lock .close { background:url(//gadget.open-system.fr/widgets/themes/std/commun/images/close.png) no-repeat; position:absolute; right:-15px; top:-15px; cursor:pointer; height:35px;  width:35px; padding:0; border:none; }\n .OsPanierPopIn.Lock .close span { display:none; } .OsPanierPopIn.Lock.overlay .close span { display:block; }\n .OsPanierPopIn .OverlayLibelle { border-bottom:1px dotted #CCC; color:#666; font-size:15px; font-weight:bold; }\n .OsPanierPopIn .OverlayDescription { margin-top:10px;margin-bottom:10px; font-size:15px; }\n .OsPanierPopIn .BlocSupplement .Operation { width:292px; }\n .OsPanierPopIn .BlocSupplement .NbPers { float:right; width:45px; line-height:25px; padding: 5px 0 0 0; text-align:center; padding: 2px 0 0 0; }\n .OsPanierPopIn .BlocSupplement .Quantite { float:right; width:45px; padding: 5px 0 0 0; text-align:right; }\n .OsPanierPopIn .BlocSupplement .Quantite select { background: none repeat scroll 0 0 white; border: 1px solid #DDD; color: #8C8C8C; font-size: 11px; height: 18px; width:35px; padding:0; -webkit-padding:0; -webkit-appearance:menulist; }\n .OsPanierPopIn .BlocSupplement .Libelle { line-height:25px; padding: 2px 0px 0px 0; color:#000; }\n .OsPanierPopIn .BlocSupplement .Operateur { float:right; width:20px; line-height:25px; text-align:center; padding: 2px 0 0 0; }\n .OsPanierPopIn .BlocSupplement .Prix { float:right; width:65px; line-height:25px; text-align:right; padding: 2px 0 0 0; }\n .OsPanierPopIn .BlocSupplement .NbJours { float:right; width:42px; line-height:25px; text-align:center; padding: 2px 0 0 0; }\n .OsPanierPopIn .BlocSupplement .Total { float:right; width:65px; line-height: 25px; font-weight: bold; font-size: 13px; text-align:right; padding: 2px 0px 0px 0;}\n .OsPanierPopIn .BlocPrix { padding-top: 10px; color: #333; float:right; width:110px; }\n .OsPanierPopIn .BlocPrix .LibellePrixOption { float: left; line-height: 25px; font-weight: bold; color:#666; font-size: 14px; }\n .OsPanierPopIn .BlocPrix .PrixOption { float: right; line-height: 25px; font-weight: bold; font-size: 13px; }\n .OsPanierPopIn .BlocPrix .BlocPrixTotal { color: black; border-top: 1px solid #E6E7E8; display:none; }\n .OsPanierPopIn .BlocPrix .LibellePrixTotal  { float: left; line-height: 25px; font-weight: bold; font-size: 15px; text-transform: uppercase; }\n .OsPanierPopIn .BlocPrix .PrixTotal { float: right; line-height: 25px; font-weight: bold; font-size: 18px; }\n </style>";
                S(function () {
                    S('<div class="OsPanierPopIn CssCustom Attente">' + r + '<div class="BlocPage"><div class="BlocAttente"></div><div class="BlocContenu js-bloc-contenu"></div></div></div>').css("visibility", "hidden").css("position", "absolute").css("top", "-2000px").appendTo(S("body"))
                });
                AllianceReseaux.PopInPanier = function (e) {
                    var a = (e || {}).langue || "fr",
                        w = null,
                        l = null,
                        i = null,
                        t = null,
                        j = null,
                        A = {
                            fr: {
                                choixsupplements: "Besoin de suppléments?",
                                totalsupplements: "Total",
                                total: "Total",
                                annuler: "Annuler",
                                ajouteraupanier: "Continuer",
                                plusdinfos: "Plus d'infos",
                                jour: "jour",
                                jours: "jours",
                                abreviationpers: "pers.",
                                ajoutActivites: "Sélection d'activités proposées par nos partenaires locaux.",
                                produitAjoute: "Le produit a été ajouté à votre panier",
                                hebergementAjoute: "Réservez des activités pour votre séjour.",
                                nonMerciActivites: "Non merci, terminer ma réservation",
                                produitsAjoutes: "Ces produits viennent d'être ajoutés à votre panier",
                                continuerMesAchats: "Continuer mes achats",
                                passerMaCommande: "Passer ma commande",
                                chambre: "Chambre",
                                pasDeSupplementMerci: "Pas de suppléments, merci"
                            },
                            uk: {
                                choixsupplements: "Need supplements?",
                                totalsupplements: "Total",
                                total: "Total",
                                annuler: "Back",
                                ajouteraupanier: "Next",
                                plusdinfos: "More info",
                                jour: "day",
                                jours: "days",
                                abreviationpers: "pers.",
                                ajoutActivites: "A selection of activities organised by our local partners.",
                                hebergementAjoute: "Book activities for your stay.",
                                nonMerciActivites: "No thanks, finish my booking",
                                produitAjoute: "The item has just been added to your basket",
                                produitsAjoutes: "These items have just been added to your basket",
                                continuerMesAchats: "Continue shopping",
                                passerMaCommande: "Pay my order",
                                chambre: "Room",
                                pasDeSupplementMerci: "No supplements, thank you"
                            },
                            pt: {
                                choixsupplements: "Escolha de suplementos?",
                                totalsupplements: "Total",
                                total: "Total",
                                annuler: "Cancelar",
                                ajouteraupanier: "Continuar",
                                plusdinfos: "Mais informação",
                                jour: "dia",
                                jours: "dias",
                                abreviationpers: "pess.",
                                ajoutActivites: "Souhaitez-vous ajouter des activités pour votre séjour ?",
                                hebergementAjoute: "L'hébergement a été ajouté à votre panier",
                                nonMerciActivites: "Non merci, passer ma commande",
                                produitAjoute: "O produto foi adicionado ao seu carrinho",
                                produitsAjoutes: "Estes produtos acabam de ser adicionados ao seu carrinho",
                                continuerMesAchats: "Continuar as minhas compras",
                                passerMaCommande: "Fazer a meu pedido",
                                chambre: "Quarto",
                                pasDeSupplementMerci: "Continuar"
                            },
                            es: {
                                choixsupplements: "¿Necesitas suplementos?",
                                totalsupplements: "Total",
                                total: "Total",
                                annuler: "Atrás",
                                ajouteraupanier: "Adelante",
                                plusdinfos: "+ info",
                                jour: "día",
                                jours: "días",
                                abreviationpers: "pers.",
                                ajoutActivites: "Una selección de las actividades ofrecidas por nuestros socios locales.",
                                hebergementAjoute: "Reserve las actividades para su estancia.",
                                nonMerciActivites: "No gracias, deseo finalizar mi reserva",
                                produitAjoute: "El producto ha sido añadido a su cesta",
                                produitsAjoutes: "Los productos han sido añadidos a su cesta",
                                continuerMesAchats: "Seguir comprando",
                                passerMaCommande: "Validar mi pedido",
                                chambre: "Habitación",
                                pasDeSupplementMerci: "Sin suplementos gracias"
                            },
                            de: {
                                choixsupplements: "Brauche Ergänzungen?",
                                totalsupplements: "Gesamt",
                                total: "Gesamt",
                                annuler: "Zurück",
                                ajouteraupanier: "Weiter",
                                plusdinfos: "+ info",
                                jour: "tag",
                                jours: "tage",
                                abreviationpers: "pers.",
                                ajoutActivites: "Eine Auswahl an Aktivitäten von unseren lokalen Partnern.",
                                hebergementAjoute: "Buchen Sie Aktivitäten für Ihren Aufenthalt.",
                                nonMerciActivites: "Nein danke, Buchung abschließen",
                                produitAjoute: "Diese Produkte wurden soeben Ihrem Warenkorb hinzugefügt",
                                produitsAjoutes: "Diese Produkte wurden soeben Ihrem Warenkorb hinzugefügt",
                                continuerMesAchats: "Einkauf fortsetzen",
                                passerMaCommande: "Bestellen",
                                chambre: "Zimmer",
                                pasDeSupplementMerci: "Keine Ergänzungen, danke"
                            },
                            nl: {
                                choixsupplements: "Supplementen nodig?",
                                totalsupplements: "Totaal",
                                total: "Totaal",
                                annuler: "Terug",
                                ajouteraupanier: "Volgende",
                                plusdinfos: "+ info",
                                jour: "dag",
                                jours: "dagen",
                                abreviationpers: "pers.",
                                ajoutActivites: "Een selectie activiteiten aangeboden door onze lokale partnerbedrijven.",
                                hebergementAjoute: "Reserveer activiteiten voor uw verblijf.",
                                nonMerciActivites: "Nee, bedankt, reservering voltooien",
                                produitAjoute: "Het product is toegevoegd aan uw winkelwagen",
                                produitsAjoutes: "De producten zijn toegevoegd aan uw winkelwagen",
                                continuerMesAchats: "Verder winkelen",
                                passerMaCommande: "Bestellen",
                                chambre: "Kamer",
                                pasDeSupplementMerci: "Geen supplementen, bedankt"
                            },
                            ca: {
                                choixsupplements: "Necessites suplements?",
                                totalsupplements: "Total",
                                total: "Total",
                                annuler: "Enrere",
                                ajouteraupanier: "Endavant",
                                plusdinfos: "+ info",
                                jour: "dia",
                                jours: "dies",
                                abreviationpers: "pers.",
                                ajoutActivites: "Una selecció d'activitats proposades pels nostres col·laboradors locals.",
                                hebergementAjoute: "Reserveu activitats per la vostra estada.",
                                nonMerciActivites: "No, gràcies, acabar la meva reserva",
                                produitAjoute: "El producte ha estat afegit a la cistella",
                                produitsAjoutes: "Aquests productes han estat afegits a la cistella",
                                continuerMesAchats: "Continuar comprant",
                                passerMaCommande: "Validar la comanda",
                                chambre: "Habitació",
                                pasDeSupplementMerci: "Sense suplements, gràcies"
                            },
                            it: {
                                choixsupplements: "Hai bisogno di integratori?",
                                totalsupplements: "Totale",
                                total: "Totale",
                                annuler: "Indietro",
                                ajouteraupanier: "Avanti",
                                plusdinfos: "+ info",
                                jour: "giorno",
                                jours: "giorni",
                                abreviationpers: "pers.",
                                ajoutActivites: "Una selezione di attività proposte dai nostri partner locali.",
                                hebergementAjoute: "Prenota le attività per il soggiorno.",
                                nonMerciActivites: "No grazie, concludo la prenotazione",
                                produitAjoute: "Questi prodotti sono appena stati aggiunti al carrello",
                                produitsAjoutes: "Questi prodotti sono appena stati aggiunti al carrello",
                                continuerMesAchats: "Continua lo shopping",
                                passerMaCommande: "Procedi",
                                chambre: "Stanza",
                                pasDeSupplementMerci: "Nessun supplemento, grazie"
                            }
                        }[a];
                    this.OuvreSupplements = function (k) {
                        w = S('<div class="OsPanierPopIn Lock CssCustom Attente oslangue-' + a + ' ">' + r + '<div class="BlocPage"><div class="BlocAttente"></div><div class="BlocContenu js-blocContenu"><div class="BlocProduits js-blocProduits"><div class="BlocProduit js-blocProduit"><div class="BlocTitre">' + A.choixsupplements + '<span class="js-titre-produit"></span></div><div class="BlocSupplement js-blocSupplement" /><div class="BlocPrix"><div class="BlocPrixOption"><div class="LibellePrixOption">' + A.totalsupplements + ' :</div><div class="PrixOption js-prixOption" /><div class="Clear" /></div><div class="BlocPrixTotal"><div class="LibellePrixTotal">' + A.total + ' :</div><div class="PrixTotal js-prixTotal" /><div class="Clear" /></div><div class="Clear" /></div><div class="Clear" /></div></div><div class="BlocBoutons"><div class="Bouton BoutonAjouter js-boutonAjouter"><a href="javascript:void(0);"><span class="js-ajout-panier">' + A.ajouteraupanier + '</span></a></div><div class="js-cible-boutons-libres" /><div class="Clear" /></div></div></div></div>');
                        (j = {
                            calcultaxe: null,
                            annulation: !0
                        }).overlay = new AllianceReseaux.OsOverlay({
                            cible: w,
                            onLoad: function () {
                                w.find(".close").empty().append("<span>" + (AllianceReseaux.Regional[a] || AllianceReseaux.Regional.fr).closeOverlay + "</span>");
                                var e = w.find(".js-cible-boutons-libres").removeClass("js-cible-boutons-libres");
                                k.surAffichage && k.surAffichage({
                                    cibleBoutonsLibres: e
                                })
                            },
                            onClose: function () {
                                j.fermer = !0, j.calcultaxe || (k.selection || function () { })(j)
                            },
                            theme: k.theme,
                            nePasFermerSurClic: !0
                        }), l = w.find(".js-blocContenu").removeClass("js-blocContenu"), w.find(".js-boutonAjouter").removeClass("js-boutonAjouter").click(function () {
                            k.trackingID && AllianceReseaux.Tracking.TrackDicoEvent(k.trackingID, "widget-popin-supplements-continuer"), j.calcultaxe = n(), j.overlay.FermerSurClic(!1), w.addClass("Attente"), (k.selection || function () { })(j)
                        });

                        function i(e, t, n) {
                            var r = t.find(".js-blocSupplement").removeClass("js-blocSupplement"),
                                i = t.find(".js-prixOption").removeClass("js-prixOption"),
                                a = t.find(".js-prixTotal").removeClass("js-prixTotal"),
                                o = t.find(".js-titre-produit").removeClass("js-titre-produit");

                            function s(e) {
                                return AllianceReseaux.OsBase.GenereBlocPrix({
                                    prix: e,
                                    devise: k.devise
                                }).html
                            }
                            k.qte && 1 < k.qte && o.text(" - " + A.chambre + " " + (n + 1) + " : ");
                            for (var l = !1, u = !1, c = 0;
                                (p = e.Supplements[c]) && (!l || !u); c++) l = l || 1 < p.NbJours, u = u || !p.Obligatoire || 0 < p.Quantite && (p.NbPers || k.nbpers);
                            var p, d = !1;
                            for (c = 0; p = e.Supplements[c]; c++) p.Obligatoire && (d = !0);

                            function f() {
                                var n = 0,
                                    r = 0;
                                t.find("select").each(function () {
                                    var e = S.data(this, "supplement");
                                    r += parseInt(this.options[this.selectedIndex].value);
                                    var t = this.options[this.selectedIndex].value * e.prix * (e.supplement.NbJours || 1);
                                    e.blocTotal.html(s(t)), n += 1 == e.supplement.SurPlace ? 0 : t
                                }), i.html(s(n)), a.html(s(n + (k.prix || 0))), d || 0 !== r ? w.find(".js-ajout-panier").text(A.ajouteraupanier) : w.find(".js-ajout-panier").text(A.pasDeSupplementMerci)
                            }
                            for (c = 0; p = e.Supplements[c]; c++) {
                                for (var h = 1 === p.SurPlace, m = p.NbPers || k.nbpers, g = p.Pourcentage ? p.Pourcentage * (k.prix || 0) / 100 : p.Prix, v = S("<select " + (p.Obligatoire ? 'style="display:none;"' : "") + "/>"), y = p.Obligatoire ? p.Quantite && m || 1 : 0; y <= (p.Obligatoire ? p.Quantite && m || 1 : p.Quantite); y++) p.QuantiteStricte && 0 !== y && y != (p.Obligatoire ? p.Quantite && m || 1 : p.Quantite) || S("<option " + (y === (p.QuantiteDefaut || 0) ? 'selected="true" ' : "") + "/>").attr("value", y).text(y).appendTo(v);
                                v.change(f);
                                var b = null;
                                (p.Description || p.UrlInfo) && function (t) {
                                    b = S('<span class="Info">?</span>').mouseover(function () {
                                        S(this).addClass("Over")
                                    }).mouseleave(function () {
                                        S(this).removeClass("Over")
                                    }).click(function () {
                                        if (t.Description) {
                                            var e = S('<div class="OsPanierPopIn Lock OverlayPlusInfo CssCustom"><div class="OverlayLibelle">' + t.Libelle + '</div><div class="OverlayDescription">' + t.Description + "</div>" + (t.UrlInfo ? '<div class="Bouton BoutonPlusInfo js-boutonPlusInfo"><a href="javascript:void(0);"><span>' + A.plusdinfos + "</span></a></div>" : "") + "</div>");
                                            e.find(".js-boutonPlusInfo").removeClass("js-boutonPlusInfo").click(function () {
                                                T.open(t.UrlInfo)
                                            }), new AllianceReseaux.OsOverlay({
                                                cible: e
                                            })
                                        } else T.open(t.UrlInfo)
                                    })
                                }(p);
                                var x = S('<td class="Operation" />').appendTo(S("<tr />").append(S('<td class="Libelle">' + p.Libelle + "</td>").append(b)).appendTo(S('<table class="TableSupplement" cellspacing="0" cellpadding="0"/>').addClass(p.Obligatoire ? "SupplementObligatoire" : "SupplementOptionnel").appendTo(r))),
                                    C = S('<div class="Total">' + s(0) + "</div>").appendTo(x).css("visibility", h ? "hidden" : "visible");
                                S('<div class="Operateur" ' + (p.Obligatoire && !p.Quantite && 1 == p.NbJours ? 'style="display:none;"' : h ? 'style="visibility:hidden"' : "") + ">=</div>").appendTo(x), S('<div class="NbPers" ' + (p.Obligatoire && u ? "" : 'style="display:none;"') + ">" + (p.Quantite && m ? m + " " + A.abreviationpers : "") + "</div>").appendTo(x), S('<div class="Quantite" ' + (p.Obligatoire ? 'style="display:none;"' : p.Quantite ? "" : 'style="visibility:hidden"') + "/>").append(S('<span class="OsWrapSelect"></span>').append(v)).appendTo(x), S('<div class="Operateur">' + ((!p.Obligatoire || p.Quantite && m) && p.Quantite ? "x" : "") + "</div>").appendTo(x), S('<div class="NbJours" ' + (l ? "" : 'style="display:none;"') + ">" + (1 < p.NbJours ? p.NbJours + " " + A.jours : "") + "</div>").appendTo(x), S('<div class="Operateur" ' + (l ? "" : 'style="display:none;"') + ">" + (1 < p.NbJours ? "x" : "") + "</div>").appendTo(x), S('<div class="Prix" ' + (p.Obligatoire && !p.Quantite && 1 == p.NbJours ? 'style="display:none;"' : "") + ">" + s(g) + "</div>").appendTo(x), S('<div class="Clear" />').appendTo(x), S.data(v[0], "supplement", {
                                    supplement: p,
                                    blocTotal: C,
                                    prix: g,
                                    idx: n
                                }), j.overlay.FermerSurClic(!0)
                            }
                            f()
                        }

                        function e(e) {
                            if (0 == ((e || {}).Supplements || []).length) return j.calcultaxe = "<Produits></Produits>", j.aucunSupplement = !0, void (k.selection || function () { })(j);
                            for (var t = w.find(".js-blocProduits").removeClass("js-blocProduits"), n = t.find(".js-blocProduit").removeClass("js-blocProduit").remove(), r = 0; r < (k.qte || 1); r++) i(e, n.clone().appendTo(t), r);
                            w.removeClass("Attente")
                        }
                        k.data ? e(k.data) : function (e, t) {
                            S.ajax({
                                url: AllianceReseaux.OsBase.UrlJSONCatalogue() + "e8_" + a + "-.aspx?Param/CodeOs=" + e.ui + "&Param/DureeSejour=" + e.dureesejour + "&Param/DebutSejour=" + e.debutsejour,
                                data: e.ParamsRecherche,
                                dataType: "jsonp",
                                success: function (e) {
                                    t(e)
                                }
                            })
                        }(k, e)
                    }, this.SurchargeTextes = function (e) {
                        S.extend(!0, A, e)
                    }, this.PopInV1 = function (e) {
                        var t = S('<div class="BlocPopIn BlocPopInV1"><div class="produit"><div class="titre">' + A.produitAjoute + '</div><div class="detail"><div class="Clear"></div></div><div class="js-panier-boutons">' + (e.sansPersonnalisation ? '<style>.OsPanierPopIn.Lock .Bouton.BoutonPlusInfo { float:left; } .OsPanierPopIn.Lock .Bouton.BoutonContinuer { float:left; } .OsPanierPopIn .Bouton.BoutonTerminer { float:right; } .OsPanierPopIn.Lock .BlocPopIn .titre { text-align:center; color: #666; font-size: 18px; } </style><div class="BlocBoutons"><div class="Bouton BoutonContinuer js-boutonContinuer"><a href="javascript:void(0)"><span>' + A.continuerMesAchats + '</span></a></div><div class="Bouton BoutonTerminer js-boutonTerminer"><a href="javascript:void(0)"><span>' + A.passerMaCommande + '</span></a></div><div class="Clear" /></div>' : '<style>.OsBtImgCompatibilite { display:none; } </style><div class="boutons"><div class="btcontinuer"><span class="OsBtImgCompatibilite">' + A.continuerMesAchats + '</span></div><div class="btterminer"><span class="OsBtImgCompatibilite">' + A.passerMaCommande + '</span></div><div class="Clear" /></div>') + '</div><div class="InclusionPanierAjout js-inclusion-panier-ajout"></div></div></div>'),
                            n = t.find(".js-panier-boutons").removeClass("js-panier-boutons");
                        return n.find(".btcontinuer,.js-boutonContinuer").removeClass("js-boutonContinuer").click(function () {
                            e.continuer(j)
                        }), n.find(".btterminer,.js-boutonTerminer").removeClass("js-boutonTerminer").click(function () {
                            e.terminer(j)
                        }), e.sansPersonnalisation || w.removeClass("Lock").addClass(e.theme).addClass(e.personnalisation).addClass("overlay").addClass("panier-resultat"), e.sansPersonnalisation || w.find("style").remove(), j.overlay.FermerSurClic(!0), w.removeClass("Attente"), l.empty().append(t), {
                            blocBoutons: n,
                            inclusion: t.find(".js-inclusion-panier-ajout").removeClass("js-inclusion-panier-ajout").hide()
                        }
                    }, this.PopInV2 = function (e) {
                        var t = "",
                            n = S('<div class="BlocPopIn BlocPopInV2"><div class="interieur"><div class="titre">' + A.produitsAjoutes + '</div><div class="derniers-produits-ajoutes js-bloc-conteneurproduits"></div><div class="detail"><div class="Clear"></div></div><div class="js-panier-boutons">' + (e.sansPersonnalisation ? '<style>.OsPanierPopIn .Bouton.BoutonPlusInfo { float:left; } .OsPanierPopIn .Bouton.BoutonContinuer { float:left; } .OsPanierPopIn .Bouton.BoutonTerminer { float:right; } .OsPanierPopIn .BlocPopIn .titre { text-align:center; color: #666; font-size: 18px; } </style><div class="BlocBoutons"><div class="Bouton BoutonContinuer js-boutonContinuer"><a href="javascript:void(0)"><span>' + A.continuerMesAchats + '</span></a></div><div class="Bouton BoutonTerminer js-boutonTerminer"><a href="javascript:void(0)"><span>' + A.passerMaCommande + '</span></a></div><div class="Clear" /></div>' : '<style>.OsBtImgCompatibilite { display:none; } </style><div class="boutons"><div class="btcontinuer"><span class="OsBtImgCompatibilite">' + A.continuerMesAchats + '</span></div><div class="btterminer"><span class="OsBtImgCompatibilite">' + A.passerMaCommande + '</span></div><div class="Clear" /></div>') + '</div><div class="InclusionPanierAjout js-inclusion-panier-ajout"></div></div></div>'),
                            r = S(e.ligneProduitRenderer ? "<div></div>" : "<ul></ul>").addClass("produits");
                        n.find(".js-bloc-conteneurproduits").append(r);
                        for (var i, a = 0; i = e.produitsAjoutes[a]; a++) {
                            var o = null;
                            o = e.ligneProduitRenderer ? e.ligneProduitRenderer(i) : S('<li class="ligne structureType' + i.Type + (i.numtheme ? " numtheme" + i.numtheme : "") + (i.idtypecourseos ? " idtypecourseos" + i.idtypecourseos : "") + '"><div class="titre-long"><div>' + i.Titre.replace(/\s*\n+\s*$/gi, "").replace(/\s*\n+\s*/gi, "</div><div>") + '</div></div><div class="prix">' + AllianceReseaux.OsBase.FormatePrix(100 * i.PrixPublicTotal) + ' &euro;</div><div class="clear"></div></li>'), r.append(o), t += ("" == t ? "" : ",") + i.IdInterne
                        }
                        var s = n.find(".js-panier-boutons").removeClass("js-panier-boutons");
                        return s.find(".btcontinuer,.js-boutonContinuer").removeClass("js-boutonContinuer").click(function () {
                            e.continuer(j)
                        }), s.find(".btterminer,.js-boutonTerminer").removeClass("js-boutonTerminer").click(function () {
                            e.terminer(j)
                        }), w.addClass("panier-resultat"), e.sansPersonnalisation || w.removeClass("Lock").addClass(e.theme).addClass(e.personnalisation).addClass("overlay"), e.sansPersonnalisation || w.find("style").remove(), j.overlay.FermerSurClic(!0), w.removeClass("Attente"), l.empty().append(n), {
                            blocBoutons: s,
                            inclusion: n.find(".js-inclusion-panier-ajout").removeClass("js-inclusion-panier-ajout").hide(),
                            listeIdInterne: t
                        }
                    };
                    this.PopInActivite = function (e) {
                        var t = S('<div class="BlocPopIn BlocPopInV2"><div class="interieur"><div class="js-txt-titre titre"></div><div class="js-panier-boutons"><div class="BlocBoutons"><div class="Bouton BoutonTerminer js-boutonTerminer"><a href="javascript:void(0)"><span class="js-txt-lien"></span></a></div><div class="Clear" /></div><div class="js-txt-titreactivites titreactivites"></div></div><div class="detail"><div class="js-activite-addock"><div class="js-cible-widgetproduit"></div></div></div><div class="InclusionPanierAjout js-inclusion-panier-ajout"></div></div></div>');
                        S(".js-txt-titre", t).text(A.hebergementAjoute), S(".js-txt-titreactivites", t).text(A.ajoutActivites), S(".js-txt-lien", t).text(A.nonMerciActivites);
                        var n = t.find(".js-panier-boutons").removeClass("js-panier-boutons");
                        n.find(".js-boutonTerminer").removeClass("js-boutonTerminer").click(function () {
                            e.terminer(j)
                        }), e.sansPersonnalisation || w.removeClass("Lock").addClass(e.theme).addClass(e.personnalisation).addClass("overlay").addClass("panier-resultat"), e.sansPersonnalisation || w.find("style").remove(), j.overlay.FermerSurClic(!1), w.find(".close").click(function () {
                            e.terminer(j)
                        }), w.removeClass("Attente"), l.empty().append(t);
                        var r = new AllianceReseaux.Widget.Instance("Produit", {
                            idPanier: e.idPanier,
                            idIntegration: e.idIntegration,
                            langue: a,
                            ui: e.widget.ui
                        });
                        r.PreApp("cible", t.find(".js-cible-widgetproduit")), e.paramsSupplements && e.paramsSupplements && e.paramsSupplements.debutsejour && (r.PreApp("dispo.debut", e.paramsSupplements.debutsejour), e.paramsSupplements.dureesejour && r.PreApp("dispo.duree", e.paramsSupplements.dureesejour));
                        for (var i = 0; i < e.widget.preApps.length; i++) r.PreApp(e.widget.preApps[i].nom, e.widget.preApps[i].valeur);
                        return r.Initialise(), {
                            blocBoutons: n,
                            inclusion: t.find(".js-inclusion-panier-ajout").removeClass("js-inclusion-panier-ajout").hide()
                        }
                    };
                    var n = function () {
                        var n = "";
                        return n += "<Produits> ", w.find("select").each(function () {
                            var e = S.data(this, "supplement"),
                                t = e.supplement;
                            !t.Obligatoire && 0 < this.options[this.selectedIndex].value && (n += '<Produit IdFournisseur="' + t.IdFournisseur + '">', n += "<Idx>" + e.idx + "</Idx>", n += "<IdProduit>" + t.IdProduit + "</IdProduit>", n += "<IdDispo>" + t.IdDispo + "</IdDispo>", n += t.CodeProduit ? "<CodeProduit>" + t.CodeProduit + "</CodeProduit>" : "", n += "<IdInternePrincipal />", n += "<IdProduitPrincipal>" + t.IdProduitPrincipal + "</IdProduitPrincipal>", n += "<Famille>1</Famille>", n += "<TypeProduit>TAXE</TypeProduit>", n += "<ParamCalcul>", n += "<NbPers>" + this.options[this.selectedIndex].value + "</NbPers>", n += "<NbJours>" + t.NbJours + "</NbJours>", n += "</ParamCalcul>", n += t.RPH ? "<RPH>" + t.RPH + "</RPH>" : "", n += "</Produit>")
                        }), n += "</Produits>"
                    },
                        o = (this.FermeSupplements = function () {
                            w && (w.osLibOverlay().close(), t = w = null)
                        }, this.OuvreAttente = function () {
                            var e = S.Deferred();
                            return i = S('<div class="OsPanierPopIn CssCustom Attente">' + r + '<div class="BlocPage"><div class="BlocAttente"></div><div class="BlocContenu js-bloc-contenu"></div></div></div>').addClass("oslangue-" + a), l = i.find(".js-bloc-contenu").removeClass("js-bloc-contenu"), j = {}, i.width("600px"), j.overlay = new AllianceReseaux.OsOverlay({
                                cible: i,
                                nePasFermerSurClic: !0,
                                onLoad: function () {
                                    e.resolve()
                                }
                            }), t = i.width(), e.promise()
                        }, this.FermeAttente = function () {
                            i && (i.osLibOverlay().close(), t = i = null)
                        }, this.OuvreContenu = function (t) {
                            function n(e) {
                                w = i, t.sansFermeture || (w.find(".close").empty().append("<span>" + (AllianceReseaux.Regional[a] || AllianceReseaux.Regional.fr).closeOverlay + "</span>"), j.overlay.FermerSurClic(!0)), w._optsClasses = t.classes, w.removeClass("Attente").addClass(t.classes).width(""), l.empty().append(e), o(), r.resolve()
                            }
                            var r = S.Deferred();
                            return t.url ? S.ajax({
                                url: t.url.replace(/^https?:/i, ""),
                                dataType: "jsonp",
                                success: function (e) {
                                    n(e.html)
                                }
                            }) : n(t.canvas), r.promise()
                        }, this.FermeContenu = function () {
                            l.empty(), j.overlay.FermerSurClic(!1), w.addClass("Attente").removeClass(w._optsClasses), o()
                        }, function () {
                            t && (w.css("left", w.position().left - (w.width() - t) / 2 + "px"), t = w.width())
                        })
                }
            }
        }(window, AllianceReseaux.jQuery),
        function (ae, oe, se, le) {
            if (null == se.OsPanier) {
                var ue = "Impossible de créer la session.",
                    ce = se.URLHelper.setPageCompatibleScheme("//json-session.for-system.com/z6058"),
                    pe = "aucun",
                    de = "mini",
                    r = {};
                se.InstancePanier = function (e) {
                    var t = (e.cible || "widget-panier") + "#" + e.id + "#" + e.idIntegration,
                        n = r[t];
                    return n || (n = new se.OsPanier(e), r[t] = n), se.OsBase.ExtensionLog({
                        categorie: "Instance",
                        texte: "[Panier] idPanier : " + e.id + ", idIntegration : " + e.idIntegration
                    }), n
                };
                se.Interne.Panier = new function () {
                    this.Instance = function (e) {
                        if (!e || !e.idPanier || !e.idIntegration) throw "Instance Panier : Paramètre manquant.";
                        return e.id = e.idPanier, se.InstancePanier(e)
                    }, this.Reset = function () {
                        r = {}
                    }
                }, se.OsPanier = function (e, t) {
                    var p = null;
                    p = "string" == typeof e ? ((t = t || {}).iInfosScenario = t.iInfosScenario || {}, {
                        idIntegration: 0,
                        id: e,
                        cible: t.canvas,
                        langue: (t.iInfosScenario.GetLangue || function () {
                            return "fr"
                        })(),
                        style: t.style,
                        textes: t.textes,
                        affichage: t.affichage,
                        iInfosScenario: {
                            GetDomaine: t.iInfosScenario.GetDomaine || function () {
                                return null
                            },
                            GetUrlValidationPanier: t.iInfosScenario.GetUrlValidationPanier || function () {
                                return null
                            },
                            GetZoneDossier: t.iInfosScenario.GetZoneDossier || function () {
                                return null
                            },
                            GetNumEtapeDossier: t.iInfosScenario.GetNumEtapeDossier || function () {
                                return null
                            }
                        }
                    }) : e;
                    var d = null,
                        f = null;
                    this.evts = {
                        Actualisation: [],
                        AvantAjout: []
                    };
                    var h = this,
                        m = null,
                        g = p.langue || "fr",
                        v = de,
                        n = p.idIntegration,
                        y = null,
                        r = null,
                        l = {
                            fr: {
                                chargement: "Chargement",
                                patienter: "Veuillez patienter",
                                errAjoutPanier: "Votre panier contient des prestations qui ne peuvent pas être réservées simultanément avec la prestation que vous souhaitiez ajouter à votre panier. Vous devez donc soit réserver d'abord les prestations actuellement présentes dans votre panier, soit les supprimer de votre panier."
                            },
                            uk: {
                                chargement: "Loading",
                                patienter: "Please wait",
                                errAjoutPanier: "The items selected cannot be purchased simultaneously. To continue with this purchase you must first either complete the transaction for the items currently in your basket or empty your basket and start again."
                            },
                            pt: {
                                chargement: "Loading",
                                patienter: "Please wait",
                                errAjoutPanier: "The items selected cannot be purchased simultaneously. To continue with this purchase you must first either complete the transaction for the items currently in your basket or empty your basket and start again."
                            },
                            es: {
                                chargement: "Cargando",
                                patienter: "Espere por favor",
                                errAjoutPanier: "The items selected cannot be purchased simultaneously. To continue with this purchase you must first either complete the transaction for the items currently in your basket or empty your basket and start again."
                            },
                            de: {
                                chargement: "Laden",
                                patienter: "Bitte warten",
                                errAjoutPanier: "The items selected cannot be purchased simultaneously. To continue with this purchase you must first either complete the transaction for the items currently in your basket or empty your basket and start again."
                            },
                            it: {
                                chargement: "Caricamento",
                                patienter: "Si prega di attendere",
                                errAjoutPanier: "The items selected cannot be purchased simultaneously. To continue with this purchase you must first either complete the transaction for the items currently in your basket or empty your basket and start again."
                            },
                            nl: {
                                chargement: "Het laden",
                                patienter: "Een moment geduld",
                                errAjoutPanier: "The items selected cannot be purchased simultaneously. To continue with this purchase you must first either complete the transaction for the items currently in your basket or empty your basket and start again."
                            }
                        }[g],
                        b = null,
                        x = p.cible || "widget-panier",
                        i = p.style,
                        a = null,
                        o = null,
                        s = null,
                        u = null,
                        c = null,
                        C = 1,
                        k = !1,
                        w = !1,
                        j = null,
                        A = [],
                        T = null,
                        S = {},
                        P = null,
                        O = null,
                        D = (new Date).getTime(),
                        N = 0,
                        L = new se.PopInPanier({
                            langue: g
                        }),
                        I = {
                            panier: {
                                popIn: {
                                    surAffichage: []
                                },
                                beforePopIn: [],
                                beforeAdd: [],
                                onDataLoad: [],
                                onDataUpdated: [],
                                beforeSessionLoad: [],
                                avantValidationPanier: []
                            },
                            tracking: {
                                baseUrlPage: null
                            }
                        },
                        M = null;

                    function E() {
                        if (p && p.id) {
                            a = p.domaine || a, o = p.alias || o, m = z(), v = (p.affichage || y.panier.affichage || v).toLowerCase(), b = p.textes || (y.panier.textes || {})[g] || (y.panier.textes || {}).fr || y.panier.textes, L.SurchargeTextes(b), v != pe && x && W();
                            ".OsPanier .contenu .Details .Titre { display:none; }\n", se.OsBase.ChargeStyle("OsPanier", ".OsPanier .EnteteTotal { display:none; }\n.OsPanier .contenu .Details .Titre { display:none; }\n"), "1.5" === y.theme_version ? se.OsBase.ChargeCss(se.OsBase.GetUrlGadget(se.URLHelper.combine("/widgets/themes/api15/rel/themes", y.personnalisation || "defaut", "api-panier.min.css"), !0)) : "aucun" !== v && (f ? se.OsBase.ChargeCss(se.OsBase.GetUrlGadget("/widgets/themes/" + d + "/" + f + "/ospanier/" + (v || "mini") + ".css"), !0) : se.OsBase.ChargeCss(se.OsBase.GetUrlGadget("/widgets/themes/api/v1/ospanier/" + (v || "mini") + ".css"), !0)), J({
                                init: !0
                            }), se.OsBase.CreeDevTracker(S, p.devTracking), (y.tracking && y.tracking.ID || I.tracking && I.tracking.ID) && (T = y.tracking ? y.tracking.ID : I.tracking.ID, se.Tracking.Cree(oe.extend(!0, {}, y.tracking, I.tracking), {
                                integration: n,
                                langue: g
                            }))
                        } else alert("Identifiant du panier inexistant ou incorrect.")
                    }

                    function _() {
                        if ((y.tracking || {}).tagManager && ae.ga && ae.ga.getAll) {
                            var e = ae.ga.getAll(),
                                t = e && e[0] && e[0].get && e[0].get("linkerParam") || "";
                            return t ? "&" + t : ""
                        }
                        return ""
                    }

                    function B() {
                        oe(".attente", "string" == typeof x ? oe("#" + x) : x.jquery ? x : oe(x)).show()
                    }

                    function R(t) {
                        y && t && t(), y || se.OsBase.AttendreIntegration(n, function (e) {
                            y = oe.extend(!0, {
                                panier: {
                                    textes: null
                                }
                            }, e.integration), a = y.panier.domaine = "" + (y.panier.domaine[g] || y.panier.domaine.fr || y.panier.domaine), o = y.panier.alias, s = y.panier.zonedossier || 1, u = y.panier.urlValidationPanier, c = I.panier.numEtapeDossier || y.panier.numEtapeDossier, d = y.theme || "std", f = f || y.personnalisation, j = I.panier.target || y.panier.target, C = y.panier.versionPopIn || 1, y.panier.callbackPreselectionUrl && (r = ie(y.panier.callbackPreselectionUrl)), t && t()
                        })
                    }
                    0 == n && (se.Integrations[n] = {
                        panier: {
                            domaine: p.iInfosScenario.GetDomaine(),
                            zonedossier: p.iInfosScenario.GetZoneDossier(),
                            urlValidationPanier: p.iInfosScenario.GetUrlValidationPanier(),
                            numEtapeDossier: p.iInfosScenario.GetNumEtapeDossier()
                        }
                    }), se.OsBase.ChargeIntegration(n), this.GetCanvas = function () {
                        return x
                    };
                    var $ = this.GetId = function () {
                        return p.id
                    },
                        H = this.GetRf = function () {
                            return m
                        },
                        F = this.GetLangue = function () {
                            return g
                        },
                        q = (this.GetDomaine = function () {
                            return a
                        }, this.Alias = function (e) {
                            if (void 0 === e) return o;
                            o = e
                        }, this.GetZoneDossier = function () {
                            return s
                        }, this.GetNumEtapeDossier = function () {
                            return c
                        }, this.GetPersonnalisation = function () {
                            return f
                        }, this.GetTheme = function () {
                            return d
                        }, this.GetAffichage = function () {
                            return v
                        }, this.GetIdIntegration = function () {
                            return n
                        }, this.SetStyle = function (e) {
                            i = e
                        }, this.EstSessionInitialisee = function () {
                            return k
                        }, this.EstIntegre = function () {
                            return null != y
                        }, this.Target = function (e) {
                            if (void 0 === e) return j;
                            j = e
                        }, this.PopIn = function () {
                            return L
                        }, null),
                        G = null,
                        U = null,
                        Q = this.devTrackEvent = function (e, t, n, r) {
                            try {
                                if (!S || !S.tracker) return !1;
                                var i = new Date;
                                return S.tracker._trackEvent("OsPanier#" + id + "#" + g, e + "#" + t, "[" + H() + "][" + i.getHours() + "h" + i.getMinutes() + "m" + i.getSeconds() + "s]" + (n || ""), r == le ? 0 : r)
                            } catch (e) {
                                return !1
                            }
                        },
                        z = function () {
                            for (var e = ae.location.href.slice(ae.location.href.indexOf("?") + 1).split("&"), t = 0, n = ""; n = e[t]; t++)
                                if ("Rf" == n.split("=")[0]) return n.split("=")[1];
                            return null
                        },
                        J = this.GetSession = function (r) {
                            function e(e) {
                                var t = {
                                    NumEtape: 1,
                                    Rd: $(),
                                    _WPJS: "r",
                                    Rf: e
                                };
                                se.OsBase.Trigger(I.panier.beforeSessionLoad, {
                                    params: t
                                }, {});
                                var n = se.OsBase.GetUrlHttpsCompatible(a) + "/" + (o || "index") + ("fr" == F() ? "" : "_" + F()) + ".aspx";
                                oe.ajax({
                                    url: n,
                                    data: t,
                                    dataType: "jsonp",
                                    cache: !1,
                                    success: function (e) {
                                        var t = new Date((new Date).getTime() + 36e5);
                                        oe.cookie(i, e.rf, {
                                            expires: t,
                                            path: "/"
                                        }), V(e, r)
                                    }
                                })
                            }
                            var i = "os_session_local_" + a.toLowerCase().replace(/^(https?:)?\/\//gi, "") + ("/" == a[a.length - 1] ? "" : "/");
                            (r || {}).init && p.nouvelleSession ? e("DQWV2XQQQQQQQWWMRUGHY834QA") : e(m || oe.cookie(i))
                        },
                        W = function () {
                            !f && i && se.OsBase.ChargeCss(i), se.OsBase.ChargeScript(se.OsBase.GetUrlGadget("/widgets/ospanier/" + v + ".js")), se.OsBase.ChargeLibs(["WTooltip"])
                        },
                        V = function (s, l) {
                            var t = !((l || {}).params && (l || {}).params["Globales/ServiceRef"] && "addock" === (l || {}).params["Globales/ServiceRef"]) && y.produit && y.produit.hebe && y.produit.hebe.afficherActiviteAutourDeMoi;
                            if (D = s.time || (new Date).getTime(), N = (new Date).getTime() - D, (l || {}).init && se.OsBase.Trigger(I.panier.onDataLoad, {
                                data: s,
                                opts: l
                            }, {}), "ok" != s.statut) return alert(s.message ? s.message : ue), void Q("Erreur", "GetSessionCallback", s.message ? s.message : ue);
                            se.OsBase.Trigger(I.panier.onDataUpdated, {
                                data: s,
                                opts: l || {}
                            }, {});
                            var o = l || {};
                            O = s.mini || {}, P = O.Caddie;
                            for (var e, u = [], n = 0; 2 == C && 0 < s.mini.Nb && (e = s.mini.Produits[n]); n++) A[e.IdInterne] || u.push(e), A[e.IdInterne] = e;
                            Y();
                            var c = o.validerSurAjout || 0 != o.validerSurAjout && w,
                                r = !c || t;
                            if (o.ajouter && !r || L.FermeAttente(), m = s.rf, k = !0, se.OsBase.Trigger(h.evts.Actualisation, s, null), o.ajouter && T)
                                for (n = 0; n < u.length; n++) se.Tracking.TrackDicoEvent(T, "widget-panier-ajouter-fin", {
                                    produitAjoute: u[n],
                                    panier: O
                                });
                            if (o.ajouter && o.surAjout && o.surAjout(s), !o.ajouter || r || (ne(o), !w)) {
                                if (o.ajouter && r && (!o.compatibilite || o.overlay) && "-1" != o.retAjout) {
                                    o.compatibilite && L.OuvreSupplements({
                                        data: {},
                                        time: (new Date).getTime()
                                    });

                                    function i() {
                                        function i(e) {
                                            T && se.Tracking.TrackDicoEvent(T, "widget-panier-continuer");
                                            var t = (y.panier.btcontinuer || {}).url;
                                            t ? document.location.href = t[g] || t.fr || t : e.overlay.Ferme()
                                        }

                                        function a(e) {
                                            T && se.Tracking.TrackDicoEvent(T, "widget-panier-terminer"), ne({
                                                click: !0
                                            }), "_blank" == j && e.overlay.Ferme()
                                        }
                                        var e = l.contexte && l.contexte.ui ? l.contexte.ui : l.paramsSupplements && l.paramsSupplements.ui ? l.paramsSupplements.ui : null;
                                        oe.when(t && e && 0 <= oe.inArray(se.OsBase.UI.Parse(e).source, ["OSCH", "OSMB", "OSCA", "OSHO"]) ? X(e) : null).then(function (e) {
                                            if (null == e || null == e.widget)
                                                if (c) ne(o);
                                                else {
                                                    var t = 0 == u.length ? L.PopInV1({
                                                        continuer: i,
                                                        terminer: a,
                                                        theme: d,
                                                        personnalisation: f,
                                                        sansPersonnalisation: (l || {}).sansPersonnalisation
                                                    }) : L.PopInV2({
                                                        continuer: i,
                                                        terminer: a,
                                                        produitsAjoutes: u,
                                                        theme: d,
                                                        personnalisation: f,
                                                        sansPersonnalisation: (l || {}).sansPersonnalisation,
                                                        ligneProduitRenderer: h["GetLigneProduit" + v] ? function (e) {
                                                            return h["GetLigneProduit" + v]({
                                                                langue: g,
                                                                textes: b,
                                                                suppression: !1
                                                            }, e)
                                                        } : null
                                                    }),
                                                        n = ((y.inclusions || {}).panierAjout || {}).url;
                                                    if (n) {
                                                        t.inclusion.addClass("attente").show();
                                                        var r = "?Rf=" + m + "&Param/ListeIdInterne=" + t.listeIdInterne;
                                                        oe.ajax({
                                                            scriptCharset: "utf-8",
                                                            contentType: "application/json; charset=utf-8",
                                                            url: (n[g] || n.fr || n) + r,
                                                            dataType: "jsonp",
                                                            success: function (e) {
                                                                t.inclusion.removeClass("attente").html(e.html)
                                                            },
                                                            error: function (e) {
                                                                t.inclusion.removeClass("attente").empty()
                                                            }
                                                        })
                                                    }
                                                    0 < I.panier.popIn.surAffichage.length && se.OsBase.Trigger(I.panier.popIn.surAffichage, {
                                                        domBtns: t.blocBoutons[0],
                                                        domInclusion: t.inclusion[0],
                                                        ui: (o.contexte || {}).ui,
                                                        minipanier: s.mini
                                                    }, {})
                                                }
                                            else h.Evt("panier.beforeAdd", function (e, t, n) {
                                                t.validerSurAjout = !1
                                            }), L.PopInActivite({
                                                continuer: i,
                                                terminer: a,
                                                theme: d,
                                                personnalisation: f,
                                                sansPersonnalisation: (l || {}).sansPersonnalisation,
                                                idPanier: p.id,
                                                idIntegration: p.idIntegration,
                                                paramsSupplements: (l || {}).paramsSupplements,
                                                widget: e.widget
                                            }, oe.extend(l, p))
                                        })
                                    }
                                    se.OsBase.Trigger(I.panier.beforePopIn, {
                                        data: s,
                                        popIn: L,
                                        callbackPopIn: i
                                    }, {}) && (o.avantPopIn || i)({
                                        data: s,
                                        popIn: L,
                                        callbackPopIn: i
                                    })
                                }
                                if (v != pe && x) {
                                    se.OsBase.Attendre(function () {
                                        return null != h["Get" + v]
                                    }, function () {
                                        var o = h["Get" + v]({
                                            langue: g,
                                            data: s,
                                            textes: b,
                                            toggle: p.toggle,
                                            init: (l || {}).init || !1
                                        });
                                        oe(function () {
                                            var e = null,
                                                t = oe("<div></div>").addClass("OsPanier").addClass("api").addClass("v1").addClass("oslangue-" + g).addClass("CssCustom").append(o),
                                                n = ("string" == typeof x ? oe("#" + x) : x.jquery ? x : oe(x)).empty().append(t);
                                            f && t.addClass(d).addClass(f), 0 == n.length && (w = !0), oe(".btn-valider", n).click(function () {
                                                e && e.Ferme(), ne({
                                                    click: !0
                                                })
                                            }), oe(".btn-supprimer", n).click(function () {
                                                e && e.Ferme(), ee(this.id.split("#")[2])
                                            });
                                            var r = oe(".js-panier-toggle", n).removeClass("js-panier-toggle");
                                            if (r) {
                                                function i(e) {
                                                    var t = r.hasClass("etat0") ? 0 : 1;
                                                    r.removeClass("etat0").removeClass("etat1").addClass("etat" + (e == le ? 0 == t ? 1 : 0 : e)), T && e == le && 0 == t && se.Tracking.TrackDicoEvent(T, "widget-panier-deplier")
                                                }
                                                oe(".js-panier-toggle-leave", n).removeClass("js-panier-toggle-leave").mouseleave(function () {
                                                    i(0)
                                                }), oe(".js-panier-toggle-enter", n).removeClass("js-panier-toggle-enter").mouseenter(function () {
                                                    i(1)
                                                }), oe(".js-panier-toggle-click", n).removeClass("js-panier-toggle-click").click(function () {
                                                    i()
                                                })
                                            }
                                            var a = oe(".js-panier-overlay", n).removeClass("js-panier-overlay");
                                            a && oe(".js-panier-overlay-click", n).click(function () {
                                                e = new AllianceReseaux.OsOverlay({
                                                    cible: a.clone(!0)
                                                })
                                            })
                                        })
                                    })
                                }
                            }
                        },
                        X = function (e) {
                            return oe.ajax({
                                scriptCharset: "utf-8",
                                contentType: "application/json; charset=utf-8",
                                url: se.OsBase.UrlEtapeRest(),
                                dataType: "jsonp",
                                data: {
                                    ref: "json-openpro-addock-reseller",
                                    q: [e].join("|")
                                }
                            })
                        },
                        Y = function () {
                            oe(".attente", "string" == typeof x ? oe("#" + x) : x.jquery ? x : oe(x)).hide()
                        },
                        K = this.Ajouter = function (o) {
                            o.ajouter = !0, o.compatibilite = !o.sansCompatibilite, o.contexte = o.contexte || {}, o.contexte && o.contexte.ui && !o.contexte.metier && (o.contexte.metier = se.OsBase.MetierParPrefixeUI(se.OsBase.UI.Parse(o.contexte.ui).source)), o.validerSurAjout = y.panier.validerSurAjout || o.validerSurAjout;
                            var s = "";
                            try {
                                if (T)
                                    if (o.contexte && (o.produits || [])[0])
                                        for (var e, t = 0; e = o.produits[t]; t++) se.Tracking.TrackDicoEvent(T, "widget-panier-ajout", oe.extend(!0, {}, o.contexte, {
                                            intitule: e.intitule || ""
                                        }));
                                    else se.Tracking.TrackDicoEvent(T, "widget-panier-ajout", oe.extend(!0, {
                                        intitule: ""
                                    }, o.contexte));

                                function n(e) {
                                    if ((o.surSelectionSupplements || function () { })(e), e.calcultaxe) {
                                        Q("Ajout", ""), o.timePanierAjout = (new Date).getTime(), se.OsBase.Trigger(I.panier.beforeAdd, o, {}), se.OsBase.Trigger(h.evts.AvantAjout, {}, {}), s += "[ApsTriggerAvtAjout]";
                                        var t = "";
                                        o.contexte && (o.contexte.itinerance || o.contexte.ui) && (t += "<hdle>" + se.OsBase.StringifyXmlJSON("contexte", o.contexte) + "</hdle>"), "string" != typeof (o.params || "") ? (q && (o.params["Globales/CodePartenaire"] = q), G && (o.params["Globales/CodeClientExterne"] = G), U && (o.params["Globales/CodeRetour"] = U), t && (o.params["Param/HandleXml"] = t), o.params["Param/Action"] = 4) : (q && (o.params += "&Globales/CodePartenaire=" + q), G && (o.params += "&Globales/CodeClientExterne=" + G), U && (o.params += "&Globales/CodeRetour=" + U), t && (o.params += "&Param/HandleXml=" + t), o.params += "&Param/Action=4"), B();
                                        var n = o.autoriserBlank && "_blank" == j,
                                            r = (o.autoriserBlank, o.validerSurAjout || 0 != o.validerSurAjout && w);
                                        M = r && n ? te() : null;
                                        var i = Z({
                                            data: o.params
                                        }),
                                            a = _();
                                        a && (i += (i.match(/\.aspx\?/i) ? "" : "?") + a), se.OsBase.PostJSONP({
                                            url: i,
                                            data: o.params,
                                            success: function (e) {
                                                "-1" == e.ajout ? (M && M.close(), alert(l.errAjoutPanier || "Erreur"), o.validerSurAjout = !1, o.retAjout = e.ajout, o.compatibilite || L.FermeSupplements()) : m = e.rf, J(o)
                                            }
                                        })
                                    }
                                }
                                o.compatibilite ? n({
                                    calcultaxe: "<Produits></Produits>"
                                }) : L.OuvreSupplements(oe.extend({}, o.paramsSupplements, {
                                    data: o.paramsSupplements ? o.paramsSupplements.data : {},
                                    cible: oe("<div />"),
                                    selection: n,
                                    langue: g,
                                    theme: d,
                                    personnalisation: f,
                                    trackingID: T
                                }))
                            } catch (e) {
                                Q("Erreur", "OsPanier.Ajouter", "[ " + e + " ]" + s)
                            }
                        },
                        Z = (this.AjouterProduit = function (e) {
                            e.ajouter = !0, e.sansCompatibilite = e.sansCompatibilite == le || e.sansCompatibilite, K(e)
                        }, this.GetUrlSession = function (e) {
                            e = e || {};
                            var t = se.OsBase.GetUrlHttpsCompatible(e.jsonSession ? ce : (a && s ? a + "/z" + s : null) || ce);
                            return e.data && ("string" == typeof e.data ? e.data = "Rd=" + $() + "&Rf=" + H() + "&" + e.data : (e.data.Rd = $(), e.data.Rf = H())), t + "e" + (e.numEtape || "20") + (o ? "_" + o + "_a" : "") + "_" + F() + "-.aspx" + (e.data ? "" : "?Rd=" + $() + "&Rf=" + H())
                        }),
                        ee = this.Supprimer = function (t) {
                            var e;
                            try {
                                Q("Suppression", ""), B(), L.OuvreAttente(), T && (e = oe.grep(O.Produits, function (e) {
                                    return e.IdInterne === t
                                }), se.Tracking.TrackDicoEvent(T, "widget-panier-supprimer", {
                                    produitSupprime: e[0],
                                    panier: O
                                })), oe.ajax({
                                    url: Z() + "&Param/Action=1&Param/IdInterne=" + t,
                                    dataType: "jsonp",
                                    success: function (e) {
                                        J()
                                    }
                                })
                            } catch (e) {
                                Q("Erreur", "OsPanier.Supprimer", "[ " + e + " ]")
                            }
                        },
                        te = function () {
                            var e = ae.open("", "_blank");
                            return e.document.write('<html><head><title>Chargement...</title><style>.OsAttente { position: relative; min-height: 100px; }.OsAttente::before { content: ""; width: 50px; height: 50px; -webkit-animation: osloader infinite 1s linear; animation: osloader infinite 1s linear; border: 3px solid transparent; border-top-color: #333; border-bottom-color: #333; border-radius: 100%; margin-left: calc(50px / 2 - 50px); margin-top: calc(50px / 2 - 50px); position: absolute; top: 50%; left: 50%; display: block; z-index: 10 } @keyframes osloader { 0% { -webkit-transform: rotate(0); transform: rotate(0) } to { -webkit-transform: rotate(1turn); transform: rotate(1turn) } } @-webkit-keyframes osloader { 0% { -webkit-transform: rotate(0); transform: rotate(0) } to { -webkit-transform: rotate(1turn); transform: rotate(1turn) } }</style></head><body><div class="OsAttente"></div></body></html>'), e
                        },
                        ne = this.ValiderPanier = function (i) {
                            if (y.panier.bloquerValidation) alert("Service indisponible.");
                            else if (Q("ValiderPanier", ""), T && se.Tracking.TrackDicoEvent(T, "widget-panier-valider"), a)
                                if (u || s) {
                                    function t() {
                                        var e = "";
                                        if (u) e = se.OsBase.GetUrlHttpsCompatible(a) + "/" + u + "&Rd=" + $() + "&Rf=" + H() + _();
                                        else {
                                            var t = I.panier.numEtapeDossierAuto || y.panier.numEtapeDossierAuto,
                                                n = t && !(i || {}).click ? t : c || 4;
                                            e = se.OsBase.GetUrlHttpsCompatible(a) + "/z" + s + "e" + n + (o ? "_" + o + "_a" : "") + "_" + F() + "-.aspx?Param/Action=0&Rd=" + $() + "&Rf=" + H() + _()
                                        }
                                        if (M) L.FermeSupplements(), M.document.location.href = e, M = null;
                                        else {
                                            var r = j || "_top";
                                            (i || {}).ajouter && "_blank" == j && (r = "_top"), "_blank" == r ? ae.open(e, "_blank") : ((i || {}).ajouter || L.OuvreAttente({}), oe(function () {
                                                oe('<form method="post" action="' + e + '" target="' + r + '"><input type="hidden" name="dummy_ie11" value="0" /></form>').appendTo(oe("body")).submit()
                                            }))
                                        }
                                    }

                                    function e(e) {
                                        y.panier.user && y.panier.user.type || e && e.user && e.user.type ? (L.OuvreAttente({}), oe.ajax({
                                            url: se.OsBase.GetUrlHttpsCompatible(a) + "/z" + s + "e20" + (o ? "_" + o + "_a" : "") + "_" + F() + "-.aspx",
                                            dataType: "jsonp",
                                            data: {
                                                Rd: $(),
                                                Rf: H(),
                                                "Param/Action": 5,
                                                "Param/JsonPanierUser": JSON.stringify(oe.extend(!0, {}, y.panier.user, e ? e.user : null))
                                            },
                                            complete: t
                                        })) : t()
                                    }
                                    se.OsBase.Trigger(I.panier.avantValidationPanier, {
                                        validerPanierCallback: e
                                    }, {}) ? e() : L.FermeSupplements()
                                } else alert("Erreur : la zonedossier ou le urlValidationPanier doit être précisée.");
                            else alert("Erreur : le domaine doit être précisé.")
                        },
                        re = this.ApresInitialisation = function (e) {
                            se.OsBase.Attendre(function () {
                                return k
                            }, function () {
                                e({
                                    minipanier: O
                                })
                            })
                        },
                        ie = (this.ApresPreselection = function (t, n) {
                            t && R(function () {
                                r ? re(function (e) {
                                    r(t, e, n)
                                }) : t({
                                    preselection: {}
                                })
                            })
                        }, function (i) {
                            var e = se.OsBase.GetUrlGadget(i).replace(/^https?:/i, "");
                            return se.OsBase.ChargeScript(e, {
                                idScript: i,
                                charset: "utf-8"
                            }),
                                function (e, t, n) {
                                    var r = null;
                                    se.OsBase.Attendre(function () {
                                        return r = se.Extensions[i]
                                    }, function () {
                                        r(e, t, n)
                                    })
                                }
                        });
                    this.Caddie = function () {
                        return P
                    }, this.Initialise = function () {
                        R(E)
                    }, this.SetCodeProvenance = function (e) {
                        q = e
                    }, this.SetCodeClientExterne = function (e) {
                        G = e
                    }, this.SetCodeRetour = function (e) {
                        U = e
                    }, this.CheckHeureMaxResa = function () {
                        try {
                            if (!y.heureMaxReservation) return !0;
                            var e = new Date((new Date).getTime() + N);
                            return y.heureMaxReservation > 100 * new Date(e).getHours() + new Date(e).getMinutes()
                        } catch (e) { }
                    }, this.PreApp = function (e, t) {
                        se.OsBase.SetJPath(I, e, t, !1)
                    }, this.Evt = function (e, t) {
                        t._osEvt = e, se.OsBase.SetJPath(I, e, t, !0)
                    }, R(function () {
                        p.surIntegration && p.surIntegration(), p.idPanier || E()
                    })
                }, se.OsPanier.SetUrlSession = function (e) {
                    ce = e
                }
            }
        }(window, AllianceReseaux.jQuery, AllianceReseaux),
        function (window, jQuery, AR, undefined) {
            if (!AR.Interne.Transformation) {
                var cacheMaquette = {},
                    cacheDico = {};
                AR.Interne.Transformation = function (modeleOpts) {
                    var that = this,
                        $langue = modeleOpts.langue || "fr",
                        $dico = null,
                        $maquette = null,
                        $root = null,
                        $data = {},
                        $callback = modeleOpts.callback,
                        $apresTransformation = [],
                        $apresInsertionPage = [],
                        $modeles = {},
                        $toggleHeaders = {},
                        $toggleGroups = {},
                        $toggleHeadersLinks = {},
                        $evts = null,
                        $instance = null,
                        separateur = "{#&_remplace_&#}",
                        tags = {
                            "for:bind": {},
                            "for:contenu": {}
                        },
                        idxAttributs = {
                            _defaut: {
                                tri: 10
                            },
                            jpath: {
                                tri: 1
                            },
                            langue: {
                                tri: 15
                            },
                            mots: {
                                tri: 17
                            },
                            br: {
                                tri: 20
                            },
                            date: {
                                tri: 25
                            },
                            datexml: {
                                tri: 25
                            },
                            domCol: {
                                tri: 100
                            },
                            domObj: {
                                tri: 100
                            },
                            callback: {
                                tri: 101
                            },
                            proxyhttps: {
                                tri: 110
                            }
                        },
                        triAttributs = function (e, t) {
                            var n = (idxAttributs[e.name] || idxAttributs._defaut).tri,
                                r = (idxAttributs[t.name] || idxAttributs._defaut).tri;
                            return r < n ? 1 : n < r ? -1 : 0
                        },
                        estArray = function (e) {
                            return !(!e || "string" == typeof e || e.length == undefined)
                        },
                        estArrayNonVide = function (e) {
                            return estArray(e) && 0 < e.length
                        },
                        estNonArrayOuArrayVide = function (e) {
                            return !estArrayNonVide(e)
                        },
                        loadMaquette = function () {
                            var e = !1;
                            try {
                                e = jQuery.browser.msie && parseInt(jQuery.browser.version.match(/^(\d+)\./i)[1], 10) < 9
                            } catch (e) { }
                            if (e) {
                                var t = new ActiveXObject("Msxml2.DOMDocument");
                                t.loadXML(that[modeleOpts.maquette]()), $maquette = t.childNodes[0]
                            } else $maquette = jQuery.parseXML(that[modeleOpts.maquette]()).childNodes[0]
                        };
                    if (modeleOpts.maquette && "string" == typeof modeleOpts.maquette)
                        if (that[modeleOpts.maquette]) loadMaquette();
                        else {
                            var urlMaquette = AR.OsBase.GetUrlGadget("/widgets/transformation/maquettes/" + modeleOpts.maquette + ".js", !0);
                            cacheMaquette[urlMaquette] || (cacheMaquette[urlMaquette] = jQuery.ajax({
                                url: urlMaquette,
                                scriptCharset: "utf-8",
                                dataType: "script",
                                cache: !0
                            })), cacheMaquette[urlMaquette].done(loadMaquette)
                        }
                    else $maquette = modeleOpts.maquette || {};
                    if (modeleOpts.dico && "string" == typeof modeleOpts.dico) {
                        var urlDico = AR.OsBase.GetUrlGadget("/widgets/transformation/dicos/" + modeleOpts.dico + "/" + $langue + ".js", !0);
                        cacheDico[urlDico] || (cacheDico[urlDico] = jQuery.ajax({
                            url: urlDico,
                            scriptCharset: "utf-8",
                            dataType: "script",
                            cache: !0
                        })), cacheDico[urlDico].done(function () {
                            $dico = that["dicos-" + modeleOpts.dico + "-" + $langue]()
                        })
                    } else $dico = modeleOpts.dico || {};
                    var apresInsertionPage = this.apresInsertionPage = function (e) {
                        if (e == undefined)
                            for (var t, n = 0; t = $apresInsertionPage[n]; n++) t.fn(t.p);
                        else $apresInsertionPage.push(e)
                    },
                        execute = this.execute = function (a) {
                            $modeles = {}, $callback = a.callback || $callback, $dico = a.dico || $dico, $root = a.root, $data = a.data || {}, $apresTransformation = [], $apresInsertionPage = [], $toggleHeaders = {}, $toggleGroups = {}, $toggleHeadersLinks = {}, $evts = a.evts || modeleOpts.evts || {}, $instance = a.instance || modeleOpts.instance || {}, AR.OsBase.Attendre(function () {
                                return $maquette && $dico
                            }, function () {
                                var e = new Date,
                                    t = {
                                        sortie: jQuery("<div />")[0],
                                        current: $maquette,
                                        nd: $root,
                                        dom: {}
                                    };
                                xjs(t);
                                for (var n, r = new Date, i = 0; n = $apresTransformation[i]; i++) n.fn(n.p);
                                (a.success || function () { })({
                                    sortie: t.sortie,
                                    dom: t.dom,
                                    dico: $dico,
                                    ms: r.getTime() - e.getTime(),
                                    modeles: $modeles
                                })
                            })
                        },
                        xjs = function (ctx) {
                            var current = ctx.current,
                                sortie = ctx.sortie,
                                $nd = ctx.nd,
                                $dom = ctx.dom,
                                $idx = $nd.$idx = $nd.$idx || 0,
                                $self = $nd.$self = $nd,
                                $array = $nd.$array,
                                $premier = $nd.$premier = $nd.$array && 0 == $nd.$idx,
                                $dernier = $nd.$dernier = $nd.$array && $nd.$idx == $nd.$array.length - 1,
                                $pair = $nd.$pair = $nd.$array && $nd.$idx % 2 == 0,
                                $impair = $nd.$impair = $nd.$array && $nd.$idx % 2 == 1,
                                $fns = {
                                    jpath: function (expr) {
                                        for (var set = [], expressions = expr.replace(/\|\|/gi, separateur).split("|"), $ndOld = $nd, jpathExpr = function (expression) {
                                            for (var matches = expression.replace(new RegExp(separateur, "gi"), "||").replace(/(^\s*)|(\s*$)/gi, "").match(/[^{}]+|{[^}]+}/gi), m = 0, match; match = (matches || [])[m]; m++)
                                                if ("{" == match.substring(0, 1)) {
                                                    for (var tmp = $nd, i = 0; $nd = estArrayNonVide(tmp) ? tmp[i] : 0 == i ? tmp : null; i++) {
                                                        var test = !0;
                                                        try {
                                                            test = eval(match.substring(1, match.length - 1))
                                                        } catch (e) {
                                                            test = !1
                                                        }
                                                        if (!test) {
                                                            if (estNonArrayOuArrayVide(tmp)) return void ($nd = null);
                                                            $nd._xjs_ignore = !0
                                                        }
                                                    }
                                                    $nd = tmp
                                                } else {
                                                    try {
                                                        $nd = eval((-1 == match.indexOf("$") ? "$nd." : "") + match)
                                                    } catch (e) {
                                                        $nd = null
                                                    }
                                                    if (null == $nd) return
                                                }
                                        }, i = 0, expression; expression = expressions[i]; i++) $nd = $ndOld, jpathExpr(expression), !$nd && 0 != $nd || set.push($nd);
                                        if ($nd = 0 == set.length ? null : 1 == set.length ? set[0] : [], 1 < set.length) {
                                            $nd = [];
                                            for (var i = 0, item; item = set[i]; i++) estArray(item) ? $nd = $nd.concat(item) : $nd.push(item)
                                        }
                                    },
                                    test: function (e) {
                                        var t = $nd;
                                        $fns.jpath(e), $nd = null != $nd ? t : null
                                    },
                                    data: function (e) {
                                        jQuery.data(sortie, e, $nd)
                                    },
                                    prix: function (e) {
                                        $nd = AR.OsBase.FormatePrix(100 * parseFloat($nd), {
                                            span: !0
                                        })
                                    },
                                    date: function (e) {
                                        $nd = AR.OsBase.FormateDate($nd, e || "dd/MM/yyyy", $langue)
                                    },
                                    datexml: function (e) {
                                        $nd = AR.OsBase.FormateDate(AR.OsBase.DateXmlEnJs($nd), e || "dd/MM/yyyy", $langue)
                                    },
                                    minutes: function (e) {
                                        $nd = AR.OsBase.FormateMinutes($nd, e)
                                    },
                                    mots: function (e) {
                                        var t = new RegExp("(([^\\s\\r\\t\\n]+[\\s\\r\\t\\n]+){" + e + "})(.*)").exec($nd);
                                        t && t[1] && t[3] && ($nd = jQuery.trim(t[1]) + "...")
                                    },
                                    siteweb: function () {
                                        $nd = ($nd = jQuery.trim($nd || "")) && ($nd.match("^http(s)?://") ? $nd : "http://" + $nd)
                                    },
                                    langue: function () {
                                        $nd = $nd[$langue] || $nd.uk || $nd.fr
                                    },
                                    br: function () {
                                        $nd = $nd.replace(/\n/gi, "<br/>")
                                    },
                                    modele: function (e) {
                                        try {
                                            $modeles[e] = current
                                        } catch (e) { }
                                    },
                                    ancre: function (e) {
                                        try {
                                            jQuery(current).empty().append(jQuery($modeles[e]).clone())
                                        } catch (e) { }
                                    },
                                    maquette: function (e) {
                                        try {
                                            $modeles[e] = jQuery(current).children().first().clone()[0], jQuery(current).empty()
                                        } catch (e) { }
                                    },
                                    cache: function (e) {
                                        $nd = null
                                    },
                                    dico: function (cle) {
                                        try {
                                            for (var params = "", p, i = 0; p = current.childNodes[i]; i++) params += "for:dico" == (p.tagName || "").toLowerCase() ? ("" == params ? "" : ",") + jQuery(p).text() : "";
                                            $nd = 0 == params.length ? $dico[cle] : eval("(" + $dico[cle] + ")(" + params + ")")
                                        } catch (e) {
                                            $nd = ""
                                        }
                                    },
                                    csstxt: function (e) {
                                        jQuery(sortie).addClass("cssTxt").addClass("cssTxtCustom").addClass("oslangue-" + ($langue || "fr")).addClass(e)
                                    },
                                    attribut: function (e) {
                                        if (e) {
                                            var t = jQuery("<div />");
                                            parcoursEnfants({
                                                sortie: t,
                                                current: current,
                                                nd: $nd
                                            }), "class" == e ? jQuery(sortie).addClass(t.text()) : jQuery(sortie).attr(e, t.text()), "title" == e && jQuery(sortie).attr("alt", t.text())
                                        }
                                        $nd = null
                                    },
                                    proxyhttps: function () {
                                        null != $nd && "https" !== AR.URLHelper.getScheme($nd) && ($nd = AR.Config.getUrlProxyHttps($nd))
                                    },
                                    eval: function (expr) {
                                        try {
                                            $nd = eval(expr)
                                        } catch (e) {
                                            $nd = null
                                        }
                                    },
                                    script: function (expr) {
                                        eval(expr)
                                    },
                                    itere: function (expr) {
                                        try {
                                            for (var t = [], i = 0; i < eval(expr); i++) t.push($nd);
                                            $nd = t
                                        } catch (e) {
                                            $nd = null
                                        }
                                    },
                                    properties: function () {
                                        try {
                                            var e = [];
                                            for (var t in $nd) e.push({
                                                p: t,
                                                val: $nd[t]
                                            });
                                            $nd = e
                                        } catch (e) {
                                            $nd = null
                                        }
                                    },
                                    largeurhauteur: function () {
                                        try {
                                            if ($nd.paysage != undefined) return void jQuery(sortie).addClass(0 != $nd.paysage && "0" != $nd.paysage ? "largeur" : "hauteur")
                                        } catch (e) { }
                                        $apresTransformation.push({
                                            fn: function (e) {
                                                try {
                                                    var t = jQuery('<table style="position:absolute;top:-10000px;left:-10000px;visibility:hidden;"></table>').appendTo(jQuery("body")),
                                                        n = jQuery('<td><img src="' + (e.nd.vig || e.nd.src) + '" border="0" /></td>').appendTo(jQuery("<tr></tr>").appendTo(t));
                                                    jQuery(sortie).addClass(n.height() > n.width() ? "hauteur" : "largeur"), t.remove()
                                                } catch (e) { }
                                            },
                                            p: {
                                                sortie: sortie,
                                                nd: $nd
                                            }
                                        })
                                    },
                                    lightbox: function () {
                                        $apresTransformation.push({
                                            fn: function (e) {
                                                try {
                                                    jQuery(e.sortie).find("a").lightBox()
                                                } catch (e) { }
                                            },
                                            p: {
                                                sortie: sortie
                                            }
                                        })
                                    },
                                    togglehauteur: function (expr) {
                                        $apresInsertionPage.push({
                                            fn: function (e) {
                                                try {
                                                    jQuery(e.sortie).OsToggleHauteur(e.opts)
                                                } catch (e) { }
                                            },
                                            p: {
                                                sortie: sortie,
                                                opts: expr ? eval("new Object(" + expr + ")") : {}
                                            }
                                        })
                                    },
                                    toggleHeader: function (expr) {
                                        $toggleHeaders[eval(expr)] = sortie, $apresTransformation.push({
                                            fn: function (p) {
                                                try {
                                                    jQuery(p.sortie._toggleBody).addClass("toggleBody etat1"), jQuery(p.sortie).addClass("toggleHeader etat1"), jQuery(p.sortie._toggleLinks).addClass("toggleLink etat1");
                                                    var domClick = [p.sortie],
                                                        domHeadersLinks = $toggleHeadersLinks[eval(expr)];
                                                    domHeadersLinks && (domClick = domClick.concat(domHeadersLinks)), jQuery(domClick).click(function () {
                                                        var e = jQuery(p.sortie).hasClass("etat0") ? "etat1" : "etat0";
                                                        jQuery([p.sortie, p.sortie._toggleBody]).removeClass("etat0 etat1").addClass(e), p.sortie._toggleGroup && jQuery.each($toggleHeaders, function (e, t) {
                                                            p.sortie !== t && p.sortie._toggleGroup == t._toggleGroup && jQuery([t, t._toggleBody]).removeClass("etat0 etat1").addClass("etat0")
                                                        })
                                                    }).hover(function () {
                                                        jQuery(p.sortie).addClass("hover"), jQuery(p.sortie._toggleBody).addClass("header-hover")
                                                    }, function () {
                                                        jQuery(p.sortie).removeClass("hover"), jQuery(p.sortie._toggleBody).removeClass("header-hover")
                                                    }), p.sortie._toggleGroup && $toggleGroups[p.sortie._toggleGroup] ? jQuery([p.sortie, p.sortie._toggleBody]).removeClass("etat0 etat1").addClass("etat0") : p.sortie._toggleGroup && ($toggleGroups[p.sortie._toggleGroup] = p.sortie)
                                                } catch (e) { }
                                            },
                                            p: {
                                                sortie: sortie,
                                                nd: $nd
                                            }
                                        })
                                    },
                                    toggleBody: function (expr) {
                                        $toggleHeaders[eval(expr)]._toggleBody = sortie
                                    },
                                    toggleGroup: function (expr) {
                                        sortie._toggleGroup = eval(expr)
                                    },
                                    toggleHeaderLink: function (expr) {
                                        $toggleHeadersLinks[eval(expr)] = $toggleHeadersLinks[eval(expr)] || [], $toggleHeadersLinks[eval(expr)].push(sortie)
                                    },
                                    tooltip: function () {
                                        $apresInsertionPage.push({
                                            fn: function (e) {
                                                try {
                                                    AR.OsBase.WTooltip(e.sortie)
                                                } catch (e) { }
                                            },
                                            p: {
                                                sortie: sortie
                                            }
                                        })
                                    },
                                    trigger: function (e) {
                                        AR.OsBase.Trigger(AR.OsBase.GetJPath($evts, e), {
                                            sortie: sortie,
                                            nd: $nd,
                                            langue: $langue,
                                            data: $data
                                        }, {})
                                    },
                                    call: function (e) {
                                        if ($instance) {
                                            var t = !1;
                                            $instance[e] && (t = $instance[e]({
                                                sortie: sortie,
                                                nd: $nd,
                                                langue: $langue,
                                                data: $data
                                            })), !1 === t && ($nd = null)
                                        }
                                    },
                                    domObj: function (expr) {
                                        try {
                                            var domPath = "$dom." + expr,
                                                nouveau = {
                                                    sortie: sortie,
                                                    nd: $nd
                                                };
                                            nouveau.parent = $dom, eval(domPath + " = nouveau"), $dom = nouveau
                                        } catch (e) { }
                                    },
                                    domCol: function (expr) {
                                        try {
                                            var domPath = "$dom." + expr,
                                                nouveau = {
                                                    sortie: sortie,
                                                    nd: $nd
                                                },
                                                ancien = eval(domPath);
                                            if (ancien) nouveau.parent = ancien[0].parent, nouveau.array = ancien, nouveau.idx = ancien.length, ancien.push(nouveau);
                                            else {
                                                var col = [nouveau];
                                                nouveau.parent = $dom, nouveau.array = col, nouveau.idx = 0, eval(domPath + " = col")
                                            }
                                            $dom = nouveau
                                        } catch (e) { }
                                    },
                                    callback: function (e) {
                                        $apresTransformation.push({
                                            fn: $callback,
                                            p: {
                                                expr: e,
                                                nd: $nd,
                                                sortie: sortie,
                                                dom: $dom
                                            }
                                        })
                                    }
                                };
                            if (current.tagName)
                                if ("style" != current.tagName.toLowerCase()) {
                                    if (!tags[current.tagName.toLowerCase()]) {
                                        for (var cloneHTML = jQuery(document.createElement(current.tagName)), fix_IE_8_9_10_IMG_WIDTH = "img" == current.tagName.toLowerCase(), fix_IE_8_9_10_IMG_HEIGHT = "img" == current.tagName.toLowerCase(), i = 0, attr; attr = current.attributes[i]; i++) "xmlns:for" != attr.name && (cloneHTML.attr(attr.name, attr.value), fix_IE_8_9_10_IMG_WIDTH && "width" == attr.name.toLowerCase() && (fix_IE_8_9_10_IMG_WIDTH = !1), fix_IE_8_9_10_IMG_HEIGHT && "height" == attr.name.toLowerCase() && (fix_IE_8_9_10_IMG_WIDTH = !1));
                                        return fix_IE_8_9_10_IMG_WIDTH && cloneHTML.removeAttr("width"), fix_IE_8_9_10_IMG_HEIGHT && cloneHTML.removeAttr("height"), void parcoursEnfants({
                                            sortie: cloneHTML.appendTo(sortie)[0],
                                            current: current,
                                            nd: $nd,
                                            dom: $dom
                                        })
                                    }
                                    if ("for:contenu" != current.tagName.toLowerCase()) {
                                        for (var attributs = [], i = 0, attr; attr = current.attributes[i]; i++) attributs.push(attr);
                                        attributs.sort(triAttributs);
                                        for (var i = 0, attr; attr = attributs[i]; i++) null != $nd && $fns[attr.name](attr.value);
                                        if (null != $nd)
                                            if ("object" != typeof $nd) jQuery(sortie).append($nd);
                                            else if (estArray($nd))
                                                for (var i = 0, that; that = $nd[i]; i++) that._xjs_ignore || (that.$array = $nd, that.$idx = i, parcoursEnfants({
                                                    sortie: sortie,
                                                    current: current,
                                                    nd: that,
                                                    dom: $dom
                                                }));
                                            else parcoursEnfants({
                                                sortie: sortie,
                                                current: current,
                                                nd: $nd,
                                                dom: $dom
                                            })
                                    } else parcoursEnfants({
                                        sortie: sortie,
                                        current: current,
                                        nd: $nd,
                                        dom: $dom
                                    })
                                } else AR.OsBase.ChargeStyle(modeleOpts.maquette && "string" == typeof modeleOpts.maquette ? modeleOpts.maquette : "Transformation" + (new Date).getTime(), jQuery(current).text());
                            else {
                                if ("table" == (sortie.nodeName || "").toLowerCase()) return;
                                jQuery(sortie).append(jQuery(current).text())
                            }
                        },
                        parcoursEnfants = function (e) {
                            for (var t, n = 0; t = e.current.childNodes[n]; n++) xjs({
                                sortie: e.sortie,
                                current: t,
                                nd: e.nd,
                                dom: e.dom
                            })
                        }
                }
            }
        }(window, AllianceReseaux.jQuery, AllianceReseaux);
    AllianceReseaux._build._date = "2021-12-21T09:04:40";
    AllianceReseaux._build._load = true;
    (window._ar_noyau || function () { })();
}

export default reservation;