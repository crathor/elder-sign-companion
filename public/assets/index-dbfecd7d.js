function nb(e, t) {
    for (var n = 0; n < t.length; n++) {
        const r = t[n];
        if (typeof r != "string" && !Array.isArray(r)) {
            for (const o in r)
                if (o !== "default" && !(o in e)) {
                    const i = Object.getOwnPropertyDescriptor(r, o);
                    i &&
                        Object.defineProperty(
                            e,
                            o,
                            i.get ? i : { enumerable: !0, get: () => r[o] }
                        );
                }
        }
    }
    return Object.freeze(
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
    );
}
(function () {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const o of document.querySelectorAll('link[rel="modulepreload"]'))
        r(o);
    new MutationObserver((o) => {
        for (const i of o)
            if (i.type === "childList")
                for (const s of i.addedNodes)
                    s.tagName === "LINK" && s.rel === "modulepreload" && r(s);
    }).observe(document, { childList: !0, subtree: !0 });
    function n(o) {
        const i = {};
        return (
            o.integrity && (i.integrity = o.integrity),
            o.referrerpolicy && (i.referrerPolicy = o.referrerpolicy),
            o.crossorigin === "use-credentials"
                ? (i.credentials = "include")
                : o.crossorigin === "anonymous"
                ? (i.credentials = "omit")
                : (i.credentials = "same-origin"),
            i
        );
    }
    function r(o) {
        if (o.ep) return;
        o.ep = !0;
        const i = n(o);
        fetch(o.href, i);
    }
})();
function Dg(e) {
    return e &&
        e.__esModule &&
        Object.prototype.hasOwnProperty.call(e, "default")
        ? e.default
        : e;
}
var ts = {},
    rb = {
        get exports() {
            return ts;
        },
        set exports(e) {
            ts = e;
        },
    },
    yl = {},
    b = {},
    ob = {
        get exports() {
            return b;
        },
        set exports(e) {
            b = e;
        },
    },
    ye = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ts = Symbol.for("react.element"),
    ib = Symbol.for("react.portal"),
    sb = Symbol.for("react.fragment"),
    ab = Symbol.for("react.strict_mode"),
    lb = Symbol.for("react.profiler"),
    ub = Symbol.for("react.provider"),
    cb = Symbol.for("react.context"),
    db = Symbol.for("react.forward_ref"),
    fb = Symbol.for("react.suspense"),
    pb = Symbol.for("react.memo"),
    hb = Symbol.for("react.lazy"),
    Mp = Symbol.iterator;
function mb(e) {
    return e === null || typeof e != "object"
        ? null
        : ((e = (Mp && e[Mp]) || e["@@iterator"]),
          typeof e == "function" ? e : null);
}
var zg = {
        isMounted: function () {
            return !1;
        },
        enqueueForceUpdate: function () {},
        enqueueReplaceState: function () {},
        enqueueSetState: function () {},
    },
    Fg = Object.assign,
    Bg = {};
function si(e, t, n) {
    (this.props = e),
        (this.context = t),
        (this.refs = Bg),
        (this.updater = n || zg);
}
si.prototype.isReactComponent = {};
si.prototype.setState = function (e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null)
        throw Error(
            "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
        );
    this.updater.enqueueSetState(this, e, t, "setState");
};
si.prototype.forceUpdate = function (e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Ug() {}
Ug.prototype = si.prototype;
function Wd(e, t, n) {
    (this.props = e),
        (this.context = t),
        (this.refs = Bg),
        (this.updater = n || zg);
}
var jd = (Wd.prototype = new Ug());
jd.constructor = Wd;
Fg(jd, si.prototype);
jd.isPureReactComponent = !0;
var _p = Array.isArray,
    Wg = Object.prototype.hasOwnProperty,
    Vd = { current: null },
    jg = { key: !0, ref: !0, __self: !0, __source: !0 };
function Vg(e, t, n) {
    var r,
        o = {},
        i = null,
        s = null;
    if (t != null)
        for (r in (t.ref !== void 0 && (s = t.ref),
        t.key !== void 0 && (i = "" + t.key),
        t))
            Wg.call(t, r) && !jg.hasOwnProperty(r) && (o[r] = t[r]);
    var a = arguments.length - 2;
    if (a === 1) o.children = n;
    else if (1 < a) {
        for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 2];
        o.children = l;
    }
    if (e && e.defaultProps)
        for (r in ((a = e.defaultProps), a)) o[r] === void 0 && (o[r] = a[r]);
    return {
        $$typeof: Ts,
        type: e,
        key: i,
        ref: s,
        props: o,
        _owner: Vd.current,
    };
}
function gb(e, t) {
    return {
        $$typeof: Ts,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner,
    };
}
function Hd(e) {
    return typeof e == "object" && e !== null && e.$$typeof === Ts;
}
function yb(e) {
    var t = { "=": "=0", ":": "=2" };
    return (
        "$" +
        e.replace(/[=:]/g, function (n) {
            return t[n];
        })
    );
}
var Np = /\/+/g;
function Pu(e, t) {
    return typeof e == "object" && e !== null && e.key != null
        ? yb("" + e.key)
        : t.toString(36);
}
function ma(e, t, n, r, o) {
    var i = typeof e;
    (i === "undefined" || i === "boolean") && (e = null);
    var s = !1;
    if (e === null) s = !0;
    else
        switch (i) {
            case "string":
            case "number":
                s = !0;
                break;
            case "object":
                switch (e.$$typeof) {
                    case Ts:
                    case ib:
                        s = !0;
                }
        }
    if (s)
        return (
            (s = e),
            (o = o(s)),
            (e = r === "" ? "." + Pu(s, 0) : r),
            _p(o)
                ? ((n = ""),
                  e != null && (n = e.replace(Np, "$&/") + "/"),
                  ma(o, t, n, "", function (u) {
                      return u;
                  }))
                : o != null &&
                  (Hd(o) &&
                      (o = gb(
                          o,
                          n +
                              (!o.key || (s && s.key === o.key)
                                  ? ""
                                  : ("" + o.key).replace(Np, "$&/") + "/") +
                              e
                      )),
                  t.push(o)),
            1
        );
    if (((s = 0), (r = r === "" ? "." : r + ":"), _p(e)))
        for (var a = 0; a < e.length; a++) {
            i = e[a];
            var l = r + Pu(i, a);
            s += ma(i, t, n, l, o);
        }
    else if (((l = mb(e)), typeof l == "function"))
        for (e = l.call(e), a = 0; !(i = e.next()).done; )
            (i = i.value), (l = r + Pu(i, a++)), (s += ma(i, t, n, l, o));
    else if (i === "object")
        throw (
            ((t = String(e)),
            Error(
                "Objects are not valid as a React child (found: " +
                    (t === "[object Object]"
                        ? "object with keys {" + Object.keys(e).join(", ") + "}"
                        : t) +
                    "). If you meant to render a collection of children, use an array instead."
            ))
        );
    return s;
}
function Us(e, t, n) {
    if (e == null) return e;
    var r = [],
        o = 0;
    return (
        ma(e, r, "", "", function (i) {
            return t.call(n, i, o++);
        }),
        r
    );
}
function vb(e) {
    if (e._status === -1) {
        var t = e._result;
        (t = t()),
            t.then(
                function (n) {
                    (e._status === 0 || e._status === -1) &&
                        ((e._status = 1), (e._result = n));
                },
                function (n) {
                    (e._status === 0 || e._status === -1) &&
                        ((e._status = 2), (e._result = n));
                }
            ),
            e._status === -1 && ((e._status = 0), (e._result = t));
    }
    if (e._status === 1) return e._result.default;
    throw e._result;
}
var Rt = { current: null },
    ga = { transition: null },
    bb = {
        ReactCurrentDispatcher: Rt,
        ReactCurrentBatchConfig: ga,
        ReactCurrentOwner: Vd,
    };
ye.Children = {
    map: Us,
    forEach: function (e, t, n) {
        Us(
            e,
            function () {
                t.apply(this, arguments);
            },
            n
        );
    },
    count: function (e) {
        var t = 0;
        return (
            Us(e, function () {
                t++;
            }),
            t
        );
    },
    toArray: function (e) {
        return (
            Us(e, function (t) {
                return t;
            }) || []
        );
    },
    only: function (e) {
        if (!Hd(e))
            throw Error(
                "React.Children.only expected to receive a single React element child."
            );
        return e;
    },
};
ye.Component = si;
ye.Fragment = sb;
ye.Profiler = lb;
ye.PureComponent = Wd;
ye.StrictMode = ab;
ye.Suspense = fb;
ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = bb;
ye.cloneElement = function (e, t, n) {
    if (e == null)
        throw Error(
            "React.cloneElement(...): The argument must be a React element, but you passed " +
                e +
                "."
        );
    var r = Fg({}, e.props),
        o = e.key,
        i = e.ref,
        s = e._owner;
    if (t != null) {
        if (
            (t.ref !== void 0 && ((i = t.ref), (s = Vd.current)),
            t.key !== void 0 && (o = "" + t.key),
            e.type && e.type.defaultProps)
        )
            var a = e.type.defaultProps;
        for (l in t)
            Wg.call(t, l) &&
                !jg.hasOwnProperty(l) &&
                (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l]);
    }
    var l = arguments.length - 2;
    if (l === 1) r.children = n;
    else if (1 < l) {
        a = Array(l);
        for (var u = 0; u < l; u++) a[u] = arguments[u + 2];
        r.children = a;
    }
    return { $$typeof: Ts, type: e.type, key: o, ref: i, props: r, _owner: s };
};
ye.createContext = function (e) {
    return (
        (e = {
            $$typeof: cb,
            _currentValue: e,
            _currentValue2: e,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
            _defaultValue: null,
            _globalName: null,
        }),
        (e.Provider = { $$typeof: ub, _context: e }),
        (e.Consumer = e)
    );
};
ye.createElement = Vg;
ye.createFactory = function (e) {
    var t = Vg.bind(null, e);
    return (t.type = e), t;
};
ye.createRef = function () {
    return { current: null };
};
ye.forwardRef = function (e) {
    return { $$typeof: db, render: e };
};
ye.isValidElement = Hd;
ye.lazy = function (e) {
    return { $$typeof: hb, _payload: { _status: -1, _result: e }, _init: vb };
};
ye.memo = function (e, t) {
    return { $$typeof: pb, type: e, compare: t === void 0 ? null : t };
};
ye.startTransition = function (e) {
    var t = ga.transition;
    ga.transition = {};
    try {
        e();
    } finally {
        ga.transition = t;
    }
};
ye.unstable_act = function () {
    throw Error("act(...) is not supported in production builds of React.");
};
ye.useCallback = function (e, t) {
    return Rt.current.useCallback(e, t);
};
ye.useContext = function (e) {
    return Rt.current.useContext(e);
};
ye.useDebugValue = function () {};
ye.useDeferredValue = function (e) {
    return Rt.current.useDeferredValue(e);
};
ye.useEffect = function (e, t) {
    return Rt.current.useEffect(e, t);
};
ye.useId = function () {
    return Rt.current.useId();
};
ye.useImperativeHandle = function (e, t, n) {
    return Rt.current.useImperativeHandle(e, t, n);
};
ye.useInsertionEffect = function (e, t) {
    return Rt.current.useInsertionEffect(e, t);
};
ye.useLayoutEffect = function (e, t) {
    return Rt.current.useLayoutEffect(e, t);
};
ye.useMemo = function (e, t) {
    return Rt.current.useMemo(e, t);
};
ye.useReducer = function (e, t, n) {
    return Rt.current.useReducer(e, t, n);
};
ye.useRef = function (e) {
    return Rt.current.useRef(e);
};
ye.useState = function (e) {
    return Rt.current.useState(e);
};
ye.useSyncExternalStore = function (e, t, n) {
    return Rt.current.useSyncExternalStore(e, t, n);
};
ye.useTransition = function () {
    return Rt.current.useTransition();
};
ye.version = "18.2.0";
(function (e) {
    e.exports = ye;
})(ob);
const en = Dg(b),
    qo = nb({ __proto__: null, default: en }, [b]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var xb = b,
    wb = Symbol.for("react.element"),
    Sb = Symbol.for("react.fragment"),
    Cb = Object.prototype.hasOwnProperty,
    kb =
        xb.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    Eb = { key: !0, ref: !0, __self: !0, __source: !0 };
function Hg(e, t, n) {
    var r,
        o = {},
        i = null,
        s = null;
    n !== void 0 && (i = "" + n),
        t.key !== void 0 && (i = "" + t.key),
        t.ref !== void 0 && (s = t.ref);
    for (r in t) Cb.call(t, r) && !Eb.hasOwnProperty(r) && (o[r] = t[r]);
    if (e && e.defaultProps)
        for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
    return {
        $$typeof: wb,
        type: e,
        key: i,
        ref: s,
        props: o,
        _owner: kb.current,
    };
}
yl.Fragment = Sb;
yl.jsx = Hg;
yl.jsxs = Hg;
(function (e) {
    e.exports = yl;
})(rb);
const Rb = ts.Fragment,
    E = ts.jsx,
    te = ts.jsxs;
var xc = {},
    qr = {},
    Pb = {
        get exports() {
            return qr;
        },
        set exports(e) {
            qr = e;
        },
    },
    Gt = {},
    wc = {},
    $b = {
        get exports() {
            return wc;
        },
        set exports(e) {
            wc = e;
        },
    },
    Kg = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
    function t($, _) {
        var L = $.length;
        $.push(_);
        e: for (; 0 < L; ) {
            var V = (L - 1) >>> 1,
                ne = $[V];
            if (0 < o(ne, _)) ($[V] = _), ($[L] = ne), (L = V);
            else break e;
        }
    }
    function n($) {
        return $.length === 0 ? null : $[0];
    }
    function r($) {
        if ($.length === 0) return null;
        var _ = $[0],
            L = $.pop();
        if (L !== _) {
            $[0] = L;
            e: for (var V = 0, ne = $.length, _e = ne >>> 1; V < _e; ) {
                var se = 2 * (V + 1) - 1,
                    ve = $[se],
                    q = se + 1,
                    he = $[q];
                if (0 > o(ve, L))
                    q < ne && 0 > o(he, ve)
                        ? (($[V] = he), ($[q] = L), (V = q))
                        : (($[V] = ve), ($[se] = L), (V = se));
                else if (q < ne && 0 > o(he, L))
                    ($[V] = he), ($[q] = L), (V = q);
                else break e;
            }
        }
        return _;
    }
    function o($, _) {
        var L = $.sortIndex - _.sortIndex;
        return L !== 0 ? L : $.id - _.id;
    }
    if (
        typeof performance == "object" &&
        typeof performance.now == "function"
    ) {
        var i = performance;
        e.unstable_now = function () {
            return i.now();
        };
    } else {
        var s = Date,
            a = s.now();
        e.unstable_now = function () {
            return s.now() - a;
        };
    }
    var l = [],
        u = [],
        d = 1,
        f = null,
        c = 3,
        h = !1,
        g = !1,
        p = !1,
        S = typeof setTimeout == "function" ? setTimeout : null,
        y = typeof clearTimeout == "function" ? clearTimeout : null,
        m = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" &&
        navigator.scheduling !== void 0 &&
        navigator.scheduling.isInputPending !== void 0 &&
        navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function v($) {
        for (var _ = n(u); _ !== null; ) {
            if (_.callback === null) r(u);
            else if (_.startTime <= $)
                r(u), (_.sortIndex = _.expirationTime), t(l, _);
            else break;
            _ = n(u);
        }
    }
    function x($) {
        if (((p = !1), v($), !g))
            if (n(l) !== null) (g = !0), U(k);
            else {
                var _ = n(u);
                _ !== null && Z(x, _.startTime - $);
            }
    }
    function k($, _) {
        (g = !1), p && ((p = !1), y(T), (T = -1)), (h = !0);
        var L = c;
        try {
            for (
                v(_), f = n(l);
                f !== null && (!(f.expirationTime > _) || ($ && !D()));

            ) {
                var V = f.callback;
                if (typeof V == "function") {
                    (f.callback = null), (c = f.priorityLevel);
                    var ne = V(f.expirationTime <= _);
                    (_ = e.unstable_now()),
                        typeof ne == "function"
                            ? (f.callback = ne)
                            : f === n(l) && r(l),
                        v(_);
                } else r(l);
                f = n(l);
            }
            if (f !== null) var _e = !0;
            else {
                var se = n(u);
                se !== null && Z(x, se.startTime - _), (_e = !1);
            }
            return _e;
        } finally {
            (f = null), (c = L), (h = !1);
        }
    }
    var R = !1,
        C = null,
        T = -1,
        I = 5,
        P = -1;
    function D() {
        return !(e.unstable_now() - P < I);
    }
    function K() {
        if (C !== null) {
            var $ = e.unstable_now();
            P = $;
            var _ = !0;
            try {
                _ = C(!0, $);
            } finally {
                _ ? j() : ((R = !1), (C = null));
            }
        } else R = !1;
    }
    var j;
    if (typeof m == "function")
        j = function () {
            m(K);
        };
    else if (typeof MessageChannel < "u") {
        var N = new MessageChannel(),
            z = N.port2;
        (N.port1.onmessage = K),
            (j = function () {
                z.postMessage(null);
            });
    } else
        j = function () {
            S(K, 0);
        };
    function U($) {
        (C = $), R || ((R = !0), j());
    }
    function Z($, _) {
        T = S(function () {
            $(e.unstable_now());
        }, _);
    }
    (e.unstable_IdlePriority = 5),
        (e.unstable_ImmediatePriority = 1),
        (e.unstable_LowPriority = 4),
        (e.unstable_NormalPriority = 3),
        (e.unstable_Profiling = null),
        (e.unstable_UserBlockingPriority = 2),
        (e.unstable_cancelCallback = function ($) {
            $.callback = null;
        }),
        (e.unstable_continueExecution = function () {
            g || h || ((g = !0), U(k));
        }),
        (e.unstable_forceFrameRate = function ($) {
            0 > $ || 125 < $
                ? console.error(
                      "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                  )
                : (I = 0 < $ ? Math.floor(1e3 / $) : 5);
        }),
        (e.unstable_getCurrentPriorityLevel = function () {
            return c;
        }),
        (e.unstable_getFirstCallbackNode = function () {
            return n(l);
        }),
        (e.unstable_next = function ($) {
            switch (c) {
                case 1:
                case 2:
                case 3:
                    var _ = 3;
                    break;
                default:
                    _ = c;
            }
            var L = c;
            c = _;
            try {
                return $();
            } finally {
                c = L;
            }
        }),
        (e.unstable_pauseExecution = function () {}),
        (e.unstable_requestPaint = function () {}),
        (e.unstable_runWithPriority = function ($, _) {
            switch ($) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                default:
                    $ = 3;
            }
            var L = c;
            c = $;
            try {
                return _();
            } finally {
                c = L;
            }
        }),
        (e.unstable_scheduleCallback = function ($, _, L) {
            var V = e.unstable_now();
            switch (
                (typeof L == "object" && L !== null
                    ? ((L = L.delay),
                      (L = typeof L == "number" && 0 < L ? V + L : V))
                    : (L = V),
                $)
            ) {
                case 1:
                    var ne = -1;
                    break;
                case 2:
                    ne = 250;
                    break;
                case 5:
                    ne = 1073741823;
                    break;
                case 4:
                    ne = 1e4;
                    break;
                default:
                    ne = 5e3;
            }
            return (
                (ne = L + ne),
                ($ = {
                    id: d++,
                    callback: _,
                    priorityLevel: $,
                    startTime: L,
                    expirationTime: ne,
                    sortIndex: -1,
                }),
                L > V
                    ? (($.sortIndex = L),
                      t(u, $),
                      n(l) === null &&
                          $ === n(u) &&
                          (p ? (y(T), (T = -1)) : (p = !0), Z(x, L - V)))
                    : (($.sortIndex = ne), t(l, $), g || h || ((g = !0), U(k))),
                $
            );
        }),
        (e.unstable_shouldYield = D),
        (e.unstable_wrapCallback = function ($) {
            var _ = c;
            return function () {
                var L = c;
                c = _;
                try {
                    return $.apply(this, arguments);
                } finally {
                    c = L;
                }
            };
        });
})(Kg);
(function (e) {
    e.exports = Kg;
})($b);
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Gg = b,
    Ht = wc;
function F(e) {
    for (
        var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
            n = 1;
        n < arguments.length;
        n++
    )
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    return (
        "Minified React error #" +
        e +
        "; visit " +
        t +
        " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
}
var qg = new Set(),
    ns = {};
function oo(e, t) {
    Yo(e, t), Yo(e + "Capture", t);
}
function Yo(e, t) {
    for (ns[e] = t, e = 0; e < t.length; e++) qg.add(t[e]);
}
var Un = !(
        typeof window > "u" ||
        typeof window.document > "u" ||
        typeof window.document.createElement > "u"
    ),
    Sc = Object.prototype.hasOwnProperty,
    Tb =
        /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    Ap = {},
    Lp = {};
function Ib(e) {
    return Sc.call(Lp, e)
        ? !0
        : Sc.call(Ap, e)
        ? !1
        : Tb.test(e)
        ? (Lp[e] = !0)
        : ((Ap[e] = !0), !1);
}
function Ob(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
        case "function":
        case "symbol":
            return !0;
        case "boolean":
            return r
                ? !1
                : n !== null
                ? !n.acceptsBooleans
                : ((e = e.toLowerCase().slice(0, 5)),
                  e !== "data-" && e !== "aria-");
        default:
            return !1;
    }
}
function Mb(e, t, n, r) {
    if (t === null || typeof t > "u" || Ob(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null)
        switch (n.type) {
            case 3:
                return !t;
            case 4:
                return t === !1;
            case 5:
                return isNaN(t);
            case 6:
                return isNaN(t) || 1 > t;
        }
    return !1;
}
function Pt(e, t, n, r, o, i, s) {
    (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
        (this.attributeName = r),
        (this.attributeNamespace = o),
        (this.mustUseProperty = n),
        (this.propertyName = e),
        (this.type = t),
        (this.sanitizeURL = i),
        (this.removeEmptyString = s);
}
var yt = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (e) {
        yt[e] = new Pt(e, 0, !1, e, null, !1, !1);
    });
[
    ["acceptCharset", "accept-charset"],
    ["className", "class"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
].forEach(function (e) {
    var t = e[0];
    yt[t] = new Pt(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
    yt[e] = new Pt(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
    "autoReverse",
    "externalResourcesRequired",
    "focusable",
    "preserveAlpha",
].forEach(function (e) {
    yt[e] = new Pt(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
    .split(" ")
    .forEach(function (e) {
        yt[e] = new Pt(e, 3, !1, e.toLowerCase(), null, !1, !1);
    });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
    yt[e] = new Pt(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
    yt[e] = new Pt(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
    yt[e] = new Pt(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
    yt[e] = new Pt(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Kd = /[\-:]([a-z])/g;
function Gd(e) {
    return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
        var t = e.replace(Kd, Gd);
        yt[t] = new Pt(t, 1, !1, e, null, !1, !1);
    });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
    .split(" ")
    .forEach(function (e) {
        var t = e.replace(Kd, Gd);
        yt[t] = new Pt(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
    });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
    var t = e.replace(Kd, Gd);
    yt[t] = new Pt(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
    yt[e] = new Pt(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
yt.xlinkHref = new Pt(
    "xlinkHref",
    1,
    !1,
    "xlink:href",
    "http://www.w3.org/1999/xlink",
    !0,
    !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
    yt[e] = new Pt(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function qd(e, t, n, r) {
    var o = yt.hasOwnProperty(t) ? yt[t] : null;
    (o !== null
        ? o.type !== 0
        : r ||
          !(2 < t.length) ||
          (t[0] !== "o" && t[0] !== "O") ||
          (t[1] !== "n" && t[1] !== "N")) &&
        (Mb(t, n, o, r) && (n = null),
        r || o === null
            ? Ib(t) &&
              (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
            : o.mustUseProperty
            ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : "") : n)
            : ((t = o.attributeName),
              (r = o.attributeNamespace),
              n === null
                  ? e.removeAttribute(t)
                  : ((o = o.type),
                    (n = o === 3 || (o === 4 && n === !0) ? "" : "" + n),
                    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var qn = Gg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    Ws = Symbol.for("react.element"),
    bo = Symbol.for("react.portal"),
    xo = Symbol.for("react.fragment"),
    Yd = Symbol.for("react.strict_mode"),
    Cc = Symbol.for("react.profiler"),
    Yg = Symbol.for("react.provider"),
    Xg = Symbol.for("react.context"),
    Xd = Symbol.for("react.forward_ref"),
    kc = Symbol.for("react.suspense"),
    Ec = Symbol.for("react.suspense_list"),
    Qd = Symbol.for("react.memo"),
    er = Symbol.for("react.lazy"),
    Qg = Symbol.for("react.offscreen"),
    Dp = Symbol.iterator;
function gi(e) {
    return e === null || typeof e != "object"
        ? null
        : ((e = (Dp && e[Dp]) || e["@@iterator"]),
          typeof e == "function" ? e : null);
}
var Ke = Object.assign,
    $u;
function _i(e) {
    if ($u === void 0)
        try {
            throw Error();
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            $u = (t && t[1]) || "";
        }
    return (
        `
` +
        $u +
        e
    );
}
var Tu = !1;
function Iu(e, t) {
    if (!e || Tu) return "";
    Tu = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (
                ((t = function () {
                    throw Error();
                }),
                Object.defineProperty(t.prototype, "props", {
                    set: function () {
                        throw Error();
                    },
                }),
                typeof Reflect == "object" && Reflect.construct)
            ) {
                try {
                    Reflect.construct(t, []);
                } catch (u) {
                    var r = u;
                }
                Reflect.construct(e, [], t);
            } else {
                try {
                    t.call();
                } catch (u) {
                    r = u;
                }
                e.call(t.prototype);
            }
        else {
            try {
                throw Error();
            } catch (u) {
                r = u;
            }
            e();
        }
    } catch (u) {
        if (u && r && typeof u.stack == "string") {
            for (
                var o = u.stack.split(`
`),
                    i = r.stack.split(`
`),
                    s = o.length - 1,
                    a = i.length - 1;
                1 <= s && 0 <= a && o[s] !== i[a];

            )
                a--;
            for (; 1 <= s && 0 <= a; s--, a--)
                if (o[s] !== i[a]) {
                    if (s !== 1 || a !== 1)
                        do
                            if ((s--, a--, 0 > a || o[s] !== i[a])) {
                                var l =
                                    `
` + o[s].replace(" at new ", " at ");
                                return (
                                    e.displayName &&
                                        l.includes("<anonymous>") &&
                                        (l = l.replace(
                                            "<anonymous>",
                                            e.displayName
                                        )),
                                    l
                                );
                            }
                        while (1 <= s && 0 <= a);
                    break;
                }
        }
    } finally {
        (Tu = !1), (Error.prepareStackTrace = n);
    }
    return (e = e ? e.displayName || e.name : "") ? _i(e) : "";
}
function _b(e) {
    switch (e.tag) {
        case 5:
            return _i(e.type);
        case 16:
            return _i("Lazy");
        case 13:
            return _i("Suspense");
        case 19:
            return _i("SuspenseList");
        case 0:
        case 2:
        case 15:
            return (e = Iu(e.type, !1)), e;
        case 11:
            return (e = Iu(e.type.render, !1)), e;
        case 1:
            return (e = Iu(e.type, !0)), e;
        default:
            return "";
    }
}
function Rc(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
        case xo:
            return "Fragment";
        case bo:
            return "Portal";
        case Cc:
            return "Profiler";
        case Yd:
            return "StrictMode";
        case kc:
            return "Suspense";
        case Ec:
            return "SuspenseList";
    }
    if (typeof e == "object")
        switch (e.$$typeof) {
            case Xg:
                return (e.displayName || "Context") + ".Consumer";
            case Yg:
                return (e._context.displayName || "Context") + ".Provider";
            case Xd:
                var t = e.render;
                return (
                    (e = e.displayName),
                    e ||
                        ((e = t.displayName || t.name || ""),
                        (e =
                            e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
                    e
                );
            case Qd:
                return (
                    (t = e.displayName || null),
                    t !== null ? t : Rc(e.type) || "Memo"
                );
            case er:
                (t = e._payload), (e = e._init);
                try {
                    return Rc(e(t));
                } catch {}
        }
    return null;
}
function Nb(e) {
    var t = e.type;
    switch (e.tag) {
        case 24:
            return "Cache";
        case 9:
            return (t.displayName || "Context") + ".Consumer";
        case 10:
            return (t._context.displayName || "Context") + ".Provider";
        case 18:
            return "DehydratedFragment";
        case 11:
            return (
                (e = t.render),
                (e = e.displayName || e.name || ""),
                t.displayName ||
                    (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
            );
        case 7:
            return "Fragment";
        case 5:
            return t;
        case 4:
            return "Portal";
        case 3:
            return "Root";
        case 6:
            return "Text";
        case 16:
            return Rc(t);
        case 8:
            return t === Yd ? "StrictMode" : "Mode";
        case 22:
            return "Offscreen";
        case 12:
            return "Profiler";
        case 21:
            return "Scope";
        case 13:
            return "Suspense";
        case 19:
            return "SuspenseList";
        case 25:
            return "TracingMarker";
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
            if (typeof t == "function") return t.displayName || t.name || null;
            if (typeof t == "string") return t;
    }
    return null;
}
function br(e) {
    switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return e;
        case "object":
            return e;
        default:
            return "";
    }
}
function Jg(e) {
    var t = e.type;
    return (
        (e = e.nodeName) &&
        e.toLowerCase() === "input" &&
        (t === "checkbox" || t === "radio")
    );
}
function Ab(e) {
    var t = Jg(e) ? "checked" : "value",
        n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
        r = "" + e[t];
    if (
        !e.hasOwnProperty(t) &&
        typeof n < "u" &&
        typeof n.get == "function" &&
        typeof n.set == "function"
    ) {
        var o = n.get,
            i = n.set;
        return (
            Object.defineProperty(e, t, {
                configurable: !0,
                get: function () {
                    return o.call(this);
                },
                set: function (s) {
                    (r = "" + s), i.call(this, s);
                },
            }),
            Object.defineProperty(e, t, { enumerable: n.enumerable }),
            {
                getValue: function () {
                    return r;
                },
                setValue: function (s) {
                    r = "" + s;
                },
                stopTracking: function () {
                    (e._valueTracker = null), delete e[t];
                },
            }
        );
    }
}
function js(e) {
    e._valueTracker || (e._valueTracker = Ab(e));
}
function Zg(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
        r = "";
    return (
        e && (r = Jg(e) ? (e.checked ? "true" : "false") : e.value),
        (e = r),
        e !== n ? (t.setValue(e), !0) : !1
    );
}
function Aa(e) {
    if (
        ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
        return null;
    try {
        return e.activeElement || e.body;
    } catch {
        return e.body;
    }
}
function Pc(e, t) {
    var n = t.checked;
    return Ke({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? e._wrapperState.initialChecked,
    });
}
function zp(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
        r = t.checked != null ? t.checked : t.defaultChecked;
    (n = br(t.value != null ? t.value : n)),
        (e._wrapperState = {
            initialChecked: r,
            initialValue: n,
            controlled:
                t.type === "checkbox" || t.type === "radio"
                    ? t.checked != null
                    : t.value != null,
        });
}
function ey(e, t) {
    (t = t.checked), t != null && qd(e, "checked", t, !1);
}
function $c(e, t) {
    ey(e, t);
    var n = br(t.value),
        r = t.type;
    if (n != null)
        r === "number"
            ? ((n === 0 && e.value === "") || e.value != n) &&
              (e.value = "" + n)
            : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return;
    }
    t.hasOwnProperty("value")
        ? Tc(e, t.type, n)
        : t.hasOwnProperty("defaultValue") && Tc(e, t.type, br(t.defaultValue)),
        t.checked == null &&
            t.defaultChecked != null &&
            (e.defaultChecked = !!t.defaultChecked);
}
function Fp(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (
            !(
                (r !== "submit" && r !== "reset") ||
                (t.value !== void 0 && t.value !== null)
            )
        )
            return;
        (t = "" + e._wrapperState.initialValue),
            n || t === e.value || (e.value = t),
            (e.defaultValue = t);
    }
    (n = e.name),
        n !== "" && (e.name = ""),
        (e.defaultChecked = !!e._wrapperState.initialChecked),
        n !== "" && (e.name = n);
}
function Tc(e, t, n) {
    (t !== "number" || Aa(e.ownerDocument) !== e) &&
        (n == null
            ? (e.defaultValue = "" + e._wrapperState.initialValue)
            : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Ni = Array.isArray;
function No(e, t, n, r) {
    if (((e = e.options), t)) {
        t = {};
        for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
        for (n = 0; n < e.length; n++)
            (o = t.hasOwnProperty("$" + e[n].value)),
                e[n].selected !== o && (e[n].selected = o),
                o && r && (e[n].defaultSelected = !0);
    } else {
        for (n = "" + br(n), t = null, o = 0; o < e.length; o++) {
            if (e[o].value === n) {
                (e[o].selected = !0), r && (e[o].defaultSelected = !0);
                return;
            }
            t !== null || e[o].disabled || (t = e[o]);
        }
        t !== null && (t.selected = !0);
    }
}
function Ic(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(F(91));
    return Ke({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue,
    });
}
function Bp(e, t) {
    var n = t.value;
    if (n == null) {
        if (((n = t.children), (t = t.defaultValue), n != null)) {
            if (t != null) throw Error(F(92));
            if (Ni(n)) {
                if (1 < n.length) throw Error(F(93));
                n = n[0];
            }
            t = n;
        }
        t == null && (t = ""), (n = t);
    }
    e._wrapperState = { initialValue: br(n) };
}
function ty(e, t) {
    var n = br(t.value),
        r = br(t.defaultValue);
    n != null &&
        ((n = "" + n),
        n !== e.value && (e.value = n),
        t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
        r != null && (e.defaultValue = "" + r);
}
function Up(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue &&
        t !== "" &&
        t !== null &&
        (e.value = t);
}
function ny(e) {
    switch (e) {
        case "svg":
            return "http://www.w3.org/2000/svg";
        case "math":
            return "http://www.w3.org/1998/Math/MathML";
        default:
            return "http://www.w3.org/1999/xhtml";
    }
}
function Oc(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml"
        ? ny(t)
        : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
        ? "http://www.w3.org/1999/xhtml"
        : e;
}
var Vs,
    ry = (function (e) {
        return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
            ? function (t, n, r, o) {
                  MSApp.execUnsafeLocalFunction(function () {
                      return e(t, n, r, o);
                  });
              }
            : e;
    })(function (e, t) {
        if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
            e.innerHTML = t;
        else {
            for (
                Vs = Vs || document.createElement("div"),
                    Vs.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
                    t = Vs.firstChild;
                e.firstChild;

            )
                e.removeChild(e.firstChild);
            for (; t.firstChild; ) e.appendChild(t.firstChild);
        }
    });
function rs(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return;
        }
    }
    e.textContent = t;
}
var Ui = {
        animationIterationCount: !0,
        aspectRatio: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0,
    },
    Lb = ["Webkit", "ms", "Moz", "O"];
Object.keys(Ui).forEach(function (e) {
    Lb.forEach(function (t) {
        (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Ui[t] = Ui[e]);
    });
});
function oy(e, t, n) {
    return t == null || typeof t == "boolean" || t === ""
        ? ""
        : n ||
          typeof t != "number" ||
          t === 0 ||
          (Ui.hasOwnProperty(e) && Ui[e])
        ? ("" + t).trim()
        : t + "px";
}
function iy(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0,
                o = oy(n, t[n], r);
            n === "float" && (n = "cssFloat"),
                r ? e.setProperty(n, o) : (e[n] = o);
        }
}
var Db = Ke(
    { menuitem: !0 },
    {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0,
    }
);
function Mc(e, t) {
    if (t) {
        if (Db[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
            throw Error(F(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null) throw Error(F(60));
            if (
                typeof t.dangerouslySetInnerHTML != "object" ||
                !("__html" in t.dangerouslySetInnerHTML)
            )
                throw Error(F(61));
        }
        if (t.style != null && typeof t.style != "object") throw Error(F(62));
    }
}
function _c(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
            return !1;
        default:
            return !0;
    }
}
var Nc = null;
function Jd(e) {
    return (
        (e = e.target || e.srcElement || window),
        e.correspondingUseElement && (e = e.correspondingUseElement),
        e.nodeType === 3 ? e.parentNode : e
    );
}
var Ac = null,
    Ao = null,
    Lo = null;
function Wp(e) {
    if ((e = Ms(e))) {
        if (typeof Ac != "function") throw Error(F(280));
        var t = e.stateNode;
        t && ((t = Sl(t)), Ac(e.stateNode, e.type, t));
    }
}
function sy(e) {
    Ao ? (Lo ? Lo.push(e) : (Lo = [e])) : (Ao = e);
}
function ay() {
    if (Ao) {
        var e = Ao,
            t = Lo;
        if (((Lo = Ao = null), Wp(e), t))
            for (e = 0; e < t.length; e++) Wp(t[e]);
    }
}
function ly(e, t) {
    return e(t);
}
function uy() {}
var Ou = !1;
function cy(e, t, n) {
    if (Ou) return e(t, n);
    Ou = !0;
    try {
        return ly(e, t, n);
    } finally {
        (Ou = !1), (Ao !== null || Lo !== null) && (uy(), ay());
    }
}
function os(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = Sl(n);
    if (r === null) return null;
    n = r[t];
    e: switch (t) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
            (r = !r.disabled) ||
                ((e = e.type),
                (r = !(
                    e === "button" ||
                    e === "input" ||
                    e === "select" ||
                    e === "textarea"
                ))),
                (e = !r);
            break e;
        default:
            e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(F(231, t, typeof n));
    return n;
}
var Lc = !1;
if (Un)
    try {
        var yi = {};
        Object.defineProperty(yi, "passive", {
            get: function () {
                Lc = !0;
            },
        }),
            window.addEventListener("test", yi, yi),
            window.removeEventListener("test", yi, yi);
    } catch {
        Lc = !1;
    }
function zb(e, t, n, r, o, i, s, a, l) {
    var u = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, u);
    } catch (d) {
        this.onError(d);
    }
}
var Wi = !1,
    La = null,
    Da = !1,
    Dc = null,
    Fb = {
        onError: function (e) {
            (Wi = !0), (La = e);
        },
    };
function Bb(e, t, n, r, o, i, s, a, l) {
    (Wi = !1), (La = null), zb.apply(Fb, arguments);
}
function Ub(e, t, n, r, o, i, s, a, l) {
    if ((Bb.apply(this, arguments), Wi)) {
        if (Wi) {
            var u = La;
            (Wi = !1), (La = null);
        } else throw Error(F(198));
        Da || ((Da = !0), (Dc = u));
    }
}
function io(e) {
    var t = e,
        n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
        e = t;
        do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
        while (e);
    }
    return t.tag === 3 ? n : null;
}
function dy(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (
            (t === null &&
                ((e = e.alternate), e !== null && (t = e.memoizedState)),
            t !== null)
        )
            return t.dehydrated;
    }
    return null;
}
function jp(e) {
    if (io(e) !== e) throw Error(F(188));
}
function Wb(e) {
    var t = e.alternate;
    if (!t) {
        if (((t = io(e)), t === null)) throw Error(F(188));
        return t !== e ? null : e;
    }
    for (var n = e, r = t; ; ) {
        var o = n.return;
        if (o === null) break;
        var i = o.alternate;
        if (i === null) {
            if (((r = o.return), r !== null)) {
                n = r;
                continue;
            }
            break;
        }
        if (o.child === i.child) {
            for (i = o.child; i; ) {
                if (i === n) return jp(o), e;
                if (i === r) return jp(o), t;
                i = i.sibling;
            }
            throw Error(F(188));
        }
        if (n.return !== r.return) (n = o), (r = i);
        else {
            for (var s = !1, a = o.child; a; ) {
                if (a === n) {
                    (s = !0), (n = o), (r = i);
                    break;
                }
                if (a === r) {
                    (s = !0), (r = o), (n = i);
                    break;
                }
                a = a.sibling;
            }
            if (!s) {
                for (a = i.child; a; ) {
                    if (a === n) {
                        (s = !0), (n = i), (r = o);
                        break;
                    }
                    if (a === r) {
                        (s = !0), (r = i), (n = o);
                        break;
                    }
                    a = a.sibling;
                }
                if (!s) throw Error(F(189));
            }
        }
        if (n.alternate !== r) throw Error(F(190));
    }
    if (n.tag !== 3) throw Error(F(188));
    return n.stateNode.current === n ? e : t;
}
function fy(e) {
    return (e = Wb(e)), e !== null ? py(e) : null;
}
function py(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
        var t = py(e);
        if (t !== null) return t;
        e = e.sibling;
    }
    return null;
}
var hy = Ht.unstable_scheduleCallback,
    Vp = Ht.unstable_cancelCallback,
    jb = Ht.unstable_shouldYield,
    Vb = Ht.unstable_requestPaint,
    Qe = Ht.unstable_now,
    Hb = Ht.unstable_getCurrentPriorityLevel,
    Zd = Ht.unstable_ImmediatePriority,
    my = Ht.unstable_UserBlockingPriority,
    za = Ht.unstable_NormalPriority,
    Kb = Ht.unstable_LowPriority,
    gy = Ht.unstable_IdlePriority,
    vl = null,
    Pn = null;
function Gb(e) {
    if (Pn && typeof Pn.onCommitFiberRoot == "function")
        try {
            Pn.onCommitFiberRoot(
                vl,
                e,
                void 0,
                (e.current.flags & 128) === 128
            );
        } catch {}
}
var gn = Math.clz32 ? Math.clz32 : Xb,
    qb = Math.log,
    Yb = Math.LN2;
function Xb(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((qb(e) / Yb) | 0)) | 0;
}
var Hs = 64,
    Ks = 4194304;
function Ai(e) {
    switch (e & -e) {
        case 1:
            return 1;
        case 2:
            return 2;
        case 4:
            return 4;
        case 8:
            return 8;
        case 16:
            return 16;
        case 32:
            return 32;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return e & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return e & 130023424;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 1073741824;
        default:
            return e;
    }
}
function Fa(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
        o = e.suspendedLanes,
        i = e.pingedLanes,
        s = n & 268435455;
    if (s !== 0) {
        var a = s & ~o;
        a !== 0 ? (r = Ai(a)) : ((i &= s), i !== 0 && (r = Ai(i)));
    } else (s = n & ~o), s !== 0 ? (r = Ai(s)) : i !== 0 && (r = Ai(i));
    if (r === 0) return 0;
    if (
        t !== 0 &&
        t !== r &&
        !(t & o) &&
        ((o = r & -r),
        (i = t & -t),
        o >= i || (o === 16 && (i & 4194240) !== 0))
    )
        return t;
    if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
        for (e = e.entanglements, t &= r; 0 < t; )
            (n = 31 - gn(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
    return r;
}
function Qb(e, t) {
    switch (e) {
        case 1:
        case 2:
        case 4:
            return t + 250;
        case 8:
        case 16:
        case 32:
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return -1;
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1;
        default:
            return -1;
    }
}
function Jb(e, t) {
    for (
        var n = e.suspendedLanes,
            r = e.pingedLanes,
            o = e.expirationTimes,
            i = e.pendingLanes;
        0 < i;

    ) {
        var s = 31 - gn(i),
            a = 1 << s,
            l = o[s];
        l === -1
            ? (!(a & n) || a & r) && (o[s] = Qb(a, t))
            : l <= t && (e.expiredLanes |= a),
            (i &= ~a);
    }
}
function zc(e) {
    return (
        (e = e.pendingLanes & -1073741825),
        e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    );
}
function yy() {
    var e = Hs;
    return (Hs <<= 1), !(Hs & 4194240) && (Hs = 64), e;
}
function Mu(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
}
function Is(e, t, n) {
    (e.pendingLanes |= t),
        t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
        (e = e.eventTimes),
        (t = 31 - gn(t)),
        (e[t] = n);
}
function Zb(e, t) {
    var n = e.pendingLanes & ~t;
    (e.pendingLanes = t),
        (e.suspendedLanes = 0),
        (e.pingedLanes = 0),
        (e.expiredLanes &= t),
        (e.mutableReadLanes &= t),
        (e.entangledLanes &= t),
        (t = e.entanglements);
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
        var o = 31 - gn(n),
            i = 1 << o;
        (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~i);
    }
}
function ef(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
        var r = 31 - gn(n),
            o = 1 << r;
        (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
    }
}
var Re = 0;
function vy(e) {
    return (
        (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
    );
}
var by,
    tf,
    xy,
    wy,
    Sy,
    Fc = !1,
    Gs = [],
    lr = null,
    ur = null,
    cr = null,
    is = new Map(),
    ss = new Map(),
    nr = [],
    ex =
        "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
            " "
        );
function Hp(e, t) {
    switch (e) {
        case "focusin":
        case "focusout":
            lr = null;
            break;
        case "dragenter":
        case "dragleave":
            ur = null;
            break;
        case "mouseover":
        case "mouseout":
            cr = null;
            break;
        case "pointerover":
        case "pointerout":
            is.delete(t.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            ss.delete(t.pointerId);
    }
}
function vi(e, t, n, r, o, i) {
    return e === null || e.nativeEvent !== i
        ? ((e = {
              blockedOn: t,
              domEventName: n,
              eventSystemFlags: r,
              nativeEvent: i,
              targetContainers: [o],
          }),
          t !== null && ((t = Ms(t)), t !== null && tf(t)),
          e)
        : ((e.eventSystemFlags |= r),
          (t = e.targetContainers),
          o !== null && t.indexOf(o) === -1 && t.push(o),
          e);
}
function tx(e, t, n, r, o) {
    switch (t) {
        case "focusin":
            return (lr = vi(lr, e, t, n, r, o)), !0;
        case "dragenter":
            return (ur = vi(ur, e, t, n, r, o)), !0;
        case "mouseover":
            return (cr = vi(cr, e, t, n, r, o)), !0;
        case "pointerover":
            var i = o.pointerId;
            return is.set(i, vi(is.get(i) || null, e, t, n, r, o)), !0;
        case "gotpointercapture":
            return (
                (i = o.pointerId),
                ss.set(i, vi(ss.get(i) || null, e, t, n, r, o)),
                !0
            );
    }
    return !1;
}
function Cy(e) {
    var t = Ur(e.target);
    if (t !== null) {
        var n = io(t);
        if (n !== null) {
            if (((t = n.tag), t === 13)) {
                if (((t = dy(n)), t !== null)) {
                    (e.blockedOn = t),
                        Sy(e.priority, function () {
                            xy(n);
                        });
                    return;
                }
            } else if (
                t === 3 &&
                n.stateNode.current.memoizedState.isDehydrated
            ) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return;
            }
        }
    }
    e.blockedOn = null;
}
function ya(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
        var n = Bc(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type, n);
            (Nc = r), n.target.dispatchEvent(r), (Nc = null);
        } else return (t = Ms(n)), t !== null && tf(t), (e.blockedOn = n), !1;
        t.shift();
    }
    return !0;
}
function Kp(e, t, n) {
    ya(e) && n.delete(t);
}
function nx() {
    (Fc = !1),
        lr !== null && ya(lr) && (lr = null),
        ur !== null && ya(ur) && (ur = null),
        cr !== null && ya(cr) && (cr = null),
        is.forEach(Kp),
        ss.forEach(Kp);
}
function bi(e, t) {
    e.blockedOn === t &&
        ((e.blockedOn = null),
        Fc ||
            ((Fc = !0),
            Ht.unstable_scheduleCallback(Ht.unstable_NormalPriority, nx)));
}
function as(e) {
    function t(o) {
        return bi(o, e);
    }
    if (0 < Gs.length) {
        bi(Gs[0], e);
        for (var n = 1; n < Gs.length; n++) {
            var r = Gs[n];
            r.blockedOn === e && (r.blockedOn = null);
        }
    }
    for (
        lr !== null && bi(lr, e),
            ur !== null && bi(ur, e),
            cr !== null && bi(cr, e),
            is.forEach(t),
            ss.forEach(t),
            n = 0;
        n < nr.length;
        n++
    )
        (r = nr[n]), r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < nr.length && ((n = nr[0]), n.blockedOn === null); )
        Cy(n), n.blockedOn === null && nr.shift();
}
var Do = qn.ReactCurrentBatchConfig,
    Ba = !0;
function rx(e, t, n, r) {
    var o = Re,
        i = Do.transition;
    Do.transition = null;
    try {
        (Re = 1), nf(e, t, n, r);
    } finally {
        (Re = o), (Do.transition = i);
    }
}
function ox(e, t, n, r) {
    var o = Re,
        i = Do.transition;
    Do.transition = null;
    try {
        (Re = 4), nf(e, t, n, r);
    } finally {
        (Re = o), (Do.transition = i);
    }
}
function nf(e, t, n, r) {
    if (Ba) {
        var o = Bc(e, t, n, r);
        if (o === null) Wu(e, t, r, Ua, n), Hp(e, r);
        else if (tx(o, e, t, n, r)) r.stopPropagation();
        else if ((Hp(e, r), t & 4 && -1 < ex.indexOf(e))) {
            for (; o !== null; ) {
                var i = Ms(o);
                if (
                    (i !== null && by(i),
                    (i = Bc(e, t, n, r)),
                    i === null && Wu(e, t, r, Ua, n),
                    i === o)
                )
                    break;
                o = i;
            }
            o !== null && r.stopPropagation();
        } else Wu(e, t, r, null, n);
    }
}
var Ua = null;
function Bc(e, t, n, r) {
    if (((Ua = null), (e = Jd(r)), (e = Ur(e)), e !== null))
        if (((t = io(e)), t === null)) e = null;
        else if (((n = t.tag), n === 13)) {
            if (((e = dy(t)), e !== null)) return e;
            e = null;
        } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
                return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null;
        } else t !== e && (e = null);
    return (Ua = e), null;
}
function ky(e) {
    switch (e) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
            return 1;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
            return 4;
        case "message":
            switch (Hb()) {
                case Zd:
                    return 1;
                case my:
                    return 4;
                case za:
                case Kb:
                    return 16;
                case gy:
                    return 536870912;
                default:
                    return 16;
            }
        default:
            return 16;
    }
}
var ir = null,
    rf = null,
    va = null;
function Ey() {
    if (va) return va;
    var e,
        t = rf,
        n = t.length,
        r,
        o = "value" in ir ? ir.value : ir.textContent,
        i = o.length;
    for (e = 0; e < n && t[e] === o[e]; e++);
    var s = n - e;
    for (r = 1; r <= s && t[n - r] === o[i - r]; r++);
    return (va = o.slice(e, 1 < r ? 1 - r : void 0));
}
function ba(e) {
    var t = e.keyCode;
    return (
        "charCode" in e
            ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
            : (e = t),
        e === 10 && (e = 13),
        32 <= e || e === 13 ? e : 0
    );
}
function qs() {
    return !0;
}
function Gp() {
    return !1;
}
function qt(e) {
    function t(n, r, o, i, s) {
        (this._reactName = n),
            (this._targetInst = o),
            (this.type = r),
            (this.nativeEvent = i),
            (this.target = s),
            (this.currentTarget = null);
        for (var a in e)
            e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(i) : i[a]));
        return (
            (this.isDefaultPrevented = (
                i.defaultPrevented != null
                    ? i.defaultPrevented
                    : i.returnValue === !1
            )
                ? qs
                : Gp),
            (this.isPropagationStopped = Gp),
            this
        );
    }
    return (
        Ke(t.prototype, {
            preventDefault: function () {
                this.defaultPrevented = !0;
                var n = this.nativeEvent;
                n &&
                    (n.preventDefault
                        ? n.preventDefault()
                        : typeof n.returnValue != "unknown" &&
                          (n.returnValue = !1),
                    (this.isDefaultPrevented = qs));
            },
            stopPropagation: function () {
                var n = this.nativeEvent;
                n &&
                    (n.stopPropagation
                        ? n.stopPropagation()
                        : typeof n.cancelBubble != "unknown" &&
                          (n.cancelBubble = !0),
                    (this.isPropagationStopped = qs));
            },
            persist: function () {},
            isPersistent: qs,
        }),
        t
    );
}
var ai = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function (e) {
            return e.timeStamp || Date.now();
        },
        defaultPrevented: 0,
        isTrusted: 0,
    },
    of = qt(ai),
    Os = Ke({}, ai, { view: 0, detail: 0 }),
    ix = qt(Os),
    _u,
    Nu,
    xi,
    bl = Ke({}, Os, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: sf,
        button: 0,
        buttons: 0,
        relatedTarget: function (e) {
            return e.relatedTarget === void 0
                ? e.fromElement === e.srcElement
                    ? e.toElement
                    : e.fromElement
                : e.relatedTarget;
        },
        movementX: function (e) {
            return "movementX" in e
                ? e.movementX
                : (e !== xi &&
                      (xi && e.type === "mousemove"
                          ? ((_u = e.screenX - xi.screenX),
                            (Nu = e.screenY - xi.screenY))
                          : (Nu = _u = 0),
                      (xi = e)),
                  _u);
        },
        movementY: function (e) {
            return "movementY" in e ? e.movementY : Nu;
        },
    }),
    qp = qt(bl),
    sx = Ke({}, bl, { dataTransfer: 0 }),
    ax = qt(sx),
    lx = Ke({}, Os, { relatedTarget: 0 }),
    Au = qt(lx),
    ux = Ke({}, ai, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    cx = qt(ux),
    dx = Ke({}, ai, {
        clipboardData: function (e) {
            return "clipboardData" in e
                ? e.clipboardData
                : window.clipboardData;
        },
    }),
    fx = qt(dx),
    px = Ke({}, ai, { data: 0 }),
    Yp = qt(px),
    hx = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified",
    },
    mx = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta",
    },
    gx = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey",
    };
function yx(e) {
    var t = this.nativeEvent;
    return t.getModifierState
        ? t.getModifierState(e)
        : (e = gx[e])
        ? !!t[e]
        : !1;
}
function sf() {
    return yx;
}
var vx = Ke({}, Os, {
        key: function (e) {
            if (e.key) {
                var t = hx[e.key] || e.key;
                if (t !== "Unidentified") return t;
            }
            return e.type === "keypress"
                ? ((e = ba(e)), e === 13 ? "Enter" : String.fromCharCode(e))
                : e.type === "keydown" || e.type === "keyup"
                ? mx[e.keyCode] || "Unidentified"
                : "";
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: sf,
        charCode: function (e) {
            return e.type === "keypress" ? ba(e) : 0;
        },
        keyCode: function (e) {
            return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
        },
        which: function (e) {
            return e.type === "keypress"
                ? ba(e)
                : e.type === "keydown" || e.type === "keyup"
                ? e.keyCode
                : 0;
        },
    }),
    bx = qt(vx),
    xx = Ke({}, bl, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0,
    }),
    Xp = qt(xx),
    wx = Ke({}, Os, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: sf,
    }),
    Sx = qt(wx),
    Cx = Ke({}, ai, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    kx = qt(Cx),
    Ex = Ke({}, bl, {
        deltaX: function (e) {
            return "deltaX" in e
                ? e.deltaX
                : "wheelDeltaX" in e
                ? -e.wheelDeltaX
                : 0;
        },
        deltaY: function (e) {
            return "deltaY" in e
                ? e.deltaY
                : "wheelDeltaY" in e
                ? -e.wheelDeltaY
                : "wheelDelta" in e
                ? -e.wheelDelta
                : 0;
        },
        deltaZ: 0,
        deltaMode: 0,
    }),
    Rx = qt(Ex),
    Px = [9, 13, 27, 32],
    af = Un && "CompositionEvent" in window,
    ji = null;
Un && "documentMode" in document && (ji = document.documentMode);
var $x = Un && "TextEvent" in window && !ji,
    Ry = Un && (!af || (ji && 8 < ji && 11 >= ji)),
    Qp = String.fromCharCode(32),
    Jp = !1;
function Py(e, t) {
    switch (e) {
        case "keyup":
            return Px.indexOf(t.keyCode) !== -1;
        case "keydown":
            return t.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1;
    }
}
function $y(e) {
    return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var wo = !1;
function Tx(e, t) {
    switch (e) {
        case "compositionend":
            return $y(t);
        case "keypress":
            return t.which !== 32 ? null : ((Jp = !0), Qp);
        case "textInput":
            return (e = t.data), e === Qp && Jp ? null : e;
        default:
            return null;
    }
}
function Ix(e, t) {
    if (wo)
        return e === "compositionend" || (!af && Py(e, t))
            ? ((e = Ey()), (va = rf = ir = null), (wo = !1), e)
            : null;
    switch (e) {
        case "paste":
            return null;
        case "keypress":
            if (
                !(t.ctrlKey || t.altKey || t.metaKey) ||
                (t.ctrlKey && t.altKey)
            ) {
                if (t.char && 1 < t.char.length) return t.char;
                if (t.which) return String.fromCharCode(t.which);
            }
            return null;
        case "compositionend":
            return Ry && t.locale !== "ko" ? null : t.data;
        default:
            return null;
    }
}
var Ox = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
};
function Zp(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Ox[e.type] : t === "textarea";
}
function Ty(e, t, n, r) {
    sy(r),
        (t = Wa(t, "onChange")),
        0 < t.length &&
            ((n = new of("onChange", "change", null, n, r)),
            e.push({ event: n, listeners: t }));
}
var Vi = null,
    ls = null;
function Mx(e) {
    By(e, 0);
}
function xl(e) {
    var t = ko(e);
    if (Zg(t)) return e;
}
function _x(e, t) {
    if (e === "change") return t;
}
var Iy = !1;
if (Un) {
    var Lu;
    if (Un) {
        var Du = "oninput" in document;
        if (!Du) {
            var eh = document.createElement("div");
            eh.setAttribute("oninput", "return;"),
                (Du = typeof eh.oninput == "function");
        }
        Lu = Du;
    } else Lu = !1;
    Iy = Lu && (!document.documentMode || 9 < document.documentMode);
}
function th() {
    Vi && (Vi.detachEvent("onpropertychange", Oy), (ls = Vi = null));
}
function Oy(e) {
    if (e.propertyName === "value" && xl(ls)) {
        var t = [];
        Ty(t, ls, e, Jd(e)), cy(Mx, t);
    }
}
function Nx(e, t, n) {
    e === "focusin"
        ? (th(), (Vi = t), (ls = n), Vi.attachEvent("onpropertychange", Oy))
        : e === "focusout" && th();
}
function Ax(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return xl(ls);
}
function Lx(e, t) {
    if (e === "click") return xl(t);
}
function Dx(e, t) {
    if (e === "input" || e === "change") return xl(t);
}
function zx(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var vn = typeof Object.is == "function" ? Object.is : zx;
function us(e, t) {
    if (vn(e, t)) return !0;
    if (
        typeof e != "object" ||
        e === null ||
        typeof t != "object" ||
        t === null
    )
        return !1;
    var n = Object.keys(e),
        r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
        var o = n[r];
        if (!Sc.call(t, o) || !vn(e[o], t[o])) return !1;
    }
    return !0;
}
function nh(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
}
function rh(e, t) {
    var n = nh(e);
    e = 0;
    for (var r; n; ) {
        if (n.nodeType === 3) {
            if (((r = e + n.textContent.length), e <= t && r >= t))
                return { node: n, offset: t - e };
            e = r;
        }
        e: {
            for (; n; ) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e;
                }
                n = n.parentNode;
            }
            n = void 0;
        }
        n = nh(n);
    }
}
function My(e, t) {
    return e && t
        ? e === t
            ? !0
            : e && e.nodeType === 3
            ? !1
            : t && t.nodeType === 3
            ? My(e, t.parentNode)
            : "contains" in e
            ? e.contains(t)
            : e.compareDocumentPosition
            ? !!(e.compareDocumentPosition(t) & 16)
            : !1
        : !1;
}
function _y() {
    for (var e = window, t = Aa(); t instanceof e.HTMLIFrameElement; ) {
        try {
            var n = typeof t.contentWindow.location.href == "string";
        } catch {
            n = !1;
        }
        if (n) e = t.contentWindow;
        else break;
        t = Aa(e.document);
    }
    return t;
}
function lf(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
        t &&
        ((t === "input" &&
            (e.type === "text" ||
                e.type === "search" ||
                e.type === "tel" ||
                e.type === "url" ||
                e.type === "password")) ||
            t === "textarea" ||
            e.contentEditable === "true")
    );
}
function Fx(e) {
    var t = _y(),
        n = e.focusedElem,
        r = e.selectionRange;
    if (
        t !== n &&
        n &&
        n.ownerDocument &&
        My(n.ownerDocument.documentElement, n)
    ) {
        if (r !== null && lf(n)) {
            if (
                ((t = r.start),
                (e = r.end),
                e === void 0 && (e = t),
                "selectionStart" in n)
            )
                (n.selectionStart = t),
                    (n.selectionEnd = Math.min(e, n.value.length));
            else if (
                ((e =
                    ((t = n.ownerDocument || document) && t.defaultView) ||
                    window),
                e.getSelection)
            ) {
                e = e.getSelection();
                var o = n.textContent.length,
                    i = Math.min(r.start, o);
                (r = r.end === void 0 ? i : Math.min(r.end, o)),
                    !e.extend && i > r && ((o = r), (r = i), (i = o)),
                    (o = rh(n, i));
                var s = rh(n, r);
                o &&
                    s &&
                    (e.rangeCount !== 1 ||
                        e.anchorNode !== o.node ||
                        e.anchorOffset !== o.offset ||
                        e.focusNode !== s.node ||
                        e.focusOffset !== s.offset) &&
                    ((t = t.createRange()),
                    t.setStart(o.node, o.offset),
                    e.removeAllRanges(),
                    i > r
                        ? (e.addRange(t), e.extend(s.node, s.offset))
                        : (t.setEnd(s.node, s.offset), e.addRange(t)));
            }
        }
        for (t = [], e = n; (e = e.parentNode); )
            e.nodeType === 1 &&
                t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
        for (
            typeof n.focus == "function" && n.focus(), n = 0;
            n < t.length;
            n++
        )
            (e = t[n]),
                (e.element.scrollLeft = e.left),
                (e.element.scrollTop = e.top);
    }
}
var Bx = Un && "documentMode" in document && 11 >= document.documentMode,
    So = null,
    Uc = null,
    Hi = null,
    Wc = !1;
function oh(e, t, n) {
    var r =
        n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Wc ||
        So == null ||
        So !== Aa(r) ||
        ((r = So),
        "selectionStart" in r && lf(r)
            ? (r = { start: r.selectionStart, end: r.selectionEnd })
            : ((r = (
                  (r.ownerDocument && r.ownerDocument.defaultView) ||
                  window
              ).getSelection()),
              (r = {
                  anchorNode: r.anchorNode,
                  anchorOffset: r.anchorOffset,
                  focusNode: r.focusNode,
                  focusOffset: r.focusOffset,
              })),
        (Hi && us(Hi, r)) ||
            ((Hi = r),
            (r = Wa(Uc, "onSelect")),
            0 < r.length &&
                ((t = new of("onSelect", "select", null, t, n)),
                e.push({ event: t, listeners: r }),
                (t.target = So))));
}
function Ys(e, t) {
    var n = {};
    return (
        (n[e.toLowerCase()] = t.toLowerCase()),
        (n["Webkit" + e] = "webkit" + t),
        (n["Moz" + e] = "moz" + t),
        n
    );
}
var Co = {
        animationend: Ys("Animation", "AnimationEnd"),
        animationiteration: Ys("Animation", "AnimationIteration"),
        animationstart: Ys("Animation", "AnimationStart"),
        transitionend: Ys("Transition", "TransitionEnd"),
    },
    zu = {},
    Ny = {};
Un &&
    ((Ny = document.createElement("div").style),
    "AnimationEvent" in window ||
        (delete Co.animationend.animation,
        delete Co.animationiteration.animation,
        delete Co.animationstart.animation),
    "TransitionEvent" in window || delete Co.transitionend.transition);
function wl(e) {
    if (zu[e]) return zu[e];
    if (!Co[e]) return e;
    var t = Co[e],
        n;
    for (n in t) if (t.hasOwnProperty(n) && n in Ny) return (zu[e] = t[n]);
    return e;
}
var Ay = wl("animationend"),
    Ly = wl("animationiteration"),
    Dy = wl("animationstart"),
    zy = wl("transitionend"),
    Fy = new Map(),
    ih =
        "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
            " "
        );
function Er(e, t) {
    Fy.set(e, t), oo(t, [e]);
}
for (var Fu = 0; Fu < ih.length; Fu++) {
    var Bu = ih[Fu],
        Ux = Bu.toLowerCase(),
        Wx = Bu[0].toUpperCase() + Bu.slice(1);
    Er(Ux, "on" + Wx);
}
Er(Ay, "onAnimationEnd");
Er(Ly, "onAnimationIteration");
Er(Dy, "onAnimationStart");
Er("dblclick", "onDoubleClick");
Er("focusin", "onFocus");
Er("focusout", "onBlur");
Er(zy, "onTransitionEnd");
Yo("onMouseEnter", ["mouseout", "mouseover"]);
Yo("onMouseLeave", ["mouseout", "mouseover"]);
Yo("onPointerEnter", ["pointerout", "pointerover"]);
Yo("onPointerLeave", ["pointerout", "pointerover"]);
oo(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(
        " "
    )
);
oo(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
    )
);
oo("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
oo(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
oo(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
oo(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Li =
        "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
            " "
        ),
    jx = new Set(
        "cancel close invalid load scroll toggle".split(" ").concat(Li)
    );
function sh(e, t, n) {
    var r = e.type || "unknown-event";
    (e.currentTarget = n), Ub(r, t, void 0, e), (e.currentTarget = null);
}
function By(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n],
            o = r.event;
        r = r.listeners;
        e: {
            var i = void 0;
            if (t)
                for (var s = r.length - 1; 0 <= s; s--) {
                    var a = r[s],
                        l = a.instance,
                        u = a.currentTarget;
                    if (((a = a.listener), l !== i && o.isPropagationStopped()))
                        break e;
                    sh(o, a, u), (i = l);
                }
            else
                for (s = 0; s < r.length; s++) {
                    if (
                        ((a = r[s]),
                        (l = a.instance),
                        (u = a.currentTarget),
                        (a = a.listener),
                        l !== i && o.isPropagationStopped())
                    )
                        break e;
                    sh(o, a, u), (i = l);
                }
        }
    }
    if (Da) throw ((e = Dc), (Da = !1), (Dc = null), e);
}
function Le(e, t) {
    var n = t[Gc];
    n === void 0 && (n = t[Gc] = new Set());
    var r = e + "__bubble";
    n.has(r) || (Uy(t, e, 2, !1), n.add(r));
}
function Uu(e, t, n) {
    var r = 0;
    t && (r |= 4), Uy(n, e, r, t);
}
var Xs = "_reactListening" + Math.random().toString(36).slice(2);
function cs(e) {
    if (!e[Xs]) {
        (e[Xs] = !0),
            qg.forEach(function (n) {
                n !== "selectionchange" &&
                    (jx.has(n) || Uu(n, !1, e), Uu(n, !0, e));
            });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[Xs] || ((t[Xs] = !0), Uu("selectionchange", !1, t));
    }
}
function Uy(e, t, n, r) {
    switch (ky(t)) {
        case 1:
            var o = rx;
            break;
        case 4:
            o = ox;
            break;
        default:
            o = nf;
    }
    (n = o.bind(null, t, n, e)),
        (o = void 0),
        !Lc ||
            (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
            (o = !0),
        r
            ? o !== void 0
                ? e.addEventListener(t, n, { capture: !0, passive: o })
                : e.addEventListener(t, n, !0)
            : o !== void 0
            ? e.addEventListener(t, n, { passive: o })
            : e.addEventListener(t, n, !1);
}
function Wu(e, t, n, r, o) {
    var i = r;
    if (!(t & 1) && !(t & 2) && r !== null)
        e: for (;;) {
            if (r === null) return;
            var s = r.tag;
            if (s === 3 || s === 4) {
                var a = r.stateNode.containerInfo;
                if (a === o || (a.nodeType === 8 && a.parentNode === o)) break;
                if (s === 4)
                    for (s = r.return; s !== null; ) {
                        var l = s.tag;
                        if (
                            (l === 3 || l === 4) &&
                            ((l = s.stateNode.containerInfo),
                            l === o || (l.nodeType === 8 && l.parentNode === o))
                        )
                            return;
                        s = s.return;
                    }
                for (; a !== null; ) {
                    if (((s = Ur(a)), s === null)) return;
                    if (((l = s.tag), l === 5 || l === 6)) {
                        r = i = s;
                        continue e;
                    }
                    a = a.parentNode;
                }
            }
            r = r.return;
        }
    cy(function () {
        var u = i,
            d = Jd(n),
            f = [];
        e: {
            var c = Fy.get(e);
            if (c !== void 0) {
                var h = of,
                    g = e;
                switch (e) {
                    case "keypress":
                        if (ba(n) === 0) break e;
                    case "keydown":
                    case "keyup":
                        h = bx;
                        break;
                    case "focusin":
                        (g = "focus"), (h = Au);
                        break;
                    case "focusout":
                        (g = "blur"), (h = Au);
                        break;
                    case "beforeblur":
                    case "afterblur":
                        h = Au;
                        break;
                    case "click":
                        if (n.button === 2) break e;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        h = qp;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        h = ax;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        h = Sx;
                        break;
                    case Ay:
                    case Ly:
                    case Dy:
                        h = cx;
                        break;
                    case zy:
                        h = kx;
                        break;
                    case "scroll":
                        h = ix;
                        break;
                    case "wheel":
                        h = Rx;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        h = fx;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        h = Xp;
                }
                var p = (t & 4) !== 0,
                    S = !p && e === "scroll",
                    y = p ? (c !== null ? c + "Capture" : null) : c;
                p = [];
                for (var m = u, v; m !== null; ) {
                    v = m;
                    var x = v.stateNode;
                    if (
                        (v.tag === 5 &&
                            x !== null &&
                            ((v = x),
                            y !== null &&
                                ((x = os(m, y)),
                                x != null && p.push(ds(m, x, v)))),
                        S)
                    )
                        break;
                    m = m.return;
                }
                0 < p.length &&
                    ((c = new h(c, g, null, n, d)),
                    f.push({ event: c, listeners: p }));
            }
        }
        if (!(t & 7)) {
            e: {
                if (
                    ((c = e === "mouseover" || e === "pointerover"),
                    (h = e === "mouseout" || e === "pointerout"),
                    c &&
                        n !== Nc &&
                        (g = n.relatedTarget || n.fromElement) &&
                        (Ur(g) || g[Wn]))
                )
                    break e;
                if (
                    (h || c) &&
                    ((c =
                        d.window === d
                            ? d
                            : (c = d.ownerDocument)
                            ? c.defaultView || c.parentWindow
                            : window),
                    h
                        ? ((g = n.relatedTarget || n.toElement),
                          (h = u),
                          (g = g ? Ur(g) : null),
                          g !== null &&
                              ((S = io(g)),
                              g !== S || (g.tag !== 5 && g.tag !== 6)) &&
                              (g = null))
                        : ((h = null), (g = u)),
                    h !== g)
                ) {
                    if (
                        ((p = qp),
                        (x = "onMouseLeave"),
                        (y = "onMouseEnter"),
                        (m = "mouse"),
                        (e === "pointerout" || e === "pointerover") &&
                            ((p = Xp),
                            (x = "onPointerLeave"),
                            (y = "onPointerEnter"),
                            (m = "pointer")),
                        (S = h == null ? c : ko(h)),
                        (v = g == null ? c : ko(g)),
                        (c = new p(x, m + "leave", h, n, d)),
                        (c.target = S),
                        (c.relatedTarget = v),
                        (x = null),
                        Ur(d) === u &&
                            ((p = new p(y, m + "enter", g, n, d)),
                            (p.target = v),
                            (p.relatedTarget = S),
                            (x = p)),
                        (S = x),
                        h && g)
                    )
                        t: {
                            for (p = h, y = g, m = 0, v = p; v; v = lo(v)) m++;
                            for (v = 0, x = y; x; x = lo(x)) v++;
                            for (; 0 < m - v; ) (p = lo(p)), m--;
                            for (; 0 < v - m; ) (y = lo(y)), v--;
                            for (; m--; ) {
                                if (
                                    p === y ||
                                    (y !== null && p === y.alternate)
                                )
                                    break t;
                                (p = lo(p)), (y = lo(y));
                            }
                            p = null;
                        }
                    else p = null;
                    h !== null && ah(f, c, h, p, !1),
                        g !== null && S !== null && ah(f, S, g, p, !0);
                }
            }
            e: {
                if (
                    ((c = u ? ko(u) : window),
                    (h = c.nodeName && c.nodeName.toLowerCase()),
                    h === "select" || (h === "input" && c.type === "file"))
                )
                    var k = _x;
                else if (Zp(c))
                    if (Iy) k = Dx;
                    else {
                        k = Ax;
                        var R = Nx;
                    }
                else
                    (h = c.nodeName) &&
                        h.toLowerCase() === "input" &&
                        (c.type === "checkbox" || c.type === "radio") &&
                        (k = Lx);
                if (k && (k = k(e, u))) {
                    Ty(f, k, n, d);
                    break e;
                }
                R && R(e, c, u),
                    e === "focusout" &&
                        (R = c._wrapperState) &&
                        R.controlled &&
                        c.type === "number" &&
                        Tc(c, "number", c.value);
            }
            switch (((R = u ? ko(u) : window), e)) {
                case "focusin":
                    (Zp(R) || R.contentEditable === "true") &&
                        ((So = R), (Uc = u), (Hi = null));
                    break;
                case "focusout":
                    Hi = Uc = So = null;
                    break;
                case "mousedown":
                    Wc = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    (Wc = !1), oh(f, n, d);
                    break;
                case "selectionchange":
                    if (Bx) break;
                case "keydown":
                case "keyup":
                    oh(f, n, d);
            }
            var C;
            if (af)
                e: {
                    switch (e) {
                        case "compositionstart":
                            var T = "onCompositionStart";
                            break e;
                        case "compositionend":
                            T = "onCompositionEnd";
                            break e;
                        case "compositionupdate":
                            T = "onCompositionUpdate";
                            break e;
                    }
                    T = void 0;
                }
            else
                wo
                    ? Py(e, n) && (T = "onCompositionEnd")
                    : e === "keydown" &&
                      n.keyCode === 229 &&
                      (T = "onCompositionStart");
            T &&
                (Ry &&
                    n.locale !== "ko" &&
                    (wo || T !== "onCompositionStart"
                        ? T === "onCompositionEnd" && wo && (C = Ey())
                        : ((ir = d),
                          (rf = "value" in ir ? ir.value : ir.textContent),
                          (wo = !0))),
                (R = Wa(u, T)),
                0 < R.length &&
                    ((T = new Yp(T, e, null, n, d)),
                    f.push({ event: T, listeners: R }),
                    C
                        ? (T.data = C)
                        : ((C = $y(n)), C !== null && (T.data = C)))),
                (C = $x ? Tx(e, n) : Ix(e, n)) &&
                    ((u = Wa(u, "onBeforeInput")),
                    0 < u.length &&
                        ((d = new Yp(
                            "onBeforeInput",
                            "beforeinput",
                            null,
                            n,
                            d
                        )),
                        f.push({ event: d, listeners: u }),
                        (d.data = C)));
        }
        By(f, t);
    });
}
function ds(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
}
function Wa(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
        var o = e,
            i = o.stateNode;
        o.tag === 5 &&
            i !== null &&
            ((o = i),
            (i = os(e, n)),
            i != null && r.unshift(ds(e, i, o)),
            (i = os(e, t)),
            i != null && r.push(ds(e, i, o))),
            (e = e.return);
    }
    return r;
}
function lo(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
}
function ah(e, t, n, r, o) {
    for (var i = t._reactName, s = []; n !== null && n !== r; ) {
        var a = n,
            l = a.alternate,
            u = a.stateNode;
        if (l !== null && l === r) break;
        a.tag === 5 &&
            u !== null &&
            ((a = u),
            o
                ? ((l = os(n, i)), l != null && s.unshift(ds(n, l, a)))
                : o || ((l = os(n, i)), l != null && s.push(ds(n, l, a)))),
            (n = n.return);
    }
    s.length !== 0 && e.push({ event: t, listeners: s });
}
var Vx = /\r\n?/g,
    Hx = /\u0000|\uFFFD/g;
function lh(e) {
    return (typeof e == "string" ? e : "" + e)
        .replace(
            Vx,
            `
`
        )
        .replace(Hx, "");
}
function Qs(e, t, n) {
    if (((t = lh(t)), lh(e) !== t && n)) throw Error(F(425));
}
function ja() {}
var jc = null,
    Vc = null;
function Hc(e, t) {
    return (
        e === "textarea" ||
        e === "noscript" ||
        typeof t.children == "string" ||
        typeof t.children == "number" ||
        (typeof t.dangerouslySetInnerHTML == "object" &&
            t.dangerouslySetInnerHTML !== null &&
            t.dangerouslySetInnerHTML.__html != null)
    );
}
var Kc = typeof setTimeout == "function" ? setTimeout : void 0,
    Kx = typeof clearTimeout == "function" ? clearTimeout : void 0,
    uh = typeof Promise == "function" ? Promise : void 0,
    Gx =
        typeof queueMicrotask == "function"
            ? queueMicrotask
            : typeof uh < "u"
            ? function (e) {
                  return uh.resolve(null).then(e).catch(qx);
              }
            : Kc;
function qx(e) {
    setTimeout(function () {
        throw e;
    });
}
function ju(e, t) {
    var n = t,
        r = 0;
    do {
        var o = n.nextSibling;
        if ((e.removeChild(n), o && o.nodeType === 8))
            if (((n = o.data), n === "/$")) {
                if (r === 0) {
                    e.removeChild(o), as(t);
                    return;
                }
                r--;
            } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
        n = o;
    } while (n);
    as(t);
}
function dr(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
            if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
            if (t === "/$") return null;
        }
    }
    return e;
}
function ch(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0) return e;
                t--;
            } else n === "/$" && t++;
        }
        e = e.previousSibling;
    }
    return null;
}
var li = Math.random().toString(36).slice(2),
    En = "__reactFiber$" + li,
    fs = "__reactProps$" + li,
    Wn = "__reactContainer$" + li,
    Gc = "__reactEvents$" + li,
    Yx = "__reactListeners$" + li,
    Xx = "__reactHandles$" + li;
function Ur(e) {
    var t = e[En];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
        if ((t = n[Wn] || n[En])) {
            if (
                ((n = t.alternate),
                t.child !== null || (n !== null && n.child !== null))
            )
                for (e = ch(e); e !== null; ) {
                    if ((n = e[En])) return n;
                    e = ch(e);
                }
            return t;
        }
        (e = n), (n = e.parentNode);
    }
    return null;
}
function Ms(e) {
    return (
        (e = e[En] || e[Wn]),
        !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
            ? null
            : e
    );
}
function ko(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(F(33));
}
function Sl(e) {
    return e[fs] || null;
}
var qc = [],
    Eo = -1;
function Rr(e) {
    return { current: e };
}
function Fe(e) {
    0 > Eo || ((e.current = qc[Eo]), (qc[Eo] = null), Eo--);
}
function Ne(e, t) {
    Eo++, (qc[Eo] = e.current), (e.current = t);
}
var xr = {},
    Ct = Rr(xr),
    Ot = Rr(!1),
    Yr = xr;
function Xo(e, t) {
    var n = e.type.contextTypes;
    if (!n) return xr;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
        return r.__reactInternalMemoizedMaskedChildContext;
    var o = {},
        i;
    for (i in n) o[i] = t[i];
    return (
        r &&
            ((e = e.stateNode),
            (e.__reactInternalMemoizedUnmaskedChildContext = t),
            (e.__reactInternalMemoizedMaskedChildContext = o)),
        o
    );
}
function Mt(e) {
    return (e = e.childContextTypes), e != null;
}
function Va() {
    Fe(Ot), Fe(Ct);
}
function dh(e, t, n) {
    if (Ct.current !== xr) throw Error(F(168));
    Ne(Ct, t), Ne(Ot, n);
}
function Wy(e, t, n) {
    var r = e.stateNode;
    if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
        return n;
    r = r.getChildContext();
    for (var o in r) if (!(o in t)) throw Error(F(108, Nb(e) || "Unknown", o));
    return Ke({}, n, r);
}
function Ha(e) {
    return (
        (e =
            ((e = e.stateNode) &&
                e.__reactInternalMemoizedMergedChildContext) ||
            xr),
        (Yr = Ct.current),
        Ne(Ct, e),
        Ne(Ot, Ot.current),
        !0
    );
}
function fh(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(F(169));
    n
        ? ((e = Wy(e, t, Yr)),
          (r.__reactInternalMemoizedMergedChildContext = e),
          Fe(Ot),
          Fe(Ct),
          Ne(Ct, e))
        : Fe(Ot),
        Ne(Ot, n);
}
var An = null,
    Cl = !1,
    Vu = !1;
function jy(e) {
    An === null ? (An = [e]) : An.push(e);
}
function Qx(e) {
    (Cl = !0), jy(e);
}
function Pr() {
    if (!Vu && An !== null) {
        Vu = !0;
        var e = 0,
            t = Re;
        try {
            var n = An;
            for (Re = 1; e < n.length; e++) {
                var r = n[e];
                do r = r(!0);
                while (r !== null);
            }
            (An = null), (Cl = !1);
        } catch (o) {
            throw (An !== null && (An = An.slice(e + 1)), hy(Zd, Pr), o);
        } finally {
            (Re = t), (Vu = !1);
        }
    }
    return null;
}
var Ro = [],
    Po = 0,
    Ka = null,
    Ga = 0,
    Jt = [],
    Zt = 0,
    Xr = null,
    Ln = 1,
    Dn = "";
function Mr(e, t) {
    (Ro[Po++] = Ga), (Ro[Po++] = Ka), (Ka = e), (Ga = t);
}
function Vy(e, t, n) {
    (Jt[Zt++] = Ln), (Jt[Zt++] = Dn), (Jt[Zt++] = Xr), (Xr = e);
    var r = Ln;
    e = Dn;
    var o = 32 - gn(r) - 1;
    (r &= ~(1 << o)), (n += 1);
    var i = 32 - gn(t) + o;
    if (30 < i) {
        var s = o - (o % 5);
        (i = (r & ((1 << s) - 1)).toString(32)),
            (r >>= s),
            (o -= s),
            (Ln = (1 << (32 - gn(t) + o)) | (n << o) | r),
            (Dn = i + e);
    } else (Ln = (1 << i) | (n << o) | r), (Dn = e);
}
function uf(e) {
    e.return !== null && (Mr(e, 1), Vy(e, 1, 0));
}
function cf(e) {
    for (; e === Ka; )
        (Ka = Ro[--Po]), (Ro[Po] = null), (Ga = Ro[--Po]), (Ro[Po] = null);
    for (; e === Xr; )
        (Xr = Jt[--Zt]),
            (Jt[Zt] = null),
            (Dn = Jt[--Zt]),
            (Jt[Zt] = null),
            (Ln = Jt[--Zt]),
            (Jt[Zt] = null);
}
var Wt = null,
    Ut = null,
    je = !1,
    hn = null;
function Hy(e, t) {
    var n = tn(5, null, null, 0);
    (n.elementType = "DELETED"),
        (n.stateNode = t),
        (n.return = e),
        (t = e.deletions),
        t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function ph(e, t) {
    switch (e.tag) {
        case 5:
            var n = e.type;
            return (
                (t =
                    t.nodeType !== 1 ||
                    n.toLowerCase() !== t.nodeName.toLowerCase()
                        ? null
                        : t),
                t !== null
                    ? ((e.stateNode = t), (Wt = e), (Ut = dr(t.firstChild)), !0)
                    : !1
            );
        case 6:
            return (
                (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
                t !== null ? ((e.stateNode = t), (Wt = e), (Ut = null), !0) : !1
            );
        case 13:
            return (
                (t = t.nodeType !== 8 ? null : t),
                t !== null
                    ? ((n = Xr !== null ? { id: Ln, overflow: Dn } : null),
                      (e.memoizedState = {
                          dehydrated: t,
                          treeContext: n,
                          retryLane: 1073741824,
                      }),
                      (n = tn(18, null, null, 0)),
                      (n.stateNode = t),
                      (n.return = e),
                      (e.child = n),
                      (Wt = e),
                      (Ut = null),
                      !0)
                    : !1
            );
        default:
            return !1;
    }
}
function Yc(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Xc(e) {
    if (je) {
        var t = Ut;
        if (t) {
            var n = t;
            if (!ph(e, t)) {
                if (Yc(e)) throw Error(F(418));
                t = dr(n.nextSibling);
                var r = Wt;
                t && ph(e, t)
                    ? Hy(r, n)
                    : ((e.flags = (e.flags & -4097) | 2), (je = !1), (Wt = e));
            }
        } else {
            if (Yc(e)) throw Error(F(418));
            (e.flags = (e.flags & -4097) | 2), (je = !1), (Wt = e);
        }
    }
}
function hh(e) {
    for (
        e = e.return;
        e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;

    )
        e = e.return;
    Wt = e;
}
function Js(e) {
    if (e !== Wt) return !1;
    if (!je) return hh(e), (je = !0), !1;
    var t;
    if (
        ((t = e.tag !== 3) &&
            !(t = e.tag !== 5) &&
            ((t = e.type),
            (t = t !== "head" && t !== "body" && !Hc(e.type, e.memoizedProps))),
        t && (t = Ut))
    ) {
        if (Yc(e)) throw (Ky(), Error(F(418)));
        for (; t; ) Hy(e, t), (t = dr(t.nextSibling));
    }
    if ((hh(e), e.tag === 13)) {
        if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
            throw Error(F(317));
        e: {
            for (e = e.nextSibling, t = 0; e; ) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            Ut = dr(e.nextSibling);
                            break e;
                        }
                        t--;
                    } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
                }
                e = e.nextSibling;
            }
            Ut = null;
        }
    } else Ut = Wt ? dr(e.stateNode.nextSibling) : null;
    return !0;
}
function Ky() {
    for (var e = Ut; e; ) e = dr(e.nextSibling);
}
function Qo() {
    (Ut = Wt = null), (je = !1);
}
function df(e) {
    hn === null ? (hn = [e]) : hn.push(e);
}
var Jx = qn.ReactCurrentBatchConfig;
function dn(e, t) {
    if (e && e.defaultProps) {
        (t = Ke({}, t)), (e = e.defaultProps);
        for (var n in e) t[n] === void 0 && (t[n] = e[n]);
        return t;
    }
    return t;
}
var qa = Rr(null),
    Ya = null,
    $o = null,
    ff = null;
function pf() {
    ff = $o = Ya = null;
}
function hf(e) {
    var t = qa.current;
    Fe(qa), (e._currentValue = t);
}
function Qc(e, t, n) {
    for (; e !== null; ) {
        var r = e.alternate;
        if (
            ((e.childLanes & t) !== t
                ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
                : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
            e === n)
        )
            break;
        e = e.return;
    }
}
function zo(e, t) {
    (Ya = e),
        (ff = $o = null),
        (e = e.dependencies),
        e !== null &&
            e.firstContext !== null &&
            (e.lanes & t && (It = !0), (e.firstContext = null));
}
function rn(e) {
    var t = e._currentValue;
    if (ff !== e)
        if (((e = { context: e, memoizedValue: t, next: null }), $o === null)) {
            if (Ya === null) throw Error(F(308));
            ($o = e), (Ya.dependencies = { lanes: 0, firstContext: e });
        } else $o = $o.next = e;
    return t;
}
var Wr = null;
function mf(e) {
    Wr === null ? (Wr = [e]) : Wr.push(e);
}
function Gy(e, t, n, r) {
    var o = t.interleaved;
    return (
        o === null ? ((n.next = n), mf(t)) : ((n.next = o.next), (o.next = n)),
        (t.interleaved = n),
        jn(e, r)
    );
}
function jn(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
        (e.childLanes |= t),
            (n = e.alternate),
            n !== null && (n.childLanes |= t),
            (n = e),
            (e = e.return);
    return n.tag === 3 ? n.stateNode : null;
}
var tr = !1;
function gf(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null, interleaved: null, lanes: 0 },
        effects: null,
    };
}
function qy(e, t) {
    (e = e.updateQueue),
        t.updateQueue === e &&
            (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                effects: e.effects,
            });
}
function zn(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null,
    };
}
function fr(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (((r = r.shared), xe & 2)) {
        var o = r.pending;
        return (
            o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
            (r.pending = t),
            jn(e, n)
        );
    }
    return (
        (o = r.interleaved),
        o === null ? ((t.next = t), mf(r)) : ((t.next = o.next), (o.next = t)),
        (r.interleaved = t),
        jn(e, n)
    );
}
function xa(e, t, n) {
    if (
        ((t = t.updateQueue),
        t !== null && ((t = t.shared), (n & 4194240) !== 0))
    ) {
        var r = t.lanes;
        (r &= e.pendingLanes), (n |= r), (t.lanes = n), ef(e, n);
    }
}
function mh(e, t) {
    var n = e.updateQueue,
        r = e.alternate;
    if (r !== null && ((r = r.updateQueue), n === r)) {
        var o = null,
            i = null;
        if (((n = n.firstBaseUpdate), n !== null)) {
            do {
                var s = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null,
                };
                i === null ? (o = i = s) : (i = i.next = s), (n = n.next);
            } while (n !== null);
            i === null ? (o = i = t) : (i = i.next = t);
        } else o = i = t;
        (n = {
            baseState: r.baseState,
            firstBaseUpdate: o,
            lastBaseUpdate: i,
            shared: r.shared,
            effects: r.effects,
        }),
            (e.updateQueue = n);
        return;
    }
    (e = n.lastBaseUpdate),
        e === null ? (n.firstBaseUpdate = t) : (e.next = t),
        (n.lastBaseUpdate = t);
}
function Xa(e, t, n, r) {
    var o = e.updateQueue;
    tr = !1;
    var i = o.firstBaseUpdate,
        s = o.lastBaseUpdate,
        a = o.shared.pending;
    if (a !== null) {
        o.shared.pending = null;
        var l = a,
            u = l.next;
        (l.next = null), s === null ? (i = u) : (s.next = u), (s = l);
        var d = e.alternate;
        d !== null &&
            ((d = d.updateQueue),
            (a = d.lastBaseUpdate),
            a !== s &&
                (a === null ? (d.firstBaseUpdate = u) : (a.next = u),
                (d.lastBaseUpdate = l)));
    }
    if (i !== null) {
        var f = o.baseState;
        (s = 0), (d = u = l = null), (a = i);
        do {
            var c = a.lane,
                h = a.eventTime;
            if ((r & c) === c) {
                d !== null &&
                    (d = d.next =
                        {
                            eventTime: h,
                            lane: 0,
                            tag: a.tag,
                            payload: a.payload,
                            callback: a.callback,
                            next: null,
                        });
                e: {
                    var g = e,
                        p = a;
                    switch (((c = t), (h = n), p.tag)) {
                        case 1:
                            if (((g = p.payload), typeof g == "function")) {
                                f = g.call(h, f, c);
                                break e;
                            }
                            f = g;
                            break e;
                        case 3:
                            g.flags = (g.flags & -65537) | 128;
                        case 0:
                            if (
                                ((g = p.payload),
                                (c =
                                    typeof g == "function"
                                        ? g.call(h, f, c)
                                        : g),
                                c == null)
                            )
                                break e;
                            f = Ke({}, f, c);
                            break e;
                        case 2:
                            tr = !0;
                    }
                }
                a.callback !== null &&
                    a.lane !== 0 &&
                    ((e.flags |= 64),
                    (c = o.effects),
                    c === null ? (o.effects = [a]) : c.push(a));
            } else
                (h = {
                    eventTime: h,
                    lane: c,
                    tag: a.tag,
                    payload: a.payload,
                    callback: a.callback,
                    next: null,
                }),
                    d === null ? ((u = d = h), (l = f)) : (d = d.next = h),
                    (s |= c);
            if (((a = a.next), a === null)) {
                if (((a = o.shared.pending), a === null)) break;
                (c = a),
                    (a = c.next),
                    (c.next = null),
                    (o.lastBaseUpdate = c),
                    (o.shared.pending = null);
            }
        } while (1);
        if (
            (d === null && (l = f),
            (o.baseState = l),
            (o.firstBaseUpdate = u),
            (o.lastBaseUpdate = d),
            (t = o.shared.interleaved),
            t !== null)
        ) {
            o = t;
            do (s |= o.lane), (o = o.next);
            while (o !== t);
        } else i === null && (o.shared.lanes = 0);
        (Jr |= s), (e.lanes = s), (e.memoizedState = f);
    }
}
function gh(e, t, n) {
    if (((e = t.effects), (t.effects = null), e !== null))
        for (t = 0; t < e.length; t++) {
            var r = e[t],
                o = r.callback;
            if (o !== null) {
                if (((r.callback = null), (r = n), typeof o != "function"))
                    throw Error(F(191, o));
                o.call(r);
            }
        }
}
var Yy = new Gg.Component().refs;
function Jc(e, t, n, r) {
    (t = e.memoizedState),
        (n = n(r, t)),
        (n = n == null ? t : Ke({}, t, n)),
        (e.memoizedState = n),
        e.lanes === 0 && (e.updateQueue.baseState = n);
}
var kl = {
    isMounted: function (e) {
        return (e = e._reactInternals) ? io(e) === e : !1;
    },
    enqueueSetState: function (e, t, n) {
        e = e._reactInternals;
        var r = Et(),
            o = hr(e),
            i = zn(r, o);
        (i.payload = t),
            n != null && (i.callback = n),
            (t = fr(e, i, o)),
            t !== null && (yn(t, e, o, r), xa(t, e, o));
    },
    enqueueReplaceState: function (e, t, n) {
        e = e._reactInternals;
        var r = Et(),
            o = hr(e),
            i = zn(r, o);
        (i.tag = 1),
            (i.payload = t),
            n != null && (i.callback = n),
            (t = fr(e, i, o)),
            t !== null && (yn(t, e, o, r), xa(t, e, o));
    },
    enqueueForceUpdate: function (e, t) {
        e = e._reactInternals;
        var n = Et(),
            r = hr(e),
            o = zn(n, r);
        (o.tag = 2),
            t != null && (o.callback = t),
            (t = fr(e, o, r)),
            t !== null && (yn(t, e, r, n), xa(t, e, r));
    },
};
function yh(e, t, n, r, o, i, s) {
    return (
        (e = e.stateNode),
        typeof e.shouldComponentUpdate == "function"
            ? e.shouldComponentUpdate(r, i, s)
            : t.prototype && t.prototype.isPureReactComponent
            ? !us(n, r) || !us(o, i)
            : !0
    );
}
function Xy(e, t, n) {
    var r = !1,
        o = xr,
        i = t.contextType;
    return (
        typeof i == "object" && i !== null
            ? (i = rn(i))
            : ((o = Mt(t) ? Yr : Ct.current),
              (r = t.contextTypes),
              (i = (r = r != null) ? Xo(e, o) : xr)),
        (t = new t(n, i)),
        (e.memoizedState =
            t.state !== null && t.state !== void 0 ? t.state : null),
        (t.updater = kl),
        (e.stateNode = t),
        (t._reactInternals = e),
        r &&
            ((e = e.stateNode),
            (e.__reactInternalMemoizedUnmaskedChildContext = o),
            (e.__reactInternalMemoizedMaskedChildContext = i)),
        t
    );
}
function vh(e, t, n, r) {
    (e = t.state),
        typeof t.componentWillReceiveProps == "function" &&
            t.componentWillReceiveProps(n, r),
        typeof t.UNSAFE_componentWillReceiveProps == "function" &&
            t.UNSAFE_componentWillReceiveProps(n, r),
        t.state !== e && kl.enqueueReplaceState(t, t.state, null);
}
function Zc(e, t, n, r) {
    var o = e.stateNode;
    (o.props = n), (o.state = e.memoizedState), (o.refs = Yy), gf(e);
    var i = t.contextType;
    typeof i == "object" && i !== null
        ? (o.context = rn(i))
        : ((i = Mt(t) ? Yr : Ct.current), (o.context = Xo(e, i))),
        (o.state = e.memoizedState),
        (i = t.getDerivedStateFromProps),
        typeof i == "function" && (Jc(e, t, i, n), (o.state = e.memoizedState)),
        typeof t.getDerivedStateFromProps == "function" ||
            typeof o.getSnapshotBeforeUpdate == "function" ||
            (typeof o.UNSAFE_componentWillMount != "function" &&
                typeof o.componentWillMount != "function") ||
            ((t = o.state),
            typeof o.componentWillMount == "function" && o.componentWillMount(),
            typeof o.UNSAFE_componentWillMount == "function" &&
                o.UNSAFE_componentWillMount(),
            t !== o.state && kl.enqueueReplaceState(o, o.state, null),
            Xa(e, n, o, r),
            (o.state = e.memoizedState)),
        typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function wi(e, t, n) {
    if (
        ((e = n.ref),
        e !== null && typeof e != "function" && typeof e != "object")
    ) {
        if (n._owner) {
            if (((n = n._owner), n)) {
                if (n.tag !== 1) throw Error(F(309));
                var r = n.stateNode;
            }
            if (!r) throw Error(F(147, e));
            var o = r,
                i = "" + e;
            return t !== null &&
                t.ref !== null &&
                typeof t.ref == "function" &&
                t.ref._stringRef === i
                ? t.ref
                : ((t = function (s) {
                      var a = o.refs;
                      a === Yy && (a = o.refs = {}),
                          s === null ? delete a[i] : (a[i] = s);
                  }),
                  (t._stringRef = i),
                  t);
        }
        if (typeof e != "string") throw Error(F(284));
        if (!n._owner) throw Error(F(290, e));
    }
    return e;
}
function Zs(e, t) {
    throw (
        ((e = Object.prototype.toString.call(t)),
        Error(
            F(
                31,
                e === "[object Object]"
                    ? "object with keys {" + Object.keys(t).join(", ") + "}"
                    : e
            )
        ))
    );
}
function bh(e) {
    var t = e._init;
    return t(e._payload);
}
function Qy(e) {
    function t(y, m) {
        if (e) {
            var v = y.deletions;
            v === null ? ((y.deletions = [m]), (y.flags |= 16)) : v.push(m);
        }
    }
    function n(y, m) {
        if (!e) return null;
        for (; m !== null; ) t(y, m), (m = m.sibling);
        return null;
    }
    function r(y, m) {
        for (y = new Map(); m !== null; )
            m.key !== null ? y.set(m.key, m) : y.set(m.index, m),
                (m = m.sibling);
        return y;
    }
    function o(y, m) {
        return (y = mr(y, m)), (y.index = 0), (y.sibling = null), y;
    }
    function i(y, m, v) {
        return (
            (y.index = v),
            e
                ? ((v = y.alternate),
                  v !== null
                      ? ((v = v.index), v < m ? ((y.flags |= 2), m) : v)
                      : ((y.flags |= 2), m))
                : ((y.flags |= 1048576), m)
        );
    }
    function s(y) {
        return e && y.alternate === null && (y.flags |= 2), y;
    }
    function a(y, m, v, x) {
        return m === null || m.tag !== 6
            ? ((m = Qu(v, y.mode, x)), (m.return = y), m)
            : ((m = o(m, v)), (m.return = y), m);
    }
    function l(y, m, v, x) {
        var k = v.type;
        return k === xo
            ? d(y, m, v.props.children, x, v.key)
            : m !== null &&
              (m.elementType === k ||
                  (typeof k == "object" &&
                      k !== null &&
                      k.$$typeof === er &&
                      bh(k) === m.type))
            ? ((x = o(m, v.props)), (x.ref = wi(y, m, v)), (x.return = y), x)
            : ((x = Ra(v.type, v.key, v.props, null, y.mode, x)),
              (x.ref = wi(y, m, v)),
              (x.return = y),
              x);
    }
    function u(y, m, v, x) {
        return m === null ||
            m.tag !== 4 ||
            m.stateNode.containerInfo !== v.containerInfo ||
            m.stateNode.implementation !== v.implementation
            ? ((m = Ju(v, y.mode, x)), (m.return = y), m)
            : ((m = o(m, v.children || [])), (m.return = y), m);
    }
    function d(y, m, v, x, k) {
        return m === null || m.tag !== 7
            ? ((m = Gr(v, y.mode, x, k)), (m.return = y), m)
            : ((m = o(m, v)), (m.return = y), m);
    }
    function f(y, m, v) {
        if ((typeof m == "string" && m !== "") || typeof m == "number")
            return (m = Qu("" + m, y.mode, v)), (m.return = y), m;
        if (typeof m == "object" && m !== null) {
            switch (m.$$typeof) {
                case Ws:
                    return (
                        (v = Ra(m.type, m.key, m.props, null, y.mode, v)),
                        (v.ref = wi(y, null, m)),
                        (v.return = y),
                        v
                    );
                case bo:
                    return (m = Ju(m, y.mode, v)), (m.return = y), m;
                case er:
                    var x = m._init;
                    return f(y, x(m._payload), v);
            }
            if (Ni(m) || gi(m))
                return (m = Gr(m, y.mode, v, null)), (m.return = y), m;
            Zs(y, m);
        }
        return null;
    }
    function c(y, m, v, x) {
        var k = m !== null ? m.key : null;
        if ((typeof v == "string" && v !== "") || typeof v == "number")
            return k !== null ? null : a(y, m, "" + v, x);
        if (typeof v == "object" && v !== null) {
            switch (v.$$typeof) {
                case Ws:
                    return v.key === k ? l(y, m, v, x) : null;
                case bo:
                    return v.key === k ? u(y, m, v, x) : null;
                case er:
                    return (k = v._init), c(y, m, k(v._payload), x);
            }
            if (Ni(v) || gi(v)) return k !== null ? null : d(y, m, v, x, null);
            Zs(y, v);
        }
        return null;
    }
    function h(y, m, v, x, k) {
        if ((typeof x == "string" && x !== "") || typeof x == "number")
            return (y = y.get(v) || null), a(m, y, "" + x, k);
        if (typeof x == "object" && x !== null) {
            switch (x.$$typeof) {
                case Ws:
                    return (
                        (y = y.get(x.key === null ? v : x.key) || null),
                        l(m, y, x, k)
                    );
                case bo:
                    return (
                        (y = y.get(x.key === null ? v : x.key) || null),
                        u(m, y, x, k)
                    );
                case er:
                    var R = x._init;
                    return h(y, m, v, R(x._payload), k);
            }
            if (Ni(x) || gi(x))
                return (y = y.get(v) || null), d(m, y, x, k, null);
            Zs(m, x);
        }
        return null;
    }
    function g(y, m, v, x) {
        for (
            var k = null, R = null, C = m, T = (m = 0), I = null;
            C !== null && T < v.length;
            T++
        ) {
            C.index > T ? ((I = C), (C = null)) : (I = C.sibling);
            var P = c(y, C, v[T], x);
            if (P === null) {
                C === null && (C = I);
                break;
            }
            e && C && P.alternate === null && t(y, C),
                (m = i(P, m, T)),
                R === null ? (k = P) : (R.sibling = P),
                (R = P),
                (C = I);
        }
        if (T === v.length) return n(y, C), je && Mr(y, T), k;
        if (C === null) {
            for (; T < v.length; T++)
                (C = f(y, v[T], x)),
                    C !== null &&
                        ((m = i(C, m, T)),
                        R === null ? (k = C) : (R.sibling = C),
                        (R = C));
            return je && Mr(y, T), k;
        }
        for (C = r(y, C); T < v.length; T++)
            (I = h(C, y, T, v[T], x)),
                I !== null &&
                    (e &&
                        I.alternate !== null &&
                        C.delete(I.key === null ? T : I.key),
                    (m = i(I, m, T)),
                    R === null ? (k = I) : (R.sibling = I),
                    (R = I));
        return (
            e &&
                C.forEach(function (D) {
                    return t(y, D);
                }),
            je && Mr(y, T),
            k
        );
    }
    function p(y, m, v, x) {
        var k = gi(v);
        if (typeof k != "function") throw Error(F(150));
        if (((v = k.call(v)), v == null)) throw Error(F(151));
        for (
            var R = (k = null), C = m, T = (m = 0), I = null, P = v.next();
            C !== null && !P.done;
            T++, P = v.next()
        ) {
            C.index > T ? ((I = C), (C = null)) : (I = C.sibling);
            var D = c(y, C, P.value, x);
            if (D === null) {
                C === null && (C = I);
                break;
            }
            e && C && D.alternate === null && t(y, C),
                (m = i(D, m, T)),
                R === null ? (k = D) : (R.sibling = D),
                (R = D),
                (C = I);
        }
        if (P.done) return n(y, C), je && Mr(y, T), k;
        if (C === null) {
            for (; !P.done; T++, P = v.next())
                (P = f(y, P.value, x)),
                    P !== null &&
                        ((m = i(P, m, T)),
                        R === null ? (k = P) : (R.sibling = P),
                        (R = P));
            return je && Mr(y, T), k;
        }
        for (C = r(y, C); !P.done; T++, P = v.next())
            (P = h(C, y, T, P.value, x)),
                P !== null &&
                    (e &&
                        P.alternate !== null &&
                        C.delete(P.key === null ? T : P.key),
                    (m = i(P, m, T)),
                    R === null ? (k = P) : (R.sibling = P),
                    (R = P));
        return (
            e &&
                C.forEach(function (K) {
                    return t(y, K);
                }),
            je && Mr(y, T),
            k
        );
    }
    function S(y, m, v, x) {
        if (
            (typeof v == "object" &&
                v !== null &&
                v.type === xo &&
                v.key === null &&
                (v = v.props.children),
            typeof v == "object" && v !== null)
        ) {
            switch (v.$$typeof) {
                case Ws:
                    e: {
                        for (var k = v.key, R = m; R !== null; ) {
                            if (R.key === k) {
                                if (((k = v.type), k === xo)) {
                                    if (R.tag === 7) {
                                        n(y, R.sibling),
                                            (m = o(R, v.props.children)),
                                            (m.return = y),
                                            (y = m);
                                        break e;
                                    }
                                } else if (
                                    R.elementType === k ||
                                    (typeof k == "object" &&
                                        k !== null &&
                                        k.$$typeof === er &&
                                        bh(k) === R.type)
                                ) {
                                    n(y, R.sibling),
                                        (m = o(R, v.props)),
                                        (m.ref = wi(y, R, v)),
                                        (m.return = y),
                                        (y = m);
                                    break e;
                                }
                                n(y, R);
                                break;
                            } else t(y, R);
                            R = R.sibling;
                        }
                        v.type === xo
                            ? ((m = Gr(v.props.children, y.mode, x, v.key)),
                              (m.return = y),
                              (y = m))
                            : ((x = Ra(
                                  v.type,
                                  v.key,
                                  v.props,
                                  null,
                                  y.mode,
                                  x
                              )),
                              (x.ref = wi(y, m, v)),
                              (x.return = y),
                              (y = x));
                    }
                    return s(y);
                case bo:
                    e: {
                        for (R = v.key; m !== null; ) {
                            if (m.key === R)
                                if (
                                    m.tag === 4 &&
                                    m.stateNode.containerInfo ===
                                        v.containerInfo &&
                                    m.stateNode.implementation ===
                                        v.implementation
                                ) {
                                    n(y, m.sibling),
                                        (m = o(m, v.children || [])),
                                        (m.return = y),
                                        (y = m);
                                    break e;
                                } else {
                                    n(y, m);
                                    break;
                                }
                            else t(y, m);
                            m = m.sibling;
                        }
                        (m = Ju(v, y.mode, x)), (m.return = y), (y = m);
                    }
                    return s(y);
                case er:
                    return (R = v._init), S(y, m, R(v._payload), x);
            }
            if (Ni(v)) return g(y, m, v, x);
            if (gi(v)) return p(y, m, v, x);
            Zs(y, v);
        }
        return (typeof v == "string" && v !== "") || typeof v == "number"
            ? ((v = "" + v),
              m !== null && m.tag === 6
                  ? (n(y, m.sibling), (m = o(m, v)), (m.return = y), (y = m))
                  : (n(y, m), (m = Qu(v, y.mode, x)), (m.return = y), (y = m)),
              s(y))
            : n(y, m);
    }
    return S;
}
var Jo = Qy(!0),
    Jy = Qy(!1),
    _s = {},
    $n = Rr(_s),
    ps = Rr(_s),
    hs = Rr(_s);
function jr(e) {
    if (e === _s) throw Error(F(174));
    return e;
}
function yf(e, t) {
    switch ((Ne(hs, t), Ne(ps, e), Ne($n, _s), (e = t.nodeType), e)) {
        case 9:
        case 11:
            t = (t = t.documentElement) ? t.namespaceURI : Oc(null, "");
            break;
        default:
            (e = e === 8 ? t.parentNode : t),
                (t = e.namespaceURI || null),
                (e = e.tagName),
                (t = Oc(t, e));
    }
    Fe($n), Ne($n, t);
}
function Zo() {
    Fe($n), Fe(ps), Fe(hs);
}
function Zy(e) {
    jr(hs.current);
    var t = jr($n.current),
        n = Oc(t, e.type);
    t !== n && (Ne(ps, e), Ne($n, n));
}
function vf(e) {
    ps.current === e && (Fe($n), Fe(ps));
}
var Ve = Rr(0);
function Qa(e) {
    for (var t = e; t !== null; ) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (
                n !== null &&
                ((n = n.dehydrated),
                n === null || n.data === "$?" || n.data === "$!")
            )
                return t;
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128) return t;
        } else if (t.child !== null) {
            (t.child.return = t), (t = t.child);
            continue;
        }
        if (t === e) break;
        for (; t.sibling === null; ) {
            if (t.return === null || t.return === e) return null;
            t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
    }
    return null;
}
var Hu = [];
function bf() {
    for (var e = 0; e < Hu.length; e++)
        Hu[e]._workInProgressVersionPrimary = null;
    Hu.length = 0;
}
var wa = qn.ReactCurrentDispatcher,
    Ku = qn.ReactCurrentBatchConfig,
    Qr = 0,
    He = null,
    ot = null,
    lt = null,
    Ja = !1,
    Ki = !1,
    ms = 0,
    Zx = 0;
function vt() {
    throw Error(F(321));
}
function xf(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!vn(e[n], t[n])) return !1;
    return !0;
}
function wf(e, t, n, r, o, i) {
    if (
        ((Qr = i),
        (He = t),
        (t.memoizedState = null),
        (t.updateQueue = null),
        (t.lanes = 0),
        (wa.current = e === null || e.memoizedState === null ? rw : ow),
        (e = n(r, o)),
        Ki)
    ) {
        i = 0;
        do {
            if (((Ki = !1), (ms = 0), 25 <= i)) throw Error(F(301));
            (i += 1),
                (lt = ot = null),
                (t.updateQueue = null),
                (wa.current = iw),
                (e = n(r, o));
        } while (Ki);
    }
    if (
        ((wa.current = Za),
        (t = ot !== null && ot.next !== null),
        (Qr = 0),
        (lt = ot = He = null),
        (Ja = !1),
        t)
    )
        throw Error(F(300));
    return e;
}
function Sf() {
    var e = ms !== 0;
    return (ms = 0), e;
}
function Sn() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null,
    };
    return lt === null ? (He.memoizedState = lt = e) : (lt = lt.next = e), lt;
}
function on() {
    if (ot === null) {
        var e = He.alternate;
        e = e !== null ? e.memoizedState : null;
    } else e = ot.next;
    var t = lt === null ? He.memoizedState : lt.next;
    if (t !== null) (lt = t), (ot = e);
    else {
        if (e === null) throw Error(F(310));
        (ot = e),
            (e = {
                memoizedState: ot.memoizedState,
                baseState: ot.baseState,
                baseQueue: ot.baseQueue,
                queue: ot.queue,
                next: null,
            }),
            lt === null ? (He.memoizedState = lt = e) : (lt = lt.next = e);
    }
    return lt;
}
function gs(e, t) {
    return typeof t == "function" ? t(e) : t;
}
function Gu(e) {
    var t = on(),
        n = t.queue;
    if (n === null) throw Error(F(311));
    n.lastRenderedReducer = e;
    var r = ot,
        o = r.baseQueue,
        i = n.pending;
    if (i !== null) {
        if (o !== null) {
            var s = o.next;
            (o.next = i.next), (i.next = s);
        }
        (r.baseQueue = o = i), (n.pending = null);
    }
    if (o !== null) {
        (i = o.next), (r = r.baseState);
        var a = (s = null),
            l = null,
            u = i;
        do {
            var d = u.lane;
            if ((Qr & d) === d)
                l !== null &&
                    (l = l.next =
                        {
                            lane: 0,
                            action: u.action,
                            hasEagerState: u.hasEagerState,
                            eagerState: u.eagerState,
                            next: null,
                        }),
                    (r = u.hasEagerState ? u.eagerState : e(r, u.action));
            else {
                var f = {
                    lane: d,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null,
                };
                l === null ? ((a = l = f), (s = r)) : (l = l.next = f),
                    (He.lanes |= d),
                    (Jr |= d);
            }
            u = u.next;
        } while (u !== null && u !== i);
        l === null ? (s = r) : (l.next = a),
            vn(r, t.memoizedState) || (It = !0),
            (t.memoizedState = r),
            (t.baseState = s),
            (t.baseQueue = l),
            (n.lastRenderedState = r);
    }
    if (((e = n.interleaved), e !== null)) {
        o = e;
        do (i = o.lane), (He.lanes |= i), (Jr |= i), (o = o.next);
        while (o !== e);
    } else o === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
}
function qu(e) {
    var t = on(),
        n = t.queue;
    if (n === null) throw Error(F(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
        o = n.pending,
        i = t.memoizedState;
    if (o !== null) {
        n.pending = null;
        var s = (o = o.next);
        do (i = e(i, s.action)), (s = s.next);
        while (s !== o);
        vn(i, t.memoizedState) || (It = !0),
            (t.memoizedState = i),
            t.baseQueue === null && (t.baseState = i),
            (n.lastRenderedState = i);
    }
    return [i, r];
}
function ev() {}
function tv(e, t) {
    var n = He,
        r = on(),
        o = t(),
        i = !vn(r.memoizedState, o);
    if (
        (i && ((r.memoizedState = o), (It = !0)),
        (r = r.queue),
        Cf(ov.bind(null, n, r, e), [e]),
        r.getSnapshot !== t || i || (lt !== null && lt.memoizedState.tag & 1))
    ) {
        if (
            ((n.flags |= 2048),
            ys(9, rv.bind(null, n, r, o, t), void 0, null),
            ut === null)
        )
            throw Error(F(349));
        Qr & 30 || nv(n, t, o);
    }
    return o;
}
function nv(e, t, n) {
    (e.flags |= 16384),
        (e = { getSnapshot: t, value: n }),
        (t = He.updateQueue),
        t === null
            ? ((t = { lastEffect: null, stores: null }),
              (He.updateQueue = t),
              (t.stores = [e]))
            : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function rv(e, t, n, r) {
    (t.value = n), (t.getSnapshot = r), iv(t) && sv(e);
}
function ov(e, t, n) {
    return n(function () {
        iv(t) && sv(e);
    });
}
function iv(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !vn(e, n);
    } catch {
        return !0;
    }
}
function sv(e) {
    var t = jn(e, 1);
    t !== null && yn(t, e, 1, -1);
}
function xh(e) {
    var t = Sn();
    return (
        typeof e == "function" && (e = e()),
        (t.memoizedState = t.baseState = e),
        (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: gs,
            lastRenderedState: e,
        }),
        (t.queue = e),
        (e = e.dispatch = nw.bind(null, He, e)),
        [t.memoizedState, e]
    );
}
function ys(e, t, n, r) {
    return (
        (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
        (t = He.updateQueue),
        t === null
            ? ((t = { lastEffect: null, stores: null }),
              (He.updateQueue = t),
              (t.lastEffect = e.next = e))
            : ((n = t.lastEffect),
              n === null
                  ? (t.lastEffect = e.next = e)
                  : ((r = n.next),
                    (n.next = e),
                    (e.next = r),
                    (t.lastEffect = e))),
        e
    );
}
function av() {
    return on().memoizedState;
}
function Sa(e, t, n, r) {
    var o = Sn();
    (He.flags |= e),
        (o.memoizedState = ys(1 | t, n, void 0, r === void 0 ? null : r));
}
function El(e, t, n, r) {
    var o = on();
    r = r === void 0 ? null : r;
    var i = void 0;
    if (ot !== null) {
        var s = ot.memoizedState;
        if (((i = s.destroy), r !== null && xf(r, s.deps))) {
            o.memoizedState = ys(t, n, i, r);
            return;
        }
    }
    (He.flags |= e), (o.memoizedState = ys(1 | t, n, i, r));
}
function wh(e, t) {
    return Sa(8390656, 8, e, t);
}
function Cf(e, t) {
    return El(2048, 8, e, t);
}
function lv(e, t) {
    return El(4, 2, e, t);
}
function uv(e, t) {
    return El(4, 4, e, t);
}
function cv(e, t) {
    if (typeof t == "function")
        return (
            (e = e()),
            t(e),
            function () {
                t(null);
            }
        );
    if (t != null)
        return (
            (e = e()),
            (t.current = e),
            function () {
                t.current = null;
            }
        );
}
function dv(e, t, n) {
    return (
        (n = n != null ? n.concat([e]) : null), El(4, 4, cv.bind(null, t, e), n)
    );
}
function kf() {}
function fv(e, t) {
    var n = on();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && xf(t, r[1])
        ? r[0]
        : ((n.memoizedState = [e, t]), e);
}
function pv(e, t) {
    var n = on();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && xf(t, r[1])
        ? r[0]
        : ((e = e()), (n.memoizedState = [e, t]), e);
}
function hv(e, t, n) {
    return Qr & 21
        ? (vn(n, t) ||
              ((n = yy()), (He.lanes |= n), (Jr |= n), (e.baseState = !0)),
          t)
        : (e.baseState && ((e.baseState = !1), (It = !0)),
          (e.memoizedState = n));
}
function ew(e, t) {
    var n = Re;
    (Re = n !== 0 && 4 > n ? n : 4), e(!0);
    var r = Ku.transition;
    Ku.transition = {};
    try {
        e(!1), t();
    } finally {
        (Re = n), (Ku.transition = r);
    }
}
function mv() {
    return on().memoizedState;
}
function tw(e, t, n) {
    var r = hr(e);
    if (
        ((n = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null,
        }),
        gv(e))
    )
        yv(t, n);
    else if (((n = Gy(e, t, n, r)), n !== null)) {
        var o = Et();
        yn(n, e, r, o), vv(n, t, r);
    }
}
function nw(e, t, n) {
    var r = hr(e),
        o = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null,
        };
    if (gv(e)) yv(t, o);
    else {
        var i = e.alternate;
        if (
            e.lanes === 0 &&
            (i === null || i.lanes === 0) &&
            ((i = t.lastRenderedReducer), i !== null)
        )
            try {
                var s = t.lastRenderedState,
                    a = i(s, n);
                if (((o.hasEagerState = !0), (o.eagerState = a), vn(a, s))) {
                    var l = t.interleaved;
                    l === null
                        ? ((o.next = o), mf(t))
                        : ((o.next = l.next), (l.next = o)),
                        (t.interleaved = o);
                    return;
                }
            } catch {
            } finally {
            }
        (n = Gy(e, t, o, r)),
            n !== null && ((o = Et()), yn(n, e, r, o), vv(n, t, r));
    }
}
function gv(e) {
    var t = e.alternate;
    return e === He || (t !== null && t === He);
}
function yv(e, t) {
    Ki = Ja = !0;
    var n = e.pending;
    n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
        (e.pending = t);
}
function vv(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        (r &= e.pendingLanes), (n |= r), (t.lanes = n), ef(e, n);
    }
}
var Za = {
        readContext: rn,
        useCallback: vt,
        useContext: vt,
        useEffect: vt,
        useImperativeHandle: vt,
        useInsertionEffect: vt,
        useLayoutEffect: vt,
        useMemo: vt,
        useReducer: vt,
        useRef: vt,
        useState: vt,
        useDebugValue: vt,
        useDeferredValue: vt,
        useTransition: vt,
        useMutableSource: vt,
        useSyncExternalStore: vt,
        useId: vt,
        unstable_isNewReconciler: !1,
    },
    rw = {
        readContext: rn,
        useCallback: function (e, t) {
            return (Sn().memoizedState = [e, t === void 0 ? null : t]), e;
        },
        useContext: rn,
        useEffect: wh,
        useImperativeHandle: function (e, t, n) {
            return (
                (n = n != null ? n.concat([e]) : null),
                Sa(4194308, 4, cv.bind(null, t, e), n)
            );
        },
        useLayoutEffect: function (e, t) {
            return Sa(4194308, 4, e, t);
        },
        useInsertionEffect: function (e, t) {
            return Sa(4, 2, e, t);
        },
        useMemo: function (e, t) {
            var n = Sn();
            return (
                (t = t === void 0 ? null : t),
                (e = e()),
                (n.memoizedState = [e, t]),
                e
            );
        },
        useReducer: function (e, t, n) {
            var r = Sn();
            return (
                (t = n !== void 0 ? n(t) : t),
                (r.memoizedState = r.baseState = t),
                (e = {
                    pending: null,
                    interleaved: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: e,
                    lastRenderedState: t,
                }),
                (r.queue = e),
                (e = e.dispatch = tw.bind(null, He, e)),
                [r.memoizedState, e]
            );
        },
        useRef: function (e) {
            var t = Sn();
            return (e = { current: e }), (t.memoizedState = e);
        },
        useState: xh,
        useDebugValue: kf,
        useDeferredValue: function (e) {
            return (Sn().memoizedState = e);
        },
        useTransition: function () {
            var e = xh(!1),
                t = e[0];
            return (e = ew.bind(null, e[1])), (Sn().memoizedState = e), [t, e];
        },
        useMutableSource: function () {},
        useSyncExternalStore: function (e, t, n) {
            var r = He,
                o = Sn();
            if (je) {
                if (n === void 0) throw Error(F(407));
                n = n();
            } else {
                if (((n = t()), ut === null)) throw Error(F(349));
                Qr & 30 || nv(r, t, n);
            }
            o.memoizedState = n;
            var i = { value: n, getSnapshot: t };
            return (
                (o.queue = i),
                wh(ov.bind(null, r, i, e), [e]),
                (r.flags |= 2048),
                ys(9, rv.bind(null, r, i, n, t), void 0, null),
                n
            );
        },
        useId: function () {
            var e = Sn(),
                t = ut.identifierPrefix;
            if (je) {
                var n = Dn,
                    r = Ln;
                (n = (r & ~(1 << (32 - gn(r) - 1))).toString(32) + n),
                    (t = ":" + t + "R" + n),
                    (n = ms++),
                    0 < n && (t += "H" + n.toString(32)),
                    (t += ":");
            } else (n = Zx++), (t = ":" + t + "r" + n.toString(32) + ":");
            return (e.memoizedState = t);
        },
        unstable_isNewReconciler: !1,
    },
    ow = {
        readContext: rn,
        useCallback: fv,
        useContext: rn,
        useEffect: Cf,
        useImperativeHandle: dv,
        useInsertionEffect: lv,
        useLayoutEffect: uv,
        useMemo: pv,
        useReducer: Gu,
        useRef: av,
        useState: function () {
            return Gu(gs);
        },
        useDebugValue: kf,
        useDeferredValue: function (e) {
            var t = on();
            return hv(t, ot.memoizedState, e);
        },
        useTransition: function () {
            var e = Gu(gs)[0],
                t = on().memoizedState;
            return [e, t];
        },
        useMutableSource: ev,
        useSyncExternalStore: tv,
        useId: mv,
        unstable_isNewReconciler: !1,
    },
    iw = {
        readContext: rn,
        useCallback: fv,
        useContext: rn,
        useEffect: Cf,
        useImperativeHandle: dv,
        useInsertionEffect: lv,
        useLayoutEffect: uv,
        useMemo: pv,
        useReducer: qu,
        useRef: av,
        useState: function () {
            return qu(gs);
        },
        useDebugValue: kf,
        useDeferredValue: function (e) {
            var t = on();
            return ot === null
                ? (t.memoizedState = e)
                : hv(t, ot.memoizedState, e);
        },
        useTransition: function () {
            var e = qu(gs)[0],
                t = on().memoizedState;
            return [e, t];
        },
        useMutableSource: ev,
        useSyncExternalStore: tv,
        useId: mv,
        unstable_isNewReconciler: !1,
    };
function ei(e, t) {
    try {
        var n = "",
            r = t;
        do (n += _b(r)), (r = r.return);
        while (r);
        var o = n;
    } catch (i) {
        o =
            `
Error generating stack: ` +
            i.message +
            `
` +
            i.stack;
    }
    return { value: e, source: t, stack: o, digest: null };
}
function Yu(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function ed(e, t) {
    try {
        console.error(t.value);
    } catch (n) {
        setTimeout(function () {
            throw n;
        });
    }
}
var sw = typeof WeakMap == "function" ? WeakMap : Map;
function bv(e, t, n) {
    (n = zn(-1, n)), (n.tag = 3), (n.payload = { element: null });
    var r = t.value;
    return (
        (n.callback = function () {
            tl || ((tl = !0), (cd = r)), ed(e, t);
        }),
        n
    );
}
function xv(e, t, n) {
    (n = zn(-1, n)), (n.tag = 3);
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var o = t.value;
        (n.payload = function () {
            return r(o);
        }),
            (n.callback = function () {
                ed(e, t);
            });
    }
    var i = e.stateNode;
    return (
        i !== null &&
            typeof i.componentDidCatch == "function" &&
            (n.callback = function () {
                ed(e, t),
                    typeof r != "function" &&
                        (pr === null ? (pr = new Set([this])) : pr.add(this));
                var s = t.stack;
                this.componentDidCatch(t.value, {
                    componentStack: s !== null ? s : "",
                });
            }),
        n
    );
}
function Sh(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new sw();
        var o = new Set();
        r.set(t, o);
    } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
    o.has(n) || (o.add(n), (e = xw.bind(null, e, t, n)), t.then(e, e));
}
function Ch(e) {
    do {
        var t;
        if (
            ((t = e.tag === 13) &&
                ((t = e.memoizedState),
                (t = t !== null ? t.dehydrated !== null : !0)),
            t)
        )
            return e;
        e = e.return;
    } while (e !== null);
    return null;
}
function kh(e, t, n, r, o) {
    return e.mode & 1
        ? ((e.flags |= 65536), (e.lanes = o), e)
        : (e === t
              ? (e.flags |= 65536)
              : ((e.flags |= 128),
                (n.flags |= 131072),
                (n.flags &= -52805),
                n.tag === 1 &&
                    (n.alternate === null
                        ? (n.tag = 17)
                        : ((t = zn(-1, 1)), (t.tag = 2), fr(n, t, 1))),
                (n.lanes |= 1)),
          e);
}
var aw = qn.ReactCurrentOwner,
    It = !1;
function kt(e, t, n, r) {
    t.child = e === null ? Jy(t, null, n, r) : Jo(t, e.child, n, r);
}
function Eh(e, t, n, r, o) {
    n = n.render;
    var i = t.ref;
    return (
        zo(t, o),
        (r = wf(e, t, n, r, i, o)),
        (n = Sf()),
        e !== null && !It
            ? ((t.updateQueue = e.updateQueue),
              (t.flags &= -2053),
              (e.lanes &= ~o),
              Vn(e, t, o))
            : (je && n && uf(t), (t.flags |= 1), kt(e, t, r, o), t.child)
    );
}
function Rh(e, t, n, r, o) {
    if (e === null) {
        var i = n.type;
        return typeof i == "function" &&
            !Mf(i) &&
            i.defaultProps === void 0 &&
            n.compare === null &&
            n.defaultProps === void 0
            ? ((t.tag = 15), (t.type = i), wv(e, t, i, r, o))
            : ((e = Ra(n.type, null, r, t, t.mode, o)),
              (e.ref = t.ref),
              (e.return = t),
              (t.child = e));
    }
    if (((i = e.child), !(e.lanes & o))) {
        var s = i.memoizedProps;
        if (
            ((n = n.compare),
            (n = n !== null ? n : us),
            n(s, r) && e.ref === t.ref)
        )
            return Vn(e, t, o);
    }
    return (
        (t.flags |= 1),
        (e = mr(i, r)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e)
    );
}
function wv(e, t, n, r, o) {
    if (e !== null) {
        var i = e.memoizedProps;
        if (us(i, r) && e.ref === t.ref)
            if (((It = !1), (t.pendingProps = r = i), (e.lanes & o) !== 0))
                e.flags & 131072 && (It = !0);
            else return (t.lanes = e.lanes), Vn(e, t, o);
    }
    return td(e, t, n, r, o);
}
function Sv(e, t, n) {
    var r = t.pendingProps,
        o = r.children,
        i = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1))
            (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
            }),
                Ne(Io, Ft),
                (Ft |= n);
        else {
            if (!(n & 1073741824))
                return (
                    (e = i !== null ? i.baseLanes | n : n),
                    (t.lanes = t.childLanes = 1073741824),
                    (t.memoizedState = {
                        baseLanes: e,
                        cachePool: null,
                        transitions: null,
                    }),
                    (t.updateQueue = null),
                    Ne(Io, Ft),
                    (Ft |= e),
                    null
                );
            (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
            }),
                (r = i !== null ? i.baseLanes : n),
                Ne(Io, Ft),
                (Ft |= r);
        }
    else
        i !== null
            ? ((r = i.baseLanes | n), (t.memoizedState = null))
            : (r = n),
            Ne(Io, Ft),
            (Ft |= r);
    return kt(e, t, o, n), t.child;
}
function Cv(e, t) {
    var n = t.ref;
    ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
        ((t.flags |= 512), (t.flags |= 2097152));
}
function td(e, t, n, r, o) {
    var i = Mt(n) ? Yr : Ct.current;
    return (
        (i = Xo(t, i)),
        zo(t, o),
        (n = wf(e, t, n, r, i, o)),
        (r = Sf()),
        e !== null && !It
            ? ((t.updateQueue = e.updateQueue),
              (t.flags &= -2053),
              (e.lanes &= ~o),
              Vn(e, t, o))
            : (je && r && uf(t), (t.flags |= 1), kt(e, t, n, o), t.child)
    );
}
function Ph(e, t, n, r, o) {
    if (Mt(n)) {
        var i = !0;
        Ha(t);
    } else i = !1;
    if ((zo(t, o), t.stateNode === null))
        Ca(e, t), Xy(t, n, r), Zc(t, n, r, o), (r = !0);
    else if (e === null) {
        var s = t.stateNode,
            a = t.memoizedProps;
        s.props = a;
        var l = s.context,
            u = n.contextType;
        typeof u == "object" && u !== null
            ? (u = rn(u))
            : ((u = Mt(n) ? Yr : Ct.current), (u = Xo(t, u)));
        var d = n.getDerivedStateFromProps,
            f =
                typeof d == "function" ||
                typeof s.getSnapshotBeforeUpdate == "function";
        f ||
            (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
                typeof s.componentWillReceiveProps != "function") ||
            ((a !== r || l !== u) && vh(t, s, r, u)),
            (tr = !1);
        var c = t.memoizedState;
        (s.state = c),
            Xa(t, r, s, o),
            (l = t.memoizedState),
            a !== r || c !== l || Ot.current || tr
                ? (typeof d == "function" &&
                      (Jc(t, n, d, r), (l = t.memoizedState)),
                  (a = tr || yh(t, n, a, r, c, l, u))
                      ? (f ||
                            (typeof s.UNSAFE_componentWillMount != "function" &&
                                typeof s.componentWillMount != "function") ||
                            (typeof s.componentWillMount == "function" &&
                                s.componentWillMount(),
                            typeof s.UNSAFE_componentWillMount == "function" &&
                                s.UNSAFE_componentWillMount()),
                        typeof s.componentDidMount == "function" &&
                            (t.flags |= 4194308))
                      : (typeof s.componentDidMount == "function" &&
                            (t.flags |= 4194308),
                        (t.memoizedProps = r),
                        (t.memoizedState = l)),
                  (s.props = r),
                  (s.state = l),
                  (s.context = u),
                  (r = a))
                : (typeof s.componentDidMount == "function" &&
                      (t.flags |= 4194308),
                  (r = !1));
    } else {
        (s = t.stateNode),
            qy(e, t),
            (a = t.memoizedProps),
            (u = t.type === t.elementType ? a : dn(t.type, a)),
            (s.props = u),
            (f = t.pendingProps),
            (c = s.context),
            (l = n.contextType),
            typeof l == "object" && l !== null
                ? (l = rn(l))
                : ((l = Mt(n) ? Yr : Ct.current), (l = Xo(t, l)));
        var h = n.getDerivedStateFromProps;
        (d =
            typeof h == "function" ||
            typeof s.getSnapshotBeforeUpdate == "function") ||
            (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
                typeof s.componentWillReceiveProps != "function") ||
            ((a !== f || c !== l) && vh(t, s, r, l)),
            (tr = !1),
            (c = t.memoizedState),
            (s.state = c),
            Xa(t, r, s, o);
        var g = t.memoizedState;
        a !== f || c !== g || Ot.current || tr
            ? (typeof h == "function" &&
                  (Jc(t, n, h, r), (g = t.memoizedState)),
              (u = tr || yh(t, n, u, r, c, g, l) || !1)
                  ? (d ||
                        (typeof s.UNSAFE_componentWillUpdate != "function" &&
                            typeof s.componentWillUpdate != "function") ||
                        (typeof s.componentWillUpdate == "function" &&
                            s.componentWillUpdate(r, g, l),
                        typeof s.UNSAFE_componentWillUpdate == "function" &&
                            s.UNSAFE_componentWillUpdate(r, g, l)),
                    typeof s.componentDidUpdate == "function" && (t.flags |= 4),
                    typeof s.getSnapshotBeforeUpdate == "function" &&
                        (t.flags |= 1024))
                  : (typeof s.componentDidUpdate != "function" ||
                        (a === e.memoizedProps && c === e.memoizedState) ||
                        (t.flags |= 4),
                    typeof s.getSnapshotBeforeUpdate != "function" ||
                        (a === e.memoizedProps && c === e.memoizedState) ||
                        (t.flags |= 1024),
                    (t.memoizedProps = r),
                    (t.memoizedState = g)),
              (s.props = r),
              (s.state = g),
              (s.context = l),
              (r = u))
            : (typeof s.componentDidUpdate != "function" ||
                  (a === e.memoizedProps && c === e.memoizedState) ||
                  (t.flags |= 4),
              typeof s.getSnapshotBeforeUpdate != "function" ||
                  (a === e.memoizedProps && c === e.memoizedState) ||
                  (t.flags |= 1024),
              (r = !1));
    }
    return nd(e, t, n, r, i, o);
}
function nd(e, t, n, r, o, i) {
    Cv(e, t);
    var s = (t.flags & 128) !== 0;
    if (!r && !s) return o && fh(t, n, !1), Vn(e, t, i);
    (r = t.stateNode), (aw.current = t);
    var a =
        s && typeof n.getDerivedStateFromError != "function"
            ? null
            : r.render();
    return (
        (t.flags |= 1),
        e !== null && s
            ? ((t.child = Jo(t, e.child, null, i)),
              (t.child = Jo(t, null, a, i)))
            : kt(e, t, a, i),
        (t.memoizedState = r.state),
        o && fh(t, n, !0),
        t.child
    );
}
function kv(e) {
    var t = e.stateNode;
    t.pendingContext
        ? dh(e, t.pendingContext, t.pendingContext !== t.context)
        : t.context && dh(e, t.context, !1),
        yf(e, t.containerInfo);
}
function $h(e, t, n, r, o) {
    return Qo(), df(o), (t.flags |= 256), kt(e, t, n, r), t.child;
}
var rd = { dehydrated: null, treeContext: null, retryLane: 0 };
function od(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
}
function Ev(e, t, n) {
    var r = t.pendingProps,
        o = Ve.current,
        i = !1,
        s = (t.flags & 128) !== 0,
        a;
    if (
        ((a = s) ||
            (a = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
        a
            ? ((i = !0), (t.flags &= -129))
            : (e === null || e.memoizedState !== null) && (o |= 1),
        Ne(Ve, o & 1),
        e === null)
    )
        return (
            Xc(t),
            (e = t.memoizedState),
            e !== null && ((e = e.dehydrated), e !== null)
                ? (t.mode & 1
                      ? e.data === "$!"
                          ? (t.lanes = 8)
                          : (t.lanes = 1073741824)
                      : (t.lanes = 1),
                  null)
                : ((s = r.children),
                  (e = r.fallback),
                  i
                      ? ((r = t.mode),
                        (i = t.child),
                        (s = { mode: "hidden", children: s }),
                        !(r & 1) && i !== null
                            ? ((i.childLanes = 0), (i.pendingProps = s))
                            : (i = $l(s, r, 0, null)),
                        (e = Gr(e, r, n, null)),
                        (i.return = t),
                        (e.return = t),
                        (i.sibling = e),
                        (t.child = i),
                        (t.child.memoizedState = od(n)),
                        (t.memoizedState = rd),
                        e)
                      : Ef(t, s))
        );
    if (((o = e.memoizedState), o !== null && ((a = o.dehydrated), a !== null)))
        return lw(e, t, s, r, a, o, n);
    if (i) {
        (i = r.fallback), (s = t.mode), (o = e.child), (a = o.sibling);
        var l = { mode: "hidden", children: r.children };
        return (
            !(s & 1) && t.child !== o
                ? ((r = t.child),
                  (r.childLanes = 0),
                  (r.pendingProps = l),
                  (t.deletions = null))
                : ((r = mr(o, l)),
                  (r.subtreeFlags = o.subtreeFlags & 14680064)),
            a !== null
                ? (i = mr(a, i))
                : ((i = Gr(i, s, n, null)), (i.flags |= 2)),
            (i.return = t),
            (r.return = t),
            (r.sibling = i),
            (t.child = r),
            (r = i),
            (i = t.child),
            (s = e.child.memoizedState),
            (s =
                s === null
                    ? od(n)
                    : {
                          baseLanes: s.baseLanes | n,
                          cachePool: null,
                          transitions: s.transitions,
                      }),
            (i.memoizedState = s),
            (i.childLanes = e.childLanes & ~n),
            (t.memoizedState = rd),
            r
        );
    }
    return (
        (i = e.child),
        (e = i.sibling),
        (r = mr(i, { mode: "visible", children: r.children })),
        !(t.mode & 1) && (r.lanes = n),
        (r.return = t),
        (r.sibling = null),
        e !== null &&
            ((n = t.deletions),
            n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
        (t.child = r),
        (t.memoizedState = null),
        r
    );
}
function Ef(e, t) {
    return (
        (t = $l({ mode: "visible", children: t }, e.mode, 0, null)),
        (t.return = e),
        (e.child = t)
    );
}
function ea(e, t, n, r) {
    return (
        r !== null && df(r),
        Jo(t, e.child, null, n),
        (e = Ef(t, t.pendingProps.children)),
        (e.flags |= 2),
        (t.memoizedState = null),
        e
    );
}
function lw(e, t, n, r, o, i, s) {
    if (n)
        return t.flags & 256
            ? ((t.flags &= -257), (r = Yu(Error(F(422)))), ea(e, t, s, r))
            : t.memoizedState !== null
            ? ((t.child = e.child), (t.flags |= 128), null)
            : ((i = r.fallback),
              (o = t.mode),
              (r = $l({ mode: "visible", children: r.children }, o, 0, null)),
              (i = Gr(i, o, s, null)),
              (i.flags |= 2),
              (r.return = t),
              (i.return = t),
              (r.sibling = i),
              (t.child = r),
              t.mode & 1 && Jo(t, e.child, null, s),
              (t.child.memoizedState = od(s)),
              (t.memoizedState = rd),
              i);
    if (!(t.mode & 1)) return ea(e, t, s, null);
    if (o.data === "$!") {
        if (((r = o.nextSibling && o.nextSibling.dataset), r)) var a = r.dgst;
        return (
            (r = a), (i = Error(F(419))), (r = Yu(i, r, void 0)), ea(e, t, s, r)
        );
    }
    if (((a = (s & e.childLanes) !== 0), It || a)) {
        if (((r = ut), r !== null)) {
            switch (s & -s) {
                case 4:
                    o = 2;
                    break;
                case 16:
                    o = 8;
                    break;
                case 64:
                case 128:
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                case 67108864:
                    o = 32;
                    break;
                case 536870912:
                    o = 268435456;
                    break;
                default:
                    o = 0;
            }
            (o = o & (r.suspendedLanes | s) ? 0 : o),
                o !== 0 &&
                    o !== i.retryLane &&
                    ((i.retryLane = o), jn(e, o), yn(r, e, o, -1));
        }
        return Of(), (r = Yu(Error(F(421)))), ea(e, t, s, r);
    }
    return o.data === "$?"
        ? ((t.flags |= 128),
          (t.child = e.child),
          (t = ww.bind(null, e)),
          (o._reactRetry = t),
          null)
        : ((e = i.treeContext),
          (Ut = dr(o.nextSibling)),
          (Wt = t),
          (je = !0),
          (hn = null),
          e !== null &&
              ((Jt[Zt++] = Ln),
              (Jt[Zt++] = Dn),
              (Jt[Zt++] = Xr),
              (Ln = e.id),
              (Dn = e.overflow),
              (Xr = t)),
          (t = Ef(t, r.children)),
          (t.flags |= 4096),
          t);
}
function Th(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), Qc(e.return, t, n);
}
function Xu(e, t, n, r, o) {
    var i = e.memoizedState;
    i === null
        ? (e.memoizedState = {
              isBackwards: t,
              rendering: null,
              renderingStartTime: 0,
              last: r,
              tail: n,
              tailMode: o,
          })
        : ((i.isBackwards = t),
          (i.rendering = null),
          (i.renderingStartTime = 0),
          (i.last = r),
          (i.tail = n),
          (i.tailMode = o));
}
function Rv(e, t, n) {
    var r = t.pendingProps,
        o = r.revealOrder,
        i = r.tail;
    if ((kt(e, t, r.children, n), (r = Ve.current), r & 2))
        (r = (r & 1) | 2), (t.flags |= 128);
    else {
        if (e !== null && e.flags & 128)
            e: for (e = t.child; e !== null; ) {
                if (e.tag === 13) e.memoizedState !== null && Th(e, n, t);
                else if (e.tag === 19) Th(e, n, t);
                else if (e.child !== null) {
                    (e.child.return = e), (e = e.child);
                    continue;
                }
                if (e === t) break e;
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === t) break e;
                    e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
            }
        r &= 1;
    }
    if ((Ne(Ve, r), !(t.mode & 1))) t.memoizedState = null;
    else
        switch (o) {
            case "forwards":
                for (n = t.child, o = null; n !== null; )
                    (e = n.alternate),
                        e !== null && Qa(e) === null && (o = n),
                        (n = n.sibling);
                (n = o),
                    n === null
                        ? ((o = t.child), (t.child = null))
                        : ((o = n.sibling), (n.sibling = null)),
                    Xu(t, !1, o, n, i);
                break;
            case "backwards":
                for (n = null, o = t.child, t.child = null; o !== null; ) {
                    if (((e = o.alternate), e !== null && Qa(e) === null)) {
                        t.child = o;
                        break;
                    }
                    (e = o.sibling), (o.sibling = n), (n = o), (o = e);
                }
                Xu(t, !0, n, null, i);
                break;
            case "together":
                Xu(t, !1, null, null, void 0);
                break;
            default:
                t.memoizedState = null;
        }
    return t.child;
}
function Ca(e, t) {
    !(t.mode & 1) &&
        e !== null &&
        ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Vn(e, t, n) {
    if (
        (e !== null && (t.dependencies = e.dependencies),
        (Jr |= t.lanes),
        !(n & t.childLanes))
    )
        return null;
    if (e !== null && t.child !== e.child) throw Error(F(153));
    if (t.child !== null) {
        for (
            e = t.child, n = mr(e, e.pendingProps), t.child = n, n.return = t;
            e.sibling !== null;

        )
            (e = e.sibling),
                (n = n.sibling = mr(e, e.pendingProps)),
                (n.return = t);
        n.sibling = null;
    }
    return t.child;
}
function uw(e, t, n) {
    switch (t.tag) {
        case 3:
            kv(t), Qo();
            break;
        case 5:
            Zy(t);
            break;
        case 1:
            Mt(t.type) && Ha(t);
            break;
        case 4:
            yf(t, t.stateNode.containerInfo);
            break;
        case 10:
            var r = t.type._context,
                o = t.memoizedProps.value;
            Ne(qa, r._currentValue), (r._currentValue = o);
            break;
        case 13:
            if (((r = t.memoizedState), r !== null))
                return r.dehydrated !== null
                    ? (Ne(Ve, Ve.current & 1), (t.flags |= 128), null)
                    : n & t.child.childLanes
                    ? Ev(e, t, n)
                    : (Ne(Ve, Ve.current & 1),
                      (e = Vn(e, t, n)),
                      e !== null ? e.sibling : null);
            Ne(Ve, Ve.current & 1);
            break;
        case 19:
            if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
                if (r) return Rv(e, t, n);
                t.flags |= 128;
            }
            if (
                ((o = t.memoizedState),
                o !== null &&
                    ((o.rendering = null),
                    (o.tail = null),
                    (o.lastEffect = null)),
                Ne(Ve, Ve.current),
                r)
            )
                break;
            return null;
        case 22:
        case 23:
            return (t.lanes = 0), Sv(e, t, n);
    }
    return Vn(e, t, n);
}
var Pv, id, $v, Tv;
Pv = function (e, t) {
    for (var n = t.child; n !== null; ) {
        if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            (n.child.return = n), (n = n.child);
            continue;
        }
        if (n === t) break;
        for (; n.sibling === null; ) {
            if (n.return === null || n.return === t) return;
            n = n.return;
        }
        (n.sibling.return = n.return), (n = n.sibling);
    }
};
id = function () {};
$v = function (e, t, n, r) {
    var o = e.memoizedProps;
    if (o !== r) {
        (e = t.stateNode), jr($n.current);
        var i = null;
        switch (n) {
            case "input":
                (o = Pc(e, o)), (r = Pc(e, r)), (i = []);
                break;
            case "select":
                (o = Ke({}, o, { value: void 0 })),
                    (r = Ke({}, r, { value: void 0 })),
                    (i = []);
                break;
            case "textarea":
                (o = Ic(e, o)), (r = Ic(e, r)), (i = []);
                break;
            default:
                typeof o.onClick != "function" &&
                    typeof r.onClick == "function" &&
                    (e.onclick = ja);
        }
        Mc(n, r);
        var s;
        n = null;
        for (u in o)
            if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
                if (u === "style") {
                    var a = o[u];
                    for (s in a)
                        a.hasOwnProperty(s) && (n || (n = {}), (n[s] = ""));
                } else
                    u !== "dangerouslySetInnerHTML" &&
                        u !== "children" &&
                        u !== "suppressContentEditableWarning" &&
                        u !== "suppressHydrationWarning" &&
                        u !== "autoFocus" &&
                        (ns.hasOwnProperty(u)
                            ? i || (i = [])
                            : (i = i || []).push(u, null));
        for (u in r) {
            var l = r[u];
            if (
                ((a = o != null ? o[u] : void 0),
                r.hasOwnProperty(u) && l !== a && (l != null || a != null))
            )
                if (u === "style")
                    if (a) {
                        for (s in a)
                            !a.hasOwnProperty(s) ||
                                (l && l.hasOwnProperty(s)) ||
                                (n || (n = {}), (n[s] = ""));
                        for (s in l)
                            l.hasOwnProperty(s) &&
                                a[s] !== l[s] &&
                                (n || (n = {}), (n[s] = l[s]));
                    } else n || (i || (i = []), i.push(u, n)), (n = l);
                else
                    u === "dangerouslySetInnerHTML"
                        ? ((l = l ? l.__html : void 0),
                          (a = a ? a.__html : void 0),
                          l != null && a !== l && (i = i || []).push(u, l))
                        : u === "children"
                        ? (typeof l != "string" && typeof l != "number") ||
                          (i = i || []).push(u, "" + l)
                        : u !== "suppressContentEditableWarning" &&
                          u !== "suppressHydrationWarning" &&
                          (ns.hasOwnProperty(u)
                              ? (l != null &&
                                    u === "onScroll" &&
                                    Le("scroll", e),
                                i || a === l || (i = []))
                              : (i = i || []).push(u, l));
        }
        n && (i = i || []).push("style", n);
        var u = i;
        (t.updateQueue = u) && (t.flags |= 4);
    }
};
Tv = function (e, t, n, r) {
    n !== r && (t.flags |= 4);
};
function Si(e, t) {
    if (!je)
        switch (e.tailMode) {
            case "hidden":
                t = e.tail;
                for (var n = null; t !== null; )
                    t.alternate !== null && (n = t), (t = t.sibling);
                n === null ? (e.tail = null) : (n.sibling = null);
                break;
            case "collapsed":
                n = e.tail;
                for (var r = null; n !== null; )
                    n.alternate !== null && (r = n), (n = n.sibling);
                r === null
                    ? t || e.tail === null
                        ? (e.tail = null)
                        : (e.tail.sibling = null)
                    : (r.sibling = null);
        }
}
function bt(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
        n = 0,
        r = 0;
    if (t)
        for (var o = e.child; o !== null; )
            (n |= o.lanes | o.childLanes),
                (r |= o.subtreeFlags & 14680064),
                (r |= o.flags & 14680064),
                (o.return = e),
                (o = o.sibling);
    else
        for (o = e.child; o !== null; )
            (n |= o.lanes | o.childLanes),
                (r |= o.subtreeFlags),
                (r |= o.flags),
                (o.return = e),
                (o = o.sibling);
    return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function cw(e, t, n) {
    var r = t.pendingProps;
    switch ((cf(t), t.tag)) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return bt(t), null;
        case 1:
            return Mt(t.type) && Va(), bt(t), null;
        case 3:
            return (
                (r = t.stateNode),
                Zo(),
                Fe(Ot),
                Fe(Ct),
                bf(),
                r.pendingContext &&
                    ((r.context = r.pendingContext), (r.pendingContext = null)),
                (e === null || e.child === null) &&
                    (Js(t)
                        ? (t.flags |= 4)
                        : e === null ||
                          (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
                          ((t.flags |= 1024),
                          hn !== null && (pd(hn), (hn = null)))),
                id(e, t),
                bt(t),
                null
            );
        case 5:
            vf(t);
            var o = jr(hs.current);
            if (((n = t.type), e !== null && t.stateNode != null))
                $v(e, t, n, r, o),
                    e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
            else {
                if (!r) {
                    if (t.stateNode === null) throw Error(F(166));
                    return bt(t), null;
                }
                if (((e = jr($n.current)), Js(t))) {
                    (r = t.stateNode), (n = t.type);
                    var i = t.memoizedProps;
                    switch (
                        ((r[En] = t), (r[fs] = i), (e = (t.mode & 1) !== 0), n)
                    ) {
                        case "dialog":
                            Le("cancel", r), Le("close", r);
                            break;
                        case "iframe":
                        case "object":
                        case "embed":
                            Le("load", r);
                            break;
                        case "video":
                        case "audio":
                            for (o = 0; o < Li.length; o++) Le(Li[o], r);
                            break;
                        case "source":
                            Le("error", r);
                            break;
                        case "img":
                        case "image":
                        case "link":
                            Le("error", r), Le("load", r);
                            break;
                        case "details":
                            Le("toggle", r);
                            break;
                        case "input":
                            zp(r, i), Le("invalid", r);
                            break;
                        case "select":
                            (r._wrapperState = { wasMultiple: !!i.multiple }),
                                Le("invalid", r);
                            break;
                        case "textarea":
                            Bp(r, i), Le("invalid", r);
                    }
                    Mc(n, i), (o = null);
                    for (var s in i)
                        if (i.hasOwnProperty(s)) {
                            var a = i[s];
                            s === "children"
                                ? typeof a == "string"
                                    ? r.textContent !== a &&
                                      (i.suppressHydrationWarning !== !0 &&
                                          Qs(r.textContent, a, e),
                                      (o = ["children", a]))
                                    : typeof a == "number" &&
                                      r.textContent !== "" + a &&
                                      (i.suppressHydrationWarning !== !0 &&
                                          Qs(r.textContent, a, e),
                                      (o = ["children", "" + a]))
                                : ns.hasOwnProperty(s) &&
                                  a != null &&
                                  s === "onScroll" &&
                                  Le("scroll", r);
                        }
                    switch (n) {
                        case "input":
                            js(r), Fp(r, i, !0);
                            break;
                        case "textarea":
                            js(r), Up(r);
                            break;
                        case "select":
                        case "option":
                            break;
                        default:
                            typeof i.onClick == "function" && (r.onclick = ja);
                    }
                    (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
                } else {
                    (s = o.nodeType === 9 ? o : o.ownerDocument),
                        e === "http://www.w3.org/1999/xhtml" && (e = ny(n)),
                        e === "http://www.w3.org/1999/xhtml"
                            ? n === "script"
                                ? ((e = s.createElement("div")),
                                  (e.innerHTML = "<script></script>"),
                                  (e = e.removeChild(e.firstChild)))
                                : typeof r.is == "string"
                                ? (e = s.createElement(n, { is: r.is }))
                                : ((e = s.createElement(n)),
                                  n === "select" &&
                                      ((s = e),
                                      r.multiple
                                          ? (s.multiple = !0)
                                          : r.size && (s.size = r.size)))
                            : (e = s.createElementNS(e, n)),
                        (e[En] = t),
                        (e[fs] = r),
                        Pv(e, t, !1, !1),
                        (t.stateNode = e);
                    e: {
                        switch (((s = _c(n, r)), n)) {
                            case "dialog":
                                Le("cancel", e), Le("close", e), (o = r);
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                Le("load", e), (o = r);
                                break;
                            case "video":
                            case "audio":
                                for (o = 0; o < Li.length; o++) Le(Li[o], e);
                                o = r;
                                break;
                            case "source":
                                Le("error", e), (o = r);
                                break;
                            case "img":
                            case "image":
                            case "link":
                                Le("error", e), Le("load", e), (o = r);
                                break;
                            case "details":
                                Le("toggle", e), (o = r);
                                break;
                            case "input":
                                zp(e, r), (o = Pc(e, r)), Le("invalid", e);
                                break;
                            case "option":
                                o = r;
                                break;
                            case "select":
                                (e._wrapperState = {
                                    wasMultiple: !!r.multiple,
                                }),
                                    (o = Ke({}, r, { value: void 0 })),
                                    Le("invalid", e);
                                break;
                            case "textarea":
                                Bp(e, r), (o = Ic(e, r)), Le("invalid", e);
                                break;
                            default:
                                o = r;
                        }
                        Mc(n, o), (a = o);
                        for (i in a)
                            if (a.hasOwnProperty(i)) {
                                var l = a[i];
                                i === "style"
                                    ? iy(e, l)
                                    : i === "dangerouslySetInnerHTML"
                                    ? ((l = l ? l.__html : void 0),
                                      l != null && ry(e, l))
                                    : i === "children"
                                    ? typeof l == "string"
                                        ? (n !== "textarea" || l !== "") &&
                                          rs(e, l)
                                        : typeof l == "number" && rs(e, "" + l)
                                    : i !== "suppressContentEditableWarning" &&
                                      i !== "suppressHydrationWarning" &&
                                      i !== "autoFocus" &&
                                      (ns.hasOwnProperty(i)
                                          ? l != null &&
                                            i === "onScroll" &&
                                            Le("scroll", e)
                                          : l != null && qd(e, i, l, s));
                            }
                        switch (n) {
                            case "input":
                                js(e), Fp(e, r, !1);
                                break;
                            case "textarea":
                                js(e), Up(e);
                                break;
                            case "option":
                                r.value != null &&
                                    e.setAttribute("value", "" + br(r.value));
                                break;
                            case "select":
                                (e.multiple = !!r.multiple),
                                    (i = r.value),
                                    i != null
                                        ? No(e, !!r.multiple, i, !1)
                                        : r.defaultValue != null &&
                                          No(
                                              e,
                                              !!r.multiple,
                                              r.defaultValue,
                                              !0
                                          );
                                break;
                            default:
                                typeof o.onClick == "function" &&
                                    (e.onclick = ja);
                        }
                        switch (n) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                r = !!r.autoFocus;
                                break e;
                            case "img":
                                r = !0;
                                break e;
                            default:
                                r = !1;
                        }
                    }
                    r && (t.flags |= 4);
                }
                t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
            }
            return bt(t), null;
        case 6:
            if (e && t.stateNode != null) Tv(e, t, e.memoizedProps, r);
            else {
                if (typeof r != "string" && t.stateNode === null)
                    throw Error(F(166));
                if (((n = jr(hs.current)), jr($n.current), Js(t))) {
                    if (
                        ((r = t.stateNode),
                        (n = t.memoizedProps),
                        (r[En] = t),
                        (i = r.nodeValue !== n) && ((e = Wt), e !== null))
                    )
                        switch (e.tag) {
                            case 3:
                                Qs(r.nodeValue, n, (e.mode & 1) !== 0);
                                break;
                            case 5:
                                e.memoizedProps.suppressHydrationWarning !==
                                    !0 &&
                                    Qs(r.nodeValue, n, (e.mode & 1) !== 0);
                        }
                    i && (t.flags |= 4);
                } else
                    (r = (
                        n.nodeType === 9 ? n : n.ownerDocument
                    ).createTextNode(r)),
                        (r[En] = t),
                        (t.stateNode = r);
            }
            return bt(t), null;
        case 13:
            if (
                (Fe(Ve),
                (r = t.memoizedState),
                e === null ||
                    (e.memoizedState !== null &&
                        e.memoizedState.dehydrated !== null))
            ) {
                if (je && Ut !== null && t.mode & 1 && !(t.flags & 128))
                    Ky(), Qo(), (t.flags |= 98560), (i = !1);
                else if (((i = Js(t)), r !== null && r.dehydrated !== null)) {
                    if (e === null) {
                        if (!i) throw Error(F(318));
                        if (
                            ((i = t.memoizedState),
                            (i = i !== null ? i.dehydrated : null),
                            !i)
                        )
                            throw Error(F(317));
                        i[En] = t;
                    } else
                        Qo(),
                            !(t.flags & 128) && (t.memoizedState = null),
                            (t.flags |= 4);
                    bt(t), (i = !1);
                } else hn !== null && (pd(hn), (hn = null)), (i = !0);
                if (!i) return t.flags & 65536 ? t : null;
            }
            return t.flags & 128
                ? ((t.lanes = n), t)
                : ((r = r !== null),
                  r !== (e !== null && e.memoizedState !== null) &&
                      r &&
                      ((t.child.flags |= 8192),
                      t.mode & 1 &&
                          (e === null || Ve.current & 1
                              ? it === 0 && (it = 3)
                              : Of())),
                  t.updateQueue !== null && (t.flags |= 4),
                  bt(t),
                  null);
        case 4:
            return (
                Zo(),
                id(e, t),
                e === null && cs(t.stateNode.containerInfo),
                bt(t),
                null
            );
        case 10:
            return hf(t.type._context), bt(t), null;
        case 17:
            return Mt(t.type) && Va(), bt(t), null;
        case 19:
            if ((Fe(Ve), (i = t.memoizedState), i === null)) return bt(t), null;
            if (((r = (t.flags & 128) !== 0), (s = i.rendering), s === null))
                if (r) Si(i, !1);
                else {
                    if (it !== 0 || (e !== null && e.flags & 128))
                        for (e = t.child; e !== null; ) {
                            if (((s = Qa(e)), s !== null)) {
                                for (
                                    t.flags |= 128,
                                        Si(i, !1),
                                        r = s.updateQueue,
                                        r !== null &&
                                            ((t.updateQueue = r),
                                            (t.flags |= 4)),
                                        t.subtreeFlags = 0,
                                        r = n,
                                        n = t.child;
                                    n !== null;

                                )
                                    (i = n),
                                        (e = r),
                                        (i.flags &= 14680066),
                                        (s = i.alternate),
                                        s === null
                                            ? ((i.childLanes = 0),
                                              (i.lanes = e),
                                              (i.child = null),
                                              (i.subtreeFlags = 0),
                                              (i.memoizedProps = null),
                                              (i.memoizedState = null),
                                              (i.updateQueue = null),
                                              (i.dependencies = null),
                                              (i.stateNode = null))
                                            : ((i.childLanes = s.childLanes),
                                              (i.lanes = s.lanes),
                                              (i.child = s.child),
                                              (i.subtreeFlags = 0),
                                              (i.deletions = null),
                                              (i.memoizedProps =
                                                  s.memoizedProps),
                                              (i.memoizedState =
                                                  s.memoizedState),
                                              (i.updateQueue = s.updateQueue),
                                              (i.type = s.type),
                                              (e = s.dependencies),
                                              (i.dependencies =
                                                  e === null
                                                      ? null
                                                      : {
                                                            lanes: e.lanes,
                                                            firstContext:
                                                                e.firstContext,
                                                        })),
                                        (n = n.sibling);
                                return Ne(Ve, (Ve.current & 1) | 2), t.child;
                            }
                            e = e.sibling;
                        }
                    i.tail !== null &&
                        Qe() > ti &&
                        ((t.flags |= 128),
                        (r = !0),
                        Si(i, !1),
                        (t.lanes = 4194304));
                }
            else {
                if (!r)
                    if (((e = Qa(s)), e !== null)) {
                        if (
                            ((t.flags |= 128),
                            (r = !0),
                            (n = e.updateQueue),
                            n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                            Si(i, !0),
                            i.tail === null &&
                                i.tailMode === "hidden" &&
                                !s.alternate &&
                                !je)
                        )
                            return bt(t), null;
                    } else
                        2 * Qe() - i.renderingStartTime > ti &&
                            n !== 1073741824 &&
                            ((t.flags |= 128),
                            (r = !0),
                            Si(i, !1),
                            (t.lanes = 4194304));
                i.isBackwards
                    ? ((s.sibling = t.child), (t.child = s))
                    : ((n = i.last),
                      n !== null ? (n.sibling = s) : (t.child = s),
                      (i.last = s));
            }
            return i.tail !== null
                ? ((t = i.tail),
                  (i.rendering = t),
                  (i.tail = t.sibling),
                  (i.renderingStartTime = Qe()),
                  (t.sibling = null),
                  (n = Ve.current),
                  Ne(Ve, r ? (n & 1) | 2 : n & 1),
                  t)
                : (bt(t), null);
        case 22:
        case 23:
            return (
                If(),
                (r = t.memoizedState !== null),
                e !== null &&
                    (e.memoizedState !== null) !== r &&
                    (t.flags |= 8192),
                r && t.mode & 1
                    ? Ft & 1073741824 &&
                      (bt(t), t.subtreeFlags & 6 && (t.flags |= 8192))
                    : bt(t),
                null
            );
        case 24:
            return null;
        case 25:
            return null;
    }
    throw Error(F(156, t.tag));
}
function dw(e, t) {
    switch ((cf(t), t.tag)) {
        case 1:
            return (
                Mt(t.type) && Va(),
                (e = t.flags),
                e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
            );
        case 3:
            return (
                Zo(),
                Fe(Ot),
                Fe(Ct),
                bf(),
                (e = t.flags),
                e & 65536 && !(e & 128)
                    ? ((t.flags = (e & -65537) | 128), t)
                    : null
            );
        case 5:
            return vf(t), null;
        case 13:
            if (
                (Fe(Ve),
                (e = t.memoizedState),
                e !== null && e.dehydrated !== null)
            ) {
                if (t.alternate === null) throw Error(F(340));
                Qo();
            }
            return (
                (e = t.flags),
                e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
            );
        case 19:
            return Fe(Ve), null;
        case 4:
            return Zo(), null;
        case 10:
            return hf(t.type._context), null;
        case 22:
        case 23:
            return If(), null;
        case 24:
            return null;
        default:
            return null;
    }
}
var ta = !1,
    St = !1,
    fw = typeof WeakSet == "function" ? WeakSet : Set,
    X = null;
function To(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function")
            try {
                n(null);
            } catch (r) {
                Ye(e, t, r);
            }
        else n.current = null;
}
function sd(e, t, n) {
    try {
        n();
    } catch (r) {
        Ye(e, t, r);
    }
}
var Ih = !1;
function pw(e, t) {
    if (((jc = Ba), (e = _y()), lf(e))) {
        if ("selectionStart" in e)
            var n = { start: e.selectionStart, end: e.selectionEnd };
        else
            e: {
                n = ((n = e.ownerDocument) && n.defaultView) || window;
                var r = n.getSelection && n.getSelection();
                if (r && r.rangeCount !== 0) {
                    n = r.anchorNode;
                    var o = r.anchorOffset,
                        i = r.focusNode;
                    r = r.focusOffset;
                    try {
                        n.nodeType, i.nodeType;
                    } catch {
                        n = null;
                        break e;
                    }
                    var s = 0,
                        a = -1,
                        l = -1,
                        u = 0,
                        d = 0,
                        f = e,
                        c = null;
                    t: for (;;) {
                        for (
                            var h;
                            f !== n ||
                                (o !== 0 && f.nodeType !== 3) ||
                                (a = s + o),
                                f !== i ||
                                    (r !== 0 && f.nodeType !== 3) ||
                                    (l = s + r),
                                f.nodeType === 3 && (s += f.nodeValue.length),
                                (h = f.firstChild) !== null;

                        )
                            (c = f), (f = h);
                        for (;;) {
                            if (f === e) break t;
                            if (
                                (c === n && ++u === o && (a = s),
                                c === i && ++d === r && (l = s),
                                (h = f.nextSibling) !== null)
                            )
                                break;
                            (f = c), (c = f.parentNode);
                        }
                        f = h;
                    }
                    n = a === -1 || l === -1 ? null : { start: a, end: l };
                } else n = null;
            }
        n = n || { start: 0, end: 0 };
    } else n = null;
    for (
        Vc = { focusedElem: e, selectionRange: n }, Ba = !1, X = t;
        X !== null;

    )
        if (
            ((t = X),
            (e = t.child),
            (t.subtreeFlags & 1028) !== 0 && e !== null)
        )
            (e.return = t), (X = e);
        else
            for (; X !== null; ) {
                t = X;
                try {
                    var g = t.alternate;
                    if (t.flags & 1024)
                        switch (t.tag) {
                            case 0:
                            case 11:
                            case 15:
                                break;
                            case 1:
                                if (g !== null) {
                                    var p = g.memoizedProps,
                                        S = g.memoizedState,
                                        y = t.stateNode,
                                        m = y.getSnapshotBeforeUpdate(
                                            t.elementType === t.type
                                                ? p
                                                : dn(t.type, p),
                                            S
                                        );
                                    y.__reactInternalSnapshotBeforeUpdate = m;
                                }
                                break;
                            case 3:
                                var v = t.stateNode.containerInfo;
                                v.nodeType === 1
                                    ? (v.textContent = "")
                                    : v.nodeType === 9 &&
                                      v.documentElement &&
                                      v.removeChild(v.documentElement);
                                break;
                            case 5:
                            case 6:
                            case 4:
                            case 17:
                                break;
                            default:
                                throw Error(F(163));
                        }
                } catch (x) {
                    Ye(t, t.return, x);
                }
                if (((e = t.sibling), e !== null)) {
                    (e.return = t.return), (X = e);
                    break;
                }
                X = t.return;
            }
    return (g = Ih), (Ih = !1), g;
}
function Gi(e, t, n) {
    var r = t.updateQueue;
    if (((r = r !== null ? r.lastEffect : null), r !== null)) {
        var o = (r = r.next);
        do {
            if ((o.tag & e) === e) {
                var i = o.destroy;
                (o.destroy = void 0), i !== void 0 && sd(t, n, i);
            }
            o = o.next;
        } while (o !== r);
    }
}
function Rl(e, t) {
    if (
        ((t = t.updateQueue),
        (t = t !== null ? t.lastEffect : null),
        t !== null)
    ) {
        var n = (t = t.next);
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r();
            }
            n = n.next;
        } while (n !== t);
    }
}
function ad(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
            case 5:
                e = n;
                break;
            default:
                e = n;
        }
        typeof t == "function" ? t(e) : (t.current = e);
    }
}
function Iv(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), Iv(t)),
        (e.child = null),
        (e.deletions = null),
        (e.sibling = null),
        e.tag === 5 &&
            ((t = e.stateNode),
            t !== null &&
                (delete t[En],
                delete t[fs],
                delete t[Gc],
                delete t[Yx],
                delete t[Xx])),
        (e.stateNode = null),
        (e.return = null),
        (e.dependencies = null),
        (e.memoizedProps = null),
        (e.memoizedState = null),
        (e.pendingProps = null),
        (e.stateNode = null),
        (e.updateQueue = null);
}
function Ov(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Oh(e) {
    e: for (;;) {
        for (; e.sibling === null; ) {
            if (e.return === null || Ov(e.return)) return null;
            e = e.return;
        }
        for (
            e.sibling.return = e.return, e = e.sibling;
            e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

        ) {
            if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
            (e.child.return = e), (e = e.child);
        }
        if (!(e.flags & 2)) return e.stateNode;
    }
}
function ld(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        (e = e.stateNode),
            t
                ? n.nodeType === 8
                    ? n.parentNode.insertBefore(e, t)
                    : n.insertBefore(e, t)
                : (n.nodeType === 8
                      ? ((t = n.parentNode), t.insertBefore(e, n))
                      : ((t = n), t.appendChild(e)),
                  (n = n._reactRootContainer),
                  n != null || t.onclick !== null || (t.onclick = ja));
    else if (r !== 4 && ((e = e.child), e !== null))
        for (ld(e, t, n), e = e.sibling; e !== null; )
            ld(e, t, n), (e = e.sibling);
}
function ud(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && ((e = e.child), e !== null))
        for (ud(e, t, n), e = e.sibling; e !== null; )
            ud(e, t, n), (e = e.sibling);
}
var pt = null,
    fn = !1;
function Jn(e, t, n) {
    for (n = n.child; n !== null; ) Mv(e, t, n), (n = n.sibling);
}
function Mv(e, t, n) {
    if (Pn && typeof Pn.onCommitFiberUnmount == "function")
        try {
            Pn.onCommitFiberUnmount(vl, n);
        } catch {}
    switch (n.tag) {
        case 5:
            St || To(n, t);
        case 6:
            var r = pt,
                o = fn;
            (pt = null),
                Jn(e, t, n),
                (pt = r),
                (fn = o),
                pt !== null &&
                    (fn
                        ? ((e = pt),
                          (n = n.stateNode),
                          e.nodeType === 8
                              ? e.parentNode.removeChild(n)
                              : e.removeChild(n))
                        : pt.removeChild(n.stateNode));
            break;
        case 18:
            pt !== null &&
                (fn
                    ? ((e = pt),
                      (n = n.stateNode),
                      e.nodeType === 8
                          ? ju(e.parentNode, n)
                          : e.nodeType === 1 && ju(e, n),
                      as(e))
                    : ju(pt, n.stateNode));
            break;
        case 4:
            (r = pt),
                (o = fn),
                (pt = n.stateNode.containerInfo),
                (fn = !0),
                Jn(e, t, n),
                (pt = r),
                (fn = o);
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (
                !St &&
                ((r = n.updateQueue),
                r !== null && ((r = r.lastEffect), r !== null))
            ) {
                o = r = r.next;
                do {
                    var i = o,
                        s = i.destroy;
                    (i = i.tag),
                        s !== void 0 && (i & 2 || i & 4) && sd(n, t, s),
                        (o = o.next);
                } while (o !== r);
            }
            Jn(e, t, n);
            break;
        case 1:
            if (
                !St &&
                (To(n, t),
                (r = n.stateNode),
                typeof r.componentWillUnmount == "function")
            )
                try {
                    (r.props = n.memoizedProps),
                        (r.state = n.memoizedState),
                        r.componentWillUnmount();
                } catch (a) {
                    Ye(n, t, a);
                }
            Jn(e, t, n);
            break;
        case 21:
            Jn(e, t, n);
            break;
        case 22:
            n.mode & 1
                ? ((St = (r = St) || n.memoizedState !== null),
                  Jn(e, t, n),
                  (St = r))
                : Jn(e, t, n);
            break;
        default:
            Jn(e, t, n);
    }
}
function Mh(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new fw()),
            t.forEach(function (r) {
                var o = Sw.bind(null, e, r);
                n.has(r) || (n.add(r), r.then(o, o));
            });
    }
}
function cn(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var o = n[r];
            try {
                var i = e,
                    s = t,
                    a = s;
                e: for (; a !== null; ) {
                    switch (a.tag) {
                        case 5:
                            (pt = a.stateNode), (fn = !1);
                            break e;
                        case 3:
                            (pt = a.stateNode.containerInfo), (fn = !0);
                            break e;
                        case 4:
                            (pt = a.stateNode.containerInfo), (fn = !0);
                            break e;
                    }
                    a = a.return;
                }
                if (pt === null) throw Error(F(160));
                Mv(i, s, o), (pt = null), (fn = !1);
                var l = o.alternate;
                l !== null && (l.return = null), (o.return = null);
            } catch (u) {
                Ye(o, t, u);
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null; ) _v(t, e), (t = t.sibling);
}
function _v(e, t) {
    var n = e.alternate,
        r = e.flags;
    switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if ((cn(t, e), wn(e), r & 4)) {
                try {
                    Gi(3, e, e.return), Rl(3, e);
                } catch (p) {
                    Ye(e, e.return, p);
                }
                try {
                    Gi(5, e, e.return);
                } catch (p) {
                    Ye(e, e.return, p);
                }
            }
            break;
        case 1:
            cn(t, e), wn(e), r & 512 && n !== null && To(n, n.return);
            break;
        case 5:
            if (
                (cn(t, e),
                wn(e),
                r & 512 && n !== null && To(n, n.return),
                e.flags & 32)
            ) {
                var o = e.stateNode;
                try {
                    rs(o, "");
                } catch (p) {
                    Ye(e, e.return, p);
                }
            }
            if (r & 4 && ((o = e.stateNode), o != null)) {
                var i = e.memoizedProps,
                    s = n !== null ? n.memoizedProps : i,
                    a = e.type,
                    l = e.updateQueue;
                if (((e.updateQueue = null), l !== null))
                    try {
                        a === "input" &&
                            i.type === "radio" &&
                            i.name != null &&
                            ey(o, i),
                            _c(a, s);
                        var u = _c(a, i);
                        for (s = 0; s < l.length; s += 2) {
                            var d = l[s],
                                f = l[s + 1];
                            d === "style"
                                ? iy(o, f)
                                : d === "dangerouslySetInnerHTML"
                                ? ry(o, f)
                                : d === "children"
                                ? rs(o, f)
                                : qd(o, d, f, u);
                        }
                        switch (a) {
                            case "input":
                                $c(o, i);
                                break;
                            case "textarea":
                                ty(o, i);
                                break;
                            case "select":
                                var c = o._wrapperState.wasMultiple;
                                o._wrapperState.wasMultiple = !!i.multiple;
                                var h = i.value;
                                h != null
                                    ? No(o, !!i.multiple, h, !1)
                                    : c !== !!i.multiple &&
                                      (i.defaultValue != null
                                          ? No(
                                                o,
                                                !!i.multiple,
                                                i.defaultValue,
                                                !0
                                            )
                                          : No(
                                                o,
                                                !!i.multiple,
                                                i.multiple ? [] : "",
                                                !1
                                            ));
                        }
                        o[fs] = i;
                    } catch (p) {
                        Ye(e, e.return, p);
                    }
            }
            break;
        case 6:
            if ((cn(t, e), wn(e), r & 4)) {
                if (e.stateNode === null) throw Error(F(162));
                (o = e.stateNode), (i = e.memoizedProps);
                try {
                    o.nodeValue = i;
                } catch (p) {
                    Ye(e, e.return, p);
                }
            }
            break;
        case 3:
            if (
                (cn(t, e),
                wn(e),
                r & 4 && n !== null && n.memoizedState.isDehydrated)
            )
                try {
                    as(t.containerInfo);
                } catch (p) {
                    Ye(e, e.return, p);
                }
            break;
        case 4:
            cn(t, e), wn(e);
            break;
        case 13:
            cn(t, e),
                wn(e),
                (o = e.child),
                o.flags & 8192 &&
                    ((i = o.memoizedState !== null),
                    (o.stateNode.isHidden = i),
                    !i ||
                        (o.alternate !== null &&
                            o.alternate.memoizedState !== null) ||
                        ($f = Qe())),
                r & 4 && Mh(e);
            break;
        case 22:
            if (
                ((d = n !== null && n.memoizedState !== null),
                e.mode & 1
                    ? ((St = (u = St) || d), cn(t, e), (St = u))
                    : cn(t, e),
                wn(e),
                r & 8192)
            ) {
                if (
                    ((u = e.memoizedState !== null),
                    (e.stateNode.isHidden = u) && !d && e.mode & 1)
                )
                    for (X = e, d = e.child; d !== null; ) {
                        for (f = X = d; X !== null; ) {
                            switch (((c = X), (h = c.child), c.tag)) {
                                case 0:
                                case 11:
                                case 14:
                                case 15:
                                    Gi(4, c, c.return);
                                    break;
                                case 1:
                                    To(c, c.return);
                                    var g = c.stateNode;
                                    if (
                                        typeof g.componentWillUnmount ==
                                        "function"
                                    ) {
                                        (r = c), (n = c.return);
                                        try {
                                            (t = r),
                                                (g.props = t.memoizedProps),
                                                (g.state = t.memoizedState),
                                                g.componentWillUnmount();
                                        } catch (p) {
                                            Ye(r, n, p);
                                        }
                                    }
                                    break;
                                case 5:
                                    To(c, c.return);
                                    break;
                                case 22:
                                    if (c.memoizedState !== null) {
                                        Nh(f);
                                        continue;
                                    }
                            }
                            h !== null ? ((h.return = c), (X = h)) : Nh(f);
                        }
                        d = d.sibling;
                    }
                e: for (d = null, f = e; ; ) {
                    if (f.tag === 5) {
                        if (d === null) {
                            d = f;
                            try {
                                (o = f.stateNode),
                                    u
                                        ? ((i = o.style),
                                          typeof i.setProperty == "function"
                                              ? i.setProperty(
                                                    "display",
                                                    "none",
                                                    "important"
                                                )
                                              : (i.display = "none"))
                                        : ((a = f.stateNode),
                                          (l = f.memoizedProps.style),
                                          (s =
                                              l != null &&
                                              l.hasOwnProperty("display")
                                                  ? l.display
                                                  : null),
                                          (a.style.display = oy("display", s)));
                            } catch (p) {
                                Ye(e, e.return, p);
                            }
                        }
                    } else if (f.tag === 6) {
                        if (d === null)
                            try {
                                f.stateNode.nodeValue = u
                                    ? ""
                                    : f.memoizedProps;
                            } catch (p) {
                                Ye(e, e.return, p);
                            }
                    } else if (
                        ((f.tag !== 22 && f.tag !== 23) ||
                            f.memoizedState === null ||
                            f === e) &&
                        f.child !== null
                    ) {
                        (f.child.return = f), (f = f.child);
                        continue;
                    }
                    if (f === e) break e;
                    for (; f.sibling === null; ) {
                        if (f.return === null || f.return === e) break e;
                        d === f && (d = null), (f = f.return);
                    }
                    d === f && (d = null),
                        (f.sibling.return = f.return),
                        (f = f.sibling);
                }
            }
            break;
        case 19:
            cn(t, e), wn(e), r & 4 && Mh(e);
            break;
        case 21:
            break;
        default:
            cn(t, e), wn(e);
    }
}
function wn(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null; ) {
                    if (Ov(n)) {
                        var r = n;
                        break e;
                    }
                    n = n.return;
                }
                throw Error(F(160));
            }
            switch (r.tag) {
                case 5:
                    var o = r.stateNode;
                    r.flags & 32 && (rs(o, ""), (r.flags &= -33));
                    var i = Oh(e);
                    ud(e, i, o);
                    break;
                case 3:
                case 4:
                    var s = r.stateNode.containerInfo,
                        a = Oh(e);
                    ld(e, a, s);
                    break;
                default:
                    throw Error(F(161));
            }
        } catch (l) {
            Ye(e, e.return, l);
        }
        e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
}
function hw(e, t, n) {
    (X = e), Nv(e);
}
function Nv(e, t, n) {
    for (var r = (e.mode & 1) !== 0; X !== null; ) {
        var o = X,
            i = o.child;
        if (o.tag === 22 && r) {
            var s = o.memoizedState !== null || ta;
            if (!s) {
                var a = o.alternate,
                    l = (a !== null && a.memoizedState !== null) || St;
                a = ta;
                var u = St;
                if (((ta = s), (St = l) && !u))
                    for (X = o; X !== null; )
                        (s = X),
                            (l = s.child),
                            s.tag === 22 && s.memoizedState !== null
                                ? Ah(o)
                                : l !== null
                                ? ((l.return = s), (X = l))
                                : Ah(o);
                for (; i !== null; ) (X = i), Nv(i), (i = i.sibling);
                (X = o), (ta = a), (St = u);
            }
            _h(e);
        } else
            o.subtreeFlags & 8772 && i !== null
                ? ((i.return = o), (X = i))
                : _h(e);
    }
}
function _h(e) {
    for (; X !== null; ) {
        var t = X;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772)
                    switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            St || Rl(5, t);
                            break;
                        case 1:
                            var r = t.stateNode;
                            if (t.flags & 4 && !St)
                                if (n === null) r.componentDidMount();
                                else {
                                    var o =
                                        t.elementType === t.type
                                            ? n.memoizedProps
                                            : dn(t.type, n.memoizedProps);
                                    r.componentDidUpdate(
                                        o,
                                        n.memoizedState,
                                        r.__reactInternalSnapshotBeforeUpdate
                                    );
                                }
                            var i = t.updateQueue;
                            i !== null && gh(t, i, r);
                            break;
                        case 3:
                            var s = t.updateQueue;
                            if (s !== null) {
                                if (((n = null), t.child !== null))
                                    switch (t.child.tag) {
                                        case 5:
                                            n = t.child.stateNode;
                                            break;
                                        case 1:
                                            n = t.child.stateNode;
                                    }
                                gh(t, s, n);
                            }
                            break;
                        case 5:
                            var a = t.stateNode;
                            if (n === null && t.flags & 4) {
                                n = a;
                                var l = t.memoizedProps;
                                switch (t.type) {
                                    case "button":
                                    case "input":
                                    case "select":
                                    case "textarea":
                                        l.autoFocus && n.focus();
                                        break;
                                    case "img":
                                        l.src && (n.src = l.src);
                                }
                            }
                            break;
                        case 6:
                            break;
                        case 4:
                            break;
                        case 12:
                            break;
                        case 13:
                            if (t.memoizedState === null) {
                                var u = t.alternate;
                                if (u !== null) {
                                    var d = u.memoizedState;
                                    if (d !== null) {
                                        var f = d.dehydrated;
                                        f !== null && as(f);
                                    }
                                }
                            }
                            break;
                        case 19:
                        case 17:
                        case 21:
                        case 22:
                        case 23:
                        case 25:
                            break;
                        default:
                            throw Error(F(163));
                    }
                St || (t.flags & 512 && ad(t));
            } catch (c) {
                Ye(t, t.return, c);
            }
        }
        if (t === e) {
            X = null;
            break;
        }
        if (((n = t.sibling), n !== null)) {
            (n.return = t.return), (X = n);
            break;
        }
        X = t.return;
    }
}
function Nh(e) {
    for (; X !== null; ) {
        var t = X;
        if (t === e) {
            X = null;
            break;
        }
        var n = t.sibling;
        if (n !== null) {
            (n.return = t.return), (X = n);
            break;
        }
        X = t.return;
    }
}
function Ah(e) {
    for (; X !== null; ) {
        var t = X;
        try {
            switch (t.tag) {
                case 0:
                case 11:
                case 15:
                    var n = t.return;
                    try {
                        Rl(4, t);
                    } catch (l) {
                        Ye(t, n, l);
                    }
                    break;
                case 1:
                    var r = t.stateNode;
                    if (typeof r.componentDidMount == "function") {
                        var o = t.return;
                        try {
                            r.componentDidMount();
                        } catch (l) {
                            Ye(t, o, l);
                        }
                    }
                    var i = t.return;
                    try {
                        ad(t);
                    } catch (l) {
                        Ye(t, i, l);
                    }
                    break;
                case 5:
                    var s = t.return;
                    try {
                        ad(t);
                    } catch (l) {
                        Ye(t, s, l);
                    }
            }
        } catch (l) {
            Ye(t, t.return, l);
        }
        if (t === e) {
            X = null;
            break;
        }
        var a = t.sibling;
        if (a !== null) {
            (a.return = t.return), (X = a);
            break;
        }
        X = t.return;
    }
}
var mw = Math.ceil,
    el = qn.ReactCurrentDispatcher,
    Rf = qn.ReactCurrentOwner,
    nn = qn.ReactCurrentBatchConfig,
    xe = 0,
    ut = null,
    nt = null,
    gt = 0,
    Ft = 0,
    Io = Rr(0),
    it = 0,
    vs = null,
    Jr = 0,
    Pl = 0,
    Pf = 0,
    qi = null,
    Tt = null,
    $f = 0,
    ti = 1 / 0,
    Nn = null,
    tl = !1,
    cd = null,
    pr = null,
    na = !1,
    sr = null,
    nl = 0,
    Yi = 0,
    dd = null,
    ka = -1,
    Ea = 0;
function Et() {
    return xe & 6 ? Qe() : ka !== -1 ? ka : (ka = Qe());
}
function hr(e) {
    return e.mode & 1
        ? xe & 2 && gt !== 0
            ? gt & -gt
            : Jx.transition !== null
            ? (Ea === 0 && (Ea = yy()), Ea)
            : ((e = Re),
              e !== 0 ||
                  ((e = window.event), (e = e === void 0 ? 16 : ky(e.type))),
              e)
        : 1;
}
function yn(e, t, n, r) {
    if (50 < Yi) throw ((Yi = 0), (dd = null), Error(F(185)));
    Is(e, n, r),
        (!(xe & 2) || e !== ut) &&
            (e === ut && (!(xe & 2) && (Pl |= n), it === 4 && rr(e, gt)),
            _t(e, r),
            n === 1 &&
                xe === 0 &&
                !(t.mode & 1) &&
                ((ti = Qe() + 500), Cl && Pr()));
}
function _t(e, t) {
    var n = e.callbackNode;
    Jb(e, t);
    var r = Fa(e, e === ut ? gt : 0);
    if (r === 0)
        n !== null && Vp(n), (e.callbackNode = null), (e.callbackPriority = 0);
    else if (((t = r & -r), e.callbackPriority !== t)) {
        if ((n != null && Vp(n), t === 1))
            e.tag === 0 ? Qx(Lh.bind(null, e)) : jy(Lh.bind(null, e)),
                Gx(function () {
                    !(xe & 6) && Pr();
                }),
                (n = null);
        else {
            switch (vy(r)) {
                case 1:
                    n = Zd;
                    break;
                case 4:
                    n = my;
                    break;
                case 16:
                    n = za;
                    break;
                case 536870912:
                    n = gy;
                    break;
                default:
                    n = za;
            }
            n = Wv(n, Av.bind(null, e));
        }
        (e.callbackPriority = t), (e.callbackNode = n);
    }
}
function Av(e, t) {
    if (((ka = -1), (Ea = 0), xe & 6)) throw Error(F(327));
    var n = e.callbackNode;
    if (Fo() && e.callbackNode !== n) return null;
    var r = Fa(e, e === ut ? gt : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || t) t = rl(e, r);
    else {
        t = r;
        var o = xe;
        xe |= 2;
        var i = Dv();
        (ut !== e || gt !== t) && ((Nn = null), (ti = Qe() + 500), Kr(e, t));
        do
            try {
                vw();
                break;
            } catch (a) {
                Lv(e, a);
            }
        while (1);
        pf(),
            (el.current = i),
            (xe = o),
            nt !== null ? (t = 0) : ((ut = null), (gt = 0), (t = it));
    }
    if (t !== 0) {
        if (
            (t === 2 && ((o = zc(e)), o !== 0 && ((r = o), (t = fd(e, o)))),
            t === 1)
        )
            throw ((n = vs), Kr(e, 0), rr(e, r), _t(e, Qe()), n);
        if (t === 6) rr(e, r);
        else {
            if (
                ((o = e.current.alternate),
                !(r & 30) &&
                    !gw(o) &&
                    ((t = rl(e, r)),
                    t === 2 &&
                        ((i = zc(e)), i !== 0 && ((r = i), (t = fd(e, i)))),
                    t === 1))
            )
                throw ((n = vs), Kr(e, 0), rr(e, r), _t(e, Qe()), n);
            switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
                case 0:
                case 1:
                    throw Error(F(345));
                case 2:
                    _r(e, Tt, Nn);
                    break;
                case 3:
                    if (
                        (rr(e, r),
                        (r & 130023424) === r &&
                            ((t = $f + 500 - Qe()), 10 < t))
                    ) {
                        if (Fa(e, 0) !== 0) break;
                        if (((o = e.suspendedLanes), (o & r) !== r)) {
                            Et(), (e.pingedLanes |= e.suspendedLanes & o);
                            break;
                        }
                        e.timeoutHandle = Kc(_r.bind(null, e, Tt, Nn), t);
                        break;
                    }
                    _r(e, Tt, Nn);
                    break;
                case 4:
                    if ((rr(e, r), (r & 4194240) === r)) break;
                    for (t = e.eventTimes, o = -1; 0 < r; ) {
                        var s = 31 - gn(r);
                        (i = 1 << s), (s = t[s]), s > o && (o = s), (r &= ~i);
                    }
                    if (
                        ((r = o),
                        (r = Qe() - r),
                        (r =
                            (120 > r
                                ? 120
                                : 480 > r
                                ? 480
                                : 1080 > r
                                ? 1080
                                : 1920 > r
                                ? 1920
                                : 3e3 > r
                                ? 3e3
                                : 4320 > r
                                ? 4320
                                : 1960 * mw(r / 1960)) - r),
                        10 < r)
                    ) {
                        e.timeoutHandle = Kc(_r.bind(null, e, Tt, Nn), r);
                        break;
                    }
                    _r(e, Tt, Nn);
                    break;
                case 5:
                    _r(e, Tt, Nn);
                    break;
                default:
                    throw Error(F(329));
            }
        }
    }
    return _t(e, Qe()), e.callbackNode === n ? Av.bind(null, e) : null;
}
function fd(e, t) {
    var n = qi;
    return (
        e.current.memoizedState.isDehydrated && (Kr(e, t).flags |= 256),
        (e = rl(e, t)),
        e !== 2 && ((t = Tt), (Tt = n), t !== null && pd(t)),
        e
    );
}
function pd(e) {
    Tt === null ? (Tt = e) : Tt.push.apply(Tt, e);
}
function gw(e) {
    for (var t = e; ; ) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && ((n = n.stores), n !== null))
                for (var r = 0; r < n.length; r++) {
                    var o = n[r],
                        i = o.getSnapshot;
                    o = o.value;
                    try {
                        if (!vn(i(), o)) return !1;
                    } catch {
                        return !1;
                    }
                }
        }
        if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
            (n.return = t), (t = n);
        else {
            if (t === e) break;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === e) return !0;
                t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
        }
    }
    return !0;
}
function rr(e, t) {
    for (
        t &= ~Pf,
            t &= ~Pl,
            e.suspendedLanes |= t,
            e.pingedLanes &= ~t,
            e = e.expirationTimes;
        0 < t;

    ) {
        var n = 31 - gn(t),
            r = 1 << n;
        (e[n] = -1), (t &= ~r);
    }
}
function Lh(e) {
    if (xe & 6) throw Error(F(327));
    Fo();
    var t = Fa(e, 0);
    if (!(t & 1)) return _t(e, Qe()), null;
    var n = rl(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = zc(e);
        r !== 0 && ((t = r), (n = fd(e, r)));
    }
    if (n === 1) throw ((n = vs), Kr(e, 0), rr(e, t), _t(e, Qe()), n);
    if (n === 6) throw Error(F(345));
    return (
        (e.finishedWork = e.current.alternate),
        (e.finishedLanes = t),
        _r(e, Tt, Nn),
        _t(e, Qe()),
        null
    );
}
function Tf(e, t) {
    var n = xe;
    xe |= 1;
    try {
        return e(t);
    } finally {
        (xe = n), xe === 0 && ((ti = Qe() + 500), Cl && Pr());
    }
}
function Zr(e) {
    sr !== null && sr.tag === 0 && !(xe & 6) && Fo();
    var t = xe;
    xe |= 1;
    var n = nn.transition,
        r = Re;
    try {
        if (((nn.transition = null), (Re = 1), e)) return e();
    } finally {
        (Re = r), (nn.transition = n), (xe = t), !(xe & 6) && Pr();
    }
}
function If() {
    (Ft = Io.current), Fe(Io);
}
function Kr(e, t) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var n = e.timeoutHandle;
    if ((n !== -1 && ((e.timeoutHandle = -1), Kx(n)), nt !== null))
        for (n = nt.return; n !== null; ) {
            var r = n;
            switch ((cf(r), r.tag)) {
                case 1:
                    (r = r.type.childContextTypes), r != null && Va();
                    break;
                case 3:
                    Zo(), Fe(Ot), Fe(Ct), bf();
                    break;
                case 5:
                    vf(r);
                    break;
                case 4:
                    Zo();
                    break;
                case 13:
                    Fe(Ve);
                    break;
                case 19:
                    Fe(Ve);
                    break;
                case 10:
                    hf(r.type._context);
                    break;
                case 22:
                case 23:
                    If();
            }
            n = n.return;
        }
    if (
        ((ut = e),
        (nt = e = mr(e.current, null)),
        (gt = Ft = t),
        (it = 0),
        (vs = null),
        (Pf = Pl = Jr = 0),
        (Tt = qi = null),
        Wr !== null)
    ) {
        for (t = 0; t < Wr.length; t++)
            if (((n = Wr[t]), (r = n.interleaved), r !== null)) {
                n.interleaved = null;
                var o = r.next,
                    i = n.pending;
                if (i !== null) {
                    var s = i.next;
                    (i.next = o), (r.next = s);
                }
                n.pending = r;
            }
        Wr = null;
    }
    return e;
}
function Lv(e, t) {
    do {
        var n = nt;
        try {
            if ((pf(), (wa.current = Za), Ja)) {
                for (var r = He.memoizedState; r !== null; ) {
                    var o = r.queue;
                    o !== null && (o.pending = null), (r = r.next);
                }
                Ja = !1;
            }
            if (
                ((Qr = 0),
                (lt = ot = He = null),
                (Ki = !1),
                (ms = 0),
                (Rf.current = null),
                n === null || n.return === null)
            ) {
                (it = 1), (vs = t), (nt = null);
                break;
            }
            e: {
                var i = e,
                    s = n.return,
                    a = n,
                    l = t;
                if (
                    ((t = gt),
                    (a.flags |= 32768),
                    l !== null &&
                        typeof l == "object" &&
                        typeof l.then == "function")
                ) {
                    var u = l,
                        d = a,
                        f = d.tag;
                    if (!(d.mode & 1) && (f === 0 || f === 11 || f === 15)) {
                        var c = d.alternate;
                        c
                            ? ((d.updateQueue = c.updateQueue),
                              (d.memoizedState = c.memoizedState),
                              (d.lanes = c.lanes))
                            : ((d.updateQueue = null),
                              (d.memoizedState = null));
                    }
                    var h = Ch(s);
                    if (h !== null) {
                        (h.flags &= -257),
                            kh(h, s, a, i, t),
                            h.mode & 1 && Sh(i, u, t),
                            (t = h),
                            (l = u);
                        var g = t.updateQueue;
                        if (g === null) {
                            var p = new Set();
                            p.add(l), (t.updateQueue = p);
                        } else g.add(l);
                        break e;
                    } else {
                        if (!(t & 1)) {
                            Sh(i, u, t), Of();
                            break e;
                        }
                        l = Error(F(426));
                    }
                } else if (je && a.mode & 1) {
                    var S = Ch(s);
                    if (S !== null) {
                        !(S.flags & 65536) && (S.flags |= 256),
                            kh(S, s, a, i, t),
                            df(ei(l, a));
                        break e;
                    }
                }
                (i = l = ei(l, a)),
                    it !== 4 && (it = 2),
                    qi === null ? (qi = [i]) : qi.push(i),
                    (i = s);
                do {
                    switch (i.tag) {
                        case 3:
                            (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                            var y = bv(i, l, t);
                            mh(i, y);
                            break e;
                        case 1:
                            a = l;
                            var m = i.type,
                                v = i.stateNode;
                            if (
                                !(i.flags & 128) &&
                                (typeof m.getDerivedStateFromError ==
                                    "function" ||
                                    (v !== null &&
                                        typeof v.componentDidCatch ==
                                            "function" &&
                                        (pr === null || !pr.has(v))))
                            ) {
                                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                                var x = xv(i, a, t);
                                mh(i, x);
                                break e;
                            }
                    }
                    i = i.return;
                } while (i !== null);
            }
            Fv(n);
        } catch (k) {
            (t = k), nt === n && n !== null && (nt = n = n.return);
            continue;
        }
        break;
    } while (1);
}
function Dv() {
    var e = el.current;
    return (el.current = Za), e === null ? Za : e;
}
function Of() {
    (it === 0 || it === 3 || it === 2) && (it = 4),
        ut === null || (!(Jr & 268435455) && !(Pl & 268435455)) || rr(ut, gt);
}
function rl(e, t) {
    var n = xe;
    xe |= 2;
    var r = Dv();
    (ut !== e || gt !== t) && ((Nn = null), Kr(e, t));
    do
        try {
            yw();
            break;
        } catch (o) {
            Lv(e, o);
        }
    while (1);
    if ((pf(), (xe = n), (el.current = r), nt !== null)) throw Error(F(261));
    return (ut = null), (gt = 0), it;
}
function yw() {
    for (; nt !== null; ) zv(nt);
}
function vw() {
    for (; nt !== null && !jb(); ) zv(nt);
}
function zv(e) {
    var t = Uv(e.alternate, e, Ft);
    (e.memoizedProps = e.pendingProps),
        t === null ? Fv(e) : (nt = t),
        (Rf.current = null);
}
function Fv(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (((e = t.return), t.flags & 32768)) {
            if (((n = dw(n, t)), n !== null)) {
                (n.flags &= 32767), (nt = n);
                return;
            }
            if (e !== null)
                (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
            else {
                (it = 6), (nt = null);
                return;
            }
        } else if (((n = cw(n, t, Ft)), n !== null)) {
            nt = n;
            return;
        }
        if (((t = t.sibling), t !== null)) {
            nt = t;
            return;
        }
        nt = t = e;
    } while (t !== null);
    it === 0 && (it = 5);
}
function _r(e, t, n) {
    var r = Re,
        o = nn.transition;
    try {
        (nn.transition = null), (Re = 1), bw(e, t, n, r);
    } finally {
        (nn.transition = o), (Re = r);
    }
    return null;
}
function bw(e, t, n, r) {
    do Fo();
    while (sr !== null);
    if (xe & 6) throw Error(F(327));
    n = e.finishedWork;
    var o = e.finishedLanes;
    if (n === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
        throw Error(F(177));
    (e.callbackNode = null), (e.callbackPriority = 0);
    var i = n.lanes | n.childLanes;
    if (
        (Zb(e, i),
        e === ut && ((nt = ut = null), (gt = 0)),
        (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
            na ||
            ((na = !0),
            Wv(za, function () {
                return Fo(), null;
            })),
        (i = (n.flags & 15990) !== 0),
        n.subtreeFlags & 15990 || i)
    ) {
        (i = nn.transition), (nn.transition = null);
        var s = Re;
        Re = 1;
        var a = xe;
        (xe |= 4),
            (Rf.current = null),
            pw(e, n),
            _v(n, e),
            Fx(Vc),
            (Ba = !!jc),
            (Vc = jc = null),
            (e.current = n),
            hw(n),
            Vb(),
            (xe = a),
            (Re = s),
            (nn.transition = i);
    } else e.current = n;
    if (
        (na && ((na = !1), (sr = e), (nl = o)),
        (i = e.pendingLanes),
        i === 0 && (pr = null),
        Gb(n.stateNode),
        _t(e, Qe()),
        t !== null)
    )
        for (r = e.onRecoverableError, n = 0; n < t.length; n++)
            (o = t[n]),
                r(o.value, { componentStack: o.stack, digest: o.digest });
    if (tl) throw ((tl = !1), (e = cd), (cd = null), e);
    return (
        nl & 1 && e.tag !== 0 && Fo(),
        (i = e.pendingLanes),
        i & 1 ? (e === dd ? Yi++ : ((Yi = 0), (dd = e))) : (Yi = 0),
        Pr(),
        null
    );
}
function Fo() {
    if (sr !== null) {
        var e = vy(nl),
            t = nn.transition,
            n = Re;
        try {
            if (((nn.transition = null), (Re = 16 > e ? 16 : e), sr === null))
                var r = !1;
            else {
                if (((e = sr), (sr = null), (nl = 0), xe & 6))
                    throw Error(F(331));
                var o = xe;
                for (xe |= 4, X = e.current; X !== null; ) {
                    var i = X,
                        s = i.child;
                    if (X.flags & 16) {
                        var a = i.deletions;
                        if (a !== null) {
                            for (var l = 0; l < a.length; l++) {
                                var u = a[l];
                                for (X = u; X !== null; ) {
                                    var d = X;
                                    switch (d.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            Gi(8, d, i);
                                    }
                                    var f = d.child;
                                    if (f !== null) (f.return = d), (X = f);
                                    else
                                        for (; X !== null; ) {
                                            d = X;
                                            var c = d.sibling,
                                                h = d.return;
                                            if ((Iv(d), d === u)) {
                                                X = null;
                                                break;
                                            }
                                            if (c !== null) {
                                                (c.return = h), (X = c);
                                                break;
                                            }
                                            X = h;
                                        }
                                }
                            }
                            var g = i.alternate;
                            if (g !== null) {
                                var p = g.child;
                                if (p !== null) {
                                    g.child = null;
                                    do {
                                        var S = p.sibling;
                                        (p.sibling = null), (p = S);
                                    } while (p !== null);
                                }
                            }
                            X = i;
                        }
                    }
                    if (i.subtreeFlags & 2064 && s !== null)
                        (s.return = i), (X = s);
                    else
                        e: for (; X !== null; ) {
                            if (((i = X), i.flags & 2048))
                                switch (i.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Gi(9, i, i.return);
                                }
                            var y = i.sibling;
                            if (y !== null) {
                                (y.return = i.return), (X = y);
                                break e;
                            }
                            X = i.return;
                        }
                }
                var m = e.current;
                for (X = m; X !== null; ) {
                    s = X;
                    var v = s.child;
                    if (s.subtreeFlags & 2064 && v !== null)
                        (v.return = s), (X = v);
                    else
                        e: for (s = m; X !== null; ) {
                            if (((a = X), a.flags & 2048))
                                try {
                                    switch (a.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            Rl(9, a);
                                    }
                                } catch (k) {
                                    Ye(a, a.return, k);
                                }
                            if (a === s) {
                                X = null;
                                break e;
                            }
                            var x = a.sibling;
                            if (x !== null) {
                                (x.return = a.return), (X = x);
                                break e;
                            }
                            X = a.return;
                        }
                }
                if (
                    ((xe = o),
                    Pr(),
                    Pn && typeof Pn.onPostCommitFiberRoot == "function")
                )
                    try {
                        Pn.onPostCommitFiberRoot(vl, e);
                    } catch {}
                r = !0;
            }
            return r;
        } finally {
            (Re = n), (nn.transition = t);
        }
    }
    return !1;
}
function Dh(e, t, n) {
    (t = ei(n, t)),
        (t = bv(e, t, 1)),
        (e = fr(e, t, 1)),
        (t = Et()),
        e !== null && (Is(e, 1, t), _t(e, t));
}
function Ye(e, t, n) {
    if (e.tag === 3) Dh(e, e, n);
    else
        for (; t !== null; ) {
            if (t.tag === 3) {
                Dh(t, e, n);
                break;
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (
                    typeof t.type.getDerivedStateFromError == "function" ||
                    (typeof r.componentDidCatch == "function" &&
                        (pr === null || !pr.has(r)))
                ) {
                    (e = ei(n, e)),
                        (e = xv(t, e, 1)),
                        (t = fr(t, e, 1)),
                        (e = Et()),
                        t !== null && (Is(t, 1, e), _t(t, e));
                    break;
                }
            }
            t = t.return;
        }
}
function xw(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
        (t = Et()),
        (e.pingedLanes |= e.suspendedLanes & n),
        ut === e &&
            (gt & n) === n &&
            (it === 4 ||
            (it === 3 && (gt & 130023424) === gt && 500 > Qe() - $f)
                ? Kr(e, 0)
                : (Pf |= n)),
        _t(e, t);
}
function Bv(e, t) {
    t === 0 &&
        (e.mode & 1
            ? ((t = Ks), (Ks <<= 1), !(Ks & 130023424) && (Ks = 4194304))
            : (t = 1));
    var n = Et();
    (e = jn(e, t)), e !== null && (Is(e, t, n), _t(e, n));
}
function ww(e) {
    var t = e.memoizedState,
        n = 0;
    t !== null && (n = t.retryLane), Bv(e, n);
}
function Sw(e, t) {
    var n = 0;
    switch (e.tag) {
        case 13:
            var r = e.stateNode,
                o = e.memoizedState;
            o !== null && (n = o.retryLane);
            break;
        case 19:
            r = e.stateNode;
            break;
        default:
            throw Error(F(314));
    }
    r !== null && r.delete(t), Bv(e, n);
}
var Uv;
Uv = function (e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || Ot.current) It = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128))
                return (It = !1), uw(e, t, n);
            It = !!(e.flags & 131072);
        }
    else (It = !1), je && t.flags & 1048576 && Vy(t, Ga, t.index);
    switch (((t.lanes = 0), t.tag)) {
        case 2:
            var r = t.type;
            Ca(e, t), (e = t.pendingProps);
            var o = Xo(t, Ct.current);
            zo(t, n), (o = wf(null, t, r, e, o, n));
            var i = Sf();
            return (
                (t.flags |= 1),
                typeof o == "object" &&
                o !== null &&
                typeof o.render == "function" &&
                o.$$typeof === void 0
                    ? ((t.tag = 1),
                      (t.memoizedState = null),
                      (t.updateQueue = null),
                      Mt(r) ? ((i = !0), Ha(t)) : (i = !1),
                      (t.memoizedState =
                          o.state !== null && o.state !== void 0
                              ? o.state
                              : null),
                      gf(t),
                      (o.updater = kl),
                      (t.stateNode = o),
                      (o._reactInternals = t),
                      Zc(t, r, e, n),
                      (t = nd(null, t, r, !0, i, n)))
                    : ((t.tag = 0),
                      je && i && uf(t),
                      kt(null, t, o, n),
                      (t = t.child)),
                t
            );
        case 16:
            r = t.elementType;
            e: {
                switch (
                    (Ca(e, t),
                    (e = t.pendingProps),
                    (o = r._init),
                    (r = o(r._payload)),
                    (t.type = r),
                    (o = t.tag = kw(r)),
                    (e = dn(r, e)),
                    o)
                ) {
                    case 0:
                        t = td(null, t, r, e, n);
                        break e;
                    case 1:
                        t = Ph(null, t, r, e, n);
                        break e;
                    case 11:
                        t = Eh(null, t, r, e, n);
                        break e;
                    case 14:
                        t = Rh(null, t, r, dn(r.type, e), n);
                        break e;
                }
                throw Error(F(306, r, ""));
            }
            return t;
        case 0:
            return (
                (r = t.type),
                (o = t.pendingProps),
                (o = t.elementType === r ? o : dn(r, o)),
                td(e, t, r, o, n)
            );
        case 1:
            return (
                (r = t.type),
                (o = t.pendingProps),
                (o = t.elementType === r ? o : dn(r, o)),
                Ph(e, t, r, o, n)
            );
        case 3:
            e: {
                if ((kv(t), e === null)) throw Error(F(387));
                (r = t.pendingProps),
                    (i = t.memoizedState),
                    (o = i.element),
                    qy(e, t),
                    Xa(t, r, null, n);
                var s = t.memoizedState;
                if (((r = s.element), i.isDehydrated))
                    if (
                        ((i = {
                            element: r,
                            isDehydrated: !1,
                            cache: s.cache,
                            pendingSuspenseBoundaries:
                                s.pendingSuspenseBoundaries,
                            transitions: s.transitions,
                        }),
                        (t.updateQueue.baseState = i),
                        (t.memoizedState = i),
                        t.flags & 256)
                    ) {
                        (o = ei(Error(F(423)), t)), (t = $h(e, t, r, n, o));
                        break e;
                    } else if (r !== o) {
                        (o = ei(Error(F(424)), t)), (t = $h(e, t, r, n, o));
                        break e;
                    } else
                        for (
                            Ut = dr(t.stateNode.containerInfo.firstChild),
                                Wt = t,
                                je = !0,
                                hn = null,
                                n = Jy(t, null, r, n),
                                t.child = n;
                            n;

                        )
                            (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
                else {
                    if ((Qo(), r === o)) {
                        t = Vn(e, t, n);
                        break e;
                    }
                    kt(e, t, r, n);
                }
                t = t.child;
            }
            return t;
        case 5:
            return (
                Zy(t),
                e === null && Xc(t),
                (r = t.type),
                (o = t.pendingProps),
                (i = e !== null ? e.memoizedProps : null),
                (s = o.children),
                Hc(r, o)
                    ? (s = null)
                    : i !== null && Hc(r, i) && (t.flags |= 32),
                Cv(e, t),
                kt(e, t, s, n),
                t.child
            );
        case 6:
            return e === null && Xc(t), null;
        case 13:
            return Ev(e, t, n);
        case 4:
            return (
                yf(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                e === null ? (t.child = Jo(t, null, r, n)) : kt(e, t, r, n),
                t.child
            );
        case 11:
            return (
                (r = t.type),
                (o = t.pendingProps),
                (o = t.elementType === r ? o : dn(r, o)),
                Eh(e, t, r, o, n)
            );
        case 7:
            return kt(e, t, t.pendingProps, n), t.child;
        case 8:
            return kt(e, t, t.pendingProps.children, n), t.child;
        case 12:
            return kt(e, t, t.pendingProps.children, n), t.child;
        case 10:
            e: {
                if (
                    ((r = t.type._context),
                    (o = t.pendingProps),
                    (i = t.memoizedProps),
                    (s = o.value),
                    Ne(qa, r._currentValue),
                    (r._currentValue = s),
                    i !== null)
                )
                    if (vn(i.value, s)) {
                        if (i.children === o.children && !Ot.current) {
                            t = Vn(e, t, n);
                            break e;
                        }
                    } else
                        for (
                            i = t.child, i !== null && (i.return = t);
                            i !== null;

                        ) {
                            var a = i.dependencies;
                            if (a !== null) {
                                s = i.child;
                                for (var l = a.firstContext; l !== null; ) {
                                    if (l.context === r) {
                                        if (i.tag === 1) {
                                            (l = zn(-1, n & -n)), (l.tag = 2);
                                            var u = i.updateQueue;
                                            if (u !== null) {
                                                u = u.shared;
                                                var d = u.pending;
                                                d === null
                                                    ? (l.next = l)
                                                    : ((l.next = d.next),
                                                      (d.next = l)),
                                                    (u.pending = l);
                                            }
                                        }
                                        (i.lanes |= n),
                                            (l = i.alternate),
                                            l !== null && (l.lanes |= n),
                                            Qc(i.return, n, t),
                                            (a.lanes |= n);
                                        break;
                                    }
                                    l = l.next;
                                }
                            } else if (i.tag === 10)
                                s = i.type === t.type ? null : i.child;
                            else if (i.tag === 18) {
                                if (((s = i.return), s === null))
                                    throw Error(F(341));
                                (s.lanes |= n),
                                    (a = s.alternate),
                                    a !== null && (a.lanes |= n),
                                    Qc(s, n, t),
                                    (s = i.sibling);
                            } else s = i.child;
                            if (s !== null) s.return = i;
                            else
                                for (s = i; s !== null; ) {
                                    if (s === t) {
                                        s = null;
                                        break;
                                    }
                                    if (((i = s.sibling), i !== null)) {
                                        (i.return = s.return), (s = i);
                                        break;
                                    }
                                    s = s.return;
                                }
                            i = s;
                        }
                kt(e, t, o.children, n), (t = t.child);
            }
            return t;
        case 9:
            return (
                (o = t.type),
                (r = t.pendingProps.children),
                zo(t, n),
                (o = rn(o)),
                (r = r(o)),
                (t.flags |= 1),
                kt(e, t, r, n),
                t.child
            );
        case 14:
            return (
                (r = t.type),
                (o = dn(r, t.pendingProps)),
                (o = dn(r.type, o)),
                Rh(e, t, r, o, n)
            );
        case 15:
            return wv(e, t, t.type, t.pendingProps, n);
        case 17:
            return (
                (r = t.type),
                (o = t.pendingProps),
                (o = t.elementType === r ? o : dn(r, o)),
                Ca(e, t),
                (t.tag = 1),
                Mt(r) ? ((e = !0), Ha(t)) : (e = !1),
                zo(t, n),
                Xy(t, r, o),
                Zc(t, r, o, n),
                nd(null, t, r, !0, e, n)
            );
        case 19:
            return Rv(e, t, n);
        case 22:
            return Sv(e, t, n);
    }
    throw Error(F(156, t.tag));
};
function Wv(e, t) {
    return hy(e, t);
}
function Cw(e, t, n, r) {
    (this.tag = e),
        (this.key = n),
        (this.sibling =
            this.child =
            this.return =
            this.stateNode =
            this.type =
            this.elementType =
                null),
        (this.index = 0),
        (this.ref = null),
        (this.pendingProps = t),
        (this.dependencies =
            this.memoizedState =
            this.updateQueue =
            this.memoizedProps =
                null),
        (this.mode = r),
        (this.subtreeFlags = this.flags = 0),
        (this.deletions = null),
        (this.childLanes = this.lanes = 0),
        (this.alternate = null);
}
function tn(e, t, n, r) {
    return new Cw(e, t, n, r);
}
function Mf(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
}
function kw(e) {
    if (typeof e == "function") return Mf(e) ? 1 : 0;
    if (e != null) {
        if (((e = e.$$typeof), e === Xd)) return 11;
        if (e === Qd) return 14;
    }
    return 2;
}
function mr(e, t) {
    var n = e.alternate;
    return (
        n === null
            ? ((n = tn(e.tag, t, e.key, e.mode)),
              (n.elementType = e.elementType),
              (n.type = e.type),
              (n.stateNode = e.stateNode),
              (n.alternate = e),
              (e.alternate = n))
            : ((n.pendingProps = t),
              (n.type = e.type),
              (n.flags = 0),
              (n.subtreeFlags = 0),
              (n.deletions = null)),
        (n.flags = e.flags & 14680064),
        (n.childLanes = e.childLanes),
        (n.lanes = e.lanes),
        (n.child = e.child),
        (n.memoizedProps = e.memoizedProps),
        (n.memoizedState = e.memoizedState),
        (n.updateQueue = e.updateQueue),
        (t = e.dependencies),
        (n.dependencies =
            t === null
                ? null
                : { lanes: t.lanes, firstContext: t.firstContext }),
        (n.sibling = e.sibling),
        (n.index = e.index),
        (n.ref = e.ref),
        n
    );
}
function Ra(e, t, n, r, o, i) {
    var s = 2;
    if (((r = e), typeof e == "function")) Mf(e) && (s = 1);
    else if (typeof e == "string") s = 5;
    else
        e: switch (e) {
            case xo:
                return Gr(n.children, o, i, t);
            case Yd:
                (s = 8), (o |= 8);
                break;
            case Cc:
                return (
                    (e = tn(12, n, t, o | 2)),
                    (e.elementType = Cc),
                    (e.lanes = i),
                    e
                );
            case kc:
                return (
                    (e = tn(13, n, t, o)),
                    (e.elementType = kc),
                    (e.lanes = i),
                    e
                );
            case Ec:
                return (
                    (e = tn(19, n, t, o)),
                    (e.elementType = Ec),
                    (e.lanes = i),
                    e
                );
            case Qg:
                return $l(n, o, i, t);
            default:
                if (typeof e == "object" && e !== null)
                    switch (e.$$typeof) {
                        case Yg:
                            s = 10;
                            break e;
                        case Xg:
                            s = 9;
                            break e;
                        case Xd:
                            s = 11;
                            break e;
                        case Qd:
                            s = 14;
                            break e;
                        case er:
                            (s = 16), (r = null);
                            break e;
                    }
                throw Error(F(130, e == null ? e : typeof e, ""));
        }
    return (
        (t = tn(s, n, t, o)),
        (t.elementType = e),
        (t.type = r),
        (t.lanes = i),
        t
    );
}
function Gr(e, t, n, r) {
    return (e = tn(7, e, r, t)), (e.lanes = n), e;
}
function $l(e, t, n, r) {
    return (
        (e = tn(22, e, r, t)),
        (e.elementType = Qg),
        (e.lanes = n),
        (e.stateNode = { isHidden: !1 }),
        e
    );
}
function Qu(e, t, n) {
    return (e = tn(6, e, null, t)), (e.lanes = n), e;
}
function Ju(e, t, n) {
    return (
        (t = tn(4, e.children !== null ? e.children : [], e.key, t)),
        (t.lanes = n),
        (t.stateNode = {
            containerInfo: e.containerInfo,
            pendingChildren: null,
            implementation: e.implementation,
        }),
        t
    );
}
function Ew(e, t, n, r, o) {
    (this.tag = t),
        (this.containerInfo = e),
        (this.finishedWork =
            this.pingCache =
            this.current =
            this.pendingChildren =
                null),
        (this.timeoutHandle = -1),
        (this.callbackNode = this.pendingContext = this.context = null),
        (this.callbackPriority = 0),
        (this.eventTimes = Mu(0)),
        (this.expirationTimes = Mu(-1)),
        (this.entangledLanes =
            this.finishedLanes =
            this.mutableReadLanes =
            this.expiredLanes =
            this.pingedLanes =
            this.suspendedLanes =
            this.pendingLanes =
                0),
        (this.entanglements = Mu(0)),
        (this.identifierPrefix = r),
        (this.onRecoverableError = o),
        (this.mutableSourceEagerHydrationData = null);
}
function _f(e, t, n, r, o, i, s, a, l) {
    return (
        (e = new Ew(e, t, n, a, l)),
        t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
        (i = tn(3, null, null, t)),
        (e.current = i),
        (i.stateNode = e),
        (i.memoizedState = {
            element: r,
            isDehydrated: n,
            cache: null,
            transitions: null,
            pendingSuspenseBoundaries: null,
        }),
        gf(i),
        e
    );
}
function Rw(e, t, n) {
    var r =
        3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: bo,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n,
    };
}
function jv(e) {
    if (!e) return xr;
    e = e._reactInternals;
    e: {
        if (io(e) !== e || e.tag !== 1) throw Error(F(170));
        var t = e;
        do {
            switch (t.tag) {
                case 3:
                    t = t.stateNode.context;
                    break e;
                case 1:
                    if (Mt(t.type)) {
                        t =
                            t.stateNode
                                .__reactInternalMemoizedMergedChildContext;
                        break e;
                    }
            }
            t = t.return;
        } while (t !== null);
        throw Error(F(171));
    }
    if (e.tag === 1) {
        var n = e.type;
        if (Mt(n)) return Wy(e, n, t);
    }
    return t;
}
function Vv(e, t, n, r, o, i, s, a, l) {
    return (
        (e = _f(n, r, !0, e, o, i, s, a, l)),
        (e.context = jv(null)),
        (n = e.current),
        (r = Et()),
        (o = hr(n)),
        (i = zn(r, o)),
        (i.callback = t ?? null),
        fr(n, i, o),
        (e.current.lanes = o),
        Is(e, o, r),
        _t(e, r),
        e
    );
}
function Tl(e, t, n, r) {
    var o = t.current,
        i = Et(),
        s = hr(o);
    return (
        (n = jv(n)),
        t.context === null ? (t.context = n) : (t.pendingContext = n),
        (t = zn(i, s)),
        (t.payload = { element: e }),
        (r = r === void 0 ? null : r),
        r !== null && (t.callback = r),
        (e = fr(o, t, s)),
        e !== null && (yn(e, o, s, i), xa(e, o, s)),
        s
    );
}
function ol(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
        case 5:
            return e.child.stateNode;
        default:
            return e.child.stateNode;
    }
}
function zh(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t;
    }
}
function Nf(e, t) {
    zh(e, t), (e = e.alternate) && zh(e, t);
}
function Pw() {
    return null;
}
var Hv =
    typeof reportError == "function"
        ? reportError
        : function (e) {
              console.error(e);
          };
function Af(e) {
    this._internalRoot = e;
}
Il.prototype.render = Af.prototype.render = function (e) {
    var t = this._internalRoot;
    if (t === null) throw Error(F(409));
    Tl(e, t, null, null);
};
Il.prototype.unmount = Af.prototype.unmount = function () {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        Zr(function () {
            Tl(null, e, null, null);
        }),
            (t[Wn] = null);
    }
};
function Il(e) {
    this._internalRoot = e;
}
Il.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
        var t = wy();
        e = { blockedOn: null, target: e, priority: t };
        for (var n = 0; n < nr.length && t !== 0 && t < nr[n].priority; n++);
        nr.splice(n, 0, e), n === 0 && Cy(e);
    }
};
function Lf(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Ol(e) {
    return !(
        !e ||
        (e.nodeType !== 1 &&
            e.nodeType !== 9 &&
            e.nodeType !== 11 &&
            (e.nodeType !== 8 ||
                e.nodeValue !== " react-mount-point-unstable "))
    );
}
function Fh() {}
function $w(e, t, n, r, o) {
    if (o) {
        if (typeof r == "function") {
            var i = r;
            r = function () {
                var u = ol(s);
                i.call(u);
            };
        }
        var s = Vv(t, r, e, 0, null, !1, !1, "", Fh);
        return (
            (e._reactRootContainer = s),
            (e[Wn] = s.current),
            cs(e.nodeType === 8 ? e.parentNode : e),
            Zr(),
            s
        );
    }
    for (; (o = e.lastChild); ) e.removeChild(o);
    if (typeof r == "function") {
        var a = r;
        r = function () {
            var u = ol(l);
            a.call(u);
        };
    }
    var l = _f(e, 0, !1, null, null, !1, !1, "", Fh);
    return (
        (e._reactRootContainer = l),
        (e[Wn] = l.current),
        cs(e.nodeType === 8 ? e.parentNode : e),
        Zr(function () {
            Tl(t, l, n, r);
        }),
        l
    );
}
function Ml(e, t, n, r, o) {
    var i = n._reactRootContainer;
    if (i) {
        var s = i;
        if (typeof o == "function") {
            var a = o;
            o = function () {
                var l = ol(s);
                a.call(l);
            };
        }
        Tl(t, s, e, o);
    } else s = $w(n, t, e, o, r);
    return ol(s);
}
by = function (e) {
    switch (e.tag) {
        case 3:
            var t = e.stateNode;
            if (t.current.memoizedState.isDehydrated) {
                var n = Ai(t.pendingLanes);
                n !== 0 &&
                    (ef(t, n | 1),
                    _t(t, Qe()),
                    !(xe & 6) && ((ti = Qe() + 500), Pr()));
            }
            break;
        case 13:
            Zr(function () {
                var r = jn(e, 1);
                if (r !== null) {
                    var o = Et();
                    yn(r, e, 1, o);
                }
            }),
                Nf(e, 1);
    }
};
tf = function (e) {
    if (e.tag === 13) {
        var t = jn(e, 134217728);
        if (t !== null) {
            var n = Et();
            yn(t, e, 134217728, n);
        }
        Nf(e, 134217728);
    }
};
xy = function (e) {
    if (e.tag === 13) {
        var t = hr(e),
            n = jn(e, t);
        if (n !== null) {
            var r = Et();
            yn(n, e, t, r);
        }
        Nf(e, t);
    }
};
wy = function () {
    return Re;
};
Sy = function (e, t) {
    var n = Re;
    try {
        return (Re = e), t();
    } finally {
        Re = n;
    }
};
Ac = function (e, t, n) {
    switch (t) {
        case "input":
            if (($c(e, n), (t = n.name), n.type === "radio" && t != null)) {
                for (n = e; n.parentNode; ) n = n.parentNode;
                for (
                    n = n.querySelectorAll(
                        "input[name=" +
                            JSON.stringify("" + t) +
                            '][type="radio"]'
                    ),
                        t = 0;
                    t < n.length;
                    t++
                ) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                        var o = Sl(r);
                        if (!o) throw Error(F(90));
                        Zg(r), $c(r, o);
                    }
                }
            }
            break;
        case "textarea":
            ty(e, n);
            break;
        case "select":
            (t = n.value), t != null && No(e, !!n.multiple, t, !1);
    }
};
ly = Tf;
uy = Zr;
var Tw = { usingClientEntryPoint: !1, Events: [Ms, ko, Sl, sy, ay, Tf] },
    Ci = {
        findFiberByHostInstance: Ur,
        bundleType: 0,
        version: "18.2.0",
        rendererPackageName: "react-dom",
    },
    Iw = {
        bundleType: Ci.bundleType,
        version: Ci.version,
        rendererPackageName: Ci.rendererPackageName,
        rendererConfig: Ci.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: qn.ReactCurrentDispatcher,
        findHostInstanceByFiber: function (e) {
            return (e = fy(e)), e === null ? null : e.stateNode;
        },
        findFiberByHostInstance: Ci.findFiberByHostInstance || Pw,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
    };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var ra = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!ra.isDisabled && ra.supportsFiber)
        try {
            (vl = ra.inject(Iw)), (Pn = ra);
        } catch {}
}
Gt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Tw;
Gt.createPortal = function (e, t) {
    var n =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Lf(t)) throw Error(F(200));
    return Rw(e, t, null, n);
};
Gt.createRoot = function (e, t) {
    if (!Lf(e)) throw Error(F(299));
    var n = !1,
        r = "",
        o = Hv;
    return (
        t != null &&
            (t.unstable_strictMode === !0 && (n = !0),
            t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
            t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
        (t = _f(e, 1, !1, null, null, n, !1, r, o)),
        (e[Wn] = t.current),
        cs(e.nodeType === 8 ? e.parentNode : e),
        new Af(t)
    );
};
Gt.findDOMNode = function (e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0)
        throw typeof e.render == "function"
            ? Error(F(188))
            : ((e = Object.keys(e).join(",")), Error(F(268, e)));
    return (e = fy(t)), (e = e === null ? null : e.stateNode), e;
};
Gt.flushSync = function (e) {
    return Zr(e);
};
Gt.hydrate = function (e, t, n) {
    if (!Ol(t)) throw Error(F(200));
    return Ml(null, e, t, !0, n);
};
Gt.hydrateRoot = function (e, t, n) {
    if (!Lf(e)) throw Error(F(405));
    var r = (n != null && n.hydratedSources) || null,
        o = !1,
        i = "",
        s = Hv;
    if (
        (n != null &&
            (n.unstable_strictMode === !0 && (o = !0),
            n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
            n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
        (t = Vv(t, null, e, 1, n ?? null, o, !1, i, s)),
        (e[Wn] = t.current),
        cs(e),
        r)
    )
        for (e = 0; e < r.length; e++)
            (n = r[e]),
                (o = n._getVersion),
                (o = o(n._source)),
                t.mutableSourceEagerHydrationData == null
                    ? (t.mutableSourceEagerHydrationData = [n, o])
                    : t.mutableSourceEagerHydrationData.push(n, o);
    return new Il(t);
};
Gt.render = function (e, t, n) {
    if (!Ol(t)) throw Error(F(200));
    return Ml(null, e, t, !1, n);
};
Gt.unmountComponentAtNode = function (e) {
    if (!Ol(e)) throw Error(F(40));
    return e._reactRootContainer
        ? (Zr(function () {
              Ml(null, null, e, !1, function () {
                  (e._reactRootContainer = null), (e[Wn] = null);
              });
          }),
          !0)
        : !1;
};
Gt.unstable_batchedUpdates = Tf;
Gt.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
    if (!Ol(n)) throw Error(F(200));
    if (e == null || e._reactInternals === void 0) throw Error(F(38));
    return Ml(e, t, n, !1, r);
};
Gt.version = "18.2.0-next-9e3b772b8-20220608";
(function (e) {
    function t() {
        if (
            !(
                typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
                typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
            )
        )
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
            } catch (n) {
                console.error(n);
            }
    }
    t(), (e.exports = Gt);
})(Pb);
const oa = Dg(qr);
var Bh = qr;
(xc.createRoot = Bh.createRoot), (xc.hydrateRoot = Bh.hydrateRoot);
var hd = {},
    Ow = {
        get exports() {
            return hd;
        },
        set exports(e) {
            hd = e;
        },
    },
    Kv = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ni = b;
function Mw(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var _w = typeof Object.is == "function" ? Object.is : Mw,
    Nw = ni.useState,
    Aw = ni.useEffect,
    Lw = ni.useLayoutEffect,
    Dw = ni.useDebugValue;
function zw(e, t) {
    var n = t(),
        r = Nw({ inst: { value: n, getSnapshot: t } }),
        o = r[0].inst,
        i = r[1];
    return (
        Lw(
            function () {
                (o.value = n), (o.getSnapshot = t), Zu(o) && i({ inst: o });
            },
            [e, n, t]
        ),
        Aw(
            function () {
                return (
                    Zu(o) && i({ inst: o }),
                    e(function () {
                        Zu(o) && i({ inst: o });
                    })
                );
            },
            [e]
        ),
        Dw(n),
        n
    );
}
function Zu(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !_w(e, n);
    } catch {
        return !0;
    }
}
function Fw(e, t) {
    return t();
}
var Bw =
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
        ? Fw
        : zw;
Kv.useSyncExternalStore =
    ni.useSyncExternalStore !== void 0 ? ni.useSyncExternalStore : Bw;
(function (e) {
    e.exports = Kv;
})(Ow);
var Uh = {},
    Uw = {
        get exports() {
            return Uh;
        },
        set exports(e) {
            Uh = e;
        },
    },
    Gv = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var _l = b,
    Ww = hd;
function jw(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Vw = typeof Object.is == "function" ? Object.is : jw,
    Hw = Ww.useSyncExternalStore,
    Kw = _l.useRef,
    Gw = _l.useEffect,
    qw = _l.useMemo,
    Yw = _l.useDebugValue;
Gv.useSyncExternalStoreWithSelector = function (e, t, n, r, o) {
    var i = Kw(null);
    if (i.current === null) {
        var s = { hasValue: !1, value: null };
        i.current = s;
    } else s = i.current;
    i = qw(
        function () {
            function l(h) {
                if (!u) {
                    if (
                        ((u = !0),
                        (d = h),
                        (h = r(h)),
                        o !== void 0 && s.hasValue)
                    ) {
                        var g = s.value;
                        if (o(g, h)) return (f = g);
                    }
                    return (f = h);
                }
                if (((g = f), Vw(d, h))) return g;
                var p = r(h);
                return o !== void 0 && o(g, p) ? g : ((d = h), (f = p));
            }
            var u = !1,
                d,
                f,
                c = n === void 0 ? null : n;
            return [
                function () {
                    return l(t());
                },
                c === null
                    ? void 0
                    : function () {
                          return l(c());
                      },
            ];
        },
        [t, n, r, o]
    );
    var a = Hw(e, i[0], i[1]);
    return (
        Gw(
            function () {
                (s.hasValue = !0), (s.value = a);
            },
            [a]
        ),
        Yw(a),
        a
    );
};
(function (e) {
    e.exports = Gv;
})(Uw);
function Xw(e) {
    e();
}
let qv = Xw;
const Qw = (e) => (qv = e),
    Jw = () => qv,
    Zw = b.createContext(null);
function w() {
    return (
        (w = Object.assign
            ? Object.assign.bind()
            : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var n = arguments[t];
                      for (var r in n)
                          Object.prototype.hasOwnProperty.call(n, r) &&
                              (e[r] = n[r]);
                  }
                  return e;
              }),
        w.apply(this, arguments)
    );
}
function Q(e, t) {
    if (e == null) return {};
    var n = {},
        r = Object.keys(e),
        o,
        i;
    for (i = 0; i < r.length; i++)
        (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
    return n;
}
var md = {},
    eS = {
        get exports() {
            return md;
        },
        set exports(e) {
            md = e;
        },
    },
    Pe = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ct = typeof Symbol == "function" && Symbol.for,
    Df = ct ? Symbol.for("react.element") : 60103,
    zf = ct ? Symbol.for("react.portal") : 60106,
    Nl = ct ? Symbol.for("react.fragment") : 60107,
    Al = ct ? Symbol.for("react.strict_mode") : 60108,
    Ll = ct ? Symbol.for("react.profiler") : 60114,
    Dl = ct ? Symbol.for("react.provider") : 60109,
    zl = ct ? Symbol.for("react.context") : 60110,
    Ff = ct ? Symbol.for("react.async_mode") : 60111,
    Fl = ct ? Symbol.for("react.concurrent_mode") : 60111,
    Bl = ct ? Symbol.for("react.forward_ref") : 60112,
    Ul = ct ? Symbol.for("react.suspense") : 60113,
    tS = ct ? Symbol.for("react.suspense_list") : 60120,
    Wl = ct ? Symbol.for("react.memo") : 60115,
    jl = ct ? Symbol.for("react.lazy") : 60116,
    nS = ct ? Symbol.for("react.block") : 60121,
    rS = ct ? Symbol.for("react.fundamental") : 60117,
    oS = ct ? Symbol.for("react.responder") : 60118,
    iS = ct ? Symbol.for("react.scope") : 60119;
function Yt(e) {
    if (typeof e == "object" && e !== null) {
        var t = e.$$typeof;
        switch (t) {
            case Df:
                switch (((e = e.type), e)) {
                    case Ff:
                    case Fl:
                    case Nl:
                    case Ll:
                    case Al:
                    case Ul:
                        return e;
                    default:
                        switch (((e = e && e.$$typeof), e)) {
                            case zl:
                            case Bl:
                            case jl:
                            case Wl:
                            case Dl:
                                return e;
                            default:
                                return t;
                        }
                }
            case zf:
                return t;
        }
    }
}
function Yv(e) {
    return Yt(e) === Fl;
}
Pe.AsyncMode = Ff;
Pe.ConcurrentMode = Fl;
Pe.ContextConsumer = zl;
Pe.ContextProvider = Dl;
Pe.Element = Df;
Pe.ForwardRef = Bl;
Pe.Fragment = Nl;
Pe.Lazy = jl;
Pe.Memo = Wl;
Pe.Portal = zf;
Pe.Profiler = Ll;
Pe.StrictMode = Al;
Pe.Suspense = Ul;
Pe.isAsyncMode = function (e) {
    return Yv(e) || Yt(e) === Ff;
};
Pe.isConcurrentMode = Yv;
Pe.isContextConsumer = function (e) {
    return Yt(e) === zl;
};
Pe.isContextProvider = function (e) {
    return Yt(e) === Dl;
};
Pe.isElement = function (e) {
    return typeof e == "object" && e !== null && e.$$typeof === Df;
};
Pe.isForwardRef = function (e) {
    return Yt(e) === Bl;
};
Pe.isFragment = function (e) {
    return Yt(e) === Nl;
};
Pe.isLazy = function (e) {
    return Yt(e) === jl;
};
Pe.isMemo = function (e) {
    return Yt(e) === Wl;
};
Pe.isPortal = function (e) {
    return Yt(e) === zf;
};
Pe.isProfiler = function (e) {
    return Yt(e) === Ll;
};
Pe.isStrictMode = function (e) {
    return Yt(e) === Al;
};
Pe.isSuspense = function (e) {
    return Yt(e) === Ul;
};
Pe.isValidElementType = function (e) {
    return (
        typeof e == "string" ||
        typeof e == "function" ||
        e === Nl ||
        e === Fl ||
        e === Ll ||
        e === Al ||
        e === Ul ||
        e === tS ||
        (typeof e == "object" &&
            e !== null &&
            (e.$$typeof === jl ||
                e.$$typeof === Wl ||
                e.$$typeof === Dl ||
                e.$$typeof === zl ||
                e.$$typeof === Bl ||
                e.$$typeof === rS ||
                e.$$typeof === oS ||
                e.$$typeof === iS ||
                e.$$typeof === nS))
    );
};
Pe.typeOf = Yt;
(function (e) {
    e.exports = Pe;
})(eS);
var Xv = md,
    sS = {
        $$typeof: !0,
        render: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0,
    },
    aS = {
        $$typeof: !0,
        compare: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0,
        type: !0,
    },
    Qv = {};
Qv[Xv.ForwardRef] = sS;
Qv[Xv.Memo] = aS;
var Wh = {},
    lS = {
        get exports() {
            return Wh;
        },
        set exports(e) {
            Wh = e;
        },
    },
    $e = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Bf = Symbol.for("react.element"),
    Uf = Symbol.for("react.portal"),
    Vl = Symbol.for("react.fragment"),
    Hl = Symbol.for("react.strict_mode"),
    Kl = Symbol.for("react.profiler"),
    Gl = Symbol.for("react.provider"),
    ql = Symbol.for("react.context"),
    uS = Symbol.for("react.server_context"),
    Yl = Symbol.for("react.forward_ref"),
    Xl = Symbol.for("react.suspense"),
    Ql = Symbol.for("react.suspense_list"),
    Jl = Symbol.for("react.memo"),
    Zl = Symbol.for("react.lazy"),
    cS = Symbol.for("react.offscreen"),
    Jv;
Jv = Symbol.for("react.module.reference");
function sn(e) {
    if (typeof e == "object" && e !== null) {
        var t = e.$$typeof;
        switch (t) {
            case Bf:
                switch (((e = e.type), e)) {
                    case Vl:
                    case Kl:
                    case Hl:
                    case Xl:
                    case Ql:
                        return e;
                    default:
                        switch (((e = e && e.$$typeof), e)) {
                            case uS:
                            case ql:
                            case Yl:
                            case Zl:
                            case Jl:
                            case Gl:
                                return e;
                            default:
                                return t;
                        }
                }
            case Uf:
                return t;
        }
    }
}
$e.ContextConsumer = ql;
$e.ContextProvider = Gl;
$e.Element = Bf;
$e.ForwardRef = Yl;
$e.Fragment = Vl;
$e.Lazy = Zl;
$e.Memo = Jl;
$e.Portal = Uf;
$e.Profiler = Kl;
$e.StrictMode = Hl;
$e.Suspense = Xl;
$e.SuspenseList = Ql;
$e.isAsyncMode = function () {
    return !1;
};
$e.isConcurrentMode = function () {
    return !1;
};
$e.isContextConsumer = function (e) {
    return sn(e) === ql;
};
$e.isContextProvider = function (e) {
    return sn(e) === Gl;
};
$e.isElement = function (e) {
    return typeof e == "object" && e !== null && e.$$typeof === Bf;
};
$e.isForwardRef = function (e) {
    return sn(e) === Yl;
};
$e.isFragment = function (e) {
    return sn(e) === Vl;
};
$e.isLazy = function (e) {
    return sn(e) === Zl;
};
$e.isMemo = function (e) {
    return sn(e) === Jl;
};
$e.isPortal = function (e) {
    return sn(e) === Uf;
};
$e.isProfiler = function (e) {
    return sn(e) === Kl;
};
$e.isStrictMode = function (e) {
    return sn(e) === Hl;
};
$e.isSuspense = function (e) {
    return sn(e) === Xl;
};
$e.isSuspenseList = function (e) {
    return sn(e) === Ql;
};
$e.isValidElementType = function (e) {
    return (
        typeof e == "string" ||
        typeof e == "function" ||
        e === Vl ||
        e === Kl ||
        e === Hl ||
        e === Xl ||
        e === Ql ||
        e === cS ||
        (typeof e == "object" &&
            e !== null &&
            (e.$$typeof === Zl ||
                e.$$typeof === Jl ||
                e.$$typeof === Gl ||
                e.$$typeof === ql ||
                e.$$typeof === Yl ||
                e.$$typeof === Jv ||
                e.getModuleId !== void 0))
    );
};
$e.typeOf = sn;
(function (e) {
    e.exports = $e;
})(lS);
function dS() {
    const e = Jw();
    let t = null,
        n = null;
    return {
        clear() {
            (t = null), (n = null);
        },
        notify() {
            e(() => {
                let r = t;
                for (; r; ) r.callback(), (r = r.next);
            });
        },
        get() {
            let r = [],
                o = t;
            for (; o; ) r.push(o), (o = o.next);
            return r;
        },
        subscribe(r) {
            let o = !0,
                i = (n = { callback: r, next: null, prev: n });
            return (
                i.prev ? (i.prev.next = i) : (t = i),
                function () {
                    !o ||
                        t === null ||
                        ((o = !1),
                        i.next ? (i.next.prev = i.prev) : (n = i.prev),
                        i.prev ? (i.prev.next = i.next) : (t = i.next));
                }
            );
        },
    };
}
const jh = { notify() {}, get: () => [] };
function fS(e, t) {
    let n,
        r = jh;
    function o(f) {
        return l(), r.subscribe(f);
    }
    function i() {
        r.notify();
    }
    function s() {
        d.onStateChange && d.onStateChange();
    }
    function a() {
        return Boolean(n);
    }
    function l() {
        n || ((n = t ? t.addNestedSub(s) : e.subscribe(s)), (r = dS()));
    }
    function u() {
        n && (n(), (n = void 0), r.clear(), (r = jh));
    }
    const d = {
        addNestedSub: o,
        notifyNestedSubs: i,
        handleChangeWrapper: s,
        isSubscribed: a,
        trySubscribe: l,
        tryUnsubscribe: u,
        getListeners: () => r,
    };
    return d;
}
const pS =
        typeof window < "u" &&
        typeof window.document < "u" &&
        typeof window.document.createElement < "u",
    hS = pS ? b.useLayoutEffect : b.useEffect;
function mS({ store: e, context: t, children: n, serverState: r }) {
    const o = b.useMemo(() => {
            const a = fS(e);
            return {
                store: e,
                subscription: a,
                getServerState: r ? () => r : void 0,
            };
        }, [e, r]),
        i = b.useMemo(() => e.getState(), [e]);
    hS(() => {
        const { subscription: a } = o;
        return (
            (a.onStateChange = a.notifyNestedSubs),
            a.trySubscribe(),
            i !== e.getState() && a.notifyNestedSubs(),
            () => {
                a.tryUnsubscribe(), (a.onStateChange = void 0);
            }
        );
    }, [o, i]);
    const s = t || Zw;
    return en.createElement(s.Provider, { value: o }, n);
}
Qw(qr.unstable_batchedUpdates);
function mn(e) {
    for (
        var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1;
        r < t;
        r++
    )
        n[r - 1] = arguments[r];
    throw Error(
        "[Immer] minified error nr: " +
            e +
            (n.length
                ? " " +
                  n
                      .map(function (o) {
                          return "'" + o + "'";
                      })
                      .join(",")
                : "") +
            ". Find the full error at: https://bit.ly/3cXEKWf"
    );
}
function wr(e) {
    return !!e && !!e[Ue];
}
function Hn(e) {
    var t;
    return (
        !!e &&
        ((function (n) {
            if (!n || typeof n != "object") return !1;
            var r = Object.getPrototypeOf(n);
            if (r === null) return !0;
            var o =
                Object.hasOwnProperty.call(r, "constructor") && r.constructor;
            return (
                o === Object ||
                (typeof o == "function" && Function.toString.call(o) === kS)
            );
        })(e) ||
            Array.isArray(e) ||
            !!e[Xh] ||
            !!(!((t = e.constructor) === null || t === void 0) && t[Xh]) ||
            Wf(e) ||
            jf(e))
    );
}
function eo(e, t, n) {
    n === void 0 && (n = !1),
        ui(e) === 0
            ? (n ? Object.keys : Uo)(e).forEach(function (r) {
                  (n && typeof r == "symbol") || t(r, e[r], e);
              })
            : e.forEach(function (r, o) {
                  return t(o, r, e);
              });
}
function ui(e) {
    var t = e[Ue];
    return t
        ? t.i > 3
            ? t.i - 4
            : t.i
        : Array.isArray(e)
        ? 1
        : Wf(e)
        ? 2
        : jf(e)
        ? 3
        : 0;
}
function Bo(e, t) {
    return ui(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function gS(e, t) {
    return ui(e) === 2 ? e.get(t) : e[t];
}
function Zv(e, t, n) {
    var r = ui(e);
    r === 2 ? e.set(t, n) : r === 3 ? (e.delete(t), e.add(n)) : (e[t] = n);
}
function e0(e, t) {
    return e === t ? e !== 0 || 1 / e == 1 / t : e != e && t != t;
}
function Wf(e) {
    return SS && e instanceof Map;
}
function jf(e) {
    return CS && e instanceof Set;
}
function Nr(e) {
    return e.o || e.t;
}
function Vf(e) {
    if (Array.isArray(e)) return Array.prototype.slice.call(e);
    var t = n0(e);
    delete t[Ue];
    for (var n = Uo(t), r = 0; r < n.length; r++) {
        var o = n[r],
            i = t[o];
        i.writable === !1 && ((i.writable = !0), (i.configurable = !0)),
            (i.get || i.set) &&
                (t[o] = {
                    configurable: !0,
                    writable: !0,
                    enumerable: i.enumerable,
                    value: e[o],
                });
    }
    return Object.create(Object.getPrototypeOf(e), t);
}
function Hf(e, t) {
    return (
        t === void 0 && (t = !1),
        Kf(e) ||
            wr(e) ||
            !Hn(e) ||
            (ui(e) > 1 && (e.set = e.add = e.clear = e.delete = yS),
            Object.freeze(e),
            t &&
                eo(
                    e,
                    function (n, r) {
                        return Hf(r, !0);
                    },
                    !0
                )),
        e
    );
}
function yS() {
    mn(2);
}
function Kf(e) {
    return e == null || typeof e != "object" || Object.isFrozen(e);
}
function Tn(e) {
    var t = bd[e];
    return t || mn(18, e), t;
}
function vS(e, t) {
    bd[e] || (bd[e] = t);
}
function gd() {
    return bs;
}
function ec(e, t) {
    t && (Tn("Patches"), (e.u = []), (e.s = []), (e.v = t));
}
function il(e) {
    yd(e), e.p.forEach(bS), (e.p = null);
}
function yd(e) {
    e === bs && (bs = e.l);
}
function Vh(e) {
    return (bs = { p: [], l: bs, h: e, m: !0, _: 0 });
}
function bS(e) {
    var t = e[Ue];
    t.i === 0 || t.i === 1 ? t.j() : (t.O = !0);
}
function tc(e, t) {
    t._ = t.p.length;
    var n = t.p[0],
        r = e !== void 0 && e !== n;
    return (
        t.h.g || Tn("ES5").S(t, e, r),
        r
            ? (n[Ue].P && (il(t), mn(4)),
              Hn(e) && ((e = sl(t, e)), t.l || al(t, e)),
              t.u && Tn("Patches").M(n[Ue].t, e, t.u, t.s))
            : (e = sl(t, n, [])),
        il(t),
        t.u && t.v(t.u, t.s),
        e !== t0 ? e : void 0
    );
}
function sl(e, t, n) {
    if (Kf(t)) return t;
    var r = t[Ue];
    if (!r)
        return (
            eo(
                t,
                function (i, s) {
                    return Hh(e, r, t, i, s, n);
                },
                !0
            ),
            t
        );
    if (r.A !== e) return t;
    if (!r.P) return al(e, r.t, !0), r.t;
    if (!r.I) {
        (r.I = !0), r.A._--;
        var o = r.i === 4 || r.i === 5 ? (r.o = Vf(r.k)) : r.o;
        eo(r.i === 3 ? new Set(o) : o, function (i, s) {
            return Hh(e, r, o, i, s, n);
        }),
            al(e, o, !1),
            n && e.u && Tn("Patches").N(r, n, e.u, e.s);
    }
    return r.o;
}
function Hh(e, t, n, r, o, i) {
    if (wr(o)) {
        var s = sl(
            e,
            o,
            i && t && t.i !== 3 && !Bo(t.R, r) ? i.concat(r) : void 0
        );
        if ((Zv(n, r, s), !wr(s))) return;
        e.m = !1;
    }
    if (Hn(o) && !Kf(o)) {
        if (!e.h.D && e._ < 1) return;
        sl(e, o), (t && t.A.l) || al(e, o);
    }
}
function al(e, t, n) {
    n === void 0 && (n = !1), e.h.D && e.m && Hf(t, n);
}
function nc(e, t) {
    var n = e[Ue];
    return (n ? Nr(n) : e)[t];
}
function Kh(e, t) {
    if (t in e)
        for (var n = Object.getPrototypeOf(e); n; ) {
            var r = Object.getOwnPropertyDescriptor(n, t);
            if (r) return r;
            n = Object.getPrototypeOf(n);
        }
}
function or(e) {
    e.P || ((e.P = !0), e.l && or(e.l));
}
function rc(e) {
    e.o || (e.o = Vf(e.t));
}
function vd(e, t, n) {
    var r = Wf(t)
        ? Tn("MapSet").F(t, n)
        : jf(t)
        ? Tn("MapSet").T(t, n)
        : e.g
        ? (function (o, i) {
              var s = Array.isArray(o),
                  a = {
                      i: s ? 1 : 0,
                      A: i ? i.A : gd(),
                      P: !1,
                      I: !1,
                      R: {},
                      l: i,
                      t: o,
                      k: null,
                      o: null,
                      j: null,
                      C: !1,
                  },
                  l = a,
                  u = xs;
              s && ((l = [a]), (u = Di));
              var d = Proxy.revocable(l, u),
                  f = d.revoke,
                  c = d.proxy;
              return (a.k = c), (a.j = f), c;
          })(t, n)
        : Tn("ES5").J(t, n);
    return (n ? n.A : gd()).p.push(r), r;
}
function xS(e) {
    return (
        wr(e) || mn(22, e),
        (function t(n) {
            if (!Hn(n)) return n;
            var r,
                o = n[Ue],
                i = ui(n);
            if (o) {
                if (!o.P && (o.i < 4 || !Tn("ES5").K(o))) return o.t;
                (o.I = !0), (r = Gh(n, i)), (o.I = !1);
            } else r = Gh(n, i);
            return (
                eo(r, function (s, a) {
                    (o && gS(o.t, s) === a) || Zv(r, s, t(a));
                }),
                i === 3 ? new Set(r) : r
            );
        })(e)
    );
}
function Gh(e, t) {
    switch (t) {
        case 2:
            return new Map(e);
        case 3:
            return Array.from(e);
    }
    return Vf(e);
}
function wS() {
    function e(i, s) {
        var a = o[i];
        return (
            a
                ? (a.enumerable = s)
                : (o[i] = a =
                      {
                          configurable: !0,
                          enumerable: s,
                          get: function () {
                              var l = this[Ue];
                              return xs.get(l, i);
                          },
                          set: function (l) {
                              var u = this[Ue];
                              xs.set(u, i, l);
                          },
                      }),
            a
        );
    }
    function t(i) {
        for (var s = i.length - 1; s >= 0; s--) {
            var a = i[s][Ue];
            if (!a.P)
                switch (a.i) {
                    case 5:
                        r(a) && or(a);
                        break;
                    case 4:
                        n(a) && or(a);
                }
        }
    }
    function n(i) {
        for (var s = i.t, a = i.k, l = Uo(a), u = l.length - 1; u >= 0; u--) {
            var d = l[u];
            if (d !== Ue) {
                var f = s[d];
                if (f === void 0 && !Bo(s, d)) return !0;
                var c = a[d],
                    h = c && c[Ue];
                if (h ? h.t !== f : !e0(c, f)) return !0;
            }
        }
        var g = !!s[Ue];
        return l.length !== Uo(s).length + (g ? 0 : 1);
    }
    function r(i) {
        var s = i.k;
        if (s.length !== i.t.length) return !0;
        var a = Object.getOwnPropertyDescriptor(s, s.length - 1);
        if (a && !a.get) return !0;
        for (var l = 0; l < s.length; l++) if (!s.hasOwnProperty(l)) return !0;
        return !1;
    }
    var o = {};
    vS("ES5", {
        J: function (i, s) {
            var a = Array.isArray(i),
                l = (function (d, f) {
                    if (d) {
                        for (var c = Array(f.length), h = 0; h < f.length; h++)
                            Object.defineProperty(c, "" + h, e(h, !0));
                        return c;
                    }
                    var g = n0(f);
                    delete g[Ue];
                    for (var p = Uo(g), S = 0; S < p.length; S++) {
                        var y = p[S];
                        g[y] = e(y, d || !!g[y].enumerable);
                    }
                    return Object.create(Object.getPrototypeOf(f), g);
                })(a, i),
                u = {
                    i: a ? 5 : 4,
                    A: s ? s.A : gd(),
                    P: !1,
                    I: !1,
                    R: {},
                    l: s,
                    t: i,
                    k: l,
                    o: null,
                    O: !1,
                    C: !1,
                };
            return Object.defineProperty(l, Ue, { value: u, writable: !0 }), l;
        },
        S: function (i, s, a) {
            a
                ? wr(s) && s[Ue].A === i && t(i.p)
                : (i.u &&
                      (function l(u) {
                          if (u && typeof u == "object") {
                              var d = u[Ue];
                              if (d) {
                                  var f = d.t,
                                      c = d.k,
                                      h = d.R,
                                      g = d.i;
                                  if (g === 4)
                                      eo(c, function (v) {
                                          v !== Ue &&
                                              (f[v] !== void 0 || Bo(f, v)
                                                  ? h[v] || l(c[v])
                                                  : ((h[v] = !0), or(d)));
                                      }),
                                          eo(f, function (v) {
                                              c[v] !== void 0 ||
                                                  Bo(c, v) ||
                                                  ((h[v] = !1), or(d));
                                          });
                                  else if (g === 5) {
                                      if (
                                          (r(d) && (or(d), (h.length = !0)),
                                          c.length < f.length)
                                      )
                                          for (
                                              var p = c.length;
                                              p < f.length;
                                              p++
                                          )
                                              h[p] = !1;
                                      else
                                          for (
                                              var S = f.length;
                                              S < c.length;
                                              S++
                                          )
                                              h[S] = !0;
                                      for (
                                          var y = Math.min(c.length, f.length),
                                              m = 0;
                                          m < y;
                                          m++
                                      )
                                          c.hasOwnProperty(m) || (h[m] = !0),
                                              h[m] === void 0 && l(c[m]);
                                  }
                              }
                          }
                      })(i.p[0]),
                  t(i.p));
        },
        K: function (i) {
            return i.i === 4 ? n(i) : r(i);
        },
    });
}
var qh,
    bs,
    Gf = typeof Symbol < "u" && typeof Symbol("x") == "symbol",
    SS = typeof Map < "u",
    CS = typeof Set < "u",
    Yh =
        typeof Proxy < "u" &&
        Proxy.revocable !== void 0 &&
        typeof Reflect < "u",
    t0 = Gf
        ? Symbol.for("immer-nothing")
        : (((qh = {})["immer-nothing"] = !0), qh),
    Xh = Gf ? Symbol.for("immer-draftable") : "__$immer_draftable",
    Ue = Gf ? Symbol.for("immer-state") : "__$immer_state",
    kS = "" + Object.prototype.constructor,
    Uo =
        typeof Reflect < "u" && Reflect.ownKeys
            ? Reflect.ownKeys
            : Object.getOwnPropertySymbols !== void 0
            ? function (e) {
                  return Object.getOwnPropertyNames(e).concat(
                      Object.getOwnPropertySymbols(e)
                  );
              }
            : Object.getOwnPropertyNames,
    n0 =
        Object.getOwnPropertyDescriptors ||
        function (e) {
            var t = {};
            return (
                Uo(e).forEach(function (n) {
                    t[n] = Object.getOwnPropertyDescriptor(e, n);
                }),
                t
            );
        },
    bd = {},
    xs = {
        get: function (e, t) {
            if (t === Ue) return e;
            var n = Nr(e);
            if (!Bo(n, t))
                return (function (o, i, s) {
                    var a,
                        l = Kh(i, s);
                    return l
                        ? "value" in l
                            ? l.value
                            : (a = l.get) === null || a === void 0
                            ? void 0
                            : a.call(o.k)
                        : void 0;
                })(e, n, t);
            var r = n[t];
            return e.I || !Hn(r)
                ? r
                : r === nc(e.t, t)
                ? (rc(e), (e.o[t] = vd(e.A.h, r, e)))
                : r;
        },
        has: function (e, t) {
            return t in Nr(e);
        },
        ownKeys: function (e) {
            return Reflect.ownKeys(Nr(e));
        },
        set: function (e, t, n) {
            var r = Kh(Nr(e), t);
            if (r != null && r.set) return r.set.call(e.k, n), !0;
            if (!e.P) {
                var o = nc(Nr(e), t),
                    i = o == null ? void 0 : o[Ue];
                if (i && i.t === n) return (e.o[t] = n), (e.R[t] = !1), !0;
                if (e0(n, o) && (n !== void 0 || Bo(e.t, t))) return !0;
                rc(e), or(e);
            }
            return (
                (e.o[t] === n && (n !== void 0 || t in e.o)) ||
                    (Number.isNaN(n) && Number.isNaN(e.o[t])) ||
                    ((e.o[t] = n), (e.R[t] = !0)),
                !0
            );
        },
        deleteProperty: function (e, t) {
            return (
                nc(e.t, t) !== void 0 || t in e.t
                    ? ((e.R[t] = !1), rc(e), or(e))
                    : delete e.R[t],
                e.o && delete e.o[t],
                !0
            );
        },
        getOwnPropertyDescriptor: function (e, t) {
            var n = Nr(e),
                r = Reflect.getOwnPropertyDescriptor(n, t);
            return (
                r && {
                    writable: !0,
                    configurable: e.i !== 1 || t !== "length",
                    enumerable: r.enumerable,
                    value: n[t],
                }
            );
        },
        defineProperty: function () {
            mn(11);
        },
        getPrototypeOf: function (e) {
            return Object.getPrototypeOf(e.t);
        },
        setPrototypeOf: function () {
            mn(12);
        },
    },
    Di = {};
eo(xs, function (e, t) {
    Di[e] = function () {
        return (arguments[0] = arguments[0][0]), t.apply(this, arguments);
    };
}),
    (Di.deleteProperty = function (e, t) {
        return Di.set.call(this, e, t, void 0);
    }),
    (Di.set = function (e, t, n) {
        return xs.set.call(this, e[0], t, n, e[0]);
    });
var ES = (function () {
        function e(n) {
            var r = this;
            (this.g = Yh),
                (this.D = !0),
                (this.produce = function (o, i, s) {
                    if (typeof o == "function" && typeof i != "function") {
                        var a = i;
                        i = o;
                        var l = r;
                        return function (p) {
                            var S = this;
                            p === void 0 && (p = a);
                            for (
                                var y = arguments.length,
                                    m = Array(y > 1 ? y - 1 : 0),
                                    v = 1;
                                v < y;
                                v++
                            )
                                m[v - 1] = arguments[v];
                            return l.produce(p, function (x) {
                                var k;
                                return (k = i).call.apply(k, [S, x].concat(m));
                            });
                        };
                    }
                    var u;
                    if (
                        (typeof i != "function" && mn(6),
                        s !== void 0 && typeof s != "function" && mn(7),
                        Hn(o))
                    ) {
                        var d = Vh(r),
                            f = vd(r, o, void 0),
                            c = !0;
                        try {
                            (u = i(f)), (c = !1);
                        } finally {
                            c ? il(d) : yd(d);
                        }
                        return typeof Promise < "u" && u instanceof Promise
                            ? u.then(
                                  function (p) {
                                      return ec(d, s), tc(p, d);
                                  },
                                  function (p) {
                                      throw (il(d), p);
                                  }
                              )
                            : (ec(d, s), tc(u, d));
                    }
                    if (!o || typeof o != "object") {
                        if (
                            ((u = i(o)) === void 0 && (u = o),
                            u === t0 && (u = void 0),
                            r.D && Hf(u, !0),
                            s)
                        ) {
                            var h = [],
                                g = [];
                            Tn("Patches").M(o, u, h, g), s(h, g);
                        }
                        return u;
                    }
                    mn(21, o);
                }),
                (this.produceWithPatches = function (o, i) {
                    if (typeof o == "function")
                        return function (u) {
                            for (
                                var d = arguments.length,
                                    f = Array(d > 1 ? d - 1 : 0),
                                    c = 1;
                                c < d;
                                c++
                            )
                                f[c - 1] = arguments[c];
                            return r.produceWithPatches(u, function (h) {
                                return o.apply(void 0, [h].concat(f));
                            });
                        };
                    var s,
                        a,
                        l = r.produce(o, i, function (u, d) {
                            (s = u), (a = d);
                        });
                    return typeof Promise < "u" && l instanceof Promise
                        ? l.then(function (u) {
                              return [u, s, a];
                          })
                        : [l, s, a];
                }),
                typeof (n == null ? void 0 : n.useProxies) == "boolean" &&
                    this.setUseProxies(n.useProxies),
                typeof (n == null ? void 0 : n.autoFreeze) == "boolean" &&
                    this.setAutoFreeze(n.autoFreeze);
        }
        var t = e.prototype;
        return (
            (t.createDraft = function (n) {
                Hn(n) || mn(8), wr(n) && (n = xS(n));
                var r = Vh(this),
                    o = vd(this, n, void 0);
                return (o[Ue].C = !0), yd(r), o;
            }),
            (t.finishDraft = function (n, r) {
                var o = n && n[Ue],
                    i = o.A;
                return ec(i, r), tc(void 0, i);
            }),
            (t.setAutoFreeze = function (n) {
                this.D = n;
            }),
            (t.setUseProxies = function (n) {
                n && !Yh && mn(20), (this.g = n);
            }),
            (t.applyPatches = function (n, r) {
                var o;
                for (o = r.length - 1; o >= 0; o--) {
                    var i = r[o];
                    if (i.path.length === 0 && i.op === "replace") {
                        n = i.value;
                        break;
                    }
                }
                o > -1 && (r = r.slice(o + 1));
                var s = Tn("Patches").$;
                return wr(n)
                    ? s(n, r)
                    : this.produce(n, function (a) {
                          return s(a, r);
                      });
            }),
            e
        );
    })(),
    Kt = new ES(),
    r0 = Kt.produce;
Kt.produceWithPatches.bind(Kt);
Kt.setAutoFreeze.bind(Kt);
Kt.setUseProxies.bind(Kt);
Kt.applyPatches.bind(Kt);
Kt.createDraft.bind(Kt);
Kt.finishDraft.bind(Kt);
function ws(e) {
    return (
        (ws =
            typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                ? function (t) {
                      return typeof t;
                  }
                : function (t) {
                      return t &&
                          typeof Symbol == "function" &&
                          t.constructor === Symbol &&
                          t !== Symbol.prototype
                          ? "symbol"
                          : typeof t;
                  }),
        ws(e)
    );
}
function RS(e, t) {
    if (ws(e) !== "object" || e === null) return e;
    var n = e[Symbol.toPrimitive];
    if (n !== void 0) {
        var r = n.call(e, t || "default");
        if (ws(r) !== "object") return r;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (t === "string" ? String : Number)(e);
}
function PS(e) {
    var t = RS(e, "string");
    return ws(t) === "symbol" ? t : String(t);
}
function $S(e, t, n) {
    return (
        (t = PS(t)),
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function Qh(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (o) {
                return Object.getOwnPropertyDescriptor(e, o).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function Jh(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t] != null ? arguments[t] : {};
        t % 2
            ? Qh(Object(n), !0).forEach(function (r) {
                  $S(e, r, n[r]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Qh(Object(n)).forEach(function (r) {
                  Object.defineProperty(
                      e,
                      r,
                      Object.getOwnPropertyDescriptor(n, r)
                  );
              });
    }
    return e;
}
function wt(e) {
    return (
        "Minified Redux error #" +
        e +
        "; visit https://redux.js.org/Errors?code=" +
        e +
        " for the full message or use the non-minified dev environment for full errors. "
    );
}
var Zh = (function () {
        return (
            (typeof Symbol == "function" && Symbol.observable) || "@@observable"
        );
    })(),
    oc = function () {
        return Math.random().toString(36).substring(7).split("").join(".");
    },
    ll = {
        INIT: "@@redux/INIT" + oc(),
        REPLACE: "@@redux/REPLACE" + oc(),
        PROBE_UNKNOWN_ACTION: function () {
            return "@@redux/PROBE_UNKNOWN_ACTION" + oc();
        },
    };
function TS(e) {
    if (typeof e != "object" || e === null) return !1;
    for (var t = e; Object.getPrototypeOf(t) !== null; )
        t = Object.getPrototypeOf(t);
    return Object.getPrototypeOf(e) === t;
}
function o0(e, t, n) {
    var r;
    if (
        (typeof t == "function" && typeof n == "function") ||
        (typeof n == "function" && typeof arguments[3] == "function")
    )
        throw new Error(wt(0));
    if (
        (typeof t == "function" && typeof n > "u" && ((n = t), (t = void 0)),
        typeof n < "u")
    ) {
        if (typeof n != "function") throw new Error(wt(1));
        return n(o0)(e, t);
    }
    if (typeof e != "function") throw new Error(wt(2));
    var o = e,
        i = t,
        s = [],
        a = s,
        l = !1;
    function u() {
        a === s && (a = s.slice());
    }
    function d() {
        if (l) throw new Error(wt(3));
        return i;
    }
    function f(p) {
        if (typeof p != "function") throw new Error(wt(4));
        if (l) throw new Error(wt(5));
        var S = !0;
        return (
            u(),
            a.push(p),
            function () {
                if (S) {
                    if (l) throw new Error(wt(6));
                    (S = !1), u();
                    var m = a.indexOf(p);
                    a.splice(m, 1), (s = null);
                }
            }
        );
    }
    function c(p) {
        if (!TS(p)) throw new Error(wt(7));
        if (typeof p.type > "u") throw new Error(wt(8));
        if (l) throw new Error(wt(9));
        try {
            (l = !0), (i = o(i, p));
        } finally {
            l = !1;
        }
        for (var S = (s = a), y = 0; y < S.length; y++) {
            var m = S[y];
            m();
        }
        return p;
    }
    function h(p) {
        if (typeof p != "function") throw new Error(wt(10));
        (o = p), c({ type: ll.REPLACE });
    }
    function g() {
        var p,
            S = f;
        return (
            (p = {
                subscribe: function (m) {
                    if (typeof m != "object" || m === null)
                        throw new Error(wt(11));
                    function v() {
                        m.next && m.next(d());
                    }
                    v();
                    var x = S(v);
                    return { unsubscribe: x };
                },
            }),
            (p[Zh] = function () {
                return this;
            }),
            p
        );
    }
    return (
        c({ type: ll.INIT }),
        (r = { dispatch: c, subscribe: f, getState: d, replaceReducer: h }),
        (r[Zh] = g),
        r
    );
}
function IS(e) {
    Object.keys(e).forEach(function (t) {
        var n = e[t],
            r = n(void 0, { type: ll.INIT });
        if (typeof r > "u") throw new Error(wt(12));
        if (typeof n(void 0, { type: ll.PROBE_UNKNOWN_ACTION() }) > "u")
            throw new Error(wt(13));
    });
}
function OS(e) {
    for (var t = Object.keys(e), n = {}, r = 0; r < t.length; r++) {
        var o = t[r];
        typeof e[o] == "function" && (n[o] = e[o]);
    }
    var i = Object.keys(n),
        s;
    try {
        IS(n);
    } catch (a) {
        s = a;
    }
    return function (l, u) {
        if ((l === void 0 && (l = {}), s)) throw s;
        for (var d = !1, f = {}, c = 0; c < i.length; c++) {
            var h = i[c],
                g = n[h],
                p = l[h],
                S = g(p, u);
            if (typeof S > "u") throw (u && u.type, new Error(wt(14)));
            (f[h] = S), (d = d || S !== p);
        }
        return (d = d || i.length !== Object.keys(l).length), d ? f : l;
    };
}
function ul() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
    return t.length === 0
        ? function (r) {
              return r;
          }
        : t.length === 1
        ? t[0]
        : t.reduce(function (r, o) {
              return function () {
                  return r(o.apply(void 0, arguments));
              };
          });
}
function MS() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
    return function (r) {
        return function () {
            var o = r.apply(void 0, arguments),
                i = function () {
                    throw new Error(wt(15));
                },
                s = {
                    getState: o.getState,
                    dispatch: function () {
                        return i.apply(void 0, arguments);
                    },
                },
                a = t.map(function (l) {
                    return l(s);
                });
            return (
                (i = ul.apply(void 0, a)(o.dispatch)),
                Jh(Jh({}, o), {}, { dispatch: i })
            );
        };
    };
}
function i0(e) {
    var t = function (r) {
        var o = r.dispatch,
            i = r.getState;
        return function (s) {
            return function (a) {
                return typeof a == "function" ? a(o, i, e) : s(a);
            };
        };
    };
    return t;
}
var s0 = i0();
s0.withExtraArgument = i0;
const em = s0;
var _S =
        (globalThis && globalThis.__extends) ||
        (function () {
            var e = function (t, n) {
                return (
                    (e =
                        Object.setPrototypeOf ||
                        ({ __proto__: [] } instanceof Array &&
                            function (r, o) {
                                r.__proto__ = o;
                            }) ||
                        function (r, o) {
                            for (var i in o)
                                Object.prototype.hasOwnProperty.call(o, i) &&
                                    (r[i] = o[i]);
                        }),
                    e(t, n)
                );
            };
            return function (t, n) {
                if (typeof n != "function" && n !== null)
                    throw new TypeError(
                        "Class extends value " +
                            String(n) +
                            " is not a constructor or null"
                    );
                e(t, n);
                function r() {
                    this.constructor = t;
                }
                t.prototype =
                    n === null
                        ? Object.create(n)
                        : ((r.prototype = n.prototype), new r());
            };
        })(),
    Ns =
        (globalThis && globalThis.__generator) ||
        function (e, t) {
            var n = {
                    label: 0,
                    sent: function () {
                        if (i[0] & 1) throw i[1];
                        return i[1];
                    },
                    trys: [],
                    ops: [],
                },
                r,
                o,
                i,
                s;
            return (
                (s = { next: a(0), throw: a(1), return: a(2) }),
                typeof Symbol == "function" &&
                    (s[Symbol.iterator] = function () {
                        return this;
                    }),
                s
            );
            function a(u) {
                return function (d) {
                    return l([u, d]);
                };
            }
            function l(u) {
                if (r) throw new TypeError("Generator is already executing.");
                for (; n; )
                    try {
                        if (
                            ((r = 1),
                            o &&
                                (i =
                                    u[0] & 2
                                        ? o.return
                                        : u[0]
                                        ? o.throw ||
                                          ((i = o.return) && i.call(o), 0)
                                        : o.next) &&
                                !(i = i.call(o, u[1])).done)
                        )
                            return i;
                        switch (
                            ((o = 0), i && (u = [u[0] & 2, i.value]), u[0])
                        ) {
                            case 0:
                            case 1:
                                i = u;
                                break;
                            case 4:
                                return n.label++, { value: u[1], done: !1 };
                            case 5:
                                n.label++, (o = u[1]), (u = [0]);
                                continue;
                            case 7:
                                (u = n.ops.pop()), n.trys.pop();
                                continue;
                            default:
                                if (
                                    ((i = n.trys),
                                    !(i = i.length > 0 && i[i.length - 1]) &&
                                        (u[0] === 6 || u[0] === 2))
                                ) {
                                    n = 0;
                                    continue;
                                }
                                if (
                                    u[0] === 3 &&
                                    (!i || (u[1] > i[0] && u[1] < i[3]))
                                ) {
                                    n.label = u[1];
                                    break;
                                }
                                if (u[0] === 6 && n.label < i[1]) {
                                    (n.label = i[1]), (i = u);
                                    break;
                                }
                                if (i && n.label < i[2]) {
                                    (n.label = i[2]), n.ops.push(u);
                                    break;
                                }
                                i[2] && n.ops.pop(), n.trys.pop();
                                continue;
                        }
                        u = t.call(e, n);
                    } catch (d) {
                        (u = [6, d]), (o = 0);
                    } finally {
                        r = i = 0;
                    }
                if (u[0] & 5) throw u[1];
                return { value: u[0] ? u[1] : void 0, done: !0 };
            }
        },
    Ss =
        (globalThis && globalThis.__spreadArray) ||
        function (e, t) {
            for (var n = 0, r = t.length, o = e.length; n < r; n++, o++)
                e[o] = t[n];
            return e;
        },
    NS = Object.defineProperty,
    AS = Object.defineProperties,
    LS = Object.getOwnPropertyDescriptors,
    tm = Object.getOwnPropertySymbols,
    DS = Object.prototype.hasOwnProperty,
    zS = Object.prototype.propertyIsEnumerable,
    nm = function (e, t, n) {
        return t in e
            ? NS(e, t, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: n,
              })
            : (e[t] = n);
    },
    gr = function (e, t) {
        for (var n in t || (t = {})) DS.call(t, n) && nm(e, n, t[n]);
        if (tm)
            for (var r = 0, o = tm(t); r < o.length; r++) {
                var n = o[r];
                zS.call(t, n) && nm(e, n, t[n]);
            }
        return e;
    },
    ic = function (e, t) {
        return AS(e, LS(t));
    },
    As = function (e, t, n) {
        return new Promise(function (r, o) {
            var i = function (l) {
                    try {
                        a(n.next(l));
                    } catch (u) {
                        o(u);
                    }
                },
                s = function (l) {
                    try {
                        a(n.throw(l));
                    } catch (u) {
                        o(u);
                    }
                },
                a = function (l) {
                    return l.done
                        ? r(l.value)
                        : Promise.resolve(l.value).then(i, s);
                };
            a((n = n.apply(e, t)).next());
        });
    },
    FS =
        typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
            ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
            : function () {
                  if (arguments.length !== 0)
                      return typeof arguments[0] == "object"
                          ? ul
                          : ul.apply(null, arguments);
              };
function BS(e) {
    if (typeof e != "object" || e === null) return !1;
    var t = Object.getPrototypeOf(e);
    if (t === null) return !0;
    for (var n = t; Object.getPrototypeOf(n) !== null; )
        n = Object.getPrototypeOf(n);
    return t === n;
}
var US = (function (e) {
    _S(t, e);
    function t() {
        for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
        var o = e.apply(this, n) || this;
        return Object.setPrototypeOf(o, t.prototype), o;
    }
    return (
        Object.defineProperty(t, Symbol.species, {
            get: function () {
                return t;
            },
            enumerable: !1,
            configurable: !0,
        }),
        (t.prototype.concat = function () {
            for (var n = [], r = 0; r < arguments.length; r++)
                n[r] = arguments[r];
            return e.prototype.concat.apply(this, n);
        }),
        (t.prototype.prepend = function () {
            for (var n = [], r = 0; r < arguments.length; r++)
                n[r] = arguments[r];
            return n.length === 1 && Array.isArray(n[0])
                ? new (t.bind.apply(t, Ss([void 0], n[0].concat(this))))()
                : new (t.bind.apply(t, Ss([void 0], n.concat(this))))();
        }),
        t
    );
})(Array);
function xd(e) {
    return Hn(e) ? r0(e, function () {}) : e;
}
function WS(e) {
    return typeof e == "boolean";
}
function jS() {
    return function (t) {
        return VS(t);
    };
}
function VS(e) {
    e === void 0 && (e = {});
    var t = e.thunk,
        n = t === void 0 ? !0 : t;
    e.immutableCheck, e.serializableCheck;
    var r = new US();
    return (
        n &&
            (WS(n)
                ? r.push(em)
                : r.push(em.withExtraArgument(n.extraArgument))),
        r
    );
}
var HS = !0;
function KS(e) {
    var t = jS(),
        n = e || {},
        r = n.reducer,
        o = r === void 0 ? void 0 : r,
        i = n.middleware,
        s = i === void 0 ? t() : i,
        a = n.devTools,
        l = a === void 0 ? !0 : a,
        u = n.preloadedState,
        d = u === void 0 ? void 0 : u,
        f = n.enhancers,
        c = f === void 0 ? void 0 : f,
        h;
    if (typeof o == "function") h = o;
    else if (BS(o)) h = OS(o);
    else
        throw new Error(
            '"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers'
        );
    var g = s;
    typeof g == "function" && (g = g(t));
    var p = MS.apply(void 0, g),
        S = ul;
    l && (S = FS(gr({ trace: !HS }, typeof l == "object" && l)));
    var y = [p];
    Array.isArray(c) ? (y = Ss([p], c)) : typeof c == "function" && (y = c(y));
    var m = S.apply(void 0, y);
    return o0(h, d, m);
}
function Fn(e, t) {
    function n() {
        for (var r = [], o = 0; o < arguments.length; o++) r[o] = arguments[o];
        if (t) {
            var i = t.apply(void 0, r);
            if (!i) throw new Error("prepareAction did not return an object");
            return gr(
                gr(
                    { type: e, payload: i.payload },
                    "meta" in i && { meta: i.meta }
                ),
                "error" in i && { error: i.error }
            );
        }
        return { type: e, payload: r[0] };
    }
    return (
        (n.toString = function () {
            return "" + e;
        }),
        (n.type = e),
        (n.match = function (r) {
            return r.type === e;
        }),
        n
    );
}
function a0(e) {
    var t = {},
        n = [],
        r,
        o = {
            addCase: function (i, s) {
                var a = typeof i == "string" ? i : i.type;
                if (a in t)
                    throw new Error(
                        "addCase cannot be called with two reducers for the same action type"
                    );
                return (t[a] = s), o;
            },
            addMatcher: function (i, s) {
                return n.push({ matcher: i, reducer: s }), o;
            },
            addDefaultCase: function (i) {
                return (r = i), o;
            },
        };
    return e(o), [t, n, r];
}
function GS(e) {
    return typeof e == "function";
}
function qS(e, t, n, r) {
    n === void 0 && (n = []);
    var o = typeof t == "function" ? a0(t) : [t, n, r],
        i = o[0],
        s = o[1],
        a = o[2],
        l;
    if (GS(e))
        l = function () {
            return xd(e());
        };
    else {
        var u = xd(e);
        l = function () {
            return u;
        };
    }
    function d(f, c) {
        f === void 0 && (f = l());
        var h = Ss(
            [i[c.type]],
            s
                .filter(function (g) {
                    var p = g.matcher;
                    return p(c);
                })
                .map(function (g) {
                    var p = g.reducer;
                    return p;
                })
        );
        return (
            h.filter(function (g) {
                return !!g;
            }).length === 0 && (h = [a]),
            h.reduce(function (g, p) {
                if (p)
                    if (wr(g)) {
                        var S = g,
                            y = p(S, c);
                        return y === void 0 ? g : y;
                    } else {
                        if (Hn(g))
                            return r0(g, function (m) {
                                return p(m, c);
                            });
                        var y = p(g, c);
                        if (y === void 0) {
                            if (g === null) return g;
                            throw Error(
                                "A case reducer on a non-draftable value must not return undefined"
                            );
                        }
                        return y;
                    }
                return g;
            }, f)
        );
    }
    return (d.getInitialState = l), d;
}
function YS(e, t) {
    return e + "/" + t;
}
function XS(e) {
    var t = e.name;
    if (!t) throw new Error("`name` is a required option for createSlice");
    typeof process < "u";
    var n =
            typeof e.initialState == "function"
                ? e.initialState
                : xd(e.initialState),
        r = e.reducers || {},
        o = Object.keys(r),
        i = {},
        s = {},
        a = {};
    o.forEach(function (d) {
        var f = r[d],
            c = YS(t, d),
            h,
            g;
        "reducer" in f ? ((h = f.reducer), (g = f.prepare)) : (h = f),
            (i[d] = h),
            (s[c] = h),
            (a[d] = g ? Fn(c, g) : Fn(c));
    });
    function l() {
        var d =
                typeof e.extraReducers == "function"
                    ? a0(e.extraReducers)
                    : [e.extraReducers],
            f = d[0],
            c = f === void 0 ? {} : f,
            h = d[1],
            g = h === void 0 ? [] : h,
            p = d[2],
            S = p === void 0 ? void 0 : p,
            y = gr(gr({}, c), s);
        return qS(n, function (m) {
            for (var v in y) m.addCase(v, y[v]);
            for (var x = 0, k = g; x < k.length; x++) {
                var R = k[x];
                m.addMatcher(R.matcher, R.reducer);
            }
            S && m.addDefaultCase(S);
        });
    }
    var u;
    return {
        name: t,
        reducer: function (d, f) {
            return u || (u = l()), u(d, f);
        },
        actions: a,
        caseReducers: i,
        getInitialState: function () {
            return u || (u = l()), u.getInitialState();
        },
    };
}
var QS = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",
    l0 = function (e) {
        e === void 0 && (e = 21);
        for (var t = "", n = e; n--; ) t += QS[(Math.random() * 64) | 0];
        return t;
    },
    JS = ["name", "message", "stack", "code"],
    sc = (function () {
        function e(t, n) {
            (this.payload = t), (this.meta = n);
        }
        return e;
    })(),
    rm = (function () {
        function e(t, n) {
            (this.payload = t), (this.meta = n);
        }
        return e;
    })(),
    ZS = function (e) {
        if (typeof e == "object" && e !== null) {
            for (var t = {}, n = 0, r = JS; n < r.length; n++) {
                var o = r[n];
                typeof e[o] == "string" && (t[o] = e[o]);
            }
            return t;
        }
        return { message: String(e) };
    };
(function () {
    function e(t, n, r) {
        var o = Fn(t + "/fulfilled", function (u, d, f, c) {
                return {
                    payload: u,
                    meta: ic(gr({}, c || {}), {
                        arg: f,
                        requestId: d,
                        requestStatus: "fulfilled",
                    }),
                };
            }),
            i = Fn(t + "/pending", function (u, d, f) {
                return {
                    payload: void 0,
                    meta: ic(gr({}, f || {}), {
                        arg: d,
                        requestId: u,
                        requestStatus: "pending",
                    }),
                };
            }),
            s = Fn(t + "/rejected", function (u, d, f, c, h) {
                return {
                    payload: c,
                    error: ((r && r.serializeError) || ZS)(u || "Rejected"),
                    meta: ic(gr({}, h || {}), {
                        arg: f,
                        requestId: d,
                        rejectedWithValue: !!c,
                        requestStatus: "rejected",
                        aborted: (u == null ? void 0 : u.name) === "AbortError",
                        condition:
                            (u == null ? void 0 : u.name) === "ConditionError",
                    }),
                };
            }),
            a =
                typeof AbortController < "u"
                    ? AbortController
                    : (function () {
                          function u() {
                              this.signal = {
                                  aborted: !1,
                                  addEventListener: function () {},
                                  dispatchEvent: function () {
                                      return !1;
                                  },
                                  onabort: function () {},
                                  removeEventListener: function () {},
                                  reason: void 0,
                                  throwIfAborted: function () {},
                              };
                          }
                          return (u.prototype.abort = function () {}), u;
                      })();
        function l(u) {
            return function (d, f, c) {
                var h = r != null && r.idGenerator ? r.idGenerator(u) : l0(),
                    g = new a(),
                    p;
                function S(m) {
                    (p = m), g.abort();
                }
                var y = (function () {
                    return As(this, null, function () {
                        var m, v, x, k, R, C, T;
                        return Ns(this, function (I) {
                            switch (I.label) {
                                case 0:
                                    return (
                                        I.trys.push([0, 4, , 5]),
                                        (k =
                                            (m =
                                                r == null
                                                    ? void 0
                                                    : r.condition) == null
                                                ? void 0
                                                : m.call(r, u, {
                                                      getState: f,
                                                      extra: c,
                                                  })),
                                        tC(k) ? [4, k] : [3, 2]
                                    );
                                case 1:
                                    (k = I.sent()), (I.label = 2);
                                case 2:
                                    if (k === !1 || g.signal.aborted)
                                        throw {
                                            name: "ConditionError",
                                            message:
                                                "Aborted due to condition callback returning false.",
                                        };
                                    return (
                                        (R = new Promise(function (P, D) {
                                            return g.signal.addEventListener(
                                                "abort",
                                                function () {
                                                    return D({
                                                        name: "AbortError",
                                                        message: p || "Aborted",
                                                    });
                                                }
                                            );
                                        })),
                                        d(
                                            i(
                                                h,
                                                u,
                                                (v =
                                                    r == null
                                                        ? void 0
                                                        : r.getPendingMeta) ==
                                                    null
                                                    ? void 0
                                                    : v.call(
                                                          r,
                                                          {
                                                              requestId: h,
                                                              arg: u,
                                                          },
                                                          {
                                                              getState: f,
                                                              extra: c,
                                                          }
                                                      )
                                            )
                                        ),
                                        [
                                            4,
                                            Promise.race([
                                                R,
                                                Promise.resolve(
                                                    n(u, {
                                                        dispatch: d,
                                                        getState: f,
                                                        extra: c,
                                                        requestId: h,
                                                        signal: g.signal,
                                                        abort: S,
                                                        rejectWithValue:
                                                            function (P, D) {
                                                                return new sc(
                                                                    P,
                                                                    D
                                                                );
                                                            },
                                                        fulfillWithValue:
                                                            function (P, D) {
                                                                return new rm(
                                                                    P,
                                                                    D
                                                                );
                                                            },
                                                    })
                                                ).then(function (P) {
                                                    if (P instanceof sc)
                                                        throw P;
                                                    return P instanceof rm
                                                        ? o(
                                                              P.payload,
                                                              h,
                                                              u,
                                                              P.meta
                                                          )
                                                        : o(P, h, u);
                                                }),
                                            ]),
                                        ]
                                    );
                                case 3:
                                    return (x = I.sent()), [3, 5];
                                case 4:
                                    return (
                                        (C = I.sent()),
                                        (x =
                                            C instanceof sc
                                                ? s(
                                                      null,
                                                      h,
                                                      u,
                                                      C.payload,
                                                      C.meta
                                                  )
                                                : s(C, h, u)),
                                        [3, 5]
                                    );
                                case 5:
                                    return (
                                        (T =
                                            r &&
                                            !r.dispatchConditionRejection &&
                                            s.match(x) &&
                                            x.meta.condition),
                                        T || d(x),
                                        [2, x]
                                    );
                            }
                        });
                    });
                })();
                return Object.assign(y, {
                    abort: S,
                    requestId: h,
                    arg: u,
                    unwrap: function () {
                        return y.then(eC);
                    },
                });
            };
        }
        return Object.assign(l, {
            pending: i,
            rejected: s,
            fulfilled: o,
            typePrefix: t,
        });
    }
    return (
        (e.withTypes = function () {
            return e;
        }),
        e
    );
})();
function eC(e) {
    if (e.meta && e.meta.rejectedWithValue) throw e.payload;
    if (e.error) throw e.error;
    return e.payload;
}
function tC(e) {
    return e !== null && typeof e == "object" && typeof e.then == "function";
}
var nC = function (e) {
        return e && typeof e.match == "function";
    },
    rC = function (e, t) {
        return nC(e) ? e.match(t) : e(t);
    };
function oC() {
    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
    return function (n) {
        return e.some(function (r) {
            return rC(r, n);
        });
    };
}
var qf = function (e, t) {
        if (typeof e != "function")
            throw new TypeError(t + " is not a function");
    },
    iC = function () {},
    Yf = function (e, t) {
        return t === void 0 && (t = iC), e.catch(t), e;
    },
    u0 = function (e, t) {
        e.addEventListener("abort", t, { once: !0 });
    },
    Wo = function (e, t) {
        var n = e.signal;
        n.aborted ||
            ("reason" in n ||
                Object.defineProperty(n, "reason", {
                    enumerable: !0,
                    value: t,
                    configurable: !0,
                    writable: !0,
                }),
            e.abort(t));
    },
    sC = "task",
    c0 = "listener",
    d0 = "completed",
    Xf = "cancelled",
    aC = "task-" + Xf,
    lC = "task-" + d0,
    f0 = c0 + "-" + Xf,
    uC = c0 + "-" + d0,
    eu = (function () {
        function e(t) {
            (this.code = t),
                (this.name = "TaskAbortError"),
                (this.message = sC + " " + Xf + " (reason: " + t + ")");
        }
        return e;
    })(),
    jo = function (e) {
        if (e.aborted) throw new eu(e.reason);
    },
    p0 = function (e) {
        return Yf(
            new Promise(function (t, n) {
                var r = function () {
                    return n(new eu(e.reason));
                };
                e.aborted ? r() : u0(e, r);
            })
        );
    },
    cC = function (e, t) {
        return As(void 0, null, function () {
            var n, r;
            return Ns(this, function (o) {
                switch (o.label) {
                    case 0:
                        return (
                            o.trys.push([0, 3, 4, 5]), [4, Promise.resolve()]
                        );
                    case 1:
                        return o.sent(), [4, e()];
                    case 2:
                        return (n = o.sent()), [2, { status: "ok", value: n }];
                    case 3:
                        return (
                            (r = o.sent()),
                            [
                                2,
                                {
                                    status:
                                        r instanceof eu
                                            ? "cancelled"
                                            : "rejected",
                                    error: r,
                                },
                            ]
                        );
                    case 4:
                        return t == null || t(), [7];
                    case 5:
                        return [2];
                }
            });
        });
    },
    cl = function (e) {
        return function (t) {
            return Yf(
                Promise.race([p0(e), t]).then(function (n) {
                    return jo(e), n;
                })
            );
        };
    },
    h0 = function (e) {
        var t = cl(e);
        return function (n) {
            return t(
                new Promise(function (r) {
                    return setTimeout(r, n);
                })
            );
        };
    },
    dC = Object.assign,
    om = {},
    Ls = "listenerMiddleware",
    fC = function (e) {
        var t = function (n) {
            return u0(e, function () {
                return Wo(n, e.reason);
            });
        };
        return function (n) {
            qf(n, "taskExecutor");
            var r = new AbortController();
            t(r);
            var o = cC(
                function () {
                    return As(void 0, null, function () {
                        var i;
                        return Ns(this, function (s) {
                            switch (s.label) {
                                case 0:
                                    return (
                                        jo(e),
                                        jo(r.signal),
                                        [
                                            4,
                                            n({
                                                pause: cl(r.signal),
                                                delay: h0(r.signal),
                                                signal: r.signal,
                                            }),
                                        ]
                                    );
                                case 1:
                                    return (i = s.sent()), jo(r.signal), [2, i];
                            }
                        });
                    });
                },
                function () {
                    return Wo(r, lC);
                }
            );
            return {
                result: cl(e)(o),
                cancel: function () {
                    Wo(r, aC);
                },
            };
        };
    },
    pC = function (e, t) {
        var n = function (r, o) {
            return As(void 0, null, function () {
                var i, s, a, l;
                return Ns(this, function (u) {
                    switch (u.label) {
                        case 0:
                            jo(t),
                                (i = function () {}),
                                (s = new Promise(function (d) {
                                    i = e({
                                        predicate: r,
                                        effect: function (f, c) {
                                            c.unsubscribe(),
                                                d([
                                                    f,
                                                    c.getState(),
                                                    c.getOriginalState(),
                                                ]);
                                        },
                                    });
                                })),
                                (a = [p0(t), s]),
                                o != null &&
                                    a.push(
                                        new Promise(function (d) {
                                            return setTimeout(d, o, null);
                                        })
                                    ),
                                (u.label = 1);
                        case 1:
                            return (
                                u.trys.push([1, , 3, 4]), [4, Promise.race(a)]
                            );
                        case 2:
                            return (l = u.sent()), jo(t), [2, l];
                        case 3:
                            return i(), [7];
                        case 4:
                            return [2];
                    }
                });
            });
        };
        return function (r, o) {
            return Yf(n(r, o));
        };
    },
    m0 = function (e) {
        var t = e.type,
            n = e.actionCreator,
            r = e.matcher,
            o = e.predicate,
            i = e.effect;
        if (t) o = Fn(t).match;
        else if (n) (t = n.type), (o = n.match);
        else if (r) o = r;
        else if (!o)
            throw new Error(
                "Creating or removing a listener requires one of the known fields for matching an action"
            );
        return qf(i, "options.listener"), { predicate: o, type: t, effect: i };
    },
    hC = function (e) {
        var t = m0(e),
            n = t.type,
            r = t.predicate,
            o = t.effect,
            i = l0(),
            s = {
                id: i,
                effect: o,
                type: n,
                predicate: r,
                pending: new Set(),
                unsubscribe: function () {
                    throw new Error("Unsubscribe not initialized");
                },
            };
        return s;
    },
    mC = function (e) {
        return function () {
            e.forEach(wd), e.clear();
        };
    },
    im = function (e, t, n) {
        try {
            e(t, n);
        } catch (r) {
            setTimeout(function () {
                throw r;
            }, 0);
        }
    },
    gC = Fn(Ls + "/add"),
    yC = Fn(Ls + "/removeAll"),
    vC = Fn(Ls + "/remove"),
    bC = function () {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        console.error.apply(console, Ss([Ls + "/error"], e));
    },
    wd = function (e) {
        e.pending.forEach(function (t) {
            Wo(t, f0);
        });
    };
function xC(e) {
    var t = this;
    e === void 0 && (e = {});
    var n = new Map(),
        r = e.extra,
        o = e.onError,
        i = o === void 0 ? bC : o;
    qf(i, "onError");
    var s = function (h) {
            return (
                (h.unsubscribe = function () {
                    return n.delete(h.id);
                }),
                n.set(h.id, h),
                function (g) {
                    h.unsubscribe(), g != null && g.cancelActive && wd(h);
                }
            );
        },
        a = function (h) {
            for (var g = 0, p = Array.from(n.values()); g < p.length; g++) {
                var S = p[g];
                if (h(S)) return S;
            }
        },
        l = function (h) {
            var g = a(function (p) {
                return p.effect === h.effect;
            });
            return g || (g = hC(h)), s(g);
        },
        u = function (h) {
            var g = m0(h),
                p = g.type,
                S = g.effect,
                y = g.predicate,
                m = a(function (v) {
                    var x =
                        typeof p == "string" ? v.type === p : v.predicate === y;
                    return x && v.effect === S;
                });
            return m && (m.unsubscribe(), h.cancelActive && wd(m)), !!m;
        },
        d = function (h, g, p, S) {
            return As(t, null, function () {
                var y, m, v;
                return Ns(this, function (x) {
                    switch (x.label) {
                        case 0:
                            (y = new AbortController()),
                                (m = pC(l, y.signal)),
                                (x.label = 1);
                        case 1:
                            return (
                                x.trys.push([1, 3, 4, 5]),
                                h.pending.add(y),
                                [
                                    4,
                                    Promise.resolve(
                                        h.effect(
                                            g,
                                            dC({}, p, {
                                                getOriginalState: S,
                                                condition: function (k, R) {
                                                    return m(k, R).then(
                                                        Boolean
                                                    );
                                                },
                                                take: m,
                                                delay: h0(y.signal),
                                                pause: cl(y.signal),
                                                extra: r,
                                                signal: y.signal,
                                                fork: fC(y.signal),
                                                unsubscribe: h.unsubscribe,
                                                subscribe: function () {
                                                    n.set(h.id, h);
                                                },
                                                cancelActiveListeners:
                                                    function () {
                                                        h.pending.forEach(
                                                            function (k, R, C) {
                                                                k !== y &&
                                                                    (Wo(k, f0),
                                                                    C.delete(
                                                                        k
                                                                    ));
                                                            }
                                                        );
                                                    },
                                            })
                                        )
                                    ),
                                ]
                            );
                        case 2:
                            return x.sent(), [3, 5];
                        case 3:
                            return (
                                (v = x.sent()),
                                v instanceof eu ||
                                    im(i, v, { raisedBy: "effect" }),
                                [3, 5]
                            );
                        case 4:
                            return Wo(y, uC), h.pending.delete(y), [7];
                        case 5:
                            return [2];
                    }
                });
            });
        },
        f = mC(n),
        c = function (h) {
            return function (g) {
                return function (p) {
                    if (gC.match(p)) return l(p.payload);
                    if (yC.match(p)) {
                        f();
                        return;
                    }
                    if (vC.match(p)) return u(p.payload);
                    var S = h.getState(),
                        y = function () {
                            if (S === om)
                                throw new Error(
                                    Ls +
                                        ": getOriginalState can only be called synchronously"
                                );
                            return S;
                        },
                        m;
                    try {
                        if (((m = g(p)), n.size > 0))
                            for (
                                var v = h.getState(),
                                    x = Array.from(n.values()),
                                    k = 0,
                                    R = x;
                                k < R.length;
                                k++
                            ) {
                                var C = R[k],
                                    T = !1;
                                try {
                                    T = C.predicate(p, v, S);
                                } catch (I) {
                                    (T = !1),
                                        im(i, I, { raisedBy: "predicate" });
                                }
                                T && d(C, p, h, y);
                            }
                    } finally {
                        S = om;
                    }
                    return m;
                };
            };
        };
    return {
        middleware: c,
        startListening: l,
        stopListening: u,
        clearListeners: f,
    };
}
var sm;
typeof queueMicrotask == "function" &&
    queueMicrotask.bind(
        typeof window < "u" ? window : typeof global < "u" ? global : globalThis
    );
wS();
const wC = [
        {
            id: 1,
            name: "Kate Winthrop",
            title: "The Scientist",
            ability: "Science!",
            abilityDescription:
                "Monsters cannot appear during Kate's turn. In addition, she is immune to all Terror effects",
            startingItems: "Spell, Unique",
            sanity: 6,
            stamina: 4,
            clueTokens: 0,
            elderSigns: 0,
        },
        {
            id: 2,
            name: "Sister Mary",
            title: "The Nun",
            ability: "Guardian Angel",
            abilityDescription:
                "Mary may ignore any lingering effects of Mythos cards. She may ignore locked dice icons during her turn, allowing her to add them to her die pool as normal. At the end of her turn, all locked dice return to their locked dice icons.",
            startingItems: "Common, Unique, Spell",
            sanity: 7,
            stamina: 3,
            clueTokens: 0,
            elderSigns: 0,
        },
        {
            id: 3,
            name: "Gloria Goldberg",
            title: "The Author",
            ability: "Psychic Sensitivity",
            abilityDescription:
                "While attempting to resolve on Other World car, Gloria may add the yellow and red dice to her pool for free.",
            startingItems: "Common, Spell",
            sanity: 6,
            stamina: 4,
            clueTokens: 0,
            elderSigns: 0,
        },
        {
            id: 4,
            name: "Bob Jenkins",
            title: "The Salesman",
            ability: "Shrewd Dealer",
            abilityDescription:
                "Each time Bob gains 1 or more common items after setup, he gains 1 extra common item",
            startingItems: "Common, Common, Unique",
            sanity: 4,
            stamina: 6,
            clueTokens: 0,
            elderSigns: 0,
        },
        {
            id: 5,
            name: "Vincent Lee",
            title: "The Doctor",
            ability: "Physician",
            abilityDescription:
                "Once per day, at the start of any player's turn, Vincent may cause any 1 investigator of his choice (icluding himself) to regain 1 stamina",
            startingItems: "Common, Spell",
            sanity: 5,
            stamina: 5,
            clueTokens: 0,
            elderSigns: 0,
        },
        {
            id: 6,
            name: "Jenny Barnes",
            title: "The Dilettante",
            ability: "Trust Fund",
            abilityDescription:
                "At the start of her Resoulution phase, Jenny may discard 1 common item, clue note, or spell to add the yellow and red dice to her dice pool.",
            startingItems: "Common, Spell",
            sanity: 6,
            stamina: 4,
            clueTokens: 0,
            elderSigns: 0,
        },
        {
            id: 7,
            name: "Amanda Sharpe",
            title: "The Student",
            ability: "Studious",
            abilityDescription:
                "During her turn, Amanda may complete any number of tasks per roll instead of only one.",
            startingItems: "2 of any combination (Common, Spell, Unique)",
            sanity: 5,
            stamina: 5,
            clueTokens: 0,
            elderSigns: 0,
        },
        {
            id: 8,
            name: "Michael McGlen",
            title: "The Gangster",
            ability: "Strong Body",
            abilityDescription:
                "Once per roll during his turn, Michael may change 1 die showing a Terror result to a Peril result.",
            startingItems: "Common, Common",
            sanity: 3,
            stamina: 7,
            clueTokens: 0,
            elderSigns: 0,
        },
        {
            id: 9,
            name: "Carolyn Fern",
            title: "The Psychologist",
            ability: "Psychology",
            abilityDescription:
                "Once per day, at the start of any player's turn, Carolyn may cause any 1 investigator of her choice (including herself) to regain 1 sanity.",
            startingItems: "Common, Unique",
            sanity: 6,
            stamina: 4,
            clueTokens: 0,
            elderSigns: 0,
        },
        {
            id: 10,
            name: "Darrell Simmons",
            title: "The Photographer",
            ability: "Hometown Advantage",
            abilityDescription:
                "Once per roll during his turn, Darrell may change the result of a die from 1 investigation to 2, from 2 investigations to 3, or (on yellow and red dice) from 3 investigations to 4.",
            startingItems: "Common, Unique",
            sanity: 4,
            stamina: 6,
            clueTokens: 0,
            elderSigns: 0,
        },
        {
            id: 11,
            name: "Dexter Drake",
            title: "The Magician",
            ability: "Magical Gift",
            abilityDescription:
                "Each time Drake gains 1 or more spells after setup, he gains 1 extra spell.",
            startingItems: "Unique, Spell, Spell",
            sanity: 5,
            stamina: 5,
            clueTokens: 0,
            elderSigns: 0,
        },
        {
            id: 12,
            name: "Monterey Jack",
            title: "The Archaeologists",
            ability: "Archaeology",
            abilityDescription:
                "Each time Monterey gains 1 or more unique items after setup, he gains 1 extra unique item.",
            startingItems: "Common, Unique, Unique",
            sanity: 3,
            stamina: 7,
            clueTokens: 0,
            elderSigns: 0,
        },
        {
            id: 13,
            name: "Joe Diamond",
            title: "The Private Eye",
            ability: "Hunches",
            abilityDescription:
                "Each time Joe spends 1 clue token, he gains a second free reroll (as though he has spent a second clue token).",
            startingItems: "Common, Clue Note",
            sanity: 4,
            stamina: 6,
            clueTokens: 0,
            elderSigns: 0,
        },
        {
            id: 14,
            name: "Harvey Walters",
            title: "The Professor",
            ability: "Strong Mind",
            abilityDescription:
                "Once per roll during his turn, Harvey may change 1 die showing a Terror result to a Lore result.",
            startingItems: "Spell, Unique",
            sanity: 7,
            stamina: 3,
            clueTokens: 0,
            elderSigns: 0,
        },
        {
            id: 15,
            name: "Mandy Thompson",
            title: "The Researcher",
            ability: "Research",
            abilityDescription:
                "Once per day, after any player has rolled, Mandy may reroll 2 dice before determining if the active player was able to complete a task.",
            startingItems: "Common, Clue Note",
            sanity: 5,
            stamina: 5,
            clueTokens: 0,
            elderSigns: 0,
        },
        {
            id: 16,
            name: '"Ashcan" Pete',
            title: "The Drifter",
            ability: "Scrounge",
            abilityDescription:
                "Each time Pete gains 1 Common, Unique, or Spell after setup, he may choose to instead gain 1 Clue Token, Common, or Spell",
            startingItems: "Ally: Duke",
            sanity: 4,
            stamina: 6,
            clueTokens: 0,
            elderSigns: 0,
        },
    ],
    SC = wC.sort((e, t) =>
        e.name.toLocaleLowerCase().localeCompare(t.name.toLowerCase())
    ),
    CC = { currentInvestigator: null, maxStamina: 0, maxSanity: 0 },
    g0 = XS({
        name: "investigators",
        initialState: CC,
        reducers: {
            selectInvestigator: (e, t) => {
                (e.currentInvestigator = t.payload),
                    (e.maxSanity = t.payload.sanity),
                    (e.maxStamina = t.payload.stamina);
            },
            updateInvestigator: (e, t) => {
                const n = SC.filter((r) => r.id === t.payload.id)[0];
                (e.currentInvestigator = t.payload),
                    (e.maxSanity = n.sanity),
                    (e.maxStamina = n.stamina);
            },
            incrementSanity: (e) => {
                e.currentInvestigator &&
                    e.currentInvestigator.sanity < e.maxSanity &&
                    (e.currentInvestigator.sanity += 1);
            },
            decrementSanity: (e) => {
                e.currentInvestigator &&
                    e.currentInvestigator.sanity > 0 &&
                    (e.currentInvestigator.sanity -= 1);
            },
            incrementStamina: (e) => {
                e.currentInvestigator &&
                    e.currentInvestigator.stamina < e.maxStamina &&
                    (e.currentInvestigator.stamina += 1);
            },
            decrementStamina: (e) => {
                e.currentInvestigator &&
                    e.currentInvestigator.stamina > 0 &&
                    (e.currentInvestigator.stamina -= 1);
            },
            incrementclueTokens: (e) => {
                e.currentInvestigator &&
                    (e.currentInvestigator.clueTokens += 1);
            },
            decrementclueTokens: (e) => {
                e.currentInvestigator &&
                    e.currentInvestigator.clueTokens > 0 &&
                    (e.currentInvestigator.clueTokens -= 1);
            },
            incrementElderSigns: (e) => {
                e.currentInvestigator &&
                    (e.currentInvestigator.elderSigns += 1);
            },
            decrementElderSigns: (e) => {
                e.currentInvestigator &&
                    e.currentInvestigator.elderSigns > 0 &&
                    (e.currentInvestigator.elderSigns -= 1);
            },
            refreshSanity: (e) => {
                e.currentInvestigator &&
                    (e.currentInvestigator.sanity = e.maxSanity);
            },
            refreshStamina: (e) => {
                e.currentInvestigator &&
                    (e.currentInvestigator.stamina = e.maxStamina);
            },
        },
    }),
    {
        selectInvestigator: am,
        updateInvestigator: kC,
        incrementSanity: EC,
        decrementSanity: RC,
        incrementStamina: PC,
        decrementStamina: $C,
        incrementclueTokens: TC,
        decrementclueTokens: IC,
        incrementElderSigns: OC,
        decrementElderSigns: MC,
        refreshSanity: mM,
        refreshStamina: gM,
    } = g0.actions,
    _C = g0.reducer,
    y0 = xC(),
    NC = y0.startListening;
NC({
    matcher: oC(am, EC, RC, PC, $C, TC, IC, OC, MC),
    effect: (e, t) => {
        const n = t.getState();
        if (e.type === am.type) {
            const r = localStorage.getItem(`investigator-${e.payload.id}`);
            r
                ? t.dispatch(kC(JSON.parse(r)))
                : localStorage.setItem(
                      `investigator-${e.payload.id}`,
                      JSON.stringify(e.payload)
                  );
        } else
            n.investigators.currentInvestigator &&
                localStorage.setItem(
                    `investigator-${n.investigators.currentInvestigator.id}`,
                    JSON.stringify(n.investigators.currentInvestigator)
                );
    },
});
const AC = KS({
    reducer: { investigators: _C },
    middleware: (e) => e().prepend(y0.middleware),
});
/**
 * @remix-run/router v1.2.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Oe() {
    return (
        (Oe = Object.assign
            ? Object.assign.bind()
            : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var n = arguments[t];
                      for (var r in n)
                          Object.prototype.hasOwnProperty.call(n, r) &&
                              (e[r] = n[r]);
                  }
                  return e;
              }),
        Oe.apply(this, arguments)
    );
}
var et;
(function (e) {
    (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(et || (et = {}));
const lm = "popstate";
function LC(e) {
    e === void 0 && (e = {});
    function t(r, o) {
        let { pathname: i, search: s, hash: a } = r.location;
        return Cs(
            "",
            { pathname: i, search: s, hash: a },
            (o.state && o.state.usr) || null,
            (o.state && o.state.key) || "default"
        );
    }
    function n(r, o) {
        return typeof o == "string" ? o : Sr(o);
    }
    return zC(t, n, null, e);
}
function de(e, t) {
    if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function DC() {
    return Math.random().toString(36).substr(2, 8);
}
function um(e) {
    return { usr: e.state, key: e.key };
}
function Cs(e, t, n, r) {
    return (
        n === void 0 && (n = null),
        Oe(
            {
                pathname: typeof e == "string" ? e : e.pathname,
                search: "",
                hash: "",
            },
            typeof t == "string" ? Yn(t) : t,
            { state: n, key: (t && t.key) || r || DC() }
        )
    );
}
function Sr(e) {
    let { pathname: t = "/", search: n = "", hash: r = "" } = e;
    return (
        n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
        r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
        t
    );
}
function Yn(e) {
    let t = {};
    if (e) {
        let n = e.indexOf("#");
        n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
        let r = e.indexOf("?");
        r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
            e && (t.pathname = e);
    }
    return t;
}
function ks(e) {
    let t =
            typeof window < "u" &&
            typeof window.location < "u" &&
            window.location.origin !== "null"
                ? window.location.origin
                : window.location.href,
        n = typeof e == "string" ? e : Sr(e);
    return (
        de(
            t,
            "No window.location.(origin|href) available to create URL for href: " +
                n
        ),
        new URL(n, t)
    );
}
function zC(e, t, n, r) {
    r === void 0 && (r = {});
    let { window: o = document.defaultView, v5Compat: i = !1 } = r,
        s = o.history,
        a = et.Pop,
        l = null;
    function u() {
        (a = et.Pop), l && l({ action: a, location: c.location });
    }
    function d(h, g) {
        a = et.Push;
        let p = Cs(c.location, h, g);
        n && n(p, h);
        let S = um(p),
            y = c.createHref(p);
        try {
            s.pushState(S, "", y);
        } catch {
            o.location.assign(y);
        }
        i && l && l({ action: a, location: c.location });
    }
    function f(h, g) {
        a = et.Replace;
        let p = Cs(c.location, h, g);
        n && n(p, h);
        let S = um(p),
            y = c.createHref(p);
        s.replaceState(S, "", y),
            i && l && l({ action: a, location: c.location });
    }
    let c = {
        get action() {
            return a;
        },
        get location() {
            return e(o, s);
        },
        listen(h) {
            if (l)
                throw new Error("A history only accepts one active listener");
            return (
                o.addEventListener(lm, u),
                (l = h),
                () => {
                    o.removeEventListener(lm, u), (l = null);
                }
            );
        },
        createHref(h) {
            return t(o, h);
        },
        encodeLocation(h) {
            let g = ks(typeof h == "string" ? h : Sr(h));
            return { pathname: g.pathname, search: g.search, hash: g.hash };
        },
        push: d,
        replace: f,
        go(h) {
            return s.go(h);
        },
    };
    return c;
}
var ht;
(function (e) {
    (e.data = "data"),
        (e.deferred = "deferred"),
        (e.redirect = "redirect"),
        (e.error = "error");
})(ht || (ht = {}));
function FC(e) {
    return e.index === !0;
}
function v0(e, t, n) {
    return (
        t === void 0 && (t = []),
        n === void 0 && (n = new Set()),
        e.map((r, o) => {
            let i = [...t, o],
                s = typeof r.id == "string" ? r.id : i.join("-");
            return (
                de(
                    r.index !== !0 || !r.children,
                    "Cannot specify children on an index route"
                ),
                de(
                    !n.has(s),
                    'Found a route id collision on id "' +
                        s +
                        `".  Route id's must be globally unique within Data Router usages`
                ),
                n.add(s),
                FC(r)
                    ? Oe({}, r, { id: s })
                    : Oe({}, r, {
                          id: s,
                          children: r.children ? v0(r.children, i, n) : void 0,
                      })
            );
        })
    );
}
function zi(e, t, n) {
    n === void 0 && (n = "/");
    let r = typeof t == "string" ? Yn(t) : t,
        o = w0(r.pathname || "/", n);
    if (o == null) return null;
    let i = b0(e);
    BC(i);
    let s = null;
    for (let a = 0; s == null && a < i.length; ++a) s = YC(i[a], JC(o));
    return s;
}
function b0(e, t, n, r) {
    t === void 0 && (t = []),
        n === void 0 && (n = []),
        r === void 0 && (r = "");
    let o = (i, s, a) => {
        let l = {
            relativePath: a === void 0 ? i.path || "" : a,
            caseSensitive: i.caseSensitive === !0,
            childrenIndex: s,
            route: i,
        };
        l.relativePath.startsWith("/") &&
            (de(
                l.relativePath.startsWith(r),
                'Absolute route path "' +
                    l.relativePath +
                    '" nested under path ' +
                    ('"' +
                        r +
                        '" is not valid. An absolute child route path ') +
                    "must start with the combined path of all its parent routes."
            ),
            (l.relativePath = l.relativePath.slice(r.length)));
        let u = yr([r, l.relativePath]),
            d = n.concat(l);
        i.children &&
            i.children.length > 0 &&
            (de(
                i.index !== !0,
                "Index routes must not have child routes. Please remove " +
                    ('all child routes from route path "' + u + '".')
            ),
            b0(i.children, t, d, u)),
            !(i.path == null && !i.index) &&
                t.push({ path: u, score: GC(u, i.index), routesMeta: d });
    };
    return (
        e.forEach((i, s) => {
            var a;
            if (i.path === "" || !((a = i.path) != null && a.includes("?")))
                o(i, s);
            else for (let l of x0(i.path)) o(i, s, l);
        }),
        t
    );
}
function x0(e) {
    let t = e.split("/");
    if (t.length === 0) return [];
    let [n, ...r] = t,
        o = n.endsWith("?"),
        i = n.replace(/\?$/, "");
    if (r.length === 0) return o ? [i, ""] : [i];
    let s = x0(r.join("/")),
        a = [];
    return (
        a.push(...s.map((l) => (l === "" ? i : [i, l].join("/")))),
        o && a.push(...s),
        a.map((l) => (e.startsWith("/") && l === "" ? "/" : l))
    );
}
function BC(e) {
    e.sort((t, n) =>
        t.score !== n.score
            ? n.score - t.score
            : qC(
                  t.routesMeta.map((r) => r.childrenIndex),
                  n.routesMeta.map((r) => r.childrenIndex)
              )
    );
}
const UC = /^:\w+$/,
    WC = 3,
    jC = 2,
    VC = 1,
    HC = 10,
    KC = -2,
    cm = (e) => e === "*";
function GC(e, t) {
    let n = e.split("/"),
        r = n.length;
    return (
        n.some(cm) && (r += KC),
        t && (r += jC),
        n
            .filter((o) => !cm(o))
            .reduce((o, i) => o + (UC.test(i) ? WC : i === "" ? VC : HC), r)
    );
}
function qC(e, t) {
    return e.length === t.length && e.slice(0, -1).every((r, o) => r === t[o])
        ? e[e.length - 1] - t[t.length - 1]
        : 0;
}
function YC(e, t) {
    let { routesMeta: n } = e,
        r = {},
        o = "/",
        i = [];
    for (let s = 0; s < n.length; ++s) {
        let a = n[s],
            l = s === n.length - 1,
            u = o === "/" ? t : t.slice(o.length) || "/",
            d = XC(
                {
                    path: a.relativePath,
                    caseSensitive: a.caseSensitive,
                    end: l,
                },
                u
            );
        if (!d) return null;
        Object.assign(r, d.params);
        let f = a.route;
        i.push({
            params: r,
            pathname: yr([o, d.pathname]),
            pathnameBase: nk(yr([o, d.pathnameBase])),
            route: f,
        }),
            d.pathnameBase !== "/" && (o = yr([o, d.pathnameBase]));
    }
    return i;
}
function XC(e, t) {
    typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
    let [n, r] = QC(e.path, e.caseSensitive, e.end),
        o = t.match(n);
    if (!o) return null;
    let i = o[0],
        s = i.replace(/(.)\/+$/, "$1"),
        a = o.slice(1);
    return {
        params: r.reduce((u, d, f) => {
            if (d === "*") {
                let c = a[f] || "";
                s = i.slice(0, i.length - c.length).replace(/(.)\/+$/, "$1");
            }
            return (u[d] = ZC(a[f] || "", d)), u;
        }, {}),
        pathname: i,
        pathnameBase: s,
        pattern: e,
    };
}
function QC(e, t, n) {
    t === void 0 && (t = !1),
        n === void 0 && (n = !0),
        Qf(
            e === "*" || !e.endsWith("*") || e.endsWith("/*"),
            'Route path "' +
                e +
                '" will be treated as if it were ' +
                ('"' +
                    e.replace(/\*$/, "/*") +
                    '" because the `*` character must ') +
                "always follow a `/` in the pattern. To get rid of this warning, " +
                ('please change the route path to "' +
                    e.replace(/\*$/, "/*") +
                    '".')
        );
    let r = [],
        o =
            "^" +
            e
                .replace(/\/*\*?$/, "")
                .replace(/^\/*/, "/")
                .replace(/[\\.*+^$?{}|()[\]]/g, "\\$&")
                .replace(/\/:(\w+)/g, (s, a) => (r.push(a), "/([^\\/]+)"));
    return (
        e.endsWith("*")
            ? (r.push("*"),
              (o += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
            : n
            ? (o += "\\/*$")
            : e !== "" && e !== "/" && (o += "(?:(?=\\/|$))"),
        [new RegExp(o, t ? void 0 : "i"), r]
    );
}
function JC(e) {
    try {
        return decodeURI(e);
    } catch (t) {
        return (
            Qf(
                !1,
                'The URL path "' +
                    e +
                    '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
                    ("encoding (" + t + ").")
            ),
            e
        );
    }
}
function ZC(e, t) {
    try {
        return decodeURIComponent(e);
    } catch (n) {
        return (
            Qf(
                !1,
                'The value for the URL param "' +
                    t +
                    '" will not be decoded because' +
                    (' the string "' +
                        e +
                        '" is a malformed URL segment. This is probably') +
                    (" due to a bad percent encoding (" + n + ").")
            ),
            e
        );
    }
}
function w0(e, t) {
    if (t === "/") return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
    let n = t.endsWith("/") ? t.length - 1 : t.length,
        r = e.charAt(n);
    return r && r !== "/" ? null : e.slice(n) || "/";
}
function Qf(e, t) {
    if (!e) {
        typeof console < "u" && console.warn(t);
        try {
            throw new Error(t);
        } catch {}
    }
}
function ek(e, t) {
    t === void 0 && (t = "/");
    let {
        pathname: n,
        search: r = "",
        hash: o = "",
    } = typeof e == "string" ? Yn(e) : e;
    return {
        pathname: n ? (n.startsWith("/") ? n : tk(n, t)) : t,
        search: rk(r),
        hash: ok(o),
    };
}
function tk(e, t) {
    let n = t.replace(/\/+$/, "").split("/");
    return (
        e.split("/").forEach((o) => {
            o === ".." ? n.length > 1 && n.pop() : o !== "." && n.push(o);
        }),
        n.length > 1 ? n.join("/") : "/"
    );
}
function ac(e, t, n, r) {
    return (
        "Cannot include a '" +
        e +
        "' character in a manually specified " +
        ("`to." +
            t +
            "` field [" +
            JSON.stringify(r) +
            "].  Please separate it out to the ") +
        ("`to." +
            n +
            "` field. Alternatively you may provide the full path as ") +
        'a string in <Link to="..."> and the router will parse it for you.'
    );
}
function Jf(e) {
    return e.filter(
        (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
    );
}
function S0(e, t, n, r) {
    r === void 0 && (r = !1);
    let o;
    typeof e == "string"
        ? (o = Yn(e))
        : ((o = Oe({}, e)),
          de(
              !o.pathname || !o.pathname.includes("?"),
              ac("?", "pathname", "search", o)
          ),
          de(
              !o.pathname || !o.pathname.includes("#"),
              ac("#", "pathname", "hash", o)
          ),
          de(
              !o.search || !o.search.includes("#"),
              ac("#", "search", "hash", o)
          ));
    let i = e === "" || o.pathname === "",
        s = i ? "/" : o.pathname,
        a;
    if (r || s == null) a = n;
    else {
        let f = t.length - 1;
        if (s.startsWith("..")) {
            let c = s.split("/");
            for (; c[0] === ".."; ) c.shift(), (f -= 1);
            o.pathname = c.join("/");
        }
        a = f >= 0 ? t[f] : "/";
    }
    let l = ek(o, a),
        u = s && s !== "/" && s.endsWith("/"),
        d = (i || s === ".") && n.endsWith("/");
    return !l.pathname.endsWith("/") && (u || d) && (l.pathname += "/"), l;
}
const yr = (e) => e.join("/").replace(/\/\/+/g, "/"),
    nk = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
    rk = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
    ok = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
class dm extends Error {}
class ik {
    constructor(t) {
        (this.pendingKeys = new Set()),
            (this.subscriber = void 0),
            de(
                t && typeof t == "object" && !Array.isArray(t),
                "defer() only accepts plain objects"
            );
        let n;
        (this.abortPromise = new Promise((o, i) => (n = i))),
            (this.controller = new AbortController());
        let r = () => n(new dm("Deferred data aborted"));
        (this.unlistenAbortSignal = () =>
            this.controller.signal.removeEventListener("abort", r)),
            this.controller.signal.addEventListener("abort", r),
            (this.data = Object.entries(t).reduce((o, i) => {
                let [s, a] = i;
                return Object.assign(o, { [s]: this.trackPromise(s, a) });
            }, {}));
    }
    trackPromise(t, n) {
        if (!(n instanceof Promise)) return n;
        this.pendingKeys.add(t);
        let r = Promise.race([n, this.abortPromise]).then(
            (o) => this.onSettle(r, t, null, o),
            (o) => this.onSettle(r, t, o)
        );
        return (
            r.catch(() => {}),
            Object.defineProperty(r, "_tracked", { get: () => !0 }),
            r
        );
    }
    onSettle(t, n, r, o) {
        if (this.controller.signal.aborted && r instanceof dm)
            return (
                this.unlistenAbortSignal(),
                Object.defineProperty(t, "_error", { get: () => r }),
                Promise.reject(r)
            );
        this.pendingKeys.delete(n), this.done && this.unlistenAbortSignal();
        const i = this.subscriber;
        return r
            ? (Object.defineProperty(t, "_error", { get: () => r }),
              i && i(!1),
              Promise.reject(r))
            : (Object.defineProperty(t, "_data", { get: () => o }),
              i && i(!1),
              o);
    }
    subscribe(t) {
        this.subscriber = t;
    }
    cancel() {
        this.controller.abort(),
            this.pendingKeys.forEach((n, r) => this.pendingKeys.delete(r));
        let t = this.subscriber;
        t && t(!0);
    }
    async resolveData(t) {
        let n = !1;
        if (!this.done) {
            let r = () => this.cancel();
            t.addEventListener("abort", r),
                (n = await new Promise((o) => {
                    this.subscribe((i) => {
                        t.removeEventListener("abort", r),
                            (i || this.done) && o(i);
                    });
                }));
        }
        return n;
    }
    get done() {
        return this.pendingKeys.size === 0;
    }
    get unwrappedData() {
        return (
            de(
                this.data !== null && this.done,
                "Can only unwrap data on initialized and settled deferreds"
            ),
            Object.entries(this.data).reduce((t, n) => {
                let [r, o] = n;
                return Object.assign(t, { [r]: ak(o) });
            }, {})
        );
    }
}
function sk(e) {
    return e instanceof Promise && e._tracked === !0;
}
function ak(e) {
    if (!sk(e)) return e;
    if (e._error) throw e._error;
    return e._data;
}
class tu {
    constructor(t, n, r, o) {
        o === void 0 && (o = !1),
            (this.status = t),
            (this.statusText = n || ""),
            (this.internal = o),
            r instanceof Error
                ? ((this.data = r.toString()), (this.error = r))
                : (this.data = r);
    }
}
function C0(e) {
    return e instanceof tu;
}
const k0 = ["post", "put", "patch", "delete"],
    lk = new Set(k0),
    uk = ["get", ...k0],
    ck = new Set(uk),
    dk = new Set([301, 302, 303, 307, 308]),
    fk = new Set([307, 308]),
    lc = {
        state: "idle",
        location: void 0,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
    },
    pk = {
        state: "idle",
        data: void 0,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
    },
    hk =
        typeof window < "u" &&
        typeof window.document < "u" &&
        typeof window.document.createElement < "u",
    mk = !hk;
function gk(e) {
    de(
        e.routes.length > 0,
        "You must provide a non-empty routes array to createRouter"
    );
    let t = v0(e.routes),
        n = null,
        r = new Set(),
        o = null,
        i = null,
        s = null,
        a = e.hydrationData != null,
        l = zi(t, e.history.location, e.basename),
        u = null;
    if (l == null) {
        let O = Dr(404, { pathname: e.history.location.pathname }),
            { matches: A, route: B } = ym(t);
        (l = A), (u = { [B.id]: O });
    }
    let d = !l.some((O) => O.route.loader) || e.hydrationData != null,
        f,
        c = {
            historyAction: e.history.action,
            location: e.history.location,
            matches: l,
            initialized: d,
            navigation: lc,
            restoreScrollPosition: e.hydrationData != null ? !1 : null,
            preventScrollReset: !1,
            revalidation: "idle",
            loaderData: (e.hydrationData && e.hydrationData.loaderData) || {},
            actionData: (e.hydrationData && e.hydrationData.actionData) || null,
            errors: (e.hydrationData && e.hydrationData.errors) || u,
            fetchers: new Map(),
        },
        h = et.Pop,
        g = !1,
        p,
        S = !1,
        y = !1,
        m = [],
        v = [],
        x = new Map(),
        k = 0,
        R = -1,
        C = new Map(),
        T = new Set(),
        I = new Map(),
        P = new Map();
    function D() {
        return (
            (n = e.history.listen((O) => {
                let { action: A, location: B } = O;
                return $(A, B);
            })),
            c.initialized || $(et.Pop, c.location),
            f
        );
    }
    function K() {
        n && n(),
            r.clear(),
            p && p.abort(),
            c.fetchers.forEach((O, A) => be(A));
    }
    function j(O) {
        return r.add(O), () => r.delete(O);
    }
    function N(O) {
        (c = Oe({}, c, O)), r.forEach((A) => A(c));
    }
    function z(O, A) {
        var B;
        let Y =
                c.actionData != null &&
                c.navigation.formMethod != null &&
                zr(c.navigation.formMethod) &&
                c.navigation.state === "loading" &&
                ((B = O.state) == null ? void 0 : B._isRedirect) !== !0,
            G;
        A.actionData
            ? Object.keys(A.actionData).length > 0
                ? (G = A.actionData)
                : (G = null)
            : Y
            ? (G = c.actionData)
            : (G = null);
        let ie = A.loaderData
            ? gm(c.loaderData, A.loaderData, A.matches || [], A.errors)
            : c.loaderData;
        N(
            Oe({}, A, {
                actionData: G,
                loaderData: ie,
                historyAction: h,
                location: O,
                initialized: !0,
                navigation: lc,
                revalidation: "idle",
                restoreScrollPosition: c.navigation.formData
                    ? !1
                    : zt(O, A.matches || c.matches),
                preventScrollReset: g,
            })
        ),
            S ||
                h === et.Pop ||
                (h === et.Push
                    ? e.history.push(O, O.state)
                    : h === et.Replace && e.history.replace(O, O.state)),
            (h = et.Pop),
            (g = !1),
            (S = !1),
            (y = !1),
            (m = []),
            (v = []);
    }
    async function U(O, A) {
        if (typeof O == "number") {
            e.history.go(O);
            return;
        }
        let { path: B, submission: Y, error: G } = fm(O, A),
            ie = Cs(c.location, B, A && A.state);
        ie = Oe({}, ie, e.history.encodeLocation(ie));
        let oe = A && A.replace != null ? A.replace : void 0,
            ae = et.Push;
        oe === !0
            ? (ae = et.Replace)
            : oe === !1 ||
              (Y != null &&
                  zr(Y.formMethod) &&
                  Y.formAction === c.location.pathname + c.location.search &&
                  (ae = et.Replace));
        let re =
            A && "preventScrollReset" in A
                ? A.preventScrollReset === !0
                : void 0;
        return await $(ae, ie, {
            submission: Y,
            pendingError: G,
            preventScrollReset: re,
            replace: A && A.replace,
        });
    }
    function Z() {
        if (
            (he(),
            N({ revalidation: "loading" }),
            c.navigation.state !== "submitting")
        ) {
            if (c.navigation.state === "idle") {
                $(c.historyAction, c.location, {
                    startUninterruptedRevalidation: !0,
                });
                return;
            }
            $(h || c.historyAction, c.navigation.location, {
                overrideNavigation: c.navigation,
            });
        }
    }
    async function $(O, A, B) {
        p && p.abort(),
            (p = null),
            (h = O),
            (S = (B && B.startUninterruptedRevalidation) === !0),
            an(c.location, c.matches),
            (g = (B && B.preventScrollReset) === !0);
        let Y = B && B.overrideNavigation,
            G = zi(t, A, e.basename);
        if (!G) {
            let M = Dr(404, { pathname: A.pathname }),
                { matches: me, route: Ce } = ym(t);
            $t(), z(A, { matches: me, loaderData: {}, errors: { [Ce.id]: M } });
            return;
        }
        if (wk(c.location, A)) {
            z(A, { matches: G });
            return;
        }
        p = new AbortController();
        let ie = Ei(A, p.signal, B && B.submission),
            oe,
            ae;
        if (B && B.pendingError) ae = { [Oo(G).route.id]: B.pendingError };
        else if (B && B.submission && zr(B.submission.formMethod)) {
            let M = await _(ie, A, B.submission, G, { replace: B.replace });
            if (M.shortCircuited) return;
            (oe = M.pendingActionData),
                (ae = M.pendingActionError),
                (Y = Oe({ state: "loading", location: A }, B.submission)),
                (ie = new Request(ie.url, { signal: ie.signal }));
        }
        let {
            shortCircuited: re,
            loaderData: Ie,
            errors: ee,
        } = await L(ie, A, G, Y, B && B.submission, B && B.replace, oe, ae);
        re ||
            ((p = null),
            z(
                A,
                Oe({ matches: G }, oe ? { actionData: oe } : {}, {
                    loaderData: Ie,
                    errors: ee,
                })
            ));
    }
    async function _(O, A, B, Y, G) {
        he();
        let ie = Oe({ state: "submitting", location: A }, B);
        N({ navigation: ie });
        let oe,
            ae = wm(Y, A);
        if (!ae.route.action)
            oe = {
                type: ht.error,
                error: Dr(405, {
                    method: O.method,
                    pathname: A.pathname,
                    routeId: ae.route.id,
                }),
            };
        else if (
            ((oe = await ki("action", O, ae, Y, f.basename)), O.signal.aborted)
        )
            return { shortCircuited: !0 };
        if (Vo(oe)) {
            let re;
            return (
                G && G.replace != null
                    ? (re = G.replace)
                    : (re =
                          oe.location ===
                          c.location.pathname + c.location.search),
                await ve(c, oe, { submission: B, replace: re }),
                { shortCircuited: !0 }
            );
        }
        if (Xi(oe)) {
            let re = Oo(Y, ae.route.id);
            return (
                (G && G.replace) !== !0 && (h = et.Push),
                {
                    pendingActionData: {},
                    pendingActionError: { [re.route.id]: oe.error },
                }
            );
        }
        if (Vr(oe)) throw new Error("defer() is not supported in actions");
        return { pendingActionData: { [ae.route.id]: oe.data } };
    }
    async function L(O, A, B, Y, G, ie, oe, ae) {
        let re = Y;
        re ||
            (re = Oe(
                {
                    state: "loading",
                    location: A,
                    formMethod: void 0,
                    formAction: void 0,
                    formEncType: void 0,
                    formData: void 0,
                },
                G
            ));
        let Ie =
                G ||
                (re.formMethod && re.formAction && re.formData && re.formEncType
                    ? {
                          formMethod: re.formMethod,
                          formAction: re.formAction,
                          formData: re.formData,
                          formEncType: re.formEncType,
                      }
                    : void 0),
            [ee, M] = pm(c, B, Ie, A, y, m, v, oe, ae, I);
        if (
            ($t(
                (at) =>
                    !(B && B.some((Xe) => Xe.route.id === at)) ||
                    (ee && ee.some((Xe) => Xe.route.id === at))
            ),
            ee.length === 0 && M.length === 0)
        )
            return (
                z(
                    A,
                    Oe(
                        { matches: B, loaderData: {}, errors: ae || null },
                        oe ? { actionData: oe } : {}
                    )
                ),
                { shortCircuited: !0 }
            );
        if (!S) {
            M.forEach((Xe) => {
                let [un] = Xe,
                    Qn = c.fetchers.get(un),
                    mi = {
                        state: "loading",
                        data: Qn && Qn.data,
                        formMethod: void 0,
                        formAction: void 0,
                        formEncType: void 0,
                        formData: void 0,
                        " _hasFetcherDoneAnything ": !0,
                    };
                c.fetchers.set(un, mi);
            });
            let at = oe || c.actionData;
            N(
                Oe(
                    { navigation: re },
                    at
                        ? Object.keys(at).length === 0
                            ? { actionData: null }
                            : { actionData: at }
                        : {},
                    M.length > 0 ? { fetchers: new Map(c.fetchers) } : {}
                )
            );
        }
        (R = ++k),
            M.forEach((at) => {
                let [Xe] = at;
                return x.set(Xe, p);
            });
        let {
            results: me,
            loaderResults: Ce,
            fetcherResults: Ze,
        } = await q(c.matches, B, ee, M, O);
        if (O.signal.aborted) return { shortCircuited: !0 };
        M.forEach((at) => {
            let [Xe] = at;
            return x.delete(Xe);
        });
        let ln = vm(me);
        if (ln) return await ve(c, ln, { replace: ie }), { shortCircuited: !0 };
        let { loaderData: $r, errors: Mn } = mm(c, B, ee, Ce, ae, M, Ze, P);
        P.forEach((at, Xe) => {
            at.subscribe((un) => {
                (un || at.done) && P.delete(Xe);
            });
        }),
            Je();
        let Xt = dt(R);
        return Oe(
            { loaderData: $r, errors: Mn },
            Xt || M.length > 0 ? { fetchers: new Map(c.fetchers) } : {}
        );
    }
    function V(O) {
        return c.fetchers.get(O) || pk;
    }
    function ne(O, A, B, Y) {
        if (mk)
            throw new Error(
                "router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback."
            );
        x.has(O) && Ae(O);
        let G = zi(t, B, e.basename);
        if (!G) {
            Te(O, A, Dr(404, { pathname: B }));
            return;
        }
        let { path: ie, submission: oe } = fm(B, Y, !0),
            ae = wm(G, ie);
        if (oe && zr(oe.formMethod)) {
            _e(O, A, ie, ae, G, oe);
            return;
        }
        I.set(O, [ie, ae, G]), se(O, A, ie, ae, G, oe);
    }
    async function _e(O, A, B, Y, G, ie) {
        if ((he(), I.delete(O), !Y.route.action)) {
            let _n = Dr(405, {
                method: ie.formMethod,
                pathname: B,
                routeId: A,
            });
            Te(O, A, _n);
            return;
        }
        let oe = c.fetchers.get(O),
            ae = Oe({ state: "submitting" }, ie, {
                data: oe && oe.data,
                " _hasFetcherDoneAnything ": !0,
            });
        c.fetchers.set(O, ae), N({ fetchers: new Map(c.fetchers) });
        let re = new AbortController(),
            Ie = Ei(B, re.signal, ie);
        x.set(O, re);
        let ee = await ki("action", Ie, Y, G, f.basename);
        if (Ie.signal.aborted) {
            x.get(O) === re && x.delete(O);
            return;
        }
        if (Vo(ee)) {
            x.delete(O), T.add(O);
            let _n = Oe({ state: "loading" }, ie, {
                data: void 0,
                " _hasFetcherDoneAnything ": !0,
            });
            return (
                c.fetchers.set(O, _n),
                N({ fetchers: new Map(c.fetchers) }),
                ve(c, ee, { isFetchActionRedirect: !0 })
            );
        }
        if (Xi(ee)) {
            Te(O, A, ee.error);
            return;
        }
        Vr(ee) && de(!1, "defer() is not supported in actions");
        let M = c.navigation.location || c.location,
            me = Ei(M, re.signal),
            Ce =
                c.navigation.state !== "idle"
                    ? zi(t, c.navigation.location, e.basename)
                    : c.matches;
        de(Ce, "Didn't find any matches after fetcher action");
        let Ze = ++k;
        C.set(O, Ze);
        let ln = Oe({ state: "loading", data: ee.data }, ie, {
            " _hasFetcherDoneAnything ": !0,
        });
        c.fetchers.set(O, ln);
        let [$r, Mn] = pm(
            c,
            Ce,
            ie,
            M,
            y,
            m,
            v,
            { [Y.route.id]: ee.data },
            void 0,
            I
        );
        Mn.filter((_n) => {
            let [Tr] = _n;
            return Tr !== O;
        }).forEach((_n) => {
            let [Tr] = _n,
                Op = c.fetchers.get(Tr),
                tb = {
                    state: "loading",
                    data: Op && Op.data,
                    formMethod: void 0,
                    formAction: void 0,
                    formEncType: void 0,
                    formData: void 0,
                    " _hasFetcherDoneAnything ": !0,
                };
            c.fetchers.set(Tr, tb), x.set(Tr, re);
        }),
            N({ fetchers: new Map(c.fetchers) });
        let {
            results: Xt,
            loaderResults: at,
            fetcherResults: Xe,
        } = await q(c.matches, Ce, $r, Mn, me);
        if (re.signal.aborted) return;
        C.delete(O),
            x.delete(O),
            Mn.forEach((_n) => {
                let [Tr] = _n;
                return x.delete(Tr);
            });
        let un = vm(Xt);
        if (un) return ve(c, un);
        let { loaderData: Qn, errors: mi } = mm(
                c,
                c.matches,
                $r,
                at,
                void 0,
                Mn,
                Xe,
                P
            ),
            Z1 = {
                state: "idle",
                data: ee.data,
                formMethod: void 0,
                formAction: void 0,
                formEncType: void 0,
                formData: void 0,
                " _hasFetcherDoneAnything ": !0,
            };
        c.fetchers.set(O, Z1);
        let eb = dt(Ze);
        c.navigation.state === "loading" && Ze > R
            ? (de(h, "Expected pending action"),
              p && p.abort(),
              z(c.navigation.location, {
                  matches: Ce,
                  loaderData: Qn,
                  errors: mi,
                  fetchers: new Map(c.fetchers),
              }))
            : (N(
                  Oe(
                      { errors: mi, loaderData: gm(c.loaderData, Qn, Ce, mi) },
                      eb ? { fetchers: new Map(c.fetchers) } : {}
                  )
              ),
              (y = !1));
    }
    async function se(O, A, B, Y, G, ie) {
        let oe = c.fetchers.get(O),
            ae = Oe(
                {
                    state: "loading",
                    formMethod: void 0,
                    formAction: void 0,
                    formEncType: void 0,
                    formData: void 0,
                },
                ie,
                { data: oe && oe.data, " _hasFetcherDoneAnything ": !0 }
            );
        c.fetchers.set(O, ae), N({ fetchers: new Map(c.fetchers) });
        let re = new AbortController(),
            Ie = Ei(B, re.signal);
        x.set(O, re);
        let ee = await ki("loader", Ie, Y, G, f.basename);
        if (
            (Vr(ee) && (ee = (await $0(ee, Ie.signal, !0)) || ee),
            x.get(O) === re && x.delete(O),
            Ie.signal.aborted)
        )
            return;
        if (Vo(ee)) {
            await ve(c, ee);
            return;
        }
        if (Xi(ee)) {
            let me = Oo(c.matches, A);
            c.fetchers.delete(O),
                N({
                    fetchers: new Map(c.fetchers),
                    errors: { [me.route.id]: ee.error },
                });
            return;
        }
        de(!Vr(ee), "Unhandled fetcher deferred data");
        let M = {
            state: "idle",
            data: ee.data,
            formMethod: void 0,
            formAction: void 0,
            formEncType: void 0,
            formData: void 0,
            " _hasFetcherDoneAnything ": !0,
        };
        c.fetchers.set(O, M), N({ fetchers: new Map(c.fetchers) });
    }
    async function ve(O, A, B) {
        var Y;
        let {
            submission: G,
            replace: ie,
            isFetchActionRedirect: oe,
        } = B === void 0 ? {} : B;
        A.revalidate && (y = !0);
        let ae = Cs(
            O.location,
            A.location,
            Oe({ _isRedirect: !0 }, oe ? { _isFetchActionRedirect: !0 } : {})
        );
        if (
            (de(ae, "Expected a location on the redirect navigation"),
            typeof ((Y = window) == null ? void 0 : Y.location) < "u")
        ) {
            let Ce = ks(A.location).origin;
            if (window.location.origin !== Ce) {
                ie
                    ? window.location.replace(A.location)
                    : window.location.assign(A.location);
                return;
            }
        }
        p = null;
        let re = ie === !0 ? et.Replace : et.Push,
            {
                formMethod: Ie,
                formAction: ee,
                formEncType: M,
                formData: me,
            } = O.navigation;
        !G &&
            Ie &&
            ee &&
            me &&
            M &&
            (G = {
                formMethod: Ie,
                formAction: ee,
                formEncType: M,
                formData: me,
            }),
            fk.has(A.status) && G && zr(G.formMethod)
                ? await $(re, ae, {
                      submission: Oe({}, G, { formAction: A.location }),
                  })
                : await $(re, ae, {
                      overrideNavigation: {
                          state: "loading",
                          location: ae,
                          formMethod: G ? G.formMethod : void 0,
                          formAction: G ? G.formAction : void 0,
                          formEncType: G ? G.formEncType : void 0,
                          formData: G ? G.formData : void 0,
                      },
                  });
    }
    async function q(O, A, B, Y, G) {
        let ie = await Promise.all([
                ...B.map((re) => ki("loader", G, re, A, f.basename)),
                ...Y.map((re) => {
                    let [, Ie, ee, M] = re;
                    return ki("loader", Ei(Ie, G.signal), ee, M, f.basename);
                }),
            ]),
            oe = ie.slice(0, B.length),
            ae = ie.slice(B.length);
        return (
            await Promise.all([
                bm(O, B, oe, G.signal, !1, c.loaderData),
                bm(
                    O,
                    Y.map((re) => {
                        let [, , Ie] = re;
                        return Ie;
                    }),
                    ae,
                    G.signal,
                    !0
                ),
            ]),
            { results: ie, loaderResults: oe, fetcherResults: ae }
        );
    }
    function he() {
        (y = !0),
            m.push(...$t()),
            I.forEach((O, A) => {
                x.has(A) && (v.push(A), Ae(A));
            });
    }
    function Te(O, A, B) {
        let Y = Oo(c.matches, A);
        be(O),
            N({ errors: { [Y.route.id]: B }, fetchers: new Map(c.fetchers) });
    }
    function be(O) {
        x.has(O) && Ae(O),
            I.delete(O),
            C.delete(O),
            T.delete(O),
            c.fetchers.delete(O);
    }
    function Ae(O) {
        let A = x.get(O);
        de(A, "Expected fetch controller: " + O), A.abort(), x.delete(O);
    }
    function le(O) {
        for (let A of O) {
            let Y = {
                state: "idle",
                data: V(A).data,
                formMethod: void 0,
                formAction: void 0,
                formEncType: void 0,
                formData: void 0,
                " _hasFetcherDoneAnything ": !0,
            };
            c.fetchers.set(A, Y);
        }
    }
    function Je() {
        let O = [];
        for (let A of T) {
            let B = c.fetchers.get(A);
            de(B, "Expected fetcher: " + A),
                B.state === "loading" && (T.delete(A), O.push(A));
        }
        le(O);
    }
    function dt(O) {
        let A = [];
        for (let [B, Y] of C)
            if (Y < O) {
                let G = c.fetchers.get(B);
                de(G, "Expected fetcher: " + B),
                    G.state === "loading" && (Ae(B), C.delete(B), A.push(B));
            }
        return le(A), A.length > 0;
    }
    function $t(O) {
        let A = [];
        return (
            P.forEach((B, Y) => {
                (!O || O(Y)) && (B.cancel(), A.push(Y), P.delete(Y));
            }),
            A
        );
    }
    function Dt(O, A, B) {
        if (
            ((o = O),
            (s = A),
            (i = B || ((Y) => Y.key)),
            !a && c.navigation === lc)
        ) {
            a = !0;
            let Y = zt(c.location, c.matches);
            Y != null && N({ restoreScrollPosition: Y });
        }
        return () => {
            (o = null), (s = null), (i = null);
        };
    }
    function an(O, A) {
        if (o && i && s) {
            let B = A.map((G) => xm(G, c.loaderData)),
                Y = i(O, B) || O.key;
            o[Y] = s();
        }
    }
    function zt(O, A) {
        if (o && i && s) {
            let B = A.map((ie) => xm(ie, c.loaderData)),
                Y = i(O, B) || O.key,
                G = o[Y];
            if (typeof G == "number") return G;
        }
        return null;
    }
    return (
        (f = {
            get basename() {
                return e.basename;
            },
            get state() {
                return c;
            },
            get routes() {
                return t;
            },
            initialize: D,
            subscribe: j,
            enableScrollRestoration: Dt,
            navigate: U,
            fetch: ne,
            revalidate: Z,
            createHref: (O) => e.history.createHref(O),
            encodeLocation: (O) => e.history.encodeLocation(O),
            getFetcher: V,
            deleteFetcher: be,
            dispose: K,
            _internalFetchControllers: x,
            _internalActiveDeferreds: P,
        }),
        f
    );
}
function yk(e) {
    return e != null && "formData" in e;
}
function fm(e, t, n) {
    n === void 0 && (n = !1);
    let r = typeof e == "string" ? e : Sr(e);
    if (!t || !yk(t)) return { path: r };
    if (t.formMethod && !Ck(t.formMethod))
        return { path: r, error: Dr(405, { method: t.formMethod }) };
    let o;
    if (
        t.formData &&
        ((o = {
            formMethod: t.formMethod || "get",
            formAction: P0(r),
            formEncType:
                (t && t.formEncType) || "application/x-www-form-urlencoded",
            formData: t.formData,
        }),
        zr(o.formMethod))
    )
        return { path: r, submission: o };
    let i = Yn(r);
    try {
        let s = R0(t.formData);
        n && i.search && T0(i.search) && s.append("index", ""),
            (i.search = "?" + s);
    } catch {
        return { path: r, error: Dr(400) };
    }
    return { path: Sr(i), submission: o };
}
function vk(e, t) {
    let n = e;
    if (t) {
        let r = e.findIndex((o) => o.route.id === t);
        r >= 0 && (n = e.slice(0, r));
    }
    return n;
}
function pm(e, t, n, r, o, i, s, a, l, u) {
    let d = l ? Object.values(l)[0] : a ? Object.values(a)[0] : void 0,
        f = l ? Object.keys(l)[0] : void 0,
        h = vk(t, f).filter(
            (p, S) =>
                p.route.loader != null &&
                (bk(e.loaderData, e.matches[S], p) ||
                    i.some((y) => y === p.route.id) ||
                    hm(e.location, e.matches[S], n, r, p, o, d))
        ),
        g = [];
    return (
        u &&
            u.forEach((p, S) => {
                let [y, m, v] = p;
                s.includes(S)
                    ? g.push([S, y, m, v])
                    : o && hm(y, m, n, y, m, o, d) && g.push([S, y, m, v]);
            }),
        [h, g]
    );
}
function bk(e, t, n) {
    let r = !t || n.route.id !== t.route.id,
        o = e[n.route.id] === void 0;
    return r || o;
}
function E0(e, t) {
    let n = e.route.path;
    return (
        e.pathname !== t.pathname ||
        (n && n.endsWith("*") && e.params["*"] !== t.params["*"])
    );
}
function hm(e, t, n, r, o, i, s) {
    let a = ks(e),
        l = t.params,
        u = ks(r),
        d = o.params,
        f =
            E0(t, o) ||
            a.toString() === u.toString() ||
            a.search !== u.search ||
            i;
    if (o.route.shouldRevalidate) {
        let c = o.route.shouldRevalidate(
            Oe(
                { currentUrl: a, currentParams: l, nextUrl: u, nextParams: d },
                n,
                { actionResult: s, defaultShouldRevalidate: f }
            )
        );
        if (typeof c == "boolean") return c;
    }
    return f;
}
async function ki(e, t, n, r, o, i, s, a) {
    o === void 0 && (o = "/"),
        i === void 0 && (i = !1),
        s === void 0 && (s = !1);
    let l,
        u,
        d,
        f = new Promise((h, g) => (d = g)),
        c = () => d();
    t.signal.addEventListener("abort", c);
    try {
        let h = n.route[e];
        de(
            h,
            "Could not find the " +
                e +
                ' to run on the "' +
                n.route.id +
                '" route'
        ),
            (u = await Promise.race([
                h({ request: t, params: n.params, context: a }),
                f,
            ])),
            de(
                u !== void 0,
                "You defined " +
                    (e === "action" ? "an action" : "a loader") +
                    " for route " +
                    ('"' +
                        n.route.id +
                        "\" but didn't return anything from your `" +
                        e +
                        "` ") +
                    "function. Please return a value or `null`."
            );
    } catch (h) {
        (l = ht.error), (u = h);
    } finally {
        t.signal.removeEventListener("abort", c);
    }
    if (Sk(u)) {
        let h = u.status;
        if (dk.has(h)) {
            let S = u.headers.get("Location");
            if (
                (de(
                    S,
                    "Redirects returned/thrown from loaders/actions must have a Location header"
                ),
                !(/^[a-z+]+:\/\//i.test(S) || S.startsWith("//")))
            ) {
                let m = r.slice(0, r.indexOf(n) + 1),
                    v = Jf(m).map((k) => k.pathnameBase),
                    x = S0(S, v, new URL(t.url).pathname);
                if (
                    (de(Sr(x), "Unable to resolve redirect location: " + S), o)
                ) {
                    let k = x.pathname;
                    x.pathname = k === "/" ? o : yr([o, k]);
                }
                S = Sr(x);
            }
            if (i) throw (u.headers.set("Location", S), u);
            return {
                type: ht.redirect,
                status: h,
                location: S,
                revalidate: u.headers.get("X-Remix-Revalidate") !== null,
            };
        }
        if (s) throw { type: l || ht.data, response: u };
        let g,
            p = u.headers.get("Content-Type");
        return (
            p && /\bapplication\/json\b/.test(p)
                ? (g = await u.json())
                : (g = await u.text()),
            l === ht.error
                ? {
                      type: l,
                      error: new tu(h, u.statusText, g),
                      headers: u.headers,
                  }
                : {
                      type: ht.data,
                      data: g,
                      statusCode: u.status,
                      headers: u.headers,
                  }
        );
    }
    return l === ht.error
        ? { type: l, error: u }
        : u instanceof ik
        ? { type: ht.deferred, deferredData: u }
        : { type: ht.data, data: u };
}
function Ei(e, t, n) {
    let r = ks(P0(e)).toString(),
        o = { signal: t };
    if (n && zr(n.formMethod)) {
        let { formMethod: i, formEncType: s, formData: a } = n;
        (o.method = i.toUpperCase()),
            (o.body = s === "application/x-www-form-urlencoded" ? R0(a) : a);
    }
    return new Request(r, o);
}
function R0(e) {
    let t = new URLSearchParams();
    for (let [n, r] of e.entries())
        de(
            typeof r == "string",
            'File inputs are not supported with encType "application/x-www-form-urlencoded", please use "multipart/form-data" instead.'
        ),
            t.append(n, r);
    return t;
}
function xk(e, t, n, r, o) {
    let i = {},
        s = null,
        a,
        l = !1,
        u = {};
    return (
        n.forEach((d, f) => {
            let c = t[f].route.id;
            if (
                (de(
                    !Vo(d),
                    "Cannot handle redirect results in processLoaderData"
                ),
                Xi(d))
            ) {
                let h = Oo(e, c),
                    g = d.error;
                r && ((g = Object.values(r)[0]), (r = void 0)),
                    (s = s || {}),
                    s[h.route.id] == null && (s[h.route.id] = g),
                    (i[c] = void 0),
                    l || ((l = !0), (a = C0(d.error) ? d.error.status : 500)),
                    d.headers && (u[c] = d.headers);
            } else
                Vr(d)
                    ? (o && o.set(c, d.deferredData),
                      (i[c] = d.deferredData.data))
                    : ((i[c] = d.data),
                      d.statusCode != null &&
                          d.statusCode !== 200 &&
                          !l &&
                          (a = d.statusCode),
                      d.headers && (u[c] = d.headers));
        }),
        r && ((s = r), (i[Object.keys(r)[0]] = void 0)),
        { loaderData: i, errors: s, statusCode: a || 200, loaderHeaders: u }
    );
}
function mm(e, t, n, r, o, i, s, a) {
    let { loaderData: l, errors: u } = xk(t, n, r, o, a);
    for (let d = 0; d < i.length; d++) {
        let [f, , c] = i[d];
        de(
            s !== void 0 && s[d] !== void 0,
            "Did not find corresponding fetcher result"
        );
        let h = s[d];
        if (Xi(h)) {
            let g = Oo(e.matches, c.route.id);
            (u && u[g.route.id]) || (u = Oe({}, u, { [g.route.id]: h.error })),
                e.fetchers.delete(f);
        } else {
            if (Vo(h))
                throw new Error("Unhandled fetcher revalidation redirect");
            if (Vr(h)) throw new Error("Unhandled fetcher deferred data");
            {
                let g = {
                    state: "idle",
                    data: h.data,
                    formMethod: void 0,
                    formAction: void 0,
                    formEncType: void 0,
                    formData: void 0,
                    " _hasFetcherDoneAnything ": !0,
                };
                e.fetchers.set(f, g);
            }
        }
    }
    return { loaderData: l, errors: u };
}
function gm(e, t, n, r) {
    let o = Oe({}, t);
    for (let i of n) {
        let s = i.route.id;
        if (
            (t.hasOwnProperty(s)
                ? t[s] !== void 0 && (o[s] = t[s])
                : e[s] !== void 0 && (o[s] = e[s]),
            r && r.hasOwnProperty(s))
        )
            break;
    }
    return o;
}
function Oo(e, t) {
    return (
        (t ? e.slice(0, e.findIndex((r) => r.route.id === t) + 1) : [...e])
            .reverse()
            .find((r) => r.route.hasErrorBoundary === !0) || e[0]
    );
}
function ym(e) {
    let t = e.find((n) => n.index || !n.path || n.path === "/") || {
        id: "__shim-error-route__",
    };
    return {
        matches: [{ params: {}, pathname: "", pathnameBase: "", route: t }],
        route: t,
    };
}
function Dr(e, t) {
    let { pathname: n, routeId: r, method: o } = t === void 0 ? {} : t,
        i = "Unknown Server Error",
        s = "Unknown @remix-run/router error";
    return (
        e === 400
            ? ((i = "Bad Request"),
              o && n && r
                  ? (s =
                        "You made a " +
                        o +
                        ' request to "' +
                        n +
                        '" but ' +
                        ('did not provide a `loader` for route "' + r + '", ') +
                        "so there is no way to handle the request.")
                  : (s = "Cannot submit binary form data using GET"))
            : e === 403
            ? ((i = "Forbidden"),
              (s = 'Route "' + r + '" does not match URL "' + n + '"'))
            : e === 404
            ? ((i = "Not Found"), (s = 'No route matches URL "' + n + '"'))
            : e === 405 &&
              ((i = "Method Not Allowed"),
              o && n && r
                  ? (s =
                        "You made a " +
                        o.toUpperCase() +
                        ' request to "' +
                        n +
                        '" but ' +
                        ('did not provide an `action` for route "' +
                            r +
                            '", ') +
                        "so there is no way to handle the request.")
                  : o &&
                    (s = 'Invalid request method "' + o.toUpperCase() + '"')),
        new tu(e || 500, i, new Error(s), !0)
    );
}
function vm(e) {
    for (let t = e.length - 1; t >= 0; t--) {
        let n = e[t];
        if (Vo(n)) return n;
    }
}
function P0(e) {
    let t = typeof e == "string" ? Yn(e) : e;
    return Sr(Oe({}, t, { hash: "" }));
}
function wk(e, t) {
    return (
        e.pathname === t.pathname && e.search === t.search && e.hash !== t.hash
    );
}
function Vr(e) {
    return e.type === ht.deferred;
}
function Xi(e) {
    return e.type === ht.error;
}
function Vo(e) {
    return (e && e.type) === ht.redirect;
}
function Sk(e) {
    return (
        e != null &&
        typeof e.status == "number" &&
        typeof e.statusText == "string" &&
        typeof e.headers == "object" &&
        typeof e.body < "u"
    );
}
function Ck(e) {
    return ck.has(e);
}
function zr(e) {
    return lk.has(e);
}
async function bm(e, t, n, r, o, i) {
    for (let s = 0; s < n.length; s++) {
        let a = n[s],
            l = t[s],
            u = e.find((f) => f.route.id === l.route.id),
            d = u != null && !E0(u, l) && (i && i[l.route.id]) !== void 0;
        Vr(a) &&
            (o || d) &&
            (await $0(a, r, o).then((f) => {
                f && (n[s] = f || n[s]);
            }));
    }
}
async function $0(e, t, n) {
    if ((n === void 0 && (n = !1), !(await e.deferredData.resolveData(t)))) {
        if (n)
            try {
                return { type: ht.data, data: e.deferredData.unwrappedData };
            } catch (o) {
                return { type: ht.error, error: o };
            }
        return { type: ht.data, data: e.deferredData.data };
    }
}
function T0(e) {
    return new URLSearchParams(e).getAll("index").some((t) => t === "");
}
function xm(e, t) {
    let { route: n, pathname: r, params: o } = e;
    return {
        id: n.id,
        pathname: r,
        params: o,
        data: t[n.id],
        handle: n.handle,
    };
}
function wm(e, t) {
    let n = typeof t == "string" ? Yn(t).search : t.search;
    if (e[e.length - 1].route.index && T0(n || "")) return e[e.length - 1];
    let r = Jf(e);
    return r[r.length - 1];
}
/**
 * React Router v6.6.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function dl() {
    return (
        (dl = Object.assign
            ? Object.assign.bind()
            : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var n = arguments[t];
                      for (var r in n)
                          Object.prototype.hasOwnProperty.call(n, r) &&
                              (e[r] = n[r]);
                  }
                  return e;
              }),
        dl.apply(this, arguments)
    );
}
function kk(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
const Ek = typeof Object.is == "function" ? Object.is : kk,
    {
        useState: Rk,
        useEffect: Pk,
        useLayoutEffect: $k,
        useDebugValue: Tk,
    } = qo;
function Ik(e, t, n) {
    const r = t(),
        [{ inst: o }, i] = Rk({ inst: { value: r, getSnapshot: t } });
    return (
        $k(() => {
            (o.value = r), (o.getSnapshot = t), uc(o) && i({ inst: o });
        }, [e, r, t]),
        Pk(
            () => (
                uc(o) && i({ inst: o }),
                e(() => {
                    uc(o) && i({ inst: o });
                })
            ),
            [e]
        ),
        Tk(r),
        r
    );
}
function uc(e) {
    const t = e.getSnapshot,
        n = e.value;
    try {
        const r = t();
        return !Ek(n, r);
    } catch {
        return !0;
    }
}
function Ok(e, t, n) {
    return t();
}
const Mk =
        typeof window < "u" &&
        typeof window.document < "u" &&
        typeof window.document.createElement < "u",
    _k = !Mk,
    Nk = _k ? Ok : Ik,
    Ak =
        "useSyncExternalStore" in qo ? ((e) => e.useSyncExternalStore)(qo) : Nk,
    Zf = b.createContext(null),
    ep = b.createContext(null),
    tp = b.createContext(null),
    nu = b.createContext(null),
    Ds = b.createContext({ outlet: null, matches: [] }),
    I0 = b.createContext(null);
function ru() {
    return b.useContext(nu) != null;
}
function np() {
    return ru() || de(!1), b.useContext(nu).location;
}
function zs() {
    ru() || de(!1);
    let { basename: e, navigator: t } = b.useContext(tp),
        { matches: n } = b.useContext(Ds),
        { pathname: r } = np(),
        o = JSON.stringify(Jf(n).map((a) => a.pathnameBase)),
        i = b.useRef(!1);
    return (
        b.useEffect(() => {
            i.current = !0;
        }),
        b.useCallback(
            function (a, l) {
                if ((l === void 0 && (l = {}), !i.current)) return;
                if (typeof a == "number") {
                    t.go(a);
                    return;
                }
                let u = S0(a, JSON.parse(o), r, l.relative === "path");
                e !== "/" &&
                    (u.pathname = u.pathname === "/" ? e : yr([e, u.pathname])),
                    (l.replace ? t.replace : t.push)(u, l.state, l);
            },
            [e, t, o, r]
        )
    );
}
function Lk(e, t) {
    ru() || de(!1);
    let { navigator: n } = b.useContext(tp),
        r = b.useContext(ep),
        { matches: o } = b.useContext(Ds),
        i = o[o.length - 1],
        s = i ? i.params : {};
    i && i.pathname;
    let a = i ? i.pathnameBase : "/";
    i && i.route;
    let l = np(),
        u;
    if (t) {
        var d;
        let p = typeof t == "string" ? Yn(t) : t;
        a === "/" || ((d = p.pathname) != null && d.startsWith(a)) || de(!1),
            (u = p);
    } else u = l;
    let f = u.pathname || "/",
        c = a === "/" ? f : f.slice(a.length) || "/",
        h = zi(e, { pathname: c }),
        g = Bk(
            h &&
                h.map((p) =>
                    Object.assign({}, p, {
                        params: Object.assign({}, s, p.params),
                        pathname: yr([
                            a,
                            n.encodeLocation
                                ? n.encodeLocation(p.pathname).pathname
                                : p.pathname,
                        ]),
                        pathnameBase:
                            p.pathnameBase === "/"
                                ? a
                                : yr([
                                      a,
                                      n.encodeLocation
                                          ? n.encodeLocation(p.pathnameBase)
                                                .pathname
                                          : p.pathnameBase,
                                  ]),
                    })
                ),
            o,
            r || void 0
        );
    return t && g
        ? b.createElement(
              nu.Provider,
              {
                  value: {
                      location: dl(
                          {
                              pathname: "/",
                              search: "",
                              hash: "",
                              state: null,
                              key: "default",
                          },
                          u
                      ),
                      navigationType: et.Pop,
                  },
              },
              g
          )
        : g;
}
function Dk() {
    let e = Vk(),
        t = C0(e)
            ? e.status + " " + e.statusText
            : e instanceof Error
            ? e.message
            : JSON.stringify(e),
        n = e instanceof Error ? e.stack : null,
        r = "rgba(200,200,200, 0.5)",
        o = { padding: "0.5rem", backgroundColor: r },
        i = { padding: "2px 4px", backgroundColor: r };
    return b.createElement(
        b.Fragment,
        null,
        b.createElement("h2", null, "Unhandled Thrown Error!"),
        b.createElement("h3", { style: { fontStyle: "italic" } }, t),
        n ? b.createElement("pre", { style: o }, n) : null,
        b.createElement("p", null, "💿 Hey developer 👋"),
        b.createElement(
            "p",
            null,
            "You can provide a way better UX than this when your app throws errors by providing your own ",
            b.createElement("code", { style: i }, "errorElement"),
            " props on ",
            b.createElement("code", { style: i }, "<Route>")
        )
    );
}
class zk extends b.Component {
    constructor(t) {
        super(t), (this.state = { location: t.location, error: t.error });
    }
    static getDerivedStateFromError(t) {
        return { error: t };
    }
    static getDerivedStateFromProps(t, n) {
        return n.location !== t.location
            ? { error: t.error, location: t.location }
            : { error: t.error || n.error, location: n.location };
    }
    componentDidCatch(t, n) {
        console.error(
            "React Router caught the following error during render",
            t,
            n
        );
    }
    render() {
        return this.state.error
            ? b.createElement(
                  Ds.Provider,
                  { value: this.props.routeContext },
                  b.createElement(I0.Provider, {
                      value: this.state.error,
                      children: this.props.component,
                  })
              )
            : this.props.children;
    }
}
function Fk(e) {
    let { routeContext: t, match: n, children: r } = e,
        o = b.useContext(Zf);
    return (
        o &&
            o.static &&
            o.staticContext &&
            n.route.errorElement &&
            (o.staticContext._deepestRenderedBoundaryId = n.route.id),
        b.createElement(Ds.Provider, { value: t }, r)
    );
}
function Bk(e, t, n) {
    if ((t === void 0 && (t = []), e == null))
        if (n != null && n.errors) e = n.matches;
        else return null;
    let r = e,
        o = n == null ? void 0 : n.errors;
    if (o != null) {
        let i = r.findIndex(
            (s) => s.route.id && (o == null ? void 0 : o[s.route.id])
        );
        i >= 0 || de(!1), (r = r.slice(0, Math.min(r.length, i + 1)));
    }
    return r.reduceRight((i, s, a) => {
        let l = s.route.id ? (o == null ? void 0 : o[s.route.id]) : null,
            u = n ? s.route.errorElement || b.createElement(Dk, null) : null,
            d = t.concat(r.slice(0, a + 1)),
            f = () =>
                b.createElement(
                    Fk,
                    { match: s, routeContext: { outlet: i, matches: d } },
                    l ? u : s.route.element !== void 0 ? s.route.element : i
                );
        return n && (s.route.errorElement || a === 0)
            ? b.createElement(zk, {
                  location: n.location,
                  component: u,
                  error: l,
                  children: f(),
                  routeContext: { outlet: null, matches: d },
              })
            : f();
    }, null);
}
var Sm;
(function (e) {
    e.UseRevalidator = "useRevalidator";
})(Sm || (Sm = {}));
var fl;
(function (e) {
    (e.UseLoaderData = "useLoaderData"),
        (e.UseActionData = "useActionData"),
        (e.UseRouteError = "useRouteError"),
        (e.UseNavigation = "useNavigation"),
        (e.UseRouteLoaderData = "useRouteLoaderData"),
        (e.UseMatches = "useMatches"),
        (e.UseRevalidator = "useRevalidator");
})(fl || (fl = {}));
function Uk(e) {
    let t = b.useContext(ep);
    return t || de(!1), t;
}
function Wk(e) {
    let t = b.useContext(Ds);
    return t || de(!1), t;
}
function jk(e) {
    let t = Wk(),
        n = t.matches[t.matches.length - 1];
    return n.route.id || de(!1), n.route.id;
}
function Vk() {
    var e;
    let t = b.useContext(I0),
        n = Uk(fl.UseRouteError),
        r = jk(fl.UseRouteError);
    return t || ((e = n.errors) == null ? void 0 : e[r]);
}
function Hk(e) {
    let { fallbackElement: t, router: n } = e,
        r = Ak(
            n.subscribe,
            () => n.state,
            () => n.state
        ),
        o = b.useMemo(
            () => ({
                createHref: n.createHref,
                encodeLocation: n.encodeLocation,
                go: (s) => n.navigate(s),
                push: (s, a, l) =>
                    n.navigate(s, {
                        state: a,
                        preventScrollReset:
                            l == null ? void 0 : l.preventScrollReset,
                    }),
                replace: (s, a, l) =>
                    n.navigate(s, {
                        replace: !0,
                        state: a,
                        preventScrollReset:
                            l == null ? void 0 : l.preventScrollReset,
                    }),
            }),
            [n]
        ),
        i = n.basename || "/";
    return b.createElement(
        b.Fragment,
        null,
        b.createElement(
            Zf.Provider,
            { value: { router: n, navigator: o, static: !1, basename: i } },
            b.createElement(
                ep.Provider,
                { value: r },
                b.createElement(
                    Gk,
                    {
                        basename: n.basename,
                        location: n.state.location,
                        navigationType: n.state.historyAction,
                        navigator: o,
                    },
                    n.state.initialized ? b.createElement(qk, null) : t
                )
            )
        ),
        null
    );
}
function Kk(e) {
    de(!1);
}
function Gk(e) {
    let {
        basename: t = "/",
        children: n = null,
        location: r,
        navigationType: o = et.Pop,
        navigator: i,
        static: s = !1,
    } = e;
    ru() && de(!1);
    let a = t.replace(/^\/*/, "/"),
        l = b.useMemo(
            () => ({ basename: a, navigator: i, static: s }),
            [a, i, s]
        );
    typeof r == "string" && (r = Yn(r));
    let {
            pathname: u = "/",
            search: d = "",
            hash: f = "",
            state: c = null,
            key: h = "default",
        } = r,
        g = b.useMemo(() => {
            let p = w0(u, a);
            return p == null
                ? null
                : { pathname: p, search: d, hash: f, state: c, key: h };
        }, [a, u, d, f, c, h]);
    return g == null
        ? null
        : b.createElement(
              tp.Provider,
              { value: l },
              b.createElement(nu.Provider, {
                  children: n,
                  value: { location: g, navigationType: o },
              })
          );
}
function qk(e) {
    let { children: t, location: n } = e,
        r = b.useContext(Zf),
        o = r && !t ? r.router.routes : Sd(t);
    return Lk(o, n);
}
var Cm;
(function (e) {
    (e[(e.pending = 0)] = "pending"),
        (e[(e.success = 1)] = "success"),
        (e[(e.error = 2)] = "error");
})(Cm || (Cm = {}));
new Promise(() => {});
function Sd(e, t) {
    t === void 0 && (t = []);
    let n = [];
    return (
        b.Children.forEach(e, (r, o) => {
            if (!b.isValidElement(r)) return;
            if (r.type === b.Fragment) {
                n.push.apply(n, Sd(r.props.children, t));
                return;
            }
            r.type !== Kk && de(!1),
                !r.props.index || !r.props.children || de(!1);
            let i = [...t, o],
                s = {
                    id: r.props.id || i.join("-"),
                    caseSensitive: r.props.caseSensitive,
                    element: r.props.element,
                    index: r.props.index,
                    path: r.props.path,
                    loader: r.props.loader,
                    action: r.props.action,
                    errorElement: r.props.errorElement,
                    hasErrorBoundary: r.props.errorElement != null,
                    shouldRevalidate: r.props.shouldRevalidate,
                    handle: r.props.handle,
                };
            r.props.children && (s.children = Sd(r.props.children, i)),
                n.push(s);
        }),
        n
    );
}
function O0(e) {
    return e.map((t) => {
        let n = dl({}, t);
        return (
            n.hasErrorBoundary == null &&
                (n.hasErrorBoundary = n.errorElement != null),
            n.children && (n.children = O0(n.children)),
            n
        );
    });
}
/**
 * React Router DOM v6.6.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Cd() {
    return (
        (Cd = Object.assign
            ? Object.assign.bind()
            : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var n = arguments[t];
                      for (var r in n)
                          Object.prototype.hasOwnProperty.call(n, r) &&
                              (e[r] = n[r]);
                  }
                  return e;
              }),
        Cd.apply(this, arguments)
    );
}
function kd(e) {
    return (
        e === void 0 && (e = ""),
        new URLSearchParams(
            typeof e == "string" ||
            Array.isArray(e) ||
            e instanceof URLSearchParams
                ? e
                : Object.keys(e).reduce((t, n) => {
                      let r = e[n];
                      return t.concat(
                          Array.isArray(r) ? r.map((o) => [n, o]) : [[n, r]]
                      );
                  }, [])
        )
    );
}
function Yk(e, t) {
    let n = kd(e);
    for (let r of t.keys())
        n.has(r) ||
            t.getAll(r).forEach((o) => {
                n.append(r, o);
            });
    return n;
}
function Xk(e, t) {
    return gk({
        basename: t == null ? void 0 : t.basename,
        history: LC({ window: t == null ? void 0 : t.window }),
        hydrationData: (t == null ? void 0 : t.hydrationData) || Qk(),
        routes: O0(e),
    }).initialize();
}
function Qk() {
    var e;
    let t = (e = window) == null ? void 0 : e.__staticRouterHydrationData;
    return t && t.errors && (t = Cd({}, t, { errors: Jk(t.errors) })), t;
}
function Jk(e) {
    if (!e) return null;
    let t = Object.entries(e),
        n = {};
    for (let [r, o] of t)
        if (o && o.__type === "RouteErrorResponse")
            n[r] = new tu(o.status, o.statusText, o.data, o.internal === !0);
        else if (o && o.__type === "Error") {
            let i = new Error(o.message);
            (i.stack = ""), (n[r] = i);
        } else n[r] = o;
    return n;
}
var km;
(function (e) {
    (e.UseScrollRestoration = "useScrollRestoration"),
        (e.UseSubmitImpl = "useSubmitImpl"),
        (e.UseFetcher = "useFetcher");
})(km || (km = {}));
var Em;
(function (e) {
    (e.UseFetchers = "useFetchers"),
        (e.UseScrollRestoration = "useScrollRestoration");
})(Em || (Em = {}));
function M0(e) {
    let t = b.useRef(kd(e)),
        n = np(),
        r = b.useMemo(() => Yk(n.search, t.current), [n.search]),
        o = zs(),
        i = b.useCallback(
            (s, a) => {
                const l = kd(typeof s == "function" ? s(r) : s);
                o("?" + l, a);
            },
            [o, r]
        );
    return [r, i];
}
const Zk = { black: "#000", white: "#fff" },
    Es = Zk,
    eE = {
        50: "#ffebee",
        100: "#ffcdd2",
        200: "#ef9a9a",
        300: "#e57373",
        400: "#ef5350",
        500: "#f44336",
        600: "#e53935",
        700: "#d32f2f",
        800: "#c62828",
        900: "#b71c1c",
        A100: "#ff8a80",
        A200: "#ff5252",
        A400: "#ff1744",
        A700: "#d50000",
    },
    uo = eE,
    tE = {
        50: "#f3e5f5",
        100: "#e1bee7",
        200: "#ce93d8",
        300: "#ba68c8",
        400: "#ab47bc",
        500: "#9c27b0",
        600: "#8e24aa",
        700: "#7b1fa2",
        800: "#6a1b9a",
        900: "#4a148c",
        A100: "#ea80fc",
        A200: "#e040fb",
        A400: "#d500f9",
        A700: "#aa00ff",
    },
    co = tE,
    nE = {
        50: "#e3f2fd",
        100: "#bbdefb",
        200: "#90caf9",
        300: "#64b5f6",
        400: "#42a5f5",
        500: "#2196f3",
        600: "#1e88e5",
        700: "#1976d2",
        800: "#1565c0",
        900: "#0d47a1",
        A100: "#82b1ff",
        A200: "#448aff",
        A400: "#2979ff",
        A700: "#2962ff",
    },
    fo = nE,
    rE = {
        50: "#e1f5fe",
        100: "#b3e5fc",
        200: "#81d4fa",
        300: "#4fc3f7",
        400: "#29b6f6",
        500: "#03a9f4",
        600: "#039be5",
        700: "#0288d1",
        800: "#0277bd",
        900: "#01579b",
        A100: "#80d8ff",
        A200: "#40c4ff",
        A400: "#00b0ff",
        A700: "#0091ea",
    },
    po = rE,
    oE = {
        50: "#e8f5e9",
        100: "#c8e6c9",
        200: "#a5d6a7",
        300: "#81c784",
        400: "#66bb6a",
        500: "#4caf50",
        600: "#43a047",
        700: "#388e3c",
        800: "#2e7d32",
        900: "#1b5e20",
        A100: "#b9f6ca",
        A200: "#69f0ae",
        A400: "#00e676",
        A700: "#00c853",
    },
    ho = oE,
    iE = {
        50: "#fff3e0",
        100: "#ffe0b2",
        200: "#ffcc80",
        300: "#ffb74d",
        400: "#ffa726",
        500: "#ff9800",
        600: "#fb8c00",
        700: "#f57c00",
        800: "#ef6c00",
        900: "#e65100",
        A100: "#ffd180",
        A200: "#ffab40",
        A400: "#ff9100",
        A700: "#ff6d00",
    },
    Ri = iE,
    sE = {
        50: "#fafafa",
        100: "#f5f5f5",
        200: "#eeeeee",
        300: "#e0e0e0",
        400: "#bdbdbd",
        500: "#9e9e9e",
        600: "#757575",
        700: "#616161",
        800: "#424242",
        900: "#212121",
        A100: "#f5f5f5",
        A200: "#eeeeee",
        A400: "#bdbdbd",
        A700: "#616161",
    },
    aE = sE;
function Fr(e) {
    return e !== null && typeof e == "object" && e.constructor === Object;
}
function _0(e) {
    if (!Fr(e)) return e;
    const t = {};
    return (
        Object.keys(e).forEach((n) => {
            t[n] = _0(e[n]);
        }),
        t
    );
}
function Nt(e, t, n = { clone: !0 }) {
    const r = n.clone ? w({}, e) : e;
    return (
        Fr(e) &&
            Fr(t) &&
            Object.keys(t).forEach((o) => {
                o !== "__proto__" &&
                    (Fr(t[o]) && o in e && Fr(e[o])
                        ? (r[o] = Nt(e[o], t[o], n))
                        : n.clone
                        ? (r[o] = Fr(t[o]) ? _0(t[o]) : t[o])
                        : (r[o] = t[o]));
            }),
        r
    );
}
function Kn(e) {
    let t = "https://mui.com/production-error/?code=" + e;
    for (let n = 1; n < arguments.length; n += 1)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    return (
        "Minified MUI error #" + e + "; visit " + t + " for the full message."
    );
}
function W(e) {
    if (typeof e != "string") throw new Error(Kn(7));
    return e.charAt(0).toUpperCase() + e.slice(1);
}
function Rm(...e) {
    return e.reduce(
        (t, n) =>
            n == null
                ? t
                : function (...o) {
                      t.apply(this, o), n.apply(this, o);
                  },
        () => {}
    );
}
function rp(e, t = 166) {
    let n;
    function r(...o) {
        const i = () => {
            e.apply(this, o);
        };
        clearTimeout(n), (n = setTimeout(i, t));
    }
    return (
        (r.clear = () => {
            clearTimeout(n);
        }),
        r
    );
}
function Pa(e, t) {
    return b.isValidElement(e) && t.indexOf(e.type.muiName) !== -1;
}
function jt(e) {
    return (e && e.ownerDocument) || document;
}
function Gn(e) {
    return jt(e).defaultView || window;
}
function Ed(e, t) {
    typeof e == "function" ? e(t) : e && (e.current = t);
}
const lE = typeof window < "u" ? b.useLayoutEffect : b.useEffect,
    Cr = lE;
let Pm = 0;
function uE(e) {
    const [t, n] = b.useState(e),
        r = e || t;
    return (
        b.useEffect(() => {
            t == null && ((Pm += 1), n(`mui-${Pm}`));
        }, [t]),
        r
    );
}
const $m = qo["useId"];
function N0(e) {
    if ($m !== void 0) {
        const t = $m();
        return e ?? t;
    }
    return uE(e);
}
function Rd({ controlled: e, default: t, name: n, state: r = "value" }) {
    const { current: o } = b.useRef(e !== void 0),
        [i, s] = b.useState(t),
        a = o ? e : i,
        l = b.useCallback((u) => {
            o || s(u);
        }, []);
    return [a, l];
}
function Mo(e) {
    const t = b.useRef(e);
    return (
        Cr(() => {
            t.current = e;
        }),
        b.useCallback((...n) => (0, t.current)(...n), [])
    );
}
function st(...e) {
    return b.useMemo(
        () =>
            e.every((t) => t == null)
                ? null
                : (t) => {
                      e.forEach((n) => {
                          Ed(n, t);
                      });
                  },
        e
    );
}
let ou = !0,
    Pd = !1,
    Tm;
const cE = {
    text: !0,
    search: !0,
    url: !0,
    tel: !0,
    email: !0,
    password: !0,
    number: !0,
    date: !0,
    month: !0,
    week: !0,
    time: !0,
    datetime: !0,
    "datetime-local": !0,
};
function dE(e) {
    const { type: t, tagName: n } = e;
    return !!(
        (n === "INPUT" && cE[t] && !e.readOnly) ||
        (n === "TEXTAREA" && !e.readOnly) ||
        e.isContentEditable
    );
}
function fE(e) {
    e.metaKey || e.altKey || e.ctrlKey || (ou = !0);
}
function cc() {
    ou = !1;
}
function pE() {
    this.visibilityState === "hidden" && Pd && (ou = !0);
}
function hE(e) {
    e.addEventListener("keydown", fE, !0),
        e.addEventListener("mousedown", cc, !0),
        e.addEventListener("pointerdown", cc, !0),
        e.addEventListener("touchstart", cc, !0),
        e.addEventListener("visibilitychange", pE, !0);
}
function mE(e) {
    const { target: t } = e;
    try {
        return t.matches(":focus-visible");
    } catch {}
    return ou || dE(t);
}
function gE() {
    const e = b.useCallback((o) => {
            o != null && hE(o.ownerDocument);
        }, []),
        t = b.useRef(!1);
    function n() {
        return t.current
            ? ((Pd = !0),
              window.clearTimeout(Tm),
              (Tm = window.setTimeout(() => {
                  Pd = !1;
              }, 100)),
              (t.current = !1),
              !0)
            : !1;
    }
    function r(o) {
        return mE(o) ? ((t.current = !0), !0) : !1;
    }
    return { isFocusVisibleRef: t, onFocus: r, onBlur: n, ref: e };
}
function A0(e) {
    const t = e.documentElement.clientWidth;
    return Math.abs(window.innerWidth - t);
}
function op(e, t) {
    const n = w({}, t);
    return (
        Object.keys(e).forEach((r) => {
            if (r.toString().match(/^(components|slots)$/))
                n[r] = w({}, e[r], n[r]);
            else if (r.toString().match(/^(componentsProps|slotProps)$/)) {
                const o = e[r] || {},
                    i = t[r];
                (n[r] = {}),
                    !i || !Object.keys(i)
                        ? (n[r] = o)
                        : !o || !Object.keys(o)
                        ? (n[r] = i)
                        : ((n[r] = w({}, i)),
                          Object.keys(o).forEach((s) => {
                              n[r][s] = op(o[s], i[s]);
                          }));
            } else n[r] === void 0 && (n[r] = e[r]);
        }),
        n
    );
}
function pe(e, t, n) {
    const r = {};
    return (
        Object.keys(e).forEach((o) => {
            r[o] = e[o]
                .reduce(
                    (i, s) => (
                        s && (i.push(t(s)), n && n[s] && i.push(n[s])), i
                    ),
                    []
                )
                .join(" ");
        }),
        r
    );
}
const Im = (e) => e,
    yE = () => {
        let e = Im;
        return {
            configure(t) {
                e = t;
            },
            generate(t) {
                return e(t);
            },
            reset() {
                e = Im;
            },
        };
    },
    vE = yE(),
    L0 = vE,
    bE = {
        active: "active",
        checked: "checked",
        completed: "completed",
        disabled: "disabled",
        error: "error",
        expanded: "expanded",
        focused: "focused",
        focusVisible: "focusVisible",
        required: "required",
        selected: "selected",
    };
function fe(e, t, n = "Mui") {
    const r = bE[t];
    return r ? `${n}-${r}` : `${L0.generate(e)}-${t}`;
}
function ue(e, t, n = "Mui") {
    const r = {};
    return (
        t.forEach((o) => {
            r[o] = fe(e, o, n);
        }),
        r
    );
}
function D0(e) {
    var t = Object.create(null);
    return function (n) {
        return t[n] === void 0 && (t[n] = e(n)), t[n];
    };
}
var xE =
        /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
    wE = D0(function (e) {
        return (
            xE.test(e) ||
            (e.charCodeAt(0) === 111 &&
                e.charCodeAt(1) === 110 &&
                e.charCodeAt(2) < 91)
        );
    });
function SE(e) {
    if (e.sheet) return e.sheet;
    for (var t = 0; t < document.styleSheets.length; t++)
        if (document.styleSheets[t].ownerNode === e)
            return document.styleSheets[t];
}
function CE(e) {
    var t = document.createElement("style");
    return (
        t.setAttribute("data-emotion", e.key),
        e.nonce !== void 0 && t.setAttribute("nonce", e.nonce),
        t.appendChild(document.createTextNode("")),
        t.setAttribute("data-s", ""),
        t
    );
}
var kE = (function () {
        function e(n) {
            var r = this;
            (this._insertTag = function (o) {
                var i;
                r.tags.length === 0
                    ? r.insertionPoint
                        ? (i = r.insertionPoint.nextSibling)
                        : r.prepend
                        ? (i = r.container.firstChild)
                        : (i = r.before)
                    : (i = r.tags[r.tags.length - 1].nextSibling),
                    r.container.insertBefore(o, i),
                    r.tags.push(o);
            }),
                (this.isSpeedy = n.speedy === void 0 ? !0 : n.speedy),
                (this.tags = []),
                (this.ctr = 0),
                (this.nonce = n.nonce),
                (this.key = n.key),
                (this.container = n.container),
                (this.prepend = n.prepend),
                (this.insertionPoint = n.insertionPoint),
                (this.before = null);
        }
        var t = e.prototype;
        return (
            (t.hydrate = function (r) {
                r.forEach(this._insertTag);
            }),
            (t.insert = function (r) {
                this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 &&
                    this._insertTag(CE(this));
                var o = this.tags[this.tags.length - 1];
                if (this.isSpeedy) {
                    var i = SE(o);
                    try {
                        i.insertRule(r, i.cssRules.length);
                    } catch {}
                } else o.appendChild(document.createTextNode(r));
                this.ctr++;
            }),
            (t.flush = function () {
                this.tags.forEach(function (r) {
                    return r.parentNode && r.parentNode.removeChild(r);
                }),
                    (this.tags = []),
                    (this.ctr = 0);
            }),
            e
        );
    })(),
    xt = "-ms-",
    pl = "-moz-",
    Se = "-webkit-",
    z0 = "comm",
    ip = "rule",
    sp = "decl",
    EE = "@import",
    F0 = "@keyframes",
    RE = Math.abs,
    iu = String.fromCharCode,
    PE = Object.assign;
function $E(e, t) {
    return mt(e, 0) ^ 45
        ? (((((((t << 2) ^ mt(e, 0)) << 2) ^ mt(e, 1)) << 2) ^ mt(e, 2)) << 2) ^
              mt(e, 3)
        : 0;
}
function B0(e) {
    return e.trim();
}
function TE(e, t) {
    return (e = t.exec(e)) ? e[0] : e;
}
function ke(e, t, n) {
    return e.replace(t, n);
}
function $d(e, t) {
    return e.indexOf(t);
}
function mt(e, t) {
    return e.charCodeAt(t) | 0;
}
function Rs(e, t, n) {
    return e.slice(t, n);
}
function Cn(e) {
    return e.length;
}
function ap(e) {
    return e.length;
}
function ia(e, t) {
    return t.push(e), e;
}
function IE(e, t) {
    return e.map(t).join("");
}
var su = 1,
    ri = 1,
    U0 = 0,
    At = 0,
    tt = 0,
    ci = "";
function au(e, t, n, r, o, i, s) {
    return {
        value: e,
        root: t,
        parent: n,
        type: r,
        props: o,
        children: i,
        line: su,
        column: ri,
        length: s,
        return: "",
    };
}
function Pi(e, t) {
    return PE(
        au("", null, null, "", null, null, 0),
        e,
        { length: -e.length },
        t
    );
}
function OE() {
    return tt;
}
function ME() {
    return (
        (tt = At > 0 ? mt(ci, --At) : 0),
        ri--,
        tt === 10 && ((ri = 1), su--),
        tt
    );
}
function Vt() {
    return (
        (tt = At < U0 ? mt(ci, At++) : 0),
        ri++,
        tt === 10 && ((ri = 1), su++),
        tt
    );
}
function In() {
    return mt(ci, At);
}
function $a() {
    return At;
}
function Fs(e, t) {
    return Rs(ci, e, t);
}
function Ps(e) {
    switch (e) {
        case 0:
        case 9:
        case 10:
        case 13:
        case 32:
            return 5;
        case 33:
        case 43:
        case 44:
        case 47:
        case 62:
        case 64:
        case 126:
        case 59:
        case 123:
        case 125:
            return 4;
        case 58:
            return 3;
        case 34:
        case 39:
        case 40:
        case 91:
            return 2;
        case 41:
        case 93:
            return 1;
    }
    return 0;
}
function W0(e) {
    return (su = ri = 1), (U0 = Cn((ci = e))), (At = 0), [];
}
function j0(e) {
    return (ci = ""), e;
}
function Ta(e) {
    return B0(Fs(At - 1, Td(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function _E(e) {
    for (; (tt = In()) && tt < 33; ) Vt();
    return Ps(e) > 2 || Ps(tt) > 3 ? "" : " ";
}
function NE(e, t) {
    for (
        ;
        --t &&
        Vt() &&
        !(tt < 48 || tt > 102 || (tt > 57 && tt < 65) || (tt > 70 && tt < 97));

    );
    return Fs(e, $a() + (t < 6 && In() == 32 && Vt() == 32));
}
function Td(e) {
    for (; Vt(); )
        switch (tt) {
            case e:
                return At;
            case 34:
            case 39:
                e !== 34 && e !== 39 && Td(tt);
                break;
            case 40:
                e === 41 && Td(e);
                break;
            case 92:
                Vt();
                break;
        }
    return At;
}
function AE(e, t) {
    for (; Vt() && e + tt !== 47 + 10; )
        if (e + tt === 42 + 42 && In() === 47) break;
    return "/*" + Fs(t, At - 1) + "*" + iu(e === 47 ? e : Vt());
}
function LE(e) {
    for (; !Ps(In()); ) Vt();
    return Fs(e, At);
}
function DE(e) {
    return j0(Ia("", null, null, null, [""], (e = W0(e)), 0, [0], e));
}
function Ia(e, t, n, r, o, i, s, a, l) {
    for (
        var u = 0,
            d = 0,
            f = s,
            c = 0,
            h = 0,
            g = 0,
            p = 1,
            S = 1,
            y = 1,
            m = 0,
            v = "",
            x = o,
            k = i,
            R = r,
            C = v;
        S;

    )
        switch (((g = m), (m = Vt()))) {
            case 40:
                if (g != 108 && mt(C, f - 1) == 58) {
                    $d((C += ke(Ta(m), "&", "&\f")), "&\f") != -1 && (y = -1);
                    break;
                }
            case 34:
            case 39:
            case 91:
                C += Ta(m);
                break;
            case 9:
            case 10:
            case 13:
            case 32:
                C += _E(g);
                break;
            case 92:
                C += NE($a() - 1, 7);
                continue;
            case 47:
                switch (In()) {
                    case 42:
                    case 47:
                        ia(zE(AE(Vt(), $a()), t, n), l);
                        break;
                    default:
                        C += "/";
                }
                break;
            case 123 * p:
                a[u++] = Cn(C) * y;
            case 125 * p:
            case 59:
            case 0:
                switch (m) {
                    case 0:
                    case 125:
                        S = 0;
                    case 59 + d:
                        h > 0 &&
                            Cn(C) - f &&
                            ia(
                                h > 32
                                    ? Mm(C + ";", r, n, f - 1)
                                    : Mm(ke(C, " ", "") + ";", r, n, f - 2),
                                l
                            );
                        break;
                    case 59:
                        C += ";";
                    default:
                        if (
                            (ia(
                                (R = Om(
                                    C,
                                    t,
                                    n,
                                    u,
                                    d,
                                    o,
                                    a,
                                    v,
                                    (x = []),
                                    (k = []),
                                    f
                                )),
                                i
                            ),
                            m === 123)
                        )
                            if (d === 0) Ia(C, t, R, R, x, i, f, a, k);
                            else
                                switch (
                                    c === 99 && mt(C, 3) === 110 ? 100 : c
                                ) {
                                    case 100:
                                    case 109:
                                    case 115:
                                        Ia(
                                            e,
                                            R,
                                            R,
                                            r &&
                                                ia(
                                                    Om(
                                                        e,
                                                        R,
                                                        R,
                                                        0,
                                                        0,
                                                        o,
                                                        a,
                                                        v,
                                                        o,
                                                        (x = []),
                                                        f
                                                    ),
                                                    k
                                                ),
                                            o,
                                            k,
                                            f,
                                            a,
                                            r ? x : k
                                        );
                                        break;
                                    default:
                                        Ia(C, R, R, R, [""], k, 0, a, k);
                                }
                }
                (u = d = h = 0), (p = y = 1), (v = C = ""), (f = s);
                break;
            case 58:
                (f = 1 + Cn(C)), (h = g);
            default:
                if (p < 1) {
                    if (m == 123) --p;
                    else if (m == 125 && p++ == 0 && ME() == 125) continue;
                }
                switch (((C += iu(m)), m * p)) {
                    case 38:
                        y = d > 0 ? 1 : ((C += "\f"), -1);
                        break;
                    case 44:
                        (a[u++] = (Cn(C) - 1) * y), (y = 1);
                        break;
                    case 64:
                        In() === 45 && (C += Ta(Vt())),
                            (c = In()),
                            (d = f = Cn((v = C += LE($a())))),
                            m++;
                        break;
                    case 45:
                        g === 45 && Cn(C) == 2 && (p = 0);
                }
        }
    return i;
}
function Om(e, t, n, r, o, i, s, a, l, u, d) {
    for (
        var f = o - 1, c = o === 0 ? i : [""], h = ap(c), g = 0, p = 0, S = 0;
        g < r;
        ++g
    )
        for (
            var y = 0, m = Rs(e, f + 1, (f = RE((p = s[g])))), v = e;
            y < h;
            ++y
        )
            (v = B0(p > 0 ? c[y] + " " + m : ke(m, /&\f/g, c[y]))) &&
                (l[S++] = v);
    return au(e, t, n, o === 0 ? ip : a, l, u, d);
}
function zE(e, t, n) {
    return au(e, t, n, z0, iu(OE()), Rs(e, 2, -2), 0);
}
function Mm(e, t, n, r) {
    return au(e, t, n, sp, Rs(e, 0, r), Rs(e, r + 1, -1), r);
}
function Ho(e, t) {
    for (var n = "", r = ap(e), o = 0; o < r; o++) n += t(e[o], o, e, t) || "";
    return n;
}
function FE(e, t, n, r) {
    switch (e.type) {
        case EE:
        case sp:
            return (e.return = e.return || e.value);
        case z0:
            return "";
        case F0:
            return (e.return = e.value + "{" + Ho(e.children, r) + "}");
        case ip:
            e.value = e.props.join(",");
    }
    return Cn((n = Ho(e.children, r)))
        ? (e.return = e.value + "{" + n + "}")
        : "";
}
function BE(e) {
    var t = ap(e);
    return function (n, r, o, i) {
        for (var s = "", a = 0; a < t; a++) s += e[a](n, r, o, i) || "";
        return s;
    };
}
function UE(e) {
    return function (t) {
        t.root || ((t = t.return) && e(t));
    };
}
var WE = function (t, n, r) {
        for (
            var o = 0, i = 0;
            (o = i), (i = In()), o === 38 && i === 12 && (n[r] = 1), !Ps(i);

        )
            Vt();
        return Fs(t, At);
    },
    jE = function (t, n) {
        var r = -1,
            o = 44;
        do
            switch (Ps(o)) {
                case 0:
                    o === 38 && In() === 12 && (n[r] = 1),
                        (t[r] += WE(At - 1, n, r));
                    break;
                case 2:
                    t[r] += Ta(o);
                    break;
                case 4:
                    if (o === 44) {
                        (t[++r] = In() === 58 ? "&\f" : ""),
                            (n[r] = t[r].length);
                        break;
                    }
                default:
                    t[r] += iu(o);
            }
        while ((o = Vt()));
        return t;
    },
    VE = function (t, n) {
        return j0(jE(W0(t), n));
    },
    _m = new WeakMap(),
    HE = function (t) {
        if (!(t.type !== "rule" || !t.parent || t.length < 1)) {
            for (
                var n = t.value,
                    r = t.parent,
                    o = t.column === r.column && t.line === r.line;
                r.type !== "rule";

            )
                if (((r = r.parent), !r)) return;
            if (
                !(
                    t.props.length === 1 &&
                    n.charCodeAt(0) !== 58 &&
                    !_m.get(r)
                ) &&
                !o
            ) {
                _m.set(t, !0);
                for (
                    var i = [], s = VE(n, i), a = r.props, l = 0, u = 0;
                    l < s.length;
                    l++
                )
                    for (var d = 0; d < a.length; d++, u++)
                        t.props[u] = i[l]
                            ? s[l].replace(/&\f/g, a[d])
                            : a[d] + " " + s[l];
            }
        }
    },
    KE = function (t) {
        if (t.type === "decl") {
            var n = t.value;
            n.charCodeAt(0) === 108 &&
                n.charCodeAt(2) === 98 &&
                ((t.return = ""), (t.value = ""));
        }
    };
function V0(e, t) {
    switch ($E(e, t)) {
        case 5103:
            return Se + "print-" + e + e;
        case 5737:
        case 4201:
        case 3177:
        case 3433:
        case 1641:
        case 4457:
        case 2921:
        case 5572:
        case 6356:
        case 5844:
        case 3191:
        case 6645:
        case 3005:
        case 6391:
        case 5879:
        case 5623:
        case 6135:
        case 4599:
        case 4855:
        case 4215:
        case 6389:
        case 5109:
        case 5365:
        case 5621:
        case 3829:
            return Se + e + e;
        case 5349:
        case 4246:
        case 4810:
        case 6968:
        case 2756:
            return Se + e + pl + e + xt + e + e;
        case 6828:
        case 4268:
            return Se + e + xt + e + e;
        case 6165:
            return Se + e + xt + "flex-" + e + e;
        case 5187:
            return (
                Se +
                e +
                ke(e, /(\w+).+(:[^]+)/, Se + "box-$1$2" + xt + "flex-$1$2") +
                e
            );
        case 5443:
            return Se + e + xt + "flex-item-" + ke(e, /flex-|-self/, "") + e;
        case 4675:
            return (
                Se +
                e +
                xt +
                "flex-line-pack" +
                ke(e, /align-content|flex-|-self/, "") +
                e
            );
        case 5548:
            return Se + e + xt + ke(e, "shrink", "negative") + e;
        case 5292:
            return Se + e + xt + ke(e, "basis", "preferred-size") + e;
        case 6060:
            return (
                Se +
                "box-" +
                ke(e, "-grow", "") +
                Se +
                e +
                xt +
                ke(e, "grow", "positive") +
                e
            );
        case 4554:
            return Se + ke(e, /([^-])(transform)/g, "$1" + Se + "$2") + e;
        case 6187:
            return (
                ke(
                    ke(
                        ke(e, /(zoom-|grab)/, Se + "$1"),
                        /(image-set)/,
                        Se + "$1"
                    ),
                    e,
                    ""
                ) + e
            );
        case 5495:
        case 3959:
            return ke(e, /(image-set\([^]*)/, Se + "$1$`$1");
        case 4968:
            return (
                ke(
                    ke(
                        e,
                        /(.+:)(flex-)?(.*)/,
                        Se + "box-pack:$3" + xt + "flex-pack:$3"
                    ),
                    /s.+-b[^;]+/,
                    "justify"
                ) +
                Se +
                e +
                e
            );
        case 4095:
        case 3583:
        case 4068:
        case 2532:
            return ke(e, /(.+)-inline(.+)/, Se + "$1$2") + e;
        case 8116:
        case 7059:
        case 5753:
        case 5535:
        case 5445:
        case 5701:
        case 4933:
        case 4677:
        case 5533:
        case 5789:
        case 5021:
        case 4765:
            if (Cn(e) - 1 - t > 6)
                switch (mt(e, t + 1)) {
                    case 109:
                        if (mt(e, t + 4) !== 45) break;
                    case 102:
                        return (
                            ke(
                                e,
                                /(.+:)(.+)-([^]+)/,
                                "$1" +
                                    Se +
                                    "$2-$3$1" +
                                    pl +
                                    (mt(e, t + 3) == 108 ? "$3" : "$2-$3")
                            ) + e
                        );
                    case 115:
                        return ~$d(e, "stretch")
                            ? V0(ke(e, "stretch", "fill-available"), t) + e
                            : e;
                }
            break;
        case 4949:
            if (mt(e, t + 1) !== 115) break;
        case 6444:
            switch (mt(e, Cn(e) - 3 - (~$d(e, "!important") && 10))) {
                case 107:
                    return ke(e, ":", ":" + Se) + e;
                case 101:
                    return (
                        ke(
                            e,
                            /(.+:)([^;!]+)(;|!.+)?/,
                            "$1" +
                                Se +
                                (mt(e, 14) === 45 ? "inline-" : "") +
                                "box$3$1" +
                                Se +
                                "$2$3$1" +
                                xt +
                                "$2box$3"
                        ) + e
                    );
            }
            break;
        case 5936:
            switch (mt(e, t + 11)) {
                case 114:
                    return Se + e + xt + ke(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
                case 108:
                    return (
                        Se + e + xt + ke(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e
                    );
                case 45:
                    return Se + e + xt + ke(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
            }
            return Se + e + xt + e + e;
    }
    return e;
}
var GE = function (t, n, r, o) {
        if (t.length > -1 && !t.return)
            switch (t.type) {
                case sp:
                    t.return = V0(t.value, t.length);
                    break;
                case F0:
                    return Ho(
                        [Pi(t, { value: ke(t.value, "@", "@" + Se) })],
                        o
                    );
                case ip:
                    if (t.length)
                        return IE(t.props, function (i) {
                            switch (TE(i, /(::plac\w+|:read-\w+)/)) {
                                case ":read-only":
                                case ":read-write":
                                    return Ho(
                                        [
                                            Pi(t, {
                                                props: [
                                                    ke(
                                                        i,
                                                        /:(read-\w+)/,
                                                        ":" + pl + "$1"
                                                    ),
                                                ],
                                            }),
                                        ],
                                        o
                                    );
                                case "::placeholder":
                                    return Ho(
                                        [
                                            Pi(t, {
                                                props: [
                                                    ke(
                                                        i,
                                                        /:(plac\w+)/,
                                                        ":" + Se + "input-$1"
                                                    ),
                                                ],
                                            }),
                                            Pi(t, {
                                                props: [
                                                    ke(
                                                        i,
                                                        /:(plac\w+)/,
                                                        ":" + pl + "$1"
                                                    ),
                                                ],
                                            }),
                                            Pi(t, {
                                                props: [
                                                    ke(
                                                        i,
                                                        /:(plac\w+)/,
                                                        xt + "input-$1"
                                                    ),
                                                ],
                                            }),
                                        ],
                                        o
                                    );
                            }
                            return "";
                        });
            }
    },
    qE = [GE],
    YE = function (t) {
        var n = t.key;
        if (n === "css") {
            var r = document.querySelectorAll(
                "style[data-emotion]:not([data-s])"
            );
            Array.prototype.forEach.call(r, function (p) {
                var S = p.getAttribute("data-emotion");
                S.indexOf(" ") !== -1 &&
                    (document.head.appendChild(p),
                    p.setAttribute("data-s", ""));
            });
        }
        var o = t.stylisPlugins || qE,
            i = {},
            s,
            a = [];
        (s = t.container || document.head),
            Array.prototype.forEach.call(
                document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
                function (p) {
                    for (
                        var S = p.getAttribute("data-emotion").split(" "),
                            y = 1;
                        y < S.length;
                        y++
                    )
                        i[S[y]] = !0;
                    a.push(p);
                }
            );
        var l,
            u = [HE, KE];
        {
            var d,
                f = [
                    FE,
                    UE(function (p) {
                        d.insert(p);
                    }),
                ],
                c = BE(u.concat(o, f)),
                h = function (S) {
                    return Ho(DE(S), c);
                };
            l = function (S, y, m, v) {
                (d = m),
                    h(S ? S + "{" + y.styles + "}" : y.styles),
                    v && (g.inserted[y.name] = !0);
            };
        }
        var g = {
            key: n,
            sheet: new kE({
                key: n,
                container: s,
                nonce: t.nonce,
                speedy: t.speedy,
                prepend: t.prepend,
                insertionPoint: t.insertionPoint,
            }),
            nonce: t.nonce,
            inserted: i,
            registered: {},
            insert: l,
        };
        return g.sheet.hydrate(a), g;
    },
    XE = !0;
function QE(e, t, n) {
    var r = "";
    return (
        n.split(" ").forEach(function (o) {
            e[o] !== void 0 ? t.push(e[o] + ";") : (r += o + " ");
        }),
        r
    );
}
var H0 = function (t, n, r) {
        var o = t.key + "-" + n.name;
        (r === !1 || XE === !1) &&
            t.registered[o] === void 0 &&
            (t.registered[o] = n.styles);
    },
    K0 = function (t, n, r) {
        H0(t, n, r);
        var o = t.key + "-" + n.name;
        if (t.inserted[n.name] === void 0) {
            var i = n;
            do t.insert(n === i ? "." + o : "", i, t.sheet, !0), (i = i.next);
            while (i !== void 0);
        }
    };
function JE(e) {
    for (var t = 0, n, r = 0, o = e.length; o >= 4; ++r, o -= 4)
        (n =
            (e.charCodeAt(r) & 255) |
            ((e.charCodeAt(++r) & 255) << 8) |
            ((e.charCodeAt(++r) & 255) << 16) |
            ((e.charCodeAt(++r) & 255) << 24)),
            (n = (n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)),
            (n ^= n >>> 24),
            (t =
                ((n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)) ^
                ((t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)));
    switch (o) {
        case 3:
            t ^= (e.charCodeAt(r + 2) & 255) << 16;
        case 2:
            t ^= (e.charCodeAt(r + 1) & 255) << 8;
        case 1:
            (t ^= e.charCodeAt(r) & 255),
                (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16));
    }
    return (
        (t ^= t >>> 13),
        (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)),
        ((t ^ (t >>> 15)) >>> 0).toString(36)
    );
}
var ZE = {
        animationIterationCount: 1,
        borderImageOutset: 1,
        borderImageSlice: 1,
        borderImageWidth: 1,
        boxFlex: 1,
        boxFlexGroup: 1,
        boxOrdinalGroup: 1,
        columnCount: 1,
        columns: 1,
        flex: 1,
        flexGrow: 1,
        flexPositive: 1,
        flexShrink: 1,
        flexNegative: 1,
        flexOrder: 1,
        gridRow: 1,
        gridRowEnd: 1,
        gridRowSpan: 1,
        gridRowStart: 1,
        gridColumn: 1,
        gridColumnEnd: 1,
        gridColumnSpan: 1,
        gridColumnStart: 1,
        msGridRow: 1,
        msGridRowSpan: 1,
        msGridColumn: 1,
        msGridColumnSpan: 1,
        fontWeight: 1,
        lineHeight: 1,
        opacity: 1,
        order: 1,
        orphans: 1,
        tabSize: 1,
        widows: 1,
        zIndex: 1,
        zoom: 1,
        WebkitLineClamp: 1,
        fillOpacity: 1,
        floodOpacity: 1,
        stopOpacity: 1,
        strokeDasharray: 1,
        strokeDashoffset: 1,
        strokeMiterlimit: 1,
        strokeOpacity: 1,
        strokeWidth: 1,
    },
    e2 = /[A-Z]|^ms/g,
    t2 = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
    G0 = function (t) {
        return t.charCodeAt(1) === 45;
    },
    Nm = function (t) {
        return t != null && typeof t != "boolean";
    },
    dc = D0(function (e) {
        return G0(e) ? e : e.replace(e2, "-$&").toLowerCase();
    }),
    Am = function (t, n) {
        switch (t) {
            case "animation":
            case "animationName":
                if (typeof n == "string")
                    return n.replace(t2, function (r, o, i) {
                        return (kn = { name: o, styles: i, next: kn }), o;
                    });
        }
        return ZE[t] !== 1 && !G0(t) && typeof n == "number" && n !== 0
            ? n + "px"
            : n;
    };
function $s(e, t, n) {
    if (n == null) return "";
    if (n.__emotion_styles !== void 0) return n;
    switch (typeof n) {
        case "boolean":
            return "";
        case "object": {
            if (n.anim === 1)
                return (
                    (kn = { name: n.name, styles: n.styles, next: kn }), n.name
                );
            if (n.styles !== void 0) {
                var r = n.next;
                if (r !== void 0)
                    for (; r !== void 0; )
                        (kn = { name: r.name, styles: r.styles, next: kn }),
                            (r = r.next);
                var o = n.styles + ";";
                return o;
            }
            return n2(e, t, n);
        }
        case "function": {
            if (e !== void 0) {
                var i = kn,
                    s = n(e);
                return (kn = i), $s(e, t, s);
            }
            break;
        }
    }
    if (t == null) return n;
    var a = t[n];
    return a !== void 0 ? a : n;
}
function n2(e, t, n) {
    var r = "";
    if (Array.isArray(n))
        for (var o = 0; o < n.length; o++) r += $s(e, t, n[o]) + ";";
    else
        for (var i in n) {
            var s = n[i];
            if (typeof s != "object")
                t != null && t[s] !== void 0
                    ? (r += i + "{" + t[s] + "}")
                    : Nm(s) && (r += dc(i) + ":" + Am(i, s) + ";");
            else if (
                Array.isArray(s) &&
                typeof s[0] == "string" &&
                (t == null || t[s[0]] === void 0)
            )
                for (var a = 0; a < s.length; a++)
                    Nm(s[a]) && (r += dc(i) + ":" + Am(i, s[a]) + ";");
            else {
                var l = $s(e, t, s);
                switch (i) {
                    case "animation":
                    case "animationName": {
                        r += dc(i) + ":" + l + ";";
                        break;
                    }
                    default:
                        r += i + "{" + l + "}";
                }
            }
        }
    return r;
}
var Lm = /label:\s*([^\s;\n{]+)\s*(;|$)/g,
    kn,
    lp = function (t, n, r) {
        if (
            t.length === 1 &&
            typeof t[0] == "object" &&
            t[0] !== null &&
            t[0].styles !== void 0
        )
            return t[0];
        var o = !0,
            i = "";
        kn = void 0;
        var s = t[0];
        s == null || s.raw === void 0
            ? ((o = !1), (i += $s(r, n, s)))
            : (i += s[0]);
        for (var a = 1; a < t.length; a++)
            (i += $s(r, n, t[a])), o && (i += s[a]);
        Lm.lastIndex = 0;
        for (var l = "", u; (u = Lm.exec(i)) !== null; ) l += "-" + u[1];
        var d = JE(i) + l;
        return { name: d, styles: i, next: kn };
    },
    r2 = function (t) {
        return t();
    },
    q0 = qo["useInsertionEffect"] ? qo["useInsertionEffect"] : !1,
    o2 = q0 || r2,
    Dm = q0 || b.useLayoutEffect,
    Y0 = b.createContext(typeof HTMLElement < "u" ? YE({ key: "css" }) : null);
Y0.Provider;
var X0 = function (t) {
        return b.forwardRef(function (n, r) {
            var o = b.useContext(Y0);
            return t(n, o, r);
        });
    },
    up = b.createContext({}),
    i2 = X0(function (e, t) {
        var n = e.styles,
            r = lp([n], void 0, b.useContext(up)),
            o = b.useRef();
        return (
            Dm(
                function () {
                    var i = t.key + "-global",
                        s = new t.sheet.constructor({
                            key: i,
                            nonce: t.sheet.nonce,
                            container: t.sheet.container,
                            speedy: t.sheet.isSpeedy,
                        }),
                        a = !1,
                        l = document.querySelector(
                            'style[data-emotion="' + i + " " + r.name + '"]'
                        );
                    return (
                        t.sheet.tags.length && (s.before = t.sheet.tags[0]),
                        l !== null &&
                            ((a = !0),
                            l.setAttribute("data-emotion", i),
                            s.hydrate([l])),
                        (o.current = [s, a]),
                        function () {
                            s.flush();
                        }
                    );
                },
                [t]
            ),
            Dm(
                function () {
                    var i = o.current,
                        s = i[0],
                        a = i[1];
                    if (a) {
                        i[1] = !1;
                        return;
                    }
                    if (
                        (r.next !== void 0 && K0(t, r.next, !0), s.tags.length)
                    ) {
                        var l = s.tags[s.tags.length - 1].nextElementSibling;
                        (s.before = l), s.flush();
                    }
                    t.insert("", r, s, !1);
                },
                [t, r.name]
            ),
            null
        );
    });
function s2() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
    return lp(t);
}
var cp = function () {
        var t = s2.apply(void 0, arguments),
            n = "animation-" + t.name;
        return {
            name: n,
            styles: "@keyframes " + n + "{" + t.styles + "}",
            anim: 1,
            toString: function () {
                return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
            },
        };
    },
    a2 = wE,
    l2 = function (t) {
        return t !== "theme";
    },
    zm = function (t) {
        return typeof t == "string" && t.charCodeAt(0) > 96 ? a2 : l2;
    },
    Fm = function (t, n, r) {
        var o;
        if (n) {
            var i = n.shouldForwardProp;
            o =
                t.__emotion_forwardProp && i
                    ? function (s) {
                          return t.__emotion_forwardProp(s) && i(s);
                      }
                    : i;
        }
        return typeof o != "function" && r && (o = t.__emotion_forwardProp), o;
    },
    u2 = function (t) {
        var n = t.cache,
            r = t.serialized,
            o = t.isStringTag;
        return (
            H0(n, r, o),
            o2(function () {
                return K0(n, r, o);
            }),
            null
        );
    },
    c2 = function e(t, n) {
        var r = t.__emotion_real === t,
            o = (r && t.__emotion_base) || t,
            i,
            s;
        n !== void 0 && ((i = n.label), (s = n.target));
        var a = Fm(t, n, r),
            l = a || zm(o),
            u = !l("as");
        return function () {
            var d = arguments,
                f =
                    r && t.__emotion_styles !== void 0
                        ? t.__emotion_styles.slice(0)
                        : [];
            if (
                (i !== void 0 && f.push("label:" + i + ";"),
                d[0] == null || d[0].raw === void 0)
            )
                f.push.apply(f, d);
            else {
                f.push(d[0][0]);
                for (var c = d.length, h = 1; h < c; h++) f.push(d[h], d[0][h]);
            }
            var g = X0(function (p, S, y) {
                var m = (u && p.as) || o,
                    v = "",
                    x = [],
                    k = p;
                if (p.theme == null) {
                    k = {};
                    for (var R in p) k[R] = p[R];
                    k.theme = b.useContext(up);
                }
                typeof p.className == "string"
                    ? (v = QE(S.registered, x, p.className))
                    : p.className != null && (v = p.className + " ");
                var C = lp(f.concat(x), S.registered, k);
                (v += S.key + "-" + C.name), s !== void 0 && (v += " " + s);
                var T = u && a === void 0 ? zm(m) : l,
                    I = {};
                for (var P in p) (u && P === "as") || (T(P) && (I[P] = p[P]));
                return (
                    (I.className = v),
                    (I.ref = y),
                    b.createElement(
                        b.Fragment,
                        null,
                        b.createElement(u2, {
                            cache: S,
                            serialized: C,
                            isStringTag: typeof m == "string",
                        }),
                        b.createElement(m, I)
                    )
                );
            });
            return (
                (g.displayName =
                    i !== void 0
                        ? i
                        : "Styled(" +
                          (typeof o == "string"
                              ? o
                              : o.displayName || o.name || "Component") +
                          ")"),
                (g.defaultProps = t.defaultProps),
                (g.__emotion_real = g),
                (g.__emotion_base = o),
                (g.__emotion_styles = f),
                (g.__emotion_forwardProp = a),
                Object.defineProperty(g, "toString", {
                    value: function () {
                        return "." + s;
                    },
                }),
                (g.withComponent = function (p, S) {
                    return e(
                        p,
                        w({}, n, S, { shouldForwardProp: Fm(g, S, !0) })
                    ).apply(void 0, f);
                }),
                g
            );
        };
    },
    d2 = [
        "a",
        "abbr",
        "address",
        "area",
        "article",
        "aside",
        "audio",
        "b",
        "base",
        "bdi",
        "bdo",
        "big",
        "blockquote",
        "body",
        "br",
        "button",
        "canvas",
        "caption",
        "cite",
        "code",
        "col",
        "colgroup",
        "data",
        "datalist",
        "dd",
        "del",
        "details",
        "dfn",
        "dialog",
        "div",
        "dl",
        "dt",
        "em",
        "embed",
        "fieldset",
        "figcaption",
        "figure",
        "footer",
        "form",
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "head",
        "header",
        "hgroup",
        "hr",
        "html",
        "i",
        "iframe",
        "img",
        "input",
        "ins",
        "kbd",
        "keygen",
        "label",
        "legend",
        "li",
        "link",
        "main",
        "map",
        "mark",
        "marquee",
        "menu",
        "menuitem",
        "meta",
        "meter",
        "nav",
        "noscript",
        "object",
        "ol",
        "optgroup",
        "option",
        "output",
        "p",
        "param",
        "picture",
        "pre",
        "progress",
        "q",
        "rp",
        "rt",
        "ruby",
        "s",
        "samp",
        "script",
        "section",
        "select",
        "small",
        "source",
        "span",
        "strong",
        "style",
        "sub",
        "summary",
        "sup",
        "table",
        "tbody",
        "td",
        "textarea",
        "tfoot",
        "th",
        "thead",
        "time",
        "title",
        "tr",
        "track",
        "u",
        "ul",
        "var",
        "video",
        "wbr",
        "circle",
        "clipPath",
        "defs",
        "ellipse",
        "foreignObject",
        "g",
        "image",
        "line",
        "linearGradient",
        "mask",
        "path",
        "pattern",
        "polygon",
        "polyline",
        "radialGradient",
        "rect",
        "stop",
        "svg",
        "text",
        "tspan",
    ],
    Id = c2.bind();
d2.forEach(function (e) {
    Id[e] = Id(e);
});
const f2 = Id;
function p2(e) {
    return e == null || Object.keys(e).length === 0;
}
function h2(e) {
    const { styles: t, defaultTheme: n = {} } = e;
    return E(i2, {
        styles: typeof t == "function" ? (o) => t(p2(o) ? n : o) : t,
    });
}
/** @license MUI v5.11.0
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ function Q0(e, t) {
    return f2(e, t);
}
const m2 = (e, t) => {
    Array.isArray(e.__emotion_styles) &&
        (e.__emotion_styles = t(e.__emotion_styles));
};
function Qi(e, t) {
    return t ? Nt(e, t, { clone: !1 }) : e;
}
const dp = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
    Bm = {
        keys: ["xs", "sm", "md", "lg", "xl"],
        up: (e) => `@media (min-width:${dp[e]}px)`,
    };
function bn(e, t, n) {
    const r = e.theme || {};
    if (Array.isArray(t)) {
        const i = r.breakpoints || Bm;
        return t.reduce((s, a, l) => ((s[i.up(i.keys[l])] = n(t[l])), s), {});
    }
    if (typeof t == "object") {
        const i = r.breakpoints || Bm;
        return Object.keys(t).reduce((s, a) => {
            if (Object.keys(i.values || dp).indexOf(a) !== -1) {
                const l = i.up(a);
                s[l] = n(t[a], a);
            } else {
                const l = a;
                s[l] = t[l];
            }
            return s;
        }, {});
    }
    return n(t);
}
function J0(e = {}) {
    var t;
    return (
        ((t = e.keys) == null
            ? void 0
            : t.reduce((r, o) => {
                  const i = e.up(o);
                  return (r[i] = {}), r;
              }, {})) || {}
    );
}
function Z0(e, t) {
    return e.reduce((n, r) => {
        const o = n[r];
        return (!o || Object.keys(o).length === 0) && delete n[r], n;
    }, t);
}
function g2(e, ...t) {
    const n = J0(e),
        r = [n, ...t].reduce((o, i) => Nt(o, i), {});
    return Z0(Object.keys(n), r);
}
function y2(e, t) {
    if (typeof e != "object") return {};
    const n = {},
        r = Object.keys(t);
    return (
        Array.isArray(e)
            ? r.forEach((o, i) => {
                  i < e.length && (n[o] = !0);
              })
            : r.forEach((o) => {
                  e[o] != null && (n[o] = !0);
              }),
        n
    );
}
function fc({ values: e, breakpoints: t, base: n }) {
    const r = n || y2(e, t),
        o = Object.keys(r);
    if (o.length === 0) return e;
    let i;
    return o.reduce(
        (s, a, l) => (
            Array.isArray(e)
                ? ((s[a] = e[l] != null ? e[l] : e[i]), (i = l))
                : typeof e == "object"
                ? ((s[a] = e[a] != null ? e[a] : e[i]), (i = a))
                : (s[a] = e),
            s
        ),
        {}
    );
}
function lu(e, t, n = !0) {
    if (!t || typeof t != "string") return null;
    if (e && e.vars && n) {
        const r = `vars.${t}`
            .split(".")
            .reduce((o, i) => (o && o[i] ? o[i] : null), e);
        if (r != null) return r;
    }
    return t.split(".").reduce((r, o) => (r && r[o] != null ? r[o] : null), e);
}
function hl(e, t, n, r = n) {
    let o;
    return (
        typeof e == "function"
            ? (o = e(n))
            : Array.isArray(e)
            ? (o = e[n] || r)
            : (o = lu(e, n) || r),
        t && (o = t(o, r, e)),
        o
    );
}
function Ee(e) {
    const { prop: t, cssProperty: n = e.prop, themeKey: r, transform: o } = e,
        i = (s) => {
            if (s[t] == null) return null;
            const a = s[t],
                l = s.theme,
                u = lu(l, r) || {};
            return bn(s, a, (f) => {
                let c = hl(u, o, f);
                return (
                    f === c &&
                        typeof f == "string" &&
                        (c = hl(u, o, `${t}${f === "default" ? "" : W(f)}`, f)),
                    n === !1 ? c : { [n]: c }
                );
            });
        };
    return (i.propTypes = {}), (i.filterProps = [t]), i;
}
function uu(...e) {
    const t = e.reduce(
            (r, o) => (
                o.filterProps.forEach((i) => {
                    r[i] = o;
                }),
                r
            ),
            {}
        ),
        n = (r) =>
            Object.keys(r).reduce((o, i) => (t[i] ? Qi(o, t[i](r)) : o), {});
    return (
        (n.propTypes = {}),
        (n.filterProps = e.reduce((r, o) => r.concat(o.filterProps), [])),
        n
    );
}
function v2(e) {
    const t = {};
    return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
const b2 = { m: "margin", p: "padding" },
    x2 = {
        t: "Top",
        r: "Right",
        b: "Bottom",
        l: "Left",
        x: ["Left", "Right"],
        y: ["Top", "Bottom"],
    },
    Um = { marginX: "mx", marginY: "my", paddingX: "px", paddingY: "py" },
    w2 = v2((e) => {
        if (e.length > 2)
            if (Um[e]) e = Um[e];
            else return [e];
        const [t, n] = e.split(""),
            r = b2[t],
            o = x2[n] || "";
        return Array.isArray(o) ? o.map((i) => r + i) : [r + o];
    }),
    fp = [
        "m",
        "mt",
        "mr",
        "mb",
        "ml",
        "mx",
        "my",
        "margin",
        "marginTop",
        "marginRight",
        "marginBottom",
        "marginLeft",
        "marginX",
        "marginY",
        "marginInline",
        "marginInlineStart",
        "marginInlineEnd",
        "marginBlock",
        "marginBlockStart",
        "marginBlockEnd",
    ],
    pp = [
        "p",
        "pt",
        "pr",
        "pb",
        "pl",
        "px",
        "py",
        "padding",
        "paddingTop",
        "paddingRight",
        "paddingBottom",
        "paddingLeft",
        "paddingX",
        "paddingY",
        "paddingInline",
        "paddingInlineStart",
        "paddingInlineEnd",
        "paddingBlock",
        "paddingBlockStart",
        "paddingBlockEnd",
    ];
[...fp, ...pp];
function Bs(e, t, n, r) {
    var o;
    const i = (o = lu(e, t, !1)) != null ? o : n;
    return typeof i == "number"
        ? (s) => (typeof s == "string" ? s : i * s)
        : Array.isArray(i)
        ? (s) => (typeof s == "string" ? s : i[s])
        : typeof i == "function"
        ? i
        : () => {};
}
function hp(e) {
    return Bs(e, "spacing", 8);
}
function di(e, t) {
    if (typeof t == "string" || t == null) return t;
    const n = Math.abs(t),
        r = e(n);
    return t >= 0 ? r : typeof r == "number" ? -r : `-${r}`;
}
function S2(e, t) {
    return (n) => e.reduce((r, o) => ((r[o] = di(t, n)), r), {});
}
function C2(e, t, n, r) {
    if (t.indexOf(n) === -1) return null;
    const o = w2(n),
        i = S2(o, r),
        s = e[n];
    return bn(e, s, i);
}
function e1(e, t) {
    const n = hp(e.theme);
    return Object.keys(e)
        .map((r) => C2(e, t, r, n))
        .reduce(Qi, {});
}
function Ge(e) {
    return e1(e, fp);
}
Ge.propTypes = {};
Ge.filterProps = fp;
function qe(e) {
    return e1(e, pp);
}
qe.propTypes = {};
qe.filterProps = pp;
function Rn(e) {
    return typeof e != "number" ? e : `${e}px solid`;
}
const k2 = Ee({ prop: "border", themeKey: "borders", transform: Rn }),
    E2 = Ee({ prop: "borderTop", themeKey: "borders", transform: Rn }),
    R2 = Ee({ prop: "borderRight", themeKey: "borders", transform: Rn }),
    P2 = Ee({ prop: "borderBottom", themeKey: "borders", transform: Rn }),
    $2 = Ee({ prop: "borderLeft", themeKey: "borders", transform: Rn }),
    T2 = Ee({ prop: "borderColor", themeKey: "palette" }),
    I2 = Ee({ prop: "borderTopColor", themeKey: "palette" }),
    O2 = Ee({ prop: "borderRightColor", themeKey: "palette" }),
    M2 = Ee({ prop: "borderBottomColor", themeKey: "palette" }),
    _2 = Ee({ prop: "borderLeftColor", themeKey: "palette" }),
    cu = (e) => {
        if (e.borderRadius !== void 0 && e.borderRadius !== null) {
            const t = Bs(e.theme, "shape.borderRadius", 4),
                n = (r) => ({ borderRadius: di(t, r) });
            return bn(e, e.borderRadius, n);
        }
        return null;
    };
cu.propTypes = {};
cu.filterProps = ["borderRadius"];
uu(k2, E2, R2, P2, $2, T2, I2, O2, M2, _2, cu);
const du = (e) => {
    if (e.gap !== void 0 && e.gap !== null) {
        const t = Bs(e.theme, "spacing", 8),
            n = (r) => ({ gap: di(t, r) });
        return bn(e, e.gap, n);
    }
    return null;
};
du.propTypes = {};
du.filterProps = ["gap"];
const fu = (e) => {
    if (e.columnGap !== void 0 && e.columnGap !== null) {
        const t = Bs(e.theme, "spacing", 8),
            n = (r) => ({ columnGap: di(t, r) });
        return bn(e, e.columnGap, n);
    }
    return null;
};
fu.propTypes = {};
fu.filterProps = ["columnGap"];
const pu = (e) => {
    if (e.rowGap !== void 0 && e.rowGap !== null) {
        const t = Bs(e.theme, "spacing", 8),
            n = (r) => ({ rowGap: di(t, r) });
        return bn(e, e.rowGap, n);
    }
    return null;
};
pu.propTypes = {};
pu.filterProps = ["rowGap"];
const N2 = Ee({ prop: "gridColumn" }),
    A2 = Ee({ prop: "gridRow" }),
    L2 = Ee({ prop: "gridAutoFlow" }),
    D2 = Ee({ prop: "gridAutoColumns" }),
    z2 = Ee({ prop: "gridAutoRows" }),
    F2 = Ee({ prop: "gridTemplateColumns" }),
    B2 = Ee({ prop: "gridTemplateRows" }),
    U2 = Ee({ prop: "gridTemplateAreas" }),
    W2 = Ee({ prop: "gridArea" });
uu(du, fu, pu, N2, A2, L2, D2, z2, F2, B2, U2, W2);
function Ko(e, t) {
    return t === "grey" ? t : e;
}
const j2 = Ee({ prop: "color", themeKey: "palette", transform: Ko }),
    V2 = Ee({
        prop: "bgcolor",
        cssProperty: "backgroundColor",
        themeKey: "palette",
        transform: Ko,
    }),
    H2 = Ee({ prop: "backgroundColor", themeKey: "palette", transform: Ko });
uu(j2, V2, H2);
function Bt(e) {
    return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const K2 = Ee({ prop: "width", transform: Bt }),
    mp = (e) => {
        if (e.maxWidth !== void 0 && e.maxWidth !== null) {
            const t = (n) => {
                var r, o, i;
                return {
                    maxWidth:
                        ((r = e.theme) == null ||
                        (o = r.breakpoints) == null ||
                        (i = o.values) == null
                            ? void 0
                            : i[n]) ||
                        dp[n] ||
                        Bt(n),
                };
            };
            return bn(e, e.maxWidth, t);
        }
        return null;
    };
mp.filterProps = ["maxWidth"];
const G2 = Ee({ prop: "minWidth", transform: Bt }),
    q2 = Ee({ prop: "height", transform: Bt }),
    Y2 = Ee({ prop: "maxHeight", transform: Bt }),
    X2 = Ee({ prop: "minHeight", transform: Bt });
Ee({ prop: "size", cssProperty: "width", transform: Bt });
Ee({ prop: "size", cssProperty: "height", transform: Bt });
const Q2 = Ee({ prop: "boxSizing" });
uu(K2, mp, G2, q2, Y2, X2, Q2);
const J2 = {
        border: { themeKey: "borders", transform: Rn },
        borderTop: { themeKey: "borders", transform: Rn },
        borderRight: { themeKey: "borders", transform: Rn },
        borderBottom: { themeKey: "borders", transform: Rn },
        borderLeft: { themeKey: "borders", transform: Rn },
        borderColor: { themeKey: "palette" },
        borderTopColor: { themeKey: "palette" },
        borderRightColor: { themeKey: "palette" },
        borderBottomColor: { themeKey: "palette" },
        borderLeftColor: { themeKey: "palette" },
        borderRadius: { themeKey: "shape.borderRadius", style: cu },
        color: { themeKey: "palette", transform: Ko },
        bgcolor: {
            themeKey: "palette",
            cssProperty: "backgroundColor",
            transform: Ko,
        },
        backgroundColor: { themeKey: "palette", transform: Ko },
        p: { style: qe },
        pt: { style: qe },
        pr: { style: qe },
        pb: { style: qe },
        pl: { style: qe },
        px: { style: qe },
        py: { style: qe },
        padding: { style: qe },
        paddingTop: { style: qe },
        paddingRight: { style: qe },
        paddingBottom: { style: qe },
        paddingLeft: { style: qe },
        paddingX: { style: qe },
        paddingY: { style: qe },
        paddingInline: { style: qe },
        paddingInlineStart: { style: qe },
        paddingInlineEnd: { style: qe },
        paddingBlock: { style: qe },
        paddingBlockStart: { style: qe },
        paddingBlockEnd: { style: qe },
        m: { style: Ge },
        mt: { style: Ge },
        mr: { style: Ge },
        mb: { style: Ge },
        ml: { style: Ge },
        mx: { style: Ge },
        my: { style: Ge },
        margin: { style: Ge },
        marginTop: { style: Ge },
        marginRight: { style: Ge },
        marginBottom: { style: Ge },
        marginLeft: { style: Ge },
        marginX: { style: Ge },
        marginY: { style: Ge },
        marginInline: { style: Ge },
        marginInlineStart: { style: Ge },
        marginInlineEnd: { style: Ge },
        marginBlock: { style: Ge },
        marginBlockStart: { style: Ge },
        marginBlockEnd: { style: Ge },
        displayPrint: {
            cssProperty: !1,
            transform: (e) => ({ "@media print": { display: e } }),
        },
        display: {},
        overflow: {},
        textOverflow: {},
        visibility: {},
        whiteSpace: {},
        flexBasis: {},
        flexDirection: {},
        flexWrap: {},
        justifyContent: {},
        alignItems: {},
        alignContent: {},
        order: {},
        flex: {},
        flexGrow: {},
        flexShrink: {},
        alignSelf: {},
        justifyItems: {},
        justifySelf: {},
        gap: { style: du },
        rowGap: { style: pu },
        columnGap: { style: fu },
        gridColumn: {},
        gridRow: {},
        gridAutoFlow: {},
        gridAutoColumns: {},
        gridAutoRows: {},
        gridTemplateColumns: {},
        gridTemplateRows: {},
        gridTemplateAreas: {},
        gridArea: {},
        position: {},
        zIndex: { themeKey: "zIndex" },
        top: {},
        right: {},
        bottom: {},
        left: {},
        boxShadow: { themeKey: "shadows" },
        width: { transform: Bt },
        maxWidth: { style: mp },
        minWidth: { transform: Bt },
        height: { transform: Bt },
        maxHeight: { transform: Bt },
        minHeight: { transform: Bt },
        boxSizing: {},
        fontFamily: { themeKey: "typography" },
        fontSize: { themeKey: "typography" },
        fontStyle: { themeKey: "typography" },
        fontWeight: { themeKey: "typography" },
        letterSpacing: {},
        textTransform: {},
        lineHeight: {},
        textAlign: {},
        typography: { cssProperty: !1, themeKey: "typography" },
    },
    hu = J2;
function Z2(...e) {
    const t = e.reduce((r, o) => r.concat(Object.keys(o)), []),
        n = new Set(t);
    return e.every((r) => n.size === Object.keys(r).length);
}
function eR(e, t) {
    return typeof e == "function" ? e(t) : e;
}
function tR() {
    function e(n, r, o, i) {
        const s = { [n]: r, theme: o },
            a = i[n];
        if (!a) return { [n]: r };
        const { cssProperty: l = n, themeKey: u, transform: d, style: f } = a;
        if (r == null) return null;
        const c = lu(o, u) || {};
        return f
            ? f(s)
            : bn(s, r, (g) => {
                  let p = hl(c, d, g);
                  return (
                      g === p &&
                          typeof g == "string" &&
                          (p = hl(
                              c,
                              d,
                              `${n}${g === "default" ? "" : W(g)}`,
                              g
                          )),
                      l === !1 ? p : { [l]: p }
                  );
              });
    }
    function t(n) {
        var r;
        const { sx: o, theme: i = {} } = n || {};
        if (!o) return null;
        const s = (r = i.unstable_sxConfig) != null ? r : hu;
        function a(l) {
            let u = l;
            if (typeof l == "function") u = l(i);
            else if (typeof l != "object") return l;
            if (!u) return null;
            const d = J0(i.breakpoints),
                f = Object.keys(d);
            let c = d;
            return (
                Object.keys(u).forEach((h) => {
                    const g = eR(u[h], i);
                    if (g != null)
                        if (typeof g == "object")
                            if (s[h]) c = Qi(c, e(h, g, i, s));
                            else {
                                const p = bn({ theme: i }, g, (S) => ({
                                    [h]: S,
                                }));
                                Z2(p, g)
                                    ? (c[h] = t({ sx: g, theme: i }))
                                    : (c = Qi(c, p));
                            }
                        else c = Qi(c, e(h, g, i, s));
                }),
                Z0(f, c)
            );
        }
        return Array.isArray(o) ? o.map(a) : a(o);
    }
    return t;
}
const t1 = tR();
t1.filterProps = ["sx"];
const mu = t1,
    nR = ["sx"],
    rR = (e) => {
        var t, n;
        const r = { systemProps: {}, otherProps: {} },
            o =
                (t =
                    e == null || (n = e.theme) == null
                        ? void 0
                        : n.unstable_sxConfig) != null
                    ? t
                    : hu;
        return (
            Object.keys(e).forEach((i) => {
                o[i] ? (r.systemProps[i] = e[i]) : (r.otherProps[i] = e[i]);
            }),
            r
        );
    };
function gp(e) {
    const { sx: t } = e,
        n = Q(e, nR),
        { systemProps: r, otherProps: o } = rR(n);
    let i;
    return (
        Array.isArray(t)
            ? (i = [r, ...t])
            : typeof t == "function"
            ? (i = (...s) => {
                  const a = t(...s);
                  return Fr(a) ? w({}, r, a) : r;
              })
            : (i = w({}, r, t)),
        w({}, o, { sx: i })
    );
}
function n1(e) {
    var t,
        n,
        r = "";
    if (typeof e == "string" || typeof e == "number") r += e;
    else if (typeof e == "object")
        if (Array.isArray(e))
            for (t = 0; t < e.length; t++)
                e[t] && (n = n1(e[t])) && (r && (r += " "), (r += n));
        else for (t in e) e[t] && (r && (r += " "), (r += t));
    return r;
}
function J() {
    for (var e, t, n = 0, r = ""; n < arguments.length; )
        (e = arguments[n++]) && (t = n1(e)) && (r && (r += " "), (r += t));
    return r;
}
const oR = ["values", "unit", "step"],
    iR = (e) => {
        const t = Object.keys(e).map((n) => ({ key: n, val: e[n] })) || [];
        return (
            t.sort((n, r) => n.val - r.val),
            t.reduce((n, r) => w({}, n, { [r.key]: r.val }), {})
        );
    };
function sR(e) {
    const {
            values: t = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
            unit: n = "px",
            step: r = 5,
        } = e,
        o = Q(e, oR),
        i = iR(t),
        s = Object.keys(i);
    function a(c) {
        return `@media (min-width:${typeof t[c] == "number" ? t[c] : c}${n})`;
    }
    function l(c) {
        return `@media (max-width:${
            (typeof t[c] == "number" ? t[c] : c) - r / 100
        }${n})`;
    }
    function u(c, h) {
        const g = s.indexOf(h);
        return `@media (min-width:${
            typeof t[c] == "number" ? t[c] : c
        }${n}) and (max-width:${
            (g !== -1 && typeof t[s[g]] == "number" ? t[s[g]] : h) - r / 100
        }${n})`;
    }
    function d(c) {
        return s.indexOf(c) + 1 < s.length ? u(c, s[s.indexOf(c) + 1]) : a(c);
    }
    function f(c) {
        const h = s.indexOf(c);
        return h === 0
            ? a(s[1])
            : h === s.length - 1
            ? l(s[h])
            : u(c, s[s.indexOf(c) + 1]).replace("@media", "@media not all and");
    }
    return w(
        {
            keys: s,
            values: i,
            up: a,
            down: l,
            between: u,
            only: d,
            not: f,
            unit: n,
        },
        o
    );
}
const aR = { borderRadius: 4 },
    lR = aR;
function uR(e = 8) {
    if (e.mui) return e;
    const t = hp({ spacing: e }),
        n = (...r) =>
            (r.length === 0 ? [1] : r)
                .map((i) => {
                    const s = t(i);
                    return typeof s == "number" ? `${s}px` : s;
                })
                .join(" ");
    return (n.mui = !0), n;
}
const cR = ["breakpoints", "palette", "spacing", "shape"];
function gu(e = {}, ...t) {
    const {
            breakpoints: n = {},
            palette: r = {},
            spacing: o,
            shape: i = {},
        } = e,
        s = Q(e, cR),
        a = sR(n),
        l = uR(o);
    let u = Nt(
        {
            breakpoints: a,
            direction: "ltr",
            components: {},
            palette: w({ mode: "light" }, r),
            spacing: l,
            shape: w({}, lR, i),
        },
        s
    );
    return (
        (u = t.reduce((d, f) => Nt(d, f), u)),
        (u.unstable_sxConfig = w(
            {},
            hu,
            s == null ? void 0 : s.unstable_sxConfig
        )),
        (u.unstable_sx = function (f) {
            return mu({ sx: f, theme: this });
        }),
        u
    );
}
const dR = b.createContext(null),
    r1 = dR;
function o1() {
    return b.useContext(r1);
}
const fR = typeof Symbol == "function" && Symbol.for,
    pR = fR ? Symbol.for("mui.nested") : "__THEME_NESTED__";
function hR(e, t) {
    return typeof t == "function" ? t(e) : w({}, e, t);
}
function mR(e) {
    const { children: t, theme: n } = e,
        r = o1(),
        o = b.useMemo(() => {
            const i = r === null ? n : hR(r, n);
            return i != null && (i[pR] = r !== null), i;
        }, [n, r]);
    return E(r1.Provider, { value: o, children: t });
}
function gR(e) {
    return Object.keys(e).length === 0;
}
function yR(e = null) {
    const t = o1();
    return !t || gR(t) ? e : t;
}
const vR = gu();
function yu(e = vR) {
    return yR(e);
}
const bR = ["className", "component"];
function xR(e = {}) {
    const {
            defaultTheme: t,
            defaultClassName: n = "MuiBox-root",
            generateClassName: r,
        } = e,
        o = Q0("div", {
            shouldForwardProp: (s) => s !== "theme" && s !== "sx" && s !== "as",
        })(mu);
    return b.forwardRef(function (a, l) {
        const u = yu(t),
            d = gp(a),
            { className: f, component: c = "div" } = d,
            h = Q(d, bR);
        return E(
            o,
            w({ as: c, ref: l, className: J(f, r ? r(n) : n), theme: u }, h)
        );
    });
}
const wR = ["variant"];
function Wm(e) {
    return e.length === 0;
}
function i1(e) {
    const { variant: t } = e,
        n = Q(e, wR);
    let r = t || "";
    return (
        Object.keys(n)
            .sort()
            .forEach((o) => {
                o === "color"
                    ? (r += Wm(r) ? e[o] : W(e[o]))
                    : (r += `${Wm(r) ? o : W(o)}${W(e[o].toString())}`);
            }),
        r
    );
}
const SR = [
        "name",
        "slot",
        "skipVariantsResolver",
        "skipSx",
        "overridesResolver",
    ],
    CR = ["theme"],
    kR = ["theme"];
function $i(e) {
    return Object.keys(e).length === 0;
}
function ER(e) {
    return typeof e == "string" && e.charCodeAt(0) > 96;
}
const RR = (e, t) =>
        t.components && t.components[e] && t.components[e].styleOverrides
            ? t.components[e].styleOverrides
            : null,
    PR = (e, t) => {
        let n = [];
        t &&
            t.components &&
            t.components[e] &&
            t.components[e].variants &&
            (n = t.components[e].variants);
        const r = {};
        return (
            n.forEach((o) => {
                const i = i1(o.props);
                r[i] = o.style;
            }),
            r
        );
    },
    $R = (e, t, n, r) => {
        var o, i;
        const { ownerState: s = {} } = e,
            a = [],
            l =
                n == null || (o = n.components) == null || (i = o[r]) == null
                    ? void 0
                    : i.variants;
        return (
            l &&
                l.forEach((u) => {
                    let d = !0;
                    Object.keys(u.props).forEach((f) => {
                        s[f] !== u.props[f] && e[f] !== u.props[f] && (d = !1);
                    }),
                        d && a.push(t[i1(u.props)]);
                }),
            a
        );
    };
function Ji(e) {
    return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const TR = gu();
function s1(e = {}) {
    const {
            defaultTheme: t = TR,
            rootShouldForwardProp: n = Ji,
            slotShouldForwardProp: r = Ji,
        } = e,
        o = (i) => {
            const s = $i(i.theme) ? t : i.theme;
            return mu(w({}, i, { theme: s }));
        };
    return (
        (o.__mui_systemSx = !0),
        (i, s = {}) => {
            m2(i, (v) => v.filter((x) => !(x != null && x.__mui_systemSx)));
            const {
                    name: a,
                    slot: l,
                    skipVariantsResolver: u,
                    skipSx: d,
                    overridesResolver: f,
                } = s,
                c = Q(s, SR),
                h = u !== void 0 ? u : (l && l !== "Root") || !1,
                g = d || !1;
            let p,
                S = Ji;
            l === "Root" ? (S = n) : l ? (S = r) : ER(i) && (S = void 0);
            const y = Q0(i, w({ shouldForwardProp: S, label: p }, c)),
                m = (v, ...x) => {
                    const k = x
                        ? x.map((I) =>
                              typeof I == "function" && I.__emotion_real !== I
                                  ? (P) => {
                                        let { theme: D } = P,
                                            K = Q(P, CR);
                                        return I(
                                            w({ theme: $i(D) ? t : D }, K)
                                        );
                                    }
                                  : I
                          )
                        : [];
                    let R = v;
                    a &&
                        f &&
                        k.push((I) => {
                            const P = $i(I.theme) ? t : I.theme,
                                D = RR(a, P);
                            if (D) {
                                const K = {};
                                return (
                                    Object.entries(D).forEach(([j, N]) => {
                                        K[j] =
                                            typeof N == "function"
                                                ? N(w({}, I, { theme: P }))
                                                : N;
                                    }),
                                    f(I, K)
                                );
                            }
                            return null;
                        }),
                        a &&
                            !h &&
                            k.push((I) => {
                                const P = $i(I.theme) ? t : I.theme;
                                return $R(I, PR(a, P), P, a);
                            }),
                        g || k.push(o);
                    const C = k.length - x.length;
                    if (Array.isArray(v) && C > 0) {
                        const I = new Array(C).fill("");
                        (R = [...v, ...I]), (R.raw = [...v.raw, ...I]);
                    } else
                        typeof v == "function" &&
                            v.__emotion_real !== v &&
                            (R = (I) => {
                                let { theme: P } = I,
                                    D = Q(I, kR);
                                return v(w({ theme: $i(P) ? t : P }, D));
                            });
                    return y(R, ...k);
                };
            return y.withConfig && (m.withConfig = y.withConfig), m;
        }
    );
}
const IR = s1(),
    OR = IR;
function MR(e) {
    const { theme: t, name: n, props: r } = e;
    return !t ||
        !t.components ||
        !t.components[n] ||
        !t.components[n].defaultProps
        ? r
        : op(t.components[n].defaultProps, r);
}
function a1({ props: e, name: t, defaultTheme: n }) {
    const r = yu(n);
    return MR({ theme: r, name: t, props: e });
}
function yp(e, t = 0, n = 1) {
    return Math.min(Math.max(t, e), n);
}
function _R(e) {
    e = e.slice(1);
    const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
    let n = e.match(t);
    return (
        n && n[0].length === 1 && (n = n.map((r) => r + r)),
        n
            ? `rgb${n.length === 4 ? "a" : ""}(${n
                  .map((r, o) =>
                      o < 3
                          ? parseInt(r, 16)
                          : Math.round((parseInt(r, 16) / 255) * 1e3) / 1e3
                  )
                  .join(", ")})`
            : ""
    );
}
function to(e) {
    if (e.type) return e;
    if (e.charAt(0) === "#") return to(_R(e));
    const t = e.indexOf("("),
        n = e.substring(0, t);
    if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(n) === -1)
        throw new Error(Kn(9, e));
    let r = e.substring(t + 1, e.length - 1),
        o;
    if (n === "color") {
        if (
            ((r = r.split(" ")),
            (o = r.shift()),
            r.length === 4 && r[3].charAt(0) === "/" && (r[3] = r[3].slice(1)),
            [
                "srgb",
                "display-p3",
                "a98-rgb",
                "prophoto-rgb",
                "rec-2020",
            ].indexOf(o) === -1)
        )
            throw new Error(Kn(10, o));
    } else r = r.split(",");
    return (
        (r = r.map((i) => parseFloat(i))), { type: n, values: r, colorSpace: o }
    );
}
function vu(e) {
    const { type: t, colorSpace: n } = e;
    let { values: r } = e;
    return (
        t.indexOf("rgb") !== -1
            ? (r = r.map((o, i) => (i < 3 ? parseInt(o, 10) : o)))
            : t.indexOf("hsl") !== -1 &&
              ((r[1] = `${r[1]}%`), (r[2] = `${r[2]}%`)),
        t.indexOf("color") !== -1
            ? (r = `${n} ${r.join(" ")}`)
            : (r = `${r.join(", ")}`),
        `${t}(${r})`
    );
}
function NR(e) {
    e = to(e);
    const { values: t } = e,
        n = t[0],
        r = t[1] / 100,
        o = t[2] / 100,
        i = r * Math.min(o, 1 - o),
        s = (u, d = (u + n / 30) % 12) =>
            o - i * Math.max(Math.min(d - 3, 9 - d, 1), -1);
    let a = "rgb";
    const l = [
        Math.round(s(0) * 255),
        Math.round(s(8) * 255),
        Math.round(s(4) * 255),
    ];
    return (
        e.type === "hsla" && ((a += "a"), l.push(t[3])),
        vu({ type: a, values: l })
    );
}
function jm(e) {
    e = to(e);
    let t = e.type === "hsl" || e.type === "hsla" ? to(NR(e)).values : e.values;
    return (
        (t = t.map(
            (n) => (
                e.type !== "color" && (n /= 255),
                n <= 0.03928 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4
            )
        )),
        Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3))
    );
}
function AR(e, t) {
    const n = jm(e),
        r = jm(t);
    return (Math.max(n, r) + 0.05) / (Math.min(n, r) + 0.05);
}
function Me(e, t) {
    return (
        (e = to(e)),
        (t = yp(t)),
        (e.type === "rgb" || e.type === "hsl") && (e.type += "a"),
        e.type === "color" ? (e.values[3] = `/${t}`) : (e.values[3] = t),
        vu(e)
    );
}
function LR(e, t) {
    if (((e = to(e)), (t = yp(t)), e.type.indexOf("hsl") !== -1))
        e.values[2] *= 1 - t;
    else if (e.type.indexOf("rgb") !== -1 || e.type.indexOf("color") !== -1)
        for (let n = 0; n < 3; n += 1) e.values[n] *= 1 - t;
    return vu(e);
}
function DR(e, t) {
    if (((e = to(e)), (t = yp(t)), e.type.indexOf("hsl") !== -1))
        e.values[2] += (100 - e.values[2]) * t;
    else if (e.type.indexOf("rgb") !== -1)
        for (let n = 0; n < 3; n += 1) e.values[n] += (255 - e.values[n]) * t;
    else if (e.type.indexOf("color") !== -1)
        for (let n = 0; n < 3; n += 1) e.values[n] += (1 - e.values[n]) * t;
    return vu(e);
}
const zR = {};
function FR(e) {
    const t = yu();
    return E(up.Provider, {
        value: typeof t == "object" ? t : zR,
        children: e.children,
    });
}
function BR(e) {
    const { children: t, theme: n } = e;
    return E(mR, { theme: n, children: E(FR, { children: t }) });
}
const UR = [
        "className",
        "component",
        "disableGutters",
        "fixed",
        "maxWidth",
        "classes",
    ],
    WR = gu(),
    jR = OR("div", {
        name: "MuiContainer",
        slot: "Root",
        overridesResolver: (e, t) => {
            const { ownerState: n } = e;
            return [
                t.root,
                t[`maxWidth${W(String(n.maxWidth))}`],
                n.fixed && t.fixed,
                n.disableGutters && t.disableGutters,
            ];
        },
    }),
    VR = (e) => a1({ props: e, name: "MuiContainer", defaultTheme: WR }),
    HR = (e, t) => {
        const n = (l) => fe(t, l),
            { classes: r, fixed: o, disableGutters: i, maxWidth: s } = e,
            a = {
                root: [
                    "root",
                    s && `maxWidth${W(String(s))}`,
                    o && "fixed",
                    i && "disableGutters",
                ],
            };
        return pe(a, n, r);
    };
function l1(e = {}) {
    const {
            createStyledComponent: t = jR,
            useThemeProps: n = VR,
            componentName: r = "MuiContainer",
        } = e,
        o = t(
            ({ theme: s, ownerState: a }) =>
                w(
                    {
                        width: "100%",
                        marginLeft: "auto",
                        boxSizing: "border-box",
                        marginRight: "auto",
                        display: "block",
                    },
                    !a.disableGutters && {
                        paddingLeft: s.spacing(2),
                        paddingRight: s.spacing(2),
                        [s.breakpoints.up("sm")]: {
                            paddingLeft: s.spacing(3),
                            paddingRight: s.spacing(3),
                        },
                    }
                ),
            ({ theme: s, ownerState: a }) =>
                a.fixed &&
                Object.keys(s.breakpoints.values).reduce((l, u) => {
                    const d = u,
                        f = s.breakpoints.values[d];
                    return (
                        f !== 0 &&
                            (l[s.breakpoints.up(d)] = {
                                maxWidth: `${f}${s.breakpoints.unit}`,
                            }),
                        l
                    );
                }, {}),
            ({ theme: s, ownerState: a }) =>
                w(
                    {},
                    a.maxWidth === "xs" && {
                        [s.breakpoints.up("xs")]: {
                            maxWidth: Math.max(s.breakpoints.values.xs, 444),
                        },
                    },
                    a.maxWidth &&
                        a.maxWidth !== "xs" && {
                            [s.breakpoints.up(a.maxWidth)]: {
                                maxWidth: `${s.breakpoints.values[a.maxWidth]}${
                                    s.breakpoints.unit
                                }`,
                            },
                        }
                )
        );
    return b.forwardRef(function (a, l) {
        const u = n(a),
            {
                className: d,
                component: f = "div",
                disableGutters: c = !1,
                fixed: h = !1,
                maxWidth: g = "lg",
            } = u,
            p = Q(u, UR),
            S = w({}, u, {
                component: f,
                disableGutters: c,
                fixed: h,
                maxWidth: g,
            }),
            y = HR(S, r);
        return E(
            o,
            w({ as: f, ownerState: S, className: J(y.root, d), ref: l }, p)
        );
    });
}
const KR = l1(),
    GR = KR;
function qR(e, t) {
    return w(
        {
            toolbar: {
                minHeight: 56,
                [e.up("xs")]: {
                    "@media (orientation: landscape)": { minHeight: 48 },
                },
                [e.up("sm")]: { minHeight: 64 },
            },
        },
        t
    );
}
const YR = ["mode", "contrastThreshold", "tonalOffset"],
    Vm = {
        text: {
            primary: "rgba(0, 0, 0, 0.87)",
            secondary: "rgba(0, 0, 0, 0.6)",
            disabled: "rgba(0, 0, 0, 0.38)",
        },
        divider: "rgba(0, 0, 0, 0.12)",
        background: { paper: Es.white, default: Es.white },
        action: {
            active: "rgba(0, 0, 0, 0.54)",
            hover: "rgba(0, 0, 0, 0.04)",
            hoverOpacity: 0.04,
            selected: "rgba(0, 0, 0, 0.08)",
            selectedOpacity: 0.08,
            disabled: "rgba(0, 0, 0, 0.26)",
            disabledBackground: "rgba(0, 0, 0, 0.12)",
            disabledOpacity: 0.38,
            focus: "rgba(0, 0, 0, 0.12)",
            focusOpacity: 0.12,
            activatedOpacity: 0.12,
        },
    },
    pc = {
        text: {
            primary: Es.white,
            secondary: "rgba(255, 255, 255, 0.7)",
            disabled: "rgba(255, 255, 255, 0.5)",
            icon: "rgba(255, 255, 255, 0.5)",
        },
        divider: "rgba(255, 255, 255, 0.12)",
        background: { paper: "#121212", default: "#121212" },
        action: {
            active: Es.white,
            hover: "rgba(255, 255, 255, 0.08)",
            hoverOpacity: 0.08,
            selected: "rgba(255, 255, 255, 0.16)",
            selectedOpacity: 0.16,
            disabled: "rgba(255, 255, 255, 0.3)",
            disabledBackground: "rgba(255, 255, 255, 0.12)",
            disabledOpacity: 0.38,
            focus: "rgba(255, 255, 255, 0.12)",
            focusOpacity: 0.12,
            activatedOpacity: 0.24,
        },
    };
function Hm(e, t, n, r) {
    const o = r.light || r,
        i = r.dark || r * 1.5;
    e[t] ||
        (e.hasOwnProperty(n)
            ? (e[t] = e[n])
            : t === "light"
            ? (e.light = DR(e.main, o))
            : t === "dark" && (e.dark = LR(e.main, i)));
}
function XR(e = "light") {
    return e === "dark"
        ? { main: fo[200], light: fo[50], dark: fo[400] }
        : { main: fo[700], light: fo[400], dark: fo[800] };
}
function QR(e = "light") {
    return e === "dark"
        ? { main: co[200], light: co[50], dark: co[400] }
        : { main: co[500], light: co[300], dark: co[700] };
}
function JR(e = "light") {
    return e === "dark"
        ? { main: uo[500], light: uo[300], dark: uo[700] }
        : { main: uo[700], light: uo[400], dark: uo[800] };
}
function ZR(e = "light") {
    return e === "dark"
        ? { main: po[400], light: po[300], dark: po[700] }
        : { main: po[700], light: po[500], dark: po[900] };
}
function eP(e = "light") {
    return e === "dark"
        ? { main: ho[400], light: ho[300], dark: ho[700] }
        : { main: ho[800], light: ho[500], dark: ho[900] };
}
function tP(e = "light") {
    return e === "dark"
        ? { main: Ri[400], light: Ri[300], dark: Ri[700] }
        : { main: "#ed6c02", light: Ri[500], dark: Ri[900] };
}
function nP(e) {
    const {
            mode: t = "light",
            contrastThreshold: n = 3,
            tonalOffset: r = 0.2,
        } = e,
        o = Q(e, YR),
        i = e.primary || XR(t),
        s = e.secondary || QR(t),
        a = e.error || JR(t),
        l = e.info || ZR(t),
        u = e.success || eP(t),
        d = e.warning || tP(t);
    function f(p) {
        return AR(p, pc.text.primary) >= n ? pc.text.primary : Vm.text.primary;
    }
    const c = ({
            color: p,
            name: S,
            mainShade: y = 500,
            lightShade: m = 300,
            darkShade: v = 700,
        }) => {
            if (
                ((p = w({}, p)),
                !p.main && p[y] && (p.main = p[y]),
                !p.hasOwnProperty("main"))
            )
                throw new Error(Kn(11, S ? ` (${S})` : "", y));
            if (typeof p.main != "string")
                throw new Error(
                    Kn(12, S ? ` (${S})` : "", JSON.stringify(p.main))
                );
            return (
                Hm(p, "light", m, r),
                Hm(p, "dark", v, r),
                p.contrastText || (p.contrastText = f(p.main)),
                p
            );
        },
        h = { dark: pc, light: Vm };
    return Nt(
        w(
            {
                common: w({}, Es),
                mode: t,
                primary: c({ color: i, name: "primary" }),
                secondary: c({
                    color: s,
                    name: "secondary",
                    mainShade: "A400",
                    lightShade: "A200",
                    darkShade: "A700",
                }),
                error: c({ color: a, name: "error" }),
                warning: c({ color: d, name: "warning" }),
                info: c({ color: l, name: "info" }),
                success: c({ color: u, name: "success" }),
                grey: aE,
                contrastThreshold: n,
                getContrastText: f,
                augmentColor: c,
                tonalOffset: r,
            },
            h[t]
        ),
        o
    );
}
const rP = [
    "fontFamily",
    "fontSize",
    "fontWeightLight",
    "fontWeightRegular",
    "fontWeightMedium",
    "fontWeightBold",
    "htmlFontSize",
    "allVariants",
    "pxToRem",
];
function oP(e) {
    return Math.round(e * 1e5) / 1e5;
}
const Km = { textTransform: "uppercase" },
    Gm = '"Roboto", "Helvetica", "Arial", sans-serif';
function iP(e, t) {
    const n = typeof t == "function" ? t(e) : t,
        {
            fontFamily: r = Gm,
            fontSize: o = 14,
            fontWeightLight: i = 300,
            fontWeightRegular: s = 400,
            fontWeightMedium: a = 500,
            fontWeightBold: l = 700,
            htmlFontSize: u = 16,
            allVariants: d,
            pxToRem: f,
        } = n,
        c = Q(n, rP),
        h = o / 14,
        g = f || ((y) => `${(y / u) * h}rem`),
        p = (y, m, v, x, k) =>
            w(
                { fontFamily: r, fontWeight: y, fontSize: g(m), lineHeight: v },
                r === Gm ? { letterSpacing: `${oP(x / m)}em` } : {},
                k,
                d
            ),
        S = {
            h1: p(i, 96, 1.167, -1.5),
            h2: p(i, 60, 1.2, -0.5),
            h3: p(s, 48, 1.167, 0),
            h4: p(s, 34, 1.235, 0.25),
            h5: p(s, 24, 1.334, 0),
            h6: p(a, 20, 1.6, 0.15),
            subtitle1: p(s, 16, 1.75, 0.15),
            subtitle2: p(a, 14, 1.57, 0.1),
            body1: p(s, 16, 1.5, 0.15),
            body2: p(s, 14, 1.43, 0.15),
            button: p(a, 14, 1.75, 0.4, Km),
            caption: p(s, 12, 1.66, 0.4),
            overline: p(s, 12, 2.66, 1, Km),
        };
    return Nt(
        w(
            {
                htmlFontSize: u,
                pxToRem: g,
                fontFamily: r,
                fontSize: o,
                fontWeightLight: i,
                fontWeightRegular: s,
                fontWeightMedium: a,
                fontWeightBold: l,
            },
            S
        ),
        c,
        { clone: !1 }
    );
}
const sP = 0.2,
    aP = 0.14,
    lP = 0.12;
function Be(...e) {
    return [
        `${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${sP})`,
        `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${aP})`,
        `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${lP})`,
    ].join(",");
}
const uP = [
        "none",
        Be(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0),
        Be(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0),
        Be(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0),
        Be(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0),
        Be(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0),
        Be(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0),
        Be(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1),
        Be(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2),
        Be(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2),
        Be(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3),
        Be(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3),
        Be(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4),
        Be(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4),
        Be(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4),
        Be(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5),
        Be(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5),
        Be(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5),
        Be(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6),
        Be(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6),
        Be(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7),
        Be(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7),
        Be(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7),
        Be(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8),
        Be(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8),
    ],
    cP = uP,
    dP = ["duration", "easing", "delay"],
    fP = {
        easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
        easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
        easeIn: "cubic-bezier(0.4, 0, 1, 1)",
        sharp: "cubic-bezier(0.4, 0, 0.6, 1)",
    },
    u1 = {
        shortest: 150,
        shorter: 200,
        short: 250,
        standard: 300,
        complex: 375,
        enteringScreen: 225,
        leavingScreen: 195,
    };
function qm(e) {
    return `${Math.round(e)}ms`;
}
function pP(e) {
    if (!e) return 0;
    const t = e / 36;
    return Math.round((4 + 15 * t ** 0.25 + t / 5) * 10);
}
function hP(e) {
    const t = w({}, fP, e.easing),
        n = w({}, u1, e.duration);
    return w(
        {
            getAutoHeightDuration: pP,
            create: (o = ["all"], i = {}) => {
                const {
                    duration: s = n.standard,
                    easing: a = t.easeInOut,
                    delay: l = 0,
                } = i;
                return (
                    Q(i, dP),
                    (Array.isArray(o) ? o : [o])
                        .map(
                            (u) =>
                                `${u} ${
                                    typeof s == "string" ? s : qm(s)
                                } ${a} ${typeof l == "string" ? l : qm(l)}`
                        )
                        .join(",")
                );
            },
        },
        e,
        { easing: t, duration: n }
    );
}
const mP = {
        mobileStepper: 1e3,
        fab: 1050,
        speedDial: 1050,
        appBar: 1100,
        drawer: 1200,
        modal: 1300,
        snackbar: 1400,
        tooltip: 1500,
    },
    gP = mP,
    yP = [
        "breakpoints",
        "mixins",
        "spacing",
        "palette",
        "transitions",
        "typography",
        "shape",
    ];
function vp(e = {}, ...t) {
    const {
            mixins: n = {},
            palette: r = {},
            transitions: o = {},
            typography: i = {},
        } = e,
        s = Q(e, yP);
    if (e.vars) throw new Error(Kn(18));
    const a = nP(r),
        l = gu(e);
    let u = Nt(l, {
        mixins: qR(l.breakpoints, n),
        palette: a,
        shadows: cP.slice(),
        typography: iP(a, i),
        transitions: hP(o),
        zIndex: w({}, gP),
    });
    return (
        (u = Nt(u, s)),
        (u = t.reduce((d, f) => Nt(d, f), u)),
        (u.unstable_sxConfig = w(
            {},
            hu,
            s == null ? void 0 : s.unstable_sxConfig
        )),
        (u.unstable_sx = function (f) {
            return mu({ sx: f, theme: this });
        }),
        u
    );
}
function Ym(e) {
    return String(parseFloat(e)).length === String(e).length;
}
function vP(e) {
    return String(e).match(/[\d.\-+]*\s*(.*)/)[1] || "";
}
function Ir(e) {
    return parseFloat(e);
}
function bP(e) {
    return (t, n) => {
        const r = vP(t);
        if (r === n) return t;
        let o = Ir(t);
        r !== "px" && (r === "em" || r === "rem") && (o = Ir(t) * Ir(e));
        let i = o;
        if (n !== "px")
            if (n === "em") i = o / Ir(e);
            else if (n === "rem") i = o / Ir(e);
            else return t;
        return parseFloat(i.toFixed(5)) + n;
    };
}
function xP({ size: e, grid: t }) {
    const n = e - (e % t),
        r = n + t;
    return e - n < r - e ? n : r;
}
function wP({ lineHeight: e, pixels: t, htmlFontSize: n }) {
    return t / (e * n);
}
function SP({
    cssProperty: e,
    min: t,
    max: n,
    unit: r = "rem",
    breakpoints: o = [600, 900, 1200],
    transform: i = null,
}) {
    const s = { [e]: `${t}${r}` },
        a = (n - t) / o[o.length - 1];
    return (
        o.forEach((l) => {
            let u = t + a * l;
            i !== null && (u = i(u)),
                (s[`@media (min-width:${l}px)`] = {
                    [e]: `${Math.round(u * 1e4) / 1e4}${r}`,
                });
        }),
        s
    );
}
function CP(e, t = {}) {
    const {
            breakpoints: n = ["sm", "md", "lg"],
            disableAlign: r = !1,
            factor: o = 2,
            variants: i = [
                "h1",
                "h2",
                "h3",
                "h4",
                "h5",
                "h6",
                "subtitle1",
                "subtitle2",
                "body1",
                "body2",
                "caption",
                "button",
                "overline",
            ],
        } = t,
        s = w({}, e);
    s.typography = w({}, s.typography);
    const a = s.typography,
        l = bP(a.htmlFontSize),
        u = n.map((d) => s.breakpoints.values[d]);
    return (
        i.forEach((d) => {
            const f = a[d],
                c = parseFloat(l(f.fontSize, "rem"));
            if (c <= 1) return;
            const h = c,
                g = 1 + (h - 1) / o;
            let { lineHeight: p } = f;
            if (!Ym(p) && !r) throw new Error(Kn(6));
            Ym(p) || (p = parseFloat(l(p, "rem")) / parseFloat(c));
            let S = null;
            r ||
                (S = (y) =>
                    xP({
                        size: y,
                        grid: wP({
                            pixels: 4,
                            lineHeight: p,
                            htmlFontSize: a.htmlFontSize,
                        }),
                    })),
                (a[d] = w(
                    {},
                    f,
                    SP({
                        cssProperty: "fontSize",
                        min: g,
                        max: h,
                        unit: "rem",
                        breakpoints: u,
                        transform: S,
                    })
                ));
        }),
        s
    );
}
const kP = vp(),
    bu = kP;
function so() {
    return yu(bu);
}
function ce({ props: e, name: t }) {
    return a1({ props: e, name: t, defaultTheme: bu });
}
const xn = (e) => Ji(e) && e !== "classes",
    EP = Ji,
    RP = s1({ defaultTheme: bu, rootShouldForwardProp: xn }),
    H = RP,
    PP = (e) => {
        let t;
        return (
            e < 1 ? (t = 5.11916 * e ** 2) : (t = 4.5 * Math.log(e + 1) + 2),
            (t / 100).toFixed(2)
        );
    },
    Xm = PP;
function oi(e) {
    return typeof e == "string";
}
function $P(e, t, n) {
    return e === void 0 || oi(e)
        ? t
        : w({}, t, { ownerState: w({}, t.ownerState, n) });
}
function TP(e, t = []) {
    if (e === void 0) return {};
    const n = {};
    return (
        Object.keys(e)
            .filter(
                (r) =>
                    r.match(/^on[A-Z]/) &&
                    typeof e[r] == "function" &&
                    !t.includes(r)
            )
            .forEach((r) => {
                n[r] = e[r];
            }),
        n
    );
}
function Od(e, t) {
    return typeof e == "function" ? e(t) : e;
}
function Qm(e) {
    if (e === void 0) return {};
    const t = {};
    return (
        Object.keys(e)
            .filter((n) => !(n.match(/^on[A-Z]/) && typeof e[n] == "function"))
            .forEach((n) => {
                t[n] = e[n];
            }),
        t
    );
}
function IP(e) {
    const {
        getSlotProps: t,
        additionalProps: n,
        externalSlotProps: r,
        externalForwardedProps: o,
        className: i,
    } = e;
    if (!t) {
        const h = J(
                o == null ? void 0 : o.className,
                r == null ? void 0 : r.className,
                i,
                n == null ? void 0 : n.className
            ),
            g = w(
                {},
                n == null ? void 0 : n.style,
                o == null ? void 0 : o.style,
                r == null ? void 0 : r.style
            ),
            p = w({}, n, o, r);
        return (
            h.length > 0 && (p.className = h),
            Object.keys(g).length > 0 && (p.style = g),
            { props: p, internalRef: void 0 }
        );
    }
    const s = TP(w({}, o, r)),
        a = Qm(r),
        l = Qm(o),
        u = t(s),
        d = J(
            u == null ? void 0 : u.className,
            n == null ? void 0 : n.className,
            i,
            o == null ? void 0 : o.className,
            r == null ? void 0 : r.className
        ),
        f = w(
            {},
            u == null ? void 0 : u.style,
            n == null ? void 0 : n.style,
            o == null ? void 0 : o.style,
            r == null ? void 0 : r.style
        ),
        c = w({}, u, n, l, a);
    return (
        d.length > 0 && (c.className = d),
        Object.keys(f).length > 0 && (c.style = f),
        { props: c, internalRef: u.ref }
    );
}
const OP = ["elementType", "externalSlotProps", "ownerState"];
function Jm(e) {
    var t;
    const { elementType: n, externalSlotProps: r, ownerState: o } = e,
        i = Q(e, OP),
        s = Od(r, o),
        { props: a, internalRef: l } = IP(w({}, i, { externalSlotProps: s })),
        u = st(
            l,
            s == null ? void 0 : s.ref,
            (t = e.additionalProps) == null ? void 0 : t.ref
        );
    return $P(n, w({}, a, { ref: u }), o);
}
const MP = [
    "input",
    "select",
    "textarea",
    "a[href]",
    "button",
    "[tabindex]",
    "audio[controls]",
    "video[controls]",
    '[contenteditable]:not([contenteditable="false"])',
].join(",");
function _P(e) {
    const t = parseInt(e.getAttribute("tabindex") || "", 10);
    return Number.isNaN(t)
        ? e.contentEditable === "true" ||
          ((e.nodeName === "AUDIO" ||
              e.nodeName === "VIDEO" ||
              e.nodeName === "DETAILS") &&
              e.getAttribute("tabindex") === null)
            ? 0
            : e.tabIndex
        : t;
}
function NP(e) {
    if (e.tagName !== "INPUT" || e.type !== "radio" || !e.name) return !1;
    const t = (r) => e.ownerDocument.querySelector(`input[type="radio"]${r}`);
    let n = t(`[name="${e.name}"]:checked`);
    return n || (n = t(`[name="${e.name}"]`)), n !== e;
}
function AP(e) {
    return !(
        e.disabled ||
        (e.tagName === "INPUT" && e.type === "hidden") ||
        NP(e)
    );
}
function LP(e) {
    const t = [],
        n = [];
    return (
        Array.from(e.querySelectorAll(MP)).forEach((r, o) => {
            const i = _P(r);
            i === -1 ||
                !AP(r) ||
                (i === 0
                    ? t.push(r)
                    : n.push({ documentOrder: o, tabIndex: i, node: r }));
        }),
        n
            .sort((r, o) =>
                r.tabIndex === o.tabIndex
                    ? r.documentOrder - o.documentOrder
                    : r.tabIndex - o.tabIndex
            )
            .map((r) => r.node)
            .concat(t)
    );
}
function DP() {
    return !0;
}
function zP(e) {
    const {
            children: t,
            disableAutoFocus: n = !1,
            disableEnforceFocus: r = !1,
            disableRestoreFocus: o = !1,
            getTabbable: i = LP,
            isEnabled: s = DP,
            open: a,
        } = e,
        l = b.useRef(!1),
        u = b.useRef(null),
        d = b.useRef(null),
        f = b.useRef(null),
        c = b.useRef(null),
        h = b.useRef(!1),
        g = b.useRef(null),
        p = st(t.ref, g),
        S = b.useRef(null);
    b.useEffect(() => {
        !a || !g.current || (h.current = !n);
    }, [n, a]),
        b.useEffect(() => {
            if (!a || !g.current) return;
            const v = jt(g.current);
            return (
                g.current.contains(v.activeElement) ||
                    (g.current.hasAttribute("tabIndex") ||
                        g.current.setAttribute("tabIndex", "-1"),
                    h.current && g.current.focus()),
                () => {
                    o ||
                        (f.current &&
                            f.current.focus &&
                            ((l.current = !0), f.current.focus()),
                        (f.current = null));
                }
            );
        }, [a]),
        b.useEffect(() => {
            if (!a || !g.current) return;
            const v = jt(g.current),
                x = (C) => {
                    const { current: T } = g;
                    if (T !== null) {
                        if (!v.hasFocus() || r || !s() || l.current) {
                            l.current = !1;
                            return;
                        }
                        if (!T.contains(v.activeElement)) {
                            if (
                                (C && c.current !== C.target) ||
                                v.activeElement !== c.current
                            )
                                c.current = null;
                            else if (c.current !== null) return;
                            if (!h.current) return;
                            let D = [];
                            if (
                                ((v.activeElement === u.current ||
                                    v.activeElement === d.current) &&
                                    (D = i(g.current)),
                                D.length > 0)
                            ) {
                                var I, P;
                                const K = Boolean(
                                        ((I = S.current) == null
                                            ? void 0
                                            : I.shiftKey) &&
                                            ((P = S.current) == null
                                                ? void 0
                                                : P.key) === "Tab"
                                    ),
                                    j = D[0],
                                    N = D[D.length - 1];
                                typeof j != "string" &&
                                    typeof N != "string" &&
                                    (K ? N.focus() : j.focus());
                            } else T.focus();
                        }
                    }
                },
                k = (C) => {
                    (S.current = C),
                        !(r || !s() || C.key !== "Tab") &&
                            v.activeElement === g.current &&
                            C.shiftKey &&
                            ((l.current = !0), d.current && d.current.focus());
                };
            v.addEventListener("focusin", x),
                v.addEventListener("keydown", k, !0);
            const R = setInterval(() => {
                v.activeElement &&
                    v.activeElement.tagName === "BODY" &&
                    x(null);
            }, 50);
            return () => {
                clearInterval(R),
                    v.removeEventListener("focusin", x),
                    v.removeEventListener("keydown", k, !0);
            };
        }, [n, r, o, s, a, i]);
    const y = (v) => {
            f.current === null && (f.current = v.relatedTarget),
                (h.current = !0),
                (c.current = v.target);
            const x = t.props.onFocus;
            x && x(v);
        },
        m = (v) => {
            f.current === null && (f.current = v.relatedTarget),
                (h.current = !0);
        };
    return te(b.Fragment, {
        children: [
            E("div", {
                tabIndex: a ? 0 : -1,
                onFocus: m,
                ref: u,
                "data-testid": "sentinelStart",
            }),
            b.cloneElement(t, { ref: p, onFocus: y }),
            E("div", {
                tabIndex: a ? 0 : -1,
                onFocus: m,
                ref: d,
                "data-testid": "sentinelEnd",
            }),
        ],
    });
}
function FP(e) {
    return typeof e == "function" ? e() : e;
}
const BP = b.forwardRef(function (t, n) {
        const { children: r, container: o, disablePortal: i = !1 } = t,
            [s, a] = b.useState(null),
            l = st(b.isValidElement(r) ? r.ref : null, n);
        if (
            (Cr(() => {
                i || a(FP(o) || document.body);
            }, [o, i]),
            Cr(() => {
                if (s && !i)
                    return (
                        Ed(n, s),
                        () => {
                            Ed(n, null);
                        }
                    );
            }, [n, s, i]),
            i)
        ) {
            if (b.isValidElement(r)) {
                const u = { ref: l };
                return b.cloneElement(r, u);
            }
            return E(b.Fragment, { children: r });
        }
        return E(b.Fragment, { children: s && qr.createPortal(r, s) });
    }),
    UP = BP;
function WP(e) {
    const t = jt(e);
    return t.body === e
        ? Gn(e).innerWidth > t.documentElement.clientWidth
        : e.scrollHeight > e.clientHeight;
}
function Zi(e, t) {
    t
        ? e.setAttribute("aria-hidden", "true")
        : e.removeAttribute("aria-hidden");
}
function Zm(e) {
    return parseInt(Gn(e).getComputedStyle(e).paddingRight, 10) || 0;
}
function jP(e) {
    const n =
            [
                "TEMPLATE",
                "SCRIPT",
                "STYLE",
                "LINK",
                "MAP",
                "META",
                "NOSCRIPT",
                "PICTURE",
                "COL",
                "COLGROUP",
                "PARAM",
                "SLOT",
                "SOURCE",
                "TRACK",
            ].indexOf(e.tagName) !== -1,
        r = e.tagName === "INPUT" && e.getAttribute("type") === "hidden";
    return n || r;
}
function eg(e, t, n, r, o) {
    const i = [t, n, ...r];
    [].forEach.call(e.children, (s) => {
        const a = i.indexOf(s) === -1,
            l = !jP(s);
        a && l && Zi(s, o);
    });
}
function hc(e, t) {
    let n = -1;
    return e.some((r, o) => (t(r) ? ((n = o), !0) : !1)), n;
}
function VP(e, t) {
    const n = [],
        r = e.container;
    if (!t.disableScrollLock) {
        if (WP(r)) {
            const s = A0(jt(r));
            n.push({
                value: r.style.paddingRight,
                property: "padding-right",
                el: r,
            }),
                (r.style.paddingRight = `${Zm(r) + s}px`);
            const a = jt(r).querySelectorAll(".mui-fixed");
            [].forEach.call(a, (l) => {
                n.push({
                    value: l.style.paddingRight,
                    property: "padding-right",
                    el: l,
                }),
                    (l.style.paddingRight = `${Zm(l) + s}px`);
            });
        }
        let i;
        if (r.parentNode instanceof DocumentFragment) i = jt(r).body;
        else {
            const s = r.parentElement,
                a = Gn(r);
            i =
                (s == null ? void 0 : s.nodeName) === "HTML" &&
                a.getComputedStyle(s).overflowY === "scroll"
                    ? s
                    : r;
        }
        n.push(
            { value: i.style.overflow, property: "overflow", el: i },
            { value: i.style.overflowX, property: "overflow-x", el: i },
            { value: i.style.overflowY, property: "overflow-y", el: i }
        ),
            (i.style.overflow = "hidden");
    }
    return () => {
        n.forEach(({ value: i, el: s, property: a }) => {
            i ? s.style.setProperty(a, i) : s.style.removeProperty(a);
        });
    };
}
function HP(e) {
    const t = [];
    return (
        [].forEach.call(e.children, (n) => {
            n.getAttribute("aria-hidden") === "true" && t.push(n);
        }),
        t
    );
}
class KP {
    constructor() {
        (this.containers = void 0),
            (this.modals = void 0),
            (this.modals = []),
            (this.containers = []);
    }
    add(t, n) {
        let r = this.modals.indexOf(t);
        if (r !== -1) return r;
        (r = this.modals.length),
            this.modals.push(t),
            t.modalRef && Zi(t.modalRef, !1);
        const o = HP(n);
        eg(n, t.mount, t.modalRef, o, !0);
        const i = hc(this.containers, (s) => s.container === n);
        return i !== -1
            ? (this.containers[i].modals.push(t), r)
            : (this.containers.push({
                  modals: [t],
                  container: n,
                  restore: null,
                  hiddenSiblings: o,
              }),
              r);
    }
    mount(t, n) {
        const r = hc(this.containers, (i) => i.modals.indexOf(t) !== -1),
            o = this.containers[r];
        o.restore || (o.restore = VP(o, n));
    }
    remove(t, n = !0) {
        const r = this.modals.indexOf(t);
        if (r === -1) return r;
        const o = hc(this.containers, (s) => s.modals.indexOf(t) !== -1),
            i = this.containers[o];
        if (
            (i.modals.splice(i.modals.indexOf(t), 1),
            this.modals.splice(r, 1),
            i.modals.length === 0)
        )
            i.restore && i.restore(),
                t.modalRef && Zi(t.modalRef, n),
                eg(i.container, t.mount, t.modalRef, i.hiddenSiblings, !1),
                this.containers.splice(o, 1);
        else {
            const s = i.modals[i.modals.length - 1];
            s.modalRef && Zi(s.modalRef, !1);
        }
        return r;
    }
    isTopModal(t) {
        return (
            this.modals.length > 0 && this.modals[this.modals.length - 1] === t
        );
    }
}
function GP(e) {
    return fe("MuiModal", e);
}
ue("MuiModal", ["root", "hidden"]);
const qP = [
        "children",
        "classes",
        "closeAfterTransition",
        "component",
        "container",
        "disableAutoFocus",
        "disableEnforceFocus",
        "disableEscapeKeyDown",
        "disablePortal",
        "disableRestoreFocus",
        "disableScrollLock",
        "hideBackdrop",
        "keepMounted",
        "manager",
        "onBackdropClick",
        "onClose",
        "onKeyDown",
        "open",
        "onTransitionEnter",
        "onTransitionExited",
        "slotProps",
        "slots",
    ],
    YP = (e) => {
        const { open: t, exited: n, classes: r } = e;
        return pe(
            { root: ["root", !t && n && "hidden"], backdrop: ["backdrop"] },
            GP,
            r
        );
    };
function XP(e) {
    return typeof e == "function" ? e() : e;
}
function QP(e) {
    return e ? e.props.hasOwnProperty("in") : !1;
}
const JP = new KP(),
    ZP = b.forwardRef(function (t, n) {
        var r, o;
        const {
                children: i,
                classes: s,
                closeAfterTransition: a = !1,
                component: l,
                container: u,
                disableAutoFocus: d = !1,
                disableEnforceFocus: f = !1,
                disableEscapeKeyDown: c = !1,
                disablePortal: h = !1,
                disableRestoreFocus: g = !1,
                disableScrollLock: p = !1,
                hideBackdrop: S = !1,
                keepMounted: y = !1,
                manager: m = JP,
                onBackdropClick: v,
                onClose: x,
                onKeyDown: k,
                open: R,
                onTransitionEnter: C,
                onTransitionExited: T,
                slotProps: I = {},
                slots: P = {},
            } = t,
            D = Q(t, qP),
            [K, j] = b.useState(!R),
            N = b.useRef({}),
            z = b.useRef(null),
            U = b.useRef(null),
            Z = st(U, n),
            $ = QP(i),
            _ = (r = t["aria-hidden"]) != null ? r : !0,
            L = () => jt(z.current),
            V = () => (
                (N.current.modalRef = U.current),
                (N.current.mountNode = z.current),
                N.current
            ),
            ne = () => {
                m.mount(V(), { disableScrollLock: p }),
                    U.current && (U.current.scrollTop = 0);
            },
            _e = Mo(() => {
                const O = XP(u) || L().body;
                m.add(V(), O), U.current && ne();
            }),
            se = b.useCallback(() => m.isTopModal(V()), [m]),
            ve = Mo((O) => {
                (z.current = O),
                    !(!O || !U.current) &&
                        (R && se() ? ne() : Zi(U.current, _));
            }),
            q = b.useCallback(() => {
                m.remove(V(), _);
            }, [m, _]);
        b.useEffect(
            () => () => {
                q();
            },
            [q]
        ),
            b.useEffect(() => {
                R ? _e() : (!$ || !a) && q();
            }, [R, q, $, a, _e]);
        const he = w({}, t, {
                classes: s,
                closeAfterTransition: a,
                disableAutoFocus: d,
                disableEnforceFocus: f,
                disableEscapeKeyDown: c,
                disablePortal: h,
                disableRestoreFocus: g,
                disableScrollLock: p,
                exited: K,
                hideBackdrop: S,
                keepMounted: y,
            }),
            Te = YP(he),
            be = () => {
                j(!1), C && C();
            },
            Ae = () => {
                j(!0), T && T(), a && q();
            },
            le = (O) => {
                O.target === O.currentTarget &&
                    (v && v(O), x && x(O, "backdropClick"));
            },
            Je = (O) => {
                k && k(O),
                    !(O.key !== "Escape" || !se()) &&
                        (c ||
                            (O.stopPropagation(), x && x(O, "escapeKeyDown")));
            },
            dt = {};
        i.props.tabIndex === void 0 && (dt.tabIndex = "-1"),
            $ &&
                ((dt.onEnter = Rm(be, i.props.onEnter)),
                (dt.onExited = Rm(Ae, i.props.onExited)));
        const $t = (o = l ?? P.root) != null ? o : "div",
            Dt = Jm({
                elementType: $t,
                externalSlotProps: I.root,
                externalForwardedProps: D,
                additionalProps: {
                    ref: Z,
                    role: "presentation",
                    onKeyDown: Je,
                },
                className: Te.root,
                ownerState: he,
            }),
            an = P.backdrop,
            zt = Jm({
                elementType: an,
                externalSlotProps: I.backdrop,
                additionalProps: { "aria-hidden": !0, onClick: le, open: R },
                className: Te.backdrop,
                ownerState: he,
            });
        return !y && !R && (!$ || K)
            ? null
            : E(UP, {
                  ref: ve,
                  container: u,
                  disablePortal: h,
                  children: te(
                      $t,
                      w({}, Dt, {
                          children: [
                              !S && an ? E(an, w({}, zt)) : null,
                              E(zP, {
                                  disableEnforceFocus: f,
                                  disableAutoFocus: d,
                                  disableRestoreFocus: g,
                                  isEnabled: se,
                                  open: R,
                                  children: b.cloneElement(i, dt),
                              }),
                          ],
                      })
                  ),
              });
    }),
    e$ = ZP,
    t$ = ["onChange", "maxRows", "minRows", "style", "value"];
function sa(e, t) {
    return parseInt(e[t], 10) || 0;
}
const n$ = {
    shadow: {
        visibility: "hidden",
        position: "absolute",
        overflow: "hidden",
        height: 0,
        top: 0,
        left: 0,
        transform: "translateZ(0)",
    },
};
function tg(e) {
    return e == null || Object.keys(e).length === 0;
}
const r$ = b.forwardRef(function (t, n) {
        const {
                onChange: r,
                maxRows: o,
                minRows: i = 1,
                style: s,
                value: a,
            } = t,
            l = Q(t, t$),
            { current: u } = b.useRef(a != null),
            d = b.useRef(null),
            f = st(n, d),
            c = b.useRef(null),
            h = b.useRef(0),
            [g, p] = b.useState({}),
            S = b.useCallback(() => {
                const k = d.current,
                    C = Gn(k).getComputedStyle(k);
                if (C.width === "0px") return {};
                const T = c.current;
                (T.style.width = C.width),
                    (T.value = k.value || t.placeholder || "x"),
                    T.value.slice(-1) ===
                        `
` && (T.value += " ");
                const I = C["box-sizing"],
                    P = sa(C, "padding-bottom") + sa(C, "padding-top"),
                    D =
                        sa(C, "border-bottom-width") +
                        sa(C, "border-top-width"),
                    K = T.scrollHeight;
                T.value = "x";
                const j = T.scrollHeight;
                let N = K;
                i && (N = Math.max(Number(i) * j, N)),
                    o && (N = Math.min(Number(o) * j, N)),
                    (N = Math.max(N, j));
                const z = N + (I === "border-box" ? P + D : 0),
                    U = Math.abs(N - K) <= 1;
                return { outerHeightStyle: z, overflow: U };
            }, [o, i, t.placeholder]),
            y = (k, R) => {
                const { outerHeightStyle: C, overflow: T } = R;
                return h.current < 20 &&
                    ((C > 0 && Math.abs((k.outerHeightStyle || 0) - C) > 1) ||
                        k.overflow !== T)
                    ? ((h.current += 1), { overflow: T, outerHeightStyle: C })
                    : k;
            },
            m = b.useCallback(() => {
                const k = S();
                tg(k) || p((R) => y(R, k));
            }, [S]),
            v = () => {
                const k = S();
                tg(k) ||
                    qr.flushSync(() => {
                        p((R) => y(R, k));
                    });
            };
        b.useEffect(() => {
            const k = rp(() => {
                    (h.current = 0), d.current && v();
                }),
                R = Gn(d.current);
            R.addEventListener("resize", k);
            let C;
            return (
                typeof ResizeObserver < "u" &&
                    ((C = new ResizeObserver(k)), C.observe(d.current)),
                () => {
                    k.clear(),
                        R.removeEventListener("resize", k),
                        C && C.disconnect();
                }
            );
        }),
            Cr(() => {
                m();
            }),
            b.useEffect(() => {
                h.current = 0;
            }, [a]);
        const x = (k) => {
            (h.current = 0), u || m(), r && r(k);
        };
        return te(b.Fragment, {
            children: [
                E(
                    "textarea",
                    w(
                        {
                            value: a,
                            onChange: x,
                            ref: f,
                            rows: i,
                            style: w(
                                {
                                    height: g.outerHeightStyle,
                                    overflow: g.overflow ? "hidden" : null,
                                },
                                s
                            ),
                        },
                        l
                    )
                ),
                E("textarea", {
                    "aria-hidden": !0,
                    className: t.className,
                    readOnly: !0,
                    ref: c,
                    tabIndex: -1,
                    style: w({}, n$.shadow, s, { padding: 0 }),
                }),
            ],
        });
    }),
    o$ = r$;
function i$(e) {
    return fe("MuiSvgIcon", e);
}
ue("MuiSvgIcon", [
    "root",
    "colorPrimary",
    "colorSecondary",
    "colorAction",
    "colorError",
    "colorDisabled",
    "fontSizeInherit",
    "fontSizeSmall",
    "fontSizeMedium",
    "fontSizeLarge",
]);
const s$ = [
        "children",
        "className",
        "color",
        "component",
        "fontSize",
        "htmlColor",
        "inheritViewBox",
        "titleAccess",
        "viewBox",
    ],
    a$ = (e) => {
        const { color: t, fontSize: n, classes: r } = e,
            o = {
                root: [
                    "root",
                    t !== "inherit" && `color${W(t)}`,
                    `fontSize${W(n)}`,
                ],
            };
        return pe(o, i$, r);
    },
    l$ = H("svg", {
        name: "MuiSvgIcon",
        slot: "Root",
        overridesResolver: (e, t) => {
            const { ownerState: n } = e;
            return [
                t.root,
                n.color !== "inherit" && t[`color${W(n.color)}`],
                t[`fontSize${W(n.fontSize)}`],
            ];
        },
    })(({ theme: e, ownerState: t }) => {
        var n, r, o, i, s, a, l, u, d, f, c, h, g, p, S, y, m;
        return {
            userSelect: "none",
            width: "1em",
            height: "1em",
            display: "inline-block",
            fill: "currentColor",
            flexShrink: 0,
            transition:
                (n = e.transitions) == null || (r = n.create) == null
                    ? void 0
                    : r.call(n, "fill", {
                          duration:
                              (o = e.transitions) == null ||
                              (i = o.duration) == null
                                  ? void 0
                                  : i.shorter,
                      }),
            fontSize: {
                inherit: "inherit",
                small:
                    ((s = e.typography) == null || (a = s.pxToRem) == null
                        ? void 0
                        : a.call(s, 20)) || "1.25rem",
                medium:
                    ((l = e.typography) == null || (u = l.pxToRem) == null
                        ? void 0
                        : u.call(l, 24)) || "1.5rem",
                large:
                    ((d = e.typography) == null || (f = d.pxToRem) == null
                        ? void 0
                        : f.call(d, 35)) || "2.1875rem",
            }[t.fontSize],
            color:
                (c =
                    (h = (e.vars || e).palette) == null ||
                    (g = h[t.color]) == null
                        ? void 0
                        : g.main) != null
                    ? c
                    : {
                          action:
                              (p = (e.vars || e).palette) == null ||
                              (S = p.action) == null
                                  ? void 0
                                  : S.active,
                          disabled:
                              (y = (e.vars || e).palette) == null ||
                              (m = y.action) == null
                                  ? void 0
                                  : m.disabled,
                          inherit: void 0,
                      }[t.color],
        };
    }),
    c1 = b.forwardRef(function (t, n) {
        const r = ce({ props: t, name: "MuiSvgIcon" }),
            {
                children: o,
                className: i,
                color: s = "inherit",
                component: a = "svg",
                fontSize: l = "medium",
                htmlColor: u,
                inheritViewBox: d = !1,
                titleAccess: f,
                viewBox: c = "0 0 24 24",
            } = r,
            h = Q(r, s$),
            g = w({}, r, {
                color: s,
                component: a,
                fontSize: l,
                instanceFontSize: t.fontSize,
                inheritViewBox: d,
                viewBox: c,
            }),
            p = {};
        d || (p.viewBox = c);
        const S = a$(g);
        return te(
            l$,
            w(
                {
                    as: a,
                    className: J(S.root, i),
                    focusable: "false",
                    color: u,
                    "aria-hidden": f ? void 0 : !0,
                    role: f ? "img" : void 0,
                    ref: n,
                },
                p,
                h,
                {
                    ownerState: g,
                    children: [o, f ? E("title", { children: f }) : null],
                }
            )
        );
    });
c1.muiName = "SvgIcon";
const ng = c1;
function Lt(e, t) {
    function n(r, o) {
        return E(
            ng,
            w({ "data-testid": `${t}Icon`, ref: o }, r, { children: e })
        );
    }
    return (n.muiName = ng.muiName), b.memo(b.forwardRef(n));
}
function Md(e, t) {
    return (
        (Md = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (r, o) {
                  return (r.__proto__ = o), r;
              }),
        Md(e, t)
    );
}
function d1(e, t) {
    (e.prototype = Object.create(t.prototype)),
        (e.prototype.constructor = e),
        Md(e, t);
}
const rg = { disabled: !1 },
    ml = en.createContext(null);
var u$ = function (t) {
        return t.scrollTop;
    },
    Fi = "unmounted",
    Ar = "exited",
    Lr = "entering",
    go = "entered",
    _d = "exiting",
    Xn = (function (e) {
        d1(t, e);
        function t(r, o) {
            var i;
            i = e.call(this, r, o) || this;
            var s = o,
                a = s && !s.isMounting ? r.enter : r.appear,
                l;
            return (
                (i.appearStatus = null),
                r.in
                    ? a
                        ? ((l = Ar), (i.appearStatus = Lr))
                        : (l = go)
                    : r.unmountOnExit || r.mountOnEnter
                    ? (l = Fi)
                    : (l = Ar),
                (i.state = { status: l }),
                (i.nextCallback = null),
                i
            );
        }
        t.getDerivedStateFromProps = function (o, i) {
            var s = o.in;
            return s && i.status === Fi ? { status: Ar } : null;
        };
        var n = t.prototype;
        return (
            (n.componentDidMount = function () {
                this.updateStatus(!0, this.appearStatus);
            }),
            (n.componentDidUpdate = function (o) {
                var i = null;
                if (o !== this.props) {
                    var s = this.state.status;
                    this.props.in
                        ? s !== Lr && s !== go && (i = Lr)
                        : (s === Lr || s === go) && (i = _d);
                }
                this.updateStatus(!1, i);
            }),
            (n.componentWillUnmount = function () {
                this.cancelNextCallback();
            }),
            (n.getTimeouts = function () {
                var o = this.props.timeout,
                    i,
                    s,
                    a;
                return (
                    (i = s = a = o),
                    o != null &&
                        typeof o != "number" &&
                        ((i = o.exit),
                        (s = o.enter),
                        (a = o.appear !== void 0 ? o.appear : s)),
                    { exit: i, enter: s, appear: a }
                );
            }),
            (n.updateStatus = function (o, i) {
                if ((o === void 0 && (o = !1), i !== null))
                    if ((this.cancelNextCallback(), i === Lr)) {
                        if (
                            this.props.unmountOnExit ||
                            this.props.mountOnEnter
                        ) {
                            var s = this.props.nodeRef
                                ? this.props.nodeRef.current
                                : oa.findDOMNode(this);
                            s && u$(s);
                        }
                        this.performEnter(o);
                    } else this.performExit();
                else
                    this.props.unmountOnExit &&
                        this.state.status === Ar &&
                        this.setState({ status: Fi });
            }),
            (n.performEnter = function (o) {
                var i = this,
                    s = this.props.enter,
                    a = this.context ? this.context.isMounting : o,
                    l = this.props.nodeRef ? [a] : [oa.findDOMNode(this), a],
                    u = l[0],
                    d = l[1],
                    f = this.getTimeouts(),
                    c = a ? f.appear : f.enter;
                if ((!o && !s) || rg.disabled) {
                    this.safeSetState({ status: go }, function () {
                        i.props.onEntered(u);
                    });
                    return;
                }
                this.props.onEnter(u, d),
                    this.safeSetState({ status: Lr }, function () {
                        i.props.onEntering(u, d),
                            i.onTransitionEnd(c, function () {
                                i.safeSetState({ status: go }, function () {
                                    i.props.onEntered(u, d);
                                });
                            });
                    });
            }),
            (n.performExit = function () {
                var o = this,
                    i = this.props.exit,
                    s = this.getTimeouts(),
                    a = this.props.nodeRef ? void 0 : oa.findDOMNode(this);
                if (!i || rg.disabled) {
                    this.safeSetState({ status: Ar }, function () {
                        o.props.onExited(a);
                    });
                    return;
                }
                this.props.onExit(a),
                    this.safeSetState({ status: _d }, function () {
                        o.props.onExiting(a),
                            o.onTransitionEnd(s.exit, function () {
                                o.safeSetState({ status: Ar }, function () {
                                    o.props.onExited(a);
                                });
                            });
                    });
            }),
            (n.cancelNextCallback = function () {
                this.nextCallback !== null &&
                    (this.nextCallback.cancel(), (this.nextCallback = null));
            }),
            (n.safeSetState = function (o, i) {
                (i = this.setNextCallback(i)), this.setState(o, i);
            }),
            (n.setNextCallback = function (o) {
                var i = this,
                    s = !0;
                return (
                    (this.nextCallback = function (a) {
                        s && ((s = !1), (i.nextCallback = null), o(a));
                    }),
                    (this.nextCallback.cancel = function () {
                        s = !1;
                    }),
                    this.nextCallback
                );
            }),
            (n.onTransitionEnd = function (o, i) {
                this.setNextCallback(i);
                var s = this.props.nodeRef
                        ? this.props.nodeRef.current
                        : oa.findDOMNode(this),
                    a = o == null && !this.props.addEndListener;
                if (!s || a) {
                    setTimeout(this.nextCallback, 0);
                    return;
                }
                if (this.props.addEndListener) {
                    var l = this.props.nodeRef
                            ? [this.nextCallback]
                            : [s, this.nextCallback],
                        u = l[0],
                        d = l[1];
                    this.props.addEndListener(u, d);
                }
                o != null && setTimeout(this.nextCallback, o);
            }),
            (n.render = function () {
                var o = this.state.status;
                if (o === Fi) return null;
                var i = this.props,
                    s = i.children;
                i.in,
                    i.mountOnEnter,
                    i.unmountOnExit,
                    i.appear,
                    i.enter,
                    i.exit,
                    i.timeout,
                    i.addEndListener,
                    i.onEnter,
                    i.onEntering,
                    i.onEntered,
                    i.onExit,
                    i.onExiting,
                    i.onExited,
                    i.nodeRef;
                var a = Q(i, [
                    "children",
                    "in",
                    "mountOnEnter",
                    "unmountOnExit",
                    "appear",
                    "enter",
                    "exit",
                    "timeout",
                    "addEndListener",
                    "onEnter",
                    "onEntering",
                    "onEntered",
                    "onExit",
                    "onExiting",
                    "onExited",
                    "nodeRef",
                ]);
                return en.createElement(
                    ml.Provider,
                    { value: null },
                    typeof s == "function"
                        ? s(o, a)
                        : en.cloneElement(en.Children.only(s), a)
                );
            }),
            t
        );
    })(en.Component);
Xn.contextType = ml;
Xn.propTypes = {};
function mo() {}
Xn.defaultProps = {
    in: !1,
    mountOnEnter: !1,
    unmountOnExit: !1,
    appear: !1,
    enter: !0,
    exit: !0,
    onEnter: mo,
    onEntering: mo,
    onEntered: mo,
    onExit: mo,
    onExiting: mo,
    onExited: mo,
};
Xn.UNMOUNTED = Fi;
Xn.EXITED = Ar;
Xn.ENTERING = Lr;
Xn.ENTERED = go;
Xn.EXITING = _d;
const xu = Xn;
function c$(e) {
    if (e === void 0)
        throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
        );
    return e;
}
function bp(e, t) {
    var n = function (i) {
            return t && b.isValidElement(i) ? t(i) : i;
        },
        r = Object.create(null);
    return (
        e &&
            b.Children.map(e, function (o) {
                return o;
            }).forEach(function (o) {
                r[o.key] = n(o);
            }),
        r
    );
}
function d$(e, t) {
    (e = e || {}), (t = t || {});
    function n(d) {
        return d in t ? t[d] : e[d];
    }
    var r = Object.create(null),
        o = [];
    for (var i in e) i in t ? o.length && ((r[i] = o), (o = [])) : o.push(i);
    var s,
        a = {};
    for (var l in t) {
        if (r[l])
            for (s = 0; s < r[l].length; s++) {
                var u = r[l][s];
                a[r[l][s]] = n(u);
            }
        a[l] = n(l);
    }
    for (s = 0; s < o.length; s++) a[o[s]] = n(o[s]);
    return a;
}
function Hr(e, t, n) {
    return n[t] != null ? n[t] : e.props[t];
}
function f$(e, t) {
    return bp(e.children, function (n) {
        return b.cloneElement(n, {
            onExited: t.bind(null, n),
            in: !0,
            appear: Hr(n, "appear", e),
            enter: Hr(n, "enter", e),
            exit: Hr(n, "exit", e),
        });
    });
}
function p$(e, t, n) {
    var r = bp(e.children),
        o = d$(t, r);
    return (
        Object.keys(o).forEach(function (i) {
            var s = o[i];
            if (b.isValidElement(s)) {
                var a = i in t,
                    l = i in r,
                    u = t[i],
                    d = b.isValidElement(u) && !u.props.in;
                l && (!a || d)
                    ? (o[i] = b.cloneElement(s, {
                          onExited: n.bind(null, s),
                          in: !0,
                          exit: Hr(s, "exit", e),
                          enter: Hr(s, "enter", e),
                      }))
                    : !l && a && !d
                    ? (o[i] = b.cloneElement(s, { in: !1 }))
                    : l &&
                      a &&
                      b.isValidElement(u) &&
                      (o[i] = b.cloneElement(s, {
                          onExited: n.bind(null, s),
                          in: u.props.in,
                          exit: Hr(s, "exit", e),
                          enter: Hr(s, "enter", e),
                      }));
            }
        }),
        o
    );
}
var h$ =
        Object.values ||
        function (e) {
            return Object.keys(e).map(function (t) {
                return e[t];
            });
        },
    m$ = {
        component: "div",
        childFactory: function (t) {
            return t;
        },
    },
    xp = (function (e) {
        d1(t, e);
        function t(r, o) {
            var i;
            i = e.call(this, r, o) || this;
            var s = i.handleExited.bind(c$(i));
            return (
                (i.state = {
                    contextValue: { isMounting: !0 },
                    handleExited: s,
                    firstRender: !0,
                }),
                i
            );
        }
        var n = t.prototype;
        return (
            (n.componentDidMount = function () {
                (this.mounted = !0),
                    this.setState({ contextValue: { isMounting: !1 } });
            }),
            (n.componentWillUnmount = function () {
                this.mounted = !1;
            }),
            (t.getDerivedStateFromProps = function (o, i) {
                var s = i.children,
                    a = i.handleExited,
                    l = i.firstRender;
                return {
                    children: l ? f$(o, a) : p$(o, s, a),
                    firstRender: !1,
                };
            }),
            (n.handleExited = function (o, i) {
                var s = bp(this.props.children);
                o.key in s ||
                    (o.props.onExited && o.props.onExited(i),
                    this.mounted &&
                        this.setState(function (a) {
                            var l = w({}, a.children);
                            return delete l[o.key], { children: l };
                        }));
            }),
            (n.render = function () {
                var o = this.props,
                    i = o.component,
                    s = o.childFactory,
                    a = Q(o, ["component", "childFactory"]),
                    l = this.state.contextValue,
                    u = h$(this.state.children).map(s);
                return (
                    delete a.appear,
                    delete a.enter,
                    delete a.exit,
                    i === null
                        ? en.createElement(ml.Provider, { value: l }, u)
                        : en.createElement(
                              ml.Provider,
                              { value: l },
                              en.createElement(i, a, u)
                          )
                );
            }),
            t
        );
    })(en.Component);
xp.propTypes = {};
xp.defaultProps = m$;
const g$ = xp,
    wp = (e) => e.scrollTop;
function kr(e, t) {
    var n, r;
    const { timeout: o, easing: i, style: s = {} } = e;
    return {
        duration:
            (n = s.transitionDuration) != null
                ? n
                : typeof o == "number"
                ? o
                : o[t.mode] || 0,
        easing:
            (r = s.transitionTimingFunction) != null
                ? r
                : typeof i == "object"
                ? i[t.mode]
                : i,
        delay: s.transitionDelay,
    };
}
function y$(e) {
    return fe("MuiCollapse", e);
}
ue("MuiCollapse", [
    "root",
    "horizontal",
    "vertical",
    "entered",
    "hidden",
    "wrapper",
    "wrapperInner",
]);
const v$ = [
        "addEndListener",
        "children",
        "className",
        "collapsedSize",
        "component",
        "easing",
        "in",
        "onEnter",
        "onEntered",
        "onEntering",
        "onExit",
        "onExited",
        "onExiting",
        "orientation",
        "style",
        "timeout",
        "TransitionComponent",
    ],
    b$ = (e) => {
        const { orientation: t, classes: n } = e,
            r = {
                root: ["root", `${t}`],
                entered: ["entered"],
                hidden: ["hidden"],
                wrapper: ["wrapper", `${t}`],
                wrapperInner: ["wrapperInner", `${t}`],
            };
        return pe(r, y$, n);
    },
    x$ = H("div", {
        name: "MuiCollapse",
        slot: "Root",
        overridesResolver: (e, t) => {
            const { ownerState: n } = e;
            return [
                t.root,
                t[n.orientation],
                n.state === "entered" && t.entered,
                n.state === "exited" &&
                    !n.in &&
                    n.collapsedSize === "0px" &&
                    t.hidden,
            ];
        },
    })(({ theme: e, ownerState: t }) =>
        w(
            {
                height: 0,
                overflow: "hidden",
                transition: e.transitions.create("height"),
            },
            t.orientation === "horizontal" && {
                height: "auto",
                width: 0,
                transition: e.transitions.create("width"),
            },
            t.state === "entered" &&
                w(
                    { height: "auto", overflow: "visible" },
                    t.orientation === "horizontal" && { width: "auto" }
                ),
            t.state === "exited" &&
                !t.in &&
                t.collapsedSize === "0px" && { visibility: "hidden" }
        )
    ),
    w$ = H("div", {
        name: "MuiCollapse",
        slot: "Wrapper",
        overridesResolver: (e, t) => t.wrapper,
    })(({ ownerState: e }) =>
        w(
            { display: "flex", width: "100%" },
            e.orientation === "horizontal" && { width: "auto", height: "100%" }
        )
    ),
    S$ = H("div", {
        name: "MuiCollapse",
        slot: "WrapperInner",
        overridesResolver: (e, t) => t.wrapperInner,
    })(({ ownerState: e }) =>
        w(
            { width: "100%" },
            e.orientation === "horizontal" && { width: "auto", height: "100%" }
        )
    ),
    f1 = b.forwardRef(function (t, n) {
        const r = ce({ props: t, name: "MuiCollapse" }),
            {
                addEndListener: o,
                children: i,
                className: s,
                collapsedSize: a = "0px",
                component: l,
                easing: u,
                in: d,
                onEnter: f,
                onEntered: c,
                onEntering: h,
                onExit: g,
                onExited: p,
                onExiting: S,
                orientation: y = "vertical",
                style: m,
                timeout: v = u1.standard,
                TransitionComponent: x = xu,
            } = r,
            k = Q(r, v$),
            R = w({}, r, { orientation: y, collapsedSize: a }),
            C = b$(R),
            T = so(),
            I = b.useRef(),
            P = b.useRef(null),
            D = b.useRef(),
            K = typeof a == "number" ? `${a}px` : a,
            j = y === "horizontal",
            N = j ? "width" : "height";
        b.useEffect(
            () => () => {
                clearTimeout(I.current);
            },
            []
        );
        const z = b.useRef(null),
            U = st(n, z),
            Z = (q) => (he) => {
                if (q) {
                    const Te = z.current;
                    he === void 0 ? q(Te) : q(Te, he);
                }
            },
            $ = () =>
                P.current ? P.current[j ? "clientWidth" : "clientHeight"] : 0,
            _ = Z((q, he) => {
                P.current && j && (P.current.style.position = "absolute"),
                    (q.style[N] = K),
                    f && f(q, he);
            }),
            L = Z((q, he) => {
                const Te = $();
                P.current && j && (P.current.style.position = "");
                const { duration: be, easing: Ae } = kr(
                    { style: m, timeout: v, easing: u },
                    { mode: "enter" }
                );
                if (v === "auto") {
                    const le = T.transitions.getAutoHeightDuration(Te);
                    (q.style.transitionDuration = `${le}ms`), (D.current = le);
                } else
                    q.style.transitionDuration =
                        typeof be == "string" ? be : `${be}ms`;
                (q.style[N] = `${Te}px`),
                    (q.style.transitionTimingFunction = Ae),
                    h && h(q, he);
            }),
            V = Z((q, he) => {
                (q.style[N] = "auto"), c && c(q, he);
            }),
            ne = Z((q) => {
                (q.style[N] = `${$()}px`), g && g(q);
            }),
            _e = Z(p),
            se = Z((q) => {
                const he = $(),
                    { duration: Te, easing: be } = kr(
                        { style: m, timeout: v, easing: u },
                        { mode: "exit" }
                    );
                if (v === "auto") {
                    const Ae = T.transitions.getAutoHeightDuration(he);
                    (q.style.transitionDuration = `${Ae}ms`), (D.current = Ae);
                } else
                    q.style.transitionDuration =
                        typeof Te == "string" ? Te : `${Te}ms`;
                (q.style[N] = K),
                    (q.style.transitionTimingFunction = be),
                    S && S(q);
            });
        return E(
            x,
            w(
                {
                    in: d,
                    onEnter: _,
                    onEntered: V,
                    onEntering: L,
                    onExit: ne,
                    onExited: _e,
                    onExiting: se,
                    addEndListener: (q) => {
                        v === "auto" &&
                            (I.current = setTimeout(q, D.current || 0)),
                            o && o(z.current, q);
                    },
                    nodeRef: z,
                    timeout: v === "auto" ? null : v,
                },
                k,
                {
                    children: (q, he) =>
                        E(
                            x$,
                            w(
                                {
                                    as: l,
                                    className: J(
                                        C.root,
                                        s,
                                        {
                                            entered: C.entered,
                                            exited:
                                                !d && K === "0px" && C.hidden,
                                        }[q]
                                    ),
                                    style: w(
                                        { [j ? "minWidth" : "minHeight"]: K },
                                        m
                                    ),
                                    ownerState: w({}, R, { state: q }),
                                    ref: U,
                                },
                                he,
                                {
                                    children: E(w$, {
                                        ownerState: w({}, R, { state: q }),
                                        className: C.wrapper,
                                        ref: P,
                                        children: E(S$, {
                                            ownerState: w({}, R, { state: q }),
                                            className: C.wrapperInner,
                                            children: i,
                                        }),
                                    }),
                                }
                            )
                        ),
                }
            )
        );
    });
f1.muiSupportAuto = !0;
const C$ = f1;
function k$(e) {
    return fe("MuiPaper", e);
}
ue("MuiPaper", [
    "root",
    "rounded",
    "outlined",
    "elevation",
    "elevation0",
    "elevation1",
    "elevation2",
    "elevation3",
    "elevation4",
    "elevation5",
    "elevation6",
    "elevation7",
    "elevation8",
    "elevation9",
    "elevation10",
    "elevation11",
    "elevation12",
    "elevation13",
    "elevation14",
    "elevation15",
    "elevation16",
    "elevation17",
    "elevation18",
    "elevation19",
    "elevation20",
    "elevation21",
    "elevation22",
    "elevation23",
    "elevation24",
]);
const E$ = ["className", "component", "elevation", "square", "variant"],
    R$ = (e) => {
        const { square: t, elevation: n, variant: r, classes: o } = e,
            i = {
                root: [
                    "root",
                    r,
                    !t && "rounded",
                    r === "elevation" && `elevation${n}`,
                ],
            };
        return pe(i, k$, o);
    },
    P$ = H("div", {
        name: "MuiPaper",
        slot: "Root",
        overridesResolver: (e, t) => {
            const { ownerState: n } = e;
            return [
                t.root,
                t[n.variant],
                !n.square && t.rounded,
                n.variant === "elevation" && t[`elevation${n.elevation}`],
            ];
        },
    })(({ theme: e, ownerState: t }) => {
        var n;
        return w(
            {
                backgroundColor: (e.vars || e).palette.background.paper,
                color: (e.vars || e).palette.text.primary,
                transition: e.transitions.create("box-shadow"),
            },
            !t.square && { borderRadius: e.shape.borderRadius },
            t.variant === "outlined" && {
                border: `1px solid ${(e.vars || e).palette.divider}`,
            },
            t.variant === "elevation" &&
                w(
                    { boxShadow: (e.vars || e).shadows[t.elevation] },
                    !e.vars &&
                        e.palette.mode === "dark" && {
                            backgroundImage: `linear-gradient(${Me(
                                "#fff",
                                Xm(t.elevation)
                            )}, ${Me("#fff", Xm(t.elevation))})`,
                        },
                    e.vars && {
                        backgroundImage:
                            (n = e.vars.overlays) == null
                                ? void 0
                                : n[t.elevation],
                    }
                )
        );
    }),
    $$ = b.forwardRef(function (t, n) {
        const r = ce({ props: t, name: "MuiPaper" }),
            {
                className: o,
                component: i = "div",
                elevation: s = 1,
                square: a = !1,
                variant: l = "elevation",
            } = r,
            u = Q(r, E$),
            d = w({}, r, { component: i, elevation: s, square: a, variant: l }),
            f = R$(d);
        return E(
            P$,
            w({ as: i, ownerState: d, className: J(f.root, o), ref: n }, u)
        );
    }),
    ao = $$,
    T$ = b.createContext({}),
    p1 = T$;
function I$(e) {
    return fe("MuiAccordion", e);
}
const O$ = ue("MuiAccordion", [
        "root",
        "rounded",
        "expanded",
        "disabled",
        "gutters",
        "region",
    ]),
    aa = O$,
    M$ = [
        "children",
        "className",
        "defaultExpanded",
        "disabled",
        "disableGutters",
        "expanded",
        "onChange",
        "square",
        "TransitionComponent",
        "TransitionProps",
    ],
    _$ = (e) => {
        const {
            classes: t,
            square: n,
            expanded: r,
            disabled: o,
            disableGutters: i,
        } = e;
        return pe(
            {
                root: [
                    "root",
                    !n && "rounded",
                    r && "expanded",
                    o && "disabled",
                    !i && "gutters",
                ],
                region: ["region"],
            },
            I$,
            t
        );
    },
    N$ = H(ao, {
        name: "MuiAccordion",
        slot: "Root",
        overridesResolver: (e, t) => {
            const { ownerState: n } = e;
            return [
                { [`& .${aa.region}`]: t.region },
                t.root,
                !n.square && t.rounded,
                !n.disableGutters && t.gutters,
            ];
        },
    })(
        ({ theme: e }) => {
            const t = { duration: e.transitions.duration.shortest };
            return {
                position: "relative",
                transition: e.transitions.create(["margin"], t),
                overflowAnchor: "none",
                "&:before": {
                    position: "absolute",
                    left: 0,
                    top: -1,
                    right: 0,
                    height: 1,
                    content: '""',
                    opacity: 1,
                    backgroundColor: (e.vars || e).palette.divider,
                    transition: e.transitions.create(
                        ["opacity", "background-color"],
                        t
                    ),
                },
                "&:first-of-type": { "&:before": { display: "none" } },
                [`&.${aa.expanded}`]: {
                    "&:before": { opacity: 0 },
                    "&:first-of-type": { marginTop: 0 },
                    "&:last-of-type": { marginBottom: 0 },
                    "& + &": { "&:before": { display: "none" } },
                },
                [`&.${aa.disabled}`]: {
                    backgroundColor: (e.vars || e).palette.action
                        .disabledBackground,
                },
            };
        },
        ({ theme: e, ownerState: t }) =>
            w(
                {},
                !t.square && {
                    borderRadius: 0,
                    "&:first-of-type": {
                        borderTopLeftRadius: (e.vars || e).shape.borderRadius,
                        borderTopRightRadius: (e.vars || e).shape.borderRadius,
                    },
                    "&:last-of-type": {
                        borderBottomLeftRadius: (e.vars || e).shape
                            .borderRadius,
                        borderBottomRightRadius: (e.vars || e).shape
                            .borderRadius,
                        "@supports (-ms-ime-align: auto)": {
                            borderBottomLeftRadius: 0,
                            borderBottomRightRadius: 0,
                        },
                    },
                },
                !t.disableGutters && {
                    [`&.${aa.expanded}`]: { margin: "16px 0" },
                }
            )
    ),
    A$ = b.forwardRef(function (t, n) {
        const r = ce({ props: t, name: "MuiAccordion" }),
            {
                children: o,
                className: i,
                defaultExpanded: s = !1,
                disabled: a = !1,
                disableGutters: l = !1,
                expanded: u,
                onChange: d,
                square: f = !1,
                TransitionComponent: c = C$,
                TransitionProps: h,
            } = r,
            g = Q(r, M$),
            [p, S] = Rd({
                controlled: u,
                default: s,
                name: "Accordion",
                state: "expanded",
            }),
            y = b.useCallback(
                (C) => {
                    S(!p), d && d(C, !p);
                },
                [p, d, S]
            ),
            [m, ...v] = b.Children.toArray(o),
            x = b.useMemo(
                () => ({
                    expanded: p,
                    disabled: a,
                    disableGutters: l,
                    toggle: y,
                }),
                [p, a, l, y]
            ),
            k = w({}, r, {
                square: f,
                disabled: a,
                disableGutters: l,
                expanded: p,
            }),
            R = _$(k);
        return te(
            N$,
            w(
                { className: J(R.root, i), ref: n, ownerState: k, square: f },
                g,
                {
                    children: [
                        E(p1.Provider, { value: x, children: m }),
                        E(
                            c,
                            w({ in: p, timeout: "auto" }, h, {
                                children: E("div", {
                                    "aria-labelledby": m.props.id,
                                    id: m.props["aria-controls"],
                                    role: "region",
                                    className: R.region,
                                    children: v,
                                }),
                            })
                        ),
                    ],
                }
            )
        );
    }),
    L$ = A$;
function D$(e) {
    return fe("MuiAccordionDetails", e);
}
ue("MuiAccordionDetails", ["root"]);
const z$ = ["className"],
    F$ = (e) => {
        const { classes: t } = e;
        return pe({ root: ["root"] }, D$, t);
    },
    B$ = H("div", {
        name: "MuiAccordionDetails",
        slot: "Root",
        overridesResolver: (e, t) => t.root,
    })(({ theme: e }) => ({ padding: e.spacing(1, 2, 2) })),
    U$ = b.forwardRef(function (t, n) {
        const r = ce({ props: t, name: "MuiAccordionDetails" }),
            { className: o } = r,
            i = Q(r, z$),
            s = r,
            a = F$(s);
        return E(B$, w({ className: J(a.root, o), ref: n, ownerState: s }, i));
    }),
    W$ = U$;
function j$(e) {
    const {
            className: t,
            classes: n,
            pulsate: r = !1,
            rippleX: o,
            rippleY: i,
            rippleSize: s,
            in: a,
            onExited: l,
            timeout: u,
        } = e,
        [d, f] = b.useState(!1),
        c = J(t, n.ripple, n.rippleVisible, r && n.ripplePulsate),
        h = { width: s, height: s, top: -(s / 2) + i, left: -(s / 2) + o },
        g = J(n.child, d && n.childLeaving, r && n.childPulsate);
    return (
        !a && !d && f(!0),
        b.useEffect(() => {
            if (!a && l != null) {
                const p = setTimeout(l, u);
                return () => {
                    clearTimeout(p);
                };
            }
        }, [l, a, u]),
        E("span", {
            className: c,
            style: h,
            children: E("span", { className: g }),
        })
    );
}
const V$ = ue("MuiTouchRipple", [
        "root",
        "ripple",
        "rippleVisible",
        "ripplePulsate",
        "child",
        "childLeaving",
        "childPulsate",
    ]),
    Qt = V$,
    H$ = ["center", "classes", "className"];
let wu = (e) => e,
    og,
    ig,
    sg,
    ag;
const Nd = 550,
    K$ = 80,
    G$ = cp(
        og ||
            (og = wu`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)
    ),
    q$ = cp(
        ig ||
            (ig = wu`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)
    ),
    Y$ = cp(
        sg ||
            (sg = wu`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)
    ),
    X$ = H("span", { name: "MuiTouchRipple", slot: "Root" })({
        overflow: "hidden",
        pointerEvents: "none",
        position: "absolute",
        zIndex: 0,
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        borderRadius: "inherit",
    }),
    Q$ = H(j$, { name: "MuiTouchRipple", slot: "Ripple" })(
        ag ||
            (ag = wu`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`),
        Qt.rippleVisible,
        G$,
        Nd,
        ({ theme: e }) => e.transitions.easing.easeInOut,
        Qt.ripplePulsate,
        ({ theme: e }) => e.transitions.duration.shorter,
        Qt.child,
        Qt.childLeaving,
        q$,
        Nd,
        ({ theme: e }) => e.transitions.easing.easeInOut,
        Qt.childPulsate,
        Y$,
        ({ theme: e }) => e.transitions.easing.easeInOut
    ),
    J$ = b.forwardRef(function (t, n) {
        const r = ce({ props: t, name: "MuiTouchRipple" }),
            { center: o = !1, classes: i = {}, className: s } = r,
            a = Q(r, H$),
            [l, u] = b.useState([]),
            d = b.useRef(0),
            f = b.useRef(null);
        b.useEffect(() => {
            f.current && (f.current(), (f.current = null));
        }, [l]);
        const c = b.useRef(!1),
            h = b.useRef(null),
            g = b.useRef(null),
            p = b.useRef(null);
        b.useEffect(
            () => () => {
                clearTimeout(h.current);
            },
            []
        );
        const S = b.useCallback(
                (x) => {
                    const {
                        pulsate: k,
                        rippleX: R,
                        rippleY: C,
                        rippleSize: T,
                        cb: I,
                    } = x;
                    u((P) => [
                        ...P,
                        E(
                            Q$,
                            {
                                classes: {
                                    ripple: J(i.ripple, Qt.ripple),
                                    rippleVisible: J(
                                        i.rippleVisible,
                                        Qt.rippleVisible
                                    ),
                                    ripplePulsate: J(
                                        i.ripplePulsate,
                                        Qt.ripplePulsate
                                    ),
                                    child: J(i.child, Qt.child),
                                    childLeaving: J(
                                        i.childLeaving,
                                        Qt.childLeaving
                                    ),
                                    childPulsate: J(
                                        i.childPulsate,
                                        Qt.childPulsate
                                    ),
                                },
                                timeout: Nd,
                                pulsate: k,
                                rippleX: R,
                                rippleY: C,
                                rippleSize: T,
                            },
                            d.current
                        ),
                    ]),
                        (d.current += 1),
                        (f.current = I);
                },
                [i]
            ),
            y = b.useCallback(
                (x = {}, k = {}, R = () => {}) => {
                    const {
                        pulsate: C = !1,
                        center: T = o || k.pulsate,
                        fakeElement: I = !1,
                    } = k;
                    if (
                        (x == null ? void 0 : x.type) === "mousedown" &&
                        c.current
                    ) {
                        c.current = !1;
                        return;
                    }
                    (x == null ? void 0 : x.type) === "touchstart" &&
                        (c.current = !0);
                    const P = I ? null : p.current,
                        D = P
                            ? P.getBoundingClientRect()
                            : { width: 0, height: 0, left: 0, top: 0 };
                    let K, j, N;
                    if (
                        T ||
                        x === void 0 ||
                        (x.clientX === 0 && x.clientY === 0) ||
                        (!x.clientX && !x.touches)
                    )
                        (K = Math.round(D.width / 2)),
                            (j = Math.round(D.height / 2));
                    else {
                        const { clientX: z, clientY: U } =
                            x.touches && x.touches.length > 0
                                ? x.touches[0]
                                : x;
                        (K = Math.round(z - D.left)),
                            (j = Math.round(U - D.top));
                    }
                    if (T)
                        (N = Math.sqrt((2 * D.width ** 2 + D.height ** 2) / 3)),
                            N % 2 === 0 && (N += 1);
                    else {
                        const z =
                                Math.max(
                                    Math.abs((P ? P.clientWidth : 0) - K),
                                    K
                                ) *
                                    2 +
                                2,
                            U =
                                Math.max(
                                    Math.abs((P ? P.clientHeight : 0) - j),
                                    j
                                ) *
                                    2 +
                                2;
                        N = Math.sqrt(z ** 2 + U ** 2);
                    }
                    x != null && x.touches
                        ? g.current === null &&
                          ((g.current = () => {
                              S({
                                  pulsate: C,
                                  rippleX: K,
                                  rippleY: j,
                                  rippleSize: N,
                                  cb: R,
                              });
                          }),
                          (h.current = setTimeout(() => {
                              g.current && (g.current(), (g.current = null));
                          }, K$)))
                        : S({
                              pulsate: C,
                              rippleX: K,
                              rippleY: j,
                              rippleSize: N,
                              cb: R,
                          });
                },
                [o, S]
            ),
            m = b.useCallback(() => {
                y({}, { pulsate: !0 });
            }, [y]),
            v = b.useCallback((x, k) => {
                if (
                    (clearTimeout(h.current),
                    (x == null ? void 0 : x.type) === "touchend" && g.current)
                ) {
                    g.current(),
                        (g.current = null),
                        (h.current = setTimeout(() => {
                            v(x, k);
                        }));
                    return;
                }
                (g.current = null),
                    u((R) => (R.length > 0 ? R.slice(1) : R)),
                    (f.current = k);
            }, []);
        return (
            b.useImperativeHandle(
                n,
                () => ({ pulsate: m, start: y, stop: v }),
                [m, y, v]
            ),
            E(
                X$,
                w({ className: J(Qt.root, i.root, s), ref: p }, a, {
                    children: E(g$, { component: null, exit: !0, children: l }),
                })
            )
        );
    }),
    Z$ = J$;
function eT(e) {
    return fe("MuiButtonBase", e);
}
const tT = ue("MuiButtonBase", ["root", "disabled", "focusVisible"]),
    nT = tT,
    rT = [
        "action",
        "centerRipple",
        "children",
        "className",
        "component",
        "disabled",
        "disableRipple",
        "disableTouchRipple",
        "focusRipple",
        "focusVisibleClassName",
        "LinkComponent",
        "onBlur",
        "onClick",
        "onContextMenu",
        "onDragLeave",
        "onFocus",
        "onFocusVisible",
        "onKeyDown",
        "onKeyUp",
        "onMouseDown",
        "onMouseLeave",
        "onMouseUp",
        "onTouchEnd",
        "onTouchMove",
        "onTouchStart",
        "tabIndex",
        "TouchRippleProps",
        "touchRippleRef",
        "type",
    ],
    oT = (e) => {
        const {
                disabled: t,
                focusVisible: n,
                focusVisibleClassName: r,
                classes: o,
            } = e,
            s = pe(
                { root: ["root", t && "disabled", n && "focusVisible"] },
                eT,
                o
            );
        return n && r && (s.root += ` ${r}`), s;
    },
    iT = H("button", {
        name: "MuiButtonBase",
        slot: "Root",
        overridesResolver: (e, t) => t.root,
    })({
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        boxSizing: "border-box",
        WebkitTapHighlightColor: "transparent",
        backgroundColor: "transparent",
        outline: 0,
        border: 0,
        margin: 0,
        borderRadius: 0,
        padding: 0,
        cursor: "pointer",
        userSelect: "none",
        verticalAlign: "middle",
        MozAppearance: "none",
        WebkitAppearance: "none",
        textDecoration: "none",
        color: "inherit",
        "&::-moz-focus-inner": { borderStyle: "none" },
        [`&.${nT.disabled}`]: { pointerEvents: "none", cursor: "default" },
        "@media print": { colorAdjust: "exact" },
    }),
    sT = b.forwardRef(function (t, n) {
        const r = ce({ props: t, name: "MuiButtonBase" }),
            {
                action: o,
                centerRipple: i = !1,
                children: s,
                className: a,
                component: l = "button",
                disabled: u = !1,
                disableRipple: d = !1,
                disableTouchRipple: f = !1,
                focusRipple: c = !1,
                LinkComponent: h = "a",
                onBlur: g,
                onClick: p,
                onContextMenu: S,
                onDragLeave: y,
                onFocus: m,
                onFocusVisible: v,
                onKeyDown: x,
                onKeyUp: k,
                onMouseDown: R,
                onMouseLeave: C,
                onMouseUp: T,
                onTouchEnd: I,
                onTouchMove: P,
                onTouchStart: D,
                tabIndex: K = 0,
                TouchRippleProps: j,
                touchRippleRef: N,
                type: z,
            } = r,
            U = Q(r, rT),
            Z = b.useRef(null),
            $ = b.useRef(null),
            _ = st($, N),
            { isFocusVisibleRef: L, onFocus: V, onBlur: ne, ref: _e } = gE(),
            [se, ve] = b.useState(!1);
        u && se && ve(!1),
            b.useImperativeHandle(
                o,
                () => ({
                    focusVisible: () => {
                        ve(!0), Z.current.focus();
                    },
                }),
                []
            );
        const [q, he] = b.useState(!1);
        b.useEffect(() => {
            he(!0);
        }, []);
        const Te = q && !d && !u;
        b.useEffect(() => {
            se && c && !d && q && $.current.pulsate();
        }, [d, c, se, q]);
        function be(M, me, Ce = f) {
            return Mo(
                (Ze) => (me && me(Ze), !Ce && $.current && $.current[M](Ze), !0)
            );
        }
        const Ae = be("start", R),
            le = be("stop", S),
            Je = be("stop", y),
            dt = be("stop", T),
            $t = be("stop", (M) => {
                se && M.preventDefault(), C && C(M);
            }),
            Dt = be("start", D),
            an = be("stop", I),
            zt = be("stop", P),
            O = be(
                "stop",
                (M) => {
                    ne(M), L.current === !1 && ve(!1), g && g(M);
                },
                !1
            ),
            A = Mo((M) => {
                Z.current || (Z.current = M.currentTarget),
                    V(M),
                    L.current === !0 && (ve(!0), v && v(M)),
                    m && m(M);
            }),
            B = () => {
                const M = Z.current;
                return l && l !== "button" && !(M.tagName === "A" && M.href);
            },
            Y = b.useRef(!1),
            G = Mo((M) => {
                c &&
                    !Y.current &&
                    se &&
                    $.current &&
                    M.key === " " &&
                    ((Y.current = !0),
                    $.current.stop(M, () => {
                        $.current.start(M);
                    })),
                    M.target === M.currentTarget &&
                        B() &&
                        M.key === " " &&
                        M.preventDefault(),
                    x && x(M),
                    M.target === M.currentTarget &&
                        B() &&
                        M.key === "Enter" &&
                        !u &&
                        (M.preventDefault(), p && p(M));
            }),
            ie = Mo((M) => {
                c &&
                    M.key === " " &&
                    $.current &&
                    se &&
                    !M.defaultPrevented &&
                    ((Y.current = !1),
                    $.current.stop(M, () => {
                        $.current.pulsate(M);
                    })),
                    k && k(M),
                    p &&
                        M.target === M.currentTarget &&
                        B() &&
                        M.key === " " &&
                        !M.defaultPrevented &&
                        p(M);
            });
        let oe = l;
        oe === "button" && (U.href || U.to) && (oe = h);
        const ae = {};
        oe === "button"
            ? ((ae.type = z === void 0 ? "button" : z), (ae.disabled = u))
            : (!U.href && !U.to && (ae.role = "button"),
              u && (ae["aria-disabled"] = u));
        const re = st(n, _e, Z),
            Ie = w({}, r, {
                centerRipple: i,
                component: l,
                disabled: u,
                disableRipple: d,
                disableTouchRipple: f,
                focusRipple: c,
                tabIndex: K,
                focusVisible: se,
            }),
            ee = oT(Ie);
        return te(
            iT,
            w(
                {
                    as: oe,
                    className: J(ee.root, a),
                    ownerState: Ie,
                    onBlur: O,
                    onClick: p,
                    onContextMenu: le,
                    onFocus: A,
                    onKeyDown: G,
                    onKeyUp: ie,
                    onMouseDown: Ae,
                    onMouseLeave: $t,
                    onMouseUp: dt,
                    onDragLeave: Je,
                    onTouchEnd: an,
                    onTouchMove: zt,
                    onTouchStart: Dt,
                    ref: re,
                    tabIndex: u ? -1 : K,
                    type: z,
                },
                ae,
                U,
                {
                    children: [
                        s,
                        Te ? E(Z$, w({ ref: _, center: i }, j)) : null,
                    ],
                }
            )
        );
    }),
    no = sT;
function aT(e) {
    return fe("MuiAccordionSummary", e);
}
const lT = ue("MuiAccordionSummary", [
        "root",
        "expanded",
        "focusVisible",
        "disabled",
        "gutters",
        "contentGutters",
        "content",
        "expandIconWrapper",
    ]),
    _o = lT,
    uT = [
        "children",
        "className",
        "expandIcon",
        "focusVisibleClassName",
        "onClick",
    ],
    cT = (e) => {
        const { classes: t, expanded: n, disabled: r, disableGutters: o } = e;
        return pe(
            {
                root: [
                    "root",
                    n && "expanded",
                    r && "disabled",
                    !o && "gutters",
                ],
                focusVisible: ["focusVisible"],
                content: ["content", n && "expanded", !o && "contentGutters"],
                expandIconWrapper: ["expandIconWrapper", n && "expanded"],
            },
            aT,
            t
        );
    },
    dT = H(no, {
        name: "MuiAccordionSummary",
        slot: "Root",
        overridesResolver: (e, t) => t.root,
    })(({ theme: e, ownerState: t }) => {
        const n = { duration: e.transitions.duration.shortest };
        return w(
            {
                display: "flex",
                minHeight: 48,
                padding: e.spacing(0, 2),
                transition: e.transitions.create(
                    ["min-height", "background-color"],
                    n
                ),
                [`&.${_o.focusVisible}`]: {
                    backgroundColor: (e.vars || e).palette.action.focus,
                },
                [`&.${_o.disabled}`]: {
                    opacity: (e.vars || e).palette.action.disabledOpacity,
                },
                [`&:hover:not(.${_o.disabled})`]: { cursor: "pointer" },
            },
            !t.disableGutters && { [`&.${_o.expanded}`]: { minHeight: 64 } }
        );
    }),
    fT = H("div", {
        name: "MuiAccordionSummary",
        slot: "Content",
        overridesResolver: (e, t) => t.content,
    })(({ theme: e, ownerState: t }) =>
        w(
            { display: "flex", flexGrow: 1, margin: "12px 0" },
            !t.disableGutters && {
                transition: e.transitions.create(["margin"], {
                    duration: e.transitions.duration.shortest,
                }),
                [`&.${_o.expanded}`]: { margin: "20px 0" },
            }
        )
    ),
    pT = H("div", {
        name: "MuiAccordionSummary",
        slot: "ExpandIconWrapper",
        overridesResolver: (e, t) => t.expandIconWrapper,
    })(({ theme: e }) => ({
        display: "flex",
        color: (e.vars || e).palette.action.active,
        transform: "rotate(0deg)",
        transition: e.transitions.create("transform", {
            duration: e.transitions.duration.shortest,
        }),
        [`&.${_o.expanded}`]: { transform: "rotate(180deg)" },
    })),
    hT = b.forwardRef(function (t, n) {
        const r = ce({ props: t, name: "MuiAccordionSummary" }),
            {
                children: o,
                className: i,
                expandIcon: s,
                focusVisibleClassName: a,
                onClick: l,
            } = r,
            u = Q(r, uT),
            {
                disabled: d = !1,
                disableGutters: f,
                expanded: c,
                toggle: h,
            } = b.useContext(p1),
            g = (y) => {
                h && h(y), l && l(y);
            },
            p = w({}, r, { expanded: c, disabled: d, disableGutters: f }),
            S = cT(p);
        return te(
            dT,
            w(
                {
                    focusRipple: !1,
                    disableRipple: !0,
                    disabled: d,
                    component: "div",
                    "aria-expanded": c,
                    className: J(S.root, i),
                    focusVisibleClassName: J(S.focusVisible, a),
                    onClick: g,
                    ref: n,
                    ownerState: p,
                },
                u,
                {
                    children: [
                        E(fT, {
                            className: S.content,
                            ownerState: p,
                            children: o,
                        }),
                        s &&
                            E(pT, {
                                className: S.expandIconWrapper,
                                ownerState: p,
                                children: s,
                            }),
                    ],
                }
            )
        );
    }),
    mT = hT;
function gT(e) {
    return fe("MuiIconButton", e);
}
const yT = ue("MuiIconButton", [
        "root",
        "disabled",
        "colorInherit",
        "colorPrimary",
        "colorSecondary",
        "colorError",
        "colorInfo",
        "colorSuccess",
        "colorWarning",
        "edgeStart",
        "edgeEnd",
        "sizeSmall",
        "sizeMedium",
        "sizeLarge",
    ]),
    vT = yT,
    bT = [
        "edge",
        "children",
        "className",
        "color",
        "disabled",
        "disableFocusRipple",
        "size",
    ],
    xT = (e) => {
        const { classes: t, disabled: n, color: r, edge: o, size: i } = e,
            s = {
                root: [
                    "root",
                    n && "disabled",
                    r !== "default" && `color${W(r)}`,
                    o && `edge${W(o)}`,
                    `size${W(i)}`,
                ],
            };
        return pe(s, gT, t);
    },
    wT = H(no, {
        name: "MuiIconButton",
        slot: "Root",
        overridesResolver: (e, t) => {
            const { ownerState: n } = e;
            return [
                t.root,
                n.color !== "default" && t[`color${W(n.color)}`],
                n.edge && t[`edge${W(n.edge)}`],
                t[`size${W(n.size)}`],
            ];
        },
    })(
        ({ theme: e, ownerState: t }) =>
            w(
                {
                    textAlign: "center",
                    flex: "0 0 auto",
                    fontSize: e.typography.pxToRem(24),
                    padding: 8,
                    borderRadius: "50%",
                    overflow: "visible",
                    color: (e.vars || e).palette.action.active,
                    transition: e.transitions.create("background-color", {
                        duration: e.transitions.duration.shortest,
                    }),
                },
                !t.disableRipple && {
                    "&:hover": {
                        backgroundColor: e.vars
                            ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})`
                            : Me(
                                  e.palette.action.active,
                                  e.palette.action.hoverOpacity
                              ),
                        "@media (hover: none)": {
                            backgroundColor: "transparent",
                        },
                    },
                },
                t.edge === "start" && {
                    marginLeft: t.size === "small" ? -3 : -12,
                },
                t.edge === "end" && {
                    marginRight: t.size === "small" ? -3 : -12,
                }
            ),
        ({ theme: e, ownerState: t }) => {
            var n;
            const r = (n = (e.vars || e).palette) == null ? void 0 : n[t.color];
            return w(
                {},
                t.color === "inherit" && { color: "inherit" },
                t.color !== "inherit" &&
                    t.color !== "default" &&
                    w(
                        { color: r == null ? void 0 : r.main },
                        !t.disableRipple && {
                            "&:hover": w(
                                {},
                                r && {
                                    backgroundColor: e.vars
                                        ? `rgba(${r.mainChannel} / ${e.vars.palette.action.hoverOpacity})`
                                        : Me(
                                              r.main,
                                              e.palette.action.hoverOpacity
                                          ),
                                },
                                {
                                    "@media (hover: none)": {
                                        backgroundColor: "transparent",
                                    },
                                }
                            ),
                        }
                    ),
                t.size === "small" && {
                    padding: 5,
                    fontSize: e.typography.pxToRem(18),
                },
                t.size === "large" && {
                    padding: 12,
                    fontSize: e.typography.pxToRem(28),
                },
                {
                    [`&.${vT.disabled}`]: {
                        backgroundColor: "transparent",
                        color: (e.vars || e).palette.action.disabled,
                    },
                }
            );
        }
    ),
    ST = b.forwardRef(function (t, n) {
        const r = ce({ props: t, name: "MuiIconButton" }),
            {
                edge: o = !1,
                children: i,
                className: s,
                color: a = "default",
                disabled: l = !1,
                disableFocusRipple: u = !1,
                size: d = "medium",
            } = r,
            f = Q(r, bT),
            c = w({}, r, {
                edge: o,
                color: a,
                disabled: l,
                disableFocusRipple: u,
                size: d,
            }),
            h = xT(c);
        return E(
            wT,
            w(
                {
                    className: J(h.root, s),
                    centerRipple: !0,
                    focusRipple: !u,
                    disabled: l,
                    ref: n,
                    ownerState: c,
                },
                f,
                { children: i }
            )
        );
    }),
    Go = ST;
function CT(e) {
    return fe("MuiTypography", e);
}
ue("MuiTypography", [
    "root",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "subtitle1",
    "subtitle2",
    "body1",
    "body2",
    "inherit",
    "button",
    "caption",
    "overline",
    "alignLeft",
    "alignRight",
    "alignCenter",
    "alignJustify",
    "noWrap",
    "gutterBottom",
    "paragraph",
]);
const kT = [
        "align",
        "className",
        "component",
        "gutterBottom",
        "noWrap",
        "paragraph",
        "variant",
        "variantMapping",
    ],
    ET = (e) => {
        const {
                align: t,
                gutterBottom: n,
                noWrap: r,
                paragraph: o,
                variant: i,
                classes: s,
            } = e,
            a = {
                root: [
                    "root",
                    i,
                    e.align !== "inherit" && `align${W(t)}`,
                    n && "gutterBottom",
                    r && "noWrap",
                    o && "paragraph",
                ],
            };
        return pe(a, CT, s);
    },
    RT = H("span", {
        name: "MuiTypography",
        slot: "Root",
        overridesResolver: (e, t) => {
            const { ownerState: n } = e;
            return [
                t.root,
                n.variant && t[n.variant],
                n.align !== "inherit" && t[`align${W(n.align)}`],
                n.noWrap && t.noWrap,
                n.gutterBottom && t.gutterBottom,
                n.paragraph && t.paragraph,
            ];
        },
    })(({ theme: e, ownerState: t }) =>
        w(
            { margin: 0 },
            t.variant && e.typography[t.variant],
            t.align !== "inherit" && { textAlign: t.align },
            t.noWrap && {
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
            },
            t.gutterBottom && { marginBottom: "0.35em" },
            t.paragraph && { marginBottom: 16 }
        )
    ),
    lg = {
        h1: "h1",
        h2: "h2",
        h3: "h3",
        h4: "h4",
        h5: "h5",
        h6: "h6",
        subtitle1: "h6",
        subtitle2: "h6",
        body1: "p",
        body2: "p",
        inherit: "p",
    },
    PT = {
        primary: "primary.main",
        textPrimary: "text.primary",
        secondary: "secondary.main",
        textSecondary: "text.secondary",
        error: "error.main",
    },
    $T = (e) => PT[e] || e,
    TT = b.forwardRef(function (t, n) {
        const r = ce({ props: t, name: "MuiTypography" }),
            o = $T(r.color),
            i = gp(w({}, r, { color: o })),
            {
                align: s = "inherit",
                className: a,
                component: l,
                gutterBottom: u = !1,
                noWrap: d = !1,
                paragraph: f = !1,
                variant: c = "body1",
                variantMapping: h = lg,
            } = i,
            g = Q(i, kT),
            p = w({}, i, {
                align: s,
                color: o,
                className: a,
                component: l,
                gutterBottom: u,
                noWrap: d,
                paragraph: f,
                variant: c,
                variantMapping: h,
            }),
            S = l || (f ? "p" : h[c] || lg[c]) || "span",
            y = ET(p);
        return E(
            RT,
            w({ as: S, ref: n, ownerState: p, className: J(y.root, a) }, g)
        );
    }),
    We = TT,
    IT = Lt(
        E("path", {
            d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z",
        }),
        "Cancel"
    );
function OT(e) {
    return fe("MuiChip", e);
}
const MT = ue("MuiChip", [
        "root",
        "sizeSmall",
        "sizeMedium",
        "colorError",
        "colorInfo",
        "colorPrimary",
        "colorSecondary",
        "colorSuccess",
        "colorWarning",
        "disabled",
        "clickable",
        "clickableColorPrimary",
        "clickableColorSecondary",
        "deletable",
        "deletableColorPrimary",
        "deletableColorSecondary",
        "outlined",
        "filled",
        "outlinedPrimary",
        "outlinedSecondary",
        "filledPrimary",
        "filledSecondary",
        "avatar",
        "avatarSmall",
        "avatarMedium",
        "avatarColorPrimary",
        "avatarColorSecondary",
        "icon",
        "iconSmall",
        "iconMedium",
        "iconColorPrimary",
        "iconColorSecondary",
        "label",
        "labelSmall",
        "labelMedium",
        "deleteIcon",
        "deleteIconSmall",
        "deleteIconMedium",
        "deleteIconColorPrimary",
        "deleteIconColorSecondary",
        "deleteIconOutlinedColorPrimary",
        "deleteIconOutlinedColorSecondary",
        "deleteIconFilledColorPrimary",
        "deleteIconFilledColorSecondary",
        "focusVisible",
    ]),
    we = MT,
    _T = [
        "avatar",
        "className",
        "clickable",
        "color",
        "component",
        "deleteIcon",
        "disabled",
        "icon",
        "label",
        "onClick",
        "onDelete",
        "onKeyDown",
        "onKeyUp",
        "size",
        "variant",
        "tabIndex",
        "skipFocusWhenDisabled",
    ],
    NT = (e) => {
        const {
                classes: t,
                disabled: n,
                size: r,
                color: o,
                iconColor: i,
                onDelete: s,
                clickable: a,
                variant: l,
            } = e,
            u = {
                root: [
                    "root",
                    l,
                    n && "disabled",
                    `size${W(r)}`,
                    `color${W(o)}`,
                    a && "clickable",
                    a && `clickableColor${W(o)}`,
                    s && "deletable",
                    s && `deletableColor${W(o)}`,
                    `${l}${W(o)}`,
                ],
                label: ["label", `label${W(r)}`],
                avatar: ["avatar", `avatar${W(r)}`, `avatarColor${W(o)}`],
                icon: ["icon", `icon${W(r)}`, `iconColor${W(i)}`],
                deleteIcon: [
                    "deleteIcon",
                    `deleteIcon${W(r)}`,
                    `deleteIconColor${W(o)}`,
                    `deleteIcon${W(l)}Color${W(o)}`,
                ],
            };
        return pe(u, OT, t);
    },
    AT = H("div", {
        name: "MuiChip",
        slot: "Root",
        overridesResolver: (e, t) => {
            const { ownerState: n } = e,
                {
                    color: r,
                    iconColor: o,
                    clickable: i,
                    onDelete: s,
                    size: a,
                    variant: l,
                } = n;
            return [
                { [`& .${we.avatar}`]: t.avatar },
                { [`& .${we.avatar}`]: t[`avatar${W(a)}`] },
                { [`& .${we.avatar}`]: t[`avatarColor${W(r)}`] },
                { [`& .${we.icon}`]: t.icon },
                { [`& .${we.icon}`]: t[`icon${W(a)}`] },
                { [`& .${we.icon}`]: t[`iconColor${W(o)}`] },
                { [`& .${we.deleteIcon}`]: t.deleteIcon },
                { [`& .${we.deleteIcon}`]: t[`deleteIcon${W(a)}`] },
                { [`& .${we.deleteIcon}`]: t[`deleteIconColor${W(r)}`] },
                { [`& .${we.deleteIcon}`]: t[`deleteIcon${W(l)}Color${W(r)}`] },
                t.root,
                t[`size${W(a)}`],
                t[`color${W(r)}`],
                i && t.clickable,
                i && r !== "default" && t[`clickableColor${W(r)})`],
                s && t.deletable,
                s && r !== "default" && t[`deletableColor${W(r)}`],
                t[l],
                t[`${l}${W(r)}`],
            ];
        },
    })(
        ({ theme: e, ownerState: t }) => {
            const n = Me(e.palette.text.primary, 0.26),
                r =
                    e.palette.mode === "light"
                        ? e.palette.grey[700]
                        : e.palette.grey[300];
            return w(
                {
                    maxWidth: "100%",
                    fontFamily: e.typography.fontFamily,
                    fontSize: e.typography.pxToRem(13),
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: 32,
                    color: (e.vars || e).palette.text.primary,
                    backgroundColor: (e.vars || e).palette.action.selected,
                    borderRadius: 32 / 2,
                    whiteSpace: "nowrap",
                    transition: e.transitions.create([
                        "background-color",
                        "box-shadow",
                    ]),
                    cursor: "default",
                    outline: 0,
                    textDecoration: "none",
                    border: 0,
                    padding: 0,
                    verticalAlign: "middle",
                    boxSizing: "border-box",
                    [`&.${we.disabled}`]: {
                        opacity: (e.vars || e).palette.action.disabledOpacity,
                        pointerEvents: "none",
                    },
                    [`& .${we.avatar}`]: {
                        marginLeft: 5,
                        marginRight: -6,
                        width: 24,
                        height: 24,
                        color: e.vars
                            ? e.vars.palette.Chip.defaultAvatarColor
                            : r,
                        fontSize: e.typography.pxToRem(12),
                    },
                    [`& .${we.avatarColorPrimary}`]: {
                        color: (e.vars || e).palette.primary.contrastText,
                        backgroundColor: (e.vars || e).palette.primary.dark,
                    },
                    [`& .${we.avatarColorSecondary}`]: {
                        color: (e.vars || e).palette.secondary.contrastText,
                        backgroundColor: (e.vars || e).palette.secondary.dark,
                    },
                    [`& .${we.avatarSmall}`]: {
                        marginLeft: 4,
                        marginRight: -4,
                        width: 18,
                        height: 18,
                        fontSize: e.typography.pxToRem(10),
                    },
                    [`& .${we.icon}`]: w(
                        { marginLeft: 5, marginRight: -6 },
                        t.size === "small" && {
                            fontSize: 18,
                            marginLeft: 4,
                            marginRight: -4,
                        },
                        t.iconColor === t.color &&
                            w(
                                {
                                    color: e.vars
                                        ? e.vars.palette.Chip.defaultIconColor
                                        : r,
                                },
                                t.color !== "default" && { color: "inherit" }
                            )
                    ),
                    [`& .${we.deleteIcon}`]: w(
                        {
                            WebkitTapHighlightColor: "transparent",
                            color: e.vars
                                ? `rgba(${e.vars.palette.text.primaryChannel} / 0.26)`
                                : n,
                            fontSize: 22,
                            cursor: "pointer",
                            margin: "0 5px 0 -6px",
                            "&:hover": {
                                color: e.vars
                                    ? `rgba(${e.vars.palette.text.primaryChannel} / 0.4)`
                                    : Me(n, 0.4),
                            },
                        },
                        t.size === "small" && {
                            fontSize: 16,
                            marginRight: 4,
                            marginLeft: -4,
                        },
                        t.color !== "default" && {
                            color: e.vars
                                ? `rgba(${
                                      e.vars.palette[t.color]
                                          .contrastTextChannel
                                  } / 0.7)`
                                : Me(e.palette[t.color].contrastText, 0.7),
                            "&:hover, &:active": {
                                color: (e.vars || e).palette[t.color]
                                    .contrastText,
                            },
                        }
                    ),
                },
                t.size === "small" && { height: 24 },
                t.color !== "default" && {
                    backgroundColor: (e.vars || e).palette[t.color].main,
                    color: (e.vars || e).palette[t.color].contrastText,
                },
                t.onDelete && {
                    [`&.${we.focusVisible}`]: {
                        backgroundColor: e.vars
                            ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`
                            : Me(
                                  e.palette.action.selected,
                                  e.palette.action.selectedOpacity +
                                      e.palette.action.focusOpacity
                              ),
                    },
                },
                t.onDelete &&
                    t.color !== "default" && {
                        [`&.${we.focusVisible}`]: {
                            backgroundColor: (e.vars || e).palette[t.color]
                                .dark,
                        },
                    }
            );
        },
        ({ theme: e, ownerState: t }) =>
            w(
                {},
                t.clickable && {
                    userSelect: "none",
                    WebkitTapHighlightColor: "transparent",
                    cursor: "pointer",
                    "&:hover": {
                        backgroundColor: e.vars
                            ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`
                            : Me(
                                  e.palette.action.selected,
                                  e.palette.action.selectedOpacity +
                                      e.palette.action.hoverOpacity
                              ),
                    },
                    [`&.${we.focusVisible}`]: {
                        backgroundColor: e.vars
                            ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`
                            : Me(
                                  e.palette.action.selected,
                                  e.palette.action.selectedOpacity +
                                      e.palette.action.focusOpacity
                              ),
                    },
                    "&:active": { boxShadow: (e.vars || e).shadows[1] },
                },
                t.clickable &&
                    t.color !== "default" && {
                        [`&:hover, &.${we.focusVisible}`]: {
                            backgroundColor: (e.vars || e).palette[t.color]
                                .dark,
                        },
                    }
            ),
        ({ theme: e, ownerState: t }) =>
            w(
                {},
                t.variant === "outlined" && {
                    backgroundColor: "transparent",
                    border: e.vars
                        ? `1px solid ${e.vars.palette.Chip.defaultBorder}`
                        : `1px solid ${
                              e.palette.mode === "light"
                                  ? e.palette.grey[400]
                                  : e.palette.grey[700]
                          }`,
                    [`&.${we.clickable}:hover`]: {
                        backgroundColor: (e.vars || e).palette.action.hover,
                    },
                    [`&.${we.focusVisible}`]: {
                        backgroundColor: (e.vars || e).palette.action.focus,
                    },
                    [`& .${we.avatar}`]: { marginLeft: 4 },
                    [`& .${we.avatarSmall}`]: { marginLeft: 2 },
                    [`& .${we.icon}`]: { marginLeft: 4 },
                    [`& .${we.iconSmall}`]: { marginLeft: 2 },
                    [`& .${we.deleteIcon}`]: { marginRight: 5 },
                    [`& .${we.deleteIconSmall}`]: { marginRight: 3 },
                },
                t.variant === "outlined" &&
                    t.color !== "default" && {
                        color: (e.vars || e).palette[t.color].main,
                        border: `1px solid ${
                            e.vars
                                ? `rgba(${
                                      e.vars.palette[t.color].mainChannel
                                  } / 0.7)`
                                : Me(e.palette[t.color].main, 0.7)
                        }`,
                        [`&.${we.clickable}:hover`]: {
                            backgroundColor: e.vars
                                ? `rgba(${
                                      e.vars.palette[t.color].mainChannel
                                  } / ${e.vars.palette.action.hoverOpacity})`
                                : Me(
                                      e.palette[t.color].main,
                                      e.palette.action.hoverOpacity
                                  ),
                        },
                        [`&.${we.focusVisible}`]: {
                            backgroundColor: e.vars
                                ? `rgba(${
                                      e.vars.palette[t.color].mainChannel
                                  } / ${e.vars.palette.action.focusOpacity})`
                                : Me(
                                      e.palette[t.color].main,
                                      e.palette.action.focusOpacity
                                  ),
                        },
                        [`& .${we.deleteIcon}`]: {
                            color: e.vars
                                ? `rgba(${
                                      e.vars.palette[t.color].mainChannel
                                  } / 0.7)`
                                : Me(e.palette[t.color].main, 0.7),
                            "&:hover, &:active": {
                                color: (e.vars || e).palette[t.color].main,
                            },
                        },
                    }
            )
    ),
    LT = H("span", {
        name: "MuiChip",
        slot: "Label",
        overridesResolver: (e, t) => {
            const { ownerState: n } = e,
                { size: r } = n;
            return [t.label, t[`label${W(r)}`]];
        },
    })(({ ownerState: e }) =>
        w(
            {
                overflow: "hidden",
                textOverflow: "ellipsis",
                paddingLeft: 12,
                paddingRight: 12,
                whiteSpace: "nowrap",
            },
            e.size === "small" && { paddingLeft: 8, paddingRight: 8 }
        )
    );
function ug(e) {
    return e.key === "Backspace" || e.key === "Delete";
}
const DT = b.forwardRef(function (t, n) {
        const r = ce({ props: t, name: "MuiChip" }),
            {
                avatar: o,
                className: i,
                clickable: s,
                color: a = "default",
                component: l,
                deleteIcon: u,
                disabled: d = !1,
                icon: f,
                label: c,
                onClick: h,
                onDelete: g,
                onKeyDown: p,
                onKeyUp: S,
                size: y = "medium",
                variant: m = "filled",
                tabIndex: v,
                skipFocusWhenDisabled: x = !1,
            } = r,
            k = Q(r, _T),
            R = b.useRef(null),
            C = st(R, n),
            T = (_) => {
                _.stopPropagation(), g && g(_);
            },
            I = (_) => {
                _.currentTarget === _.target && ug(_) && _.preventDefault(),
                    p && p(_);
            },
            P = (_) => {
                _.currentTarget === _.target &&
                    (g && ug(_)
                        ? g(_)
                        : _.key === "Escape" && R.current && R.current.blur()),
                    S && S(_);
            },
            D = s !== !1 && h ? !0 : s,
            K = D || g ? no : l || "div",
            j = w({}, r, {
                component: K,
                disabled: d,
                size: y,
                color: a,
                iconColor: (b.isValidElement(f) && f.props.color) || a,
                onDelete: !!g,
                clickable: D,
                variant: m,
            }),
            N = NT(j),
            z =
                K === no
                    ? w(
                          {
                              component: l || "div",
                              focusVisibleClassName: N.focusVisible,
                          },
                          g && { disableRipple: !0 }
                      )
                    : {};
        let U = null;
        g &&
            (U =
                u && b.isValidElement(u)
                    ? b.cloneElement(u, {
                          className: J(u.props.className, N.deleteIcon),
                          onClick: T,
                      })
                    : E(IT, { className: J(N.deleteIcon), onClick: T }));
        let Z = null;
        o &&
            b.isValidElement(o) &&
            (Z = b.cloneElement(o, {
                className: J(N.avatar, o.props.className),
            }));
        let $ = null;
        return (
            f &&
                b.isValidElement(f) &&
                ($ = b.cloneElement(f, {
                    className: J(N.icon, f.props.className),
                })),
            te(
                AT,
                w(
                    {
                        as: K,
                        className: J(N.root, i),
                        disabled: D && d ? !0 : void 0,
                        onClick: h,
                        onKeyDown: I,
                        onKeyUp: P,
                        ref: C,
                        tabIndex: x && d ? -1 : v,
                        ownerState: j,
                    },
                    z,
                    k,
                    {
                        children: [
                            Z || $,
                            E(LT, {
                                className: J(N.label),
                                ownerState: j,
                                children: c,
                            }),
                            U,
                        ],
                    }
                )
            )
        );
    }),
    zT = DT;
function fi({ props: e, states: t, muiFormControl: n }) {
    return t.reduce(
        (r, o) => ((r[o] = e[o]), n && typeof e[o] > "u" && (r[o] = n[o]), r),
        {}
    );
}
const FT = b.createContext(void 0),
    Sp = FT;
function pi() {
    return b.useContext(Sp);
}
function h1(e) {
    return E(h2, w({}, e, { defaultTheme: bu }));
}
function cg(e) {
    return e != null && !(Array.isArray(e) && e.length === 0);
}
function Cp(e, t = !1) {
    return (
        e &&
        ((cg(e.value) && e.value !== "") ||
            (t && cg(e.defaultValue) && e.defaultValue !== ""))
    );
}
function BT(e) {
    return e.startAdornment;
}
function UT(e) {
    return fe("MuiInputBase", e);
}
const WT = ue("MuiInputBase", [
        "root",
        "formControl",
        "focused",
        "disabled",
        "adornedStart",
        "adornedEnd",
        "error",
        "sizeSmall",
        "multiline",
        "colorSecondary",
        "fullWidth",
        "hiddenLabel",
        "readOnly",
        "input",
        "inputSizeSmall",
        "inputMultiline",
        "inputTypeSearch",
        "inputAdornedStart",
        "inputAdornedEnd",
        "inputHiddenLabel",
    ]),
    ii = WT,
    jT = [
        "aria-describedby",
        "autoComplete",
        "autoFocus",
        "className",
        "color",
        "components",
        "componentsProps",
        "defaultValue",
        "disabled",
        "disableInjectingGlobalStyles",
        "endAdornment",
        "error",
        "fullWidth",
        "id",
        "inputComponent",
        "inputProps",
        "inputRef",
        "margin",
        "maxRows",
        "minRows",
        "multiline",
        "name",
        "onBlur",
        "onChange",
        "onClick",
        "onFocus",
        "onKeyDown",
        "onKeyUp",
        "placeholder",
        "readOnly",
        "renderSuffix",
        "rows",
        "size",
        "slotProps",
        "slots",
        "startAdornment",
        "type",
        "value",
    ],
    Su = (e, t) => {
        const { ownerState: n } = e;
        return [
            t.root,
            n.formControl && t.formControl,
            n.startAdornment && t.adornedStart,
            n.endAdornment && t.adornedEnd,
            n.error && t.error,
            n.size === "small" && t.sizeSmall,
            n.multiline && t.multiline,
            n.color && t[`color${W(n.color)}`],
            n.fullWidth && t.fullWidth,
            n.hiddenLabel && t.hiddenLabel,
        ];
    },
    Cu = (e, t) => {
        const { ownerState: n } = e;
        return [
            t.input,
            n.size === "small" && t.inputSizeSmall,
            n.multiline && t.inputMultiline,
            n.type === "search" && t.inputTypeSearch,
            n.startAdornment && t.inputAdornedStart,
            n.endAdornment && t.inputAdornedEnd,
            n.hiddenLabel && t.inputHiddenLabel,
        ];
    },
    VT = (e) => {
        const {
                classes: t,
                color: n,
                disabled: r,
                error: o,
                endAdornment: i,
                focused: s,
                formControl: a,
                fullWidth: l,
                hiddenLabel: u,
                multiline: d,
                readOnly: f,
                size: c,
                startAdornment: h,
                type: g,
            } = e,
            p = {
                root: [
                    "root",
                    `color${W(n)}`,
                    r && "disabled",
                    o && "error",
                    l && "fullWidth",
                    s && "focused",
                    a && "formControl",
                    c === "small" && "sizeSmall",
                    d && "multiline",
                    h && "adornedStart",
                    i && "adornedEnd",
                    u && "hiddenLabel",
                    f && "readOnly",
                ],
                input: [
                    "input",
                    r && "disabled",
                    g === "search" && "inputTypeSearch",
                    d && "inputMultiline",
                    c === "small" && "inputSizeSmall",
                    u && "inputHiddenLabel",
                    h && "inputAdornedStart",
                    i && "inputAdornedEnd",
                    f && "readOnly",
                ],
            };
        return pe(p, UT, t);
    },
    ku = H("div", {
        name: "MuiInputBase",
        slot: "Root",
        overridesResolver: Su,
    })(({ theme: e, ownerState: t }) =>
        w(
            {},
            e.typography.body1,
            {
                color: (e.vars || e).palette.text.primary,
                lineHeight: "1.4375em",
                boxSizing: "border-box",
                position: "relative",
                cursor: "text",
                display: "inline-flex",
                alignItems: "center",
                [`&.${ii.disabled}`]: {
                    color: (e.vars || e).palette.text.disabled,
                    cursor: "default",
                },
            },
            t.multiline &&
                w(
                    { padding: "4px 0 5px" },
                    t.size === "small" && { paddingTop: 1 }
                ),
            t.fullWidth && { width: "100%" }
        )
    ),
    Eu = H("input", {
        name: "MuiInputBase",
        slot: "Input",
        overridesResolver: Cu,
    })(({ theme: e, ownerState: t }) => {
        const n = e.palette.mode === "light",
            r = w(
                { color: "currentColor" },
                e.vars
                    ? { opacity: e.vars.opacity.inputPlaceholder }
                    : { opacity: n ? 0.42 : 0.5 },
                {
                    transition: e.transitions.create("opacity", {
                        duration: e.transitions.duration.shorter,
                    }),
                }
            ),
            o = { opacity: "0 !important" },
            i = e.vars
                ? { opacity: e.vars.opacity.inputPlaceholder }
                : { opacity: n ? 0.42 : 0.5 };
        return w(
            {
                font: "inherit",
                letterSpacing: "inherit",
                color: "currentColor",
                padding: "4px 0 5px",
                border: 0,
                boxSizing: "content-box",
                background: "none",
                height: "1.4375em",
                margin: 0,
                WebkitTapHighlightColor: "transparent",
                display: "block",
                minWidth: 0,
                width: "100%",
                animationName: "mui-auto-fill-cancel",
                animationDuration: "10ms",
                "&::-webkit-input-placeholder": r,
                "&::-moz-placeholder": r,
                "&:-ms-input-placeholder": r,
                "&::-ms-input-placeholder": r,
                "&:focus": { outline: 0 },
                "&:invalid": { boxShadow: "none" },
                "&::-webkit-search-decoration": { WebkitAppearance: "none" },
                [`label[data-shrink=false] + .${ii.formControl} &`]: {
                    "&::-webkit-input-placeholder": o,
                    "&::-moz-placeholder": o,
                    "&:-ms-input-placeholder": o,
                    "&::-ms-input-placeholder": o,
                    "&:focus::-webkit-input-placeholder": i,
                    "&:focus::-moz-placeholder": i,
                    "&:focus:-ms-input-placeholder": i,
                    "&:focus::-ms-input-placeholder": i,
                },
                [`&.${ii.disabled}`]: {
                    opacity: 1,
                    WebkitTextFillColor: (e.vars || e).palette.text.disabled,
                },
                "&:-webkit-autofill": {
                    animationDuration: "5000s",
                    animationName: "mui-auto-fill",
                },
            },
            t.size === "small" && { paddingTop: 1 },
            t.multiline && {
                height: "auto",
                resize: "none",
                padding: 0,
                paddingTop: 0,
            },
            t.type === "search" && { MozAppearance: "textfield" }
        );
    }),
    HT = E(h1, {
        styles: {
            "@keyframes mui-auto-fill": { from: { display: "block" } },
            "@keyframes mui-auto-fill-cancel": { from: { display: "block" } },
        },
    }),
    KT = b.forwardRef(function (t, n) {
        var r;
        const o = ce({ props: t, name: "MuiInputBase" }),
            {
                "aria-describedby": i,
                autoComplete: s,
                autoFocus: a,
                className: l,
                components: u = {},
                componentsProps: d = {},
                defaultValue: f,
                disabled: c,
                disableInjectingGlobalStyles: h,
                endAdornment: g,
                fullWidth: p = !1,
                id: S,
                inputComponent: y = "input",
                inputProps: m = {},
                inputRef: v,
                maxRows: x,
                minRows: k,
                multiline: R = !1,
                name: C,
                onBlur: T,
                onChange: I,
                onClick: P,
                onFocus: D,
                onKeyDown: K,
                onKeyUp: j,
                placeholder: N,
                readOnly: z,
                renderSuffix: U,
                rows: Z,
                slotProps: $ = {},
                slots: _ = {},
                startAdornment: L,
                type: V = "text",
                value: ne,
            } = o,
            _e = Q(o, jT),
            se = m.value != null ? m.value : ne,
            { current: ve } = b.useRef(se != null),
            q = b.useRef(),
            he = b.useCallback((ee) => {}, []),
            Te = st(q, v, m.ref, he),
            [be, Ae] = b.useState(!1),
            le = pi(),
            Je = fi({
                props: o,
                muiFormControl: le,
                states: [
                    "color",
                    "disabled",
                    "error",
                    "hiddenLabel",
                    "size",
                    "required",
                    "filled",
                ],
            });
        (Je.focused = le ? le.focused : be),
            b.useEffect(() => {
                !le && c && be && (Ae(!1), T && T());
            }, [le, c, be, T]);
        const dt = le && le.onFilled,
            $t = le && le.onEmpty,
            Dt = b.useCallback(
                (ee) => {
                    Cp(ee) ? dt && dt() : $t && $t();
                },
                [dt, $t]
            );
        Cr(() => {
            ve && Dt({ value: se });
        }, [se, Dt, ve]);
        const an = (ee) => {
                if (Je.disabled) {
                    ee.stopPropagation();
                    return;
                }
                D && D(ee),
                    m.onFocus && m.onFocus(ee),
                    le && le.onFocus ? le.onFocus(ee) : Ae(!0);
            },
            zt = (ee) => {
                T && T(ee),
                    m.onBlur && m.onBlur(ee),
                    le && le.onBlur ? le.onBlur(ee) : Ae(!1);
            },
            O = (ee, ...M) => {
                if (!ve) {
                    const me = ee.target || q.current;
                    if (me == null) throw new Error(Kn(1));
                    Dt({ value: me.value });
                }
                m.onChange && m.onChange(ee, ...M), I && I(ee, ...M);
            };
        b.useEffect(() => {
            Dt(q.current);
        }, []);
        const A = (ee) => {
            q.current && ee.currentTarget === ee.target && q.current.focus(),
                P && P(ee);
        };
        let B = y,
            Y = m;
        R &&
            B === "input" &&
            (Z
                ? (Y = w({ type: void 0, minRows: Z, maxRows: Z }, Y))
                : (Y = w({ type: void 0, maxRows: x, minRows: k }, Y)),
            (B = o$));
        const G = (ee) => {
            Dt(
                ee.animationName === "mui-auto-fill-cancel"
                    ? q.current
                    : { value: "x" }
            );
        };
        b.useEffect(() => {
            le && le.setAdornedStart(Boolean(L));
        }, [le, L]);
        const ie = w({}, o, {
                color: Je.color || "primary",
                disabled: Je.disabled,
                endAdornment: g,
                error: Je.error,
                focused: Je.focused,
                formControl: le,
                fullWidth: p,
                hiddenLabel: Je.hiddenLabel,
                multiline: R,
                size: Je.size,
                startAdornment: L,
                type: V,
            }),
            oe = VT(ie),
            ae = _.root || u.Root || ku,
            re = $.root || d.root || {},
            Ie = _.input || u.Input || Eu;
        return (
            (Y = w({}, Y, (r = $.input) != null ? r : d.input)),
            te(b.Fragment, {
                children: [
                    !h && HT,
                    te(
                        ae,
                        w(
                            {},
                            re,
                            !oi(ae) && { ownerState: w({}, ie, re.ownerState) },
                            { ref: n, onClick: A },
                            _e,
                            {
                                className: J(oe.root, re.className, l),
                                children: [
                                    L,
                                    E(Sp.Provider, {
                                        value: null,
                                        children: E(
                                            Ie,
                                            w(
                                                {
                                                    ownerState: ie,
                                                    "aria-invalid": Je.error,
                                                    "aria-describedby": i,
                                                    autoComplete: s,
                                                    autoFocus: a,
                                                    defaultValue: f,
                                                    disabled: Je.disabled,
                                                    id: S,
                                                    onAnimationStart: G,
                                                    name: C,
                                                    placeholder: N,
                                                    readOnly: z,
                                                    required: Je.required,
                                                    rows: Z,
                                                    value: se,
                                                    onKeyDown: K,
                                                    onKeyUp: j,
                                                    type: V,
                                                },
                                                Y,
                                                !oi(Ie) && {
                                                    as: B,
                                                    ownerState: w(
                                                        {},
                                                        ie,
                                                        Y.ownerState
                                                    ),
                                                },
                                                {
                                                    ref: Te,
                                                    className: J(
                                                        oe.input,
                                                        Y.className
                                                    ),
                                                    onBlur: zt,
                                                    onChange: O,
                                                    onFocus: an,
                                                }
                                            )
                                        ),
                                    }),
                                    g,
                                    U
                                        ? U(w({}, Je, { startAdornment: L }))
                                        : null,
                                ],
                            }
                        )
                    ),
                ],
            })
        );
    }),
    kp = KT;
function GT(e) {
    return fe("MuiInput", e);
}
const qT = w({}, ii, ue("MuiInput", ["root", "underline", "input"])),
    Ti = qT;
function YT(e) {
    return fe("MuiOutlinedInput", e);
}
const XT = w(
        {},
        ii,
        ue("MuiOutlinedInput", ["root", "notchedOutline", "input"])
    ),
    Zn = XT;
function QT(e) {
    return fe("MuiFilledInput", e);
}
const JT = w({}, ii, ue("MuiFilledInput", ["root", "underline", "input"])),
    Or = JT,
    ZT = Lt(E("path", { d: "M7 10l5 5 5-5z" }), "ArrowDropDown"),
    eI = [
        "addEndListener",
        "appear",
        "children",
        "easing",
        "in",
        "onEnter",
        "onEntered",
        "onEntering",
        "onExit",
        "onExited",
        "onExiting",
        "style",
        "timeout",
        "TransitionComponent",
    ],
    tI = { entering: { opacity: 1 }, entered: { opacity: 1 } },
    nI = b.forwardRef(function (t, n) {
        const r = so(),
            o = {
                enter: r.transitions.duration.enteringScreen,
                exit: r.transitions.duration.leavingScreen,
            },
            {
                addEndListener: i,
                appear: s = !0,
                children: a,
                easing: l,
                in: u,
                onEnter: d,
                onEntered: f,
                onEntering: c,
                onExit: h,
                onExited: g,
                onExiting: p,
                style: S,
                timeout: y = o,
                TransitionComponent: m = xu,
            } = t,
            v = Q(t, eI),
            x = b.useRef(null),
            k = st(x, a.ref, n),
            R = (N) => (z) => {
                if (N) {
                    const U = x.current;
                    z === void 0 ? N(U) : N(U, z);
                }
            },
            C = R(c),
            T = R((N, z) => {
                wp(N);
                const U = kr(
                    { style: S, timeout: y, easing: l },
                    { mode: "enter" }
                );
                (N.style.webkitTransition = r.transitions.create("opacity", U)),
                    (N.style.transition = r.transitions.create("opacity", U)),
                    d && d(N, z);
            }),
            I = R(f),
            P = R(p),
            D = R((N) => {
                const z = kr(
                    { style: S, timeout: y, easing: l },
                    { mode: "exit" }
                );
                (N.style.webkitTransition = r.transitions.create("opacity", z)),
                    (N.style.transition = r.transitions.create("opacity", z)),
                    h && h(N);
            }),
            K = R(g);
        return E(
            m,
            w(
                {
                    appear: s,
                    in: u,
                    nodeRef: x,
                    onEnter: T,
                    onEntered: I,
                    onEntering: C,
                    onExit: D,
                    onExited: K,
                    onExiting: P,
                    addEndListener: (N) => {
                        i && i(x.current, N);
                    },
                    timeout: y,
                },
                v,
                {
                    children: (N, z) =>
                        b.cloneElement(
                            a,
                            w(
                                {
                                    style: w(
                                        {
                                            opacity: 0,
                                            visibility:
                                                N === "exited" && !u
                                                    ? "hidden"
                                                    : void 0,
                                        },
                                        tI[N],
                                        S,
                                        a.props.style
                                    ),
                                    ref: k,
                                },
                                z
                            )
                        ),
                }
            )
        );
    }),
    m1 = nI;
function rI(e) {
    return fe("MuiBackdrop", e);
}
ue("MuiBackdrop", ["root", "invisible"]);
const oI = [
        "children",
        "component",
        "components",
        "componentsProps",
        "className",
        "invisible",
        "open",
        "slotProps",
        "slots",
        "transitionDuration",
        "TransitionComponent",
    ],
    iI = (e) => {
        const { classes: t, invisible: n } = e;
        return pe({ root: ["root", n && "invisible"] }, rI, t);
    },
    sI = H("div", {
        name: "MuiBackdrop",
        slot: "Root",
        overridesResolver: (e, t) => {
            const { ownerState: n } = e;
            return [t.root, n.invisible && t.invisible];
        },
    })(({ ownerState: e }) =>
        w(
            {
                position: "fixed",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                right: 0,
                bottom: 0,
                top: 0,
                left: 0,
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                WebkitTapHighlightColor: "transparent",
            },
            e.invisible && { backgroundColor: "transparent" }
        )
    ),
    aI = b.forwardRef(function (t, n) {
        var r, o, i;
        const s = ce({ props: t, name: "MuiBackdrop" }),
            {
                children: a,
                component: l = "div",
                components: u = {},
                componentsProps: d = {},
                className: f,
                invisible: c = !1,
                open: h,
                slotProps: g = {},
                slots: p = {},
                transitionDuration: S,
                TransitionComponent: y = m1,
            } = s,
            m = Q(s, oI),
            v = w({}, s, { component: l, invisible: c }),
            x = iI(v),
            k = (r = g.root) != null ? r : d.root;
        return E(
            y,
            w({ in: h, timeout: S }, m, {
                children: E(
                    sI,
                    w({ "aria-hidden": !0 }, k, {
                        as:
                            (o = (i = p.root) != null ? i : u.Root) != null
                                ? o
                                : l,
                        className: J(
                            x.root,
                            f,
                            k == null ? void 0 : k.className
                        ),
                        ownerState: w({}, v, k == null ? void 0 : k.ownerState),
                        classes: x,
                        ref: n,
                        children: a,
                    })
                ),
            })
        );
    }),
    g1 = aI,
    lI = vp(),
    uI = xR({
        defaultTheme: lI,
        defaultClassName: "MuiBox-root",
        generateClassName: L0.generate,
    }),
    ze = uI;
function cI(e) {
    return fe("MuiButton", e);
}
const dI = ue("MuiButton", [
        "root",
        "text",
        "textInherit",
        "textPrimary",
        "textSecondary",
        "textSuccess",
        "textError",
        "textInfo",
        "textWarning",
        "outlined",
        "outlinedInherit",
        "outlinedPrimary",
        "outlinedSecondary",
        "outlinedSuccess",
        "outlinedError",
        "outlinedInfo",
        "outlinedWarning",
        "contained",
        "containedInherit",
        "containedPrimary",
        "containedSecondary",
        "containedSuccess",
        "containedError",
        "containedInfo",
        "containedWarning",
        "disableElevation",
        "focusVisible",
        "disabled",
        "colorInherit",
        "textSizeSmall",
        "textSizeMedium",
        "textSizeLarge",
        "outlinedSizeSmall",
        "outlinedSizeMedium",
        "outlinedSizeLarge",
        "containedSizeSmall",
        "containedSizeMedium",
        "containedSizeLarge",
        "sizeMedium",
        "sizeSmall",
        "sizeLarge",
        "fullWidth",
        "startIcon",
        "endIcon",
        "iconSizeSmall",
        "iconSizeMedium",
        "iconSizeLarge",
    ]),
    la = dI,
    fI = b.createContext({}),
    pI = fI,
    hI = [
        "children",
        "color",
        "component",
        "className",
        "disabled",
        "disableElevation",
        "disableFocusRipple",
        "endIcon",
        "focusVisibleClassName",
        "fullWidth",
        "size",
        "startIcon",
        "type",
        "variant",
    ],
    mI = (e) => {
        const {
                color: t,
                disableElevation: n,
                fullWidth: r,
                size: o,
                variant: i,
                classes: s,
            } = e,
            a = {
                root: [
                    "root",
                    i,
                    `${i}${W(t)}`,
                    `size${W(o)}`,
                    `${i}Size${W(o)}`,
                    t === "inherit" && "colorInherit",
                    n && "disableElevation",
                    r && "fullWidth",
                ],
                label: ["label"],
                startIcon: ["startIcon", `iconSize${W(o)}`],
                endIcon: ["endIcon", `iconSize${W(o)}`],
            },
            l = pe(a, cI, s);
        return w({}, s, l);
    },
    y1 = (e) =>
        w(
            {},
            e.size === "small" && { "& > *:nth-of-type(1)": { fontSize: 18 } },
            e.size === "medium" && { "& > *:nth-of-type(1)": { fontSize: 20 } },
            e.size === "large" && { "& > *:nth-of-type(1)": { fontSize: 22 } }
        ),
    gI = H(no, {
        shouldForwardProp: (e) => xn(e) || e === "classes",
        name: "MuiButton",
        slot: "Root",
        overridesResolver: (e, t) => {
            const { ownerState: n } = e;
            return [
                t.root,
                t[n.variant],
                t[`${n.variant}${W(n.color)}`],
                t[`size${W(n.size)}`],
                t[`${n.variant}Size${W(n.size)}`],
                n.color === "inherit" && t.colorInherit,
                n.disableElevation && t.disableElevation,
                n.fullWidth && t.fullWidth,
            ];
        },
    })(
        ({ theme: e, ownerState: t }) => {
            var n, r;
            return w(
                {},
                e.typography.button,
                {
                    minWidth: 64,
                    padding: "6px 16px",
                    borderRadius: (e.vars || e).shape.borderRadius,
                    transition: e.transitions.create(
                        [
                            "background-color",
                            "box-shadow",
                            "border-color",
                            "color",
                        ],
                        { duration: e.transitions.duration.short }
                    ),
                    "&:hover": w(
                        {
                            textDecoration: "none",
                            backgroundColor: e.vars
                                ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})`
                                : Me(
                                      e.palette.text.primary,
                                      e.palette.action.hoverOpacity
                                  ),
                            "@media (hover: none)": {
                                backgroundColor: "transparent",
                            },
                        },
                        t.variant === "text" &&
                            t.color !== "inherit" && {
                                backgroundColor: e.vars
                                    ? `rgba(${
                                          e.vars.palette[t.color].mainChannel
                                      } / ${
                                          e.vars.palette.action.hoverOpacity
                                      })`
                                    : Me(
                                          e.palette[t.color].main,
                                          e.palette.action.hoverOpacity
                                      ),
                                "@media (hover: none)": {
                                    backgroundColor: "transparent",
                                },
                            },
                        t.variant === "outlined" &&
                            t.color !== "inherit" && {
                                border: `1px solid ${
                                    (e.vars || e).palette[t.color].main
                                }`,
                                backgroundColor: e.vars
                                    ? `rgba(${
                                          e.vars.palette[t.color].mainChannel
                                      } / ${
                                          e.vars.palette.action.hoverOpacity
                                      })`
                                    : Me(
                                          e.palette[t.color].main,
                                          e.palette.action.hoverOpacity
                                      ),
                                "@media (hover: none)": {
                                    backgroundColor: "transparent",
                                },
                            },
                        t.variant === "contained" && {
                            backgroundColor: (e.vars || e).palette.grey.A100,
                            boxShadow: (e.vars || e).shadows[4],
                            "@media (hover: none)": {
                                boxShadow: (e.vars || e).shadows[2],
                                backgroundColor: (e.vars || e).palette
                                    .grey[300],
                            },
                        },
                        t.variant === "contained" &&
                            t.color !== "inherit" && {
                                backgroundColor: (e.vars || e).palette[t.color]
                                    .dark,
                                "@media (hover: none)": {
                                    backgroundColor: (e.vars || e).palette[
                                        t.color
                                    ].main,
                                },
                            }
                    ),
                    "&:active": w(
                        {},
                        t.variant === "contained" && {
                            boxShadow: (e.vars || e).shadows[8],
                        }
                    ),
                    [`&.${la.focusVisible}`]: w(
                        {},
                        t.variant === "contained" && {
                            boxShadow: (e.vars || e).shadows[6],
                        }
                    ),
                    [`&.${la.disabled}`]: w(
                        { color: (e.vars || e).palette.action.disabled },
                        t.variant === "outlined" && {
                            border: `1px solid ${
                                (e.vars || e).palette.action.disabledBackground
                            }`,
                        },
                        t.variant === "outlined" &&
                            t.color === "secondary" && {
                                border: `1px solid ${
                                    (e.vars || e).palette.action.disabled
                                }`,
                            },
                        t.variant === "contained" && {
                            color: (e.vars || e).palette.action.disabled,
                            boxShadow: (e.vars || e).shadows[0],
                            backgroundColor: (e.vars || e).palette.action
                                .disabledBackground,
                        }
                    ),
                },
                t.variant === "text" && { padding: "6px 8px" },
                t.variant === "text" &&
                    t.color !== "inherit" && {
                        color: (e.vars || e).palette[t.color].main,
                    },
                t.variant === "outlined" && {
                    padding: "5px 15px",
                    border: "1px solid currentColor",
                },
                t.variant === "outlined" &&
                    t.color !== "inherit" && {
                        color: (e.vars || e).palette[t.color].main,
                        border: e.vars
                            ? `1px solid rgba(${
                                  e.vars.palette[t.color].mainChannel
                              } / 0.5)`
                            : `1px solid ${Me(e.palette[t.color].main, 0.5)}`,
                    },
                t.variant === "contained" && {
                    color: e.vars
                        ? e.vars.palette.text.primary
                        : (n = (r = e.palette).getContrastText) == null
                        ? void 0
                        : n.call(r, e.palette.grey[300]),
                    backgroundColor: (e.vars || e).palette.grey[300],
                    boxShadow: (e.vars || e).shadows[2],
                },
                t.variant === "contained" &&
                    t.color !== "inherit" && {
                        color: (e.vars || e).palette[t.color].contrastText,
                        backgroundColor: (e.vars || e).palette[t.color].main,
                    },
                t.color === "inherit" && {
                    color: "inherit",
                    borderColor: "currentColor",
                },
                t.size === "small" &&
                    t.variant === "text" && {
                        padding: "4px 5px",
                        fontSize: e.typography.pxToRem(13),
                    },
                t.size === "large" &&
                    t.variant === "text" && {
                        padding: "8px 11px",
                        fontSize: e.typography.pxToRem(15),
                    },
                t.size === "small" &&
                    t.variant === "outlined" && {
                        padding: "3px 9px",
                        fontSize: e.typography.pxToRem(13),
                    },
                t.size === "large" &&
                    t.variant === "outlined" && {
                        padding: "7px 21px",
                        fontSize: e.typography.pxToRem(15),
                    },
                t.size === "small" &&
                    t.variant === "contained" && {
                        padding: "4px 10px",
                        fontSize: e.typography.pxToRem(13),
                    },
                t.size === "large" &&
                    t.variant === "contained" && {
                        padding: "8px 22px",
                        fontSize: e.typography.pxToRem(15),
                    },
                t.fullWidth && { width: "100%" }
            );
        },
        ({ ownerState: e }) =>
            e.disableElevation && {
                boxShadow: "none",
                "&:hover": { boxShadow: "none" },
                [`&.${la.focusVisible}`]: { boxShadow: "none" },
                "&:active": { boxShadow: "none" },
                [`&.${la.disabled}`]: { boxShadow: "none" },
            }
    ),
    yI = H("span", {
        name: "MuiButton",
        slot: "StartIcon",
        overridesResolver: (e, t) => {
            const { ownerState: n } = e;
            return [t.startIcon, t[`iconSize${W(n.size)}`]];
        },
    })(({ ownerState: e }) =>
        w(
            { display: "inherit", marginRight: 8, marginLeft: -4 },
            e.size === "small" && { marginLeft: -2 },
            y1(e)
        )
    ),
    vI = H("span", {
        name: "MuiButton",
        slot: "EndIcon",
        overridesResolver: (e, t) => {
            const { ownerState: n } = e;
            return [t.endIcon, t[`iconSize${W(n.size)}`]];
        },
    })(({ ownerState: e }) =>
        w(
            { display: "inherit", marginRight: -4, marginLeft: 8 },
            e.size === "small" && { marginRight: -2 },
            y1(e)
        )
    ),
    bI = b.forwardRef(function (t, n) {
        const r = b.useContext(pI),
            o = op(r, t),
            i = ce({ props: o, name: "MuiButton" }),
            {
                children: s,
                color: a = "primary",
                component: l = "button",
                className: u,
                disabled: d = !1,
                disableElevation: f = !1,
                disableFocusRipple: c = !1,
                endIcon: h,
                focusVisibleClassName: g,
                fullWidth: p = !1,
                size: S = "medium",
                startIcon: y,
                type: m,
                variant: v = "text",
            } = i,
            x = Q(i, hI),
            k = w({}, i, {
                color: a,
                component: l,
                disabled: d,
                disableElevation: f,
                disableFocusRipple: c,
                fullWidth: p,
                size: S,
                type: m,
                variant: v,
            }),
            R = mI(k),
            C =
                y &&
                E(yI, { className: R.startIcon, ownerState: k, children: y }),
            T =
                h &&
                E(vI, { className: R.endIcon, ownerState: k, children: h });
        return te(
            gI,
            w(
                {
                    ownerState: k,
                    className: J(r.className, R.root, u),
                    component: l,
                    disabled: d,
                    focusRipple: !c,
                    focusVisibleClassName: J(R.focusVisible, g),
                    ref: n,
                    type: m,
                },
                x,
                { classes: R, children: [C, s, T] }
            )
        );
    }),
    ro = bI,
    xI = l1({
        createStyledComponent: H("div", {
            name: "MuiContainer",
            slot: "Root",
            overridesResolver: (e, t) => {
                const { ownerState: n } = e;
                return [
                    t.root,
                    t[`maxWidth${W(String(n.maxWidth))}`],
                    n.fixed && t.fixed,
                    n.disableGutters && t.disableGutters,
                ];
            },
        }),
        useThemeProps: (e) => ce({ props: e, name: "MuiContainer" }),
    }),
    v1 = xI,
    wI = (e, t) =>
        w(
            {
                WebkitFontSmoothing: "antialiased",
                MozOsxFontSmoothing: "grayscale",
                boxSizing: "border-box",
                WebkitTextSizeAdjust: "100%",
            },
            t && !e.vars && { colorScheme: e.palette.mode }
        ),
    SI = (e) =>
        w({ color: (e.vars || e).palette.text.primary }, e.typography.body1, {
            backgroundColor: (e.vars || e).palette.background.default,
            "@media print": {
                backgroundColor: (e.vars || e).palette.common.white,
            },
        }),
    CI = (e, t = !1) => {
        var n, r;
        const o = {};
        t &&
            e.colorSchemes &&
            Object.entries(e.colorSchemes).forEach(([a, l]) => {
                var u;
                o[e.getColorSchemeSelector(a).replace(/\s*&/, "")] = {
                    colorScheme: (u = l.palette) == null ? void 0 : u.mode,
                };
            });
        let i = w(
            {
                html: wI(e, t),
                "*, *::before, *::after": { boxSizing: "inherit" },
                "strong, b": { fontWeight: e.typography.fontWeightBold },
                body: w({ margin: 0 }, SI(e), {
                    "&::backdrop": {
                        backgroundColor: (e.vars || e).palette.background
                            .default,
                    },
                }),
            },
            o
        );
        const s =
            (n = e.components) == null || (r = n.MuiCssBaseline) == null
                ? void 0
                : r.styleOverrides;
        return s && (i = [i, s]), i;
    };
function kI(e) {
    const t = ce({ props: e, name: "MuiCssBaseline" }),
        { children: n, enableColorScheme: r = !1 } = t;
    return te(b.Fragment, {
        children: [E(h1, { styles: (o) => CI(o, r) }), n],
    });
}
const EI = [
        "BackdropComponent",
        "BackdropProps",
        "closeAfterTransition",
        "children",
        "component",
        "components",
        "componentsProps",
        "disableAutoFocus",
        "disableEnforceFocus",
        "disableEscapeKeyDown",
        "disablePortal",
        "disableRestoreFocus",
        "disableScrollLock",
        "hideBackdrop",
        "keepMounted",
        "slotProps",
        "slots",
        "theme",
    ],
    RI = (e) => e.classes,
    PI = H("div", {
        name: "MuiModal",
        slot: "Root",
        overridesResolver: (e, t) => {
            const { ownerState: n } = e;
            return [t.root, !n.open && n.exited && t.hidden];
        },
    })(({ theme: e, ownerState: t }) =>
        w(
            {
                position: "fixed",
                zIndex: (e.vars || e).zIndex.modal,
                right: 0,
                bottom: 0,
                top: 0,
                left: 0,
            },
            !t.open && t.exited && { visibility: "hidden" }
        )
    ),
    $I = H(g1, {
        name: "MuiModal",
        slot: "Backdrop",
        overridesResolver: (e, t) => t.backdrop,
    })({ zIndex: -1 }),
    TI = b.forwardRef(function (t, n) {
        var r, o, i, s, a, l;
        const u = ce({ name: "MuiModal", props: t }),
            {
                BackdropComponent: d = $I,
                BackdropProps: f,
                closeAfterTransition: c = !1,
                children: h,
                component: g,
                components: p = {},
                componentsProps: S = {},
                disableAutoFocus: y = !1,
                disableEnforceFocus: m = !1,
                disableEscapeKeyDown: v = !1,
                disablePortal: x = !1,
                disableRestoreFocus: k = !1,
                disableScrollLock: R = !1,
                hideBackdrop: C = !1,
                keepMounted: T = !1,
                slotProps: I,
                slots: P,
                theme: D,
            } = u,
            K = Q(u, EI),
            [j, N] = b.useState(!0),
            z = {
                closeAfterTransition: c,
                disableAutoFocus: y,
                disableEnforceFocus: m,
                disableEscapeKeyDown: v,
                disablePortal: x,
                disableRestoreFocus: k,
                disableScrollLock: R,
                hideBackdrop: C,
                keepMounted: T,
            },
            U = w({}, u, z, { exited: j }),
            Z = RI(U),
            $ =
                (r = (o = P == null ? void 0 : P.root) != null ? o : p.Root) !=
                null
                    ? r
                    : PI,
            _ =
                (i =
                    (s = P == null ? void 0 : P.backdrop) != null
                        ? s
                        : p.Backdrop) != null
                    ? i
                    : d,
            L = (a = I == null ? void 0 : I.root) != null ? a : S.root,
            V = (l = I == null ? void 0 : I.backdrop) != null ? l : S.backdrop;
        return E(
            e$,
            w(
                {
                    slots: { root: $, backdrop: _ },
                    slotProps: {
                        root: () =>
                            w({}, Od(L, U), !oi($) && { as: g, theme: D }),
                        backdrop: () => w({}, f, Od(V, U)),
                    },
                    onTransitionEnter: () => N(!1),
                    onTransitionExited: () => N(!0),
                    ref: n,
                },
                K,
                { classes: Z },
                z,
                { children: h }
            )
        );
    }),
    Ep = TI;
function II(e) {
    return fe("MuiDialog", e);
}
const OI = ue("MuiDialog", [
        "root",
        "scrollPaper",
        "scrollBody",
        "container",
        "paper",
        "paperScrollPaper",
        "paperScrollBody",
        "paperWidthFalse",
        "paperWidthXs",
        "paperWidthSm",
        "paperWidthMd",
        "paperWidthLg",
        "paperWidthXl",
        "paperFullWidth",
        "paperFullScreen",
    ]),
    mc = OI,
    MI = b.createContext({}),
    b1 = MI,
    _I = [
        "aria-describedby",
        "aria-labelledby",
        "BackdropComponent",
        "BackdropProps",
        "children",
        "className",
        "disableEscapeKeyDown",
        "fullScreen",
        "fullWidth",
        "maxWidth",
        "onBackdropClick",
        "onClose",
        "open",
        "PaperComponent",
        "PaperProps",
        "scroll",
        "TransitionComponent",
        "transitionDuration",
        "TransitionProps",
    ],
    NI = H(g1, {
        name: "MuiDialog",
        slot: "Backdrop",
        overrides: (e, t) => t.backdrop,
    })({ zIndex: -1 }),
    AI = (e) => {
        const {
                classes: t,
                scroll: n,
                maxWidth: r,
                fullWidth: o,
                fullScreen: i,
            } = e,
            s = {
                root: ["root"],
                container: ["container", `scroll${W(n)}`],
                paper: [
                    "paper",
                    `paperScroll${W(n)}`,
                    `paperWidth${W(String(r))}`,
                    o && "paperFullWidth",
                    i && "paperFullScreen",
                ],
            };
        return pe(s, II, t);
    },
    LI = H(Ep, {
        name: "MuiDialog",
        slot: "Root",
        overridesResolver: (e, t) => t.root,
    })({ "@media print": { position: "absolute !important" } }),
    DI = H("div", {
        name: "MuiDialog",
        slot: "Container",
        overridesResolver: (e, t) => {
            const { ownerState: n } = e;
            return [t.container, t[`scroll${W(n.scroll)}`]];
        },
    })(({ ownerState: e }) =>
        w(
            { height: "100%", "@media print": { height: "auto" }, outline: 0 },
            e.scroll === "paper" && {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            },
            e.scroll === "body" && {
                overflowY: "auto",
                overflowX: "hidden",
                textAlign: "center",
                "&:after": {
                    content: '""',
                    display: "inline-block",
                    verticalAlign: "middle",
                    height: "100%",
                    width: "0",
                },
            }
        )
    ),
    zI = H(ao, {
        name: "MuiDialog",
        slot: "Paper",
        overridesResolver: (e, t) => {
            const { ownerState: n } = e;
            return [
                t.paper,
                t[`scrollPaper${W(n.scroll)}`],
                t[`paperWidth${W(String(n.maxWidth))}`],
                n.fullWidth && t.paperFullWidth,
                n.fullScreen && t.paperFullScreen,
            ];
        },
    })(({ theme: e, ownerState: t }) =>
        w(
            {
                margin: 32,
                position: "relative",
                overflowY: "auto",
                "@media print": { overflowY: "visible", boxShadow: "none" },
            },
            t.scroll === "paper" && {
                display: "flex",
                flexDirection: "column",
                maxHeight: "calc(100% - 64px)",
            },
            t.scroll === "body" && {
                display: "inline-block",
                verticalAlign: "middle",
                textAlign: "left",
            },
            !t.maxWidth && { maxWidth: "calc(100% - 64px)" },
            t.maxWidth === "xs" && {
                maxWidth:
                    e.breakpoints.unit === "px"
                        ? Math.max(e.breakpoints.values.xs, 444)
                        : `${e.breakpoints.values.xs}${e.breakpoints.unit}`,
                [`&.${mc.paperScrollBody}`]: {
                    [e.breakpoints.down(
                        Math.max(e.breakpoints.values.xs, 444) + 32 * 2
                    )]: { maxWidth: "calc(100% - 64px)" },
                },
            },
            t.maxWidth &&
                t.maxWidth !== "xs" && {
                    maxWidth: `${e.breakpoints.values[t.maxWidth]}${
                        e.breakpoints.unit
                    }`,
                    [`&.${mc.paperScrollBody}`]: {
                        [e.breakpoints.down(
                            e.breakpoints.values[t.maxWidth] + 32 * 2
                        )]: { maxWidth: "calc(100% - 64px)" },
                    },
                },
            t.fullWidth && { width: "calc(100% - 64px)" },
            t.fullScreen && {
                margin: 0,
                width: "100%",
                maxWidth: "100%",
                height: "100%",
                maxHeight: "none",
                borderRadius: 0,
                [`&.${mc.paperScrollBody}`]: { margin: 0, maxWidth: "100%" },
            }
        )
    ),
    FI = b.forwardRef(function (t, n) {
        const r = ce({ props: t, name: "MuiDialog" }),
            o = so(),
            i = {
                enter: o.transitions.duration.enteringScreen,
                exit: o.transitions.duration.leavingScreen,
            },
            {
                "aria-describedby": s,
                "aria-labelledby": a,
                BackdropComponent: l,
                BackdropProps: u,
                children: d,
                className: f,
                disableEscapeKeyDown: c = !1,
                fullScreen: h = !1,
                fullWidth: g = !1,
                maxWidth: p = "sm",
                onBackdropClick: S,
                onClose: y,
                open: m,
                PaperComponent: v = ao,
                PaperProps: x = {},
                scroll: k = "paper",
                TransitionComponent: R = m1,
                transitionDuration: C = i,
                TransitionProps: T,
            } = r,
            I = Q(r, _I),
            P = w({}, r, {
                disableEscapeKeyDown: c,
                fullScreen: h,
                fullWidth: g,
                maxWidth: p,
                scroll: k,
            }),
            D = AI(P),
            K = b.useRef(),
            j = (Z) => {
                K.current = Z.target === Z.currentTarget;
            },
            N = (Z) => {
                K.current &&
                    ((K.current = null), S && S(Z), y && y(Z, "backdropClick"));
            },
            z = N0(a),
            U = b.useMemo(() => ({ titleId: z }), [z]);
        return E(
            LI,
            w(
                {
                    className: J(D.root, f),
                    closeAfterTransition: !0,
                    components: { Backdrop: NI },
                    componentsProps: {
                        backdrop: w({ transitionDuration: C, as: l }, u),
                    },
                    disableEscapeKeyDown: c,
                    onClose: y,
                    open: m,
                    ref: n,
                    onClick: N,
                    ownerState: P,
                },
                I,
                {
                    children: E(
                        R,
                        w(
                            {
                                appear: !0,
                                in: m,
                                timeout: C,
                                role: "presentation",
                            },
                            T,
                            {
                                children: E(DI, {
                                    className: J(D.container),
                                    onMouseDown: j,
                                    ownerState: P,
                                    children: E(
                                        zI,
                                        w(
                                            {
                                                as: v,
                                                elevation: 24,
                                                role: "dialog",
                                                "aria-describedby": s,
                                                "aria-labelledby": z,
                                            },
                                            x,
                                            {
                                                className: J(
                                                    D.paper,
                                                    x.className
                                                ),
                                                ownerState: P,
                                                children: E(b1.Provider, {
                                                    value: U,
                                                    children: d,
                                                }),
                                            }
                                        )
                                    ),
                                }),
                            }
                        )
                    ),
                }
            )
        );
    }),
    BI = FI;
function UI(e) {
    return fe("MuiDialogTitle", e);
}
ue("MuiDialogTitle", ["root"]);
const WI = ["className", "id"],
    jI = (e) => {
        const { classes: t } = e;
        return pe({ root: ["root"] }, UI, t);
    },
    VI = H(We, {
        name: "MuiDialogTitle",
        slot: "Root",
        overridesResolver: (e, t) => t.root,
    })({ padding: "16px 24px", flex: "0 0 auto" }),
    HI = b.forwardRef(function (t, n) {
        const r = ce({ props: t, name: "MuiDialogTitle" }),
            { className: o, id: i } = r,
            s = Q(r, WI),
            a = r,
            l = jI(a),
            { titleId: u = i } = b.useContext(b1);
        return E(
            VI,
            w(
                {
                    component: "h2",
                    className: J(l.root, o),
                    ownerState: a,
                    ref: n,
                    variant: "h6",
                    id: u,
                },
                s
            )
        );
    }),
    KI = HI;
function GI(e) {
    return fe("MuiDivider", e);
}
const qI = ue("MuiDivider", [
        "root",
        "absolute",
        "fullWidth",
        "inset",
        "middle",
        "flexItem",
        "light",
        "vertical",
        "withChildren",
        "withChildrenVertical",
        "textAlignRight",
        "textAlignLeft",
        "wrapper",
        "wrapperVertical",
    ]),
    dg = qI,
    YI = [
        "absolute",
        "children",
        "className",
        "component",
        "flexItem",
        "light",
        "orientation",
        "role",
        "textAlign",
        "variant",
    ],
    XI = (e) => {
        const {
            absolute: t,
            children: n,
            classes: r,
            flexItem: o,
            light: i,
            orientation: s,
            textAlign: a,
            variant: l,
        } = e;
        return pe(
            {
                root: [
                    "root",
                    t && "absolute",
                    l,
                    i && "light",
                    s === "vertical" && "vertical",
                    o && "flexItem",
                    n && "withChildren",
                    n && s === "vertical" && "withChildrenVertical",
                    a === "right" && s !== "vertical" && "textAlignRight",
                    a === "left" && s !== "vertical" && "textAlignLeft",
                ],
                wrapper: ["wrapper", s === "vertical" && "wrapperVertical"],
            },
            GI,
            r
        );
    },
    QI = H("div", {
        name: "MuiDivider",
        slot: "Root",
        overridesResolver: (e, t) => {
            const { ownerState: n } = e;
            return [
                t.root,
                n.absolute && t.absolute,
                t[n.variant],
                n.light && t.light,
                n.orientation === "vertical" && t.vertical,
                n.flexItem && t.flexItem,
                n.children && t.withChildren,
                n.children &&
                    n.orientation === "vertical" &&
                    t.withChildrenVertical,
                n.textAlign === "right" &&
                    n.orientation !== "vertical" &&
                    t.textAlignRight,
                n.textAlign === "left" &&
                    n.orientation !== "vertical" &&
                    t.textAlignLeft,
            ];
        },
    })(
        ({ theme: e, ownerState: t }) =>
            w(
                {
                    margin: 0,
                    flexShrink: 0,
                    borderWidth: 0,
                    borderStyle: "solid",
                    borderColor: (e.vars || e).palette.divider,
                    borderBottomWidth: "thin",
                },
                t.absolute && {
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "100%",
                },
                t.light && {
                    borderColor: e.vars
                        ? `rgba(${e.vars.palette.dividerChannel} / 0.08)`
                        : Me(e.palette.divider, 0.08),
                },
                t.variant === "inset" && { marginLeft: 72 },
                t.variant === "middle" &&
                    t.orientation === "horizontal" && {
                        marginLeft: e.spacing(2),
                        marginRight: e.spacing(2),
                    },
                t.variant === "middle" &&
                    t.orientation === "vertical" && {
                        marginTop: e.spacing(1),
                        marginBottom: e.spacing(1),
                    },
                t.orientation === "vertical" && {
                    height: "100%",
                    borderBottomWidth: 0,
                    borderRightWidth: "thin",
                },
                t.flexItem && { alignSelf: "stretch", height: "auto" }
            ),
        ({ theme: e, ownerState: t }) =>
            w(
                {},
                t.children && {
                    display: "flex",
                    whiteSpace: "nowrap",
                    textAlign: "center",
                    border: 0,
                    "&::before, &::after": {
                        position: "relative",
                        width: "100%",
                        borderTop: `thin solid ${
                            (e.vars || e).palette.divider
                        }`,
                        top: "50%",
                        content: '""',
                        transform: "translateY(50%)",
                    },
                }
            ),
        ({ theme: e, ownerState: t }) =>
            w(
                {},
                t.children &&
                    t.orientation === "vertical" && {
                        flexDirection: "column",
                        "&::before, &::after": {
                            height: "100%",
                            top: "0%",
                            left: "50%",
                            borderTop: 0,
                            borderLeft: `thin solid ${
                                (e.vars || e).palette.divider
                            }`,
                            transform: "translateX(0%)",
                        },
                    }
            ),
        ({ ownerState: e }) =>
            w(
                {},
                e.textAlign === "right" &&
                    e.orientation !== "vertical" && {
                        "&::before": { width: "90%" },
                        "&::after": { width: "10%" },
                    },
                e.textAlign === "left" &&
                    e.orientation !== "vertical" && {
                        "&::before": { width: "10%" },
                        "&::after": { width: "90%" },
                    }
            )
    ),
    JI = H("span", {
        name: "MuiDivider",
        slot: "Wrapper",
        overridesResolver: (e, t) => {
            const { ownerState: n } = e;
            return [
                t.wrapper,
                n.orientation === "vertical" && t.wrapperVertical,
            ];
        },
    })(({ theme: e, ownerState: t }) =>
        w(
            {
                display: "inline-block",
                paddingLeft: `calc(${e.spacing(1)} * 1.2)`,
                paddingRight: `calc(${e.spacing(1)} * 1.2)`,
            },
            t.orientation === "vertical" && {
                paddingTop: `calc(${e.spacing(1)} * 1.2)`,
                paddingBottom: `calc(${e.spacing(1)} * 1.2)`,
            }
        )
    ),
    ZI = b.forwardRef(function (t, n) {
        const r = ce({ props: t, name: "MuiDivider" }),
            {
                absolute: o = !1,
                children: i,
                className: s,
                component: a = i ? "div" : "hr",
                flexItem: l = !1,
                light: u = !1,
                orientation: d = "horizontal",
                role: f = a !== "hr" ? "separator" : void 0,
                textAlign: c = "center",
                variant: h = "fullWidth",
            } = r,
            g = Q(r, YI),
            p = w({}, r, {
                absolute: o,
                component: a,
                flexItem: l,
                light: u,
                orientation: d,
                role: f,
                textAlign: c,
                variant: h,
            }),
            S = XI(p);
        return E(
            QI,
            w(
                {
                    as: a,
                    className: J(S.root, s),
                    role: f,
                    ref: n,
                    ownerState: p,
                },
                g,
                {
                    children: i
                        ? E(JI, {
                              className: S.wrapper,
                              ownerState: p,
                              children: i,
                          })
                        : null,
                }
            )
        );
    }),
    yo = ZI,
    e3 = [
        "addEndListener",
        "appear",
        "children",
        "container",
        "direction",
        "easing",
        "in",
        "onEnter",
        "onEntered",
        "onEntering",
        "onExit",
        "onExited",
        "onExiting",
        "style",
        "timeout",
        "TransitionComponent",
    ];
function t3(e, t, n) {
    const r = t.getBoundingClientRect(),
        o = n && n.getBoundingClientRect(),
        i = Gn(t);
    let s;
    if (t.fakeTransform) s = t.fakeTransform;
    else {
        const u = i.getComputedStyle(t);
        s =
            u.getPropertyValue("-webkit-transform") ||
            u.getPropertyValue("transform");
    }
    let a = 0,
        l = 0;
    if (s && s !== "none" && typeof s == "string") {
        const u = s.split("(")[1].split(")")[0].split(",");
        (a = parseInt(u[4], 10)), (l = parseInt(u[5], 10));
    }
    return e === "left"
        ? o
            ? `translateX(${o.right + a - r.left}px)`
            : `translateX(${i.innerWidth + a - r.left}px)`
        : e === "right"
        ? o
            ? `translateX(-${r.right - o.left - a}px)`
            : `translateX(-${r.left + r.width - a}px)`
        : e === "up"
        ? o
            ? `translateY(${o.bottom + l - r.top}px)`
            : `translateY(${i.innerHeight + l - r.top}px)`
        : o
        ? `translateY(-${r.top - o.top + r.height - l}px)`
        : `translateY(-${r.top + r.height - l}px)`;
}
function n3(e) {
    return typeof e == "function" ? e() : e;
}
function ua(e, t, n) {
    const r = n3(n),
        o = t3(e, t, r);
    o && ((t.style.webkitTransform = o), (t.style.transform = o));
}
const r3 = b.forwardRef(function (t, n) {
        const r = so(),
            o = {
                enter: r.transitions.easing.easeOut,
                exit: r.transitions.easing.sharp,
            },
            i = {
                enter: r.transitions.duration.enteringScreen,
                exit: r.transitions.duration.leavingScreen,
            },
            {
                addEndListener: s,
                appear: a = !0,
                children: l,
                container: u,
                direction: d = "down",
                easing: f = o,
                in: c,
                onEnter: h,
                onEntered: g,
                onEntering: p,
                onExit: S,
                onExited: y,
                onExiting: m,
                style: v,
                timeout: x = i,
                TransitionComponent: k = xu,
            } = t,
            R = Q(t, e3),
            C = b.useRef(null),
            T = st(l.ref, C, n),
            I = ($) => (_) => {
                $ && (_ === void 0 ? $(C.current) : $(C.current, _));
            },
            P = I(($, _) => {
                ua(d, $, u), wp($), h && h($, _);
            }),
            D = I(($, _) => {
                const L = kr(
                    { timeout: x, style: v, easing: f },
                    { mode: "enter" }
                );
                ($.style.webkitTransition = r.transitions.create(
                    "-webkit-transform",
                    w({}, L)
                )),
                    ($.style.transition = r.transitions.create(
                        "transform",
                        w({}, L)
                    )),
                    ($.style.webkitTransform = "none"),
                    ($.style.transform = "none"),
                    p && p($, _);
            }),
            K = I(g),
            j = I(m),
            N = I(($) => {
                const _ = kr(
                    { timeout: x, style: v, easing: f },
                    { mode: "exit" }
                );
                ($.style.webkitTransition = r.transitions.create(
                    "-webkit-transform",
                    _
                )),
                    ($.style.transition = r.transitions.create("transform", _)),
                    ua(d, $, u),
                    S && S($);
            }),
            z = I(($) => {
                ($.style.webkitTransition = ""),
                    ($.style.transition = ""),
                    y && y($);
            }),
            U = ($) => {
                s && s(C.current, $);
            },
            Z = b.useCallback(() => {
                C.current && ua(d, C.current, u);
            }, [d, u]);
        return (
            b.useEffect(() => {
                if (c || d === "down" || d === "right") return;
                const $ = rp(() => {
                        C.current && ua(d, C.current, u);
                    }),
                    _ = Gn(C.current);
                return (
                    _.addEventListener("resize", $),
                    () => {
                        $.clear(), _.removeEventListener("resize", $);
                    }
                );
            }, [d, c, u]),
            b.useEffect(() => {
                c || Z();
            }, [c, Z]),
            E(
                k,
                w(
                    {
                        nodeRef: C,
                        onEnter: P,
                        onEntered: K,
                        onEntering: D,
                        onExit: N,
                        onExited: z,
                        onExiting: j,
                        addEndListener: U,
                        appear: a,
                        in: c,
                        timeout: x,
                    },
                    R,
                    {
                        children: ($, _) =>
                            b.cloneElement(
                                l,
                                w(
                                    {
                                        ref: T,
                                        style: w(
                                            {
                                                visibility:
                                                    $ === "exited" && !c
                                                        ? "hidden"
                                                        : void 0,
                                            },
                                            v,
                                            l.props.style
                                        ),
                                    },
                                    _
                                )
                            ),
                    }
                )
            )
        );
    }),
    o3 = r3;
function i3(e) {
    return fe("MuiDrawer", e);
}
ue("MuiDrawer", [
    "root",
    "docked",
    "paper",
    "paperAnchorLeft",
    "paperAnchorRight",
    "paperAnchorTop",
    "paperAnchorBottom",
    "paperAnchorDockedLeft",
    "paperAnchorDockedRight",
    "paperAnchorDockedTop",
    "paperAnchorDockedBottom",
    "modal",
]);
const s3 = ["BackdropProps"],
    a3 = [
        "anchor",
        "BackdropProps",
        "children",
        "className",
        "elevation",
        "hideBackdrop",
        "ModalProps",
        "onClose",
        "open",
        "PaperProps",
        "SlideProps",
        "TransitionComponent",
        "transitionDuration",
        "variant",
    ],
    x1 = (e, t) => {
        const { ownerState: n } = e;
        return [
            t.root,
            (n.variant === "permanent" || n.variant === "persistent") &&
                t.docked,
            t.modal,
        ];
    },
    l3 = (e) => {
        const { classes: t, anchor: n, variant: r } = e,
            o = {
                root: ["root"],
                docked: [(r === "permanent" || r === "persistent") && "docked"],
                modal: ["modal"],
                paper: [
                    "paper",
                    `paperAnchor${W(n)}`,
                    r !== "temporary" && `paperAnchorDocked${W(n)}`,
                ],
            };
        return pe(o, i3, t);
    },
    u3 = H(Ep, { name: "MuiDrawer", slot: "Root", overridesResolver: x1 })(
        ({ theme: e }) => ({ zIndex: (e.vars || e).zIndex.drawer })
    ),
    fg = H("div", {
        shouldForwardProp: xn,
        name: "MuiDrawer",
        slot: "Docked",
        skipVariantsResolver: !1,
        overridesResolver: x1,
    })({ flex: "0 0 auto" }),
    c3 = H(ao, {
        name: "MuiDrawer",
        slot: "Paper",
        overridesResolver: (e, t) => {
            const { ownerState: n } = e;
            return [
                t.paper,
                t[`paperAnchor${W(n.anchor)}`],
                n.variant !== "temporary" &&
                    t[`paperAnchorDocked${W(n.anchor)}`],
            ];
        },
    })(({ theme: e, ownerState: t }) =>
        w(
            {
                overflowY: "auto",
                display: "flex",
                flexDirection: "column",
                height: "100%",
                flex: "1 0 auto",
                zIndex: (e.vars || e).zIndex.drawer,
                WebkitOverflowScrolling: "touch",
                position: "fixed",
                top: 0,
                outline: 0,
            },
            t.anchor === "left" && { left: 0 },
            t.anchor === "top" && {
                top: 0,
                left: 0,
                right: 0,
                height: "auto",
                maxHeight: "100%",
            },
            t.anchor === "right" && { right: 0 },
            t.anchor === "bottom" && {
                top: "auto",
                left: 0,
                bottom: 0,
                right: 0,
                height: "auto",
                maxHeight: "100%",
            },
            t.anchor === "left" &&
                t.variant !== "temporary" && {
                    borderRight: `1px solid ${(e.vars || e).palette.divider}`,
                },
            t.anchor === "top" &&
                t.variant !== "temporary" && {
                    borderBottom: `1px solid ${(e.vars || e).palette.divider}`,
                },
            t.anchor === "right" &&
                t.variant !== "temporary" && {
                    borderLeft: `1px solid ${(e.vars || e).palette.divider}`,
                },
            t.anchor === "bottom" &&
                t.variant !== "temporary" && {
                    borderTop: `1px solid ${(e.vars || e).palette.divider}`,
                }
        )
    ),
    w1 = { left: "right", right: "left", top: "down", bottom: "up" };
function d3(e) {
    return ["left", "right"].indexOf(e) !== -1;
}
function f3(e, t) {
    return e.direction === "rtl" && d3(t) ? w1[t] : t;
}
const p3 = b.forwardRef(function (t, n) {
        const r = ce({ props: t, name: "MuiDrawer" }),
            o = so(),
            i = {
                enter: o.transitions.duration.enteringScreen,
                exit: o.transitions.duration.leavingScreen,
            },
            {
                anchor: s = "left",
                BackdropProps: a,
                children: l,
                className: u,
                elevation: d = 16,
                hideBackdrop: f = !1,
                ModalProps: { BackdropProps: c } = {},
                onClose: h,
                open: g = !1,
                PaperProps: p = {},
                SlideProps: S,
                TransitionComponent: y = o3,
                transitionDuration: m = i,
                variant: v = "temporary",
            } = r,
            x = Q(r.ModalProps, s3),
            k = Q(r, a3),
            R = b.useRef(!1);
        b.useEffect(() => {
            R.current = !0;
        }, []);
        const C = f3(o, s),
            I = w({}, r, { anchor: s, elevation: d, open: g, variant: v }, k),
            P = l3(I),
            D = E(
                c3,
                w({ elevation: v === "temporary" ? d : 0, square: !0 }, p, {
                    className: J(P.paper, p.className),
                    ownerState: I,
                    children: l,
                })
            );
        if (v === "permanent")
            return E(
                fg,
                w(
                    {
                        className: J(P.root, P.docked, u),
                        ownerState: I,
                        ref: n,
                    },
                    k,
                    { children: D }
                )
            );
        const K = E(
            y,
            w({ in: g, direction: w1[C], timeout: m, appear: R.current }, S, {
                children: D,
            })
        );
        return v === "persistent"
            ? E(
                  fg,
                  w(
                      {
                          className: J(P.root, P.docked, u),
                          ownerState: I,
                          ref: n,
                      },
                      k,
                      { children: K }
                  )
              )
            : E(
                  u3,
                  w(
                      {
                          BackdropProps: w({}, a, c, { transitionDuration: m }),
                          className: J(P.root, P.modal, u),
                          open: g,
                          ownerState: I,
                          onClose: h,
                          hideBackdrop: f,
                          ref: n,
                      },
                      k,
                      x,
                      { children: K }
                  )
              );
    }),
    h3 = p3,
    m3 = [
        "disableUnderline",
        "components",
        "componentsProps",
        "fullWidth",
        "hiddenLabel",
        "inputComponent",
        "multiline",
        "slotProps",
        "slots",
        "type",
    ],
    g3 = (e) => {
        const { classes: t, disableUnderline: n } = e,
            o = pe(
                { root: ["root", !n && "underline"], input: ["input"] },
                QT,
                t
            );
        return w({}, t, o);
    },
    y3 = H(ku, {
        shouldForwardProp: (e) => xn(e) || e === "classes",
        name: "MuiFilledInput",
        slot: "Root",
        overridesResolver: (e, t) => {
            const { ownerState: n } = e;
            return [...Su(e, t), !n.disableUnderline && t.underline];
        },
    })(({ theme: e, ownerState: t }) => {
        var n;
        const r = e.palette.mode === "light",
            o = r ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)",
            i = r ? "rgba(0, 0, 0, 0.06)" : "rgba(255, 255, 255, 0.09)",
            s = r ? "rgba(0, 0, 0, 0.09)" : "rgba(255, 255, 255, 0.13)",
            a = r ? "rgba(0, 0, 0, 0.12)" : "rgba(255, 255, 255, 0.12)";
        return w(
            {
                position: "relative",
                backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : i,
                borderTopLeftRadius: (e.vars || e).shape.borderRadius,
                borderTopRightRadius: (e.vars || e).shape.borderRadius,
                transition: e.transitions.create("background-color", {
                    duration: e.transitions.duration.shorter,
                    easing: e.transitions.easing.easeOut,
                }),
                "&:hover": {
                    backgroundColor: e.vars
                        ? e.vars.palette.FilledInput.hoverBg
                        : s,
                    "@media (hover: none)": {
                        backgroundColor: e.vars
                            ? e.vars.palette.FilledInput.bg
                            : i,
                    },
                },
                [`&.${Or.focused}`]: {
                    backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : i,
                },
                [`&.${Or.disabled}`]: {
                    backgroundColor: e.vars
                        ? e.vars.palette.FilledInput.disabledBg
                        : a,
                },
            },
            !t.disableUnderline && {
                "&:after": {
                    borderBottom: `2px solid ${
                        (n = (e.vars || e).palette[t.color || "primary"]) ==
                        null
                            ? void 0
                            : n.main
                    }`,
                    left: 0,
                    bottom: 0,
                    content: '""',
                    position: "absolute",
                    right: 0,
                    transform: "scaleX(0)",
                    transition: e.transitions.create("transform", {
                        duration: e.transitions.duration.shorter,
                        easing: e.transitions.easing.easeOut,
                    }),
                    pointerEvents: "none",
                },
                [`&.${Or.focused}:after`]: {
                    transform: "scaleX(1) translateX(0)",
                },
                [`&.${Or.error}`]: {
                    "&:before, &:after": {
                        borderBottomColor: (e.vars || e).palette.error.main,
                    },
                },
                "&:before": {
                    borderBottom: `1px solid ${
                        e.vars
                            ? `rgba(${e.vars.palette.common.onBackgroundChannel} / ${e.vars.opacity.inputUnderline})`
                            : o
                    }`,
                    left: 0,
                    bottom: 0,
                    content: '"\\00a0"',
                    position: "absolute",
                    right: 0,
                    transition: e.transitions.create("border-bottom-color", {
                        duration: e.transitions.duration.shorter,
                    }),
                    pointerEvents: "none",
                },
                [`&:hover:not(.${Or.disabled}, .${Or.error}):before`]: {
                    borderBottom: `1px solid ${
                        (e.vars || e).palette.text.primary
                    }`,
                },
                [`&.${Or.disabled}:before`]: { borderBottomStyle: "dotted" },
            },
            t.startAdornment && { paddingLeft: 12 },
            t.endAdornment && { paddingRight: 12 },
            t.multiline &&
                w(
                    { padding: "25px 12px 8px" },
                    t.size === "small" && { paddingTop: 21, paddingBottom: 4 },
                    t.hiddenLabel && { paddingTop: 16, paddingBottom: 17 }
                )
        );
    }),
    v3 = H(Eu, {
        name: "MuiFilledInput",
        slot: "Input",
        overridesResolver: Cu,
    })(({ theme: e, ownerState: t }) =>
        w(
            {
                paddingTop: 25,
                paddingRight: 12,
                paddingBottom: 8,
                paddingLeft: 12,
            },
            !e.vars && {
                "&:-webkit-autofill": {
                    WebkitBoxShadow:
                        e.palette.mode === "light"
                            ? null
                            : "0 0 0 100px #266798 inset",
                    WebkitTextFillColor:
                        e.palette.mode === "light" ? null : "#fff",
                    caretColor: e.palette.mode === "light" ? null : "#fff",
                    borderTopLeftRadius: "inherit",
                    borderTopRightRadius: "inherit",
                },
            },
            e.vars && {
                "&:-webkit-autofill": {
                    borderTopLeftRadius: "inherit",
                    borderTopRightRadius: "inherit",
                },
                [e.getColorSchemeSelector("dark")]: {
                    "&:-webkit-autofill": {
                        WebkitBoxShadow: "0 0 0 100px #266798 inset",
                        WebkitTextFillColor: "#fff",
                        caretColor: "#fff",
                    },
                },
            },
            t.size === "small" && { paddingTop: 21, paddingBottom: 4 },
            t.hiddenLabel && { paddingTop: 16, paddingBottom: 17 },
            t.multiline && {
                paddingTop: 0,
                paddingBottom: 0,
                paddingLeft: 0,
                paddingRight: 0,
            },
            t.startAdornment && { paddingLeft: 0 },
            t.endAdornment && { paddingRight: 0 },
            t.hiddenLabel &&
                t.size === "small" && { paddingTop: 8, paddingBottom: 9 }
        )
    ),
    S1 = b.forwardRef(function (t, n) {
        var r, o, i, s;
        const a = ce({ props: t, name: "MuiFilledInput" }),
            {
                components: l = {},
                componentsProps: u,
                fullWidth: d = !1,
                inputComponent: f = "input",
                multiline: c = !1,
                slotProps: h,
                slots: g = {},
                type: p = "text",
            } = a,
            S = Q(a, m3),
            y = w({}, a, {
                fullWidth: d,
                inputComponent: f,
                multiline: c,
                type: p,
            }),
            m = g3(a),
            v = { root: { ownerState: y }, input: { ownerState: y } },
            x = h ?? u ? Nt(h ?? u, v) : v,
            k = (r = (o = g.root) != null ? o : l.Root) != null ? r : y3,
            R = (i = (s = g.input) != null ? s : l.Input) != null ? i : v3;
        return E(
            kp,
            w(
                {
                    slots: { root: k, input: R },
                    componentsProps: x,
                    fullWidth: d,
                    inputComponent: f,
                    multiline: c,
                    ref: n,
                    type: p,
                },
                S,
                { classes: m }
            )
        );
    });
S1.muiName = "Input";
const C1 = S1;
function b3(e) {
    return fe("MuiFormControl", e);
}
ue("MuiFormControl", [
    "root",
    "marginNone",
    "marginNormal",
    "marginDense",
    "fullWidth",
    "disabled",
]);
const x3 = [
        "children",
        "className",
        "color",
        "component",
        "disabled",
        "error",
        "focused",
        "fullWidth",
        "hiddenLabel",
        "margin",
        "required",
        "size",
        "variant",
    ],
    w3 = (e) => {
        const { classes: t, margin: n, fullWidth: r } = e,
            o = {
                root: [
                    "root",
                    n !== "none" && `margin${W(n)}`,
                    r && "fullWidth",
                ],
            };
        return pe(o, b3, t);
    },
    S3 = H("div", {
        name: "MuiFormControl",
        slot: "Root",
        overridesResolver: ({ ownerState: e }, t) =>
            w(
                {},
                t.root,
                t[`margin${W(e.margin)}`],
                e.fullWidth && t.fullWidth
            ),
    })(({ ownerState: e }) =>
        w(
            {
                display: "inline-flex",
                flexDirection: "column",
                position: "relative",
                minWidth: 0,
                padding: 0,
                margin: 0,
                border: 0,
                verticalAlign: "top",
            },
            e.margin === "normal" && { marginTop: 16, marginBottom: 8 },
            e.margin === "dense" && { marginTop: 8, marginBottom: 4 },
            e.fullWidth && { width: "100%" }
        )
    ),
    C3 = b.forwardRef(function (t, n) {
        const r = ce({ props: t, name: "MuiFormControl" }),
            {
                children: o,
                className: i,
                color: s = "primary",
                component: a = "div",
                disabled: l = !1,
                error: u = !1,
                focused: d,
                fullWidth: f = !1,
                hiddenLabel: c = !1,
                margin: h = "none",
                required: g = !1,
                size: p = "medium",
                variant: S = "outlined",
            } = r,
            y = Q(r, x3),
            m = w({}, r, {
                color: s,
                component: a,
                disabled: l,
                error: u,
                fullWidth: f,
                hiddenLabel: c,
                margin: h,
                required: g,
                size: p,
                variant: S,
            }),
            v = w3(m),
            [x, k] = b.useState(() => {
                let j = !1;
                return (
                    o &&
                        b.Children.forEach(o, (N) => {
                            if (!Pa(N, ["Input", "Select"])) return;
                            const z = Pa(N, ["Select"]) ? N.props.input : N;
                            z && BT(z.props) && (j = !0);
                        }),
                    j
                );
            }),
            [R, C] = b.useState(() => {
                let j = !1;
                return (
                    o &&
                        b.Children.forEach(o, (N) => {
                            Pa(N, ["Input", "Select"]) &&
                                Cp(N.props, !0) &&
                                (j = !0);
                        }),
                    j
                );
            }),
            [T, I] = b.useState(!1);
        l && T && I(!1);
        const P = d !== void 0 && !l ? d : T;
        let D;
        const K = b.useMemo(
            () => ({
                adornedStart: x,
                setAdornedStart: k,
                color: s,
                disabled: l,
                error: u,
                filled: R,
                focused: P,
                fullWidth: f,
                hiddenLabel: c,
                size: p,
                onBlur: () => {
                    I(!1);
                },
                onEmpty: () => {
                    C(!1);
                },
                onFilled: () => {
                    C(!0);
                },
                onFocus: () => {
                    I(!0);
                },
                registerEffect: D,
                required: g,
                variant: S,
            }),
            [x, s, l, u, R, P, f, c, D, g, p, S]
        );
        return E(Sp.Provider, {
            value: K,
            children: E(
                S3,
                w(
                    { as: a, ownerState: m, className: J(v.root, i), ref: n },
                    y,
                    { children: o }
                )
            ),
        });
    }),
    k3 = C3;
function E3(e) {
    return fe("MuiFormHelperText", e);
}
const R3 = ue("MuiFormHelperText", [
        "root",
        "error",
        "disabled",
        "sizeSmall",
        "sizeMedium",
        "contained",
        "focused",
        "filled",
        "required",
    ]),
    pg = R3;
var hg;
const P3 = [
        "children",
        "className",
        "component",
        "disabled",
        "error",
        "filled",
        "focused",
        "margin",
        "required",
        "variant",
    ],
    $3 = (e) => {
        const {
                classes: t,
                contained: n,
                size: r,
                disabled: o,
                error: i,
                filled: s,
                focused: a,
                required: l,
            } = e,
            u = {
                root: [
                    "root",
                    o && "disabled",
                    i && "error",
                    r && `size${W(r)}`,
                    n && "contained",
                    a && "focused",
                    s && "filled",
                    l && "required",
                ],
            };
        return pe(u, E3, t);
    },
    T3 = H("p", {
        name: "MuiFormHelperText",
        slot: "Root",
        overridesResolver: (e, t) => {
            const { ownerState: n } = e;
            return [
                t.root,
                n.size && t[`size${W(n.size)}`],
                n.contained && t.contained,
                n.filled && t.filled,
            ];
        },
    })(({ theme: e, ownerState: t }) =>
        w(
            { color: (e.vars || e).palette.text.secondary },
            e.typography.caption,
            {
                textAlign: "left",
                marginTop: 3,
                marginRight: 0,
                marginBottom: 0,
                marginLeft: 0,
                [`&.${pg.disabled}`]: {
                    color: (e.vars || e).palette.text.disabled,
                },
                [`&.${pg.error}`]: { color: (e.vars || e).palette.error.main },
            },
            t.size === "small" && { marginTop: 4 },
            t.contained && { marginLeft: 14, marginRight: 14 }
        )
    ),
    I3 = b.forwardRef(function (t, n) {
        const r = ce({ props: t, name: "MuiFormHelperText" }),
            { children: o, className: i, component: s = "p" } = r,
            a = Q(r, P3),
            l = pi(),
            u = fi({
                props: r,
                muiFormControl: l,
                states: [
                    "variant",
                    "size",
                    "disabled",
                    "error",
                    "filled",
                    "focused",
                    "required",
                ],
            }),
            d = w({}, r, {
                component: s,
                contained: u.variant === "filled" || u.variant === "outlined",
                variant: u.variant,
                size: u.size,
                disabled: u.disabled,
                error: u.error,
                filled: u.filled,
                focused: u.focused,
                required: u.required,
            }),
            f = $3(d);
        return E(
            T3,
            w({ as: s, ownerState: d, className: J(f.root, i), ref: n }, a, {
                children:
                    o === " "
                        ? hg ||
                          (hg = E("span", {
                              className: "notranslate",
                              children: "​",
                          }))
                        : o,
            })
        );
    }),
    O3 = I3;
function M3(e) {
    return fe("MuiFormLabel", e);
}
const _3 = ue("MuiFormLabel", [
        "root",
        "colorSecondary",
        "focused",
        "disabled",
        "error",
        "filled",
        "required",
        "asterisk",
    ]),
    es = _3,
    N3 = [
        "children",
        "className",
        "color",
        "component",
        "disabled",
        "error",
        "filled",
        "focused",
        "required",
    ],
    A3 = (e) => {
        const {
                classes: t,
                color: n,
                focused: r,
                disabled: o,
                error: i,
                filled: s,
                required: a,
            } = e,
            l = {
                root: [
                    "root",
                    `color${W(n)}`,
                    o && "disabled",
                    i && "error",
                    s && "filled",
                    r && "focused",
                    a && "required",
                ],
                asterisk: ["asterisk", i && "error"],
            };
        return pe(l, M3, t);
    },
    L3 = H("label", {
        name: "MuiFormLabel",
        slot: "Root",
        overridesResolver: ({ ownerState: e }, t) =>
            w(
                {},
                t.root,
                e.color === "secondary" && t.colorSecondary,
                e.filled && t.filled
            ),
    })(({ theme: e, ownerState: t }) =>
        w({ color: (e.vars || e).palette.text.secondary }, e.typography.body1, {
            lineHeight: "1.4375em",
            padding: 0,
            position: "relative",
            [`&.${es.focused}`]: { color: (e.vars || e).palette[t.color].main },
            [`&.${es.disabled}`]: {
                color: (e.vars || e).palette.text.disabled,
            },
            [`&.${es.error}`]: { color: (e.vars || e).palette.error.main },
        })
    ),
    D3 = H("span", {
        name: "MuiFormLabel",
        slot: "Asterisk",
        overridesResolver: (e, t) => t.asterisk,
    })(({ theme: e }) => ({
        [`&.${es.error}`]: { color: (e.vars || e).palette.error.main },
    })),
    z3 = b.forwardRef(function (t, n) {
        const r = ce({ props: t, name: "MuiFormLabel" }),
            { children: o, className: i, component: s = "label" } = r,
            a = Q(r, N3),
            l = pi(),
            u = fi({
                props: r,
                muiFormControl: l,
                states: [
                    "color",
                    "required",
                    "focused",
                    "disabled",
                    "error",
                    "filled",
                ],
            }),
            d = w({}, r, {
                color: u.color || "primary",
                component: s,
                disabled: u.disabled,
                error: u.error,
                filled: u.filled,
                focused: u.focused,
                required: u.required,
            }),
            f = A3(d);
        return te(
            L3,
            w({ as: s, ownerState: d, className: J(f.root, i), ref: n }, a, {
                children: [
                    o,
                    u.required &&
                        te(D3, {
                            ownerState: d,
                            "aria-hidden": !0,
                            className: f.asterisk,
                            children: [" ", "*"],
                        }),
                ],
            })
        );
    }),
    F3 = z3,
    B3 = [
        "addEndListener",
        "appear",
        "children",
        "easing",
        "in",
        "onEnter",
        "onEntered",
        "onEntering",
        "onExit",
        "onExited",
        "onExiting",
        "style",
        "timeout",
        "TransitionComponent",
    ];
function Ad(e) {
    return `scale(${e}, ${e ** 2})`;
}
const U3 = {
        entering: { opacity: 1, transform: Ad(1) },
        entered: { opacity: 1, transform: "none" },
    },
    gc =
        typeof navigator < "u" &&
        /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) &&
        /(os |version\/)15(.|_)4/i.test(navigator.userAgent),
    k1 = b.forwardRef(function (t, n) {
        const {
                addEndListener: r,
                appear: o = !0,
                children: i,
                easing: s,
                in: a,
                onEnter: l,
                onEntered: u,
                onEntering: d,
                onExit: f,
                onExited: c,
                onExiting: h,
                style: g,
                timeout: p = "auto",
                TransitionComponent: S = xu,
            } = t,
            y = Q(t, B3),
            m = b.useRef(),
            v = b.useRef(),
            x = so(),
            k = b.useRef(null),
            R = st(k, i.ref, n),
            C = (z) => (U) => {
                if (z) {
                    const Z = k.current;
                    U === void 0 ? z(Z) : z(Z, U);
                }
            },
            T = C(d),
            I = C((z, U) => {
                wp(z);
                const {
                    duration: Z,
                    delay: $,
                    easing: _,
                } = kr({ style: g, timeout: p, easing: s }, { mode: "enter" });
                let L;
                p === "auto"
                    ? ((L = x.transitions.getAutoHeightDuration(
                          z.clientHeight
                      )),
                      (v.current = L))
                    : (L = Z),
                    (z.style.transition = [
                        x.transitions.create("opacity", {
                            duration: L,
                            delay: $,
                        }),
                        x.transitions.create("transform", {
                            duration: gc ? L : L * 0.666,
                            delay: $,
                            easing: _,
                        }),
                    ].join(",")),
                    l && l(z, U);
            }),
            P = C(u),
            D = C(h),
            K = C((z) => {
                const {
                    duration: U,
                    delay: Z,
                    easing: $,
                } = kr({ style: g, timeout: p, easing: s }, { mode: "exit" });
                let _;
                p === "auto"
                    ? ((_ = x.transitions.getAutoHeightDuration(
                          z.clientHeight
                      )),
                      (v.current = _))
                    : (_ = U),
                    (z.style.transition = [
                        x.transitions.create("opacity", {
                            duration: _,
                            delay: Z,
                        }),
                        x.transitions.create("transform", {
                            duration: gc ? _ : _ * 0.666,
                            delay: gc ? Z : Z || _ * 0.333,
                            easing: $,
                        }),
                    ].join(",")),
                    (z.style.opacity = 0),
                    (z.style.transform = Ad(0.75)),
                    f && f(z);
            }),
            j = C(c),
            N = (z) => {
                p === "auto" && (m.current = setTimeout(z, v.current || 0)),
                    r && r(k.current, z);
            };
        return (
            b.useEffect(
                () => () => {
                    clearTimeout(m.current);
                },
                []
            ),
            E(
                S,
                w(
                    {
                        appear: o,
                        in: a,
                        nodeRef: k,
                        onEnter: I,
                        onEntered: P,
                        onEntering: T,
                        onExit: K,
                        onExited: j,
                        onExiting: D,
                        addEndListener: N,
                        timeout: p === "auto" ? null : p,
                    },
                    y,
                    {
                        children: (z, U) =>
                            b.cloneElement(
                                i,
                                w(
                                    {
                                        style: w(
                                            {
                                                opacity: 0,
                                                transform: Ad(0.75),
                                                visibility:
                                                    z === "exited" && !a
                                                        ? "hidden"
                                                        : void 0,
                                            },
                                            U3[z],
                                            g,
                                            i.props.style
                                        ),
                                        ref: R,
                                    },
                                    U
                                )
                            ),
                    }
                )
            )
        );
    });
k1.muiSupportAuto = !0;
const W3 = k1,
    j3 = [
        "disableUnderline",
        "components",
        "componentsProps",
        "fullWidth",
        "inputComponent",
        "multiline",
        "slotProps",
        "slots",
        "type",
    ],
    V3 = (e) => {
        const { classes: t, disableUnderline: n } = e,
            o = pe(
                { root: ["root", !n && "underline"], input: ["input"] },
                GT,
                t
            );
        return w({}, t, o);
    },
    H3 = H(ku, {
        shouldForwardProp: (e) => xn(e) || e === "classes",
        name: "MuiInput",
        slot: "Root",
        overridesResolver: (e, t) => {
            const { ownerState: n } = e;
            return [...Su(e, t), !n.disableUnderline && t.underline];
        },
    })(({ theme: e, ownerState: t }) => {
        let r =
            e.palette.mode === "light"
                ? "rgba(0, 0, 0, 0.42)"
                : "rgba(255, 255, 255, 0.7)";
        return (
            e.vars &&
                (r = `rgba(${e.vars.palette.common.onBackgroundChannel} / ${e.vars.opacity.inputUnderline})`),
            w(
                { position: "relative" },
                t.formControl && { "label + &": { marginTop: 16 } },
                !t.disableUnderline && {
                    "&:after": {
                        borderBottom: `2px solid ${
                            (e.vars || e).palette[t.color].main
                        }`,
                        left: 0,
                        bottom: 0,
                        content: '""',
                        position: "absolute",
                        right: 0,
                        transform: "scaleX(0)",
                        transition: e.transitions.create("transform", {
                            duration: e.transitions.duration.shorter,
                            easing: e.transitions.easing.easeOut,
                        }),
                        pointerEvents: "none",
                    },
                    [`&.${Ti.focused}:after`]: {
                        transform: "scaleX(1) translateX(0)",
                    },
                    [`&.${Ti.error}`]: {
                        "&:before, &:after": {
                            borderBottomColor: (e.vars || e).palette.error.main,
                        },
                    },
                    "&:before": {
                        borderBottom: `1px solid ${r}`,
                        left: 0,
                        bottom: 0,
                        content: '"\\00a0"',
                        position: "absolute",
                        right: 0,
                        transition: e.transitions.create(
                            "border-bottom-color",
                            { duration: e.transitions.duration.shorter }
                        ),
                        pointerEvents: "none",
                    },
                    [`&:hover:not(.${Ti.disabled}, .${Ti.error}):before`]: {
                        borderBottom: `2px solid ${
                            (e.vars || e).palette.text.primary
                        }`,
                        "@media (hover: none)": {
                            borderBottom: `1px solid ${r}`,
                        },
                    },
                    [`&.${Ti.disabled}:before`]: {
                        borderBottomStyle: "dotted",
                    },
                }
            )
        );
    }),
    K3 = H(Eu, { name: "MuiInput", slot: "Input", overridesResolver: Cu })({}),
    E1 = b.forwardRef(function (t, n) {
        var r, o, i, s;
        const a = ce({ props: t, name: "MuiInput" }),
            {
                disableUnderline: l,
                components: u = {},
                componentsProps: d,
                fullWidth: f = !1,
                inputComponent: c = "input",
                multiline: h = !1,
                slotProps: g,
                slots: p = {},
                type: S = "text",
            } = a,
            y = Q(a, j3),
            m = V3(a),
            x = { root: { ownerState: { disableUnderline: l } } },
            k = g ?? d ? Nt(g ?? d, x) : x,
            R = (r = (o = p.root) != null ? o : u.Root) != null ? r : H3,
            C = (i = (s = p.input) != null ? s : u.Input) != null ? i : K3;
        return E(
            kp,
            w(
                {
                    slots: { root: R, input: C },
                    slotProps: k,
                    fullWidth: f,
                    inputComponent: c,
                    multiline: h,
                    ref: n,
                    type: S,
                },
                y,
                { classes: m }
            )
        );
    });
E1.muiName = "Input";
const R1 = E1;
function G3(e) {
    return fe("MuiInputLabel", e);
}
ue("MuiInputLabel", [
    "root",
    "focused",
    "disabled",
    "error",
    "required",
    "asterisk",
    "formControl",
    "sizeSmall",
    "shrink",
    "animated",
    "standard",
    "filled",
    "outlined",
]);
const q3 = ["disableAnimation", "margin", "shrink", "variant", "className"],
    Y3 = (e) => {
        const {
                classes: t,
                formControl: n,
                size: r,
                shrink: o,
                disableAnimation: i,
                variant: s,
                required: a,
            } = e,
            u = pe(
                {
                    root: [
                        "root",
                        n && "formControl",
                        !i && "animated",
                        o && "shrink",
                        r === "small" && "sizeSmall",
                        s,
                    ],
                    asterisk: [a && "asterisk"],
                },
                G3,
                t
            );
        return w({}, t, u);
    },
    X3 = H(F3, {
        shouldForwardProp: (e) => xn(e) || e === "classes",
        name: "MuiInputLabel",
        slot: "Root",
        overridesResolver: (e, t) => {
            const { ownerState: n } = e;
            return [
                { [`& .${es.asterisk}`]: t.asterisk },
                t.root,
                n.formControl && t.formControl,
                n.size === "small" && t.sizeSmall,
                n.shrink && t.shrink,
                !n.disableAnimation && t.animated,
                t[n.variant],
            ];
        },
    })(({ theme: e, ownerState: t }) =>
        w(
            {
                display: "block",
                transformOrigin: "top left",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                maxWidth: "100%",
            },
            t.formControl && {
                position: "absolute",
                left: 0,
                top: 0,
                transform: "translate(0, 20px) scale(1)",
            },
            t.size === "small" && { transform: "translate(0, 17px) scale(1)" },
            t.shrink && {
                transform: "translate(0, -1.5px) scale(0.75)",
                transformOrigin: "top left",
                maxWidth: "133%",
            },
            !t.disableAnimation && {
                transition: e.transitions.create(
                    ["color", "transform", "max-width"],
                    {
                        duration: e.transitions.duration.shorter,
                        easing: e.transitions.easing.easeOut,
                    }
                ),
            },
            t.variant === "filled" &&
                w(
                    {
                        zIndex: 1,
                        pointerEvents: "none",
                        transform: "translate(12px, 16px) scale(1)",
                        maxWidth: "calc(100% - 24px)",
                    },
                    t.size === "small" && {
                        transform: "translate(12px, 13px) scale(1)",
                    },
                    t.shrink &&
                        w(
                            {
                                userSelect: "none",
                                pointerEvents: "auto",
                                transform: "translate(12px, 7px) scale(0.75)",
                                maxWidth: "calc(133% - 24px)",
                            },
                            t.size === "small" && {
                                transform: "translate(12px, 4px) scale(0.75)",
                            }
                        )
                ),
            t.variant === "outlined" &&
                w(
                    {
                        zIndex: 1,
                        pointerEvents: "none",
                        transform: "translate(14px, 16px) scale(1)",
                        maxWidth: "calc(100% - 24px)",
                    },
                    t.size === "small" && {
                        transform: "translate(14px, 9px) scale(1)",
                    },
                    t.shrink && {
                        userSelect: "none",
                        pointerEvents: "auto",
                        maxWidth: "calc(133% - 24px)",
                        transform: "translate(14px, -9px) scale(0.75)",
                    }
                )
        )
    ),
    Q3 = b.forwardRef(function (t, n) {
        const r = ce({ name: "MuiInputLabel", props: t }),
            { disableAnimation: o = !1, shrink: i, className: s } = r,
            a = Q(r, q3),
            l = pi();
        let u = i;
        typeof u > "u" && l && (u = l.filled || l.focused || l.adornedStart);
        const d = fi({
                props: r,
                muiFormControl: l,
                states: ["size", "variant", "required"],
            }),
            f = w({}, r, {
                disableAnimation: o,
                formControl: l,
                shrink: u,
                size: d.size,
                variant: d.variant,
                required: d.required,
            }),
            c = Y3(f);
        return E(
            X3,
            w(
                {
                    "data-shrink": u,
                    ownerState: f,
                    ref: n,
                    className: J(c.root, s),
                },
                a,
                { classes: c }
            )
        );
    }),
    J3 = Q3,
    Z3 = b.createContext({}),
    vr = Z3;
function e4(e) {
    return fe("MuiList", e);
}
ue("MuiList", ["root", "padding", "dense", "subheader"]);
const t4 = [
        "children",
        "className",
        "component",
        "dense",
        "disablePadding",
        "subheader",
    ],
    n4 = (e) => {
        const { classes: t, disablePadding: n, dense: r, subheader: o } = e;
        return pe(
            { root: ["root", !n && "padding", r && "dense", o && "subheader"] },
            e4,
            t
        );
    },
    r4 = H("ul", {
        name: "MuiList",
        slot: "Root",
        overridesResolver: (e, t) => {
            const { ownerState: n } = e;
            return [
                t.root,
                !n.disablePadding && t.padding,
                n.dense && t.dense,
                n.subheader && t.subheader,
            ];
        },
    })(({ ownerState: e }) =>
        w(
            { listStyle: "none", margin: 0, padding: 0, position: "relative" },
            !e.disablePadding && { paddingTop: 8, paddingBottom: 8 },
            e.subheader && { paddingTop: 0 }
        )
    ),
    o4 = b.forwardRef(function (t, n) {
        const r = ce({ props: t, name: "MuiList" }),
            {
                children: o,
                className: i,
                component: s = "ul",
                dense: a = !1,
                disablePadding: l = !1,
                subheader: u,
            } = r,
            d = Q(r, t4),
            f = b.useMemo(() => ({ dense: a }), [a]),
            c = w({}, r, { component: s, dense: a, disablePadding: l }),
            h = n4(c);
        return E(vr.Provider, {
            value: f,
            children: te(
                r4,
                w(
                    { as: s, className: J(h.root, i), ref: n, ownerState: c },
                    d,
                    { children: [u, o] }
                )
            ),
        });
    }),
    P1 = o4;
function i4(e) {
    return fe("MuiListItem", e);
}
const s4 = ue("MuiListItem", [
        "root",
        "container",
        "focusVisible",
        "dense",
        "alignItemsFlexStart",
        "disabled",
        "divider",
        "gutters",
        "padding",
        "button",
        "secondaryAction",
        "selected",
    ]),
    vo = s4,
    a4 = ue("MuiListItemButton", [
        "root",
        "focusVisible",
        "dense",
        "alignItemsFlexStart",
        "disabled",
        "divider",
        "gutters",
        "selected",
    ]),
    l4 = a4;
function u4(e) {
    return fe("MuiListItemSecondaryAction", e);
}
ue("MuiListItemSecondaryAction", ["root", "disableGutters"]);
const c4 = ["className"],
    d4 = (e) => {
        const { disableGutters: t, classes: n } = e;
        return pe({ root: ["root", t && "disableGutters"] }, u4, n);
    },
    f4 = H("div", {
        name: "MuiListItemSecondaryAction",
        slot: "Root",
        overridesResolver: (e, t) => {
            const { ownerState: n } = e;
            return [t.root, n.disableGutters && t.disableGutters];
        },
    })(({ ownerState: e }) =>
        w(
            {
                position: "absolute",
                right: 16,
                top: "50%",
                transform: "translateY(-50%)",
            },
            e.disableGutters && { right: 0 }
        )
    ),
    $1 = b.forwardRef(function (t, n) {
        const r = ce({ props: t, name: "MuiListItemSecondaryAction" }),
            { className: o } = r,
            i = Q(r, c4),
            s = b.useContext(vr),
            a = w({}, r, { disableGutters: s.disableGutters }),
            l = d4(a);
        return E(f4, w({ className: J(l.root, o), ownerState: a, ref: n }, i));
    });
$1.muiName = "ListItemSecondaryAction";
const p4 = $1,
    h4 = ["className"],
    m4 = [
        "alignItems",
        "autoFocus",
        "button",
        "children",
        "className",
        "component",
        "components",
        "componentsProps",
        "ContainerComponent",
        "ContainerProps",
        "dense",
        "disabled",
        "disableGutters",
        "disablePadding",
        "divider",
        "focusVisibleClassName",
        "secondaryAction",
        "selected",
        "slotProps",
        "slots",
    ],
    g4 = (e, t) => {
        const { ownerState: n } = e;
        return [
            t.root,
            n.dense && t.dense,
            n.alignItems === "flex-start" && t.alignItemsFlexStart,
            n.divider && t.divider,
            !n.disableGutters && t.gutters,
            !n.disablePadding && t.padding,
            n.button && t.button,
            n.hasSecondaryAction && t.secondaryAction,
        ];
    },
    y4 = (e) => {
        const {
            alignItems: t,
            button: n,
            classes: r,
            dense: o,
            disabled: i,
            disableGutters: s,
            disablePadding: a,
            divider: l,
            hasSecondaryAction: u,
            selected: d,
        } = e;
        return pe(
            {
                root: [
                    "root",
                    o && "dense",
                    !s && "gutters",
                    !a && "padding",
                    l && "divider",
                    i && "disabled",
                    n && "button",
                    t === "flex-start" && "alignItemsFlexStart",
                    u && "secondaryAction",
                    d && "selected",
                ],
                container: ["container"],
            },
            i4,
            r
        );
    },
    v4 = H("div", { name: "MuiListItem", slot: "Root", overridesResolver: g4 })(
        ({ theme: e, ownerState: t }) =>
            w(
                {
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    position: "relative",
                    textDecoration: "none",
                    width: "100%",
                    boxSizing: "border-box",
                    textAlign: "left",
                },
                !t.disablePadding &&
                    w(
                        { paddingTop: 8, paddingBottom: 8 },
                        t.dense && { paddingTop: 4, paddingBottom: 4 },
                        !t.disableGutters && {
                            paddingLeft: 16,
                            paddingRight: 16,
                        },
                        !!t.secondaryAction && { paddingRight: 48 }
                    ),
                !!t.secondaryAction && {
                    [`& > .${l4.root}`]: { paddingRight: 48 },
                },
                {
                    [`&.${vo.focusVisible}`]: {
                        backgroundColor: (e.vars || e).palette.action.focus,
                    },
                    [`&.${vo.selected}`]: {
                        backgroundColor: e.vars
                            ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`
                            : Me(
                                  e.palette.primary.main,
                                  e.palette.action.selectedOpacity
                              ),
                        [`&.${vo.focusVisible}`]: {
                            backgroundColor: e.vars
                                ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`
                                : Me(
                                      e.palette.primary.main,
                                      e.palette.action.selectedOpacity +
                                          e.palette.action.focusOpacity
                                  ),
                        },
                    },
                    [`&.${vo.disabled}`]: {
                        opacity: (e.vars || e).palette.action.disabledOpacity,
                    },
                },
                t.alignItems === "flex-start" && { alignItems: "flex-start" },
                t.divider && {
                    borderBottom: `1px solid ${(e.vars || e).palette.divider}`,
                    backgroundClip: "padding-box",
                },
                t.button && {
                    transition: e.transitions.create("background-color", {
                        duration: e.transitions.duration.shortest,
                    }),
                    "&:hover": {
                        textDecoration: "none",
                        backgroundColor: (e.vars || e).palette.action.hover,
                        "@media (hover: none)": {
                            backgroundColor: "transparent",
                        },
                    },
                    [`&.${vo.selected}:hover`]: {
                        backgroundColor: e.vars
                            ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`
                            : Me(
                                  e.palette.primary.main,
                                  e.palette.action.selectedOpacity +
                                      e.palette.action.hoverOpacity
                              ),
                        "@media (hover: none)": {
                            backgroundColor: e.vars
                                ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`
                                : Me(
                                      e.palette.primary.main,
                                      e.palette.action.selectedOpacity
                                  ),
                        },
                    },
                },
                t.hasSecondaryAction && { paddingRight: 48 }
            )
    ),
    b4 = H("li", {
        name: "MuiListItem",
        slot: "Container",
        overridesResolver: (e, t) => t.container,
    })({ position: "relative" }),
    x4 = b.forwardRef(function (t, n) {
        const r = ce({ props: t, name: "MuiListItem" }),
            {
                alignItems: o = "center",
                autoFocus: i = !1,
                button: s = !1,
                children: a,
                className: l,
                component: u,
                components: d = {},
                componentsProps: f = {},
                ContainerComponent: c = "li",
                ContainerProps: { className: h } = {},
                dense: g = !1,
                disabled: p = !1,
                disableGutters: S = !1,
                disablePadding: y = !1,
                divider: m = !1,
                focusVisibleClassName: v,
                secondaryAction: x,
                selected: k = !1,
                slotProps: R = {},
                slots: C = {},
            } = r,
            T = Q(r.ContainerProps, h4),
            I = Q(r, m4),
            P = b.useContext(vr),
            D = b.useMemo(
                () => ({
                    dense: g || P.dense || !1,
                    alignItems: o,
                    disableGutters: S,
                }),
                [o, P.dense, g, S]
            ),
            K = b.useRef(null);
        Cr(() => {
            i && K.current && K.current.focus();
        }, [i]);
        const j = b.Children.toArray(a),
            N = j.length && Pa(j[j.length - 1], ["ListItemSecondaryAction"]),
            z = w({}, r, {
                alignItems: o,
                autoFocus: i,
                button: s,
                dense: D.dense,
                disabled: p,
                disableGutters: S,
                disablePadding: y,
                divider: m,
                hasSecondaryAction: N,
                selected: k,
            }),
            U = y4(z),
            Z = st(K, n),
            $ = C.root || d.Root || v4,
            _ = R.root || f.root || {},
            L = w({ className: J(U.root, _.className, l), disabled: p }, I);
        let V = u || "li";
        return (
            s &&
                ((L.component = u || "div"),
                (L.focusVisibleClassName = J(vo.focusVisible, v)),
                (V = no)),
            N
                ? ((V = !L.component && !u ? "div" : V),
                  c === "li" &&
                      (V === "li"
                          ? (V = "div")
                          : L.component === "li" && (L.component = "div")),
                  E(vr.Provider, {
                      value: D,
                      children: te(
                          b4,
                          w(
                              {
                                  as: c,
                                  className: J(U.container, h),
                                  ref: Z,
                                  ownerState: z,
                              },
                              T,
                              {
                                  children: [
                                      E(
                                          $,
                                          w(
                                              {},
                                              _,
                                              !oi($) && {
                                                  as: V,
                                                  ownerState: w(
                                                      {},
                                                      z,
                                                      _.ownerState
                                                  ),
                                              },
                                              L,
                                              { children: j }
                                          )
                                      ),
                                      j.pop(),
                                  ],
                              }
                          )
                      ),
                  }))
                : E(vr.Provider, {
                      value: D,
                      children: te(
                          $,
                          w(
                              {},
                              _,
                              { as: V, ref: Z },
                              !oi($) && { ownerState: w({}, z, _.ownerState) },
                              L,
                              { children: [j, x && E(p4, { children: x })] }
                          )
                      ),
                  })
        );
    }),
    mg = x4,
    w4 = ue("MuiListItemIcon", ["root", "alignItemsFlexStart"]),
    gg = w4;
function S4(e) {
    return fe("MuiListItemText", e);
}
const C4 = ue("MuiListItemText", [
        "root",
        "multiline",
        "dense",
        "inset",
        "primary",
        "secondary",
    ]),
    gl = C4,
    k4 = [
        "children",
        "className",
        "disableTypography",
        "inset",
        "primary",
        "primaryTypographyProps",
        "secondary",
        "secondaryTypographyProps",
    ],
    E4 = (e) => {
        const { classes: t, inset: n, primary: r, secondary: o, dense: i } = e;
        return pe(
            {
                root: [
                    "root",
                    n && "inset",
                    i && "dense",
                    r && o && "multiline",
                ],
                primary: ["primary"],
                secondary: ["secondary"],
            },
            S4,
            t
        );
    },
    R4 = H("div", {
        name: "MuiListItemText",
        slot: "Root",
        overridesResolver: (e, t) => {
            const { ownerState: n } = e;
            return [
                { [`& .${gl.primary}`]: t.primary },
                { [`& .${gl.secondary}`]: t.secondary },
                t.root,
                n.inset && t.inset,
                n.primary && n.secondary && t.multiline,
                n.dense && t.dense,
            ];
        },
    })(({ ownerState: e }) =>
        w(
            { flex: "1 1 auto", minWidth: 0, marginTop: 4, marginBottom: 4 },
            e.primary && e.secondary && { marginTop: 6, marginBottom: 6 },
            e.inset && { paddingLeft: 56 }
        )
    ),
    P4 = b.forwardRef(function (t, n) {
        const r = ce({ props: t, name: "MuiListItemText" }),
            {
                children: o,
                className: i,
                disableTypography: s = !1,
                inset: a = !1,
                primary: l,
                primaryTypographyProps: u,
                secondary: d,
                secondaryTypographyProps: f,
            } = r,
            c = Q(r, k4),
            { dense: h } = b.useContext(vr);
        let g = l ?? o,
            p = d;
        const S = w({}, r, {
                disableTypography: s,
                inset: a,
                primary: !!g,
                secondary: !!p,
                dense: h,
            }),
            y = E4(S);
        return (
            g != null &&
                g.type !== We &&
                !s &&
                (g = E(
                    We,
                    w(
                        {
                            variant: h ? "body2" : "body1",
                            className: y.primary,
                            component: u != null && u.variant ? void 0 : "span",
                            display: "block",
                        },
                        u,
                        { children: g }
                    )
                )),
            p != null &&
                p.type !== We &&
                !s &&
                (p = E(
                    We,
                    w(
                        {
                            variant: "body2",
                            className: y.secondary,
                            color: "text.secondary",
                            display: "block",
                        },
                        f,
                        { children: p }
                    )
                )),
            te(
                R4,
                w({ className: J(y.root, i), ownerState: S, ref: n }, c, {
                    children: [g, p],
                })
            )
        );
    }),
    $4 = P4,
    T4 = [
        "actions",
        "autoFocus",
        "autoFocusItem",
        "children",
        "className",
        "disabledItemsFocusable",
        "disableListWrap",
        "onKeyDown",
        "variant",
    ];
function yc(e, t, n) {
    return e === t
        ? e.firstChild
        : t && t.nextElementSibling
        ? t.nextElementSibling
        : n
        ? null
        : e.firstChild;
}
function yg(e, t, n) {
    return e === t
        ? n
            ? e.firstChild
            : e.lastChild
        : t && t.previousElementSibling
        ? t.previousElementSibling
        : n
        ? null
        : e.lastChild;
}
function T1(e, t) {
    if (t === void 0) return !0;
    let n = e.innerText;
    return (
        n === void 0 && (n = e.textContent),
        (n = n.trim().toLowerCase()),
        n.length === 0
            ? !1
            : t.repeating
            ? n[0] === t.keys[0]
            : n.indexOf(t.keys.join("")) === 0
    );
}
function Ii(e, t, n, r, o, i) {
    let s = !1,
        a = o(e, t, t ? n : !1);
    for (; a; ) {
        if (a === e.firstChild) {
            if (s) return !1;
            s = !0;
        }
        const l = r
            ? !1
            : a.disabled || a.getAttribute("aria-disabled") === "true";
        if (!a.hasAttribute("tabindex") || !T1(a, i) || l) a = o(e, a, n);
        else return a.focus(), !0;
    }
    return !1;
}
const I4 = b.forwardRef(function (t, n) {
        const {
                actions: r,
                autoFocus: o = !1,
                autoFocusItem: i = !1,
                children: s,
                className: a,
                disabledItemsFocusable: l = !1,
                disableListWrap: u = !1,
                onKeyDown: d,
                variant: f = "selectedMenu",
            } = t,
            c = Q(t, T4),
            h = b.useRef(null),
            g = b.useRef({
                keys: [],
                repeating: !0,
                previousKeyMatched: !0,
                lastTime: null,
            });
        Cr(() => {
            o && h.current.focus();
        }, [o]),
            b.useImperativeHandle(
                r,
                () => ({
                    adjustStyleForScrollbar: (v, x) => {
                        const k = !h.current.style.width;
                        if (v.clientHeight < h.current.clientHeight && k) {
                            const R = `${A0(jt(v))}px`;
                            (h.current.style[
                                x.direction === "rtl"
                                    ? "paddingLeft"
                                    : "paddingRight"
                            ] = R),
                                (h.current.style.width = `calc(100% + ${R})`);
                        }
                        return h.current;
                    },
                }),
                []
            );
        const p = (v) => {
                const x = h.current,
                    k = v.key,
                    R = jt(x).activeElement;
                if (k === "ArrowDown") v.preventDefault(), Ii(x, R, u, l, yc);
                else if (k === "ArrowUp")
                    v.preventDefault(), Ii(x, R, u, l, yg);
                else if (k === "Home")
                    v.preventDefault(), Ii(x, null, u, l, yc);
                else if (k === "End") v.preventDefault(), Ii(x, null, u, l, yg);
                else if (k.length === 1) {
                    const C = g.current,
                        T = k.toLowerCase(),
                        I = performance.now();
                    C.keys.length > 0 &&
                        (I - C.lastTime > 500
                            ? ((C.keys = []),
                              (C.repeating = !0),
                              (C.previousKeyMatched = !0))
                            : C.repeating &&
                              T !== C.keys[0] &&
                              (C.repeating = !1)),
                        (C.lastTime = I),
                        C.keys.push(T);
                    const P = R && !C.repeating && T1(R, C);
                    C.previousKeyMatched && (P || Ii(x, R, !1, l, yc, C))
                        ? v.preventDefault()
                        : (C.previousKeyMatched = !1);
                }
                d && d(v);
            },
            S = st(h, n);
        let y = -1;
        b.Children.forEach(s, (v, x) => {
            b.isValidElement(v) &&
                (v.props.disabled ||
                    (((f === "selectedMenu" && v.props.selected) || y === -1) &&
                        (y = x)));
        });
        const m = b.Children.map(s, (v, x) => {
            if (x === y) {
                const k = {};
                return (
                    i && (k.autoFocus = !0),
                    v.props.tabIndex === void 0 &&
                        f === "selectedMenu" &&
                        (k.tabIndex = 0),
                    b.cloneElement(v, k)
                );
            }
            return v;
        });
        return E(
            P1,
            w(
                {
                    role: "menu",
                    ref: S,
                    className: a,
                    onKeyDown: p,
                    tabIndex: o ? 0 : -1,
                },
                c,
                { children: m }
            )
        );
    }),
    O4 = I4;
function M4(e) {
    return fe("MuiPopover", e);
}
ue("MuiPopover", ["root", "paper"]);
const _4 = ["onEntering"],
    N4 = [
        "action",
        "anchorEl",
        "anchorOrigin",
        "anchorPosition",
        "anchorReference",
        "children",
        "className",
        "container",
        "elevation",
        "marginThreshold",
        "open",
        "PaperProps",
        "transformOrigin",
        "TransitionComponent",
        "transitionDuration",
        "TransitionProps",
    ];
function vg(e, t) {
    let n = 0;
    return (
        typeof t == "number"
            ? (n = t)
            : t === "center"
            ? (n = e.height / 2)
            : t === "bottom" && (n = e.height),
        n
    );
}
function bg(e, t) {
    let n = 0;
    return (
        typeof t == "number"
            ? (n = t)
            : t === "center"
            ? (n = e.width / 2)
            : t === "right" && (n = e.width),
        n
    );
}
function xg(e) {
    return [e.horizontal, e.vertical]
        .map((t) => (typeof t == "number" ? `${t}px` : t))
        .join(" ");
}
function vc(e) {
    return typeof e == "function" ? e() : e;
}
const A4 = (e) => {
        const { classes: t } = e;
        return pe({ root: ["root"], paper: ["paper"] }, M4, t);
    },
    L4 = H(Ep, {
        name: "MuiPopover",
        slot: "Root",
        overridesResolver: (e, t) => t.root,
    })({}),
    D4 = H(ao, {
        name: "MuiPopover",
        slot: "Paper",
        overridesResolver: (e, t) => t.paper,
    })({
        position: "absolute",
        overflowY: "auto",
        overflowX: "hidden",
        minWidth: 16,
        minHeight: 16,
        maxWidth: "calc(100% - 32px)",
        maxHeight: "calc(100% - 32px)",
        outline: 0,
    }),
    z4 = b.forwardRef(function (t, n) {
        const r = ce({ props: t, name: "MuiPopover" }),
            {
                action: o,
                anchorEl: i,
                anchorOrigin: s = { vertical: "top", horizontal: "left" },
                anchorPosition: a,
                anchorReference: l = "anchorEl",
                children: u,
                className: d,
                container: f,
                elevation: c = 8,
                marginThreshold: h = 16,
                open: g,
                PaperProps: p = {},
                transformOrigin: S = { vertical: "top", horizontal: "left" },
                TransitionComponent: y = W3,
                transitionDuration: m = "auto",
                TransitionProps: { onEntering: v } = {},
            } = r,
            x = Q(r.TransitionProps, _4),
            k = Q(r, N4),
            R = b.useRef(),
            C = st(R, p.ref),
            T = w({}, r, {
                anchorOrigin: s,
                anchorReference: l,
                elevation: c,
                marginThreshold: h,
                PaperProps: p,
                transformOrigin: S,
                TransitionComponent: y,
                transitionDuration: m,
                TransitionProps: x,
            }),
            I = A4(T),
            P = b.useCallback(() => {
                if (l === "anchorPosition") return a;
                const L = vc(i),
                    ne = (
                        L && L.nodeType === 1 ? L : jt(R.current).body
                    ).getBoundingClientRect();
                return {
                    top: ne.top + vg(ne, s.vertical),
                    left: ne.left + bg(ne, s.horizontal),
                };
            }, [i, s.horizontal, s.vertical, a, l]),
            D = b.useCallback(
                (L) => ({
                    vertical: vg(L, S.vertical),
                    horizontal: bg(L, S.horizontal),
                }),
                [S.horizontal, S.vertical]
            ),
            K = b.useCallback(
                (L) => {
                    const V = { width: L.offsetWidth, height: L.offsetHeight },
                        ne = D(V);
                    if (l === "none")
                        return {
                            top: null,
                            left: null,
                            transformOrigin: xg(ne),
                        };
                    const _e = P();
                    let se = _e.top - ne.vertical,
                        ve = _e.left - ne.horizontal;
                    const q = se + V.height,
                        he = ve + V.width,
                        Te = Gn(vc(i)),
                        be = Te.innerHeight - h,
                        Ae = Te.innerWidth - h;
                    if (se < h) {
                        const le = se - h;
                        (se -= le), (ne.vertical += le);
                    } else if (q > be) {
                        const le = q - be;
                        (se -= le), (ne.vertical += le);
                    }
                    if (ve < h) {
                        const le = ve - h;
                        (ve -= le), (ne.horizontal += le);
                    } else if (he > Ae) {
                        const le = he - Ae;
                        (ve -= le), (ne.horizontal += le);
                    }
                    return {
                        top: `${Math.round(se)}px`,
                        left: `${Math.round(ve)}px`,
                        transformOrigin: xg(ne),
                    };
                },
                [i, l, P, D, h]
            ),
            [j, N] = b.useState(g),
            z = b.useCallback(() => {
                const L = R.current;
                if (!L) return;
                const V = K(L);
                V.top !== null && (L.style.top = V.top),
                    V.left !== null && (L.style.left = V.left),
                    (L.style.transformOrigin = V.transformOrigin),
                    N(!0);
            }, [K]),
            U = (L, V) => {
                v && v(L, V), z();
            },
            Z = () => {
                N(!1);
            };
        b.useEffect(() => {
            g && z();
        }),
            b.useImperativeHandle(
                o,
                () =>
                    g
                        ? {
                              updatePosition: () => {
                                  z();
                              },
                          }
                        : null,
                [g, z]
            ),
            b.useEffect(() => {
                if (!g) return;
                const L = rp(() => {
                        z();
                    }),
                    V = Gn(i);
                return (
                    V.addEventListener("resize", L),
                    () => {
                        L.clear(), V.removeEventListener("resize", L);
                    }
                );
            }, [i, g, z]);
        let $ = m;
        m === "auto" && !y.muiSupportAuto && ($ = void 0);
        const _ = f || (i ? jt(vc(i)).body : void 0);
        return E(
            L4,
            w(
                {
                    BackdropProps: { invisible: !0 },
                    className: J(I.root, d),
                    container: _,
                    open: g,
                    ref: n,
                    ownerState: T,
                },
                k,
                {
                    children: E(
                        y,
                        w(
                            {
                                appear: !0,
                                in: g,
                                onEntering: U,
                                onExited: Z,
                                timeout: $,
                            },
                            x,
                            {
                                children: E(
                                    D4,
                                    w(
                                        { elevation: c },
                                        p,
                                        {
                                            ref: C,
                                            className: J(I.paper, p.className),
                                        },
                                        j
                                            ? void 0
                                            : {
                                                  style: w({}, p.style, {
                                                      opacity: 0,
                                                  }),
                                              },
                                        { ownerState: T, children: u }
                                    )
                                ),
                            }
                        )
                    ),
                }
            )
        );
    }),
    F4 = z4;
function B4(e) {
    return fe("MuiMenu", e);
}
ue("MuiMenu", ["root", "paper", "list"]);
const U4 = ["onEntering"],
    W4 = [
        "autoFocus",
        "children",
        "disableAutoFocusItem",
        "MenuListProps",
        "onClose",
        "open",
        "PaperProps",
        "PopoverClasses",
        "transitionDuration",
        "TransitionProps",
        "variant",
    ],
    j4 = { vertical: "top", horizontal: "right" },
    V4 = { vertical: "top", horizontal: "left" },
    H4 = (e) => {
        const { classes: t } = e;
        return pe({ root: ["root"], paper: ["paper"], list: ["list"] }, B4, t);
    },
    K4 = H(F4, {
        shouldForwardProp: (e) => xn(e) || e === "classes",
        name: "MuiMenu",
        slot: "Root",
        overridesResolver: (e, t) => t.root,
    })({}),
    G4 = H(ao, {
        name: "MuiMenu",
        slot: "Paper",
        overridesResolver: (e, t) => t.paper,
    })({ maxHeight: "calc(100% - 96px)", WebkitOverflowScrolling: "touch" }),
    q4 = H(O4, {
        name: "MuiMenu",
        slot: "List",
        overridesResolver: (e, t) => t.list,
    })({ outline: 0 }),
    Y4 = b.forwardRef(function (t, n) {
        const r = ce({ props: t, name: "MuiMenu" }),
            {
                autoFocus: o = !0,
                children: i,
                disableAutoFocusItem: s = !1,
                MenuListProps: a = {},
                onClose: l,
                open: u,
                PaperProps: d = {},
                PopoverClasses: f,
                transitionDuration: c = "auto",
                TransitionProps: { onEntering: h } = {},
                variant: g = "selectedMenu",
            } = r,
            p = Q(r.TransitionProps, U4),
            S = Q(r, W4),
            y = so(),
            m = y.direction === "rtl",
            v = w({}, r, {
                autoFocus: o,
                disableAutoFocusItem: s,
                MenuListProps: a,
                onEntering: h,
                PaperProps: d,
                transitionDuration: c,
                TransitionProps: p,
                variant: g,
            }),
            x = H4(v),
            k = o && !s && u,
            R = b.useRef(null),
            C = (P, D) => {
                R.current && R.current.adjustStyleForScrollbar(P, y),
                    h && h(P, D);
            },
            T = (P) => {
                P.key === "Tab" &&
                    (P.preventDefault(), l && l(P, "tabKeyDown"));
            };
        let I = -1;
        return (
            b.Children.map(i, (P, D) => {
                b.isValidElement(P) &&
                    (P.props.disabled ||
                        (((g === "selectedMenu" && P.props.selected) ||
                            I === -1) &&
                            (I = D)));
            }),
            E(
                K4,
                w(
                    {
                        onClose: l,
                        anchorOrigin: {
                            vertical: "bottom",
                            horizontal: m ? "right" : "left",
                        },
                        transformOrigin: m ? j4 : V4,
                        PaperProps: w({ component: G4 }, d, {
                            classes: w({}, d.classes, { root: x.paper }),
                        }),
                        className: x.root,
                        open: u,
                        ref: n,
                        transitionDuration: c,
                        TransitionProps: w({ onEntering: C }, p),
                        ownerState: v,
                    },
                    S,
                    {
                        classes: f,
                        children: E(
                            q4,
                            w(
                                {
                                    onKeyDown: T,
                                    actions: R,
                                    autoFocus: o && (I === -1 || s),
                                    autoFocusItem: k,
                                    variant: g,
                                },
                                a,
                                {
                                    className: J(x.list, a.className),
                                    children: i,
                                }
                            )
                        ),
                    }
                )
            )
        );
    }),
    I1 = Y4;
function X4(e) {
    return fe("MuiMenuItem", e);
}
const Q4 = ue("MuiMenuItem", [
        "root",
        "focusVisible",
        "dense",
        "disabled",
        "divider",
        "gutters",
        "selected",
    ]),
    Oi = Q4,
    J4 = [
        "autoFocus",
        "component",
        "dense",
        "divider",
        "disableGutters",
        "focusVisibleClassName",
        "role",
        "tabIndex",
        "className",
    ],
    Z4 = (e, t) => {
        const { ownerState: n } = e;
        return [
            t.root,
            n.dense && t.dense,
            n.divider && t.divider,
            !n.disableGutters && t.gutters,
        ];
    },
    eO = (e) => {
        const {
                disabled: t,
                dense: n,
                divider: r,
                disableGutters: o,
                selected: i,
                classes: s,
            } = e,
            l = pe(
                {
                    root: [
                        "root",
                        n && "dense",
                        t && "disabled",
                        !o && "gutters",
                        r && "divider",
                        i && "selected",
                    ],
                },
                X4,
                s
            );
        return w({}, s, l);
    },
    tO = H(no, {
        shouldForwardProp: (e) => xn(e) || e === "classes",
        name: "MuiMenuItem",
        slot: "Root",
        overridesResolver: Z4,
    })(({ theme: e, ownerState: t }) =>
        w(
            {},
            e.typography.body1,
            {
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                position: "relative",
                textDecoration: "none",
                minHeight: 48,
                paddingTop: 6,
                paddingBottom: 6,
                boxSizing: "border-box",
                whiteSpace: "nowrap",
            },
            !t.disableGutters && { paddingLeft: 16, paddingRight: 16 },
            t.divider && {
                borderBottom: `1px solid ${(e.vars || e).palette.divider}`,
                backgroundClip: "padding-box",
            },
            {
                "&:hover": {
                    textDecoration: "none",
                    backgroundColor: (e.vars || e).palette.action.hover,
                    "@media (hover: none)": { backgroundColor: "transparent" },
                },
                [`&.${Oi.selected}`]: {
                    backgroundColor: e.vars
                        ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`
                        : Me(
                              e.palette.primary.main,
                              e.palette.action.selectedOpacity
                          ),
                    [`&.${Oi.focusVisible}`]: {
                        backgroundColor: e.vars
                            ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`
                            : Me(
                                  e.palette.primary.main,
                                  e.palette.action.selectedOpacity +
                                      e.palette.action.focusOpacity
                              ),
                    },
                },
                [`&.${Oi.selected}:hover`]: {
                    backgroundColor: e.vars
                        ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`
                        : Me(
                              e.palette.primary.main,
                              e.palette.action.selectedOpacity +
                                  e.palette.action.hoverOpacity
                          ),
                    "@media (hover: none)": {
                        backgroundColor: e.vars
                            ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`
                            : Me(
                                  e.palette.primary.main,
                                  e.palette.action.selectedOpacity
                              ),
                    },
                },
                [`&.${Oi.focusVisible}`]: {
                    backgroundColor: (e.vars || e).palette.action.focus,
                },
                [`&.${Oi.disabled}`]: {
                    opacity: (e.vars || e).palette.action.disabledOpacity,
                },
                [`& + .${dg.root}`]: {
                    marginTop: e.spacing(1),
                    marginBottom: e.spacing(1),
                },
                [`& + .${dg.inset}`]: { marginLeft: 52 },
                [`& .${gl.root}`]: { marginTop: 0, marginBottom: 0 },
                [`& .${gl.inset}`]: { paddingLeft: 36 },
                [`& .${gg.root}`]: { minWidth: 36 },
            },
            !t.dense && { [e.breakpoints.up("sm")]: { minHeight: "auto" } },
            t.dense &&
                w(
                    { minHeight: 32, paddingTop: 4, paddingBottom: 4 },
                    e.typography.body2,
                    { [`& .${gg.root} svg`]: { fontSize: "1.25rem" } }
                )
        )
    ),
    nO = b.forwardRef(function (t, n) {
        const r = ce({ props: t, name: "MuiMenuItem" }),
            {
                autoFocus: o = !1,
                component: i = "li",
                dense: s = !1,
                divider: a = !1,
                disableGutters: l = !1,
                focusVisibleClassName: u,
                role: d = "menuitem",
                tabIndex: f,
                className: c,
            } = r,
            h = Q(r, J4),
            g = b.useContext(vr),
            p = b.useMemo(
                () => ({ dense: s || g.dense || !1, disableGutters: l }),
                [g.dense, s, l]
            ),
            S = b.useRef(null);
        Cr(() => {
            o && S.current && S.current.focus();
        }, [o]);
        const y = w({}, r, { dense: p.dense, divider: a, disableGutters: l }),
            m = eO(r),
            v = st(S, n);
        let x;
        return (
            r.disabled || (x = f !== void 0 ? f : -1),
            E(vr.Provider, {
                value: p,
                children: E(
                    tO,
                    w(
                        {
                            ref: v,
                            role: d,
                            tabIndex: x,
                            component: i,
                            focusVisibleClassName: J(m.focusVisible, u),
                            className: J(m.root, c),
                        },
                        h,
                        { ownerState: y, classes: m }
                    )
                ),
            })
        );
    }),
    wg = nO;
function rO(e) {
    return fe("MuiNativeSelect", e);
}
const oO = ue("MuiNativeSelect", [
        "root",
        "select",
        "multiple",
        "filled",
        "outlined",
        "standard",
        "disabled",
        "icon",
        "iconOpen",
        "iconFilled",
        "iconOutlined",
        "iconStandard",
        "nativeInput",
    ]),
    Rp = oO,
    iO = ["className", "disabled", "IconComponent", "inputRef", "variant"],
    sO = (e) => {
        const { classes: t, variant: n, disabled: r, multiple: o, open: i } = e,
            s = {
                select: ["select", n, r && "disabled", o && "multiple"],
                icon: ["icon", `icon${W(n)}`, i && "iconOpen", r && "disabled"],
            };
        return pe(s, rO, t);
    },
    O1 = ({ ownerState: e, theme: t }) =>
        w(
            {
                MozAppearance: "none",
                WebkitAppearance: "none",
                userSelect: "none",
                borderRadius: 0,
                cursor: "pointer",
                "&:focus": w(
                    {},
                    t.vars
                        ? {
                              backgroundColor: `rgba(${t.vars.palette.common.onBackgroundChannel} / 0.05)`,
                          }
                        : {
                              backgroundColor:
                                  t.palette.mode === "light"
                                      ? "rgba(0, 0, 0, 0.05)"
                                      : "rgba(255, 255, 255, 0.05)",
                          },
                    { borderRadius: 0 }
                ),
                "&::-ms-expand": { display: "none" },
                [`&.${Rp.disabled}`]: { cursor: "default" },
                "&[multiple]": { height: "auto" },
                "&:not([multiple]) option, &:not([multiple]) optgroup": {
                    backgroundColor: (t.vars || t).palette.background.paper,
                },
                "&&&": { paddingRight: 24, minWidth: 16 },
            },
            e.variant === "filled" && { "&&&": { paddingRight: 32 } },
            e.variant === "outlined" && {
                borderRadius: (t.vars || t).shape.borderRadius,
                "&:focus": { borderRadius: (t.vars || t).shape.borderRadius },
                "&&&": { paddingRight: 32 },
            }
        ),
    aO = H("select", {
        name: "MuiNativeSelect",
        slot: "Select",
        shouldForwardProp: xn,
        overridesResolver: (e, t) => {
            const { ownerState: n } = e;
            return [
                t.select,
                t[n.variant],
                { [`&.${Rp.multiple}`]: t.multiple },
            ];
        },
    })(O1),
    M1 = ({ ownerState: e, theme: t }) =>
        w(
            {
                position: "absolute",
                right: 0,
                top: "calc(50% - .5em)",
                pointerEvents: "none",
                color: (t.vars || t).palette.action.active,
                [`&.${Rp.disabled}`]: {
                    color: (t.vars || t).palette.action.disabled,
                },
            },
            e.open && { transform: "rotate(180deg)" },
            e.variant === "filled" && { right: 7 },
            e.variant === "outlined" && { right: 7 }
        ),
    lO = H("svg", {
        name: "MuiNativeSelect",
        slot: "Icon",
        overridesResolver: (e, t) => {
            const { ownerState: n } = e;
            return [
                t.icon,
                n.variant && t[`icon${W(n.variant)}`],
                n.open && t.iconOpen,
            ];
        },
    })(M1),
    uO = b.forwardRef(function (t, n) {
        const {
                className: r,
                disabled: o,
                IconComponent: i,
                inputRef: s,
                variant: a = "standard",
            } = t,
            l = Q(t, iO),
            u = w({}, t, { disabled: o, variant: a }),
            d = sO(u);
        return te(b.Fragment, {
            children: [
                E(
                    aO,
                    w(
                        {
                            ownerState: u,
                            className: J(d.select, r),
                            disabled: o,
                            ref: s || n,
                        },
                        l
                    )
                ),
                t.multiple
                    ? null
                    : E(lO, { as: i, ownerState: u, className: d.icon }),
            ],
        });
    }),
    cO = uO;
var Sg;
const dO = ["children", "classes", "className", "label", "notched"],
    fO = H("fieldset")({
        textAlign: "left",
        position: "absolute",
        bottom: 0,
        right: 0,
        top: -5,
        left: 0,
        margin: 0,
        padding: "0 8px",
        pointerEvents: "none",
        borderRadius: "inherit",
        borderStyle: "solid",
        borderWidth: 1,
        overflow: "hidden",
        minWidth: "0%",
    }),
    pO = H("legend")(({ ownerState: e, theme: t }) =>
        w(
            { float: "unset", width: "auto", overflow: "hidden" },
            !e.withLabel && {
                padding: 0,
                lineHeight: "11px",
                transition: t.transitions.create("width", {
                    duration: 150,
                    easing: t.transitions.easing.easeOut,
                }),
            },
            e.withLabel &&
                w(
                    {
                        display: "block",
                        padding: 0,
                        height: 11,
                        fontSize: "0.75em",
                        visibility: "hidden",
                        maxWidth: 0.01,
                        transition: t.transitions.create("max-width", {
                            duration: 50,
                            easing: t.transitions.easing.easeOut,
                        }),
                        whiteSpace: "nowrap",
                        "& > span": {
                            paddingLeft: 5,
                            paddingRight: 5,
                            display: "inline-block",
                            opacity: 0,
                            visibility: "visible",
                        },
                    },
                    e.notched && {
                        maxWidth: "100%",
                        transition: t.transitions.create("max-width", {
                            duration: 100,
                            easing: t.transitions.easing.easeOut,
                            delay: 50,
                        }),
                    }
                )
        )
    );
function hO(e) {
    const { className: t, label: n, notched: r } = e,
        o = Q(e, dO),
        i = n != null && n !== "",
        s = w({}, e, { notched: r, withLabel: i });
    return E(
        fO,
        w({ "aria-hidden": !0, className: t, ownerState: s }, o, {
            children: E(pO, {
                ownerState: s,
                children: i
                    ? E("span", { children: n })
                    : Sg ||
                      (Sg = E("span", {
                          className: "notranslate",
                          children: "​",
                      })),
            }),
        })
    );
}
const mO = [
        "components",
        "fullWidth",
        "inputComponent",
        "label",
        "multiline",
        "notched",
        "slots",
        "type",
    ],
    gO = (e) => {
        const { classes: t } = e,
            r = pe(
                {
                    root: ["root"],
                    notchedOutline: ["notchedOutline"],
                    input: ["input"],
                },
                YT,
                t
            );
        return w({}, t, r);
    },
    yO = H(ku, {
        shouldForwardProp: (e) => xn(e) || e === "classes",
        name: "MuiOutlinedInput",
        slot: "Root",
        overridesResolver: Su,
    })(({ theme: e, ownerState: t }) => {
        const n =
            e.palette.mode === "light"
                ? "rgba(0, 0, 0, 0.23)"
                : "rgba(255, 255, 255, 0.23)";
        return w(
            {
                position: "relative",
                borderRadius: (e.vars || e).shape.borderRadius,
                [`&:hover .${Zn.notchedOutline}`]: {
                    borderColor: (e.vars || e).palette.text.primary,
                },
                "@media (hover: none)": {
                    [`&:hover .${Zn.notchedOutline}`]: {
                        borderColor: e.vars
                            ? `rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)`
                            : n,
                    },
                },
                [`&.${Zn.focused} .${Zn.notchedOutline}`]: {
                    borderColor: (e.vars || e).palette[t.color].main,
                    borderWidth: 2,
                },
                [`&.${Zn.error} .${Zn.notchedOutline}`]: {
                    borderColor: (e.vars || e).palette.error.main,
                },
                [`&.${Zn.disabled} .${Zn.notchedOutline}`]: {
                    borderColor: (e.vars || e).palette.action.disabled,
                },
            },
            t.startAdornment && { paddingLeft: 14 },
            t.endAdornment && { paddingRight: 14 },
            t.multiline &&
                w(
                    { padding: "16.5px 14px" },
                    t.size === "small" && { padding: "8.5px 14px" }
                )
        );
    }),
    vO = H(hO, {
        name: "MuiOutlinedInput",
        slot: "NotchedOutline",
        overridesResolver: (e, t) => t.notchedOutline,
    })(({ theme: e }) => {
        const t =
            e.palette.mode === "light"
                ? "rgba(0, 0, 0, 0.23)"
                : "rgba(255, 255, 255, 0.23)";
        return {
            borderColor: e.vars
                ? `rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)`
                : t,
        };
    }),
    bO = H(Eu, {
        name: "MuiOutlinedInput",
        slot: "Input",
        overridesResolver: Cu,
    })(({ theme: e, ownerState: t }) =>
        w(
            { padding: "16.5px 14px" },
            !e.vars && {
                "&:-webkit-autofill": {
                    WebkitBoxShadow:
                        e.palette.mode === "light"
                            ? null
                            : "0 0 0 100px #266798 inset",
                    WebkitTextFillColor:
                        e.palette.mode === "light" ? null : "#fff",
                    caretColor: e.palette.mode === "light" ? null : "#fff",
                    borderRadius: "inherit",
                },
            },
            e.vars && {
                "&:-webkit-autofill": { borderRadius: "inherit" },
                [e.getColorSchemeSelector("dark")]: {
                    "&:-webkit-autofill": {
                        WebkitBoxShadow: "0 0 0 100px #266798 inset",
                        WebkitTextFillColor: "#fff",
                        caretColor: "#fff",
                    },
                },
            },
            t.size === "small" && { padding: "8.5px 14px" },
            t.multiline && { padding: 0 },
            t.startAdornment && { paddingLeft: 0 },
            t.endAdornment && { paddingRight: 0 }
        )
    ),
    _1 = b.forwardRef(function (t, n) {
        var r, o, i, s, a;
        const l = ce({ props: t, name: "MuiOutlinedInput" }),
            {
                components: u = {},
                fullWidth: d = !1,
                inputComponent: f = "input",
                label: c,
                multiline: h = !1,
                notched: g,
                slots: p = {},
                type: S = "text",
            } = l,
            y = Q(l, mO),
            m = gO(l),
            v = pi(),
            x = fi({ props: l, muiFormControl: v, states: ["required"] }),
            k = w({}, l, {
                color: x.color || "primary",
                disabled: x.disabled,
                error: x.error,
                focused: x.focused,
                formControl: v,
                fullWidth: d,
                hiddenLabel: x.hiddenLabel,
                multiline: h,
                size: x.size,
                type: S,
            }),
            R = (r = (o = p.root) != null ? o : u.Root) != null ? r : yO,
            C = (i = (s = p.input) != null ? s : u.Input) != null ? i : bO;
        return E(
            kp,
            w(
                {
                    slots: { root: R, input: C },
                    renderSuffix: (T) =>
                        E(vO, {
                            ownerState: k,
                            className: m.notchedOutline,
                            label:
                                c != null && c !== "" && x.required
                                    ? a ||
                                      (a = te(b.Fragment, {
                                          children: [c, " ", "*"],
                                      }))
                                    : c,
                            notched:
                                typeof g < "u"
                                    ? g
                                    : Boolean(
                                          T.startAdornment ||
                                              T.filled ||
                                              T.focused
                                      ),
                        }),
                    fullWidth: d,
                    inputComponent: f,
                    multiline: h,
                    ref: n,
                    type: S,
                },
                y,
                { classes: w({}, m, { notchedOutline: null }) }
            )
        );
    });
_1.muiName = "Input";
const N1 = _1;
function xO(e) {
    return fe("MuiSelect", e);
}
const wO = ue("MuiSelect", [
        "select",
        "multiple",
        "filled",
        "outlined",
        "standard",
        "disabled",
        "focused",
        "icon",
        "iconOpen",
        "iconFilled",
        "iconOutlined",
        "iconStandard",
        "nativeInput",
    ]),
    ca = wO;
var Cg;
const SO = [
        "aria-describedby",
        "aria-label",
        "autoFocus",
        "autoWidth",
        "children",
        "className",
        "defaultOpen",
        "defaultValue",
        "disabled",
        "displayEmpty",
        "IconComponent",
        "inputRef",
        "labelId",
        "MenuProps",
        "multiple",
        "name",
        "onBlur",
        "onChange",
        "onClose",
        "onFocus",
        "onOpen",
        "open",
        "readOnly",
        "renderValue",
        "SelectDisplayProps",
        "tabIndex",
        "type",
        "value",
        "variant",
    ],
    CO = H("div", {
        name: "MuiSelect",
        slot: "Select",
        overridesResolver: (e, t) => {
            const { ownerState: n } = e;
            return [
                { [`&.${ca.select}`]: t.select },
                { [`&.${ca.select}`]: t[n.variant] },
                { [`&.${ca.multiple}`]: t.multiple },
            ];
        },
    })(O1, {
        [`&.${ca.select}`]: {
            height: "auto",
            minHeight: "1.4375em",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            overflow: "hidden",
        },
    }),
    kO = H("svg", {
        name: "MuiSelect",
        slot: "Icon",
        overridesResolver: (e, t) => {
            const { ownerState: n } = e;
            return [
                t.icon,
                n.variant && t[`icon${W(n.variant)}`],
                n.open && t.iconOpen,
            ];
        },
    })(M1),
    EO = H("input", {
        shouldForwardProp: (e) => EP(e) && e !== "classes",
        name: "MuiSelect",
        slot: "NativeInput",
        overridesResolver: (e, t) => t.nativeInput,
    })({
        bottom: 0,
        left: 0,
        position: "absolute",
        opacity: 0,
        pointerEvents: "none",
        width: "100%",
        boxSizing: "border-box",
    });
function kg(e, t) {
    return typeof t == "object" && t !== null
        ? e === t
        : String(e) === String(t);
}
function RO(e) {
    return e == null || (typeof e == "string" && !e.trim());
}
const PO = (e) => {
        const { classes: t, variant: n, disabled: r, multiple: o, open: i } = e,
            s = {
                select: ["select", n, r && "disabled", o && "multiple"],
                icon: ["icon", `icon${W(n)}`, i && "iconOpen", r && "disabled"],
                nativeInput: ["nativeInput"],
            };
        return pe(s, xO, t);
    },
    $O = b.forwardRef(function (t, n) {
        const {
                "aria-describedby": r,
                "aria-label": o,
                autoFocus: i,
                autoWidth: s,
                children: a,
                className: l,
                defaultOpen: u,
                defaultValue: d,
                disabled: f,
                displayEmpty: c,
                IconComponent: h,
                inputRef: g,
                labelId: p,
                MenuProps: S = {},
                multiple: y,
                name: m,
                onBlur: v,
                onChange: x,
                onClose: k,
                onFocus: R,
                onOpen: C,
                open: T,
                readOnly: I,
                renderValue: P,
                SelectDisplayProps: D = {},
                tabIndex: K,
                value: j,
                variant: N = "standard",
            } = t,
            z = Q(t, SO),
            [U, Z] = Rd({ controlled: j, default: d, name: "Select" }),
            [$, _] = Rd({ controlled: T, default: u, name: "Select" }),
            L = b.useRef(null),
            V = b.useRef(null),
            [ne, _e] = b.useState(null),
            { current: se } = b.useRef(T != null),
            [ve, q] = b.useState(),
            he = st(n, g),
            Te = b.useCallback((M) => {
                (V.current = M), M && _e(M);
            }, []),
            be = ne == null ? void 0 : ne.parentNode;
        b.useImperativeHandle(
            he,
            () => ({
                focus: () => {
                    V.current.focus();
                },
                node: L.current,
                value: U,
            }),
            [U]
        ),
            b.useEffect(() => {
                u &&
                    $ &&
                    ne &&
                    !se &&
                    (q(s ? null : be.clientWidth), V.current.focus());
            }, [ne, s]),
            b.useEffect(() => {
                i && V.current.focus();
            }, [i]),
            b.useEffect(() => {
                if (!p) return;
                const M = jt(V.current).getElementById(p);
                if (M) {
                    const me = () => {
                        getSelection().isCollapsed && V.current.focus();
                    };
                    return (
                        M.addEventListener("click", me),
                        () => {
                            M.removeEventListener("click", me);
                        }
                    );
                }
            }, [p]);
        const Ae = (M, me) => {
                M ? C && C(me) : k && k(me),
                    se || (q(s ? null : be.clientWidth), _(M));
            },
            le = (M) => {
                M.button === 0 &&
                    (M.preventDefault(), V.current.focus(), Ae(!0, M));
            },
            Je = (M) => {
                Ae(!1, M);
            },
            dt = b.Children.toArray(a),
            $t = (M) => {
                const me = dt
                    .map((Ze) => Ze.props.value)
                    .indexOf(M.target.value);
                if (me === -1) return;
                const Ce = dt[me];
                Z(Ce.props.value), x && x(M, Ce);
            },
            Dt = (M) => (me) => {
                let Ce;
                if (me.currentTarget.hasAttribute("tabindex")) {
                    if (y) {
                        Ce = Array.isArray(U) ? U.slice() : [];
                        const Ze = U.indexOf(M.props.value);
                        Ze === -1 ? Ce.push(M.props.value) : Ce.splice(Ze, 1);
                    } else Ce = M.props.value;
                    if (
                        (M.props.onClick && M.props.onClick(me),
                        U !== Ce && (Z(Ce), x))
                    ) {
                        const Ze = me.nativeEvent || me,
                            ln = new Ze.constructor(Ze.type, Ze);
                        Object.defineProperty(ln, "target", {
                            writable: !0,
                            value: { value: Ce, name: m },
                        }),
                            x(ln, M);
                    }
                    y || Ae(!1, me);
                }
            },
            an = (M) => {
                I ||
                    ([" ", "ArrowUp", "ArrowDown", "Enter"].indexOf(M.key) !==
                        -1 &&
                        (M.preventDefault(), Ae(!0, M)));
            },
            zt = ne !== null && $,
            O = (M) => {
                !zt &&
                    v &&
                    (Object.defineProperty(M, "target", {
                        writable: !0,
                        value: { value: U, name: m },
                    }),
                    v(M));
            };
        delete z["aria-invalid"];
        let A, B;
        const Y = [];
        let G = !1;
        (Cp({ value: U }) || c) && (P ? (A = P(U)) : (G = !0));
        const ie = dt.map((M, me, Ce) => {
            var Ze, ln, $r, Mn;
            if (!b.isValidElement(M)) return null;
            let Xt;
            if (y) {
                if (!Array.isArray(U)) throw new Error(Kn(2));
                (Xt = U.some((Xe) => kg(Xe, M.props.value))),
                    Xt && G && Y.push(M.props.children);
            } else
                (Xt = kg(U, M.props.value)), Xt && G && (B = M.props.children);
            if (M.props.value === void 0)
                return b.cloneElement(M, {
                    "aria-readonly": !0,
                    role: "option",
                });
            const at = () => {
                if (U) return Xt;
                const Xe = Ce.find((un) => {
                    var Qn;
                    return (
                        (un == null || (Qn = un.props) == null
                            ? void 0
                            : Qn.value) !== void 0 && un.props.disabled !== !0
                    );
                });
                return M === Xe ? !0 : Xt;
            };
            return b.cloneElement(M, {
                "aria-selected": Xt ? "true" : "false",
                onClick: Dt(M),
                onKeyUp: (Xe) => {
                    Xe.key === " " && Xe.preventDefault(),
                        M.props.onKeyUp && M.props.onKeyUp(Xe);
                },
                role: "option",
                selected:
                    ((Ze = Ce[0]) == null || (ln = Ze.props) == null
                        ? void 0
                        : ln.value) === void 0 ||
                    (($r = Ce[0]) == null || (Mn = $r.props) == null
                        ? void 0
                        : Mn.disabled) === !0
                        ? at()
                        : Xt,
                value: void 0,
                "data-value": M.props.value,
            });
        });
        G &&
            (y
                ? Y.length === 0
                    ? (A = null)
                    : (A = Y.reduce(
                          (M, me, Ce) => (
                              M.push(me), Ce < Y.length - 1 && M.push(", "), M
                          ),
                          []
                      ))
                : (A = B));
        let oe = ve;
        !s && se && ne && (oe = be.clientWidth);
        let ae;
        typeof K < "u" ? (ae = K) : (ae = f ? null : 0);
        const re = D.id || (m ? `mui-component-select-${m}` : void 0),
            Ie = w({}, t, { variant: N, value: U, open: zt }),
            ee = PO(Ie);
        return te(b.Fragment, {
            children: [
                E(
                    CO,
                    w(
                        {
                            ref: Te,
                            tabIndex: ae,
                            role: "button",
                            "aria-disabled": f ? "true" : void 0,
                            "aria-expanded": zt ? "true" : "false",
                            "aria-haspopup": "listbox",
                            "aria-label": o,
                            "aria-labelledby":
                                [p, re].filter(Boolean).join(" ") || void 0,
                            "aria-describedby": r,
                            onKeyDown: an,
                            onMouseDown: f || I ? null : le,
                            onBlur: O,
                            onFocus: R,
                        },
                        D,
                        {
                            ownerState: Ie,
                            className: J(D.className, ee.select, l),
                            id: re,
                            children: RO(A)
                                ? Cg ||
                                  (Cg = E("span", {
                                      className: "notranslate",
                                      children: "​",
                                  }))
                                : A,
                        }
                    )
                ),
                E(
                    EO,
                    w(
                        {
                            value: Array.isArray(U) ? U.join(",") : U,
                            name: m,
                            ref: L,
                            "aria-hidden": !0,
                            onChange: $t,
                            tabIndex: -1,
                            disabled: f,
                            className: ee.nativeInput,
                            autoFocus: i,
                            ownerState: Ie,
                        },
                        z
                    )
                ),
                E(kO, { as: h, className: ee.icon, ownerState: Ie }),
                E(
                    I1,
                    w(
                        {
                            id: `menu-${m || ""}`,
                            anchorEl: be,
                            open: zt,
                            onClose: Je,
                            anchorOrigin: {
                                vertical: "bottom",
                                horizontal: "center",
                            },
                            transformOrigin: {
                                vertical: "top",
                                horizontal: "center",
                            },
                        },
                        S,
                        {
                            MenuListProps: w(
                                {
                                    "aria-labelledby": p,
                                    role: "listbox",
                                    disableListWrap: !0,
                                },
                                S.MenuListProps
                            ),
                            PaperProps: w({}, S.PaperProps, {
                                style: w(
                                    { minWidth: oe },
                                    S.PaperProps != null
                                        ? S.PaperProps.style
                                        : null
                                ),
                            }),
                            children: ie,
                        }
                    )
                ),
            ],
        });
    }),
    TO = $O;
var Eg, Rg;
const IO = [
        "autoWidth",
        "children",
        "classes",
        "className",
        "defaultOpen",
        "displayEmpty",
        "IconComponent",
        "id",
        "input",
        "inputProps",
        "label",
        "labelId",
        "MenuProps",
        "multiple",
        "native",
        "onClose",
        "onOpen",
        "open",
        "renderValue",
        "SelectDisplayProps",
        "variant",
    ],
    OO = (e) => {
        const { classes: t } = e;
        return t;
    },
    Pp = {
        name: "MuiSelect",
        overridesResolver: (e, t) => t.root,
        shouldForwardProp: (e) => xn(e) && e !== "variant",
        slot: "Root",
    },
    MO = H(R1, Pp)(""),
    _O = H(N1, Pp)(""),
    NO = H(C1, Pp)(""),
    A1 = b.forwardRef(function (t, n) {
        const r = ce({ name: "MuiSelect", props: t }),
            {
                autoWidth: o = !1,
                children: i,
                classes: s = {},
                className: a,
                defaultOpen: l = !1,
                displayEmpty: u = !1,
                IconComponent: d = ZT,
                id: f,
                input: c,
                inputProps: h,
                label: g,
                labelId: p,
                MenuProps: S,
                multiple: y = !1,
                native: m = !1,
                onClose: v,
                onOpen: x,
                open: k,
                renderValue: R,
                SelectDisplayProps: C,
                variant: T = "outlined",
            } = r,
            I = Q(r, IO),
            P = m ? cO : TO,
            D = pi(),
            j =
                fi({ props: r, muiFormControl: D, states: ["variant"] })
                    .variant || T,
            N =
                c ||
                {
                    standard: Eg || (Eg = E(MO, {})),
                    outlined: E(_O, { label: g }),
                    filled: Rg || (Rg = E(NO, {})),
                }[j],
            z = w({}, r, { variant: j, classes: s }),
            U = OO(z),
            Z = st(n, N.ref);
        return E(b.Fragment, {
            children: b.cloneElement(
                N,
                w(
                    {
                        inputComponent: P,
                        inputProps: w(
                            {
                                children: i,
                                IconComponent: d,
                                variant: j,
                                type: void 0,
                                multiple: y,
                            },
                            m
                                ? { id: f }
                                : {
                                      autoWidth: o,
                                      defaultOpen: l,
                                      displayEmpty: u,
                                      labelId: p,
                                      MenuProps: S,
                                      onClose: v,
                                      onOpen: x,
                                      open: k,
                                      renderValue: R,
                                      SelectDisplayProps: w({ id: f }, C),
                                  },
                            h,
                            { classes: h ? Nt(U, h.classes) : U },
                            c ? c.props.inputProps : {}
                        ),
                    },
                    y && m && j === "outlined" ? { notched: !0 } : {},
                    { ref: Z, className: J(N.props.className, a) },
                    !c && { variant: j },
                    I
                )
            ),
        });
    });
A1.muiName = "Select";
const AO = A1,
    LO = ["component", "direction", "spacing", "divider", "children"];
function DO(e, t) {
    const n = b.Children.toArray(e).filter(Boolean);
    return n.reduce(
        (r, o, i) => (
            r.push(o),
            i < n.length - 1 &&
                r.push(b.cloneElement(t, { key: `separator-${i}` })),
            r
        ),
        []
    );
}
const zO = (e) =>
        ({
            row: "Left",
            "row-reverse": "Right",
            column: "Top",
            "column-reverse": "Bottom",
        }[e]),
    FO = ({ ownerState: e, theme: t }) => {
        let n = w(
            { display: "flex", flexDirection: "column" },
            bn(
                { theme: t },
                fc({ values: e.direction, breakpoints: t.breakpoints.values }),
                (r) => ({ flexDirection: r })
            )
        );
        if (e.spacing) {
            const r = hp(t),
                o = Object.keys(t.breakpoints.values).reduce(
                    (l, u) => (
                        ((typeof e.spacing == "object" &&
                            e.spacing[u] != null) ||
                            (typeof e.direction == "object" &&
                                e.direction[u] != null)) &&
                            (l[u] = !0),
                        l
                    ),
                    {}
                ),
                i = fc({ values: e.direction, base: o }),
                s = fc({ values: e.spacing, base: o });
            typeof i == "object" &&
                Object.keys(i).forEach((l, u, d) => {
                    if (!i[l]) {
                        const c = u > 0 ? i[d[u - 1]] : "column";
                        i[l] = c;
                    }
                }),
                (n = Nt(
                    n,
                    bn({ theme: t }, s, (l, u) => ({
                        "& > :not(style) + :not(style)": {
                            margin: 0,
                            [`margin${zO(u ? i[u] : e.direction)}`]: di(r, l),
                        },
                    }))
                ));
        }
        return (n = g2(t.breakpoints, n)), n;
    },
    BO = H("div", {
        name: "MuiStack",
        slot: "Root",
        overridesResolver: (e, t) => [t.root],
    })(FO),
    UO = b.forwardRef(function (t, n) {
        const r = ce({ props: t, name: "MuiStack" }),
            o = gp(r),
            {
                component: i = "div",
                direction: s = "column",
                spacing: a = 0,
                divider: l,
                children: u,
            } = o,
            d = Q(o, LO);
        return E(
            BO,
            w({ as: i, ownerState: { direction: s, spacing: a }, ref: n }, d, {
                children: l ? DO(u, l) : u,
            })
        );
    }),
    $p = UO;
function WO(e) {
    return fe("MuiToolbar", e);
}
ue("MuiToolbar", ["root", "gutters", "regular", "dense"]);
const jO = ["className", "component", "disableGutters", "variant"],
    VO = (e) => {
        const { classes: t, disableGutters: n, variant: r } = e;
        return pe({ root: ["root", !n && "gutters", r] }, WO, t);
    },
    HO = H("div", {
        name: "MuiToolbar",
        slot: "Root",
        overridesResolver: (e, t) => {
            const { ownerState: n } = e;
            return [t.root, !n.disableGutters && t.gutters, t[n.variant]];
        },
    })(
        ({ theme: e, ownerState: t }) =>
            w(
                { position: "relative", display: "flex", alignItems: "center" },
                !t.disableGutters && {
                    paddingLeft: e.spacing(2),
                    paddingRight: e.spacing(2),
                    [e.breakpoints.up("sm")]: {
                        paddingLeft: e.spacing(3),
                        paddingRight: e.spacing(3),
                    },
                },
                t.variant === "dense" && { minHeight: 48 }
            ),
        ({ theme: e, ownerState: t }) =>
            t.variant === "regular" && e.mixins.toolbar
    ),
    KO = b.forwardRef(function (t, n) {
        const r = ce({ props: t, name: "MuiToolbar" }),
            {
                className: o,
                component: i = "div",
                disableGutters: s = !1,
                variant: a = "regular",
            } = r,
            l = Q(r, jO),
            u = w({}, r, { component: i, disableGutters: s, variant: a }),
            d = VO(u);
        return E(
            HO,
            w({ as: i, className: J(d.root, o), ref: n, ownerState: u }, l)
        );
    }),
    GO = KO;
function qO(e) {
    return fe("MuiTextField", e);
}
ue("MuiTextField", ["root"]);
const YO = [
        "autoComplete",
        "autoFocus",
        "children",
        "className",
        "color",
        "defaultValue",
        "disabled",
        "error",
        "FormHelperTextProps",
        "fullWidth",
        "helperText",
        "id",
        "InputLabelProps",
        "inputProps",
        "InputProps",
        "inputRef",
        "label",
        "maxRows",
        "minRows",
        "multiline",
        "name",
        "onBlur",
        "onChange",
        "onFocus",
        "placeholder",
        "required",
        "rows",
        "select",
        "SelectProps",
        "type",
        "value",
        "variant",
    ],
    XO = { standard: R1, filled: C1, outlined: N1 },
    QO = (e) => {
        const { classes: t } = e;
        return pe({ root: ["root"] }, qO, t);
    },
    JO = H(k3, {
        name: "MuiTextField",
        slot: "Root",
        overridesResolver: (e, t) => t.root,
    })({}),
    ZO = b.forwardRef(function (t, n) {
        const r = ce({ props: t, name: "MuiTextField" }),
            {
                autoComplete: o,
                autoFocus: i = !1,
                children: s,
                className: a,
                color: l = "primary",
                defaultValue: u,
                disabled: d = !1,
                error: f = !1,
                FormHelperTextProps: c,
                fullWidth: h = !1,
                helperText: g,
                id: p,
                InputLabelProps: S,
                inputProps: y,
                InputProps: m,
                inputRef: v,
                label: x,
                maxRows: k,
                minRows: R,
                multiline: C = !1,
                name: T,
                onBlur: I,
                onChange: P,
                onFocus: D,
                placeholder: K,
                required: j = !1,
                rows: N,
                select: z = !1,
                SelectProps: U,
                type: Z,
                value: $,
                variant: _ = "outlined",
            } = r,
            L = Q(r, YO),
            V = w({}, r, {
                autoFocus: i,
                color: l,
                disabled: d,
                error: f,
                fullWidth: h,
                multiline: C,
                required: j,
                select: z,
                variant: _,
            }),
            ne = QO(V),
            _e = {};
        _ === "outlined" &&
            (S && typeof S.shrink < "u" && (_e.notched = S.shrink),
            (_e.label = x)),
            z &&
                ((!U || !U.native) && (_e.id = void 0),
                (_e["aria-describedby"] = void 0));
        const se = N0(p),
            ve = g && se ? `${se}-helper-text` : void 0,
            q = x && se ? `${se}-label` : void 0,
            he = XO[_],
            Te = E(
                he,
                w(
                    {
                        "aria-describedby": ve,
                        autoComplete: o,
                        autoFocus: i,
                        defaultValue: u,
                        fullWidth: h,
                        multiline: C,
                        name: T,
                        rows: N,
                        maxRows: k,
                        minRows: R,
                        type: Z,
                        value: $,
                        id: se,
                        inputRef: v,
                        onBlur: I,
                        onChange: P,
                        onFocus: D,
                        placeholder: K,
                        inputProps: y,
                    },
                    _e,
                    m
                )
            );
        return te(
            JO,
            w(
                {
                    className: J(ne.root, a),
                    disabled: d,
                    error: f,
                    fullWidth: h,
                    ref: n,
                    required: j,
                    color: l,
                    variant: _,
                    ownerState: V,
                },
                L,
                {
                    children: [
                        x != null &&
                            x !== "" &&
                            E(
                                J3,
                                w({ htmlFor: se, id: q }, S, { children: x })
                            ),
                        z
                            ? E(
                                  AO,
                                  w(
                                      {
                                          "aria-describedby": ve,
                                          id: se,
                                          labelId: q,
                                          value: $,
                                          input: Te,
                                      },
                                      U,
                                      { children: s }
                                  )
                              )
                            : Te,
                        g && E(O3, w({ id: ve }, c, { children: g })),
                    ],
                }
            )
        );
    }),
    e5 = ZO;
function bc() {
    const e = zs();
    return E(GR, {
        sx: {
            display: "flex",
            height: "100vh",
            backgroundColor: "secondary.main",
            justifyContent: "center",
            alignItems: "center",
        },
        children: te(ze, {
            sx: { p: 2, textAlign: "center" },
            children: [
                E(We, { variant: "h2", children: "Oops!" }),
                E(We, {
                    sx: { mb: 2 },
                    variant: "h2",
                    children: "This isn't an investigator.",
                }),
                E(ro, {
                    variant: "contained",
                    onClick: () => e("/"),
                    children: "Back to Home",
                }),
            ],
        }),
    });
}
const t5 = Lt(E("path", { d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" }), "Add"),
    n5 = Lt(
        E("path", {
            d: "M11 21h-1l1-7H7.5c-.58 0-.57-.32-.38-.66.19-.34.05-.08.07-.12C8.48 10.94 10.42 7.54 13 3h1l-1 7h3.5c.49 0 .56.33.47.51l-.07.15C12.96 17.55 11 21 11 21z",
        }),
        "Bolt"
    ),
    r5 = Lt(
        E("path", { d: "M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z" }),
        "ExpandMore"
    ),
    o5 = Lt(
        E("path", {
            d: "m12 21.35-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z",
        }),
        "Favorite"
    ),
    i5 = Lt(
        E("path", {
            d: "m17.73 12.02 3.98-3.98c.39-.39.39-1.02 0-1.41l-4.34-4.34a.9959.9959 0 0 0-1.41 0l-3.98 3.98L8 2.29C7.8 2.1 7.55 2 7.29 2c-.25 0-.51.1-.7.29L2.25 6.63c-.39.39-.39 1.02 0 1.41l3.98 3.98L2.25 16c-.39.39-.39 1.02 0 1.41l4.34 4.34c.39.39 1.02.39 1.41 0l3.98-3.98 3.98 3.98c.2.2.45.29.71.29.26 0 .51-.1.71-.29l4.34-4.34c.39-.39.39-1.02 0-1.41l-3.99-3.98zM12 9c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm-4.71 1.96L3.66 7.34l3.63-3.63 3.62 3.62-3.62 3.63zM10 13c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm2 2c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm2-4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2.66 9.34-3.63-3.62 3.63-3.63 3.62 3.62-3.62 3.63z",
        }),
        "Healing"
    ),
    s5 = Lt(
        E("path", { d: "M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" }),
        "Menu"
    ),
    L1 = Lt(
        [
            E(
                "path",
                {
                    d: "M13 8.57c-.79 0-1.43.64-1.43 1.43s.64 1.43 1.43 1.43 1.43-.64 1.43-1.43-.64-1.43-1.43-1.43z",
                },
                "0"
            ),
            E(
                "path",
                {
                    d: "M13 3C9.25 3 6.2 5.94 6.02 9.64L4.1 12.2c-.25.33-.01.8.4.8H6v3c0 1.1.9 2 2 2h1v3h7v-4.68c2.36-1.12 4-3.53 4-6.32 0-3.87-3.13-7-7-7zm3 7c0 .13-.01.26-.02.39l.83.66c.08.06.1.16.05.25l-.8 1.39c-.05.09-.16.12-.24.09l-.99-.4c-.21.16-.43.29-.67.39L14 13.83c-.01.1-.1.17-.2.17h-1.6c-.1 0-.18-.07-.2-.17l-.15-1.06c-.25-.1-.47-.23-.68-.39l-.99.4c-.09.03-.2 0-.25-.09l-.8-1.39c-.05-.08-.03-.19.05-.25l.84-.66c-.01-.13-.02-.26-.02-.39s.02-.27.04-.39l-.85-.66c-.08-.06-.1-.16-.05-.26l.8-1.38c.05-.09.15-.12.24-.09l1 .4c.2-.15.43-.29.67-.39L12 6.17c.02-.1.1-.17.2-.17h1.6c.1 0 .18.07.2.17l.15 1.06c.24.1.46.23.67.39l1-.4c.09-.03.2 0 .24.09l.8 1.38c.05.09.03.2-.05.26l-.85.66c.03.12.04.25.04.39z",
                },
                "1"
            ),
        ],
        "Psychology"
    ),
    a5 = Lt(E("path", { d: "M19 13H5v-2h14v2z" }), "Remove"),
    l5 = Lt(
        E("path", {
            d: "M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z",
        }),
        "Restore"
    ),
    u5 = Lt(
        E("path", {
            d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z",
        }),
        "Search"
    ),
    c5 = Lt(
        E("path", {
            d: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z",
        }),
        "Stars"
    ),
    d5 = Lt(
        E("path", {
            d: "M21 10.12h-6.78l2.74-2.82c-2.73-2.7-7.15-2.8-9.88-.1-2.73 2.71-2.73 7.08 0 9.79s7.15 2.71 9.88 0C18.32 15.65 19 14.08 19 12.1h2c0 1.98-.88 4.55-2.64 6.29-3.51 3.48-9.21 3.48-12.72 0-3.5-3.47-3.53-9.11-.02-12.58s9.14-3.47 12.65 0L21 3v7.12zM12.5 8v4.25l3.5 2.08-.72 1.21L11 13V8h1.5z",
        }),
        "Update"
    );
function f5(e) {
    return E(ze, {
        sx: {
            position: "relative",
            width: "calc(100vw - 100px)",
            height: "calc(100vw - 100px)",
            maxWidth: 350,
            maxHeight: 350,
            backgroundColor: "primary.main",
            padding: 2,
            border: "7px solid",
            borderColor: "primary.dark",
            borderRadius: "50%",
        },
        children: E(p5, { ...e }),
    });
}
function p5(e) {
    return te(ze, {
        sx: {
            position: "relative",
            backgroundColor: "primary.main",
            overflow: "hidden",
            width: 1,
            height: 1,
            borderRadius: "100%",
            "&:after, &:before, .marking": {
                content: '""',
                position: "absolute",
                width: "5px",
                height: "100%",
                backgroundColor: "primary.light",
                zIndex: 0,
                left: "49%",
            },
            "&:after": { transform: "rotate(90deg)" },
            ".marking": { backgroundColor: "#bdbdcb", width: "3px" },
            ".marking-one": { transform: "rotate(30deg)" },
            ".marking-two": { transform: "rotate(60deg)" },
            ".marking-three": { transform: "rotate(120deg)" },
            ".marking-four": { transform: "rotate(150deg)" },
        },
        children: [
            E("div", { className: "marking marking-one" }),
            E("div", { className: "marking marking-two" }),
            E("div", { className: "marking marking-three" }),
            E("div", { className: "marking marking-four" }),
            E(h5, { ...e }),
        ],
    });
}
function h5(e) {
    return te(ze, {
        sx: {
            position: "absolute",
            top: "10%",
            left: "10%",
            width: "80%",
            height: "80%",
            backgroundColor: "primary.main",
            borderRadius: "100%",
            zIndex: 1,
            "&:before": {
                content: '""',
                position: "absolute",
                top: "48%",
                left: "50%",
                width: "20px",
                height: "20px",
                borderRadius: "18px",
                marginLeft: "-9px",
                marginTop: "-6px",
                backgroundColor: "#4d4b63",
                zIndex: 11,
            },
        },
        children: [
            E(Pg, { ...e, variant: "hour" }),
            E(Pg, { ...e, variant: "minute" }),
        ],
    });
}
function Pg(e) {
    let t = {
        position: "absolute",
        transformOrigin: "100%",
        top: "49%",
        right: "50%",
        height: "6px",
        width: "45%",
        backgroundColor: "primary.dark",
        borderRadius: "6px",
        transform: "rotate(90deg)",
        zIndex: 10,
    };
    const n = (e.currentHour / 12) * 360 + 90;
    return (
        e.variant === "hour" &&
            (t = {
                ...t,
                width: "30%",
                zIndex: 3,
                transform: `rotate(${n}deg)`,
                backgroundColor: "primary.light",
            }),
        E(ze, { sx: t })
    );
}
const On = Object.create(null);
On.open = "0";
On.close = "1";
On.ping = "2";
On.pong = "3";
On.message = "4";
On.upgrade = "5";
On.noop = "6";
const Oa = Object.create(null);
Object.keys(On).forEach((e) => {
    Oa[On[e]] = e;
});
const m5 = { type: "error", data: "parser error" },
    g5 =
        typeof Blob == "function" ||
        (typeof Blob < "u" &&
            Object.prototype.toString.call(Blob) ===
                "[object BlobConstructor]"),
    y5 = typeof ArrayBuffer == "function",
    v5 = (e) =>
        typeof ArrayBuffer.isView == "function"
            ? ArrayBuffer.isView(e)
            : e && e.buffer instanceof ArrayBuffer,
    D1 = ({ type: e, data: t }, n, r) =>
        g5 && t instanceof Blob
            ? n
                ? r(t)
                : $g(t, r)
            : y5 && (t instanceof ArrayBuffer || v5(t))
            ? n
                ? r(t)
                : $g(new Blob([t]), r)
            : r(On[e] + (t || "")),
    $g = (e, t) => {
        const n = new FileReader();
        return (
            (n.onload = function () {
                const r = n.result.split(",")[1];
                t("b" + (r || ""));
            }),
            n.readAsDataURL(e)
        );
    },
    Tg = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
    Bi = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (let e = 0; e < Tg.length; e++) Bi[Tg.charCodeAt(e)] = e;
const b5 = (e) => {
        let t = e.length * 0.75,
            n = e.length,
            r,
            o = 0,
            i,
            s,
            a,
            l;
        e[e.length - 1] === "=" && (t--, e[e.length - 2] === "=" && t--);
        const u = new ArrayBuffer(t),
            d = new Uint8Array(u);
        for (r = 0; r < n; r += 4)
            (i = Bi[e.charCodeAt(r)]),
                (s = Bi[e.charCodeAt(r + 1)]),
                (a = Bi[e.charCodeAt(r + 2)]),
                (l = Bi[e.charCodeAt(r + 3)]),
                (d[o++] = (i << 2) | (s >> 4)),
                (d[o++] = ((s & 15) << 4) | (a >> 2)),
                (d[o++] = ((a & 3) << 6) | (l & 63));
        return u;
    },
    x5 = typeof ArrayBuffer == "function",
    z1 = (e, t) => {
        if (typeof e != "string") return { type: "message", data: F1(e, t) };
        const n = e.charAt(0);
        return n === "b"
            ? { type: "message", data: w5(e.substring(1), t) }
            : Oa[n]
            ? e.length > 1
                ? { type: Oa[n], data: e.substring(1) }
                : { type: Oa[n] }
            : m5;
    },
    w5 = (e, t) => {
        if (x5) {
            const n = b5(e);
            return F1(n, t);
        } else return { base64: !0, data: e };
    },
    F1 = (e, t) => {
        switch (t) {
            case "blob":
                return e instanceof ArrayBuffer ? new Blob([e]) : e;
            case "arraybuffer":
            default:
                return e;
        }
    },
    B1 = String.fromCharCode(30),
    S5 = (e, t) => {
        const n = e.length,
            r = new Array(n);
        let o = 0;
        e.forEach((i, s) => {
            D1(i, !1, (a) => {
                (r[s] = a), ++o === n && t(r.join(B1));
            });
        });
    },
    C5 = (e, t) => {
        const n = e.split(B1),
            r = [];
        for (let o = 0; o < n.length; o++) {
            const i = z1(n[o], t);
            if ((r.push(i), i.type === "error")) break;
        }
        return r;
    },
    U1 = 4;
function rt(e) {
    if (e) return k5(e);
}
function k5(e) {
    for (var t in rt.prototype) e[t] = rt.prototype[t];
    return e;
}
rt.prototype.on = rt.prototype.addEventListener = function (e, t) {
    return (
        (this._callbacks = this._callbacks || {}),
        (this._callbacks["$" + e] = this._callbacks["$" + e] || []).push(t),
        this
    );
};
rt.prototype.once = function (e, t) {
    function n() {
        this.off(e, n), t.apply(this, arguments);
    }
    return (n.fn = t), this.on(e, n), this;
};
rt.prototype.off =
    rt.prototype.removeListener =
    rt.prototype.removeAllListeners =
    rt.prototype.removeEventListener =
        function (e, t) {
            if (
                ((this._callbacks = this._callbacks || {}),
                arguments.length == 0)
            )
                return (this._callbacks = {}), this;
            var n = this._callbacks["$" + e];
            if (!n) return this;
            if (arguments.length == 1)
                return delete this._callbacks["$" + e], this;
            for (var r, o = 0; o < n.length; o++)
                if (((r = n[o]), r === t || r.fn === t)) {
                    n.splice(o, 1);
                    break;
                }
            return n.length === 0 && delete this._callbacks["$" + e], this;
        };
rt.prototype.emit = function (e) {
    this._callbacks = this._callbacks || {};
    for (
        var t = new Array(arguments.length - 1),
            n = this._callbacks["$" + e],
            r = 1;
        r < arguments.length;
        r++
    )
        t[r - 1] = arguments[r];
    if (n) {
        n = n.slice(0);
        for (var r = 0, o = n.length; r < o; ++r) n[r].apply(this, t);
    }
    return this;
};
rt.prototype.emitReserved = rt.prototype.emit;
rt.prototype.listeners = function (e) {
    return (
        (this._callbacks = this._callbacks || {}),
        this._callbacks["$" + e] || []
    );
};
rt.prototype.hasListeners = function (e) {
    return !!this.listeners(e).length;
};
const ar = (() =>
    typeof self < "u"
        ? self
        : typeof window < "u"
        ? window
        : Function("return this")())();
function W1(e, ...t) {
    return t.reduce((n, r) => (e.hasOwnProperty(r) && (n[r] = e[r]), n), {});
}
const E5 = setTimeout,
    R5 = clearTimeout;
function Ru(e, t) {
    t.useNativeTimers
        ? ((e.setTimeoutFn = E5.bind(ar)), (e.clearTimeoutFn = R5.bind(ar)))
        : ((e.setTimeoutFn = setTimeout.bind(ar)),
          (e.clearTimeoutFn = clearTimeout.bind(ar)));
}
const P5 = 1.33;
function $5(e) {
    return typeof e == "string"
        ? T5(e)
        : Math.ceil((e.byteLength || e.size) * P5);
}
function T5(e) {
    let t = 0,
        n = 0;
    for (let r = 0, o = e.length; r < o; r++)
        (t = e.charCodeAt(r)),
            t < 128
                ? (n += 1)
                : t < 2048
                ? (n += 2)
                : t < 55296 || t >= 57344
                ? (n += 3)
                : (r++, (n += 4));
    return n;
}
class I5 extends Error {
    constructor(t, n, r) {
        super(t),
            (this.description = n),
            (this.context = r),
            (this.type = "TransportError");
    }
}
class j1 extends rt {
    constructor(t) {
        super(),
            (this.writable = !1),
            Ru(this, t),
            (this.opts = t),
            (this.query = t.query),
            (this.readyState = ""),
            (this.socket = t.socket);
    }
    onError(t, n, r) {
        return super.emitReserved("error", new I5(t, n, r)), this;
    }
    open() {
        return (
            (this.readyState === "closed" || this.readyState === "") &&
                ((this.readyState = "opening"), this.doOpen()),
            this
        );
    }
    close() {
        return (
            (this.readyState === "opening" || this.readyState === "open") &&
                (this.doClose(), this.onClose()),
            this
        );
    }
    send(t) {
        this.readyState === "open" && this.write(t);
    }
    onOpen() {
        (this.readyState = "open"),
            (this.writable = !0),
            super.emitReserved("open");
    }
    onData(t) {
        const n = z1(t, this.socket.binaryType);
        this.onPacket(n);
    }
    onPacket(t) {
        super.emitReserved("packet", t);
    }
    onClose(t) {
        (this.readyState = "closed"), super.emitReserved("close", t);
    }
}
const V1 =
        "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(
            ""
        ),
    Ld = 64,
    O5 = {};
let Ig = 0,
    da = 0,
    Og;
function Mg(e) {
    let t = "";
    do (t = V1[e % Ld] + t), (e = Math.floor(e / Ld));
    while (e > 0);
    return t;
}
function H1() {
    const e = Mg(+new Date());
    return e !== Og ? ((Ig = 0), (Og = e)) : e + "." + Mg(Ig++);
}
for (; da < Ld; da++) O5[V1[da]] = da;
function K1(e) {
    let t = "";
    for (let n in e)
        e.hasOwnProperty(n) &&
            (t.length && (t += "&"),
            (t += encodeURIComponent(n) + "=" + encodeURIComponent(e[n])));
    return t;
}
function M5(e) {
    let t = {},
        n = e.split("&");
    for (let r = 0, o = n.length; r < o; r++) {
        let i = n[r].split("=");
        t[decodeURIComponent(i[0])] = decodeURIComponent(i[1]);
    }
    return t;
}
let G1 = !1;
try {
    G1 =
        typeof XMLHttpRequest < "u" &&
        "withCredentials" in new XMLHttpRequest();
} catch {}
const _5 = G1;
function q1(e) {
    const t = e.xdomain;
    try {
        if (typeof XMLHttpRequest < "u" && (!t || _5))
            return new XMLHttpRequest();
    } catch {}
    if (!t)
        try {
            return new ar[["Active"].concat("Object").join("X")](
                "Microsoft.XMLHTTP"
            );
        } catch {}
}
function N5() {}
const A5 = (function () {
    return new q1({ xdomain: !1 }).responseType != null;
})();
class L5 extends j1 {
    constructor(t) {
        if ((super(t), (this.polling = !1), typeof location < "u")) {
            const r = location.protocol === "https:";
            let o = location.port;
            o || (o = r ? "443" : "80"),
                (this.xd =
                    (typeof location < "u" &&
                        t.hostname !== location.hostname) ||
                    o !== t.port),
                (this.xs = t.secure !== r);
        }
        const n = t && t.forceBase64;
        this.supportsBinary = A5 && !n;
    }
    get name() {
        return "polling";
    }
    doOpen() {
        this.poll();
    }
    pause(t) {
        this.readyState = "pausing";
        const n = () => {
            (this.readyState = "paused"), t();
        };
        if (this.polling || !this.writable) {
            let r = 0;
            this.polling &&
                (r++,
                this.once("pollComplete", function () {
                    --r || n();
                })),
                this.writable ||
                    (r++,
                    this.once("drain", function () {
                        --r || n();
                    }));
        } else n();
    }
    poll() {
        (this.polling = !0), this.doPoll(), this.emitReserved("poll");
    }
    onData(t) {
        const n = (r) => {
            if (
                (this.readyState === "opening" &&
                    r.type === "open" &&
                    this.onOpen(),
                r.type === "close")
            )
                return (
                    this.onClose({
                        description: "transport closed by the server",
                    }),
                    !1
                );
            this.onPacket(r);
        };
        C5(t, this.socket.binaryType).forEach(n),
            this.readyState !== "closed" &&
                ((this.polling = !1),
                this.emitReserved("pollComplete"),
                this.readyState === "open" && this.poll());
    }
    doClose() {
        const t = () => {
            this.write([{ type: "close" }]);
        };
        this.readyState === "open" ? t() : this.once("open", t);
    }
    write(t) {
        (this.writable = !1),
            S5(t, (n) => {
                this.doWrite(n, () => {
                    (this.writable = !0), this.emitReserved("drain");
                });
            });
    }
    uri() {
        let t = this.query || {};
        const n = this.opts.secure ? "https" : "http";
        let r = "";
        this.opts.timestampRequests !== !1 &&
            (t[this.opts.timestampParam] = H1()),
            !this.supportsBinary && !t.sid && (t.b64 = 1),
            this.opts.port &&
                ((n === "https" && Number(this.opts.port) !== 443) ||
                    (n === "http" && Number(this.opts.port) !== 80)) &&
                (r = ":" + this.opts.port);
        const o = K1(t),
            i = this.opts.hostname.indexOf(":") !== -1;
        return (
            n +
            "://" +
            (i ? "[" + this.opts.hostname + "]" : this.opts.hostname) +
            r +
            this.opts.path +
            (o.length ? "?" + o : "")
        );
    }
    request(t = {}) {
        return (
            Object.assign(t, { xd: this.xd, xs: this.xs }, this.opts),
            new Bn(this.uri(), t)
        );
    }
    doWrite(t, n) {
        const r = this.request({ method: "POST", data: t });
        r.on("success", n),
            r.on("error", (o, i) => {
                this.onError("xhr post error", o, i);
            });
    }
    doPoll() {
        const t = this.request();
        t.on("data", this.onData.bind(this)),
            t.on("error", (n, r) => {
                this.onError("xhr poll error", n, r);
            }),
            (this.pollXhr = t);
    }
}
let Bn = class extends rt {
    constructor(t, n) {
        super(),
            Ru(this, n),
            (this.opts = n),
            (this.method = n.method || "GET"),
            (this.uri = t),
            (this.async = n.async !== !1),
            (this.data = n.data !== void 0 ? n.data : null),
            this.create();
    }
    create() {
        const t = W1(
            this.opts,
            "agent",
            "pfx",
            "key",
            "passphrase",
            "cert",
            "ca",
            "ciphers",
            "rejectUnauthorized",
            "autoUnref"
        );
        (t.xdomain = !!this.opts.xd), (t.xscheme = !!this.opts.xs);
        const n = (this.xhr = new q1(t));
        try {
            n.open(this.method, this.uri, this.async);
            try {
                if (this.opts.extraHeaders) {
                    n.setDisableHeaderCheck && n.setDisableHeaderCheck(!0);
                    for (let r in this.opts.extraHeaders)
                        this.opts.extraHeaders.hasOwnProperty(r) &&
                            n.setRequestHeader(r, this.opts.extraHeaders[r]);
                }
            } catch {}
            if (this.method === "POST")
                try {
                    n.setRequestHeader(
                        "Content-type",
                        "text/plain;charset=UTF-8"
                    );
                } catch {}
            try {
                n.setRequestHeader("Accept", "*/*");
            } catch {}
            "withCredentials" in n &&
                (n.withCredentials = this.opts.withCredentials),
                this.opts.requestTimeout &&
                    (n.timeout = this.opts.requestTimeout),
                (n.onreadystatechange = () => {
                    n.readyState === 4 &&
                        (n.status === 200 || n.status === 1223
                            ? this.onLoad()
                            : this.setTimeoutFn(() => {
                                  this.onError(
                                      typeof n.status == "number" ? n.status : 0
                                  );
                              }, 0));
                }),
                n.send(this.data);
        } catch (r) {
            this.setTimeoutFn(() => {
                this.onError(r);
            }, 0);
            return;
        }
        typeof document < "u" &&
            ((this.index = Bn.requestsCount++),
            (Bn.requests[this.index] = this));
    }
    onError(t) {
        this.emitReserved("error", t, this.xhr), this.cleanup(!0);
    }
    cleanup(t) {
        if (!(typeof this.xhr > "u" || this.xhr === null)) {
            if (((this.xhr.onreadystatechange = N5), t))
                try {
                    this.xhr.abort();
                } catch {}
            typeof document < "u" && delete Bn.requests[this.index],
                (this.xhr = null);
        }
    }
    onLoad() {
        const t = this.xhr.responseText;
        t !== null &&
            (this.emitReserved("data", t),
            this.emitReserved("success"),
            this.cleanup());
    }
    abort() {
        this.cleanup();
    }
};
Bn.requestsCount = 0;
Bn.requests = {};
if (typeof document < "u") {
    if (typeof attachEvent == "function") attachEvent("onunload", _g);
    else if (typeof addEventListener == "function") {
        const e = "onpagehide" in ar ? "pagehide" : "unload";
        addEventListener(e, _g, !1);
    }
}
function _g() {
    for (let e in Bn.requests)
        Bn.requests.hasOwnProperty(e) && Bn.requests[e].abort();
}
const Y1 = (() =>
        typeof Promise == "function" && typeof Promise.resolve == "function"
            ? (t) => Promise.resolve().then(t)
            : (t, n) => n(t, 0))(),
    fa = ar.WebSocket || ar.MozWebSocket,
    Ng = !0,
    D5 = "arraybuffer",
    Ag =
        typeof navigator < "u" &&
        typeof navigator.product == "string" &&
        navigator.product.toLowerCase() === "reactnative";
class z5 extends j1 {
    constructor(t) {
        super(t), (this.supportsBinary = !t.forceBase64);
    }
    get name() {
        return "websocket";
    }
    doOpen() {
        if (!this.check()) return;
        const t = this.uri(),
            n = this.opts.protocols,
            r = Ag
                ? {}
                : W1(
                      this.opts,
                      "agent",
                      "perMessageDeflate",
                      "pfx",
                      "key",
                      "passphrase",
                      "cert",
                      "ca",
                      "ciphers",
                      "rejectUnauthorized",
                      "localAddress",
                      "protocolVersion",
                      "origin",
                      "maxPayload",
                      "family",
                      "checkServerIdentity"
                  );
        this.opts.extraHeaders && (r.headers = this.opts.extraHeaders);
        try {
            this.ws =
                Ng && !Ag ? (n ? new fa(t, n) : new fa(t)) : new fa(t, n, r);
        } catch (o) {
            return this.emitReserved("error", o);
        }
        (this.ws.binaryType = this.socket.binaryType || D5),
            this.addEventListeners();
    }
    addEventListeners() {
        (this.ws.onopen = () => {
            this.opts.autoUnref && this.ws._socket.unref(), this.onOpen();
        }),
            (this.ws.onclose = (t) =>
                this.onClose({
                    description: "websocket connection closed",
                    context: t,
                })),
            (this.ws.onmessage = (t) => this.onData(t.data)),
            (this.ws.onerror = (t) => this.onError("websocket error", t));
    }
    write(t) {
        this.writable = !1;
        for (let n = 0; n < t.length; n++) {
            const r = t[n],
                o = n === t.length - 1;
            D1(r, this.supportsBinary, (i) => {
                const s = {};
                try {
                    Ng && this.ws.send(i);
                } catch {}
                o &&
                    Y1(() => {
                        (this.writable = !0), this.emitReserved("drain");
                    }, this.setTimeoutFn);
            });
        }
    }
    doClose() {
        typeof this.ws < "u" && (this.ws.close(), (this.ws = null));
    }
    uri() {
        let t = this.query || {};
        const n = this.opts.secure ? "wss" : "ws";
        let r = "";
        this.opts.port &&
            ((n === "wss" && Number(this.opts.port) !== 443) ||
                (n === "ws" && Number(this.opts.port) !== 80)) &&
            (r = ":" + this.opts.port),
            this.opts.timestampRequests && (t[this.opts.timestampParam] = H1()),
            this.supportsBinary || (t.b64 = 1);
        const o = K1(t),
            i = this.opts.hostname.indexOf(":") !== -1;
        return (
            n +
            "://" +
            (i ? "[" + this.opts.hostname + "]" : this.opts.hostname) +
            r +
            this.opts.path +
            (o.length ? "?" + o : "")
        );
    }
    check() {
        return !!fa;
    }
}
const F5 = { websocket: z5, polling: L5 },
    B5 =
        /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
    U5 = [
        "source",
        "protocol",
        "authority",
        "userInfo",
        "user",
        "password",
        "host",
        "port",
        "relative",
        "path",
        "directory",
        "file",
        "query",
        "anchor",
    ];
function Dd(e) {
    const t = e,
        n = e.indexOf("["),
        r = e.indexOf("]");
    n != -1 &&
        r != -1 &&
        (e =
            e.substring(0, n) +
            e.substring(n, r).replace(/:/g, ";") +
            e.substring(r, e.length));
    let o = B5.exec(e || ""),
        i = {},
        s = 14;
    for (; s--; ) i[U5[s]] = o[s] || "";
    return (
        n != -1 &&
            r != -1 &&
            ((i.source = t),
            (i.host = i.host
                .substring(1, i.host.length - 1)
                .replace(/;/g, ":")),
            (i.authority = i.authority
                .replace("[", "")
                .replace("]", "")
                .replace(/;/g, ":")),
            (i.ipv6uri = !0)),
        (i.pathNames = W5(i, i.path)),
        (i.queryKey = j5(i, i.query)),
        i
    );
}
function W5(e, t) {
    const n = /\/{2,9}/g,
        r = t.replace(n, "/").split("/");
    return (
        (t.slice(0, 1) == "/" || t.length === 0) && r.splice(0, 1),
        t.slice(-1) == "/" && r.splice(r.length - 1, 1),
        r
    );
}
function j5(e, t) {
    const n = {};
    return (
        t.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function (r, o, i) {
            o && (n[o] = i);
        }),
        n
    );
}
let Br = class extends rt {
    constructor(t, n = {}) {
        super(),
            t && typeof t == "object" && ((n = t), (t = null)),
            t
                ? ((t = Dd(t)),
                  (n.hostname = t.host),
                  (n.secure = t.protocol === "https" || t.protocol === "wss"),
                  (n.port = t.port),
                  t.query && (n.query = t.query))
                : n.host && (n.hostname = Dd(n.host).host),
            Ru(this, n),
            (this.secure =
                n.secure != null
                    ? n.secure
                    : typeof location < "u" && location.protocol === "https:"),
            n.hostname && !n.port && (n.port = this.secure ? "443" : "80"),
            (this.hostname =
                n.hostname ||
                (typeof location < "u" ? location.hostname : "localhost")),
            (this.port =
                n.port ||
                (typeof location < "u" && location.port
                    ? location.port
                    : this.secure
                    ? "443"
                    : "80")),
            (this.transports = n.transports || ["polling", "websocket"]),
            (this.readyState = ""),
            (this.writeBuffer = []),
            (this.prevBufferLen = 0),
            (this.opts = Object.assign(
                {
                    path: "/engine.io",
                    agent: !1,
                    withCredentials: !1,
                    upgrade: !0,
                    timestampParam: "t",
                    rememberUpgrade: !1,
                    rejectUnauthorized: !0,
                    perMessageDeflate: { threshold: 1024 },
                    transportOptions: {},
                    closeOnBeforeunload: !0,
                },
                n
            )),
            (this.opts.path = this.opts.path.replace(/\/$/, "") + "/"),
            typeof this.opts.query == "string" &&
                (this.opts.query = M5(this.opts.query)),
            (this.id = null),
            (this.upgrades = null),
            (this.pingInterval = null),
            (this.pingTimeout = null),
            (this.pingTimeoutTimer = null),
            typeof addEventListener == "function" &&
                (this.opts.closeOnBeforeunload &&
                    ((this.beforeunloadEventListener = () => {
                        this.transport &&
                            (this.transport.removeAllListeners(),
                            this.transport.close());
                    }),
                    addEventListener(
                        "beforeunload",
                        this.beforeunloadEventListener,
                        !1
                    )),
                this.hostname !== "localhost" &&
                    ((this.offlineEventListener = () => {
                        this.onClose("transport close", {
                            description: "network connection lost",
                        });
                    }),
                    addEventListener(
                        "offline",
                        this.offlineEventListener,
                        !1
                    ))),
            this.open();
    }
    createTransport(t) {
        const n = Object.assign({}, this.opts.query);
        (n.EIO = U1), (n.transport = t), this.id && (n.sid = this.id);
        const r = Object.assign({}, this.opts.transportOptions[t], this.opts, {
            query: n,
            socket: this,
            hostname: this.hostname,
            secure: this.secure,
            port: this.port,
        });
        return new F5[t](r);
    }
    open() {
        let t;
        if (
            this.opts.rememberUpgrade &&
            Br.priorWebsocketSuccess &&
            this.transports.indexOf("websocket") !== -1
        )
            t = "websocket";
        else if (this.transports.length === 0) {
            this.setTimeoutFn(() => {
                this.emitReserved("error", "No transports available");
            }, 0);
            return;
        } else t = this.transports[0];
        this.readyState = "opening";
        try {
            t = this.createTransport(t);
        } catch {
            this.transports.shift(), this.open();
            return;
        }
        t.open(), this.setTransport(t);
    }
    setTransport(t) {
        this.transport && this.transport.removeAllListeners(),
            (this.transport = t),
            t
                .on("drain", this.onDrain.bind(this))
                .on("packet", this.onPacket.bind(this))
                .on("error", this.onError.bind(this))
                .on("close", (n) => this.onClose("transport close", n));
    }
    probe(t) {
        let n = this.createTransport(t),
            r = !1;
        Br.priorWebsocketSuccess = !1;
        const o = () => {
            r ||
                (n.send([{ type: "ping", data: "probe" }]),
                n.once("packet", (f) => {
                    if (!r)
                        if (f.type === "pong" && f.data === "probe") {
                            if (
                                ((this.upgrading = !0),
                                this.emitReserved("upgrading", n),
                                !n)
                            )
                                return;
                            (Br.priorWebsocketSuccess = n.name === "websocket"),
                                this.transport.pause(() => {
                                    r ||
                                        (this.readyState !== "closed" &&
                                            (d(),
                                            this.setTransport(n),
                                            n.send([{ type: "upgrade" }]),
                                            this.emitReserved("upgrade", n),
                                            (n = null),
                                            (this.upgrading = !1),
                                            this.flush()));
                                });
                        } else {
                            const c = new Error("probe error");
                            (c.transport = n.name),
                                this.emitReserved("upgradeError", c);
                        }
                }));
        };
        function i() {
            r || ((r = !0), d(), n.close(), (n = null));
        }
        const s = (f) => {
            const c = new Error("probe error: " + f);
            (c.transport = n.name), i(), this.emitReserved("upgradeError", c);
        };
        function a() {
            s("transport closed");
        }
        function l() {
            s("socket closed");
        }
        function u(f) {
            n && f.name !== n.name && i();
        }
        const d = () => {
            n.removeListener("open", o),
                n.removeListener("error", s),
                n.removeListener("close", a),
                this.off("close", l),
                this.off("upgrading", u);
        };
        n.once("open", o),
            n.once("error", s),
            n.once("close", a),
            this.once("close", l),
            this.once("upgrading", u),
            n.open();
    }
    onOpen() {
        if (
            ((this.readyState = "open"),
            (Br.priorWebsocketSuccess = this.transport.name === "websocket"),
            this.emitReserved("open"),
            this.flush(),
            this.readyState === "open" &&
                this.opts.upgrade &&
                this.transport.pause)
        ) {
            let t = 0;
            const n = this.upgrades.length;
            for (; t < n; t++) this.probe(this.upgrades[t]);
        }
    }
    onPacket(t) {
        if (
            this.readyState === "opening" ||
            this.readyState === "open" ||
            this.readyState === "closing"
        )
            switch (
                (this.emitReserved("packet", t),
                this.emitReserved("heartbeat"),
                t.type)
            ) {
                case "open":
                    this.onHandshake(JSON.parse(t.data));
                    break;
                case "ping":
                    this.resetPingTimeout(),
                        this.sendPacket("pong"),
                        this.emitReserved("ping"),
                        this.emitReserved("pong");
                    break;
                case "error":
                    const n = new Error("server error");
                    (n.code = t.data), this.onError(n);
                    break;
                case "message":
                    this.emitReserved("data", t.data),
                        this.emitReserved("message", t.data);
                    break;
            }
    }
    onHandshake(t) {
        this.emitReserved("handshake", t),
            (this.id = t.sid),
            (this.transport.query.sid = t.sid),
            (this.upgrades = this.filterUpgrades(t.upgrades)),
            (this.pingInterval = t.pingInterval),
            (this.pingTimeout = t.pingTimeout),
            (this.maxPayload = t.maxPayload),
            this.onOpen(),
            this.readyState !== "closed" && this.resetPingTimeout();
    }
    resetPingTimeout() {
        this.clearTimeoutFn(this.pingTimeoutTimer),
            (this.pingTimeoutTimer = this.setTimeoutFn(() => {
                this.onClose("ping timeout");
            }, this.pingInterval + this.pingTimeout)),
            this.opts.autoUnref && this.pingTimeoutTimer.unref();
    }
    onDrain() {
        this.writeBuffer.splice(0, this.prevBufferLen),
            (this.prevBufferLen = 0),
            this.writeBuffer.length === 0
                ? this.emitReserved("drain")
                : this.flush();
    }
    flush() {
        if (
            this.readyState !== "closed" &&
            this.transport.writable &&
            !this.upgrading &&
            this.writeBuffer.length
        ) {
            const t = this.getWritablePackets();
            this.transport.send(t),
                (this.prevBufferLen = t.length),
                this.emitReserved("flush");
        }
    }
    getWritablePackets() {
        if (
            !(
                this.maxPayload &&
                this.transport.name === "polling" &&
                this.writeBuffer.length > 1
            )
        )
            return this.writeBuffer;
        let n = 1;
        for (let r = 0; r < this.writeBuffer.length; r++) {
            const o = this.writeBuffer[r].data;
            if ((o && (n += $5(o)), r > 0 && n > this.maxPayload))
                return this.writeBuffer.slice(0, r);
            n += 2;
        }
        return this.writeBuffer;
    }
    write(t, n, r) {
        return this.sendPacket("message", t, n, r), this;
    }
    send(t, n, r) {
        return this.sendPacket("message", t, n, r), this;
    }
    sendPacket(t, n, r, o) {
        if (
            (typeof n == "function" && ((o = n), (n = void 0)),
            typeof r == "function" && ((o = r), (r = null)),
            this.readyState === "closing" || this.readyState === "closed")
        )
            return;
        (r = r || {}), (r.compress = r.compress !== !1);
        const i = { type: t, data: n, options: r };
        this.emitReserved("packetCreate", i),
            this.writeBuffer.push(i),
            o && this.once("flush", o),
            this.flush();
    }
    close() {
        const t = () => {
                this.onClose("forced close"), this.transport.close();
            },
            n = () => {
                this.off("upgrade", n), this.off("upgradeError", n), t();
            },
            r = () => {
                this.once("upgrade", n), this.once("upgradeError", n);
            };
        return (
            (this.readyState === "opening" || this.readyState === "open") &&
                ((this.readyState = "closing"),
                this.writeBuffer.length
                    ? this.once("drain", () => {
                          this.upgrading ? r() : t();
                      })
                    : this.upgrading
                    ? r()
                    : t()),
            this
        );
    }
    onError(t) {
        (Br.priorWebsocketSuccess = !1),
            this.emitReserved("error", t),
            this.onClose("transport error", t);
    }
    onClose(t, n) {
        (this.readyState === "opening" ||
            this.readyState === "open" ||
            this.readyState === "closing") &&
            (this.clearTimeoutFn(this.pingTimeoutTimer),
            this.transport.removeAllListeners("close"),
            this.transport.close(),
            this.transport.removeAllListeners(),
            typeof removeEventListener == "function" &&
                (removeEventListener(
                    "beforeunload",
                    this.beforeunloadEventListener,
                    !1
                ),
                removeEventListener("offline", this.offlineEventListener, !1)),
            (this.readyState = "closed"),
            (this.id = null),
            this.emitReserved("close", t, n),
            (this.writeBuffer = []),
            (this.prevBufferLen = 0));
    }
    filterUpgrades(t) {
        const n = [];
        let r = 0;
        const o = t.length;
        for (; r < o; r++) ~this.transports.indexOf(t[r]) && n.push(t[r]);
        return n;
    }
};
Br.protocol = U1;
function V5(e, t = "", n) {
    let r = e;
    (n = n || (typeof location < "u" && location)),
        e == null && (e = n.protocol + "//" + n.host),
        typeof e == "string" &&
            (e.charAt(0) === "/" &&
                (e.charAt(1) === "/" ? (e = n.protocol + e) : (e = n.host + e)),
            /^(https?|wss?):\/\//.test(e) ||
                (typeof n < "u"
                    ? (e = n.protocol + "//" + e)
                    : (e = "https://" + e)),
            (r = Dd(e))),
        r.port ||
            (/^(http|ws)$/.test(r.protocol)
                ? (r.port = "80")
                : /^(http|ws)s$/.test(r.protocol) && (r.port = "443")),
        (r.path = r.path || "/");
    const i = r.host.indexOf(":") !== -1 ? "[" + r.host + "]" : r.host;
    return (
        (r.id = r.protocol + "://" + i + ":" + r.port + t),
        (r.href =
            r.protocol +
            "://" +
            i +
            (n && n.port === r.port ? "" : ":" + r.port)),
        r
    );
}
const H5 = typeof ArrayBuffer == "function",
    K5 = (e) =>
        typeof ArrayBuffer.isView == "function"
            ? ArrayBuffer.isView(e)
            : e.buffer instanceof ArrayBuffer,
    X1 = Object.prototype.toString,
    G5 =
        typeof Blob == "function" ||
        (typeof Blob < "u" && X1.call(Blob) === "[object BlobConstructor]"),
    q5 =
        typeof File == "function" ||
        (typeof File < "u" && X1.call(File) === "[object FileConstructor]");
function Tp(e) {
    return (
        (H5 && (e instanceof ArrayBuffer || K5(e))) ||
        (G5 && e instanceof Blob) ||
        (q5 && e instanceof File)
    );
}
function Ma(e, t) {
    if (!e || typeof e != "object") return !1;
    if (Array.isArray(e)) {
        for (let n = 0, r = e.length; n < r; n++) if (Ma(e[n])) return !0;
        return !1;
    }
    if (Tp(e)) return !0;
    if (e.toJSON && typeof e.toJSON == "function" && arguments.length === 1)
        return Ma(e.toJSON(), !0);
    for (const n in e)
        if (Object.prototype.hasOwnProperty.call(e, n) && Ma(e[n])) return !0;
    return !1;
}
function Y5(e) {
    const t = [],
        n = e.data,
        r = e;
    return (
        (r.data = zd(n, t)),
        (r.attachments = t.length),
        { packet: r, buffers: t }
    );
}
function zd(e, t) {
    if (!e) return e;
    if (Tp(e)) {
        const n = { _placeholder: !0, num: t.length };
        return t.push(e), n;
    } else if (Array.isArray(e)) {
        const n = new Array(e.length);
        for (let r = 0; r < e.length; r++) n[r] = zd(e[r], t);
        return n;
    } else if (typeof e == "object" && !(e instanceof Date)) {
        const n = {};
        for (const r in e)
            Object.prototype.hasOwnProperty.call(e, r) && (n[r] = zd(e[r], t));
        return n;
    }
    return e;
}
function X5(e, t) {
    return (e.data = Fd(e.data, t)), delete e.attachments, e;
}
function Fd(e, t) {
    if (!e) return e;
    if (e && e._placeholder === !0) {
        if (typeof e.num == "number" && e.num >= 0 && e.num < t.length)
            return t[e.num];
        throw new Error("illegal attachments");
    } else if (Array.isArray(e))
        for (let n = 0; n < e.length; n++) e[n] = Fd(e[n], t);
    else if (typeof e == "object")
        for (const n in e)
            Object.prototype.hasOwnProperty.call(e, n) && (e[n] = Fd(e[n], t));
    return e;
}
const Q5 = 5;
var ge;
(function (e) {
    (e[(e.CONNECT = 0)] = "CONNECT"),
        (e[(e.DISCONNECT = 1)] = "DISCONNECT"),
        (e[(e.EVENT = 2)] = "EVENT"),
        (e[(e.ACK = 3)] = "ACK"),
        (e[(e.CONNECT_ERROR = 4)] = "CONNECT_ERROR"),
        (e[(e.BINARY_EVENT = 5)] = "BINARY_EVENT"),
        (e[(e.BINARY_ACK = 6)] = "BINARY_ACK");
})(ge || (ge = {}));
class J5 {
    constructor(t) {
        this.replacer = t;
    }
    encode(t) {
        return (t.type === ge.EVENT || t.type === ge.ACK) && Ma(t)
            ? this.encodeAsBinary({
                  type: t.type === ge.EVENT ? ge.BINARY_EVENT : ge.BINARY_ACK,
                  nsp: t.nsp,
                  data: t.data,
                  id: t.id,
              })
            : [this.encodeAsString(t)];
    }
    encodeAsString(t) {
        let n = "" + t.type;
        return (
            (t.type === ge.BINARY_EVENT || t.type === ge.BINARY_ACK) &&
                (n += t.attachments + "-"),
            t.nsp && t.nsp !== "/" && (n += t.nsp + ","),
            t.id != null && (n += t.id),
            t.data != null && (n += JSON.stringify(t.data, this.replacer)),
            n
        );
    }
    encodeAsBinary(t) {
        const n = Y5(t),
            r = this.encodeAsString(n.packet),
            o = n.buffers;
        return o.unshift(r), o;
    }
}
class Ip extends rt {
    constructor(t) {
        super(), (this.reviver = t);
    }
    add(t) {
        let n;
        if (typeof t == "string") {
            if (this.reconstructor)
                throw new Error(
                    "got plaintext data when reconstructing a packet"
                );
            n = this.decodeString(t);
            const r = n.type === ge.BINARY_EVENT;
            r || n.type === ge.BINARY_ACK
                ? ((n.type = r ? ge.EVENT : ge.ACK),
                  (this.reconstructor = new Z5(n)),
                  n.attachments === 0 && super.emitReserved("decoded", n))
                : super.emitReserved("decoded", n);
        } else if (Tp(t) || t.base64)
            if (this.reconstructor)
                (n = this.reconstructor.takeBinaryData(t)),
                    n &&
                        ((this.reconstructor = null),
                        super.emitReserved("decoded", n));
            else
                throw new Error(
                    "got binary data when not reconstructing a packet"
                );
        else throw new Error("Unknown type: " + t);
    }
    decodeString(t) {
        let n = 0;
        const r = { type: Number(t.charAt(0)) };
        if (ge[r.type] === void 0)
            throw new Error("unknown packet type " + r.type);
        if (r.type === ge.BINARY_EVENT || r.type === ge.BINARY_ACK) {
            const i = n + 1;
            for (; t.charAt(++n) !== "-" && n != t.length; );
            const s = t.substring(i, n);
            if (s != Number(s) || t.charAt(n) !== "-")
                throw new Error("Illegal attachments");
            r.attachments = Number(s);
        }
        if (t.charAt(n + 1) === "/") {
            const i = n + 1;
            for (; ++n && !(t.charAt(n) === "," || n === t.length); );
            r.nsp = t.substring(i, n);
        } else r.nsp = "/";
        const o = t.charAt(n + 1);
        if (o !== "" && Number(o) == o) {
            const i = n + 1;
            for (; ++n; ) {
                const s = t.charAt(n);
                if (s == null || Number(s) != s) {
                    --n;
                    break;
                }
                if (n === t.length) break;
            }
            r.id = Number(t.substring(i, n + 1));
        }
        if (t.charAt(++n)) {
            const i = this.tryParse(t.substr(n));
            if (Ip.isPayloadValid(r.type, i)) r.data = i;
            else throw new Error("invalid payload");
        }
        return r;
    }
    tryParse(t) {
        try {
            return JSON.parse(t, this.reviver);
        } catch {
            return !1;
        }
    }
    static isPayloadValid(t, n) {
        switch (t) {
            case ge.CONNECT:
                return typeof n == "object";
            case ge.DISCONNECT:
                return n === void 0;
            case ge.CONNECT_ERROR:
                return typeof n == "string" || typeof n == "object";
            case ge.EVENT:
            case ge.BINARY_EVENT:
                return Array.isArray(n) && n.length > 0;
            case ge.ACK:
            case ge.BINARY_ACK:
                return Array.isArray(n);
        }
    }
    destroy() {
        this.reconstructor &&
            (this.reconstructor.finishedReconstruction(),
            (this.reconstructor = null));
    }
}
class Z5 {
    constructor(t) {
        (this.packet = t), (this.buffers = []), (this.reconPack = t);
    }
    takeBinaryData(t) {
        if (
            (this.buffers.push(t),
            this.buffers.length === this.reconPack.attachments)
        ) {
            const n = X5(this.reconPack, this.buffers);
            return this.finishedReconstruction(), n;
        }
        return null;
    }
    finishedReconstruction() {
        (this.reconPack = null), (this.buffers = []);
    }
}
const eM = Object.freeze(
    Object.defineProperty(
        {
            __proto__: null,
            Decoder: Ip,
            Encoder: J5,
            get PacketType() {
                return ge;
            },
            protocol: Q5,
        },
        Symbol.toStringTag,
        { value: "Module" }
    )
);
function pn(e, t, n) {
    return (
        e.on(t, n),
        function () {
            e.off(t, n);
        }
    );
}
const tM = Object.freeze({
    connect: 1,
    connect_error: 1,
    disconnect: 1,
    disconnecting: 1,
    newListener: 1,
    removeListener: 1,
});
class Q1 extends rt {
    constructor(t, n, r) {
        super(),
            (this.connected = !1),
            (this.receiveBuffer = []),
            (this.sendBuffer = []),
            (this.ids = 0),
            (this.acks = {}),
            (this.flags = {}),
            (this.io = t),
            (this.nsp = n),
            r && r.auth && (this.auth = r.auth),
            this.io._autoConnect && this.open();
    }
    get disconnected() {
        return !this.connected;
    }
    subEvents() {
        if (this.subs) return;
        const t = this.io;
        this.subs = [
            pn(t, "open", this.onopen.bind(this)),
            pn(t, "packet", this.onpacket.bind(this)),
            pn(t, "error", this.onerror.bind(this)),
            pn(t, "close", this.onclose.bind(this)),
        ];
    }
    get active() {
        return !!this.subs;
    }
    connect() {
        return this.connected
            ? this
            : (this.subEvents(),
              this.io._reconnecting || this.io.open(),
              this.io._readyState === "open" && this.onopen(),
              this);
    }
    open() {
        return this.connect();
    }
    send(...t) {
        return t.unshift("message"), this.emit.apply(this, t), this;
    }
    emit(t, ...n) {
        if (tM.hasOwnProperty(t))
            throw new Error('"' + t.toString() + '" is a reserved event name');
        n.unshift(t);
        const r = { type: ge.EVENT, data: n };
        if (
            ((r.options = {}),
            (r.options.compress = this.flags.compress !== !1),
            typeof n[n.length - 1] == "function")
        ) {
            const s = this.ids++,
                a = n.pop();
            this._registerAckCallback(s, a), (r.id = s);
        }
        const o =
            this.io.engine &&
            this.io.engine.transport &&
            this.io.engine.transport.writable;
        return (
            (this.flags.volatile && (!o || !this.connected)) ||
                (this.connected
                    ? (this.notifyOutgoingListeners(r), this.packet(r))
                    : this.sendBuffer.push(r)),
            (this.flags = {}),
            this
        );
    }
    _registerAckCallback(t, n) {
        const r = this.flags.timeout;
        if (r === void 0) {
            this.acks[t] = n;
            return;
        }
        const o = this.io.setTimeoutFn(() => {
            delete this.acks[t];
            for (let i = 0; i < this.sendBuffer.length; i++)
                this.sendBuffer[i].id === t && this.sendBuffer.splice(i, 1);
            n.call(this, new Error("operation has timed out"));
        }, r);
        this.acks[t] = (...i) => {
            this.io.clearTimeoutFn(o), n.apply(this, [null, ...i]);
        };
    }
    packet(t) {
        (t.nsp = this.nsp), this.io._packet(t);
    }
    onopen() {
        typeof this.auth == "function"
            ? this.auth((t) => {
                  this.packet({ type: ge.CONNECT, data: t });
              })
            : this.packet({ type: ge.CONNECT, data: this.auth });
    }
    onerror(t) {
        this.connected || this.emitReserved("connect_error", t);
    }
    onclose(t, n) {
        (this.connected = !1),
            delete this.id,
            this.emitReserved("disconnect", t, n);
    }
    onpacket(t) {
        if (t.nsp === this.nsp)
            switch (t.type) {
                case ge.CONNECT:
                    if (t.data && t.data.sid) {
                        const o = t.data.sid;
                        this.onconnect(o);
                    } else
                        this.emitReserved(
                            "connect_error",
                            new Error(
                                "It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"
                            )
                        );
                    break;
                case ge.EVENT:
                case ge.BINARY_EVENT:
                    this.onevent(t);
                    break;
                case ge.ACK:
                case ge.BINARY_ACK:
                    this.onack(t);
                    break;
                case ge.DISCONNECT:
                    this.ondisconnect();
                    break;
                case ge.CONNECT_ERROR:
                    this.destroy();
                    const r = new Error(t.data.message);
                    (r.data = t.data.data),
                        this.emitReserved("connect_error", r);
                    break;
            }
    }
    onevent(t) {
        const n = t.data || [];
        t.id != null && n.push(this.ack(t.id)),
            this.connected
                ? this.emitEvent(n)
                : this.receiveBuffer.push(Object.freeze(n));
    }
    emitEvent(t) {
        if (this._anyListeners && this._anyListeners.length) {
            const n = this._anyListeners.slice();
            for (const r of n) r.apply(this, t);
        }
        super.emit.apply(this, t);
    }
    ack(t) {
        const n = this;
        let r = !1;
        return function (...o) {
            r || ((r = !0), n.packet({ type: ge.ACK, id: t, data: o }));
        };
    }
    onack(t) {
        const n = this.acks[t.id];
        typeof n == "function" &&
            (n.apply(this, t.data), delete this.acks[t.id]);
    }
    onconnect(t) {
        (this.id = t),
            (this.connected = !0),
            this.emitBuffered(),
            this.emitReserved("connect");
    }
    emitBuffered() {
        this.receiveBuffer.forEach((t) => this.emitEvent(t)),
            (this.receiveBuffer = []),
            this.sendBuffer.forEach((t) => {
                this.notifyOutgoingListeners(t), this.packet(t);
            }),
            (this.sendBuffer = []);
    }
    ondisconnect() {
        this.destroy(), this.onclose("io server disconnect");
    }
    destroy() {
        this.subs && (this.subs.forEach((t) => t()), (this.subs = void 0)),
            this.io._destroy(this);
    }
    disconnect() {
        return (
            this.connected && this.packet({ type: ge.DISCONNECT }),
            this.destroy(),
            this.connected && this.onclose("io client disconnect"),
            this
        );
    }
    close() {
        return this.disconnect();
    }
    compress(t) {
        return (this.flags.compress = t), this;
    }
    get volatile() {
        return (this.flags.volatile = !0), this;
    }
    timeout(t) {
        return (this.flags.timeout = t), this;
    }
    onAny(t) {
        return (
            (this._anyListeners = this._anyListeners || []),
            this._anyListeners.push(t),
            this
        );
    }
    prependAny(t) {
        return (
            (this._anyListeners = this._anyListeners || []),
            this._anyListeners.unshift(t),
            this
        );
    }
    offAny(t) {
        if (!this._anyListeners) return this;
        if (t) {
            const n = this._anyListeners;
            for (let r = 0; r < n.length; r++)
                if (t === n[r]) return n.splice(r, 1), this;
        } else this._anyListeners = [];
        return this;
    }
    listenersAny() {
        return this._anyListeners || [];
    }
    onAnyOutgoing(t) {
        return (
            (this._anyOutgoingListeners = this._anyOutgoingListeners || []),
            this._anyOutgoingListeners.push(t),
            this
        );
    }
    prependAnyOutgoing(t) {
        return (
            (this._anyOutgoingListeners = this._anyOutgoingListeners || []),
            this._anyOutgoingListeners.unshift(t),
            this
        );
    }
    offAnyOutgoing(t) {
        if (!this._anyOutgoingListeners) return this;
        if (t) {
            const n = this._anyOutgoingListeners;
            for (let r = 0; r < n.length; r++)
                if (t === n[r]) return n.splice(r, 1), this;
        } else this._anyOutgoingListeners = [];
        return this;
    }
    listenersAnyOutgoing() {
        return this._anyOutgoingListeners || [];
    }
    notifyOutgoingListeners(t) {
        if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
            const n = this._anyOutgoingListeners.slice();
            for (const r of n) r.apply(this, t.data);
        }
    }
}
function hi(e) {
    (e = e || {}),
        (this.ms = e.min || 100),
        (this.max = e.max || 1e4),
        (this.factor = e.factor || 2),
        (this.jitter = e.jitter > 0 && e.jitter <= 1 ? e.jitter : 0),
        (this.attempts = 0);
}
hi.prototype.duration = function () {
    var e = this.ms * Math.pow(this.factor, this.attempts++);
    if (this.jitter) {
        var t = Math.random(),
            n = Math.floor(t * this.jitter * e);
        e = Math.floor(t * 10) & 1 ? e + n : e - n;
    }
    return Math.min(e, this.max) | 0;
};
hi.prototype.reset = function () {
    this.attempts = 0;
};
hi.prototype.setMin = function (e) {
    this.ms = e;
};
hi.prototype.setMax = function (e) {
    this.max = e;
};
hi.prototype.setJitter = function (e) {
    this.jitter = e;
};
class Bd extends rt {
    constructor(t, n) {
        var r;
        super(),
            (this.nsps = {}),
            (this.subs = []),
            t && typeof t == "object" && ((n = t), (t = void 0)),
            (n = n || {}),
            (n.path = n.path || "/socket.io"),
            (this.opts = n),
            Ru(this, n),
            this.reconnection(n.reconnection !== !1),
            this.reconnectionAttempts(n.reconnectionAttempts || 1 / 0),
            this.reconnectionDelay(n.reconnectionDelay || 1e3),
            this.reconnectionDelayMax(n.reconnectionDelayMax || 5e3),
            this.randomizationFactor(
                (r = n.randomizationFactor) !== null && r !== void 0 ? r : 0.5
            ),
            (this.backoff = new hi({
                min: this.reconnectionDelay(),
                max: this.reconnectionDelayMax(),
                jitter: this.randomizationFactor(),
            })),
            this.timeout(n.timeout == null ? 2e4 : n.timeout),
            (this._readyState = "closed"),
            (this.uri = t);
        const o = n.parser || eM;
        (this.encoder = new o.Encoder()),
            (this.decoder = new o.Decoder()),
            (this._autoConnect = n.autoConnect !== !1),
            this._autoConnect && this.open();
    }
    reconnection(t) {
        return arguments.length
            ? ((this._reconnection = !!t), this)
            : this._reconnection;
    }
    reconnectionAttempts(t) {
        return t === void 0
            ? this._reconnectionAttempts
            : ((this._reconnectionAttempts = t), this);
    }
    reconnectionDelay(t) {
        var n;
        return t === void 0
            ? this._reconnectionDelay
            : ((this._reconnectionDelay = t),
              (n = this.backoff) === null || n === void 0 || n.setMin(t),
              this);
    }
    randomizationFactor(t) {
        var n;
        return t === void 0
            ? this._randomizationFactor
            : ((this._randomizationFactor = t),
              (n = this.backoff) === null || n === void 0 || n.setJitter(t),
              this);
    }
    reconnectionDelayMax(t) {
        var n;
        return t === void 0
            ? this._reconnectionDelayMax
            : ((this._reconnectionDelayMax = t),
              (n = this.backoff) === null || n === void 0 || n.setMax(t),
              this);
    }
    timeout(t) {
        return arguments.length ? ((this._timeout = t), this) : this._timeout;
    }
    maybeReconnectOnOpen() {
        !this._reconnecting &&
            this._reconnection &&
            this.backoff.attempts === 0 &&
            this.reconnect();
    }
    open(t) {
        if (~this._readyState.indexOf("open")) return this;
        this.engine = new Br(this.uri, this.opts);
        const n = this.engine,
            r = this;
        (this._readyState = "opening"), (this.skipReconnect = !1);
        const o = pn(n, "open", function () {
                r.onopen(), t && t();
            }),
            i = pn(n, "error", (s) => {
                r.cleanup(),
                    (r._readyState = "closed"),
                    this.emitReserved("error", s),
                    t ? t(s) : r.maybeReconnectOnOpen();
            });
        if (this._timeout !== !1) {
            const s = this._timeout;
            s === 0 && o();
            const a = this.setTimeoutFn(() => {
                o(), n.close(), n.emit("error", new Error("timeout"));
            }, s);
            this.opts.autoUnref && a.unref(),
                this.subs.push(function () {
                    clearTimeout(a);
                });
        }
        return this.subs.push(o), this.subs.push(i), this;
    }
    connect(t) {
        return this.open(t);
    }
    onopen() {
        this.cleanup(), (this._readyState = "open"), this.emitReserved("open");
        const t = this.engine;
        this.subs.push(
            pn(t, "ping", this.onping.bind(this)),
            pn(t, "data", this.ondata.bind(this)),
            pn(t, "error", this.onerror.bind(this)),
            pn(t, "close", this.onclose.bind(this)),
            pn(this.decoder, "decoded", this.ondecoded.bind(this))
        );
    }
    onping() {
        this.emitReserved("ping");
    }
    ondata(t) {
        try {
            this.decoder.add(t);
        } catch (n) {
            this.onclose("parse error", n);
        }
    }
    ondecoded(t) {
        Y1(() => {
            this.emitReserved("packet", t);
        }, this.setTimeoutFn);
    }
    onerror(t) {
        this.emitReserved("error", t);
    }
    socket(t, n) {
        let r = this.nsps[t];
        return r || ((r = new Q1(this, t, n)), (this.nsps[t] = r)), r;
    }
    _destroy(t) {
        const n = Object.keys(this.nsps);
        for (const r of n) if (this.nsps[r].active) return;
        this._close();
    }
    _packet(t) {
        const n = this.encoder.encode(t);
        for (let r = 0; r < n.length; r++) this.engine.write(n[r], t.options);
    }
    cleanup() {
        this.subs.forEach((t) => t()),
            (this.subs.length = 0),
            this.decoder.destroy();
    }
    _close() {
        (this.skipReconnect = !0),
            (this._reconnecting = !1),
            this.onclose("forced close"),
            this.engine && this.engine.close();
    }
    disconnect() {
        return this._close();
    }
    onclose(t, n) {
        this.cleanup(),
            this.backoff.reset(),
            (this._readyState = "closed"),
            this.emitReserved("close", t, n),
            this._reconnection && !this.skipReconnect && this.reconnect();
    }
    reconnect() {
        if (this._reconnecting || this.skipReconnect) return this;
        const t = this;
        if (this.backoff.attempts >= this._reconnectionAttempts)
            this.backoff.reset(),
                this.emitReserved("reconnect_failed"),
                (this._reconnecting = !1);
        else {
            const n = this.backoff.duration();
            this._reconnecting = !0;
            const r = this.setTimeoutFn(() => {
                t.skipReconnect ||
                    (this.emitReserved("reconnect_attempt", t.backoff.attempts),
                    !t.skipReconnect &&
                        t.open((o) => {
                            o
                                ? ((t._reconnecting = !1),
                                  t.reconnect(),
                                  this.emitReserved("reconnect_error", o))
                                : t.onreconnect();
                        }));
            }, n);
            this.opts.autoUnref && r.unref(),
                this.subs.push(function () {
                    clearTimeout(r);
                });
        }
    }
    onreconnect() {
        const t = this.backoff.attempts;
        (this._reconnecting = !1),
            this.backoff.reset(),
            this.emitReserved("reconnect", t);
    }
}
const Mi = {};
function _a(e, t) {
    typeof e == "object" && ((t = e), (e = void 0)), (t = t || {});
    const n = V5(e, t.path || "/socket.io"),
        r = n.source,
        o = n.id,
        i = n.path,
        s = Mi[o] && i in Mi[o].nsps,
        a = t.forceNew || t["force new connection"] || t.multiplex === !1 || s;
    let l;
    return (
        a ? (l = new Bd(r, t)) : (Mi[o] || (Mi[o] = new Bd(r, t)), (l = Mi[o])),
        n.query && !t.query && (t.query = n.queryKey),
        l.socket(n.path, t)
    );
}
Object.assign(_a, { Manager: Bd, Socket: Q1, io: _a, connect: _a });
let J1;
J1 = _a();
const De = J1;
function nM() {
    const [e, t] = b.useState(!1),
        [n, r] = b.useState(null),
        [o, i] = b.useState(null),
        [s, a] = b.useState(!1),
        [l] = M0(),
        u = Boolean(o),
        d = (C) => {
            i(C.currentTarget);
        },
        f = () => {
            i(null);
        },
        c = zs(),
        h = b.useMemo(
            () => ({ roomId: l.get("roomId"), pid: l.get("pid") }),
            [l]
        );
    b.useEffect(
        () => (
            De.emit("get-game-state", h.roomId),
            De.on("game-state-update", (C) => {
                r(C);
            }),
            De.on("player-joined", (C) => {
                console.log(`Player joined: ${C.name}`);
            }),
            De.on("player-left", (C) => {
                console.log(`Player left: ${C.name}`);
            }),
            De.on("left-game", () => {
                c("/");
            }),
            De.on("change-player", (C) => {
                c(`/select-player?roomId=${C}`);
            }),
            () => {
                De.removeAllListeners();
            }
        ),
        [h]
    );
    function g() {
        t((C) => !C);
    }
    function p(C) {
        De.emit("decrement-stat", h.roomId, h.pid, C);
    }
    function S(C) {
        De.emit("increment-stat", h.roomId, h.pid, C);
    }
    function y(C) {
        C ? a(!0) : De.emit("use-ability", h.roomId, h.pid);
    }
    function m(C) {
        De.emit("clock-phase", h.roomId, C);
    }
    function v() {
        De.emit("change-player", h.roomId, h.pid);
    }
    function x(C, T) {
        De.emit("heal-player", h.roomId, C, T),
            De.emit("use-ability", h.roomId, h.pid);
    }
    function k() {
        De.emit("leave-game", h.roomId, h.pid);
    }
    if (!n) return null;
    const R = n.players.find((C) => C.id === h.pid);
    return te(ao, {
        elevation: 0,
        square: !0,
        sx: {
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            color: "text.secondary",
            backgroundColor: "primary.main",
        },
        children: [
            te(GO, {
                sx: { paddingRight: 1 },
                children: [
                    E(We, { variant: "h4", sx: { flex: 1 }, children: R.name }),
                    E(Go, {
                        onClick: d,
                        sx: { color: "text.secondary" },
                        children: E(s5, { fontSize: "medium" }),
                    }),
                    te(I1, {
                        anchorEl: o,
                        open: u,
                        onClose: f,
                        children: [
                            te(We, {
                                sx: {
                                    p: 1,
                                    textAlign: "center",
                                    width: "100%",
                                },
                                component: "div",
                                variant: "button",
                                children: ["Room ID: ", h.roomId],
                            }),
                            E(yo, {}),
                            E(wg, { onClick: v, children: "Change Character" }),
                            E(wg, { onClick: k, children: "Leave Game" }),
                        ],
                    }),
                ],
            }),
            E(yo, { sx: { m: "auto", width: "80%", borderBottomWidth: 1 } }),
            te(L$, {
                disableGutters: !0,
                elevation: 0,
                sx: {
                    backgroundColor: "primary.main",
                    "&:before": { display: "none" },
                },
                children: [
                    E(mT, {
                        expandIcon: E(r5, {}),
                        children: E(We, { children: R.title }),
                    }),
                    te(W$, {
                        children: [
                            E(We, { children: R.abilityDescription }),
                            E(yo, { sx: { my: 1 } }),
                            E(We, {
                                sx: { mt: 1 },
                                fontWeight: 500,
                                children: "Starting Items:",
                            }),
                            E(We, { children: R.startingItems }),
                        ],
                    }),
                ],
            }),
            te(ze, {
                display: "flex",
                flexWrap: "wrap",
                children: [
                    E(pa, {
                        name: `Sanity (${R.maxSanity})`,
                        onIncrement: () => S("sanity"),
                        onDecrement: () => p("sanity"),
                        value: R.sanity,
                    }),
                    E(yo, { orientation: "vertical", flexItem: !0 }),
                    E(pa, {
                        name: `Stamina (${R.maxStamina})`,
                        onIncrement: () => S("stamina"),
                        onDecrement: () => p("stamina"),
                        value: R.stamina,
                    }),
                ],
            }),
            te(ze, {
                flex: 1,
                p: 1,
                children: [
                    E(ze, {
                        sx: { p: 2, display: "flex", justifyContent: "center" },
                        children: E(f5, { currentHour: n.clock }),
                    }),
                    te(ze, {
                        display: "flex",
                        justifyContent: "space-between",
                        px: 8,
                        children: [
                            E(Go, {
                                onClick: () => m("back"),
                                sx: {
                                    backgroundColor: "primary.dark",
                                    color: "text.secondary",
                                },
                                children: E(l5, { fontSize: "large" }),
                            }),
                            E(Go, {
                                onClick: () => m("forward"),
                                sx: {
                                    backgroundColor: "primary.dark",
                                    color: "text.secondary",
                                },
                                children: E(d5, { fontSize: "large" }),
                            }),
                        ],
                    }),
                ],
            }),
            R.hasDailyAbility && E(iM, { player: R, onClick: y }),
            te(ze, {
                display: "flex",
                flexWrap: "wrap",
                children: [
                    E(pa, {
                        name: "Clue Notes",
                        onIncrement: () => S("clueTokens"),
                        onDecrement: () => p("clueTokens"),
                        value: R.clueTokens,
                    }),
                    E(yo, { orientation: "vertical", flexItem: !0 }),
                    E(pa, {
                        name: "Elder Signs",
                        onIncrement: () => S("elderSigns"),
                        onDecrement: () => p("elderSigns"),
                        value: R.elderSigns,
                    }),
                ],
            }),
            E(rM, { open: e, onClose: g, players: n.players }),
            E(ze, {
                p: 1,
                width: 1,
                display: "flex",
                children: E(ro, {
                    fullWidth: !0,
                    variant: "contained",
                    sx: { backgroundColor: "primary.dark" },
                    onClick: g,
                    children: "View Players",
                }),
            }),
            E(oM, {
                open: s,
                onClose: () => a(!1),
                players: n.players,
                player: R,
                onPlayerSelect: x,
            }),
        ],
    });
}
function rM({ open: e, onClose: t, players: n }) {
    const r = b.useMemo(() => n.reduce((o, i) => (o += +i.elderSigns), 0), [n]);
    return te(h3, {
        anchor: "bottom",
        open: e,
        onClose: t,
        children: [
            E($p, {
                spacing: 1,
                p: 2,
                children: n.map((o) =>
                    te(
                        ze,
                        {
                            children: [
                                E(We, {
                                    variant: "h6",
                                    component: "p",
                                    children: o.name,
                                }),
                                te(ze, {
                                    sx: { display: "flex" },
                                    children: [
                                        te(ze, {
                                            sx: {
                                                textAlign: "center",
                                                flex: 1,
                                            },
                                            children: [
                                                E(L1, {}),
                                                te(We, {
                                                    children: [
                                                        o.sanity,
                                                        " (",
                                                        o.maxSanity,
                                                        ")",
                                                    ],
                                                }),
                                            ],
                                        }),
                                        te(ze, {
                                            sx: {
                                                textAlign: "center",
                                                flex: 1,
                                            },
                                            children: [
                                                E(o5, {}),
                                                te(We, {
                                                    children: [
                                                        o.stamina,
                                                        " (",
                                                        o.maxStamina,
                                                        ")",
                                                    ],
                                                }),
                                            ],
                                        }),
                                        te(ze, {
                                            sx: {
                                                textAlign: "center",
                                                flex: 1,
                                            },
                                            children: [
                                                E(u5, {}),
                                                E(We, {
                                                    children: o.clueTokens,
                                                }),
                                            ],
                                        }),
                                        te(ze, {
                                            sx: {
                                                textAlign: "center",
                                                flex: 1,
                                            },
                                            children: [
                                                E(c5, {}),
                                                E(We, {
                                                    children: o.elderSigns,
                                                }),
                                            ],
                                        }),
                                        E(ze, {
                                            sx: {
                                                textAlign: "center",
                                                flex: 1,
                                            },
                                            children:
                                                o.hasDailyAbility &&
                                                te(Rb, {
                                                    children: [
                                                        E(n5, {}),
                                                        E(We, {
                                                            children:
                                                                o.usedDailyAbility
                                                                    ? "No"
                                                                    : "Yes",
                                                        }),
                                                    ],
                                                }),
                                        }),
                                    ],
                                }),
                            ],
                        },
                        o.id
                    )
                ),
            }),
            te(ze, {
                sx: {
                    display: "flex",
                    p: 2,
                    alignItems: "center",
                    borderTop: "1px solid",
                },
                children: [
                    te(We, {
                        sx: { display: "block", flex: 1 },
                        children: ["Total Elder Signs: ", r],
                    }),
                    E(ro, {
                        onClick: t,
                        variant: "contained",
                        sx: { backgroundColor: "primary.dark", flex: 1 },
                        children: "Close",
                    }),
                ],
            }),
        ],
    });
}
function oM({ open: e, onClose: t, onPlayerSelect: n, players: r, player: o }) {
    if (!o || !o.hasDailyAbility) return null;
    const i = o.dailyAbility.split(":")[1];
    function s(a, l) {
        const u = l === "sanity";
        return {
            maxStat: u ? a.maxSanity : a.maxStamina,
            currentStat: u ? a.sanity : a.stamina,
            icon: u ? E(L1, {}) : E(i5, {}),
        };
    }
    return te(BI, {
        open: e,
        onClose: t,
        children: [
            te(KI, {
                children: [
                    "Which Players ",
                    E("u", { children: o.dailyAbility.split(":")[1] }),
                    " do you want to heal?",
                ],
            }),
            E(P1, {
                children: r.map((a) => {
                    const { maxStat: l, currentStat: u, icon: d } = s(a, i);
                    return E(
                        mg,
                        {
                            secondaryAction: E(Go, {
                                disabled: u === l,
                                onClick: () => {
                                    n(a.id, i), t();
                                },
                                children: d,
                            }),
                            children: E(mg, {
                                children: E($4, {
                                    primary: `${a.name} (${u})`,
                                    secondary: `Max ${i} ${l}`,
                                }),
                            }),
                        },
                        a.id
                    );
                }),
            }),
        ],
    });
}
function iM({ player: e, onClick: t }) {
    let n = "",
        r = !1;
    return (
        e.dailyAbility.includes("heal")
            ? ((n = "Heal"), (r = !0))
            : e.dailyAbility.includes("roll") && (n = "Re-Roll 2 Dice"),
        E(ze, {
            p: 1,
            children: E(ro, {
                disabled: e.usedDailyAbility,
                fullWidth: !0,
                variant: "contained",
                sx: { backgroundColor: "primary.dark" },
                onClick: () => t(r),
                children: n,
            }),
        })
    );
}
function pa(e) {
    return te(ze, {
        sx: {
            display: "flex",
            flex: 1,
            alignItems: "center",
            flexDirection: "column",
            backgroundColor: "primary.dark",
            color: "#C59849",
            py: 1,
        },
        children: [
            E(We, { variant: "h4", component: "p", children: e.name }),
            te(ze, {
                display: "flex",
                alignItems: "center",
                children: [
                    E(Go, {
                        href: "",
                        sx: { color: "text.secondary" },
                        onClick: e.onDecrement,
                        children: E(a5, {}),
                    }),
                    E(We, {
                        variant: "h2",
                        component: "p",
                        sx: { mx: 1, fontWeight: 500 },
                        children: e.value,
                    }),
                    E(Go, {
                        href: "",
                        sx: { color: "text.secondary" },
                        onClick: e.onIncrement,
                        children: E(t5, {}),
                    }),
                ],
            }),
        ],
    });
}
function sM() {
    b.useState(!1);
    const [e, t] = b.useState(""),
        n = zs();
    b.useEffect(
        () => (
            De.on("joined-room", (s) => {
                n(`select-player?roomId=${s}`);
            }),
            () => {
                De.removeAllListeners();
            }
        ),
        []
    );
    function r() {
        De.emit("create-room", e);
    }
    function o() {
        De.emit("join-room", e);
    }
    function i(s) {
        s.target.value.length > 4 || t(s.target.value.toUpperCase());
    }
    return te(v1, {
        sx: {
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
        },
        maxWidth: "sm",
        children: [
            E(ze, {
                sx: { p: 2, textAlign: "center" },
                children: E(We, {
                    color: "text.secondary",
                    variant: "h3",
                    component: "h1",
                    children: "Elder Sign Companion",
                }),
            }),
            te($p, {
                sx: { width: 1, color: "text.secondary" },
                spacing: 2,
                children: [
                    E(e5, {
                        inputProps: {
                            style: { textAlign: "center", fontSize: "large" },
                        },
                        autoComplete: "off",
                        value: e,
                        placeholder: "Room ID",
                        name: "roomId",
                        onChange: i,
                    }),
                    E(ro, {
                        fullWidth: !0,
                        variant: "contained",
                        color: "primary",
                        size: "large",
                        onClick: o,
                        children: "Join Game",
                    }),
                    E(ze, {
                        children: E(yo, { children: E(zT, { label: "OR" }) }),
                    }),
                    E(ro, {
                        fullWidth: !0,
                        size: "large",
                        variant: "contained",
                        color: "primary",
                        onClick: r,
                        children: "New Game",
                    }),
                ],
            }),
        ],
    });
}
function aM() {
    const [e, t] = b.useState([]),
        [n] = M0(),
        r = zs();
    b.useEffect(
        () => (
            De.emit("get-player-list", n.get("roomId")),
            De.on("player-list", (i) => {
                t(i);
            }),
            De.on("player-added", (i) => {
                r(`/game?roomId=${n.get("roomId")}&pid=${i.id}`);
            }),
            () => {
                De.removeAllListeners();
            }
        ),
        [n]
    );
    function o(i) {
        De.emit("select-player", { roomId: n.get("roomId"), playerId: i });
    }
    return te(v1, {
        maxWidth: "sm",
        children: [
            E(ze, {
                p: 2,
                children: E(We, {
                    textAlign: "center",
                    variant: "h3",
                    component: "h1",
                    children: "Select Investigator",
                }),
            }),
            E($p, {
                spacing: 1,
                children: e.map((i) =>
                    E(
                        ro,
                        {
                            variant: "contained",
                            disabled: i.selected,
                            sx: { textAlign: "center" },
                            onClick: () => o(i.id),
                            children: i.name,
                        },
                        i.id
                    )
                ),
            }),
        ],
    });
}
const lM = Xk([
    { path: "/", element: E(sM, {}), errorElement: E(bc, {}) },
    { path: "/select-player", element: E(aM, {}), errorElement: E(bc, {}) },
    { path: "/game", element: E(nM, {}), errorElement: E(bc, {}) },
]);
let Ud = vp({
    palette: {
        mode: "dark",
        primary: { light: "#C59849", main: "#4C443C", dark: "#282828" },
        secondary: { main: "#322214", contrastText: "#C59849" },
    },
});
Ud = CP(Ud);
const uM = Ud;
let ha;
const cM = new Uint8Array(16);
function dM() {
    if (
        !ha &&
        ((ha =
            typeof crypto < "u" &&
            crypto.getRandomValues &&
            crypto.getRandomValues.bind(crypto)),
        !ha)
    )
        throw new Error(
            "crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported"
        );
    return ha(cM);
}
const ft = [];
for (let e = 0; e < 256; ++e) ft.push((e + 256).toString(16).slice(1));
function fM(e, t = 0) {
    return (
        ft[e[t + 0]] +
        ft[e[t + 1]] +
        ft[e[t + 2]] +
        ft[e[t + 3]] +
        "-" +
        ft[e[t + 4]] +
        ft[e[t + 5]] +
        "-" +
        ft[e[t + 6]] +
        ft[e[t + 7]] +
        "-" +
        ft[e[t + 8]] +
        ft[e[t + 9]] +
        "-" +
        ft[e[t + 10]] +
        ft[e[t + 11]] +
        ft[e[t + 12]] +
        ft[e[t + 13]] +
        ft[e[t + 14]] +
        ft[e[t + 15]]
    ).toLowerCase();
}
const pM =
        typeof crypto < "u" &&
        crypto.randomUUID &&
        crypto.randomUUID.bind(crypto),
    Lg = { randomUUID: pM };
function hM(e, t, n) {
    if (Lg.randomUUID && !t && !e) return Lg.randomUUID();
    e = e || {};
    const r = e.random || (e.rng || dM)();
    if (((r[6] = (r[6] & 15) | 64), (r[8] = (r[8] & 63) | 128), t)) {
        n = n || 0;
        for (let o = 0; o < 16; ++o) t[n + o] = r[o];
        return t;
    }
    return fM(r);
}
let Na = localStorage.getItem("elderSignId");
Na || ((Na = hM()), localStorage.setItem("elderSignId", Na));
De.emit("connect-user", Na);
xc.createRoot(document.getElementById("root")).render(
    E(en.StrictMode, {
        children: te(BR, {
            theme: uM,
            children: [
                E(kI, {}),
                E(mS, { store: AC, children: E(Hk, { router: lM }) }),
            ],
        }),
    })
);
